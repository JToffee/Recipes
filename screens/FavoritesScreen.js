import { StyleSheet, View, Text } from "react-native";
import { useContext } from "react";
import MealsList from "../components/mealsList/MealList";
import { FavoriteContext } from "../store/context/favorites-context";
import { MEALS } from "../data/data";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

function FavoritesScreen() {
	const favoriteMealsCtx = useContext(FavoriteContext);

	const favoriteMeals = MEALS.filter((meal) =>
		favoriteMealsCtx.ids.includes(meal.id)
	);
	if (favoriteMeals.length === 0) {
		return (
			<View style={styles.rootContainer}>
				<Text style={styles.text}>You have no favorite meals yet</Text>
			</View>
		);
	}

	return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 18,
		fontWeight: "bold",
		color: "white",
	},
});
