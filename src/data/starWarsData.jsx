export const fetchVehicles = async () => {
  const res = await fetch("https://www.swapi.tech/api/vehicles");
  const data = await res.json();
  const vehicles = await Promise.all(
    data.results.slice(0, 3).map(async (item) => {
      const { result } = await fetch(item.url).then(r => r.json());
      const { uid, description, properties } = result;
      return {
        uid,
        id: +uid,
        name: properties.name,
        model: properties.model,
        manufacturer: properties.manufacturer,
        cost_in_credits: properties.cost_in_credits,
        crew: properties.crew,
        passengers: properties.passengers,
        type: "vehicle",
        description
      };
    })
  );
  console.log("fetchVehicles result:", vehicles);
  return vehicles;
};


export const fetchPeople = async () => {
  const res = await fetch("https://www.swapi.tech/api/people");
  const data = await res.json();
  const people = await Promise.all(
    data.results.slice(0, 3).map(async (item) => {
      const d = await fetch(item.url).then(r => r.json());
      const p = d.result.properties;
      return {
        uid: d.result.uid,
        id: +d.result.uid,
        name: p.name,
        gender: p.gender,
        hair: p.hair_color,
        eyes: p.eye_color,
        height: p.height,
        mass: p.mass,
        birthYear: p.birth_year,
        type: "character",
        description: d.result.description
      };
    })
  );
  console.log("fetchPeople result:", people);
  return people;
};

export const fetchPlanets = async () => {
  const res = await fetch("https://www.swapi.tech/api/planets");
  const data = await res.json();
  const planets = await Promise.all(
    data.results.slice(0, 3).map(async (item) => {
      const d = await fetch(item.url).then(r => r.json());
      const p = d.result.properties;
      return {
        uid: d.result.uid,
        id: +d.result.uid,
        name: p.name,
        climate: p.climate,
        terrain: p.terrain,
        population: p.population,
        diameter: p.diameter,
        rotationPeriod: p.rotation_period,
        type: "planet",
        description: d.result.description
      };
    })
  );
  console.log("fetchPlanets result:", planets);
  return planets;
};

export const getStarWarsData = async () => {
  const [characters, planets, vehicles] = await Promise.all([
    fetchPeople(),
    fetchPlanets(),
    fetchVehicles()
  ]);
  console.log("getStarWarsData result:", { characters, planets, vehicles });
  return { characters, planets, vehicles };
};

