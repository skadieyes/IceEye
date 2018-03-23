webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html,\nbody,\ndiv {\n  border: 0;\n  margin: 0;\n  padding: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'eyes-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__food_food_module__ = __webpack_require__("../../../../../src/app/food/food.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fly_game_fly_game_module__ = __webpack_require__("../../../../../src/app/fly-game/fly-game.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routes__["a" /* AppRoutes */],
                __WEBPACK_IMPORTED_MODULE_5__food_food_module__["a" /* FoodModule */],
                __WEBPACK_IMPORTED_MODULE_6__fly_game_fly_game_module__["a" /* FlyGameModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__food_food_component__ = __webpack_require__("../../../../../src/app/food/food.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fly_game_fly_game_component__ = __webpack_require__("../../../../../src/app/fly-game/fly-game.component.ts");



var routes = [
    { path: 'food', component: __WEBPACK_IMPORTED_MODULE_1__food_food_component__["a" /* FoodComponent */] },
    { path: 'fly', component: __WEBPACK_IMPORTED_MODULE_2__fly_game_fly_game_component__["a" /* FlyGameComponent */] },
    { path: '', redirectTo: 'food', pathMatch: 'full' },
];
var AppRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/fly-game/fly-game.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"game-holder\" id=\"gameHolder\">\n<div class=\"world\" id=\"world\" (mousemove)=\"handleMouseMove($event)\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/fly-game/fly-game.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".world {\n  position: absolute;\n  overflow: hidden;\n  width: 100%;\n  height: 100%; }\n\n.game-holder {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(#e4e0ba, #f7d9aa); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/fly-game/fly-game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlyGameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fly_game_service__ = __webpack_require__("../../../../../src/app/fly-game/fly-game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fly_game_model__ = __webpack_require__("../../../../../src/app/fly-game/fly-game.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model__ = __webpack_require__("../../../../../src/app/fly-game/model/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FlyGameComponent = (function () {
    function FlyGameComponent(_fly, _sea, _cloud, _sky, _airplane, _ennemy, _particle) {
        this._fly = _fly;
        this._sea = _sea;
        this._cloud = _cloud;
        this._sky = _sky;
        this._airplane = _airplane;
        this._ennemy = _ennemy;
        this._particle = _particle;
        this.ennemiesPool = [];
        this.game = this._fly.Variables;
        this.deltaTime = 0;
        this.particlesPool = [];
        this.mousePos = { x: 0, y: 0 };
    }
    FlyGameComponent.prototype.ngOnInit = function () {
        this.sceneSet();
        this.lightSet();
        this.modelSet();
        this.modelDraw();
        this.renderRun();
    };
    FlyGameComponent.prototype.sceneSet = function () {
        var _this = this;
        this.HEIGHT = window.innerHeight;
        this.WIDTH = window.innerWidth;
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.Fog(0xf7d9aa, 100, 950);
        var aspectRatio = this.WIDTH / this.HEIGHT;
        var fieldOfView = 60;
        var nearPlane = 1;
        var farPlane = 10000;
        this.camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
        this.camera.position.x = 0;
        this.camera.position.z = 200;
        this.camera.position.y = 100;
        this.renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true
        });
        this.renderer.setSize(this.WIDTH, this.HEIGHT);
        this.renderer.shadowMapEnabled = true;
        this.container = document.getElementById('world');
        this.container.appendChild(this.renderer.domElement);
        window.addEventListener('resize', function () {
            _this.handleWindowResize();
        });
    };
    FlyGameComponent.prototype.lightSet = function () {
        var hemisphereLight = new THREE.HemisphereLight(0xaaaaaa, 0x000000, .9);
        var shadowLight = new THREE.DirectionalLight(0xffffff, .9);
        var ambientLight = new THREE.AmbientLight(0xdc8874, .5);
        shadowLight.position.set(150, 350, 350);
        shadowLight.castShadow = true;
        shadowLight.shadowCameraLeft = -400;
        shadowLight.shadowCameraRight = 400;
        shadowLight.shadowCameraTop = 400;
        shadowLight.shadowCameraBottom = -400;
        shadowLight.shadowCameraNear = 1;
        shadowLight.shadowCameraFar = 1000;
        shadowLight.shadowMapSizeWidth = 2048;
        shadowLight.shadowMapSizeHeight = 2048;
        this.scene.add(hemisphereLight);
        this.scene.add(shadowLight);
    };
    FlyGameComponent.prototype.handleWindowResize = function () {
        this.HEIGHT = window.innerHeight;
        this.WIDTH = window.innerWidth;
        this.renderer.setSize(this.WIDTH, this.HEIGHT);
        this.camera.aspect = this.WIDTH / this.HEIGHT;
        this.camera.updateProjectionMatrix();
    };
    FlyGameComponent.prototype.handleMouseMove = function (event) {
        var tx = -1 + (event.clientX / this.WIDTH) * 2;
        var ty = 1 - (event.clientY / this.HEIGHT) * 2;
        this.mousePos = { x: tx, y: ty };
    };
    FlyGameComponent.prototype.modelSet = function () {
        this.gameModelSet = new __WEBPACK_IMPORTED_MODULE_2__fly_game_model__["b" /* GameModelSet */]();
        this.gameModel = new __WEBPACK_IMPORTED_MODULE_2__fly_game_model__["a" /* GameModel */]();
        var waves = this._sea.waves;
        this.moveWaves(waves);
        this.gameModel.sea = this._sea.mesh;
        this.gameModel.sea.receiveShadow = true;
        this.gameModel.sky = this._sky.skyMesh;
        this.gameModel.airplane = this._airplane.mesh;
        this.gameModel.particle = this._particle.mesh;
    };
    FlyGameComponent.prototype.spawnEnnemies = function () {
        var nEnnemies = this.game.level;
        this.gameModel.ennemy = new THREE.Object3D();
        for (var i = 0; i < nEnnemies; i++) {
            var ennemy = {};
            if (this.ennemiesPool.length) {
                ennemy = this.ennemiesPool.pop();
            }
            else {
                ennemy = this._ennemy.mesh;
            }
            var angle = -(i * 0.1);
            var distance = this.game.seaRadius + this.game.planeDefaultHeight + (-1 + Math.random() * 2) * (this.game.planeAmpHeight - 20);
            if (ennemy.position) {
                ennemy.position.y = Math.random() * 10;
                ennemy.position.x = Math.random();
                var ennemyUse = new __WEBPACK_IMPORTED_MODULE_3__model__["e" /* EnnemyUse */](angle, distance, ennemy);
                this.gameModel.ennemy.add(ennemy);
                this.gameModel.ennemyUse.push(ennemyUse);
            }
        }
        return this.gameModel.ennemy;
    };
    FlyGameComponent.prototype.rotateEnnemies = function () {
        for (var i = 0; i < this.gameModel.ennemyUse.length; i++) {
            var ennemy = this.gameModel.ennemyUse[i];
            ennemy.angle += this.game.speed * this.deltaTime * this.game.ennemiesSpeed;
            if (ennemy.angle > Math.PI * 2) {
                ennemy.angle -= Math.PI * 2;
            }
            if (ennemy.mesh) {
                ennemy.mesh.position.y = -this.game.seaRadius + Math.sin(ennemy.angle) * ennemy.distance;
                ennemy.mesh.position.x = Math.cos(ennemy.angle) * ennemy.distance;
                ennemy.mesh.rotation.z += Math.random() * .1;
                ennemy.mesh.rotation.y += Math.random() * .1;
            }
            var diffPos = this.gameModel.airplane.position.clone().sub(ennemy.mesh.position.clone());
            var d = diffPos.length();
            if (d < this.game.ennemyDistanceTolerance) {
                this.spawnParticles(ennemy.mesh.position.clone(), 15, 0xf25346, 3);
                this.ennemiesPool.unshift(this.gameModel.ennemyUse.splice(i, 1)[0]);
                this.gameModel.ennemy.remove(ennemy.mesh);
                this.game.planeCollisionSpeedX = 100 * diffPos.x / d;
                this.game.planeCollisionSpeedY = 100 * diffPos.y / d;
                i--;
            }
            else if (ennemy.angle > Math.PI) {
                this.ennemiesPool.unshift(this.gameModel.ennemiesInUse.splice(i, 1)[0]);
                this.gameModel.remove(ennemy.mesh);
                i--;
            }
        }
    };
    FlyGameComponent.prototype.explode = function (pos, color, scale) {
        var _p = this.gameModel.particle.parent;
        this.gameModel.particle.material.color = new THREE.Color(color);
        this.gameModel.particle.material.needsUpdate = true;
        this.gameModel.particle.scale.set(scale, scale, scale);
        var targetX = pos.x + (-1 + Math.random() * 2) * 50;
        var targetY = pos.y + (-1 + Math.random() * 2) * 50;
        var speed = .6 + Math.random() * .2;
    };
    FlyGameComponent.prototype.spawnParticles = function (pos, density, color, scale) {
        var nPArticles = density;
        for (var i = 0; i < nPArticles; i++) {
            var particle = {};
            if (this.particlesPool.length) {
                particle = this.particlesPool.pop();
            }
            else {
                particle = this._particle.mesh;
            }
            this.gameModel.particle.add(particle);
            particle.visible = true;
            particle.position.y = pos.y;
            particle.position.x = pos.x;
            this.explode(pos, color, scale);
        }
    };
    FlyGameComponent.prototype.moveWaves = function (waves) {
        if (this.gameModel.sea) {
            var verts = this.gameModel.sea.geometry.vertices;
            var len = verts.length;
            for (var i = 0; i < len; i++) {
                var v = verts[i];
                var vprops = waves[i];
                v.x = vprops.x + Math.cos(vprops.ang) * vprops.amp;
                v.y = vprops.y + Math.sin(vprops.ang) * vprops.amp;
                vprops.ang += vprops.speed;
            }
            this.gameModel.sea.geometry.verticesNeedUpdate = true;
            this.gameModel.sea.rotation.z += .005;
        }
    };
    FlyGameComponent.prototype.modelDraw = function () {
        this.gameModel.sea.position.y = -600;
        this.scene.add(this.gameModel.sea);
        this.gameModel.sky.position.y = -600;
        this.scene.add(this.gameModel.sky);
        this.gameModel.airplane.scale.set(.25, .25, .25);
        this.gameModel.airplane.position.y = 100;
        this.scene.add(this.gameModel.airplane);
    };
    FlyGameComponent.prototype.createEnnemies = function () {
        var ennemys = this.spawnEnnemies();
        for (var i = 0; i < 10; i++) {
            var ennemy = this._ennemy.mesh;
            this.ennemiesPool.push(ennemy);
        }
        var ennemiesHolder = new __WEBPACK_IMPORTED_MODULE_3__model__["c" /* EnnemiesHolder */](this.gameModel.ennemy, this.gameModel.ennemyUse);
        console.log(ennemys);
        this.scene.add(ennemys);
    };
    FlyGameComponent.prototype.createParticles = function () {
        for (var i = 0; i < 10; i++) {
            var particle = this._particle.mesh;
            this.particlesPool.push(particle);
        }
        var particlesHolder = new __WEBPACK_IMPORTED_MODULE_3__model__["f" /* ParticleHolder */](this.gameModel.particle);
        this.scene.add(particlesHolder.mesh);
    };
    FlyGameComponent.prototype.renderRun = function () {
        var _this = this;
        var waves = this._sea.waves;
        this.render = function () {
            window.requestAnimationFrame(_this.render);
            _this.updatePlane();
            _this.gameModel.sea.rotation.z += .005;
            _this.gameModel.sky.rotation.z += .01;
            _this.moveWaves(waves);
            _this.renderer.render(_this.scene, _this.camera);
        };
        this.render();
    };
    FlyGameComponent.prototype.updatePlane = function () {
        var targetY = this.normalize(this.mousePos.y, -.75, .75, 25, 175);
        var targetX = this.normalize(this.mousePos.x, -.75, .75, -100, 100);
        this.gameModel.airplane.position.y += (targetY - this.gameModel.airplane.position.y) * 0.1;
        this.gameModel.airplane.rotation.z = (targetY - this.gameModel.airplane.position.y) * 0.0128;
        this.gameModel.airplane.rotation.x = (this.gameModel.airplane.position.y - targetY) * 0.0064;
        this.gameModel.airplane.children[5].rotation.x += 0.3;
    };
    FlyGameComponent.prototype.normalize = function (v, vmin, vmax, tmin, tmax) {
        var nv = Math.max(Math.min(v, vmax), vmin);
        var dv = vmax - vmin;
        var pc = (nv - vmin) / dv;
        var dt = tmax - tmin;
        var tv = tmin + (pc * dt);
        return tv;
    };
    FlyGameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-fly-game',
            template: __webpack_require__("../../../../../src/app/fly-game/fly-game.component.html"),
            styles: [__webpack_require__("../../../../../src/app/fly-game/fly-game.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__fly_game_service__["a" /* FlyGameService */],
                __WEBPACK_IMPORTED_MODULE_3__model__["h" /* SeaService */],
                __WEBPACK_IMPORTED_MODULE_3__model__["b" /* CloudService */],
                __WEBPACK_IMPORTED_MODULE_3__model__["i" /* SkyService */],
                __WEBPACK_IMPORTED_MODULE_3__model__["a" /* AirPlaneServive */],
                __WEBPACK_IMPORTED_MODULE_3__model__["d" /* EnnemyService */],
                __WEBPACK_IMPORTED_MODULE_3__model__["g" /* ParticleService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__fly_game_service__["a" /* FlyGameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__fly_game_service__["a" /* FlyGameService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__model__["h" /* SeaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__model__["h" /* SeaService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__model__["b" /* CloudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__model__["b" /* CloudService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__model__["i" /* SkyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__model__["i" /* SkyService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__model__["a" /* AirPlaneServive */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__model__["a" /* AirPlaneServive */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__model__["d" /* EnnemyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__model__["d" /* EnnemyService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__model__["g" /* ParticleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__model__["g" /* ParticleService */]) === "function" && _g || Object])
    ], FlyGameComponent);
    return FlyGameComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=fly-game.component.js.map

