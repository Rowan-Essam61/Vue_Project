<template>
  <div>
    <div class="container">
      <h1>Shopping Cart</h1>
      <div id="alerts"></div>
      <div class="productcont">
        <div class="product">
          <h3 class="productname">Dress</h3>
          <img
            class="card-img-top rounded-10"
            src="../assets/u-garnili-spor-elbise--lila-ekru--alia-1781224-1.jpg"
            alt="Card image cap"
          />
          <p class="price">$5.05</p>
          <button class="addtocart">+</button>
          <button class="addtocart">-</button>
        </div>
        <div class="product">
          <h3 class="productname">Jumpsuit</h3>
          <img
            class="card-img-top rounded-10"
            src="../assets\u-dora-tulum--mor--sure-tesettur-468044-2.jpg"
            alt="Card image cap"
          />
          <br /><br />
          <p class="price">$8.50</p>
          <button class="addtocart">+</button>
          <button class="addtocart">-</button>
        </div>
        <div class="product">
          <h3 class="productname">Blouse</h3>
          <img
            class="card-img-top rounded-10"
            src="../assets/u-buyuk-beden-tunik--yag-yesili--alia-1691239-2.jpg"
            alt="Card image cap"
          />
          <br />
          <p class="price">$10.50</p>
          <button class="addtocart">+</button>

          <button class="addtocart">-</button>
        </div>
      </div>
      <div class="cart-container">
        <h2>Cart</h2>
        <table>
          <thead>
            <tr>
              <th><strong>Product</strong></th>
              <th><strong>Price</strong></th>
            </tr>
          </thead>
          <tbody id="carttable"></tbody>
        </table>
        <hr />
        <table id="carttotals">
          <tr>
            <td><strong>Items</strong></td>
            <td><strong>Total</strong></td>
          </tr>
          <tr>
            <td>x <span id="itemsquantity">0</span></td>

            <td>$<span id="total">0</span></td>
          </tr>
        </table>

        <div class="cart-buttons">
          <button id="emptycart">Empty Cart</button>
          <button id="checkout">Checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Quicksand:400,700");
