type Recipes = {
    id: number,
    name: string,
    ingredients: string[],
    instructions: string,
    prepTimeMinutes: number,
    cookTimeMinutes: number,
    servings: number,
    difficulty: string,
    cuisine: string,
    caloriesPerServing: number,
    tags: string[],
    userId: number,
    image: string,
    rating: number,
    reviewCount: number,
    mealType: string[]
}
type Data = {
    recipes: Recipes[],
    total: number,
    skip: number,
    limit: number
}
type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack' | 'dessert';

async function getRecipes() {
    const response = await fetch('https://dummyjson.com/recipes');
    const data: Data = await response.json();
    // console.log(data);
    // console.log(data.recipes);
    console.log(data.recipes[10]);
}

// getRecipes();

async function getRecipesTags() {
    const response = await fetch('https://dummyjson.com/recipes/tags');
    const data: string[] = await response.json();
    console.log(data);
}

// getRecipesTags();

async function getRecipeMealTypeSnack() {
    const response = await fetch('https://dummyjson.com/recipes/meal-type/snack');
    const data: Data = await response.json();
    console.log(data);
}

// getRecipeMealTypeSnack()

async function getRecipeByMealType(mealType: string) {
    const response = await fetch(`https://dummyjson.com/recipes/meal-type/${mealType}`);
    const data: Data = await response.json();
    console.log(data);
}

getRecipeByMealType('snack')
// getRecipeByMealType('breakfast')
// getRecipeByMealType('lunch')
// getRecipeByMealType('dinner')
// getRecipeByMealType('dessert')