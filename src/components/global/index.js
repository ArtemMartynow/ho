import Header from './Header.vue'
import HomePage from './HomePage.vue'
import About from './About.vue'
import AteLierBorn from './AteLierBorn.vue'
import RelaxTime from './RelaxTime.vue'
import Message from './Message.vue'
import Footer from './Footer.vue'

const components = [
    {name: 'Header', component: Header},
    {name: 'HomePage', component: HomePage},
    {name: 'About', component: About},
    {name: 'AteLierBorn', component: AteLierBorn},
    {name: 'RelaxTime', component: RelaxTime},
    {name: 'Message', component: Message},
    {name: 'Footer', component: Footer}
]

export default {
    install(app) {
        components.forEach(({ name, component }) => {
            app.component(name, component)
        })
    }
}