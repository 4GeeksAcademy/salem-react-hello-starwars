
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

function Cards({ character = { id: 1, name: "Luke Skywalker", gender: "Male", hair: "Blond", eyes: "Blue", type: "character" } }) {
  const { store, dispatch } = useGlobalReducer();
  
  const isInFavorites = store.favorites.find(fav => fav.id === character.id);
  
  const handleFavorite = () => {
    if (isInFavorites) {
      dispatch({
        type: "remove_favorite",
        payload: character.id
      });
    } else {
      dispatch({
        type: "add_favorite",
        payload: character
      });
    }
  };

  // Render different content based on type
  const renderCardContent = () => {
    if (character.type === "planet") {
      return (
        <p className="card-text">
          <small className="text-muted">Climate: {character.climate}</small><br />
          <small className="text-muted">Terrain: {character.terrain}</small><br />
          <small className="text-muted">Population: {character.population}</small>
        </p>
      );
    } else {
      // Default to character
      return (
        <p className="card-text">
          <small className="text-muted">Gender: {character.gender}</small><br />
          <small className="text-muted">Hair Color: {character.hair}</small><br />
          <small className="text-muted">Eye Color: {character.eyes}</small>
        </p>
      );
    }
  };

  return (
    <div className="card" style={{width: "18rem", borderWidth: "2px"}}>
      <img  src={rigoImageUrl} className="card-img-top" style={{ height: "10rem", borderWidth: "2px", borderStyle: "solid", borderColor: "#333"}} alt="Character" />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        {renderCardContent()}
        <div className="d-flex justify-content-between">
          <Link to={`/character/${character.id}`} className="btn btn-primary btn-sm">
            Learn more
          </Link>
          <button 
            className={`btn btn-sm ${isInFavorites ? 'btn-warning' : 'btn-outline-warning'}`}
            onClick={handleFavorite}
          >
            <i className="fas fa-heart"></i> {isInFavorites ? 'Favorited' : 'Favorite'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cards
