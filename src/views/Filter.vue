<template>
<div class="container">
    <canvas id="canvas" ref="canvas" height="400" width="2000"></canvas>
    <div class="form-group">
        <label for="sel1">Filter</label>
        <select @change="changFilter" v-model="filter" class="form-control" id="sel1">
            <option value="Brownie">Brownie</option>
            <option value="Vintage">Vintage</option>
            <option value="Technicolor">Technicolor</option>
            <option value="Polaroid">Polaroid</option>
            <option value="Kodachrome">Kodachrome</option>
            <option value="BlackWhite">BlackWhite</option>
            <option value="Grayscale">Grayscale</option>
        </select>
        <label for="sel1">Animation</label>
        <select @change="changAnimation" v-model="animation" class="form-control" id="sel1">
            <option value="easeInQuad">easeInQuad</option>
            <option value="easeOutQuad">easeOutQuad</option>
            <option value="easeInCubic">easeInCubic</option>
            <option value="easeOutCubic">easeOutCubic</option>
            <option value="easeInQuart">easeInQuart</option>
            <option value="easeOutQuart">easeOutQuart</option>
            <option value="easeInQuint">easeInQuint</option>
            <option value="easeOutQuint">easeOutQuint</option>
            <option value="easeInSine">easeInSine</option>
            <option value="easeOutSine">easeOutSine</option>
            <option value="easeInExpo">easeInExpo</option>
            <option value="easeOutExpo">easeOutExpo</option>
        </select>
    </div>
</div>
</template>

<script>
import {
    fabric
} from "fabric";
export default {
    data() {
        return {
            filter: 'Brownie',
            animation: 'easeInQuad'
        }
    },
    methods: {
        changFilter() {
            let canvas = window.canvas;
            let obj = canvas.getActiveObject();
            obj.filters.pop();
            obj.filters.push(new fabric.Image.filters[this.filter]());
            obj.applyFilters();
            canvas.renderAll();
        },
        changAnimation() {
            let canvas = window.canvas;
            let obj = canvas.getActiveObject();
            obj.animate('left',  '+=100', {
                duration: 1000,
                onChange: window.canvas.renderAll.bind(window.canvas),
                easing: fabric.util.ease[this.animation]
            });
            canvas.renderAll();
        }
    },
    mounted() {
        let el = this.$refs.canvas;
        window.canvas = new fabric.Canvas(el);
        fabric.Image.fromURL('https://raw.githubusercontent.com/frankgx97/fabricjs-crop/master/cat.jpg', function (img) {
            img.set({
                borderColor: 'gray',
                cornerColor: 'black',
                cornerSize: 12,
                transparentCorners: true,
            });
            img.animate('left', img.left === 100 ? 400 : 100, {
                duration: 1000,
                onChange: window.canvas.renderAll.bind(window.canvas),
                easing: fabric.util.ease.easeOutBounce
            });
            img.filters.push(new fabric.Image.filters.Polaroid());
            img.applyFilters();
            window.canvas.add(img);
        }, {
            crossOrigin: 'anonymous'
        });
    }
}
</script>

<style scoped>

</style>
