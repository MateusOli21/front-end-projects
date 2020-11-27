<template>
    <nav>
        <v-toolbar>
            <v-icon @click="drawer = !drawer">menu</v-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span>Ninja</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-menu offset-y open-on-hover>
                <template v-slot:activator="{on}">
                    <v-btn depressed outlined slot="activator" color="grey" class="mr-2 px-10" v-on="on" >
                        <span>Menu</span>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="link in links" :key="link.text" :to="link.route">
                        <v-list-item-title>{{ link.text}}</v-list-item-title>
                        <v-divider></v-divider>
                    </v-list-item>

                </v-list>
            </v-menu>

            <v-btn depressed outlined color="grey">
                <span class="px-2">Sing Out</span>
                <v-icon>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>

        <!-- menu de nav por hamburguer -->
        <v-navigation-drawer app v-model="drawer" class="primary" temporary>
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="100">
                        <img src="/avatar-1.png" alt="">
                    </v-avatar>
                    <p class="white--text subheading mt-1">The net ninja</p>
                </v-flex>

                <v-flex class="mt-4 mb-6">
                    <Popup/>
                </v-flex>
            </v-layout>

            <v-divider></v-divider>

            <v-list v-for="link in links" :key="link.text">
                    <router-link :to="link.route">
                        <v-subheader>
                            <v-icon class="white--text">{{ link.icon }}</v-icon>
                            <span class="white--text pl-2">{{ link.text }}</span>
                        </v-subheader>
                    </router-link>
                    <v-divider></v-divider>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>


<script>
import Popup from '@/components/Popup';

export default {
    data(){
        return{
            drawer: false,
            links: [
                {icon: 'dashboard', text:'Dashboard', route:'/'},
                {icon: 'folder', text:'My Projects', route:'/projects'},
                {icon: 'people_alt', text:'Team', route:'/team'}
            ]
        }
    },
    components:{
        Popup,
    }
}
</script>

<style scoped>

</style>