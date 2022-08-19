import { createApp } from 'vue'
import '../css/style.css'
import store from "./store";
import router from "./router";
import App from './App.vue'
import vSelect from 'vue-select'
import Input from './components/input/Input.vue'
import AppButton from "./components/button/Button.vue";
import AppModal from "./components/modal/AppModal.vue";
import Select from "./components/select/Select.vue";

const app = createApp(App);

app
    .component('Input', Input)
    .component('AppButton', AppButton)
	.component('AppModal', AppModal)
	.component('Select', Select)
    .use(store)
    .use(router)
    .mount("#app");
