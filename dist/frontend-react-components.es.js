import * as $ from "react";
import ze, { useRef as Ne, useState as Je, useCallback as Se, useContext as Te, useMemo as Ye, useEffect as _e, useLayoutEffect as Cl, useReducer as hu, createContext as mu, cloneElement as _i, forwardRef as pu, useImperativeHandle as gu } from "react";
import $t from "react-dom";
function vn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var On = { exports: {} }, tn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oa;
function yu() {
  if (Oa) return tn;
  Oa = 1;
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
var ja;
function xu() {
  return ja || (ja = 1, process.env.NODE_ENV !== "production" && function() {
    function e(x) {
      if (x == null) return null;
      if (typeof x == "function")
        return x.$$typeof === de ? null : x.displayName || x.name || null;
      if (typeof x == "string") return x;
      switch (x) {
        case w:
          return "Fragment";
        case S:
          return "Portal";
        case Q:
          return "Profiler";
        case F:
          return "StrictMode";
        case B:
          return "Suspense";
        case D:
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
          case L:
            var H = x.render;
            return x = x.displayName, x || (x = H.displayName || H.name || "", x = x !== "" ? "ForwardRef(" + x + ")" : "ForwardRef"), x;
          case _:
            return H = x.displayName || null, H !== null ? H : e(x.type) || "Memo";
          case q:
            H = x._payload, x = x._init;
            try {
              return e(x(H));
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
        var H = !1;
      } catch {
        H = !0;
      }
      if (H) {
        H = console;
        var V = H.error, pe = typeof Symbol == "function" && Symbol.toStringTag && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return V.call(
          H,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          pe
        ), t(x);
      }
    }
    function r() {
    }
    function i() {
      if (M === 0) {
        X = console.log, U = console.info, J = console.warn, ee = console.error, re = console.group, te = console.groupCollapsed, Ce = console.groupEnd;
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
      M++;
    }
    function a() {
      if (M--, M === 0) {
        var x = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: I({}, x, { value: X }),
          info: I({}, x, { value: U }),
          warn: I({}, x, { value: J }),
          error: I({}, x, { value: ee }),
          group: I({}, x, { value: re }),
          groupCollapsed: I({}, x, { value: te }),
          groupEnd: I({}, x, { value: Ce })
        });
      }
      0 > M && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function o(x) {
      if (R === void 0)
        try {
          throw Error();
        } catch (V) {
          var H = V.stack.trim().match(/\n( *(at )?)/);
          R = H && H[1] || "", Oe = -1 < V.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < V.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + R + x + Oe;
    }
    function l(x, H) {
      if (!x || De) return "";
      var V = ge.get(x);
      if (V !== void 0) return V;
      De = !0, V = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var pe = null;
      pe = we.H, we.H = null, i();
      try {
        var Ie = {
          DetermineComponentFrameRoot: function() {
            try {
              if (H) {
                var Pe = function() {
                  throw Error();
                };
                if (Object.defineProperty(Pe.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Pe, []);
                  } catch (Be) {
                    var tt = Be;
                  }
                  Reflect.construct(x, [], Pe);
                } else {
                  try {
                    Pe.call();
                  } catch (Be) {
                    tt = Be;
                  }
                  x.call(Pe.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (Be) {
                  tt = Be;
                }
                (Pe = x()) && typeof Pe.catch == "function" && Pe.catch(function() {
                });
              }
            } catch (Be) {
              if (Be && tt && typeof Be.stack == "string")
                return [Be.stack, tt.stack];
            }
            return [null, null];
          }
        };
        Ie.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var T = Object.getOwnPropertyDescriptor(
          Ie.DetermineComponentFrameRoot,
          "name"
        );
        T && T.configurable && Object.defineProperty(
          Ie.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var N = Ie.DetermineComponentFrameRoot(), Y = N[0], oe = N[1];
        if (Y && oe) {
          var ie = Y.split(`
`), je = oe.split(`
`);
          for (N = T = 0; T < ie.length && !ie[T].includes(
            "DetermineComponentFrameRoot"
          ); )
            T++;
          for (; N < je.length && !je[N].includes(
            "DetermineComponentFrameRoot"
          ); )
            N++;
          if (T === ie.length || N === je.length)
            for (T = ie.length - 1, N = je.length - 1; 1 <= T && 0 <= N && ie[T] !== je[N]; )
              N--;
          for (; 1 <= T && 0 <= N; T--, N--)
            if (ie[T] !== je[N]) {
              if (T !== 1 || N !== 1)
                do
                  if (T--, N--, 0 > N || ie[T] !== je[N]) {
                    var Ue = `
` + ie[T].replace(
                      " at new ",
                      " at "
                    );
                    return x.displayName && Ue.includes("<anonymous>") && (Ue = Ue.replace("<anonymous>", x.displayName)), typeof x == "function" && ge.set(x, Ue), Ue;
                  }
                while (1 <= T && 0 <= N);
              break;
            }
        }
      } finally {
        De = !1, we.H = pe, a(), Error.prepareStackTrace = V;
      }
      return ie = (ie = x ? x.displayName || x.name : "") ? o(ie) : "", typeof x == "function" && ge.set(x, ie), ie;
    }
    function s(x) {
      if (x == null) return "";
      if (typeof x == "function") {
        var H = x.prototype;
        return l(
          x,
          !(!H || !H.isReactComponent)
        );
      }
      if (typeof x == "string") return o(x);
      switch (x) {
        case B:
          return o("Suspense");
        case D:
          return o("SuspenseList");
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case L:
            return x = l(x.render, !1), x;
          case _:
            return s(x.type);
          case q:
            H = x._payload, x = x._init;
            try {
              return s(x(H));
            } catch {
            }
        }
      return "";
    }
    function c() {
      var x = we.A;
      return x === null ? null : x.getOwner();
    }
    function u(x) {
      if (p.call(x, "key")) {
        var H = Object.getOwnPropertyDescriptor(x, "key").get;
        if (H && H.isReactWarning) return !1;
      }
      return x.key !== void 0;
    }
    function f(x, H) {
      function V() {
        lt || (lt = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          H
        ));
      }
      V.isReactWarning = !0, Object.defineProperty(x, "key", {
        get: V,
        configurable: !0
      });
    }
    function d() {
      var x = e(this.type);
      return Nn[x] || (Nn[x] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), x = this.props.ref, x !== void 0 ? x : null;
    }
    function h(x, H, V, pe, Ie, T) {
      return V = T.ref, x = {
        $$typeof: O,
        type: x,
        key: H,
        props: T,
        _owner: Ie
      }, (V !== void 0 ? V : null) !== null ? Object.defineProperty(x, "ref", {
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
    function y(x, H, V, pe, Ie, T) {
      if (typeof x == "string" || typeof x == "function" || x === w || x === Q || x === F || x === B || x === D || x === ae || typeof x == "object" && x !== null && (x.$$typeof === q || x.$$typeof === _ || x.$$typeof === C || x.$$typeof === ne || x.$$typeof === L || x.$$typeof === G || x.getModuleId !== void 0)) {
        var N = H.children;
        if (N !== void 0)
          if (pe)
            if (g(N)) {
              for (pe = 0; pe < N.length; pe++)
                v(N[pe], x);
              Object.freeze && Object.freeze(N);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else v(N, x);
      } else
        N = "", (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (N += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), x === null ? pe = "null" : g(x) ? pe = "array" : x !== void 0 && x.$$typeof === O ? (pe = "<" + (e(x.type) || "Unknown") + " />", N = " Did you accidentally export a JSX literal instead of a component?") : pe = typeof x, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          pe,
          N
        );
      if (p.call(H, "key")) {
        N = e(x);
        var Y = Object.keys(H).filter(function(ie) {
          return ie !== "key";
        });
        pe = 0 < Y.length ? "{key: someKey, " + Y.join(": ..., ") + ": ...}" : "{key: someKey}", Zt[N + pe] || (Y = 0 < Y.length ? "{" + Y.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          pe,
          N,
          Y,
          N
        ), Zt[N + pe] = !0);
      }
      if (N = null, V !== void 0 && (n(V), N = "" + V), u(H) && (n(H.key), N = "" + H.key), "key" in H) {
        V = {};
        for (var oe in H)
          oe !== "key" && (V[oe] = H[oe]);
      } else V = H;
      return N && f(
        V,
        typeof x == "function" ? x.displayName || x.name || "Unknown" : x
      ), h(x, N, T, Ie, c(), V);
    }
    function v(x, H) {
      if (typeof x == "object" && x && x.$$typeof !== St) {
        if (g(x))
          for (var V = 0; V < x.length; V++) {
            var pe = x[V];
            k(pe) && b(pe, H);
          }
        else if (k(x))
          x._store && (x._store.validated = 1);
        else if (x === null || typeof x != "object" ? V = null : (V = fe && x[fe] || x["@@iterator"], V = typeof V == "function" ? V : null), typeof V == "function" && V !== x.entries && (V = V.call(x), V !== x))
          for (; !(x = V.next()).done; )
            k(x.value) && b(x.value, H);
      }
    }
    function k(x) {
      return typeof x == "object" && x !== null && x.$$typeof === O;
    }
    function b(x, H) {
      if (x._store && !x._store.validated && x.key == null && (x._store.validated = 1, H = A(H), !en[H])) {
        en[H] = !0;
        var V = "";
        x && x._owner != null && x._owner !== c() && (V = null, typeof x._owner.tag == "number" ? V = e(x._owner.type) : typeof x._owner.name == "string" && (V = x._owner.name), V = " It was passed a child from " + V + ".");
        var pe = we.getCurrentStack;
        we.getCurrentStack = function() {
          var Ie = s(x.type);
          return pe && (Ie += pe() || ""), Ie;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          H,
          V
        ), we.getCurrentStack = pe;
      }
    }
    function A(x) {
      var H = "", V = c();
      return V && (V = e(V.type)) && (H = `

Check the render method of \`` + V + "`."), H || (x = e(x)) && (H = `

Check the top-level render call using <` + x + ">."), H;
    }
    var E = ze, O = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), F = Symbol.for("react.strict_mode"), Q = Symbol.for("react.profiler"), ne = Symbol.for("react.consumer"), C = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), D = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), ae = Symbol.for("react.offscreen"), fe = Symbol.iterator, de = Symbol.for("react.client.reference"), we = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, p = Object.prototype.hasOwnProperty, I = Object.assign, G = Symbol.for("react.client.reference"), g = Array.isArray, M = 0, X, U, J, ee, re, te, Ce;
    r.__reactDisabledLog = !0;
    var R, Oe, De = !1, ge = new (typeof WeakMap == "function" ? WeakMap : Map)(), St = Symbol.for("react.client.reference"), lt, Nn = {}, Zt = {}, en = {};
    nn.Fragment = w, nn.jsx = function(x, H, V, pe, Ie) {
      return y(x, H, V, !1, pe, Ie);
    }, nn.jsxs = function(x, H, V, pe, Ie) {
      return y(x, H, V, !0, pe, Ie);
    };
  }()), nn;
}
var za;
function bu() {
  return za || (za = 1, process.env.NODE_ENV === "production" ? On.exports = yu() : On.exports = xu()), On.exports;
}
var m = bu(), br = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Ia;
function vu() {
  return Ia || (Ia = 1, function(e) {
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
var ku = vu();
const Z = /* @__PURE__ */ vn(ku);
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
function Pa(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function wu(e) {
  var t = Eu(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function Eu(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Cu(e, t, n) {
  var r = Ne(e !== void 0), i = Je(t), a = i[0], o = i[1], l = e !== void 0, s = r.current;
  return r.current = l, !l && s && a !== t && o(t), [l ? e : a, Se(function(c) {
    for (var u = arguments.length, f = new Array(u > 1 ? u - 1 : 0), d = 1; d < u; d++)
      f[d - 1] = arguments[d];
    n && n.apply(void 0, [c].concat(f)), o(c);
  }, [n])];
}
function Tl(e, t) {
  return Object.keys(t).reduce(function(n, r) {
    var i, a = n, o = a[Pa(r)], l = a[r], s = Sl(a, [Pa(r), r].map(wu)), c = t[r], u = Cu(l, o, e[c]), f = u[0], d = u[1];
    return ti({}, s, (i = {}, i[r] = f, i[c] = d, i));
  }, e);
}
function ni(e, t) {
  return ni = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, ni(e, t);
}
function Su(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ni(e, t);
}
const Tu = ["xxl", "xl", "lg", "md", "sm", "xs"], Au = "xs", rr = /* @__PURE__ */ $.createContext({
  prefixes: {},
  breakpoints: Tu,
  minBreakpoint: Au
}), {
  Consumer: i6,
  Provider: a6
} = rr;
function se(e, t) {
  const {
    prefixes: n
  } = Te(rr);
  return e || n[t] || t;
}
function Al() {
  const {
    breakpoints: e
  } = Te(rr);
  return e;
}
function Nl() {
  const {
    minBreakpoint: e
  } = Te(rr);
  return e;
}
function Mi(e) {
  return e && e.ownerDocument || document;
}
function Nu(e) {
  var t = Mi(e);
  return t && t.defaultView || window;
}
function Ou(e, t) {
  return Nu(e).getComputedStyle(e, t);
}
var ju = /([A-Z])/g;
function zu(e) {
  return e.replace(ju, "-$1").toLowerCase();
}
var Iu = /^ms-/;
function jn(e) {
  return zu(e).replace(Iu, "-ms-");
}
var Pu = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function Ru(e) {
  return !!(e && Pu.test(e));
}
function ft(e, t) {
  var n = "", r = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(jn(t)) || Ou(e).getPropertyValue(jn(t));
  Object.keys(t).forEach(function(i) {
    var a = t[i];
    !a && a !== 0 ? e.style.removeProperty(jn(i)) : Ru(i) ? r += i + "(" + a + ") " : n += jn(i) + ": " + a + ";";
  }), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
var zn = { exports: {} }, In = { exports: {} }, ye = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ra;
function _u() {
  if (Ra) return ye;
  Ra = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, k = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
  function E(S) {
    if (typeof S == "object" && S !== null) {
      var w = S.$$typeof;
      switch (w) {
        case t:
          switch (S = S.type, S) {
            case s:
            case c:
            case r:
            case a:
            case i:
            case f:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case l:
                case u:
                case y:
                case h:
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
  function O(S) {
    return E(S) === c;
  }
  return ye.AsyncMode = s, ye.ConcurrentMode = c, ye.ContextConsumer = l, ye.ContextProvider = o, ye.Element = t, ye.ForwardRef = u, ye.Fragment = r, ye.Lazy = y, ye.Memo = h, ye.Portal = n, ye.Profiler = a, ye.StrictMode = i, ye.Suspense = f, ye.isAsyncMode = function(S) {
    return O(S) || E(S) === s;
  }, ye.isConcurrentMode = O, ye.isContextConsumer = function(S) {
    return E(S) === l;
  }, ye.isContextProvider = function(S) {
    return E(S) === o;
  }, ye.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === t;
  }, ye.isForwardRef = function(S) {
    return E(S) === u;
  }, ye.isFragment = function(S) {
    return E(S) === r;
  }, ye.isLazy = function(S) {
    return E(S) === y;
  }, ye.isMemo = function(S) {
    return E(S) === h;
  }, ye.isPortal = function(S) {
    return E(S) === n;
  }, ye.isProfiler = function(S) {
    return E(S) === a;
  }, ye.isStrictMode = function(S) {
    return E(S) === i;
  }, ye.isSuspense = function(S) {
    return E(S) === f;
  }, ye.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === r || S === c || S === a || S === i || S === f || S === d || typeof S == "object" && S !== null && (S.$$typeof === y || S.$$typeof === h || S.$$typeof === o || S.$$typeof === l || S.$$typeof === u || S.$$typeof === k || S.$$typeof === b || S.$$typeof === A || S.$$typeof === v);
  }, ye.typeOf = E, ye;
}
var xe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _a;
function Mu() {
  return _a || (_a = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, k = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
    function E(R) {
      return typeof R == "string" || typeof R == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      R === r || R === c || R === a || R === i || R === f || R === d || typeof R == "object" && R !== null && (R.$$typeof === y || R.$$typeof === h || R.$$typeof === o || R.$$typeof === l || R.$$typeof === u || R.$$typeof === k || R.$$typeof === b || R.$$typeof === A || R.$$typeof === v);
    }
    function O(R) {
      if (typeof R == "object" && R !== null) {
        var Oe = R.$$typeof;
        switch (Oe) {
          case t:
            var De = R.type;
            switch (De) {
              case s:
              case c:
              case r:
              case a:
              case i:
              case f:
                return De;
              default:
                var ge = De && De.$$typeof;
                switch (ge) {
                  case l:
                  case u:
                  case y:
                  case h:
                  case o:
                    return ge;
                  default:
                    return Oe;
                }
            }
          case n:
            return Oe;
        }
      }
    }
    var S = s, w = c, F = l, Q = o, ne = t, C = u, L = r, B = y, D = h, _ = n, q = a, ae = i, fe = f, de = !1;
    function we(R) {
      return de || (de = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), p(R) || O(R) === s;
    }
    function p(R) {
      return O(R) === c;
    }
    function I(R) {
      return O(R) === l;
    }
    function G(R) {
      return O(R) === o;
    }
    function g(R) {
      return typeof R == "object" && R !== null && R.$$typeof === t;
    }
    function M(R) {
      return O(R) === u;
    }
    function X(R) {
      return O(R) === r;
    }
    function U(R) {
      return O(R) === y;
    }
    function J(R) {
      return O(R) === h;
    }
    function ee(R) {
      return O(R) === n;
    }
    function re(R) {
      return O(R) === a;
    }
    function te(R) {
      return O(R) === i;
    }
    function Ce(R) {
      return O(R) === f;
    }
    xe.AsyncMode = S, xe.ConcurrentMode = w, xe.ContextConsumer = F, xe.ContextProvider = Q, xe.Element = ne, xe.ForwardRef = C, xe.Fragment = L, xe.Lazy = B, xe.Memo = D, xe.Portal = _, xe.Profiler = q, xe.StrictMode = ae, xe.Suspense = fe, xe.isAsyncMode = we, xe.isConcurrentMode = p, xe.isContextConsumer = I, xe.isContextProvider = G, xe.isElement = g, xe.isForwardRef = M, xe.isFragment = X, xe.isLazy = U, xe.isMemo = J, xe.isPortal = ee, xe.isProfiler = re, xe.isStrictMode = te, xe.isSuspense = Ce, xe.isValidElementType = E, xe.typeOf = O;
  }()), xe;
}
var Ma;
function Ol() {
  return Ma || (Ma = 1, process.env.NODE_ENV === "production" ? In.exports = _u() : In.exports = Mu()), In.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var vr, La;
function Lu() {
  if (La) return vr;
  La = 1;
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
      var s = Object.getOwnPropertyNames(o).map(function(u) {
        return o[u];
      });
      if (s.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        c[u] = u;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return vr = i() ? Object.assign : function(a, o) {
    for (var l, s = r(a), c, u = 1; u < arguments.length; u++) {
      l = Object(arguments[u]);
      for (var f in l)
        t.call(l, f) && (s[f] = l[f]);
      if (e) {
        c = e(l);
        for (var d = 0; d < c.length; d++)
          n.call(l, c[d]) && (s[c[d]] = l[c[d]]);
      }
    }
    return s;
  }, vr;
}
var kr, Fa;
function Li() {
  if (Fa) return kr;
  Fa = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return kr = e, kr;
}
var wr, Da;
function jl() {
  return Da || (Da = 1, wr = Function.call.bind(Object.prototype.hasOwnProperty)), wr;
}
var Er, Ba;
function Fu() {
  if (Ba) return Er;
  Ba = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Li(), n = {}, r = /* @__PURE__ */ jl();
    e = function(a) {
      var o = "Warning: " + a;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function i(a, o, l, s, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in a)
        if (r(a, u)) {
          var f;
          try {
            if (typeof a[u] != "function") {
              var d = Error(
                (s || "React class") + ": " + l + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            f = a[u](o, u, s, l, null, t);
          } catch (y) {
            f = y;
          }
          if (f && !(f instanceof Error) && e(
            (s || "React class") + ": type specification of " + l + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in n)) {
            n[f.message] = !0;
            var h = c ? c() : "";
            e(
              "Failed " + l + " type: " + f.message + (h ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Er = i, Er;
}
var Cr, $a;
function Du() {
  if ($a) return Cr;
  $a = 1;
  var e = Ol(), t = Lu(), n = /* @__PURE__ */ Li(), r = /* @__PURE__ */ jl(), i = /* @__PURE__ */ Fu(), a = function() {
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
    var c = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function f(p) {
      var I = p && (c && p[c] || p[u]);
      if (typeof I == "function")
        return I;
    }
    var d = "<<anonymous>>", h = {
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
      element: O(),
      elementType: S(),
      instanceOf: w,
      node: C(),
      objectOf: Q,
      oneOf: F,
      oneOfType: ne,
      shape: B,
      exact: D
    };
    function y(p, I) {
      return p === I ? p !== 0 || 1 / p === 1 / I : p !== p && I !== I;
    }
    function v(p, I) {
      this.message = p, this.data = I && typeof I == "object" ? I : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function k(p) {
      if (process.env.NODE_ENV !== "production")
        var I = {}, G = 0;
      function g(X, U, J, ee, re, te, Ce) {
        if (ee = ee || d, te = te || J, Ce !== n) {
          if (s) {
            var R = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw R.name = "Invariant Violation", R;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Oe = ee + ":" + J;
            !I[Oe] && // Avoid spamming the console because they are often not actionable except for lib authors
            G < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + te + "` prop on `" + ee + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), I[Oe] = !0, G++);
          }
        }
        return U[J] == null ? X ? U[J] === null ? new v("The " + re + " `" + te + "` is marked as required " + ("in `" + ee + "`, but its value is `null`.")) : new v("The " + re + " `" + te + "` is marked as required in " + ("`" + ee + "`, but its value is `undefined`.")) : null : p(U, J, ee, re, te);
      }
      var M = g.bind(null, !1);
      return M.isRequired = g.bind(null, !0), M;
    }
    function b(p) {
      function I(G, g, M, X, U, J) {
        var ee = G[g], re = ae(ee);
        if (re !== p) {
          var te = fe(ee);
          return new v(
            "Invalid " + X + " `" + U + "` of type " + ("`" + te + "` supplied to `" + M + "`, expected ") + ("`" + p + "`."),
            { expectedType: p }
          );
        }
        return null;
      }
      return k(I);
    }
    function A() {
      return k(o);
    }
    function E(p) {
      function I(G, g, M, X, U) {
        if (typeof p != "function")
          return new v("Property `" + U + "` of component `" + M + "` has invalid PropType notation inside arrayOf.");
        var J = G[g];
        if (!Array.isArray(J)) {
          var ee = ae(J);
          return new v("Invalid " + X + " `" + U + "` of type " + ("`" + ee + "` supplied to `" + M + "`, expected an array."));
        }
        for (var re = 0; re < J.length; re++) {
          var te = p(J, re, M, X, U + "[" + re + "]", n);
          if (te instanceof Error)
            return te;
        }
        return null;
      }
      return k(I);
    }
    function O() {
      function p(I, G, g, M, X) {
        var U = I[G];
        if (!l(U)) {
          var J = ae(U);
          return new v("Invalid " + M + " `" + X + "` of type " + ("`" + J + "` supplied to `" + g + "`, expected a single ReactElement."));
        }
        return null;
      }
      return k(p);
    }
    function S() {
      function p(I, G, g, M, X) {
        var U = I[G];
        if (!e.isValidElementType(U)) {
          var J = ae(U);
          return new v("Invalid " + M + " `" + X + "` of type " + ("`" + J + "` supplied to `" + g + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return k(p);
    }
    function w(p) {
      function I(G, g, M, X, U) {
        if (!(G[g] instanceof p)) {
          var J = p.name || d, ee = we(G[g]);
          return new v("Invalid " + X + " `" + U + "` of type " + ("`" + ee + "` supplied to `" + M + "`, expected ") + ("instance of `" + J + "`."));
        }
        return null;
      }
      return k(I);
    }
    function F(p) {
      if (!Array.isArray(p))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), o;
      function I(G, g, M, X, U) {
        for (var J = G[g], ee = 0; ee < p.length; ee++)
          if (y(J, p[ee]))
            return null;
        var re = JSON.stringify(p, function(Ce, R) {
          var Oe = fe(R);
          return Oe === "symbol" ? String(R) : R;
        });
        return new v("Invalid " + X + " `" + U + "` of value `" + String(J) + "` " + ("supplied to `" + M + "`, expected one of " + re + "."));
      }
      return k(I);
    }
    function Q(p) {
      function I(G, g, M, X, U) {
        if (typeof p != "function")
          return new v("Property `" + U + "` of component `" + M + "` has invalid PropType notation inside objectOf.");
        var J = G[g], ee = ae(J);
        if (ee !== "object")
          return new v("Invalid " + X + " `" + U + "` of type " + ("`" + ee + "` supplied to `" + M + "`, expected an object."));
        for (var re in J)
          if (r(J, re)) {
            var te = p(J, re, M, X, U + "." + re, n);
            if (te instanceof Error)
              return te;
          }
        return null;
      }
      return k(I);
    }
    function ne(p) {
      if (!Array.isArray(p))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var I = 0; I < p.length; I++) {
        var G = p[I];
        if (typeof G != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + de(G) + " at index " + I + "."
          ), o;
      }
      function g(M, X, U, J, ee) {
        for (var re = [], te = 0; te < p.length; te++) {
          var Ce = p[te], R = Ce(M, X, U, J, ee, n);
          if (R == null)
            return null;
          R.data && r(R.data, "expectedType") && re.push(R.data.expectedType);
        }
        var Oe = re.length > 0 ? ", expected one of type [" + re.join(", ") + "]" : "";
        return new v("Invalid " + J + " `" + ee + "` supplied to " + ("`" + U + "`" + Oe + "."));
      }
      return k(g);
    }
    function C() {
      function p(I, G, g, M, X) {
        return _(I[G]) ? null : new v("Invalid " + M + " `" + X + "` supplied to " + ("`" + g + "`, expected a ReactNode."));
      }
      return k(p);
    }
    function L(p, I, G, g, M) {
      return new v(
        (p || "React class") + ": " + I + " type `" + G + "." + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + M + "`."
      );
    }
    function B(p) {
      function I(G, g, M, X, U) {
        var J = G[g], ee = ae(J);
        if (ee !== "object")
          return new v("Invalid " + X + " `" + U + "` of type `" + ee + "` " + ("supplied to `" + M + "`, expected `object`."));
        for (var re in p) {
          var te = p[re];
          if (typeof te != "function")
            return L(M, X, U, re, fe(te));
          var Ce = te(J, re, M, X, U + "." + re, n);
          if (Ce)
            return Ce;
        }
        return null;
      }
      return k(I);
    }
    function D(p) {
      function I(G, g, M, X, U) {
        var J = G[g], ee = ae(J);
        if (ee !== "object")
          return new v("Invalid " + X + " `" + U + "` of type `" + ee + "` " + ("supplied to `" + M + "`, expected `object`."));
        var re = t({}, G[g], p);
        for (var te in re) {
          var Ce = p[te];
          if (r(p, te) && typeof Ce != "function")
            return L(M, X, U, te, fe(Ce));
          if (!Ce)
            return new v(
              "Invalid " + X + " `" + U + "` key `" + te + "` supplied to `" + M + "`.\nBad object: " + JSON.stringify(G[g], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(p), null, "  ")
            );
          var R = Ce(J, te, M, X, U + "." + te, n);
          if (R)
            return R;
        }
        return null;
      }
      return k(I);
    }
    function _(p) {
      switch (typeof p) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !p;
        case "object":
          if (Array.isArray(p))
            return p.every(_);
          if (p === null || l(p))
            return !0;
          var I = f(p);
          if (I) {
            var G = I.call(p), g;
            if (I !== p.entries) {
              for (; !(g = G.next()).done; )
                if (!_(g.value))
                  return !1;
            } else
              for (; !(g = G.next()).done; ) {
                var M = g.value;
                if (M && !_(M[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function q(p, I) {
      return p === "symbol" ? !0 : I ? I["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && I instanceof Symbol : !1;
    }
    function ae(p) {
      var I = typeof p;
      return Array.isArray(p) ? "array" : p instanceof RegExp ? "object" : q(I, p) ? "symbol" : I;
    }
    function fe(p) {
      if (typeof p > "u" || p === null)
        return "" + p;
      var I = ae(p);
      if (I === "object") {
        if (p instanceof Date)
          return "date";
        if (p instanceof RegExp)
          return "regexp";
      }
      return I;
    }
    function de(p) {
      var I = fe(p);
      switch (I) {
        case "array":
        case "object":
          return "an " + I;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + I;
        default:
          return I;
      }
    }
    function we(p) {
      return !p.constructor || !p.constructor.name ? d : p.constructor.name;
    }
    return h.checkPropTypes = i, h.resetWarningCache = i.resetWarningCache, h.PropTypes = h, h;
  }, Cr;
}
var Sr, Ha;
function Bu() {
  if (Ha) return Sr;
  Ha = 1;
  var e = /* @__PURE__ */ Li();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Sr = function() {
    function r(o, l, s, c, u, f) {
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
var Va;
function $u() {
  if (Va) return zn.exports;
  if (Va = 1, process.env.NODE_ENV !== "production") {
    var e = Ol(), t = !0;
    zn.exports = /* @__PURE__ */ Du()(e.isElement, t);
  } else
    zn.exports = /* @__PURE__ */ Bu()();
  return zn.exports;
}
var Hu = /* @__PURE__ */ $u();
const P = /* @__PURE__ */ vn(Hu), Ua = {
  disabled: !1
};
var Vu = process.env.NODE_ENV !== "production" ? P.oneOfType([P.number, P.shape({
  enter: P.number,
  exit: P.number,
  appear: P.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && P.oneOfType([P.string, P.shape({
  enter: P.string,
  exit: P.string,
  active: P.string
}), P.shape({
  enter: P.string,
  enterDone: P.string,
  enterActive: P.string,
  exit: P.string,
  exitDone: P.string,
  exitActive: P.string
})]);
const zl = ze.createContext(null);
var Uu = function(t) {
  return t.scrollTop;
}, sn = "unmounted", vt = "exited", Ze = "entering", ct = "entered", pn = "exiting", pt = /* @__PURE__ */ function(e) {
  Su(t, e);
  function t(r, i) {
    var a;
    a = e.call(this, r, i) || this;
    var o = i, l = o && !o.isMounting ? r.enter : r.appear, s;
    return a.appearStatus = null, r.in ? l ? (s = vt, a.appearStatus = Ze) : s = ct : r.unmountOnExit || r.mountOnEnter ? s = sn : s = vt, a.state = {
      status: s
    }, a.nextCallback = null, a;
  }
  t.getDerivedStateFromProps = function(i, a) {
    var o = i.in;
    return o && a.status === sn ? {
      status: vt
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var a = null;
    if (i !== this.props) {
      var o = this.state.status;
      this.props.in ? o !== Ze && o !== ct && (a = Ze) : (o === Ze || o === ct) && (a = pn);
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
      if (this.cancelNextCallback(), a === Ze) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var o = this.props.nodeRef ? this.props.nodeRef.current : $t.findDOMNode(this);
          o && Uu(o);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === vt && this.setState({
      status: sn
    });
  }, n.performEnter = function(i) {
    var a = this, o = this.props.enter, l = this.context ? this.context.isMounting : i, s = this.props.nodeRef ? [l] : [$t.findDOMNode(this), l], c = s[0], u = s[1], f = this.getTimeouts(), d = l ? f.appear : f.enter;
    if (!i && !o || Ua.disabled) {
      this.safeSetState({
        status: ct
      }, function() {
        a.props.onEntered(c);
      });
      return;
    }
    this.props.onEnter(c, u), this.safeSetState({
      status: Ze
    }, function() {
      a.props.onEntering(c, u), a.onTransitionEnd(d, function() {
        a.safeSetState({
          status: ct
        }, function() {
          a.props.onEntered(c, u);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, a = this.props.exit, o = this.getTimeouts(), l = this.props.nodeRef ? void 0 : $t.findDOMNode(this);
    if (!a || Ua.disabled) {
      this.safeSetState({
        status: vt
      }, function() {
        i.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: pn
    }, function() {
      i.props.onExiting(l), i.onTransitionEnd(o.exit, function() {
        i.safeSetState({
          status: vt
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
    var o = this.props.nodeRef ? this.props.nodeRef.current : $t.findDOMNode(this), l = i == null && !this.props.addEndListener;
    if (!o || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var s = this.props.nodeRef ? [this.nextCallback] : [o, this.nextCallback], c = s[0], u = s[1];
      this.props.addEndListener(c, u);
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
      /* @__PURE__ */ ze.createElement(zl.Provider, {
        value: null
      }, typeof o == "function" ? o(i, l) : ze.cloneElement(ze.Children.only(o), l))
    );
  }, t;
}(ze.Component);
pt.contextType = zl;
pt.propTypes = process.env.NODE_ENV !== "production" ? {
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
  nodeRef: P.shape({
    current: typeof Element > "u" ? P.any : function(e, t, n, r, i, a) {
      var o = e[t];
      return P.instanceOf(o && "ownerDocument" in o ? o.ownerDocument.defaultView.Element : Element)(e, t, n, r, i, a);
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
  children: P.oneOfType([P.func.isRequired, P.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: P.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: P.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: P.bool,
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
  appear: P.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: P.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: P.bool,
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
    var n = Vu;
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
  addEndListener: P.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: P.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: P.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: P.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: P.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: P.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: P.func
} : {};
function Rt() {
}
pt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Rt,
  onEntering: Rt,
  onEntered: Rt,
  onExit: Rt,
  onExiting: Rt,
  onExited: Rt
};
pt.UNMOUNTED = sn;
pt.EXITED = vt;
pt.ENTERING = Ze;
pt.ENTERED = ct;
pt.EXITING = pn;
function Wu(e) {
  return e.code === "Escape" || e.keyCode === 27;
}
function qu() {
  const e = $.version.split(".");
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
  } = qu();
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
function Yu(e, t, n, r) {
  if (r && typeof r != "boolean" && !ii) {
    var i = r.once, a = r.capture, o = n;
    !ii && i && (o = n.__once || function l(s) {
      this.removeEventListener(t, l, a), n.call(this, s);
    }, n.__once = o), e.addEventListener(t, o, ri ? r : a);
  }
  e.addEventListener(t, n, r);
}
function Gu(e, t, n, r) {
  var i = r && typeof r != "boolean" ? r.capture : r;
  e.removeEventListener(t, n, i), n.__once && e.removeEventListener(t, n.__once, i);
}
function Vn(e, t, n, r) {
  return Yu(e, t, n, r), function() {
    Gu(e, t, n, r);
  };
}
function Ku(e, t, n, r) {
  if (r === void 0 && (r = !0), e) {
    var i = document.createEvent("HTMLEvents");
    i.initEvent(t, n, r), e.dispatchEvent(i);
  }
}
function Xu(e) {
  var t = ft(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function Qu(e, t, n) {
  n === void 0 && (n = 5);
  var r = !1, i = setTimeout(function() {
    r || Ku(e, "transitionend", !0);
  }, t + n), a = Vn(e, "transitionend", function() {
    r = !0;
  }, {
    once: !0
  });
  return function() {
    clearTimeout(i), a();
  };
}
function Ju(e, t, n, r) {
  n == null && (n = Xu(e) || 0);
  var i = Qu(e, n, r), a = Vn(e, "transitionend", t);
  return function() {
    i(), a();
  };
}
function Wa(e, t) {
  const n = ft(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function Fi(e, t) {
  const n = Wa(e, "transitionDuration"), r = Wa(e, "transitionDelay"), i = Ju(e, (a) => {
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
function Il(e) {
  e.offsetHeight;
}
const qa = (e) => !e || typeof e == "function" ? e : (t) => {
  e.current = t;
};
function Zu(e, t) {
  const n = qa(e), r = qa(t);
  return (i) => {
    n && n(i), r && r(i);
  };
}
function e1(e, t) {
  return Ye(() => Zu(e, t), [e, t]);
}
function t1(e) {
  return e && "setState" in e ? $t.findDOMNode(e) : e ?? null;
}
const Di = /* @__PURE__ */ ze.forwardRef(({
  onEnter: e,
  onEntering: t,
  onEntered: n,
  onExit: r,
  onExiting: i,
  onExited: a,
  addEndListener: o,
  children: l,
  childRef: s,
  ...c
}, u) => {
  const f = Ne(null), d = e1(f, s), h = (w) => {
    d(t1(w));
  }, y = (w) => (F) => {
    w && f.current && w(f.current, F);
  }, v = Se(y(e), [e]), k = Se(y(t), [t]), b = Se(y(n), [n]), A = Se(y(r), [r]), E = Se(y(i), [i]), O = Se(y(a), [a]), S = Se(y(o), [o]);
  return /* @__PURE__ */ m.jsx(pt, {
    ref: u,
    ...c,
    onEnter: v,
    onEntered: b,
    onEntering: k,
    onExit: A,
    onExited: O,
    onExiting: E,
    addEndListener: S,
    nodeRef: f,
    children: typeof l == "function" ? (w, F) => (
      // TODO: Types for RTG missing innerProps, so need to cast.
      l(w, {
        ...F,
        ref: h
      })
    ) : /* @__PURE__ */ ze.cloneElement(l, {
      ref: h
    })
  });
}), n1 = {
  height: ["marginTop", "marginBottom"],
  width: ["marginLeft", "marginRight"]
};
function r1(e, t) {
  const n = `offset${e[0].toUpperCase()}${e.slice(1)}`, r = t[n], i = n1[e];
  return r + // @ts-ignore
  parseInt(ft(t, i[0]), 10) + // @ts-ignore
  parseInt(ft(t, i[1]), 10);
}
const i1 = {
  [vt]: "collapse",
  [pn]: "collapsing",
  [Ze]: "collapsing",
  [ct]: "collapse show"
}, a1 = /* @__PURE__ */ ze.forwardRef(({
  onEnter: e,
  onEntering: t,
  onEntered: n,
  onExit: r,
  onExiting: i,
  className: a,
  children: o,
  dimension: l = "height",
  in: s = !1,
  timeout: c = 300,
  mountOnEnter: u = !1,
  unmountOnExit: f = !1,
  appear: d = !1,
  getDimensionValue: h = r1,
  ...y
}, v) => {
  const k = typeof l == "function" ? l() : l, b = Ye(() => rn((w) => {
    w.style[k] = "0";
  }, e), [k, e]), A = Ye(() => rn((w) => {
    const F = `scroll${k[0].toUpperCase()}${k.slice(1)}`;
    w.style[k] = `${w[F]}px`;
  }, t), [k, t]), E = Ye(() => rn((w) => {
    w.style[k] = null;
  }, n), [k, n]), O = Ye(() => rn((w) => {
    w.style[k] = `${h(k, w)}px`, Il(w);
  }, r), [r, h, k]), S = Ye(() => rn((w) => {
    w.style[k] = null;
  }, i), [k, i]);
  return /* @__PURE__ */ m.jsx(Di, {
    ref: v,
    addEndListener: Fi,
    ...y,
    "aria-expanded": y.role ? s : null,
    onEnter: b,
    onEntering: A,
    onEntered: E,
    onExit: O,
    onExiting: S,
    childRef: Gt(o),
    in: s,
    timeout: c,
    mountOnEnter: u,
    unmountOnExit: f,
    appear: d,
    children: (w, F) => /* @__PURE__ */ ze.cloneElement(o, {
      ...F,
      className: Z(a, o.props.className, i1[w], k === "width" && "collapse-horizontal")
    })
  });
});
function o1(e) {
  const t = Ne(e);
  return _e(() => {
    t.current = e;
  }, [e]), t;
}
function ar(e) {
  const t = o1(e);
  return Se(function(...n) {
    return t.current && t.current(...n);
  }, [t]);
}
const Bi = (e) => /* @__PURE__ */ $.forwardRef((t, n) => /* @__PURE__ */ m.jsx("div", {
  ...t,
  ref: n,
  className: Z(t.className, e)
}));
function l1(e) {
  const t = Ne(e);
  return _e(() => {
    t.current = e;
  }, [e]), t;
}
function ut(e) {
  const t = l1(e);
  return Se(function(...n) {
    return t.current && t.current(...n);
  }, [t]);
}
function s1() {
  const e = Ne(!0), t = Ne(() => e.current);
  return _e(() => (e.current = !0, () => {
    e.current = !1;
  }), []), t.current;
}
function c1(e) {
  const t = Ne(null);
  return _e(() => {
    t.current = e;
  }), t.current;
}
const u1 = typeof global < "u" && // @ts-ignore
global.navigator && // @ts-ignore
global.navigator.product === "ReactNative", f1 = typeof document < "u", Ya = f1 || u1 ? Cl : _e, d1 = ["as", "disabled"];
function h1(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
function m1(e) {
  return !e || e.trim() === "#";
}
function $i({
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
  const c = {
    tagName: e
  };
  if (e === "button")
    return [{
      type: s || "button",
      disabled: t
    }, c];
  const u = (d) => {
    if ((t || e === "a" && m1(n)) && d.preventDefault(), t) {
      d.stopPropagation();
      return;
    }
    o == null || o(d);
  }, f = (d) => {
    d.key === " " && (d.preventDefault(), u(d));
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
    onClick: u,
    onKeyDown: f
  }, c];
}
const Pl = /* @__PURE__ */ $.forwardRef((e, t) => {
  let {
    as: n,
    disabled: r
  } = e, i = h1(e, d1);
  const [a, {
    tagName: o
  }] = $i(Object.assign({
    tagName: n,
    disabled: r
  }, i));
  return /* @__PURE__ */ m.jsx(o, Object.assign({}, i, a, {
    ref: t
  }));
});
Pl.displayName = "Button";
const p1 = ["onKeyDown"];
function g1(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
function y1(e) {
  return !e || e.trim() === "#";
}
const Hi = /* @__PURE__ */ $.forwardRef((e, t) => {
  let {
    onKeyDown: n
  } = e, r = g1(e, p1);
  const [i] = $i(Object.assign({
    tagName: "a"
  }, r)), a = ut((o) => {
    i.onKeyDown(o), n == null || n(o);
  });
  return y1(r.href) || r.role === "button" ? /* @__PURE__ */ m.jsx("a", Object.assign({
    ref: t
  }, r, i, {
    onKeyDown: a
  })) : /* @__PURE__ */ m.jsx("a", Object.assign({
    ref: t
  }, r, {
    onKeyDown: n
  }));
});
Hi.displayName = "Anchor";
const x1 = {
  [Ze]: "show",
  [ct]: "show"
}, Rl = /* @__PURE__ */ $.forwardRef(({
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
  }, l = Se((s, c) => {
    Il(s), r == null || r(s, c);
  }, [r]);
  return /* @__PURE__ */ m.jsx(Di, {
    ref: a,
    addEndListener: Fi,
    ...o,
    onEnter: l,
    childRef: Gt(t),
    children: (s, c) => /* @__PURE__ */ $.cloneElement(t, {
      ...c,
      className: Z("fade", e, t.props.className, x1[s], n[s])
    })
  });
});
Rl.displayName = "Fade";
const b1 = {
  /** An accessible label indicating the relevant information about the Close Button. */
  "aria-label": P.string,
  /** A callback fired after the Close Button is clicked. */
  onClick: P.func,
  /**
   * Render different color variant for the button.
   *
   * Omitting this will render the default dark color.
   */
  variant: P.oneOf(["white"])
}, Vi = /* @__PURE__ */ $.forwardRef(({
  className: e,
  variant: t,
  "aria-label": n = "Close",
  ...r
}, i) => /* @__PURE__ */ m.jsx("button", {
  ref: i,
  type: "button",
  className: Z("btn-close", t && `btn-close-${t}`, e),
  "aria-label": n,
  ...r
}));
Vi.displayName = "CloseButton";
Vi.propTypes = b1;
const kn = /* @__PURE__ */ $.forwardRef(({
  as: e,
  bsPrefix: t,
  variant: n = "primary",
  size: r,
  active: i = !1,
  disabled: a = !1,
  className: o,
  ...l
}, s) => {
  const c = se(t, "btn"), [u, {
    tagName: f
  }] = $i({
    tagName: e,
    disabled: a,
    ...l
  }), d = f;
  return /* @__PURE__ */ m.jsx(d, {
    ...u,
    ...l,
    ref: s,
    disabled: a,
    className: Z(o, c, i && "active", n && `${c}-${n}`, r && `${c}-${r}`, l.href && a && "disabled")
  });
});
kn.displayName = "Button";
const Ui = /* @__PURE__ */ $.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = "div",
  ...r
}, i) => (t = se(t, "card-body"), /* @__PURE__ */ m.jsx(n, {
  ref: i,
  className: Z(e, t),
  ...r
})));
Ui.displayName = "CardBody";
const _l = /* @__PURE__ */ $.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = "div",
  ...r
}, i) => (t = se(t, "card-footer"), /* @__PURE__ */ m.jsx(n, {
  ref: i,
  className: Z(e, t),
  ...r
})));
_l.displayName = "CardFooter";
const Wi = /* @__PURE__ */ $.createContext(null);
Wi.displayName = "CardHeaderContext";
const Ml = /* @__PURE__ */ $.forwardRef(({
  bsPrefix: e,
  className: t,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: n = "div",
  ...r
}, i) => {
  const a = se(e, "card-header"), o = Ye(() => ({
    cardHeaderBsPrefix: a
  }), [a]);
  return /* @__PURE__ */ m.jsx(Wi.Provider, {
    value: o,
    children: /* @__PURE__ */ m.jsx(n, {
      ref: i,
      ...r,
      className: Z(t, a)
    })
  });
});
Ml.displayName = "CardHeader";
const Ll = /* @__PURE__ */ $.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    bsPrefix: e,
    className: t,
    variant: n,
    as: r = "img",
    ...i
  }, a) => {
    const o = se(e, "card-img");
    return /* @__PURE__ */ m.jsx(r, {
      ref: a,
      className: Z(n ? `${o}-${n}` : o, t),
      ...i
    });
  }
);
Ll.displayName = "CardImg";
const Fl = /* @__PURE__ */ $.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = "div",
  ...r
}, i) => (t = se(t, "card-img-overlay"), /* @__PURE__ */ m.jsx(n, {
  ref: i,
  className: Z(e, t),
  ...r
})));
Fl.displayName = "CardImgOverlay";
const Dl = /* @__PURE__ */ $.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = "a",
  ...r
}, i) => (t = se(t, "card-link"), /* @__PURE__ */ m.jsx(n, {
  ref: i,
  className: Z(e, t),
  ...r
})));
Dl.displayName = "CardLink";
const v1 = Bi("h6"), Bl = /* @__PURE__ */ $.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = v1,
  ...r
}, i) => (t = se(t, "card-subtitle"), /* @__PURE__ */ m.jsx(n, {
  ref: i,
  className: Z(e, t),
  ...r
})));
Bl.displayName = "CardSubtitle";
const $l = /* @__PURE__ */ $.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = "p",
  ...r
}, i) => (t = se(t, "card-text"), /* @__PURE__ */ m.jsx(n, {
  ref: i,
  className: Z(e, t),
  ...r
})));
$l.displayName = "CardText";
const k1 = Bi("h5"), Hl = /* @__PURE__ */ $.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = k1,
  ...r
}, i) => (t = se(t, "card-title"), /* @__PURE__ */ m.jsx(n, {
  ref: i,
  className: Z(e, t),
  ...r
})));
Hl.displayName = "CardTitle";
const Vl = /* @__PURE__ */ $.forwardRef(({
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
}, c) => {
  const u = se(e, "card");
  return /* @__PURE__ */ m.jsx(l, {
    ref: c,
    ...s,
    className: Z(t, u, n && `bg-${n}`, r && `text-${r}`, i && `border-${i}`),
    children: a ? /* @__PURE__ */ m.jsx(Ui, {
      children: o
    }) : o
  });
});
Vl.displayName = "Card";
const an = Object.assign(Vl, {
  Img: Ll,
  Title: Hl,
  Subtitle: Bl,
  Body: Ui,
  Link: Dl,
  Text: $l,
  Header: Ml,
  Footer: _l,
  ImgOverlay: Fl
});
function w1(e, t) {
  return $.Children.toArray(e).some((n) => /* @__PURE__ */ $.isValidElement(n) && n.type === t);
}
function E1({
  as: e,
  bsPrefix: t,
  className: n,
  ...r
}) {
  t = se(t, "col");
  const i = Al(), a = Nl(), o = [], l = [];
  return i.forEach((s) => {
    const c = r[s];
    delete r[s];
    let u, f, d;
    typeof c == "object" && c != null ? {
      span: u,
      offset: f,
      order: d
    } = c : u = c;
    const h = s !== a ? `-${s}` : "";
    u && o.push(u === !0 ? `${t}${h}` : `${t}${h}-${u}`), d != null && l.push(`order${h}-${d}`), f != null && l.push(`offset${h}-${f}`);
  }), [{
    ...r,
    className: Z(n, ...o, ...l)
  }, {
    as: e,
    bsPrefix: t,
    spans: o
  }];
}
const ce = /* @__PURE__ */ $.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  (e, t) => {
    const [{
      className: n,
      ...r
    }, {
      as: i = "div",
      bsPrefix: a,
      spans: o
    }] = E1(e);
    return /* @__PURE__ */ m.jsx(i, {
      ...r,
      ref: t,
      className: Z(n, !o.length && a)
    });
  }
);
ce.displayName = "Col";
const Le = /* @__PURE__ */ $.forwardRef(({
  bsPrefix: e,
  fluid: t = !1,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: n = "div",
  className: r,
  ...i
}, a) => {
  const o = se(e, "container"), l = typeof t == "string" ? `-${t}` : "-fluid";
  return /* @__PURE__ */ m.jsx(n, {
    ref: a,
    ...i,
    className: Z(r, t ? `${o}${l}` : o)
  });
});
Le.displayName = "Container";
var C1 = Function.prototype.bind.call(Function.prototype.call, [].slice);
function At(e, t) {
  return C1(e.querySelectorAll(t));
}
function S1() {
  const [, e] = hu((t) => t + 1, 0);
  return e;
}
function Ga(e, t) {
  if (e.contains) return e.contains(t);
  if (e.compareDocumentPosition) return e === t || !!(e.compareDocumentPosition(t) & 16);
}
var Ar, Ka;
function T1() {
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
      var s = 0, c = "Warning: " + i.replace(/%s/g, function() {
        return a[s++];
      });
      typeof console < "u" && console.error(c);
      try {
        throw new Error(c);
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
var A1 = T1();
const Ul = /* @__PURE__ */ vn(A1), Un = /* @__PURE__ */ $.createContext(null), qi = (e, t = null) => e != null ? String(e) : t || null, Yi = /* @__PURE__ */ $.createContext(null);
Yi.displayName = "NavContext";
const N1 = "data-rr-ui-", O1 = "rrUi";
function or(e) {
  return `${N1}${e}`;
}
function j1(e) {
  return `${O1}${e}`;
}
const Wl = /* @__PURE__ */ mu(ir ? window : void 0);
Wl.Provider;
function Gi() {
  return Te(Wl);
}
const z1 = typeof global < "u" && // @ts-ignore
global.navigator && // @ts-ignore
global.navigator.product === "ReactNative", I1 = typeof document < "u", P1 = I1 || z1 ? Cl : _e, Kt = /* @__PURE__ */ $.createContext(null);
Kt.displayName = "NavbarContext";
const R1 = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: P.string,
  /** Display feedback as a tooltip. */
  tooltip: P.bool,
  as: P.elementType
}, lr = /* @__PURE__ */ $.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    as: e = "div",
    className: t,
    type: n = "valid",
    tooltip: r = !1,
    ...i
  }, a) => /* @__PURE__ */ m.jsx(e, {
    ...i,
    ref: a,
    className: Z(t, `${n}-${r ? "tooltip" : "feedback"}`)
  })
);
lr.displayName = "Feedback";
lr.propTypes = R1;
const dt = /* @__PURE__ */ $.createContext({}), Ki = /* @__PURE__ */ $.forwardRef(({
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
    controlId: c
  } = Te(dt);
  return t = se(t, "form-check-input"), /* @__PURE__ */ m.jsx(o, {
    ...l,
    ref: s,
    type: r,
    id: e || c,
    className: Z(n, t, i && "is-valid", a && "is-invalid")
  });
});
Ki.displayName = "FormCheckInput";
const Wn = /* @__PURE__ */ $.forwardRef(({
  bsPrefix: e,
  className: t,
  htmlFor: n,
  ...r
}, i) => {
  const {
    controlId: a
  } = Te(dt);
  return e = se(e, "form-check-label"), /* @__PURE__ */ m.jsx("label", {
    ...r,
    ref: i,
    htmlFor: n || a,
    className: Z(t, e)
  });
});
Wn.displayName = "FormCheckLabel";
const ql = /* @__PURE__ */ $.forwardRef(({
  id: e,
  bsPrefix: t,
  bsSwitchPrefix: n,
  inline: r = !1,
  reverse: i = !1,
  disabled: a = !1,
  isValid: o = !1,
  isInvalid: l = !1,
  feedbackTooltip: s = !1,
  feedback: c,
  feedbackType: u,
  className: f,
  style: d,
  title: h = "",
  type: y = "checkbox",
  label: v,
  children: k,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: b = "input",
  ...A
}, E) => {
  t = se(t, "form-check"), n = se(n, "form-switch");
  const {
    controlId: O
  } = Te(dt), S = Ye(() => ({
    controlId: e || O
  }), [O, e]), w = !k && v != null && v !== !1 || w1(k, Wn), F = /* @__PURE__ */ m.jsx(Ki, {
    ...A,
    type: y === "switch" ? "checkbox" : y,
    ref: E,
    isValid: o,
    isInvalid: l,
    disabled: a,
    as: b
  });
  return /* @__PURE__ */ m.jsx(dt.Provider, {
    value: S,
    children: /* @__PURE__ */ m.jsx("div", {
      style: d,
      className: Z(f, w && t, r && `${t}-inline`, i && `${t}-reverse`, y === "switch" && n),
      children: k || /* @__PURE__ */ m.jsxs(m.Fragment, {
        children: [F, w && /* @__PURE__ */ m.jsx(Wn, {
          title: h,
          children: v
        }), c && /* @__PURE__ */ m.jsx(lr, {
          type: u,
          tooltip: s,
          children: c
        })]
      })
    })
  });
});
ql.displayName = "FormCheck";
const qn = Object.assign(ql, {
  Input: Ki,
  Label: Wn
}), Yl = /* @__PURE__ */ $.forwardRef(({
  bsPrefix: e,
  type: t,
  size: n,
  htmlSize: r,
  id: i,
  className: a,
  isValid: o = !1,
  isInvalid: l = !1,
  plaintext: s,
  readOnly: c,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: u = "input",
  ...f
}, d) => {
  const {
    controlId: h
  } = Te(dt);
  return e = se(e, "form-control"), process.env.NODE_ENV !== "production" && Ul(h == null || !i, "`controlId` is ignored on `<FormControl>` when `id` is specified."), /* @__PURE__ */ m.jsx(u, {
    ...f,
    type: t,
    size: r,
    ref: d,
    readOnly: c,
    id: i || h,
    className: Z(a, s ? `${e}-plaintext` : e, n && `${e}-${n}`, t === "color" && `${e}-color`, o && "is-valid", l && "is-invalid")
  });
});
Yl.displayName = "FormControl";
const _1 = Object.assign(Yl, {
  Feedback: lr
}), Gl = /* @__PURE__ */ $.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = "div",
  ...r
}, i) => (t = se(t, "form-floating"), /* @__PURE__ */ m.jsx(n, {
  ref: i,
  className: Z(e, t),
  ...r
})));
Gl.displayName = "FormFloating";
const Xi = /* @__PURE__ */ $.forwardRef(({
  controlId: e,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: t = "div",
  ...n
}, r) => {
  const i = Ye(() => ({
    controlId: e
  }), [e]);
  return /* @__PURE__ */ m.jsx(dt.Provider, {
    value: i,
    children: /* @__PURE__ */ m.jsx(t, {
      ...n,
      ref: r
    })
  });
});
Xi.displayName = "FormGroup";
const Kl = /* @__PURE__ */ $.forwardRef(({
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
  } = Te(dt);
  t = se(t, "form-label");
  let c = "col-form-label";
  typeof n == "string" && (c = `${c} ${c}-${n}`);
  const u = Z(i, t, r && "visually-hidden", n && c);
  return process.env.NODE_ENV !== "production" && Ul(s == null || !a, "`controlId` is ignored on `<FormLabel>` when `htmlFor` is specified."), a = a || s, n ? /* @__PURE__ */ m.jsx(ce, {
    ref: l,
    as: "label",
    className: u,
    htmlFor: a,
    ...o
  }) : (
    // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    /* @__PURE__ */ m.jsx(e, {
      ref: l,
      className: u,
      htmlFor: a,
      ...o
    })
  );
});
Kl.displayName = "FormLabel";
const Xl = /* @__PURE__ */ $.forwardRef(({
  bsPrefix: e,
  className: t,
  id: n,
  ...r
}, i) => {
  const {
    controlId: a
  } = Te(dt);
  return e = se(e, "form-range"), /* @__PURE__ */ m.jsx("input", {
    ...r,
    type: "range",
    ref: i,
    className: Z(t, e),
    id: n || a
  });
});
Xl.displayName = "FormRange";
const Ql = /* @__PURE__ */ $.forwardRef(({
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
    controlId: c
  } = Te(dt);
  return e = se(e, "form-select"), /* @__PURE__ */ m.jsx("select", {
    ...l,
    size: n,
    ref: s,
    className: Z(r, e, t && `${e}-${t}`, i && "is-valid", a && "is-invalid"),
    id: o || c
  });
});
Ql.displayName = "FormSelect";
const Jl = /* @__PURE__ */ $.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    bsPrefix: e,
    className: t,
    as: n = "small",
    muted: r,
    ...i
  }, a) => (e = se(e, "form-text"), /* @__PURE__ */ m.jsx(n, {
    ...i,
    ref: a,
    className: Z(t, e, r && "text-muted")
  }))
);
Jl.displayName = "FormText";
const Zl = /* @__PURE__ */ $.forwardRef((e, t) => /* @__PURE__ */ m.jsx(qn, {
  ...e,
  ref: t,
  type: "switch"
}));
Zl.displayName = "Switch";
const M1 = Object.assign(Zl, {
  Input: qn.Input,
  Label: qn.Label
}), es = /* @__PURE__ */ $.forwardRef(({
  bsPrefix: e,
  className: t,
  children: n,
  controlId: r,
  label: i,
  ...a
}, o) => (e = se(e, "form-floating"), /* @__PURE__ */ m.jsxs(Xi, {
  ref: o,
  className: Z(t, e),
  controlId: r,
  ...a,
  children: [n, /* @__PURE__ */ m.jsx("label", {
    htmlFor: r,
    children: i
  })]
})));
es.displayName = "FloatingLabel";
const L1 = {
  /**
   * The Form `ref` will be forwarded to the underlying element,
   * which means, unless it's rendered `as` a composite component,
   * it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias ref
   */
  _ref: P.any,
  /**
   * Mark a form as having been validated. Setting it to `true` will
   * toggle any validation styles on the forms elements.
   */
  validated: P.bool,
  as: P.elementType
}, Qi = /* @__PURE__ */ $.forwardRef(({
  className: e,
  validated: t,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: n = "form",
  ...r
}, i) => /* @__PURE__ */ m.jsx(n, {
  ...r,
  ref: i,
  className: Z(e, t && "was-validated")
}));
Qi.displayName = "Form";
Qi.propTypes = L1;
const Xe = Object.assign(Qi, {
  Group: Xi,
  Control: _1,
  Floating: Gl,
  Check: qn,
  Switch: M1,
  Label: Kl,
  Text: Jl,
  Range: Xl,
  Select: Ql,
  FloatingLabel: es
}), Xa = (e) => !e || typeof e == "function" ? e : (t) => {
  e.current = t;
};
function F1(e, t) {
  const n = Xa(e), r = Xa(t);
  return (i) => {
    n && n(i), r && r(i);
  };
}
function sr(e, t) {
  return Ye(() => F1(e, t), [e, t]);
}
const ts = /* @__PURE__ */ $.createContext(null), D1 = ["as", "active", "eventKey"];
function B1(e, t) {
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
  const o = Te(Un), l = Te(Yi), s = Te(ts);
  let c = n;
  const u = {
    role: i
  };
  if (l) {
    !i && l.role === "tablist" && (u.role = "tab");
    const f = l.getControllerId(e ?? null), d = l.getControlledId(e ?? null);
    u[or("event-key")] = e, u.id = f || r, c = n == null && e != null ? l.activeKey === e : n, (c || !(s != null && s.unmountOnExit) && !(s != null && s.mountOnEnter)) && (u["aria-controls"] = d);
  }
  return u.role === "tab" && (u["aria-selected"] = c, c || (u.tabIndex = -1), a && (u.tabIndex = -1, u["aria-disabled"] = !0)), u.onClick = ut((f) => {
    a || (t == null || t(f), e != null && o && !f.isPropagationStopped() && o(e, f));
  }), [u, {
    isActive: c
  }];
}
const rs = /* @__PURE__ */ $.forwardRef((e, t) => {
  let {
    as: n = Pl,
    active: r,
    eventKey: i
  } = e, a = B1(e, D1);
  const [o, l] = ns(Object.assign({
    key: qi(i, a.href),
    active: r
  }, a));
  return o[or("active")] = l.isActive, /* @__PURE__ */ m.jsx(n, Object.assign({}, a, o, {
    ref: t
  }));
});
rs.displayName = "NavItem";
const $1 = ["as", "onSelect", "activeKey", "role", "onKeyDown"];
function H1(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
const Qa = () => {
}, Ja = or("event-key"), is = /* @__PURE__ */ $.forwardRef((e, t) => {
  let {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: n = "div",
    onSelect: r,
    activeKey: i,
    role: a,
    onKeyDown: o
  } = e, l = H1(e, $1);
  const s = S1(), c = Ne(!1), u = Te(Un), f = Te(ts);
  let d, h;
  f && (a = a || "tablist", i = f.activeKey, d = f.getControlledId, h = f.getControllerId);
  const y = Ne(null), v = (E) => {
    const O = y.current;
    if (!O) return null;
    const S = At(O, `[${Ja}]:not([aria-disabled=true])`), w = O.querySelector("[aria-selected=true]");
    if (!w || w !== document.activeElement) return null;
    const F = S.indexOf(w);
    if (F === -1) return null;
    let Q = F + E;
    return Q >= S.length && (Q = 0), Q < 0 && (Q = S.length - 1), S[Q];
  }, k = (E, O) => {
    E != null && (r == null || r(E, O), u == null || u(E, O));
  }, b = (E) => {
    if (o == null || o(E), !f)
      return;
    let O;
    switch (E.key) {
      case "ArrowLeft":
      case "ArrowUp":
        O = v(-1);
        break;
      case "ArrowRight":
      case "ArrowDown":
        O = v(1);
        break;
      default:
        return;
    }
    O && (E.preventDefault(), k(O.dataset[j1("EventKey")] || null, E), c.current = !0, s());
  };
  _e(() => {
    if (y.current && c.current) {
      const E = y.current.querySelector(`[${Ja}][aria-selected=true]`);
      E == null || E.focus();
    }
    c.current = !1;
  });
  const A = sr(t, y);
  return /* @__PURE__ */ m.jsx(Un.Provider, {
    value: k,
    children: /* @__PURE__ */ m.jsx(Yi.Provider, {
      value: {
        role: a,
        // used by NavLink to determine it's role
        activeKey: qi(i),
        getControlledId: d || Qa,
        getControllerId: h || Qa
      },
      children: /* @__PURE__ */ m.jsx(n, Object.assign({}, l, {
        onKeyDown: b,
        ref: A,
        role: a
      }))
    })
  });
});
is.displayName = "Nav";
const V1 = Object.assign(is, {
  Item: rs
});
function Nr(e) {
  e === void 0 && (e = Mi());
  try {
    var t = e.activeElement;
    return !t || !t.nodeName ? null : t;
  } catch {
    return e.body;
  }
}
function U1(e) {
  const t = Ne(e);
  return t.current = e, t;
}
function W1(e) {
  const t = U1(e);
  _e(() => () => t.current(), []);
}
function q1(e = document) {
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
    return q1(this.ownerDocument);
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
    }, t.scrollBarWidth && (n[r] = `${parseInt(ft(i, r) || "0", 10) + t.scrollBarWidth}px`), i.setAttribute(Za, ""), ft(i, n);
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
const Or = (e, t) => ir ? e == null ? (t || Mi()).body : (typeof e == "function" && (e = e()), e && "current" in e && (e = e.current), e && ("nodeType" in e || e.getBoundingClientRect) ? e : null) : null;
function Y1(e, t) {
  const n = Gi(), [r, i] = Je(() => Or(e, n == null ? void 0 : n.document));
  if (!r) {
    const a = Or(e);
    a && i(a);
  }
  return _e(() => {
  }, [t, r]), _e(() => {
    const a = Or(e);
    a !== r && i(a);
  }, [e, r]), r;
}
function G1({
  children: e,
  in: t,
  onExited: n,
  mountOnEnter: r,
  unmountOnExit: i
}) {
  const a = Ne(null), o = Ne(t), l = ut(n);
  _e(() => {
    t ? o.current = !0 : l(a.current);
  }, [t, l]);
  const s = sr(a, Gt(e)), c = /* @__PURE__ */ _i(e, {
    ref: s
  });
  return t ? c : i || !o.current && r ? null : c;
}
const K1 = ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "addEndListener", "children"];
function X1(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
function Q1(e) {
  let {
    onEnter: t,
    onEntering: n,
    onEntered: r,
    onExit: i,
    onExiting: a,
    onExited: o,
    addEndListener: l,
    children: s
  } = e, c = X1(e, K1);
  const u = Ne(null), f = sr(u, Gt(s)), d = (O) => (S) => {
    O && u.current && O(u.current, S);
  }, h = Se(d(t), [t]), y = Se(d(n), [n]), v = Se(d(r), [r]), k = Se(d(i), [i]), b = Se(d(a), [a]), A = Se(d(o), [o]), E = Se(d(l), [l]);
  return Object.assign({}, c, {
    nodeRef: u
  }, t && {
    onEnter: h
  }, n && {
    onEntering: y
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
    children: typeof s == "function" ? (O, S) => (
      // TODO: Types for RTG missing innerProps, so need to cast.
      s(O, Object.assign({}, S, {
        ref: f
      }))
    ) : /* @__PURE__ */ _i(s, {
      ref: f
    })
  });
}
const J1 = ["component"];
function Z1(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
const ef = /* @__PURE__ */ $.forwardRef((e, t) => {
  let {
    component: n
  } = e, r = Z1(e, J1);
  const i = Q1(r);
  return /* @__PURE__ */ m.jsx(n, Object.assign({
    ref: t
  }, i));
});
function tf({
  in: e,
  onTransition: t
}) {
  const n = Ne(null), r = Ne(!0), i = ut(t);
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
function nf({
  children: e,
  in: t,
  onExited: n,
  onEntered: r,
  transition: i
}) {
  const [a, o] = Je(!t);
  t && a && o(!1);
  const l = tf({
    in: !!t,
    onTransition: (c) => {
      const u = () => {
        c.isStale() || (c.in ? r == null || r(c.element, c.initial) : (o(!0), n == null || n(c.element)));
      };
      Promise.resolve(i(c)).then(u, (f) => {
        throw c.in || o(!0), f;
      });
    }
  }), s = sr(l, Gt(e));
  return a && !t ? null : /* @__PURE__ */ _i(e, {
    ref: s
  });
}
function eo(e, t, n) {
  return e ? /* @__PURE__ */ m.jsx(ef, Object.assign({}, n, {
    component: e
  })) : t ? /* @__PURE__ */ m.jsx(nf, Object.assign({}, n, {
    transition: t
  })) : /* @__PURE__ */ m.jsx(G1, Object.assign({}, n));
}
const rf = ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "runTransition", "backdropTransition", "runBackdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"];
function af(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
let jr;
function of(e) {
  return jr || (jr = new Ji({
    ownerDocument: e == null ? void 0 : e.document
  })), jr;
}
function lf(e) {
  const t = Gi(), n = e || of(t), r = Ne({
    dialog: null,
    backdrop: null
  });
  return Object.assign(r.current, {
    add: () => n.add(r.current),
    remove: () => n.remove(r.current),
    isTopModal: () => n.isTopModal(r.current),
    setDialogRef: Se((i) => {
      r.current.dialog = i;
    }, []),
    setBackdropRef: Se((i) => {
      r.current.backdrop = i;
    }, [])
  });
}
const as = /* @__PURE__ */ pu((e, t) => {
  let {
    show: n = !1,
    role: r = "dialog",
    className: i,
    style: a,
    children: o,
    backdrop: l = !0,
    keyboard: s = !0,
    onBackdropClick: c,
    onEscapeKeyDown: u,
    transition: f,
    runTransition: d,
    backdropTransition: h,
    runBackdropTransition: y,
    autoFocus: v = !0,
    enforceFocus: k = !0,
    restoreFocus: b = !0,
    restoreFocusOptions: A,
    renderDialog: E,
    renderBackdrop: O = (ge) => /* @__PURE__ */ m.jsx("div", Object.assign({}, ge)),
    manager: S,
    container: w,
    onShow: F,
    onHide: Q = () => {
    },
    onExit: ne,
    onExited: C,
    onExiting: L,
    onEnter: B,
    onEntering: D,
    onEntered: _
  } = e, q = af(e, rf);
  const ae = Gi(), fe = Y1(w), de = lf(S), we = s1(), p = c1(n), [I, G] = Je(!n), g = Ne(null);
  gu(t, () => de, [de]), ir && !p && n && (g.current = Nr(ae == null ? void 0 : ae.document)), n && I && G(!1);
  const M = ut(() => {
    if (de.add(), te.current = Vn(document, "keydown", ee), re.current = Vn(
      document,
      "focus",
      // the timeout is necessary b/c this will run before the new modal is mounted
      // and so steals focus from it
      () => setTimeout(U),
      !0
    ), F && F(), v) {
      var ge, St;
      const lt = Nr((ge = (St = de.dialog) == null ? void 0 : St.ownerDocument) != null ? ge : ae == null ? void 0 : ae.document);
      de.dialog && lt && !Ga(de.dialog, lt) && (g.current = lt, de.dialog.focus());
    }
  }), X = ut(() => {
    if (de.remove(), te.current == null || te.current(), re.current == null || re.current(), b) {
      var ge;
      (ge = g.current) == null || ge.focus == null || ge.focus(A), g.current = null;
    }
  });
  _e(() => {
    !n || !fe || M();
  }, [
    n,
    fe,
    /* should never change: */
    M
  ]), _e(() => {
    I && X();
  }, [I, X]), W1(() => {
    X();
  });
  const U = ut(() => {
    if (!k || !we() || !de.isTopModal())
      return;
    const ge = Nr(ae == null ? void 0 : ae.document);
    de.dialog && ge && !Ga(de.dialog, ge) && de.dialog.focus();
  }), J = ut((ge) => {
    ge.target === ge.currentTarget && (c == null || c(ge), l === !0 && Q());
  }), ee = ut((ge) => {
    s && Wu(ge) && de.isTopModal() && (u == null || u(ge), ge.defaultPrevented || Q());
  }), re = Ne(), te = Ne(), Ce = (...ge) => {
    G(!0), C == null || C(...ge);
  };
  if (!fe)
    return null;
  const R = Object.assign({
    role: r,
    ref: de.setDialogRef,
    // apparently only works on the dialog role element
    "aria-modal": r === "dialog" ? !0 : void 0
  }, q, {
    style: a,
    className: i,
    tabIndex: -1
  });
  let Oe = E ? E(R) : /* @__PURE__ */ m.jsx("div", Object.assign({}, R, {
    children: /* @__PURE__ */ $.cloneElement(o, {
      role: "document"
    })
  }));
  Oe = eo(f, d, {
    unmountOnExit: !0,
    mountOnEnter: !0,
    appear: !0,
    in: !!n,
    onExit: ne,
    onExiting: L,
    onExited: Ce,
    onEnter: B,
    onEntering: D,
    onEntered: _,
    children: Oe
  });
  let De = null;
  return l && (De = O({
    ref: de.setBackdropRef,
    onClick: J
  }), De = eo(h, y, {
    in: !!n,
    appear: !0,
    mountOnEnter: !0,
    unmountOnExit: !0,
    children: De
  })), /* @__PURE__ */ m.jsx(m.Fragment, {
    children: /* @__PURE__ */ $t.createPortal(/* @__PURE__ */ m.jsxs(m.Fragment, {
      children: [De, Oe]
    }), fe)
  });
});
as.displayName = "Modal";
const sf = Object.assign(as, {
  Manager: Ji
});
function cf(e, t) {
  return e.classList ? e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
function uf(e, t) {
  e.classList ? e.classList.add(t) : cf(e, t) || (typeof e.className == "string" ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t));
}
function to(e, t) {
  return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function ff(e, t) {
  e.classList ? e.classList.remove(t) : typeof e.className == "string" ? e.className = to(e.className, t) : e.setAttribute("class", to(e.className && e.className.baseVal || "", t));
}
const _t = {
  FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  STICKY_CONTENT: ".sticky-top",
  NAVBAR_TOGGLER: ".navbar-toggler"
};
class os extends Ji {
  adjustAndStore(t, n, r) {
    const i = n.style[t];
    n.dataset[t] = i, ft(n, {
      [t]: `${parseFloat(ft(n, t)) + r}px`
    });
  }
  restore(t, n) {
    const r = n.dataset[t];
    r !== void 0 && (delete n.dataset[t], ft(n, {
      [t]: r
    }));
  }
  setContainerStyle(t) {
    super.setContainerStyle(t);
    const n = this.getElement();
    if (uf(n, "modal-open"), !t.scrollBarWidth) return;
    const r = this.isRTL ? "paddingLeft" : "paddingRight", i = this.isRTL ? "marginLeft" : "marginRight";
    At(n, _t.FIXED_CONTENT).forEach((a) => this.adjustAndStore(r, a, t.scrollBarWidth)), At(n, _t.STICKY_CONTENT).forEach((a) => this.adjustAndStore(i, a, -t.scrollBarWidth)), At(n, _t.NAVBAR_TOGGLER).forEach((a) => this.adjustAndStore(i, a, t.scrollBarWidth));
  }
  removeContainerStyle(t) {
    super.removeContainerStyle(t);
    const n = this.getElement();
    ff(n, "modal-open");
    const r = this.isRTL ? "paddingLeft" : "paddingRight", i = this.isRTL ? "marginLeft" : "marginRight";
    At(n, _t.FIXED_CONTENT).forEach((a) => this.restore(r, a)), At(n, _t.STICKY_CONTENT).forEach((a) => this.restore(i, a)), At(n, _t.NAVBAR_TOGGLER).forEach((a) => this.restore(i, a));
  }
}
let zr;
function df(e) {
  return zr || (zr = new os(e)), zr;
}
const ls = /* @__PURE__ */ $.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onHide() {
  }
}), hf = /* @__PURE__ */ $.forwardRef(({
  closeLabel: e = "Close",
  closeVariant: t,
  closeButton: n = !1,
  onHide: r,
  children: i,
  ...a
}, o) => {
  const l = Te(ls), s = ar(() => {
    l == null || l.onHide(), r == null || r();
  });
  return /* @__PURE__ */ m.jsxs("div", {
    ref: o,
    ...a,
    children: [i, n && /* @__PURE__ */ m.jsx(Vi, {
      "aria-label": e,
      variant: t,
      onClick: s
    })]
  });
}), ss = /* @__PURE__ */ $.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = "div",
  ...r
}, i) => (t = se(t, "nav-item"), /* @__PURE__ */ m.jsx(n, {
  ref: i,
  className: Z(e, t),
  ...r
})));
ss.displayName = "NavItem";
const cs = /* @__PURE__ */ $.forwardRef(({
  bsPrefix: e,
  className: t,
  as: n = Hi,
  active: r,
  eventKey: i,
  disabled: a = !1,
  ...o
}, l) => {
  e = se(e, "nav-link");
  const [s, c] = ns({
    key: qi(i, o.href),
    active: r,
    disabled: a,
    ...o
  });
  return /* @__PURE__ */ m.jsx(n, {
    ...o,
    ...s,
    ref: l,
    disabled: a,
    className: Z(t, e, a && "disabled", c.isActive && "active")
  });
});
cs.displayName = "NavLink";
const us = /* @__PURE__ */ $.forwardRef((e, t) => {
  const {
    as: n = "div",
    bsPrefix: r,
    variant: i,
    fill: a = !1,
    justify: o = !1,
    navbar: l,
    navbarScroll: s,
    className: c,
    activeKey: u,
    ...f
  } = Tl(e, {
    activeKey: "onSelect"
  }), d = se(r, "nav");
  let h, y, v = !1;
  const k = Te(Kt), b = Te(Wi);
  return k ? (h = k.bsPrefix, v = l ?? !0) : b && ({
    cardHeaderBsPrefix: y
  } = b), /* @__PURE__ */ m.jsx(V1, {
    as: n,
    ref: t,
    activeKey: u,
    className: Z(c, {
      [d]: !v,
      [`${h}-nav`]: v,
      [`${h}-nav-scroll`]: v && s,
      [`${y}-${i}`]: !!y,
      [`${d}-${i}`]: !!i,
      [`${d}-fill`]: a,
      [`${d}-justified`]: o
    }),
    ...f
  });
});
us.displayName = "Nav";
const Mt = Object.assign(us, {
  Item: ss,
  Link: cs
}), fs = /* @__PURE__ */ $.forwardRef(({
  bsPrefix: e,
  className: t,
  as: n,
  ...r
}, i) => {
  e = se(e, "navbar-brand");
  const a = n || (r.href ? "a" : "span");
  return /* @__PURE__ */ m.jsx(a, {
    ...r,
    ref: i,
    className: Z(t, e)
  });
});
fs.displayName = "NavbarBrand";
const ds = /* @__PURE__ */ $.forwardRef(({
  children: e,
  bsPrefix: t,
  ...n
}, r) => {
  t = se(t, "navbar-collapse");
  const i = Te(Kt);
  return /* @__PURE__ */ m.jsx(a1, {
    in: !!(i && i.expanded),
    ...n,
    children: /* @__PURE__ */ m.jsx("div", {
      ref: r,
      className: t,
      children: e
    })
  });
});
ds.displayName = "NavbarCollapse";
const hs = /* @__PURE__ */ $.forwardRef(({
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
    expanded: c
  } = Te(Kt) || {}, u = ar((f) => {
    a && a(f), s && s();
  });
  return i === "button" && (o.type = "button"), /* @__PURE__ */ m.jsx(i, {
    ...o,
    ref: l,
    onClick: u,
    "aria-label": r,
    className: Z(t, e, !c && "collapsed"),
    children: n || /* @__PURE__ */ m.jsx("span", {
      className: `${e}-icon`
    })
  });
});
hs.displayName = "NavbarToggle";
const ai = /* @__PURE__ */ new WeakMap(), no = (e, t) => {
  if (!e || !t) return;
  const n = ai.get(t) || /* @__PURE__ */ new Map();
  ai.set(t, n);
  let r = n.get(e);
  return r || (r = t.matchMedia(e), r.refCount = 0, n.set(r.media, r)), r;
};
function mf(e, t = typeof window > "u" ? void 0 : window) {
  const n = no(e, t), [r, i] = Je(() => n ? n.matches : !1);
  return P1(() => {
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
function pf(e) {
  const t = Object.keys(e);
  function n(l, s) {
    return l === s ? s : l ? `${l} and ${s}` : s;
  }
  function r(l) {
    return t[Math.min(t.indexOf(l) + 1, t.length - 1)];
  }
  function i(l) {
    const s = r(l);
    let c = e[s];
    return typeof c == "number" ? c = `${c - 0.2}px` : c = `calc(${c} - 0.2px)`, `(max-width: ${c})`;
  }
  function a(l) {
    let s = e[l];
    return typeof s == "number" && (s = `${s}px`), `(min-width: ${s})`;
  }
  function o(l, s, c) {
    let u;
    typeof l == "object" ? (u = l, c = s, s = !0) : (s = s || !0, u = {
      [l]: s
    });
    let f = Ye(() => Object.entries(u).reduce((d, [h, y]) => ((y === "up" || y === !0) && (d = n(d, a(h))), (y === "down" || y === !0) && (d = n(d, i(h))), d), ""), [JSON.stringify(u)]);
    return mf(f, c);
  }
  return o;
}
const gf = pf({
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
}), ms = /* @__PURE__ */ $.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = "div",
  ...r
}, i) => (t = se(t, "offcanvas-body"), /* @__PURE__ */ m.jsx(n, {
  ref: i,
  className: Z(e, t),
  ...r
})));
ms.displayName = "OffcanvasBody";
const yf = {
  [Ze]: "show",
  [ct]: "show"
}, ps = /* @__PURE__ */ $.forwardRef(({
  bsPrefix: e,
  className: t,
  children: n,
  in: r = !1,
  mountOnEnter: i = !1,
  unmountOnExit: a = !1,
  appear: o = !1,
  ...l
}, s) => (e = se(e, "offcanvas"), /* @__PURE__ */ m.jsx(Di, {
  ref: s,
  addEndListener: Fi,
  in: r,
  mountOnEnter: i,
  unmountOnExit: a,
  appear: o,
  ...l,
  childRef: Gt(n),
  children: (c, u) => /* @__PURE__ */ $.cloneElement(n, {
    ...u,
    className: Z(t, n.props.className, (c === Ze || c === pn) && `${e}-toggling`, yf[c])
  })
})));
ps.displayName = "OffcanvasToggling";
const gs = /* @__PURE__ */ $.forwardRef(({
  bsPrefix: e,
  className: t,
  closeLabel: n = "Close",
  closeButton: r = !1,
  ...i
}, a) => (e = se(e, "offcanvas-header"), /* @__PURE__ */ m.jsx(hf, {
  ref: a,
  ...i,
  className: Z(t, e),
  closeLabel: n,
  closeButton: r
})));
gs.displayName = "OffcanvasHeader";
const xf = Bi("h5"), ys = /* @__PURE__ */ $.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = xf,
  ...r
}, i) => (t = se(t, "offcanvas-title"), /* @__PURE__ */ m.jsx(n, {
  ref: i,
  className: Z(e, t),
  ...r
})));
ys.displayName = "OffcanvasTitle";
function bf(e) {
  return /* @__PURE__ */ m.jsx(ps, {
    ...e
  });
}
function vf(e) {
  return /* @__PURE__ */ m.jsx(Rl, {
    ...e
  });
}
const xs = /* @__PURE__ */ $.forwardRef(({
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
  scroll: c = !1,
  onEscapeKeyDown: u,
  onShow: f,
  onHide: d,
  container: h,
  autoFocus: y = !0,
  enforceFocus: v = !0,
  restoreFocus: k = !0,
  restoreFocusOptions: b,
  onEntered: A,
  onExit: E,
  onExiting: O,
  onEnter: S,
  onEntering: w,
  onExited: F,
  backdropClassName: Q,
  manager: ne,
  renderStaticNode: C = !1,
  ...L
}, B) => {
  const D = Ne();
  e = se(e, "offcanvas");
  const [_, q] = Je(!1), ae = ar(d), fe = gf(a || "xs", "up");
  _e(() => {
    q(a ? o && !fe : o);
  }, [o, a, fe]);
  const de = Ye(() => ({
    onHide: ae
  }), [ae]);
  function we() {
    return ne || (c ? (D.current || (D.current = new os({
      handleContainerOverflow: !1
    })), D.current) : df());
  }
  const p = (M, ...X) => {
    M && (M.style.visibility = "visible"), S == null || S(M, ...X);
  }, I = (M, ...X) => {
    M && (M.style.visibility = ""), F == null || F(...X);
  }, G = Se((M) => /* @__PURE__ */ m.jsx("div", {
    ...M,
    className: Z(`${e}-backdrop`, Q)
  }), [Q, e]), g = (M) => /* @__PURE__ */ m.jsx("div", {
    ...M,
    ...L,
    className: Z(t, a ? `${e}-${a}` : e, `${e}-${i}`),
    "aria-labelledby": r,
    children: n
  });
  return /* @__PURE__ */ m.jsxs(m.Fragment, {
    children: [!_ && (a || C) && g({}), /* @__PURE__ */ m.jsx(ls.Provider, {
      value: de,
      children: /* @__PURE__ */ m.jsx(sf, {
        show: _,
        ref: B,
        backdrop: l,
        container: h,
        keyboard: s,
        autoFocus: y,
        enforceFocus: v && !c,
        restoreFocus: k,
        restoreFocusOptions: b,
        onEscapeKeyDown: u,
        onShow: f,
        onHide: ae,
        onEnter: p,
        onEntering: w,
        onEntered: A,
        onExit: E,
        onExiting: O,
        onExited: I,
        manager: we(),
        transition: bf,
        backdropTransition: vf,
        renderBackdrop: G,
        renderDialog: g
      })
    })]
  });
});
xs.displayName = "Offcanvas";
const kf = Object.assign(xs, {
  Body: ms,
  Header: gs,
  Title: ys
}), bs = /* @__PURE__ */ $.forwardRef(({
  onHide: e,
  ...t
}, n) => {
  const r = Te(Kt), i = ar(() => {
    r == null || r.onToggle == null || r.onToggle(), e == null || e();
  });
  return /* @__PURE__ */ m.jsx(kf, {
    ref: n,
    show: !!(r != null && r.expanded),
    ...t,
    renderStaticNode: !0,
    onHide: i
  });
});
bs.displayName = "NavbarOffcanvas";
const vs = /* @__PURE__ */ $.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = "span",
  ...r
}, i) => (t = se(t, "navbar-text"), /* @__PURE__ */ m.jsx(n, {
  ref: i,
  className: Z(e, t),
  ...r
})));
vs.displayName = "NavbarText";
const ks = /* @__PURE__ */ $.forwardRef((e, t) => {
  const {
    bsPrefix: n,
    expand: r = !0,
    variant: i = "light",
    bg: a,
    fixed: o,
    sticky: l,
    className: s,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: c = "nav",
    expanded: u,
    onToggle: f,
    onSelect: d,
    collapseOnSelect: h = !1,
    ...y
  } = Tl(e, {
    expanded: "onToggle"
  }), v = se(n, "navbar"), k = Se((...E) => {
    d == null || d(...E), h && u && (f == null || f(!1));
  }, [d, h, u, f]);
  y.role === void 0 && c !== "nav" && (y.role = "navigation");
  let b = `${v}-expand`;
  typeof r == "string" && (b = `${b}-${r}`);
  const A = Ye(() => ({
    onToggle: () => f == null ? void 0 : f(!u),
    bsPrefix: v,
    expanded: !!u,
    expand: r
  }), [v, u, r, f]);
  return /* @__PURE__ */ m.jsx(Kt.Provider, {
    value: A,
    children: /* @__PURE__ */ m.jsx(Un.Provider, {
      value: k,
      children: /* @__PURE__ */ m.jsx(c, {
        ref: t,
        ...y,
        className: Z(s, v, r && b, i && `${v}-${i}`, a && `bg-${a}`, l && `sticky-${l}`, o && `fixed-${o}`)
      })
    })
  });
});
ks.displayName = "Navbar";
const Pn = Object.assign(ks, {
  Brand: fs,
  Collapse: ds,
  Offcanvas: bs,
  Text: vs,
  Toggle: hs
}), Zi = /* @__PURE__ */ $.forwardRef(({
  active: e = !1,
  disabled: t = !1,
  className: n,
  style: r,
  activeLabel: i = "(current)",
  children: a,
  linkStyle: o,
  linkClassName: l,
  as: s = Hi,
  ...c
}, u) => {
  const f = e || t ? "span" : s;
  return /* @__PURE__ */ m.jsx("li", {
    ref: u,
    style: r,
    className: Z(n, "page-item", {
      active: e,
      disabled: t
    }),
    children: /* @__PURE__ */ m.jsxs(f, {
      className: Z("page-link", l),
      style: o,
      ...c,
      children: [a, e && i && /* @__PURE__ */ m.jsx("span", {
        className: "visually-hidden",
        children: i
      })]
    })
  });
});
Zi.displayName = "PageItem";
function wn(e, t, n = e) {
  const r = /* @__PURE__ */ $.forwardRef(({
    children: i,
    ...a
  }, o) => /* @__PURE__ */ m.jsxs(Zi, {
    ...a,
    ref: o,
    children: [/* @__PURE__ */ m.jsx("span", {
      "aria-hidden": "true",
      children: i || t
    }), /* @__PURE__ */ m.jsx("span", {
      className: "visually-hidden",
      children: n
    })]
  }));
  return r.displayName = e, r;
}
const wf = wn("First", "«"), Ef = wn("Prev", "‹", "Previous"), Cf = wn("Ellipsis", "…", "More"), Sf = wn("Next", "›"), Tf = wn("Last", "»"), ws = /* @__PURE__ */ $.forwardRef(({
  bsPrefix: e,
  className: t,
  size: n,
  ...r
}, i) => {
  const a = se(e, "pagination");
  return /* @__PURE__ */ m.jsx("ul", {
    ref: i,
    ...r,
    className: Z(t, a, n && `${a}-${n}`)
  });
});
ws.displayName = "Pagination";
const Lt = Object.assign(ws, {
  First: wf,
  Prev: Ef,
  Ellipsis: Cf,
  Item: Zi,
  Next: Sf,
  Last: Tf
}), be = /* @__PURE__ */ $.forwardRef(({
  bsPrefix: e,
  className: t,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: n = "div",
  ...r
}, i) => {
  const a = se(e, "row"), o = Al(), l = Nl(), s = `${a}-cols`, c = [];
  return o.forEach((u) => {
    const f = r[u];
    delete r[u];
    let d;
    f != null && typeof f == "object" ? {
      cols: d
    } = f : d = f;
    const h = u !== l ? `-${u}` : "";
    d != null && c.push(`${s}${h}-${d}`);
  }), /* @__PURE__ */ m.jsx(n, {
    ref: i,
    ...r,
    className: Z(t, a, ...c)
  });
});
be.displayName = "Row";
const o6 = ({ image_link: e }) => /* @__PURE__ */ m.jsx(Le, { children: /* @__PURE__ */ m.jsx(be, { className: "rounded background-color-body mt-3 p-2", children: /* @__PURE__ */ m.jsx(ce, { className: "text-center article-image-container m-2 rounded", children: /* @__PURE__ */ m.jsx("img", { src: e, className: "img-fluid rounded p-2", alt: "Article" }) }) }) }), l6 = ({ children: e }) => /* @__PURE__ */ m.jsx("div", { className: "custom-body", children: /* @__PURE__ */ m.jsx(Le, { children: /* @__PURE__ */ m.jsx(be, { children: /* @__PURE__ */ m.jsx(ce, { children: e }) }) }) }), s6 = () => {
  const [e, t] = Je(!1), [n, r] = Je(!1), i = (/* @__PURE__ */ new Date()).getFullYear(), a = async (o) => {
    o.preventDefault();
    const l = o.currentTarget;
    if (l.checkValidity() === !1) {
      console.log("Form is invalid"), o.preventDefault(), o.stopPropagation(), r(!0);
      return;
    }
    const s = new FormData(l), c = {};
    s.forEach((u, f) => {
      c[f] = u.toString();
    });
    try {
      const u = await fetch("https://meabhi.me/message/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(c)
      });
      if (u.ok) {
        const f = await u.json();
        console.log("Form submitted successfully:", f), t(!0), r(!1), setTimeout(() => {
          l.reset(), t(!1);
        }, 2e3);
      } else
        throw new Error("Network response was not ok");
    } catch (u) {
      console.error("Error submitting form:", u);
    }
  };
  return /* @__PURE__ */ m.jsx(Le, { fluid: !0, className: "footer-header-color ", children: /* @__PURE__ */ m.jsxs(Xe, { noValidate: !0, validated: n, onSubmit: a, children: [
    /* @__PURE__ */ m.jsx(be, { id: "contact", className: "text-center", children: /* @__PURE__ */ m.jsx(ce, { className: "text-center", children: /* @__PURE__ */ m.jsx("h1", { className: "bio-font font-color-class heading-responsive-font p-2 mt-3", children: "Contact Me" }) }) }),
    /* @__PURE__ */ m.jsxs(be, { id: "contact", className: "text-center p-2", children: [
      /* @__PURE__ */ m.jsx(ce, { xs: 12, sm: 12, md: 4 }),
      /* @__PURE__ */ m.jsx(ce, { xs: 12, sm: 12, md: 4, children: /* @__PURE__ */ m.jsxs(Xe.Group, { controlId: "validationName", children: [
        /* @__PURE__ */ m.jsx(
          Xe.Control,
          {
            required: !0,
            type: "text",
            name: "name",
            placeholder: "Name",
            className: "me-2 custom-border form-control custom-placeholder"
          }
        ),
        /* @__PURE__ */ m.jsx(Xe.Control.Feedback, { type: "invalid", children: "Please provide your name." })
      ] }) }),
      /* @__PURE__ */ m.jsx(ce, { xs: 12, sm: 12, md: 4 })
    ] }),
    /* @__PURE__ */ m.jsxs(be, { id: "contact", className: "text-center p-2", children: [
      /* @__PURE__ */ m.jsx(ce, { xs: 12, sm: 12, md: 4 }),
      /* @__PURE__ */ m.jsx(ce, { xs: 12, sm: 12, md: 4, children: /* @__PURE__ */ m.jsxs(Xe.Group, { controlId: "validationEmail", children: [
        /* @__PURE__ */ m.jsx(
          Xe.Control,
          {
            required: !0,
            type: "email",
            name: "email",
            placeholder: "Email",
            className: "me-2 custom-border form-control custom-placeholder"
          }
        ),
        /* @__PURE__ */ m.jsx(Xe.Control.Feedback, { type: "invalid", children: "Please provide a valid email." })
      ] }) }),
      /* @__PURE__ */ m.jsx(ce, { xs: 12, sm: 12, md: 4 })
    ] }),
    /* @__PURE__ */ m.jsxs(be, { id: "contact", className: "text-center p-2", children: [
      /* @__PURE__ */ m.jsx(ce, { xs: 12, sm: 12, md: 4 }),
      /* @__PURE__ */ m.jsx(ce, { xs: 12, sm: 12, md: 4, children: /* @__PURE__ */ m.jsxs(Xe.Group, { controlId: "validationMessage", children: [
        /* @__PURE__ */ m.jsx(
          Xe.Control,
          {
            required: !0,
            as: "textarea",
            name: "message",
            placeholder: "Message",
            className: "me-2 custom-border form-control custom-placeholder message-inp"
          }
        ),
        /* @__PURE__ */ m.jsx(Xe.Control.Feedback, { type: "invalid", children: "Please enter a message." })
      ] }) }),
      /* @__PURE__ */ m.jsx(ce, { xs: 12, sm: 12, md: 4 })
    ] }),
    /* @__PURE__ */ m.jsx(be, { id: "contact", className: "text-center p-2", children: /* @__PURE__ */ m.jsxs(ce, { className: "text-center", children: [
      /* @__PURE__ */ m.jsx(kn, { type: "submit", className: "button-custom-color", children: "Submit" }),
      e && /* @__PURE__ */ m.jsx("div", { className: "text-success mt-2", children: "Form submitted successfully!" })
    ] }) }),
    /* @__PURE__ */ m.jsx(be, { id: "contact", className: "text-center p-2", children: /* @__PURE__ */ m.jsx(ce, { className: "text-center", children: /* @__PURE__ */ m.jsxs("div", { className: "mb-3 mt-3", children: [
      "© ",
      i,
      " Copyright:",
      /* @__PURE__ */ m.jsx("a", { className: "copyright", href: "https://meabhi.me/", children: " meabhi.me" })
    ] }) }) })
  ] }) });
}, c6 = ({ title: e }) => /* @__PURE__ */ m.jsx(Le, { children: /* @__PURE__ */ m.jsx(be, { className: "rounded background-color-body mt-3 p-2", children: /* @__PURE__ */ m.jsx(ce, { className: "text-center", children: /* @__PURE__ */ m.jsx("h1", { className: "bio-font font-color-class heading-responsive-font m-0", children: e }) }) }) });
function Af(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
const Nf = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Of = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, jf = {};
function ro(e, t) {
  return (jf.jsx ? Of : Nf).test(e);
}
const zf = /[ \t\n\f\r]/g;
function If(e) {
  return typeof e == "object" ? e.type === "text" ? io(e.value) : !1 : io(e);
}
function io(e) {
  return e.replace(zf, "") === "";
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
class Ve {
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
Ve.prototype.attribute = "";
Ve.prototype.booleanish = !1;
Ve.prototype.boolean = !1;
Ve.prototype.commaOrSpaceSeparated = !1;
Ve.prototype.commaSeparated = !1;
Ve.prototype.defined = !1;
Ve.prototype.mustUseProperty = !1;
Ve.prototype.number = !1;
Ve.prototype.overloadedBoolean = !1;
Ve.prototype.property = "";
Ve.prototype.spaceSeparated = !1;
Ve.prototype.space = void 0;
let Pf = 0;
const le = It(), Ae = It(), Cs = It(), z = It(), ke = It(), Ut = It(), qe = It();
function It() {
  return 2 ** ++Pf;
}
const li = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: le,
  booleanish: Ae,
  commaOrSpaceSeparated: qe,
  commaSeparated: Ut,
  number: z,
  overloadedBoolean: Cs,
  spaceSeparated: ke
}, Symbol.toStringTag, { value: "Module" })), Ir = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(li)
);
class ea extends Ve {
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
      for (; ++a < Ir.length; ) {
        const o = Ir[a];
        ao(this, Ir[a], (r & li[o]) === li[o]);
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
    ariaAtomic: Ae,
    ariaAutoComplete: null,
    ariaBusy: Ae,
    ariaChecked: Ae,
    ariaColCount: z,
    ariaColIndex: z,
    ariaColSpan: z,
    ariaControls: ke,
    ariaCurrent: null,
    ariaDescribedBy: ke,
    ariaDetails: null,
    ariaDisabled: Ae,
    ariaDropEffect: ke,
    ariaErrorMessage: null,
    ariaExpanded: Ae,
    ariaFlowTo: ke,
    ariaGrabbed: Ae,
    ariaHasPopup: null,
    ariaHidden: Ae,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: ke,
    ariaLevel: z,
    ariaLive: null,
    ariaModal: Ae,
    ariaMultiLine: Ae,
    ariaMultiSelectable: Ae,
    ariaOrientation: null,
    ariaOwns: ke,
    ariaPlaceholder: null,
    ariaPosInSet: z,
    ariaPressed: Ae,
    ariaReadOnly: Ae,
    ariaRelevant: null,
    ariaRequired: Ae,
    ariaRoleDescription: ke,
    ariaRowCount: z,
    ariaRowIndex: z,
    ariaRowSpan: z,
    ariaSelected: Ae,
    ariaSetSize: z,
    ariaSort: null,
    ariaValueMax: z,
    ariaValueMin: z,
    ariaValueNow: z,
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
const Rf = Xt({
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
    accept: Ut,
    acceptCharset: ke,
    accessKey: ke,
    action: null,
    allow: null,
    allowFullScreen: le,
    allowPaymentRequest: le,
    allowUserMedia: le,
    alt: null,
    as: null,
    async: le,
    autoCapitalize: null,
    autoComplete: ke,
    autoFocus: le,
    autoPlay: le,
    blocking: ke,
    capture: null,
    charSet: null,
    checked: le,
    cite: null,
    className: ke,
    cols: z,
    colSpan: null,
    content: null,
    contentEditable: Ae,
    controls: le,
    controlsList: ke,
    coords: z | Ut,
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
    draggable: Ae,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: le,
    formTarget: null,
    headers: ke,
    height: z,
    hidden: le,
    high: z,
    href: null,
    hrefLang: null,
    htmlFor: ke,
    httpEquiv: ke,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: le,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: le,
    itemId: null,
    itemProp: ke,
    itemRef: ke,
    itemScope: le,
    itemType: ke,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: le,
    low: z,
    manifest: null,
    max: null,
    maxLength: z,
    media: null,
    method: null,
    min: null,
    minLength: z,
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
    optimum: z,
    pattern: null,
    ping: ke,
    placeholder: null,
    playsInline: le,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: le,
    referrerPolicy: null,
    rel: ke,
    required: le,
    reversed: le,
    rows: z,
    rowSpan: z,
    sandbox: ke,
    scope: null,
    scoped: le,
    seamless: le,
    selected: le,
    shadowRootClonable: le,
    shadowRootDelegatesFocus: le,
    shadowRootMode: null,
    shape: null,
    size: z,
    sizes: null,
    slot: null,
    span: z,
    spellCheck: Ae,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: z,
    step: null,
    style: null,
    tabIndex: z,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: le,
    useMap: null,
    value: Ae,
    width: z,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: ke,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: z,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: z,
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
    hSpace: z,
    // `<img>` and `<object>`
    leftMargin: z,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: z,
    // `<body>`
    marginWidth: z,
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
    rightMargin: z,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: Ae,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: z,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: z,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: le,
    disableRemotePlayback: le,
    prefix: null,
    property: null,
    results: z,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: As
}), _f = Xt({
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
    about: qe,
    accentHeight: z,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: z,
    amplitude: z,
    arabicForm: null,
    ascent: z,
    attributeName: null,
    attributeType: null,
    azimuth: z,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: z,
    by: null,
    calcMode: null,
    capHeight: z,
    className: ke,
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
    descent: z,
    diffuseConstant: z,
    direction: null,
    display: null,
    dur: null,
    divisor: z,
    dominantBaseline: null,
    download: le,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: z,
    enableBackground: null,
    end: null,
    event: null,
    exponent: z,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: z,
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
    g1: Ut,
    g2: Ut,
    glyphName: Ut,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: z,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: z,
    horizOriginX: z,
    horizOriginY: z,
    id: null,
    ideographic: z,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: z,
    k: z,
    k1: z,
    k2: z,
    k3: z,
    k4: z,
    kernelMatrix: qe,
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
    limitingConeAngle: z,
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
    mediaSize: z,
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
    overlinePosition: z,
    overlineThickness: z,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: z,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: ke,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: z,
    pointsAtY: z,
    pointsAtZ: z,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: qe,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: qe,
    rev: qe,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: qe,
    requiredFeatures: qe,
    requiredFonts: qe,
    requiredFormats: qe,
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
    specularConstant: z,
    specularExponent: z,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: z,
    strikethroughThickness: z,
    string: null,
    stroke: null,
    strokeDashArray: qe,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: z,
    strokeOpacity: z,
    strokeWidth: null,
    style: null,
    surfaceScale: z,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: qe,
    tabIndex: z,
    tableValues: null,
    target: null,
    targetX: z,
    targetY: z,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: qe,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: z,
    underlineThickness: z,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: z,
    values: null,
    vAlphabetic: z,
    vMathematical: z,
    vectorEffect: null,
    vHanging: z,
    vIdeographic: z,
    version: null,
    vertAdvY: z,
    vertOriginX: z,
    vertOriginY: z,
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
    xHeight: z,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: Ts
}), Ns = Xt({
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
}), Os = Xt({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: As
}), js = Xt({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  }
}), Mf = {
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
}, Lf = /[A-Z]/g, oo = /-[a-z]/g, Ff = /^data[-\w.:]+$/i;
function Df(e, t) {
  const n = oi(t);
  let r = t, i = Ve;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && Ff.test(t)) {
    if (t.charAt(4) === "-") {
      const a = t.slice(5).replace(oo, $f);
      r = "data" + a.charAt(0).toUpperCase() + a.slice(1);
    } else {
      const a = t.slice(4);
      if (!oo.test(a)) {
        let o = a.replace(Lf, Bf);
        o.charAt(0) !== "-" && (o = "-" + o), t = "data" + o;
      }
    }
    i = ea;
  }
  return new i(r, t);
}
function Bf(e) {
  return "-" + e.toLowerCase();
}
function $f(e) {
  return e.charAt(1).toUpperCase();
}
const Hf = Es([Ss, Rf, Ns, Os, js], "html"), ta = Es([Ss, _f, Ns, Os, js], "svg");
function Vf(e) {
  return e.join(" ").trim();
}
var Ft = {}, Pr, lo;
function Uf() {
  if (lo) return Pr;
  lo = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, t = /\n/g, n = /^\s*/, r = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, i = /^:\s*/, a = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, o = /^[;\s]*/, l = /^\s+|\s+$/g, s = `
`, c = "/", u = "*", f = "", d = "comment", h = "declaration";
  Pr = function(v, k) {
    if (typeof v != "string")
      throw new TypeError("First argument must be a string");
    if (!v) return [];
    k = k || {};
    var b = 1, A = 1;
    function E(D) {
      var _ = D.match(t);
      _ && (b += _.length);
      var q = D.lastIndexOf(s);
      A = ~q ? D.length - q : A + D.length;
    }
    function O() {
      var D = { line: b, column: A };
      return function(_) {
        return _.position = new S(D), Q(), _;
      };
    }
    function S(D) {
      this.start = D, this.end = { line: b, column: A }, this.source = k.source;
    }
    S.prototype.content = v;
    function w(D) {
      var _ = new Error(
        k.source + ":" + b + ":" + A + ": " + D
      );
      if (_.reason = D, _.filename = k.source, _.line = b, _.column = A, _.source = v, !k.silent) throw _;
    }
    function F(D) {
      var _ = D.exec(v);
      if (_) {
        var q = _[0];
        return E(q), v = v.slice(q.length), _;
      }
    }
    function Q() {
      F(n);
    }
    function ne(D) {
      var _;
      for (D = D || []; _ = C(); )
        _ !== !1 && D.push(_);
      return D;
    }
    function C() {
      var D = O();
      if (!(c != v.charAt(0) || u != v.charAt(1))) {
        for (var _ = 2; f != v.charAt(_) && (u != v.charAt(_) || c != v.charAt(_ + 1)); )
          ++_;
        if (_ += 2, f === v.charAt(_ - 1))
          return w("End of comment missing");
        var q = v.slice(2, _ - 2);
        return A += 2, E(q), v = v.slice(_), A += 2, D({
          type: d,
          comment: q
        });
      }
    }
    function L() {
      var D = O(), _ = F(r);
      if (_) {
        if (C(), !F(i)) return w("property missing ':'");
        var q = F(a), ae = D({
          type: h,
          property: y(_[0].replace(e, f)),
          value: q ? y(q[0].replace(e, f)) : f
        });
        return F(o), ae;
      }
    }
    function B() {
      var D = [];
      ne(D);
      for (var _; _ = L(); )
        _ !== !1 && (D.push(_), ne(D));
      return D;
    }
    return Q(), B();
  };
  function y(v) {
    return v ? v.replace(l, f) : f;
  }
  return Pr;
}
var so;
function Wf() {
  if (so) return Ft;
  so = 1;
  var e = Ft && Ft.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(Ft, "__esModule", { value: !0 }), Ft.default = n;
  var t = e(Uf());
  function n(r, i) {
    var a = null;
    if (!r || typeof r != "string")
      return a;
    var o = (0, t.default)(r), l = typeof i == "function";
    return o.forEach(function(s) {
      if (s.type === "declaration") {
        var c = s.property, u = s.value;
        l ? i(c, u, s) : u && (a = a || {}, a[c] = u);
      }
    }), a;
  }
  return Ft;
}
var qf = Wf();
const co = /* @__PURE__ */ vn(qf), Yf = co.default || co, zs = Is("end"), na = Is("start");
function Is(e) {
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
function Gf(e) {
  const t = na(e), n = zs(e);
  if (t && n)
    return { start: t, end: n };
}
function un(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? uo(e.position) : "start" in e || "end" in e ? uo(e) : "line" in e || "column" in e ? si(e) : "";
}
function si(e) {
  return fo(e && e.line) + ":" + fo(e && e.column);
}
function uo(e) {
  return si(e && e.start) + "-" + si(e && e.end);
}
function fo(e) {
  return e && typeof e == "number" ? e : 1;
}
class Fe extends Error {
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
    this.ancestors = a.ancestors || void 0, this.cause = a.cause || void 0, this.column = l ? l.column : void 0, this.fatal = void 0, this.file, this.message = i, this.line = l ? l.line : void 0, this.name = un(a.place) || "1:1", this.place = a.place || void 0, this.reason = this.message, this.ruleId = a.ruleId || void 0, this.source = a.source || void 0, this.stack = o && a.cause && typeof a.cause.stack == "string" ? a.cause.stack : "", this.actual, this.expected, this.note, this.url;
  }
}
Fe.prototype.file = "";
Fe.prototype.name = "";
Fe.prototype.reason = "";
Fe.prototype.message = "";
Fe.prototype.stack = "";
Fe.prototype.column = void 0;
Fe.prototype.line = void 0;
Fe.prototype.ancestors = void 0;
Fe.prototype.cause = void 0;
Fe.prototype.fatal = void 0;
Fe.prototype.place = void 0;
Fe.prototype.ruleId = void 0;
Fe.prototype.source = void 0;
const ra = {}.hasOwnProperty, Kf = /* @__PURE__ */ new Map(), Xf = /[A-Z]/g, Qf = /-([a-z])/g, Jf = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), Zf = /* @__PURE__ */ new Set(["td", "th"]), Ps = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function e0(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = s0(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = l0(n, t.jsx, t.jsxs);
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
    schema: t.space === "svg" ? ta : Hf,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, a = Rs(i, e, void 0);
  return a && typeof a != "string" ? a : i.create(
    e,
    i.Fragment,
    { children: a || void 0 },
    void 0
  );
}
function Rs(e, t, n) {
  if (t.type === "element")
    return t0(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return n0(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return i0(e, t, n);
  if (t.type === "mdxjsEsm")
    return r0(e, t);
  if (t.type === "root")
    return a0(e, t, n);
  if (t.type === "text")
    return o0(e, t);
}
function t0(e, t, n) {
  const r = e.schema;
  let i = r;
  t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = ta, e.schema = i), e.ancestors.push(t);
  const a = Ms(e, t.tagName, !1), o = c0(e, t);
  let l = aa(e, t);
  return Jf.has(t.tagName) && (l = l.filter(function(s) {
    return typeof s == "string" ? !If(s) : !0;
  })), _s(e, o, a, t), ia(o, l), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function n0(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  gn(e, t.position);
}
function r0(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  gn(e, t.position);
}
function i0(e, t, n) {
  const r = e.schema;
  let i = r;
  t.name === "svg" && r.space === "html" && (i = ta, e.schema = i), e.ancestors.push(t);
  const a = t.name === null ? e.Fragment : Ms(e, t.name, !0), o = u0(e, t), l = aa(e, t);
  return _s(e, o, a, t), ia(o, l), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function a0(e, t, n) {
  const r = {};
  return ia(r, aa(e, t)), e.create(t, e.Fragment, r, n);
}
function o0(e, t) {
  return t.value;
}
function _s(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function ia(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function l0(e, t, n) {
  return r;
  function r(i, a, o, l) {
    const c = Array.isArray(o.children) ? n : t;
    return l ? c(a, o, l) : c(a, o);
  }
}
function s0(e, t) {
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
function c0(e, t) {
  const n = {};
  let r, i;
  for (i in t.properties)
    if (i !== "children" && ra.call(t.properties, i)) {
      const a = f0(e, i, t.properties[i]);
      if (a) {
        const [o, l] = a;
        e.tableCellAlignToStyle && o === "align" && typeof l == "string" && Zf.has(t.tagName) ? r = l : n[o] = l;
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
function u0(e, t) {
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
  const i = e.passKeys ? /* @__PURE__ */ new Map() : Kf;
  for (; ++r < t.children.length; ) {
    const a = t.children[r];
    let o;
    if (e.passKeys) {
      const s = a.type === "element" ? a.tagName : a.type === "mdxJsxFlowElement" || a.type === "mdxJsxTextElement" ? a.name : void 0;
      if (s) {
        const c = i.get(s) || 0;
        o = s + "-" + c, i.set(s, c + 1);
      }
    }
    const l = Rs(e, a, o);
    l !== void 0 && n.push(l);
  }
  return n;
}
function f0(e, t, n) {
  const r = Df(e.schema, t);
  if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
    if (Array.isArray(n) && (n = r.commaSeparated ? Af(n) : Vf(n)), r.property === "style") {
      let i = typeof n == "object" ? n : d0(e, String(n));
      return e.stylePropertyNameCase === "css" && (i = h0(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? Mf[r.property] || r.property : r.attribute,
      n
    ];
  }
}
function d0(e, t) {
  const n = {};
  try {
    Yf(t, r);
  } catch (i) {
    if (!e.ignoreInvalidStyle) {
      const a = (
        /** @type {Error} */
        i
      ), o = new Fe("Cannot parse `style` attribute", {
        ancestors: e.ancestors,
        cause: a,
        ruleId: "style",
        source: "hast-util-to-jsx-runtime"
      });
      throw o.file = e.filePath || void 0, o.url = Ps + "#cannot-parse-style-attribute", o;
    }
  }
  return n;
  function r(i, a) {
    let o = i;
    o.slice(0, 2) !== "--" && (o.slice(0, 4) === "-ms-" && (o = "ms-" + o.slice(4)), o = o.replace(Qf, p0)), n[o] = a;
  }
}
function Ms(e, t, n) {
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
  const n = new Fe(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw n.file = e.filePath || void 0, n.url = Ps + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function h0(e) {
  const t = {};
  let n;
  for (n in e)
    ra.call(e, n) && (t[m0(n)] = e[n]);
  return t;
}
function m0(e) {
  let t = e.replace(Xf, g0);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function p0(e, t) {
  return t.toUpperCase();
}
function g0(e) {
  return "-" + e.toLowerCase();
}
const Rr = {
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
}, y0 = {};
function oa(e, t) {
  const n = y0, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return Ls(e, r, i);
}
function Ls(e, t, n) {
  if (x0(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return ho(e.children, t, n);
  }
  return Array.isArray(e) ? ho(e, t, n) : "";
}
function ho(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = Ls(e[i], t, n);
  return r.join("");
}
function x0(e) {
  return !!(e && typeof e == "object");
}
const mo = document.createElement("i");
function la(e) {
  const t = "&" + e + ";";
  mo.innerHTML = t;
  const n = mo.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
function Ge(e, t, n, r) {
  const i = e.length;
  let a = 0, o;
  if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4)
    o = Array.from(r), o.unshift(t, n), e.splice(...o);
  else
    for (n && e.splice(t, n); a < r.length; )
      o = r.slice(a, a + 1e4), o.unshift(t, 0), e.splice(...o), a += 1e4, t += 1e4;
}
function Qe(e, t) {
  return e.length > 0 ? (Ge(e, e.length, 0, t), e) : t;
}
const po = {}.hasOwnProperty;
function Fs(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    b0(t, e[n]);
  return t;
}
function b0(e, t) {
  let n;
  for (n in t) {
    const i = (po.call(e, n) ? e[n] : void 0) || (e[n] = {}), a = t[n];
    let o;
    if (a)
      for (o in a) {
        po.call(i, o) || (i[o] = []);
        const l = a[o];
        v0(
          // @ts-expect-error Looks like a list.
          i[o],
          Array.isArray(l) ? l : l ? [l] : []
        );
      }
  }
}
function v0(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  Ge(e, 0, 0, r);
}
function Ds(e, t) {
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
function et(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const $e = Ct(/[A-Za-z]/), Re = Ct(/[\dA-Za-z]/), k0 = Ct(/[#-'*+\--9=?A-Z^-~]/);
function Yn(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const ci = Ct(/\d/), w0 = Ct(/[\dA-Fa-f]/), E0 = Ct(/[!-/:-@[-`{-~]/);
function K(e) {
  return e !== null && e < -2;
}
function ve(e) {
  return e !== null && (e < 0 || e === 32);
}
function ue(e) {
  return e === -2 || e === -1 || e === 32;
}
const cr = Ct(new RegExp("\\p{P}|\\p{S}", "u")), Ot = Ct(/\s/);
function Ct(e) {
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
    if (a === 37 && Re(e.charCodeAt(n + 1)) && Re(e.charCodeAt(n + 2)))
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
function me(e, t, n, r) {
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
const C0 = {
  tokenize: S0
};
function S0(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, r, i);
  let n;
  return t;
  function r(l) {
    if (l === null) {
      e.consume(l);
      return;
    }
    return e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), me(e, t, "linePrefix");
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
const T0 = {
  tokenize: A0
}, go = {
  tokenize: N0
};
function A0(e) {
  const t = this, n = [];
  let r = 0, i, a, o;
  return l;
  function l(E) {
    if (r < n.length) {
      const O = n[r];
      return t.containerState = O[1], e.attempt(O[0].continuation, s, c)(E);
    }
    return c(E);
  }
  function s(E) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, i && A();
      const O = t.events.length;
      let S = O, w;
      for (; S--; )
        if (t.events[S][0] === "exit" && t.events[S][1].type === "chunkFlow") {
          w = t.events[S][1].end;
          break;
        }
      b(r);
      let F = O;
      for (; F < t.events.length; )
        t.events[F][1].end = {
          ...w
        }, F++;
      return Ge(t.events, S + 1, 0, t.events.slice(O)), t.events.length = F, c(E);
    }
    return l(E);
  }
  function c(E) {
    if (r === n.length) {
      if (!i)
        return d(E);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return y(E);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(go, u, f)(E);
  }
  function u(E) {
    return i && A(), b(r), d(E);
  }
  function f(E) {
    return t.parser.lazy[t.now().line] = r !== n.length, o = t.now().offset, y(E);
  }
  function d(E) {
    return t.containerState = {}, e.attempt(go, h, y)(E);
  }
  function h(E) {
    return r++, n.push([t.currentConstruct, t.containerState]), d(E);
  }
  function y(E) {
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
  function k(E, O) {
    const S = t.sliceStream(E);
    if (O && S.push(null), E.previous = a, a && (a.next = E), a = E, i.defineSkip(E.start), i.write(S), t.parser.lazy[E.start.line]) {
      let w = i.events.length;
      for (; w--; )
        if (
          // The token starts before the line ending…
          i.events[w][1].start.offset < o && // …and either is not ended yet…
          (!i.events[w][1].end || // …or ends after it.
          i.events[w][1].end.offset > o)
        )
          return;
      const F = t.events.length;
      let Q = F, ne, C;
      for (; Q--; )
        if (t.events[Q][0] === "exit" && t.events[Q][1].type === "chunkFlow") {
          if (ne) {
            C = t.events[Q][1].end;
            break;
          }
          ne = !0;
        }
      for (b(r), w = F; w < t.events.length; )
        t.events[w][1].end = {
          ...C
        }, w++;
      Ge(t.events, Q + 1, 0, t.events.slice(F)), t.events.length = w;
    }
  }
  function b(E) {
    let O = n.length;
    for (; O-- > E; ) {
      const S = n[O];
      t.containerState = S[1], S[0].exit.call(t, e);
    }
    n.length = E;
  }
  function A() {
    i.write([null]), a = void 0, i = void 0, t.containerState._closeFlow = void 0;
  }
}
function N0(e, t, n) {
  return me(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function qt(e) {
  if (e === null || ve(e) || Ot(e))
    return 1;
  if (cr(e))
    return 2;
}
function ur(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const a = e[i].resolveAll;
    a && !r.includes(a) && (t = a(t, n), r.push(a));
  }
  return t;
}
const ui = {
  name: "attention",
  resolveAll: O0,
  tokenize: j0
};
function O0(e, t) {
  let n = -1, r, i, a, o, l, s, c, u;
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
          }, c = [], e[r][1].end.offset - e[r][1].start.offset && (c = Qe(c, [["enter", e[r][1], t], ["exit", e[r][1], t]])), c = Qe(c, [["enter", i, t], ["enter", o, t], ["exit", o, t], ["enter", a, t]]), c = Qe(c, ur(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), c = Qe(c, [["exit", a, t], ["enter", l, t], ["exit", l, t], ["exit", i, t]]), e[n][1].end.offset - e[n][1].start.offset ? (u = 2, c = Qe(c, [["enter", e[n][1], t], ["exit", e[n][1], t]])) : u = 0, Ge(e, r - 1, n - r + 3, c), n = r + c.length - u - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function j0(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = qt(r);
  let a;
  return o;
  function o(s) {
    return a = s, e.enter("attentionSequence"), l(s);
  }
  function l(s) {
    if (s === a)
      return e.consume(s), l;
    const c = e.exit("attentionSequence"), u = qt(s), f = !u || u === 2 && i || n.includes(s), d = !i || i === 2 && u || n.includes(r);
    return c._open = !!(a === 42 ? f : f && (i || !d)), c._close = !!(a === 42 ? d : d && (u || !f)), t(s);
  }
}
function yo(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const z0 = {
  name: "autolink",
  tokenize: I0
};
function I0(e, t, n) {
  let r = 0;
  return i;
  function i(h) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a;
  }
  function a(h) {
    return $e(h) ? (e.consume(h), o) : h === 64 ? n(h) : c(h);
  }
  function o(h) {
    return h === 43 || h === 45 || h === 46 || Re(h) ? (r = 1, l(h)) : c(h);
  }
  function l(h) {
    return h === 58 ? (e.consume(h), r = 0, s) : (h === 43 || h === 45 || h === 46 || Re(h)) && r++ < 32 ? (e.consume(h), l) : (r = 0, c(h));
  }
  function s(h) {
    return h === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.exit("autolink"), t) : h === null || h === 32 || h === 60 || Yn(h) ? n(h) : (e.consume(h), s);
  }
  function c(h) {
    return h === 64 ? (e.consume(h), u) : k0(h) ? (e.consume(h), c) : n(h);
  }
  function u(h) {
    return Re(h) ? f(h) : n(h);
  }
  function f(h) {
    return h === 46 ? (e.consume(h), r = 0, u) : h === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.exit("autolink"), t) : d(h);
  }
  function d(h) {
    if ((h === 45 || Re(h)) && r++ < 63) {
      const y = h === 45 ? d : f;
      return e.consume(h), y;
    }
    return n(h);
  }
}
const Cn = {
  partial: !0,
  tokenize: P0
};
function P0(e, t, n) {
  return r;
  function r(a) {
    return ue(a) ? me(e, i, "linePrefix")(a) : i(a);
  }
  function i(a) {
    return a === null || K(a) ? t(a) : n(a);
  }
}
const Bs = {
  continuation: {
    tokenize: _0
  },
  exit: M0,
  name: "blockQuote",
  tokenize: R0
};
function R0(e, t, n) {
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
function _0(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return ue(o) ? me(e, a, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(o) : a(o);
  }
  function a(o) {
    return e.attempt(Bs, t, n)(o);
  }
}
function M0(e) {
  e.exit("blockQuote");
}
const $s = {
  name: "characterEscape",
  tokenize: L0
};
function L0(e, t, n) {
  return r;
  function r(a) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(a), e.exit("escapeMarker"), i;
  }
  function i(a) {
    return E0(a) ? (e.enter("characterEscapeValue"), e.consume(a), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(a);
  }
}
const Hs = {
  name: "characterReference",
  tokenize: F0
};
function F0(e, t, n) {
  const r = this;
  let i = 0, a, o;
  return l;
  function l(f) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), s;
  }
  function s(f) {
    return f === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(f), e.exit("characterReferenceMarkerNumeric"), c) : (e.enter("characterReferenceValue"), a = 31, o = Re, u(f));
  }
  function c(f) {
    return f === 88 || f === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(f), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), a = 6, o = w0, u) : (e.enter("characterReferenceValue"), a = 7, o = ci, u(f));
  }
  function u(f) {
    if (f === 59 && i) {
      const d = e.exit("characterReferenceValue");
      return o === Re && !la(r.sliceSerialize(d)) ? n(f) : (e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return o(f) && i++ < a ? (e.consume(f), u) : n(f);
  }
}
const xo = {
  partial: !0,
  tokenize: B0
}, bo = {
  concrete: !0,
  name: "codeFenced",
  tokenize: D0
};
function D0(e, t, n) {
  const r = this, i = {
    partial: !0,
    tokenize: S
  };
  let a = 0, o = 0, l;
  return s;
  function s(w) {
    return c(w);
  }
  function c(w) {
    const F = r.events[r.events.length - 1];
    return a = F && F[1].type === "linePrefix" ? F[2].sliceSerialize(F[1], !0).length : 0, l = w, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), u(w);
  }
  function u(w) {
    return w === l ? (o++, e.consume(w), u) : o < 3 ? n(w) : (e.exit("codeFencedFenceSequence"), ue(w) ? me(e, f, "whitespace")(w) : f(w));
  }
  function f(w) {
    return w === null || K(w) ? (e.exit("codeFencedFence"), r.interrupt ? t(w) : e.check(xo, v, O)(w)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), d(w));
  }
  function d(w) {
    return w === null || K(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), f(w)) : ue(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), me(e, h, "whitespace")(w)) : w === 96 && w === l ? n(w) : (e.consume(w), d);
  }
  function h(w) {
    return w === null || K(w) ? f(w) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), y(w));
  }
  function y(w) {
    return w === null || K(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), f(w)) : w === 96 && w === l ? n(w) : (e.consume(w), y);
  }
  function v(w) {
    return e.attempt(i, O, k)(w);
  }
  function k(w) {
    return e.enter("lineEnding"), e.consume(w), e.exit("lineEnding"), b;
  }
  function b(w) {
    return a > 0 && ue(w) ? me(e, A, "linePrefix", a + 1)(w) : A(w);
  }
  function A(w) {
    return w === null || K(w) ? e.check(xo, v, O)(w) : (e.enter("codeFlowValue"), E(w));
  }
  function E(w) {
    return w === null || K(w) ? (e.exit("codeFlowValue"), A(w)) : (e.consume(w), E);
  }
  function O(w) {
    return e.exit("codeFenced"), t(w);
  }
  function S(w, F, Q) {
    let ne = 0;
    return C;
    function C(q) {
      return w.enter("lineEnding"), w.consume(q), w.exit("lineEnding"), L;
    }
    function L(q) {
      return w.enter("codeFencedFence"), ue(q) ? me(w, B, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(q) : B(q);
    }
    function B(q) {
      return q === l ? (w.enter("codeFencedFenceSequence"), D(q)) : Q(q);
    }
    function D(q) {
      return q === l ? (ne++, w.consume(q), D) : ne >= o ? (w.exit("codeFencedFenceSequence"), ue(q) ? me(w, _, "whitespace")(q) : _(q)) : Q(q);
    }
    function _(q) {
      return q === null || K(q) ? (w.exit("codeFencedFence"), F(q)) : Q(q);
    }
  }
}
function B0(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return o === null ? n(o) : (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), a);
  }
  function a(o) {
    return r.parser.lazy[r.now().line] ? n(o) : t(o);
  }
}
const _r = {
  name: "codeIndented",
  tokenize: H0
}, $0 = {
  partial: !0,
  tokenize: V0
};
function H0(e, t, n) {
  const r = this;
  return i;
  function i(c) {
    return e.enter("codeIndented"), me(e, a, "linePrefix", 5)(c);
  }
  function a(c) {
    const u = r.events[r.events.length - 1];
    return u && u[1].type === "linePrefix" && u[2].sliceSerialize(u[1], !0).length >= 4 ? o(c) : n(c);
  }
  function o(c) {
    return c === null ? s(c) : K(c) ? e.attempt($0, o, s)(c) : (e.enter("codeFlowValue"), l(c));
  }
  function l(c) {
    return c === null || K(c) ? (e.exit("codeFlowValue"), o(c)) : (e.consume(c), l);
  }
  function s(c) {
    return e.exit("codeIndented"), t(c);
  }
}
function V0(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return r.parser.lazy[r.now().line] ? n(o) : K(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), i) : me(e, a, "linePrefix", 5)(o);
  }
  function a(o) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "linePrefix" && l[2].sliceSerialize(l[1], !0).length >= 4 ? t(o) : K(o) ? i(o) : n(o);
  }
}
const U0 = {
  name: "codeText",
  previous: q0,
  resolve: W0,
  tokenize: Y0
};
function W0(e) {
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
function q0(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Y0(e, t, n) {
  let r = 0, i, a;
  return o;
  function o(f) {
    return e.enter("codeText"), e.enter("codeTextSequence"), l(f);
  }
  function l(f) {
    return f === 96 ? (e.consume(f), r++, l) : (e.exit("codeTextSequence"), s(f));
  }
  function s(f) {
    return f === null ? n(f) : f === 32 ? (e.enter("space"), e.consume(f), e.exit("space"), s) : f === 96 ? (a = e.enter("codeTextSequence"), i = 0, u(f)) : K(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), s) : (e.enter("codeTextData"), c(f));
  }
  function c(f) {
    return f === null || f === 32 || f === 96 || K(f) ? (e.exit("codeTextData"), s(f)) : (e.consume(f), c);
  }
  function u(f) {
    return f === 96 ? (e.consume(f), i++, u) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(f)) : (a.type = "codeTextData", c(f));
  }
}
class G0 {
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
function Vs(e) {
  const t = {};
  let n = -1, r, i, a, o, l, s, c;
  const u = new G0(e);
  for (; ++n < u.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = u.get(n), n && r[1].type === "chunkFlow" && u.get(n - 1)[1].type === "listItemPrefix" && (s = r[1]._tokenizer.events, a = 0, a < s.length && s[a][1].type === "lineEndingBlank" && (a += 2), a < s.length && s[a][1].type === "content"))
      for (; ++a < s.length && s[a][1].type !== "content"; )
        s[a][1].type === "chunkText" && (s[a][1]._isInFirstContentOfListItem = !0, a++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, K0(u, n)), n = t[n], c = !0);
    else if (r[1]._container) {
      for (a = n, i = void 0; a--; )
        if (o = u.get(a), o[1].type === "lineEnding" || o[1].type === "lineEndingBlank")
          o[0] === "enter" && (i && (u.get(i)[1].type = "lineEndingBlank"), o[1].type = "lineEnding", i = a);
        else if (o[1].type !== "linePrefix") break;
      i && (r[1].end = {
        ...u.get(i)[1].start
      }, l = u.slice(i, n), l.unshift(r), u.splice(i, n - i + 1, l));
    }
  }
  return Ge(e, 0, Number.POSITIVE_INFINITY, u.slice(0)), !c;
}
function K0(e, t) {
  const n = e.get(t)[1], r = e.get(t)[2];
  let i = t - 1;
  const a = [], o = n._tokenizer || r.parser[n.contentType](n.start), l = o.events, s = [], c = {};
  let u, f, d = -1, h = n, y = 0, v = 0;
  const k = [v];
  for (; h; ) {
    for (; e.get(++i)[1] !== h; )
      ;
    a.push(i), h._tokenizer || (u = r.sliceStream(h), h.next || u.push(null), f && o.defineSkip(h.start), h._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(u), h._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), f = h, h = h.next;
  }
  for (h = n; ++d < l.length; )
    // Find a void token that includes a break.
    l[d][0] === "exit" && l[d - 1][0] === "enter" && l[d][1].type === l[d - 1][1].type && l[d][1].start.line !== l[d][1].end.line && (v = d + 1, k.push(v), h._tokenizer = void 0, h.previous = void 0, h = h.next);
  for (o.events = [], h ? (h._tokenizer = void 0, h.previous = void 0) : k.pop(), d = k.length; d--; ) {
    const b = l.slice(k[d], k[d + 1]), A = a.pop();
    s.push([A, A + b.length - 1]), e.splice(A, 2, b);
  }
  for (s.reverse(), d = -1; ++d < s.length; )
    c[y + s[d][0]] = y + s[d][1], y += s[d][1] - s[d][0] - 1;
  return c;
}
const X0 = {
  resolve: J0,
  tokenize: Z0
}, Q0 = {
  partial: !0,
  tokenize: e2
};
function J0(e) {
  return Vs(e), e;
}
function Z0(e, t) {
  let n;
  return r;
  function r(l) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), i(l);
  }
  function i(l) {
    return l === null ? a(l) : K(l) ? e.check(Q0, o, a)(l) : (e.consume(l), i);
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
function e2(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), me(e, a, "linePrefix");
  }
  function a(o) {
    if (o === null || K(o))
      return n(o);
    const l = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && l && l[1].type === "linePrefix" && l[2].sliceSerialize(l[1], !0).length >= 4 ? t(o) : e.interrupt(r.parser.constructs.flow, n, t)(o);
  }
}
function Us(e, t, n, r, i, a, o, l, s) {
  const c = s || Number.POSITIVE_INFINITY;
  let u = 0;
  return f;
  function f(b) {
    return b === 60 ? (e.enter(r), e.enter(i), e.enter(a), e.consume(b), e.exit(a), d) : b === null || b === 32 || b === 41 || Yn(b) ? n(b) : (e.enter(r), e.enter(o), e.enter(l), e.enter("chunkString", {
      contentType: "string"
    }), v(b));
  }
  function d(b) {
    return b === 62 ? (e.enter(a), e.consume(b), e.exit(a), e.exit(i), e.exit(r), t) : (e.enter(l), e.enter("chunkString", {
      contentType: "string"
    }), h(b));
  }
  function h(b) {
    return b === 62 ? (e.exit("chunkString"), e.exit(l), d(b)) : b === null || b === 60 || K(b) ? n(b) : (e.consume(b), b === 92 ? y : h);
  }
  function y(b) {
    return b === 60 || b === 62 || b === 92 ? (e.consume(b), h) : h(b);
  }
  function v(b) {
    return !u && (b === null || b === 41 || ve(b)) ? (e.exit("chunkString"), e.exit(l), e.exit(o), e.exit(r), t(b)) : u < c && b === 40 ? (e.consume(b), u++, v) : b === 41 ? (e.consume(b), u--, v) : b === null || b === 32 || b === 40 || Yn(b) ? n(b) : (e.consume(b), b === 92 ? k : v);
  }
  function k(b) {
    return b === 40 || b === 41 || b === 92 ? (e.consume(b), v) : v(b);
  }
}
function Ws(e, t, n, r, i, a) {
  const o = this;
  let l = 0, s;
  return c;
  function c(h) {
    return e.enter(r), e.enter(i), e.consume(h), e.exit(i), e.enter(a), u;
  }
  function u(h) {
    return l > 999 || h === null || h === 91 || h === 93 && !s || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    h === 94 && !l && "_hiddenFootnoteSupport" in o.parser.constructs ? n(h) : h === 93 ? (e.exit(a), e.enter(i), e.consume(h), e.exit(i), e.exit(r), t) : K(h) ? (e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), u) : (e.enter("chunkString", {
      contentType: "string"
    }), f(h));
  }
  function f(h) {
    return h === null || h === 91 || h === 93 || K(h) || l++ > 999 ? (e.exit("chunkString"), u(h)) : (e.consume(h), s || (s = !ue(h)), h === 92 ? d : f);
  }
  function d(h) {
    return h === 91 || h === 92 || h === 93 ? (e.consume(h), l++, f) : f(h);
  }
}
function qs(e, t, n, r, i, a) {
  let o;
  return l;
  function l(d) {
    return d === 34 || d === 39 || d === 40 ? (e.enter(r), e.enter(i), e.consume(d), e.exit(i), o = d === 40 ? 41 : d, s) : n(d);
  }
  function s(d) {
    return d === o ? (e.enter(i), e.consume(d), e.exit(i), e.exit(r), t) : (e.enter(a), c(d));
  }
  function c(d) {
    return d === o ? (e.exit(a), s(o)) : d === null ? n(d) : K(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), me(e, c, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), u(d));
  }
  function u(d) {
    return d === o || d === null || K(d) ? (e.exit("chunkString"), c(d)) : (e.consume(d), d === 92 ? f : u);
  }
  function f(d) {
    return d === o || d === 92 ? (e.consume(d), u) : u(d);
  }
}
function fn(e, t) {
  let n;
  return r;
  function r(i) {
    return K(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : ue(i) ? me(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
  }
}
const t2 = {
  name: "definition",
  tokenize: r2
}, n2 = {
  partial: !0,
  tokenize: i2
};
function r2(e, t, n) {
  const r = this;
  let i;
  return a;
  function a(h) {
    return e.enter("definition"), o(h);
  }
  function o(h) {
    return Ws.call(
      r,
      e,
      l,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(h);
  }
  function l(h) {
    return i = et(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), h === 58 ? (e.enter("definitionMarker"), e.consume(h), e.exit("definitionMarker"), s) : n(h);
  }
  function s(h) {
    return ve(h) ? fn(e, c)(h) : c(h);
  }
  function c(h) {
    return Us(
      e,
      u,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(h);
  }
  function u(h) {
    return e.attempt(n2, f, f)(h);
  }
  function f(h) {
    return ue(h) ? me(e, d, "whitespace")(h) : d(h);
  }
  function d(h) {
    return h === null || K(h) ? (e.exit("definition"), r.parser.defined.push(i), t(h)) : n(h);
  }
}
function i2(e, t, n) {
  return r;
  function r(l) {
    return ve(l) ? fn(e, i)(l) : n(l);
  }
  function i(l) {
    return qs(e, a, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(l);
  }
  function a(l) {
    return ue(l) ? me(e, o, "whitespace")(l) : o(l);
  }
  function o(l) {
    return l === null || K(l) ? t(l) : n(l);
  }
}
const a2 = {
  name: "hardBreakEscape",
  tokenize: o2
};
function o2(e, t, n) {
  return r;
  function r(a) {
    return e.enter("hardBreakEscape"), e.consume(a), i;
  }
  function i(a) {
    return K(a) ? (e.exit("hardBreakEscape"), t(a)) : n(a);
  }
}
const l2 = {
  name: "headingAtx",
  resolve: s2,
  tokenize: c2
};
function s2(e, t) {
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
  }, Ge(e, r, n - r + 1, [["enter", i, t], ["enter", a, t], ["exit", a, t], ["exit", i, t]])), e;
}
function c2(e, t, n) {
  let r = 0;
  return i;
  function i(u) {
    return e.enter("atxHeading"), a(u);
  }
  function a(u) {
    return e.enter("atxHeadingSequence"), o(u);
  }
  function o(u) {
    return u === 35 && r++ < 6 ? (e.consume(u), o) : u === null || ve(u) ? (e.exit("atxHeadingSequence"), l(u)) : n(u);
  }
  function l(u) {
    return u === 35 ? (e.enter("atxHeadingSequence"), s(u)) : u === null || K(u) ? (e.exit("atxHeading"), t(u)) : ue(u) ? me(e, l, "whitespace")(u) : (e.enter("atxHeadingText"), c(u));
  }
  function s(u) {
    return u === 35 ? (e.consume(u), s) : (e.exit("atxHeadingSequence"), l(u));
  }
  function c(u) {
    return u === null || u === 35 || ve(u) ? (e.exit("atxHeadingText"), l(u)) : (e.consume(u), c);
  }
}
const u2 = [
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
], vo = ["pre", "script", "style", "textarea"], f2 = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: m2,
  tokenize: p2
}, d2 = {
  partial: !0,
  tokenize: y2
}, h2 = {
  partial: !0,
  tokenize: g2
};
function m2(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function p2(e, t, n) {
  const r = this;
  let i, a, o, l, s;
  return c;
  function c(g) {
    return u(g);
  }
  function u(g) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(g), f;
  }
  function f(g) {
    return g === 33 ? (e.consume(g), d) : g === 47 ? (e.consume(g), a = !0, v) : g === 63 ? (e.consume(g), i = 3, r.interrupt ? t : p) : $e(g) ? (e.consume(g), o = String.fromCharCode(g), k) : n(g);
  }
  function d(g) {
    return g === 45 ? (e.consume(g), i = 2, h) : g === 91 ? (e.consume(g), i = 5, l = 0, y) : $e(g) ? (e.consume(g), i = 4, r.interrupt ? t : p) : n(g);
  }
  function h(g) {
    return g === 45 ? (e.consume(g), r.interrupt ? t : p) : n(g);
  }
  function y(g) {
    const M = "CDATA[";
    return g === M.charCodeAt(l++) ? (e.consume(g), l === M.length ? r.interrupt ? t : B : y) : n(g);
  }
  function v(g) {
    return $e(g) ? (e.consume(g), o = String.fromCharCode(g), k) : n(g);
  }
  function k(g) {
    if (g === null || g === 47 || g === 62 || ve(g)) {
      const M = g === 47, X = o.toLowerCase();
      return !M && !a && vo.includes(X) ? (i = 1, r.interrupt ? t(g) : B(g)) : u2.includes(o.toLowerCase()) ? (i = 6, M ? (e.consume(g), b) : r.interrupt ? t(g) : B(g)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(g) : a ? A(g) : E(g));
    }
    return g === 45 || Re(g) ? (e.consume(g), o += String.fromCharCode(g), k) : n(g);
  }
  function b(g) {
    return g === 62 ? (e.consume(g), r.interrupt ? t : B) : n(g);
  }
  function A(g) {
    return ue(g) ? (e.consume(g), A) : C(g);
  }
  function E(g) {
    return g === 47 ? (e.consume(g), C) : g === 58 || g === 95 || $e(g) ? (e.consume(g), O) : ue(g) ? (e.consume(g), E) : C(g);
  }
  function O(g) {
    return g === 45 || g === 46 || g === 58 || g === 95 || Re(g) ? (e.consume(g), O) : S(g);
  }
  function S(g) {
    return g === 61 ? (e.consume(g), w) : ue(g) ? (e.consume(g), S) : E(g);
  }
  function w(g) {
    return g === null || g === 60 || g === 61 || g === 62 || g === 96 ? n(g) : g === 34 || g === 39 ? (e.consume(g), s = g, F) : ue(g) ? (e.consume(g), w) : Q(g);
  }
  function F(g) {
    return g === s ? (e.consume(g), s = null, ne) : g === null || K(g) ? n(g) : (e.consume(g), F);
  }
  function Q(g) {
    return g === null || g === 34 || g === 39 || g === 47 || g === 60 || g === 61 || g === 62 || g === 96 || ve(g) ? S(g) : (e.consume(g), Q);
  }
  function ne(g) {
    return g === 47 || g === 62 || ue(g) ? E(g) : n(g);
  }
  function C(g) {
    return g === 62 ? (e.consume(g), L) : n(g);
  }
  function L(g) {
    return g === null || K(g) ? B(g) : ue(g) ? (e.consume(g), L) : n(g);
  }
  function B(g) {
    return g === 45 && i === 2 ? (e.consume(g), ae) : g === 60 && i === 1 ? (e.consume(g), fe) : g === 62 && i === 4 ? (e.consume(g), I) : g === 63 && i === 3 ? (e.consume(g), p) : g === 93 && i === 5 ? (e.consume(g), we) : K(g) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(d2, G, D)(g)) : g === null || K(g) ? (e.exit("htmlFlowData"), D(g)) : (e.consume(g), B);
  }
  function D(g) {
    return e.check(h2, _, G)(g);
  }
  function _(g) {
    return e.enter("lineEnding"), e.consume(g), e.exit("lineEnding"), q;
  }
  function q(g) {
    return g === null || K(g) ? D(g) : (e.enter("htmlFlowData"), B(g));
  }
  function ae(g) {
    return g === 45 ? (e.consume(g), p) : B(g);
  }
  function fe(g) {
    return g === 47 ? (e.consume(g), o = "", de) : B(g);
  }
  function de(g) {
    if (g === 62) {
      const M = o.toLowerCase();
      return vo.includes(M) ? (e.consume(g), I) : B(g);
    }
    return $e(g) && o.length < 8 ? (e.consume(g), o += String.fromCharCode(g), de) : B(g);
  }
  function we(g) {
    return g === 93 ? (e.consume(g), p) : B(g);
  }
  function p(g) {
    return g === 62 ? (e.consume(g), I) : g === 45 && i === 2 ? (e.consume(g), p) : B(g);
  }
  function I(g) {
    return g === null || K(g) ? (e.exit("htmlFlowData"), G(g)) : (e.consume(g), I);
  }
  function G(g) {
    return e.exit("htmlFlow"), t(g);
  }
}
function g2(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return K(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), a) : n(o);
  }
  function a(o) {
    return r.parser.lazy[r.now().line] ? n(o) : t(o);
  }
}
function y2(e, t, n) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(Cn, t, n);
  }
}
const x2 = {
  name: "htmlText",
  tokenize: b2
};
function b2(e, t, n) {
  const r = this;
  let i, a, o;
  return l;
  function l(p) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(p), s;
  }
  function s(p) {
    return p === 33 ? (e.consume(p), c) : p === 47 ? (e.consume(p), S) : p === 63 ? (e.consume(p), E) : $e(p) ? (e.consume(p), Q) : n(p);
  }
  function c(p) {
    return p === 45 ? (e.consume(p), u) : p === 91 ? (e.consume(p), a = 0, y) : $e(p) ? (e.consume(p), A) : n(p);
  }
  function u(p) {
    return p === 45 ? (e.consume(p), h) : n(p);
  }
  function f(p) {
    return p === null ? n(p) : p === 45 ? (e.consume(p), d) : K(p) ? (o = f, fe(p)) : (e.consume(p), f);
  }
  function d(p) {
    return p === 45 ? (e.consume(p), h) : f(p);
  }
  function h(p) {
    return p === 62 ? ae(p) : p === 45 ? d(p) : f(p);
  }
  function y(p) {
    const I = "CDATA[";
    return p === I.charCodeAt(a++) ? (e.consume(p), a === I.length ? v : y) : n(p);
  }
  function v(p) {
    return p === null ? n(p) : p === 93 ? (e.consume(p), k) : K(p) ? (o = v, fe(p)) : (e.consume(p), v);
  }
  function k(p) {
    return p === 93 ? (e.consume(p), b) : v(p);
  }
  function b(p) {
    return p === 62 ? ae(p) : p === 93 ? (e.consume(p), b) : v(p);
  }
  function A(p) {
    return p === null || p === 62 ? ae(p) : K(p) ? (o = A, fe(p)) : (e.consume(p), A);
  }
  function E(p) {
    return p === null ? n(p) : p === 63 ? (e.consume(p), O) : K(p) ? (o = E, fe(p)) : (e.consume(p), E);
  }
  function O(p) {
    return p === 62 ? ae(p) : E(p);
  }
  function S(p) {
    return $e(p) ? (e.consume(p), w) : n(p);
  }
  function w(p) {
    return p === 45 || Re(p) ? (e.consume(p), w) : F(p);
  }
  function F(p) {
    return K(p) ? (o = F, fe(p)) : ue(p) ? (e.consume(p), F) : ae(p);
  }
  function Q(p) {
    return p === 45 || Re(p) ? (e.consume(p), Q) : p === 47 || p === 62 || ve(p) ? ne(p) : n(p);
  }
  function ne(p) {
    return p === 47 ? (e.consume(p), ae) : p === 58 || p === 95 || $e(p) ? (e.consume(p), C) : K(p) ? (o = ne, fe(p)) : ue(p) ? (e.consume(p), ne) : ae(p);
  }
  function C(p) {
    return p === 45 || p === 46 || p === 58 || p === 95 || Re(p) ? (e.consume(p), C) : L(p);
  }
  function L(p) {
    return p === 61 ? (e.consume(p), B) : K(p) ? (o = L, fe(p)) : ue(p) ? (e.consume(p), L) : ne(p);
  }
  function B(p) {
    return p === null || p === 60 || p === 61 || p === 62 || p === 96 ? n(p) : p === 34 || p === 39 ? (e.consume(p), i = p, D) : K(p) ? (o = B, fe(p)) : ue(p) ? (e.consume(p), B) : (e.consume(p), _);
  }
  function D(p) {
    return p === i ? (e.consume(p), i = void 0, q) : p === null ? n(p) : K(p) ? (o = D, fe(p)) : (e.consume(p), D);
  }
  function _(p) {
    return p === null || p === 34 || p === 39 || p === 60 || p === 61 || p === 96 ? n(p) : p === 47 || p === 62 || ve(p) ? ne(p) : (e.consume(p), _);
  }
  function q(p) {
    return p === 47 || p === 62 || ve(p) ? ne(p) : n(p);
  }
  function ae(p) {
    return p === 62 ? (e.consume(p), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(p);
  }
  function fe(p) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), de;
  }
  function de(p) {
    return ue(p) ? me(e, we, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(p) : we(p);
  }
  function we(p) {
    return e.enter("htmlTextData"), o(p);
  }
}
const sa = {
  name: "labelEnd",
  resolveAll: E2,
  resolveTo: C2,
  tokenize: S2
}, v2 = {
  tokenize: T2
}, k2 = {
  tokenize: A2
}, w2 = {
  tokenize: N2
};
function E2(e) {
  let t = -1;
  const n = [];
  for (; ++t < e.length; ) {
    const r = e[t][1];
    if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
      const i = r.type === "labelImage" ? 4 : 2;
      r.type = "data", t += i;
    }
  }
  return e.length !== n.length && Ge(e, 0, e.length, n), e;
}
function C2(e, t) {
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
  }, c = {
    type: "label",
    start: {
      ...e[a][1].start
    },
    end: {
      ...e[o][1].end
    }
  }, u = {
    type: "labelText",
    start: {
      ...e[a + r + 2][1].end
    },
    end: {
      ...e[o - 2][1].start
    }
  };
  return l = [["enter", s, t], ["enter", c, t]], l = Qe(l, e.slice(a + 1, a + r + 3)), l = Qe(l, [["enter", u, t]]), l = Qe(l, ur(t.parser.constructs.insideSpan.null, e.slice(a + r + 4, o - 3), t)), l = Qe(l, [["exit", u, t], e[o - 2], e[o - 1], ["exit", c, t]]), l = Qe(l, e.slice(o + 1)), l = Qe(l, [["exit", s, t]]), Ge(e, a, e.length, l), e;
}
function S2(e, t, n) {
  const r = this;
  let i = r.events.length, a, o;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      a = r.events[i][1];
      break;
    }
  return l;
  function l(d) {
    return a ? a._inactive ? f(d) : (o = r.parser.defined.includes(et(r.sliceSerialize({
      start: a.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(d), e.exit("labelMarker"), e.exit("labelEnd"), s) : n(d);
  }
  function s(d) {
    return d === 40 ? e.attempt(v2, u, o ? u : f)(d) : d === 91 ? e.attempt(k2, u, o ? c : f)(d) : o ? u(d) : f(d);
  }
  function c(d) {
    return e.attempt(w2, u, f)(d);
  }
  function u(d) {
    return t(d);
  }
  function f(d) {
    return a._balanced = !0, n(d);
  }
}
function T2(e, t, n) {
  return r;
  function r(f) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), i;
  }
  function i(f) {
    return ve(f) ? fn(e, a)(f) : a(f);
  }
  function a(f) {
    return f === 41 ? u(f) : Us(e, o, l, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(f);
  }
  function o(f) {
    return ve(f) ? fn(e, s)(f) : u(f);
  }
  function l(f) {
    return n(f);
  }
  function s(f) {
    return f === 34 || f === 39 || f === 40 ? qs(e, c, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(f) : u(f);
  }
  function c(f) {
    return ve(f) ? fn(e, u)(f) : u(f);
  }
  function u(f) {
    return f === 41 ? (e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), e.exit("resource"), t) : n(f);
  }
}
function A2(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return Ws.call(r, e, a, o, "reference", "referenceMarker", "referenceString")(l);
  }
  function a(l) {
    return r.parser.defined.includes(et(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(l) : n(l);
  }
  function o(l) {
    return n(l);
  }
}
function N2(e, t, n) {
  return r;
  function r(a) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(a), e.exit("referenceMarker"), i;
  }
  function i(a) {
    return a === 93 ? (e.enter("referenceMarker"), e.consume(a), e.exit("referenceMarker"), e.exit("reference"), t) : n(a);
  }
}
const O2 = {
  name: "labelStartImage",
  resolveAll: sa.resolveAll,
  tokenize: j2
};
function j2(e, t, n) {
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
const z2 = {
  name: "labelStartLink",
  resolveAll: sa.resolveAll,
  tokenize: I2
};
function I2(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(o), e.exit("labelMarker"), e.exit("labelLink"), a;
  }
  function a(o) {
    return o === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(o) : t(o);
  }
}
const Mr = {
  name: "lineEnding",
  tokenize: P2
};
function P2(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), me(e, t, "linePrefix");
  }
}
const Bn = {
  name: "thematicBreak",
  tokenize: R2
};
function R2(e, t, n) {
  let r = 0, i;
  return a;
  function a(c) {
    return e.enter("thematicBreak"), o(c);
  }
  function o(c) {
    return i = c, l(c);
  }
  function l(c) {
    return c === i ? (e.enter("thematicBreakSequence"), s(c)) : r >= 3 && (c === null || K(c)) ? (e.exit("thematicBreak"), t(c)) : n(c);
  }
  function s(c) {
    return c === i ? (e.consume(c), r++, s) : (e.exit("thematicBreakSequence"), ue(c) ? me(e, l, "whitespace")(c) : l(c));
  }
}
const He = {
  continuation: {
    tokenize: F2
  },
  exit: B2,
  name: "list",
  tokenize: L2
}, _2 = {
  partial: !0,
  tokenize: $2
}, M2 = {
  partial: !0,
  tokenize: D2
};
function L2(e, t, n) {
  const r = this, i = r.events[r.events.length - 1];
  let a = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
  return l;
  function l(h) {
    const y = r.containerState.type || (h === 42 || h === 43 || h === 45 ? "listUnordered" : "listOrdered");
    if (y === "listUnordered" ? !r.containerState.marker || h === r.containerState.marker : ci(h)) {
      if (r.containerState.type || (r.containerState.type = y, e.enter(y, {
        _container: !0
      })), y === "listUnordered")
        return e.enter("listItemPrefix"), h === 42 || h === 45 ? e.check(Bn, n, c)(h) : c(h);
      if (!r.interrupt || h === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), s(h);
    }
    return n(h);
  }
  function s(h) {
    return ci(h) && ++o < 10 ? (e.consume(h), s) : (!r.interrupt || o < 2) && (r.containerState.marker ? h === r.containerState.marker : h === 41 || h === 46) ? (e.exit("listItemValue"), c(h)) : n(h);
  }
  function c(h) {
    return e.enter("listItemMarker"), e.consume(h), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || h, e.check(
      Cn,
      // Can’t be empty when interrupting.
      r.interrupt ? n : u,
      e.attempt(_2, d, f)
    );
  }
  function u(h) {
    return r.containerState.initialBlankLine = !0, a++, d(h);
  }
  function f(h) {
    return ue(h) ? (e.enter("listItemPrefixWhitespace"), e.consume(h), e.exit("listItemPrefixWhitespace"), d) : n(h);
  }
  function d(h) {
    return r.containerState.size = a + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(h);
  }
}
function F2(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(Cn, i, a);
  function i(l) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, me(e, t, "listItemIndent", r.containerState.size + 1)(l);
  }
  function a(l) {
    return r.containerState.furtherBlankLines || !ue(l) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(l)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(M2, t, o)(l));
  }
  function o(l) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, me(e, e.attempt(He, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(l);
  }
}
function D2(e, t, n) {
  const r = this;
  return me(e, i, "listItemIndent", r.containerState.size + 1);
  function i(a) {
    const o = r.events[r.events.length - 1];
    return o && o[1].type === "listItemIndent" && o[2].sliceSerialize(o[1], !0).length === r.containerState.size ? t(a) : n(a);
  }
}
function B2(e) {
  e.exit(this.containerState.type);
}
function $2(e, t, n) {
  const r = this;
  return me(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(a) {
    const o = r.events[r.events.length - 1];
    return !ue(a) && o && o[1].type === "listItemPrefixWhitespace" ? t(a) : n(a);
  }
}
const ko = {
  name: "setextUnderline",
  resolveTo: H2,
  tokenize: V2
};
function H2(e, t) {
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
function V2(e, t, n) {
  const r = this;
  let i;
  return a;
  function a(c) {
    let u = r.events.length, f;
    for (; u--; )
      if (r.events[u][1].type !== "lineEnding" && r.events[u][1].type !== "linePrefix" && r.events[u][1].type !== "content") {
        f = r.events[u][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || f) ? (e.enter("setextHeadingLine"), i = c, o(c)) : n(c);
  }
  function o(c) {
    return e.enter("setextHeadingLineSequence"), l(c);
  }
  function l(c) {
    return c === i ? (e.consume(c), l) : (e.exit("setextHeadingLineSequence"), ue(c) ? me(e, s, "lineSuffix")(c) : s(c));
  }
  function s(c) {
    return c === null || K(c) ? (e.exit("setextHeadingLine"), t(c)) : n(c);
  }
}
const U2 = {
  tokenize: W2
};
function W2(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    Cn,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, i, me(e, e.attempt(this.parser.constructs.flow, i, e.attempt(X0, i)), "linePrefix"))
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
const q2 = {
  resolveAll: Gs()
}, Y2 = Ys("string"), G2 = Ys("text");
function Ys(e) {
  return {
    resolveAll: Gs(e === "text" ? K2 : void 0),
    tokenize: t
  };
  function t(n) {
    const r = this, i = this.parser.constructs[e], a = n.attempt(i, o, l);
    return o;
    function o(u) {
      return c(u) ? a(u) : l(u);
    }
    function l(u) {
      if (u === null) {
        n.consume(u);
        return;
      }
      return n.enter("data"), n.consume(u), s;
    }
    function s(u) {
      return c(u) ? (n.exit("data"), a(u)) : (n.consume(u), s);
    }
    function c(u) {
      if (u === null)
        return !0;
      const f = i[u];
      let d = -1;
      if (f)
        for (; ++d < f.length; ) {
          const h = f[d];
          if (!h.previous || h.previous.call(r, r.previous))
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
function K2(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
      const r = e[n - 1][1], i = t.sliceStream(r);
      let a = i.length, o = -1, l = 0, s;
      for (; a--; ) {
        const c = i[a];
        if (typeof c == "string") {
          for (o = c.length; c.charCodeAt(o - 1) === 32; )
            l++, o--;
          if (o) break;
          o = -1;
        } else if (c === -2)
          s = !0, l++;
        else if (c !== -1) {
          a++;
          break;
        }
      }
      if (l) {
        const c = {
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
          ...c.start
        }, r.start.offset === r.end.offset ? Object.assign(r, c) : (e.splice(n, 0, ["enter", c, t], ["exit", c, t]), n += 2);
      }
      n++;
    }
  return e;
}
const X2 = {
  42: He,
  43: He,
  45: He,
  48: He,
  49: He,
  50: He,
  51: He,
  52: He,
  53: He,
  54: He,
  55: He,
  56: He,
  57: He,
  62: Bs
}, Q2 = {
  91: t2
}, J2 = {
  [-2]: _r,
  [-1]: _r,
  32: _r
}, Z2 = {
  35: l2,
  42: Bn,
  45: [ko, Bn],
  60: f2,
  61: ko,
  95: Bn,
  96: bo,
  126: bo
}, ed = {
  38: Hs,
  92: $s
}, td = {
  [-5]: Mr,
  [-4]: Mr,
  [-3]: Mr,
  33: O2,
  38: Hs,
  42: ui,
  60: [z0, x2],
  91: z2,
  92: [a2, $s],
  93: sa,
  95: ui,
  96: U0
}, nd = {
  null: [ui, q2]
}, rd = {
  null: [42, 95]
}, id = {
  null: []
}, ad = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: rd,
  contentInitial: Q2,
  disable: id,
  document: X2,
  flow: Z2,
  flowInitial: J2,
  insideSpan: nd,
  string: ed,
  text: td
}, Symbol.toStringTag, { value: "Module" }));
function od(e, t, n) {
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
    attempt: F(S),
    check: F(w),
    consume: A,
    enter: E,
    exit: O,
    interrupt: F(w, {
      interrupt: !0
    })
  }, c = {
    code: null,
    containerState: {},
    defineSkip: v,
    events: [],
    now: y,
    parser: e,
    previous: null,
    sliceSerialize: d,
    sliceStream: h,
    write: f
  };
  let u = t.tokenize.call(c, s);
  return t.resolveAll && a.push(t), c;
  function f(L) {
    return o = Qe(o, L), k(), o[o.length - 1] !== null ? [] : (Q(t, 0), c.events = ur(a, c.events, c), c.events);
  }
  function d(L, B) {
    return sd(h(L), B);
  }
  function h(L) {
    return ld(o, L);
  }
  function y() {
    const {
      _bufferIndex: L,
      _index: B,
      line: D,
      column: _,
      offset: q
    } = r;
    return {
      _bufferIndex: L,
      _index: B,
      line: D,
      column: _,
      offset: q
    };
  }
  function v(L) {
    i[L.line] = L.column, C();
  }
  function k() {
    let L;
    for (; r._index < o.length; ) {
      const B = o[r._index];
      if (typeof B == "string")
        for (L = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === L && r._bufferIndex < B.length; )
          b(B.charCodeAt(r._bufferIndex));
      else
        b(B);
    }
  }
  function b(L) {
    u = u(L);
  }
  function A(L) {
    K(L) ? (r.line++, r.column = 1, r.offset += L === -3 ? 2 : 1, C()) : L !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    o[r._index].length && (r._bufferIndex = -1, r._index++)), c.previous = L;
  }
  function E(L, B) {
    const D = B || {};
    return D.type = L, D.start = y(), c.events.push(["enter", D, c]), l.push(D), D;
  }
  function O(L) {
    const B = l.pop();
    return B.end = y(), c.events.push(["exit", B, c]), B;
  }
  function S(L, B) {
    Q(L, B.from);
  }
  function w(L, B) {
    B.restore();
  }
  function F(L, B) {
    return D;
    function D(_, q, ae) {
      let fe, de, we, p;
      return Array.isArray(_) ? (
        /* c8 ignore next 1 */
        G(_)
      ) : "tokenize" in _ ? (
        // Looks like a construct.
        G([
          /** @type {Construct} */
          _
        ])
      ) : I(_);
      function I(U) {
        return J;
        function J(ee) {
          const re = ee !== null && U[ee], te = ee !== null && U.null, Ce = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(re) ? re : re ? [re] : [],
            ...Array.isArray(te) ? te : te ? [te] : []
          ];
          return G(Ce)(ee);
        }
      }
      function G(U) {
        return fe = U, de = 0, U.length === 0 ? ae : g(U[de]);
      }
      function g(U) {
        return J;
        function J(ee) {
          return p = ne(), we = U, U.partial || (c.currentConstruct = U), U.name && c.parser.constructs.disable.null.includes(U.name) ? X() : U.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            B ? Object.assign(Object.create(c), B) : c,
            s,
            M,
            X
          )(ee);
        }
      }
      function M(U) {
        return L(we, p), q;
      }
      function X(U) {
        return p.restore(), ++de < fe.length ? g(fe[de]) : ae;
      }
    }
  }
  function Q(L, B) {
    L.resolveAll && !a.includes(L) && a.push(L), L.resolve && Ge(c.events, B, c.events.length - B, L.resolve(c.events.slice(B), c)), L.resolveTo && (c.events = L.resolveTo(c.events, c));
  }
  function ne() {
    const L = y(), B = c.previous, D = c.currentConstruct, _ = c.events.length, q = Array.from(l);
    return {
      from: _,
      restore: ae
    };
    function ae() {
      r = L, c.previous = B, c.currentConstruct = D, c.events.length = _, l = q, C();
    }
  }
  function C() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function ld(e, t) {
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
function sd(e, t) {
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
function cd(e) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      Fs([ad, ...(e || {}).extensions || []])
    ),
    content: i(C0),
    defined: [],
    document: i(T0),
    flow: i(U2),
    lazy: {},
    string: i(Y2),
    text: i(G2)
  };
  return r;
  function i(a) {
    return o;
    function o(l) {
      return od(r, a, l);
    }
  }
}
function ud(e) {
  for (; !Vs(e); )
    ;
  return e;
}
const wo = /[\0\t\n\r]/g;
function fd() {
  let e = 1, t = "", n = !0, r;
  return i;
  function i(a, o, l) {
    const s = [];
    let c, u, f, d, h;
    for (a = t + (typeof a == "string" ? a.toString() : new TextDecoder(o || void 0).decode(a)), f = 0, t = "", n && (a.charCodeAt(0) === 65279 && f++, n = void 0); f < a.length; ) {
      if (wo.lastIndex = f, c = wo.exec(a), d = c && c.index !== void 0 ? c.index : a.length, h = a.charCodeAt(d), !c) {
        t = a.slice(f);
        break;
      }
      if (h === 10 && f === d && r)
        s.push(-3), r = void 0;
      else
        switch (r && (s.push(-5), r = void 0), f < d && (s.push(a.slice(f, d)), e += d - f), h) {
          case 0: {
            s.push(65533), e++;
            break;
          }
          case 9: {
            for (u = Math.ceil(e / 4) * 4, s.push(-2); e++ < u; ) s.push(-1);
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
const dd = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function hd(e) {
  return e.replace(dd, md);
}
function md(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1), a = i === 120 || i === 88;
    return Ds(n.slice(a ? 2 : 1), a ? 16 : 10);
  }
  return la(n) || e;
}
const Ks = {}.hasOwnProperty;
function pd(e, t, n) {
  return typeof t != "string" && (n = t, t = void 0), gd(n)(ud(cd(n).document().write(fd()(e, t, !0))));
}
function gd(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: a(Zt),
      autolinkProtocol: ne,
      autolinkEmail: ne,
      atxHeading: a(ge),
      blockQuote: a(te),
      characterEscape: ne,
      characterReference: ne,
      codeFenced: a(Ce),
      codeFencedFenceInfo: o,
      codeFencedFenceMeta: o,
      codeIndented: a(Ce, o),
      codeText: a(R, o),
      codeTextData: ne,
      data: ne,
      codeFlowValue: ne,
      definition: a(Oe),
      definitionDestinationString: o,
      definitionLabelString: o,
      definitionTitleString: o,
      emphasis: a(De),
      hardBreakEscape: a(St),
      hardBreakTrailing: a(St),
      htmlFlow: a(lt, o),
      htmlFlowData: ne,
      htmlText: a(lt, o),
      htmlTextData: ne,
      image: a(Nn),
      label: o,
      link: a(Zt),
      listItem: a(x),
      listItemValue: d,
      listOrdered: a(en, f),
      listUnordered: a(en),
      paragraph: a(H),
      reference: g,
      referenceString: o,
      resourceDestinationString: o,
      resourceTitleString: o,
      setextHeading: a(ge),
      strong: a(V),
      thematicBreak: a(Ie)
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
      characterReferenceValue: U,
      characterReference: J,
      codeFenced: s(k),
      codeFencedFence: v,
      codeFencedFenceInfo: h,
      codeFencedFenceMeta: y,
      codeFlowValue: C,
      codeIndented: s(b),
      codeText: s(q),
      codeTextData: C,
      data: C,
      definition: s(),
      definitionDestinationString: O,
      definitionLabelString: A,
      definitionTitleString: E,
      emphasis: s(),
      hardBreakEscape: s(B),
      hardBreakTrailing: s(B),
      htmlFlow: s(D),
      htmlFlowData: C,
      htmlText: s(_),
      htmlTextData: C,
      image: s(fe),
      label: we,
      labelText: de,
      lineEnding: L,
      link: s(ae),
      listItem: s(),
      listOrdered: s(),
      listUnordered: s(),
      paragraph: s(),
      referenceString: M,
      resourceDestinationString: p,
      resourceTitleString: I,
      resource: G,
      setextHeading: s(Q),
      setextHeadingLineSequence: F,
      setextHeadingText: w,
      strong: s(),
      thematicBreak: s()
    }
  };
  Xs(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(T) {
    let N = {
      type: "root",
      children: []
    };
    const Y = {
      stack: [N],
      tokenStack: [],
      config: t,
      enter: l,
      exit: c,
      buffer: o,
      resume: u,
      data: n
    }, oe = [];
    let ie = -1;
    for (; ++ie < T.length; )
      if (T[ie][1].type === "listOrdered" || T[ie][1].type === "listUnordered")
        if (T[ie][0] === "enter")
          oe.push(ie);
        else {
          const je = oe.pop();
          ie = i(T, je, ie);
        }
    for (ie = -1; ++ie < T.length; ) {
      const je = t[T[ie][0]];
      Ks.call(je, T[ie][1].type) && je[T[ie][1].type].call(Object.assign({
        sliceSerialize: T[ie][2].sliceSerialize
      }, Y), T[ie][1]);
    }
    if (Y.tokenStack.length > 0) {
      const je = Y.tokenStack[Y.tokenStack.length - 1];
      (je[1] || Eo).call(Y, void 0, je[0]);
    }
    for (N.position = {
      start: xt(T.length > 0 ? T[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: xt(T.length > 0 ? T[T.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, ie = -1; ++ie < t.transforms.length; )
      N = t.transforms[ie](N) || N;
    return N;
  }
  function i(T, N, Y) {
    let oe = N - 1, ie = -1, je = !1, Ue, Pe, tt, Be;
    for (; ++oe <= Y; ) {
      const We = T[oe];
      switch (We[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          We[0] === "enter" ? ie++ : ie--, Be = void 0;
          break;
        }
        case "lineEndingBlank": {
          We[0] === "enter" && (Ue && !Be && !ie && !tt && (tt = oe), Be = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          Be = void 0;
      }
      if (!ie && We[0] === "enter" && We[1].type === "listItemPrefix" || ie === -1 && We[0] === "exit" && (We[1].type === "listUnordered" || We[1].type === "listOrdered")) {
        if (Ue) {
          let Pt = oe;
          for (Pe = void 0; Pt--; ) {
            const st = T[Pt];
            if (st[1].type === "lineEnding" || st[1].type === "lineEndingBlank") {
              if (st[0] === "exit") continue;
              Pe && (T[Pe][1].type = "lineEndingBlank", je = !0), st[1].type = "lineEnding", Pe = Pt;
            } else if (!(st[1].type === "linePrefix" || st[1].type === "blockQuotePrefix" || st[1].type === "blockQuotePrefixWhitespace" || st[1].type === "blockQuoteMarker" || st[1].type === "listItemIndent")) break;
          }
          tt && (!Pe || tt < Pe) && (Ue._spread = !0), Ue.end = Object.assign({}, Pe ? T[Pe][1].start : We[1].end), T.splice(Pe || oe, 0, ["exit", Ue, We[2]]), oe++, Y++;
        }
        if (We[1].type === "listItemPrefix") {
          const Pt = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, We[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          Ue = Pt, T.splice(oe, 0, ["enter", Pt, We[2]]), oe++, Y++, tt = void 0, Be = !0;
        }
      }
    }
    return T[N][1]._spread = je, Y;
  }
  function a(T, N) {
    return Y;
    function Y(oe) {
      l.call(this, T(oe), oe), N && N.call(this, oe);
    }
  }
  function o() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function l(T, N, Y) {
    this.stack[this.stack.length - 1].children.push(T), this.stack.push(T), this.tokenStack.push([N, Y || void 0]), T.position = {
      start: xt(N.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function s(T) {
    return N;
    function N(Y) {
      T && T.call(this, Y), c.call(this, Y);
    }
  }
  function c(T, N) {
    const Y = this.stack.pop(), oe = this.tokenStack.pop();
    if (oe)
      oe[0].type !== T.type && (N ? N.call(this, T, oe[0]) : (oe[1] || Eo).call(this, T, oe[0]));
    else throw new Error("Cannot close `" + T.type + "` (" + un({
      start: T.start,
      end: T.end
    }) + "): it’s not open");
    Y.position.end = xt(T.end);
  }
  function u() {
    return oa(this.stack.pop());
  }
  function f() {
    this.data.expectingFirstListItemValue = !0;
  }
  function d(T) {
    if (this.data.expectingFirstListItemValue) {
      const N = this.stack[this.stack.length - 2];
      N.start = Number.parseInt(this.sliceSerialize(T), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function h() {
    const T = this.resume(), N = this.stack[this.stack.length - 1];
    N.lang = T;
  }
  function y() {
    const T = this.resume(), N = this.stack[this.stack.length - 1];
    N.meta = T;
  }
  function v() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function k() {
    const T = this.resume(), N = this.stack[this.stack.length - 1];
    N.value = T.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function b() {
    const T = this.resume(), N = this.stack[this.stack.length - 1];
    N.value = T.replace(/(\r?\n|\r)$/g, "");
  }
  function A(T) {
    const N = this.resume(), Y = this.stack[this.stack.length - 1];
    Y.label = N, Y.identifier = et(this.sliceSerialize(T)).toLowerCase();
  }
  function E() {
    const T = this.resume(), N = this.stack[this.stack.length - 1];
    N.title = T;
  }
  function O() {
    const T = this.resume(), N = this.stack[this.stack.length - 1];
    N.url = T;
  }
  function S(T) {
    const N = this.stack[this.stack.length - 1];
    if (!N.depth) {
      const Y = this.sliceSerialize(T).length;
      N.depth = Y;
    }
  }
  function w() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function F(T) {
    const N = this.stack[this.stack.length - 1];
    N.depth = this.sliceSerialize(T).codePointAt(0) === 61 ? 1 : 2;
  }
  function Q() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function ne(T) {
    const Y = this.stack[this.stack.length - 1].children;
    let oe = Y[Y.length - 1];
    (!oe || oe.type !== "text") && (oe = pe(), oe.position = {
      start: xt(T.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, Y.push(oe)), this.stack.push(oe);
  }
  function C(T) {
    const N = this.stack.pop();
    N.value += this.sliceSerialize(T), N.position.end = xt(T.end);
  }
  function L(T) {
    const N = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const Y = N.children[N.children.length - 1];
      Y.position.end = xt(T.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(N.type) && (ne.call(this, T), C.call(this, T));
  }
  function B() {
    this.data.atHardBreak = !0;
  }
  function D() {
    const T = this.resume(), N = this.stack[this.stack.length - 1];
    N.value = T;
  }
  function _() {
    const T = this.resume(), N = this.stack[this.stack.length - 1];
    N.value = T;
  }
  function q() {
    const T = this.resume(), N = this.stack[this.stack.length - 1];
    N.value = T;
  }
  function ae() {
    const T = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const N = this.data.referenceType || "shortcut";
      T.type += "Reference", T.referenceType = N, delete T.url, delete T.title;
    } else
      delete T.identifier, delete T.label;
    this.data.referenceType = void 0;
  }
  function fe() {
    const T = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const N = this.data.referenceType || "shortcut";
      T.type += "Reference", T.referenceType = N, delete T.url, delete T.title;
    } else
      delete T.identifier, delete T.label;
    this.data.referenceType = void 0;
  }
  function de(T) {
    const N = this.sliceSerialize(T), Y = this.stack[this.stack.length - 2];
    Y.label = hd(N), Y.identifier = et(N).toLowerCase();
  }
  function we() {
    const T = this.stack[this.stack.length - 1], N = this.resume(), Y = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, Y.type === "link") {
      const oe = T.children;
      Y.children = oe;
    } else
      Y.alt = N;
  }
  function p() {
    const T = this.resume(), N = this.stack[this.stack.length - 1];
    N.url = T;
  }
  function I() {
    const T = this.resume(), N = this.stack[this.stack.length - 1];
    N.title = T;
  }
  function G() {
    this.data.inReference = void 0;
  }
  function g() {
    this.data.referenceType = "collapsed";
  }
  function M(T) {
    const N = this.resume(), Y = this.stack[this.stack.length - 1];
    Y.label = N, Y.identifier = et(this.sliceSerialize(T)).toLowerCase(), this.data.referenceType = "full";
  }
  function X(T) {
    this.data.characterReferenceType = T.type;
  }
  function U(T) {
    const N = this.sliceSerialize(T), Y = this.data.characterReferenceType;
    let oe;
    Y ? (oe = Ds(N, Y === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : oe = la(N);
    const ie = this.stack[this.stack.length - 1];
    ie.value += oe;
  }
  function J(T) {
    const N = this.stack.pop();
    N.position.end = xt(T.end);
  }
  function ee(T) {
    C.call(this, T);
    const N = this.stack[this.stack.length - 1];
    N.url = this.sliceSerialize(T);
  }
  function re(T) {
    C.call(this, T);
    const N = this.stack[this.stack.length - 1];
    N.url = "mailto:" + this.sliceSerialize(T);
  }
  function te() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function Ce() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function R() {
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
  function ge() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function St() {
    return {
      type: "break"
    };
  }
  function lt() {
    return {
      type: "html",
      value: ""
    };
  }
  function Nn() {
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
  function H() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function V() {
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
  function Ie() {
    return {
      type: "thematicBreak"
    };
  }
}
function xt(e) {
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
    Array.isArray(r) ? Xs(e, r) : yd(e, r);
  }
}
function yd(e, t) {
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
  throw e ? new Error("Cannot close `" + e.type + "` (" + un({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + t.type + "`, " + un({
    start: t.start,
    end: t.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + un({
    start: t.start,
    end: t.end
  }) + ") is still open");
}
function xd(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return pd(r, {
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
function bd(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function vd(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function kd(e, t) {
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
function wd(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Ed(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Cd(e, t) {
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
  const c = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [s]
  };
  return e.patch(t, c), e.applyData(t, c);
}
function Sd(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Td(e, t) {
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
function Ad(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return Qs(e, t);
  const i = { src: Qt(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const a = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(t, a), e.applyData(t, a);
}
function Nd(e, t) {
  const n = { src: Qt(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function Od(e, t) {
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
function jd(e, t) {
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
function zd(e, t) {
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
function Id(e, t, n) {
  const r = e.all(t), i = n ? Pd(n) : Js(t), a = {}, o = [];
  if (typeof t.checked == "boolean") {
    const u = r[0];
    let f;
    u && u.type === "element" && u.tagName === "p" ? f = u : (f = { type: "element", tagName: "p", properties: {}, children: [] }, r.unshift(f)), f.children.length > 0 && f.children.unshift({ type: "text", value: " " }), f.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: t.checked, disabled: !0 },
      children: []
    }), a.className = ["task-list-item"];
  }
  let l = -1;
  for (; ++l < r.length; ) {
    const u = r[l];
    (i || l !== 0 || u.type !== "element" || u.tagName !== "p") && o.push({ type: "text", value: `
` }), u.type === "element" && u.tagName === "p" && !i ? o.push(...u.children) : o.push(u);
  }
  const s = r[r.length - 1];
  s && (i || s.type !== "element" || s.tagName !== "p") && o.push({ type: "text", value: `
` });
  const c = { type: "element", tagName: "li", properties: a, children: o };
  return e.patch(t, c), e.applyData(t, c);
}
function Pd(e) {
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
function Rd(e, t) {
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
function _d(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Md(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Ld(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Fd(e, t) {
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
    }, l = na(t.children[1]), s = zs(t.children[t.children.length - 1]);
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
function Dd(e, t, n) {
  const r = n ? n.children : void 0, a = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", o = n && n.type === "table" ? n.align : void 0, l = o ? o.length : t.children.length;
  let s = -1;
  const c = [];
  for (; ++s < l; ) {
    const f = t.children[s], d = {}, h = o ? o[s] : void 0;
    h && (d.align = h);
    let y = { type: "element", tagName: a, properties: d, children: [] };
    f && (y.children = e.all(f), e.patch(f, y), y = e.applyData(f, y)), c.push(y);
  }
  const u = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(c, !0)
  };
  return e.patch(t, u), e.applyData(t, u);
}
function Bd(e, t) {
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
function $d(e) {
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
function Hd(e, t) {
  const n = { type: "text", value: $d(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Vd(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Ud = {
  blockquote: bd,
  break: vd,
  code: kd,
  delete: wd,
  emphasis: Ed,
  footnoteReference: Cd,
  heading: Sd,
  html: Td,
  imageReference: Ad,
  image: Nd,
  inlineCode: Od,
  linkReference: jd,
  link: zd,
  listItem: Id,
  list: Rd,
  paragraph: _d,
  // @ts-expect-error: root is different, but hard to type.
  root: Md,
  strong: Ld,
  table: Fd,
  tableCell: Bd,
  tableRow: Dd,
  text: Hd,
  thematicBreak: Vd,
  toml: Rn,
  yaml: Rn,
  definition: Rn,
  footnoteDefinition: Rn
};
function Rn() {
}
const Zs = -1, fr = 0, dn = 1, Gn = 2, ca = 3, ua = 4, fa = 5, da = 6, ec = 7, tc = 8, Ao = typeof self == "object" ? self : globalThis, Wd = (e, t) => {
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
        for (const [s, c] of o)
          l[r(s)] = r(c);
        return l;
      }
      case ca:
        return n(new Date(o), i);
      case ua: {
        const { source: l, flags: s } = o;
        return n(new RegExp(l, s), i);
      }
      case fa: {
        const l = n(/* @__PURE__ */ new Map(), i);
        for (const [s, c] of o)
          l.set(r(s), r(c));
        return l;
      }
      case da: {
        const l = n(/* @__PURE__ */ new Set(), i);
        for (const s of o)
          l.add(r(s));
        return l;
      }
      case ec: {
        const { name: l, message: s } = o;
        return n(new Ao[l](s), i);
      }
      case tc:
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
}, No = (e) => Wd(/* @__PURE__ */ new Map(), e)(0), Dt = "", { toString: qd } = {}, { keys: Yd } = Object, ln = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [fr, t];
  const n = qd.call(e).slice(8, -1);
  switch (n) {
    case "Array":
      return [dn, Dt];
    case "Object":
      return [Gn, Dt];
    case "Date":
      return [ca, Dt];
    case "RegExp":
      return [ua, Dt];
    case "Map":
      return [fa, Dt];
    case "Set":
      return [da, Dt];
    case "DataView":
      return [dn, n];
  }
  return n.includes("Array") ? [dn, n] : n.includes("Error") ? [ec, n] : [Gn, n];
}, _n = ([e, t]) => e === fr && (t === "function" || t === "symbol"), Gd = (e, t, n, r) => {
  const i = (o, l) => {
    const s = r.push(o) - 1;
    return n.set(l, s), s;
  }, a = (o) => {
    if (n.has(o))
      return n.get(o);
    let [l, s] = ln(o);
    switch (l) {
      case fr: {
        let u = o;
        switch (s) {
          case "bigint":
            l = tc, u = o.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + s);
            u = null;
            break;
          case "undefined":
            return i([Zs], o);
        }
        return i([l, u], o);
      }
      case dn: {
        if (s) {
          let d = o;
          return s === "DataView" ? d = new Uint8Array(o.buffer) : s === "ArrayBuffer" && (d = new Uint8Array(o)), i([s, [...d]], o);
        }
        const u = [], f = i([l, u], o);
        for (const d of o)
          u.push(a(d));
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
        const u = [], f = i([l, u], o);
        for (const d of Yd(o))
          (e || !_n(ln(o[d]))) && u.push([a(d), a(o[d])]);
        return f;
      }
      case ca:
        return i([l, o.toISOString()], o);
      case ua: {
        const { source: u, flags: f } = o;
        return i([l, { source: u, flags: f }], o);
      }
      case fa: {
        const u = [], f = i([l, u], o);
        for (const [d, h] of o)
          (e || !(_n(ln(d)) || _n(ln(h)))) && u.push([a(d), a(h)]);
        return f;
      }
      case da: {
        const u = [], f = i([l, u], o);
        for (const d of o)
          (e || !_n(ln(d))) && u.push(a(d));
        return f;
      }
    }
    const { message: c } = o;
    return i([l, { name: s, message: c }], o);
  };
  return a;
}, Oo = (e, { json: t, lossy: n } = {}) => {
  const r = [];
  return Gd(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, Kn = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? No(Oo(e, t)) : structuredClone(e)
) : (e, t) => No(Oo(e, t));
function Kd(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return t > 1 && n.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), n;
}
function Xd(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function Qd(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || Kd, r = e.options.footnoteBackLabel || Xd, i = e.options.footnoteLabel || "Footnotes", a = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, l = [];
  let s = -1;
  for (; ++s < e.footnoteOrder.length; ) {
    const c = e.footnoteById.get(
      e.footnoteOrder[s]
    );
    if (!c)
      continue;
    const u = e.all(c), f = String(c.identifier).toUpperCase(), d = Qt(f.toLowerCase());
    let h = 0;
    const y = [], v = e.footnoteCounts.get(f);
    for (; v !== void 0 && ++h <= v; ) {
      y.length > 0 && y.push({ type: "text", value: " " });
      let A = typeof n == "string" ? n : n(s, h);
      typeof A == "string" && (A = { type: "text", value: A }), y.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + t + "fnref-" + d + (h > 1 ? "-" + h : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(s, h),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(A) ? A : [A]
      });
    }
    const k = u[u.length - 1];
    if (k && k.type === "element" && k.tagName === "p") {
      const A = k.children[k.children.length - 1];
      A && A.type === "text" ? A.value += " " : k.children.push({ type: "text", value: " " }), k.children.push(...y);
    } else
      u.push(...y);
    const b = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + d },
      children: e.wrap(u, !0)
    };
    e.patch(c, b), l.push(b);
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
      return th;
    if (typeof e == "function")
      return hr(e);
    if (typeof e == "object")
      return Array.isArray(e) ? Jd(e) : Zd(e);
    if (typeof e == "string")
      return eh(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function Jd(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = dr(e[n]);
  return hr(r);
  function r(...i) {
    let a = -1;
    for (; ++a < t.length; )
      if (t[a].apply(this, i)) return !0;
    return !1;
  }
}
function Zd(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return hr(n);
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
function eh(e) {
  return hr(t);
  function t(n) {
    return n && n.type === e;
  }
}
function hr(e) {
  return t;
  function t(n, r, i) {
    return !!(nh(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function th() {
  return !0;
}
function nh(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const nc = [], rh = !0, fi = !1, ih = "skip";
function rc(e, t, n, r) {
  let i;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
  const a = dr(i), o = r ? -1 : 1;
  l(e, void 0, [])();
  function l(s, c, u) {
    const f = (
      /** @type {Record<string, unknown>} */
      s && typeof s == "object" ? s : {}
    );
    if (typeof f.type == "string") {
      const h = (
        // `hast`
        typeof f.tagName == "string" ? f.tagName : (
          // `xast`
          typeof f.name == "string" ? f.name : void 0
        )
      );
      Object.defineProperty(d, "name", {
        value: "node (" + (s.type + (h ? "<" + h + ">" : "")) + ")"
      });
    }
    return d;
    function d() {
      let h = nc, y, v, k;
      if ((!t || a(s, c, u[u.length - 1] || void 0)) && (h = ah(n(s, u)), h[0] === fi))
        return h;
      if ("children" in s && s.children) {
        const b = (
          /** @type {UnistParent} */
          s
        );
        if (b.children && h[0] !== ih)
          for (v = (r ? b.children.length : -1) + o, k = u.concat(b); v > -1 && v < b.children.length; ) {
            const A = b.children[v];
            if (y = l(A, v, k)(), y[0] === fi)
              return y;
            v = typeof y[1] == "number" ? y[1] : v + o;
          }
      }
      return h;
    }
  }
}
function ah(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [rh, e] : e == null ? nc : [e];
}
function ha(e, t, n, r) {
  let i, a, o;
  typeof t == "function" ? (a = void 0, o = t, i = n) : (a = t, o = n, i = r), rc(e, a, l, i);
  function l(s, c) {
    const u = c[c.length - 1], f = u ? u.children.indexOf(s) : void 0;
    return o(s, f, u);
  }
}
const di = {}.hasOwnProperty, oh = {};
function lh(e, t) {
  const n = t || oh, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), o = { ...Ud, ...n.handlers }, l = {
    all: c,
    applyData: ch,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: a,
    footnoteOrder: [],
    handlers: o,
    one: s,
    options: n,
    patch: sh,
    wrap: fh
  };
  return ha(e, function(u) {
    if (u.type === "definition" || u.type === "footnoteDefinition") {
      const f = u.type === "definition" ? r : i, d = String(u.identifier).toUpperCase();
      f.has(d) || f.set(d, u);
    }
  }), l;
  function s(u, f) {
    const d = u.type, h = l.handlers[d];
    if (di.call(l.handlers, d) && h)
      return h(l, u, f);
    if (l.options.passThrough && l.options.passThrough.includes(d)) {
      if ("children" in u) {
        const { children: v, ...k } = u, b = Kn(k);
        return b.children = l.all(u), b;
      }
      return Kn(u);
    }
    return (l.options.unknownHandler || uh)(l, u, f);
  }
  function c(u) {
    const f = [];
    if ("children" in u) {
      const d = u.children;
      let h = -1;
      for (; ++h < d.length; ) {
        const y = l.one(d[h], u);
        if (y) {
          if (h && d[h - 1].type === "break" && (!Array.isArray(y) && y.type === "text" && (y.value = jo(y.value)), !Array.isArray(y) && y.type === "element")) {
            const v = y.children[0];
            v && v.type === "text" && (v.value = jo(v.value));
          }
          Array.isArray(y) ? f.push(...y) : f.push(y);
        }
      }
    }
    return f;
  }
}
function sh(e, t) {
  e.position && (t.position = Gf(e));
}
function ch(e, t) {
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
function uh(e, t) {
  const n = t.data || {}, r = "value" in t && !(di.call(n, "hProperties") || di.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function fh(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function jo(e) {
  let t = 0, n = e.charCodeAt(t);
  for (; n === 9 || n === 32; )
    t++, n = e.charCodeAt(t);
  return e.slice(t);
}
function zo(e, t) {
  const n = lh(e, t), r = n.one(e, void 0), i = Qd(n), a = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && a.children.push({ type: "text", value: `
` }, i), a;
}
function dh(e, t) {
  return e && "run" in e ? async function(n, r) {
    const i = (
      /** @type {HastRoot} */
      zo(n, { file: r, ...t })
    );
    await e.run(i, r);
  } : function(n, r) {
    return (
      /** @type {HastRoot} */
      zo(n, { file: r, ...e || t })
    );
  };
}
function Io(e) {
  if (e)
    throw e;
}
var Lr, Po;
function hh() {
  if (Po) return Lr;
  Po = 1;
  var e = Object.prototype.hasOwnProperty, t = Object.prototype.toString, n = Object.defineProperty, r = Object.getOwnPropertyDescriptor, i = function(c) {
    return typeof Array.isArray == "function" ? Array.isArray(c) : t.call(c) === "[object Array]";
  }, a = function(c) {
    if (!c || t.call(c) !== "[object Object]")
      return !1;
    var u = e.call(c, "constructor"), f = c.constructor && c.constructor.prototype && e.call(c.constructor.prototype, "isPrototypeOf");
    if (c.constructor && !u && !f)
      return !1;
    var d;
    for (d in c)
      ;
    return typeof d > "u" || e.call(c, d);
  }, o = function(c, u) {
    n && u.name === "__proto__" ? n(c, u.name, {
      enumerable: !0,
      configurable: !0,
      value: u.newValue,
      writable: !0
    }) : c[u.name] = u.newValue;
  }, l = function(c, u) {
    if (u === "__proto__")
      if (e.call(c, u)) {
        if (r)
          return r(c, u).value;
      } else return;
    return c[u];
  };
  return Lr = function s() {
    var c, u, f, d, h, y, v = arguments[0], k = 1, b = arguments.length, A = !1;
    for (typeof v == "boolean" && (A = v, v = arguments[1] || {}, k = 2), (v == null || typeof v != "object" && typeof v != "function") && (v = {}); k < b; ++k)
      if (c = arguments[k], c != null)
        for (u in c)
          f = l(v, u), d = l(c, u), v !== d && (A && d && (a(d) || (h = i(d))) ? (h ? (h = !1, y = f && i(f) ? f : []) : y = f && a(f) ? f : {}, o(v, { name: u, newValue: s(A, y, d) })) : typeof d < "u" && o(v, { name: u, newValue: d }));
    return v;
  }, Lr;
}
var mh = hh();
const Fr = /* @__PURE__ */ vn(mh);
function hi(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function ph() {
  const e = [], t = { run: n, use: r };
  return t;
  function n(...i) {
    let a = -1;
    const o = i.pop();
    if (typeof o != "function")
      throw new TypeError("Expected function as last argument, not " + o);
    l(null, ...i);
    function l(s, ...c) {
      const u = e[++a];
      let f = -1;
      if (s) {
        o(s);
        return;
      }
      for (; ++f < i.length; )
        (c[f] === null || c[f] === void 0) && (c[f] = i[f]);
      i = c, u ? gh(u, l)(...c) : o(null, ...c);
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
function gh(e, t) {
  let n;
  return r;
  function r(...o) {
    const l = e.length > o.length;
    let s;
    l && o.push(i);
    try {
      s = e.apply(this, o);
    } catch (c) {
      const u = (
        /** @type {Error} */
        c
      );
      if (l && n)
        throw u;
      return i(u);
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
const nt = { basename: yh, dirname: xh, extname: bh, join: vh, sep: "/" };
function yh(e, t) {
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
function xh(e) {
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
function bh(e) {
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
function vh(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    Sn(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : kh(n);
}
function kh(e) {
  Sn(e);
  const t = e.codePointAt(0) === 47;
  let n = wh(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function wh(e, t) {
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
const Eh = { cwd: Ch };
function Ch() {
  return "/";
}
function mi(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function Sh(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!mi(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return Th(e);
}
function Th(e) {
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
const Dr = (
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
class ic {
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
    t ? mi(t) ? n = { path: t } : typeof t == "string" || Ah(t) ? n = { value: t } : n = t : n = {}, this.cwd = "cwd" in n ? "" : Eh.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < Dr.length; ) {
      const a = Dr[r];
      a in n && n[a] !== void 0 && n[a] !== null && (this[a] = a === "history" ? [...n[a]] : n[a]);
    }
    let i;
    for (i in n)
      Dr.includes(i) || (this[i] = n[i]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? nt.basename(this.path) : void 0;
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
    $r(t, "basename"), Br(t, "basename"), this.path = nt.join(this.dirname || "", t);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? nt.dirname(this.path) : void 0;
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
    Ro(this.basename, "dirname"), this.path = nt.join(t || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? nt.extname(this.path) : void 0;
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
    if (Br(t, "extname"), Ro(this.dirname, "extname"), t) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = nt.join(this.dirname, this.stem + (t || ""));
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
    mi(t) && (t = Sh(t)), $r(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? nt.basename(this.path, this.extname) : void 0;
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
    $r(t, "stem"), Br(t, "stem"), this.path = nt.join(this.dirname || "", t + (this.extname || ""));
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
    const i = new Fe(
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
function Br(e, t) {
  if (e && e.includes(nt.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + nt.sep + "`"
    );
}
function $r(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function Ro(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function Ah(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Nh = (
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
), Oh = {}.hasOwnProperty;
class ma extends Nh {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = ph();
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
      new ma()
    );
    let n = -1;
    for (; ++n < this.attachers.length; ) {
      const r = this.attachers[n];
      t.use(...r);
    }
    return t.data(Fr(!0, {}, this.namespace)), t;
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
    return typeof t == "string" ? arguments.length === 2 ? (Ur("data", this.frozen), this.namespace[t] = n, this) : Oh.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (Ur("data", this.frozen), this.namespace = t, this) : this.namespace;
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
    const n = Mn(t), r = this.parser || this.Parser;
    return Hr("parse", r), r(String(n), n);
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
    return this.freeze(), Hr("process", this.parser || this.Parser), Vr("process", this.compiler || this.Compiler), n ? i(void 0, n) : new Promise(i);
    function i(a, o) {
      const l = Mn(t), s = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        r.parse(l)
      );
      r.run(s, l, function(u, f, d) {
        if (u || !f || !d)
          return c(u);
        const h = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          f
        ), y = r.stringify(h, d);
        Ih(y) ? d.value = y : d.result = y, c(
          u,
          /** @type {VFileWithOutput<CompileResult>} */
          d
        );
      });
      function c(u, f) {
        u || !f ? o(u) : a ? a(f) : n(void 0, f);
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
    return this.freeze(), Hr("processSync", this.parser || this.Parser), Vr("processSync", this.compiler || this.Compiler), this.process(t, i), Mo("processSync", "process", n), r;
    function i(a, o) {
      n = !0, Io(a), r = o;
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
    _o(t), this.freeze();
    const i = this.transformers;
    return !r && typeof n == "function" && (r = n, n = void 0), r ? a(void 0, r) : new Promise(a);
    function a(o, l) {
      const s = Mn(n);
      i.run(t, s, c);
      function c(u, f, d) {
        const h = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          f || t
        );
        u ? l(u) : o ? o(h) : r(void 0, h, d);
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
    return this.run(t, n, a), Mo("runSync", "run", r), i;
    function a(o, l) {
      Io(o), i = l, r = !0;
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
    const r = Mn(n), i = this.compiler || this.Compiler;
    return Vr("stringify", i), _o(t), i(t, r);
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
    if (Ur("use", this.frozen), t != null) if (typeof t == "function")
      s(t, n);
    else if (typeof t == "object")
      Array.isArray(t) ? l(t) : o(t);
    else
      throw new TypeError("Expected usable value, not `" + t + "`");
    return this;
    function a(c) {
      if (typeof c == "function")
        s(c, []);
      else if (typeof c == "object")
        if (Array.isArray(c)) {
          const [u, ...f] = (
            /** @type {PluginTuple<Array<unknown>>} */
            c
          );
          s(u, f);
        } else
          o(c);
      else
        throw new TypeError("Expected usable value, not `" + c + "`");
    }
    function o(c) {
      if (!("plugins" in c) && !("settings" in c))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      l(c.plugins), c.settings && (i.settings = Fr(!0, i.settings, c.settings));
    }
    function l(c) {
      let u = -1;
      if (c != null) if (Array.isArray(c))
        for (; ++u < c.length; ) {
          const f = c[u];
          a(f);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + c + "`");
    }
    function s(c, u) {
      let f = -1, d = -1;
      for (; ++f < r.length; )
        if (r[f][0] === c) {
          d = f;
          break;
        }
      if (d === -1)
        r.push([c, ...u]);
      else if (u.length > 0) {
        let [h, ...y] = u;
        const v = r[d][1];
        hi(v) && hi(h) && (h = Fr(!0, v, h)), r[d] = [c, h, ...y];
      }
    }
  }
}
const jh = new ma().freeze();
function Hr(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function Vr(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function Ur(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function _o(e) {
  if (!hi(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Mo(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function Mn(e) {
  return zh(e) ? e : new ic(e);
}
function zh(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function Ih(e) {
  return typeof e == "string" || Ph(e);
}
function Ph(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Rh = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Lo = [], Fo = { allowDangerousHtml: !0 }, _h = /^(https?|ircs?|mailto|xmpp)$/i, Mh = [
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
function Lh(e) {
  const t = Fh(e), n = Dh(e);
  return Bh(t.runSync(t.parse(n), n), e);
}
function Fh(e) {
  const t = e.rehypePlugins || Lo, n = e.remarkPlugins || Lo, r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...Fo } : Fo;
  return jh().use(xd).use(n).use(dh, r).use(t);
}
function Dh(e) {
  const t = e.children || "", n = new ic();
  return typeof t == "string" && (n.value = t), n;
}
function Bh(e, t) {
  const n = t.allowedElements, r = t.allowElement, i = t.components, a = t.disallowedElements, o = t.skipHtml, l = t.unwrapDisallowed, s = t.urlTransform || $h;
  for (const u of Mh)
    Object.hasOwn(t, u.from) && ("" + u.from + (u.to ? "use `" + u.to + "` instead" : "remove it") + Rh + u.id, void 0);
  return ha(e, c), e0(e, {
    Fragment: m.Fragment,
    // @ts-expect-error
    // React components are allowed to return numbers,
    // but not according to the types in hast-util-to-jsx-runtime
    components: i,
    ignoreInvalidStyle: !0,
    jsx: m.jsx,
    jsxs: m.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function c(u, f, d) {
    if (u.type === "raw" && d && typeof f == "number")
      return o ? d.children.splice(f, 1) : d.children[f] = { type: "text", value: u.value }, f;
    if (u.type === "element") {
      let h;
      for (h in Rr)
        if (Object.hasOwn(Rr, h) && Object.hasOwn(u.properties, h)) {
          const y = u.properties[h], v = Rr[h];
          (v === null || v.includes(u.tagName)) && (u.properties[h] = s(String(y || ""), h, u));
        }
    }
    if (u.type === "element") {
      let h = n ? !n.includes(u.tagName) : a ? a.includes(u.tagName) : !1;
      if (!h && r && typeof f == "number" && (h = !r(u, f, d)), h && d && typeof f == "number")
        return l && u.children ? d.children.splice(f, 1, ...u.children) : d.children.splice(f, 1), f;
    }
  }
}
function $h(e) {
  const t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || // It is a protocol, it should be allowed.
    _h.test(e.slice(0, t)) ? e : ""
  );
}
function Do(e, t) {
  const n = String(e);
  if (typeof t != "string")
    throw new TypeError("Expected character");
  let r = 0, i = n.indexOf(t);
  for (; i !== -1; )
    r++, i = n.indexOf(t, i + t.length);
  return r;
}
function Hh(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function Vh(e, t, n) {
  const i = dr((n || {}).ignore || []), a = Uh(t);
  let o = -1;
  for (; ++o < a.length; )
    rc(e, "text", l);
  function l(c, u) {
    let f = -1, d;
    for (; ++f < u.length; ) {
      const h = u[f], y = d ? d.children : void 0;
      if (i(
        h,
        y ? y.indexOf(h) : void 0,
        d
      ))
        return;
      d = h;
    }
    if (d)
      return s(c, u);
  }
  function s(c, u) {
    const f = u[u.length - 1], d = a[o][0], h = a[o][1];
    let y = 0;
    const k = f.children.indexOf(c);
    let b = !1, A = [];
    d.lastIndex = 0;
    let E = d.exec(c.value);
    for (; E; ) {
      const O = E.index, S = {
        index: E.index,
        input: E.input,
        stack: [...u, c]
      };
      let w = h(...E, S);
      if (typeof w == "string" && (w = w.length > 0 ? { type: "text", value: w } : void 0), w === !1 ? d.lastIndex = O + 1 : (y !== O && A.push({
        type: "text",
        value: c.value.slice(y, O)
      }), Array.isArray(w) ? A.push(...w) : w && A.push(w), y = O + E[0].length, b = !0), !d.global)
        break;
      E = d.exec(c.value);
    }
    return b ? (y < c.value.length && A.push({ type: "text", value: c.value.slice(y) }), f.children.splice(k, 1, ...A)) : A = [c], k + A.length;
  }
}
function Uh(e) {
  const t = [];
  if (!Array.isArray(e))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const n = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  for (; ++r < n.length; ) {
    const i = n[r];
    t.push([Wh(i[0]), qh(i[1])]);
  }
  return t;
}
function Wh(e) {
  return typeof e == "string" ? new RegExp(Hh(e), "g") : e;
}
function qh(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}
const Wr = "phrasing", qr = ["autolink", "link", "image", "label"];
function Yh() {
  return {
    transforms: [em],
    enter: {
      literalAutolink: Kh,
      literalAutolinkEmail: Yr,
      literalAutolinkHttp: Yr,
      literalAutolinkWww: Yr
    },
    exit: {
      literalAutolink: Zh,
      literalAutolinkEmail: Jh,
      literalAutolinkHttp: Xh,
      literalAutolinkWww: Qh
    }
  };
}
function Gh() {
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
function Kh(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function Yr(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function Xh(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function Qh(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  t.type, t.url = "http://" + this.sliceSerialize(e);
}
function Jh(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function Zh(e) {
  this.exit(e);
}
function em(e) {
  Vh(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, tm],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), nm]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function tm(e, t, n, r, i) {
  let a = "";
  if (!ac(i) || (/^w/i.test(t) && (n = t + n, t = "", a = "http://"), !rm(n)))
    return !1;
  const o = im(n + r);
  if (!o[0]) return !1;
  const l = {
    type: "link",
    title: null,
    url: a + t + o[0],
    children: [{ type: "text", value: t + o[0] }]
  };
  return o[1] ? [l, { type: "text", value: o[1] }] : l;
}
function nm(e, t, n, r) {
  return (
    // Not an expected previous character.
    !ac(r, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(n) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + t + "@" + n,
      children: [{ type: "text", value: t + "@" + n }]
    }
  );
}
function rm(e) {
  const t = e.split(".");
  return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function im(e) {
  const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t)
    return [e, void 0];
  e = e.slice(0, t.index);
  let n = t[0], r = n.indexOf(")");
  const i = Do(e, "(");
  let a = Do(e, ")");
  for (; r !== -1 && i > a; )
    e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), a++;
  return [e, n];
}
function ac(e, t) {
  const n = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || Ot(n) || cr(n)) && // If it’s an email, the previous character should not be a slash.
  (!t || n !== 47);
}
oc.peek = hm;
function am() {
  this.buffer();
}
function om(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function lm() {
  this.buffer();
}
function sm(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function cm(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = et(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function um(e) {
  this.exit(e);
}
function fm(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = et(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function dm(e) {
  this.exit(e);
}
function hm() {
  return "[";
}
function oc(e, t, n, r) {
  const i = n.createTracker(r);
  let a = i.move("[^");
  const o = n.enter("footnoteReference"), l = n.enter("reference");
  return a += i.move(
    n.safe(n.associationId(e), { after: "]", before: a })
  ), l(), o(), a += i.move("]"), a;
}
function mm() {
  return {
    enter: {
      gfmFootnoteCallString: am,
      gfmFootnoteCall: om,
      gfmFootnoteDefinitionLabelString: lm,
      gfmFootnoteDefinition: sm
    },
    exit: {
      gfmFootnoteCallString: cm,
      gfmFootnoteCall: um,
      gfmFootnoteDefinitionLabelString: fm,
      gfmFootnoteDefinition: dm
    }
  };
}
function pm(e) {
  let t = !1;
  return e && e.firstLineBlank && (t = !0), {
    handlers: { footnoteDefinition: n, footnoteReference: oc },
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["label", "phrasing", "reference"] }]
  };
  function n(r, i, a, o) {
    const l = a.createTracker(o);
    let s = l.move("[^");
    const c = a.enter("footnoteDefinition"), u = a.enter("label");
    return s += l.move(
      a.safe(a.associationId(r), { before: s, after: "]" })
    ), u(), s += l.move("]:"), r.children && r.children.length > 0 && (l.shift(4), s += l.move(
      (t ? `
` : " ") + a.indentLines(
        a.containerFlow(r, l.current()),
        t ? lc : gm
      )
    )), c(), s;
  }
}
function gm(e, t, n) {
  return t === 0 ? e : lc(e, t, n);
}
function lc(e, t, n) {
  return (n ? "" : "    ") + e;
}
const ym = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
sc.peek = wm;
function xm() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: vm },
    exit: { strikethrough: km }
  };
}
function bm() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: ym
      }
    ],
    handlers: { delete: sc }
  };
}
function vm(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function km(e) {
  this.exit(e);
}
function sc(e, t, n, r) {
  const i = n.createTracker(r), a = n.enter("strikethrough");
  let o = i.move("~~");
  return o += n.containerPhrasing(e, {
    ...i.current(),
    before: o,
    after: "~"
  }), o += i.move("~~"), a(), o;
}
function wm() {
  return "~";
}
function Em(e) {
  return e.length;
}
function Cm(e, t) {
  const n = t || {}, r = (n.align || []).concat(), i = n.stringLength || Em, a = [], o = [], l = [], s = [];
  let c = 0, u = -1;
  for (; ++u < e.length; ) {
    const v = [], k = [];
    let b = -1;
    for (e[u].length > c && (c = e[u].length); ++b < e[u].length; ) {
      const A = Sm(e[u][b]);
      if (n.alignDelimiters !== !1) {
        const E = i(A);
        k[b] = E, (s[b] === void 0 || E > s[b]) && (s[b] = E);
      }
      v.push(A);
    }
    o[u] = v, l[u] = k;
  }
  let f = -1;
  if (typeof r == "object" && "length" in r)
    for (; ++f < c; )
      a[f] = Bo(r[f]);
  else {
    const v = Bo(r);
    for (; ++f < c; )
      a[f] = v;
  }
  f = -1;
  const d = [], h = [];
  for (; ++f < c; ) {
    const v = a[f];
    let k = "", b = "";
    v === 99 ? (k = ":", b = ":") : v === 108 ? k = ":" : v === 114 && (b = ":");
    let A = n.alignDelimiters === !1 ? 1 : Math.max(
      1,
      s[f] - k.length - b.length
    );
    const E = k + "-".repeat(A) + b;
    n.alignDelimiters !== !1 && (A = k.length + A + b.length, A > s[f] && (s[f] = A), h[f] = A), d[f] = E;
  }
  o.splice(1, 0, d), l.splice(1, 0, h), u = -1;
  const y = [];
  for (; ++u < o.length; ) {
    const v = o[u], k = l[u];
    f = -1;
    const b = [];
    for (; ++f < c; ) {
      const A = v[f] || "";
      let E = "", O = "";
      if (n.alignDelimiters !== !1) {
        const S = s[f] - (k[f] || 0), w = a[f];
        w === 114 ? E = " ".repeat(S) : w === 99 ? S % 2 ? (E = " ".repeat(S / 2 + 0.5), O = " ".repeat(S / 2 - 0.5)) : (E = " ".repeat(S / 2), O = E) : O = " ".repeat(S);
      }
      n.delimiterStart !== !1 && !f && b.push("|"), n.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(n.alignDelimiters === !1 && A === "") && (n.delimiterStart !== !1 || f) && b.push(" "), n.alignDelimiters !== !1 && b.push(E), b.push(A), n.alignDelimiters !== !1 && b.push(O), n.padding !== !1 && b.push(" "), (n.delimiterEnd !== !1 || f !== c - 1) && b.push("|");
    }
    y.push(
      n.delimiterEnd === !1 ? b.join("").replace(/ +$/, "") : b.join("")
    );
  }
  return y.join(`
`);
}
function Sm(e) {
  return e == null ? "" : String(e);
}
function Bo(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
function Tm(e, t, n, r) {
  const i = n.enter("blockquote"), a = n.createTracker(r);
  a.move("> "), a.shift(2);
  const o = n.indentLines(
    n.containerFlow(e, a.current()),
    Am
  );
  return i(), o;
}
function Am(e, t, n) {
  return ">" + (n ? "" : " ") + e;
}
function Nm(e, t) {
  return $o(e, t.inConstruct, !0) && !$o(e, t.notInConstruct, !1);
}
function $o(e, t, n) {
  if (typeof t == "string" && (t = [t]), !t || t.length === 0)
    return n;
  let r = -1;
  for (; ++r < t.length; )
    if (e.includes(t[r]))
      return !0;
  return !1;
}
function Ho(e, t, n, r) {
  let i = -1;
  for (; ++i < n.unsafe.length; )
    if (n.unsafe[i].character === `
` && Nm(n.stack, n.unsafe[i]))
      return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function Om(e, t) {
  const n = String(e);
  let r = n.indexOf(t), i = r, a = 0, o = 0;
  if (typeof t != "string")
    throw new TypeError("Expected substring");
  for (; r !== -1; )
    r === i ? ++a > o && (o = a) : a = 1, i = r + t.length, r = n.indexOf(t, i);
  return o;
}
function jm(e, t) {
  return !!(t.options.fences === !1 && e.value && // If there’s no info…
  !e.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(e.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
function zm(e) {
  const t = e.options.fence || "`";
  if (t !== "`" && t !== "~")
    throw new Error(
      "Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return t;
}
function Im(e, t, n, r) {
  const i = zm(n), a = e.value || "", o = i === "`" ? "GraveAccent" : "Tilde";
  if (jm(e, n)) {
    const f = n.enter("codeIndented"), d = n.indentLines(a, Pm);
    return f(), d;
  }
  const l = n.createTracker(r), s = i.repeat(Math.max(Om(a, i) + 1, 3)), c = n.enter("codeFenced");
  let u = l.move(s);
  if (e.lang) {
    const f = n.enter(`codeFencedLang${o}`);
    u += l.move(
      n.safe(e.lang, {
        before: u,
        after: " ",
        encode: ["`"],
        ...l.current()
      })
    ), f();
  }
  if (e.lang && e.meta) {
    const f = n.enter(`codeFencedMeta${o}`);
    u += l.move(" "), u += l.move(
      n.safe(e.meta, {
        before: u,
        after: `
`,
        encode: ["`"],
        ...l.current()
      })
    ), f();
  }
  return u += l.move(`
`), a && (u += l.move(a + `
`)), u += l.move(s), c(), u;
}
function Pm(e, t, n) {
  return (n ? "" : "    ") + e;
}
function pa(e) {
  const t = e.options.quote || '"';
  if (t !== '"' && t !== "'")
    throw new Error(
      "Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`"
    );
  return t;
}
function Rm(e, t, n, r) {
  const i = pa(n), a = i === '"' ? "Quote" : "Apostrophe", o = n.enter("definition");
  let l = n.enter("label");
  const s = n.createTracker(r);
  let c = s.move("[");
  return c += s.move(
    n.safe(n.associationId(e), {
      before: c,
      after: "]",
      ...s.current()
    })
  ), c += s.move("]: "), l(), // If there’s no url, or…
  !e.url || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (l = n.enter("destinationLiteral"), c += s.move("<"), c += s.move(
    n.safe(e.url, { before: c, after: ">", ...s.current() })
  ), c += s.move(">")) : (l = n.enter("destinationRaw"), c += s.move(
    n.safe(e.url, {
      before: c,
      after: e.title ? " " : `
`,
      ...s.current()
    })
  )), l(), e.title && (l = n.enter(`title${a}`), c += s.move(" " + i), c += s.move(
    n.safe(e.title, {
      before: c,
      after: i,
      ...s.current()
    })
  ), c += s.move(i), l()), o(), c;
}
function _m(e) {
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
cc.peek = Mm;
function cc(e, t, n, r) {
  const i = _m(n), a = n.enter("emphasis"), o = n.createTracker(r), l = o.move(i);
  let s = o.move(
    n.containerPhrasing(e, {
      after: i,
      before: l,
      ...o.current()
    })
  );
  const c = s.charCodeAt(0), u = Xn(
    r.before.charCodeAt(r.before.length - 1),
    c,
    i
  );
  u.inside && (s = yn(c) + s.slice(1));
  const f = s.charCodeAt(s.length - 1), d = Xn(r.after.charCodeAt(0), f, i);
  d.inside && (s = s.slice(0, -1) + yn(f));
  const h = o.move(i);
  return a(), n.attentionEncodeSurroundingInfo = {
    after: d.outside,
    before: u.outside
  }, l + s + h;
}
function Mm(e, t, n) {
  return n.options.emphasis || "*";
}
function Lm(e, t) {
  let n = !1;
  return ha(e, function(r) {
    if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break")
      return n = !0, fi;
  }), !!((!e.depth || e.depth < 3) && oa(e) && (t.options.setext || n));
}
function Fm(e, t, n, r) {
  const i = Math.max(Math.min(6, e.depth || 1), 1), a = n.createTracker(r);
  if (Lm(e, n)) {
    const u = n.enter("headingSetext"), f = n.enter("phrasing"), d = n.containerPhrasing(e, {
      ...a.current(),
      before: `
`,
      after: `
`
    });
    return f(), u(), d + `
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
  let c = n.containerPhrasing(e, {
    before: "# ",
    after: `
`,
    ...a.current()
  });
  return /^[\t ]/.test(c) && (c = yn(c.charCodeAt(0)) + c.slice(1)), c = c ? o + " " + c : o, n.options.closeAtx && (c += " " + o), s(), l(), c;
}
uc.peek = Dm;
function uc(e) {
  return e.value || "";
}
function Dm() {
  return "<";
}
fc.peek = Bm;
function fc(e, t, n, r) {
  const i = pa(n), a = i === '"' ? "Quote" : "Apostrophe", o = n.enter("image");
  let l = n.enter("label");
  const s = n.createTracker(r);
  let c = s.move("![");
  return c += s.move(
    n.safe(e.alt, { before: c, after: "]", ...s.current() })
  ), c += s.move("]("), l(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (l = n.enter("destinationLiteral"), c += s.move("<"), c += s.move(
    n.safe(e.url, { before: c, after: ">", ...s.current() })
  ), c += s.move(">")) : (l = n.enter("destinationRaw"), c += s.move(
    n.safe(e.url, {
      before: c,
      after: e.title ? " " : ")",
      ...s.current()
    })
  )), l(), e.title && (l = n.enter(`title${a}`), c += s.move(" " + i), c += s.move(
    n.safe(e.title, {
      before: c,
      after: i,
      ...s.current()
    })
  ), c += s.move(i), l()), c += s.move(")"), o(), c;
}
function Bm() {
  return "!";
}
dc.peek = $m;
function dc(e, t, n, r) {
  const i = e.referenceType, a = n.enter("imageReference");
  let o = n.enter("label");
  const l = n.createTracker(r);
  let s = l.move("![");
  const c = n.safe(e.alt, {
    before: s,
    after: "]",
    ...l.current()
  });
  s += l.move(c + "]["), o();
  const u = n.stack;
  n.stack = [], o = n.enter("reference");
  const f = n.safe(n.associationId(e), {
    before: s,
    after: "]",
    ...l.current()
  });
  return o(), n.stack = u, a(), i === "full" || !c || c !== f ? s += l.move(f + "]") : i === "shortcut" ? s = s.slice(0, -1) : s += l.move("]"), s;
}
function $m() {
  return "!";
}
hc.peek = Hm;
function hc(e, t, n) {
  let r = e.value || "", i = "`", a = -1;
  for (; new RegExp("(^|[^`])" + i + "([^`]|$)").test(r); )
    i += "`";
  for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++a < n.unsafe.length; ) {
    const o = n.unsafe[a], l = n.compilePattern(o);
    let s;
    if (o.atBreak)
      for (; s = l.exec(r); ) {
        let c = s.index;
        r.charCodeAt(c) === 10 && r.charCodeAt(c - 1) === 13 && c--, r = r.slice(0, c) + " " + r.slice(s.index + 1);
      }
  }
  return i + r + i;
}
function Hm() {
  return "`";
}
function mc(e, t) {
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
pc.peek = Vm;
function pc(e, t, n, r) {
  const i = pa(n), a = i === '"' ? "Quote" : "Apostrophe", o = n.createTracker(r);
  let l, s;
  if (mc(e, n)) {
    const u = n.stack;
    n.stack = [], l = n.enter("autolink");
    let f = o.move("<");
    return f += o.move(
      n.containerPhrasing(e, {
        before: f,
        after: ">",
        ...o.current()
      })
    ), f += o.move(">"), l(), n.stack = u, f;
  }
  l = n.enter("link"), s = n.enter("label");
  let c = o.move("[");
  return c += o.move(
    n.containerPhrasing(e, {
      before: c,
      after: "](",
      ...o.current()
    })
  ), c += o.move("]("), s(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (s = n.enter("destinationLiteral"), c += o.move("<"), c += o.move(
    n.safe(e.url, { before: c, after: ">", ...o.current() })
  ), c += o.move(">")) : (s = n.enter("destinationRaw"), c += o.move(
    n.safe(e.url, {
      before: c,
      after: e.title ? " " : ")",
      ...o.current()
    })
  )), s(), e.title && (s = n.enter(`title${a}`), c += o.move(" " + i), c += o.move(
    n.safe(e.title, {
      before: c,
      after: i,
      ...o.current()
    })
  ), c += o.move(i), s()), c += o.move(")"), l(), c;
}
function Vm(e, t, n) {
  return mc(e, n) ? "<" : "[";
}
gc.peek = Um;
function gc(e, t, n, r) {
  const i = e.referenceType, a = n.enter("linkReference");
  let o = n.enter("label");
  const l = n.createTracker(r);
  let s = l.move("[");
  const c = n.containerPhrasing(e, {
    before: s,
    after: "]",
    ...l.current()
  });
  s += l.move(c + "]["), o();
  const u = n.stack;
  n.stack = [], o = n.enter("reference");
  const f = n.safe(n.associationId(e), {
    before: s,
    after: "]",
    ...l.current()
  });
  return o(), n.stack = u, a(), i === "full" || !c || c !== f ? s += l.move(f + "]") : i === "shortcut" ? s = s.slice(0, -1) : s += l.move("]"), s;
}
function Um() {
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
function Wm(e) {
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
function qm(e) {
  const t = e.options.bulletOrdered || ".";
  if (t !== "." && t !== ")")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return t;
}
function yc(e) {
  const t = e.options.rule || "*";
  if (t !== "*" && t !== "-" && t !== "_")
    throw new Error(
      "Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return t;
}
function Ym(e, t, n, r) {
  const i = n.enter("list"), a = n.bulletCurrent;
  let o = e.ordered ? qm(n) : ga(n);
  const l = e.ordered ? o === "." ? ")" : "." : Wm(n);
  let s = t && n.bulletLastUsed ? o === n.bulletLastUsed : !1;
  if (!e.ordered) {
    const u = e.children ? e.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (o === "*" || o === "-") && // Empty first list item:
      u && (!u.children || !u.children[0]) && // Directly in two other list items:
      n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && // That are each the first child.
      n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (s = !0), yc(n) === o && u
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
  const c = n.containerFlow(e, r);
  return n.bulletLastUsed = o, n.bulletCurrent = a, i(), c;
}
function Gm(e) {
  const t = e.options.listItemIndent || "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function Km(e, t, n, r) {
  const i = Gm(n);
  let a = n.bulletCurrent || ga(n);
  t && t.type === "list" && t.ordered && (a = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + a);
  let o = a.length + 1;
  (i === "tab" || i === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (o = Math.ceil(o / 4) * 4);
  const l = n.createTracker(r);
  l.move(a + " ".repeat(o - a.length)), l.shift(o);
  const s = n.enter("listItem"), c = n.indentLines(
    n.containerFlow(e, l.current()),
    u
  );
  return s(), c;
  function u(f, d, h) {
    return d ? (h ? "" : " ".repeat(o)) + f : (h ? a : a + " ".repeat(o - a.length)) + f;
  }
}
function Xm(e, t, n, r) {
  const i = n.enter("paragraph"), a = n.enter("phrasing"), o = n.containerPhrasing(e, r);
  return a(), i(), o;
}
const Qm = (
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
function Jm(e, t, n, r) {
  return (e.children.some(function(o) {
    return Qm(o);
  }) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
}
function Zm(e) {
  const t = e.options.strong || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`"
    );
  return t;
}
xc.peek = ep;
function xc(e, t, n, r) {
  const i = Zm(n), a = n.enter("strong"), o = n.createTracker(r), l = o.move(i + i);
  let s = o.move(
    n.containerPhrasing(e, {
      after: i,
      before: l,
      ...o.current()
    })
  );
  const c = s.charCodeAt(0), u = Xn(
    r.before.charCodeAt(r.before.length - 1),
    c,
    i
  );
  u.inside && (s = yn(c) + s.slice(1));
  const f = s.charCodeAt(s.length - 1), d = Xn(r.after.charCodeAt(0), f, i);
  d.inside && (s = s.slice(0, -1) + yn(f));
  const h = o.move(i + i);
  return a(), n.attentionEncodeSurroundingInfo = {
    after: d.outside,
    before: u.outside
  }, l + s + h;
}
function ep(e, t, n) {
  return n.options.strong || "*";
}
function tp(e, t, n, r) {
  return n.safe(e.value, r);
}
function np(e) {
  const t = e.options.ruleRepetition || 3;
  if (t < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return t;
}
function rp(e, t, n) {
  const r = (yc(n) + (n.options.ruleSpaces ? " " : "")).repeat(np(n));
  return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
const bc = {
  blockquote: Tm,
  break: Ho,
  code: Im,
  definition: Rm,
  emphasis: cc,
  hardBreak: Ho,
  heading: Fm,
  html: uc,
  image: fc,
  imageReference: dc,
  inlineCode: hc,
  link: pc,
  linkReference: gc,
  list: Ym,
  listItem: Km,
  paragraph: Xm,
  root: Jm,
  strong: xc,
  text: tp,
  thematicBreak: rp
};
function ip() {
  return {
    enter: {
      table: ap,
      tableData: Vo,
      tableHeader: Vo,
      tableRow: lp
    },
    exit: {
      codeText: sp,
      table: op,
      tableData: Gr,
      tableHeader: Gr,
      tableRow: Gr
    }
  };
}
function ap(e) {
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
function op(e) {
  this.exit(e), this.data.inTable = void 0;
}
function lp(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function Gr(e) {
  this.exit(e);
}
function Vo(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function sp(e) {
  let t = this.resume();
  this.data.inTable && (t = t.replace(/\\([\\|])/g, cp));
  const n = this.stack[this.stack.length - 1];
  n.type, n.value = t, this.exit(e);
}
function cp(e, t) {
  return t === "|" ? t : e;
}
function up(e) {
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
  function o(h, y, v, k) {
    return c(u(h, v, k), h.align);
  }
  function l(h, y, v, k) {
    const b = f(h, v, k), A = c([b]);
    return A.slice(0, A.indexOf(`
`));
  }
  function s(h, y, v, k) {
    const b = v.enter("tableCell"), A = v.enter("phrasing"), E = v.containerPhrasing(h, {
      ...k,
      before: a,
      after: a
    });
    return A(), b(), E;
  }
  function c(h, y) {
    return Cm(h, {
      align: y,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: r,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: n,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: i
    });
  }
  function u(h, y, v) {
    const k = h.children;
    let b = -1;
    const A = [], E = y.enter("table");
    for (; ++b < k.length; )
      A[b] = f(k[b], y, v);
    return E(), A;
  }
  function f(h, y, v) {
    const k = h.children;
    let b = -1;
    const A = [], E = y.enter("tableRow");
    for (; ++b < k.length; )
      A[b] = s(k[b], h, y, v);
    return E(), A;
  }
  function d(h, y, v) {
    let k = bc.inlineCode(h, y, v);
    return v.stack.includes("tableCell") && (k = k.replace(/\|/g, "\\$&")), k;
  }
}
function fp() {
  return {
    exit: {
      taskListCheckValueChecked: Uo,
      taskListCheckValueUnchecked: Uo,
      paragraph: hp
    }
  };
}
function dp() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: mp }
  };
}
function Uo(e) {
  const t = this.stack[this.stack.length - 2];
  t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function hp(e) {
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
function mp(e, t, n, r) {
  const i = e.children[0], a = typeof e.checked == "boolean" && i && i.type === "paragraph", o = "[" + (e.checked ? "x" : " ") + "] ", l = n.createTracker(r);
  a && l.move(o);
  let s = bc.listItem(e, t, n, {
    ...r,
    ...l.current()
  });
  return a && (s = s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, c)), s;
  function c(u) {
    return u + o;
  }
}
function pp() {
  return [
    Yh(),
    mm(),
    xm(),
    ip(),
    fp()
  ];
}
function gp(e) {
  return {
    extensions: [
      Gh(),
      pm(e),
      bm(),
      up(e),
      dp()
    ]
  };
}
const yp = {
  tokenize: Ep,
  partial: !0
}, vc = {
  tokenize: Cp,
  partial: !0
}, kc = {
  tokenize: Sp,
  partial: !0
}, wc = {
  tokenize: Tp,
  partial: !0
}, xp = {
  tokenize: Ap,
  partial: !0
}, Ec = {
  name: "wwwAutolink",
  tokenize: kp,
  previous: Sc
}, Cc = {
  name: "protocolAutolink",
  tokenize: wp,
  previous: Tc
}, gt = {
  name: "emailAutolink",
  tokenize: vp,
  previous: Ac
}, ot = {};
function bp() {
  return {
    text: ot
  };
}
let Tt = 48;
for (; Tt < 123; )
  ot[Tt] = gt, Tt++, Tt === 58 ? Tt = 65 : Tt === 91 && (Tt = 97);
ot[43] = gt;
ot[45] = gt;
ot[46] = gt;
ot[95] = gt;
ot[72] = [gt, Cc];
ot[104] = [gt, Cc];
ot[87] = [gt, Ec];
ot[119] = [gt, Ec];
function vp(e, t, n) {
  const r = this;
  let i, a;
  return o;
  function o(f) {
    return !pi(f) || !Ac.call(r, r.previous) || ya(r.events) ? n(f) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), l(f));
  }
  function l(f) {
    return pi(f) ? (e.consume(f), l) : f === 64 ? (e.consume(f), s) : n(f);
  }
  function s(f) {
    return f === 46 ? e.check(xp, u, c)(f) : f === 45 || f === 95 || Re(f) ? (a = !0, e.consume(f), s) : u(f);
  }
  function c(f) {
    return e.consume(f), i = !0, s;
  }
  function u(f) {
    return a && i && $e(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(f)) : n(f);
  }
}
function kp(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return o !== 87 && o !== 119 || !Sc.call(r, r.previous) || ya(r.events) ? n(o) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(yp, e.attempt(vc, e.attempt(kc, a), n), n)(o));
  }
  function a(o) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(o);
  }
}
function wp(e, t, n) {
  const r = this;
  let i = "", a = !1;
  return o;
  function o(f) {
    return (f === 72 || f === 104) && Tc.call(r, r.previous) && !ya(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(f), e.consume(f), l) : n(f);
  }
  function l(f) {
    if ($e(f) && i.length < 5)
      return i += String.fromCodePoint(f), e.consume(f), l;
    if (f === 58) {
      const d = i.toLowerCase();
      if (d === "http" || d === "https")
        return e.consume(f), s;
    }
    return n(f);
  }
  function s(f) {
    return f === 47 ? (e.consume(f), a ? c : (a = !0, s)) : n(f);
  }
  function c(f) {
    return f === null || Yn(f) || ve(f) || Ot(f) || cr(f) ? n(f) : e.attempt(vc, e.attempt(kc, u), n)(f);
  }
  function u(f) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(f);
  }
}
function Ep(e, t, n) {
  let r = 0;
  return i;
  function i(o) {
    return (o === 87 || o === 119) && r < 3 ? (r++, e.consume(o), i) : o === 46 && r === 3 ? (e.consume(o), a) : n(o);
  }
  function a(o) {
    return o === null ? n(o) : t(o);
  }
}
function Cp(e, t, n) {
  let r, i, a;
  return o;
  function o(c) {
    return c === 46 || c === 95 ? e.check(wc, s, l)(c) : c === null || ve(c) || Ot(c) || c !== 45 && cr(c) ? s(c) : (a = !0, e.consume(c), o);
  }
  function l(c) {
    return c === 95 ? r = !0 : (i = r, r = void 0), e.consume(c), o;
  }
  function s(c) {
    return i || r || !a ? n(c) : t(c);
  }
}
function Sp(e, t) {
  let n = 0, r = 0;
  return i;
  function i(o) {
    return o === 40 ? (n++, e.consume(o), i) : o === 41 && r < n ? a(o) : o === 33 || o === 34 || o === 38 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 60 || o === 63 || o === 93 || o === 95 || o === 126 ? e.check(wc, t, a)(o) : o === null || ve(o) || Ot(o) ? t(o) : (e.consume(o), i);
  }
  function a(o) {
    return o === 41 && r++, e.consume(o), i;
  }
}
function Tp(e, t, n) {
  return r;
  function r(l) {
    return l === 33 || l === 34 || l === 39 || l === 41 || l === 42 || l === 44 || l === 46 || l === 58 || l === 59 || l === 63 || l === 95 || l === 126 ? (e.consume(l), r) : l === 38 ? (e.consume(l), a) : l === 93 ? (e.consume(l), i) : (
      // `<` is an end.
      l === 60 || // So is whitespace.
      l === null || ve(l) || Ot(l) ? t(l) : n(l)
    );
  }
  function i(l) {
    return l === null || l === 40 || l === 91 || ve(l) || Ot(l) ? t(l) : r(l);
  }
  function a(l) {
    return $e(l) ? o(l) : n(l);
  }
  function o(l) {
    return l === 59 ? (e.consume(l), r) : $e(l) ? (e.consume(l), o) : n(l);
  }
}
function Ap(e, t, n) {
  return r;
  function r(a) {
    return e.consume(a), i;
  }
  function i(a) {
    return Re(a) ? n(a) : t(a);
  }
}
function Sc(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || ve(e);
}
function Tc(e) {
  return !$e(e);
}
function Ac(e) {
  return !(e === 47 || pi(e));
}
function pi(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || Re(e);
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
const Np = {
  tokenize: Mp,
  partial: !0
};
function Op() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: Pp,
        continuation: {
          tokenize: Rp
        },
        exit: _p
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: Ip
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: jp,
        resolveTo: zp
      }
    }
  };
}
function jp(e, t, n) {
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
    const c = et(r.sliceSerialize({
      start: o.end,
      end: r.now()
    }));
    return c.codePointAt(0) !== 94 || !a.includes(c.slice(1)) ? n(s) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(s), e.exit("gfmFootnoteCallLabelMarker"), t(s));
  }
}
function zp(e, t) {
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
function Ip(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let a = 0, o;
  return l;
  function l(f) {
    return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(f), e.exit("gfmFootnoteCallLabelMarker"), s;
  }
  function s(f) {
    return f !== 94 ? n(f) : (e.enter("gfmFootnoteCallMarker"), e.consume(f), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", c);
  }
  function c(f) {
    if (
      // Too long.
      a > 999 || // Closing brace with nothing.
      f === 93 && !o || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      f === null || f === 91 || ve(f)
    )
      return n(f);
    if (f === 93) {
      e.exit("chunkString");
      const d = e.exit("gfmFootnoteCallString");
      return i.includes(et(r.sliceSerialize(d))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(f), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(f);
    }
    return ve(f) || (o = !0), a++, e.consume(f), f === 92 ? u : c;
  }
  function u(f) {
    return f === 91 || f === 92 || f === 93 ? (e.consume(f), a++, c) : c(f);
  }
}
function Pp(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let a, o = 0, l;
  return s;
  function s(y) {
    return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(y), e.exit("gfmFootnoteDefinitionLabelMarker"), c;
  }
  function c(y) {
    return y === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(y), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", u) : n(y);
  }
  function u(y) {
    if (
      // Too long.
      o > 999 || // Closing brace with nothing.
      y === 93 && !l || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      y === null || y === 91 || ve(y)
    )
      return n(y);
    if (y === 93) {
      e.exit("chunkString");
      const v = e.exit("gfmFootnoteDefinitionLabelString");
      return a = et(r.sliceSerialize(v)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(y), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), d;
    }
    return ve(y) || (l = !0), o++, e.consume(y), y === 92 ? f : u;
  }
  function f(y) {
    return y === 91 || y === 92 || y === 93 ? (e.consume(y), o++, u) : u(y);
  }
  function d(y) {
    return y === 58 ? (e.enter("definitionMarker"), e.consume(y), e.exit("definitionMarker"), i.includes(a) || i.push(a), me(e, h, "gfmFootnoteDefinitionWhitespace")) : n(y);
  }
  function h(y) {
    return t(y);
  }
}
function Rp(e, t, n) {
  return e.check(Cn, t, e.attempt(Np, t, n));
}
function _p(e) {
  e.exit("gfmFootnoteDefinition");
}
function Mp(e, t, n) {
  const r = this;
  return me(e, i, "gfmFootnoteDefinitionIndent", 5);
  function i(a) {
    const o = r.events[r.events.length - 1];
    return o && o[1].type === "gfmFootnoteDefinitionIndent" && o[2].sliceSerialize(o[1], !0).length === 4 ? t(a) : n(a);
  }
}
function Lp(e) {
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
        let c = s;
        for (; c--; )
          if (o[c][0] === "exit" && o[c][1].type === "strikethroughSequenceTemporary" && o[c][1]._open && // If the sizes are the same:
          o[s][1].end.offset - o[s][1].start.offset === o[c][1].end.offset - o[c][1].start.offset) {
            o[s][1].type = "strikethroughSequence", o[c][1].type = "strikethroughSequence";
            const u = {
              type: "strikethrough",
              start: Object.assign({}, o[c][1].start),
              end: Object.assign({}, o[s][1].end)
            }, f = {
              type: "strikethroughText",
              start: Object.assign({}, o[c][1].end),
              end: Object.assign({}, o[s][1].start)
            }, d = [["enter", u, l], ["enter", o[c][1], l], ["exit", o[c][1], l], ["enter", f, l]], h = l.parser.constructs.insideSpan.null;
            h && Ge(d, d.length, 0, ur(h, o.slice(c + 1, s), l)), Ge(d, d.length, 0, [["exit", f, l], ["enter", o[s][1], l], ["exit", o[s][1], l], ["exit", u, l]]), Ge(o, c - 1, s - c + 3, d), s = c + d.length - 2;
            break;
          }
      }
    for (s = -1; ++s < o.length; )
      o[s][1].type === "strikethroughSequenceTemporary" && (o[s][1].type = "data");
    return o;
  }
  function a(o, l, s) {
    const c = this.previous, u = this.events;
    let f = 0;
    return d;
    function d(y) {
      return c === 126 && u[u.length - 1][1].type !== "characterEscape" ? s(y) : (o.enter("strikethroughSequenceTemporary"), h(y));
    }
    function h(y) {
      const v = qt(c);
      if (y === 126)
        return f > 1 ? s(y) : (o.consume(y), f++, h);
      if (f < 2 && !n) return s(y);
      const k = o.exit("strikethroughSequenceTemporary"), b = qt(y);
      return k._open = !b || b === 2 && !!v, k._close = !v || v === 2 && !!b, l(y);
    }
  }
}
class Fp {
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
    Dp(this, t, n, r);
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
function Dp(e, t, n, r) {
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
function Bp(e, t) {
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
function $p() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: Hp,
        resolveAll: Vp
      }
    }
  };
}
function Hp(e, t, n) {
  const r = this;
  let i = 0, a = 0, o;
  return l;
  function l(C) {
    let L = r.events.length - 1;
    for (; L > -1; ) {
      const _ = r.events[L][1].type;
      if (_ === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      _ === "linePrefix") L--;
      else break;
    }
    const B = L > -1 ? r.events[L][1].type : null, D = B === "tableHead" || B === "tableRow" ? w : s;
    return D === w && r.parser.lazy[r.now().line] ? n(C) : D(C);
  }
  function s(C) {
    return e.enter("tableHead"), e.enter("tableRow"), c(C);
  }
  function c(C) {
    return C === 124 || (o = !0, a += 1), u(C);
  }
  function u(C) {
    return C === null ? n(C) : K(C) ? a > 1 ? (a = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(C), e.exit("lineEnding"), h) : n(C) : ue(C) ? me(e, u, "whitespace")(C) : (a += 1, o && (o = !1, i += 1), C === 124 ? (e.enter("tableCellDivider"), e.consume(C), e.exit("tableCellDivider"), o = !0, u) : (e.enter("data"), f(C)));
  }
  function f(C) {
    return C === null || C === 124 || ve(C) ? (e.exit("data"), u(C)) : (e.consume(C), C === 92 ? d : f);
  }
  function d(C) {
    return C === 92 || C === 124 ? (e.consume(C), f) : f(C);
  }
  function h(C) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(C) : (e.enter("tableDelimiterRow"), o = !1, ue(C) ? me(e, y, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(C) : y(C));
  }
  function y(C) {
    return C === 45 || C === 58 ? k(C) : C === 124 ? (o = !0, e.enter("tableCellDivider"), e.consume(C), e.exit("tableCellDivider"), v) : S(C);
  }
  function v(C) {
    return ue(C) ? me(e, k, "whitespace")(C) : k(C);
  }
  function k(C) {
    return C === 58 ? (a += 1, o = !0, e.enter("tableDelimiterMarker"), e.consume(C), e.exit("tableDelimiterMarker"), b) : C === 45 ? (a += 1, b(C)) : C === null || K(C) ? O(C) : S(C);
  }
  function b(C) {
    return C === 45 ? (e.enter("tableDelimiterFiller"), A(C)) : S(C);
  }
  function A(C) {
    return C === 45 ? (e.consume(C), A) : C === 58 ? (o = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(C), e.exit("tableDelimiterMarker"), E) : (e.exit("tableDelimiterFiller"), E(C));
  }
  function E(C) {
    return ue(C) ? me(e, O, "whitespace")(C) : O(C);
  }
  function O(C) {
    return C === 124 ? y(C) : C === null || K(C) ? !o || i !== a ? S(C) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(C)) : S(C);
  }
  function S(C) {
    return n(C);
  }
  function w(C) {
    return e.enter("tableRow"), F(C);
  }
  function F(C) {
    return C === 124 ? (e.enter("tableCellDivider"), e.consume(C), e.exit("tableCellDivider"), F) : C === null || K(C) ? (e.exit("tableRow"), t(C)) : ue(C) ? me(e, F, "whitespace")(C) : (e.enter("data"), Q(C));
  }
  function Q(C) {
    return C === null || C === 124 || ve(C) ? (e.exit("data"), F(C)) : (e.consume(C), C === 92 ? ne : Q);
  }
  function ne(C) {
    return C === 92 || C === 124 ? (e.consume(C), Q) : Q(C);
  }
}
function Vp(e, t) {
  let n = -1, r = !0, i = 0, a = [0, 0, 0, 0], o = [0, 0, 0, 0], l = !1, s = 0, c, u, f;
  const d = new Fp();
  for (; ++n < e.length; ) {
    const h = e[n], y = h[1];
    h[0] === "enter" ? y.type === "tableHead" ? (l = !1, s !== 0 && (Wo(d, t, s, c, u), u = void 0, s = 0), c = {
      type: "table",
      start: Object.assign({}, y.start),
      // Note: correct end is set later.
      end: Object.assign({}, y.end)
    }, d.add(n, 0, [["enter", c, t]])) : y.type === "tableRow" || y.type === "tableDelimiterRow" ? (r = !0, f = void 0, a = [0, 0, 0, 0], o = [0, n + 1, 0, 0], l && (l = !1, u = {
      type: "tableBody",
      start: Object.assign({}, y.start),
      // Note: correct end is set later.
      end: Object.assign({}, y.end)
    }, d.add(n, 0, [["enter", u, t]])), i = y.type === "tableDelimiterRow" ? 2 : u ? 3 : 1) : i && (y.type === "data" || y.type === "tableDelimiterMarker" || y.type === "tableDelimiterFiller") ? (r = !1, o[2] === 0 && (a[1] !== 0 && (o[0] = o[1], f = Ln(d, t, a, i, void 0, f), a = [0, 0, 0, 0]), o[2] = n)) : y.type === "tableCellDivider" && (r ? r = !1 : (a[1] !== 0 && (o[0] = o[1], f = Ln(d, t, a, i, void 0, f)), a = o, o = [a[1], n, 0, 0])) : y.type === "tableHead" ? (l = !0, s = n) : y.type === "tableRow" || y.type === "tableDelimiterRow" ? (s = n, a[1] !== 0 ? (o[0] = o[1], f = Ln(d, t, a, i, n, f)) : o[1] !== 0 && (f = Ln(d, t, o, i, n, f)), i = 0) : i && (y.type === "data" || y.type === "tableDelimiterMarker" || y.type === "tableDelimiterFiller") && (o[3] = n);
  }
  for (s !== 0 && Wo(d, t, s, c, u), d.consume(t.events), n = -1; ++n < t.events.length; ) {
    const h = t.events[n];
    h[0] === "enter" && h[1].type === "table" && (h[1]._align = Bp(t.events, n));
  }
  return e;
}
function Ln(e, t, n, r, i, a) {
  const o = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", l = "tableContent";
  n[0] !== 0 && (a.end = Object.assign({}, Bt(t.events, n[0])), e.add(n[0], 0, [["exit", a, t]]));
  const s = Bt(t.events, n[1]);
  if (a = {
    type: o,
    start: Object.assign({}, s),
    // Note: correct end is set later.
    end: Object.assign({}, s)
  }, e.add(n[1], 0, [["enter", a, t]]), n[2] !== 0) {
    const c = Bt(t.events, n[2]), u = Bt(t.events, n[3]), f = {
      type: l,
      start: Object.assign({}, c),
      end: Object.assign({}, u)
    };
    if (e.add(n[2], 0, [["enter", f, t]]), r !== 2) {
      const d = t.events[n[2]], h = t.events[n[3]];
      if (d[1].end = Object.assign({}, h[1].end), d[1].type = "chunkText", d[1].contentType = "text", n[3] > n[2] + 1) {
        const y = n[2] + 1, v = n[3] - n[2] - 1;
        e.add(y, v, []);
      }
    }
    e.add(n[3] + 1, 0, [["exit", f, t]]);
  }
  return i !== void 0 && (a.end = Object.assign({}, Bt(t.events, i)), e.add(i, 0, [["exit", a, t]]), a = void 0), a;
}
function Wo(e, t, n, r, i) {
  const a = [], o = Bt(t.events, n);
  i && (i.end = Object.assign({}, o), a.push(["exit", i, t])), r.end = Object.assign({}, o), a.push(["exit", r, t]), e.add(n + 1, 0, a);
}
function Bt(e, t) {
  const n = e[t], r = n[0] === "enter" ? "start" : "end";
  return n[1][r];
}
const Up = {
  name: "tasklistCheck",
  tokenize: qp
};
function Wp() {
  return {
    text: {
      91: Up
    }
  };
}
function qp(e, t, n) {
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
    return ve(s) ? (e.enter("taskListCheckValueUnchecked"), e.consume(s), e.exit("taskListCheckValueUnchecked"), o) : s === 88 || s === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(s), e.exit("taskListCheckValueChecked"), o) : n(s);
  }
  function o(s) {
    return s === 93 ? (e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), l) : n(s);
  }
  function l(s) {
    return K(s) ? t(s) : ue(s) ? e.check({
      tokenize: Yp
    }, t, n)(s) : n(s);
  }
}
function Yp(e, t, n) {
  return me(e, r, "whitespace");
  function r(i) {
    return i === null ? n(i) : t(i);
  }
}
function Gp(e) {
  return Fs([
    bp(),
    Op(),
    Lp(e),
    $p(),
    Wp()
  ]);
}
const Kp = {};
function Xp(e) {
  const t = (
    /** @type {Processor<Root>} */
    this
  ), n = e || Kp, r = t.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), a = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), o = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  i.push(Gp(n)), a.push(pp()), o.push(gp(n));
}
const u6 = ({ mark_down_data: e }) => /* @__PURE__ */ m.jsx(Le, { children: /* @__PURE__ */ m.jsx(be, { className: "rounded background-color-body mt-3 p-2", children: /* @__PURE__ */ m.jsx(ce, { children: /* @__PURE__ */ m.jsx("div", { className: "mb-0 mt-1 font-color-class bio-desc markdown-body", children: /* @__PURE__ */ m.jsx(Lh, { remarkPlugins: [Xp], children: e }) }) }) }) }), f6 = ({ more_link: e }) => /* @__PURE__ */ m.jsx(Le, { children: /* @__PURE__ */ m.jsx(be, { className: "", children: /* @__PURE__ */ m.jsx(ce, { className: "text-center", children: /* @__PURE__ */ m.jsx("h1", { className: "animate bounce", children: /* @__PURE__ */ m.jsxs(
  "a",
  {
    className: "text-decoration-none more-color",
    href: e,
    rel: "noopener noreferrer",
    children: [
      /* @__PURE__ */ m.jsx("span", { className: "dot", children: "." }),
      /* @__PURE__ */ m.jsx("span", { className: "dot", children: "." }),
      /* @__PURE__ */ m.jsx("span", { className: "dot", children: "." })
    ]
  }
) }) }) }) });
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function Qp(e, t, n) {
  return (t = Zp(t)) in e ? Object.defineProperty(e, t, {
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
function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qo(Object(n), !0).forEach(function(r) {
      Qp(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qo(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Jp(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Zp(e) {
  var t = Jp(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const Yo = () => {
};
let xa = {}, Nc = {}, Oc = null, jc = {
  mark: Yo,
  measure: Yo
};
try {
  typeof window < "u" && (xa = window), typeof document < "u" && (Nc = document), typeof MutationObserver < "u" && (Oc = MutationObserver), typeof performance < "u" && (jc = performance);
} catch {
}
const {
  userAgent: Go = ""
} = xa.navigator || {}, kt = xa, Ee = Nc, Ko = Oc, Fn = jc;
kt.document;
const yt = !!Ee.documentElement && !!Ee.head && typeof Ee.addEventListener == "function" && typeof Ee.createElement == "function", zc = ~Go.indexOf("MSIE") || ~Go.indexOf("Trident/");
var e3 = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, t3 = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Ic = {
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
}, n3 = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Pc = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Me = "classic", mr = "duotone", r3 = "sharp", i3 = "sharp-duotone", Rc = [Me, mr, r3, i3], a3 = {
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
}, o3 = {
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
}, l3 = /* @__PURE__ */ new Map([["classic", {
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
}]]), s3 = {
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
}, c3 = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Xo = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, u3 = ["kit"], f3 = {
  kit: {
    "fa-kit": "fak"
  }
}, d3 = ["fak", "fakd"], h3 = {
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
}, Dn = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, m3 = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], p3 = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], g3 = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, y3 = {
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
}, x3 = {
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
}, b3 = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], yi = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...m3, ...b3], v3 = ["solid", "regular", "light", "thin", "duotone", "brands"], _c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], k3 = _c.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), w3 = [...Object.keys(x3), ...v3, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Dn.GROUP, Dn.SWAP_OPACITY, Dn.PRIMARY, Dn.SECONDARY].concat(_c.map((e) => "".concat(e, "x"))).concat(k3.map((e) => "w-".concat(e))), E3 = {
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
const ht = "___FONT_AWESOME___", xi = 16, Mc = "fa", Lc = "svg-inline--fa", jt = "data-fa-i2svg", bi = "data-fa-pseudo-element", C3 = "data-fa-pseudo-element-pending", ba = "data-prefix", va = "data-icon", Jo = "fontawesome-i2svg", S3 = "async", T3 = ["HTML", "HEAD", "STYLE", "SCRIPT"], Fc = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function Tn(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[Me];
    }
  });
}
const Dc = j({}, Ic);
Dc[Me] = j(j(j(j({}, {
  "fa-duotone": "duotone"
}), Ic[Me]), Xo.kit), Xo["kit-duotone"]);
const A3 = Tn(Dc), vi = j({}, s3);
vi[Me] = j(j(j(j({}, {
  duotone: "fad"
}), vi[Me]), Qo.kit), Qo["kit-duotone"]);
const Zo = Tn(vi), ki = j({}, gi);
ki[Me] = j(j({}, ki[Me]), h3.kit);
const ka = Tn(ki), wi = j({}, y3);
wi[Me] = j(j({}, wi[Me]), f3.kit);
Tn(wi);
const N3 = e3, Bc = "fa-layers-text", O3 = t3, j3 = j({}, a3);
Tn(j3);
const z3 = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Kr = n3, I3 = [...u3, ...w3], hn = kt.FontAwesomeConfig || {};
function P3(e) {
  var t = Ee.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function R3(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
Ee && typeof Ee.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const i = R3(P3(n));
  i != null && (hn[r] = i);
});
const $c = {
  styleDefault: "solid",
  familyDefault: Me,
  cssPrefix: Mc,
  replacementClass: Lc,
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
hn.familyPrefix && (hn.cssPrefix = hn.familyPrefix);
const Yt = j(j({}, $c), hn);
Yt.autoReplaceSvg || (Yt.observeMutations = !1);
const W = {};
Object.keys($c).forEach((e) => {
  Object.defineProperty(W, e, {
    enumerable: !0,
    set: function(t) {
      Yt[e] = t, mn.forEach((n) => n(W));
    },
    get: function() {
      return Yt[e];
    }
  });
});
Object.defineProperty(W, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Yt.cssPrefix = e, mn.forEach((t) => t(W));
  },
  get: function() {
    return Yt.cssPrefix;
  }
});
kt.FontAwesomeConfig = W;
const mn = [];
function _3(e) {
  return mn.push(e), () => {
    mn.splice(mn.indexOf(e), 1);
  };
}
const bt = xi, it = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function M3(e) {
  if (!e || !yt)
    return;
  const t = Ee.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = Ee.head.childNodes;
  let r = null;
  for (let i = n.length - 1; i > -1; i--) {
    const a = n[i], o = (a.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(o) > -1 && (r = a);
  }
  return Ee.head.insertBefore(t, r), e;
}
const L3 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function xn() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += L3[Math.random() * 62 | 0];
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
function Hc(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function F3(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(Hc(e[n]), '" '), "").trim();
}
function pr(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function Ea(e) {
  return e.size !== it.size || e.x !== it.x || e.y !== it.y || e.rotate !== it.rotate || e.flipX || e.flipY;
}
function D3(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: r
  } = e;
  const i = {
    transform: "translate(".concat(n / 2, " 256)")
  }, a = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), o = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), l = "rotate(".concat(t.rotate, " 0 0)"), s = {
    transform: "".concat(a, " ").concat(o, " ").concat(l)
  }, c = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: i,
    inner: s,
    path: c
  };
}
function B3(e) {
  let {
    transform: t,
    width: n = xi,
    height: r = xi,
    startCentered: i = !1
  } = e, a = "";
  return i && zc ? a += "translate(".concat(t.x / bt - n / 2, "em, ").concat(t.y / bt - r / 2, "em) ") : i ? a += "translate(calc(-50% + ".concat(t.x / bt, "em), calc(-50% + ").concat(t.y / bt, "em)) ") : a += "translate(".concat(t.x / bt, "em, ").concat(t.y / bt, "em) "), a += "scale(".concat(t.size / bt * (t.flipX ? -1 : 1), ", ").concat(t.size / bt * (t.flipY ? -1 : 1), ") "), a += "rotate(".concat(t.rotate, "deg) "), a;
}
var $3 = `:root, :host {
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
function Vc() {
  const e = Mc, t = Lc, n = W.cssPrefix, r = W.replacementClass;
  let i = $3;
  if (n !== e || r !== t) {
    const a = new RegExp("\\.".concat(e, "\\-"), "g"), o = new RegExp("\\--".concat(e, "\\-"), "g"), l = new RegExp("\\.".concat(t), "g");
    i = i.replace(a, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(l, ".".concat(r));
  }
  return i;
}
let el = !1;
function Xr() {
  W.autoAddCss && !el && (M3(Vc()), el = !0);
}
var H3 = {
  mixout() {
    return {
      dom: {
        css: Vc,
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
const mt = kt || {};
mt[ht] || (mt[ht] = {});
mt[ht].styles || (mt[ht].styles = {});
mt[ht].hooks || (mt[ht].hooks = {});
mt[ht].shims || (mt[ht].shims = []);
var at = mt[ht];
const Uc = [], Wc = function() {
  Ee.removeEventListener("DOMContentLoaded", Wc), Qn = 1, Uc.map((e) => e());
};
let Qn = !1;
yt && (Qn = (Ee.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Ee.readyState), Qn || Ee.addEventListener("DOMContentLoaded", Wc));
function V3(e) {
  yt && (Qn ? setTimeout(e, 0) : Uc.push(e));
}
function An(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? Hc(e) : "<".concat(t, " ").concat(F3(n), ">").concat(r.map(An).join(""), "</").concat(t, ">");
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
  var a = Object.keys(t), o = a.length, l = n, s, c, u;
  for (r === void 0 ? (s = 1, u = t[a[0]]) : (s = 0, u = r); s < o; s++)
    c = a[s], u = l(u, t[c], c, t);
  return u;
};
function U3(e) {
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
  const t = U3(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function W3(e, t) {
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
  typeof at.hooks.addPack == "function" && !r ? at.hooks.addPack(e, nl(t)) : at.styles[e] = j(j({}, at.styles[e] || {}), i), e === "fas" && Ci("fa", t);
}
const {
  styles: bn,
  shims: q3
} = at, qc = Object.keys(ka), Y3 = qc.reduce((e, t) => (e[t] = Object.keys(ka[t]), e), {});
let Ca = null, Yc = {}, Gc = {}, Kc = {}, Xc = {}, Qc = {};
function G3(e) {
  return ~I3.indexOf(e);
}
function K3(e, t) {
  const n = t.split("-"), r = n[0], i = n.slice(1).join("-");
  return r === e && i !== "" && !G3(i) ? i : null;
}
const Jc = () => {
  const e = (r) => Qr(bn, (i, a, o) => (i[o] = Qr(a, r, {}), i), {});
  Yc = e((r, i, a) => (i[3] && (r[i[3]] = a), i[2] && i[2].filter((l) => typeof l == "number").forEach((l) => {
    r[l.toString(16)] = a;
  }), r)), Gc = e((r, i, a) => (r[a] = a, i[2] && i[2].filter((l) => typeof l == "string").forEach((l) => {
    r[l] = a;
  }), r)), Qc = e((r, i, a) => {
    const o = i[2];
    return r[a] = a, o.forEach((l) => {
      r[l] = a;
    }), r;
  });
  const t = "far" in bn || W.autoFetchSvg, n = Qr(q3, (r, i) => {
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
  Kc = n.names, Xc = n.unicodes, Ca = gr(W.styleDefault, {
    family: W.familyDefault
  });
};
_3((e) => {
  Ca = gr(e.styleDefault, {
    family: W.familyDefault
  });
});
Jc();
function Sa(e, t) {
  return (Yc[e] || {})[t];
}
function X3(e, t) {
  return (Gc[e] || {})[t];
}
function Nt(e, t) {
  return (Qc[e] || {})[t];
}
function Zc(e) {
  return Kc[e] || {
    prefix: null,
    iconName: null
  };
}
function Q3(e) {
  const t = Xc[e], n = Sa("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function wt() {
  return Ca;
}
const eu = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function J3(e) {
  let t = Me;
  const n = qc.reduce((r, i) => (r[i] = "".concat(W.cssPrefix, "-").concat(i), r), {});
  return Rc.forEach((r) => {
    (e.includes(n[r]) || e.some((i) => Y3[r].includes(i))) && (t = r);
  }), t;
}
function gr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = Me
  } = t, r = A3[n][e];
  if (n === mr && !e)
    return "fad";
  const i = Zo[n][e] || Zo[n][r], a = e in at.styles ? e : null;
  return i || a || null;
}
function Z3(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const i = K3(W.cssPrefix, r);
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
  const i = yi.concat(p3), a = rl(e.filter((f) => i.includes(f))), o = rl(e.filter((f) => !yi.includes(f))), l = a.filter((f) => (r = f, !Pc.includes(f))), [s = null] = l, c = J3(a), u = j(j({}, Z3(o)), {}, {
    prefix: gr(s, {
      family: c
    })
  });
  return j(j(j({}, u), r4({
    values: e,
    family: c,
    styles: bn,
    config: W,
    canonical: u,
    givenPrefix: r
  })), e4(n, r, u));
}
function e4(e, t, n) {
  let {
    prefix: r,
    iconName: i
  } = n;
  if (e || !r || !i)
    return {
      prefix: r,
      iconName: i
    };
  const a = t === "fa" ? Zc(i) : {}, o = Nt(r, i);
  return i = a.iconName || o || i, r = a.prefix || r, r === "far" && !bn.far && bn.fas && !W.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: i
  };
}
const t4 = Rc.filter((e) => e !== Me || e !== mr), n4 = Object.keys(gi).filter((e) => e !== Me).map((e) => Object.keys(gi[e])).flat();
function r4(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: i = "",
    styles: a = {},
    config: o = {}
  } = e, l = n === mr, s = t.includes("fa-duotone") || t.includes("fad"), c = o.familyDefault === "duotone", u = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!l && (s || c || u) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && t4.includes(n) && (Object.keys(a).find((d) => n4.includes(d)) || o.autoFetchSvg)) {
    const d = l3.get(n).defaultShortPrefixId;
    r.prefix = d, r.iconName = Nt(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || i === "fa") && (r.prefix = wt() || "fas"), r;
}
class i4 {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const i = n.reduce(this._pullDefinitions, {});
    Object.keys(i).forEach((a) => {
      this.definitions[a] = j(j({}, this.definitions[a] || {}), i[a]), Ci(a, i[a]);
      const o = ka[Me][a];
      o && Ci(o, i[a]), Jc();
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
      t[a] || (t[a] = {}), s.length > 0 && s.forEach((c) => {
        typeof c == "string" && (t[a][c] = l);
      }), t[a][o] = l;
    }), t;
  }
}
let il = [], Ht = {};
const Wt = {}, a4 = Object.keys(Wt);
function o4(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return il = e, Ht = {}, Object.keys(Wt).forEach((r) => {
    a4.indexOf(r) === -1 && delete Wt[r];
  }), il.forEach((r) => {
    const i = r.mixout ? r.mixout() : {};
    if (Object.keys(i).forEach((a) => {
      typeof i[a] == "function" && (n[a] = i[a]), typeof i[a] == "object" && Object.keys(i[a]).forEach((o) => {
        n[a] || (n[a] = {}), n[a][o] = i[a][o];
      });
    }), r.hooks) {
      const a = r.hooks();
      Object.keys(a).forEach((o) => {
        Ht[o] || (Ht[o] = []), Ht[o].push(a[o]);
      });
    }
    r.provides && r.provides(Wt);
  }), n;
}
function Si(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    r[i - 2] = arguments[i];
  return (Ht[e] || []).forEach((o) => {
    t = o.apply(null, [t, ...r]);
  }), t;
}
function zt(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (Ht[e] || []).forEach((a) => {
    a.apply(null, n);
  });
}
function Et() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return Wt[e] ? Wt[e].apply(null, t) : void 0;
}
function Ti(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || wt();
  if (t)
    return t = Nt(n, t) || t, tl(tu.definitions, n, t) || tl(at.styles, n, t);
}
const tu = new i4(), l4 = () => {
  W.autoReplaceSvg = !1, W.observeMutations = !1, zt("noAuto");
}, s4 = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return yt ? (zt("beforeI2svg", e), Et("pseudoElements2svg", e), Et("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    W.autoReplaceSvg === !1 && (W.autoReplaceSvg = !0), W.observeMutations = !0, V3(() => {
      u4({
        autoReplaceSvgRoot: t
      }), zt("watch", e);
    });
  }
}, c4 = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: Nt(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = gr(e[0]);
      return {
        prefix: n,
        iconName: Nt(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(W.cssPrefix, "-")) > -1 || e.match(N3))) {
      const t = yr(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || wt(),
        iconName: Nt(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = wt();
      return {
        prefix: t,
        iconName: Nt(t, e) || e
      };
    }
  }
}, Ke = {
  noAuto: l4,
  config: W,
  dom: s4,
  parse: c4,
  library: tu,
  findIconDefinition: Ti,
  toHtml: An
}, u4 = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = Ee
  } = e;
  (Object.keys(at.styles).length > 0 || W.autoFetchSvg) && yt && W.autoReplaceSvg && Ke.dom.i2svg({
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
      if (!yt) return;
      const n = Ee.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function f4(e) {
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
    } = n, c = {
      x: l / s / 2,
      y: 0.5
    };
    i.style = pr(j(j({}, a), {}, {
      "transform-origin": "".concat(c.x + o.x / 16, "em ").concat(c.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: i,
    children: t
  }];
}
function d4(e) {
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
      attributes: j(j({}, i), {}, {
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
    titleId: c,
    extra: u,
    watchable: f = !1
  } = e, {
    width: d,
    height: h
  } = n.found ? n : t, y = d3.includes(r), v = [W.replacementClass, i ? "".concat(W.cssPrefix, "-").concat(i) : ""].filter((S) => u.classes.indexOf(S) === -1).filter((S) => S !== "" || !!S).concat(u.classes).join(" ");
  let k = {
    children: [],
    attributes: j(j({}, u.attributes), {}, {
      "data-prefix": r,
      "data-icon": i,
      class: v,
      role: u.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(d, " ").concat(h)
    })
  };
  const b = y && !~u.classes.indexOf("fa-fw") ? {
    width: "".concat(d / h * 16 * 0.0625, "em")
  } : {};
  f && (k.attributes[jt] = ""), l && (k.children.push({
    tag: "title",
    attributes: {
      id: k.attributes["aria-labelledby"] || "title-".concat(c || xn())
    },
    children: [l]
  }), delete k.attributes.title);
  const A = j(j({}, k), {}, {
    prefix: r,
    iconName: i,
    main: t,
    mask: n,
    maskId: s,
    transform: a,
    symbol: o,
    styles: j(j({}, b), u.styles)
  }), {
    children: E,
    attributes: O
  } = n.found && t.found ? Et("generateAbstractMask", A) || {
    children: [],
    attributes: {}
  } : Et("generateAbstractIcon", A) || {
    children: [],
    attributes: {}
  };
  return A.children = E, A.attributes = O, o ? d4(A) : f4(A);
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
  } = e, s = j(j(j({}, o.attributes), a ? {
    title: a
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  l && (s[jt] = "");
  const c = j({}, o.styles);
  Ea(i) && (c.transform = B3({
    transform: i,
    startCentered: !0,
    width: n,
    height: r
  }), c["-webkit-transform"] = c.transform);
  const u = pr(c);
  u.length > 0 && (s.style = u);
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
function h4(e) {
  const {
    content: t,
    title: n,
    extra: r
  } = e, i = j(j(j({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), a = pr(r.styles);
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
} = at;
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
const m4 = {
  found: !1,
  width: 512,
  height: 512
};
function p4(e, t) {
  !Fc && !W.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function Ni(e, t) {
  let n = t;
  return t === "fa" && W.styleDefault !== null && (t = wt()), new Promise((r, i) => {
    if (n === "fa") {
      const a = Zc(e) || {};
      e = a.iconName || e, t = a.prefix || t;
    }
    if (e && t && Jr[t] && Jr[t][e]) {
      const a = Jr[t][e];
      return r(Ai(a));
    }
    p4(e, t), r(j(j({}, m4), {}, {
      icon: W.showMissingIcons && e ? Et("missingIconAbstract") || {} : {}
    }));
  });
}
const ol = () => {
}, Oi = W.measurePerformance && Fn && Fn.mark && Fn.measure ? Fn : {
  mark: ol,
  measure: ol
}, cn = 'FA "6.7.2"', g4 = (e) => (Oi.mark("".concat(cn, " ").concat(e, " begins")), () => nu(e)), nu = (e) => {
  Oi.mark("".concat(cn, " ").concat(e, " ends")), Oi.measure("".concat(cn, " ").concat(e), "".concat(cn, " ").concat(e, " begins"), "".concat(cn, " ").concat(e, " ends"));
};
var Aa = {
  begin: g4,
  end: nu
};
const $n = () => {
};
function ll(e) {
  return typeof (e.getAttribute ? e.getAttribute(jt) : null) == "string";
}
function y4(e) {
  const t = e.getAttribute ? e.getAttribute(ba) : null, n = e.getAttribute ? e.getAttribute(va) : null;
  return t && n;
}
function x4(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(W.replacementClass);
}
function b4() {
  return W.autoReplaceSvg === !0 ? Hn.replace : Hn[W.autoReplaceSvg] || Hn.replace;
}
function v4(e) {
  return Ee.createElementNS("http://www.w3.org/2000/svg", e);
}
function k4(e) {
  return Ee.createElement(e);
}
function ru(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? v4 : k4
  } = t;
  if (typeof e == "string")
    return Ee.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(a) {
    r.setAttribute(a, e.attributes[a]);
  }), (e.children || []).forEach(function(a) {
    r.appendChild(ru(a, {
      ceFn: n
    }));
  }), r;
}
function w4(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const Hn = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(ru(n), t);
      }), t.getAttribute(jt) === null && W.keepOriginalSource) {
        let n = Ee.createComment(w4(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~wa(t).indexOf(W.replacementClass))
      return Hn.replace(e);
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
    t.setAttribute(jt, ""), t.innerHTML = i;
  }
};
function sl(e) {
  e();
}
function iu(e, t) {
  const n = typeof t == "function" ? t : $n;
  if (e.length === 0)
    n();
  else {
    let r = sl;
    W.mutateApproach === S3 && (r = kt.requestAnimationFrame || sl), r(() => {
      const i = b4(), a = Aa.begin("mutate");
      e.map(i), a(), n();
    });
  }
}
let Na = !1;
function au() {
  Na = !0;
}
function ji() {
  Na = !1;
}
let Jn = null;
function cl(e) {
  if (!Ko || !W.observeMutations)
    return;
  const {
    treeCallback: t = $n,
    nodeCallback: n = $n,
    pseudoElementsCallback: r = $n,
    observeMutationsRoot: i = Ee
  } = e;
  Jn = new Ko((a) => {
    if (Na) return;
    const o = wt();
    Jt(a).forEach((l) => {
      if (l.type === "childList" && l.addedNodes.length > 0 && !ll(l.addedNodes[0]) && (W.searchPseudoElements && r(l.target), t(l.target)), l.type === "attributes" && l.target.parentNode && W.searchPseudoElements && r(l.target.parentNode), l.type === "attributes" && ll(l.target) && ~z3.indexOf(l.attributeName))
        if (l.attributeName === "class" && y4(l.target)) {
          const {
            prefix: s,
            iconName: c
          } = yr(wa(l.target));
          l.target.setAttribute(ba, s || o), c && l.target.setAttribute(va, c);
        } else x4(l.target) && n(l.target);
    });
  }), yt && Jn.observe(i, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function E4() {
  Jn && Jn.disconnect();
}
function C4(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, i) => {
    const a = i.split(":"), o = a[0], l = a.slice(1);
    return o && l.length > 0 && (r[o] = l.join(":").trim()), r;
  }, {})), n;
}
function S4(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let i = yr(wa(e));
  return i.prefix || (i.prefix = wt()), t && n && (i.prefix = t, i.iconName = n), i.iconName && i.prefix || (i.prefix && r.length > 0 && (i.iconName = X3(i.prefix, e.innerText) || Sa(i.prefix, Ei(e.innerText))), !i.iconName && W.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = e.firstChild.data)), i;
}
function T4(e) {
  const t = Jt(e.attributes).reduce((i, a) => (i.name !== "class" && i.name !== "style" && (i[a.name] = a.value), i), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return W.autoA11y && (n ? t["aria-labelledby"] = "".concat(W.replacementClass, "-title-").concat(r || xn()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function A4() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: it,
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
function ul(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: i
  } = S4(e), a = T4(e), o = Si("parseNodeAttributes", {}, e);
  let l = t.styleParser ? C4(e) : [];
  return j({
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: it,
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
  styles: N4
} = at;
function ou(e) {
  const t = W.autoReplaceSvg === "nest" ? ul(e, {
    styleParser: !1
  }) : ul(e);
  return ~t.extra.classes.indexOf(Bc) ? Et("generateLayersText", e, t) : Et("generateSvgReplacementMutation", e, t);
}
function O4() {
  return [...c3, ...yi];
}
function fl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!yt) return Promise.resolve();
  const n = Ee.documentElement.classList, r = (u) => n.add("".concat(Jo, "-").concat(u)), i = (u) => n.remove("".concat(Jo, "-").concat(u)), a = W.autoFetchSvg ? O4() : Pc.concat(Object.keys(N4));
  a.includes("fa") || a.push("fa");
  const o = [".".concat(Bc, ":not([").concat(jt, "])")].concat(a.map((u) => ".".concat(u, ":not([").concat(jt, "])"))).join(", ");
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
  const s = Aa.begin("onTree"), c = l.reduce((u, f) => {
    try {
      const d = ou(f);
      d && u.push(d);
    } catch (d) {
      Fc || d.name === "MissingIcon" && console.error(d);
    }
    return u;
  }, []);
  return new Promise((u, f) => {
    Promise.all(c).then((d) => {
      iu(d, () => {
        r("active"), r("complete"), i("pending"), typeof t == "function" && t(), s(), u();
      });
    }).catch((d) => {
      s(), f(d);
    });
  });
}
function j4(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  ou(e).then((n) => {
    n && iu([n], t);
  });
}
function z4(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : Ti(t || {});
    let {
      mask: i
    } = n;
    return i && (i = (i || {}).icon ? i : Ti(i || {})), e(r, j(j({}, n), {}, {
      mask: i
    }));
  };
}
const I4 = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = it,
    symbol: r = !1,
    mask: i = null,
    maskId: a = null,
    title: o = null,
    titleId: l = null,
    classes: s = [],
    attributes: c = {},
    styles: u = {}
  } = t;
  if (!e) return;
  const {
    prefix: f,
    iconName: d,
    icon: h
  } = e;
  return xr(j({
    type: "icon"
  }, e), () => (zt("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), W.autoA11y && (o ? c["aria-labelledby"] = "".concat(W.replacementClass, "-title-").concat(l || xn()) : (c["aria-hidden"] = "true", c.focusable = "false")), Ta({
    icons: {
      main: Ai(h),
      mask: i ? Ai(i.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: f,
    iconName: d,
    transform: j(j({}, it), n),
    symbol: r,
    title: o,
    maskId: a,
    titleId: l,
    extra: {
      attributes: c,
      styles: u,
      classes: s
    }
  })));
};
var P4 = {
  mixout() {
    return {
      icon: z4(I4)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = fl, e.nodeCallback = j4, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = Ee,
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
        mask: c,
        maskId: u,
        extra: f
      } = n;
      return new Promise((d, h) => {
        Promise.all([Ni(r, o), c.iconName ? Ni(c.iconName, c.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((y) => {
          let [v, k] = y;
          d([t, Ta({
            icons: {
              main: v,
              mask: k
            },
            prefix: o,
            iconName: r,
            transform: l,
            symbol: s,
            maskId: u,
            title: i,
            titleId: a,
            extra: f,
            watchable: !0
          })]);
        }).catch(h);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: n,
        attributes: r,
        main: i,
        transform: a,
        styles: o
      } = t;
      const l = pr(o);
      l.length > 0 && (r.style = l);
      let s;
      return Ea(a) && (s = Et("generateAbstractTransformGrouping", {
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
}, R4 = {
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
          zt("beforeDOMElementCreation", {
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
}, _4 = {
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
        }, () => (zt("beforeDOMElementCreation", {
          content: e,
          params: t
        }), h4({
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
}, M4 = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = it,
          title: r = null,
          classes: i = [],
          attributes: a = {},
          styles: o = {}
        } = t;
        return xr({
          type: "text",
          content: e
        }, () => (zt("beforeDOMElementCreation", {
          content: e,
          params: t
        }), al({
          content: e,
          transform: j(j({}, it), n),
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
      if (zc) {
        const s = parseInt(getComputedStyle(t).fontSize, 10), c = t.getBoundingClientRect();
        o = c.width / s, l = c.height / s;
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
const L4 = new RegExp('"', "ug"), dl = [1105920, 1112319], hl = j(j(j(j({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), o3), E3), g3), zi = Object.keys(hl).reduce((e, t) => (e[t.toLowerCase()] = hl[t], e), {}), F4 = Object.keys(zi).reduce((e, t) => {
  const n = zi[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function D4(e) {
  const t = e.replace(L4, ""), n = W3(t, 0), r = n >= dl[0] && n <= dl[1], i = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: Ei(i ? t[0] : t),
    isSecondary: r || i
  };
}
function B4(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), i = isNaN(r) ? "normal" : r;
  return (zi[n] || {})[i] || F4[n];
}
function ml(e, t) {
  const n = "".concat(C3).concat(t.replace(":", "-"));
  return new Promise((r, i) => {
    if (e.getAttribute(n) !== null)
      return r();
    const o = Jt(e.children).filter((d) => d.getAttribute(bi) === t)[0], l = kt.getComputedStyle(e, t), s = l.getPropertyValue("font-family"), c = s.match(O3), u = l.getPropertyValue("font-weight"), f = l.getPropertyValue("content");
    if (o && !c)
      return e.removeChild(o), r();
    if (c && f !== "none" && f !== "") {
      const d = l.getPropertyValue("content");
      let h = B4(s, u);
      const {
        value: y,
        isSecondary: v
      } = D4(d), k = c[0].startsWith("FontAwesome");
      let b = Sa(h, y), A = b;
      if (k) {
        const E = Q3(y);
        E.iconName && E.prefix && (b = E.iconName, h = E.prefix);
      }
      if (b && !v && (!o || o.getAttribute(ba) !== h || o.getAttribute(va) !== A)) {
        e.setAttribute(n, A), o && e.removeChild(o);
        const E = A4(), {
          extra: O
        } = E;
        O.attributes[bi] = t, Ni(b, h).then((S) => {
          const w = Ta(j(j({}, E), {}, {
            icons: {
              main: S,
              mask: eu()
            },
            prefix: h,
            iconName: A,
            extra: O,
            watchable: !0
          })), F = Ee.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(F, e.firstChild) : e.appendChild(F), F.outerHTML = w.map((Q) => An(Q)).join(`
`), e.removeAttribute(n), r();
        }).catch(i);
      } else
        r();
    } else
      r();
  });
}
function $4(e) {
  return Promise.all([ml(e, "::before"), ml(e, "::after")]);
}
function H4(e) {
  return e.parentNode !== document.head && !~T3.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(bi) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function pl(e) {
  if (yt)
    return new Promise((t, n) => {
      const r = Jt(e.querySelectorAll("*")).filter(H4).map($4), i = Aa.begin("searchPseudoElements");
      au(), Promise.all(r).then(() => {
        i(), ji(), t();
      }).catch(() => {
        i(), ji(), n();
      });
    });
}
var V4 = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = pl, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = Ee
      } = t;
      W.searchPseudoElements && pl(n);
    };
  }
};
let gl = !1;
var U4 = {
  mixout() {
    return {
      dom: {
        unwatch() {
          au(), gl = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        cl(Si("mutationObserverCallbacks", {}));
      },
      noAuto() {
        E4();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        gl ? ji() : cl(Si("mutationObserverCallbacks", {
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
var W4 = {
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
      }, l = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), s = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), c = "rotate(".concat(r.rotate, " 0 0)"), u = {
        transform: "".concat(l, " ").concat(s, " ").concat(c)
      }, f = {
        transform: "translate(".concat(a / 2 * -1, " -256)")
      }, d = {
        outer: o,
        inner: u,
        path: f
      };
      return {
        tag: "g",
        attributes: j({}, d.outer),
        children: [{
          tag: "g",
          attributes: j({}, d.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: j(j({}, n.icon.attributes), d.path)
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
function q4(e) {
  return e.tag === "g" ? e.children : [e];
}
var Y4 = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? yr(n.split(" ").map((i) => i.trim())) : eu();
        return r.prefix || (r.prefix = wt()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
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
        icon: c
      } = i, {
        width: u,
        icon: f
      } = a, d = D3({
        transform: l,
        containerWidth: u,
        iconWidth: s
      }), h = {
        tag: "rect",
        attributes: j(j({}, Zr), {}, {
          fill: "white"
        })
      }, y = c.children ? {
        children: c.children.map(xl)
      } : {}, v = {
        tag: "g",
        attributes: j({}, d.inner),
        children: [xl(j({
          tag: c.tag,
          attributes: j(j({}, c.attributes), d.path)
        }, y))]
      }, k = {
        tag: "g",
        attributes: j({}, d.outer),
        children: [v]
      }, b = "mask-".concat(o || xn()), A = "clip-".concat(o || xn()), E = {
        tag: "mask",
        attributes: j(j({}, Zr), {}, {
          id: b,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [h, k]
      }, O = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: A
          },
          children: q4(f)
        }, E]
      };
      return n.push(O, {
        tag: "rect",
        attributes: j({
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
}, G4 = {
  provides(e) {
    let t = !1;
    kt.matchMedia && (t = kt.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const n = [], r = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: j(j({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const a = j(j({}, i), {}, {
        attributeName: "opacity"
      }), o = {
        tag: "circle",
        attributes: j(j({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || o.children.push({
        tag: "animate",
        attributes: j(j({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: j(j({}, a), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(o), n.push({
        tag: "path",
        attributes: j(j({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: j(j({}, a), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || n.push({
        tag: "path",
        attributes: j(j({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: j(j({}, a), {}, {
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
}, K4 = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, X4 = [H3, P4, R4, _4, M4, V4, U4, W4, Y4, G4, K4];
o4(X4, {
  mixoutsTo: Ke
});
Ke.noAuto;
Ke.config;
Ke.library;
Ke.dom;
const Ii = Ke.parse;
Ke.findIconDefinition;
Ke.toHtml;
const Q4 = Ke.icon;
Ke.layer;
Ke.text;
Ke.counter;
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
function rt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bl(Object(n), !0).forEach(function(r) {
      Vt(e, r, n[r]);
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
function Vt(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function J4(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Z4(e, t) {
  if (e == null) return {};
  var n = J4(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Pi(e) {
  return e5(e) || t5(e) || n5(e) || r5();
}
function e5(e) {
  if (Array.isArray(e)) return Ri(e);
}
function t5(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function n5(e, t) {
  if (e) {
    if (typeof e == "string") return Ri(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ri(e, t);
  }
}
function Ri(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function r5() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function i5(e) {
  var t, n = e.beat, r = e.fade, i = e.beatFade, a = e.bounce, o = e.shake, l = e.flash, s = e.spin, c = e.spinPulse, u = e.spinReverse, f = e.pulse, d = e.fixedWidth, h = e.inverse, y = e.border, v = e.listItem, k = e.flip, b = e.size, A = e.rotation, E = e.pull, O = (t = {
    "fa-beat": n,
    "fa-fade": r,
    "fa-beat-fade": i,
    "fa-bounce": a,
    "fa-shake": o,
    "fa-flash": l,
    "fa-spin": s,
    "fa-spin-reverse": u,
    "fa-spin-pulse": c,
    "fa-pulse": f,
    "fa-fw": d,
    "fa-inverse": h,
    "fa-border": y,
    "fa-li": v,
    "fa-flip": k === !0,
    "fa-flip-horizontal": k === "horizontal" || k === "both",
    "fa-flip-vertical": k === "vertical" || k === "both"
  }, Vt(t, "fa-".concat(b), typeof b < "u" && b !== null), Vt(t, "fa-rotate-".concat(A), typeof A < "u" && A !== null && A !== 0), Vt(t, "fa-pull-".concat(E), typeof E < "u" && E !== null), Vt(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(O).map(function(S) {
    return O[S] ? S : null;
  }).filter(function(S) {
    return S;
  });
}
function a5(e) {
  return e = e - 0, e === e;
}
function lu(e) {
  return a5(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var o5 = ["style"];
function l5(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function s5(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), i = lu(n.slice(0, r)), a = n.slice(r + 1).trim();
    return i.startsWith("webkit") ? t[l5(i)] = a : t[i] = a, t;
  }, {});
}
function su(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(s) {
    return su(e, s);
  }), i = Object.keys(t.attributes || {}).reduce(function(s, c) {
    var u = t.attributes[c];
    switch (c) {
      case "class":
        s.attrs.className = u, delete t.attributes.class;
        break;
      case "style":
        s.attrs.style = s5(u);
        break;
      default:
        c.indexOf("aria-") === 0 || c.indexOf("data-") === 0 ? s.attrs[c.toLowerCase()] = u : s.attrs[lu(c)] = u;
    }
    return s;
  }, {
    attrs: {}
  }), a = n.style, o = a === void 0 ? {} : a, l = Z4(n, o5);
  return i.attrs.style = rt(rt({}, i.attrs.style), o), e.apply(void 0, [t.tag, rt(rt({}, i.attrs), l)].concat(Pi(r)));
}
var cu = !1;
try {
  cu = process.env.NODE_ENV === "production";
} catch {
}
function c5() {
  if (!cu && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function vl(e) {
  if (e && Zn(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Ii.icon)
    return Ii.icon(e);
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
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? Vt({}, e, t) : {};
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
}, er = /* @__PURE__ */ ze.forwardRef(function(e, t) {
  var n = rt(rt({}, kl), e), r = n.icon, i = n.mask, a = n.symbol, o = n.className, l = n.title, s = n.titleId, c = n.maskId, u = vl(r), f = ei("classes", [].concat(Pi(i5(n)), Pi((o || "").split(" ")))), d = ei("transform", typeof n.transform == "string" ? Ii.transform(n.transform) : n.transform), h = ei("mask", vl(i)), y = Q4(u, rt(rt(rt(rt({}, f), d), h), {}, {
    symbol: a,
    title: l,
    titleId: s,
    maskId: c
  }));
  if (!y)
    return c5("Could not find icon", u), null;
  var v = y.abstract, k = {
    ref: t
  };
  return Object.keys(n).forEach(function(b) {
    kl.hasOwnProperty(b) || (k[b] = n[b]);
  }), u5(v[0], k);
});
er.displayName = "FontAwesomeIcon";
er.propTypes = {
  beat: P.bool,
  border: P.bool,
  beatFade: P.bool,
  bounce: P.bool,
  className: P.string,
  fade: P.bool,
  flash: P.bool,
  mask: P.oneOfType([P.object, P.array, P.string]),
  maskId: P.string,
  fixedWidth: P.bool,
  inverse: P.bool,
  flip: P.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: P.oneOfType([P.object, P.array, P.string]),
  listItem: P.bool,
  pull: P.oneOf(["right", "left"]),
  pulse: P.bool,
  rotation: P.oneOf([0, 90, 180, 270]),
  shake: P.bool,
  size: P.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: P.bool,
  spinPulse: P.bool,
  spinReverse: P.bool,
  symbol: P.oneOfType([P.bool, P.string]),
  title: P.string,
  titleId: P.string,
  transform: P.oneOfType([P.string, P.object]),
  swapOpacity: P.bool
};
var u5 = su.bind(null, ze.createElement);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const f5 = {
  prefix: "fas",
  iconName: "sun",
  icon: [512, 512, [9728], "f185", "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]
}, d5 = {
  prefix: "fas",
  iconName: "moon",
  icon: [384, 512, [127769, 9214], "f186", "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]
}, h5 = (e) => typeof window > "u" ? e || {} : e || window.history, d6 = ({ router: e }) => {
  const [t, n] = Je("light"), [r, i] = Je(!1), [a, o] = Je(""), l = h5(e);
  _e(() => {
    if (typeof window < "u") {
      const u = localStorage.getItem("theme") || "light";
      n(u), i(!0);
    }
  }, []), _e(() => {
    r && typeof window < "u" && (document.documentElement.setAttribute("data-theme", t), localStorage.setItem("theme", t));
  }, [t, r]);
  const s = () => {
    n((u) => u === "light" ? "dark" : "light");
  }, c = (u) => {
    u.preventDefault(), a.trim() && (l && typeof l.push == "function" ? l.push(`/search/${encodeURIComponent(a)}`) : typeof window < "u" && (window.location.href = `/search/${encodeURIComponent(a)}`));
  };
  return r ? /* @__PURE__ */ m.jsx(Pn, { expand: "lg", className: "footer-header-color", children: /* @__PURE__ */ m.jsxs(Le, { fluid: !0, children: [
    /* @__PURE__ */ m.jsxs("div", { className: "dark-switch", children: [
      /* @__PURE__ */ m.jsx(
        "input",
        {
          type: "checkbox",
          className: "checkbox",
          id: "checkbox",
          onChange: s,
          checked: t === "dark"
        }
      ),
      /* @__PURE__ */ m.jsxs("label", { htmlFor: "checkbox", className: "checkbox-label", children: [
        /* @__PURE__ */ m.jsx(er, { icon: d5, style: { marginRight: "10px" } }),
        /* @__PURE__ */ m.jsx(er, { icon: f5 }),
        /* @__PURE__ */ m.jsx("span", { className: "ball" })
      ] })
    ] }),
    /* @__PURE__ */ m.jsx(Pn.Brand, { className: "navbar-brand bold", href: "/", children: "Abhi" }),
    /* @__PURE__ */ m.jsx(Pn.Toggle, { "aria-controls": "navbarScroll" }),
    /* @__PURE__ */ m.jsxs(Pn.Collapse, { id: "navbarScroll", children: [
      /* @__PURE__ */ m.jsxs(Mt, { className: "me-auto my-2 my-lg-0", style: { maxHeight: "150px" }, navbarScroll: !0, children: [
        /* @__PURE__ */ m.jsx(Mt.Link, { className: "nav-link bold-links", href: "/about", children: "About" }),
        /* @__PURE__ */ m.jsx(Mt.Link, { className: "nav-link bold-links", href: "/blog/section/tech", children: "Tech" }),
        /* @__PURE__ */ m.jsx(Mt.Link, { className: "nav-link bold-links", href: "/blog/section/project", children: "Project" }),
        /* @__PURE__ */ m.jsx(Mt.Link, { className: "nav-link bold-links", href: "/blog/section/life", children: "Life" }),
        /* @__PURE__ */ m.jsx(Mt.Link, { className: "nav-link bold-links", href: "#contact", children: "Contact" })
      ] }),
      /* @__PURE__ */ m.jsxs(Xe, { className: "d-flex", onSubmit: c, children: [
        /* @__PURE__ */ m.jsx(
          Xe.Control,
          {
            type: "search",
            placeholder: "Search",
            className: "me-2 custom-border form-control custom-placeholder",
            "aria-label": "Search",
            value: a,
            onChange: (u) => o(u.target.value)
          }
        ),
        /* @__PURE__ */ m.jsx(kn, { className: "button-custom-color", type: "submit", children: "Search" })
      ] })
    ] })
  ] }) }) : null;
}, h6 = ({ description: e }) => /* @__PURE__ */ m.jsx(Le, { children: /* @__PURE__ */ m.jsx(be, { className: "rounded background-color-body mt-3 p-2", children: /* @__PURE__ */ m.jsx(ce, { children: /* @__PURE__ */ m.jsx(
  "p",
  {
    className: "mb-2 mt-2 font-color-class bio-desc justify-content",
    dangerouslySetInnerHTML: { __html: e }
  }
) }) }) });
var uu = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, wl = ze.createContext && /* @__PURE__ */ ze.createContext(uu), m5 = ["attr", "size", "title"];
function p5(e, t) {
  if (e == null) return {};
  var n = g5(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function g5(e, t) {
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
      y5(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : El(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function y5(e, t, n) {
  return t = x5(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function x5(e) {
  var t = b5(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function b5(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function fu(e) {
  return e && e.map((t, n) => /* @__PURE__ */ ze.createElement(t.tag, nr({
    key: n
  }, t.attr), fu(t.child)));
}
function he(e) {
  return (t) => /* @__PURE__ */ ze.createElement(v5, tr({
    attr: nr({}, e.attr)
  }, t), fu(e.child));
}
function v5(e) {
  var t = (n) => {
    var {
      attr: r,
      size: i,
      title: a
    } = e, o = p5(e, m5), l = i || n.size || "1em", s;
    return n.className && (s = n.className), e.className && (s = (s ? s + " " : "") + e.className), /* @__PURE__ */ ze.createElement("svg", tr({
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
    }), a && /* @__PURE__ */ ze.createElement("title", null, a), e.children);
  };
  return wl !== void 0 ? /* @__PURE__ */ ze.createElement(wl.Consumer, null, (n) => t(n)) : t(uu);
}
function k5(e) {
  return he({ attr: { viewBox: "0 0 640 512" }, child: [{ tag: "path", attr: { d: "M180.41 203.01c-.72 22.65 10.6 32.68 10.88 39.05a8.164 8.164 0 0 1-4.1 6.27l-12.8 8.96a10.66 10.66 0 0 1-5.63 1.92c-.43-.02-8.19 1.83-20.48-25.61a78.608 78.608 0 0 1-62.61 29.45c-16.28.89-60.4-9.24-58.13-56.21-1.59-38.28 34.06-62.06 70.93-60.05 7.1.02 21.6.37 46.99 6.27v-15.62c2.69-26.46-14.7-46.99-44.81-43.91-2.4.01-19.4-.5-45.84 10.11-7.36 3.38-8.3 2.82-10.75 2.82-7.41 0-4.36-21.48-2.94-24.2 5.21-6.4 35.86-18.35 65.94-18.18a76.857 76.857 0 0 1 55.69 17.28 70.285 70.285 0 0 1 17.67 52.36l-.01 69.29zM93.99 235.4c32.43-.47 46.16-19.97 49.29-30.47 2.46-10.05 2.05-16.41 2.05-27.4-9.67-2.32-23.59-4.85-39.56-4.87-15.15-1.14-42.82 5.63-41.74 32.26-1.24 16.79 11.12 31.4 29.96 30.48zm170.92 23.05c-7.86.72-11.52-4.86-12.68-10.37l-49.8-164.65c-.97-2.78-1.61-5.65-1.92-8.58a4.61 4.61 0 0 1 3.86-5.25c.24-.04-2.13 0 22.25 0 8.78-.88 11.64 6.03 12.55 10.37l35.72 140.83 33.16-140.83c.53-3.22 2.94-11.07 12.8-10.24h17.16c2.17-.18 11.11-.5 12.68 10.37l33.42 142.63L420.98 80.1c.48-2.18 2.72-11.37 12.68-10.37h19.72c.85-.13 6.15-.81 5.25 8.58-.43 1.85 3.41-10.66-52.75 169.9-1.15 5.51-4.82 11.09-12.68 10.37h-18.69c-10.94 1.15-12.51-9.66-12.68-10.75L328.67 110.7l-32.78 136.99c-.16 1.09-1.73 11.9-12.68 10.75h-18.3zm273.48 5.63c-5.88.01-33.92-.3-57.36-12.29a12.802 12.802 0 0 1-7.81-11.91v-10.75c0-8.45 6.2-6.9 8.83-5.89 10.04 4.06 16.48 7.14 28.81 9.6 36.65 7.53 52.77-2.3 56.72-4.48 13.15-7.81 14.19-25.68 5.25-34.95-10.48-8.79-15.48-9.12-53.13-21-4.64-1.29-43.7-13.61-43.79-52.36-.61-28.24 25.05-56.18 69.52-55.95 12.67-.01 46.43 4.13 55.57 15.62 1.35 2.09 2.02 4.55 1.92 7.04v10.11c0 4.44-1.62 6.66-4.87 6.66-7.71-.86-21.39-11.17-49.16-10.75-6.89-.36-39.89.91-38.41 24.97-.43 18.96 26.61 26.07 29.7 26.89 36.46 10.97 48.65 12.79 63.12 29.58 17.14 22.25 7.9 48.3 4.35 55.44-19.08 37.49-68.42 34.44-69.26 34.42zm40.2 104.86c-70.03 51.72-171.69 79.25-258.49 79.25A469.127 469.127 0 0 1 2.83 327.46c-6.53-5.89-.77-13.96 7.17-9.47a637.37 637.37 0 0 0 316.88 84.12 630.22 630.22 0 0 0 241.59-49.55c11.78-5 21.77 7.8 10.12 16.38zm29.19-33.29c-8.96-11.52-59.28-5.38-81.81-2.69-6.79.77-7.94-5.12-1.79-9.47 40.07-28.17 105.88-20.1 113.44-10.63 7.55 9.47-2.05 75.41-39.56 106.91-5.76 4.87-11.27 2.3-8.71-4.1 8.44-21.25 27.39-68.49 18.43-80.02z" }, child: [] }] })(e);
}
function w5(e) {
  return he({ attr: { viewBox: "0 0 496 512" }, child: [{ tag: "path", attr: { d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" }, child: [] }] })(e);
}
function du(e) {
  return he({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M105.2 24.9c-3.1-8.9-15.7-8.9-18.9 0L29.8 199.7h132c-.1 0-56.6-174.8-56.6-174.8zM.9 287.7c-2.6 8 .3 16.9 7.1 22l247.9 184-226.2-294zm160.8-88l94.3 294 94.3-294zm349.4 88l-28.8-88-226.3 294 247.9-184c6.9-5.1 9.7-14 7.2-22zM425.7 24.9c-3.1-8.9-15.7-8.9-18.9 0l-56.6 174.8h132z" }, child: [] }] })(e);
}
function E5(e) {
  return he({ attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M304.2 501.5L158.4 320.3 298.2 185c2.6-2.7 1.7-10.5-5.3-10.5h-69.2c-3.5 0-7 1.8-10.5 5.3L80.9 313.5V7.5q0-7.5-7.5-7.5H21.5Q14 0 14 7.5v497q0 7.5 7.5 7.5h51.9q7.5 0 7.5-7.5v-109l30.8-29.3 110.5 140.6c3 3.5 6.5 5.3 10.5 5.3h66.9q5.25 0 6-3z" }, child: [] }] })(e);
}
function C5(e) {
  return he({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" }, child: [] }] })(e);
}
function S5(e) {
  return he({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M0 32v448h448V32H0zm372.2 106.1l-24 23c-2.1 1.6-3.1 4.2-2.7 6.7v169.3c-.4 2.6.6 5.2 2.7 6.7l23.5 23v5.1h-118V367l24.3-23.6c2.4-2.4 2.4-3.1 2.4-6.7V199.8l-67.6 171.6h-9.1L125 199.8v115c-.7 4.8 1 9.7 4.4 13.2l31.6 38.3v5.1H71.2v-5.1l31.6-38.3c3.4-3.5 4.9-8.4 4.1-13.2v-133c.4-3.7-1-7.3-3.8-9.8L75 138.1V133h87.3l67.4 148L289 133.1h83.2v5z" }, child: [] }] })(e);
}
function T5(e) {
  return he({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" }, child: [] }] })(e);
}
function A5(e) {
  return he({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z" }, child: [] }] })(e);
}
function N5(e) {
  return he({ attr: { viewBox: "0 0 640 512" }, child: [{ tag: "path", attr: { d: "M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z" }, child: [] }] })(e);
}
function O5(e) {
  return he({ attr: { role: "img", viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M10.617 11.473l4.686 3.695-3.102-7.662zM12 0C5.371 0 0 5.371 0 12s5.371 12 12 12 12-5.371 12-12S18.629 0 12 0zm5.797 17.305c-.011.471-.403.842-.875.83-.236 0-.416-.09-.664-.293l-6.19-5-2.079 5.203H6.191L11.438 5.44c.124-.314.427-.52.764-.506.326-.014.63.189.742.506l4.774 11.494c.045.111.08.234.08.348-.001.009-.001.009-.001.023z" }, child: [] }] })(e);
}
function j5(e) {
  return he({ attr: { role: "img", viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z" }, child: [] }] })(e);
}
function z5(e) {
  return he({ attr: { role: "img", viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" }, child: [] }] })(e);
}
function I5(e) {
  return he({ attr: { role: "img", viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M12 0C5.363 0 0 5.363 0 12s5.363 12 12 12 12-5.363 12-12S18.637 0 12 0zM9.502 7.03a4.974 4.974 0 0 1 4.97 4.97 4.974 4.974 0 0 1-4.97 4.97A4.974 4.974 0 0 1 4.532 12a4.974 4.974 0 0 1 4.97-4.97zm6.563 3.183h2.351c.98 0 1.787.782 1.787 1.762s-.807 1.789-1.787 1.789h-2.351v-3.551z" }, child: [] }] })(e);
}
function P5(e) {
  return he({ attr: { role: "img", viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M7.172 20.36c-.914-.72-1.89-1.41-2.556-2.38-1.402-1.712-2.482-3.694-3.22-5.777-.446-1.355-.6-2.808-1.174-4.11-.602-.944.103-1.978 1.138-2.28.46-.087 1.272-.522.293-.211-.878.644-.963-.585-.063-.662.615-.082.84-.585.63-1.037-.66-.43 1.6-.903.463-1.544C1.5 1.08 4.34.835 3.64 2.285 3.473 3.4 5.624 2.08 5.125 3.368c.507.619 1.9.14 1.865 1.009.74.05.993.672 1.687.72.72.325 2.022.58 2.266 1.39-.713.566-2.364-1.165-2.443.398.215 2.31.16 4.689 1.004 6.888.4 1.332 1.37 2.38 2.244 3.418.837 1.016 1.971 1.73 3.127 2.333 1.014.478 2.107.795 3.213.994.448-.343 1.24-1.617 1.938-1.08.033.604-1.388 1.263-.067 1.196.776-.234 1.314.6 1.953-.152.588.697 2.446-.446 2.027.98-.566.364-1.392.144-1.959.646-.935-.467-1.68.418-2.715.306a19.86 19.86 0 01-3.484.29c-1.912-.15-3.865-.214-5.684-.88-1.024-.297-2.023-.881-2.924-1.464zm1.615.7c1 .432 1.978.888 3.074 1.026 1.74.24 3.537.614 5.283.274-.79-.357-1.608.14-2.395-.255-.944.203-1.957-.052-2.917-.177-1.092-.486-2.27-.82-3.291-1.452-1.277-.466.66.598 1.005.685.798.453-.877-.233-1.114-.421-.668-.375-.754-.297-.066.084.139.08.276.166.42.235zm-1.904-1.346c.97.359-.004-.682-.45-.622-.196-.341-.751-.557-.36-.74-.704.244-.737-.93-1.07-.763-.744-.235-.29-1.07-1.176-1.58-.081-.54-.882-1.008-1.138-1.822-.113-.416-.905-1.613-.418-.5.414 1.072 1.143 1.99 1.75 2.907.47.873 1.027 1.786 1.885 2.33.29.278.568.703.977.79zM4.09 16.647c.033-.146.177.317 0 0zm3.954 3.497c.215-.096-.31-.12 0 0zm.526.192c-.054-.265-.24.148 0 0zm.66.275c.312-.3-.484-.188 0 0zm1.127.63c.191-.282-.61-.107 0 0zM8.19 19.728c.487-.315-.63-.004 0 0zm.494.246c-.014-.166-.176.075 0 0zm2.47 1.542c.397.25 2.32.55 1.115.103-.2.042-2.23-.574-1.116-.103zm-3.921-3.054c-.04-.167-.616-.185 0 0zm1.15.67c.3-.21-.621-.16 0 0zm.966.593c.43-.162-.696-.163 0 0zm-2.584-1.773c.466.358 1.88.046.714-.213-.53-.283-1.727-.476-.912.17zm3.24 1.978c.193-.33-.815-.19 0 0zm-.984-.783c1.14.323-.958-.72-.281-.118l.15.068.13.05zm1.973 1.14c1.08.01-.975-.147 0 0zm-4.644-2.96c-.042-.2-.266.018 0 0zm6.47 3.985c.028-.363-.353.27 0 0zm-4.63-2.856c-.064-.191-.336-.008 0 0zm-1.738-1.254c.62-.037-.848-.273 0 0zm-2.06-1.332c-.077-.297-.674-.534 0 0zm5.407 3.435c-.114-.13-.054.028 0 0zm3.366 2.065c-.01-.197-.183.075 0 0zm-3.664-2.373c.06-.255-.528-.077 0 0zm-2.506-1.592c.46-.05-.74-.311 0 0zm4.241 2.637c.718-.285-.7-.14 0 0zM9.03 18.545c.827.106-.985-.563-.181-.06zm2.876 1.768c.773-.462.518 1.082 1.311.13.782-.57-.675.707.29.103.696-.467 1.726.22 2.376.445.468-.023.923.405 1.403.145.923-.25-1.806-.37-1.09-.81-.845.245-1.47-.294-1.885-.835-.948-.22-2.044-.703-2.517-1.542-.192-.315.28.044-.166-.47-.57-.508-.856-1.085-1.24-1.702-.457-.244-.51-.963-.557-.024.004-.593-.553-.992-.688-.826-.002-.571.595-.285.176-.707-.09-.592-.386-1.21-.475-1.877-.138-.322-.02-1.011-.473-.282-.165.77-.055-.947.202-.38.337-.58-.12-.51-.14-.43.22-.488.14-1.18-.057-.916.117-.517.185-1.902-.175-1.656.218-.54.414-2.473-.534-1.736-.384.005-1.048.14-1.363.296.986.543-.1.196-.5.11-.052.502-.45.285-.946.29.793.098-.386.81-.841.534-.59.282.51.987.012 1.205.06.328-.905-.12-.83.64-.573-.241-.078.9.209.514.975.264.686.866.71 1.437-.158.333-.784-.783-.14-.731-.507-.827-.561-.3-.984.085-.1.028 1.079.547.34.803.65.1.668.67.8 1.03.39.407.31-.45.779.04-.296-.436-1.567-1.228-.544-.974-.005-.44-.185-.793.129-.784.31-.562-.325 1.387.375.672.193-.085.24-.563.59.045.505.498.182.858-.531.403.127.433.954.587.799 1.265.165.595.395.376.596.342.158.578.247.153.255-.123.72.155.552.58.778.88.497.224-.712-1.522.142-.526.898.81.337 1.15-.47 1.02.51-.041.675.69 1.313.664.582.277.975 1.34-.027.897-.348-.313-1.58-.7-.573-.104.929.43 1.665.688 2.561 1.227.64.458.918.982 1.16 1.086-.538.257-1.623-.206-.817-.348-.503-.091-1.068-.345-.587.28.41.343 1.45.306 1.637.345-.159.348-.43.376.006.403-.486.26.156.3.201.448zm-.994-2.808c-.296-.31-.373-.89-.053-.385.164.066.525.947.053.385zm3.238 2.057c.185-.011.006.14 0 0zm-3.706-2.816c-.01-.468.107.36 0 0zm-.322-.433c-.372-.72.47.204 0 0zm-3.9-2.692c.219-.06.108.374 0 0zm3.104 1.682c.134-.504.158.424 0 0zm-2.192-1.525c-.155-.278.323.26 0 0zm1.882.604c-.352-.79.25-.432.078.13zM5.77 12.217c-.158-.26-.418-1.02-.334-1.252.076.378.804 1.627.357.518-.494-.93.59.302.702.534.05.23-.305-.063-.064.478-.44-.617-.26.34-.661-.278zm-1.003-.691c.04-.603.23.413 0 0zm.45.155c.216-.455.366.634 0 0zm-1.084-.84c-.374-.37-.644-.713.017-.23.255.01-.566-.778.06-.25.66.12.327 1.082-.077.48zm.57-.015c.217-.215.115.212 0 0zm.35.113c-.328-.617.4.258 0 0zm-.697-.667c-1.086-.966 1.365.506.177.18zm3.11 1.808c-.47-.282-.123-1.984.037-.82.457-.148-.025.6.315.594-.053.473-.206.643-.35.226zm1.15.68c.048-.513.099.35 0 0zm-.2-.198c.054-.22.007.258 0 0zM4.57 9.955c-.697-.963 2.027.973.447.244-.165-.043-.364-.06-.447-.244zm2.216 1.175c-.066-.81.147.134 0 0zm1.682 1.079c.13-.462.01.305 0 0zM4.676 9.587c.415-.088 1.718.729.52.234-.132-.148-.416-.08-.52-.234zm3.56 1.775c.044-.83.248-.495.002.118zM4.985 9.299c.169-.248-.45-1.12.089-.313.232.185.672.31.283.387.61.539-.15.146-.372-.074zm3.075 1.804c.117-.944.103.553 0 0zM4.632 8.427c.129-.055.068.172 0 0zm.802.478c.206-.434.38.483 0 0zm2.263 1.259c-.002-.167.043.242 0 0zm-.131-.29c-.314-.776.292.41 0 0zm-.193-.51c-.053-.32.18.404 0 0zm.314-.51c-.216-.38.272-1.673.326-.87-.227.625-.065.975.093.136.293-.66-.063 1.303-.42.735zm.322-1.923c.094-.115.02.139 0 0zM7.47 17.544c-.128-.111.016.07 0 0zm1.11.56c.615.16.612-.095.055-.17-.3-.28-1.246-.575-.4-.035.057.142.235.139.344.206zM6.389 16.65c.34.253 1.28.719.484.096.269-.312-.514-.478-.254-.686-.66-.404-.52-.368-.058-.356-.794-.354.114-.328.07-.51-.305-.06-1.52-.54-.804.04-.726-.37-.173.138-.392.084-.743-.202.66.565-.118.375.425.337 1.146.864.18.357-.128.183.69.46.892.6zm1.16.667c1.41.454-.691-.556 0 0zm5.94 3.598c.02-.28-.193.24 0 0zm.611.257c.325-.315.013.503.54-.077.005-.415-.017-.66-.606-.156-.162.09-.234.473.066.233zm-9.692-6.087c-.1-.393-.7-.39 0 0zm.652.428c-.242-.402-.864-.364 0 0zm3.71 2.237c.362.32 1.662.236.44.04-.182-.27-1.151-.204-.44-.04zm5.097 3.149c.558-.468-.54.208 0 0zm1.16.796c.003-.15-.24.066 0 0zm.001-.21c.617-.654-.598.039 0 0zM2.805 13.743c-.526-.75-.327-1.088-.835-1.7-.096-.47-.87-1.533-.4-.406.43.659.558 1.679 1.235 2.106zm12.03 7.534c1.135-.734-.466-.32 0 0zm.866.34c.57-.488-.36-.102 0 0zM4.215 14.255c.163-.242-.42-.031 0 0zm11.305 7.129c.551-.355-.126-.3-.1.032zm-7.47-4.71c-.02-.24-.291.02 0 0zm.46.267c-.145-.297-.224.047 0 0zm7.894 4.684c.705-.51-.428-.098-.148.096zm-.27-.13c.574-.482-.607.213 0 0zm1.38.918c.386-.258-.469-.083 0 0zM4.57 14.08c.517.116 2.066 1.274 1.152.08-.468-.138-.187-1.283-.665-1.08.32.535.264.763-.41.426-.845-.413-.474.204-.31.374-.224.052.299.196.233.2zm-2.356-1.86c.092-.383-.853-2.107-.446-.864.146.26.13.754.446.864zm4.324 2.666c-.266-.223-.013-.032 0 0zm.656.152c0-.405-.725-.164 0 0zm5.681 3.583c-.108-.278-.428-.006 0 0zm.273.199c-.04-.155-.157.03 0 0zM15.4 20.24c.216-.16-.27-.02 0 0zM3.39 12.52c.62-.24-.664-.17 0 0zm8.984 5.662c-.007-.401-.395.1 0 0zm-9.23-6.231c.399-.135-.367-.09 0 0zm1.156.56c-.007-.133-.122.05 0 0zm14.09 8.64c.512-.104 1.678.26 1.866-.136-.62-.015-2.15-.438-2.222.1l.136.023.22.013zM4.667 12.603c.009-.407-.317-.015 0 0zM1.63 10.495c-.138-.775-.525-.118 0 0zm.724.182c.009-.25-.663-.224 0 0zm.414.203c-.12-.097-.094.122 0 0zm2.605 1.67c.122-.112-.29-.083 0 0zm-2.88-2.128c-.07-.585-.84-.088 0 0zm-1.486-.964c-.02-.27-.144.102 0 0zm.22-.167c-.035-.32-.19.04 0 0zm1.22.729c.518-.203-.94-.42-.104-.04zm16.334 10.089c.33-.303-.42-.094 0 0zm1.974 1.023c.132-.392-.334.05 0 0zM2.573 9.38c.055-.38-.41.075 0 0zM.837 8.218c-.093-.535-.08-1.474.812-1.156-1.191.236.824 1.48.57.498.5.024.98-.296.716.19.987-.11 1.67-.964 2.624-.845.742-.098 1.554-.172 2.354-.471.658-.048 1.29-.756.93-1.175-.896-.076-1.835.036-2.827.233-1.098.228-2.096.662-3.205.849-1.08.145.217.4-.092.456-.564.196.672.328-.073.534-.46-.088-.94-.246-.743-.73-1.035.133-1.945.563-1.127 1.616h.06zm2.494-1.27c.243-.894 1.3.735.398.118-.108-.08-.285-.146-.398-.12zm.047-.434c.35-.26.186.146 0 0zm.445.008c.032-.411 1.018.218.163.148zm.608-.245c.222-.26.064.23 0 0zm.156-.104c.37-.444 2.095-.283.832-.043-.338-.255-.598.15-.832.043zm2.25-.347c-.055-1.214 1.119.432 0 0zm.64-.004c.233-.612.906-.245.108-.123.017.065-.024.316-.108.123zM2.322 9.067c.697-.427-.741-.37 0 0zm.515.144c.245-.26-.531-.106 0 0zm-1.52-1.08c.399-.305-.471-.116 0 0zm20.602 12.89c.012-.355-.304.16 0 0zm-2.093-1.43c.06-.408-.27.037 0 0zm2.67 1.568c.557 0 1.688-.173.475-.173-.19.03-1.109.024-.476.173zM3.29 8.959c.45-.03.706-.497-.087-.47-1.23-.127 1.084.42-.158.264-.167.11.236.237.245.207zm.398.202c-.048-.29-.14.154 0 0zm.47-1.257c.197-.243-.27-.065 0 0zm-1.5-2.508c.806-.274 1.907-.581 2.287.135-.387-.466-.156-.924.21-.243.516.689.775-.313.438-.545.383.476.819.7.257.03.61-.734-1.223.097-1.64.088-.2.09-2.071.477-1.551.535zm.472-.903c.46-.347 1.588.206.864-.345-.07-.062-1.586.418-.864.345zm1.674.069c.538.013-.231-.722.409-.39-.105-.343-.746-.407-1.06-.544-.176.314.36.938.65.934zm-1.38-1.52c.186-.252-.326.128 0 0zm.684.164c.866-.115-.22-.373-.174-.01zm-1.277-1c-.61-.796 1.146.134.527-.7-.522-.415-1.023.468-.527.7zm7.824 4.215c.28-.496-1.155-.668-.188-.175.09.03.07.21.188.175z" }, child: [] }] })(e);
}
function R5(e) {
  return he({ attr: { role: "img", viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M10.984 13.836a.5.5 0 0 1-.353-.146l-.745-.743a.5.5 0 1 1 .706-.708l.392.391 1.181-1.18a.5.5 0 0 1 .708.707l-1.535 1.533a.504.504 0 0 1-.354.146zm9.353-.147l1.534-1.532a.5.5 0 0 0-.707-.707l-1.181 1.18-.392-.391a.5.5 0 1 0-.706.708l.746.743a.497.497 0 0 0 .706-.001zM4.527 7.452l2.557-1.585A1 1 0 0 0 7.09 4.17L4.533 2.56A1 1 0 0 0 3 3.406v3.196a1.001 1.001 0 0 0 1.527.85zm2.03-2.436L4 6.602V3.406l2.557 1.61zM24 12.5c0 1.93-1.57 3.5-3.5 3.5a3.503 3.503 0 0 1-3.46-3h-2.08a3.503 3.503 0 0 1-3.46 3 3.502 3.502 0 0 1-3.46-3h-.558c-.972 0-1.85-.399-2.482-1.042V17c0 1.654 1.346 3 3 3h.04c.244-1.693 1.7-3 3.46-3 1.93 0 3.5 1.57 3.5 3.5S13.43 24 11.5 24a3.502 3.502 0 0 1-3.46-3H8c-2.206 0-4-1.794-4-4V9.899A5.008 5.008 0 0 1 0 5c0-2.757 2.243-5 5-5s5 2.243 5 5a5.005 5.005 0 0 1-4.952 4.998A2.482 2.482 0 0 0 7.482 12h.558c.244-1.693 1.7-3 3.46-3a3.502 3.502 0 0 1 3.46 3h2.08a3.503 3.503 0 0 1 3.46-3c1.93 0 3.5 1.57 3.5 3.5zm-15 8c0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5S9 19.122 9 20.5zM5 9c2.206 0 4-1.794 4-4S7.206 1 5 1 1 2.794 1 5s1.794 4 4 4zm9 3.5c0-1.378-1.122-2.5-2.5-2.5S9 11.122 9 12.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5zm9 0c0-1.378-1.122-2.5-2.5-2.5S18 11.122 18 12.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5zm-13 8a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0zm12 0c0 1.93-1.57 3.5-3.5 3.5a3.503 3.503 0 0 1-3.46-3.002c-.007.001-.013.005-.021.005l-.506.017h-.017a.5.5 0 0 1-.016-.999l.506-.017c.018-.002.035.006.052.007A3.503 3.503 0 0 1 20.5 17c1.93 0 3.5 1.57 3.5 3.5zm-1 0c0-1.378-1.122-2.5-2.5-2.5S18 19.122 18 20.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5z" }, child: [] }] })(e);
}
function _5(e) {
  return he({ attr: { role: "img", viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M21.038,4.9l-7.577-4.498C13.009,0.134,12.505,0,12,0c-0.505,0-1.009,0.134-1.462,0.403L2.961,4.9 C2.057,5.437,1.5,6.429,1.5,7.503v8.995c0,1.073,0.557,2.066,1.462,2.603l7.577,4.497C10.991,23.866,11.495,24,12,24 c0.505,0,1.009-0.134,1.461-0.402l7.577-4.497c0.904-0.537,1.462-1.529,1.462-2.603V7.503C22.5,6.429,21.943,5.437,21.038,4.9z M15.17,18.946l0.013,0.646c0.001,0.078-0.05,0.167-0.111,0.198l-0.383,0.22c-0.061,0.031-0.111-0.007-0.112-0.085L14.57,19.29 c-0.328,0.136-0.66,0.169-0.872,0.084c-0.04-0.016-0.057-0.075-0.041-0.142l0.139-0.584c0.011-0.046,0.036-0.092,0.069-0.121 c0.012-0.011,0.024-0.02,0.036-0.026c0.022-0.011,0.043-0.014,0.062-0.006c0.229,0.077,0.521,0.041,0.802-0.101 c0.357-0.181,0.596-0.545,0.592-0.907c-0.003-0.328-0.181-0.465-0.613-0.468c-0.55,0.001-1.064-0.107-1.072-0.917 c-0.007-0.667,0.34-1.361,0.889-1.8l-0.007-0.652c-0.001-0.08,0.048-0.168,0.111-0.2l0.37-0.236 c0.061-0.031,0.111,0.007,0.112,0.087l0.006,0.653c0.273-0.109,0.511-0.138,0.726-0.088c0.047,0.012,0.067,0.076,0.048,0.151 l-0.144,0.578c-0.011,0.044-0.036,0.088-0.065,0.116c-0.012,0.012-0.025,0.021-0.038,0.028c-0.019,0.01-0.038,0.013-0.057,0.009 c-0.098-0.022-0.332-0.073-0.699,0.113c-0.385,0.195-0.52,0.53-0.517,0.778c0.003,0.297,0.155,0.387,0.681,0.396 c0.7,0.012,1.003,0.318,1.01,1.023C16.105,17.747,15.736,18.491,15.17,18.946z M19.143,17.859c0,0.06-0.008,0.116-0.058,0.145 l-1.916,1.164c-0.05,0.029-0.09,0.004-0.09-0.056v-0.494c0-0.06,0.037-0.093,0.087-0.122l1.887-1.129 c0.05-0.029,0.09-0.004,0.09,0.056V17.859z M20.459,6.797l-7.168,4.427c-0.894,0.523-1.553,1.109-1.553,2.187v8.833 c0,0.645,0.26,1.063,0.66,1.184c-0.131,0.023-0.264,0.039-0.398,0.039c-0.42,0-0.833-0.114-1.197-0.33L3.226,18.64 c-0.741-0.44-1.201-1.261-1.201-2.142V7.503c0-0.881,0.46-1.702,1.201-2.142l7.577-4.498c0.363-0.216,0.777-0.33,1.197-0.33 c0.419,0,0.833,0.114,1.197,0.33l7.577,4.498c0.624,0.371,1.046,1.013,1.164,1.732C21.686,6.557,21.12,6.411,20.459,6.797z" }, child: [] }] })(e);
}
function M5(e) {
  return he({ attr: { role: "img", viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" }, child: [] }] })(e);
}
function L5(e) {
  return he({ attr: { role: "img", viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" }, child: [] }] })(e);
}
function F5(e) {
  return he({ attr: { role: "img", viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" }, child: [] }] })(e);
}
function D5(e) {
  return he({ attr: { role: "img", viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z" }, child: [] }] })(e);
}
function B5(e) {
  return he({ attr: { role: "img", viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z" }, child: [] }] })(e);
}
function $5(e) {
  return he({ attr: { role: "img", viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M12 0L1.605 6v12L12 24l10.395-6V6L12 0zm6 16.59c0 .705-.646 1.29-1.529 1.29-.631 0-1.351-.255-1.801-.81l-6-7.141v6.66c0 .721-.57 1.29-1.274 1.29H7.32c-.721 0-1.29-.6-1.29-1.29V7.41c0-.705.63-1.29 1.5-1.29.646 0 1.38.255 1.83.81l5.97 7.141V7.41c0-.721.6-1.29 1.29-1.29h.075c.72 0 1.29.6 1.29 1.29v9.18H18z" }, child: [] }] })(e);
}
function H5(e) {
  return he({ attr: { role: "img", viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" }, child: [] }] })(e);
}
function V5(e) {
  return he({ attr: { role: "img", viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M16.922 0h2.623v18.104h-2.623zm-4.126 12.94h2.623v2.57h-2.623zm0-7.037h2.623v5.446h-2.623zm0 11.197h2.623v5.446h-2.623zM4.456 5.896h2.622V24H4.455zm4.213 2.559h2.623v2.57H8.67zm0 4.151h2.623v5.447H8.67zm0-11.187h2.623v5.446H8.67Z" }, child: [] }] })(e);
}
function U5(e) {
  return he({ attr: { role: "img", viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z" }, child: [] }] })(e);
}
function W5(e) {
  return he({ attr: { role: "img", viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" }, child: [] }] })(e);
}
function q5(e) {
  return he({ attr: { role: "img", viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M12.005 0L4.952 7.053a9.865 9.865 0 000 14.022 9.866 9.866 0 0014.022 0c3.984-3.9 3.986-10.205.085-14.023l-1.744 1.743c2.904 2.905 2.904 7.634 0 10.538s-7.634 2.904-10.538 0-2.904-7.634 0-10.538l4.647-4.646.582-.665zm3.568 3.899a1.327 1.327 0 00-1.327 1.327 1.327 1.327 0 001.327 1.328A1.327 1.327 0 0016.9 5.226 1.327 1.327 0 0015.573 3.9z" }, child: [] }] })(e);
}
function Y5(e) {
  return he({ attr: { role: "img", viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" }, child: [] }] })(e);
}
function G5(e) {
  return he({ attr: { role: "img", viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M22.71 13.145c-1.66 2.092-3.452 4.483-7.038 4.483-3.203 0-4.397-2.825-4.48-5.12.701 1.484 2.073 2.685 4.214 2.63 4.117-.133 6.94-3.852 6.94-7.239 0-4.05-3.022-6.972-8.268-6.972-3.752 0-8.4 1.428-11.455 3.685C2.59 6.937 3.885 9.958 4.35 9.626c2.648-1.904 4.748-3.13 6.784-3.744C8.12 9.244.886 17.05 0 18.425c.1 1.261 1.66 4.648 2.424 4.648.232 0 .431-.133.664-.365a100.49 100.49 0 0 0 5.54-6.765c.222 3.104 1.748 6.898 6.014 6.898 3.819 0 7.604-2.756 9.33-8.965.2-.764-.73-1.361-1.261-.73zm-4.349-5.013c0 1.959-1.926 2.922-3.685 2.922-.941 0-1.664-.247-2.235-.568 1.051-1.592 2.092-3.225 3.21-4.973 1.972.334 2.71 1.43 2.71 2.619z" }, child: [] }] })(e);
}
function K5(e) {
  return he({ attr: { role: "img", viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M15.601 5.53c-1.91.035-3.981.91-5.63 2.56-2.93 2.93-2.083 8.53-1.088 9.525.805.804 6.595 1.843 9.526-1.088a9.74 9.74 0 0 0 .584-.643c.043-.292.205-.66.489-1.106a1.848 1.848 0 0 1-.537.176c-.144.265-.37.55-.676.855-.354.335-.607.554-.76.656a.795.795 0 0 1-.437.152c-.35 0-.514-.308-.494-.924-.22.316-.425.549-.612.7a.914.914 0 0 1-.578.224c-.194 0-.36-.09-.496-.273a1.03 1.03 0 0 1-.193-.507 4.016 4.016 0 0 1-.726.583c-.224.132-.47.197-.74.197-.3 0-.543-.096-.727-.288a.978.978 0 0 1-.257-.524v.004c-.3.276-.564.48-.79.611a1.295 1.295 0 0 1-.649.197.693.693 0 0 1-.571-.275c-.145-.183-.218-.43-.218-.739 0-.464.101-1.02.302-1.67.201-.65.445-1.25.733-1.797l.842-.312a.21.21 0 0 1 .06-.013c.063 0 .116.047.157.14.04.095.061.221.061.38 0 .451-.104.888-.312 1.31-.207.422-.532.873-.974 1.352-.018.23-.027.388-.027.474 0 .193.036.345.106.458.071.113.165.169.282.169a.71.71 0 0 0 .382-.13c.132-.084.333-.26.602-.523.028-.418.187-.798.482-1.142.324-.38.685-.569 1.08-.569.206 0 .37.054.494.16a.524.524 0 0 1 .186.417c0 .458-.486.829-1.459 1.114.088.43.32.646.693.646a.807.807 0 0 0 .417-.117c.129-.076.321-.243.575-.497.032-.252.118-.495.259-.728.182-.3.416-.544.701-.73.285-.185.537-.278.756-.278.276 0 .47.127.58.381l.677-.374h.186l-.292.971c-.15.488-.226.823-.226 1.004 0 .19.067.285.202.285.086 0 .181-.045.285-.137.104-.092.25-.232.437-.42v.001c.143-.155.274-.32.392-.494-.19-.084-.285-.21-.285-.375 0-.17.058-.352.174-.545.116-.194.275-.29.479-.29.172 0 .258.088.258.265 0 .139-.05.338-.149.596.367-.04.687-.32.961-.842l.228-.01c1.059-2.438.828-5.075-.83-6.732-1.019-1.02-2.408-1.5-3.895-1.471zm4.725 8.203a8.938 8.938 0 0 1-1.333 2.151 1.09 1.09 0 0 0-.012.147c0 .168.047.309.14.423.092.113.206.17.34.17.296 0 .714-.264 1.254-.787-.001.04-.003.08-.003.121 0 .146.012.368.036.666l.733-.172c0-.2.003-.357.01-.474.01-.157.033-.33.066-.517.02-.11.07-.216.152-.315l.186-.216a5.276 5.276 0 0 1 .378-.397c.062-.055.116-.099.162-.13a.26.26 0 0 1 .123-.046c.055 0 .083.035.083.106 0 .07-.052.236-.156.497-.194.486-.292.848-.292 1.084 0 .175.046.314.136.418a.45.45 0 0 0 .358.155c.365 0 .803-.269 1.313-.808v-.381c-.361.426-.623.64-.784.64-.109 0-.163-.067-.163-.2 0-.1.065-.316.195-.65.19-.486.285-.836.285-1.048a.464.464 0 0 0-.112-.319.36.36 0 0 0-.282-.127c-.165 0-.354.077-.567.233-.213.156-.5.436-.863.84.053-.262.165-.622.335-1.08l-.809.156a6.54 6.54 0 0 0-.399 1.074c-.04.156-.07.316-.092.48a7.447 7.447 0 0 1-.49.45.38.38 0 0 1-.229.08.208.208 0 0 1-.174-.082.352.352 0 0 1-.064-.222c0-.1.019-.214.056-.343.038-.13.12-.373.249-.731l.308-.849zm-17.21-2.927c-.863-.016-1.67.263-2.261.854-1.352 1.352-1.07 3.827.631 5.527 1.7 1.701 4.95 1.21 5.527.632.467-.466 1.07-3.827-.631-5.527-.957-.957-2.158-1.465-3.267-1.486zm12.285.358h.166v.21H15.4zm.427 0h.166v.865l.46-.455h.195l-.364.362.428.684h-.198l-.357-.575-.164.166v.41h-.166zm1.016 0h.166v.21h-.166zm.481.122h.166v.288h.172v.135h-.172v.717c0 .037.006.062.02.075.012.013.037.02.074.02a.23.23 0 0 0 .078-.01v.141a.802.802 0 0 1-.136.014.23.23 0 0 1-.15-.043.15.15 0 0 1-.052-.123v-.79h-.141v-.136h.141zm-3.562.258c.081 0 .15.012.207.038.057.024.1.061.13.11s.045.106.045.173h-.176c-.006-.111-.075-.167-.208-.167a.285.285 0 0 0-.164.041.134.134 0 0 0-.06.117c0 .035.015.065.045.088.03.024.08.044.15.06l.16.039a.47.47 0 0 1 .224.105c.047.046.07.108.07.186a.3.3 0 0 1-.052.175.327.327 0 0 1-.152.116.585.585 0 0 1-.226.041c-.136 0-.24-.03-.309-.088-.069-.059-.105-.149-.109-.269h.176c.004.037.01.065.017.084a.166.166 0 0 0 .034.054c.044.043.112.065.204.065a.31.31 0 0 0 .177-.045.139.139 0 0 0 .067-.119.116.116 0 0 0-.038-.09.287.287 0 0 0-.124-.055l-.156-.038a1.248 1.248 0 0 1-.159-.05.359.359 0 0 1-.098-.061.22.22 0 0 1-.058-.083.32.32 0 0 1-.016-.108c0-.096.036-.174.109-.232a.45.45 0 0 1 .29-.087zm1.035 0a.46.46 0 0 1 .202.043.351.351 0 0 1 .187.212.577.577 0 0 1 .023.126h-.168a.256.256 0 0 0-.078-.168.242.242 0 0 0-.17-.06.248.248 0 0 0-.155.05.306.306 0 0 0-.1.144.662.662 0 0 0-.034.224.58.58 0 0 0 .035.214.299.299 0 0 0 .101.135.261.261 0 0 0 .157.048c.142 0 .227-.084.256-.252h.167a.519.519 0 0 1-.065.22.35.35 0 0 1-.146.138.464.464 0 0 1-.216.048.448.448 0 0 1-.246-.066.441.441 0 0 1-.161-.192.703.703 0 0 1-.057-.293c0-.085.01-.163.032-.233a.522.522 0 0 1 .095-.182.403.403 0 0 1 .15-.117.453.453 0 0 1 .191-.04zm.603.03h.166v1.046H15.4zm1.443 0h.166v1.046h-.166zm-5.05.618c-.08 0-.2.204-.356.611-.155.407-.308.977-.459 1.71.281-.312.509-.662.683-1.05.175-.387.262-.72.262-.999a.455.455 0 0 0-.036-.197c-.025-.05-.056-.075-.093-.075zm4.662 1.797c-.221 0-.431.188-.629.563-.197.376-.296.722-.296 1.038 0 .12.029.216.088.29a.273.273 0 0 0 .223.111c.221 0 .43-.188.625-.565.196-.377.294-.725.294-1.043a.457.457 0 0 0-.083-.29.269.269 0 0 0-.222-.104zm-2.848.007c-.146 0-.285.11-.417.333-.133.222-.2.51-.2.866.566-.159.849-.452.849-.881 0-.212-.077-.318-.232-.318Z" }, child: [] }] })(e);
}
function X5(e) {
  return he({ attr: { role: "img", viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M21.678.521c-1.032-.92-2.28-.55-3.513.544a8.71 8.71 0 0 0-.547.535c-2.109 2.237-4.066 6.38-4.674 9.544.237.48.422 1.093.544 1.561a13.044 13.044 0 0 1 .164.703s-.019-.071-.096-.296l-.05-.146a1.689 1.689 0 0 0-.033-.08c-.138-.32-.518-.995-.686-1.289-.143.423-.27.818-.376 1.176.484.884.778 2.4.778 2.4s-.025-.099-.147-.442c-.107-.303-.644-1.244-.772-1.464-.217.804-.304 1.346-.226 1.478.152.256.296.698.422 1.186.286 1.1.485 2.44.485 2.44l.017.224a22.41 22.41 0 0 0 .056 2.748c.095 1.146.273 2.13.5 2.657l.155-.084c-.334-1.038-.47-2.399-.41-3.967.09-2.398.642-5.29 1.661-8.304 1.723-4.55 4.113-8.201 6.3-9.945-1.993 1.8-4.692 7.63-5.5 9.788-.904 2.416-1.545 4.684-1.931 6.857.666-2.037 2.821-2.912 2.821-2.912s1.057-1.304 2.292-3.166c-.74.169-1.955.458-2.362.629-.6.251-.762.337-.762.337s1.945-1.184 3.613-1.72C21.695 7.9 24.195 2.767 21.678.521m-18.573.543A1.842 1.842 0 0 0 1.27 2.9v16.608a1.84 1.84 0 0 0 1.835 1.834h9.418a22.953 22.953 0 0 1-.052-2.707c-.006-.062-.011-.141-.016-.2a27.01 27.01 0 0 0-.473-2.378c-.121-.47-.275-.898-.369-1.057-.116-.197-.098-.31-.097-.432 0-.12.015-.245.037-.386a9.98 9.98 0 0 1 .234-1.045l.217-.028c-.017-.035-.014-.065-.031-.097l-.041-.381a32.8 32.8 0 0 1 .382-1.194l.2-.019c-.008-.016-.01-.038-.018-.053l-.043-.316c.63-3.28 2.587-7.443 4.8-9.791.066-.069.133-.128.198-.194Z" }, child: [] }] })(e);
}
function Q5(e) {
  return he({ attr: { role: "img", viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-.014-5.31L12.46 0v24l4.095-2.378V14.87l3.092 1.788-.018-4.618-3.074-1.756V7.603l6.168 3.564z" }, child: [] }] })(e);
}
function J5(e) {
  return he({ attr: { role: "img", viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" }, child: [] }] })(e);
}
const m6 = (e) => {
  const t = [
    { link: e.github_link, icon: /* @__PURE__ */ m.jsx(w5, { className: "social-icon icon-custom-color" }) },
    { link: e.linkedin_link, icon: /* @__PURE__ */ m.jsx(C5, { className: "social-icon icon-custom-color" }) },
    { link: e.twitter_link, icon: /* @__PURE__ */ m.jsx(T5, { className: "social-icon icon-custom-color" }) },
    { link: e.leetcode_link, icon: /* @__PURE__ */ m.jsx(L5, { className: "social-icon icon-custom-color" }) },
    { link: e.gitlab_link, icon: /* @__PURE__ */ m.jsx(du, { className: "social-icon icon-custom-color" }) },
    { link: e.kaggle_link, icon: /* @__PURE__ */ m.jsx(E5, { className: "social-icon icon-custom-color" }) },
    { link: e.medium_link, icon: /* @__PURE__ */ m.jsx(S5, { className: "social-icon icon-custom-color" }) }
  ];
  return /* @__PURE__ */ m.jsx(Le, { children: /* @__PURE__ */ m.jsx(be, { className: "rounded background-color-body mt-3 p-3 text-center d-flex justify-content-center", children: /* @__PURE__ */ m.jsx(ce, { className: "col-12 d-flex justify-content-center flex-wrap", children: t.map(
    ({ link: n, icon: r }, i) => n && /* @__PURE__ */ m.jsx(
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
}, p6 = () => /* @__PURE__ */ m.jsx(Le, { children: /* @__PURE__ */ m.jsx(be, { className: "mt-3" }) }), Z5 = ({ card_para: e, img_src: t, card_url: n, card_title: r }) => /* @__PURE__ */ m.jsxs(an, { className: "", children: [
  /* @__PURE__ */ m.jsx(an.Img, { className: "card-img-container p-3", variant: "top", src: t }),
  /* @__PURE__ */ m.jsxs(an.Body, { children: [
    /* @__PURE__ */ m.jsx("div", { className: "font-color-class text-center card-title", children: /* @__PURE__ */ m.jsx(an.Title, { children: r.length > 18 ? r.split(" ")[0] : r.split(" ").slice(0, 2).join(" ") }) }),
    /* @__PURE__ */ m.jsx(an.Text, { className: "card-text font-color-class justify-content", children: e }),
    /* @__PURE__ */ m.jsx("div", { className: "text-center", children: /* @__PURE__ */ m.jsx(kn, { className: "button-custom-color", children: /* @__PURE__ */ m.jsx("a", { href: n, style: { color: "inherit", textDecoration: "none" }, children: "Explore" }) }) })
  ] })
] }), g6 = ({ cardData: e }) => {
  const [t, n] = Je(1), r = 9, i = Math.ceil(e.length / r), a = e.slice((t - 1) * r, t * r), o = (l) => {
    l >= 1 && l <= i && n(l);
  };
  return /* @__PURE__ */ m.jsxs(Le, { className: "p-0", children: [
    /* @__PURE__ */ m.jsx(be, { className: "", children: a.map((l, s) => /* @__PURE__ */ m.jsx(ce, { xs: 12, sm: 12, md: 4, className: "mt-3", children: /* @__PURE__ */ m.jsx(
      Z5,
      {
        card_title: l.card_title,
        card_para: l.card_para,
        img_src: l.img_src,
        card_url: l.card_url
      }
    ) }, s)) }),
    i > 1 && /* @__PURE__ */ m.jsx(be, { className: "rounded background-color-body mt-3 p-3 justify-content-center m-0", children: /* @__PURE__ */ m.jsx(ce, { className: "text-center", children: /* @__PURE__ */ m.jsxs(Lt, { size: "sm", className: "justify-content-center", children: [
      /* @__PURE__ */ m.jsx(Lt.First, { onClick: () => o(1), disabled: t === 1 }),
      /* @__PURE__ */ m.jsx(Lt.Prev, { onClick: () => o(t - 1), disabled: t === 1 }),
      [...Array(i)].map((l, s) => /* @__PURE__ */ m.jsx(
        Lt.Item,
        {
          active: s + 1 === t,
          onClick: () => o(s + 1),
          children: s + 1
        },
        s + 1
      )),
      /* @__PURE__ */ m.jsx(Lt.Next, { onClick: () => o(t + 1), disabled: t === i }),
      /* @__PURE__ */ m.jsx(Lt.Last, { onClick: () => o(i), disabled: t === i })
    ] }) }) })
  ] });
}, y6 = ({ image_link: e }) => /* @__PURE__ */ m.jsx(Le, { className: "text-center", children: /* @__PURE__ */ m.jsxs(be, { className: "text-center", children: [
  /* @__PURE__ */ m.jsx(ce, {}),
  /* @__PURE__ */ m.jsx(ce, { md: 6, children: /* @__PURE__ */ m.jsx("img", { src: e, className: "img-fluid mt-3 rounded-circle justify-content", alt: "ProfilePic" }) }),
  /* @__PURE__ */ m.jsx(ce, {})
] }) }), x6 = ({ button_text: e, link: t }) => {
  const n = (r) => {
    if (r.preventDefault(), t == null ? void 0 : t.match(/\.(jpg|jpeg|png|pdf|docx|txt)$/i)) {
      const a = document.createElement("a");
      a.href = t, a.setAttribute("download", ""), document.body.appendChild(a), a.click(), document.body.removeChild(a);
    } else
      window.open(t, "_blank");
  };
  return /* @__PURE__ */ m.jsx(Le, { children: t && /* @__PURE__ */ m.jsx(be, { className: "rounded background-color-body mt-3 p-2", children: /* @__PURE__ */ m.jsx(ce, { className: "text-center", children: /* @__PURE__ */ m.jsx(kn, { className: "button-custom-color m-1", onClick: n, children: e }) }) }) });
}, b6 = () => /* @__PURE__ */ m.jsx(Le, { className: "m-0 p-0 text-center", children: /* @__PURE__ */ m.jsx(be, { className: "rounded background-color-body font-color-class mt-3 m-0", children: /* @__PURE__ */ m.jsx(ce, { className: "text-center p-2 mt-3 mb-3", children: /* @__PURE__ */ m.jsxs("h1", { className: "not-found-title m-2", children: [
  "OOPS! SEARCH",
  /* @__PURE__ */ m.jsx("br", {}),
  "Results Not Found"
] }) }) }) });
function e6(e) {
  return he({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256.016 17.824C153.28 17.824 68 123.394 68 255.984c0 55.725 15.08 106.68 40.17 147.034 42.033 17.992 95.622 27.594 149.34 27.644 51.828.046 103.59-8.786 145.04-25.588C428.41 364.4 444 312.66 444 255.982c0-132.59-85.25-238.156-187.982-238.158h-.002zm1.746 18.7c80.525 0 145.63 65.072 145.63 145.6 0 80.526-65.105 145.63-145.63 145.63-80.53 0-145.6-65.104-145.6-145.63 0-80.53 65.07-145.6 145.6-145.6zm-27.69 40.02c-2.586 5.774-5.09 11.292-7.52 16.843-.543 1.243-1.193 1.538-2.622 1.636-5.436.377-10.875.927-16.25 1.8-1.77.29-2.69.21-3.723-1.294-3.335-4.866-6.823-9.626-10.352-14.565L167.268 97.3c3.778 5.304 7.298 10.362 10.962 15.315.976 1.318.846 2.18.102 3.567-1.747 3.258-3.268 6.647-4.7 10.058-.835 1.984-.724 4.898-2.126 5.967-1.56 1.19-4.355.774-6.615 1.035-4.747.548-9.5 1.08-14.443 1.64l2.727 27.526c6.937-.78 13.47-1.57 20.017-2.195 1.164-.11 2.92.056 3.503.8 3.262 4.16 6.248 8.535 9.602 13.22l-9.477 21.26 25.057 11.216c3.057-6.812 6.036-13.325 8.89-19.894.658-1.518 1.386-2.035 3.143-2.064 4.032-.066 8.11-.283 12.063-1.02 2.293-.426 3.46-.018 4.757 1.844 3.998 5.74 8.2 11.337 12.386 17.076l16.084-11.722 5.537 9.588-19.986 20.01-24.428-14.034-13.035 23.715c8.287 4.824 16.284 9.48 23.567 13.722-2.152 9.085-4.15 17.682-6.29 26.244-.156.616-1.35 1.37-2.072 1.383-6.587.105-13.18.063-19.77.063h-6.585v26.434c.67.318 1.345.628 2.02.935h26.087c.75 3.174 1.477 6.206 2.182 9.203C235.314 310.028 244.536 311 254 311c15.906 0 31.138-2.728 45.236-7.723-8.264-13.37-6.265-30.49 3.118-41.173 13.284-15.13 36.56-16.175 50.794-2.032 1.167 1.16 2.232 2.366 3.21 3.61C374.897 241.53 386 213.237 386 182.412c0-6.172-.454-12.24-1.314-18.18-.236-.12-.427-.22-.686-.35-.132-.068-.31-.047-.664-.09-4.587 7.96-9.21 15.986-13.56 23.54l-27.532-7.566v-27.21h-27.32v27.24c-9.023 2.44-17.696 4.787-26.645 7.206-4.342-7.55-8.898-15.472-13.47-23.426l-18.232 10.235c-1.31-1.825-2.425-3.512-3.685-5.087-.825-1.03-.648-1.725-.028-2.86 2.178-3.98 4.357-7.992 6.06-12.185.805-1.988 1.693-2.632 3.73-2.81 6.453-.557 12.885-1.36 19.616-2.102-.92-9.32-1.82-18.397-2.72-27.522-6.795.652-13.1 1.22-19.396 1.89-1.49.157-2.1-.388-2.888-1.66-2.787-4.495-5.686-8.944-8.89-13.144-1.16-1.518-1.426-2.46-.63-4.148 2.537-5.387 4.9-10.854 7.393-16.438-8.45-3.774-16.663-7.445-25.068-11.2zm-13.455 42.845c12.335.102 22.195 10.073 22.092 22.337-.105 12.433-10.133 22.24-22.595 22.093-12.426-.145-22.047-10.12-21.908-22.72.134-12.086 10.174-21.814 22.41-21.71zm-45.183 214.63c18.315 0 33.066 14.8 33.066 33.41 0 18.608-14.75 33.437-33.064 33.437-18.315 0-33.036-14.83-33.036-33.437 0-18.61 14.72-33.41 33.034-33.41zm165.334.732a33 33 0 0 1 33 33 33 33 0 0 1-33 33 33 33 0 0 1-33-33 33 33 0 0 1 33-33zm-208.372 96.002v.006c.003 0 .005 0 .008.002l-.008-.008zm.008.008c11.484 13.443 24.29 25.074 38.108 34.586l-7.076-26.303c-10.648-2.343-21.013-5.113-31.032-8.283zm253.89 1.52c-8.87 2.67-17.994 5.016-27.33 7.046l-6.42 23.903c12.14-8.723 23.46-19.12 33.75-30.943v-.004zM179.82 443V443l9.565 35.686c11.31 5.452 23.12 9.55 35.31 12.156l-5.048-43.006c-13.472-1.002-26.797-2.645-39.828-4.838zm154.793.252c-10.124 1.667-20.447 2.983-30.85 3.96l-4.802 40.702c9.11-2.72 17.96-6.292 26.522-10.63l9.133-34.028v-.002l-.002-.002zm-49.77 5.297l-.005.03h.006l-.002-.03zm-.005.03c-9.08.502-18.206.753-27.324.753-6.344-.005-12.686-.126-19.012-.377l5.297 44.72c4.04.377 8.112.503 12.216.503 8.003 0 15.89-.626 23.652-1.905l5.17-43.692z" }, child: [] }] })(e);
}
function t6(e) {
  return he({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "m14 12-2 2-2-2 2-2 2 2zm-2-6 2.12 2.12 2.5-2.5L12 1 7.38 5.62l2.5 2.5L12 6zm-6 6 2.12-2.12-2.5-2.5L1 12l4.62 4.62 2.5-2.5L6 12zm12 0-2.12 2.12 2.5 2.5L23 12l-4.62-4.62-2.5 2.5L18 12zm-6 6-2.12-2.12-2.5 2.5L12 23l4.62-4.62-2.5-2.5L12 18z" }, child: [] }] })(e);
}
const v6 = () => /* @__PURE__ */ m.jsxs(Le, { children: [
  /* @__PURE__ */ m.jsx(be, { className: "rounded background-color-body mt-3 p-2", children: /* @__PURE__ */ m.jsx(ce, { className: "text-center", children: /* @__PURE__ */ m.jsx("h1", { className: "bio-font font-color-class heading-responsive-font m-0", children: "Programming Language" }) }) }),
  /* @__PURE__ */ m.jsx(be, { className: "rounded background-color-body mt-3 p-3 text-center d-flex justify-content-center", children: /* @__PURE__ */ m.jsx(ce, { className: "text-center", children: /* @__PURE__ */ m.jsxs("div", { className: "skills-icons", children: [
    /* @__PURE__ */ m.jsx("a", { href: "https://www.python.org/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ m.jsx(W5, { className: "social-icon icon-custom-color mx-2 no-hover-icons" }) }),
    /* @__PURE__ */ m.jsx("a", { href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ m.jsx(M5, { className: "social-icon icon-custom-color mx-2 no-hover-icons" }) }),
    /* @__PURE__ */ m.jsx("a", { href: "https://www.typescriptlang.org/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ m.jsx(J5, { className: "social-icon icon-custom-color mx-2 no-hover-icons" }) }),
    /* @__PURE__ */ m.jsx("a", { href: "https://www.gnu.org/software/bash/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ m.jsx(_5, { className: "social-icon icon-custom-color mx-2 no-hover-icons" }) })
  ] }) }) }),
  /* @__PURE__ */ m.jsx(be, { className: "rounded background-color-body mt-3 p-2", children: /* @__PURE__ */ m.jsx(ce, { className: "text-center", children: /* @__PURE__ */ m.jsx("h1", { className: "bio-font font-color-class heading-responsive-font m-0", children: "Web Development" }) }) }),
  /* @__PURE__ */ m.jsx(be, { className: "rounded background-color-body mt-3 p-3 text-center d-flex justify-content-center", children: /* @__PURE__ */ m.jsx(ce, { className: "text-center", children: /* @__PURE__ */ m.jsxs("div", { className: "skills-icons", children: [
    /* @__PURE__ */ m.jsx("a", { href: "https://reactjs.org/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ m.jsx(Y5, { className: "social-icon icon-custom-color mx-2 no-hover-icons" }) }),
    /* @__PURE__ */ m.jsx("a", { href: "https://restfulapi.net/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ m.jsx(t6, { className: "social-icon icon-custom-color mx-2 no-hover-icons" }) }),
    /* @__PURE__ */ m.jsx("a", { href: "https://nextjs.org/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ m.jsx(B5, { className: "social-icon icon-custom-color mx-2 no-hover-icons" }) }),
    /* @__PURE__ */ m.jsx("a", { href: "https://nodejs.org/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ m.jsx(H5, { className: "social-icon icon-custom-color mx-2 no-hover-icons" }) }),
    /* @__PURE__ */ m.jsx("a", { href: "https://flask.palletsprojects.com/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ m.jsx(P5, { className: "social-icon icon-custom-color mx-2 no-hover-icons" }) }),
    /* @__PURE__ */ m.jsx("a", { href: "https://getbootstrap.com/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ m.jsx(j5, { className: "social-icon icon-custom-color mx-2 no-hover-icons" }) }),
    /* @__PURE__ */ m.jsx("a", { href: "https://nginx.org/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ m.jsx($5, { className: "social-icon icon-custom-color mx-2 no-hover-icons" }) })
  ] }) }) }),
  /* @__PURE__ */ m.jsx(be, { className: "rounded background-color-body mt-3 p-2", children: /* @__PURE__ */ m.jsx(ce, { className: "text-center", children: /* @__PURE__ */ m.jsx("h1", { className: "bio-font font-color-class heading-responsive-font m-0", children: "Cloud & DevOps" }) }) }),
  /* @__PURE__ */ m.jsx(be, { className: "rounded background-color-body mt-3 p-3 text-center d-flex justify-content-center", children: /* @__PURE__ */ m.jsx(ce, { className: "text-center", children: /* @__PURE__ */ m.jsxs("div", { className: "skills-icons", children: [
    /* @__PURE__ */ m.jsx("a", { href: "https://aws.amazon.com/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ m.jsx(k5, { className: "social-icon icon-custom-color mx-2 no-hover-icons" }) }),
    /* @__PURE__ */ m.jsx("a", { href: "https://www.docker.com/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ m.jsx(z5, { className: "social-icon icon-custom-color mx-2 no-hover-icons" }) }),
    /* @__PURE__ */ m.jsx("a", { href: "https://about.gitlab.com/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ m.jsx(du, { className: "social-icon icon-custom-color mx-2 no-hover-icons" }) }),
    /* @__PURE__ */ m.jsx("a", { href: "https://github.com/features/actions", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ m.jsx(R5, { className: "social-icon icon-custom-color mx-2 no-hover-icons" }) }),
    /* @__PURE__ */ m.jsx("a", { href: "https://www.ansible.com/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ m.jsx(O5, { className: "social-icon icon-custom-color mx-2 no-hover-icons" }) })
  ] }) }) }),
  /* @__PURE__ */ m.jsx(be, { className: "rounded background-color-body mt-3 p-2", children: /* @__PURE__ */ m.jsx(ce, { className: "text-center", children: /* @__PURE__ */ m.jsx("h1", { className: "bio-font font-color-class heading-responsive-font m-0", children: "Databases" }) }) }),
  /* @__PURE__ */ m.jsx(be, { className: "rounded background-color-body mt-3 p-3 text-center d-flex justify-content-center", children: /* @__PURE__ */ m.jsx(ce, { className: "text-center", children: /* @__PURE__ */ m.jsxs("div", { className: "skills-icons", children: [
    /* @__PURE__ */ m.jsx("a", { href: "https://www.postgresql.org/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ m.jsx(U5, { className: "social-icon icon-custom-color mx-2 no-hover-icons" }) }),
    /* @__PURE__ */ m.jsx("a", { href: "https://www.mongodb.com/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ m.jsx(F5, { className: "social-icon icon-custom-color mx-2 no-hover-icons" }) }),
    /* @__PURE__ */ m.jsx("a", { href: "https://www.sqlite.org/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ m.jsx(X5, { className: "social-icon icon-custom-color mx-2 no-hover-icons" }) }),
    /* @__PURE__ */ m.jsx("a", { href: "https://redis.io/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ m.jsx(G5, { className: "social-icon icon-custom-color mx-2 no-hover-icons" }) }),
    /* @__PURE__ */ m.jsx("a", { href: "https://www.mysql.com/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ m.jsx(D5, { className: "social-icon icon-custom-color mx-2 no-hover-icons" }) }),
    /* @__PURE__ */ m.jsx("a", { href: "https://duckdb.org/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ m.jsx(I5, { className: "social-icon icon-custom-color mx-2 no-hover-icons" }) })
  ] }) }) }),
  /* @__PURE__ */ m.jsx(be, { className: "rounded background-color-body mt-3 p-2", children: /* @__PURE__ */ m.jsx(ce, { className: "text-center", children: /* @__PURE__ */ m.jsx("h1", { className: "bio-font font-color-class heading-responsive-font m-0", children: "Machine Learning & AI" }) }) }),
  /* @__PURE__ */ m.jsx(be, { className: "rounded background-color-body mt-3 p-3 text-center d-flex justify-content-center", children: /* @__PURE__ */ m.jsx(ce, { className: "text-center", children: /* @__PURE__ */ m.jsxs("div", { className: "skills-icons", children: [
    /* @__PURE__ */ m.jsx("a", { href: "https://pytorch.org/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ m.jsx(q5, { className: "social-icon icon-custom-color mx-2 no-hover-icons" }) }),
    /* @__PURE__ */ m.jsx("a", { href: "https://www.tensorflow.org/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ m.jsx(Q5, { className: "social-icon icon-custom-color mx-2 no-hover-icons" }) }),
    /* @__PURE__ */ m.jsx("a", { href: "https://pandas.pydata.org/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ m.jsx(V5, { className: "social-icon icon-custom-color mx-2 no-hover-icons" }) }),
    /* @__PURE__ */ m.jsx("a", { href: "https://scikit-learn.org/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ m.jsx(K5, { className: "social-icon icon-custom-color mx-2 no-hover-icons" }) }),
    /* @__PURE__ */ m.jsx("a", { href: "https://en.wikipedia.org/wiki/Neural_network", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ m.jsx(A5, { className: "social-icon icon-custom-color mx-2 no-hover-icons" }) }),
    /* @__PURE__ */ m.jsx("a", { href: "https://en.wikipedia.org/wiki/Artificial_intelligence", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ m.jsx(e6, { className: "social-icon icon-custom-color mx-2 no-hover-icons" }) }),
    /* @__PURE__ */ m.jsx("a", { href: "https://en.wikipedia.org/wiki/Machine_learning", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ m.jsx(N5, { className: "social-icon icon-custom-color mx-2 no-hover-icons" }) })
  ] }) }) })
] });
export {
  y6 as AboutPic,
  o6 as ArticleImage,
  x6 as ButtonBar,
  g6 as CardsPaignation,
  l6 as CustomBody,
  s6 as Footer,
  c6 as HeadingBar,
  u6 as MarkDown,
  f6 as More,
  d6 as NavBar,
  b6 as NotFound,
  h6 as Para,
  v6 as SkillsBox,
  m6 as SocialMediaLinks,
  p6 as SpaceBlock
};
