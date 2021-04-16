<template>
<div class="container">
    <img ref="img" id="img" src="https://assetcdn.buhlergroup.com/image/874601345621/b4013a0ff8834d4981f5d3b203c14f93/-FJPG-C2160x2160%2C575%2C0-S2046x2046-S1024x1024" alt="handing">

    <div class="mt-3">
        <div class="form-group">
            <label>Duration</label>
            <input v-model="duration" type="number" class="form-control" />
        </div>
        <div class="form-group">
            <label for="sel1">Animation</label>
            <select v-model="animation" class="form-control" id="sel1">
                <option value="fadeIn">fadeIn</option>
                <option value="fadeOut">fadeOut</option>
                <option value="slideDown">slideDown</option>
                <option value="slideUp">slideUp</option>
            </select>
        </div>
        <button type="button" class="btn btn-primary" @click="play">Play</button>
    </div>

    <div class="color mt-3 mb-4" ref="color"></div>
    <button type="button" class="btn btn-primary" @click="gerenate">Gerenate</button>
</div>
</template>

<script>
import Velocity from 'velocity-animate';
import randomColor from 'randomcolor'
export default {
    data() {
        return {
            duration: 2,
            animation: 'fadeIn'
        }
    },
    methods: {
        play() {
            let el = this.$refs.img;
            Velocity(el, this.animation, {duration: this.duration * 1000, offset: 250})
        },

        gerenate() {
            let el = this.$refs.color;
            el.style.backgroundColor = randomColor();
        }

    }
}
</script>

<style scoped>
#img {
    width: 300px;
    height: auto;
}

.color {
    width: 300px;
    height: 300px;
    background-color: darkslategray;
}
</style>
