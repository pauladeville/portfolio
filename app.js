Vue.component("project", {
    props: {
        img_url: String,
        img_alt: String,
        project_url: String,
        description_title: String,
        description_text: String,
   },
    template: `
        <a class="work-box" :href="project_url">
            <img :src="img_url" :alt="img_alt" >
            <div>
                <h2>{{ description_title }}</h2>
                <p> {{ description_text }}</p>
            </div>
        </a>
    `
})

const app = new Vue({
    el: "#app"
})