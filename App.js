import { StyleSheet, StatusBar } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoriteContextProvider from "./store/context/favorites-context";

// create navigators
//stack - obj with two properties each acting as a component

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: "#351401" },
				headerTintColor: "white",
				sceneContainerStyle: { backgroundColor: "#3f2f25" },
				drawerContentStyle: { backgroundColor: "#351401" },
				drawerInactiveTintColor: "white",
				drawerActiveTintColor: "#351401",
				drawerActiveBackgroundColor: "#e4baa1",
			}}
		>
			<Drawer.Screen
				name="MealCategories"
				component={CategoriesScreen}
				options={{
					title: "Meal Categories",
					drawerIcon: ({ color, size }) => (
						<Ionicons name="list" size={size} color={color} />
					),
				}}
			/>
			<Drawer.Screen
				name="Favorites"
				component={FavoritesScreen}
				options={{
					drawerIcon: ({ color, size }) => (
						<Ionicons name="star" size={size} color={color} />
					),
				}}
			/>
		</Drawer.Navigator>
	);
}

export default function App() {
	return (
		<>
			<StatusBar style="dark" />
			<FavoriteContextProvider>
				<NavigationContainer>
					<Stack.Navigator
						screenOptions={{
							headerStyle: { backgroundColor: "#351401" },
							headerTintColor: "white",
							contentStyle: { backgroundColor: "#3f2f25" },
						}}
					>
						<Stack.Screen
							name="Drawer"
							component={DrawerNavigator}
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name="MealDetails"
							component={MealDetailsScreen}
							// options={{ headerRight: () => <Button title="boom" /> }}
						/>

						<Stack.Screen
							name="MealsOverview"
							component={MealsOverviewScreen}
							// options={({ route, navigation }) => {
							// 	const catId = route.params.categoryId;

							// 	return {
							// 		title: catId,
							// 	};
							// }}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</FavoriteContextProvider>
		</>
	);
}

const styles = StyleSheet.create({
	container: {},
});
