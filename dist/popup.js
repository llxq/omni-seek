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
var lo;
function xy() {
  if (lo) return me;
  lo = 1;
  var z = Symbol.for("react.transitional.element"), J = Symbol.for("react.fragment");
  function x(m, k, tl) {
    var al = null;
    if (tl !== void 0 && (al = "" + tl), k.key !== void 0 && (al = "" + k.key), "key" in k) {
      tl = {};
      for (var W in k)
        W !== "key" && (tl[W] = k[W]);
    } else tl = k;
    return k = tl.ref, {
      $$typeof: z,
      type: m,
      key: al,
      ref: k !== void 0 ? k : null,
      props: tl
    };
  }
  return me.Fragment = J, me.jsx = x, me.jsxs = x, me;
}
var to;
function Gy() {
  return to || (to = 1, Pc.exports = xy()), Pc.exports;
}
var Q = Gy(), li = { exports: {} }, X = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uo;
function jy() {
  if (uo) return X;
  uo = 1;
  var z = Symbol.for("react.transitional.element"), J = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), tl = Symbol.for("react.consumer"), al = Symbol.for("react.context"), W = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), E = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), el = Symbol.iterator;
  function F(s) {
    return s === null || typeof s != "object" ? null : (s = el && s[el] || s["@@iterator"], typeof s == "function" ? s : null);
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
  }, ql = Object.assign, Wl = {};
  function jl(s, A, M) {
    this.props = s, this.context = A, this.refs = Wl, this.updater = M || Ml;
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
  function Et() {
  }
  Et.prototype = jl.prototype;
  function gt(s, A, M) {
    this.props = s, this.context = A, this.refs = Wl, this.updater = M || Ml;
  }
  var Rl = gt.prototype = new Et();
  Rl.constructor = gt, ql(Rl, jl.prototype), Rl.isPureReactComponent = !0;
  var $l = Array.isArray, w = { H: null, A: null, T: null, S: null, V: null }, G = Object.prototype.hasOwnProperty;
  function V(s, A, M, O, H, P) {
    return M = P.ref, {
      $$typeof: z,
      type: s,
      key: A,
      ref: M !== void 0 ? M : null,
      props: P
    };
  }
  function I(s, A) {
    return V(
      s.type,
      A,
      void 0,
      void 0,
      void 0,
      s.props
    );
  }
  function dl(s) {
    return typeof s == "object" && s !== null && s.$$typeof === z;
  }
  function ct(s) {
    var A = { "=": "=0", ":": "=2" };
    return "$" + s.replace(/[=:]/g, function(M) {
      return A[M];
    });
  }
  var Bl = /\/+/g;
  function _l(s, A) {
    return typeof s == "object" && s !== null && s.key != null ? ct("" + s.key) : A.toString(36);
  }
  function At() {
  }
  function zt(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (typeof s.status == "string" ? s.then(At, At) : (s.status = "pending", s.then(
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
  function Xl(s, A, M, O, H) {
    var P = typeof s;
    (P === "undefined" || P === "boolean") && (s = null);
    var j = !1;
    if (s === null) j = !0;
    else
      switch (P) {
        case "bigint":
        case "string":
        case "number":
          j = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case z:
            case J:
              j = !0;
              break;
            case N:
              return j = s._init, Xl(
                j(s._payload),
                A,
                M,
                O,
                H
              );
          }
      }
    if (j)
      return H = H(s), j = O === "" ? "." + _l(s, 0) : O, $l(H) ? (M = "", j != null && (M = j.replace(Bl, "$&/") + "/"), Xl(H, A, M, "", function(Kt) {
        return Kt;
      })) : H != null && (dl(H) && (H = I(
        H,
        M + (H.key == null || s && s.key === H.key ? "" : ("" + H.key).replace(
          Bl,
          "$&/"
        ) + "/") + j
      )), A.push(H)), 1;
    j = 0;
    var Fl = O === "" ? "." : O + ":";
    if ($l(s))
      for (var rl = 0; rl < s.length; rl++)
        O = s[rl], P = Fl + _l(O, rl), j += Xl(
          O,
          A,
          M,
          P,
          H
        );
    else if (rl = F(s), typeof rl == "function")
      for (s = rl.call(s), rl = 0; !(O = s.next()).done; )
        O = O.value, P = Fl + _l(O, rl++), j += Xl(
          O,
          A,
          M,
          P,
          H
        );
    else if (P === "object") {
      if (typeof s.then == "function")
        return Xl(
          zt(s),
          A,
          M,
          O,
          H
        );
      throw A = String(s), Error(
        "Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return j;
  }
  function S(s, A, M) {
    if (s == null) return s;
    var O = [], H = 0;
    return Xl(s, O, "", "", function(P) {
      return A.call(M, P, H++);
    }), O;
  }
  function D(s) {
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
  function ol() {
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
      if (!dl(s))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return s;
    }
  }, X.Component = jl, X.Fragment = x, X.Profiler = k, X.PureComponent = gt, X.StrictMode = m, X.Suspense = _, X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w, X.__COMPILER_RUNTIME = {
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
    var O = ql({}, s.props), H = s.key, P = void 0;
    if (A != null)
      for (j in A.ref !== void 0 && (P = void 0), A.key !== void 0 && (H = "" + A.key), A)
        !G.call(A, j) || j === "key" || j === "__self" || j === "__source" || j === "ref" && A.ref === void 0 || (O[j] = A[j]);
    var j = arguments.length - 2;
    if (j === 1) O.children = M;
    else if (1 < j) {
      for (var Fl = Array(j), rl = 0; rl < j; rl++)
        Fl[rl] = arguments[rl + 2];
      O.children = Fl;
    }
    return V(s.type, H, void 0, void 0, P, O);
  }, X.createContext = function(s) {
    return s = {
      $$typeof: al,
      _currentValue: s,
      _currentValue2: s,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, s.Provider = s, s.Consumer = {
      $$typeof: tl,
      _context: s
    }, s;
  }, X.createElement = function(s, A, M) {
    var O, H = {}, P = null;
    if (A != null)
      for (O in A.key !== void 0 && (P = "" + A.key), A)
        G.call(A, O) && O !== "key" && O !== "__self" && O !== "__source" && (H[O] = A[O]);
    var j = arguments.length - 2;
    if (j === 1) H.children = M;
    else if (1 < j) {
      for (var Fl = Array(j), rl = 0; rl < j; rl++)
        Fl[rl] = arguments[rl + 2];
      H.children = Fl;
    }
    if (s && s.defaultProps)
      for (O in j = s.defaultProps, j)
        H[O] === void 0 && (H[O] = j[O]);
    return V(s, P, void 0, void 0, null, H);
  }, X.createRef = function() {
    return { current: null };
  }, X.forwardRef = function(s) {
    return { $$typeof: W, render: s };
  }, X.isValidElement = dl, X.lazy = function(s) {
    return {
      $$typeof: N,
      _payload: { _status: -1, _result: s },
      _init: D
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
      var O = s(), H = w.S;
      H !== null && H(M, O), typeof O == "object" && O !== null && typeof O.then == "function" && O.then(ol, B);
    } catch (P) {
      B(P);
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
    var O = w.H;
    if (typeof M == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return O.useEffect(s, A);
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
var ao;
function ci() {
  return ao || (ao = 1, li.exports = jy()), li.exports;
}
var hl = ci(), ti = { exports: {} }, ge = {}, ui = { exports: {} }, ai = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eo;
function Xy() {
  return eo || (eo = 1, (function(z) {
    function J(S, D) {
      var B = S.length;
      S.push(D);
      l: for (; 0 < B; ) {
        var ol = B - 1 >>> 1, s = S[ol];
        if (0 < k(s, D))
          S[ol] = D, S[B] = s, B = ol;
        else break l;
      }
    }
    function x(S) {
      return S.length === 0 ? null : S[0];
    }
    function m(S) {
      if (S.length === 0) return null;
      var D = S[0], B = S.pop();
      if (B !== D) {
        S[0] = B;
        l: for (var ol = 0, s = S.length, A = s >>> 1; ol < A; ) {
          var M = 2 * (ol + 1) - 1, O = S[M], H = M + 1, P = S[H];
          if (0 > k(O, B))
            H < s && 0 > k(P, O) ? (S[ol] = P, S[H] = B, ol = H) : (S[ol] = O, S[M] = B, ol = M);
          else if (H < s && 0 > k(P, B))
            S[ol] = P, S[H] = B, ol = H;
          else break l;
        }
      }
      return D;
    }
    function k(S, D) {
      var B = S.sortIndex - D.sortIndex;
      return B !== 0 ? B : S.id - D.id;
    }
    if (z.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var tl = performance;
      z.unstable_now = function() {
        return tl.now();
      };
    } else {
      var al = Date, W = al.now();
      z.unstable_now = function() {
        return al.now() - W;
      };
    }
    var _ = [], E = [], N = 1, el = null, F = 3, Ml = !1, ql = !1, Wl = !1, jl = !1, Et = typeof setTimeout == "function" ? setTimeout : null, gt = typeof clearTimeout == "function" ? clearTimeout : null, Rl = typeof setImmediate < "u" ? setImmediate : null;
    function $l(S) {
      for (var D = x(E); D !== null; ) {
        if (D.callback === null) m(E);
        else if (D.startTime <= S)
          m(E), D.sortIndex = D.expirationTime, J(_, D);
        else break;
        D = x(E);
      }
    }
    function w(S) {
      if (Wl = !1, $l(S), !ql)
        if (x(_) !== null)
          ql = !0, G || (G = !0, _l());
        else {
          var D = x(E);
          D !== null && Xl(w, D.startTime - S);
        }
    }
    var G = !1, V = -1, I = 5, dl = -1;
    function ct() {
      return jl ? !0 : !(z.unstable_now() - dl < I);
    }
    function Bl() {
      if (jl = !1, G) {
        var S = z.unstable_now();
        dl = S;
        var D = !0;
        try {
          l: {
            ql = !1, Wl && (Wl = !1, gt(V), V = -1), Ml = !0;
            var B = F;
            try {
              t: {
                for ($l(S), el = x(_); el !== null && !(el.expirationTime > S && ct()); ) {
                  var ol = el.callback;
                  if (typeof ol == "function") {
                    el.callback = null, F = el.priorityLevel;
                    var s = ol(
                      el.expirationTime <= S
                    );
                    if (S = z.unstable_now(), typeof s == "function") {
                      el.callback = s, $l(S), D = !0;
                      break t;
                    }
                    el === x(_) && m(_), $l(S);
                  } else m(_);
                  el = x(_);
                }
                if (el !== null) D = !0;
                else {
                  var A = x(E);
                  A !== null && Xl(
                    w,
                    A.startTime - S
                  ), D = !1;
                }
              }
              break l;
            } finally {
              el = null, F = B, Ml = !1;
            }
            D = void 0;
          }
        } finally {
          D ? _l() : G = !1;
        }
      }
    }
    var _l;
    if (typeof Rl == "function")
      _l = function() {
        Rl(Bl);
      };
    else if (typeof MessageChannel < "u") {
      var At = new MessageChannel(), zt = At.port2;
      At.port1.onmessage = Bl, _l = function() {
        zt.postMessage(null);
      };
    } else
      _l = function() {
        Et(Bl, 0);
      };
    function Xl(S, D) {
      V = Et(function() {
        S(z.unstable_now());
      }, D);
    }
    z.unstable_IdlePriority = 5, z.unstable_ImmediatePriority = 1, z.unstable_LowPriority = 4, z.unstable_NormalPriority = 3, z.unstable_Profiling = null, z.unstable_UserBlockingPriority = 2, z.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, z.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : I = 0 < S ? Math.floor(1e3 / S) : 5;
    }, z.unstable_getCurrentPriorityLevel = function() {
      return F;
    }, z.unstable_next = function(S) {
      switch (F) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = F;
      }
      var B = F;
      F = D;
      try {
        return S();
      } finally {
        F = B;
      }
    }, z.unstable_requestPaint = function() {
      jl = !0;
    }, z.unstable_runWithPriority = function(S, D) {
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
      var B = F;
      F = S;
      try {
        return D();
      } finally {
        F = B;
      }
    }, z.unstable_scheduleCallback = function(S, D, B) {
      var ol = z.unstable_now();
      switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? ol + B : ol) : B = ol, S) {
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
      return s = B + s, S = {
        id: N++,
        callback: D,
        priorityLevel: S,
        startTime: B,
        expirationTime: s,
        sortIndex: -1
      }, B > ol ? (S.sortIndex = B, J(E, S), x(_) === null && S === x(E) && (Wl ? (gt(V), V = -1) : Wl = !0, Xl(w, B - ol))) : (S.sortIndex = s, J(_, S), ql || Ml || (ql = !0, G || (G = !0, _l()))), S;
    }, z.unstable_shouldYield = ct, z.unstable_wrapCallback = function(S) {
      var D = F;
      return function() {
        var B = F;
        F = D;
        try {
          return S.apply(this, arguments);
        } finally {
          F = B;
        }
      };
    };
  })(ai)), ai;
}
var no;
function Qy() {
  return no || (no = 1, ui.exports = Xy()), ui.exports;
}
var ei = { exports: {} }, Zl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fo;
function Cy() {
  if (fo) return Zl;
  fo = 1;
  var z = ci();
  function J(_) {
    var E = "https://react.dev/errors/" + _;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var N = 2; N < arguments.length; N++)
        E += "&args[]=" + encodeURIComponent(arguments[N]);
    }
    return "Minified React error #" + _ + "; visit " + E + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function x() {
  }
  var m = {
    d: {
      f: x,
      r: function() {
        throw Error(J(522));
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
  }, k = Symbol.for("react.portal");
  function tl(_, E, N) {
    var el = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: k,
      key: el == null ? null : "" + el,
      children: _,
      containerInfo: E,
      implementation: N
    };
  }
  var al = z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function W(_, E) {
    if (_ === "font") return "";
    if (typeof E == "string")
      return E === "use-credentials" ? E : "";
  }
  return Zl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = m, Zl.createPortal = function(_, E) {
    var N = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!E || E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11)
      throw Error(J(299));
    return tl(_, E, null, N);
  }, Zl.flushSync = function(_) {
    var E = al.T, N = m.p;
    try {
      if (al.T = null, m.p = 2, _) return _();
    } finally {
      al.T = E, m.p = N, m.d.f();
    }
  }, Zl.preconnect = function(_, E) {
    typeof _ == "string" && (E ? (E = E.crossOrigin, E = typeof E == "string" ? E === "use-credentials" ? E : "" : void 0) : E = null, m.d.C(_, E));
  }, Zl.prefetchDNS = function(_) {
    typeof _ == "string" && m.d.D(_);
  }, Zl.preinit = function(_, E) {
    if (typeof _ == "string" && E && typeof E.as == "string") {
      var N = E.as, el = W(N, E.crossOrigin), F = typeof E.integrity == "string" ? E.integrity : void 0, Ml = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
      N === "style" ? m.d.S(
        _,
        typeof E.precedence == "string" ? E.precedence : void 0,
        {
          crossOrigin: el,
          integrity: F,
          fetchPriority: Ml
        }
      ) : N === "script" && m.d.X(_, {
        crossOrigin: el,
        integrity: F,
        fetchPriority: Ml,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0
      });
    }
  }, Zl.preinitModule = function(_, E) {
    if (typeof _ == "string")
      if (typeof E == "object" && E !== null) {
        if (E.as == null || E.as === "script") {
          var N = W(
            E.as,
            E.crossOrigin
          );
          m.d.M(_, {
            crossOrigin: N,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
            nonce: typeof E.nonce == "string" ? E.nonce : void 0
          });
        }
      } else E == null && m.d.M(_);
  }, Zl.preload = function(_, E) {
    if (typeof _ == "string" && typeof E == "object" && E !== null && typeof E.as == "string") {
      var N = E.as, el = W(N, E.crossOrigin);
      m.d.L(_, N, {
        crossOrigin: el,
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
  }, Zl.preloadModule = function(_, E) {
    if (typeof _ == "string")
      if (E) {
        var N = W(E.as, E.crossOrigin);
        m.d.m(_, {
          as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
          crossOrigin: N,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0
        });
      } else m.d.m(_);
  }, Zl.requestFormReset = function(_) {
    m.d.r(_);
  }, Zl.unstable_batchedUpdates = function(_, E) {
    return _(E);
  }, Zl.useFormState = function(_, E, N) {
    return al.H.useFormState(_, E, N);
  }, Zl.useFormStatus = function() {
    return al.H.useHostTransitionStatus();
  }, Zl.version = "19.1.1", Zl;
}
var co;
function Zy() {
  if (co) return ei.exports;
  co = 1;
  function z() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z);
      } catch (J) {
        console.error(J);
      }
  }
  return z(), ei.exports = Cy(), ei.exports;
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
var io;
function Vy() {
  if (io) return ge;
  io = 1;
  var z = Qy(), J = ci(), x = Zy();
  function m(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        t += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function k(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function tl(l) {
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
  function al(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function W(l) {
    if (tl(l) !== l)
      throw Error(m(188));
  }
  function _(l) {
    var t = l.alternate;
    if (!t) {
      if (t = tl(l), t === null) throw Error(m(188));
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
          if (n === u) return W(e), l;
          if (n === a) return W(e), t;
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
  var N = Object.assign, el = Symbol.for("react.element"), F = Symbol.for("react.transitional.element"), Ml = Symbol.for("react.portal"), ql = Symbol.for("react.fragment"), Wl = Symbol.for("react.strict_mode"), jl = Symbol.for("react.profiler"), Et = Symbol.for("react.provider"), gt = Symbol.for("react.consumer"), Rl = Symbol.for("react.context"), $l = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), G = Symbol.for("react.suspense_list"), V = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), dl = Symbol.for("react.activity"), ct = Symbol.for("react.memo_cache_sentinel"), Bl = Symbol.iterator;
  function _l(l) {
    return l === null || typeof l != "object" ? null : (l = Bl && l[Bl] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var At = Symbol.for("react.client.reference");
  function zt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === At ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case ql:
        return "Fragment";
      case jl:
        return "Profiler";
      case Wl:
        return "StrictMode";
      case w:
        return "Suspense";
      case G:
        return "SuspenseList";
      case dl:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Ml:
          return "Portal";
        case Rl:
          return (l.displayName || "Context") + ".Provider";
        case gt:
          return (l._context.displayName || "Context") + ".Consumer";
        case $l:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case V:
          return t = l.displayName || null, t !== null ? t : zt(l.type) || "Memo";
        case I:
          t = l._payload, l = l._init;
          try {
            return zt(l(t));
          } catch {
          }
      }
    return null;
  }
  var Xl = Array.isArray, S = J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = x.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ol = [], s = -1;
  function A(l) {
    return { current: l };
  }
  function M(l) {
    0 > s || (l.current = ol[s], ol[s] = null, s--);
  }
  function O(l, t) {
    s++, ol[s] = l.current, l.current = t;
  }
  var H = A(null), P = A(null), j = A(null), Fl = A(null);
  function rl(l, t) {
    switch (O(j, t), O(P, l), O(H, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Rd(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = Rd(t), l = Ud(t, l);
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
    M(H), O(H, l);
  }
  function Kt() {
    M(H), M(P), M(j);
  }
  function Gn(l) {
    l.memoizedState !== null && O(Fl, l);
    var t = H.current, u = Ud(t, l.type);
    t !== u && (O(P, l), O(H, u));
  }
  function be(l) {
    P.current === l && (M(H), M(P)), Fl.current === l && (M(Fl), oe._currentValue = B);
  }
  var jn = Object.prototype.hasOwnProperty, Xn = z.unstable_scheduleCallback, Qn = z.unstable_cancelCallback, ho = z.unstable_shouldYield, ro = z.unstable_requestPaint, _t = z.unstable_now, mo = z.unstable_getCurrentPriorityLevel, ii = z.unstable_ImmediatePriority, si = z.unstable_UserBlockingPriority, Te = z.unstable_NormalPriority, go = z.unstable_LowPriority, di = z.unstable_IdlePriority, So = z.log, bo = z.unstable_setDisableYieldValue, ba = null, Il = null;
  function Jt(l) {
    if (typeof So == "function" && bo(l), Il && typeof Il.setStrictMode == "function")
      try {
        Il.setStrictMode(ba, l);
      } catch {
      }
  }
  var Pl = Math.clz32 ? Math.clz32 : Ao, To = Math.log, Eo = Math.LN2;
  function Ao(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (To(l) / Eo | 0) | 0;
  }
  var Ee = 256, Ae = 4194304;
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
  function ze(l, t, u) {
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
  function zo(l, t) {
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
  function oi() {
    var l = Ee;
    return Ee <<= 1, (Ee & 4194048) === 0 && (Ee = 256), l;
  }
  function vi() {
    var l = Ae;
    return Ae <<= 1, (Ae & 62914560) === 0 && (Ae = 4194304), l;
  }
  function Cn(l) {
    for (var t = [], u = 0; 31 > u; u++) t.push(l);
    return t;
  }
  function Ea(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function _o(l, t, u, a, e, n) {
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
    a !== 0 && yi(l, a, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function yi(l, t, u) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - Pl(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | u & 4194090;
  }
  function hi(l, t) {
    var u = l.entangledLanes |= t;
    for (l = l.entanglements; u; ) {
      var a = 31 - Pl(u), e = 1 << a;
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
    var l = D.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : kd(l.type));
  }
  function Oo(l, t) {
    var u = D.p;
    try {
      return D.p = l, t();
    } finally {
      D.p = u;
    }
  }
  var wt = Math.random().toString(36).slice(2), Ql = "__reactFiber$" + wt, Ll = "__reactProps$" + wt, Bu = "__reactContainer$" + wt, Ln = "__reactEvents$" + wt, Do = "__reactListeners$" + wt, Mo = "__reactHandles$" + wt, mi = "__reactResources$" + wt, Aa = "__reactMarker$" + wt;
  function Kn(l) {
    delete l[Ql], delete l[Ll], delete l[Ln], delete l[Do], delete l[Mo];
  }
  function Yu(l) {
    var t = l[Ql];
    if (t) return t;
    for (var u = l.parentNode; u; ) {
      if (t = u[Bu] || u[Ql]) {
        if (u = t.alternate, t.child !== null || u !== null && u.child !== null)
          for (l = qd(l); l !== null; ) {
            if (u = l[Ql]) return u;
            l = qd(l);
          }
        return t;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function xu(l) {
    if (l = l[Ql] || l[Bu]) {
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
  var Ro = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), bi = {}, Ti = {};
  function Uo(l) {
    return jn.call(Ti, l) ? !0 : jn.call(bi, l) ? !1 : Ro.test(l) ? Ti[l] = !0 : (bi[l] = !0, !1);
  }
  function _e(l, t, u) {
    if (Uo(t))
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
                  var g = `
` + i[a].replace(" at new ", " at ");
                  return l.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", l.displayName)), g;
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
  function No(l) {
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
        t += No(l), l = l.return;
      while (l);
      return t;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  function it(l) {
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
  function Ho(l) {
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
  function De(l) {
    l._valueTracker || (l._valueTracker = Ho(l));
  }
  function _i(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var u = t.getValue(), a = "";
    return l && (a = zi(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== u ? (t.setValue(l), !0) : !1;
  }
  function Me(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var po = /[\n"\\]/g;
  function st(l) {
    return l.replace(
      po,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Wn(l, t, u, a, e, n, f, c) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + it(t)) : l.value !== "" + it(t) && (l.value = "" + it(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? $n(l, f, it(t)) : u != null ? $n(l, f, it(u)) : a != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + it(c) : l.removeAttribute("name");
  }
  function Oi(l, t, u, a, e, n, f, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || u != null) {
      if (!(n !== "submit" && n !== "reset" || t != null))
        return;
      u = u != null ? "" + it(u) : "", t = t != null ? "" + it(t) : u, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? e, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = c ? l.checked : !!a, l.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f);
  }
  function $n(l, t, u) {
    t === "number" && Me(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function Qu(l, t, u, a) {
    if (l = l.options, t) {
      t = {};
      for (var e = 0; e < u.length; e++)
        t["$" + u[e]] = !0;
      for (u = 0; u < l.length; u++)
        e = t.hasOwnProperty("$" + l[u].value), l[u].selected !== e && (l[u].selected = e), e && a && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + it(u), t = null, e = 0; e < l.length; e++) {
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
    if (t != null && (t = "" + it(t), t !== l.value && (l.value = t), u == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = u != null ? "" + it(u) : "";
  }
  function Mi(l, t, u, a) {
    if (t == null) {
      if (a != null) {
        if (u != null) throw Error(m(92));
        if (Xl(a)) {
          if (1 < a.length) throw Error(m(93));
          a = a[0];
        }
        u = a;
      }
      u == null && (u = ""), t = u;
    }
    u = it(t), l.defaultValue = u, a = l.textContent, a === u && a !== "" && a !== null && (l.value = a);
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
  var qo = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Ri(l, t, u) {
    var a = t.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, u) : typeof u != "number" || u === 0 || qo.has(t) ? t === "float" ? l.cssFloat = u : l[t] = ("" + u).trim() : l[t] = u + "px";
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
  var Bo = /* @__PURE__ */ new Map([
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
  ]), Yo = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Re(l) {
    return Yo.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var In = null;
  function Pn(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Zu = null, Vu = null;
  function Ni(l) {
    var t = xu(l);
    if (t && (l = t.stateNode)) {
      var u = l[Ll] || null;
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
              'input[name="' + st(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < u.length; t++) {
              var a = u[t];
              if (a !== l && a.form === l.form) {
                var e = a[Ll] || null;
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
          t = u.value, t != null && Qu(l, !!u.multiple, t, !1);
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
      if (lf = !1, (Zu !== null || Vu !== null) && (hn(), Zu && (t = Zu, l = Vu, Vu = Zu = null, Ni(t), l)))
        for (t = 0; t < l.length; t++) Ni(l[t]);
    }
  }
  function _a(l, t) {
    var u = l.stateNode;
    if (u === null) return null;
    var a = u[Ll] || null;
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
  var kt = null, uf = null, Ue = null;
  function pi() {
    if (Ue) return Ue;
    var l, t = uf, u = t.length, a, e = "value" in kt ? kt.value : kt.textContent, n = e.length;
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
  function qi() {
    return !1;
  }
  function Kl(l) {
    function t(u, a, e, n, f) {
      this._reactName = u, this._targetInst = e, this.type = a, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (u = l[c], this[c] = u ? u(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? He : qi, this.isPropagationStopped = qi, this;
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
  var Su = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, pe = Kl(Su), Da = N({}, Su, { view: 0, detail: 0 }), xo = Kl(Da), af, ef, Ma, qe = N({}, Da, {
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
  }), Bi = Kl(qe), Go = N({}, qe, { dataTransfer: 0 }), jo = Kl(Go), Xo = N({}, Da, { relatedTarget: 0 }), nf = Kl(Xo), Qo = N({}, Su, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Co = Kl(Qo), Zo = N({}, Su, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Vo = Kl(Zo), Lo = N({}, Su, { data: 0 }), Yi = Kl(Lo), Ko = {
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
  }, Jo = {
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
  }, wo = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function ko(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = wo[l]) ? !!t[l] : !1;
  }
  function ff() {
    return ko;
  }
  var Wo = N({}, Da, {
    key: function(l) {
      if (l.key) {
        var t = Ko[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Ne(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Jo[l.keyCode] || "Unidentified" : "";
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
      return l.type === "keypress" ? Ne(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Ne(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), $o = Kl(Wo), Fo = N({}, qe, {
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
  }), xi = Kl(Fo), Io = N({}, Da, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ff
  }), Po = Kl(Io), lv = N({}, Su, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), tv = Kl(lv), uv = N({}, qe, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), av = Kl(uv), ev = N({}, Su, {
    newState: 0,
    oldState: 0
  }), nv = Kl(ev), fv = [9, 13, 27, 32], cf = Ht && "CompositionEvent" in window, Ra = null;
  Ht && "documentMode" in document && (Ra = document.documentMode);
  var cv = Ht && "TextEvent" in window && !Ra, Gi = Ht && (!cf || Ra && 8 < Ra && 11 >= Ra), ji = " ", Xi = !1;
  function Qi(l, t) {
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
  function Ci(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Lu = !1;
  function iv(l, t) {
    switch (l) {
      case "compositionend":
        return Ci(t);
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
      return l === "compositionend" || !cf && Qi(l, t) ? (l = pi(), Ue = uf = kt = null, Lu = !1, l) : null;
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
  var dv = {
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
    return t === "input" ? !!dv[l.type] : t === "textarea";
  }
  function Vi(l, t, u, a) {
    Zu ? Vu ? Vu.push(a) : Vu = [a] : Zu = a, t = Tn(t, "onChange"), 0 < t.length && (u = new pe(
      "onChange",
      "change",
      null,
      u,
      a
    ), l.push({ event: u, listeners: t }));
  }
  var Ua = null, Na = null;
  function ov(l) {
    zd(l, 0);
  }
  function Be(l) {
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
      var df = "oninput" in document;
      if (!df) {
        var Ji = document.createElement("div");
        Ji.setAttribute("oninput", "return;"), df = typeof Ji.oninput == "function";
      }
      sf = df;
    } else sf = !1;
    Ki = sf && (!document.documentMode || 9 < document.documentMode);
  }
  function wi() {
    Ua && (Ua.detachEvent("onpropertychange", ki), Na = Ua = null);
  }
  function ki(l) {
    if (l.propertyName === "value" && Be(Na)) {
      var t = [];
      Vi(
        t,
        Na,
        l,
        Pn(l)
      ), Hi(ov, t);
    }
  }
  function vv(l, t, u) {
    l === "focusin" ? (wi(), Ua = t, Na = u, Ua.attachEvent("onpropertychange", ki)) : l === "focusout" && wi();
  }
  function yv(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Be(Na);
  }
  function hv(l, t) {
    if (l === "click") return Be(t);
  }
  function rv(l, t) {
    if (l === "input" || l === "change")
      return Be(t);
  }
  function mv(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var lt = typeof Object.is == "function" ? Object.is : mv;
  function Ha(l, t) {
    if (lt(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var u = Object.keys(l), a = Object.keys(t);
    if (u.length !== a.length) return !1;
    for (a = 0; a < u.length; a++) {
      var e = u[a];
      if (!jn.call(t, e) || !lt(l[e], t[e]))
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
    for (var t = Me(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof t.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = t.contentWindow;
      else break;
      t = Me(l.document);
    }
    return t;
  }
  function of(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var gv = Ht && "documentMode" in document && 11 >= document.documentMode, Ku = null, vf = null, pa = null, yf = !1;
  function Pi(l, t, u) {
    var a = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    yf || Ku == null || Ku !== Me(a) || (a = Ku, "selectionStart" in a && of(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), pa && Ha(pa, a) || (pa = a, a = Tn(vf, "onSelect"), 0 < a.length && (t = new pe(
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
  function St(l, t) {
    ns.set(l, t), gu(t, [l]);
  }
  var fs = /* @__PURE__ */ new WeakMap();
  function dt(l, t) {
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
  var ot = [], wu = 0, mf = 0;
  function Ye() {
    for (var l = wu, t = mf = wu = 0; t < l; ) {
      var u = ot[t];
      ot[t++] = null;
      var a = ot[t];
      ot[t++] = null;
      var e = ot[t];
      ot[t++] = null;
      var n = ot[t];
      if (ot[t++] = null, a !== null && e !== null) {
        var f = a.pending;
        f === null ? e.next = e : (e.next = f.next, f.next = e), a.pending = e;
      }
      n !== 0 && cs(u, e, n);
    }
  }
  function xe(l, t, u, a) {
    ot[wu++] = l, ot[wu++] = t, ot[wu++] = u, ot[wu++] = a, mf |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function gf(l, t, u, a) {
    return xe(l, t, u, a), Ge(l);
  }
  function ku(l, t) {
    return xe(l, null, null, t), Ge(l);
  }
  function cs(l, t, u) {
    l.lanes |= u;
    var a = l.alternate;
    a !== null && (a.lanes |= u);
    for (var e = !1, n = l.return; n !== null; )
      n.childLanes |= u, a = n.alternate, a !== null && (a.childLanes |= u), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - Pl(u), l = n.hiddenUpdates, a = l[e], a === null ? l[e] = [t] : a.push(t), t.lane = u | 536870912), n) : null;
  }
  function Ge(l) {
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
  function tt(l, t, u, a) {
    return new Ev(l, t, u, a);
  }
  function Sf(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function pt(l, t) {
    var u = l.alternate;
    return u === null ? (u = tt(
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
  function je(l, t, u, a, e, n) {
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
        case dl:
          return l = tt(31, u, t, e), l.elementType = dl, l.lanes = n, l;
        case ql:
          return Eu(u.children, e, n, t);
        case Wl:
          f = 8, e |= 24;
          break;
        case jl:
          return l = tt(12, u, t, e | 2), l.elementType = jl, l.lanes = n, l;
        case w:
          return l = tt(13, u, t, e), l.elementType = w, l.lanes = n, l;
        case G:
          return l = tt(19, u, t, e), l.elementType = G, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Et:
              case Rl:
                f = 10;
                break l;
              case gt:
                f = 9;
                break l;
              case $l:
                f = 11;
                break l;
              case V:
                f = 14;
                break l;
              case I:
                f = 16, a = null;
                break l;
            }
          f = 29, u = Error(
            m(130, l === null ? "null" : typeof l, "")
          ), a = null;
      }
    return t = tt(f, u, t, e), t.elementType = l, t.type = a, t.lanes = n, t;
  }
  function Eu(l, t, u, a) {
    return l = tt(7, l, a, t), l.lanes = u, l;
  }
  function bf(l, t, u) {
    return l = tt(6, l, null, t), l.lanes = u, l;
  }
  function Tf(l, t, u) {
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
  var $u = [], Fu = 0, Xe = null, Qe = 0, vt = [], yt = 0, Au = null, qt = 1, Bt = "";
  function zu(l, t) {
    $u[Fu++] = Qe, $u[Fu++] = Xe, Xe = l, Qe = t;
  }
  function ss(l, t, u) {
    vt[yt++] = qt, vt[yt++] = Bt, vt[yt++] = Au, Au = l;
    var a = qt;
    l = Bt;
    var e = 32 - Pl(a) - 1;
    a &= ~(1 << e), u += 1;
    var n = 32 - Pl(t) + e;
    if (30 < n) {
      var f = e - e % 5;
      n = (a & (1 << f) - 1).toString(32), a >>= f, e -= f, qt = 1 << 32 - Pl(t) + e | u << e | a, Bt = n + l;
    } else
      qt = 1 << n | u << e | a, Bt = l;
  }
  function Ef(l) {
    l.return !== null && (zu(l, 1), ss(l, 1, 0));
  }
  function Af(l) {
    for (; l === Xe; )
      Xe = $u[--Fu], $u[Fu] = null, Qe = $u[--Fu], $u[Fu] = null;
    for (; l === Au; )
      Au = vt[--yt], vt[yt] = null, Bt = vt[--yt], vt[yt] = null, qt = vt[--yt], vt[yt] = null;
  }
  var Vl = null, Sl = null, ul = !1, _u = null, Ot = !1, zf = Error(m(519));
  function Ou(l) {
    var t = Error(m(418, ""));
    throw Ya(dt(t, l)), zf;
  }
  function ds(l) {
    var t = l.stateNode, u = l.type, a = l.memoizedProps;
    switch (t[Ql] = l, t[Ll] = a, u) {
      case "dialog":
        K("cancel", t), K("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        K("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < ne.length; u++)
          K(ne[u], t);
        break;
      case "source":
        K("error", t);
        break;
      case "img":
      case "image":
      case "link":
        K("error", t), K("load", t);
        break;
      case "details":
        K("toggle", t);
        break;
      case "input":
        K("invalid", t), Oi(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        ), De(t);
        break;
      case "select":
        K("invalid", t);
        break;
      case "textarea":
        K("invalid", t), Mi(t, a.value, a.defaultValue, a.children), De(t);
    }
    u = a.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || t.textContent === "" + u || a.suppressHydrationWarning === !0 || Md(t.textContent, u) ? (a.popover != null && (K("beforetoggle", t), K("toggle", t)), a.onScroll != null && K("scroll", t), a.onScrollEnd != null && K("scrollend", t), a.onClick != null && (t.onclick = En), t = !0) : t = !1, t || Ou(l);
  }
  function os(l) {
    for (Vl = l.return; Vl; )
      switch (Vl.tag) {
        case 5:
        case 13:
          Ot = !1;
          return;
        case 27:
        case 3:
          Ot = !0;
          return;
        default:
          Vl = Vl.return;
      }
  }
  function qa(l) {
    if (l !== Vl) return !1;
    if (!ul) return os(l), ul = !0, !1;
    var t = l.tag, u;
    if ((u = t !== 3 && t !== 27) && ((u = t === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Xc(l.type, l.memoizedProps)), u = !u), u && Sl && Ou(l), os(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(m(317));
      l: {
        for (l = l.nextSibling, t = 0; l; ) {
          if (l.nodeType === 8)
            if (u = l.data, u === "/$") {
              if (t === 0) {
                Sl = Tt(l.nextSibling);
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
      t === 27 ? (t = Sl, du(l.type) ? (l = Vc, Vc = null, Sl = l) : Sl = t) : Sl = Vl ? Tt(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Ba() {
    Sl = Vl = null, ul = !1;
  }
  function vs() {
    var l = _u;
    return l !== null && (kl === null ? kl = l : kl.push.apply(
      kl,
      l
    ), _u = null), l;
  }
  function Ya(l) {
    _u === null ? _u = [l] : _u.push(l);
  }
  var _f = A(null), Du = null, Yt = null;
  function Wt(l, t, u) {
    O(_f, t._currentValue), t._currentValue = u;
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
          lt(e.pendingProps.value, f.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (e === Fl.current) {
        if (f = e.alternate, f === null) throw Error(m(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(oe) : l = [oe]);
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
    Du = l, Yt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Cl(l) {
    return ys(Du, l);
  }
  function Ze(l, t) {
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
  var rs = S.S;
  S.S = function(l, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && Ov(l, t), rs !== null && rs(l, t);
  };
  var Ru = A(null);
  function Uf() {
    var l = Ru.current;
    return l !== null ? l : yl.pooledCache;
  }
  function Ve(l, t) {
    t === null ? O(Ru, Ru.current) : O(Ru, t.pool);
  }
  function ms() {
    var l = Uf();
    return l === null ? null : { parent: Ol._currentValue, pool: l };
  }
  var Xa = Error(m(460)), gs = Error(m(474)), Le = Error(m(542)), Nf = { then: function() {
  } };
  function Ss(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Ke() {
  }
  function bs(l, t, u) {
    switch (u = l[u], u === void 0 ? l.push(t) : u !== t && (t.then(Ke, Ke), t = u), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, Es(l), l;
      default:
        if (typeof t.status == "string") t.then(Ke, Ke);
        else {
          if (l = yl, l !== null && 100 < l.shellSuspendCounter)
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
        throw Qa = t, Xa;
    }
  }
  var Qa = null;
  function Ts() {
    if (Qa === null) throw Error(m(459));
    var l = Qa;
    return Qa = null, l;
  }
  function Es(l) {
    if (l === Xa || l === Le)
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
      return e === null ? t.next = t : (t.next = e.next, e.next = t), a.pending = t, t = Ge(l), cs(l, null, u), t;
    }
    return xe(l, a, t, u), Ge(l);
  }
  function Ca(l, t, u) {
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
      var g = l.alternate;
      g !== null && (g = g.updateQueue, c = g.lastBaseUpdate, c !== f && (c === null ? g.firstBaseUpdate = y : c.next = y, g.lastBaseUpdate = i));
    }
    if (n !== null) {
      var T = e.baseState;
      f = 0, g = y = i = null, c = n;
      do {
        var h = c.lane & -536870913, r = h !== c.lane;
        if (r ? ($ & h) === h : (a & h) === h) {
          h !== 0 && h === Iu && (Bf = !0), g !== null && (g = g.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var Y = l, p = c;
            h = t;
            var sl = u;
            switch (p.tag) {
              case 1:
                if (Y = p.payload, typeof Y == "function") {
                  T = Y.call(sl, T, h);
                  break l;
                }
                T = Y;
                break l;
              case 3:
                Y.flags = Y.flags & -65537 | 128;
              case 0:
                if (Y = p.payload, h = typeof Y == "function" ? Y.call(sl, T, h) : Y, h == null) break l;
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
          }, g === null ? (y = g = r, i = T) : g = g.next = r, f |= h;
        if (c = c.next, c === null) {
          if (c = e.shared.pending, c === null)
            break;
          r = c, c = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
        }
      } while (!0);
      g === null && (i = T), e.baseState = i, e.firstBaseUpdate = y, e.lastBaseUpdate = g, n === null && (e.shared.lanes = 0), fu |= f, l.lanes = f, l.memoizedState = T;
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
  var la = A(null), Je = A(0);
  function _s(l, t) {
    l = Vt, O(Je, l), O(la, t), Vt = l | t.baseLanes;
  }
  function Yf() {
    O(Je, Vt), O(la, la.current);
  }
  function xf() {
    Vt = Je.current, M(la), M(Je);
  }
  var Pt = 0, C = null, cl = null, Al = null, we = !1, ta = !1, Uu = !1, ke = 0, La = 0, ua = null, Mv = 0;
  function Tl() {
    throw Error(m(321));
  }
  function Gf(l, t) {
    if (t === null) return !1;
    for (var u = 0; u < t.length && u < l.length; u++)
      if (!lt(l[u], t[u])) return !1;
    return !0;
  }
  function jf(l, t, u, a, e, n) {
    return Pt = n, C = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, S.H = l === null || l.memoizedState === null ? c0 : i0, Uu = !1, n = u(a, e), Uu = !1, ta && (n = Ds(
      t,
      u,
      a,
      e
    )), Os(l), n;
  }
  function Os(l) {
    S.H = ln;
    var t = cl !== null && cl.next !== null;
    if (Pt = 0, Al = cl = C = null, we = !1, La = 0, ua = null, t) throw Error(m(300));
    l === null || Nl || (l = l.dependencies, l !== null && Ce(l) && (Nl = !0));
  }
  function Ds(l, t, u, a) {
    C = l;
    var e = 0;
    do {
      if (ta && (ua = null), La = 0, ta = !1, 25 <= e) throw Error(m(301));
      if (e += 1, Al = cl = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      S.H = Bv, n = t(u, a);
    } while (ta);
    return n;
  }
  function Rv() {
    var l = S.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? Ka(t) : t, l = l.useState()[0], (cl !== null ? cl.memoizedState : null) !== l && (C.flags |= 1024), t;
  }
  function Xf() {
    var l = ke !== 0;
    return ke = 0, l;
  }
  function Qf(l, t, u) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~u;
  }
  function Cf(l) {
    if (we) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      we = !1;
    }
    Pt = 0, Al = cl = C = null, ta = !1, La = ke = 0, ua = null;
  }
  function Jl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Al === null ? C.memoizedState = Al = l : Al = Al.next = l, Al;
  }
  function zl() {
    if (cl === null) {
      var l = C.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = cl.next;
    var t = Al === null ? C.memoizedState : Al.next;
    if (t !== null)
      Al = t, cl = l;
    else {
      if (l === null)
        throw C.alternate === null ? Error(m(467)) : Error(m(310));
      cl = l, l = {
        memoizedState: cl.memoizedState,
        baseState: cl.baseState,
        baseQueue: cl.baseQueue,
        queue: cl.queue,
        next: null
      }, Al === null ? C.memoizedState = Al = l : Al = Al.next = l;
    }
    return Al;
  }
  function Zf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ka(l) {
    var t = La;
    return La += 1, ua === null && (ua = []), l = bs(ua, l, t), t = C, (Al === null ? t.memoizedState : Al.next) === null && (t = t.alternate, S.H = t === null || t.memoizedState === null ? c0 : i0), l;
  }
  function We(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Ka(l);
      if (l.$$typeof === Rl) return Cl(l);
    }
    throw Error(m(438, String(l)));
  }
  function Vf(l) {
    var t = null, u = C.updateQueue;
    if (u !== null && (t = u.memoCache), t == null) {
      var a = C.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), u === null && (u = Zf(), C.updateQueue = u), u.memoCache = t, u = t.data[t.index], u === void 0)
      for (u = t.data[t.index] = Array(l), a = 0; a < l; a++)
        u[a] = ct;
    return t.index++, u;
  }
  function Gt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function $e(l) {
    var t = zl();
    return Lf(t, cl, l);
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
      var c = f = null, i = null, y = t, g = !1;
      do {
        var T = y.lane & -536870913;
        if (T !== y.lane ? ($ & T) === T : (Pt & T) === T) {
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
          else if ((Pt & h) === h) {
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
            }, i === null ? (c = i = T, f = n) : i = i.next = T, C.lanes |= h, fu |= h;
          T = y.action, Uu && u(n, T), n = y.hasEagerState ? y.eagerState : u(n, T);
        } else
          h = {
            lane: T,
            revertLane: y.revertLane,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null
          }, i === null ? (c = i = h, f = n) : i = i.next = h, C.lanes |= T, fu |= T;
        y = y.next;
      } while (y !== null && y !== t);
      if (i === null ? f = n : i.next = c, !lt(n, l.memoizedState) && (Nl = !0, g && (u = Pu, u !== null)))
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
      lt(n, t.memoizedState) || (Nl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), u.lastRenderedState = n;
    }
    return [n, a];
  }
  function Ms(l, t, u) {
    var a = C, e = zl(), n = ul;
    if (n) {
      if (u === void 0) throw Error(m(407));
      u = u();
    } else u = t();
    var f = !lt(
      (cl || e).memoizedState,
      u
    );
    f && (e.memoizedState = u, Nl = !0), e = e.queue;
    var c = Ns.bind(null, a, e, l);
    if (Ja(2048, 8, c, [l]), e.getSnapshot !== t || f || Al !== null && Al.memoizedState.tag & 1) {
      if (a.flags |= 2048, aa(
        9,
        Fe(),
        Us.bind(
          null,
          a,
          e,
          u,
          t
        ),
        null
      ), yl === null) throw Error(m(349));
      n || (Pt & 124) !== 0 || Rs(a, t, u);
    }
    return u;
  }
  function Rs(l, t, u) {
    l.flags |= 16384, l = { getSnapshot: t, value: u }, t = C.updateQueue, t === null ? (t = Zf(), C.updateQueue = t, t.stores = [l]) : (u = t.stores, u === null ? t.stores = [l] : u.push(l));
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
      return !lt(l, u);
    } catch {
      return !0;
    }
  }
  function ps(l) {
    var t = ku(l, 2);
    t !== null && ft(t, l, 2);
  }
  function Jf(l) {
    var t = Jl();
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
      cl,
      typeof a == "function" ? a : Gt
    );
  }
  function Uv(l, t, u, a, e) {
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
      S.T !== null ? u(!0) : n.isTransition = !1, a(n), u = t.pending, u === null ? (n.next = t.pending = n, Bs(t, n)) : (n.next = u.next, t.pending = u.next = n);
    }
  }
  function Bs(l, t) {
    var u = t.action, a = t.payload, e = l.state;
    if (t.isTransition) {
      var n = S.T, f = {};
      S.T = f;
      try {
        var c = u(e, a), i = S.S;
        i !== null && i(f, c), Ys(l, t, c);
      } catch (y) {
        wf(l, t, y);
      } finally {
        S.T = n;
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
    if (ul) {
      var u = yl.formState;
      if (u !== null) {
        l: {
          var a = C;
          if (ul) {
            if (Sl) {
              t: {
                for (var e = Sl, n = Ot; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (e = Tt(
                    e.nextSibling
                  ), e === null) {
                    e = null;
                    break t;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                Sl = Tt(
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
    return u = Jl(), u.memoizedState = u.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: js,
      lastRenderedState: t
    }, u.queue = a, u = e0.bind(
      null,
      C,
      a
    ), a.dispatch = u, a = Jf(!1), n = If.bind(
      null,
      C,
      !1,
      a.queue
    ), a = Jl(), e = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = e, u = Uv.bind(
      null,
      C,
      e,
      n,
      u
    ), e.dispatch = u, a.memoizedState = l, [t, u, !1];
  }
  function Qs(l) {
    var t = zl();
    return Cs(t, cl, l);
  }
  function Cs(l, t, u) {
    if (t = Lf(
      l,
      t,
      js
    )[0], l = $e(Gt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = Ka(t);
      } catch (f) {
        throw f === Xa ? Le : f;
      }
    else a = t;
    t = zl();
    var e = t.queue, n = e.dispatch;
    return u !== t.memoizedState && (C.flags |= 2048, aa(
      9,
      Fe(),
      Nv.bind(null, e, u),
      null
    )), [a, n, l];
  }
  function Nv(l, t) {
    l.action = t;
  }
  function Zs(l) {
    var t = zl(), u = cl;
    if (u !== null)
      return Cs(t, u, l);
    zl(), t = t.memoizedState, u = zl();
    var a = u.queue.dispatch;
    return u.memoizedState = l, [t, a, !1];
  }
  function aa(l, t, u, a) {
    return l = { tag: l, create: u, deps: a, inst: t, next: null }, t = C.updateQueue, t === null && (t = Zf(), C.updateQueue = t), u = t.lastEffect, u === null ? t.lastEffect = l.next = l : (a = u.next, u.next = l, l.next = a, t.lastEffect = l), l;
  }
  function Fe() {
    return { destroy: void 0, resource: void 0 };
  }
  function Vs() {
    return zl().memoizedState;
  }
  function Ie(l, t, u, a) {
    var e = Jl();
    a = a === void 0 ? null : a, C.flags |= l, e.memoizedState = aa(
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
    cl !== null && a !== null && Gf(a, cl.memoizedState.deps) ? e.memoizedState = aa(t, n, u, a) : (C.flags |= l, e.memoizedState = aa(
      1 | t,
      n,
      u,
      a
    ));
  }
  function Ls(l, t) {
    Ie(8390656, 8, l, t);
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
    return u === void 0 || (Pt & 1073741824) !== 0 ? l.memoizedState = t : (l.memoizedState = u, l = ld(), C.lanes |= l, fu |= l, u);
  }
  function Is(l, t, u, a) {
    return lt(u, t) ? u : la.current !== null ? (l = Wf(l, u, a), lt(l, t) || (Nl = !0), l) : (Pt & 42) === 0 ? (Nl = !0, l.memoizedState = u) : (l = ld(), C.lanes |= l, fu |= l, t);
  }
  function Ps(l, t, u, a, e) {
    var n = D.p;
    D.p = n !== 0 && 8 > n ? n : 8;
    var f = S.T, c = {};
    S.T = c, If(l, !1, t, u);
    try {
      var i = e(), y = S.S;
      if (y !== null && y(c, i), i !== null && typeof i == "object" && typeof i.then == "function") {
        var g = Dv(
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
      D.p = n, S.T = f;
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
    wa(l, t, {}, nt());
  }
  function Ff() {
    return Cl(oe);
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
          var u = nt();
          l = Ft(u);
          var a = It(t, l, u);
          a !== null && (ft(a, t, u), Ca(a, t, u)), t = { cache: Mf() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function qv(l, t, u) {
    var a = nt();
    u = {
      lane: a,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Pe(l) ? n0(t, u) : (u = gf(l, t, u, a), u !== null && (ft(u, l, a), f0(u, t, a)));
  }
  function e0(l, t, u) {
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
    if (Pe(l)) n0(t, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var f = t.lastRenderedState, c = n(f, u);
          if (e.hasEagerState = !0, e.eagerState = c, lt(c, f))
            return xe(l, t, e, 0), yl === null && Ye(), !1;
        } catch {
        } finally {
        }
      if (u = gf(l, t, e, a), u !== null)
        return ft(u, l, a), f0(u, t, a), !0;
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
    }, Pe(l)) {
      if (t) throw Error(m(479));
    } else
      t = gf(
        l,
        u,
        a,
        2
      ), t !== null && ft(t, l, 2);
  }
  function Pe(l) {
    var t = l.alternate;
    return l === C || t !== null && t === C;
  }
  function n0(l, t) {
    ta = we = !0;
    var u = l.pending;
    u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t;
  }
  function f0(l, t, u) {
    if ((u & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, hi(l, u);
    }
  }
  var ln = {
    readContext: Cl,
    use: We,
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
    use: We,
    useCallback: function(l, t) {
      return Jl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Cl,
    useEffect: Ls,
    useImperativeHandle: function(l, t, u) {
      u = u != null ? u.concat([l]) : null, Ie(
        4194308,
        4,
        ks.bind(null, t, l),
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
      var u = Jl();
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
      var a = Jl();
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
        C,
        l
      ), [a.memoizedState, l];
    },
    useRef: function(l) {
      var t = Jl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = Jf(l);
      var t = l.queue, u = e0.bind(null, C, t);
      return t.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: kf,
    useDeferredValue: function(l, t) {
      var u = Jl();
      return Wf(u, l, t);
    },
    useTransition: function() {
      var l = Jf(!1);
      return l = Ps.bind(
        null,
        C,
        l.queue,
        !0,
        !1
      ), Jl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, u) {
      var a = C, e = Jl();
      if (ul) {
        if (u === void 0)
          throw Error(m(407));
        u = u();
      } else {
        if (u = t(), yl === null)
          throw Error(m(349));
        ($ & 124) !== 0 || Rs(a, t, u);
      }
      e.memoizedState = u;
      var n = { value: u, getSnapshot: t };
      return e.queue = n, Ls(Ns.bind(null, a, n, l), [
        l
      ]), a.flags |= 2048, aa(
        9,
        Fe(),
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
      var l = Jl(), t = yl.identifierPrefix;
      if (ul) {
        var u = Bt, a = qt;
        u = (a & ~(1 << 32 - Pl(a) - 1)).toString(32) + u, t = "«" + t + "R" + u, u = ke++, 0 < u && (t += "H" + u.toString(32)), t += "»";
      } else
        u = Mv++, t = "«" + t + "r" + u.toString(32) + "»";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: Ff,
    useFormState: Xs,
    useActionState: Xs,
    useOptimistic: function(l) {
      var t = Jl();
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
        C,
        !0,
        u
      ), u.dispatch = t, [l, t];
    },
    useMemoCache: Vf,
    useCacheRefresh: function() {
      return Jl().memoizedState = pv.bind(
        null,
        C
      );
    }
  }, i0 = {
    readContext: Cl,
    use: We,
    useCallback: $s,
    useContext: Cl,
    useEffect: Ks,
    useImperativeHandle: Ws,
    useInsertionEffect: Js,
    useLayoutEffect: ws,
    useMemo: Fs,
    useReducer: $e,
    useRef: Vs,
    useState: function() {
      return $e(Gt);
    },
    useDebugValue: kf,
    useDeferredValue: function(l, t) {
      var u = zl();
      return Is(
        u,
        cl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = $e(Gt)[0], t = zl().memoizedState;
      return [
        typeof l == "boolean" ? l : Ka(l),
        t
      ];
    },
    useSyncExternalStore: Ms,
    useId: u0,
    useHostTransitionStatus: Ff,
    useFormState: Qs,
    useActionState: Qs,
    useOptimistic: function(l, t) {
      var u = zl();
      return qs(u, cl, l, t);
    },
    useMemoCache: Vf,
    useCacheRefresh: a0
  }, Bv = {
    readContext: Cl,
    use: We,
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
      return cl === null ? Wf(u, l, t) : Is(
        u,
        cl.memoizedState,
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
      return cl !== null ? qs(u, cl, l, t) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Vf,
    useCacheRefresh: a0
  }, ea = null, ka = 0;
  function tn(l) {
    var t = ka;
    return ka += 1, ea === null && (ea = []), bs(ea, l, t);
  }
  function Wa(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function un(l, t) {
    throw t.$$typeof === el ? Error(m(525)) : (l = Object.prototype.toString.call(t), Error(
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
  function d0(l) {
    function t(o, d) {
      if (l) {
        var v = o.deletions;
        v === null ? (o.deletions = [d], o.flags |= 16) : v.push(d);
      }
    }
    function u(o, d) {
      if (!l) return null;
      for (; d !== null; )
        t(o, d), d = d.sibling;
      return null;
    }
    function a(o) {
      for (var d = /* @__PURE__ */ new Map(); o !== null; )
        o.key !== null ? d.set(o.key, o) : d.set(o.index, o), o = o.sibling;
      return d;
    }
    function e(o, d) {
      return o = pt(o, d), o.index = 0, o.sibling = null, o;
    }
    function n(o, d, v) {
      return o.index = v, l ? (v = o.alternate, v !== null ? (v = v.index, v < d ? (o.flags |= 67108866, d) : v) : (o.flags |= 67108866, d)) : (o.flags |= 1048576, d);
    }
    function f(o) {
      return l && o.alternate === null && (o.flags |= 67108866), o;
    }
    function c(o, d, v, b) {
      return d === null || d.tag !== 6 ? (d = bf(v, o.mode, b), d.return = o, d) : (d = e(d, v), d.return = o, d);
    }
    function i(o, d, v, b) {
      var R = v.type;
      return R === ql ? g(
        o,
        d,
        v.props.children,
        b,
        v.key
      ) : d !== null && (d.elementType === R || typeof R == "object" && R !== null && R.$$typeof === I && s0(R) === d.type) ? (d = e(d, v.props), Wa(d, v), d.return = o, d) : (d = je(
        v.type,
        v.key,
        v.props,
        null,
        o.mode,
        b
      ), Wa(d, v), d.return = o, d);
    }
    function y(o, d, v, b) {
      return d === null || d.tag !== 4 || d.stateNode.containerInfo !== v.containerInfo || d.stateNode.implementation !== v.implementation ? (d = Tf(v, o.mode, b), d.return = o, d) : (d = e(d, v.children || []), d.return = o, d);
    }
    function g(o, d, v, b, R) {
      return d === null || d.tag !== 7 ? (d = Eu(
        v,
        o.mode,
        b,
        R
      ), d.return = o, d) : (d = e(d, v), d.return = o, d);
    }
    function T(o, d, v) {
      if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint")
        return d = bf(
          "" + d,
          o.mode,
          v
        ), d.return = o, d;
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case F:
            return v = je(
              d.type,
              d.key,
              d.props,
              null,
              o.mode,
              v
            ), Wa(v, d), v.return = o, v;
          case Ml:
            return d = Tf(
              d,
              o.mode,
              v
            ), d.return = o, d;
          case I:
            var b = d._init;
            return d = b(d._payload), T(o, d, v);
        }
        if (Xl(d) || _l(d))
          return d = Eu(
            d,
            o.mode,
            v,
            null
          ), d.return = o, d;
        if (typeof d.then == "function")
          return T(o, tn(d), v);
        if (d.$$typeof === Rl)
          return T(
            o,
            Ze(o, d),
            v
          );
        un(o, d);
      }
      return null;
    }
    function h(o, d, v, b) {
      var R = d !== null ? d.key : null;
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint")
        return R !== null ? null : c(o, d, "" + v, b);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case F:
            return v.key === R ? i(o, d, v, b) : null;
          case Ml:
            return v.key === R ? y(o, d, v, b) : null;
          case I:
            return R = v._init, v = R(v._payload), h(o, d, v, b);
        }
        if (Xl(v) || _l(v))
          return R !== null ? null : g(o, d, v, b, null);
        if (typeof v.then == "function")
          return h(
            o,
            d,
            tn(v),
            b
          );
        if (v.$$typeof === Rl)
          return h(
            o,
            d,
            Ze(o, v),
            b
          );
        un(o, v);
      }
      return null;
    }
    function r(o, d, v, b, R) {
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
        return o = o.get(v) || null, c(d, o, "" + b, R);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case F:
            return o = o.get(
              b.key === null ? v : b.key
            ) || null, i(d, o, b, R);
          case Ml:
            return o = o.get(
              b.key === null ? v : b.key
            ) || null, y(d, o, b, R);
          case I:
            var Z = b._init;
            return b = Z(b._payload), r(
              o,
              d,
              v,
              b,
              R
            );
        }
        if (Xl(b) || _l(b))
          return o = o.get(v) || null, g(d, o, b, R, null);
        if (typeof b.then == "function")
          return r(
            o,
            d,
            v,
            tn(b),
            R
          );
        if (b.$$typeof === Rl)
          return r(
            o,
            d,
            v,
            Ze(d, b),
            R
          );
        un(d, b);
      }
      return null;
    }
    function Y(o, d, v, b) {
      for (var R = null, Z = null, U = d, q = d = 0, pl = null; U !== null && q < v.length; q++) {
        U.index > q ? (pl = U, U = null) : pl = U.sibling;
        var ll = h(
          o,
          U,
          v[q],
          b
        );
        if (ll === null) {
          U === null && (U = pl);
          break;
        }
        l && U && ll.alternate === null && t(o, U), d = n(ll, d, q), Z === null ? R = ll : Z.sibling = ll, Z = ll, U = pl;
      }
      if (q === v.length)
        return u(o, U), ul && zu(o, q), R;
      if (U === null) {
        for (; q < v.length; q++)
          U = T(o, v[q], b), U !== null && (d = n(
            U,
            d,
            q
          ), Z === null ? R = U : Z.sibling = U, Z = U);
        return ul && zu(o, q), R;
      }
      for (U = a(U); q < v.length; q++)
        pl = r(
          U,
          o,
          q,
          v[q],
          b
        ), pl !== null && (l && pl.alternate !== null && U.delete(
          pl.key === null ? q : pl.key
        ), d = n(
          pl,
          d,
          q
        ), Z === null ? R = pl : Z.sibling = pl, Z = pl);
      return l && U.forEach(function(ru) {
        return t(o, ru);
      }), ul && zu(o, q), R;
    }
    function p(o, d, v, b) {
      if (v == null) throw Error(m(151));
      for (var R = null, Z = null, U = d, q = d = 0, pl = null, ll = v.next(); U !== null && !ll.done; q++, ll = v.next()) {
        U.index > q ? (pl = U, U = null) : pl = U.sibling;
        var ru = h(o, U, ll.value, b);
        if (ru === null) {
          U === null && (U = pl);
          break;
        }
        l && U && ru.alternate === null && t(o, U), d = n(ru, d, q), Z === null ? R = ru : Z.sibling = ru, Z = ru, U = pl;
      }
      if (ll.done)
        return u(o, U), ul && zu(o, q), R;
      if (U === null) {
        for (; !ll.done; q++, ll = v.next())
          ll = T(o, ll.value, b), ll !== null && (d = n(ll, d, q), Z === null ? R = ll : Z.sibling = ll, Z = ll);
        return ul && zu(o, q), R;
      }
      for (U = a(U); !ll.done; q++, ll = v.next())
        ll = r(U, o, q, ll.value, b), ll !== null && (l && ll.alternate !== null && U.delete(ll.key === null ? q : ll.key), d = n(ll, d, q), Z === null ? R = ll : Z.sibling = ll, Z = ll);
      return l && U.forEach(function(Yy) {
        return t(o, Yy);
      }), ul && zu(o, q), R;
    }
    function sl(o, d, v, b) {
      if (typeof v == "object" && v !== null && v.type === ql && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case F:
            l: {
              for (var R = v.key; d !== null; ) {
                if (d.key === R) {
                  if (R = v.type, R === ql) {
                    if (d.tag === 7) {
                      u(
                        o,
                        d.sibling
                      ), b = e(
                        d,
                        v.props.children
                      ), b.return = o, o = b;
                      break l;
                    }
                  } else if (d.elementType === R || typeof R == "object" && R !== null && R.$$typeof === I && s0(R) === d.type) {
                    u(
                      o,
                      d.sibling
                    ), b = e(d, v.props), Wa(b, v), b.return = o, o = b;
                    break l;
                  }
                  u(o, d);
                  break;
                } else t(o, d);
                d = d.sibling;
              }
              v.type === ql ? (b = Eu(
                v.props.children,
                o.mode,
                b,
                v.key
              ), b.return = o, o = b) : (b = je(
                v.type,
                v.key,
                v.props,
                null,
                o.mode,
                b
              ), Wa(b, v), b.return = o, o = b);
            }
            return f(o);
          case Ml:
            l: {
              for (R = v.key; d !== null; ) {
                if (d.key === R)
                  if (d.tag === 4 && d.stateNode.containerInfo === v.containerInfo && d.stateNode.implementation === v.implementation) {
                    u(
                      o,
                      d.sibling
                    ), b = e(d, v.children || []), b.return = o, o = b;
                    break l;
                  } else {
                    u(o, d);
                    break;
                  }
                else t(o, d);
                d = d.sibling;
              }
              b = Tf(v, o.mode, b), b.return = o, o = b;
            }
            return f(o);
          case I:
            return R = v._init, v = R(v._payload), sl(
              o,
              d,
              v,
              b
            );
        }
        if (Xl(v))
          return Y(
            o,
            d,
            v,
            b
          );
        if (_l(v)) {
          if (R = _l(v), typeof R != "function") throw Error(m(150));
          return v = R.call(v), p(
            o,
            d,
            v,
            b
          );
        }
        if (typeof v.then == "function")
          return sl(
            o,
            d,
            tn(v),
            b
          );
        if (v.$$typeof === Rl)
          return sl(
            o,
            d,
            Ze(o, v),
            b
          );
        un(o, v);
      }
      return typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint" ? (v = "" + v, d !== null && d.tag === 6 ? (u(o, d.sibling), b = e(d, v), b.return = o, o = b) : (u(o, d), b = bf(v, o.mode, b), b.return = o, o = b), f(o)) : u(o, d);
    }
    return function(o, d, v, b) {
      try {
        ka = 0;
        var R = sl(
          o,
          d,
          v,
          b
        );
        return ea = null, R;
      } catch (U) {
        if (U === Xa || U === Le) throw U;
        var Z = tt(29, U, null, o.mode);
        return Z.lanes = b, Z.return = o, Z;
      } finally {
      }
    };
  }
  var na = d0(!0), o0 = d0(!1), ht = A(null), Dt = null;
  function lu(l) {
    var t = l.alternate;
    O(Dl, Dl.current & 1), O(ht, l), Dt === null && (t === null || la.current !== null || t.memoizedState !== null) && (Dt = l);
  }
  function v0(l) {
    if (l.tag === 22) {
      if (O(Dl, Dl.current), O(ht, l), Dt === null) {
        var t = l.alternate;
        t !== null && t.memoizedState !== null && (Dt = l);
      }
    } else tu();
  }
  function tu() {
    O(Dl, Dl.current), O(ht, ht.current);
  }
  function jt(l) {
    M(ht), Dt === l && (Dt = null), M(Dl);
  }
  var Dl = A(0);
  function an(l) {
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
      var a = nt(), e = Ft(a);
      e.payload = t, u != null && (e.callback = u), t = It(l, e, a), t !== null && (ft(t, l, a), Ca(t, l, a));
    },
    enqueueReplaceState: function(l, t, u) {
      l = l._reactInternals;
      var a = nt(), e = Ft(a);
      e.tag = 1, e.payload = t, u != null && (e.callback = u), t = It(l, e, a), t !== null && (ft(t, l, a), Ca(t, l, a));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var u = nt(), a = Ft(u);
      a.tag = 2, t != null && (a.callback = t), t = It(l, a, u), t !== null && (ft(t, l, u), Ca(t, l, u));
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
  function r0(l) {
    en(l);
  }
  function m0(l) {
    console.error(l);
  }
  function g0(l) {
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
      nn(l, t);
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
      ), u = ht.current, u !== null) {
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
    if (ul)
      return t = ht.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, a !== zf && (l = Error(m(422), { cause: a }), Ya(dt(l, u)))) : (a !== zf && (t = Error(m(423), {
        cause: a
      }), Ya(
        dt(t, u)
      )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, a = dt(a, u), e = tc(
        l.stateNode,
        a,
        e
      ), qf(l, e), bl !== 4 && (bl = 2)), !1;
    var n = Error(m(520), { cause: a });
    if (n = dt(n, u), ue === null ? ue = [n] : ue.push(n), bl !== 4 && (bl = 2), t === null) return !0;
    a = dt(a, u), u = t;
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
    t.child = l === null ? o0(t, null, u, a) : na(
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
    ), c = Xf(), l !== null && !Nl ? (Qf(l, t, e), Xt(l, t, e)) : (ul && c && Ef(t), t.flags |= 1, Yl(l, t, a, e), t.child);
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
      )) : (l = je(
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
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Ve(
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
      n !== null ? (Ve(t, n.cachePool), _s(t, n), tu(), t.memoizedState = null) : (l !== null && Ve(t, null), Yf(), tu());
    return Yl(l, t, e, u), t.child;
  }
  function D0(l, t, u, a) {
    var e = Uf();
    return e = e === null ? null : { parent: Ol._currentValue, pool: e }, t.memoizedState = {
      baseLanes: u,
      cachePool: e
    }, l !== null && Ve(t, null), Yf(), v0(t), l !== null && xa(l, t, a, !0), null;
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
  function uc(l, t, u, a, e) {
    return Mu(t), u = jf(
      l,
      t,
      u,
      a,
      void 0,
      e
    ), a = Xf(), l !== null && !Nl ? (Qf(l, t, e), Xt(l, t, e)) : (ul && a && Ef(t), t.flags |= 1, Yl(l, t, u, e), t.child);
  }
  function M0(l, t, u, a, e, n) {
    return Mu(t), t.updateQueue = null, u = Ds(
      t,
      a,
      u,
      e
    ), Os(l), a = Xf(), l !== null && !Nl ? (Qf(l, t, n), Xt(l, t, n)) : (ul && a && Ef(t), t.flags |= 1, Yl(l, t, u, n), t.child);
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
      var y = n.context, g = u.contextType;
      f = Wu, typeof g == "object" && g !== null && (f = Cl(g));
      var T = u.getDerivedStateFromProps;
      g = typeof T == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, g || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || y !== f) && h0(
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
      )) ? (g || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = y), n.props = a, n.state = y, n.context = f, a = i) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      n = t.stateNode, pf(l, t), f = t.memoizedProps, g = Nu(u, f), n.props = g, T = t.pendingProps, h = n.context, y = u.contextType, i = Wu, typeof y == "object" && y !== null && (i = Cl(y)), c = u.getDerivedStateFromProps, (y = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== T || h !== i) && h0(
        t,
        n,
        a,
        i
      ), $t = !1, h = t.memoizedState, n.state = h, Va(t, a, n, e), Za();
      var r = t.memoizedState;
      f !== T || h !== r || $t || l !== null && l.dependencies !== null && Ce(l.dependencies) ? (typeof c == "function" && (Pf(
        t,
        u,
        c,
        a
      ), r = t.memoizedState), (g = $t || y0(
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
    return l = l !== null ? l.childLanes & ~u : 0, t && (l |= rt), l;
  }
  function N0(l, t, u) {
    var a = t.pendingProps, e = !1, n = (t.flags & 128) !== 0, f;
    if ((f = n) || (f = l !== null && l.memoizedState === null ? !1 : (Dl.current & 2) !== 0), f && (e = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (ul) {
        if (e ? lu(t) : tu(), ul) {
          var c = Sl, i;
          if (i = c) {
            l: {
              for (i = c, c = Ot; i.nodeType !== 8; ) {
                if (!c) {
                  c = null;
                  break l;
                }
                if (i = Tt(
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
            }, i = tt(
              18,
              null,
              null,
              0
            ), i.stateNode = c, i.return = t, t.child = i, Vl = t, Sl = null, i = !0) : i = !1;
          }
          i || Ou(t);
        }
        if (c = t.memoizedState, c !== null && (c = c.dehydrated, c !== null))
          return Zc(c) ? t.lanes = 32 : t.lanes = 536870912, null;
        jt(t);
      }
      return c = a.children, a = a.fallback, e ? (tu(), e = t.mode, c = cn(
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
        )) : t.memoizedState !== null ? (tu(), t.child = l.child, t.flags |= 128, t = null) : (tu(), e = a.fallback, c = t.mode, a = cn(
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
        if (f = yl, f !== null && (a = u & -u, a = (a & 42) !== 0 ? 1 : Zn(a), a = (a & (f.suspendedLanes | u)) !== 0 ? 0 : a, a !== 0 && a !== i.retryLane))
          throw i.retryLane = a, ku(l, a), ft(f, l, a), E0;
        c.data === "$?" || Oc(), t = cc(
          l,
          t,
          u
        );
      } else
        c.data === "$?" ? (t.flags |= 192, t.child = l.child, t = null) : (l = i.treeContext, Sl = Tt(
          c.nextSibling
        ), Vl = t, ul = !0, _u = null, Ot = !1, l !== null && (vt[yt++] = qt, vt[yt++] = Bt, vt[yt++] = Au, qt = l.id, Bt = l.overflow, Au = t), t = fc(
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
    switch (O(Dl, a), e) {
      case "forwards":
        for (u = t.child, e = null; u !== null; )
          l = u.alternate, l !== null && an(l) === null && (e = u), u = u.sibling;
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
          if (l = e.alternate, l !== null && an(l) === null) {
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
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Ce(l)));
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
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), O(Dl, Dl.current), a) break;
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
      Nl = !1, ul && (t.flags & 1048576) !== 0 && ss(t, Qe, t.index);
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
              if (e = a.$$typeof, e === $l) {
                t.tag = 11, t = A0(
                  null,
                  t,
                  a,
                  l,
                  u
                );
                break l;
              } else if (e === V) {
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
            throw t = zt(a) || a, Error(m(306, t, ""));
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
              e = dt(
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
              for (Sl = Tt(l.firstChild), Vl = t, ul = !0, _u = null, Ot = !0, u = o0(
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
        return fn(l, t), l === null ? (u = Gd(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = u : ul || (u = t.type, l = t.pendingProps, a = An(
          j.current
        ).createElement(u), a[Ql] = t, a[Ll] = l, Gl(a, u, l), Ul(a), t.stateNode = a) : t.memoizedState = Gd(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Gn(t), l === null && ul && (a = t.stateNode = Bd(
          t.type,
          t.pendingProps,
          j.current
        ), Vl = t, Ot = !0, e = Sl, du(t.type) ? (Vc = e, Sl = Tt(
          a.firstChild
        )) : Sl = e), Yl(
          l,
          t,
          t.pendingProps.children,
          u
        ), fn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && ul && ((e = a = Sl) && (a = dy(
          a,
          t.type,
          t.pendingProps,
          Ot
        ), a !== null ? (t.stateNode = a, Vl = t, Sl = Tt(
          a.firstChild
        ), Ot = !1, e = !0) : e = !1), e || Ou(t)), Gn(t), e = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, a = n.children, Xc(e, n) ? a = null : f !== null && Xc(e, f) && (t.flags |= 32), t.memoizedState !== null && (e = jf(
          l,
          t,
          Rv,
          null,
          null,
          u
        ), oe._currentValue = e), fn(l, t), Yl(l, t, a, u), t.child;
      case 6:
        return l === null && ul && ((l = u = Sl) && (u = oy(
          u,
          t.pendingProps,
          Ot
        ), u !== null ? (t.stateNode = u, Vl = t, Sl = null, l = !0) : l = !1), l || Ou(t)), null;
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
        }, l === null ? (u = cn(
          a,
          u
        ), u.ref = t.ref, t.child = u, u.return = t, t = u) : (u = pt(l.child, a), u.ref = t.ref, t.child = u, u.return = t, t = u), t;
      case 22:
        return O0(l, t, u);
      case 24:
        return Mu(t), a = Cl(Ol), l === null ? (e = Uf(), e === null && (e = yl, n = Mf(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= u), e = n), t.memoizedState = {
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
  function Qt(l) {
    l.flags |= 4;
  }
  function B0(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Zd(t)) {
      if (t = ht.current, t !== null && (($ & 4194048) === $ ? Dt !== null : ($ & 62914560) !== $ && ($ & 536870912) === 0 || t !== Dt))
        throw Qa = Nf, gs;
      l.flags |= 8192;
    }
  }
  function sn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? vi() : 536870912, l.lanes |= t, sa |= t);
  }
  function $a(l, t) {
    if (!ul)
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
        return u = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), xt(Ol), Kt(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (qa(t) ? Qt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, vs())), gl(t), null;
      case 26:
        return u = t.memoizedState, l === null ? (Qt(t), u !== null ? (gl(t), B0(t, u)) : (gl(t), t.flags &= -16777217)) : u ? u !== l.memoizedState ? (Qt(t), gl(t), B0(t, u)) : (gl(t), t.flags &= -16777217) : (l.memoizedProps !== a && Qt(t), gl(t), t.flags &= -16777217), null;
      case 27:
        be(t), u = j.current;
        var e = t.type;
        if (l !== null && t.stateNode != null)
          l.memoizedProps !== a && Qt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(m(166));
            return gl(t), null;
          }
          l = H.current, qa(t) ? ds(t) : (l = Bd(e, a, u), t.stateNode = l, Qt(t));
        }
        return gl(t), null;
      case 5:
        if (be(t), u = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && Qt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(m(166));
            return gl(t), null;
          }
          if (l = H.current, qa(t))
            ds(t);
          else {
            switch (e = An(
              j.current
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
            l[Ql] = t, l[Ll] = a;
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
            l && Qt(t);
          }
        }
        return gl(t), t.flags &= -16777217, null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== a && Qt(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(m(166));
          if (l = j.current, qa(t)) {
            if (l = t.stateNode, u = t.memoizedProps, a = null, e = Vl, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  a = e.memoizedProps;
              }
            l[Ql] = t, l = !!(l.nodeValue === u || a !== null && a.suppressHydrationWarning === !0 || Md(l.nodeValue, u)), l || Ou(t);
          } else
            l = An(l).createTextNode(
              a
            ), l[Ql] = t, t.stateNode = l;
        }
        return gl(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = qa(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(m(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(m(317));
              e[Ql] = t;
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
        return u !== l && u && (t.child.flags |= 8192), sn(t, t.updateQueue), gl(t), null;
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
                if (n = an(l), n !== null) {
                  for (t.flags |= 128, $a(e, !1), l = n.updateQueue, t.updateQueue = l, sn(t, l), t.subtreeFlags = 0, l = u, u = t.child; u !== null; )
                    is(u, l), u = u.sibling;
                  return O(
                    Dl,
                    Dl.current & 1 | 2
                  ), t.child;
                }
                l = l.sibling;
              }
            e.tail !== null && _t() > vn && (t.flags |= 128, a = !0, $a(e, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (l = an(n), l !== null) {
              if (t.flags |= 128, a = !0, l = l.updateQueue, t.updateQueue = l, sn(t, l), $a(e, !0), e.tail === null && e.tailMode === "hidden" && !n.alternate && !ul)
                return gl(t), null;
            } else
              2 * _t() - e.renderingStartTime > vn && u !== 536870912 && (t.flags |= 128, a = !0, $a(e, !1), t.lanes = 4194304);
          e.isBackwards ? (n.sibling = t.child, t.child = n) : (l = e.last, l !== null ? l.sibling = n : t.child = n, e.last = n);
        }
        return e.tail !== null ? (t = e.tail, e.rendering = t, e.tail = t.sibling, e.renderingStartTime = _t(), t.sibling = null, l = Dl.current, O(Dl, a ? l & 1 | 2 : l & 1), t) : (gl(t), null);
      case 22:
      case 23:
        return jt(t), xf(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (u & 536870912) !== 0 && (t.flags & 128) === 0 && (gl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : gl(t), u = t.updateQueue, u !== null && sn(t, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== u && (t.flags |= 2048), l !== null && M(Ru), null;
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
        return be(t), null;
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
        be(t);
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
  function dc(l, t, u) {
    try {
      var a = l.stateNode;
      ny(a, l.type, u, t), a[Ll] = t;
    } catch (e) {
      vl(l, l.return, e);
    }
  }
  function X0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && du(l.type) || l.tag === 4;
  }
  function oc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || X0(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && du(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function vc(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, t) : (t = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, t.appendChild(l), u = u._reactRootContainer, u != null || t.onclick !== null || (t.onclick = En));
    else if (a !== 4 && (a === 27 && du(l.type) && (u = l.stateNode, t = null), l = l.child, l !== null))
      for (vc(l, t, u), l = l.sibling; l !== null; )
        vc(l, t, u), l = l.sibling;
  }
  function dn(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? u.insertBefore(l, t) : u.appendChild(l);
    else if (a !== 4 && (a === 27 && du(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (dn(l, t, u), l = l.sibling; l !== null; )
        dn(l, t, u), l = l.sibling;
  }
  function Q0(l) {
    var t = l.stateNode, u = l.memoizedProps;
    try {
      for (var a = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      Gl(t, a, u), t[Ql] = l, t[Ll] = u;
    } catch (n) {
      vl(l, l.return, n);
    }
  }
  var Ct = !1, El = !1, yc = !1, C0 = typeof WeakSet == "function" ? WeakSet : Set, Hl = null;
  function Xv(l, t) {
    if (l = l.containerInfo, Gc = Rn, l = Ii(l), of(l)) {
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
    for (jc = { focusedElem: l, selectionRange: u }, Rn = !1, Hl = t; Hl !== null; )
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
                  Cc(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Cc(l);
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
        t === null && a & 4 && Q0(u);
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
        if (a = u.memoizedState !== null || Ct, !a) {
          t = t !== null && t.memoizedState !== null || El, e = Ct;
          var n = El;
          Ct = a, (El = t) && !n ? eu(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : au(l, u), Ct = e, El = n;
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
  var ml = null, wl = !1;
  function Zt(l, t, u) {
    for (u = u.child; u !== null; )
      L0(l, t, u), u = u.sibling;
  }
  function L0(l, t, u) {
    if (Il && typeof Il.onCommitFiberUnmount == "function")
      try {
        Il.onCommitFiberUnmount(ba, u);
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
        var a = ml, e = wl;
        du(u.type) && (ml = u.stateNode, wl = !1), Zt(
          l,
          t,
          u
        ), ce(u.stateNode), ml = a, wl = e;
        break;
      case 5:
        El || Mt(u, t);
      case 6:
        if (a = ml, e = wl, ml = null, Zt(
          l,
          t,
          u
        ), ml = a, wl = e, ml !== null)
          if (wl)
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
        ml !== null && (wl ? (l = ml, pd(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), re(l)) : pd(ml, u.stateNode));
        break;
      case 4:
        a = ml, e = wl, ml = u.stateNode.containerInfo, wl = !0, Zt(
          l,
          t,
          u
        ), ml = a, wl = e;
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
  function Qv(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new C0()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new C0()), t;
      default:
        throw Error(m(435, l.tag));
    }
  }
  function hc(l, t) {
    var u = Qv(l);
    t.forEach(function(a) {
      var e = Wv.bind(null, l, a);
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
              if (du(c.type)) {
                ml = c.stateNode, wl = !1;
                break l;
              }
              break;
            case 5:
              ml = c.stateNode, wl = !1;
              break l;
            case 3:
            case 4:
              ml = c.stateNode.containerInfo, wl = !0;
              break l;
          }
          c = c.return;
        }
        if (ml === null) throw Error(m(160));
        L0(n, f, e), ml = null, wl = !1, n = e.alternate, n !== null && (n.return = null), e.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        J0(t, l), t = t.sibling;
  }
  var bt = null;
  function J0(l, t) {
    var u = l.alternate, a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ut(t, l), at(l), a & 4 && (uu(3, l, l.return), Fa(3, l), uu(5, l, l.return));
        break;
      case 1:
        ut(t, l), at(l), a & 512 && (El || u === null || Mt(u, u.return)), a & 64 && Ct && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? a : u.concat(a))));
        break;
      case 26:
        var e = bt;
        if (ut(t, l), at(l), a & 512 && (El || u === null || Mt(u, u.return)), a & 4) {
          var n = u !== null ? u.memoizedState : null;
          if (a = l.memoizedState, u === null)
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  a = l.type, u = l.memoizedProps, e = e.ownerDocument || e;
                  t: switch (a) {
                    case "title":
                      n = e.getElementsByTagName("title")[0], (!n || n[Aa] || n[Ql] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(a), e.head.insertBefore(
                        n,
                        e.querySelector("head > title")
                      )), Gl(n, a, u), n[Ql] = l, Ul(n), a = n;
                      break l;
                    case "link":
                      var f = Qd(
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
                      if (f = Qd(
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
                  n[Ql] = l, Ul(n), a = n;
                }
                l.stateNode = a;
              } else
                Cd(
                  e,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = Xd(
                e,
                a,
                l.memoizedProps
              );
          else
            n !== a ? (n === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : n.count--, a === null ? Cd(
              e,
              l.type,
              l.stateNode
            ) : Xd(
              e,
              a,
              l.memoizedProps
            )) : a === null && l.stateNode !== null && dc(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        ut(t, l), at(l), a & 512 && (El || u === null || Mt(u, u.return)), u !== null && a & 4 && dc(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (ut(t, l), at(l), a & 512 && (El || u === null || Mt(u, u.return)), l.flags & 32) {
          e = l.stateNode;
          try {
            Cu(e, "");
          } catch (r) {
            vl(l, l.return, r);
          }
        }
        a & 4 && l.stateNode != null && (e = l.memoizedProps, dc(
          l,
          e,
          u !== null ? u.memoizedProps : e
        )), a & 1024 && (yc = !0);
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
        if (On = null, e = bt, bt = zn(t.containerInfo), ut(t, l), bt = e, at(l), a & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            re(t.containerInfo);
          } catch (r) {
            vl(l, l.return, r);
          }
        yc && (yc = !1, w0(l));
        break;
      case 4:
        a = bt, bt = zn(
          l.stateNode.containerInfo
        ), ut(t, l), at(l), bt = a;
        break;
      case 12:
        ut(t, l), at(l);
        break;
      case 13:
        ut(t, l), at(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Tc = _t()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, hc(l, a)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var i = u !== null && u.memoizedState !== null, y = Ct, g = El;
        if (Ct = y || e, El = g || i, ut(t, l), El = g, Ct = y, at(l), a & 8192)
          l: for (t = l.stateNode, t._visibility = e ? t._visibility & -2 : t._visibility | 1, e && (u === null || i || Ct || El || Hu(l)), u = null, t = l; ; ) {
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
        ut(t, l), at(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, hc(l, a)));
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
          if (X0(a)) {
            u = a;
            break;
          }
          a = a.return;
        }
        if (u == null) throw Error(m(160));
        switch (u.tag) {
          case 27:
            var e = u.stateNode, n = oc(l);
            dn(l, n, e);
            break;
          case 5:
            var f = u.stateNode;
            u.flags & 32 && (Cu(f, ""), u.flags &= -33);
            var c = oc(l);
            dn(l, c, f);
            break;
          case 3:
          case 4:
            var i = u.stateNode.containerInfo, y = oc(l);
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
          Q0(n);
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
          bt,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        ca(l);
        break;
      case 3:
      case 4:
        var t = bt;
        bt = zn(l.stateNode.containerInfo), ca(l), bt = t;
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
          uu(8, t, t.return), on(t);
          break;
        case 22:
          u = t.stateNode, u._visibility & 2 && (u._visibility &= -3, on(t));
          break;
        default:
          on(t);
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
  var Cv = {
    getCacheForType: function(l) {
      var t = Cl(Ol), u = t.data.get(l);
      return u === void 0 && (u = l(), t.data.set(l, u)), u;
    }
  }, Zv = typeof WeakMap == "function" ? WeakMap : Map, nl = 0, yl = null, L = null, $ = 0, fl = 0, et = null, nu = !1, ia = !1, gc = !1, Vt = 0, bl = 0, fu = 0, pu = 0, Sc = 0, rt = 0, sa = 0, ue = null, kl = null, bc = !1, Tc = 0, vn = 1 / 0, yn = null, cu = null, xl = 0, iu = null, da = null, oa = 0, Ec = 0, Ac = null, P0 = null, ae = 0, zc = null;
  function nt() {
    if ((nl & 2) !== 0 && $ !== 0)
      return $ & -$;
    if (S.T !== null) {
      var l = Iu;
      return l !== 0 ? l : Nc();
    }
    return ri();
  }
  function ld() {
    rt === 0 && (rt = ($ & 536870912) === 0 || ul ? oi() : 536870912);
    var l = ht.current;
    return l !== null && (l.flags |= 32), rt;
  }
  function ft(l, t, u) {
    (l === yl && (fl === 2 || fl === 9) || l.cancelPendingCommit !== null) && (va(l, 0), su(
      l,
      $,
      rt,
      !1
    )), Ea(l, u), ((nl & 2) === 0 || l !== yl) && (l === yl && ((nl & 2) === 0 && (pu |= u), bl === 4 && su(
      l,
      $,
      rt,
      !1
    )), Ut(l));
  }
  function td(l, t, u) {
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
                n = kl, kl = e, n !== null && (kl === null ? kl = n : kl.push.apply(
                  kl,
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
                rt,
                !nu
              );
              break l;
            case 2:
              kl = null;
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
              rt,
              !nu
            ), ze(a, 0, !0) !== 0) break l;
            a.timeoutHandle = Nd(
              ud.bind(
                null,
                a,
                u,
                kl,
                yn,
                bc,
                t,
                rt,
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
          ud(
            a,
            u,
            kl,
            yn,
            bc,
            t,
            rt,
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
  function ud(l, t, u, a, e, n, f, c, i, y, g, T, h, r) {
    if (l.timeoutHandle = -1, T = t.subtreeFlags, (T & 8192 || (T & 16785408) === 16785408) && (de = { stylesheets: null, count: 0, unsuspend: _y }, W0(t), T = Dy(), T !== null)) {
      l.cancelPendingCommit = T(
        sd.bind(
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
      ), su(l, n, f, !y);
      return;
    }
    sd(
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
  function su(l, t, u, a) {
    t &= ~Sc, t &= ~pu, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - Pl(e), f = 1 << n;
      a[n] = -1, e &= ~f;
    }
    u !== 0 && yi(l, u, t);
  }
  function hn() {
    return (nl & 6) === 0 ? (ee(0), !1) : !0;
  }
  function _c() {
    if (L !== null) {
      if (fl === 0)
        var l = L.return;
      else
        l = L, Yt = Du = null, Cf(l), ea = null, ka = 0, l = L;
      for (; l !== null; )
        Y0(l.alternate, l), l = l.return;
      L = null;
    }
  }
  function va(l, t) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, cy(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), _c(), yl = l, L = u = pt(l.current, null), $ = t, fl = 0, et = null, nu = !1, ia = Ta(l, t), gc = !1, sa = rt = Sc = pu = fu = bl = 0, kl = ue = null, bc = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var e = 31 - Pl(a), n = 1 << e;
        t |= l[e], a &= ~n;
      }
    return Vt = t, Ye(), u;
  }
  function ad(l, t) {
    C = null, S.H = ln, t === Xa || t === Le ? (t = Ts(), fl = 3) : t === gs ? (t = Ts(), fl = 4) : fl = t === E0 ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, et = t, L === null && (bl = 1, nn(
      l,
      dt(t, l.current)
    ));
  }
  function ed() {
    var l = S.H;
    return S.H = ln, l === null ? ln : l;
  }
  function nd() {
    var l = S.A;
    return S.A = Cv, l;
  }
  function Oc() {
    bl = 4, nu || ($ & 4194048) !== $ && ht.current !== null || (ia = !0), (fu & 134217727) === 0 && (pu & 134217727) === 0 || yl === null || su(
      yl,
      $,
      rt,
      !1
    );
  }
  function Dc(l, t, u) {
    var a = nl;
    nl |= 2;
    var e = ed(), n = nd();
    (yl !== l || $ !== t) && (yn = null, va(l, t)), t = !1;
    var f = bl;
    l: do
      try {
        if (fl !== 0 && L !== null) {
          var c = L, i = et;
          switch (fl) {
            case 8:
              _c(), f = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              ht.current === null && (t = !0);
              var y = fl;
              if (fl = 0, et = null, ya(l, c, i, y), u && ia) {
                f = 0;
                break l;
              }
              break;
            default:
              y = fl, fl = 0, et = null, ya(l, c, i, y);
          }
        }
        Lv(), f = bl;
        break;
      } catch (g) {
        ad(l, g);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Yt = Du = null, nl = a, S.H = e, S.A = n, L === null && (yl = null, $ = 0, Ye()), f;
  }
  function Lv() {
    for (; L !== null; ) fd(L);
  }
  function Kv(l, t) {
    var u = nl;
    nl |= 2;
    var a = ed(), e = nd();
    yl !== l || $ !== t ? (yn = null, vn = _t() + 500, va(l, t)) : ia = Ta(
      l,
      t
    );
    l: do
      try {
        if (fl !== 0 && L !== null) {
          t = L;
          var n = et;
          t: switch (fl) {
            case 1:
              fl = 0, et = null, ya(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (Ss(n)) {
                fl = 0, et = null, cd(t);
                break;
              }
              t = function() {
                fl !== 2 && fl !== 9 || yl !== l || (fl = 7), Ut(l);
              }, n.then(t, t);
              break l;
            case 3:
              fl = 7;
              break l;
            case 4:
              fl = 5;
              break l;
            case 7:
              Ss(n) ? (fl = 0, et = null, cd(t)) : (fl = 0, et = null, ya(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (L.tag) {
                case 26:
                  f = L.memoizedState;
                case 5:
                case 27:
                  var c = L;
                  if (!f || Zd(f)) {
                    fl = 0, et = null;
                    var i = c.sibling;
                    if (i !== null) L = i;
                    else {
                      var y = c.return;
                      y !== null ? (L = y, rn(y)) : L = null;
                    }
                    break t;
                  }
              }
              fl = 0, et = null, ya(l, t, n, 5);
              break;
            case 6:
              fl = 0, et = null, ya(l, t, n, 6);
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
      } catch (g) {
        ad(l, g);
      }
    while (!0);
    return Yt = Du = null, S.H = a, S.A = e, nl = u, L !== null ? 0 : (yl = null, $ = 0, Ye(), bl);
  }
  function Jv() {
    for (; L !== null && !ho(); )
      fd(L);
  }
  function fd(l) {
    var t = q0(l.alternate, l, Vt);
    l.memoizedProps = l.pendingProps, t === null ? rn(l) : L = t;
  }
  function cd(l) {
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
          $
        );
        break;
      case 11:
        t = M0(
          u,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          $
        );
        break;
      case 5:
        Cf(t);
      default:
        Y0(u, t), t = L = is(t, Vt), t = q0(u, t, Vt);
    }
    l.memoizedProps = l.pendingProps, t === null ? rn(l) : L = t;
  }
  function ya(l, t, u, a) {
    Yt = Du = null, Cf(t), ea = null, ka = 0;
    var e = t.return;
    try {
      if (Yv(
        l,
        e,
        t,
        u,
        $
      )) {
        bl = 1, nn(
          l,
          dt(u, l.current)
        ), L = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw L = e, n;
      bl = 1, nn(
        l,
        dt(u, l.current)
      ), L = null;
      return;
    }
    t.flags & 32768 ? (ul || a === 1 ? l = !0 : ia || ($ & 536870912) !== 0 ? l = !1 : (nu = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = ht.current, a !== null && a.tag === 13 && (a.flags |= 16384))), id(t, l)) : rn(t);
  }
  function rn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        id(
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
        L = u;
        return;
      }
      if (t = t.sibling, t !== null) {
        L = t;
        return;
      }
      L = t = l;
    } while (t !== null);
    bl === 0 && (bl = 5);
  }
  function id(l, t) {
    do {
      var u = jv(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, L = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !t && (l = l.sibling, l !== null)) {
        L = l;
        return;
      }
      L = l = u;
    } while (l !== null);
    bl = 6, L = null;
  }
  function sd(l, t, u, a, e, n, f, c, i) {
    l.cancelPendingCommit = null;
    do
      mn();
    while (xl !== 0);
    if ((nl & 6) !== 0) throw Error(m(327));
    if (t !== null) {
      if (t === l.current) throw Error(m(177));
      if (n = t.lanes | t.childLanes, n |= mf, _o(
        l,
        u,
        n,
        f,
        c,
        i
      ), l === yl && (L = yl = null, $ = 0), da = t, iu = l, oa = u, Ec = n, Ac = e, P0 = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, $v(Te, function() {
        return hd(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = S.T, S.T = null, e = D.p, D.p = 2, f = nl, nl |= 4;
        try {
          Xv(l, t, u);
        } finally {
          nl = f, D.p = e, S.T = a;
        }
      }
      xl = 1, dd(), od(), vd();
    }
  }
  function dd() {
    if (xl === 1) {
      xl = 0;
      var l = iu, t = da, u = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || u) {
        u = S.T, S.T = null;
        var a = D.p;
        D.p = 2;
        var e = nl;
        nl |= 4;
        try {
          J0(t, l);
          var n = jc, f = Ii(l.containerInfo), c = n.focusedElem, i = n.selectionRange;
          if (f !== c && c && c.ownerDocument && Fi(
            c.ownerDocument.documentElement,
            c
          )) {
            if (i !== null && of(c)) {
              var y = i.start, g = i.end;
              if (g === void 0 && (g = y), "selectionStart" in c)
                c.selectionStart = y, c.selectionEnd = Math.min(
                  g,
                  c.value.length
                );
              else {
                var T = c.ownerDocument || document, h = T && T.defaultView || window;
                if (h.getSelection) {
                  var r = h.getSelection(), Y = c.textContent.length, p = Math.min(i.start, Y), sl = i.end === void 0 ? p : Math.min(i.end, Y);
                  !r.extend && p > sl && (f = sl, sl = p, p = f);
                  var o = $i(
                    c,
                    p
                  ), d = $i(
                    c,
                    sl
                  );
                  if (o && d && (r.rangeCount !== 1 || r.anchorNode !== o.node || r.anchorOffset !== o.offset || r.focusNode !== d.node || r.focusOffset !== d.offset)) {
                    var v = T.createRange();
                    v.setStart(o.node, o.offset), r.removeAllRanges(), p > sl ? (r.addRange(v), r.extend(d.node, d.offset)) : (v.setEnd(d.node, d.offset), r.addRange(v));
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
          Rn = !!Gc, jc = Gc = null;
        } finally {
          nl = e, D.p = a, S.T = u;
        }
      }
      l.current = t, xl = 2;
    }
  }
  function od() {
    if (xl === 2) {
      xl = 0;
      var l = iu, t = da, u = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || u) {
        u = S.T, S.T = null;
        var a = D.p;
        D.p = 2;
        var e = nl;
        nl |= 4;
        try {
          Z0(l, t.alternate, t);
        } finally {
          nl = e, D.p = a, S.T = u;
        }
      }
      xl = 3;
    }
  }
  function vd() {
    if (xl === 4 || xl === 3) {
      xl = 0, ro();
      var l = iu, t = da, u = oa, a = P0;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? xl = 5 : (xl = 0, da = iu = null, yd(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (e === 0 && (cu = null), Vn(u), t = t.stateNode, Il && typeof Il.onCommitFiberRoot == "function")
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
        t = S.T, e = D.p, D.p = 2, S.T = null;
        try {
          for (var n = l.onRecoverableError, f = 0; f < a.length; f++) {
            var c = a[f];
            n(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          S.T = t, D.p = e;
        }
      }
      (oa & 3) !== 0 && mn(), Ut(l), e = l.pendingLanes, (u & 4194090) !== 0 && (e & 42) !== 0 ? l === zc ? ae++ : (ae = 0, zc = l) : ae = 0, ee(0);
    }
  }
  function yd(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Ga(t)));
  }
  function mn(l) {
    return dd(), od(), vd(), hd();
  }
  function hd() {
    if (xl !== 5) return !1;
    var l = iu, t = Ec;
    Ec = 0;
    var u = Vn(oa), a = S.T, e = D.p;
    try {
      D.p = 32 > u ? 32 : u, S.T = null, u = Ac, Ac = null;
      var n = iu, f = oa;
      if (xl = 0, da = iu = null, oa = 0, (nl & 6) !== 0) throw Error(m(331));
      var c = nl;
      if (nl |= 4, F0(n.current), k0(
        n,
        n.current,
        f,
        u
      ), nl = c, ee(0, !1), Il && typeof Il.onPostCommitFiberRoot == "function")
        try {
          Il.onPostCommitFiberRoot(ba, n);
        } catch {
        }
      return !0;
    } finally {
      D.p = e, S.T = a, yd(l, t);
    }
  }
  function rd(l, t, u) {
    t = dt(u, t), t = tc(l.stateNode, t, 2), l = It(l, t, 2), l !== null && (Ea(l, 2), Ut(l));
  }
  function vl(l, t, u) {
    if (l.tag === 3)
      rd(l, l, u);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          rd(
            t,
            l,
            u
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (cu === null || !cu.has(a))) {
            l = dt(u, l), u = b0(2), a = It(t, u, 2), a !== null && (T0(
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
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, yl === l && ($ & u) === u && (bl === 4 || bl === 3 && ($ & 62914560) === $ && 300 > _t() - Tc ? (nl & 2) === 0 && va(l, 0) : Sc |= u, sa === $ && (sa = 0)), Ut(l);
  }
  function md(l, t) {
    t === 0 && (t = vi()), l = ku(l, t), l !== null && (Ea(l, t), Ut(l));
  }
  function kv(l) {
    var t = l.memoizedState, u = 0;
    t !== null && (u = t.retryLane), md(l, u);
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
    a !== null && a.delete(t), md(l, u);
  }
  function $v(l, t) {
    return Xn(l, t);
  }
  var gn = null, ha = null, Rc = !1, Sn = !1, Uc = !1, qu = 0;
  function Ut(l) {
    l !== ha && l.next === null && (ha === null ? gn = ha = l : ha = ha.next = l), Sn = !0, Rc || (Rc = !0, Iv());
  }
  function ee(l, t) {
    if (!Uc && Sn) {
      Uc = !0;
      do
        for (var u = !1, a = gn; a !== null; ) {
          if (l !== 0) {
            var e = a.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = a.suspendedLanes, c = a.pingedLanes;
              n = (1 << 31 - Pl(42 | l) + 1) - 1, n &= e & ~(f & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (u = !0, Td(a, n));
          } else
            n = $, n = ze(
              a,
              a === yl ? n : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (n & 3) === 0 || Ta(a, n) || (u = !0, Td(a, n));
          a = a.next;
        }
      while (u);
      Uc = !1;
    }
  }
  function Fv() {
    gd();
  }
  function gd() {
    Sn = Rc = !1;
    var l = 0;
    qu !== 0 && (fy() && (l = qu), qu = 0);
    for (var t = _t(), u = null, a = gn; a !== null; ) {
      var e = a.next, n = Sd(a, t);
      n === 0 ? (a.next = null, u === null ? gn = e : u.next = e, e === null && (ha = u)) : (u = a, (l !== 0 || (n & 3) !== 0) && (Sn = !0)), a = e;
    }
    ee(l);
  }
  function Sd(l, t) {
    for (var u = l.suspendedLanes, a = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - Pl(n), c = 1 << f, i = e[f];
      i === -1 ? ((c & u) === 0 || (c & a) !== 0) && (e[f] = zo(c, t)) : i <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = yl, u = $, u = ze(
      l,
      l === t ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a = l.callbackNode, u === 0 || l === t && (fl === 2 || fl === 9) || l.cancelPendingCommit !== null)
      return a !== null && a !== null && Qn(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || Ta(l, u)) {
      if (t = u & -u, t === l.callbackPriority) return t;
      switch (a !== null && Qn(a), Vn(u)) {
        case 2:
        case 8:
          u = si;
          break;
        case 32:
          u = Te;
          break;
        case 268435456:
          u = di;
          break;
        default:
          u = Te;
      }
      return a = bd.bind(null, l), u = Xn(u, a), l.callbackPriority = t, l.callbackNode = u, t;
    }
    return a !== null && a !== null && Qn(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function bd(l, t) {
    if (xl !== 0 && xl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (mn() && l.callbackNode !== u)
      return null;
    var a = $;
    return a = ze(
      l,
      l === yl ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a === 0 ? null : (td(l, a, t), Sd(l, _t()), l.callbackNode != null && l.callbackNode === u ? bd.bind(null, l) : null);
  }
  function Td(l, t) {
    if (mn()) return null;
    td(l, t, !0);
  }
  function Iv() {
    iy(function() {
      (nl & 6) !== 0 ? Xn(
        ii,
        Fv
      ) : gd();
    });
  }
  function Nc() {
    return qu === 0 && (qu = oi()), qu;
  }
  function Ed(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Re("" + l);
  }
  function Ad(l, t) {
    var u = t.ownerDocument.createElement("input");
    return u.name = t.name, u.value = t.value, l.id && u.setAttribute("form", l.id), t.parentNode.insertBefore(u, t), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function Pv(l, t, u, a, e) {
    if (t === "submit" && u && u.stateNode === e) {
      var n = Ed(
        (e[Ll] || null).action
      ), f = a.submitter;
      f && (t = (t = f[Ll] || null) ? Ed(t.formAction) : f.getAttribute("formAction"), t !== null && (n = t, f = null));
      var c = new pe(
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
                  var i = f ? Ad(e, f) : new FormData(e);
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
                typeof n == "function" && (c.preventDefault(), i = f ? Ad(e, f) : new FormData(e), $f(
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
    St(
      ly,
      "on" + ty
    );
  }
  St(ts, "onAnimationEnd"), St(us, "onAnimationIteration"), St(as, "onAnimationStart"), St("dblclick", "onDoubleClick"), St("focusin", "onFocus"), St("focusout", "onBlur"), St(Sv, "onTransitionRun"), St(bv, "onTransitionStart"), St(Tv, "onTransitionCancel"), St(es, "onTransitionEnd"), ju("onMouseEnter", ["mouseout", "mouseover"]), ju("onMouseLeave", ["mouseout", "mouseover"]), ju("onPointerEnter", ["pointerout", "pointerover"]), ju("onPointerLeave", ["pointerout", "pointerover"]), gu(
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
  function zd(l, t) {
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
  function K(l, t) {
    var u = t[Ln];
    u === void 0 && (u = t[Ln] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    u.has(a) || (_d(t, l, 2, !1), u.add(a));
  }
  function qc(l, t, u) {
    var a = 0;
    t && (a |= 4), _d(
      u,
      l,
      a,
      t
    );
  }
  var bn = "_reactListening" + Math.random().toString(36).slice(2);
  function Bc(l) {
    if (!l[bn]) {
      l[bn] = !0, gi.forEach(function(u) {
        u !== "selectionchange" && (uy.has(u) || qc(u, !1, l), qc(u, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[bn] || (t[bn] = !0, qc("selectionchange", !1, t));
    }
  }
  function _d(l, t, u, a) {
    switch (kd(t)) {
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
      var y = n, g = Pn(u), T = [];
      l: {
        var h = ns.get(l);
        if (h !== void 0) {
          var r = pe, Y = l;
          switch (l) {
            case "keypress":
              if (Ne(u) === 0) break l;
            case "keydown":
            case "keyup":
              r = $o;
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
              r = jo;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              r = Po;
              break;
            case ts:
            case us:
            case as:
              r = Co;
              break;
            case es:
              r = tv;
              break;
            case "scroll":
            case "scrollend":
              r = xo;
              break;
            case "wheel":
              r = av;
              break;
            case "copy":
            case "cut":
            case "paste":
              r = Vo;
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
          var p = (t & 4) !== 0, sl = !p && (l === "scroll" || l === "scrollend"), o = p ? h !== null ? h + "Capture" : null : h;
          p = [];
          for (var d = y, v; d !== null; ) {
            var b = d;
            if (v = b.stateNode, b = b.tag, b !== 5 && b !== 26 && b !== 27 || v === null || o === null || (b = _a(d, o), b != null && p.push(
              fe(d, b, v)
            )), sl) break;
            d = d.return;
          }
          0 < p.length && (h = new r(
            h,
            Y,
            null,
            u,
            g
          ), T.push({ event: h, listeners: p }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (h = l === "mouseover" || l === "pointerover", r = l === "mouseout" || l === "pointerout", h && u !== In && (Y = u.relatedTarget || u.fromElement) && (Yu(Y) || Y[Bu]))
            break l;
          if ((r || h) && (h = g.window === g ? g : (h = g.ownerDocument) ? h.defaultView || h.parentWindow : window, r ? (Y = u.relatedTarget || u.toElement, r = y, Y = Y ? Yu(Y) : null, Y !== null && (sl = tl(Y), p = Y.tag, Y !== sl || p !== 5 && p !== 27 && p !== 6) && (Y = null)) : (r = null, Y = y), r !== Y)) {
            if (p = Bi, b = "onMouseLeave", o = "onMouseEnter", d = "mouse", (l === "pointerout" || l === "pointerover") && (p = xi, b = "onPointerLeave", o = "onPointerEnter", d = "pointer"), sl = r == null ? h : za(r), v = Y == null ? h : za(Y), h = new p(
              b,
              d + "leave",
              r,
              u,
              g
            ), h.target = sl, h.relatedTarget = v, b = null, Yu(g) === y && (p = new p(
              o,
              d + "enter",
              Y,
              u,
              g
            ), p.target = v, p.relatedTarget = sl, b = p), sl = b, r && Y)
              t: {
                for (p = r, o = Y, d = 0, v = p; v; v = ra(v))
                  d++;
                for (v = 0, b = o; b; b = ra(b))
                  v++;
                for (; 0 < d - v; )
                  p = ra(p), d--;
                for (; 0 < v - d; )
                  o = ra(o), v--;
                for (; d--; ) {
                  if (p === o || o !== null && p === o.alternate)
                    break t;
                  p = ra(p), o = ra(o);
                }
                p = null;
              }
            else p = null;
            r !== null && Od(
              T,
              h,
              r,
              p,
              !1
            ), Y !== null && sl !== null && Od(
              T,
              sl,
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
              g
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
            yf = !1, Pi(T, u, g);
            break;
          case "selectionchange":
            if (gv) break;
          case "keydown":
          case "keyup":
            Pi(T, u, g);
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
          Lu ? Qi(l, u) && (q = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (q = "onCompositionStart");
        q && (Gi && u.locale !== "ko" && (Lu || q !== "onCompositionStart" ? q === "onCompositionEnd" && Lu && (U = pi()) : (kt = g, uf = "value" in kt ? kt.value : kt.textContent, Lu = !0)), Z = Tn(y, q), 0 < Z.length && (q = new Yi(
          q,
          l,
          null,
          u,
          g
        ), T.push({ event: q, listeners: Z }), U ? q.data = U : (U = Ci(u), U !== null && (q.data = U)))), (U = cv ? iv(l, u) : sv(l, u)) && (q = Tn(y, "onBeforeInput"), 0 < q.length && (Z = new Yi(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          g
        ), T.push({
          event: Z,
          listeners: q
        }), Z.data = U)), Pv(
          T,
          l,
          y,
          u,
          g
        );
      }
      zd(T, t);
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
  function Od(l, t, u, a, e) {
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
  function Dd(l) {
    return (typeof l == "string" ? l : "" + l).replace(ay, `
`).replace(ey, "");
  }
  function Md(l, t) {
    return t = Dd(t), Dd(l) === t;
  }
  function En() {
  }
  function il(l, t, u, a, e, n) {
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
        Ui(l, a, n);
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
          typeof n == "function" && (u === "formAction" ? (t !== "input" && il(l, t, "name", e.name, e, null), il(
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
        a != null && K("scroll", l);
        break;
      case "onScrollEnd":
        a != null && K("scrollend", l);
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
        K("beforetoggle", l), K("toggle", l), _e(l, "popover", a);
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
        _e(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = Bo.get(u) || u, _e(l, u, a));
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
        typeof a == "string" ? Cu(l, a) : (typeof a == "number" || typeof a == "bigint") && Cu(l, "" + a);
        break;
      case "onScroll":
        a != null && K("scroll", l);
        break;
      case "onScrollEnd":
        a != null && K("scrollend", l);
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
        if (!Si.hasOwnProperty(u))
          l: {
            if (u[0] === "o" && u[1] === "n" && (e = u.endsWith("Capture"), t = u.slice(2, e ? u.length - 7 : void 0), n = l[Ll] || null, n = n != null ? n[u] : null, typeof n == "function" && l.removeEventListener(t, n, e), typeof a == "function")) {
              typeof n != "function" && n !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(t, a, e);
              break l;
            }
            u in l ? l[u] = a : a === !0 ? l.setAttribute(u, "") : _e(l, u, a);
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
        K("error", l), K("load", l);
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
                  il(l, t, n, f, u, null);
              }
          }
        e && il(l, t, "srcSet", u.srcSet, u, null), a && il(l, t, "src", u.src, u, null);
        return;
      case "input":
        K("invalid", l);
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
                  il(l, t, a, g, u, null);
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
        ), De(l);
        return;
      case "select":
        K("invalid", l), a = f = n = null;
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
                il(l, t, e, c, u, null);
            }
        t = n, u = f, l.multiple = !!a, t != null ? Qu(l, !!a, t, !1) : u != null && Qu(l, !!a, u, !0);
        return;
      case "textarea":
        K("invalid", l), n = e = a = null;
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
                il(l, t, f, c, u, null);
            }
        Mi(l, a, e, n), De(l);
        return;
      case "option":
        for (i in u)
          if (u.hasOwnProperty(i) && (a = u[i], a != null))
            switch (i) {
              case "selected":
                l.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                il(l, t, i, a, u, null);
            }
        return;
      case "dialog":
        K("beforetoggle", l), K("toggle", l), K("cancel", l), K("close", l);
        break;
      case "iframe":
      case "object":
        K("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ne.length; a++)
          K(ne[a], l);
        break;
      case "image":
        K("error", l), K("load", l);
        break;
      case "details":
        K("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        K("error", l), K("load", l);
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
                il(l, t, y, a, u, null);
            }
        return;
      default:
        if (Fn(t)) {
          for (g in u)
            u.hasOwnProperty(g) && (a = u[g], a !== void 0 && xc(
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
      u.hasOwnProperty(c) && (a = u[c], a != null && il(l, t, c, a, u, null));
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
                a.hasOwnProperty(r) || il(l, t, r, null, a, T);
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
                r !== T && il(
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
                a.hasOwnProperty(n) || il(
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
                n !== i && il(
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
                il(l, t, c, null, a, e);
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
                e !== n && il(l, t, f, e, a, n);
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
                il(
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
                il(
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
          h = u[p], u.hasOwnProperty(p) && h != null && !a.hasOwnProperty(p) && il(l, t, p, null, a, h);
        for (y in a)
          if (h = a[y], r = u[y], a.hasOwnProperty(y) && h !== r && (h != null || r != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (h != null)
                  throw Error(m(137, t));
                break;
              default:
                il(
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
          for (var sl in u)
            h = u[sl], u.hasOwnProperty(sl) && h !== void 0 && !a.hasOwnProperty(sl) && xc(
              l,
              t,
              sl,
              void 0,
              a,
              h
            );
          for (g in a)
            h = a[g], r = u[g], !a.hasOwnProperty(g) || h === r || h === void 0 && r === void 0 || xc(
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
    for (var o in u)
      h = u[o], u.hasOwnProperty(o) && h != null && !a.hasOwnProperty(o) && il(l, t, o, null, a, h);
    for (T in a)
      h = a[T], r = u[T], !a.hasOwnProperty(T) || h === r || h == null && r == null || il(l, t, T, h, a, r);
  }
  var Gc = null, jc = null;
  function An(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Rd(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Ud(l, t) {
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
  var Qc = null;
  function fy() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Qc ? !1 : (Qc = l, !0) : (Qc = null, !1);
  }
  var Nd = typeof setTimeout == "function" ? setTimeout : void 0, cy = typeof clearTimeout == "function" ? clearTimeout : void 0, Hd = typeof Promise == "function" ? Promise : void 0, iy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Hd < "u" ? function(l) {
    return Hd.resolve(null).then(l).catch(sy);
  } : Nd;
  function sy(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function du(l) {
    return l === "head";
  }
  function pd(l, t) {
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
  function Cc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var u = t;
      switch (t = t.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Cc(u), Kn(u);
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
  function dy(l, t, u, a) {
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
      if (l = Tt(l.nextSibling), l === null) break;
    }
    return null;
  }
  function oy(l, t, u) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = Tt(l.nextSibling), l === null)) return null;
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
  function Tt(l) {
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
  function qd(l) {
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
  function Bd(l, t, u) {
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
    Kn(l);
  }
  var mt = /* @__PURE__ */ new Map(), Yd = /* @__PURE__ */ new Set();
  function zn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Lt = D.d;
  D.d = {
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
    var l = Lt.f(), t = hn();
    return l || t;
  }
  function hy(l) {
    var t = xu(l);
    t !== null && t.tag === 5 && t.type === "form" ? t0(t) : Lt.r(l);
  }
  var ma = typeof document > "u" ? null : document;
  function xd(l, t, u) {
    var a = ma;
    if (a && typeof t == "string" && t) {
      var e = st(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof u == "string" && (e += '[crossorigin="' + u + '"]'), Yd.has(e) || (Yd.add(e), l = { rel: l, crossOrigin: u, href: t }, a.querySelector(e) === null && (t = a.createElement("link"), Gl(t, "link", l), Ul(t), a.head.appendChild(t)));
    }
  }
  function ry(l) {
    Lt.D(l), xd("dns-prefetch", l, null);
  }
  function my(l, t) {
    Lt.C(l, t), xd("preconnect", l, t);
  }
  function gy(l, t, u) {
    Lt.L(l, t, u);
    var a = ma;
    if (a && l && t) {
      var e = 'link[rel="preload"][as="' + st(t) + '"]';
      t === "image" && u && u.imageSrcSet ? (e += '[imagesrcset="' + st(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (e += '[imagesizes="' + st(
        u.imageSizes
      ) + '"]')) : e += '[href="' + st(l) + '"]';
      var n = e;
      switch (t) {
        case "style":
          n = ga(l);
          break;
        case "script":
          n = Sa(l);
      }
      mt.has(n) || (l = N(
        {
          rel: "preload",
          href: t === "image" && u && u.imageSrcSet ? void 0 : l,
          as: t
        },
        u
      ), mt.set(n, l), a.querySelector(e) !== null || t === "style" && a.querySelector(ie(n)) || t === "script" && a.querySelector(se(n)) || (t = a.createElement("link"), Gl(t, "link", l), Ul(t), a.head.appendChild(t)));
    }
  }
  function Sy(l, t) {
    Lt.m(l, t);
    var u = ma;
    if (u && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", e = 'link[rel="modulepreload"][as="' + st(a) + '"][href="' + st(l) + '"]', n = e;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Sa(l);
      }
      if (!mt.has(n) && (l = N({ rel: "modulepreload", href: l }, t), mt.set(n, l), u.querySelector(e) === null)) {
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
          ), (u = mt.get(n)) && Lc(l, u);
          var i = f = a.createElement("link");
          Ul(i), Gl(i, "link", l), i._p = new Promise(function(y, g) {
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
  function Ty(l, t) {
    Lt.X(l, t);
    var u = ma;
    if (u && l) {
      var a = Gu(u).hoistableScripts, e = Sa(l), n = a.get(e);
      n || (n = u.querySelector(se(e)), n || (l = N({ src: l, async: !0 }, t), (t = mt.get(e)) && Kc(l, t), n = u.createElement("script"), Ul(n), Gl(n, "link", l), u.head.appendChild(n)), n = {
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
      n || (n = u.querySelector(se(e)), n || (l = N({ src: l, async: !0, type: "module" }, t), (t = mt.get(e)) && Kc(l, t), n = u.createElement("script"), Ul(n), Gl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function Gd(l, t, u, a) {
    var e = (e = j.current) ? zn(e) : null;
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
          )) && !n._p && (f.instance = n, f.state.loading = 5), mt.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, mt.set(l, u), n || Ay(
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
    return 'href="' + st(l) + '"';
  }
  function ie(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function jd(l) {
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
    return '[src="' + st(l) + '"]';
  }
  function se(l) {
    return "script[async]" + l;
  }
  function Xd(l, t, u) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = l.querySelector(
            'style[data-href~="' + st(u.href) + '"]'
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
          ), Ul(a), Gl(a, "style", e), _n(a, u.precedence, l), t.instance = a;
        case "stylesheet":
          e = ga(u.href);
          var n = l.querySelector(
            ie(e)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, Ul(n), n;
          a = jd(u), (e = mt.get(e)) && Lc(a, e), n = (l.ownerDocument || l).createElement("link"), Ul(n);
          var f = n;
          return f._p = new Promise(function(c, i) {
            f.onload = c, f.onerror = i;
          }), Gl(n, "link", a), t.state.loading |= 4, _n(n, u.precedence, l), t.instance = n;
        case "script":
          return n = Sa(u.src), (e = l.querySelector(
            se(n)
          )) ? (t.instance = e, Ul(e), e) : (a = u, (e = mt.get(n)) && (a = N({}, u), Kc(a, e)), l = l.ownerDocument || l, e = l.createElement("script"), Ul(e), Gl(e, "link", a), l.head.appendChild(e), t.instance = e);
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
  function Lc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function Kc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var On = null;
  function Qd(l, t, u) {
    if (On === null) {
      var a = /* @__PURE__ */ new Map(), e = On = /* @__PURE__ */ new Map();
      e.set(u, a);
    } else
      e = On, a = e.get(u), a || (a = /* @__PURE__ */ new Map(), e.set(u, a));
    if (a.has(l)) return a;
    for (a.set(l, null), u = u.getElementsByTagName(l), e = 0; e < u.length; e++) {
      var n = u[e];
      if (!(n[Aa] || n[Ql] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var c = a.get(f);
        c ? c.push(n) : a.set(f, [n]);
      }
    }
    return a;
  }
  function Cd(l, t, u) {
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
  function Zd(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var de = null;
  function _y() {
  }
  function Oy(l, t, u) {
    if (de === null) throw Error(m(475));
    var a = de;
    if (t.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var e = ga(u.href), n = l.querySelector(
          ie(e)
        );
        if (n) {
          l = n._p, l !== null && typeof l == "object" && typeof l.then == "function" && (a.count++, a = Dn.bind(a), l.then(a, a)), t.state.loading |= 4, t.instance = n, Ul(n);
          return;
        }
        n = l.ownerDocument || l, u = jd(u), (e = mt.get(e)) && Lc(u, e), n = n.createElement("link"), Ul(n);
        var f = n;
        f._p = new Promise(function(c, i) {
          f.onload = c, f.onerror = i;
        }), Gl(n, "link", u), t.instance = n;
      }
      a.stylesheets === null && (a.stylesheets = /* @__PURE__ */ new Map()), a.stylesheets.set(t, l), (l = t.state.preload) && (t.state.loading & 3) === 0 && (a.count++, t = Dn.bind(a), l.addEventListener("load", t), l.addEventListener("error", t));
    }
  }
  function Dy() {
    if (de === null) throw Error(m(475));
    var l = de;
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
  function Dn() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Jc(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Mn = null;
  function Jc(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Mn = /* @__PURE__ */ new Map(), t.forEach(My, l), Mn = null, Dn.call(l));
  }
  function My(l, t) {
    if (!(t.state.loading & 4)) {
      var u = Mn.get(l);
      if (u) var a = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Mn.set(l, u);
        for (var e = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < e.length; n++) {
          var f = e[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (u.set(f.dataset.precedence, f), a = f);
        }
        a && u.set(null, a);
      }
      e = t.instance, f = e.getAttribute("data-precedence"), n = u.get(f) || a, n === a && u.set(null, e), u.set(f, e), this.count++, a = Dn.bind(this), e.addEventListener("load", a), e.addEventListener("error", a), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4;
    }
  }
  var oe = {
    $$typeof: Rl,
    Provider: null,
    Consumer: null,
    _currentValue: B,
    _currentValue2: B,
    _threadCount: 0
  };
  function Ry(l, t, u, a, e, n, f, c) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Cn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Cn(0), this.hiddenUpdates = Cn(null), this.identifierPrefix = a, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Vd(l, t, u, a, e, n, f, c, i, y, g, T) {
    return l = new Ry(
      l,
      t,
      u,
      f,
      c,
      i,
      y,
      T
    ), t = 1, n === !0 && (t |= 24), n = tt(3, null, null, t), l.current = n, n.stateNode = l, t = Mf(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: a,
      isDehydrated: u,
      cache: t
    }, Hf(n), l;
  }
  function Ld(l) {
    return l ? (l = Wu, l) : Wu;
  }
  function Kd(l, t, u, a, e, n) {
    e = Ld(e), a.context === null ? a.context = e : a.pendingContext = e, a = Ft(t), a.payload = { element: u }, n = n === void 0 ? null : n, n !== null && (a.callback = n), u = It(l, a, t), u !== null && (ft(u, l, t), Ca(u, l, t));
  }
  function Jd(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < t ? u : t;
    }
  }
  function wc(l, t) {
    Jd(l, t), (l = l.alternate) && Jd(l, t);
  }
  function wd(l) {
    if (l.tag === 13) {
      var t = ku(l, 67108864);
      t !== null && ft(t, l, 67108864), wc(l, 67108864);
    }
  }
  var Rn = !0;
  function Uy(l, t, u, a) {
    var e = S.T;
    S.T = null;
    var n = D.p;
    try {
      D.p = 2, kc(l, t, u, a);
    } finally {
      D.p = n, S.T = e;
    }
  }
  function Ny(l, t, u, a) {
    var e = S.T;
    S.T = null;
    var n = D.p;
    try {
      D.p = 8, kc(l, t, u, a);
    } finally {
      D.p = n, S.T = e;
    }
  }
  function kc(l, t, u, a) {
    if (Rn) {
      var e = Wc(a);
      if (e === null)
        Yc(
          l,
          t,
          a,
          Un,
          u
        ), Wd(l, a);
      else if (py(
        e,
        l,
        t,
        u,
        a
      ))
        a.stopPropagation();
      else if (Wd(l, a), t & 4 && -1 < Hy.indexOf(l)) {
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
                      var i = 1 << 31 - Pl(f);
                      c.entanglements[1] |= i, f &= ~i;
                    }
                    Ut(n), (nl & 6) === 0 && (vn = _t() + 500, ee(0));
                  }
                }
                break;
              case 13:
                c = ku(n, 2), c !== null && ft(c, n, 2), hn(), wc(n, 2);
            }
          if (n = Wc(a), n === null && Yc(
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
  var Un = null;
  function $c(l) {
    if (Un = null, l = Yu(l), l !== null) {
      var t = tl(l);
      if (t === null) l = null;
      else {
        var u = t.tag;
        if (u === 13) {
          if (l = al(t), l !== null) return l;
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
  function kd(l) {
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
        switch (mo()) {
          case ii:
            return 2;
          case si:
            return 8;
          case Te:
          case go:
            return 32;
          case di:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Fc = !1, ou = null, vu = null, yu = null, ve = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), hu = [], Hy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Wd(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        ou = null;
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
    }, t !== null && (t = xu(t), t !== null && wd(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function py(l, t, u, a, e) {
    switch (t) {
      case "focusin":
        return ou = he(
          ou,
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
  function $d(l) {
    var t = Yu(l.target);
    if (t !== null) {
      var u = tl(t);
      if (u !== null) {
        if (t = u.tag, t === 13) {
          if (t = al(u), t !== null) {
            l.blockedOn = t, Oo(l.priority, function() {
              if (u.tag === 13) {
                var a = nt();
                a = Zn(a);
                var e = ku(u, a);
                e !== null && ft(e, u, a), wc(u, a);
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
      var u = Wc(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var a = new u.constructor(
          u.type,
          u
        );
        In = a, u.target.dispatchEvent(a), In = null;
      } else
        return t = xu(u), t !== null && wd(t), l.blockedOn = u, !1;
      t.shift();
    }
    return !0;
  }
  function Fd(l, t, u) {
    Nn(l) && u.delete(t);
  }
  function qy() {
    Fc = !1, ou !== null && Nn(ou) && (ou = null), vu !== null && Nn(vu) && (vu = null), yu !== null && Nn(yu) && (yu = null), ve.forEach(Fd), ye.forEach(Fd);
  }
  function Hn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, Fc || (Fc = !0, z.unstable_scheduleCallback(
      z.unstable_NormalPriority,
      qy
    )));
  }
  var pn = null;
  function Id(l) {
    pn !== l && (pn = l, z.unstable_scheduleCallback(
      z.unstable_NormalPriority,
      function() {
        pn === l && (pn = null);
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
      return Hn(i, l);
    }
    ou !== null && Hn(ou, l), vu !== null && Hn(vu, l), yu !== null && Hn(yu, l), ve.forEach(t), ye.forEach(t);
    for (var u = 0; u < hu.length; u++) {
      var a = hu[u];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < hu.length && (u = hu[0], u.blockedOn === null); )
      $d(u), u.blockedOn === null && hu.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (a = 0; a < u.length; a += 3) {
        var e = u[a], n = u[a + 1], f = e[Ll] || null;
        if (typeof n == "function")
          f || Id(u);
        else if (f) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, f = n[Ll] || null)
              c = f.formAction;
            else if ($c(e) !== null) continue;
          } else c = f.action;
          typeof c == "function" ? u[a + 1] = c : (u.splice(a, 3), a -= 3), Id(u);
        }
      }
  }
  function Ic(l) {
    this._internalRoot = l;
  }
  qn.prototype.render = Ic.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(m(409));
    var u = t.current, a = nt();
    Kd(u, a, l, t, null, null);
  }, qn.prototype.unmount = Ic.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      Kd(l.current, 2, null, l, null, null), hn(), t[Bu] = null;
    }
  };
  function qn(l) {
    this._internalRoot = l;
  }
  qn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = ri();
      l = { blockedOn: null, target: l, priority: t };
      for (var u = 0; u < hu.length && t !== 0 && t < hu[u].priority; u++) ;
      hu.splice(u, 0, l), u === 0 && $d(l);
    }
  };
  var Pd = J.version;
  if (Pd !== "19.1.1")
    throw Error(
      m(
        527,
        Pd,
        "19.1.1"
      )
    );
  D.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(m(188)) : (l = Object.keys(l).join(","), Error(m(268, l)));
    return l = _(t), l = l !== null ? E(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var By = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: S,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Bn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Bn.isDisabled && Bn.supportsFiber)
      try {
        ba = Bn.inject(
          By
        ), Il = Bn;
      } catch {
      }
  }
  return ge.createRoot = function(l, t) {
    if (!k(l)) throw Error(m(299));
    var u = !1, a = "", e = r0, n = m0, f = g0, c = null;
    return t != null && (t.unstable_strictMode === !0 && (u = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (c = t.unstable_transitionCallbacks)), t = Vd(
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
    if (!k(l)) throw Error(m(299));
    var a = !1, e = "", n = r0, f = m0, c = g0, i = null, y = null;
    return u != null && (u.unstable_strictMode === !0 && (a = !0), u.identifierPrefix !== void 0 && (e = u.identifierPrefix), u.onUncaughtError !== void 0 && (n = u.onUncaughtError), u.onCaughtError !== void 0 && (f = u.onCaughtError), u.onRecoverableError !== void 0 && (c = u.onRecoverableError), u.unstable_transitionCallbacks !== void 0 && (i = u.unstable_transitionCallbacks), u.formState !== void 0 && (y = u.formState)), t = Vd(
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
    ), t.context = Ld(null), u = t.current, a = nt(), a = Zn(a), e = Ft(a), e.callback = null, It(u, e, a), u = a, t.current.lanes = u, Ea(t, u), Ut(t), l[Bu] = t.current, Bc(l), new qn(t);
  }, ge.version = "19.1.1", ge;
}
var so;
function Ly() {
  if (so) return ti.exports;
  so = 1;
  function z() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z);
      } catch (J) {
        console.error(J);
      }
  }
  return z(), ti.exports = Vy(), ti.exports;
}
var Ky = Ly();
const fi = (z) => window.parent.postMessage(z, "*"), oo = () => fi({ action: "closePopup" }), Jy = (z, J) => z && J ? J.toLowerCase().includes(z.toLowerCase()) : !1;
function Yn(z) {
  const J = hl.useRef(z);
  return hl.useEffect(() => {
    J.current = z;
  }, [z]), J;
}
let Se = ["title", "parentTitle", "url"];
const wy = () => {
  const [z, J] = hl.useState([]), [x, m] = hl.useState([]), [k, tl] = hl.useState([]), al = Yn(k), W = hl.useRef(null), [_, E] = hl.useState(""), N = Yn(_), [el, F] = hl.useState(""), Ml = Yn(el), [ql, Wl] = hl.useState({
    openNewTab: "1",
    searchRule: ["url", "title", "parentTitle"],
    useDefaultSearch: "0"
  }), jl = Yn(ql), Et = hl.useRef(null), [gt, Rl] = hl.useState({ top: 0, height: 0 }), $l = hl.useCallback(async () => {
    const G = await chrome.storage.local.get("searchBookmarkSetting");
    G.searchBookmarkSetting && (Se = G.searchBookmarkSetting.searchRule, Wl(G.searchBookmarkSetting));
  }, []);
  hl.useEffect(() => {
    const G = (V) => {
      V.action === "updateBookMarks" && $l().finally(() => {
        const { bookmarks: I = [], historyBookmarks: dl = [] } = V;
        J(I), m(dl), W.current?.focus();
        const { top: ct = 0, height: Bl = 0 } = Et.current?.getBoundingClientRect() ?? {};
        Rl({ top: ct, height: Bl });
      });
    };
    return chrome.runtime?.onMessage?.addListener(G), fi({ action: "initSuccess" }), () => {
      chrome.runtime?.onMessage?.removeListener(G);
    };
  }, [W]), hl.useEffect(() => {
    if (!_)
      tl(x), F(x[0]?.id || "");
    else {
      const G = Array.from(
        { length: Se.length },
        () => []
      );
      for (let I = 0; I < Se.length; I++)
        G[I] = z.filter(
          (dl) => Jy(_, Reflect.get(dl, Se[I]))
        ).sort((dl, ct) => {
          const Bl = Se[I], _l = Reflect.get(dl, Bl) || "", At = Reflect.get(ct, Bl) || "", zt = _.toLowerCase();
          return Bl === "title" ? _l.length - At.length : Bl === "url" ? zt.indexOf(_l) - zt.indexOf(At) : 1;
        });
      const V = G.reduce(
        (I, dl) => [.../* @__PURE__ */ new Set([...I, ...dl])],
        []
      );
      tl(V), F(V[0]?.id || "");
    }
  }, [_, z, x]);
  const w = hl.useCallback(
    (G, V = !1) => {
      F(G?.id || ""), !(!G?.url && jl.current.useDefaultSearch === "0") && (fi({
        action: "goToBookmark",
        url: G?.url || "",
        keyword: N.current,
        isCtrl: V
      }), oo(), E(""));
    },
    []
  );
  return hl.useEffect(() => {
    const G = (V) => {
      if (V.key === "Escape") {
        oo(), E("");
        return;
      }
      const I = al.current.findIndex(
        (dl) => dl.id === Ml.current
      );
      if (I > -1) {
        if (V.key === "ArrowUp") {
          const dl = I === 0 ? al.current.length - 1 : I - 1;
          F(al.current[dl].id), V.preventDefault();
        }
        if (V.key === "ArrowDown") {
          const dl = I === al.current.length - 1 ? 0 : I + 1;
          F(al.current[dl].id), V.preventDefault();
        }
      }
      V.key === "Enter" && (w(
        al.current[I],
        V.metaKey || V.ctrlKey
      ), V.preventDefault());
    };
    return window.addEventListener("keydown", G), () => {
      window.removeEventListener("keydown", G);
    };
  }, [w]), hl.useEffect(() => {
    const G = document.querySelector(`[data-id="${el}"]`);
    if (G) {
      const { top: V, height: I } = G.getBoundingClientRect(), { top: dl, height: ct } = gt;
      V >= dl && V + I <= dl + ct || G.scrollIntoView({
        block: "center",
        inline: "center"
      });
    }
  }, [el, Ml]), /* @__PURE__ */ Q.jsx("div", { className: "bookmarks-search__container", children: /* @__PURE__ */ Q.jsxs("div", { className: "bookmarks-search__content", children: [
    /* @__PURE__ */ Q.jsx("div", { className: "bookmarks-search__search", children: /* @__PURE__ */ Q.jsx(
      "input",
      {
        placeholder: "请输入要搜索的关键字",
        type: "text",
        autoComplete: "off",
        className: "bookmarks-search__search-input",
        autoFocus: !0,
        ref: W,
        value: _,
        onChange: (G) => E(G.target.value)
      }
    ) }),
    /* @__PURE__ */ Q.jsx("div", { ref: Et, className: "bookmarks-search__list", children: k.map((G) => /* @__PURE__ */ Q.jsxs(
      "div",
      {
        onClick: (V) => w(G, V.metaKey || V.ctrlKey),
        className: `bookmarks-search__list-item ${el === G.id ? "bookmarks-search__list-item-active" : ""}`,
        "data-id": G.id,
        children: [
          G.faviconURL && /* @__PURE__ */ Q.jsx(
            "img",
            {
              className: "bookmarks-search__list-item-favicon",
              src: G.faviconURL,
              alt: G.title
            }
          ),
          G.title
        ]
      },
      G.id
    )) })
  ] }) });
}, ky = ({
  name: z,
  value: J,
  onChange: x,
  options: m
}) => {
  const [k, tl] = hl.useState(J), al = (W) => {
    const _ = k.includes(W) ? k.filter((E) => E !== W) : [...k, W];
    tl(_), x?.(_);
  };
  return /* @__PURE__ */ Q.jsx("div", { className: "checkbox__group", children: m?.map((W) => /* @__PURE__ */ Q.jsx(Q.Fragment, { children: /* @__PURE__ */ Q.jsxs("label", { className: "checkbox", children: [
    /* @__PURE__ */ Q.jsx(
      "input",
      {
        type: "checkbox",
        name: z,
        value: W.value,
        checked: k.includes(W.value),
        onChange: () => al(W.value)
      }
    ),
    /* @__PURE__ */ Q.jsx("span", { children: W.name })
  ] }) })) });
}, ni = ({
  label: z,
  tips: J,
  children: x
}) => /* @__PURE__ */ Q.jsxs("div", { className: "form-item", children: [
  /* @__PURE__ */ Q.jsxs("div", { className: "form-item__label", children: [
    z,
    J && /* @__PURE__ */ Q.jsx("span", { className: "form-item__tips", children: J })
  ] }),
  /* @__PURE__ */ Q.jsx("div", { className: "form-item__content", children: x })
] }), yo = hl.createContext({
  value: "0",
  name: "",
  onChange: (z) => {
  }
}), vo = ({
  children: z,
  name: J,
  value: x,
  onChange: m
}) => {
  const [k, tl] = hl.useState(x), al = (W) => {
    tl(W), m?.(W);
  };
  return /* @__PURE__ */ Q.jsx(
    yo.Provider,
    {
      value: { value: k, name: J, onChange: al },
      children: /* @__PURE__ */ Q.jsx("div", { className: "radio-group", children: z })
    }
  );
}, xn = ({
  value: z,
  children: J
}) => {
  const { value: x, name: m, onChange: k } = hl.useContext(yo);
  return /* @__PURE__ */ Q.jsxs("label", { className: "radio", children: [
    /* @__PURE__ */ Q.jsx(
      "input",
      {
        type: "radio",
        name: m,
        value: z,
        checked: x === z,
        onChange: (tl) => k(tl.target.value)
      }
    ),
    /* @__PURE__ */ Q.jsx("span", { children: J })
  ] });
}, Wy = () => {
  const [z, J] = hl.useState(!0), [x, m] = hl.useState({
    openNewTab: "1",
    searchRule: ["url", "title", "parentTitle"],
    useDefaultSearch: "0"
  }), [k, tl] = hl.useState(!1), al = async () => {
    if (!k) {
      tl(!0);
      try {
        await chrome.storage.local.set({ searchBookmarkSetting: x }), await chrome.notifications.create({
          type: "basic",
          iconUrl: "icons/icon.png",
          title: "提示",
          message: "设置已保存，新设置重新打开搜索框即可生效。"
        });
      } finally {
        tl(!1);
      }
      window.close();
    }
  }, W = (_) => {
    m({ ...x, ..._ });
  };
  return hl.useEffect(() => {
    chrome.storage.local.get("searchBookmarkSetting", (_) => {
      _.searchBookmarkSetting && m({ ...x, ..._.searchBookmarkSetting }), J(!1);
    });
  }, []), !z && /* @__PURE__ */ Q.jsxs("div", { className: "setting__container", children: [
    /* @__PURE__ */ Q.jsx("div", { className: "setting__title", children: "设置" }),
    /* @__PURE__ */ Q.jsxs("div", { className: "setting__content", children: [
      /* @__PURE__ */ Q.jsx(
        ni,
        {
          label: "是否新窗口打开",
          tips: "按住 Ctrl/Command 键可以强制新窗口打开",
          children: /* @__PURE__ */ Q.jsxs(
            vo,
            {
              name: "openNewTab",
              value: x.openNewTab,
              onChange: (_) => W({ openNewTab: _ }),
              children: [
                /* @__PURE__ */ Q.jsx(xn, { value: "0", children: "否（通过匹配域名查找已打开页面）" }),
                /* @__PURE__ */ Q.jsx(xn, { value: "1", children: "是" })
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ Q.jsx(ni, { label: "查找规则", children: /* @__PURE__ */ Q.jsx(
        ky,
        {
          name: "searchRule",
          value: x.searchRule,
          onChange: (_) => W({
            searchRule: _
          }),
          options: [
            { name: "标题", value: "title" },
            { name: "父节点标题", value: "parentTitle" },
            { name: "URL", value: "url" }
          ]
        }
      ) }),
      /* @__PURE__ */ Q.jsx(ni, { label: "搜索为空时是否使用默认搜索引擎搜索", children: /* @__PURE__ */ Q.jsxs(
        vo,
        {
          name: "useDefaultSearch",
          value: x.useDefaultSearch,
          onChange: (_) => W({ useDefaultSearch: _ }),
          children: [
            /* @__PURE__ */ Q.jsx(xn, { value: "0", children: "否" }),
            /* @__PURE__ */ Q.jsx(xn, { value: "1", children: "是" })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ Q.jsx("div", { className: "setting__footer", children: /* @__PURE__ */ Q.jsx("div", { className: "submit-button", onClick: al, children: "保存设置" }) })
  ] });
}, $y = window.self !== window.top;
Ky.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ Q.jsx(hl.StrictMode, { children: $y ? /* @__PURE__ */ Q.jsx(wy, {}) : /* @__PURE__ */ Q.jsx(Wy, {}) })
);
