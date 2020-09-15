/*! For license information please see 8046.js.LICENSE.txt */
(self.webpackChunkcomponents_demo = self.webpackChunkcomponents_demo || []).push([[8046], {
  530: (e, t, s) => {
    "use strict";
    s.d(t, {P: () => a, w: () => u});
    var r = s(7583), i = s(8258);
    const n = {
      attached: !0,
      detached: !0,
      ready: !0,
      created: !0,
      beforeRegister: !0,
      registered: !0,
      attributeChanged: !0,
      listeners: !0,
      hostAttributes: !0
    }, o = {
      attached: !0,
      detached: !0,
      ready: !0,
      created: !0,
      beforeRegister: !0,
      registered: !0,
      attributeChanged: !0,
      behaviors: !0,
      _noAccessors: !0
    }, l = Object.assign({listeners: !0, hostAttributes: !0, properties: !0, observers: !0}, o);

    function a(e, t) {
      return d({}, (0, r.x)(t), e)
    }

    function c(e, t, s, r) {
      !function (e, t, s) {
        const r = e._noAccessors, i = Object.getOwnPropertyNames(e);
        for (let n = 0; n < i.length; n++) {
          let o = i[n];
          if (!(o in s)) if (r) t[o] = e[o]; else {
            let s = Object.getOwnPropertyDescriptor(e, o);
            s && (s.configurable = !0, Object.defineProperty(t, o, s))
          }
        }
      }(t, e, r);
      for (let e in n) t[e] && (s[e] = s[e] || [], s[e].push(t[e]))
    }

    function h(e, t) {
      for (const s in t) {
        const r = e[s], i = t[s];
        e[s] = !("value" in i) && r && "value" in r ? Object.assign({value: r.value}, i) : i
      }
    }

    function d(e, t, s) {
      let r;
      const n = {};

      class a extends t {
        static _finalizeClass() {
          if (this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom", this))) {
            if (r) for (let e, t = 0; t < r.length; t++) e = r[t], e.properties && this.createProperties(e.properties), e.observers && this.createObservers(e.observers, e.properties);
            e.properties && this.createProperties(e.properties), e.observers && this.createObservers(e.observers, e.properties), this._prepareTemplate()
          } else super._finalizeClass()
        }

        static get properties() {
          const t = {};
          if (r) for (let e = 0; e < r.length; e++) h(t, r[e].properties);
          return h(t, e.properties), t
        }

        static get observers() {
          let t = [];
          if (r) for (let e, s = 0; s < r.length; s++) e = r[s], e.observers && (t = t.concat(e.observers));
          return e.observers && (t = t.concat(e.observers)), t
        }

        created() {
          super.created();
          const e = n.created;
          if (e) for (let t = 0; t < e.length; t++) e[t].call(this)
        }

        _registered() {
          const e = a.prototype;
          if (!e.hasOwnProperty("__hasRegisterFinished")) {
            e.__hasRegisterFinished = !0, super._registered(), i.nL && d(e);
            const t = Object.getPrototypeOf(this);
            let s = n.beforeRegister;
            if (s) for (let e = 0; e < s.length; e++) s[e].call(t);
            if (s = n.registered, s) for (let e = 0; e < s.length; e++) s[e].call(t)
          }
        }

        _applyListeners() {
          super._applyListeners();
          const e = n.listeners;
          if (e) for (let t = 0; t < e.length; t++) {
            const s = e[t];
            if (s) for (let e in s) this._addMethodEventListenerToNode(this, e, s[e])
          }
        }

        _ensureAttributes() {
          const e = n.hostAttributes;
          if (e) for (let t = e.length - 1; t >= 0; t--) {
            const s = e[t];
            for (let e in s) this._ensureAttribute(e, s[e])
          }
          super._ensureAttributes()
        }

        ready() {
          super.ready();
          let e = n.ready;
          if (e) for (let t = 0; t < e.length; t++) e[t].call(this)
        }

        attached() {
          super.attached();
          let e = n.attached;
          if (e) for (let t = 0; t < e.length; t++) e[t].call(this)
        }

        detached() {
          super.detached();
          let e = n.detached;
          if (e) for (let t = 0; t < e.length; t++) e[t].call(this)
        }

        attributeChanged(e, t, s) {
          super.attributeChanged();
          let r = n.attributeChanged;
          if (r) for (let i = 0; i < r.length; i++) r[i].call(this, e, t, s)
        }
      }

      if (s) {
        Array.isArray(s) || (s = [s]);
        let e = t.prototype.behaviors;
        r = function e(t, s, r) {
          s = s || [];
          for (let i = t.length - 1; i >= 0; i--) {
            let n = t[i];
            n ? Array.isArray(n) ? e(n, s) : s.indexOf(n) < 0 && (!r || r.indexOf(n) < 0) && s.unshift(n) : console.warn("behavior is null, check for missing or 404 import")
          }
          return s
        }(s, null, e), a.prototype.behaviors = e ? e.concat(s) : r
      }
      const d = t => {
        r && function (e, t, s) {
          for (let r = 0; r < t.length; r++) c(e, t[r], s, l)
        }(t, r, n), c(t, e, n, o)
      };
      return i.nL || d(a.prototype), a.generatedFrom = e, a
    }

    const u = function (e, t) {
      e || console.warn("Polymer.Class requires `info` argument");
      let s = t ? t((0, r.x)(HTMLElement)) : (0, r.x)(HTMLElement);
      return s = d(e, s, e.behaviors), s.is = s.prototype.is = e.is, s
    }
  }, 7583: (e, t, s) => {
    "use strict";
    s.d(t, {x: () => ae});
    var r = s(874);

    class i {
      constructor() {
        this.start = 0, this.end = 0, this.previous = null, this.parent = null, this.rules = null, this.parsedCssText = "", this.cssText = "", this.atRule = !1, this.type = 0, this.keyframesName = "", this.selector = "", this.parsedSelector = ""
      }
    }

    function n(e) {
      return function e(t, s) {
        let r = s.substring(t.start, t.end - 1);
        if (t.parsedCssText = t.cssText = r.trim(), t.parent) {
          let e = t.previous ? t.previous.end : t.parent.start;
          r = s.substring(e, t.start - 1), r = function (e) {
            return e.replace(/\\([0-9a-f]{1,6})\s/gi, (function () {
              let e = arguments[1], t = 6 - e.length;
              for (; t--;) e = "0" + e;
              return "\\" + e
            }))
          }(r), r = r.replace(c.multipleSpaces, " "), r = r.substring(r.lastIndexOf(";") + 1);
          let i = t.parsedSelector = t.selector = r.trim();
          t.atRule = 0 === i.indexOf(u), t.atRule ? 0 === i.indexOf(d) ? t.type = o.MEDIA_RULE : i.match(c.keyframesRule) && (t.type = o.KEYFRAMES_RULE, t.keyframesName = t.selector.split(c.multipleSpaces).pop()) : 0 === i.indexOf(h) ? t.type = o.MIXIN_RULE : t.type = o.STYLE_RULE
        }
        let i = t.rules;
        if (i) for (let t, r = 0, n = i.length; r < n && (t = i[r]); r++) e(t, s);
        return t
      }(function (e) {
        let t = new i;
        t.start = 0, t.end = e.length;
        let s = t;
        for (let r = 0, n = e.length; r < n; r++) if (e[r] === l) {
          s.rules || (s.rules = []);
          let e = s, t = e.rules[e.rules.length - 1] || null;
          s = new i, s.start = r + 1, s.parent = e, s.previous = t, e.rules.push(s)
        } else e[r] === a && (s.end = r + 1, s = s.parent || t);
        return t
      }(e = e.replace(c.comments, "").replace(c.port, "")), e)
    }

    const o = {STYLE_RULE: 1, KEYFRAMES_RULE: 7, MEDIA_RULE: 4, MIXIN_RULE: 1e3}, l = "{", a = "}", c = {
      comments: /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
      port: /@import[^;]*;/gim,
      customProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
      mixinProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
      mixinApply: /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
      varApply: /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
      keyframesRule: /^@[^\s]*keyframes/,
      multipleSpaces: /\s+/g
    }, h = "--", d = "@media", u = "@";
    var p = s(7244);
    const _ = new Set;

    function m(e) {
      const t = e.textContent;
      if (!_.has(t)) {
        _.add(t);
        const e = document.createElement("style");
        e.setAttribute("shady-unscoped", ""), e.textContent = t, document.head.appendChild(e)
      }
    }

    function f(e) {
      return e.hasAttribute("shady-unscoped")
    }

    function y(e, t) {
      return e ? ("string" == typeof e && (e = n(e)), t && b(e, t), function e(t, s, r = "") {
        let i = "";
        if (t.cssText || t.rules) {
          let r = t.rules;
          if (r && !function (e) {
            let t = e[0];
            return Boolean(t) && Boolean(t.selector) && 0 === t.selector.indexOf(h)
          }(r)) for (let t, n = 0, o = r.length; n < o && (t = r[n]); n++) i = e(t, s, i); else i = s ? t.cssText : function (e) {
            return function (e) {
              return e.replace(c.mixinApply, "").replace(c.varApply, "")
            }(e = function (e) {
              return e.replace(c.customProp, "").replace(c.mixinProp, "")
            }(e))
          }(t.cssText), i = i.trim(), i && (i = "  " + i + "\n")
        }
        return i && (t.selector && (r += t.selector + " " + l + "\n"), r += i, t.selector && (r += a + "\n\n")), r
      }(e, r.rd)) : ""
    }

    function g(e) {
      return !e.__cssRules && e.textContent && (e.__cssRules = n(e.textContent)), e.__cssRules || null
    }

    function b(e, t, s, r) {
      if (!e) return;
      let i = !1, n = e.type;
      if (r && n === o.MEDIA_RULE) {
        let t = e.selector.match(p.mA);
        t && (window.matchMedia(t[1]).matches || (i = !0))
      }
      n === o.STYLE_RULE ? t(e) : s && n === o.KEYFRAMES_RULE ? s(e) : n === o.MIXIN_RULE && (i = !0);
      let l = e.rules;
      if (l && !i) for (let e, i = 0, n = l.length; i < n && (e = l[i]); i++) b(e, t, s, r)
    }

    window.ShadyDOM && window.ShadyDOM.wrap;
    const C = "css-build";

    function S(e) {
      return "" !== function (e) {
        if (void 0 !== r.Cp) return r.Cp;
        if (void 0 === e.__cssBuild) {
          const t = e.getAttribute(C);
          if (t) e.__cssBuild = t; else {
            const t = function (e) {
              const t = "template" === e.localName ? e.content.firstChild : e.firstChild;
              if (t instanceof Comment) {
                const e = t.textContent.trim().split(":");
                if (e[0] === C) return e[1]
              }
              return ""
            }(e);
            "" !== t && function (e) {
              const t = "template" === e.localName ? e.content.firstChild : e.firstChild;
              t.parentNode.removeChild(t)
            }(e), e.__cssBuild = t
          }
        }
        return e.__cssBuild || ""
      }(e)
    }

    var v = s(8425);
    const E = /;\s*/m, w = /^\s*(initial)|(inherit)\s*$/, x = /\s*!important/;

    class P {
      constructor() {
        this._map = {}
      }

      set(e, t) {
        e = e.trim(), this._map[e] = {properties: t, dependants: {}}
      }

      get(e) {
        return e = e.trim(), this._map[e] || null
      }
    }

    let O = null;

    class A {
      constructor() {
        this._currentElement = null, this._measureElement = null, this._map = new P
      }

      detectMixin(e) {
        return (0, v.OH)(e)
      }

      gatherStyles(e) {
        const t = function (e) {
          const t = [], s = e.querySelectorAll("style");
          for (let e = 0; e < s.length; e++) {
            const i = s[e];
            f(i) ? r.WA || (m(i), i.parentNode.removeChild(i)) : (t.push(i.textContent), i.parentNode.removeChild(i))
          }
          return t.join("").trim()
        }(e.content);
        if (t) {
          const s = document.createElement("style");
          return s.textContent = t, e.content.insertBefore(s, e.content.firstChild), s
        }
        return null
      }

      transformTemplate(e, t) {
        void 0 === e._gatheredStyle && (e._gatheredStyle = this.gatherStyles(e));
        const s = e._gatheredStyle;
        return s ? this.transformStyle(s, t) : null
      }

      transformStyle(e, t = "") {
        let s = g(e);
        return this.transformRules(s, t), e.textContent = y(s), s
      }

      transformCustomStyle(e) {
        let t = g(e);
        return b(t, e => {
          ":root" === e.selector && (e.selector = "html"), this.transformRule(e)
        }), e.textContent = y(t), t
      }

      transformRules(e, t) {
        this._currentElement = t, b(e, e => {
          this.transformRule(e)
        }), this._currentElement = null
      }

      transformRule(e) {
        e.cssText = this.transformCssText(e.parsedCssText, e), ":root" === e.selector && (e.selector = ":host > *")
      }

      transformCssText(e, t) {
        return e = e.replace(p.CN, (e, s, r, i) => this._produceCssProperties(e, s, r, i, t)), this._consumeCssProperties(e, t)
      }

      _getInitialValueForProperty(e) {
        return this._measureElement || (this._measureElement = document.createElement("meta"), this._measureElement.setAttribute("apply-shim-measure", ""), this._measureElement.style.all = "initial", document.head.appendChild(this._measureElement)), window.getComputedStyle(this._measureElement).getPropertyValue(e)
      }

      _fallbacksFromPreviousRules(e) {
        let t = e;
        for (; t.parent;) t = t.parent;
        const s = {};
        let r = !1;
        return b(t, t => {
          r = r || t === e, r || t.selector === e.selector && Object.assign(s, this._cssTextToMap(t.parsedCssText))
        }), s
      }

      _consumeCssProperties(e, t) {
        let s = null;
        for (; s = p.$T.exec(e);) {
          let r = s[0], i = s[1], n = s.index, o = n + r.indexOf("@apply"), l = n + r.length, a = e.slice(0, o),
            c = e.slice(l), h = t ? this._fallbacksFromPreviousRules(t) : {};
          Object.assign(h, this._cssTextToMap(a));
          let d = this._atApplyToCssProperties(i, h);
          e = `${a}${d}${c}`, p.$T.lastIndex = n + d.length
        }
        return e
      }

      _atApplyToCssProperties(e, t) {
        e = e.replace(E, "");
        let s = [], r = this._map.get(e);
        if (r || (this._map.set(e, {}), r = this._map.get(e)), r) {
          let i, n, o;
          this._currentElement && (r.dependants[this._currentElement] = !0);
          const l = r.properties;
          for (i in l) o = t && t[i], n = [i, ": var(", e, "_-_", i], o && n.push(",", o.replace(x, "")), n.push(")"), x.test(l[i]) && n.push(" !important"), s.push(n.join(""))
        }
        return s.join("; ")
      }

      _replaceInitialOrInherit(e, t) {
        let s = w.exec(t);
        return s && (t = s[1] ? this._getInitialValueForProperty(e) : "apply-shim-inherit"), t
      }

      _cssTextToMap(e, t = !1) {
        let s, r, i = e.split(";"), n = {};
        for (let e, o, l = 0; l < i.length; l++) e = i[l], e && (o = e.split(":"), o.length > 1 && (s = o[0].trim(), r = o.slice(1).join(":"), t && (r = this._replaceInitialOrInherit(s, r)), n[s] = r));
        return n
      }

      _invalidateMixinEntry(e) {
        if (O) for (let t in e.dependants) t !== this._currentElement && O(t)
      }

      _produceCssProperties(e, t, s, r, i) {
        if (s && function e(t, s) {
          let r = t.indexOf("var(");
          if (-1 === r) return s(t, "", "", "");
          let i = function (e, t) {
              let s = 0;
              for (let r = t, i = e.length; r < i; r++) if ("(" === e[r]) s++; else if (")" === e[r] && 0 == --s) return r;
              return -1
            }(t, r + 3), n = t.substring(r + 4, i), o = t.substring(0, r), l = e(t.substring(i + 1), s),
            a = n.indexOf(",");
          return -1 === a ? s(o, n.trim(), "", l) : s(o, n.substring(0, a).trim(), n.substring(a + 1).trim(), l)
        }(s, (e, t) => {
          t && this._map.get(t) && (r = `@apply ${t};`)
        }), !r) return e;
        let n = this._consumeCssProperties("" + r, i), o = e.slice(0, e.indexOf("--")), l = this._cssTextToMap(n, !0),
          a = l, c = this._map.get(t), h = c && c.properties;
        h ? a = Object.assign(Object.create(h), l) : this._map.set(t, a);
        let d, u, p = [], _ = !1;
        for (d in a) u = l[d], void 0 === u && (u = "initial"), h && !(d in h) && (_ = !0), p.push(`${t}_-_${d}: ${u}`);
        return _ && this._invalidateMixinEntry(c), c && (c.properties = a), s && (o = `${e};${o}`), `${o}${p.join("; ")};`
      }
    }

    A.prototype.detectMixin = A.prototype.detectMixin, A.prototype.transformStyle = A.prototype.transformStyle, A.prototype.transformCustomStyle = A.prototype.transformCustomStyle, A.prototype.transformRules = A.prototype.transformRules, A.prototype.transformRule = A.prototype.transformRule, A.prototype.transformTemplate = A.prototype.transformTemplate, A.prototype._separator = "_-_", Object.defineProperty(A.prototype, "invalidCallback", {
      get: () => O,
      set(e) {
        O = e
      }
    });
    const T = A, M = {}, N = "_applyShimCurrentVersion", I = "_applyShimNextVersion", D = "_applyShimValidatingVersion",
      R = Promise.resolve();

    function L(e) {
      let t = M[e];
      t && function (e) {
        e[N] = e[N] || 0, e[D] = e[D] || 0, e[I] = (e[I] || 0) + 1
      }(t)
    }

    function k(e) {
      return e[N] === e[I]
    }

    s(3720);
    const $ = new T;

    class j {
      constructor() {
        this.customStyleInterface = null, $.invalidCallback = L
      }

      ensure() {
        this.customStyleInterface || window.ShadyCSS.CustomStyleInterface && (this.customStyleInterface = window.ShadyCSS.CustomStyleInterface, this.customStyleInterface.transformCallback = e => {
          $.transformCustomStyle(e)
        }, this.customStyleInterface.validateCallback = () => {
          requestAnimationFrame(() => {
            this.customStyleInterface.enqueued && this.flushCustomStyles()
          })
        })
      }

      prepareTemplate(e, t) {
        if (this.ensure(), S(e)) return;
        M[t] = e;
        let s = $.transformTemplate(e, t);
        e._styleAst = s
      }

      flushCustomStyles() {
        if (this.ensure(), !this.customStyleInterface) return;
        let e = this.customStyleInterface.processStyles();
        if (this.customStyleInterface.enqueued) {
          for (let t = 0; t < e.length; t++) {
            let s = e[t], r = this.customStyleInterface.getStyleForCustomStyle(s);
            r && $.transformCustomStyle(r)
          }
          this.customStyleInterface.enqueued = !1
        }
      }

      styleSubtree(e, t) {
        if (this.ensure(), t && (0, v.wW)(e, t), e.shadowRoot) {
          this.styleElement(e);
          let t = e.shadowRoot.children || e.shadowRoot.childNodes;
          for (let e = 0; e < t.length; e++) this.styleSubtree(t[e])
        } else {
          let t = e.children || e.childNodes;
          for (let e = 0; e < t.length; e++) this.styleSubtree(t[e])
        }
      }

      styleElement(e) {
        this.ensure();
        let {is: t} = function (e) {
          let t = e.localName, s = "", r = "";
          return t ? t.indexOf("-") > -1 ? s = t : (r = t, s = e.getAttribute && e.getAttribute("is") || "") : (s = e.is, r = e.extends), {
            is: s,
            typeExtension: r
          }
        }(e), s = M[t];
        if ((!s || !S(s)) && s && !k(s)) {
          (function (e) {
            return !k(e) && e[D] === e[I]
          })(s) || (this.prepareTemplate(s, t), function (e) {
            e[D] = e[I], e._validating || (e._validating = !0, R.then((function () {
              e[N] = e[I], e._validating = !1
            })))
          }(s));
          let r = e.shadowRoot;
          if (r) {
            let e = r.querySelector("style");
            e && (e.__cssRules = s._styleAst, e.textContent = y(s._styleAst))
          }
        }
      }

      styleDocument(e) {
        this.ensure(), this.styleSubtree(document.body, e)
      }
    }

    if (!window.ShadyCSS || !window.ShadyCSS.ScopingShim) {
      const e = new j;
      let t = window.ShadyCSS && window.ShadyCSS.CustomStyleInterface;
      window.ShadyCSS = {
        prepareTemplate(t, s, r) {
          e.flushCustomStyles(), e.prepareTemplate(t, s)
        }, prepareTemplateStyles(e, t, s) {
          window.ShadyCSS.prepareTemplate(e, t, s)
        }, prepareTemplateDom(e, t) {
        }, styleSubtree(t, s) {
          e.flushCustomStyles(), e.styleSubtree(t, s)
        }, styleElement(t) {
          e.flushCustomStyles(), e.styleElement(t)
        }, styleDocument(t) {
          e.flushCustomStyles(), e.styleDocument(t)
        }, getComputedStyleValue: (e, t) => (0, v.B7)(e, t), flushCustomStyles() {
          e.flushCustomStyles()
        }, nativeCss: r.rd, nativeShadow: r.WA, cssBuild: r.Cp, disableRuntime: r.jF
      }, t && (window.ShadyCSS.CustomStyleInterface = t)
    }
    window.ShadyCSS.ApplyShim = $;
    var q = s(2311), F = s(5095), B = s(9942), H = s(6691);
    const z = /:host\(:dir\((ltr|rtl)\)\)/g, U = /([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g, J = /:dir\((?:ltr|rtl)\)/,
      V = Boolean(window.ShadyDOM && window.ShadyDOM.inUse), Y = [];
    let W = null, K = "";

    function X() {
      K = document.documentElement.getAttribute("dir")
    }

    function G(e) {
      e.__autoDirOptOut || e.setAttribute("dir", K)
    }

    function Q() {
      X(), K = document.documentElement.getAttribute("dir");
      for (let e = 0; e < Y.length; e++) G(Y[e])
    }

    const Z = (0, F.o)(e => {
      V || W || (X(), W = new MutationObserver(Q), W.observe(document.documentElement, {
        attributes: !0,
        attributeFilter: ["dir"]
      }));
      const t = (0, q.Q)(e);

      class s extends t {
        static _processStyleText(e, t) {
          return e = super._processStyleText(e, t), !V && J.test(e) && (e = this._replaceDirInCssText(e), this.__activateDir = !0), e
        }

        static _replaceDirInCssText(e) {
          let t = e;
          return t = t.replace(z, ':host([dir="$1"])'), t = t.replace(U, ':host([dir="$2"]) $1'), t
        }

        constructor() {
          super(), this.__autoDirOptOut = !1
        }

        ready() {
          super.ready(), this.__autoDirOptOut = this.hasAttribute("dir")
        }

        connectedCallback() {
          t.prototype.connectedCallback && super.connectedCallback(), this.constructor.__activateDir && (W && W.takeRecords().length && Q(), Y.push(this), G(this))
        }

        disconnectedCallback() {
          if (t.prototype.disconnectedCallback && super.disconnectedCallback(), this.constructor.__activateDir) {
            const e = Y.indexOf(this);
            e > -1 && Y.splice(e, 1)
          }
        }
      }

      return s.__activateDir = !1, s
    });

    function ee() {
      document.body.removeAttribute("unresolved")
    }

    s(4633), "interactive" === document.readyState || "complete" === document.readyState ? ee() : window.addEventListener("DOMContentLoaded", ee);
    var te = s(9583), se = s(6811), re = s(8995), ie = s(8042), ne = s(8444), oe = s(8991);
    let le = window.ShadyCSS;
    const ae = (0, F.o)(e => {
      const t = Z((0, H._)((0, B.SH)(e))), s = {x: "pan-x", y: "pan-y", none: "none", all: "auto"};

      class r extends t {
        constructor() {
          super(), this.isAttached, this.__boundListeners, this._debouncers
        }

        static get importMeta() {
          return this.prototype.importMeta
        }

        created() {
        }

        connectedCallback() {
          super.connectedCallback(), this.isAttached = !0, this.attached()
        }

        attached() {
        }

        disconnectedCallback() {
          super.disconnectedCallback(), this.isAttached = !1, this.detached()
        }

        detached() {
        }

        attributeChangedCallback(e, t, s, r) {
          t !== s && (super.attributeChangedCallback(e, t, s, r), this.attributeChanged(e, t, s))
        }

        attributeChanged(e, t, s) {
        }

        _initializeProperties() {
          let e = Object.getPrototypeOf(this);
          e.hasOwnProperty("__hasRegisterFinished") || (this._registered(), e.__hasRegisterFinished = !0), super._initializeProperties(), this.root = this, this.created(), this._applyListeners()
        }

        _registered() {
        }

        ready() {
          this._ensureAttributes(), super.ready()
        }

        _ensureAttributes() {
        }

        _applyListeners() {
        }

        serialize(e) {
          return this._serializeValue(e)
        }

        deserialize(e, t) {
          return this._deserializeValue(e, t)
        }

        reflectPropertyToAttribute(e, t, s) {
          this._propertyToAttribute(e, t, s)
        }

        serializeValueToAttribute(e, t, s) {
          this._valueToNodeAttribute(s || this, e, t)
        }

        extend(e, t) {
          if (!e || !t) return e || t;
          let s = Object.getOwnPropertyNames(t);
          for (let r, i = 0; i < s.length && (r = s[i]); i++) {
            let s = Object.getOwnPropertyDescriptor(t, r);
            s && Object.defineProperty(e, r, s)
          }
          return e
        }

        mixin(e, t) {
          for (let s in t) e[s] = t[s];
          return e
        }

        chainObject(e, t) {
          return e && t && e !== t && (e.__proto__ = t), e
        }

        instanceTemplate(e) {
          let t = this.constructor._contentForTemplate(e);
          return document.importNode(t, !0)
        }

        fire(e, t, s) {
          s = s || {}, t = null == t ? {} : t;
          let r = new Event(e, {
            bubbles: void 0 === s.bubbles || s.bubbles,
            cancelable: Boolean(s.cancelable),
            composed: void 0 === s.composed || s.composed
          });
          r.detail = t;
          let i = s.node || this;
          return (0, oe.r)(i).dispatchEvent(r), r
        }

        listen(e, t, s) {
          e = e || this;
          let r = this.__boundListeners || (this.__boundListeners = new WeakMap), i = r.get(e);
          i || (i = {}, r.set(e, i));
          let n = t + s;
          i[n] || (i[n] = this._addMethodEventListenerToNode(e, t, s, this))
        }

        unlisten(e, t, s) {
          e = e || this;
          let r = this.__boundListeners && this.__boundListeners.get(e), i = t + s, n = r && r[i];
          n && (this._removeEventListenerFromNode(e, t, n), r[i] = null)
        }

        setScrollDirection(e, t) {
          (0, se.BP)(t || this, s[e] || "auto")
        }

        $$(e) {
          return this.root.querySelector(e)
        }

        get domHost() {
          let e = (0, oe.r)(this).getRootNode();
          return e instanceof DocumentFragment ? e.host : e
        }

        distributeContent() {
          const e = (0, te.vz)(this);
          window.ShadyDOM && e.shadowRoot && ShadyDOM.flush()
        }

        getEffectiveChildNodes() {
          return (0, te.vz)(this).getEffectiveChildNodes()
        }

        queryDistributedElements(e) {
          return (0, te.vz)(this).queryDistributedElements(e)
        }

        getEffectiveChildren() {
          return this.getEffectiveChildNodes().filter((function (e) {
            return e.nodeType === Node.ELEMENT_NODE
          }))
        }

        getEffectiveTextContent() {
          let e = this.getEffectiveChildNodes(), t = [];
          for (let s, r = 0; s = e[r]; r++) s.nodeType !== Node.COMMENT_NODE && t.push(s.textContent);
          return t.join("")
        }

        queryEffectiveChildren(e) {
          let t = this.queryDistributedElements(e);
          return t && t[0]
        }

        queryAllEffectiveChildren(e) {
          return this.queryDistributedElements(e)
        }

        getContentChildNodes(e) {
          let t = this.root.querySelector(e || "slot");
          return t ? (0, te.vz)(t).getDistributedNodes() : []
        }

        getContentChildren(e) {
          return this.getContentChildNodes(e).filter((function (e) {
            return e.nodeType === Node.ELEMENT_NODE
          }))
        }

        isLightDescendant(e) {
          const t = this;
          return t !== e && (0, oe.r)(t).contains(e) && (0, oe.r)(t).getRootNode() === (0, oe.r)(e).getRootNode()
        }

        isLocalDescendant(e) {
          return this.root === (0, oe.r)(e).getRootNode()
        }

        scopeSubtree(e, t) {
        }

        getComputedStyleValue(e) {
          return le.getComputedStyleValue(this, e)
        }

        debounce(e, t, s) {
          return this._debouncers = this._debouncers || {}, this._debouncers[e] = re.dx.debounce(this._debouncers[e], s > 0 ? ie.Wc.after(s) : ie.YA, t.bind(this))
        }

        isDebouncerActive(e) {
          this._debouncers = this._debouncers || {};
          let t = this._debouncers[e];
          return !(!t || !t.isActive())
        }

        flushDebouncer(e) {
          this._debouncers = this._debouncers || {};
          let t = this._debouncers[e];
          t && t.flush()
        }

        cancelDebouncer(e) {
          this._debouncers = this._debouncers || {};
          let t = this._debouncers[e];
          t && t.cancel()
        }

        async(e, t) {
          return t > 0 ? ie.Wc.run(e.bind(this), t) : ~ie.YA.run(e.bind(this))
        }

        cancelAsync(e) {
          e < 0 ? ie.YA.cancel(~e) : ie.Wc.cancel(e)
        }

        create(e, t) {
          let s = document.createElement(e);
          if (t) if (s.setProperties) s.setProperties(t); else for (let e in t) s[e] = t[e];
          return s
        }

        elementMatches(e, t) {
          return (0, te.Ku)(t || this, e)
        }

        toggleAttribute(e, t) {
          let s = this;
          return 3 === arguments.length && (s = arguments[2]), 1 == arguments.length && (t = !s.hasAttribute(e)), t ? ((0, oe.r)(s).setAttribute(e, ""), !0) : ((0, oe.r)(s).removeAttribute(e), !1)
        }

        toggleClass(e, t, s) {
          s = s || this, 1 == arguments.length && (t = !s.classList.contains(e)), t ? s.classList.add(e) : s.classList.remove(e)
        }

        transform(e, t) {
          (t = t || this).style.webkitTransform = e, t.style.transform = e
        }

        translate3d(e, t, s, r) {
          r = r || this, this.transform("translate3d(" + e + "," + t + "," + s + ")", r)
        }

        arrayDelete(e, t) {
          let s;
          if (Array.isArray(e)) {
            if (s = e.indexOf(t), s >= 0) return e.splice(s, 1)
          } else if (s = (0, ne.U2)(this, e).indexOf(t), s >= 0) return this.splice(e, s, 1);
          return null
        }

        _logger(e, t) {
          switch (Array.isArray(t) && 1 === t.length && Array.isArray(t[0]) && (t = t[0]), e) {
            case"log":
            case"warn":
            case"error":
              console[e](...t)
          }
        }

        _log(...e) {
          this._logger("log", e)
        }

        _warn(...e) {
          this._logger("warn", e)
        }

        _error(...e) {
          this._logger("error", e)
        }

        _logf(e, ...t) {
          return ["[%s::%s]", this.is, e, ...t]
        }
      }

      return r.prototype.is = "", r
    })
  }, 4479: (e, t, s) => {
    "use strict";
    s.d(t, {x: () => n});
    var r = s(7618);
    let i;
    i = r.E._mutablePropertyChange;
    const n = {
      properties: {mutableData: Boolean}, _shouldPropertyChange(e, t, s) {
        return i(this, e, t, s, this.mutableData)
      }
    }
  }, 8819: (e, t, s) => {
    "use strict";
    s.d(t, {k: () => i});
    var r = s(530);
    s(1269);
    const i = function (e) {
      let t;
      return t = "function" == typeof e ? e : i.Class(e), customElements.define(t.is, t), t
    };
    i.Class = r.w
  }, 9583: (e, t, s) => {
    "use strict";
    s.d(t, {Ku: () => l, vz: () => u}), s(1269);
    var r = s(8991), i = (s(8258), s(60));
    s(1492), s(8995);
    const n = Element.prototype,
      o = n.matches || n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector,
      l = function (e, t) {
        return o.call(e, t)
      };

    class a {
      constructor(e) {
        this.node = e
      }

      observeNodes(e) {
        return new i.o(this.node, e)
      }

      unobserveNodes(e) {
        e.disconnect()
      }

      notifyObserver() {
      }

      deepContains(e) {
        if ((0, r.r)(this.node).contains(e)) return !0;
        let t = e, s = e.ownerDocument;
        for (; t && t !== s && t !== this.node;) t = (0, r.r)(t).parentNode || (0, r.r)(t).host;
        return t === this.node
      }

      getOwnerRoot() {
        return (0, r.r)(this.node).getRootNode()
      }

      getDistributedNodes() {
        return "slot" === this.node.localName ? (0, r.r)(this.node).assignedNodes({flatten: !0}) : []
      }

      getDestinationInsertionPoints() {
        let e = [], t = (0, r.r)(this.node).assignedSlot;
        for (; t;) e.push(t), t = (0, r.r)(t).assignedSlot;
        return e
      }

      importNode(e, t) {
        let s = this.node instanceof Document ? this.node : this.node.ownerDocument;
        return (0, r.r)(s).importNode(e, t)
      }

      getEffectiveChildNodes() {
        return i.o.getFlattenedNodes(this.node)
      }

      queryDistributedElements(e) {
        let t = this.getEffectiveChildNodes(), s = [];
        for (let r, i = 0, n = t.length; i < n && (r = t[i]); i++) r.nodeType === Node.ELEMENT_NODE && l(r, e) && s.push(r);
        return s
      }

      get activeElement() {
        let e = this.node;
        return void 0 !== e._activeElement ? e._activeElement : e.activeElement
      }
    }

    function c(e, t) {
      for (let s = 0; s < t.length; s++) {
        let r = t[s];
        Object.defineProperty(e, r, {
          get: function () {
            return this.node[r]
          }, configurable: !0
        })
      }
    }

    class h {
      constructor(e) {
        this.event = e
      }

      get rootTarget() {
        return this.path[0]
      }

      get localTarget() {
        return this.event.target
      }

      get path() {
        return this.event.composedPath()
      }
    }

    a.prototype.cloneNode, a.prototype.appendChild, a.prototype.insertBefore, a.prototype.removeChild, a.prototype.replaceChild, a.prototype.setAttribute, a.prototype.removeAttribute, a.prototype.querySelector, a.prototype.querySelectorAll, a.prototype.parentNode, a.prototype.firstChild, a.prototype.lastChild, a.prototype.nextSibling, a.prototype.previousSibling, a.prototype.firstElementChild, a.prototype.lastElementChild, a.prototype.nextElementSibling, a.prototype.previousElementSibling, a.prototype.childNodes, a.prototype.children, a.prototype.classList, a.prototype.textContent, a.prototype.innerHTML;
    let d = a;
    if (window.ShadyDOM && window.ShadyDOM.inUse && window.ShadyDOM.noPatch && window.ShadyDOM.Wrapper) {
      class e extends window.ShadyDOM.Wrapper {
      }

      Object.getOwnPropertyNames(a.prototype).forEach(t => {
        "activeElement" != t && (e.prototype[t] = a.prototype[t])
      }), c(e.prototype, ["classList"]), d = e, Object.defineProperties(h.prototype, {
        localTarget: {
          get() {
            return this.event.currentTarget
          }, configurable: !0
        }, path: {
          get() {
            return window.ShadyDOM.composedPath(this.event)
          }, configurable: !0
        }
      })
    } else !function (e, t) {
      for (let s = 0; s < t.length; s++) {
        let r = t[s];
        e[r] = function () {
          return this.node[r].apply(this.node, arguments)
        }
      }
    }(a.prototype, ["cloneNode", "appendChild", "insertBefore", "removeChild", "replaceChild", "setAttribute", "removeAttribute", "querySelector", "querySelectorAll"]), c(a.prototype, ["parentNode", "firstChild", "lastChild", "nextSibling", "previousSibling", "firstElementChild", "lastElementChild", "nextElementSibling", "previousElementSibling", "childNodes", "children", "classList"]), function (e, t) {
      for (let s = 0; s < t.length; s++) {
        let r = t[s];
        Object.defineProperty(e, r, {
          get: function () {
            return this.node[r]
          }, set: function (e) {
            this.node[r] = e
          }, configurable: !0
        })
      }
    }(a.prototype, ["textContent", "innerHTML"]);
    const u = function (e) {
      if ((e = e || document) instanceof d) return e;
      if (e instanceof h) return e;
      let t = e.__domApi;
      return t || (t = e instanceof Event ? new h(e) : new d(e), e.__domApi = t), t
    }
  }, 5941: (e, t, s) => {
    "use strict";
    s.d(t, {F: () => i});
    var r = s(8201);
    const i = {
      templatize(e, t) {
        this._templatizerTemplate = e, this.ctor = (0, r.Uv)(e, this, {
          mutableData: Boolean(t),
          parentModel: this._parentModel,
          instanceProps: this._instanceProps,
          forwardHostProp: this._forwardHostPropV2,
          notifyInstanceProp: this._notifyInstancePropV2
        })
      }, stamp(e) {
        return new this.ctor(e)
      }, modelForElement(e) {
        return (0, r.GJ)(this._templatizerTemplate, e)
      }
    }
  }, 8046: (e, t, s) => {
    "use strict";
    s.d(t, {XY: () => v}), s(1269);
    var r = s(2450), i = s(7583), n = s(2498), o = s(8201), l = s(5095), a = (s(8819), s(7618)), c = s(8995),
      h = s(1761), d = (s(5941), s(6691)), u = s(8258), p = s(8991);
    const _ = (0, d._)((0, a.w)((0, n.q)(HTMLElement)));
    try {
      customElements.define("dom-bind", class extends _ {
        static get observedAttributes() {
          return ["mutable-data"]
        }

        constructor() {
          if (super(), u.XN) throw new Error("strictTemplatePolicy: dom-bind not allowed");
          this.root = null, this.$ = null, this.__children = null
        }

        attributeChangedCallback() {
          this.mutableData = !0
        }

        connectedCallback() {
          this.style.display = "none", this.render()
        }

        disconnectedCallback() {
          this.__removeChildren()
        }

        __insertChildren() {
          (0, p.r)((0, p.r)(this).parentNode).insertBefore(this.root, this)
        }

        __removeChildren() {
          if (this.__children) for (let e = 0; e < this.__children.length; e++) this.root.appendChild(this.__children[e])
        }

        render() {
          let e;
          if (!this.__children) {
            if (e = e || this.querySelector("template"), !e) {
              let t = new MutationObserver(() => {
                if (e = this.querySelector("template"), !e) throw new Error("dom-bind requires a <template> child");
                t.disconnect(), this.render()
              });
              return void t.observe(this, {childList: !0})
            }
            this.root = this._stampTemplate(e), this.$ = this.root.$, this.__children = [];
            for (let e = this.root.firstChild; e; e = e.nextSibling) this.__children[this.__children.length] = e;
            this._enableProperties()
          }
          this.__insertChildren(), this.dispatchEvent(new CustomEvent("dom-change", {bubbles: !0, composed: !0}))
        }
      });
    }catch(e){}
    var m = s(1492), f = s(9942), y = s(8042), g = (s(5777), s(8444));

    class b extends r.H3 {
      static get is() {
        return "dom-if"
      }

      static get template() {
        return null
      }

      static get properties() {
        return {
          if: {type: Boolean, observer: "__debounceRender"},
          restamp: {type: Boolean, observer: "__debounceRender"}
        }
      }

      constructor() {
        super(), this.__renderDebouncer = null, this.__invalidProps = null, this.__instance = null, this._lastIf = !1, this.__ctor = null, this.__hideTemplateChildren__ = !1
      }

      __debounceRender() {
        this.__renderDebouncer = c.dx.debounce(this.__renderDebouncer, y.YA, () => this.__render()), (0, m.E)(this.__renderDebouncer)
      }

      disconnectedCallback() {
        super.disconnectedCallback();
        const e = (0, p.r)(this).parentNode;
        e && (e.nodeType != Node.DOCUMENT_FRAGMENT_NODE || (0, p.r)(e).host) || this.__teardownInstance()
      }

      connectedCallback() {
        super.connectedCallback(), this.style.display = "none", this.if && this.__debounceRender()
      }

      render() {
        (0, m.y)()
      }

      __render() {
        if (this.if) {
          if (!this.__ensureInstance()) return;
          this._showHideChildren()
        } else this.restamp && this.__teardownInstance();
        !this.restamp && this.__instance && this._showHideChildren(), this.if != this._lastIf && (this.dispatchEvent(new CustomEvent("dom-change", {
          bubbles: !0,
          composed: !0
        })), this._lastIf = this.if)
      }

      __ensureInstance() {
        let e = (0, p.r)(this).parentNode;
        if (e) {
          if (!this.__ctor) {
            let e = (0, p.r)(this).querySelector("template");
            if (!e) {
              let e = new MutationObserver(() => {
                if (!(0, p.r)(this).querySelector("template")) throw new Error("dom-if requires a <template> child");
                e.disconnect(), this.__render()
              });
              return e.observe(this, {childList: !0}), !1
            }
            this.__ctor = (0, o.Uv)(e, this, {
              mutableData: !0, forwardHostProp: function (e, t) {
                this.__instance && (this.if ? this.__instance.forwardHostProp(e, t) : (this.__invalidProps = this.__invalidProps || Object.create(null), this.__invalidProps[(0, g.Jz)(e)] = !0))
              }
            })
          }
          if (this.__instance) {
            this.__syncHostProperties();
            let t = this.__instance.children;
            if (t && t.length && (0, p.r)(this).previousSibling !== t[t.length - 1]) for (let s, r = 0; r < t.length && (s = t[r]); r++) (0, p.r)(e).insertBefore(s, this)
          } else this.__instance = new this.__ctor, (0, p.r)(e).insertBefore(this.__instance.root, this)
        }
        return !0
      }

      __syncHostProperties() {
        let e = this.__invalidProps;
        if (e) {
          for (let t in e) this.__instance._setPendingProperty(t, this.__dataHost[t]);
          this.__invalidProps = null, this.__instance._flushProperties()
        }
      }

      __teardownInstance() {
        if (this.__instance) {
          let e = this.__instance.children;
          if (e && e.length) {
            let t = (0, p.r)(e[0]).parentNode;
            if (t) {
              t = (0, p.r)(t);
              for (let s, r = 0; r < e.length && (s = e[r]); r++) t.removeChild(s)
            }
          }
          this.__instance = null, this.__invalidProps = null
        }
      }

      _showHideChildren() {
        let e = this.__hideTemplateChildren__ || !this.if;
        this.__instance && this.__instance._showHideChildren(e)
      }
    }
try {
  customElements.define(b.is, b);
}catch(e){}
    let C = (0, l.o)(e => {
      let t = (0, f.SH)(e);
      return class extends t {
        static get properties() {
          return {
            items: {type: Array},
            multi: {type: Boolean, value: !1},
            selected: {type: Object, notify: !0},
            selectedItem: {type: Object, notify: !0},
            toggle: {type: Boolean, value: !1}
          }
        }

        static get observers() {
          return ["__updateSelection(multi, items.*)"]
        }

        constructor() {
          super(), this.__lastItems = null, this.__lastMulti = null, this.__selectedMap = null
        }

        __updateSelection(e, t) {
          let s = t.path;
          if (s == JSCompiler_renameProperty("items", this)) {
            let s = t.base || [], r = this.__lastItems;
            if (e !== this.__lastMulti && this.clearSelection(), r) {
              let e = (0, h.c)(s, r);
              this.__applySplices(e)
            }
            this.__lastItems = s, this.__lastMulti = e
          } else if (t.path == JSCompiler_renameProperty("items", this) + ".splices") this.__applySplices(t.value.indexSplices); else {
            let e = s.slice((JSCompiler_renameProperty("items", this) + ".").length), t = parseInt(e, 10);
            e.indexOf(".") < 0 && e == t && this.__deselectChangedIdx(t)
          }
        }

        __applySplices(e) {
          let t = this.__selectedMap;
          for (let s = 0; s < e.length; s++) {
            let r = e[s];
            t.forEach((e, s) => {
              e < r.index || (e >= r.index + r.removed.length ? t.set(s, e + r.addedCount - r.removed.length) : t.set(s, -1))
            });
            for (let e = 0; e < r.addedCount; e++) {
              let s = r.index + e;
              t.has(this.items[s]) && t.set(this.items[s], s)
            }
          }
          this.__updateLinks();
          let s = 0;
          t.forEach((e, r) => {
            e < 0 ? (this.multi ? this.splice(JSCompiler_renameProperty("selected", this), s, 1) : this.selected = this.selectedItem = null, t.delete(r)) : s++
          })
        }

        __updateLinks() {
          if (this.__dataLinkedPaths = {}, this.multi) {
            let e = 0;
            this.__selectedMap.forEach(t => {
              t >= 0 && this.linkPaths(`${JSCompiler_renameProperty("items", this)}.${t}`, `${JSCompiler_renameProperty("selected", this)}.${e++}`)
            })
          } else this.__selectedMap.forEach(e => {
            this.linkPaths(JSCompiler_renameProperty("selected", this), `${JSCompiler_renameProperty("items", this)}.${e}`), this.linkPaths(JSCompiler_renameProperty("selectedItem", this), `${JSCompiler_renameProperty("items", this)}.${e}`)
          })
        }

        clearSelection() {
          this.__dataLinkedPaths = {}, this.__selectedMap = new Map, this.selected = this.multi ? [] : null, this.selectedItem = null
        }

        isSelected(e) {
          return this.__selectedMap.has(e)
        }

        isIndexSelected(e) {
          return this.isSelected(this.items[e])
        }

        __deselectChangedIdx(e) {
          let t = this.__selectedIndexForItemIndex(e);
          if (t >= 0) {
            let e = 0;
            this.__selectedMap.forEach((s, r) => {
              t == e++ && this.deselect(r)
            })
          }
        }

        __selectedIndexForItemIndex(e) {
          let t = this.__dataLinkedPaths[`${JSCompiler_renameProperty("items", this)}.${e}`];
          if (t) return parseInt(t.slice((JSCompiler_renameProperty("selected", this) + ".").length), 10)
        }

        deselect(e) {
          let t = this.__selectedMap.get(e);
          if (t >= 0) {
            let s;
            this.__selectedMap.delete(e), this.multi && (s = this.__selectedIndexForItemIndex(t)), this.__updateLinks(), this.multi ? this.splice(JSCompiler_renameProperty("selected", this), s, 1) : this.selected = this.selectedItem = null
          }
        }

        deselectIndex(e) {
          this.deselect(this.items[e])
        }

        select(e) {
          this.selectIndex(this.items.indexOf(e))
        }

        selectIndex(e) {
          let t = this.items[e];
          this.isSelected(t) ? this.toggle && this.deselectIndex(e) : (this.multi || this.__selectedMap.clear(), this.__selectedMap.set(t, e), this.__updateLinks(), this.multi ? this.push(JSCompiler_renameProperty("selected", this), t) : this.selected = this.selectedItem = t)
        }
      }
    })(r.H3);

    class S extends C {
      static get is() {
        return "array-selector"
      }

      static get template() {
        return null
      }
    }
try {
  customElements.define(S.is, S), s(2072), s(4479), s(4451);
}catch(e){}
    const v = (0, i.x)(HTMLElement).prototype
  }
}]);