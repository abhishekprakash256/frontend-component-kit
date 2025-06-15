import * as B from "react";
import Ie, { useRef as Ae, useState as Qe, useCallback as Ee, useContext as Ce, useMemo as qe, useEffect as _e, useLayoutEffect as Cl, useReducer as dc, createContext as pc, cloneElement as Fi, forwardRef as hc, useImperativeHandle as mc } from "react";
import Bt from "react-dom";
function vn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Nn = { exports: {} }, tn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Na;
function gc() {
  if (Na) return tn;
  Na = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, i, a) {
    var o = null;
    if (a !== void 0 && (o = "" + a), i.key !== void 0 && (o = "" + i.key), "key" in i) {
      a = {};
      for (var l in i)
        l !== "key" && (a[l] = i[l]);
    } else a = i;
    return i = a.ref, {
      $$typeof: e,
      type: r,
      key: o,
      ref: i !== void 0 ? i : null,
      props: a
    };
  }
  return tn.Fragment = t, tn.jsx = n, tn.jsxs = n, tn;
}
var nn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ia;
function yc() {
  return Ia || (Ia = 1, process.env.NODE_ENV !== "production" && function() {
    function e(x) {
      if (x == null) return null;
      if (typeof x == "function")
        return x.$$typeof === fe ? null : x.displayName || x.name || null;
      if (typeof x == "string") return x;
      switch (x) {
        case w:
          return "Fragment";
        case S:
          return "Portal";
        case Q:
          return "Profiler";
        case M:
          return "StrictMode";
        case $:
          return "Suspense";
        case z:
          return "SuspenseList";
      }
      if (typeof x == "object")
        switch (typeof x.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), x.$$typeof) {
          case C:
            return (x.displayName || "Context") + ".Provider";
          case ne:
            return (x._context.displayName || "Context") + ".Consumer";
          case D:
            var U = x.render;
            return x = x.displayName, x || (x = U.displayName || U.name || "", x = x !== "" ? "ForwardRef(" + x + ")" : "ForwardRef"), x;
          case F:
            return U = x.displayName || null, U !== null ? U : e(x.type) || "Memo";
          case q:
            U = x._payload, x = x._init;
            try {
              return e(x(U));
            } catch {
            }
        }
      return null;
    }
    function t(x) {
      return "" + x;
    }
    function n(x) {
      try {
        t(x);
        var U = !1;
      } catch {
        U = !0;
      }
      if (U) {
        U = console;
        var H = U.error, pe = typeof Symbol == "function" && Symbol.toStringTag && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return H.call(
          U,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          pe
        ), t(x);
      }
    }
    function r() {
    }
    function i() {
      if (L === 0) {
        X = console.log, V = console.info, J = console.warn, ee = console.error, re = console.group, te = console.groupCollapsed, we = console.groupEnd;
        var x = {
          configurable: !0,
          enumerable: !0,
          value: r,
          writable: !0
        };
        Object.defineProperties(console, {
          info: x,
          log: x,
          warn: x,
          error: x,
          group: x,
          groupCollapsed: x,
          groupEnd: x
        });
      }
      L++;
    }
    function a() {
      if (L--, L === 0) {
        var x = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: R({}, x, { value: X }),
          info: R({}, x, { value: V }),
          warn: R({}, x, { value: J }),
          error: R({}, x, { value: ee }),
          group: R({}, x, { value: re }),
          groupCollapsed: R({}, x, { value: te }),
          groupEnd: R({}, x, { value: we })
        });
      }
      0 > L && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function o(x) {
      if (_ === void 0)
        try {
          throw Error();
        } catch (H) {
          var U = H.stack.trim().match(/\n( *(at )?)/);
          _ = U && U[1] || "", Oe = -1 < H.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < H.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + _ + x + Oe;
    }
    function l(x, U) {
      if (!x || De) return "";
      var H = he.get(x);
      if (H !== void 0) return H;
      De = !0, H = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var pe = null;
      pe = ve.H, ve.H = null, i();
      try {
        var Pe = {
          DetermineComponentFrameRoot: function() {
            try {
              if (U) {
                var Re = function() {
                  throw Error();
                };
                if (Object.defineProperty(Re.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Re, []);
                  } catch (Me) {
                    var et = Me;
                  }
                  Reflect.construct(x, [], Re);
                } else {
                  try {
                    Re.call();
                  } catch (Me) {
                    et = Me;
                  }
                  x.call(Re.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (Me) {
                  et = Me;
                }
                (Re = x()) && typeof Re.catch == "function" && Re.catch(function() {
                });
              }
            } catch (Me) {
              if (Me && et && typeof Me.stack == "string")
                return [Me.stack, et.stack];
            }
            return [null, null];
          }
        };
        Pe.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var T = Object.getOwnPropertyDescriptor(
          Pe.DetermineComponentFrameRoot,
          "name"
        );
        T && T.configurable && Object.defineProperty(
          Pe.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var O = Pe.DetermineComponentFrameRoot(), Y = O[0], oe = O[1];
        if (Y && oe) {
          var ie = Y.split(`
`), Ne = oe.split(`
`);
          for (O = T = 0; T < ie.length && !ie[T].includes(
            "DetermineComponentFrameRoot"
          ); )
            T++;
          for (; O < Ne.length && !Ne[O].includes(
            "DetermineComponentFrameRoot"
          ); )
            O++;
          if (T === ie.length || O === Ne.length)
            for (T = ie.length - 1, O = Ne.length - 1; 1 <= T && 0 <= O && ie[T] !== Ne[O]; )
              O--;
          for (; 1 <= T && 0 <= O; T--, O--)
            if (ie[T] !== Ne[O]) {
              if (T !== 1 || O !== 1)
                do
                  if (T--, O--, 0 > O || ie[T] !== Ne[O]) {
                    var He = `
` + ie[T].replace(
                      " at new ",
                      " at "
                    );
                    return x.displayName && He.includes("<anonymous>") && (He = He.replace("<anonymous>", x.displayName)), typeof x == "function" && he.set(x, He), He;
                  }
                while (1 <= T && 0 <= O);
              break;
            }
        }
      } finally {
        De = !1, ve.H = pe, a(), Error.prepareStackTrace = H;
      }
      return ie = (ie = x ? x.displayName || x.name : "") ? o(ie) : "", typeof x == "function" && he.set(x, ie), ie;
    }
    function s(x) {
      if (x == null) return "";
      if (typeof x == "function") {
        var U = x.prototype;
        return l(
          x,
          !(!U || !U.isReactComponent)
        );
      }
      if (typeof x == "string") return o(x);
      switch (x) {
        case $:
          return o("Suspense");
        case z:
          return o("SuspenseList");
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case D:
            return x = l(x.render, !1), x;
          case F:
            return s(x.type);
          case q:
            U = x._payload, x = x._init;
            try {
              return s(x(U));
            } catch {
            }
        }
      return "";
    }
    function u() {
      var x = ve.A;
      return x === null ? null : x.getOwner();
    }
    function c(x) {
      if (h.call(x, "key")) {
        var U = Object.getOwnPropertyDescriptor(x, "key").get;
        if (U && U.isReactWarning) return !1;
      }
      return x.key !== void 0;
    }
    function f(x, U) {
      function H() {
        ot || (ot = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          U
        ));
      }
      H.isReactWarning = !0, Object.defineProperty(x, "key", {
        get: H,
        configurable: !0
      });
    }
    function d() {
      var x = e(this.type);
      return On[x] || (On[x] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), x = this.props.ref, x !== void 0 ? x : null;
    }
    function p(x, U, H, pe, Pe, T) {
      return H = T.ref, x = {
        $$typeof: N,
        type: x,
        key: U,
        props: T,
        _owner: Pe
      }, (H !== void 0 ? H : null) !== null ? Object.defineProperty(x, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(x, "ref", { enumerable: !1, value: null }), x._store = {}, Object.defineProperty(x._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(x, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(x.props), Object.freeze(x)), x;
    }
    function g(x, U, H, pe, Pe, T) {
      if (typeof x == "string" || typeof x == "function" || x === w || x === Q || x === M || x === $ || x === z || x === ae || typeof x == "object" && x !== null && (x.$$typeof === q || x.$$typeof === F || x.$$typeof === C || x.$$typeof === ne || x.$$typeof === D || x.$$typeof === G || x.getModuleId !== void 0)) {
        var O = U.children;
        if (O !== void 0)
          if (pe)
            if (m(O)) {
              for (pe = 0; pe < O.length; pe++)
                v(O[pe], x);
              Object.freeze && Object.freeze(O);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else v(O, x);
      } else
        O = "", (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (O += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), x === null ? pe = "null" : m(x) ? pe = "array" : x !== void 0 && x.$$typeof === N ? (pe = "<" + (e(x.type) || "Unknown") + " />", O = " Did you accidentally export a JSX literal instead of a component?") : pe = typeof x, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          pe,
          O
        );
      if (h.call(U, "key")) {
        O = e(x);
        var Y = Object.keys(U).filter(function(ie) {
          return ie !== "key";
        });
        pe = 0 < Y.length ? "{key: someKey, " + Y.join(": ..., ") + ": ...}" : "{key: someKey}", Zt[O + pe] || (Y = 0 < Y.length ? "{" + Y.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          pe,
          O,
          Y,
          O
        ), Zt[O + pe] = !0);
      }
      if (O = null, H !== void 0 && (n(H), O = "" + H), c(U) && (n(U.key), O = "" + U.key), "key" in U) {
        H = {};
        for (var oe in U)
          oe !== "key" && (H[oe] = U[oe]);
      } else H = U;
      return O && f(
        H,
        typeof x == "function" ? x.displayName || x.name || "Unknown" : x
      ), p(x, O, T, Pe, u(), H);
    }
    function v(x, U) {
      if (typeof x == "object" && x && x.$$typeof !== Ct) {
        if (m(x))
          for (var H = 0; H < x.length; H++) {
            var pe = x[H];
            k(pe) && b(pe, U);
          }
        else if (k(x))
          x._store && (x._store.validated = 1);
        else if (x === null || typeof x != "object" ? H = null : (H = ce && x[ce] || x["@@iterator"], H = typeof H == "function" ? H : null), typeof H == "function" && H !== x.entries && (H = H.call(x), H !== x))
          for (; !(x = H.next()).done; )
            k(x.value) && b(x.value, U);
      }
    }
    function k(x) {
      return typeof x == "object" && x !== null && x.$$typeof === N;
    }
    function b(x, U) {
      if (x._store && !x._store.validated && x.key == null && (x._store.validated = 1, U = A(U), !en[U])) {
        en[U] = !0;
        var H = "";
        x && x._owner != null && x._owner !== u() && (H = null, typeof x._owner.tag == "number" ? H = e(x._owner.type) : typeof x._owner.name == "string" && (H = x._owner.name), H = " It was passed a child from " + H + ".");
        var pe = ve.getCurrentStack;
        ve.getCurrentStack = function() {
          var Pe = s(x.type);
          return pe && (Pe += pe() || ""), Pe;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          U,
          H
        ), ve.getCurrentStack = pe;
      }
    }
    function A(x) {
      var U = "", H = u();
      return H && (H = e(H.type)) && (U = `

Check the render method of \`` + H + "`."), U || (x = e(x)) && (U = `

Check the top-level render call using <` + x + ">."), U;
    }
    var E = Ie, N = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), Q = Symbol.for("react.profiler"), ne = Symbol.for("react.consumer"), C = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), z = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), ae = Symbol.for("react.offscreen"), ce = Symbol.iterator, fe = Symbol.for("react.client.reference"), ve = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, h = Object.prototype.hasOwnProperty, R = Object.assign, G = Symbol.for("react.client.reference"), m = Array.isArray, L = 0, X, V, J, ee, re, te, we;
    r.__reactDisabledLog = !0;
    var _, Oe, De = !1, he = new (typeof WeakMap == "function" ? WeakMap : Map)(), Ct = Symbol.for("react.client.reference"), ot, On = {}, Zt = {}, en = {};
    nn.Fragment = w, nn.jsx = function(x, U, H, pe, Pe) {
      return g(x, U, H, !1, pe, Pe);
    }, nn.jsxs = function(x, U, H, pe, Pe) {
      return g(x, U, H, !0, pe, Pe);
    };
  }()), nn;
}
var Pa;
function xc() {
  return Pa || (Pa = 1, process.env.NODE_ENV === "production" ? Nn.exports = gc() : Nn.exports = yc()), Nn.exports;
}
var y = xc(), br = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Ra;
function bc() {
  return Ra || (Ra = 1, function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function n() {
        for (var a = "", o = 0; o < arguments.length; o++) {
          var l = arguments[o];
          l && (a = i(a, r(l)));
        }
        return a;
      }
      function r(a) {
        if (typeof a == "string" || typeof a == "number")
          return a;
        if (typeof a != "object")
          return "";
        if (Array.isArray(a))
          return n.apply(null, a);
        if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
          return a.toString();
        var o = "";
        for (var l in a)
          t.call(a, l) && a[l] && (o = i(o, l));
        return o;
      }
      function i(a, o) {
        return o ? a ? a + " " + o : a + o : a;
      }
      e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
    })();
  }(br)), br.exports;
}
var vc = bc();
const Z = /* @__PURE__ */ vn(vc);
function ti() {
  return ti = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ti.apply(null, arguments);
}
function Sl(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function ja(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function kc(e) {
  var t = wc(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function wc(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Ec(e, t, n) {
  var r = Ae(e !== void 0), i = Qe(t), a = i[0], o = i[1], l = e !== void 0, s = r.current;
  return r.current = l, !l && s && a !== t && o(t), [l ? e : a, Ee(function(u) {
    for (var c = arguments.length, f = new Array(c > 1 ? c - 1 : 0), d = 1; d < c; d++)
      f[d - 1] = arguments[d];
    n && n.apply(void 0, [u].concat(f)), o(u);
  }, [n])];
}
function Tl(e, t) {
  return Object.keys(t).reduce(function(n, r) {
    var i, a = n, o = a[ja(r)], l = a[r], s = Sl(a, [ja(r), r].map(kc)), u = t[r], c = Ec(l, o, e[u]), f = c[0], d = c[1];
    return ti({}, s, (i = {}, i[r] = f, i[u] = d, i));
  }, e);
}
function ni(e, t) {
  return ni = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, ni(e, t);
}
function Cc(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ni(e, t);
}
const Sc = ["xxl", "xl", "lg", "md", "sm", "xs"], Tc = "xs", rr = /* @__PURE__ */ B.createContext({
  prefixes: {},
  breakpoints: Sc,
  minBreakpoint: Tc
}), {
  Consumer: Iv,
  Provider: Pv
} = rr;
function se(e, t) {
  const {
    prefixes: n
  } = Ce(rr);
  return e || n[t] || t;
}
function Al() {
  const {
    breakpoints: e
  } = Ce(rr);
  return e;
}
function Ol() {
  const {
    minBreakpoint: e
  } = Ce(rr);
  return e;
}
function Li(e) {
  return e && e.ownerDocument || document;
}
function Ac(e) {
  var t = Li(e);
  return t && t.defaultView || window;
}
function Oc(e, t) {
  return Ac(e).getComputedStyle(e, t);
}
var Nc = /([A-Z])/g;
function Ic(e) {
  return e.replace(Nc, "-$1").toLowerCase();
}
var Pc = /^ms-/;
function In(e) {
  return Ic(e).replace(Pc, "-ms-");
}
var Rc = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function jc(e) {
  return !!(e && Rc.test(e));
}
function ct(e, t) {
  var n = "", r = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(In(t)) || Oc(e).getPropertyValue(In(t));
  Object.keys(t).forEach(function(i) {
    var a = t[i];
    !a && a !== 0 ? e.style.removeProperty(In(i)) : jc(i) ? r += i + "(" + a + ") " : n += In(i) + ": " + a + ";";
  }), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
var Pn = { exports: {} }, Rn = { exports: {} }, me = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _a;
function _c() {
  if (_a) return me;
  _a = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, k = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
  function E(S) {
    if (typeof S == "object" && S !== null) {
      var w = S.$$typeof;
      switch (w) {
        case t:
          switch (S = S.type, S) {
            case s:
            case u:
            case r:
            case a:
            case i:
            case f:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case l:
                case c:
                case g:
                case p:
                case o:
                  return S;
                default:
                  return w;
              }
          }
        case n:
          return w;
      }
    }
  }
  function N(S) {
    return E(S) === u;
  }
  return me.AsyncMode = s, me.ConcurrentMode = u, me.ContextConsumer = l, me.ContextProvider = o, me.Element = t, me.ForwardRef = c, me.Fragment = r, me.Lazy = g, me.Memo = p, me.Portal = n, me.Profiler = a, me.StrictMode = i, me.Suspense = f, me.isAsyncMode = function(S) {
    return N(S) || E(S) === s;
  }, me.isConcurrentMode = N, me.isContextConsumer = function(S) {
    return E(S) === l;
  }, me.isContextProvider = function(S) {
    return E(S) === o;
  }, me.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === t;
  }, me.isForwardRef = function(S) {
    return E(S) === c;
  }, me.isFragment = function(S) {
    return E(S) === r;
  }, me.isLazy = function(S) {
    return E(S) === g;
  }, me.isMemo = function(S) {
    return E(S) === p;
  }, me.isPortal = function(S) {
    return E(S) === n;
  }, me.isProfiler = function(S) {
    return E(S) === a;
  }, me.isStrictMode = function(S) {
    return E(S) === i;
  }, me.isSuspense = function(S) {
    return E(S) === f;
  }, me.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === r || S === u || S === a || S === i || S === f || S === d || typeof S == "object" && S !== null && (S.$$typeof === g || S.$$typeof === p || S.$$typeof === o || S.$$typeof === l || S.$$typeof === c || S.$$typeof === k || S.$$typeof === b || S.$$typeof === A || S.$$typeof === v);
  }, me.typeOf = E, me;
}
var ge = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fa;
function Fc() {
  return Fa || (Fa = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, k = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
    function E(_) {
      return typeof _ == "string" || typeof _ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      _ === r || _ === u || _ === a || _ === i || _ === f || _ === d || typeof _ == "object" && _ !== null && (_.$$typeof === g || _.$$typeof === p || _.$$typeof === o || _.$$typeof === l || _.$$typeof === c || _.$$typeof === k || _.$$typeof === b || _.$$typeof === A || _.$$typeof === v);
    }
    function N(_) {
      if (typeof _ == "object" && _ !== null) {
        var Oe = _.$$typeof;
        switch (Oe) {
          case t:
            var De = _.type;
            switch (De) {
              case s:
              case u:
              case r:
              case a:
              case i:
              case f:
                return De;
              default:
                var he = De && De.$$typeof;
                switch (he) {
                  case l:
                  case c:
                  case g:
                  case p:
                  case o:
                    return he;
                  default:
                    return Oe;
                }
            }
          case n:
            return Oe;
        }
      }
    }
    var S = s, w = u, M = l, Q = o, ne = t, C = c, D = r, $ = g, z = p, F = n, q = a, ae = i, ce = f, fe = !1;
    function ve(_) {
      return fe || (fe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), h(_) || N(_) === s;
    }
    function h(_) {
      return N(_) === u;
    }
    function R(_) {
      return N(_) === l;
    }
    function G(_) {
      return N(_) === o;
    }
    function m(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }
    function L(_) {
      return N(_) === c;
    }
    function X(_) {
      return N(_) === r;
    }
    function V(_) {
      return N(_) === g;
    }
    function J(_) {
      return N(_) === p;
    }
    function ee(_) {
      return N(_) === n;
    }
    function re(_) {
      return N(_) === a;
    }
    function te(_) {
      return N(_) === i;
    }
    function we(_) {
      return N(_) === f;
    }
    ge.AsyncMode = S, ge.ConcurrentMode = w, ge.ContextConsumer = M, ge.ContextProvider = Q, ge.Element = ne, ge.ForwardRef = C, ge.Fragment = D, ge.Lazy = $, ge.Memo = z, ge.Portal = F, ge.Profiler = q, ge.StrictMode = ae, ge.Suspense = ce, ge.isAsyncMode = ve, ge.isConcurrentMode = h, ge.isContextConsumer = R, ge.isContextProvider = G, ge.isElement = m, ge.isForwardRef = L, ge.isFragment = X, ge.isLazy = V, ge.isMemo = J, ge.isPortal = ee, ge.isProfiler = re, ge.isStrictMode = te, ge.isSuspense = we, ge.isValidElementType = E, ge.typeOf = N;
  }()), ge;
}
var La;
function Nl() {
  return La || (La = 1, process.env.NODE_ENV === "production" ? Rn.exports = _c() : Rn.exports = Fc()), Rn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var vr, Da;
function Lc() {
  if (Da) return vr;
  Da = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var o = {}, l = 0; l < 10; l++)
        o["_" + String.fromCharCode(l)] = l;
      var s = Object.getOwnPropertyNames(o).map(function(c) {
        return o[c];
      });
      if (s.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(c) {
        u[c] = c;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return vr = i() ? Object.assign : function(a, o) {
    for (var l, s = r(a), u, c = 1; c < arguments.length; c++) {
      l = Object(arguments[c]);
      for (var f in l)
        t.call(l, f) && (s[f] = l[f]);
      if (e) {
        u = e(l);
        for (var d = 0; d < u.length; d++)
          n.call(l, u[d]) && (s[u[d]] = l[u[d]]);
      }
    }
    return s;
  }, vr;
}
var kr, Ma;
function Di() {
  if (Ma) return kr;
  Ma = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return kr = e, kr;
}
var wr, za;
function Il() {
  return za || (za = 1, wr = Function.call.bind(Object.prototype.hasOwnProperty)), wr;
}
var Er, $a;
function Dc() {
  if ($a) return Er;
  $a = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Di(), n = {}, r = /* @__PURE__ */ Il();
    e = function(a) {
      var o = "Warning: " + a;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function i(a, o, l, s, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var c in a)
        if (r(a, c)) {
          var f;
          try {
            if (typeof a[c] != "function") {
              var d = Error(
                (s || "React class") + ": " + l + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            f = a[c](o, c, s, l, null, t);
          } catch (g) {
            f = g;
          }
          if (f && !(f instanceof Error) && e(
            (s || "React class") + ": type specification of " + l + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in n)) {
            n[f.message] = !0;
            var p = u ? u() : "";
            e(
              "Failed " + l + " type: " + f.message + (p ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Er = i, Er;
}
var Cr, Ba;
function Mc() {
  if (Ba) return Cr;
  Ba = 1;
  var e = Nl(), t = Lc(), n = /* @__PURE__ */ Di(), r = /* @__PURE__ */ Il(), i = /* @__PURE__ */ Dc(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(l) {
    var s = "Warning: " + l;
    typeof console < "u" && console.error(s);
    try {
      throw new Error(s);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return Cr = function(l, s) {
    var u = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function f(h) {
      var R = h && (u && h[u] || h[c]);
      if (typeof R == "function")
        return R;
    }
    var d = "<<anonymous>>", p = {
      array: b("array"),
      bigint: b("bigint"),
      bool: b("boolean"),
      func: b("function"),
      number: b("number"),
      object: b("object"),
      string: b("string"),
      symbol: b("symbol"),
      any: A(),
      arrayOf: E,
      element: N(),
      elementType: S(),
      instanceOf: w,
      node: C(),
      objectOf: Q,
      oneOf: M,
      oneOfType: ne,
      shape: $,
      exact: z
    };
    function g(h, R) {
      return h === R ? h !== 0 || 1 / h === 1 / R : h !== h && R !== R;
    }
    function v(h, R) {
      this.message = h, this.data = R && typeof R == "object" ? R : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function k(h) {
      if (process.env.NODE_ENV !== "production")
        var R = {}, G = 0;
      function m(X, V, J, ee, re, te, we) {
        if (ee = ee || d, te = te || J, we !== n) {
          if (s) {
            var _ = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw _.name = "Invariant Violation", _;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Oe = ee + ":" + J;
            !R[Oe] && // Avoid spamming the console because they are often not actionable except for lib authors
            G < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + te + "` prop on `" + ee + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), R[Oe] = !0, G++);
          }
        }
        return V[J] == null ? X ? V[J] === null ? new v("The " + re + " `" + te + "` is marked as required " + ("in `" + ee + "`, but its value is `null`.")) : new v("The " + re + " `" + te + "` is marked as required in " + ("`" + ee + "`, but its value is `undefined`.")) : null : h(V, J, ee, re, te);
      }
      var L = m.bind(null, !1);
      return L.isRequired = m.bind(null, !0), L;
    }
    function b(h) {
      function R(G, m, L, X, V, J) {
        var ee = G[m], re = ae(ee);
        if (re !== h) {
          var te = ce(ee);
          return new v(
            "Invalid " + X + " `" + V + "` of type " + ("`" + te + "` supplied to `" + L + "`, expected ") + ("`" + h + "`."),
            { expectedType: h }
          );
        }
        return null;
      }
      return k(R);
    }
    function A() {
      return k(o);
    }
    function E(h) {
      function R(G, m, L, X, V) {
        if (typeof h != "function")
          return new v("Property `" + V + "` of component `" + L + "` has invalid PropType notation inside arrayOf.");
        var J = G[m];
        if (!Array.isArray(J)) {
          var ee = ae(J);
          return new v("Invalid " + X + " `" + V + "` of type " + ("`" + ee + "` supplied to `" + L + "`, expected an array."));
        }
        for (var re = 0; re < J.length; re++) {
          var te = h(J, re, L, X, V + "[" + re + "]", n);
          if (te instanceof Error)
            return te;
        }
        return null;
      }
      return k(R);
    }
    function N() {
      function h(R, G, m, L, X) {
        var V = R[G];
        if (!l(V)) {
          var J = ae(V);
          return new v("Invalid " + L + " `" + X + "` of type " + ("`" + J + "` supplied to `" + m + "`, expected a single ReactElement."));
        }
        return null;
      }
      return k(h);
    }
    function S() {
      function h(R, G, m, L, X) {
        var V = R[G];
        if (!e.isValidElementType(V)) {
          var J = ae(V);
          return new v("Invalid " + L + " `" + X + "` of type " + ("`" + J + "` supplied to `" + m + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return k(h);
    }
    function w(h) {
      function R(G, m, L, X, V) {
        if (!(G[m] instanceof h)) {
          var J = h.name || d, ee = ve(G[m]);
          return new v("Invalid " + X + " `" + V + "` of type " + ("`" + ee + "` supplied to `" + L + "`, expected ") + ("instance of `" + J + "`."));
        }
        return null;
      }
      return k(R);
    }
    function M(h) {
      if (!Array.isArray(h))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), o;
      function R(G, m, L, X, V) {
        for (var J = G[m], ee = 0; ee < h.length; ee++)
          if (g(J, h[ee]))
            return null;
        var re = JSON.stringify(h, function(we, _) {
          var Oe = ce(_);
          return Oe === "symbol" ? String(_) : _;
        });
        return new v("Invalid " + X + " `" + V + "` of value `" + String(J) + "` " + ("supplied to `" + L + "`, expected one of " + re + "."));
      }
      return k(R);
    }
    function Q(h) {
      function R(G, m, L, X, V) {
        if (typeof h != "function")
          return new v("Property `" + V + "` of component `" + L + "` has invalid PropType notation inside objectOf.");
        var J = G[m], ee = ae(J);
        if (ee !== "object")
          return new v("Invalid " + X + " `" + V + "` of type " + ("`" + ee + "` supplied to `" + L + "`, expected an object."));
        for (var re in J)
          if (r(J, re)) {
            var te = h(J, re, L, X, V + "." + re, n);
            if (te instanceof Error)
              return te;
          }
        return null;
      }
      return k(R);
    }
    function ne(h) {
      if (!Array.isArray(h))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var R = 0; R < h.length; R++) {
        var G = h[R];
        if (typeof G != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + fe(G) + " at index " + R + "."
          ), o;
      }
      function m(L, X, V, J, ee) {
        for (var re = [], te = 0; te < h.length; te++) {
          var we = h[te], _ = we(L, X, V, J, ee, n);
          if (_ == null)
            return null;
          _.data && r(_.data, "expectedType") && re.push(_.data.expectedType);
        }
        var Oe = re.length > 0 ? ", expected one of type [" + re.join(", ") + "]" : "";
        return new v("Invalid " + J + " `" + ee + "` supplied to " + ("`" + V + "`" + Oe + "."));
      }
      return k(m);
    }
    function C() {
      function h(R, G, m, L, X) {
        return F(R[G]) ? null : new v("Invalid " + L + " `" + X + "` supplied to " + ("`" + m + "`, expected a ReactNode."));
      }
      return k(h);
    }
    function D(h, R, G, m, L) {
      return new v(
        (h || "React class") + ": " + R + " type `" + G + "." + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + L + "`."
      );
    }
    function $(h) {
      function R(G, m, L, X, V) {
        var J = G[m], ee = ae(J);
        if (ee !== "object")
          return new v("Invalid " + X + " `" + V + "` of type `" + ee + "` " + ("supplied to `" + L + "`, expected `object`."));
        for (var re in h) {
          var te = h[re];
          if (typeof te != "function")
            return D(L, X, V, re, ce(te));
          var we = te(J, re, L, X, V + "." + re, n);
          if (we)
            return we;
        }
        return null;
      }
      return k(R);
    }
    function z(h) {
      function R(G, m, L, X, V) {
        var J = G[m], ee = ae(J);
        if (ee !== "object")
          return new v("Invalid " + X + " `" + V + "` of type `" + ee + "` " + ("supplied to `" + L + "`, expected `object`."));
        var re = t({}, G[m], h);
        for (var te in re) {
          var we = h[te];
          if (r(h, te) && typeof we != "function")
            return D(L, X, V, te, ce(we));
          if (!we)
            return new v(
              "Invalid " + X + " `" + V + "` key `" + te + "` supplied to `" + L + "`.\nBad object: " + JSON.stringify(G[m], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(h), null, "  ")
            );
          var _ = we(J, te, L, X, V + "." + te, n);
          if (_)
            return _;
        }
        return null;
      }
      return k(R);
    }
    function F(h) {
      switch (typeof h) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !h;
        case "object":
          if (Array.isArray(h))
            return h.every(F);
          if (h === null || l(h))
            return !0;
          var R = f(h);
          if (R) {
            var G = R.call(h), m;
            if (R !== h.entries) {
              for (; !(m = G.next()).done; )
                if (!F(m.value))
                  return !1;
            } else
              for (; !(m = G.next()).done; ) {
                var L = m.value;
                if (L && !F(L[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function q(h, R) {
      return h === "symbol" ? !0 : R ? R["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && R instanceof Symbol : !1;
    }
    function ae(h) {
      var R = typeof h;
      return Array.isArray(h) ? "array" : h instanceof RegExp ? "object" : q(R, h) ? "symbol" : R;
    }
    function ce(h) {
      if (typeof h > "u" || h === null)
        return "" + h;
      var R = ae(h);
      if (R === "object") {
        if (h instanceof Date)
          return "date";
        if (h instanceof RegExp)
          return "regexp";
      }
      return R;
    }
    function fe(h) {
      var R = ce(h);
      switch (R) {
        case "array":
        case "object":
          return "an " + R;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + R;
        default:
          return R;
      }
    }
    function ve(h) {
      return !h.constructor || !h.constructor.name ? d : h.constructor.name;
    }
    return p.checkPropTypes = i, p.resetWarningCache = i.resetWarningCache, p.PropTypes = p, p;
  }, Cr;
}
var Sr, Ua;
function zc() {
  if (Ua) return Sr;
  Ua = 1;
  var e = /* @__PURE__ */ Di();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Sr = function() {
    function r(o, l, s, u, c, f) {
      if (f !== e) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var a = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, Sr;
}
var Ha;
function $c() {
  if (Ha) return Pn.exports;
  if (Ha = 1, process.env.NODE_ENV !== "production") {
    var e = Nl(), t = !0;
    Pn.exports = /* @__PURE__ */ Mc()(e.isElement, t);
  } else
    Pn.exports = /* @__PURE__ */ zc()();
  return Pn.exports;
}
var Bc = /* @__PURE__ */ $c();
const j = /* @__PURE__ */ vn(Bc), Va = {
  disabled: !1
};
var Uc = process.env.NODE_ENV !== "production" ? j.oneOfType([j.number, j.shape({
  enter: j.number,
  exit: j.number,
  appear: j.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && j.oneOfType([j.string, j.shape({
  enter: j.string,
  exit: j.string,
  active: j.string
}), j.shape({
  enter: j.string,
  enterDone: j.string,
  enterActive: j.string,
  exit: j.string,
  exitDone: j.string,
  exitActive: j.string
})]);
const Pl = Ie.createContext(null);
var Hc = function(t) {
  return t.scrollTop;
}, sn = "unmounted", bt = "exited", Je = "entering", st = "entered", mn = "exiting", ht = /* @__PURE__ */ function(e) {
  Cc(t, e);
  function t(r, i) {
    var a;
    a = e.call(this, r, i) || this;
    var o = i, l = o && !o.isMounting ? r.enter : r.appear, s;
    return a.appearStatus = null, r.in ? l ? (s = bt, a.appearStatus = Je) : s = st : r.unmountOnExit || r.mountOnEnter ? s = sn : s = bt, a.state = {
      status: s
    }, a.nextCallback = null, a;
  }
  t.getDerivedStateFromProps = function(i, a) {
    var o = i.in;
    return o && a.status === sn ? {
      status: bt
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var a = null;
    if (i !== this.props) {
      var o = this.state.status;
      this.props.in ? o !== Je && o !== st && (a = Je) : (o === Je || o === st) && (a = mn);
    }
    this.updateStatus(!1, a);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var i = this.props.timeout, a, o, l;
    return a = o = l = i, i != null && typeof i != "number" && (a = i.exit, o = i.enter, l = i.appear !== void 0 ? i.appear : o), {
      exit: a,
      enter: o,
      appear: l
    };
  }, n.updateStatus = function(i, a) {
    if (i === void 0 && (i = !1), a !== null)
      if (this.cancelNextCallback(), a === Je) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var o = this.props.nodeRef ? this.props.nodeRef.current : Bt.findDOMNode(this);
          o && Hc(o);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === bt && this.setState({
      status: sn
    });
  }, n.performEnter = function(i) {
    var a = this, o = this.props.enter, l = this.context ? this.context.isMounting : i, s = this.props.nodeRef ? [l] : [Bt.findDOMNode(this), l], u = s[0], c = s[1], f = this.getTimeouts(), d = l ? f.appear : f.enter;
    if (!i && !o || Va.disabled) {
      this.safeSetState({
        status: st
      }, function() {
        a.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, c), this.safeSetState({
      status: Je
    }, function() {
      a.props.onEntering(u, c), a.onTransitionEnd(d, function() {
        a.safeSetState({
          status: st
        }, function() {
          a.props.onEntered(u, c);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, a = this.props.exit, o = this.getTimeouts(), l = this.props.nodeRef ? void 0 : Bt.findDOMNode(this);
    if (!a || Va.disabled) {
      this.safeSetState({
        status: bt
      }, function() {
        i.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: mn
    }, function() {
      i.props.onExiting(l), i.onTransitionEnd(o.exit, function() {
        i.safeSetState({
          status: bt
        }, function() {
          i.props.onExited(l);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(i, a) {
    a = this.setNextCallback(a), this.setState(i, a);
  }, n.setNextCallback = function(i) {
    var a = this, o = !0;
    return this.nextCallback = function(l) {
      o && (o = !1, a.nextCallback = null, i(l));
    }, this.nextCallback.cancel = function() {
      o = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(i, a) {
    this.setNextCallback(a);
    var o = this.props.nodeRef ? this.props.nodeRef.current : Bt.findDOMNode(this), l = i == null && !this.props.addEndListener;
    if (!o || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var s = this.props.nodeRef ? [this.nextCallback] : [o, this.nextCallback], u = s[0], c = s[1];
      this.props.addEndListener(u, c);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, n.render = function() {
    var i = this.state.status;
    if (i === sn)
      return null;
    var a = this.props, o = a.children;
    a.in, a.mountOnEnter, a.unmountOnExit, a.appear, a.enter, a.exit, a.timeout, a.addEndListener, a.onEnter, a.onEntering, a.onEntered, a.onExit, a.onExiting, a.onExited, a.nodeRef;
    var l = Sl(a, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Ie.createElement(Pl.Provider, {
        value: null
      }, typeof o == "function" ? o(i, l) : Ie.cloneElement(Ie.Children.only(o), l))
    );
  }, t;
}(Ie.Component);
ht.contextType = Pl;
ht.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: j.shape({
    current: typeof Element > "u" ? j.any : function(e, t, n, r, i, a) {
      var o = e[t];
      return j.instanceOf(o && "ownerDocument" in o ? o.ownerDocument.defaultView.Element : Element)(e, t, n, r, i, a);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: j.oneOfType([j.func.isRequired, j.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: j.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: j.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: j.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: j.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: j.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: j.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var n = Uc;
    t.addEndListener || (n = n.isRequired);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      i[a - 1] = arguments[a];
    return n.apply(void 0, [t].concat(i));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: j.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: j.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: j.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: j.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: j.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: j.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: j.func
} : {};
function _t() {
}
ht.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: _t,
  onEntering: _t,
  onEntered: _t,
  onExit: _t,
  onExiting: _t,
  onExited: _t
};
ht.UNMOUNTED = sn;
ht.EXITED = bt;
ht.ENTERING = Je;
ht.ENTERED = st;
ht.EXITING = mn;
function Vc(e) {
  return e.code === "Escape" || e.keyCode === 27;
}
function Wc() {
  const e = B.version.split(".");
  return {
    major: +e[0],
    minor: +e[1],
    patch: +e[2]
  };
}
function Gt(e) {
  if (!e || typeof e == "function")
    return null;
  const {
    major: t
  } = Wc();
  return t >= 19 ? e.props.ref : e.ref;
}
const ir = !!(typeof window < "u" && window.document && window.document.createElement);
var ri = !1, ii = !1;
try {
  var Tr = {
    get passive() {
      return ri = !0;
    },
    get once() {
      return ii = ri = !0;
    }
  };
  ir && (window.addEventListener("test", Tr, Tr), window.removeEventListener("test", Tr, !0));
} catch {
}
function qc(e, t, n, r) {
  if (r && typeof r != "boolean" && !ii) {
    var i = r.once, a = r.capture, o = n;
    !ii && i && (o = n.__once || function l(s) {
      this.removeEventListener(t, l, a), n.call(this, s);
    }, n.__once = o), e.addEventListener(t, o, ri ? r : a);
  }
  e.addEventListener(t, n, r);
}
function Yc(e, t, n, r) {
  var i = r && typeof r != "boolean" ? r.capture : r;
  e.removeEventListener(t, n, i), n.__once && e.removeEventListener(t, n.__once, i);
}
function Hn(e, t, n, r) {
  return qc(e, t, n, r), function() {
    Yc(e, t, n, r);
  };
}
function Gc(e, t, n, r) {
  if (r === void 0 && (r = !0), e) {
    var i = document.createEvent("HTMLEvents");
    i.initEvent(t, n, r), e.dispatchEvent(i);
  }
}
function Kc(e) {
  var t = ct(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function Xc(e, t, n) {
  n === void 0 && (n = 5);
  var r = !1, i = setTimeout(function() {
    r || Gc(e, "transitionend", !0);
  }, t + n), a = Hn(e, "transitionend", function() {
    r = !0;
  }, {
    once: !0
  });
  return function() {
    clearTimeout(i), a();
  };
}
function Qc(e, t, n, r) {
  n == null && (n = Kc(e) || 0);
  var i = Xc(e, n, r), a = Hn(e, "transitionend", t);
  return function() {
    i(), a();
  };
}
function Wa(e, t) {
  const n = ct(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function Mi(e, t) {
  const n = Wa(e, "transitionDuration"), r = Wa(e, "transitionDelay"), i = Qc(e, (a) => {
    a.target === e && (i(), t(a));
  }, n + r);
}
function rn(...e) {
  return e.filter((t) => t != null).reduce((t, n) => {
    if (typeof n != "function")
      throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
    return t === null ? n : function(...i) {
      t.apply(this, i), n.apply(this, i);
    };
  }, null);
}
function Rl(e) {
  e.offsetHeight;
}
const qa = (e) => !e || typeof e == "function" ? e : (t) => {
  e.current = t;
};
function Jc(e, t) {
  const n = qa(e), r = qa(t);
  return (i) => {
    n && n(i), r && r(i);
  };
}
function Zc(e, t) {
  return qe(() => Jc(e, t), [e, t]);
}
function ef(e) {
  return e && "setState" in e ? Bt.findDOMNode(e) : e ?? null;
}
const zi = /* @__PURE__ */ Ie.forwardRef(({
  onEnter: e,
  onEntering: t,
  onEntered: n,
  onExit: r,
  onExiting: i,
  onExited: a,
  addEndListener: o,
  children: l,
  childRef: s,
  ...u
}, c) => {
  const f = Ae(null), d = Zc(f, s), p = (w) => {
    d(ef(w));
  }, g = (w) => (M) => {
    w && f.current && w(f.current, M);
  }, v = Ee(g(e), [e]), k = Ee(g(t), [t]), b = Ee(g(n), [n]), A = Ee(g(r), [r]), E = Ee(g(i), [i]), N = Ee(g(a), [a]), S = Ee(g(o), [o]);
  return /* @__PURE__ */ y.jsx(ht, {
    ref: c,
    ...u,
    onEnter: v,
    onEntered: b,
    onEntering: k,
    onExit: A,
    onExited: N,
    onExiting: E,
    addEndListener: S,
    nodeRef: f,
    children: typeof l == "function" ? (w, M) => (
      // TODO: Types for RTG missing innerProps, so need to cast.
      l(w, {
        ...M,
        ref: p
      })
    ) : /* @__PURE__ */ Ie.cloneElement(l, {
      ref: p
    })
  });
}), tf = {
  height: ["marginTop", "marginBottom"],
  width: ["marginLeft", "marginRight"]
};
function nf(e, t) {
  const n = `offset${e[0].toUpperCase()}${e.slice(1)}`, r = t[n], i = tf[e];
  return r + // @ts-ignore
  parseInt(ct(t, i[0]), 10) + // @ts-ignore
  parseInt(ct(t, i[1]), 10);
}
const rf = {
  [bt]: "collapse",
  [mn]: "collapsing",
  [Je]: "collapsing",
  [st]: "collapse show"
}, af = /* @__PURE__ */ Ie.forwardRef(({
  onEnter: e,
  onEntering: t,
  onEntered: n,
  onExit: r,
  onExiting: i,
  className: a,
  children: o,
  dimension: l = "height",
  in: s = !1,
  timeout: u = 300,
  mountOnEnter: c = !1,
  unmountOnExit: f = !1,
  appear: d = !1,
  getDimensionValue: p = nf,
  ...g
}, v) => {
  const k = typeof l == "function" ? l() : l, b = qe(() => rn((w) => {
    w.style[k] = "0";
  }, e), [k, e]), A = qe(() => rn((w) => {
    const M = `scroll${k[0].toUpperCase()}${k.slice(1)}`;
    w.style[k] = `${w[M]}px`;
  }, t), [k, t]), E = qe(() => rn((w) => {
    w.style[k] = null;
  }, n), [k, n]), N = qe(() => rn((w) => {
    w.style[k] = `${p(k, w)}px`, Rl(w);
  }, r), [r, p, k]), S = qe(() => rn((w) => {
    w.style[k] = null;
  }, i), [k, i]);
  return /* @__PURE__ */ y.jsx(zi, {
    ref: v,
    addEndListener: Mi,
    ...g,
    "aria-expanded": g.role ? s : null,
    onEnter: b,
    onEntering: A,
    onEntered: E,
    onExit: N,
    onExiting: S,
    childRef: Gt(o),
    in: s,
    timeout: u,
    mountOnEnter: c,
    unmountOnExit: f,
    appear: d,
    children: (w, M) => /* @__PURE__ */ Ie.cloneElement(o, {
      ...M,
      className: Z(a, o.props.className, rf[w], k === "width" && "collapse-horizontal")
    })
  });
});
function of(e) {
  const t = Ae(e);
  return _e(() => {
    t.current = e;
  }, [e]), t;
}
function ar(e) {
  const t = of(e);
  return Ee(function(...n) {
    return t.current && t.current(...n);
  }, [t]);
}
const $i = (e) => /* @__PURE__ */ B.forwardRef((t, n) => /* @__PURE__ */ y.jsx("div", {
  ...t,
  ref: n,
  className: Z(t.className, e)
}));
function lf(e) {
  const t = Ae(e);
  return _e(() => {
    t.current = e;
  }, [e]), t;
}
function ut(e) {
  const t = lf(e);
  return Ee(function(...n) {
    return t.current && t.current(...n);
  }, [t]);
}
function sf() {
  const e = Ae(!0), t = Ae(() => e.current);
  return _e(() => (e.current = !0, () => {
    e.current = !1;
  }), []), t.current;
}
function uf(e) {
  const t = Ae(null);
  return _e(() => {
    t.current = e;
  }), t.current;
}
const cf = typeof global < "u" && // @ts-ignore
global.navigator && // @ts-ignore
global.navigator.product === "ReactNative", ff = typeof document < "u", Ya = ff || cf ? Cl : _e, df = ["as", "disabled"];
function pf(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
function hf(e) {
  return !e || e.trim() === "#";
}
function Bi({
  tagName: e,
  disabled: t,
  href: n,
  target: r,
  rel: i,
  role: a,
  onClick: o,
  tabIndex: l = 0,
  type: s
}) {
  e || (n != null || r != null || i != null ? e = "a" : e = "button");
  const u = {
    tagName: e
  };
  if (e === "button")
    return [{
      type: s || "button",
      disabled: t
    }, u];
  const c = (d) => {
    if ((t || e === "a" && hf(n)) && d.preventDefault(), t) {
      d.stopPropagation();
      return;
    }
    o == null || o(d);
  }, f = (d) => {
    d.key === " " && (d.preventDefault(), c(d));
  };
  return e === "a" && (n || (n = "#"), t && (n = void 0)), [{
    role: a ?? "button",
    // explicitly undefined so that it overrides the props disabled in a spread
    // e.g. <Tag {...props} {...hookProps} />
    disabled: void 0,
    tabIndex: t ? void 0 : l,
    href: n,
    target: e === "a" ? r : void 0,
    "aria-disabled": t || void 0,
    rel: e === "a" ? i : void 0,
    onClick: c,
    onKeyDown: f
  }, u];
}
const jl = /* @__PURE__ */ B.forwardRef((e, t) => {
  let {
    as: n,
    disabled: r
  } = e, i = pf(e, df);
  const [a, {
    tagName: o
  }] = Bi(Object.assign({
    tagName: n,
    disabled: r
  }, i));
  return /* @__PURE__ */ y.jsx(o, Object.assign({}, i, a, {
    ref: t
  }));
});
jl.displayName = "Button";
const mf = ["onKeyDown"];
function gf(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
function yf(e) {
  return !e || e.trim() === "#";
}
const Ui = /* @__PURE__ */ B.forwardRef((e, t) => {
  let {
    onKeyDown: n
  } = e, r = gf(e, mf);
  const [i] = Bi(Object.assign({
    tagName: "a"
  }, r)), a = ut((o) => {
    i.onKeyDown(o), n == null || n(o);
  });
  return yf(r.href) || r.role === "button" ? /* @__PURE__ */ y.jsx("a", Object.assign({
    ref: t
  }, r, i, {
    onKeyDown: a
  })) : /* @__PURE__ */ y.jsx("a", Object.assign({
    ref: t
  }, r, {
    onKeyDown: n
  }));
});
Ui.displayName = "Anchor";
const xf = {
  [Je]: "show",
  [st]: "show"
}, _l = /* @__PURE__ */ B.forwardRef(({
  className: e,
  children: t,
  transitionClasses: n = {},
  onEnter: r,
  ...i
}, a) => {
  const o = {
    in: !1,
    timeout: 300,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    ...i
  }, l = Ee((s, u) => {
    Rl(s), r == null || r(s, u);
  }, [r]);
  return /* @__PURE__ */ y.jsx(zi, {
    ref: a,
    addEndListener: Mi,
    ...o,
    onEnter: l,
    childRef: Gt(t),
    children: (s, u) => /* @__PURE__ */ B.cloneElement(t, {
      ...u,
      className: Z("fade", e, t.props.className, xf[s], n[s])
    })
  });
});
_l.displayName = "Fade";
const bf = {
  /** An accessible label indicating the relevant information about the Close Button. */
  "aria-label": j.string,
  /** A callback fired after the Close Button is clicked. */
  onClick: j.func,
  /**
   * Render different color variant for the button.
   *
   * Omitting this will render the default dark color.
   */
  variant: j.oneOf(["white"])
}, Hi = /* @__PURE__ */ B.forwardRef(({
  className: e,
  variant: t,
  "aria-label": n = "Close",
  ...r
}, i) => /* @__PURE__ */ y.jsx("button", {
  ref: i,
  type: "button",
  className: Z("btn-close", t && `btn-close-${t}`, e),
  "aria-label": n,
  ...r
}));
Hi.displayName = "CloseButton";
Hi.propTypes = bf;
const kn = /* @__PURE__ */ B.forwardRef(({
  as: e,
  bsPrefix: t,
  variant: n = "primary",
  size: r,
  active: i = !1,
  disabled: a = !1,
  className: o,
  ...l
}, s) => {
  const u = se(t, "btn"), [c, {
    tagName: f
  }] = Bi({
    tagName: e,
    disabled: a,
    ...l
  }), d = f;
  return /* @__PURE__ */ y.jsx(d, {
    ...c,
    ...l,
    ref: s,
    disabled: a,
    className: Z(o, u, i && "active", n && `${u}-${n}`, r && `${u}-${r}`, l.href && a && "disabled")
  });
});
kn.displayName = "Button";
const Vi = /* @__PURE__ */ B.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = "div",
  ...r
}, i) => (t = se(t, "card-body"), /* @__PURE__ */ y.jsx(n, {
  ref: i,
  className: Z(e, t),
  ...r
})));
Vi.displayName = "CardBody";
const Fl = /* @__PURE__ */ B.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = "div",
  ...r
}, i) => (t = se(t, "card-footer"), /* @__PURE__ */ y.jsx(n, {
  ref: i,
  className: Z(e, t),
  ...r
})));
Fl.displayName = "CardFooter";
const Wi = /* @__PURE__ */ B.createContext(null);
Wi.displayName = "CardHeaderContext";
const Ll = /* @__PURE__ */ B.forwardRef(({
  bsPrefix: e,
  className: t,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: n = "div",
  ...r
}, i) => {
  const a = se(e, "card-header"), o = qe(() => ({
    cardHeaderBsPrefix: a
  }), [a]);
  return /* @__PURE__ */ y.jsx(Wi.Provider, {
    value: o,
    children: /* @__PURE__ */ y.jsx(n, {
      ref: i,
      ...r,
      className: Z(t, a)
    })
  });
});
Ll.displayName = "CardHeader";
const Dl = /* @__PURE__ */ B.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    bsPrefix: e,
    className: t,
    variant: n,
    as: r = "img",
    ...i
  }, a) => {
    const o = se(e, "card-img");
    return /* @__PURE__ */ y.jsx(r, {
      ref: a,
      className: Z(n ? `${o}-${n}` : o, t),
      ...i
    });
  }
);
Dl.displayName = "CardImg";
const Ml = /* @__PURE__ */ B.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = "div",
  ...r
}, i) => (t = se(t, "card-img-overlay"), /* @__PURE__ */ y.jsx(n, {
  ref: i,
  className: Z(e, t),
  ...r
})));
Ml.displayName = "CardImgOverlay";
const zl = /* @__PURE__ */ B.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = "a",
  ...r
}, i) => (t = se(t, "card-link"), /* @__PURE__ */ y.jsx(n, {
  ref: i,
  className: Z(e, t),
  ...r
})));
zl.displayName = "CardLink";
const vf = $i("h6"), $l = /* @__PURE__ */ B.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = vf,
  ...r
}, i) => (t = se(t, "card-subtitle"), /* @__PURE__ */ y.jsx(n, {
  ref: i,
  className: Z(e, t),
  ...r
})));
$l.displayName = "CardSubtitle";
const Bl = /* @__PURE__ */ B.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = "p",
  ...r
}, i) => (t = se(t, "card-text"), /* @__PURE__ */ y.jsx(n, {
  ref: i,
  className: Z(e, t),
  ...r
})));
Bl.displayName = "CardText";
const kf = $i("h5"), Ul = /* @__PURE__ */ B.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = kf,
  ...r
}, i) => (t = se(t, "card-title"), /* @__PURE__ */ y.jsx(n, {
  ref: i,
  className: Z(e, t),
  ...r
})));
Ul.displayName = "CardTitle";
const Hl = /* @__PURE__ */ B.forwardRef(({
  bsPrefix: e,
  className: t,
  bg: n,
  text: r,
  border: i,
  body: a = !1,
  children: o,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: l = "div",
  ...s
}, u) => {
  const c = se(e, "card");
  return /* @__PURE__ */ y.jsx(l, {
    ref: u,
    ...s,
    className: Z(t, c, n && `bg-${n}`, r && `text-${r}`, i && `border-${i}`),
    children: a ? /* @__PURE__ */ y.jsx(Vi, {
      children: o
    }) : o
  });
});
Hl.displayName = "Card";
const an = Object.assign(Hl, {
  Img: Dl,
  Title: Ul,
  Subtitle: $l,
  Body: Vi,
  Link: zl,
  Text: Bl,
  Header: Ll,
  Footer: Fl,
  ImgOverlay: Ml
});
function wf(e, t) {
  return B.Children.toArray(e).some((n) => /* @__PURE__ */ B.isValidElement(n) && n.type === t);
}
function Ef({
  as: e,
  bsPrefix: t,
  className: n,
  ...r
}) {
  t = se(t, "col");
  const i = Al(), a = Ol(), o = [], l = [];
  return i.forEach((s) => {
    const u = r[s];
    delete r[s];
    let c, f, d;
    typeof u == "object" && u != null ? {
      span: c,
      offset: f,
      order: d
    } = u : c = u;
    const p = s !== a ? `-${s}` : "";
    c && o.push(c === !0 ? `${t}${p}` : `${t}${p}-${c}`), d != null && l.push(`order${p}-${d}`), f != null && l.push(`offset${p}-${f}`);
  }), [{
    ...r,
    className: Z(n, ...o, ...l)
  }, {
    as: e,
    bsPrefix: t,
    spans: o
  }];
}
const ye = /* @__PURE__ */ B.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  (e, t) => {
    const [{
      className: n,
      ...r
    }, {
      as: i = "div",
      bsPrefix: a,
      spans: o
    }] = Ef(e);
    return /* @__PURE__ */ y.jsx(i, {
      ...r,
      ref: t,
      className: Z(n, !o.length && a)
    });
  }
);
ye.displayName = "Col";
const $e = /* @__PURE__ */ B.forwardRef(({
  bsPrefix: e,
  fluid: t = !1,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: n = "div",
  className: r,
  ...i
}, a) => {
  const o = se(e, "container"), l = typeof t == "string" ? `-${t}` : "-fluid";
  return /* @__PURE__ */ y.jsx(n, {
    ref: a,
    ...i,
    className: Z(r, t ? `${o}${l}` : o)
  });
});
$e.displayName = "Container";
var Cf = Function.prototype.bind.call(Function.prototype.call, [].slice);
function Tt(e, t) {
  return Cf(e.querySelectorAll(t));
}
function Sf() {
  const [, e] = dc((t) => t + 1, 0);
  return e;
}
function Ga(e, t) {
  if (e.contains) return e.contains(t);
  if (e.compareDocumentPosition) return e === t || !!(e.compareDocumentPosition(t) & 16);
}
var Ar, Ka;
function Tf() {
  if (Ka) return Ar;
  Ka = 1;
  var e = process.env.NODE_ENV !== "production", t = function() {
  };
  if (e) {
    var n = function(i, a) {
      var o = arguments.length;
      a = new Array(o > 1 ? o - 1 : 0);
      for (var l = 1; l < o; l++)
        a[l - 1] = arguments[l];
      var s = 0, u = "Warning: " + i.replace(/%s/g, function() {
        return a[s++];
      });
      typeof console < "u" && console.error(u);
      try {
        throw new Error(u);
      } catch {
      }
    };
    t = function(r, i, a) {
      var o = arguments.length;
      a = new Array(o > 2 ? o - 2 : 0);
      for (var l = 2; l < o; l++)
        a[l - 2] = arguments[l];
      if (i === void 0)
        throw new Error(
          "`warning(condition, format, ...args)` requires a warning message argument"
        );
      r || n.apply(null, [i].concat(a));
    };
  }
  return Ar = t, Ar;
}
var Af = Tf();
const Vl = /* @__PURE__ */ vn(Af), Vn = /* @__PURE__ */ B.createContext(null), qi = (e, t = null) => e != null ? String(e) : t || null, Yi = /* @__PURE__ */ B.createContext(null);
Yi.displayName = "NavContext";
const Of = "data-rr-ui-", Nf = "rrUi";
function or(e) {
  return `${Of}${e}`;
}
function If(e) {
  return `${Nf}${e}`;
}
const Wl = /* @__PURE__ */ pc(ir ? window : void 0);
Wl.Provider;
function Gi() {
  return Ce(Wl);
}
const Pf = typeof global < "u" && // @ts-ignore
global.navigator && // @ts-ignore
global.navigator.product === "ReactNative", Rf = typeof document < "u", jf = Rf || Pf ? Cl : _e, Kt = /* @__PURE__ */ B.createContext(null);
Kt.displayName = "NavbarContext";
const _f = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: j.string,
  /** Display feedback as a tooltip. */
  tooltip: j.bool,
  as: j.elementType
}, lr = /* @__PURE__ */ B.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    as: e = "div",
    className: t,
    type: n = "valid",
    tooltip: r = !1,
    ...i
  }, a) => /* @__PURE__ */ y.jsx(e, {
    ...i,
    ref: a,
    className: Z(t, `${n}-${r ? "tooltip" : "feedback"}`)
  })
);
lr.displayName = "Feedback";
lr.propTypes = _f;
const ft = /* @__PURE__ */ B.createContext({}), Ki = /* @__PURE__ */ B.forwardRef(({
  id: e,
  bsPrefix: t,
  className: n,
  type: r = "checkbox",
  isValid: i = !1,
  isInvalid: a = !1,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: o = "input",
  ...l
}, s) => {
  const {
    controlId: u
  } = Ce(ft);
  return t = se(t, "form-check-input"), /* @__PURE__ */ y.jsx(o, {
    ...l,
    ref: s,
    type: r,
    id: e || u,
    className: Z(n, t, i && "is-valid", a && "is-invalid")
  });
});
Ki.displayName = "FormCheckInput";
const Wn = /* @__PURE__ */ B.forwardRef(({
  bsPrefix: e,
  className: t,
  htmlFor: n,
  ...r
}, i) => {
  const {
    controlId: a
  } = Ce(ft);
  return e = se(e, "form-check-label"), /* @__PURE__ */ y.jsx("label", {
    ...r,
    ref: i,
    htmlFor: n || a,
    className: Z(t, e)
  });
});
Wn.displayName = "FormCheckLabel";
const ql = /* @__PURE__ */ B.forwardRef(({
  id: e,
  bsPrefix: t,
  bsSwitchPrefix: n,
  inline: r = !1,
  reverse: i = !1,
  disabled: a = !1,
  isValid: o = !1,
  isInvalid: l = !1,
  feedbackTooltip: s = !1,
  feedback: u,
  feedbackType: c,
  className: f,
  style: d,
  title: p = "",
  type: g = "checkbox",
  label: v,
  children: k,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: b = "input",
  ...A
}, E) => {
  t = se(t, "form-check"), n = se(n, "form-switch");
  const {
    controlId: N
  } = Ce(ft), S = qe(() => ({
    controlId: e || N
  }), [N, e]), w = !k && v != null && v !== !1 || wf(k, Wn), M = /* @__PURE__ */ y.jsx(Ki, {
    ...A,
    type: g === "switch" ? "checkbox" : g,
    ref: E,
    isValid: o,
    isInvalid: l,
    disabled: a,
    as: b
  });
  return /* @__PURE__ */ y.jsx(ft.Provider, {
    value: S,
    children: /* @__PURE__ */ y.jsx("div", {
      style: d,
      className: Z(f, w && t, r && `${t}-inline`, i && `${t}-reverse`, g === "switch" && n),
      children: k || /* @__PURE__ */ y.jsxs(y.Fragment, {
        children: [M, w && /* @__PURE__ */ y.jsx(Wn, {
          title: p,
          children: v
        }), u && /* @__PURE__ */ y.jsx(lr, {
          type: c,
          tooltip: s,
          children: u
        })]
      })
    })
  });
});
ql.displayName = "FormCheck";
const qn = Object.assign(ql, {
  Input: Ki,
  Label: Wn
}), Yl = /* @__PURE__ */ B.forwardRef(({
  bsPrefix: e,
  type: t,
  size: n,
  htmlSize: r,
  id: i,
  className: a,
  isValid: o = !1,
  isInvalid: l = !1,
  plaintext: s,
  readOnly: u,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: c = "input",
  ...f
}, d) => {
  const {
    controlId: p
  } = Ce(ft);
  return e = se(e, "form-control"), process.env.NODE_ENV !== "production" && Vl(p == null || !i, "`controlId` is ignored on `<FormControl>` when `id` is specified."), /* @__PURE__ */ y.jsx(c, {
    ...f,
    type: t,
    size: r,
    ref: d,
    readOnly: u,
    id: i || p,
    className: Z(a, s ? `${e}-plaintext` : e, n && `${e}-${n}`, t === "color" && `${e}-color`, o && "is-valid", l && "is-invalid")
  });
});
Yl.displayName = "FormControl";
const Ff = Object.assign(Yl, {
  Feedback: lr
}), Gl = /* @__PURE__ */ B.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = "div",
  ...r
}, i) => (t = se(t, "form-floating"), /* @__PURE__ */ y.jsx(n, {
  ref: i,
  className: Z(e, t),
  ...r
})));
Gl.displayName = "FormFloating";
const Xi = /* @__PURE__ */ B.forwardRef(({
  controlId: e,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: t = "div",
  ...n
}, r) => {
  const i = qe(() => ({
    controlId: e
  }), [e]);
  return /* @__PURE__ */ y.jsx(ft.Provider, {
    value: i,
    children: /* @__PURE__ */ y.jsx(t, {
      ...n,
      ref: r
    })
  });
});
Xi.displayName = "FormGroup";
const Kl = /* @__PURE__ */ B.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: e = "label",
  bsPrefix: t,
  column: n = !1,
  visuallyHidden: r = !1,
  className: i,
  htmlFor: a,
  ...o
}, l) => {
  const {
    controlId: s
  } = Ce(ft);
  t = se(t, "form-label");
  let u = "col-form-label";
  typeof n == "string" && (u = `${u} ${u}-${n}`);
  const c = Z(i, t, r && "visually-hidden", n && u);
  return process.env.NODE_ENV !== "production" && Vl(s == null || !a, "`controlId` is ignored on `<FormLabel>` when `htmlFor` is specified."), a = a || s, n ? /* @__PURE__ */ y.jsx(ye, {
    ref: l,
    as: "label",
    className: c,
    htmlFor: a,
    ...o
  }) : (
    // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    /* @__PURE__ */ y.jsx(e, {
      ref: l,
      className: c,
      htmlFor: a,
      ...o
    })
  );
});
Kl.displayName = "FormLabel";
const Xl = /* @__PURE__ */ B.forwardRef(({
  bsPrefix: e,
  className: t,
  id: n,
  ...r
}, i) => {
  const {
    controlId: a
  } = Ce(ft);
  return e = se(e, "form-range"), /* @__PURE__ */ y.jsx("input", {
    ...r,
    type: "range",
    ref: i,
    className: Z(t, e),
    id: n || a
  });
});
Xl.displayName = "FormRange";
const Ql = /* @__PURE__ */ B.forwardRef(({
  bsPrefix: e,
  size: t,
  htmlSize: n,
  className: r,
  isValid: i = !1,
  isInvalid: a = !1,
  id: o,
  ...l
}, s) => {
  const {
    controlId: u
  } = Ce(ft);
  return e = se(e, "form-select"), /* @__PURE__ */ y.jsx("select", {
    ...l,
    size: n,
    ref: s,
    className: Z(r, e, t && `${e}-${t}`, i && "is-valid", a && "is-invalid"),
    id: o || u
  });
});
Ql.displayName = "FormSelect";
const Jl = /* @__PURE__ */ B.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    bsPrefix: e,
    className: t,
    as: n = "small",
    muted: r,
    ...i
  }, a) => (e = se(e, "form-text"), /* @__PURE__ */ y.jsx(n, {
    ...i,
    ref: a,
    className: Z(t, e, r && "text-muted")
  }))
);
Jl.displayName = "FormText";
const Zl = /* @__PURE__ */ B.forwardRef((e, t) => /* @__PURE__ */ y.jsx(qn, {
  ...e,
  ref: t,
  type: "switch"
}));
Zl.displayName = "Switch";
const Lf = Object.assign(Zl, {
  Input: qn.Input,
  Label: qn.Label
}), es = /* @__PURE__ */ B.forwardRef(({
  bsPrefix: e,
  className: t,
  children: n,
  controlId: r,
  label: i,
  ...a
}, o) => (e = se(e, "form-floating"), /* @__PURE__ */ y.jsxs(Xi, {
  ref: o,
  className: Z(t, e),
  controlId: r,
  ...a,
  children: [n, /* @__PURE__ */ y.jsx("label", {
    htmlFor: r,
    children: i
  })]
})));
es.displayName = "FloatingLabel";
const Df = {
  /**
   * The Form `ref` will be forwarded to the underlying element,
   * which means, unless it's rendered `as` a composite component,
   * it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias ref
   */
  _ref: j.any,
  /**
   * Mark a form as having been validated. Setting it to `true` will
   * toggle any validation styles on the forms elements.
   */
  validated: j.bool,
  as: j.elementType
}, Qi = /* @__PURE__ */ B.forwardRef(({
  className: e,
  validated: t,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: n = "form",
  ...r
}, i) => /* @__PURE__ */ y.jsx(n, {
  ...r,
  ref: i,
  className: Z(e, t && "was-validated")
}));
Qi.displayName = "Form";
Qi.propTypes = Df;
const Ke = Object.assign(Qi, {
  Group: Xi,
  Control: Ff,
  Floating: Gl,
  Check: qn,
  Switch: Lf,
  Label: Kl,
  Text: Jl,
  Range: Xl,
  Select: Ql,
  FloatingLabel: es
}), Xa = (e) => !e || typeof e == "function" ? e : (t) => {
  e.current = t;
};
function Mf(e, t) {
  const n = Xa(e), r = Xa(t);
  return (i) => {
    n && n(i), r && r(i);
  };
}
function sr(e, t) {
  return qe(() => Mf(e, t), [e, t]);
}
const ts = /* @__PURE__ */ B.createContext(null), zf = ["as", "active", "eventKey"];
function $f(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
function ns({
  key: e,
  onClick: t,
  active: n,
  id: r,
  role: i,
  disabled: a
}) {
  const o = Ce(Vn), l = Ce(Yi), s = Ce(ts);
  let u = n;
  const c = {
    role: i
  };
  if (l) {
    !i && l.role === "tablist" && (c.role = "tab");
    const f = l.getControllerId(e ?? null), d = l.getControlledId(e ?? null);
    c[or("event-key")] = e, c.id = f || r, u = n == null && e != null ? l.activeKey === e : n, (u || !(s != null && s.unmountOnExit) && !(s != null && s.mountOnEnter)) && (c["aria-controls"] = d);
  }
  return c.role === "tab" && (c["aria-selected"] = u, u || (c.tabIndex = -1), a && (c.tabIndex = -1, c["aria-disabled"] = !0)), c.onClick = ut((f) => {
    a || (t == null || t(f), e != null && o && !f.isPropagationStopped() && o(e, f));
  }), [c, {
    isActive: u
  }];
}
const rs = /* @__PURE__ */ B.forwardRef((e, t) => {
  let {
    as: n = jl,
    active: r,
    eventKey: i
  } = e, a = $f(e, zf);
  const [o, l] = ns(Object.assign({
    key: qi(i, a.href),
    active: r
  }, a));
  return o[or("active")] = l.isActive, /* @__PURE__ */ y.jsx(n, Object.assign({}, a, o, {
    ref: t
  }));
});
rs.displayName = "NavItem";
const Bf = ["as", "onSelect", "activeKey", "role", "onKeyDown"];
function Uf(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
const Qa = () => {
}, Ja = or("event-key"), is = /* @__PURE__ */ B.forwardRef((e, t) => {
  let {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: n = "div",
    onSelect: r,
    activeKey: i,
    role: a,
    onKeyDown: o
  } = e, l = Uf(e, Bf);
  const s = Sf(), u = Ae(!1), c = Ce(Vn), f = Ce(ts);
  let d, p;
  f && (a = a || "tablist", i = f.activeKey, d = f.getControlledId, p = f.getControllerId);
  const g = Ae(null), v = (E) => {
    const N = g.current;
    if (!N) return null;
    const S = Tt(N, `[${Ja}]:not([aria-disabled=true])`), w = N.querySelector("[aria-selected=true]");
    if (!w || w !== document.activeElement) return null;
    const M = S.indexOf(w);
    if (M === -1) return null;
    let Q = M + E;
    return Q >= S.length && (Q = 0), Q < 0 && (Q = S.length - 1), S[Q];
  }, k = (E, N) => {
    E != null && (r == null || r(E, N), c == null || c(E, N));
  }, b = (E) => {
    if (o == null || o(E), !f)
      return;
    let N;
    switch (E.key) {
      case "ArrowLeft":
      case "ArrowUp":
        N = v(-1);
        break;
      case "ArrowRight":
      case "ArrowDown":
        N = v(1);
        break;
      default:
        return;
    }
    N && (E.preventDefault(), k(N.dataset[If("EventKey")] || null, E), u.current = !0, s());
  };
  _e(() => {
    if (g.current && u.current) {
      const E = g.current.querySelector(`[${Ja}][aria-selected=true]`);
      E == null || E.focus();
    }
    u.current = !1;
  });
  const A = sr(t, g);
  return /* @__PURE__ */ y.jsx(Vn.Provider, {
    value: k,
    children: /* @__PURE__ */ y.jsx(Yi.Provider, {
      value: {
        role: a,
        // used by NavLink to determine it's role
        activeKey: qi(i),
        getControlledId: d || Qa,
        getControllerId: p || Qa
      },
      children: /* @__PURE__ */ y.jsx(n, Object.assign({}, l, {
        onKeyDown: b,
        ref: A,
        role: a
      }))
    })
  });
});
is.displayName = "Nav";
const Hf = Object.assign(is, {
  Item: rs
});
function Or(e) {
  e === void 0 && (e = Li());
  try {
    var t = e.activeElement;
    return !t || !t.nodeName ? null : t;
  } catch {
    return e.body;
  }
}
function Vf(e) {
  const t = Ae(e);
  return t.current = e, t;
}
function Wf(e) {
  const t = Vf(e);
  _e(() => () => t.current(), []);
}
function qf(e = document) {
  const t = e.defaultView;
  return Math.abs(t.innerWidth - e.documentElement.clientWidth);
}
const Za = or("modal-open");
class Ji {
  constructor({
    ownerDocument: t,
    handleContainerOverflow: n = !0,
    isRTL: r = !1
  } = {}) {
    this.handleContainerOverflow = n, this.isRTL = r, this.modals = [], this.ownerDocument = t;
  }
  getScrollbarWidth() {
    return qf(this.ownerDocument);
  }
  getElement() {
    return (this.ownerDocument || document).body;
  }
  setModalAttributes(t) {
  }
  removeModalAttributes(t) {
  }
  setContainerStyle(t) {
    const n = {
      overflow: "hidden"
    }, r = this.isRTL ? "paddingLeft" : "paddingRight", i = this.getElement();
    t.style = {
      overflow: i.style.overflow,
      [r]: i.style[r]
    }, t.scrollBarWidth && (n[r] = `${parseInt(ct(i, r) || "0", 10) + t.scrollBarWidth}px`), i.setAttribute(Za, ""), ct(i, n);
  }
  reset() {
    [...this.modals].forEach((t) => this.remove(t));
  }
  removeContainerStyle(t) {
    const n = this.getElement();
    n.removeAttribute(Za), Object.assign(n.style, t.style);
  }
  add(t) {
    let n = this.modals.indexOf(t);
    return n !== -1 || (n = this.modals.length, this.modals.push(t), this.setModalAttributes(t), n !== 0) || (this.state = {
      scrollBarWidth: this.getScrollbarWidth(),
      style: {}
    }, this.handleContainerOverflow && this.setContainerStyle(this.state)), n;
  }
  remove(t) {
    const n = this.modals.indexOf(t);
    n !== -1 && (this.modals.splice(n, 1), !this.modals.length && this.handleContainerOverflow && this.removeContainerStyle(this.state), this.removeModalAttributes(t));
  }
  isTopModal(t) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === t;
  }
}
const Nr = (e, t) => ir ? e == null ? (t || Li()).body : (typeof e == "function" && (e = e()), e && "current" in e && (e = e.current), e && ("nodeType" in e || e.getBoundingClientRect) ? e : null) : null;
function Yf(e, t) {
  const n = Gi(), [r, i] = Qe(() => Nr(e, n == null ? void 0 : n.document));
  if (!r) {
    const a = Nr(e);
    a && i(a);
  }
  return _e(() => {
  }, [t, r]), _e(() => {
    const a = Nr(e);
    a !== r && i(a);
  }, [e, r]), r;
}
function Gf({
  children: e,
  in: t,
  onExited: n,
  mountOnEnter: r,
  unmountOnExit: i
}) {
  const a = Ae(null), o = Ae(t), l = ut(n);
  _e(() => {
    t ? o.current = !0 : l(a.current);
  }, [t, l]);
  const s = sr(a, Gt(e)), u = /* @__PURE__ */ Fi(e, {
    ref: s
  });
  return t ? u : i || !o.current && r ? null : u;
}
const Kf = ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "addEndListener", "children"];
function Xf(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
function Qf(e) {
  let {
    onEnter: t,
    onEntering: n,
    onEntered: r,
    onExit: i,
    onExiting: a,
    onExited: o,
    addEndListener: l,
    children: s
  } = e, u = Xf(e, Kf);
  const c = Ae(null), f = sr(c, Gt(s)), d = (N) => (S) => {
    N && c.current && N(c.current, S);
  }, p = Ee(d(t), [t]), g = Ee(d(n), [n]), v = Ee(d(r), [r]), k = Ee(d(i), [i]), b = Ee(d(a), [a]), A = Ee(d(o), [o]), E = Ee(d(l), [l]);
  return Object.assign({}, u, {
    nodeRef: c
  }, t && {
    onEnter: p
  }, n && {
    onEntering: g
  }, r && {
    onEntered: v
  }, i && {
    onExit: k
  }, a && {
    onExiting: b
  }, o && {
    onExited: A
  }, l && {
    addEndListener: E
  }, {
    children: typeof s == "function" ? (N, S) => (
      // TODO: Types for RTG missing innerProps, so need to cast.
      s(N, Object.assign({}, S, {
        ref: f
      }))
    ) : /* @__PURE__ */ Fi(s, {
      ref: f
    })
  });
}
const Jf = ["component"];
function Zf(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
const ed = /* @__PURE__ */ B.forwardRef((e, t) => {
  let {
    component: n
  } = e, r = Zf(e, Jf);
  const i = Qf(r);
  return /* @__PURE__ */ y.jsx(n, Object.assign({
    ref: t
  }, i));
});
function td({
  in: e,
  onTransition: t
}) {
  const n = Ae(null), r = Ae(!0), i = ut(t);
  return Ya(() => {
    if (!n.current)
      return;
    let a = !1;
    return i({
      in: e,
      element: n.current,
      initial: r.current,
      isStale: () => a
    }), () => {
      a = !0;
    };
  }, [e, i]), Ya(() => (r.current = !1, () => {
    r.current = !0;
  }), []), n;
}
function nd({
  children: e,
  in: t,
  onExited: n,
  onEntered: r,
  transition: i
}) {
  const [a, o] = Qe(!t);
  t && a && o(!1);
  const l = td({
    in: !!t,
    onTransition: (u) => {
      const c = () => {
        u.isStale() || (u.in ? r == null || r(u.element, u.initial) : (o(!0), n == null || n(u.element)));
      };
      Promise.resolve(i(u)).then(c, (f) => {
        throw u.in || o(!0), f;
      });
    }
  }), s = sr(l, Gt(e));
  return a && !t ? null : /* @__PURE__ */ Fi(e, {
    ref: s
  });
}
function eo(e, t, n) {
  return e ? /* @__PURE__ */ y.jsx(ed, Object.assign({}, n, {
    component: e
  })) : t ? /* @__PURE__ */ y.jsx(nd, Object.assign({}, n, {
    transition: t
  })) : /* @__PURE__ */ y.jsx(Gf, Object.assign({}, n));
}
const rd = ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "runTransition", "backdropTransition", "runBackdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"];
function id(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
let Ir;
function ad(e) {
  return Ir || (Ir = new Ji({
    ownerDocument: e == null ? void 0 : e.document
  })), Ir;
}
function od(e) {
  const t = Gi(), n = e || ad(t), r = Ae({
    dialog: null,
    backdrop: null
  });
  return Object.assign(r.current, {
    add: () => n.add(r.current),
    remove: () => n.remove(r.current),
    isTopModal: () => n.isTopModal(r.current),
    setDialogRef: Ee((i) => {
      r.current.dialog = i;
    }, []),
    setBackdropRef: Ee((i) => {
      r.current.backdrop = i;
    }, [])
  });
}
const as = /* @__PURE__ */ hc((e, t) => {
  let {
    show: n = !1,
    role: r = "dialog",
    className: i,
    style: a,
    children: o,
    backdrop: l = !0,
    keyboard: s = !0,
    onBackdropClick: u,
    onEscapeKeyDown: c,
    transition: f,
    runTransition: d,
    backdropTransition: p,
    runBackdropTransition: g,
    autoFocus: v = !0,
    enforceFocus: k = !0,
    restoreFocus: b = !0,
    restoreFocusOptions: A,
    renderDialog: E,
    renderBackdrop: N = (he) => /* @__PURE__ */ y.jsx("div", Object.assign({}, he)),
    manager: S,
    container: w,
    onShow: M,
    onHide: Q = () => {
    },
    onExit: ne,
    onExited: C,
    onExiting: D,
    onEnter: $,
    onEntering: z,
    onEntered: F
  } = e, q = id(e, rd);
  const ae = Gi(), ce = Yf(w), fe = od(S), ve = sf(), h = uf(n), [R, G] = Qe(!n), m = Ae(null);
  mc(t, () => fe, [fe]), ir && !h && n && (m.current = Or(ae == null ? void 0 : ae.document)), n && R && G(!1);
  const L = ut(() => {
    if (fe.add(), te.current = Hn(document, "keydown", ee), re.current = Hn(
      document,
      "focus",
      // the timeout is necessary b/c this will run before the new modal is mounted
      // and so steals focus from it
      () => setTimeout(V),
      !0
    ), M && M(), v) {
      var he, Ct;
      const ot = Or((he = (Ct = fe.dialog) == null ? void 0 : Ct.ownerDocument) != null ? he : ae == null ? void 0 : ae.document);
      fe.dialog && ot && !Ga(fe.dialog, ot) && (m.current = ot, fe.dialog.focus());
    }
  }), X = ut(() => {
    if (fe.remove(), te.current == null || te.current(), re.current == null || re.current(), b) {
      var he;
      (he = m.current) == null || he.focus == null || he.focus(A), m.current = null;
    }
  });
  _e(() => {
    !n || !ce || L();
  }, [
    n,
    ce,
    /* should never change: */
    L
  ]), _e(() => {
    R && X();
  }, [R, X]), Wf(() => {
    X();
  });
  const V = ut(() => {
    if (!k || !ve() || !fe.isTopModal())
      return;
    const he = Or(ae == null ? void 0 : ae.document);
    fe.dialog && he && !Ga(fe.dialog, he) && fe.dialog.focus();
  }), J = ut((he) => {
    he.target === he.currentTarget && (u == null || u(he), l === !0 && Q());
  }), ee = ut((he) => {
    s && Vc(he) && fe.isTopModal() && (c == null || c(he), he.defaultPrevented || Q());
  }), re = Ae(), te = Ae(), we = (...he) => {
    G(!0), C == null || C(...he);
  };
  if (!ce)
    return null;
  const _ = Object.assign({
    role: r,
    ref: fe.setDialogRef,
    // apparently only works on the dialog role element
    "aria-modal": r === "dialog" ? !0 : void 0
  }, q, {
    style: a,
    className: i,
    tabIndex: -1
  });
  let Oe = E ? E(_) : /* @__PURE__ */ y.jsx("div", Object.assign({}, _, {
    children: /* @__PURE__ */ B.cloneElement(o, {
      role: "document"
    })
  }));
  Oe = eo(f, d, {
    unmountOnExit: !0,
    mountOnEnter: !0,
    appear: !0,
    in: !!n,
    onExit: ne,
    onExiting: D,
    onExited: we,
    onEnter: $,
    onEntering: z,
    onEntered: F,
    children: Oe
  });
  let De = null;
  return l && (De = N({
    ref: fe.setBackdropRef,
    onClick: J
  }), De = eo(p, g, {
    in: !!n,
    appear: !0,
    mountOnEnter: !0,
    unmountOnExit: !0,
    children: De
  })), /* @__PURE__ */ y.jsx(y.Fragment, {
    children: /* @__PURE__ */ Bt.createPortal(/* @__PURE__ */ y.jsxs(y.Fragment, {
      children: [De, Oe]
    }), ce)
  });
});
as.displayName = "Modal";
const ld = Object.assign(as, {
  Manager: Ji
});
function sd(e, t) {
  return e.classList ? e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
function ud(e, t) {
  e.classList ? e.classList.add(t) : sd(e, t) || (typeof e.className == "string" ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t));
}
function to(e, t) {
  return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function cd(e, t) {
  e.classList ? e.classList.remove(t) : typeof e.className == "string" ? e.className = to(e.className, t) : e.setAttribute("class", to(e.className && e.className.baseVal || "", t));
}
const Ft = {
  FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  STICKY_CONTENT: ".sticky-top",
  NAVBAR_TOGGLER: ".navbar-toggler"
};
class os extends Ji {
  adjustAndStore(t, n, r) {
    const i = n.style[t];
    n.dataset[t] = i, ct(n, {
      [t]: `${parseFloat(ct(n, t)) + r}px`
    });
  }
  restore(t, n) {
    const r = n.dataset[t];
    r !== void 0 && (delete n.dataset[t], ct(n, {
      [t]: r
    }));
  }
  setContainerStyle(t) {
    super.setContainerStyle(t);
    const n = this.getElement();
    if (ud(n, "modal-open"), !t.scrollBarWidth) return;
    const r = this.isRTL ? "paddingLeft" : "paddingRight", i = this.isRTL ? "marginLeft" : "marginRight";
    Tt(n, Ft.FIXED_CONTENT).forEach((a) => this.adjustAndStore(r, a, t.scrollBarWidth)), Tt(n, Ft.STICKY_CONTENT).forEach((a) => this.adjustAndStore(i, a, -t.scrollBarWidth)), Tt(n, Ft.NAVBAR_TOGGLER).forEach((a) => this.adjustAndStore(i, a, t.scrollBarWidth));
  }
  removeContainerStyle(t) {
    super.removeContainerStyle(t);
    const n = this.getElement();
    cd(n, "modal-open");
    const r = this.isRTL ? "paddingLeft" : "paddingRight", i = this.isRTL ? "marginLeft" : "marginRight";
    Tt(n, Ft.FIXED_CONTENT).forEach((a) => this.restore(r, a)), Tt(n, Ft.STICKY_CONTENT).forEach((a) => this.restore(i, a)), Tt(n, Ft.NAVBAR_TOGGLER).forEach((a) => this.restore(i, a));
  }
}
let Pr;
function fd(e) {
  return Pr || (Pr = new os(e)), Pr;
}
const ls = /* @__PURE__ */ B.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onHide() {
  }
}), dd = /* @__PURE__ */ B.forwardRef(({
  closeLabel: e = "Close",
  closeVariant: t,
  closeButton: n = !1,
  onHide: r,
  children: i,
  ...a
}, o) => {
  const l = Ce(ls), s = ar(() => {
    l == null || l.onHide(), r == null || r();
  });
  return /* @__PURE__ */ y.jsxs("div", {
    ref: o,
    ...a,
    children: [i, n && /* @__PURE__ */ y.jsx(Hi, {
      "aria-label": e,
      variant: t,
      onClick: s
    })]
  });
}), ss = /* @__PURE__ */ B.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = "div",
  ...r
}, i) => (t = se(t, "nav-item"), /* @__PURE__ */ y.jsx(n, {
  ref: i,
  className: Z(e, t),
  ...r
})));
ss.displayName = "NavItem";
const us = /* @__PURE__ */ B.forwardRef(({
  bsPrefix: e,
  className: t,
  as: n = Ui,
  active: r,
  eventKey: i,
  disabled: a = !1,
  ...o
}, l) => {
  e = se(e, "nav-link");
  const [s, u] = ns({
    key: qi(i, o.href),
    active: r,
    disabled: a,
    ...o
  });
  return /* @__PURE__ */ y.jsx(n, {
    ...o,
    ...s,
    ref: l,
    disabled: a,
    className: Z(t, e, a && "disabled", u.isActive && "active")
  });
});
us.displayName = "NavLink";
const cs = /* @__PURE__ */ B.forwardRef((e, t) => {
  const {
    as: n = "div",
    bsPrefix: r,
    variant: i,
    fill: a = !1,
    justify: o = !1,
    navbar: l,
    navbarScroll: s,
    className: u,
    activeKey: c,
    ...f
  } = Tl(e, {
    activeKey: "onSelect"
  }), d = se(r, "nav");
  let p, g, v = !1;
  const k = Ce(Kt), b = Ce(Wi);
  return k ? (p = k.bsPrefix, v = l ?? !0) : b && ({
    cardHeaderBsPrefix: g
  } = b), /* @__PURE__ */ y.jsx(Hf, {
    as: n,
    ref: t,
    activeKey: c,
    className: Z(u, {
      [d]: !v,
      [`${p}-nav`]: v,
      [`${p}-nav-scroll`]: v && s,
      [`${g}-${i}`]: !!g,
      [`${d}-${i}`]: !!i,
      [`${d}-fill`]: a,
      [`${d}-justified`]: o
    }),
    ...f
  });
});
cs.displayName = "Nav";
const Lt = Object.assign(cs, {
  Item: ss,
  Link: us
}), fs = /* @__PURE__ */ B.forwardRef(({
  bsPrefix: e,
  className: t,
  as: n,
  ...r
}, i) => {
  e = se(e, "navbar-brand");
  const a = n || (r.href ? "a" : "span");
  return /* @__PURE__ */ y.jsx(a, {
    ...r,
    ref: i,
    className: Z(t, e)
  });
});
fs.displayName = "NavbarBrand";
const ds = /* @__PURE__ */ B.forwardRef(({
  children: e,
  bsPrefix: t,
  ...n
}, r) => {
  t = se(t, "navbar-collapse");
  const i = Ce(Kt);
  return /* @__PURE__ */ y.jsx(af, {
    in: !!(i && i.expanded),
    ...n,
    children: /* @__PURE__ */ y.jsx("div", {
      ref: r,
      className: t,
      children: e
    })
  });
});
ds.displayName = "NavbarCollapse";
const ps = /* @__PURE__ */ B.forwardRef(({
  bsPrefix: e,
  className: t,
  children: n,
  label: r = "Toggle navigation",
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: i = "button",
  onClick: a,
  ...o
}, l) => {
  e = se(e, "navbar-toggler");
  const {
    onToggle: s,
    expanded: u
  } = Ce(Kt) || {}, c = ar((f) => {
    a && a(f), s && s();
  });
  return i === "button" && (o.type = "button"), /* @__PURE__ */ y.jsx(i, {
    ...o,
    ref: l,
    onClick: c,
    "aria-label": r,
    className: Z(t, e, !u && "collapsed"),
    children: n || /* @__PURE__ */ y.jsx("span", {
      className: `${e}-icon`
    })
  });
});
ps.displayName = "NavbarToggle";
const ai = /* @__PURE__ */ new WeakMap(), no = (e, t) => {
  if (!e || !t) return;
  const n = ai.get(t) || /* @__PURE__ */ new Map();
  ai.set(t, n);
  let r = n.get(e);
  return r || (r = t.matchMedia(e), r.refCount = 0, n.set(r.media, r)), r;
};
function pd(e, t = typeof window > "u" ? void 0 : window) {
  const n = no(e, t), [r, i] = Qe(() => n ? n.matches : !1);
  return jf(() => {
    let a = no(e, t);
    if (!a)
      return i(!1);
    let o = ai.get(t);
    const l = () => {
      i(a.matches);
    };
    return a.refCount++, a.addListener(l), l(), () => {
      a.removeListener(l), a.refCount--, a.refCount <= 0 && (o == null || o.delete(a.media)), a = void 0;
    };
  }, [e]), r;
}
function hd(e) {
  const t = Object.keys(e);
  function n(l, s) {
    return l === s ? s : l ? `${l} and ${s}` : s;
  }
  function r(l) {
    return t[Math.min(t.indexOf(l) + 1, t.length - 1)];
  }
  function i(l) {
    const s = r(l);
    let u = e[s];
    return typeof u == "number" ? u = `${u - 0.2}px` : u = `calc(${u} - 0.2px)`, `(max-width: ${u})`;
  }
  function a(l) {
    let s = e[l];
    return typeof s == "number" && (s = `${s}px`), `(min-width: ${s})`;
  }
  function o(l, s, u) {
    let c;
    typeof l == "object" ? (c = l, u = s, s = !0) : (s = s || !0, c = {
      [l]: s
    });
    let f = qe(() => Object.entries(c).reduce((d, [p, g]) => ((g === "up" || g === !0) && (d = n(d, a(p))), (g === "down" || g === !0) && (d = n(d, i(p))), d), ""), [JSON.stringify(c)]);
    return pd(f, u);
  }
  return o;
}
const md = hd({
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
}), hs = /* @__PURE__ */ B.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = "div",
  ...r
}, i) => (t = se(t, "offcanvas-body"), /* @__PURE__ */ y.jsx(n, {
  ref: i,
  className: Z(e, t),
  ...r
})));
hs.displayName = "OffcanvasBody";
const gd = {
  [Je]: "show",
  [st]: "show"
}, ms = /* @__PURE__ */ B.forwardRef(({
  bsPrefix: e,
  className: t,
  children: n,
  in: r = !1,
  mountOnEnter: i = !1,
  unmountOnExit: a = !1,
  appear: o = !1,
  ...l
}, s) => (e = se(e, "offcanvas"), /* @__PURE__ */ y.jsx(zi, {
  ref: s,
  addEndListener: Mi,
  in: r,
  mountOnEnter: i,
  unmountOnExit: a,
  appear: o,
  ...l,
  childRef: Gt(n),
  children: (u, c) => /* @__PURE__ */ B.cloneElement(n, {
    ...c,
    className: Z(t, n.props.className, (u === Je || u === mn) && `${e}-toggling`, gd[u])
  })
})));
ms.displayName = "OffcanvasToggling";
const gs = /* @__PURE__ */ B.forwardRef(({
  bsPrefix: e,
  className: t,
  closeLabel: n = "Close",
  closeButton: r = !1,
  ...i
}, a) => (e = se(e, "offcanvas-header"), /* @__PURE__ */ y.jsx(dd, {
  ref: a,
  ...i,
  className: Z(t, e),
  closeLabel: n,
  closeButton: r
})));
gs.displayName = "OffcanvasHeader";
const yd = $i("h5"), ys = /* @__PURE__ */ B.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = yd,
  ...r
}, i) => (t = se(t, "offcanvas-title"), /* @__PURE__ */ y.jsx(n, {
  ref: i,
  className: Z(e, t),
  ...r
})));
ys.displayName = "OffcanvasTitle";
function xd(e) {
  return /* @__PURE__ */ y.jsx(ms, {
    ...e
  });
}
function bd(e) {
  return /* @__PURE__ */ y.jsx(_l, {
    ...e
  });
}
const xs = /* @__PURE__ */ B.forwardRef(({
  bsPrefix: e,
  className: t,
  children: n,
  "aria-labelledby": r,
  placement: i = "start",
  responsive: a,
  /* BaseModal props */
  show: o = !1,
  backdrop: l = !0,
  keyboard: s = !0,
  scroll: u = !1,
  onEscapeKeyDown: c,
  onShow: f,
  onHide: d,
  container: p,
  autoFocus: g = !0,
  enforceFocus: v = !0,
  restoreFocus: k = !0,
  restoreFocusOptions: b,
  onEntered: A,
  onExit: E,
  onExiting: N,
  onEnter: S,
  onEntering: w,
  onExited: M,
  backdropClassName: Q,
  manager: ne,
  renderStaticNode: C = !1,
  ...D
}, $) => {
  const z = Ae();
  e = se(e, "offcanvas");
  const [F, q] = Qe(!1), ae = ar(d), ce = md(a || "xs", "up");
  _e(() => {
    q(a ? o && !ce : o);
  }, [o, a, ce]);
  const fe = qe(() => ({
    onHide: ae
  }), [ae]);
  function ve() {
    return ne || (u ? (z.current || (z.current = new os({
      handleContainerOverflow: !1
    })), z.current) : fd());
  }
  const h = (L, ...X) => {
    L && (L.style.visibility = "visible"), S == null || S(L, ...X);
  }, R = (L, ...X) => {
    L && (L.style.visibility = ""), M == null || M(...X);
  }, G = Ee((L) => /* @__PURE__ */ y.jsx("div", {
    ...L,
    className: Z(`${e}-backdrop`, Q)
  }), [Q, e]), m = (L) => /* @__PURE__ */ y.jsx("div", {
    ...L,
    ...D,
    className: Z(t, a ? `${e}-${a}` : e, `${e}-${i}`),
    "aria-labelledby": r,
    children: n
  });
  return /* @__PURE__ */ y.jsxs(y.Fragment, {
    children: [!F && (a || C) && m({}), /* @__PURE__ */ y.jsx(ls.Provider, {
      value: fe,
      children: /* @__PURE__ */ y.jsx(ld, {
        show: F,
        ref: $,
        backdrop: l,
        container: p,
        keyboard: s,
        autoFocus: g,
        enforceFocus: v && !u,
        restoreFocus: k,
        restoreFocusOptions: b,
        onEscapeKeyDown: c,
        onShow: f,
        onHide: ae,
        onEnter: h,
        onEntering: w,
        onEntered: A,
        onExit: E,
        onExiting: N,
        onExited: R,
        manager: ve(),
        transition: xd,
        backdropTransition: bd,
        renderBackdrop: G,
        renderDialog: m
      })
    })]
  });
});
xs.displayName = "Offcanvas";
const vd = Object.assign(xs, {
  Body: hs,
  Header: gs,
  Title: ys
}), bs = /* @__PURE__ */ B.forwardRef(({
  onHide: e,
  ...t
}, n) => {
  const r = Ce(Kt), i = ar(() => {
    r == null || r.onToggle == null || r.onToggle(), e == null || e();
  });
  return /* @__PURE__ */ y.jsx(vd, {
    ref: n,
    show: !!(r != null && r.expanded),
    ...t,
    renderStaticNode: !0,
    onHide: i
  });
});
bs.displayName = "NavbarOffcanvas";
const vs = /* @__PURE__ */ B.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = "span",
  ...r
}, i) => (t = se(t, "navbar-text"), /* @__PURE__ */ y.jsx(n, {
  ref: i,
  className: Z(e, t),
  ...r
})));
vs.displayName = "NavbarText";
const ks = /* @__PURE__ */ B.forwardRef((e, t) => {
  const {
    bsPrefix: n,
    expand: r = !0,
    variant: i = "light",
    bg: a,
    fixed: o,
    sticky: l,
    className: s,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: u = "nav",
    expanded: c,
    onToggle: f,
    onSelect: d,
    collapseOnSelect: p = !1,
    ...g
  } = Tl(e, {
    expanded: "onToggle"
  }), v = se(n, "navbar"), k = Ee((...E) => {
    d == null || d(...E), p && c && (f == null || f(!1));
  }, [d, p, c, f]);
  g.role === void 0 && u !== "nav" && (g.role = "navigation");
  let b = `${v}-expand`;
  typeof r == "string" && (b = `${b}-${r}`);
  const A = qe(() => ({
    onToggle: () => f == null ? void 0 : f(!c),
    bsPrefix: v,
    expanded: !!c,
    expand: r
  }), [v, c, r, f]);
  return /* @__PURE__ */ y.jsx(Kt.Provider, {
    value: A,
    children: /* @__PURE__ */ y.jsx(Vn.Provider, {
      value: k,
      children: /* @__PURE__ */ y.jsx(u, {
        ref: t,
        ...g,
        className: Z(s, v, r && b, i && `${v}-${i}`, a && `bg-${a}`, l && `sticky-${l}`, o && `fixed-${o}`)
      })
    })
  });
});
ks.displayName = "Navbar";
const jn = Object.assign(ks, {
  Brand: fs,
  Collapse: ds,
  Offcanvas: bs,
  Text: vs,
  Toggle: ps
}), Zi = /* @__PURE__ */ B.forwardRef(({
  active: e = !1,
  disabled: t = !1,
  className: n,
  style: r,
  activeLabel: i = "(current)",
  children: a,
  linkStyle: o,
  linkClassName: l,
  as: s = Ui,
  ...u
}, c) => {
  const f = e || t ? "span" : s;
  return /* @__PURE__ */ y.jsx("li", {
    ref: c,
    style: r,
    className: Z(n, "page-item", {
      active: e,
      disabled: t
    }),
    children: /* @__PURE__ */ y.jsxs(f, {
      className: Z("page-link", l),
      style: o,
      ...u,
      children: [a, e && i && /* @__PURE__ */ y.jsx("span", {
        className: "visually-hidden",
        children: i
      })]
    })
  });
});
Zi.displayName = "PageItem";
function wn(e, t, n = e) {
  const r = /* @__PURE__ */ B.forwardRef(({
    children: i,
    ...a
  }, o) => /* @__PURE__ */ y.jsxs(Zi, {
    ...a,
    ref: o,
    children: [/* @__PURE__ */ y.jsx("span", {
      "aria-hidden": "true",
      children: i || t
    }), /* @__PURE__ */ y.jsx("span", {
      className: "visually-hidden",
      children: n
    })]
  }));
  return r.displayName = e, r;
}
const kd = wn("First", "«"), wd = wn("Prev", "‹", "Previous"), Ed = wn("Ellipsis", "…", "More"), Cd = wn("Next", "›"), Sd = wn("Last", "»"), ws = /* @__PURE__ */ B.forwardRef(({
  bsPrefix: e,
  className: t,
  size: n,
  ...r
}, i) => {
  const a = se(e, "pagination");
  return /* @__PURE__ */ y.jsx("ul", {
    ref: i,
    ...r,
    className: Z(t, a, n && `${a}-${n}`)
  });
});
ws.displayName = "Pagination";
const Dt = Object.assign(ws, {
  First: kd,
  Prev: wd,
  Ellipsis: Ed,
  Item: Zi,
  Next: Cd,
  Last: Sd
}), Te = /* @__PURE__ */ B.forwardRef(({
  bsPrefix: e,
  className: t,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: n = "div",
  ...r
}, i) => {
  const a = se(e, "row"), o = Al(), l = Ol(), s = `${a}-cols`, u = [];
  return o.forEach((c) => {
    const f = r[c];
    delete r[c];
    let d;
    f != null && typeof f == "object" ? {
      cols: d
    } = f : d = f;
    const p = c !== l ? `-${c}` : "";
    d != null && u.push(`${s}${p}-${d}`);
  }), /* @__PURE__ */ y.jsx(n, {
    ref: i,
    ...r,
    className: Z(t, a, ...u)
  });
});
Te.displayName = "Row";
const Rv = ({ image_link: e }) => /* @__PURE__ */ y.jsx($e, { children: /* @__PURE__ */ y.jsx(Te, { className: "rounded background-color-body mt-3 p-2", children: /* @__PURE__ */ y.jsx(ye, { className: "text-center article-image-container m-2 rounded", children: /* @__PURE__ */ y.jsx("img", { src: e, className: "img-fluid rounded p-2", alt: "Article" }) }) }) }), jv = ({ children: e }) => /* @__PURE__ */ y.jsx("div", { className: "custom-body", children: /* @__PURE__ */ y.jsx($e, { children: /* @__PURE__ */ y.jsx(Te, { children: /* @__PURE__ */ y.jsx(ye, { children: e }) }) }) }), _v = () => {
  const [e, t] = Qe(!1), [n, r] = Qe(!1), i = (/* @__PURE__ */ new Date()).getFullYear(), a = async (o) => {
    o.preventDefault();
    const l = o.currentTarget;
    if (l.checkValidity() === !1) {
      console.log("Form is invalid"), o.preventDefault(), o.stopPropagation(), r(!0);
      return;
    }
    const s = new FormData(l), u = {};
    s.forEach((c, f) => {
      u[f] = c.toString();
    });
    try {
      const c = await fetch("https://meabhi.me/message/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(u)
      });
      if (c.ok) {
        const f = await c.json();
        console.log("Form submitted successfully:", f), t(!0), r(!1), setTimeout(() => {
          l.reset(), t(!1);
        }, 2e3);
      } else
        throw new Error("Network response was not ok");
    } catch (c) {
      console.error("Error submitting form:", c);
    }
  };
  return /* @__PURE__ */ y.jsx($e, { fluid: !0, className: "footer-header-color ", children: /* @__PURE__ */ y.jsxs(Ke, { noValidate: !0, validated: n, onSubmit: a, children: [
    /* @__PURE__ */ y.jsx(Te, { id: "contact", className: "text-center", children: /* @__PURE__ */ y.jsx(ye, { className: "text-center", children: /* @__PURE__ */ y.jsx("h1", { className: "bio-font font-color-class heading-responsive-font p-2 mt-3", children: "Contact Me" }) }) }),
    /* @__PURE__ */ y.jsxs(Te, { id: "contact", className: "text-center p-2", children: [
      /* @__PURE__ */ y.jsx(ye, { xs: 12, sm: 12, md: 4 }),
      /* @__PURE__ */ y.jsx(ye, { xs: 12, sm: 12, md: 4, children: /* @__PURE__ */ y.jsxs(Ke.Group, { controlId: "validationName", children: [
        /* @__PURE__ */ y.jsx(
          Ke.Control,
          {
            required: !0,
            type: "text",
            name: "name",
            placeholder: "Name",
            className: "me-2 custom-border form-control custom-placeholder"
          }
        ),
        /* @__PURE__ */ y.jsx(Ke.Control.Feedback, { type: "invalid", children: "Please provide your name." })
      ] }) }),
      /* @__PURE__ */ y.jsx(ye, { xs: 12, sm: 12, md: 4 })
    ] }),
    /* @__PURE__ */ y.jsxs(Te, { id: "contact", className: "text-center p-2", children: [
      /* @__PURE__ */ y.jsx(ye, { xs: 12, sm: 12, md: 4 }),
      /* @__PURE__ */ y.jsx(ye, { xs: 12, sm: 12, md: 4, children: /* @__PURE__ */ y.jsxs(Ke.Group, { controlId: "validationEmail", children: [
        /* @__PURE__ */ y.jsx(
          Ke.Control,
          {
            required: !0,
            type: "email",
            name: "email",
            placeholder: "Email",
            className: "me-2 custom-border form-control custom-placeholder"
          }
        ),
        /* @__PURE__ */ y.jsx(Ke.Control.Feedback, { type: "invalid", children: "Please provide a valid email." })
      ] }) }),
      /* @__PURE__ */ y.jsx(ye, { xs: 12, sm: 12, md: 4 })
    ] }),
    /* @__PURE__ */ y.jsxs(Te, { id: "contact", className: "text-center p-2", children: [
      /* @__PURE__ */ y.jsx(ye, { xs: 12, sm: 12, md: 4 }),
      /* @__PURE__ */ y.jsx(ye, { xs: 12, sm: 12, md: 4, children: /* @__PURE__ */ y.jsxs(Ke.Group, { controlId: "validationMessage", children: [
        /* @__PURE__ */ y.jsx(
          Ke.Control,
          {
            required: !0,
            as: "textarea",
            name: "message",
            placeholder: "Message",
            className: "me-2 custom-border form-control custom-placeholder message-inp"
          }
        ),
        /* @__PURE__ */ y.jsx(Ke.Control.Feedback, { type: "invalid", children: "Please enter a message." })
      ] }) }),
      /* @__PURE__ */ y.jsx(ye, { xs: 12, sm: 12, md: 4 })
    ] }),
    /* @__PURE__ */ y.jsx(Te, { id: "contact", className: "text-center p-2", children: /* @__PURE__ */ y.jsxs(ye, { className: "text-center", children: [
      /* @__PURE__ */ y.jsx(kn, { type: "submit", className: "button-custom-color", children: "Submit" }),
      e && /* @__PURE__ */ y.jsx("div", { className: "text-success mt-2", children: "Form submitted successfully!" })
    ] }) }),
    /* @__PURE__ */ y.jsx(Te, { id: "contact", className: "text-center p-2", children: /* @__PURE__ */ y.jsx(ye, { className: "text-center", children: /* @__PURE__ */ y.jsxs("div", { className: "mb-3 mt-3", children: [
      "© ",
      i,
      " Copyright:",
      /* @__PURE__ */ y.jsx("a", { className: "copyright", href: "https://meabhi.me/", children: " meabhi.me" })
    ] }) }) })
  ] }) });
}, Fv = ({ title: e }) => /* @__PURE__ */ y.jsx($e, { children: /* @__PURE__ */ y.jsx(Te, { className: "rounded background-color-body mt-3 p-2", children: /* @__PURE__ */ y.jsx(ye, { className: "text-center", children: /* @__PURE__ */ y.jsx("h1", { className: "bio-font font-color-class heading-responsive-font m-0", children: e }) }) }) });
function Td(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
const Ad = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Od = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Nd = {};
function ro(e, t) {
  return (Nd.jsx ? Od : Ad).test(e);
}
const Id = /[ \t\n\f\r]/g;
function Pd(e) {
  return typeof e == "object" ? e.type === "text" ? io(e.value) : !1 : io(e);
}
function io(e) {
  return e.replace(Id, "") === "";
}
class En {
  /**
   * @param {SchemaType['property']} property
   *   Property.
   * @param {SchemaType['normal']} normal
   *   Normal.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Schema.
   */
  constructor(t, n, r) {
    this.normal = n, this.property = t, r && (this.space = r);
  }
}
En.prototype.normal = {};
En.prototype.property = {};
En.prototype.space = void 0;
function Es(e, t) {
  const n = {}, r = {};
  for (const i of e)
    Object.assign(n, i.property), Object.assign(r, i.normal);
  return new En(n, r, t);
}
function oi(e) {
  return e.toLowerCase();
}
class Ue {
  /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */
  constructor(t, n) {
    this.attribute = n, this.property = t;
  }
}
Ue.prototype.attribute = "";
Ue.prototype.booleanish = !1;
Ue.prototype.boolean = !1;
Ue.prototype.commaOrSpaceSeparated = !1;
Ue.prototype.commaSeparated = !1;
Ue.prototype.defined = !1;
Ue.prototype.mustUseProperty = !1;
Ue.prototype.number = !1;
Ue.prototype.overloadedBoolean = !1;
Ue.prototype.property = "";
Ue.prototype.spaceSeparated = !1;
Ue.prototype.space = void 0;
let Rd = 0;
const le = Pt(), Se = Pt(), Cs = Pt(), P = Pt(), be = Pt(), Vt = Pt(), We = Pt();
function Pt() {
  return 2 ** ++Rd;
}
const li = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: le,
  booleanish: Se,
  commaOrSpaceSeparated: We,
  commaSeparated: Vt,
  number: P,
  overloadedBoolean: Cs,
  spaceSeparated: be
}, Symbol.toStringTag, { value: "Module" })), Rr = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(li)
);
class ea extends Ue {
  /**
   * @constructor
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @param {number | null | undefined} [mask]
   *   Mask.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Info.
   */
  constructor(t, n, r, i) {
    let a = -1;
    if (super(t, n), ao(this, "space", i), typeof r == "number")
      for (; ++a < Rr.length; ) {
        const o = Rr[a];
        ao(this, Rr[a], (r & li[o]) === li[o]);
      }
  }
}
ea.prototype.defined = !0;
function ao(e, t, n) {
  n && (e[t] = n);
}
function Xt(e) {
  const t = {}, n = {};
  for (const [r, i] of Object.entries(e.properties)) {
    const a = new ea(
      r,
      e.transform(e.attributes || {}, r),
      i,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(r) && (a.mustUseProperty = !0), t[r] = a, n[oi(r)] = r, n[oi(a.attribute)] = r;
  }
  return new En(t, n, e.space);
}
const Ss = Xt({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: Se,
    ariaAutoComplete: null,
    ariaBusy: Se,
    ariaChecked: Se,
    ariaColCount: P,
    ariaColIndex: P,
    ariaColSpan: P,
    ariaControls: be,
    ariaCurrent: null,
    ariaDescribedBy: be,
    ariaDetails: null,
    ariaDisabled: Se,
    ariaDropEffect: be,
    ariaErrorMessage: null,
    ariaExpanded: Se,
    ariaFlowTo: be,
    ariaGrabbed: Se,
    ariaHasPopup: null,
    ariaHidden: Se,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: be,
    ariaLevel: P,
    ariaLive: null,
    ariaModal: Se,
    ariaMultiLine: Se,
    ariaMultiSelectable: Se,
    ariaOrientation: null,
    ariaOwns: be,
    ariaPlaceholder: null,
    ariaPosInSet: P,
    ariaPressed: Se,
    ariaReadOnly: Se,
    ariaRelevant: null,
    ariaRequired: Se,
    ariaRoleDescription: be,
    ariaRowCount: P,
    ariaRowIndex: P,
    ariaRowSpan: P,
    ariaSelected: Se,
    ariaSetSize: P,
    ariaSort: null,
    ariaValueMax: P,
    ariaValueMin: P,
    ariaValueNow: P,
    ariaValueText: null,
    role: null
  },
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  }
});
function Ts(e, t) {
  return t in e ? e[t] : t;
}
function As(e, t) {
  return Ts(e, t.toLowerCase());
}
const jd = Xt({
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: Vt,
    acceptCharset: be,
    accessKey: be,
    action: null,
    allow: null,
    allowFullScreen: le,
    allowPaymentRequest: le,
    allowUserMedia: le,
    alt: null,
    as: null,
    async: le,
    autoCapitalize: null,
    autoComplete: be,
    autoFocus: le,
    autoPlay: le,
    blocking: be,
    capture: null,
    charSet: null,
    checked: le,
    cite: null,
    className: be,
    cols: P,
    colSpan: null,
    content: null,
    contentEditable: Se,
    controls: le,
    controlsList: be,
    coords: P | Vt,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: le,
    defer: le,
    dir: null,
    dirName: null,
    disabled: le,
    download: Cs,
    draggable: Se,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: le,
    formTarget: null,
    headers: be,
    height: P,
    hidden: le,
    high: P,
    href: null,
    hrefLang: null,
    htmlFor: be,
    httpEquiv: be,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: le,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: le,
    itemId: null,
    itemProp: be,
    itemRef: be,
    itemScope: le,
    itemType: be,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: le,
    low: P,
    manifest: null,
    max: null,
    maxLength: P,
    media: null,
    method: null,
    min: null,
    minLength: P,
    multiple: le,
    muted: le,
    name: null,
    nonce: null,
    noModule: le,
    noValidate: le,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: le,
    optimum: P,
    pattern: null,
    ping: be,
    placeholder: null,
    playsInline: le,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: le,
    referrerPolicy: null,
    rel: be,
    required: le,
    reversed: le,
    rows: P,
    rowSpan: P,
    sandbox: be,
    scope: null,
    scoped: le,
    seamless: le,
    selected: le,
    shadowRootClonable: le,
    shadowRootDelegatesFocus: le,
    shadowRootMode: null,
    shape: null,
    size: P,
    sizes: null,
    slot: null,
    span: P,
    spellCheck: Se,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: P,
    step: null,
    style: null,
    tabIndex: P,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: le,
    useMap: null,
    value: Se,
    width: P,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: be,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: P,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: P,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: le,
    // Lists. Use CSS to reduce space between items instead
    declare: le,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: P,
    // `<img>` and `<object>`
    leftMargin: P,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: P,
    // `<body>`
    marginWidth: P,
    // `<body>`
    noResize: le,
    // `<frame>`
    noHref: le,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: le,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: le,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: P,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: Se,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: P,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: P,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: le,
    disableRemotePlayback: le,
    prefix: null,
    property: null,
    results: P,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: As
}), _d = Xt({
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  properties: {
    about: We,
    accentHeight: P,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: P,
    amplitude: P,
    arabicForm: null,
    ascent: P,
    attributeName: null,
    attributeType: null,
    azimuth: P,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: P,
    by: null,
    calcMode: null,
    capHeight: P,
    className: be,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: P,
    diffuseConstant: P,
    direction: null,
    display: null,
    dur: null,
    divisor: P,
    dominantBaseline: null,
    download: le,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: P,
    enableBackground: null,
    end: null,
    event: null,
    exponent: P,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: P,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: Vt,
    g2: Vt,
    glyphName: Vt,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: P,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: P,
    horizOriginX: P,
    horizOriginY: P,
    id: null,
    ideographic: P,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: P,
    k: P,
    k1: P,
    k2: P,
    k3: P,
    k4: P,
    kernelMatrix: We,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: P,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: P,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: P,
    overlineThickness: P,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: P,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: be,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: P,
    pointsAtY: P,
    pointsAtZ: P,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: We,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: We,
    rev: We,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: We,
    requiredFeatures: We,
    requiredFonts: We,
    requiredFormats: We,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: P,
    specularExponent: P,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: P,
    strikethroughThickness: P,
    string: null,
    stroke: null,
    strokeDashArray: We,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: P,
    strokeOpacity: P,
    strokeWidth: null,
    style: null,
    surfaceScale: P,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: We,
    tabIndex: P,
    tableValues: null,
    target: null,
    targetX: P,
    targetY: P,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: We,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: P,
    underlineThickness: P,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: P,
    values: null,
    vAlphabetic: P,
    vMathematical: P,
    vectorEffect: null,
    vHanging: P,
    vIdeographic: P,
    version: null,
    vertAdvY: P,
    vertOriginX: P,
    vertOriginY: P,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: P,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: Ts
}), Os = Xt({
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  },
  space: "xlink",
  transform(e, t) {
    return "xlink:" + t.slice(5).toLowerCase();
  }
}), Ns = Xt({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: As
}), Is = Xt({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  }
}), Fd = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
}, Ld = /[A-Z]/g, oo = /-[a-z]/g, Dd = /^data[-\w.:]+$/i;
function Md(e, t) {
  const n = oi(t);
  let r = t, i = Ue;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && Dd.test(t)) {
    if (t.charAt(4) === "-") {
      const a = t.slice(5).replace(oo, $d);
      r = "data" + a.charAt(0).toUpperCase() + a.slice(1);
    } else {
      const a = t.slice(4);
      if (!oo.test(a)) {
        let o = a.replace(Ld, zd);
        o.charAt(0) !== "-" && (o = "-" + o), t = "data" + o;
      }
    }
    i = ea;
  }
  return new i(r, t);
}
function zd(e) {
  return "-" + e.toLowerCase();
}
function $d(e) {
  return e.charAt(1).toUpperCase();
}
const Bd = Es([Ss, jd, Os, Ns, Is], "html"), ta = Es([Ss, _d, Os, Ns, Is], "svg");
function Ud(e) {
  return e.join(" ").trim();
}
var Mt = {}, jr, lo;
function Hd() {
  if (lo) return jr;
  lo = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, t = /\n/g, n = /^\s*/, r = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, i = /^:\s*/, a = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, o = /^[;\s]*/, l = /^\s+|\s+$/g, s = `
`, u = "/", c = "*", f = "", d = "comment", p = "declaration";
  jr = function(v, k) {
    if (typeof v != "string")
      throw new TypeError("First argument must be a string");
    if (!v) return [];
    k = k || {};
    var b = 1, A = 1;
    function E(z) {
      var F = z.match(t);
      F && (b += F.length);
      var q = z.lastIndexOf(s);
      A = ~q ? z.length - q : A + z.length;
    }
    function N() {
      var z = { line: b, column: A };
      return function(F) {
        return F.position = new S(z), Q(), F;
      };
    }
    function S(z) {
      this.start = z, this.end = { line: b, column: A }, this.source = k.source;
    }
    S.prototype.content = v;
    function w(z) {
      var F = new Error(
        k.source + ":" + b + ":" + A + ": " + z
      );
      if (F.reason = z, F.filename = k.source, F.line = b, F.column = A, F.source = v, !k.silent) throw F;
    }
    function M(z) {
      var F = z.exec(v);
      if (F) {
        var q = F[0];
        return E(q), v = v.slice(q.length), F;
      }
    }
    function Q() {
      M(n);
    }
    function ne(z) {
      var F;
      for (z = z || []; F = C(); )
        F !== !1 && z.push(F);
      return z;
    }
    function C() {
      var z = N();
      if (!(u != v.charAt(0) || c != v.charAt(1))) {
        for (var F = 2; f != v.charAt(F) && (c != v.charAt(F) || u != v.charAt(F + 1)); )
          ++F;
        if (F += 2, f === v.charAt(F - 1))
          return w("End of comment missing");
        var q = v.slice(2, F - 2);
        return A += 2, E(q), v = v.slice(F), A += 2, z({
          type: d,
          comment: q
        });
      }
    }
    function D() {
      var z = N(), F = M(r);
      if (F) {
        if (C(), !M(i)) return w("property missing ':'");
        var q = M(a), ae = z({
          type: p,
          property: g(F[0].replace(e, f)),
          value: q ? g(q[0].replace(e, f)) : f
        });
        return M(o), ae;
      }
    }
    function $() {
      var z = [];
      ne(z);
      for (var F; F = D(); )
        F !== !1 && (z.push(F), ne(z));
      return z;
    }
    return Q(), $();
  };
  function g(v) {
    return v ? v.replace(l, f) : f;
  }
  return jr;
}
var so;
function Vd() {
  if (so) return Mt;
  so = 1;
  var e = Mt && Mt.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(Mt, "__esModule", { value: !0 }), Mt.default = n;
  var t = e(Hd());
  function n(r, i) {
    var a = null;
    if (!r || typeof r != "string")
      return a;
    var o = (0, t.default)(r), l = typeof i == "function";
    return o.forEach(function(s) {
      if (s.type === "declaration") {
        var u = s.property, c = s.value;
        l ? i(u, c, s) : c && (a = a || {}, a[u] = c);
      }
    }), a;
  }
  return Mt;
}
var Wd = Vd();
const uo = /* @__PURE__ */ vn(Wd), qd = uo.default || uo, Ps = Rs("end"), na = Rs("start");
function Rs(e) {
  return t;
  function t(n) {
    const r = n && n.position && n.position[e] || {};
    if (typeof r.line == "number" && r.line > 0 && typeof r.column == "number" && r.column > 0)
      return {
        line: r.line,
        column: r.column,
        offset: typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0
      };
  }
}
function Yd(e) {
  const t = na(e), n = Ps(e);
  if (t && n)
    return { start: t, end: n };
}
function cn(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? co(e.position) : "start" in e || "end" in e ? co(e) : "line" in e || "column" in e ? si(e) : "";
}
function si(e) {
  return fo(e && e.line) + ":" + fo(e && e.column);
}
function co(e) {
  return si(e && e.start) + "-" + si(e && e.end);
}
function fo(e) {
  return e && typeof e == "number" ? e : 1;
}
class Le extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(t, n, r) {
    super(), typeof n == "string" && (r = n, n = void 0);
    let i = "", a = {}, o = !1;
    if (n && ("line" in n && "column" in n ? a = { place: n } : "start" in n && "end" in n ? a = { place: n } : "type" in n ? a = {
      ancestors: [n],
      place: n.position
    } : a = { ...n }), typeof t == "string" ? i = t : !a.cause && t && (o = !0, i = t.message, a.cause = t), !a.ruleId && !a.source && typeof r == "string") {
      const s = r.indexOf(":");
      s === -1 ? a.ruleId = r : (a.source = r.slice(0, s), a.ruleId = r.slice(s + 1));
    }
    if (!a.place && a.ancestors && a.ancestors) {
      const s = a.ancestors[a.ancestors.length - 1];
      s && (a.place = s.position);
    }
    const l = a.place && "start" in a.place ? a.place.start : a.place;
    this.ancestors = a.ancestors || void 0, this.cause = a.cause || void 0, this.column = l ? l.column : void 0, this.fatal = void 0, this.file, this.message = i, this.line = l ? l.line : void 0, this.name = cn(a.place) || "1:1", this.place = a.place || void 0, this.reason = this.message, this.ruleId = a.ruleId || void 0, this.source = a.source || void 0, this.stack = o && a.cause && typeof a.cause.stack == "string" ? a.cause.stack : "", this.actual, this.expected, this.note, this.url;
  }
}
Le.prototype.file = "";
Le.prototype.name = "";
Le.prototype.reason = "";
Le.prototype.message = "";
Le.prototype.stack = "";
Le.prototype.column = void 0;
Le.prototype.line = void 0;
Le.prototype.ancestors = void 0;
Le.prototype.cause = void 0;
Le.prototype.fatal = void 0;
Le.prototype.place = void 0;
Le.prototype.ruleId = void 0;
Le.prototype.source = void 0;
const ra = {}.hasOwnProperty, Gd = /* @__PURE__ */ new Map(), Kd = /[A-Z]/g, Xd = /-([a-z])/g, Qd = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), Jd = /* @__PURE__ */ new Set(["td", "th"]), js = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function Zd(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = lp(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = op(n, t.jsx, t.jsxs);
  }
  const i = {
    Fragment: t.Fragment,
    ancestors: [],
    components: t.components || {},
    create: r,
    elementAttributeNameCase: t.elementAttributeNameCase || "react",
    evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
    filePath: n,
    ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
    passKeys: t.passKeys !== !1,
    passNode: t.passNode || !1,
    schema: t.space === "svg" ? ta : Bd,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, a = _s(i, e, void 0);
  return a && typeof a != "string" ? a : i.create(
    e,
    i.Fragment,
    { children: a || void 0 },
    void 0
  );
}
function _s(e, t, n) {
  if (t.type === "element")
    return ep(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return tp(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return rp(e, t, n);
  if (t.type === "mdxjsEsm")
    return np(e, t);
  if (t.type === "root")
    return ip(e, t, n);
  if (t.type === "text")
    return ap(e, t);
}
function ep(e, t, n) {
  const r = e.schema;
  let i = r;
  t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = ta, e.schema = i), e.ancestors.push(t);
  const a = Ls(e, t.tagName, !1), o = sp(e, t);
  let l = aa(e, t);
  return Qd.has(t.tagName) && (l = l.filter(function(s) {
    return typeof s == "string" ? !Pd(s) : !0;
  })), Fs(e, o, a, t), ia(o, l), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function tp(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  gn(e, t.position);
}
function np(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  gn(e, t.position);
}
function rp(e, t, n) {
  const r = e.schema;
  let i = r;
  t.name === "svg" && r.space === "html" && (i = ta, e.schema = i), e.ancestors.push(t);
  const a = t.name === null ? e.Fragment : Ls(e, t.name, !0), o = up(e, t), l = aa(e, t);
  return Fs(e, o, a, t), ia(o, l), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function ip(e, t, n) {
  const r = {};
  return ia(r, aa(e, t)), e.create(t, e.Fragment, r, n);
}
function ap(e, t) {
  return t.value;
}
function Fs(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function ia(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function op(e, t, n) {
  return r;
  function r(i, a, o, l) {
    const u = Array.isArray(o.children) ? n : t;
    return l ? u(a, o, l) : u(a, o);
  }
}
function lp(e, t) {
  return n;
  function n(r, i, a, o) {
    const l = Array.isArray(a.children), s = na(r);
    return t(
      i,
      a,
      o,
      l,
      {
        columnNumber: s ? s.column - 1 : void 0,
        fileName: e,
        lineNumber: s ? s.line : void 0
      },
      void 0
    );
  }
}
function sp(e, t) {
  const n = {};
  let r, i;
  for (i in t.properties)
    if (i !== "children" && ra.call(t.properties, i)) {
      const a = cp(e, i, t.properties[i]);
      if (a) {
        const [o, l] = a;
        e.tableCellAlignToStyle && o === "align" && typeof l == "string" && Jd.has(t.tagName) ? r = l : n[o] = l;
      }
    }
  if (r) {
    const a = (
      /** @type {Style} */
      n.style || (n.style = {})
    );
    a[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
  }
  return n;
}
function up(e, t) {
  const n = {};
  for (const r of t.attributes)
    if (r.type === "mdxJsxExpressionAttribute")
      if (r.data && r.data.estree && e.evaluater) {
        const a = r.data.estree.body[0];
        a.type;
        const o = a.expression;
        o.type;
        const l = o.properties[0];
        l.type, Object.assign(
          n,
          e.evaluater.evaluateExpression(l.argument)
        );
      } else
        gn(e, t.position);
    else {
      const i = r.name;
      let a;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const l = r.value.data.estree.body[0];
          l.type, a = e.evaluater.evaluateExpression(l.expression);
        } else
          gn(e, t.position);
      else
        a = r.value === null ? !0 : r.value;
      n[i] = /** @type {Props[keyof Props]} */
      a;
    }
  return n;
}
function aa(e, t) {
  const n = [];
  let r = -1;
  const i = e.passKeys ? /* @__PURE__ */ new Map() : Gd;
  for (; ++r < t.children.length; ) {
    const a = t.children[r];
    let o;
    if (e.passKeys) {
      const s = a.type === "element" ? a.tagName : a.type === "mdxJsxFlowElement" || a.type === "mdxJsxTextElement" ? a.name : void 0;
      if (s) {
        const u = i.get(s) || 0;
        o = s + "-" + u, i.set(s, u + 1);
      }
    }
    const l = _s(e, a, o);
    l !== void 0 && n.push(l);
  }
  return n;
}
function cp(e, t, n) {
  const r = Md(e.schema, t);
  if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
    if (Array.isArray(n) && (n = r.commaSeparated ? Td(n) : Ud(n)), r.property === "style") {
      let i = typeof n == "object" ? n : fp(e, String(n));
      return e.stylePropertyNameCase === "css" && (i = dp(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? Fd[r.property] || r.property : r.attribute,
      n
    ];
  }
}
function fp(e, t) {
  const n = {};
  try {
    qd(t, r);
  } catch (i) {
    if (!e.ignoreInvalidStyle) {
      const a = (
        /** @type {Error} */
        i
      ), o = new Le("Cannot parse `style` attribute", {
        ancestors: e.ancestors,
        cause: a,
        ruleId: "style",
        source: "hast-util-to-jsx-runtime"
      });
      throw o.file = e.filePath || void 0, o.url = js + "#cannot-parse-style-attribute", o;
    }
  }
  return n;
  function r(i, a) {
    let o = i;
    o.slice(0, 2) !== "--" && (o.slice(0, 4) === "-ms-" && (o = "ms-" + o.slice(4)), o = o.replace(Xd, hp)), n[o] = a;
  }
}
function Ls(e, t, n) {
  let r;
  if (!n)
    r = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const i = t.split(".");
    let a = -1, o;
    for (; ++a < i.length; ) {
      const l = ro(i[a]) ? { type: "Identifier", name: i[a] } : { type: "Literal", value: i[a] };
      o = o ? {
        type: "MemberExpression",
        object: o,
        property: l,
        computed: !!(a && l.type === "Literal"),
        optional: !1
      } : l;
    }
    r = o;
  } else
    r = ro(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (r.type === "Literal") {
    const i = (
      /** @type {keyof JSX.IntrinsicElements} */
      r.value
    );
    return ra.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(r);
  gn(e);
}
function gn(e, t) {
  const n = new Le(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw n.file = e.filePath || void 0, n.url = js + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function dp(e) {
  const t = {};
  let n;
  for (n in e)
    ra.call(e, n) && (t[pp(n)] = e[n]);
  return t;
}
function pp(e) {
  let t = e.replace(Kd, mp);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function hp(e, t) {
  return t.toUpperCase();
}
function mp(e) {
  return "-" + e.toLowerCase();
}
const _r = {
  action: ["form"],
  cite: ["blockquote", "del", "ins", "q"],
  data: ["object"],
  formAction: ["button", "input"],
  href: ["a", "area", "base", "link"],
  icon: ["menuitem"],
  itemId: null,
  manifest: ["html"],
  ping: ["a", "area"],
  poster: ["video"],
  src: [
    "audio",
    "embed",
    "iframe",
    "img",
    "input",
    "script",
    "source",
    "track",
    "video"
  ]
}, gp = {};
function oa(e, t) {
  const n = gp, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return Ds(e, r, i);
}
function Ds(e, t, n) {
  if (yp(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return po(e.children, t, n);
  }
  return Array.isArray(e) ? po(e, t, n) : "";
}
function po(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = Ds(e[i], t, n);
  return r.join("");
}
function yp(e) {
  return !!(e && typeof e == "object");
}
const ho = document.createElement("i");
function la(e) {
  const t = "&" + e + ";";
  ho.innerHTML = t;
  const n = ho.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
function Ye(e, t, n, r) {
  const i = e.length;
  let a = 0, o;
  if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4)
    o = Array.from(r), o.unshift(t, n), e.splice(...o);
  else
    for (n && e.splice(t, n); a < r.length; )
      o = r.slice(a, a + 1e4), o.unshift(t, 0), e.splice(...o), a += 1e4, t += 1e4;
}
function Xe(e, t) {
  return e.length > 0 ? (Ye(e, e.length, 0, t), e) : t;
}
const mo = {}.hasOwnProperty;
function Ms(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    xp(t, e[n]);
  return t;
}
function xp(e, t) {
  let n;
  for (n in t) {
    const i = (mo.call(e, n) ? e[n] : void 0) || (e[n] = {}), a = t[n];
    let o;
    if (a)
      for (o in a) {
        mo.call(i, o) || (i[o] = []);
        const l = a[o];
        bp(
          // @ts-expect-error Looks like a list.
          i[o],
          Array.isArray(l) ? l : l ? [l] : []
        );
      }
  }
}
function bp(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  Ye(e, 0, 0, r);
}
function zs(e, t) {
  const n = Number.parseInt(e, t);
  return (
    // C0 except for HT, LF, FF, CR, space.
    n < 9 || n === 11 || n > 13 && n < 32 || // Control character (DEL) of C0, and C1 controls.
    n > 126 && n < 160 || // Lone high surrogates and low surrogates.
    n > 55295 && n < 57344 || // Noncharacters.
    n > 64975 && n < 65008 || /* eslint-disable no-bitwise */
    (n & 65535) === 65535 || (n & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    n > 1114111 ? "�" : String.fromCodePoint(n)
  );
}
function Ze(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const ze = Et(/[A-Za-z]/), je = Et(/[\dA-Za-z]/), vp = Et(/[#-'*+\--9=?A-Z^-~]/);
function Yn(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const ui = Et(/\d/), kp = Et(/[\dA-Fa-f]/), wp = Et(/[!-/:-@[-`{-~]/);
function K(e) {
  return e !== null && e < -2;
}
function xe(e) {
  return e !== null && (e < 0 || e === 32);
}
function ue(e) {
  return e === -2 || e === -1 || e === 32;
}
const ur = Et(new RegExp("\\p{P}|\\p{S}", "u")), Ot = Et(/\s/);
function Et(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function Qt(e) {
  const t = [];
  let n = -1, r = 0, i = 0;
  for (; ++n < e.length; ) {
    const a = e.charCodeAt(n);
    let o = "";
    if (a === 37 && je(e.charCodeAt(n + 1)) && je(e.charCodeAt(n + 2)))
      i = 2;
    else if (a < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) || (o = String.fromCharCode(a));
    else if (a > 55295 && a < 57344) {
      const l = e.charCodeAt(n + 1);
      a < 56320 && l > 56319 && l < 57344 ? (o = String.fromCharCode(a, l), i = 1) : o = "�";
    } else
      o = String.fromCharCode(a);
    o && (t.push(e.slice(r, n), encodeURIComponent(o)), r = n + i + 1, o = ""), i && (n += i, i = 0);
  }
  return t.join("") + e.slice(r);
}
function de(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let a = 0;
  return o;
  function o(s) {
    return ue(s) ? (e.enter(n), l(s)) : t(s);
  }
  function l(s) {
    return ue(s) && a++ < i ? (e.consume(s), l) : (e.exit(n), t(s));
  }
}
const Ep = {
  tokenize: Cp
};
function Cp(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, r, i);
  let n;
  return t;
  function r(l) {
    if (l === null) {
      e.consume(l);
      return;
    }
    return e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), de(e, t, "linePrefix");
  }
  function i(l) {
    return e.enter("paragraph"), a(l);
  }
  function a(l) {
    const s = e.enter("chunkText", {
      contentType: "text",
      previous: n
    });
    return n && (n.next = s), n = s, o(l);
  }
  function o(l) {
    if (l === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(l);
      return;
    }
    return K(l) ? (e.consume(l), e.exit("chunkText"), a) : (e.consume(l), o);
  }
}
const Sp = {
  tokenize: Tp
}, go = {
  tokenize: Ap
};
function Tp(e) {
  const t = this, n = [];
  let r = 0, i, a, o;
  return l;
  function l(E) {
    if (r < n.length) {
      const N = n[r];
      return t.containerState = N[1], e.attempt(N[0].continuation, s, u)(E);
    }
    return u(E);
  }
  function s(E) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, i && A();
      const N = t.events.length;
      let S = N, w;
      for (; S--; )
        if (t.events[S][0] === "exit" && t.events[S][1].type === "chunkFlow") {
          w = t.events[S][1].end;
          break;
        }
      b(r);
      let M = N;
      for (; M < t.events.length; )
        t.events[M][1].end = {
          ...w
        }, M++;
      return Ye(t.events, S + 1, 0, t.events.slice(N)), t.events.length = M, u(E);
    }
    return l(E);
  }
  function u(E) {
    if (r === n.length) {
      if (!i)
        return d(E);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return g(E);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(go, c, f)(E);
  }
  function c(E) {
    return i && A(), b(r), d(E);
  }
  function f(E) {
    return t.parser.lazy[t.now().line] = r !== n.length, o = t.now().offset, g(E);
  }
  function d(E) {
    return t.containerState = {}, e.attempt(go, p, g)(E);
  }
  function p(E) {
    return r++, n.push([t.currentConstruct, t.containerState]), d(E);
  }
  function g(E) {
    if (E === null) {
      i && A(), b(0), e.consume(E);
      return;
    }
    return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
      _tokenizer: i,
      contentType: "flow",
      previous: a
    }), v(E);
  }
  function v(E) {
    if (E === null) {
      k(e.exit("chunkFlow"), !0), b(0), e.consume(E);
      return;
    }
    return K(E) ? (e.consume(E), k(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, l) : (e.consume(E), v);
  }
  function k(E, N) {
    const S = t.sliceStream(E);
    if (N && S.push(null), E.previous = a, a && (a.next = E), a = E, i.defineSkip(E.start), i.write(S), t.parser.lazy[E.start.line]) {
      let w = i.events.length;
      for (; w--; )
        if (
          // The token starts before the line ending…
          i.events[w][1].start.offset < o && // …and either is not ended yet…
          (!i.events[w][1].end || // …or ends after it.
          i.events[w][1].end.offset > o)
        )
          return;
      const M = t.events.length;
      let Q = M, ne, C;
      for (; Q--; )
        if (t.events[Q][0] === "exit" && t.events[Q][1].type === "chunkFlow") {
          if (ne) {
            C = t.events[Q][1].end;
            break;
          }
          ne = !0;
        }
      for (b(r), w = M; w < t.events.length; )
        t.events[w][1].end = {
          ...C
        }, w++;
      Ye(t.events, Q + 1, 0, t.events.slice(M)), t.events.length = w;
    }
  }
  function b(E) {
    let N = n.length;
    for (; N-- > E; ) {
      const S = n[N];
      t.containerState = S[1], S[0].exit.call(t, e);
    }
    n.length = E;
  }
  function A() {
    i.write([null]), a = void 0, i = void 0, t.containerState._closeFlow = void 0;
  }
}
function Ap(e, t, n) {
  return de(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function qt(e) {
  if (e === null || xe(e) || Ot(e))
    return 1;
  if (ur(e))
    return 2;
}
function cr(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const a = e[i].resolveAll;
    a && !r.includes(a) && (t = a(t, n), r.push(a));
  }
  return t;
}
const ci = {
  name: "attention",
  resolveAll: Op,
  tokenize: Np
};
function Op(e, t) {
  let n = -1, r, i, a, o, l, s, u, c;
  for (; ++n < e.length; )
    if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
      for (r = n; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && // If the markers are the same:
        t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3))
            continue;
          s = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
          const f = {
            ...e[r][1].end
          }, d = {
            ...e[n][1].start
          };
          yo(f, -s), yo(d, s), o = {
            type: s > 1 ? "strongSequence" : "emphasisSequence",
            start: f,
            end: {
              ...e[r][1].end
            }
          }, l = {
            type: s > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...e[n][1].start
            },
            end: d
          }, a = {
            type: s > 1 ? "strongText" : "emphasisText",
            start: {
              ...e[r][1].end
            },
            end: {
              ...e[n][1].start
            }
          }, i = {
            type: s > 1 ? "strong" : "emphasis",
            start: {
              ...o.start
            },
            end: {
              ...l.end
            }
          }, e[r][1].end = {
            ...o.start
          }, e[n][1].start = {
            ...l.end
          }, u = [], e[r][1].end.offset - e[r][1].start.offset && (u = Xe(u, [["enter", e[r][1], t], ["exit", e[r][1], t]])), u = Xe(u, [["enter", i, t], ["enter", o, t], ["exit", o, t], ["enter", a, t]]), u = Xe(u, cr(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), u = Xe(u, [["exit", a, t], ["enter", l, t], ["exit", l, t], ["exit", i, t]]), e[n][1].end.offset - e[n][1].start.offset ? (c = 2, u = Xe(u, [["enter", e[n][1], t], ["exit", e[n][1], t]])) : c = 0, Ye(e, r - 1, n - r + 3, u), n = r + u.length - c - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function Np(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = qt(r);
  let a;
  return o;
  function o(s) {
    return a = s, e.enter("attentionSequence"), l(s);
  }
  function l(s) {
    if (s === a)
      return e.consume(s), l;
    const u = e.exit("attentionSequence"), c = qt(s), f = !c || c === 2 && i || n.includes(s), d = !i || i === 2 && c || n.includes(r);
    return u._open = !!(a === 42 ? f : f && (i || !d)), u._close = !!(a === 42 ? d : d && (c || !f)), t(s);
  }
}
function yo(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const Ip = {
  name: "autolink",
  tokenize: Pp
};
function Pp(e, t, n) {
  let r = 0;
  return i;
  function i(p) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a;
  }
  function a(p) {
    return ze(p) ? (e.consume(p), o) : p === 64 ? n(p) : u(p);
  }
  function o(p) {
    return p === 43 || p === 45 || p === 46 || je(p) ? (r = 1, l(p)) : u(p);
  }
  function l(p) {
    return p === 58 ? (e.consume(p), r = 0, s) : (p === 43 || p === 45 || p === 46 || je(p)) && r++ < 32 ? (e.consume(p), l) : (r = 0, u(p));
  }
  function s(p) {
    return p === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), t) : p === null || p === 32 || p === 60 || Yn(p) ? n(p) : (e.consume(p), s);
  }
  function u(p) {
    return p === 64 ? (e.consume(p), c) : vp(p) ? (e.consume(p), u) : n(p);
  }
  function c(p) {
    return je(p) ? f(p) : n(p);
  }
  function f(p) {
    return p === 46 ? (e.consume(p), r = 0, c) : p === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), t) : d(p);
  }
  function d(p) {
    if ((p === 45 || je(p)) && r++ < 63) {
      const g = p === 45 ? d : f;
      return e.consume(p), g;
    }
    return n(p);
  }
}
const Cn = {
  partial: !0,
  tokenize: Rp
};
function Rp(e, t, n) {
  return r;
  function r(a) {
    return ue(a) ? de(e, i, "linePrefix")(a) : i(a);
  }
  function i(a) {
    return a === null || K(a) ? t(a) : n(a);
  }
}
const $s = {
  continuation: {
    tokenize: _p
  },
  exit: Fp,
  name: "blockQuote",
  tokenize: jp
};
function jp(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    if (o === 62) {
      const l = r.containerState;
      return l.open || (e.enter("blockQuote", {
        _container: !0
      }), l.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(o), e.exit("blockQuoteMarker"), a;
    }
    return n(o);
  }
  function a(o) {
    return ue(o) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(o), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(o));
  }
}
function _p(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return ue(o) ? de(e, a, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(o) : a(o);
  }
  function a(o) {
    return e.attempt($s, t, n)(o);
  }
}
function Fp(e) {
  e.exit("blockQuote");
}
const Bs = {
  name: "characterEscape",
  tokenize: Lp
};
function Lp(e, t, n) {
  return r;
  function r(a) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(a), e.exit("escapeMarker"), i;
  }
  function i(a) {
    return wp(a) ? (e.enter("characterEscapeValue"), e.consume(a), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(a);
  }
}
const Us = {
  name: "characterReference",
  tokenize: Dp
};
function Dp(e, t, n) {
  const r = this;
  let i = 0, a, o;
  return l;
  function l(f) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), s;
  }
  function s(f) {
    return f === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(f), e.exit("characterReferenceMarkerNumeric"), u) : (e.enter("characterReferenceValue"), a = 31, o = je, c(f));
  }
  function u(f) {
    return f === 88 || f === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(f), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), a = 6, o = kp, c) : (e.enter("characterReferenceValue"), a = 7, o = ui, c(f));
  }
  function c(f) {
    if (f === 59 && i) {
      const d = e.exit("characterReferenceValue");
      return o === je && !la(r.sliceSerialize(d)) ? n(f) : (e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return o(f) && i++ < a ? (e.consume(f), c) : n(f);
  }
}
const xo = {
  partial: !0,
  tokenize: zp
}, bo = {
  concrete: !0,
  name: "codeFenced",
  tokenize: Mp
};
function Mp(e, t, n) {
  const r = this, i = {
    partial: !0,
    tokenize: S
  };
  let a = 0, o = 0, l;
  return s;
  function s(w) {
    return u(w);
  }
  function u(w) {
    const M = r.events[r.events.length - 1];
    return a = M && M[1].type === "linePrefix" ? M[2].sliceSerialize(M[1], !0).length : 0, l = w, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), c(w);
  }
  function c(w) {
    return w === l ? (o++, e.consume(w), c) : o < 3 ? n(w) : (e.exit("codeFencedFenceSequence"), ue(w) ? de(e, f, "whitespace")(w) : f(w));
  }
  function f(w) {
    return w === null || K(w) ? (e.exit("codeFencedFence"), r.interrupt ? t(w) : e.check(xo, v, N)(w)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), d(w));
  }
  function d(w) {
    return w === null || K(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), f(w)) : ue(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), de(e, p, "whitespace")(w)) : w === 96 && w === l ? n(w) : (e.consume(w), d);
  }
  function p(w) {
    return w === null || K(w) ? f(w) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), g(w));
  }
  function g(w) {
    return w === null || K(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), f(w)) : w === 96 && w === l ? n(w) : (e.consume(w), g);
  }
  function v(w) {
    return e.attempt(i, N, k)(w);
  }
  function k(w) {
    return e.enter("lineEnding"), e.consume(w), e.exit("lineEnding"), b;
  }
  function b(w) {
    return a > 0 && ue(w) ? de(e, A, "linePrefix", a + 1)(w) : A(w);
  }
  function A(w) {
    return w === null || K(w) ? e.check(xo, v, N)(w) : (e.enter("codeFlowValue"), E(w));
  }
  function E(w) {
    return w === null || K(w) ? (e.exit("codeFlowValue"), A(w)) : (e.consume(w), E);
  }
  function N(w) {
    return e.exit("codeFenced"), t(w);
  }
  function S(w, M, Q) {
    let ne = 0;
    return C;
    function C(q) {
      return w.enter("lineEnding"), w.consume(q), w.exit("lineEnding"), D;
    }
    function D(q) {
      return w.enter("codeFencedFence"), ue(q) ? de(w, $, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(q) : $(q);
    }
    function $(q) {
      return q === l ? (w.enter("codeFencedFenceSequence"), z(q)) : Q(q);
    }
    function z(q) {
      return q === l ? (ne++, w.consume(q), z) : ne >= o ? (w.exit("codeFencedFenceSequence"), ue(q) ? de(w, F, "whitespace")(q) : F(q)) : Q(q);
    }
    function F(q) {
      return q === null || K(q) ? (w.exit("codeFencedFence"), M(q)) : Q(q);
    }
  }
}
function zp(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return o === null ? n(o) : (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), a);
  }
  function a(o) {
    return r.parser.lazy[r.now().line] ? n(o) : t(o);
  }
}
const Fr = {
  name: "codeIndented",
  tokenize: Bp
}, $p = {
  partial: !0,
  tokenize: Up
};
function Bp(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    return e.enter("codeIndented"), de(e, a, "linePrefix", 5)(u);
  }
  function a(u) {
    const c = r.events[r.events.length - 1];
    return c && c[1].type === "linePrefix" && c[2].sliceSerialize(c[1], !0).length >= 4 ? o(u) : n(u);
  }
  function o(u) {
    return u === null ? s(u) : K(u) ? e.attempt($p, o, s)(u) : (e.enter("codeFlowValue"), l(u));
  }
  function l(u) {
    return u === null || K(u) ? (e.exit("codeFlowValue"), o(u)) : (e.consume(u), l);
  }
  function s(u) {
    return e.exit("codeIndented"), t(u);
  }
}
function Up(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return r.parser.lazy[r.now().line] ? n(o) : K(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), i) : de(e, a, "linePrefix", 5)(o);
  }
  function a(o) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "linePrefix" && l[2].sliceSerialize(l[1], !0).length >= 4 ? t(o) : K(o) ? i(o) : n(o);
  }
}
const Hp = {
  name: "codeText",
  previous: Wp,
  resolve: Vp,
  tokenize: qp
};
function Vp(e) {
  let t = e.length - 4, n = 3, r, i;
  if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
    for (r = n; ++r < t; )
      if (e[r][1].type === "codeTextData") {
        e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
        break;
      }
  }
  for (r = n - 1, t++; ++r <= t; )
    i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
  return e;
}
function Wp(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function qp(e, t, n) {
  let r = 0, i, a;
  return o;
  function o(f) {
    return e.enter("codeText"), e.enter("codeTextSequence"), l(f);
  }
  function l(f) {
    return f === 96 ? (e.consume(f), r++, l) : (e.exit("codeTextSequence"), s(f));
  }
  function s(f) {
    return f === null ? n(f) : f === 32 ? (e.enter("space"), e.consume(f), e.exit("space"), s) : f === 96 ? (a = e.enter("codeTextSequence"), i = 0, c(f)) : K(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), s) : (e.enter("codeTextData"), u(f));
  }
  function u(f) {
    return f === null || f === 32 || f === 96 || K(f) ? (e.exit("codeTextData"), s(f)) : (e.consume(f), u);
  }
  function c(f) {
    return f === 96 ? (e.consume(f), i++, c) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(f)) : (a.type = "codeTextData", u(f));
  }
}
class Yp {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(t) {
    this.left = t ? [...t] : [], this.right = [];
  }
  /**
   * Array access;
   * does not move the cursor.
   *
   * @param {number} index
   *   Index.
   * @return {T}
   *   Item.
   */
  get(t) {
    if (t < 0 || t >= this.left.length + this.right.length)
      throw new RangeError("Cannot access index `" + t + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return t < this.left.length ? this.left[t] : this.right[this.right.length - t + this.left.length - 1];
  }
  /**
   * The length of the splice buffer, one greater than the largest index in the
   * array.
   */
  get length() {
    return this.left.length + this.right.length;
  }
  /**
   * Remove and return `list[0]`;
   * moves the cursor to `0`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  /**
   * Slice the buffer to get an array;
   * does not move the cursor.
   *
   * @param {number} start
   *   Start.
   * @param {number | null | undefined} [end]
   *   End (optional).
   * @returns {Array<T>}
   *   Array of items.
   */
  slice(t, n) {
    const r = n ?? Number.POSITIVE_INFINITY;
    return r < this.left.length ? this.left.slice(t, r) : t > this.left.length ? this.right.slice(this.right.length - r + this.left.length, this.right.length - t + this.left.length).reverse() : this.left.slice(t).concat(this.right.slice(this.right.length - r + this.left.length).reverse());
  }
  /**
   * Mimics the behavior of Array.prototype.splice() except for the change of
   * interface necessary to avoid segfaults when patching in very large arrays.
   *
   * This operation moves cursor is moved to `start` and results in the cursor
   * placed after any inserted items.
   *
   * @param {number} start
   *   Start;
   *   zero-based index at which to start changing the array;
   *   negative numbers count backwards from the end of the array and values
   *   that are out-of bounds are clamped to the appropriate end of the array.
   * @param {number | null | undefined} [deleteCount=0]
   *   Delete count (default: `0`);
   *   maximum number of elements to delete, starting from start.
   * @param {Array<T> | null | undefined} [items=[]]
   *   Items to include in place of the deleted items (default: `[]`).
   * @return {Array<T>}
   *   Any removed items.
   */
  splice(t, n, r) {
    const i = n || 0;
    this.setCursor(Math.trunc(t));
    const a = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
    return r && on(this.left, r), a.reverse();
  }
  /**
   * Remove and return the highest-numbered item in the array, so
   * `list[list.length - 1]`;
   * Moves the cursor to `length`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  /**
   * Inserts a single item to the high-numbered side of the array;
   * moves the cursor to `length`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  push(t) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(t);
  }
  /**
   * Inserts many items to the high-numbered side of the array.
   * Moves the cursor to `length`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  pushMany(t) {
    this.setCursor(Number.POSITIVE_INFINITY), on(this.left, t);
  }
  /**
   * Inserts a single item to the low-numbered side of the array;
   * Moves the cursor to `0`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  unshift(t) {
    this.setCursor(0), this.right.push(t);
  }
  /**
   * Inserts many items to the low-numbered side of the array;
   * moves the cursor to `0`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  unshiftMany(t) {
    this.setCursor(0), on(this.right, t.reverse());
  }
  /**
   * Move the cursor to a specific position in the array. Requires
   * time proportional to the distance moved.
   *
   * If `n < 0`, the cursor will end up at the beginning.
   * If `n > length`, the cursor will end up at the end.
   *
   * @param {number} n
   *   Position.
   * @return {undefined}
   *   Nothing.
   */
  setCursor(t) {
    if (!(t === this.left.length || t > this.left.length && this.right.length === 0 || t < 0 && this.left.length === 0))
      if (t < this.left.length) {
        const n = this.left.splice(t, Number.POSITIVE_INFINITY);
        on(this.right, n.reverse());
      } else {
        const n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
        on(this.left, n.reverse());
      }
  }
}
function on(e, t) {
  let n = 0;
  if (t.length < 1e4)
    e.push(...t);
  else
    for (; n < t.length; )
      e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
function Hs(e) {
  const t = {};
  let n = -1, r, i, a, o, l, s, u;
  const c = new Yp(e);
  for (; ++n < c.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = c.get(n), n && r[1].type === "chunkFlow" && c.get(n - 1)[1].type === "listItemPrefix" && (s = r[1]._tokenizer.events, a = 0, a < s.length && s[a][1].type === "lineEndingBlank" && (a += 2), a < s.length && s[a][1].type === "content"))
      for (; ++a < s.length && s[a][1].type !== "content"; )
        s[a][1].type === "chunkText" && (s[a][1]._isInFirstContentOfListItem = !0, a++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, Gp(c, n)), n = t[n], u = !0);
    else if (r[1]._container) {
      for (a = n, i = void 0; a--; )
        if (o = c.get(a), o[1].type === "lineEnding" || o[1].type === "lineEndingBlank")
          o[0] === "enter" && (i && (c.get(i)[1].type = "lineEndingBlank"), o[1].type = "lineEnding", i = a);
        else if (o[1].type !== "linePrefix") break;
      i && (r[1].end = {
        ...c.get(i)[1].start
      }, l = c.slice(i, n), l.unshift(r), c.splice(i, n - i + 1, l));
    }
  }
  return Ye(e, 0, Number.POSITIVE_INFINITY, c.slice(0)), !u;
}
function Gp(e, t) {
  const n = e.get(t)[1], r = e.get(t)[2];
  let i = t - 1;
  const a = [], o = n._tokenizer || r.parser[n.contentType](n.start), l = o.events, s = [], u = {};
  let c, f, d = -1, p = n, g = 0, v = 0;
  const k = [v];
  for (; p; ) {
    for (; e.get(++i)[1] !== p; )
      ;
    a.push(i), p._tokenizer || (c = r.sliceStream(p), p.next || c.push(null), f && o.defineSkip(p.start), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(c), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), f = p, p = p.next;
  }
  for (p = n; ++d < l.length; )
    // Find a void token that includes a break.
    l[d][0] === "exit" && l[d - 1][0] === "enter" && l[d][1].type === l[d - 1][1].type && l[d][1].start.line !== l[d][1].end.line && (v = d + 1, k.push(v), p._tokenizer = void 0, p.previous = void 0, p = p.next);
  for (o.events = [], p ? (p._tokenizer = void 0, p.previous = void 0) : k.pop(), d = k.length; d--; ) {
    const b = l.slice(k[d], k[d + 1]), A = a.pop();
    s.push([A, A + b.length - 1]), e.splice(A, 2, b);
  }
  for (s.reverse(), d = -1; ++d < s.length; )
    u[g + s[d][0]] = g + s[d][1], g += s[d][1] - s[d][0] - 1;
  return u;
}
const Kp = {
  resolve: Qp,
  tokenize: Jp
}, Xp = {
  partial: !0,
  tokenize: Zp
};
function Qp(e) {
  return Hs(e), e;
}
function Jp(e, t) {
  let n;
  return r;
  function r(l) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), i(l);
  }
  function i(l) {
    return l === null ? a(l) : K(l) ? e.check(Xp, o, a)(l) : (e.consume(l), i);
  }
  function a(l) {
    return e.exit("chunkContent"), e.exit("content"), t(l);
  }
  function o(l) {
    return e.consume(l), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
      contentType: "content",
      previous: n
    }), n = n.next, i;
  }
}
function Zp(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), de(e, a, "linePrefix");
  }
  function a(o) {
    if (o === null || K(o))
      return n(o);
    const l = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && l && l[1].type === "linePrefix" && l[2].sliceSerialize(l[1], !0).length >= 4 ? t(o) : e.interrupt(r.parser.constructs.flow, n, t)(o);
  }
}
function Vs(e, t, n, r, i, a, o, l, s) {
  const u = s || Number.POSITIVE_INFINITY;
  let c = 0;
  return f;
  function f(b) {
    return b === 60 ? (e.enter(r), e.enter(i), e.enter(a), e.consume(b), e.exit(a), d) : b === null || b === 32 || b === 41 || Yn(b) ? n(b) : (e.enter(r), e.enter(o), e.enter(l), e.enter("chunkString", {
      contentType: "string"
    }), v(b));
  }
  function d(b) {
    return b === 62 ? (e.enter(a), e.consume(b), e.exit(a), e.exit(i), e.exit(r), t) : (e.enter(l), e.enter("chunkString", {
      contentType: "string"
    }), p(b));
  }
  function p(b) {
    return b === 62 ? (e.exit("chunkString"), e.exit(l), d(b)) : b === null || b === 60 || K(b) ? n(b) : (e.consume(b), b === 92 ? g : p);
  }
  function g(b) {
    return b === 60 || b === 62 || b === 92 ? (e.consume(b), p) : p(b);
  }
  function v(b) {
    return !c && (b === null || b === 41 || xe(b)) ? (e.exit("chunkString"), e.exit(l), e.exit(o), e.exit(r), t(b)) : c < u && b === 40 ? (e.consume(b), c++, v) : b === 41 ? (e.consume(b), c--, v) : b === null || b === 32 || b === 40 || Yn(b) ? n(b) : (e.consume(b), b === 92 ? k : v);
  }
  function k(b) {
    return b === 40 || b === 41 || b === 92 ? (e.consume(b), v) : v(b);
  }
}
function Ws(e, t, n, r, i, a) {
  const o = this;
  let l = 0, s;
  return u;
  function u(p) {
    return e.enter(r), e.enter(i), e.consume(p), e.exit(i), e.enter(a), c;
  }
  function c(p) {
    return l > 999 || p === null || p === 91 || p === 93 && !s || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    p === 94 && !l && "_hiddenFootnoteSupport" in o.parser.constructs ? n(p) : p === 93 ? (e.exit(a), e.enter(i), e.consume(p), e.exit(i), e.exit(r), t) : K(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), c) : (e.enter("chunkString", {
      contentType: "string"
    }), f(p));
  }
  function f(p) {
    return p === null || p === 91 || p === 93 || K(p) || l++ > 999 ? (e.exit("chunkString"), c(p)) : (e.consume(p), s || (s = !ue(p)), p === 92 ? d : f);
  }
  function d(p) {
    return p === 91 || p === 92 || p === 93 ? (e.consume(p), l++, f) : f(p);
  }
}
function qs(e, t, n, r, i, a) {
  let o;
  return l;
  function l(d) {
    return d === 34 || d === 39 || d === 40 ? (e.enter(r), e.enter(i), e.consume(d), e.exit(i), o = d === 40 ? 41 : d, s) : n(d);
  }
  function s(d) {
    return d === o ? (e.enter(i), e.consume(d), e.exit(i), e.exit(r), t) : (e.enter(a), u(d));
  }
  function u(d) {
    return d === o ? (e.exit(a), s(o)) : d === null ? n(d) : K(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), de(e, u, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), c(d));
  }
  function c(d) {
    return d === o || d === null || K(d) ? (e.exit("chunkString"), u(d)) : (e.consume(d), d === 92 ? f : c);
  }
  function f(d) {
    return d === o || d === 92 ? (e.consume(d), c) : c(d);
  }
}
function fn(e, t) {
  let n;
  return r;
  function r(i) {
    return K(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : ue(i) ? de(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
  }
}
const eh = {
  name: "definition",
  tokenize: nh
}, th = {
  partial: !0,
  tokenize: rh
};
function nh(e, t, n) {
  const r = this;
  let i;
  return a;
  function a(p) {
    return e.enter("definition"), o(p);
  }
  function o(p) {
    return Ws.call(
      r,
      e,
      l,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(p);
  }
  function l(p) {
    return i = Ze(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), p === 58 ? (e.enter("definitionMarker"), e.consume(p), e.exit("definitionMarker"), s) : n(p);
  }
  function s(p) {
    return xe(p) ? fn(e, u)(p) : u(p);
  }
  function u(p) {
    return Vs(
      e,
      c,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(p);
  }
  function c(p) {
    return e.attempt(th, f, f)(p);
  }
  function f(p) {
    return ue(p) ? de(e, d, "whitespace")(p) : d(p);
  }
  function d(p) {
    return p === null || K(p) ? (e.exit("definition"), r.parser.defined.push(i), t(p)) : n(p);
  }
}
function rh(e, t, n) {
  return r;
  function r(l) {
    return xe(l) ? fn(e, i)(l) : n(l);
  }
  function i(l) {
    return qs(e, a, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(l);
  }
  function a(l) {
    return ue(l) ? de(e, o, "whitespace")(l) : o(l);
  }
  function o(l) {
    return l === null || K(l) ? t(l) : n(l);
  }
}
const ih = {
  name: "hardBreakEscape",
  tokenize: ah
};
function ah(e, t, n) {
  return r;
  function r(a) {
    return e.enter("hardBreakEscape"), e.consume(a), i;
  }
  function i(a) {
    return K(a) ? (e.exit("hardBreakEscape"), t(a)) : n(a);
  }
}
const oh = {
  name: "headingAtx",
  resolve: lh,
  tokenize: sh
};
function lh(e, t) {
  let n = e.length - 2, r = 3, i, a;
  return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
    type: "atxHeadingText",
    start: e[r][1].start,
    end: e[n][1].end
  }, a = {
    type: "chunkText",
    start: e[r][1].start,
    end: e[n][1].end,
    contentType: "text"
  }, Ye(e, r, n - r + 1, [["enter", i, t], ["enter", a, t], ["exit", a, t], ["exit", i, t]])), e;
}
function sh(e, t, n) {
  let r = 0;
  return i;
  function i(c) {
    return e.enter("atxHeading"), a(c);
  }
  function a(c) {
    return e.enter("atxHeadingSequence"), o(c);
  }
  function o(c) {
    return c === 35 && r++ < 6 ? (e.consume(c), o) : c === null || xe(c) ? (e.exit("atxHeadingSequence"), l(c)) : n(c);
  }
  function l(c) {
    return c === 35 ? (e.enter("atxHeadingSequence"), s(c)) : c === null || K(c) ? (e.exit("atxHeading"), t(c)) : ue(c) ? de(e, l, "whitespace")(c) : (e.enter("atxHeadingText"), u(c));
  }
  function s(c) {
    return c === 35 ? (e.consume(c), s) : (e.exit("atxHeadingSequence"), l(c));
  }
  function u(c) {
    return c === null || c === 35 || xe(c) ? (e.exit("atxHeadingText"), l(c)) : (e.consume(c), u);
  }
}
const uh = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], vo = ["pre", "script", "style", "textarea"], ch = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: ph,
  tokenize: hh
}, fh = {
  partial: !0,
  tokenize: gh
}, dh = {
  partial: !0,
  tokenize: mh
};
function ph(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function hh(e, t, n) {
  const r = this;
  let i, a, o, l, s;
  return u;
  function u(m) {
    return c(m);
  }
  function c(m) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(m), f;
  }
  function f(m) {
    return m === 33 ? (e.consume(m), d) : m === 47 ? (e.consume(m), a = !0, v) : m === 63 ? (e.consume(m), i = 3, r.interrupt ? t : h) : ze(m) ? (e.consume(m), o = String.fromCharCode(m), k) : n(m);
  }
  function d(m) {
    return m === 45 ? (e.consume(m), i = 2, p) : m === 91 ? (e.consume(m), i = 5, l = 0, g) : ze(m) ? (e.consume(m), i = 4, r.interrupt ? t : h) : n(m);
  }
  function p(m) {
    return m === 45 ? (e.consume(m), r.interrupt ? t : h) : n(m);
  }
  function g(m) {
    const L = "CDATA[";
    return m === L.charCodeAt(l++) ? (e.consume(m), l === L.length ? r.interrupt ? t : $ : g) : n(m);
  }
  function v(m) {
    return ze(m) ? (e.consume(m), o = String.fromCharCode(m), k) : n(m);
  }
  function k(m) {
    if (m === null || m === 47 || m === 62 || xe(m)) {
      const L = m === 47, X = o.toLowerCase();
      return !L && !a && vo.includes(X) ? (i = 1, r.interrupt ? t(m) : $(m)) : uh.includes(o.toLowerCase()) ? (i = 6, L ? (e.consume(m), b) : r.interrupt ? t(m) : $(m)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(m) : a ? A(m) : E(m));
    }
    return m === 45 || je(m) ? (e.consume(m), o += String.fromCharCode(m), k) : n(m);
  }
  function b(m) {
    return m === 62 ? (e.consume(m), r.interrupt ? t : $) : n(m);
  }
  function A(m) {
    return ue(m) ? (e.consume(m), A) : C(m);
  }
  function E(m) {
    return m === 47 ? (e.consume(m), C) : m === 58 || m === 95 || ze(m) ? (e.consume(m), N) : ue(m) ? (e.consume(m), E) : C(m);
  }
  function N(m) {
    return m === 45 || m === 46 || m === 58 || m === 95 || je(m) ? (e.consume(m), N) : S(m);
  }
  function S(m) {
    return m === 61 ? (e.consume(m), w) : ue(m) ? (e.consume(m), S) : E(m);
  }
  function w(m) {
    return m === null || m === 60 || m === 61 || m === 62 || m === 96 ? n(m) : m === 34 || m === 39 ? (e.consume(m), s = m, M) : ue(m) ? (e.consume(m), w) : Q(m);
  }
  function M(m) {
    return m === s ? (e.consume(m), s = null, ne) : m === null || K(m) ? n(m) : (e.consume(m), M);
  }
  function Q(m) {
    return m === null || m === 34 || m === 39 || m === 47 || m === 60 || m === 61 || m === 62 || m === 96 || xe(m) ? S(m) : (e.consume(m), Q);
  }
  function ne(m) {
    return m === 47 || m === 62 || ue(m) ? E(m) : n(m);
  }
  function C(m) {
    return m === 62 ? (e.consume(m), D) : n(m);
  }
  function D(m) {
    return m === null || K(m) ? $(m) : ue(m) ? (e.consume(m), D) : n(m);
  }
  function $(m) {
    return m === 45 && i === 2 ? (e.consume(m), ae) : m === 60 && i === 1 ? (e.consume(m), ce) : m === 62 && i === 4 ? (e.consume(m), R) : m === 63 && i === 3 ? (e.consume(m), h) : m === 93 && i === 5 ? (e.consume(m), ve) : K(m) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(fh, G, z)(m)) : m === null || K(m) ? (e.exit("htmlFlowData"), z(m)) : (e.consume(m), $);
  }
  function z(m) {
    return e.check(dh, F, G)(m);
  }
  function F(m) {
    return e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), q;
  }
  function q(m) {
    return m === null || K(m) ? z(m) : (e.enter("htmlFlowData"), $(m));
  }
  function ae(m) {
    return m === 45 ? (e.consume(m), h) : $(m);
  }
  function ce(m) {
    return m === 47 ? (e.consume(m), o = "", fe) : $(m);
  }
  function fe(m) {
    if (m === 62) {
      const L = o.toLowerCase();
      return vo.includes(L) ? (e.consume(m), R) : $(m);
    }
    return ze(m) && o.length < 8 ? (e.consume(m), o += String.fromCharCode(m), fe) : $(m);
  }
  function ve(m) {
    return m === 93 ? (e.consume(m), h) : $(m);
  }
  function h(m) {
    return m === 62 ? (e.consume(m), R) : m === 45 && i === 2 ? (e.consume(m), h) : $(m);
  }
  function R(m) {
    return m === null || K(m) ? (e.exit("htmlFlowData"), G(m)) : (e.consume(m), R);
  }
  function G(m) {
    return e.exit("htmlFlow"), t(m);
  }
}
function mh(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return K(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), a) : n(o);
  }
  function a(o) {
    return r.parser.lazy[r.now().line] ? n(o) : t(o);
  }
}
function gh(e, t, n) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(Cn, t, n);
  }
}
const yh = {
  name: "htmlText",
  tokenize: xh
};
function xh(e, t, n) {
  const r = this;
  let i, a, o;
  return l;
  function l(h) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(h), s;
  }
  function s(h) {
    return h === 33 ? (e.consume(h), u) : h === 47 ? (e.consume(h), S) : h === 63 ? (e.consume(h), E) : ze(h) ? (e.consume(h), Q) : n(h);
  }
  function u(h) {
    return h === 45 ? (e.consume(h), c) : h === 91 ? (e.consume(h), a = 0, g) : ze(h) ? (e.consume(h), A) : n(h);
  }
  function c(h) {
    return h === 45 ? (e.consume(h), p) : n(h);
  }
  function f(h) {
    return h === null ? n(h) : h === 45 ? (e.consume(h), d) : K(h) ? (o = f, ce(h)) : (e.consume(h), f);
  }
  function d(h) {
    return h === 45 ? (e.consume(h), p) : f(h);
  }
  function p(h) {
    return h === 62 ? ae(h) : h === 45 ? d(h) : f(h);
  }
  function g(h) {
    const R = "CDATA[";
    return h === R.charCodeAt(a++) ? (e.consume(h), a === R.length ? v : g) : n(h);
  }
  function v(h) {
    return h === null ? n(h) : h === 93 ? (e.consume(h), k) : K(h) ? (o = v, ce(h)) : (e.consume(h), v);
  }
  function k(h) {
    return h === 93 ? (e.consume(h), b) : v(h);
  }
  function b(h) {
    return h === 62 ? ae(h) : h === 93 ? (e.consume(h), b) : v(h);
  }
  function A(h) {
    return h === null || h === 62 ? ae(h) : K(h) ? (o = A, ce(h)) : (e.consume(h), A);
  }
  function E(h) {
    return h === null ? n(h) : h === 63 ? (e.consume(h), N) : K(h) ? (o = E, ce(h)) : (e.consume(h), E);
  }
  function N(h) {
    return h === 62 ? ae(h) : E(h);
  }
  function S(h) {
    return ze(h) ? (e.consume(h), w) : n(h);
  }
  function w(h) {
    return h === 45 || je(h) ? (e.consume(h), w) : M(h);
  }
  function M(h) {
    return K(h) ? (o = M, ce(h)) : ue(h) ? (e.consume(h), M) : ae(h);
  }
  function Q(h) {
    return h === 45 || je(h) ? (e.consume(h), Q) : h === 47 || h === 62 || xe(h) ? ne(h) : n(h);
  }
  function ne(h) {
    return h === 47 ? (e.consume(h), ae) : h === 58 || h === 95 || ze(h) ? (e.consume(h), C) : K(h) ? (o = ne, ce(h)) : ue(h) ? (e.consume(h), ne) : ae(h);
  }
  function C(h) {
    return h === 45 || h === 46 || h === 58 || h === 95 || je(h) ? (e.consume(h), C) : D(h);
  }
  function D(h) {
    return h === 61 ? (e.consume(h), $) : K(h) ? (o = D, ce(h)) : ue(h) ? (e.consume(h), D) : ne(h);
  }
  function $(h) {
    return h === null || h === 60 || h === 61 || h === 62 || h === 96 ? n(h) : h === 34 || h === 39 ? (e.consume(h), i = h, z) : K(h) ? (o = $, ce(h)) : ue(h) ? (e.consume(h), $) : (e.consume(h), F);
  }
  function z(h) {
    return h === i ? (e.consume(h), i = void 0, q) : h === null ? n(h) : K(h) ? (o = z, ce(h)) : (e.consume(h), z);
  }
  function F(h) {
    return h === null || h === 34 || h === 39 || h === 60 || h === 61 || h === 96 ? n(h) : h === 47 || h === 62 || xe(h) ? ne(h) : (e.consume(h), F);
  }
  function q(h) {
    return h === 47 || h === 62 || xe(h) ? ne(h) : n(h);
  }
  function ae(h) {
    return h === 62 ? (e.consume(h), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(h);
  }
  function ce(h) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), fe;
  }
  function fe(h) {
    return ue(h) ? de(e, ve, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(h) : ve(h);
  }
  function ve(h) {
    return e.enter("htmlTextData"), o(h);
  }
}
const sa = {
  name: "labelEnd",
  resolveAll: wh,
  resolveTo: Eh,
  tokenize: Ch
}, bh = {
  tokenize: Sh
}, vh = {
  tokenize: Th
}, kh = {
  tokenize: Ah
};
function wh(e) {
  let t = -1;
  const n = [];
  for (; ++t < e.length; ) {
    const r = e[t][1];
    if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
      const i = r.type === "labelImage" ? 4 : 2;
      r.type = "data", t += i;
    }
  }
  return e.length !== n.length && Ye(e, 0, e.length, n), e;
}
function Eh(e, t) {
  let n = e.length, r = 0, i, a, o, l;
  for (; n--; )
    if (i = e[n][1], a) {
      if (i.type === "link" || i.type === "labelLink" && i._inactive)
        break;
      e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
    } else if (o) {
      if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (a = n, i.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else i.type === "labelEnd" && (o = n);
  const s = {
    type: e[a][1].type === "labelLink" ? "link" : "image",
    start: {
      ...e[a][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  }, u = {
    type: "label",
    start: {
      ...e[a][1].start
    },
    end: {
      ...e[o][1].end
    }
  }, c = {
    type: "labelText",
    start: {
      ...e[a + r + 2][1].end
    },
    end: {
      ...e[o - 2][1].start
    }
  };
  return l = [["enter", s, t], ["enter", u, t]], l = Xe(l, e.slice(a + 1, a + r + 3)), l = Xe(l, [["enter", c, t]]), l = Xe(l, cr(t.parser.constructs.insideSpan.null, e.slice(a + r + 4, o - 3), t)), l = Xe(l, [["exit", c, t], e[o - 2], e[o - 1], ["exit", u, t]]), l = Xe(l, e.slice(o + 1)), l = Xe(l, [["exit", s, t]]), Ye(e, a, e.length, l), e;
}
function Ch(e, t, n) {
  const r = this;
  let i = r.events.length, a, o;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      a = r.events[i][1];
      break;
    }
  return l;
  function l(d) {
    return a ? a._inactive ? f(d) : (o = r.parser.defined.includes(Ze(r.sliceSerialize({
      start: a.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(d), e.exit("labelMarker"), e.exit("labelEnd"), s) : n(d);
  }
  function s(d) {
    return d === 40 ? e.attempt(bh, c, o ? c : f)(d) : d === 91 ? e.attempt(vh, c, o ? u : f)(d) : o ? c(d) : f(d);
  }
  function u(d) {
    return e.attempt(kh, c, f)(d);
  }
  function c(d) {
    return t(d);
  }
  function f(d) {
    return a._balanced = !0, n(d);
  }
}
function Sh(e, t, n) {
  return r;
  function r(f) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), i;
  }
  function i(f) {
    return xe(f) ? fn(e, a)(f) : a(f);
  }
  function a(f) {
    return f === 41 ? c(f) : Vs(e, o, l, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(f);
  }
  function o(f) {
    return xe(f) ? fn(e, s)(f) : c(f);
  }
  function l(f) {
    return n(f);
  }
  function s(f) {
    return f === 34 || f === 39 || f === 40 ? qs(e, u, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(f) : c(f);
  }
  function u(f) {
    return xe(f) ? fn(e, c)(f) : c(f);
  }
  function c(f) {
    return f === 41 ? (e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), e.exit("resource"), t) : n(f);
  }
}
function Th(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return Ws.call(r, e, a, o, "reference", "referenceMarker", "referenceString")(l);
  }
  function a(l) {
    return r.parser.defined.includes(Ze(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(l) : n(l);
  }
  function o(l) {
    return n(l);
  }
}
function Ah(e, t, n) {
  return r;
  function r(a) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(a), e.exit("referenceMarker"), i;
  }
  function i(a) {
    return a === 93 ? (e.enter("referenceMarker"), e.consume(a), e.exit("referenceMarker"), e.exit("reference"), t) : n(a);
  }
}
const Oh = {
  name: "labelStartImage",
  resolveAll: sa.resolveAll,
  tokenize: Nh
};
function Nh(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(l), e.exit("labelImageMarker"), a;
  }
  function a(l) {
    return l === 91 ? (e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelImage"), o) : n(l);
  }
  function o(l) {
    return l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(l) : t(l);
  }
}
const Ih = {
  name: "labelStartLink",
  resolveAll: sa.resolveAll,
  tokenize: Ph
};
function Ph(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(o), e.exit("labelMarker"), e.exit("labelLink"), a;
  }
  function a(o) {
    return o === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(o) : t(o);
  }
}
const Lr = {
  name: "lineEnding",
  tokenize: Rh
};
function Rh(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), de(e, t, "linePrefix");
  }
}
const $n = {
  name: "thematicBreak",
  tokenize: jh
};
function jh(e, t, n) {
  let r = 0, i;
  return a;
  function a(u) {
    return e.enter("thematicBreak"), o(u);
  }
  function o(u) {
    return i = u, l(u);
  }
  function l(u) {
    return u === i ? (e.enter("thematicBreakSequence"), s(u)) : r >= 3 && (u === null || K(u)) ? (e.exit("thematicBreak"), t(u)) : n(u);
  }
  function s(u) {
    return u === i ? (e.consume(u), r++, s) : (e.exit("thematicBreakSequence"), ue(u) ? de(e, l, "whitespace")(u) : l(u));
  }
}
const Be = {
  continuation: {
    tokenize: Dh
  },
  exit: zh,
  name: "list",
  tokenize: Lh
}, _h = {
  partial: !0,
  tokenize: $h
}, Fh = {
  partial: !0,
  tokenize: Mh
};
function Lh(e, t, n) {
  const r = this, i = r.events[r.events.length - 1];
  let a = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
  return l;
  function l(p) {
    const g = r.containerState.type || (p === 42 || p === 43 || p === 45 ? "listUnordered" : "listOrdered");
    if (g === "listUnordered" ? !r.containerState.marker || p === r.containerState.marker : ui(p)) {
      if (r.containerState.type || (r.containerState.type = g, e.enter(g, {
        _container: !0
      })), g === "listUnordered")
        return e.enter("listItemPrefix"), p === 42 || p === 45 ? e.check($n, n, u)(p) : u(p);
      if (!r.interrupt || p === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), s(p);
    }
    return n(p);
  }
  function s(p) {
    return ui(p) && ++o < 10 ? (e.consume(p), s) : (!r.interrupt || o < 2) && (r.containerState.marker ? p === r.containerState.marker : p === 41 || p === 46) ? (e.exit("listItemValue"), u(p)) : n(p);
  }
  function u(p) {
    return e.enter("listItemMarker"), e.consume(p), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || p, e.check(
      Cn,
      // Can’t be empty when interrupting.
      r.interrupt ? n : c,
      e.attempt(_h, d, f)
    );
  }
  function c(p) {
    return r.containerState.initialBlankLine = !0, a++, d(p);
  }
  function f(p) {
    return ue(p) ? (e.enter("listItemPrefixWhitespace"), e.consume(p), e.exit("listItemPrefixWhitespace"), d) : n(p);
  }
  function d(p) {
    return r.containerState.size = a + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(p);
  }
}
function Dh(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(Cn, i, a);
  function i(l) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, de(e, t, "listItemIndent", r.containerState.size + 1)(l);
  }
  function a(l) {
    return r.containerState.furtherBlankLines || !ue(l) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(l)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(Fh, t, o)(l));
  }
  function o(l) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, de(e, e.attempt(Be, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(l);
  }
}
function Mh(e, t, n) {
  const r = this;
  return de(e, i, "listItemIndent", r.containerState.size + 1);
  function i(a) {
    const o = r.events[r.events.length - 1];
    return o && o[1].type === "listItemIndent" && o[2].sliceSerialize(o[1], !0).length === r.containerState.size ? t(a) : n(a);
  }
}
function zh(e) {
  e.exit(this.containerState.type);
}
function $h(e, t, n) {
  const r = this;
  return de(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(a) {
    const o = r.events[r.events.length - 1];
    return !ue(a) && o && o[1].type === "listItemPrefixWhitespace" ? t(a) : n(a);
  }
}
const ko = {
  name: "setextUnderline",
  resolveTo: Bh,
  tokenize: Uh
};
function Bh(e, t) {
  let n = e.length, r, i, a;
  for (; n--; )
    if (e[n][0] === "enter") {
      if (e[n][1].type === "content") {
        r = n;
        break;
      }
      e[n][1].type === "paragraph" && (i = n);
    } else
      e[n][1].type === "content" && e.splice(n, 1), !a && e[n][1].type === "definition" && (a = n);
  const o = {
    type: "setextHeading",
    start: {
      ...e[i][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  };
  return e[i][1].type = "setextHeadingText", a ? (e.splice(i, 0, ["enter", o, t]), e.splice(a + 1, 0, ["exit", e[r][1], t]), e[r][1].end = {
    ...e[a][1].end
  }) : e[r][1] = o, e.push(["exit", o, t]), e;
}
function Uh(e, t, n) {
  const r = this;
  let i;
  return a;
  function a(u) {
    let c = r.events.length, f;
    for (; c--; )
      if (r.events[c][1].type !== "lineEnding" && r.events[c][1].type !== "linePrefix" && r.events[c][1].type !== "content") {
        f = r.events[c][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || f) ? (e.enter("setextHeadingLine"), i = u, o(u)) : n(u);
  }
  function o(u) {
    return e.enter("setextHeadingLineSequence"), l(u);
  }
  function l(u) {
    return u === i ? (e.consume(u), l) : (e.exit("setextHeadingLineSequence"), ue(u) ? de(e, s, "lineSuffix")(u) : s(u));
  }
  function s(u) {
    return u === null || K(u) ? (e.exit("setextHeadingLine"), t(u)) : n(u);
  }
}
const Hh = {
  tokenize: Vh
};
function Vh(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    Cn,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, i, de(e, e.attempt(this.parser.constructs.flow, i, e.attempt(Kp, i)), "linePrefix"))
  );
  return n;
  function r(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEndingBlank"), e.consume(a), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
  }
  function i(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), t.currentConstruct = void 0, n;
  }
}
const Wh = {
  resolveAll: Gs()
}, qh = Ys("string"), Yh = Ys("text");
function Ys(e) {
  return {
    resolveAll: Gs(e === "text" ? Gh : void 0),
    tokenize: t
  };
  function t(n) {
    const r = this, i = this.parser.constructs[e], a = n.attempt(i, o, l);
    return o;
    function o(c) {
      return u(c) ? a(c) : l(c);
    }
    function l(c) {
      if (c === null) {
        n.consume(c);
        return;
      }
      return n.enter("data"), n.consume(c), s;
    }
    function s(c) {
      return u(c) ? (n.exit("data"), a(c)) : (n.consume(c), s);
    }
    function u(c) {
      if (c === null)
        return !0;
      const f = i[c];
      let d = -1;
      if (f)
        for (; ++d < f.length; ) {
          const p = f[d];
          if (!p.previous || p.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function Gs(e) {
  return t;
  function t(n, r) {
    let i = -1, a;
    for (; ++i <= n.length; )
      a === void 0 ? n[i] && n[i][1].type === "data" && (a = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== a + 2 && (n[a][1].end = n[i - 1][1].end, n.splice(a + 2, i - a - 2), i = a + 2), a = void 0);
    return e ? e(n, r) : n;
  }
}
function Gh(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
      const r = e[n - 1][1], i = t.sliceStream(r);
      let a = i.length, o = -1, l = 0, s;
      for (; a--; ) {
        const u = i[a];
        if (typeof u == "string") {
          for (o = u.length; u.charCodeAt(o - 1) === 32; )
            l++, o--;
          if (o) break;
          o = -1;
        } else if (u === -2)
          s = !0, l++;
        else if (u !== -1) {
          a++;
          break;
        }
      }
      if (l) {
        const u = {
          type: n === e.length || s || l < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: a ? o : r.start._bufferIndex + o,
            _index: r.start._index + a,
            line: r.end.line,
            column: r.end.column - l,
            offset: r.end.offset - l
          },
          end: {
            ...r.end
          }
        };
        r.end = {
          ...u.start
        }, r.start.offset === r.end.offset ? Object.assign(r, u) : (e.splice(n, 0, ["enter", u, t], ["exit", u, t]), n += 2);
      }
      n++;
    }
  return e;
}
const Kh = {
  42: Be,
  43: Be,
  45: Be,
  48: Be,
  49: Be,
  50: Be,
  51: Be,
  52: Be,
  53: Be,
  54: Be,
  55: Be,
  56: Be,
  57: Be,
  62: $s
}, Xh = {
  91: eh
}, Qh = {
  [-2]: Fr,
  [-1]: Fr,
  32: Fr
}, Jh = {
  35: oh,
  42: $n,
  45: [ko, $n],
  60: ch,
  61: ko,
  95: $n,
  96: bo,
  126: bo
}, Zh = {
  38: Us,
  92: Bs
}, em = {
  [-5]: Lr,
  [-4]: Lr,
  [-3]: Lr,
  33: Oh,
  38: Us,
  42: ci,
  60: [Ip, yh],
  91: Ih,
  92: [ih, Bs],
  93: sa,
  95: ci,
  96: Hp
}, tm = {
  null: [ci, Wh]
}, nm = {
  null: [42, 95]
}, rm = {
  null: []
}, im = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: nm,
  contentInitial: Xh,
  disable: rm,
  document: Kh,
  flow: Jh,
  flowInitial: Qh,
  insideSpan: tm,
  string: Zh,
  text: em
}, Symbol.toStringTag, { value: "Module" }));
function am(e, t, n) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: n && n.line || 1,
    column: n && n.column || 1,
    offset: n && n.offset || 0
  };
  const i = {}, a = [];
  let o = [], l = [];
  const s = {
    attempt: M(S),
    check: M(w),
    consume: A,
    enter: E,
    exit: N,
    interrupt: M(w, {
      interrupt: !0
    })
  }, u = {
    code: null,
    containerState: {},
    defineSkip: v,
    events: [],
    now: g,
    parser: e,
    previous: null,
    sliceSerialize: d,
    sliceStream: p,
    write: f
  };
  let c = t.tokenize.call(u, s);
  return t.resolveAll && a.push(t), u;
  function f(D) {
    return o = Xe(o, D), k(), o[o.length - 1] !== null ? [] : (Q(t, 0), u.events = cr(a, u.events, u), u.events);
  }
  function d(D, $) {
    return lm(p(D), $);
  }
  function p(D) {
    return om(o, D);
  }
  function g() {
    const {
      _bufferIndex: D,
      _index: $,
      line: z,
      column: F,
      offset: q
    } = r;
    return {
      _bufferIndex: D,
      _index: $,
      line: z,
      column: F,
      offset: q
    };
  }
  function v(D) {
    i[D.line] = D.column, C();
  }
  function k() {
    let D;
    for (; r._index < o.length; ) {
      const $ = o[r._index];
      if (typeof $ == "string")
        for (D = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === D && r._bufferIndex < $.length; )
          b($.charCodeAt(r._bufferIndex));
      else
        b($);
    }
  }
  function b(D) {
    c = c(D);
  }
  function A(D) {
    K(D) ? (r.line++, r.column = 1, r.offset += D === -3 ? 2 : 1, C()) : D !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    o[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = D;
  }
  function E(D, $) {
    const z = $ || {};
    return z.type = D, z.start = g(), u.events.push(["enter", z, u]), l.push(z), z;
  }
  function N(D) {
    const $ = l.pop();
    return $.end = g(), u.events.push(["exit", $, u]), $;
  }
  function S(D, $) {
    Q(D, $.from);
  }
  function w(D, $) {
    $.restore();
  }
  function M(D, $) {
    return z;
    function z(F, q, ae) {
      let ce, fe, ve, h;
      return Array.isArray(F) ? (
        /* c8 ignore next 1 */
        G(F)
      ) : "tokenize" in F ? (
        // Looks like a construct.
        G([
          /** @type {Construct} */
          F
        ])
      ) : R(F);
      function R(V) {
        return J;
        function J(ee) {
          const re = ee !== null && V[ee], te = ee !== null && V.null, we = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(re) ? re : re ? [re] : [],
            ...Array.isArray(te) ? te : te ? [te] : []
          ];
          return G(we)(ee);
        }
      }
      function G(V) {
        return ce = V, fe = 0, V.length === 0 ? ae : m(V[fe]);
      }
      function m(V) {
        return J;
        function J(ee) {
          return h = ne(), ve = V, V.partial || (u.currentConstruct = V), V.name && u.parser.constructs.disable.null.includes(V.name) ? X() : V.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            $ ? Object.assign(Object.create(u), $) : u,
            s,
            L,
            X
          )(ee);
        }
      }
      function L(V) {
        return D(ve, h), q;
      }
      function X(V) {
        return h.restore(), ++fe < ce.length ? m(ce[fe]) : ae;
      }
    }
  }
  function Q(D, $) {
    D.resolveAll && !a.includes(D) && a.push(D), D.resolve && Ye(u.events, $, u.events.length - $, D.resolve(u.events.slice($), u)), D.resolveTo && (u.events = D.resolveTo(u.events, u));
  }
  function ne() {
    const D = g(), $ = u.previous, z = u.currentConstruct, F = u.events.length, q = Array.from(l);
    return {
      from: F,
      restore: ae
    };
    function ae() {
      r = D, u.previous = $, u.currentConstruct = z, u.events.length = F, l = q, C();
    }
  }
  function C() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function om(e, t) {
  const n = t.start._index, r = t.start._bufferIndex, i = t.end._index, a = t.end._bufferIndex;
  let o;
  if (n === i)
    o = [e[n].slice(r, a)];
  else {
    if (o = e.slice(n, i), r > -1) {
      const l = o[0];
      typeof l == "string" ? o[0] = l.slice(r) : o.shift();
    }
    a > 0 && o.push(e[i].slice(0, a));
  }
  return o;
}
function lm(e, t) {
  let n = -1;
  const r = [];
  let i;
  for (; ++n < e.length; ) {
    const a = e[n];
    let o;
    if (typeof a == "string")
      o = a;
    else switch (a) {
      case -5: {
        o = "\r";
        break;
      }
      case -4: {
        o = `
`;
        break;
      }
      case -3: {
        o = `\r
`;
        break;
      }
      case -2: {
        o = t ? " " : "	";
        break;
      }
      case -1: {
        if (!t && i) continue;
        o = " ";
        break;
      }
      default:
        o = String.fromCharCode(a);
    }
    i = a === -2, r.push(o);
  }
  return r.join("");
}
function sm(e) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      Ms([im, ...(e || {}).extensions || []])
    ),
    content: i(Ep),
    defined: [],
    document: i(Sp),
    flow: i(Hh),
    lazy: {},
    string: i(qh),
    text: i(Yh)
  };
  return r;
  function i(a) {
    return o;
    function o(l) {
      return am(r, a, l);
    }
  }
}
function um(e) {
  for (; !Hs(e); )
    ;
  return e;
}
const wo = /[\0\t\n\r]/g;
function cm() {
  let e = 1, t = "", n = !0, r;
  return i;
  function i(a, o, l) {
    const s = [];
    let u, c, f, d, p;
    for (a = t + (typeof a == "string" ? a.toString() : new TextDecoder(o || void 0).decode(a)), f = 0, t = "", n && (a.charCodeAt(0) === 65279 && f++, n = void 0); f < a.length; ) {
      if (wo.lastIndex = f, u = wo.exec(a), d = u && u.index !== void 0 ? u.index : a.length, p = a.charCodeAt(d), !u) {
        t = a.slice(f);
        break;
      }
      if (p === 10 && f === d && r)
        s.push(-3), r = void 0;
      else
        switch (r && (s.push(-5), r = void 0), f < d && (s.push(a.slice(f, d)), e += d - f), p) {
          case 0: {
            s.push(65533), e++;
            break;
          }
          case 9: {
            for (c = Math.ceil(e / 4) * 4, s.push(-2); e++ < c; ) s.push(-1);
            break;
          }
          case 10: {
            s.push(-4), e = 1;
            break;
          }
          default:
            r = !0, e = 1;
        }
      f = d + 1;
    }
    return l && (r && s.push(-5), t && s.push(t), s.push(null)), s;
  }
}
const fm = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function dm(e) {
  return e.replace(fm, pm);
}
function pm(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1), a = i === 120 || i === 88;
    return zs(n.slice(a ? 2 : 1), a ? 16 : 10);
  }
  return la(n) || e;
}
const Ks = {}.hasOwnProperty;
function hm(e, t, n) {
  return typeof t != "string" && (n = t, t = void 0), mm(n)(um(sm(n).document().write(cm()(e, t, !0))));
}
function mm(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: a(Zt),
      autolinkProtocol: ne,
      autolinkEmail: ne,
      atxHeading: a(he),
      blockQuote: a(te),
      characterEscape: ne,
      characterReference: ne,
      codeFenced: a(we),
      codeFencedFenceInfo: o,
      codeFencedFenceMeta: o,
      codeIndented: a(we, o),
      codeText: a(_, o),
      codeTextData: ne,
      data: ne,
      codeFlowValue: ne,
      definition: a(Oe),
      definitionDestinationString: o,
      definitionLabelString: o,
      definitionTitleString: o,
      emphasis: a(De),
      hardBreakEscape: a(Ct),
      hardBreakTrailing: a(Ct),
      htmlFlow: a(ot, o),
      htmlFlowData: ne,
      htmlText: a(ot, o),
      htmlTextData: ne,
      image: a(On),
      label: o,
      link: a(Zt),
      listItem: a(x),
      listItemValue: d,
      listOrdered: a(en, f),
      listUnordered: a(en),
      paragraph: a(U),
      reference: m,
      referenceString: o,
      resourceDestinationString: o,
      resourceTitleString: o,
      setextHeading: a(he),
      strong: a(H),
      thematicBreak: a(Pe)
    },
    exit: {
      atxHeading: s(),
      atxHeadingSequence: S,
      autolink: s(),
      autolinkEmail: re,
      autolinkProtocol: ee,
      blockQuote: s(),
      characterEscapeValue: C,
      characterReferenceMarkerHexadecimal: X,
      characterReferenceMarkerNumeric: X,
      characterReferenceValue: V,
      characterReference: J,
      codeFenced: s(k),
      codeFencedFence: v,
      codeFencedFenceInfo: p,
      codeFencedFenceMeta: g,
      codeFlowValue: C,
      codeIndented: s(b),
      codeText: s(q),
      codeTextData: C,
      data: C,
      definition: s(),
      definitionDestinationString: N,
      definitionLabelString: A,
      definitionTitleString: E,
      emphasis: s(),
      hardBreakEscape: s($),
      hardBreakTrailing: s($),
      htmlFlow: s(z),
      htmlFlowData: C,
      htmlText: s(F),
      htmlTextData: C,
      image: s(ce),
      label: ve,
      labelText: fe,
      lineEnding: D,
      link: s(ae),
      listItem: s(),
      listOrdered: s(),
      listUnordered: s(),
      paragraph: s(),
      referenceString: L,
      resourceDestinationString: h,
      resourceTitleString: R,
      resource: G,
      setextHeading: s(Q),
      setextHeadingLineSequence: M,
      setextHeadingText: w,
      strong: s(),
      thematicBreak: s()
    }
  };
  Xs(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(T) {
    let O = {
      type: "root",
      children: []
    };
    const Y = {
      stack: [O],
      tokenStack: [],
      config: t,
      enter: l,
      exit: u,
      buffer: o,
      resume: c,
      data: n
    }, oe = [];
    let ie = -1;
    for (; ++ie < T.length; )
      if (T[ie][1].type === "listOrdered" || T[ie][1].type === "listUnordered")
        if (T[ie][0] === "enter")
          oe.push(ie);
        else {
          const Ne = oe.pop();
          ie = i(T, Ne, ie);
        }
    for (ie = -1; ++ie < T.length; ) {
      const Ne = t[T[ie][0]];
      Ks.call(Ne, T[ie][1].type) && Ne[T[ie][1].type].call(Object.assign({
        sliceSerialize: T[ie][2].sliceSerialize
      }, Y), T[ie][1]);
    }
    if (Y.tokenStack.length > 0) {
      const Ne = Y.tokenStack[Y.tokenStack.length - 1];
      (Ne[1] || Eo).call(Y, void 0, Ne[0]);
    }
    for (O.position = {
      start: yt(T.length > 0 ? T[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: yt(T.length > 0 ? T[T.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, ie = -1; ++ie < t.transforms.length; )
      O = t.transforms[ie](O) || O;
    return O;
  }
  function i(T, O, Y) {
    let oe = O - 1, ie = -1, Ne = !1, He, Re, et, Me;
    for (; ++oe <= Y; ) {
      const Ve = T[oe];
      switch (Ve[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          Ve[0] === "enter" ? ie++ : ie--, Me = void 0;
          break;
        }
        case "lineEndingBlank": {
          Ve[0] === "enter" && (He && !Me && !ie && !et && (et = oe), Me = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          Me = void 0;
      }
      if (!ie && Ve[0] === "enter" && Ve[1].type === "listItemPrefix" || ie === -1 && Ve[0] === "exit" && (Ve[1].type === "listUnordered" || Ve[1].type === "listOrdered")) {
        if (He) {
          let jt = oe;
          for (Re = void 0; jt--; ) {
            const lt = T[jt];
            if (lt[1].type === "lineEnding" || lt[1].type === "lineEndingBlank") {
              if (lt[0] === "exit") continue;
              Re && (T[Re][1].type = "lineEndingBlank", Ne = !0), lt[1].type = "lineEnding", Re = jt;
            } else if (!(lt[1].type === "linePrefix" || lt[1].type === "blockQuotePrefix" || lt[1].type === "blockQuotePrefixWhitespace" || lt[1].type === "blockQuoteMarker" || lt[1].type === "listItemIndent")) break;
          }
          et && (!Re || et < Re) && (He._spread = !0), He.end = Object.assign({}, Re ? T[Re][1].start : Ve[1].end), T.splice(Re || oe, 0, ["exit", He, Ve[2]]), oe++, Y++;
        }
        if (Ve[1].type === "listItemPrefix") {
          const jt = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, Ve[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          He = jt, T.splice(oe, 0, ["enter", jt, Ve[2]]), oe++, Y++, et = void 0, Me = !0;
        }
      }
    }
    return T[O][1]._spread = Ne, Y;
  }
  function a(T, O) {
    return Y;
    function Y(oe) {
      l.call(this, T(oe), oe), O && O.call(this, oe);
    }
  }
  function o() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function l(T, O, Y) {
    this.stack[this.stack.length - 1].children.push(T), this.stack.push(T), this.tokenStack.push([O, Y || void 0]), T.position = {
      start: yt(O.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function s(T) {
    return O;
    function O(Y) {
      T && T.call(this, Y), u.call(this, Y);
    }
  }
  function u(T, O) {
    const Y = this.stack.pop(), oe = this.tokenStack.pop();
    if (oe)
      oe[0].type !== T.type && (O ? O.call(this, T, oe[0]) : (oe[1] || Eo).call(this, T, oe[0]));
    else throw new Error("Cannot close `" + T.type + "` (" + cn({
      start: T.start,
      end: T.end
    }) + "): it’s not open");
    Y.position.end = yt(T.end);
  }
  function c() {
    return oa(this.stack.pop());
  }
  function f() {
    this.data.expectingFirstListItemValue = !0;
  }
  function d(T) {
    if (this.data.expectingFirstListItemValue) {
      const O = this.stack[this.stack.length - 2];
      O.start = Number.parseInt(this.sliceSerialize(T), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function p() {
    const T = this.resume(), O = this.stack[this.stack.length - 1];
    O.lang = T;
  }
  function g() {
    const T = this.resume(), O = this.stack[this.stack.length - 1];
    O.meta = T;
  }
  function v() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function k() {
    const T = this.resume(), O = this.stack[this.stack.length - 1];
    O.value = T.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function b() {
    const T = this.resume(), O = this.stack[this.stack.length - 1];
    O.value = T.replace(/(\r?\n|\r)$/g, "");
  }
  function A(T) {
    const O = this.resume(), Y = this.stack[this.stack.length - 1];
    Y.label = O, Y.identifier = Ze(this.sliceSerialize(T)).toLowerCase();
  }
  function E() {
    const T = this.resume(), O = this.stack[this.stack.length - 1];
    O.title = T;
  }
  function N() {
    const T = this.resume(), O = this.stack[this.stack.length - 1];
    O.url = T;
  }
  function S(T) {
    const O = this.stack[this.stack.length - 1];
    if (!O.depth) {
      const Y = this.sliceSerialize(T).length;
      O.depth = Y;
    }
  }
  function w() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function M(T) {
    const O = this.stack[this.stack.length - 1];
    O.depth = this.sliceSerialize(T).codePointAt(0) === 61 ? 1 : 2;
  }
  function Q() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function ne(T) {
    const Y = this.stack[this.stack.length - 1].children;
    let oe = Y[Y.length - 1];
    (!oe || oe.type !== "text") && (oe = pe(), oe.position = {
      start: yt(T.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, Y.push(oe)), this.stack.push(oe);
  }
  function C(T) {
    const O = this.stack.pop();
    O.value += this.sliceSerialize(T), O.position.end = yt(T.end);
  }
  function D(T) {
    const O = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const Y = O.children[O.children.length - 1];
      Y.position.end = yt(T.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(O.type) && (ne.call(this, T), C.call(this, T));
  }
  function $() {
    this.data.atHardBreak = !0;
  }
  function z() {
    const T = this.resume(), O = this.stack[this.stack.length - 1];
    O.value = T;
  }
  function F() {
    const T = this.resume(), O = this.stack[this.stack.length - 1];
    O.value = T;
  }
  function q() {
    const T = this.resume(), O = this.stack[this.stack.length - 1];
    O.value = T;
  }
  function ae() {
    const T = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const O = this.data.referenceType || "shortcut";
      T.type += "Reference", T.referenceType = O, delete T.url, delete T.title;
    } else
      delete T.identifier, delete T.label;
    this.data.referenceType = void 0;
  }
  function ce() {
    const T = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const O = this.data.referenceType || "shortcut";
      T.type += "Reference", T.referenceType = O, delete T.url, delete T.title;
    } else
      delete T.identifier, delete T.label;
    this.data.referenceType = void 0;
  }
  function fe(T) {
    const O = this.sliceSerialize(T), Y = this.stack[this.stack.length - 2];
    Y.label = dm(O), Y.identifier = Ze(O).toLowerCase();
  }
  function ve() {
    const T = this.stack[this.stack.length - 1], O = this.resume(), Y = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, Y.type === "link") {
      const oe = T.children;
      Y.children = oe;
    } else
      Y.alt = O;
  }
  function h() {
    const T = this.resume(), O = this.stack[this.stack.length - 1];
    O.url = T;
  }
  function R() {
    const T = this.resume(), O = this.stack[this.stack.length - 1];
    O.title = T;
  }
  function G() {
    this.data.inReference = void 0;
  }
  function m() {
    this.data.referenceType = "collapsed";
  }
  function L(T) {
    const O = this.resume(), Y = this.stack[this.stack.length - 1];
    Y.label = O, Y.identifier = Ze(this.sliceSerialize(T)).toLowerCase(), this.data.referenceType = "full";
  }
  function X(T) {
    this.data.characterReferenceType = T.type;
  }
  function V(T) {
    const O = this.sliceSerialize(T), Y = this.data.characterReferenceType;
    let oe;
    Y ? (oe = zs(O, Y === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : oe = la(O);
    const ie = this.stack[this.stack.length - 1];
    ie.value += oe;
  }
  function J(T) {
    const O = this.stack.pop();
    O.position.end = yt(T.end);
  }
  function ee(T) {
    C.call(this, T);
    const O = this.stack[this.stack.length - 1];
    O.url = this.sliceSerialize(T);
  }
  function re(T) {
    C.call(this, T);
    const O = this.stack[this.stack.length - 1];
    O.url = "mailto:" + this.sliceSerialize(T);
  }
  function te() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function we() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function _() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function Oe() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function De() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function he() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function Ct() {
    return {
      type: "break"
    };
  }
  function ot() {
    return {
      type: "html",
      value: ""
    };
  }
  function On() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function Zt() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function en(T) {
    return {
      type: "list",
      ordered: T.type === "listOrdered",
      start: null,
      spread: T._spread,
      children: []
    };
  }
  function x(T) {
    return {
      type: "listItem",
      spread: T._spread,
      checked: null,
      children: []
    };
  }
  function U() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function H() {
    return {
      type: "strong",
      children: []
    };
  }
  function pe() {
    return {
      type: "text",
      value: ""
    };
  }
  function Pe() {
    return {
      type: "thematicBreak"
    };
  }
}
function yt(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function Xs(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? Xs(e, r) : gm(e, r);
  }
}
function gm(e, t) {
  let n;
  for (n in t)
    if (Ks.call(t, n))
      switch (n) {
        case "canContainEols": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "transforms": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "enter":
        case "exit": {
          const r = t[n];
          r && Object.assign(e[n], r);
          break;
        }
      }
}
function Eo(e, t) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + cn({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + t.type + "`, " + cn({
    start: t.start,
    end: t.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + cn({
    start: t.start,
    end: t.end
  }) + ") is still open");
}
function ym(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return hm(r, {
      ...t.data("settings"),
      ...e,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: t.data("micromarkExtensions") || [],
      mdastExtensions: t.data("fromMarkdownExtensions") || []
    });
  }
}
function xm(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function bm(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function vm(e, t) {
  const n = t.value ? t.value + `
` : "", r = {};
  t.lang && (r.className = ["language-" + t.lang]);
  let i = {
    type: "element",
    tagName: "code",
    properties: r,
    children: [{ type: "text", value: n }]
  };
  return t.meta && (i.data = { meta: t.meta }), e.patch(t, i), i = e.applyData(t, i), i = { type: "element", tagName: "pre", properties: {}, children: [i] }, e.patch(t, i), i;
}
function km(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function wm(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Em(e, t) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = Qt(r.toLowerCase()), a = e.footnoteOrder.indexOf(r);
  let o, l = e.footnoteCounts.get(r);
  l === void 0 ? (l = 0, e.footnoteOrder.push(r), o = e.footnoteOrder.length) : o = a + 1, l += 1, e.footnoteCounts.set(r, l);
  const s = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + n + "fn-" + i,
      id: n + "fnref-" + i + (l > 1 ? "-" + l : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(o) }]
  };
  e.patch(t, s);
  const u = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [s]
  };
  return e.patch(t, u), e.applyData(t, u);
}
function Cm(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Sm(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function Qs(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + r }];
  const i = e.all(t), a = i[0];
  a && a.type === "text" ? a.value = "[" + a.value : i.unshift({ type: "text", value: "[" });
  const o = i[i.length - 1];
  return o && o.type === "text" ? o.value += r : i.push({ type: "text", value: r }), i;
}
function Tm(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return Qs(e, t);
  const i = { src: Qt(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const a = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(t, a), e.applyData(t, a);
}
function Am(e, t) {
  const n = { src: Qt(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function Om(e, t) {
  const n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
  e.patch(t, n);
  const r = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [n]
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Nm(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return Qs(e, t);
  const i = { href: Qt(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const a = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(t)
  };
  return e.patch(t, a), e.applyData(t, a);
}
function Im(e, t) {
  const n = { href: Qt(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Pm(e, t, n) {
  const r = e.all(t), i = n ? Rm(n) : Js(t), a = {}, o = [];
  if (typeof t.checked == "boolean") {
    const c = r[0];
    let f;
    c && c.type === "element" && c.tagName === "p" ? f = c : (f = { type: "element", tagName: "p", properties: {}, children: [] }, r.unshift(f)), f.children.length > 0 && f.children.unshift({ type: "text", value: " " }), f.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: t.checked, disabled: !0 },
      children: []
    }), a.className = ["task-list-item"];
  }
  let l = -1;
  for (; ++l < r.length; ) {
    const c = r[l];
    (i || l !== 0 || c.type !== "element" || c.tagName !== "p") && o.push({ type: "text", value: `
` }), c.type === "element" && c.tagName === "p" && !i ? o.push(...c.children) : o.push(c);
  }
  const s = r[r.length - 1];
  s && (i || s.type !== "element" || s.tagName !== "p") && o.push({ type: "text", value: `
` });
  const u = { type: "element", tagName: "li", properties: a, children: o };
  return e.patch(t, u), e.applyData(t, u);
}
function Rm(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = Js(n[r]);
  }
  return t;
}
function Js(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function jm(e, t) {
  const n = {}, r = e.all(t);
  let i = -1;
  for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length; ) {
    const o = r[i];
    if (o.type === "element" && o.tagName === "li" && o.properties && Array.isArray(o.properties.className) && o.properties.className.includes("task-list-item")) {
      n.className = ["contains-task-list"];
      break;
    }
  }
  const a = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: n,
    children: e.wrap(r, !0)
  };
  return e.patch(t, a), e.applyData(t, a);
}
function _m(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Fm(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Lm(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Dm(e, t) {
  const n = e.all(t), r = n.shift(), i = [];
  if (r) {
    const o = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0)
    };
    e.patch(t.children[0], o), i.push(o);
  }
  if (n.length > 0) {
    const o = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: e.wrap(n, !0)
    }, l = na(t.children[1]), s = Ps(t.children[t.children.length - 1]);
    l && s && (o.position = { start: l, end: s }), i.push(o);
  }
  const a = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0)
  };
  return e.patch(t, a), e.applyData(t, a);
}
function Mm(e, t, n) {
  const r = n ? n.children : void 0, a = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", o = n && n.type === "table" ? n.align : void 0, l = o ? o.length : t.children.length;
  let s = -1;
  const u = [];
  for (; ++s < l; ) {
    const f = t.children[s], d = {}, p = o ? o[s] : void 0;
    p && (d.align = p);
    let g = { type: "element", tagName: a, properties: d, children: [] };
    f && (g.children = e.all(f), e.patch(f, g), g = e.applyData(f, g)), u.push(g);
  }
  const c = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(u, !0)
  };
  return e.patch(t, c), e.applyData(t, c);
}
function zm(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Co = 9, So = 32;
function $m(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), i = 0;
  const a = [];
  for (; r; )
    a.push(
      To(t.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = n.exec(t);
  return a.push(To(t.slice(i), i > 0, !1)), a.join("");
}
function To(e, t, n) {
  let r = 0, i = e.length;
  if (t) {
    let a = e.codePointAt(r);
    for (; a === Co || a === So; )
      r++, a = e.codePointAt(r);
  }
  if (n) {
    let a = e.codePointAt(i - 1);
    for (; a === Co || a === So; )
      i--, a = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function Bm(e, t) {
  const n = { type: "text", value: $m(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Um(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Hm = {
  blockquote: xm,
  break: bm,
  code: vm,
  delete: km,
  emphasis: wm,
  footnoteReference: Em,
  heading: Cm,
  html: Sm,
  imageReference: Tm,
  image: Am,
  inlineCode: Om,
  linkReference: Nm,
  link: Im,
  listItem: Pm,
  list: jm,
  paragraph: _m,
  // @ts-expect-error: root is different, but hard to type.
  root: Fm,
  strong: Lm,
  table: Dm,
  tableCell: zm,
  tableRow: Mm,
  text: Bm,
  thematicBreak: Um,
  toml: _n,
  yaml: _n,
  definition: _n,
  footnoteDefinition: _n
};
function _n() {
}
const Zs = -1, fr = 0, dn = 1, Gn = 2, ua = 3, ca = 4, fa = 5, da = 6, eu = 7, tu = 8, Ao = typeof self == "object" ? self : globalThis, Vm = (e, t) => {
  const n = (i, a) => (e.set(a, i), i), r = (i) => {
    if (e.has(i))
      return e.get(i);
    const [a, o] = t[i];
    switch (a) {
      case fr:
      case Zs:
        return n(o, i);
      case dn: {
        const l = n([], i);
        for (const s of o)
          l.push(r(s));
        return l;
      }
      case Gn: {
        const l = n({}, i);
        for (const [s, u] of o)
          l[r(s)] = r(u);
        return l;
      }
      case ua:
        return n(new Date(o), i);
      case ca: {
        const { source: l, flags: s } = o;
        return n(new RegExp(l, s), i);
      }
      case fa: {
        const l = n(/* @__PURE__ */ new Map(), i);
        for (const [s, u] of o)
          l.set(r(s), r(u));
        return l;
      }
      case da: {
        const l = n(/* @__PURE__ */ new Set(), i);
        for (const s of o)
          l.add(r(s));
        return l;
      }
      case eu: {
        const { name: l, message: s } = o;
        return n(new Ao[l](s), i);
      }
      case tu:
        return n(BigInt(o), i);
      case "BigInt":
        return n(Object(BigInt(o)), i);
      case "ArrayBuffer":
        return n(new Uint8Array(o).buffer, o);
      case "DataView": {
        const { buffer: l } = new Uint8Array(o);
        return n(new DataView(l), o);
      }
    }
    return n(new Ao[a](o), i);
  };
  return r;
}, Oo = (e) => Vm(/* @__PURE__ */ new Map(), e)(0), zt = "", { toString: Wm } = {}, { keys: qm } = Object, ln = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [fr, t];
  const n = Wm.call(e).slice(8, -1);
  switch (n) {
    case "Array":
      return [dn, zt];
    case "Object":
      return [Gn, zt];
    case "Date":
      return [ua, zt];
    case "RegExp":
      return [ca, zt];
    case "Map":
      return [fa, zt];
    case "Set":
      return [da, zt];
    case "DataView":
      return [dn, n];
  }
  return n.includes("Array") ? [dn, n] : n.includes("Error") ? [eu, n] : [Gn, n];
}, Fn = ([e, t]) => e === fr && (t === "function" || t === "symbol"), Ym = (e, t, n, r) => {
  const i = (o, l) => {
    const s = r.push(o) - 1;
    return n.set(l, s), s;
  }, a = (o) => {
    if (n.has(o))
      return n.get(o);
    let [l, s] = ln(o);
    switch (l) {
      case fr: {
        let c = o;
        switch (s) {
          case "bigint":
            l = tu, c = o.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + s);
            c = null;
            break;
          case "undefined":
            return i([Zs], o);
        }
        return i([l, c], o);
      }
      case dn: {
        if (s) {
          let d = o;
          return s === "DataView" ? d = new Uint8Array(o.buffer) : s === "ArrayBuffer" && (d = new Uint8Array(o)), i([s, [...d]], o);
        }
        const c = [], f = i([l, c], o);
        for (const d of o)
          c.push(a(d));
        return f;
      }
      case Gn: {
        if (s)
          switch (s) {
            case "BigInt":
              return i([s, o.toString()], o);
            case "Boolean":
            case "Number":
            case "String":
              return i([s, o.valueOf()], o);
          }
        if (t && "toJSON" in o)
          return a(o.toJSON());
        const c = [], f = i([l, c], o);
        for (const d of qm(o))
          (e || !Fn(ln(o[d]))) && c.push([a(d), a(o[d])]);
        return f;
      }
      case ua:
        return i([l, o.toISOString()], o);
      case ca: {
        const { source: c, flags: f } = o;
        return i([l, { source: c, flags: f }], o);
      }
      case fa: {
        const c = [], f = i([l, c], o);
        for (const [d, p] of o)
          (e || !(Fn(ln(d)) || Fn(ln(p)))) && c.push([a(d), a(p)]);
        return f;
      }
      case da: {
        const c = [], f = i([l, c], o);
        for (const d of o)
          (e || !Fn(ln(d))) && c.push(a(d));
        return f;
      }
    }
    const { message: u } = o;
    return i([l, { name: s, message: u }], o);
  };
  return a;
}, No = (e, { json: t, lossy: n } = {}) => {
  const r = [];
  return Ym(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, Kn = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? Oo(No(e, t)) : structuredClone(e)
) : (e, t) => Oo(No(e, t));
function Gm(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return t > 1 && n.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), n;
}
function Km(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function Xm(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || Gm, r = e.options.footnoteBackLabel || Km, i = e.options.footnoteLabel || "Footnotes", a = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, l = [];
  let s = -1;
  for (; ++s < e.footnoteOrder.length; ) {
    const u = e.footnoteById.get(
      e.footnoteOrder[s]
    );
    if (!u)
      continue;
    const c = e.all(u), f = String(u.identifier).toUpperCase(), d = Qt(f.toLowerCase());
    let p = 0;
    const g = [], v = e.footnoteCounts.get(f);
    for (; v !== void 0 && ++p <= v; ) {
      g.length > 0 && g.push({ type: "text", value: " " });
      let A = typeof n == "string" ? n : n(s, p);
      typeof A == "string" && (A = { type: "text", value: A }), g.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + t + "fnref-" + d + (p > 1 ? "-" + p : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(s, p),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(A) ? A : [A]
      });
    }
    const k = c[c.length - 1];
    if (k && k.type === "element" && k.tagName === "p") {
      const A = k.children[k.children.length - 1];
      A && A.type === "text" ? A.value += " " : k.children.push({ type: "text", value: " " }), k.children.push(...g);
    } else
      c.push(...g);
    const b = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + d },
      children: e.wrap(c, !0)
    };
    e.patch(u, b), l.push(b);
  }
  if (l.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: a,
          properties: {
            ...Kn(o),
            id: "footnote-label"
          },
          children: [{ type: "text", value: i }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(l, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
const dr = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  function(e) {
    if (e == null)
      return eg;
    if (typeof e == "function")
      return pr(e);
    if (typeof e == "object")
      return Array.isArray(e) ? Qm(e) : Jm(e);
    if (typeof e == "string")
      return Zm(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function Qm(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = dr(e[n]);
  return pr(r);
  function r(...i) {
    let a = -1;
    for (; ++a < t.length; )
      if (t[a].apply(this, i)) return !0;
    return !1;
  }
}
function Jm(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return pr(n);
  function n(r) {
    const i = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let a;
    for (a in e)
      if (i[a] !== t[a]) return !1;
    return !0;
  }
}
function Zm(e) {
  return pr(t);
  function t(n) {
    return n && n.type === e;
  }
}
function pr(e) {
  return t;
  function t(n, r, i) {
    return !!(tg(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function eg() {
  return !0;
}
function tg(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const nu = [], ng = !0, fi = !1, rg = "skip";
function ru(e, t, n, r) {
  let i;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
  const a = dr(i), o = r ? -1 : 1;
  l(e, void 0, [])();
  function l(s, u, c) {
    const f = (
      /** @type {Record<string, unknown>} */
      s && typeof s == "object" ? s : {}
    );
    if (typeof f.type == "string") {
      const p = (
        // `hast`
        typeof f.tagName == "string" ? f.tagName : (
          // `xast`
          typeof f.name == "string" ? f.name : void 0
        )
      );
      Object.defineProperty(d, "name", {
        value: "node (" + (s.type + (p ? "<" + p + ">" : "")) + ")"
      });
    }
    return d;
    function d() {
      let p = nu, g, v, k;
      if ((!t || a(s, u, c[c.length - 1] || void 0)) && (p = ig(n(s, c)), p[0] === fi))
        return p;
      if ("children" in s && s.children) {
        const b = (
          /** @type {UnistParent} */
          s
        );
        if (b.children && p[0] !== rg)
          for (v = (r ? b.children.length : -1) + o, k = c.concat(b); v > -1 && v < b.children.length; ) {
            const A = b.children[v];
            if (g = l(A, v, k)(), g[0] === fi)
              return g;
            v = typeof g[1] == "number" ? g[1] : v + o;
          }
      }
      return p;
    }
  }
}
function ig(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [ng, e] : e == null ? nu : [e];
}
function pa(e, t, n, r) {
  let i, a, o;
  typeof t == "function" ? (a = void 0, o = t, i = n) : (a = t, o = n, i = r), ru(e, a, l, i);
  function l(s, u) {
    const c = u[u.length - 1], f = c ? c.children.indexOf(s) : void 0;
    return o(s, f, c);
  }
}
const di = {}.hasOwnProperty, ag = {};
function og(e, t) {
  const n = t || ag, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), o = { ...Hm, ...n.handlers }, l = {
    all: u,
    applyData: sg,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: a,
    footnoteOrder: [],
    handlers: o,
    one: s,
    options: n,
    patch: lg,
    wrap: cg
  };
  return pa(e, function(c) {
    if (c.type === "definition" || c.type === "footnoteDefinition") {
      const f = c.type === "definition" ? r : i, d = String(c.identifier).toUpperCase();
      f.has(d) || f.set(d, c);
    }
  }), l;
  function s(c, f) {
    const d = c.type, p = l.handlers[d];
    if (di.call(l.handlers, d) && p)
      return p(l, c, f);
    if (l.options.passThrough && l.options.passThrough.includes(d)) {
      if ("children" in c) {
        const { children: v, ...k } = c, b = Kn(k);
        return b.children = l.all(c), b;
      }
      return Kn(c);
    }
    return (l.options.unknownHandler || ug)(l, c, f);
  }
  function u(c) {
    const f = [];
    if ("children" in c) {
      const d = c.children;
      let p = -1;
      for (; ++p < d.length; ) {
        const g = l.one(d[p], c);
        if (g) {
          if (p && d[p - 1].type === "break" && (!Array.isArray(g) && g.type === "text" && (g.value = Io(g.value)), !Array.isArray(g) && g.type === "element")) {
            const v = g.children[0];
            v && v.type === "text" && (v.value = Io(v.value));
          }
          Array.isArray(g) ? f.push(...g) : f.push(g);
        }
      }
    }
    return f;
  }
}
function lg(e, t) {
  e.position && (t.position = Yd(e));
}
function sg(e, t) {
  let n = t;
  if (e && e.data) {
    const r = e.data.hName, i = e.data.hChildren, a = e.data.hProperties;
    if (typeof r == "string")
      if (n.type === "element")
        n.tagName = r;
      else {
        const o = "children" in n ? n.children : [n];
        n = { type: "element", tagName: r, properties: {}, children: o };
      }
    n.type === "element" && a && Object.assign(n.properties, Kn(a)), "children" in n && n.children && i !== null && i !== void 0 && (n.children = i);
  }
  return n;
}
function ug(e, t) {
  const n = t.data || {}, r = "value" in t && !(di.call(n, "hProperties") || di.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function cg(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function Io(e) {
  let t = 0, n = e.charCodeAt(t);
  for (; n === 9 || n === 32; )
    t++, n = e.charCodeAt(t);
  return e.slice(t);
}
function Po(e, t) {
  const n = og(e, t), r = n.one(e, void 0), i = Xm(n), a = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && a.children.push({ type: "text", value: `
` }, i), a;
}
function fg(e, t) {
  return e && "run" in e ? async function(n, r) {
    const i = (
      /** @type {HastRoot} */
      Po(n, { file: r, ...t })
    );
    await e.run(i, r);
  } : function(n, r) {
    return (
      /** @type {HastRoot} */
      Po(n, { file: r, ...e || t })
    );
  };
}
function Ro(e) {
  if (e)
    throw e;
}
var Dr, jo;
function dg() {
  if (jo) return Dr;
  jo = 1;
  var e = Object.prototype.hasOwnProperty, t = Object.prototype.toString, n = Object.defineProperty, r = Object.getOwnPropertyDescriptor, i = function(u) {
    return typeof Array.isArray == "function" ? Array.isArray(u) : t.call(u) === "[object Array]";
  }, a = function(u) {
    if (!u || t.call(u) !== "[object Object]")
      return !1;
    var c = e.call(u, "constructor"), f = u.constructor && u.constructor.prototype && e.call(u.constructor.prototype, "isPrototypeOf");
    if (u.constructor && !c && !f)
      return !1;
    var d;
    for (d in u)
      ;
    return typeof d > "u" || e.call(u, d);
  }, o = function(u, c) {
    n && c.name === "__proto__" ? n(u, c.name, {
      enumerable: !0,
      configurable: !0,
      value: c.newValue,
      writable: !0
    }) : u[c.name] = c.newValue;
  }, l = function(u, c) {
    if (c === "__proto__")
      if (e.call(u, c)) {
        if (r)
          return r(u, c).value;
      } else return;
    return u[c];
  };
  return Dr = function s() {
    var u, c, f, d, p, g, v = arguments[0], k = 1, b = arguments.length, A = !1;
    for (typeof v == "boolean" && (A = v, v = arguments[1] || {}, k = 2), (v == null || typeof v != "object" && typeof v != "function") && (v = {}); k < b; ++k)
      if (u = arguments[k], u != null)
        for (c in u)
          f = l(v, c), d = l(u, c), v !== d && (A && d && (a(d) || (p = i(d))) ? (p ? (p = !1, g = f && i(f) ? f : []) : g = f && a(f) ? f : {}, o(v, { name: c, newValue: s(A, g, d) })) : typeof d < "u" && o(v, { name: c, newValue: d }));
    return v;
  }, Dr;
}
var pg = dg();
const Mr = /* @__PURE__ */ vn(pg);
function pi(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function hg() {
  const e = [], t = { run: n, use: r };
  return t;
  function n(...i) {
    let a = -1;
    const o = i.pop();
    if (typeof o != "function")
      throw new TypeError("Expected function as last argument, not " + o);
    l(null, ...i);
    function l(s, ...u) {
      const c = e[++a];
      let f = -1;
      if (s) {
        o(s);
        return;
      }
      for (; ++f < i.length; )
        (u[f] === null || u[f] === void 0) && (u[f] = i[f]);
      i = u, c ? mg(c, l)(...u) : o(null, ...u);
    }
  }
  function r(i) {
    if (typeof i != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + i
      );
    return e.push(i), t;
  }
}
function mg(e, t) {
  let n;
  return r;
  function r(...o) {
    const l = e.length > o.length;
    let s;
    l && o.push(i);
    try {
      s = e.apply(this, o);
    } catch (u) {
      const c = (
        /** @type {Error} */
        u
      );
      if (l && n)
        throw c;
      return i(c);
    }
    l || (s && s.then && typeof s.then == "function" ? s.then(a, i) : s instanceof Error ? i(s) : a(s));
  }
  function i(o, ...l) {
    n || (n = !0, t(o, ...l));
  }
  function a(o) {
    i(null, o);
  }
}
const tt = { basename: gg, dirname: yg, extname: xg, join: bg, sep: "/" };
function gg(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  Sn(e);
  let n = 0, r = -1, i = e.length, a;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; i--; )
      if (e.codePointAt(i) === 47) {
        if (a) {
          n = i + 1;
          break;
        }
      } else r < 0 && (a = !0, r = i + 1);
    return r < 0 ? "" : e.slice(n, r);
  }
  if (t === e)
    return "";
  let o = -1, l = t.length - 1;
  for (; i--; )
    if (e.codePointAt(i) === 47) {
      if (a) {
        n = i + 1;
        break;
      }
    } else
      o < 0 && (a = !0, o = i + 1), l > -1 && (e.codePointAt(i) === t.codePointAt(l--) ? l < 0 && (r = i) : (l = -1, r = o));
  return n === r ? r = o : r < 0 && (r = e.length), e.slice(n, r);
}
function yg(e) {
  if (Sn(e), e.length === 0)
    return ".";
  let t = -1, n = e.length, r;
  for (; --n; )
    if (e.codePointAt(n) === 47) {
      if (r) {
        t = n;
        break;
      }
    } else r || (r = !0);
  return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function xg(e) {
  Sn(e);
  let t = e.length, n = -1, r = 0, i = -1, a = 0, o;
  for (; t--; ) {
    const l = e.codePointAt(t);
    if (l === 47) {
      if (o) {
        r = t + 1;
        break;
      }
      continue;
    }
    n < 0 && (o = !0, n = t + 1), l === 46 ? i < 0 ? i = t : a !== 1 && (a = 1) : i > -1 && (a = -1);
  }
  return i < 0 || n < 0 || // We saw a non-dot character immediately before the dot.
  a === 0 || // The (right-most) trimmed path component is exactly `..`.
  a === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n);
}
function bg(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    Sn(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : vg(n);
}
function vg(e) {
  Sn(e);
  const t = e.codePointAt(0) === 47;
  let n = kg(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function kg(e, t) {
  let n = "", r = 0, i = -1, a = 0, o = -1, l, s;
  for (; ++o <= e.length; ) {
    if (o < e.length)
      l = e.codePointAt(o);
    else {
      if (l === 47)
        break;
      l = 47;
    }
    if (l === 47) {
      if (!(i === o - 1 || a === 1)) if (i !== o - 1 && a === 2) {
        if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
          if (n.length > 2) {
            if (s = n.lastIndexOf("/"), s !== n.length - 1) {
              s < 0 ? (n = "", r = 0) : (n = n.slice(0, s), r = n.length - 1 - n.lastIndexOf("/")), i = o, a = 0;
              continue;
            }
          } else if (n.length > 0) {
            n = "", r = 0, i = o, a = 0;
            continue;
          }
        }
        t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
      } else
        n.length > 0 ? n += "/" + e.slice(i + 1, o) : n = e.slice(i + 1, o), r = o - i - 1;
      i = o, a = 0;
    } else l === 46 && a > -1 ? a++ : a = -1;
  }
  return n;
}
function Sn(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const wg = { cwd: Eg };
function Eg() {
  return "/";
}
function hi(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function Cg(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!hi(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return Sg(e);
}
function Sg(e) {
  if (e.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw r.code = "ERR_INVALID_FILE_URL_HOST", r;
  }
  const t = e.pathname;
  let n = -1;
  for (; ++n < t.length; )
    if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
      const r = t.codePointAt(n + 2);
      if (r === 70 || r === 102) {
        const i = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw i.code = "ERR_INVALID_FILE_URL_PATH", i;
      }
    }
  return decodeURIComponent(t);
}
const zr = (
  /** @type {const} */
  [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ]
);
class iu {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(t) {
    let n;
    t ? hi(t) ? n = { path: t } : typeof t == "string" || Tg(t) ? n = { value: t } : n = t : n = {}, this.cwd = "cwd" in n ? "" : wg.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < zr.length; ) {
      const a = zr[r];
      a in n && n[a] !== void 0 && n[a] !== null && (this[a] = a === "history" ? [...n[a]] : n[a]);
    }
    let i;
    for (i in n)
      zr.includes(i) || (this[i] = n[i]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? tt.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(t) {
    Br(t, "basename"), $r(t, "basename"), this.path = tt.join(this.dirname || "", t);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? tt.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(t) {
    _o(this.basename, "dirname"), this.path = tt.join(t || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? tt.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(t) {
    if ($r(t, "extname"), _o(this.dirname, "extname"), t) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = tt.join(this.dirname, this.stem + (t || ""));
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(t) {
    hi(t) && (t = Cg(t)), Br(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? tt.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(t) {
    Br(t, "stem"), $r(t, "stem"), this.path = tt.join(this.dirname || "", t + (this.extname || ""));
  }
  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(t, n, r) {
    const i = this.message(t, n, r);
    throw i.fatal = !0, i;
  }
  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(t, n, r) {
    const i = this.message(t, n, r);
    return i.fatal = void 0, i;
  }
  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(t, n, r) {
    const i = new Le(
      // @ts-expect-error: the overloads are fine.
      t,
      n,
      r
    );
    return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = !1, this.messages.push(i), i;
  }
  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(t) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(t || void 0).decode(this.value);
  }
}
function $r(e, t) {
  if (e && e.includes(tt.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + tt.sep + "`"
    );
}
function Br(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function _o(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function Tg(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Ag = (
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  /** @type {unknown} */
  /**
   * @this {Function}
   * @param {string | symbol} property
   * @returns {(...parameters: Array<unknown>) => unknown}
   */
  function(e) {
    const r = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      this.constructor.prototype
    ), i = r[e], a = function() {
      return i.apply(a, arguments);
    };
    return Object.setPrototypeOf(a, r), a;
  }
), Og = {}.hasOwnProperty;
class ha extends Ag {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = hg();
  }
  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@linkcode Processor}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    const t = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new ha()
    );
    let n = -1;
    for (; ++n < this.attachers.length; ) {
      const r = this.attachers[n];
      t.use(...r);
    }
    return t.data(Mr(!0, {}, this.namespace)), t;
  }
  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > **Note**: to register custom data in TypeScript, augment the
   * > {@linkcode Data} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(t, n) {
    return typeof t == "string" ? arguments.length === 2 ? (Vr("data", this.frozen), this.namespace[t] = n, this) : Og.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (Vr("data", this.frozen), this.namespace = t, this) : this.namespace;
  }
  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen)
      return this;
    const t = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [n, ...r] = this.attachers[this.freezeIndex];
      if (r[0] === !1)
        continue;
      r[0] === !0 && (r[0] = void 0);
      const i = n.call(t, ...r);
      typeof i == "function" && this.transformers.use(i);
    }
    return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this;
  }
  /**
   * Parse text to a syntax tree.
   *
   * > **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(t) {
    this.freeze();
    const n = Ln(t), r = this.parser || this.Parser;
    return Ur("parse", r), r(String(n), n);
  }
  /**
   * Process the given file as configured on the processor.
   *
   * > **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(t, n) {
    const r = this;
    return this.freeze(), Ur("process", this.parser || this.Parser), Hr("process", this.compiler || this.Compiler), n ? i(void 0, n) : new Promise(i);
    function i(a, o) {
      const l = Ln(t), s = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        r.parse(l)
      );
      r.run(s, l, function(c, f, d) {
        if (c || !f || !d)
          return u(c);
        const p = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          f
        ), g = r.stringify(p, d);
        Pg(g) ? d.value = g : d.result = g, u(
          c,
          /** @type {VFileWithOutput<CompileResult>} */
          d
        );
      });
      function u(c, f) {
        c || !f ? o(c) : a ? a(f) : n(void 0, f);
      }
    }
  }
  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(t) {
    let n = !1, r;
    return this.freeze(), Ur("processSync", this.parser || this.Parser), Hr("processSync", this.compiler || this.Compiler), this.process(t, i), Lo("processSync", "process", n), r;
    function i(a, o) {
      n = !0, Ro(a), r = o;
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * > **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(t, n, r) {
    Fo(t), this.freeze();
    const i = this.transformers;
    return !r && typeof n == "function" && (r = n, n = void 0), r ? a(void 0, r) : new Promise(a);
    function a(o, l) {
      const s = Ln(n);
      i.run(t, s, u);
      function u(c, f, d) {
        const p = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          f || t
        );
        c ? l(c) : o ? o(p) : r(void 0, p, d);
      }
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(t, n) {
    let r = !1, i;
    return this.run(t, n, a), Lo("runSync", "run", r), i;
    function a(o, l) {
      Ro(o), i = l, r = !0;
    }
  }
  /**
   * Compile a syntax tree.
   *
   * > **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(t, n) {
    this.freeze();
    const r = Ln(n), i = this.compiler || this.Compiler;
    return Hr("stringify", i), Fo(t), i(t, r);
  }
  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(t, ...n) {
    const r = this.attachers, i = this.namespace;
    if (Vr("use", this.frozen), t != null) if (typeof t == "function")
      s(t, n);
    else if (typeof t == "object")
      Array.isArray(t) ? l(t) : o(t);
    else
      throw new TypeError("Expected usable value, not `" + t + "`");
    return this;
    function a(u) {
      if (typeof u == "function")
        s(u, []);
      else if (typeof u == "object")
        if (Array.isArray(u)) {
          const [c, ...f] = (
            /** @type {PluginTuple<Array<unknown>>} */
            u
          );
          s(c, f);
        } else
          o(u);
      else
        throw new TypeError("Expected usable value, not `" + u + "`");
    }
    function o(u) {
      if (!("plugins" in u) && !("settings" in u))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      l(u.plugins), u.settings && (i.settings = Mr(!0, i.settings, u.settings));
    }
    function l(u) {
      let c = -1;
      if (u != null) if (Array.isArray(u))
        for (; ++c < u.length; ) {
          const f = u[c];
          a(f);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + u + "`");
    }
    function s(u, c) {
      let f = -1, d = -1;
      for (; ++f < r.length; )
        if (r[f][0] === u) {
          d = f;
          break;
        }
      if (d === -1)
        r.push([u, ...c]);
      else if (c.length > 0) {
        let [p, ...g] = c;
        const v = r[d][1];
        pi(v) && pi(p) && (p = Mr(!0, v, p)), r[d] = [u, p, ...g];
      }
    }
  }
}
const Ng = new ha().freeze();
function Ur(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function Hr(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function Vr(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Fo(e) {
  if (!pi(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Lo(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function Ln(e) {
  return Ig(e) ? e : new iu(e);
}
function Ig(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function Pg(e) {
  return typeof e == "string" || Rg(e);
}
function Rg(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const jg = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Do = [], Mo = { allowDangerousHtml: !0 }, _g = /^(https?|ircs?|mailto|xmpp)$/i, Fg = [
  { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
  { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
  {
    from: "allowNode",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowElement"
  },
  {
    from: "allowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowedElements"
  },
  { from: "className", id: "remove-classname" },
  {
    from: "disallowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "disallowedElements"
  },
  { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
  { from: "includeElementIndex", id: "#remove-includeelementindex" },
  {
    from: "includeNodeIndex",
    id: "change-includenodeindex-to-includeelementindex"
  },
  { from: "linkTarget", id: "remove-linktarget" },
  { from: "plugins", id: "change-plugins-to-remarkplugins", to: "remarkPlugins" },
  { from: "rawSourcePos", id: "#remove-rawsourcepos" },
  { from: "renderers", id: "change-renderers-to-components", to: "components" },
  { from: "source", id: "change-source-to-children", to: "children" },
  { from: "sourcePos", id: "#remove-sourcepos" },
  { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
  { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" }
];
function Lg(e) {
  const t = Dg(e), n = Mg(e);
  return zg(t.runSync(t.parse(n), n), e);
}
function Dg(e) {
  const t = e.rehypePlugins || Do, n = e.remarkPlugins || Do, r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...Mo } : Mo;
  return Ng().use(ym).use(n).use(fg, r).use(t);
}
function Mg(e) {
  const t = e.children || "", n = new iu();
  return typeof t == "string" && (n.value = t), n;
}
function zg(e, t) {
  const n = t.allowedElements, r = t.allowElement, i = t.components, a = t.disallowedElements, o = t.skipHtml, l = t.unwrapDisallowed, s = t.urlTransform || $g;
  for (const c of Fg)
    Object.hasOwn(t, c.from) && ("" + c.from + (c.to ? "use `" + c.to + "` instead" : "remove it") + jg + c.id, void 0);
  return pa(e, u), Zd(e, {
    Fragment: y.Fragment,
    // @ts-expect-error
    // React components are allowed to return numbers,
    // but not according to the types in hast-util-to-jsx-runtime
    components: i,
    ignoreInvalidStyle: !0,
    jsx: y.jsx,
    jsxs: y.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function u(c, f, d) {
    if (c.type === "raw" && d && typeof f == "number")
      return o ? d.children.splice(f, 1) : d.children[f] = { type: "text", value: c.value }, f;
    if (c.type === "element") {
      let p;
      for (p in _r)
        if (Object.hasOwn(_r, p) && Object.hasOwn(c.properties, p)) {
          const g = c.properties[p], v = _r[p];
          (v === null || v.includes(c.tagName)) && (c.properties[p] = s(String(g || ""), p, c));
        }
    }
    if (c.type === "element") {
      let p = n ? !n.includes(c.tagName) : a ? a.includes(c.tagName) : !1;
      if (!p && r && typeof f == "number" && (p = !r(c, f, d)), p && d && typeof f == "number")
        return l && c.children ? d.children.splice(f, 1, ...c.children) : d.children.splice(f, 1), f;
    }
  }
}
function $g(e) {
  const t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || // It is a protocol, it should be allowed.
    _g.test(e.slice(0, t)) ? e : ""
  );
}
function zo(e, t) {
  const n = String(e);
  if (typeof t != "string")
    throw new TypeError("Expected character");
  let r = 0, i = n.indexOf(t);
  for (; i !== -1; )
    r++, i = n.indexOf(t, i + t.length);
  return r;
}
function Bg(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function Ug(e, t, n) {
  const i = dr((n || {}).ignore || []), a = Hg(t);
  let o = -1;
  for (; ++o < a.length; )
    ru(e, "text", l);
  function l(u, c) {
    let f = -1, d;
    for (; ++f < c.length; ) {
      const p = c[f], g = d ? d.children : void 0;
      if (i(
        p,
        g ? g.indexOf(p) : void 0,
        d
      ))
        return;
      d = p;
    }
    if (d)
      return s(u, c);
  }
  function s(u, c) {
    const f = c[c.length - 1], d = a[o][0], p = a[o][1];
    let g = 0;
    const k = f.children.indexOf(u);
    let b = !1, A = [];
    d.lastIndex = 0;
    let E = d.exec(u.value);
    for (; E; ) {
      const N = E.index, S = {
        index: E.index,
        input: E.input,
        stack: [...c, u]
      };
      let w = p(...E, S);
      if (typeof w == "string" && (w = w.length > 0 ? { type: "text", value: w } : void 0), w === !1 ? d.lastIndex = N + 1 : (g !== N && A.push({
        type: "text",
        value: u.value.slice(g, N)
      }), Array.isArray(w) ? A.push(...w) : w && A.push(w), g = N + E[0].length, b = !0), !d.global)
        break;
      E = d.exec(u.value);
    }
    return b ? (g < u.value.length && A.push({ type: "text", value: u.value.slice(g) }), f.children.splice(k, 1, ...A)) : A = [u], k + A.length;
  }
}
function Hg(e) {
  const t = [];
  if (!Array.isArray(e))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const n = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  for (; ++r < n.length; ) {
    const i = n[r];
    t.push([Vg(i[0]), Wg(i[1])]);
  }
  return t;
}
function Vg(e) {
  return typeof e == "string" ? new RegExp(Bg(e), "g") : e;
}
function Wg(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}
const Wr = "phrasing", qr = ["autolink", "link", "image", "label"];
function qg() {
  return {
    transforms: [Zg],
    enter: {
      literalAutolink: Gg,
      literalAutolinkEmail: Yr,
      literalAutolinkHttp: Yr,
      literalAutolinkWww: Yr
    },
    exit: {
      literalAutolink: Jg,
      literalAutolinkEmail: Qg,
      literalAutolinkHttp: Kg,
      literalAutolinkWww: Xg
    }
  };
}
function Yg() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: Wr,
        notInConstruct: qr
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: Wr,
        notInConstruct: qr
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: Wr,
        notInConstruct: qr
      }
    ]
  };
}
function Gg(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function Yr(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function Kg(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function Xg(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  t.type, t.url = "http://" + this.sliceSerialize(e);
}
function Qg(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function Jg(e) {
  this.exit(e);
}
function Zg(e) {
  Ug(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, ey],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), ty]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function ey(e, t, n, r, i) {
  let a = "";
  if (!au(i) || (/^w/i.test(t) && (n = t + n, t = "", a = "http://"), !ny(n)))
    return !1;
  const o = ry(n + r);
  if (!o[0]) return !1;
  const l = {
    type: "link",
    title: null,
    url: a + t + o[0],
    children: [{ type: "text", value: t + o[0] }]
  };
  return o[1] ? [l, { type: "text", value: o[1] }] : l;
}
function ty(e, t, n, r) {
  return (
    // Not an expected previous character.
    !au(r, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(n) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + t + "@" + n,
      children: [{ type: "text", value: t + "@" + n }]
    }
  );
}
function ny(e) {
  const t = e.split(".");
  return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function ry(e) {
  const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t)
    return [e, void 0];
  e = e.slice(0, t.index);
  let n = t[0], r = n.indexOf(")");
  const i = zo(e, "(");
  let a = zo(e, ")");
  for (; r !== -1 && i > a; )
    e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), a++;
  return [e, n];
}
function au(e, t) {
  const n = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || Ot(n) || ur(n)) && // If it’s an email, the previous character should not be a slash.
  (!t || n !== 47);
}
ou.peek = dy;
function iy() {
  this.buffer();
}
function ay(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function oy() {
  this.buffer();
}
function ly(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function sy(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = Ze(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function uy(e) {
  this.exit(e);
}
function cy(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = Ze(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function fy(e) {
  this.exit(e);
}
function dy() {
  return "[";
}
function ou(e, t, n, r) {
  const i = n.createTracker(r);
  let a = i.move("[^");
  const o = n.enter("footnoteReference"), l = n.enter("reference");
  return a += i.move(
    n.safe(n.associationId(e), { after: "]", before: a })
  ), l(), o(), a += i.move("]"), a;
}
function py() {
  return {
    enter: {
      gfmFootnoteCallString: iy,
      gfmFootnoteCall: ay,
      gfmFootnoteDefinitionLabelString: oy,
      gfmFootnoteDefinition: ly
    },
    exit: {
      gfmFootnoteCallString: sy,
      gfmFootnoteCall: uy,
      gfmFootnoteDefinitionLabelString: cy,
      gfmFootnoteDefinition: fy
    }
  };
}
function hy(e) {
  let t = !1;
  return e && e.firstLineBlank && (t = !0), {
    handlers: { footnoteDefinition: n, footnoteReference: ou },
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["label", "phrasing", "reference"] }]
  };
  function n(r, i, a, o) {
    const l = a.createTracker(o);
    let s = l.move("[^");
    const u = a.enter("footnoteDefinition"), c = a.enter("label");
    return s += l.move(
      a.safe(a.associationId(r), { before: s, after: "]" })
    ), c(), s += l.move("]:"), r.children && r.children.length > 0 && (l.shift(4), s += l.move(
      (t ? `
` : " ") + a.indentLines(
        a.containerFlow(r, l.current()),
        t ? lu : my
      )
    )), u(), s;
  }
}
function my(e, t, n) {
  return t === 0 ? e : lu(e, t, n);
}
function lu(e, t, n) {
  return (n ? "" : "    ") + e;
}
const gy = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
su.peek = ky;
function yy() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: by },
    exit: { strikethrough: vy }
  };
}
function xy() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: gy
      }
    ],
    handlers: { delete: su }
  };
}
function by(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function vy(e) {
  this.exit(e);
}
function su(e, t, n, r) {
  const i = n.createTracker(r), a = n.enter("strikethrough");
  let o = i.move("~~");
  return o += n.containerPhrasing(e, {
    ...i.current(),
    before: o,
    after: "~"
  }), o += i.move("~~"), a(), o;
}
function ky() {
  return "~";
}
function wy(e) {
  return e.length;
}
function Ey(e, t) {
  const n = t || {}, r = (n.align || []).concat(), i = n.stringLength || wy, a = [], o = [], l = [], s = [];
  let u = 0, c = -1;
  for (; ++c < e.length; ) {
    const v = [], k = [];
    let b = -1;
    for (e[c].length > u && (u = e[c].length); ++b < e[c].length; ) {
      const A = Cy(e[c][b]);
      if (n.alignDelimiters !== !1) {
        const E = i(A);
        k[b] = E, (s[b] === void 0 || E > s[b]) && (s[b] = E);
      }
      v.push(A);
    }
    o[c] = v, l[c] = k;
  }
  let f = -1;
  if (typeof r == "object" && "length" in r)
    for (; ++f < u; )
      a[f] = $o(r[f]);
  else {
    const v = $o(r);
    for (; ++f < u; )
      a[f] = v;
  }
  f = -1;
  const d = [], p = [];
  for (; ++f < u; ) {
    const v = a[f];
    let k = "", b = "";
    v === 99 ? (k = ":", b = ":") : v === 108 ? k = ":" : v === 114 && (b = ":");
    let A = n.alignDelimiters === !1 ? 1 : Math.max(
      1,
      s[f] - k.length - b.length
    );
    const E = k + "-".repeat(A) + b;
    n.alignDelimiters !== !1 && (A = k.length + A + b.length, A > s[f] && (s[f] = A), p[f] = A), d[f] = E;
  }
  o.splice(1, 0, d), l.splice(1, 0, p), c = -1;
  const g = [];
  for (; ++c < o.length; ) {
    const v = o[c], k = l[c];
    f = -1;
    const b = [];
    for (; ++f < u; ) {
      const A = v[f] || "";
      let E = "", N = "";
      if (n.alignDelimiters !== !1) {
        const S = s[f] - (k[f] || 0), w = a[f];
        w === 114 ? E = " ".repeat(S) : w === 99 ? S % 2 ? (E = " ".repeat(S / 2 + 0.5), N = " ".repeat(S / 2 - 0.5)) : (E = " ".repeat(S / 2), N = E) : N = " ".repeat(S);
      }
      n.delimiterStart !== !1 && !f && b.push("|"), n.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(n.alignDelimiters === !1 && A === "") && (n.delimiterStart !== !1 || f) && b.push(" "), n.alignDelimiters !== !1 && b.push(E), b.push(A), n.alignDelimiters !== !1 && b.push(N), n.padding !== !1 && b.push(" "), (n.delimiterEnd !== !1 || f !== u - 1) && b.push("|");
    }
    g.push(
      n.delimiterEnd === !1 ? b.join("").replace(/ +$/, "") : b.join("")
    );
  }
  return g.join(`
`);
}
function Cy(e) {
  return e == null ? "" : String(e);
}
function $o(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
function Sy(e, t, n, r) {
  const i = n.enter("blockquote"), a = n.createTracker(r);
  a.move("> "), a.shift(2);
  const o = n.indentLines(
    n.containerFlow(e, a.current()),
    Ty
  );
  return i(), o;
}
function Ty(e, t, n) {
  return ">" + (n ? "" : " ") + e;
}
function Ay(e, t) {
  return Bo(e, t.inConstruct, !0) && !Bo(e, t.notInConstruct, !1);
}
function Bo(e, t, n) {
  if (typeof t == "string" && (t = [t]), !t || t.length === 0)
    return n;
  let r = -1;
  for (; ++r < t.length; )
    if (e.includes(t[r]))
      return !0;
  return !1;
}
function Uo(e, t, n, r) {
  let i = -1;
  for (; ++i < n.unsafe.length; )
    if (n.unsafe[i].character === `
` && Ay(n.stack, n.unsafe[i]))
      return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function Oy(e, t) {
  const n = String(e);
  let r = n.indexOf(t), i = r, a = 0, o = 0;
  if (typeof t != "string")
    throw new TypeError("Expected substring");
  for (; r !== -1; )
    r === i ? ++a > o && (o = a) : a = 1, i = r + t.length, r = n.indexOf(t, i);
  return o;
}
function Ny(e, t) {
  return !!(t.options.fences === !1 && e.value && // If there’s no info…
  !e.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(e.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
function Iy(e) {
  const t = e.options.fence || "`";
  if (t !== "`" && t !== "~")
    throw new Error(
      "Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return t;
}
function Py(e, t, n, r) {
  const i = Iy(n), a = e.value || "", o = i === "`" ? "GraveAccent" : "Tilde";
  if (Ny(e, n)) {
    const f = n.enter("codeIndented"), d = n.indentLines(a, Ry);
    return f(), d;
  }
  const l = n.createTracker(r), s = i.repeat(Math.max(Oy(a, i) + 1, 3)), u = n.enter("codeFenced");
  let c = l.move(s);
  if (e.lang) {
    const f = n.enter(`codeFencedLang${o}`);
    c += l.move(
      n.safe(e.lang, {
        before: c,
        after: " ",
        encode: ["`"],
        ...l.current()
      })
    ), f();
  }
  if (e.lang && e.meta) {
    const f = n.enter(`codeFencedMeta${o}`);
    c += l.move(" "), c += l.move(
      n.safe(e.meta, {
        before: c,
        after: `
`,
        encode: ["`"],
        ...l.current()
      })
    ), f();
  }
  return c += l.move(`
`), a && (c += l.move(a + `
`)), c += l.move(s), u(), c;
}
function Ry(e, t, n) {
  return (n ? "" : "    ") + e;
}
function ma(e) {
  const t = e.options.quote || '"';
  if (t !== '"' && t !== "'")
    throw new Error(
      "Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`"
    );
  return t;
}
function jy(e, t, n, r) {
  const i = ma(n), a = i === '"' ? "Quote" : "Apostrophe", o = n.enter("definition");
  let l = n.enter("label");
  const s = n.createTracker(r);
  let u = s.move("[");
  return u += s.move(
    n.safe(n.associationId(e), {
      before: u,
      after: "]",
      ...s.current()
    })
  ), u += s.move("]: "), l(), // If there’s no url, or…
  !e.url || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (l = n.enter("destinationLiteral"), u += s.move("<"), u += s.move(
    n.safe(e.url, { before: u, after: ">", ...s.current() })
  ), u += s.move(">")) : (l = n.enter("destinationRaw"), u += s.move(
    n.safe(e.url, {
      before: u,
      after: e.title ? " " : `
`,
      ...s.current()
    })
  )), l(), e.title && (l = n.enter(`title${a}`), u += s.move(" " + i), u += s.move(
    n.safe(e.title, {
      before: u,
      after: i,
      ...s.current()
    })
  ), u += s.move(i), l()), o(), u;
}
function _y(e) {
  const t = e.options.emphasis || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return t;
}
function yn(e) {
  return "&#x" + e.toString(16).toUpperCase() + ";";
}
function Xn(e, t, n) {
  const r = qt(e), i = qt(t);
  return r === void 0 ? i === void 0 ? (
    // Letter inside:
    // we have to encode *both* letters for `_` as it is looser.
    // it already forms for `*` (and GFMs `~`).
    n === "_" ? { inside: !0, outside: !0 } : { inside: !1, outside: !1 }
  ) : i === 1 ? (
    // Whitespace inside: encode both (letter, whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: encode outer (letter)
    { inside: !1, outside: !0 }
  ) : r === 1 ? i === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : i === 1 ? (
    // Whitespace inside: encode both (whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  ) : i === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : i === 1 ? (
    // Whitespace inside: encode inner (whitespace).
    { inside: !0, outside: !1 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  );
}
uu.peek = Fy;
function uu(e, t, n, r) {
  const i = _y(n), a = n.enter("emphasis"), o = n.createTracker(r), l = o.move(i);
  let s = o.move(
    n.containerPhrasing(e, {
      after: i,
      before: l,
      ...o.current()
    })
  );
  const u = s.charCodeAt(0), c = Xn(
    r.before.charCodeAt(r.before.length - 1),
    u,
    i
  );
  c.inside && (s = yn(u) + s.slice(1));
  const f = s.charCodeAt(s.length - 1), d = Xn(r.after.charCodeAt(0), f, i);
  d.inside && (s = s.slice(0, -1) + yn(f));
  const p = o.move(i);
  return a(), n.attentionEncodeSurroundingInfo = {
    after: d.outside,
    before: c.outside
  }, l + s + p;
}
function Fy(e, t, n) {
  return n.options.emphasis || "*";
}
function Ly(e, t) {
  let n = !1;
  return pa(e, function(r) {
    if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break")
      return n = !0, fi;
  }), !!((!e.depth || e.depth < 3) && oa(e) && (t.options.setext || n));
}
function Dy(e, t, n, r) {
  const i = Math.max(Math.min(6, e.depth || 1), 1), a = n.createTracker(r);
  if (Ly(e, n)) {
    const c = n.enter("headingSetext"), f = n.enter("phrasing"), d = n.containerPhrasing(e, {
      ...a.current(),
      before: `
`,
      after: `
`
    });
    return f(), c(), d + `
` + (i === 1 ? "=" : "-").repeat(
      // The whole size…
      d.length - // Minus the position of the character after the last EOL (or
      // 0 if there is none)…
      (Math.max(d.lastIndexOf("\r"), d.lastIndexOf(`
`)) + 1)
    );
  }
  const o = "#".repeat(i), l = n.enter("headingAtx"), s = n.enter("phrasing");
  a.move(o + " ");
  let u = n.containerPhrasing(e, {
    before: "# ",
    after: `
`,
    ...a.current()
  });
  return /^[\t ]/.test(u) && (u = yn(u.charCodeAt(0)) + u.slice(1)), u = u ? o + " " + u : o, n.options.closeAtx && (u += " " + o), s(), l(), u;
}
cu.peek = My;
function cu(e) {
  return e.value || "";
}
function My() {
  return "<";
}
fu.peek = zy;
function fu(e, t, n, r) {
  const i = ma(n), a = i === '"' ? "Quote" : "Apostrophe", o = n.enter("image");
  let l = n.enter("label");
  const s = n.createTracker(r);
  let u = s.move("![");
  return u += s.move(
    n.safe(e.alt, { before: u, after: "]", ...s.current() })
  ), u += s.move("]("), l(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (l = n.enter("destinationLiteral"), u += s.move("<"), u += s.move(
    n.safe(e.url, { before: u, after: ">", ...s.current() })
  ), u += s.move(">")) : (l = n.enter("destinationRaw"), u += s.move(
    n.safe(e.url, {
      before: u,
      after: e.title ? " " : ")",
      ...s.current()
    })
  )), l(), e.title && (l = n.enter(`title${a}`), u += s.move(" " + i), u += s.move(
    n.safe(e.title, {
      before: u,
      after: i,
      ...s.current()
    })
  ), u += s.move(i), l()), u += s.move(")"), o(), u;
}
function zy() {
  return "!";
}
du.peek = $y;
function du(e, t, n, r) {
  const i = e.referenceType, a = n.enter("imageReference");
  let o = n.enter("label");
  const l = n.createTracker(r);
  let s = l.move("![");
  const u = n.safe(e.alt, {
    before: s,
    after: "]",
    ...l.current()
  });
  s += l.move(u + "]["), o();
  const c = n.stack;
  n.stack = [], o = n.enter("reference");
  const f = n.safe(n.associationId(e), {
    before: s,
    after: "]",
    ...l.current()
  });
  return o(), n.stack = c, a(), i === "full" || !u || u !== f ? s += l.move(f + "]") : i === "shortcut" ? s = s.slice(0, -1) : s += l.move("]"), s;
}
function $y() {
  return "!";
}
pu.peek = By;
function pu(e, t, n) {
  let r = e.value || "", i = "`", a = -1;
  for (; new RegExp("(^|[^`])" + i + "([^`]|$)").test(r); )
    i += "`";
  for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++a < n.unsafe.length; ) {
    const o = n.unsafe[a], l = n.compilePattern(o);
    let s;
    if (o.atBreak)
      for (; s = l.exec(r); ) {
        let u = s.index;
        r.charCodeAt(u) === 10 && r.charCodeAt(u - 1) === 13 && u--, r = r.slice(0, u) + " " + r.slice(s.index + 1);
      }
  }
  return i + r + i;
}
function By() {
  return "`";
}
function hu(e, t) {
  const n = oa(e);
  return !!(!t.options.resourceLink && // If there’s a url…
  e.url && // And there’s a no title…
  !e.title && // And the content of `node` is a single text node…
  e.children && e.children.length === 1 && e.children[0].type === "text" && // And if the url is the same as the content…
  (n === e.url || "mailto:" + n === e.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(e.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(e.url));
}
mu.peek = Uy;
function mu(e, t, n, r) {
  const i = ma(n), a = i === '"' ? "Quote" : "Apostrophe", o = n.createTracker(r);
  let l, s;
  if (hu(e, n)) {
    const c = n.stack;
    n.stack = [], l = n.enter("autolink");
    let f = o.move("<");
    return f += o.move(
      n.containerPhrasing(e, {
        before: f,
        after: ">",
        ...o.current()
      })
    ), f += o.move(">"), l(), n.stack = c, f;
  }
  l = n.enter("link"), s = n.enter("label");
  let u = o.move("[");
  return u += o.move(
    n.containerPhrasing(e, {
      before: u,
      after: "](",
      ...o.current()
    })
  ), u += o.move("]("), s(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (s = n.enter("destinationLiteral"), u += o.move("<"), u += o.move(
    n.safe(e.url, { before: u, after: ">", ...o.current() })
  ), u += o.move(">")) : (s = n.enter("destinationRaw"), u += o.move(
    n.safe(e.url, {
      before: u,
      after: e.title ? " " : ")",
      ...o.current()
    })
  )), s(), e.title && (s = n.enter(`title${a}`), u += o.move(" " + i), u += o.move(
    n.safe(e.title, {
      before: u,
      after: i,
      ...o.current()
    })
  ), u += o.move(i), s()), u += o.move(")"), l(), u;
}
function Uy(e, t, n) {
  return hu(e, n) ? "<" : "[";
}
gu.peek = Hy;
function gu(e, t, n, r) {
  const i = e.referenceType, a = n.enter("linkReference");
  let o = n.enter("label");
  const l = n.createTracker(r);
  let s = l.move("[");
  const u = n.containerPhrasing(e, {
    before: s,
    after: "]",
    ...l.current()
  });
  s += l.move(u + "]["), o();
  const c = n.stack;
  n.stack = [], o = n.enter("reference");
  const f = n.safe(n.associationId(e), {
    before: s,
    after: "]",
    ...l.current()
  });
  return o(), n.stack = c, a(), i === "full" || !u || u !== f ? s += l.move(f + "]") : i === "shortcut" ? s = s.slice(0, -1) : s += l.move("]"), s;
}
function Hy() {
  return "[";
}
function ga(e) {
  const t = e.options.bullet || "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return t;
}
function Vy(e) {
  const t = ga(e), n = e.options.bulletOther;
  if (!n)
    return t === "*" ? "-" : "*";
  if (n !== "*" && n !== "+" && n !== "-")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.bulletOther`, expected `*`, `+`, or `-`"
    );
  if (n === t)
    throw new Error(
      "Expected `bullet` (`" + t + "`) and `bulletOther` (`" + n + "`) to be different"
    );
  return n;
}
function Wy(e) {
  const t = e.options.bulletOrdered || ".";
  if (t !== "." && t !== ")")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return t;
}
function yu(e) {
  const t = e.options.rule || "*";
  if (t !== "*" && t !== "-" && t !== "_")
    throw new Error(
      "Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return t;
}
function qy(e, t, n, r) {
  const i = n.enter("list"), a = n.bulletCurrent;
  let o = e.ordered ? Wy(n) : ga(n);
  const l = e.ordered ? o === "." ? ")" : "." : Vy(n);
  let s = t && n.bulletLastUsed ? o === n.bulletLastUsed : !1;
  if (!e.ordered) {
    const c = e.children ? e.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (o === "*" || o === "-") && // Empty first list item:
      c && (!c.children || !c.children[0]) && // Directly in two other list items:
      n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && // That are each the first child.
      n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (s = !0), yu(n) === o && c
    ) {
      let f = -1;
      for (; ++f < e.children.length; ) {
        const d = e.children[f];
        if (d && d.type === "listItem" && d.children && d.children[0] && d.children[0].type === "thematicBreak") {
          s = !0;
          break;
        }
      }
    }
  }
  s && (o = l), n.bulletCurrent = o;
  const u = n.containerFlow(e, r);
  return n.bulletLastUsed = o, n.bulletCurrent = a, i(), u;
}
function Yy(e) {
  const t = e.options.listItemIndent || "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function Gy(e, t, n, r) {
  const i = Yy(n);
  let a = n.bulletCurrent || ga(n);
  t && t.type === "list" && t.ordered && (a = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + a);
  let o = a.length + 1;
  (i === "tab" || i === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (o = Math.ceil(o / 4) * 4);
  const l = n.createTracker(r);
  l.move(a + " ".repeat(o - a.length)), l.shift(o);
  const s = n.enter("listItem"), u = n.indentLines(
    n.containerFlow(e, l.current()),
    c
  );
  return s(), u;
  function c(f, d, p) {
    return d ? (p ? "" : " ".repeat(o)) + f : (p ? a : a + " ".repeat(o - a.length)) + f;
  }
}
function Ky(e, t, n, r) {
  const i = n.enter("paragraph"), a = n.enter("phrasing"), o = n.containerPhrasing(e, r);
  return a(), i(), o;
}
const Xy = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  dr([
    "break",
    "delete",
    "emphasis",
    // To do: next major: removed since footnotes were added to GFM.
    "footnote",
    "footnoteReference",
    "image",
    "imageReference",
    "inlineCode",
    // Enabled by `mdast-util-math`:
    "inlineMath",
    "link",
    "linkReference",
    // Enabled by `mdast-util-mdx`:
    "mdxJsxTextElement",
    // Enabled by `mdast-util-mdx`:
    "mdxTextExpression",
    "strong",
    "text",
    // Enabled by `mdast-util-directive`:
    "textDirective"
  ])
);
function Qy(e, t, n, r) {
  return (e.children.some(function(o) {
    return Xy(o);
  }) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
}
function Jy(e) {
  const t = e.options.strong || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`"
    );
  return t;
}
xu.peek = Zy;
function xu(e, t, n, r) {
  const i = Jy(n), a = n.enter("strong"), o = n.createTracker(r), l = o.move(i + i);
  let s = o.move(
    n.containerPhrasing(e, {
      after: i,
      before: l,
      ...o.current()
    })
  );
  const u = s.charCodeAt(0), c = Xn(
    r.before.charCodeAt(r.before.length - 1),
    u,
    i
  );
  c.inside && (s = yn(u) + s.slice(1));
  const f = s.charCodeAt(s.length - 1), d = Xn(r.after.charCodeAt(0), f, i);
  d.inside && (s = s.slice(0, -1) + yn(f));
  const p = o.move(i + i);
  return a(), n.attentionEncodeSurroundingInfo = {
    after: d.outside,
    before: c.outside
  }, l + s + p;
}
function Zy(e, t, n) {
  return n.options.strong || "*";
}
function e1(e, t, n, r) {
  return n.safe(e.value, r);
}
function t1(e) {
  const t = e.options.ruleRepetition || 3;
  if (t < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return t;
}
function n1(e, t, n) {
  const r = (yu(n) + (n.options.ruleSpaces ? " " : "")).repeat(t1(n));
  return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
const bu = {
  blockquote: Sy,
  break: Uo,
  code: Py,
  definition: jy,
  emphasis: uu,
  hardBreak: Uo,
  heading: Dy,
  html: cu,
  image: fu,
  imageReference: du,
  inlineCode: pu,
  link: mu,
  linkReference: gu,
  list: qy,
  listItem: Gy,
  paragraph: Ky,
  root: Qy,
  strong: xu,
  text: e1,
  thematicBreak: n1
};
function r1() {
  return {
    enter: {
      table: i1,
      tableData: Ho,
      tableHeader: Ho,
      tableRow: o1
    },
    exit: {
      codeText: l1,
      table: a1,
      tableData: Gr,
      tableHeader: Gr,
      tableRow: Gr
    }
  };
}
function i1(e) {
  const t = e._align;
  this.enter(
    {
      type: "table",
      align: t.map(function(n) {
        return n === "none" ? null : n;
      }),
      children: []
    },
    e
  ), this.data.inTable = !0;
}
function a1(e) {
  this.exit(e), this.data.inTable = void 0;
}
function o1(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function Gr(e) {
  this.exit(e);
}
function Ho(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function l1(e) {
  let t = this.resume();
  this.data.inTable && (t = t.replace(/\\([\\|])/g, s1));
  const n = this.stack[this.stack.length - 1];
  n.type, n.value = t, this.exit(e);
}
function s1(e, t) {
  return t === "|" ? t : e;
}
function u1(e) {
  const t = e || {}, n = t.tableCellPadding, r = t.tablePipeAlign, i = t.stringLength, a = n ? " " : "|";
  return {
    unsafe: [
      { character: "\r", inConstruct: "tableCell" },
      { character: `
`, inConstruct: "tableCell" },
      // A pipe, when followed by a tab or space (padding), or a dash or colon
      // (unpadded delimiter row), could result in a table.
      { atBreak: !0, character: "|", after: "[	 :-]" },
      // A pipe in a cell must be encoded.
      { character: "|", inConstruct: "tableCell" },
      // A colon must be followed by a dash, in which case it could start a
      // delimiter row.
      { atBreak: !0, character: ":", after: "-" },
      // A delimiter row can also start with a dash, when followed by more
      // dashes, a colon, or a pipe.
      // This is a stricter version than the built in check for lists, thematic
      // breaks, and setex heading underlines though:
      // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
      { atBreak: !0, character: "-", after: "[:|-]" }
    ],
    handlers: {
      inlineCode: d,
      table: o,
      tableCell: s,
      tableRow: l
    }
  };
  function o(p, g, v, k) {
    return u(c(p, v, k), p.align);
  }
  function l(p, g, v, k) {
    const b = f(p, v, k), A = u([b]);
    return A.slice(0, A.indexOf(`
`));
  }
  function s(p, g, v, k) {
    const b = v.enter("tableCell"), A = v.enter("phrasing"), E = v.containerPhrasing(p, {
      ...k,
      before: a,
      after: a
    });
    return A(), b(), E;
  }
  function u(p, g) {
    return Ey(p, {
      align: g,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: r,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: n,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: i
    });
  }
  function c(p, g, v) {
    const k = p.children;
    let b = -1;
    const A = [], E = g.enter("table");
    for (; ++b < k.length; )
      A[b] = f(k[b], g, v);
    return E(), A;
  }
  function f(p, g, v) {
    const k = p.children;
    let b = -1;
    const A = [], E = g.enter("tableRow");
    for (; ++b < k.length; )
      A[b] = s(k[b], p, g, v);
    return E(), A;
  }
  function d(p, g, v) {
    let k = bu.inlineCode(p, g, v);
    return v.stack.includes("tableCell") && (k = k.replace(/\|/g, "\\$&")), k;
  }
}
function c1() {
  return {
    exit: {
      taskListCheckValueChecked: Vo,
      taskListCheckValueUnchecked: Vo,
      paragraph: d1
    }
  };
}
function f1() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: p1 }
  };
}
function Vo(e) {
  const t = this.stack[this.stack.length - 2];
  t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function d1(e) {
  const t = this.stack[this.stack.length - 2];
  if (t && t.type === "listItem" && typeof t.checked == "boolean") {
    const n = this.stack[this.stack.length - 1];
    n.type;
    const r = n.children[0];
    if (r && r.type === "text") {
      const i = t.children;
      let a = -1, o;
      for (; ++a < i.length; ) {
        const l = i[a];
        if (l.type === "paragraph") {
          o = l;
          break;
        }
      }
      o === n && (r.value = r.value.slice(1), r.value.length === 0 ? n.children.shift() : n.position && r.position && typeof r.position.start.offset == "number" && (r.position.start.column++, r.position.start.offset++, n.position.start = Object.assign({}, r.position.start)));
    }
  }
  this.exit(e);
}
function p1(e, t, n, r) {
  const i = e.children[0], a = typeof e.checked == "boolean" && i && i.type === "paragraph", o = "[" + (e.checked ? "x" : " ") + "] ", l = n.createTracker(r);
  a && l.move(o);
  let s = bu.listItem(e, t, n, {
    ...r,
    ...l.current()
  });
  return a && (s = s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, u)), s;
  function u(c) {
    return c + o;
  }
}
function h1() {
  return [
    qg(),
    py(),
    yy(),
    r1(),
    c1()
  ];
}
function m1(e) {
  return {
    extensions: [
      Yg(),
      hy(e),
      xy(),
      u1(e),
      f1()
    ]
  };
}
const g1 = {
  tokenize: w1,
  partial: !0
}, vu = {
  tokenize: E1,
  partial: !0
}, ku = {
  tokenize: C1,
  partial: !0
}, wu = {
  tokenize: S1,
  partial: !0
}, y1 = {
  tokenize: T1,
  partial: !0
}, Eu = {
  name: "wwwAutolink",
  tokenize: v1,
  previous: Su
}, Cu = {
  name: "protocolAutolink",
  tokenize: k1,
  previous: Tu
}, mt = {
  name: "emailAutolink",
  tokenize: b1,
  previous: Au
}, at = {};
function x1() {
  return {
    text: at
  };
}
let St = 48;
for (; St < 123; )
  at[St] = mt, St++, St === 58 ? St = 65 : St === 91 && (St = 97);
at[43] = mt;
at[45] = mt;
at[46] = mt;
at[95] = mt;
at[72] = [mt, Cu];
at[104] = [mt, Cu];
at[87] = [mt, Eu];
at[119] = [mt, Eu];
function b1(e, t, n) {
  const r = this;
  let i, a;
  return o;
  function o(f) {
    return !mi(f) || !Au.call(r, r.previous) || ya(r.events) ? n(f) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), l(f));
  }
  function l(f) {
    return mi(f) ? (e.consume(f), l) : f === 64 ? (e.consume(f), s) : n(f);
  }
  function s(f) {
    return f === 46 ? e.check(y1, c, u)(f) : f === 45 || f === 95 || je(f) ? (a = !0, e.consume(f), s) : c(f);
  }
  function u(f) {
    return e.consume(f), i = !0, s;
  }
  function c(f) {
    return a && i && ze(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(f)) : n(f);
  }
}
function v1(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return o !== 87 && o !== 119 || !Su.call(r, r.previous) || ya(r.events) ? n(o) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(g1, e.attempt(vu, e.attempt(ku, a), n), n)(o));
  }
  function a(o) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(o);
  }
}
function k1(e, t, n) {
  const r = this;
  let i = "", a = !1;
  return o;
  function o(f) {
    return (f === 72 || f === 104) && Tu.call(r, r.previous) && !ya(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(f), e.consume(f), l) : n(f);
  }
  function l(f) {
    if (ze(f) && i.length < 5)
      return i += String.fromCodePoint(f), e.consume(f), l;
    if (f === 58) {
      const d = i.toLowerCase();
      if (d === "http" || d === "https")
        return e.consume(f), s;
    }
    return n(f);
  }
  function s(f) {
    return f === 47 ? (e.consume(f), a ? u : (a = !0, s)) : n(f);
  }
  function u(f) {
    return f === null || Yn(f) || xe(f) || Ot(f) || ur(f) ? n(f) : e.attempt(vu, e.attempt(ku, c), n)(f);
  }
  function c(f) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(f);
  }
}
function w1(e, t, n) {
  let r = 0;
  return i;
  function i(o) {
    return (o === 87 || o === 119) && r < 3 ? (r++, e.consume(o), i) : o === 46 && r === 3 ? (e.consume(o), a) : n(o);
  }
  function a(o) {
    return o === null ? n(o) : t(o);
  }
}
function E1(e, t, n) {
  let r, i, a;
  return o;
  function o(u) {
    return u === 46 || u === 95 ? e.check(wu, s, l)(u) : u === null || xe(u) || Ot(u) || u !== 45 && ur(u) ? s(u) : (a = !0, e.consume(u), o);
  }
  function l(u) {
    return u === 95 ? r = !0 : (i = r, r = void 0), e.consume(u), o;
  }
  function s(u) {
    return i || r || !a ? n(u) : t(u);
  }
}
function C1(e, t) {
  let n = 0, r = 0;
  return i;
  function i(o) {
    return o === 40 ? (n++, e.consume(o), i) : o === 41 && r < n ? a(o) : o === 33 || o === 34 || o === 38 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 60 || o === 63 || o === 93 || o === 95 || o === 126 ? e.check(wu, t, a)(o) : o === null || xe(o) || Ot(o) ? t(o) : (e.consume(o), i);
  }
  function a(o) {
    return o === 41 && r++, e.consume(o), i;
  }
}
function S1(e, t, n) {
  return r;
  function r(l) {
    return l === 33 || l === 34 || l === 39 || l === 41 || l === 42 || l === 44 || l === 46 || l === 58 || l === 59 || l === 63 || l === 95 || l === 126 ? (e.consume(l), r) : l === 38 ? (e.consume(l), a) : l === 93 ? (e.consume(l), i) : (
      // `<` is an end.
      l === 60 || // So is whitespace.
      l === null || xe(l) || Ot(l) ? t(l) : n(l)
    );
  }
  function i(l) {
    return l === null || l === 40 || l === 91 || xe(l) || Ot(l) ? t(l) : r(l);
  }
  function a(l) {
    return ze(l) ? o(l) : n(l);
  }
  function o(l) {
    return l === 59 ? (e.consume(l), r) : ze(l) ? (e.consume(l), o) : n(l);
  }
}
function T1(e, t, n) {
  return r;
  function r(a) {
    return e.consume(a), i;
  }
  function i(a) {
    return je(a) ? n(a) : t(a);
  }
}
function Su(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || xe(e);
}
function Tu(e) {
  return !ze(e);
}
function Au(e) {
  return !(e === 47 || mi(e));
}
function mi(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || je(e);
}
function ya(e) {
  let t = e.length, n = !1;
  for (; t--; ) {
    const r = e[t][1];
    if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
      n = !0;
      break;
    }
    if (r._gfmAutolinkLiteralWalkedInto) {
      n = !1;
      break;
    }
  }
  return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n;
}
const A1 = {
  tokenize: F1,
  partial: !0
};
function O1() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: R1,
        continuation: {
          tokenize: j1
        },
        exit: _1
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: P1
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: N1,
        resolveTo: I1
      }
    }
  };
}
function N1(e, t, n) {
  const r = this;
  let i = r.events.length;
  const a = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o;
  for (; i--; ) {
    const s = r.events[i][1];
    if (s.type === "labelImage") {
      o = s;
      break;
    }
    if (s.type === "gfmFootnoteCall" || s.type === "labelLink" || s.type === "label" || s.type === "image" || s.type === "link")
      break;
  }
  return l;
  function l(s) {
    if (!o || !o._balanced)
      return n(s);
    const u = Ze(r.sliceSerialize({
      start: o.end,
      end: r.now()
    }));
    return u.codePointAt(0) !== 94 || !a.includes(u.slice(1)) ? n(s) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(s), e.exit("gfmFootnoteCallLabelMarker"), t(s));
  }
}
function I1(e, t) {
  let n = e.length;
  for (; n--; )
    if (e[n][1].type === "labelImage" && e[n][0] === "enter") {
      e[n][1];
      break;
    }
  e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
  const r = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, e[n + 3][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  }, i = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, e[n + 3][1].end),
    end: Object.assign({}, e[n + 3][1].end)
  };
  i.end.column++, i.end.offset++, i.end._bufferIndex++;
  const a = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, i.end),
    end: Object.assign({}, e[e.length - 1][1].start)
  }, o = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, a.start),
    end: Object.assign({}, a.end)
  }, l = [
    // Take the `labelImageMarker` (now `data`, the `!`)
    e[n + 1],
    e[n + 2],
    ["enter", r, t],
    // The `[`
    e[n + 3],
    e[n + 4],
    // The `^`.
    ["enter", i, t],
    ["exit", i, t],
    // Everything in between.
    ["enter", a, t],
    ["enter", o, t],
    ["exit", o, t],
    ["exit", a, t],
    // The ending (`]`, properly parsed and labelled).
    e[e.length - 2],
    e[e.length - 1],
    ["exit", r, t]
  ];
  return e.splice(n, e.length - n + 1, ...l), e;
}
function P1(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let a = 0, o;
  return l;
  function l(f) {
    return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(f), e.exit("gfmFootnoteCallLabelMarker"), s;
  }
  function s(f) {
    return f !== 94 ? n(f) : (e.enter("gfmFootnoteCallMarker"), e.consume(f), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", u);
  }
  function u(f) {
    if (
      // Too long.
      a > 999 || // Closing brace with nothing.
      f === 93 && !o || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      f === null || f === 91 || xe(f)
    )
      return n(f);
    if (f === 93) {
      e.exit("chunkString");
      const d = e.exit("gfmFootnoteCallString");
      return i.includes(Ze(r.sliceSerialize(d))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(f), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(f);
    }
    return xe(f) || (o = !0), a++, e.consume(f), f === 92 ? c : u;
  }
  function c(f) {
    return f === 91 || f === 92 || f === 93 ? (e.consume(f), a++, u) : u(f);
  }
}
function R1(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let a, o = 0, l;
  return s;
  function s(g) {
    return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(g), e.exit("gfmFootnoteDefinitionLabelMarker"), u;
  }
  function u(g) {
    return g === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(g), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", c) : n(g);
  }
  function c(g) {
    if (
      // Too long.
      o > 999 || // Closing brace with nothing.
      g === 93 && !l || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      g === null || g === 91 || xe(g)
    )
      return n(g);
    if (g === 93) {
      e.exit("chunkString");
      const v = e.exit("gfmFootnoteDefinitionLabelString");
      return a = Ze(r.sliceSerialize(v)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(g), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), d;
    }
    return xe(g) || (l = !0), o++, e.consume(g), g === 92 ? f : c;
  }
  function f(g) {
    return g === 91 || g === 92 || g === 93 ? (e.consume(g), o++, c) : c(g);
  }
  function d(g) {
    return g === 58 ? (e.enter("definitionMarker"), e.consume(g), e.exit("definitionMarker"), i.includes(a) || i.push(a), de(e, p, "gfmFootnoteDefinitionWhitespace")) : n(g);
  }
  function p(g) {
    return t(g);
  }
}
function j1(e, t, n) {
  return e.check(Cn, t, e.attempt(A1, t, n));
}
function _1(e) {
  e.exit("gfmFootnoteDefinition");
}
function F1(e, t, n) {
  const r = this;
  return de(e, i, "gfmFootnoteDefinitionIndent", 5);
  function i(a) {
    const o = r.events[r.events.length - 1];
    return o && o[1].type === "gfmFootnoteDefinitionIndent" && o[2].sliceSerialize(o[1], !0).length === 4 ? t(a) : n(a);
  }
}
function L1(e) {
  let n = (e || {}).singleTilde;
  const r = {
    name: "strikethrough",
    tokenize: a,
    resolveAll: i
  };
  return n == null && (n = !0), {
    text: {
      126: r
    },
    insideSpan: {
      null: [r]
    },
    attentionMarkers: {
      null: [126]
    }
  };
  function i(o, l) {
    let s = -1;
    for (; ++s < o.length; )
      if (o[s][0] === "enter" && o[s][1].type === "strikethroughSequenceTemporary" && o[s][1]._close) {
        let u = s;
        for (; u--; )
          if (o[u][0] === "exit" && o[u][1].type === "strikethroughSequenceTemporary" && o[u][1]._open && // If the sizes are the same:
          o[s][1].end.offset - o[s][1].start.offset === o[u][1].end.offset - o[u][1].start.offset) {
            o[s][1].type = "strikethroughSequence", o[u][1].type = "strikethroughSequence";
            const c = {
              type: "strikethrough",
              start: Object.assign({}, o[u][1].start),
              end: Object.assign({}, o[s][1].end)
            }, f = {
              type: "strikethroughText",
              start: Object.assign({}, o[u][1].end),
              end: Object.assign({}, o[s][1].start)
            }, d = [["enter", c, l], ["enter", o[u][1], l], ["exit", o[u][1], l], ["enter", f, l]], p = l.parser.constructs.insideSpan.null;
            p && Ye(d, d.length, 0, cr(p, o.slice(u + 1, s), l)), Ye(d, d.length, 0, [["exit", f, l], ["enter", o[s][1], l], ["exit", o[s][1], l], ["exit", c, l]]), Ye(o, u - 1, s - u + 3, d), s = u + d.length - 2;
            break;
          }
      }
    for (s = -1; ++s < o.length; )
      o[s][1].type === "strikethroughSequenceTemporary" && (o[s][1].type = "data");
    return o;
  }
  function a(o, l, s) {
    const u = this.previous, c = this.events;
    let f = 0;
    return d;
    function d(g) {
      return u === 126 && c[c.length - 1][1].type !== "characterEscape" ? s(g) : (o.enter("strikethroughSequenceTemporary"), p(g));
    }
    function p(g) {
      const v = qt(u);
      if (g === 126)
        return f > 1 ? s(g) : (o.consume(g), f++, p);
      if (f < 2 && !n) return s(g);
      const k = o.exit("strikethroughSequenceTemporary"), b = qt(g);
      return k._open = !b || b === 2 && !!v, k._close = !v || v === 2 && !!b, l(g);
    }
  }
}
class D1 {
  /**
   * Create a new edit map.
   */
  constructor() {
    this.map = [];
  }
  /**
   * Create an edit: a remove and/or add at a certain place.
   *
   * @param {number} index
   * @param {number} remove
   * @param {Array<Event>} add
   * @returns {undefined}
   */
  add(t, n, r) {
    M1(this, t, n, r);
  }
  // To do: add this when moving to `micromark`.
  // /**
  //  * Create an edit: but insert `add` before existing additions.
  //  *
  //  * @param {number} index
  //  * @param {number} remove
  //  * @param {Array<Event>} add
  //  * @returns {undefined}
  //  */
  // addBefore(index, remove, add) {
  //   addImplementation(this, index, remove, add, true)
  // }
  /**
   * Done, change the events.
   *
   * @param {Array<Event>} events
   * @returns {undefined}
   */
  consume(t) {
    if (this.map.sort(function(a, o) {
      return a[0] - o[0];
    }), this.map.length === 0)
      return;
    let n = this.map.length;
    const r = [];
    for (; n > 0; )
      n -= 1, r.push(t.slice(this.map[n][0] + this.map[n][1]), this.map[n][2]), t.length = this.map[n][0];
    r.push(t.slice()), t.length = 0;
    let i = r.pop();
    for (; i; ) {
      for (const a of i)
        t.push(a);
      i = r.pop();
    }
    this.map.length = 0;
  }
}
function M1(e, t, n, r) {
  let i = 0;
  if (!(n === 0 && r.length === 0)) {
    for (; i < e.map.length; ) {
      if (e.map[i][0] === t) {
        e.map[i][1] += n, e.map[i][2].push(...r);
        return;
      }
      i += 1;
    }
    e.map.push([t, n, r]);
  }
}
function z1(e, t) {
  let n = !1;
  const r = [];
  for (; t < e.length; ) {
    const i = e[t];
    if (n) {
      if (i[0] === "enter")
        i[1].type === "tableContent" && r.push(e[t + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
      else if (i[1].type === "tableContent") {
        if (e[t - 1][1].type === "tableDelimiterMarker") {
          const a = r.length - 1;
          r[a] = r[a] === "left" ? "center" : "right";
        }
      } else if (i[1].type === "tableDelimiterRow")
        break;
    } else i[0] === "enter" && i[1].type === "tableDelimiterRow" && (n = !0);
    t += 1;
  }
  return r;
}
function $1() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: B1,
        resolveAll: U1
      }
    }
  };
}
function B1(e, t, n) {
  const r = this;
  let i = 0, a = 0, o;
  return l;
  function l(C) {
    let D = r.events.length - 1;
    for (; D > -1; ) {
      const F = r.events[D][1].type;
      if (F === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      F === "linePrefix") D--;
      else break;
    }
    const $ = D > -1 ? r.events[D][1].type : null, z = $ === "tableHead" || $ === "tableRow" ? w : s;
    return z === w && r.parser.lazy[r.now().line] ? n(C) : z(C);
  }
  function s(C) {
    return e.enter("tableHead"), e.enter("tableRow"), u(C);
  }
  function u(C) {
    return C === 124 || (o = !0, a += 1), c(C);
  }
  function c(C) {
    return C === null ? n(C) : K(C) ? a > 1 ? (a = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(C), e.exit("lineEnding"), p) : n(C) : ue(C) ? de(e, c, "whitespace")(C) : (a += 1, o && (o = !1, i += 1), C === 124 ? (e.enter("tableCellDivider"), e.consume(C), e.exit("tableCellDivider"), o = !0, c) : (e.enter("data"), f(C)));
  }
  function f(C) {
    return C === null || C === 124 || xe(C) ? (e.exit("data"), c(C)) : (e.consume(C), C === 92 ? d : f);
  }
  function d(C) {
    return C === 92 || C === 124 ? (e.consume(C), f) : f(C);
  }
  function p(C) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(C) : (e.enter("tableDelimiterRow"), o = !1, ue(C) ? de(e, g, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(C) : g(C));
  }
  function g(C) {
    return C === 45 || C === 58 ? k(C) : C === 124 ? (o = !0, e.enter("tableCellDivider"), e.consume(C), e.exit("tableCellDivider"), v) : S(C);
  }
  function v(C) {
    return ue(C) ? de(e, k, "whitespace")(C) : k(C);
  }
  function k(C) {
    return C === 58 ? (a += 1, o = !0, e.enter("tableDelimiterMarker"), e.consume(C), e.exit("tableDelimiterMarker"), b) : C === 45 ? (a += 1, b(C)) : C === null || K(C) ? N(C) : S(C);
  }
  function b(C) {
    return C === 45 ? (e.enter("tableDelimiterFiller"), A(C)) : S(C);
  }
  function A(C) {
    return C === 45 ? (e.consume(C), A) : C === 58 ? (o = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(C), e.exit("tableDelimiterMarker"), E) : (e.exit("tableDelimiterFiller"), E(C));
  }
  function E(C) {
    return ue(C) ? de(e, N, "whitespace")(C) : N(C);
  }
  function N(C) {
    return C === 124 ? g(C) : C === null || K(C) ? !o || i !== a ? S(C) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(C)) : S(C);
  }
  function S(C) {
    return n(C);
  }
  function w(C) {
    return e.enter("tableRow"), M(C);
  }
  function M(C) {
    return C === 124 ? (e.enter("tableCellDivider"), e.consume(C), e.exit("tableCellDivider"), M) : C === null || K(C) ? (e.exit("tableRow"), t(C)) : ue(C) ? de(e, M, "whitespace")(C) : (e.enter("data"), Q(C));
  }
  function Q(C) {
    return C === null || C === 124 || xe(C) ? (e.exit("data"), M(C)) : (e.consume(C), C === 92 ? ne : Q);
  }
  function ne(C) {
    return C === 92 || C === 124 ? (e.consume(C), Q) : Q(C);
  }
}
function U1(e, t) {
  let n = -1, r = !0, i = 0, a = [0, 0, 0, 0], o = [0, 0, 0, 0], l = !1, s = 0, u, c, f;
  const d = new D1();
  for (; ++n < e.length; ) {
    const p = e[n], g = p[1];
    p[0] === "enter" ? g.type === "tableHead" ? (l = !1, s !== 0 && (Wo(d, t, s, u, c), c = void 0, s = 0), u = {
      type: "table",
      start: Object.assign({}, g.start),
      // Note: correct end is set later.
      end: Object.assign({}, g.end)
    }, d.add(n, 0, [["enter", u, t]])) : g.type === "tableRow" || g.type === "tableDelimiterRow" ? (r = !0, f = void 0, a = [0, 0, 0, 0], o = [0, n + 1, 0, 0], l && (l = !1, c = {
      type: "tableBody",
      start: Object.assign({}, g.start),
      // Note: correct end is set later.
      end: Object.assign({}, g.end)
    }, d.add(n, 0, [["enter", c, t]])), i = g.type === "tableDelimiterRow" ? 2 : c ? 3 : 1) : i && (g.type === "data" || g.type === "tableDelimiterMarker" || g.type === "tableDelimiterFiller") ? (r = !1, o[2] === 0 && (a[1] !== 0 && (o[0] = o[1], f = Dn(d, t, a, i, void 0, f), a = [0, 0, 0, 0]), o[2] = n)) : g.type === "tableCellDivider" && (r ? r = !1 : (a[1] !== 0 && (o[0] = o[1], f = Dn(d, t, a, i, void 0, f)), a = o, o = [a[1], n, 0, 0])) : g.type === "tableHead" ? (l = !0, s = n) : g.type === "tableRow" || g.type === "tableDelimiterRow" ? (s = n, a[1] !== 0 ? (o[0] = o[1], f = Dn(d, t, a, i, n, f)) : o[1] !== 0 && (f = Dn(d, t, o, i, n, f)), i = 0) : i && (g.type === "data" || g.type === "tableDelimiterMarker" || g.type === "tableDelimiterFiller") && (o[3] = n);
  }
  for (s !== 0 && Wo(d, t, s, u, c), d.consume(t.events), n = -1; ++n < t.events.length; ) {
    const p = t.events[n];
    p[0] === "enter" && p[1].type === "table" && (p[1]._align = z1(t.events, n));
  }
  return e;
}
function Dn(e, t, n, r, i, a) {
  const o = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", l = "tableContent";
  n[0] !== 0 && (a.end = Object.assign({}, $t(t.events, n[0])), e.add(n[0], 0, [["exit", a, t]]));
  const s = $t(t.events, n[1]);
  if (a = {
    type: o,
    start: Object.assign({}, s),
    // Note: correct end is set later.
    end: Object.assign({}, s)
  }, e.add(n[1], 0, [["enter", a, t]]), n[2] !== 0) {
    const u = $t(t.events, n[2]), c = $t(t.events, n[3]), f = {
      type: l,
      start: Object.assign({}, u),
      end: Object.assign({}, c)
    };
    if (e.add(n[2], 0, [["enter", f, t]]), r !== 2) {
      const d = t.events[n[2]], p = t.events[n[3]];
      if (d[1].end = Object.assign({}, p[1].end), d[1].type = "chunkText", d[1].contentType = "text", n[3] > n[2] + 1) {
        const g = n[2] + 1, v = n[3] - n[2] - 1;
        e.add(g, v, []);
      }
    }
    e.add(n[3] + 1, 0, [["exit", f, t]]);
  }
  return i !== void 0 && (a.end = Object.assign({}, $t(t.events, i)), e.add(i, 0, [["exit", a, t]]), a = void 0), a;
}
function Wo(e, t, n, r, i) {
  const a = [], o = $t(t.events, n);
  i && (i.end = Object.assign({}, o), a.push(["exit", i, t])), r.end = Object.assign({}, o), a.push(["exit", r, t]), e.add(n + 1, 0, a);
}
function $t(e, t) {
  const n = e[t], r = n[0] === "enter" ? "start" : "end";
  return n[1][r];
}
const H1 = {
  name: "tasklistCheck",
  tokenize: W1
};
function V1() {
  return {
    text: {
      91: H1
    }
  };
}
function W1(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return (
      // Exit if there’s stuff before.
      r.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !r._gfmTasklistFirstContentOfListItem ? n(s) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), a)
    );
  }
  function a(s) {
    return xe(s) ? (e.enter("taskListCheckValueUnchecked"), e.consume(s), e.exit("taskListCheckValueUnchecked"), o) : s === 88 || s === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(s), e.exit("taskListCheckValueChecked"), o) : n(s);
  }
  function o(s) {
    return s === 93 ? (e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), l) : n(s);
  }
  function l(s) {
    return K(s) ? t(s) : ue(s) ? e.check({
      tokenize: q1
    }, t, n)(s) : n(s);
  }
}
function q1(e, t, n) {
  return de(e, r, "whitespace");
  function r(i) {
    return i === null ? n(i) : t(i);
  }
}
function Y1(e) {
  return Ms([
    x1(),
    O1(),
    L1(e),
    $1(),
    V1()
  ]);
}
const G1 = {};
function K1(e) {
  const t = (
    /** @type {Processor<Root>} */
    this
  ), n = e || G1, r = t.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), a = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), o = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  i.push(Y1(n)), a.push(h1()), o.push(m1(n));
}
const Lv = ({ mark_down_data: e }) => /* @__PURE__ */ y.jsx($e, { children: /* @__PURE__ */ y.jsx(Te, { className: "rounded background-color-body mt-3 p-2", children: /* @__PURE__ */ y.jsx(ye, { children: /* @__PURE__ */ y.jsx("div", { className: "mb-0 mt-1 font-color-class bio-desc markdown-body", children: /* @__PURE__ */ y.jsx(Lg, { remarkPlugins: [K1], children: e }) }) }) }) }), Dv = ({ more_link: e }) => /* @__PURE__ */ y.jsx($e, { children: /* @__PURE__ */ y.jsx(Te, { className: "", children: /* @__PURE__ */ y.jsx(ye, { className: "text-center", children: /* @__PURE__ */ y.jsx("h1", { className: "animate bounce", children: /* @__PURE__ */ y.jsxs(
  "a",
  {
    className: "text-decoration-none more-color",
    href: e,
    rel: "noopener noreferrer",
    children: [
      /* @__PURE__ */ y.jsx("span", { className: "dot", children: "." }),
      /* @__PURE__ */ y.jsx("span", { className: "dot", children: "." }),
      /* @__PURE__ */ y.jsx("span", { className: "dot", children: "." })
    ]
  }
) }) }) }) });
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function X1(e, t, n) {
  return (t = J1(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function qo(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qo(Object(n), !0).forEach(function(r) {
      X1(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qo(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Q1(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function J1(e) {
  var t = Q1(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const Yo = () => {
};
let xa = {}, Ou = {}, Nu = null, Iu = {
  mark: Yo,
  measure: Yo
};
try {
  typeof window < "u" && (xa = window), typeof document < "u" && (Ou = document), typeof MutationObserver < "u" && (Nu = MutationObserver), typeof performance < "u" && (Iu = performance);
} catch {
}
const {
  userAgent: Go = ""
} = xa.navigator || {}, vt = xa, ke = Ou, Ko = Nu, Mn = Iu;
vt.document;
const gt = !!ke.documentElement && !!ke.head && typeof ke.addEventListener == "function" && typeof ke.createElement == "function", Pu = ~Go.indexOf("MSIE") || ~Go.indexOf("Trident/");
var Z1 = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, ex = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Ru = {
  classic: {
    fa: "solid",
    fas: "solid",
    "fa-solid": "solid",
    far: "regular",
    "fa-regular": "regular",
    fal: "light",
    "fa-light": "light",
    fat: "thin",
    "fa-thin": "thin",
    fab: "brands",
    "fa-brands": "brands"
  },
  duotone: {
    fa: "solid",
    fad: "solid",
    "fa-solid": "solid",
    "fa-duotone": "solid",
    fadr: "regular",
    "fa-regular": "regular",
    fadl: "light",
    "fa-light": "light",
    fadt: "thin",
    "fa-thin": "thin"
  },
  sharp: {
    fa: "solid",
    fass: "solid",
    "fa-solid": "solid",
    fasr: "regular",
    "fa-regular": "regular",
    fasl: "light",
    "fa-light": "light",
    fast: "thin",
    "fa-thin": "thin"
  },
  "sharp-duotone": {
    fa: "solid",
    fasds: "solid",
    "fa-solid": "solid",
    fasdr: "regular",
    "fa-regular": "regular",
    fasdl: "light",
    "fa-light": "light",
    fasdt: "thin",
    "fa-thin": "thin"
  }
}, tx = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, ju = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Fe = "classic", hr = "duotone", nx = "sharp", rx = "sharp-duotone", _u = [Fe, hr, nx, rx], ix = {
  classic: {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  duotone: {
    900: "fad",
    400: "fadr",
    300: "fadl",
    100: "fadt"
  },
  sharp: {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
  },
  "sharp-duotone": {
    900: "fasds",
    400: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, ax = {
  "Font Awesome 6 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 6 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  "Font Awesome 6 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 6 Duotone": {
    900: "fad",
    400: "fadr",
    normal: "fadr",
    300: "fadl",
    100: "fadt"
  },
  "Font Awesome 6 Sharp": {
    900: "fass",
    400: "fasr",
    normal: "fasr",
    300: "fasl",
    100: "fast"
  },
  "Font Awesome 6 Sharp Duotone": {
    900: "fasds",
    400: "fasdr",
    normal: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, ox = /* @__PURE__ */ new Map([["classic", {
  defaultShortPrefixId: "fas",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin", "brands"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp", {
  defaultShortPrefixId: "fass",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["duotone", {
  defaultShortPrefixId: "fad",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp-duotone", {
  defaultShortPrefixId: "fasds",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}]]), lx = {
  classic: {
    solid: "fas",
    regular: "far",
    light: "fal",
    thin: "fat",
    brands: "fab"
  },
  duotone: {
    solid: "fad",
    regular: "fadr",
    light: "fadl",
    thin: "fadt"
  },
  sharp: {
    solid: "fass",
    regular: "fasr",
    light: "fasl",
    thin: "fast"
  },
  "sharp-duotone": {
    solid: "fasds",
    regular: "fasdr",
    light: "fasdl",
    thin: "fasdt"
  }
}, sx = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Xo = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, ux = ["kit"], cx = {
  kit: {
    "fa-kit": "fak"
  }
}, fx = ["fak", "fakd"], dx = {
  kit: {
    fak: "fa-kit"
  }
}, Qo = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, zn = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, px = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], hx = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], mx = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, gx = {
  classic: {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
  },
  duotone: {
    "fa-regular": "fadr",
    "fa-light": "fadl",
    "fa-thin": "fadt"
  },
  sharp: {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
  },
  "sharp-duotone": {
    "fa-solid": "fasds",
    "fa-regular": "fasdr",
    "fa-light": "fasdl",
    "fa-thin": "fasdt"
  }
}, yx = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, gi = {
  classic: {
    fab: "fa-brands",
    fad: "fa-duotone",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
  },
  duotone: {
    fadr: "fa-regular",
    fadl: "fa-light",
    fadt: "fa-thin"
  },
  sharp: {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
  },
  "sharp-duotone": {
    fasds: "fa-solid",
    fasdr: "fa-regular",
    fasdl: "fa-light",
    fasdt: "fa-thin"
  }
}, xx = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], yi = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...px, ...xx], bx = ["solid", "regular", "light", "thin", "duotone", "brands"], Fu = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], vx = Fu.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), kx = [...Object.keys(yx), ...bx, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", zn.GROUP, zn.SWAP_OPACITY, zn.PRIMARY, zn.SECONDARY].concat(Fu.map((e) => "".concat(e, "x"))).concat(vx.map((e) => "w-".concat(e))), wx = {
  "Font Awesome 5 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 5 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal"
  },
  "Font Awesome 5 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 5 Duotone": {
    900: "fad"
  }
};
const dt = "___FONT_AWESOME___", xi = 16, Lu = "fa", Du = "svg-inline--fa", Nt = "data-fa-i2svg", bi = "data-fa-pseudo-element", Ex = "data-fa-pseudo-element-pending", ba = "data-prefix", va = "data-icon", Jo = "fontawesome-i2svg", Cx = "async", Sx = ["HTML", "HEAD", "STYLE", "SCRIPT"], Mu = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function Tn(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[Fe];
    }
  });
}
const zu = I({}, Ru);
zu[Fe] = I(I(I(I({}, {
  "fa-duotone": "duotone"
}), Ru[Fe]), Xo.kit), Xo["kit-duotone"]);
const Tx = Tn(zu), vi = I({}, lx);
vi[Fe] = I(I(I(I({}, {
  duotone: "fad"
}), vi[Fe]), Qo.kit), Qo["kit-duotone"]);
const Zo = Tn(vi), ki = I({}, gi);
ki[Fe] = I(I({}, ki[Fe]), dx.kit);
const ka = Tn(ki), wi = I({}, gx);
wi[Fe] = I(I({}, wi[Fe]), cx.kit);
Tn(wi);
const Ax = Z1, $u = "fa-layers-text", Ox = ex, Nx = I({}, ix);
Tn(Nx);
const Ix = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Kr = tx, Px = [...ux, ...kx], pn = vt.FontAwesomeConfig || {};
function Rx(e) {
  var t = ke.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function jx(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
ke && typeof ke.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const i = jx(Rx(n));
  i != null && (pn[r] = i);
});
const Bu = {
  styleDefault: "solid",
  familyDefault: Fe,
  cssPrefix: Lu,
  replacementClass: Du,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
pn.familyPrefix && (pn.cssPrefix = pn.familyPrefix);
const Yt = I(I({}, Bu), pn);
Yt.autoReplaceSvg || (Yt.observeMutations = !1);
const W = {};
Object.keys(Bu).forEach((e) => {
  Object.defineProperty(W, e, {
    enumerable: !0,
    set: function(t) {
      Yt[e] = t, hn.forEach((n) => n(W));
    },
    get: function() {
      return Yt[e];
    }
  });
});
Object.defineProperty(W, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Yt.cssPrefix = e, hn.forEach((t) => t(W));
  },
  get: function() {
    return Yt.cssPrefix;
  }
});
vt.FontAwesomeConfig = W;
const hn = [];
function _x(e) {
  return hn.push(e), () => {
    hn.splice(hn.indexOf(e), 1);
  };
}
const xt = xi, rt = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Fx(e) {
  if (!e || !gt)
    return;
  const t = ke.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = ke.head.childNodes;
  let r = null;
  for (let i = n.length - 1; i > -1; i--) {
    const a = n[i], o = (a.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(o) > -1 && (r = a);
  }
  return ke.head.insertBefore(t, r), e;
}
const Lx = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function xn() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += Lx[Math.random() * 62 | 0];
  return t;
}
function Jt(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function wa(e) {
  return e.classList ? Jt(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function Uu(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Dx(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(Uu(e[n]), '" '), "").trim();
}
function mr(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function Ea(e) {
  return e.size !== rt.size || e.x !== rt.x || e.y !== rt.y || e.rotate !== rt.rotate || e.flipX || e.flipY;
}
function Mx(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: r
  } = e;
  const i = {
    transform: "translate(".concat(n / 2, " 256)")
  }, a = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), o = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), l = "rotate(".concat(t.rotate, " 0 0)"), s = {
    transform: "".concat(a, " ").concat(o, " ").concat(l)
  }, u = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: i,
    inner: s,
    path: u
  };
}
function zx(e) {
  let {
    transform: t,
    width: n = xi,
    height: r = xi,
    startCentered: i = !1
  } = e, a = "";
  return i && Pu ? a += "translate(".concat(t.x / xt - n / 2, "em, ").concat(t.y / xt - r / 2, "em) ") : i ? a += "translate(calc(-50% + ".concat(t.x / xt, "em), calc(-50% + ").concat(t.y / xt, "em)) ") : a += "translate(".concat(t.x / xt, "em, ").concat(t.y / xt, "em) "), a += "scale(".concat(t.size / xt * (t.flipX ? -1 : 1), ", ").concat(t.size / xt * (t.flipY ? -1 : 1), ") "), a += "rotate(".concat(t.rotate, "deg) "), a;
}
var $x = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;
function Hu() {
  const e = Lu, t = Du, n = W.cssPrefix, r = W.replacementClass;
  let i = $x;
  if (n !== e || r !== t) {
    const a = new RegExp("\\.".concat(e, "\\-"), "g"), o = new RegExp("\\--".concat(e, "\\-"), "g"), l = new RegExp("\\.".concat(t), "g");
    i = i.replace(a, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(l, ".".concat(r));
  }
  return i;
}
let el = !1;
function Xr() {
  W.autoAddCss && !el && (Fx(Hu()), el = !0);
}
var Bx = {
  mixout() {
    return {
      dom: {
        css: Hu,
        insertCss: Xr
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        Xr();
      },
      beforeI2svg() {
        Xr();
      }
    };
  }
};
const pt = vt || {};
pt[dt] || (pt[dt] = {});
pt[dt].styles || (pt[dt].styles = {});
pt[dt].hooks || (pt[dt].hooks = {});
pt[dt].shims || (pt[dt].shims = []);
var it = pt[dt];
const Vu = [], Wu = function() {
  ke.removeEventListener("DOMContentLoaded", Wu), Qn = 1, Vu.map((e) => e());
};
let Qn = !1;
gt && (Qn = (ke.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(ke.readyState), Qn || ke.addEventListener("DOMContentLoaded", Wu));
function Ux(e) {
  gt && (Qn ? setTimeout(e, 0) : Vu.push(e));
}
function An(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? Uu(e) : "<".concat(t, " ").concat(Dx(n), ">").concat(r.map(An).join(""), "</").concat(t, ">");
}
function tl(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var Qr = function(t, n, r, i) {
  var a = Object.keys(t), o = a.length, l = n, s, u, c;
  for (r === void 0 ? (s = 1, c = t[a[0]]) : (s = 0, c = r); s < o; s++)
    u = a[s], c = l(c, t[u], u, t);
  return c;
};
function Hx(e) {
  const t = [];
  let n = 0;
  const r = e.length;
  for (; n < r; ) {
    const i = e.charCodeAt(n++);
    if (i >= 55296 && i <= 56319 && n < r) {
      const a = e.charCodeAt(n++);
      (a & 64512) == 56320 ? t.push(((i & 1023) << 10) + (a & 1023) + 65536) : (t.push(i), n--);
    } else
      t.push(i);
  }
  return t;
}
function Ei(e) {
  const t = Hx(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Vx(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), i;
  return r >= 55296 && r <= 56319 && n > t + 1 && (i = e.charCodeAt(t + 1), i >= 56320 && i <= 57343) ? (r - 55296) * 1024 + i - 56320 + 65536 : r;
}
function nl(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function Ci(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, i = nl(t);
  typeof it.hooks.addPack == "function" && !r ? it.hooks.addPack(e, nl(t)) : it.styles[e] = I(I({}, it.styles[e] || {}), i), e === "fas" && Ci("fa", t);
}
const {
  styles: bn,
  shims: Wx
} = it, qu = Object.keys(ka), qx = qu.reduce((e, t) => (e[t] = Object.keys(ka[t]), e), {});
let Ca = null, Yu = {}, Gu = {}, Ku = {}, Xu = {}, Qu = {};
function Yx(e) {
  return ~Px.indexOf(e);
}
function Gx(e, t) {
  const n = t.split("-"), r = n[0], i = n.slice(1).join("-");
  return r === e && i !== "" && !Yx(i) ? i : null;
}
const Ju = () => {
  const e = (r) => Qr(bn, (i, a, o) => (i[o] = Qr(a, r, {}), i), {});
  Yu = e((r, i, a) => (i[3] && (r[i[3]] = a), i[2] && i[2].filter((l) => typeof l == "number").forEach((l) => {
    r[l.toString(16)] = a;
  }), r)), Gu = e((r, i, a) => (r[a] = a, i[2] && i[2].filter((l) => typeof l == "string").forEach((l) => {
    r[l] = a;
  }), r)), Qu = e((r, i, a) => {
    const o = i[2];
    return r[a] = a, o.forEach((l) => {
      r[l] = a;
    }), r;
  });
  const t = "far" in bn || W.autoFetchSvg, n = Qr(Wx, (r, i) => {
    const a = i[0];
    let o = i[1];
    const l = i[2];
    return o === "far" && !t && (o = "fas"), typeof a == "string" && (r.names[a] = {
      prefix: o,
      iconName: l
    }), typeof a == "number" && (r.unicodes[a.toString(16)] = {
      prefix: o,
      iconName: l
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  Ku = n.names, Xu = n.unicodes, Ca = gr(W.styleDefault, {
    family: W.familyDefault
  });
};
_x((e) => {
  Ca = gr(e.styleDefault, {
    family: W.familyDefault
  });
});
Ju();
function Sa(e, t) {
  return (Yu[e] || {})[t];
}
function Kx(e, t) {
  return (Gu[e] || {})[t];
}
function At(e, t) {
  return (Qu[e] || {})[t];
}
function Zu(e) {
  return Ku[e] || {
    prefix: null,
    iconName: null
  };
}
function Xx(e) {
  const t = Xu[e], n = Sa("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function kt() {
  return Ca;
}
const ec = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function Qx(e) {
  let t = Fe;
  const n = qu.reduce((r, i) => (r[i] = "".concat(W.cssPrefix, "-").concat(i), r), {});
  return _u.forEach((r) => {
    (e.includes(n[r]) || e.some((i) => qx[r].includes(i))) && (t = r);
  }), t;
}
function gr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = Fe
  } = t, r = Tx[n][e];
  if (n === hr && !e)
    return "fad";
  const i = Zo[n][e] || Zo[n][r], a = e in it.styles ? e : null;
  return i || a || null;
}
function Jx(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const i = Gx(W.cssPrefix, r);
    i ? n = i : r && t.push(r);
  }), {
    iconName: n,
    rest: t
  };
}
function rl(e) {
  return e.sort().filter((t, n, r) => r.indexOf(t) === n);
}
function yr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t;
  let r = null;
  const i = yi.concat(hx), a = rl(e.filter((f) => i.includes(f))), o = rl(e.filter((f) => !yi.includes(f))), l = a.filter((f) => (r = f, !ju.includes(f))), [s = null] = l, u = Qx(a), c = I(I({}, Jx(o)), {}, {
    prefix: gr(s, {
      family: u
    })
  });
  return I(I(I({}, c), nb({
    values: e,
    family: u,
    styles: bn,
    config: W,
    canonical: c,
    givenPrefix: r
  })), Zx(n, r, c));
}
function Zx(e, t, n) {
  let {
    prefix: r,
    iconName: i
  } = n;
  if (e || !r || !i)
    return {
      prefix: r,
      iconName: i
    };
  const a = t === "fa" ? Zu(i) : {}, o = At(r, i);
  return i = a.iconName || o || i, r = a.prefix || r, r === "far" && !bn.far && bn.fas && !W.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: i
  };
}
const eb = _u.filter((e) => e !== Fe || e !== hr), tb = Object.keys(gi).filter((e) => e !== Fe).map((e) => Object.keys(gi[e])).flat();
function nb(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: i = "",
    styles: a = {},
    config: o = {}
  } = e, l = n === hr, s = t.includes("fa-duotone") || t.includes("fad"), u = o.familyDefault === "duotone", c = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!l && (s || u || c) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && eb.includes(n) && (Object.keys(a).find((d) => tb.includes(d)) || o.autoFetchSvg)) {
    const d = ox.get(n).defaultShortPrefixId;
    r.prefix = d, r.iconName = At(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || i === "fa") && (r.prefix = kt() || "fas"), r;
}
class rb {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const i = n.reduce(this._pullDefinitions, {});
    Object.keys(i).forEach((a) => {
      this.definitions[a] = I(I({}, this.definitions[a] || {}), i[a]), Ci(a, i[a]);
      const o = ka[Fe][a];
      o && Ci(o, i[a]), Ju();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(t, n) {
    const r = n.prefix && n.iconName && n.icon ? {
      0: n
    } : n;
    return Object.keys(r).map((i) => {
      const {
        prefix: a,
        iconName: o,
        icon: l
      } = r[i], s = l[2];
      t[a] || (t[a] = {}), s.length > 0 && s.forEach((u) => {
        typeof u == "string" && (t[a][u] = l);
      }), t[a][o] = l;
    }), t;
  }
}
let il = [], Ut = {};
const Wt = {}, ib = Object.keys(Wt);
function ab(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return il = e, Ut = {}, Object.keys(Wt).forEach((r) => {
    ib.indexOf(r) === -1 && delete Wt[r];
  }), il.forEach((r) => {
    const i = r.mixout ? r.mixout() : {};
    if (Object.keys(i).forEach((a) => {
      typeof i[a] == "function" && (n[a] = i[a]), typeof i[a] == "object" && Object.keys(i[a]).forEach((o) => {
        n[a] || (n[a] = {}), n[a][o] = i[a][o];
      });
    }), r.hooks) {
      const a = r.hooks();
      Object.keys(a).forEach((o) => {
        Ut[o] || (Ut[o] = []), Ut[o].push(a[o]);
      });
    }
    r.provides && r.provides(Wt);
  }), n;
}
function Si(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    r[i - 2] = arguments[i];
  return (Ut[e] || []).forEach((o) => {
    t = o.apply(null, [t, ...r]);
  }), t;
}
function It(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (Ut[e] || []).forEach((a) => {
    a.apply(null, n);
  });
}
function wt() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return Wt[e] ? Wt[e].apply(null, t) : void 0;
}
function Ti(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || kt();
  if (t)
    return t = At(n, t) || t, tl(tc.definitions, n, t) || tl(it.styles, n, t);
}
const tc = new rb(), ob = () => {
  W.autoReplaceSvg = !1, W.observeMutations = !1, It("noAuto");
}, lb = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return gt ? (It("beforeI2svg", e), wt("pseudoElements2svg", e), wt("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    W.autoReplaceSvg === !1 && (W.autoReplaceSvg = !0), W.observeMutations = !0, Ux(() => {
      ub({
        autoReplaceSvgRoot: t
      }), It("watch", e);
    });
  }
}, sb = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: At(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = gr(e[0]);
      return {
        prefix: n,
        iconName: At(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(W.cssPrefix, "-")) > -1 || e.match(Ax))) {
      const t = yr(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || kt(),
        iconName: At(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = kt();
      return {
        prefix: t,
        iconName: At(t, e) || e
      };
    }
  }
}, Ge = {
  noAuto: ob,
  config: W,
  dom: lb,
  parse: sb,
  library: tc,
  findIconDefinition: Ti,
  toHtml: An
}, ub = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = ke
  } = e;
  (Object.keys(it.styles).length > 0 || W.autoFetchSvg) && gt && W.autoReplaceSvg && Ge.dom.i2svg({
    node: t
  });
};
function xr(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => An(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!gt) return;
      const n = ke.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function cb(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: i,
    styles: a,
    transform: o
  } = e;
  if (Ea(o) && n.found && !r.found) {
    const {
      width: l,
      height: s
    } = n, u = {
      x: l / s / 2,
      y: 0.5
    };
    i.style = mr(I(I({}, a), {}, {
      "transform-origin": "".concat(u.x + o.x / 16, "em ").concat(u.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: i,
    children: t
  }];
}
function fb(e) {
  let {
    prefix: t,
    iconName: n,
    children: r,
    attributes: i,
    symbol: a
  } = e;
  const o = a === !0 ? "".concat(t, "-").concat(W.cssPrefix, "-").concat(n) : a;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: I(I({}, i), {}, {
        id: o
      }),
      children: r
    }]
  }];
}
function Ta(e) {
  const {
    icons: {
      main: t,
      mask: n
    },
    prefix: r,
    iconName: i,
    transform: a,
    symbol: o,
    title: l,
    maskId: s,
    titleId: u,
    extra: c,
    watchable: f = !1
  } = e, {
    width: d,
    height: p
  } = n.found ? n : t, g = fx.includes(r), v = [W.replacementClass, i ? "".concat(W.cssPrefix, "-").concat(i) : ""].filter((S) => c.classes.indexOf(S) === -1).filter((S) => S !== "" || !!S).concat(c.classes).join(" ");
  let k = {
    children: [],
    attributes: I(I({}, c.attributes), {}, {
      "data-prefix": r,
      "data-icon": i,
      class: v,
      role: c.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(d, " ").concat(p)
    })
  };
  const b = g && !~c.classes.indexOf("fa-fw") ? {
    width: "".concat(d / p * 16 * 0.0625, "em")
  } : {};
  f && (k.attributes[Nt] = ""), l && (k.children.push({
    tag: "title",
    attributes: {
      id: k.attributes["aria-labelledby"] || "title-".concat(u || xn())
    },
    children: [l]
  }), delete k.attributes.title);
  const A = I(I({}, k), {}, {
    prefix: r,
    iconName: i,
    main: t,
    mask: n,
    maskId: s,
    transform: a,
    symbol: o,
    styles: I(I({}, b), c.styles)
  }), {
    children: E,
    attributes: N
  } = n.found && t.found ? wt("generateAbstractMask", A) || {
    children: [],
    attributes: {}
  } : wt("generateAbstractIcon", A) || {
    children: [],
    attributes: {}
  };
  return A.children = E, A.attributes = N, o ? fb(A) : cb(A);
}
function al(e) {
  const {
    content: t,
    width: n,
    height: r,
    transform: i,
    title: a,
    extra: o,
    watchable: l = !1
  } = e, s = I(I(I({}, o.attributes), a ? {
    title: a
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  l && (s[Nt] = "");
  const u = I({}, o.styles);
  Ea(i) && (u.transform = zx({
    transform: i,
    startCentered: !0,
    width: n,
    height: r
  }), u["-webkit-transform"] = u.transform);
  const c = mr(u);
  c.length > 0 && (s.style = c);
  const f = [];
  return f.push({
    tag: "span",
    attributes: s,
    children: [t]
  }), a && f.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [a]
  }), f;
}
function db(e) {
  const {
    content: t,
    title: n,
    extra: r
  } = e, i = I(I(I({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), a = mr(r.styles);
  a.length > 0 && (i.style = a);
  const o = [];
  return o.push({
    tag: "span",
    attributes: i,
    children: [t]
  }), n && o.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), o;
}
const {
  styles: Jr
} = it;
function Ai(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let i = null;
  return Array.isArray(r) ? i = {
    tag: "g",
    attributes: {
      class: "".concat(W.cssPrefix, "-").concat(Kr.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(W.cssPrefix, "-").concat(Kr.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(W.cssPrefix, "-").concat(Kr.PRIMARY),
        fill: "currentColor",
        d: r[1]
      }
    }]
  } : i = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: r
    }
  }, {
    found: !0,
    width: t,
    height: n,
    icon: i
  };
}
const pb = {
  found: !1,
  width: 512,
  height: 512
};
function hb(e, t) {
  !Mu && !W.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function Oi(e, t) {
  let n = t;
  return t === "fa" && W.styleDefault !== null && (t = kt()), new Promise((r, i) => {
    if (n === "fa") {
      const a = Zu(e) || {};
      e = a.iconName || e, t = a.prefix || t;
    }
    if (e && t && Jr[t] && Jr[t][e]) {
      const a = Jr[t][e];
      return r(Ai(a));
    }
    hb(e, t), r(I(I({}, pb), {}, {
      icon: W.showMissingIcons && e ? wt("missingIconAbstract") || {} : {}
    }));
  });
}
const ol = () => {
}, Ni = W.measurePerformance && Mn && Mn.mark && Mn.measure ? Mn : {
  mark: ol,
  measure: ol
}, un = 'FA "6.7.2"', mb = (e) => (Ni.mark("".concat(un, " ").concat(e, " begins")), () => nc(e)), nc = (e) => {
  Ni.mark("".concat(un, " ").concat(e, " ends")), Ni.measure("".concat(un, " ").concat(e), "".concat(un, " ").concat(e, " begins"), "".concat(un, " ").concat(e, " ends"));
};
var Aa = {
  begin: mb,
  end: nc
};
const Bn = () => {
};
function ll(e) {
  return typeof (e.getAttribute ? e.getAttribute(Nt) : null) == "string";
}
function gb(e) {
  const t = e.getAttribute ? e.getAttribute(ba) : null, n = e.getAttribute ? e.getAttribute(va) : null;
  return t && n;
}
function yb(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(W.replacementClass);
}
function xb() {
  return W.autoReplaceSvg === !0 ? Un.replace : Un[W.autoReplaceSvg] || Un.replace;
}
function bb(e) {
  return ke.createElementNS("http://www.w3.org/2000/svg", e);
}
function vb(e) {
  return ke.createElement(e);
}
function rc(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? bb : vb
  } = t;
  if (typeof e == "string")
    return ke.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(a) {
    r.setAttribute(a, e.attributes[a]);
  }), (e.children || []).forEach(function(a) {
    r.appendChild(rc(a, {
      ceFn: n
    }));
  }), r;
}
function kb(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const Un = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(rc(n), t);
      }), t.getAttribute(Nt) === null && W.keepOriginalSource) {
        let n = ke.createComment(kb(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~wa(t).indexOf(W.replacementClass))
      return Un.replace(e);
    const r = new RegExp("".concat(W.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const a = n[0].attributes.class.split(" ").reduce((o, l) => (l === W.replacementClass || l.match(r) ? o.toSvg.push(l) : o.toNode.push(l), o), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = a.toSvg.join(" "), a.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", a.toNode.join(" "));
    }
    const i = n.map((a) => An(a)).join(`
`);
    t.setAttribute(Nt, ""), t.innerHTML = i;
  }
};
function sl(e) {
  e();
}
function ic(e, t) {
  const n = typeof t == "function" ? t : Bn;
  if (e.length === 0)
    n();
  else {
    let r = sl;
    W.mutateApproach === Cx && (r = vt.requestAnimationFrame || sl), r(() => {
      const i = xb(), a = Aa.begin("mutate");
      e.map(i), a(), n();
    });
  }
}
let Oa = !1;
function ac() {
  Oa = !0;
}
function Ii() {
  Oa = !1;
}
let Jn = null;
function ul(e) {
  if (!Ko || !W.observeMutations)
    return;
  const {
    treeCallback: t = Bn,
    nodeCallback: n = Bn,
    pseudoElementsCallback: r = Bn,
    observeMutationsRoot: i = ke
  } = e;
  Jn = new Ko((a) => {
    if (Oa) return;
    const o = kt();
    Jt(a).forEach((l) => {
      if (l.type === "childList" && l.addedNodes.length > 0 && !ll(l.addedNodes[0]) && (W.searchPseudoElements && r(l.target), t(l.target)), l.type === "attributes" && l.target.parentNode && W.searchPseudoElements && r(l.target.parentNode), l.type === "attributes" && ll(l.target) && ~Ix.indexOf(l.attributeName))
        if (l.attributeName === "class" && gb(l.target)) {
          const {
            prefix: s,
            iconName: u
          } = yr(wa(l.target));
          l.target.setAttribute(ba, s || o), u && l.target.setAttribute(va, u);
        } else yb(l.target) && n(l.target);
    });
  }), gt && Jn.observe(i, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function wb() {
  Jn && Jn.disconnect();
}
function Eb(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, i) => {
    const a = i.split(":"), o = a[0], l = a.slice(1);
    return o && l.length > 0 && (r[o] = l.join(":").trim()), r;
  }, {})), n;
}
function Cb(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let i = yr(wa(e));
  return i.prefix || (i.prefix = kt()), t && n && (i.prefix = t, i.iconName = n), i.iconName && i.prefix || (i.prefix && r.length > 0 && (i.iconName = Kx(i.prefix, e.innerText) || Sa(i.prefix, Ei(e.innerText))), !i.iconName && W.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = e.firstChild.data)), i;
}
function Sb(e) {
  const t = Jt(e.attributes).reduce((i, a) => (i.name !== "class" && i.name !== "style" && (i[a.name] = a.value), i), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return W.autoA11y && (n ? t["aria-labelledby"] = "".concat(W.replacementClass, "-title-").concat(r || xn()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function Tb() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: rt,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function cl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: i
  } = Cb(e), a = Sb(e), o = Si("parseNodeAttributes", {}, e);
  let l = t.styleParser ? Eb(e) : [];
  return I({
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: rt,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: i,
      styles: l,
      attributes: a
    }
  }, o);
}
const {
  styles: Ab
} = it;
function oc(e) {
  const t = W.autoReplaceSvg === "nest" ? cl(e, {
    styleParser: !1
  }) : cl(e);
  return ~t.extra.classes.indexOf($u) ? wt("generateLayersText", e, t) : wt("generateSvgReplacementMutation", e, t);
}
function Ob() {
  return [...sx, ...yi];
}
function fl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!gt) return Promise.resolve();
  const n = ke.documentElement.classList, r = (c) => n.add("".concat(Jo, "-").concat(c)), i = (c) => n.remove("".concat(Jo, "-").concat(c)), a = W.autoFetchSvg ? Ob() : ju.concat(Object.keys(Ab));
  a.includes("fa") || a.push("fa");
  const o = [".".concat($u, ":not([").concat(Nt, "])")].concat(a.map((c) => ".".concat(c, ":not([").concat(Nt, "])"))).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  let l = [];
  try {
    l = Jt(e.querySelectorAll(o));
  } catch {
  }
  if (l.length > 0)
    r("pending"), i("complete");
  else
    return Promise.resolve();
  const s = Aa.begin("onTree"), u = l.reduce((c, f) => {
    try {
      const d = oc(f);
      d && c.push(d);
    } catch (d) {
      Mu || d.name === "MissingIcon" && console.error(d);
    }
    return c;
  }, []);
  return new Promise((c, f) => {
    Promise.all(u).then((d) => {
      ic(d, () => {
        r("active"), r("complete"), i("pending"), typeof t == "function" && t(), s(), c();
      });
    }).catch((d) => {
      s(), f(d);
    });
  });
}
function Nb(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  oc(e).then((n) => {
    n && ic([n], t);
  });
}
function Ib(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : Ti(t || {});
    let {
      mask: i
    } = n;
    return i && (i = (i || {}).icon ? i : Ti(i || {})), e(r, I(I({}, n), {}, {
      mask: i
    }));
  };
}
const Pb = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = rt,
    symbol: r = !1,
    mask: i = null,
    maskId: a = null,
    title: o = null,
    titleId: l = null,
    classes: s = [],
    attributes: u = {},
    styles: c = {}
  } = t;
  if (!e) return;
  const {
    prefix: f,
    iconName: d,
    icon: p
  } = e;
  return xr(I({
    type: "icon"
  }, e), () => (It("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), W.autoA11y && (o ? u["aria-labelledby"] = "".concat(W.replacementClass, "-title-").concat(l || xn()) : (u["aria-hidden"] = "true", u.focusable = "false")), Ta({
    icons: {
      main: Ai(p),
      mask: i ? Ai(i.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: f,
    iconName: d,
    transform: I(I({}, rt), n),
    symbol: r,
    title: o,
    maskId: a,
    titleId: l,
    extra: {
      attributes: u,
      styles: c,
      classes: s
    }
  })));
};
var Rb = {
  mixout() {
    return {
      icon: Ib(Pb)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = fl, e.nodeCallback = Nb, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = ke,
        callback: r = () => {
        }
      } = t;
      return fl(n, r);
    }, e.generateSvgReplacementMutation = function(t, n) {
      const {
        iconName: r,
        title: i,
        titleId: a,
        prefix: o,
        transform: l,
        symbol: s,
        mask: u,
        maskId: c,
        extra: f
      } = n;
      return new Promise((d, p) => {
        Promise.all([Oi(r, o), u.iconName ? Oi(u.iconName, u.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((g) => {
          let [v, k] = g;
          d([t, Ta({
            icons: {
              main: v,
              mask: k
            },
            prefix: o,
            iconName: r,
            transform: l,
            symbol: s,
            maskId: c,
            title: i,
            titleId: a,
            extra: f,
            watchable: !0
          })]);
        }).catch(p);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: n,
        attributes: r,
        main: i,
        transform: a,
        styles: o
      } = t;
      const l = mr(o);
      l.length > 0 && (r.style = l);
      let s;
      return Ea(a) && (s = wt("generateAbstractTransformGrouping", {
        main: i,
        transform: a,
        containerWidth: i.width,
        iconWidth: i.width
      })), n.push(s || i.icon), {
        children: n,
        attributes: r
      };
    };
  }
}, jb = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return xr({
          type: "layer"
        }, () => {
          It("beforeDOMElementCreation", {
            assembler: e,
            params: t
          });
          let r = [];
          return e((i) => {
            Array.isArray(i) ? i.map((a) => {
              r = r.concat(a.abstract);
            }) : r = r.concat(i.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(W.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: r
          }];
        });
      }
    };
  }
}, _b = {
  mixout() {
    return {
      counter(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: n = null,
          classes: r = [],
          attributes: i = {},
          styles: a = {}
        } = t;
        return xr({
          type: "counter",
          content: e
        }, () => (It("beforeDOMElementCreation", {
          content: e,
          params: t
        }), db({
          content: e.toString(),
          title: n,
          extra: {
            attributes: i,
            styles: a,
            classes: ["".concat(W.cssPrefix, "-layers-counter"), ...r]
          }
        })));
      }
    };
  }
}, Fb = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = rt,
          title: r = null,
          classes: i = [],
          attributes: a = {},
          styles: o = {}
        } = t;
        return xr({
          type: "text",
          content: e
        }, () => (It("beforeDOMElementCreation", {
          content: e,
          params: t
        }), al({
          content: e,
          transform: I(I({}, rt), n),
          title: r,
          extra: {
            attributes: a,
            styles: o,
            classes: ["".concat(W.cssPrefix, "-layers-text"), ...i]
          }
        })));
      }
    };
  },
  provides(e) {
    e.generateLayersText = function(t, n) {
      const {
        title: r,
        transform: i,
        extra: a
      } = n;
      let o = null, l = null;
      if (Pu) {
        const s = parseInt(getComputedStyle(t).fontSize, 10), u = t.getBoundingClientRect();
        o = u.width / s, l = u.height / s;
      }
      return W.autoA11y && !r && (a.attributes["aria-hidden"] = "true"), Promise.resolve([t, al({
        content: t.innerHTML,
        width: o,
        height: l,
        transform: i,
        title: r,
        extra: a,
        watchable: !0
      })]);
    };
  }
};
const Lb = new RegExp('"', "ug"), dl = [1105920, 1112319], pl = I(I(I(I({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), ax), wx), mx), Pi = Object.keys(pl).reduce((e, t) => (e[t.toLowerCase()] = pl[t], e), {}), Db = Object.keys(Pi).reduce((e, t) => {
  const n = Pi[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function Mb(e) {
  const t = e.replace(Lb, ""), n = Vx(t, 0), r = n >= dl[0] && n <= dl[1], i = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: Ei(i ? t[0] : t),
    isSecondary: r || i
  };
}
function zb(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), i = isNaN(r) ? "normal" : r;
  return (Pi[n] || {})[i] || Db[n];
}
function hl(e, t) {
  const n = "".concat(Ex).concat(t.replace(":", "-"));
  return new Promise((r, i) => {
    if (e.getAttribute(n) !== null)
      return r();
    const o = Jt(e.children).filter((d) => d.getAttribute(bi) === t)[0], l = vt.getComputedStyle(e, t), s = l.getPropertyValue("font-family"), u = s.match(Ox), c = l.getPropertyValue("font-weight"), f = l.getPropertyValue("content");
    if (o && !u)
      return e.removeChild(o), r();
    if (u && f !== "none" && f !== "") {
      const d = l.getPropertyValue("content");
      let p = zb(s, c);
      const {
        value: g,
        isSecondary: v
      } = Mb(d), k = u[0].startsWith("FontAwesome");
      let b = Sa(p, g), A = b;
      if (k) {
        const E = Xx(g);
        E.iconName && E.prefix && (b = E.iconName, p = E.prefix);
      }
      if (b && !v && (!o || o.getAttribute(ba) !== p || o.getAttribute(va) !== A)) {
        e.setAttribute(n, A), o && e.removeChild(o);
        const E = Tb(), {
          extra: N
        } = E;
        N.attributes[bi] = t, Oi(b, p).then((S) => {
          const w = Ta(I(I({}, E), {}, {
            icons: {
              main: S,
              mask: ec()
            },
            prefix: p,
            iconName: A,
            extra: N,
            watchable: !0
          })), M = ke.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(M, e.firstChild) : e.appendChild(M), M.outerHTML = w.map((Q) => An(Q)).join(`
`), e.removeAttribute(n), r();
        }).catch(i);
      } else
        r();
    } else
      r();
  });
}
function $b(e) {
  return Promise.all([hl(e, "::before"), hl(e, "::after")]);
}
function Bb(e) {
  return e.parentNode !== document.head && !~Sx.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(bi) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function ml(e) {
  if (gt)
    return new Promise((t, n) => {
      const r = Jt(e.querySelectorAll("*")).filter(Bb).map($b), i = Aa.begin("searchPseudoElements");
      ac(), Promise.all(r).then(() => {
        i(), Ii(), t();
      }).catch(() => {
        i(), Ii(), n();
      });
    });
}
var Ub = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = ml, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = ke
      } = t;
      W.searchPseudoElements && ml(n);
    };
  }
};
let gl = !1;
var Hb = {
  mixout() {
    return {
      dom: {
        unwatch() {
          ac(), gl = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        ul(Si("mutationObserverCallbacks", {}));
      },
      noAuto() {
        wb();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        gl ? Ii() : ul(Si("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const yl = (e) => {
  let t = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce((n, r) => {
    const i = r.toLowerCase().split("-"), a = i[0];
    let o = i.slice(1).join("-");
    if (a && o === "h")
      return n.flipX = !0, n;
    if (a && o === "v")
      return n.flipY = !0, n;
    if (o = parseFloat(o), isNaN(o))
      return n;
    switch (a) {
      case "grow":
        n.size = n.size + o;
        break;
      case "shrink":
        n.size = n.size - o;
        break;
      case "left":
        n.x = n.x - o;
        break;
      case "right":
        n.x = n.x + o;
        break;
      case "up":
        n.y = n.y - o;
        break;
      case "down":
        n.y = n.y + o;
        break;
      case "rotate":
        n.rotate = n.rotate + o;
        break;
    }
    return n;
  }, t);
};
var Vb = {
  mixout() {
    return {
      parse: {
        transform: (e) => yl(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = yl(n)), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractTransformGrouping = function(t) {
      let {
        main: n,
        transform: r,
        containerWidth: i,
        iconWidth: a
      } = t;
      const o = {
        transform: "translate(".concat(i / 2, " 256)")
      }, l = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), s = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), u = "rotate(".concat(r.rotate, " 0 0)"), c = {
        transform: "".concat(l, " ").concat(s, " ").concat(u)
      }, f = {
        transform: "translate(".concat(a / 2 * -1, " -256)")
      }, d = {
        outer: o,
        inner: c,
        path: f
      };
      return {
        tag: "g",
        attributes: I({}, d.outer),
        children: [{
          tag: "g",
          attributes: I({}, d.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: I(I({}, n.icon.attributes), d.path)
          }]
        }]
      };
    };
  }
};
const Zr = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function xl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function Wb(e) {
  return e.tag === "g" ? e.children : [e];
}
var qb = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? yr(n.split(" ").map((i) => i.trim())) : ec();
        return r.prefix || (r.prefix = kt()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractMask = function(t) {
      let {
        children: n,
        attributes: r,
        main: i,
        mask: a,
        maskId: o,
        transform: l
      } = t;
      const {
        width: s,
        icon: u
      } = i, {
        width: c,
        icon: f
      } = a, d = Mx({
        transform: l,
        containerWidth: c,
        iconWidth: s
      }), p = {
        tag: "rect",
        attributes: I(I({}, Zr), {}, {
          fill: "white"
        })
      }, g = u.children ? {
        children: u.children.map(xl)
      } : {}, v = {
        tag: "g",
        attributes: I({}, d.inner),
        children: [xl(I({
          tag: u.tag,
          attributes: I(I({}, u.attributes), d.path)
        }, g))]
      }, k = {
        tag: "g",
        attributes: I({}, d.outer),
        children: [v]
      }, b = "mask-".concat(o || xn()), A = "clip-".concat(o || xn()), E = {
        tag: "mask",
        attributes: I(I({}, Zr), {}, {
          id: b,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [p, k]
      }, N = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: A
          },
          children: Wb(f)
        }, E]
      };
      return n.push(N, {
        tag: "rect",
        attributes: I({
          fill: "currentColor",
          "clip-path": "url(#".concat(A, ")"),
          mask: "url(#".concat(b, ")")
        }, Zr)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, Yb = {
  provides(e) {
    let t = !1;
    vt.matchMedia && (t = vt.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const n = [], r = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: I(I({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const a = I(I({}, i), {}, {
        attributeName: "opacity"
      }), o = {
        tag: "circle",
        attributes: I(I({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || o.children.push({
        tag: "animate",
        attributes: I(I({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: I(I({}, a), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(o), n.push({
        tag: "path",
        attributes: I(I({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: I(I({}, a), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || n.push({
        tag: "path",
        attributes: I(I({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: I(I({}, a), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: n
      };
    };
  }
}, Gb = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, Kb = [Bx, Rb, jb, _b, Fb, Ub, Hb, Vb, qb, Yb, Gb];
ab(Kb, {
  mixoutsTo: Ge
});
Ge.noAuto;
Ge.config;
Ge.library;
Ge.dom;
const Ri = Ge.parse;
Ge.findIconDefinition;
Ge.toHtml;
const Xb = Ge.icon;
Ge.layer;
Ge.text;
Ge.counter;
function bl(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function nt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bl(Object(n), !0).forEach(function(r) {
      Ht(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bl(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Zn(e) {
  "@babel/helpers - typeof";
  return Zn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zn(e);
}
function Ht(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Qb(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Jb(e, t) {
  if (e == null) return {};
  var n = Qb(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function ji(e) {
  return Zb(e) || ev(e) || tv(e) || nv();
}
function Zb(e) {
  if (Array.isArray(e)) return _i(e);
}
function ev(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function tv(e, t) {
  if (e) {
    if (typeof e == "string") return _i(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _i(e, t);
  }
}
function _i(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function nv() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rv(e) {
  var t, n = e.beat, r = e.fade, i = e.beatFade, a = e.bounce, o = e.shake, l = e.flash, s = e.spin, u = e.spinPulse, c = e.spinReverse, f = e.pulse, d = e.fixedWidth, p = e.inverse, g = e.border, v = e.listItem, k = e.flip, b = e.size, A = e.rotation, E = e.pull, N = (t = {
    "fa-beat": n,
    "fa-fade": r,
    "fa-beat-fade": i,
    "fa-bounce": a,
    "fa-shake": o,
    "fa-flash": l,
    "fa-spin": s,
    "fa-spin-reverse": c,
    "fa-spin-pulse": u,
    "fa-pulse": f,
    "fa-fw": d,
    "fa-inverse": p,
    "fa-border": g,
    "fa-li": v,
    "fa-flip": k === !0,
    "fa-flip-horizontal": k === "horizontal" || k === "both",
    "fa-flip-vertical": k === "vertical" || k === "both"
  }, Ht(t, "fa-".concat(b), typeof b < "u" && b !== null), Ht(t, "fa-rotate-".concat(A), typeof A < "u" && A !== null && A !== 0), Ht(t, "fa-pull-".concat(E), typeof E < "u" && E !== null), Ht(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(N).map(function(S) {
    return N[S] ? S : null;
  }).filter(function(S) {
    return S;
  });
}
function iv(e) {
  return e = e - 0, e === e;
}
function lc(e) {
  return iv(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var av = ["style"];
function ov(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function lv(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), i = lc(n.slice(0, r)), a = n.slice(r + 1).trim();
    return i.startsWith("webkit") ? t[ov(i)] = a : t[i] = a, t;
  }, {});
}
function sc(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(s) {
    return sc(e, s);
  }), i = Object.keys(t.attributes || {}).reduce(function(s, u) {
    var c = t.attributes[u];
    switch (u) {
      case "class":
        s.attrs.className = c, delete t.attributes.class;
        break;
      case "style":
        s.attrs.style = lv(c);
        break;
      default:
        u.indexOf("aria-") === 0 || u.indexOf("data-") === 0 ? s.attrs[u.toLowerCase()] = c : s.attrs[lc(u)] = c;
    }
    return s;
  }, {
    attrs: {}
  }), a = n.style, o = a === void 0 ? {} : a, l = Jb(n, av);
  return i.attrs.style = nt(nt({}, i.attrs.style), o), e.apply(void 0, [t.tag, nt(nt({}, i.attrs), l)].concat(ji(r)));
}
var uc = !1;
try {
  uc = process.env.NODE_ENV === "production";
} catch {
}
function sv() {
  if (!uc && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function vl(e) {
  if (e && Zn(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Ri.icon)
    return Ri.icon(e);
  if (e === null)
    return null;
  if (e && Zn(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
function ei(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? Ht({}, e, t) : {};
}
var kl = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1
}, er = /* @__PURE__ */ Ie.forwardRef(function(e, t) {
  var n = nt(nt({}, kl), e), r = n.icon, i = n.mask, a = n.symbol, o = n.className, l = n.title, s = n.titleId, u = n.maskId, c = vl(r), f = ei("classes", [].concat(ji(rv(n)), ji((o || "").split(" ")))), d = ei("transform", typeof n.transform == "string" ? Ri.transform(n.transform) : n.transform), p = ei("mask", vl(i)), g = Xb(c, nt(nt(nt(nt({}, f), d), p), {}, {
    symbol: a,
    title: l,
    titleId: s,
    maskId: u
  }));
  if (!g)
    return sv("Could not find icon", c), null;
  var v = g.abstract, k = {
    ref: t
  };
  return Object.keys(n).forEach(function(b) {
    kl.hasOwnProperty(b) || (k[b] = n[b]);
  }), uv(v[0], k);
});
er.displayName = "FontAwesomeIcon";
er.propTypes = {
  beat: j.bool,
  border: j.bool,
  beatFade: j.bool,
  bounce: j.bool,
  className: j.string,
  fade: j.bool,
  flash: j.bool,
  mask: j.oneOfType([j.object, j.array, j.string]),
  maskId: j.string,
  fixedWidth: j.bool,
  inverse: j.bool,
  flip: j.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: j.oneOfType([j.object, j.array, j.string]),
  listItem: j.bool,
  pull: j.oneOf(["right", "left"]),
  pulse: j.bool,
  rotation: j.oneOf([0, 90, 180, 270]),
  shake: j.bool,
  size: j.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: j.bool,
  spinPulse: j.bool,
  spinReverse: j.bool,
  symbol: j.oneOfType([j.bool, j.string]),
  title: j.string,
  titleId: j.string,
  transform: j.oneOfType([j.string, j.object]),
  swapOpacity: j.bool
};
var uv = sc.bind(null, Ie.createElement);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const cv = {
  prefix: "fas",
  iconName: "sun",
  icon: [512, 512, [9728], "f185", "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]
}, fv = {
  prefix: "fas",
  iconName: "moon",
  icon: [384, 512, [127769, 9214], "f186", "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]
}, dv = (e) => typeof window > "u" ? e || {} : e || window.history, Mv = ({ router: e }) => {
  const [t, n] = Qe("light"), [r, i] = Qe(!1), [a, o] = Qe(""), l = dv(e);
  _e(() => {
    if (typeof window < "u") {
      const c = localStorage.getItem("theme") || "light";
      n(c), i(!0);
    }
  }, []), _e(() => {
    r && typeof window < "u" && (document.documentElement.setAttribute("data-theme", t), localStorage.setItem("theme", t));
  }, [t, r]);
  const s = () => {
    n((c) => c === "light" ? "dark" : "light");
  }, u = (c) => {
    c.preventDefault(), a.trim() && (l && typeof l.push == "function" ? l.push(`/search/${encodeURIComponent(a)}`) : typeof window < "u" && (window.location.href = `/search/${encodeURIComponent(a)}`));
  };
  return r ? /* @__PURE__ */ y.jsx(jn, { expand: "lg", className: "footer-header-color", children: /* @__PURE__ */ y.jsxs($e, { fluid: !0, children: [
    /* @__PURE__ */ y.jsxs("div", { className: "dark-switch", children: [
      /* @__PURE__ */ y.jsx(
        "input",
        {
          type: "checkbox",
          className: "checkbox",
          id: "checkbox",
          onChange: s,
          checked: t === "dark"
        }
      ),
      /* @__PURE__ */ y.jsxs("label", { htmlFor: "checkbox", className: "checkbox-label", children: [
        /* @__PURE__ */ y.jsx(er, { icon: fv, style: { marginRight: "10px" } }),
        /* @__PURE__ */ y.jsx(er, { icon: cv }),
        /* @__PURE__ */ y.jsx("span", { className: "ball" })
      ] })
    ] }),
    /* @__PURE__ */ y.jsx(jn.Brand, { className: "navbar-brand bold", href: "/", children: "Abhi" }),
    /* @__PURE__ */ y.jsx(jn.Toggle, { "aria-controls": "navbarScroll" }),
    /* @__PURE__ */ y.jsxs(jn.Collapse, { id: "navbarScroll", children: [
      /* @__PURE__ */ y.jsxs(Lt, { className: "me-auto my-2 my-lg-0", style: { maxHeight: "150px" }, navbarScroll: !0, children: [
        /* @__PURE__ */ y.jsx(Lt.Link, { className: "nav-link bold-links", href: "/about", children: "About" }),
        /* @__PURE__ */ y.jsx(Lt.Link, { className: "nav-link bold-links", href: "/blog/section/tech", children: "Tech" }),
        /* @__PURE__ */ y.jsx(Lt.Link, { className: "nav-link bold-links", href: "/blog/section/project", children: "Project" }),
        /* @__PURE__ */ y.jsx(Lt.Link, { className: "nav-link bold-links", href: "/blog/section/life", children: "Life" }),
        /* @__PURE__ */ y.jsx(Lt.Link, { className: "nav-link bold-links", href: "#contact", children: "Contact" })
      ] }),
      /* @__PURE__ */ y.jsxs(Ke, { className: "d-flex", onSubmit: u, children: [
        /* @__PURE__ */ y.jsx(
          Ke.Control,
          {
            type: "search",
            placeholder: "Search",
            className: "me-2 custom-border form-control custom-placeholder",
            "aria-label": "Search",
            value: a,
            onChange: (c) => o(c.target.value)
          }
        ),
        /* @__PURE__ */ y.jsx(kn, { className: "button-custom-color", type: "submit", children: "Search" })
      ] })
    ] })
  ] }) }) : null;
}, zv = ({ description: e }) => /* @__PURE__ */ y.jsx($e, { children: /* @__PURE__ */ y.jsx(Te, { className: "rounded background-color-body mt-3 p-2", children: /* @__PURE__ */ y.jsx(ye, { children: /* @__PURE__ */ y.jsx(
  "p",
  {
    className: "mb-2 mt-2 font-color-class bio-desc justify-content",
    dangerouslySetInnerHTML: { __html: e }
  }
) }) }) });
var cc = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, wl = Ie.createContext && /* @__PURE__ */ Ie.createContext(cc), pv = ["attr", "size", "title"];
function hv(e, t) {
  if (e == null) return {};
  var n = mv(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function mv(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function tr() {
  return tr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, tr.apply(this, arguments);
}
function El(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function nr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? El(Object(n), !0).forEach(function(r) {
      gv(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : El(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function gv(e, t, n) {
  return t = yv(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function yv(e) {
  var t = xv(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function xv(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function fc(e) {
  return e && e.map((t, n) => /* @__PURE__ */ Ie.createElement(t.tag, nr({
    key: n
  }, t.attr), fc(t.child)));
}
function Rt(e) {
  return (t) => /* @__PURE__ */ Ie.createElement(bv, tr({
    attr: nr({}, e.attr)
  }, t), fc(e.child));
}
function bv(e) {
  var t = (n) => {
    var {
      attr: r,
      size: i,
      title: a
    } = e, o = hv(e, pv), l = i || n.size || "1em", s;
    return n.className && (s = n.className), e.className && (s = (s ? s + " " : "") + e.className), /* @__PURE__ */ Ie.createElement("svg", tr({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, r, o, {
      className: s,
      style: nr(nr({
        color: e.color || n.color
      }, n.style), e.style),
      height: l,
      width: l,
      xmlns: "http://www.w3.org/2000/svg"
    }), a && /* @__PURE__ */ Ie.createElement("title", null, a), e.children);
  };
  return wl !== void 0 ? /* @__PURE__ */ Ie.createElement(wl.Consumer, null, (n) => t(n)) : t(cc);
}
function vv(e) {
  return Rt({ attr: { viewBox: "0 0 496 512" }, child: [{ tag: "path", attr: { d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" }, child: [] }] })(e);
}
function kv(e) {
  return Rt({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M105.2 24.9c-3.1-8.9-15.7-8.9-18.9 0L29.8 199.7h132c-.1 0-56.6-174.8-56.6-174.8zM.9 287.7c-2.6 8 .3 16.9 7.1 22l247.9 184-226.2-294zm160.8-88l94.3 294 94.3-294zm349.4 88l-28.8-88-226.3 294 247.9-184c6.9-5.1 9.7-14 7.2-22zM425.7 24.9c-3.1-8.9-15.7-8.9-18.9 0l-56.6 174.8h132z" }, child: [] }] })(e);
}
function wv(e) {
  return Rt({ attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M304.2 501.5L158.4 320.3 298.2 185c2.6-2.7 1.7-10.5-5.3-10.5h-69.2c-3.5 0-7 1.8-10.5 5.3L80.9 313.5V7.5q0-7.5-7.5-7.5H21.5Q14 0 14 7.5v497q0 7.5 7.5 7.5h51.9q7.5 0 7.5-7.5v-109l30.8-29.3 110.5 140.6c3 3.5 6.5 5.3 10.5 5.3h66.9q5.25 0 6-3z" }, child: [] }] })(e);
}
function Ev(e) {
  return Rt({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" }, child: [] }] })(e);
}
function Cv(e) {
  return Rt({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M0 32v448h448V32H0zm372.2 106.1l-24 23c-2.1 1.6-3.1 4.2-2.7 6.7v169.3c-.4 2.6.6 5.2 2.7 6.7l23.5 23v5.1h-118V367l24.3-23.6c2.4-2.4 2.4-3.1 2.4-6.7V199.8l-67.6 171.6h-9.1L125 199.8v115c-.7 4.8 1 9.7 4.4 13.2l31.6 38.3v5.1H71.2v-5.1l31.6-38.3c3.4-3.5 4.9-8.4 4.1-13.2v-133c.4-3.7-1-7.3-3.8-9.8L75 138.1V133h87.3l67.4 148L289 133.1h83.2v5z" }, child: [] }] })(e);
}
function Sv(e) {
  return Rt({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" }, child: [] }] })(e);
}
function Tv(e) {
  return Rt({ attr: { role: "img", viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" }, child: [] }] })(e);
}
const $v = (e) => {
  const t = [
    { link: e.github_link, icon: /* @__PURE__ */ y.jsx(vv, { className: "social-icon icon-custom-color" }) },
    { link: e.linkedin_link, icon: /* @__PURE__ */ y.jsx(Ev, { className: "social-icon icon-custom-color" }) },
    { link: e.twitter_link, icon: /* @__PURE__ */ y.jsx(Sv, { className: "social-icon icon-custom-color" }) },
    { link: e.leetcode_link, icon: /* @__PURE__ */ y.jsx(Tv, { className: "social-icon icon-custom-color" }) },
    { link: e.gitlab_link, icon: /* @__PURE__ */ y.jsx(kv, { className: "social-icon icon-custom-color" }) },
    { link: e.kaggle_link, icon: /* @__PURE__ */ y.jsx(wv, { className: "social-icon icon-custom-color" }) },
    { link: e.medium_link, icon: /* @__PURE__ */ y.jsx(Cv, { className: "social-icon icon-custom-color" }) }
  ];
  return /* @__PURE__ */ y.jsx($e, { children: /* @__PURE__ */ y.jsx(Te, { className: "rounded background-color-body mt-3 p-3 text-center d-flex justify-content-center", children: /* @__PURE__ */ y.jsx(ye, { className: "col-12 d-flex justify-content-center flex-wrap", children: t.map(
    ({ link: n, icon: r }, i) => n && /* @__PURE__ */ y.jsx(
      "a",
      {
        href: n,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "mx-2",
        children: r
      },
      i
    )
  ) }) }) });
}, Bv = () => /* @__PURE__ */ y.jsx($e, { children: /* @__PURE__ */ y.jsx(Te, { className: "mt-3" }) }), Av = ({ card_para: e, img_src: t, card_url: n, card_title: r }) => /* @__PURE__ */ y.jsxs(an, { className: "", children: [
  /* @__PURE__ */ y.jsx(an.Img, { className: "card-img-container p-3", variant: "top", src: t }),
  /* @__PURE__ */ y.jsxs(an.Body, { children: [
    /* @__PURE__ */ y.jsx("div", { className: "font-color-class text-center card-title", children: /* @__PURE__ */ y.jsx(an.Title, { children: r }) }),
    /* @__PURE__ */ y.jsx(an.Text, { className: "card-text font-color-class justify-content", children: e }),
    /* @__PURE__ */ y.jsx("div", { className: "text-center", children: /* @__PURE__ */ y.jsx(kn, { className: "button-custom-color", children: /* @__PURE__ */ y.jsx("a", { href: n, style: { color: "inherit", textDecoration: "none" }, children: "Explore" }) }) })
  ] })
] }), Uv = ({ cardData: e }) => {
  const [t, n] = Qe(1), r = 9, i = Math.ceil(e.length / r), a = e.slice((t - 1) * r, t * r), o = (l) => {
    l >= 1 && l <= i && n(l);
  };
  return /* @__PURE__ */ y.jsxs($e, { className: "p-0", children: [
    /* @__PURE__ */ y.jsx(Te, { className: "", children: a.map((l, s) => /* @__PURE__ */ y.jsx(ye, { xs: 12, sm: 12, md: 4, className: "mt-3", children: /* @__PURE__ */ y.jsx(
      Av,
      {
        card_title: l.card_title,
        card_para: l.card_para,
        img_src: l.img_src,
        card_url: l.card_url
      }
    ) }, s)) }),
    i > 1 && /* @__PURE__ */ y.jsx(Te, { className: "rounded background-color-body mt-3 p-3 justify-content-center m-0", children: /* @__PURE__ */ y.jsx(ye, { className: "text-center", children: /* @__PURE__ */ y.jsxs(Dt, { size: "sm", className: "justify-content-center", children: [
      /* @__PURE__ */ y.jsx(Dt.First, { onClick: () => o(1), disabled: t === 1 }),
      /* @__PURE__ */ y.jsx(Dt.Prev, { onClick: () => o(t - 1), disabled: t === 1 }),
      [...Array(i)].map((l, s) => /* @__PURE__ */ y.jsx(
        Dt.Item,
        {
          active: s + 1 === t,
          onClick: () => o(s + 1),
          children: s + 1
        },
        s + 1
      )),
      /* @__PURE__ */ y.jsx(Dt.Next, { onClick: () => o(t + 1), disabled: t === i }),
      /* @__PURE__ */ y.jsx(Dt.Last, { onClick: () => o(i), disabled: t === i })
    ] }) }) })
  ] });
}, Hv = ({ image_link: e }) => /* @__PURE__ */ y.jsx($e, { className: "text-center", children: /* @__PURE__ */ y.jsxs(Te, { className: "text-center", children: [
  /* @__PURE__ */ y.jsx(ye, {}),
  /* @__PURE__ */ y.jsx(ye, { md: 6, children: /* @__PURE__ */ y.jsx("img", { src: e, className: "img-fluid mt-3 rounded-circle justify-content", alt: "ProfilePic" }) }),
  /* @__PURE__ */ y.jsx(ye, {})
] }) }), Vv = ({ button_text: e, link: t }) => {
  const n = (r) => {
    if (r.preventDefault(), t == null ? void 0 : t.match(/\.(jpg|jpeg|png|pdf|docx|txt)$/i)) {
      const a = document.createElement("a");
      a.href = t, a.setAttribute("download", ""), document.body.appendChild(a), a.click(), document.body.removeChild(a);
    } else
      window.open(t, "_blank");
  };
  return /* @__PURE__ */ y.jsx($e, { children: t && /* @__PURE__ */ y.jsx(Te, { className: "rounded background-color-body mt-3 p-2", children: /* @__PURE__ */ y.jsx(ye, { className: "text-center", children: /* @__PURE__ */ y.jsx(kn, { className: "button-custom-color m-1", onClick: n, children: e }) }) }) });
}, Wv = () => /* @__PURE__ */ y.jsx($e, { className: "m-0 p-0 text-center", children: /* @__PURE__ */ y.jsx(Te, { className: "rounded background-color-body font-color-class mt-3 m-0", children: /* @__PURE__ */ y.jsx(ye, { className: "text-center p-2 mt-3 mb-3", children: /* @__PURE__ */ y.jsxs("h1", { className: "not-found-title m-2", children: [
  "OOPS! SEARCH",
  /* @__PURE__ */ y.jsx("br", {}),
  "Results Not Found"
] }) }) }) });
export {
  Hv as AboutPic,
  Rv as ArticleImage,
  Vv as ButtonBar,
  Uv as CardsPaignation,
  jv as CustomBody,
  _v as Footer,
  Fv as HeadingBar,
  Lv as MarkDown,
  Dv as More,
  Mv as NavBar,
  Wv as NotFound,
  zv as Para,
  $v as SocialMediaLinks,
  Bv as SpaceBlock
};
