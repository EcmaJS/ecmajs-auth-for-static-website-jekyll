API_KEY = "ST_MzdjYzYwN2EtZTIyNy00MjZkLTk3MGMtYzY3ODg3NjBjNzg0NjM3NzM1OTYyNTY5NjM2MzY5"
GET_ORDER_URL = "https://app.snipcart.com/api/orders/"

async function checkData(){
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
      let str = '';
      str = ' ---
      '       layout: default
      '       ---
      '       Post 01
      '
      '       ### Post 01 content
      '
      '       Text will be here
      '
      '       Pdf will be here
      '
      '       Images will be here
      '
      '       <button class="snipcart-add-item"
      '         data-item-id="1"
      '         data-item-price="1"
      '         data-item-file-guid="ff4eef2b-8c2b-4481-8886-fe2fd7df69e4"
      '         data-item-description="First document"
      '         data-item-image="./images/1.jpg"
      '         data-item-name="Document">
      '         Add to cart
      '       </button>'
      document.getElementById('page-01').innerHTML += str;
      // alert('Успешно!');
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
