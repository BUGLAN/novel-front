<template>
    <div class="index">
        <Header/>
        <router-view></router-view>
    </div>
</template>


<script>
import Header from '../component/header'
export default {
    components: {
        Header
    }
}
</script>
