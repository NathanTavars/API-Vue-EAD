<template>
    <header id="header">
        <nav>
            <span class="toggleMenu far fa-bars" @click="toogleMenu"></span>
            <span class="logo">
                <router-link :to="{name: 'campus.home'}">
                    <img :src="require('@/assets/images/logo.svg')" alt="EspecializaTi">
                </router-link>
            </span>
        </nav>
    </header>

    <menu-component v-show="showMenu">
    </menu-component>
</template>

<script>

import { ref } from 'vue'

import MenuComponent from './MenuComponent.vue'

export default {
    name: 'header-component',
    setup () {
            const showMenu = ref(false)

            const toogleMenu = () => showMenu.value = !showMenu.value

            return {
                showMenu,
                toogleMenu,
            }
        },
    components: {
        MenuComponent,
    }   
}
</script>