*,
::before,
::after {
  box-sizing: border-box;
}
body {
  font-family: "Quicksand", sans-serif;
  text-align: center;
  line-height: 1.5em;
  /*   background:#E0E4CC; */
  background: #fadcda;
  background: -moz-linear-gradient(
    -45deg,
    #fadcda 0%,
    #fadcda 25%,
    #e0e4cc 46%,
    #e0e4cc 54%,
    #c72b6e 75%,
    #c72b6e 100%
  );
  background: -webkit-linear-gradient(
    -45deg,
    #fadcda 0%,
    #fadcda 25%,
    #e0e4cc 46%,
    #e0e4cc 54%,
    #c72b6e 100%
  );
  background: linear-gradient(
    135deg,
    #fadcda 0%,
    #fadcda 25%,
    #e0e4cc 46%,
    #e0e4cc 54%,
    #f38630 75%,
    #fa6900 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#69d2e7', endColorstr='#fa6900',GradientType=1 );
}
hr {
  border: none;
  background: #e0e4cc;
  height: 1px;
  /*   width:60%;
  display:block;
  margin-left:0; */
}
.container {
  max-width: 800px;
  margin: 1em auto;
  background: #fff;
  padding: 30px;
  border-radius: 5px;
  
}
.productcont {
  display: flex;
}
.product {
  padding: 1em;
  border: 1px solid #e0e4cc;
  margin-right: 1em;
  border-radius: 5px;
}
.cart-container {
  border: 1px solid #e0e4cc;
  border-radius: 5px;
  margin-top: 1em;
  padding: 1em;
}
button,
input[type="submit"] {
  border: 1px solid #c72b6e;
  color: #fff;
  background: #c72b6e;
  padding: 0.6em 1em;
  font-size: 1em;
  line-height: 1;
  border-radius: 1.2em;
  transition: color 0.2s ease-in-out,
   background 0.2s ease-in-out,
    border-color 0.2s ease-in-out;
}
button:hover,
button:focus,
button:active,
input[type="submit"]:hover,
input[type="submit"]:focus,
input[type="submit"]:active {
  background: #fadcda;
  border-color: #fadcda;
  color: #000;
  cursor: pointer;
}
table {
  margin-bottom: 1em;
  border-collapse: collapse;
}
table td,
table th {
  text-align: left;
  padding: 0.25em 1em;
  border-bottom: 1px solid #e0e4cc;
}
#carttotals {
  margin-right: 0;
  margin-left: auto;
}
.cart-buttons {
  width: auto;
  margin-right: 0;
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  padding: 1em 0;
}
#emptycart {
  margin-right: 1em;
}
table td:nth-last-child(1) {
  text-align: right;
}
.message {
  border-width: 1px 0px;
  border-style: solid;
  border-color: #fadcda;
  color: #fadcda;
  padding: 0.5em 0;
  margin: 1em 0;
}
</style>
<script>
import $ from "jquery";
$("#slider > div:gt(0)").hide();
setInterval(function() {
  $("#slider > div:first")
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo("#slider");
}, 3000);
</script>
<script>
export default {
  data: function() {
    /* get cart total from session on load */
    updateCartTotal();

    /* button event listeners */
    document.getElementById("emptycart").addEventListener("click", emptyCart);
    var btns = document.getElementsByClassName("+");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        addToCart(this);
      });
    }

    /* ADD TO CART functions */

    function addToCart(elem) {
      //init
      var sibs = [];
      var getprice;
      var getproductName;
       cart = [];
      var stringCart;
      //cycles siblings for product info near the add button
      while ((elem = elem.previousSibling)) {
        if (elem.nodeType === 3) continue; // text node
        if (elem.className == "price") {
          getprice = elem.innerText;
        }
        if (elem.className == "productname") {
          getproductName = elem.innerText;
        }
        sibs.push(elem);
      }
      //create product object
      var product = {
        productname: getproductName,
        price: getprice,
      };
      //convert product data to JSON for storage
      var stringProduct = JSON.stringify(product);
      /*send product data to session storage */

      if (!sessionStorage.getItem("cart")) {
        //append product JSON object to cart array
        cart.push(stringProduct);
        //cart to JSON
        stringCart = JSON.stringify(cart);
        //create session storage cart item
        sessionStorage.setItem("cart", stringCart);
        addedToCart(getproductName);
        updateCartTotal();
      } else {
        //get existing cart data from storage and convert back into array
        cart = JSON.parse(sessionStorage.getItem("cart"));
        //append new product JSON object
        cart.push(stringProduct);
        //cart back to JSON
        stringCart = JSON.stringify(cart);
        //overwrite cart data in sessionstorage
        sessionStorage.setItem("cart", stringCart);
        addedToCart(getproductName);
        updateCartTotal();
      }
    }
    /* Calculate Cart Total */
    function updateCartTotal() {
      //init
      var total = 0;
      var price = 0;
      var items = 0;
      var productname = "";
      var carttable = "";
      if (sessionStorage.getItem("cart")) {
        //get cart data & parse to array
        var cart = JSON.parse(sessionStorage.getItem("cart"));
        //get no of items in cart
        items = cart.length;
        //loop over cart array
        for (var i = 0; i < items; i++) {
          //convert each JSON product in array back into object
          var x = JSON.parse(cart[i]);
          //get property value of price
          price = parseFloat(x.price.split("$")[1]);
          productname = x.productname;
          //add price to total
          carttable +=
            "<tr><td>" +
            productname +
            "</td><td>$" +
            price.toFixed(2) +
            "</td></tr>";
          total += price;
        }
      }
      //update total on website HTML
      document.getElementById("total").innerHTML = total.toFixed(2);
      //insert saved products to cart table
      document.getElementById("carttable").innerHTML = carttable;
      //update items in cart on website HTML
      document.getElementById("itemsquantity").innerHTML = items;
    }
    //user feedback on successful add
    function addedToCart(pname) {
      var message = pname + " was added to the cart";
      var alerts = document.getElementById("alerts");
      alerts.innerHTML = message;
      if (!alerts.classList.contains("message")) {
        alerts.classList.add("message");
      }
    }
    //remove products
    $('-').on('click', e => {
  if (e.target.classList.contains('remove')) {
    const element = e.target;
    const parent = getParentWithKey(element);
    const key = parseInt(parent.dataset.key, 10);

    parent.parentElement.removeChild(parent);
    store.trigger('ITEM_REMOVED', { item: key });
  }
});
    /* User Manually empty cart */
    function emptyCart() {
      //remove cart session storage object & refresh cart totals
      if (sessionStorage.getItem("cart")) {
        sessionStorage.removeItem("cart");
        updateCartTotal();
        //clear message and remove class style
        var alerts = document.getElementById("alerts");
        alerts.innerHTML = "";
        if (alerts.classList.contains("message")) {
          alerts.classList.remove("message");
        }
        
      }
    }
  },
};
</script>