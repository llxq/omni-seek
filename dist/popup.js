var Fc = { exports: {} }, me = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fv;
function Yy() {
  if (Fv) return me;
  Fv = 1;
  var z = Symbol.for("react.transitional.element"), K = Symbol.for("react.fragment");
  function G(m, J, I) {
    var Z = null;
    if (I !== void 0 && (Z = "" + I), J.key !== void 0 && (Z = "" + J.key), "key" in J) {
      I = {};
      for (var P in J)
        P !== "key" && (I[P] = J[P]);
    } else I = J;
    return J = I.ref, {
      $$typeof: z,
      type: m,
      key: Z,
      ref: J !== void 0 ? J : null,
      props: I
    };
  }
  return me.Fragment = K, me.jsx = G, me.jsxs = G, me;
}
var Iv;
function xy() {
  return Iv || (Iv = 1, Fc.exports = Yy()), Fc.exports;
}
var k = xy(), Ic = { exports: {} }, X = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pv;
function Gy() {
  if (Pv) return X;
  Pv = 1;
  var z = Symbol.for("react.transitional.element"), K = Symbol.for("react.portal"), G = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), J = Symbol.for("react.profiler"), I = Symbol.for("react.consumer"), Z = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), E = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), ll = Symbol.iterator;
  function el(s) {
    return s === null || typeof s != "object" ? null : (s = ll && s[ll] || s["@@iterator"], typeof s == "function" ? s : null);
  }
  var ql = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, _l = Object.assign, Q = {};
  function nl(s, A, M) {
    this.props = s, this.context = A, this.refs = Q, this.updater = M || ql;
  }
  nl.prototype.isReactComponent = {}, nl.prototype.setState = function(s, A) {
    if (typeof s != "object" && typeof s != "function" && s != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, s, A, "setState");
  }, nl.prototype.forceUpdate = function(s) {
    this.updater.enqueueForceUpdate(this, s, "forceUpdate");
  };
  function ol() {
  }
  ol.prototype = nl.prototype;
  function rl(s, A, M) {
    this.props = s, this.context = A, this.refs = Q, this.updater = M || ql;
  }
  var Dl = rl.prototype = new ol();
  Dl.constructor = rl, _l(Dl, nl.prototype), Dl.isPureReactComponent = !0;
  var xl = Array.isArray, w = { H: null, A: null, T: null, S: null, V: null }, Gl = Object.prototype.hasOwnProperty;
  function Xl(s, A, M, _, H, $) {
    return M = $.ref, {
      $$typeof: z,
      type: s,
      key: A,
      ref: M !== void 0 ? M : null,
      props: $
    };
  }
  function $l(s, A) {
    return Xl(
      s.type,
      A,
      void 0,
      void 0,
      void 0,
      s.props
    );
  }
  function bt(s) {
    return typeof s == "object" && s !== null && s.$$typeof === z;
  }
  function Bu(s) {
    var A = { "=": "=0", ":": "=2" };
    return "$" + s.replace(/[=:]/g, function(M) {
      return A[M];
    });
  }
  var Mt = /\/+/g;
  function jl(s, A) {
    return typeof s == "object" && s !== null && s.key != null ? Bu("" + s.key) : A.toString(36);
  }
  function yu() {
  }
  function hu(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (typeof s.status == "string" ? s.then(yu, yu) : (s.status = "pending", s.then(
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
  function Ql(s, A, M, _, H) {
    var $ = typeof s;
    ($ === "undefined" || $ === "boolean") && (s = null);
    var x = !1;
    if (s === null) x = !0;
    else
      switch ($) {
        case "bigint":
        case "string":
        case "number":
          x = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case z:
            case K:
              x = !0;
              break;
            case N:
              return x = s._init, Ql(
                x(s._payload),
                A,
                M,
                _,
                H
              );
          }
      }
    if (x)
      return H = H(s), x = _ === "" ? "." + jl(s, 0) : _, xl(H) ? (M = "", x != null && (M = x.replace(Mt, "$&/") + "/"), Ql(H, A, M, "", function(Zt) {
        return Zt;
      })) : H != null && (bt(H) && (H = $l(
        H,
        M + (H.key == null || s && s.key === H.key ? "" : ("" + H.key).replace(
          Mt,
          "$&/"
        ) + "/") + x
      )), A.push(H)), 1;
    x = 0;
    var Fl = _ === "" ? "." : _ + ":";
    if (xl(s))
      for (var yl = 0; yl < s.length; yl++)
        _ = s[yl], $ = Fl + jl(_, yl), x += Ql(
          _,
          A,
          M,
          $,
          H
        );
    else if (yl = el(s), typeof yl == "function")
      for (s = yl.call(s), yl = 0; !(_ = s.next()).done; )
        _ = _.value, $ = Fl + jl(_, yl++), x += Ql(
          _,
          A,
          M,
          $,
          H
        );
    else if ($ === "object") {
      if (typeof s.then == "function")
        return Ql(
          hu(s),
          A,
          M,
          _,
          H
        );
      throw A = String(s), Error(
        "Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return x;
  }
  function S(s, A, M) {
    if (s == null) return s;
    var _ = [], H = 0;
    return Ql(s, _, "", "", function($) {
      return A.call(M, $, H++);
    }), _;
  }
  function O(s) {
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
  var p = typeof reportError == "function" ? reportError : function(s) {
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
  function sl() {
  }
  return X.Children = {
    map: S,
    forEach: function(s, A, M) {
      S(
        s,
        function() {
          A.apply(this, arguments);
        },
        M
      );
    },
    count: function(s) {
      var A = 0;
      return S(s, function() {
        A++;
      }), A;
    },
    toArray: function(s) {
      return S(s, function(A) {
        return A;
      }) || [];
    },
    only: function(s) {
      if (!bt(s))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return s;
    }
  }, X.Component = nl, X.Fragment = G, X.Profiler = J, X.PureComponent = rl, X.StrictMode = m, X.Suspense = R, X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w, X.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(s) {
      return w.H.useMemoCache(s);
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
    var _ = _l({}, s.props), H = s.key, $ = void 0;
    if (A != null)
      for (x in A.ref !== void 0 && ($ = void 0), A.key !== void 0 && (H = "" + A.key), A)
        !Gl.call(A, x) || x === "key" || x === "__self" || x === "__source" || x === "ref" && A.ref === void 0 || (_[x] = A[x]);
    var x = arguments.length - 2;
    if (x === 1) _.children = M;
    else if (1 < x) {
      for (var Fl = Array(x), yl = 0; yl < x; yl++)
        Fl[yl] = arguments[yl + 2];
      _.children = Fl;
    }
    return Xl(s.type, H, void 0, void 0, $, _);
  }, X.createContext = function(s) {
    return s = {
      $$typeof: Z,
      _currentValue: s,
      _currentValue2: s,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, s.Provider = s, s.Consumer = {
      $$typeof: I,
      _context: s
    }, s;
  }, X.createElement = function(s, A, M) {
    var _, H = {}, $ = null;
    if (A != null)
      for (_ in A.key !== void 0 && ($ = "" + A.key), A)
        Gl.call(A, _) && _ !== "key" && _ !== "__self" && _ !== "__source" && (H[_] = A[_]);
    var x = arguments.length - 2;
    if (x === 1) H.children = M;
    else if (1 < x) {
      for (var Fl = Array(x), yl = 0; yl < x; yl++)
        Fl[yl] = arguments[yl + 2];
      H.children = Fl;
    }
    if (s && s.defaultProps)
      for (_ in x = s.defaultProps, x)
        H[_] === void 0 && (H[_] = x[_]);
    return Xl(s, $, void 0, void 0, null, H);
  }, X.createRef = function() {
    return { current: null };
  }, X.forwardRef = function(s) {
    return { $$typeof: P, render: s };
  }, X.isValidElement = bt, X.lazy = function(s) {
    return {
      $$typeof: N,
      _payload: { _status: -1, _result: s },
      _init: O
    };
  }, X.memo = function(s, A) {
    return {
      $$typeof: E,
      type: s,
      compare: A === void 0 ? null : A
    };
  }, X.startTransition = function(s) {
    var A = w.T, M = {};
    w.T = M;
    try {
      var _ = s(), H = w.S;
      H !== null && H(M, _), typeof _ == "object" && _ !== null && typeof _.then == "function" && _.then(sl, p);
    } catch ($) {
      p($);
    } finally {
      w.T = A;
    }
  }, X.unstable_useCacheRefresh = function() {
    return w.H.useCacheRefresh();
  }, X.use = function(s) {
    return w.H.use(s);
  }, X.useActionState = function(s, A, M) {
    return w.H.useActionState(s, A, M);
  }, X.useCallback = function(s, A) {
    return w.H.useCallback(s, A);
  }, X.useContext = function(s) {
    return w.H.useContext(s);
  }, X.useDebugValue = function() {
  }, X.useDeferredValue = function(s, A) {
    return w.H.useDeferredValue(s, A);
  }, X.useEffect = function(s, A, M) {
    var _ = w.H;
    if (typeof M == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return _.useEffect(s, A);
  }, X.useId = function() {
    return w.H.useId();
  }, X.useImperativeHandle = function(s, A, M) {
    return w.H.useImperativeHandle(s, A, M);
  }, X.useInsertionEffect = function(s, A) {
    return w.H.useInsertionEffect(s, A);
  }, X.useLayoutEffect = function(s, A) {
    return w.H.useLayoutEffect(s, A);
  }, X.useMemo = function(s, A) {
    return w.H.useMemo(s, A);
  }, X.useOptimistic = function(s, A) {
    return w.H.useOptimistic(s, A);
  }, X.useReducer = function(s, A, M) {
    return w.H.useReducer(s, A, M);
  }, X.useRef = function(s) {
    return w.H.useRef(s);
  }, X.useState = function(s) {
    return w.H.useState(s);
  }, X.useSyncExternalStore = function(s, A, M) {
    return w.H.useSyncExternalStore(
      s,
      A,
      M
    );
  }, X.useTransition = function() {
    return w.H.useTransition();
  }, X.version = "19.1.1", X;
}
var ld;
function ei() {
  return ld || (ld = 1, Ic.exports = Gy()), Ic.exports;
}
var El = ei(), Pc = { exports: {} }, ge = {}, li = { exports: {} }, ti = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var td;
function Xy() {
  return td || (td = 1, (function(z) {
    function K(S, O) {
      var p = S.length;
      S.push(O);
      l: for (; 0 < p; ) {
        var sl = p - 1 >>> 1, s = S[sl];
        if (0 < J(s, O))
          S[sl] = O, S[p] = s, p = sl;
        else break l;
      }
    }
    function G(S) {
      return S.length === 0 ? null : S[0];
    }
    function m(S) {
      if (S.length === 0) return null;
      var O = S[0], p = S.pop();
      if (p !== O) {
        S[0] = p;
        l: for (var sl = 0, s = S.length, A = s >>> 1; sl < A; ) {
          var M = 2 * (sl + 1) - 1, _ = S[M], H = M + 1, $ = S[H];
          if (0 > J(_, p))
            H < s && 0 > J($, _) ? (S[sl] = $, S[H] = p, sl = H) : (S[sl] = _, S[M] = p, sl = M);
          else if (H < s && 0 > J($, p))
            S[sl] = $, S[H] = p, sl = H;
          else break l;
        }
      }
      return O;
    }
    function J(S, O) {
      var p = S.sortIndex - O.sortIndex;
      return p !== 0 ? p : S.id - O.id;
    }
    if (z.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var I = performance;
      z.unstable_now = function() {
        return I.now();
      };
    } else {
      var Z = Date, P = Z.now();
      z.unstable_now = function() {
        return Z.now() - P;
      };
    }
    var R = [], E = [], N = 1, ll = null, el = 3, ql = !1, _l = !1, Q = !1, nl = !1, ol = typeof setTimeout == "function" ? setTimeout : null, rl = typeof clearTimeout == "function" ? clearTimeout : null, Dl = typeof setImmediate < "u" ? setImmediate : null;
    function xl(S) {
      for (var O = G(E); O !== null; ) {
        if (O.callback === null) m(E);
        else if (O.startTime <= S)
          m(E), O.sortIndex = O.expirationTime, K(R, O);
        else break;
        O = G(E);
      }
    }
    function w(S) {
      if (Q = !1, xl(S), !_l)
        if (G(R) !== null)
          _l = !0, Gl || (Gl = !0, jl());
        else {
          var O = G(E);
          O !== null && Ql(w, O.startTime - S);
        }
    }
    var Gl = !1, Xl = -1, $l = 5, bt = -1;
    function Bu() {
      return nl ? !0 : !(z.unstable_now() - bt < $l);
    }
    function Mt() {
      if (nl = !1, Gl) {
        var S = z.unstable_now();
        bt = S;
        var O = !0;
        try {
          l: {
            _l = !1, Q && (Q = !1, rl(Xl), Xl = -1), ql = !0;
            var p = el;
            try {
              t: {
                for (xl(S), ll = G(R); ll !== null && !(ll.expirationTime > S && Bu()); ) {
                  var sl = ll.callback;
                  if (typeof sl == "function") {
                    ll.callback = null, el = ll.priorityLevel;
                    var s = sl(
                      ll.expirationTime <= S
                    );
                    if (S = z.unstable_now(), typeof s == "function") {
                      ll.callback = s, xl(S), O = !0;
                      break t;
                    }
                    ll === G(R) && m(R), xl(S);
                  } else m(R);
                  ll = G(R);
                }
                if (ll !== null) O = !0;
                else {
                  var A = G(E);
                  A !== null && Ql(
                    w,
                    A.startTime - S
                  ), O = !1;
                }
              }
              break l;
            } finally {
              ll = null, el = p, ql = !1;
            }
            O = void 0;
          }
        } finally {
          O ? jl() : Gl = !1;
        }
      }
    }
    var jl;
    if (typeof Dl == "function")
      jl = function() {
        Dl(Mt);
      };
    else if (typeof MessageChannel < "u") {
      var yu = new MessageChannel(), hu = yu.port2;
      yu.port1.onmessage = Mt, jl = function() {
        hu.postMessage(null);
      };
    } else
      jl = function() {
        ol(Mt, 0);
      };
    function Ql(S, O) {
      Xl = ol(function() {
        S(z.unstable_now());
      }, O);
    }
    z.unstable_IdlePriority = 5, z.unstable_ImmediatePriority = 1, z.unstable_LowPriority = 4, z.unstable_NormalPriority = 3, z.unstable_Profiling = null, z.unstable_UserBlockingPriority = 2, z.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, z.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : $l = 0 < S ? Math.floor(1e3 / S) : 5;
    }, z.unstable_getCurrentPriorityLevel = function() {
      return el;
    }, z.unstable_next = function(S) {
      switch (el) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = el;
      }
      var p = el;
      el = O;
      try {
        return S();
      } finally {
        el = p;
      }
    }, z.unstable_requestPaint = function() {
      nl = !0;
    }, z.unstable_runWithPriority = function(S, O) {
      switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          S = 3;
      }
      var p = el;
      el = S;
      try {
        return O();
      } finally {
        el = p;
      }
    }, z.unstable_scheduleCallback = function(S, O, p) {
      var sl = z.unstable_now();
      switch (typeof p == "object" && p !== null ? (p = p.delay, p = typeof p == "number" && 0 < p ? sl + p : sl) : p = sl, S) {
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
      return s = p + s, S = {
        id: N++,
        callback: O,
        priorityLevel: S,
        startTime: p,
        expirationTime: s,
        sortIndex: -1
      }, p > sl ? (S.sortIndex = p, K(E, S), G(R) === null && S === G(E) && (Q ? (rl(Xl), Xl = -1) : Q = !0, Ql(w, p - sl))) : (S.sortIndex = s, K(R, S), _l || ql || (_l = !0, Gl || (Gl = !0, jl()))), S;
    }, z.unstable_shouldYield = Bu, z.unstable_wrapCallback = function(S) {
      var O = el;
      return function() {
        var p = el;
        el = O;
        try {
          return S.apply(this, arguments);
        } finally {
          el = p;
        }
      };
    };
  })(ti)), ti;
}
var ud;
function jy() {
  return ud || (ud = 1, li.exports = Xy()), li.exports;
}
var ui = { exports: {} }, Vl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ad;
function Qy() {
  if (ad) return Vl;
  ad = 1;
  var z = ei();
  function K(R) {
    var E = "https://react.dev/errors/" + R;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var N = 2; N < arguments.length; N++)
        E += "&args[]=" + encodeURIComponent(arguments[N]);
    }
    return "Minified React error #" + R + "; visit " + E + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function G() {
  }
  var m = {
    d: {
      f: G,
      r: function() {
        throw Error(K(522));
      },
      D: G,
      C: G,
      L: G,
      m: G,
      X: G,
      S: G,
      M: G
    },
    p: 0,
    findDOMNode: null
  }, J = Symbol.for("react.portal");
  function I(R, E, N) {
    var ll = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: J,
      key: ll == null ? null : "" + ll,
      children: R,
      containerInfo: E,
      implementation: N
    };
  }
  var Z = z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function P(R, E) {
    if (R === "font") return "";
    if (typeof E == "string")
      return E === "use-credentials" ? E : "";
  }
  return Vl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = m, Vl.createPortal = function(R, E) {
    var N = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!E || E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11)
      throw Error(K(299));
    return I(R, E, null, N);
  }, Vl.flushSync = function(R) {
    var E = Z.T, N = m.p;
    try {
      if (Z.T = null, m.p = 2, R) return R();
    } finally {
      Z.T = E, m.p = N, m.d.f();
    }
  }, Vl.preconnect = function(R, E) {
    typeof R == "string" && (E ? (E = E.crossOrigin, E = typeof E == "string" ? E === "use-credentials" ? E : "" : void 0) : E = null, m.d.C(R, E));
  }, Vl.prefetchDNS = function(R) {
    typeof R == "string" && m.d.D(R);
  }, Vl.preinit = function(R, E) {
    if (typeof R == "string" && E && typeof E.as == "string") {
      var N = E.as, ll = P(N, E.crossOrigin), el = typeof E.integrity == "string" ? E.integrity : void 0, ql = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
      N === "style" ? m.d.S(
        R,
        typeof E.precedence == "string" ? E.precedence : void 0,
        {
          crossOrigin: ll,
          integrity: el,
          fetchPriority: ql
        }
      ) : N === "script" && m.d.X(R, {
        crossOrigin: ll,
        integrity: el,
        fetchPriority: ql,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0
      });
    }
  }, Vl.preinitModule = function(R, E) {
    if (typeof R == "string")
      if (typeof E == "object" && E !== null) {
        if (E.as == null || E.as === "script") {
          var N = P(
            E.as,
            E.crossOrigin
          );
          m.d.M(R, {
            crossOrigin: N,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
            nonce: typeof E.nonce == "string" ? E.nonce : void 0
          });
        }
      } else E == null && m.d.M(R);
  }, Vl.preload = function(R, E) {
    if (typeof R == "string" && typeof E == "object" && E !== null && typeof E.as == "string") {
      var N = E.as, ll = P(N, E.crossOrigin);
      m.d.L(R, N, {
        crossOrigin: ll,
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
  }, Vl.preloadModule = function(R, E) {
    if (typeof R == "string")
      if (E) {
        var N = P(E.as, E.crossOrigin);
        m.d.m(R, {
          as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
          crossOrigin: N,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0
        });
      } else m.d.m(R);
  }, Vl.requestFormReset = function(R) {
    m.d.r(R);
  }, Vl.unstable_batchedUpdates = function(R, E) {
    return R(E);
  }, Vl.useFormState = function(R, E, N) {
    return Z.H.useFormState(R, E, N);
  }, Vl.useFormStatus = function() {
    return Z.H.useHostTransitionStatus();
  }, Vl.version = "19.1.1", Vl;
}
var ed;
function Cy() {
  if (ed) return ui.exports;
  ed = 1;
  function z() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z);
      } catch (K) {
        console.error(K);
      }
  }
  return z(), ui.exports = Qy(), ui.exports;
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
var nd;
function Zy() {
  if (nd) return ge;
  nd = 1;
  var z = jy(), K = ei(), G = Cy();
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
  function I(l) {
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
  function Z(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function P(l) {
    if (I(l) !== l)
      throw Error(m(188));
  }
  function R(l) {
    var t = l.alternate;
    if (!t) {
      if (t = I(l), t === null) throw Error(m(188));
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
          if (n === u) return P(e), l;
          if (n === a) return P(e), t;
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
  var N = Object.assign, ll = Symbol.for("react.element"), el = Symbol.for("react.transitional.element"), ql = Symbol.for("react.portal"), _l = Symbol.for("react.fragment"), Q = Symbol.for("react.strict_mode"), nl = Symbol.for("react.profiler"), ol = Symbol.for("react.provider"), rl = Symbol.for("react.consumer"), Dl = Symbol.for("react.context"), xl = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), Gl = Symbol.for("react.suspense_list"), Xl = Symbol.for("react.memo"), $l = Symbol.for("react.lazy"), bt = Symbol.for("react.activity"), Bu = Symbol.for("react.memo_cache_sentinel"), Mt = Symbol.iterator;
  function jl(l) {
    return l === null || typeof l != "object" ? null : (l = Mt && l[Mt] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var yu = Symbol.for("react.client.reference");
  function hu(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === yu ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case _l:
        return "Fragment";
      case nl:
        return "Profiler";
      case Q:
        return "StrictMode";
      case w:
        return "Suspense";
      case Gl:
        return "SuspenseList";
      case bt:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case ql:
          return "Portal";
        case Dl:
          return (l.displayName || "Context") + ".Provider";
        case rl:
          return (l._context.displayName || "Context") + ".Consumer";
        case xl:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case Xl:
          return t = l.displayName || null, t !== null ? t : hu(l.type) || "Memo";
        case $l:
          t = l._payload, l = l._init;
          try {
            return hu(l(t));
          } catch {
          }
      }
    return null;
  }
  var Ql = Array.isArray, S = K.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, O = G.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, p = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, sl = [], s = -1;
  function A(l) {
    return { current: l };
  }
  function M(l) {
    0 > s || (l.current = sl[s], sl[s] = null, s--);
  }
  function _(l, t) {
    s++, sl[s] = l.current, l.current = t;
  }
  var H = A(null), $ = A(null), x = A(null), Fl = A(null);
  function yl(l, t) {
    switch (_(x, t), _($, l), _(H, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Ov(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = Ov(t), l = Mv(t, l);
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
    M(H), _(H, l);
  }
  function Zt() {
    M(H), M($), M(x);
  }
  function Yn(l) {
    l.memoizedState !== null && _(Fl, l);
    var t = H.current, u = Mv(t, l.type);
    t !== u && (_($, l), _(H, u));
  }
  function be(l) {
    $.current === l && (M(H), M($)), Fl.current === l && (M(Fl), de._currentValue = p);
  }
  var xn = Object.prototype.hasOwnProperty, Gn = z.unstable_scheduleCallback, Xn = z.unstable_cancelCallback, od = z.unstable_shouldYield, yd = z.unstable_requestPaint, Tt = z.unstable_now, hd = z.unstable_getCurrentPriorityLevel, ni = z.unstable_ImmediatePriority, fi = z.unstable_UserBlockingPriority, Te = z.unstable_NormalPriority, rd = z.unstable_LowPriority, ci = z.unstable_IdlePriority, md = z.log, gd = z.unstable_setDisableYieldValue, ba = null, Il = null;
  function Vt(l) {
    if (typeof md == "function" && gd(l), Il && typeof Il.setStrictMode == "function")
      try {
        Il.setStrictMode(ba, l);
      } catch {
      }
  }
  var Pl = Math.clz32 ? Math.clz32 : Td, Sd = Math.log, bd = Math.LN2;
  function Td(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Sd(l) / bd | 0) | 0;
  }
  var Ee = 256, Ae = 4194304;
  function ru(l) {
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
  function ze(l, t, u) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var e = 0, n = l.suspendedLanes, f = l.pingedLanes;
    l = l.warmLanes;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~n, a !== 0 ? e = ru(a) : (f &= c, f !== 0 ? e = ru(f) : u || (u = c & ~l, u !== 0 && (e = ru(u))))) : (c = a & ~n, c !== 0 ? e = ru(c) : f !== 0 ? e = ru(f) : u || (u = a & ~l, u !== 0 && (e = ru(u)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, u = t & -t, n >= u || n === 32 && (u & 4194048) !== 0) ? t : e;
  }
  function Ta(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Ed(l, t) {
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
  function ii() {
    var l = Ee;
    return Ee <<= 1, (Ee & 4194048) === 0 && (Ee = 256), l;
  }
  function si() {
    var l = Ae;
    return Ae <<= 1, (Ae & 62914560) === 0 && (Ae = 4194304), l;
  }
  function jn(l) {
    for (var t = [], u = 0; 31 > u; u++) t.push(l);
    return t;
  }
  function Ea(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Ad(l, t, u, a, e, n) {
    var f = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var c = l.entanglements, i = l.expirationTimes, y = l.hiddenUpdates;
    for (u = f & ~u; 0 < u; ) {
      var g = 31 - Pl(u), T = 1 << g;
      c[g] = 0, i[g] = -1;
      var h = y[g];
      if (h !== null)
        for (y[g] = null, g = 0; g < h.length; g++) {
          var r = h[g];
          r !== null && (r.lane &= -536870913);
        }
      u &= ~T;
    }
    a !== 0 && vi(l, a, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function vi(l, t, u) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - Pl(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | u & 4194090;
  }
  function di(l, t) {
    var u = l.entangledLanes |= t;
    for (l = l.entanglements; u; ) {
      var a = 31 - Pl(u), e = 1 << a;
      e & t | l[a] & t && (l[a] |= t), u &= ~e;
    }
  }
  function Qn(l) {
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
  function Cn(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function oi() {
    var l = O.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Kv(l.type));
  }
  function zd(l, t) {
    var u = O.p;
    try {
      return O.p = l, t();
    } finally {
      O.p = u;
    }
  }
  var Lt = Math.random().toString(36).slice(2), Cl = "__reactFiber$" + Lt, Kl = "__reactProps$" + Lt, pu = "__reactContainer$" + Lt, Zn = "__reactEvents$" + Lt, _d = "__reactListeners$" + Lt, Od = "__reactHandles$" + Lt, yi = "__reactResources$" + Lt, Aa = "__reactMarker$" + Lt;
  function Vn(l) {
    delete l[Cl], delete l[Kl], delete l[Zn], delete l[_d], delete l[Od];
  }
  function Yu(l) {
    var t = l[Cl];
    if (t) return t;
    for (var u = l.parentNode; u; ) {
      if (t = u[pu] || u[Cl]) {
        if (u = t.alternate, t.child !== null || u !== null && u.child !== null)
          for (l = Nv(l); l !== null; ) {
            if (u = l[Cl]) return u;
            l = Nv(l);
          }
        return t;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function xu(l) {
    if (l = l[Cl] || l[pu]) {
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
    var t = l[yi];
    return t || (t = l[yi] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Rl(l) {
    l[Aa] = !0;
  }
  var hi = /* @__PURE__ */ new Set(), ri = {};
  function mu(l, t) {
    Xu(l, t), Xu(l + "Capture", t);
  }
  function Xu(l, t) {
    for (ri[l] = t, l = 0; l < t.length; l++)
      hi.add(t[l]);
  }
  var Md = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), mi = {}, gi = {};
  function Dd(l) {
    return xn.call(gi, l) ? !0 : xn.call(mi, l) ? !1 : Md.test(l) ? gi[l] = !0 : (mi[l] = !0, !1);
  }
  function _e(l, t, u) {
    if (Dd(t))
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
  function Oe(l, t, u) {
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
  function Dt(l, t, u, a) {
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
  var Ln, Si;
  function ju(l) {
    if (Ln === void 0)
      try {
        throw Error();
      } catch (u) {
        var t = u.stack.trim().match(/\n( *(at )?)/);
        Ln = t && t[1] || "", Si = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Ln + l + Si;
  }
  var Kn = !1;
  function Jn(l, t) {
    if (!l || Kn) return "";
    Kn = !0;
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
                  var g = `
` + i[a].replace(" at new ", " at ");
                  return l.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", l.displayName)), g;
                }
              while (1 <= a && 0 <= e);
            break;
          }
      }
    } finally {
      Kn = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? ju(u) : "";
  }
  function Rd(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return ju(l.type);
      case 16:
        return ju("Lazy");
      case 13:
        return ju("Suspense");
      case 19:
        return ju("SuspenseList");
      case 0:
      case 15:
        return Jn(l.type, !1);
      case 11:
        return Jn(l.type.render, !1);
      case 1:
        return Jn(l.type, !0);
      case 31:
        return ju("Activity");
      default:
        return "";
    }
  }
  function bi(l) {
    try {
      var t = "";
      do
        t += Rd(l), l = l.return;
      while (l);
      return t;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  function ct(l) {
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
  function Ti(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Ud(l) {
    var t = Ti(l) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(
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
    l._valueTracker || (l._valueTracker = Ud(l));
  }
  function Ei(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var u = t.getValue(), a = "";
    return l && (a = Ti(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== u ? (t.setValue(l), !0) : !1;
  }
  function De(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Nd = /[\n"\\]/g;
  function it(l) {
    return l.replace(
      Nd,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function wn(l, t, u, a, e, n, f, c) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + ct(t)) : l.value !== "" + ct(t) && (l.value = "" + ct(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? kn(l, f, ct(t)) : u != null ? kn(l, f, ct(u)) : a != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + ct(c) : l.removeAttribute("name");
  }
  function Ai(l, t, u, a, e, n, f, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || u != null) {
      if (!(n !== "submit" && n !== "reset" || t != null))
        return;
      u = u != null ? "" + ct(u) : "", t = t != null ? "" + ct(t) : u, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? e, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = c ? l.checked : !!a, l.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f);
  }
  function kn(l, t, u) {
    t === "number" && De(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function Qu(l, t, u, a) {
    if (l = l.options, t) {
      t = {};
      for (var e = 0; e < u.length; e++)
        t["$" + u[e]] = !0;
      for (u = 0; u < l.length; u++)
        e = t.hasOwnProperty("$" + l[u].value), l[u].selected !== e && (l[u].selected = e), e && a && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + ct(u), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === u) {
          l[e].selected = !0, a && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function zi(l, t, u) {
    if (t != null && (t = "" + ct(t), t !== l.value && (l.value = t), u == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = u != null ? "" + ct(u) : "";
  }
  function _i(l, t, u, a) {
    if (t == null) {
      if (a != null) {
        if (u != null) throw Error(m(92));
        if (Ql(a)) {
          if (1 < a.length) throw Error(m(93));
          a = a[0];
        }
        u = a;
      }
      u == null && (u = ""), t = u;
    }
    u = ct(t), l.defaultValue = u, a = l.textContent, a === u && a !== "" && a !== null && (l.value = a);
  }
  function Cu(l, t) {
    if (t) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Hd = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Oi(l, t, u) {
    var a = t.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, u) : typeof u != "number" || u === 0 || Hd.has(t) ? t === "float" ? l.cssFloat = u : l[t] = ("" + u).trim() : l[t] = u + "px";
  }
  function Mi(l, t, u) {
    if (t != null && typeof t != "object")
      throw Error(m(62));
    if (l = l.style, u != null) {
      for (var a in u)
        !u.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
      for (var e in t)
        a = t[e], t.hasOwnProperty(e) && u[e] !== a && Oi(l, e, a);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && Oi(l, n, t[n]);
  }
  function Wn(l) {
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
  var qd = /* @__PURE__ */ new Map([
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
  ]), Bd = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Re(l) {
    return Bd.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var $n = null;
  function Fn(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Zu = null, Vu = null;
  function Di(l) {
    var t = xu(l);
    if (t && (l = t.stateNode)) {
      var u = l[Kl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (wn(
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
              'input[name="' + it(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < u.length; t++) {
              var a = u[t];
              if (a !== l && a.form === l.form) {
                var e = a[Kl] || null;
                if (!e) throw Error(m(90));
                wn(
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
              a = u[t], a.form === l.form && Ei(a);
          }
          break l;
        case "textarea":
          zi(l, u.value, u.defaultValue);
          break l;
        case "select":
          t = u.value, t != null && Qu(l, !!u.multiple, t, !1);
      }
    }
  }
  var In = !1;
  function Ri(l, t, u) {
    if (In) return l(t, u);
    In = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (In = !1, (Zu !== null || Vu !== null) && (hn(), Zu && (t = Zu, l = Vu, Vu = Zu = null, Di(t), l)))
        for (t = 0; t < l.length; t++) Di(l[t]);
    }
  }
  function _a(l, t) {
    var u = l.stateNode;
    if (u === null) return null;
    var a = u[Kl] || null;
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
  var Rt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Pn = !1;
  if (Rt)
    try {
      var Oa = {};
      Object.defineProperty(Oa, "passive", {
        get: function() {
          Pn = !0;
        }
      }), window.addEventListener("test", Oa, Oa), window.removeEventListener("test", Oa, Oa);
    } catch {
      Pn = !1;
    }
  var Kt = null, lf = null, Ue = null;
  function Ui() {
    if (Ue) return Ue;
    var l, t = lf, u = t.length, a, e = "value" in Kt ? Kt.value : Kt.textContent, n = e.length;
    for (l = 0; l < u && t[l] === e[l]; l++) ;
    var f = u - l;
    for (a = 1; a <= f && t[u - a] === e[n - a]; a++) ;
    return Ue = e.slice(l, 1 < a ? 1 - a : void 0);
  }
  function Ne(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function He() {
    return !0;
  }
  function Ni() {
    return !1;
  }
  function Jl(l) {
    function t(u, a, e, n, f) {
      this._reactName = u, this._targetInst = e, this.type = a, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (u = l[c], this[c] = u ? u(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? He : Ni, this.isPropagationStopped = Ni, this;
    }
    return N(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = He);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = He);
      },
      persist: function() {
      },
      isPersistent: He
    }), t;
  }
  var gu = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, qe = Jl(gu), Ma = N({}, gu, { view: 0, detail: 0 }), pd = Jl(Ma), tf, uf, Da, Be = N({}, Ma, {
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
    getModifierState: ef,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Da && (Da && l.type === "mousemove" ? (tf = l.screenX - Da.screenX, uf = l.screenY - Da.screenY) : uf = tf = 0, Da = l), tf);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : uf;
    }
  }), Hi = Jl(Be), Yd = N({}, Be, { dataTransfer: 0 }), xd = Jl(Yd), Gd = N({}, Ma, { relatedTarget: 0 }), af = Jl(Gd), Xd = N({}, gu, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), jd = Jl(Xd), Qd = N({}, gu, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Cd = Jl(Qd), Zd = N({}, gu, { data: 0 }), qi = Jl(Zd), Vd = {
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
  }, Ld = {
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
  }, Kd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Jd(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = Kd[l]) ? !!t[l] : !1;
  }
  function ef() {
    return Jd;
  }
  var wd = N({}, Ma, {
    key: function(l) {
      if (l.key) {
        var t = Vd[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Ne(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Ld[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ef,
    charCode: function(l) {
      return l.type === "keypress" ? Ne(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Ne(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), kd = Jl(wd), Wd = N({}, Be, {
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
  }), Bi = Jl(Wd), $d = N({}, Ma, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ef
  }), Fd = Jl($d), Id = N({}, gu, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Pd = Jl(Id), lo = N({}, Be, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), to = Jl(lo), uo = N({}, gu, {
    newState: 0,
    oldState: 0
  }), ao = Jl(uo), eo = [9, 13, 27, 32], nf = Rt && "CompositionEvent" in window, Ra = null;
  Rt && "documentMode" in document && (Ra = document.documentMode);
  var no = Rt && "TextEvent" in window && !Ra, pi = Rt && (!nf || Ra && 8 < Ra && 11 >= Ra), Yi = " ", xi = !1;
  function Gi(l, t) {
    switch (l) {
      case "keyup":
        return eo.indexOf(t.keyCode) !== -1;
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
  function Xi(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Lu = !1;
  function fo(l, t) {
    switch (l) {
      case "compositionend":
        return Xi(t);
      case "keypress":
        return t.which !== 32 ? null : (xi = !0, Yi);
      case "textInput":
        return l = t.data, l === Yi && xi ? null : l;
      default:
        return null;
    }
  }
  function co(l, t) {
    if (Lu)
      return l === "compositionend" || !nf && Gi(l, t) ? (l = Ui(), Ue = lf = Kt = null, Lu = !1, l) : null;
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
        return pi && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var io = {
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
  function ji(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!io[l.type] : t === "textarea";
  }
  function Qi(l, t, u, a) {
    Zu ? Vu ? Vu.push(a) : Vu = [a] : Zu = a, t = Tn(t, "onChange"), 0 < t.length && (u = new qe(
      "onChange",
      "change",
      null,
      u,
      a
    ), l.push({ event: u, listeners: t }));
  }
  var Ua = null, Na = null;
  function so(l) {
    Tv(l, 0);
  }
  function pe(l) {
    var t = za(l);
    if (Ei(t)) return l;
  }
  function Ci(l, t) {
    if (l === "change") return t;
  }
  var Zi = !1;
  if (Rt) {
    var ff;
    if (Rt) {
      var cf = "oninput" in document;
      if (!cf) {
        var Vi = document.createElement("div");
        Vi.setAttribute("oninput", "return;"), cf = typeof Vi.oninput == "function";
      }
      ff = cf;
    } else ff = !1;
    Zi = ff && (!document.documentMode || 9 < document.documentMode);
  }
  function Li() {
    Ua && (Ua.detachEvent("onpropertychange", Ki), Na = Ua = null);
  }
  function Ki(l) {
    if (l.propertyName === "value" && pe(Na)) {
      var t = [];
      Qi(
        t,
        Na,
        l,
        Fn(l)
      ), Ri(so, t);
    }
  }
  function vo(l, t, u) {
    l === "focusin" ? (Li(), Ua = t, Na = u, Ua.attachEvent("onpropertychange", Ki)) : l === "focusout" && Li();
  }
  function oo(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return pe(Na);
  }
  function yo(l, t) {
    if (l === "click") return pe(t);
  }
  function ho(l, t) {
    if (l === "input" || l === "change")
      return pe(t);
  }
  function ro(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var lt = typeof Object.is == "function" ? Object.is : ro;
  function Ha(l, t) {
    if (lt(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var u = Object.keys(l), a = Object.keys(t);
    if (u.length !== a.length) return !1;
    for (a = 0; a < u.length; a++) {
      var e = u[a];
      if (!xn.call(t, e) || !lt(l[e], t[e]))
        return !1;
    }
    return !0;
  }
  function Ji(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function wi(l, t) {
    var u = Ji(l);
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
      u = Ji(u);
    }
  }
  function ki(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ki(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Wi(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = De(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof t.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = t.contentWindow;
      else break;
      t = De(l.document);
    }
    return t;
  }
  function sf(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var mo = Rt && "documentMode" in document && 11 >= document.documentMode, Ku = null, vf = null, qa = null, df = !1;
  function $i(l, t, u) {
    var a = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    df || Ku == null || Ku !== De(a) || (a = Ku, "selectionStart" in a && sf(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), qa && Ha(qa, a) || (qa = a, a = Tn(vf, "onSelect"), 0 < a.length && (t = new qe(
      "onSelect",
      "select",
      null,
      t,
      u
    ), l.push({ event: t, listeners: a }), t.target = Ku)));
  }
  function Su(l, t) {
    var u = {};
    return u[l.toLowerCase()] = t.toLowerCase(), u["Webkit" + l] = "webkit" + t, u["Moz" + l] = "moz" + t, u;
  }
  var Ju = {
    animationend: Su("Animation", "AnimationEnd"),
    animationiteration: Su("Animation", "AnimationIteration"),
    animationstart: Su("Animation", "AnimationStart"),
    transitionrun: Su("Transition", "TransitionRun"),
    transitionstart: Su("Transition", "TransitionStart"),
    transitioncancel: Su("Transition", "TransitionCancel"),
    transitionend: Su("Transition", "TransitionEnd")
  }, of = {}, Fi = {};
  Rt && (Fi = document.createElement("div").style, "AnimationEvent" in window || (delete Ju.animationend.animation, delete Ju.animationiteration.animation, delete Ju.animationstart.animation), "TransitionEvent" in window || delete Ju.transitionend.transition);
  function bu(l) {
    if (of[l]) return of[l];
    if (!Ju[l]) return l;
    var t = Ju[l], u;
    for (u in t)
      if (t.hasOwnProperty(u) && u in Fi)
        return of[l] = t[u];
    return l;
  }
  var Ii = bu("animationend"), Pi = bu("animationiteration"), ls = bu("animationstart"), go = bu("transitionrun"), So = bu("transitionstart"), bo = bu("transitioncancel"), ts = bu("transitionend"), us = /* @__PURE__ */ new Map(), yf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  yf.push("scrollEnd");
  function mt(l, t) {
    us.set(l, t), mu(t, [l]);
  }
  var as = /* @__PURE__ */ new WeakMap();
  function st(l, t) {
    if (typeof l == "object" && l !== null) {
      var u = as.get(l);
      return u !== void 0 ? u : (t = {
        value: l,
        source: t,
        stack: bi(t)
      }, as.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: bi(t)
    };
  }
  var vt = [], wu = 0, hf = 0;
  function Ye() {
    for (var l = wu, t = hf = wu = 0; t < l; ) {
      var u = vt[t];
      vt[t++] = null;
      var a = vt[t];
      vt[t++] = null;
      var e = vt[t];
      vt[t++] = null;
      var n = vt[t];
      if (vt[t++] = null, a !== null && e !== null) {
        var f = a.pending;
        f === null ? e.next = e : (e.next = f.next, f.next = e), a.pending = e;
      }
      n !== 0 && es(u, e, n);
    }
  }
  function xe(l, t, u, a) {
    vt[wu++] = l, vt[wu++] = t, vt[wu++] = u, vt[wu++] = a, hf |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function rf(l, t, u, a) {
    return xe(l, t, u, a), Ge(l);
  }
  function ku(l, t) {
    return xe(l, null, null, t), Ge(l);
  }
  function es(l, t, u) {
    l.lanes |= u;
    var a = l.alternate;
    a !== null && (a.lanes |= u);
    for (var e = !1, n = l.return; n !== null; )
      n.childLanes |= u, a = n.alternate, a !== null && (a.childLanes |= u), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - Pl(u), l = n.hiddenUpdates, a = l[e], a === null ? l[e] = [t] : a.push(t), t.lane = u | 536870912), n) : null;
  }
  function Ge(l) {
    if (50 < ae)
      throw ae = 0, Ec = null, Error(m(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Wu = {};
  function To(l, t, u, a) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function tt(l, t, u, a) {
    return new To(l, t, u, a);
  }
  function mf(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Ut(l, t) {
    var u = l.alternate;
    return u === null ? (u = tt(
      l.tag,
      t,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = t, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, t = l.dependencies, u.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function ns(l, t) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, t = u.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function Xe(l, t, u, a, e, n) {
    var f = 0;
    if (a = l, typeof l == "function") mf(l) && (f = 1);
    else if (typeof l == "string")
      f = Ay(
        l,
        u,
        H.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case bt:
          return l = tt(31, u, t, e), l.elementType = bt, l.lanes = n, l;
        case _l:
          return Tu(u.children, e, n, t);
        case Q:
          f = 8, e |= 24;
          break;
        case nl:
          return l = tt(12, u, t, e | 2), l.elementType = nl, l.lanes = n, l;
        case w:
          return l = tt(13, u, t, e), l.elementType = w, l.lanes = n, l;
        case Gl:
          return l = tt(19, u, t, e), l.elementType = Gl, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case ol:
              case Dl:
                f = 10;
                break l;
              case rl:
                f = 9;
                break l;
              case xl:
                f = 11;
                break l;
              case Xl:
                f = 14;
                break l;
              case $l:
                f = 16, a = null;
                break l;
            }
          f = 29, u = Error(
            m(130, l === null ? "null" : typeof l, "")
          ), a = null;
      }
    return t = tt(f, u, t, e), t.elementType = l, t.type = a, t.lanes = n, t;
  }
  function Tu(l, t, u, a) {
    return l = tt(7, l, a, t), l.lanes = u, l;
  }
  function gf(l, t, u) {
    return l = tt(6, l, null, t), l.lanes = u, l;
  }
  function Sf(l, t, u) {
    return t = tt(
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
  var $u = [], Fu = 0, je = null, Qe = 0, dt = [], ot = 0, Eu = null, Nt = 1, Ht = "";
  function Au(l, t) {
    $u[Fu++] = Qe, $u[Fu++] = je, je = l, Qe = t;
  }
  function fs(l, t, u) {
    dt[ot++] = Nt, dt[ot++] = Ht, dt[ot++] = Eu, Eu = l;
    var a = Nt;
    l = Ht;
    var e = 32 - Pl(a) - 1;
    a &= ~(1 << e), u += 1;
    var n = 32 - Pl(t) + e;
    if (30 < n) {
      var f = e - e % 5;
      n = (a & (1 << f) - 1).toString(32), a >>= f, e -= f, Nt = 1 << 32 - Pl(t) + e | u << e | a, Ht = n + l;
    } else
      Nt = 1 << n | u << e | a, Ht = l;
  }
  function bf(l) {
    l.return !== null && (Au(l, 1), fs(l, 1, 0));
  }
  function Tf(l) {
    for (; l === je; )
      je = $u[--Fu], $u[Fu] = null, Qe = $u[--Fu], $u[Fu] = null;
    for (; l === Eu; )
      Eu = dt[--ot], dt[ot] = null, Ht = dt[--ot], dt[ot] = null, Nt = dt[--ot], dt[ot] = null;
  }
  var Ll = null, gl = null, tl = !1, zu = null, Et = !1, Ef = Error(m(519));
  function _u(l) {
    var t = Error(m(418, ""));
    throw Ya(st(t, l)), Ef;
  }
  function cs(l) {
    var t = l.stateNode, u = l.type, a = l.memoizedProps;
    switch (t[Cl] = l, t[Kl] = a, u) {
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
        L("invalid", t), Ai(
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
        L("invalid", t), _i(t, a.value, a.defaultValue, a.children), Me(t);
    }
    u = a.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || t.textContent === "" + u || a.suppressHydrationWarning === !0 || _v(t.textContent, u) ? (a.popover != null && (L("beforetoggle", t), L("toggle", t)), a.onScroll != null && L("scroll", t), a.onScrollEnd != null && L("scrollend", t), a.onClick != null && (t.onclick = En), t = !0) : t = !1, t || _u(l);
  }
  function is(l) {
    for (Ll = l.return; Ll; )
      switch (Ll.tag) {
        case 5:
        case 13:
          Et = !1;
          return;
        case 27:
        case 3:
          Et = !0;
          return;
        default:
          Ll = Ll.return;
      }
  }
  function Ba(l) {
    if (l !== Ll) return !1;
    if (!tl) return is(l), tl = !0, !1;
    var t = l.tag, u;
    if ((u = t !== 3 && t !== 27) && ((u = t === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Gc(l.type, l.memoizedProps)), u = !u), u && gl && _u(l), is(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(m(317));
      l: {
        for (l = l.nextSibling, t = 0; l; ) {
          if (l.nodeType === 8)
            if (u = l.data, u === "/$") {
              if (t === 0) {
                gl = St(l.nextSibling);
                break l;
              }
              t--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || t++;
          l = l.nextSibling;
        }
        gl = null;
      }
    } else
      t === 27 ? (t = gl, cu(l.type) ? (l = Cc, Cc = null, gl = l) : gl = t) : gl = Ll ? St(l.stateNode.nextSibling) : null;
    return !0;
  }
  function pa() {
    gl = Ll = null, tl = !1;
  }
  function ss() {
    var l = zu;
    return l !== null && (Wl === null ? Wl = l : Wl.push.apply(
      Wl,
      l
    ), zu = null), l;
  }
  function Ya(l) {
    zu === null ? zu = [l] : zu.push(l);
  }
  var Af = A(null), Ou = null, qt = null;
  function Jt(l, t, u) {
    _(Af, t._currentValue), t._currentValue = u;
  }
  function Bt(l) {
    l._currentValue = Af.current, M(Af);
  }
  function zf(l, t, u) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === u) break;
      l = l.return;
    }
  }
  function _f(l, t, u, a) {
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
              n.lanes |= u, c = n.alternate, c !== null && (c.lanes |= u), zf(
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
        f.lanes |= u, n = f.alternate, n !== null && (n.lanes |= u), zf(f, u, l), f = null;
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
          lt(e.pendingProps.value, f.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (e === Fl.current) {
        if (f = e.alternate, f === null) throw Error(m(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(de) : l = [de]);
      }
      e = e.return;
    }
    l !== null && _f(
      t,
      l,
      u,
      a
    ), t.flags |= 262144;
  }
  function Ce(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!lt(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Mu(l) {
    Ou = l, qt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Zl(l) {
    return vs(Ou, l);
  }
  function Ze(l, t) {
    return Ou === null && Mu(l), vs(l, t);
  }
  function vs(l, t) {
    var u = t._currentValue;
    if (t = { context: t, memoizedValue: u, next: null }, qt === null) {
      if (l === null) throw Error(m(308));
      qt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else qt = qt.next = t;
    return u;
  }
  var Eo = typeof AbortController < "u" ? AbortController : function() {
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
  }, Ao = z.unstable_scheduleCallback, zo = z.unstable_NormalPriority, Ol = {
    $$typeof: Dl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Of() {
    return {
      controller: new Eo(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ga(l) {
    l.refCount--, l.refCount === 0 && Ao(zo, function() {
      l.controller.abort();
    });
  }
  var Xa = null, Mf = 0, Iu = 0, Pu = null;
  function _o(l, t) {
    if (Xa === null) {
      var u = Xa = [];
      Mf = 0, Iu = Rc(), Pu = {
        status: "pending",
        value: void 0,
        then: function(a) {
          u.push(a);
        }
      };
    }
    return Mf++, t.then(ds, ds), t;
  }
  function ds() {
    if (--Mf === 0 && Xa !== null) {
      Pu !== null && (Pu.status = "fulfilled");
      var l = Xa;
      Xa = null, Iu = 0, Pu = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Oo(l, t) {
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
  var os = S.S;
  S.S = function(l, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && _o(l, t), os !== null && os(l, t);
  };
  var Du = A(null);
  function Df() {
    var l = Du.current;
    return l !== null ? l : dl.pooledCache;
  }
  function Ve(l, t) {
    t === null ? _(Du, Du.current) : _(Du, t.pool);
  }
  function ys() {
    var l = Df();
    return l === null ? null : { parent: Ol._currentValue, pool: l };
  }
  var ja = Error(m(460)), hs = Error(m(474)), Le = Error(m(542)), Rf = { then: function() {
  } };
  function rs(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Ke() {
  }
  function ms(l, t, u) {
    switch (u = l[u], u === void 0 ? l.push(t) : u !== t && (t.then(Ke, Ke), t = u), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, Ss(l), l;
      default:
        if (typeof t.status == "string") t.then(Ke, Ke);
        else {
          if (l = dl, l !== null && 100 < l.shellSuspendCounter)
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
            throw l = t.reason, Ss(l), l;
        }
        throw Qa = t, ja;
    }
  }
  var Qa = null;
  function gs() {
    if (Qa === null) throw Error(m(459));
    var l = Qa;
    return Qa = null, l;
  }
  function Ss(l) {
    if (l === ja || l === Le)
      throw Error(m(483));
  }
  var wt = !1;
  function Uf(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Nf(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function kt(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Wt(l, t, u) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (ul & 2) !== 0) {
      var e = a.pending;
      return e === null ? t.next = t : (t.next = e.next, e.next = t), a.pending = t, t = Ge(l), es(l, null, u), t;
    }
    return xe(l, a, t, u), Ge(l);
  }
  function Ca(l, t, u) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (u & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, di(l, u);
    }
  }
  function Hf(l, t) {
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
  var qf = !1;
  function Za() {
    if (qf) {
      var l = Pu;
      if (l !== null) throw l;
    }
  }
  function Va(l, t, u, a) {
    qf = !1;
    var e = l.updateQueue;
    wt = !1;
    var n = e.firstBaseUpdate, f = e.lastBaseUpdate, c = e.shared.pending;
    if (c !== null) {
      e.shared.pending = null;
      var i = c, y = i.next;
      i.next = null, f === null ? n = y : f.next = y, f = i;
      var g = l.alternate;
      g !== null && (g = g.updateQueue, c = g.lastBaseUpdate, c !== f && (c === null ? g.firstBaseUpdate = y : c.next = y, g.lastBaseUpdate = i));
    }
    if (n !== null) {
      var T = e.baseState;
      f = 0, g = y = i = null, c = n;
      do {
        var h = c.lane & -536870913, r = h !== c.lane;
        if (r ? (W & h) === h : (a & h) === h) {
          h !== 0 && h === Iu && (qf = !0), g !== null && (g = g.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var Y = l, q = c;
            h = t;
            var il = u;
            switch (q.tag) {
              case 1:
                if (Y = q.payload, typeof Y == "function") {
                  T = Y.call(il, T, h);
                  break l;
                }
                T = Y;
                break l;
              case 3:
                Y.flags = Y.flags & -65537 | 128;
              case 0:
                if (Y = q.payload, h = typeof Y == "function" ? Y.call(il, T, h) : Y, h == null) break l;
                T = N({}, T, h);
                break l;
              case 2:
                wt = !0;
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
          }, g === null ? (y = g = r, i = T) : g = g.next = r, f |= h;
        if (c = c.next, c === null) {
          if (c = e.shared.pending, c === null)
            break;
          r = c, c = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
        }
      } while (!0);
      g === null && (i = T), e.baseState = i, e.firstBaseUpdate = y, e.lastBaseUpdate = g, n === null && (e.shared.lanes = 0), au |= f, l.lanes = f, l.memoizedState = T;
    }
  }
  function bs(l, t) {
    if (typeof l != "function")
      throw Error(m(191, l));
    l.call(t);
  }
  function Ts(l, t) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        bs(u[l], t);
  }
  var la = A(null), Je = A(0);
  function Es(l, t) {
    l = Qt, _(Je, l), _(la, t), Qt = l | t.baseLanes;
  }
  function Bf() {
    _(Je, Qt), _(la, la.current);
  }
  function pf() {
    Qt = Je.current, M(la), M(Je);
  }
  var $t = 0, j = null, fl = null, Al = null, we = !1, ta = !1, Ru = !1, ke = 0, La = 0, ua = null, Mo = 0;
  function bl() {
    throw Error(m(321));
  }
  function Yf(l, t) {
    if (t === null) return !1;
    for (var u = 0; u < t.length && u < l.length; u++)
      if (!lt(l[u], t[u])) return !1;
    return !0;
  }
  function xf(l, t, u, a, e, n) {
    return $t = n, j = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, S.H = l === null || l.memoizedState === null ? e0 : n0, Ru = !1, n = u(a, e), Ru = !1, ta && (n = zs(
      t,
      u,
      a,
      e
    )), As(l), n;
  }
  function As(l) {
    S.H = ln;
    var t = fl !== null && fl.next !== null;
    if ($t = 0, Al = fl = j = null, we = !1, La = 0, ua = null, t) throw Error(m(300));
    l === null || Ul || (l = l.dependencies, l !== null && Ce(l) && (Ul = !0));
  }
  function zs(l, t, u, a) {
    j = l;
    var e = 0;
    do {
      if (ta && (ua = null), La = 0, ta = !1, 25 <= e) throw Error(m(301));
      if (e += 1, Al = fl = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      S.H = Bo, n = t(u, a);
    } while (ta);
    return n;
  }
  function Do() {
    var l = S.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? Ka(t) : t, l = l.useState()[0], (fl !== null ? fl.memoizedState : null) !== l && (j.flags |= 1024), t;
  }
  function Gf() {
    var l = ke !== 0;
    return ke = 0, l;
  }
  function Xf(l, t, u) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~u;
  }
  function jf(l) {
    if (we) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      we = !1;
    }
    $t = 0, Al = fl = j = null, ta = !1, La = ke = 0, ua = null;
  }
  function wl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Al === null ? j.memoizedState = Al = l : Al = Al.next = l, Al;
  }
  function zl() {
    if (fl === null) {
      var l = j.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = fl.next;
    var t = Al === null ? j.memoizedState : Al.next;
    if (t !== null)
      Al = t, fl = l;
    else {
      if (l === null)
        throw j.alternate === null ? Error(m(467)) : Error(m(310));
      fl = l, l = {
        memoizedState: fl.memoizedState,
        baseState: fl.baseState,
        baseQueue: fl.baseQueue,
        queue: fl.queue,
        next: null
      }, Al === null ? j.memoizedState = Al = l : Al = Al.next = l;
    }
    return Al;
  }
  function Qf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ka(l) {
    var t = La;
    return La += 1, ua === null && (ua = []), l = ms(ua, l, t), t = j, (Al === null ? t.memoizedState : Al.next) === null && (t = t.alternate, S.H = t === null || t.memoizedState === null ? e0 : n0), l;
  }
  function We(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Ka(l);
      if (l.$$typeof === Dl) return Zl(l);
    }
    throw Error(m(438, String(l)));
  }
  function Cf(l) {
    var t = null, u = j.updateQueue;
    if (u !== null && (t = u.memoCache), t == null) {
      var a = j.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), u === null && (u = Qf(), j.updateQueue = u), u.memoCache = t, u = t.data[t.index], u === void 0)
      for (u = t.data[t.index] = Array(l), a = 0; a < l; a++)
        u[a] = Bu;
    return t.index++, u;
  }
  function pt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function $e(l) {
    var t = zl();
    return Zf(t, fl, l);
  }
  function Zf(l, t, u) {
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
      var c = f = null, i = null, y = t, g = !1;
      do {
        var T = y.lane & -536870913;
        if (T !== y.lane ? (W & T) === T : ($t & T) === T) {
          var h = y.revertLane;
          if (h === 0)
            i !== null && (i = i.next = {
              lane: 0,
              revertLane: 0,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }), T === Iu && (g = !0);
          else if (($t & h) === h) {
            y = y.next, h === Iu && (g = !0);
            continue;
          } else
            T = {
              lane: 0,
              revertLane: y.revertLane,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }, i === null ? (c = i = T, f = n) : i = i.next = T, j.lanes |= h, au |= h;
          T = y.action, Ru && u(n, T), n = y.hasEagerState ? y.eagerState : u(n, T);
        } else
          h = {
            lane: T,
            revertLane: y.revertLane,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null
          }, i === null ? (c = i = h, f = n) : i = i.next = h, j.lanes |= T, au |= T;
        y = y.next;
      } while (y !== null && y !== t);
      if (i === null ? f = n : i.next = c, !lt(n, l.memoizedState) && (Ul = !0, g && (u = Pu, u !== null)))
        throw u;
      l.memoizedState = n, l.baseState = f, l.baseQueue = i, a.lastRenderedState = n;
    }
    return e === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function Vf(l) {
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
      lt(n, t.memoizedState) || (Ul = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), u.lastRenderedState = n;
    }
    return [n, a];
  }
  function _s(l, t, u) {
    var a = j, e = zl(), n = tl;
    if (n) {
      if (u === void 0) throw Error(m(407));
      u = u();
    } else u = t();
    var f = !lt(
      (fl || e).memoizedState,
      u
    );
    f && (e.memoizedState = u, Ul = !0), e = e.queue;
    var c = Ds.bind(null, a, e, l);
    if (Ja(2048, 8, c, [l]), e.getSnapshot !== t || f || Al !== null && Al.memoizedState.tag & 1) {
      if (a.flags |= 2048, aa(
        9,
        Fe(),
        Ms.bind(
          null,
          a,
          e,
          u,
          t
        ),
        null
      ), dl === null) throw Error(m(349));
      n || ($t & 124) !== 0 || Os(a, t, u);
    }
    return u;
  }
  function Os(l, t, u) {
    l.flags |= 16384, l = { getSnapshot: t, value: u }, t = j.updateQueue, t === null ? (t = Qf(), j.updateQueue = t, t.stores = [l]) : (u = t.stores, u === null ? t.stores = [l] : u.push(l));
  }
  function Ms(l, t, u, a) {
    t.value = u, t.getSnapshot = a, Rs(t) && Us(l);
  }
  function Ds(l, t, u) {
    return u(function() {
      Rs(t) && Us(l);
    });
  }
  function Rs(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var u = t();
      return !lt(l, u);
    } catch {
      return !0;
    }
  }
  function Us(l) {
    var t = ku(l, 2);
    t !== null && ft(t, l, 2);
  }
  function Lf(l) {
    var t = wl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), Ru) {
        Vt(!0);
        try {
          u();
        } finally {
          Vt(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: pt,
      lastRenderedState: l
    }, t;
  }
  function Ns(l, t, u, a) {
    return l.baseState = u, Zf(
      l,
      fl,
      typeof a == "function" ? a : pt
    );
  }
  function Ro(l, t, u, a, e) {
    if (Pe(l)) throw Error(m(485));
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
      S.T !== null ? u(!0) : n.isTransition = !1, a(n), u = t.pending, u === null ? (n.next = t.pending = n, Hs(t, n)) : (n.next = u.next, t.pending = u.next = n);
    }
  }
  function Hs(l, t) {
    var u = t.action, a = t.payload, e = l.state;
    if (t.isTransition) {
      var n = S.T, f = {};
      S.T = f;
      try {
        var c = u(e, a), i = S.S;
        i !== null && i(f, c), qs(l, t, c);
      } catch (y) {
        Kf(l, t, y);
      } finally {
        S.T = n;
      }
    } else
      try {
        n = u(e, a), qs(l, t, n);
      } catch (y) {
        Kf(l, t, y);
      }
  }
  function qs(l, t, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(a) {
        Bs(l, t, a);
      },
      function(a) {
        return Kf(l, t, a);
      }
    ) : Bs(l, t, u);
  }
  function Bs(l, t, u) {
    t.status = "fulfilled", t.value = u, ps(t), l.state = u, t = l.pending, t !== null && (u = t.next, u === t ? l.pending = null : (u = u.next, t.next = u, Hs(l, u)));
  }
  function Kf(l, t, u) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = u, ps(t), t = t.next;
      while (t !== a);
    }
    l.action = null;
  }
  function ps(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Ys(l, t) {
    return t;
  }
  function xs(l, t) {
    if (tl) {
      var u = dl.formState;
      if (u !== null) {
        l: {
          var a = j;
          if (tl) {
            if (gl) {
              t: {
                for (var e = gl, n = Et; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (e = St(
                    e.nextSibling
                  ), e === null) {
                    e = null;
                    break t;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                gl = St(
                  e.nextSibling
                ), a = e.data === "F!";
                break l;
              }
            }
            _u(a);
          }
          a = !1;
        }
        a && (t = u[0]);
      }
    }
    return u = wl(), u.memoizedState = u.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ys,
      lastRenderedState: t
    }, u.queue = a, u = t0.bind(
      null,
      j,
      a
    ), a.dispatch = u, a = Lf(!1), n = $f.bind(
      null,
      j,
      !1,
      a.queue
    ), a = wl(), e = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = e, u = Ro.bind(
      null,
      j,
      e,
      n,
      u
    ), e.dispatch = u, a.memoizedState = l, [t, u, !1];
  }
  function Gs(l) {
    var t = zl();
    return Xs(t, fl, l);
  }
  function Xs(l, t, u) {
    if (t = Zf(
      l,
      t,
      Ys
    )[0], l = $e(pt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = Ka(t);
      } catch (f) {
        throw f === ja ? Le : f;
      }
    else a = t;
    t = zl();
    var e = t.queue, n = e.dispatch;
    return u !== t.memoizedState && (j.flags |= 2048, aa(
      9,
      Fe(),
      Uo.bind(null, e, u),
      null
    )), [a, n, l];
  }
  function Uo(l, t) {
    l.action = t;
  }
  function js(l) {
    var t = zl(), u = fl;
    if (u !== null)
      return Xs(t, u, l);
    zl(), t = t.memoizedState, u = zl();
    var a = u.queue.dispatch;
    return u.memoizedState = l, [t, a, !1];
  }
  function aa(l, t, u, a) {
    return l = { tag: l, create: u, deps: a, inst: t, next: null }, t = j.updateQueue, t === null && (t = Qf(), j.updateQueue = t), u = t.lastEffect, u === null ? t.lastEffect = l.next = l : (a = u.next, u.next = l, l.next = a, t.lastEffect = l), l;
  }
  function Fe() {
    return { destroy: void 0, resource: void 0 };
  }
  function Qs() {
    return zl().memoizedState;
  }
  function Ie(l, t, u, a) {
    var e = wl();
    a = a === void 0 ? null : a, j.flags |= l, e.memoizedState = aa(
      1 | t,
      Fe(),
      u,
      a
    );
  }
  function Ja(l, t, u, a) {
    var e = zl();
    a = a === void 0 ? null : a;
    var n = e.memoizedState.inst;
    fl !== null && a !== null && Yf(a, fl.memoizedState.deps) ? e.memoizedState = aa(t, n, u, a) : (j.flags |= l, e.memoizedState = aa(
      1 | t,
      n,
      u,
      a
    ));
  }
  function Cs(l, t) {
    Ie(8390656, 8, l, t);
  }
  function Zs(l, t) {
    Ja(2048, 8, l, t);
  }
  function Vs(l, t) {
    return Ja(4, 2, l, t);
  }
  function Ls(l, t) {
    return Ja(4, 4, l, t);
  }
  function Ks(l, t) {
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
  function Js(l, t, u) {
    u = u != null ? u.concat([l]) : null, Ja(4, 4, Ks.bind(null, t, l), u);
  }
  function Jf() {
  }
  function ws(l, t) {
    var u = zl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    return t !== null && Yf(t, a[1]) ? a[0] : (u.memoizedState = [l, t], l);
  }
  function ks(l, t) {
    var u = zl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    if (t !== null && Yf(t, a[1]))
      return a[0];
    if (a = l(), Ru) {
      Vt(!0);
      try {
        l();
      } finally {
        Vt(!1);
      }
    }
    return u.memoizedState = [a, t], a;
  }
  function wf(l, t, u) {
    return u === void 0 || ($t & 1073741824) !== 0 ? l.memoizedState = t : (l.memoizedState = u, l = F0(), j.lanes |= l, au |= l, u);
  }
  function Ws(l, t, u, a) {
    return lt(u, t) ? u : la.current !== null ? (l = wf(l, u, a), lt(l, t) || (Ul = !0), l) : ($t & 42) === 0 ? (Ul = !0, l.memoizedState = u) : (l = F0(), j.lanes |= l, au |= l, t);
  }
  function $s(l, t, u, a, e) {
    var n = O.p;
    O.p = n !== 0 && 8 > n ? n : 8;
    var f = S.T, c = {};
    S.T = c, $f(l, !1, t, u);
    try {
      var i = e(), y = S.S;
      if (y !== null && y(c, i), i !== null && typeof i == "object" && typeof i.then == "function") {
        var g = Oo(
          i,
          a
        );
        wa(
          l,
          t,
          g,
          nt(l)
        );
      } else
        wa(
          l,
          t,
          a,
          nt(l)
        );
    } catch (T) {
      wa(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: T },
        nt()
      );
    } finally {
      O.p = n, S.T = f;
    }
  }
  function No() {
  }
  function kf(l, t, u, a) {
    if (l.tag !== 5) throw Error(m(476));
    var e = Fs(l).queue;
    $s(
      l,
      e,
      t,
      p,
      u === null ? No : function() {
        return Is(l), u(a);
      }
    );
  }
  function Fs(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: p,
      baseState: p,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: pt,
        lastRenderedState: p
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
        lastRenderedReducer: pt,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function Is(l) {
    var t = Fs(l).next.queue;
    wa(l, t, {}, nt());
  }
  function Wf() {
    return Zl(de);
  }
  function Ps() {
    return zl().memoizedState;
  }
  function l0() {
    return zl().memoizedState;
  }
  function Ho(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var u = nt();
          l = kt(u);
          var a = Wt(t, l, u);
          a !== null && (ft(a, t, u), Ca(a, t, u)), t = { cache: Of() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function qo(l, t, u) {
    var a = nt();
    u = {
      lane: a,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Pe(l) ? u0(t, u) : (u = rf(l, t, u, a), u !== null && (ft(u, l, a), a0(u, t, a)));
  }
  function t0(l, t, u) {
    var a = nt();
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
    if (Pe(l)) u0(t, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var f = t.lastRenderedState, c = n(f, u);
          if (e.hasEagerState = !0, e.eagerState = c, lt(c, f))
            return xe(l, t, e, 0), dl === null && Ye(), !1;
        } catch {
        } finally {
        }
      if (u = rf(l, t, e, a), u !== null)
        return ft(u, l, a), a0(u, t, a), !0;
    }
    return !1;
  }
  function $f(l, t, u, a) {
    if (a = {
      lane: 2,
      revertLane: Rc(),
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Pe(l)) {
      if (t) throw Error(m(479));
    } else
      t = rf(
        l,
        u,
        a,
        2
      ), t !== null && ft(t, l, 2);
  }
  function Pe(l) {
    var t = l.alternate;
    return l === j || t !== null && t === j;
  }
  function u0(l, t) {
    ta = we = !0;
    var u = l.pending;
    u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t;
  }
  function a0(l, t, u) {
    if ((u & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, di(l, u);
    }
  }
  var ln = {
    readContext: Zl,
    use: We,
    useCallback: bl,
    useContext: bl,
    useEffect: bl,
    useImperativeHandle: bl,
    useLayoutEffect: bl,
    useInsertionEffect: bl,
    useMemo: bl,
    useReducer: bl,
    useRef: bl,
    useState: bl,
    useDebugValue: bl,
    useDeferredValue: bl,
    useTransition: bl,
    useSyncExternalStore: bl,
    useId: bl,
    useHostTransitionStatus: bl,
    useFormState: bl,
    useActionState: bl,
    useOptimistic: bl,
    useMemoCache: bl,
    useCacheRefresh: bl
  }, e0 = {
    readContext: Zl,
    use: We,
    useCallback: function(l, t) {
      return wl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Zl,
    useEffect: Cs,
    useImperativeHandle: function(l, t, u) {
      u = u != null ? u.concat([l]) : null, Ie(
        4194308,
        4,
        Ks.bind(null, t, l),
        u
      );
    },
    useLayoutEffect: function(l, t) {
      return Ie(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      Ie(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var u = wl();
      t = t === void 0 ? null : t;
      var a = l();
      if (Ru) {
        Vt(!0);
        try {
          l();
        } finally {
          Vt(!1);
        }
      }
      return u.memoizedState = [a, t], a;
    },
    useReducer: function(l, t, u) {
      var a = wl();
      if (u !== void 0) {
        var e = u(t);
        if (Ru) {
          Vt(!0);
          try {
            u(t);
          } finally {
            Vt(!1);
          }
        }
      } else e = t;
      return a.memoizedState = a.baseState = e, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: e
      }, a.queue = l, l = l.dispatch = qo.bind(
        null,
        j,
        l
      ), [a.memoizedState, l];
    },
    useRef: function(l) {
      var t = wl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = Lf(l);
      var t = l.queue, u = t0.bind(null, j, t);
      return t.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: Jf,
    useDeferredValue: function(l, t) {
      var u = wl();
      return wf(u, l, t);
    },
    useTransition: function() {
      var l = Lf(!1);
      return l = $s.bind(
        null,
        j,
        l.queue,
        !0,
        !1
      ), wl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, u) {
      var a = j, e = wl();
      if (tl) {
        if (u === void 0)
          throw Error(m(407));
        u = u();
      } else {
        if (u = t(), dl === null)
          throw Error(m(349));
        (W & 124) !== 0 || Os(a, t, u);
      }
      e.memoizedState = u;
      var n = { value: u, getSnapshot: t };
      return e.queue = n, Cs(Ds.bind(null, a, n, l), [
        l
      ]), a.flags |= 2048, aa(
        9,
        Fe(),
        Ms.bind(
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
      var l = wl(), t = dl.identifierPrefix;
      if (tl) {
        var u = Ht, a = Nt;
        u = (a & ~(1 << 32 - Pl(a) - 1)).toString(32) + u, t = "«" + t + "R" + u, u = ke++, 0 < u && (t += "H" + u.toString(32)), t += "»";
      } else
        u = Mo++, t = "«" + t + "r" + u.toString(32) + "»";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: Wf,
    useFormState: xs,
    useActionState: xs,
    useOptimistic: function(l) {
      var t = wl();
      t.memoizedState = t.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = u, t = $f.bind(
        null,
        j,
        !0,
        u
      ), u.dispatch = t, [l, t];
    },
    useMemoCache: Cf,
    useCacheRefresh: function() {
      return wl().memoizedState = Ho.bind(
        null,
        j
      );
    }
  }, n0 = {
    readContext: Zl,
    use: We,
    useCallback: ws,
    useContext: Zl,
    useEffect: Zs,
    useImperativeHandle: Js,
    useInsertionEffect: Vs,
    useLayoutEffect: Ls,
    useMemo: ks,
    useReducer: $e,
    useRef: Qs,
    useState: function() {
      return $e(pt);
    },
    useDebugValue: Jf,
    useDeferredValue: function(l, t) {
      var u = zl();
      return Ws(
        u,
        fl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = $e(pt)[0], t = zl().memoizedState;
      return [
        typeof l == "boolean" ? l : Ka(l),
        t
      ];
    },
    useSyncExternalStore: _s,
    useId: Ps,
    useHostTransitionStatus: Wf,
    useFormState: Gs,
    useActionState: Gs,
    useOptimistic: function(l, t) {
      var u = zl();
      return Ns(u, fl, l, t);
    },
    useMemoCache: Cf,
    useCacheRefresh: l0
  }, Bo = {
    readContext: Zl,
    use: We,
    useCallback: ws,
    useContext: Zl,
    useEffect: Zs,
    useImperativeHandle: Js,
    useInsertionEffect: Vs,
    useLayoutEffect: Ls,
    useMemo: ks,
    useReducer: Vf,
    useRef: Qs,
    useState: function() {
      return Vf(pt);
    },
    useDebugValue: Jf,
    useDeferredValue: function(l, t) {
      var u = zl();
      return fl === null ? wf(u, l, t) : Ws(
        u,
        fl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = Vf(pt)[0], t = zl().memoizedState;
      return [
        typeof l == "boolean" ? l : Ka(l),
        t
      ];
    },
    useSyncExternalStore: _s,
    useId: Ps,
    useHostTransitionStatus: Wf,
    useFormState: js,
    useActionState: js,
    useOptimistic: function(l, t) {
      var u = zl();
      return fl !== null ? Ns(u, fl, l, t) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Cf,
    useCacheRefresh: l0
  }, ea = null, ka = 0;
  function tn(l) {
    var t = ka;
    return ka += 1, ea === null && (ea = []), ms(ea, l, t);
  }
  function Wa(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function un(l, t) {
    throw t.$$typeof === ll ? Error(m(525)) : (l = Object.prototype.toString.call(t), Error(
      m(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function f0(l) {
    var t = l._init;
    return t(l._payload);
  }
  function c0(l) {
    function t(d, v) {
      if (l) {
        var o = d.deletions;
        o === null ? (d.deletions = [v], d.flags |= 16) : o.push(v);
      }
    }
    function u(d, v) {
      if (!l) return null;
      for (; v !== null; )
        t(d, v), v = v.sibling;
      return null;
    }
    function a(d) {
      for (var v = /* @__PURE__ */ new Map(); d !== null; )
        d.key !== null ? v.set(d.key, d) : v.set(d.index, d), d = d.sibling;
      return v;
    }
    function e(d, v) {
      return d = Ut(d, v), d.index = 0, d.sibling = null, d;
    }
    function n(d, v, o) {
      return d.index = o, l ? (o = d.alternate, o !== null ? (o = o.index, o < v ? (d.flags |= 67108866, v) : o) : (d.flags |= 67108866, v)) : (d.flags |= 1048576, v);
    }
    function f(d) {
      return l && d.alternate === null && (d.flags |= 67108866), d;
    }
    function c(d, v, o, b) {
      return v === null || v.tag !== 6 ? (v = gf(o, d.mode, b), v.return = d, v) : (v = e(v, o), v.return = d, v);
    }
    function i(d, v, o, b) {
      var D = o.type;
      return D === _l ? g(
        d,
        v,
        o.props.children,
        b,
        o.key
      ) : v !== null && (v.elementType === D || typeof D == "object" && D !== null && D.$$typeof === $l && f0(D) === v.type) ? (v = e(v, o.props), Wa(v, o), v.return = d, v) : (v = Xe(
        o.type,
        o.key,
        o.props,
        null,
        d.mode,
        b
      ), Wa(v, o), v.return = d, v);
    }
    function y(d, v, o, b) {
      return v === null || v.tag !== 4 || v.stateNode.containerInfo !== o.containerInfo || v.stateNode.implementation !== o.implementation ? (v = Sf(o, d.mode, b), v.return = d, v) : (v = e(v, o.children || []), v.return = d, v);
    }
    function g(d, v, o, b, D) {
      return v === null || v.tag !== 7 ? (v = Tu(
        o,
        d.mode,
        b,
        D
      ), v.return = d, v) : (v = e(v, o), v.return = d, v);
    }
    function T(d, v, o) {
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint")
        return v = gf(
          "" + v,
          d.mode,
          o
        ), v.return = d, v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case el:
            return o = Xe(
              v.type,
              v.key,
              v.props,
              null,
              d.mode,
              o
            ), Wa(o, v), o.return = d, o;
          case ql:
            return v = Sf(
              v,
              d.mode,
              o
            ), v.return = d, v;
          case $l:
            var b = v._init;
            return v = b(v._payload), T(d, v, o);
        }
        if (Ql(v) || jl(v))
          return v = Tu(
            v,
            d.mode,
            o,
            null
          ), v.return = d, v;
        if (typeof v.then == "function")
          return T(d, tn(v), o);
        if (v.$$typeof === Dl)
          return T(
            d,
            Ze(d, v),
            o
          );
        un(d, v);
      }
      return null;
    }
    function h(d, v, o, b) {
      var D = v !== null ? v.key : null;
      if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint")
        return D !== null ? null : c(d, v, "" + o, b);
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case el:
            return o.key === D ? i(d, v, o, b) : null;
          case ql:
            return o.key === D ? y(d, v, o, b) : null;
          case $l:
            return D = o._init, o = D(o._payload), h(d, v, o, b);
        }
        if (Ql(o) || jl(o))
          return D !== null ? null : g(d, v, o, b, null);
        if (typeof o.then == "function")
          return h(
            d,
            v,
            tn(o),
            b
          );
        if (o.$$typeof === Dl)
          return h(
            d,
            v,
            Ze(d, o),
            b
          );
        un(d, o);
      }
      return null;
    }
    function r(d, v, o, b, D) {
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
        return d = d.get(o) || null, c(v, d, "" + b, D);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case el:
            return d = d.get(
              b.key === null ? o : b.key
            ) || null, i(v, d, b, D);
          case ql:
            return d = d.get(
              b.key === null ? o : b.key
            ) || null, y(v, d, b, D);
          case $l:
            var C = b._init;
            return b = C(b._payload), r(
              d,
              v,
              o,
              b,
              D
            );
        }
        if (Ql(b) || jl(b))
          return d = d.get(o) || null, g(v, d, b, D, null);
        if (typeof b.then == "function")
          return r(
            d,
            v,
            o,
            tn(b),
            D
          );
        if (b.$$typeof === Dl)
          return r(
            d,
            v,
            o,
            Ze(v, b),
            D
          );
        un(v, b);
      }
      return null;
    }
    function Y(d, v, o, b) {
      for (var D = null, C = null, U = v, B = v = 0, Hl = null; U !== null && B < o.length; B++) {
        U.index > B ? (Hl = U, U = null) : Hl = U.sibling;
        var F = h(
          d,
          U,
          o[B],
          b
        );
        if (F === null) {
          U === null && (U = Hl);
          break;
        }
        l && U && F.alternate === null && t(d, U), v = n(F, v, B), C === null ? D = F : C.sibling = F, C = F, U = Hl;
      }
      if (B === o.length)
        return u(d, U), tl && Au(d, B), D;
      if (U === null) {
        for (; B < o.length; B++)
          U = T(d, o[B], b), U !== null && (v = n(
            U,
            v,
            B
          ), C === null ? D = U : C.sibling = U, C = U);
        return tl && Au(d, B), D;
      }
      for (U = a(U); B < o.length; B++)
        Hl = r(
          U,
          d,
          B,
          o[B],
          b
        ), Hl !== null && (l && Hl.alternate !== null && U.delete(
          Hl.key === null ? B : Hl.key
        ), v = n(
          Hl,
          v,
          B
        ), C === null ? D = Hl : C.sibling = Hl, C = Hl);
      return l && U.forEach(function(ou) {
        return t(d, ou);
      }), tl && Au(d, B), D;
    }
    function q(d, v, o, b) {
      if (o == null) throw Error(m(151));
      for (var D = null, C = null, U = v, B = v = 0, Hl = null, F = o.next(); U !== null && !F.done; B++, F = o.next()) {
        U.index > B ? (Hl = U, U = null) : Hl = U.sibling;
        var ou = h(d, U, F.value, b);
        if (ou === null) {
          U === null && (U = Hl);
          break;
        }
        l && U && ou.alternate === null && t(d, U), v = n(ou, v, B), C === null ? D = ou : C.sibling = ou, C = ou, U = Hl;
      }
      if (F.done)
        return u(d, U), tl && Au(d, B), D;
      if (U === null) {
        for (; !F.done; B++, F = o.next())
          F = T(d, F.value, b), F !== null && (v = n(F, v, B), C === null ? D = F : C.sibling = F, C = F);
        return tl && Au(d, B), D;
      }
      for (U = a(U); !F.done; B++, F = o.next())
        F = r(U, d, B, F.value, b), F !== null && (l && F.alternate !== null && U.delete(F.key === null ? B : F.key), v = n(F, v, B), C === null ? D = F : C.sibling = F, C = F);
      return l && U.forEach(function(py) {
        return t(d, py);
      }), tl && Au(d, B), D;
    }
    function il(d, v, o, b) {
      if (typeof o == "object" && o !== null && o.type === _l && o.key === null && (o = o.props.children), typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case el:
            l: {
              for (var D = o.key; v !== null; ) {
                if (v.key === D) {
                  if (D = o.type, D === _l) {
                    if (v.tag === 7) {
                      u(
                        d,
                        v.sibling
                      ), b = e(
                        v,
                        o.props.children
                      ), b.return = d, d = b;
                      break l;
                    }
                  } else if (v.elementType === D || typeof D == "object" && D !== null && D.$$typeof === $l && f0(D) === v.type) {
                    u(
                      d,
                      v.sibling
                    ), b = e(v, o.props), Wa(b, o), b.return = d, d = b;
                    break l;
                  }
                  u(d, v);
                  break;
                } else t(d, v);
                v = v.sibling;
              }
              o.type === _l ? (b = Tu(
                o.props.children,
                d.mode,
                b,
                o.key
              ), b.return = d, d = b) : (b = Xe(
                o.type,
                o.key,
                o.props,
                null,
                d.mode,
                b
              ), Wa(b, o), b.return = d, d = b);
            }
            return f(d);
          case ql:
            l: {
              for (D = o.key; v !== null; ) {
                if (v.key === D)
                  if (v.tag === 4 && v.stateNode.containerInfo === o.containerInfo && v.stateNode.implementation === o.implementation) {
                    u(
                      d,
                      v.sibling
                    ), b = e(v, o.children || []), b.return = d, d = b;
                    break l;
                  } else {
                    u(d, v);
                    break;
                  }
                else t(d, v);
                v = v.sibling;
              }
              b = Sf(o, d.mode, b), b.return = d, d = b;
            }
            return f(d);
          case $l:
            return D = o._init, o = D(o._payload), il(
              d,
              v,
              o,
              b
            );
        }
        if (Ql(o))
          return Y(
            d,
            v,
            o,
            b
          );
        if (jl(o)) {
          if (D = jl(o), typeof D != "function") throw Error(m(150));
          return o = D.call(o), q(
            d,
            v,
            o,
            b
          );
        }
        if (typeof o.then == "function")
          return il(
            d,
            v,
            tn(o),
            b
          );
        if (o.$$typeof === Dl)
          return il(
            d,
            v,
            Ze(d, o),
            b
          );
        un(d, o);
      }
      return typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint" ? (o = "" + o, v !== null && v.tag === 6 ? (u(d, v.sibling), b = e(v, o), b.return = d, d = b) : (u(d, v), b = gf(o, d.mode, b), b.return = d, d = b), f(d)) : u(d, v);
    }
    return function(d, v, o, b) {
      try {
        ka = 0;
        var D = il(
          d,
          v,
          o,
          b
        );
        return ea = null, D;
      } catch (U) {
        if (U === ja || U === Le) throw U;
        var C = tt(29, U, null, d.mode);
        return C.lanes = b, C.return = d, C;
      } finally {
      }
    };
  }
  var na = c0(!0), i0 = c0(!1), yt = A(null), At = null;
  function Ft(l) {
    var t = l.alternate;
    _(Ml, Ml.current & 1), _(yt, l), At === null && (t === null || la.current !== null || t.memoizedState !== null) && (At = l);
  }
  function s0(l) {
    if (l.tag === 22) {
      if (_(Ml, Ml.current), _(yt, l), At === null) {
        var t = l.alternate;
        t !== null && t.memoizedState !== null && (At = l);
      }
    } else It();
  }
  function It() {
    _(Ml, Ml.current), _(yt, yt.current);
  }
  function Yt(l) {
    M(yt), At === l && (At = null), M(Ml);
  }
  var Ml = A(0);
  function an(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var u = t.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || Qc(u)))
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
  function Ff(l, t, u, a) {
    t = l.memoizedState, u = u(a, t), u = u == null ? t : N({}, t, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var If = {
    enqueueSetState: function(l, t, u) {
      l = l._reactInternals;
      var a = nt(), e = kt(a);
      e.payload = t, u != null && (e.callback = u), t = Wt(l, e, a), t !== null && (ft(t, l, a), Ca(t, l, a));
    },
    enqueueReplaceState: function(l, t, u) {
      l = l._reactInternals;
      var a = nt(), e = kt(a);
      e.tag = 1, e.payload = t, u != null && (e.callback = u), t = Wt(l, e, a), t !== null && (ft(t, l, a), Ca(t, l, a));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var u = nt(), a = kt(u);
      a.tag = 2, t != null && (a.callback = t), t = Wt(l, a, u), t !== null && (ft(t, l, u), Ca(t, l, u));
    }
  };
  function v0(l, t, u, a, e, n, f) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, f) : t.prototype && t.prototype.isPureReactComponent ? !Ha(u, a) || !Ha(e, n) : !0;
  }
  function d0(l, t, u, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(u, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(u, a), t.state !== l && If.enqueueReplaceState(t, t.state, null);
  }
  function Uu(l, t) {
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
  var en = typeof reportError == "function" ? reportError : function(l) {
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
  function o0(l) {
    en(l);
  }
  function y0(l) {
    console.error(l);
  }
  function h0(l) {
    en(l);
  }
  function nn(l, t) {
    try {
      var u = l.onUncaughtError;
      u(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function r0(l, t, u) {
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
  function Pf(l, t, u) {
    return u = kt(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      nn(l, t);
    }, u;
  }
  function m0(l) {
    return l = kt(l), l.tag = 3, l;
  }
  function g0(l, t, u, a) {
    var e = u.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = a.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        r0(t, u, a);
      };
    }
    var f = u.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
      r0(t, u, a), typeof e != "function" && (eu === null ? eu = /* @__PURE__ */ new Set([this]) : eu.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function po(l, t, u, a, e) {
    if (u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = u.alternate, t !== null && xa(
        t,
        u,
        e,
        !0
      ), u = yt.current, u !== null) {
        switch (u.tag) {
          case 13:
            return At === null ? zc() : u.alternate === null && Sl === 0 && (Sl = 3), u.flags &= -257, u.flags |= 65536, u.lanes = e, a === Rf ? u.flags |= 16384 : (t = u.updateQueue, t === null ? u.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Oc(l, a, e)), !1;
          case 22:
            return u.flags |= 65536, a === Rf ? u.flags |= 16384 : (t = u.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, u.updateQueue = t) : (u = t.retryQueue, u === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : u.add(a)), Oc(l, a, e)), !1;
        }
        throw Error(m(435, u.tag));
      }
      return Oc(l, a, e), zc(), !1;
    }
    if (tl)
      return t = yt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, a !== Ef && (l = Error(m(422), { cause: a }), Ya(st(l, u)))) : (a !== Ef && (t = Error(m(423), {
        cause: a
      }), Ya(
        st(t, u)
      )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, a = st(a, u), e = Pf(
        l.stateNode,
        a,
        e
      ), Hf(l, e), Sl !== 4 && (Sl = 2)), !1;
    var n = Error(m(520), { cause: a });
    if (n = st(n, u), ue === null ? ue = [n] : ue.push(n), Sl !== 4 && (Sl = 2), t === null) return !0;
    a = st(a, u), u = t;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = e & -e, u.lanes |= l, l = Pf(u.stateNode, a, l), Hf(u, l), !1;
        case 1:
          if (t = u.type, n = u.stateNode, (u.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (eu === null || !eu.has(n))))
            return u.flags |= 65536, e &= -e, u.lanes |= e, e = m0(e), g0(
              e,
              l,
              u,
              a
            ), Hf(u, e), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var S0 = Error(m(461)), Ul = !1;
  function Bl(l, t, u, a) {
    t.child = l === null ? i0(t, null, u, a) : na(
      t,
      l.child,
      u,
      a
    );
  }
  function b0(l, t, u, a, e) {
    u = u.render;
    var n = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var c in a)
        c !== "ref" && (f[c] = a[c]);
    } else f = a;
    return Mu(t), a = xf(
      l,
      t,
      u,
      f,
      n,
      e
    ), c = Gf(), l !== null && !Ul ? (Xf(l, t, e), xt(l, t, e)) : (tl && c && bf(t), t.flags |= 1, Bl(l, t, a, e), t.child);
  }
  function T0(l, t, u, a, e) {
    if (l === null) {
      var n = u.type;
      return typeof n == "function" && !mf(n) && n.defaultProps === void 0 && u.compare === null ? (t.tag = 15, t.type = n, E0(
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
    if (n = l.child, !cc(l, e)) {
      var f = n.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Ha, u(f, a) && l.ref === t.ref)
        return xt(l, t, e);
    }
    return t.flags |= 1, l = Ut(n, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function E0(l, t, u, a, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Ha(n, a) && l.ref === t.ref)
        if (Ul = !1, t.pendingProps = a = n, cc(l, e))
          (l.flags & 131072) !== 0 && (Ul = !0);
        else
          return t.lanes = l.lanes, xt(l, t, e);
    }
    return lc(
      l,
      t,
      u,
      a,
      e
    );
  }
  function A0(l, t, u) {
    var a = t.pendingProps, e = a.children, n = l !== null ? l.memoizedState : null;
    if (a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (a = n !== null ? n.baseLanes | u : u, l !== null) {
          for (e = t.child = l.child, n = 0; e !== null; )
            n = n | e.lanes | e.childLanes, e = e.sibling;
          t.childLanes = n & ~a;
        } else t.childLanes = 0, t.child = null;
        return z0(
          l,
          t,
          a,
          u
        );
      }
      if ((u & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Ve(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? Es(t, n) : Bf(), s0(t);
      else
        return t.lanes = t.childLanes = 536870912, z0(
          l,
          t,
          n !== null ? n.baseLanes | u : u,
          u
        );
    } else
      n !== null ? (Ve(t, n.cachePool), Es(t, n), It(), t.memoizedState = null) : (l !== null && Ve(t, null), Bf(), It());
    return Bl(l, t, e, u), t.child;
  }
  function z0(l, t, u, a) {
    var e = Df();
    return e = e === null ? null : { parent: Ol._currentValue, pool: e }, t.memoizedState = {
      baseLanes: u,
      cachePool: e
    }, l !== null && Ve(t, null), Bf(), s0(t), l !== null && xa(l, t, a, !0), null;
  }
  function fn(l, t) {
    var u = t.ref;
    if (u === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(m(284));
      (l === null || l.ref !== u) && (t.flags |= 4194816);
    }
  }
  function lc(l, t, u, a, e) {
    return Mu(t), u = xf(
      l,
      t,
      u,
      a,
      void 0,
      e
    ), a = Gf(), l !== null && !Ul ? (Xf(l, t, e), xt(l, t, e)) : (tl && a && bf(t), t.flags |= 1, Bl(l, t, u, e), t.child);
  }
  function _0(l, t, u, a, e, n) {
    return Mu(t), t.updateQueue = null, u = zs(
      t,
      a,
      u,
      e
    ), As(l), a = Gf(), l !== null && !Ul ? (Xf(l, t, n), xt(l, t, n)) : (tl && a && bf(t), t.flags |= 1, Bl(l, t, u, n), t.child);
  }
  function O0(l, t, u, a, e) {
    if (Mu(t), t.stateNode === null) {
      var n = Wu, f = u.contextType;
      typeof f == "object" && f !== null && (n = Zl(f)), n = new u(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = If, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, Uf(t), f = u.contextType, n.context = typeof f == "object" && f !== null ? Zl(f) : Wu, n.state = t.memoizedState, f = u.getDerivedStateFromProps, typeof f == "function" && (Ff(
        t,
        u,
        f,
        a
      ), n.state = t.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && If.enqueueReplaceState(n, n.state, null), Va(t, a, n, e), Za(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps, i = Uu(u, c);
      n.props = i;
      var y = n.context, g = u.contextType;
      f = Wu, typeof g == "object" && g !== null && (f = Zl(g));
      var T = u.getDerivedStateFromProps;
      g = typeof T == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, g || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || y !== f) && d0(
        t,
        n,
        a,
        f
      ), wt = !1;
      var h = t.memoizedState;
      n.state = h, Va(t, a, n, e), Za(), y = t.memoizedState, c || h !== y || wt ? (typeof T == "function" && (Ff(
        t,
        u,
        T,
        a
      ), y = t.memoizedState), (i = wt || v0(
        t,
        u,
        i,
        a,
        h,
        y,
        f
      )) ? (g || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = y), n.props = a, n.state = y, n.context = f, a = i) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      n = t.stateNode, Nf(l, t), f = t.memoizedProps, g = Uu(u, f), n.props = g, T = t.pendingProps, h = n.context, y = u.contextType, i = Wu, typeof y == "object" && y !== null && (i = Zl(y)), c = u.getDerivedStateFromProps, (y = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== T || h !== i) && d0(
        t,
        n,
        a,
        i
      ), wt = !1, h = t.memoizedState, n.state = h, Va(t, a, n, e), Za();
      var r = t.memoizedState;
      f !== T || h !== r || wt || l !== null && l.dependencies !== null && Ce(l.dependencies) ? (typeof c == "function" && (Ff(
        t,
        u,
        c,
        a
      ), r = t.memoizedState), (g = wt || v0(
        t,
        u,
        g,
        a,
        h,
        r,
        i
      ) || l !== null && l.dependencies !== null && Ce(l.dependencies)) ? (y || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, r, i), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        a,
        r,
        i
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = r), n.props = a, n.state = r, n.context = i, a = g) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 1024), a = !1);
    }
    return n = a, fn(l, t), a = (t.flags & 128) !== 0, n || a ? (n = t.stateNode, u = a && typeof u.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && a ? (t.child = na(
      t,
      l.child,
      null,
      e
    ), t.child = na(
      t,
      null,
      u,
      e
    )) : Bl(l, t, u, e), t.memoizedState = n.state, l = t.child) : l = xt(
      l,
      t,
      e
    ), l;
  }
  function M0(l, t, u, a) {
    return pa(), t.flags |= 256, Bl(l, t, u, a), t.child;
  }
  var tc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function uc(l) {
    return { baseLanes: l, cachePool: ys() };
  }
  function ac(l, t, u) {
    return l = l !== null ? l.childLanes & ~u : 0, t && (l |= ht), l;
  }
  function D0(l, t, u) {
    var a = t.pendingProps, e = !1, n = (t.flags & 128) !== 0, f;
    if ((f = n) || (f = l !== null && l.memoizedState === null ? !1 : (Ml.current & 2) !== 0), f && (e = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (tl) {
        if (e ? Ft(t) : It(), tl) {
          var c = gl, i;
          if (i = c) {
            l: {
              for (i = c, c = Et; i.nodeType !== 8; ) {
                if (!c) {
                  c = null;
                  break l;
                }
                if (i = St(
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
              treeContext: Eu !== null ? { id: Nt, overflow: Ht } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, i = tt(
              18,
              null,
              null,
              0
            ), i.stateNode = c, i.return = t, t.child = i, Ll = t, gl = null, i = !0) : i = !1;
          }
          i || _u(t);
        }
        if (c = t.memoizedState, c !== null && (c = c.dehydrated, c !== null))
          return Qc(c) ? t.lanes = 32 : t.lanes = 536870912, null;
        Yt(t);
      }
      return c = a.children, a = a.fallback, e ? (It(), e = t.mode, c = cn(
        { mode: "hidden", children: c },
        e
      ), a = Tu(
        a,
        e,
        u,
        null
      ), c.return = t, a.return = t, c.sibling = a, t.child = c, e = t.child, e.memoizedState = uc(u), e.childLanes = ac(
        l,
        f,
        u
      ), t.memoizedState = tc, a) : (Ft(t), ec(t, c));
    }
    if (i = l.memoizedState, i !== null && (c = i.dehydrated, c !== null)) {
      if (n)
        t.flags & 256 ? (Ft(t), t.flags &= -257, t = nc(
          l,
          t,
          u
        )) : t.memoizedState !== null ? (It(), t.child = l.child, t.flags |= 128, t = null) : (It(), e = a.fallback, c = t.mode, a = cn(
          { mode: "visible", children: a.children },
          c
        ), e = Tu(
          e,
          c,
          u,
          null
        ), e.flags |= 2, a.return = t, e.return = t, a.sibling = e, t.child = a, na(
          t,
          l.child,
          null,
          u
        ), a = t.child, a.memoizedState = uc(u), a.childLanes = ac(
          l,
          f,
          u
        ), t.memoizedState = tc, t = e);
      else if (Ft(t), Qc(c)) {
        if (f = c.nextSibling && c.nextSibling.dataset, f) var y = f.dgst;
        f = y, a = Error(m(419)), a.stack = "", a.digest = f, Ya({ value: a, source: null, stack: null }), t = nc(
          l,
          t,
          u
        );
      } else if (Ul || xa(l, t, u, !1), f = (u & l.childLanes) !== 0, Ul || f) {
        if (f = dl, f !== null && (a = u & -u, a = (a & 42) !== 0 ? 1 : Qn(a), a = (a & (f.suspendedLanes | u)) !== 0 ? 0 : a, a !== 0 && a !== i.retryLane))
          throw i.retryLane = a, ku(l, a), ft(f, l, a), S0;
        c.data === "$?" || zc(), t = nc(
          l,
          t,
          u
        );
      } else
        c.data === "$?" ? (t.flags |= 192, t.child = l.child, t = null) : (l = i.treeContext, gl = St(
          c.nextSibling
        ), Ll = t, tl = !0, zu = null, Et = !1, l !== null && (dt[ot++] = Nt, dt[ot++] = Ht, dt[ot++] = Eu, Nt = l.id, Ht = l.overflow, Eu = t), t = ec(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return e ? (It(), e = a.fallback, c = t.mode, i = l.child, y = i.sibling, a = Ut(i, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = i.subtreeFlags & 65011712, y !== null ? e = Ut(y, e) : (e = Tu(
      e,
      c,
      u,
      null
    ), e.flags |= 2), e.return = t, a.return = t, a.sibling = e, t.child = a, a = e, e = t.child, c = l.child.memoizedState, c === null ? c = uc(u) : (i = c.cachePool, i !== null ? (y = Ol._currentValue, i = i.parent !== y ? { parent: y, pool: y } : i) : i = ys(), c = {
      baseLanes: c.baseLanes | u,
      cachePool: i
    }), e.memoizedState = c, e.childLanes = ac(
      l,
      f,
      u
    ), t.memoizedState = tc, a) : (Ft(t), u = l.child, l = u.sibling, u = Ut(u, {
      mode: "visible",
      children: a.children
    }), u.return = t, u.sibling = null, l !== null && (f = t.deletions, f === null ? (t.deletions = [l], t.flags |= 16) : f.push(l)), t.child = u, t.memoizedState = null, u);
  }
  function ec(l, t) {
    return t = cn(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function cn(l, t) {
    return l = tt(22, l, null, t), l.lanes = 0, l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, l;
  }
  function nc(l, t, u) {
    return na(t, l.child, null, u), l = ec(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function R0(l, t, u) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), zf(l.return, t, u);
  }
  function fc(l, t, u, a, e) {
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
  function U0(l, t, u) {
    var a = t.pendingProps, e = a.revealOrder, n = a.tail;
    if (Bl(l, t, a.children, u), a = Ml.current, (a & 2) !== 0)
      a = a & 1 | 2, t.flags |= 128;
    else {
      if (l !== null && (l.flags & 128) !== 0)
        l: for (l = t.child; l !== null; ) {
          if (l.tag === 13)
            l.memoizedState !== null && R0(l, u, t);
          else if (l.tag === 19)
            R0(l, u, t);
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
    switch (_(Ml, a), e) {
      case "forwards":
        for (u = t.child, e = null; u !== null; )
          l = u.alternate, l !== null && an(l) === null && (e = u), u = u.sibling;
        u = e, u === null ? (e = t.child, t.child = null) : (e = u.sibling, u.sibling = null), fc(
          t,
          !1,
          e,
          u,
          n
        );
        break;
      case "backwards":
        for (u = null, e = t.child, t.child = null; e !== null; ) {
          if (l = e.alternate, l !== null && an(l) === null) {
            t.child = e;
            break;
          }
          l = e.sibling, e.sibling = u, u = e, e = l;
        }
        fc(
          t,
          !0,
          u,
          null,
          n
        );
        break;
      case "together":
        fc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function xt(l, t, u) {
    if (l !== null && (t.dependencies = l.dependencies), au |= t.lanes, (u & t.childLanes) === 0)
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
      for (l = t.child, u = Ut(l, l.pendingProps), t.child = u, u.return = t; l.sibling !== null; )
        l = l.sibling, u = u.sibling = Ut(l, l.pendingProps), u.return = t;
      u.sibling = null;
    }
    return t.child;
  }
  function cc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Ce(l)));
  }
  function Yo(l, t, u) {
    switch (t.tag) {
      case 3:
        yl(t, t.stateNode.containerInfo), Jt(t, Ol, l.memoizedState.cache), pa();
        break;
      case 27:
      case 5:
        Yn(t);
        break;
      case 4:
        yl(t, t.stateNode.containerInfo);
        break;
      case 10:
        Jt(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (Ft(t), t.flags |= 128, null) : (u & t.child.childLanes) !== 0 ? D0(l, t, u) : (Ft(t), l = xt(
            l,
            t,
            u
          ), l !== null ? l.sibling : null);
        Ft(t);
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
            return U0(
              l,
              t,
              u
            );
          t.flags |= 128;
        }
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), _(Ml, Ml.current), a) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, A0(l, t, u);
      case 24:
        Jt(t, Ol, l.memoizedState.cache);
    }
    return xt(l, t, u);
  }
  function N0(l, t, u) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Ul = !0;
      else {
        if (!cc(l, u) && (t.flags & 128) === 0)
          return Ul = !1, Yo(
            l,
            t,
            u
          );
        Ul = (l.flags & 131072) !== 0;
      }
    else
      Ul = !1, tl && (t.flags & 1048576) !== 0 && fs(t, Qe, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          l = t.pendingProps;
          var a = t.elementType, e = a._init;
          if (a = e(a._payload), t.type = a, typeof a == "function")
            mf(a) ? (l = Uu(a, l), t.tag = 1, t = O0(
              null,
              t,
              a,
              l,
              u
            )) : (t.tag = 0, t = lc(
              null,
              t,
              a,
              l,
              u
            ));
          else {
            if (a != null) {
              if (e = a.$$typeof, e === xl) {
                t.tag = 11, t = b0(
                  null,
                  t,
                  a,
                  l,
                  u
                );
                break l;
              } else if (e === Xl) {
                t.tag = 14, t = T0(
                  null,
                  t,
                  a,
                  l,
                  u
                );
                break l;
              }
            }
            throw t = hu(a) || a, Error(m(306, t, ""));
          }
        }
        return t;
      case 0:
        return lc(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 1:
        return a = t.type, e = Uu(
          a,
          t.pendingProps
        ), O0(
          l,
          t,
          a,
          e,
          u
        );
      case 3:
        l: {
          if (yl(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(m(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          e = n.element, Nf(l, t), Va(t, a, null, u);
          var f = t.memoizedState;
          if (a = f.cache, Jt(t, Ol, a), a !== n.cache && _f(
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
              t = M0(
                l,
                t,
                a,
                u
              );
              break l;
            } else if (a !== e) {
              e = st(
                Error(m(424)),
                t
              ), Ya(e), t = M0(
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
              for (gl = St(l.firstChild), Ll = t, tl = !0, zu = null, Et = !0, u = i0(
                t,
                null,
                a,
                u
              ), t.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (pa(), a === e) {
              t = xt(
                l,
                t,
                u
              );
              break l;
            }
            Bl(
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
        return fn(l, t), l === null ? (u = pv(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = u : tl || (u = t.type, l = t.pendingProps, a = An(
          x.current
        ).createElement(u), a[Cl] = t, a[Kl] = l, Yl(a, u, l), Rl(a), t.stateNode = a) : t.memoizedState = pv(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Yn(t), l === null && tl && (a = t.stateNode = Hv(
          t.type,
          t.pendingProps,
          x.current
        ), Ll = t, Et = !0, e = gl, cu(t.type) ? (Cc = e, gl = St(
          a.firstChild
        )) : gl = e), Bl(
          l,
          t,
          t.pendingProps.children,
          u
        ), fn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && tl && ((e = a = gl) && (a = sy(
          a,
          t.type,
          t.pendingProps,
          Et
        ), a !== null ? (t.stateNode = a, Ll = t, gl = St(
          a.firstChild
        ), Et = !1, e = !0) : e = !1), e || _u(t)), Yn(t), e = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, a = n.children, Gc(e, n) ? a = null : f !== null && Gc(e, f) && (t.flags |= 32), t.memoizedState !== null && (e = xf(
          l,
          t,
          Do,
          null,
          null,
          u
        ), de._currentValue = e), fn(l, t), Bl(l, t, a, u), t.child;
      case 6:
        return l === null && tl && ((l = u = gl) && (u = vy(
          u,
          t.pendingProps,
          Et
        ), u !== null ? (t.stateNode = u, Ll = t, gl = null, l = !0) : l = !1), l || _u(t)), null;
      case 13:
        return D0(l, t, u);
      case 4:
        return yl(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, l === null ? t.child = na(
          t,
          null,
          a,
          u
        ) : Bl(
          l,
          t,
          a,
          u
        ), t.child;
      case 11:
        return b0(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 7:
        return Bl(
          l,
          t,
          t.pendingProps,
          u
        ), t.child;
      case 8:
        return Bl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 12:
        return Bl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 10:
        return a = t.pendingProps, Jt(t, t.type, a.value), Bl(
          l,
          t,
          a.children,
          u
        ), t.child;
      case 9:
        return e = t.type._context, a = t.pendingProps.children, Mu(t), e = Zl(e), a = a(e), t.flags |= 1, Bl(l, t, a, u), t.child;
      case 14:
        return T0(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 15:
        return E0(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 19:
        return U0(l, t, u);
      case 31:
        return a = t.pendingProps, u = t.mode, a = {
          mode: a.mode,
          children: a.children
        }, l === null ? (u = cn(
          a,
          u
        ), u.ref = t.ref, t.child = u, u.return = t, t = u) : (u = Ut(l.child, a), u.ref = t.ref, t.child = u, u.return = t, t = u), t;
      case 22:
        return A0(l, t, u);
      case 24:
        return Mu(t), a = Zl(Ol), l === null ? (e = Df(), e === null && (e = dl, n = Of(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= u), e = n), t.memoizedState = {
          parent: a,
          cache: e
        }, Uf(t), Jt(t, Ol, e)) : ((l.lanes & u) !== 0 && (Nf(l, t), Va(t, null, null, u), Za()), e = l.memoizedState, n = t.memoizedState, e.parent !== a ? (e = { parent: a, cache: a }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), Jt(t, Ol, a)) : (a = n.cache, Jt(t, Ol, a), a !== e.cache && _f(
          t,
          [Ol],
          u,
          !0
        ))), Bl(
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
  function Gt(l) {
    l.flags |= 4;
  }
  function H0(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !jv(t)) {
      if (t = yt.current, t !== null && ((W & 4194048) === W ? At !== null : (W & 62914560) !== W && (W & 536870912) === 0 || t !== At))
        throw Qa = Rf, hs;
      l.flags |= 8192;
    }
  }
  function sn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? si() : 536870912, l.lanes |= t, sa |= t);
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
  function ml(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, u = 0, a = 0;
    if (t)
      for (var e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags & 65011712, a |= e.flags & 65011712, e.return = l, e = e.sibling;
    else
      for (e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags, a |= e.flags, e.return = l, e = e.sibling;
    return l.subtreeFlags |= a, l.childLanes = u, t;
  }
  function xo(l, t, u) {
    var a = t.pendingProps;
    switch (Tf(t), t.tag) {
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
        return ml(t), null;
      case 1:
        return ml(t), null;
      case 3:
        return u = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Bt(Ol), Zt(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (Ba(t) ? Gt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ss())), ml(t), null;
      case 26:
        return u = t.memoizedState, l === null ? (Gt(t), u !== null ? (ml(t), H0(t, u)) : (ml(t), t.flags &= -16777217)) : u ? u !== l.memoizedState ? (Gt(t), ml(t), H0(t, u)) : (ml(t), t.flags &= -16777217) : (l.memoizedProps !== a && Gt(t), ml(t), t.flags &= -16777217), null;
      case 27:
        be(t), u = x.current;
        var e = t.type;
        if (l !== null && t.stateNode != null)
          l.memoizedProps !== a && Gt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(m(166));
            return ml(t), null;
          }
          l = H.current, Ba(t) ? cs(t) : (l = Hv(e, a, u), t.stateNode = l, Gt(t));
        }
        return ml(t), null;
      case 5:
        if (be(t), u = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && Gt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(m(166));
            return ml(t), null;
          }
          if (l = H.current, Ba(t))
            cs(t);
          else {
            switch (e = An(
              x.current
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
            l[Cl] = t, l[Kl] = a;
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
            l: switch (Yl(l, u, a), u) {
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
            l && Gt(t);
          }
        }
        return ml(t), t.flags &= -16777217, null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== a && Gt(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(m(166));
          if (l = x.current, Ba(t)) {
            if (l = t.stateNode, u = t.memoizedProps, a = null, e = Ll, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  a = e.memoizedProps;
              }
            l[Cl] = t, l = !!(l.nodeValue === u || a !== null && a.suppressHydrationWarning === !0 || _v(l.nodeValue, u)), l || _u(t);
          } else
            l = An(l).createTextNode(
              a
            ), l[Cl] = t, t.stateNode = l;
        }
        return ml(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = Ba(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(m(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(m(317));
              e[Cl] = t;
            } else
              pa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            ml(t), e = !1;
          } else
            e = ss(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = !0;
          if (!e)
            return t.flags & 256 ? (Yt(t), t) : (Yt(t), null);
        }
        if (Yt(t), (t.flags & 128) !== 0)
          return t.lanes = u, t;
        if (u = a !== null, l = l !== null && l.memoizedState !== null, u) {
          a = t.child, e = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (e = a.alternate.memoizedState.cachePool.pool);
          var n = null;
          a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== e && (a.flags |= 2048);
        }
        return u !== l && u && (t.child.flags |= 8192), sn(t, t.updateQueue), ml(t), null;
      case 4:
        return Zt(), l === null && qc(t.stateNode.containerInfo), ml(t), null;
      case 10:
        return Bt(t.type), ml(t), null;
      case 19:
        if (M(Ml), e = t.memoizedState, e === null) return ml(t), null;
        if (a = (t.flags & 128) !== 0, n = e.rendering, n === null)
          if (a) $a(e, !1);
          else {
            if (Sl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = an(l), n !== null) {
                  for (t.flags |= 128, $a(e, !1), l = n.updateQueue, t.updateQueue = l, sn(t, l), t.subtreeFlags = 0, l = u, u = t.child; u !== null; )
                    ns(u, l), u = u.sibling;
                  return _(
                    Ml,
                    Ml.current & 1 | 2
                  ), t.child;
                }
                l = l.sibling;
              }
            e.tail !== null && Tt() > on && (t.flags |= 128, a = !0, $a(e, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (l = an(n), l !== null) {
              if (t.flags |= 128, a = !0, l = l.updateQueue, t.updateQueue = l, sn(t, l), $a(e, !0), e.tail === null && e.tailMode === "hidden" && !n.alternate && !tl)
                return ml(t), null;
            } else
              2 * Tt() - e.renderingStartTime > on && u !== 536870912 && (t.flags |= 128, a = !0, $a(e, !1), t.lanes = 4194304);
          e.isBackwards ? (n.sibling = t.child, t.child = n) : (l = e.last, l !== null ? l.sibling = n : t.child = n, e.last = n);
        }
        return e.tail !== null ? (t = e.tail, e.rendering = t, e.tail = t.sibling, e.renderingStartTime = Tt(), t.sibling = null, l = Ml.current, _(Ml, a ? l & 1 | 2 : l & 1), t) : (ml(t), null);
      case 22:
      case 23:
        return Yt(t), pf(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (u & 536870912) !== 0 && (t.flags & 128) === 0 && (ml(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ml(t), u = t.updateQueue, u !== null && sn(t, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== u && (t.flags |= 2048), l !== null && M(Du), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), Bt(Ol), ml(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(m(156, t.tag));
  }
  function Go(l, t) {
    switch (Tf(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return Bt(Ol), Zt(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return be(t), null;
      case 13:
        if (Yt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(m(340));
          pa();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return M(Ml), null;
      case 4:
        return Zt(), null;
      case 10:
        return Bt(t.type), null;
      case 22:
      case 23:
        return Yt(t), pf(), l !== null && M(Du), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Bt(Ol), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function q0(l, t) {
    switch (Tf(t), t.tag) {
      case 3:
        Bt(Ol), Zt();
        break;
      case 26:
      case 27:
      case 5:
        be(t);
        break;
      case 4:
        Zt();
        break;
      case 13:
        Yt(t);
        break;
      case 19:
        M(Ml);
        break;
      case 10:
        Bt(t.type);
        break;
      case 22:
      case 23:
        Yt(t), pf(), l !== null && M(Du);
        break;
      case 24:
        Bt(Ol);
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
  function Pt(l, t, u) {
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
              } catch (g) {
                vl(
                  e,
                  i,
                  g
                );
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (g) {
      vl(t, t.return, g);
    }
  }
  function B0(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var u = l.stateNode;
      try {
        Ts(t, u);
      } catch (a) {
        vl(l, l.return, a);
      }
    }
  }
  function p0(l, t, u) {
    u.props = Uu(
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
  function zt(l, t) {
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
  function Y0(l) {
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
  function ic(l, t, u) {
    try {
      var a = l.stateNode;
      ey(a, l.type, u, t), a[Kl] = t;
    } catch (e) {
      vl(l, l.return, e);
    }
  }
  function x0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && cu(l.type) || l.tag === 4;
  }
  function sc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || x0(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && cu(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function vc(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, t) : (t = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, t.appendChild(l), u = u._reactRootContainer, u != null || t.onclick !== null || (t.onclick = En));
    else if (a !== 4 && (a === 27 && cu(l.type) && (u = l.stateNode, t = null), l = l.child, l !== null))
      for (vc(l, t, u), l = l.sibling; l !== null; )
        vc(l, t, u), l = l.sibling;
  }
  function vn(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? u.insertBefore(l, t) : u.appendChild(l);
    else if (a !== 4 && (a === 27 && cu(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (vn(l, t, u), l = l.sibling; l !== null; )
        vn(l, t, u), l = l.sibling;
  }
  function G0(l) {
    var t = l.stateNode, u = l.memoizedProps;
    try {
      for (var a = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      Yl(t, a, u), t[Cl] = l, t[Kl] = u;
    } catch (n) {
      vl(l, l.return, n);
    }
  }
  var Xt = !1, Tl = !1, dc = !1, X0 = typeof WeakSet == "function" ? WeakSet : Set, Nl = null;
  function Xo(l, t) {
    if (l = l.containerInfo, Yc = Rn, l = Wi(l), sf(l)) {
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
            var f = 0, c = -1, i = -1, y = 0, g = 0, T = l, h = null;
            t: for (; ; ) {
              for (var r; T !== u || e !== 0 && T.nodeType !== 3 || (c = f + e), T !== n || a !== 0 && T.nodeType !== 3 || (i = f + a), T.nodeType === 3 && (f += T.nodeValue.length), (r = T.firstChild) !== null; )
                h = T, T = r;
              for (; ; ) {
                if (T === l) break t;
                if (h === u && ++y === e && (c = f), h === n && ++g === a && (i = f), (r = T.nextSibling) !== null) break;
                T = h, h = T.parentNode;
              }
              T = r;
            }
            u = c === -1 || i === -1 ? null : { start: c, end: i };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (xc = { focusedElem: l, selectionRange: u }, Rn = !1, Nl = t; Nl !== null; )
      if (t = Nl, l = t.child, (t.subtreeFlags & 1024) !== 0 && l !== null)
        l.return = t, Nl = l;
      else
        for (; Nl !== null; ) {
          switch (t = Nl, n = t.alternate, l = t.flags, t.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                l = void 0, u = t, e = n.memoizedProps, n = n.memoizedState, a = u.stateNode;
                try {
                  var Y = Uu(
                    u.type,
                    e,
                    u.elementType === u.type
                  );
                  l = a.getSnapshotBeforeUpdate(
                    Y,
                    n
                  ), a.__reactInternalSnapshotBeforeUpdate = l;
                } catch (q) {
                  vl(
                    u,
                    u.return,
                    q
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = t.stateNode.containerInfo, u = l.nodeType, u === 9)
                  jc(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      jc(l);
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
            l.return = t.return, Nl = l;
            break;
          }
          Nl = t.return;
        }
  }
  function j0(l, t, u) {
    var a = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        lu(l, u), a & 4 && Fa(5, u);
        break;
      case 1:
        if (lu(l, u), a & 4)
          if (l = u.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (f) {
              vl(u, u.return, f);
            }
          else {
            var e = Uu(
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
        a & 64 && B0(u), a & 512 && Ia(u, u.return);
        break;
      case 3:
        if (lu(l, u), a & 64 && (l = u.updateQueue, l !== null)) {
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
            Ts(l, t);
          } catch (f) {
            vl(u, u.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && G0(u);
      case 26:
      case 5:
        lu(l, u), t === null && a & 4 && Y0(u), a & 512 && Ia(u, u.return);
        break;
      case 12:
        lu(l, u);
        break;
      case 13:
        lu(l, u), a & 4 && Z0(l, u), a & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = wo.bind(
          null,
          u
        ), dy(l, u))));
        break;
      case 22:
        if (a = u.memoizedState !== null || Xt, !a) {
          t = t !== null && t.memoizedState !== null || Tl, e = Xt;
          var n = Tl;
          Xt = a, (Tl = t) && !n ? tu(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : lu(l, u), Xt = e, Tl = n;
        }
        break;
      case 30:
        break;
      default:
        lu(l, u);
    }
  }
  function Q0(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, Q0(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && Vn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var hl = null, kl = !1;
  function jt(l, t, u) {
    for (u = u.child; u !== null; )
      C0(l, t, u), u = u.sibling;
  }
  function C0(l, t, u) {
    if (Il && typeof Il.onCommitFiberUnmount == "function")
      try {
        Il.onCommitFiberUnmount(ba, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        Tl || zt(u, t), jt(
          l,
          t,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Tl || zt(u, t);
        var a = hl, e = kl;
        cu(u.type) && (hl = u.stateNode, kl = !1), jt(
          l,
          t,
          u
        ), ce(u.stateNode), hl = a, kl = e;
        break;
      case 5:
        Tl || zt(u, t);
      case 6:
        if (a = hl, e = kl, hl = null, jt(
          l,
          t,
          u
        ), hl = a, kl = e, hl !== null)
          if (kl)
            try {
              (hl.nodeType === 9 ? hl.body : hl.nodeName === "HTML" ? hl.ownerDocument.body : hl).removeChild(u.stateNode);
            } catch (n) {
              vl(
                u,
                t,
                n
              );
            }
          else
            try {
              hl.removeChild(u.stateNode);
            } catch (n) {
              vl(
                u,
                t,
                n
              );
            }
        break;
      case 18:
        hl !== null && (kl ? (l = hl, Uv(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), re(l)) : Uv(hl, u.stateNode));
        break;
      case 4:
        a = hl, e = kl, hl = u.stateNode.containerInfo, kl = !0, jt(
          l,
          t,
          u
        ), hl = a, kl = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Tl || Pt(2, u, t), Tl || Pt(4, u, t), jt(
          l,
          t,
          u
        );
        break;
      case 1:
        Tl || (zt(u, t), a = u.stateNode, typeof a.componentWillUnmount == "function" && p0(
          u,
          t,
          a
        )), jt(
          l,
          t,
          u
        );
        break;
      case 21:
        jt(
          l,
          t,
          u
        );
        break;
      case 22:
        Tl = (a = Tl) || u.memoizedState !== null, jt(
          l,
          t,
          u
        ), Tl = a;
        break;
      default:
        jt(
          l,
          t,
          u
        );
    }
  }
  function Z0(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        re(l);
      } catch (u) {
        vl(t, t.return, u);
      }
  }
  function jo(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new X0()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new X0()), t;
      default:
        throw Error(m(435, l.tag));
    }
  }
  function oc(l, t) {
    var u = jo(l);
    t.forEach(function(a) {
      var e = ko.bind(null, l, a);
      u.has(a) || (u.add(a), a.then(e, e));
    });
  }
  function ut(l, t) {
    var u = t.deletions;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var e = u[a], n = l, f = t, c = f;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (cu(c.type)) {
                hl = c.stateNode, kl = !1;
                break l;
              }
              break;
            case 5:
              hl = c.stateNode, kl = !1;
              break l;
            case 3:
            case 4:
              hl = c.stateNode.containerInfo, kl = !0;
              break l;
          }
          c = c.return;
        }
        if (hl === null) throw Error(m(160));
        C0(n, f, e), hl = null, kl = !1, n = e.alternate, n !== null && (n.return = null), e.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        V0(t, l), t = t.sibling;
  }
  var gt = null;
  function V0(l, t) {
    var u = l.alternate, a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ut(t, l), at(l), a & 4 && (Pt(3, l, l.return), Fa(3, l), Pt(5, l, l.return));
        break;
      case 1:
        ut(t, l), at(l), a & 512 && (Tl || u === null || zt(u, u.return)), a & 64 && Xt && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? a : u.concat(a))));
        break;
      case 26:
        var e = gt;
        if (ut(t, l), at(l), a & 512 && (Tl || u === null || zt(u, u.return)), a & 4) {
          var n = u !== null ? u.memoizedState : null;
          if (a = l.memoizedState, u === null)
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  a = l.type, u = l.memoizedProps, e = e.ownerDocument || e;
                  t: switch (a) {
                    case "title":
                      n = e.getElementsByTagName("title")[0], (!n || n[Aa] || n[Cl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(a), e.head.insertBefore(
                        n,
                        e.querySelector("head > title")
                      )), Yl(n, a, u), n[Cl] = l, Rl(n), a = n;
                      break l;
                    case "link":
                      var f = Gv(
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
                      n = e.createElement(a), Yl(n, a, u), e.head.appendChild(n);
                      break;
                    case "meta":
                      if (f = Gv(
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
                      n = e.createElement(a), Yl(n, a, u), e.head.appendChild(n);
                      break;
                    default:
                      throw Error(m(468, a));
                  }
                  n[Cl] = l, Rl(n), a = n;
                }
                l.stateNode = a;
              } else
                Xv(
                  e,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = xv(
                e,
                a,
                l.memoizedProps
              );
          else
            n !== a ? (n === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : n.count--, a === null ? Xv(
              e,
              l.type,
              l.stateNode
            ) : xv(
              e,
              a,
              l.memoizedProps
            )) : a === null && l.stateNode !== null && ic(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        ut(t, l), at(l), a & 512 && (Tl || u === null || zt(u, u.return)), u !== null && a & 4 && ic(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (ut(t, l), at(l), a & 512 && (Tl || u === null || zt(u, u.return)), l.flags & 32) {
          e = l.stateNode;
          try {
            Cu(e, "");
          } catch (r) {
            vl(l, l.return, r);
          }
        }
        a & 4 && l.stateNode != null && (e = l.memoizedProps, ic(
          l,
          e,
          u !== null ? u.memoizedProps : e
        )), a & 1024 && (dc = !0);
        break;
      case 6:
        if (ut(t, l), at(l), a & 4) {
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
        if (On = null, e = gt, gt = zn(t.containerInfo), ut(t, l), gt = e, at(l), a & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            re(t.containerInfo);
          } catch (r) {
            vl(l, l.return, r);
          }
        dc && (dc = !1, L0(l));
        break;
      case 4:
        a = gt, gt = zn(
          l.stateNode.containerInfo
        ), ut(t, l), at(l), gt = a;
        break;
      case 12:
        ut(t, l), at(l);
        break;
      case 13:
        ut(t, l), at(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Sc = Tt()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, oc(l, a)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var i = u !== null && u.memoizedState !== null, y = Xt, g = Tl;
        if (Xt = y || e, Tl = g || i, ut(t, l), Tl = g, Xt = y, at(l), a & 8192)
          l: for (t = l.stateNode, t._visibility = e ? t._visibility & -2 : t._visibility | 1, e && (u === null || i || Xt || Tl || Nu(l)), u = null, t = l; ; ) {
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
        a & 4 && (a = l.updateQueue, a !== null && (u = a.retryQueue, u !== null && (a.retryQueue = null, oc(l, u))));
        break;
      case 19:
        ut(t, l), at(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, oc(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ut(t, l), at(l);
    }
  }
  function at(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var u, a = l.return; a !== null; ) {
          if (x0(a)) {
            u = a;
            break;
          }
          a = a.return;
        }
        if (u == null) throw Error(m(160));
        switch (u.tag) {
          case 27:
            var e = u.stateNode, n = sc(l);
            vn(l, n, e);
            break;
          case 5:
            var f = u.stateNode;
            u.flags & 32 && (Cu(f, ""), u.flags &= -33);
            var c = sc(l);
            vn(l, c, f);
            break;
          case 3:
          case 4:
            var i = u.stateNode.containerInfo, y = sc(l);
            vc(
              l,
              y,
              i
            );
            break;
          default:
            throw Error(m(161));
        }
      } catch (g) {
        vl(l, l.return, g);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function L0(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        L0(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function lu(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        j0(l, t.alternate, t), t = t.sibling;
  }
  function Nu(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Pt(4, t, t.return), Nu(t);
          break;
        case 1:
          zt(t, t.return);
          var u = t.stateNode;
          typeof u.componentWillUnmount == "function" && p0(
            t,
            t.return,
            u
          ), Nu(t);
          break;
        case 27:
          ce(t.stateNode);
        case 26:
        case 5:
          zt(t, t.return), Nu(t);
          break;
        case 22:
          t.memoizedState === null && Nu(t);
          break;
        case 30:
          Nu(t);
          break;
        default:
          Nu(t);
      }
      l = l.sibling;
    }
  }
  function tu(l, t, u) {
    for (u = u && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, e = l, n = t, f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          tu(
            e,
            n,
            u
          ), Fa(4, n);
          break;
        case 1:
          if (tu(
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
                  bs(i[e], c);
            } catch (y) {
              vl(a, a.return, y);
            }
          }
          u && f & 64 && B0(n), Ia(n, n.return);
          break;
        case 27:
          G0(n);
        case 26:
        case 5:
          tu(
            e,
            n,
            u
          ), u && a === null && f & 4 && Y0(n), Ia(n, n.return);
          break;
        case 12:
          tu(
            e,
            n,
            u
          );
          break;
        case 13:
          tu(
            e,
            n,
            u
          ), u && f & 4 && Z0(e, n);
          break;
        case 22:
          n.memoizedState === null && tu(
            e,
            n,
            u
          ), Ia(n, n.return);
          break;
        case 30:
          break;
        default:
          tu(
            e,
            n,
            u
          );
      }
      t = t.sibling;
    }
  }
  function yc(l, t) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Ga(u));
  }
  function hc(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Ga(l));
  }
  function _t(l, t, u, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        K0(
          l,
          t,
          u,
          a
        ), t = t.sibling;
  }
  function K0(l, t, u, a) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        _t(
          l,
          t,
          u,
          a
        ), e & 2048 && Fa(9, t);
        break;
      case 1:
        _t(
          l,
          t,
          u,
          a
        );
        break;
      case 3:
        _t(
          l,
          t,
          u,
          a
        ), e & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Ga(l)));
        break;
      case 12:
        if (e & 2048) {
          _t(
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
          _t(
            l,
            t,
            u,
            a
          );
        break;
      case 13:
        _t(
          l,
          t,
          u,
          a
        );
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, f = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? _t(
          l,
          t,
          u,
          a
        ) : Pa(l, t) : n._visibility & 2 ? _t(
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
        )), e & 2048 && yc(f, t);
        break;
      case 24:
        _t(
          l,
          t,
          u,
          a
        ), e & 2048 && hc(t.alternate, t);
        break;
      default:
        _t(
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
          var g = f.stateNode;
          f.memoizedState !== null ? g._visibility & 2 ? fa(
            n,
            f,
            c,
            i,
            e
          ) : Pa(
            n,
            f
          ) : (g._visibility |= 2, fa(
            n,
            f,
            c,
            i,
            e
          )), e && y & 2048 && yc(
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
          ), e && y & 2048 && hc(f.alternate, f);
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
            Pa(u, a), e & 2048 && yc(
              a.alternate,
              a
            );
            break;
          case 24:
            Pa(u, a), e & 2048 && hc(a.alternate, a);
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
        J0(l), l = l.sibling;
  }
  function J0(l) {
    switch (l.tag) {
      case 26:
        ca(l), l.flags & le && l.memoizedState !== null && _y(
          gt,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        ca(l);
        break;
      case 3:
      case 4:
        var t = gt;
        gt = zn(l.stateNode.containerInfo), ca(l), gt = t;
        break;
      case 22:
        l.memoizedState === null && (t = l.alternate, t !== null && t.memoizedState !== null ? (t = le, le = 16777216, ca(l), le = t) : ca(l));
        break;
      default:
        ca(l);
    }
  }
  function w0(l) {
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
          Nl = a, W0(
            a,
            l
          );
        }
      w0(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        k0(l), l = l.sibling;
  }
  function k0(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        te(l), l.flags & 2048 && Pt(9, l, l.return);
        break;
      case 3:
        te(l);
        break;
      case 12:
        te(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, dn(l)) : te(l);
        break;
      default:
        te(l);
    }
  }
  function dn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          Nl = a, W0(
            a,
            l
          );
        }
      w0(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          Pt(8, t, t.return), dn(t);
          break;
        case 22:
          u = t.stateNode, u._visibility & 2 && (u._visibility &= -3, dn(t));
          break;
        default:
          dn(t);
      }
      l = l.sibling;
    }
  }
  function W0(l, t) {
    for (; Nl !== null; ) {
      var u = Nl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Pt(8, u, t);
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
      if (a = u.child, a !== null) a.return = u, Nl = a;
      else
        l: for (u = l; Nl !== null; ) {
          a = Nl;
          var e = a.sibling, n = a.return;
          if (Q0(a), a === u) {
            Nl = null;
            break l;
          }
          if (e !== null) {
            e.return = n, Nl = e;
            break l;
          }
          Nl = n;
        }
    }
  }
  var Qo = {
    getCacheForType: function(l) {
      var t = Zl(Ol), u = t.data.get(l);
      return u === void 0 && (u = l(), t.data.set(l, u)), u;
    }
  }, Co = typeof WeakMap == "function" ? WeakMap : Map, ul = 0, dl = null, V = null, W = 0, al = 0, et = null, uu = !1, ia = !1, rc = !1, Qt = 0, Sl = 0, au = 0, Hu = 0, mc = 0, ht = 0, sa = 0, ue = null, Wl = null, gc = !1, Sc = 0, on = 1 / 0, yn = null, eu = null, pl = 0, nu = null, va = null, da = 0, bc = 0, Tc = null, $0 = null, ae = 0, Ec = null;
  function nt() {
    if ((ul & 2) !== 0 && W !== 0)
      return W & -W;
    if (S.T !== null) {
      var l = Iu;
      return l !== 0 ? l : Rc();
    }
    return oi();
  }
  function F0() {
    ht === 0 && (ht = (W & 536870912) === 0 || tl ? ii() : 536870912);
    var l = yt.current;
    return l !== null && (l.flags |= 32), ht;
  }
  function ft(l, t, u) {
    (l === dl && (al === 2 || al === 9) || l.cancelPendingCommit !== null) && (oa(l, 0), fu(
      l,
      W,
      ht,
      !1
    )), Ea(l, u), ((ul & 2) === 0 || l !== dl) && (l === dl && ((ul & 2) === 0 && (Hu |= u), Sl === 4 && fu(
      l,
      W,
      ht,
      !1
    )), Ot(l));
  }
  function I0(l, t, u) {
    if ((ul & 6) !== 0) throw Error(m(327));
    var a = !u && (t & 124) === 0 && (t & l.expiredLanes) === 0 || Ta(l, t), e = a ? Lo(l, t) : _c(l, t, !0), n = a;
    do {
      if (e === 0) {
        ia && !a && fu(l, t, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, n && !Zo(u)) {
          e = _c(l, t, !1), n = !1;
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
              if (i && (oa(c, f).flags |= 256), f = _c(
                c,
                f,
                !1
              ), f !== 2) {
                if (rc && !i) {
                  c.errorRecoveryDisabledLanes |= n, Hu |= n, e = 4;
                  break l;
                }
                n = Wl, Wl = e, n !== null && (Wl === null ? Wl = n : Wl.push.apply(
                  Wl,
                  n
                ));
              }
              e = f;
            }
            if (n = !1, e !== 2) continue;
          }
        }
        if (e === 1) {
          oa(l, 0), fu(l, t, 0, !0);
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
              fu(
                a,
                t,
                ht,
                !uu
              );
              break l;
            case 2:
              Wl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(m(329));
          }
          if ((t & 62914560) === t && (e = Sc + 300 - Tt(), 10 < e)) {
            if (fu(
              a,
              t,
              ht,
              !uu
            ), ze(a, 0, !0) !== 0) break l;
            a.timeoutHandle = Dv(
              P0.bind(
                null,
                a,
                u,
                Wl,
                yn,
                gc,
                t,
                ht,
                Hu,
                sa,
                uu,
                n,
                2,
                -0,
                0
              ),
              e
            );
            break l;
          }
          P0(
            a,
            u,
            Wl,
            yn,
            gc,
            t,
            ht,
            Hu,
            sa,
            uu,
            n,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Ot(l);
  }
  function P0(l, t, u, a, e, n, f, c, i, y, g, T, h, r) {
    if (l.timeoutHandle = -1, T = t.subtreeFlags, (T & 8192 || (T & 16785408) === 16785408) && (ve = { stylesheets: null, count: 0, unsuspend: zy }, J0(t), T = Oy(), T !== null)) {
      l.cancelPendingCommit = T(
        fv.bind(
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
          g,
          1,
          h,
          r
        )
      ), fu(l, n, f, !y);
      return;
    }
    fv(
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
  function Zo(l) {
    for (var t = l; ; ) {
      var u = t.tag;
      if ((u === 0 || u === 11 || u === 15) && t.flags & 16384 && (u = t.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var a = 0; a < u.length; a++) {
          var e = u[a], n = e.getSnapshot;
          e = e.value;
          try {
            if (!lt(n(), e)) return !1;
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
  function fu(l, t, u, a) {
    t &= ~mc, t &= ~Hu, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - Pl(e), f = 1 << n;
      a[n] = -1, e &= ~f;
    }
    u !== 0 && vi(l, u, t);
  }
  function hn() {
    return (ul & 6) === 0 ? (ee(0), !1) : !0;
  }
  function Ac() {
    if (V !== null) {
      if (al === 0)
        var l = V.return;
      else
        l = V, qt = Ou = null, jf(l), ea = null, ka = 0, l = V;
      for (; l !== null; )
        q0(l.alternate, l), l = l.return;
      V = null;
    }
  }
  function oa(l, t) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, fy(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), Ac(), dl = l, V = u = Ut(l.current, null), W = t, al = 0, et = null, uu = !1, ia = Ta(l, t), rc = !1, sa = ht = mc = Hu = au = Sl = 0, Wl = ue = null, gc = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var e = 31 - Pl(a), n = 1 << e;
        t |= l[e], a &= ~n;
      }
    return Qt = t, Ye(), u;
  }
  function lv(l, t) {
    j = null, S.H = ln, t === ja || t === Le ? (t = gs(), al = 3) : t === hs ? (t = gs(), al = 4) : al = t === S0 ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, et = t, V === null && (Sl = 1, nn(
      l,
      st(t, l.current)
    ));
  }
  function tv() {
    var l = S.H;
    return S.H = ln, l === null ? ln : l;
  }
  function uv() {
    var l = S.A;
    return S.A = Qo, l;
  }
  function zc() {
    Sl = 4, uu || (W & 4194048) !== W && yt.current !== null || (ia = !0), (au & 134217727) === 0 && (Hu & 134217727) === 0 || dl === null || fu(
      dl,
      W,
      ht,
      !1
    );
  }
  function _c(l, t, u) {
    var a = ul;
    ul |= 2;
    var e = tv(), n = uv();
    (dl !== l || W !== t) && (yn = null, oa(l, t)), t = !1;
    var f = Sl;
    l: do
      try {
        if (al !== 0 && V !== null) {
          var c = V, i = et;
          switch (al) {
            case 8:
              Ac(), f = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              yt.current === null && (t = !0);
              var y = al;
              if (al = 0, et = null, ya(l, c, i, y), u && ia) {
                f = 0;
                break l;
              }
              break;
            default:
              y = al, al = 0, et = null, ya(l, c, i, y);
          }
        }
        Vo(), f = Sl;
        break;
      } catch (g) {
        lv(l, g);
      }
    while (!0);
    return t && l.shellSuspendCounter++, qt = Ou = null, ul = a, S.H = e, S.A = n, V === null && (dl = null, W = 0, Ye()), f;
  }
  function Vo() {
    for (; V !== null; ) av(V);
  }
  function Lo(l, t) {
    var u = ul;
    ul |= 2;
    var a = tv(), e = uv();
    dl !== l || W !== t ? (yn = null, on = Tt() + 500, oa(l, t)) : ia = Ta(
      l,
      t
    );
    l: do
      try {
        if (al !== 0 && V !== null) {
          t = V;
          var n = et;
          t: switch (al) {
            case 1:
              al = 0, et = null, ya(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (rs(n)) {
                al = 0, et = null, ev(t);
                break;
              }
              t = function() {
                al !== 2 && al !== 9 || dl !== l || (al = 7), Ot(l);
              }, n.then(t, t);
              break l;
            case 3:
              al = 7;
              break l;
            case 4:
              al = 5;
              break l;
            case 7:
              rs(n) ? (al = 0, et = null, ev(t)) : (al = 0, et = null, ya(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (V.tag) {
                case 26:
                  f = V.memoizedState;
                case 5:
                case 27:
                  var c = V;
                  if (!f || jv(f)) {
                    al = 0, et = null;
                    var i = c.sibling;
                    if (i !== null) V = i;
                    else {
                      var y = c.return;
                      y !== null ? (V = y, rn(y)) : V = null;
                    }
                    break t;
                  }
              }
              al = 0, et = null, ya(l, t, n, 5);
              break;
            case 6:
              al = 0, et = null, ya(l, t, n, 6);
              break;
            case 8:
              Ac(), Sl = 6;
              break l;
            default:
              throw Error(m(462));
          }
        }
        Ko();
        break;
      } catch (g) {
        lv(l, g);
      }
    while (!0);
    return qt = Ou = null, S.H = a, S.A = e, ul = u, V !== null ? 0 : (dl = null, W = 0, Ye(), Sl);
  }
  function Ko() {
    for (; V !== null && !od(); )
      av(V);
  }
  function av(l) {
    var t = N0(l.alternate, l, Qt);
    l.memoizedProps = l.pendingProps, t === null ? rn(l) : V = t;
  }
  function ev(l) {
    var t = l, u = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = _0(
          u,
          t,
          t.pendingProps,
          t.type,
          void 0,
          W
        );
        break;
      case 11:
        t = _0(
          u,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          W
        );
        break;
      case 5:
        jf(t);
      default:
        q0(u, t), t = V = ns(t, Qt), t = N0(u, t, Qt);
    }
    l.memoizedProps = l.pendingProps, t === null ? rn(l) : V = t;
  }
  function ya(l, t, u, a) {
    qt = Ou = null, jf(t), ea = null, ka = 0;
    var e = t.return;
    try {
      if (po(
        l,
        e,
        t,
        u,
        W
      )) {
        Sl = 1, nn(
          l,
          st(u, l.current)
        ), V = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw V = e, n;
      Sl = 1, nn(
        l,
        st(u, l.current)
      ), V = null;
      return;
    }
    t.flags & 32768 ? (tl || a === 1 ? l = !0 : ia || (W & 536870912) !== 0 ? l = !1 : (uu = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = yt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), nv(t, l)) : rn(t);
  }
  function rn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        nv(
          t,
          uu
        );
        return;
      }
      l = t.return;
      var u = xo(
        t.alternate,
        t,
        Qt
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
    Sl === 0 && (Sl = 5);
  }
  function nv(l, t) {
    do {
      var u = Go(l.alternate, l);
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
    Sl = 6, V = null;
  }
  function fv(l, t, u, a, e, n, f, c, i) {
    l.cancelPendingCommit = null;
    do
      mn();
    while (pl !== 0);
    if ((ul & 6) !== 0) throw Error(m(327));
    if (t !== null) {
      if (t === l.current) throw Error(m(177));
      if (n = t.lanes | t.childLanes, n |= hf, Ad(
        l,
        u,
        n,
        f,
        c,
        i
      ), l === dl && (V = dl = null, W = 0), va = t, nu = l, da = u, bc = n, Tc = e, $0 = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Wo(Te, function() {
        return dv(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = S.T, S.T = null, e = O.p, O.p = 2, f = ul, ul |= 4;
        try {
          Xo(l, t, u);
        } finally {
          ul = f, O.p = e, S.T = a;
        }
      }
      pl = 1, cv(), iv(), sv();
    }
  }
  function cv() {
    if (pl === 1) {
      pl = 0;
      var l = nu, t = va, u = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || u) {
        u = S.T, S.T = null;
        var a = O.p;
        O.p = 2;
        var e = ul;
        ul |= 4;
        try {
          V0(t, l);
          var n = xc, f = Wi(l.containerInfo), c = n.focusedElem, i = n.selectionRange;
          if (f !== c && c && c.ownerDocument && ki(
            c.ownerDocument.documentElement,
            c
          )) {
            if (i !== null && sf(c)) {
              var y = i.start, g = i.end;
              if (g === void 0 && (g = y), "selectionStart" in c)
                c.selectionStart = y, c.selectionEnd = Math.min(
                  g,
                  c.value.length
                );
              else {
                var T = c.ownerDocument || document, h = T && T.defaultView || window;
                if (h.getSelection) {
                  var r = h.getSelection(), Y = c.textContent.length, q = Math.min(i.start, Y), il = i.end === void 0 ? q : Math.min(i.end, Y);
                  !r.extend && q > il && (f = il, il = q, q = f);
                  var d = wi(
                    c,
                    q
                  ), v = wi(
                    c,
                    il
                  );
                  if (d && v && (r.rangeCount !== 1 || r.anchorNode !== d.node || r.anchorOffset !== d.offset || r.focusNode !== v.node || r.focusOffset !== v.offset)) {
                    var o = T.createRange();
                    o.setStart(d.node, d.offset), r.removeAllRanges(), q > il ? (r.addRange(o), r.extend(v.node, v.offset)) : (o.setEnd(v.node, v.offset), r.addRange(o));
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
          Rn = !!Yc, xc = Yc = null;
        } finally {
          ul = e, O.p = a, S.T = u;
        }
      }
      l.current = t, pl = 2;
    }
  }
  function iv() {
    if (pl === 2) {
      pl = 0;
      var l = nu, t = va, u = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || u) {
        u = S.T, S.T = null;
        var a = O.p;
        O.p = 2;
        var e = ul;
        ul |= 4;
        try {
          j0(l, t.alternate, t);
        } finally {
          ul = e, O.p = a, S.T = u;
        }
      }
      pl = 3;
    }
  }
  function sv() {
    if (pl === 4 || pl === 3) {
      pl = 0, yd();
      var l = nu, t = va, u = da, a = $0;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? pl = 5 : (pl = 0, va = nu = null, vv(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (e === 0 && (eu = null), Cn(u), t = t.stateNode, Il && typeof Il.onCommitFiberRoot == "function")
        try {
          Il.onCommitFiberRoot(
            ba,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = S.T, e = O.p, O.p = 2, S.T = null;
        try {
          for (var n = l.onRecoverableError, f = 0; f < a.length; f++) {
            var c = a[f];
            n(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          S.T = t, O.p = e;
        }
      }
      (da & 3) !== 0 && mn(), Ot(l), e = l.pendingLanes, (u & 4194090) !== 0 && (e & 42) !== 0 ? l === Ec ? ae++ : (ae = 0, Ec = l) : ae = 0, ee(0);
    }
  }
  function vv(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Ga(t)));
  }
  function mn(l) {
    return cv(), iv(), sv(), dv();
  }
  function dv() {
    if (pl !== 5) return !1;
    var l = nu, t = bc;
    bc = 0;
    var u = Cn(da), a = S.T, e = O.p;
    try {
      O.p = 32 > u ? 32 : u, S.T = null, u = Tc, Tc = null;
      var n = nu, f = da;
      if (pl = 0, va = nu = null, da = 0, (ul & 6) !== 0) throw Error(m(331));
      var c = ul;
      if (ul |= 4, k0(n.current), K0(
        n,
        n.current,
        f,
        u
      ), ul = c, ee(0, !1), Il && typeof Il.onPostCommitFiberRoot == "function")
        try {
          Il.onPostCommitFiberRoot(ba, n);
        } catch {
        }
      return !0;
    } finally {
      O.p = e, S.T = a, vv(l, t);
    }
  }
  function ov(l, t, u) {
    t = st(u, t), t = Pf(l.stateNode, t, 2), l = Wt(l, t, 2), l !== null && (Ea(l, 2), Ot(l));
  }
  function vl(l, t, u) {
    if (l.tag === 3)
      ov(l, l, u);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ov(
            t,
            l,
            u
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (eu === null || !eu.has(a))) {
            l = st(u, l), u = m0(2), a = Wt(t, u, 2), a !== null && (g0(
              u,
              a,
              t,
              l
            ), Ea(a, 2), Ot(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Oc(l, t, u) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new Co();
      var e = /* @__PURE__ */ new Set();
      a.set(t, e);
    } else
      e = a.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), a.set(t, e));
    e.has(u) || (rc = !0, e.add(u), l = Jo.bind(null, l, t, u), t.then(l, l));
  }
  function Jo(l, t, u) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, dl === l && (W & u) === u && (Sl === 4 || Sl === 3 && (W & 62914560) === W && 300 > Tt() - Sc ? (ul & 2) === 0 && oa(l, 0) : mc |= u, sa === W && (sa = 0)), Ot(l);
  }
  function yv(l, t) {
    t === 0 && (t = si()), l = ku(l, t), l !== null && (Ea(l, t), Ot(l));
  }
  function wo(l) {
    var t = l.memoizedState, u = 0;
    t !== null && (u = t.retryLane), yv(l, u);
  }
  function ko(l, t) {
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
    a !== null && a.delete(t), yv(l, u);
  }
  function Wo(l, t) {
    return Gn(l, t);
  }
  var gn = null, ha = null, Mc = !1, Sn = !1, Dc = !1, qu = 0;
  function Ot(l) {
    l !== ha && l.next === null && (ha === null ? gn = ha = l : ha = ha.next = l), Sn = !0, Mc || (Mc = !0, Fo());
  }
  function ee(l, t) {
    if (!Dc && Sn) {
      Dc = !0;
      do
        for (var u = !1, a = gn; a !== null; ) {
          if (l !== 0) {
            var e = a.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = a.suspendedLanes, c = a.pingedLanes;
              n = (1 << 31 - Pl(42 | l) + 1) - 1, n &= e & ~(f & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (u = !0, gv(a, n));
          } else
            n = W, n = ze(
              a,
              a === dl ? n : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (n & 3) === 0 || Ta(a, n) || (u = !0, gv(a, n));
          a = a.next;
        }
      while (u);
      Dc = !1;
    }
  }
  function $o() {
    hv();
  }
  function hv() {
    Sn = Mc = !1;
    var l = 0;
    qu !== 0 && (ny() && (l = qu), qu = 0);
    for (var t = Tt(), u = null, a = gn; a !== null; ) {
      var e = a.next, n = rv(a, t);
      n === 0 ? (a.next = null, u === null ? gn = e : u.next = e, e === null && (ha = u)) : (u = a, (l !== 0 || (n & 3) !== 0) && (Sn = !0)), a = e;
    }
    ee(l);
  }
  function rv(l, t) {
    for (var u = l.suspendedLanes, a = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - Pl(n), c = 1 << f, i = e[f];
      i === -1 ? ((c & u) === 0 || (c & a) !== 0) && (e[f] = Ed(c, t)) : i <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = dl, u = W, u = ze(
      l,
      l === t ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a = l.callbackNode, u === 0 || l === t && (al === 2 || al === 9) || l.cancelPendingCommit !== null)
      return a !== null && a !== null && Xn(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || Ta(l, u)) {
      if (t = u & -u, t === l.callbackPriority) return t;
      switch (a !== null && Xn(a), Cn(u)) {
        case 2:
        case 8:
          u = fi;
          break;
        case 32:
          u = Te;
          break;
        case 268435456:
          u = ci;
          break;
        default:
          u = Te;
      }
      return a = mv.bind(null, l), u = Gn(u, a), l.callbackPriority = t, l.callbackNode = u, t;
    }
    return a !== null && a !== null && Xn(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function mv(l, t) {
    if (pl !== 0 && pl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (mn() && l.callbackNode !== u)
      return null;
    var a = W;
    return a = ze(
      l,
      l === dl ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a === 0 ? null : (I0(l, a, t), rv(l, Tt()), l.callbackNode != null && l.callbackNode === u ? mv.bind(null, l) : null);
  }
  function gv(l, t) {
    if (mn()) return null;
    I0(l, t, !0);
  }
  function Fo() {
    cy(function() {
      (ul & 6) !== 0 ? Gn(
        ni,
        $o
      ) : hv();
    });
  }
  function Rc() {
    return qu === 0 && (qu = ii()), qu;
  }
  function Sv(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Re("" + l);
  }
  function bv(l, t) {
    var u = t.ownerDocument.createElement("input");
    return u.name = t.name, u.value = t.value, l.id && u.setAttribute("form", l.id), t.parentNode.insertBefore(u, t), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function Io(l, t, u, a, e) {
    if (t === "submit" && u && u.stateNode === e) {
      var n = Sv(
        (e[Kl] || null).action
      ), f = a.submitter;
      f && (t = (t = f[Kl] || null) ? Sv(t.formAction) : f.getAttribute("formAction"), t !== null && (n = t, f = null));
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
                  var i = f ? bv(e, f) : new FormData(e);
                  kf(
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
                typeof n == "function" && (c.preventDefault(), i = f ? bv(e, f) : new FormData(e), kf(
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
  for (var Uc = 0; Uc < yf.length; Uc++) {
    var Nc = yf[Uc], Po = Nc.toLowerCase(), ly = Nc[0].toUpperCase() + Nc.slice(1);
    mt(
      Po,
      "on" + ly
    );
  }
  mt(Ii, "onAnimationEnd"), mt(Pi, "onAnimationIteration"), mt(ls, "onAnimationStart"), mt("dblclick", "onDoubleClick"), mt("focusin", "onFocus"), mt("focusout", "onBlur"), mt(go, "onTransitionRun"), mt(So, "onTransitionStart"), mt(bo, "onTransitionCancel"), mt(ts, "onTransitionEnd"), Xu("onMouseEnter", ["mouseout", "mouseover"]), Xu("onMouseLeave", ["mouseout", "mouseover"]), Xu("onPointerEnter", ["pointerout", "pointerover"]), Xu("onPointerLeave", ["pointerout", "pointerover"]), mu(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), mu(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), mu("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), mu(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), mu(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), mu(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ne = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), ty = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ne)
  );
  function Tv(l, t) {
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
            } catch (g) {
              en(g);
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
            } catch (g) {
              en(g);
            }
            e.currentTarget = null, n = i;
          }
      }
    }
  }
  function L(l, t) {
    var u = t[Zn];
    u === void 0 && (u = t[Zn] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    u.has(a) || (Ev(t, l, 2, !1), u.add(a));
  }
  function Hc(l, t, u) {
    var a = 0;
    t && (a |= 4), Ev(
      u,
      l,
      a,
      t
    );
  }
  var bn = "_reactListening" + Math.random().toString(36).slice(2);
  function qc(l) {
    if (!l[bn]) {
      l[bn] = !0, hi.forEach(function(u) {
        u !== "selectionchange" && (ty.has(u) || Hc(u, !1, l), Hc(u, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[bn] || (t[bn] = !0, Hc("selectionchange", !1, t));
    }
  }
  function Ev(l, t, u, a) {
    switch (Kv(t)) {
      case 2:
        var e = Ry;
        break;
      case 8:
        e = Uy;
        break;
      default:
        e = Jc;
    }
    u = e.bind(
      null,
      t,
      u,
      l
    ), e = void 0, !Pn || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = !0), a ? e !== void 0 ? l.addEventListener(t, u, {
      capture: !0,
      passive: e
    }) : l.addEventListener(t, u, !0) : e !== void 0 ? l.addEventListener(t, u, {
      passive: e
    }) : l.addEventListener(t, u, !1);
  }
  function Bc(l, t, u, a, e) {
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
    Ri(function() {
      var y = n, g = Fn(u), T = [];
      l: {
        var h = us.get(l);
        if (h !== void 0) {
          var r = qe, Y = l;
          switch (l) {
            case "keypress":
              if (Ne(u) === 0) break l;
            case "keydown":
            case "keyup":
              r = kd;
              break;
            case "focusin":
              Y = "focus", r = af;
              break;
            case "focusout":
              Y = "blur", r = af;
              break;
            case "beforeblur":
            case "afterblur":
              r = af;
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
              r = Hi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              r = xd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              r = Fd;
              break;
            case Ii:
            case Pi:
            case ls:
              r = jd;
              break;
            case ts:
              r = Pd;
              break;
            case "scroll":
            case "scrollend":
              r = pd;
              break;
            case "wheel":
              r = to;
              break;
            case "copy":
            case "cut":
            case "paste":
              r = Cd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              r = Bi;
              break;
            case "toggle":
            case "beforetoggle":
              r = ao;
          }
          var q = (t & 4) !== 0, il = !q && (l === "scroll" || l === "scrollend"), d = q ? h !== null ? h + "Capture" : null : h;
          q = [];
          for (var v = y, o; v !== null; ) {
            var b = v;
            if (o = b.stateNode, b = b.tag, b !== 5 && b !== 26 && b !== 27 || o === null || d === null || (b = _a(v, d), b != null && q.push(
              fe(v, b, o)
            )), il) break;
            v = v.return;
          }
          0 < q.length && (h = new r(
            h,
            Y,
            null,
            u,
            g
          ), T.push({ event: h, listeners: q }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (h = l === "mouseover" || l === "pointerover", r = l === "mouseout" || l === "pointerout", h && u !== $n && (Y = u.relatedTarget || u.fromElement) && (Yu(Y) || Y[pu]))
            break l;
          if ((r || h) && (h = g.window === g ? g : (h = g.ownerDocument) ? h.defaultView || h.parentWindow : window, r ? (Y = u.relatedTarget || u.toElement, r = y, Y = Y ? Yu(Y) : null, Y !== null && (il = I(Y), q = Y.tag, Y !== il || q !== 5 && q !== 27 && q !== 6) && (Y = null)) : (r = null, Y = y), r !== Y)) {
            if (q = Hi, b = "onMouseLeave", d = "onMouseEnter", v = "mouse", (l === "pointerout" || l === "pointerover") && (q = Bi, b = "onPointerLeave", d = "onPointerEnter", v = "pointer"), il = r == null ? h : za(r), o = Y == null ? h : za(Y), h = new q(
              b,
              v + "leave",
              r,
              u,
              g
            ), h.target = il, h.relatedTarget = o, b = null, Yu(g) === y && (q = new q(
              d,
              v + "enter",
              Y,
              u,
              g
            ), q.target = o, q.relatedTarget = il, b = q), il = b, r && Y)
              t: {
                for (q = r, d = Y, v = 0, o = q; o; o = ra(o))
                  v++;
                for (o = 0, b = d; b; b = ra(b))
                  o++;
                for (; 0 < v - o; )
                  q = ra(q), v--;
                for (; 0 < o - v; )
                  d = ra(d), o--;
                for (; v--; ) {
                  if (q === d || d !== null && q === d.alternate)
                    break t;
                  q = ra(q), d = ra(d);
                }
                q = null;
              }
            else q = null;
            r !== null && Av(
              T,
              h,
              r,
              q,
              !1
            ), Y !== null && il !== null && Av(
              T,
              il,
              Y,
              q,
              !0
            );
          }
        }
        l: {
          if (h = y ? za(y) : window, r = h.nodeName && h.nodeName.toLowerCase(), r === "select" || r === "input" && h.type === "file")
            var D = Ci;
          else if (ji(h))
            if (Zi)
              D = ho;
            else {
              D = oo;
              var C = vo;
            }
          else
            r = h.nodeName, !r || r.toLowerCase() !== "input" || h.type !== "checkbox" && h.type !== "radio" ? y && Wn(y.elementType) && (D = Ci) : D = yo;
          if (D && (D = D(l, y))) {
            Qi(
              T,
              D,
              u,
              g
            );
            break l;
          }
          C && C(l, h, y), l === "focusout" && y && h.type === "number" && y.memoizedProps.value != null && kn(h, "number", h.value);
        }
        switch (C = y ? za(y) : window, l) {
          case "focusin":
            (ji(C) || C.contentEditable === "true") && (Ku = C, vf = y, qa = null);
            break;
          case "focusout":
            qa = vf = Ku = null;
            break;
          case "mousedown":
            df = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            df = !1, $i(T, u, g);
            break;
          case "selectionchange":
            if (mo) break;
          case "keydown":
          case "keyup":
            $i(T, u, g);
        }
        var U;
        if (nf)
          l: {
            switch (l) {
              case "compositionstart":
                var B = "onCompositionStart";
                break l;
              case "compositionend":
                B = "onCompositionEnd";
                break l;
              case "compositionupdate":
                B = "onCompositionUpdate";
                break l;
            }
            B = void 0;
          }
        else
          Lu ? Gi(l, u) && (B = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (B = "onCompositionStart");
        B && (pi && u.locale !== "ko" && (Lu || B !== "onCompositionStart" ? B === "onCompositionEnd" && Lu && (U = Ui()) : (Kt = g, lf = "value" in Kt ? Kt.value : Kt.textContent, Lu = !0)), C = Tn(y, B), 0 < C.length && (B = new qi(
          B,
          l,
          null,
          u,
          g
        ), T.push({ event: B, listeners: C }), U ? B.data = U : (U = Xi(u), U !== null && (B.data = U)))), (U = no ? fo(l, u) : co(l, u)) && (B = Tn(y, "onBeforeInput"), 0 < B.length && (C = new qi(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          g
        ), T.push({
          event: C,
          listeners: B
        }), C.data = U)), Io(
          T,
          l,
          y,
          u,
          g
        );
      }
      Tv(T, t);
    });
  }
  function fe(l, t, u) {
    return {
      instance: l,
      listener: t,
      currentTarget: u
    };
  }
  function Tn(l, t) {
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
  function Av(l, t, u, a, e) {
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
  var uy = /\r\n?/g, ay = /\u0000|\uFFFD/g;
  function zv(l) {
    return (typeof l == "string" ? l : "" + l).replace(uy, `
`).replace(ay, "");
  }
  function _v(l, t) {
    return t = zv(t), zv(l) === t;
  }
  function En() {
  }
  function cl(l, t, u, a, e, n) {
    switch (u) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Cu(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Cu(l, "" + a);
        break;
      case "className":
        Oe(l, "class", a);
        break;
      case "tabIndex":
        Oe(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Oe(l, u, a);
        break;
      case "style":
        Mi(l, a, n);
        break;
      case "data":
        if (t !== "object") {
          Oe(l, "data", a);
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
        a = Re("" + a), l.setAttribute(u, a);
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
          typeof n == "function" && (u === "formAction" ? (t !== "input" && cl(l, t, "name", e.name, e, null), cl(
            l,
            t,
            "formEncType",
            e.formEncType,
            e,
            null
          ), cl(
            l,
            t,
            "formMethod",
            e.formMethod,
            e,
            null
          ), cl(
            l,
            t,
            "formTarget",
            e.formTarget,
            e,
            null
          )) : (cl(l, t, "encType", e.encType, e, null), cl(l, t, "method", e.method, e, null), cl(l, t, "target", e.target, e, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = Re("" + a), l.setAttribute(u, a);
        break;
      case "onClick":
        a != null && (l.onclick = En);
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
        u = Re("" + a), l.setAttributeNS(
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
        L("beforetoggle", l), L("toggle", l), _e(l, "popover", a);
        break;
      case "xlinkActuate":
        Dt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Dt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Dt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Dt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Dt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Dt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Dt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Dt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Dt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        _e(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = qd.get(u) || u, _e(l, u, a));
    }
  }
  function pc(l, t, u, a, e, n) {
    switch (u) {
      case "style":
        Mi(l, a, n);
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
        typeof a == "string" ? Cu(l, a) : (typeof a == "number" || typeof a == "bigint") && Cu(l, "" + a);
        break;
      case "onScroll":
        a != null && L("scroll", l);
        break;
      case "onScrollEnd":
        a != null && L("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = En);
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
        if (!ri.hasOwnProperty(u))
          l: {
            if (u[0] === "o" && u[1] === "n" && (e = u.endsWith("Capture"), t = u.slice(2, e ? u.length - 7 : void 0), n = l[Kl] || null, n = n != null ? n[u] : null, typeof n == "function" && l.removeEventListener(t, n, e), typeof a == "function")) {
              typeof n != "function" && n !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(t, a, e);
              break l;
            }
            u in l ? l[u] = a : a === !0 ? l.setAttribute(u, "") : _e(l, u, a);
          }
    }
  }
  function Yl(l, t, u) {
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
                  cl(l, t, n, f, u, null);
              }
          }
        e && cl(l, t, "srcSet", u.srcSet, u, null), a && cl(l, t, "src", u.src, u, null);
        return;
      case "input":
        L("invalid", l);
        var c = n = f = e = null, i = null, y = null;
        for (a in u)
          if (u.hasOwnProperty(a)) {
            var g = u[a];
            if (g != null)
              switch (a) {
                case "name":
                  e = g;
                  break;
                case "type":
                  f = g;
                  break;
                case "checked":
                  i = g;
                  break;
                case "defaultChecked":
                  y = g;
                  break;
                case "value":
                  n = g;
                  break;
                case "defaultValue":
                  c = g;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (g != null)
                    throw Error(m(137, t));
                  break;
                default:
                  cl(l, t, a, g, u, null);
              }
          }
        Ai(
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
                cl(l, t, e, c, u, null);
            }
        t = n, u = f, l.multiple = !!a, t != null ? Qu(l, !!a, t, !1) : u != null && Qu(l, !!a, u, !0);
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
                cl(l, t, f, c, u, null);
            }
        _i(l, a, e, n), Me(l);
        return;
      case "option":
        for (i in u)
          if (u.hasOwnProperty(i) && (a = u[i], a != null))
            switch (i) {
              case "selected":
                l.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                cl(l, t, i, a, u, null);
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
                cl(l, t, y, a, u, null);
            }
        return;
      default:
        if (Wn(t)) {
          for (g in u)
            u.hasOwnProperty(g) && (a = u[g], a !== void 0 && pc(
              l,
              t,
              g,
              a,
              u,
              void 0
            ));
          return;
        }
    }
    for (c in u)
      u.hasOwnProperty(c) && (a = u[c], a != null && cl(l, t, c, a, u, null));
  }
  function ey(l, t, u, a) {
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
        var e = null, n = null, f = null, c = null, i = null, y = null, g = null;
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
                a.hasOwnProperty(r) || cl(l, t, r, null, a, T);
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
                g = r;
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
                r !== T && cl(
                  l,
                  t,
                  h,
                  r,
                  a,
                  T
                );
            }
        }
        wn(
          l,
          f,
          c,
          i,
          y,
          g,
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
                a.hasOwnProperty(n) || cl(
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
                n !== i && cl(
                  l,
                  t,
                  e,
                  n,
                  a,
                  i
                );
            }
        t = c, u = f, a = r, h != null ? Qu(l, !!u, h, !1) : !!a != !!u && (t != null ? Qu(l, !!u, t, !0) : Qu(l, !!u, u ? [] : "", !1));
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
                cl(l, t, c, null, a, e);
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
                e !== n && cl(l, t, f, e, a, n);
            }
        zi(l, h, r);
        return;
      case "option":
        for (var Y in u)
          if (h = u[Y], u.hasOwnProperty(Y) && h != null && !a.hasOwnProperty(Y))
            switch (Y) {
              case "selected":
                l.selected = !1;
                break;
              default:
                cl(
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
                cl(
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
        for (var q in u)
          h = u[q], u.hasOwnProperty(q) && h != null && !a.hasOwnProperty(q) && cl(l, t, q, null, a, h);
        for (y in a)
          if (h = a[y], r = u[y], a.hasOwnProperty(y) && h !== r && (h != null || r != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (h != null)
                  throw Error(m(137, t));
                break;
              default:
                cl(
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
        if (Wn(t)) {
          for (var il in u)
            h = u[il], u.hasOwnProperty(il) && h !== void 0 && !a.hasOwnProperty(il) && pc(
              l,
              t,
              il,
              void 0,
              a,
              h
            );
          for (g in a)
            h = a[g], r = u[g], !a.hasOwnProperty(g) || h === r || h === void 0 && r === void 0 || pc(
              l,
              t,
              g,
              h,
              a,
              r
            );
          return;
        }
    }
    for (var d in u)
      h = u[d], u.hasOwnProperty(d) && h != null && !a.hasOwnProperty(d) && cl(l, t, d, null, a, h);
    for (T in a)
      h = a[T], r = u[T], !a.hasOwnProperty(T) || h === r || h == null && r == null || cl(l, t, T, h, a, r);
  }
  var Yc = null, xc = null;
  function An(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Ov(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Mv(l, t) {
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
  function Gc(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Xc = null;
  function ny() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Xc ? !1 : (Xc = l, !0) : (Xc = null, !1);
  }
  var Dv = typeof setTimeout == "function" ? setTimeout : void 0, fy = typeof clearTimeout == "function" ? clearTimeout : void 0, Rv = typeof Promise == "function" ? Promise : void 0, cy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Rv < "u" ? function(l) {
    return Rv.resolve(null).then(l).catch(iy);
  } : Dv;
  function iy(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function cu(l) {
    return l === "head";
  }
  function Uv(l, t) {
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
  function jc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var u = t;
      switch (t = t.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          jc(u), Vn(u);
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
  function sy(l, t, u, a) {
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
      if (l = St(l.nextSibling), l === null) break;
    }
    return null;
  }
  function vy(l, t, u) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = St(l.nextSibling), l === null)) return null;
    return l;
  }
  function Qc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete";
  }
  function dy(l, t) {
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
  function St(l) {
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
  var Cc = null;
  function Nv(l) {
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
  function Hv(l, t, u) {
    switch (t = An(u), l) {
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
    Vn(l);
  }
  var rt = /* @__PURE__ */ new Map(), qv = /* @__PURE__ */ new Set();
  function zn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Ct = O.d;
  O.d = {
    f: oy,
    r: yy,
    D: hy,
    C: ry,
    L: my,
    m: gy,
    X: by,
    S: Sy,
    M: Ty
  };
  function oy() {
    var l = Ct.f(), t = hn();
    return l || t;
  }
  function yy(l) {
    var t = xu(l);
    t !== null && t.tag === 5 && t.type === "form" ? Is(t) : Ct.r(l);
  }
  var ma = typeof document > "u" ? null : document;
  function Bv(l, t, u) {
    var a = ma;
    if (a && typeof t == "string" && t) {
      var e = it(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof u == "string" && (e += '[crossorigin="' + u + '"]'), qv.has(e) || (qv.add(e), l = { rel: l, crossOrigin: u, href: t }, a.querySelector(e) === null && (t = a.createElement("link"), Yl(t, "link", l), Rl(t), a.head.appendChild(t)));
    }
  }
  function hy(l) {
    Ct.D(l), Bv("dns-prefetch", l, null);
  }
  function ry(l, t) {
    Ct.C(l, t), Bv("preconnect", l, t);
  }
  function my(l, t, u) {
    Ct.L(l, t, u);
    var a = ma;
    if (a && l && t) {
      var e = 'link[rel="preload"][as="' + it(t) + '"]';
      t === "image" && u && u.imageSrcSet ? (e += '[imagesrcset="' + it(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (e += '[imagesizes="' + it(
        u.imageSizes
      ) + '"]')) : e += '[href="' + it(l) + '"]';
      var n = e;
      switch (t) {
        case "style":
          n = ga(l);
          break;
        case "script":
          n = Sa(l);
      }
      rt.has(n) || (l = N(
        {
          rel: "preload",
          href: t === "image" && u && u.imageSrcSet ? void 0 : l,
          as: t
        },
        u
      ), rt.set(n, l), a.querySelector(e) !== null || t === "style" && a.querySelector(ie(n)) || t === "script" && a.querySelector(se(n)) || (t = a.createElement("link"), Yl(t, "link", l), Rl(t), a.head.appendChild(t)));
    }
  }
  function gy(l, t) {
    Ct.m(l, t);
    var u = ma;
    if (u && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", e = 'link[rel="modulepreload"][as="' + it(a) + '"][href="' + it(l) + '"]', n = e;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Sa(l);
      }
      if (!rt.has(n) && (l = N({ rel: "modulepreload", href: l }, t), rt.set(n, l), u.querySelector(e) === null)) {
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
        a = u.createElement("link"), Yl(a, "link", l), Rl(a), u.head.appendChild(a);
      }
    }
  }
  function Sy(l, t, u) {
    Ct.S(l, t, u);
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
          ), (u = rt.get(n)) && Zc(l, u);
          var i = f = a.createElement("link");
          Rl(i), Yl(i, "link", l), i._p = new Promise(function(y, g) {
            i.onload = y, i.onerror = g;
          }), i.addEventListener("load", function() {
            c.loading |= 1;
          }), i.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, _n(f, t, a);
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
  function by(l, t) {
    Ct.X(l, t);
    var u = ma;
    if (u && l) {
      var a = Gu(u).hoistableScripts, e = Sa(l), n = a.get(e);
      n || (n = u.querySelector(se(e)), n || (l = N({ src: l, async: !0 }, t), (t = rt.get(e)) && Vc(l, t), n = u.createElement("script"), Rl(n), Yl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function Ty(l, t) {
    Ct.M(l, t);
    var u = ma;
    if (u && l) {
      var a = Gu(u).hoistableScripts, e = Sa(l), n = a.get(e);
      n || (n = u.querySelector(se(e)), n || (l = N({ src: l, async: !0, type: "module" }, t), (t = rt.get(e)) && Vc(l, t), n = u.createElement("script"), Rl(n), Yl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function pv(l, t, u, a) {
    var e = (e = x.current) ? zn(e) : null;
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
          )) && !n._p && (f.instance = n, f.state.loading = 5), rt.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, rt.set(l, u), n || Ey(
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
    return 'href="' + it(l) + '"';
  }
  function ie(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Yv(l) {
    return N({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function Ey(l, t, u, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), Yl(t, "link", u), Rl(t), l.head.appendChild(t));
  }
  function Sa(l) {
    return '[src="' + it(l) + '"]';
  }
  function se(l) {
    return "script[async]" + l;
  }
  function xv(l, t, u) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = l.querySelector(
            'style[data-href~="' + it(u.href) + '"]'
          );
          if (a)
            return t.instance = a, Rl(a), a;
          var e = N({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement(
            "style"
          ), Rl(a), Yl(a, "style", e), _n(a, u.precedence, l), t.instance = a;
        case "stylesheet":
          e = ga(u.href);
          var n = l.querySelector(
            ie(e)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, Rl(n), n;
          a = Yv(u), (e = rt.get(e)) && Zc(a, e), n = (l.ownerDocument || l).createElement("link"), Rl(n);
          var f = n;
          return f._p = new Promise(function(c, i) {
            f.onload = c, f.onerror = i;
          }), Yl(n, "link", a), t.state.loading |= 4, _n(n, u.precedence, l), t.instance = n;
        case "script":
          return n = Sa(u.src), (e = l.querySelector(
            se(n)
          )) ? (t.instance = e, Rl(e), e) : (a = u, (e = rt.get(n)) && (a = N({}, u), Vc(a, e)), l = l.ownerDocument || l, e = l.createElement("script"), Rl(e), Yl(e, "link", a), l.head.appendChild(e), t.instance = e);
        case "void":
          return null;
        default:
          throw Error(m(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, _n(a, u.precedence, l));
    return t.instance;
  }
  function _n(l, t, u) {
    for (var a = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), e = a.length ? a[a.length - 1] : null, n = e, f = 0; f < a.length; f++) {
      var c = a[f];
      if (c.dataset.precedence === t) n = c;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = u.nodeType === 9 ? u.head : u, t.insertBefore(l, t.firstChild));
  }
  function Zc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function Vc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var On = null;
  function Gv(l, t, u) {
    if (On === null) {
      var a = /* @__PURE__ */ new Map(), e = On = /* @__PURE__ */ new Map();
      e.set(u, a);
    } else
      e = On, a = e.get(u), a || (a = /* @__PURE__ */ new Map(), e.set(u, a));
    if (a.has(l)) return a;
    for (a.set(l, null), u = u.getElementsByTagName(l), e = 0; e < u.length; e++) {
      var n = u[e];
      if (!(n[Aa] || n[Cl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var c = a.get(f);
        c ? c.push(n) : a.set(f, [n]);
      }
    }
    return a;
  }
  function Xv(l, t, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function Ay(l, t, u) {
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
  function jv(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var ve = null;
  function zy() {
  }
  function _y(l, t, u) {
    if (ve === null) throw Error(m(475));
    var a = ve;
    if (t.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var e = ga(u.href), n = l.querySelector(
          ie(e)
        );
        if (n) {
          l = n._p, l !== null && typeof l == "object" && typeof l.then == "function" && (a.count++, a = Mn.bind(a), l.then(a, a)), t.state.loading |= 4, t.instance = n, Rl(n);
          return;
        }
        n = l.ownerDocument || l, u = Yv(u), (e = rt.get(e)) && Zc(u, e), n = n.createElement("link"), Rl(n);
        var f = n;
        f._p = new Promise(function(c, i) {
          f.onload = c, f.onerror = i;
        }), Yl(n, "link", u), t.instance = n;
      }
      a.stylesheets === null && (a.stylesheets = /* @__PURE__ */ new Map()), a.stylesheets.set(t, l), (l = t.state.preload) && (t.state.loading & 3) === 0 && (a.count++, t = Mn.bind(a), l.addEventListener("load", t), l.addEventListener("error", t));
    }
  }
  function Oy() {
    if (ve === null) throw Error(m(475));
    var l = ve;
    return l.stylesheets && l.count === 0 && Lc(l, l.stylesheets), 0 < l.count ? function(t) {
      var u = setTimeout(function() {
        if (l.stylesheets && Lc(l, l.stylesheets), l.unsuspend) {
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
      if (this.stylesheets) Lc(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Dn = null;
  function Lc(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Dn = /* @__PURE__ */ new Map(), t.forEach(My, l), Dn = null, Mn.call(l));
  }
  function My(l, t) {
    if (!(t.state.loading & 4)) {
      var u = Dn.get(l);
      if (u) var a = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Dn.set(l, u);
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
    $$typeof: Dl,
    Provider: null,
    Consumer: null,
    _currentValue: p,
    _currentValue2: p,
    _threadCount: 0
  };
  function Dy(l, t, u, a, e, n, f, c) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = jn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = jn(0), this.hiddenUpdates = jn(null), this.identifierPrefix = a, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Qv(l, t, u, a, e, n, f, c, i, y, g, T) {
    return l = new Dy(
      l,
      t,
      u,
      f,
      c,
      i,
      y,
      T
    ), t = 1, n === !0 && (t |= 24), n = tt(3, null, null, t), l.current = n, n.stateNode = l, t = Of(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: a,
      isDehydrated: u,
      cache: t
    }, Uf(n), l;
  }
  function Cv(l) {
    return l ? (l = Wu, l) : Wu;
  }
  function Zv(l, t, u, a, e, n) {
    e = Cv(e), a.context === null ? a.context = e : a.pendingContext = e, a = kt(t), a.payload = { element: u }, n = n === void 0 ? null : n, n !== null && (a.callback = n), u = Wt(l, a, t), u !== null && (ft(u, l, t), Ca(u, l, t));
  }
  function Vv(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < t ? u : t;
    }
  }
  function Kc(l, t) {
    Vv(l, t), (l = l.alternate) && Vv(l, t);
  }
  function Lv(l) {
    if (l.tag === 13) {
      var t = ku(l, 67108864);
      t !== null && ft(t, l, 67108864), Kc(l, 67108864);
    }
  }
  var Rn = !0;
  function Ry(l, t, u, a) {
    var e = S.T;
    S.T = null;
    var n = O.p;
    try {
      O.p = 2, Jc(l, t, u, a);
    } finally {
      O.p = n, S.T = e;
    }
  }
  function Uy(l, t, u, a) {
    var e = S.T;
    S.T = null;
    var n = O.p;
    try {
      O.p = 8, Jc(l, t, u, a);
    } finally {
      O.p = n, S.T = e;
    }
  }
  function Jc(l, t, u, a) {
    if (Rn) {
      var e = wc(a);
      if (e === null)
        Bc(
          l,
          t,
          a,
          Un,
          u
        ), Jv(l, a);
      else if (Hy(
        e,
        l,
        t,
        u,
        a
      ))
        a.stopPropagation();
      else if (Jv(l, a), t & 4 && -1 < Ny.indexOf(l)) {
        for (; e !== null; ) {
          var n = xu(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var f = ru(n.pendingLanes);
                  if (f !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; f; ) {
                      var i = 1 << 31 - Pl(f);
                      c.entanglements[1] |= i, f &= ~i;
                    }
                    Ot(n), (ul & 6) === 0 && (on = Tt() + 500, ee(0));
                  }
                }
                break;
              case 13:
                c = ku(n, 2), c !== null && ft(c, n, 2), hn(), Kc(n, 2);
            }
          if (n = wc(a), n === null && Bc(
            l,
            t,
            a,
            Un,
            u
          ), n === e) break;
          e = n;
        }
        e !== null && a.stopPropagation();
      } else
        Bc(
          l,
          t,
          a,
          null,
          u
        );
    }
  }
  function wc(l) {
    return l = Fn(l), kc(l);
  }
  var Un = null;
  function kc(l) {
    if (Un = null, l = Yu(l), l !== null) {
      var t = I(l);
      if (t === null) l = null;
      else {
        var u = t.tag;
        if (u === 13) {
          if (l = Z(t), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Un = l, null;
  }
  function Kv(l) {
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
        switch (hd()) {
          case ni:
            return 2;
          case fi:
            return 8;
          case Te:
          case rd:
            return 32;
          case ci:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Wc = !1, iu = null, su = null, vu = null, oe = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), du = [], Ny = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Jv(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        iu = null;
        break;
      case "dragenter":
      case "dragleave":
        su = null;
        break;
      case "mouseover":
      case "mouseout":
        vu = null;
        break;
      case "pointerover":
      case "pointerout":
        oe.delete(t.pointerId);
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
    }, t !== null && (t = xu(t), t !== null && Lv(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function Hy(l, t, u, a, e) {
    switch (t) {
      case "focusin":
        return iu = he(
          iu,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "dragenter":
        return su = he(
          su,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "mouseover":
        return vu = he(
          vu,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "pointerover":
        var n = e.pointerId;
        return oe.set(
          n,
          he(
            oe.get(n) || null,
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
  function wv(l) {
    var t = Yu(l.target);
    if (t !== null) {
      var u = I(t);
      if (u !== null) {
        if (t = u.tag, t === 13) {
          if (t = Z(u), t !== null) {
            l.blockedOn = t, zd(l.priority, function() {
              if (u.tag === 13) {
                var a = nt();
                a = Qn(a);
                var e = ku(u, a);
                e !== null && ft(e, u, a), Kc(u, a);
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
  function Nn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var u = wc(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var a = new u.constructor(
          u.type,
          u
        );
        $n = a, u.target.dispatchEvent(a), $n = null;
      } else
        return t = xu(u), t !== null && Lv(t), l.blockedOn = u, !1;
      t.shift();
    }
    return !0;
  }
  function kv(l, t, u) {
    Nn(l) && u.delete(t);
  }
  function qy() {
    Wc = !1, iu !== null && Nn(iu) && (iu = null), su !== null && Nn(su) && (su = null), vu !== null && Nn(vu) && (vu = null), oe.forEach(kv), ye.forEach(kv);
  }
  function Hn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, Wc || (Wc = !0, z.unstable_scheduleCallback(
      z.unstable_NormalPriority,
      qy
    )));
  }
  var qn = null;
  function Wv(l) {
    qn !== l && (qn = l, z.unstable_scheduleCallback(
      z.unstable_NormalPriority,
      function() {
        qn === l && (qn = null);
        for (var t = 0; t < l.length; t += 3) {
          var u = l[t], a = l[t + 1], e = l[t + 2];
          if (typeof a != "function") {
            if (kc(a || u) === null)
              continue;
            break;
          }
          var n = xu(u);
          n !== null && (l.splice(t, 3), t -= 3, kf(
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
      return Hn(i, l);
    }
    iu !== null && Hn(iu, l), su !== null && Hn(su, l), vu !== null && Hn(vu, l), oe.forEach(t), ye.forEach(t);
    for (var u = 0; u < du.length; u++) {
      var a = du[u];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < du.length && (u = du[0], u.blockedOn === null); )
      wv(u), u.blockedOn === null && du.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (a = 0; a < u.length; a += 3) {
        var e = u[a], n = u[a + 1], f = e[Kl] || null;
        if (typeof n == "function")
          f || Wv(u);
        else if (f) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, f = n[Kl] || null)
              c = f.formAction;
            else if (kc(e) !== null) continue;
          } else c = f.action;
          typeof c == "function" ? u[a + 1] = c : (u.splice(a, 3), a -= 3), Wv(u);
        }
      }
  }
  function $c(l) {
    this._internalRoot = l;
  }
  Bn.prototype.render = $c.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(m(409));
    var u = t.current, a = nt();
    Zv(u, a, l, t, null, null);
  }, Bn.prototype.unmount = $c.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      Zv(l.current, 2, null, l, null, null), hn(), t[pu] = null;
    }
  };
  function Bn(l) {
    this._internalRoot = l;
  }
  Bn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = oi();
      l = { blockedOn: null, target: l, priority: t };
      for (var u = 0; u < du.length && t !== 0 && t < du[u].priority; u++) ;
      du.splice(u, 0, l), u === 0 && wv(l);
    }
  };
  var $v = K.version;
  if ($v !== "19.1.1")
    throw Error(
      m(
        527,
        $v,
        "19.1.1"
      )
    );
  O.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(m(188)) : (l = Object.keys(l).join(","), Error(m(268, l)));
    return l = R(t), l = l !== null ? E(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var By = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: S,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var pn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!pn.isDisabled && pn.supportsFiber)
      try {
        ba = pn.inject(
          By
        ), Il = pn;
      } catch {
      }
  }
  return ge.createRoot = function(l, t) {
    if (!J(l)) throw Error(m(299));
    var u = !1, a = "", e = o0, n = y0, f = h0, c = null;
    return t != null && (t.unstable_strictMode === !0 && (u = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (c = t.unstable_transitionCallbacks)), t = Qv(
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
    ), l[pu] = t.current, qc(l), new $c(t);
  }, ge.hydrateRoot = function(l, t, u) {
    if (!J(l)) throw Error(m(299));
    var a = !1, e = "", n = o0, f = y0, c = h0, i = null, y = null;
    return u != null && (u.unstable_strictMode === !0 && (a = !0), u.identifierPrefix !== void 0 && (e = u.identifierPrefix), u.onUncaughtError !== void 0 && (n = u.onUncaughtError), u.onCaughtError !== void 0 && (f = u.onCaughtError), u.onRecoverableError !== void 0 && (c = u.onRecoverableError), u.unstable_transitionCallbacks !== void 0 && (i = u.unstable_transitionCallbacks), u.formState !== void 0 && (y = u.formState)), t = Qv(
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
    ), t.context = Cv(null), u = t.current, a = nt(), a = Qn(a), e = kt(a), e.callback = null, Wt(u, e, a), u = a, t.current.lanes = u, Ea(t, u), Ot(t), l[pu] = t.current, qc(l), new Bn(t);
  }, ge.version = "19.1.1", ge;
}
var fd;
function Vy() {
  if (fd) return Pc.exports;
  fd = 1;
  function z() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z);
      } catch (K) {
        console.error(K);
      }
  }
  return z(), Pc.exports = Zy(), Pc.exports;
}
var Ly = Vy();
const ai = (z) => window.parent.postMessage(z, "*"), cd = () => ai({ action: "closePopup" }), Ky = (z, K) => z && K ? K.toLowerCase().includes(z.toLowerCase()) : !1;
function id(z) {
  const K = El.useRef(z);
  return El.useEffect(() => {
    K.current = z;
  }, [z]), K;
}
let Se = ["title", "url", "parentTitle"];
const Jy = () => {
  const [z, K] = El.useState([]), [G, m] = El.useState([]), [J, I] = El.useState([]), Z = id(J), P = El.useRef(null), [R, E] = El.useState(""), [N, ll] = El.useState(""), el = id(N), ql = El.useCallback(async () => {
    const Q = await chrome.storage.local.get("searchBookmarkSetting");
    Q.searchBookmarkSetting && (Se = Q.searchBookmarkSetting.searchRule);
  }, []);
  El.useEffect(() => {
    const Q = (nl) => {
      nl.action === "updateBookMarks" && ql().finally(() => {
        const { bookmarks: ol = [], historyBookmarks: rl = [] } = nl;
        K(ol), m(rl), P.current?.focus();
      });
    };
    return chrome.runtime?.onMessage?.addListener(Q), ai({ action: "initSuccess" }), () => {
      chrome.runtime?.onMessage?.removeListener(Q);
    };
  }, [P]), El.useEffect(() => {
    if (!R)
      I(G), ll(G[0]?.id || "");
    else {
      const Q = Array.from(
        { length: Se.length },
        () => []
      );
      for (let ol = 0; ol < Se.length; ol++)
        Q[ol] = z.filter(
          (rl) => Ky(R, Reflect.get(rl, Se[ol]))
        ).sort((rl, Dl) => {
          const xl = Se[ol], w = Reflect.get(rl, xl) || "", Gl = Reflect.get(Dl, xl) || "", Xl = R.toLowerCase();
          return xl === "title" ? w.length - Gl.length : xl === "url" ? Xl.indexOf(w) - Xl.indexOf(Gl) : 1;
        });
      const nl = Q.reduce(
        (ol, rl) => [.../* @__PURE__ */ new Set([...ol, ...rl])],
        []
      );
      I(nl), ll(nl[0]?.id || "");
    }
  }, [R, z, G]);
  const _l = El.useCallback(
    (Q) => {
      ll(Q.id || ""), Q.url && (ai({
        action: "goToBookmark",
        url: Q.url,
        faviconURL: Q.faviconURL
      }), cd(), E(""));
    },
    []
  );
  return El.useEffect(() => {
    const Q = (nl) => {
      if (nl.key === "Escape") {
        cd(), E("");
        return;
      }
      const ol = Z.current.findIndex(
        (rl) => rl.id === el.current
      );
      if (ol > -1) {
        if (nl.key === "ArrowUp") {
          const rl = ol === 0 ? Z.current.length - 1 : ol - 1;
          ll(Z.current[rl].id), nl.preventDefault();
        }
        if (nl.key === "ArrowDown") {
          const rl = ol === Z.current.length - 1 ? 0 : ol + 1;
          ll(Z.current[rl].id), nl.preventDefault();
        }
        nl.key === "Enter" && (_l(Z.current[ol]), nl.preventDefault());
      }
    };
    return window.addEventListener("keydown", Q), () => {
      window.removeEventListener("keydown", Q);
    };
  }, [_l]), /* @__PURE__ */ k.jsx("div", { className: "bookmarks-search__container", children: /* @__PURE__ */ k.jsxs("div", { className: "bookmarks-search__content", children: [
    /* @__PURE__ */ k.jsx("div", { className: "bookmarks-search__search", children: /* @__PURE__ */ k.jsx(
      "input",
      {
        placeholder: "请输入要搜索的关键字",
        type: "text",
        autoComplete: "off",
        className: "bookmarks-search__search-input",
        autoFocus: !0,
        ref: P,
        value: R,
        onChange: (Q) => E(Q.target.value)
      }
    ) }),
    /* @__PURE__ */ k.jsx("div", { className: "bookmarks-search__list", children: J.map((Q) => /* @__PURE__ */ k.jsxs(
      "div",
      {
        onClick: () => _l(Q),
        className: `bookmarks-search__list-item ${N === Q.id ? "bookmarks-search__list-item-active" : ""}`,
        children: [
          Q.faviconURL && /* @__PURE__ */ k.jsx(
            "img",
            {
              className: "bookmarks-search__list-item-favicon",
              src: Q.faviconURL,
              alt: Q.title
            }
          ),
          Q.title
        ]
      },
      Q.id
    )) })
  ] }) });
}, wy = ({ name: z, value: K, onChange: G, options: m }) => {
  const [J, I] = El.useState(K), Z = (P) => {
    const R = J.includes(P) ? J.filter((E) => E !== P) : [...J, P];
    I(R), G?.(R);
  };
  return /* @__PURE__ */ k.jsx("div", { className: "checkbox__group", children: m?.map((P) => /* @__PURE__ */ k.jsx(k.Fragment, { children: /* @__PURE__ */ k.jsxs("label", { className: "checkbox", children: [
    /* @__PURE__ */ k.jsx("input", { type: "checkbox", name: z, value: P.value, checked: J.includes(P.value), onChange: () => Z(P.value) }),
    /* @__PURE__ */ k.jsx("span", { children: P.name })
  ] }) })) });
}, sd = ({ label: z, children: K }) => /* @__PURE__ */ k.jsxs("div", { className: "form-item", children: [
  /* @__PURE__ */ k.jsx("div", { className: "form-item__label", children: z }),
  /* @__PURE__ */ k.jsx("div", { className: "form-item__content", children: K })
] }), dd = El.createContext({
  value: "0",
  name: "",
  onChange: (z) => {
  }
}), ky = ({ children: z, name: K, value: G, onChange: m }) => {
  const [J, I] = El.useState(G), Z = (P) => {
    I(P), m?.(P);
  };
  return /* @__PURE__ */ k.jsx(dd.Provider, { value: { value: J, name: K, onChange: Z }, children: /* @__PURE__ */ k.jsx("div", { className: "radio-group", children: z }) });
}, vd = ({ value: z, children: K }) => {
  const { value: G, name: m, onChange: J } = El.useContext(dd);
  return /* @__PURE__ */ k.jsxs("label", { className: "radio", children: [
    /* @__PURE__ */ k.jsx("input", { type: "radio", name: m, value: z, checked: G === z, onChange: (I) => J(I.target.value) }),
    /* @__PURE__ */ k.jsx("span", { children: K })
  ] });
}, Wy = () => {
  const [z, K] = El.useState(!0), [G, m] = El.useState({
    openNewTab: "1",
    searchRule: ["url", "title", "parentTitle"]
  }), J = () => {
    chrome.storage.local.set({ searchBookmarkSetting: G }), window.close();
  }, I = (Z) => {
    m({ ...G, ...Z });
  };
  return El.useEffect(() => {
    chrome.storage.local.get("searchBookmarkSetting", (Z) => {
      Z.searchBookmarkSetting && m(Z.searchBookmarkSetting), K(!1);
    });
  }, []), !z && /* @__PURE__ */ k.jsxs("div", { className: "setting__container", children: [
    /* @__PURE__ */ k.jsx("div", { className: "setting__title", children: "设置" }),
    /* @__PURE__ */ k.jsxs("div", { className: "setting__content", children: [
      /* @__PURE__ */ k.jsx(sd, { label: "是否新窗口打开", children: /* @__PURE__ */ k.jsxs(
        ky,
        {
          name: "openNewTab",
          value: G.openNewTab,
          onChange: (Z) => I({ openNewTab: Z }),
          children: [
            /* @__PURE__ */ k.jsx(vd, { value: "0", children: "否（查找已打开页面）" }),
            /* @__PURE__ */ k.jsx(vd, { value: "1", children: "是" })
          ]
        }
      ) }),
      /* @__PURE__ */ k.jsx(sd, { label: "查找规则", children: /* @__PURE__ */ k.jsx(
        wy,
        {
          name: "searchRule",
          value: G.searchRule,
          onChange: (Z) => I({ searchRule: Z }),
          options: [
            { name: "URL", value: "url" },
            { name: "标题", value: "title" },
            { name: "父节点标题", value: "parentTitle" }
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ k.jsx("div", { className: "setting__footer", children: /* @__PURE__ */ k.jsx("div", { className: "submit-button", onClick: J, children: "保存设置" }) })
  ] });
}, $y = window.self !== window.top;
Ly.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ k.jsx(El.StrictMode, { children: $y ? /* @__PURE__ */ k.jsx(Jy, {}) : /* @__PURE__ */ k.jsx(Wy, {}) })
);
