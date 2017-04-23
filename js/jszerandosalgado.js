//menu dropdown

$('li.dropdowncima').click(function() {
   $('li.dropdowncima').not(this).find('ul').hide();
   $(this).find('ul').toggle();
});

$('li.dropdown').click(function() {
   $('li.dropdown').not(this).find('ul').hide();
   $(this).find('ul').toggle();
});

$( "#rodarvideo" ).hide();

$('#mosvideo').on('click', function(){
  $('#rodarvideo').toggle();
});

$("#maisvendidos").hide();

$("#melhoravaliados").hide();

$("#listajogos").hide();

$('#teste1').on('click', function(){
  $("#promocao").show();
  $("#maisvendidos").hide();
  $("#melhoravaliados").hide();
  $("#listajogos").hide();
  $("#selpromocao").addClass("seleativo");
  $("#selmaisvendidos").removeClass("seleativo");
  $("#selmelhoravaliados").removeClass("seleativo");
  $("#sellistajogos").removeClass("seleativo");
});

$('#teste2').on('click', function(){
  $("#melhoravaliados").hide();
  $("#maisvendidos").show();
  $("#listajogos").hide();
  $("#promocao").hide();
  $("#selpromocao").removeClass("seleativo");
  $("#selmaisvendidos").addClass("seleativo");
  $("#selmelhoravaliados").removeClass("seleativo");
  $("#sellistajogos").removeClass("seleativo");
});

$('#teste3').on('click', function(){
  $("#promocao").hide();
  $("#maisvendidos").hide();
  $("#listajogos").hide();
  $("#melhoravaliados").show();
  $("#selpromocao").removeClass("seleativo");
  $("#selmaisvendidos").removeClass("seleativo");
  $("#selmelhoravaliados").addClass("seleativo");
  $("#sellistajogos").removeClass("seleativo");
});

$('#teste4').on('click', function(){
  $("#promocao").hide();
  $("#maisvendidos").hide();
  $("#listajogos").show();
  $("#melhoravaliados").hide();
  $("#selpromocao").removeClass("seleativo");
  $("#selmaisvendidos").removeClass("seleativo");
  $("#selmelhoravaliados").removeClass("seleativo");
  $("#sellistajogos").addClass("seleativo");
});
