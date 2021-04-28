<template>
  <div class="post-box">
    <h1>Posts</h1>
    <div class="card gedf-card">
      <div class="card-header">
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex justify-content-between align-items-center head">
            <div class="ml-2">
              <h2 class="h5 m-0">Rowan-Essam</h2>
            </div>
            <div class="text-muted h7 m1-2">
              <i><font-awesome-icon :icon="['fa', 'clock']"/></i>10 min ago
            </div>
          </div>
        </div>
      </div>
      <div class="card-body">
        
        <div class="body-image">
          <img src="../assets/dress.jpeg" alt="" />
        </div>
      </div>
      <div class="card-footer">
        <div class="like">
          <a href="#" class="card-link"
            ><i><font-awesome-icon :icon="['fa', 'heart']"/></i> Like</a
          >
          <span>0</span>
        </div>
        <div class="dislike">
          <a href="#" class="card-link"
            ><i><font-awesome-icon :icon="['fa', 'thumbs-down']"/></i>
            dislike</a
          >
          <span>0</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card .card-header .d-flex .head .h7{
margin-left: 50px;
}
h1{
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
  background: -webkit-linear-gradient(#fadcda, #dc3545);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 60px;
}
h2{
  color: #dc3545;
}
.card-body .body-image img {
  height: 300px;
}
.card-body .body-image {
  text-align: center;
  background-color: #fadcda;
  margin: auto;
}
.card-body{
  display:flex;
}
.gedf-card {
  width: 60%;
  margin: auto;
  text-align: center;
  margin-bottom: 100px;
}
.card-footer{
	display: flex;
	justify-content: space-around;
}
.like a i{
	color: salmon;
}
.like a {
	color: salmon;
	margin-right: 10px;
}
.like span{
	color: #000;
	border: 2px solid #fadcda;
	margin-right: 10px;
	padding: 5px;
}
.like{
	font-size: 20px;
}

.dislike a i{
	color: salmon;
}
.dislike a {
	color: salmon;
	margin-right: 10px;
}
.dislike span{
	color: #000;
	border: 2px solid #fadcda;
	margin-right: 10px;
	padding: 5px;
}
.dislike{
	font-size: 20px;
}
</style>

<script>
export default {
  props: ["views", "title", "author", "category", "content", "date"],
  name: "post",
};
</script>
