<template>
    <div class="about">
        <div class="row">
            <div class="col-md-6 mx-auto p-0">

                <div class="card">
                    <div class="login-box">
                        <div class="login-snip">
                            <input id="tab-1" type="radio" name="tab" class="sign-in" checked>
                            <label for="tab-1" class="tab">Login</label>
                            <input id="tab-2" type="radio" name="tab" class="sign-up">
                            <label for="tab-2" class="tab">Sign Up</label>
                            <div class="login-space">
                                <form class="login" v-on:submit.prevent action="#" method="get">
                                    <div class="group">
                                        <label for="user" class="label label1">Username</label>
                                        <input id="user" type="text" class="input" placeholder="Enter your username" v-model="input1.username">
                                    </div>
                                    <div class="group">
                                        <label for="pass" class="label">Password</label>
                                        <input id="pass" type="password" class="input" data-type="password" placeholder="Enter your password" v-model="input1.password">
                                    </div>
                                    <div class="group">
                                        <input id="check" type="checkbox" class="check" checked>
                                        <label for="check"><span class="icon"></span> Keep me Signed in</label>
                                    </div>
                                    <div class="group">
                                        <button @click="mounted();" class="button">login</button>
                                    </div>
                                        <div class="hr"></div>
                                    <div class="foot"> <a href="#">Forgot Password?</a> </div>
                                </form>

                                <form v-on:submit.prevent action="#" method="post" class="sign-up-form">
                                    <div class="group">
                                        <label for="user" class="label">Username</label>
                                        <input id="user" name="User_Name" type="text" class="input" placeholder="Create your Username" v-model="input.username">
                                    </div>
                                    <div class="group">
                                        <label for="user" class="label">Firstname</label>
                                        <input id="user" type="text" name="First_Name" class="input" placeholder="Create your Firstname" v-model="input.firstname">
                                    </div>
                                    <div class="group">
                                        <label for="user" class="label">Lastname</label>
                                        <input id="user" type="text" name="Last_Name" class="input" placeholder="Create your LastName" v-model="input.lastname">
                                    </div>

                                    <div class="group">
                                        <label for="pass" class="label">Password</label>
                                        <input id="pass" type="password" class="input" name="Password" data-type="password" placeholder="Create your password" v-model="input.password">
                                    </div>
                                    <div class="group">
                                        <label for="pass" class="label">Repeat Password</label>
                                        <input id="pass" type="password" class="input" data-type="password" v-model="input.confirm" placeholder="Repeat your password">
                                    </div>
                                    <div class="group">
                                        <label for="pass" class="label">Email Address</label>
                                        <input id="pass" type="text" class="input" name="Email"  placeholder="Enter your email address" v-model="input.email">
                                    </div>
                                    <div class="group">
                                        <label for="pass" class="label">AGE</label>
                                        <input id="pass" type="text" class="input" name="Age" v-model="input.age">
                                    </div>
                                    <div class="group">
                                        <label for="pass" class="label">phone</label>
                                        <input id="pass" type="text" class="input" name="phone" v-model="input.phone">
                                    </div>
                                    <div class="group">
                                        <label for="pass" class="label">address</label>
                                        <input id="pass" type="text" class="input" name="address" v-model="input.address">
                                    </div>
                                    <div class="group">
                                        <label for="pass" class="label">gender</label>
                                        <input id="pass" type="text" class="input" name="gender" v-model="input.gender">
                                    </div>
                                    <div class="group">
                                        <button @click="AddUser();" class="button">signuppp</button>
                                    </div>
                                        <div class="hr"></div>
                                    <div class="foot"> <label for="tab-1">Already Member?</label> </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>
