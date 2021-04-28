import Vue from "vue";
Vue.filter("uppercase", function (v) {
    return v.toUpperCase();

});
Vue.filter("reverseing", function (v) {
    return v.split("").reverse().join("");

});
Vue.filter("shorten", function (v,length) {
    return v.substring(0,length)+"....";

});


