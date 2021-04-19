<template>
<div class="container">
    <canvas id="c"></canvas>
    <button id="crop" @click="crop()">crop</button>
    <button id="startCrop" style="border:1px solid #000000;" @click="startCrop()">start crop</button>
    <br>
    <canvas id="canvas" height="900" width="900"></canvas>
</div>
</template>

<script>
import {
    fabric
} from "fabric";

export default {
    data() {
        return {
            canvas: {},
            el: {},
            Object: {},
            // lastActive,
            selection_obj_left: 0,
            selection_obj_top: 0,
            isCropping: false,
        }
    },
    components: {

    },
    mounted() {
        window.canvas = new fabric.Canvas('canvas');
        let canvas = this.canvas;
        canvas = window.canvas;
        console.log(window.canvas);
        fabric.Image.fromURL('https://iso.500px.com/wp-content/uploads/2016/11/stock-photo-159533631-1500x1000.jpg', function (img) {
            img.scale(0.3).set({
                left: canvas.getWidth() / 2,
                top: 100,
                selectable: true,
            });
            canvas.add(img);
            canvas.selection = false;
            canvas.renderAll();
        },{ crossOrigin: 'anonymous' });

    },
    methods: {
        startCrop() {
            if (window.canvas.getActiveObject()) {
                this.Object = window.canvas.getActiveObject();
                console.log(this.Object.left);
                this.el = new fabric.Rect({
                    fill: 'rgba(0,0,0,0)',
                    originX: 'left',
                    originY: 'top',
                    stroke: '#ccc',
                    //strokeDashArray: [2, 2],
                    strokWidth: 5,
                    opacity: 1,
                    width: 1,
                    height: 1,
                    borderColor: '#36fd00',
                    cornerColor: 'green',
                    hasRotatingPoint: false,
                    selectable: true
                });
                this.el.left = window.canvas.getActiveObject().left;
                this.el.top = window.canvas.getActiveObject().top;
                this.el.width = window.canvas.getActiveObject().width * window.canvas.getActiveObject().scaleX;
                this.el.height = window.canvas.getActiveObject().height * window.canvas.getActiveObject().scaleY;
                window.canvas.setActiveObject(this.el);
                window.canvas.add(this.el);
            } else {
                alert("vui lòng chọn hình");
            }
            this.isCropping = true;
            console.log(this.isCropping);
            // let that = this;
        },
        cropImage(png, left, top, height, width) {
            if (top < png.top) {
                height = height - (png.top - top);
                top = png.top;
            }
            if (left < png.left) {
                width = width - (png.left - left);
                left = png.left;
            }
            if (top + height > png.top + png.height * png.scaleY)
                height = png.top + png.height * png.scaleY - top;
            if (left + width > png.left + png.width * png.scaleX)
                width = png.left + png.width * png.scaleX - left;

            var canvas_crop = new fabric.Canvas("canvas_crop");

            fabric.Image.fromURL(window.canvas.toDataURL('png'), function (img) {
                img.set('left', -left);
                img.set('top', -top);
                window.canvas.add(img)
                window.canvas.setHeight(height);
                window.canvas.setWidth(width);
                window.canvas.renderAll();
                fabric.Image.fromURL(canvas_crop.toDataURL('png'), function (croppedImg) {
                    croppedImg.set('left', left);
                    croppedImg.set('top', top);
                    window.canvas.add(croppedImg).renderAll();
                });
            });

        },
        crop() {
            let el = this.el;
            // let object = this.Object;
            var width = el.width * 1;
            var height = el.height * 1;
            console.log(parseInt(el.scaleY * height), parseInt(width * el.scaleX), el.left, el.top );
            // this.cropImage(object, el.left, el.top, parseInt(el.scaleY * height), parseInt(width * el.scaleX));

            // window.canvas.remove(object);
            // window.canvas.remove(window.canvas.getActiveObject());
 
            // window.canvas.renderAll();

            // this.isCropping = false;
        }

    }
}
</script>

<style scoped>
#canvas {
    border: 5px solid rgb(0, 0, 0);
}
</style>
