// src/services/gamesService.js
export const fetchGames = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: "Game 1", background_image: "game1.jpg", description_raw: "Descripcion del juego 1" },
          { id: 2, name: "Game 2", background_image: "game2.jpg", description_raw: "Descripcion del juego 2" },
          { id: 3, name: "Game 3", background_image: "game3.jpg", description_raw: "Descripcion del juego 3" },
        ]);
      }, 500);
    });
  };
  