<template>
    <div id="app" class="container">
        <p v-if="loading">Loading...</p>
        <div v-else>
            <h3 class="heading">Users</h3>
           
               
                    <h1 v-for="user in all_users" v-bind:key="user">
                        <h2>{{ user }}</h2>

                    </h1>
            
        </div>
    </div>
</template>


<style>
    #app {
        text-align: center;
        margin-top: 50px;
    }

    .heading {
        margin-bottom: 30px;
    }
</style>

<script>
    import axios from "axios";

    export default {
        name: 'app',
        data() {
            return {
                loading: false,
                all_users: null
            }
        },
        mounted() {
            this.loading = true;
            axios
                .get('http://localhost/API/api/read.php')
                .then(response => (this.all_users = response.data.data))
                .catch(error => console.log(error))
                .finally(() => this.loading = false)
        }
    }
</script>