<template>
    <div>
        <div class="pageTitle">
            <span class="title">Curso X</span>
            <span class="dots">
                <span></span>
                <span></span>
                <span></span>
            </span>
        </div>

        <div class="content">
            <div class="container">

                <ModulesM/>

                <div class="right">
                    <div class="content">

                        <PlayerM/>

                        <SupportsM/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ModulesM from './components/ModulesM.vue'
import PlayerM from './components/PlayerM.vue'
import SupportsM from './components/SupportsM.vue'
export default {
    name: 'ModulesAndLessons',
    components: {
        ModulesM,
        PlayerM,
        SupportsM,
    }
}
</script>