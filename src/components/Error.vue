<template>
    <div class="error">
        <router-link to="/">
            <button>Back to Home</button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "notFound",
}
</script>

<style scoped>
.error {
    width: 100%;
    height: 100vh;
    background: url("/public/github-404-page.jpg") no-repeat center center fixed;
    background-size: 100% 100%;
    background-clip: border-box;
    color: #c9d1d9;
    display: grid;
    place-content: center;
}

.error button {
    background: #0d1117;
    color: #c9d1d9;
    border: none;
    outline: none;
    padding: 1rem 2rem;
    border-radius: .2rem;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s linear;
}

.error button:hover {
    background: #c9d1d9;
    color: #0d1117;
}
</style>