function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function random(low, high) {
  return Math.random() * (high - low) + low;
}

var Visual = /*#__PURE__*/function () {
  function Visual() {
    _classCallCheck(this, Visual);

    this.canvas = document.querySelector('#canvas');
    this.context = this.canvas.getContext('2d');
    this.canvasWidth = 0;
    this.canvasHeight = 0;
    this.particleLength = 100;
    this.particles = [];
    this.particleMaxRadius = 4;
    this.handleMouseMoveBind = this.handleMouseMove.bind(this);
    this.handleClickBind = this.handleClick.bind(this);
    this.handleResizeBind = this.handleResize.bind(this);
    this.initialize();
    this.render();
  }

  _createClass(Visual, [{
    key: "initialize",
    value: function initialize() {
      this.resizeCanvas();

      for (var i = 0; i < this.particleLength; i++) {
        this.particles.push(this.createParticle(i));
      }

      this.bind();
    }
  }, {
    key: "bind",
    value: function bind() {
      document.body.addEventListener('mousemove', this.handleMouseMoveBind, false);
      document.body.addEventListener('click', this.handleClickBind, false);
      window.addEventListener('resize', this.handleResizeBind, false);
    }
  }, {
    key: "unbind",
    value: function unbind() {
      document.body.removeEventListener('mousemove', this.handleMouseMoveBind, false);
      document.body.removeEventListener('click', this.handleClickBind, false);
      window.removeEventListener('resize', this.handleResizeBind, false);
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(e) {}
  }, {
    key: "handleClick",
    value: function handleClick(e) {}
  }, {
    key: "handleResize",
    value: function handleResize() {
      this.resizeCanvas();
    }
  }, {
    key: "resizeCanvas",
    value: function resizeCanvas() {
      this.canvasWidth = document.body.offsetWidth;
      this.canvasHeight = document.body.offsetHeight;
      this.canvas.width = this.canvasWidth * window.devicePixelRatio;
      this.canvas.height = this.canvasHeight * window.devicePixelRatio;
      this.context = this.canvas.getContext('2d');
      this.context.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
  }, {
    key: "createParticle",
    value: function createParticle(id, isRecreate) {
      var radius = random(1, this.particleMaxRadius);
      var x = isRecreate ? -radius - random(0, this.canvasWidth) : random(0, this.canvasWidth);
      var y = random(this.canvasHeight / 2 - 150, this.canvasHeight / 2 + 150);
      y += random(-100, 100);
      var alpha = random(0.05, 0.8);
      return {
        id: id,
        x: x,
        y: y,
        startY: y,
        radius: radius,
        defaultRadius: radius,
        startAngle: 0,
        endAngle: Math.PI * 2,
        alpha: alpha,
        color: {
          r: 255,
          g: 255,
          b: 255
        },
        speed: alpha + 1,
        amplitude: random(50, 200),
        isBurst: false
      };
    }
  }, {
    key: "drawParticles",
    value: function drawParticles() {
      var _this = this;

      this.particles.forEach(function (particle) {
        // 位置情報更新
        _this.moveParticle(particle); // particle描画


        _this.context.beginPath();

        _this.context.fillStyle = "rgba(".concat(particle.color.r, ", ").concat(particle.color.g, ", ").concat(particle.color.b, ", ").concat(particle.alpha, ")");

        _this.context.arc(particle.x, particle.y, particle.radius, particle.startAngle, particle.endAngle);

        _this.context.fill();
      });
    }
  }, {
    key: "moveParticle",
    value: function moveParticle(particle) {
      particle.x += particle.speed;
      particle.y = particle.startY + particle.amplitude * Math.sin(particle.x / 5 * Math.PI / 180);
    }
  }, {
    key: "enlargeParticle",
    value: function enlargeParticle(clientX, clientY) {
      this.particles.forEach(function (particle) {
        if (particle.isBurst) return;
        var distance = Math.hypot(particle.x - clientX, particle.y - clientY);

        if (distance <= 100) {
          var scaling = (100 - distance) / 1.5;
          TweenMax.to(particle, 0.5, {
            radius: particle.defaultRadius + scaling,
            ease: Power2.easeOut
          });
        } else {
          TweenMax.to(particle, 0.5, {
            radius: particle.defaultRadius,
            ease: Power2.easeOut
          });
        }
      });
    }
  }, {
    key: "burstParticle",
    value: function burstParticle(clientX, clientY) {
      var _this2 = this;

      this.particles.forEach(function (particle) {
        var distance = Math.hypot(particle.x - clientX, particle.y - clientY);

        if (distance <= 100) {
          particle.isBurst = true;
          TweenMax.to(particle, 0.5, {
            radius: particle.defaultRadius + 200,
            alpha: 0,
            ease: Power2.easeOut,
            onComplete: function onComplete() {
              _this2.particles[particle.id] = _this2.createParticle(particle.id, true);
            }
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      // canvas初期化
      this.context.clearRect(0, 0, this.canvasWidth + this.particleMaxRadius * 2, this.canvasHeight); // particleを描画

      this.drawParticles(); // 画面から消えたら新しいparticleに差し替え

      this.particles.forEach(function (particle) {
        if (particle.x - particle.radius >= _this3.canvasWidth) {
          _this3.particles[particle.id] = _this3.createParticle(particle.id, true);
        }
      });
      requestAnimationFrame(this.render.bind(this));
    }
  }]);

  return Visual;
}();

new Visual();