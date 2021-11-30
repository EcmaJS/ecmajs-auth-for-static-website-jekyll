import $ from "jquery";

function httpGet()
{
  $.ajax({
    type: "POST",
    dataType: 'text',
    url: "https://app.snipcart.com/api/orders/6d853811-ef49-4838-ae11-c4763cd73745",
    username: 'user',
    password: 'pass',
    crossDomain : true,
    xhrFields: {
      withCredentials: true
    }
  })
  .done(function( data ) {
      console.log("done");
  })
  .fail( function(xhr, textStatus, errorThrown) {
    alert(xhr.responseText);
    alert(textStatus);
  });
}
