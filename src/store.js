export const initialStore = () => {
  return {
    message: null,
    favorites: [],
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      },
    ],
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "add_task":
      const { id, color } = action.payload;
      return {
        ...store,
        todos: store.todos.map((todo) =>
          todo.id === id ? { ...todo, background: color } : todo
        ),
      };

    case "add_favorite":
      const character = action.payload;
      // Check if already in favorites
      if (store.favorites.find((fav) => fav.id === character.id)) {
        return store; // Already in favorites, don't add again
      }
      return {
        ...store,
        favorites: [...store.favorites, character],
      };

    case "remove_favorite":
      const characterId = action.payload;
      return {
        ...store,
        favorites: store.favorites.filter((fav) => fav.id !== characterId),
      };

    default:
      throw Error("Unknown action.");
  }
}
