export async function getMeals()
{
    const response = await fetch("http://localhost:3000/meals");
    if (!response.ok) {
        // Failed to fetch 
    }

    const resData = await response.json();

    return resData;
}