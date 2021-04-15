<template>
<div>
    <div class="container-section">
        <div class="section" v-for="(section, index) in sections" :key="index">
            <div class="section-title" @click="showDetail(section.id)">
                <div>{{ section.name }}</div>
                <div>{{ section.status }}</div>
                <div>{{ section.deliveryDate }}</div>
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
    .section {
        background-color: #fff;
        margin: 10px 0;

        .section-title {
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            padding: 10px;
        }

        .container-screen {
            display: flex;
            flex-wrap: wrap;
            padding: 10px;
            border-top: 1px solid #ddd;

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
