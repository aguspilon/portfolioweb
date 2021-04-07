$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if (id == 1) { //si es proyecto 1
        $("#img-proyecto").attr("src" , "img/1.png"); //cargo la img 1
        $("#nombreProyecto").html("Ballete");
        $("#nombreMateria").html("Fotografía");
        $("#descripcionProyecto").html("Sesion de fotos que realice en taller de fotografía insporado en la vida de una niña apasionada por el ballete");
        $("#entrar").html("Entrar");
        
        //pongo el nombre 1
        //pongo la desc 1
    }else

    if (id == 2) { //si es el proyecto2
        $("#img-proyecto").attr("src" , "img/1.png"); //cargo la img 1
        $("#nombreProyecto").html("Diverso");
        $("#nombreMateria").html("Imagen Corporativa Web");
        $("#descripcionProyecto").html("Identidad de marca");
        $("#entrar").html("Entrar");
    }else{
		
	}
    











});

