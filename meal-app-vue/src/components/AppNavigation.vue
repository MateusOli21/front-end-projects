<template>
    <span>
        <v-navigation-drawer app v-model="drawer" class="brown lighten-2" dark temporary>
            <v-list>
                <template v-for="(item, index) in items" >
                        <v-subheader :key="index">
                            <router-link :to="item.path" class="links">
                                {{item.title}}
                            </router-link>
                        </v-subheader>
                    <v-divider :key="`divider-${index}`"></v-divider> 
                </template>
            </v-list>
        </v-navigation-drawer>
        

        <v-app-bar color="brown darken-4" dark>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link to="/" class="links">
                <v-toolbar-title to="/">{{appTitle}}</v-toolbar-title>
            </router-link>
            
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <template v-for="item in items">
                <v-btn text class="hidden-sm-and-down" :to="item.path" :key="item.name">{{item.title}}</v-btn>
            </template>
        </v-app-bar>
 
    </span>


</template>

<script>
export default {
    name: 'AppNavigation',
    data(){
        return{
            appTitle:'Meal prep',
            drawer: false,
            items: [
                { title: 'Menu', name: 'menu' ,path: '/menu'},
                { title: 'Sing In', name:'signin', path: '/sign-in'},
                { title: 'Join',name: 'join', path: '/join'}
            ]
        }
    }
}
</script>

<style scoped>
    .links{
        color:white;
        text-decoration: none;
    }
</style>