/***/ }),

/***/ "../../../../../src/app/fly-game/fly-game.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GameModelSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameModel; });
var GameModelSet = (function () {
    function GameModelSet() {
    }
    return GameModelSet;
}());

var GameModel = (function () {
    function GameModel() {
        this.ennemyUse = [];
        this.ennemyHolder = [];
    }
    return GameModel;
}());

//# sourceMappingURL=fly-game.model.js.map

/***/ }),

/***/ "../../../../../src/app/fly-game/fly-game.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlyGameModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fly_game_component__ = __webpack_require__("../../../../../src/app/fly-game/fly-game.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FlyGameModule = (function () {
    function FlyGameModule() {
    }
    FlyGameModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__fly_game_component__["a" /* FlyGameComponent */]]
        })
    ], FlyGameModule);
    return FlyGameModule;
}());

//# sourceMappingURL=fly-game.module.js.map

/***/ }),

/***/ "../../../../../src/app/fly-game/fly-game.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlyGameService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FlyGameService = (function () {
    function FlyGameService() {
        this.Colors = {
            red: 0xf25346,
            white: 0xd8d0d1,
            brown: 0x59332e,
            pink: 0xF5986E,
            brownDark: 0x23190f,
            blue: 0x68c3c0,
        };
        this.Variables = {
            speed: 0,
            initSpeed: .00035,
            baseSpeed: .00035,
            targetBaseSpeed: .00035,
            incrementSpeedByTime: .0000025,
            incrementSpeedByLevel: .000005,
            distanceForSpeedUpdate: 100,
            speedLastUpdate: 0,
            distance: 0,
            ratioSpeedDistance: 50,
            energy: 100,
            ratioSpeedEnergy: 3,
            level: 10,
            levelLastUpdate: 0,
            distanceForLevelUpdate: 1000,
            planeDefaultHeight: 100,
            planeAmpHeight: 80,
            planeAmpWidth: 75,
            planeMoveSensivity: 0.005,
            planeRotXSensivity: 0.0008,
            planeRotZSensivity: 0.0004,
            planeFallSpeed: .001,
            planeMinSpeed: 1.2,
            planeMaxSpeed: 1.6,
            planeSpeed: 0,
            planeCollisionDisplacementX: 0,
            planeCollisionSpeedX: 0,
            planeCollisionDisplacementY: 0,
            planeCollisionSpeedY: 0,
            seaRadius: 600,
            seaLength: 800,
            wavesMinAmp: 5,
            wavesMaxAmp: 20,
            wavesMinSpeed: 0.001,
            wavesMaxSpeed: 0.003,
            cameraFarPos: 500,
            cameraNearPos: 150,
            cameraSensivity: 0.002,
            coinDistanceTolerance: 15,
            coinValue: 3,
            coinsSpeed: .5,
            coinLastSpawn: 0,
            distanceForCoinsSpawn: 100,
            ennemyDistanceTolerance: 10,
            ennemyValue: 10,
            ennemiesSpeed: .6,
            ennemyLastSpawn: 0,
            distanceForEnnemiesSpawn: 50,
            status: 'playing'
        };
    }
    FlyGameService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], FlyGameService);
    return FlyGameService;
}());

