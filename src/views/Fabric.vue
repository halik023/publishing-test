<template>
<div class="container">
    <form id="uploadImg" runat="server">
        <input type="file" id="uploadedImg" ref="uploadedImg" />
        <button type="button" @click="upload" class="btn">
            Update
        </button>
        <button type="button" @click="deleteObj" class="btn">
            Delete
        </button>
    </form>

    <canvas id="canvas" ref="canvas" height="1040" width="2000"></canvas>
</div>
</template>

<script>
import {
    fabric
} from "fabric";
export default {
    data() {
        return {}
    },
    methods: {
        deleteObj() {
            let canvas = window.canvas;
            let obj = canvas.getActiveObject();
            canvas.remove(obj);
        },
        upload() {
            let canvas = window.canvas;
            let ip = this.$refs.uploadedImg;
            var reader = new FileReader();
            reader.onload = function (event) {
                var imgObj = new Image();
                imgObj.src = event.target.result;
                imgObj.onload = function () {
                    var image = new fabric.Image(imgObj);
                    image.set({
                        angle: 0,
                        padding: 10,
                        cornersize: 10,
                    });
                    image.scale(0.4);
                    canvas.centerObject(image);
                    canvas.add(image);
                    canvas.renderAll();
                }
            }
            reader.readAsDataURL(ip.files[0]);
            console.log(canvas);

            // fabric.Image.fromURL('http://lorempixel.com/400/200', function (img) {
            //     img.set({
            //         borderColor: 'gray',
            //         cornerColor: 'black',
            //         cornerSize: 12,
            //         transparentCorners: true
            //     });
            //     canvas.add(img);
            // });
        }
    },
    mounted() {
        let el = this.$refs.canvas;
        window.canvas = new fabric.Canvas(el);
    }
}
</script>

<style scoped>

</style>
