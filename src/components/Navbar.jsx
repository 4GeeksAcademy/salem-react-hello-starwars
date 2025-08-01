import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();
	
	const removeFavorite = (characterId) => {
		dispatch({
			type: "remove_favorite",
			payload: characterId
		});
	};

	return (
		<nav className="navbar navbar-light bg-light sticky-top">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">StarWarrs</span>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<div className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							favorites  {store.favorites.length}
						</div>
						<ul className="dropdown-menu">
							{store.favorites.length === 0 ? (
								<li><span className="dropdown-item">No favorites yet</span></li>
							) : (
								store.favorites.map(character => (
									<li key={character.id} className="dropdown-item d-flex justify-content-between align-items-center">
										<span>{character.name}</span>
										<button 
											className="btn btn-sm btn-outline-danger"
											onClick={() => removeFavorite(character.id)}
										>
											<i className="fas fa-trash"></i>
										</button>
									</li>
								))
							)}						
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};






