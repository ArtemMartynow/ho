import Header from './Header.vue'
import HomePage from './HomePage.vue'

const components = [
    {name: 'Header', component: Header},
    {name: 'HomePage', component: HomePage},
]

export default {
    install(app) {
        components.forEach(({ name, component }) => {
            app.component(name, component)
        })
    }
}