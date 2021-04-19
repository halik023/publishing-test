<template>
<div>
    <canvas ref="canvas" width="1000" height="400" id="c"></canvas>
    <button class="btn mr-3" id="crop" @click="crop">cut</button>
    <button class="btn" id="startCrop" style="border:1px solid #000000;" @click="startCrop">Select</button>
    <br>
    <canvas style="visibility: hidden;" id="canvas_crop"></canvas>
</div>
</template>

<script>
import {
    fabric
} from "fabric";
export default {
    data() {
        return {
            object: null,
            lastActive: null,
            selection_object_left: 0,
            selection_object_top: 0,
        }
    },
    methods: {
        crop() {
            // if (!isCropping) {
            //     alert("Cropping");
            //     return;
            // }

            // var left = window.el.left - window.object.left;
            // var top = window.el.top - window.object.top;

            // left *= 1;
            // top *= 1;

            var width = window.el.width * 1;
            var height = window.el.height * 1;

            this.cropImage(this.object, window.el.left, window.el.top, parseInt(window.el.scaleY * height), parseInt(width * window.el.scaleX));
            for (var i = 0; i < document.querySelectorAll("#layers li").length; i++) {
                 window.canvas.item(i).selectable = true;
            }
            // disabled = true;

            window.canvas.remove(this.object);
            window.canvas.remove(window.canvas.getActiveObject());
            this.lastActive = this.object;
            window.canvas.renderAll();

            // isCropping = false;
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
                canvas_crop.add(img)
                canvas_crop.setHeight(height);
                canvas_crop.setWidth(width);
                canvas_crop.renderAll();
                fabric.Image.fromURL(canvas_crop.toDataURL('png'), function (croppedImg) {
                    croppedImg.set('left', left);
                    croppedImg.set('top', top);
                    window.canvas.add(croppedImg).renderAll();
                });
            });

        },
        startCrop() {
            window.canvas.remove(window.el);
            if (window.canvas.getActiveObject()) {
                if (window.canvas.getActiveObject().type == 'sprite') {
                    alert("Can't crop");
                    return;
                }
                let object = window.canvas.getActiveObject();
                if (this.lastActive !== object) {
                    console.log('different object');
                } else {
                    console.log('same object');
                }
                if (this.lastActive && this.lastActive !== object) {
                    this.lastActive.clipTo = null;
                }
                window.el = new fabric.Rect({
                    fill: 'rgba(0,0,0,0)',
                    originX: 'left',
                    originY: 'top',
                    stroke: '#ccc',
                    //strokeDashArray: [2, 2],
                    strokWidth: 5,
                    //opacity: 1,
                    width: 1,
                    height: 1,
                    borderColor: '#36fd00',
                    cornerColor: 'green',
                    hasRotatingPoint: false,
                    selectable: true
                });

                window.el.left = window.canvas.getActiveObject().left;
                this.selection_object_left = window.canvas.getActiveObject().left;
                this.selection_object_top = window.canvas.getActiveObject().top;
                window.el.top = window.canvas.getActiveObject().top;
                window.el.width = window.canvas.getActiveObject().width * window.canvas.getActiveObject().scaleX;
                window.el.height = window.canvas.getActiveObject().height * window.canvas.getActiveObject().scaleY;

                window.canvas.add(window.el);
                window.canvas.setActiveObject(window.el);
                for (var i = 0; i < document.querySelectorAll("#layers li").length; i++) {
                    window.canvas.item(i).selectable = false;
                }
            } else {
                alert("Please, select a object");
            }

        }
    },
    mounted() {
        let el = this.$refs.canvas;
        window.canvas = new fabric.Canvas(el);
        window.el = undefined;
        fabric.Image.fromURL('http://lorempixel.com/400/200', function (img) {
            img.set({
                borderColor: 'gray',
                cornerColor: 'black',
                cornerSize: 12,
                transparentCorners: true
            });
            window.canvas.add(img);
        });
    }
}
</script>

<style scoped>

</style>
