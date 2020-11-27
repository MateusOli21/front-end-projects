<template>
  <v-app class="grey lighten-4">
    <Navbar/>
    <!-- <Teste/>  -->
    <v-content class="mx-4 mb-4"> <!-- todo o conteúdo da pagina vai dentro da tag v-content -->
      <router-view></router-view><!-- toda a parte de rotas e componentes renderizados é puxada por essa tag -->
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';


export default {
  name: 'App',
  components: {
    Navbar
  },
  data(){
    return{

    }
  }
};
</script>
