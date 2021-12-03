API_KEY = "ST_MzdjYzYwN2EtZTIyNy00MjZkLTk3MGMtYzY3ODg3NjBjNzg0NjM3NzM1OTYyNTY5NjM2MzY5"
GET_ORDER_URL = "https://app.snipcart.com/api/orders/"

async function requestOrder(token) {
  const request = await fetch(`${GET_ORDER_URL}${token}`, {
    headers: {
      'Authorization': `Basic ${btoa(API_KEY)}`,
      'Accept': 'application/json'
    }
  })
  return await request.json()
}

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
    const result =  await request.json()
    if (email === result.email && token === result.token) {
      let existingOrders = JSON.parse(localStorage.getItem("allOrders"));
      if (existingOrders == null) existingOrders = [];
      const order = {
        "email": email,
        "token": token,
        "items": result.items
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

function checkData(itemId) {
  let existingOrders = JSON.parse(localStorage.getItem("allOrders"));
  if (existingOrders) {
    existingOrders.forEach((order) => {
      if (order.items.find(item => item.id == itemId)) {
        const result = requestOrder();
        if (existingOrders.find(elem => elem.token == result.result.token)) {
          console.log('page has been loaded');
        }
        else {
          window.location.href = 'https://dover.ecmajs.dev/website/app/pages/content/post-details/01/auth.html';
        }
      }
      else {
        window.location.href = 'https://dover.ecmajs.dev';
      }
    });
  }
}
