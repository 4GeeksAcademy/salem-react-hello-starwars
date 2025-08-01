
import { useParams, useLocation, Link } from "react-router-dom";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const CardView = () => {
  const params = useParams();
  const location = useLocation();
  const { store, dispatch } = useGlobalReducer();

  // Determine if this is a character or planet route
  let type = "character";
  if (location.pathname.startsWith("/planet/")) {
    type = "planet";
  }
  // Get the id from params (works for both /character/:characterId and /planet/:characterId)
  const id = parseInt(params.characterId);

  // Select the correct array based on type
  const dataArr = type === "planet" ? store.starWarsData.planets : store.starWarsData.characters;
  const item = dataArr.find(item => item.id === id);

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
       
        </div>
      );
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
                  className="img-fluid rounded-start h-40" 
                  alt={item.name}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h1 className="card-title">{item.name}</h1>
                  <p className="card-text">
                    {item.description}
                  </p>
                  
                  <hr />

                  {renderDetails()}
                  
                  <div className="d-flex gap-2 mt-4">
                    <Link to="/" className="btn btn-primary">
                      <i className="fas fa-arrow-left"></i>
                    </Link>
                    <button 
                      className={`btn ${isInFavorites ? 'btn-warning' : 'btn-outline-warning'}`}
                      onClick={handleFavorite}
                    >
                      <i className="fas fa-heart"></i>
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
