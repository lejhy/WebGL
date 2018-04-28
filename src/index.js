import Vue from 'vue';
import AppComponent from './components/AppComponent.vue'

new Vue({
    el: '#app',
    template: "<AppComponent/>",
    components: { AppComponent }
})