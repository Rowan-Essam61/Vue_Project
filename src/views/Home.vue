<template>
    <div>
        <div class="top">
            <h1 >Welcome to VTP shop</h1>
            <img class="d-block w-90 imgg" src="../assets/slider.jpg">
        </div>
                   
        <!-- <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div id="slider" class="carousel-inner">

                <div class="content carousel-item active">
                    
                </div>
                <div class="content carousel-item">
                    <img class="d-block w-90 imgg" src="../assets/d-2.png" alt="Second slide">
                </div>

                <div class="content carousel-item">
                    <img class="d-block w-90 imgg" src="../assets/79b1fccd-6714-40e0-9430-dae4a42baacb.jpg" alt="Third slide">
                </div>

            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>

        </div> -->
        <div class="create-brand">
            <button><span class="noselect">Create Your Brand</span><div id="circle"></div></button>
        </div>
        <br><br>
        <h1 class="text-center text-light head"><strong>Brands</strong></h1>
        <div class="container c">
            <div class="row">
                <div class="col-md-4">
                    <hr>
                    <div class="profile-card-6">
                        <img src="../assets/fashion-logo-design.jpg" class="img img-responsive">
                        <div class="profile-name">
                            Logo
                        </div>
                        <div class="profile-position">Dresses</div>
                        <div class="profile-overview">
                            <div class="row text-center">

                                <div class="col-s-4">
                                    <h3>35</h3>
                                    <p>Folowers</p>
                                </div>
                                <div class="col-s-4">
                                    <h3 class="rate">
                                        <i><font-awesome-icon :icon="['fas', 'star']" checked /></i>
                                        <i><font-awesome-icon :icon="['fas', 'star']" checked /></i>
                                        <i><font-awesome-icon :icon="['fas', 'star']" checked /></i>
                                        <i><font-awesome-icon :icon="['fas', 'star']" /></i>
                                        <i><font-awesome-icon :icon="['fas', 'star']" /></i>

                                    </h3>
                                    <p>Rate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <hr>
                    <div class="profile-card-6">
                        <img src="../assets/Elza-Sofie-Fashion-Logo.png" class="img img-responsive">
                        <div class="profile-name">
                            fashion logo
                        </div>
                        <div class="profile-position">Clothes</div>
                        <div class="profile-overview">

                            <div class="row text-center">

                                <div class="col-s-4">
                                    <h3>35</h3>
                                    <p>Folowers</p>
                                </div>
                                <div class="col-s-4">
                                    <h3 class="rate">
                                        <i><font-awesome-icon :icon="['fas', 'star']" checked variant="warning" /></i>
                                        <i><font-awesome-icon :icon="['fas', 'star']" checked /></i>
                                        <i><font-awesome-icon :icon="['fas', 'star']" checked /></i>
                                        <i><font-awesome-icon :icon="['fas', 'star']" /></i>
                                        <i><font-awesome-icon :icon="['fas', 'star']" /></i>

                                    </h3>
                                    <p>Rate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <hr>
                    <div class="profile-card-6">
                        <img src="../assets/Evellon-Boutique-Fashion-Logo.png" class="img img-responsive">
                        <div class="profile-name">
                            fashion logo
                        </div>
                        <div class="profile-position">Clothes</div>
                        <div class="profile-overview">

                            <div class="row text-center">

                                <div class="col-s-4">
                                    <h3>35</h3>
                                    <p>Folowers</p>
                                </div>
                                <div class="col-s-4">
                                    <h3 class="rate">
                                        <i><font-awesome-icon :icon="['fas', 'star']" checked variant="warning" /></i>
                                        <i><font-awesome-icon :icon="['fas', 'star']" checked /></i>
                                        <i><font-awesome-icon :icon="['fas', 'star']" checked /></i>
                                        <i><font-awesome-icon :icon="['fas', 'star']" /></i>
                                        <i><font-awesome-icon :icon="['fas', 'star']" /></i>

                                    </h3>
                                    <p>Rate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h1 class="text-light head">Dresses</h1>

        <div class="row  container1 c">
            <!-- Card -->
            <div class="card promoting-card">

                <!-- Card content -->
                <div class="card-body flex-row">
                    <div>

                        <!-- Title -->
                        <h4 class="card-title font-weight-bold mb-2">short red dress</h4>

                    </div>

                </div>

                <!-- Card image -->
                <div class="view overlay">
                    <img class="card-img-top rounded-0" src="../assets/dress.jpeg" alt="Card image cap">
                    <a href="#!">
                        <div class="mask rgba-white-slight"></div>
                    </a>
                </div>

                <!-- Card content -->
                <div class="card-body">

                    <div class="collapse-content">
                        <p class="card-text collapse" id="collapseContent">Recently, we added several exotic new dishes to our restaurant menu. They come from countries such as Mexico, Argentina, and Spain. Come to us, have some delicious wine and enjoy our juicy meals from around the world.</p>
                        <i><font-awesome-icon :icon="['fas','heart']" class="icon1" /></i>
                        <i><font-awesome-icon :icon="['fas', 'share-alt']" class="icon" /></i>

                    </div>
                </div>

            </div>

            <div class="card">

                <div class="card-body flex-row">
                    <div>
                        <h4 class="card-title font-weight-bold mb-2">Dresses</h4>
                    </div>

                </div>
                <div class="view overlay">
                    <img class="card-img-top rounded-10" src="../assets/d2.jpg" alt="Card image cap">
                    <a href="#!">
                        <div class="mask rgba-white-slight"></div>
                    </a>
                </div>

                <!-- Card content -->
                <div class="card-body">

                    <div class="collapse-content">

                        <!-- Text -->
                        <p class="card-text collapse" id="collapseContent">Recently, we added several exotic new dishes to our restaurant menu. They come from countries such as Mexico, Argentina, and Spain. Come to us, have some delicious wine and enjoy our juicy meals from around the world.</p>
                        <i><font-awesome-icon :icon="['fas','heart']" class="icon1" /></i>
                        <i><font-awesome-icon :icon="['fas', 'share-alt']" class="icon" /></i>

                    </div>

                </div>

            </div>
            <!-- Card -->
            <div class="card">

                <div class="card-body  flex-row">
                    <div>
                        <h4 class="card-title font-weight-bold mb-2">Dresses</h4>
                    </div>

                </div>
                <div class="view overlay">
                    <img class="card-img-top rounded-10" src="../assets/d2.jpg" alt="Card image cap">
                    <a href="#!">
                        <div class="mask rgba-white-slight"></div>
                    </a>
                </div>

                <!-- Card content -->
                <div class="card-body">

                    <div class="collapse-content">

                        <!-- Text -->
                        <p class="card-text collapse" id="collapseContent">Recently, we added several exotic new dishes to our restaurant menu. They come from countries such as Mexico, Argentina, and Spain. Come to us, have some delicious wine and enjoy our juicy meals from around the world.</p>
                        <i><font-awesome-icon :icon="['fas','heart']" class="icon1" /></i>
                        <i><font-awesome-icon :icon="['fas', 'share-alt']" class="icon" /></i>

                    </div>

                </div>

            </div>

            <!-- Card -->
            <div class="card">

                <div class="card-body  flex-row">
                    <div>
                        <h4 class="card-title font-weight-bold mb-2">Dresses</h4>
                    </div>

                </div>
                <div class="view overlay">
                    <img class="card-img-top rounded-10" src="../assets/d2.jpg" alt="Card image cap">
                    <a href="#!">
                        <div class="mask rgba-white-slight"></div>
                    </a>
                </div>
                <div class="card-body">

                    <div class="collapse-content">
                        <p class="card-text collapse" id="collapseContent"></p>
                        <i><font-awesome-icon :icon="['fas','heart']" class="icon1" /></i>
                        <i><font-awesome-icon :icon="['fas', 'share-alt']" class="icon" /></i>
                    </div>
                </div>
            </div>
        </div>
        <h1 class="text-light head">T-shirt</h1>

        <div class="row  container1 c">
            <!-- Card -->
            <div class="card promoting-card">

                <!-- Card content -->
                <div class="card-body flex-row">
                    <div>

                        <!-- Title -->
                        <h4 class="card-title font-weight-bold mb-2">short red dress</h4>

                    </div>

                </div>

                <!-- Card image -->
                <div class="view overlay">
                    <img class="card-img-top rounded-0" src="../assets/t1.jpeg" alt="Card image cap">
                    <a href="#!">
                        <div class="mask rgba-white-slight"></div>
                    </a>
                </div>

                <!-- Card content -->
                <div class="card-body">

                    <div class="collapse-content">
                        <p class="card-text collapse" id="collapseContent">Recently, we added several exotic new dishes to our restaurant menu. They come from countries such as Mexico, Argentina, and Spain. Come to us, have some delicious wine and enjoy our juicy meals from around the world.</p>
                        <i><font-awesome-icon :icon="['fas','heart']" class="icon1" /></i>
                        <i><font-awesome-icon :icon="['fas', 'share-alt']" class="icon" /></i>

                    </div>
                </div>

            </div>

            <div class="card">

                <div class="card-body flex-row">
                    <div>
                        <h4 class="card-title font-weight-bold mb-2">Dresses</h4>
                    </div>

                </div>
                <div class="view overlay">
                    <img class="card-img-top rounded-10" src="../assets/t2.jpeg" alt="Card image cap">
                    <a href="#!">
                        <div class="mask rgba-white-slight"></div>
                    </a>
                </div>

                <!-- Card content -->
                <div class="card-body">

                    <div class="collapse-content">

                        <!-- Text -->
                        <p class="card-text collapse" id="collapseContent">Recently, we added several exotic new dishes to our restaurant menu. They come from countries such as Mexico, Argentina, and Spain. Come to us, have some delicious wine and enjoy our juicy meals from around the world.</p>
                        <i><font-awesome-icon :icon="['fas','heart']" class="icon1" /></i>
                        <i><font-awesome-icon :icon="['fas', 'share-alt']" class="icon" /></i>

                    </div>

                </div>

            </div>
            <!-- Card -->
            <div class="card">

                <div class="card-body  flex-row">
                    <div>
                        <h4 class="card-title font-weight-bold mb-2">Dresses</h4>
                    </div>

                </div>
                <div class="view overlay">
                    <img class="card-img-top rounded-10" src="../assets/t3.jpeg" alt="Card image cap">
                    <a href="#!">
                        <div class="mask rgba-white-slight"></div>
                    </a>
                </div>

                <!-- Card content -->
                <div class="card-body">

                    <div class="collapse-content">

                        <!-- Text -->
                        <p class="card-text collapse" id="collapseContent">Recently, we added several exotic new dishes to our restaurant menu. They come from countries such as Mexico, Argentina, and Spain. Come to us, have some delicious wine and enjoy our juicy meals from around the world.</p>
                        <i><font-awesome-icon :icon="['fas','heart']" class="icon1" /></i>
                        <i><font-awesome-icon :icon="['fas', 'share-alt']" class="icon" /></i>

                    </div>

                </div>

            </div>

            <!-- Card -->
            <div class="card">

                <div class="card-body  flex-row">
                    <div>
                        <h4 class="card-title font-weight-bold mb-2">Dresses</h4>
                    </div>

                </div>
                <div class="view overlay">
                    <img class="card-img-top rounded-10" src="../assets/d2.jpg" alt="Card image cap">
                    <a href="#!">
                        <div class="mask rgba-white-slight"></div>
                    </a>
                </div>
                <div class="card-body">

                    <div class="collapse-content">
                        <p class="card-text collapse" id="collapseContent"></p>
                        <i><font-awesome-icon :icon="['fas','heart']" class="icon1" /></i>
                        <i><font-awesome-icon :icon="['fas', 'share-alt']" class="icon" /></i>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>
