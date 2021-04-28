<template>
<div>
  <h1>Dresses</h1>
  <div class="row container1">
    
   <div class="col-md-4 first">
  <img src="../assets/u-baski-detayli-elbise--orman-yesili--refka-1748931-1.pg.jpg" alt="Denim Jeans" style="width:100%">
  <h2>Tailored Jeans</h2>
  <p class="price">$19.99</p>
  <p>Some text about the jeans..</p>
  <p><button>Add to Cart</button></p>
</div>
 <div class="col-md-4">
  <img src="../assets/u-brit-detayli-elbise--siyah--refka-1772367-1772367-1.jpg" alt="Denim Jeans" style="width:100%">
  <h2>Tailored Jeans</h2>
  <p class="price">$19.99</p>
  <p>Some text about the jeans..</p>
  <p><button >Add to Cart</button></p>
</div>

 <div class="col-md-4">
  <img src="../assets/u-duz-renk-kat-kat-elbise--indigo--ceylan-otantik-1872403-3.jpg" alt="Denim Jeans" style="width:100%">
 <h2>Tailored Jeans</h2>
  <p class="price">$19.99</p>
  <p>Some text about the jeans..</p>
  <p><button>Add to Cart</button></p>
</div>
<br><br>
<div class="col-md-4">
  <img src="../assets/u-zara-tulum--kiremit--rana-zenn-1157492-4.jpg" alt="Denim Jeans" style="width:100%">
  <h2>Tailored Jeans</h2>
  <p class="price">$19.99</p>
  <p>Some text about the jeans..</p>
  <p><button>Add to Cart</button></p>
</div>
<br><br>
<div class="col-md-4">
  <img src="../assets/u-garnili-spor-elbise--lila-ekru--alia-1781224-4.jpg" alt="Denim Jeans" style="width:100%">
  <h2>Tailored Jeans</h2>
  <p class="price">$19.99</p>
  <p>Some text about the jeans..</p>
  <p><button>Add to Cart</button></p>
</div>
  </div>
</div>
</template>
<style scoped>
.first{
  margin-left: 50px;
}
h1{
  text-align: center;
  margin-top: 50px;
  margin-bottom: 0px;
  background: -webkit-linear-gradient(#fadcda, #dc3545);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 60px;
}
.col-md-4 {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
  font-size: 20px;
  margin-top: 50px;
   margin-bottom: 20px;
}
.col-md-4 img{
  width: 100%;
 
}
.price {
  color: grey;
  font-size: 22px;
}

.col-md-4 button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
}

</style>
