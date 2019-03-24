require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"HelloWorld":[function(require,module,exports){
"use strict";
cc._RF.push(module, '280c3rsZJJKnZ9RqbALVwtK', 'HelloWorld');
// Script/HelloWorld.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.label.string = this.text;
    },

    // called every frame
    update: function update(dt) {}
});

cc._RF.pop();
},{}],"TableManager":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'f0c22xONmVNhafm3goGfeux', 'TableManager');
// Script/TableManager.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {

        run_node: {
            type: cc.Node,
            default: null
        },

        item_root: {
            type: cc.Node,
            default: null
        }
    },

    start: function start() {
        this.start_index = Math.random() * this.item_root.children.length; //[0 12)
        this.start_index = Math.floor(this.start_index);
        this.run_node.setPosition(this.item_root.children[this.start_index].getPosition());

        this.is_run = false;

        console.log("start_index:" + this.start_index);
    },
    start_click: function start_click() {
        this.end_index = Math.random() * this.item_root.children.length; //[0 12)
        this.end_index = Math.floor(this.end_index);

        this.is_run = true;
        this.show_run_anim();

        console.log("end_index:" + this.end_index);
    },
    show_run_anim: function show_run_anim() {

        this.turns = Math.random() * 2; //[0 2)
        this.turns = Math.floor(this.turns) + 2;

        this.run_path = [];

        for (var i = this.start_index; i < this.item_root.children.length; i++) {
            this.run_path.push(this.item_root.children[i]);
        }

        for (var j = 0; j < this.turns; j++) {
            for (var i = 0; i < this.item_root.children.length; i++) {
                this.run_path.push(this.item_root.children[i]);
            }
        }

        for (var i = 0; i < this.end_index; i++) {
            this.run_path.push(this.item_root.children[i]);
        }

        this.step_speed = 5000;
        this.damp = this.step_speed / (this.run_path.length - 1);
        this.path_next_index = 1;

        this.run_to_next();
    },
    run_to_next: function run_to_next() {

        if (this.path_next_index >= this.run_path.length) {
            this.is_run = false;
            this.start_index = this.end_index;
            return;
        }

        this.time_passed = 0;

        var dst = this.run_path[this.path_next_index].getPosition();
        var src = this.run_node.getPosition();
        var dir = dst.sub(src);
        var len = dir.mag();

        this.step_time = len / this.step_speed;

        this.run_node.x += dir.x;
        this.run_node.y += dir.y;

        this.step_speed -= this.damp;
        this.path_next_index++;
    },


    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {

        if (!this.is_run) {
            return;
        }

        this.time_passed += dt;

        if (this.time_passed > this.step_time) {
            dt -= this.time_passed - this.step_time;
        }

        if (this.time_passed >= this.step_time) {
            this.run_to_next();
        }
    }

});

