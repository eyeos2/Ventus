(function() {
  var namespace,
    __slice = Array.prototype.slice,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  namespace = function(target, name, block) {
    var item, top, _i, _len, _ref, _ref2;
    if (arguments.length < 3) {
      _ref = [(typeof exports !== 'undefined' ? exports : window)].concat(__slice.call(arguments)), target = _ref[0], name = _ref[1], block = _ref[2];
    }
    top = target;
    _ref2 = name.split('.');
    for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
      item = _ref2[_i];
      target = target[item] || (target[item] = {});
    }
    return block(target, top);
  };

  namespace('Supertags', function(exports) {
    return exports.Image = (function() {

      Image.prototype.scene = null;

      Image.prototype.camera = null;

      Image.prototype.renderer = null;

      Image.prototype.shape = null;

      function Image(width, height, parameters) {
        this.animate = __bind(this.animate, this);
        this.render = __bind(this.render, this);
        var light;
        this.scene = new THREE.Scene;
        this.camera = new THREE.PerspectiveCamera(20, width / height, 1, 3000);
        this.camera.position.set(1, 1, 10);
        this.camera.lookAt(this.scene.position);
        this.scene.add(this.camera);
        light = new THREE.PointLight(0x430000);
        light.position.x = 10;
        light.position.y = 50;
        light.position.z = 130;
        this.scene.add(light);
        this.renderer = new THREE.WebGLRenderer;
        this.renderer.setSize(width, height);
        this.renderer.sortObjects = false;
        this.shape = new Supertags.SuperShape(parameters);
        this.scene.add(this.shape);
        this.render();
      }

      Image.prototype.render = function() {
        return this.renderer.render(this.scene, this.camera);
      };

      Image.prototype.animate = function() {
        var t;
        t = new Date().getTime();
        this.camera.position.x = Math.sin(t / 1000) * 10;
        this.camera.position.z = Math.cos(t / 1000) * 10;
        this.camera.position.y = Math.cos(t / 1000) * 10;
        this.camera.lookAt(this.scene.position);
        this.render();
        return requestAnimationFrame(this.animate);
      };

      Image.prototype.appendTo = function(element) {
        var container;
        container = document.createElement('div');
        container.appendChild(this.renderer.domElement);
        element.appendChild(container);
        return element;
      };

      return Image;

    })();
  });

  namespace('Supertags', function(exports) {
    return exports.SuperShape = (function(_super) {

      __extends(SuperShape, _super);

      SuperShape.prototype.step = 0.1;

      SuperShape.prototype.n1 = 5;

      SuperShape.prototype.n2 = 10;

      SuperShape.prototype.n3 = 15;

      SuperShape.prototype.n4 = 15;

      SuperShape.prototype.a1 = 1;

      SuperShape.prototype.a2 = 1;

      SuperShape.prototype.scaler = 1;

      SuperShape.prototype.renderMode = 'mesh';

      SuperShape.prototype.geometry = null;

      SuperShape.prototype.material = null;

      function SuperShape(parameters) {
        if(parameters) {
          this.n1 = parameters.n1;
          this.n2 = parameters.n2;
          this.n3 = parameters.n3;
          this.n4 = parameters.n4;
        }

        SuperShape.__super__.constructor.call(this);
        this.geometry = new THREE.Geometry();
        this.material = new THREE.MeshNormalMaterial({
          color: 0x0000ff
        });
        this.calculate();
        this.setRenderMode('line');
      }

      SuperShape.prototype.setRenderMode = function(mode) {
        var object;
        if ((mode != null) && mode === 'line') {
          object = new THREE.Line(this.geometry, new THREE.LineBasicMaterial({
            color: 0x0000ff
          }));
          object.name = 'line';
        } else if ((mode != null) && mode === 'particule') {
          object = new THREE.ParticleSystem(this.geometry, new THREE.ParticleBasicMaterial({
            color: 0xFF2211,
            opacity: 0.7,
            size: 0.07
          }));
          object.name = 'particule';
        } else {
          object = new THREE.Mesh(this.geometry, this.material);
          object.doubleSided = true;
          object.name = 'mesh';
        }
        if (object != null) this.add(object);
        return this;
      };

      SuperShape.prototype.calculate = function() {
        var N_X, N_Y, faces, i, j, r1, r2, raux1, raux2, t1, t2, v, vertices, x, xx, y, yy, zz;
        N_X = Math.round(2 * Math.PI / this.step);
        N_Y = Math.round(Math.PI / this.step);
        v = new THREE.Vector3;
        vertices = [];
        faces = [];
        for (x = 0; 0 <= N_X ? x <= N_X : x >= N_X; 0 <= N_X ? x++ : x--) {
          i = -Math.PI + x * this.step;
          for (y = 0; 0 <= N_Y ? y <= N_Y : y >= N_Y; 0 <= N_Y ? y++ : y--) {
            j = -Math.PI / 2.0 + y * this.step;
            xx = 0;
            yy = 0;
            zz = 0;
            t1 = Math.cos(this.n1 * i / 4);
            t1 = 1 / this.a1 * Math.abs(t1);
            t1 = Math.abs(t1);
            t2 = Math.sin(this.n1 * i / 4);
            t2 = 1 / this.a2 * Math.abs(t2);
            t2 = Math.abs(t2);
            raux1 = Math.pow(t1, this.n3) + Math.pow(t2, this.n4);
            r1 = Math.abs(raux1);
            r1 = Math.pow(r1, -1 / this.n2);
            t1 = Math.cos(this.n1 * j / 4);
            t1 = 1 / this.a1 * Math.abs(t1);
            t1 = Math.abs(t1);
            t2 = Math.sin(this.n1 * j / 4);
            t2 = 1 / this.a2 * Math.abs(t2);
            t2 = Math.abs(t2);
            raux2 = Math.pow(t1, this.n3) + Math.pow(t2, this.n4);
            r2 = Math.abs(raux2);
            r2 = Math.pow(r2, -1 / this.n2);
            xx = r1 * Math.cos(i) * r2 * Math.cos(j) * this.scaler;
            yy = r1 * Math.sin(i) * r2 * Math.cos(j) * this.scaler;
            zz = r2 * Math.sin(j) * this.scaler;
            v = new THREE.Vector3(xx, yy, zz);
            vertices.push(new THREE.Vertex(v));
          }
        }
        for (i = 0; 0 <= N_X ? i <= N_X : i >= N_X; 0 <= N_X ? i++ : i--) {
          for (j = 0; 0 <= N_Y ? j <= N_Y : j >= N_Y; 0 <= N_Y ? j++ : j--) {
            faces.push(new THREE.Face4(i * N_Y + j, i * N_Y + j + 1, (i + 1) * N_Y + j + 1, (i + 1) * N_Y + j));
          }
        }
        this.geometry.vertices = vertices;
        this.geometry.faces = faces;
        this.geometry.computeFaceNormals();
        return this.geometry.computeCentroids();
      };

      return SuperShape;

    })(THREE.Object3D);
  });

}).call(this);