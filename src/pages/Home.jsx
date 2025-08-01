import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

import CardContainer from "../components/CardContainer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5">
			{/* <h1>StarWars!!</h1>
			<p>
				<img src={rigoImageUrl} />
			</p> */}

			<CardContainer />

		</div>
	);
}; 