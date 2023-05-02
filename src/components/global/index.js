import Header from './Header.vue'
import HomePage from './HomePage.vue'
import About from './About.vue'
import AteLierBorn from './AteLierBorn.vue'

const components = [
    {name: 'Header', component: Header},
    {name: 'HomePage', component: HomePage},
    {name: 'About', component: About},
    {name: 'AteLierBorn', component: AteLierBorn}
]

export default {
    install(app) {
        components.forEach(({ name, component }) => {
            app.component(name, component)
        })
    }
}