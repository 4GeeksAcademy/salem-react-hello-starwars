// Centralized Star Wars data for the entire application
export const starWarsData = {
  characters: [
    {
      id: 1,
      name: "Luke Skywalker",
      gender: "Male",
      hair: "Blond",
      eyes: "Blue",
      height: "172",
      mass: "77",
      birthYear: "19BBY",
      type: "character",
    },
    {
      id: 2,
      name: "Leia Organa",
      gender: "Female",
      hair: "Brown",
      eyes: "Brown",
      height: "150",
      mass: "49",
      birthYear: "19BBY",
      type: "character",
    },
    {
      id: 3,
      name: "Han Solo",
      gender: "Male",
      hair: "Brown",
      eyes: "Brown",
      height: "180",
      mass: "80",
      birthYear: "29BBY",
      type: "character",
    },
    {
      id: 4,
      name: "Darth Vader",
      gender: "Male",
      hair: "None",
      eyes: "Yellow",
      height: "202",
      mass: "136",
      birthYear: "41.9BBY",
      type: "character",
    },
  ],
  planets: [
    {
      id: 5,
      name: "Tatooine",
      climate: "Arid",
      terrain: "Desert",
      population: "200000",
      diameter: "10465",
      rotationPeriod: "23",
      type: "planet",
    },
    {
      id: 6,
      name: "Alderaan",
      climate: "Temperate",
      terrain: "Grasslands, Mountains",
      population: "2000000000",
      diameter: "12500",
      rotationPeriod: "24",
      type: "planet",
    },
    {
      id: 7,
      name: "Hoth",
      climate: "Frozen",
      terrain: "Tundra, Ice Caves",
      population: "Unknown",
      diameter: "7200",
      rotationPeriod: "23",
      type: "planet",
    },
    {
      id: 8,
      name: "Endor",
      climate: "Temperate",
      terrain: "Forests, Mountains",
      population: "30000000",
      diameter: "4900",
      rotationPeriod: "18",
      type: "planet",
    },
  ],
};

// Helper function to get all data combined
export const getAllData = () => {
  return [...starWarsData.characters, ...starWarsData.planets];
};

// Helper function to find an item by ID
export const findItemById = (id) => {
  return getAllData().find((item) => item.id === parseInt(id));
};