<script>
    import $ from 'jquery';
    $("#slider > div:gt(0)").hide();
    setInterval(function () {
        $('#slider > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#slider');
    }, 3000);
</script>
<script>
    // @ is an alias to /src


    export default {
        name: "Home",
        components: {

        }
    };
</script>

<style scoped>
    .top{
        display: flex;
        flex-direction: column;
    }
    .top h1{
        text-align: center;
  margin-top: 50px;
  margin-bottom: 0px;
  background: -webkit-linear-gradient(#fadcda, #dc3545);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 60px;
  margin-bottom: 50px;
    }
    .top img{
        width: 60%;
        margin: auto;
        margin-top: 50px;
    }
    .create-brand{
        background-image: linear-gradient(to right,#f26659, #8ca9d3);
        width: 70%;
        border-radius: 50px;
        margin: auto;
        margin-top: 150px;
          margin-bottom: 100px;
        height: 200px;
    }
    #circle{
        width: 5px;
  height: 5px;
  background: transparent;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 50%;
  overflow: hidden;
  transition: 500ms;
    }
    .noselect{
        -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    }
    .create-brand button:hover{
    background: transparent;}
    .create-brand button:hover #circle{
        height: 50px;
        width: 150px;
        left: 100px;
        top: 10px;
        border-radius: 0;
        border-bottom: 2px solid #eee;
    }
    .create-brand button{
        margin-top: 6%;
        background: transparent;
        height: 50px;
        min-width: 150px;
        border: none;
        border-radius: 10px;
        color: white;
        font-size: 40px;
        font-weight: bold;
        font-family: 'Cookie', cursive;
        position: relative;
        transition: 1s;
        -webkit-tap-highlight-color: transparent;
   padding-bottom: 20px;
        cursor: pointer;
        padding-top: 5px;
    }
    .imgg:hover {
        transform: scale(1.3);
    }

    .content {
        margin-left: 300px !important;
        transition: opacity .6s ease, transform .3s ease;
    }

    .title {
        margin-bottom: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: absolute;
        top: 0;
        right: 800px;
        font-weight: bold;
        width: 100%;
        height: 100%;
        font-size: 1rem;
        color: #ff006e;
        text-transform: uppercase;
        width: 100%;
        padding: 0 2em;
        font-size: 2em;
        font-weight: 300;
        margin: .5rem 0 0;
    }

    .di1 img {
        margin-left: 150px;
        float: left;
        margin-top: 50px;
        width: 30%;
        height: 450px;
    }


    .di3 img {
        margin-left: 150px;
        margin-top: 50px;
        height: 450px;
        float: left;
        width: 35%;
    }

    .container-fluid,
    .container {
        max-width: 1200px;
        display: inline-block;
        display: grid;
    }

    .rate {
        padding-left: 30px;
        font-size: 18px;
        padding-bottom: 12px;
    }

    .card-container {
        padding: 100px 0px;
    }

    .profile-card-6 {
        max-width: 300px;
        background-color: #FFF;
        border-radius: 5px;
        box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        position: relative;
        margin: 10px auto;
        cursor: pointer;
    }

        .profile-card-6 img {
            transition: all 0.15s linear;
            width: 300px;
            height: 400px;
        }

        .profile-card-6 .profile-name {
            position: absolute;
            top: 10px;
            left: 10px;
            font-size: 25px;
            font-weight: bold;
            color: #FFF;
            padding: 15px 20px;
            background: linear-gradient(140deg, rgba(0, 0, 0, 0.4) 50%, rgba(255, 255, 0, 0) 50%);
            transition: all 0.15s linear;
        }

        .profile-card-6 .profile-position {
            position: absolute;
            color: rgba(255, 255, 255, 0.4);
            left: 30px;
            top: 100px;
            transition: all 0.15s linear;
        }

        .profile-card-6 .profile-overview {
            position: absolute;
            bottom: 0px;
            left: 0px;
            right: 0px;
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 50%, rgba(255, 255, 0, 0));
            color: #FFF;
            padding: 50px 0px 0px 30px;
            transition: all 0.15s linear;
        }

            .profile-card-6 .profile-overview h3 {
                font-weight: bold;
                margin-right: 10px;
            }

            .profile-card-6 .profile-overview p {
                color: rgba(255, 255, 255, 0.7);
            }

        .profile-card-6:hover img {
            filter: brightness(80%);
        }

        .profile-card-6:hover .profile-name {
            padding-left: 25px;
            padding-top: 20px;
        }

        .profile-card-6:hover .profile-position {
            left: 40px;
        }

        .profile-card-6:hover .profile-overview {
            padding-bottom: 25px;
        }
    .icon1:hover{
        color: #f44336 !important;
    }

    .icon:hover {
        color: #0d47a1 !important;
    }
    .icon{
        margin: 5px;
        font-size: 25px;
    }
    .icon1 {
        margin: 5px;
        font-size: 25px;
    }
    .card-img-top{

        height:300px;
    }
    .card{
        width:20%;
       margin:5px;
        display:flex;

    }
    .container1{
        width:100%;
        padding-left:200px;
    }

    .head {
        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
        background-size: 400% 400%;
        animation: gradient 15s ease infinite;
        height: 45px;
        width: 80%;
        margin: auto;
        text-align: center;
    }
    .c{
        margin-bottom: 100px;
        margin-top: 50px;
    }
    .card:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
    }


    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }

        50% {
            background-position: 100% 50%;
        }

        100% {
            background-position: 0% 50%;
        }
    }
</style>