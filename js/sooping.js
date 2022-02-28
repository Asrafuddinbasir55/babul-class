
const displayLocalCart = () => {
  const cart = getCart()
  for (const name in cart) {
    displayProduct(name)
  }
}


const Additem = () => {
    const nameField = document.getElementById('product-name');
    const name = nameField.value 
    if (!name) {
        return
    }
 // display in the ul
    displayProduct(name)
 // add to local storage
   addCartTo(name)

    nameField.value = ''
}

const displayProduct = name => {
    const ul = document.getElementById('product')
    const li = document.createElement('li')
    li.innerText = name;
    ul.appendChild(li)
}

const getCart = () => {
   const cart = localStorage.getItem('cart')
   let cartObj;
   if (cart) {
    cartObj = JSON.parse(cart)
   }
   else {
    cartObj = {};
   }
   return cartObj;
}

const addCartTo = name => {
  const cart = getCart()
  if (cart[name]) {
    cart[name] = cart[name] + 1;
  }
  else {
    cart[name] = 1;
  }
  const stringFyid = JSON.stringify(cart)
  localStorage.getItem('cart', stringFyid)
  console.log(cart);
}

const placeOrder = () => {
    document.getElementById('product').textContent = ''
    localStorage.removeItem('cart')
}

displayLocalCart()