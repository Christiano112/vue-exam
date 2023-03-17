<template>
    <div v-if="loading">
        <h1 class="network">Loading...</h1>
    </div>
    <div v-else>
        <div v-if="error === 'Network Error' || error === 'timeout exceeded'">
            <h1 class="network">Network Error Please Refresh The Page</h1>
        </div>
        <article v-else class="repo">
            <button @click="redirect">Back</button>
            <h2>{{ repo.name }} <span>{{ repo.visibility }}</span></h2>
            <p v-if="repo.description !== null">{{ repo.description }}</p>
            <p>Created @ <span>{{ repo.created_at }}</span></p>
            <p>Default Branch: <span>{{ repo.default_branch }}</span></p>
            <p>Last Commit @ <span>{{ repo.pushed_at }}</span></p>
            <p>Forks: <span>{{ repo.forks_count }}</span></p>
            <div class="lang">
                <h4>Languages:</h4>
                <ul v-for="(value, key) in language" :key="key">
                    <li>{{ key }}</li>
                </ul>
            </div>
            <a :href="repo.html_url" rel="noopener noreferrer" target="_blank">Repository Link</a>
            <button @click="copyUrl">{{ content }}</button>
        </article>
    </div>
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
            error: "",
            content: "Clone Repo",
            loading: false
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
            this.loading = true
            setTimeout(() => {
                axios.get(`https://api.github.com/repos/Christiano112/${this.repo?.name}/languages`)
                    .then(response => response.data)
                    .then(data => { this.language = data; this.loading = false})
                    .catch(error => {
                        this.error = error.message; console.log(error.message);
                    })
            }, 1000)
        },
        async copyUrl() {
            try {
                await navigator.clipboard.writeText(this.repo.clone_url);
                this.content = "Copied"
                setTimeout(() => {
                    this.content = "Clone Repo"
                }, 2000)
            } catch {
                this.content = "Copy Failed"
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

<style scoped>
div .network {
    display: grid;
    place-items: center;
    margin-top: 20%;
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 1.5rem
}

article.repo {
    width: 80%;
    margin: 3rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    padding: 2rem 1rem;
    border-radius: 1rem;
    user-select: none;
    max-width: 35rem;
    box-shadow:
    -.2rem -.2rem .5rem rgba(0, 0, 0, .3) inset,
    .2rem .2rem .5rem rgba(0, 0, 0, .9) inset;
}

article.repo button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
}

article.repo h2 span {
    font-size: .8rem;
    color: rgb(139, 148, 158);
    border: 1px solid rgb(139, 148, 158);
    border-radius: 3rem;
    padding: .2rem .5rem;
    font-weight: 600;
    margin-left: 1rem;
}

article.repo p {
    font-size: 1rem;
    font-weight: 500;
}

article.repo p span {
    font-weight: 600;
    color: rgb(139, 148, 158);
}

article.repo .lang {
    display: flex;
    gap: 1rem;
}

article.repo .lang ul li {
    font-size: 1rem;
    font-weight: 500;
    color: rgb(139, 148, 158);
}

article.repo a {
    font-size: 1rem;
    font-weight: 500;
    color: rgb(139, 148, 158);
    text-decoration: underline;
}

@media (max-width: 670px) {
    article.repo {
        width: 96%;
    }

    article.repo h2 {
        font-size: 1.2rem;
    }

    article.repo h2 span {
        margin-left: 0;
    }

    article.repo .lang {
        flex-direction: column;
        gap: .2rem;
    }
}
</style>