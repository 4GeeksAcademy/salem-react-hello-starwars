import Cards from './Cards'
import useGlobalReducer from '../hooks/useGlobalReducer'

function CardContainer() {
  const { store } = useGlobalReducer();
  const { characters, planets } = store.starWarsData;

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
