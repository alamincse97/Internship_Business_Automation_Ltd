$(document).ready(function() {
    $('#four').click(function() {
        $.ajax({
            url: 'https://icanhazdadjoke.com',
            method: 'GET',
            dataType: 'json',
            success: function(response) {
                $('#output').html('OUTPUT(JQUERY) : ' + response.joke);
            },
            error: function(xhr, status, error) {
                $('#output').html('OUTPUT : Error')
                console.error('Error : ', error);
            }
        });
    });
});