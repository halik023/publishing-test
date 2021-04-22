<template>
<div>
    <div class="container-section">
        <div class="section" v-for="(section, index) in sections" :key="index">
            <div class="section-title" @click="showDetail(section.id)">
                <div class="section-title-left">
                    <div class="section-title-left-color"></div>
                    <img class="section-title-left-arrow" src="https://www.flaticon.com/svg/vstatic/svg/566/566004.svg?token=exp=1619087239~hmac=d5aa7f4a8a9ad7e1b37be1edbd6a1427" alt="">
                    <div class="section-title-left-name">{{ section.name }}</div>

                </div>
                <div class="section-title-right">
                    <div class="section-title-right-status"></div>
                        <div class="section-title-right-1">
                            <div class="section-title-right-1-1">
                                
                            </div>
                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                    <div class="section-title-right-deliverydate">{{ section.deliveryDate }}</div>
                </div>

            </div>
            <div v-show="section.expand" class="container-screen row">
                <div class="screen col-3" v-for="(screen, i) in section.screens" :key="i">
                    <div :class="['shape', {'shape-half' :screen.type == 'half'}]"></div>
                    <div>{{ screen.orderPage }}</div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapActions
} from 'vuex';

export default {
    props: {
        sections: Array,
    },
    methods: {
        ...mapActions([
            'changeExpand'
        ]),
        showDetail(id) {
            this.changeExpand(id);
        }
    }
};
</script>

<style lang="scss" scoped>
.container-section {
    padding: 23px 17px 30px 35px;

    .section {
        background-color: #fff;
        margin-bottom: 12px;

        .section-title {
            width: 1255px;
            height: 37px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 12px 0 34px;

            .section-title-left {
                display: flex;
                align-items: center;
                .section-title-left-color {
                    width: 12px;
                    height: 12px;
                    background-color: cornflowerblue;
                    border-radius: 50%;
                }
                .section-title-left-arrow{
                    width: 10px;
                    height: 10px;
                    margin: 0 3.5px 0 7px;
                    color: #565656;
                }
                .section-title-left-name{
                    font-size: 12px;
                }
            }
            .section-title-right {
                display: flex;
                align-items: center;

            }
        }

        .container-screen {
            display: flex;
            flex-wrap: wrap;
            padding: 1rem;

            .screen {
                display: flex;
                align-items: center;
                flex-direction: column;

                .shape {
                    width: 12rem;
                    height: 8rem;
                    border: 1px solid #ddd;
                }

                .shape-half {
                    width: 6rem;
                    height: 8rem;
                }
            }
        }
    }
}
</style>
