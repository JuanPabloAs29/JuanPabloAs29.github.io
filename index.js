function moverVentana (valor) {
    if(valor==0){
        document.getElementById("ventana-inicial").style.visibility = "hidden";
        document.getElementById("ventana1").style.visibility = "visible";   
    }
    if(valor==1){
        document.getElementById("ventana1").style.visibility = "hidden";
        document.getElementById("ventana2").style.visibility = "visible";   
    }
    if(valor==2){
        document.getElementById("ventana2").style.visibility = "hidden";
        document.getElementById("ventana5").style.visibility = "visible";   
    }
    if(valor==3){
        document.getElementById("ventana3").style.visibility = "hidden";
        document.getElementById("ventana4").style.visibility = "visible";   
    }
    if(valor==4){
        document.getElementById("ventana4").style.visibility = "hidden";
        document.getElementById("ventana-inicial").style.visibility = "visible";   
    }
    if(valor==5){
        document.getElementById("ventana5").style.visibility = "hidden";
        document.getElementById("ventana6").style.visibility = "visible";   
    }
    if(valor==6){
        document.getElementById("ventana6").style.visibility = "hidden";
        document.getElementById("ventana3").style.visibility = "visible";   
    }
}

function acepta(valor) {
    if(valor=='si'){
        document.getElementById("ventana1").style.visibility = "hidden";
        document.getElementById("ventana2").style.visibility = "hidden";
        document.getElementById("ventana3").style.visibility = "hidden";
        document.getElementById("ventana4").style.visibility = "hidden";
        document.getElementById("ventana5").style.visibility = "hidden";
        document.getElementById("ventana6").style.visibility = "hidden";  
        document.getElementById("ventana-inicial").style.visibility = "hidden";
        document.getElementById("ventana-acepto").style.visibility = "visible"; 
    }
}
