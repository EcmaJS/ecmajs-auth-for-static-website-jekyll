async function testRequest(){
  const secret = "ST_MzdjYzYwN2EtZTIyNy00MjZkLTk3MGMtYzY3ODg3NjBjNzg0NjM3NzM1OTYyNTY5NjM2MzY5"

  const request = await fetch('https://app.snipcart.com/api/orders', {
      headers: {
          'Authorization': `Basic ${btoa(secret)}`,
          'Accept': 'application/json'
      }
  })

  const result = await request.json()
  console.log(result);
  // $('#auth-go-to').on('click', function(){
  //   $.ajax({
  //     type: "GET",
  //     data: {
  //       API_KEY: "ZjgyNjkwMDAtNGM3MS00ODA5LTgyNjEtMDA4YzVjY2E3MGJmNjM3NzM1OTQ4Mzk2Nzg5Nzkx"
  //     },
  //     dataType: 'jsonp',
  //     url: "https://app.snipcart.com/api/orders/6d853811-ef49-4838-ae11-c4763cd73745",
  //     crossDomain : true
  //   })
  //   .done(function( data ) {
  //     console.log("done");
  //   })
  //   .fail( function(xhr, textStatus, errorThrown) {
  //     alert(xhr.responseText);
  //     alert(textStatus);
  //   });
  // })
}
