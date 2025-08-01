import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const CardView = () => {
  const { characterId } = useParams();
  const { store, dispatch } = useGlobalReducer();
  
  const allData = [...store.starWarsData.characters, ...store.starWarsData.planets];
  const item = allData.find(item => item.id === parseInt(characterId));
  
  if (!item) {
    return (
      <div className="container text-center mt-5">
        <h1>Item not found!</h1>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    );
  }
  
  const isInFavorites = store.favorites.find(fav => fav.id === item.id);
  
  const handleFavorite = () => {
    if (isInFavorites) {
      dispatch({
        type: "remove_favorite",
        payload: item.id
      });
    } else {
      dispatch({
        type: "add_favorite",
        payload: item
      });
    }
  };

  // Render different content based on type
  const renderDetails = () => {
    if (item.type === "planet") {
      return (
        <div className="row">
          <div className="col-6">
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Climate:</strong> {item.climate}</p>
            <p><strong>Terrain:</strong> {item.terrain}</p>
          </div>
          <div className="col-6">
            <p><strong>Population:</strong> {item.population}</p>
            <p><strong>Diameter:</strong> {item.diameter} km</p>
            <p><strong>Rotation Period:</strong> {item.rotationPeriod} hours</p>
          </div>
        </div>
      );
    } else {
      // Character details
      return (
        <div className="row">
          <div className="col-6">
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Birth Year:</strong> {item.birthYear}</p>
            <p><strong>Gender:</strong> {item.gender}</p>
          </div>
          <div className="col-6">
            <p><strong>Height:</strong> {item.height} cm</p>
            <p><strong>Mass:</strong> {item.mass} kg</p>
            <p><strong>Hair Color:</strong> {item.hair}</p>
            <p><strong>Eye Color:</strong> {item.eyes}</p>
          </div>
        </div>
      );
    }
  };

  const getDescription = () => {
    if (item.type === "planet") {
      return `Discover the fascinating world of ${item.name}, a unique planet in the Star Wars universe with its own climate, terrain, and inhabitants.`;
    } else {
      return `A long time ago in a galaxy far, far away... Learn more about ${item.name}, an iconic Star Wars character.`;
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="row g-0">
              <div className="col-md-4">
                <img 
                  src={rigoImageUrl} 
                  className="img-fluid rounded-start h-100" 
                  alt={item.name}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h1 className="card-title">{item.name}</h1>
                  <p className="card-text">
                    {getDescription()}
                  </p>
                  
                  <hr />

                  {renderDetails()}
                  
                  <div className="d-flex gap-2 mt-4">
                    <Link to="/" className="btn btn-primary">
                      <i className="fas fa-arrow-left"></i> Back Home
                    </Link>
                    <button 
                      className={`btn ${isInFavorites ? 'btn-warning' : 'btn-outline-warning'}`}
                      onClick={handleFavorite}
                    >
                      <i className="fas fa-heart"></i> {isInFavorites ? 'Remove from Favorites' : 'Add to Favorites'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
