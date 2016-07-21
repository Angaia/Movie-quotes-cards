var quotes = [
	'"I shall die here. Every last inch of me shall perish. Except one." - V for Vendetta',
	' "You can\'t be ugly, except to people who don\'t understand." - Beginners',
	'"Mr. Franz, I think careers are a 20th century invention and I don\'t want one." - Into the wild'
];
// funcion para un quote aleatorio
$('#showOne').click( function (event){
	event.preventDefault()
	var max_index = quotes.length-1;
	var random_index = Math.floor(Math.random() * (max_index - 0 + 1));
	$('.quote').empty();	
	$('.quote').append(quotes[random_index]);
});

// funcion para cambiar quote
$('#changeQuote').click( function (event){
	event.preventDefault()
	var max_index = quotes.length-1;
	var random_index = Math.floor(Math.random() * (max_index - 0 + 1));
	$('.quote').empty();
	$('.quote').append(quotes[random_index]);
});

// Añadir quote desde input on key press
$('#enter_frase').keypress( function (event){
	if (event.which == '13') {
		event.preventDefault()
		var newQuote = $('#enter_frase').val();
		quotes.push(newQuote);
		alert("Nuevo quote añadido al array");
	}
});

// Show/hide current quotes al hacer click
// PROBLEMA: cada click añade los quotes a la lista anterior :/
$('#show').click( function (event){
	event.preventDefault()
	$('#quotesActuales').show();
	// por cada uno haz "...". Loop en for
	for (i = 0; i < quotes.length; i++) {
		var lista = $('<li>' + quotes[i] + '<button id="eliminar">X</button></li>');
		$('#quotesActuales').append(lista);
		$('li').prop('class', 'fondoVerde');
	};
});

// Hide quotes
$('#hide').click( function (event){
	event.preventDefault()
	$('#quotesActuales').hide();
});

// Eliminar frase al click en botón eliminar 
//(sólo lista, no del array)
$(document).on('click', '#eliminar', function (){
	$(this).closest('li').remove();
});

// Cambiar de color elemento lista al hacer click
$(document).on('click', '.fondoVerde', function (){
	$(this).toggleClass('fondoAzul');
});

// Añadir mientras escribe
$('#enter_frase').keyup(function(e) {
    $('.textPreview').text($(this).val());
});



