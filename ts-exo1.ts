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

async function getRecipes() {
    const response = await fetch('https://dummyjson.com/recipes');
    const data: Data = await response.json();
    // console.log(data);
    // console.log(data.recipes);
    console.log(data.recipes[10]);
}

getRecipes();