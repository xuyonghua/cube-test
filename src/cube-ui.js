import Vue from 'vue'

// By default we import all the components.
// Only reserve the components on demand and remove the rest.
// Style is always required.
import {
    /* eslint-disable no-unused-vars */
    Style,
    // popup
    Popup,
    Toast,
    Picker,
    Scroll,
    Slide,
    createAPI
} from 'cube-ui'
import SubscribeDialog from './components/subscribe-dialog/subscribe-dialog'

Vue.use(Popup)
Vue.use(Toast)
Vue.use(Picker)
Vue.use(Scroll)
Vue.use(Slide)


createAPI(Vue, SubscribeDialog, [], true)
