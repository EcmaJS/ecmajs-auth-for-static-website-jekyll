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
      const orders = [];
      const order = {
        email: email,
        token: token
      };
      if (!localStorage.getItem('orders')) {
        localStorage.setItem("orders", JSON.stringify(orders));
        JSON.parse(localStorage.getItem("orders")).push(order);
      }
      else {
        JSON.parse(localStorage.getItem("orders")).push(order);
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

function checkData() {
  console.log('page has been loaded');
}
