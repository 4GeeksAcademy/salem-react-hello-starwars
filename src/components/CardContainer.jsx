import Cards from './Cards'
import useGlobalReducer from '../hooks/useGlobalReducer'
import { useEffect } from 'react'
import { getStarWarsData } from '../data/starWarsData'

function CardContainer() {
  const { store, dispatch } = useGlobalReducer();
  const { characters, planets } = store.starWarsData;

  // Load real API data when component mounts
  useEffect(() => {
    getStarWarsData()
      .then((apiData) => {
        dispatch({ type: "set_star_wars_data", payload: apiData });
      })
      .catch((error) => {
        console.error("Failed to load Star Wars data:", error);
      });
  }, [dispatch]);

  return (
    <div className="container">
      {/* Characters Section */}
      <h1 className='text-start p-2'>Characters</h1>
      <div className="d-flex flex-wrap justify-content-start gap-3 mb-5">
        {characters.map(character => (
          <Cards key={character.id} character={character} />
        ))}
      </div>
      
      {/* Planets Section */}
      <h1 className='text-start p-2'>Planets</h1>
      <div className="d-flex flex-wrap justify-content-start gap-3">
        {planets.map(planet => (
          <Cards key={planet.id} character={planet} />
        ))}
      </div>
    </div>
  )
}

export default CardContainer
