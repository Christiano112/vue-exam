<template>
    <div>
        <article>
            <div>
                <img :src="profile.avatar_url" alt="profile pic">
                <h1>{{ profile.name }}</h1>
                <h2>{{ profile.login }}</h2>
                <p>{{ profile.bio }}</p>
                <div>
                    <svg text="muted" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                        data-view-component="true">
                        <path
                            d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z">
                        </path>
                    </svg>
                    <span>{{ profile.followers }} followers</span>
                    <span>.</span>
                    <span>{{ profile.following }} following</span>
                </div>
                <ul>
                    <li>
                        <svg class="octicon octicon-location" viewBox="0 0 16 16" version="1.1" width="16" height="16"
                            aria-hidden="true">
                            <path
                                d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z">
                            </path>
                        </svg>
                        <span>{{ profile.location }}</span>
                    </li>
                    <li itemprop="social"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 273.5 222.3" role="img"
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
            <section>
                <h1><span>
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                            data-view-component="true">
                            <path
                                d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z">
                            </path>
                        </svg>
                    </span>
                    Repositories {{ repo.length }}
                </h1>
                <div>
                    <ul v-for="repo in repo" :key="repo.id">
                        <li>
                            <router-link :to="{ name: 'myRepo', params: { id: repo.name } }">
                                <h4>{{ repo.name }} <span>{{ repo.visibility }}</span></h4>
                                <p>{{ repo.language }}</p>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </section>
        </article>
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
        }
    },
    mounted() {
        axios.get('https://api.github.com/users/Christiano112')
            .then(response => response.data)
            .then(data => { this.profile = data; console.log(data) })

        axios.get('https://api.github.com/users/Christiano112/repos')
            .then(response => response.data)
            .then(data => { this.repo = data; console.log(data) })
    }
}
</script>

<style></style>