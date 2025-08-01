import { starWarsData } from "./data/starWarsData";

export const initialStore = () => {
  return {
    favorites: [],
    starWarsData: starWarsData,
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "set_star_wars_data":
      return {
        ...store,
        starWarsData: action.payload,
      };

    case "add_favorite":
      const character = action.payload;
      if (store.favorites.find((fav) => fav.id === character.id)) {
        return store;
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
