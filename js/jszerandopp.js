$('#toggleDestaques').click(function(){
        $('#isDestaques').toggle();
});

$('#togglePromocoes').click(function(){
        $('#isPromocoes').toggle();
		$('#isMaisVendidos').hide();
		$('#isMelhorAvaliados').hide();
});

$('#toggleMaisVendidos').click(function(){
        $('#isMaisVendidos').toggle();
		$('#isPromocoes').hide();
	    $('#isMelhorAvaliados').hide();
});

$('#toggleMelhorAvaliados').click(function(){
        $('#isMelhorAvaliados').toggle();
		$('#isPromocoes').hide();
        $('#isMaisVendidos').hide();
});


$('#togglePromocoes').addClass('selecionado');
$('#isMaisVendidos #isMelhorAvaliados').removeClass('selecionado');
