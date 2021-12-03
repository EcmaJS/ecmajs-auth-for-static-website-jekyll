API_KEY = "ST_MzdjYzYwN2EtZTIyNy00MjZkLTk3MGMtYzY3ODg3NjBjNzg0NjM3NzM1OTYyNTY5NjM2MzY5"
GET_ORDER_URL = "https://app.snipcart.com/api/orders/"

function checkRequest(){
  const email = document.getElementById('emailAuth').value;
  const token = document.getElementById('tokenAuth').value;
  if (email && token) {
    requestOrder(token);
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
  existingOrders.forEach((order) => {
    if (order.items.find(item => item.id === itemId)) {
      requestOrder();
      if (existingOrders.find(elem => elem.token == result.token)) {
        console.log('page has been loaded');
      }
      else {
        window.location.href = 'https://dover.ecmajs.dev/website/app/pages/content/post-details/01/auth.html';
      }
    }
    else {
      window.location.href = 'https://dover.ecmajs.dev/website/app/pages/content/post-details/01/auth.html';
    }
  });

async function requestOrder(token) {
  const request = await fetch(`${GET_ORDER_URL}${token}`, {
    headers: {
      'Authorization': `Basic ${btoa(API_KEY)}`,
      'Accept': 'application/json'
    }
  })
  return result = await request.json()
}
  // if (existingOrders.find(item => item.items) {
  //   console.log(item, itemId);
  //   const request = await fetch(`${GET_ORDER_URL}${item.token}`, {
  //     headers: {
  //       'Authorization': `Basic ${btoa(API_KEY)}`,
  //       'Accept': 'application/json'
  //     }
  //   })
  //   const result = await request.json();
  //   const checkToken = result.token;
  //   console.log(checkToken, result.token);
  //   if (existingOrders.find(order => order.token == checkToken)) {
  //     console.log('page has been loaded');
  //   }
  // }
  // else {
    // window.location.href = 'https://dover.ecmajs.dev/website/app/pages/content/post-details/01/auth.html';
  // }
}
