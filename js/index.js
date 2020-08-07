$(document).ready(function(){

	/*Limpiar espacio para contenido*/
	function clean(){
		$("#contenidoMenu").empty();
	}

	function removeActive(){
		$(".nav-item").find().hasClass("active");
		$(".nav-item").removeClass("active");
	}

	/*Carrusel*/
	$(".carousel").carousel({
  		interval: 1700
	});

	/*Opciones del menú*/
	$("#quienesSomos, #quienesSomosMap").click(function(){
		clean();
		$("#contenidoMenu").load("quienes-somos.php");
		removeActive();
		$(this).parent().addClass("active");
	});

	$("#arrendamientoPuro, #arrendamientoPuroMap").click(function(){
		clean();
		$("#contenidoMenu").load("arrendamiento-puro.php");
		removeActive();
		$(this).parent().addClass("active");
	});

	$("#contacto, #contactanosMap").click(function(){
		clean();
		$("#contenidoMenu").load("contacto.php");
		removeActive();
		$(this).parent().addClass("active");
	});

	$("#inversionistas, #inversionistasMap").click(function(){
		clean();
		$("#contenidoMenu").load("inversionistas.php");
		removeActive();
		$(this).parent().addClass("active");
	});

	$("#avisoPrivacidad, #avisoPrivacidadMap").click(function(){
		clean();
		$("#contenidoMenu").load("aviso_de_privacidad.php");
	});

	$("#mapaSitio").click(function(){
		clean();
		$("#contenidoMenu").load("sitemap.php");
	});
});