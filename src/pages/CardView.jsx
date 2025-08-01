import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const CardView = () => {
  const { characterId } = useParams();
  const { store, dispatch } = useGlobalReducer();
  
  // Sample character data (in a real app, this would come from an API or store)
  const characters = [
    { id: 1, name: "Luke Skywalker", gender: "Male", hair: "Blond", eyes: "Blue", height: "172", mass: "77", birthYear: "19BBY" },
    { id: 2, name: "Leia Organa", gender: "Female", hair: "Brown", eyes: "Brown", height: "150", mass: "49", birthYear: "19BBY" },
    { id: 3, name: "Han Solo", gender: "Male", hair: "Brown", eyes: "Brown", height: "180", mass: "80", birthYear: "29BBY" },
    { id: 4, name: "Darth Vader", gender: "Male", hair: "None", eyes: "Yellow", height: "202", mass: "136", birthYear: "41.9BBY" }
  ];
  
  const character = characters.find(char => char.id === parseInt(characterId));
  
  if (!character) {
    return (
      <div className="container text-center mt-5">
        <h1>Character not found!</h1>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    );
  }
  
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
                  alt={character.name}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h1 className="card-title">{character.name}</h1>
                  <p className="card-text">
                    A long time ago in a galaxy far, far away... Learn more about this iconic Star Wars character.
                  </p>
                  
                  <hr />

                    <div className="row">
                      <p>Name: {character.name}</p>
                      <p>Birth Year: {character.birthYear}</p>
                      <p>Gender: {character.gender}</p>
                      <p>Height: {character.height} cm</p>
                      <p>Mass: {character.mass} kg</p>
                      <p>Hair Color: {character.hair}</p>
                      <p>Eye Color: {character.eyes}</p>
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
