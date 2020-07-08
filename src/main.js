import Vue from "vue"
import App from "./App.vue"
import * as icons from './index.js'
import Message from 'vue-m-message'
import 'vue-m-message/dist/index.css'

const iconNames = []
function toLine(name) {
  name = name.replace(/([A-Z])/g,"-$1").toLowerCase()
  return name[0] === '-' ? name.slice(1) : name
}
if (typeof Vue !== 'undefined') {
  for (const name in icons) {
    let element = toLine(name)
    Vue.component(element, icons[name])
    iconNames.push(element)
  }
}

Vue.use(Message)
Vue.prototype.ICON_NAMES = iconNames

new Vue({
  render: h => h(App)
}).$mount("#app");
