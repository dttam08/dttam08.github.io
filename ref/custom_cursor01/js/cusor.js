! function (t) {
    var e = {};

    function n(i) {
        if (e[i]) return e[i].exports;
        var r = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = t, n.c = e, n.d = function (t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) n.d(i, r, function (e) {
                return t[e]
            }.bind(null, r));
        return i
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 6)
}([function (t, e, n) {
    "use strict";

    function i(t) {
        this._event = {
            X: 0,
            Y: 0,
            cursorDown: !1,
            initialX: 0,
            initialY: 0,
            originalEvent: null
        }, this.initialized = !1, this.curDown = !1, this.numListeners = 0, this.listeners = [], this.listener = t.listener || window, this.multiplier = t.multiplier || 1, this.hasMouseEvent = "onmousedown" in document, this.hasTouchEvent = "ontouchstart" in document, this.hasTouchWinEvent = navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1, this.hasPointerEvent = !!window.navigator.msPointerEnabled, this.isTouch = this.hasTouchEvent || this.hasTouchWinEvent || this.hasPointerEvent, this.msTouchAction = null, this._onDragStart = this._onDragStart.bind(this), this._onDrag = this._onDrag.bind(this), this._onDragEnd = this._onDragEnd.bind(this), this._onMouseLeave = this._onMouseLeave.bind(this), this._notify = this._notify.bind(this)
    }
    i.prototype.on = function (t) {
        this.initialized || this._addListeners(), this.listeners.push(t), this.numListeners = this.listeners.length
    }, i.prototype.off = function (t) {
        this.listeners.splice(t, 1), this.numListeners = this.listeners.length, this.numListeners <= 0 && this._removeListeners()
    }, i.prototype._notify = function (t) {
        var e = this.isTouch && t.targetTouches ? t.targetTouches[0] : t;
        this._event.X = (e.pageX - this._event.initialX) * this.multiplier, this._event.Y = (e.pageY - this._event.initialY) * this.multiplier, this._event.originalEvent = t, this._event.cursorDown = this.curDown, this._event.initialX = e.pageX, this._event.initialY = e.pageY;
        for (var n = 0; n < this.numListeners; n++) this.listeners[n](this._event)
    }, i.prototype._onDrag = function (t) {
        this.curDown && (t.preventDefault(), this._notify(t))
    }, i.prototype._onDragStart = function (t) {
        var e = this.isTouch && t.targetTouches ? t.targetTouches[0] : t;
        this._event.initialX = e.pageX, this._event.initialY = e.pageY, this.curDown = !0
    }, i.prototype._onDragEnd = function (t) {
        this.curDown = !1
    }, i.prototype._onMouseLeave = function (t) {
        this._onDragEnd(t)
    }, i.prototype._addListeners = function () {
        this.hasMouseEvent && (this.listener.addEventListener("mouseleave", this._onMouseLeave), this.listener.addEventListener("mouseup", this._onDragEnd), this.listener.addEventListener("mousedown", this._onDragStart), this.listener.addEventListener("mousemove", this._onDrag)), this.hasTouchEvent && (this.listener.addEventListener("touchmove", this._onDrag), this.listener.addEventListener("touchend", this._onDragEnd), this.listener.addEventListener("touchstart", this._onDragStart)), this.hasPointerEvent && this.hasTouchWinEvent && (this.msTouchAction = this.listener.style.msTouchAction, this.listener.style.msTouchAction = "none", this.listener.addEventListener("MSPointerMove", this._onDrag), this.listener.addEventListener("MSPointerUp", this._onDragEnd), this.listener.addEventListener("MSPointerDown", this._onDragStart))
    }, i.prototype._removeListeners = function () {
        this.hasMouseEvent && (this.listener.removeEventListener("mouseleave", this._onMouseLeave), this.listener.removeEventListener("mouseup", this._onDragEnd), this.listener.removeEventListener("mousedown", this._onDragStart), this.listener.removeEventListener("mousemove", this._onDrag)), this.hasTouchEvent && (this.listener.removeEventListener("touchmove", this._onDrag), this.listener.removeEventListener("touchend", this._onDragEnd), this.listener.removeEventListener("touchstart", this._onDragStart)), this.hasPointerEvent && this.hasTouchWinEvent && (this.msTouchAction && (this.listener.style.msTouchAction = this.msTouchAction), this.listener.removeEventListener("MSPointerMove", this._onDrag), this.listener.removeEventListener("MSPointerUp", this._onDragEnd), this.listener.removeEventListener("MSPointerDown", this._onDragStart))
    }, t.exports = i
}, function (t, e, n) {
    var i = n(2);
    "string" == typeof i && (i = [[t.i, i, ""]]);
    var r = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(4)(i, r);
    i.locals && (t.exports = i.locals)
}, function (t, e, n) {
    (t.exports = n(3)(!1)).push([t.i, "html,body{position:relative}.cursor{  pointer-events:none;position:fixed;z-index:90;height:40px;width:38px;top:15px;left:40px;will-change:transform;opacity:0;transition:opacity .2s ease-out}@media (hover: none){.cursor{display:none}}.cursor.is-visible{opacity:1}.cursor.is-pressed{transform:scale(0.3);}\n", ""])
}, function (t, e) {
    t.exports = function (t) {
        var e = [];
        return e.toString = function () {
            return this.map(function (e) {
                var n = function (t, e) {
                    var n = t[1] || "",
                        i = t[3];
                    if (!i) return n;
                    if (e && "function" == typeof btoa) {
                        var r = function (t) {
                                return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */"
                            }(i),
                            o = i.sources.map(function (t) {
                                return "/*# sourceURL=" + i.sourceRoot + t + " */"
                            });
                        return [n].concat(o).concat([r]).join("\n")
                    }
                    return [n].join("\n")
                }(e, t);
                return e[2] ? "@media " + e[2] + "{" + n + "}" : n
            }).join("")
        }, e.i = function (t, n) {
            "string" == typeof t && (t = [[null, t, ""]]);
            for (var i = {}, r = 0; r < this.length; r++) {
                var o = this[r][0];
                "number" == typeof o && (i[o] = !0)
            }
            for (r = 0; r < t.length; r++) {
                var s = t[r];
                "number" == typeof s[0] && i[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"), e.push(s))
            }
        }, e
    }
}, function (t, e, n) {
    var i = {},
        r = function (t) {
            var e;
            return function () {
                return void 0 === e && (e = t.apply(this, arguments)), e
            }
        }(function () {
            return window && document && document.all && !window.atob
        }),
        o = function (t) {
            var e = {};
            return function (t) {
                if ("function" == typeof t) return t();
                if (void 0 === e[t]) {
                    var n = function (t) {
                        return document.querySelector(t)
                    }.call(this, t);
                    if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                        n = n.contentDocument.head
                    } catch (t) {
                        n = null
                    }
                    e[t] = n
                }
                return e[t]
            }
        }(),
        s = null,
        a = 0,
        u = [],
        c = n(5);

    function h(t, e) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n],
                o = i[r.id];
            if (o) {
                o.refs++;
                for (var s = 0; s < o.parts.length; s++) o.parts[s](r.parts[s]);
                for (; s < r.parts.length; s++) o.parts.push(m(r.parts[s], e))
            } else {
                var a = [];
                for (s = 0; s < r.parts.length; s++) a.push(m(r.parts[s], e));
                i[r.id] = {
                    id: r.id,
                    refs: 1,
                    parts: a
                }
            }
        }
    }

    function l(t, e) {
        for (var n = [], i = {}, r = 0; r < t.length; r++) {
            var o = t[r],
                s = e.base ? o[0] + e.base : o[0],
                a = {
                    css: o[1],
                    media: o[2],
                    sourceMap: o[3]
                };
            i[s] ? i[s].parts.push(a) : n.push(i[s] = {
                id: s,
                parts: [a]
            })
        }
        return n
    }

    function d(t, e) {
        var n = o(t.insertInto);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var i = u[u.length - 1];
        if ("top" === t.insertAt) i ? i.nextSibling ? n.insertBefore(e, i.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), u.push(e);
        else if ("bottom" === t.insertAt) n.appendChild(e);
        else {
            if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var r = o(t.insertInto + " " + t.insertAt.before);
            n.insertBefore(e, r)
        }
    }

    function f(t) {
        if (null === t.parentNode) return !1;
        t.parentNode.removeChild(t);
        var e = u.indexOf(t);
        e >= 0 && u.splice(e, 1)
    }

    function v(t) {
        var e = document.createElement("style");
        return void 0 === t.attrs.type && (t.attrs.type = "text/css"), p(e, t.attrs), d(t, e), e
    }

    function p(t, e) {
        Object.keys(e).forEach(function (n) {
            t.setAttribute(n, e[n])
        })
    }

    function m(t, e) {
        var n, i, r, o;
        if (e.transform && t.css) {
            if (!(o = e.transform(t.css))) return function () {};
            t.css = o
        }
        if (e.singleton) {
            var u = a++;
            n = s || (s = v(e)), i = y.bind(null, n, u, !1), r = y.bind(null, n, u, !0)
        } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (t) {
            var e = document.createElement("link");
            return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", p(e, t.attrs), d(t, e), e
        }(e), i = function (t, e, n) {
            var i = n.css,
                r = n.sourceMap,
                o = void 0 === e.convertToAbsoluteUrls && r;
            (e.convertToAbsoluteUrls || o) && (i = c(i));
            r && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
            var s = new Blob([i], {
                    type: "text/css"
                }),
                a = t.href;
            t.href = URL.createObjectURL(s), a && URL.revokeObjectURL(a)
        }.bind(null, n, e), r = function () {
            f(n), n.href && URL.revokeObjectURL(n.href)
        }) : (n = v(e), i = function (t, e) {
            var n = e.css,
                i = e.media;
            i && t.setAttribute("media", i);
            if (t.styleSheet) t.styleSheet.cssText = n;
            else {
                for (; t.firstChild;) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(n))
            }
        }.bind(null, n), r = function () {
            f(n)
        });
        return i(t),
            function (e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                    i(t = e)
                } else r()
            }
    }
    t.exports = function (t, e) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = r()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
        var n = l(t, e);
        return h(n, e),
            function (t) {
                for (var r = [], o = 0; o < n.length; o++) {
                    var s = n[o];
                    (a = i[s.id]).refs--, r.push(a)
                }
                t && h(l(t, e), e);
                for (o = 0; o < r.length; o++) {
                    var a;
                    if (0 === (a = r[o]).refs) {
                        for (var u = 0; u < a.parts.length; u++) a.parts[u]();
                        delete i[a.id]
                    }
                }
            }
    };
    var g = function () {
        var t = [];
        return function (e, n) {
            return t[e] = n, t.filter(Boolean).join("\n")
        }
    }();

    function y(t, e, n, i) {
        var r = n ? "" : i.css;
        if (t.styleSheet) t.styleSheet.cssText = g(e, r);
        else {
            var o = document.createTextNode(r),
                s = t.childNodes;
            s[e] && t.removeChild(s[e]), s.length ? t.insertBefore(o, s[e]) : t.appendChild(o)
        }
    }
}, function (t, e) {
    t.exports = function (t) {
        var e = "undefined" != typeof window && window.location;
        if (!e) throw new Error("fixUrls requires window.location");
        if (!t || "string" != typeof t) return t;
        var n = e.protocol + "//" + e.host,
            i = n + e.pathname.replace(/\/[^\/]*$/, "/");
        return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
            var r, o = e.trim().replace(/^"(.*)"$/, function (t, e) {
                return e
            }).replace(/^'(.*)'$/, function (t, e) {
                return e
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o) ? t : (r = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? n + o : i + o.replace(/^\.\//, ""), "url(" + JSON.stringify(r) + ")")
        })
    }
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(0),
        r = n.n(i);
    var o = function (t, e, n) {
        return Math.min(Math.max(t, e), n)
    };
    var s = function (t, e) {
        return e = void 0 === e ? 100 : Math.pow(10, e), Math.round(t * e) / e
    };
    n(1);
    var a = document.querySelector("body"),
        u = document.querySelector(".wrapper-cursor"),
        c = 0,
        h = 0,
        l = a.querySelector(".cursor"),
        d = 0,
        f = 0,
        v = {
            currentX: 0,
            currentY: 0,
            targetX: 0,
            targetY: 0
        },
        p = {
            current: 1,
            target: 1
        },
        m = .09,
        g = 0,
        y = 0,
        b = null,
        _ = {
            listener: a,
            multiplier: 2
        };

    function E() {
        var t = g - y;
        y += t * m, u.style.transform = "translate3d(".concat(s(y), "px,0,0)"), b = 0 == t.toFixed(2) ? null : requestAnimationFrame(E)
    }
    new r.a(_).on(function (t) {
        g += t.X, L(), null === b && requestAnimationFrame(E)
    }), a.addEventListener("mouseenter", function () {
        l.classList.add("is-visible")
    }), a.addEventListener("mouseleave", function () {
        l.classList.remove("is-visible"), p.target = 1, l.classList.remove("is-pressed")
    }), a.addEventListener("mousemove", function (t) {
        v.targetX = t.pageX - d / 2, v.targetY = t.pageY - f / 2
    }), a.addEventListener("mousedown", function () {
        p.target = .35, l.classList.add("is-pressed")
    }), a.addEventListener("mouseup", function () {
        p.target = 1, l.classList.remove("is-pressed")
    }), requestAnimationFrame(function t() {
        v.currentX += .09 * (v.targetX - v.currentX), v.currentY += .09 * (v.targetY - v.currentY), p.current += .06 * (p.target - p.current), l.style.transform = "translate3d(".concat(s(v.currentX), "px, ").concat(s(v.currentY), "px, 0px) scale(").concat(s(p.current), ")"), requestAnimationFrame(t)
    });
    var L = function () {
            g = o(g, -1 * (h - c), 0)
        },
        w = function () {
            d = l.getBoundingClientRect().width, f = l.getBoundingClientRect().height, c = window.innerWidth, 
                h = u.getBoundingClientRect().width, L(), b = requestAnimationFrame(E)
        };
    window.addEventListener("resize", w), w()
}]);
