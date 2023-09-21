/* 
    This file exists simply to be executed once and dispatch dummy data to the database.
    As soon as the data is sent, we can then fetch it to further display on the screen.
*/

const dbUrl = "https://react-movie-http-4bf03-default-rtdb.firebaseio.com/meals.json";
const dummyData = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies.',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty.',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty.',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
    {
        id: 'm5',
        name: 'Rice and Beans',
        description: 'A taste of Brazil.',
        price: 15.59,
    },
];

async function sendData() {
    try {
        for (const key in dummyData) {
            const response = await fetch(dbUrl, {
                method: "POST",
                body: JSON.stringify(dummyData[key]),
                headers: { "Content-Type": "application/json" }
            });

            const data = await response.json();

            if (data)
                console.log("Item successfully sent!");
        }
    }
    catch (error) {
        console.log(error);
    }
};

sendData();
