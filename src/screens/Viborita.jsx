import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Viborita = () => {
  // Estado del juego
  const [snake, setSnake] = useState([{ x: 0, y: 0 }]);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [direction, setDirection] = useState("RIGHT");

  // Tamaño del tablero
  const boardSize = 10; // Puedes ajustar el tamaño del tablero según tus necesidades

  // Función para mover la serpiente
  const moveSnake = () => {
    // Copia la serpiente actual
    let newSnake = [...snake];
    let head = { ...newSnake[0] };

    // Actualiza la posición de la cabeza según la dirección
    switch (direction) {
      case "UP":
        head.y -= 1;
        break;
      case "DOWN":
        head.y += 1;
        break;
      case "LEFT":
        head.x -= 1;
        break;
      case "RIGHT":
        head.x += 1;
        break;
    }

    // Hacer que la serpiente aparezca en el lado opuesto si sale de los límites
    if (head.x < 0) {
      head.x = boardSize - 1;
    } else if (head.x >= boardSize) {
      head.x = 0;
    }
    if (head.y < 0) {
      head.y = boardSize - 1;
    } else if (head.y >= boardSize) {
      head.y = 0;
    }

    // Agrega la nueva cabeza a la serpiente
    newSnake.unshift(head);

    // Verifica si la serpiente comió la comida
    if (head.x === food.x && head.y === food.y) {
      // Genera una nueva ubicación para la comida
      const newFoodX = Math.floor(Math.random() * boardSize);
      const newFoodY = Math.floor(Math.random() * boardSize);
      setFood({ x: newFoodX, y: newFoodY });
    } else {
      // Si no comió la comida, elimina la cola de la serpiente
      newSnake.pop();
    }

    // Actualiza el estado de la serpiente
    setSnake(newSnake);
  };

  // Función para controlar la dirección
  const changeDirection = (newDirection) => {
    setDirection(newDirection);
  };

  // Función para reiniciar el juego
  const resetGame = () => {
    setSnake([{ x: 0, y: 0 }]);
    setFood({ x: 5, y: 5 });
    setDirection("RIGHT");
  };

  // Efecto para manejar el movimiento de la serpiente
  useEffect(() => {
    const gameInterval = setInterval(moveSnake, 100); // Velocidad del juego en milisegundos

    return () => clearInterval(gameInterval);
  }, [snake, direction]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>La Flip 2.0 Comilona</Text>
      {/* Dibuja el tablero del juego aquí */}
      {Array.from({ length: boardSize }, (_, row) => (
        <View key={row} style={styles.row}>
          {Array.from({ length: boardSize }, (_, col) => (
            <View
              key={col}
              style={[
                styles.cell,
                {
                  backgroundColor: snake.some(
                    (segment) => segment.x === col && segment.y === row
                  )
                    ? "green" // Color de la serpiente
                    : food.x === col && food.y === row
                    ? "red" // Color de la comida
                    : "white", // Color del fondo del tablero
                },
              ]}
            />
          ))}
        </View>
      ))}
      <Text style={styles.score}>Score: {snake.length}</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.arrowButtons}>
          <TouchableOpacity
            onPress={() => changeDirection("UP")}
            style={[styles.button, { marginBottom: 10 }]}
          >
            <Text>↑</Text>
          </TouchableOpacity>
          <View style={styles.horizontalButtons}>
            <TouchableOpacity
              onPress={() => changeDirection("LEFT")}
              style={[styles.button, { marginRight: 40 }]}
            >
              <Text>←</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => changeDirection("RIGHT")}
              style={styles.button}
            >
              <Text>→</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => changeDirection("DOWN")}
            style={[styles.button, { marginTop: 10 }]}
          >
            <Text>↓</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={resetGame}
          style={[styles.button, { marginRight: 10 }]}
        >
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    width: 30, // Tamaño de las celdas del tablero
    height: 30,
    borderWidth: 1,
    borderColor: "black",
  },
  score: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: 20, // Separación adicional desde arriba
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 10,
    backgroundColor: "lightblue",
    borderRadius: 5,
  },
  arrowButtons: {
    flexDirection: "column",
    alignItems: "center",
    marginRight: 20,
  },
  horizontalButtons: {
    flexDirection: "row",
  },
});

export default Viborita;
