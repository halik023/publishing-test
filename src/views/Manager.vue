<template>
<div class="manager">
    <Header />
    <Navbar :infoNavbar="infoNavbar" />
    <div class="container-section">
        <div class="container-left">
            <Section :sections="sections" />
        </div>
        <div class="container-right">
            <div class="program-summary">
                <div class="program-summary-title">
                    PROGRAM SUMMARY
                </div>
                <div class="program-summary-item">
                    <div class="title">
                        Important Dates
                    </div>
                    <div class="item">
                        <div class="item-title">
                            Requested Delivery Date:
                        </div>
                        <div class="item-value">
                            06/04/21
                        </div>
                    </div>
                    <div class="item">
                        <div class="item-title">
                            File Release Due Date:
                        </div>
                        <div class="item-value">
                            06/04/21
                        </div>
                    </div>
                    <div class="item">
                        <div class="item-title">
                            Countdown:
                        </div>
                        <div class="item-value countdown">
                            170 days remaining
                        </div>
                    </div>
                </div>
                <div class="program-summary-item">
                    <div class="title">
                        Important Dates
                    </div>
                    <div class="item">
                        <div class="item-title">
                            Requested Delivery Date:
                        </div>
                        <div class="item-value">
                            06/04/21
                        </div>
                    </div>
                    <div class="item">
                        <div class="item-title">
                            File Release Due Date:
                        </div>
                        <div class="item-value">
                            06/04/21
                        </div>
                    </div>
                    <div class="item">
                        <div class="item-title">
                            Countdown:
                        </div>
                        <div class="item-value countdown">
                            170 days remaining
                        </div>
                    </div>
                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import Section from '@/components/Section.vue'
import {
    mapGetters
} from 'vuex'

export default {
    computed: {
        ...mapGetters(['getInfoProject']),
        infoNavbar() {
            return {
                pages: this.getInfoProject.numberOfPages,
                sheets: this.getInfoProject.numberOfPages / 2 + 2,
                screens: this.getInfoProject.numberOfPages / 2 + 2,
            }
        },
        sections() {
            return this.getInfoProject.sections;
        }
    },
    components: {
        Header,
        Navbar,
        Section
    },
    mounted() {
        console.log(this.getInfoProject);
    }
}
</script>

<style lang="scss" scoped>
.manager {
    background-color: #F4F4F4;
    .container-section {
        width: 1600px;
        margin: 0 auto;
        background-color: #F4F4F4;
        display: flex;

        .container-left {
            width: 1308px;
            border-right: 1px solid #8c8c8c;
        }

        .container-right {
            
        }
    }
}
</style>
