<template>
    <div v-if="error === 'Network Error' || error === 'timeout exceeded'">
        <h1>Network Error Please Refresh The Page</h1>
    </div>
    <article v-else>
        <button @click="redirect">Back</button>
        <h2>{{repo.name}} <span>{{ repo.visibility }}</span></h2>
        <p>{{ repo.description }}</p>
        <p>Created <span>{{ repo.created_at }}</span></p>
        <p>Default Branch <span>{{ repo.default_branch }}</span></p>
        <p>Last Commit <span>{{repo.pushed_at}}</span></p>
        <p>Forks <span>{{ repo.forks_count }}</span></p>
        <div>
            <h5>Languages</h5>
            <ul v-for="(value, key) in language" :key="key">
                <li>{{ key }}</li>
            </ul>
        </div>
        <button @click="copyUrl">Clone Repo</button>
        <a :href="repo.html_url" rel="noopener noreferrer">Repository Link</a>
    </article>
</template>

<script>
import axios from 'axios'

export default {
    name: 'myRepo',
    data() {
        return {
            repo: "",
            details: "",
            language: "",
            error: ""
        }
    },
    async created() {
        const response = await fetch(`https://api.github.com/repositories/${this.$route.params.name}`)
        const data = await response.json()
        this.repo = data
    },
    methods: {
        redirect() {
            this.$router.push('/')
        },
        getLanguage() {
            setTimeout(() => {
                axios.get(`https://api.github.com/repos/Christiano112/${this.repo?.name}/languages`)
                    .then(response => response.data)
                    .then(data => { this.language = data; console.log(data) })
                    .catch(error => {
                        this.error = error.message; console.log(error.message);
                    })
            }, 1000)
        },
        async copyUrl() {
            try {
                await navigator.clipboard.writeText(this.repo.clone_url);
                alert("You Have Copied The Repo Link")
            } catch {
                alert("Copy Failed")
            }
        },
    },
    mounted() {
        this.getLanguage()
    },
    computed: {
        date(dat) {
            return dat.toISOString()
        }
    }
}
</script>

<style></style>