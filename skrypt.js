let schowane = true;
let szuk = true;

$(document).ready(function(){
    $('#menu').addClass('schowaj');
    $('#malemenu').addClass('hidden');
    $('#logomale').addClass('hidden');
    $('#trojkat').addClass('obrocony');
})
function animacja(){
     if(schowane == true){
        schowane = false;
        $('#menu').removeClass('schowaj');
        $('#menu').addClass('pokaz');
        $('#malemenu').removeClass('hidden');
        $('#malemenu').addClass('visible');
        $('#logomale').removeClass('hidden');
        $('#logomale').addClass('visible');
        $('#trojkat').removeClass('obrocony');
        $('#trojkat').addClass('poz0');
    }
    else{
        schowane = true;
        $('#menu').removeClass('pokaz');
        $('#menu').addClass('schowaj');
        $('#malemenu').removeClass('visible');
        $('#malemenu').addClass('hidden');
        $('#logomale').removeClass('visible');
        $('#logomale').addClass('hidden');
        $('#trojkat').addClass('obrocony');
        $('#trojkat').removeClass('poz0');
    }
}

function szukaj(){
    if(szuk == false){
        szuk = true;
        document.getElementById('pasek').style.visibility = "hidden";
        document.getElementById('input').style.visibility = "hidden";
    }
    else{
        szuk = false;
        document.getElementById('pasek').style.visibility = "visible";
        document.getElementById('input').style.visibility = "visible";
    }
}