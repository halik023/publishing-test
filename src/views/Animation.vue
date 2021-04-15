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
                <option value="none">None</option>
                <option value="power1.in">Power1 In</option>
                <option value="power1.out">Power1 Out</option>
                <option value="power2.in">Power2 In</option>
                <option value="power2.out">Power2 Out</option>
                <option value="bounce.in">Bounce In</option>
                <option value="bounce.out">Bounce Out</option>
                <option value="circ.in">Circ In</option>
                <option value="circ.out">Circ Out</option>
                <option value="expo.in">Expo In</option>
                <option value="expo.out">Expo Out</option>
                <option value="since.in">Since In</option>
                <option value="since.out">Since Out</option>
            </select>
        </div>
        <button type="button" class="btn btn-primary" @click="play">Play</button>
    </div>

</div>
</template>

<script>
import gsap from 'gsap';
export default {
    data() {
        return {
            duration: 1,
            animation: 'none'
        }
    },
    methods: {
        play() {
            let el = this.$refs.img;
            gsap.from(el, {
                duration: this.duration,
                ease: this.animation,
                x: -300
            })
        }
    }
}
</script>

<style scoped>
#img {
    width: 300px;
    height: auto;
}
</style>
