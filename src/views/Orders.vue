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
            <a href="" class="active">
                <i><font-awesome-icon :icon="['fas', 'box-open']" /></i>
                My Orders
            </a>
            </router-link>
            <br>
            <hr>
            <router-link to="/personalinfo" >
            <a href="#" class="personal " >
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
             <table>
                <tr>
                    <th>Number</th>
                    <th>product number</th>
                    <th>Product category</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total price</th>
                    <th>Date</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>56</td>
                    <td>Bloose</td>
                    <td>200</td>
                    <td>1</td>
                    <td>200</td>
                    <td>1/11/2020</td>
                </tr>
            </table>
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
text-align: left;
}
.main .mainsection a{
    color: #dc3545;
    border: 2px solid #043b5f;
    font-size: 20px;
    width: 70px;
    padding: 5px 30px 5px 30px;
    margin-left: 100px;
}
.main .mainsection table{
    width: 100%;    
}
.main .mainsection table tr{
    border: 2px solid #000;
}
.main .mainsection table td{
    border: 2px solid #000;
    color: #000;
    height: 50px;
    text-align: center;
}
.main .mainsection table th{
    border: 2px solid #000;
    color: #dc3545;
    height: 50px;
    text-align: center;
}
</style>