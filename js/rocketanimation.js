/*
 * Theme Name: HostRocket Responsive HTML5 Landing page
 * Theme URI: http://www.iunique.me/brandesign/hostrocket
 * Author: Brandesign
 * Author URI: http://www.iunique.me/brandesign
 * Description: A Bootstrap Responsive HTML5 Landing page
 * Version: 1.0
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2015 Brandesign.
 */
(function (lib, img, cjs) {
"use strict";
var p; // shortcut to reference prototypes

// stage content:
(lib.rocket = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.cloudAnimation2();
	this.instance.setTransform(670.4,284.4);
	this.instance.alpha = 0.488;

	this.instance_1 = new lib.cloudAnimation1();
	this.instance_1.setTransform(493.4,80.4);
	this.instance_1.alpha = 0.488;

	// Layer 1
	this.instance_2 = new lib.rocketAnimation();
	this.instance_2.setTransform(400,355);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,22,800,666);


// symbols:
(lib.cloud = function() {
	this.initialize(img.cloud);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,88);


(lib.rocket_1 = function() {
	this.initialize(img.rocket_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,666);


(lib.rocket_2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.rocket_1();
	this.instance.setTransform(-399.9,-332.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-399.9,-332.9,800,666);


(lib.cloudmc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cloud();
	this.instance.setTransform(-82.9,-43.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-82.9,-43.9,166,88);


(lib.rocketAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rocket_2();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-5.8,y:-2.8},8).to({x:-1.8,y:4},8).to({x:-9.8,y:3},8).to({x:-2.8},8).to({y:-3.8},8).to({x:-0.8,y:5},8).to({x:0,y:0},8).to({x:-7.8,y:2},9).to({x:-0.8,y:5},9).to({x:-7.8,y:9},10).to({x:-5.8,y:0},10).to({x:2,y:-2.8},10).to({x:0,y:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-399.9,-332.9,800,666);


(lib.cloudAnimation2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cloudmc();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-54.7,y:56.4,alpha:1},19).to({x:-228,y:234.6},60).to({x:-285.8,y:294,alpha:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.9,-43.9,166,88);


(lib.cloudAnimation1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cloudmc();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-60.7,y:60.9,alpha:1},24).to({x:-238.3,y:238.6},70).to({x:-301.8,y:302,alpha:0},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.9,-43.9,166,88);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
