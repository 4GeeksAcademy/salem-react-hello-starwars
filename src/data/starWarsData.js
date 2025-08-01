// Centralized Star Wars data for the entire application

// Functions to fetch real data from SWAPI
export const fetchPeople = () => {
  return fetch("https://www.swapi.tech/api/people")
    .then((response) => response.json())
    .then((data) => {
      // Get first 4 character URLs and fetch them
      const characterUrls = data.results
        .slice(0, 3)
        .map((result) => result.url);

      const characterPromises = characterUrls.map((url, index) => {
        return fetch(url)
          .then((response) => response.json())
          .then((detailData) => {
            const character = detailData.result.properties;
            return {
              id: index + 1,
              name: character.name,
              gender: character.gender,
              hair: character.hair_color,
              eyes: character.eye_color,
              height: character.height,
              mass: character.mass,
              birthYear: character.birth_year,
              type: "character",
            };
          });
      });

      return Promise.all(characterPromises);
    })
    .catch((error) => {
      console.error("Error fetching people:", error);
      throw error; // Re-throw to stop execution
    });
};

export const fetchPlanets = () => {
  return fetch("https://www.swapi.tech/api/planets")
    .then((response) => response.json())
    .then((data) => {
      // Get first 4 planet URLs and fetch them
      const planetUrls = data.results.slice(0, 3).map((result) => result.url);

      const planetPromises = planetUrls.map((url, index) => {
        return fetch(url)
          .then((response) => response.json())
          .then((detailData) => {
            const planet = detailData.result.properties;
            return {
              id: index + 5, // Start from 5 to avoid ID conflicts
              name: planet.name,
              climate: planet.climate,
              terrain: planet.terrain,
              population: planet.population,
              diameter: planet.diameter,
              rotationPeriod: planet.rotation_period,
              type: "planet",
            };
          });
      });

      return Promise.all(planetPromises);
    })
    .catch((error) => {
      console.error("Error fetching planets:", error);
      throw error; // Re-throw to stop execution
    });
};

// Main function to get all Star Wars data
export const getStarWarsData = () => {
  return Promise.all([fetchPeople(), fetchPlanets()])
    .then(([characters, planets]) => ({
      characters,
      planets,
    }))
    .catch((error) => {
      console.error("Failed to fetch Star Wars data:", error);
      throw error; // Re-throw to let the UI handle the error
    });
};

// Fallback static data (for immediate use while API loads)
export const starWarsData = {
  characters: [],
  planets: [],
};

// Helper function to get all data combined
export const getAllData = (data = starWarsData) => {
  return [...data.characters, ...data.planets];
};

// Helper function to find an item by ID
export const findItemById = (id, data = starWarsData) => {
  return getAllData(data).find((item) => item.id === parseInt(id));
};
