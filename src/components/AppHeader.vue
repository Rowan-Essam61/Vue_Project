<template>
  <div class="header">
    <div class="container">
       
      <div class="logo1">
        <a href="#">
          <img src="../assets/logoweb2.jpg" width="120px" alt="" />
          <h1 class="spn1" style="color:#C71585">Vote To Buy</h1>
        </a>
      </div>
      <ul class="text-right">
          <router-link to="/" tag="li" exact>
              <a class="link1 homee">
                  <i><font-awesome-icon :icon="['fas', 'home']" /></i>
              </a>
          </router-link>
          |
          <router-link to="/blog" tag="li">
              <a class="link1">
                  <i><font-awesome-icon :icon="['fas', 'female']" /></i>
              </a>
          </router-link>
         
          |
          <!-- <router-link to="/help" tag="li">
      <a class="link1"
        ><i><font-awesome-icon :icon="['fas', 'shopping-cart']"/></i
      ></a>
    </router-link>-->
          <router-link to="/test" tag="li">
              <a class="link1">
                  <i><font-awesome-icon :icon="['fas', 'shopping-cart']" /></i>
              </a>
          </router-link>

          <li>
              <div class="container h-100">
                  <div class="d-flex justify-content-center h-100">
                      <div class="searchbar">
                          <input class="search_input"
                                 type="text"
                                 name=""
                                 placeholder="Search..." />
                          <a href="#" class="search_icon">
                              <i><font-awesome-icon :icon="['fas', 'search']" /></i>
                          </a>
                      </div>
                  </div>
              </div>
          </li>
          <div v-if="this.users!=''">
              <router-link to="/profile" tag="li" id="profile">
                  <a class="link1">
                      <i>
                          <font-awesome-icon :icon="['fas', 'user']" />
                      </i><br />
                      <span class="link1">welcome {{users}}</span>
                  </a>
              </router-link>
          </div>
          <div v-else>
              
                  <div class="btn-login" id="btn">
                      <router-link to="/about">
                          <a href="">Login</a>
                      </router-link>
                  </div>
              
          </div>
          
      </ul>
    </div>
  </div>
</template>
<script>

    export default {

        name: "AppHeader",
        data: function () {
            return {
                users:""
            }
        },
        methods: {
            getuser: function () {
                if (localStorage.getItem('users') != 'undefined') {
                  //  $('#btn').css('display', 'none');
                  //  $('#profile').css('display', 'block');

                    this.users = localStorage.getItem('users');
                }
                else {
                  //  $('#btn').css('display', 'block');
                  //  $('#profile').css('display', 'none');


                }

                
               }
    },
        beforeMount() {
            this.getuser()
    },


    };
   


</script>

<style lang="scss" scoped>

.searchbar {
  margin-bottom: auto;
  margin-top: auto;
  height: 60px;
  background-color: #ee8791;
  border-radius: 30px;
  padding: 10px;
}

.search_input {
  color: white;
  border: 0;
  outline: 0;
  background: none;
  width: 0;
  caret-color: transparent;
  line-height: 40px;
  transition: width 0.4s linear;
}
.link1 i:hover {
  color: #dc3545;
}

.searchbar:hover > .search_input {
  padding: 0 10px;
  width: 100px;
  caret-color: red;
  transition: width 0.4s linear;
}

.searchbar:hover > .search_icon {
  background: #ee8791;
  color: #000;
}
.search_input:focus {
  width: 100px;
}

.search_icon {
  height: 35px;
  width: 30px;
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: white;
  text-decoration: none;
}
ul li a i {
  font-size: 30px;
}
.btn-login {
  background-color: #dc3545;
}
.icon {
      cursor: pointer;
      color: black;
    }
.header {
  background-color: #fadcda;
  background-repeat: no-repeat;
  background-size: cover;
  color: #ffff00;
  overflow: hidden;
  ul {
    float: left;
    width: calc(100% - 100px);

    li {
      margin: 0;
      display: inline-block;
      padding: 20px;
      a {
        color: #000;
        text-decoration: none;
      }
    }
  }
}
.container {
  display: flex;
}
.container ul {
  padding-top: 30px;
  font-size: 20px;
}
.container .logo1 {
  display: flex;
  width: 500px;

  flex-direction: row;
}
.container .logo1 a:hover {
  text-decoration: none;
}
.container .logo1 a {
  display: flex;
}
.container .logo1 a h1 {
  padding-top: 30px;
  font-size: 25px;
  font-weight: bold;
}
.container .logo1 h1 {
  font-size: 25px;
  background: -webkit-linear-gradient(#ffff00, #c71585);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

ul li .btn-login a {
  color: #000;
  font-size: 20px;
  width: 70px;
  height: 50px;
  padding: 10px;
  background-color: #fadcda;
}
ul li .btn-login a:hover {
  text-decoration: none;
  color: #fff;
  background-color: #dc3545;
  border-radius: 0px;
  height: 50px;
}
</style>
