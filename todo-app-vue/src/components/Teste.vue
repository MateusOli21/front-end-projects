<template>
    <div class="home">
        <h1>Home Page</h1>
        
        <p class="red lighten-4 red--text text--darken-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores error, rem quisquam distinctio maiores inventore saepe dolor repellat illum doloribus quaerat cumque autem neque eveniet porro commodi eius, veniam aliquid?</p>
        <h1 class="display-4">Tamanho de fonte</h1>
        <v-btn class="blue white--text">Clique aqui</v-btn>
        <br>
        <v-btn color="red" depressed>Click</v-btn>
        <br>
        <v-btn flat color="green">
            <!--As vezes os icones não funcionam, 
            adicione o link abaixo no index.html: href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' 
            -->
            <v-icon left>email</v-icon>
            <span>E-mail</span>
        </v-btn>
        <br>
        <v-btn fab depressed small dark color="purple">
            <v-icon>favorite</v-icon>
        </v-btn>
        
        <br>
        <!-- Breakpoints: modos para controlar visibilidade em telas maiores e menores -->
        <v-btn class=" red black--text hidden-md-and-down">Aparece maior</v-btn>
        <v-btn class="cyan white--text hidden-md-and-up">Aparece menor</v-btn>


    </div>
</template>

<script>
export default {
}
</script>