<script>
    import axios from "axios"
    import Vue from "vue"
    import VueAxios from "vue-axios"
    Vue.use(VueAxios,axios)

    export default {
        name: 'about',
        data: function () {
            return {
                loading: false,
                errorMsg: "",
                SuccessMsg: "",
                input: {
                    username: "",
                    firstname: "",
                    lastname: "",
                    age: "",
                    password: "",
                    confirm:"",
                    email: "",
                    phone: "",
                    address: "",
                    gender: ""

                },
                input1: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            mounted() {
                this.loading = true;

                axios
                    .get('http://localhost/API/api/read_single.php?User_Name=' + this.input1.username)
                    .then(response => (this.all_users = response.data),
                       
                )
                    .catch(error => console.log(error))
                    .finally(() => this.loading = false)
                console.log(this.all_users['password'])
                if (this.all_users != "undefined") {
                    if (this.all_users['password'] == this.input1.password) {
                        alert("login successful")

                        this.$router.push({ name: 'Home' })
                    }
                    else {
                        alert("invalid password")

                        this.$router.push({ name: 'About' })
                    }
                }
                else {
                    alert("not Found User name")

                    this.$router.push({ name: 'About' })
                   
                }
                
                
            },

            AddUser: function () {

                if (this.input.password == this.input.confirm) {
                    axios.post("http://localhost/API/api/create.php", this.input)

                        .then((result) => {
                            alert(result.data)
                            if (result.data.error) {
                                alert("2")
                                this.errorMsg = result.data.message;

                                this.$router.push({ name: 'About' })

                            }
                            else {

                                this.SuccessMsg = result.data.message;
                                alert("3")
                                this.$router.push({ name: 'Home' })

                            }
                        })
                }
                else {
                    alert("confirmed password is incorrect");
                }
            },
           


        }
    }

    

    
</script>




<!--
<script>

    // @ is an alias to /src
    export default {
        data: function () {
            return {
                pageName: "about us",
                pageDescription: "this is about us page"
            };
        },
        name: "about",

    };</script>-->
<style scoped>
    .about {
        height: 2000px;
        margin-top: 100px;
        margin-bottom: 200px;
        padding-bottom: 100px;
        width: 97%;
    }

    body {
        margin: 0;
        color: #6a6f8c;
        background: white;
        font: 600 16px/18px "Open Sans", sans-serif;
        width: 100%;
    }

    .card {
        margin-bottom: 200px;
    }

    .login-space {
        padding-bottom: 50px;
    }

    .login-box {
        width: 100%;
        margin: auto;
        max-width: 525px;
        min-height: 1500px;
        position: relative;
        box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
    }

    .row .col-md-6 .backgroundImage img {
        position: relative;
        width: 1000px;
    }

    .card {
        position: absolute;
    }

    .login-snip {
        width: 100%;
        height: 110%;
        position: absolute;
        padding: 90px 70px 50px 70px;
        background: #fadcda;
    }

    .login-box .login-snip label {
        color: #ff9da6;
    }

    .login-box .login-snip .login-space .group label {
        color: rgba(0, 0, 0, 0.8);
        padding-top: 25px;
        font-size: 15px;
    }

    .login .group label {
        color: white;
    }

    .login .group input:focus {
        outline: 0px;
        color: #000;
        border: 1px solid #dc3545;
        border-radius: 50px;
    }

    .sign-up-form .group input:focus {
        outline: 0px;
        border: 1px solid #dc3545;
        border-radius: 50px;
    }

    .login-snip .login,
    .login-snip .sign-up-form {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        color: white;
        position: absolute;
        transform: rotateY(180deg);
        backface-visibility: hidden;
        transition: all 0.4s linear;
    }

    .login-snip .sign-in,
    .login-snip .sign-up,
    .login-space .group .check {
        display: none;
    }

    .login-snip .tab,
    .login-space .group .label,
    .login-space .group .button {
        text-transform: uppercase;
    }

    .login-snip .tab {
        font-size: 22px;
        margin-right: 15px;
        padding-bottom: 5px;
        margin: 0 15px 10px 0;
        display: inline-block;
        border-bottom: 2px solid transparent;
    }

    .login-snip .sign-in:checked + .tab,
    .login-snip .sign-up:checked + .tab {
        color: #dc3545;
        border-color: #dc3545;
    }

    .login-space {
        min-height: 345px;
        position: relative;
        perspective: 1000px;
        transform-style: preserve-3d;
    }

        .login-space .group {
            margin-bottom: 15px;
        }

            .login-space .group .label,
            .login-space .group .input,
            .login-space .group .button {
                width: 100%;
                color: #fff;
                display: block;
            }

            .login-space .group .input,
            .login-space .group .button {
                border: none;
                padding: 15px 20px;
                border-radius: 50px;
                background: rgba(255, 255, 255, 0.1);
            }

            .login-space .group input[data-type="password"] {
                text-security: circle;
                -webkit-text-security: circle;
            }

            .login-space .group .label {
                color: #aaa;
                font-size: 12px;
            }

            .login-space .group .button {
                background: #dc3545;
            }

            .login-space .group label .icon {
                width: 15px;
                height: 15px;
                border-radius: 2px;
                position: relative;
                display: inline-block;
                background: rgba(255, 255, 255, 0.1);
            }

                .login-space .group label .icon:before,
                .login-space .group label .icon:after {
                    content: "";
                    width: 10px;
                    height: 2px;
                    background: #fff;
                    position: absolute;
                    transition: all 0.2s ease-in-out 0s;
                }

                .login-space .group label .icon:before {
                    left: 3px;
                    width: 5px;
                    bottom: 6px;
                    transform: scale(0) rotate(0);
                }

                .login-space .group label .icon:after {
                    top: 6px;
                    right: 0;
                    transform: scale(0) rotate(0);
                }

            .login-space .group .check:checked + label {
                color: rgb(206, 160, 160);
            }

                .login-space .group .check:checked + label .icon {
                    background: #1161ee;
                }

                    .login-space .group .check:checked + label .icon:before {
                        transform: scale(1) rotate(45deg);
                    }

                    .login-space .group .check:checked + label .icon:after {
                        transform: scale(1) rotate(-45deg);
                    }

    .login-snip .sign-in:checked + .tab + .sign-up + .tab + .login-space .login {
        transform: rotate(0);
    }

    .login-snip .sign-up:checked + .tab + .login-space .sign-up-form {
        transform: rotate(0);
    }

    *,
    :after,
    :before {
        box-sizing: border-box;
    }

    .clearfix:after,
    .clearfix:before {
        content: "";
        display: table;
    }

    .clearfix:after {
        clear: both;
        display: block;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    .hr {
        height: 2px;
        margin: 60px 0 50px 0;
        background: rgba(255, 255, 255, 0.2);
    }

    .foot {
        text-align: center;
        color: rgba(0, 0, 0, 1);
    }

    .card {
        width: 500px;
        left: 100px;
    }

    ::placeholder {
        color: #8f8d8d;
    }
</style>
