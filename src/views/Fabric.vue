<template>
<div class="container">
    <form id="uploadImg" runat="server">
        <input type="file" id="uploadedImg" ref="uploadedImg" />
        <button type="button" @click="upload">
            sassasaasas
        </button>
    </form>

    <canvas id="canvas" ref="canvas" height="1000" width="1000"></canvas>
</div>
</template>

<script>
import {
    fabric
} from "fabric";

export default {
    
    data() {
        return {
            canvas: {}
        }
    },
    methods: {
        upload() {
            let el = this.$refs.canvas;
            let canvas = new fabric.Canvas(el);
            // let ip = this.$refs.uploadedImg;
            // var reader = new FileReader();
            // reader.onload = function (event) {
            //     var imgObj = new Image();
            //     imgObj.src = event.target.result;
            //     imgObj.onload = function () {
            //         var image = new fabric.Image(imgObj);
            //         image.set({
            //             angle: 0,
            //             padding: 10,
            //             cornersize: 10,
            //         });
            //         image.scale(0.4);
            //         canvas.centerObject(image);
            //         canvas.add(image);
            //         canvas.renderAll();
            //     }
            // }
            // reader.readAsDataURL(ip.files[0]);

            fabric.Image.fromURL('http://lorempixel.com/400/200', (img) => {
                canvas.add(img);
            });
        }
    },
    mounted() {

    }
}
</script>

<style scoped>

</style>
