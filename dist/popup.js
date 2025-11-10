var If = { exports: {} }, me = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ad;
function Qv() {
  if (ad) return me;
  ad = 1;
  var T = Symbol.for("react.transitional.element"), O = Symbol.for("react.fragment");
  function D(r, z, p) {
    var V = null;
    if (p !== void 0 && (V = "" + p), z.key !== void 0 && (V = "" + z.key), "key" in z) {
      p = {};
      for (var $ in z)
        $ !== "key" && (p[$] = z[$]);
    } else p = z;
    return z = p.ref, {
      $$typeof: T,
      type: r,
      key: V,
      ref: z !== void 0 ? z : null,
      props: p
    };
  }
  return me.Fragment = O, me.jsx = D, me.jsxs = D, me;
}
var ud;
function Zv() {
  return ud || (ud = 1, If.exports = Qv()), If.exports;
}
var q = Zv(), Pf = { exports: {} }, K = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ed;
function Vv() {
  if (ed) return K;
  ed = 1;
  var T = Symbol.for("react.transitional.element"), O = Symbol.for("react.portal"), D = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), z = Symbol.for("react.profiler"), p = Symbol.for("react.consumer"), V = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), E = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), F = Symbol.iterator;
  function ll(s) {
    return s === null || typeof s != "object" ? null : (s = F && s[F] || s["@@iterator"], typeof s == "function" ? s : null);
  }
  var Nl = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, pl = Object.assign, Jl = {};
  function Y(s, A, N) {
    this.props = s, this.context = A, this.refs = Jl, this.updater = N || Nl;
  }
  Y.prototype.isReactComponent = {}, Y.prototype.setState = function(s, A) {
    if (typeof s != "object" && typeof s != "function" && s != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, s, A, "setState");
  }, Y.prototype.forceUpdate = function(s) {
    this.updater.enqueueForceUpdate(this, s, "forceUpdate");
  };
  function ml() {
  }
  ml.prototype = Y.prototype;
  function dl(s, A, N) {
    this.props = s, this.context = A, this.refs = Jl, this.updater = N || Nl;
  }
  var cl = dl.prototype = new ml();
  cl.constructor = dl, pl(cl, Y.prototype), cl.isPureReactComponent = !0;
  var gl = Array.isArray, Q = { H: null, A: null, T: null, S: null, V: null }, El = Object.prototype.hasOwnProperty;
  function vl(s, A, N, M, j, tl) {
    return N = tl.ref, {
      $$typeof: T,
      type: s,
      key: A,
      ref: N !== void 0 ? N : null,
      props: tl
    };
  }
  function hl(s, A) {
    return vl(
      s.type,
      A,
      void 0,
      void 0,
      void 0,
      s.props
    );
  }
  function Hl(s) {
    return typeof s == "object" && s !== null && s.$$typeof === T;
  }
  function wl(s) {
    var A = { "=": "=0", ":": "=2" };
    return "$" + s.replace(/[=:]/g, function(N) {
      return A[N];
    });
  }
  var Ml = /\/+/g;
  function zl(s, A) {
    return typeof s == "object" && s !== null && s.key != null ? wl("" + s.key) : A.toString(36);
  }
  function Rt() {
  }
  function ya(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (typeof s.status == "string" ? s.then(Rt, Rt) : (s.status = "pending", s.then(
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
  function Zl(s, A, N, M, j) {
    var tl = typeof s;
    (tl === "undefined" || tl === "boolean") && (s = null);
    var L = !1;
    if (s === null) L = !0;
    else
      switch (tl) {
        case "bigint":
        case "string":
        case "number":
          L = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case T:
            case O:
              L = !0;
              break;
            case x:
              return L = s._init, Zl(
                L(s._payload),
                A,
                N,
                M,
                j
              );
          }
      }
    if (L)
      return j = j(s), L = M === "" ? "." + zl(s, 0) : M, gl(j) ? (N = "", L != null && (N = L.replace(Ml, "$&/") + "/"), Zl(j, A, N, "", function(Lt) {
        return Lt;
      })) : j != null && (Hl(j) && (j = hl(
        j,
        N + (j.key == null || s && s.key === j.key ? "" : ("" + j.key).replace(
          Ml,
          "$&/"
        ) + "/") + L
      )), A.push(j)), 1;
    L = 0;
    var lt = M === "" ? "." : M + ":";
    if (gl(s))
      for (var Sl = 0; Sl < s.length; Sl++)
        M = s[Sl], tl = lt + zl(M, Sl), L += Zl(
          M,
          A,
          N,
          tl,
          j
        );
    else if (Sl = ll(s), typeof Sl == "function")
      for (s = Sl.call(s), Sl = 0; !(M = s.next()).done; )
        M = M.value, tl = lt + zl(M, Sl++), L += Zl(
          M,
          A,
          N,
          tl,
          j
        );
    else if (tl === "object") {
      if (typeof s.then == "function")
        return Zl(
          ya(s),
          A,
          N,
          M,
          j
        );
      throw A = String(s), Error(
        "Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return L;
  }
  function S(s, A, N) {
    if (s == null) return s;
    var M = [], j = 0;
    return Zl(s, M, "", "", function(tl) {
      return A.call(N, tl, j++);
    }), M;
  }
  function U(s) {
    if (s._status === -1) {
      var A = s._result;
      A = A(), A.then(
        function(N) {
          (s._status === 0 || s._status === -1) && (s._status = 1, s._result = N);
        },
        function(N) {
          (s._status === 0 || s._status === -1) && (s._status = 2, s._result = N);
        }
      ), s._status === -1 && (s._status = 0, s._result = A);
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var X = typeof reportError == "function" ? reportError : function(s) {
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
  function ol() {
  }
  return K.Children = {
    map: S,
    forEach: function(s, A, N) {
      S(
        s,
        function() {
          A.apply(this, arguments);
        },
        N
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
      if (!Hl(s))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return s;
    }
  }, K.Component = Y, K.Fragment = D, K.Profiler = z, K.PureComponent = dl, K.StrictMode = r, K.Suspense = R, K.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q, K.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(s) {
      return Q.H.useMemoCache(s);
    }
  }, K.cache = function(s) {
    return function() {
      return s.apply(null, arguments);
    };
  }, K.cloneElement = function(s, A, N) {
    if (s == null)
      throw Error(
        "The argument must be a React element, but you passed " + s + "."
      );
    var M = pl({}, s.props), j = s.key, tl = void 0;
    if (A != null)
      for (L in A.ref !== void 0 && (tl = void 0), A.key !== void 0 && (j = "" + A.key), A)
        !El.call(A, L) || L === "key" || L === "__self" || L === "__source" || L === "ref" && A.ref === void 0 || (M[L] = A[L]);
    var L = arguments.length - 2;
    if (L === 1) M.children = N;
    else if (1 < L) {
      for (var lt = Array(L), Sl = 0; Sl < L; Sl++)
        lt[Sl] = arguments[Sl + 2];
      M.children = lt;
    }
    return vl(s.type, j, void 0, void 0, tl, M);
  }, K.createContext = function(s) {
    return s = {
      $$typeof: V,
      _currentValue: s,
      _currentValue2: s,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, s.Provider = s, s.Consumer = {
      $$typeof: p,
      _context: s
    }, s;
  }, K.createElement = function(s, A, N) {
    var M, j = {}, tl = null;
    if (A != null)
      for (M in A.key !== void 0 && (tl = "" + A.key), A)
        El.call(A, M) && M !== "key" && M !== "__self" && M !== "__source" && (j[M] = A[M]);
    var L = arguments.length - 2;
    if (L === 1) j.children = N;
    else if (1 < L) {
      for (var lt = Array(L), Sl = 0; Sl < L; Sl++)
        lt[Sl] = arguments[Sl + 2];
      j.children = lt;
    }
    if (s && s.defaultProps)
      for (M in L = s.defaultProps, L)
        j[M] === void 0 && (j[M] = L[M]);
    return vl(s, tl, void 0, void 0, null, j);
  }, K.createRef = function() {
    return { current: null };
  }, K.forwardRef = function(s) {
    return { $$typeof: $, render: s };
  }, K.isValidElement = Hl, K.lazy = function(s) {
    return {
      $$typeof: x,
      _payload: { _status: -1, _result: s },
      _init: U
    };
  }, K.memo = function(s, A) {
    return {
      $$typeof: E,
      type: s,
      compare: A === void 0 ? null : A
    };
  }, K.startTransition = function(s) {
    var A = Q.T, N = {};
    Q.T = N;
    try {
      var M = s(), j = Q.S;
      j !== null && j(N, M), typeof M == "object" && M !== null && typeof M.then == "function" && M.then(ol, X);
    } catch (tl) {
      X(tl);
    } finally {
      Q.T = A;
    }
  }, K.unstable_useCacheRefresh = function() {
    return Q.H.useCacheRefresh();
  }, K.use = function(s) {
    return Q.H.use(s);
  }, K.useActionState = function(s, A, N) {
    return Q.H.useActionState(s, A, N);
  }, K.useCallback = function(s, A) {
    return Q.H.useCallback(s, A);
  }, K.useContext = function(s) {
    return Q.H.useContext(s);
  }, K.useDebugValue = function() {
  }, K.useDeferredValue = function(s, A) {
    return Q.H.useDeferredValue(s, A);
  }, K.useEffect = function(s, A, N) {
    var M = Q.H;
    if (typeof N == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return M.useEffect(s, A);
  }, K.useId = function() {
    return Q.H.useId();
  }, K.useImperativeHandle = function(s, A, N) {
    return Q.H.useImperativeHandle(s, A, N);
  }, K.useInsertionEffect = function(s, A) {
    return Q.H.useInsertionEffect(s, A);
  }, K.useLayoutEffect = function(s, A) {
    return Q.H.useLayoutEffect(s, A);
  }, K.useMemo = function(s, A) {
    return Q.H.useMemo(s, A);
  }, K.useOptimistic = function(s, A) {
    return Q.H.useOptimistic(s, A);
  }, K.useReducer = function(s, A, N) {
    return Q.H.useReducer(s, A, N);
  }, K.useRef = function(s) {
    return Q.H.useRef(s);
  }, K.useState = function(s) {
    return Q.H.useState(s);
  }, K.useSyncExternalStore = function(s, A, N) {
    return Q.H.useSyncExternalStore(
      s,
      A,
      N
    );
  }, K.useTransition = function() {
    return Q.H.useTransition();
  }, K.version = "19.1.1", K;
}
var nd;
function ii() {
  return nd || (nd = 1, Pf.exports = Vv()), Pf.exports;
}
var I = ii(), li = { exports: {} }, ge = {}, ti = { exports: {} }, ai = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cd;
function Lv() {
  return cd || (cd = 1, (function(T) {
    function O(S, U) {
      var X = S.length;
      S.push(U);
      l: for (; 0 < X; ) {
        var ol = X - 1 >>> 1, s = S[ol];
        if (0 < z(s, U))
          S[ol] = U, S[X] = s, X = ol;
        else break l;
      }
    }
    function D(S) {
      return S.length === 0 ? null : S[0];
    }
    function r(S) {
      if (S.length === 0) return null;
      var U = S[0], X = S.pop();
      if (X !== U) {
        S[0] = X;
        l: for (var ol = 0, s = S.length, A = s >>> 1; ol < A; ) {
          var N = 2 * (ol + 1) - 1, M = S[N], j = N + 1, tl = S[j];
          if (0 > z(M, X))
            j < s && 0 > z(tl, M) ? (S[ol] = tl, S[j] = X, ol = j) : (S[ol] = M, S[N] = X, ol = N);
          else if (j < s && 0 > z(tl, X))
            S[ol] = tl, S[j] = X, ol = j;
          else break l;
        }
      }
      return U;
    }
    function z(S, U) {
      var X = S.sortIndex - U.sortIndex;
      return X !== 0 ? X : S.id - U.id;
    }
    if (T.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var p = performance;
      T.unstable_now = function() {
        return p.now();
      };
    } else {
      var V = Date, $ = V.now();
      T.unstable_now = function() {
        return V.now() - $;
      };
    }
    var R = [], E = [], x = 1, F = null, ll = 3, Nl = !1, pl = !1, Jl = !1, Y = !1, ml = typeof setTimeout == "function" ? setTimeout : null, dl = typeof clearTimeout == "function" ? clearTimeout : null, cl = typeof setImmediate < "u" ? setImmediate : null;
    function gl(S) {
      for (var U = D(E); U !== null; ) {
        if (U.callback === null) r(E);
        else if (U.startTime <= S)
          r(E), U.sortIndex = U.expirationTime, O(R, U);
        else break;
        U = D(E);
      }
    }
    function Q(S) {
      if (Jl = !1, gl(S), !pl)
        if (D(R) !== null)
          pl = !0, El || (El = !0, zl());
        else {
          var U = D(E);
          U !== null && Zl(Q, U.startTime - S);
        }
    }
    var El = !1, vl = -1, hl = 5, Hl = -1;
    function wl() {
      return Y ? !0 : !(T.unstable_now() - Hl < hl);
    }
    function Ml() {
      if (Y = !1, El) {
        var S = T.unstable_now();
        Hl = S;
        var U = !0;
        try {
          l: {
            pl = !1, Jl && (Jl = !1, dl(vl), vl = -1), Nl = !0;
            var X = ll;
            try {
              t: {
                for (gl(S), F = D(R); F !== null && !(F.expirationTime > S && wl()); ) {
                  var ol = F.callback;
                  if (typeof ol == "function") {
                    F.callback = null, ll = F.priorityLevel;
                    var s = ol(
                      F.expirationTime <= S
                    );
                    if (S = T.unstable_now(), typeof s == "function") {
                      F.callback = s, gl(S), U = !0;
                      break t;
                    }
                    F === D(R) && r(R), gl(S);
                  } else r(R);
                  F = D(R);
                }
                if (F !== null) U = !0;
                else {
                  var A = D(E);
                  A !== null && Zl(
                    Q,
                    A.startTime - S
                  ), U = !1;
                }
              }
              break l;
            } finally {
              F = null, ll = X, Nl = !1;
            }
            U = void 0;
          }
        } finally {
          U ? zl() : El = !1;
        }
      }
    }
    var zl;
    if (typeof cl == "function")
      zl = function() {
        cl(Ml);
      };
    else if (typeof MessageChannel < "u") {
      var Rt = new MessageChannel(), ya = Rt.port2;
      Rt.port1.onmessage = Ml, zl = function() {
        ya.postMessage(null);
      };
    } else
      zl = function() {
        ml(Ml, 0);
      };
    function Zl(S, U) {
      vl = ml(function() {
        S(T.unstable_now());
      }, U);
    }
    T.unstable_IdlePriority = 5, T.unstable_ImmediatePriority = 1, T.unstable_LowPriority = 4, T.unstable_NormalPriority = 3, T.unstable_Profiling = null, T.unstable_UserBlockingPriority = 2, T.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, T.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : hl = 0 < S ? Math.floor(1e3 / S) : 5;
    }, T.unstable_getCurrentPriorityLevel = function() {
      return ll;
    }, T.unstable_next = function(S) {
      switch (ll) {
        case 1:
        case 2:
        case 3:
          var U = 3;
          break;
        default:
          U = ll;
      }
      var X = ll;
      ll = U;
      try {
        return S();
      } finally {
        ll = X;
      }
    }, T.unstable_requestPaint = function() {
      Y = !0;
    }, T.unstable_runWithPriority = function(S, U) {
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
      var X = ll;
      ll = S;
      try {
        return U();
      } finally {
        ll = X;
      }
    }, T.unstable_scheduleCallback = function(S, U, X) {
      var ol = T.unstable_now();
      switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? ol + X : ol) : X = ol, S) {
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
      return s = X + s, S = {
        id: x++,
        callback: U,
        priorityLevel: S,
        startTime: X,
        expirationTime: s,
        sortIndex: -1
      }, X > ol ? (S.sortIndex = X, O(E, S), D(R) === null && S === D(E) && (Jl ? (dl(vl), vl = -1) : Jl = !0, Zl(Q, X - ol))) : (S.sortIndex = s, O(R, S), pl || Nl || (pl = !0, El || (El = !0, zl()))), S;
    }, T.unstable_shouldYield = wl, T.unstable_wrapCallback = function(S) {
      var U = ll;
      return function() {
        var X = ll;
        ll = U;
        try {
          return S.apply(this, arguments);
        } finally {
          ll = X;
        }
      };
    };
  })(ai)), ai;
}
var fd;
function Kv() {
  return fd || (fd = 1, ti.exports = Lv()), ti.exports;
}
var ui = { exports: {} }, Kl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var id;
function Jv() {
  if (id) return Kl;
  id = 1;
  var T = ii();
  function O(R) {
    var E = "https://react.dev/errors/" + R;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var x = 2; x < arguments.length; x++)
        E += "&args[]=" + encodeURIComponent(arguments[x]);
    }
    return "Minified React error #" + R + "; visit " + E + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function D() {
  }
  var r = {
    d: {
      f: D,
      r: function() {
        throw Error(O(522));
      },
      D,
      C: D,
      L: D,
      m: D,
      X: D,
      S: D,
      M: D
    },
    p: 0,
    findDOMNode: null
  }, z = Symbol.for("react.portal");
  function p(R, E, x) {
    var F = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: z,
      key: F == null ? null : "" + F,
      children: R,
      containerInfo: E,
      implementation: x
    };
  }
  var V = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function $(R, E) {
    if (R === "font") return "";
    if (typeof E == "string")
      return E === "use-credentials" ? E : "";
  }
  return Kl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, Kl.createPortal = function(R, E) {
    var x = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!E || E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11)
      throw Error(O(299));
    return p(R, E, null, x);
  }, Kl.flushSync = function(R) {
    var E = V.T, x = r.p;
    try {
      if (V.T = null, r.p = 2, R) return R();
    } finally {
      V.T = E, r.p = x, r.d.f();
    }
  }, Kl.preconnect = function(R, E) {
    typeof R == "string" && (E ? (E = E.crossOrigin, E = typeof E == "string" ? E === "use-credentials" ? E : "" : void 0) : E = null, r.d.C(R, E));
  }, Kl.prefetchDNS = function(R) {
    typeof R == "string" && r.d.D(R);
  }, Kl.preinit = function(R, E) {
    if (typeof R == "string" && E && typeof E.as == "string") {
      var x = E.as, F = $(x, E.crossOrigin), ll = typeof E.integrity == "string" ? E.integrity : void 0, Nl = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
      x === "style" ? r.d.S(
        R,
        typeof E.precedence == "string" ? E.precedence : void 0,
        {
          crossOrigin: F,
          integrity: ll,
          fetchPriority: Nl
        }
      ) : x === "script" && r.d.X(R, {
        crossOrigin: F,
        integrity: ll,
        fetchPriority: Nl,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0
      });
    }
  }, Kl.preinitModule = function(R, E) {
    if (typeof R == "string")
      if (typeof E == "object" && E !== null) {
        if (E.as == null || E.as === "script") {
          var x = $(
            E.as,
            E.crossOrigin
          );
          r.d.M(R, {
            crossOrigin: x,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
            nonce: typeof E.nonce == "string" ? E.nonce : void 0
          });
        }
      } else E == null && r.d.M(R);
  }, Kl.preload = function(R, E) {
    if (typeof R == "string" && typeof E == "object" && E !== null && typeof E.as == "string") {
      var x = E.as, F = $(x, E.crossOrigin);
      r.d.L(R, x, {
        crossOrigin: F,
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
  }, Kl.preloadModule = function(R, E) {
    if (typeof R == "string")
      if (E) {
        var x = $(E.as, E.crossOrigin);
        r.d.m(R, {
          as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
          crossOrigin: x,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0
        });
      } else r.d.m(R);
  }, Kl.requestFormReset = function(R) {
    r.d.r(R);
  }, Kl.unstable_batchedUpdates = function(R, E) {
    return R(E);
  }, Kl.useFormState = function(R, E, x) {
    return V.H.useFormState(R, E, x);
  }, Kl.useFormStatus = function() {
    return V.H.useHostTransitionStatus();
  }, Kl.version = "19.1.1", Kl;
}
var sd;
function wv() {
  if (sd) return ui.exports;
  sd = 1;
  function T() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T);
      } catch (O) {
        console.error(O);
      }
  }
  return T(), ui.exports = Jv(), ui.exports;
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
var od;
function kv() {
  if (od) return ge;
  od = 1;
  var T = Kv(), O = ii(), D = wv();
  function r(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function z(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function p(l) {
    var t = l, a = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do
        t = l, (t.flags & 4098) !== 0 && (a = t.return), l = t.return;
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function V(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function $(l) {
    if (p(l) !== l)
      throw Error(r(188));
  }
  function R(l) {
    var t = l.alternate;
    if (!t) {
      if (t = p(l), t === null) throw Error(r(188));
      return t !== l ? null : l;
    }
    for (var a = l, u = t; ; ) {
      var e = a.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (u = e.return, u !== null) {
          a = u;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === a) return $(e), l;
          if (n === u) return $(e), t;
          n = n.sibling;
        }
        throw Error(r(188));
      }
      if (a.return !== u.return) a = e, u = n;
      else {
        for (var c = !1, f = e.child; f; ) {
          if (f === a) {
            c = !0, a = e, u = n;
            break;
          }
          if (f === u) {
            c = !0, u = e, a = n;
            break;
          }
          f = f.sibling;
        }
        if (!c) {
          for (f = n.child; f; ) {
            if (f === a) {
              c = !0, a = n, u = e;
              break;
            }
            if (f === u) {
              c = !0, u = n, a = e;
              break;
            }
            f = f.sibling;
          }
          if (!c) throw Error(r(189));
        }
      }
      if (a.alternate !== u) throw Error(r(190));
    }
    if (a.tag !== 3) throw Error(r(188));
    return a.stateNode.current === a ? l : t;
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
  var x = Object.assign, F = Symbol.for("react.element"), ll = Symbol.for("react.transitional.element"), Nl = Symbol.for("react.portal"), pl = Symbol.for("react.fragment"), Jl = Symbol.for("react.strict_mode"), Y = Symbol.for("react.profiler"), ml = Symbol.for("react.provider"), dl = Symbol.for("react.consumer"), cl = Symbol.for("react.context"), gl = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), El = Symbol.for("react.suspense_list"), vl = Symbol.for("react.memo"), hl = Symbol.for("react.lazy"), Hl = Symbol.for("react.activity"), wl = Symbol.for("react.memo_cache_sentinel"), Ml = Symbol.iterator;
  function zl(l) {
    return l === null || typeof l != "object" ? null : (l = Ml && l[Ml] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Rt = Symbol.for("react.client.reference");
  function ya(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Rt ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case pl:
        return "Fragment";
      case Y:
        return "Profiler";
      case Jl:
        return "StrictMode";
      case Q:
        return "Suspense";
      case El:
        return "SuspenseList";
      case Hl:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Nl:
          return "Portal";
        case cl:
          return (l.displayName || "Context") + ".Provider";
        case dl:
          return (l._context.displayName || "Context") + ".Consumer";
        case gl:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case vl:
          return t = l.displayName || null, t !== null ? t : ya(l.type) || "Memo";
        case hl:
          t = l._payload, l = l._init;
          try {
            return ya(l(t));
          } catch {
          }
      }
    return null;
  }
  var Zl = Array.isArray, S = O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = D.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ol = [], s = -1;
  function A(l) {
    return { current: l };
  }
  function N(l) {
    0 > s || (l.current = ol[s], ol[s] = null, s--);
  }
  function M(l, t) {
    s++, ol[s] = l.current, l.current = t;
  }
  var j = A(null), tl = A(null), L = A(null), lt = A(null);
  function Sl(l, t) {
    switch (M(L, t), M(tl, l), M(j, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Nr(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = Nr(t), l = pr(t, l);
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
    N(j), M(j, l);
  }
  function Lt() {
    N(j), N(tl), N(L);
  }
  function Yn(l) {
    l.memoizedState !== null && M(lt, l);
    var t = j.current, a = pr(t, l.type);
    t !== a && (M(tl, l), M(j, a));
  }
  function Se(l) {
    tl.current === l && (N(j), N(tl)), lt.current === l && (N(lt), re._currentValue = X);
  }
  var jn = Object.prototype.hasOwnProperty, Gn = T.unstable_scheduleCallback, Cn = T.unstable_cancelCallback, bd = T.unstable_shouldYield, Td = T.unstable_requestPaint, _t = T.unstable_now, Ed = T.unstable_getCurrentPriorityLevel, si = T.unstable_ImmediatePriority, oi = T.unstable_UserBlockingPriority, be = T.unstable_NormalPriority, _d = T.unstable_LowPriority, ri = T.unstable_IdlePriority, Ad = T.log, zd = T.unstable_setDisableYieldValue, bu = null, tt = null;
  function Kt(l) {
    if (typeof Ad == "function" && zd(l), tt && typeof tt.setStrictMode == "function")
      try {
        tt.setStrictMode(bu, l);
      } catch {
      }
  }
  var at = Math.clz32 ? Math.clz32 : Md, Od = Math.log, Dd = Math.LN2;
  function Md(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Od(l) / Dd | 0) | 0;
  }
  var Te = 256, Ee = 4194304;
  function ma(l) {
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
  function _e(l, t, a) {
    var u = l.pendingLanes;
    if (u === 0) return 0;
    var e = 0, n = l.suspendedLanes, c = l.pingedLanes;
    l = l.warmLanes;
    var f = u & 134217727;
    return f !== 0 ? (u = f & ~n, u !== 0 ? e = ma(u) : (c &= f, c !== 0 ? e = ma(c) : a || (a = f & ~l, a !== 0 && (e = ma(a))))) : (f = u & ~n, f !== 0 ? e = ma(f) : c !== 0 ? e = ma(c) : a || (a = u & ~l, a !== 0 && (e = ma(a)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, a = t & -t, n >= a || n === 32 && (a & 4194048) !== 0) ? t : e;
  }
  function Tu(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Rd(l, t) {
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
    var l = Te;
    return Te <<= 1, (Te & 4194048) === 0 && (Te = 256), l;
  }
  function vi() {
    var l = Ee;
    return Ee <<= 1, (Ee & 62914560) === 0 && (Ee = 4194304), l;
  }
  function Xn(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function Eu(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Ud(l, t, a, u, e, n) {
    var c = l.pendingLanes;
    l.pendingLanes = a, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= a, l.entangledLanes &= a, l.errorRecoveryDisabledLanes &= a, l.shellSuspendCounter = 0;
    var f = l.entanglements, i = l.expirationTimes, h = l.hiddenUpdates;
    for (a = c & ~a; 0 < a; ) {
      var g = 31 - at(a), _ = 1 << g;
      f[g] = 0, i[g] = -1;
      var y = h[g];
      if (y !== null)
        for (h[g] = null, g = 0; g < y.length; g++) {
          var m = y[g];
          m !== null && (m.lane &= -536870913);
        }
      a &= ~_;
    }
    u !== 0 && hi(l, u, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(c & ~t));
  }
  function hi(l, t, a) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var u = 31 - at(t);
    l.entangledLanes |= t, l.entanglements[u] = l.entanglements[u] | 1073741824 | a & 4194090;
  }
  function yi(l, t) {
    var a = l.entangledLanes |= t;
    for (l = l.entanglements; a; ) {
      var u = 31 - at(a), e = 1 << u;
      e & t | l[u] & t && (l[u] |= t), a &= ~e;
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
  function Zn(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function mi() {
    var l = U.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : $r(l.type));
  }
  function Nd(l, t) {
    var a = U.p;
    try {
      return U.p = l, t();
    } finally {
      U.p = a;
    }
  }
  var Jt = Math.random().toString(36).slice(2), Vl = "__reactFiber$" + Jt, Wl = "__reactProps$" + Jt, xa = "__reactContainer$" + Jt, Vn = "__reactEvents$" + Jt, pd = "__reactListeners$" + Jt, Hd = "__reactHandles$" + Jt, gi = "__reactResources$" + Jt, _u = "__reactMarker$" + Jt;
  function Ln(l) {
    delete l[Vl], delete l[Wl], delete l[Vn], delete l[pd], delete l[Hd];
  }
  function Ba(l) {
    var t = l[Vl];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if (t = a[xa] || a[Vl]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (l = Br(l); l !== null; ) {
            if (a = l[Vl]) return a;
            l = Br(l);
          }
        return t;
      }
      l = a, a = l.parentNode;
    }
    return null;
  }
  function Ya(l) {
    if (l = l[Vl] || l[xa]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Au(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(r(33));
  }
  function ja(l) {
    var t = l[gi];
    return t || (t = l[gi] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Bl(l) {
    l[_u] = !0;
  }
  var Si = /* @__PURE__ */ new Set(), bi = {};
  function ga(l, t) {
    Ga(l, t), Ga(l + "Capture", t);
  }
  function Ga(l, t) {
    for (bi[l] = t, l = 0; l < t.length; l++)
      Si.add(t[l]);
  }
  var qd = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Ti = {}, Ei = {};
  function xd(l) {
    return jn.call(Ei, l) ? !0 : jn.call(Ti, l) ? !1 : qd.test(l) ? Ei[l] = !0 : (Ti[l] = !0, !1);
  }
  function Ae(l, t, a) {
    if (xd(t))
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var u = t.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + a);
      }
  }
  function ze(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + a);
    }
  }
  function Ut(l, t, a, u) {
    if (u === null) l.removeAttribute(a);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + u);
    }
  }
  var Kn, _i;
  function Ca(l) {
    if (Kn === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        Kn = t && t[1] || "", _i = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Kn + l + _i;
  }
  var Jn = !1;
  function wn(l, t) {
    if (!l || Jn) return "";
    Jn = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var _ = function() {
                throw Error();
              };
              if (Object.defineProperty(_.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(_, []);
                } catch (m) {
                  var y = m;
                }
                Reflect.construct(l, [], _);
              } else {
                try {
                  _.call();
                } catch (m) {
                  y = m;
                }
                l.call(_.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (m) {
                y = m;
              }
              (_ = l()) && typeof _.catch == "function" && _.catch(function() {
              });
            }
          } catch (m) {
            if (m && y && typeof m.stack == "string")
              return [m.stack, y.stack];
          }
          return [null, null];
        }
      };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        u.DetermineComponentFrameRoot,
        "name"
      );
      e && e.configurable && Object.defineProperty(
        u.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = u.DetermineComponentFrameRoot(), c = n[0], f = n[1];
      if (c && f) {
        var i = c.split(`
`), h = f.split(`
`);
        for (e = u = 0; u < i.length && !i[u].includes("DetermineComponentFrameRoot"); )
          u++;
        for (; e < h.length && !h[e].includes(
          "DetermineComponentFrameRoot"
        ); )
          e++;
        if (u === i.length || e === h.length)
          for (u = i.length - 1, e = h.length - 1; 1 <= u && 0 <= e && i[u] !== h[e]; )
            e--;
        for (; 1 <= u && 0 <= e; u--, e--)
          if (i[u] !== h[e]) {
            if (u !== 1 || e !== 1)
              do
                if (u--, e--, 0 > e || i[u] !== h[e]) {
                  var g = `
` + i[u].replace(" at new ", " at ");
                  return l.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", l.displayName)), g;
                }
              while (1 <= u && 0 <= e);
            break;
          }
      }
    } finally {
      Jn = !1, Error.prepareStackTrace = a;
    }
    return (a = l ? l.displayName || l.name : "") ? Ca(a) : "";
  }
  function Bd(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Ca(l.type);
      case 16:
        return Ca("Lazy");
      case 13:
        return Ca("Suspense");
      case 19:
        return Ca("SuspenseList");
      case 0:
      case 15:
        return wn(l.type, !1);
      case 11:
        return wn(l.type.render, !1);
      case 1:
        return wn(l.type, !0);
      case 31:
        return Ca("Activity");
      default:
        return "";
    }
  }
  function Ai(l) {
    try {
      var t = "";
      do
        t += Bd(l), l = l.return;
      while (l);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
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
  function Yd(l) {
    var t = zi(l) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      t
    ), u = "" + l[t];
    if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var e = a.get, n = a.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return e.call(this);
        },
        set: function(c) {
          u = "" + c, n.call(this, c);
        }
      }), Object.defineProperty(l, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return u;
        },
        setValue: function(c) {
          u = "" + c;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function Oe(l) {
    l._valueTracker || (l._valueTracker = Yd(l));
  }
  function Oi(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), u = "";
    return l && (u = zi(l) ? l.checked ? "true" : "false" : l.value), l = u, l !== a ? (t.setValue(l), !0) : !1;
  }
  function De(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var jd = /[\n"\\]/g;
  function rt(l) {
    return l.replace(
      jd,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function kn(l, t, a, u, e, n, c, f) {
    l.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.type = c : l.removeAttribute("type"), t != null ? c === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + ot(t)) : l.value !== "" + ot(t) && (l.value = "" + ot(t)) : c !== "submit" && c !== "reset" || l.removeAttribute("value"), t != null ? Wn(l, c, ot(t)) : a != null ? Wn(l, c, ot(a)) : u != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.name = "" + ot(f) : l.removeAttribute("name");
  }
  function Di(l, t, a, u, e, n, c, f) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || a != null) {
      if (!(n !== "submit" && n !== "reset" || t != null))
        return;
      a = a != null ? "" + ot(a) : "", t = t != null ? "" + ot(t) : a, f || t === l.value || (l.value = t), l.defaultValue = t;
    }
    u = u ?? e, u = typeof u != "function" && typeof u != "symbol" && !!u, l.checked = f ? l.checked : !!u, l.defaultChecked = !!u, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (l.name = c);
  }
  function Wn(l, t, a) {
    t === "number" && De(l.ownerDocument) === l || l.defaultValue === "" + a || (l.defaultValue = "" + a);
  }
  function Xa(l, t, a, u) {
    if (l = l.options, t) {
      t = {};
      for (var e = 0; e < a.length; e++)
        t["$" + a[e]] = !0;
      for (a = 0; a < l.length; a++)
        e = t.hasOwnProperty("$" + l[a].value), l[a].selected !== e && (l[a].selected = e), e && u && (l[a].defaultSelected = !0);
    } else {
      for (a = "" + ot(a), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === a) {
          l[e].selected = !0, u && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Mi(l, t, a) {
    if (t != null && (t = "" + ot(t), t !== l.value && (l.value = t), a == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + ot(a) : "";
  }
  function Ri(l, t, a, u) {
    if (t == null) {
      if (u != null) {
        if (a != null) throw Error(r(92));
        if (Zl(u)) {
          if (1 < u.length) throw Error(r(93));
          u = u[0];
        }
        a = u;
      }
      a == null && (a = ""), t = a;
    }
    a = ot(t), l.defaultValue = a, u = l.textContent, u === a && u !== "" && u !== null && (l.value = u);
  }
  function Qa(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Gd = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Ui(l, t, a) {
    var u = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? u ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : u ? l.setProperty(t, a) : typeof a != "number" || a === 0 || Gd.has(t) ? t === "float" ? l.cssFloat = a : l[t] = ("" + a).trim() : l[t] = a + "px";
  }
  function Ni(l, t, a) {
    if (t != null && typeof t != "object")
      throw Error(r(62));
    if (l = l.style, a != null) {
      for (var u in a)
        !a.hasOwnProperty(u) || t != null && t.hasOwnProperty(u) || (u.indexOf("--") === 0 ? l.setProperty(u, "") : u === "float" ? l.cssFloat = "" : l[u] = "");
      for (var e in t)
        u = t[e], t.hasOwnProperty(e) && a[e] !== u && Ui(l, e, u);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && Ui(l, n, t[n]);
  }
  function $n(l) {
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
  var Cd = /* @__PURE__ */ new Map([
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
  ]), Xd = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Me(l) {
    return Xd.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var Fn = null;
  function In(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Za = null, Va = null;
  function pi(l) {
    var t = Ya(l);
    if (t && (l = t.stateNode)) {
      var a = l[Wl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (kn(
            l,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), t = a.name, a.type === "radio" && t != null) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + rt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var u = a[t];
              if (u !== l && u.form === l.form) {
                var e = u[Wl] || null;
                if (!e) throw Error(r(90));
                kn(
                  u,
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
            for (t = 0; t < a.length; t++)
              u = a[t], u.form === l.form && Oi(u);
          }
          break l;
        case "textarea":
          Mi(l, a.value, a.defaultValue);
          break l;
        case "select":
          t = a.value, t != null && Xa(l, !!a.multiple, t, !1);
      }
    }
  }
  var Pn = !1;
  function Hi(l, t, a) {
    if (Pn) return l(t, a);
    Pn = !0;
    try {
      var u = l(t);
      return u;
    } finally {
      if (Pn = !1, (Za !== null || Va !== null) && (vn(), Za && (t = Za, l = Va, Va = Za = null, pi(t), l)))
        for (t = 0; t < l.length; t++) pi(l[t]);
    }
  }
  function zu(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var u = a[Wl] || null;
    if (u === null) return null;
    a = u[t];
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
        (u = !u.disabled) || (l = l.type, u = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !u;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function")
      throw Error(
        r(231, t, typeof a)
      );
    return a;
  }
  var Nt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), lc = !1;
  if (Nt)
    try {
      var Ou = {};
      Object.defineProperty(Ou, "passive", {
        get: function() {
          lc = !0;
        }
      }), window.addEventListener("test", Ou, Ou), window.removeEventListener("test", Ou, Ou);
    } catch {
      lc = !1;
    }
  var wt = null, tc = null, Re = null;
  function qi() {
    if (Re) return Re;
    var l, t = tc, a = t.length, u, e = "value" in wt ? wt.value : wt.textContent, n = e.length;
    for (l = 0; l < a && t[l] === e[l]; l++) ;
    var c = a - l;
    for (u = 1; u <= c && t[a - u] === e[n - u]; u++) ;
    return Re = e.slice(l, 1 < u ? 1 - u : void 0);
  }
  function Ue(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Ne() {
    return !0;
  }
  function xi() {
    return !1;
  }
  function $l(l) {
    function t(a, u, e, n, c) {
      this._reactName = a, this._targetInst = e, this.type = u, this.nativeEvent = n, this.target = c, this.currentTarget = null;
      for (var f in l)
        l.hasOwnProperty(f) && (a = l[f], this[f] = a ? a(n) : n[f]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Ne : xi, this.isPropagationStopped = xi, this;
    }
    return x(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Ne);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Ne);
      },
      persist: function() {
      },
      isPersistent: Ne
    }), t;
  }
  var Sa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, pe = $l(Sa), Du = x({}, Sa, { view: 0, detail: 0 }), Qd = $l(Du), ac, uc, Mu, He = x({}, Du, {
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
    getModifierState: nc,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Mu && (Mu && l.type === "mousemove" ? (ac = l.screenX - Mu.screenX, uc = l.screenY - Mu.screenY) : uc = ac = 0, Mu = l), ac);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : uc;
    }
  }), Bi = $l(He), Zd = x({}, He, { dataTransfer: 0 }), Vd = $l(Zd), Ld = x({}, Du, { relatedTarget: 0 }), ec = $l(Ld), Kd = x({}, Sa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Jd = $l(Kd), wd = x({}, Sa, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), kd = $l(wd), Wd = x({}, Sa, { data: 0 }), Yi = $l(Wd), $d = {
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
  }, Fd = {
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
  }, Id = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Pd(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = Id[l]) ? !!t[l] : !1;
  }
  function nc() {
    return Pd;
  }
  var l0 = x({}, Du, {
    key: function(l) {
      if (l.key) {
        var t = $d[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Ue(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Fd[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: nc,
    charCode: function(l) {
      return l.type === "keypress" ? Ue(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Ue(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), t0 = $l(l0), a0 = x({}, He, {
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
  }), ji = $l(a0), u0 = x({}, Du, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: nc
  }), e0 = $l(u0), n0 = x({}, Sa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), c0 = $l(n0), f0 = x({}, He, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), i0 = $l(f0), s0 = x({}, Sa, {
    newState: 0,
    oldState: 0
  }), o0 = $l(s0), r0 = [9, 13, 27, 32], cc = Nt && "CompositionEvent" in window, Ru = null;
  Nt && "documentMode" in document && (Ru = document.documentMode);
  var d0 = Nt && "TextEvent" in window && !Ru, Gi = Nt && (!cc || Ru && 8 < Ru && 11 >= Ru), Ci = " ", Xi = !1;
  function Qi(l, t) {
    switch (l) {
      case "keyup":
        return r0.indexOf(t.keyCode) !== -1;
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
  function Zi(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var La = !1;
  function v0(l, t) {
    switch (l) {
      case "compositionend":
        return Zi(t);
      case "keypress":
        return t.which !== 32 ? null : (Xi = !0, Ci);
      case "textInput":
        return l = t.data, l === Ci && Xi ? null : l;
      default:
        return null;
    }
  }
  function h0(l, t) {
    if (La)
      return l === "compositionend" || !cc && Qi(l, t) ? (l = qi(), Re = tc = wt = null, La = !1, l) : null;
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
  var y0 = {
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
  function Vi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!y0[l.type] : t === "textarea";
  }
  function Li(l, t, a, u) {
    Za ? Va ? Va.push(u) : Va = [u] : Za = u, t = bn(t, "onChange"), 0 < t.length && (a = new pe(
      "onChange",
      "change",
      null,
      a,
      u
    ), l.push({ event: a, listeners: t }));
  }
  var Uu = null, Nu = null;
  function m0(l) {
    Or(l, 0);
  }
  function qe(l) {
    var t = Au(l);
    if (Oi(t)) return l;
  }
  function Ki(l, t) {
    if (l === "change") return t;
  }
  var Ji = !1;
  if (Nt) {
    var fc;
    if (Nt) {
      var ic = "oninput" in document;
      if (!ic) {
        var wi = document.createElement("div");
        wi.setAttribute("oninput", "return;"), ic = typeof wi.oninput == "function";
      }
      fc = ic;
    } else fc = !1;
    Ji = fc && (!document.documentMode || 9 < document.documentMode);
  }
  function ki() {
    Uu && (Uu.detachEvent("onpropertychange", Wi), Nu = Uu = null);
  }
  function Wi(l) {
    if (l.propertyName === "value" && qe(Nu)) {
      var t = [];
      Li(
        t,
        Nu,
        l,
        In(l)
      ), Hi(m0, t);
    }
  }
  function g0(l, t, a) {
    l === "focusin" ? (ki(), Uu = t, Nu = a, Uu.attachEvent("onpropertychange", Wi)) : l === "focusout" && ki();
  }
  function S0(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return qe(Nu);
  }
  function b0(l, t) {
    if (l === "click") return qe(t);
  }
  function T0(l, t) {
    if (l === "input" || l === "change")
      return qe(t);
  }
  function E0(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var ut = typeof Object.is == "function" ? Object.is : E0;
  function pu(l, t) {
    if (ut(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(l), u = Object.keys(t);
    if (a.length !== u.length) return !1;
    for (u = 0; u < a.length; u++) {
      var e = a[u];
      if (!jn.call(t, e) || !ut(l[e], t[e]))
        return !1;
    }
    return !0;
  }
  function $i(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Fi(l, t) {
    var a = $i(l);
    l = 0;
    for (var u; a; ) {
      if (a.nodeType === 3) {
        if (u = l + a.textContent.length, l <= t && u >= t)
          return { node: a, offset: t - l };
        l = u;
      }
      l: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = $i(a);
    }
  }
  function Ii(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ii(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Pi(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = De(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = De(l.document);
    }
    return t;
  }
  function sc(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var _0 = Nt && "documentMode" in document && 11 >= document.documentMode, Ka = null, oc = null, Hu = null, rc = !1;
  function ls(l, t, a) {
    var u = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    rc || Ka == null || Ka !== De(u) || (u = Ka, "selectionStart" in u && sc(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = {
      anchorNode: u.anchorNode,
      anchorOffset: u.anchorOffset,
      focusNode: u.focusNode,
      focusOffset: u.focusOffset
    }), Hu && pu(Hu, u) || (Hu = u, u = bn(oc, "onSelect"), 0 < u.length && (t = new pe(
      "onSelect",
      "select",
      null,
      t,
      a
    ), l.push({ event: t, listeners: u }), t.target = Ka)));
  }
  function ba(l, t) {
    var a = {};
    return a[l.toLowerCase()] = t.toLowerCase(), a["Webkit" + l] = "webkit" + t, a["Moz" + l] = "moz" + t, a;
  }
  var Ja = {
    animationend: ba("Animation", "AnimationEnd"),
    animationiteration: ba("Animation", "AnimationIteration"),
    animationstart: ba("Animation", "AnimationStart"),
    transitionrun: ba("Transition", "TransitionRun"),
    transitionstart: ba("Transition", "TransitionStart"),
    transitioncancel: ba("Transition", "TransitionCancel"),
    transitionend: ba("Transition", "TransitionEnd")
  }, dc = {}, ts = {};
  Nt && (ts = document.createElement("div").style, "AnimationEvent" in window || (delete Ja.animationend.animation, delete Ja.animationiteration.animation, delete Ja.animationstart.animation), "TransitionEvent" in window || delete Ja.transitionend.transition);
  function Ta(l) {
    if (dc[l]) return dc[l];
    if (!Ja[l]) return l;
    var t = Ja[l], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in ts)
        return dc[l] = t[a];
    return l;
  }
  var as = Ta("animationend"), us = Ta("animationiteration"), es = Ta("animationstart"), A0 = Ta("transitionrun"), z0 = Ta("transitionstart"), O0 = Ta("transitioncancel"), ns = Ta("transitionend"), cs = /* @__PURE__ */ new Map(), vc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  vc.push("scrollEnd");
  function bt(l, t) {
    cs.set(l, t), ga(t, [l]);
  }
  var fs = /* @__PURE__ */ new WeakMap();
  function dt(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = fs.get(l);
      return a !== void 0 ? a : (t = {
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
  var vt = [], wa = 0, hc = 0;
  function xe() {
    for (var l = wa, t = hc = wa = 0; t < l; ) {
      var a = vt[t];
      vt[t++] = null;
      var u = vt[t];
      vt[t++] = null;
      var e = vt[t];
      vt[t++] = null;
      var n = vt[t];
      if (vt[t++] = null, u !== null && e !== null) {
        var c = u.pending;
        c === null ? e.next = e : (e.next = c.next, c.next = e), u.pending = e;
      }
      n !== 0 && is(a, e, n);
    }
  }
  function Be(l, t, a, u) {
    vt[wa++] = l, vt[wa++] = t, vt[wa++] = a, vt[wa++] = u, hc |= u, l.lanes |= u, l = l.alternate, l !== null && (l.lanes |= u);
  }
  function yc(l, t, a, u) {
    return Be(l, t, a, u), Ye(l);
  }
  function ka(l, t) {
    return Be(l, null, null, t), Ye(l);
  }
  function is(l, t, a) {
    l.lanes |= a;
    var u = l.alternate;
    u !== null && (u.lanes |= a);
    for (var e = !1, n = l.return; n !== null; )
      n.childLanes |= a, u = n.alternate, u !== null && (u.childLanes |= a), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - at(a), l = n.hiddenUpdates, u = l[e], u === null ? l[e] = [t] : u.push(t), t.lane = a | 536870912), n) : null;
  }
  function Ye(l) {
    if (50 < ue)
      throw ue = 0, _f = null, Error(r(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Wa = {};
  function D0(l, t, a, u) {
    this.tag = l, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function et(l, t, a, u) {
    return new D0(l, t, a, u);
  }
  function mc(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function pt(l, t) {
    var a = l.alternate;
    return a === null ? (a = et(
      l.tag,
      t,
      l.key,
      l.mode
    ), a.elementType = l.elementType, a.type = l.type, a.stateNode = l.stateNode, a.alternate = l, l.alternate = a) : (a.pendingProps = t, a.type = l.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = l.flags & 65011712, a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, t = l.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = l.sibling, a.index = l.index, a.ref = l.ref, a.refCleanup = l.refCleanup, a;
  }
  function ss(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return a === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = a.childLanes, l.lanes = a.lanes, l.child = a.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = a.memoizedProps, l.memoizedState = a.memoizedState, l.updateQueue = a.updateQueue, l.type = a.type, t = a.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function je(l, t, a, u, e, n) {
    var c = 0;
    if (u = l, typeof l == "function") mc(l) && (c = 1);
    else if (typeof l == "string")
      c = Rv(
        l,
        a,
        j.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case Hl:
          return l = et(31, a, t, e), l.elementType = Hl, l.lanes = n, l;
        case pl:
          return Ea(a.children, e, n, t);
        case Jl:
          c = 8, e |= 24;
          break;
        case Y:
          return l = et(12, a, t, e | 2), l.elementType = Y, l.lanes = n, l;
        case Q:
          return l = et(13, a, t, e), l.elementType = Q, l.lanes = n, l;
        case El:
          return l = et(19, a, t, e), l.elementType = El, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case ml:
              case cl:
                c = 10;
                break l;
              case dl:
                c = 9;
                break l;
              case gl:
                c = 11;
                break l;
              case vl:
                c = 14;
                break l;
              case hl:
                c = 16, u = null;
                break l;
            }
          c = 29, a = Error(
            r(130, l === null ? "null" : typeof l, "")
          ), u = null;
      }
    return t = et(c, a, t, e), t.elementType = l, t.type = u, t.lanes = n, t;
  }
  function Ea(l, t, a, u) {
    return l = et(7, l, u, t), l.lanes = a, l;
  }
  function gc(l, t, a) {
    return l = et(6, l, null, t), l.lanes = a, l;
  }
  function Sc(l, t, a) {
    return t = et(
      4,
      l.children !== null ? l.children : [],
      l.key,
      t
    ), t.lanes = a, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var $a = [], Fa = 0, Ge = null, Ce = 0, ht = [], yt = 0, _a = null, Ht = 1, qt = "";
  function Aa(l, t) {
    $a[Fa++] = Ce, $a[Fa++] = Ge, Ge = l, Ce = t;
  }
  function os(l, t, a) {
    ht[yt++] = Ht, ht[yt++] = qt, ht[yt++] = _a, _a = l;
    var u = Ht;
    l = qt;
    var e = 32 - at(u) - 1;
    u &= ~(1 << e), a += 1;
    var n = 32 - at(t) + e;
    if (30 < n) {
      var c = e - e % 5;
      n = (u & (1 << c) - 1).toString(32), u >>= c, e -= c, Ht = 1 << 32 - at(t) + e | a << e | u, qt = n + l;
    } else
      Ht = 1 << n | a << e | u, qt = l;
  }
  function bc(l) {
    l.return !== null && (Aa(l, 1), os(l, 1, 0));
  }
  function Tc(l) {
    for (; l === Ge; )
      Ge = $a[--Fa], $a[Fa] = null, Ce = $a[--Fa], $a[Fa] = null;
    for (; l === _a; )
      _a = ht[--yt], ht[yt] = null, qt = ht[--yt], ht[yt] = null, Ht = ht[--yt], ht[yt] = null;
  }
  var kl = null, _l = null, ul = !1, za = null, At = !1, Ec = Error(r(519));
  function Oa(l) {
    var t = Error(r(418, ""));
    throw Bu(dt(t, l)), Ec;
  }
  function rs(l) {
    var t = l.stateNode, a = l.type, u = l.memoizedProps;
    switch (t[Vl] = l, t[Wl] = u, a) {
      case "dialog":
        W("cancel", t), W("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        W("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ne.length; a++)
          W(ne[a], t);
        break;
      case "source":
        W("error", t);
        break;
      case "img":
      case "image":
      case "link":
        W("error", t), W("load", t);
        break;
      case "details":
        W("toggle", t);
        break;
      case "input":
        W("invalid", t), Di(
          t,
          u.value,
          u.defaultValue,
          u.checked,
          u.defaultChecked,
          u.type,
          u.name,
          !0
        ), Oe(t);
        break;
      case "select":
        W("invalid", t);
        break;
      case "textarea":
        W("invalid", t), Ri(t, u.value, u.defaultValue, u.children), Oe(t);
    }
    a = u.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || u.suppressHydrationWarning === !0 || Ur(t.textContent, a) ? (u.popover != null && (W("beforetoggle", t), W("toggle", t)), u.onScroll != null && W("scroll", t), u.onScrollEnd != null && W("scrollend", t), u.onClick != null && (t.onclick = Tn), t = !0) : t = !1, t || Oa(l);
  }
  function ds(l) {
    for (kl = l.return; kl; )
      switch (kl.tag) {
        case 5:
        case 13:
          At = !1;
          return;
        case 27:
        case 3:
          At = !0;
          return;
        default:
          kl = kl.return;
      }
  }
  function qu(l) {
    if (l !== kl) return !1;
    if (!ul) return ds(l), ul = !0, !1;
    var t = l.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = l.type, a = !(a !== "form" && a !== "button") || Gf(l.type, l.memoizedProps)), a = !a), a && _l && Oa(l), ds(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(r(317));
      l: {
        for (l = l.nextSibling, t = 0; l; ) {
          if (l.nodeType === 8)
            if (a = l.data, a === "/$") {
              if (t === 0) {
                _l = Et(l.nextSibling);
                break l;
              }
              t--;
            } else
              a !== "$" && a !== "$!" && a !== "$?" || t++;
          l = l.nextSibling;
        }
        _l = null;
      }
    } else
      t === 27 ? (t = _l, sa(l.type) ? (l = Zf, Zf = null, _l = l) : _l = t) : _l = kl ? Et(l.stateNode.nextSibling) : null;
    return !0;
  }
  function xu() {
    _l = kl = null, ul = !1;
  }
  function vs() {
    var l = za;
    return l !== null && (Pl === null ? Pl = l : Pl.push.apply(
      Pl,
      l
    ), za = null), l;
  }
  function Bu(l) {
    za === null ? za = [l] : za.push(l);
  }
  var _c = A(null), Da = null, xt = null;
  function kt(l, t, a) {
    M(_c, t._currentValue), t._currentValue = a;
  }
  function Bt(l) {
    l._currentValue = _c.current, N(_c);
  }
  function Ac(l, t, a) {
    for (; l !== null; ) {
      var u = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, u !== null && (u.childLanes |= t)) : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t), l === a) break;
      l = l.return;
    }
  }
  function zc(l, t, a, u) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var c = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var f = n;
          n = e;
          for (var i = 0; i < t.length; i++)
            if (f.context === t[i]) {
              n.lanes |= a, f = n.alternate, f !== null && (f.lanes |= a), Ac(
                n.return,
                a,
                l
              ), u || (c = null);
              break l;
            }
          n = f.next;
        }
      } else if (e.tag === 18) {
        if (c = e.return, c === null) throw Error(r(341));
        c.lanes |= a, n = c.alternate, n !== null && (n.lanes |= a), Ac(c, a, l), c = null;
      } else c = e.child;
      if (c !== null) c.return = e;
      else
        for (c = e; c !== null; ) {
          if (c === l) {
            c = null;
            break;
          }
          if (e = c.sibling, e !== null) {
            e.return = c.return, c = e;
            break;
          }
          c = c.return;
        }
      e = c;
    }
  }
  function Yu(l, t, a, u) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var c = e.alternate;
        if (c === null) throw Error(r(387));
        if (c = c.memoizedProps, c !== null) {
          var f = e.type;
          ut(e.pendingProps.value, c.value) || (l !== null ? l.push(f) : l = [f]);
        }
      } else if (e === lt.current) {
        if (c = e.alternate, c === null) throw Error(r(387));
        c.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(re) : l = [re]);
      }
      e = e.return;
    }
    l !== null && zc(
      t,
      l,
      a,
      u
    ), t.flags |= 262144;
  }
  function Xe(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!ut(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Ma(l) {
    Da = l, xt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Ll(l) {
    return hs(Da, l);
  }
  function Qe(l, t) {
    return Da === null && Ma(l), hs(l, t);
  }
  function hs(l, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, xt === null) {
      if (l === null) throw Error(r(308));
      xt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else xt = xt.next = t;
    return a;
  }
  var M0 = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(a, u) {
        l.push(u);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(a) {
        return a();
      });
    };
  }, R0 = T.unstable_scheduleCallback, U0 = T.unstable_NormalPriority, ql = {
    $$typeof: cl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Oc() {
    return {
      controller: new M0(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ju(l) {
    l.refCount--, l.refCount === 0 && R0(U0, function() {
      l.controller.abort();
    });
  }
  var Gu = null, Dc = 0, Ia = 0, Pa = null;
  function N0(l, t) {
    if (Gu === null) {
      var a = Gu = [];
      Dc = 0, Ia = Uf(), Pa = {
        status: "pending",
        value: void 0,
        then: function(u) {
          a.push(u);
        }
      };
    }
    return Dc++, t.then(ys, ys), t;
  }
  function ys() {
    if (--Dc === 0 && Gu !== null) {
      Pa !== null && (Pa.status = "fulfilled");
      var l = Gu;
      Gu = null, Ia = 0, Pa = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function p0(l, t) {
    var a = [], u = {
      status: "pending",
      value: null,
      reason: null,
      then: function(e) {
        a.push(e);
      }
    };
    return l.then(
      function() {
        u.status = "fulfilled", u.value = t;
        for (var e = 0; e < a.length; e++) (0, a[e])(t);
      },
      function(e) {
        for (u.status = "rejected", u.reason = e, e = 0; e < a.length; e++)
          (0, a[e])(void 0);
      }
    ), u;
  }
  var ms = S.S;
  S.S = function(l, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && N0(l, t), ms !== null && ms(l, t);
  };
  var Ra = A(null);
  function Mc() {
    var l = Ra.current;
    return l !== null ? l : yl.pooledCache;
  }
  function Ze(l, t) {
    t === null ? M(Ra, Ra.current) : M(Ra, t.pool);
  }
  function gs() {
    var l = Mc();
    return l === null ? null : { parent: ql._currentValue, pool: l };
  }
  var Cu = Error(r(460)), Ss = Error(r(474)), Ve = Error(r(542)), Rc = { then: function() {
  } };
  function bs(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Le() {
  }
  function Ts(l, t, a) {
    switch (a = l[a], a === void 0 ? l.push(t) : a !== t && (t.then(Le, Le), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, _s(l), l;
      default:
        if (typeof t.status == "string") t.then(Le, Le);
        else {
          if (l = yl, l !== null && 100 < l.shellSuspendCounter)
            throw Error(r(482));
          l = t, l.status = "pending", l.then(
            function(u) {
              if (t.status === "pending") {
                var e = t;
                e.status = "fulfilled", e.value = u;
              }
            },
            function(u) {
              if (t.status === "pending") {
                var e = t;
                e.status = "rejected", e.reason = u;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, _s(l), l;
        }
        throw Xu = t, Cu;
    }
  }
  var Xu = null;
  function Es() {
    if (Xu === null) throw Error(r(459));
    var l = Xu;
    return Xu = null, l;
  }
  function _s(l) {
    if (l === Cu || l === Ve)
      throw Error(r(483));
  }
  var Wt = !1;
  function Uc(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Nc(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function $t(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Ft(l, t, a) {
    var u = l.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (el & 2) !== 0) {
      var e = u.pending;
      return e === null ? t.next = t : (t.next = e.next, e.next = t), u.pending = t, t = Ye(l), is(l, null, a), t;
    }
    return Be(l, u, t, a), Ye(l);
  }
  function Qu(l, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var u = t.lanes;
      u &= l.pendingLanes, a |= u, t.lanes = a, yi(l, a);
    }
  }
  function pc(l, t) {
    var a = l.updateQueue, u = l.alternate;
    if (u !== null && (u = u.updateQueue, a === u)) {
      var e = null, n = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var c = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          n === null ? e = n = c : n = n.next = c, a = a.next;
        } while (a !== null);
        n === null ? e = n = t : n = n.next = t;
      } else e = n = t;
      a = {
        baseState: u.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: u.shared,
        callbacks: u.callbacks
      }, l.updateQueue = a;
      return;
    }
    l = a.lastBaseUpdate, l === null ? a.firstBaseUpdate = t : l.next = t, a.lastBaseUpdate = t;
  }
  var Hc = !1;
  function Zu() {
    if (Hc) {
      var l = Pa;
      if (l !== null) throw l;
    }
  }
  function Vu(l, t, a, u) {
    Hc = !1;
    var e = l.updateQueue;
    Wt = !1;
    var n = e.firstBaseUpdate, c = e.lastBaseUpdate, f = e.shared.pending;
    if (f !== null) {
      e.shared.pending = null;
      var i = f, h = i.next;
      i.next = null, c === null ? n = h : c.next = h, c = i;
      var g = l.alternate;
      g !== null && (g = g.updateQueue, f = g.lastBaseUpdate, f !== c && (f === null ? g.firstBaseUpdate = h : f.next = h, g.lastBaseUpdate = i));
    }
    if (n !== null) {
      var _ = e.baseState;
      c = 0, g = h = i = null, f = n;
      do {
        var y = f.lane & -536870913, m = y !== f.lane;
        if (m ? (P & y) === y : (u & y) === y) {
          y !== 0 && y === Ia && (Hc = !0), g !== null && (g = g.next = {
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: null,
            next: null
          });
          l: {
            var Z = l, G = f;
            y = t;
            var sl = a;
            switch (G.tag) {
              case 1:
                if (Z = G.payload, typeof Z == "function") {
                  _ = Z.call(sl, _, y);
                  break l;
                }
                _ = Z;
                break l;
              case 3:
                Z.flags = Z.flags & -65537 | 128;
              case 0:
                if (Z = G.payload, y = typeof Z == "function" ? Z.call(sl, _, y) : Z, y == null) break l;
                _ = x({}, _, y);
                break l;
              case 2:
                Wt = !0;
            }
          }
          y = f.callback, y !== null && (l.flags |= 64, m && (l.flags |= 8192), m = e.callbacks, m === null ? e.callbacks = [y] : m.push(y));
        } else
          m = {
            lane: y,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          }, g === null ? (h = g = m, i = _) : g = g.next = m, c |= y;
        if (f = f.next, f === null) {
          if (f = e.shared.pending, f === null)
            break;
          m = f, f = m.next, m.next = null, e.lastBaseUpdate = m, e.shared.pending = null;
        }
      } while (!0);
      g === null && (i = _), e.baseState = i, e.firstBaseUpdate = h, e.lastBaseUpdate = g, n === null && (e.shared.lanes = 0), na |= c, l.lanes = c, l.memoizedState = _;
    }
  }
  function As(l, t) {
    if (typeof l != "function")
      throw Error(r(191, l));
    l.call(t);
  }
  function zs(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++)
        As(a[l], t);
  }
  var lu = A(null), Ke = A(0);
  function Os(l, t) {
    l = Zt, M(Ke, l), M(lu, t), Zt = l | t.baseLanes;
  }
  function qc() {
    M(Ke, Zt), M(lu, lu.current);
  }
  function xc() {
    Zt = Ke.current, N(lu), N(Ke);
  }
  var It = 0, J = null, fl = null, Rl = null, Je = !1, tu = !1, Ua = !1, we = 0, Lu = 0, au = null, H0 = 0;
  function Ol() {
    throw Error(r(321));
  }
  function Bc(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!ut(l[a], t[a])) return !1;
    return !0;
  }
  function Yc(l, t, a, u, e, n) {
    return It = n, J = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, S.H = l === null || l.memoizedState === null ? io : so, Ua = !1, n = a(u, e), Ua = !1, tu && (n = Ms(
      t,
      a,
      u,
      e
    )), Ds(l), n;
  }
  function Ds(l) {
    S.H = Pe;
    var t = fl !== null && fl.next !== null;
    if (It = 0, Rl = fl = J = null, Je = !1, Lu = 0, au = null, t) throw Error(r(300));
    l === null || Yl || (l = l.dependencies, l !== null && Xe(l) && (Yl = !0));
  }
  function Ms(l, t, a, u) {
    J = l;
    var e = 0;
    do {
      if (tu && (au = null), Lu = 0, tu = !1, 25 <= e) throw Error(r(301));
      if (e += 1, Rl = fl = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      S.H = C0, n = t(a, u);
    } while (tu);
    return n;
  }
  function q0() {
    var l = S.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? Ku(t) : t, l = l.useState()[0], (fl !== null ? fl.memoizedState : null) !== l && (J.flags |= 1024), t;
  }
  function jc() {
    var l = we !== 0;
    return we = 0, l;
  }
  function Gc(l, t, a) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~a;
  }
  function Cc(l) {
    if (Je) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      Je = !1;
    }
    It = 0, Rl = fl = J = null, tu = !1, Lu = we = 0, au = null;
  }
  function Fl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Rl === null ? J.memoizedState = Rl = l : Rl = Rl.next = l, Rl;
  }
  function Ul() {
    if (fl === null) {
      var l = J.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = fl.next;
    var t = Rl === null ? J.memoizedState : Rl.next;
    if (t !== null)
      Rl = t, fl = l;
    else {
      if (l === null)
        throw J.alternate === null ? Error(r(467)) : Error(r(310));
      fl = l, l = {
        memoizedState: fl.memoizedState,
        baseState: fl.baseState,
        baseQueue: fl.baseQueue,
        queue: fl.queue,
        next: null
      }, Rl === null ? J.memoizedState = Rl = l : Rl = Rl.next = l;
    }
    return Rl;
  }
  function Xc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ku(l) {
    var t = Lu;
    return Lu += 1, au === null && (au = []), l = Ts(au, l, t), t = J, (Rl === null ? t.memoizedState : Rl.next) === null && (t = t.alternate, S.H = t === null || t.memoizedState === null ? io : so), l;
  }
  function ke(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Ku(l);
      if (l.$$typeof === cl) return Ll(l);
    }
    throw Error(r(438, String(l)));
  }
  function Qc(l) {
    var t = null, a = J.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var u = J.alternate;
      u !== null && (u = u.updateQueue, u !== null && (u = u.memoCache, u != null && (t = {
        data: u.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = Xc(), J.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(l), u = 0; u < l; u++)
        a[u] = wl;
    return t.index++, a;
  }
  function Yt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function We(l) {
    var t = Ul();
    return Zc(t, fl, l);
  }
  function Zc(l, t, a) {
    var u = l.queue;
    if (u === null) throw Error(r(311));
    u.lastRenderedReducer = a;
    var e = l.baseQueue, n = u.pending;
    if (n !== null) {
      if (e !== null) {
        var c = e.next;
        e.next = n.next, n.next = c;
      }
      t.baseQueue = e = n, u.pending = null;
    }
    if (n = l.baseState, e === null) l.memoizedState = n;
    else {
      t = e.next;
      var f = c = null, i = null, h = t, g = !1;
      do {
        var _ = h.lane & -536870913;
        if (_ !== h.lane ? (P & _) === _ : (It & _) === _) {
          var y = h.revertLane;
          if (y === 0)
            i !== null && (i = i.next = {
              lane: 0,
              revertLane: 0,
              action: h.action,
              hasEagerState: h.hasEagerState,
              eagerState: h.eagerState,
              next: null
            }), _ === Ia && (g = !0);
          else if ((It & y) === y) {
            h = h.next, y === Ia && (g = !0);
            continue;
          } else
            _ = {
              lane: 0,
              revertLane: h.revertLane,
              action: h.action,
              hasEagerState: h.hasEagerState,
              eagerState: h.eagerState,
              next: null
            }, i === null ? (f = i = _, c = n) : i = i.next = _, J.lanes |= y, na |= y;
          _ = h.action, Ua && a(n, _), n = h.hasEagerState ? h.eagerState : a(n, _);
        } else
          y = {
            lane: _,
            revertLane: h.revertLane,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null
          }, i === null ? (f = i = y, c = n) : i = i.next = y, J.lanes |= _, na |= _;
        h = h.next;
      } while (h !== null && h !== t);
      if (i === null ? c = n : i.next = f, !ut(n, l.memoizedState) && (Yl = !0, g && (a = Pa, a !== null)))
        throw a;
      l.memoizedState = n, l.baseState = c, l.baseQueue = i, u.lastRenderedState = n;
    }
    return e === null && (u.lanes = 0), [l.memoizedState, u.dispatch];
  }
  function Vc(l) {
    var t = Ul(), a = t.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = l;
    var u = a.dispatch, e = a.pending, n = t.memoizedState;
    if (e !== null) {
      a.pending = null;
      var c = e = e.next;
      do
        n = l(n, c.action), c = c.next;
      while (c !== e);
      ut(n, t.memoizedState) || (Yl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), a.lastRenderedState = n;
    }
    return [n, u];
  }
  function Rs(l, t, a) {
    var u = J, e = Ul(), n = ul;
    if (n) {
      if (a === void 0) throw Error(r(407));
      a = a();
    } else a = t();
    var c = !ut(
      (fl || e).memoizedState,
      a
    );
    c && (e.memoizedState = a, Yl = !0), e = e.queue;
    var f = ps.bind(null, u, e, l);
    if (Ju(2048, 8, f, [l]), e.getSnapshot !== t || c || Rl !== null && Rl.memoizedState.tag & 1) {
      if (u.flags |= 2048, uu(
        9,
        $e(),
        Ns.bind(
          null,
          u,
          e,
          a,
          t
        ),
        null
      ), yl === null) throw Error(r(349));
      n || (It & 124) !== 0 || Us(u, t, a);
    }
    return a;
  }
  function Us(l, t, a) {
    l.flags |= 16384, l = { getSnapshot: t, value: a }, t = J.updateQueue, t === null ? (t = Xc(), J.updateQueue = t, t.stores = [l]) : (a = t.stores, a === null ? t.stores = [l] : a.push(l));
  }
  function Ns(l, t, a, u) {
    t.value = a, t.getSnapshot = u, Hs(t) && qs(l);
  }
  function ps(l, t, a) {
    return a(function() {
      Hs(t) && qs(l);
    });
  }
  function Hs(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !ut(l, a);
    } catch {
      return !0;
    }
  }
  function qs(l) {
    var t = ka(l, 2);
    t !== null && st(t, l, 2);
  }
  function Lc(l) {
    var t = Fl();
    if (typeof l == "function") {
      var a = l;
      if (l = a(), Ua) {
        Kt(!0);
        try {
          a();
        } finally {
          Kt(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Yt,
      lastRenderedState: l
    }, t;
  }
  function xs(l, t, a, u) {
    return l.baseState = a, Zc(
      l,
      fl,
      typeof u == "function" ? u : Yt
    );
  }
  function x0(l, t, a, u, e) {
    if (Ie(l)) throw Error(r(485));
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
        then: function(c) {
          n.listeners.push(c);
        }
      };
      S.T !== null ? a(!0) : n.isTransition = !1, u(n), a = t.pending, a === null ? (n.next = t.pending = n, Bs(t, n)) : (n.next = a.next, t.pending = a.next = n);
    }
  }
  function Bs(l, t) {
    var a = t.action, u = t.payload, e = l.state;
    if (t.isTransition) {
      var n = S.T, c = {};
      S.T = c;
      try {
        var f = a(e, u), i = S.S;
        i !== null && i(c, f), Ys(l, t, f);
      } catch (h) {
        Kc(l, t, h);
      } finally {
        S.T = n;
      }
    } else
      try {
        n = a(e, u), Ys(l, t, n);
      } catch (h) {
        Kc(l, t, h);
      }
  }
  function Ys(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(u) {
        js(l, t, u);
      },
      function(u) {
        return Kc(l, t, u);
      }
    ) : js(l, t, a);
  }
  function js(l, t, a) {
    t.status = "fulfilled", t.value = a, Gs(t), l.state = a, t = l.pending, t !== null && (a = t.next, a === t ? l.pending = null : (a = a.next, t.next = a, Bs(l, a)));
  }
  function Kc(l, t, a) {
    var u = l.pending;
    if (l.pending = null, u !== null) {
      u = u.next;
      do
        t.status = "rejected", t.reason = a, Gs(t), t = t.next;
      while (t !== u);
    }
    l.action = null;
  }
  function Gs(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Cs(l, t) {
    return t;
  }
  function Xs(l, t) {
    if (ul) {
      var a = yl.formState;
      if (a !== null) {
        l: {
          var u = J;
          if (ul) {
            if (_l) {
              t: {
                for (var e = _l, n = At; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (e = Et(
                    e.nextSibling
                  ), e === null) {
                    e = null;
                    break t;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                _l = Et(
                  e.nextSibling
                ), u = e.data === "F!";
                break l;
              }
            }
            Oa(u);
          }
          u = !1;
        }
        u && (t = a[0]);
      }
    }
    return a = Fl(), a.memoizedState = a.baseState = t, u = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Cs,
      lastRenderedState: t
    }, a.queue = u, a = no.bind(
      null,
      J,
      u
    ), u.dispatch = a, u = Lc(!1), n = $c.bind(
      null,
      J,
      !1,
      u.queue
    ), u = Fl(), e = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, u.queue = e, a = x0.bind(
      null,
      J,
      e,
      n,
      a
    ), e.dispatch = a, u.memoizedState = l, [t, a, !1];
  }
  function Qs(l) {
    var t = Ul();
    return Zs(t, fl, l);
  }
  function Zs(l, t, a) {
    if (t = Zc(
      l,
      t,
      Cs
    )[0], l = We(Yt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var u = Ku(t);
      } catch (c) {
        throw c === Cu ? Ve : c;
      }
    else u = t;
    t = Ul();
    var e = t.queue, n = e.dispatch;
    return a !== t.memoizedState && (J.flags |= 2048, uu(
      9,
      $e(),
      B0.bind(null, e, a),
      null
    )), [u, n, l];
  }
  function B0(l, t) {
    l.action = t;
  }
  function Vs(l) {
    var t = Ul(), a = fl;
    if (a !== null)
      return Zs(t, a, l);
    Ul(), t = t.memoizedState, a = Ul();
    var u = a.queue.dispatch;
    return a.memoizedState = l, [t, u, !1];
  }
  function uu(l, t, a, u) {
    return l = { tag: l, create: a, deps: u, inst: t, next: null }, t = J.updateQueue, t === null && (t = Xc(), J.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = l.next = l : (u = a.next, a.next = l, l.next = u, t.lastEffect = l), l;
  }
  function $e() {
    return { destroy: void 0, resource: void 0 };
  }
  function Ls() {
    return Ul().memoizedState;
  }
  function Fe(l, t, a, u) {
    var e = Fl();
    u = u === void 0 ? null : u, J.flags |= l, e.memoizedState = uu(
      1 | t,
      $e(),
      a,
      u
    );
  }
  function Ju(l, t, a, u) {
    var e = Ul();
    u = u === void 0 ? null : u;
    var n = e.memoizedState.inst;
    fl !== null && u !== null && Bc(u, fl.memoizedState.deps) ? e.memoizedState = uu(t, n, a, u) : (J.flags |= l, e.memoizedState = uu(
      1 | t,
      n,
      a,
      u
    ));
  }
  function Ks(l, t) {
    Fe(8390656, 8, l, t);
  }
  function Js(l, t) {
    Ju(2048, 8, l, t);
  }
  function ws(l, t) {
    return Ju(4, 2, l, t);
  }
  function ks(l, t) {
    return Ju(4, 4, l, t);
  }
  function Ws(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function() {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return l = l(), t.current = l, function() {
        t.current = null;
      };
  }
  function $s(l, t, a) {
    a = a != null ? a.concat([l]) : null, Ju(4, 4, Ws.bind(null, t, l), a);
  }
  function Jc() {
  }
  function Fs(l, t) {
    var a = Ul();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    return t !== null && Bc(t, u[1]) ? u[0] : (a.memoizedState = [l, t], l);
  }
  function Is(l, t) {
    var a = Ul();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    if (t !== null && Bc(t, u[1]))
      return u[0];
    if (u = l(), Ua) {
      Kt(!0);
      try {
        l();
      } finally {
        Kt(!1);
      }
    }
    return a.memoizedState = [u, t], u;
  }
  function wc(l, t, a) {
    return a === void 0 || (It & 1073741824) !== 0 ? l.memoizedState = t : (l.memoizedState = a, l = ar(), J.lanes |= l, na |= l, a);
  }
  function Ps(l, t, a, u) {
    return ut(a, t) ? a : lu.current !== null ? (l = wc(l, a, u), ut(l, t) || (Yl = !0), l) : (It & 42) === 0 ? (Yl = !0, l.memoizedState = a) : (l = ar(), J.lanes |= l, na |= l, t);
  }
  function lo(l, t, a, u, e) {
    var n = U.p;
    U.p = n !== 0 && 8 > n ? n : 8;
    var c = S.T, f = {};
    S.T = f, $c(l, !1, t, a);
    try {
      var i = e(), h = S.S;
      if (h !== null && h(f, i), i !== null && typeof i == "object" && typeof i.then == "function") {
        var g = p0(
          i,
          u
        );
        wu(
          l,
          t,
          g,
          it(l)
        );
      } else
        wu(
          l,
          t,
          u,
          it(l)
        );
    } catch (_) {
      wu(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: _ },
        it()
      );
    } finally {
      U.p = n, S.T = c;
    }
  }
  function Y0() {
  }
  function kc(l, t, a, u) {
    if (l.tag !== 5) throw Error(r(476));
    var e = to(l).queue;
    lo(
      l,
      e,
      t,
      X,
      a === null ? Y0 : function() {
        return ao(l), a(u);
      }
    );
  }
  function to(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: X,
      baseState: X,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yt,
        lastRenderedState: X
      },
      next: null
    };
    var a = {};
    return t.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yt,
        lastRenderedState: a
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function ao(l) {
    var t = to(l).next.queue;
    wu(l, t, {}, it());
  }
  function Wc() {
    return Ll(re);
  }
  function uo() {
    return Ul().memoizedState;
  }
  function eo() {
    return Ul().memoizedState;
  }
  function j0(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = it();
          l = $t(a);
          var u = Ft(t, l, a);
          u !== null && (st(u, t, a), Qu(u, t, a)), t = { cache: Oc() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function G0(l, t, a) {
    var u = it();
    a = {
      lane: u,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ie(l) ? co(t, a) : (a = yc(l, t, a, u), a !== null && (st(a, l, u), fo(a, t, u)));
  }
  function no(l, t, a) {
    var u = it();
    wu(l, t, a, u);
  }
  function wu(l, t, a, u) {
    var e = {
      lane: u,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ie(l)) co(t, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var c = t.lastRenderedState, f = n(c, a);
          if (e.hasEagerState = !0, e.eagerState = f, ut(f, c))
            return Be(l, t, e, 0), yl === null && xe(), !1;
        } catch {
        } finally {
        }
      if (a = yc(l, t, e, u), a !== null)
        return st(a, l, u), fo(a, t, u), !0;
    }
    return !1;
  }
  function $c(l, t, a, u) {
    if (u = {
      lane: 2,
      revertLane: Uf(),
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ie(l)) {
      if (t) throw Error(r(479));
    } else
      t = yc(
        l,
        a,
        u,
        2
      ), t !== null && st(t, l, 2);
  }
  function Ie(l) {
    var t = l.alternate;
    return l === J || t !== null && t === J;
  }
  function co(l, t) {
    tu = Je = !0;
    var a = l.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t;
  }
  function fo(l, t, a) {
    if ((a & 4194048) !== 0) {
      var u = t.lanes;
      u &= l.pendingLanes, a |= u, t.lanes = a, yi(l, a);
    }
  }
  var Pe = {
    readContext: Ll,
    use: ke,
    useCallback: Ol,
    useContext: Ol,
    useEffect: Ol,
    useImperativeHandle: Ol,
    useLayoutEffect: Ol,
    useInsertionEffect: Ol,
    useMemo: Ol,
    useReducer: Ol,
    useRef: Ol,
    useState: Ol,
    useDebugValue: Ol,
    useDeferredValue: Ol,
    useTransition: Ol,
    useSyncExternalStore: Ol,
    useId: Ol,
    useHostTransitionStatus: Ol,
    useFormState: Ol,
    useActionState: Ol,
    useOptimistic: Ol,
    useMemoCache: Ol,
    useCacheRefresh: Ol
  }, io = {
    readContext: Ll,
    use: ke,
    useCallback: function(l, t) {
      return Fl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Ll,
    useEffect: Ks,
    useImperativeHandle: function(l, t, a) {
      a = a != null ? a.concat([l]) : null, Fe(
        4194308,
        4,
        Ws.bind(null, t, l),
        a
      );
    },
    useLayoutEffect: function(l, t) {
      return Fe(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      Fe(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var a = Fl();
      t = t === void 0 ? null : t;
      var u = l();
      if (Ua) {
        Kt(!0);
        try {
          l();
        } finally {
          Kt(!1);
        }
      }
      return a.memoizedState = [u, t], u;
    },
    useReducer: function(l, t, a) {
      var u = Fl();
      if (a !== void 0) {
        var e = a(t);
        if (Ua) {
          Kt(!0);
          try {
            a(t);
          } finally {
            Kt(!1);
          }
        }
      } else e = t;
      return u.memoizedState = u.baseState = e, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: e
      }, u.queue = l, l = l.dispatch = G0.bind(
        null,
        J,
        l
      ), [u.memoizedState, l];
    },
    useRef: function(l) {
      var t = Fl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = Lc(l);
      var t = l.queue, a = no.bind(null, J, t);
      return t.dispatch = a, [l.memoizedState, a];
    },
    useDebugValue: Jc,
    useDeferredValue: function(l, t) {
      var a = Fl();
      return wc(a, l, t);
    },
    useTransition: function() {
      var l = Lc(!1);
      return l = lo.bind(
        null,
        J,
        l.queue,
        !0,
        !1
      ), Fl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, a) {
      var u = J, e = Fl();
      if (ul) {
        if (a === void 0)
          throw Error(r(407));
        a = a();
      } else {
        if (a = t(), yl === null)
          throw Error(r(349));
        (P & 124) !== 0 || Us(u, t, a);
      }
      e.memoizedState = a;
      var n = { value: a, getSnapshot: t };
      return e.queue = n, Ks(ps.bind(null, u, n, l), [
        l
      ]), u.flags |= 2048, uu(
        9,
        $e(),
        Ns.bind(
          null,
          u,
          n,
          a,
          t
        ),
        null
      ), a;
    },
    useId: function() {
      var l = Fl(), t = yl.identifierPrefix;
      if (ul) {
        var a = qt, u = Ht;
        a = (u & ~(1 << 32 - at(u) - 1)).toString(32) + a, t = "«" + t + "R" + a, a = we++, 0 < a && (t += "H" + a.toString(32)), t += "»";
      } else
        a = H0++, t = "«" + t + "r" + a.toString(32) + "»";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: Wc,
    useFormState: Xs,
    useActionState: Xs,
    useOptimistic: function(l) {
      var t = Fl();
      t.memoizedState = t.baseState = l;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = $c.bind(
        null,
        J,
        !0,
        a
      ), a.dispatch = t, [l, t];
    },
    useMemoCache: Qc,
    useCacheRefresh: function() {
      return Fl().memoizedState = j0.bind(
        null,
        J
      );
    }
  }, so = {
    readContext: Ll,
    use: ke,
    useCallback: Fs,
    useContext: Ll,
    useEffect: Js,
    useImperativeHandle: $s,
    useInsertionEffect: ws,
    useLayoutEffect: ks,
    useMemo: Is,
    useReducer: We,
    useRef: Ls,
    useState: function() {
      return We(Yt);
    },
    useDebugValue: Jc,
    useDeferredValue: function(l, t) {
      var a = Ul();
      return Ps(
        a,
        fl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = We(Yt)[0], t = Ul().memoizedState;
      return [
        typeof l == "boolean" ? l : Ku(l),
        t
      ];
    },
    useSyncExternalStore: Rs,
    useId: uo,
    useHostTransitionStatus: Wc,
    useFormState: Qs,
    useActionState: Qs,
    useOptimistic: function(l, t) {
      var a = Ul();
      return xs(a, fl, l, t);
    },
    useMemoCache: Qc,
    useCacheRefresh: eo
  }, C0 = {
    readContext: Ll,
    use: ke,
    useCallback: Fs,
    useContext: Ll,
    useEffect: Js,
    useImperativeHandle: $s,
    useInsertionEffect: ws,
    useLayoutEffect: ks,
    useMemo: Is,
    useReducer: Vc,
    useRef: Ls,
    useState: function() {
      return Vc(Yt);
    },
    useDebugValue: Jc,
    useDeferredValue: function(l, t) {
      var a = Ul();
      return fl === null ? wc(a, l, t) : Ps(
        a,
        fl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = Vc(Yt)[0], t = Ul().memoizedState;
      return [
        typeof l == "boolean" ? l : Ku(l),
        t
      ];
    },
    useSyncExternalStore: Rs,
    useId: uo,
    useHostTransitionStatus: Wc,
    useFormState: Vs,
    useActionState: Vs,
    useOptimistic: function(l, t) {
      var a = Ul();
      return fl !== null ? xs(a, fl, l, t) : (a.baseState = l, [l, a.queue.dispatch]);
    },
    useMemoCache: Qc,
    useCacheRefresh: eo
  }, eu = null, ku = 0;
  function ln(l) {
    var t = ku;
    return ku += 1, eu === null && (eu = []), Ts(eu, l, t);
  }
  function Wu(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function tn(l, t) {
    throw t.$$typeof === F ? Error(r(525)) : (l = Object.prototype.toString.call(t), Error(
      r(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function oo(l) {
    var t = l._init;
    return t(l._payload);
  }
  function ro(l) {
    function t(d, o) {
      if (l) {
        var v = d.deletions;
        v === null ? (d.deletions = [o], d.flags |= 16) : v.push(o);
      }
    }
    function a(d, o) {
      if (!l) return null;
      for (; o !== null; )
        t(d, o), o = o.sibling;
      return null;
    }
    function u(d) {
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
    function c(d) {
      return l && d.alternate === null && (d.flags |= 67108866), d;
    }
    function f(d, o, v, b) {
      return o === null || o.tag !== 6 ? (o = gc(v, d.mode, b), o.return = d, o) : (o = e(o, v), o.return = d, o);
    }
    function i(d, o, v, b) {
      var H = v.type;
      return H === pl ? g(
        d,
        o,
        v.props.children,
        b,
        v.key
      ) : o !== null && (o.elementType === H || typeof H == "object" && H !== null && H.$$typeof === hl && oo(H) === o.type) ? (o = e(o, v.props), Wu(o, v), o.return = d, o) : (o = je(
        v.type,
        v.key,
        v.props,
        null,
        d.mode,
        b
      ), Wu(o, v), o.return = d, o);
    }
    function h(d, o, v, b) {
      return o === null || o.tag !== 4 || o.stateNode.containerInfo !== v.containerInfo || o.stateNode.implementation !== v.implementation ? (o = Sc(v, d.mode, b), o.return = d, o) : (o = e(o, v.children || []), o.return = d, o);
    }
    function g(d, o, v, b, H) {
      return o === null || o.tag !== 7 ? (o = Ea(
        v,
        d.mode,
        b,
        H
      ), o.return = d, o) : (o = e(o, v), o.return = d, o);
    }
    function _(d, o, v) {
      if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint")
        return o = gc(
          "" + o,
          d.mode,
          v
        ), o.return = d, o;
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case ll:
            return v = je(
              o.type,
              o.key,
              o.props,
              null,
              d.mode,
              v
            ), Wu(v, o), v.return = d, v;
          case Nl:
            return o = Sc(
              o,
              d.mode,
              v
            ), o.return = d, o;
          case hl:
            var b = o._init;
            return o = b(o._payload), _(d, o, v);
        }
        if (Zl(o) || zl(o))
          return o = Ea(
            o,
            d.mode,
            v,
            null
          ), o.return = d, o;
        if (typeof o.then == "function")
          return _(d, ln(o), v);
        if (o.$$typeof === cl)
          return _(
            d,
            Qe(d, o),
            v
          );
        tn(d, o);
      }
      return null;
    }
    function y(d, o, v, b) {
      var H = o !== null ? o.key : null;
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint")
        return H !== null ? null : f(d, o, "" + v, b);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case ll:
            return v.key === H ? i(d, o, v, b) : null;
          case Nl:
            return v.key === H ? h(d, o, v, b) : null;
          case hl:
            return H = v._init, v = H(v._payload), y(d, o, v, b);
        }
        if (Zl(v) || zl(v))
          return H !== null ? null : g(d, o, v, b, null);
        if (typeof v.then == "function")
          return y(
            d,
            o,
            ln(v),
            b
          );
        if (v.$$typeof === cl)
          return y(
            d,
            o,
            Qe(d, v),
            b
          );
        tn(d, v);
      }
      return null;
    }
    function m(d, o, v, b, H) {
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
        return d = d.get(v) || null, f(o, d, "" + b, H);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case ll:
            return d = d.get(
              b.key === null ? v : b.key
            ) || null, i(o, d, b, H);
          case Nl:
            return d = d.get(
              b.key === null ? v : b.key
            ) || null, h(o, d, b, H);
          case hl:
            var w = b._init;
            return b = w(b._payload), m(
              d,
              o,
              v,
              b,
              H
            );
        }
        if (Zl(b) || zl(b))
          return d = d.get(v) || null, g(o, d, b, H, null);
        if (typeof b.then == "function")
          return m(
            d,
            o,
            v,
            ln(b),
            H
          );
        if (b.$$typeof === cl)
          return m(
            d,
            o,
            v,
            Qe(o, b),
            H
          );
        tn(o, b);
      }
      return null;
    }
    function Z(d, o, v, b) {
      for (var H = null, w = null, B = o, C = o = 0, Gl = null; B !== null && C < v.length; C++) {
        B.index > C ? (Gl = B, B = null) : Gl = B.sibling;
        var al = y(
          d,
          B,
          v[C],
          b
        );
        if (al === null) {
          B === null && (B = Gl);
          break;
        }
        l && B && al.alternate === null && t(d, B), o = n(al, o, C), w === null ? H = al : w.sibling = al, w = al, B = Gl;
      }
      if (C === v.length)
        return a(d, B), ul && Aa(d, C), H;
      if (B === null) {
        for (; C < v.length; C++)
          B = _(d, v[C], b), B !== null && (o = n(
            B,
            o,
            C
          ), w === null ? H = B : w.sibling = B, w = B);
        return ul && Aa(d, C), H;
      }
      for (B = u(B); C < v.length; C++)
        Gl = m(
          B,
          d,
          C,
          v[C],
          b
        ), Gl !== null && (l && Gl.alternate !== null && B.delete(
          Gl.key === null ? C : Gl.key
        ), o = n(
          Gl,
          o,
          C
        ), w === null ? H = Gl : w.sibling = Gl, w = Gl);
      return l && B.forEach(function(ha) {
        return t(d, ha);
      }), ul && Aa(d, C), H;
    }
    function G(d, o, v, b) {
      if (v == null) throw Error(r(151));
      for (var H = null, w = null, B = o, C = o = 0, Gl = null, al = v.next(); B !== null && !al.done; C++, al = v.next()) {
        B.index > C ? (Gl = B, B = null) : Gl = B.sibling;
        var ha = y(d, B, al.value, b);
        if (ha === null) {
          B === null && (B = Gl);
          break;
        }
        l && B && ha.alternate === null && t(d, B), o = n(ha, o, C), w === null ? H = ha : w.sibling = ha, w = ha, B = Gl;
      }
      if (al.done)
        return a(d, B), ul && Aa(d, C), H;
      if (B === null) {
        for (; !al.done; C++, al = v.next())
          al = _(d, al.value, b), al !== null && (o = n(al, o, C), w === null ? H = al : w.sibling = al, w = al);
        return ul && Aa(d, C), H;
      }
      for (B = u(B); !al.done; C++, al = v.next())
        al = m(B, d, C, al.value, b), al !== null && (l && al.alternate !== null && B.delete(al.key === null ? C : al.key), o = n(al, o, C), w === null ? H = al : w.sibling = al, w = al);
      return l && B.forEach(function(Xv) {
        return t(d, Xv);
      }), ul && Aa(d, C), H;
    }
    function sl(d, o, v, b) {
      if (typeof v == "object" && v !== null && v.type === pl && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case ll:
            l: {
              for (var H = v.key; o !== null; ) {
                if (o.key === H) {
                  if (H = v.type, H === pl) {
                    if (o.tag === 7) {
                      a(
                        d,
                        o.sibling
                      ), b = e(
                        o,
                        v.props.children
                      ), b.return = d, d = b;
                      break l;
                    }
                  } else if (o.elementType === H || typeof H == "object" && H !== null && H.$$typeof === hl && oo(H) === o.type) {
                    a(
                      d,
                      o.sibling
                    ), b = e(o, v.props), Wu(b, v), b.return = d, d = b;
                    break l;
                  }
                  a(d, o);
                  break;
                } else t(d, o);
                o = o.sibling;
              }
              v.type === pl ? (b = Ea(
                v.props.children,
                d.mode,
                b,
                v.key
              ), b.return = d, d = b) : (b = je(
                v.type,
                v.key,
                v.props,
                null,
                d.mode,
                b
              ), Wu(b, v), b.return = d, d = b);
            }
            return c(d);
          case Nl:
            l: {
              for (H = v.key; o !== null; ) {
                if (o.key === H)
                  if (o.tag === 4 && o.stateNode.containerInfo === v.containerInfo && o.stateNode.implementation === v.implementation) {
                    a(
                      d,
                      o.sibling
                    ), b = e(o, v.children || []), b.return = d, d = b;
                    break l;
                  } else {
                    a(d, o);
                    break;
                  }
                else t(d, o);
                o = o.sibling;
              }
              b = Sc(v, d.mode, b), b.return = d, d = b;
            }
            return c(d);
          case hl:
            return H = v._init, v = H(v._payload), sl(
              d,
              o,
              v,
              b
            );
        }
        if (Zl(v))
          return Z(
            d,
            o,
            v,
            b
          );
        if (zl(v)) {
          if (H = zl(v), typeof H != "function") throw Error(r(150));
          return v = H.call(v), G(
            d,
            o,
            v,
            b
          );
        }
        if (typeof v.then == "function")
          return sl(
            d,
            o,
            ln(v),
            b
          );
        if (v.$$typeof === cl)
          return sl(
            d,
            o,
            Qe(d, v),
            b
          );
        tn(d, v);
      }
      return typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint" ? (v = "" + v, o !== null && o.tag === 6 ? (a(d, o.sibling), b = e(o, v), b.return = d, d = b) : (a(d, o), b = gc(v, d.mode, b), b.return = d, d = b), c(d)) : a(d, o);
    }
    return function(d, o, v, b) {
      try {
        ku = 0;
        var H = sl(
          d,
          o,
          v,
          b
        );
        return eu = null, H;
      } catch (B) {
        if (B === Cu || B === Ve) throw B;
        var w = et(29, B, null, d.mode);
        return w.lanes = b, w.return = d, w;
      } finally {
      }
    };
  }
  var nu = ro(!0), vo = ro(!1), mt = A(null), zt = null;
  function Pt(l) {
    var t = l.alternate;
    M(xl, xl.current & 1), M(mt, l), zt === null && (t === null || lu.current !== null || t.memoizedState !== null) && (zt = l);
  }
  function ho(l) {
    if (l.tag === 22) {
      if (M(xl, xl.current), M(mt, l), zt === null) {
        var t = l.alternate;
        t !== null && t.memoizedState !== null && (zt = l);
      }
    } else la();
  }
  function la() {
    M(xl, xl.current), M(mt, mt.current);
  }
  function jt(l) {
    N(mt), zt === l && (zt = null), N(xl);
  }
  var xl = A(0);
  function an(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || Qf(a)))
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
  function Fc(l, t, a, u) {
    t = l.memoizedState, a = a(u, t), a = a == null ? t : x({}, t, a), l.memoizedState = a, l.lanes === 0 && (l.updateQueue.baseState = a);
  }
  var Ic = {
    enqueueSetState: function(l, t, a) {
      l = l._reactInternals;
      var u = it(), e = $t(u);
      e.payload = t, a != null && (e.callback = a), t = Ft(l, e, u), t !== null && (st(t, l, u), Qu(t, l, u));
    },
    enqueueReplaceState: function(l, t, a) {
      l = l._reactInternals;
      var u = it(), e = $t(u);
      e.tag = 1, e.payload = t, a != null && (e.callback = a), t = Ft(l, e, u), t !== null && (st(t, l, u), Qu(t, l, u));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var a = it(), u = $t(a);
      u.tag = 2, t != null && (u.callback = t), t = Ft(l, u, a), t !== null && (st(t, l, a), Qu(t, l, a));
    }
  };
  function yo(l, t, a, u, e, n, c) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(u, n, c) : t.prototype && t.prototype.isPureReactComponent ? !pu(a, u) || !pu(e, n) : !0;
  }
  function mo(l, t, a, u) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, u), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, u), t.state !== l && Ic.enqueueReplaceState(t, t.state, null);
  }
  function Na(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var u in t)
        u !== "ref" && (a[u] = t[u]);
    }
    if (l = l.defaultProps) {
      a === t && (a = x({}, a));
      for (var e in l)
        a[e] === void 0 && (a[e] = l[e]);
    }
    return a;
  }
  var un = typeof reportError == "function" ? reportError : function(l) {
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
  function go(l) {
    un(l);
  }
  function So(l) {
    console.error(l);
  }
  function bo(l) {
    un(l);
  }
  function en(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function To(l, t, a) {
    try {
      var u = l.onCaughtError;
      u(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function Pc(l, t, a) {
    return a = $t(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      en(l, t);
    }, a;
  }
  function Eo(l) {
    return l = $t(l), l.tag = 3, l;
  }
  function _o(l, t, a, u) {
    var e = a.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = u.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        To(t, a, u);
      };
    }
    var c = a.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (l.callback = function() {
      To(t, a, u), typeof e != "function" && (ca === null ? ca = /* @__PURE__ */ new Set([this]) : ca.add(this));
      var f = u.stack;
      this.componentDidCatch(u.value, {
        componentStack: f !== null ? f : ""
      });
    });
  }
  function X0(l, t, a, u, e) {
    if (a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
      if (t = a.alternate, t !== null && Yu(
        t,
        a,
        e,
        !0
      ), a = mt.current, a !== null) {
        switch (a.tag) {
          case 13:
            return zt === null ? zf() : a.alternate === null && Al === 0 && (Al = 3), a.flags &= -257, a.flags |= 65536, a.lanes = e, u === Rc ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([u]) : t.add(u), Df(l, u, e)), !1;
          case 22:
            return a.flags |= 65536, u === Rc ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([u])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([u]) : a.add(u)), Df(l, u, e)), !1;
        }
        throw Error(r(435, a.tag));
      }
      return Df(l, u, e), zf(), !1;
    }
    if (ul)
      return t = mt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, u !== Ec && (l = Error(r(422), { cause: u }), Bu(dt(l, a)))) : (u !== Ec && (t = Error(r(423), {
        cause: u
      }), Bu(
        dt(t, a)
      )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, u = dt(u, a), e = Pc(
        l.stateNode,
        u,
        e
      ), pc(l, e), Al !== 4 && (Al = 2)), !1;
    var n = Error(r(520), { cause: u });
    if (n = dt(n, a), ae === null ? ae = [n] : ae.push(n), Al !== 4 && (Al = 2), t === null) return !0;
    u = dt(u, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, l = e & -e, a.lanes |= l, l = Pc(a.stateNode, u, l), pc(a, l), !1;
        case 1:
          if (t = a.type, n = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (ca === null || !ca.has(n))))
            return a.flags |= 65536, e &= -e, a.lanes |= e, e = Eo(e), _o(
              e,
              l,
              a,
              u
            ), pc(a, e), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Ao = Error(r(461)), Yl = !1;
  function Cl(l, t, a, u) {
    t.child = l === null ? vo(t, null, a, u) : nu(
      t,
      l.child,
      a,
      u
    );
  }
  function zo(l, t, a, u, e) {
    a = a.render;
    var n = t.ref;
    if ("ref" in u) {
      var c = {};
      for (var f in u)
        f !== "ref" && (c[f] = u[f]);
    } else c = u;
    return Ma(t), u = Yc(
      l,
      t,
      a,
      c,
      n,
      e
    ), f = jc(), l !== null && !Yl ? (Gc(l, t, e), Gt(l, t, e)) : (ul && f && bc(t), t.flags |= 1, Cl(l, t, u, e), t.child);
  }
  function Oo(l, t, a, u, e) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" && !mc(n) && n.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = n, Do(
        l,
        t,
        n,
        u,
        e
      )) : (l = je(
        a.type,
        null,
        u,
        t,
        t.mode,
        e
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !ff(l, e)) {
      var c = n.memoizedProps;
      if (a = a.compare, a = a !== null ? a : pu, a(c, u) && l.ref === t.ref)
        return Gt(l, t, e);
    }
    return t.flags |= 1, l = pt(n, u), l.ref = t.ref, l.return = t, t.child = l;
  }
  function Do(l, t, a, u, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (pu(n, u) && l.ref === t.ref)
        if (Yl = !1, t.pendingProps = u = n, ff(l, e))
          (l.flags & 131072) !== 0 && (Yl = !0);
        else
          return t.lanes = l.lanes, Gt(l, t, e);
    }
    return lf(
      l,
      t,
      a,
      u,
      e
    );
  }
  function Mo(l, t, a) {
    var u = t.pendingProps, e = u.children, n = l !== null ? l.memoizedState : null;
    if (u.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (u = n !== null ? n.baseLanes | a : a, l !== null) {
          for (e = t.child = l.child, n = 0; e !== null; )
            n = n | e.lanes | e.childLanes, e = e.sibling;
          t.childLanes = n & ~u;
        } else t.childLanes = 0, t.child = null;
        return Ro(
          l,
          t,
          u,
          a
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Ze(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? Os(t, n) : qc(), ho(t);
      else
        return t.lanes = t.childLanes = 536870912, Ro(
          l,
          t,
          n !== null ? n.baseLanes | a : a,
          a
        );
    } else
      n !== null ? (Ze(t, n.cachePool), Os(t, n), la(), t.memoizedState = null) : (l !== null && Ze(t, null), qc(), la());
    return Cl(l, t, e, a), t.child;
  }
  function Ro(l, t, a, u) {
    var e = Mc();
    return e = e === null ? null : { parent: ql._currentValue, pool: e }, t.memoizedState = {
      baseLanes: a,
      cachePool: e
    }, l !== null && Ze(t, null), qc(), ho(t), l !== null && Yu(l, t, u, !0), null;
  }
  function nn(l, t) {
    var a = t.ref;
    if (a === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(r(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function lf(l, t, a, u, e) {
    return Ma(t), a = Yc(
      l,
      t,
      a,
      u,
      void 0,
      e
    ), u = jc(), l !== null && !Yl ? (Gc(l, t, e), Gt(l, t, e)) : (ul && u && bc(t), t.flags |= 1, Cl(l, t, a, e), t.child);
  }
  function Uo(l, t, a, u, e, n) {
    return Ma(t), t.updateQueue = null, a = Ms(
      t,
      u,
      a,
      e
    ), Ds(l), u = jc(), l !== null && !Yl ? (Gc(l, t, n), Gt(l, t, n)) : (ul && u && bc(t), t.flags |= 1, Cl(l, t, a, n), t.child);
  }
  function No(l, t, a, u, e) {
    if (Ma(t), t.stateNode === null) {
      var n = Wa, c = a.contextType;
      typeof c == "object" && c !== null && (n = Ll(c)), n = new a(u, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Ic, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = u, n.state = t.memoizedState, n.refs = {}, Uc(t), c = a.contextType, n.context = typeof c == "object" && c !== null ? Ll(c) : Wa, n.state = t.memoizedState, c = a.getDerivedStateFromProps, typeof c == "function" && (Fc(
        t,
        a,
        c,
        u
      ), n.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (c = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), c !== n.state && Ic.enqueueReplaceState(n, n.state, null), Vu(t, u, n, e), Zu(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), u = !0;
    } else if (l === null) {
      n = t.stateNode;
      var f = t.memoizedProps, i = Na(a, f);
      n.props = i;
      var h = n.context, g = a.contextType;
      c = Wa, typeof g == "object" && g !== null && (c = Ll(g));
      var _ = a.getDerivedStateFromProps;
      g = typeof _ == "function" || typeof n.getSnapshotBeforeUpdate == "function", f = t.pendingProps !== f, g || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f || h !== c) && mo(
        t,
        n,
        u,
        c
      ), Wt = !1;
      var y = t.memoizedState;
      n.state = y, Vu(t, u, n, e), Zu(), h = t.memoizedState, f || y !== h || Wt ? (typeof _ == "function" && (Fc(
        t,
        a,
        _,
        u
      ), h = t.memoizedState), (i = Wt || yo(
        t,
        a,
        i,
        u,
        y,
        h,
        c
      )) ? (g || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = u, t.memoizedState = h), n.props = u, n.state = h, n.context = c, u = i) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), u = !1);
    } else {
      n = t.stateNode, Nc(l, t), c = t.memoizedProps, g = Na(a, c), n.props = g, _ = t.pendingProps, y = n.context, h = a.contextType, i = Wa, typeof h == "object" && h !== null && (i = Ll(h)), f = a.getDerivedStateFromProps, (h = typeof f == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c !== _ || y !== i) && mo(
        t,
        n,
        u,
        i
      ), Wt = !1, y = t.memoizedState, n.state = y, Vu(t, u, n, e), Zu();
      var m = t.memoizedState;
      c !== _ || y !== m || Wt || l !== null && l.dependencies !== null && Xe(l.dependencies) ? (typeof f == "function" && (Fc(
        t,
        a,
        f,
        u
      ), m = t.memoizedState), (g = Wt || yo(
        t,
        a,
        g,
        u,
        y,
        m,
        i
      ) || l !== null && l.dependencies !== null && Xe(l.dependencies)) ? (h || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(u, m, i), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        u,
        m,
        i
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || c === l.memoizedProps && y === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && y === l.memoizedState || (t.flags |= 1024), t.memoizedProps = u, t.memoizedState = m), n.props = u, n.state = m, n.context = i, u = g) : (typeof n.componentDidUpdate != "function" || c === l.memoizedProps && y === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && y === l.memoizedState || (t.flags |= 1024), u = !1);
    }
    return n = u, nn(l, t), u = (t.flags & 128) !== 0, n || u ? (n = t.stateNode, a = u && typeof a.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && u ? (t.child = nu(
      t,
      l.child,
      null,
      e
    ), t.child = nu(
      t,
      null,
      a,
      e
    )) : Cl(l, t, a, e), t.memoizedState = n.state, l = t.child) : l = Gt(
      l,
      t,
      e
    ), l;
  }
  function po(l, t, a, u) {
    return xu(), t.flags |= 256, Cl(l, t, a, u), t.child;
  }
  var tf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function af(l) {
    return { baseLanes: l, cachePool: gs() };
  }
  function uf(l, t, a) {
    return l = l !== null ? l.childLanes & ~a : 0, t && (l |= gt), l;
  }
  function Ho(l, t, a) {
    var u = t.pendingProps, e = !1, n = (t.flags & 128) !== 0, c;
    if ((c = n) || (c = l !== null && l.memoizedState === null ? !1 : (xl.current & 2) !== 0), c && (e = !0, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (ul) {
        if (e ? Pt(t) : la(), ul) {
          var f = _l, i;
          if (i = f) {
            l: {
              for (i = f, f = At; i.nodeType !== 8; ) {
                if (!f) {
                  f = null;
                  break l;
                }
                if (i = Et(
                  i.nextSibling
                ), i === null) {
                  f = null;
                  break l;
                }
              }
              f = i;
            }
            f !== null ? (t.memoizedState = {
              dehydrated: f,
              treeContext: _a !== null ? { id: Ht, overflow: qt } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, i = et(
              18,
              null,
              null,
              0
            ), i.stateNode = f, i.return = t, t.child = i, kl = t, _l = null, i = !0) : i = !1;
          }
          i || Oa(t);
        }
        if (f = t.memoizedState, f !== null && (f = f.dehydrated, f !== null))
          return Qf(f) ? t.lanes = 32 : t.lanes = 536870912, null;
        jt(t);
      }
      return f = u.children, u = u.fallback, e ? (la(), e = t.mode, f = cn(
        { mode: "hidden", children: f },
        e
      ), u = Ea(
        u,
        e,
        a,
        null
      ), f.return = t, u.return = t, f.sibling = u, t.child = f, e = t.child, e.memoizedState = af(a), e.childLanes = uf(
        l,
        c,
        a
      ), t.memoizedState = tf, u) : (Pt(t), ef(t, f));
    }
    if (i = l.memoizedState, i !== null && (f = i.dehydrated, f !== null)) {
      if (n)
        t.flags & 256 ? (Pt(t), t.flags &= -257, t = nf(
          l,
          t,
          a
        )) : t.memoizedState !== null ? (la(), t.child = l.child, t.flags |= 128, t = null) : (la(), e = u.fallback, f = t.mode, u = cn(
          { mode: "visible", children: u.children },
          f
        ), e = Ea(
          e,
          f,
          a,
          null
        ), e.flags |= 2, u.return = t, e.return = t, u.sibling = e, t.child = u, nu(
          t,
          l.child,
          null,
          a
        ), u = t.child, u.memoizedState = af(a), u.childLanes = uf(
          l,
          c,
          a
        ), t.memoizedState = tf, t = e);
      else if (Pt(t), Qf(f)) {
        if (c = f.nextSibling && f.nextSibling.dataset, c) var h = c.dgst;
        c = h, u = Error(r(419)), u.stack = "", u.digest = c, Bu({ value: u, source: null, stack: null }), t = nf(
          l,
          t,
          a
        );
      } else if (Yl || Yu(l, t, a, !1), c = (a & l.childLanes) !== 0, Yl || c) {
        if (c = yl, c !== null && (u = a & -a, u = (u & 42) !== 0 ? 1 : Qn(u), u = (u & (c.suspendedLanes | a)) !== 0 ? 0 : u, u !== 0 && u !== i.retryLane))
          throw i.retryLane = u, ka(l, u), st(c, l, u), Ao;
        f.data === "$?" || zf(), t = nf(
          l,
          t,
          a
        );
      } else
        f.data === "$?" ? (t.flags |= 192, t.child = l.child, t = null) : (l = i.treeContext, _l = Et(
          f.nextSibling
        ), kl = t, ul = !0, za = null, At = !1, l !== null && (ht[yt++] = Ht, ht[yt++] = qt, ht[yt++] = _a, Ht = l.id, qt = l.overflow, _a = t), t = ef(
          t,
          u.children
        ), t.flags |= 4096);
      return t;
    }
    return e ? (la(), e = u.fallback, f = t.mode, i = l.child, h = i.sibling, u = pt(i, {
      mode: "hidden",
      children: u.children
    }), u.subtreeFlags = i.subtreeFlags & 65011712, h !== null ? e = pt(h, e) : (e = Ea(
      e,
      f,
      a,
      null
    ), e.flags |= 2), e.return = t, u.return = t, u.sibling = e, t.child = u, u = e, e = t.child, f = l.child.memoizedState, f === null ? f = af(a) : (i = f.cachePool, i !== null ? (h = ql._currentValue, i = i.parent !== h ? { parent: h, pool: h } : i) : i = gs(), f = {
      baseLanes: f.baseLanes | a,
      cachePool: i
    }), e.memoizedState = f, e.childLanes = uf(
      l,
      c,
      a
    ), t.memoizedState = tf, u) : (Pt(t), a = l.child, l = a.sibling, a = pt(a, {
      mode: "visible",
      children: u.children
    }), a.return = t, a.sibling = null, l !== null && (c = t.deletions, c === null ? (t.deletions = [l], t.flags |= 16) : c.push(l)), t.child = a, t.memoizedState = null, a);
  }
  function ef(l, t) {
    return t = cn(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function cn(l, t) {
    return l = et(22, l, null, t), l.lanes = 0, l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, l;
  }
  function nf(l, t, a) {
    return nu(t, l.child, null, a), l = ef(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function qo(l, t, a) {
    l.lanes |= t;
    var u = l.alternate;
    u !== null && (u.lanes |= t), Ac(l.return, t, a);
  }
  function cf(l, t, a, u, e) {
    var n = l.memoizedState;
    n === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: u,
      tail: a,
      tailMode: e
    } : (n.isBackwards = t, n.rendering = null, n.renderingStartTime = 0, n.last = u, n.tail = a, n.tailMode = e);
  }
  function xo(l, t, a) {
    var u = t.pendingProps, e = u.revealOrder, n = u.tail;
    if (Cl(l, t, u.children, a), u = xl.current, (u & 2) !== 0)
      u = u & 1 | 2, t.flags |= 128;
    else {
      if (l !== null && (l.flags & 128) !== 0)
        l: for (l = t.child; l !== null; ) {
          if (l.tag === 13)
            l.memoizedState !== null && qo(l, a, t);
          else if (l.tag === 19)
            qo(l, a, t);
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
      u &= 1;
    }
    switch (M(xl, u), e) {
      case "forwards":
        for (a = t.child, e = null; a !== null; )
          l = a.alternate, l !== null && an(l) === null && (e = a), a = a.sibling;
        a = e, a === null ? (e = t.child, t.child = null) : (e = a.sibling, a.sibling = null), cf(
          t,
          !1,
          e,
          a,
          n
        );
        break;
      case "backwards":
        for (a = null, e = t.child, t.child = null; e !== null; ) {
          if (l = e.alternate, l !== null && an(l) === null) {
            t.child = e;
            break;
          }
          l = e.sibling, e.sibling = a, a = e, e = l;
        }
        cf(
          t,
          !0,
          a,
          null,
          n
        );
        break;
      case "together":
        cf(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Gt(l, t, a) {
    if (l !== null && (t.dependencies = l.dependencies), na |= t.lanes, (a & t.childLanes) === 0)
      if (l !== null) {
        if (Yu(
          l,
          t,
          a,
          !1
        ), (a & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(r(153));
    if (t.child !== null) {
      for (l = t.child, a = pt(l, l.pendingProps), t.child = a, a.return = t; l.sibling !== null; )
        l = l.sibling, a = a.sibling = pt(l, l.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function ff(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Xe(l)));
  }
  function Q0(l, t, a) {
    switch (t.tag) {
      case 3:
        Sl(t, t.stateNode.containerInfo), kt(t, ql, l.memoizedState.cache), xu();
        break;
      case 27:
      case 5:
        Yn(t);
        break;
      case 4:
        Sl(t, t.stateNode.containerInfo);
        break;
      case 10:
        kt(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 13:
        var u = t.memoizedState;
        if (u !== null)
          return u.dehydrated !== null ? (Pt(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Ho(l, t, a) : (Pt(t), l = Gt(
            l,
            t,
            a
          ), l !== null ? l.sibling : null);
        Pt(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (u = (a & t.childLanes) !== 0, u || (Yu(
          l,
          t,
          a,
          !1
        ), u = (a & t.childLanes) !== 0), e) {
          if (u)
            return xo(
              l,
              t,
              a
            );
          t.flags |= 128;
        }
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), M(xl, xl.current), u) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Mo(l, t, a);
      case 24:
        kt(t, ql, l.memoizedState.cache);
    }
    return Gt(l, t, a);
  }
  function Bo(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Yl = !0;
      else {
        if (!ff(l, a) && (t.flags & 128) === 0)
          return Yl = !1, Q0(
            l,
            t,
            a
          );
        Yl = (l.flags & 131072) !== 0;
      }
    else
      Yl = !1, ul && (t.flags & 1048576) !== 0 && os(t, Ce, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          l = t.pendingProps;
          var u = t.elementType, e = u._init;
          if (u = e(u._payload), t.type = u, typeof u == "function")
            mc(u) ? (l = Na(u, l), t.tag = 1, t = No(
              null,
              t,
              u,
              l,
              a
            )) : (t.tag = 0, t = lf(
              null,
              t,
              u,
              l,
              a
            ));
          else {
            if (u != null) {
              if (e = u.$$typeof, e === gl) {
                t.tag = 11, t = zo(
                  null,
                  t,
                  u,
                  l,
                  a
                );
                break l;
              } else if (e === vl) {
                t.tag = 14, t = Oo(
                  null,
                  t,
                  u,
                  l,
                  a
                );
                break l;
              }
            }
            throw t = ya(u) || u, Error(r(306, t, ""));
          }
        }
        return t;
      case 0:
        return lf(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return u = t.type, e = Na(
          u,
          t.pendingProps
        ), No(
          l,
          t,
          u,
          e,
          a
        );
      case 3:
        l: {
          if (Sl(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(r(387));
          u = t.pendingProps;
          var n = t.memoizedState;
          e = n.element, Nc(l, t), Vu(t, u, null, a);
          var c = t.memoizedState;
          if (u = c.cache, kt(t, ql, u), u !== n.cache && zc(
            t,
            [ql],
            a,
            !0
          ), Zu(), u = c.element, n.isDehydrated)
            if (n = {
              element: u,
              isDehydrated: !1,
              cache: c.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = po(
                l,
                t,
                u,
                a
              );
              break l;
            } else if (u !== e) {
              e = dt(
                Error(r(424)),
                t
              ), Bu(e), t = po(
                l,
                t,
                u,
                a
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
              for (_l = Et(l.firstChild), kl = t, ul = !0, za = null, At = !0, a = vo(
                t,
                null,
                u,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (xu(), u === e) {
              t = Gt(
                l,
                t,
                a
              );
              break l;
            }
            Cl(
              l,
              t,
              u,
              a
            );
          }
          t = t.child;
        }
        return t;
      case 26:
        return nn(l, t), l === null ? (a = Cr(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : ul || (a = t.type, l = t.pendingProps, u = En(
          L.current
        ).createElement(a), u[Vl] = t, u[Wl] = l, Ql(u, a, l), Bl(u), t.stateNode = u) : t.memoizedState = Cr(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Yn(t), l === null && ul && (u = t.stateNode = Yr(
          t.type,
          t.pendingProps,
          L.current
        ), kl = t, At = !0, e = _l, sa(t.type) ? (Zf = e, _l = Et(
          u.firstChild
        )) : _l = e), Cl(
          l,
          t,
          t.pendingProps.children,
          a
        ), nn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && ul && ((e = u = _l) && (u = yv(
          u,
          t.type,
          t.pendingProps,
          At
        ), u !== null ? (t.stateNode = u, kl = t, _l = Et(
          u.firstChild
        ), At = !1, e = !0) : e = !1), e || Oa(t)), Yn(t), e = t.type, n = t.pendingProps, c = l !== null ? l.memoizedProps : null, u = n.children, Gf(e, n) ? u = null : c !== null && Gf(e, c) && (t.flags |= 32), t.memoizedState !== null && (e = Yc(
          l,
          t,
          q0,
          null,
          null,
          a
        ), re._currentValue = e), nn(l, t), Cl(l, t, u, a), t.child;
      case 6:
        return l === null && ul && ((l = a = _l) && (a = mv(
          a,
          t.pendingProps,
          At
        ), a !== null ? (t.stateNode = a, kl = t, _l = null, l = !0) : l = !1), l || Oa(t)), null;
      case 13:
        return Ho(l, t, a);
      case 4:
        return Sl(
          t,
          t.stateNode.containerInfo
        ), u = t.pendingProps, l === null ? t.child = nu(
          t,
          null,
          u,
          a
        ) : Cl(
          l,
          t,
          u,
          a
        ), t.child;
      case 11:
        return zo(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return Cl(
          l,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return Cl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return Cl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return u = t.pendingProps, kt(t, t.type, u.value), Cl(
          l,
          t,
          u.children,
          a
        ), t.child;
      case 9:
        return e = t.type._context, u = t.pendingProps.children, Ma(t), e = Ll(e), u = u(e), t.flags |= 1, Cl(l, t, u, a), t.child;
      case 14:
        return Oo(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return Do(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return xo(l, t, a);
      case 31:
        return u = t.pendingProps, a = t.mode, u = {
          mode: u.mode,
          children: u.children
        }, l === null ? (a = cn(
          u,
          a
        ), a.ref = t.ref, t.child = a, a.return = t, t = a) : (a = pt(l.child, u), a.ref = t.ref, t.child = a, a.return = t, t = a), t;
      case 22:
        return Mo(l, t, a);
      case 24:
        return Ma(t), u = Ll(ql), l === null ? (e = Mc(), e === null && (e = yl, n = Oc(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= a), e = n), t.memoizedState = {
          parent: u,
          cache: e
        }, Uc(t), kt(t, ql, e)) : ((l.lanes & a) !== 0 && (Nc(l, t), Vu(t, null, null, a), Zu()), e = l.memoizedState, n = t.memoizedState, e.parent !== u ? (e = { parent: u, cache: u }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), kt(t, ql, u)) : (u = n.cache, kt(t, ql, u), u !== e.cache && zc(
          t,
          [ql],
          a,
          !0
        ))), Cl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function Ct(l) {
    l.flags |= 4;
  }
  function Yo(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Lr(t)) {
      if (t = mt.current, t !== null && ((P & 4194048) === P ? zt !== null : (P & 62914560) !== P && (P & 536870912) === 0 || t !== zt))
        throw Xu = Rc, Ss;
      l.flags |= 8192;
    }
  }
  function fn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? vi() : 536870912, l.lanes |= t, su |= t);
  }
  function $u(l, t) {
    if (!ul)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), t = t.sibling;
          a === null ? l.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = l.tail;
          for (var u = null; a !== null; )
            a.alternate !== null && (u = a), a = a.sibling;
          u === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : u.sibling = null;
      }
  }
  function Tl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, a = 0, u = 0;
    if (t)
      for (var e = l.child; e !== null; )
        a |= e.lanes | e.childLanes, u |= e.subtreeFlags & 65011712, u |= e.flags & 65011712, e.return = l, e = e.sibling;
    else
      for (e = l.child; e !== null; )
        a |= e.lanes | e.childLanes, u |= e.subtreeFlags, u |= e.flags, e.return = l, e = e.sibling;
    return l.subtreeFlags |= u, l.childLanes = a, t;
  }
  function Z0(l, t, a) {
    var u = t.pendingProps;
    switch (Tc(t), t.tag) {
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
        return Tl(t), null;
      case 1:
        return Tl(t), null;
      case 3:
        return a = t.stateNode, u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), Bt(ql), Lt(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (l === null || l.child === null) && (qu(t) ? Ct(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, vs())), Tl(t), null;
      case 26:
        return a = t.memoizedState, l === null ? (Ct(t), a !== null ? (Tl(t), Yo(t, a)) : (Tl(t), t.flags &= -16777217)) : a ? a !== l.memoizedState ? (Ct(t), Tl(t), Yo(t, a)) : (Tl(t), t.flags &= -16777217) : (l.memoizedProps !== u && Ct(t), Tl(t), t.flags &= -16777217), null;
      case 27:
        Se(t), a = L.current;
        var e = t.type;
        if (l !== null && t.stateNode != null)
          l.memoizedProps !== u && Ct(t);
        else {
          if (!u) {
            if (t.stateNode === null)
              throw Error(r(166));
            return Tl(t), null;
          }
          l = j.current, qu(t) ? rs(t) : (l = Yr(e, u, a), t.stateNode = l, Ct(t));
        }
        return Tl(t), null;
      case 5:
        if (Se(t), a = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== u && Ct(t);
        else {
          if (!u) {
            if (t.stateNode === null)
              throw Error(r(166));
            return Tl(t), null;
          }
          if (l = j.current, qu(t))
            rs(t);
          else {
            switch (e = En(
              L.current
            ), l) {
              case 1:
                l = e.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                l = e.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    l = e.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    l = e.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    l = e.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                    break;
                  case "select":
                    l = typeof u.is == "string" ? e.createElement("select", { is: u.is }) : e.createElement("select"), u.multiple ? l.multiple = !0 : u.size && (l.size = u.size);
                    break;
                  default:
                    l = typeof u.is == "string" ? e.createElement(a, { is: u.is }) : e.createElement(a);
                }
            }
            l[Vl] = t, l[Wl] = u;
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
            l: switch (Ql(l, a, u), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!u.autoFocus;
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
        return Tl(t), t.flags &= -16777217, null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== u && Ct(t);
        else {
          if (typeof u != "string" && t.stateNode === null)
            throw Error(r(166));
          if (l = L.current, qu(t)) {
            if (l = t.stateNode, a = t.memoizedProps, u = null, e = kl, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  u = e.memoizedProps;
              }
            l[Vl] = t, l = !!(l.nodeValue === a || u !== null && u.suppressHydrationWarning === !0 || Ur(l.nodeValue, a)), l || Oa(t);
          } else
            l = En(l).createTextNode(
              u
            ), l[Vl] = t, t.stateNode = l;
        }
        return Tl(t), null;
      case 13:
        if (u = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = qu(t), u !== null && u.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(r(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
              e[Vl] = t;
            } else
              xu(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Tl(t), e = !1;
          } else
            e = vs(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = !0;
          if (!e)
            return t.flags & 256 ? (jt(t), t) : (jt(t), null);
        }
        if (jt(t), (t.flags & 128) !== 0)
          return t.lanes = a, t;
        if (a = u !== null, l = l !== null && l.memoizedState !== null, a) {
          u = t.child, e = null, u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (e = u.alternate.memoizedState.cachePool.pool);
          var n = null;
          u.memoizedState !== null && u.memoizedState.cachePool !== null && (n = u.memoizedState.cachePool.pool), n !== e && (u.flags |= 2048);
        }
        return a !== l && a && (t.child.flags |= 8192), fn(t, t.updateQueue), Tl(t), null;
      case 4:
        return Lt(), l === null && qf(t.stateNode.containerInfo), Tl(t), null;
      case 10:
        return Bt(t.type), Tl(t), null;
      case 19:
        if (N(xl), e = t.memoizedState, e === null) return Tl(t), null;
        if (u = (t.flags & 128) !== 0, n = e.rendering, n === null)
          if (u) $u(e, !1);
          else {
            if (Al !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = an(l), n !== null) {
                  for (t.flags |= 128, $u(e, !1), l = n.updateQueue, t.updateQueue = l, fn(t, l), t.subtreeFlags = 0, l = a, a = t.child; a !== null; )
                    ss(a, l), a = a.sibling;
                  return M(
                    xl,
                    xl.current & 1 | 2
                  ), t.child;
                }
                l = l.sibling;
              }
            e.tail !== null && _t() > rn && (t.flags |= 128, u = !0, $u(e, !1), t.lanes = 4194304);
          }
        else {
          if (!u)
            if (l = an(n), l !== null) {
              if (t.flags |= 128, u = !0, l = l.updateQueue, t.updateQueue = l, fn(t, l), $u(e, !0), e.tail === null && e.tailMode === "hidden" && !n.alternate && !ul)
                return Tl(t), null;
            } else
              2 * _t() - e.renderingStartTime > rn && a !== 536870912 && (t.flags |= 128, u = !0, $u(e, !1), t.lanes = 4194304);
          e.isBackwards ? (n.sibling = t.child, t.child = n) : (l = e.last, l !== null ? l.sibling = n : t.child = n, e.last = n);
        }
        return e.tail !== null ? (t = e.tail, e.rendering = t, e.tail = t.sibling, e.renderingStartTime = _t(), t.sibling = null, l = xl.current, M(xl, u ? l & 1 | 2 : l & 1), t) : (Tl(t), null);
      case 22:
      case 23:
        return jt(t), xc(), u = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== u && (t.flags |= 8192) : u && (t.flags |= 8192), u ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Tl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Tl(t), a = t.updateQueue, a !== null && fn(t, a.retryQueue), a = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), u = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (u = t.memoizedState.cachePool.pool), u !== a && (t.flags |= 2048), l !== null && N(Ra), null;
      case 24:
        return a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Bt(ql), Tl(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function V0(l, t) {
    switch (Tc(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return Bt(ql), Lt(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Se(t), null;
      case 13:
        if (jt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(r(340));
          xu();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return N(xl), null;
      case 4:
        return Lt(), null;
      case 10:
        return Bt(t.type), null;
      case 22:
      case 23:
        return jt(t), xc(), l !== null && N(Ra), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Bt(ql), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function jo(l, t) {
    switch (Tc(t), t.tag) {
      case 3:
        Bt(ql), Lt();
        break;
      case 26:
      case 27:
      case 5:
        Se(t);
        break;
      case 4:
        Lt();
        break;
      case 13:
        jt(t);
        break;
      case 19:
        N(xl);
        break;
      case 10:
        Bt(t.type);
        break;
      case 22:
      case 23:
        jt(t), xc(), l !== null && N(Ra);
        break;
      case 24:
        Bt(ql);
    }
  }
  function Fu(l, t) {
    try {
      var a = t.updateQueue, u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var e = u.next;
        a = e;
        do {
          if ((a.tag & l) === l) {
            u = void 0;
            var n = a.create, c = a.inst;
            u = n(), c.destroy = u;
          }
          a = a.next;
        } while (a !== e);
      }
    } catch (f) {
      rl(t, t.return, f);
    }
  }
  function ta(l, t, a) {
    try {
      var u = t.updateQueue, e = u !== null ? u.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        u = n;
        do {
          if ((u.tag & l) === l) {
            var c = u.inst, f = c.destroy;
            if (f !== void 0) {
              c.destroy = void 0, e = t;
              var i = a, h = f;
              try {
                h();
              } catch (g) {
                rl(
                  e,
                  i,
                  g
                );
              }
            }
          }
          u = u.next;
        } while (u !== n);
      }
    } catch (g) {
      rl(t, t.return, g);
    }
  }
  function Go(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        zs(t, a);
      } catch (u) {
        rl(l, l.return, u);
      }
    }
  }
  function Co(l, t, a) {
    a.props = Na(
      l.type,
      l.memoizedProps
    ), a.state = l.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (u) {
      rl(l, t, u);
    }
  }
  function Iu(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var u = l.stateNode;
            break;
          case 30:
            u = l.stateNode;
            break;
          default:
            u = l.stateNode;
        }
        typeof a == "function" ? l.refCleanup = a(u) : a.current = u;
      }
    } catch (e) {
      rl(l, t, e);
    }
  }
  function Ot(l, t) {
    var a = l.ref, u = l.refCleanup;
    if (a !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (e) {
          rl(l, t, e);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (e) {
          rl(l, t, e);
        }
      else a.current = null;
  }
  function Xo(l) {
    var t = l.type, a = l.memoizedProps, u = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && u.focus();
          break l;
        case "img":
          a.src ? u.src = a.src : a.srcSet && (u.srcset = a.srcSet);
      }
    } catch (e) {
      rl(l, l.return, e);
    }
  }
  function sf(l, t, a) {
    try {
      var u = l.stateNode;
      ov(u, l.type, a, t), u[Wl] = t;
    } catch (e) {
      rl(l, l.return, e);
    }
  }
  function Qo(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && sa(l.type) || l.tag === 4;
  }
  function of(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Qo(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && sa(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function rf(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      l = l.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(l, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(l), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Tn));
    else if (u !== 4 && (u === 27 && sa(l.type) && (a = l.stateNode, t = null), l = l.child, l !== null))
      for (rf(l, t, a), l = l.sibling; l !== null; )
        rf(l, t, a), l = l.sibling;
  }
  function sn(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      l = l.stateNode, t ? a.insertBefore(l, t) : a.appendChild(l);
    else if (u !== 4 && (u === 27 && sa(l.type) && (a = l.stateNode), l = l.child, l !== null))
      for (sn(l, t, a), l = l.sibling; l !== null; )
        sn(l, t, a), l = l.sibling;
  }
  function Zo(l) {
    var t = l.stateNode, a = l.memoizedProps;
    try {
      for (var u = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      Ql(t, u, a), t[Vl] = l, t[Wl] = a;
    } catch (n) {
      rl(l, l.return, n);
    }
  }
  var Xt = !1, Dl = !1, df = !1, Vo = typeof WeakSet == "function" ? WeakSet : Set, jl = null;
  function L0(l, t) {
    if (l = l.containerInfo, Yf = Mn, l = Pi(l), sc(l)) {
      if ("selectionStart" in l)
        var a = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          a = (a = l.ownerDocument) && a.defaultView || window;
          var u = a.getSelection && a.getSelection();
          if (u && u.rangeCount !== 0) {
            a = u.anchorNode;
            var e = u.anchorOffset, n = u.focusNode;
            u = u.focusOffset;
            try {
              a.nodeType, n.nodeType;
            } catch {
              a = null;
              break l;
            }
            var c = 0, f = -1, i = -1, h = 0, g = 0, _ = l, y = null;
            t: for (; ; ) {
              for (var m; _ !== a || e !== 0 && _.nodeType !== 3 || (f = c + e), _ !== n || u !== 0 && _.nodeType !== 3 || (i = c + u), _.nodeType === 3 && (c += _.nodeValue.length), (m = _.firstChild) !== null; )
                y = _, _ = m;
              for (; ; ) {
                if (_ === l) break t;
                if (y === a && ++h === e && (f = c), y === n && ++g === u && (i = c), (m = _.nextSibling) !== null) break;
                _ = y, y = _.parentNode;
              }
              _ = m;
            }
            a = f === -1 || i === -1 ? null : { start: f, end: i };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (jf = { focusedElem: l, selectionRange: a }, Mn = !1, jl = t; jl !== null; )
      if (t = jl, l = t.child, (t.subtreeFlags & 1024) !== 0 && l !== null)
        l.return = t, jl = l;
      else
        for (; jl !== null; ) {
          switch (t = jl, n = t.alternate, l = t.flags, t.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                l = void 0, a = t, e = n.memoizedProps, n = n.memoizedState, u = a.stateNode;
                try {
                  var Z = Na(
                    a.type,
                    e,
                    a.elementType === a.type
                  );
                  l = u.getSnapshotBeforeUpdate(
                    Z,
                    n
                  ), u.__reactInternalSnapshotBeforeUpdate = l;
                } catch (G) {
                  rl(
                    a,
                    a.return,
                    G
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = t.stateNode.containerInfo, a = l.nodeType, a === 9)
                  Xf(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Xf(l);
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
              if ((l & 1024) !== 0) throw Error(r(163));
          }
          if (l = t.sibling, l !== null) {
            l.return = t.return, jl = l;
            break;
          }
          jl = t.return;
        }
  }
  function Lo(l, t, a) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        aa(l, a), u & 4 && Fu(5, a);
        break;
      case 1:
        if (aa(l, a), u & 4)
          if (l = a.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (c) {
              rl(a, a.return, c);
            }
          else {
            var e = Na(
              a.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              l.componentDidUpdate(
                e,
                t,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (c) {
              rl(
                a,
                a.return,
                c
              );
            }
          }
        u & 64 && Go(a), u & 512 && Iu(a, a.return);
        break;
      case 3:
        if (aa(l, a), u & 64 && (l = a.updateQueue, l !== null)) {
          if (t = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            zs(l, t);
          } catch (c) {
            rl(a, a.return, c);
          }
        }
        break;
      case 27:
        t === null && u & 4 && Zo(a);
      case 26:
      case 5:
        aa(l, a), t === null && u & 4 && Xo(a), u & 512 && Iu(a, a.return);
        break;
      case 12:
        aa(l, a);
        break;
      case 13:
        aa(l, a), u & 4 && wo(l, a), u & 64 && (l = a.memoizedState, l !== null && (l = l.dehydrated, l !== null && (a = P0.bind(
          null,
          a
        ), gv(l, a))));
        break;
      case 22:
        if (u = a.memoizedState !== null || Xt, !u) {
          t = t !== null && t.memoizedState !== null || Dl, e = Xt;
          var n = Dl;
          Xt = u, (Dl = t) && !n ? ua(
            l,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : aa(l, a), Xt = e, Dl = n;
        }
        break;
      case 30:
        break;
      default:
        aa(l, a);
    }
  }
  function Ko(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, Ko(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && Ln(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var bl = null, Il = !1;
  function Qt(l, t, a) {
    for (a = a.child; a !== null; )
      Jo(l, t, a), a = a.sibling;
  }
  function Jo(l, t, a) {
    if (tt && typeof tt.onCommitFiberUnmount == "function")
      try {
        tt.onCommitFiberUnmount(bu, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        Dl || Ot(a, t), Qt(
          l,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        Dl || Ot(a, t);
        var u = bl, e = Il;
        sa(a.type) && (bl = a.stateNode, Il = !1), Qt(
          l,
          t,
          a
        ), fe(a.stateNode), bl = u, Il = e;
        break;
      case 5:
        Dl || Ot(a, t);
      case 6:
        if (u = bl, e = Il, bl = null, Qt(
          l,
          t,
          a
        ), bl = u, Il = e, bl !== null)
          if (Il)
            try {
              (bl.nodeType === 9 ? bl.body : bl.nodeName === "HTML" ? bl.ownerDocument.body : bl).removeChild(a.stateNode);
            } catch (n) {
              rl(
                a,
                t,
                n
              );
            }
          else
            try {
              bl.removeChild(a.stateNode);
            } catch (n) {
              rl(
                a,
                t,
                n
              );
            }
        break;
      case 18:
        bl !== null && (Il ? (l = bl, xr(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          a.stateNode
        ), ye(l)) : xr(bl, a.stateNode));
        break;
      case 4:
        u = bl, e = Il, bl = a.stateNode.containerInfo, Il = !0, Qt(
          l,
          t,
          a
        ), bl = u, Il = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Dl || ta(2, a, t), Dl || ta(4, a, t), Qt(
          l,
          t,
          a
        );
        break;
      case 1:
        Dl || (Ot(a, t), u = a.stateNode, typeof u.componentWillUnmount == "function" && Co(
          a,
          t,
          u
        )), Qt(
          l,
          t,
          a
        );
        break;
      case 21:
        Qt(
          l,
          t,
          a
        );
        break;
      case 22:
        Dl = (u = Dl) || a.memoizedState !== null, Qt(
          l,
          t,
          a
        ), Dl = u;
        break;
      default:
        Qt(
          l,
          t,
          a
        );
    }
  }
  function wo(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        ye(l);
      } catch (a) {
        rl(t, t.return, a);
      }
  }
  function K0(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Vo()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new Vo()), t;
      default:
        throw Error(r(435, l.tag));
    }
  }
  function vf(l, t) {
    var a = K0(l);
    t.forEach(function(u) {
      var e = lv.bind(null, l, u);
      a.has(u) || (a.add(u), u.then(e, e));
    });
  }
  function nt(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var u = 0; u < a.length; u++) {
        var e = a[u], n = l, c = t, f = c;
        l: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (sa(f.type)) {
                bl = f.stateNode, Il = !1;
                break l;
              }
              break;
            case 5:
              bl = f.stateNode, Il = !1;
              break l;
            case 3:
            case 4:
              bl = f.stateNode.containerInfo, Il = !0;
              break l;
          }
          f = f.return;
        }
        if (bl === null) throw Error(r(160));
        Jo(n, c, e), bl = null, Il = !1, n = e.alternate, n !== null && (n.return = null), e.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        ko(t, l), t = t.sibling;
  }
  var Tt = null;
  function ko(l, t) {
    var a = l.alternate, u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        nt(t, l), ct(l), u & 4 && (ta(3, l, l.return), Fu(3, l), ta(5, l, l.return));
        break;
      case 1:
        nt(t, l), ct(l), u & 512 && (Dl || a === null || Ot(a, a.return)), u & 64 && Xt && (l = l.updateQueue, l !== null && (u = l.callbacks, u !== null && (a = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = a === null ? u : a.concat(u))));
        break;
      case 26:
        var e = Tt;
        if (nt(t, l), ct(l), u & 512 && (Dl || a === null || Ot(a, a.return)), u & 4) {
          var n = a !== null ? a.memoizedState : null;
          if (u = l.memoizedState, a === null)
            if (u === null)
              if (l.stateNode === null) {
                l: {
                  u = l.type, a = l.memoizedProps, e = e.ownerDocument || e;
                  t: switch (u) {
                    case "title":
                      n = e.getElementsByTagName("title")[0], (!n || n[_u] || n[Vl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(u), e.head.insertBefore(
                        n,
                        e.querySelector("head > title")
                      )), Ql(n, u, a), n[Vl] = l, Bl(n), u = n;
                      break l;
                    case "link":
                      var c = Zr(
                        "link",
                        "href",
                        e
                      ).get(u + (a.href || ""));
                      if (c) {
                        for (var f = 0; f < c.length; f++)
                          if (n = c[f], n.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && n.getAttribute("rel") === (a.rel == null ? null : a.rel) && n.getAttribute("title") === (a.title == null ? null : a.title) && n.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            c.splice(f, 1);
                            break t;
                          }
                      }
                      n = e.createElement(u), Ql(n, u, a), e.head.appendChild(n);
                      break;
                    case "meta":
                      if (c = Zr(
                        "meta",
                        "content",
                        e
                      ).get(u + (a.content || ""))) {
                        for (f = 0; f < c.length; f++)
                          if (n = c[f], n.getAttribute("content") === (a.content == null ? null : "" + a.content) && n.getAttribute("name") === (a.name == null ? null : a.name) && n.getAttribute("property") === (a.property == null ? null : a.property) && n.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && n.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            c.splice(f, 1);
                            break t;
                          }
                      }
                      n = e.createElement(u), Ql(n, u, a), e.head.appendChild(n);
                      break;
                    default:
                      throw Error(r(468, u));
                  }
                  n[Vl] = l, Bl(n), u = n;
                }
                l.stateNode = u;
              } else
                Vr(
                  e,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = Qr(
                e,
                u,
                l.memoizedProps
              );
          else
            n !== u ? (n === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : n.count--, u === null ? Vr(
              e,
              l.type,
              l.stateNode
            ) : Qr(
              e,
              u,
              l.memoizedProps
            )) : u === null && l.stateNode !== null && sf(
              l,
              l.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        nt(t, l), ct(l), u & 512 && (Dl || a === null || Ot(a, a.return)), a !== null && u & 4 && sf(
          l,
          l.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (nt(t, l), ct(l), u & 512 && (Dl || a === null || Ot(a, a.return)), l.flags & 32) {
          e = l.stateNode;
          try {
            Qa(e, "");
          } catch (m) {
            rl(l, l.return, m);
          }
        }
        u & 4 && l.stateNode != null && (e = l.memoizedProps, sf(
          l,
          e,
          a !== null ? a.memoizedProps : e
        )), u & 1024 && (df = !0);
        break;
      case 6:
        if (nt(t, l), ct(l), u & 4) {
          if (l.stateNode === null)
            throw Error(r(162));
          u = l.memoizedProps, a = l.stateNode;
          try {
            a.nodeValue = u;
          } catch (m) {
            rl(l, l.return, m);
          }
        }
        break;
      case 3:
        if (zn = null, e = Tt, Tt = _n(t.containerInfo), nt(t, l), Tt = e, ct(l), u & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            ye(t.containerInfo);
          } catch (m) {
            rl(l, l.return, m);
          }
        df && (df = !1, Wo(l));
        break;
      case 4:
        u = Tt, Tt = _n(
          l.stateNode.containerInfo
        ), nt(t, l), ct(l), Tt = u;
        break;
      case 12:
        nt(t, l), ct(l);
        break;
      case 13:
        nt(t, l), ct(l), l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (bf = _t()), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, vf(l, u)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var i = a !== null && a.memoizedState !== null, h = Xt, g = Dl;
        if (Xt = h || e, Dl = g || i, nt(t, l), Dl = g, Xt = h, ct(l), u & 8192)
          l: for (t = l.stateNode, t._visibility = e ? t._visibility & -2 : t._visibility | 1, e && (a === null || i || Xt || Dl || pa(l)), a = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                i = a = t;
                try {
                  if (n = i.stateNode, e)
                    c = n.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                  else {
                    f = i.stateNode;
                    var _ = i.memoizedProps.style, y = _ != null && _.hasOwnProperty("display") ? _.display : null;
                    f.style.display = y == null || typeof y == "boolean" ? "" : ("" + y).trim();
                  }
                } catch (m) {
                  rl(i, i.return, m);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                i = t;
                try {
                  i.stateNode.nodeValue = e ? "" : i.memoizedProps;
                } catch (m) {
                  rl(i, i.return, m);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              a === t && (a = null), t = t.return;
            }
            a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
          }
        u & 4 && (u = l.updateQueue, u !== null && (a = u.retryQueue, a !== null && (u.retryQueue = null, vf(l, a))));
        break;
      case 19:
        nt(t, l), ct(l), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, vf(l, u)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        nt(t, l), ct(l);
    }
  }
  function ct(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, u = l.return; u !== null; ) {
          if (Qo(u)) {
            a = u;
            break;
          }
          u = u.return;
        }
        if (a == null) throw Error(r(160));
        switch (a.tag) {
          case 27:
            var e = a.stateNode, n = of(l);
            sn(l, n, e);
            break;
          case 5:
            var c = a.stateNode;
            a.flags & 32 && (Qa(c, ""), a.flags &= -33);
            var f = of(l);
            sn(l, f, c);
            break;
          case 3:
          case 4:
            var i = a.stateNode.containerInfo, h = of(l);
            rf(
              l,
              h,
              i
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (g) {
        rl(l, l.return, g);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function Wo(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        Wo(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function aa(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Lo(l, t.alternate, t), t = t.sibling;
  }
  function pa(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ta(4, t, t.return), pa(t);
          break;
        case 1:
          Ot(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Co(
            t,
            t.return,
            a
          ), pa(t);
          break;
        case 27:
          fe(t.stateNode);
        case 26:
        case 5:
          Ot(t, t.return), pa(t);
          break;
        case 22:
          t.memoizedState === null && pa(t);
          break;
        case 30:
          pa(t);
          break;
        default:
          pa(t);
      }
      l = l.sibling;
    }
  }
  function ua(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var u = t.alternate, e = l, n = t, c = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ua(
            e,
            n,
            a
          ), Fu(4, n);
          break;
        case 1:
          if (ua(
            e,
            n,
            a
          ), u = n, e = u.stateNode, typeof e.componentDidMount == "function")
            try {
              e.componentDidMount();
            } catch (h) {
              rl(u, u.return, h);
            }
          if (u = n, e = u.updateQueue, e !== null) {
            var f = u.stateNode;
            try {
              var i = e.shared.hiddenCallbacks;
              if (i !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++)
                  As(i[e], f);
            } catch (h) {
              rl(u, u.return, h);
            }
          }
          a && c & 64 && Go(n), Iu(n, n.return);
          break;
        case 27:
          Zo(n);
        case 26:
        case 5:
          ua(
            e,
            n,
            a
          ), a && u === null && c & 4 && Xo(n), Iu(n, n.return);
          break;
        case 12:
          ua(
            e,
            n,
            a
          );
          break;
        case 13:
          ua(
            e,
            n,
            a
          ), a && c & 4 && wo(e, n);
          break;
        case 22:
          n.memoizedState === null && ua(
            e,
            n,
            a
          ), Iu(n, n.return);
          break;
        case 30:
          break;
        default:
          ua(
            e,
            n,
            a
          );
      }
      t = t.sibling;
    }
  }
  function hf(l, t) {
    var a = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (l != null && l.refCount++, a != null && ju(a));
  }
  function yf(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && ju(l));
  }
  function Dt(l, t, a, u) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        $o(
          l,
          t,
          a,
          u
        ), t = t.sibling;
  }
  function $o(l, t, a, u) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Dt(
          l,
          t,
          a,
          u
        ), e & 2048 && Fu(9, t);
        break;
      case 1:
        Dt(
          l,
          t,
          a,
          u
        );
        break;
      case 3:
        Dt(
          l,
          t,
          a,
          u
        ), e & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && ju(l)));
        break;
      case 12:
        if (e & 2048) {
          Dt(
            l,
            t,
            a,
            u
          ), l = t.stateNode;
          try {
            var n = t.memoizedProps, c = n.id, f = n.onPostCommit;
            typeof f == "function" && f(
              c,
              t.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (i) {
            rl(t, t.return, i);
          }
        } else
          Dt(
            l,
            t,
            a,
            u
          );
        break;
      case 13:
        Dt(
          l,
          t,
          a,
          u
        );
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, c = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? Dt(
          l,
          t,
          a,
          u
        ) : Pu(l, t) : n._visibility & 2 ? Dt(
          l,
          t,
          a,
          u
        ) : (n._visibility |= 2, cu(
          l,
          t,
          a,
          u,
          (t.subtreeFlags & 10256) !== 0
        )), e & 2048 && hf(c, t);
        break;
      case 24:
        Dt(
          l,
          t,
          a,
          u
        ), e & 2048 && yf(t.alternate, t);
        break;
      default:
        Dt(
          l,
          t,
          a,
          u
        );
    }
  }
  function cu(l, t, a, u, e) {
    for (e = e && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var n = l, c = t, f = a, i = u, h = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          cu(
            n,
            c,
            f,
            i,
            e
          ), Fu(8, c);
          break;
        case 23:
          break;
        case 22:
          var g = c.stateNode;
          c.memoizedState !== null ? g._visibility & 2 ? cu(
            n,
            c,
            f,
            i,
            e
          ) : Pu(
            n,
            c
          ) : (g._visibility |= 2, cu(
            n,
            c,
            f,
            i,
            e
          )), e && h & 2048 && hf(
            c.alternate,
            c
          );
          break;
        case 24:
          cu(
            n,
            c,
            f,
            i,
            e
          ), e && h & 2048 && yf(c.alternate, c);
          break;
        default:
          cu(
            n,
            c,
            f,
            i,
            e
          );
      }
      t = t.sibling;
    }
  }
  function Pu(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = l, u = t, e = u.flags;
        switch (u.tag) {
          case 22:
            Pu(a, u), e & 2048 && hf(
              u.alternate,
              u
            );
            break;
          case 24:
            Pu(a, u), e & 2048 && yf(u.alternate, u);
            break;
          default:
            Pu(a, u);
        }
        t = t.sibling;
      }
  }
  var le = 8192;
  function fu(l) {
    if (l.subtreeFlags & le)
      for (l = l.child; l !== null; )
        Fo(l), l = l.sibling;
  }
  function Fo(l) {
    switch (l.tag) {
      case 26:
        fu(l), l.flags & le && l.memoizedState !== null && Nv(
          Tt,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        fu(l);
        break;
      case 3:
      case 4:
        var t = Tt;
        Tt = _n(l.stateNode.containerInfo), fu(l), Tt = t;
        break;
      case 22:
        l.memoizedState === null && (t = l.alternate, t !== null && t.memoizedState !== null ? (t = le, le = 16777216, fu(l), le = t) : fu(l));
        break;
      default:
        fu(l);
    }
  }
  function Io(l) {
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
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          jl = u, lr(
            u,
            l
          );
        }
      Io(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Po(l), l = l.sibling;
  }
  function Po(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        te(l), l.flags & 2048 && ta(9, l, l.return);
        break;
      case 3:
        te(l);
        break;
      case 12:
        te(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, on(l)) : te(l);
        break;
      default:
        te(l);
    }
  }
  function on(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          jl = u, lr(
            u,
            l
          );
        }
      Io(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          ta(8, t, t.return), on(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, on(t));
          break;
        default:
          on(t);
      }
      l = l.sibling;
    }
  }
  function lr(l, t) {
    for (; jl !== null; ) {
      var a = jl;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ta(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var u = a.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          ju(a.memoizedState.cache);
      }
      if (u = a.child, u !== null) u.return = a, jl = u;
      else
        l: for (a = l; jl !== null; ) {
          u = jl;
          var e = u.sibling, n = u.return;
          if (Ko(u), u === a) {
            jl = null;
            break l;
          }
          if (e !== null) {
            e.return = n, jl = e;
            break l;
          }
          jl = n;
        }
    }
  }
  var J0 = {
    getCacheForType: function(l) {
      var t = Ll(ql), a = t.data.get(l);
      return a === void 0 && (a = l(), t.data.set(l, a)), a;
    }
  }, w0 = typeof WeakMap == "function" ? WeakMap : Map, el = 0, yl = null, k = null, P = 0, nl = 0, ft = null, ea = !1, iu = !1, mf = !1, Zt = 0, Al = 0, na = 0, Ha = 0, gf = 0, gt = 0, su = 0, ae = null, Pl = null, Sf = !1, bf = 0, rn = 1 / 0, dn = null, ca = null, Xl = 0, fa = null, ou = null, ru = 0, Tf = 0, Ef = null, tr = null, ue = 0, _f = null;
  function it() {
    if ((el & 2) !== 0 && P !== 0)
      return P & -P;
    if (S.T !== null) {
      var l = Ia;
      return l !== 0 ? l : Uf();
    }
    return mi();
  }
  function ar() {
    gt === 0 && (gt = (P & 536870912) === 0 || ul ? di() : 536870912);
    var l = mt.current;
    return l !== null && (l.flags |= 32), gt;
  }
  function st(l, t, a) {
    (l === yl && (nl === 2 || nl === 9) || l.cancelPendingCommit !== null) && (du(l, 0), ia(
      l,
      P,
      gt,
      !1
    )), Eu(l, a), ((el & 2) === 0 || l !== yl) && (l === yl && ((el & 2) === 0 && (Ha |= a), Al === 4 && ia(
      l,
      P,
      gt,
      !1
    )), Mt(l));
  }
  function ur(l, t, a) {
    if ((el & 6) !== 0) throw Error(r(327));
    var u = !a && (t & 124) === 0 && (t & l.expiredLanes) === 0 || Tu(l, t), e = u ? $0(l, t) : Of(l, t, !0), n = u;
    do {
      if (e === 0) {
        iu && !u && ia(l, t, 0, !1);
        break;
      } else {
        if (a = l.current.alternate, n && !k0(a)) {
          e = Of(l, t, !1), n = !1;
          continue;
        }
        if (e === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n)
            var c = 0;
          else
            c = l.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
          if (c !== 0) {
            t = c;
            l: {
              var f = l;
              e = ae;
              var i = f.current.memoizedState.isDehydrated;
              if (i && (du(f, c).flags |= 256), c = Of(
                f,
                c,
                !1
              ), c !== 2) {
                if (mf && !i) {
                  f.errorRecoveryDisabledLanes |= n, Ha |= n, e = 4;
                  break l;
                }
                n = Pl, Pl = e, n !== null && (Pl === null ? Pl = n : Pl.push.apply(
                  Pl,
                  n
                ));
              }
              e = c;
            }
            if (n = !1, e !== 2) continue;
          }
        }
        if (e === 1) {
          du(l, 0), ia(l, t, 0, !0);
          break;
        }
        l: {
          switch (u = l, n = e, n) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ia(
                u,
                t,
                gt,
                !ea
              );
              break l;
            case 2:
              Pl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && (e = bf + 300 - _t(), 10 < e)) {
            if (ia(
              u,
              t,
              gt,
              !ea
            ), _e(u, 0, !0) !== 0) break l;
            u.timeoutHandle = Hr(
              er.bind(
                null,
                u,
                a,
                Pl,
                dn,
                Sf,
                t,
                gt,
                Ha,
                su,
                ea,
                n,
                2,
                -0,
                0
              ),
              e
            );
            break l;
          }
          er(
            u,
            a,
            Pl,
            dn,
            Sf,
            t,
            gt,
            Ha,
            su,
            ea,
            n,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Mt(l);
  }
  function er(l, t, a, u, e, n, c, f, i, h, g, _, y, m) {
    if (l.timeoutHandle = -1, _ = t.subtreeFlags, (_ & 8192 || (_ & 16785408) === 16785408) && (oe = { stylesheets: null, count: 0, unsuspend: Uv }, Fo(t), _ = pv(), _ !== null)) {
      l.cancelPendingCommit = _(
        rr.bind(
          null,
          l,
          t,
          n,
          a,
          u,
          e,
          c,
          f,
          i,
          g,
          1,
          y,
          m
        )
      ), ia(l, n, c, !h);
      return;
    }
    rr(
      l,
      t,
      n,
      a,
      u,
      e,
      c,
      f,
      i
    );
  }
  function k0(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var u = 0; u < a.length; u++) {
          var e = a[u], n = e.getSnapshot;
          e = e.value;
          try {
            if (!ut(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = t.child, t.subtreeFlags & 16384 && a !== null)
        a.return = t, t = a;
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
  function ia(l, t, a, u) {
    t &= ~gf, t &= ~Ha, l.suspendedLanes |= t, l.pingedLanes &= ~t, u && (l.warmLanes |= t), u = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - at(e), c = 1 << n;
      u[n] = -1, e &= ~c;
    }
    a !== 0 && hi(l, a, t);
  }
  function vn() {
    return (el & 6) === 0 ? (ee(0), !1) : !0;
  }
  function Af() {
    if (k !== null) {
      if (nl === 0)
        var l = k.return;
      else
        l = k, xt = Da = null, Cc(l), eu = null, ku = 0, l = k;
      for (; l !== null; )
        jo(l.alternate, l), l = l.return;
      k = null;
    }
  }
  function du(l, t) {
    var a = l.timeoutHandle;
    a !== -1 && (l.timeoutHandle = -1, dv(a)), a = l.cancelPendingCommit, a !== null && (l.cancelPendingCommit = null, a()), Af(), yl = l, k = a = pt(l.current, null), P = t, nl = 0, ft = null, ea = !1, iu = Tu(l, t), mf = !1, su = gt = gf = Ha = na = Al = 0, Pl = ae = null, Sf = !1, (t & 8) !== 0 && (t |= t & 32);
    var u = l.entangledLanes;
    if (u !== 0)
      for (l = l.entanglements, u &= t; 0 < u; ) {
        var e = 31 - at(u), n = 1 << e;
        t |= l[e], u &= ~n;
      }
    return Zt = t, xe(), a;
  }
  function nr(l, t) {
    J = null, S.H = Pe, t === Cu || t === Ve ? (t = Es(), nl = 3) : t === Ss ? (t = Es(), nl = 4) : nl = t === Ao ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ft = t, k === null && (Al = 1, en(
      l,
      dt(t, l.current)
    ));
  }
  function cr() {
    var l = S.H;
    return S.H = Pe, l === null ? Pe : l;
  }
  function fr() {
    var l = S.A;
    return S.A = J0, l;
  }
  function zf() {
    Al = 4, ea || (P & 4194048) !== P && mt.current !== null || (iu = !0), (na & 134217727) === 0 && (Ha & 134217727) === 0 || yl === null || ia(
      yl,
      P,
      gt,
      !1
    );
  }
  function Of(l, t, a) {
    var u = el;
    el |= 2;
    var e = cr(), n = fr();
    (yl !== l || P !== t) && (dn = null, du(l, t)), t = !1;
    var c = Al;
    l: do
      try {
        if (nl !== 0 && k !== null) {
          var f = k, i = ft;
          switch (nl) {
            case 8:
              Af(), c = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              mt.current === null && (t = !0);
              var h = nl;
              if (nl = 0, ft = null, vu(l, f, i, h), a && iu) {
                c = 0;
                break l;
              }
              break;
            default:
              h = nl, nl = 0, ft = null, vu(l, f, i, h);
          }
        }
        W0(), c = Al;
        break;
      } catch (g) {
        nr(l, g);
      }
    while (!0);
    return t && l.shellSuspendCounter++, xt = Da = null, el = u, S.H = e, S.A = n, k === null && (yl = null, P = 0, xe()), c;
  }
  function W0() {
    for (; k !== null; ) ir(k);
  }
  function $0(l, t) {
    var a = el;
    el |= 2;
    var u = cr(), e = fr();
    yl !== l || P !== t ? (dn = null, rn = _t() + 500, du(l, t)) : iu = Tu(
      l,
      t
    );
    l: do
      try {
        if (nl !== 0 && k !== null) {
          t = k;
          var n = ft;
          t: switch (nl) {
            case 1:
              nl = 0, ft = null, vu(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (bs(n)) {
                nl = 0, ft = null, sr(t);
                break;
              }
              t = function() {
                nl !== 2 && nl !== 9 || yl !== l || (nl = 7), Mt(l);
              }, n.then(t, t);
              break l;
            case 3:
              nl = 7;
              break l;
            case 4:
              nl = 5;
              break l;
            case 7:
              bs(n) ? (nl = 0, ft = null, sr(t)) : (nl = 0, ft = null, vu(l, t, n, 7));
              break;
            case 5:
              var c = null;
              switch (k.tag) {
                case 26:
                  c = k.memoizedState;
                case 5:
                case 27:
                  var f = k;
                  if (!c || Lr(c)) {
                    nl = 0, ft = null;
                    var i = f.sibling;
                    if (i !== null) k = i;
                    else {
                      var h = f.return;
                      h !== null ? (k = h, hn(h)) : k = null;
                    }
                    break t;
                  }
              }
              nl = 0, ft = null, vu(l, t, n, 5);
              break;
            case 6:
              nl = 0, ft = null, vu(l, t, n, 6);
              break;
            case 8:
              Af(), Al = 6;
              break l;
            default:
              throw Error(r(462));
          }
        }
        F0();
        break;
      } catch (g) {
        nr(l, g);
      }
    while (!0);
    return xt = Da = null, S.H = u, S.A = e, el = a, k !== null ? 0 : (yl = null, P = 0, xe(), Al);
  }
  function F0() {
    for (; k !== null && !bd(); )
      ir(k);
  }
  function ir(l) {
    var t = Bo(l.alternate, l, Zt);
    l.memoizedProps = l.pendingProps, t === null ? hn(l) : k = t;
  }
  function sr(l) {
    var t = l, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Uo(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          P
        );
        break;
      case 11:
        t = Uo(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          P
        );
        break;
      case 5:
        Cc(t);
      default:
        jo(a, t), t = k = ss(t, Zt), t = Bo(a, t, Zt);
    }
    l.memoizedProps = l.pendingProps, t === null ? hn(l) : k = t;
  }
  function vu(l, t, a, u) {
    xt = Da = null, Cc(t), eu = null, ku = 0;
    var e = t.return;
    try {
      if (X0(
        l,
        e,
        t,
        a,
        P
      )) {
        Al = 1, en(
          l,
          dt(a, l.current)
        ), k = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw k = e, n;
      Al = 1, en(
        l,
        dt(a, l.current)
      ), k = null;
      return;
    }
    t.flags & 32768 ? (ul || u === 1 ? l = !0 : iu || (P & 536870912) !== 0 ? l = !1 : (ea = l = !0, (u === 2 || u === 9 || u === 3 || u === 6) && (u = mt.current, u !== null && u.tag === 13 && (u.flags |= 16384))), or(t, l)) : hn(t);
  }
  function hn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        or(
          t,
          ea
        );
        return;
      }
      l = t.return;
      var a = Z0(
        t.alternate,
        t,
        Zt
      );
      if (a !== null) {
        k = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        k = t;
        return;
      }
      k = t = l;
    } while (t !== null);
    Al === 0 && (Al = 5);
  }
  function or(l, t) {
    do {
      var a = V0(l.alternate, l);
      if (a !== null) {
        a.flags &= 32767, k = a;
        return;
      }
      if (a = l.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (l = l.sibling, l !== null)) {
        k = l;
        return;
      }
      k = l = a;
    } while (l !== null);
    Al = 6, k = null;
  }
  function rr(l, t, a, u, e, n, c, f, i) {
    l.cancelPendingCommit = null;
    do
      yn();
    while (Xl !== 0);
    if ((el & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === l.current) throw Error(r(177));
      if (n = t.lanes | t.childLanes, n |= hc, Ud(
        l,
        a,
        n,
        c,
        f,
        i
      ), l === yl && (k = yl = null, P = 0), ou = t, fa = l, ru = a, Tf = n, Ef = e, tr = u, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, tv(be, function() {
        return mr(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), u = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || u) {
        u = S.T, S.T = null, e = U.p, U.p = 2, c = el, el |= 4;
        try {
          L0(l, t, a);
        } finally {
          el = c, U.p = e, S.T = u;
        }
      }
      Xl = 1, dr(), vr(), hr();
    }
  }
  function dr() {
    if (Xl === 1) {
      Xl = 0;
      var l = fa, t = ou, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = S.T, S.T = null;
        var u = U.p;
        U.p = 2;
        var e = el;
        el |= 4;
        try {
          ko(t, l);
          var n = jf, c = Pi(l.containerInfo), f = n.focusedElem, i = n.selectionRange;
          if (c !== f && f && f.ownerDocument && Ii(
            f.ownerDocument.documentElement,
            f
          )) {
            if (i !== null && sc(f)) {
              var h = i.start, g = i.end;
              if (g === void 0 && (g = h), "selectionStart" in f)
                f.selectionStart = h, f.selectionEnd = Math.min(
                  g,
                  f.value.length
                );
              else {
                var _ = f.ownerDocument || document, y = _ && _.defaultView || window;
                if (y.getSelection) {
                  var m = y.getSelection(), Z = f.textContent.length, G = Math.min(i.start, Z), sl = i.end === void 0 ? G : Math.min(i.end, Z);
                  !m.extend && G > sl && (c = sl, sl = G, G = c);
                  var d = Fi(
                    f,
                    G
                  ), o = Fi(
                    f,
                    sl
                  );
                  if (d && o && (m.rangeCount !== 1 || m.anchorNode !== d.node || m.anchorOffset !== d.offset || m.focusNode !== o.node || m.focusOffset !== o.offset)) {
                    var v = _.createRange();
                    v.setStart(d.node, d.offset), m.removeAllRanges(), G > sl ? (m.addRange(v), m.extend(o.node, o.offset)) : (v.setEnd(o.node, o.offset), m.addRange(v));
                  }
                }
              }
            }
            for (_ = [], m = f; m = m.parentNode; )
              m.nodeType === 1 && _.push({
                element: m,
                left: m.scrollLeft,
                top: m.scrollTop
              });
            for (typeof f.focus == "function" && f.focus(), f = 0; f < _.length; f++) {
              var b = _[f];
              b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
            }
          }
          Mn = !!Yf, jf = Yf = null;
        } finally {
          el = e, U.p = u, S.T = a;
        }
      }
      l.current = t, Xl = 2;
    }
  }
  function vr() {
    if (Xl === 2) {
      Xl = 0;
      var l = fa, t = ou, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = S.T, S.T = null;
        var u = U.p;
        U.p = 2;
        var e = el;
        el |= 4;
        try {
          Lo(l, t.alternate, t);
        } finally {
          el = e, U.p = u, S.T = a;
        }
      }
      Xl = 3;
    }
  }
  function hr() {
    if (Xl === 4 || Xl === 3) {
      Xl = 0, Td();
      var l = fa, t = ou, a = ru, u = tr;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Xl = 5 : (Xl = 0, ou = fa = null, yr(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (e === 0 && (ca = null), Zn(a), t = t.stateNode, tt && typeof tt.onCommitFiberRoot == "function")
        try {
          tt.onCommitFiberRoot(
            bu,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (u !== null) {
        t = S.T, e = U.p, U.p = 2, S.T = null;
        try {
          for (var n = l.onRecoverableError, c = 0; c < u.length; c++) {
            var f = u[c];
            n(f.value, {
              componentStack: f.stack
            });
          }
        } finally {
          S.T = t, U.p = e;
        }
      }
      (ru & 3) !== 0 && yn(), Mt(l), e = l.pendingLanes, (a & 4194090) !== 0 && (e & 42) !== 0 ? l === _f ? ue++ : (ue = 0, _f = l) : ue = 0, ee(0);
    }
  }
  function yr(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, ju(t)));
  }
  function yn(l) {
    return dr(), vr(), hr(), mr();
  }
  function mr() {
    if (Xl !== 5) return !1;
    var l = fa, t = Tf;
    Tf = 0;
    var a = Zn(ru), u = S.T, e = U.p;
    try {
      U.p = 32 > a ? 32 : a, S.T = null, a = Ef, Ef = null;
      var n = fa, c = ru;
      if (Xl = 0, ou = fa = null, ru = 0, (el & 6) !== 0) throw Error(r(331));
      var f = el;
      if (el |= 4, Po(n.current), $o(
        n,
        n.current,
        c,
        a
      ), el = f, ee(0, !1), tt && typeof tt.onPostCommitFiberRoot == "function")
        try {
          tt.onPostCommitFiberRoot(bu, n);
        } catch {
        }
      return !0;
    } finally {
      U.p = e, S.T = u, yr(l, t);
    }
  }
  function gr(l, t, a) {
    t = dt(a, t), t = Pc(l.stateNode, t, 2), l = Ft(l, t, 2), l !== null && (Eu(l, 2), Mt(l));
  }
  function rl(l, t, a) {
    if (l.tag === 3)
      gr(l, l, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          gr(
            t,
            l,
            a
          );
          break;
        } else if (t.tag === 1) {
          var u = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (ca === null || !ca.has(u))) {
            l = dt(a, l), a = Eo(2), u = Ft(t, a, 2), u !== null && (_o(
              a,
              u,
              t,
              l
            ), Eu(u, 2), Mt(u));
            break;
          }
        }
        t = t.return;
      }
  }
  function Df(l, t, a) {
    var u = l.pingCache;
    if (u === null) {
      u = l.pingCache = new w0();
      var e = /* @__PURE__ */ new Set();
      u.set(t, e);
    } else
      e = u.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), u.set(t, e));
    e.has(a) || (mf = !0, e.add(a), l = I0.bind(null, l, t, a), t.then(l, l));
  }
  function I0(l, t, a) {
    var u = l.pingCache;
    u !== null && u.delete(t), l.pingedLanes |= l.suspendedLanes & a, l.warmLanes &= ~a, yl === l && (P & a) === a && (Al === 4 || Al === 3 && (P & 62914560) === P && 300 > _t() - bf ? (el & 2) === 0 && du(l, 0) : gf |= a, su === P && (su = 0)), Mt(l);
  }
  function Sr(l, t) {
    t === 0 && (t = vi()), l = ka(l, t), l !== null && (Eu(l, t), Mt(l));
  }
  function P0(l) {
    var t = l.memoizedState, a = 0;
    t !== null && (a = t.retryLane), Sr(l, a);
  }
  function lv(l, t) {
    var a = 0;
    switch (l.tag) {
      case 13:
        var u = l.stateNode, e = l.memoizedState;
        e !== null && (a = e.retryLane);
        break;
      case 19:
        u = l.stateNode;
        break;
      case 22:
        u = l.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    u !== null && u.delete(t), Sr(l, a);
  }
  function tv(l, t) {
    return Gn(l, t);
  }
  var mn = null, hu = null, Mf = !1, gn = !1, Rf = !1, qa = 0;
  function Mt(l) {
    l !== hu && l.next === null && (hu === null ? mn = hu = l : hu = hu.next = l), gn = !0, Mf || (Mf = !0, uv());
  }
  function ee(l, t) {
    if (!Rf && gn) {
      Rf = !0;
      do
        for (var a = !1, u = mn; u !== null; ) {
          if (l !== 0) {
            var e = u.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var c = u.suspendedLanes, f = u.pingedLanes;
              n = (1 << 31 - at(42 | l) + 1) - 1, n &= e & ~(c & ~f), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (a = !0, _r(u, n));
          } else
            n = P, n = _e(
              u,
              u === yl ? n : 0,
              u.cancelPendingCommit !== null || u.timeoutHandle !== -1
            ), (n & 3) === 0 || Tu(u, n) || (a = !0, _r(u, n));
          u = u.next;
        }
      while (a);
      Rf = !1;
    }
  }
  function av() {
    br();
  }
  function br() {
    gn = Mf = !1;
    var l = 0;
    qa !== 0 && (rv() && (l = qa), qa = 0);
    for (var t = _t(), a = null, u = mn; u !== null; ) {
      var e = u.next, n = Tr(u, t);
      n === 0 ? (u.next = null, a === null ? mn = e : a.next = e, e === null && (hu = a)) : (a = u, (l !== 0 || (n & 3) !== 0) && (gn = !0)), u = e;
    }
    ee(l);
  }
  function Tr(l, t) {
    for (var a = l.suspendedLanes, u = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var c = 31 - at(n), f = 1 << c, i = e[c];
      i === -1 ? ((f & a) === 0 || (f & u) !== 0) && (e[c] = Rd(f, t)) : i <= t && (l.expiredLanes |= f), n &= ~f;
    }
    if (t = yl, a = P, a = _e(
      l,
      l === t ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), u = l.callbackNode, a === 0 || l === t && (nl === 2 || nl === 9) || l.cancelPendingCommit !== null)
      return u !== null && u !== null && Cn(u), l.callbackNode = null, l.callbackPriority = 0;
    if ((a & 3) === 0 || Tu(l, a)) {
      if (t = a & -a, t === l.callbackPriority) return t;
      switch (u !== null && Cn(u), Zn(a)) {
        case 2:
        case 8:
          a = oi;
          break;
        case 32:
          a = be;
          break;
        case 268435456:
          a = ri;
          break;
        default:
          a = be;
      }
      return u = Er.bind(null, l), a = Gn(a, u), l.callbackPriority = t, l.callbackNode = a, t;
    }
    return u !== null && u !== null && Cn(u), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Er(l, t) {
    if (Xl !== 0 && Xl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var a = l.callbackNode;
    if (yn() && l.callbackNode !== a)
      return null;
    var u = P;
    return u = _e(
      l,
      l === yl ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), u === 0 ? null : (ur(l, u, t), Tr(l, _t()), l.callbackNode != null && l.callbackNode === a ? Er.bind(null, l) : null);
  }
  function _r(l, t) {
    if (yn()) return null;
    ur(l, t, !0);
  }
  function uv() {
    vv(function() {
      (el & 6) !== 0 ? Gn(
        si,
        av
      ) : br();
    });
  }
  function Uf() {
    return qa === 0 && (qa = di()), qa;
  }
  function Ar(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Me("" + l);
  }
  function zr(l, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, l.id && a.setAttribute("form", l.id), t.parentNode.insertBefore(a, t), l = new FormData(l), a.parentNode.removeChild(a), l;
  }
  function ev(l, t, a, u, e) {
    if (t === "submit" && a && a.stateNode === e) {
      var n = Ar(
        (e[Wl] || null).action
      ), c = u.submitter;
      c && (t = (t = c[Wl] || null) ? Ar(t.formAction) : c.getAttribute("formAction"), t !== null && (n = t, c = null));
      var f = new pe(
        "action",
        "action",
        null,
        u,
        e
      );
      l.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (u.defaultPrevented) {
                if (qa !== 0) {
                  var i = c ? zr(e, c) : new FormData(e);
                  kc(
                    a,
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
                typeof n == "function" && (f.preventDefault(), i = c ? zr(e, c) : new FormData(e), kc(
                  a,
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
  for (var Nf = 0; Nf < vc.length; Nf++) {
    var pf = vc[Nf], nv = pf.toLowerCase(), cv = pf[0].toUpperCase() + pf.slice(1);
    bt(
      nv,
      "on" + cv
    );
  }
  bt(as, "onAnimationEnd"), bt(us, "onAnimationIteration"), bt(es, "onAnimationStart"), bt("dblclick", "onDoubleClick"), bt("focusin", "onFocus"), bt("focusout", "onBlur"), bt(A0, "onTransitionRun"), bt(z0, "onTransitionStart"), bt(O0, "onTransitionCancel"), bt(ns, "onTransitionEnd"), Ga("onMouseEnter", ["mouseout", "mouseover"]), Ga("onMouseLeave", ["mouseout", "mouseover"]), Ga("onPointerEnter", ["pointerout", "pointerover"]), Ga("onPointerLeave", ["pointerout", "pointerover"]), ga(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ga(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ga("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ga(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ga(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ga(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ne = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), fv = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ne)
  );
  function Or(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var u = l[a], e = u.event;
      u = u.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var c = u.length - 1; 0 <= c; c--) {
            var f = u[c], i = f.instance, h = f.currentTarget;
            if (f = f.listener, i !== n && e.isPropagationStopped())
              break l;
            n = f, e.currentTarget = h;
            try {
              n(e);
            } catch (g) {
              un(g);
            }
            e.currentTarget = null, n = i;
          }
        else
          for (c = 0; c < u.length; c++) {
            if (f = u[c], i = f.instance, h = f.currentTarget, f = f.listener, i !== n && e.isPropagationStopped())
              break l;
            n = f, e.currentTarget = h;
            try {
              n(e);
            } catch (g) {
              un(g);
            }
            e.currentTarget = null, n = i;
          }
      }
    }
  }
  function W(l, t) {
    var a = t[Vn];
    a === void 0 && (a = t[Vn] = /* @__PURE__ */ new Set());
    var u = l + "__bubble";
    a.has(u) || (Dr(t, l, 2, !1), a.add(u));
  }
  function Hf(l, t, a) {
    var u = 0;
    t && (u |= 4), Dr(
      a,
      l,
      u,
      t
    );
  }
  var Sn = "_reactListening" + Math.random().toString(36).slice(2);
  function qf(l) {
    if (!l[Sn]) {
      l[Sn] = !0, Si.forEach(function(a) {
        a !== "selectionchange" && (fv.has(a) || Hf(a, !1, l), Hf(a, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Sn] || (t[Sn] = !0, Hf("selectionchange", !1, t));
    }
  }
  function Dr(l, t, a, u) {
    switch ($r(t)) {
      case 2:
        var e = xv;
        break;
      case 8:
        e = Bv;
        break;
      default:
        e = wf;
    }
    a = e.bind(
      null,
      t,
      a,
      l
    ), e = void 0, !lc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = !0), u ? e !== void 0 ? l.addEventListener(t, a, {
      capture: !0,
      passive: e
    }) : l.addEventListener(t, a, !0) : e !== void 0 ? l.addEventListener(t, a, {
      passive: e
    }) : l.addEventListener(t, a, !1);
  }
  function xf(l, t, a, u, e) {
    var n = u;
    if ((t & 1) === 0 && (t & 2) === 0 && u !== null)
      l: for (; ; ) {
        if (u === null) return;
        var c = u.tag;
        if (c === 3 || c === 4) {
          var f = u.stateNode.containerInfo;
          if (f === e) break;
          if (c === 4)
            for (c = u.return; c !== null; ) {
              var i = c.tag;
              if ((i === 3 || i === 4) && c.stateNode.containerInfo === e)
                return;
              c = c.return;
            }
          for (; f !== null; ) {
            if (c = Ba(f), c === null) return;
            if (i = c.tag, i === 5 || i === 6 || i === 26 || i === 27) {
              u = n = c;
              continue l;
            }
            f = f.parentNode;
          }
        }
        u = u.return;
      }
    Hi(function() {
      var h = n, g = In(a), _ = [];
      l: {
        var y = cs.get(l);
        if (y !== void 0) {
          var m = pe, Z = l;
          switch (l) {
            case "keypress":
              if (Ue(a) === 0) break l;
            case "keydown":
            case "keyup":
              m = t0;
              break;
            case "focusin":
              Z = "focus", m = ec;
              break;
            case "focusout":
              Z = "blur", m = ec;
              break;
            case "beforeblur":
            case "afterblur":
              m = ec;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              m = Bi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              m = Vd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              m = e0;
              break;
            case as:
            case us:
            case es:
              m = Jd;
              break;
            case ns:
              m = c0;
              break;
            case "scroll":
            case "scrollend":
              m = Qd;
              break;
            case "wheel":
              m = i0;
              break;
            case "copy":
            case "cut":
            case "paste":
              m = kd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              m = ji;
              break;
            case "toggle":
            case "beforetoggle":
              m = o0;
          }
          var G = (t & 4) !== 0, sl = !G && (l === "scroll" || l === "scrollend"), d = G ? y !== null ? y + "Capture" : null : y;
          G = [];
          for (var o = h, v; o !== null; ) {
            var b = o;
            if (v = b.stateNode, b = b.tag, b !== 5 && b !== 26 && b !== 27 || v === null || d === null || (b = zu(o, d), b != null && G.push(
              ce(o, b, v)
            )), sl) break;
            o = o.return;
          }
          0 < G.length && (y = new m(
            y,
            Z,
            null,
            a,
            g
          ), _.push({ event: y, listeners: G }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (y = l === "mouseover" || l === "pointerover", m = l === "mouseout" || l === "pointerout", y && a !== Fn && (Z = a.relatedTarget || a.fromElement) && (Ba(Z) || Z[xa]))
            break l;
          if ((m || y) && (y = g.window === g ? g : (y = g.ownerDocument) ? y.defaultView || y.parentWindow : window, m ? (Z = a.relatedTarget || a.toElement, m = h, Z = Z ? Ba(Z) : null, Z !== null && (sl = p(Z), G = Z.tag, Z !== sl || G !== 5 && G !== 27 && G !== 6) && (Z = null)) : (m = null, Z = h), m !== Z)) {
            if (G = Bi, b = "onMouseLeave", d = "onMouseEnter", o = "mouse", (l === "pointerout" || l === "pointerover") && (G = ji, b = "onPointerLeave", d = "onPointerEnter", o = "pointer"), sl = m == null ? y : Au(m), v = Z == null ? y : Au(Z), y = new G(
              b,
              o + "leave",
              m,
              a,
              g
            ), y.target = sl, y.relatedTarget = v, b = null, Ba(g) === h && (G = new G(
              d,
              o + "enter",
              Z,
              a,
              g
            ), G.target = v, G.relatedTarget = sl, b = G), sl = b, m && Z)
              t: {
                for (G = m, d = Z, o = 0, v = G; v; v = yu(v))
                  o++;
                for (v = 0, b = d; b; b = yu(b))
                  v++;
                for (; 0 < o - v; )
                  G = yu(G), o--;
                for (; 0 < v - o; )
                  d = yu(d), v--;
                for (; o--; ) {
                  if (G === d || d !== null && G === d.alternate)
                    break t;
                  G = yu(G), d = yu(d);
                }
                G = null;
              }
            else G = null;
            m !== null && Mr(
              _,
              y,
              m,
              G,
              !1
            ), Z !== null && sl !== null && Mr(
              _,
              sl,
              Z,
              G,
              !0
            );
          }
        }
        l: {
          if (y = h ? Au(h) : window, m = y.nodeName && y.nodeName.toLowerCase(), m === "select" || m === "input" && y.type === "file")
            var H = Ki;
          else if (Vi(y))
            if (Ji)
              H = T0;
            else {
              H = S0;
              var w = g0;
            }
          else
            m = y.nodeName, !m || m.toLowerCase() !== "input" || y.type !== "checkbox" && y.type !== "radio" ? h && $n(h.elementType) && (H = Ki) : H = b0;
          if (H && (H = H(l, h))) {
            Li(
              _,
              H,
              a,
              g
            );
            break l;
          }
          w && w(l, y, h), l === "focusout" && h && y.type === "number" && h.memoizedProps.value != null && Wn(y, "number", y.value);
        }
        switch (w = h ? Au(h) : window, l) {
          case "focusin":
            (Vi(w) || w.contentEditable === "true") && (Ka = w, oc = h, Hu = null);
            break;
          case "focusout":
            Hu = oc = Ka = null;
            break;
          case "mousedown":
            rc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            rc = !1, ls(_, a, g);
            break;
          case "selectionchange":
            if (_0) break;
          case "keydown":
          case "keyup":
            ls(_, a, g);
        }
        var B;
        if (cc)
          l: {
            switch (l) {
              case "compositionstart":
                var C = "onCompositionStart";
                break l;
              case "compositionend":
                C = "onCompositionEnd";
                break l;
              case "compositionupdate":
                C = "onCompositionUpdate";
                break l;
            }
            C = void 0;
          }
        else
          La ? Qi(l, a) && (C = "onCompositionEnd") : l === "keydown" && a.keyCode === 229 && (C = "onCompositionStart");
        C && (Gi && a.locale !== "ko" && (La || C !== "onCompositionStart" ? C === "onCompositionEnd" && La && (B = qi()) : (wt = g, tc = "value" in wt ? wt.value : wt.textContent, La = !0)), w = bn(h, C), 0 < w.length && (C = new Yi(
          C,
          l,
          null,
          a,
          g
        ), _.push({ event: C, listeners: w }), B ? C.data = B : (B = Zi(a), B !== null && (C.data = B)))), (B = d0 ? v0(l, a) : h0(l, a)) && (C = bn(h, "onBeforeInput"), 0 < C.length && (w = new Yi(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          g
        ), _.push({
          event: w,
          listeners: C
        }), w.data = B)), ev(
          _,
          l,
          h,
          a,
          g
        );
      }
      Or(_, t);
    });
  }
  function ce(l, t, a) {
    return {
      instance: l,
      listener: t,
      currentTarget: a
    };
  }
  function bn(l, t) {
    for (var a = t + "Capture", u = []; l !== null; ) {
      var e = l, n = e.stateNode;
      if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = zu(l, a), e != null && u.unshift(
        ce(l, e, n)
      ), e = zu(l, t), e != null && u.push(
        ce(l, e, n)
      )), l.tag === 3) return u;
      l = l.return;
    }
    return [];
  }
  function yu(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Mr(l, t, a, u, e) {
    for (var n = t._reactName, c = []; a !== null && a !== u; ) {
      var f = a, i = f.alternate, h = f.stateNode;
      if (f = f.tag, i !== null && i === u) break;
      f !== 5 && f !== 26 && f !== 27 || h === null || (i = h, e ? (h = zu(a, n), h != null && c.unshift(
        ce(a, h, i)
      )) : e || (h = zu(a, n), h != null && c.push(
        ce(a, h, i)
      ))), a = a.return;
    }
    c.length !== 0 && l.push({ event: t, listeners: c });
  }
  var iv = /\r\n?/g, sv = /\u0000|\uFFFD/g;
  function Rr(l) {
    return (typeof l == "string" ? l : "" + l).replace(iv, `
`).replace(sv, "");
  }
  function Ur(l, t) {
    return t = Rr(t), Rr(l) === t;
  }
  function Tn() {
  }
  function il(l, t, a, u, e, n) {
    switch (a) {
      case "children":
        typeof u == "string" ? t === "body" || t === "textarea" && u === "" || Qa(l, u) : (typeof u == "number" || typeof u == "bigint") && t !== "body" && Qa(l, "" + u);
        break;
      case "className":
        ze(l, "class", u);
        break;
      case "tabIndex":
        ze(l, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ze(l, a, u);
        break;
      case "style":
        Ni(l, u, n);
        break;
      case "data":
        if (t !== "object") {
          ze(l, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (u == null || typeof u == "function" || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        u = Me("" + u), l.setAttribute(a, u);
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (a === "formAction" ? (t !== "input" && il(l, t, "name", e.name, e, null), il(
            l,
            t,
            "formEncType",
            e.formEncType,
            e,
            null
          ), il(
            l,
            t,
            "formMethod",
            e.formMethod,
            e,
            null
          ), il(
            l,
            t,
            "formTarget",
            e.formTarget,
            e,
            null
          )) : (il(l, t, "encType", e.encType, e, null), il(l, t, "method", e.method, e, null), il(l, t, "target", e.target, e, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        u = Me("" + u), l.setAttribute(a, u);
        break;
      case "onClick":
        u != null && (l.onclick = Tn);
        break;
      case "onScroll":
        u != null && W("scroll", l);
        break;
      case "onScrollEnd":
        u != null && W("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u))
            throw Error(r(61));
          if (a = u.__html, a != null) {
            if (e.children != null) throw Error(r(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        l.muted = u && typeof u != "function" && typeof u != "symbol";
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
        if (u == null || typeof u == "function" || typeof u == "boolean" || typeof u == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        a = Me("" + u), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
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
        u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, "" + u) : l.removeAttribute(a);
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
        u && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, "") : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        u === !0 ? l.setAttribute(a, "") : u !== !1 && u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, u) : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null && typeof u != "function" && typeof u != "symbol" && !isNaN(u) && 1 <= u ? l.setAttribute(a, u) : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u) ? l.removeAttribute(a) : l.setAttribute(a, u);
        break;
      case "popover":
        W("beforetoggle", l), W("toggle", l), Ae(l, "popover", u);
        break;
      case "xlinkActuate":
        Ut(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          u
        );
        break;
      case "xlinkArcrole":
        Ut(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          u
        );
        break;
      case "xlinkRole":
        Ut(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          u
        );
        break;
      case "xlinkShow":
        Ut(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          u
        );
        break;
      case "xlinkTitle":
        Ut(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          u
        );
        break;
      case "xlinkType":
        Ut(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          u
        );
        break;
      case "xmlBase":
        Ut(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          u
        );
        break;
      case "xmlLang":
        Ut(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          u
        );
        break;
      case "xmlSpace":
        Ut(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          u
        );
        break;
      case "is":
        Ae(l, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Cd.get(a) || a, Ae(l, a, u));
    }
  }
  function Bf(l, t, a, u, e, n) {
    switch (a) {
      case "style":
        Ni(l, u, n);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u))
            throw Error(r(61));
          if (a = u.__html, a != null) {
            if (e.children != null) throw Error(r(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof u == "string" ? Qa(l, u) : (typeof u == "number" || typeof u == "bigint") && Qa(l, "" + u);
        break;
      case "onScroll":
        u != null && W("scroll", l);
        break;
      case "onScrollEnd":
        u != null && W("scrollend", l);
        break;
      case "onClick":
        u != null && (l.onclick = Tn);
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
        if (!bi.hasOwnProperty(a))
          l: {
            if (a[0] === "o" && a[1] === "n" && (e = a.endsWith("Capture"), t = a.slice(2, e ? a.length - 7 : void 0), n = l[Wl] || null, n = n != null ? n[a] : null, typeof n == "function" && l.removeEventListener(t, n, e), typeof u == "function")) {
              typeof n != "function" && n !== null && (a in l ? l[a] = null : l.hasAttribute(a) && l.removeAttribute(a)), l.addEventListener(t, u, e);
              break l;
            }
            a in l ? l[a] = u : u === !0 ? l.setAttribute(a, "") : Ae(l, a, u);
          }
    }
  }
  function Ql(l, t, a) {
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
        W("error", l), W("load", l);
        var u = !1, e = !1, n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var c = a[n];
            if (c != null)
              switch (n) {
                case "src":
                  u = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  il(l, t, n, c, a, null);
              }
          }
        e && il(l, t, "srcSet", a.srcSet, a, null), u && il(l, t, "src", a.src, a, null);
        return;
      case "input":
        W("invalid", l);
        var f = n = c = e = null, i = null, h = null;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var g = a[u];
            if (g != null)
              switch (u) {
                case "name":
                  e = g;
                  break;
                case "type":
                  c = g;
                  break;
                case "checked":
                  i = g;
                  break;
                case "defaultChecked":
                  h = g;
                  break;
                case "value":
                  n = g;
                  break;
                case "defaultValue":
                  f = g;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (g != null)
                    throw Error(r(137, t));
                  break;
                default:
                  il(l, t, u, g, a, null);
              }
          }
        Di(
          l,
          n,
          f,
          i,
          h,
          c,
          e,
          !1
        ), Oe(l);
        return;
      case "select":
        W("invalid", l), u = c = n = null;
        for (e in a)
          if (a.hasOwnProperty(e) && (f = a[e], f != null))
            switch (e) {
              case "value":
                n = f;
                break;
              case "defaultValue":
                c = f;
                break;
              case "multiple":
                u = f;
              default:
                il(l, t, e, f, a, null);
            }
        t = n, a = c, l.multiple = !!u, t != null ? Xa(l, !!u, t, !1) : a != null && Xa(l, !!u, a, !0);
        return;
      case "textarea":
        W("invalid", l), n = e = u = null;
        for (c in a)
          if (a.hasOwnProperty(c) && (f = a[c], f != null))
            switch (c) {
              case "value":
                u = f;
                break;
              case "defaultValue":
                e = f;
                break;
              case "children":
                n = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(r(91));
                break;
              default:
                il(l, t, c, f, a, null);
            }
        Ri(l, u, e, n), Oe(l);
        return;
      case "option":
        for (i in a)
          if (a.hasOwnProperty(i) && (u = a[i], u != null))
            switch (i) {
              case "selected":
                l.selected = u && typeof u != "function" && typeof u != "symbol";
                break;
              default:
                il(l, t, i, u, a, null);
            }
        return;
      case "dialog":
        W("beforetoggle", l), W("toggle", l), W("cancel", l), W("close", l);
        break;
      case "iframe":
      case "object":
        W("load", l);
        break;
      case "video":
      case "audio":
        for (u = 0; u < ne.length; u++)
          W(ne[u], l);
        break;
      case "image":
        W("error", l), W("load", l);
        break;
      case "details":
        W("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        W("error", l), W("load", l);
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
        for (h in a)
          if (a.hasOwnProperty(h) && (u = a[h], u != null))
            switch (h) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                il(l, t, h, u, a, null);
            }
        return;
      default:
        if ($n(t)) {
          for (g in a)
            a.hasOwnProperty(g) && (u = a[g], u !== void 0 && Bf(
              l,
              t,
              g,
              u,
              a,
              void 0
            ));
          return;
        }
    }
    for (f in a)
      a.hasOwnProperty(f) && (u = a[f], u != null && il(l, t, f, u, a, null));
  }
  function ov(l, t, a, u) {
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
        var e = null, n = null, c = null, f = null, i = null, h = null, g = null;
        for (m in a) {
          var _ = a[m];
          if (a.hasOwnProperty(m) && _ != null)
            switch (m) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                i = _;
              default:
                u.hasOwnProperty(m) || il(l, t, m, null, u, _);
            }
        }
        for (var y in u) {
          var m = u[y];
          if (_ = a[y], u.hasOwnProperty(y) && (m != null || _ != null))
            switch (y) {
              case "type":
                n = m;
                break;
              case "name":
                e = m;
                break;
              case "checked":
                h = m;
                break;
              case "defaultChecked":
                g = m;
                break;
              case "value":
                c = m;
                break;
              case "defaultValue":
                f = m;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (m != null)
                  throw Error(r(137, t));
                break;
              default:
                m !== _ && il(
                  l,
                  t,
                  y,
                  m,
                  u,
                  _
                );
            }
        }
        kn(
          l,
          c,
          f,
          i,
          h,
          g,
          n,
          e
        );
        return;
      case "select":
        m = c = f = y = null;
        for (n in a)
          if (i = a[n], a.hasOwnProperty(n) && i != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                m = i;
              default:
                u.hasOwnProperty(n) || il(
                  l,
                  t,
                  n,
                  null,
                  u,
                  i
                );
            }
        for (e in u)
          if (n = u[e], i = a[e], u.hasOwnProperty(e) && (n != null || i != null))
            switch (e) {
              case "value":
                y = n;
                break;
              case "defaultValue":
                f = n;
                break;
              case "multiple":
                c = n;
              default:
                n !== i && il(
                  l,
                  t,
                  e,
                  n,
                  u,
                  i
                );
            }
        t = f, a = c, u = m, y != null ? Xa(l, !!a, y, !1) : !!u != !!a && (t != null ? Xa(l, !!a, t, !0) : Xa(l, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        m = y = null;
        for (f in a)
          if (e = a[f], a.hasOwnProperty(f) && e != null && !u.hasOwnProperty(f))
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                il(l, t, f, null, u, e);
            }
        for (c in u)
          if (e = u[c], n = a[c], u.hasOwnProperty(c) && (e != null || n != null))
            switch (c) {
              case "value":
                y = e;
                break;
              case "defaultValue":
                m = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(r(91));
                break;
              default:
                e !== n && il(l, t, c, e, u, n);
            }
        Mi(l, y, m);
        return;
      case "option":
        for (var Z in a)
          if (y = a[Z], a.hasOwnProperty(Z) && y != null && !u.hasOwnProperty(Z))
            switch (Z) {
              case "selected":
                l.selected = !1;
                break;
              default:
                il(
                  l,
                  t,
                  Z,
                  null,
                  u,
                  y
                );
            }
        for (i in u)
          if (y = u[i], m = a[i], u.hasOwnProperty(i) && y !== m && (y != null || m != null))
            switch (i) {
              case "selected":
                l.selected = y && typeof y != "function" && typeof y != "symbol";
                break;
              default:
                il(
                  l,
                  t,
                  i,
                  y,
                  u,
                  m
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
        for (var G in a)
          y = a[G], a.hasOwnProperty(G) && y != null && !u.hasOwnProperty(G) && il(l, t, G, null, u, y);
        for (h in u)
          if (y = u[h], m = a[h], u.hasOwnProperty(h) && y !== m && (y != null || m != null))
            switch (h) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (y != null)
                  throw Error(r(137, t));
                break;
              default:
                il(
                  l,
                  t,
                  h,
                  y,
                  u,
                  m
                );
            }
        return;
      default:
        if ($n(t)) {
          for (var sl in a)
            y = a[sl], a.hasOwnProperty(sl) && y !== void 0 && !u.hasOwnProperty(sl) && Bf(
              l,
              t,
              sl,
              void 0,
              u,
              y
            );
          for (g in u)
            y = u[g], m = a[g], !u.hasOwnProperty(g) || y === m || y === void 0 && m === void 0 || Bf(
              l,
              t,
              g,
              y,
              u,
              m
            );
          return;
        }
    }
    for (var d in a)
      y = a[d], a.hasOwnProperty(d) && y != null && !u.hasOwnProperty(d) && il(l, t, d, null, u, y);
    for (_ in u)
      y = u[_], m = a[_], !u.hasOwnProperty(_) || y === m || y == null && m == null || il(l, t, _, y, u, m);
  }
  var Yf = null, jf = null;
  function En(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Nr(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function pr(l, t) {
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
  function Gf(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Cf = null;
  function rv() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Cf ? !1 : (Cf = l, !0) : (Cf = null, !1);
  }
  var Hr = typeof setTimeout == "function" ? setTimeout : void 0, dv = typeof clearTimeout == "function" ? clearTimeout : void 0, qr = typeof Promise == "function" ? Promise : void 0, vv = typeof queueMicrotask == "function" ? queueMicrotask : typeof qr < "u" ? function(l) {
    return qr.resolve(null).then(l).catch(hv);
  } : Hr;
  function hv(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function sa(l) {
    return l === "head";
  }
  function xr(l, t) {
    var a = t, u = 0, e = 0;
    do {
      var n = a.nextSibling;
      if (l.removeChild(a), n && n.nodeType === 8)
        if (a = n.data, a === "/$") {
          if (0 < u && 8 > u) {
            a = u;
            var c = l.ownerDocument;
            if (a & 1 && fe(c.documentElement), a & 2 && fe(c.body), a & 4)
              for (a = c.head, fe(a), c = a.firstChild; c; ) {
                var f = c.nextSibling, i = c.nodeName;
                c[_u] || i === "SCRIPT" || i === "STYLE" || i === "LINK" && c.rel.toLowerCase() === "stylesheet" || a.removeChild(c), c = f;
              }
          }
          if (e === 0) {
            l.removeChild(n), ye(t);
            return;
          }
          e--;
        } else
          a === "$" || a === "$?" || a === "$!" ? e++ : u = a.charCodeAt(0) - 48;
      else u = 0;
      a = n;
    } while (a);
    ye(t);
  }
  function Xf(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Xf(a), Ln(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function yv(l, t, a, u) {
    for (; l.nodeType === 1; ) {
      var e = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (u) {
        if (!l[_u])
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
      if (l = Et(l.nextSibling), l === null) break;
    }
    return null;
  }
  function mv(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !a || (l = Et(l.nextSibling), l === null)) return null;
    return l;
  }
  function Qf(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete";
  }
  function gv(l, t) {
    var a = l.ownerDocument;
    if (l.data !== "$?" || a.readyState === "complete")
      t();
    else {
      var u = function() {
        t(), a.removeEventListener("DOMContentLoaded", u);
      };
      a.addEventListener("DOMContentLoaded", u), l._reactRetry = u;
    }
  }
  function Et(l) {
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
  var Zf = null;
  function Br(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (t === 0) return l;
          t--;
        } else a === "/$" && t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Yr(l, t, a) {
    switch (t = En(a), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(r(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(r(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(r(454));
        return l;
      default:
        throw Error(r(451));
    }
  }
  function fe(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    Ln(l);
  }
  var St = /* @__PURE__ */ new Map(), jr = /* @__PURE__ */ new Set();
  function _n(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Vt = U.d;
  U.d = {
    f: Sv,
    r: bv,
    D: Tv,
    C: Ev,
    L: _v,
    m: Av,
    X: Ov,
    S: zv,
    M: Dv
  };
  function Sv() {
    var l = Vt.f(), t = vn();
    return l || t;
  }
  function bv(l) {
    var t = Ya(l);
    t !== null && t.tag === 5 && t.type === "form" ? ao(t) : Vt.r(l);
  }
  var mu = typeof document > "u" ? null : document;
  function Gr(l, t, a) {
    var u = mu;
    if (u && typeof t == "string" && t) {
      var e = rt(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof a == "string" && (e += '[crossorigin="' + a + '"]'), jr.has(e) || (jr.add(e), l = { rel: l, crossOrigin: a, href: t }, u.querySelector(e) === null && (t = u.createElement("link"), Ql(t, "link", l), Bl(t), u.head.appendChild(t)));
    }
  }
  function Tv(l) {
    Vt.D(l), Gr("dns-prefetch", l, null);
  }
  function Ev(l, t) {
    Vt.C(l, t), Gr("preconnect", l, t);
  }
  function _v(l, t, a) {
    Vt.L(l, t, a);
    var u = mu;
    if (u && l && t) {
      var e = 'link[rel="preload"][as="' + rt(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (e += '[imagesrcset="' + rt(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (e += '[imagesizes="' + rt(
        a.imageSizes
      ) + '"]')) : e += '[href="' + rt(l) + '"]';
      var n = e;
      switch (t) {
        case "style":
          n = gu(l);
          break;
        case "script":
          n = Su(l);
      }
      St.has(n) || (l = x(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : l,
          as: t
        },
        a
      ), St.set(n, l), u.querySelector(e) !== null || t === "style" && u.querySelector(ie(n)) || t === "script" && u.querySelector(se(n)) || (t = u.createElement("link"), Ql(t, "link", l), Bl(t), u.head.appendChild(t)));
    }
  }
  function Av(l, t) {
    Vt.m(l, t);
    var a = mu;
    if (a && l) {
      var u = t && typeof t.as == "string" ? t.as : "script", e = 'link[rel="modulepreload"][as="' + rt(u) + '"][href="' + rt(l) + '"]', n = e;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Su(l);
      }
      if (!St.has(n) && (l = x({ rel: "modulepreload", href: l }, t), St.set(n, l), a.querySelector(e) === null)) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(se(n)))
              return;
        }
        u = a.createElement("link"), Ql(u, "link", l), Bl(u), a.head.appendChild(u);
      }
    }
  }
  function zv(l, t, a) {
    Vt.S(l, t, a);
    var u = mu;
    if (u && l) {
      var e = ja(u).hoistableStyles, n = gu(l);
      t = t || "default";
      var c = e.get(n);
      if (!c) {
        var f = { loading: 0, preload: null };
        if (c = u.querySelector(
          ie(n)
        ))
          f.loading = 5;
        else {
          l = x(
            { rel: "stylesheet", href: l, "data-precedence": t },
            a
          ), (a = St.get(n)) && Vf(l, a);
          var i = c = u.createElement("link");
          Bl(i), Ql(i, "link", l), i._p = new Promise(function(h, g) {
            i.onload = h, i.onerror = g;
          }), i.addEventListener("load", function() {
            f.loading |= 1;
          }), i.addEventListener("error", function() {
            f.loading |= 2;
          }), f.loading |= 4, An(c, t, u);
        }
        c = {
          type: "stylesheet",
          instance: c,
          count: 1,
          state: f
        }, e.set(n, c);
      }
    }
  }
  function Ov(l, t) {
    Vt.X(l, t);
    var a = mu;
    if (a && l) {
      var u = ja(a).hoistableScripts, e = Su(l), n = u.get(e);
      n || (n = a.querySelector(se(e)), n || (l = x({ src: l, async: !0 }, t), (t = St.get(e)) && Lf(l, t), n = a.createElement("script"), Bl(n), Ql(n, "link", l), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(e, n));
    }
  }
  function Dv(l, t) {
    Vt.M(l, t);
    var a = mu;
    if (a && l) {
      var u = ja(a).hoistableScripts, e = Su(l), n = u.get(e);
      n || (n = a.querySelector(se(e)), n || (l = x({ src: l, async: !0, type: "module" }, t), (t = St.get(e)) && Lf(l, t), n = a.createElement("script"), Bl(n), Ql(n, "link", l), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(e, n));
    }
  }
  function Cr(l, t, a, u) {
    var e = (e = L.current) ? _n(e) : null;
    if (!e) throw Error(r(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = gu(a.href), a = ja(
          e
        ).hoistableStyles, u = a.get(t), u || (u = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, u)), u) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          l = gu(a.href);
          var n = ja(
            e
          ).hoistableStyles, c = n.get(l);
          if (c || (e = e.ownerDocument || e, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, c), (n = e.querySelector(
            ie(l)
          )) && !n._p && (c.instance = n, c.state.loading = 5), St.has(l) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, St.set(l, a), n || Mv(
            e,
            l,
            a,
            c.state
          ))), t && u === null)
            throw Error(r(528, ""));
          return c;
        }
        if (t && u !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Su(a), a = ja(
          e
        ).hoistableScripts, u = a.get(t), u || (u = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, u)), u) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, l));
    }
  }
  function gu(l) {
    return 'href="' + rt(l) + '"';
  }
  function ie(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Xr(l) {
    return x({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function Mv(l, t, a, u) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? u.loading = 1 : (t = l.createElement("link"), u.preload = t, t.addEventListener("load", function() {
      return u.loading |= 1;
    }), t.addEventListener("error", function() {
      return u.loading |= 2;
    }), Ql(t, "link", a), Bl(t), l.head.appendChild(t));
  }
  function Su(l) {
    return '[src="' + rt(l) + '"]';
  }
  function se(l) {
    return "script[async]" + l;
  }
  function Qr(l, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var u = l.querySelector(
            'style[data-href~="' + rt(a.href) + '"]'
          );
          if (u)
            return t.instance = u, Bl(u), u;
          var e = x({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return u = (l.ownerDocument || l).createElement(
            "style"
          ), Bl(u), Ql(u, "style", e), An(u, a.precedence, l), t.instance = u;
        case "stylesheet":
          e = gu(a.href);
          var n = l.querySelector(
            ie(e)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, Bl(n), n;
          u = Xr(a), (e = St.get(e)) && Vf(u, e), n = (l.ownerDocument || l).createElement("link"), Bl(n);
          var c = n;
          return c._p = new Promise(function(f, i) {
            c.onload = f, c.onerror = i;
          }), Ql(n, "link", u), t.state.loading |= 4, An(n, a.precedence, l), t.instance = n;
        case "script":
          return n = Su(a.src), (e = l.querySelector(
            se(n)
          )) ? (t.instance = e, Bl(e), e) : (u = a, (e = St.get(n)) && (u = x({}, a), Lf(u, e)), l = l.ownerDocument || l, e = l.createElement("script"), Bl(e), Ql(e, "link", u), l.head.appendChild(e), t.instance = e);
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (u = t.instance, t.state.loading |= 4, An(u, a.precedence, l));
    return t.instance;
  }
  function An(l, t, a) {
    for (var u = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), e = u.length ? u[u.length - 1] : null, n = e, c = 0; c < u.length; c++) {
      var f = u[c];
      if (f.dataset.precedence === t) n = f;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(l, t.firstChild));
  }
  function Vf(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function Lf(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var zn = null;
  function Zr(l, t, a) {
    if (zn === null) {
      var u = /* @__PURE__ */ new Map(), e = zn = /* @__PURE__ */ new Map();
      e.set(a, u);
    } else
      e = zn, u = e.get(a), u || (u = /* @__PURE__ */ new Map(), e.set(a, u));
    if (u.has(l)) return u;
    for (u.set(l, null), a = a.getElementsByTagName(l), e = 0; e < a.length; e++) {
      var n = a[e];
      if (!(n[_u] || n[Vl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = n.getAttribute(t) || "";
        c = l + c;
        var f = u.get(c);
        f ? f.push(n) : u.set(c, [n]);
      }
    }
    return u;
  }
  function Vr(l, t, a) {
    l = l.ownerDocument || l, l.head.insertBefore(
      a,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function Rv(l, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
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
  function Lr(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var oe = null;
  function Uv() {
  }
  function Nv(l, t, a) {
    if (oe === null) throw Error(r(475));
    var u = oe;
    if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var e = gu(a.href), n = l.querySelector(
          ie(e)
        );
        if (n) {
          l = n._p, l !== null && typeof l == "object" && typeof l.then == "function" && (u.count++, u = On.bind(u), l.then(u, u)), t.state.loading |= 4, t.instance = n, Bl(n);
          return;
        }
        n = l.ownerDocument || l, a = Xr(a), (e = St.get(e)) && Vf(a, e), n = n.createElement("link"), Bl(n);
        var c = n;
        c._p = new Promise(function(f, i) {
          c.onload = f, c.onerror = i;
        }), Ql(n, "link", a), t.instance = n;
      }
      u.stylesheets === null && (u.stylesheets = /* @__PURE__ */ new Map()), u.stylesheets.set(t, l), (l = t.state.preload) && (t.state.loading & 3) === 0 && (u.count++, t = On.bind(u), l.addEventListener("load", t), l.addEventListener("error", t));
    }
  }
  function pv() {
    if (oe === null) throw Error(r(475));
    var l = oe;
    return l.stylesheets && l.count === 0 && Kf(l, l.stylesheets), 0 < l.count ? function(t) {
      var a = setTimeout(function() {
        if (l.stylesheets && Kf(l, l.stylesheets), l.unsuspend) {
          var u = l.unsuspend;
          l.unsuspend = null, u();
        }
      }, 6e4);
      return l.unsuspend = t, function() {
        l.unsuspend = null, clearTimeout(a);
      };
    } : null;
  }
  function On() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Kf(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Dn = null;
  function Kf(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Dn = /* @__PURE__ */ new Map(), t.forEach(Hv, l), Dn = null, On.call(l));
  }
  function Hv(l, t) {
    if (!(t.state.loading & 4)) {
      var a = Dn.get(l);
      if (a) var u = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Dn.set(l, a);
        for (var e = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < e.length; n++) {
          var c = e[n];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (a.set(c.dataset.precedence, c), u = c);
        }
        u && a.set(null, u);
      }
      e = t.instance, c = e.getAttribute("data-precedence"), n = a.get(c) || u, n === u && a.set(null, e), a.set(c, e), this.count++, u = On.bind(this), e.addEventListener("load", u), e.addEventListener("error", u), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4;
    }
  }
  var re = {
    $$typeof: cl,
    Provider: null,
    Consumer: null,
    _currentValue: X,
    _currentValue2: X,
    _threadCount: 0
  };
  function qv(l, t, a, u, e, n, c, f) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Xn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Xn(0), this.hiddenUpdates = Xn(null), this.identifierPrefix = u, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = f, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Kr(l, t, a, u, e, n, c, f, i, h, g, _) {
    return l = new qv(
      l,
      t,
      a,
      c,
      f,
      i,
      h,
      _
    ), t = 1, n === !0 && (t |= 24), n = et(3, null, null, t), l.current = n, n.stateNode = l, t = Oc(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: u,
      isDehydrated: a,
      cache: t
    }, Uc(n), l;
  }
  function Jr(l) {
    return l ? (l = Wa, l) : Wa;
  }
  function wr(l, t, a, u, e, n) {
    e = Jr(e), u.context === null ? u.context = e : u.pendingContext = e, u = $t(t), u.payload = { element: a }, n = n === void 0 ? null : n, n !== null && (u.callback = n), a = Ft(l, u, t), a !== null && (st(a, l, t), Qu(a, l, t));
  }
  function kr(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Jf(l, t) {
    kr(l, t), (l = l.alternate) && kr(l, t);
  }
  function Wr(l) {
    if (l.tag === 13) {
      var t = ka(l, 67108864);
      t !== null && st(t, l, 67108864), Jf(l, 67108864);
    }
  }
  var Mn = !0;
  function xv(l, t, a, u) {
    var e = S.T;
    S.T = null;
    var n = U.p;
    try {
      U.p = 2, wf(l, t, a, u);
    } finally {
      U.p = n, S.T = e;
    }
  }
  function Bv(l, t, a, u) {
    var e = S.T;
    S.T = null;
    var n = U.p;
    try {
      U.p = 8, wf(l, t, a, u);
    } finally {
      U.p = n, S.T = e;
    }
  }
  function wf(l, t, a, u) {
    if (Mn) {
      var e = kf(u);
      if (e === null)
        xf(
          l,
          t,
          u,
          Rn,
          a
        ), Fr(l, u);
      else if (jv(
        e,
        l,
        t,
        a,
        u
      ))
        u.stopPropagation();
      else if (Fr(l, u), t & 4 && -1 < Yv.indexOf(l)) {
        for (; e !== null; ) {
          var n = Ya(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var c = ma(n.pendingLanes);
                  if (c !== 0) {
                    var f = n;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; c; ) {
                      var i = 1 << 31 - at(c);
                      f.entanglements[1] |= i, c &= ~i;
                    }
                    Mt(n), (el & 6) === 0 && (rn = _t() + 500, ee(0));
                  }
                }
                break;
              case 13:
                f = ka(n, 2), f !== null && st(f, n, 2), vn(), Jf(n, 2);
            }
          if (n = kf(u), n === null && xf(
            l,
            t,
            u,
            Rn,
            a
          ), n === e) break;
          e = n;
        }
        e !== null && u.stopPropagation();
      } else
        xf(
          l,
          t,
          u,
          null,
          a
        );
    }
  }
  function kf(l) {
    return l = In(l), Wf(l);
  }
  var Rn = null;
  function Wf(l) {
    if (Rn = null, l = Ba(l), l !== null) {
      var t = p(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (l = V(t), l !== null) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Rn = l, null;
  }
  function $r(l) {
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
        switch (Ed()) {
          case si:
            return 2;
          case oi:
            return 8;
          case be:
          case _d:
            return 32;
          case ri:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var $f = !1, oa = null, ra = null, da = null, de = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map(), va = [], Yv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Fr(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        oa = null;
        break;
      case "dragenter":
      case "dragleave":
        ra = null;
        break;
      case "mouseover":
      case "mouseout":
        da = null;
        break;
      case "pointerover":
      case "pointerout":
        de.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ve.delete(t.pointerId);
    }
  }
  function he(l, t, a, u, e, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: u,
      nativeEvent: n,
      targetContainers: [e]
    }, t !== null && (t = Ya(t), t !== null && Wr(t)), l) : (l.eventSystemFlags |= u, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function jv(l, t, a, u, e) {
    switch (t) {
      case "focusin":
        return oa = he(
          oa,
          l,
          t,
          a,
          u,
          e
        ), !0;
      case "dragenter":
        return ra = he(
          ra,
          l,
          t,
          a,
          u,
          e
        ), !0;
      case "mouseover":
        return da = he(
          da,
          l,
          t,
          a,
          u,
          e
        ), !0;
      case "pointerover":
        var n = e.pointerId;
        return de.set(
          n,
          he(
            de.get(n) || null,
            l,
            t,
            a,
            u,
            e
          )
        ), !0;
      case "gotpointercapture":
        return n = e.pointerId, ve.set(
          n,
          he(
            ve.get(n) || null,
            l,
            t,
            a,
            u,
            e
          )
        ), !0;
    }
    return !1;
  }
  function Ir(l) {
    var t = Ba(l.target);
    if (t !== null) {
      var a = p(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = V(a), t !== null) {
            l.blockedOn = t, Nd(l.priority, function() {
              if (a.tag === 13) {
                var u = it();
                u = Qn(u);
                var e = ka(a, u);
                e !== null && st(e, a, u), Jf(a, u);
              }
            });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Un(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = kf(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var u = new a.constructor(
          a.type,
          a
        );
        Fn = u, a.target.dispatchEvent(u), Fn = null;
      } else
        return t = Ya(a), t !== null && Wr(t), l.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function Pr(l, t, a) {
    Un(l) && a.delete(t);
  }
  function Gv() {
    $f = !1, oa !== null && Un(oa) && (oa = null), ra !== null && Un(ra) && (ra = null), da !== null && Un(da) && (da = null), de.forEach(Pr), ve.forEach(Pr);
  }
  function Nn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, $f || ($f = !0, T.unstable_scheduleCallback(
      T.unstable_NormalPriority,
      Gv
    )));
  }
  var pn = null;
  function ld(l) {
    pn !== l && (pn = l, T.unstable_scheduleCallback(
      T.unstable_NormalPriority,
      function() {
        pn === l && (pn = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t], u = l[t + 1], e = l[t + 2];
          if (typeof u != "function") {
            if (Wf(u || a) === null)
              continue;
            break;
          }
          var n = Ya(a);
          n !== null && (l.splice(t, 3), t -= 3, kc(
            n,
            {
              pending: !0,
              data: e,
              method: a.method,
              action: u
            },
            u,
            e
          ));
        }
      }
    ));
  }
  function ye(l) {
    function t(i) {
      return Nn(i, l);
    }
    oa !== null && Nn(oa, l), ra !== null && Nn(ra, l), da !== null && Nn(da, l), de.forEach(t), ve.forEach(t);
    for (var a = 0; a < va.length; a++) {
      var u = va[a];
      u.blockedOn === l && (u.blockedOn = null);
    }
    for (; 0 < va.length && (a = va[0], a.blockedOn === null); )
      Ir(a), a.blockedOn === null && va.shift();
    if (a = (l.ownerDocument || l).$$reactFormReplay, a != null)
      for (u = 0; u < a.length; u += 3) {
        var e = a[u], n = a[u + 1], c = e[Wl] || null;
        if (typeof n == "function")
          c || ld(a);
        else if (c) {
          var f = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, c = n[Wl] || null)
              f = c.formAction;
            else if (Wf(e) !== null) continue;
          } else f = c.action;
          typeof f == "function" ? a[u + 1] = f : (a.splice(u, 3), u -= 3), ld(a);
        }
      }
  }
  function Ff(l) {
    this._internalRoot = l;
  }
  Hn.prototype.render = Ff.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(r(409));
    var a = t.current, u = it();
    wr(a, u, l, t, null, null);
  }, Hn.prototype.unmount = Ff.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      wr(l.current, 2, null, l, null, null), vn(), t[xa] = null;
    }
  };
  function Hn(l) {
    this._internalRoot = l;
  }
  Hn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = mi();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < va.length && t !== 0 && t < va[a].priority; a++) ;
      va.splice(a, 0, l), a === 0 && Ir(l);
    }
  };
  var td = O.version;
  if (td !== "19.1.1")
    throw Error(
      r(
        527,
        td,
        "19.1.1"
      )
    );
  U.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(r(188)) : (l = Object.keys(l).join(","), Error(r(268, l)));
    return l = R(t), l = l !== null ? E(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Cv = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: S,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var qn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!qn.isDisabled && qn.supportsFiber)
      try {
        bu = qn.inject(
          Cv
        ), tt = qn;
      } catch {
      }
  }
  return ge.createRoot = function(l, t) {
    if (!z(l)) throw Error(r(299));
    var a = !1, u = "", e = go, n = So, c = bo, f = null;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (f = t.unstable_transitionCallbacks)), t = Kr(
      l,
      1,
      !1,
      null,
      null,
      a,
      u,
      e,
      n,
      c,
      f,
      null
    ), l[xa] = t.current, qf(l), new Ff(t);
  }, ge.hydrateRoot = function(l, t, a) {
    if (!z(l)) throw Error(r(299));
    var u = !1, e = "", n = go, c = So, f = bo, i = null, h = null;
    return a != null && (a.unstable_strictMode === !0 && (u = !0), a.identifierPrefix !== void 0 && (e = a.identifierPrefix), a.onUncaughtError !== void 0 && (n = a.onUncaughtError), a.onCaughtError !== void 0 && (c = a.onCaughtError), a.onRecoverableError !== void 0 && (f = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (i = a.unstable_transitionCallbacks), a.formState !== void 0 && (h = a.formState)), t = Kr(
      l,
      1,
      !0,
      t,
      a ?? null,
      u,
      e,
      n,
      c,
      f,
      i,
      h
    ), t.context = Jr(null), a = t.current, u = it(), u = Qn(u), e = $t(u), e.callback = null, Ft(a, e, u), a = u, t.current.lanes = a, Eu(t, a), Mt(t), l[xa] = t.current, qf(l), new Hn(t);
  }, ge.version = "19.1.1", ge;
}
var rd;
function Wv() {
  if (rd) return li.exports;
  rd = 1;
  function T() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T);
      } catch (O) {
        console.error(O);
      }
  }
  return T(), li.exports = kv(), li.exports;
}
var $v = Wv();
const Fv = "bookmark-search_db", Iv = 1, xn = "bookmarks";
class Pv {
  db;
  open() {
    return this.db ? Promise.resolve(this.db) : new Promise((O, D) => {
      const r = indexedDB.open(Fv, Iv);
      r.onerror = (z) => {
        D(z.target.error);
      }, r.onsuccess = (z) => {
        this.db = z.target.result, O(this.db);
      }, r.onupgradeneeded = (z) => {
        const p = z.target.result;
        p.objectStoreNames.contains(xn) || p.createObjectStore(xn, { keyPath: "id" }).createIndex("id", "id", { unique: !0 });
      };
    });
  }
  close() {
    this.db && (this.db.close(), this.db = void 0);
  }
  async _getStore(O) {
    return (await this.open()).transaction(xn, O).objectStore(xn);
  }
  async add(O) {
    const D = await this._getStore("readwrite");
    return new Promise((r, z) => {
      const p = D.add({
        ...O,
        createdTime: Date.now()
      });
      p.onsuccess = (V) => r(V.target.result), p.onerror = (V) => z(V.target.error);
    });
  }
  async get(O) {
    const D = await this._getStore("readonly");
    return new Promise((r, z) => {
      const p = D.get(O);
      p.onsuccess = (V) => r(V.target.result), p.onerror = (V) => z(V.target.error);
    });
  }
  async getAll() {
    const O = await this._getStore("readonly");
    return new Promise((D, r) => {
      const z = O.getAll();
      z.onsuccess = (p) => D(p.target.result), z.onerror = (p) => r(p.target.error);
    });
  }
  async delete(O) {
    const D = await this._getStore("readwrite");
    return new Promise((r, z) => {
      const p = D.delete(O);
      p.onsuccess = () => r(!0), p.onerror = (V) => z(V.target.error);
    });
  }
}
const lh = new Pv(), th = (T, O = "提示") => {
  chrome.notifications.create({
    type: "basic",
    iconUrl: "icons/icon.png",
    title: O,
    message: T
  });
}, ah = "GET_USER_TEMPORARY_DATA", uh = 2e3, ei = "popup_type", yd = async () => new Promise((T) => {
  let O;
  const D = () => {
    T([]), O && clearTimeout(O);
  };
  O = setTimeout(D, uh), chrome.runtime.sendMessage(
    { type: ah },
    (r) => {
      chrome.runtime.lastError ? (console.log(chrome.runtime.lastError.message), D()) : (clearTimeout(O), r && r.data ? T(r.data) : T([]));
    }
  );
}), eh = ({
  data: T,
  setTemporaryData: O
}) => {
  const [D, r] = I.useState(T.title || ""), z = () => {
    O(void 0);
  }, p = () => {
    chrome.runtime.sendMessage({
      type: "SET_USER_TEMPORARY_DATA",
      data: {
        ...T,
        title: D
      }
    }), window.close();
  };
  return /* @__PURE__ */ q.jsxs("div", { className: "add-temporary__container", children: [
    /* @__PURE__ */ q.jsxs("div", { className: "add-temporary__set-title", children: [
      /* @__PURE__ */ q.jsx("div", { className: "title", children: "设置标题" }),
      /* @__PURE__ */ q.jsx(
        "input",
        {
          placeholder: "请输入标题",
          type: "text",
          autoFocus: !0,
          autoComplete: "off",
          value: D,
          onChange: (V) => r(V.target.value),
          className: "add-temporary__input"
        }
      )
    ] }),
    /* @__PURE__ */ q.jsxs("div", { className: "add-temporary__operation", children: [
      /* @__PURE__ */ q.jsx("div", { className: "is-button", onClick: z, children: "返回搜索页面" }),
      /* @__PURE__ */ q.jsx("div", { className: "is-button", onClick: p, children: "确定" })
    ] })
  ] });
}, nh = () => {
  const [T, O] = I.useState({
    openNewTab: "1",
    searchRule: ["url", "title", "parentTitle"],
    useDefaultSearch: "0"
  }), D = async () => {
    const r = await chrome.storage.local.get("searchBookmarkSetting");
    r.searchBookmarkSetting && O({
      ...T,
      ...r.searchBookmarkSetting
    });
  };
  return I.useEffect(() => {
    D();
  }, []), {
    setting: T
  };
}, fi = "bookMarkSearch", ch = 10, fh = (T) => {
  const O = new URL(chrome.runtime.getURL("/_favicon/"));
  return O.searchParams.set("pageUrl", T), O.searchParams.set("size", "24"), O.toString();
}, md = (T, O = "") => {
  const D = [];
  for (const r of T) {
    const z = O ? `${O}/${r.title}` : r.title;
    r.url && r.title ? D.push({
      url: r.url,
      title: r.title,
      id: r.id,
      parentId: r.parentId,
      parentTitle: z,
      faviconURL: fh(r.url)
    }) : Array.isArray(r.children) && D.push(
      ...md(r.children, z)
    );
  }
  return D;
}, ih = async () => {
  try {
    const [T, O] = await Promise.all([
      md(await chrome.bookmarks.getTree()),
      yd()
    ]);
    return [...T, ...O];
  } catch (T) {
    return console.error(T), [];
  }
}, sh = () => new Promise((T) => {
  chrome.storage.local.get(fi, (O) => {
    T(O[fi] || []);
  });
}), oh = (T, O) => T && O ? O.toLowerCase().includes(T.toLowerCase()) : !1, dd = (T) => T ? new URL(T).hostname : "", gd = () => {
  window.close();
}, rh = () => {
  const [T, O] = I.useState([]), [D, r] = I.useState([]), [z, p] = I.useState(!1), [V, $] = I.useState(""), [R, E] = I.useState([]), [x, F] = I.useState(""), { setting: ll } = nh();
  I.useEffect(() => {
    if (!V) {
      E(D), F(D[0]?.id || "");
      return;
    }
    const Y = ll.searchRule || ["url", "title", "parentTitle"], ml = Array.from({
      length: Y.length
    }), dl = /* @__PURE__ */ new Set(), cl = (Q) => T.filter((El) => {
      if (dl.has(El.id))
        return !1;
      const vl = oh(V, Reflect.get(El, Q));
      return vl && dl.add(El.id), vl;
    }).sort((El, vl) => {
      const hl = Reflect.get(El, Q) || "", Hl = Reflect.get(vl, Q) || "", wl = V.toLowerCase();
      if (Q === "title")
        return hl.length - Hl.length;
      if (Q === "url") {
        const Ml = hl.toLowerCase().indexOf(wl), zl = Hl.toLowerCase().indexOf(wl);
        return Ml - zl;
      }
      return 0;
    }), gl = ml.reduce(
      (Q, El, vl) => {
        const hl = Y[vl], Hl = cl(hl);
        return Hl.length && Q.push(...Hl), Q;
      },
      []
    );
    E(gl), F(gl[0]?.id || "");
  }, [V, T, D, ll.searchRule]), I.useEffect(() => {
    p(!0), Promise.all([ih(), sh()]).then(
      ([Y, ml]) => {
        O(Y);
        const dl = new Map(Y.map((gl) => [gl.id, gl])), cl = (ml || []).reduce(
          (gl, Q) => (dl.has(Q) && gl.push(dl.get(Q)), gl),
          []
        );
        r(cl), cl.length && (F(cl[0].id), E(cl)), p(!1);
      }
    );
  }, []);
  const [Nl, pl] = I.useState(!1);
  return {
    loading: z,
    keyword: V,
    setKeyword: $,
    searchBookmarks: R,
    selectedId: x,
    setSelectedId: F,
    open: async (Y, ml) => {
      const dl = await chrome.tabs.query({
        active: !0,
        currentWindow: !0
      }), cl = dl[0]?.url || "", gl = ["about:blank", "chrome://newtab/"].includes(cl);
      try {
        if (Nl)
          return;
        const { useDefaultSearch: Q, openNewTab: El } = ll;
        if (!Y && V && +Q == 1)
          await chrome.search.query({
            disposition: "NEW_TAB",
            text: V
          });
        else {
          const vl = T.find((Ml) => Ml.id === Y);
          if (!vl)
            return;
          const hl = [...D], Hl = hl.findIndex((Ml) => Ml.id === Y);
          Hl > -1 && hl.splice(Hl, 1), hl.unshift(vl), hl.length > ch && hl.pop(), r(hl), await chrome.storage.local.set({
            [fi]: hl.map(
              (Ml) => Ml.id
            )
          });
          let wl;
          if (!ml && +El == 1) {
            const Ml = await chrome.tabs.query({}), zl = dd(vl.url);
            Ml?.length && zl && (wl = Ml.find((Rt) => dd(Rt.url) === zl));
          }
          wl ? await Promise.all([
            // 切换激活的tab
            chrome.tabs.update(wl.id, { active: !0 }),
            () => {
              wl.windowId && chrome.windows.update(wl.windowId, { focused: !0 });
            }
          ]) : gl ? await chrome.tabs.update(dl[0].id, { url: vl.url }) : await chrome.tabs.create({ url: vl.url });
        }
        gd(), pl(!0);
      } catch (Q) {
        console.error(Q), alert(
          "出现未知错误,请刷新重试，或者提交issue至：https://github.com/llxq/bookmark-search/issues"
        );
      }
    }
  };
};
function ni(T) {
  const O = I.useRef(T);
  return I.useEffect(() => {
    O.current = T;
  }, [T]), O;
}
const dh = () => {
  const T = I.useRef(null), [O, D] = I.useState(!1), r = ni(O), z = I.useRef(null), {
    keyword: p,
    setKeyword: V,
    searchBookmarks: $,
    open: R,
    selectedId: E,
    setSelectedId: x
  } = rh(), F = ni($), ll = ni(E), [Nl, pl] = I.useState({ top: 0, height: 0 }), Jl = I.useCallback((Y) => {
    if (r.current)
      return;
    if (Y.key === "Escape") {
      gd();
      return;
    }
    const ml = F.current.findIndex(
      (dl) => dl.id === ll.current
    );
    if (ml > -1) {
      if (Y.key === "ArrowUp") {
        const dl = ml === 0 ? F.current.length - 1 : ml - 1;
        x(F.current[dl].id), Y.preventDefault();
      }
      if (Y.key === "ArrowDown") {
        const dl = ml === F.current.length - 1 ? 0 : ml + 1;
        x(F.current[dl].id), Y.preventDefault();
      }
    }
  }, []);
  return I.useLayoutEffect(() => (window.addEventListener("keydown", Jl), pl(
    z.current?.getBoundingClientRect() ?? {
      top: 0,
      height: 0
    }
  ), () => {
    window.removeEventListener("keydown", Jl);
  }), []), I.useEffect(() => {
    const Y = document.querySelector(`[data-id="${E}"]`);
    if (Y) {
      const { top: ml, height: dl } = Y.getBoundingClientRect(), { top: cl, height: gl } = Nl;
      ml >= cl ? ml + dl <= cl + gl || Y.scrollIntoView({
        block: "end"
      }) : Y.scrollIntoView({
        block: "start"
      });
    }
  }, [E, ll]), /* @__PURE__ */ q.jsxs("div", { className: "search__container", children: [
    /* @__PURE__ */ q.jsxs("div", { className: "search__input-container", children: [
      /* @__PURE__ */ q.jsx("div", { className: "tips", children: "Enter 打开选中项、Esc 取消、↑ 或 ↓ 切换选中项" }),
      /* @__PURE__ */ q.jsx(
        "input",
        {
          placeholder: "请输入要搜索的关键字",
          type: "text",
          autoComplete: "off",
          className: "search__input",
          autoFocus: !0,
          ref: T,
          value: p,
          onChange: (Y) => V(Y.target.value),
          onCompositionStart: () => D(!0),
          onCompositionEnd: () => D(!1),
          onKeyDown: (Y) => {
            !O && Y.key === "Enter" && (R(E, Y.metaKey || Y.ctrlKey), Y.preventDefault());
          }
        }
      )
    ] }),
    /* @__PURE__ */ q.jsx("div", { className: "search__result-container", children: /* @__PURE__ */ q.jsx("div", { className: "search__list", ref: z, children: $.map((Y) => /* @__PURE__ */ q.jsxs(
      "div",
      {
        onClick: (ml) => R(Y.id, ml.metaKey || ml.ctrlKey),
        className: `search__list-item ${E === Y.id ? "search__list-item-active" : ""}`,
        "data-id": Y.id,
        title: Y.title,
        children: [
          Y.faviconURL && /* @__PURE__ */ q.jsx(
            "img",
            {
              className: "search__list-item-favicon",
              src: Y.faviconURL,
              alt: Y.title
            }
          ),
          Y.title
        ]
      },
      Y.id
    )) }) })
  ] });
}, vh = ({
  name: T,
  value: O,
  onChange: D,
  options: r
}) => {
  const [z, p] = I.useState(O), V = ($) => {
    const R = z.includes($) ? z.filter((E) => E !== $) : [...z, $];
    p(R), D?.(R);
  };
  return /* @__PURE__ */ q.jsx("div", { className: "checkbox__group", children: r?.map(($) => /* @__PURE__ */ q.jsx(q.Fragment, { children: /* @__PURE__ */ q.jsxs("label", { className: "checkbox", children: [
    /* @__PURE__ */ q.jsx(
      "input",
      {
        type: "checkbox",
        name: T,
        value: $.value,
        checked: z.includes($.value),
        onChange: () => V($.value)
      }
    ),
    /* @__PURE__ */ q.jsx("span", { children: $.name })
  ] }) })) });
}, ci = ({
  label: T,
  tips: O,
  children: D
}) => /* @__PURE__ */ q.jsxs("div", { className: "form-item", children: [
  /* @__PURE__ */ q.jsxs("div", { className: "form-item__label", children: [
    T,
    O && /* @__PURE__ */ q.jsx("span", { className: "form-item__tips", children: O })
  ] }),
  /* @__PURE__ */ q.jsx("div", { className: "form-item__content", children: D })
] }), Sd = I.createContext({
  value: "0",
  name: "",
  onChange: (T) => {
  }
}), vd = ({
  children: T,
  name: O,
  value: D,
  onChange: r
}) => {
  const [z, p] = I.useState(D), V = ($) => {
    p($), r?.($);
  };
  return /* @__PURE__ */ q.jsx(
    Sd.Provider,
    {
      value: { value: z, name: O, onChange: V },
      children: /* @__PURE__ */ q.jsx("div", { className: "radio-group", children: T })
    }
  );
}, Bn = ({
  value: T,
  children: O
}) => {
  const { value: D, name: r, onChange: z } = I.useContext(Sd);
  return /* @__PURE__ */ q.jsxs("label", { className: "radio", children: [
    /* @__PURE__ */ q.jsx(
      "input",
      {
        type: "radio",
        name: r,
        value: T,
        checked: D === T,
        onChange: (p) => z(p.target.value)
      }
    ),
    /* @__PURE__ */ q.jsx("span", { children: O })
  ] });
}, hh = () => {
  const [T, O] = I.useState(!0), [D, r] = I.useState({
    openNewTab: "1",
    searchRule: ["url", "title", "parentTitle"],
    useDefaultSearch: "0"
  }), [z, p] = I.useState(!1), V = async () => {
    if (!z) {
      p(!0);
      try {
        await chrome.storage.local.set({ searchBookmarkSetting: D }), await chrome.notifications.create({
          type: "basic",
          iconUrl: "icons/icon.png",
          title: "提示",
          message: "设置已保存"
        });
      } finally {
        p(!1);
      }
    }
  }, $ = (R) => {
    r({ ...D, ...R });
  };
  return I.useEffect(() => {
    chrome.storage.local.get("searchBookmarkSetting", (R) => {
      R.searchBookmarkSetting && r({ ...D, ...R.searchBookmarkSetting }), O(!1);
    });
  }, []), !T && /* @__PURE__ */ q.jsxs("div", { className: "setting__container", children: [
    /* @__PURE__ */ q.jsxs("div", { className: "setting__content", children: [
      /* @__PURE__ */ q.jsx(
        ci,
        {
          label: "是否打开已存在匹配的标签页",
          tips: "按住 Ctrl/Command 键可以强制新窗口打开",
          children: /* @__PURE__ */ q.jsxs(
            vd,
            {
              name: "openNewTab",
              value: D.openNewTab,
              onChange: (R) => $({ openNewTab: R }),
              children: [
                /* @__PURE__ */ q.jsx(Bn, { value: "1", children: "是（通过匹配域名查找已打开页面）" }),
                /* @__PURE__ */ q.jsx(Bn, { value: "0", children: "否" })
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ q.jsx(ci, { label: "搜索规则", children: /* @__PURE__ */ q.jsx(
        vh,
        {
          name: "searchRule",
          value: D.searchRule,
          onChange: (R) => $({
            searchRule: R
          }),
          options: [
            { name: "标题", value: "title" },
            { name: "父文件夹标题", value: "parentTitle" },
            { name: "URL", value: "url" }
          ]
        }
      ) }),
      /* @__PURE__ */ q.jsx(ci, { label: "书签不存在时是否使用默认搜索引擎搜索关键字", children: /* @__PURE__ */ q.jsxs(
        vd,
        {
          name: "useDefaultSearch",
          value: D.useDefaultSearch,
          onChange: (R) => $({ useDefaultSearch: R }),
          children: [
            /* @__PURE__ */ q.jsx(Bn, { value: "0", children: "否" }),
            /* @__PURE__ */ q.jsx(Bn, { value: "1", children: "是" })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ q.jsx("div", { className: "setting__footer", children: /* @__PURE__ */ q.jsx("div", { className: "submit-button", onClick: V, children: "保存设置" }) })
  ] });
}, yh = () => {
  const [T, O] = I.useState([]);
  I.useEffect(() => {
    yd().then((z) => {
      O(z);
    });
  }, []);
  const D = (z) => {
    lh.delete(z.id).then(() => {
      th("删除成功");
    }), O(T.filter((p) => p.id !== z.id));
  }, r = (z) => {
    if (!z)
      return "";
    const p = new Date(z);
    return `${p.getFullYear()}-${p.getMonth() + 1}-${p.getDate()} ${p.getHours()}:${p.getMinutes()}:${p.getSeconds()}`;
  };
  return T.length ? /* @__PURE__ */ q.jsx("div", { className: "temporary-data__container", children: /* @__PURE__ */ q.jsx("div", { className: "temporary-data__list", children: T.map((z) => /* @__PURE__ */ q.jsxs("div", { className: "temporary-data__list-item-wrapper", children: [
    /* @__PURE__ */ q.jsxs(
      "div",
      {
        className: "temporary-data__list-item",
        title: z.title,
        children: [
          z.faviconURL && /* @__PURE__ */ q.jsx(
            "img",
            {
              className: "temporary-data__list-item-favicon",
              src: z.faviconURL,
              alt: z.title
            }
          ),
          z.title
        ]
      },
      z.id
    ),
    /* @__PURE__ */ q.jsx("div", { className: "create-time", children: r(z.createdTime) }),
    /* @__PURE__ */ q.jsx("div", { className: "temporary-data__item-operation", children: /* @__PURE__ */ q.jsx(
      "div",
      {
        className: "delete-btn",
        onClick: () => D(z),
        children: "删除"
      }
    ) })
  ] })) }) }) : /* @__PURE__ */ q.jsx("div", { className: "temporary-data__is-empty", children: "暂无数据" });
}, hd = [
  {
    name: "搜索",
    key: "search",
    component: /* @__PURE__ */ q.jsx(dh, {})
  },
  {
    name: "设置",
    key: "setting",
    component: /* @__PURE__ */ q.jsx(hh, {})
  },
  {
    name: "临时数据",
    key: "temporary",
    component: /* @__PURE__ */ q.jsx(yh, {})
  }
], mh = () => {
  const [T, O] = I.useState("temporary"), [D, r] = I.useState(void 0);
  return I.useEffect(() => {
    chrome.storage.local.get(ei).then((z) => {
      const p = Reflect.get(z, ei);
      p && (Date.now() - p._t > 2 * 1e3 ? chrome.storage.local.remove(ei) : r(p));
    });
  }, []), D ? /* @__PURE__ */ q.jsx(eh, { data: D, setTemporaryData: r }) : /* @__PURE__ */ q.jsxs("div", { className: "layout__container", children: [
    /* @__PURE__ */ q.jsx("div", { className: "layout__header", children: hd.map((z) => /* @__PURE__ */ q.jsx(
      "div",
      {
        className: `layout__tab ${z.key === T ? "active" : ""}`,
        onClick: () => O(z.key),
        children: z.name
      },
      z.key
    )) }),
    /* @__PURE__ */ q.jsx("div", { className: "layout__content", children: hd.find((z) => z.key === T)?.component })
  ] });
};
$v.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ q.jsx(I.StrictMode, { children: /* @__PURE__ */ q.jsx(mh, {}) })
);