cc._RF.pop();
},{}]},{},["HelloWorld","TableManager"])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvSGVsbG9Xb3JsZC5qcyIsImFzc2V0cy9TY3JpcHQvVGFibGVNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNJOztBQUVBO0FBQ0k7QUFDSTtBQUNBO0FBRkc7QUFJUDtBQUNBO0FBTlE7O0FBU1o7QUFDQTtBQUNJO0FBQ0g7O0FBRUQ7QUFDQTtBQWxCSzs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7O0FBRUk7QUFDTDtBQUNBO0FBRmU7O0FBS1Y7QUFDQztBQUNBO0FBRlU7QUFQSDs7QUFhWjtBQUNDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBRUQ7QUFDQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUVEOztBQUVDO0FBQ0g7O0FBRUc7O0FBRUE7QUFFQztBQUNBOztBQUVEO0FBRUM7QUFFQztBQUNBO0FBQ0Q7O0FBRUQ7QUFFQztBQUNBOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUQ7O0FBRUM7QUFFQztBQUNBO0FBQ0E7QUFDQTs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVIO0FBQ0E7QUFDRzs7O0FBRUQ7QUFDQTs7QUFFQztBQUVDO0FBQ0E7O0FBRUo7O0FBRUE7QUFFQztBQUNBOztBQUVEO0FBRUM7QUFDQTtBQUNFOztBQWhISSIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gZGVmYXVsdHMsIHNldCB2aXN1YWxseSB3aGVuIGF0dGFjaGluZyB0aGlzIHNjcmlwdCB0byB0aGUgQ2FudmFzXG4gICAgICAgIHRleHQ6ICdIZWxsbywgV29ybGQhJ1xuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSB0aGlzLnRleHQ7XG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZVxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICB9LFxufSk7XG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG5cclxuICAgICAgICBydW5fbm9kZToge1xyXG5cdFx0XHR0eXBlOiBjYy5Ob2RlLFxyXG5cdFx0XHRkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGl0ZW1fcm9vdDoge1xyXG4gICAgICAgIFx0dHlwZTogY2MuTm9kZSxcclxuICAgICAgICBcdGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICBcdHRoaXMuc3RhcnRfaW5kZXggPSBNYXRoLnJhbmRvbSgpICogdGhpcy5pdGVtX3Jvb3QuY2hpbGRyZW4ubGVuZ3RoOyAvL1swIDEyKVxyXG4gICAgXHR0aGlzLnN0YXJ0X2luZGV4ID0gTWF0aC5mbG9vcih0aGlzLnN0YXJ0X2luZGV4KTtcclxuICAgIFx0dGhpcy5ydW5fbm9kZS5zZXRQb3NpdGlvbih0aGlzLml0ZW1fcm9vdC5jaGlsZHJlblt0aGlzLnN0YXJ0X2luZGV4XS5nZXRQb3NpdGlvbigpKTtcclxuXHJcbiAgICBcdHRoaXMuaXNfcnVuID0gZmFsc2U7XHJcblxyXG4gICAgXHRjb25zb2xlLmxvZyhcInN0YXJ0X2luZGV4OlwiICsgdGhpcy5zdGFydF9pbmRleCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0X2NsaWNrKCkge1xyXG4gICAgXHR0aGlzLmVuZF9pbmRleCA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLml0ZW1fcm9vdC5jaGlsZHJlbi5sZW5ndGg7IC8vWzAgMTIpXHJcbiAgICBcdHRoaXMuZW5kX2luZGV4ID0gTWF0aC5mbG9vcih0aGlzLmVuZF9pbmRleCk7XHJcblxyXG4gICAgXHR0aGlzLmlzX3J1biA9IHRydWU7XHJcbiAgICBcdHRoaXMuc2hvd19ydW5fYW5pbSgpO1xyXG5cclxuICAgIFx0Y29uc29sZS5sb2coXCJlbmRfaW5kZXg6XCIgKyB0aGlzLmVuZF9pbmRleCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNob3dfcnVuX2FuaW0oKSB7XHJcblxyXG4gICAgXHR0aGlzLnR1cm5zID0gTWF0aC5yYW5kb20oKSAqIDI7IC8vWzAgMilcclxuXHRcdHRoaXMudHVybnMgPSBNYXRoLmZsb29yKHRoaXMudHVybnMpICsgMjtcclxuXHJcbiAgICBcdHRoaXMucnVuX3BhdGggPSBbXTtcclxuXHJcbiAgICBcdGZvcih2YXIgaSA9IHRoaXMuc3RhcnRfaW5kZXg7IGkgPCB0aGlzLml0ZW1fcm9vdC5jaGlsZHJlbi5sZW5ndGg7IGkrKylcclxuICAgIFx0e1xyXG4gICAgXHRcdHRoaXMucnVuX3BhdGgucHVzaCh0aGlzLml0ZW1fcm9vdC5jaGlsZHJlbltpXSk7XHJcbiAgICBcdH1cclxuXHJcbiAgICBcdGZvcih2YXIgaiA9IDA7IGogPCB0aGlzLnR1cm5zOyBqKyspXHJcbiAgICBcdHtcclxuICAgIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtX3Jvb3QuY2hpbGRyZW4ubGVuZ3RoOyBpKyspXHJcblx0ICAgIFx0e1xyXG5cdCAgICBcdFx0dGhpcy5ydW5fcGF0aC5wdXNoKHRoaXMuaXRlbV9yb290LmNoaWxkcmVuW2ldKTtcclxuXHQgICAgXHR9XHJcbiAgICBcdH1cclxuXHJcbiAgICBcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmVuZF9pbmRleDsgaSsrKVxyXG4gICAgXHR7XHJcbiAgICBcdFx0dGhpcy5ydW5fcGF0aC5wdXNoKHRoaXMuaXRlbV9yb290LmNoaWxkcmVuW2ldKTtcclxuICAgIFx0fVxyXG5cclxuICAgIFx0dGhpcy5zdGVwX3NwZWVkID0gNTAwMDtcclxuICAgIFx0dGhpcy5kYW1wID0gdGhpcy5zdGVwX3NwZWVkIC8gKHRoaXMucnVuX3BhdGgubGVuZ3RoIC0gMSk7XHJcbiAgICBcdHRoaXMucGF0aF9uZXh0X2luZGV4ID0gMTtcclxuXHJcbiAgICBcdHRoaXMucnVuX3RvX25leHQoKTtcclxuICAgIH0sXHJcblxyXG4gICAgcnVuX3RvX25leHQoKSB7XHJcblxyXG4gICAgXHRpZih0aGlzLnBhdGhfbmV4dF9pbmRleCA+PSB0aGlzLnJ1bl9wYXRoLmxlbmd0aClcclxuICAgIFx0e1xyXG4gICAgXHRcdHRoaXMuaXNfcnVuID0gZmFsc2U7XHJcbiAgICBcdFx0dGhpcy5zdGFydF9pbmRleCA9IHRoaXMuZW5kX2luZGV4O1xyXG4gICAgXHRcdHJldHVybjtcclxuICAgIFx0fVxyXG5cclxuICAgIFx0dGhpcy50aW1lX3Bhc3NlZCA9IDA7XHJcblxyXG4gICAgXHR2YXIgZHN0ID0gdGhpcy5ydW5fcGF0aFt0aGlzLnBhdGhfbmV4dF9pbmRleF0uZ2V0UG9zaXRpb24oKTtcclxuICAgIFx0dmFyIHNyYyA9IHRoaXMucnVuX25vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgIFx0dmFyIGRpciA9IGRzdC5zdWIoc3JjKTtcclxuICAgIFx0dmFyIGxlbiA9IGRpci5tYWcoKTtcclxuXHJcbiAgICBcdHRoaXMuc3RlcF90aW1lID0gbGVuIC8gdGhpcy5zdGVwX3NwZWVkO1xyXG5cclxuICAgIFx0dGhpcy5ydW5fbm9kZS54ICs9IGRpci54O1xyXG4gICAgXHR0aGlzLnJ1bl9ub2RlLnkgKz0gZGlyLnk7XHJcblxyXG5cdFx0dGhpcy5zdGVwX3NwZWVkIC09IHRoaXMuZGFtcDtcclxuXHRcdHRoaXMucGF0aF9uZXh0X2luZGV4Kys7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIFx0aWYoIXRoaXMuaXNfcnVuKVxyXG4gICAgXHR7XHJcbiAgICBcdFx0cmV0dXJuO1xyXG4gICAgXHR9XHJcblxyXG5cdFx0dGhpcy50aW1lX3Bhc3NlZCArPSBkdDtcclxuXHJcblx0XHRpZih0aGlzLnRpbWVfcGFzc2VkID4gdGhpcy5zdGVwX3RpbWUpXHJcblx0XHR7XHJcblx0XHRcdGR0IC09ICh0aGlzLnRpbWVfcGFzc2VkLXRoaXMuc3RlcF90aW1lKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZih0aGlzLnRpbWVfcGFzc2VkID49IHRoaXMuc3RlcF90aW1lKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnJ1bl90b19uZXh0KCk7XHJcblx0XHR9XHJcbiAgICB9LFxyXG5cclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=