API_KEY = "ST_MzdjYzYwN2EtZTIyNy00MjZkLTk3MGMtYzY3ODg3NjBjNzg0NjM3NzM1OTYyNTY5NjM2MzY5"
GET_ORDER_URL = "https://app.snipcart.com/api/orders/"

async function checkRequest(){
  const email = document.getElementById('emailAuth').value;
  const token = document.getElementById('tokenAuth').value;
  if (email && token) {
    const request = await fetch(`${GET_ORDER_URL}${token}`, {
      headers: {
        'Authorization': `Basic ${btoa(API_KEY)}`,
        'Accept': 'application/json'
      }
    })
    const result = await request.json();
    if (email === result.email && token === result.token) {
      let existingOrders = JSON.parse(localStorage.getItem("allOrders"));
      if (existingOrders == null) existingOrders = [];
      const order = {
        "email": email,
        "token": token
      }
      if (!existingOrders.find(item => item.token === token)) {
        existingOrders.push(order);
        localStorage.setItem("allOrders", JSON.stringify(existingOrders));
      }
      window.location.href = 'https://dover.ecmajs.dev/website/app/pages/content/post-details/01/'
    }
    else {
      alert('Вы ввели неверные данные');
    }
  }
  else {
    alert('Вы заполнили не все поля');
  }
}

async function checkData() {
  const request = await fetch(`${GET_ORDER_URL}${token}`, {
    headers: {
      'Authorization': `Basic ${btoa(API_KEY)}`,
      'Accept': 'application/json'
    }
  })
  const result = await request.json();
  let existingOrders = JSON.parse(localStorage.getItem("allOrders"));
  if (existingOrders.find(item => item.token === result.token && item.email === result.email)) {
    console.log('page has been loaded');
  }
  else {
    window.location.href = 'https://dover.ecmajs.dev/website/app/pages/content/post-details/01/auth.html';
  }
}
