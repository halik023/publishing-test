<template>
<div>
    <Header />
    <Navbar :infoNavbar="infoNavbar" />
    <div class="container-fluid">
        <div class="row">
            <div class="col-9">
                <div class="container-section">
                    <div class="section" v-for="(section, index) in getInfoProject.sections" :key="index">
                        <div class="section-title" @click="!section.expand">
                            <div>{{section.name}}</div>
                            <div>{{section.deliveryDate}}</div>
                        </div>
                        <div v-show="section.expand" class="container-screen">
                            <div class="screen" v-for="(screen, i) in section.screens" :key="i">
                                <div>{{screen.type}}</div>
                                <div>{{screen.orderPage}}</div>
                            </div>
                        </div>
                    </div>
                </div>

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
        }
    },
    components: {
        Header,
        Navbar
    },
    mounted() {
        console.log(this.getInfoProject);
    }
}
</script>

<style lang="scss" scoped>
.program-summary {
    background: #ddd;
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

.container-section {
    .section {
        .section-title {
            display: flex;
            justify-content: space-between;
        }

        .container-screen {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            .screen {
                margin: 10px 0;
                width: 24%;
                background-color: #42738d;
            }
        }
    }
}
</style>
