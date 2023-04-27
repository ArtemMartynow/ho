

const components = [

]

export default {
    install(app) {
        components.forEach(({ name, component }) => {
            app.component(name, component)
        })
    }
}