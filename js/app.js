console.log("Hola");

var eq1 = 'Equipo 1';
var eq2 = 'Equipo 2';

var p1 = 0
var p2 = 0
var acump1 = 0
var acump2 = 0

var cantP = 30;



$(document).ready(function () {

    $('#a30').click(function (e) {
        e.preventDefault();
        $('#a30').removeClass('btn');
        $('#a30').addClass('btn-select');
        $('#a24').removeClass('btn-select');
        $('#a24').addClass('btn');
        cantP = 30;
    });

    $('#a24').click(function (e) {
        e.preventDefault();
        $('#a24').removeClass('btn');
        $('#a24').addClass('btn-select');
        $('#a30').removeClass('btn-select');
        $('#a30').addClass('btn');
        cantP = 24
    });

    $('#iniciar').click(function (e) {
        e.preventDefault();


        if ($('#eq1').val()) {
            eq1 = $('#eq1').val()
        }

        if ($('#eq2').val()) {
            eq2 = parseInt($('#eq2').val())
        }

        if (cantP == 0) {
            alert("Ingrese a cuantos puntos quieres jugar. :)")
        } else {
            // Aca si todo sale bien se esconde la pantalla y se muestre la pantalla de juego.
            console.log(eq1)
            console.log(eq2)
            console.log(cantP)


            $('#ingreso').removeClass('visible');
            $('#ingreso').addClass('oculto');

            $('#contador').removeClass('oculto');
            $('#contador').addClass('visible');

            $('#Eq1Display').text(eq1);
            $('#Eq2Display').text(eq2);
        }

    });

    function printFosforos(p,e) {
        console.log(p)
        for (var i = 1; i <= 6; i++) {
            if (p >= 0) {
                if (p >= 5) {
                    $(`#e${e}${i}`).attr('src', './resources/5.png');
                    p = p - 5;
                } else {
                    $(`#e${e}${i}`).attr('src', `./resources/${p}.png`);
                    p = 0
                }
            }
        }
    }

    $('#addE1').click(function (e) {
        e.preventDefault();
        p1++
        if (p1 > 0 && p1 <= cantP) {
            printFosforos(p1, 1);
        } else {
            alert("Sucedio un error, (Estas tratando de sumar de mas.).");
        }
    });
    $('#remainsE1').click(function (e) {
        e.preventDefault();
        p1--
        if (p1 >= 0 && p1 <= cantP) {
            printFosforos(p1, 1);
        } else {
            alert("Sucedio un error, (Estas tratando restar de mas.).");
        }
    });

    $('#addE2').click(function (e) {
        e.preventDefault();
        p2++
        if (p2 > 0 && p2 <= cantP) {
            printFosforos(p2, 2);
        } else {
            alert("Sucedio un error, (Estas tratando de sumar de mas.).");
        }
    });

    $('#remainsE2').click(function (e) {
        e.preventDefault();
        p2--
        if (p2 > 0 && p2 <= cantP) {
            printFosforos(p2, 2);
        } else {
            alert("Sucedio un error, (Estas tratando de sumar de mas.).");
        }
    });

   

});