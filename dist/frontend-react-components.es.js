import * as F from "react";
import Ke, { useRef as Ce, useState as rt, useCallback as Ee, useContext as ke, useMemo as He, useEffect as Pe, useLayoutEffect as Yo, useReducer as uu, createContext as cu, cloneElement as hi, forwardRef as fu, useImperativeHandle as du } from "react";
import Lt from "react-dom";
function pn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var vn = { exports: {} }, Xt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ia;
function pu() {
  if (ia) return Xt;
  ia = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, i, a) {
    var o = null;
    if (a !== void 0 && (o = "" + a), i.key !== void 0 && (o = "" + i.key), "key" in i) {
      a = {};
      for (var s in i)
        s !== "key" && (a[s] = i[s]);
    } else a = i;
    return i = a.ref, {
      $$typeof: e,
      type: r,
      key: o,
      ref: i !== void 0 ? i : null,
      props: a
    };
  }
  return Xt.Fragment = t, Xt.jsx = n, Xt.jsxs = n, Xt;
}
var Jt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa;
function hu() {
  return aa || (aa = 1, process.env.NODE_ENV !== "production" && function() {
    function e(y) {
      if (y == null) return null;
      if (typeof y == "function")
        return y.$$typeof === ce ? null : y.displayName || y.name || null;
      if (typeof y == "string") return y;
      switch (y) {
        case w:
          return "Fragment";
        case k:
          return "Portal";
        case ee:
          return "Profiler";
        case z:
          return "StrictMode";
        case D:
          return "Suspense";
        case M:
          return "SuspenseList";
      }
      if (typeof y == "object")
        switch (typeof y.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), y.$$typeof) {
          case se:
            return (y.displayName || "Context") + ".Provider";
          case re:
            return (y._context.displayName || "Context") + ".Consumer";
          case B:
            var $ = y.render;
            return y = y.displayName, y || (y = $.displayName || $.name || "", y = y !== "" ? "ForwardRef(" + y + ")" : "ForwardRef"), y;
          case _:
            return $ = y.displayName || null, $ !== null ? $ : e(y.type) || "Memo";
          case V:
            $ = y._payload, y = y._init;
            try {
              return e(y($));
            } catch {
            }
        }
      return null;
    }
    function t(y) {
      return "" + y;
    }
    function n(y) {
      try {
        t(y);
        var $ = !1;
      } catch {
        $ = !0;
      }
      if ($) {
        $ = console;
        var U = $.error, fe = typeof Symbol == "function" && Symbol.toStringTag && y[Symbol.toStringTag] || y.constructor.name || "Object";
        return U.call(
          $,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          fe
        ), t(y);
      }
    }
    function r() {
    }
    function i() {
      if (L === 0) {
        K = console.log, H = console.info, G = console.warn, Q = console.error, te = console.group, Z = console.groupCollapsed, ve = console.groupEnd;
        var y = {
          configurable: !0,
          enumerable: !0,
          value: r,
          writable: !0
        };
        Object.defineProperties(console, {
          info: y,
          log: y,
          warn: y,
          error: y,
          group: y,
          groupCollapsed: y,
          groupEnd: y
        });
      }
      L++;
    }
    function a() {
      if (L--, L === 0) {
        var y = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: P({}, y, { value: K }),
          info: P({}, y, { value: H }),
          warn: P({}, y, { value: G }),
          error: P({}, y, { value: Q }),
          group: P({}, y, { value: te }),
          groupCollapsed: P({}, y, { value: Z }),
          groupEnd: P({}, y, { value: ve })
        });
      }
      0 > L && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function o(y) {
      if (R === void 0)
        try {
          throw Error();
        } catch (U) {
          var $ = U.stack.trim().match(/\n( *(at )?)/);
          R = $ && $[1] || "", Te = -1 < U.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < U.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + R + y + Te;
    }
    function s(y, $) {
      if (!y || _e) return "";
      var U = de.get(y);
      if (U !== void 0) return U;
      _e = !0, U = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var fe = null;
      fe = xe.H, xe.H = null, i();
      try {
        var Oe = {
          DetermineComponentFrameRoot: function() {
            try {
              if ($) {
                var Ae = function() {
                  throw Error();
                };
                if (Object.defineProperty(Ae.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Ae, []);
                  } catch (Le) {
                    var Je = Le;
                  }
                  Reflect.construct(y, [], Ae);
                } else {
                  try {
                    Ae.call();
                  } catch (Le) {
                    Je = Le;
                  }
                  y.call(Ae.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (Le) {
                  Je = Le;
                }
                (Ae = y()) && typeof Ae.catch == "function" && Ae.catch(function() {
                });
              }
            } catch (Le) {
              if (Le && Je && typeof Le.stack == "string")
                return [Le.stack, Je.stack];
            }
            return [null, null];
          }
        };
        Oe.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var E = Object.getOwnPropertyDescriptor(
          Oe.DetermineComponentFrameRoot,
          "name"
        );
        E && E.configurable && Object.defineProperty(
          Oe.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var T = Oe.DetermineComponentFrameRoot(), Y = T[0], ae = T[1];
        if (Y && ae) {
          var ne = Y.split(`
`), Ne = ae.split(`
`);
          for (T = E = 0; E < ne.length && !ne[E].includes(
            "DetermineComponentFrameRoot"
          ); )
            E++;
          for (; T < Ne.length && !Ne[T].includes(
            "DetermineComponentFrameRoot"
          ); )
            T++;
          if (E === ne.length || T === Ne.length)
            for (E = ne.length - 1, T = Ne.length - 1; 1 <= E && 0 <= T && ne[E] !== Ne[T]; )
              T--;
          for (; 1 <= E && 0 <= T; E--, T--)
            if (ne[E] !== Ne[T]) {
              if (E !== 1 || T !== 1)
                do
                  if (E--, T--, 0 > T || ne[E] !== Ne[T]) {
                    var Be = `
` + ne[E].replace(
                      " at new ",
                      " at "
                    );
                    return y.displayName && Be.includes("<anonymous>") && (Be = Be.replace("<anonymous>", y.displayName)), typeof y == "function" && de.set(y, Be), Be;
                  }
                while (1 <= E && 0 <= T);
              break;
            }
        }
      } finally {
        _e = !1, xe.H = fe, a(), Error.prepareStackTrace = U;
      }
      return ne = (ne = y ? y.displayName || y.name : "") ? o(ne) : "", typeof y == "function" && de.set(y, ne), ne;
    }
    function u(y) {
      if (y == null) return "";
      if (typeof y == "function") {
        var $ = y.prototype;
        return s(
          y,
          !(!$ || !$.isReactComponent)
        );
      }
      if (typeof y == "string") return o(y);
      switch (y) {
        case D:
          return o("Suspense");
        case M:
          return o("SuspenseList");
      }
      if (typeof y == "object")
        switch (y.$$typeof) {
          case B:
            return y = s(y.render, !1), y;
          case _:
            return u(y.type);
          case V:
            $ = y._payload, y = y._init;
            try {
              return u(y($));
            } catch {
            }
        }
      return "";
    }
    function l() {
      var y = xe.A;
      return y === null ? null : y.getOwner();
    }
    function c(y) {
      if (h.call(y, "key")) {
        var $ = Object.getOwnPropertyDescriptor(y, "key").get;
        if ($ && $.isReactWarning) return !1;
      }
      return y.key !== void 0;
    }
    function f(y, $) {
      function U() {
        at || (at = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          $
        ));
      }
      U.isReactWarning = !0, Object.defineProperty(y, "key", {
        get: U,
        configurable: !0
      });
    }
    function p() {
      var y = e(this.type);
      return bn[y] || (bn[y] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), y = this.props.ref, y !== void 0 ? y : null;
    }
    function d(y, $, U, fe, Oe, E) {
      return U = E.ref, y = {
        $$typeof: I,
        type: y,
        key: $,
        props: E,
        _owner: Oe
      }, (U !== void 0 ? U : null) !== null ? Object.defineProperty(y, "ref", {
        enumerable: !1,
        get: p
      }) : Object.defineProperty(y, "ref", { enumerable: !1, value: null }), y._store = {}, Object.defineProperty(y._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(y, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
    }
    function b(y, $, U, fe, Oe, E) {
      if (typeof y == "string" || typeof y == "function" || y === w || y === ee || y === z || y === D || y === M || y === ie || typeof y == "object" && y !== null && (y.$$typeof === V || y.$$typeof === _ || y.$$typeof === se || y.$$typeof === re || y.$$typeof === B || y.$$typeof === q || y.getModuleId !== void 0)) {
        var T = $.children;
        if (T !== void 0)
          if (fe)
            if (m(T)) {
              for (fe = 0; fe < T.length; fe++)
                x(T[fe], y);
              Object.freeze && Object.freeze(T);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else x(T, y);
      } else
        T = "", (y === void 0 || typeof y == "object" && y !== null && Object.keys(y).length === 0) && (T += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), y === null ? fe = "null" : m(y) ? fe = "array" : y !== void 0 && y.$$typeof === I ? (fe = "<" + (e(y.type) || "Unknown") + " />", T = " Did you accidentally export a JSX literal instead of a component?") : fe = typeof y, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          fe,
          T
        );
      if (h.call($, "key")) {
        T = e(y);
        var Y = Object.keys($).filter(function(ne) {
          return ne !== "key";
        });
        fe = 0 < Y.length ? "{key: someKey, " + Y.join(": ..., ") + ": ...}" : "{key: someKey}", Kt[T + fe] || (Y = 0 < Y.length ? "{" + Y.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          fe,
          T,
          Y,
          T
        ), Kt[T + fe] = !0);
      }
      if (T = null, U !== void 0 && (n(U), T = "" + U), c($) && (n($.key), T = "" + $.key), "key" in $) {
        U = {};
        for (var ae in $)
          ae !== "key" && (U[ae] = $[ae]);
      } else U = $;
      return T && f(
        U,
        typeof y == "function" ? y.displayName || y.name || "Unknown" : y
      ), d(y, T, E, Oe, l(), U);
    }
    function x(y, $) {
      if (typeof y == "object" && y && y.$$typeof !== Et) {
        if (m(y))
          for (var U = 0; U < y.length; U++) {
            var fe = y[U];
            S(fe) && v(fe, $);
          }
        else if (S(y))
          y._store && (y._store.validated = 1);
        else if (y === null || typeof y != "object" ? U = null : (U = ue && y[ue] || y["@@iterator"], U = typeof U == "function" ? U : null), typeof U == "function" && U !== y.entries && (U = U.call(y), U !== y))
          for (; !(y = U.next()).done; )
            S(y.value) && v(y.value, $);
      }
    }
    function S(y) {
      return typeof y == "object" && y !== null && y.$$typeof === I;
    }
    function v(y, $) {
      if (y._store && !y._store.validated && y.key == null && (y._store.validated = 1, $ = O($), !Gt[$])) {
        Gt[$] = !0;
        var U = "";
        y && y._owner != null && y._owner !== l() && (U = null, typeof y._owner.tag == "number" ? U = e(y._owner.type) : typeof y._owner.name == "string" && (U = y._owner.name), U = " It was passed a child from " + U + ".");
        var fe = xe.getCurrentStack;
        xe.getCurrentStack = function() {
          var Oe = u(y.type);
          return fe && (Oe += fe() || ""), Oe;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          $,
          U
        ), xe.getCurrentStack = fe;
      }
    }
    function O(y) {
      var $ = "", U = l();
      return U && (U = e(U.type)) && ($ = `

Check the render method of \`` + U + "`."), $ || (y = e(y)) && ($ = `

Check the top-level render call using <` + y + ">."), $;
    }
    var C = Ke, I = Symbol.for("react.transitional.element"), k = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), z = Symbol.for("react.strict_mode"), ee = Symbol.for("react.profiler"), re = Symbol.for("react.consumer"), se = Symbol.for("react.context"), B = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), ie = Symbol.for("react.offscreen"), ue = Symbol.iterator, ce = Symbol.for("react.client.reference"), xe = C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, h = Object.prototype.hasOwnProperty, P = Object.assign, q = Symbol.for("react.client.reference"), m = Array.isArray, L = 0, K, H, G, Q, te, Z, ve;
    r.__reactDisabledLog = !0;
    var R, Te, _e = !1, de = new (typeof WeakMap == "function" ? WeakMap : Map)(), Et = Symbol.for("react.client.reference"), at, bn = {}, Kt = {}, Gt = {};
    Jt.Fragment = w, Jt.jsx = function(y, $, U, fe, Oe) {
      return b(y, $, U, !1, fe, Oe);
    }, Jt.jsxs = function(y, $, U, fe, Oe) {
      return b(y, $, U, !0, fe, Oe);
    };
  }()), Jt;
}
var oa;
function mu() {
  return oa || (oa = 1, process.env.NODE_ENV === "production" ? vn.exports = pu() : vn.exports = hu()), vn.exports;
}
var g = mu(), rr = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var sa;
function gu() {
  return sa || (sa = 1, function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function n() {
        for (var a = "", o = 0; o < arguments.length; o++) {
          var s = arguments[o];
          s && (a = i(a, r(s)));
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
        for (var s in a)
          t.call(a, s) && a[s] && (o = i(o, s));
        return o;
      }
      function i(a, o) {
        return o ? a ? a + " " + o : a + o : a;
      }
      e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
    })();
  }(rr)), rr.exports;
}
var yu = gu();
const J = /* @__PURE__ */ pn(yu);
function Lr() {
  return Lr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Lr.apply(null, arguments);
}
function qo(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function la(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function xu(e) {
  var t = bu(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function bu(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function vu(e, t, n) {
  var r = Ce(e !== void 0), i = rt(t), a = i[0], o = i[1], s = e !== void 0, u = r.current;
  return r.current = s, !s && u && a !== t && o(t), [s ? e : a, Ee(function(l) {
    for (var c = arguments.length, f = new Array(c > 1 ? c - 1 : 0), p = 1; p < c; p++)
      f[p - 1] = arguments[p];
    n && n.apply(void 0, [l].concat(f)), o(l);
  }, [n])];
}
function Ko(e, t) {
  return Object.keys(t).reduce(function(n, r) {
    var i, a = n, o = a[la(r)], s = a[r], u = qo(a, [la(r), r].map(xu)), l = t[r], c = vu(s, o, e[l]), f = c[0], p = c[1];
    return Lr({}, u, (i = {}, i[r] = f, i[l] = p, i));
  }, e);
}
function Fr(e, t) {
  return Fr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Fr(e, t);
}
function wu(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Fr(e, t);
}
const Eu = ["xxl", "xl", "lg", "md", "sm", "xs"], ku = "xs", Hn = /* @__PURE__ */ F.createContext({
  prefixes: {},
  breakpoints: Eu,
  minBreakpoint: ku
}), {
  Consumer: ux,
  Provider: cx
} = Hn;
function le(e, t) {
  const {
    prefixes: n
  } = ke(Hn);
  return e || n[t] || t;
}
function Go() {
  const {
    breakpoints: e
  } = ke(Hn);
  return e;
}
function Xo() {
  const {
    minBreakpoint: e
  } = ke(Hn);
  return e;
}
function mi(e) {
  return e && e.ownerDocument || document;
}
function Su(e) {
  var t = mi(e);
  return t && t.defaultView || window;
}
function Cu(e, t) {
  return Su(e).getComputedStyle(e, t);
}
var Tu = /([A-Z])/g;
function Nu(e) {
  return e.replace(Tu, "-$1").toLowerCase();
}
var Ou = /^ms-/;
function wn(e) {
  return Nu(e).replace(Ou, "-ms-");
}
var Au = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function Iu(e) {
  return !!(e && Au.test(e));
}
function ut(e, t) {
  var n = "", r = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(wn(t)) || Cu(e).getPropertyValue(wn(t));
  Object.keys(t).forEach(function(i) {
    var a = t[i];
    !a && a !== 0 ? e.style.removeProperty(wn(i)) : Iu(i) ? r += i + "(" + a + ") " : n += wn(i) + ": " + a + ";";
  }), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
var En = { exports: {} }, kn = { exports: {} }, he = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ua;
function Pu() {
  if (ua) return he;
  ua = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, d = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function C(k) {
    if (typeof k == "object" && k !== null) {
      var w = k.$$typeof;
      switch (w) {
        case t:
          switch (k = k.type, k) {
            case u:
            case l:
            case r:
            case a:
            case i:
            case f:
              return k;
            default:
              switch (k = k && k.$$typeof, k) {
                case s:
                case c:
                case b:
                case d:
                case o:
                  return k;
                default:
                  return w;
              }
          }
        case n:
          return w;
      }
    }
  }
  function I(k) {
    return C(k) === l;
  }
  return he.AsyncMode = u, he.ConcurrentMode = l, he.ContextConsumer = s, he.ContextProvider = o, he.Element = t, he.ForwardRef = c, he.Fragment = r, he.Lazy = b, he.Memo = d, he.Portal = n, he.Profiler = a, he.StrictMode = i, he.Suspense = f, he.isAsyncMode = function(k) {
    return I(k) || C(k) === u;
  }, he.isConcurrentMode = I, he.isContextConsumer = function(k) {
    return C(k) === s;
  }, he.isContextProvider = function(k) {
    return C(k) === o;
  }, he.isElement = function(k) {
    return typeof k == "object" && k !== null && k.$$typeof === t;
  }, he.isForwardRef = function(k) {
    return C(k) === c;
  }, he.isFragment = function(k) {
    return C(k) === r;
  }, he.isLazy = function(k) {
    return C(k) === b;
  }, he.isMemo = function(k) {
    return C(k) === d;
  }, he.isPortal = function(k) {
    return C(k) === n;
  }, he.isProfiler = function(k) {
    return C(k) === a;
  }, he.isStrictMode = function(k) {
    return C(k) === i;
  }, he.isSuspense = function(k) {
    return C(k) === f;
  }, he.isValidElementType = function(k) {
    return typeof k == "string" || typeof k == "function" || k === r || k === l || k === a || k === i || k === f || k === p || typeof k == "object" && k !== null && (k.$$typeof === b || k.$$typeof === d || k.$$typeof === o || k.$$typeof === s || k.$$typeof === c || k.$$typeof === S || k.$$typeof === v || k.$$typeof === O || k.$$typeof === x);
  }, he.typeOf = C, he;
}
var me = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ca;
function ju() {
  return ca || (ca = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, d = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function C(R) {
      return typeof R == "string" || typeof R == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      R === r || R === l || R === a || R === i || R === f || R === p || typeof R == "object" && R !== null && (R.$$typeof === b || R.$$typeof === d || R.$$typeof === o || R.$$typeof === s || R.$$typeof === c || R.$$typeof === S || R.$$typeof === v || R.$$typeof === O || R.$$typeof === x);
    }
    function I(R) {
      if (typeof R == "object" && R !== null) {
        var Te = R.$$typeof;
        switch (Te) {
          case t:
            var _e = R.type;
            switch (_e) {
              case u:
              case l:
              case r:
              case a:
              case i:
              case f:
                return _e;
              default:
                var de = _e && _e.$$typeof;
                switch (de) {
                  case s:
                  case c:
                  case b:
                  case d:
                  case o:
                    return de;
                  default:
                    return Te;
                }
            }
          case n:
            return Te;
        }
      }
    }
    var k = u, w = l, z = s, ee = o, re = t, se = c, B = r, D = b, M = d, _ = n, V = a, ie = i, ue = f, ce = !1;
    function xe(R) {
      return ce || (ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), h(R) || I(R) === u;
    }
    function h(R) {
      return I(R) === l;
    }
    function P(R) {
      return I(R) === s;
    }
    function q(R) {
      return I(R) === o;
    }
    function m(R) {
      return typeof R == "object" && R !== null && R.$$typeof === t;
    }
    function L(R) {
      return I(R) === c;
    }
    function K(R) {
      return I(R) === r;
    }
    function H(R) {
      return I(R) === b;
    }
    function G(R) {
      return I(R) === d;
    }
    function Q(R) {
      return I(R) === n;
    }
    function te(R) {
      return I(R) === a;
    }
    function Z(R) {
      return I(R) === i;
    }
    function ve(R) {
      return I(R) === f;
    }
    me.AsyncMode = k, me.ConcurrentMode = w, me.ContextConsumer = z, me.ContextProvider = ee, me.Element = re, me.ForwardRef = se, me.Fragment = B, me.Lazy = D, me.Memo = M, me.Portal = _, me.Profiler = V, me.StrictMode = ie, me.Suspense = ue, me.isAsyncMode = xe, me.isConcurrentMode = h, me.isContextConsumer = P, me.isContextProvider = q, me.isElement = m, me.isForwardRef = L, me.isFragment = K, me.isLazy = H, me.isMemo = G, me.isPortal = Q, me.isProfiler = te, me.isStrictMode = Z, me.isSuspense = ve, me.isValidElementType = C, me.typeOf = I;
  }()), me;
}
var fa;
function Jo() {
  return fa || (fa = 1, process.env.NODE_ENV === "production" ? kn.exports = Pu() : kn.exports = ju()), kn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ir, da;
function Ru() {
  if (da) return ir;
  da = 1;
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
      for (var o = {}, s = 0; s < 10; s++)
        o["_" + String.fromCharCode(s)] = s;
      var u = Object.getOwnPropertyNames(o).map(function(c) {
        return o[c];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(c) {
        l[c] = c;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ir = i() ? Object.assign : function(a, o) {
    for (var s, u = r(a), l, c = 1; c < arguments.length; c++) {
      s = Object(arguments[c]);
      for (var f in s)
        t.call(s, f) && (u[f] = s[f]);
      if (e) {
        l = e(s);
        for (var p = 0; p < l.length; p++)
          n.call(s, l[p]) && (u[l[p]] = s[l[p]]);
      }
    }
    return u;
  }, ir;
}
var ar, pa;
function gi() {
  if (pa) return ar;
  pa = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ar = e, ar;
}
var or, ha;
function Qo() {
  return ha || (ha = 1, or = Function.call.bind(Object.prototype.hasOwnProperty)), or;
}
var sr, ma;
function _u() {
  if (ma) return sr;
  ma = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ gi(), n = {}, r = /* @__PURE__ */ Qo();
    e = function(a) {
      var o = "Warning: " + a;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function i(a, o, s, u, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var c in a)
        if (r(a, c)) {
          var f;
          try {
            if (typeof a[c] != "function") {
              var p = Error(
                (u || "React class") + ": " + s + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            f = a[c](o, c, u, s, null, t);
          } catch (b) {
            f = b;
          }
          if (f && !(f instanceof Error) && e(
            (u || "React class") + ": type specification of " + s + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in n)) {
            n[f.message] = !0;
            var d = l ? l() : "";
            e(
              "Failed " + s + " type: " + f.message + (d ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, sr = i, sr;
}
var lr, ga;
function Lu() {
  if (ga) return lr;
  ga = 1;
  var e = Jo(), t = Ru(), n = /* @__PURE__ */ gi(), r = /* @__PURE__ */ Qo(), i = /* @__PURE__ */ _u(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(s) {
    var u = "Warning: " + s;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return lr = function(s, u) {
    var l = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function f(h) {
      var P = h && (l && h[l] || h[c]);
      if (typeof P == "function")
        return P;
    }
    var p = "<<anonymous>>", d = {
      array: v("array"),
      bigint: v("bigint"),
      bool: v("boolean"),
      func: v("function"),
      number: v("number"),
      object: v("object"),
      string: v("string"),
      symbol: v("symbol"),
      any: O(),
      arrayOf: C,
      element: I(),
      elementType: k(),
      instanceOf: w,
      node: se(),
      objectOf: ee,
      oneOf: z,
      oneOfType: re,
      shape: D,
      exact: M
    };
    function b(h, P) {
      return h === P ? h !== 0 || 1 / h === 1 / P : h !== h && P !== P;
    }
    function x(h, P) {
      this.message = h, this.data = P && typeof P == "object" ? P : {}, this.stack = "";
    }
    x.prototype = Error.prototype;
    function S(h) {
      if (process.env.NODE_ENV !== "production")
        var P = {}, q = 0;
      function m(K, H, G, Q, te, Z, ve) {
        if (Q = Q || p, Z = Z || G, ve !== n) {
          if (u) {
            var R = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw R.name = "Invariant Violation", R;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Te = Q + ":" + G;
            !P[Te] && // Avoid spamming the console because they are often not actionable except for lib authors
            q < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + Z + "` prop on `" + Q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), P[Te] = !0, q++);
          }
        }
        return H[G] == null ? K ? H[G] === null ? new x("The " + te + " `" + Z + "` is marked as required " + ("in `" + Q + "`, but its value is `null`.")) : new x("The " + te + " `" + Z + "` is marked as required in " + ("`" + Q + "`, but its value is `undefined`.")) : null : h(H, G, Q, te, Z);
      }
      var L = m.bind(null, !1);
      return L.isRequired = m.bind(null, !0), L;
    }
    function v(h) {
      function P(q, m, L, K, H, G) {
        var Q = q[m], te = ie(Q);
        if (te !== h) {
          var Z = ue(Q);
          return new x(
            "Invalid " + K + " `" + H + "` of type " + ("`" + Z + "` supplied to `" + L + "`, expected ") + ("`" + h + "`."),
            { expectedType: h }
          );
        }
        return null;
      }
      return S(P);
    }
    function O() {
      return S(o);
    }
    function C(h) {
      function P(q, m, L, K, H) {
        if (typeof h != "function")
          return new x("Property `" + H + "` of component `" + L + "` has invalid PropType notation inside arrayOf.");
        var G = q[m];
        if (!Array.isArray(G)) {
          var Q = ie(G);
          return new x("Invalid " + K + " `" + H + "` of type " + ("`" + Q + "` supplied to `" + L + "`, expected an array."));
        }
        for (var te = 0; te < G.length; te++) {
          var Z = h(G, te, L, K, H + "[" + te + "]", n);
          if (Z instanceof Error)
            return Z;
        }
        return null;
      }
      return S(P);
    }
    function I() {
      function h(P, q, m, L, K) {
        var H = P[q];
        if (!s(H)) {
          var G = ie(H);
          return new x("Invalid " + L + " `" + K + "` of type " + ("`" + G + "` supplied to `" + m + "`, expected a single ReactElement."));
        }
        return null;
      }
      return S(h);
    }
    function k() {
      function h(P, q, m, L, K) {
        var H = P[q];
        if (!e.isValidElementType(H)) {
          var G = ie(H);
          return new x("Invalid " + L + " `" + K + "` of type " + ("`" + G + "` supplied to `" + m + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return S(h);
    }
    function w(h) {
      function P(q, m, L, K, H) {
        if (!(q[m] instanceof h)) {
          var G = h.name || p, Q = xe(q[m]);
          return new x("Invalid " + K + " `" + H + "` of type " + ("`" + Q + "` supplied to `" + L + "`, expected ") + ("instance of `" + G + "`."));
        }
        return null;
      }
      return S(P);
    }
    function z(h) {
      if (!Array.isArray(h))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), o;
      function P(q, m, L, K, H) {
        for (var G = q[m], Q = 0; Q < h.length; Q++)
          if (b(G, h[Q]))
            return null;
        var te = JSON.stringify(h, function(ve, R) {
          var Te = ue(R);
          return Te === "symbol" ? String(R) : R;
        });
        return new x("Invalid " + K + " `" + H + "` of value `" + String(G) + "` " + ("supplied to `" + L + "`, expected one of " + te + "."));
      }
      return S(P);
    }
    function ee(h) {
      function P(q, m, L, K, H) {
        if (typeof h != "function")
          return new x("Property `" + H + "` of component `" + L + "` has invalid PropType notation inside objectOf.");
        var G = q[m], Q = ie(G);
        if (Q !== "object")
          return new x("Invalid " + K + " `" + H + "` of type " + ("`" + Q + "` supplied to `" + L + "`, expected an object."));
        for (var te in G)
          if (r(G, te)) {
            var Z = h(G, te, L, K, H + "." + te, n);
            if (Z instanceof Error)
              return Z;
          }
        return null;
      }
      return S(P);
    }
    function re(h) {
      if (!Array.isArray(h))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var P = 0; P < h.length; P++) {
        var q = h[P];
        if (typeof q != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ce(q) + " at index " + P + "."
          ), o;
      }
      function m(L, K, H, G, Q) {
        for (var te = [], Z = 0; Z < h.length; Z++) {
          var ve = h[Z], R = ve(L, K, H, G, Q, n);
          if (R == null)
            return null;
          R.data && r(R.data, "expectedType") && te.push(R.data.expectedType);
        }
        var Te = te.length > 0 ? ", expected one of type [" + te.join(", ") + "]" : "";
        return new x("Invalid " + G + " `" + Q + "` supplied to " + ("`" + H + "`" + Te + "."));
      }
      return S(m);
    }
    function se() {
      function h(P, q, m, L, K) {
        return _(P[q]) ? null : new x("Invalid " + L + " `" + K + "` supplied to " + ("`" + m + "`, expected a ReactNode."));
      }
      return S(h);
    }
    function B(h, P, q, m, L) {
      return new x(
        (h || "React class") + ": " + P + " type `" + q + "." + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + L + "`."
      );
    }
    function D(h) {
      function P(q, m, L, K, H) {
        var G = q[m], Q = ie(G);
        if (Q !== "object")
          return new x("Invalid " + K + " `" + H + "` of type `" + Q + "` " + ("supplied to `" + L + "`, expected `object`."));
        for (var te in h) {
          var Z = h[te];
          if (typeof Z != "function")
            return B(L, K, H, te, ue(Z));
          var ve = Z(G, te, L, K, H + "." + te, n);
          if (ve)
            return ve;
        }
        return null;
      }
      return S(P);
    }
    function M(h) {
      function P(q, m, L, K, H) {
        var G = q[m], Q = ie(G);
        if (Q !== "object")
          return new x("Invalid " + K + " `" + H + "` of type `" + Q + "` " + ("supplied to `" + L + "`, expected `object`."));
        var te = t({}, q[m], h);
        for (var Z in te) {
          var ve = h[Z];
          if (r(h, Z) && typeof ve != "function")
            return B(L, K, H, Z, ue(ve));
          if (!ve)
            return new x(
              "Invalid " + K + " `" + H + "` key `" + Z + "` supplied to `" + L + "`.\nBad object: " + JSON.stringify(q[m], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(h), null, "  ")
            );
          var R = ve(G, Z, L, K, H + "." + Z, n);
          if (R)
            return R;
        }
        return null;
      }
      return S(P);
    }
    function _(h) {
      switch (typeof h) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !h;
        case "object":
          if (Array.isArray(h))
            return h.every(_);
          if (h === null || s(h))
            return !0;
          var P = f(h);
          if (P) {
            var q = P.call(h), m;
            if (P !== h.entries) {
              for (; !(m = q.next()).done; )
                if (!_(m.value))
                  return !1;
            } else
              for (; !(m = q.next()).done; ) {
                var L = m.value;
                if (L && !_(L[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function V(h, P) {
      return h === "symbol" ? !0 : P ? P["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && P instanceof Symbol : !1;
    }
    function ie(h) {
      var P = typeof h;
      return Array.isArray(h) ? "array" : h instanceof RegExp ? "object" : V(P, h) ? "symbol" : P;
    }
    function ue(h) {
      if (typeof h > "u" || h === null)
        return "" + h;
      var P = ie(h);
      if (P === "object") {
        if (h instanceof Date)
          return "date";
        if (h instanceof RegExp)
          return "regexp";
      }
      return P;
    }
    function ce(h) {
      var P = ue(h);
      switch (P) {
        case "array":
        case "object":
          return "an " + P;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + P;
        default:
          return P;
      }
    }
    function xe(h) {
      return !h.constructor || !h.constructor.name ? p : h.constructor.name;
    }
    return d.checkPropTypes = i, d.resetWarningCache = i.resetWarningCache, d.PropTypes = d, d;
  }, lr;
}
var ur, ya;
function Fu() {
  if (ya) return ur;
  ya = 1;
  var e = /* @__PURE__ */ gi();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, ur = function() {
    function r(o, s, u, l, c, f) {
      if (f !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
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
  }, ur;
}
var xa;
function Mu() {
  if (xa) return En.exports;
  if (xa = 1, process.env.NODE_ENV !== "production") {
    var e = Jo(), t = !0;
    En.exports = /* @__PURE__ */ Lu()(e.isElement, t);
  } else
    En.exports = /* @__PURE__ */ Fu()();
  return En.exports;
}
var Du = /* @__PURE__ */ Mu();
const j = /* @__PURE__ */ pn(Du), ba = {
  disabled: !1
};
var zu = process.env.NODE_ENV !== "production" ? j.oneOfType([j.number, j.shape({
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
const Zo = Ke.createContext(null);
var Bu = function(t) {
  return t.scrollTop;
}, tn = "unmounted", yt = "exited", Xe = "entering", st = "entered", un = "exiting", pt = /* @__PURE__ */ function(e) {
  wu(t, e);
  function t(r, i) {
    var a;
    a = e.call(this, r, i) || this;
    var o = i, s = o && !o.isMounting ? r.enter : r.appear, u;
    return a.appearStatus = null, r.in ? s ? (u = yt, a.appearStatus = Xe) : u = st : r.unmountOnExit || r.mountOnEnter ? u = tn : u = yt, a.state = {
      status: u
    }, a.nextCallback = null, a;
  }
  t.getDerivedStateFromProps = function(i, a) {
    var o = i.in;
    return o && a.status === tn ? {
      status: yt
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var a = null;
    if (i !== this.props) {
      var o = this.state.status;
      this.props.in ? o !== Xe && o !== st && (a = Xe) : (o === Xe || o === st) && (a = un);
    }
    this.updateStatus(!1, a);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var i = this.props.timeout, a, o, s;
    return a = o = s = i, i != null && typeof i != "number" && (a = i.exit, o = i.enter, s = i.appear !== void 0 ? i.appear : o), {
      exit: a,
      enter: o,
      appear: s
    };
  }, n.updateStatus = function(i, a) {
    if (i === void 0 && (i = !1), a !== null)
      if (this.cancelNextCallback(), a === Xe) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var o = this.props.nodeRef ? this.props.nodeRef.current : Lt.findDOMNode(this);
          o && Bu(o);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === yt && this.setState({
      status: tn
    });
  }, n.performEnter = function(i) {
    var a = this, o = this.props.enter, s = this.context ? this.context.isMounting : i, u = this.props.nodeRef ? [s] : [Lt.findDOMNode(this), s], l = u[0], c = u[1], f = this.getTimeouts(), p = s ? f.appear : f.enter;
    if (!i && !o || ba.disabled) {
      this.safeSetState({
        status: st
      }, function() {
        a.props.onEntered(l);
      });
      return;
    }
    this.props.onEnter(l, c), this.safeSetState({
      status: Xe
    }, function() {
      a.props.onEntering(l, c), a.onTransitionEnd(p, function() {
        a.safeSetState({
          status: st
        }, function() {
          a.props.onEntered(l, c);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, a = this.props.exit, o = this.getTimeouts(), s = this.props.nodeRef ? void 0 : Lt.findDOMNode(this);
    if (!a || ba.disabled) {
      this.safeSetState({
        status: yt
      }, function() {
        i.props.onExited(s);
      });
      return;
    }
    this.props.onExit(s), this.safeSetState({
      status: un
    }, function() {
      i.props.onExiting(s), i.onTransitionEnd(o.exit, function() {
        i.safeSetState({
          status: yt
        }, function() {
          i.props.onExited(s);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(i, a) {
    a = this.setNextCallback(a), this.setState(i, a);
  }, n.setNextCallback = function(i) {
    var a = this, o = !0;
    return this.nextCallback = function(s) {
      o && (o = !1, a.nextCallback = null, i(s));
    }, this.nextCallback.cancel = function() {
      o = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(i, a) {
    this.setNextCallback(a);
    var o = this.props.nodeRef ? this.props.nodeRef.current : Lt.findDOMNode(this), s = i == null && !this.props.addEndListener;
    if (!o || s) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var u = this.props.nodeRef ? [this.nextCallback] : [o, this.nextCallback], l = u[0], c = u[1];
      this.props.addEndListener(l, c);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, n.render = function() {
    var i = this.state.status;
    if (i === tn)
      return null;
    var a = this.props, o = a.children;
    a.in, a.mountOnEnter, a.unmountOnExit, a.appear, a.enter, a.exit, a.timeout, a.addEndListener, a.onEnter, a.onEntering, a.onEntered, a.onExit, a.onExiting, a.onExited, a.nodeRef;
    var s = qo(a, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Ke.createElement(Zo.Provider, {
        value: null
      }, typeof o == "function" ? o(i, s) : Ke.cloneElement(Ke.Children.only(o), s))
    );
  }, t;
}(Ke.Component);
pt.contextType = Zo;
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
    var n = zu;
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
function At() {
}
pt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: At,
  onEntering: At,
  onEntered: At,
  onExit: At,
  onExiting: At,
  onExited: At
};
pt.UNMOUNTED = tn;
pt.EXITED = yt;
pt.ENTERING = Xe;
pt.ENTERED = st;
pt.EXITING = un;
function $u(e) {
  return e.code === "Escape" || e.keyCode === 27;
}
function Uu() {
  const e = F.version.split(".");
  return {
    major: +e[0],
    minor: +e[1],
    patch: +e[2]
  };
}
function Ut(e) {
  if (!e || typeof e == "function")
    return null;
  const {
    major: t
  } = Uu();
  return t >= 19 ? e.props.ref : e.ref;
}
const Wn = !!(typeof window < "u" && window.document && window.document.createElement);
var Mr = !1, Dr = !1;
try {
  var cr = {
    get passive() {
      return Mr = !0;
    },
    get once() {
      return Dr = Mr = !0;
    }
  };
  Wn && (window.addEventListener("test", cr, cr), window.removeEventListener("test", cr, !0));
} catch {
}
function Hu(e, t, n, r) {
  if (r && typeof r != "boolean" && !Dr) {
    var i = r.once, a = r.capture, o = n;
    !Dr && i && (o = n.__once || function s(u) {
      this.removeEventListener(t, s, a), n.call(this, u);
    }, n.__once = o), e.addEventListener(t, o, Mr ? r : a);
  }
  e.addEventListener(t, n, r);
}
function Wu(e, t, n, r) {
  var i = r && typeof r != "boolean" ? r.capture : r;
  e.removeEventListener(t, n, i), n.__once && e.removeEventListener(t, n.__once, i);
}
function Rn(e, t, n, r) {
  return Hu(e, t, n, r), function() {
    Wu(e, t, n, r);
  };
}
function Vu(e, t, n, r) {
  if (r === void 0 && (r = !0), e) {
    var i = document.createEvent("HTMLEvents");
    i.initEvent(t, n, r), e.dispatchEvent(i);
  }
}
function Yu(e) {
  var t = ut(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function qu(e, t, n) {
  n === void 0 && (n = 5);
  var r = !1, i = setTimeout(function() {
    r || Vu(e, "transitionend", !0);
  }, t + n), a = Rn(e, "transitionend", function() {
    r = !0;
  }, {
    once: !0
  });
  return function() {
    clearTimeout(i), a();
  };
}
function Ku(e, t, n, r) {
  n == null && (n = Yu(e) || 0);
  var i = qu(e, n, r), a = Rn(e, "transitionend", t);
  return function() {
    i(), a();
  };
}
function va(e, t) {
  const n = ut(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function yi(e, t) {
  const n = va(e, "transitionDuration"), r = va(e, "transitionDelay"), i = Ku(e, (a) => {
    a.target === e && (i(), t(a));
  }, n + r);
}
function Qt(...e) {
  return e.filter((t) => t != null).reduce((t, n) => {
    if (typeof n != "function")
      throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
    return t === null ? n : function(...i) {
      t.apply(this, i), n.apply(this, i);
    };
  }, null);
}
function es(e) {
  e.offsetHeight;
}
const wa = (e) => !e || typeof e == "function" ? e : (t) => {
  e.current = t;
};
function Gu(e, t) {
  const n = wa(e), r = wa(t);
  return (i) => {
    n && n(i), r && r(i);
  };
}
function Xu(e, t) {
  return He(() => Gu(e, t), [e, t]);
}
function Ju(e) {
  return e && "setState" in e ? Lt.findDOMNode(e) : e ?? null;
}
const xi = /* @__PURE__ */ Ke.forwardRef(({
  onEnter: e,
  onEntering: t,
  onEntered: n,
  onExit: r,
  onExiting: i,
  onExited: a,
  addEndListener: o,
  children: s,
  childRef: u,
  ...l
}, c) => {
  const f = Ce(null), p = Xu(f, u), d = (w) => {
    p(Ju(w));
  }, b = (w) => (z) => {
    w && f.current && w(f.current, z);
  }, x = Ee(b(e), [e]), S = Ee(b(t), [t]), v = Ee(b(n), [n]), O = Ee(b(r), [r]), C = Ee(b(i), [i]), I = Ee(b(a), [a]), k = Ee(b(o), [o]);
  return /* @__PURE__ */ g.jsx(pt, {
    ref: c,
    ...l,
    onEnter: x,
    onEntered: v,
    onEntering: S,
    onExit: O,
    onExited: I,
    onExiting: C,
    addEndListener: k,
    nodeRef: f,
    children: typeof s == "function" ? (w, z) => (
      // TODO: Types for RTG missing innerProps, so need to cast.
      s(w, {
        ...z,
        ref: d
      })
    ) : /* @__PURE__ */ Ke.cloneElement(s, {
      ref: d
    })
  });
}), Qu = {
  height: ["marginTop", "marginBottom"],
  width: ["marginLeft", "marginRight"]
};
function Zu(e, t) {
  const n = `offset${e[0].toUpperCase()}${e.slice(1)}`, r = t[n], i = Qu[e];
  return r + // @ts-ignore
  parseInt(ut(t, i[0]), 10) + // @ts-ignore
  parseInt(ut(t, i[1]), 10);
}
const ec = {
  [yt]: "collapse",
  [un]: "collapsing",
  [Xe]: "collapsing",
  [st]: "collapse show"
}, tc = /* @__PURE__ */ Ke.forwardRef(({
  onEnter: e,
  onEntering: t,
  onEntered: n,
  onExit: r,
  onExiting: i,
  className: a,
  children: o,
  dimension: s = "height",
  in: u = !1,
  timeout: l = 300,
  mountOnEnter: c = !1,
  unmountOnExit: f = !1,
  appear: p = !1,
  getDimensionValue: d = Zu,
  ...b
}, x) => {
  const S = typeof s == "function" ? s() : s, v = He(() => Qt((w) => {
    w.style[S] = "0";
  }, e), [S, e]), O = He(() => Qt((w) => {
    const z = `scroll${S[0].toUpperCase()}${S.slice(1)}`;
    w.style[S] = `${w[z]}px`;
  }, t), [S, t]), C = He(() => Qt((w) => {
    w.style[S] = null;
  }, n), [S, n]), I = He(() => Qt((w) => {
    w.style[S] = `${d(S, w)}px`, es(w);
  }, r), [r, d, S]), k = He(() => Qt((w) => {
    w.style[S] = null;
  }, i), [S, i]);
  return /* @__PURE__ */ g.jsx(xi, {
    ref: x,
    addEndListener: yi,
    ...b,
    "aria-expanded": b.role ? u : null,
    onEnter: v,
    onEntering: O,
    onEntered: C,
    onExit: I,
    onExiting: k,
    childRef: Ut(o),
    in: u,
    timeout: l,
    mountOnEnter: c,
    unmountOnExit: f,
    appear: p,
    children: (w, z) => /* @__PURE__ */ Ke.cloneElement(o, {
      ...z,
      className: J(a, o.props.className, ec[w], S === "width" && "collapse-horizontal")
    })
  });
});
function nc(e) {
  const t = Ce(e);
  return Pe(() => {
    t.current = e;
  }, [e]), t;
}
function Vn(e) {
  const t = nc(e);
  return Ee(function(...n) {
    return t.current && t.current(...n);
  }, [t]);
}
const bi = (e) => /* @__PURE__ */ F.forwardRef((t, n) => /* @__PURE__ */ g.jsx("div", {
  ...t,
  ref: n,
  className: J(t.className, e)
}));
function rc(e) {
  const t = Ce(e);
  return Pe(() => {
    t.current = e;
  }, [e]), t;
}
function lt(e) {
  const t = rc(e);
  return Ee(function(...n) {
    return t.current && t.current(...n);
  }, [t]);
}
function ic() {
  const e = Ce(!0), t = Ce(() => e.current);
  return Pe(() => (e.current = !0, () => {
    e.current = !1;
  }), []), t.current;
}
function ac(e) {
  const t = Ce(null);
  return Pe(() => {
    t.current = e;
  }), t.current;
}
const oc = typeof global < "u" && // @ts-ignore
global.navigator && // @ts-ignore
global.navigator.product === "ReactNative", sc = typeof document < "u", Ea = sc || oc ? Yo : Pe, lc = ["as", "disabled"];
function uc(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
function cc(e) {
  return !e || e.trim() === "#";
}
function vi({
  tagName: e,
  disabled: t,
  href: n,
  target: r,
  rel: i,
  role: a,
  onClick: o,
  tabIndex: s = 0,
  type: u
}) {
  e || (n != null || r != null || i != null ? e = "a" : e = "button");
  const l = {
    tagName: e
  };
  if (e === "button")
    return [{
      type: u || "button",
      disabled: t
    }, l];
  const c = (p) => {
    if ((t || e === "a" && cc(n)) && p.preventDefault(), t) {
      p.stopPropagation();
      return;
    }
    o == null || o(p);
  }, f = (p) => {
    p.key === " " && (p.preventDefault(), c(p));
  };
  return e === "a" && (n || (n = "#"), t && (n = void 0)), [{
    role: a ?? "button",
    // explicitly undefined so that it overrides the props disabled in a spread
    // e.g. <Tag {...props} {...hookProps} />
    disabled: void 0,
    tabIndex: t ? void 0 : s,
    href: n,
    target: e === "a" ? r : void 0,
    "aria-disabled": t || void 0,
    rel: e === "a" ? i : void 0,
    onClick: c,
    onKeyDown: f
  }, l];
}
const ts = /* @__PURE__ */ F.forwardRef((e, t) => {
  let {
    as: n,
    disabled: r
  } = e, i = uc(e, lc);
  const [a, {
    tagName: o
  }] = vi(Object.assign({
    tagName: n,
    disabled: r
  }, i));
  return /* @__PURE__ */ g.jsx(o, Object.assign({}, i, a, {
    ref: t
  }));
});
ts.displayName = "Button";
const fc = ["onKeyDown"];
function dc(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
function pc(e) {
  return !e || e.trim() === "#";
}
const wi = /* @__PURE__ */ F.forwardRef((e, t) => {
  let {
    onKeyDown: n
  } = e, r = dc(e, fc);
  const [i] = vi(Object.assign({
    tagName: "a"
  }, r)), a = lt((o) => {
    i.onKeyDown(o), n == null || n(o);
  });
  return pc(r.href) || r.role === "button" ? /* @__PURE__ */ g.jsx("a", Object.assign({
    ref: t
  }, r, i, {
    onKeyDown: a
  })) : /* @__PURE__ */ g.jsx("a", Object.assign({
    ref: t
  }, r, {
    onKeyDown: n
  }));
});
wi.displayName = "Anchor";
const hc = {
  [Xe]: "show",
  [st]: "show"
}, ns = /* @__PURE__ */ F.forwardRef(({
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
  }, s = Ee((u, l) => {
    es(u), r == null || r(u, l);
  }, [r]);
  return /* @__PURE__ */ g.jsx(xi, {
    ref: a,
    addEndListener: yi,
    ...o,
    onEnter: s,
    childRef: Ut(t),
    children: (u, l) => /* @__PURE__ */ F.cloneElement(t, {
      ...l,
      className: J("fade", e, t.props.className, hc[u], n[u])
    })
  });
});
ns.displayName = "Fade";
const mc = {
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
}, Ei = /* @__PURE__ */ F.forwardRef(({
  className: e,
  variant: t,
  "aria-label": n = "Close",
  ...r
}, i) => /* @__PURE__ */ g.jsx("button", {
  ref: i,
  type: "button",
  className: J("btn-close", t && `btn-close-${t}`, e),
  "aria-label": n,
  ...r
}));
Ei.displayName = "CloseButton";
Ei.propTypes = mc;
const Ht = /* @__PURE__ */ F.forwardRef(({
  as: e,
  bsPrefix: t,
  variant: n = "primary",
  size: r,
  active: i = !1,
  disabled: a = !1,
  className: o,
  ...s
}, u) => {
  const l = le(t, "btn"), [c, {
    tagName: f
  }] = vi({
    tagName: e,
    disabled: a,
    ...s
  }), p = f;
  return /* @__PURE__ */ g.jsx(p, {
    ...c,
    ...s,
    ref: u,
    disabled: a,
    className: J(o, l, i && "active", n && `${l}-${n}`, r && `${l}-${r}`, s.href && a && "disabled")
  });
});
Ht.displayName = "Button";
const ki = /* @__PURE__ */ F.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = "div",
  ...r
}, i) => (t = le(t, "card-body"), /* @__PURE__ */ g.jsx(n, {
  ref: i,
  className: J(e, t),
  ...r
})));
ki.displayName = "CardBody";
const rs = /* @__PURE__ */ F.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = "div",
  ...r
}, i) => (t = le(t, "card-footer"), /* @__PURE__ */ g.jsx(n, {
  ref: i,
  className: J(e, t),
  ...r
})));
rs.displayName = "CardFooter";
const Si = /* @__PURE__ */ F.createContext(null);
Si.displayName = "CardHeaderContext";
const is = /* @__PURE__ */ F.forwardRef(({
  bsPrefix: e,
  className: t,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: n = "div",
  ...r
}, i) => {
  const a = le(e, "card-header"), o = He(() => ({
    cardHeaderBsPrefix: a
  }), [a]);
  return /* @__PURE__ */ g.jsx(Si.Provider, {
    value: o,
    children: /* @__PURE__ */ g.jsx(n, {
      ref: i,
      ...r,
      className: J(t, a)
    })
  });
});
is.displayName = "CardHeader";
const as = /* @__PURE__ */ F.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    bsPrefix: e,
    className: t,
    variant: n,
    as: r = "img",
    ...i
  }, a) => {
    const o = le(e, "card-img");
    return /* @__PURE__ */ g.jsx(r, {
      ref: a,
      className: J(n ? `${o}-${n}` : o, t),
      ...i
    });
  }
);
as.displayName = "CardImg";
const os = /* @__PURE__ */ F.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = "div",
  ...r
}, i) => (t = le(t, "card-img-overlay"), /* @__PURE__ */ g.jsx(n, {
  ref: i,
  className: J(e, t),
  ...r
})));
os.displayName = "CardImgOverlay";
const ss = /* @__PURE__ */ F.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = "a",
  ...r
}, i) => (t = le(t, "card-link"), /* @__PURE__ */ g.jsx(n, {
  ref: i,
  className: J(e, t),
  ...r
})));
ss.displayName = "CardLink";
const gc = bi("h6"), ls = /* @__PURE__ */ F.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = gc,
  ...r
}, i) => (t = le(t, "card-subtitle"), /* @__PURE__ */ g.jsx(n, {
  ref: i,
  className: J(e, t),
  ...r
})));
ls.displayName = "CardSubtitle";
const us = /* @__PURE__ */ F.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = "p",
  ...r
}, i) => (t = le(t, "card-text"), /* @__PURE__ */ g.jsx(n, {
  ref: i,
  className: J(e, t),
  ...r
})));
us.displayName = "CardText";
const yc = bi("h5"), cs = /* @__PURE__ */ F.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = yc,
  ...r
}, i) => (t = le(t, "card-title"), /* @__PURE__ */ g.jsx(n, {
  ref: i,
  className: J(e, t),
  ...r
})));
cs.displayName = "CardTitle";
const fs = /* @__PURE__ */ F.forwardRef(({
  bsPrefix: e,
  className: t,
  bg: n,
  text: r,
  border: i,
  body: a = !1,
  children: o,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: s = "div",
  ...u
}, l) => {
  const c = le(e, "card");
  return /* @__PURE__ */ g.jsx(s, {
    ref: l,
    ...u,
    className: J(t, c, n && `bg-${n}`, r && `text-${r}`, i && `border-${i}`),
    children: a ? /* @__PURE__ */ g.jsx(ki, {
      children: o
    }) : o
  });
});
fs.displayName = "Card";
const Fe = Object.assign(fs, {
  Img: as,
  Title: cs,
  Subtitle: ls,
  Body: ki,
  Link: ss,
  Text: us,
  Header: is,
  Footer: rs,
  ImgOverlay: os
});
function xc(e, t) {
  return F.Children.toArray(e).some((n) => /* @__PURE__ */ F.isValidElement(n) && n.type === t);
}
function bc({
  as: e,
  bsPrefix: t,
  className: n,
  ...r
}) {
  t = le(t, "col");
  const i = Go(), a = Xo(), o = [], s = [];
  return i.forEach((u) => {
    const l = r[u];
    delete r[u];
    let c, f, p;
    typeof l == "object" && l != null ? {
      span: c,
      offset: f,
      order: p
    } = l : c = l;
    const d = u !== a ? `-${u}` : "";
    c && o.push(c === !0 ? `${t}${d}` : `${t}${d}-${c}`), p != null && s.push(`order${d}-${p}`), f != null && s.push(`offset${d}-${f}`);
  }), [{
    ...r,
    className: J(n, ...o, ...s)
  }, {
    as: e,
    bsPrefix: t,
    spans: o
  }];
}
const we = /* @__PURE__ */ F.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  (e, t) => {
    const [{
      className: n,
      ...r
    }, {
      as: i = "div",
      bsPrefix: a,
      spans: o
    }] = bc(e);
    return /* @__PURE__ */ g.jsx(i, {
      ...r,
      ref: t,
      className: J(n, !o.length && a)
    });
  }
);
we.displayName = "Col";
const Ge = /* @__PURE__ */ F.forwardRef(({
  bsPrefix: e,
  fluid: t = !1,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: n = "div",
  className: r,
  ...i
}, a) => {
  const o = le(e, "container"), s = typeof t == "string" ? `-${t}` : "-fluid";
  return /* @__PURE__ */ g.jsx(n, {
    ref: a,
    ...i,
    className: J(r, t ? `${o}${s}` : o)
  });
});
Ge.displayName = "Container";
var vc = Function.prototype.bind.call(Function.prototype.call, [].slice);
function kt(e, t) {
  return vc(e.querySelectorAll(t));
}
function wc() {
  const [, e] = uu((t) => t + 1, 0);
  return e;
}
function ka(e, t) {
  if (e.contains) return e.contains(t);
  if (e.compareDocumentPosition) return e === t || !!(e.compareDocumentPosition(t) & 16);
}
var fr, Sa;
function Ec() {
  if (Sa) return fr;
  Sa = 1;
  var e = process.env.NODE_ENV !== "production", t = function() {
  };
  if (e) {
    var n = function(i, a) {
      var o = arguments.length;
      a = new Array(o > 1 ? o - 1 : 0);
      for (var s = 1; s < o; s++)
        a[s - 1] = arguments[s];
      var u = 0, l = "Warning: " + i.replace(/%s/g, function() {
        return a[u++];
      });
      typeof console < "u" && console.error(l);
      try {
        throw new Error(l);
      } catch {
      }
    };
    t = function(r, i, a) {
      var o = arguments.length;
      a = new Array(o > 2 ? o - 2 : 0);
      for (var s = 2; s < o; s++)
        a[s - 2] = arguments[s];
      if (i === void 0)
        throw new Error(
          "`warning(condition, format, ...args)` requires a warning message argument"
        );
      r || n.apply(null, [i].concat(a));
    };
  }
  return fr = t, fr;
}
var kc = Ec();
const ds = /* @__PURE__ */ pn(kc), _n = /* @__PURE__ */ F.createContext(null), Ci = (e, t = null) => e != null ? String(e) : t || null, Ti = /* @__PURE__ */ F.createContext(null);
Ti.displayName = "NavContext";
const Sc = "data-rr-ui-", Cc = "rrUi";
function Yn(e) {
  return `${Sc}${e}`;
}
function Tc(e) {
  return `${Cc}${e}`;
}
const ps = /* @__PURE__ */ cu(Wn ? window : void 0);
ps.Provider;
function Ni() {
  return ke(ps);
}
const Nc = typeof global < "u" && // @ts-ignore
global.navigator && // @ts-ignore
global.navigator.product === "ReactNative", Oc = typeof document < "u", Ac = Oc || Nc ? Yo : Pe, Wt = /* @__PURE__ */ F.createContext(null);
Wt.displayName = "NavbarContext";
const Ic = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: j.string,
  /** Display feedback as a tooltip. */
  tooltip: j.bool,
  as: j.elementType
}, qn = /* @__PURE__ */ F.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    as: e = "div",
    className: t,
    type: n = "valid",
    tooltip: r = !1,
    ...i
  }, a) => /* @__PURE__ */ g.jsx(e, {
    ...i,
    ref: a,
    className: J(t, `${n}-${r ? "tooltip" : "feedback"}`)
  })
);
qn.displayName = "Feedback";
qn.propTypes = Ic;
const ct = /* @__PURE__ */ F.createContext({}), Oi = /* @__PURE__ */ F.forwardRef(({
  id: e,
  bsPrefix: t,
  className: n,
  type: r = "checkbox",
  isValid: i = !1,
  isInvalid: a = !1,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: o = "input",
  ...s
}, u) => {
  const {
    controlId: l
  } = ke(ct);
  return t = le(t, "form-check-input"), /* @__PURE__ */ g.jsx(o, {
    ...s,
    ref: u,
    type: r,
    id: e || l,
    className: J(n, t, i && "is-valid", a && "is-invalid")
  });
});
Oi.displayName = "FormCheckInput";
const Ln = /* @__PURE__ */ F.forwardRef(({
  bsPrefix: e,
  className: t,
  htmlFor: n,
  ...r
}, i) => {
  const {
    controlId: a
  } = ke(ct);
  return e = le(e, "form-check-label"), /* @__PURE__ */ g.jsx("label", {
    ...r,
    ref: i,
    htmlFor: n || a,
    className: J(t, e)
  });
});
Ln.displayName = "FormCheckLabel";
const hs = /* @__PURE__ */ F.forwardRef(({
  id: e,
  bsPrefix: t,
  bsSwitchPrefix: n,
  inline: r = !1,
  reverse: i = !1,
  disabled: a = !1,
  isValid: o = !1,
  isInvalid: s = !1,
  feedbackTooltip: u = !1,
  feedback: l,
  feedbackType: c,
  className: f,
  style: p,
  title: d = "",
  type: b = "checkbox",
  label: x,
  children: S,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: v = "input",
  ...O
}, C) => {
  t = le(t, "form-check"), n = le(n, "form-switch");
  const {
    controlId: I
  } = ke(ct), k = He(() => ({
    controlId: e || I
  }), [I, e]), w = !S && x != null && x !== !1 || xc(S, Ln), z = /* @__PURE__ */ g.jsx(Oi, {
    ...O,
    type: b === "switch" ? "checkbox" : b,
    ref: C,
    isValid: o,
    isInvalid: s,
    disabled: a,
    as: v
  });
  return /* @__PURE__ */ g.jsx(ct.Provider, {
    value: k,
    children: /* @__PURE__ */ g.jsx("div", {
      style: p,
      className: J(f, w && t, r && `${t}-inline`, i && `${t}-reverse`, b === "switch" && n),
      children: S || /* @__PURE__ */ g.jsxs(g.Fragment, {
        children: [z, w && /* @__PURE__ */ g.jsx(Ln, {
          title: d,
          children: x
        }), l && /* @__PURE__ */ g.jsx(qn, {
          type: c,
          tooltip: u,
          children: l
        })]
      })
    })
  });
});
hs.displayName = "FormCheck";
const Fn = Object.assign(hs, {
  Input: Oi,
  Label: Ln
}), ms = /* @__PURE__ */ F.forwardRef(({
  bsPrefix: e,
  type: t,
  size: n,
  htmlSize: r,
  id: i,
  className: a,
  isValid: o = !1,
  isInvalid: s = !1,
  plaintext: u,
  readOnly: l,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: c = "input",
  ...f
}, p) => {
  const {
    controlId: d
  } = ke(ct);
  return e = le(e, "form-control"), process.env.NODE_ENV !== "production" && ds(d == null || !i, "`controlId` is ignored on `<FormControl>` when `id` is specified."), /* @__PURE__ */ g.jsx(c, {
    ...f,
    type: t,
    size: r,
    ref: p,
    readOnly: l,
    id: i || d,
    className: J(a, u ? `${e}-plaintext` : e, n && `${e}-${n}`, t === "color" && `${e}-color`, o && "is-valid", s && "is-invalid")
  });
});
ms.displayName = "FormControl";
const Pc = Object.assign(ms, {
  Feedback: qn
}), gs = /* @__PURE__ */ F.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = "div",
  ...r
}, i) => (t = le(t, "form-floating"), /* @__PURE__ */ g.jsx(n, {
  ref: i,
  className: J(e, t),
  ...r
})));
gs.displayName = "FormFloating";
const Ai = /* @__PURE__ */ F.forwardRef(({
  controlId: e,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: t = "div",
  ...n
}, r) => {
  const i = He(() => ({
    controlId: e
  }), [e]);
  return /* @__PURE__ */ g.jsx(ct.Provider, {
    value: i,
    children: /* @__PURE__ */ g.jsx(t, {
      ...n,
      ref: r
    })
  });
});
Ai.displayName = "FormGroup";
const ys = /* @__PURE__ */ F.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: e = "label",
  bsPrefix: t,
  column: n = !1,
  visuallyHidden: r = !1,
  className: i,
  htmlFor: a,
  ...o
}, s) => {
  const {
    controlId: u
  } = ke(ct);
  t = le(t, "form-label");
  let l = "col-form-label";
  typeof n == "string" && (l = `${l} ${l}-${n}`);
  const c = J(i, t, r && "visually-hidden", n && l);
  return process.env.NODE_ENV !== "production" && ds(u == null || !a, "`controlId` is ignored on `<FormLabel>` when `htmlFor` is specified."), a = a || u, n ? /* @__PURE__ */ g.jsx(we, {
    ref: s,
    as: "label",
    className: c,
    htmlFor: a,
    ...o
  }) : (
    // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    /* @__PURE__ */ g.jsx(e, {
      ref: s,
      className: c,
      htmlFor: a,
      ...o
    })
  );
});
ys.displayName = "FormLabel";
const xs = /* @__PURE__ */ F.forwardRef(({
  bsPrefix: e,
  className: t,
  id: n,
  ...r
}, i) => {
  const {
    controlId: a
  } = ke(ct);
  return e = le(e, "form-range"), /* @__PURE__ */ g.jsx("input", {
    ...r,
    type: "range",
    ref: i,
    className: J(t, e),
    id: n || a
  });
});
xs.displayName = "FormRange";
const bs = /* @__PURE__ */ F.forwardRef(({
  bsPrefix: e,
  size: t,
  htmlSize: n,
  className: r,
  isValid: i = !1,
  isInvalid: a = !1,
  id: o,
  ...s
}, u) => {
  const {
    controlId: l
  } = ke(ct);
  return e = le(e, "form-select"), /* @__PURE__ */ g.jsx("select", {
    ...s,
    size: n,
    ref: u,
    className: J(r, e, t && `${e}-${t}`, i && "is-valid", a && "is-invalid"),
    id: o || l
  });
});
bs.displayName = "FormSelect";
const vs = /* @__PURE__ */ F.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    bsPrefix: e,
    className: t,
    as: n = "small",
    muted: r,
    ...i
  }, a) => (e = le(e, "form-text"), /* @__PURE__ */ g.jsx(n, {
    ...i,
    ref: a,
    className: J(t, e, r && "text-muted")
  }))
);
vs.displayName = "FormText";
const ws = /* @__PURE__ */ F.forwardRef((e, t) => /* @__PURE__ */ g.jsx(Fn, {
  ...e,
  ref: t,
  type: "switch"
}));
ws.displayName = "Switch";
const jc = Object.assign(ws, {
  Input: Fn.Input,
  Label: Fn.Label
}), Es = /* @__PURE__ */ F.forwardRef(({
  bsPrefix: e,
  className: t,
  children: n,
  controlId: r,
  label: i,
  ...a
}, o) => (e = le(e, "form-floating"), /* @__PURE__ */ g.jsxs(Ai, {
  ref: o,
  className: J(t, e),
  controlId: r,
  ...a,
  children: [n, /* @__PURE__ */ g.jsx("label", {
    htmlFor: r,
    children: i
  })]
})));
Es.displayName = "FloatingLabel";
const Rc = {
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
}, Ii = /* @__PURE__ */ F.forwardRef(({
  className: e,
  validated: t,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: n = "form",
  ...r
}, i) => /* @__PURE__ */ g.jsx(n, {
  ...r,
  ref: i,
  className: J(e, t && "was-validated")
}));
Ii.displayName = "Form";
Ii.propTypes = Rc;
const Ye = Object.assign(Ii, {
  Group: Ai,
  Control: Pc,
  Floating: gs,
  Check: Fn,
  Switch: jc,
  Label: ys,
  Text: vs,
  Range: xs,
  Select: bs,
  FloatingLabel: Es
}), Ca = (e) => !e || typeof e == "function" ? e : (t) => {
  e.current = t;
};
function _c(e, t) {
  const n = Ca(e), r = Ca(t);
  return (i) => {
    n && n(i), r && r(i);
  };
}
function Kn(e, t) {
  return He(() => _c(e, t), [e, t]);
}
const ks = /* @__PURE__ */ F.createContext(null), Lc = ["as", "active", "eventKey"];
function Fc(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
function Ss({
  key: e,
  onClick: t,
  active: n,
  id: r,
  role: i,
  disabled: a
}) {
  const o = ke(_n), s = ke(Ti), u = ke(ks);
  let l = n;
  const c = {
    role: i
  };
  if (s) {
    !i && s.role === "tablist" && (c.role = "tab");
    const f = s.getControllerId(e ?? null), p = s.getControlledId(e ?? null);
    c[Yn("event-key")] = e, c.id = f || r, l = n == null && e != null ? s.activeKey === e : n, (l || !(u != null && u.unmountOnExit) && !(u != null && u.mountOnEnter)) && (c["aria-controls"] = p);
  }
  return c.role === "tab" && (c["aria-selected"] = l, l || (c.tabIndex = -1), a && (c.tabIndex = -1, c["aria-disabled"] = !0)), c.onClick = lt((f) => {
    a || (t == null || t(f), e != null && o && !f.isPropagationStopped() && o(e, f));
  }), [c, {
    isActive: l
  }];
}
const Cs = /* @__PURE__ */ F.forwardRef((e, t) => {
  let {
    as: n = ts,
    active: r,
    eventKey: i
  } = e, a = Fc(e, Lc);
  const [o, s] = Ss(Object.assign({
    key: Ci(i, a.href),
    active: r
  }, a));
  return o[Yn("active")] = s.isActive, /* @__PURE__ */ g.jsx(n, Object.assign({}, a, o, {
    ref: t
  }));
});
Cs.displayName = "NavItem";
const Mc = ["as", "onSelect", "activeKey", "role", "onKeyDown"];
function Dc(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
const Ta = () => {
}, Na = Yn("event-key"), Ts = /* @__PURE__ */ F.forwardRef((e, t) => {
  let {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: n = "div",
    onSelect: r,
    activeKey: i,
    role: a,
    onKeyDown: o
  } = e, s = Dc(e, Mc);
  const u = wc(), l = Ce(!1), c = ke(_n), f = ke(ks);
  let p, d;
  f && (a = a || "tablist", i = f.activeKey, p = f.getControlledId, d = f.getControllerId);
  const b = Ce(null), x = (C) => {
    const I = b.current;
    if (!I) return null;
    const k = kt(I, `[${Na}]:not([aria-disabled=true])`), w = I.querySelector("[aria-selected=true]");
    if (!w || w !== document.activeElement) return null;
    const z = k.indexOf(w);
    if (z === -1) return null;
    let ee = z + C;
    return ee >= k.length && (ee = 0), ee < 0 && (ee = k.length - 1), k[ee];
  }, S = (C, I) => {
    C != null && (r == null || r(C, I), c == null || c(C, I));
  }, v = (C) => {
    if (o == null || o(C), !f)
      return;
    let I;
    switch (C.key) {
      case "ArrowLeft":
      case "ArrowUp":
        I = x(-1);
        break;
      case "ArrowRight":
      case "ArrowDown":
        I = x(1);
        break;
      default:
        return;
    }
    I && (C.preventDefault(), S(I.dataset[Tc("EventKey")] || null, C), l.current = !0, u());
  };
  Pe(() => {
    if (b.current && l.current) {
      const C = b.current.querySelector(`[${Na}][aria-selected=true]`);
      C == null || C.focus();
    }
    l.current = !1;
  });
  const O = Kn(t, b);
  return /* @__PURE__ */ g.jsx(_n.Provider, {
    value: S,
    children: /* @__PURE__ */ g.jsx(Ti.Provider, {
      value: {
        role: a,
        // used by NavLink to determine it's role
        activeKey: Ci(i),
        getControlledId: p || Ta,
        getControllerId: d || Ta
      },
      children: /* @__PURE__ */ g.jsx(n, Object.assign({}, s, {
        onKeyDown: v,
        ref: O,
        role: a
      }))
    })
  });
});
Ts.displayName = "Nav";
const zc = Object.assign(Ts, {
  Item: Cs
});
function dr(e) {
  e === void 0 && (e = mi());
  try {
    var t = e.activeElement;
    return !t || !t.nodeName ? null : t;
  } catch {
    return e.body;
  }
}
function Bc(e) {
  const t = Ce(e);
  return t.current = e, t;
}
function $c(e) {
  const t = Bc(e);
  Pe(() => () => t.current(), []);
}
function Uc(e = document) {
  const t = e.defaultView;
  return Math.abs(t.innerWidth - e.documentElement.clientWidth);
}
const Oa = Yn("modal-open");
class Pi {
  constructor({
    ownerDocument: t,
    handleContainerOverflow: n = !0,
    isRTL: r = !1
  } = {}) {
    this.handleContainerOverflow = n, this.isRTL = r, this.modals = [], this.ownerDocument = t;
  }
  getScrollbarWidth() {
    return Uc(this.ownerDocument);
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
    }, t.scrollBarWidth && (n[r] = `${parseInt(ut(i, r) || "0", 10) + t.scrollBarWidth}px`), i.setAttribute(Oa, ""), ut(i, n);
  }
  reset() {
    [...this.modals].forEach((t) => this.remove(t));
  }
  removeContainerStyle(t) {
    const n = this.getElement();
    n.removeAttribute(Oa), Object.assign(n.style, t.style);
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
const pr = (e, t) => Wn ? e == null ? (t || mi()).body : (typeof e == "function" && (e = e()), e && "current" in e && (e = e.current), e && ("nodeType" in e || e.getBoundingClientRect) ? e : null) : null;
function Hc(e, t) {
  const n = Ni(), [r, i] = rt(() => pr(e, n == null ? void 0 : n.document));
  if (!r) {
    const a = pr(e);
    a && i(a);
  }
  return Pe(() => {
  }, [t, r]), Pe(() => {
    const a = pr(e);
    a !== r && i(a);
  }, [e, r]), r;
}
function Wc({
  children: e,
  in: t,
  onExited: n,
  mountOnEnter: r,
  unmountOnExit: i
}) {
  const a = Ce(null), o = Ce(t), s = lt(n);
  Pe(() => {
    t ? o.current = !0 : s(a.current);
  }, [t, s]);
  const u = Kn(a, Ut(e)), l = /* @__PURE__ */ hi(e, {
    ref: u
  });
  return t ? l : i || !o.current && r ? null : l;
}
const Vc = ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "addEndListener", "children"];
function Yc(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
function qc(e) {
  let {
    onEnter: t,
    onEntering: n,
    onEntered: r,
    onExit: i,
    onExiting: a,
    onExited: o,
    addEndListener: s,
    children: u
  } = e, l = Yc(e, Vc);
  const c = Ce(null), f = Kn(c, Ut(u)), p = (I) => (k) => {
    I && c.current && I(c.current, k);
  }, d = Ee(p(t), [t]), b = Ee(p(n), [n]), x = Ee(p(r), [r]), S = Ee(p(i), [i]), v = Ee(p(a), [a]), O = Ee(p(o), [o]), C = Ee(p(s), [s]);
  return Object.assign({}, l, {
    nodeRef: c
  }, t && {
    onEnter: d
  }, n && {
    onEntering: b
  }, r && {
    onEntered: x
  }, i && {
    onExit: S
  }, a && {
    onExiting: v
  }, o && {
    onExited: O
  }, s && {
    addEndListener: C
  }, {
    children: typeof u == "function" ? (I, k) => (
      // TODO: Types for RTG missing innerProps, so need to cast.
      u(I, Object.assign({}, k, {
        ref: f
      }))
    ) : /* @__PURE__ */ hi(u, {
      ref: f
    })
  });
}
const Kc = ["component"];
function Gc(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
const Xc = /* @__PURE__ */ F.forwardRef((e, t) => {
  let {
    component: n
  } = e, r = Gc(e, Kc);
  const i = qc(r);
  return /* @__PURE__ */ g.jsx(n, Object.assign({
    ref: t
  }, i));
});
function Jc({
  in: e,
  onTransition: t
}) {
  const n = Ce(null), r = Ce(!0), i = lt(t);
  return Ea(() => {
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
  }, [e, i]), Ea(() => (r.current = !1, () => {
    r.current = !0;
  }), []), n;
}
function Qc({
  children: e,
  in: t,
  onExited: n,
  onEntered: r,
  transition: i
}) {
  const [a, o] = rt(!t);
  t && a && o(!1);
  const s = Jc({
    in: !!t,
    onTransition: (l) => {
      const c = () => {
        l.isStale() || (l.in ? r == null || r(l.element, l.initial) : (o(!0), n == null || n(l.element)));
      };
      Promise.resolve(i(l)).then(c, (f) => {
        throw l.in || o(!0), f;
      });
    }
  }), u = Kn(s, Ut(e));
  return a && !t ? null : /* @__PURE__ */ hi(e, {
    ref: u
  });
}
function Aa(e, t, n) {
  return e ? /* @__PURE__ */ g.jsx(Xc, Object.assign({}, n, {
    component: e
  })) : t ? /* @__PURE__ */ g.jsx(Qc, Object.assign({}, n, {
    transition: t
  })) : /* @__PURE__ */ g.jsx(Wc, Object.assign({}, n));
}
const Zc = ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "runTransition", "backdropTransition", "runBackdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"];
function ef(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
let hr;
function tf(e) {
  return hr || (hr = new Pi({
    ownerDocument: e == null ? void 0 : e.document
  })), hr;
}
function nf(e) {
  const t = Ni(), n = e || tf(t), r = Ce({
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
const Ns = /* @__PURE__ */ fu((e, t) => {
  let {
    show: n = !1,
    role: r = "dialog",
    className: i,
    style: a,
    children: o,
    backdrop: s = !0,
    keyboard: u = !0,
    onBackdropClick: l,
    onEscapeKeyDown: c,
    transition: f,
    runTransition: p,
    backdropTransition: d,
    runBackdropTransition: b,
    autoFocus: x = !0,
    enforceFocus: S = !0,
    restoreFocus: v = !0,
    restoreFocusOptions: O,
    renderDialog: C,
    renderBackdrop: I = (de) => /* @__PURE__ */ g.jsx("div", Object.assign({}, de)),
    manager: k,
    container: w,
    onShow: z,
    onHide: ee = () => {
    },
    onExit: re,
    onExited: se,
    onExiting: B,
    onEnter: D,
    onEntering: M,
    onEntered: _
  } = e, V = ef(e, Zc);
  const ie = Ni(), ue = Hc(w), ce = nf(k), xe = ic(), h = ac(n), [P, q] = rt(!n), m = Ce(null);
  du(t, () => ce, [ce]), Wn && !h && n && (m.current = dr(ie == null ? void 0 : ie.document)), n && P && q(!1);
  const L = lt(() => {
    if (ce.add(), Z.current = Rn(document, "keydown", Q), te.current = Rn(
      document,
      "focus",
      // the timeout is necessary b/c this will run before the new modal is mounted
      // and so steals focus from it
      () => setTimeout(H),
      !0
    ), z && z(), x) {
      var de, Et;
      const at = dr((de = (Et = ce.dialog) == null ? void 0 : Et.ownerDocument) != null ? de : ie == null ? void 0 : ie.document);
      ce.dialog && at && !ka(ce.dialog, at) && (m.current = at, ce.dialog.focus());
    }
  }), K = lt(() => {
    if (ce.remove(), Z.current == null || Z.current(), te.current == null || te.current(), v) {
      var de;
      (de = m.current) == null || de.focus == null || de.focus(O), m.current = null;
    }
  });
  Pe(() => {
    !n || !ue || L();
  }, [
    n,
    ue,
    /* should never change: */
    L
  ]), Pe(() => {
    P && K();
  }, [P, K]), $c(() => {
    K();
  });
  const H = lt(() => {
    if (!S || !xe() || !ce.isTopModal())
      return;
    const de = dr(ie == null ? void 0 : ie.document);
    ce.dialog && de && !ka(ce.dialog, de) && ce.dialog.focus();
  }), G = lt((de) => {
    de.target === de.currentTarget && (l == null || l(de), s === !0 && ee());
  }), Q = lt((de) => {
    u && $u(de) && ce.isTopModal() && (c == null || c(de), de.defaultPrevented || ee());
  }), te = Ce(), Z = Ce(), ve = (...de) => {
    q(!0), se == null || se(...de);
  };
  if (!ue)
    return null;
  const R = Object.assign({
    role: r,
    ref: ce.setDialogRef,
    // apparently only works on the dialog role element
    "aria-modal": r === "dialog" ? !0 : void 0
  }, V, {
    style: a,
    className: i,
    tabIndex: -1
  });
  let Te = C ? C(R) : /* @__PURE__ */ g.jsx("div", Object.assign({}, R, {
    children: /* @__PURE__ */ F.cloneElement(o, {
      role: "document"
    })
  }));
  Te = Aa(f, p, {
    unmountOnExit: !0,
    mountOnEnter: !0,
    appear: !0,
    in: !!n,
    onExit: re,
    onExiting: B,
    onExited: ve,
    onEnter: D,
    onEntering: M,
    onEntered: _,
    children: Te
  });
  let _e = null;
  return s && (_e = I({
    ref: ce.setBackdropRef,
    onClick: G
  }), _e = Aa(d, b, {
    in: !!n,
    appear: !0,
    mountOnEnter: !0,
    unmountOnExit: !0,
    children: _e
  })), /* @__PURE__ */ g.jsx(g.Fragment, {
    children: /* @__PURE__ */ Lt.createPortal(/* @__PURE__ */ g.jsxs(g.Fragment, {
      children: [_e, Te]
    }), ue)
  });
});
Ns.displayName = "Modal";
const rf = Object.assign(Ns, {
  Manager: Pi
});
function af(e, t) {
  return e.classList ? e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
function of(e, t) {
  e.classList ? e.classList.add(t) : af(e, t) || (typeof e.className == "string" ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t));
}
function Ia(e, t) {
  return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function sf(e, t) {
  e.classList ? e.classList.remove(t) : typeof e.className == "string" ? e.className = Ia(e.className, t) : e.setAttribute("class", Ia(e.className && e.className.baseVal || "", t));
}
const It = {
  FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  STICKY_CONTENT: ".sticky-top",
  NAVBAR_TOGGLER: ".navbar-toggler"
};
class Os extends Pi {
  adjustAndStore(t, n, r) {
    const i = n.style[t];
    n.dataset[t] = i, ut(n, {
      [t]: `${parseFloat(ut(n, t)) + r}px`
    });
  }
  restore(t, n) {
    const r = n.dataset[t];
    r !== void 0 && (delete n.dataset[t], ut(n, {
      [t]: r
    }));
  }
  setContainerStyle(t) {
    super.setContainerStyle(t);
    const n = this.getElement();
    if (of(n, "modal-open"), !t.scrollBarWidth) return;
    const r = this.isRTL ? "paddingLeft" : "paddingRight", i = this.isRTL ? "marginLeft" : "marginRight";
    kt(n, It.FIXED_CONTENT).forEach((a) => this.adjustAndStore(r, a, t.scrollBarWidth)), kt(n, It.STICKY_CONTENT).forEach((a) => this.adjustAndStore(i, a, -t.scrollBarWidth)), kt(n, It.NAVBAR_TOGGLER).forEach((a) => this.adjustAndStore(i, a, t.scrollBarWidth));
  }
  removeContainerStyle(t) {
    super.removeContainerStyle(t);
    const n = this.getElement();
    sf(n, "modal-open");
    const r = this.isRTL ? "paddingLeft" : "paddingRight", i = this.isRTL ? "marginLeft" : "marginRight";
    kt(n, It.FIXED_CONTENT).forEach((a) => this.restore(r, a)), kt(n, It.STICKY_CONTENT).forEach((a) => this.restore(i, a)), kt(n, It.NAVBAR_TOGGLER).forEach((a) => this.restore(i, a));
  }
}
let mr;
function lf(e) {
  return mr || (mr = new Os(e)), mr;
}
const As = /* @__PURE__ */ F.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onHide() {
  }
}), uf = /* @__PURE__ */ F.forwardRef(({
  closeLabel: e = "Close",
  closeVariant: t,
  closeButton: n = !1,
  onHide: r,
  children: i,
  ...a
}, o) => {
  const s = ke(As), u = Vn(() => {
    s == null || s.onHide(), r == null || r();
  });
  return /* @__PURE__ */ g.jsxs("div", {
    ref: o,
    ...a,
    children: [i, n && /* @__PURE__ */ g.jsx(Ei, {
      "aria-label": e,
      variant: t,
      onClick: u
    })]
  });
}), Is = /* @__PURE__ */ F.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = "div",
  ...r
}, i) => (t = le(t, "nav-item"), /* @__PURE__ */ g.jsx(n, {
  ref: i,
  className: J(e, t),
  ...r
})));
Is.displayName = "NavItem";
const Ps = /* @__PURE__ */ F.forwardRef(({
  bsPrefix: e,
  className: t,
  as: n = wi,
  active: r,
  eventKey: i,
  disabled: a = !1,
  ...o
}, s) => {
  e = le(e, "nav-link");
  const [u, l] = Ss({
    key: Ci(i, o.href),
    active: r,
    disabled: a,
    ...o
  });
  return /* @__PURE__ */ g.jsx(n, {
    ...o,
    ...u,
    ref: s,
    disabled: a,
    className: J(t, e, a && "disabled", l.isActive && "active")
  });
});
Ps.displayName = "NavLink";
const js = /* @__PURE__ */ F.forwardRef((e, t) => {
  const {
    as: n = "div",
    bsPrefix: r,
    variant: i,
    fill: a = !1,
    justify: o = !1,
    navbar: s,
    navbarScroll: u,
    className: l,
    activeKey: c,
    ...f
  } = Ko(e, {
    activeKey: "onSelect"
  }), p = le(r, "nav");
  let d, b, x = !1;
  const S = ke(Wt), v = ke(Si);
  return S ? (d = S.bsPrefix, x = s ?? !0) : v && ({
    cardHeaderBsPrefix: b
  } = v), /* @__PURE__ */ g.jsx(zc, {
    as: n,
    ref: t,
    activeKey: c,
    className: J(l, {
      [p]: !x,
      [`${d}-nav`]: x,
      [`${d}-nav-scroll`]: x && u,
      [`${b}-${i}`]: !!b,
      [`${p}-${i}`]: !!i,
      [`${p}-fill`]: a,
      [`${p}-justified`]: o
    }),
    ...f
  });
});
js.displayName = "Nav";
const Pt = Object.assign(js, {
  Item: Is,
  Link: Ps
}), Rs = /* @__PURE__ */ F.forwardRef(({
  bsPrefix: e,
  className: t,
  as: n,
  ...r
}, i) => {
  e = le(e, "navbar-brand");
  const a = n || (r.href ? "a" : "span");
  return /* @__PURE__ */ g.jsx(a, {
    ...r,
    ref: i,
    className: J(t, e)
  });
});
Rs.displayName = "NavbarBrand";
const _s = /* @__PURE__ */ F.forwardRef(({
  children: e,
  bsPrefix: t,
  ...n
}, r) => {
  t = le(t, "navbar-collapse");
  const i = ke(Wt);
  return /* @__PURE__ */ g.jsx(tc, {
    in: !!(i && i.expanded),
    ...n,
    children: /* @__PURE__ */ g.jsx("div", {
      ref: r,
      className: t,
      children: e
    })
  });
});
_s.displayName = "NavbarCollapse";
const Ls = /* @__PURE__ */ F.forwardRef(({
  bsPrefix: e,
  className: t,
  children: n,
  label: r = "Toggle navigation",
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: i = "button",
  onClick: a,
  ...o
}, s) => {
  e = le(e, "navbar-toggler");
  const {
    onToggle: u,
    expanded: l
  } = ke(Wt) || {}, c = Vn((f) => {
    a && a(f), u && u();
  });
  return i === "button" && (o.type = "button"), /* @__PURE__ */ g.jsx(i, {
    ...o,
    ref: s,
    onClick: c,
    "aria-label": r,
    className: J(t, e, !l && "collapsed"),
    children: n || /* @__PURE__ */ g.jsx("span", {
      className: `${e}-icon`
    })
  });
});
Ls.displayName = "NavbarToggle";
const zr = /* @__PURE__ */ new WeakMap(), Pa = (e, t) => {
  if (!e || !t) return;
  const n = zr.get(t) || /* @__PURE__ */ new Map();
  zr.set(t, n);
  let r = n.get(e);
  return r || (r = t.matchMedia(e), r.refCount = 0, n.set(r.media, r)), r;
};
function cf(e, t = typeof window > "u" ? void 0 : window) {
  const n = Pa(e, t), [r, i] = rt(() => n ? n.matches : !1);
  return Ac(() => {
    let a = Pa(e, t);
    if (!a)
      return i(!1);
    let o = zr.get(t);
    const s = () => {
      i(a.matches);
    };
    return a.refCount++, a.addListener(s), s(), () => {
      a.removeListener(s), a.refCount--, a.refCount <= 0 && (o == null || o.delete(a.media)), a = void 0;
    };
  }, [e]), r;
}
function ff(e) {
  const t = Object.keys(e);
  function n(s, u) {
    return s === u ? u : s ? `${s} and ${u}` : u;
  }
  function r(s) {
    return t[Math.min(t.indexOf(s) + 1, t.length - 1)];
  }
  function i(s) {
    const u = r(s);
    let l = e[u];
    return typeof l == "number" ? l = `${l - 0.2}px` : l = `calc(${l} - 0.2px)`, `(max-width: ${l})`;
  }
  function a(s) {
    let u = e[s];
    return typeof u == "number" && (u = `${u}px`), `(min-width: ${u})`;
  }
  function o(s, u, l) {
    let c;
    typeof s == "object" ? (c = s, l = u, u = !0) : (u = u || !0, c = {
      [s]: u
    });
    let f = He(() => Object.entries(c).reduce((p, [d, b]) => ((b === "up" || b === !0) && (p = n(p, a(d))), (b === "down" || b === !0) && (p = n(p, i(d))), p), ""), [JSON.stringify(c)]);
    return cf(f, l);
  }
  return o;
}
const df = ff({
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
}), Fs = /* @__PURE__ */ F.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = "div",
  ...r
}, i) => (t = le(t, "offcanvas-body"), /* @__PURE__ */ g.jsx(n, {
  ref: i,
  className: J(e, t),
  ...r
})));
Fs.displayName = "OffcanvasBody";
const pf = {
  [Xe]: "show",
  [st]: "show"
}, Ms = /* @__PURE__ */ F.forwardRef(({
  bsPrefix: e,
  className: t,
  children: n,
  in: r = !1,
  mountOnEnter: i = !1,
  unmountOnExit: a = !1,
  appear: o = !1,
  ...s
}, u) => (e = le(e, "offcanvas"), /* @__PURE__ */ g.jsx(xi, {
  ref: u,
  addEndListener: yi,
  in: r,
  mountOnEnter: i,
  unmountOnExit: a,
  appear: o,
  ...s,
  childRef: Ut(n),
  children: (l, c) => /* @__PURE__ */ F.cloneElement(n, {
    ...c,
    className: J(t, n.props.className, (l === Xe || l === un) && `${e}-toggling`, pf[l])
  })
})));
Ms.displayName = "OffcanvasToggling";
const Ds = /* @__PURE__ */ F.forwardRef(({
  bsPrefix: e,
  className: t,
  closeLabel: n = "Close",
  closeButton: r = !1,
  ...i
}, a) => (e = le(e, "offcanvas-header"), /* @__PURE__ */ g.jsx(uf, {
  ref: a,
  ...i,
  className: J(t, e),
  closeLabel: n,
  closeButton: r
})));
Ds.displayName = "OffcanvasHeader";
const hf = bi("h5"), zs = /* @__PURE__ */ F.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = hf,
  ...r
}, i) => (t = le(t, "offcanvas-title"), /* @__PURE__ */ g.jsx(n, {
  ref: i,
  className: J(e, t),
  ...r
})));
zs.displayName = "OffcanvasTitle";
function mf(e) {
  return /* @__PURE__ */ g.jsx(Ms, {
    ...e
  });
}
function gf(e) {
  return /* @__PURE__ */ g.jsx(ns, {
    ...e
  });
}
const Bs = /* @__PURE__ */ F.forwardRef(({
  bsPrefix: e,
  className: t,
  children: n,
  "aria-labelledby": r,
  placement: i = "start",
  responsive: a,
  /* BaseModal props */
  show: o = !1,
  backdrop: s = !0,
  keyboard: u = !0,
  scroll: l = !1,
  onEscapeKeyDown: c,
  onShow: f,
  onHide: p,
  container: d,
  autoFocus: b = !0,
  enforceFocus: x = !0,
  restoreFocus: S = !0,
  restoreFocusOptions: v,
  onEntered: O,
  onExit: C,
  onExiting: I,
  onEnter: k,
  onEntering: w,
  onExited: z,
  backdropClassName: ee,
  manager: re,
  renderStaticNode: se = !1,
  ...B
}, D) => {
  const M = Ce();
  e = le(e, "offcanvas");
  const [_, V] = rt(!1), ie = Vn(p), ue = df(a || "xs", "up");
  Pe(() => {
    V(a ? o && !ue : o);
  }, [o, a, ue]);
  const ce = He(() => ({
    onHide: ie
  }), [ie]);
  function xe() {
    return re || (l ? (M.current || (M.current = new Os({
      handleContainerOverflow: !1
    })), M.current) : lf());
  }
  const h = (L, ...K) => {
    L && (L.style.visibility = "visible"), k == null || k(L, ...K);
  }, P = (L, ...K) => {
    L && (L.style.visibility = ""), z == null || z(...K);
  }, q = Ee((L) => /* @__PURE__ */ g.jsx("div", {
    ...L,
    className: J(`${e}-backdrop`, ee)
  }), [ee, e]), m = (L) => /* @__PURE__ */ g.jsx("div", {
    ...L,
    ...B,
    className: J(t, a ? `${e}-${a}` : e, `${e}-${i}`),
    "aria-labelledby": r,
    children: n
  });
  return /* @__PURE__ */ g.jsxs(g.Fragment, {
    children: [!_ && (a || se) && m({}), /* @__PURE__ */ g.jsx(As.Provider, {
      value: ce,
      children: /* @__PURE__ */ g.jsx(rf, {
        show: _,
        ref: D,
        backdrop: s,
        container: d,
        keyboard: u,
        autoFocus: b,
        enforceFocus: x && !l,
        restoreFocus: S,
        restoreFocusOptions: v,
        onEscapeKeyDown: c,
        onShow: f,
        onHide: ie,
        onEnter: h,
        onEntering: w,
        onEntered: O,
        onExit: C,
        onExiting: I,
        onExited: P,
        manager: xe(),
        transition: mf,
        backdropTransition: gf,
        renderBackdrop: q,
        renderDialog: m
      })
    })]
  });
});
Bs.displayName = "Offcanvas";
const yf = Object.assign(Bs, {
  Body: Fs,
  Header: Ds,
  Title: zs
}), $s = /* @__PURE__ */ F.forwardRef(({
  onHide: e,
  ...t
}, n) => {
  const r = ke(Wt), i = Vn(() => {
    r == null || r.onToggle == null || r.onToggle(), e == null || e();
  });
  return /* @__PURE__ */ g.jsx(yf, {
    ref: n,
    show: !!(r != null && r.expanded),
    ...t,
    renderStaticNode: !0,
    onHide: i
  });
});
$s.displayName = "NavbarOffcanvas";
const Us = /* @__PURE__ */ F.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = "span",
  ...r
}, i) => (t = le(t, "navbar-text"), /* @__PURE__ */ g.jsx(n, {
  ref: i,
  className: J(e, t),
  ...r
})));
Us.displayName = "NavbarText";
const Hs = /* @__PURE__ */ F.forwardRef((e, t) => {
  const {
    bsPrefix: n,
    expand: r = !0,
    variant: i = "light",
    bg: a,
    fixed: o,
    sticky: s,
    className: u,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: l = "nav",
    expanded: c,
    onToggle: f,
    onSelect: p,
    collapseOnSelect: d = !1,
    ...b
  } = Ko(e, {
    expanded: "onToggle"
  }), x = le(n, "navbar"), S = Ee((...C) => {
    p == null || p(...C), d && c && (f == null || f(!1));
  }, [p, d, c, f]);
  b.role === void 0 && l !== "nav" && (b.role = "navigation");
  let v = `${x}-expand`;
  typeof r == "string" && (v = `${v}-${r}`);
  const O = He(() => ({
    onToggle: () => f == null ? void 0 : f(!c),
    bsPrefix: x,
    expanded: !!c,
    expand: r
  }), [x, c, r, f]);
  return /* @__PURE__ */ g.jsx(Wt.Provider, {
    value: O,
    children: /* @__PURE__ */ g.jsx(_n.Provider, {
      value: S,
      children: /* @__PURE__ */ g.jsx(l, {
        ref: t,
        ...b,
        className: J(u, x, r && v, i && `${x}-${i}`, a && `bg-${a}`, s && `sticky-${s}`, o && `fixed-${o}`)
      })
    })
  });
});
Hs.displayName = "Navbar";
const Sn = Object.assign(Hs, {
  Brand: Rs,
  Collapse: _s,
  Offcanvas: $s,
  Text: Us,
  Toggle: Ls
}), ji = /* @__PURE__ */ F.forwardRef(({
  active: e = !1,
  disabled: t = !1,
  className: n,
  style: r,
  activeLabel: i = "(current)",
  children: a,
  linkStyle: o,
  linkClassName: s,
  as: u = wi,
  ...l
}, c) => {
  const f = e || t ? "span" : u;
  return /* @__PURE__ */ g.jsx("li", {
    ref: c,
    style: r,
    className: J(n, "page-item", {
      active: e,
      disabled: t
    }),
    children: /* @__PURE__ */ g.jsxs(f, {
      className: J("page-link", s),
      style: o,
      ...l,
      children: [a, e && i && /* @__PURE__ */ g.jsx("span", {
        className: "visually-hidden",
        children: i
      })]
    })
  });
});
ji.displayName = "PageItem";
function hn(e, t, n = e) {
  const r = /* @__PURE__ */ F.forwardRef(({
    children: i,
    ...a
  }, o) => /* @__PURE__ */ g.jsxs(ji, {
    ...a,
    ref: o,
    children: [/* @__PURE__ */ g.jsx("span", {
      "aria-hidden": "true",
      children: i || t
    }), /* @__PURE__ */ g.jsx("span", {
      className: "visually-hidden",
      children: n
    })]
  }));
  return r.displayName = e, r;
}
const xf = hn("First", "«"), bf = hn("Prev", "‹", "Previous"), vf = hn("Ellipsis", "…", "More"), wf = hn("Next", "›"), Ef = hn("Last", "»"), Ws = /* @__PURE__ */ F.forwardRef(({
  bsPrefix: e,
  className: t,
  size: n,
  ...r
}, i) => {
  const a = le(e, "pagination");
  return /* @__PURE__ */ g.jsx("ul", {
    ref: i,
    ...r,
    className: J(t, a, n && `${a}-${n}`)
  });
});
Ws.displayName = "Pagination";
const jt = Object.assign(Ws, {
  First: xf,
  Prev: bf,
  Ellipsis: vf,
  Item: ji,
  Next: wf,
  Last: Ef
}), Ie = /* @__PURE__ */ F.forwardRef(({
  bsPrefix: e,
  className: t,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: n = "div",
  ...r
}, i) => {
  const a = le(e, "row"), o = Go(), s = Xo(), u = `${a}-cols`, l = [];
  return o.forEach((c) => {
    const f = r[c];
    delete r[c];
    let p;
    f != null && typeof f == "object" ? {
      cols: p
    } = f : p = f;
    const d = c !== s ? `-${c}` : "";
    p != null && l.push(`${u}${d}-${p}`);
  }), /* @__PURE__ */ g.jsx(n, {
    ref: i,
    ...r,
    className: J(t, a, ...l)
  });
});
Ie.displayName = "Row";
const fx = ({ image_link: e }) => /* @__PURE__ */ g.jsx(Ge, { children: /* @__PURE__ */ g.jsx(Ie, { className: "rounded background-color-body mt-3 p-2", children: /* @__PURE__ */ g.jsx(we, { className: "text-center", children: /* @__PURE__ */ g.jsx("img", { src: e, className: "img-fluid rounded mt-2 mb-2", alt: "Article" }) }) }) }), dx = ({ card_para: e, img_src: t, card_url: n, card_title: r }) => /* @__PURE__ */ g.jsxs(Fe, { className: "", children: [
  /* @__PURE__ */ g.jsx(Fe.Img, { className: "card-img-container p-3", variant: "top", src: t }),
  /* @__PURE__ */ g.jsxs(Fe.Body, { children: [
    /* @__PURE__ */ g.jsx("div", { className: "font-color-class text-center card-title", children: /* @__PURE__ */ g.jsx(Fe.Title, { children: r }) }),
    /* @__PURE__ */ g.jsx(Fe.Text, { className: "card-text font-color-class justify-content", children: e }),
    /* @__PURE__ */ g.jsx("div", { className: "text-center", children: /* @__PURE__ */ g.jsx(Ht, { className: "button-custom-color", href: n, children: "Explore" }) })
  ] })
] }), kf = ({ card_para: e, img_src: t, card_url: n, card_title: r }) => /* @__PURE__ */ g.jsxs(Fe, { className: "", children: [
  /* @__PURE__ */ g.jsx(Fe.Img, { className: "card-img-container p-3 ", variant: "top", src: t }),
  /* @__PURE__ */ g.jsxs(Fe.Body, { children: [
    /* @__PURE__ */ g.jsx("div", { className: "font-color-class text-center card-title", children: /* @__PURE__ */ g.jsx(Fe.Title, { children: r }) }),
    /* @__PURE__ */ g.jsx(Fe.Text, { className: "card-text font-color-class justify-content", children: e }),
    /* @__PURE__ */ g.jsx("div", { className: "text-center", children: /* @__PURE__ */ g.jsx(Ht, { className: "button-custom-color", href: n, children: "Explore" }) })
  ] })
] }), px = ({ cardData: e }) => /* @__PURE__ */ g.jsx(Ie, { children: e.map((t, n) => /* @__PURE__ */ g.jsx(we, { xs: 12, sm: 12, md: 4, className: "mt-3", children: /* @__PURE__ */ g.jsx(
  kf,
  {
    card_title: t.card_title,
    card_para: t.card_para,
    img_src: t.img_src,
    card_url: t.card_url
  }
) }, n)) }), hx = ({ children: e }) => /* @__PURE__ */ g.jsx("div", { className: "custom-body", children: /* @__PURE__ */ g.jsx(Ge, { children: /* @__PURE__ */ g.jsx(Ie, { children: /* @__PURE__ */ g.jsx(we, { children: e }) }) }) }), mx = () => {
  const [e, t] = rt(!1), n = (/* @__PURE__ */ new Date()).getFullYear(), r = (i) => {
    i.preventDefault(), i.currentTarget.checkValidity() || i.stopPropagation(), t(!0);
  };
  return /* @__PURE__ */ g.jsx(Ge, { fluid: !0, className: "footer-header-color ", children: /* @__PURE__ */ g.jsxs(Ye, { noValidate: !0, validated: e, onSubmit: r, children: [
    /* @__PURE__ */ g.jsx(Ie, { id: "contact", className: "text-center", children: /* @__PURE__ */ g.jsx(we, { className: "text-center", children: /* @__PURE__ */ g.jsx("h1", { className: "bio-font font-color-class heading-responsive-font p-2 mt-3", children: "Contact Me" }) }) }),
    /* @__PURE__ */ g.jsxs(Ie, { id: "contact", className: "text-center p-2", children: [
      /* @__PURE__ */ g.jsx(we, { xs: 12, sm: 12, md: 4 }),
      /* @__PURE__ */ g.jsx(we, { xs: 12, sm: 12, md: 4, children: /* @__PURE__ */ g.jsxs(Ye.Group, { controlId: "validationName", children: [
        /* @__PURE__ */ g.jsx(
          Ye.Control,
          {
            required: !0,
            type: "text",
            placeholder: "Name",
            className: "me-2 custom-border form-control custom-placeholder"
          }
        ),
        /* @__PURE__ */ g.jsx(Ye.Control.Feedback, { type: "invalid", children: "Please provide your name." })
      ] }) }),
      /* @__PURE__ */ g.jsx(we, { xs: 12, sm: 12, md: 4 })
    ] }),
    /* @__PURE__ */ g.jsxs(Ie, { id: "contact", className: "text-center p-2", children: [
      /* @__PURE__ */ g.jsx(we, { xs: 12, sm: 12, md: 4 }),
      /* @__PURE__ */ g.jsx(we, { xs: 12, sm: 12, md: 4, children: /* @__PURE__ */ g.jsxs(Ye.Group, { controlId: "validationEmail", children: [
        /* @__PURE__ */ g.jsx(
          Ye.Control,
          {
            required: !0,
            type: "email",
            placeholder: "Email",
            className: "me-2 custom-border form-control custom-placeholder"
          }
        ),
        /* @__PURE__ */ g.jsx(Ye.Control.Feedback, { type: "invalid", children: "Please provide a valid email." })
      ] }) }),
      /* @__PURE__ */ g.jsx(we, { xs: 12, sm: 12, md: 4 })
    ] }),
    /* @__PURE__ */ g.jsxs(Ie, { id: "contact", className: "text-center p-2", children: [
      /* @__PURE__ */ g.jsx(we, { xs: 12, sm: 12, md: 4 }),
      /* @__PURE__ */ g.jsx(we, { xs: 12, sm: 12, md: 4, children: /* @__PURE__ */ g.jsxs(Ye.Group, { controlId: "validationMessage", children: [
        /* @__PURE__ */ g.jsx(
          Ye.Control,
          {
            required: !0,
            as: "textarea",
            placeholder: "Message",
            className: "me-2 custom-border form-control custom-placeholder message-inp"
          }
        ),
        /* @__PURE__ */ g.jsx(Ye.Control.Feedback, { type: "invalid", children: "Please enter a message." })
      ] }) }),
      /* @__PURE__ */ g.jsx(we, { xs: 12, sm: 12, md: 4 })
    ] }),
    /* @__PURE__ */ g.jsx(Ie, { id: "contact", className: "text-center p-2", children: /* @__PURE__ */ g.jsx(we, { className: "text-center", children: /* @__PURE__ */ g.jsx(Ht, { type: "submit", className: "button-custom-color", children: "Submit" }) }) }),
    /* @__PURE__ */ g.jsx(Ie, { id: "contact", className: "text-center p-2", children: /* @__PURE__ */ g.jsx(we, { className: "text-center", children: /* @__PURE__ */ g.jsxs("div", { className: "mb-3 mt-3", children: [
      "© ",
      n,
      " Copyright:",
      /* @__PURE__ */ g.jsx("a", { className: "copyright", href: "https://meabhi.me/", children: " meabhi.me" })
    ] }) }) })
  ] }) });
}, gx = ({ title: e }) => /* @__PURE__ */ g.jsx(Ge, { children: /* @__PURE__ */ g.jsx(Ie, { className: "rounded background-color-body mt-3 p-2", children: /* @__PURE__ */ g.jsx(we, { className: "text-center", children: /* @__PURE__ */ g.jsx("h1", { className: "bio-font font-color-class heading-responsive-font m-0", children: e }) }) }) });
function Sf(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
const Cf = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Tf = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Nf = {};
function ja(e, t) {
  return (Nf.jsx ? Tf : Cf).test(e);
}
const Of = /[ \t\n\f\r]/g;
function Af(e) {
  return typeof e == "object" ? e.type === "text" ? Ra(e.value) : !1 : Ra(e);
}
function Ra(e) {
  return e.replace(Of, "") === "";
}
class mn {
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
mn.prototype.normal = {};
mn.prototype.property = {};
mn.prototype.space = void 0;
function Vs(e, t) {
  const n = {}, r = {};
  for (const i of e)
    Object.assign(n, i.property), Object.assign(r, i.normal);
  return new mn(n, r, t);
}
function Br(e) {
  return e.toLowerCase();
}
class ze {
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
ze.prototype.attribute = "";
ze.prototype.booleanish = !1;
ze.prototype.boolean = !1;
ze.prototype.commaOrSpaceSeparated = !1;
ze.prototype.commaSeparated = !1;
ze.prototype.defined = !1;
ze.prototype.mustUseProperty = !1;
ze.prototype.number = !1;
ze.prototype.overloadedBoolean = !1;
ze.prototype.property = "";
ze.prototype.spaceSeparated = !1;
ze.prototype.space = void 0;
let If = 0;
const oe = Nt(), Se = Nt(), Ys = Nt(), A = Nt(), ge = Nt(), Dt = Nt(), Ue = Nt();
function Nt() {
  return 2 ** ++If;
}
const $r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: oe,
  booleanish: Se,
  commaOrSpaceSeparated: Ue,
  commaSeparated: Dt,
  number: A,
  overloadedBoolean: Ys,
  spaceSeparated: ge
}, Symbol.toStringTag, { value: "Module" })), gr = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys($r)
);
class Ri extends ze {
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
    if (super(t, n), _a(this, "space", i), typeof r == "number")
      for (; ++a < gr.length; ) {
        const o = gr[a];
        _a(this, gr[a], (r & $r[o]) === $r[o]);
      }
  }
}
Ri.prototype.defined = !0;
function _a(e, t, n) {
  n && (e[t] = n);
}
function Vt(e) {
  const t = {}, n = {};
  for (const [r, i] of Object.entries(e.properties)) {
    const a = new Ri(
      r,
      e.transform(e.attributes || {}, r),
      i,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(r) && (a.mustUseProperty = !0), t[r] = a, n[Br(r)] = r, n[Br(a.attribute)] = r;
  }
  return new mn(t, n, e.space);
}
const qs = Vt({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: Se,
    ariaAutoComplete: null,
    ariaBusy: Se,
    ariaChecked: Se,
    ariaColCount: A,
    ariaColIndex: A,
    ariaColSpan: A,
    ariaControls: ge,
    ariaCurrent: null,
    ariaDescribedBy: ge,
    ariaDetails: null,
    ariaDisabled: Se,
    ariaDropEffect: ge,
    ariaErrorMessage: null,
    ariaExpanded: Se,
    ariaFlowTo: ge,
    ariaGrabbed: Se,
    ariaHasPopup: null,
    ariaHidden: Se,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: ge,
    ariaLevel: A,
    ariaLive: null,
    ariaModal: Se,
    ariaMultiLine: Se,
    ariaMultiSelectable: Se,
    ariaOrientation: null,
    ariaOwns: ge,
    ariaPlaceholder: null,
    ariaPosInSet: A,
    ariaPressed: Se,
    ariaReadOnly: Se,
    ariaRelevant: null,
    ariaRequired: Se,
    ariaRoleDescription: ge,
    ariaRowCount: A,
    ariaRowIndex: A,
    ariaRowSpan: A,
    ariaSelected: Se,
    ariaSetSize: A,
    ariaSort: null,
    ariaValueMax: A,
    ariaValueMin: A,
    ariaValueNow: A,
    ariaValueText: null,
    role: null
  },
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  }
});
function Ks(e, t) {
  return t in e ? e[t] : t;
}
function Gs(e, t) {
  return Ks(e, t.toLowerCase());
}
const Pf = Vt({
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
    accept: Dt,
    acceptCharset: ge,
    accessKey: ge,
    action: null,
    allow: null,
    allowFullScreen: oe,
    allowPaymentRequest: oe,
    allowUserMedia: oe,
    alt: null,
    as: null,
    async: oe,
    autoCapitalize: null,
    autoComplete: ge,
    autoFocus: oe,
    autoPlay: oe,
    blocking: ge,
    capture: null,
    charSet: null,
    checked: oe,
    cite: null,
    className: ge,
    cols: A,
    colSpan: null,
    content: null,
    contentEditable: Se,
    controls: oe,
    controlsList: ge,
    coords: A | Dt,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: oe,
    defer: oe,
    dir: null,
    dirName: null,
    disabled: oe,
    download: Ys,
    draggable: Se,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: oe,
    formTarget: null,
    headers: ge,
    height: A,
    hidden: oe,
    high: A,
    href: null,
    hrefLang: null,
    htmlFor: ge,
    httpEquiv: ge,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: oe,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: oe,
    itemId: null,
    itemProp: ge,
    itemRef: ge,
    itemScope: oe,
    itemType: ge,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: oe,
    low: A,
    manifest: null,
    max: null,
    maxLength: A,
    media: null,
    method: null,
    min: null,
    minLength: A,
    multiple: oe,
    muted: oe,
    name: null,
    nonce: null,
    noModule: oe,
    noValidate: oe,
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
    open: oe,
    optimum: A,
    pattern: null,
    ping: ge,
    placeholder: null,
    playsInline: oe,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: oe,
    referrerPolicy: null,
    rel: ge,
    required: oe,
    reversed: oe,
    rows: A,
    rowSpan: A,
    sandbox: ge,
    scope: null,
    scoped: oe,
    seamless: oe,
    selected: oe,
    shadowRootClonable: oe,
    shadowRootDelegatesFocus: oe,
    shadowRootMode: null,
    shape: null,
    size: A,
    sizes: null,
    slot: null,
    span: A,
    spellCheck: Se,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: A,
    step: null,
    style: null,
    tabIndex: A,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: oe,
    useMap: null,
    value: Se,
    width: A,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: ge,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: A,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: A,
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
    compact: oe,
    // Lists. Use CSS to reduce space between items instead
    declare: oe,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: A,
    // `<img>` and `<object>`
    leftMargin: A,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: A,
    // `<body>`
    marginWidth: A,
    // `<body>`
    noResize: oe,
    // `<frame>`
    noHref: oe,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: oe,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: oe,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: A,
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
    topMargin: A,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: A,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: oe,
    disableRemotePlayback: oe,
    prefix: null,
    property: null,
    results: A,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: Gs
}), jf = Vt({
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
    about: Ue,
    accentHeight: A,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: A,
    amplitude: A,
    arabicForm: null,
    ascent: A,
    attributeName: null,
    attributeType: null,
    azimuth: A,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: A,
    by: null,
    calcMode: null,
    capHeight: A,
    className: ge,
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
    descent: A,
    diffuseConstant: A,
    direction: null,
    display: null,
    dur: null,
    divisor: A,
    dominantBaseline: null,
    download: oe,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: A,
    enableBackground: null,
    end: null,
    event: null,
    exponent: A,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: A,
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
    g1: Dt,
    g2: Dt,
    glyphName: Dt,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: A,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: A,
    horizOriginX: A,
    horizOriginY: A,
    id: null,
    ideographic: A,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: A,
    k: A,
    k1: A,
    k2: A,
    k3: A,
    k4: A,
    kernelMatrix: Ue,
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
    limitingConeAngle: A,
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
    mediaSize: A,
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
    overlinePosition: A,
    overlineThickness: A,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: A,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: ge,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: A,
    pointsAtY: A,
    pointsAtZ: A,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: Ue,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: Ue,
    rev: Ue,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: Ue,
    requiredFeatures: Ue,
    requiredFonts: Ue,
    requiredFormats: Ue,
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
    specularConstant: A,
    specularExponent: A,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: A,
    strikethroughThickness: A,
    string: null,
    stroke: null,
    strokeDashArray: Ue,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: A,
    strokeOpacity: A,
    strokeWidth: null,
    style: null,
    surfaceScale: A,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: Ue,
    tabIndex: A,
    tableValues: null,
    target: null,
    targetX: A,
    targetY: A,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: Ue,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: A,
    underlineThickness: A,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: A,
    values: null,
    vAlphabetic: A,
    vMathematical: A,
    vectorEffect: null,
    vHanging: A,
    vIdeographic: A,
    version: null,
    vertAdvY: A,
    vertOriginX: A,
    vertOriginY: A,
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
    xHeight: A,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: Ks
}), Xs = Vt({
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
}), Js = Vt({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: Gs
}), Qs = Vt({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  }
}), Rf = {
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
}, _f = /[A-Z]/g, La = /-[a-z]/g, Lf = /^data[-\w.:]+$/i;
function Ff(e, t) {
  const n = Br(t);
  let r = t, i = ze;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && Lf.test(t)) {
    if (t.charAt(4) === "-") {
      const a = t.slice(5).replace(La, Df);
      r = "data" + a.charAt(0).toUpperCase() + a.slice(1);
    } else {
      const a = t.slice(4);
      if (!La.test(a)) {
        let o = a.replace(_f, Mf);
        o.charAt(0) !== "-" && (o = "-" + o), t = "data" + o;
      }
    }
    i = Ri;
  }
  return new i(r, t);
}
function Mf(e) {
  return "-" + e.toLowerCase();
}
function Df(e) {
  return e.charAt(1).toUpperCase();
}
const zf = Vs([qs, Pf, Xs, Js, Qs], "html"), _i = Vs([qs, jf, Xs, Js, Qs], "svg");
function Bf(e) {
  return e.join(" ").trim();
}
var Rt = {}, yr, Fa;
function $f() {
  if (Fa) return yr;
  Fa = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, t = /\n/g, n = /^\s*/, r = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, i = /^:\s*/, a = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, o = /^[;\s]*/, s = /^\s+|\s+$/g, u = `
`, l = "/", c = "*", f = "", p = "comment", d = "declaration";
  yr = function(x, S) {
    if (typeof x != "string")
      throw new TypeError("First argument must be a string");
    if (!x) return [];
    S = S || {};
    var v = 1, O = 1;
    function C(M) {
      var _ = M.match(t);
      _ && (v += _.length);
      var V = M.lastIndexOf(u);
      O = ~V ? M.length - V : O + M.length;
    }
    function I() {
      var M = { line: v, column: O };
      return function(_) {
        return _.position = new k(M), ee(), _;
      };
    }
    function k(M) {
      this.start = M, this.end = { line: v, column: O }, this.source = S.source;
    }
    k.prototype.content = x;
    function w(M) {
      var _ = new Error(
        S.source + ":" + v + ":" + O + ": " + M
      );
      if (_.reason = M, _.filename = S.source, _.line = v, _.column = O, _.source = x, !S.silent) throw _;
    }
    function z(M) {
      var _ = M.exec(x);
      if (_) {
        var V = _[0];
        return C(V), x = x.slice(V.length), _;
      }
    }
    function ee() {
      z(n);
    }
    function re(M) {
      var _;
      for (M = M || []; _ = se(); )
        _ !== !1 && M.push(_);
      return M;
    }
    function se() {
      var M = I();
      if (!(l != x.charAt(0) || c != x.charAt(1))) {
        for (var _ = 2; f != x.charAt(_) && (c != x.charAt(_) || l != x.charAt(_ + 1)); )
          ++_;
        if (_ += 2, f === x.charAt(_ - 1))
          return w("End of comment missing");
        var V = x.slice(2, _ - 2);
        return O += 2, C(V), x = x.slice(_), O += 2, M({
          type: p,
          comment: V
        });
      }
    }
    function B() {
      var M = I(), _ = z(r);
      if (_) {
        if (se(), !z(i)) return w("property missing ':'");
        var V = z(a), ie = M({
          type: d,
          property: b(_[0].replace(e, f)),
          value: V ? b(V[0].replace(e, f)) : f
        });
        return z(o), ie;
      }
    }
    function D() {
      var M = [];
      re(M);
      for (var _; _ = B(); )
        _ !== !1 && (M.push(_), re(M));
      return M;
    }
    return ee(), D();
  };
  function b(x) {
    return x ? x.replace(s, f) : f;
  }
  return yr;
}
var Ma;
function Uf() {
  if (Ma) return Rt;
  Ma = 1;
  var e = Rt && Rt.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(Rt, "__esModule", { value: !0 }), Rt.default = n;
  var t = e($f());
  function n(r, i) {
    var a = null;
    if (!r || typeof r != "string")
      return a;
    var o = (0, t.default)(r), s = typeof i == "function";
    return o.forEach(function(u) {
      if (u.type === "declaration") {
        var l = u.property, c = u.value;
        s ? i(l, c, u) : c && (a = a || {}, a[l] = c);
      }
    }), a;
  }
  return Rt;
}
var Hf = Uf();
const Da = /* @__PURE__ */ pn(Hf), Wf = Da.default || Da, Zs = el("end"), Li = el("start");
function el(e) {
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
function Vf(e) {
  const t = Li(e), n = Zs(e);
  if (t && n)
    return { start: t, end: n };
}
function rn(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? za(e.position) : "start" in e || "end" in e ? za(e) : "line" in e || "column" in e ? Ur(e) : "";
}
function Ur(e) {
  return Ba(e && e.line) + ":" + Ba(e && e.column);
}
function za(e) {
  return Ur(e && e.start) + "-" + Ur(e && e.end);
}
function Ba(e) {
  return e && typeof e == "number" ? e : 1;
}
class Re extends Error {
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
      const u = r.indexOf(":");
      u === -1 ? a.ruleId = r : (a.source = r.slice(0, u), a.ruleId = r.slice(u + 1));
    }
    if (!a.place && a.ancestors && a.ancestors) {
      const u = a.ancestors[a.ancestors.length - 1];
      u && (a.place = u.position);
    }
    const s = a.place && "start" in a.place ? a.place.start : a.place;
    this.ancestors = a.ancestors || void 0, this.cause = a.cause || void 0, this.column = s ? s.column : void 0, this.fatal = void 0, this.file, this.message = i, this.line = s ? s.line : void 0, this.name = rn(a.place) || "1:1", this.place = a.place || void 0, this.reason = this.message, this.ruleId = a.ruleId || void 0, this.source = a.source || void 0, this.stack = o && a.cause && typeof a.cause.stack == "string" ? a.cause.stack : "", this.actual, this.expected, this.note, this.url;
  }
}
Re.prototype.file = "";
Re.prototype.name = "";
Re.prototype.reason = "";
Re.prototype.message = "";
Re.prototype.stack = "";
Re.prototype.column = void 0;
Re.prototype.line = void 0;
Re.prototype.ancestors = void 0;
Re.prototype.cause = void 0;
Re.prototype.fatal = void 0;
Re.prototype.place = void 0;
Re.prototype.ruleId = void 0;
Re.prototype.source = void 0;
const Fi = {}.hasOwnProperty, Yf = /* @__PURE__ */ new Map(), qf = /[A-Z]/g, Kf = /-([a-z])/g, Gf = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), Xf = /* @__PURE__ */ new Set(["td", "th"]), tl = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function Jf(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = ad(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = id(n, t.jsx, t.jsxs);
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
    schema: t.space === "svg" ? _i : zf,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, a = nl(i, e, void 0);
  return a && typeof a != "string" ? a : i.create(
    e,
    i.Fragment,
    { children: a || void 0 },
    void 0
  );
}
function nl(e, t, n) {
  if (t.type === "element")
    return Qf(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return Zf(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return td(e, t, n);
  if (t.type === "mdxjsEsm")
    return ed(e, t);
  if (t.type === "root")
    return nd(e, t, n);
  if (t.type === "text")
    return rd(e, t);
}
function Qf(e, t, n) {
  const r = e.schema;
  let i = r;
  t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = _i, e.schema = i), e.ancestors.push(t);
  const a = il(e, t.tagName, !1), o = od(e, t);
  let s = Di(e, t);
  return Gf.has(t.tagName) && (s = s.filter(function(u) {
    return typeof u == "string" ? !Af(u) : !0;
  })), rl(e, o, a, t), Mi(o, s), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function Zf(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  cn(e, t.position);
}
function ed(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  cn(e, t.position);
}
function td(e, t, n) {
  const r = e.schema;
  let i = r;
  t.name === "svg" && r.space === "html" && (i = _i, e.schema = i), e.ancestors.push(t);
  const a = t.name === null ? e.Fragment : il(e, t.name, !0), o = sd(e, t), s = Di(e, t);
  return rl(e, o, a, t), Mi(o, s), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function nd(e, t, n) {
  const r = {};
  return Mi(r, Di(e, t)), e.create(t, e.Fragment, r, n);
}
function rd(e, t) {
  return t.value;
}
function rl(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function Mi(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function id(e, t, n) {
  return r;
  function r(i, a, o, s) {
    const l = Array.isArray(o.children) ? n : t;
    return s ? l(a, o, s) : l(a, o);
  }
}
function ad(e, t) {
  return n;
  function n(r, i, a, o) {
    const s = Array.isArray(a.children), u = Li(r);
    return t(
      i,
      a,
      o,
      s,
      {
        columnNumber: u ? u.column - 1 : void 0,
        fileName: e,
        lineNumber: u ? u.line : void 0
      },
      void 0
    );
  }
}
function od(e, t) {
  const n = {};
  let r, i;
  for (i in t.properties)
    if (i !== "children" && Fi.call(t.properties, i)) {
      const a = ld(e, i, t.properties[i]);
      if (a) {
        const [o, s] = a;
        e.tableCellAlignToStyle && o === "align" && typeof s == "string" && Xf.has(t.tagName) ? r = s : n[o] = s;
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
function sd(e, t) {
  const n = {};
  for (const r of t.attributes)
    if (r.type === "mdxJsxExpressionAttribute")
      if (r.data && r.data.estree && e.evaluater) {
        const a = r.data.estree.body[0];
        a.type;
        const o = a.expression;
        o.type;
        const s = o.properties[0];
        s.type, Object.assign(
          n,
          e.evaluater.evaluateExpression(s.argument)
        );
      } else
        cn(e, t.position);
    else {
      const i = r.name;
      let a;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const s = r.value.data.estree.body[0];
          s.type, a = e.evaluater.evaluateExpression(s.expression);
        } else
          cn(e, t.position);
      else
        a = r.value === null ? !0 : r.value;
      n[i] = /** @type {Props[keyof Props]} */
      a;
    }
  return n;
}
function Di(e, t) {
  const n = [];
  let r = -1;
  const i = e.passKeys ? /* @__PURE__ */ new Map() : Yf;
  for (; ++r < t.children.length; ) {
    const a = t.children[r];
    let o;
    if (e.passKeys) {
      const u = a.type === "element" ? a.tagName : a.type === "mdxJsxFlowElement" || a.type === "mdxJsxTextElement" ? a.name : void 0;
      if (u) {
        const l = i.get(u) || 0;
        o = u + "-" + l, i.set(u, l + 1);
      }
    }
    const s = nl(e, a, o);
    s !== void 0 && n.push(s);
  }
  return n;
}
function ld(e, t, n) {
  const r = Ff(e.schema, t);
  if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
    if (Array.isArray(n) && (n = r.commaSeparated ? Sf(n) : Bf(n)), r.property === "style") {
      let i = typeof n == "object" ? n : ud(e, String(n));
      return e.stylePropertyNameCase === "css" && (i = cd(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? Rf[r.property] || r.property : r.attribute,
      n
    ];
  }
}
function ud(e, t) {
  const n = {};
  try {
    Wf(t, r);
  } catch (i) {
    if (!e.ignoreInvalidStyle) {
      const a = (
        /** @type {Error} */
        i
      ), o = new Re("Cannot parse `style` attribute", {
        ancestors: e.ancestors,
        cause: a,
        ruleId: "style",
        source: "hast-util-to-jsx-runtime"
      });
      throw o.file = e.filePath || void 0, o.url = tl + "#cannot-parse-style-attribute", o;
    }
  }
  return n;
  function r(i, a) {
    let o = i;
    o.slice(0, 2) !== "--" && (o.slice(0, 4) === "-ms-" && (o = "ms-" + o.slice(4)), o = o.replace(Kf, dd)), n[o] = a;
  }
}
function il(e, t, n) {
  let r;
  if (!n)
    r = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const i = t.split(".");
    let a = -1, o;
    for (; ++a < i.length; ) {
      const s = ja(i[a]) ? { type: "Identifier", name: i[a] } : { type: "Literal", value: i[a] };
      o = o ? {
        type: "MemberExpression",
        object: o,
        property: s,
        computed: !!(a && s.type === "Literal"),
        optional: !1
      } : s;
    }
    r = o;
  } else
    r = ja(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (r.type === "Literal") {
    const i = (
      /** @type {keyof JSX.IntrinsicElements} */
      r.value
    );
    return Fi.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(r);
  cn(e);
}
function cn(e, t) {
  const n = new Re(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw n.file = e.filePath || void 0, n.url = tl + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function cd(e) {
  const t = {};
  let n;
  for (n in e)
    Fi.call(e, n) && (t[fd(n)] = e[n]);
  return t;
}
function fd(e) {
  let t = e.replace(qf, pd);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function dd(e, t) {
  return t.toUpperCase();
}
function pd(e) {
  return "-" + e.toLowerCase();
}
const xr = {
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
}, hd = {};
function md(e, t) {
  const n = hd, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return al(e, r, i);
}
function al(e, t, n) {
  if (gd(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return $a(e.children, t, n);
  }
  return Array.isArray(e) ? $a(e, t, n) : "";
}
function $a(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = al(e[i], t, n);
  return r.join("");
}
function gd(e) {
  return !!(e && typeof e == "object");
}
const Ua = document.createElement("i");
function zi(e) {
  const t = "&" + e + ";";
  Ua.innerHTML = t;
  const n = Ua.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
function it(e, t, n, r) {
  const i = e.length;
  let a = 0, o;
  if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4)
    o = Array.from(r), o.unshift(t, n), e.splice(...o);
  else
    for (n && e.splice(t, n); a < r.length; )
      o = r.slice(a, a + 1e4), o.unshift(t, 0), e.splice(...o), a += 1e4, t += 1e4;
}
function qe(e, t) {
  return e.length > 0 ? (it(e, e.length, 0, t), e) : t;
}
const Ha = {}.hasOwnProperty;
function yd(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    xd(t, e[n]);
  return t;
}
function xd(e, t) {
  let n;
  for (n in t) {
    const i = (Ha.call(e, n) ? e[n] : void 0) || (e[n] = {}), a = t[n];
    let o;
    if (a)
      for (o in a) {
        Ha.call(i, o) || (i[o] = []);
        const s = a[o];
        bd(
          // @ts-expect-error Looks like a list.
          i[o],
          Array.isArray(s) ? s : s ? [s] : []
        );
      }
  }
}
function bd(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  it(e, 0, 0, r);
}
function ol(e, t) {
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
function zt(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const et = wt(/[A-Za-z]/), We = wt(/[\dA-Za-z]/), vd = wt(/[#-'*+\--9=?A-Z^-~]/);
function Hr(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const Wr = wt(/\d/), wd = wt(/[\dA-Fa-f]/), Ed = wt(/[!-/:-@[-`{-~]/);
function X(e) {
  return e !== null && e < -2;
}
function De(e) {
  return e !== null && (e < 0 || e === 32);
}
function pe(e) {
  return e === -2 || e === -1 || e === 32;
}
const kd = wt(new RegExp("\\p{P}|\\p{S}", "u")), Sd = wt(/\s/);
function wt(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function Yt(e) {
  const t = [];
  let n = -1, r = 0, i = 0;
  for (; ++n < e.length; ) {
    const a = e.charCodeAt(n);
    let o = "";
    if (a === 37 && We(e.charCodeAt(n + 1)) && We(e.charCodeAt(n + 2)))
      i = 2;
    else if (a < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) || (o = String.fromCharCode(a));
    else if (a > 55295 && a < 57344) {
      const s = e.charCodeAt(n + 1);
      a < 56320 && s > 56319 && s < 57344 ? (o = String.fromCharCode(a, s), i = 1) : o = "�";
    } else
      o = String.fromCharCode(a);
    o && (t.push(e.slice(r, n), encodeURIComponent(o)), r = n + i + 1, o = ""), i && (n += i, i = 0);
  }
  return t.join("") + e.slice(r);
}
function ye(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let a = 0;
  return o;
  function o(u) {
    return pe(u) ? (e.enter(n), s(u)) : t(u);
  }
  function s(u) {
    return pe(u) && a++ < i ? (e.consume(u), s) : (e.exit(n), t(u));
  }
}
const Cd = {
  tokenize: Td
};
function Td(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, r, i);
  let n;
  return t;
  function r(s) {
    if (s === null) {
      e.consume(s);
      return;
    }
    return e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), ye(e, t, "linePrefix");
  }
  function i(s) {
    return e.enter("paragraph"), a(s);
  }
  function a(s) {
    const u = e.enter("chunkText", {
      contentType: "text",
      previous: n
    });
    return n && (n.next = u), n = u, o(s);
  }
  function o(s) {
    if (s === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(s);
      return;
    }
    return X(s) ? (e.consume(s), e.exit("chunkText"), a) : (e.consume(s), o);
  }
}
const Nd = {
  tokenize: Od
}, Wa = {
  tokenize: Ad
};
function Od(e) {
  const t = this, n = [];
  let r = 0, i, a, o;
  return s;
  function s(C) {
    if (r < n.length) {
      const I = n[r];
      return t.containerState = I[1], e.attempt(I[0].continuation, u, l)(C);
    }
    return l(C);
  }
  function u(C) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, i && O();
      const I = t.events.length;
      let k = I, w;
      for (; k--; )
        if (t.events[k][0] === "exit" && t.events[k][1].type === "chunkFlow") {
          w = t.events[k][1].end;
          break;
        }
      v(r);
      let z = I;
      for (; z < t.events.length; )
        t.events[z][1].end = {
          ...w
        }, z++;
      return it(t.events, k + 1, 0, t.events.slice(I)), t.events.length = z, l(C);
    }
    return s(C);
  }
  function l(C) {
    if (r === n.length) {
      if (!i)
        return p(C);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return b(C);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(Wa, c, f)(C);
  }
  function c(C) {
    return i && O(), v(r), p(C);
  }
  function f(C) {
    return t.parser.lazy[t.now().line] = r !== n.length, o = t.now().offset, b(C);
  }
  function p(C) {
    return t.containerState = {}, e.attempt(Wa, d, b)(C);
  }
  function d(C) {
    return r++, n.push([t.currentConstruct, t.containerState]), p(C);
  }
  function b(C) {
    if (C === null) {
      i && O(), v(0), e.consume(C);
      return;
    }
    return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
      _tokenizer: i,
      contentType: "flow",
      previous: a
    }), x(C);
  }
  function x(C) {
    if (C === null) {
      S(e.exit("chunkFlow"), !0), v(0), e.consume(C);
      return;
    }
    return X(C) ? (e.consume(C), S(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, s) : (e.consume(C), x);
  }
  function S(C, I) {
    const k = t.sliceStream(C);
    if (I && k.push(null), C.previous = a, a && (a.next = C), a = C, i.defineSkip(C.start), i.write(k), t.parser.lazy[C.start.line]) {
      let w = i.events.length;
      for (; w--; )
        if (
          // The token starts before the line ending…
          i.events[w][1].start.offset < o && // …and either is not ended yet…
          (!i.events[w][1].end || // …or ends after it.
          i.events[w][1].end.offset > o)
        )
          return;
      const z = t.events.length;
      let ee = z, re, se;
      for (; ee--; )
        if (t.events[ee][0] === "exit" && t.events[ee][1].type === "chunkFlow") {
          if (re) {
            se = t.events[ee][1].end;
            break;
          }
          re = !0;
        }
      for (v(r), w = z; w < t.events.length; )
        t.events[w][1].end = {
          ...se
        }, w++;
      it(t.events, ee + 1, 0, t.events.slice(z)), t.events.length = w;
    }
  }
  function v(C) {
    let I = n.length;
    for (; I-- > C; ) {
      const k = n[I];
      t.containerState = k[1], k[0].exit.call(t, e);
    }
    n.length = C;
  }
  function O() {
    i.write([null]), a = void 0, i = void 0, t.containerState._closeFlow = void 0;
  }
}
function Ad(e, t, n) {
  return ye(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function Va(e) {
  if (e === null || De(e) || Sd(e))
    return 1;
  if (kd(e))
    return 2;
}
function Bi(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const a = e[i].resolveAll;
    a && !r.includes(a) && (t = a(t, n), r.push(a));
  }
  return t;
}
const Vr = {
  name: "attention",
  resolveAll: Id,
  tokenize: Pd
};
function Id(e, t) {
  let n = -1, r, i, a, o, s, u, l, c;
  for (; ++n < e.length; )
    if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
      for (r = n; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && // If the markers are the same:
        t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3))
            continue;
          u = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
          const f = {
            ...e[r][1].end
          }, p = {
            ...e[n][1].start
          };
          Ya(f, -u), Ya(p, u), o = {
            type: u > 1 ? "strongSequence" : "emphasisSequence",
            start: f,
            end: {
              ...e[r][1].end
            }
          }, s = {
            type: u > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...e[n][1].start
            },
            end: p
          }, a = {
            type: u > 1 ? "strongText" : "emphasisText",
            start: {
              ...e[r][1].end
            },
            end: {
              ...e[n][1].start
            }
          }, i = {
            type: u > 1 ? "strong" : "emphasis",
            start: {
              ...o.start
            },
            end: {
              ...s.end
            }
          }, e[r][1].end = {
            ...o.start
          }, e[n][1].start = {
            ...s.end
          }, l = [], e[r][1].end.offset - e[r][1].start.offset && (l = qe(l, [["enter", e[r][1], t], ["exit", e[r][1], t]])), l = qe(l, [["enter", i, t], ["enter", o, t], ["exit", o, t], ["enter", a, t]]), l = qe(l, Bi(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), l = qe(l, [["exit", a, t], ["enter", s, t], ["exit", s, t], ["exit", i, t]]), e[n][1].end.offset - e[n][1].start.offset ? (c = 2, l = qe(l, [["enter", e[n][1], t], ["exit", e[n][1], t]])) : c = 0, it(e, r - 1, n - r + 3, l), n = r + l.length - c - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function Pd(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = Va(r);
  let a;
  return o;
  function o(u) {
    return a = u, e.enter("attentionSequence"), s(u);
  }
  function s(u) {
    if (u === a)
      return e.consume(u), s;
    const l = e.exit("attentionSequence"), c = Va(u), f = !c || c === 2 && i || n.includes(u), p = !i || i === 2 && c || n.includes(r);
    return l._open = !!(a === 42 ? f : f && (i || !p)), l._close = !!(a === 42 ? p : p && (c || !f)), t(u);
  }
}
function Ya(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const jd = {
  name: "autolink",
  tokenize: Rd
};
function Rd(e, t, n) {
  let r = 0;
  return i;
  function i(d) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(d), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a;
  }
  function a(d) {
    return et(d) ? (e.consume(d), o) : d === 64 ? n(d) : l(d);
  }
  function o(d) {
    return d === 43 || d === 45 || d === 46 || We(d) ? (r = 1, s(d)) : l(d);
  }
  function s(d) {
    return d === 58 ? (e.consume(d), r = 0, u) : (d === 43 || d === 45 || d === 46 || We(d)) && r++ < 32 ? (e.consume(d), s) : (r = 0, l(d));
  }
  function u(d) {
    return d === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(d), e.exit("autolinkMarker"), e.exit("autolink"), t) : d === null || d === 32 || d === 60 || Hr(d) ? n(d) : (e.consume(d), u);
  }
  function l(d) {
    return d === 64 ? (e.consume(d), c) : vd(d) ? (e.consume(d), l) : n(d);
  }
  function c(d) {
    return We(d) ? f(d) : n(d);
  }
  function f(d) {
    return d === 46 ? (e.consume(d), r = 0, c) : d === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(d), e.exit("autolinkMarker"), e.exit("autolink"), t) : p(d);
  }
  function p(d) {
    if ((d === 45 || We(d)) && r++ < 63) {
      const b = d === 45 ? p : f;
      return e.consume(d), b;
    }
    return n(d);
  }
}
const Gn = {
  partial: !0,
  tokenize: _d
};
function _d(e, t, n) {
  return r;
  function r(a) {
    return pe(a) ? ye(e, i, "linePrefix")(a) : i(a);
  }
  function i(a) {
    return a === null || X(a) ? t(a) : n(a);
  }
}
const sl = {
  continuation: {
    tokenize: Fd
  },
  exit: Md,
  name: "blockQuote",
  tokenize: Ld
};
function Ld(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    if (o === 62) {
      const s = r.containerState;
      return s.open || (e.enter("blockQuote", {
        _container: !0
      }), s.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(o), e.exit("blockQuoteMarker"), a;
    }
    return n(o);
  }
  function a(o) {
    return pe(o) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(o), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(o));
  }
}
function Fd(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return pe(o) ? ye(e, a, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(o) : a(o);
  }
  function a(o) {
    return e.attempt(sl, t, n)(o);
  }
}
function Md(e) {
  e.exit("blockQuote");
}
const ll = {
  name: "characterEscape",
  tokenize: Dd
};
function Dd(e, t, n) {
  return r;
  function r(a) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(a), e.exit("escapeMarker"), i;
  }
  function i(a) {
    return Ed(a) ? (e.enter("characterEscapeValue"), e.consume(a), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(a);
  }
}
const ul = {
  name: "characterReference",
  tokenize: zd
};
function zd(e, t, n) {
  const r = this;
  let i = 0, a, o;
  return s;
  function s(f) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), u;
  }
  function u(f) {
    return f === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(f), e.exit("characterReferenceMarkerNumeric"), l) : (e.enter("characterReferenceValue"), a = 31, o = We, c(f));
  }
  function l(f) {
    return f === 88 || f === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(f), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), a = 6, o = wd, c) : (e.enter("characterReferenceValue"), a = 7, o = Wr, c(f));
  }
  function c(f) {
    if (f === 59 && i) {
      const p = e.exit("characterReferenceValue");
      return o === We && !zi(r.sliceSerialize(p)) ? n(f) : (e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return o(f) && i++ < a ? (e.consume(f), c) : n(f);
  }
}
const qa = {
  partial: !0,
  tokenize: $d
}, Ka = {
  concrete: !0,
  name: "codeFenced",
  tokenize: Bd
};
function Bd(e, t, n) {
  const r = this, i = {
    partial: !0,
    tokenize: k
  };
  let a = 0, o = 0, s;
  return u;
  function u(w) {
    return l(w);
  }
  function l(w) {
    const z = r.events[r.events.length - 1];
    return a = z && z[1].type === "linePrefix" ? z[2].sliceSerialize(z[1], !0).length : 0, s = w, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), c(w);
  }
  function c(w) {
    return w === s ? (o++, e.consume(w), c) : o < 3 ? n(w) : (e.exit("codeFencedFenceSequence"), pe(w) ? ye(e, f, "whitespace")(w) : f(w));
  }
  function f(w) {
    return w === null || X(w) ? (e.exit("codeFencedFence"), r.interrupt ? t(w) : e.check(qa, x, I)(w)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), p(w));
  }
  function p(w) {
    return w === null || X(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), f(w)) : pe(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), ye(e, d, "whitespace")(w)) : w === 96 && w === s ? n(w) : (e.consume(w), p);
  }
  function d(w) {
    return w === null || X(w) ? f(w) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), b(w));
  }
  function b(w) {
    return w === null || X(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), f(w)) : w === 96 && w === s ? n(w) : (e.consume(w), b);
  }
  function x(w) {
    return e.attempt(i, I, S)(w);
  }
  function S(w) {
    return e.enter("lineEnding"), e.consume(w), e.exit("lineEnding"), v;
  }
  function v(w) {
    return a > 0 && pe(w) ? ye(e, O, "linePrefix", a + 1)(w) : O(w);
  }
  function O(w) {
    return w === null || X(w) ? e.check(qa, x, I)(w) : (e.enter("codeFlowValue"), C(w));
  }
  function C(w) {
    return w === null || X(w) ? (e.exit("codeFlowValue"), O(w)) : (e.consume(w), C);
  }
  function I(w) {
    return e.exit("codeFenced"), t(w);
  }
  function k(w, z, ee) {
    let re = 0;
    return se;
    function se(V) {
      return w.enter("lineEnding"), w.consume(V), w.exit("lineEnding"), B;
    }
    function B(V) {
      return w.enter("codeFencedFence"), pe(V) ? ye(w, D, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(V) : D(V);
    }
    function D(V) {
      return V === s ? (w.enter("codeFencedFenceSequence"), M(V)) : ee(V);
    }
    function M(V) {
      return V === s ? (re++, w.consume(V), M) : re >= o ? (w.exit("codeFencedFenceSequence"), pe(V) ? ye(w, _, "whitespace")(V) : _(V)) : ee(V);
    }
    function _(V) {
      return V === null || X(V) ? (w.exit("codeFencedFence"), z(V)) : ee(V);
    }
  }
}
function $d(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return o === null ? n(o) : (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), a);
  }
  function a(o) {
    return r.parser.lazy[r.now().line] ? n(o) : t(o);
  }
}
const br = {
  name: "codeIndented",
  tokenize: Hd
}, Ud = {
  partial: !0,
  tokenize: Wd
};
function Hd(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return e.enter("codeIndented"), ye(e, a, "linePrefix", 5)(l);
  }
  function a(l) {
    const c = r.events[r.events.length - 1];
    return c && c[1].type === "linePrefix" && c[2].sliceSerialize(c[1], !0).length >= 4 ? o(l) : n(l);
  }
  function o(l) {
    return l === null ? u(l) : X(l) ? e.attempt(Ud, o, u)(l) : (e.enter("codeFlowValue"), s(l));
  }
  function s(l) {
    return l === null || X(l) ? (e.exit("codeFlowValue"), o(l)) : (e.consume(l), s);
  }
  function u(l) {
    return e.exit("codeIndented"), t(l);
  }
}
function Wd(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return r.parser.lazy[r.now().line] ? n(o) : X(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), i) : ye(e, a, "linePrefix", 5)(o);
  }
  function a(o) {
    const s = r.events[r.events.length - 1];
    return s && s[1].type === "linePrefix" && s[2].sliceSerialize(s[1], !0).length >= 4 ? t(o) : X(o) ? i(o) : n(o);
  }
}
const Vd = {
  name: "codeText",
  previous: qd,
  resolve: Yd,
  tokenize: Kd
};
function Yd(e) {
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
function qd(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Kd(e, t, n) {
  let r = 0, i, a;
  return o;
  function o(f) {
    return e.enter("codeText"), e.enter("codeTextSequence"), s(f);
  }
  function s(f) {
    return f === 96 ? (e.consume(f), r++, s) : (e.exit("codeTextSequence"), u(f));
  }
  function u(f) {
    return f === null ? n(f) : f === 32 ? (e.enter("space"), e.consume(f), e.exit("space"), u) : f === 96 ? (a = e.enter("codeTextSequence"), i = 0, c(f)) : X(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), u) : (e.enter("codeTextData"), l(f));
  }
  function l(f) {
    return f === null || f === 32 || f === 96 || X(f) ? (e.exit("codeTextData"), u(f)) : (e.consume(f), l);
  }
  function c(f) {
    return f === 96 ? (e.consume(f), i++, c) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(f)) : (a.type = "codeTextData", l(f));
  }
}
class Gd {
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
    return r && Zt(this.left, r), a.reverse();
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
    this.setCursor(Number.POSITIVE_INFINITY), Zt(this.left, t);
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
    this.setCursor(0), Zt(this.right, t.reverse());
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
        Zt(this.right, n.reverse());
      } else {
        const n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
        Zt(this.left, n.reverse());
      }
  }
}
function Zt(e, t) {
  let n = 0;
  if (t.length < 1e4)
    e.push(...t);
  else
    for (; n < t.length; )
      e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
function cl(e) {
  const t = {};
  let n = -1, r, i, a, o, s, u, l;
  const c = new Gd(e);
  for (; ++n < c.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = c.get(n), n && r[1].type === "chunkFlow" && c.get(n - 1)[1].type === "listItemPrefix" && (u = r[1]._tokenizer.events, a = 0, a < u.length && u[a][1].type === "lineEndingBlank" && (a += 2), a < u.length && u[a][1].type === "content"))
      for (; ++a < u.length && u[a][1].type !== "content"; )
        u[a][1].type === "chunkText" && (u[a][1]._isInFirstContentOfListItem = !0, a++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, Xd(c, n)), n = t[n], l = !0);
    else if (r[1]._container) {
      for (a = n, i = void 0; a--; )
        if (o = c.get(a), o[1].type === "lineEnding" || o[1].type === "lineEndingBlank")
          o[0] === "enter" && (i && (c.get(i)[1].type = "lineEndingBlank"), o[1].type = "lineEnding", i = a);
        else if (o[1].type !== "linePrefix") break;
      i && (r[1].end = {
        ...c.get(i)[1].start
      }, s = c.slice(i, n), s.unshift(r), c.splice(i, n - i + 1, s));
    }
  }
  return it(e, 0, Number.POSITIVE_INFINITY, c.slice(0)), !l;
}
function Xd(e, t) {
  const n = e.get(t)[1], r = e.get(t)[2];
  let i = t - 1;
  const a = [], o = n._tokenizer || r.parser[n.contentType](n.start), s = o.events, u = [], l = {};
  let c, f, p = -1, d = n, b = 0, x = 0;
  const S = [x];
  for (; d; ) {
    for (; e.get(++i)[1] !== d; )
      ;
    a.push(i), d._tokenizer || (c = r.sliceStream(d), d.next || c.push(null), f && o.defineSkip(d.start), d._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(c), d._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), f = d, d = d.next;
  }
  for (d = n; ++p < s.length; )
    // Find a void token that includes a break.
    s[p][0] === "exit" && s[p - 1][0] === "enter" && s[p][1].type === s[p - 1][1].type && s[p][1].start.line !== s[p][1].end.line && (x = p + 1, S.push(x), d._tokenizer = void 0, d.previous = void 0, d = d.next);
  for (o.events = [], d ? (d._tokenizer = void 0, d.previous = void 0) : S.pop(), p = S.length; p--; ) {
    const v = s.slice(S[p], S[p + 1]), O = a.pop();
    u.push([O, O + v.length - 1]), e.splice(O, 2, v);
  }
  for (u.reverse(), p = -1; ++p < u.length; )
    l[b + u[p][0]] = b + u[p][1], b += u[p][1] - u[p][0] - 1;
  return l;
}
const Jd = {
  resolve: Zd,
  tokenize: ep
}, Qd = {
  partial: !0,
  tokenize: tp
};
function Zd(e) {
  return cl(e), e;
}
function ep(e, t) {
  let n;
  return r;
  function r(s) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), i(s);
  }
  function i(s) {
    return s === null ? a(s) : X(s) ? e.check(Qd, o, a)(s) : (e.consume(s), i);
  }
  function a(s) {
    return e.exit("chunkContent"), e.exit("content"), t(s);
  }
  function o(s) {
    return e.consume(s), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
      contentType: "content",
      previous: n
    }), n = n.next, i;
  }
}
function tp(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), ye(e, a, "linePrefix");
  }
  function a(o) {
    if (o === null || X(o))
      return n(o);
    const s = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && s && s[1].type === "linePrefix" && s[2].sliceSerialize(s[1], !0).length >= 4 ? t(o) : e.interrupt(r.parser.constructs.flow, n, t)(o);
  }
}
function fl(e, t, n, r, i, a, o, s, u) {
  const l = u || Number.POSITIVE_INFINITY;
  let c = 0;
  return f;
  function f(v) {
    return v === 60 ? (e.enter(r), e.enter(i), e.enter(a), e.consume(v), e.exit(a), p) : v === null || v === 32 || v === 41 || Hr(v) ? n(v) : (e.enter(r), e.enter(o), e.enter(s), e.enter("chunkString", {
      contentType: "string"
    }), x(v));
  }
  function p(v) {
    return v === 62 ? (e.enter(a), e.consume(v), e.exit(a), e.exit(i), e.exit(r), t) : (e.enter(s), e.enter("chunkString", {
      contentType: "string"
    }), d(v));
  }
  function d(v) {
    return v === 62 ? (e.exit("chunkString"), e.exit(s), p(v)) : v === null || v === 60 || X(v) ? n(v) : (e.consume(v), v === 92 ? b : d);
  }
  function b(v) {
    return v === 60 || v === 62 || v === 92 ? (e.consume(v), d) : d(v);
  }
  function x(v) {
    return !c && (v === null || v === 41 || De(v)) ? (e.exit("chunkString"), e.exit(s), e.exit(o), e.exit(r), t(v)) : c < l && v === 40 ? (e.consume(v), c++, x) : v === 41 ? (e.consume(v), c--, x) : v === null || v === 32 || v === 40 || Hr(v) ? n(v) : (e.consume(v), v === 92 ? S : x);
  }
  function S(v) {
    return v === 40 || v === 41 || v === 92 ? (e.consume(v), x) : x(v);
  }
}
function dl(e, t, n, r, i, a) {
  const o = this;
  let s = 0, u;
  return l;
  function l(d) {
    return e.enter(r), e.enter(i), e.consume(d), e.exit(i), e.enter(a), c;
  }
  function c(d) {
    return s > 999 || d === null || d === 91 || d === 93 && !u || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    d === 94 && !s && "_hiddenFootnoteSupport" in o.parser.constructs ? n(d) : d === 93 ? (e.exit(a), e.enter(i), e.consume(d), e.exit(i), e.exit(r), t) : X(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), c) : (e.enter("chunkString", {
      contentType: "string"
    }), f(d));
  }
  function f(d) {
    return d === null || d === 91 || d === 93 || X(d) || s++ > 999 ? (e.exit("chunkString"), c(d)) : (e.consume(d), u || (u = !pe(d)), d === 92 ? p : f);
  }
  function p(d) {
    return d === 91 || d === 92 || d === 93 ? (e.consume(d), s++, f) : f(d);
  }
}
function pl(e, t, n, r, i, a) {
  let o;
  return s;
  function s(p) {
    return p === 34 || p === 39 || p === 40 ? (e.enter(r), e.enter(i), e.consume(p), e.exit(i), o = p === 40 ? 41 : p, u) : n(p);
  }
  function u(p) {
    return p === o ? (e.enter(i), e.consume(p), e.exit(i), e.exit(r), t) : (e.enter(a), l(p));
  }
  function l(p) {
    return p === o ? (e.exit(a), u(o)) : p === null ? n(p) : X(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), ye(e, l, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), c(p));
  }
  function c(p) {
    return p === o || p === null || X(p) ? (e.exit("chunkString"), l(p)) : (e.consume(p), p === 92 ? f : c);
  }
  function f(p) {
    return p === o || p === 92 ? (e.consume(p), c) : c(p);
  }
}
function an(e, t) {
  let n;
  return r;
  function r(i) {
    return X(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : pe(i) ? ye(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
  }
}
const np = {
  name: "definition",
  tokenize: ip
}, rp = {
  partial: !0,
  tokenize: ap
};
function ip(e, t, n) {
  const r = this;
  let i;
  return a;
  function a(d) {
    return e.enter("definition"), o(d);
  }
  function o(d) {
    return dl.call(
      r,
      e,
      s,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(d);
  }
  function s(d) {
    return i = zt(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), d === 58 ? (e.enter("definitionMarker"), e.consume(d), e.exit("definitionMarker"), u) : n(d);
  }
  function u(d) {
    return De(d) ? an(e, l)(d) : l(d);
  }
  function l(d) {
    return fl(
      e,
      c,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(d);
  }
  function c(d) {
    return e.attempt(rp, f, f)(d);
  }
  function f(d) {
    return pe(d) ? ye(e, p, "whitespace")(d) : p(d);
  }
  function p(d) {
    return d === null || X(d) ? (e.exit("definition"), r.parser.defined.push(i), t(d)) : n(d);
  }
}
function ap(e, t, n) {
  return r;
  function r(s) {
    return De(s) ? an(e, i)(s) : n(s);
  }
  function i(s) {
    return pl(e, a, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(s);
  }
  function a(s) {
    return pe(s) ? ye(e, o, "whitespace")(s) : o(s);
  }
  function o(s) {
    return s === null || X(s) ? t(s) : n(s);
  }
}
const op = {
  name: "hardBreakEscape",
  tokenize: sp
};
function sp(e, t, n) {
  return r;
  function r(a) {
    return e.enter("hardBreakEscape"), e.consume(a), i;
  }
  function i(a) {
    return X(a) ? (e.exit("hardBreakEscape"), t(a)) : n(a);
  }
}
const lp = {
  name: "headingAtx",
  resolve: up,
  tokenize: cp
};
function up(e, t) {
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
  }, it(e, r, n - r + 1, [["enter", i, t], ["enter", a, t], ["exit", a, t], ["exit", i, t]])), e;
}
function cp(e, t, n) {
  let r = 0;
  return i;
  function i(c) {
    return e.enter("atxHeading"), a(c);
  }
  function a(c) {
    return e.enter("atxHeadingSequence"), o(c);
  }
  function o(c) {
    return c === 35 && r++ < 6 ? (e.consume(c), o) : c === null || De(c) ? (e.exit("atxHeadingSequence"), s(c)) : n(c);
  }
  function s(c) {
    return c === 35 ? (e.enter("atxHeadingSequence"), u(c)) : c === null || X(c) ? (e.exit("atxHeading"), t(c)) : pe(c) ? ye(e, s, "whitespace")(c) : (e.enter("atxHeadingText"), l(c));
  }
  function u(c) {
    return c === 35 ? (e.consume(c), u) : (e.exit("atxHeadingSequence"), s(c));
  }
  function l(c) {
    return c === null || c === 35 || De(c) ? (e.exit("atxHeadingText"), s(c)) : (e.consume(c), l);
  }
}
const fp = [
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
], Ga = ["pre", "script", "style", "textarea"], dp = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: mp,
  tokenize: gp
}, pp = {
  partial: !0,
  tokenize: xp
}, hp = {
  partial: !0,
  tokenize: yp
};
function mp(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function gp(e, t, n) {
  const r = this;
  let i, a, o, s, u;
  return l;
  function l(m) {
    return c(m);
  }
  function c(m) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(m), f;
  }
  function f(m) {
    return m === 33 ? (e.consume(m), p) : m === 47 ? (e.consume(m), a = !0, x) : m === 63 ? (e.consume(m), i = 3, r.interrupt ? t : h) : et(m) ? (e.consume(m), o = String.fromCharCode(m), S) : n(m);
  }
  function p(m) {
    return m === 45 ? (e.consume(m), i = 2, d) : m === 91 ? (e.consume(m), i = 5, s = 0, b) : et(m) ? (e.consume(m), i = 4, r.interrupt ? t : h) : n(m);
  }
  function d(m) {
    return m === 45 ? (e.consume(m), r.interrupt ? t : h) : n(m);
  }
  function b(m) {
    const L = "CDATA[";
    return m === L.charCodeAt(s++) ? (e.consume(m), s === L.length ? r.interrupt ? t : D : b) : n(m);
  }
  function x(m) {
    return et(m) ? (e.consume(m), o = String.fromCharCode(m), S) : n(m);
  }
  function S(m) {
    if (m === null || m === 47 || m === 62 || De(m)) {
      const L = m === 47, K = o.toLowerCase();
      return !L && !a && Ga.includes(K) ? (i = 1, r.interrupt ? t(m) : D(m)) : fp.includes(o.toLowerCase()) ? (i = 6, L ? (e.consume(m), v) : r.interrupt ? t(m) : D(m)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(m) : a ? O(m) : C(m));
    }
    return m === 45 || We(m) ? (e.consume(m), o += String.fromCharCode(m), S) : n(m);
  }
  function v(m) {
    return m === 62 ? (e.consume(m), r.interrupt ? t : D) : n(m);
  }
  function O(m) {
    return pe(m) ? (e.consume(m), O) : se(m);
  }
  function C(m) {
    return m === 47 ? (e.consume(m), se) : m === 58 || m === 95 || et(m) ? (e.consume(m), I) : pe(m) ? (e.consume(m), C) : se(m);
  }
  function I(m) {
    return m === 45 || m === 46 || m === 58 || m === 95 || We(m) ? (e.consume(m), I) : k(m);
  }
  function k(m) {
    return m === 61 ? (e.consume(m), w) : pe(m) ? (e.consume(m), k) : C(m);
  }
  function w(m) {
    return m === null || m === 60 || m === 61 || m === 62 || m === 96 ? n(m) : m === 34 || m === 39 ? (e.consume(m), u = m, z) : pe(m) ? (e.consume(m), w) : ee(m);
  }
  function z(m) {
    return m === u ? (e.consume(m), u = null, re) : m === null || X(m) ? n(m) : (e.consume(m), z);
  }
  function ee(m) {
    return m === null || m === 34 || m === 39 || m === 47 || m === 60 || m === 61 || m === 62 || m === 96 || De(m) ? k(m) : (e.consume(m), ee);
  }
  function re(m) {
    return m === 47 || m === 62 || pe(m) ? C(m) : n(m);
  }
  function se(m) {
    return m === 62 ? (e.consume(m), B) : n(m);
  }
  function B(m) {
    return m === null || X(m) ? D(m) : pe(m) ? (e.consume(m), B) : n(m);
  }
  function D(m) {
    return m === 45 && i === 2 ? (e.consume(m), ie) : m === 60 && i === 1 ? (e.consume(m), ue) : m === 62 && i === 4 ? (e.consume(m), P) : m === 63 && i === 3 ? (e.consume(m), h) : m === 93 && i === 5 ? (e.consume(m), xe) : X(m) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(pp, q, M)(m)) : m === null || X(m) ? (e.exit("htmlFlowData"), M(m)) : (e.consume(m), D);
  }
  function M(m) {
    return e.check(hp, _, q)(m);
  }
  function _(m) {
    return e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), V;
  }
  function V(m) {
    return m === null || X(m) ? M(m) : (e.enter("htmlFlowData"), D(m));
  }
  function ie(m) {
    return m === 45 ? (e.consume(m), h) : D(m);
  }
  function ue(m) {
    return m === 47 ? (e.consume(m), o = "", ce) : D(m);
  }
  function ce(m) {
    if (m === 62) {
      const L = o.toLowerCase();
      return Ga.includes(L) ? (e.consume(m), P) : D(m);
    }
    return et(m) && o.length < 8 ? (e.consume(m), o += String.fromCharCode(m), ce) : D(m);
  }
  function xe(m) {
    return m === 93 ? (e.consume(m), h) : D(m);
  }
  function h(m) {
    return m === 62 ? (e.consume(m), P) : m === 45 && i === 2 ? (e.consume(m), h) : D(m);
  }
  function P(m) {
    return m === null || X(m) ? (e.exit("htmlFlowData"), q(m)) : (e.consume(m), P);
  }
  function q(m) {
    return e.exit("htmlFlow"), t(m);
  }
}
function yp(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return X(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), a) : n(o);
  }
  function a(o) {
    return r.parser.lazy[r.now().line] ? n(o) : t(o);
  }
}
function xp(e, t, n) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(Gn, t, n);
  }
}
const bp = {
  name: "htmlText",
  tokenize: vp
};
function vp(e, t, n) {
  const r = this;
  let i, a, o;
  return s;
  function s(h) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(h), u;
  }
  function u(h) {
    return h === 33 ? (e.consume(h), l) : h === 47 ? (e.consume(h), k) : h === 63 ? (e.consume(h), C) : et(h) ? (e.consume(h), ee) : n(h);
  }
  function l(h) {
    return h === 45 ? (e.consume(h), c) : h === 91 ? (e.consume(h), a = 0, b) : et(h) ? (e.consume(h), O) : n(h);
  }
  function c(h) {
    return h === 45 ? (e.consume(h), d) : n(h);
  }
  function f(h) {
    return h === null ? n(h) : h === 45 ? (e.consume(h), p) : X(h) ? (o = f, ue(h)) : (e.consume(h), f);
  }
  function p(h) {
    return h === 45 ? (e.consume(h), d) : f(h);
  }
  function d(h) {
    return h === 62 ? ie(h) : h === 45 ? p(h) : f(h);
  }
  function b(h) {
    const P = "CDATA[";
    return h === P.charCodeAt(a++) ? (e.consume(h), a === P.length ? x : b) : n(h);
  }
  function x(h) {
    return h === null ? n(h) : h === 93 ? (e.consume(h), S) : X(h) ? (o = x, ue(h)) : (e.consume(h), x);
  }
  function S(h) {
    return h === 93 ? (e.consume(h), v) : x(h);
  }
  function v(h) {
    return h === 62 ? ie(h) : h === 93 ? (e.consume(h), v) : x(h);
  }
  function O(h) {
    return h === null || h === 62 ? ie(h) : X(h) ? (o = O, ue(h)) : (e.consume(h), O);
  }
  function C(h) {
    return h === null ? n(h) : h === 63 ? (e.consume(h), I) : X(h) ? (o = C, ue(h)) : (e.consume(h), C);
  }
  function I(h) {
    return h === 62 ? ie(h) : C(h);
  }
  function k(h) {
    return et(h) ? (e.consume(h), w) : n(h);
  }
  function w(h) {
    return h === 45 || We(h) ? (e.consume(h), w) : z(h);
  }
  function z(h) {
    return X(h) ? (o = z, ue(h)) : pe(h) ? (e.consume(h), z) : ie(h);
  }
  function ee(h) {
    return h === 45 || We(h) ? (e.consume(h), ee) : h === 47 || h === 62 || De(h) ? re(h) : n(h);
  }
  function re(h) {
    return h === 47 ? (e.consume(h), ie) : h === 58 || h === 95 || et(h) ? (e.consume(h), se) : X(h) ? (o = re, ue(h)) : pe(h) ? (e.consume(h), re) : ie(h);
  }
  function se(h) {
    return h === 45 || h === 46 || h === 58 || h === 95 || We(h) ? (e.consume(h), se) : B(h);
  }
  function B(h) {
    return h === 61 ? (e.consume(h), D) : X(h) ? (o = B, ue(h)) : pe(h) ? (e.consume(h), B) : re(h);
  }
  function D(h) {
    return h === null || h === 60 || h === 61 || h === 62 || h === 96 ? n(h) : h === 34 || h === 39 ? (e.consume(h), i = h, M) : X(h) ? (o = D, ue(h)) : pe(h) ? (e.consume(h), D) : (e.consume(h), _);
  }
  function M(h) {
    return h === i ? (e.consume(h), i = void 0, V) : h === null ? n(h) : X(h) ? (o = M, ue(h)) : (e.consume(h), M);
  }
  function _(h) {
    return h === null || h === 34 || h === 39 || h === 60 || h === 61 || h === 96 ? n(h) : h === 47 || h === 62 || De(h) ? re(h) : (e.consume(h), _);
  }
  function V(h) {
    return h === 47 || h === 62 || De(h) ? re(h) : n(h);
  }
  function ie(h) {
    return h === 62 ? (e.consume(h), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(h);
  }
  function ue(h) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), ce;
  }
  function ce(h) {
    return pe(h) ? ye(e, xe, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(h) : xe(h);
  }
  function xe(h) {
    return e.enter("htmlTextData"), o(h);
  }
}
const $i = {
  name: "labelEnd",
  resolveAll: Sp,
  resolveTo: Cp,
  tokenize: Tp
}, wp = {
  tokenize: Np
}, Ep = {
  tokenize: Op
}, kp = {
  tokenize: Ap
};
function Sp(e) {
  let t = -1;
  const n = [];
  for (; ++t < e.length; ) {
    const r = e[t][1];
    if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
      const i = r.type === "labelImage" ? 4 : 2;
      r.type = "data", t += i;
    }
  }
  return e.length !== n.length && it(e, 0, e.length, n), e;
}
function Cp(e, t) {
  let n = e.length, r = 0, i, a, o, s;
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
  const u = {
    type: e[a][1].type === "labelLink" ? "link" : "image",
    start: {
      ...e[a][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  }, l = {
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
  return s = [["enter", u, t], ["enter", l, t]], s = qe(s, e.slice(a + 1, a + r + 3)), s = qe(s, [["enter", c, t]]), s = qe(s, Bi(t.parser.constructs.insideSpan.null, e.slice(a + r + 4, o - 3), t)), s = qe(s, [["exit", c, t], e[o - 2], e[o - 1], ["exit", l, t]]), s = qe(s, e.slice(o + 1)), s = qe(s, [["exit", u, t]]), it(e, a, e.length, s), e;
}
function Tp(e, t, n) {
  const r = this;
  let i = r.events.length, a, o;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      a = r.events[i][1];
      break;
    }
  return s;
  function s(p) {
    return a ? a._inactive ? f(p) : (o = r.parser.defined.includes(zt(r.sliceSerialize({
      start: a.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(p), e.exit("labelMarker"), e.exit("labelEnd"), u) : n(p);
  }
  function u(p) {
    return p === 40 ? e.attempt(wp, c, o ? c : f)(p) : p === 91 ? e.attempt(Ep, c, o ? l : f)(p) : o ? c(p) : f(p);
  }
  function l(p) {
    return e.attempt(kp, c, f)(p);
  }
  function c(p) {
    return t(p);
  }
  function f(p) {
    return a._balanced = !0, n(p);
  }
}
function Np(e, t, n) {
  return r;
  function r(f) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), i;
  }
  function i(f) {
    return De(f) ? an(e, a)(f) : a(f);
  }
  function a(f) {
    return f === 41 ? c(f) : fl(e, o, s, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(f);
  }
  function o(f) {
    return De(f) ? an(e, u)(f) : c(f);
  }
  function s(f) {
    return n(f);
  }
  function u(f) {
    return f === 34 || f === 39 || f === 40 ? pl(e, l, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(f) : c(f);
  }
  function l(f) {
    return De(f) ? an(e, c)(f) : c(f);
  }
  function c(f) {
    return f === 41 ? (e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), e.exit("resource"), t) : n(f);
  }
}
function Op(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return dl.call(r, e, a, o, "reference", "referenceMarker", "referenceString")(s);
  }
  function a(s) {
    return r.parser.defined.includes(zt(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(s) : n(s);
  }
  function o(s) {
    return n(s);
  }
}
function Ap(e, t, n) {
  return r;
  function r(a) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(a), e.exit("referenceMarker"), i;
  }
  function i(a) {
    return a === 93 ? (e.enter("referenceMarker"), e.consume(a), e.exit("referenceMarker"), e.exit("reference"), t) : n(a);
  }
}
const Ip = {
  name: "labelStartImage",
  resolveAll: $i.resolveAll,
  tokenize: Pp
};
function Pp(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(s), e.exit("labelImageMarker"), a;
  }
  function a(s) {
    return s === 91 ? (e.enter("labelMarker"), e.consume(s), e.exit("labelMarker"), e.exit("labelImage"), o) : n(s);
  }
  function o(s) {
    return s === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(s) : t(s);
  }
}
const jp = {
  name: "labelStartLink",
  resolveAll: $i.resolveAll,
  tokenize: Rp
};
function Rp(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(o), e.exit("labelMarker"), e.exit("labelLink"), a;
  }
  function a(o) {
    return o === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(o) : t(o);
  }
}
const vr = {
  name: "lineEnding",
  tokenize: _p
};
function _p(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), ye(e, t, "linePrefix");
  }
}
const In = {
  name: "thematicBreak",
  tokenize: Lp
};
function Lp(e, t, n) {
  let r = 0, i;
  return a;
  function a(l) {
    return e.enter("thematicBreak"), o(l);
  }
  function o(l) {
    return i = l, s(l);
  }
  function s(l) {
    return l === i ? (e.enter("thematicBreakSequence"), u(l)) : r >= 3 && (l === null || X(l)) ? (e.exit("thematicBreak"), t(l)) : n(l);
  }
  function u(l) {
    return l === i ? (e.consume(l), r++, u) : (e.exit("thematicBreakSequence"), pe(l) ? ye(e, s, "whitespace")(l) : s(l));
  }
}
const Me = {
  continuation: {
    tokenize: zp
  },
  exit: $p,
  name: "list",
  tokenize: Dp
}, Fp = {
  partial: !0,
  tokenize: Up
}, Mp = {
  partial: !0,
  tokenize: Bp
};
function Dp(e, t, n) {
  const r = this, i = r.events[r.events.length - 1];
  let a = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
  return s;
  function s(d) {
    const b = r.containerState.type || (d === 42 || d === 43 || d === 45 ? "listUnordered" : "listOrdered");
    if (b === "listUnordered" ? !r.containerState.marker || d === r.containerState.marker : Wr(d)) {
      if (r.containerState.type || (r.containerState.type = b, e.enter(b, {
        _container: !0
      })), b === "listUnordered")
        return e.enter("listItemPrefix"), d === 42 || d === 45 ? e.check(In, n, l)(d) : l(d);
      if (!r.interrupt || d === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), u(d);
    }
    return n(d);
  }
  function u(d) {
    return Wr(d) && ++o < 10 ? (e.consume(d), u) : (!r.interrupt || o < 2) && (r.containerState.marker ? d === r.containerState.marker : d === 41 || d === 46) ? (e.exit("listItemValue"), l(d)) : n(d);
  }
  function l(d) {
    return e.enter("listItemMarker"), e.consume(d), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || d, e.check(
      Gn,
      // Can’t be empty when interrupting.
      r.interrupt ? n : c,
      e.attempt(Fp, p, f)
    );
  }
  function c(d) {
    return r.containerState.initialBlankLine = !0, a++, p(d);
  }
  function f(d) {
    return pe(d) ? (e.enter("listItemPrefixWhitespace"), e.consume(d), e.exit("listItemPrefixWhitespace"), p) : n(d);
  }
  function p(d) {
    return r.containerState.size = a + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(d);
  }
}
function zp(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(Gn, i, a);
  function i(s) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, ye(e, t, "listItemIndent", r.containerState.size + 1)(s);
  }
  function a(s) {
    return r.containerState.furtherBlankLines || !pe(s) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(s)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(Mp, t, o)(s));
  }
  function o(s) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, ye(e, e.attempt(Me, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(s);
  }
}
function Bp(e, t, n) {
  const r = this;
  return ye(e, i, "listItemIndent", r.containerState.size + 1);
  function i(a) {
    const o = r.events[r.events.length - 1];
    return o && o[1].type === "listItemIndent" && o[2].sliceSerialize(o[1], !0).length === r.containerState.size ? t(a) : n(a);
  }
}
function $p(e) {
  e.exit(this.containerState.type);
}
function Up(e, t, n) {
  const r = this;
  return ye(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(a) {
    const o = r.events[r.events.length - 1];
    return !pe(a) && o && o[1].type === "listItemPrefixWhitespace" ? t(a) : n(a);
  }
}
const Xa = {
  name: "setextUnderline",
  resolveTo: Hp,
  tokenize: Wp
};
function Hp(e, t) {
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
function Wp(e, t, n) {
  const r = this;
  let i;
  return a;
  function a(l) {
    let c = r.events.length, f;
    for (; c--; )
      if (r.events[c][1].type !== "lineEnding" && r.events[c][1].type !== "linePrefix" && r.events[c][1].type !== "content") {
        f = r.events[c][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || f) ? (e.enter("setextHeadingLine"), i = l, o(l)) : n(l);
  }
  function o(l) {
    return e.enter("setextHeadingLineSequence"), s(l);
  }
  function s(l) {
    return l === i ? (e.consume(l), s) : (e.exit("setextHeadingLineSequence"), pe(l) ? ye(e, u, "lineSuffix")(l) : u(l));
  }
  function u(l) {
    return l === null || X(l) ? (e.exit("setextHeadingLine"), t(l)) : n(l);
  }
}
const Vp = {
  tokenize: Yp
};
function Yp(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    Gn,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, i, ye(e, e.attempt(this.parser.constructs.flow, i, e.attempt(Jd, i)), "linePrefix"))
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
const qp = {
  resolveAll: ml()
}, Kp = hl("string"), Gp = hl("text");
function hl(e) {
  return {
    resolveAll: ml(e === "text" ? Xp : void 0),
    tokenize: t
  };
  function t(n) {
    const r = this, i = this.parser.constructs[e], a = n.attempt(i, o, s);
    return o;
    function o(c) {
      return l(c) ? a(c) : s(c);
    }
    function s(c) {
      if (c === null) {
        n.consume(c);
        return;
      }
      return n.enter("data"), n.consume(c), u;
    }
    function u(c) {
      return l(c) ? (n.exit("data"), a(c)) : (n.consume(c), u);
    }
    function l(c) {
      if (c === null)
        return !0;
      const f = i[c];
      let p = -1;
      if (f)
        for (; ++p < f.length; ) {
          const d = f[p];
          if (!d.previous || d.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function ml(e) {
  return t;
  function t(n, r) {
    let i = -1, a;
    for (; ++i <= n.length; )
      a === void 0 ? n[i] && n[i][1].type === "data" && (a = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== a + 2 && (n[a][1].end = n[i - 1][1].end, n.splice(a + 2, i - a - 2), i = a + 2), a = void 0);
    return e ? e(n, r) : n;
  }
}
function Xp(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
      const r = e[n - 1][1], i = t.sliceStream(r);
      let a = i.length, o = -1, s = 0, u;
      for (; a--; ) {
        const l = i[a];
        if (typeof l == "string") {
          for (o = l.length; l.charCodeAt(o - 1) === 32; )
            s++, o--;
          if (o) break;
          o = -1;
        } else if (l === -2)
          u = !0, s++;
        else if (l !== -1) {
          a++;
          break;
        }
      }
      if (s) {
        const l = {
          type: n === e.length || u || s < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: a ? o : r.start._bufferIndex + o,
            _index: r.start._index + a,
            line: r.end.line,
            column: r.end.column - s,
            offset: r.end.offset - s
          },
          end: {
            ...r.end
          }
        };
        r.end = {
          ...l.start
        }, r.start.offset === r.end.offset ? Object.assign(r, l) : (e.splice(n, 0, ["enter", l, t], ["exit", l, t]), n += 2);
      }
      n++;
    }
  return e;
}
const Jp = {
  42: Me,
  43: Me,
  45: Me,
  48: Me,
  49: Me,
  50: Me,
  51: Me,
  52: Me,
  53: Me,
  54: Me,
  55: Me,
  56: Me,
  57: Me,
  62: sl
}, Qp = {
  91: np
}, Zp = {
  [-2]: br,
  [-1]: br,
  32: br
}, eh = {
  35: lp,
  42: In,
  45: [Xa, In],
  60: dp,
  61: Xa,
  95: In,
  96: Ka,
  126: Ka
}, th = {
  38: ul,
  92: ll
}, nh = {
  [-5]: vr,
  [-4]: vr,
  [-3]: vr,
  33: Ip,
  38: ul,
  42: Vr,
  60: [jd, bp],
  91: jp,
  92: [op, ll],
  93: $i,
  95: Vr,
  96: Vd
}, rh = {
  null: [Vr, qp]
}, ih = {
  null: [42, 95]
}, ah = {
  null: []
}, oh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: ih,
  contentInitial: Qp,
  disable: ah,
  document: Jp,
  flow: eh,
  flowInitial: Zp,
  insideSpan: rh,
  string: th,
  text: nh
}, Symbol.toStringTag, { value: "Module" }));
function sh(e, t, n) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: n && n.line || 1,
    column: n && n.column || 1,
    offset: n && n.offset || 0
  };
  const i = {}, a = [];
  let o = [], s = [];
  const u = {
    attempt: z(k),
    check: z(w),
    consume: O,
    enter: C,
    exit: I,
    interrupt: z(w, {
      interrupt: !0
    })
  }, l = {
    code: null,
    containerState: {},
    defineSkip: x,
    events: [],
    now: b,
    parser: e,
    previous: null,
    sliceSerialize: p,
    sliceStream: d,
    write: f
  };
  let c = t.tokenize.call(l, u);
  return t.resolveAll && a.push(t), l;
  function f(B) {
    return o = qe(o, B), S(), o[o.length - 1] !== null ? [] : (ee(t, 0), l.events = Bi(a, l.events, l), l.events);
  }
  function p(B, D) {
    return uh(d(B), D);
  }
  function d(B) {
    return lh(o, B);
  }
  function b() {
    const {
      _bufferIndex: B,
      _index: D,
      line: M,
      column: _,
      offset: V
    } = r;
    return {
      _bufferIndex: B,
      _index: D,
      line: M,
      column: _,
      offset: V
    };
  }
  function x(B) {
    i[B.line] = B.column, se();
  }
  function S() {
    let B;
    for (; r._index < o.length; ) {
      const D = o[r._index];
      if (typeof D == "string")
        for (B = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === B && r._bufferIndex < D.length; )
          v(D.charCodeAt(r._bufferIndex));
      else
        v(D);
    }
  }
  function v(B) {
    c = c(B);
  }
  function O(B) {
    X(B) ? (r.line++, r.column = 1, r.offset += B === -3 ? 2 : 1, se()) : B !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    o[r._index].length && (r._bufferIndex = -1, r._index++)), l.previous = B;
  }
  function C(B, D) {
    const M = D || {};
    return M.type = B, M.start = b(), l.events.push(["enter", M, l]), s.push(M), M;
  }
  function I(B) {
    const D = s.pop();
    return D.end = b(), l.events.push(["exit", D, l]), D;
  }
  function k(B, D) {
    ee(B, D.from);
  }
  function w(B, D) {
    D.restore();
  }
  function z(B, D) {
    return M;
    function M(_, V, ie) {
      let ue, ce, xe, h;
      return Array.isArray(_) ? (
        /* c8 ignore next 1 */
        q(_)
      ) : "tokenize" in _ ? (
        // Looks like a construct.
        q([
          /** @type {Construct} */
          _
        ])
      ) : P(_);
      function P(H) {
        return G;
        function G(Q) {
          const te = Q !== null && H[Q], Z = Q !== null && H.null, ve = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(te) ? te : te ? [te] : [],
            ...Array.isArray(Z) ? Z : Z ? [Z] : []
          ];
          return q(ve)(Q);
        }
      }
      function q(H) {
        return ue = H, ce = 0, H.length === 0 ? ie : m(H[ce]);
      }
      function m(H) {
        return G;
        function G(Q) {
          return h = re(), xe = H, H.partial || (l.currentConstruct = H), H.name && l.parser.constructs.disable.null.includes(H.name) ? K() : H.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            D ? Object.assign(Object.create(l), D) : l,
            u,
            L,
            K
          )(Q);
        }
      }
      function L(H) {
        return B(xe, h), V;
      }
      function K(H) {
        return h.restore(), ++ce < ue.length ? m(ue[ce]) : ie;
      }
    }
  }
  function ee(B, D) {
    B.resolveAll && !a.includes(B) && a.push(B), B.resolve && it(l.events, D, l.events.length - D, B.resolve(l.events.slice(D), l)), B.resolveTo && (l.events = B.resolveTo(l.events, l));
  }
  function re() {
    const B = b(), D = l.previous, M = l.currentConstruct, _ = l.events.length, V = Array.from(s);
    return {
      from: _,
      restore: ie
    };
    function ie() {
      r = B, l.previous = D, l.currentConstruct = M, l.events.length = _, s = V, se();
    }
  }
  function se() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function lh(e, t) {
  const n = t.start._index, r = t.start._bufferIndex, i = t.end._index, a = t.end._bufferIndex;
  let o;
  if (n === i)
    o = [e[n].slice(r, a)];
  else {
    if (o = e.slice(n, i), r > -1) {
      const s = o[0];
      typeof s == "string" ? o[0] = s.slice(r) : o.shift();
    }
    a > 0 && o.push(e[i].slice(0, a));
  }
  return o;
}
function uh(e, t) {
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
function ch(e) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      yd([oh, ...(e || {}).extensions || []])
    ),
    content: i(Cd),
    defined: [],
    document: i(Nd),
    flow: i(Vp),
    lazy: {},
    string: i(Kp),
    text: i(Gp)
  };
  return r;
  function i(a) {
    return o;
    function o(s) {
      return sh(r, a, s);
    }
  }
}
function fh(e) {
  for (; !cl(e); )
    ;
  return e;
}
const Ja = /[\0\t\n\r]/g;
function dh() {
  let e = 1, t = "", n = !0, r;
  return i;
  function i(a, o, s) {
    const u = [];
    let l, c, f, p, d;
    for (a = t + (typeof a == "string" ? a.toString() : new TextDecoder(o || void 0).decode(a)), f = 0, t = "", n && (a.charCodeAt(0) === 65279 && f++, n = void 0); f < a.length; ) {
      if (Ja.lastIndex = f, l = Ja.exec(a), p = l && l.index !== void 0 ? l.index : a.length, d = a.charCodeAt(p), !l) {
        t = a.slice(f);
        break;
      }
      if (d === 10 && f === p && r)
        u.push(-3), r = void 0;
      else
        switch (r && (u.push(-5), r = void 0), f < p && (u.push(a.slice(f, p)), e += p - f), d) {
          case 0: {
            u.push(65533), e++;
            break;
          }
          case 9: {
            for (c = Math.ceil(e / 4) * 4, u.push(-2); e++ < c; ) u.push(-1);
            break;
          }
          case 10: {
            u.push(-4), e = 1;
            break;
          }
          default:
            r = !0, e = 1;
        }
      f = p + 1;
    }
    return s && (r && u.push(-5), t && u.push(t), u.push(null)), u;
  }
}
const ph = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function hh(e) {
  return e.replace(ph, mh);
}
function mh(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1), a = i === 120 || i === 88;
    return ol(n.slice(a ? 2 : 1), a ? 16 : 10);
  }
  return zi(n) || e;
}
const gl = {}.hasOwnProperty;
function gh(e, t, n) {
  return typeof t != "string" && (n = t, t = void 0), yh(n)(fh(ch(n).document().write(dh()(e, t, !0))));
}
function yh(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: a(Kt),
      autolinkProtocol: re,
      autolinkEmail: re,
      atxHeading: a(de),
      blockQuote: a(Z),
      characterEscape: re,
      characterReference: re,
      codeFenced: a(ve),
      codeFencedFenceInfo: o,
      codeFencedFenceMeta: o,
      codeIndented: a(ve, o),
      codeText: a(R, o),
      codeTextData: re,
      data: re,
      codeFlowValue: re,
      definition: a(Te),
      definitionDestinationString: o,
      definitionLabelString: o,
      definitionTitleString: o,
      emphasis: a(_e),
      hardBreakEscape: a(Et),
      hardBreakTrailing: a(Et),
      htmlFlow: a(at, o),
      htmlFlowData: re,
      htmlText: a(at, o),
      htmlTextData: re,
      image: a(bn),
      label: o,
      link: a(Kt),
      listItem: a(y),
      listItemValue: p,
      listOrdered: a(Gt, f),
      listUnordered: a(Gt),
      paragraph: a($),
      reference: m,
      referenceString: o,
      resourceDestinationString: o,
      resourceTitleString: o,
      setextHeading: a(de),
      strong: a(U),
      thematicBreak: a(Oe)
    },
    exit: {
      atxHeading: u(),
      atxHeadingSequence: k,
      autolink: u(),
      autolinkEmail: te,
      autolinkProtocol: Q,
      blockQuote: u(),
      characterEscapeValue: se,
      characterReferenceMarkerHexadecimal: K,
      characterReferenceMarkerNumeric: K,
      characterReferenceValue: H,
      characterReference: G,
      codeFenced: u(S),
      codeFencedFence: x,
      codeFencedFenceInfo: d,
      codeFencedFenceMeta: b,
      codeFlowValue: se,
      codeIndented: u(v),
      codeText: u(V),
      codeTextData: se,
      data: se,
      definition: u(),
      definitionDestinationString: I,
      definitionLabelString: O,
      definitionTitleString: C,
      emphasis: u(),
      hardBreakEscape: u(D),
      hardBreakTrailing: u(D),
      htmlFlow: u(M),
      htmlFlowData: se,
      htmlText: u(_),
      htmlTextData: se,
      image: u(ue),
      label: xe,
      labelText: ce,
      lineEnding: B,
      link: u(ie),
      listItem: u(),
      listOrdered: u(),
      listUnordered: u(),
      paragraph: u(),
      referenceString: L,
      resourceDestinationString: h,
      resourceTitleString: P,
      resource: q,
      setextHeading: u(ee),
      setextHeadingLineSequence: z,
      setextHeadingText: w,
      strong: u(),
      thematicBreak: u()
    }
  };
  yl(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(E) {
    let T = {
      type: "root",
      children: []
    };
    const Y = {
      stack: [T],
      tokenStack: [],
      config: t,
      enter: s,
      exit: l,
      buffer: o,
      resume: c,
      data: n
    }, ae = [];
    let ne = -1;
    for (; ++ne < E.length; )
      if (E[ne][1].type === "listOrdered" || E[ne][1].type === "listUnordered")
        if (E[ne][0] === "enter")
          ae.push(ne);
        else {
          const Ne = ae.pop();
          ne = i(E, Ne, ne);
        }
    for (ne = -1; ++ne < E.length; ) {
      const Ne = t[E[ne][0]];
      gl.call(Ne, E[ne][1].type) && Ne[E[ne][1].type].call(Object.assign({
        sliceSerialize: E[ne][2].sliceSerialize
      }, Y), E[ne][1]);
    }
    if (Y.tokenStack.length > 0) {
      const Ne = Y.tokenStack[Y.tokenStack.length - 1];
      (Ne[1] || Qa).call(Y, void 0, Ne[0]);
    }
    for (T.position = {
      start: mt(E.length > 0 ? E[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: mt(E.length > 0 ? E[E.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, ne = -1; ++ne < t.transforms.length; )
      T = t.transforms[ne](T) || T;
    return T;
  }
  function i(E, T, Y) {
    let ae = T - 1, ne = -1, Ne = !1, Be, Ae, Je, Le;
    for (; ++ae <= Y; ) {
      const $e = E[ae];
      switch ($e[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          $e[0] === "enter" ? ne++ : ne--, Le = void 0;
          break;
        }
        case "lineEndingBlank": {
          $e[0] === "enter" && (Be && !Le && !ne && !Je && (Je = ae), Le = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          Le = void 0;
      }
      if (!ne && $e[0] === "enter" && $e[1].type === "listItemPrefix" || ne === -1 && $e[0] === "exit" && ($e[1].type === "listUnordered" || $e[1].type === "listOrdered")) {
        if (Be) {
          let Ot = ae;
          for (Ae = void 0; Ot--; ) {
            const ot = E[Ot];
            if (ot[1].type === "lineEnding" || ot[1].type === "lineEndingBlank") {
              if (ot[0] === "exit") continue;
              Ae && (E[Ae][1].type = "lineEndingBlank", Ne = !0), ot[1].type = "lineEnding", Ae = Ot;
            } else if (!(ot[1].type === "linePrefix" || ot[1].type === "blockQuotePrefix" || ot[1].type === "blockQuotePrefixWhitespace" || ot[1].type === "blockQuoteMarker" || ot[1].type === "listItemIndent")) break;
          }
          Je && (!Ae || Je < Ae) && (Be._spread = !0), Be.end = Object.assign({}, Ae ? E[Ae][1].start : $e[1].end), E.splice(Ae || ae, 0, ["exit", Be, $e[2]]), ae++, Y++;
        }
        if ($e[1].type === "listItemPrefix") {
          const Ot = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, $e[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          Be = Ot, E.splice(ae, 0, ["enter", Ot, $e[2]]), ae++, Y++, Je = void 0, Le = !0;
        }
      }
    }
    return E[T][1]._spread = Ne, Y;
  }
  function a(E, T) {
    return Y;
    function Y(ae) {
      s.call(this, E(ae), ae), T && T.call(this, ae);
    }
  }
  function o() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function s(E, T, Y) {
    this.stack[this.stack.length - 1].children.push(E), this.stack.push(E), this.tokenStack.push([T, Y || void 0]), E.position = {
      start: mt(T.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function u(E) {
    return T;
    function T(Y) {
      E && E.call(this, Y), l.call(this, Y);
    }
  }
  function l(E, T) {
    const Y = this.stack.pop(), ae = this.tokenStack.pop();
    if (ae)
      ae[0].type !== E.type && (T ? T.call(this, E, ae[0]) : (ae[1] || Qa).call(this, E, ae[0]));
    else throw new Error("Cannot close `" + E.type + "` (" + rn({
      start: E.start,
      end: E.end
    }) + "): it’s not open");
    Y.position.end = mt(E.end);
  }
  function c() {
    return md(this.stack.pop());
  }
  function f() {
    this.data.expectingFirstListItemValue = !0;
  }
  function p(E) {
    if (this.data.expectingFirstListItemValue) {
      const T = this.stack[this.stack.length - 2];
      T.start = Number.parseInt(this.sliceSerialize(E), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function d() {
    const E = this.resume(), T = this.stack[this.stack.length - 1];
    T.lang = E;
  }
  function b() {
    const E = this.resume(), T = this.stack[this.stack.length - 1];
    T.meta = E;
  }
  function x() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function S() {
    const E = this.resume(), T = this.stack[this.stack.length - 1];
    T.value = E.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function v() {
    const E = this.resume(), T = this.stack[this.stack.length - 1];
    T.value = E.replace(/(\r?\n|\r)$/g, "");
  }
  function O(E) {
    const T = this.resume(), Y = this.stack[this.stack.length - 1];
    Y.label = T, Y.identifier = zt(this.sliceSerialize(E)).toLowerCase();
  }
  function C() {
    const E = this.resume(), T = this.stack[this.stack.length - 1];
    T.title = E;
  }
  function I() {
    const E = this.resume(), T = this.stack[this.stack.length - 1];
    T.url = E;
  }
  function k(E) {
    const T = this.stack[this.stack.length - 1];
    if (!T.depth) {
      const Y = this.sliceSerialize(E).length;
      T.depth = Y;
    }
  }
  function w() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function z(E) {
    const T = this.stack[this.stack.length - 1];
    T.depth = this.sliceSerialize(E).codePointAt(0) === 61 ? 1 : 2;
  }
  function ee() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function re(E) {
    const Y = this.stack[this.stack.length - 1].children;
    let ae = Y[Y.length - 1];
    (!ae || ae.type !== "text") && (ae = fe(), ae.position = {
      start: mt(E.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, Y.push(ae)), this.stack.push(ae);
  }
  function se(E) {
    const T = this.stack.pop();
    T.value += this.sliceSerialize(E), T.position.end = mt(E.end);
  }
  function B(E) {
    const T = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const Y = T.children[T.children.length - 1];
      Y.position.end = mt(E.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(T.type) && (re.call(this, E), se.call(this, E));
  }
  function D() {
    this.data.atHardBreak = !0;
  }
  function M() {
    const E = this.resume(), T = this.stack[this.stack.length - 1];
    T.value = E;
  }
  function _() {
    const E = this.resume(), T = this.stack[this.stack.length - 1];
    T.value = E;
  }
  function V() {
    const E = this.resume(), T = this.stack[this.stack.length - 1];
    T.value = E;
  }
  function ie() {
    const E = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const T = this.data.referenceType || "shortcut";
      E.type += "Reference", E.referenceType = T, delete E.url, delete E.title;
    } else
      delete E.identifier, delete E.label;
    this.data.referenceType = void 0;
  }
  function ue() {
    const E = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const T = this.data.referenceType || "shortcut";
      E.type += "Reference", E.referenceType = T, delete E.url, delete E.title;
    } else
      delete E.identifier, delete E.label;
    this.data.referenceType = void 0;
  }
  function ce(E) {
    const T = this.sliceSerialize(E), Y = this.stack[this.stack.length - 2];
    Y.label = hh(T), Y.identifier = zt(T).toLowerCase();
  }
  function xe() {
    const E = this.stack[this.stack.length - 1], T = this.resume(), Y = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, Y.type === "link") {
      const ae = E.children;
      Y.children = ae;
    } else
      Y.alt = T;
  }
  function h() {
    const E = this.resume(), T = this.stack[this.stack.length - 1];
    T.url = E;
  }
  function P() {
    const E = this.resume(), T = this.stack[this.stack.length - 1];
    T.title = E;
  }
  function q() {
    this.data.inReference = void 0;
  }
  function m() {
    this.data.referenceType = "collapsed";
  }
  function L(E) {
    const T = this.resume(), Y = this.stack[this.stack.length - 1];
    Y.label = T, Y.identifier = zt(this.sliceSerialize(E)).toLowerCase(), this.data.referenceType = "full";
  }
  function K(E) {
    this.data.characterReferenceType = E.type;
  }
  function H(E) {
    const T = this.sliceSerialize(E), Y = this.data.characterReferenceType;
    let ae;
    Y ? (ae = ol(T, Y === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : ae = zi(T);
    const ne = this.stack[this.stack.length - 1];
    ne.value += ae;
  }
  function G(E) {
    const T = this.stack.pop();
    T.position.end = mt(E.end);
  }
  function Q(E) {
    se.call(this, E);
    const T = this.stack[this.stack.length - 1];
    T.url = this.sliceSerialize(E);
  }
  function te(E) {
    se.call(this, E);
    const T = this.stack[this.stack.length - 1];
    T.url = "mailto:" + this.sliceSerialize(E);
  }
  function Z() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function ve() {
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
  function Te() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function _e() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function de() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function Et() {
    return {
      type: "break"
    };
  }
  function at() {
    return {
      type: "html",
      value: ""
    };
  }
  function bn() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function Kt() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function Gt(E) {
    return {
      type: "list",
      ordered: E.type === "listOrdered",
      start: null,
      spread: E._spread,
      children: []
    };
  }
  function y(E) {
    return {
      type: "listItem",
      spread: E._spread,
      checked: null,
      children: []
    };
  }
  function $() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function U() {
    return {
      type: "strong",
      children: []
    };
  }
  function fe() {
    return {
      type: "text",
      value: ""
    };
  }
  function Oe() {
    return {
      type: "thematicBreak"
    };
  }
}
function mt(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function yl(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? yl(e, r) : xh(e, r);
  }
}
function xh(e, t) {
  let n;
  for (n in t)
    if (gl.call(t, n))
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
function Qa(e, t) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + rn({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + t.type + "`, " + rn({
    start: t.start,
    end: t.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + rn({
    start: t.start,
    end: t.end
  }) + ") is still open");
}
function bh(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return gh(r, {
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
function vh(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function wh(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function Eh(e, t) {
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
function kh(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Sh(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Ch(e, t) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = Yt(r.toLowerCase()), a = e.footnoteOrder.indexOf(r);
  let o, s = e.footnoteCounts.get(r);
  s === void 0 ? (s = 0, e.footnoteOrder.push(r), o = e.footnoteOrder.length) : o = a + 1, s += 1, e.footnoteCounts.set(r, s);
  const u = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + n + "fn-" + i,
      id: n + "fnref-" + i + (s > 1 ? "-" + s : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(o) }]
  };
  e.patch(t, u);
  const l = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [u]
  };
  return e.patch(t, l), e.applyData(t, l);
}
function Th(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Nh(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function xl(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + r }];
  const i = e.all(t), a = i[0];
  a && a.type === "text" ? a.value = "[" + a.value : i.unshift({ type: "text", value: "[" });
  const o = i[i.length - 1];
  return o && o.type === "text" ? o.value += r : i.push({ type: "text", value: r }), i;
}
function Oh(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return xl(e, t);
  const i = { src: Yt(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const a = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(t, a), e.applyData(t, a);
}
function Ah(e, t) {
  const n = { src: Yt(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function Ih(e, t) {
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
function Ph(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return xl(e, t);
  const i = { href: Yt(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const a = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(t)
  };
  return e.patch(t, a), e.applyData(t, a);
}
function jh(e, t) {
  const n = { href: Yt(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Rh(e, t, n) {
  const r = e.all(t), i = n ? _h(n) : bl(t), a = {}, o = [];
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
  let s = -1;
  for (; ++s < r.length; ) {
    const c = r[s];
    (i || s !== 0 || c.type !== "element" || c.tagName !== "p") && o.push({ type: "text", value: `
` }), c.type === "element" && c.tagName === "p" && !i ? o.push(...c.children) : o.push(c);
  }
  const u = r[r.length - 1];
  u && (i || u.type !== "element" || u.tagName !== "p") && o.push({ type: "text", value: `
` });
  const l = { type: "element", tagName: "li", properties: a, children: o };
  return e.patch(t, l), e.applyData(t, l);
}
function _h(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = bl(n[r]);
  }
  return t;
}
function bl(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function Lh(e, t) {
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
function Fh(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Mh(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Dh(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function zh(e, t) {
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
    }, s = Li(t.children[1]), u = Zs(t.children[t.children.length - 1]);
    s && u && (o.position = { start: s, end: u }), i.push(o);
  }
  const a = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0)
  };
  return e.patch(t, a), e.applyData(t, a);
}
function Bh(e, t, n) {
  const r = n ? n.children : void 0, a = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", o = n && n.type === "table" ? n.align : void 0, s = o ? o.length : t.children.length;
  let u = -1;
  const l = [];
  for (; ++u < s; ) {
    const f = t.children[u], p = {}, d = o ? o[u] : void 0;
    d && (p.align = d);
    let b = { type: "element", tagName: a, properties: p, children: [] };
    f && (b.children = e.all(f), e.patch(f, b), b = e.applyData(f, b)), l.push(b);
  }
  const c = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(l, !0)
  };
  return e.patch(t, c), e.applyData(t, c);
}
function $h(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Za = 9, eo = 32;
function Uh(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), i = 0;
  const a = [];
  for (; r; )
    a.push(
      to(t.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = n.exec(t);
  return a.push(to(t.slice(i), i > 0, !1)), a.join("");
}
function to(e, t, n) {
  let r = 0, i = e.length;
  if (t) {
    let a = e.codePointAt(r);
    for (; a === Za || a === eo; )
      r++, a = e.codePointAt(r);
  }
  if (n) {
    let a = e.codePointAt(i - 1);
    for (; a === Za || a === eo; )
      i--, a = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function Hh(e, t) {
  const n = { type: "text", value: Uh(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Wh(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Vh = {
  blockquote: vh,
  break: wh,
  code: Eh,
  delete: kh,
  emphasis: Sh,
  footnoteReference: Ch,
  heading: Th,
  html: Nh,
  imageReference: Oh,
  image: Ah,
  inlineCode: Ih,
  linkReference: Ph,
  link: jh,
  listItem: Rh,
  list: Lh,
  paragraph: Fh,
  // @ts-expect-error: root is different, but hard to type.
  root: Mh,
  strong: Dh,
  table: zh,
  tableCell: $h,
  tableRow: Bh,
  text: Hh,
  thematicBreak: Wh,
  toml: Cn,
  yaml: Cn,
  definition: Cn,
  footnoteDefinition: Cn
};
function Cn() {
}
const vl = -1, Xn = 0, on = 1, Mn = 2, Ui = 3, Hi = 4, Wi = 5, Vi = 6, wl = 7, El = 8, no = typeof self == "object" ? self : globalThis, Yh = (e, t) => {
  const n = (i, a) => (e.set(a, i), i), r = (i) => {
    if (e.has(i))
      return e.get(i);
    const [a, o] = t[i];
    switch (a) {
      case Xn:
      case vl:
        return n(o, i);
      case on: {
        const s = n([], i);
        for (const u of o)
          s.push(r(u));
        return s;
      }
      case Mn: {
        const s = n({}, i);
        for (const [u, l] of o)
          s[r(u)] = r(l);
        return s;
      }
      case Ui:
        return n(new Date(o), i);
      case Hi: {
        const { source: s, flags: u } = o;
        return n(new RegExp(s, u), i);
      }
      case Wi: {
        const s = n(/* @__PURE__ */ new Map(), i);
        for (const [u, l] of o)
          s.set(r(u), r(l));
        return s;
      }
      case Vi: {
        const s = n(/* @__PURE__ */ new Set(), i);
        for (const u of o)
          s.add(r(u));
        return s;
      }
      case wl: {
        const { name: s, message: u } = o;
        return n(new no[s](u), i);
      }
      case El:
        return n(BigInt(o), i);
      case "BigInt":
        return n(Object(BigInt(o)), i);
      case "ArrayBuffer":
        return n(new Uint8Array(o).buffer, o);
      case "DataView": {
        const { buffer: s } = new Uint8Array(o);
        return n(new DataView(s), o);
      }
    }
    return n(new no[a](o), i);
  };
  return r;
}, ro = (e) => Yh(/* @__PURE__ */ new Map(), e)(0), _t = "", { toString: qh } = {}, { keys: Kh } = Object, en = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [Xn, t];
  const n = qh.call(e).slice(8, -1);
  switch (n) {
    case "Array":
      return [on, _t];
    case "Object":
      return [Mn, _t];
    case "Date":
      return [Ui, _t];
    case "RegExp":
      return [Hi, _t];
    case "Map":
      return [Wi, _t];
    case "Set":
      return [Vi, _t];
    case "DataView":
      return [on, n];
  }
  return n.includes("Array") ? [on, n] : n.includes("Error") ? [wl, n] : [Mn, n];
}, Tn = ([e, t]) => e === Xn && (t === "function" || t === "symbol"), Gh = (e, t, n, r) => {
  const i = (o, s) => {
    const u = r.push(o) - 1;
    return n.set(s, u), u;
  }, a = (o) => {
    if (n.has(o))
      return n.get(o);
    let [s, u] = en(o);
    switch (s) {
      case Xn: {
        let c = o;
        switch (u) {
          case "bigint":
            s = El, c = o.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + u);
            c = null;
            break;
          case "undefined":
            return i([vl], o);
        }
        return i([s, c], o);
      }
      case on: {
        if (u) {
          let p = o;
          return u === "DataView" ? p = new Uint8Array(o.buffer) : u === "ArrayBuffer" && (p = new Uint8Array(o)), i([u, [...p]], o);
        }
        const c = [], f = i([s, c], o);
        for (const p of o)
          c.push(a(p));
        return f;
      }
      case Mn: {
        if (u)
          switch (u) {
            case "BigInt":
              return i([u, o.toString()], o);
            case "Boolean":
            case "Number":
            case "String":
              return i([u, o.valueOf()], o);
          }
        if (t && "toJSON" in o)
          return a(o.toJSON());
        const c = [], f = i([s, c], o);
        for (const p of Kh(o))
          (e || !Tn(en(o[p]))) && c.push([a(p), a(o[p])]);
        return f;
      }
      case Ui:
        return i([s, o.toISOString()], o);
      case Hi: {
        const { source: c, flags: f } = o;
        return i([s, { source: c, flags: f }], o);
      }
      case Wi: {
        const c = [], f = i([s, c], o);
        for (const [p, d] of o)
          (e || !(Tn(en(p)) || Tn(en(d)))) && c.push([a(p), a(d)]);
        return f;
      }
      case Vi: {
        const c = [], f = i([s, c], o);
        for (const p of o)
          (e || !Tn(en(p))) && c.push(a(p));
        return f;
      }
    }
    const { message: l } = o;
    return i([s, { name: u, message: l }], o);
  };
  return a;
}, io = (e, { json: t, lossy: n } = {}) => {
  const r = [];
  return Gh(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, Dn = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? ro(io(e, t)) : structuredClone(e)
) : (e, t) => ro(io(e, t));
function Xh(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return t > 1 && n.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), n;
}
function Jh(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function Qh(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || Xh, r = e.options.footnoteBackLabel || Jh, i = e.options.footnoteLabel || "Footnotes", a = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, s = [];
  let u = -1;
  for (; ++u < e.footnoteOrder.length; ) {
    const l = e.footnoteById.get(
      e.footnoteOrder[u]
    );
    if (!l)
      continue;
    const c = e.all(l), f = String(l.identifier).toUpperCase(), p = Yt(f.toLowerCase());
    let d = 0;
    const b = [], x = e.footnoteCounts.get(f);
    for (; x !== void 0 && ++d <= x; ) {
      b.length > 0 && b.push({ type: "text", value: " " });
      let O = typeof n == "string" ? n : n(u, d);
      typeof O == "string" && (O = { type: "text", value: O }), b.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + t + "fnref-" + p + (d > 1 ? "-" + d : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(u, d),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(O) ? O : [O]
      });
    }
    const S = c[c.length - 1];
    if (S && S.type === "element" && S.tagName === "p") {
      const O = S.children[S.children.length - 1];
      O && O.type === "text" ? O.value += " " : S.children.push({ type: "text", value: " " }), S.children.push(...b);
    } else
      c.push(...b);
    const v = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + p },
      children: e.wrap(c, !0)
    };
    e.patch(l, v), s.push(v);
  }
  if (s.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: a,
          properties: {
            ...Dn(o),
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
          children: e.wrap(s, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
const kl = (
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
      return nm;
    if (typeof e == "function")
      return Jn(e);
    if (typeof e == "object")
      return Array.isArray(e) ? Zh(e) : em(e);
    if (typeof e == "string")
      return tm(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function Zh(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = kl(e[n]);
  return Jn(r);
  function r(...i) {
    let a = -1;
    for (; ++a < t.length; )
      if (t[a].apply(this, i)) return !0;
    return !1;
  }
}
function em(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return Jn(n);
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
function tm(e) {
  return Jn(t);
  function t(n) {
    return n && n.type === e;
  }
}
function Jn(e) {
  return t;
  function t(n, r, i) {
    return !!(rm(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function nm() {
  return !0;
}
function rm(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const Sl = [], im = !0, ao = !1, am = "skip";
function om(e, t, n, r) {
  let i;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
  const a = kl(i), o = r ? -1 : 1;
  s(e, void 0, [])();
  function s(u, l, c) {
    const f = (
      /** @type {Record<string, unknown>} */
      u && typeof u == "object" ? u : {}
    );
    if (typeof f.type == "string") {
      const d = (
        // `hast`
        typeof f.tagName == "string" ? f.tagName : (
          // `xast`
          typeof f.name == "string" ? f.name : void 0
        )
      );
      Object.defineProperty(p, "name", {
        value: "node (" + (u.type + (d ? "<" + d + ">" : "")) + ")"
      });
    }
    return p;
    function p() {
      let d = Sl, b, x, S;
      if ((!t || a(u, l, c[c.length - 1] || void 0)) && (d = sm(n(u, c)), d[0] === ao))
        return d;
      if ("children" in u && u.children) {
        const v = (
          /** @type {UnistParent} */
          u
        );
        if (v.children && d[0] !== am)
          for (x = (r ? v.children.length : -1) + o, S = c.concat(v); x > -1 && x < v.children.length; ) {
            const O = v.children[x];
            if (b = s(O, x, S)(), b[0] === ao)
              return b;
            x = typeof b[1] == "number" ? b[1] : x + o;
          }
      }
      return d;
    }
  }
}
function sm(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [im, e] : e == null ? Sl : [e];
}
function Cl(e, t, n, r) {
  let i, a, o;
  typeof t == "function" ? (a = void 0, o = t, i = n) : (a = t, o = n, i = r), om(e, a, s, i);
  function s(u, l) {
    const c = l[l.length - 1], f = c ? c.children.indexOf(u) : void 0;
    return o(u, f, c);
  }
}
const Yr = {}.hasOwnProperty, lm = {};
function um(e, t) {
  const n = t || lm, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), o = { ...Vh, ...n.handlers }, s = {
    all: l,
    applyData: fm,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: a,
    footnoteOrder: [],
    handlers: o,
    one: u,
    options: n,
    patch: cm,
    wrap: pm
  };
  return Cl(e, function(c) {
    if (c.type === "definition" || c.type === "footnoteDefinition") {
      const f = c.type === "definition" ? r : i, p = String(c.identifier).toUpperCase();
      f.has(p) || f.set(p, c);
    }
  }), s;
  function u(c, f) {
    const p = c.type, d = s.handlers[p];
    if (Yr.call(s.handlers, p) && d)
      return d(s, c, f);
    if (s.options.passThrough && s.options.passThrough.includes(p)) {
      if ("children" in c) {
        const { children: x, ...S } = c, v = Dn(S);
        return v.children = s.all(c), v;
      }
      return Dn(c);
    }
    return (s.options.unknownHandler || dm)(s, c, f);
  }
  function l(c) {
    const f = [];
    if ("children" in c) {
      const p = c.children;
      let d = -1;
      for (; ++d < p.length; ) {
        const b = s.one(p[d], c);
        if (b) {
          if (d && p[d - 1].type === "break" && (!Array.isArray(b) && b.type === "text" && (b.value = oo(b.value)), !Array.isArray(b) && b.type === "element")) {
            const x = b.children[0];
            x && x.type === "text" && (x.value = oo(x.value));
          }
          Array.isArray(b) ? f.push(...b) : f.push(b);
        }
      }
    }
    return f;
  }
}
function cm(e, t) {
  e.position && (t.position = Vf(e));
}
function fm(e, t) {
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
    n.type === "element" && a && Object.assign(n.properties, Dn(a)), "children" in n && n.children && i !== null && i !== void 0 && (n.children = i);
  }
  return n;
}
function dm(e, t) {
  const n = t.data || {}, r = "value" in t && !(Yr.call(n, "hProperties") || Yr.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function pm(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function oo(e) {
  let t = 0, n = e.charCodeAt(t);
  for (; n === 9 || n === 32; )
    t++, n = e.charCodeAt(t);
  return e.slice(t);
}
function so(e, t) {
  const n = um(e, t), r = n.one(e, void 0), i = Qh(n), a = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && a.children.push({ type: "text", value: `
` }, i), a;
}
function hm(e, t) {
  return e && "run" in e ? async function(n, r) {
    const i = (
      /** @type {HastRoot} */
      so(n, { file: r, ...t })
    );
    await e.run(i, r);
  } : function(n, r) {
    return (
      /** @type {HastRoot} */
      so(n, { file: r, ...e || t })
    );
  };
}
function lo(e) {
  if (e)
    throw e;
}
var wr, uo;
function mm() {
  if (uo) return wr;
  uo = 1;
  var e = Object.prototype.hasOwnProperty, t = Object.prototype.toString, n = Object.defineProperty, r = Object.getOwnPropertyDescriptor, i = function(l) {
    return typeof Array.isArray == "function" ? Array.isArray(l) : t.call(l) === "[object Array]";
  }, a = function(l) {
    if (!l || t.call(l) !== "[object Object]")
      return !1;
    var c = e.call(l, "constructor"), f = l.constructor && l.constructor.prototype && e.call(l.constructor.prototype, "isPrototypeOf");
    if (l.constructor && !c && !f)
      return !1;
    var p;
    for (p in l)
      ;
    return typeof p > "u" || e.call(l, p);
  }, o = function(l, c) {
    n && c.name === "__proto__" ? n(l, c.name, {
      enumerable: !0,
      configurable: !0,
      value: c.newValue,
      writable: !0
    }) : l[c.name] = c.newValue;
  }, s = function(l, c) {
    if (c === "__proto__")
      if (e.call(l, c)) {
        if (r)
          return r(l, c).value;
      } else return;
    return l[c];
  };
  return wr = function u() {
    var l, c, f, p, d, b, x = arguments[0], S = 1, v = arguments.length, O = !1;
    for (typeof x == "boolean" && (O = x, x = arguments[1] || {}, S = 2), (x == null || typeof x != "object" && typeof x != "function") && (x = {}); S < v; ++S)
      if (l = arguments[S], l != null)
        for (c in l)
          f = s(x, c), p = s(l, c), x !== p && (O && p && (a(p) || (d = i(p))) ? (d ? (d = !1, b = f && i(f) ? f : []) : b = f && a(f) ? f : {}, o(x, { name: c, newValue: u(O, b, p) })) : typeof p < "u" && o(x, { name: c, newValue: p }));
    return x;
  }, wr;
}
var gm = mm();
const Er = /* @__PURE__ */ pn(gm);
function qr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function ym() {
  const e = [], t = { run: n, use: r };
  return t;
  function n(...i) {
    let a = -1;
    const o = i.pop();
    if (typeof o != "function")
      throw new TypeError("Expected function as last argument, not " + o);
    s(null, ...i);
    function s(u, ...l) {
      const c = e[++a];
      let f = -1;
      if (u) {
        o(u);
        return;
      }
      for (; ++f < i.length; )
        (l[f] === null || l[f] === void 0) && (l[f] = i[f]);
      i = l, c ? xm(c, s)(...l) : o(null, ...l);
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
function xm(e, t) {
  let n;
  return r;
  function r(...o) {
    const s = e.length > o.length;
    let u;
    s && o.push(i);
    try {
      u = e.apply(this, o);
    } catch (l) {
      const c = (
        /** @type {Error} */
        l
      );
      if (s && n)
        throw c;
      return i(c);
    }
    s || (u && u.then && typeof u.then == "function" ? u.then(a, i) : u instanceof Error ? i(u) : a(u));
  }
  function i(o, ...s) {
    n || (n = !0, t(o, ...s));
  }
  function a(o) {
    i(null, o);
  }
}
const Qe = { basename: bm, dirname: vm, extname: wm, join: Em, sep: "/" };
function bm(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  gn(e);
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
  let o = -1, s = t.length - 1;
  for (; i--; )
    if (e.codePointAt(i) === 47) {
      if (a) {
        n = i + 1;
        break;
      }
    } else
      o < 0 && (a = !0, o = i + 1), s > -1 && (e.codePointAt(i) === t.codePointAt(s--) ? s < 0 && (r = i) : (s = -1, r = o));
  return n === r ? r = o : r < 0 && (r = e.length), e.slice(n, r);
}
function vm(e) {
  if (gn(e), e.length === 0)
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
function wm(e) {
  gn(e);
  let t = e.length, n = -1, r = 0, i = -1, a = 0, o;
  for (; t--; ) {
    const s = e.codePointAt(t);
    if (s === 47) {
      if (o) {
        r = t + 1;
        break;
      }
      continue;
    }
    n < 0 && (o = !0, n = t + 1), s === 46 ? i < 0 ? i = t : a !== 1 && (a = 1) : i > -1 && (a = -1);
  }
  return i < 0 || n < 0 || // We saw a non-dot character immediately before the dot.
  a === 0 || // The (right-most) trimmed path component is exactly `..`.
  a === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n);
}
function Em(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    gn(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : km(n);
}
function km(e) {
  gn(e);
  const t = e.codePointAt(0) === 47;
  let n = Sm(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function Sm(e, t) {
  let n = "", r = 0, i = -1, a = 0, o = -1, s, u;
  for (; ++o <= e.length; ) {
    if (o < e.length)
      s = e.codePointAt(o);
    else {
      if (s === 47)
        break;
      s = 47;
    }
    if (s === 47) {
      if (!(i === o - 1 || a === 1)) if (i !== o - 1 && a === 2) {
        if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
          if (n.length > 2) {
            if (u = n.lastIndexOf("/"), u !== n.length - 1) {
              u < 0 ? (n = "", r = 0) : (n = n.slice(0, u), r = n.length - 1 - n.lastIndexOf("/")), i = o, a = 0;
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
    } else s === 46 && a > -1 ? a++ : a = -1;
  }
  return n;
}
function gn(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const Cm = { cwd: Tm };
function Tm() {
  return "/";
}
function Kr(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function Nm(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!Kr(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return Om(e);
}
function Om(e) {
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
const kr = (
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
class Tl {
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
    t ? Kr(t) ? n = { path: t } : typeof t == "string" || Am(t) ? n = { value: t } : n = t : n = {}, this.cwd = "cwd" in n ? "" : Cm.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < kr.length; ) {
      const a = kr[r];
      a in n && n[a] !== void 0 && n[a] !== null && (this[a] = a === "history" ? [...n[a]] : n[a]);
    }
    let i;
    for (i in n)
      kr.includes(i) || (this[i] = n[i]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? Qe.basename(this.path) : void 0;
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
    Cr(t, "basename"), Sr(t, "basename"), this.path = Qe.join(this.dirname || "", t);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? Qe.dirname(this.path) : void 0;
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
    co(this.basename, "dirname"), this.path = Qe.join(t || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? Qe.extname(this.path) : void 0;
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
    if (Sr(t, "extname"), co(this.dirname, "extname"), t) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = Qe.join(this.dirname, this.stem + (t || ""));
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
    Kr(t) && (t = Nm(t)), Cr(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? Qe.basename(this.path, this.extname) : void 0;
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
    Cr(t, "stem"), Sr(t, "stem"), this.path = Qe.join(this.dirname || "", t + (this.extname || ""));
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
    const i = new Re(
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
function Sr(e, t) {
  if (e && e.includes(Qe.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + Qe.sep + "`"
    );
}
function Cr(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function co(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function Am(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Im = (
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
), Pm = {}.hasOwnProperty;
class Yi extends Im {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = ym();
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
      new Yi()
    );
    let n = -1;
    for (; ++n < this.attachers.length; ) {
      const r = this.attachers[n];
      t.use(...r);
    }
    return t.data(Er(!0, {}, this.namespace)), t;
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
    return typeof t == "string" ? arguments.length === 2 ? (Or("data", this.frozen), this.namespace[t] = n, this) : Pm.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (Or("data", this.frozen), this.namespace = t, this) : this.namespace;
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
    const n = Nn(t), r = this.parser || this.Parser;
    return Tr("parse", r), r(String(n), n);
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
    return this.freeze(), Tr("process", this.parser || this.Parser), Nr("process", this.compiler || this.Compiler), n ? i(void 0, n) : new Promise(i);
    function i(a, o) {
      const s = Nn(t), u = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        r.parse(s)
      );
      r.run(u, s, function(c, f, p) {
        if (c || !f || !p)
          return l(c);
        const d = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          f
        ), b = r.stringify(d, p);
        _m(b) ? p.value = b : p.result = b, l(
          c,
          /** @type {VFileWithOutput<CompileResult>} */
          p
        );
      });
      function l(c, f) {
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
    return this.freeze(), Tr("processSync", this.parser || this.Parser), Nr("processSync", this.compiler || this.Compiler), this.process(t, i), po("processSync", "process", n), r;
    function i(a, o) {
      n = !0, lo(a), r = o;
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
    fo(t), this.freeze();
    const i = this.transformers;
    return !r && typeof n == "function" && (r = n, n = void 0), r ? a(void 0, r) : new Promise(a);
    function a(o, s) {
      const u = Nn(n);
      i.run(t, u, l);
      function l(c, f, p) {
        const d = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          f || t
        );
        c ? s(c) : o ? o(d) : r(void 0, d, p);
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
    return this.run(t, n, a), po("runSync", "run", r), i;
    function a(o, s) {
      lo(o), i = s, r = !0;
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
    const r = Nn(n), i = this.compiler || this.Compiler;
    return Nr("stringify", i), fo(t), i(t, r);
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
    if (Or("use", this.frozen), t != null) if (typeof t == "function")
      u(t, n);
    else if (typeof t == "object")
      Array.isArray(t) ? s(t) : o(t);
    else
      throw new TypeError("Expected usable value, not `" + t + "`");
    return this;
    function a(l) {
      if (typeof l == "function")
        u(l, []);
      else if (typeof l == "object")
        if (Array.isArray(l)) {
          const [c, ...f] = (
            /** @type {PluginTuple<Array<unknown>>} */
            l
          );
          u(c, f);
        } else
          o(l);
      else
        throw new TypeError("Expected usable value, not `" + l + "`");
    }
    function o(l) {
      if (!("plugins" in l) && !("settings" in l))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      s(l.plugins), l.settings && (i.settings = Er(!0, i.settings, l.settings));
    }
    function s(l) {
      let c = -1;
      if (l != null) if (Array.isArray(l))
        for (; ++c < l.length; ) {
          const f = l[c];
          a(f);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + l + "`");
    }
    function u(l, c) {
      let f = -1, p = -1;
      for (; ++f < r.length; )
        if (r[f][0] === l) {
          p = f;
          break;
        }
      if (p === -1)
        r.push([l, ...c]);
      else if (c.length > 0) {
        let [d, ...b] = c;
        const x = r[p][1];
        qr(x) && qr(d) && (d = Er(!0, x, d)), r[p] = [l, d, ...b];
      }
    }
  }
}
const jm = new Yi().freeze();
function Tr(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function Nr(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function Or(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function fo(e) {
  if (!qr(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function po(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function Nn(e) {
  return Rm(e) ? e : new Tl(e);
}
function Rm(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function _m(e) {
  return typeof e == "string" || Lm(e);
}
function Lm(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Fm = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", ho = [], mo = { allowDangerousHtml: !0 }, Mm = /^(https?|ircs?|mailto|xmpp)$/i, Dm = [
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
function zm(e) {
  const t = Bm(e), n = $m(e);
  return Um(t.runSync(t.parse(n), n), e);
}
function Bm(e) {
  const t = e.rehypePlugins || ho, n = e.remarkPlugins || ho, r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...mo } : mo;
  return jm().use(bh).use(n).use(hm, r).use(t);
}
function $m(e) {
  const t = e.children || "", n = new Tl();
  return typeof t == "string" && (n.value = t), n;
}
function Um(e, t) {
  const n = t.allowedElements, r = t.allowElement, i = t.components, a = t.disallowedElements, o = t.skipHtml, s = t.unwrapDisallowed, u = t.urlTransform || Hm;
  for (const c of Dm)
    Object.hasOwn(t, c.from) && ("" + c.from + (c.to ? "use `" + c.to + "` instead" : "remove it") + Fm + c.id, void 0);
  return Cl(e, l), Jf(e, {
    Fragment: g.Fragment,
    // @ts-expect-error
    // React components are allowed to return numbers,
    // but not according to the types in hast-util-to-jsx-runtime
    components: i,
    ignoreInvalidStyle: !0,
    jsx: g.jsx,
    jsxs: g.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function l(c, f, p) {
    if (c.type === "raw" && p && typeof f == "number")
      return o ? p.children.splice(f, 1) : p.children[f] = { type: "text", value: c.value }, f;
    if (c.type === "element") {
      let d;
      for (d in xr)
        if (Object.hasOwn(xr, d) && Object.hasOwn(c.properties, d)) {
          const b = c.properties[d], x = xr[d];
          (x === null || x.includes(c.tagName)) && (c.properties[d] = u(String(b || ""), d, c));
        }
    }
    if (c.type === "element") {
      let d = n ? !n.includes(c.tagName) : a ? a.includes(c.tagName) : !1;
      if (!d && r && typeof f == "number" && (d = !r(c, f, p)), d && p && typeof f == "number")
        return s && c.children ? p.children.splice(f, 1, ...c.children) : p.children.splice(f, 1), f;
    }
  }
}
function Hm(e) {
  const t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || // It is a protocol, it should be allowed.
    Mm.test(e.slice(0, t)) ? e : ""
  );
}
const yx = ({ mark_down_data: e }) => /* @__PURE__ */ g.jsx(Ge, { children: /* @__PURE__ */ g.jsx(Ie, { className: "rounded background-color-body mt-3 p-2", children: /* @__PURE__ */ g.jsx(we, { children: /* @__PURE__ */ g.jsx("div", { className: "mb-0 font-color-class bio-desc markdown-body", children: /* @__PURE__ */ g.jsx(zm, { children: e }) }) }) }) }), xx = ({ more_link: e }) => {
  const t = e.startsWith("http://") || e.startsWith("https://") ? e : `https://${e}`;
  return /* @__PURE__ */ g.jsx(Ge, { children: /* @__PURE__ */ g.jsx(Ie, { className: "", children: /* @__PURE__ */ g.jsx(we, { className: "text-center", children: /* @__PURE__ */ g.jsx("h1", { className: "animate bounce", children: /* @__PURE__ */ g.jsxs(
    "a",
    {
      className: "text-decoration-none more-color",
      href: t,
      rel: "noopener noreferrer",
      children: [
        /* @__PURE__ */ g.jsx("span", { className: "dot", children: "." }),
        /* @__PURE__ */ g.jsx("span", { className: "dot", children: "." }),
        /* @__PURE__ */ g.jsx("span", { className: "dot", children: "." })
      ]
    }
  ) }) }) }) });
};
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function Wm(e, t, n) {
  return (t = Ym(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function go(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? go(Object(n), !0).forEach(function(r) {
      Wm(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : go(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Vm(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ym(e) {
  var t = Vm(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const yo = () => {
};
let qi = {}, Nl = {}, Ol = null, Al = {
  mark: yo,
  measure: yo
};
try {
  typeof window < "u" && (qi = window), typeof document < "u" && (Nl = document), typeof MutationObserver < "u" && (Ol = MutationObserver), typeof performance < "u" && (Al = performance);
} catch {
}
const {
  userAgent: xo = ""
} = qi.navigator || {}, xt = qi, be = Nl, bo = Ol, On = Al;
xt.document;
const ht = !!be.documentElement && !!be.head && typeof be.addEventListener == "function" && typeof be.createElement == "function", Il = ~xo.indexOf("MSIE") || ~xo.indexOf("Trident/");
var qm = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, Km = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Pl = {
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
}, Gm = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, jl = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], je = "classic", Qn = "duotone", Xm = "sharp", Jm = "sharp-duotone", Rl = [je, Qn, Xm, Jm], Qm = {
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
}, Zm = {
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
}, eg = /* @__PURE__ */ new Map([["classic", {
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
}]]), tg = {
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
}, ng = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], vo = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, rg = ["kit"], ig = {
  kit: {
    "fa-kit": "fak"
  }
}, ag = ["fak", "fakd"], og = {
  kit: {
    fak: "fa-kit"
  }
}, wo = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, An = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, sg = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], lg = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], ug = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, cg = {
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
}, fg = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, Gr = {
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
}, dg = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], Xr = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...sg, ...dg], pg = ["solid", "regular", "light", "thin", "duotone", "brands"], _l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], hg = _l.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), mg = [...Object.keys(fg), ...pg, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", An.GROUP, An.SWAP_OPACITY, An.PRIMARY, An.SECONDARY].concat(_l.map((e) => "".concat(e, "x"))).concat(hg.map((e) => "w-".concat(e))), gg = {
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
const ft = "___FONT_AWESOME___", Jr = 16, Ll = "fa", Fl = "svg-inline--fa", Ct = "data-fa-i2svg", Qr = "data-fa-pseudo-element", yg = "data-fa-pseudo-element-pending", Ki = "data-prefix", Gi = "data-icon", Eo = "fontawesome-i2svg", xg = "async", bg = ["HTML", "HEAD", "STYLE", "SCRIPT"], Ml = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function yn(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[je];
    }
  });
}
const Dl = N({}, Pl);
Dl[je] = N(N(N(N({}, {
  "fa-duotone": "duotone"
}), Pl[je]), vo.kit), vo["kit-duotone"]);
const vg = yn(Dl), Zr = N({}, tg);
Zr[je] = N(N(N(N({}, {
  duotone: "fad"
}), Zr[je]), wo.kit), wo["kit-duotone"]);
const ko = yn(Zr), ei = N({}, Gr);
ei[je] = N(N({}, ei[je]), og.kit);
const Xi = yn(ei), ti = N({}, cg);
ti[je] = N(N({}, ti[je]), ig.kit);
yn(ti);
const wg = qm, zl = "fa-layers-text", Eg = Km, kg = N({}, Qm);
yn(kg);
const Sg = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Ar = Gm, Cg = [...rg, ...mg], sn = xt.FontAwesomeConfig || {};
function Tg(e) {
  var t = be.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function Ng(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
be && typeof be.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const i = Ng(Tg(n));
  i != null && (sn[r] = i);
});
const Bl = {
  styleDefault: "solid",
  familyDefault: je,
  cssPrefix: Ll,
  replacementClass: Fl,
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
sn.familyPrefix && (sn.cssPrefix = sn.familyPrefix);
const $t = N(N({}, Bl), sn);
$t.autoReplaceSvg || ($t.observeMutations = !1);
const W = {};
Object.keys(Bl).forEach((e) => {
  Object.defineProperty(W, e, {
    enumerable: !0,
    set: function(t) {
      $t[e] = t, ln.forEach((n) => n(W));
    },
    get: function() {
      return $t[e];
    }
  });
});
Object.defineProperty(W, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    $t.cssPrefix = e, ln.forEach((t) => t(W));
  },
  get: function() {
    return $t.cssPrefix;
  }
});
xt.FontAwesomeConfig = W;
const ln = [];
function Og(e) {
  return ln.push(e), () => {
    ln.splice(ln.indexOf(e), 1);
  };
}
const gt = Jr, tt = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Ag(e) {
  if (!e || !ht)
    return;
  const t = be.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = be.head.childNodes;
  let r = null;
  for (let i = n.length - 1; i > -1; i--) {
    const a = n[i], o = (a.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(o) > -1 && (r = a);
  }
  return be.head.insertBefore(t, r), e;
}
const Ig = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function fn() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += Ig[Math.random() * 62 | 0];
  return t;
}
function qt(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function Ji(e) {
  return e.classList ? qt(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function $l(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Pg(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat($l(e[n]), '" '), "").trim();
}
function Zn(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function Qi(e) {
  return e.size !== tt.size || e.x !== tt.x || e.y !== tt.y || e.rotate !== tt.rotate || e.flipX || e.flipY;
}
function jg(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: r
  } = e;
  const i = {
    transform: "translate(".concat(n / 2, " 256)")
  }, a = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), o = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), s = "rotate(".concat(t.rotate, " 0 0)"), u = {
    transform: "".concat(a, " ").concat(o, " ").concat(s)
  }, l = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: i,
    inner: u,
    path: l
  };
}
function Rg(e) {
  let {
    transform: t,
    width: n = Jr,
    height: r = Jr,
    startCentered: i = !1
  } = e, a = "";
  return i && Il ? a += "translate(".concat(t.x / gt - n / 2, "em, ").concat(t.y / gt - r / 2, "em) ") : i ? a += "translate(calc(-50% + ".concat(t.x / gt, "em), calc(-50% + ").concat(t.y / gt, "em)) ") : a += "translate(".concat(t.x / gt, "em, ").concat(t.y / gt, "em) "), a += "scale(".concat(t.size / gt * (t.flipX ? -1 : 1), ", ").concat(t.size / gt * (t.flipY ? -1 : 1), ") "), a += "rotate(".concat(t.rotate, "deg) "), a;
}
var _g = `:root, :host {
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
function Ul() {
  const e = Ll, t = Fl, n = W.cssPrefix, r = W.replacementClass;
  let i = _g;
  if (n !== e || r !== t) {
    const a = new RegExp("\\.".concat(e, "\\-"), "g"), o = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    i = i.replace(a, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(s, ".".concat(r));
  }
  return i;
}
let So = !1;
function Ir() {
  W.autoAddCss && !So && (Ag(Ul()), So = !0);
}
var Lg = {
  mixout() {
    return {
      dom: {
        css: Ul,
        insertCss: Ir
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        Ir();
      },
      beforeI2svg() {
        Ir();
      }
    };
  }
};
const dt = xt || {};
dt[ft] || (dt[ft] = {});
dt[ft].styles || (dt[ft].styles = {});
dt[ft].hooks || (dt[ft].hooks = {});
dt[ft].shims || (dt[ft].shims = []);
var nt = dt[ft];
const Hl = [], Wl = function() {
  be.removeEventListener("DOMContentLoaded", Wl), zn = 1, Hl.map((e) => e());
};
let zn = !1;
ht && (zn = (be.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(be.readyState), zn || be.addEventListener("DOMContentLoaded", Wl));
function Fg(e) {
  ht && (zn ? setTimeout(e, 0) : Hl.push(e));
}
function xn(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? $l(e) : "<".concat(t, " ").concat(Pg(n), ">").concat(r.map(xn).join(""), "</").concat(t, ">");
}
function Co(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var Pr = function(t, n, r, i) {
  var a = Object.keys(t), o = a.length, s = n, u, l, c;
  for (r === void 0 ? (u = 1, c = t[a[0]]) : (u = 0, c = r); u < o; u++)
    l = a[u], c = s(c, t[l], l, t);
  return c;
};
function Mg(e) {
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
function ni(e) {
  const t = Mg(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Dg(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), i;
  return r >= 55296 && r <= 56319 && n > t + 1 && (i = e.charCodeAt(t + 1), i >= 56320 && i <= 57343) ? (r - 55296) * 1024 + i - 56320 + 65536 : r;
}
function To(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function ri(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, i = To(t);
  typeof nt.hooks.addPack == "function" && !r ? nt.hooks.addPack(e, To(t)) : nt.styles[e] = N(N({}, nt.styles[e] || {}), i), e === "fas" && ri("fa", t);
}
const {
  styles: dn,
  shims: zg
} = nt, Vl = Object.keys(Xi), Bg = Vl.reduce((e, t) => (e[t] = Object.keys(Xi[t]), e), {});
let Zi = null, Yl = {}, ql = {}, Kl = {}, Gl = {}, Xl = {};
function $g(e) {
  return ~Cg.indexOf(e);
}
function Ug(e, t) {
  const n = t.split("-"), r = n[0], i = n.slice(1).join("-");
  return r === e && i !== "" && !$g(i) ? i : null;
}
const Jl = () => {
  const e = (r) => Pr(dn, (i, a, o) => (i[o] = Pr(a, r, {}), i), {});
  Yl = e((r, i, a) => (i[3] && (r[i[3]] = a), i[2] && i[2].filter((s) => typeof s == "number").forEach((s) => {
    r[s.toString(16)] = a;
  }), r)), ql = e((r, i, a) => (r[a] = a, i[2] && i[2].filter((s) => typeof s == "string").forEach((s) => {
    r[s] = a;
  }), r)), Xl = e((r, i, a) => {
    const o = i[2];
    return r[a] = a, o.forEach((s) => {
      r[s] = a;
    }), r;
  });
  const t = "far" in dn || W.autoFetchSvg, n = Pr(zg, (r, i) => {
    const a = i[0];
    let o = i[1];
    const s = i[2];
    return o === "far" && !t && (o = "fas"), typeof a == "string" && (r.names[a] = {
      prefix: o,
      iconName: s
    }), typeof a == "number" && (r.unicodes[a.toString(16)] = {
      prefix: o,
      iconName: s
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  Kl = n.names, Gl = n.unicodes, Zi = er(W.styleDefault, {
    family: W.familyDefault
  });
};
Og((e) => {
  Zi = er(e.styleDefault, {
    family: W.familyDefault
  });
});
Jl();
function ea(e, t) {
  return (Yl[e] || {})[t];
}
function Hg(e, t) {
  return (ql[e] || {})[t];
}
function St(e, t) {
  return (Xl[e] || {})[t];
}
function Ql(e) {
  return Kl[e] || {
    prefix: null,
    iconName: null
  };
}
function Wg(e) {
  const t = Gl[e], n = ea("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function bt() {
  return Zi;
}
const Zl = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function Vg(e) {
  let t = je;
  const n = Vl.reduce((r, i) => (r[i] = "".concat(W.cssPrefix, "-").concat(i), r), {});
  return Rl.forEach((r) => {
    (e.includes(n[r]) || e.some((i) => Bg[r].includes(i))) && (t = r);
  }), t;
}
function er(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = je
  } = t, r = vg[n][e];
  if (n === Qn && !e)
    return "fad";
  const i = ko[n][e] || ko[n][r], a = e in nt.styles ? e : null;
  return i || a || null;
}
function Yg(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const i = Ug(W.cssPrefix, r);
    i ? n = i : r && t.push(r);
  }), {
    iconName: n,
    rest: t
  };
}
function No(e) {
  return e.sort().filter((t, n, r) => r.indexOf(t) === n);
}
function tr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t;
  let r = null;
  const i = Xr.concat(lg), a = No(e.filter((f) => i.includes(f))), o = No(e.filter((f) => !Xr.includes(f))), s = a.filter((f) => (r = f, !jl.includes(f))), [u = null] = s, l = Vg(a), c = N(N({}, Yg(o)), {}, {
    prefix: er(u, {
      family: l
    })
  });
  return N(N(N({}, c), Xg({
    values: e,
    family: l,
    styles: dn,
    config: W,
    canonical: c,
    givenPrefix: r
  })), qg(n, r, c));
}
function qg(e, t, n) {
  let {
    prefix: r,
    iconName: i
  } = n;
  if (e || !r || !i)
    return {
      prefix: r,
      iconName: i
    };
  const a = t === "fa" ? Ql(i) : {}, o = St(r, i);
  return i = a.iconName || o || i, r = a.prefix || r, r === "far" && !dn.far && dn.fas && !W.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: i
  };
}
const Kg = Rl.filter((e) => e !== je || e !== Qn), Gg = Object.keys(Gr).filter((e) => e !== je).map((e) => Object.keys(Gr[e])).flat();
function Xg(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: i = "",
    styles: a = {},
    config: o = {}
  } = e, s = n === Qn, u = t.includes("fa-duotone") || t.includes("fad"), l = o.familyDefault === "duotone", c = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!s && (u || l || c) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && Kg.includes(n) && (Object.keys(a).find((p) => Gg.includes(p)) || o.autoFetchSvg)) {
    const p = eg.get(n).defaultShortPrefixId;
    r.prefix = p, r.iconName = St(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || i === "fa") && (r.prefix = bt() || "fas"), r;
}
class Jg {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const i = n.reduce(this._pullDefinitions, {});
    Object.keys(i).forEach((a) => {
      this.definitions[a] = N(N({}, this.definitions[a] || {}), i[a]), ri(a, i[a]);
      const o = Xi[je][a];
      o && ri(o, i[a]), Jl();
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
        icon: s
      } = r[i], u = s[2];
      t[a] || (t[a] = {}), u.length > 0 && u.forEach((l) => {
        typeof l == "string" && (t[a][l] = s);
      }), t[a][o] = s;
    }), t;
  }
}
let Oo = [], Ft = {};
const Bt = {}, Qg = Object.keys(Bt);
function Zg(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return Oo = e, Ft = {}, Object.keys(Bt).forEach((r) => {
    Qg.indexOf(r) === -1 && delete Bt[r];
  }), Oo.forEach((r) => {
    const i = r.mixout ? r.mixout() : {};
    if (Object.keys(i).forEach((a) => {
      typeof i[a] == "function" && (n[a] = i[a]), typeof i[a] == "object" && Object.keys(i[a]).forEach((o) => {
        n[a] || (n[a] = {}), n[a][o] = i[a][o];
      });
    }), r.hooks) {
      const a = r.hooks();
      Object.keys(a).forEach((o) => {
        Ft[o] || (Ft[o] = []), Ft[o].push(a[o]);
      });
    }
    r.provides && r.provides(Bt);
  }), n;
}
function ii(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    r[i - 2] = arguments[i];
  return (Ft[e] || []).forEach((o) => {
    t = o.apply(null, [t, ...r]);
  }), t;
}
function Tt(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (Ft[e] || []).forEach((a) => {
    a.apply(null, n);
  });
}
function vt() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return Bt[e] ? Bt[e].apply(null, t) : void 0;
}
function ai(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || bt();
  if (t)
    return t = St(n, t) || t, Co(eu.definitions, n, t) || Co(nt.styles, n, t);
}
const eu = new Jg(), ey = () => {
  W.autoReplaceSvg = !1, W.observeMutations = !1, Tt("noAuto");
}, ty = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return ht ? (Tt("beforeI2svg", e), vt("pseudoElements2svg", e), vt("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    W.autoReplaceSvg === !1 && (W.autoReplaceSvg = !0), W.observeMutations = !0, Fg(() => {
      ry({
        autoReplaceSvgRoot: t
      }), Tt("watch", e);
    });
  }
}, ny = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: St(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = er(e[0]);
      return {
        prefix: n,
        iconName: St(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(W.cssPrefix, "-")) > -1 || e.match(wg))) {
      const t = tr(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || bt(),
        iconName: St(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = bt();
      return {
        prefix: t,
        iconName: St(t, e) || e
      };
    }
  }
}, Ve = {
  noAuto: ey,
  config: W,
  dom: ty,
  parse: ny,
  library: eu,
  findIconDefinition: ai,
  toHtml: xn
}, ry = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = be
  } = e;
  (Object.keys(nt.styles).length > 0 || W.autoFetchSvg) && ht && W.autoReplaceSvg && Ve.dom.i2svg({
    node: t
  });
};
function nr(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => xn(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!ht) return;
      const n = be.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function iy(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: i,
    styles: a,
    transform: o
  } = e;
  if (Qi(o) && n.found && !r.found) {
    const {
      width: s,
      height: u
    } = n, l = {
      x: s / u / 2,
      y: 0.5
    };
    i.style = Zn(N(N({}, a), {}, {
      "transform-origin": "".concat(l.x + o.x / 16, "em ").concat(l.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: i,
    children: t
  }];
}
function ay(e) {
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
      attributes: N(N({}, i), {}, {
        id: o
      }),
      children: r
    }]
  }];
}
function ta(e) {
  const {
    icons: {
      main: t,
      mask: n
    },
    prefix: r,
    iconName: i,
    transform: a,
    symbol: o,
    title: s,
    maskId: u,
    titleId: l,
    extra: c,
    watchable: f = !1
  } = e, {
    width: p,
    height: d
  } = n.found ? n : t, b = ag.includes(r), x = [W.replacementClass, i ? "".concat(W.cssPrefix, "-").concat(i) : ""].filter((k) => c.classes.indexOf(k) === -1).filter((k) => k !== "" || !!k).concat(c.classes).join(" ");
  let S = {
    children: [],
    attributes: N(N({}, c.attributes), {}, {
      "data-prefix": r,
      "data-icon": i,
      class: x,
      role: c.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(p, " ").concat(d)
    })
  };
  const v = b && !~c.classes.indexOf("fa-fw") ? {
    width: "".concat(p / d * 16 * 0.0625, "em")
  } : {};
  f && (S.attributes[Ct] = ""), s && (S.children.push({
    tag: "title",
    attributes: {
      id: S.attributes["aria-labelledby"] || "title-".concat(l || fn())
    },
    children: [s]
  }), delete S.attributes.title);
  const O = N(N({}, S), {}, {
    prefix: r,
    iconName: i,
    main: t,
    mask: n,
    maskId: u,
    transform: a,
    symbol: o,
    styles: N(N({}, v), c.styles)
  }), {
    children: C,
    attributes: I
  } = n.found && t.found ? vt("generateAbstractMask", O) || {
    children: [],
    attributes: {}
  } : vt("generateAbstractIcon", O) || {
    children: [],
    attributes: {}
  };
  return O.children = C, O.attributes = I, o ? ay(O) : iy(O);
}
function Ao(e) {
  const {
    content: t,
    width: n,
    height: r,
    transform: i,
    title: a,
    extra: o,
    watchable: s = !1
  } = e, u = N(N(N({}, o.attributes), a ? {
    title: a
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  s && (u[Ct] = "");
  const l = N({}, o.styles);
  Qi(i) && (l.transform = Rg({
    transform: i,
    startCentered: !0,
    width: n,
    height: r
  }), l["-webkit-transform"] = l.transform);
  const c = Zn(l);
  c.length > 0 && (u.style = c);
  const f = [];
  return f.push({
    tag: "span",
    attributes: u,
    children: [t]
  }), a && f.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [a]
  }), f;
}
function oy(e) {
  const {
    content: t,
    title: n,
    extra: r
  } = e, i = N(N(N({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), a = Zn(r.styles);
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
  styles: jr
} = nt;
function oi(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let i = null;
  return Array.isArray(r) ? i = {
    tag: "g",
    attributes: {
      class: "".concat(W.cssPrefix, "-").concat(Ar.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(W.cssPrefix, "-").concat(Ar.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(W.cssPrefix, "-").concat(Ar.PRIMARY),
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
const sy = {
  found: !1,
  width: 512,
  height: 512
};
function ly(e, t) {
  !Ml && !W.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function si(e, t) {
  let n = t;
  return t === "fa" && W.styleDefault !== null && (t = bt()), new Promise((r, i) => {
    if (n === "fa") {
      const a = Ql(e) || {};
      e = a.iconName || e, t = a.prefix || t;
    }
    if (e && t && jr[t] && jr[t][e]) {
      const a = jr[t][e];
      return r(oi(a));
    }
    ly(e, t), r(N(N({}, sy), {}, {
      icon: W.showMissingIcons && e ? vt("missingIconAbstract") || {} : {}
    }));
  });
}
const Io = () => {
}, li = W.measurePerformance && On && On.mark && On.measure ? On : {
  mark: Io,
  measure: Io
}, nn = 'FA "6.7.2"', uy = (e) => (li.mark("".concat(nn, " ").concat(e, " begins")), () => tu(e)), tu = (e) => {
  li.mark("".concat(nn, " ").concat(e, " ends")), li.measure("".concat(nn, " ").concat(e), "".concat(nn, " ").concat(e, " begins"), "".concat(nn, " ").concat(e, " ends"));
};
var na = {
  begin: uy,
  end: tu
};
const Pn = () => {
};
function Po(e) {
  return typeof (e.getAttribute ? e.getAttribute(Ct) : null) == "string";
}
function cy(e) {
  const t = e.getAttribute ? e.getAttribute(Ki) : null, n = e.getAttribute ? e.getAttribute(Gi) : null;
  return t && n;
}
function fy(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(W.replacementClass);
}
function dy() {
  return W.autoReplaceSvg === !0 ? jn.replace : jn[W.autoReplaceSvg] || jn.replace;
}
function py(e) {
  return be.createElementNS("http://www.w3.org/2000/svg", e);
}
function hy(e) {
  return be.createElement(e);
}
function nu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? py : hy
  } = t;
  if (typeof e == "string")
    return be.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(a) {
    r.setAttribute(a, e.attributes[a]);
  }), (e.children || []).forEach(function(a) {
    r.appendChild(nu(a, {
      ceFn: n
    }));
  }), r;
}
function my(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const jn = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(nu(n), t);
      }), t.getAttribute(Ct) === null && W.keepOriginalSource) {
        let n = be.createComment(my(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~Ji(t).indexOf(W.replacementClass))
      return jn.replace(e);
    const r = new RegExp("".concat(W.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const a = n[0].attributes.class.split(" ").reduce((o, s) => (s === W.replacementClass || s.match(r) ? o.toSvg.push(s) : o.toNode.push(s), o), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = a.toSvg.join(" "), a.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", a.toNode.join(" "));
    }
    const i = n.map((a) => xn(a)).join(`
`);
    t.setAttribute(Ct, ""), t.innerHTML = i;
  }
};
function jo(e) {
  e();
}
function ru(e, t) {
  const n = typeof t == "function" ? t : Pn;
  if (e.length === 0)
    n();
  else {
    let r = jo;
    W.mutateApproach === xg && (r = xt.requestAnimationFrame || jo), r(() => {
      const i = dy(), a = na.begin("mutate");
      e.map(i), a(), n();
    });
  }
}
let ra = !1;
function iu() {
  ra = !0;
}
function ui() {
  ra = !1;
}
let Bn = null;
function Ro(e) {
  if (!bo || !W.observeMutations)
    return;
  const {
    treeCallback: t = Pn,
    nodeCallback: n = Pn,
    pseudoElementsCallback: r = Pn,
    observeMutationsRoot: i = be
  } = e;
  Bn = new bo((a) => {
    if (ra) return;
    const o = bt();
    qt(a).forEach((s) => {
      if (s.type === "childList" && s.addedNodes.length > 0 && !Po(s.addedNodes[0]) && (W.searchPseudoElements && r(s.target), t(s.target)), s.type === "attributes" && s.target.parentNode && W.searchPseudoElements && r(s.target.parentNode), s.type === "attributes" && Po(s.target) && ~Sg.indexOf(s.attributeName))
        if (s.attributeName === "class" && cy(s.target)) {
          const {
            prefix: u,
            iconName: l
          } = tr(Ji(s.target));
          s.target.setAttribute(Ki, u || o), l && s.target.setAttribute(Gi, l);
        } else fy(s.target) && n(s.target);
    });
  }), ht && Bn.observe(i, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function gy() {
  Bn && Bn.disconnect();
}
function yy(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, i) => {
    const a = i.split(":"), o = a[0], s = a.slice(1);
    return o && s.length > 0 && (r[o] = s.join(":").trim()), r;
  }, {})), n;
}
function xy(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let i = tr(Ji(e));
  return i.prefix || (i.prefix = bt()), t && n && (i.prefix = t, i.iconName = n), i.iconName && i.prefix || (i.prefix && r.length > 0 && (i.iconName = Hg(i.prefix, e.innerText) || ea(i.prefix, ni(e.innerText))), !i.iconName && W.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = e.firstChild.data)), i;
}
function by(e) {
  const t = qt(e.attributes).reduce((i, a) => (i.name !== "class" && i.name !== "style" && (i[a.name] = a.value), i), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return W.autoA11y && (n ? t["aria-labelledby"] = "".concat(W.replacementClass, "-title-").concat(r || fn()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function vy() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: tt,
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
function _o(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: i
  } = xy(e), a = by(e), o = ii("parseNodeAttributes", {}, e);
  let s = t.styleParser ? yy(e) : [];
  return N({
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: tt,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: i,
      styles: s,
      attributes: a
    }
  }, o);
}
const {
  styles: wy
} = nt;
function au(e) {
  const t = W.autoReplaceSvg === "nest" ? _o(e, {
    styleParser: !1
  }) : _o(e);
  return ~t.extra.classes.indexOf(zl) ? vt("generateLayersText", e, t) : vt("generateSvgReplacementMutation", e, t);
}
function Ey() {
  return [...ng, ...Xr];
}
function Lo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!ht) return Promise.resolve();
  const n = be.documentElement.classList, r = (c) => n.add("".concat(Eo, "-").concat(c)), i = (c) => n.remove("".concat(Eo, "-").concat(c)), a = W.autoFetchSvg ? Ey() : jl.concat(Object.keys(wy));
  a.includes("fa") || a.push("fa");
  const o = [".".concat(zl, ":not([").concat(Ct, "])")].concat(a.map((c) => ".".concat(c, ":not([").concat(Ct, "])"))).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  let s = [];
  try {
    s = qt(e.querySelectorAll(o));
  } catch {
  }
  if (s.length > 0)
    r("pending"), i("complete");
  else
    return Promise.resolve();
  const u = na.begin("onTree"), l = s.reduce((c, f) => {
    try {
      const p = au(f);
      p && c.push(p);
    } catch (p) {
      Ml || p.name === "MissingIcon" && console.error(p);
    }
    return c;
  }, []);
  return new Promise((c, f) => {
    Promise.all(l).then((p) => {
      ru(p, () => {
        r("active"), r("complete"), i("pending"), typeof t == "function" && t(), u(), c();
      });
    }).catch((p) => {
      u(), f(p);
    });
  });
}
function ky(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  au(e).then((n) => {
    n && ru([n], t);
  });
}
function Sy(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : ai(t || {});
    let {
      mask: i
    } = n;
    return i && (i = (i || {}).icon ? i : ai(i || {})), e(r, N(N({}, n), {}, {
      mask: i
    }));
  };
}
const Cy = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = tt,
    symbol: r = !1,
    mask: i = null,
    maskId: a = null,
    title: o = null,
    titleId: s = null,
    classes: u = [],
    attributes: l = {},
    styles: c = {}
  } = t;
  if (!e) return;
  const {
    prefix: f,
    iconName: p,
    icon: d
  } = e;
  return nr(N({
    type: "icon"
  }, e), () => (Tt("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), W.autoA11y && (o ? l["aria-labelledby"] = "".concat(W.replacementClass, "-title-").concat(s || fn()) : (l["aria-hidden"] = "true", l.focusable = "false")), ta({
    icons: {
      main: oi(d),
      mask: i ? oi(i.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: f,
    iconName: p,
    transform: N(N({}, tt), n),
    symbol: r,
    title: o,
    maskId: a,
    titleId: s,
    extra: {
      attributes: l,
      styles: c,
      classes: u
    }
  })));
};
var Ty = {
  mixout() {
    return {
      icon: Sy(Cy)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = Lo, e.nodeCallback = ky, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = be,
        callback: r = () => {
        }
      } = t;
      return Lo(n, r);
    }, e.generateSvgReplacementMutation = function(t, n) {
      const {
        iconName: r,
        title: i,
        titleId: a,
        prefix: o,
        transform: s,
        symbol: u,
        mask: l,
        maskId: c,
        extra: f
      } = n;
      return new Promise((p, d) => {
        Promise.all([si(r, o), l.iconName ? si(l.iconName, l.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((b) => {
          let [x, S] = b;
          p([t, ta({
            icons: {
              main: x,
              mask: S
            },
            prefix: o,
            iconName: r,
            transform: s,
            symbol: u,
            maskId: c,
            title: i,
            titleId: a,
            extra: f,
            watchable: !0
          })]);
        }).catch(d);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: n,
        attributes: r,
        main: i,
        transform: a,
        styles: o
      } = t;
      const s = Zn(o);
      s.length > 0 && (r.style = s);
      let u;
      return Qi(a) && (u = vt("generateAbstractTransformGrouping", {
        main: i,
        transform: a,
        containerWidth: i.width,
        iconWidth: i.width
      })), n.push(u || i.icon), {
        children: n,
        attributes: r
      };
    };
  }
}, Ny = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return nr({
          type: "layer"
        }, () => {
          Tt("beforeDOMElementCreation", {
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
}, Oy = {
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
        return nr({
          type: "counter",
          content: e
        }, () => (Tt("beforeDOMElementCreation", {
          content: e,
          params: t
        }), oy({
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
}, Ay = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = tt,
          title: r = null,
          classes: i = [],
          attributes: a = {},
          styles: o = {}
        } = t;
        return nr({
          type: "text",
          content: e
        }, () => (Tt("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Ao({
          content: e,
          transform: N(N({}, tt), n),
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
      let o = null, s = null;
      if (Il) {
        const u = parseInt(getComputedStyle(t).fontSize, 10), l = t.getBoundingClientRect();
        o = l.width / u, s = l.height / u;
      }
      return W.autoA11y && !r && (a.attributes["aria-hidden"] = "true"), Promise.resolve([t, Ao({
        content: t.innerHTML,
        width: o,
        height: s,
        transform: i,
        title: r,
        extra: a,
        watchable: !0
      })]);
    };
  }
};
const Iy = new RegExp('"', "ug"), Fo = [1105920, 1112319], Mo = N(N(N(N({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), Zm), gg), ug), ci = Object.keys(Mo).reduce((e, t) => (e[t.toLowerCase()] = Mo[t], e), {}), Py = Object.keys(ci).reduce((e, t) => {
  const n = ci[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function jy(e) {
  const t = e.replace(Iy, ""), n = Dg(t, 0), r = n >= Fo[0] && n <= Fo[1], i = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: ni(i ? t[0] : t),
    isSecondary: r || i
  };
}
function Ry(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), i = isNaN(r) ? "normal" : r;
  return (ci[n] || {})[i] || Py[n];
}
function Do(e, t) {
  const n = "".concat(yg).concat(t.replace(":", "-"));
  return new Promise((r, i) => {
    if (e.getAttribute(n) !== null)
      return r();
    const o = qt(e.children).filter((p) => p.getAttribute(Qr) === t)[0], s = xt.getComputedStyle(e, t), u = s.getPropertyValue("font-family"), l = u.match(Eg), c = s.getPropertyValue("font-weight"), f = s.getPropertyValue("content");
    if (o && !l)
      return e.removeChild(o), r();
    if (l && f !== "none" && f !== "") {
      const p = s.getPropertyValue("content");
      let d = Ry(u, c);
      const {
        value: b,
        isSecondary: x
      } = jy(p), S = l[0].startsWith("FontAwesome");
      let v = ea(d, b), O = v;
      if (S) {
        const C = Wg(b);
        C.iconName && C.prefix && (v = C.iconName, d = C.prefix);
      }
      if (v && !x && (!o || o.getAttribute(Ki) !== d || o.getAttribute(Gi) !== O)) {
        e.setAttribute(n, O), o && e.removeChild(o);
        const C = vy(), {
          extra: I
        } = C;
        I.attributes[Qr] = t, si(v, d).then((k) => {
          const w = ta(N(N({}, C), {}, {
            icons: {
              main: k,
              mask: Zl()
            },
            prefix: d,
            iconName: O,
            extra: I,
            watchable: !0
          })), z = be.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(z, e.firstChild) : e.appendChild(z), z.outerHTML = w.map((ee) => xn(ee)).join(`
`), e.removeAttribute(n), r();
        }).catch(i);
      } else
        r();
    } else
      r();
  });
}
function _y(e) {
  return Promise.all([Do(e, "::before"), Do(e, "::after")]);
}
function Ly(e) {
  return e.parentNode !== document.head && !~bg.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Qr) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function zo(e) {
  if (ht)
    return new Promise((t, n) => {
      const r = qt(e.querySelectorAll("*")).filter(Ly).map(_y), i = na.begin("searchPseudoElements");
      iu(), Promise.all(r).then(() => {
        i(), ui(), t();
      }).catch(() => {
        i(), ui(), n();
      });
    });
}
var Fy = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = zo, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = be
      } = t;
      W.searchPseudoElements && zo(n);
    };
  }
};
let Bo = !1;
var My = {
  mixout() {
    return {
      dom: {
        unwatch() {
          iu(), Bo = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        Ro(ii("mutationObserverCallbacks", {}));
      },
      noAuto() {
        gy();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        Bo ? ui() : Ro(ii("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const $o = (e) => {
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
var Dy = {
  mixout() {
    return {
      parse: {
        transform: (e) => $o(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = $o(n)), e;
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
      }, s = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), u = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), l = "rotate(".concat(r.rotate, " 0 0)"), c = {
        transform: "".concat(s, " ").concat(u, " ").concat(l)
      }, f = {
        transform: "translate(".concat(a / 2 * -1, " -256)")
      }, p = {
        outer: o,
        inner: c,
        path: f
      };
      return {
        tag: "g",
        attributes: N({}, p.outer),
        children: [{
          tag: "g",
          attributes: N({}, p.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: N(N({}, n.icon.attributes), p.path)
          }]
        }]
      };
    };
  }
};
const Rr = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Uo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function zy(e) {
  return e.tag === "g" ? e.children : [e];
}
var By = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? tr(n.split(" ").map((i) => i.trim())) : Zl();
        return r.prefix || (r.prefix = bt()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
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
        transform: s
      } = t;
      const {
        width: u,
        icon: l
      } = i, {
        width: c,
        icon: f
      } = a, p = jg({
        transform: s,
        containerWidth: c,
        iconWidth: u
      }), d = {
        tag: "rect",
        attributes: N(N({}, Rr), {}, {
          fill: "white"
        })
      }, b = l.children ? {
        children: l.children.map(Uo)
      } : {}, x = {
        tag: "g",
        attributes: N({}, p.inner),
        children: [Uo(N({
          tag: l.tag,
          attributes: N(N({}, l.attributes), p.path)
        }, b))]
      }, S = {
        tag: "g",
        attributes: N({}, p.outer),
        children: [x]
      }, v = "mask-".concat(o || fn()), O = "clip-".concat(o || fn()), C = {
        tag: "mask",
        attributes: N(N({}, Rr), {}, {
          id: v,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [d, S]
      }, I = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: O
          },
          children: zy(f)
        }, C]
      };
      return n.push(I, {
        tag: "rect",
        attributes: N({
          fill: "currentColor",
          "clip-path": "url(#".concat(O, ")"),
          mask: "url(#".concat(v, ")")
        }, Rr)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, $y = {
  provides(e) {
    let t = !1;
    xt.matchMedia && (t = xt.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const n = [], r = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: N(N({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const a = N(N({}, i), {}, {
        attributeName: "opacity"
      }), o = {
        tag: "circle",
        attributes: N(N({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || o.children.push({
        tag: "animate",
        attributes: N(N({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: N(N({}, a), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(o), n.push({
        tag: "path",
        attributes: N(N({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: N(N({}, a), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || n.push({
        tag: "path",
        attributes: N(N({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: N(N({}, a), {}, {
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
}, Uy = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, Hy = [Lg, Ty, Ny, Oy, Ay, Fy, My, Dy, By, $y, Uy];
Zg(Hy, {
  mixoutsTo: Ve
});
Ve.noAuto;
Ve.config;
Ve.library;
Ve.dom;
const fi = Ve.parse;
Ve.findIconDefinition;
Ve.toHtml;
const Wy = Ve.icon;
Ve.layer;
Ve.text;
Ve.counter;
function Ho(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ze(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ho(Object(n), !0).forEach(function(r) {
      Mt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ho(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function $n(e) {
  "@babel/helpers - typeof";
  return $n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $n(e);
}
function Mt(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Vy(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Yy(e, t) {
  if (e == null) return {};
  var n = Vy(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function di(e) {
  return qy(e) || Ky(e) || Gy(e) || Xy();
}
function qy(e) {
  if (Array.isArray(e)) return pi(e);
}
function Ky(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Gy(e, t) {
  if (e) {
    if (typeof e == "string") return pi(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return pi(e, t);
  }
}
function pi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Xy() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Jy(e) {
  var t, n = e.beat, r = e.fade, i = e.beatFade, a = e.bounce, o = e.shake, s = e.flash, u = e.spin, l = e.spinPulse, c = e.spinReverse, f = e.pulse, p = e.fixedWidth, d = e.inverse, b = e.border, x = e.listItem, S = e.flip, v = e.size, O = e.rotation, C = e.pull, I = (t = {
    "fa-beat": n,
    "fa-fade": r,
    "fa-beat-fade": i,
    "fa-bounce": a,
    "fa-shake": o,
    "fa-flash": s,
    "fa-spin": u,
    "fa-spin-reverse": c,
    "fa-spin-pulse": l,
    "fa-pulse": f,
    "fa-fw": p,
    "fa-inverse": d,
    "fa-border": b,
    "fa-li": x,
    "fa-flip": S === !0,
    "fa-flip-horizontal": S === "horizontal" || S === "both",
    "fa-flip-vertical": S === "vertical" || S === "both"
  }, Mt(t, "fa-".concat(v), typeof v < "u" && v !== null), Mt(t, "fa-rotate-".concat(O), typeof O < "u" && O !== null && O !== 0), Mt(t, "fa-pull-".concat(C), typeof C < "u" && C !== null), Mt(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(I).map(function(k) {
    return I[k] ? k : null;
  }).filter(function(k) {
    return k;
  });
}
function Qy(e) {
  return e = e - 0, e === e;
}
function ou(e) {
  return Qy(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var Zy = ["style"];
function ex(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function tx(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), i = ou(n.slice(0, r)), a = n.slice(r + 1).trim();
    return i.startsWith("webkit") ? t[ex(i)] = a : t[i] = a, t;
  }, {});
}
function su(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(u) {
    return su(e, u);
  }), i = Object.keys(t.attributes || {}).reduce(function(u, l) {
    var c = t.attributes[l];
    switch (l) {
      case "class":
        u.attrs.className = c, delete t.attributes.class;
        break;
      case "style":
        u.attrs.style = tx(c);
        break;
      default:
        l.indexOf("aria-") === 0 || l.indexOf("data-") === 0 ? u.attrs[l.toLowerCase()] = c : u.attrs[ou(l)] = c;
    }
    return u;
  }, {
    attrs: {}
  }), a = n.style, o = a === void 0 ? {} : a, s = Yy(n, Zy);
  return i.attrs.style = Ze(Ze({}, i.attrs.style), o), e.apply(void 0, [t.tag, Ze(Ze({}, i.attrs), s)].concat(di(r)));
}
var lu = !1;
try {
  lu = process.env.NODE_ENV === "production";
} catch {
}
function nx() {
  if (!lu && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Wo(e) {
  if (e && $n(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (fi.icon)
    return fi.icon(e);
  if (e === null)
    return null;
  if (e && $n(e) === "object" && e.prefix && e.iconName)
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
function _r(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? Mt({}, e, t) : {};
}
var Vo = {
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
}, Un = /* @__PURE__ */ Ke.forwardRef(function(e, t) {
  var n = Ze(Ze({}, Vo), e), r = n.icon, i = n.mask, a = n.symbol, o = n.className, s = n.title, u = n.titleId, l = n.maskId, c = Wo(r), f = _r("classes", [].concat(di(Jy(n)), di((o || "").split(" ")))), p = _r("transform", typeof n.transform == "string" ? fi.transform(n.transform) : n.transform), d = _r("mask", Wo(i)), b = Wy(c, Ze(Ze(Ze(Ze({}, f), p), d), {}, {
    symbol: a,
    title: s,
    titleId: u,
    maskId: l
  }));
  if (!b)
    return nx("Could not find icon", c), null;
  var x = b.abstract, S = {
    ref: t
  };
  return Object.keys(n).forEach(function(v) {
    Vo.hasOwnProperty(v) || (S[v] = n[v]);
  }), rx(x[0], S);
});
Un.displayName = "FontAwesomeIcon";
Un.propTypes = {
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
var rx = su.bind(null, Ke.createElement);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const ix = {
  prefix: "fas",
  iconName: "sun",
  icon: [512, 512, [9728], "f185", "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]
}, ax = {
  prefix: "fas",
  iconName: "moon",
  icon: [384, 512, [127769, 9214], "f186", "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]
}, bx = () => {
  const [e, t] = rt("light"), [n, r] = rt(!1);
  Pe(() => {
    const a = localStorage.getItem("theme") || "light";
    t(a), r(!0);
  }, []), Pe(() => {
    n && (document.documentElement.setAttribute("data-theme", e), localStorage.setItem("theme", e));
  }, [e, n]);
  const i = () => {
    t((a) => a === "light" ? "dark" : "light");
  };
  return n ? /* @__PURE__ */ g.jsx(Sn, { expand: "lg", className: "footer-header-color", children: /* @__PURE__ */ g.jsxs(Ge, { fluid: !0, children: [
    /* @__PURE__ */ g.jsxs("div", { className: "dark-switch", children: [
      /* @__PURE__ */ g.jsx(
        "input",
        {
          type: "checkbox",
          className: "checkbox",
          id: "checkbox",
          onChange: i,
          checked: e === "dark"
        }
      ),
      /* @__PURE__ */ g.jsxs("label", { htmlFor: "checkbox", className: "checkbox-label", children: [
        /* @__PURE__ */ g.jsx(Un, { icon: ax, style: { marginRight: "10px" } }),
        /* @__PURE__ */ g.jsx(Un, { icon: ix }),
        /* @__PURE__ */ g.jsx("span", { className: "ball" })
      ] })
    ] }),
    /* @__PURE__ */ g.jsx(Sn.Brand, { className: "navbar-brand bold", href: "#", children: "Abhi" }),
    /* @__PURE__ */ g.jsx(Sn.Toggle, { "aria-controls": "navbarScroll" }),
    /* @__PURE__ */ g.jsxs(Sn.Collapse, { id: "navbarScroll", children: [
      /* @__PURE__ */ g.jsxs(Pt, { className: "me-auto my-2 my-lg-0", style: { maxHeight: "150px" }, navbarScroll: !0, children: [
        /* @__PURE__ */ g.jsx(Pt.Link, { className: "nav-link bold-links", href: "/about", children: "About" }),
        /* @__PURE__ */ g.jsx(Pt.Link, { className: "nav-link bold-links", href: "/tech", children: "Tech" }),
        /* @__PURE__ */ g.jsx(Pt.Link, { className: "nav-link bold-links", href: "/project", children: "Project" }),
        /* @__PURE__ */ g.jsx(Pt.Link, { className: "nav-link bold-links", href: "/life", children: "Life" }),
        /* @__PURE__ */ g.jsx(Pt.Link, { className: "nav-link bold-links", href: "/contact", children: "Contact" })
      ] }),
      /* @__PURE__ */ g.jsxs(Ye, { className: "d-flex", children: [
        /* @__PURE__ */ g.jsx(
          Ye.Control,
          {
            type: "search",
            placeholder: "Search",
            className: "me-2 custom-border form-control custom-placeholder",
            "aria-label": "Search"
          }
        ),
        /* @__PURE__ */ g.jsx(Ht, { className: "button-custom-color", children: "Search" })
      ] })
    ] })
  ] }) }) : null;
}, vx = ({ description: e }) => /* @__PURE__ */ g.jsx(Ge, { children: /* @__PURE__ */ g.jsx(Ie, { className: "rounded background-color-body mt-3 p-2", children: /* @__PURE__ */ g.jsx(we, { children: /* @__PURE__ */ g.jsx(
  "p",
  {
    className: "mb-2 mt-2 font-color-class bio-desc justify-content",
    dangerouslySetInnerHTML: { __html: e }
  }
) }) }) }), wx = ({
  github_link: e,
  linkedin_link: t,
  twitter_link: n,
  leetcode_link: r,
  gitlab_link: i,
  kaggle_link: a,
  medium_link: o
}) => /* @__PURE__ */ g.jsx(Ge, { children: /* @__PURE__ */ g.jsx(Ie, { className: "rounded background-color-body mt-3 p-3 text-center d-flex justify-content-center", children: /* @__PURE__ */ g.jsxs(we, { className: "col-12 d-flex justify-content-center flex-wrap", children: [
  e && /* @__PURE__ */ g.jsx("a", { href: e, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ g.jsx("img", { src: "github.svg", className: "leetcode-icon hover-effect-github mx-2", width: "33", height: "33", alt: "GitHub" }) }),
  t && /* @__PURE__ */ g.jsx("a", { href: t, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ g.jsx("img", { src: "linkedin-color.svg", className: "leetcode-icon hover-effect-linkedin mx-2", width: "33", height: "33", alt: "LinkedIn" }) }),
  n && /* @__PURE__ */ g.jsx("a", { href: n, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ g.jsx("img", { src: "twitter.svg", className: "leetcode-icon hover-effect-twitter mx-2", width: "33", height: "33", alt: "Twitter" }) }),
  r && /* @__PURE__ */ g.jsx("a", { href: r, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ g.jsx("img", { src: "leetcode-color.svg", className: "leetcode-icon hover-effect-leetcode mx-2", width: "33", height: "33", alt: "LeetCode" }) }),
  i && /* @__PURE__ */ g.jsx("a", { href: i, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ g.jsx("img", { src: "gitlab-color.svg", className: "leetcode-icon hover-effect-gitlab mx-2", width: "33", height: "33", alt: "GitLab" }) }),
  a && /* @__PURE__ */ g.jsx("a", { href: a, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ g.jsx("img", { src: "kaggle-color.svg", className: "leetcode-icon hover-effect-kaggle mx-2", width: "33", height: "33", alt: "Kaggle" }) }),
  o && /* @__PURE__ */ g.jsx("a", { href: o, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ g.jsx("img", { src: "medium.svg", className: "leetcode-icon hover-effect-medium mx-2", width: "33", height: "33", alt: "Medium" }) })
] }) }) }), Ex = () => /* @__PURE__ */ g.jsx(Ge, { children: /* @__PURE__ */ g.jsx(Ie, { className: "mt-3" }) }), ox = ({ card_para: e, img_src: t, card_url: n, card_title: r }) => /* @__PURE__ */ g.jsxs(Fe, { className: "", children: [
  /* @__PURE__ */ g.jsx(Fe.Img, { className: "card-img-container p-3 ", variant: "top", src: t }),
  /* @__PURE__ */ g.jsxs(Fe.Body, { children: [
    /* @__PURE__ */ g.jsx("div", { className: "font-color-class text-center card-title", children: /* @__PURE__ */ g.jsx(Fe.Title, { children: r }) }),
    /* @__PURE__ */ g.jsx(Fe.Text, { className: "card-text font-color-class justify-content", children: e }),
    /* @__PURE__ */ g.jsx("div", { className: "text-center", children: /* @__PURE__ */ g.jsx(Ht, { className: "button-custom-color", href: n, children: "Explore" }) })
  ] })
] }), kx = ({ cardData: e }) => {
  const [t, n] = rt(1), r = 9, i = Math.ceil(e.length / r), a = e.slice((t - 1) * r, t * r), o = (s) => {
    s >= 1 && s <= i && n(s);
  };
  return /* @__PURE__ */ g.jsxs(Ge, { className: "p-0", children: [
    /* @__PURE__ */ g.jsx(Ie, { className: "", children: a.map((s, u) => /* @__PURE__ */ g.jsx(we, { xs: 12, sm: 12, md: 4, className: "mt-3", children: /* @__PURE__ */ g.jsx(
      ox,
      {
        card_title: s.card_title,
        card_para: s.card_para,
        img_src: s.img_src,
        card_url: s.card_url
      }
    ) }, u)) }),
    i > 1 && /* @__PURE__ */ g.jsx(Ie, { className: "rounded background-color-body mt-3 p-3 justify-content-center m-0", children: /* @__PURE__ */ g.jsx(we, { className: "text-center", children: /* @__PURE__ */ g.jsxs(jt, { size: "sm", className: "justify-content-center", children: [
      /* @__PURE__ */ g.jsx(jt.First, { onClick: () => o(1), disabled: t === 1 }),
      /* @__PURE__ */ g.jsx(jt.Prev, { onClick: () => o(t - 1), disabled: t === 1 }),
      [...Array(i)].map((s, u) => /* @__PURE__ */ g.jsx(
        jt.Item,
        {
          active: u + 1 === t,
          onClick: () => o(u + 1),
          children: u + 1
        },
        u + 1
      )),
      /* @__PURE__ */ g.jsx(jt.Next, { onClick: () => o(t + 1), disabled: t === i }),
      /* @__PURE__ */ g.jsx(jt.Last, { onClick: () => o(i), disabled: t === i })
    ] }) }) })
  ] });
};
export {
  fx as ArticleImage,
  px as CardLists,
  dx as CardTemp,
  kx as CardsPaignation,
  hx as CustomBody,
  mx as Footer,
  gx as HeadingBar,
  yx as MarkDown,
  xx as More,
  bx as NavBar,
  vx as Para,
  wx as SocialMediaLinks,
  Ex as SpaceBlock
};
