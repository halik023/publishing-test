<template>
<div>
    <Header />
    <Navbar :infoNavbar="infoNavbar" />
    <div class="container-fluid">
        <div class="row">
            <div class="col-9">
                <Section :sections="sections" />
            </div>
            <div class="col-3">
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
.container-fluid {
    background: #ddd;
}

.program-summary {
    padding: 1rem;

    .program-summary-title {
        color: #42738d;
        font-size: 18px;
        font-weight: 700;
    }

    .program-summary-item {
        margin-top: 1rem;
        background: #fff;
        padding: 1rem;

        .title {
            font-weight: 600;
        }

        .item {
            margin: 0.5rem 0;

            .item-value {
                font-size: 17px;
                font-weight: 600;
            }

            .item-value.countdown {
                color: #42738d;
            }
        }
    }
}
</style>
