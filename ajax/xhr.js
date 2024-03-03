let button = document.getElementById('one');
let div = document.getElementById('output');

button.addEventListener('click', ()=>{
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://icanhazdadjoke.com/");

    xhr.setRequestHeader('Accept', "application/json");

    xhr.onreadystatechange = function() {
        if(xhr.readyState ===4 && xhr.status ===200){
            const jsonData = JSON.parse(xhr.responseText);
            div.innerHTML = 'OUTPUT(XHR) : ';
            div.innerHTML += jsonData.joke;
        }
    };

    xhr.send();
})