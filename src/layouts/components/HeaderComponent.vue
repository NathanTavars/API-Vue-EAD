<template>
    <header id="header">
        <nav>
            <span class="toggleMenu far fa-bars"></span>
            <span class="logo">
                <img :src="require('@/assets/images/logo.svg')" alt="Engeselt">
            </span>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'header-component'
}
</script>