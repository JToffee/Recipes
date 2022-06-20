import { CATEGORIES } from "../data/data";
import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
	function renderCategoryItem(itemData) {
		function categoryPressHandler() {
			navigation.navigate("MealsOverview", { categoryId: itemData.item.id });
		}
		return (
			<CategoryGridTile
				title={itemData.item.title}
				color={itemData.item.color}
				onCategoryPress={categoryPressHandler}
			/>
		);
	}

	return (
		<FlatList
			data={CATEGORIES}
			renderItem={renderCategoryItem}
			keyExtractor={(item) => item.id}
			numColumns={2}
		/>
	);
}

export default CategoriesScreen;
