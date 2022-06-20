import { CATEGORIES, MEALS } from "../data/data";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "../components/mealsList/MealItem";
import { useEffect, useLayoutEffect } from "react";
import MealsList from "../components/mealsList/MealList";

function MealsOverviewScreen({ route, navigation }) {
	const catId = route.params.categoryId;

	const displayedMeals = MEALS.filter(
		(meal) => meal.categoryIds.indexOf(catId) >= 0
	);

	useLayoutEffect(() => {
		const categoryTitle = CATEGORIES.find(
			(category) => category.id === catId
		).title;

		navigation.setOptions({ title: categoryTitle });
	}, [catId, navigation]);

	return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
