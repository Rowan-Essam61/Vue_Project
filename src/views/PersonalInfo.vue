<template>
    <div class="main">
        <div class="sidebar">
            <router-link to="/profile" >
                <a href="#" >
                    <i><font-awesome-icon :icon="['fas', 'user']" /></i>
                    My account
                </a>
            </router-link>
            <br><hr>
            <router-link to="/orders" >
            <a href="">
                <i><font-awesome-icon :icon="['fas', 'box-open']" /></i>
                My Orders
            </a>
            </router-link>
            <br>
            <hr>
            <router-link to="/personalinfo" >
            <a href="#" class="personal active" >
                <i><font-awesome-icon :icon="['fas', 'user-edit']" /></i>
                Personal info
            </a>
            </router-link>
            <br>
            <router-link to="/changepassword" >
            <a href="#">
                <i><font-awesome-icon :icon="['fas', 'lock']" /></i>
                Change Password
            </a>
            </router-link>
            <br><hr>
            <router-link to="/" >
            <a href="#">
                <i><font-awesome-icon :icon="['fas', 'door-open']" /></i>
                Sign out
            </a>
            </router-link>
        </div>
        <div class="mainsection">
             <div class="container">
                <h2>Personal Information</h2>
               <label>
                    <h4>First Name:</h4>
                    <input type="text" value="Rowan" >
               </label>
                <label>
                    <h4>Last Name:</h4>
                    <input type="text" value="Essam" >
                </label>
                <label>
                    <h4 >Email Address:</h4>
                    <input type="text" value="sim.rowan.essam@alexu.edu.eg" >
                </label>
                <label>
                    <h4>Phone Number</h4>
                    <input type="tel" value="012********" >
               </label>
               <label>
                    <h4>Gender</h4>
                    <select name="gender">
                        <option value="select" class="select">Please select</option>
                        <option value="male" class="male">Male</option>
                        <option value="female" class="female">Female</option>
                    </select>
                    </label>
                <label>
                    <h4>Date of birth</h4>
                    <input type="date">
               </label>
               <button>Save</button>
            </div>    
        </div>
    </div>
</template>
<style scoped>
.main{
    display: flex;
    width: 80%;
    margin: auto;
    margin-top: 100px;
    margin-bottom: 100px;
}
.main .sidebar{
    flex-grow: 1;
    margin-right: 50px;
    border: 3px #000 solid;
    background-color: #fadcda;
    padding-top: 30px;
    padding-bottom: 30px;
    height: 350px;
}
.main .sidebar .personal{
    padding-bottom: 50px;
    margin-bottom: 20px;
}
.main .sidebar a{
    color: black;
    font-size: 20px;
    margin: 20px;
    padding-top: 30px;
}
.main .sidebar a:hover{
    text-decoration: none;
    color: #dc3545;
}
.main .sidebar .active{
    color: #dc3545;
}
.main .mainsection{
flex-grow: 4;
border: 3px #000 solid;
padding-bottom: 30px;

}
.main .mainsection .container .email{
    margin-left: 150px;
    margin-top: 10px;
}
.main .mainsection .container .mail{
    margin-left: 100px;
    margin-bottom: 50px;
}

.main .mainsection{
flex-grow: 4;
border: 3px #000 solid;
padding-bottom: 30px;
}
.main .mainsection .container{
    width: 90%;
    display: flex;
    flex-direction: column;
}
.main .mainsection h2{
    text-align: center;
    color: #dc3545;
}
.main .mainsection h4{
    color: #000;
}
.main .mainsection input{
    border: 0px;
    border-bottom: 2px solid #000;
    outline: none;
    color: #000;
    margin-bottom: 20px;
}
.main .mainsection input:focus{
    border-bottom: 2px solid #dc3545;
}
.main .mainsection .container label:focus-within h4{
    color: #dc3545;
}
.main .mainsection .container .mail{
    color: #043b5f;
    margin-bottom: 20px;
}
.main .mainsection .container select{
    border: 0px;
    width: 200px;
    color: #000;
    margin-bottom: 20px;
    border-bottom: 2px solid #000;
}
.main .mainsection .container select:focus{
    border: 0px;
    outline: none;
    border-bottom: 2px solid #dc3545;
}
.main .mainsection button{
    text-align: center;
    background-color: #fadcda;
    color: #000;
    width: 100%;
    height: 40px;
    font-size: 20px;
}
.main .mainsection button:hover{
    background-color: #dc3545;
}
</style>