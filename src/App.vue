<template>
  <div id="app">
  <v-app id="inspire">
    <v-app id="inspire">
      <v-navigation-drawer
        v-model="drawer"
        app
        dark
        width="340"
        bottom
        src="https://www.mmmdjm.com/materials/8753.jpg"
      >
        <v-col></v-col>
        <div class="text-center">
        <v-avatar
            class="profile"
            color="secondary"
            size="150"
        >
          <v-img src="">
          </v-img>
        </v-avatar>
        </div>
        <v-col></v-col>
        <div class="text-center">
          <span class="headline font-weight-black white--text">Name</span>
        </div>
        <div class="pl-16 pr-16 pt-2"><v-divider></v-divider></div>
        <div class="text-center pl-3 pr-3 pt-2 white--text">
          Content
        </div>
        <v-list dense>
          <router-link 
            v-for="(menu,i) in menus"
            :key=i
            :to="menu.path"
          >
          <v-list-item>
            <v-list-item-action>
              <v-icon>{{ menu.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-content v-text="menu.title"></v-list-item-content>
            </v-list-item-content>
          </v-list-item>
          </router-link>
        </v-list>
        <div class="pl-16 pr-16 pt-2 pb-2"><v-divider></v-divider></div>
        <div class="text-center">
          <v-btn
            v-for="(item,i) in items"
            :key=i
            :href="item.path"
            class="mx-2"
            target="_blank"
            icon
          >
          <v-icon size="30px" color="white">{{ item.icon }}</v-icon>
        </v-btn>
        </div>
      </v-navigation-drawer>
      <v-app-bar
        app
        dark
        src="https://www.mmmdjm.com/materials/studio-background-concept-dark-gradient-purple-studio-room-background-product.jpg"
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </v-app-bar>
  
      <v-main>
        <router-view/>
      </v-main>
      <v-footer
        app
        color="white"
        inset
        absolute
        outlined
      >
        <v-card-text tile outlined class="text-center">
        <div>
            <span class="grey--text">&copy; 2022. All rights reserved.</span>
            <br>
            <span class="grey--text">Powered By Vue & Vuetify.</span>
        </div>
        </v-card-text>
      </v-footer>
    </v-app>
  </v-app>
</div>
</template>

<script>

export default {
  name: 'App',

  props: {
    source: String,
  },
  data: () => ({
    drawer:null,
    menus:[
      {
        path:'/',
        icon:'mdi-home',
        title:'Home'
      },
      {
        path:'/blog',
        icon:'mdi-book',
        title:'Blog',
      },
      {
        path:'/about',
        icon:'mdi-email',
        title:'About',
      },
    ],
    items:[
      {
        path:'',
        icon:'mdi-github',
      },
      {
        path:'',
        icon:'mdi-linkedin',
      },
      {
        path:"",
        icon:'mdi-email',
      }
    ],
  })
};
</script>

<style>
a {
  text-decoration: none;
}
 
.router-link-active {
  text-decoration: none;
}
</style>
