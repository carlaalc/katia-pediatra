$(window).on("scroll", function(){
	var distanciaDoTopo = $(window).scrollTop();

	if (distanciaDoTopo > 300) {
		distanciaDoTopo = 300;
	}

	$("#header_shadow").css("top", (distanciaDoTopo / 10) + "px");
})

var opcoesSR = {
	delay: 150,
	duration: 500,
	origin: 'bottom',
	distance: '50px',
	viewOffset: {
        bottom: 300
    }
}
ScrollReveal().reveal('#clientes-box', opcoesSR)
ScrollReveal().reveal('.feature', opcoesSR)

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Leia Mais
$('#shitsu1_collapse').on('show.bs.collapse', function () {
  $('a[href="#shitsu1_collapse"]').text("Bebê em aleitamento materno precisa beber água em dias quentes?");
})

$('#shitsu1_collapse').on('hidden.bs.collapse', function () {
  $('a[href="#shitsu1_collapse"]').text("Bebê em aleitamento materno precisa beber água em dias quentes?");
})

$('#shitsu2_collapse').on('show.bs.collapse', function () {
  $('a[href="#shitsu2_collapse"]').text("Quando inicia o aleitamento materno?");
})

$('#shitsu2_collapse').on('hidden.bs.collapse', function () {
  $('a[href="#shitsu2_collapse"]').text("Quando inicia o aleitamento materno?");
})

$('#shitsu3_collapse').on('show.bs.collapse', function () {
  $('a[href="#shitsu3_collapse"]').text("Até quando devemos amamentar?");
})

$('#shitsu3_collapse').on('hidden.bs.collapse', function () {
  $('a[href="#shitsu3_collapse"]').text("Até quando devemos amamentar?");
})

$('#shitsu4_collapse').on('show.bs.collapse', function () {
  $('a[href="#shitsu4_collapse"]').text("A gestante precisa se consultar com pediatra?");
})

$('#shitsu4_collapse').on('hidden.bs.collapse', function () {
  $('a[href="#shitsu4_collapse"]').text("A gestante precisa se consultar com pediatra?");
})

$('#shitsu5_collapse').on('show.bs.collapse', function () {
  $('a[href="#shitsu5_collapse"]').text("As crianças maiores precisam ir a consultas de rotina ou só quando adoece?");
})

$('#shitsu5_collapse').on('hidden.bs.collapse', function () {
  $('a[href="#shitsu5_collapse"]').text("As crianças maiores precisam ir a consultas de rotina ou só quando adoece?");
})
