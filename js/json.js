const user = { id: 1, name: 'Gorib Amir', job: 'actor' };
// JavaScript Object Notation (JSON)
// 1. Plane Text  2. XML  3. JSON

const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    owner: 'Alia',
    address: {
        street: 'kachukhet bhooter goli',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop', 'mouse', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
};
// console.log(shop);
const shopJSON = JSON.stringify(shop);
// console.log(shopJASON);

const shopObj = JSON.parse(shopJSON);
// console.log(shopObj);

const info = {
    name: 'Al Amin Miah',
    age: 22,
    profession: 'student',
    study: 'BBA First Year',
    institute: {
        name: 'North South University',
        address: '25/B, Isa Kha road',
        area: 'Bashundhara'
    },
    phone: '01314993347',
    email: 'alaminmiah4274@gmail.com',
    address: ['14/c, nolbhog main road/fulbaria road, Nolbhog, Diabari, Uttara, Dhaka-1230']
};

const infoJson = JSON.stringify(info);
// console.log(infoJson);

const infoObj = JSON.parse(infoJson);
// console.log(infoObj);