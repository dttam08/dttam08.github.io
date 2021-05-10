Waves.init();
Waves.attach('#livedemo-toolbar-toggle',['waves-block' , 'waves-light']);
Waves.attach('.btn',['waves-button','waves-float', 'waves-light']);
// toogle top
$('#livedemo-toolbar-toggle').click(function() {
  $('#advanced').slideToggle('slow');
  $('#advanced').css({'display':'flex'});
  $('#livedemo-toolbar-toggle').toggleClass('rotate');
});
// load page demo
$("#frameWrapper iframe").attr("src", "https://www.polarisvietnam.vn/");

// reload page when click view
$('.responsive-block .response').unbind('click').bind('click', function () {
  $('.responsive-block .response').removeClass('active');
  $(this).addClass('active');
  //response
  var response = $(this).attr('id');
  $('#iframelive').removeAttr('class');
  if(response ==='desktop'){
    $('#iframelive').addClass('desktop');
  }else {
    if(response ==='tablet-portrait'){
      $('#iframelive').addClass('tablet-portrait');
    }else {
      if(response ==='tablet-landscape'){
        $('#iframelive').addClass('tablet-landscape');
      }else{
        if(response ==='iphone-portrait'){
          $('#iframelive').addClass('iphone-portrait');
        }else{
          $('#iframelive').addClass('iphone-landscape');
        }
      }
    }
  }
});
