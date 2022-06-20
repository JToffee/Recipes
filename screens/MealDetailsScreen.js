import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { useContext } from "react";
import { FavoriteContext } from "../store/context/favorites-context";

function MealDetailsScreen({ route, navigation }) {
	//Access context - pass in context obj to useContext hook

	const favoriteMealsCtx = useContext(FavoriteContext);
	const mealId = route.params.mealId;

	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	//Check if meal is already in favoriteMeals ids arr
	const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

	//Toggle favorite status
	function changeFavoriteStatusHandler() {
		if (mealIsFavorite) {
			favoriteMealsCtx.removeFavorite(mealId);
		} else {
			favoriteMealsCtx.addFavorite(mealId);
		}
	}

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<IconButton
					icon={mealIsFavorite ? "star" : "star-outline"}
					color="white"
					onPress={changeFavoriteStatusHandler}
				/>
			),
		});
	}, [navigation, changeFavoriteStatusHandler]);

	return (
		<ScrollView style={styles.rootContainer}>
			<Image
				source={{ uri: selectedMeal.imageUrl }}
				style={styles.image}
			></Image>
			<Text style={styles.title}>{selectedMeal.title}</Text>
			<MealDetails
				duration={selectedMeal.duration}
				affordability={selectedMeal.affordability}
				complexity={selectedMeal.complexity}
				textStyle={styles.detailText}
			/>
			<View style={styles.listOuterContainer}>
				<View style={styles.listContainer}>
					<Subtitle>Ingredients</Subtitle>
					<List data={selectedMeal.ingredients} />
					<Subtitle>Steps</Subtitle>
					<List data={selectedMeal.steps} />
				</View>
			</View>
		</ScrollView>
	);
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
	rootContainer: {
		marginBottom: 32,
	},
	image: {
		width: "100%",
		height: 350,
	},
	title: {
		fontWeight: "bold",
		fontSize: 24,
		margin: 8,
		textAlign: "center",
		color: "#ccc",
	},
	detailText: {
		color: "white",
	},
	listContainer: {
		maxWidth: "80%",
	},
	listOuterContainer: {
		alignItems: "center",
	},
});
