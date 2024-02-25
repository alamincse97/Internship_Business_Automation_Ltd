// Dynamic Field Creation with JavaScript

var b = document.getElementById("bt");

b.addEventListener('click', function() {
    var r = document.createElement("tr");

    r.innerHTML = '<td><input type="text"></td>' +
        '<td><input type="text"></td>' +
        '<td><input type="text"></td>' +
        '<td><input type="text"></td>' +
        '<td><button class="remove" style="background-color: red;"> x </button></td>';

    var t = document.querySelector("tbody");
    t.appendChild(r);

    var removeButton = r.querySelector('.remove');
    removeButton.addEventListener('click', function() {
        r.remove();
    });
});






