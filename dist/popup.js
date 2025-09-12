var Pc = { exports: {} }, me = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var td;
function xy() {
  if (td) return me;
  td = 1;
  var z = Symbol.for("react.transitional.element"), K = Symbol.for("react.fragment");
  function x(m, J, ll) {
    var ul = null;
    if (ll !== void 0 && (ul = "" + ll), J.key !== void 0 && (ul = "" + J.key), "key" in J) {
      ll = {};
      for (var w in J)
        w !== "key" && (ll[w] = J[w]);
    } else ll = J;
    return J = ll.ref, {
      $$typeof: z,
      type: m,
      key: ul,
      ref: J !== void 0 ? J : null,
      props: ll
    };
  }
  return me.Fragment = K, me.jsx = x, me.jsxs = x, me;
}
var ud;
function Gy() {
  return ud || (ud = 1, Pc.exports = xy()), Pc.exports;
}
var C = Gy(), li = { exports: {} }, X = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ad;
function jy() {
  if (ad) return X;
  ad = 1;
  var z = Symbol.for("react.transitional.element"), K = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), J = Symbol.for("react.profiler"), ll = Symbol.for("react.consumer"), ul = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), E = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), al = Symbol.iterator;
  function F(s) {
    return s === null || typeof s != "object" ? null : (s = al && s[al] || s["@@iterator"], typeof s == "function" ? s : null);
  }
  var Ml = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, ql = Object.assign, Fl = {};
  function jl(s, A, M) {
    this.props = s, this.context = A, this.refs = Fl, this.updater = M || Ml;
  }
  jl.prototype.isReactComponent = {}, jl.prototype.setState = function(s, A) {
    if (typeof s != "object" && typeof s != "function" && s != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, s, A, "setState");
  }, jl.prototype.forceUpdate = function(s) {
    this.updater.enqueueForceUpdate(this, s, "forceUpdate");
  };
  function zt() {
  }
  zt.prototype = jl.prototype;
  function bt(s, A, M) {
    this.props = s, this.context = A, this.refs = Fl, this.updater = M || Ml;
  }
  var Rl = bt.prototype = new zt();
  Rl.constructor = bt, ql(Rl, jl.prototype), Rl.isPureReactComponent = !0;
  var Il = Array.isArray, k = { H: null, A: null, T: null, S: null, V: null }, Zl = Object.prototype.hasOwnProperty;
  function Vl(s, A, M, D, H, I) {
    return M = I.ref, {
      $$typeof: z,
      type: s,
      key: A,
      ref: M !== void 0 ? M : null,
      props: I
    };
  }
  function Bl(s, A) {
    return Vl(
      s.type,
      A,
      void 0,
      void 0,
      void 0,
      s.props
    );
  }
  function j(s) {
    return typeof s == "object" && s !== null && s.$$typeof === z;
  }
  function el(s) {
    var A = { "=": "=0", ":": "=2" };
    return "$" + s.replace(/[=:]/g, function(M) {
      return A[M];
    });
  }
  var cl = /\/+/g;
  function $(s, A) {
    return typeof s == "object" && s !== null && s.key != null ? el("" + s.key) : A.toString(36);
  }
  function Pl() {
  }
  function Ll(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (typeof s.status == "string" ? s.then(Pl, Pl) : (s.status = "pending", s.then(
          function(A) {
            s.status === "pending" && (s.status = "fulfilled", s.value = A);
          },
          function(A) {
            s.status === "pending" && (s.status = "rejected", s.reason = A);
          }
        )), s.status) {
          case "fulfilled":
            return s.value;
          case "rejected":
            throw s.reason;
        }
    }
    throw s;
  }
  function _l(s, A, M, D, H) {
    var I = typeof s;
    (I === "undefined" || I === "boolean") && (s = null);
    var G = !1;
    if (s === null) G = !0;
    else
      switch (I) {
        case "bigint":
        case "string":
        case "number":
          G = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case z:
            case K:
              G = !0;
              break;
            case N:
              return G = s._init, _l(
                G(s._payload),
                A,
                M,
                D,
                H
              );
          }
      }
    if (G)
      return H = H(s), G = D === "" ? "." + $(s, 0) : D, Il(H) ? (M = "", G != null && (M = G.replace(cl, "$&/") + "/"), _l(H, A, M, "", function(Kt) {
        return Kt;
      })) : H != null && (j(H) && (H = Bl(
        H,
        M + (H.key == null || s && s.key === H.key ? "" : ("" + H.key).replace(
          cl,
          "$&/"
        ) + "/") + G
      )), A.push(H)), 1;
    G = 0;
    var lt = D === "" ? "." : D + ":";
    if (Il(s))
      for (var rl = 0; rl < s.length; rl++)
        D = s[rl], I = lt + $(D, rl), G += _l(
          D,
          A,
          M,
          I,
          H
        );
    else if (rl = F(s), typeof rl == "function")
      for (s = rl.call(s), rl = 0; !(D = s.next()).done; )
        D = D.value, I = lt + $(D, rl++), G += _l(
          D,
          A,
          M,
          I,
          H
        );
    else if (I === "object") {
      if (typeof s.then == "function")
        return _l(
          Ll(s),
          A,
          M,
          D,
          H
        );
      throw A = String(s), Error(
        "Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return G;
  }
  function g(s, A, M) {
    if (s == null) return s;
    var D = [], H = 0;
    return _l(s, D, "", "", function(I) {
      return A.call(M, I, H++);
    }), D;
  }
  function _(s) {
    if (s._status === -1) {
      var A = s._result;
      A = A(), A.then(
        function(M) {
          (s._status === 0 || s._status === -1) && (s._status = 1, s._result = M);
        },
        function(M) {
          (s._status === 0 || s._status === -1) && (s._status = 2, s._result = M);
        }
      ), s._status === -1 && (s._status = 0, s._result = A);
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var B = typeof reportError == "function" ? reportError : function(s) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var A = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof s == "object" && s !== null && typeof s.message == "string" ? String(s.message) : String(s),
        error: s
      });
      if (!window.dispatchEvent(A)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", s);
      return;
    }
    console.error(s);
  };
  function dl() {
  }
  return X.Children = {
    map: g,
    forEach: function(s, A, M) {
      g(
        s,
        function() {
          A.apply(this, arguments);
        },
        M
      );
    },
    count: function(s) {
      var A = 0;
      return g(s, function() {
        A++;
      }), A;
    },
    toArray: function(s) {
      return g(s, function(A) {
        return A;
      }) || [];
    },
    only: function(s) {
      if (!j(s))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return s;
    }
  }, X.Component = jl, X.Fragment = x, X.Profiler = J, X.PureComponent = bt, X.StrictMode = m, X.Suspense = O, X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k, X.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(s) {
      return k.H.useMemoCache(s);
    }
  }, X.cache = function(s) {
    return function() {
      return s.apply(null, arguments);
    };
  }, X.cloneElement = function(s, A, M) {
    if (s == null)
      throw Error(
        "The argument must be a React element, but you passed " + s + "."
      );
    var D = ql({}, s.props), H = s.key, I = void 0;
    if (A != null)
      for (G in A.ref !== void 0 && (I = void 0), A.key !== void 0 && (H = "" + A.key), A)
        !Zl.call(A, G) || G === "key" || G === "__self" || G === "__source" || G === "ref" && A.ref === void 0 || (D[G] = A[G]);
    var G = arguments.length - 2;
    if (G === 1) D.children = M;
    else if (1 < G) {
      for (var lt = Array(G), rl = 0; rl < G; rl++)
        lt[rl] = arguments[rl + 2];
      D.children = lt;
    }
    return Vl(s.type, H, void 0, void 0, I, D);
  }, X.createContext = function(s) {
    return s = {
      $$typeof: ul,
      _currentValue: s,
      _currentValue2: s,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, s.Provider = s, s.Consumer = {
      $$typeof: ll,
      _context: s
    }, s;
  }, X.createElement = function(s, A, M) {
    var D, H = {}, I = null;
    if (A != null)
      for (D in A.key !== void 0 && (I = "" + A.key), A)
        Zl.call(A, D) && D !== "key" && D !== "__self" && D !== "__source" && (H[D] = A[D]);
    var G = arguments.length - 2;
    if (G === 1) H.children = M;
    else if (1 < G) {
      for (var lt = Array(G), rl = 0; rl < G; rl++)
        lt[rl] = arguments[rl + 2];
      H.children = lt;
    }
    if (s && s.defaultProps)
      for (D in G = s.defaultProps, G)
        H[D] === void 0 && (H[D] = G[D]);
    return Vl(s, I, void 0, void 0, null, H);
  }, X.createRef = function() {
    return { current: null };
  }, X.forwardRef = function(s) {
    return { $$typeof: w, render: s };
  }, X.isValidElement = j, X.lazy = function(s) {
    return {
      $$typeof: N,
      _payload: { _status: -1, _result: s },
      _init: _
    };
  }, X.memo = function(s, A) {
    return {
      $$typeof: E,
      type: s,
      compare: A === void 0 ? null : A
    };
  }, X.startTransition = function(s) {
    var A = k.T, M = {};
    k.T = M;
    try {
      var D = s(), H = k.S;
      H !== null && H(M, D), typeof D == "object" && D !== null && typeof D.then == "function" && D.then(dl, B);
    } catch (I) {
      B(I);
    } finally {
      k.T = A;
    }
  }, X.unstable_useCacheRefresh = function() {
    return k.H.useCacheRefresh();
  }, X.use = function(s) {
    return k.H.use(s);
  }, X.useActionState = function(s, A, M) {
    return k.H.useActionState(s, A, M);
  }, X.useCallback = function(s, A) {
    return k.H.useCallback(s, A);
  }, X.useContext = function(s) {
    return k.H.useContext(s);
  }, X.useDebugValue = function() {
  }, X.useDeferredValue = function(s, A) {
    return k.H.useDeferredValue(s, A);
  }, X.useEffect = function(s, A, M) {
    var D = k.H;
    if (typeof M == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return D.useEffect(s, A);
  }, X.useId = function() {
    return k.H.useId();
  }, X.useImperativeHandle = function(s, A, M) {
    return k.H.useImperativeHandle(s, A, M);
  }, X.useInsertionEffect = function(s, A) {
    return k.H.useInsertionEffect(s, A);
  }, X.useLayoutEffect = function(s, A) {
    return k.H.useLayoutEffect(s, A);
  }, X.useMemo = function(s, A) {
    return k.H.useMemo(s, A);
  }, X.useOptimistic = function(s, A) {
    return k.H.useOptimistic(s, A);
  }, X.useReducer = function(s, A, M) {
    return k.H.useReducer(s, A, M);
  }, X.useRef = function(s) {
    return k.H.useRef(s);
  }, X.useState = function(s) {
    return k.H.useState(s);
  }, X.useSyncExternalStore = function(s, A, M) {
    return k.H.useSyncExternalStore(
      s,
      A,
      M
    );
  }, X.useTransition = function() {
    return k.H.useTransition();
  }, X.version = "19.1.1", X;
}
var ed;
function ci() {
  return ed || (ed = 1, li.exports = jy()), li.exports;
}
var yl = ci(), ti = { exports: {} }, ge = {}, ui = { exports: {} }, ai = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nd;
function Xy() {
  return nd || (nd = 1, (function(z) {
    function K(g, _) {
      var B = g.length;
      g.push(_);
      l: for (; 0 < B; ) {
        var dl = B - 1 >>> 1, s = g[dl];
        if (0 < J(s, _))
          g[dl] = _, g[B] = s, B = dl;
        else break l;
      }
    }
    function x(g) {
      return g.length === 0 ? null : g[0];
    }
    function m(g) {
      if (g.length === 0) return null;
      var _ = g[0], B = g.pop();
      if (B !== _) {
        g[0] = B;
        l: for (var dl = 0, s = g.length, A = s >>> 1; dl < A; ) {
          var M = 2 * (dl + 1) - 1, D = g[M], H = M + 1, I = g[H];
          if (0 > J(D, B))
            H < s && 0 > J(I, D) ? (g[dl] = I, g[H] = B, dl = H) : (g[dl] = D, g[M] = B, dl = M);
          else if (H < s && 0 > J(I, B))
            g[dl] = I, g[H] = B, dl = H;
          else break l;
        }
      }
      return _;
    }
    function J(g, _) {
      var B = g.sortIndex - _.sortIndex;
      return B !== 0 ? B : g.id - _.id;
    }
    if (z.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var ll = performance;
      z.unstable_now = function() {
        return ll.now();
      };
    } else {
      var ul = Date, w = ul.now();
      z.unstable_now = function() {
        return ul.now() - w;
      };
    }
    var O = [], E = [], N = 1, al = null, F = 3, Ml = !1, ql = !1, Fl = !1, jl = !1, zt = typeof setTimeout == "function" ? setTimeout : null, bt = typeof clearTimeout == "function" ? clearTimeout : null, Rl = typeof setImmediate < "u" ? setImmediate : null;
    function Il(g) {
      for (var _ = x(E); _ !== null; ) {
        if (_.callback === null) m(E);
        else if (_.startTime <= g)
          m(E), _.sortIndex = _.expirationTime, K(O, _);
        else break;
        _ = x(E);
      }
    }
    function k(g) {
      if (Fl = !1, Il(g), !ql)
        if (x(O) !== null)
          ql = !0, Zl || (Zl = !0, $());
        else {
          var _ = x(E);
          _ !== null && _l(k, _.startTime - g);
        }
    }
    var Zl = !1, Vl = -1, Bl = 5, j = -1;
    function el() {
      return jl ? !0 : !(z.unstable_now() - j < Bl);
    }
    function cl() {
      if (jl = !1, Zl) {
        var g = z.unstable_now();
        j = g;
        var _ = !0;
        try {
          l: {
            ql = !1, Fl && (Fl = !1, bt(Vl), Vl = -1), Ml = !0;
            var B = F;
            try {
              t: {
                for (Il(g), al = x(O); al !== null && !(al.expirationTime > g && el()); ) {
                  var dl = al.callback;
                  if (typeof dl == "function") {
                    al.callback = null, F = al.priorityLevel;
                    var s = dl(
                      al.expirationTime <= g
                    );
                    if (g = z.unstable_now(), typeof s == "function") {
                      al.callback = s, Il(g), _ = !0;
                      break t;
                    }
                    al === x(O) && m(O), Il(g);
                  } else m(O);
                  al = x(O);
                }
                if (al !== null) _ = !0;
                else {
                  var A = x(E);
                  A !== null && _l(
                    k,
                    A.startTime - g
                  ), _ = !1;
                }
              }
              break l;
            } finally {
              al = null, F = B, Ml = !1;
            }
            _ = void 0;
          }
        } finally {
          _ ? $() : Zl = !1;
        }
      }
    }
    var $;
    if (typeof Rl == "function")
      $ = function() {
        Rl(cl);
      };
    else if (typeof MessageChannel < "u") {
      var Pl = new MessageChannel(), Ll = Pl.port2;
      Pl.port1.onmessage = cl, $ = function() {
        Ll.postMessage(null);
      };
    } else
      $ = function() {
        zt(cl, 0);
      };
    function _l(g, _) {
      Vl = zt(function() {
        g(z.unstable_now());
      }, _);
    }
    z.unstable_IdlePriority = 5, z.unstable_ImmediatePriority = 1, z.unstable_LowPriority = 4, z.unstable_NormalPriority = 3, z.unstable_Profiling = null, z.unstable_UserBlockingPriority = 2, z.unstable_cancelCallback = function(g) {
      g.callback = null;
    }, z.unstable_forceFrameRate = function(g) {
      0 > g || 125 < g ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Bl = 0 < g ? Math.floor(1e3 / g) : 5;
    }, z.unstable_getCurrentPriorityLevel = function() {
      return F;
    }, z.unstable_next = function(g) {
      switch (F) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = F;
      }
      var B = F;
      F = _;
      try {
        return g();
      } finally {
        F = B;
      }
    }, z.unstable_requestPaint = function() {
      jl = !0;
    }, z.unstable_runWithPriority = function(g, _) {
      switch (g) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          g = 3;
      }
      var B = F;
      F = g;
      try {
        return _();
      } finally {
        F = B;
      }
    }, z.unstable_scheduleCallback = function(g, _, B) {
      var dl = z.unstable_now();
      switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? dl + B : dl) : B = dl, g) {
        case 1:
          var s = -1;
          break;
        case 2:
          s = 250;
          break;
        case 5:
          s = 1073741823;
          break;
        case 4:
          s = 1e4;
          break;
        default:
          s = 5e3;
      }
      return s = B + s, g = {
        id: N++,
        callback: _,
        priorityLevel: g,
        startTime: B,
        expirationTime: s,
        sortIndex: -1
      }, B > dl ? (g.sortIndex = B, K(E, g), x(O) === null && g === x(E) && (Fl ? (bt(Vl), Vl = -1) : Fl = !0, _l(k, B - dl))) : (g.sortIndex = s, K(O, g), ql || Ml || (ql = !0, Zl || (Zl = !0, $()))), g;
    }, z.unstable_shouldYield = el, z.unstable_wrapCallback = function(g) {
      var _ = F;
      return function() {
        var B = F;
        F = _;
        try {
          return g.apply(this, arguments);
        } finally {
          F = B;
        }
      };
    };
  })(ai)), ai;
}
var fd;
function Cy() {
  return fd || (fd = 1, ui.exports = Xy()), ui.exports;
}
var ei = { exports: {} }, Ql = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cd;
function Qy() {
  if (cd) return Ql;
  cd = 1;
  var z = ci();
  function K(O) {
    var E = "https://react.dev/errors/" + O;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var N = 2; N < arguments.length; N++)
        E += "&args[]=" + encodeURIComponent(arguments[N]);
    }
    return "Minified React error #" + O + "; visit " + E + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function x() {
  }
  var m = {
    d: {
      f: x,
      r: function() {
        throw Error(K(522));
      },
      D: x,
      C: x,
      L: x,
      m: x,
      X: x,
      S: x,
      M: x
    },
    p: 0,
    findDOMNode: null
  }, J = Symbol.for("react.portal");
  function ll(O, E, N) {
    var al = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: J,
      key: al == null ? null : "" + al,
      children: O,
      containerInfo: E,
      implementation: N
    };
  }
  var ul = z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function w(O, E) {
    if (O === "font") return "";
    if (typeof E == "string")
      return E === "use-credentials" ? E : "";
  }
  return Ql.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = m, Ql.createPortal = function(O, E) {
    var N = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!E || E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11)
      throw Error(K(299));
    return ll(O, E, null, N);
  }, Ql.flushSync = function(O) {
    var E = ul.T, N = m.p;
    try {
      if (ul.T = null, m.p = 2, O) return O();
    } finally {
      ul.T = E, m.p = N, m.d.f();
    }
  }, Ql.preconnect = function(O, E) {
    typeof O == "string" && (E ? (E = E.crossOrigin, E = typeof E == "string" ? E === "use-credentials" ? E : "" : void 0) : E = null, m.d.C(O, E));
  }, Ql.prefetchDNS = function(O) {
    typeof O == "string" && m.d.D(O);
  }, Ql.preinit = function(O, E) {
    if (typeof O == "string" && E && typeof E.as == "string") {
      var N = E.as, al = w(N, E.crossOrigin), F = typeof E.integrity == "string" ? E.integrity : void 0, Ml = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
      N === "style" ? m.d.S(
        O,
        typeof E.precedence == "string" ? E.precedence : void 0,
        {
          crossOrigin: al,
          integrity: F,
          fetchPriority: Ml
        }
      ) : N === "script" && m.d.X(O, {
        crossOrigin: al,
        integrity: F,
        fetchPriority: Ml,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0
      });
    }
  }, Ql.preinitModule = function(O, E) {
    if (typeof O == "string")
      if (typeof E == "object" && E !== null) {
        if (E.as == null || E.as === "script") {
          var N = w(
            E.as,
            E.crossOrigin
          );
          m.d.M(O, {
            crossOrigin: N,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
            nonce: typeof E.nonce == "string" ? E.nonce : void 0
          });
        }
      } else E == null && m.d.M(O);
  }, Ql.preload = function(O, E) {
    if (typeof O == "string" && typeof E == "object" && E !== null && typeof E.as == "string") {
      var N = E.as, al = w(N, E.crossOrigin);
      m.d.L(O, N, {
        crossOrigin: al,
        integrity: typeof E.integrity == "string" ? E.integrity : void 0,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0,
        type: typeof E.type == "string" ? E.type : void 0,
        fetchPriority: typeof E.fetchPriority == "string" ? E.fetchPriority : void 0,
        referrerPolicy: typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0,
        imageSrcSet: typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0,
        imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0,
        media: typeof E.media == "string" ? E.media : void 0
      });
    }
  }, Ql.preloadModule = function(O, E) {
    if (typeof O == "string")
      if (E) {
        var N = w(E.as, E.crossOrigin);
        m.d.m(O, {
          as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
          crossOrigin: N,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0
        });
      } else m.d.m(O);
  }, Ql.requestFormReset = function(O) {
    m.d.r(O);
  }, Ql.unstable_batchedUpdates = function(O, E) {
    return O(E);
  }, Ql.useFormState = function(O, E, N) {
    return ul.H.useFormState(O, E, N);
  }, Ql.useFormStatus = function() {
    return ul.H.useHostTransitionStatus();
  }, Ql.version = "19.1.1", Ql;
}
var id;
function Zy() {
  if (id) return ei.exports;
  id = 1;
  function z() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z);
      } catch (K) {
        console.error(K);
      }
  }
  return z(), ei.exports = Qy(), ei.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sd;
