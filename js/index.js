$(function(){
  var sectorCount = 10;
  $('button').on('click', function(e){
    var randomSector = Math.floor(Math.random() * sectorCount) + 1;
    $('.image').attr('class', 'image sector-' + randomSector);
  }).trigger('click');
});
