$('#show-menu').on('click',function(){
  //$(this).toggleClass('open');s
  if($(this).hasClass('open')){
    $(this).removeClass('open');
    $(this).find('span').removeClass('icon-cross').addClass('icon-menu');
  }
  else{
$(this).addClass('open');
$(this).find('span').removeClass('icon-menu').addClass('icon-cross');

  }
 });

$(window).resize(function(){
  if ($(window).width()>885){
  if ($('#show-menu').haClass('open')){
  $('#show-menu').removeAttr('open')
  .find('span')
  .removeClass('icon-cross')
  .addClass('icon-menu');
}
}
});