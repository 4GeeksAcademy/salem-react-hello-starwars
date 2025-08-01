
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

function Cards({ character }) {
  const { store, dispatch } = useGlobalReducer();
  
  const isInFavorites = store.favorites.find(fav => fav.uid === character.uid);
  
  const handleFavorite = () => {
    dispatch({
      type: isInFavorites ? "remove_favorite" : "add_favorite",
      payload: isInFavorites ? character.uid : character
    });
  };

  return (
    <div className="card" style={{width: "18rem", borderWidth: "2px"}}>
      <img  src={rigoImageUrl} className="card-img-top" style={{ height: "10rem", borderWidth: "2px", borderStyle: "solid", borderColor: "#333"}} alt="Character" />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        
        {character.type === "planet" ? (
          <p className="card-text">
            {/* <small className="text-muted">Climate: {character.climate}</small><br />
            <small className="text-muted">Terrain: {character.terrain}</small><br />
            <small className="text-muted">Population: {character.population}</small> */}
          </p>
        ) : (
          <p className="card-text">
            {/* <small className="text-muted">Gender: {character.gender}</small><br />
            <small className="text-muted">Hair Color: {character.hair}</small><br />
            <small className="text-muted">Eye Color: {character.eyes}</small> */}
          </p>
        )}

        <div className="d-flex justify-content-between">
          <Link to={`/${character.type === "planet" ? "planet" : "character"}/${character.uid}`} className="btn btn-primary btn-sm">
            more...
          </Link>
          <button 
            className={`btn btn-sm ${isInFavorites ? 'btn-warning' : 'btn-outline-warning'}`}
            onClick={handleFavorite}
          >
                      <i className="fas fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cards
