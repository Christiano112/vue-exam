<template>
    <div>
        <div v-if="loading">
            <h1 class="network">Loading...</h1>
        </div>
        <div v-else>
            <div v-if="error === 'Network Error' || error === 'timeout exceeded'">
                <h1 class="network">Network Error Please Refresh The Page</h1>
            </div>
            <article v-else class="home">
                <div class="profile">
                    <img :src="profile.avatar_url" alt="profile pic">
                    <h1>{{ profile.name }}</h1>
                    <h3>{{ profile.login }}</h3>
                    <p>{{ profile.bio }}</p>
                    <ul>
                        <li>
                            <svg viewBox="-0.5 0 25 25" fill="currentColor" height="20" width="20"
                                xmlns="http://www.w3.org/2000/svg" stroke="#fff">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M8.96991 12.89C10.6599 12.89 12.0299 11.5558 12.0299 9.91C12.0299 8.2642 10.6599 6.93 8.96991 6.93C7.27992 6.93 5.90991 8.2642 5.90991 9.91C5.90991 11.5558 7.27992 12.89 8.96991 12.89Z"
                                        stroke="#fff" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                    <path
                                        d="M12.93 13.1C14.37 14.18 15.32 15.84 15.42 17.72C15.43 17.91 15.27 18.07 15.08 18.07H2.84996C2.64996 18.07 2.48996 17.91 2.49996 17.72C2.60996 15.84 3.55997 14.18 5.00997 13.1"
                                        stroke="#fff" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                    <path d="M11.03 12.11H11.02" stroke="#fff" stroke-miterlimit="10" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                    <path
                                        d="M17.1299 14.56C18.2787 14.56 19.2099 13.6556 19.2099 12.54C19.2099 11.4244 18.2787 10.52 17.1299 10.52C15.9812 10.52 15.0499 11.4244 15.0499 12.54C15.0499 13.6556 15.9812 14.56 17.1299 14.56Z"
                                        stroke="#fff" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                    <path
                                        d="M20.3 15.13C20.99 15.84 21.44 16.79 21.5 17.83C21.51 17.97 21.4 18.07 21.26 18.07H17.38"
                                        stroke="#fff" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </g>
                            </svg>
                            <span>{{ profile.followers }} followers</span>
                            <span>{{ profile.following }} following</span>
                        </li>
                        <li>
                            <svg fill="currentColor" version="1.1" height="16" width="16" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 395.71 395.71" xml:space="preserve"
                                stroke="#fff">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g>
                                        <path
                                            d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738 c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388 C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191 c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                            <span>{{ profile.location }}</span>
                        </li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 273.5 222.3" role="img"
                                aria-labelledby={{profile.twitter_username}} height="16" width="16">
                                <title id={{profile.twitter_username}}>Twitter</title>
                                <path
                                    d="M273.5 26.3a109.77 109.77 0 0 1-32.2 8.8 56.07 56.07 0 0 0 24.7-31 113.39 113.39 0 0 1-35.7 13.6 56.1 56.1 0 0 0-97 38.4 54 54 0 0 0 1.5 12.8A159.68 159.68 0 0 1 19.1 10.3a56.12 56.12 0 0 0 17.4 74.9 56.06 56.06 0 0 1-25.4-7v.7a56.11 56.11 0 0 0 45 55 55.65 55.65 0 0 1-14.8 2 62.39 62.39 0 0 1-10.6-1 56.24 56.24 0 0 0 52.4 39 112.87 112.87 0 0 1-69.7 24 119 119 0 0 1-13.4-.8 158.83 158.83 0 0 0 86 25.2c103.2 0 159.6-85.5 159.6-159.6 0-2.4-.1-4.9-.2-7.3a114.25 114.25 0 0 0 28.1-29.1"
                                    fill="currentColor"></path>
                            </svg>
                            <a rel="nofollow me" href="https://twitter.com/ChristianoEnyia">@{{ profile.twitter_username }}</a>
                        </li>
                    </ul>
                </div>
                <section class="repo">
                    <h1>
                        <svg aria-hidden="true" fill="currentColor" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                            data-view-component="true">
                            <path
                                d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z">
                            </path>
                        </svg>
                        Repositories <span>{{ repo.length }}</span>
                    </h1>
                    <ul v-for="repo in paginateRepo" :key="repo.id">
                        <li>
                            <router-link :to="{ name: 'myRepo', params: { name: repo.id } }">
                                <h4>{{ repo.name }} <span>{{ repo.visibility }}</span></h4>
                                <p>{{ repo.language }}</p>
                            </router-link>
                        </li>
                    </ul>
                    <div class="paginate">
                        <button @click="page--" :disabled="page <= 1">Prev</button>
                        <div v-for="num in pages" :key="num">
                            <button @click="page = num">{{ num }}</button>
                        </div>
                        <button @click="page++" :disabled="page === totalPage">Next</button>
                    </div>
                </section>
            </article>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'homePage',
    data() {
        return {
            data: "Chris",
            profile: "",
            repo: "",
            error: "",
            page: 1,
            totalPage: 5,
            pages: [...Array(5).keys()].map((num) => num + 1),
            loading: false
        }
    },
    methods: {
        getProfile() {
            this.loading = true
            axios.get('https://api.github.com/users/Christiano112')
                .then(response => response.data)
                .then(data => { this.profile = data; this.loading = false })
                .catch(error => {
                    this.error = error.message; console.log(error.message);
                })
        },
        getRepo() {
            this.loading = true
            axios.get('https://api.github.com/users/Christiano112/repos')
                .then(response => response.data)
                .then(data => { this.repo = data; this.totalPage = Math.ceil(this.repo.length / 6); this.loading = false })
                .catch(error => {
                    this.error = error.message; console.log(error.message);
                })
        },
    },
    computed: {
        paginateRepo() {
            const startIndex = (this.page - 1) * 6;
            const endIndex = startIndex + 6;
            return this.repo.slice(startIndex, endIndex)
        },
    },
    mounted() {
        this.getProfile()
        this.getRepo()
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

article.home {
    margin: 2rem auto;
    display: flex;
    gap: 3rem;
    flex-flow: wrap;
    width: 96%;
}

.home .profile,
.repo {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.home .profile {
    flex: 1 1 0;
}

.home .profile img {
    border-radius: 50%;
    height: auto;
    width: 100%;
    max-width: 20rem;
    margin-bottom: 2rem;
}

.home .profile h1 {
    color: rgb(201, 209, 217);
    font-size: 2rem;
    line-height: 1.5rem;
    font-weight: 600;
}

.home .profile h2 {
    color: #8b949e;
    font-size: 1.5rem;
    line-height: 1rem;
}

.home .profile ul li {
    display: flex;
    align-items: center;
    gap: .5rem;
}

.home .profile ul li a {
    text-decoration: none;
    color: currentColor;
}

.home .repo {
    flex: 2 1 0;
}

.home .repo h1 {
    display: flex;
    align-items: center;
    gap: .5rem;
    font-size: 1.5rem;
    line-height: 1rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.home .repo ul li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: .5rem;
    padding: .85rem 0;
    border-bottom: 2px solid #30363d;
}

.home .repo ul li h4,
p {
    color: rgb(201, 209, 217);
}

.home .repo ul li h4 {
    font-weight: 500;
    font-size: 1.2rem;
    margin-bottom: .5rem;
}

.home .repo ul li h4 span {
    font-size: .8rem;
    color: rgb(139, 148, 158);
    border: 1px solid rgb(139, 148, 158);
    border-radius: 3rem;
    padding: .2rem .5rem;
    font-weight: 600;
    margin-left: 1rem;
}

.home .repo ul li p {
    font-size: .8rem;
    font-weight: 600;
    color: rgb(139, 148, 158);
}

.home .repo .paginate {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
}

.home .repo .paginate button {
    margin: 0 0.2rem;
    padding: 0.5rem;
    user-select: none;
    cursor: pointer;
    border: none;
    box-shadow: 0.2rem 0.2rem 1rem rgba(0, 0, 0, 0.3);
    border-radius: 0.2rem;
    outline: none;
    transition: all 0.2s linear;
}

.home .repo .paginate button:hover {
    background-color: #30363d;
    color: #fff;
}

.home .repo .paginate button:active {
    filter: opacity(.5);
}

@media (max-width: 740px) {
    article.home {
        flex-direction: column;
        gap: 5rem;
    }

    .home .repo h1 {
        margin-bottom: 0;
    }

    .home .repo ul li h4 span {
        font-size: .6rem;
        margin-left: 0;
    }
}
</style>