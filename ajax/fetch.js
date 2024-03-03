let buttonTwo = document.getElementById('two');
let divTwo = document.getElementById('output');

buttonTwo.addEventListener('click', ()=>{
    fetch('https://icanhazdadjoke.com', {
        headers: {"Accept":"application/json"}
    })
        .then((response) => {
            return response.json()
        })
        .then(jokeObject => {
            return jokeObject.joke.toUpperCase();
        })
        .then(joke => {
            divTwo.innerHTML = 'OUTPUT(Fetch) : '
            divTwo.innerHTML += joke;
        })
        .catch( e => {
            console.log('there is an error : ',e);
        })
})