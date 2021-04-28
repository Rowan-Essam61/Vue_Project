<template>
  <div class="main" id="app">
    <div class="sidebar">
      <router-link to="/profile">
        <a href="#" class="active">
          <i><font-awesome-icon :icon="['fas', 'user']"/></i>
          My account
        </a>
      </router-link>
      <br />
      <hr />
      <router-link to="/orders">
        <a href="">
          <i><font-awesome-icon :icon="['fas', 'box-open']"/></i>
          My Orders
        </a>
      </router-link>
      <br />
      <hr />
      <router-link to="/personalinfo">
        <a href="#" class="personal">
          <i><font-awesome-icon :icon="['fas', 'user-edit']"/></i>
          Personal info
        </a>
      </router-link>
      <br />
      <router-link to="/changepassword">
        <a href="#">
          <i><font-awesome-icon :icon="['fas', 'lock']"/></i>
          Change Password
        </a>
      </router-link>
      <br />
      <hr />
      <router-link to="/">
        <a href="#">
          <i><font-awesome-icon :icon="['fas', 'door-open']"/></i>
          Sign out
        </a>
      </router-link>
    </div>
    <div class="mainsection">
      <div class="container" >
        <h2>Personal Information</h2>
        <label >
            <h4>Current Password:</h4>
            <input type="password" value="Roro" id="myInput1">
            <label class="ic " v-on:click="myfunction1" id="app">Show</label>
        </label>
        <label >
            <h4>Current Password:</h4>
            <input type="password" value="Roro" id="myInput2">
            <label class="ic " v-on:click="myfunction2" id="app">Show</label>
        </label>
        <label >
            <h4>Current Password:</h4>
            <input type="password" value="Roro" id="myInput3">
            <label class="ic " v-on:click="myfunction3" id="app">Show</label>
        </label>
        <button>Save</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.main {
  display: flex;
  width: 80%;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 100px;
}
.main .sidebar {
  flex-grow: 1;
  margin-right: 50px;
  border: 3px #000 solid;
  background-color: #fadcda;
  padding-top: 30px;
  padding-bottom: 30px;
  height: 350px;
}
.main .sidebar .personal {
  padding-bottom: 50px;
  margin-bottom: 20px;
}
.main .sidebar a {
  color: black;
  font-size: 20px;
  margin: 20px;
  padding-top: 30px;
}
.main .sidebar a:hover {
  text-decoration: none;
  color: #dc3545;
}
.main .sidebar .active {
  color: #dc3545;
}
.main .mainsection {
  flex-grow: 4;
  border: 3px #000 solid;
  padding-bottom: 30px;
  text-align: left;
}
.main .mainsection .container {
  width: 90%;
  display: flex;
  text-align: left;
  flex-direction: column;
}
.main .mainsection h2 {
  text-align: center;
  color: #dc3545;
  margin-bottom: 50px;
  margin-top: 30px;
}
.main .mainsection h4 {
  color: #000;
}
.main .mainsection input {
  border: 0px;
  border-bottom: 2px solid #000;
  outline: none;
  color: #000;
  width: 300px;
  margin-bottom: 20px;
}
.main .mainsection input:focus {
  border-bottom: 2px solid #dc3545;
}
.main .mainsection .container label:focus-within h4 {
  color: #dc3545;
}
.main .mainsection button {
  text-align: center;
  background-color: #fadcda;
  color: #000;
  width: 100%;
  height: 40px;
  font-size: 20px;
}
.main .mainsection button:hover {
  background-color: #dc3545;
  color: black;
}
.main .mainsection .container .ic {
  margin-left: -50px;
  color: #043b5f;
}
.main .mainsection .container .ic:hover {
  color: #dc3545;
}
.main .mainsection #app{
  color: black;
}
.main .mainsection #app:hover{
  color: #dc3545;
}
</style>
<script>
export default {
  el:"#app",
  methods: {
    myfunction1: function () {
      var x = document.getElementById("myInput1");
      if (x.type === "password") {
        x.type = "text";
        x.style.color="#dc3545";
      }
      else {
        x.type = "password";
      }
    },
    myfunction2: function () {
      var x = document.getElementById("myInput2");
      if (x.type === "password") {
        x.type = "text";
        x.style.color="#dc3545";
      }
      else {
        x.type = "password";
      }
    },
    myfunction3: function () {
      var x = document.getElementById("myInput3");
      if (x.type === "password") {
        x.type = "text";
        x.style.color="#dc3545";
      }
      else {
        x.type = "password";
      }
    }
  }
};
</script>
