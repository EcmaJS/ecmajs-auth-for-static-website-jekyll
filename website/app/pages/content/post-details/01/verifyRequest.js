$(document).ready(function() {
  $('#auth-go-to').on('click', function(){
    $.ajax({
      type: "GET",
      dataType: 'jsonp',
      url: "https://app.snipcart.com/api/orders/6d853811-ef49-4838-ae11-c4763cd73745",
      crossDomain : true
    })
    .done(function( data ) {
      console.log("done");
    })
    .fail( function(xhr, textStatus, errorThrown) {
      alert(xhr.responseText);
      alert(textStatus);
    });
  })
})
