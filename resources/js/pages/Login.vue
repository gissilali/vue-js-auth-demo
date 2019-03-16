<template>
    <div class="w-1/3 mx-auto mt-10">
        <form class="p-4 border m-6 rounded-lg  bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden" @submit.prevent="login">
            <div class="w-full">
                <label class="text-xs mb-2 inline-block">Email</label>
                <input class="w-full mw-100 bg-white border border-grey-light rounded px-3 pt-3 pb-3 mb-4" required v-model="email" type="text" placeholder="Email"/>
            </div>
            <div class="w-full">
                <label class="text-xs mb-2 inline-block">Password</label>
                <input class="w-full mw-100 bg-white border border-grey-light rounded px-3 pt-3 pb-3 mb-4" required v-model="password" type="password"/>
            </div>
            <hr/>
            <button class="btn" type="submit">Login</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        methods: {
            login() {
                alert("I got a lion in my pocket.");
            }
        },
        data() {
            return {
                email: '',
                password: ''
            }
        }
    }
</script>

<style scoped>
    .btn {
        @apply text-white uppercase text-sm bg-blue py-2 px-4 rounded;
    }
</style>