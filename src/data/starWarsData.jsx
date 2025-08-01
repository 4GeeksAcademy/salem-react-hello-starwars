

export const fetchPeople = async () => {
  const res = await fetch("https://www.swapi.tech/api/people");
  const data = await res.json();
  return Promise.all(
    data.results.slice(0, 3).map(async (item) => {
      const d = await fetch(item.url).then(r => r.json());
      const p = d.result.properties;
      return {
        id: +d.result.uid,
        name: p.name,
        gender: p.gender,
        hair: p.hair_color,
        eyes: p.eye_color,
        height: p.height,
        mass: p.mass,
        birthYear: p.birth_year,
        type: "character"
      };
    })
  );
};

export const fetchPlanets = async () => {
  const res = await fetch("https://www.swapi.tech/api/planets");
  const data = await res.json();
  return Promise.all(
    data.results.slice(0, 3).map(async (item) => {
      const d = await fetch(item.url).then(r => r.json());
      const p = d.result.properties;
      return {
        id: +d.result.uid,
        name: p.name,
        climate: p.climate,
        terrain: p.terrain,
        population: p.population,
        diameter: p.diameter,
        rotationPeriod: p.rotation_period,
        type: "planet"
      };
    })
  );
};

export const getStarWarsData = async () => {
  const [characters, planets] = await Promise.all([
    fetchPeople(),
    fetchPlanets()
  ]);
  return { characters, planets };
};

