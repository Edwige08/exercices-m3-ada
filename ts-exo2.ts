type Review = {
    rating: number,
    comment: string,
    date: string,
    reviewerName: string,
    reviewerEmail: string
}
type Products = {
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    tags: string[],
    brand: string,
    sku: string,
    weight: number,
    dimensions: {
        width: number,
        height: number,
        depth: number
    },
    warrantyInformation: string,
    shippingInformation: string,
    availabilityStatus: string,
    reviews: Review[],
    returnPolicy: string,
    minimumOrderQuantity: number,
    meta: {
        createdAt: string,
        updatedAt: string,
        barcode: string,
        qrCode: string
    },
    thumbnail: string,
    images: string[]
}
type Product = {
    id: number,
    title: string,
    price: number,
    quantity: number,
    total: number,
    discountPercentage: number,
    discountedTotal: number,
    thumbnail: string
}
type Carts = {
    id: number,
    products: Product[]
    total: number,
    discountedTotal: number,
    userId: number,
    totalProducts: number,
    totalQuantity: number
}

type Recipes2 = {
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
type Todo = {
    id: number,
    todo: string,
    completed: boolean,
    userId: number
}

type Data2<T, K extends string> = {
    [P in K]: T[]
} & {
    total: number,
    skip: number,
    limit: number
}

// type DummyNames = 'products' | 'carts' | 'recipes' | 'users' | 'posts' | 'comments' | 'todos' | 'quotes';
type DummyNames = 'products' | 'carts' | 'recipes' | 'todos';

async function listDummy<T, K extends string>(dummyName: K) {
    const response = await fetch(`https://dummyjson.com/${dummyName}`);
    const data: Data2<T, K> = await response.json();
    console.log(data);
}

listDummy<Recipes2, "recipes">('recipes');