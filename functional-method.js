const cars = [
    {name: 'RX-7', manufacturer: 'Mazda', class: 'Sports', layout:['front mid-engine', 'rear-wheel-drive']},
    {name:'MX-30', manufacturer: 'Mazda', class: 'SUV', layout:['front-engine', 'front-wheel-drive']},
    {name:'Fiesta', manufacturer: 'Ford', class: 'Supermini', layout:['front-engine', 'front-wheel drive']},
    {name:'EcoSport', manufacturer: 'Ford', class: 'SUV', layout:['front-engine', 'front-wheel-drive']},
    {name:'Golf', manufacturer: 'Volkswagen', class: 'Compact', layout:['front-engine', 'front-wheel-drive']},
    {name:'Taos', manufacturer: 'Volkswagen', class: 'SUV', layout:['front-engine', 'front-wheel-drive']},
    {name:'570S', manufacturer: 'McLaren', class: 'Sports', layout:['rear mid-engine', 'rear-wheel drive']}
];

//1.Create a array with Volkswagen's cars
const volksCars = cars.filter(volkCar => volkCar.manufacturer === 'Volkswagen');
console.log(volksCars);
//2.Create a reverse array
const reversed = cars.reverse();
console.log(reversed);
//3.Create a array without SUV class
const noSUV = cars.filter(car => car.class !== 'SUV');
console.log(noSUV);
//4.Create a array with front-engine layout's cars
 const frontEng = cars.filter(car => car.layout[0] === 'front-engine');
console.log(frontEng);
//5.Count the number of SUVsS
const countSUV = cars.filter(car => car.class === 'SUV').length;
console.log(countSUV);