function Vy() {
  if (sd) return ge;
  sd = 1;
  var z = Cy(), K = ci(), x = Zy();
  function m(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        t += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function J(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function ll(l) {
    var t = l, u = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do
        t = l, (t.flags & 4098) !== 0 && (u = t.return), l = t.return;
      while (l);
    }
    return t.tag === 3 ? u : null;
  }
  function ul(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function w(l) {
    if (ll(l) !== l)
      throw Error(m(188));
  }
  function O(l) {
    var t = l.alternate;
    if (!t) {
      if (t = ll(l), t === null) throw Error(m(188));
      return t !== l ? null : l;
    }
    for (var u = l, a = t; ; ) {
      var e = u.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (a = e.return, a !== null) {
          u = a;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === u) return w(e), l;
          if (n === a) return w(e), t;
          n = n.sibling;
        }
        throw Error(m(188));
      }
      if (u.return !== a.return) u = e, a = n;
      else {
        for (var f = !1, c = e.child; c; ) {
          if (c === u) {
            f = !0, u = e, a = n;
            break;
          }
          if (c === a) {
            f = !0, a = e, u = n;
            break;
          }
          c = c.sibling;
        }
        if (!f) {
          for (c = n.child; c; ) {
            if (c === u) {
              f = !0, u = n, a = e;
              break;
            }
            if (c === a) {
              f = !0, a = n, u = e;
              break;
            }
            c = c.sibling;
          }
          if (!f) throw Error(m(189));
        }
      }
      if (u.alternate !== a) throw Error(m(190));
    }
    if (u.tag !== 3) throw Error(m(188));
    return u.stateNode.current === u ? l : t;
  }
  function E(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = E(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var N = Object.assign, al = Symbol.for("react.element"), F = Symbol.for("react.transitional.element"), Ml = Symbol.for("react.portal"), ql = Symbol.for("react.fragment"), Fl = Symbol.for("react.strict_mode"), jl = Symbol.for("react.profiler"), zt = Symbol.for("react.provider"), bt = Symbol.for("react.consumer"), Rl = Symbol.for("react.context"), Il = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), Zl = Symbol.for("react.suspense_list"), Vl = Symbol.for("react.memo"), Bl = Symbol.for("react.lazy"), j = Symbol.for("react.activity"), el = Symbol.for("react.memo_cache_sentinel"), cl = Symbol.iterator;
  function $(l) {
    return l === null || typeof l != "object" ? null : (l = cl && l[cl] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Pl = Symbol.for("react.client.reference");
  function Ll(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Pl ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case ql:
        return "Fragment";
      case jl:
        return "Profiler";
      case Fl:
        return "StrictMode";
      case k:
        return "Suspense";
      case Zl:
        return "SuspenseList";
      case j:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Ml:
          return "Portal";
        case Rl:
          return (l.displayName || "Context") + ".Provider";
        case bt:
          return (l._context.displayName || "Context") + ".Consumer";
        case Il:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case Vl:
          return t = l.displayName || null, t !== null ? t : Ll(l.type) || "Memo";
        case Bl:
          t = l._payload, l = l._init;
          try {
            return Ll(l(t));
          } catch {
          }
      }
    return null;
  }
  var _l = Array.isArray, g = K.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _ = x.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, dl = [], s = -1;
  function A(l) {
    return { current: l };
  }
  function M(l) {
    0 > s || (l.current = dl[s], dl[s] = null, s--);
  }
  function D(l, t) {
    s++, dl[s] = l.current, l.current = t;
  }
  var H = A(null), I = A(null), G = A(null), lt = A(null);
  function rl(l, t) {
    switch (D(G, t), D(I, l), D(H, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Uo(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = Uo(t), l = No(t, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    M(H), D(H, l);
  }
  function Kt() {
    M(H), M(I), M(G);
  }
  function Gn(l) {
    l.memoizedState !== null && D(lt, l);
    var t = H.current, u = No(t, l.type);
    t !== u && (D(I, l), D(H, u));
  }
  function Te(l) {
    I.current === l && (M(H), M(I)), lt.current === l && (M(lt), de._currentValue = B);
  }
  var jn = Object.prototype.hasOwnProperty, Xn = z.unstable_scheduleCallback, Cn = z.unstable_cancelCallback, hd = z.unstable_shouldYield, rd = z.unstable_requestPaint, _t = z.unstable_now, md = z.unstable_getCurrentPriorityLevel, ii = z.unstable_ImmediatePriority, si = z.unstable_UserBlockingPriority, Ee = z.unstable_NormalPriority, gd = z.unstable_LowPriority, oi = z.unstable_IdlePriority, Sd = z.log, bd = z.unstable_setDisableYieldValue, ba = null, tt = null;
  function Jt(l) {
    if (typeof Sd == "function" && bd(l), tt && typeof tt.setStrictMode == "function")
      try {
        tt.setStrictMode(ba, l);
      } catch {
      }
  }
  var ut = Math.clz32 ? Math.clz32 : Ad, Td = Math.log, Ed = Math.LN2;
  function Ad(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Td(l) / Ed | 0) | 0;
  }
  var Ae = 256, ze = 4194304;
  function mu(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function _e(l, t, u) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var e = 0, n = l.suspendedLanes, f = l.pingedLanes;
    l = l.warmLanes;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~n, a !== 0 ? e = mu(a) : (f &= c, f !== 0 ? e = mu(f) : u || (u = c & ~l, u !== 0 && (e = mu(u))))) : (c = a & ~n, c !== 0 ? e = mu(c) : f !== 0 ? e = mu(f) : u || (u = a & ~l, u !== 0 && (e = mu(u)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, u = t & -t, n >= u || n === 32 && (u & 4194048) !== 0) ? t : e;
  }
  function Ta(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function zd(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function di() {
    var l = Ae;
    return Ae <<= 1, (Ae & 4194048) === 0 && (Ae = 256), l;
  }
  function vi() {
    var l = ze;
    return ze <<= 1, (ze & 62914560) === 0 && (ze = 4194304), l;
  }
  function Qn(l) {
    for (var t = [], u = 0; 31 > u; u++) t.push(l);
    return t;
  }
  function Ea(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function _d(l, t, u, a, e, n) {
    var f = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var c = l.entanglements, i = l.expirationTimes, y = l.hiddenUpdates;
    for (u = f & ~u; 0 < u; ) {
      var S = 31 - ut(u), T = 1 << S;
      c[S] = 0, i[S] = -1;
      var h = y[S];
      if (h !== null)
        for (y[S] = null, S = 0; S < h.length; S++) {
          var r = h[S];
          r !== null && (r.lane &= -536870913);
        }
      u &= ~T;
    }
    a !== 0 && yi(l, a, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function yi(l, t, u) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - ut(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | u & 4194090;
  }
  function hi(l, t) {
    var u = l.entangledLanes |= t;
    for (l = l.entanglements; u; ) {
      var a = 31 - ut(u), e = 1 << a;
      e & t | l[a] & t && (l[a] |= t), u &= ~e;
    }
  }
  function Zn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Vn(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function ri() {
    var l = _.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Wo(l.type));
  }
  function Od(l, t) {
    var u = _.p;
    try {
      return _.p = l, t();
    } finally {
      _.p = u;
    }
  }
  var wt = Math.random().toString(36).slice(2), Xl = "__reactFiber$" + wt, Jl = "__reactProps$" + wt, Bu = "__reactContainer$" + wt, Ln = "__reactEvents$" + wt, Dd = "__reactListeners$" + wt, Md = "__reactHandles$" + wt, mi = "__reactResources$" + wt, Aa = "__reactMarker$" + wt;
  function Kn(l) {
    delete l[Xl], delete l[Jl], delete l[Ln], delete l[Dd], delete l[Md];
  }
  function Yu(l) {
    var t = l[Xl];
    if (t) return t;
    for (var u = l.parentNode; u; ) {
      if (t = u[Bu] || u[Xl]) {
        if (u = t.alternate, t.child !== null || u !== null && u.child !== null)
          for (l = Bo(l); l !== null; ) {
            if (u = l[Xl]) return u;
            l = Bo(l);
          }
        return t;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function xu(l) {
    if (l = l[Xl] || l[Bu]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function za(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(m(33));
  }
  function Gu(l) {
    var t = l[mi];
    return t || (t = l[mi] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Ul(l) {
    l[Aa] = !0;
  }
  var gi = /* @__PURE__ */ new Set(), Si = {};
  function gu(l, t) {
    ju(l, t), ju(l + "Capture", t);
  }
  function ju(l, t) {
    for (Si[l] = t, l = 0; l < t.length; l++)
      gi.add(t[l]);
  }
  var Rd = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), bi = {}, Ti = {};
  function Ud(l) {
    return jn.call(Ti, l) ? !0 : jn.call(bi, l) ? !1 : Rd.test(l) ? Ti[l] = !0 : (bi[l] = !0, !1);
  }
  function Oe(l, t, u) {
    if (Ud(t))
      if (u === null) l.removeAttribute(t);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + u);
      }
  }
  function De(l, t, u) {
    if (u === null) l.removeAttribute(t);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + u);
    }
  }
  function Nt(l, t, u, a) {
    if (a === null) l.removeAttribute(u);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(t, u, "" + a);
    }
  }
  var Jn, Ei;
  function Xu(l) {
    if (Jn === void 0)
      try {
        throw Error();
      } catch (u) {
        var t = u.stack.trim().match(/\n( *(at )?)/);
        Jn = t && t[1] || "", Ei = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Jn + l + Ei;
  }
  var wn = !1;
  function kn(l, t) {
    if (!l || wn) return "";
    wn = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var T = function() {
                throw Error();
              };
              if (Object.defineProperty(T.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(T, []);
                } catch (r) {
                  var h = r;
                }
                Reflect.construct(l, [], T);
              } else {
                try {
                  T.call();
                } catch (r) {
                  h = r;
                }
                l.call(T.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (r) {
                h = r;
              }
              (T = l()) && typeof T.catch == "function" && T.catch(function() {
              });
            }
          } catch (r) {
            if (r && h && typeof r.stack == "string")
              return [r.stack, h.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      e && e.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = a.DetermineComponentFrameRoot(), f = n[0], c = n[1];
      if (f && c) {
        var i = f.split(`
`), y = c.split(`
`);
        for (e = a = 0; a < i.length && !i[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; e < y.length && !y[e].includes(
          "DetermineComponentFrameRoot"
        ); )
          e++;
        if (a === i.length || e === y.length)
          for (a = i.length - 1, e = y.length - 1; 1 <= a && 0 <= e && i[a] !== y[e]; )
            e--;
        for (; 1 <= a && 0 <= e; a--, e--)
          if (i[a] !== y[e]) {
            if (a !== 1 || e !== 1)
              do
                if (a--, e--, 0 > e || i[a] !== y[e]) {
                  var S = `
` + i[a].replace(" at new ", " at ");
                  return l.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", l.displayName)), S;
                }
              while (1 <= a && 0 <= e);
            break;
          }
      }
    } finally {
      wn = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Xu(u) : "";
  }
  function Nd(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Xu(l.type);
      case 16:
        return Xu("Lazy");
      case 13:
        return Xu("Suspense");
      case 19:
        return Xu("SuspenseList");
      case 0:
      case 15:
        return kn(l.type, !1);
      case 11:
        return kn(l.type.render, !1);
      case 1:
        return kn(l.type, !0);
      case 31:
        return Xu("Activity");
      default:
        return "";
    }
  }
  function Ai(l) {
    try {
      var t = "";
      do
        t += Nd(l), l = l.return;
      while (l);
      return t;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  function ot(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function zi(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Hd(l) {
    var t = zi(l) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      t
    ), a = "" + l[t];
    if (!l.hasOwnProperty(t) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var e = u.get, n = u.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return e.call(this);
        },
        set: function(f) {
          a = "" + f, n.call(this, f);
        }
      }), Object.defineProperty(l, t, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(f) {
          a = "" + f;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function Me(l) {
    l._valueTracker || (l._valueTracker = Hd(l));
  }
  function _i(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var u = t.getValue(), a = "";
    return l && (a = zi(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== u ? (t.setValue(l), !0) : !1;
  }
  function Re(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var pd = /[\n"\\]/g;
  function dt(l) {
    return l.replace(
      pd,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Wn(l, t, u, a, e, n, f, c) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + ot(t)) : l.value !== "" + ot(t) && (l.value = "" + ot(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? $n(l, f, ot(t)) : u != null ? $n(l, f, ot(u)) : a != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + ot(c) : l.removeAttribute("name");
  }
  function Oi(l, t, u, a, e, n, f, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || u != null) {
      if (!(n !== "submit" && n !== "reset" || t != null))
        return;
      u = u != null ? "" + ot(u) : "", t = t != null ? "" + ot(t) : u, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? e, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = c ? l.checked : !!a, l.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f);
  }
  function $n(l, t, u) {
    t === "number" && Re(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function Cu(l, t, u, a) {
    if (l = l.options, t) {
      t = {};
      for (var e = 0; e < u.length; e++)
        t["$" + u[e]] = !0;
      for (u = 0; u < l.length; u++)
        e = t.hasOwnProperty("$" + l[u].value), l[u].selected !== e && (l[u].selected = e), e && a && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + ot(u), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === u) {
          l[e].selected = !0, a && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Di(l, t, u) {
    if (t != null && (t = "" + ot(t), t !== l.value && (l.value = t), u == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = u != null ? "" + ot(u) : "";
  }
  function Mi(l, t, u, a) {
    if (t == null) {
      if (a != null) {
        if (u != null) throw Error(m(92));
        if (_l(a)) {
          if (1 < a.length) throw Error(m(93));
          a = a[0];
        }
        u = a;
      }
      u == null && (u = ""), t = u;
    }
    u = ot(t), l.defaultValue = u, a = l.textContent, a === u && a !== "" && a !== null && (l.value = a);
  }
  function Qu(l, t) {
    if (t) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var qd = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Ri(l, t, u) {
    var a = t.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, u) : typeof u != "number" || u === 0 || qd.has(t) ? t === "float" ? l.cssFloat = u : l[t] = ("" + u).trim() : l[t] = u + "px";
  }
  function Ui(l, t, u) {
    if (t != null && typeof t != "object")
      throw Error(m(62));
    if (l = l.style, u != null) {
      for (var a in u)
        !u.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
      for (var e in t)
        a = t[e], t.hasOwnProperty(e) && u[e] !== a && Ri(l, e, a);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && Ri(l, n, t[n]);
  }
  function Fn(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Bd = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Yd = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ue(l) {
    return Yd.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var In = null;
  function Pn(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Zu = null, Vu = null;
  function Ni(l) {
    var t = xu(l);
    if (t && (l = t.stateNode)) {
      var u = l[Jl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (Wn(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), t = u.name, u.type === "radio" && t != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + dt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < u.length; t++) {
              var a = u[t];
              if (a !== l && a.form === l.form) {
                var e = a[Jl] || null;
                if (!e) throw Error(m(90));
                Wn(
                  a,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name
                );
              }
            }
            for (t = 0; t < u.length; t++)
              a = u[t], a.form === l.form && _i(a);
          }
          break l;
        case "textarea":
          Di(l, u.value, u.defaultValue);
          break l;
        case "select":
          t = u.value, t != null && Cu(l, !!u.multiple, t, !1);
      }
    }
  }
  var lf = !1;
  function Hi(l, t, u) {
    if (lf) return l(t, u);
    lf = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (lf = !1, (Zu !== null || Vu !== null) && (rn(), Zu && (t = Zu, l = Vu, Vu = Zu = null, Ni(t), l)))
        for (t = 0; t < l.length; t++) Ni(l[t]);
    }
  }
  function _a(l, t) {
    var u = l.stateNode;
    if (u === null) return null;
    var a = u[Jl] || null;
    if (a === null) return null;
    u = a[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        m(231, t, typeof u)
      );
    return u;
  }
  var Ht = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), tf = !1;
  if (Ht)
    try {
      var Oa = {};
      Object.defineProperty(Oa, "passive", {
        get: function() {
          tf = !0;
        }
      }), window.addEventListener("test", Oa, Oa), window.removeEventListener("test", Oa, Oa);
    } catch {
      tf = !1;
    }
  var kt = null, uf = null, Ne = null;
  function pi() {
    if (Ne) return Ne;
    var l, t = uf, u = t.length, a, e = "value" in kt ? kt.value : kt.textContent, n = e.length;
    for (l = 0; l < u && t[l] === e[l]; l++) ;
    var f = u - l;
    for (a = 1; a <= f && t[u - a] === e[n - a]; a++) ;
    return Ne = e.slice(l, 1 < a ? 1 - a : void 0);
  }
  function He(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function pe() {
    return !0;
  }
  function qi() {
    return !1;
  }
  function wl(l) {
    function t(u, a, e, n, f) {
      this._reactName = u, this._targetInst = e, this.type = a, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (u = l[c], this[c] = u ? u(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? pe : qi, this.isPropagationStopped = qi, this;
    }
    return N(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = pe);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = pe);
      },
      persist: function() {
      },
      isPersistent: pe
    }), t;
  }
  var Su = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, qe = wl(Su), Da = N({}, Su, { view: 0, detail: 0 }), xd = wl(Da), af, ef, Ma, Be = N({}, Da, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ff,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Ma && (Ma && l.type === "mousemove" ? (af = l.screenX - Ma.screenX, ef = l.screenY - Ma.screenY) : ef = af = 0, Ma = l), af);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : ef;
    }
  }), Bi = wl(Be), Gd = N({}, Be, { dataTransfer: 0 }), jd = wl(Gd), Xd = N({}, Da, { relatedTarget: 0 }), nf = wl(Xd), Cd = N({}, Su, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Qd = wl(Cd), Zd = N({}, Su, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Vd = wl(Zd), Ld = N({}, Su, { data: 0 }), Yi = wl(Ld), Kd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Jd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, wd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function kd(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = wd[l]) ? !!t[l] : !1;
  }
  function ff() {
    return kd;
  }
  var Wd = N({}, Da, {
    key: function(l) {
      if (l.key) {
        var t = Kd[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = He(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Jd[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ff,
    charCode: function(l) {
      return l.type === "keypress" ? He(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? He(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), $d = wl(Wd), Fd = N({}, Be, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), xi = wl(Fd), Id = N({}, Da, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ff
  }), Pd = wl(Id), lv = N({}, Su, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), tv = wl(lv), uv = N({}, Be, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), av = wl(uv), ev = N({}, Su, {
    newState: 0,
    oldState: 0
  }), nv = wl(ev), fv = [9, 13, 27, 32], cf = Ht && "CompositionEvent" in window, Ra = null;
  Ht && "documentMode" in document && (Ra = document.documentMode);
  var cv = Ht && "TextEvent" in window && !Ra, Gi = Ht && (!cf || Ra && 8 < Ra && 11 >= Ra), ji = " ", Xi = !1;
  function Ci(l, t) {
    switch (l) {
      case "keyup":
        return fv.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Qi(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Lu = !1;
  function iv(l, t) {
    switch (l) {
      case "compositionend":
        return Qi(t);
      case "keypress":
        return t.which !== 32 ? null : (Xi = !0, ji);
      case "textInput":
        return l = t.data, l === ji && Xi ? null : l;
      default:
        return null;
    }
  }
  function sv(l, t) {
    if (Lu)
      return l === "compositionend" || !cf && Ci(l, t) ? (l = pi(), Ne = uf = kt = null, Lu = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Gi && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var ov = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Zi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!ov[l.type] : t === "textarea";
  }
  function Vi(l, t, u, a) {
    Zu ? Vu ? Vu.push(a) : Vu = [a] : Zu = a, t = En(t, "onChange"), 0 < t.length && (u = new qe(
      "onChange",
      "change",
      null,
      u,
      a
    ), l.push({ event: u, listeners: t }));
  }
  var Ua = null, Na = null;
  function dv(l) {
    _o(l, 0);
  }
  function Ye(l) {
    var t = za(l);
    if (_i(t)) return l;
  }
  function Li(l, t) {
    if (l === "change") return t;
  }
  var Ki = !1;
  if (Ht) {
    var sf;
    if (Ht) {
      var of = "oninput" in document;
      if (!of) {
        var Ji = document.createElement("div");
        Ji.setAttribute("oninput", "return;"), of = typeof Ji.oninput == "function";
      }
      sf = of;
    } else sf = !1;
    Ki = sf && (!document.documentMode || 9 < document.documentMode);
  }
  function wi() {
    Ua && (Ua.detachEvent("onpropertychange", ki), Na = Ua = null);
  }
  function ki(l) {
    if (l.propertyName === "value" && Ye(Na)) {
      var t = [];
      Vi(
        t,
        Na,
        l,
        Pn(l)
      ), Hi(dv, t);
    }
  }
  function vv(l, t, u) {
    l === "focusin" ? (wi(), Ua = t, Na = u, Ua.attachEvent("onpropertychange", ki)) : l === "focusout" && wi();
  }
  function yv(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Ye(Na);
  }
  function hv(l, t) {
    if (l === "click") return Ye(t);
  }
  function rv(l, t) {
    if (l === "input" || l === "change")
      return Ye(t);
  }
  function mv(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var at = typeof Object.is == "function" ? Object.is : mv;
  function Ha(l, t) {
    if (at(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var u = Object.keys(l), a = Object.keys(t);
    if (u.length !== a.length) return !1;
    for (a = 0; a < u.length; a++) {
      var e = u[a];
      if (!jn.call(t, e) || !at(l[e], t[e]))
        return !1;
    }
    return !0;
  }
  function Wi(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function $i(l, t) {
    var u = Wi(l);
    l = 0;
    for (var a; u; ) {
      if (u.nodeType === 3) {
        if (a = l + u.textContent.length, l <= t && a >= t)
          return { node: u, offset: t - l };
        l = a;
      }
      l: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break l;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = Wi(u);
    }
  }
  function Fi(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Fi(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Ii(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = Re(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof t.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = t.contentWindow;
      else break;
      t = Re(l.document);
    }
    return t;
  }
  function df(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var gv = Ht && "documentMode" in document && 11 >= document.documentMode, Ku = null, vf = null, pa = null, yf = !1;
  function Pi(l, t, u) {
    var a = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    yf || Ku == null || Ku !== Re(a) || (a = Ku, "selectionStart" in a && df(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), pa && Ha(pa, a) || (pa = a, a = En(vf, "onSelect"), 0 < a.length && (t = new qe(
      "onSelect",
      "select",
      null,
      t,
      u
    ), l.push({ event: t, listeners: a }), t.target = Ku)));
  }
  function bu(l, t) {
    var u = {};
    return u[l.toLowerCase()] = t.toLowerCase(), u["Webkit" + l] = "webkit" + t, u["Moz" + l] = "moz" + t, u;
  }
  var Ju = {
    animationend: bu("Animation", "AnimationEnd"),
    animationiteration: bu("Animation", "AnimationIteration"),
    animationstart: bu("Animation", "AnimationStart"),
    transitionrun: bu("Transition", "TransitionRun"),
    transitionstart: bu("Transition", "TransitionStart"),
    transitioncancel: bu("Transition", "TransitionCancel"),
    transitionend: bu("Transition", "TransitionEnd")
  }, hf = {}, ls = {};
  Ht && (ls = document.createElement("div").style, "AnimationEvent" in window || (delete Ju.animationend.animation, delete Ju.animationiteration.animation, delete Ju.animationstart.animation), "TransitionEvent" in window || delete Ju.transitionend.transition);
  function Tu(l) {
    if (hf[l]) return hf[l];
    if (!Ju[l]) return l;
    var t = Ju[l], u;
    for (u in t)
      if (t.hasOwnProperty(u) && u in ls)
        return hf[l] = t[u];
    return l;
  }
  var ts = Tu("animationend"), us = Tu("animationiteration"), as = Tu("animationstart"), Sv = Tu("transitionrun"), bv = Tu("transitionstart"), Tv = Tu("transitioncancel"), es = Tu("transitionend"), ns = /* @__PURE__ */ new Map(), rf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  rf.push("scrollEnd");
  function Tt(l, t) {
    ns.set(l, t), gu(t, [l]);
  }
  var fs = /* @__PURE__ */ new WeakMap();
  function vt(l, t) {
    if (typeof l == "object" && l !== null) {
      var u = fs.get(l);
      return u !== void 0 ? u : (t = {
        value: l,
        source: t,
        stack: Ai(t)
      }, fs.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: Ai(t)
    };
  }
  var yt = [], wu = 0, mf = 0;
  function xe() {
    for (var l = wu, t = mf = wu = 0; t < l; ) {
      var u = yt[t];
      yt[t++] = null;
      var a = yt[t];
      yt[t++] = null;
      var e = yt[t];
      yt[t++] = null;
      var n = yt[t];
      if (yt[t++] = null, a !== null && e !== null) {
        var f = a.pending;
        f === null ? e.next = e : (e.next = f.next, f.next = e), a.pending = e;
      }
      n !== 0 && cs(u, e, n);
    }
  }
  function Ge(l, t, u, a) {
    yt[wu++] = l, yt[wu++] = t, yt[wu++] = u, yt[wu++] = a, mf |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function gf(l, t, u, a) {
    return Ge(l, t, u, a), je(l);
  }
  function ku(l, t) {
    return Ge(l, null, null, t), je(l);
  }
  function cs(l, t, u) {
    l.lanes |= u;
    var a = l.alternate;
    a !== null && (a.lanes |= u);
    for (var e = !1, n = l.return; n !== null; )
      n.childLanes |= u, a = n.alternate, a !== null && (a.childLanes |= u), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - ut(u), l = n.hiddenUpdates, a = l[e], a === null ? l[e] = [t] : a.push(t), t.lane = u | 536870912), n) : null;
  }
  function je(l) {
    if (50 < ae)
      throw ae = 0, zc = null, Error(m(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Wu = {};
  function Ev(l, t, u, a) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function et(l, t, u, a) {
    return new Ev(l, t, u, a);
  }
  function Sf(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function pt(l, t) {
    var u = l.alternate;
    return u === null ? (u = et(
      l.tag,
      t,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = t, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, t = l.dependencies, u.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function is(l, t) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, t = u.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function Xe(l, t, u, a, e, n) {
    var f = 0;
    if (a = l, typeof l == "function") Sf(l) && (f = 1);
    else if (typeof l == "string")
      f = zy(
        l,
        u,
        H.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case j:
          return l = et(31, u, t, e), l.elementType = j, l.lanes = n, l;
        case ql:
          return Eu(u.children, e, n, t);
        case Fl:
          f = 8, e |= 24;
          break;
        case jl:
          return l = et(12, u, t, e | 2), l.elementType = jl, l.lanes = n, l;
        case k:
          return l = et(13, u, t, e), l.elementType = k, l.lanes = n, l;
        case Zl:
          return l = et(19, u, t, e), l.elementType = Zl, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case zt:
              case Rl:
                f = 10;
                break l;
              case bt:
                f = 9;
                break l;
              case Il:
                f = 11;
                break l;
              case Vl:
                f = 14;
                break l;
              case Bl:
                f = 16, a = null;
                break l;
            }
          f = 29, u = Error(
            m(130, l === null ? "null" : typeof l, "")
          ), a = null;
      }
    return t = et(f, u, t, e), t.elementType = l, t.type = a, t.lanes = n, t;
  }
  function Eu(l, t, u, a) {
    return l = et(7, l, a, t), l.lanes = u, l;
  }
  function bf(l, t, u) {
    return l = et(6, l, null, t), l.lanes = u, l;
  }
  function Tf(l, t, u) {
    return t = et(
      4,
      l.children !== null ? l.children : [],
      l.key,
      t
    ), t.lanes = u, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var $u = [], Fu = 0, Ce = null, Qe = 0, ht = [], rt = 0, Au = null, qt = 1, Bt = "";
  function zu(l, t) {
    $u[Fu++] = Qe, $u[Fu++] = Ce, Ce = l, Qe = t;
  }
  function ss(l, t, u) {
    ht[rt++] = qt, ht[rt++] = Bt, ht[rt++] = Au, Au = l;
    var a = qt;
    l = Bt;
    var e = 32 - ut(a) - 1;
    a &= ~(1 << e), u += 1;
    var n = 32 - ut(t) + e;
    if (30 < n) {
      var f = e - e % 5;
      n = (a & (1 << f) - 1).toString(32), a >>= f, e -= f, qt = 1 << 32 - ut(t) + e | u << e | a, Bt = n + l;
    } else
      qt = 1 << n | u << e | a, Bt = l;
  }
  function Ef(l) {
    l.return !== null && (zu(l, 1), ss(l, 1, 0));
  }
  function Af(l) {
    for (; l === Ce; )
      Ce = $u[--Fu], $u[Fu] = null, Qe = $u[--Fu], $u[Fu] = null;
    for (; l === Au; )
      Au = ht[--rt], ht[rt] = null, Bt = ht[--rt], ht[rt] = null, qt = ht[--rt], ht[rt] = null;
  }
  var Kl = null, Sl = null, tl = !1, _u = null, Ot = !1, zf = Error(m(519));
  function Ou(l) {
    var t = Error(m(418, ""));
    throw Ya(vt(t, l)), zf;
  }
  function os(l) {
    var t = l.stateNode, u = l.type, a = l.memoizedProps;
    switch (t[Xl] = l, t[Jl] = a, u) {
      case "dialog":
        L("cancel", t), L("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        L("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < ne.length; u++)
          L(ne[u], t);
        break;
      case "source":
        L("error", t);
        break;
      case "img":
      case "image":
      case "link":
        L("error", t), L("load", t);
        break;
      case "details":
        L("toggle", t);
        break;
      case "input":
        L("invalid", t), Oi(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        ), Me(t);
        break;
      case "select":
        L("invalid", t);
        break;
      case "textarea":
        L("invalid", t), Mi(t, a.value, a.defaultValue, a.children), Me(t);
    }
    u = a.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || t.textContent === "" + u || a.suppressHydrationWarning === !0 || Ro(t.textContent, u) ? (a.popover != null && (L("beforetoggle", t), L("toggle", t)), a.onScroll != null && L("scroll", t), a.onScrollEnd != null && L("scrollend", t), a.onClick != null && (t.onclick = An), t = !0) : t = !1, t || Ou(l);
  }
  function ds(l) {
    for (Kl = l.return; Kl; )
      switch (Kl.tag) {
        case 5:
        case 13:
          Ot = !1;
          return;
        case 27:
        case 3:
          Ot = !0;
          return;
        default:
          Kl = Kl.return;
      }
  }
  function qa(l) {
    if (l !== Kl) return !1;
    if (!tl) return ds(l), tl = !0, !1;
    var t = l.tag, u;
    if ((u = t !== 3 && t !== 27) && ((u = t === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Xc(l.type, l.memoizedProps)), u = !u), u && Sl && Ou(l), ds(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(m(317));
      l: {
        for (l = l.nextSibling, t = 0; l; ) {
          if (l.nodeType === 8)
            if (u = l.data, u === "/$") {
              if (t === 0) {
                Sl = At(l.nextSibling);
                break l;
              }
              t--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || t++;
          l = l.nextSibling;
        }
        Sl = null;
      }
    } else
      t === 27 ? (t = Sl, ou(l.type) ? (l = Vc, Vc = null, Sl = l) : Sl = t) : Sl = Kl ? At(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Ba() {
    Sl = Kl = null, tl = !1;
  }
  function vs() {
    var l = _u;
    return l !== null && ($l === null ? $l = l : $l.push.apply(
      $l,
      l
    ), _u = null), l;
  }
  function Ya(l) {
    _u === null ? _u = [l] : _u.push(l);
  }
  var _f = A(null), Du = null, Yt = null;
  function Wt(l, t, u) {
    D(_f, t._currentValue), t._currentValue = u;
  }
  function xt(l) {
    l._currentValue = _f.current, M(_f);
  }
  function Of(l, t, u) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === u) break;
      l = l.return;
    }
  }
  function Df(l, t, u, a) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var f = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = e;
          for (var i = 0; i < t.length; i++)
            if (c.context === t[i]) {
              n.lanes |= u, c = n.alternate, c !== null && (c.lanes |= u), Of(
                n.return,
                u,
                l
              ), a || (f = null);
              break l;
            }
          n = c.next;
        }
      } else if (e.tag === 18) {
        if (f = e.return, f === null) throw Error(m(341));
        f.lanes |= u, n = f.alternate, n !== null && (n.lanes |= u), Of(f, u, l), f = null;
      } else f = e.child;
      if (f !== null) f.return = e;
      else
        for (f = e; f !== null; ) {
          if (f === l) {
            f = null;
            break;
          }
          if (e = f.sibling, e !== null) {
            e.return = f.return, f = e;
            break;
          }
          f = f.return;
        }
      e = f;
    }
  }
  function xa(l, t, u, a) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var f = e.alternate;
        if (f === null) throw Error(m(387));
        if (f = f.memoizedProps, f !== null) {
          var c = e.type;
          at(e.pendingProps.value, f.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (e === lt.current) {
        if (f = e.alternate, f === null) throw Error(m(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(de) : l = [de]);
      }
      e = e.return;
    }
    l !== null && Df(
      t,
      l,
      u,
      a
    ), t.flags |= 262144;
  }
  function Ze(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!at(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Mu(l) {
    Du = l, Yt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Cl(l) {
    return ys(Du, l);
  }
  function Ve(l, t) {
    return Du === null && Mu(l), ys(l, t);
  }
  function ys(l, t) {
    var u = t._currentValue;
    if (t = { context: t, memoizedValue: u, next: null }, Yt === null) {
      if (l === null) throw Error(m(308));
      Yt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Yt = Yt.next = t;
    return u;
  }
  var Av = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(u, a) {
        l.push(a);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, zv = z.unstable_scheduleCallback, _v = z.unstable_NormalPriority, Ol = {
    $$typeof: Rl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Mf() {
    return {
      controller: new Av(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ga(l) {
    l.refCount--, l.refCount === 0 && zv(_v, function() {
      l.controller.abort();
    });
  }
  var ja = null, Rf = 0, Iu = 0, Pu = null;
  function Ov(l, t) {
    if (ja === null) {
      var u = ja = [];
      Rf = 0, Iu = Nc(), Pu = {
        status: "pending",
        value: void 0,
        then: function(a) {
          u.push(a);
        }
      };
    }
    return Rf++, t.then(hs, hs), t;
  }
  function hs() {
    if (--Rf === 0 && ja !== null) {
      Pu !== null && (Pu.status = "fulfilled");
      var l = ja;
      ja = null, Iu = 0, Pu = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Dv(l, t) {
    var u = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(e) {
        u.push(e);
      }
    };
    return l.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var e = 0; e < u.length; e++) (0, u[e])(t);
      },
      function(e) {
        for (a.status = "rejected", a.reason = e, e = 0; e < u.length; e++)
          (0, u[e])(void 0);
      }
    ), a;
  }
  var rs = g.S;
  g.S = function(l, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && Ov(l, t), rs !== null && rs(l, t);
  };
  var Ru = A(null);
  function Uf() {
    var l = Ru.current;
    return l !== null ? l : hl.pooledCache;
  }
  function Le(l, t) {
    t === null ? D(Ru, Ru.current) : D(Ru, t.pool);
  }
  function ms() {
    var l = Uf();
    return l === null ? null : { parent: Ol._currentValue, pool: l };
  }
  var Xa = Error(m(460)), gs = Error(m(474)), Ke = Error(m(542)), Nf = { then: function() {
  } };
  function Ss(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Je() {
  }
  function bs(l, t, u) {
    switch (u = l[u], u === void 0 ? l.push(t) : u !== t && (t.then(Je, Je), t = u), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, Es(l), l;
      default:
        if (typeof t.status == "string") t.then(Je, Je);
        else {
          if (l = hl, l !== null && 100 < l.shellSuspendCounter)
            throw Error(m(482));
          l = t, l.status = "pending", l.then(
            function(a) {
              if (t.status === "pending") {
                var e = t;
                e.status = "fulfilled", e.value = a;
              }
            },
            function(a) {
              if (t.status === "pending") {
                var e = t;
                e.status = "rejected", e.reason = a;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, Es(l), l;
        }
        throw Ca = t, Xa;
    }
  }
  var Ca = null;
  function Ts() {
    if (Ca === null) throw Error(m(459));
    var l = Ca;
    return Ca = null, l;
  }
  function Es(l) {
    if (l === Xa || l === Ke)
      throw Error(m(483));
  }
  var $t = !1;
  function Hf(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function pf(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function Ft(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function It(l, t, u) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (nl & 2) !== 0) {
      var e = a.pending;
      return e === null ? t.next = t : (t.next = e.next, e.next = t), a.pending = t, t = je(l), cs(l, null, u), t;
    }
    return Ge(l, a, t, u), je(l);
  }
  function Qa(l, t, u) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (u & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, hi(l, u);
    }
  }
  function qf(l, t) {
    var u = l.updateQueue, a = l.alternate;
    if (a !== null && (a = a.updateQueue, u === a)) {
      var e = null, n = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var f = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          n === null ? e = n = f : n = n.next = f, u = u.next;
        } while (u !== null);
        n === null ? e = n = t : n = n.next = t;
      } else e = n = t;
      u = {
        baseState: a.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = t : l.next = t, u.lastBaseUpdate = t;
  }
  var Bf = !1;
  function Za() {
    if (Bf) {
      var l = Pu;
      if (l !== null) throw l;
    }
  }
  function Va(l, t, u, a) {
    Bf = !1;
    var e = l.updateQueue;
    $t = !1;
    var n = e.firstBaseUpdate, f = e.lastBaseUpdate, c = e.shared.pending;
    if (c !== null) {
      e.shared.pending = null;
      var i = c, y = i.next;
      i.next = null, f === null ? n = y : f.next = y, f = i;
      var S = l.alternate;
      S !== null && (S = S.updateQueue, c = S.lastBaseUpdate, c !== f && (c === null ? S.firstBaseUpdate = y : c.next = y, S.lastBaseUpdate = i));
    }
    if (n !== null) {
      var T = e.baseState;
      f = 0, S = y = i = null, c = n;
      do {
        var h = c.lane & -536870913, r = h !== c.lane;
        if (r ? (W & h) === h : (a & h) === h) {
          h !== 0 && h === Iu && (Bf = !0), S !== null && (S = S.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var Y = l, p = c;
            h = t;
            var ol = u;
            switch (p.tag) {
              case 1:
                if (Y = p.payload, typeof Y == "function") {
                  T = Y.call(ol, T, h);
                  break l;
                }
                T = Y;
                break l;
              case 3:
                Y.flags = Y.flags & -65537 | 128;
              case 0:
                if (Y = p.payload, h = typeof Y == "function" ? Y.call(ol, T, h) : Y, h == null) break l;
                T = N({}, T, h);
                break l;
              case 2:
                $t = !0;
            }
          }
          h = c.callback, h !== null && (l.flags |= 64, r && (l.flags |= 8192), r = e.callbacks, r === null ? e.callbacks = [h] : r.push(h));
        } else
          r = {
            lane: h,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, S === null ? (y = S = r, i = T) : S = S.next = r, f |= h;
        if (c = c.next, c === null) {
          if (c = e.shared.pending, c === null)
            break;
          r = c, c = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
        }
      } while (!0);
      S === null && (i = T), e.baseState = i, e.firstBaseUpdate = y, e.lastBaseUpdate = S, n === null && (e.shared.lanes = 0), fu |= f, l.lanes = f, l.memoizedState = T;
    }
  }
  function As(l, t) {
    if (typeof l != "function")
      throw Error(m(191, l));
    l.call(t);
  }
  function zs(l, t) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        As(u[l], t);
  }
  var la = A(null), we = A(0);
  function _s(l, t) {
    l = Vt, D(we, l), D(la, t), Vt = l | t.baseLanes;
  }
  function Yf() {
    D(we, Vt), D(la, la.current);
  }
  function xf() {
    Vt = we.current, M(la), M(we);
  }
  var Pt = 0, Q = null, il = null, Al = null, ke = !1, ta = !1, Uu = !1, We = 0, La = 0, ua = null, Mv = 0;
  function Tl() {
    throw Error(m(321));
  }
  function Gf(l, t) {
    if (t === null) return !1;
    for (var u = 0; u < t.length && u < l.length; u++)
      if (!at(l[u], t[u])) return !1;
    return !0;
  }
  function jf(l, t, u, a, e, n) {
    return Pt = n, Q = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, g.H = l === null || l.memoizedState === null ? c0 : i0, Uu = !1, n = u(a, e), Uu = !1, ta && (n = Ds(
      t,
      u,
      a,
      e
    )), Os(l), n;
  }
  function Os(l) {
    g.H = tn;
    var t = il !== null && il.next !== null;
    if (Pt = 0, Al = il = Q = null, ke = !1, La = 0, ua = null, t) throw Error(m(300));
    l === null || Nl || (l = l.dependencies, l !== null && Ze(l) && (Nl = !0));
  }
  function Ds(l, t, u, a) {
    Q = l;
    var e = 0;
    do {
      if (ta && (ua = null), La = 0, ta = !1, 25 <= e) throw Error(m(301));
      if (e += 1, Al = il = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      g.H = Bv, n = t(u, a);
    } while (ta);
    return n;
  }
  function Rv() {
    var l = g.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? Ka(t) : t, l = l.useState()[0], (il !== null ? il.memoizedState : null) !== l && (Q.flags |= 1024), t;
  }
  function Xf() {
    var l = We !== 0;
    return We = 0, l;
  }
  function Cf(l, t, u) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~u;
  }
  function Qf(l) {
    if (ke) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      ke = !1;
    }
    Pt = 0, Al = il = Q = null, ta = !1, La = We = 0, ua = null;
  }
  function kl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Al === null ? Q.memoizedState = Al = l : Al = Al.next = l, Al;
  }
  function zl() {
    if (il === null) {
      var l = Q.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = il.next;
    var t = Al === null ? Q.memoizedState : Al.next;
    if (t !== null)
      Al = t, il = l;
    else {
      if (l === null)
        throw Q.alternate === null ? Error(m(467)) : Error(m(310));
      il = l, l = {
        memoizedState: il.memoizedState,
        baseState: il.baseState,
        baseQueue: il.baseQueue,
        queue: il.queue,
        next: null
      }, Al === null ? Q.memoizedState = Al = l : Al = Al.next = l;
    }
    return Al;
  }
  function Zf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ka(l) {
    var t = La;
    return La += 1, ua === null && (ua = []), l = bs(ua, l, t), t = Q, (Al === null ? t.memoizedState : Al.next) === null && (t = t.alternate, g.H = t === null || t.memoizedState === null ? c0 : i0), l;
  }
  function $e(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Ka(l);
      if (l.$$typeof === Rl) return Cl(l);
    }
    throw Error(m(438, String(l)));
  }
  function Vf(l) {
    var t = null, u = Q.updateQueue;
    if (u !== null && (t = u.memoCache), t == null) {
      var a = Q.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), u === null && (u = Zf(), Q.updateQueue = u), u.memoCache = t, u = t.data[t.index], u === void 0)
      for (u = t.data[t.index] = Array(l), a = 0; a < l; a++)
        u[a] = el;
    return t.index++, u;
  }
  function Gt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function Fe(l) {
    var t = zl();
    return Lf(t, il, l);
  }
  function Lf(l, t, u) {
    var a = l.queue;
    if (a === null) throw Error(m(311));
    a.lastRenderedReducer = u;
    var e = l.baseQueue, n = a.pending;
    if (n !== null) {
      if (e !== null) {
        var f = e.next;
        e.next = n.next, n.next = f;
      }
      t.baseQueue = e = n, a.pending = null;
    }
    if (n = l.baseState, e === null) l.memoizedState = n;
    else {
      t = e.next;
      var c = f = null, i = null, y = t, S = !1;
      do {
        var T = y.lane & -536870913;
        if (T !== y.lane ? (W & T) === T : (Pt & T) === T) {
          var h = y.revertLane;
          if (h === 0)
            i !== null && (i = i.next = {
              lane: 0,
              revertLane: 0,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }), T === Iu && (S = !0);
          else if ((Pt & h) === h) {
            y = y.next, h === Iu && (S = !0);
            continue;
          } else
            T = {
              lane: 0,
              revertLane: y.revertLane,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }, i === null ? (c = i = T, f = n) : i = i.next = T, Q.lanes |= h, fu |= h;
          T = y.action, Uu && u(n, T), n = y.hasEagerState ? y.eagerState : u(n, T);
        } else
          h = {
            lane: T,
            revertLane: y.revertLane,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null
          }, i === null ? (c = i = h, f = n) : i = i.next = h, Q.lanes |= T, fu |= T;
        y = y.next;
      } while (y !== null && y !== t);
      if (i === null ? f = n : i.next = c, !at(n, l.memoizedState) && (Nl = !0, S && (u = Pu, u !== null)))
        throw u;
      l.memoizedState = n, l.baseState = f, l.baseQueue = i, a.lastRenderedState = n;
    }
    return e === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function Kf(l) {
    var t = zl(), u = t.queue;
    if (u === null) throw Error(m(311));
    u.lastRenderedReducer = l;
    var a = u.dispatch, e = u.pending, n = t.memoizedState;
    if (e !== null) {
      u.pending = null;
      var f = e = e.next;
      do
        n = l(n, f.action), f = f.next;
      while (f !== e);
      at(n, t.memoizedState) || (Nl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), u.lastRenderedState = n;
    }
    return [n, a];
  }
  function Ms(l, t, u) {
    var a = Q, e = zl(), n = tl;
    if (n) {
      if (u === void 0) throw Error(m(407));
      u = u();
    } else u = t();
    var f = !at(
      (il || e).memoizedState,
      u
    );
    f && (e.memoizedState = u, Nl = !0), e = e.queue;
    var c = Ns.bind(null, a, e, l);
    if (Ja(2048, 8, c, [l]), e.getSnapshot !== t || f || Al !== null && Al.memoizedState.tag & 1) {
      if (a.flags |= 2048, aa(
        9,
        Ie(),
        Us.bind(
          null,
          a,
          e,
          u,
          t
        ),
        null
      ), hl === null) throw Error(m(349));
      n || (Pt & 124) !== 0 || Rs(a, t, u);
    }
    return u;
  }
  function Rs(l, t, u) {
    l.flags |= 16384, l = { getSnapshot: t, value: u }, t = Q.updateQueue, t === null ? (t = Zf(), Q.updateQueue = t, t.stores = [l]) : (u = t.stores, u === null ? t.stores = [l] : u.push(l));
  }
  function Us(l, t, u, a) {
    t.value = u, t.getSnapshot = a, Hs(t) && ps(l);
  }
  function Ns(l, t, u) {
    return u(function() {
      Hs(t) && ps(l);
    });
  }
  function Hs(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var u = t();
      return !at(l, u);
    } catch {
      return !0;
    }
  }
  function ps(l) {
    var t = ku(l, 2);
    t !== null && st(t, l, 2);
  }
  function Jf(l) {
    var t = kl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), Uu) {
        Jt(!0);
        try {
          u();
        } finally {
          Jt(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Gt,
      lastRenderedState: l
    }, t;
  }
  function qs(l, t, u, a) {
    return l.baseState = u, Lf(
      l,
      il,
      typeof a == "function" ? a : Gt
    );
  }
  function Uv(l, t, u, a, e) {
    if (ln(l)) throw Error(m(485));
    if (l = t.action, l !== null) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          n.listeners.push(f);
        }
      };
      g.T !== null ? u(!0) : n.isTransition = !1, a(n), u = t.pending, u === null ? (n.next = t.pending = n, Bs(t, n)) : (n.next = u.next, t.pending = u.next = n);
    }
  }
  function Bs(l, t) {
    var u = t.action, a = t.payload, e = l.state;
    if (t.isTransition) {
      var n = g.T, f = {};
      g.T = f;
      try {
        var c = u(e, a), i = g.S;
        i !== null && i(f, c), Ys(l, t, c);
      } catch (y) {
        wf(l, t, y);
      } finally {
        g.T = n;
      }
    } else
      try {
        n = u(e, a), Ys(l, t, n);
      } catch (y) {
        wf(l, t, y);
      }
  }
  function Ys(l, t, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(a) {
        xs(l, t, a);
      },
      function(a) {
        return wf(l, t, a);
      }
    ) : xs(l, t, u);
  }
  function xs(l, t, u) {
    t.status = "fulfilled", t.value = u, Gs(t), l.state = u, t = l.pending, t !== null && (u = t.next, u === t ? l.pending = null : (u = u.next, t.next = u, Bs(l, u)));
  }
  function wf(l, t, u) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = u, Gs(t), t = t.next;
      while (t !== a);
    }
    l.action = null;
  }
  function Gs(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function js(l, t) {
    return t;
  }
  function Xs(l, t) {
    if (tl) {
      var u = hl.formState;
      if (u !== null) {
        l: {
          var a = Q;
          if (tl) {
            if (Sl) {
              t: {
                for (var e = Sl, n = Ot; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (e = At(
                    e.nextSibling
                  ), e === null) {
                    e = null;
                    break t;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                Sl = At(
                  e.nextSibling
                ), a = e.data === "F!";
                break l;
              }
            }
            Ou(a);
          }
          a = !1;
        }
        a && (t = u[0]);
      }
    }
    return u = kl(), u.memoizedState = u.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: js,
      lastRenderedState: t
    }, u.queue = a, u = e0.bind(
      null,
      Q,
      a
    ), a.dispatch = u, a = Jf(!1), n = If.bind(
      null,
      Q,
      !1,
      a.queue
    ), a = kl(), e = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = e, u = Uv.bind(
      null,
      Q,
      e,
      n,
      u
    ), e.dispatch = u, a.memoizedState = l, [t, u, !1];
  }
  function Cs(l) {
    var t = zl();
    return Qs(t, il, l);
  }
  function Qs(l, t, u) {
    if (t = Lf(
      l,
      t,
      js
    )[0], l = Fe(Gt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = Ka(t);
      } catch (f) {
        throw f === Xa ? Ke : f;
      }
    else a = t;
    t = zl();
    var e = t.queue, n = e.dispatch;
    return u !== t.memoizedState && (Q.flags |= 2048, aa(
      9,
      Ie(),
      Nv.bind(null, e, u),
      null
    )), [a, n, l];
  }
  function Nv(l, t) {
    l.action = t;
  }
  function Zs(l) {
    var t = zl(), u = il;
    if (u !== null)
      return Qs(t, u, l);
    zl(), t = t.memoizedState, u = zl();
    var a = u.queue.dispatch;
    return u.memoizedState = l, [t, a, !1];
  }
  function aa(l, t, u, a) {
    return l = { tag: l, create: u, deps: a, inst: t, next: null }, t = Q.updateQueue, t === null && (t = Zf(), Q.updateQueue = t), u = t.lastEffect, u === null ? t.lastEffect = l.next = l : (a = u.next, u.next = l, l.next = a, t.lastEffect = l), l;
  }
  function Ie() {
    return { destroy: void 0, resource: void 0 };
  }
  function Vs() {
    return zl().memoizedState;
  }
  function Pe(l, t, u, a) {
    var e = kl();
    a = a === void 0 ? null : a, Q.flags |= l, e.memoizedState = aa(
      1 | t,
      Ie(),
      u,
      a
    );
  }
  function Ja(l, t, u, a) {
    var e = zl();
    a = a === void 0 ? null : a;
    var n = e.memoizedState.inst;
    il !== null && a !== null && Gf(a, il.memoizedState.deps) ? e.memoizedState = aa(t, n, u, a) : (Q.flags |= l, e.memoizedState = aa(
      1 | t,
      n,
      u,
      a
    ));
  }
  function Ls(l, t) {
    Pe(8390656, 8, l, t);
  }
  function Ks(l, t) {
    Ja(2048, 8, l, t);
  }
  function Js(l, t) {
    return Ja(4, 2, l, t);
  }
  function ws(l, t) {
    return Ja(4, 4, l, t);
  }
  function ks(l, t) {
    if (typeof t == "function") {
      l = l();
      var u = t(l);
      return function() {
        typeof u == "function" ? u() : t(null);
      };
    }
    if (t != null)
      return l = l(), t.current = l, function() {
        t.current = null;
      };
  }
  function Ws(l, t, u) {
    u = u != null ? u.concat([l]) : null, Ja(4, 4, ks.bind(null, t, l), u);
  }
  function kf() {
  }
  function $s(l, t) {
    var u = zl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    return t !== null && Gf(t, a[1]) ? a[0] : (u.memoizedState = [l, t], l);
  }
  function Fs(l, t) {
    var u = zl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    if (t !== null && Gf(t, a[1]))
      return a[0];
    if (a = l(), Uu) {
      Jt(!0);
      try {
        l();
      } finally {
        Jt(!1);
      }
    }
    return u.memoizedState = [a, t], a;
  }
  function Wf(l, t, u) {
    return u === void 0 || (Pt & 1073741824) !== 0 ? l.memoizedState = t : (l.memoizedState = u, l = lo(), Q.lanes |= l, fu |= l, u);
  }
  function Is(l, t, u, a) {
    return at(u, t) ? u : la.current !== null ? (l = Wf(l, u, a), at(l, t) || (Nl = !0), l) : (Pt & 42) === 0 ? (Nl = !0, l.memoizedState = u) : (l = lo(), Q.lanes |= l, fu |= l, t);
  }
  function Ps(l, t, u, a, e) {
    var n = _.p;
    _.p = n !== 0 && 8 > n ? n : 8;
    var f = g.T, c = {};
    g.T = c, If(l, !1, t, u);
    try {
      var i = e(), y = g.S;
      if (y !== null && y(c, i), i !== null && typeof i == "object" && typeof i.then == "function") {
        var S = Dv(
          i,
          a
        );
        wa(
          l,
          t,
          S,
          it(l)
        );
      } else
        wa(
          l,
          t,
          a,
          it(l)
        );
    } catch (T) {
      wa(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: T },
        it()
      );
    } finally {
      _.p = n, g.T = f;
    }
  }
  function Hv() {
  }
  function $f(l, t, u, a) {
    if (l.tag !== 5) throw Error(m(476));
    var e = l0(l).queue;
    Ps(
      l,
      e,
      t,
      B,
      u === null ? Hv : function() {
        return t0(l), u(a);
      }
    );
  }
  function l0(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: B,
      baseState: B,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gt,
        lastRenderedState: B
      },
      next: null
    };
    var u = {};
    return t.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gt,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function t0(l) {
    var t = l0(l).next.queue;
    wa(l, t, {}, it());
  }
  function Ff() {
    return Cl(de);
  }
  function u0() {
    return zl().memoizedState;
  }
  function a0() {
    return zl().memoizedState;
  }
  function pv(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var u = it();
          l = Ft(u);
          var a = It(t, l, u);
          a !== null && (st(a, t, u), Qa(a, t, u)), t = { cache: Mf() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function qv(l, t, u) {
    var a = it();
    u = {
      lane: a,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ln(l) ? n0(t, u) : (u = gf(l, t, u, a), u !== null && (st(u, l, a), f0(u, t, a)));
  }
  function e0(l, t, u) {
    var a = it();
    wa(l, t, u, a);
  }
  function wa(l, t, u, a) {
    var e = {
      lane: a,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ln(l)) n0(t, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var f = t.lastRenderedState, c = n(f, u);
          if (e.hasEagerState = !0, e.eagerState = c, at(c, f))
            return Ge(l, t, e, 0), hl === null && xe(), !1;
        } catch {
        } finally {
        }
      if (u = gf(l, t, e, a), u !== null)
        return st(u, l, a), f0(u, t, a), !0;
    }
    return !1;
  }
  function If(l, t, u, a) {
    if (a = {
      lane: 2,
      revertLane: Nc(),
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ln(l)) {
      if (t) throw Error(m(479));
    } else
      t = gf(
        l,
        u,
        a,
        2
      ), t !== null && st(t, l, 2);
  }
  function ln(l) {
    var t = l.alternate;
    return l === Q || t !== null && t === Q;
  }
  function n0(l, t) {
    ta = ke = !0;
    var u = l.pending;
    u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t;
  }
  function f0(l, t, u) {
    if ((u & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, hi(l, u);
    }
  }
  var tn = {
    readContext: Cl,
    use: $e,
    useCallback: Tl,
    useContext: Tl,
    useEffect: Tl,
    useImperativeHandle: Tl,
    useLayoutEffect: Tl,
    useInsertionEffect: Tl,
    useMemo: Tl,
    useReducer: Tl,
    useRef: Tl,
    useState: Tl,
    useDebugValue: Tl,
    useDeferredValue: Tl,
    useTransition: Tl,
    useSyncExternalStore: Tl,
    useId: Tl,
    useHostTransitionStatus: Tl,
    useFormState: Tl,
    useActionState: Tl,
    useOptimistic: Tl,
    useMemoCache: Tl,
    useCacheRefresh: Tl
  }, c0 = {
    readContext: Cl,
    use: $e,
    useCallback: function(l, t) {
      return kl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Cl,
    useEffect: Ls,
    useImperativeHandle: function(l, t, u) {
      u = u != null ? u.concat([l]) : null, Pe(
        4194308,
        4,
        ks.bind(null, t, l),
        u
      );
    },
    useLayoutEffect: function(l, t) {
      return Pe(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      Pe(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var u = kl();
      t = t === void 0 ? null : t;
      var a = l();
      if (Uu) {
        Jt(!0);
        try {
          l();
        } finally {
          Jt(!1);
        }
      }
      return u.memoizedState = [a, t], a;
    },
    useReducer: function(l, t, u) {
      var a = kl();
      if (u !== void 0) {
        var e = u(t);
        if (Uu) {
          Jt(!0);
          try {
            u(t);
          } finally {
            Jt(!1);
          }
        }
      } else e = t;
      return a.memoizedState = a.baseState = e, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: e
      }, a.queue = l, l = l.dispatch = qv.bind(
        null,
        Q,
        l
      ), [a.memoizedState, l];
    },
    useRef: function(l) {
      var t = kl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = Jf(l);
      var t = l.queue, u = e0.bind(null, Q, t);
      return t.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: kf,
    useDeferredValue: function(l, t) {
      var u = kl();
      return Wf(u, l, t);
    },
    useTransition: function() {
      var l = Jf(!1);
      return l = Ps.bind(
        null,
        Q,
        l.queue,
        !0,
        !1
      ), kl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, u) {
      var a = Q, e = kl();
      if (tl) {
        if (u === void 0)
          throw Error(m(407));
        u = u();
      } else {
        if (u = t(), hl === null)
          throw Error(m(349));
        (W & 124) !== 0 || Rs(a, t, u);
      }
      e.memoizedState = u;
      var n = { value: u, getSnapshot: t };
      return e.queue = n, Ls(Ns.bind(null, a, n, l), [
        l
      ]), a.flags |= 2048, aa(
        9,
        Ie(),
        Us.bind(
          null,
          a,
          n,
          u,
          t
        ),
        null
      ), u;
    },
    useId: function() {
      var l = kl(), t = hl.identifierPrefix;
      if (tl) {
        var u = Bt, a = qt;
        u = (a & ~(1 << 32 - ut(a) - 1)).toString(32) + u, t = "«" + t + "R" + u, u = We++, 0 < u && (t += "H" + u.toString(32)), t += "»";
      } else
        u = Mv++, t = "«" + t + "r" + u.toString(32) + "»";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: Ff,
    useFormState: Xs,
    useActionState: Xs,
    useOptimistic: function(l) {
      var t = kl();
      t.memoizedState = t.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = u, t = If.bind(
        null,
        Q,
        !0,
        u
      ), u.dispatch = t, [l, t];
    },
    useMemoCache: Vf,
    useCacheRefresh: function() {
      return kl().memoizedState = pv.bind(
        null,
        Q
      );
    }
  }, i0 = {
    readContext: Cl,
    use: $e,
    useCallback: $s,
    useContext: Cl,
    useEffect: Ks,
    useImperativeHandle: Ws,
    useInsertionEffect: Js,
    useLayoutEffect: ws,
    useMemo: Fs,
    useReducer: Fe,
    useRef: Vs,
    useState: function() {
      return Fe(Gt);
    },
    useDebugValue: kf,
    useDeferredValue: function(l, t) {
      var u = zl();
      return Is(
        u,
        il.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = Fe(Gt)[0], t = zl().memoizedState;
      return [
        typeof l == "boolean" ? l : Ka(l),
        t
      ];
    },
    useSyncExternalStore: Ms,
    useId: u0,
    useHostTransitionStatus: Ff,
    useFormState: Cs,
    useActionState: Cs,
    useOptimistic: function(l, t) {
      var u = zl();
      return qs(u, il, l, t);
    },
    useMemoCache: Vf,
    useCacheRefresh: a0
  }, Bv = {
    readContext: Cl,
    use: $e,
    useCallback: $s,
    useContext: Cl,
    useEffect: Ks,
    useImperativeHandle: Ws,
    useInsertionEffect: Js,
    useLayoutEffect: ws,
    useMemo: Fs,
    useReducer: Kf,
    useRef: Vs,
    useState: function() {
      return Kf(Gt);
    },
    useDebugValue: kf,
    useDeferredValue: function(l, t) {
      var u = zl();
      return il === null ? Wf(u, l, t) : Is(
        u,
        il.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = Kf(Gt)[0], t = zl().memoizedState;
      return [
        typeof l == "boolean" ? l : Ka(l),
        t
      ];
    },
    useSyncExternalStore: Ms,
    useId: u0,
    useHostTransitionStatus: Ff,
    useFormState: Zs,
    useActionState: Zs,
    useOptimistic: function(l, t) {
      var u = zl();
      return il !== null ? qs(u, il, l, t) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Vf,
    useCacheRefresh: a0
  }, ea = null, ka = 0;
  function un(l) {
    var t = ka;
    return ka += 1, ea === null && (ea = []), bs(ea, l, t);
  }
  function Wa(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function an(l, t) {
    throw t.$$typeof === al ? Error(m(525)) : (l = Object.prototype.toString.call(t), Error(
      m(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function s0(l) {
    var t = l._init;
    return t(l._payload);
  }
  function o0(l) {
    function t(d, o) {
      if (l) {
        var v = d.deletions;
        v === null ? (d.deletions = [o], d.flags |= 16) : v.push(o);
      }
    }
    function u(d, o) {
      if (!l) return null;
      for (; o !== null; )
        t(d, o), o = o.sibling;
      return null;
    }
    function a(d) {
      for (var o = /* @__PURE__ */ new Map(); d !== null; )
        d.key !== null ? o.set(d.key, d) : o.set(d.index, d), d = d.sibling;
      return o;
    }
    function e(d, o) {
      return d = pt(d, o), d.index = 0, d.sibling = null, d;
    }
    function n(d, o, v) {
      return d.index = v, l ? (v = d.alternate, v !== null ? (v = v.index, v < o ? (d.flags |= 67108866, o) : v) : (d.flags |= 67108866, o)) : (d.flags |= 1048576, o);
    }
    function f(d) {
      return l && d.alternate === null && (d.flags |= 67108866), d;
    }
    function c(d, o, v, b) {
      return o === null || o.tag !== 6 ? (o = bf(v, d.mode, b), o.return = d, o) : (o = e(o, v), o.return = d, o);
    }
    function i(d, o, v, b) {
      var R = v.type;
      return R === ql ? S(
        d,
        o,
        v.props.children,
        b,
        v.key
      ) : o !== null && (o.elementType === R || typeof R == "object" && R !== null && R.$$typeof === Bl && s0(R) === o.type) ? (o = e(o, v.props), Wa(o, v), o.return = d, o) : (o = Xe(
        v.type,
        v.key,
        v.props,
        null,
        d.mode,
        b
      ), Wa(o, v), o.return = d, o);
    }
    function y(d, o, v, b) {
      return o === null || o.tag !== 4 || o.stateNode.containerInfo !== v.containerInfo || o.stateNode.implementation !== v.implementation ? (o = Tf(v, d.mode, b), o.return = d, o) : (o = e(o, v.children || []), o.return = d, o);
    }
    function S(d, o, v, b, R) {
      return o === null || o.tag !== 7 ? (o = Eu(
        v,
        d.mode,
        b,
        R
      ), o.return = d, o) : (o = e(o, v), o.return = d, o);
    }
    function T(d, o, v) {
      if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint")
        return o = bf(
          "" + o,
          d.mode,
          v
        ), o.return = d, o;
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case F:
            return v = Xe(
              o.type,
              o.key,
              o.props,
              null,
              d.mode,
              v
            ), Wa(v, o), v.return = d, v;
          case Ml:
            return o = Tf(
              o,
              d.mode,
              v
            ), o.return = d, o;
          case Bl:
            var b = o._init;
            return o = b(o._payload), T(d, o, v);
        }
        if (_l(o) || $(o))
          return o = Eu(
            o,
            d.mode,
            v,
            null
          ), o.return = d, o;
        if (typeof o.then == "function")
          return T(d, un(o), v);
        if (o.$$typeof === Rl)
          return T(
            d,
            Ve(d, o),
            v
          );
        an(d, o);
      }
      return null;
    }
    function h(d, o, v, b) {
      var R = o !== null ? o.key : null;
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint")
        return R !== null ? null : c(d, o, "" + v, b);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case F:
            return v.key === R ? i(d, o, v, b) : null;
          case Ml:
            return v.key === R ? y(d, o, v, b) : null;
          case Bl:
            return R = v._init, v = R(v._payload), h(d, o, v, b);
        }
        if (_l(v) || $(v))
          return R !== null ? null : S(d, o, v, b, null);
        if (typeof v.then == "function")
          return h(
            d,
            o,
            un(v),
            b
          );
        if (v.$$typeof === Rl)
          return h(
            d,
            o,
            Ve(d, v),
            b
          );
        an(d, v);
      }
      return null;
    }
    function r(d, o, v, b, R) {
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
        return d = d.get(v) || null, c(o, d, "" + b, R);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case F:
            return d = d.get(
              b.key === null ? v : b.key
            ) || null, i(o, d, b, R);
          case Ml:
            return d = d.get(
              b.key === null ? v : b.key
            ) || null, y(o, d, b, R);
          case Bl:
            var Z = b._init;
            return b = Z(b._payload), r(
              d,
              o,
              v,
              b,
              R
            );
        }
        if (_l(b) || $(b))
          return d = d.get(v) || null, S(o, d, b, R, null);
        if (typeof b.then == "function")
          return r(
            d,
            o,
            v,
            un(b),
            R
          );
        if (b.$$typeof === Rl)
          return r(
            d,
            o,
            v,
            Ve(o, b),
            R
          );
        an(o, b);
      }
      return null;
    }
    function Y(d, o, v, b) {
      for (var R = null, Z = null, U = o, q = o = 0, pl = null; U !== null && q < v.length; q++) {
        U.index > q ? (pl = U, U = null) : pl = U.sibling;
        var P = h(
          d,
          U,
          v[q],
          b
        );
        if (P === null) {
          U === null && (U = pl);
          break;
        }
        l && U && P.alternate === null && t(d, U), o = n(P, o, q), Z === null ? R = P : Z.sibling = P, Z = P, U = pl;
      }
      if (q === v.length)
        return u(d, U), tl && zu(d, q), R;
      if (U === null) {
        for (; q < v.length; q++)
          U = T(d, v[q], b), U !== null && (o = n(
            U,
            o,
            q
          ), Z === null ? R = U : Z.sibling = U, Z = U);
        return tl && zu(d, q), R;
      }
      for (U = a(U); q < v.length; q++)
        pl = r(
          U,
          d,
          q,
          v[q],
          b
        ), pl !== null && (l && pl.alternate !== null && U.delete(
          pl.key === null ? q : pl.key
        ), o = n(
          pl,
          o,
          q
        ), Z === null ? R = pl : Z.sibling = pl, Z = pl);
      return l && U.forEach(function(ru) {
        return t(d, ru);
      }), tl && zu(d, q), R;
    }
    function p(d, o, v, b) {
      if (v == null) throw Error(m(151));
      for (var R = null, Z = null, U = o, q = o = 0, pl = null, P = v.next(); U !== null && !P.done; q++, P = v.next()) {
        U.index > q ? (pl = U, U = null) : pl = U.sibling;
        var ru = h(d, U, P.value, b);
        if (ru === null) {
          U === null && (U = pl);
          break;
        }
        l && U && ru.alternate === null && t(d, U), o = n(ru, o, q), Z === null ? R = ru : Z.sibling = ru, Z = ru, U = pl;
      }
      if (P.done)
        return u(d, U), tl && zu(d, q), R;
      if (U === null) {
        for (; !P.done; q++, P = v.next())
          P = T(d, P.value, b), P !== null && (o = n(P, o, q), Z === null ? R = P : Z.sibling = P, Z = P);
        return tl && zu(d, q), R;
      }
      for (U = a(U); !P.done; q++, P = v.next())
        P = r(U, d, q, P.value, b), P !== null && (l && P.alternate !== null && U.delete(P.key === null ? q : P.key), o = n(P, o, q), Z === null ? R = P : Z.sibling = P, Z = P);
      return l && U.forEach(function(Yy) {
        return t(d, Yy);
      }), tl && zu(d, q), R;
    }
    function ol(d, o, v, b) {
      if (typeof v == "object" && v !== null && v.type === ql && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case F:
            l: {
              for (var R = v.key; o !== null; ) {
                if (o.key === R) {
                  if (R = v.type, R === ql) {
                    if (o.tag === 7) {
                      u(
                        d,
                        o.sibling
                      ), b = e(
                        o,
                        v.props.children
                      ), b.return = d, d = b;
                      break l;
                    }
                  } else if (o.elementType === R || typeof R == "object" && R !== null && R.$$typeof === Bl && s0(R) === o.type) {
                    u(
                      d,
                      o.sibling
                    ), b = e(o, v.props), Wa(b, v), b.return = d, d = b;
                    break l;
                  }
                  u(d, o);
                  break;
                } else t(d, o);
                o = o.sibling;
              }
              v.type === ql ? (b = Eu(
                v.props.children,
                d.mode,
                b,
                v.key
              ), b.return = d, d = b) : (b = Xe(
                v.type,
                v.key,
                v.props,
                null,
                d.mode,
                b
              ), Wa(b, v), b.return = d, d = b);
            }
            return f(d);
          case Ml:
            l: {
              for (R = v.key; o !== null; ) {
                if (o.key === R)
                  if (o.tag === 4 && o.stateNode.containerInfo === v.containerInfo && o.stateNode.implementation === v.implementation) {
                    u(
                      d,
                      o.sibling
                    ), b = e(o, v.children || []), b.return = d, d = b;
                    break l;
                  } else {
                    u(d, o);
                    break;
                  }
                else t(d, o);
                o = o.sibling;
              }
              b = Tf(v, d.mode, b), b.return = d, d = b;
            }
            return f(d);
          case Bl:
            return R = v._init, v = R(v._payload), ol(
              d,
              o,
              v,
              b
            );
        }
        if (_l(v))
          return Y(
            d,
            o,
            v,
            b
          );
        if ($(v)) {
          if (R = $(v), typeof R != "function") throw Error(m(150));
          return v = R.call(v), p(
            d,
            o,
            v,
            b
          );
        }
        if (typeof v.then == "function")
          return ol(
            d,
            o,
            un(v),
            b
          );
        if (v.$$typeof === Rl)
          return ol(
            d,
            o,
            Ve(d, v),
            b
          );
        an(d, v);
      }
      return typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint" ? (v = "" + v, o !== null && o.tag === 6 ? (u(d, o.sibling), b = e(o, v), b.return = d, d = b) : (u(d, o), b = bf(v, d.mode, b), b.return = d, d = b), f(d)) : u(d, o);
    }
    return function(d, o, v, b) {
      try {
        ka = 0;
        var R = ol(
          d,
          o,
          v,
          b
        );
        return ea = null, R;
      } catch (U) {
        if (U === Xa || U === Ke) throw U;
        var Z = et(29, U, null, d.mode);
        return Z.lanes = b, Z.return = d, Z;
      } finally {
      }
    };
  }
  var na = o0(!0), d0 = o0(!1), mt = A(null), Dt = null;
  function lu(l) {
    var t = l.alternate;
    D(Dl, Dl.current & 1), D(mt, l), Dt === null && (t === null || la.current !== null || t.memoizedState !== null) && (Dt = l);
  }
  function v0(l) {
    if (l.tag === 22) {
      if (D(Dl, Dl.current), D(mt, l), Dt === null) {
        var t = l.alternate;
        t !== null && t.memoizedState !== null && (Dt = l);
      }
    } else tu();
  }
  function tu() {
    D(Dl, Dl.current), D(mt, mt.current);
  }
  function jt(l) {
    M(mt), Dt === l && (Dt = null), M(Dl);
  }
  var Dl = A(0);
  function en(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var u = t.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || Zc(u)))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  function Pf(l, t, u, a) {
    t = l.memoizedState, u = u(a, t), u = u == null ? t : N({}, t, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var lc = {
    enqueueSetState: function(l, t, u) {
      l = l._reactInternals;
      var a = it(), e = Ft(a);
      e.payload = t, u != null && (e.callback = u), t = It(l, e, a), t !== null && (st(t, l, a), Qa(t, l, a));
    },
    enqueueReplaceState: function(l, t, u) {
      l = l._reactInternals;
      var a = it(), e = Ft(a);
      e.tag = 1, e.payload = t, u != null && (e.callback = u), t = It(l, e, a), t !== null && (st(t, l, a), Qa(t, l, a));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var u = it(), a = Ft(u);
      a.tag = 2, t != null && (a.callback = t), t = It(l, a, u), t !== null && (st(t, l, u), Qa(t, l, u));
    }
  };
  function y0(l, t, u, a, e, n, f) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, f) : t.prototype && t.prototype.isPureReactComponent ? !Ha(u, a) || !Ha(e, n) : !0;
  }
  function h0(l, t, u, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(u, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(u, a), t.state !== l && lc.enqueueReplaceState(t, t.state, null);
  }
  function Nu(l, t) {
    var u = t;
    if ("ref" in t) {
      u = {};
      for (var a in t)
        a !== "ref" && (u[a] = t[a]);
    }
    if (l = l.defaultProps) {
      u === t && (u = N({}, u));
      for (var e in l)
        u[e] === void 0 && (u[e] = l[e]);
    }
    return u;
  }
  var nn = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  };
  function r0(l) {
    nn(l);
  }
  function m0(l) {
    console.error(l);
  }
  function g0(l) {
    nn(l);
  }
  function fn(l, t) {
    try {
      var u = l.onUncaughtError;
      u(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function S0(l, t, u) {
    try {
      var a = l.onCaughtError;
      a(u.value, {
        componentStack: u.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function tc(l, t, u) {
    return u = Ft(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      fn(l, t);
    }, u;
  }
  function b0(l) {
    return l = Ft(l), l.tag = 3, l;
  }
  function T0(l, t, u, a) {
    var e = u.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = a.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        S0(t, u, a);
      };
    }
    var f = u.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
      S0(t, u, a), typeof e != "function" && (cu === null ? cu = /* @__PURE__ */ new Set([this]) : cu.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function Yv(l, t, u, a, e) {
    if (u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = u.alternate, t !== null && xa(
        t,
        u,
        e,
        !0
      ), u = mt.current, u !== null) {
        switch (u.tag) {
          case 13:
            return Dt === null ? Oc() : u.alternate === null && bl === 0 && (bl = 3), u.flags &= -257, u.flags |= 65536, u.lanes = e, a === Nf ? u.flags |= 16384 : (t = u.updateQueue, t === null ? u.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Mc(l, a, e)), !1;
          case 22:
            return u.flags |= 65536, a === Nf ? u.flags |= 16384 : (t = u.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, u.updateQueue = t) : (u = t.retryQueue, u === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : u.add(a)), Mc(l, a, e)), !1;
        }
        throw Error(m(435, u.tag));
      }
      return Mc(l, a, e), Oc(), !1;
    }
    if (tl)
      return t = mt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, a !== zf && (l = Error(m(422), { cause: a }), Ya(vt(l, u)))) : (a !== zf && (t = Error(m(423), {
        cause: a
      }), Ya(
        vt(t, u)
      )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, a = vt(a, u), e = tc(
        l.stateNode,
        a,
        e
      ), qf(l, e), bl !== 4 && (bl = 2)), !1;
    var n = Error(m(520), { cause: a });
    if (n = vt(n, u), ue === null ? ue = [n] : ue.push(n), bl !== 4 && (bl = 2), t === null) return !0;
    a = vt(a, u), u = t;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = e & -e, u.lanes |= l, l = tc(u.stateNode, a, l), qf(u, l), !1;
        case 1:
          if (t = u.type, n = u.stateNode, (u.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (cu === null || !cu.has(n))))
            return u.flags |= 65536, e &= -e, u.lanes |= e, e = b0(e), T0(
              e,
              l,
              u,
              a
            ), qf(u, e), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var E0 = Error(m(461)), Nl = !1;
  function Yl(l, t, u, a) {
    t.child = l === null ? d0(t, null, u, a) : na(
      t,
      l.child,
      u,
      a
    );
  }
  function A0(l, t, u, a, e) {
    u = u.render;
    var n = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var c in a)
        c !== "ref" && (f[c] = a[c]);
    } else f = a;
    return Mu(t), a = jf(
      l,
      t,
      u,
      f,
      n,
      e
    ), c = Xf(), l !== null && !Nl ? (Cf(l, t, e), Xt(l, t, e)) : (tl && c && Ef(t), t.flags |= 1, Yl(l, t, a, e), t.child);
  }
  function z0(l, t, u, a, e) {
    if (l === null) {
      var n = u.type;
      return typeof n == "function" && !Sf(n) && n.defaultProps === void 0 && u.compare === null ? (t.tag = 15, t.type = n, _0(
        l,
        t,
        n,
        a,
        e
      )) : (l = Xe(
        u.type,
        null,
        a,
        t,
        t.mode,
        e
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !sc(l, e)) {
      var f = n.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Ha, u(f, a) && l.ref === t.ref)
        return Xt(l, t, e);
    }
    return t.flags |= 1, l = pt(n, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function _0(l, t, u, a, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Ha(n, a) && l.ref === t.ref)
        if (Nl = !1, t.pendingProps = a = n, sc(l, e))
          (l.flags & 131072) !== 0 && (Nl = !0);
        else
          return t.lanes = l.lanes, Xt(l, t, e);
    }
    return uc(
      l,
      t,
      u,
      a,
      e
    );
  }
  function O0(l, t, u) {
    var a = t.pendingProps, e = a.children, n = l !== null ? l.memoizedState : null;
    if (a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (a = n !== null ? n.baseLanes | u : u, l !== null) {
          for (e = t.child = l.child, n = 0; e !== null; )
            n = n | e.lanes | e.childLanes, e = e.sibling;
          t.childLanes = n & ~a;
        } else t.childLanes = 0, t.child = null;
        return D0(
          l,
          t,
          a,
          u
        );
      }
      if ((u & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Le(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? _s(t, n) : Yf(), v0(t);
      else
        return t.lanes = t.childLanes = 536870912, D0(
          l,
          t,
          n !== null ? n.baseLanes | u : u,
          u
        );
    } else
      n !== null ? (Le(t, n.cachePool), _s(t, n), tu(), t.memoizedState = null) : (l !== null && Le(t, null), Yf(), tu());
    return Yl(l, t, e, u), t.child;
  }
  function D0(l, t, u, a) {
    var e = Uf();
    return e = e === null ? null : { parent: Ol._currentValue, pool: e }, t.memoizedState = {
      baseLanes: u,
      cachePool: e
    }, l !== null && Le(t, null), Yf(), v0(t), l !== null && xa(l, t, a, !0), null;
  }
  function cn(l, t) {
    var u = t.ref;
    if (u === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(m(284));
      (l === null || l.ref !== u) && (t.flags |= 4194816);
    }
  }
  function uc(l, t, u, a, e) {
    return Mu(t), u = jf(
      l,
      t,
      u,
      a,
      void 0,
      e
    ), a = Xf(), l !== null && !Nl ? (Cf(l, t, e), Xt(l, t, e)) : (tl && a && Ef(t), t.flags |= 1, Yl(l, t, u, e), t.child);
  }
  function M0(l, t, u, a, e, n) {
    return Mu(t), t.updateQueue = null, u = Ds(
      t,
      a,
      u,
      e
    ), Os(l), a = Xf(), l !== null && !Nl ? (Cf(l, t, n), Xt(l, t, n)) : (tl && a && Ef(t), t.flags |= 1, Yl(l, t, u, n), t.child);
  }
  function R0(l, t, u, a, e) {
    if (Mu(t), t.stateNode === null) {
      var n = Wu, f = u.contextType;
      typeof f == "object" && f !== null && (n = Cl(f)), n = new u(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = lc, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, Hf(t), f = u.contextType, n.context = typeof f == "object" && f !== null ? Cl(f) : Wu, n.state = t.memoizedState, f = u.getDerivedStateFromProps, typeof f == "function" && (Pf(
        t,
        u,
        f,
        a
      ), n.state = t.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && lc.enqueueReplaceState(n, n.state, null), Va(t, a, n, e), Za(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps, i = Nu(u, c);
      n.props = i;
      var y = n.context, S = u.contextType;
      f = Wu, typeof S == "object" && S !== null && (f = Cl(S));
      var T = u.getDerivedStateFromProps;
      S = typeof T == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, S || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || y !== f) && h0(
        t,
        n,
        a,
        f
      ), $t = !1;
      var h = t.memoizedState;
      n.state = h, Va(t, a, n, e), Za(), y = t.memoizedState, c || h !== y || $t ? (typeof T == "function" && (Pf(
        t,
        u,
        T,
        a
      ), y = t.memoizedState), (i = $t || y0(
        t,
        u,
        i,
        a,
        h,
        y,
        f
      )) ? (S || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = y), n.props = a, n.state = y, n.context = f, a = i) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      n = t.stateNode, pf(l, t), f = t.memoizedProps, S = Nu(u, f), n.props = S, T = t.pendingProps, h = n.context, y = u.contextType, i = Wu, typeof y == "object" && y !== null && (i = Cl(y)), c = u.getDerivedStateFromProps, (y = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== T || h !== i) && h0(
        t,
        n,
        a,
        i
      ), $t = !1, h = t.memoizedState, n.state = h, Va(t, a, n, e), Za();
      var r = t.memoizedState;
      f !== T || h !== r || $t || l !== null && l.dependencies !== null && Ze(l.dependencies) ? (typeof c == "function" && (Pf(
        t,
        u,
        c,
        a
      ), r = t.memoizedState), (S = $t || y0(
        t,
        u,
        S,
        a,
        h,
        r,
        i
      ) || l !== null && l.dependencies !== null && Ze(l.dependencies)) ? (y || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, r, i), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        a,
        r,
        i
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = r), n.props = a, n.state = r, n.context = i, a = S) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 1024), a = !1);
    }
    return n = a, cn(l, t), a = (t.flags & 128) !== 0, n || a ? (n = t.stateNode, u = a && typeof u.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && a ? (t.child = na(
      t,
      l.child,
      null,
      e
    ), t.child = na(
      t,
      null,
      u,
      e
    )) : Yl(l, t, u, e), t.memoizedState = n.state, l = t.child) : l = Xt(
      l,
      t,
      e
    ), l;
  }
  function U0(l, t, u, a) {
    return Ba(), t.flags |= 256, Yl(l, t, u, a), t.child;
  }
  var ac = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ec(l) {
    return { baseLanes: l, cachePool: ms() };
  }
  function nc(l, t, u) {
    return l = l !== null ? l.childLanes & ~u : 0, t && (l |= gt), l;
  }
  function N0(l, t, u) {
    var a = t.pendingProps, e = !1, n = (t.flags & 128) !== 0, f;
    if ((f = n) || (f = l !== null && l.memoizedState === null ? !1 : (Dl.current & 2) !== 0), f && (e = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (tl) {
        if (e ? lu(t) : tu(), tl) {
          var c = Sl, i;
          if (i = c) {
            l: {
              for (i = c, c = Ot; i.nodeType !== 8; ) {
                if (!c) {
                  c = null;
                  break l;
                }
                if (i = At(
                  i.nextSibling
                ), i === null) {
                  c = null;
                  break l;
                }
              }
              c = i;
            }
            c !== null ? (t.memoizedState = {
              dehydrated: c,
              treeContext: Au !== null ? { id: qt, overflow: Bt } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, i = et(
              18,
              null,
              null,
              0
            ), i.stateNode = c, i.return = t, t.child = i, Kl = t, Sl = null, i = !0) : i = !1;
          }
          i || Ou(t);
        }
        if (c = t.memoizedState, c !== null && (c = c.dehydrated, c !== null))
          return Zc(c) ? t.lanes = 32 : t.lanes = 536870912, null;
        jt(t);
      }
      return c = a.children, a = a.fallback, e ? (tu(), e = t.mode, c = sn(
        { mode: "hidden", children: c },
        e
      ), a = Eu(
        a,
        e,
        u,
        null
      ), c.return = t, a.return = t, c.sibling = a, t.child = c, e = t.child, e.memoizedState = ec(u), e.childLanes = nc(
        l,
        f,
        u
      ), t.memoizedState = ac, a) : (lu(t), fc(t, c));
    }
    if (i = l.memoizedState, i !== null && (c = i.dehydrated, c !== null)) {
      if (n)
        t.flags & 256 ? (lu(t), t.flags &= -257, t = cc(
          l,
          t,
          u
        )) : t.memoizedState !== null ? (tu(), t.child = l.child, t.flags |= 128, t = null) : (tu(), e = a.fallback, c = t.mode, a = sn(
          { mode: "visible", children: a.children },
          c
        ), e = Eu(
          e,
          c,
          u,
          null
        ), e.flags |= 2, a.return = t, e.return = t, a.sibling = e, t.child = a, na(
          t,
          l.child,
          null,
          u
        ), a = t.child, a.memoizedState = ec(u), a.childLanes = nc(
          l,
          f,
          u
        ), t.memoizedState = ac, t = e);
      else if (lu(t), Zc(c)) {
        if (f = c.nextSibling && c.nextSibling.dataset, f) var y = f.dgst;
        f = y, a = Error(m(419)), a.stack = "", a.digest = f, Ya({ value: a, source: null, stack: null }), t = cc(
          l,
          t,
          u
        );
      } else if (Nl || xa(l, t, u, !1), f = (u & l.childLanes) !== 0, Nl || f) {
        if (f = hl, f !== null && (a = u & -u, a = (a & 42) !== 0 ? 1 : Zn(a), a = (a & (f.suspendedLanes | u)) !== 0 ? 0 : a, a !== 0 && a !== i.retryLane))
          throw i.retryLane = a, ku(l, a), st(f, l, a), E0;
        c.data === "$?" || Oc(), t = cc(
          l,
          t,
          u
        );
      } else
        c.data === "$?" ? (t.flags |= 192, t.child = l.child, t = null) : (l = i.treeContext, Sl = At(
          c.nextSibling
        ), Kl = t, tl = !0, _u = null, Ot = !1, l !== null && (ht[rt++] = qt, ht[rt++] = Bt, ht[rt++] = Au, qt = l.id, Bt = l.overflow, Au = t), t = fc(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return e ? (tu(), e = a.fallback, c = t.mode, i = l.child, y = i.sibling, a = pt(i, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = i.subtreeFlags & 65011712, y !== null ? e = pt(y, e) : (e = Eu(
      e,
      c,
      u,
      null
    ), e.flags |= 2), e.return = t, a.return = t, a.sibling = e, t.child = a, a = e, e = t.child, c = l.child.memoizedState, c === null ? c = ec(u) : (i = c.cachePool, i !== null ? (y = Ol._currentValue, i = i.parent !== y ? { parent: y, pool: y } : i) : i = ms(), c = {
      baseLanes: c.baseLanes | u,
      cachePool: i
    }), e.memoizedState = c, e.childLanes = nc(
      l,
      f,
      u
    ), t.memoizedState = ac, a) : (lu(t), u = l.child, l = u.sibling, u = pt(u, {
      mode: "visible",
      children: a.children
    }), u.return = t, u.sibling = null, l !== null && (f = t.deletions, f === null ? (t.deletions = [l], t.flags |= 16) : f.push(l)), t.child = u, t.memoizedState = null, u);
  }
  function fc(l, t) {
    return t = sn(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function sn(l, t) {
    return l = et(22, l, null, t), l.lanes = 0, l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, l;
  }
  function cc(l, t, u) {
    return na(t, l.child, null, u), l = fc(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function H0(l, t, u) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), Of(l.return, t, u);
  }
  function ic(l, t, u, a, e) {
    var n = l.memoizedState;
    n === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: u,
      tailMode: e
    } : (n.isBackwards = t, n.rendering = null, n.renderingStartTime = 0, n.last = a, n.tail = u, n.tailMode = e);
  }
  function p0(l, t, u) {
    var a = t.pendingProps, e = a.revealOrder, n = a.tail;
    if (Yl(l, t, a.children, u), a = Dl.current, (a & 2) !== 0)
      a = a & 1 | 2, t.flags |= 128;
    else {
      if (l !== null && (l.flags & 128) !== 0)
        l: for (l = t.child; l !== null; ) {
          if (l.tag === 13)
            l.memoizedState !== null && H0(l, u, t);
          else if (l.tag === 19)
            H0(l, u, t);
          else if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
          if (l === t) break l;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === t)
              break l;
            l = l.return;
          }
          l.sibling.return = l.return, l = l.sibling;
        }
      a &= 1;
    }
    switch (D(Dl, a), e) {
      case "forwards":
        for (u = t.child, e = null; u !== null; )
          l = u.alternate, l !== null && en(l) === null && (e = u), u = u.sibling;
        u = e, u === null ? (e = t.child, t.child = null) : (e = u.sibling, u.sibling = null), ic(
          t,
          !1,
          e,
          u,
          n
        );
        break;
      case "backwards":
        for (u = null, e = t.child, t.child = null; e !== null; ) {
          if (l = e.alternate, l !== null && en(l) === null) {
            t.child = e;
            break;
          }
          l = e.sibling, e.sibling = u, u = e, e = l;
        }
        ic(
          t,
          !0,
          u,
          null,
          n
        );
        break;
      case "together":
        ic(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Xt(l, t, u) {
    if (l !== null && (t.dependencies = l.dependencies), fu |= t.lanes, (u & t.childLanes) === 0)
      if (l !== null) {
        if (xa(
          l,
          t,
          u,
          !1
        ), (u & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(m(153));
    if (t.child !== null) {
      for (l = t.child, u = pt(l, l.pendingProps), t.child = u, u.return = t; l.sibling !== null; )
        l = l.sibling, u = u.sibling = pt(l, l.pendingProps), u.return = t;
      u.sibling = null;
    }
    return t.child;
  }
  function sc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Ze(l)));
  }
  function xv(l, t, u) {
    switch (t.tag) {
      case 3:
        rl(t, t.stateNode.containerInfo), Wt(t, Ol, l.memoizedState.cache), Ba();
        break;
      case 27:
      case 5:
        Gn(t);
        break;
      case 4:
        rl(t, t.stateNode.containerInfo);
        break;
      case 10:
        Wt(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (lu(t), t.flags |= 128, null) : (u & t.child.childLanes) !== 0 ? N0(l, t, u) : (lu(t), l = Xt(
            l,
            t,
            u
          ), l !== null ? l.sibling : null);
        lu(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (a = (u & t.childLanes) !== 0, a || (xa(
          l,
          t,
          u,
          !1
        ), a = (u & t.childLanes) !== 0), e) {
          if (a)
            return p0(
              l,
              t,
              u
            );
          t.flags |= 128;
        }
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), D(Dl, Dl.current), a) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, O0(l, t, u);
      case 24:
        Wt(t, Ol, l.memoizedState.cache);
    }
    return Xt(l, t, u);
  }
  function q0(l, t, u) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Nl = !0;
      else {
        if (!sc(l, u) && (t.flags & 128) === 0)
          return Nl = !1, xv(
            l,
            t,
            u
          );
        Nl = (l.flags & 131072) !== 0;
      }
    else
      Nl = !1, tl && (t.flags & 1048576) !== 0 && ss(t, Qe, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          l = t.pendingProps;
          var a = t.elementType, e = a._init;
          if (a = e(a._payload), t.type = a, typeof a == "function")
            Sf(a) ? (l = Nu(a, l), t.tag = 1, t = R0(
              null,
              t,
              a,
              l,
              u
            )) : (t.tag = 0, t = uc(
              null,
              t,
              a,
              l,
              u
            ));
          else {
            if (a != null) {
              if (e = a.$$typeof, e === Il) {
                t.tag = 11, t = A0(
                  null,
                  t,
                  a,
                  l,
                  u
                );
                break l;
              } else if (e === Vl) {
                t.tag = 14, t = z0(
                  null,
                  t,
                  a,
                  l,
                  u
                );
                break l;
              }
            }
            throw t = Ll(a) || a, Error(m(306, t, ""));
          }
        }
        return t;
      case 0:
        return uc(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 1:
        return a = t.type, e = Nu(
          a,
          t.pendingProps
        ), R0(
          l,
          t,
          a,
          e,
          u
        );
      case 3:
        l: {
          if (rl(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(m(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          e = n.element, pf(l, t), Va(t, a, null, u);
          var f = t.memoizedState;
          if (a = f.cache, Wt(t, Ol, a), a !== n.cache && Df(
            t,
            [Ol],
            u,
            !0
          ), Za(), a = f.element, n.isDehydrated)
            if (n = {
              element: a,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = U0(
                l,
                t,
                a,
                u
              );
              break l;
            } else if (a !== e) {
              e = vt(
                Error(m(424)),
                t
              ), Ya(e), t = U0(
                l,
                t,
                a,
                u
              );
              break l;
            } else {
              switch (l = t.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (Sl = At(l.firstChild), Kl = t, tl = !0, _u = null, Ot = !0, u = d0(
                t,
                null,
                a,
                u
              ), t.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (Ba(), a === e) {
              t = Xt(
                l,
                t,
                u
              );
              break l;
            }
            Yl(
              l,
              t,
              a,
              u
            );
          }
          t = t.child;
        }
        return t;
      case 26:
        return cn(l, t), l === null ? (u = jo(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = u : tl || (u = t.type, l = t.pendingProps, a = zn(
          G.current
        ).createElement(u), a[Xl] = t, a[Jl] = l, Gl(a, u, l), Ul(a), t.stateNode = a) : t.memoizedState = jo(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Gn(t), l === null && tl && (a = t.stateNode = Yo(
          t.type,
          t.pendingProps,
          G.current
        ), Kl = t, Ot = !0, e = Sl, ou(t.type) ? (Vc = e, Sl = At(
          a.firstChild
        )) : Sl = e), Yl(
          l,
          t,
          t.pendingProps.children,
          u
        ), cn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && tl && ((e = a = Sl) && (a = oy(
          a,
          t.type,
          t.pendingProps,
          Ot
        ), a !== null ? (t.stateNode = a, Kl = t, Sl = At(
          a.firstChild
        ), Ot = !1, e = !0) : e = !1), e || Ou(t)), Gn(t), e = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, a = n.children, Xc(e, n) ? a = null : f !== null && Xc(e, f) && (t.flags |= 32), t.memoizedState !== null && (e = jf(
          l,
          t,
          Rv,
          null,
          null,
          u
        ), de._currentValue = e), cn(l, t), Yl(l, t, a, u), t.child;
      case 6:
        return l === null && tl && ((l = u = Sl) && (u = dy(
          u,
          t.pendingProps,
          Ot
        ), u !== null ? (t.stateNode = u, Kl = t, Sl = null, l = !0) : l = !1), l || Ou(t)), null;
      case 13:
        return N0(l, t, u);
      case 4:
        return rl(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, l === null ? t.child = na(
          t,
          null,
          a,
          u
        ) : Yl(
          l,
          t,
          a,
          u
        ), t.child;
      case 11:
        return A0(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 7:
        return Yl(
          l,
          t,
          t.pendingProps,
          u
        ), t.child;
      case 8:
        return Yl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 12:
        return Yl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 10:
        return a = t.pendingProps, Wt(t, t.type, a.value), Yl(
          l,
          t,
          a.children,
          u
        ), t.child;
      case 9:
        return e = t.type._context, a = t.pendingProps.children, Mu(t), e = Cl(e), a = a(e), t.flags |= 1, Yl(l, t, a, u), t.child;
      case 14:
        return z0(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 15:
        return _0(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 19:
        return p0(l, t, u);
      case 31:
        return a = t.pendingProps, u = t.mode, a = {
          mode: a.mode,
          children: a.children
        }, l === null ? (u = sn(
          a,
          u
        ), u.ref = t.ref, t.child = u, u.return = t, t = u) : (u = pt(l.child, a), u.ref = t.ref, t.child = u, u.return = t, t = u), t;
      case 22:
        return O0(l, t, u);
      case 24:
        return Mu(t), a = Cl(Ol), l === null ? (e = Uf(), e === null && (e = hl, n = Mf(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= u), e = n), t.memoizedState = {
          parent: a,
          cache: e
        }, Hf(t), Wt(t, Ol, e)) : ((l.lanes & u) !== 0 && (pf(l, t), Va(t, null, null, u), Za()), e = l.memoizedState, n = t.memoizedState, e.parent !== a ? (e = { parent: a, cache: a }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), Wt(t, Ol, a)) : (a = n.cache, Wt(t, Ol, a), a !== e.cache && Df(
          t,
          [Ol],
          u,
          !0
        ))), Yl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(m(156, t.tag));
  }
  function Ct(l) {
    l.flags |= 4;
  }
  function B0(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Vo(t)) {
      if (t = mt.current, t !== null && ((W & 4194048) === W ? Dt !== null : (W & 62914560) !== W && (W & 536870912) === 0 || t !== Dt))
        throw Ca = Nf, gs;
      l.flags |= 8192;
    }
  }
  function on(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? vi() : 536870912, l.lanes |= t, sa |= t);
  }
  function $a(l, t) {
    if (!tl)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var u = null; t !== null; )
            t.alternate !== null && (u = t), t = t.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var a = null; u !== null; )
            u.alternate !== null && (a = u), u = u.sibling;
          a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null;
      }
  }
  function gl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, u = 0, a = 0;
    if (t)
      for (var e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags & 65011712, a |= e.flags & 65011712, e.return = l, e = e.sibling;
    else
      for (e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags, a |= e.flags, e.return = l, e = e.sibling;
    return l.subtreeFlags |= a, l.childLanes = u, t;
  }
  function Gv(l, t, u) {
    var a = t.pendingProps;
    switch (Af(t), t.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return gl(t), null;
      case 1:
        return gl(t), null;
      case 3:
        return u = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), xt(Ol), Kt(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (qa(t) ? Ct(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, vs())), gl(t), null;
      case 26:
        return u = t.memoizedState, l === null ? (Ct(t), u !== null ? (gl(t), B0(t, u)) : (gl(t), t.flags &= -16777217)) : u ? u !== l.memoizedState ? (Ct(t), gl(t), B0(t, u)) : (gl(t), t.flags &= -16777217) : (l.memoizedProps !== a && Ct(t), gl(t), t.flags &= -16777217), null;
      case 27:
        Te(t), u = G.current;
        var e = t.type;
        if (l !== null && t.stateNode != null)
          l.memoizedProps !== a && Ct(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(m(166));
            return gl(t), null;
          }
          l = H.current, qa(t) ? os(t) : (l = Yo(e, a, u), t.stateNode = l, Ct(t));
        }
        return gl(t), null;
      case 5:
        if (Te(t), u = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && Ct(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(m(166));
            return gl(t), null;
          }
          if (l = H.current, qa(t))
            os(t);
          else {
            switch (e = zn(
              G.current
            ), l) {
              case 1:
                l = e.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                l = e.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    l = e.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    l = e.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    l = e.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                    break;
                  case "select":
                    l = typeof a.is == "string" ? e.createElement("select", { is: a.is }) : e.createElement("select"), a.multiple ? l.multiple = !0 : a.size && (l.size = a.size);
                    break;
                  default:
                    l = typeof a.is == "string" ? e.createElement(u, { is: a.is }) : e.createElement(u);
                }
            }
            l[Xl] = t, l[Jl] = a;
            l: for (e = t.child; e !== null; ) {
              if (e.tag === 5 || e.tag === 6)
                l.appendChild(e.stateNode);
              else if (e.tag !== 4 && e.tag !== 27 && e.child !== null) {
                e.child.return = e, e = e.child;
                continue;
              }
              if (e === t) break l;
              for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                  break l;
                e = e.return;
              }
              e.sibling.return = e.return, e = e.sibling;
            }
            t.stateNode = l;
            l: switch (Gl(l, u, a), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!a.autoFocus;
                break l;
              case "img":
                l = !0;
                break l;
              default:
                l = !1;
            }
            l && Ct(t);
          }
        }
        return gl(t), t.flags &= -16777217, null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== a && Ct(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(m(166));
          if (l = G.current, qa(t)) {
            if (l = t.stateNode, u = t.memoizedProps, a = null, e = Kl, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  a = e.memoizedProps;
              }
            l[Xl] = t, l = !!(l.nodeValue === u || a !== null && a.suppressHydrationWarning === !0 || Ro(l.nodeValue, u)), l || Ou(t);
          } else
            l = zn(l).createTextNode(
              a
            ), l[Xl] = t, t.stateNode = l;
        }
        return gl(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = qa(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(m(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(m(317));
              e[Xl] = t;
            } else
              Ba(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            gl(t), e = !1;
          } else
            e = vs(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = !0;
          if (!e)
            return t.flags & 256 ? (jt(t), t) : (jt(t), null);
        }
        if (jt(t), (t.flags & 128) !== 0)
          return t.lanes = u, t;
        if (u = a !== null, l = l !== null && l.memoizedState !== null, u) {
          a = t.child, e = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (e = a.alternate.memoizedState.cachePool.pool);
          var n = null;
          a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== e && (a.flags |= 2048);
        }
        return u !== l && u && (t.child.flags |= 8192), on(t, t.updateQueue), gl(t), null;
      case 4:
        return Kt(), l === null && Bc(t.stateNode.containerInfo), gl(t), null;
      case 10:
        return xt(t.type), gl(t), null;
      case 19:
        if (M(Dl), e = t.memoizedState, e === null) return gl(t), null;
        if (a = (t.flags & 128) !== 0, n = e.rendering, n === null)
          if (a) $a(e, !1);
          else {
            if (bl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = en(l), n !== null) {
                  for (t.flags |= 128, $a(e, !1), l = n.updateQueue, t.updateQueue = l, on(t, l), t.subtreeFlags = 0, l = u, u = t.child; u !== null; )
                    is(u, l), u = u.sibling;
                  return D(
                    Dl,
                    Dl.current & 1 | 2
                  ), t.child;
                }
                l = l.sibling;
              }
            e.tail !== null && _t() > yn && (t.flags |= 128, a = !0, $a(e, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (l = en(n), l !== null) {
              if (t.flags |= 128, a = !0, l = l.updateQueue, t.updateQueue = l, on(t, l), $a(e, !0), e.tail === null && e.tailMode === "hidden" && !n.alternate && !tl)
                return gl(t), null;
            } else
              2 * _t() - e.renderingStartTime > yn && u !== 536870912 && (t.flags |= 128, a = !0, $a(e, !1), t.lanes = 4194304);
          e.isBackwards ? (n.sibling = t.child, t.child = n) : (l = e.last, l !== null ? l.sibling = n : t.child = n, e.last = n);
        }
        return e.tail !== null ? (t = e.tail, e.rendering = t, e.tail = t.sibling, e.renderingStartTime = _t(), t.sibling = null, l = Dl.current, D(Dl, a ? l & 1 | 2 : l & 1), t) : (gl(t), null);
      case 22:
      case 23:
        return jt(t), xf(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (u & 536870912) !== 0 && (t.flags & 128) === 0 && (gl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : gl(t), u = t.updateQueue, u !== null && on(t, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== u && (t.flags |= 2048), l !== null && M(Ru), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), xt(Ol), gl(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(m(156, t.tag));
  }
  function jv(l, t) {
    switch (Af(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return xt(Ol), Kt(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Te(t), null;
      case 13:
        if (jt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(m(340));
          Ba();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return M(Dl), null;
      case 4:
        return Kt(), null;
      case 10:
        return xt(t.type), null;
      case 22:
      case 23:
        return jt(t), xf(), l !== null && M(Ru), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return xt(Ol), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Y0(l, t) {
    switch (Af(t), t.tag) {
      case 3:
        xt(Ol), Kt();
        break;
      case 26:
      case 27:
      case 5:
        Te(t);
        break;
      case 4:
        Kt();
        break;
      case 13:
        jt(t);
        break;
      case 19:
        M(Dl);
        break;
      case 10:
        xt(t.type);
        break;
      case 22:
      case 23:
        jt(t), xf(), l !== null && M(Ru);
        break;
      case 24:
        xt(Ol);
    }
  }
  function Fa(l, t) {
    try {
      var u = t.updateQueue, a = u !== null ? u.lastEffect : null;
      if (a !== null) {
        var e = a.next;
        u = e;
        do {
          if ((u.tag & l) === l) {
            a = void 0;
            var n = u.create, f = u.inst;
            a = n(), f.destroy = a;
          }
          u = u.next;
        } while (u !== e);
      }
    } catch (c) {
      vl(t, t.return, c);
    }
  }
  function uu(l, t, u) {
    try {
      var a = t.updateQueue, e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var f = a.inst, c = f.destroy;
            if (c !== void 0) {
              f.destroy = void 0, e = t;
              var i = u, y = c;
              try {
                y();
              } catch (S) {
                vl(
                  e,
                  i,
                  S
                );
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (S) {
      vl(t, t.return, S);
    }
  }
  function x0(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var u = l.stateNode;
      try {
        zs(t, u);
      } catch (a) {
        vl(l, l.return, a);
      }
    }
  }
  function G0(l, t, u) {
    u.props = Nu(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (a) {
      vl(l, t, a);
    }
  }
  function Ia(l, t) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(a) : u.current = a;
      }
    } catch (e) {
      vl(l, t, e);
    }
  }
  function Mt(l, t) {
    var u = l.ref, a = l.refCleanup;
    if (u !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (e) {
          vl(l, t, e);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (e) {
          vl(l, t, e);
        }
      else u.current = null;
  }
  function j0(l) {
    var t = l.type, u = l.memoizedProps, a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && a.focus();
          break l;
        case "img":
          u.src ? a.src = u.src : u.srcSet && (a.srcset = u.srcSet);
      }
    } catch (e) {
      vl(l, l.return, e);
    }
  }
  function oc(l, t, u) {
    try {
      var a = l.stateNode;
      ny(a, l.type, u, t), a[Jl] = t;
    } catch (e) {
      vl(l, l.return, e);
    }
  }
  function X0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && ou(l.type) || l.tag === 4;
  }
  function dc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || X0(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && ou(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function vc(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, t) : (t = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, t.appendChild(l), u = u._reactRootContainer, u != null || t.onclick !== null || (t.onclick = An));
    else if (a !== 4 && (a === 27 && ou(l.type) && (u = l.stateNode, t = null), l = l.child, l !== null))
      for (vc(l, t, u), l = l.sibling; l !== null; )
        vc(l, t, u), l = l.sibling;
  }
  function dn(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? u.insertBefore(l, t) : u.appendChild(l);
    else if (a !== 4 && (a === 27 && ou(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (dn(l, t, u), l = l.sibling; l !== null; )
        dn(l, t, u), l = l.sibling;
  }
  function C0(l) {
    var t = l.stateNode, u = l.memoizedProps;
    try {
      for (var a = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      Gl(t, a, u), t[Xl] = l, t[Jl] = u;
    } catch (n) {
      vl(l, l.return, n);
    }
  }
  var Qt = !1, El = !1, yc = !1, Q0 = typeof WeakSet == "function" ? WeakSet : Set, Hl = null;
  function Xv(l, t) {
    if (l = l.containerInfo, Gc = Un, l = Ii(l), df(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var a = u.getSelection && u.getSelection();
          if (a && a.rangeCount !== 0) {
            u = a.anchorNode;
            var e = a.anchorOffset, n = a.focusNode;
            a = a.focusOffset;
            try {
              u.nodeType, n.nodeType;
            } catch {
              u = null;
              break l;
            }
            var f = 0, c = -1, i = -1, y = 0, S = 0, T = l, h = null;
            t: for (; ; ) {
              for (var r; T !== u || e !== 0 && T.nodeType !== 3 || (c = f + e), T !== n || a !== 0 && T.nodeType !== 3 || (i = f + a), T.nodeType === 3 && (f += T.nodeValue.length), (r = T.firstChild) !== null; )
                h = T, T = r;
              for (; ; ) {
                if (T === l) break t;
                if (h === u && ++y === e && (c = f), h === n && ++S === a && (i = f), (r = T.nextSibling) !== null) break;
                T = h, h = T.parentNode;
              }
              T = r;
            }
            u = c === -1 || i === -1 ? null : { start: c, end: i };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (jc = { focusedElem: l, selectionRange: u }, Un = !1, Hl = t; Hl !== null; )
      if (t = Hl, l = t.child, (t.subtreeFlags & 1024) !== 0 && l !== null)
        l.return = t, Hl = l;
      else
        for (; Hl !== null; ) {
          switch (t = Hl, n = t.alternate, l = t.flags, t.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                l = void 0, u = t, e = n.memoizedProps, n = n.memoizedState, a = u.stateNode;
                try {
                  var Y = Nu(
                    u.type,
                    e,
                    u.elementType === u.type
                  );
                  l = a.getSnapshotBeforeUpdate(
                    Y,
                    n
                  ), a.__reactInternalSnapshotBeforeUpdate = l;
                } catch (p) {
                  vl(
                    u,
                    u.return,
                    p
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = t.stateNode.containerInfo, u = l.nodeType, u === 9)
                  Qc(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Qc(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(m(163));
          }
          if (l = t.sibling, l !== null) {
            l.return = t.return, Hl = l;
            break;
          }
          Hl = t.return;
        }
  }
  function Z0(l, t, u) {
    var a = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        au(l, u), a & 4 && Fa(5, u);
        break;
      case 1:
        if (au(l, u), a & 4)
          if (l = u.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (f) {
              vl(u, u.return, f);
            }
          else {
            var e = Nu(
              u.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              l.componentDidUpdate(
                e,
                t,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              vl(
                u,
                u.return,
                f
              );
            }
          }
        a & 64 && x0(u), a & 512 && Ia(u, u.return);
        break;
      case 3:
        if (au(l, u), a & 64 && (l = u.updateQueue, l !== null)) {
          if (t = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                t = u.child.stateNode;
                break;
              case 1:
                t = u.child.stateNode;
            }
          try {
            zs(l, t);
          } catch (f) {
            vl(u, u.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && C0(u);
      case 26:
      case 5:
        au(l, u), t === null && a & 4 && j0(u), a & 512 && Ia(u, u.return);
        break;
      case 12:
        au(l, u);
        break;
      case 13:
        au(l, u), a & 4 && K0(l, u), a & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = kv.bind(
          null,
          u
        ), vy(l, u))));
        break;
      case 22:
        if (a = u.memoizedState !== null || Qt, !a) {
          t = t !== null && t.memoizedState !== null || El, e = Qt;
          var n = El;
          Qt = a, (El = t) && !n ? eu(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : au(l, u), Qt = e, El = n;
        }
        break;
      case 30:
        break;
      default:
        au(l, u);
    }
  }
  function V0(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, V0(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && Kn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var ml = null, Wl = !1;
  function Zt(l, t, u) {
    for (u = u.child; u !== null; )
      L0(l, t, u), u = u.sibling;
  }
  function L0(l, t, u) {
    if (tt && typeof tt.onCommitFiberUnmount == "function")
      try {
        tt.onCommitFiberUnmount(ba, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        El || Mt(u, t), Zt(
          l,
          t,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        El || Mt(u, t);
        var a = ml, e = Wl;
        ou(u.type) && (ml = u.stateNode, Wl = !1), Zt(
          l,
          t,
          u
        ), ce(u.stateNode), ml = a, Wl = e;
        break;
      case 5:
        El || Mt(u, t);
      case 6:
        if (a = ml, e = Wl, ml = null, Zt(
          l,
          t,
          u
        ), ml = a, Wl = e, ml !== null)
          if (Wl)
            try {
              (ml.nodeType === 9 ? ml.body : ml.nodeName === "HTML" ? ml.ownerDocument.body : ml).removeChild(u.stateNode);
            } catch (n) {
              vl(
                u,
                t,
                n
              );
            }
          else
            try {
              ml.removeChild(u.stateNode);
            } catch (n) {
              vl(
                u,
                t,
                n
              );
            }
        break;
      case 18:
        ml !== null && (Wl ? (l = ml, qo(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), re(l)) : qo(ml, u.stateNode));
        break;
      case 4:
        a = ml, e = Wl, ml = u.stateNode.containerInfo, Wl = !0, Zt(
          l,
          t,
          u
        ), ml = a, Wl = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        El || uu(2, u, t), El || uu(4, u, t), Zt(
          l,
          t,
          u
        );
        break;
      case 1:
        El || (Mt(u, t), a = u.stateNode, typeof a.componentWillUnmount == "function" && G0(
          u,
          t,
          a
        )), Zt(
          l,
          t,
          u
        );
        break;
      case 21:
        Zt(
          l,
          t,
          u
        );
        break;
      case 22:
        El = (a = El) || u.memoizedState !== null, Zt(
          l,
          t,
          u
        ), El = a;
        break;
      default:
        Zt(
          l,
          t,
          u
        );
    }
  }
  function K0(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        re(l);
      } catch (u) {
        vl(t, t.return, u);
      }
  }
  function Cv(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Q0()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new Q0()), t;
      default:
        throw Error(m(435, l.tag));
    }
  }
  function hc(l, t) {
    var u = Cv(l);
    t.forEach(function(a) {
      var e = Wv.bind(null, l, a);
      u.has(a) || (u.add(a), a.then(e, e));
    });
  }
  function nt(l, t) {
    var u = t.deletions;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var e = u[a], n = l, f = t, c = f;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (ou(c.type)) {
                ml = c.stateNode, Wl = !1;
                break l;
              }
              break;
            case 5:
              ml = c.stateNode, Wl = !1;
              break l;
            case 3:
            case 4:
              ml = c.stateNode.containerInfo, Wl = !0;
              break l;
          }
          c = c.return;
        }
        if (ml === null) throw Error(m(160));
        L0(n, f, e), ml = null, Wl = !1, n = e.alternate, n !== null && (n.return = null), e.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        J0(t, l), t = t.sibling;
  }
  var Et = null;
  function J0(l, t) {
    var u = l.alternate, a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        nt(t, l), ft(l), a & 4 && (uu(3, l, l.return), Fa(3, l), uu(5, l, l.return));
        break;
      case 1:
        nt(t, l), ft(l), a & 512 && (El || u === null || Mt(u, u.return)), a & 64 && Qt && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? a : u.concat(a))));
        break;
      case 26:
        var e = Et;
        if (nt(t, l), ft(l), a & 512 && (El || u === null || Mt(u, u.return)), a & 4) {
          var n = u !== null ? u.memoizedState : null;
          if (a = l.memoizedState, u === null)
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  a = l.type, u = l.memoizedProps, e = e.ownerDocument || e;
                  t: switch (a) {
                    case "title":
                      n = e.getElementsByTagName("title")[0], (!n || n[Aa] || n[Xl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(a), e.head.insertBefore(
                        n,
                        e.querySelector("head > title")
                      )), Gl(n, a, u), n[Xl] = l, Ul(n), a = n;
                      break l;
                    case "link":
                      var f = Qo(
                        "link",
                        "href",
                        e
                      ).get(a + (u.href || ""));
                      if (f) {
                        for (var c = 0; c < f.length; c++)
                          if (n = f[c], n.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && n.getAttribute("rel") === (u.rel == null ? null : u.rel) && n.getAttribute("title") === (u.title == null ? null : u.title) && n.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      n = e.createElement(a), Gl(n, a, u), e.head.appendChild(n);
                      break;
                    case "meta":
                      if (f = Qo(
                        "meta",
                        "content",
                        e
                      ).get(a + (u.content || ""))) {
                        for (c = 0; c < f.length; c++)
                          if (n = f[c], n.getAttribute("content") === (u.content == null ? null : "" + u.content) && n.getAttribute("name") === (u.name == null ? null : u.name) && n.getAttribute("property") === (u.property == null ? null : u.property) && n.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && n.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      n = e.createElement(a), Gl(n, a, u), e.head.appendChild(n);
                      break;
                    default:
                      throw Error(m(468, a));
                  }
                  n[Xl] = l, Ul(n), a = n;
                }
                l.stateNode = a;
              } else
                Zo(
                  e,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = Co(
                e,
                a,
                l.memoizedProps
              );
          else
            n !== a ? (n === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : n.count--, a === null ? Zo(
              e,
              l.type,
              l.stateNode
            ) : Co(
              e,
              a,
              l.memoizedProps
            )) : a === null && l.stateNode !== null && oc(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        nt(t, l), ft(l), a & 512 && (El || u === null || Mt(u, u.return)), u !== null && a & 4 && oc(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (nt(t, l), ft(l), a & 512 && (El || u === null || Mt(u, u.return)), l.flags & 32) {
          e = l.stateNode;
          try {
            Qu(e, "");
          } catch (r) {
            vl(l, l.return, r);
          }
        }
        a & 4 && l.stateNode != null && (e = l.memoizedProps, oc(
          l,
          e,
          u !== null ? u.memoizedProps : e
        )), a & 1024 && (yc = !0);
        break;
      case 6:
        if (nt(t, l), ft(l), a & 4) {
          if (l.stateNode === null)
            throw Error(m(162));
          a = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = a;
          } catch (r) {
            vl(l, l.return, r);
          }
        }
        break;
      case 3:
        if (Dn = null, e = Et, Et = _n(t.containerInfo), nt(t, l), Et = e, ft(l), a & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            re(t.containerInfo);
          } catch (r) {
            vl(l, l.return, r);
          }
        yc && (yc = !1, w0(l));
        break;
      case 4:
        a = Et, Et = _n(
          l.stateNode.containerInfo
        ), nt(t, l), ft(l), Et = a;
        break;
      case 12:
        nt(t, l), ft(l);
        break;
      case 13:
        nt(t, l), ft(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Tc = _t()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, hc(l, a)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var i = u !== null && u.memoizedState !== null, y = Qt, S = El;
        if (Qt = y || e, El = S || i, nt(t, l), El = S, Qt = y, ft(l), a & 8192)
          l: for (t = l.stateNode, t._visibility = e ? t._visibility & -2 : t._visibility | 1, e && (u === null || i || Qt || El || Hu(l)), u = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (u === null) {
                i = u = t;
                try {
                  if (n = i.stateNode, e)
                    f = n.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    c = i.stateNode;
                    var T = i.memoizedProps.style, h = T != null && T.hasOwnProperty("display") ? T.display : null;
                    c.style.display = h == null || typeof h == "boolean" ? "" : ("" + h).trim();
                  }
                } catch (r) {
                  vl(i, i.return, r);
                }
              }
            } else if (t.tag === 6) {
              if (u === null) {
                i = t;
                try {
                  i.stateNode.nodeValue = e ? "" : i.memoizedProps;
                } catch (r) {
                  vl(i, i.return, r);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              u === t && (u = null), t = t.return;
            }
            u === t && (u = null), t.sibling.return = t.return, t = t.sibling;
          }
        a & 4 && (a = l.updateQueue, a !== null && (u = a.retryQueue, u !== null && (a.retryQueue = null, hc(l, u))));
        break;
      case 19:
        nt(t, l), ft(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, hc(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        nt(t, l), ft(l);
    }
  }
  function ft(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var u, a = l.return; a !== null; ) {
          if (X0(a)) {
            u = a;
            break;
          }
          a = a.return;
        }
        if (u == null) throw Error(m(160));
        switch (u.tag) {
          case 27:
            var e = u.stateNode, n = dc(l);
            dn(l, n, e);
            break;
          case 5:
            var f = u.stateNode;
            u.flags & 32 && (Qu(f, ""), u.flags &= -33);
            var c = dc(l);
            dn(l, c, f);
            break;
          case 3:
          case 4:
            var i = u.stateNode.containerInfo, y = dc(l);
            vc(
              l,
              y,
              i
            );
            break;
          default:
            throw Error(m(161));
        }
      } catch (S) {
        vl(l, l.return, S);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function w0(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        w0(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function au(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Z0(l, t.alternate, t), t = t.sibling;
  }
  function Hu(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          uu(4, t, t.return), Hu(t);
          break;
        case 1:
          Mt(t, t.return);
          var u = t.stateNode;
          typeof u.componentWillUnmount == "function" && G0(
            t,
            t.return,
            u
          ), Hu(t);
          break;
        case 27:
          ce(t.stateNode);
        case 26:
        case 5:
          Mt(t, t.return), Hu(t);
          break;
        case 22:
          t.memoizedState === null && Hu(t);
          break;
        case 30:
          Hu(t);
          break;
        default:
          Hu(t);
      }
      l = l.sibling;
    }
  }
  function eu(l, t, u) {
    for (u = u && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, e = l, n = t, f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          eu(
            e,
            n,
            u
          ), Fa(4, n);
          break;
        case 1:
          if (eu(
            e,
            n,
            u
          ), a = n, e = a.stateNode, typeof e.componentDidMount == "function")
            try {
              e.componentDidMount();
            } catch (y) {
              vl(a, a.return, y);
            }
          if (a = n, e = a.updateQueue, e !== null) {
            var c = a.stateNode;
            try {
              var i = e.shared.hiddenCallbacks;
              if (i !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++)
                  As(i[e], c);
            } catch (y) {
              vl(a, a.return, y);
            }
          }
          u && f & 64 && x0(n), Ia(n, n.return);
          break;
        case 27:
          C0(n);
        case 26:
        case 5:
          eu(
            e,
            n,
            u
          ), u && a === null && f & 4 && j0(n), Ia(n, n.return);
          break;
        case 12:
          eu(
            e,
            n,
            u
          );
          break;
        case 13:
          eu(
            e,
            n,
            u
          ), u && f & 4 && K0(e, n);
          break;
        case 22:
          n.memoizedState === null && eu(
            e,
            n,
            u
          ), Ia(n, n.return);
          break;
        case 30:
          break;
        default:
          eu(
            e,
            n,
            u
          );
      }
      t = t.sibling;
    }
  }
  function rc(l, t) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Ga(u));
  }
  function mc(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Ga(l));
  }
  function Rt(l, t, u, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        k0(
          l,
          t,
          u,
          a
        ), t = t.sibling;
  }
  function k0(l, t, u, a) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Rt(
          l,
          t,
          u,
          a
        ), e & 2048 && Fa(9, t);
        break;
      case 1:
        Rt(
          l,
          t,
          u,
          a
        );
        break;
      case 3:
        Rt(
          l,
          t,
          u,
          a
        ), e & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Ga(l)));
        break;
      case 12:
        if (e & 2048) {
          Rt(
            l,
            t,
            u,
            a
          ), l = t.stateNode;
          try {
            var n = t.memoizedProps, f = n.id, c = n.onPostCommit;
            typeof c == "function" && c(
              f,
              t.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (i) {
            vl(t, t.return, i);
          }
        } else
          Rt(
            l,
            t,
            u,
            a
          );
        break;
      case 13:
        Rt(
          l,
          t,
          u,
          a
        );
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, f = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? Rt(
          l,
          t,
          u,
          a
        ) : Pa(l, t) : n._visibility & 2 ? Rt(
          l,
          t,
          u,
          a
        ) : (n._visibility |= 2, fa(
          l,
          t,
          u,
          a,
          (t.subtreeFlags & 10256) !== 0
        )), e & 2048 && rc(f, t);
        break;
      case 24:
        Rt(
          l,
          t,
          u,
          a
        ), e & 2048 && mc(t.alternate, t);
        break;
      default:
        Rt(
          l,
          t,
          u,
          a
        );
    }
  }
  function fa(l, t, u, a, e) {
    for (e = e && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var n = l, f = t, c = u, i = a, y = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          fa(
            n,
            f,
            c,
            i,
            e
          ), Fa(8, f);
          break;
        case 23:
          break;
        case 22:
          var S = f.stateNode;
          f.memoizedState !== null ? S._visibility & 2 ? fa(
            n,
            f,
            c,
            i,
            e
          ) : Pa(
            n,
            f
          ) : (S._visibility |= 2, fa(
            n,
            f,
            c,
            i,
            e
          )), e && y & 2048 && rc(
            f.alternate,
            f
          );
          break;
        case 24:
          fa(
            n,
            f,
            c,
            i,
            e
          ), e && y & 2048 && mc(f.alternate, f);
          break;
        default:
          fa(
            n,
            f,
            c,
            i,
            e
          );
      }
      t = t.sibling;
    }
  }
  function Pa(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var u = l, a = t, e = a.flags;
        switch (a.tag) {
          case 22:
            Pa(u, a), e & 2048 && rc(
              a.alternate,
              a
            );
            break;
          case 24:
            Pa(u, a), e & 2048 && mc(a.alternate, a);
            break;
          default:
            Pa(u, a);
        }
        t = t.sibling;
      }
  }
  var le = 8192;
  function ca(l) {
    if (l.subtreeFlags & le)
      for (l = l.child; l !== null; )
        W0(l), l = l.sibling;
  }
  function W0(l) {
    switch (l.tag) {
      case 26:
        ca(l), l.flags & le && l.memoizedState !== null && Oy(
          Et,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        ca(l);
        break;
      case 3:
      case 4:
        var t = Et;
        Et = _n(l.stateNode.containerInfo), ca(l), Et = t;
        break;
      case 22:
        l.memoizedState === null && (t = l.alternate, t !== null && t.memoizedState !== null ? (t = le, le = 16777216, ca(l), le = t) : ca(l));
        break;
      default:
        ca(l);
    }
  }
  function $0(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function te(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          Hl = a, I0(
            a,
            l
          );
        }
      $0(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        F0(l), l = l.sibling;
  }
  function F0(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        te(l), l.flags & 2048 && uu(9, l, l.return);
        break;
      case 3:
        te(l);
        break;
      case 12:
        te(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, vn(l)) : te(l);
        break;
      default:
        te(l);
    }
  }
  function vn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          Hl = a, I0(
            a,
            l
          );
        }
      $0(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          uu(8, t, t.return), vn(t);
          break;
        case 22:
          u = t.stateNode, u._visibility & 2 && (u._visibility &= -3, vn(t));
          break;
        default:
          vn(t);
      }
      l = l.sibling;
    }
  }
  function I0(l, t) {
    for (; Hl !== null; ) {
      var u = Hl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          uu(8, u, t);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var a = u.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Ga(u.memoizedState.cache);
      }
      if (a = u.child, a !== null) a.return = u, Hl = a;
      else
        l: for (u = l; Hl !== null; ) {
          a = Hl;
          var e = a.sibling, n = a.return;
          if (V0(a), a === u) {
            Hl = null;
            break l;
          }
          if (e !== null) {
            e.return = n, Hl = e;
            break l;
          }
          Hl = n;
        }
    }
  }
  var Qv = {
    getCacheForType: function(l) {
      var t = Cl(Ol), u = t.data.get(l);
      return u === void 0 && (u = l(), t.data.set(l, u)), u;
    }
  }, Zv = typeof WeakMap == "function" ? WeakMap : Map, nl = 0, hl = null, V = null, W = 0, fl = 0, ct = null, nu = !1, ia = !1, gc = !1, Vt = 0, bl = 0, fu = 0, pu = 0, Sc = 0, gt = 0, sa = 0, ue = null, $l = null, bc = !1, Tc = 0, yn = 1 / 0, hn = null, cu = null, xl = 0, iu = null, oa = null, da = 0, Ec = 0, Ac = null, P0 = null, ae = 0, zc = null;
  function it() {
    if ((nl & 2) !== 0 && W !== 0)
      return W & -W;
    if (g.T !== null) {
      var l = Iu;
      return l !== 0 ? l : Nc();
    }
    return ri();
  }
  function lo() {
    gt === 0 && (gt = (W & 536870912) === 0 || tl ? di() : 536870912);
    var l = mt.current;
    return l !== null && (l.flags |= 32), gt;
  }
  function st(l, t, u) {
    (l === hl && (fl === 2 || fl === 9) || l.cancelPendingCommit !== null) && (va(l, 0), su(
      l,
      W,
      gt,
      !1
    )), Ea(l, u), ((nl & 2) === 0 || l !== hl) && (l === hl && ((nl & 2) === 0 && (pu |= u), bl === 4 && su(
      l,
      W,
      gt,
      !1
    )), Ut(l));
  }
  function to(l, t, u) {
    if ((nl & 6) !== 0) throw Error(m(327));
    var a = !u && (t & 124) === 0 && (t & l.expiredLanes) === 0 || Ta(l, t), e = a ? Kv(l, t) : Dc(l, t, !0), n = a;
    do {
      if (e === 0) {
        ia && !a && su(l, t, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, n && !Vv(u)) {
          e = Dc(l, t, !1), n = !1;
          continue;
        }
        if (e === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n)
            var f = 0;
          else
            f = l.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            t = f;
            l: {
              var c = l;
              e = ue;
              var i = c.current.memoizedState.isDehydrated;
              if (i && (va(c, f).flags |= 256), f = Dc(
                c,
                f,
                !1
              ), f !== 2) {
                if (gc && !i) {
                  c.errorRecoveryDisabledLanes |= n, pu |= n, e = 4;
                  break l;
                }
                n = $l, $l = e, n !== null && ($l === null ? $l = n : $l.push.apply(
                  $l,
                  n
                ));
              }
              e = f;
            }
            if (n = !1, e !== 2) continue;
          }
        }
        if (e === 1) {
          va(l, 0), su(l, t, 0, !0);
          break;
        }
        l: {
          switch (a = l, n = e, n) {
            case 0:
            case 1:
              throw Error(m(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              su(
                a,
                t,
                gt,
                !nu
              );
              break l;
            case 2:
              $l = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(m(329));
          }
          if ((t & 62914560) === t && (e = Tc + 300 - _t(), 10 < e)) {
            if (su(
              a,
              t,
              gt,
              !nu
            ), _e(a, 0, !0) !== 0) break l;
            a.timeoutHandle = Ho(
              uo.bind(
                null,
                a,
                u,
                $l,
                hn,
                bc,
                t,
                gt,
                pu,
                sa,
                nu,
                n,
                2,
                -0,
                0
              ),
              e
            );
            break l;
          }
          uo(
            a,
            u,
            $l,
            hn,
            bc,
            t,
            gt,
            pu,
            sa,
            nu,
            n,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Ut(l);
  }
  function uo(l, t, u, a, e, n, f, c, i, y, S, T, h, r) {
    if (l.timeoutHandle = -1, T = t.subtreeFlags, (T & 8192 || (T & 16785408) === 16785408) && (oe = { stylesheets: null, count: 0, unsuspend: _y }, W0(t), T = Dy(), T !== null)) {
      l.cancelPendingCommit = T(
        so.bind(
          null,
          l,
          t,
          n,
          u,
          a,
          e,
          f,
          c,
          i,
          S,
          1,
          h,
          r
        )
      ), su(l, n, f, !y);
      return;
    }
    so(
      l,
      t,
      n,
      u,
      a,
      e,
      f,
      c,
      i
    );
  }
  function Vv(l) {
    for (var t = l; ; ) {
      var u = t.tag;
      if ((u === 0 || u === 11 || u === 15) && t.flags & 16384 && (u = t.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var a = 0; a < u.length; a++) {
          var e = u[a], n = e.getSnapshot;
          e = e.value;
          try {
            if (!at(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = t.child, t.subtreeFlags & 16384 && u !== null)
        u.return = t, t = u;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function su(l, t, u, a) {
    t &= ~Sc, t &= ~pu, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - ut(e), f = 1 << n;
      a[n] = -1, e &= ~f;
    }
    u !== 0 && yi(l, u, t);
  }
  function rn() {
    return (nl & 6) === 0 ? (ee(0), !1) : !0;
  }
  function _c() {
    if (V !== null) {
      if (fl === 0)
        var l = V.return;
      else
        l = V, Yt = Du = null, Qf(l), ea = null, ka = 0, l = V;
      for (; l !== null; )
        Y0(l.alternate, l), l = l.return;
      V = null;
    }
  }
  function va(l, t) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, cy(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), _c(), hl = l, V = u = pt(l.current, null), W = t, fl = 0, ct = null, nu = !1, ia = Ta(l, t), gc = !1, sa = gt = Sc = pu = fu = bl = 0, $l = ue = null, bc = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var e = 31 - ut(a), n = 1 << e;
        t |= l[e], a &= ~n;
      }
    return Vt = t, xe(), u;
  }
  function ao(l, t) {
    Q = null, g.H = tn, t === Xa || t === Ke ? (t = Ts(), fl = 3) : t === gs ? (t = Ts(), fl = 4) : fl = t === E0 ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ct = t, V === null && (bl = 1, fn(
      l,
      vt(t, l.current)
    ));
  }
  function eo() {
    var l = g.H;
    return g.H = tn, l === null ? tn : l;
  }
  function no() {
    var l = g.A;
    return g.A = Qv, l;
  }
  function Oc() {
    bl = 4, nu || (W & 4194048) !== W && mt.current !== null || (ia = !0), (fu & 134217727) === 0 && (pu & 134217727) === 0 || hl === null || su(
      hl,
      W,
      gt,
      !1
    );
  }
  function Dc(l, t, u) {
    var a = nl;
    nl |= 2;
    var e = eo(), n = no();
    (hl !== l || W !== t) && (hn = null, va(l, t)), t = !1;
    var f = bl;
    l: do
      try {
        if (fl !== 0 && V !== null) {
          var c = V, i = ct;
          switch (fl) {
            case 8:
              _c(), f = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              mt.current === null && (t = !0);
              var y = fl;
              if (fl = 0, ct = null, ya(l, c, i, y), u && ia) {
                f = 0;
                break l;
              }
              break;
            default:
              y = fl, fl = 0, ct = null, ya(l, c, i, y);
          }
        }
        Lv(), f = bl;
        break;
      } catch (S) {
        ao(l, S);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Yt = Du = null, nl = a, g.H = e, g.A = n, V === null && (hl = null, W = 0, xe()), f;
  }
  function Lv() {
    for (; V !== null; ) fo(V);
  }
  function Kv(l, t) {
    var u = nl;
    nl |= 2;
    var a = eo(), e = no();
    hl !== l || W !== t ? (hn = null, yn = _t() + 500, va(l, t)) : ia = Ta(
      l,
      t
    );
    l: do
      try {
        if (fl !== 0 && V !== null) {
          t = V;
          var n = ct;
          t: switch (fl) {
            case 1:
              fl = 0, ct = null, ya(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (Ss(n)) {
                fl = 0, ct = null, co(t);
                break;
              }
              t = function() {
                fl !== 2 && fl !== 9 || hl !== l || (fl = 7), Ut(l);
              }, n.then(t, t);
              break l;
            case 3:
              fl = 7;
              break l;
            case 4:
              fl = 5;
              break l;
            case 7:
              Ss(n) ? (fl = 0, ct = null, co(t)) : (fl = 0, ct = null, ya(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (V.tag) {
                case 26:
                  f = V.memoizedState;
                case 5:
                case 27:
                  var c = V;
                  if (!f || Vo(f)) {
                    fl = 0, ct = null;
                    var i = c.sibling;
                    if (i !== null) V = i;
                    else {
                      var y = c.return;
                      y !== null ? (V = y, mn(y)) : V = null;
                    }
                    break t;
                  }
              }
              fl = 0, ct = null, ya(l, t, n, 5);
              break;
            case 6:
              fl = 0, ct = null, ya(l, t, n, 6);
              break;
            case 8:
              _c(), bl = 6;
              break l;
            default:
              throw Error(m(462));
          }
        }
        Jv();
        break;
      } catch (S) {
        ao(l, S);
      }
    while (!0);
    return Yt = Du = null, g.H = a, g.A = e, nl = u, V !== null ? 0 : (hl = null, W = 0, xe(), bl);
  }
  function Jv() {
    for (; V !== null && !hd(); )
      fo(V);
  }
  function fo(l) {
    var t = q0(l.alternate, l, Vt);
    l.memoizedProps = l.pendingProps, t === null ? mn(l) : V = t;
  }
  function co(l) {
    var t = l, u = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = M0(
          u,
          t,
          t.pendingProps,
          t.type,
          void 0,
          W
        );
        break;
      case 11:
        t = M0(
          u,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          W
        );
        break;
      case 5:
        Qf(t);
      default:
        Y0(u, t), t = V = is(t, Vt), t = q0(u, t, Vt);
    }
    l.memoizedProps = l.pendingProps, t === null ? mn(l) : V = t;
  }
  function ya(l, t, u, a) {
    Yt = Du = null, Qf(t), ea = null, ka = 0;
    var e = t.return;
    try {
      if (Yv(
        l,
        e,
        t,
        u,
        W
      )) {
        bl = 1, fn(
          l,
          vt(u, l.current)
        ), V = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw V = e, n;
      bl = 1, fn(
        l,
        vt(u, l.current)
      ), V = null;
      return;
    }
    t.flags & 32768 ? (tl || a === 1 ? l = !0 : ia || (W & 536870912) !== 0 ? l = !1 : (nu = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = mt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), io(t, l)) : mn(t);
  }
  function mn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        io(
          t,
          nu
        );
        return;
      }
      l = t.return;
      var u = Gv(
        t.alternate,
        t,
        Vt
      );
      if (u !== null) {
        V = u;
        return;
      }
      if (t = t.sibling, t !== null) {
        V = t;
        return;
      }
      V = t = l;
    } while (t !== null);
    bl === 0 && (bl = 5);
  }
  function io(l, t) {
    do {
      var u = jv(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, V = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !t && (l = l.sibling, l !== null)) {
        V = l;
        return;
      }
      V = l = u;
    } while (l !== null);
    bl = 6, V = null;
  }
  function so(l, t, u, a, e, n, f, c, i) {
    l.cancelPendingCommit = null;
    do
      gn();
    while (xl !== 0);
    if ((nl & 6) !== 0) throw Error(m(327));
    if (t !== null) {
      if (t === l.current) throw Error(m(177));
      if (n = t.lanes | t.childLanes, n |= mf, _d(
        l,
        u,
        n,
        f,
        c,
        i
      ), l === hl && (V = hl = null, W = 0), oa = t, iu = l, da = u, Ec = n, Ac = e, P0 = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, $v(Ee, function() {
        return ro(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = g.T, g.T = null, e = _.p, _.p = 2, f = nl, nl |= 4;
        try {
          Xv(l, t, u);
        } finally {
          nl = f, _.p = e, g.T = a;
        }
      }
      xl = 1, oo(), vo(), yo();
    }
  }
  function oo() {
    if (xl === 1) {
      xl = 0;
      var l = iu, t = oa, u = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || u) {
        u = g.T, g.T = null;
        var a = _.p;
        _.p = 2;
        var e = nl;
        nl |= 4;
        try {
          J0(t, l);
          var n = jc, f = Ii(l.containerInfo), c = n.focusedElem, i = n.selectionRange;
          if (f !== c && c && c.ownerDocument && Fi(
            c.ownerDocument.documentElement,
            c
          )) {
            if (i !== null && df(c)) {
              var y = i.start, S = i.end;
              if (S === void 0 && (S = y), "selectionStart" in c)
                c.selectionStart = y, c.selectionEnd = Math.min(
                  S,
                  c.value.length
                );
              else {
                var T = c.ownerDocument || document, h = T && T.defaultView || window;
                if (h.getSelection) {
                  var r = h.getSelection(), Y = c.textContent.length, p = Math.min(i.start, Y), ol = i.end === void 0 ? p : Math.min(i.end, Y);
                  !r.extend && p > ol && (f = ol, ol = p, p = f);
                  var d = $i(
                    c,
                    p
                  ), o = $i(
                    c,
                    ol
                  );
                  if (d && o && (r.rangeCount !== 1 || r.anchorNode !== d.node || r.anchorOffset !== d.offset || r.focusNode !== o.node || r.focusOffset !== o.offset)) {
                    var v = T.createRange();
                    v.setStart(d.node, d.offset), r.removeAllRanges(), p > ol ? (r.addRange(v), r.extend(o.node, o.offset)) : (v.setEnd(o.node, o.offset), r.addRange(v));
                  }
                }
              }
            }
            for (T = [], r = c; r = r.parentNode; )
              r.nodeType === 1 && T.push({
                element: r,
                left: r.scrollLeft,
                top: r.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < T.length; c++) {
              var b = T[c];
              b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
            }
          }
          Un = !!Gc, jc = Gc = null;
        } finally {
          nl = e, _.p = a, g.T = u;
        }
      }
      l.current = t, xl = 2;
    }
  }
  function vo() {
    if (xl === 2) {
      xl = 0;
      var l = iu, t = oa, u = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || u) {
        u = g.T, g.T = null;
        var a = _.p;
        _.p = 2;
        var e = nl;
        nl |= 4;
        try {
          Z0(l, t.alternate, t);
        } finally {
          nl = e, _.p = a, g.T = u;
        }
      }
      xl = 3;
    }
  }
  function yo() {
    if (xl === 4 || xl === 3) {
      xl = 0, rd();
      var l = iu, t = oa, u = da, a = P0;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? xl = 5 : (xl = 0, oa = iu = null, ho(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (e === 0 && (cu = null), Vn(u), t = t.stateNode, tt && typeof tt.onCommitFiberRoot == "function")
        try {
          tt.onCommitFiberRoot(
            ba,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = g.T, e = _.p, _.p = 2, g.T = null;
        try {
          for (var n = l.onRecoverableError, f = 0; f < a.length; f++) {
            var c = a[f];
            n(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          g.T = t, _.p = e;
        }
      }
      (da & 3) !== 0 && gn(), Ut(l), e = l.pendingLanes, (u & 4194090) !== 0 && (e & 42) !== 0 ? l === zc ? ae++ : (ae = 0, zc = l) : ae = 0, ee(0);
    }
  }
  function ho(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Ga(t)));
  }
  function gn(l) {
    return oo(), vo(), yo(), ro();
  }
  function ro() {
    if (xl !== 5) return !1;
    var l = iu, t = Ec;
    Ec = 0;
    var u = Vn(da), a = g.T, e = _.p;
    try {
      _.p = 32 > u ? 32 : u, g.T = null, u = Ac, Ac = null;
      var n = iu, f = da;
      if (xl = 0, oa = iu = null, da = 0, (nl & 6) !== 0) throw Error(m(331));
      var c = nl;
      if (nl |= 4, F0(n.current), k0(
        n,
        n.current,
        f,
        u
      ), nl = c, ee(0, !1), tt && typeof tt.onPostCommitFiberRoot == "function")
        try {
          tt.onPostCommitFiberRoot(ba, n);
        } catch {
        }
      return !0;
    } finally {
      _.p = e, g.T = a, ho(l, t);
    }
  }
  function mo(l, t, u) {
    t = vt(u, t), t = tc(l.stateNode, t, 2), l = It(l, t, 2), l !== null && (Ea(l, 2), Ut(l));
  }
  function vl(l, t, u) {
    if (l.tag === 3)
      mo(l, l, u);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          mo(
            t,
            l,
            u
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (cu === null || !cu.has(a))) {
            l = vt(u, l), u = b0(2), a = It(t, u, 2), a !== null && (T0(
              u,
              a,
              t,
              l
            ), Ea(a, 2), Ut(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Mc(l, t, u) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new Zv();
      var e = /* @__PURE__ */ new Set();
      a.set(t, e);
    } else
      e = a.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), a.set(t, e));
    e.has(u) || (gc = !0, e.add(u), l = wv.bind(null, l, t, u), t.then(l, l));
  }
  function wv(l, t, u) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, hl === l && (W & u) === u && (bl === 4 || bl === 3 && (W & 62914560) === W && 300 > _t() - Tc ? (nl & 2) === 0 && va(l, 0) : Sc |= u, sa === W && (sa = 0)), Ut(l);
  }
  function go(l, t) {
    t === 0 && (t = vi()), l = ku(l, t), l !== null && (Ea(l, t), Ut(l));
  }
  function kv(l) {
    var t = l.memoizedState, u = 0;
    t !== null && (u = t.retryLane), go(l, u);
  }
  function Wv(l, t) {
    var u = 0;
    switch (l.tag) {
      case 13:
        var a = l.stateNode, e = l.memoizedState;
        e !== null && (u = e.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(m(314));
    }
    a !== null && a.delete(t), go(l, u);
  }
  function $v(l, t) {
    return Xn(l, t);
  }
  var Sn = null, ha = null, Rc = !1, bn = !1, Uc = !1, qu = 0;
  function Ut(l) {
    l !== ha && l.next === null && (ha === null ? Sn = ha = l : ha = ha.next = l), bn = !0, Rc || (Rc = !0, Iv());
  }
  function ee(l, t) {
    if (!Uc && bn) {
      Uc = !0;
      do
        for (var u = !1, a = Sn; a !== null; ) {
          if (l !== 0) {
            var e = a.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = a.suspendedLanes, c = a.pingedLanes;
              n = (1 << 31 - ut(42 | l) + 1) - 1, n &= e & ~(f & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (u = !0, Eo(a, n));
          } else
            n = W, n = _e(
              a,
              a === hl ? n : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (n & 3) === 0 || Ta(a, n) || (u = !0, Eo(a, n));
          a = a.next;
        }
      while (u);
      Uc = !1;
    }
  }
  function Fv() {
    So();
  }
  function So() {
    bn = Rc = !1;
    var l = 0;
    qu !== 0 && (fy() && (l = qu), qu = 0);
    for (var t = _t(), u = null, a = Sn; a !== null; ) {
      var e = a.next, n = bo(a, t);
      n === 0 ? (a.next = null, u === null ? Sn = e : u.next = e, e === null && (ha = u)) : (u = a, (l !== 0 || (n & 3) !== 0) && (bn = !0)), a = e;
    }
    ee(l);
  }
  function bo(l, t) {
    for (var u = l.suspendedLanes, a = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - ut(n), c = 1 << f, i = e[f];
      i === -1 ? ((c & u) === 0 || (c & a) !== 0) && (e[f] = zd(c, t)) : i <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = hl, u = W, u = _e(
      l,
      l === t ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a = l.callbackNode, u === 0 || l === t && (fl === 2 || fl === 9) || l.cancelPendingCommit !== null)
      return a !== null && a !== null && Cn(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || Ta(l, u)) {
      if (t = u & -u, t === l.callbackPriority) return t;
      switch (a !== null && Cn(a), Vn(u)) {
        case 2:
        case 8:
          u = si;
          break;
        case 32:
          u = Ee;
          break;
        case 268435456:
          u = oi;
          break;
        default:
          u = Ee;
      }
      return a = To.bind(null, l), u = Xn(u, a), l.callbackPriority = t, l.callbackNode = u, t;
    }
    return a !== null && a !== null && Cn(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function To(l, t) {
    if (xl !== 0 && xl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (gn() && l.callbackNode !== u)
      return null;
    var a = W;
    return a = _e(
      l,
      l === hl ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a === 0 ? null : (to(l, a, t), bo(l, _t()), l.callbackNode != null && l.callbackNode === u ? To.bind(null, l) : null);
  }
  function Eo(l, t) {
    if (gn()) return null;
    to(l, t, !0);
  }
  function Iv() {
    iy(function() {
      (nl & 6) !== 0 ? Xn(
        ii,
        Fv
      ) : So();
    });
  }
  function Nc() {
    return qu === 0 && (qu = di()), qu;
  }
  function Ao(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Ue("" + l);
  }
  function zo(l, t) {
    var u = t.ownerDocument.createElement("input");
    return u.name = t.name, u.value = t.value, l.id && u.setAttribute("form", l.id), t.parentNode.insertBefore(u, t), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function Pv(l, t, u, a, e) {
    if (t === "submit" && u && u.stateNode === e) {
      var n = Ao(
        (e[Jl] || null).action
      ), f = a.submitter;
      f && (t = (t = f[Jl] || null) ? Ao(t.formAction) : f.getAttribute("formAction"), t !== null && (n = t, f = null));
      var c = new qe(
        "action",
        "action",
        null,
        a,
        e
      );
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (qu !== 0) {
                  var i = f ? zo(e, f) : new FormData(e);
                  $f(
                    u,
                    {
                      pending: !0,
                      data: i,
                      method: e.method,
                      action: n
                    },
                    null,
                    i
                  );
                }
              } else
                typeof n == "function" && (c.preventDefault(), i = f ? zo(e, f) : new FormData(e), $f(
                  u,
                  {
                    pending: !0,
                    data: i,
                    method: e.method,
                    action: n
                  },
                  n,
                  i
                ));
            },
            currentTarget: e
          }
        ]
      });
    }
  }
  for (var Hc = 0; Hc < rf.length; Hc++) {
    var pc = rf[Hc], ly = pc.toLowerCase(), ty = pc[0].toUpperCase() + pc.slice(1);
    Tt(
      ly,
      "on" + ty
    );
  }
  Tt(ts, "onAnimationEnd"), Tt(us, "onAnimationIteration"), Tt(as, "onAnimationStart"), Tt("dblclick", "onDoubleClick"), Tt("focusin", "onFocus"), Tt("focusout", "onBlur"), Tt(Sv, "onTransitionRun"), Tt(bv, "onTransitionStart"), Tt(Tv, "onTransitionCancel"), Tt(es, "onTransitionEnd"), ju("onMouseEnter", ["mouseout", "mouseover"]), ju("onMouseLeave", ["mouseout", "mouseover"]), ju("onPointerEnter", ["pointerout", "pointerover"]), ju("onPointerLeave", ["pointerout", "pointerover"]), gu(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), gu(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), gu("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), gu(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), gu(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), gu(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ne = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), uy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ne)
  );
  function _o(l, t) {
    t = (t & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var a = l[u], e = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var f = a.length - 1; 0 <= f; f--) {
            var c = a[f], i = c.instance, y = c.currentTarget;
            if (c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = y;
            try {
              n(e);
            } catch (S) {
              nn(S);
            }
            e.currentTarget = null, n = i;
          }
        else
          for (f = 0; f < a.length; f++) {
            if (c = a[f], i = c.instance, y = c.currentTarget, c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = y;
            try {
              n(e);
            } catch (S) {
              nn(S);
            }
            e.currentTarget = null, n = i;
          }
      }
    }
  }
  function L(l, t) {
    var u = t[Ln];
    u === void 0 && (u = t[Ln] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    u.has(a) || (Oo(t, l, 2, !1), u.add(a));
  }
  function qc(l, t, u) {
    var a = 0;
    t && (a |= 4), Oo(
      u,
      l,
      a,
      t
    );
  }
  var Tn = "_reactListening" + Math.random().toString(36).slice(2);
  function Bc(l) {
    if (!l[Tn]) {
      l[Tn] = !0, gi.forEach(function(u) {
        u !== "selectionchange" && (uy.has(u) || qc(u, !1, l), qc(u, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Tn] || (t[Tn] = !0, qc("selectionchange", !1, t));
    }
  }
  function Oo(l, t, u, a) {
    switch (Wo(t)) {
      case 2:
        var e = Uy;
        break;
      case 8:
        e = Ny;
        break;
      default:
        e = kc;
    }
    u = e.bind(
      null,
      t,
      u,
      l
    ), e = void 0, !tf || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = !0), a ? e !== void 0 ? l.addEventListener(t, u, {
      capture: !0,
      passive: e
    }) : l.addEventListener(t, u, !0) : e !== void 0 ? l.addEventListener(t, u, {
      passive: e
    }) : l.addEventListener(t, u, !1);
  }
  function Yc(l, t, u, a, e) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (; ; ) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var c = a.stateNode.containerInfo;
          if (c === e) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var i = f.tag;
              if ((i === 3 || i === 4) && f.stateNode.containerInfo === e)
                return;
              f = f.return;
            }
          for (; c !== null; ) {
            if (f = Yu(c), f === null) return;
            if (i = f.tag, i === 5 || i === 6 || i === 26 || i === 27) {
              a = n = f;
              continue l;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
    Hi(function() {
      var y = n, S = Pn(u), T = [];
      l: {
        var h = ns.get(l);
        if (h !== void 0) {
          var r = qe, Y = l;
          switch (l) {
            case "keypress":
              if (He(u) === 0) break l;
            case "keydown":
            case "keyup":
              r = $d;
              break;
            case "focusin":
              Y = "focus", r = nf;
              break;
            case "focusout":
              Y = "blur", r = nf;
              break;
            case "beforeblur":
            case "afterblur":
              r = nf;
              break;
            case "click":
              if (u.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              r = Bi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              r = jd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              r = Pd;
              break;
            case ts:
            case us:
            case as:
              r = Qd;
              break;
            case es:
              r = tv;
              break;
            case "scroll":
            case "scrollend":
              r = xd;
              break;
            case "wheel":
              r = av;
              break;
            case "copy":
            case "cut":
            case "paste":
              r = Vd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              r = xi;
              break;
            case "toggle":
            case "beforetoggle":
              r = nv;
          }
          var p = (t & 4) !== 0, ol = !p && (l === "scroll" || l === "scrollend"), d = p ? h !== null ? h + "Capture" : null : h;
          p = [];
          for (var o = y, v; o !== null; ) {
            var b = o;
            if (v = b.stateNode, b = b.tag, b !== 5 && b !== 26 && b !== 27 || v === null || d === null || (b = _a(o, d), b != null && p.push(
              fe(o, b, v)
            )), ol) break;
            o = o.return;
          }
          0 < p.length && (h = new r(
            h,
            Y,
            null,
            u,
            S
          ), T.push({ event: h, listeners: p }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (h = l === "mouseover" || l === "pointerover", r = l === "mouseout" || l === "pointerout", h && u !== In && (Y = u.relatedTarget || u.fromElement) && (Yu(Y) || Y[Bu]))
            break l;
          if ((r || h) && (h = S.window === S ? S : (h = S.ownerDocument) ? h.defaultView || h.parentWindow : window, r ? (Y = u.relatedTarget || u.toElement, r = y, Y = Y ? Yu(Y) : null, Y !== null && (ol = ll(Y), p = Y.tag, Y !== ol || p !== 5 && p !== 27 && p !== 6) && (Y = null)) : (r = null, Y = y), r !== Y)) {
            if (p = Bi, b = "onMouseLeave", d = "onMouseEnter", o = "mouse", (l === "pointerout" || l === "pointerover") && (p = xi, b = "onPointerLeave", d = "onPointerEnter", o = "pointer"), ol = r == null ? h : za(r), v = Y == null ? h : za(Y), h = new p(
              b,
              o + "leave",
              r,
              u,
              S
            ), h.target = ol, h.relatedTarget = v, b = null, Yu(S) === y && (p = new p(
              d,
              o + "enter",
              Y,
              u,
              S
            ), p.target = v, p.relatedTarget = ol, b = p), ol = b, r && Y)
              t: {
                for (p = r, d = Y, o = 0, v = p; v; v = ra(v))
                  o++;
                for (v = 0, b = d; b; b = ra(b))
                  v++;
                for (; 0 < o - v; )
                  p = ra(p), o--;
                for (; 0 < v - o; )
                  d = ra(d), v--;
                for (; o--; ) {
                  if (p === d || d !== null && p === d.alternate)
                    break t;
                  p = ra(p), d = ra(d);
                }
                p = null;
              }
            else p = null;
            r !== null && Do(
              T,
              h,
              r,
              p,
              !1
            ), Y !== null && ol !== null && Do(
              T,
              ol,
              Y,
              p,
              !0
            );
          }
        }
        l: {
          if (h = y ? za(y) : window, r = h.nodeName && h.nodeName.toLowerCase(), r === "select" || r === "input" && h.type === "file")
            var R = Li;
          else if (Zi(h))
            if (Ki)
              R = rv;
            else {
              R = yv;
              var Z = vv;
            }
          else
            r = h.nodeName, !r || r.toLowerCase() !== "input" || h.type !== "checkbox" && h.type !== "radio" ? y && Fn(y.elementType) && (R = Li) : R = hv;
          if (R && (R = R(l, y))) {
            Vi(
              T,
              R,
              u,
              S
            );
            break l;
          }
          Z && Z(l, h, y), l === "focusout" && y && h.type === "number" && y.memoizedProps.value != null && $n(h, "number", h.value);
        }
        switch (Z = y ? za(y) : window, l) {
          case "focusin":
            (Zi(Z) || Z.contentEditable === "true") && (Ku = Z, vf = y, pa = null);
            break;
          case "focusout":
            pa = vf = Ku = null;
            break;
          case "mousedown":
            yf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            yf = !1, Pi(T, u, S);
            break;
          case "selectionchange":
            if (gv) break;
          case "keydown":
          case "keyup":
            Pi(T, u, S);
        }
        var U;
        if (cf)
          l: {
            switch (l) {
              case "compositionstart":
                var q = "onCompositionStart";
                break l;
              case "compositionend":
                q = "onCompositionEnd";
                break l;
              case "compositionupdate":
                q = "onCompositionUpdate";
                break l;
            }
            q = void 0;
          }
        else
          Lu ? Ci(l, u) && (q = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (q = "onCompositionStart");
        q && (Gi && u.locale !== "ko" && (Lu || q !== "onCompositionStart" ? q === "onCompositionEnd" && Lu && (U = pi()) : (kt = S, uf = "value" in kt ? kt.value : kt.textContent, Lu = !0)), Z = En(y, q), 0 < Z.length && (q = new Yi(
          q,
          l,
          null,
          u,
          S
        ), T.push({ event: q, listeners: Z }), U ? q.data = U : (U = Qi(u), U !== null && (q.data = U)))), (U = cv ? iv(l, u) : sv(l, u)) && (q = En(y, "onBeforeInput"), 0 < q.length && (Z = new Yi(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          S
        ), T.push({
          event: Z,
          listeners: q
        }), Z.data = U)), Pv(
          T,
          l,
          y,
          u,
          S
        );
      }
      _o(T, t);
    });
  }
  function fe(l, t, u) {
    return {
      instance: l,
      listener: t,
      currentTarget: u
    };
  }
  function En(l, t) {
    for (var u = t + "Capture", a = []; l !== null; ) {
      var e = l, n = e.stateNode;
      if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = _a(l, u), e != null && a.unshift(
        fe(l, e, n)
      ), e = _a(l, t), e != null && a.push(
        fe(l, e, n)
      )), l.tag === 3) return a;
      l = l.return;
    }
    return [];
  }
  function ra(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Do(l, t, u, a, e) {
    for (var n = t._reactName, f = []; u !== null && u !== a; ) {
      var c = u, i = c.alternate, y = c.stateNode;
      if (c = c.tag, i !== null && i === a) break;
      c !== 5 && c !== 26 && c !== 27 || y === null || (i = y, e ? (y = _a(u, n), y != null && f.unshift(
        fe(u, y, i)
      )) : e || (y = _a(u, n), y != null && f.push(
        fe(u, y, i)
      ))), u = u.return;
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var ay = /\r\n?/g, ey = /\u0000|\uFFFD/g;
  function Mo(l) {
    return (typeof l == "string" ? l : "" + l).replace(ay, `
`).replace(ey, "");
  }
  function Ro(l, t) {
    return t = Mo(t), Mo(l) === t;
  }
  function An() {
  }
  function sl(l, t, u, a, e, n) {
    switch (u) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Qu(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Qu(l, "" + a);
        break;
      case "className":
        De(l, "class", a);
        break;
      case "tabIndex":
        De(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        De(l, u, a);
        break;
      case "style":
        Ui(l, a, n);
        break;
      case "data":
        if (t !== "object") {
          De(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = Ue("" + a), l.setAttribute(u, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (u === "formAction" ? (t !== "input" && sl(l, t, "name", e.name, e, null), sl(
            l,
            t,
            "formEncType",
            e.formEncType,
            e,
            null
          ), sl(
            l,
            t,
            "formMethod",
            e.formMethod,
            e,
            null
          ), sl(
            l,
            t,
            "formTarget",
            e.formTarget,
            e,
            null
          )) : (sl(l, t, "encType", e.encType, e, null), sl(l, t, "method", e.method, e, null), sl(l, t, "target", e.target, e, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = Ue("" + a), l.setAttribute(u, a);
        break;
      case "onClick":
        a != null && (l.onclick = An);
        break;
      case "onScroll":
        a != null && L("scroll", l);
        break;
      case "onScrollEnd":
        a != null && L("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(m(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(m(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = Ue("" + a), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, "" + a) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        a === !0 ? l.setAttribute(u, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(u) : l.setAttribute(u, a);
        break;
      case "popover":
        L("beforetoggle", l), L("toggle", l), Oe(l, "popover", a);
        break;
      case "xlinkActuate":
        Nt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Nt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Nt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Nt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Nt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Nt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Nt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Nt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Nt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Oe(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = Bd.get(u) || u, Oe(l, u, a));
    }
  }
  function xc(l, t, u, a, e, n) {
    switch (u) {
      case "style":
        Ui(l, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(m(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(m(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof a == "string" ? Qu(l, a) : (typeof a == "number" || typeof a == "bigint") && Qu(l, "" + a);
        break;
      case "onScroll":
        a != null && L("scroll", l);
        break;
      case "onScrollEnd":
        a != null && L("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = An);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Si.hasOwnProperty(u))
          l: {
            if (u[0] === "o" && u[1] === "n" && (e = u.endsWith("Capture"), t = u.slice(2, e ? u.length - 7 : void 0), n = l[Jl] || null, n = n != null ? n[u] : null, typeof n == "function" && l.removeEventListener(t, n, e), typeof a == "function")) {
              typeof n != "function" && n !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(t, a, e);
              break l;
            }
            u in l ? l[u] = a : a === !0 ? l.setAttribute(u, "") : Oe(l, u, a);
          }
    }
  }
  function Gl(l, t, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        L("error", l), L("load", l);
        var a = !1, e = !1, n;
        for (n in u)
          if (u.hasOwnProperty(n)) {
            var f = u[n];
            if (f != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(m(137, t));
                default:
                  sl(l, t, n, f, u, null);
              }
          }
        e && sl(l, t, "srcSet", u.srcSet, u, null), a && sl(l, t, "src", u.src, u, null);
        return;
      case "input":
        L("invalid", l);
        var c = n = f = e = null, i = null, y = null;
        for (a in u)
          if (u.hasOwnProperty(a)) {
            var S = u[a];
            if (S != null)
              switch (a) {
                case "name":
                  e = S;
                  break;
                case "type":
                  f = S;
                  break;
                case "checked":
                  i = S;
                  break;
                case "defaultChecked":
                  y = S;
                  break;
                case "value":
                  n = S;
                  break;
                case "defaultValue":
                  c = S;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (S != null)
                    throw Error(m(137, t));
                  break;
                default:
                  sl(l, t, a, S, u, null);
              }
          }
        Oi(
          l,
          n,
          c,
          i,
          y,
          f,
          e,
          !1
        ), Me(l);
        return;
      case "select":
        L("invalid", l), a = f = n = null;
        for (e in u)
          if (u.hasOwnProperty(e) && (c = u[e], c != null))
            switch (e) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                f = c;
                break;
              case "multiple":
                a = c;
              default:
                sl(l, t, e, c, u, null);
            }
        t = n, u = f, l.multiple = !!a, t != null ? Cu(l, !!a, t, !1) : u != null && Cu(l, !!a, u, !0);
        return;
      case "textarea":
        L("invalid", l), n = e = a = null;
        for (f in u)
          if (u.hasOwnProperty(f) && (c = u[f], c != null))
            switch (f) {
              case "value":
                a = c;
                break;
              case "defaultValue":
                e = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(m(91));
                break;
              default:
                sl(l, t, f, c, u, null);
            }
        Mi(l, a, e, n), Me(l);
        return;
      case "option":
        for (i in u)
          if (u.hasOwnProperty(i) && (a = u[i], a != null))
            switch (i) {
              case "selected":
                l.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                sl(l, t, i, a, u, null);
            }
        return;
      case "dialog":
        L("beforetoggle", l), L("toggle", l), L("cancel", l), L("close", l);
        break;
      case "iframe":
      case "object":
        L("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ne.length; a++)
          L(ne[a], l);
        break;
      case "image":
        L("error", l), L("load", l);
        break;
      case "details":
        L("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        L("error", l), L("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (y in u)
          if (u.hasOwnProperty(y) && (a = u[y], a != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(m(137, t));
              default:
                sl(l, t, y, a, u, null);
            }
        return;
      default:
        if (Fn(t)) {
          for (S in u)
            u.hasOwnProperty(S) && (a = u[S], a !== void 0 && xc(
              l,
              t,
              S,
              a,
              u,
              void 0
            ));
          return;
        }
    }
    for (c in u)
      u.hasOwnProperty(c) && (a = u[c], a != null && sl(l, t, c, a, u, null));
  }
  function ny(l, t, u, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null, n = null, f = null, c = null, i = null, y = null, S = null;
        for (r in u) {
          var T = u[r];
          if (u.hasOwnProperty(r) && T != null)
            switch (r) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                i = T;
              default:
                a.hasOwnProperty(r) || sl(l, t, r, null, a, T);
            }
        }
        for (var h in a) {
          var r = a[h];
          if (T = u[h], a.hasOwnProperty(h) && (r != null || T != null))
            switch (h) {
              case "type":
                n = r;
                break;
              case "name":
                e = r;
                break;
              case "checked":
                y = r;
                break;
              case "defaultChecked":
                S = r;
                break;
              case "value":
                f = r;
                break;
              case "defaultValue":
                c = r;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (r != null)
                  throw Error(m(137, t));
                break;
              default:
                r !== T && sl(
                  l,
                  t,
                  h,
                  r,
                  a,
                  T
                );
            }
        }
        Wn(
          l,
          f,
          c,
          i,
          y,
          S,
          n,
          e
        );
        return;
      case "select":
        r = f = c = h = null;
        for (n in u)
          if (i = u[n], u.hasOwnProperty(n) && i != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                r = i;
              default:
                a.hasOwnProperty(n) || sl(
                  l,
                  t,
                  n,
                  null,
                  a,
                  i
                );
            }
        for (e in a)
          if (n = a[e], i = u[e], a.hasOwnProperty(e) && (n != null || i != null))
            switch (e) {
              case "value":
                h = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                f = n;
              default:
                n !== i && sl(
                  l,
                  t,
                  e,
                  n,
                  a,
                  i
                );
            }
        t = c, u = f, a = r, h != null ? Cu(l, !!u, h, !1) : !!a != !!u && (t != null ? Cu(l, !!u, t, !0) : Cu(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        r = h = null;
        for (c in u)
          if (e = u[c], u.hasOwnProperty(c) && e != null && !a.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                sl(l, t, c, null, a, e);
            }
        for (f in a)
          if (e = a[f], n = u[f], a.hasOwnProperty(f) && (e != null || n != null))
            switch (f) {
              case "value":
                h = e;
                break;
              case "defaultValue":
                r = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(m(91));
                break;
              default:
                e !== n && sl(l, t, f, e, a, n);
            }
        Di(l, h, r);
        return;
      case "option":
        for (var Y in u)
          if (h = u[Y], u.hasOwnProperty(Y) && h != null && !a.hasOwnProperty(Y))
            switch (Y) {
              case "selected":
                l.selected = !1;
                break;
              default:
                sl(
                  l,
                  t,
                  Y,
                  null,
                  a,
                  h
                );
            }
        for (i in a)
          if (h = a[i], r = u[i], a.hasOwnProperty(i) && h !== r && (h != null || r != null))
            switch (i) {
              case "selected":
                l.selected = h && typeof h != "function" && typeof h != "symbol";
                break;
              default:
                sl(
                  l,
                  t,
                  i,
                  h,
                  a,
                  r
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var p in u)
          h = u[p], u.hasOwnProperty(p) && h != null && !a.hasOwnProperty(p) && sl(l, t, p, null, a, h);
        for (y in a)
          if (h = a[y], r = u[y], a.hasOwnProperty(y) && h !== r && (h != null || r != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (h != null)
                  throw Error(m(137, t));
                break;
              default:
                sl(
                  l,
                  t,
                  y,
                  h,
                  a,
                  r
                );
            }
        return;
      default:
        if (Fn(t)) {
          for (var ol in u)
            h = u[ol], u.hasOwnProperty(ol) && h !== void 0 && !a.hasOwnProperty(ol) && xc(
              l,
              t,
              ol,
              void 0,
              a,
              h
            );
          for (S in a)
            h = a[S], r = u[S], !a.hasOwnProperty(S) || h === r || h === void 0 && r === void 0 || xc(
              l,
              t,
              S,
              h,
              a,
              r
            );
          return;
        }
    }
    for (var d in u)
      h = u[d], u.hasOwnProperty(d) && h != null && !a.hasOwnProperty(d) && sl(l, t, d, null, a, h);
    for (T in a)
      h = a[T], r = u[T], !a.hasOwnProperty(T) || h === r || h == null && r == null || sl(l, t, T, h, a, r);
  }
  var Gc = null, jc = null;
  function zn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Uo(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function No(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Xc(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Cc = null;
  function fy() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Cc ? !1 : (Cc = l, !0) : (Cc = null, !1);
  }
  var Ho = typeof setTimeout == "function" ? setTimeout : void 0, cy = typeof clearTimeout == "function" ? clearTimeout : void 0, po = typeof Promise == "function" ? Promise : void 0, iy = typeof queueMicrotask == "function" ? queueMicrotask : typeof po < "u" ? function(l) {
    return po.resolve(null).then(l).catch(sy);
  } : Ho;
  function sy(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function ou(l) {
    return l === "head";
  }
  function qo(l, t) {
    var u = t, a = 0, e = 0;
    do {
      var n = u.nextSibling;
      if (l.removeChild(u), n && n.nodeType === 8)
        if (u = n.data, u === "/$") {
          if (0 < a && 8 > a) {
            u = a;
            var f = l.ownerDocument;
            if (u & 1 && ce(f.documentElement), u & 2 && ce(f.body), u & 4)
              for (u = f.head, ce(u), f = u.firstChild; f; ) {
                var c = f.nextSibling, i = f.nodeName;
                f[Aa] || i === "SCRIPT" || i === "STYLE" || i === "LINK" && f.rel.toLowerCase() === "stylesheet" || u.removeChild(f), f = c;
              }
          }
          if (e === 0) {
            l.removeChild(n), re(t);
            return;
          }
          e--;
        } else
          u === "$" || u === "$?" || u === "$!" ? e++ : a = u.charCodeAt(0) - 48;
      else a = 0;
      u = n;
    } while (u);
    re(t);
  }
  function Qc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var u = t;
      switch (t = t.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Qc(u), Kn(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function oy(l, t, u, a) {
    for (; l.nodeType === 1; ) {
      var e = u;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (a) {
        if (!l[Aa])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (n !== e.rel || l.getAttribute("href") !== (e.href == null || e.href === "" ? null : e.href) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin) || l.getAttribute("title") !== (e.title == null ? null : e.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (n = l.getAttribute("src"), (n !== (e.src == null ? null : e.src) || l.getAttribute("type") !== (e.type == null ? null : e.type) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n)
          return l;
      } else return l;
      if (l = At(l.nextSibling), l === null) break;
    }
    return null;
  }
  function dy(l, t, u) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = At(l.nextSibling), l === null)) return null;
    return l;
  }
  function Zc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete";
  }
  function vy(l, t) {
    var u = l.ownerDocument;
    if (l.data !== "$?" || u.readyState === "complete")
      t();
    else {
      var a = function() {
        t(), u.removeEventListener("DOMContentLoaded", a);
      };
      u.addEventListener("DOMContentLoaded", a), l._reactRetry = a;
    }
  }
  function At(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
          break;
        if (t === "/$") return null;
      }
    }
    return l;
  }
  var Vc = null;
  function Bo(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (t === 0) return l;
          t--;
        } else u === "/$" && t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Yo(l, t, u) {
    switch (t = zn(u), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(m(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(m(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(m(454));
        return l;
      default:
        throw Error(m(451));
    }
  }
  function ce(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    Kn(l);
  }
  var St = /* @__PURE__ */ new Map(), xo = /* @__PURE__ */ new Set();
  function _n(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Lt = _.d;
  _.d = {
    f: yy,
    r: hy,
    D: ry,
    C: my,
    L: gy,
    m: Sy,
    X: Ty,
    S: by,
    M: Ey
  };
  function yy() {
    var l = Lt.f(), t = rn();
    return l || t;
  }
  function hy(l) {
    var t = xu(l);
    t !== null && t.tag === 5 && t.type === "form" ? t0(t) : Lt.r(l);
  }
  var ma = typeof document > "u" ? null : document;
  function Go(l, t, u) {
    var a = ma;
    if (a && typeof t == "string" && t) {
      var e = dt(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof u == "string" && (e += '[crossorigin="' + u + '"]'), xo.has(e) || (xo.add(e), l = { rel: l, crossOrigin: u, href: t }, a.querySelector(e) === null && (t = a.createElement("link"), Gl(t, "link", l), Ul(t), a.head.appendChild(t)));
    }
  }
  function ry(l) {
    Lt.D(l), Go("dns-prefetch", l, null);
  }
  function my(l, t) {
    Lt.C(l, t), Go("preconnect", l, t);
  }
  function gy(l, t, u) {
    Lt.L(l, t, u);
    var a = ma;
    if (a && l && t) {
      var e = 'link[rel="preload"][as="' + dt(t) + '"]';
      t === "image" && u && u.imageSrcSet ? (e += '[imagesrcset="' + dt(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (e += '[imagesizes="' + dt(
        u.imageSizes
      ) + '"]')) : e += '[href="' + dt(l) + '"]';
      var n = e;
      switch (t) {
        case "style":
          n = ga(l);
          break;
        case "script":
          n = Sa(l);
      }
      St.has(n) || (l = N(
        {
          rel: "preload",
          href: t === "image" && u && u.imageSrcSet ? void 0 : l,
          as: t
        },
        u
      ), St.set(n, l), a.querySelector(e) !== null || t === "style" && a.querySelector(ie(n)) || t === "script" && a.querySelector(se(n)) || (t = a.createElement("link"), Gl(t, "link", l), Ul(t), a.head.appendChild(t)));
    }
  }
  function Sy(l, t) {
    Lt.m(l, t);
    var u = ma;
    if (u && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", e = 'link[rel="modulepreload"][as="' + dt(a) + '"][href="' + dt(l) + '"]', n = e;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Sa(l);
      }
      if (!St.has(n) && (l = N({ rel: "modulepreload", href: l }, t), St.set(n, l), u.querySelector(e) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(se(n)))
              return;
        }
        a = u.createElement("link"), Gl(a, "link", l), Ul(a), u.head.appendChild(a);
      }
    }
  }
  function by(l, t, u) {
    Lt.S(l, t, u);
    var a = ma;
    if (a && l) {
      var e = Gu(a).hoistableStyles, n = ga(l);
      t = t || "default";
      var f = e.get(n);
      if (!f) {
        var c = { loading: 0, preload: null };
        if (f = a.querySelector(
          ie(n)
        ))
          c.loading = 5;
        else {
          l = N(
            { rel: "stylesheet", href: l, "data-precedence": t },
            u
          ), (u = St.get(n)) && Lc(l, u);
          var i = f = a.createElement("link");
          Ul(i), Gl(i, "link", l), i._p = new Promise(function(y, S) {
            i.onload = y, i.onerror = S;
          }), i.addEventListener("load", function() {
            c.loading |= 1;
          }), i.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, On(f, t, a);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: c
        }, e.set(n, f);
      }
    }
  }
  function Ty(l, t) {
    Lt.X(l, t);
    var u = ma;
    if (u && l) {
      var a = Gu(u).hoistableScripts, e = Sa(l), n = a.get(e);
      n || (n = u.querySelector(se(e)), n || (l = N({ src: l, async: !0 }, t), (t = St.get(e)) && Kc(l, t), n = u.createElement("script"), Ul(n), Gl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function Ey(l, t) {
    Lt.M(l, t);
    var u = ma;
    if (u && l) {
      var a = Gu(u).hoistableScripts, e = Sa(l), n = a.get(e);
      n || (n = u.querySelector(se(e)), n || (l = N({ src: l, async: !0, type: "module" }, t), (t = St.get(e)) && Kc(l, t), n = u.createElement("script"), Ul(n), Gl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function jo(l, t, u, a) {
    var e = (e = G.current) ? _n(e) : null;
    if (!e) throw Error(m(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (t = ga(u.href), u = Gu(
          e
        ).hoistableStyles, a = u.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = ga(u.href);
          var n = Gu(
            e
          ).hoistableStyles, f = n.get(l);
          if (f || (e = e.ownerDocument || e, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, f), (n = e.querySelector(
            ie(l)
          )) && !n._p && (f.instance = n, f.state.loading = 5), St.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, St.set(l, u), n || Ay(
            e,
            l,
            u,
            f.state
          ))), t && a === null)
            throw Error(m(528, ""));
          return f;
        }
        if (t && a !== null)
          throw Error(m(529, ""));
        return null;
      case "script":
        return t = u.async, u = u.src, typeof u == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Sa(u), u = Gu(
          e
        ).hoistableScripts, a = u.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(m(444, l));
    }
  }
  function ga(l) {
    return 'href="' + dt(l) + '"';
  }
  function ie(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Xo(l) {
    return N({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function Ay(l, t, u, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), Gl(t, "link", u), Ul(t), l.head.appendChild(t));
  }
  function Sa(l) {
    return '[src="' + dt(l) + '"]';
  }
  function se(l) {
    return "script[async]" + l;
  }
  function Co(l, t, u) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = l.querySelector(
            'style[data-href~="' + dt(u.href) + '"]'
          );
          if (a)
            return t.instance = a, Ul(a), a;
          var e = N({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement(
            "style"
          ), Ul(a), Gl(a, "style", e), On(a, u.precedence, l), t.instance = a;
        case "stylesheet":
          e = ga(u.href);
          var n = l.querySelector(
            ie(e)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, Ul(n), n;
          a = Xo(u), (e = St.get(e)) && Lc(a, e), n = (l.ownerDocument || l).createElement("link"), Ul(n);
          var f = n;
          return f._p = new Promise(function(c, i) {
            f.onload = c, f.onerror = i;
          }), Gl(n, "link", a), t.state.loading |= 4, On(n, u.precedence, l), t.instance = n;
        case "script":
          return n = Sa(u.src), (e = l.querySelector(
            se(n)
          )) ? (t.instance = e, Ul(e), e) : (a = u, (e = St.get(n)) && (a = N({}, u), Kc(a, e)), l = l.ownerDocument || l, e = l.createElement("script"), Ul(e), Gl(e, "link", a), l.head.appendChild(e), t.instance = e);
        case "void":
          return null;
        default:
          throw Error(m(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, On(a, u.precedence, l));
    return t.instance;
  }
  function On(l, t, u) {
    for (var a = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), e = a.length ? a[a.length - 1] : null, n = e, f = 0; f < a.length; f++) {
      var c = a[f];
      if (c.dataset.precedence === t) n = c;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = u.nodeType === 9 ? u.head : u, t.insertBefore(l, t.firstChild));
  }
  function Lc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function Kc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var Dn = null;
  function Qo(l, t, u) {
    if (Dn === null) {
      var a = /* @__PURE__ */ new Map(), e = Dn = /* @__PURE__ */ new Map();
      e.set(u, a);
    } else
      e = Dn, a = e.get(u), a || (a = /* @__PURE__ */ new Map(), e.set(u, a));
    if (a.has(l)) return a;
    for (a.set(l, null), u = u.getElementsByTagName(l), e = 0; e < u.length; e++) {
      var n = u[e];
      if (!(n[Aa] || n[Xl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var c = a.get(f);
        c ? c.push(n) : a.set(f, [n]);
      }
    }
    return a;
  }
  function Zo(l, t, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function zy(l, t, u) {
    if (u === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return l = t.disabled, typeof t.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Vo(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var oe = null;
  function _y() {
  }
  function Oy(l, t, u) {
    if (oe === null) throw Error(m(475));
    var a = oe;
    if (t.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var e = ga(u.href), n = l.querySelector(
          ie(e)
        );
        if (n) {
          l = n._p, l !== null && typeof l == "object" && typeof l.then == "function" && (a.count++, a = Mn.bind(a), l.then(a, a)), t.state.loading |= 4, t.instance = n, Ul(n);
          return;
        }
        n = l.ownerDocument || l, u = Xo(u), (e = St.get(e)) && Lc(u, e), n = n.createElement("link"), Ul(n);
        var f = n;
        f._p = new Promise(function(c, i) {
          f.onload = c, f.onerror = i;
        }), Gl(n, "link", u), t.instance = n;
      }
      a.stylesheets === null && (a.stylesheets = /* @__PURE__ */ new Map()), a.stylesheets.set(t, l), (l = t.state.preload) && (t.state.loading & 3) === 0 && (a.count++, t = Mn.bind(a), l.addEventListener("load", t), l.addEventListener("error", t));
    }
  }
  function Dy() {
    if (oe === null) throw Error(m(475));
    var l = oe;
    return l.stylesheets && l.count === 0 && Jc(l, l.stylesheets), 0 < l.count ? function(t) {
      var u = setTimeout(function() {
        if (l.stylesheets && Jc(l, l.stylesheets), l.unsuspend) {
          var a = l.unsuspend;
          l.unsuspend = null, a();
        }
      }, 6e4);
      return l.unsuspend = t, function() {
        l.unsuspend = null, clearTimeout(u);
      };
    } : null;
  }
  function Mn() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Jc(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Rn = null;
  function Jc(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Rn = /* @__PURE__ */ new Map(), t.forEach(My, l), Rn = null, Mn.call(l));
  }
  function My(l, t) {
    if (!(t.state.loading & 4)) {
      var u = Rn.get(l);
      if (u) var a = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Rn.set(l, u);
        for (var e = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < e.length; n++) {
          var f = e[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (u.set(f.dataset.precedence, f), a = f);
        }
        a && u.set(null, a);
      }
      e = t.instance, f = e.getAttribute("data-precedence"), n = u.get(f) || a, n === a && u.set(null, e), u.set(f, e), this.count++, a = Mn.bind(this), e.addEventListener("load", a), e.addEventListener("error", a), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4;
    }
  }
  var de = {
    $$typeof: Rl,
    Provider: null,
    Consumer: null,
    _currentValue: B,
    _currentValue2: B,
    _threadCount: 0
  };
  function Ry(l, t, u, a, e, n, f, c) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Qn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Qn(0), this.hiddenUpdates = Qn(null), this.identifierPrefix = a, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Lo(l, t, u, a, e, n, f, c, i, y, S, T) {
    return l = new Ry(
      l,
      t,
      u,
      f,
      c,
      i,
      y,
      T
    ), t = 1, n === !0 && (t |= 24), n = et(3, null, null, t), l.current = n, n.stateNode = l, t = Mf(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: a,
      isDehydrated: u,
      cache: t
    }, Hf(n), l;
  }
  function Ko(l) {
    return l ? (l = Wu, l) : Wu;
  }
  function Jo(l, t, u, a, e, n) {
    e = Ko(e), a.context === null ? a.context = e : a.pendingContext = e, a = Ft(t), a.payload = { element: u }, n = n === void 0 ? null : n, n !== null && (a.callback = n), u = It(l, a, t), u !== null && (st(u, l, t), Qa(u, l, t));
  }
  function wo(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < t ? u : t;
    }
  }
  function wc(l, t) {
    wo(l, t), (l = l.alternate) && wo(l, t);
  }
  function ko(l) {
    if (l.tag === 13) {
      var t = ku(l, 67108864);
      t !== null && st(t, l, 67108864), wc(l, 67108864);
    }
  }
  var Un = !0;
  function Uy(l, t, u, a) {
    var e = g.T;
    g.T = null;
    var n = _.p;
    try {
      _.p = 2, kc(l, t, u, a);
    } finally {
      _.p = n, g.T = e;
    }
  }
  function Ny(l, t, u, a) {
    var e = g.T;
    g.T = null;
    var n = _.p;
    try {
      _.p = 8, kc(l, t, u, a);
    } finally {
      _.p = n, g.T = e;
    }
  }
  function kc(l, t, u, a) {
    if (Un) {
      var e = Wc(a);
      if (e === null)
        Yc(
          l,
          t,
          a,
          Nn,
          u
        ), $o(l, a);
      else if (py(
        e,
        l,
        t,
        u,
        a
      ))
        a.stopPropagation();
      else if ($o(l, a), t & 4 && -1 < Hy.indexOf(l)) {
        for (; e !== null; ) {
          var n = xu(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var f = mu(n.pendingLanes);
                  if (f !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; f; ) {
                      var i = 1 << 31 - ut(f);
                      c.entanglements[1] |= i, f &= ~i;
                    }
                    Ut(n), (nl & 6) === 0 && (yn = _t() + 500, ee(0));
                  }
                }
                break;
              case 13:
                c = ku(n, 2), c !== null && st(c, n, 2), rn(), wc(n, 2);
            }
          if (n = Wc(a), n === null && Yc(
            l,
            t,
            a,
            Nn,
            u
          ), n === e) break;
          e = n;
        }
        e !== null && a.stopPropagation();
      } else
        Yc(
          l,
          t,
          a,
          null,
          u
        );
    }
  }
  function Wc(l) {
    return l = Pn(l), $c(l);
  }
  var Nn = null;
  function $c(l) {
    if (Nn = null, l = Yu(l), l !== null) {
      var t = ll(l);
      if (t === null) l = null;
      else {
        var u = t.tag;
        if (u === 13) {
          if (l = ul(t), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Nn = l, null;
  }
  function Wo(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (md()) {
          case ii:
            return 2;
          case si:
            return 8;
          case Ee:
          case gd:
            return 32;
          case oi:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Fc = !1, du = null, vu = null, yu = null, ve = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), hu = [], Hy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function $o(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        du = null;
        break;
      case "dragenter":
      case "dragleave":
        vu = null;
        break;
      case "mouseover":
      case "mouseout":
        yu = null;
        break;
      case "pointerover":
      case "pointerout":
        ve.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ye.delete(t.pointerId);
    }
  }
  function he(l, t, u, a, e, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: u,
      eventSystemFlags: a,
      nativeEvent: n,
      targetContainers: [e]
    }, t !== null && (t = xu(t), t !== null && ko(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function py(l, t, u, a, e) {
    switch (t) {
      case "focusin":
        return du = he(
          du,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "dragenter":
        return vu = he(
          vu,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "mouseover":
        return yu = he(
          yu,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "pointerover":
        var n = e.pointerId;
        return ve.set(
          n,
          he(
            ve.get(n) || null,
            l,
            t,
            u,
            a,
            e
          )
        ), !0;
      case "gotpointercapture":
        return n = e.pointerId, ye.set(
          n,
          he(
            ye.get(n) || null,
            l,
            t,
            u,
            a,
            e
          )
        ), !0;
    }
    return !1;
  }
  function Fo(l) {
    var t = Yu(l.target);
    if (t !== null) {
      var u = ll(t);
      if (u !== null) {
        if (t = u.tag, t === 13) {
          if (t = ul(u), t !== null) {
            l.blockedOn = t, Od(l.priority, function() {
              if (u.tag === 13) {
                var a = it();
                a = Zn(a);
                var e = ku(u, a);
                e !== null && st(e, u, a), wc(u, a);
              }
            });
            return;
          }
        } else if (t === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Hn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var u = Wc(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var a = new u.constructor(
          u.type,
          u
        );
        In = a, u.target.dispatchEvent(a), In = null;
      } else
        return t = xu(u), t !== null && ko(t), l.blockedOn = u, !1;
      t.shift();
    }
    return !0;
  }
  function Io(l, t, u) {
    Hn(l) && u.delete(t);
  }
  function qy() {
    Fc = !1, du !== null && Hn(du) && (du = null), vu !== null && Hn(vu) && (vu = null), yu !== null && Hn(yu) && (yu = null), ve.forEach(Io), ye.forEach(Io);
  }
  function pn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, Fc || (Fc = !0, z.unstable_scheduleCallback(
      z.unstable_NormalPriority,
      qy
    )));
  }
  var qn = null;
  function Po(l) {
    qn !== l && (qn = l, z.unstable_scheduleCallback(
      z.unstable_NormalPriority,
      function() {
        qn === l && (qn = null);
        for (var t = 0; t < l.length; t += 3) {
          var u = l[t], a = l[t + 1], e = l[t + 2];
          if (typeof a != "function") {
            if ($c(a || u) === null)
              continue;
            break;
          }
          var n = xu(u);
          n !== null && (l.splice(t, 3), t -= 3, $f(
            n,
            {
              pending: !0,
              data: e,
              method: u.method,
              action: a
            },
            a,
            e
          ));
        }
      }
    ));
  }
  function re(l) {
    function t(i) {
      return pn(i, l);
    }
    du !== null && pn(du, l), vu !== null && pn(vu, l), yu !== null && pn(yu, l), ve.forEach(t), ye.forEach(t);
    for (var u = 0; u < hu.length; u++) {
      var a = hu[u];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < hu.length && (u = hu[0], u.blockedOn === null); )
      Fo(u), u.blockedOn === null && hu.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (a = 0; a < u.length; a += 3) {
        var e = u[a], n = u[a + 1], f = e[Jl] || null;
        if (typeof n == "function")
          f || Po(u);
        else if (f) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, f = n[Jl] || null)
              c = f.formAction;
            else if ($c(e) !== null) continue;
          } else c = f.action;
          typeof c == "function" ? u[a + 1] = c : (u.splice(a, 3), a -= 3), Po(u);
        }
      }
  }
  function Ic(l) {
    this._internalRoot = l;
  }
  Bn.prototype.render = Ic.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(m(409));
    var u = t.current, a = it();
    Jo(u, a, l, t, null, null);
  }, Bn.prototype.unmount = Ic.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      Jo(l.current, 2, null, l, null, null), rn(), t[Bu] = null;
    }
  };
  function Bn(l) {
    this._internalRoot = l;
  }
  Bn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = ri();
      l = { blockedOn: null, target: l, priority: t };
      for (var u = 0; u < hu.length && t !== 0 && t < hu[u].priority; u++) ;
      hu.splice(u, 0, l), u === 0 && Fo(l);
    }
  };
  var ld = K.version;
  if (ld !== "19.1.1")
    throw Error(
      m(
        527,
        ld,
        "19.1.1"
      )
    );
  _.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(m(188)) : (l = Object.keys(l).join(","), Error(m(268, l)));
    return l = O(t), l = l !== null ? E(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var By = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: g,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Yn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Yn.isDisabled && Yn.supportsFiber)
      try {
        ba = Yn.inject(
          By
        ), tt = Yn;
      } catch {
      }
  }
  return ge.createRoot = function(l, t) {
    if (!J(l)) throw Error(m(299));
    var u = !1, a = "", e = r0, n = m0, f = g0, c = null;
    return t != null && (t.unstable_strictMode === !0 && (u = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (c = t.unstable_transitionCallbacks)), t = Lo(
      l,
      1,
      !1,
      null,
      null,
      u,
      a,
      e,
      n,
      f,
      c,
      null
    ), l[Bu] = t.current, Bc(l), new Ic(t);
  }, ge.hydrateRoot = function(l, t, u) {
    if (!J(l)) throw Error(m(299));
    var a = !1, e = "", n = r0, f = m0, c = g0, i = null, y = null;
    return u != null && (u.unstable_strictMode === !0 && (a = !0), u.identifierPrefix !== void 0 && (e = u.identifierPrefix), u.onUncaughtError !== void 0 && (n = u.onUncaughtError), u.onCaughtError !== void 0 && (f = u.onCaughtError), u.onRecoverableError !== void 0 && (c = u.onRecoverableError), u.unstable_transitionCallbacks !== void 0 && (i = u.unstable_transitionCallbacks), u.formState !== void 0 && (y = u.formState)), t = Lo(
      l,
      1,
      !0,
      t,
      u ?? null,
      a,
      e,
      n,
      f,
      c,
      i,
      y
    ), t.context = Ko(null), u = t.current, a = it(), a = Zn(a), e = Ft(a), e.callback = null, It(u, e, a), u = a, t.current.lanes = u, Ea(t, u), Ut(t), l[Bu] = t.current, Bc(l), new Bn(t);
  }, ge.version = "19.1.1", ge;
}
var od;
function Ly() {
  if (od) return ti.exports;
  od = 1;
  function z() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z);
      } catch (K) {
        console.error(K);
      }
  }
  return z(), ti.exports = Vy(), ti.exports;
}
var Ky = Ly();
const fi = (z) => window.parent.postMessage(z, "*"), dd = () => fi({ action: "closePopup" }), Jy = (z, K) => z && K ? K.toLowerCase().includes(z.toLowerCase()) : !1;
function Se(z) {
  const K = yl.useRef(z);
  return yl.useEffect(() => {
    K.current = z;
  }, [z]), K;
}
let be = ["title", "parentTitle", "url"];
const wy = () => {
  const [z, K] = yl.useState([]), [x, m] = yl.useState([]), [J, ll] = yl.useState([]), ul = Se(J), w = yl.useRef(null), [O, E] = yl.useState(""), N = Se(O), [al, F] = yl.useState(""), Ml = Se(al), [ql, Fl] = yl.useState({
    openNewTab: "1",
    searchRule: ["url", "title", "parentTitle"],
    useDefaultSearch: "0"
  }), jl = Se(ql), zt = yl.useRef(null), [bt, Rl] = yl.useState({ top: 0, height: 0 }), [Il, k] = yl.useState(!1), Zl = Se(Il), Vl = yl.useCallback(async () => {
    const j = await chrome.storage.local.get("searchBookmarkSetting");
    j.searchBookmarkSetting && (be = j.searchBookmarkSetting.searchRule, Fl(j.searchBookmarkSetting));
  }, []);
  yl.useEffect(() => {
    const j = (el) => {
      el.action === "updateBookMarks" && Vl().finally(() => {
        const { bookmarks: cl = [], historyBookmarks: $ = [] } = el;
        K(cl), m($), w.current?.focus();
        const { top: Pl = 0, height: Ll = 0 } = zt.current?.getBoundingClientRect() ?? {};
        Rl({ top: Pl, height: Ll });
      });
    };
    return chrome.runtime?.onMessage?.addListener(j), fi({ action: "initSuccess" }), () => {
      chrome.runtime?.onMessage?.removeListener(j);
    };
  }, [w]), yl.useEffect(() => {
    if (!O)
      ll(x), F(x[0]?.id || "");
    else {
      const j = Array.from(
        { length: be.length },
        () => []
      );
      for (let cl = 0; cl < be.length; cl++)
        j[cl] = z.filter(
          ($) => Jy(O, Reflect.get($, be[cl]))
        ).sort(($, Pl) => {
          const Ll = be[cl], _l = Reflect.get($, Ll) || "", g = Reflect.get(Pl, Ll) || "", _ = O.toLowerCase();
          return Ll === "title" ? _l.length - g.length : Ll === "url" ? _.indexOf(_l) - _.indexOf(g) : 1;
        });
      const el = j.reduce(
        (cl, $) => [.../* @__PURE__ */ new Set([...cl, ...$])],
        []
      );
      ll(el), F(el[0]?.id || "");
    }
  }, [O, z, x]);
  const Bl = yl.useCallback(
    (j, el = !1) => {
      F(j?.id || ""), !(!j?.url && jl.current.useDefaultSearch === "0") && (fi({
        action: "goToBookmark",
        url: j?.url || "",
        keyword: N.current,
        isCtrl: el
      }), dd(), E(""));
    },
    []
  );
  return yl.useEffect(() => {
    const j = (el) => {
      if (el.key === "Escape") {
        dd(), E("");
        return;
      }
      const cl = ul.current.findIndex(
        ($) => $.id === Ml.current
      );
      if (cl > -1) {
        if (el.key === "ArrowUp") {
          const $ = cl === 0 ? ul.current.length - 1 : cl - 1;
          F(ul.current[$].id), el.preventDefault();
        }
        if (el.key === "ArrowDown") {
          const $ = cl === ul.current.length - 1 ? 0 : cl + 1;
          F(ul.current[$].id), el.preventDefault();
        }
      }
      el.key === "Enter" && (Zl.current || (Bl(
        ul.current[cl],
        el.metaKey || el.ctrlKey
      ), el.preventDefault()));
    };
    return window.addEventListener("keydown", j), () => {
      window.removeEventListener("keydown", j);
    };
  }, [Bl]), yl.useEffect(() => {
    const j = document.querySelector(`[data-id="${al}"]`);
    if (j) {
      const { top: el, height: cl } = j.getBoundingClientRect(), { top: $, height: Pl } = bt;
      el >= $ && el + cl <= $ + Pl || j.scrollIntoView({
        block: "center",
        inline: "center"
      });
    }
  }, [al, Ml]), /* @__PURE__ */ C.jsx("div", { className: "bookmarks-search__container", children: /* @__PURE__ */ C.jsxs("div", { className: "bookmarks-search__content", children: [
    /* @__PURE__ */ C.jsx("div", { className: "bookmarks-search__search", children: /* @__PURE__ */ C.jsx(
      "input",
      {
        placeholder: "请输入要搜索的关键字，Enter 打开选中项、Esc 取消、↑ 或 ↓ 切换选中项",
        type: "text",
        autoComplete: "off",
        className: "bookmarks-search__search-input",
        autoFocus: !0,
        ref: w,
        value: O,
        onChange: (j) => E(j.target.value),
        onCompositionStart: () => k(!0),
        onCompositionEnd: () => k(!1)
      }
    ) }),
    /* @__PURE__ */ C.jsx("div", { ref: zt, className: "bookmarks-search__list", children: J.map((j) => /* @__PURE__ */ C.jsxs(
      "div",
      {
        onClick: (el) => Bl(j, el.metaKey || el.ctrlKey),
        className: `bookmarks-search__list-item ${al === j.id ? "bookmarks-search__list-item-active" : ""}`,
        "data-id": j.id,
        children: [
          j.faviconURL && /* @__PURE__ */ C.jsx(
            "img",
            {
              className: "bookmarks-search__list-item-favicon",
              src: j.faviconURL,
              alt: j.title
            }
          ),
          j.title
        ]
      },
      j.id
    )) })
  ] }) });
}, ky = ({
  name: z,
  value: K,
  onChange: x,
  options: m
}) => {
  const [J, ll] = yl.useState(K), ul = (w) => {
    const O = J.includes(w) ? J.filter((E) => E !== w) : [...J, w];
    ll(O), x?.(O);
  };
  return /* @__PURE__ */ C.jsx("div", { className: "checkbox__group", children: m?.map((w) => /* @__PURE__ */ C.jsx(C.Fragment, { children: /* @__PURE__ */ C.jsxs("label", { className: "checkbox", children: [
    /* @__PURE__ */ C.jsx(
      "input",
      {
        type: "checkbox",
        name: z,
        value: w.value,
        checked: J.includes(w.value),
        onChange: () => ul(w.value)
      }
    ),
    /* @__PURE__ */ C.jsx("span", { children: w.name })
  ] }) })) });
}, ni = ({
  label: z,
  tips: K,
  children: x
}) => /* @__PURE__ */ C.jsxs("div", { className: "form-item", children: [
  /* @__PURE__ */ C.jsxs("div", { className: "form-item__label", children: [
    z,
    K && /* @__PURE__ */ C.jsx("span", { className: "form-item__tips", children: K })
  ] }),
  /* @__PURE__ */ C.jsx("div", { className: "form-item__content", children: x })
] }), yd = yl.createContext({
  value: "0",
  name: "",
  onChange: (z) => {
  }
}), vd = ({
  children: z,
  name: K,
  value: x,
  onChange: m
}) => {
  const [J, ll] = yl.useState(x), ul = (w) => {
    ll(w), m?.(w);
  };
  return /* @__PURE__ */ C.jsx(
    yd.Provider,
    {
      value: { value: J, name: K, onChange: ul },
      children: /* @__PURE__ */ C.jsx("div", { className: "radio-group", children: z })
    }
  );
}, xn = ({
  value: z,
  children: K
}) => {
  const { value: x, name: m, onChange: J } = yl.useContext(yd);
  return /* @__PURE__ */ C.jsxs("label", { className: "radio", children: [
    /* @__PURE__ */ C.jsx(
      "input",
      {
        type: "radio",
        name: m,
        value: z,
        checked: x === z,
        onChange: (ll) => J(ll.target.value)
      }
    ),
    /* @__PURE__ */ C.jsx("span", { children: K })
  ] });
}, Wy = () => {
  const [z, K] = yl.useState(!0), [x, m] = yl.useState({
    openNewTab: "1",
    searchRule: ["url", "title", "parentTitle"],
    useDefaultSearch: "0"
  }), [J, ll] = yl.useState(!1), ul = async () => {
    if (!J) {
      ll(!0);
      try {
        await chrome.storage.local.set({ searchBookmarkSetting: x }), await chrome.notifications.create({
          type: "basic",
          iconUrl: "icons/icon.png",
          title: "提示",
          message: "设置已保存，新设置重新打开搜索框即可生效。"
        });
      } finally {
        ll(!1);
      }
      window.close();
    }
  }, w = (O) => {
    m({ ...x, ...O });
  };
  return yl.useEffect(() => {
    chrome.storage.local.get("searchBookmarkSetting", (O) => {
      O.searchBookmarkSetting && m({ ...x, ...O.searchBookmarkSetting }), K(!1);
    });
  }, []), !z && /* @__PURE__ */ C.jsxs("div", { className: "setting__container", children: [
    /* @__PURE__ */ C.jsx("div", { className: "setting__title", children: "设置" }),
    /* @__PURE__ */ C.jsxs("div", { className: "setting__content", children: [
      /* @__PURE__ */ C.jsx(
        ni,
        {
          label: "是否新窗口打开",
          tips: "按住 Ctrl/Command 键可以强制新窗口打开",
          children: /* @__PURE__ */ C.jsxs(
            vd,
            {
              name: "openNewTab",
              value: x.openNewTab,
              onChange: (O) => w({ openNewTab: O }),
              children: [
                /* @__PURE__ */ C.jsx(xn, { value: "0", children: "否（通过匹配域名查找已打开页面）" }),
                /* @__PURE__ */ C.jsx(xn, { value: "1", children: "是" })
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ C.jsx(ni, { label: "查找规则", children: /* @__PURE__ */ C.jsx(
        ky,
        {
          name: "searchRule",
          value: x.searchRule,
          onChange: (O) => w({
            searchRule: O
          }),
          options: [
            { name: "标题", value: "title" },
            { name: "父节点标题", value: "parentTitle" },
            { name: "URL", value: "url" }
          ]
        }
      ) }),
      /* @__PURE__ */ C.jsx(ni, { label: "搜索为空时是否使用默认搜索引擎搜索", children: /* @__PURE__ */ C.jsxs(
        vd,
        {
          name: "useDefaultSearch",
          value: x.useDefaultSearch,
          onChange: (O) => w({ useDefaultSearch: O }),
          children: [
            /* @__PURE__ */ C.jsx(xn, { value: "0", children: "否" }),
            /* @__PURE__ */ C.jsx(xn, { value: "1", children: "是" })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ C.jsx("div", { className: "setting__footer", children: /* @__PURE__ */ C.jsx("div", { className: "submit-button", onClick: ul, children: "保存设置" }) })
  ] });
}, $y = window.self !== window.top;
Ky.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ C.jsx(yl.StrictMode, { children: $y ? /* @__PURE__ */ C.jsx(wy, {}) : /* @__PURE__ */ C.jsx(Wy, {}) })
);
