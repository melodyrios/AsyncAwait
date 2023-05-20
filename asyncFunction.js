
async function getRandomNumber() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Math.random());
        }, 500);
    });
}

 async function display() {
	const num = await getRandomNumber();
  console.log(num);
} 

display();

async function cityName(city) {
    const url = `https://geocode.xyz/${city}?json=1`;
    const response = await fetch(url);
    const data = await response.json();
		console.log(data.latt, data.longt);
}

cityName("Seattle");
cityName("New York");
cityName("San Francisco");
cityName("Los Angeles");
