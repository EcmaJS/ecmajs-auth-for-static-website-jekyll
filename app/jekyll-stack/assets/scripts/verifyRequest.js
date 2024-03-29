API_KEY = "ST_MzdjYzYwN2EtZTIyNy00MjZkLTk3MGMtYzY3ODg3NjBjNzg0NjM3NzM1OTYyNTY5NjM2MzY5"
GET_ORDER_URL = "https://app.snipcart.com/api/orders/"

async function checkRequest(authUrl){
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
      window.location.href = authUrl;
    }
    else {
      alert('Вы ввели неверные данные');
    }
  }
  else {
    alert('Вы заполнили не все поля');
  }
}

async function checkData(itemId, backUrl) {
  let existingOrders = JSON.parse(localStorage.getItem("allOrders"));
  if (existingOrders) {
    for (order of existingOrders) {
      if (order.items.find(item => item.id == itemId)) {
        const item = (order.items.find(item => item.id == itemId));
        const request = await fetch(`${GET_ORDER_URL}${item.token}`, {
          headers: {
            'Authorization': `Basic ${btoa(API_KEY)}`,
            'Accept': 'application/json'
          }
        })
        const result = await request.json();
        if (existingOrders.find(elem => elem.token == result.token)) {
          console.log('Page has been loaded!');
          hideLoader();
        }
        else {
          window.location.href = backUrl;
        }
      }
      else {
        window.location.href = backUrl;
      }
    };
  }
  else {
    window.location.href = backUrl;
  }
}

function hideLoader() {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}