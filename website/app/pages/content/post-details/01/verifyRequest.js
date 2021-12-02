async function testRequest(){
  const secret = "ST_MzdjYzYwN2EtZTIyNy00MjZkLTk3MGMtYzY3ODg3NjBjNzg0NjM3NzM1OTYyNTY5NjM2MzY5"
  const token = document.getElementById('tokenAuth').value;
  const request = await fetch(`https://app.snipcart.com/api/orders/${token}`, {
    headers: {
      'Authorization': `Basic ${btoa(secret)}`,
      'Accept': 'application/json'
    }
  })
  const result = await request.json()
  console.log(result);
}
