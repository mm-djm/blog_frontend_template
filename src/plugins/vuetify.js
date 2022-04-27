import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#009688',
                secondary: '#00bcd4',
                accent: '#4caf50',
                error: '#f44336',
                warning: '#ff9800',
                info: '#3f51b5',
                success: '#2196f3'
            },
        },
    },
});