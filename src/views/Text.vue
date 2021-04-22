<template>
<div class="container">
    <canvas id="canvas" ref="canvas" height="400" width="2000"></canvas>
    <div class="form-group">
        <label>Font Family</label>
        <select @change="changProperty" v-model="property.fontFamily" class="form-control">
            <option value="arial">arial</option>
            <option value="helvetica">helvetica</option>
            <option value="myriad pro">myriad pro</option>
            <option value="delicious">delicious</option>
            <option value="verdana">verdana</option>
            <option value="georgia">georgia</option>
            <option value="courier">courier</option>
            <option value="comic sans ms">comic sans ms</option>
            <option value="impact">impact</option>
            <option value="monaco">monaco</option>
            <option value="optima">optima</option>
            <option value="hoefler text">hoefler text</option>
            <option value="plaster">plaster</option>
            <option value="engagement">engagement</option>
        </select>
        <label>Text Align</label>
        <select @change="changProperty" v-model="property.textAlign" class="form-control">
            <option value="center">Center</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
        </select>
        <label>Font Size</label>
        <input @change="changProperty" type="number" v-model="property.fontSize">
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
            property: {
                fontFamily: 'Brownie',
                textAlign: 'easeInQuad',
                fontSize: 20
            }

        }
    },
    methods: {
        changProperty() {
            let canvas = window.canvas;
            let obj = canvas.getActiveObject();
            obj.set(this.property)
            window.canvas.renderAll();
        }
        // changFilter() {
        //     let canvas = window.canvas;
        //     let obj = canvas.getActiveObject();
        //     obj.filters.pop();
        //     obj.filters.push(new fabric.Image.filters[this.filter]());
        //     obj.applyFilters();
        //     canvas.renderAll();
        // },
        // changAnimation() {
        //     let canvas = window.canvas;
        //     let obj = canvas.getActiveObject();
        //     obj.animate('left', '+=100', {
        //         duration: 1000,
        //         onChange: window.canvas.renderAll.bind(window.canvas),
        //         easing: fabric.util.ease[this.animation]
        //     });
        //     canvas.renderAll();
        // }
    },
    mounted() {
        let el = this.$refs.canvas;
        window.canvas = new fabric.Canvas(el);
        var text = new fabric.IText('hello world', {
            fontFamily: 'Comic Sans',
            "originX": "left",
            "originY": "top",
            "left": 51,
            "top": 282,
        });
        window.canvas.add(text);
    }
}
</script>

<style scoped>

</style>
