// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

const input = document.getElementById('userNameInput');
const button = document.getElementById('getUserButton');
const city = document.getElementById('userCity');

button.addEventListener('click', (e) => {

    const response = fetch('https://jsonplaceholder.typicode.com/users');
    response.then(data => {
        return data.json();
    }).then(users => {
        users.forEach(user => {
            if(user.name === input.value) {
                city.innerText = user.address.city;
            }
        });
    });
    
});