//# sourceMappingURL=fly-game.service.js.map

/***/ }),

/***/ "../../../../../src/app/fly-game/model/airplane.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AirPlaneServive; });
var AirPlaneServive = (function () {
    function AirPlaneServive() {
    }
    Object.defineProperty(AirPlaneServive.prototype, "cockpit", {
        get: function () {
            var geomCockpit = new THREE.BoxGeometry(80, 50, 50, 1, 1, 1);
            var matCockpit = new THREE.MeshPhongMaterial({ color: 0xf25346, shading: THREE.FlatShading });
            geomCockpit.vertices[4].y -= 10;
            geomCockpit.vertices[4].z += 20;
            geomCockpit.vertices[5].y -= 10;
            geomCockpit.vertices[5].z -= 20;
            geomCockpit.vertices[6].y += 30;
            geomCockpit.vertices[6].z += 20;
            geomCockpit.vertices[7].y += 30;
            geomCockpit.vertices[7].z -= 20;
            var cockpit = new THREE.Mesh(geomCockpit, matCockpit);
            cockpit.castShadow = true;
            cockpit.receiveShadow = true;
            return cockpit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AirPlaneServive.prototype, "engine", {
        get: function () {
            var geomEngine = new THREE.BoxGeometry(20, 50, 50, 1, 1, 1);
            var matEngine = new THREE.MeshPhongMaterial({ color: 0xd8d0d1, shading: THREE.FlatShading });
            var engine = new THREE.Mesh(geomEngine, matEngine);
            engine.position.x = 40;
            engine.castShadow = true;
            engine.receiveShadow = true;
            return engine;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AirPlaneServive.prototype, "tail", {
        get: function () {
            var geomTailPlane = new THREE.BoxGeometry(15, 20, 5, 1, 1, 1);
            var matTailPlane = new THREE.MeshPhongMaterial({ color: 0xf25346, shading: THREE.FlatShading });
            var tailPlane = new THREE.Mesh(geomTailPlane, matTailPlane);
            tailPlane.position.set(-35, 25, 0);
            tailPlane.castShadow = true;
            tailPlane.receiveShadow = true;
            return tailPlane;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AirPlaneServive.prototype, "wing", {
        get: function () {
            var geomSideWing = new THREE.BoxGeometry(40, 8, 150, 1, 1, 1);
            var matSideWing = new THREE.MeshPhongMaterial({ color: 0xf25346, shading: THREE.FlatShading });
            var sideWing = new THREE.Mesh(geomSideWing, matSideWing);
            sideWing.position.set(20, 10, 0);
            sideWing.castShadow = true;
            sideWing.receiveShadow = true;
            return sideWing;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AirPlaneServive.prototype, "windshield", {
        get: function () {
            var geomWindshield = new THREE.BoxGeometry(3, 15, 20, 1, 1, 1);
            var matWindshield = new THREE.MeshPhongMaterial({ color: 0xd8d0d1, transparent: true, opacity: .3, shading: THREE.FlatShading });
            var windshield = new THREE.Mesh(geomWindshield, matWindshield);
            windshield.position.set(5, 27, 0);
            windshield.castShadow = true;
            windshield.receiveShadow = true;
            return windshield;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AirPlaneServive.prototype, "Propeller", {
        get: function () {
            var geomPropeller = new THREE.BoxGeometry(20, 10, 10, 1, 1, 1);
            geomPropeller.vertices[4].y -= 5;
            geomPropeller.vertices[4].z += 5;
            geomPropeller.vertices[5].y -= 5;
            geomPropeller.vertices[5].z -= 5;
            geomPropeller.vertices[6].y += 5;
            geomPropeller.vertices[6].z += 5;
            geomPropeller.vertices[7].y += 5;
            geomPropeller.vertices[7].z -= 5;
            var matPropeller = new THREE.MeshPhongMaterial({ color: 0x59332e, shading: THREE.FlatShading });
            var propeller = new THREE.Mesh(geomPropeller, matPropeller);
            propeller.castShadow = true;
            propeller.receiveShadow = true;
            var geomBlade = new THREE.BoxGeometry(1, 100, 20, 1, 1, 1);
            var matBlade = new THREE.MeshPhongMaterial({ color: 0x59332e, shading: THREE.FlatShading });
            var blade = new THREE.Mesh(geomBlade, matBlade);
            blade.position.set(8, 0, 0);
            blade.castShadow = true;
            blade.receiveShadow = true;
            propeller.add(blade);
            propeller.position.set(50, 0, 0);
            return propeller;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AirPlaneServive.prototype, "wheelProtecR", {
        get: function () {
            var wheelProtecGeom = new THREE.BoxGeometry(30, 15, 10, 1, 1, 1);
            var wheelProtecMat = new THREE.MeshPhongMaterial({ color: 0xf25346, shading: THREE.FlatShading });
            var wheelProtecR = new THREE.Mesh(wheelProtecGeom, wheelProtecMat);
            wheelProtecR.position.set(25, -20, 25);
            return wheelProtecR;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AirPlaneServive.prototype, "wheelTireR", {
        get: function () {
            var wheelTireGeom = new THREE.BoxGeometry(24, 24, 4);
            var wheelTireMat = new THREE.MeshPhongMaterial({ color: 0xf25346, shading: THREE.FlatShading });
            var wheelTireR = new THREE.Mesh(wheelTireGeom, wheelTireMat);
            wheelTireR.add(this.wheelAxis);
            return wheelTireR;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AirPlaneServive.prototype, "wheelAxis", {
        get: function () {
            var wheelAxisGeom = new THREE.BoxGeometry(10, 10, 6);
            var wheelAxisMat = new THREE.MeshPhongMaterial({ color: 0x59332e, shading: THREE.FlatShading });
            var wheelAxis = new THREE.Mesh(wheelAxisGeom, wheelAxisMat);
            return wheelAxis;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AirPlaneServive.prototype, "suspension", {
        get: function () {
            var suspensionGeom = new THREE.BoxGeometry(4, 20, 4);
            suspensionGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, 10, 0));
            var suspensionMat = new THREE.MeshPhongMaterial({ color: 0xf25346, shading: THREE.FlatShading });
            var suspension = new THREE.Mesh(suspensionGeom, suspensionMat);
            suspension.position.set(-35, -5, 0);
            suspension.rotation.z = -.3;
            return suspension;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AirPlaneServive.prototype, "mesh", {
        get: function () {
            var mesh = new THREE.Object3D();
            mesh.add(this.cockpit);
            mesh.add(this.engine);
            mesh.add(this.tail);
            mesh.add(this.wing);
            mesh.add(this.windshield);
            mesh.add(this.Propeller);
            mesh.add(this.suspension);
            mesh.add(this.wheelProtecR);
            mesh.add(this.wheelTireR);
            var wheelProtecL = this.wheelProtecR.clone();
            wheelProtecL.position.z = -this.wheelProtecR.position.z;
            mesh.add(wheelProtecL);
            var wheelTireL = this.wheelTireR.clone();
            wheelTireL.position.z = -this.wheelTireR.position.z;
            mesh.add(wheelTireL);
            var wheelTireB = this.wheelTireR.clone();
            wheelTireB.scale.set(.5, .5, .5);
            wheelTireB.position.set(-35, -5, 0);
            mesh.add(wheelTireB);
            mesh.add(this.suspension);
            return mesh;
        },
        enumerable: true,
        configurable: true
    });
    return AirPlaneServive;
}());

//# sourceMappingURL=airplane.service.js.map

/***/ }),

/***/ "../../../../../src/app/fly-game/model/cloud.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloudService; });
var CloudService = (function () {
    function CloudService() {
    }
    Object.defineProperty(CloudService.prototype, "mesh", {
        get: function () {
            var mesh = new THREE.Object3D();
            mesh.name = 'cloud';
            var geom = new THREE.CubeGeometry(20, 20, 20);
            var mat = new THREE.MeshPhongMaterial({
                color: 0xd8d0d1,
            });
            var nBlocs = 3 + Math.floor(Math.random() * 3);
            for (var i = 0; i < nBlocs; i++) {
                var m = new THREE.Mesh(geom.clone(), mat);
                m.position.x = i * 15;
                m.position.y = Math.random() * 10;
                m.position.z = Math.random() * 10;
                m.rotation.z = Math.random() * Math.PI * 2;
                m.rotation.y = Math.random() * Math.PI * 2;
                var s = .1 + Math.random() * .9;
                m.scale.set(s, s, s);
                m.castShadow = true;
                m.receiveShadow = true;
                mesh.add(m);
            }
            return mesh;
        },
        enumerable: true,
        configurable: true
    });
    return CloudService;
}());

//# sourceMappingURL=cloud.service.js.map

/***/ }),

/***/ "../../../../../src/app/fly-game/model/ennemy.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EnnemyService; });
/* unused harmony export EnnemyMesh */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EnnemyUse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnnemiesHolder; });
var EnnemyService = (function () {
    function EnnemyService() {
    }
    Object.defineProperty(EnnemyService.prototype, "mesh", {
        get: function () {
            var geom = new THREE.TetrahedronGeometry(8, 2);
            var mat = new THREE.MeshPhongMaterial({
                color: 0xf25346,
                shininess: 0,
                specular: 0xffffff,
                shading: THREE.FlatShading
            });
            var mesh = new THREE.Mesh(geom, mat);
            mesh.castShadow = true;
            var angle = 0;
            var dist = 0;
            return mesh;
        },
        enumerable: true,
        configurable: true
    });
    return EnnemyService;
}());

var EnnemyMesh = (function () {
    function EnnemyMesh() {
        this.geom = new THREE.TetrahedronGeometry(8, 2);
        this.mat = new THREE.MeshPhongMaterial({
            color: 0xf25346,
            shininess: 0,
            specular: 0xffffff,
            shading: THREE.FlatShading
        });
        this.mesh = new THREE.Mesh(this.geom, this.mat);
        this.angle = 0;
        this.dist = 0;
    }
    return EnnemyMesh;
}());

var EnnemyUse = (function () {
    function EnnemyUse(angle, dist, mesh) {
        this.angle = 0;
        this.dist = 0;
        this.angle = angle;
        this.dist = dist;
        this.mesh = mesh;
    }
    return EnnemyUse;
}());

var EnnemiesHolder = (function () {
    function EnnemiesHolder(mesh, ennemiesInUse) {
        this.mesh = new THREE.Object3D();
        this.ennemiesInUse = [];
        this.mesh = mesh;
        this.ennemiesInUse = ennemiesInUse;
    }
    return EnnemiesHolder;
}());

//# sourceMappingURL=ennemy.service.js.map

/***/ }),

/***/ "../../../../../src/app/fly-game/model/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__particle_service__ = __webpack_require__("../../../../../src/app/fly-game/model/particle.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__particle_service__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__particle_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ennemy_service__ = __webpack_require__("../../../../../src/app/fly-game/model/ennemy.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__ennemy_service__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__ennemy_service__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__ennemy_service__["a"]; });
/* unused harmony reexport EnnemyMesh */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__airplane_service__ = __webpack_require__("../../../../../src/app/fly-game/model/airplane.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__airplane_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sky_service__ = __webpack_require__("../../../../../src/app/fly-game/model/sky.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_3__sky_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sea_service__ = __webpack_require__("../../../../../src/app/fly-game/model/sea.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_4__sea_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cloud_service__ = __webpack_require__("../../../../../src/app/fly-game/model/cloud.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__cloud_service__["a"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/fly-game/model/particle.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ParticleService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticleHolder; });
var ParticleService = (function () {
    function ParticleService() {
    }
    Object.defineProperty(ParticleService.prototype, "mesh", {
        get: function () {
            var geom = new THREE.TetrahedronGeometry(3, 0);
            var mat = new THREE.MeshPhongMaterial({
                color: 0x009999,
                shininess: 0,
                specular: 0xffffff,
                shading: THREE.FlatShading
            });
            var mesh = new THREE.Mesh(geom, mat);
            return mesh;
        },
        enumerable: true,
        configurable: true
    });
    return ParticleService;
}());

var ParticleHolder = (function () {
    function ParticleHolder(mesh) {
        this.mesh = mesh;
    }
    return ParticleHolder;
}());

//# sourceMappingURL=particle.service.js.map

/***/ }),

/***/ "../../../../../src/app/fly-game/model/sea.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeaService; });
var SeaService = (function () {
    function SeaService() {
    }
    Object.defineProperty(SeaService.prototype, "waves", {
        get: function () {
            var l = this.geom.vertices.length;
            var waves = [];
            for (var i = 0; i < l; i++) {
                var v = this.geom.vertices[i];
                waves.push({
                    y: v.y,
                    x: v.x,
                    z: v.z,
                    ang: Math.random() * Math.PI * 2,
                    amp: 15 + Math.random() * 15,
                    speed: 0.016 + Math.random() * 0.032
                });
            }
            return waves;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeaService.prototype, "mat", {
        get: function () {
            var mat = new THREE.MeshPhongMaterial({
                color: 0x68c3c0,
                transparent: true,
                opacity: .8,
                shading: THREE.FlatShading,
            });
            return mat;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeaService.prototype, "geom", {
        get: function () {
            var geom = new THREE.CylinderGeometry(600, 600, 800, 40, 10);
            geom.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI / 2));
            geom.mergeVertices();
            return geom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeaService.prototype, "mesh", {
        get: function () {
            var mesh = new THREE.Mesh(this.geom, this.mat);
            return mesh;
        },
        enumerable: true,
        configurable: true
    });
    return SeaService;
}());

//# sourceMappingURL=sea.service.js.map

/***/ }),

/***/ "../../../../../src/app/fly-game/model/sky.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkyService; });
var SkyService = (function () {
    function SkyService() {
    }
    Object.defineProperty(SkyService.prototype, "mesh", {
        get: function () {
            var mesh = new THREE.Object3D();
            mesh.name = 'cloud';
            var geom = new THREE.CubeGeometry(20, 20, 20);
            var mat = new THREE.MeshPhongMaterial({
                color: 0xd8d0d1,
            });
            var nBlocs = 3 + Math.floor(Math.random() * 3);
            for (var i = 0; i < nBlocs; i++) {
                var m = new THREE.Mesh(geom.clone(), mat);
                m.position.x = i * 15;
                m.position.y = Math.random() * 10;
                m.position.z = Math.random() * 10;
                m.rotation.z = Math.random() * Math.PI * 2;
                m.rotation.y = Math.random() * Math.PI * 2;
                var s = .1 + Math.random() * .9;
                m.scale.set(s, s, s);
                m.castShadow = true;
                m.receiveShadow = true;
                mesh.add(m);
            }
            return mesh;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyService.prototype, "skyMesh", {
        get: function () {
            var mesh = new THREE.Object3D();
            var nClouds = 20;
            var clouds = [];
            var stepAngle = Math.PI * 2 / nClouds;
            for (var i = 0; i < nClouds; i++) {
                var c = this.mesh;
                var a = stepAngle * i;
                var h = 750 + Math.random() * 200;
                c.position.y = Math.sin(a) * h;
                c.position.x = Math.cos(a) * h;
                c.position.z = -400 - Math.random() * 400;
                c.rotation.z = a + Math.PI / 2;
                var s = 1 + Math.random() * 2;
                c.scale.set(s, s, s);
                mesh.add(c);
            }
            return mesh;
        },
        enumerable: true,
        configurable: true
    });
    return SkyService;
}());

//# sourceMappingURL=sky.service.js.map

/***/ }),

/***/ "../../../../../src/app/food/food.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"stats\">\n</div>\n<!-- Div which will hold the Output -->\n<div id=\"webgl\">\n</div>"

/***/ }),

/***/ "../../../../../src/app/food/food.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/food/food.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__food_model__ = __webpack_require__("../../../../../src/app/food/food.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FoodComponent = (function () {
    function FoodComponent() {
    }
    FoodComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initStats();
        this.sceneSet();
        this.cameraSet();
        this.rendererSet();
        this.planeSet();
        this.lightSet();
        this.controlSet();
        this.guiSet();
        this.renderRun();
        document.getElementById('webgl').appendChild(this.renderer.domElement);
        var texture = new THREE.Texture();
        var loader2 = new THREE.ImageLoader();
        loader2.load('IceEye/assets/textures/Banana.png', function (image) {
            texture.image = image;
            texture.needsUpdate = true;
        });
        var loader = new THREE.OBJLoader();
        loader.load('IceEye/assets/obj/Banana.obj', function (loadedMesh) {
            console.log(loadedMesh);
            var material = new THREE.MeshLambertMaterial({
                color: 0xccc
            });
            loadedMesh.children.forEach(function (child) {
                child.material.map = texture;
                child.geometry.computeFaceNormals();
                child.geometry.computeVertexNormals();
            });
            loadedMesh.scale.set(100, 100, 100);
            loadedMesh.rotation.x = -0.3;
            _this.scene.add(loadedMesh);
        });
    };
    FoodComponent.prototype.sceneSet = function () {
        this.scene = new THREE.Scene();
    };
    FoodComponent.prototype.cameraSet = function () {
        this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.x = -30;
        this.camera.position.y = 40;
        this.camera.position.z = 30;
        this.camera.lookAt(this.scene.position);
    };
    FoodComponent.prototype.rendererSet = function () {
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setClearColor(new THREE.Color(0, 0, 0));
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMapEnabled = true;
    };
    FoodComponent.prototype.planeSet = function () {
        this.planeGeometry = new THREE.PlaneGeometry(60, 40, 1, 1);
        this.planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
        this.plane = new THREE.Mesh(this.planeGeometry, this.planeMaterial);
        this.plane.receiveShadow = true;
        this.plane.rotation.x = -0.5 * Math.PI;
        this.plane.position.x = 0;
        this.plane.position.y = 0;
        this.plane.position.z = 0;
    };
    FoodComponent.prototype.lightSet = function () {
        var ambientLight = new THREE.AmbientLight(0x0c0c0c);
        this.scene.add(ambientLight);
        var spotLight = new THREE.SpotLight(0xffffff);
        spotLight.position.set(-40, 60, 20);
        spotLight.castShadow = true;
        this.scene.add(spotLight);
    };
    FoodComponent.prototype.controlSet = function () {
        var _this = this;
        this.controls = new __WEBPACK_IMPORTED_MODULE_1__food_model__["a" /* ControlModel */]();
        if (this.controls) {
            this.controls.rotationSpeed = 0.02;
            this.controls.numberOfObjects = this.scene.children.length;
            this.controls.removeCube = function () {
                var allChildren = _this.scene.children;
                var lastObject = allChildren[allChildren.length - 1];
                if (lastObject instanceof THREE.Mesh) {
                    _this.scene.remove(lastObject);
                    _this.controls.numberOfObjects = _this.scene.children.length;
                }
            };
            this.controls.addCube = function () {
                var cubeSize = Math.ceil((Math.random() * 3));
                var cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
                var cubeMaterial = new THREE.MeshLambertMaterial({
                    color: Math.random() * 0xffffff
                });
                var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
                cube.castShadow = true;
                cube.position.x = -30 + Math.round((Math.random() * _this.planeGeometry.parameters.width));
                cube.position.y = Math.round((Math.random() * 5));
                cube.position.z = -20 + Math.round((Math.random() * _this.planeGeometry.parameters.height));
                _this.scene.add(cube);
                _this.controls.numberOfObjects = _this.scene.children.length;
            };
            this.controls.outputObjects = function () {
                console.log(_this.scene);
            };
        }
    };
    FoodComponent.prototype.guiSet = function () {
        var gui = new dat.GUI();
        gui.add(this.controls, 'rotationSpeed', 0, 0.5);
        gui.add(this.controls, 'addCube');
        gui.add(this.controls, 'removeCube');
        gui.add(this.controls, 'outputObjects');
        gui.add(this.controls, 'numberOfObjects').listen();
        console.log(gui);
    };
    FoodComponent.prototype.renderRun = function () {
        var _this = this;
        this.renderer.render(this.scene, this.camera);
        this.render = function () {
            _this.stats.update();
            window.requestAnimationFrame(_this.render);
            _this.scene.traverse(function (e) {
                if (e instanceof THREE.Mesh && e !== _this.plane) {
                    e.rotation.x += _this.controls.rotationSpeed;
                    e.rotation.y += _this.controls.rotationSpeed;
                    e.rotation.z += _this.controls.rotationSpeed;
                }
            });
            _this.renderer.render(_this.scene, _this.camera);
        };
        window.requestAnimationFrame(this.render);
    };
    FoodComponent.prototype.initStats = function () {
        this.stats = Stats();
        this.stats.setMode(0);
        this.stats.domElement.style.position = 'absolute';
        this.stats.domElement.style.left = '0px';
        this.stats.domElement.style.top = '0px';
        document.getElementById('stats').appendChild(this.stats.domElement);
        return this.stats;
    };
    FoodComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-food',
            template: __webpack_require__("../../../../../src/app/food/food.component.html"),
            styles: [__webpack_require__("../../../../../src/app/food/food.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FoodComponent);
    return FoodComponent;
}());

//# sourceMappingURL=food.component.js.map

/***/ }),

/***/ "../../../../../src/app/food/food.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlModel; });
var ControlModel = (function () {
    function ControlModel() {
    }
    return ControlModel;
}());

//# sourceMappingURL=food.model.js.map

/***/ }),

/***/ "../../../../../src/app/food/food.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__food_component__ = __webpack_require__("../../../../../src/app/food/food.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FoodModule = (function () {
    function FoodModule() {
    }
    FoodModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__food_component__["a" /* FoodComponent */]]
        })
    ], FoodModule);
    return FoodModule;
}());

//# sourceMappingURL=food.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map