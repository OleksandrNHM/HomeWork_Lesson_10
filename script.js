// Написать цикл, который создает множество параграфов с каждым десятым числом ы промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавим созданные параграфы в div с классом numbers.

const divElements = document.querySelector('.number');
for (let i = 100; i >= 50; i -= 10) {
    const paragraph = document.createElement('p');

    paragraph.textContent = i;

    divElements.appendChild(paragraph);
};


// Написать цикл, который по масиву строк, для каждой строки создает параграф и добавляет его в div c классом string_container. Строки взять произврльные.

let names = ['Slava', 'Nikita', 'Aleksandr', 'Maxim'];

const stringContainer = document.querySelector('.string_container');
for (let i = 0; i < names.length; i++){
    const paragraph = document.querySelector('p');
    paragraph.textContent = names[i];
    stringContainer.appendChild(paragraph);
};


// Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и age (данные взять произвольные) - и создает карточку только для совершеннолетних пользователей. Карточка должна  содержать информацию об имени, фамилии и возврасте пользователя. Добавить все карточки в div с классом user_container.

const users = [
    {first_name: 'Slava', last_name: 'Famin', age: 23},
    {first_name: 'Nikita', last_name:'Osipenko', age: 16},
    {first_name: 'Stsepan', last_name: 'Sholkov', age: 22},
    {first_name: 'Vintik', last_name: 'Pishenko', age: 14}
];

const userContainer = document.querySelector('.user_container');

users.forEach((user) => {
    if (user.age >= 18) {
        const card = document.createElement('div');
        
        const name = document.createElement('p');
        name.textContent = `Имя: ${user.first_name} ${user.last_name}`;

        const age = document.createElement('p');
        age.textContent = `Возраст: ${user.age}`;

        card.appendChild(name);
        card.appendChild(age);

        userContainer.appendChild(card);
    }
});
