<template>
<div>
    <Header />
    <Navbar :infoNavbar="infoNavbar"/>
    <div class="container-fluid">
        <div class="row">
            <div class="col-10">
            </div>
            <div class="col-2">
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import {
    mapGetters
} from 'vuex'

export default {
    computed: {
        ...mapGetters(['getInfoProject']),
        infoNavbar () {
            return {
                pages: this.getInfoProject.numberOfPages,
                sheets: this.getInfoProject.numberOfPages / 2 + 2,
                screens: this.getInfoProject.numberOfPages / 2 + 2,
            }
        }
    },
    components: {
        Header,
        Navbar
    },
    mounted() {

    }
}
</script>
