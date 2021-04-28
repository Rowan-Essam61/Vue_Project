<template>
  <div id="app">
    <div id="view" :class="[{'collapsed' : collapsed}]" >
      <router-view/>
    
    </div>
    
    <sidebar-menu class="sidebar" 
    :menu="menu"  
     :collapsed="collapsed" 
      @item-click="onItemClick" 
      @collapse="onCollapse "/>
  </div>
</template>

<script> 
import { SidebarMenu } from 'vue-sidebar-menu'

export default {
  components: {
    SidebarMenu,
  },
  name: "App",
  
  data() {
    return {
      menu: [
        {
          href: "/newprod",
          title: "New",
          icon: {
            element: 'span',
            class: 'fa fa-user',
          },

        },
        {
          href: "/skirts",
          title: "Skirts",
          icon: "fa fa-code"
        },
        {
          href: "/blouses",
          title: "Blouses",
          icon: "fa fa-download"
        },
        {
          href: "/pants",
          title: "Pants",
          icon: "fa fa-download"
        },
        
        {
          href: "/coats",
          title: "Coats&Jackets",
          icon: "fa fa-download"
        },
        {
          href: "/sweatshirts",
          title: "Sweat-Shirts",
          icon: "fa fa-download"
        },
        {
          href: "/dresses",
          title: "Dresses",
          icon: "fa fa-download"
        },
        {
          href: "/blazers",
          title: "Blazers",
          icon: "fa fa-download"
        },
        
        {
          href: "/jumpsuits",
          title: "JumpSuits",
          icon: "fa fa-download"
        },
      
      ],
      collapsed: true,
      hovering: true,
      baseStyles: {
      fontWeight:'800',
      color: 'red'
    },
    };
  },
  methods: {
    onItemClick() {
      console.log("onItemClick");
    },
    onCollapse() {
      console.log("onCollapse");
      this.collapsed ;
    },
    mouseover(){
      this.hovering ? this.color: 'red';
    }
  }
};
</script>

<style scoped>
/* #view {
  padding-left: 350px;
  

} */
.collapsed {
  padding-left: 50px;
  color: #ee8791;
}
.link1{
  color: black;
}
.sidebar.v-sidebar-menu .vsm-arrow:after {
  content: "\f105";
  font-family: "FontAwesome";
  background-color:#ff006e;
  position: fixed;



}
#view{
  color: #ee8791;
}
.sidebar{
background-color:#f1c9cd;
width: 50px;
padding-top: 100px;

}
.sidebar :menu{
  background-color: #ff006e;
}
.sidebar.v-sidebar-menu .collapse-btn:after {
  content: "\f07e";
  font-family: "FontAwesome";
}
</style>
