import { createContext, useState } from "react";

export const FavoriteContext = createContext({
	ids: [],
	addFavorite: (id) => {},
	removeFavorite: (id) => {},
});

function FavoriteContextProvider({ children }) {
	const [favoriteMealsIds, setFavoriteMealsIds] = useState([]);

	function addFavorite(id) {
		setFavoriteMealsIds((currentFavsIds) => [...currentFavsIds, id]);
	}

	function removeFavorite(id) {
		setFavoriteMealsIds((currentFavsIds) =>
			currentFavsIds.filter((favId) => favId !== id)
		);
	}

	const value = {
		ids: favoriteMealsIds,
		addFavorite: addFavorite,
		removeFavorite: removeFavorite,
	};
	return (
		<FavoriteContext.Provider value={value}>
			{children}
		</FavoriteContext.Provider>
	);
}

export default FavoriteContextProvider;
