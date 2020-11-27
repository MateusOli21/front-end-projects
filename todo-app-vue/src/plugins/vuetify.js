import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme:{
    themes: {
      light: {
        primary: '#9652ff',
        success: '#3cd1c2',
        accent: '#8c9eff',
        error: '#f83e70',
      },
    }
  }
});
