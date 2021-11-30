function httpGet()
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://app.snipcart.com/api/orders/6d853811-ef49-4838-ae11-c4763cd73745", false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
