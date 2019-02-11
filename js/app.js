console.log("Hola");

var eq1 = 'Equipo 1';
var eq2 = 'Equipo 2';

var cantP = 0;



$(document).ready(function () {
    $('#a30').click(function (e) {
        e.preventDefault();
        $('#a30').removeClass('btn');
        $('#a30').addClass('btn-select');
        cantP = 30;
    });

    $('#a24').click(function (e) {
        e.preventDefault();
        $('#a24').removeClass('btn');
        $('#a24').addClass('btn-select');
        cantP = 24
    });

    $('#iniciar').click(function (e) {
        e.preventDefault();


        if ($('#eq1').val()) {
            eq1 = $('#eq1').val()
        }

        if ($('#eq2').val()) {
            eq2 = $('#eq2').val()
        }

        if (cantP == 0) {
            alert("Ingrese a cuantos puntos quieres jugar. :)")
        } else {
            // Aca si todo sale bien se esconde la pantalla y se muestre la pantalla de juego.
            console.log(eq1)
            console.log(eq2)
            console.log(cantP)
        }
        
    });



});