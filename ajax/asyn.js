let buttonThree = document.getElementById('three');
let divThree = document.getElementById('output');

buttonThree.addEventListener('click', displayJoke);

async function displayJoke() {
    const response = await fetch('https://icanhazdadjoke.com', {
        headers: { "Accept": "application/json" }
    });

    const jokeObject = await response.json();
    const lowercaseJoke = jokeObject.joke.toLowerCase();

    divThree.innerHTML += '<br>';
    setTimeout(() => {
        divThree.innerHTML += "OUTPUT2 : ";
        divThree.innerHTML += lowercaseJoke + '<br>';
    }, 1000);

    divThree.innerHTML += "OUTPUT1 : ";
    divThree.innerHTML += lowercaseJoke + '<br>';
}