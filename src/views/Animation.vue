<template>
<div class="container">
    <!-- <div class="tool">
        <div class="row">
            <div class="col-3">
                <label for="exampleFormControlInput1">Duration</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" v-model="duration">
            </div>
            <div class="col-3">
                <label for="exampleFormControlInput1">Animation</label>
                <select class="form-control" id="exampleFormControlSelect1" v-model="animation">
                    <option value="">None</option>
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
            <div class="col-2">
                <button type="button" class="btn btn-dark" @click="play()">Play</button>
            </div>
        </div>
        <div class="photo">
            <img ref="image" id="photo" src="https://kenh14cdn.com/203336854389633024/2021/3/27/photo-1-16168382575791985074212.jpg" />
        </div>
    </div>
    <div>
        <div class="color" ref="color" @click="changeColor()"></div>
    </div> -->
    <form id="uploadImg">
        <input type="file" id="uploadedImg" ref="upload" @change="uploadImage($event)" />
    </form>
    <div>
        <button type="button" class="btn btn-primary">Crop</button>
    </div>
    <canvas ref="canvas" id="canvas" width="800" height="500"></canvas>
</div>
</template>

<script>
// import { gsap } from "gsap";
// import randomColor  from "randomcolor"
import {
    fabric
} from "fabric";
// import Velocity from 'velocity-animate'

// var canvas= new fabric.Canvas('canvas');
export default {
    data() {
        return {

        }
    },
    components: {

    },
    mounted() {
        // fabric.Image.fromURL('https://glamadelaide.com.au/wp-content/uploads/2020/11/124096496_3382129478489518_1552564845747160356_o-1000x750.jpg', function (img) {
        //     img.scale(0.5).set({
        //         left: 100,
        //         top: 100,
        //         angle: -15,

        //         clipPath: new fabric.Circle({
        //             radius: 300,
        //             originX: 'center',
        //             originY: 'center',
        //         }),
        //     })
        //     var dataURL = img.toDataURL({
        //         format: 'png',
        //         left: 100,
        //         top: 100,
        //         width: 200,
        //         height: 200
        //     });
        //     console.log(dataURL)
        //     canvas.add(img);
        // })
    },
    methods: {
        uploadImage(e) {
            let canvas= new fabric.Canvas('canvas');
            var reader = new FileReader();
            reader.onload = function (event) {
                var imgObj = new Image();
                imgObj.src = event.target.result;
                imgObj.onload = function () {
                    // start fabricJS stuff
                    var image = new fabric.Image(imgObj);
                    image.set({
                        angle: 0,
                        padding: 10,
                        cornersize: 10,
                    }).scale(0.4);
                    canvas.add(image);
                }
            }
            reader.readAsDataURL(e.target.files[0]);
        }

    }
}
</script>

<style scoped>
#canvas {
    border: 5px solid rgb(0, 0, 0);
}
</style>
