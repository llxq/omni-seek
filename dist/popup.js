var Ff = { exports: {} }, me = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var P0;
function jh() {
  if (P0) return me;
  P0 = 1;
  var _ = Symbol.for("react.transitional.element"), p = Symbol.for("react.fragment");
  function U(h, V, F) {
    var I = null;
    if (F !== void 0 && (I = "" + F), V.key !== void 0 && (I = "" + V.key), "key" in V) {
      F = {};
      for (var k in V)
        k !== "key" && (F[k] = V[k]);
    } else F = V;
    return V = F.ref, {
      $$typeof: _,
      type: h,
      key: I,
      ref: V !== void 0 ? V : null,
      props: F
    };
  }
  return me.Fragment = p, me.jsx = U, me.jsxs = U, me;
}
var ld;
function Ch() {
  return ld || (ld = 1, Ff.exports = jh()), Ff.exports;
}
var X = Ch(), If = { exports: {} }, Z = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var td;
function Xh() {
  if (td) return Z;
  td = 1;
  var _ = Symbol.for("react.transitional.element"), p = Symbol.for("react.portal"), U = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), F = Symbol.for("react.consumer"), I = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), T = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), W = Symbol.iterator;
  function P(s) {
    return s === null || typeof s != "object" ? null : (s = W && s[W] || s["@@iterator"], typeof s == "function" ? s : null);
  }
  var Ul = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Nl = Object.assign, Jl = {};
  function q(s, A, M) {
    this.props = s, this.context = A, this.refs = Jl, this.updater = M || Ul;
  }
  q.prototype.isReactComponent = {}, q.prototype.setState = function(s, A) {
    if (typeof s != "object" && typeof s != "function" && s != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, s, A, "setState");
  }, q.prototype.forceUpdate = function(s) {
    this.updater.enqueueForceUpdate(this, s, "forceUpdate");
  };
  function rl() {
  }
  rl.prototype = q.prototype;
  function vl(s, A, M) {
    this.props = s, this.context = A, this.refs = Jl, this.updater = M || Ul;
  }
  var cl = vl.prototype = new rl();
  cl.constructor = vl, Nl(cl, q.prototype), cl.isPureReactComponent = !0;
  var gl = Array.isArray, j = { H: null, A: null, T: null, S: null, V: null }, El = Object.prototype.hasOwnProperty;
  function hl(s, A, M, z, B, ll) {
    return M = ll.ref, {
      $$typeof: _,
      type: s,
      key: A,
      ref: M !== void 0 ? M : null,
      props: ll
    };
  }
  function ml(s, A) {
    return hl(
      s.type,
      A,
      void 0,
      void 0,
      void 0,
      s.props
    );
  }
  function Hl(s) {
    return typeof s == "object" && s !== null && s.$$typeof === _;
  }
  function wl(s) {
    var A = { "=": "=0", ":": "=2" };
    return "$" + s.replace(/[=:]/g, function(M) {
      return A[M];
    });
  }
  var Bl = /\/+/g;
  function zl(s, A) {
    return typeof s == "object" && s !== null && s.key != null ? wl("" + s.key) : A.toString(36);
  }
  function Rt() {
  }
  function ru(s) {
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
  function Zl(s, A, M, z, B) {
    var ll = typeof s;
    (ll === "undefined" || ll === "boolean") && (s = null);
    var Q = !1;
    if (s === null) Q = !0;
    else
      switch (ll) {
        case "bigint":
        case "string":
        case "number":
          Q = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case _:
            case p:
              Q = !0;
              break;
            case N:
              return Q = s._init, Zl(
                Q(s._payload),
                A,
                M,
                z,
                B
              );
          }
      }
    if (Q)
      return B = B(s), Q = z === "" ? "." + zl(s, 0) : z, gl(B) ? (M = "", Q != null && (M = Q.replace(Bl, "$&/") + "/"), Zl(B, A, M, "", function(Lt) {
        return Lt;
      })) : B != null && (Hl(B) && (B = ml(
        B,
        M + (B.key == null || s && s.key === B.key ? "" : ("" + B.key).replace(
          Bl,
          "$&/"
        ) + "/") + Q
      )), A.push(B)), 1;
    Q = 0;
    var lt = z === "" ? "." : z + ":";
    if (gl(s))
      for (var Sl = 0; Sl < s.length; Sl++)
        z = s[Sl], ll = lt + zl(z, Sl), Q += Zl(
          z,
          A,
          M,
          ll,
          B
        );
    else if (Sl = P(s), typeof Sl == "function")
      for (s = Sl.call(s), Sl = 0; !(z = s.next()).done; )
        z = z.value, ll = lt + zl(z, Sl++), Q += Zl(
          z,
          A,
          M,
          ll,
          B
        );
    else if (ll === "object") {
      if (typeof s.then == "function")
        return Zl(
          ru(s),
          A,
          M,
          z,
          B
        );
      throw A = String(s), Error(
        "Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Q;
  }
  function S(s, A, M) {
    if (s == null) return s;
    var z = [], B = 0;
    return Zl(s, z, "", "", function(ll) {
      return A.call(M, ll, B++);
    }), z;
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
  var G = typeof reportError == "function" ? reportError : function(s) {
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
  return Z.Children = {
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
      if (!Hl(s))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return s;
    }
  }, Z.Component = q, Z.Fragment = U, Z.Profiler = V, Z.PureComponent = vl, Z.StrictMode = h, Z.Suspense = O, Z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = j, Z.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(s) {
      return j.H.useMemoCache(s);
    }
  }, Z.cache = function(s) {
    return function() {
      return s.apply(null, arguments);
    };
  }, Z.cloneElement = function(s, A, M) {
    if (s == null)
      throw Error(
        "The argument must be a React element, but you passed " + s + "."
      );
    var z = Nl({}, s.props), B = s.key, ll = void 0;
    if (A != null)
      for (Q in A.ref !== void 0 && (ll = void 0), A.key !== void 0 && (B = "" + A.key), A)
        !El.call(A, Q) || Q === "key" || Q === "__self" || Q === "__source" || Q === "ref" && A.ref === void 0 || (z[Q] = A[Q]);
    var Q = arguments.length - 2;
    if (Q === 1) z.children = M;
    else if (1 < Q) {
      for (var lt = Array(Q), Sl = 0; Sl < Q; Sl++)
        lt[Sl] = arguments[Sl + 2];
      z.children = lt;
    }
    return hl(s.type, B, void 0, void 0, ll, z);
  }, Z.createContext = function(s) {
    return s = {
      $$typeof: I,
      _currentValue: s,
      _currentValue2: s,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, s.Provider = s, s.Consumer = {
      $$typeof: F,
      _context: s
    }, s;
  }, Z.createElement = function(s, A, M) {
    var z, B = {}, ll = null;
    if (A != null)
      for (z in A.key !== void 0 && (ll = "" + A.key), A)
        El.call(A, z) && z !== "key" && z !== "__self" && z !== "__source" && (B[z] = A[z]);
    var Q = arguments.length - 2;
    if (Q === 1) B.children = M;
    else if (1 < Q) {
      for (var lt = Array(Q), Sl = 0; Sl < Q; Sl++)
        lt[Sl] = arguments[Sl + 2];
      B.children = lt;
    }
    if (s && s.defaultProps)
      for (z in Q = s.defaultProps, Q)
        B[z] === void 0 && (B[z] = Q[z]);
    return hl(s, ll, void 0, void 0, null, B);
  }, Z.createRef = function() {
    return { current: null };
  }, Z.forwardRef = function(s) {
    return { $$typeof: k, render: s };
  }, Z.isValidElement = Hl, Z.lazy = function(s) {
    return {
      $$typeof: N,
      _payload: { _status: -1, _result: s },
      _init: D
    };
  }, Z.memo = function(s, A) {
    return {
      $$typeof: T,
      type: s,
      compare: A === void 0 ? null : A
    };
  }, Z.startTransition = function(s) {
    var A = j.T, M = {};
    j.T = M;
    try {
      var z = s(), B = j.S;
      B !== null && B(M, z), typeof z == "object" && z !== null && typeof z.then == "function" && z.then(ol, G);
    } catch (ll) {
      G(ll);
    } finally {
      j.T = A;
    }
  }, Z.unstable_useCacheRefresh = function() {
    return j.H.useCacheRefresh();
  }, Z.use = function(s) {
    return j.H.use(s);
  }, Z.useActionState = function(s, A, M) {
    return j.H.useActionState(s, A, M);
  }, Z.useCallback = function(s, A) {
    return j.H.useCallback(s, A);
  }, Z.useContext = function(s) {
    return j.H.useContext(s);
  }, Z.useDebugValue = function() {
  }, Z.useDeferredValue = function(s, A) {
    return j.H.useDeferredValue(s, A);
  }, Z.useEffect = function(s, A, M) {
    var z = j.H;
    if (typeof M == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return z.useEffect(s, A);
  }, Z.useId = function() {
    return j.H.useId();
  }, Z.useImperativeHandle = function(s, A, M) {
    return j.H.useImperativeHandle(s, A, M);
  }, Z.useInsertionEffect = function(s, A) {
    return j.H.useInsertionEffect(s, A);
  }, Z.useLayoutEffect = function(s, A) {
    return j.H.useLayoutEffect(s, A);
  }, Z.useMemo = function(s, A) {
    return j.H.useMemo(s, A);
  }, Z.useOptimistic = function(s, A) {
    return j.H.useOptimistic(s, A);
  }, Z.useReducer = function(s, A, M) {
    return j.H.useReducer(s, A, M);
  }, Z.useRef = function(s) {
    return j.H.useRef(s);
  }, Z.useState = function(s) {
    return j.H.useState(s);
  }, Z.useSyncExternalStore = function(s, A, M) {
    return j.H.useSyncExternalStore(
      s,
      A,
      M
    );
  }, Z.useTransition = function() {
    return j.H.useTransition();
  }, Z.version = "19.1.1", Z;
}
var ud;
function ni() {
  return ud || (ud = 1, If.exports = Xh()), If.exports;
}
var al = ni(), Pf = { exports: {} }, ge = {}, li = { exports: {} }, ti = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ad;
function Qh() {
  return ad || (ad = 1, (function(_) {
    function p(S, D) {
      var G = S.length;
      S.push(D);
      l: for (; 0 < G; ) {
        var ol = G - 1 >>> 1, s = S[ol];
        if (0 < V(s, D))
          S[ol] = D, S[G] = s, G = ol;
        else break l;
      }
    }
    function U(S) {
      return S.length === 0 ? null : S[0];
    }
    function h(S) {
      if (S.length === 0) return null;
      var D = S[0], G = S.pop();
      if (G !== D) {
        S[0] = G;
        l: for (var ol = 0, s = S.length, A = s >>> 1; ol < A; ) {
          var M = 2 * (ol + 1) - 1, z = S[M], B = M + 1, ll = S[B];
          if (0 > V(z, G))
            B < s && 0 > V(ll, z) ? (S[ol] = ll, S[B] = G, ol = B) : (S[ol] = z, S[M] = G, ol = M);
          else if (B < s && 0 > V(ll, G))
            S[ol] = ll, S[B] = G, ol = B;
          else break l;
        }
      }
      return D;
    }
    function V(S, D) {
      var G = S.sortIndex - D.sortIndex;
      return G !== 0 ? G : S.id - D.id;
    }
    if (_.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var F = performance;
      _.unstable_now = function() {
        return F.now();
      };
    } else {
      var I = Date, k = I.now();
      _.unstable_now = function() {
        return I.now() - k;
      };
    }
    var O = [], T = [], N = 1, W = null, P = 3, Ul = !1, Nl = !1, Jl = !1, q = !1, rl = typeof setTimeout == "function" ? setTimeout : null, vl = typeof clearTimeout == "function" ? clearTimeout : null, cl = typeof setImmediate < "u" ? setImmediate : null;
    function gl(S) {
      for (var D = U(T); D !== null; ) {
        if (D.callback === null) h(T);
        else if (D.startTime <= S)
          h(T), D.sortIndex = D.expirationTime, p(O, D);
        else break;
        D = U(T);
      }
    }
    function j(S) {
      if (Jl = !1, gl(S), !Nl)
        if (U(O) !== null)
          Nl = !0, El || (El = !0, zl());
        else {
          var D = U(T);
          D !== null && Zl(j, D.startTime - S);
        }
    }
    var El = !1, hl = -1, ml = 5, Hl = -1;
    function wl() {
      return q ? !0 : !(_.unstable_now() - Hl < ml);
    }
    function Bl() {
      if (q = !1, El) {
        var S = _.unstable_now();
        Hl = S;
        var D = !0;
        try {
          l: {
            Nl = !1, Jl && (Jl = !1, vl(hl), hl = -1), Ul = !0;
            var G = P;
            try {
              t: {
                for (gl(S), W = U(O); W !== null && !(W.expirationTime > S && wl()); ) {
                  var ol = W.callback;
                  if (typeof ol == "function") {
                    W.callback = null, P = W.priorityLevel;
                    var s = ol(
                      W.expirationTime <= S
                    );
                    if (S = _.unstable_now(), typeof s == "function") {
                      W.callback = s, gl(S), D = !0;
                      break t;
                    }
                    W === U(O) && h(O), gl(S);
                  } else h(O);
                  W = U(O);
                }
                if (W !== null) D = !0;
                else {
                  var A = U(T);
                  A !== null && Zl(
                    j,
                    A.startTime - S
                  ), D = !1;
                }
              }
              break l;
            } finally {
              W = null, P = G, Ul = !1;
            }
            D = void 0;
          }
        } finally {
          D ? zl() : El = !1;
        }
      }
    }
    var zl;
    if (typeof cl == "function")
      zl = function() {
        cl(Bl);
      };
    else if (typeof MessageChannel < "u") {
      var Rt = new MessageChannel(), ru = Rt.port2;
      Rt.port1.onmessage = Bl, zl = function() {
        ru.postMessage(null);
      };
    } else
      zl = function() {
        rl(Bl, 0);
      };
    function Zl(S, D) {
      hl = rl(function() {
        S(_.unstable_now());
      }, D);
    }
    _.unstable_IdlePriority = 5, _.unstable_ImmediatePriority = 1, _.unstable_LowPriority = 4, _.unstable_NormalPriority = 3, _.unstable_Profiling = null, _.unstable_UserBlockingPriority = 2, _.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, _.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ml = 0 < S ? Math.floor(1e3 / S) : 5;
    }, _.unstable_getCurrentPriorityLevel = function() {
      return P;
    }, _.unstable_next = function(S) {
      switch (P) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = P;
      }
      var G = P;
      P = D;
      try {
        return S();
      } finally {
        P = G;
      }
    }, _.unstable_requestPaint = function() {
      q = !0;
    }, _.unstable_runWithPriority = function(S, D) {
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
      var G = P;
      P = S;
      try {
        return D();
      } finally {
        P = G;
      }
    }, _.unstable_scheduleCallback = function(S, D, G) {
      var ol = _.unstable_now();
      switch (typeof G == "object" && G !== null ? (G = G.delay, G = typeof G == "number" && 0 < G ? ol + G : ol) : G = ol, S) {
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
      return s = G + s, S = {
        id: N++,
        callback: D,
        priorityLevel: S,
        startTime: G,
        expirationTime: s,
        sortIndex: -1
      }, G > ol ? (S.sortIndex = G, p(T, S), U(O) === null && S === U(T) && (Jl ? (vl(hl), hl = -1) : Jl = !0, Zl(j, G - ol))) : (S.sortIndex = s, p(O, S), Nl || Ul || (Nl = !0, El || (El = !0, zl()))), S;
    }, _.unstable_shouldYield = wl, _.unstable_wrapCallback = function(S) {
      var D = P;
      return function() {
        var G = P;
        P = D;
        try {
          return S.apply(this, arguments);
        } finally {
          P = G;
        }
      };
    };
  })(ti)), ti;
}
var ed;
function Zh() {
  return ed || (ed = 1, li.exports = Qh()), li.exports;
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
var nd;
function Vh() {
  if (nd) return Kl;
  nd = 1;
  var _ = ni();
  function p(O) {
    var T = "https://react.dev/errors/" + O;
    if (1 < arguments.length) {
      T += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var N = 2; N < arguments.length; N++)
        T += "&args[]=" + encodeURIComponent(arguments[N]);
    }
    return "Minified React error #" + O + "; visit " + T + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function U() {
  }
  var h = {
    d: {
      f: U,
      r: function() {
        throw Error(p(522));
      },
      D: U,
      C: U,
      L: U,
      m: U,
      X: U,
      S: U,
      M: U
    },
    p: 0,
    findDOMNode: null
  }, V = Symbol.for("react.portal");
  function F(O, T, N) {
    var W = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: V,
      key: W == null ? null : "" + W,
      children: O,
      containerInfo: T,
      implementation: N
    };
  }
  var I = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function k(O, T) {
    if (O === "font") return "";
    if (typeof T == "string")
      return T === "use-credentials" ? T : "";
  }
  return Kl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = h, Kl.createPortal = function(O, T) {
    var N = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!T || T.nodeType !== 1 && T.nodeType !== 9 && T.nodeType !== 11)
      throw Error(p(299));
    return F(O, T, null, N);
  }, Kl.flushSync = function(O) {
    var T = I.T, N = h.p;
    try {
      if (I.T = null, h.p = 2, O) return O();
    } finally {
      I.T = T, h.p = N, h.d.f();
    }
  }, Kl.preconnect = function(O, T) {
    typeof O == "string" && (T ? (T = T.crossOrigin, T = typeof T == "string" ? T === "use-credentials" ? T : "" : void 0) : T = null, h.d.C(O, T));
  }, Kl.prefetchDNS = function(O) {
    typeof O == "string" && h.d.D(O);
  }, Kl.preinit = function(O, T) {
    if (typeof O == "string" && T && typeof T.as == "string") {
      var N = T.as, W = k(N, T.crossOrigin), P = typeof T.integrity == "string" ? T.integrity : void 0, Ul = typeof T.fetchPriority == "string" ? T.fetchPriority : void 0;
      N === "style" ? h.d.S(
        O,
        typeof T.precedence == "string" ? T.precedence : void 0,
        {
          crossOrigin: W,
          integrity: P,
          fetchPriority: Ul
        }
      ) : N === "script" && h.d.X(O, {
        crossOrigin: W,
        integrity: P,
        fetchPriority: Ul,
        nonce: typeof T.nonce == "string" ? T.nonce : void 0
      });
    }
  }, Kl.preinitModule = function(O, T) {
    if (typeof O == "string")
      if (typeof T == "object" && T !== null) {
        if (T.as == null || T.as === "script") {
          var N = k(
            T.as,
            T.crossOrigin
          );
          h.d.M(O, {
            crossOrigin: N,
            integrity: typeof T.integrity == "string" ? T.integrity : void 0,
            nonce: typeof T.nonce == "string" ? T.nonce : void 0
          });
        }
      } else T == null && h.d.M(O);
  }, Kl.preload = function(O, T) {
    if (typeof O == "string" && typeof T == "object" && T !== null && typeof T.as == "string") {
      var N = T.as, W = k(N, T.crossOrigin);
      h.d.L(O, N, {
        crossOrigin: W,
        integrity: typeof T.integrity == "string" ? T.integrity : void 0,
        nonce: typeof T.nonce == "string" ? T.nonce : void 0,
        type: typeof T.type == "string" ? T.type : void 0,
        fetchPriority: typeof T.fetchPriority == "string" ? T.fetchPriority : void 0,
        referrerPolicy: typeof T.referrerPolicy == "string" ? T.referrerPolicy : void 0,
        imageSrcSet: typeof T.imageSrcSet == "string" ? T.imageSrcSet : void 0,
        imageSizes: typeof T.imageSizes == "string" ? T.imageSizes : void 0,
        media: typeof T.media == "string" ? T.media : void 0
      });
    }
  }, Kl.preloadModule = function(O, T) {
    if (typeof O == "string")
      if (T) {
        var N = k(T.as, T.crossOrigin);
        h.d.m(O, {
          as: typeof T.as == "string" && T.as !== "script" ? T.as : void 0,
          crossOrigin: N,
          integrity: typeof T.integrity == "string" ? T.integrity : void 0
        });
      } else h.d.m(O);
  }, Kl.requestFormReset = function(O) {
    h.d.r(O);
  }, Kl.unstable_batchedUpdates = function(O, T) {
    return O(T);
  }, Kl.useFormState = function(O, T, N) {
    return I.H.useFormState(O, T, N);
  }, Kl.useFormStatus = function() {
    return I.H.useHostTransitionStatus();
  }, Kl.version = "19.1.1", Kl;
}
var cd;
function Lh() {
  if (cd) return ui.exports;
  cd = 1;
  function _() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_);
      } catch (p) {
        console.error(p);
      }
  }
  return _(), ui.exports = Vh(), ui.exports;
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
var fd;
function Kh() {
  if (fd) return ge;
  fd = 1;
  var _ = Zh(), p = ni(), U = Lh();
  function h(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        t += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function V(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function F(l) {
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
  function I(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function k(l) {
    if (F(l) !== l)
      throw Error(h(188));
  }
  function O(l) {
    var t = l.alternate;
    if (!t) {
      if (t = F(l), t === null) throw Error(h(188));
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
          if (n === u) return k(e), l;
          if (n === a) return k(e), t;
          n = n.sibling;
        }
        throw Error(h(188));
      }
      if (u.return !== a.return) u = e, a = n;
      else {
        for (var c = !1, f = e.child; f; ) {
          if (f === u) {
            c = !0, u = e, a = n;
            break;
          }
          if (f === a) {
            c = !0, a = e, u = n;
            break;
          }
          f = f.sibling;
        }
        if (!c) {
          for (f = n.child; f; ) {
            if (f === u) {
              c = !0, u = n, a = e;
              break;
            }
            if (f === a) {
              c = !0, a = n, u = e;
              break;
            }
            f = f.sibling;
          }
          if (!c) throw Error(h(189));
        }
      }
      if (u.alternate !== a) throw Error(h(190));
    }
    if (u.tag !== 3) throw Error(h(188));
    return u.stateNode.current === u ? l : t;
  }
  function T(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = T(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var N = Object.assign, W = Symbol.for("react.element"), P = Symbol.for("react.transitional.element"), Ul = Symbol.for("react.portal"), Nl = Symbol.for("react.fragment"), Jl = Symbol.for("react.strict_mode"), q = Symbol.for("react.profiler"), rl = Symbol.for("react.provider"), vl = Symbol.for("react.consumer"), cl = Symbol.for("react.context"), gl = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), El = Symbol.for("react.suspense_list"), hl = Symbol.for("react.memo"), ml = Symbol.for("react.lazy"), Hl = Symbol.for("react.activity"), wl = Symbol.for("react.memo_cache_sentinel"), Bl = Symbol.iterator;
  function zl(l) {
    return l === null || typeof l != "object" ? null : (l = Bl && l[Bl] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Rt = Symbol.for("react.client.reference");
  function ru(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Rt ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Nl:
        return "Fragment";
      case q:
        return "Profiler";
      case Jl:
        return "StrictMode";
      case j:
        return "Suspense";
      case El:
        return "SuspenseList";
      case Hl:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Ul:
          return "Portal";
        case cl:
          return (l.displayName || "Context") + ".Provider";
        case vl:
          return (l._context.displayName || "Context") + ".Consumer";
        case gl:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case hl:
          return t = l.displayName || null, t !== null ? t : ru(l.type) || "Memo";
        case ml:
          t = l._payload, l = l._init;
          try {
            return ru(l(t));
          } catch {
          }
      }
    return null;
  }
  var Zl = Array.isArray, S = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = U.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = {
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
  function z(l, t) {
    s++, ol[s] = l.current, l.current = t;
  }
  var B = A(null), ll = A(null), Q = A(null), lt = A(null);
  function Sl(l, t) {
    switch (z(Q, t), z(ll, l), z(B, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? M0(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = M0(t), l = R0(t, l);
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
    M(B), z(B, l);
  }
  function Lt() {
    M(B), M(ll), M(Q);
  }
  function xn(l) {
    l.memoizedState !== null && z(lt, l);
    var t = B.current, u = R0(t, l.type);
    t !== u && (z(ll, l), z(B, u));
  }
  function Se(l) {
    ll.current === l && (M(B), M(ll)), lt.current === l && (M(lt), de._currentValue = G);
  }
  var Yn = Object.prototype.hasOwnProperty, Gn = _.unstable_scheduleCallback, jn = _.unstable_cancelCallback, md = _.unstable_shouldYield, gd = _.unstable_requestPaint, At = _.unstable_now, Sd = _.unstable_getCurrentPriorityLevel, ci = _.unstable_ImmediatePriority, fi = _.unstable_UserBlockingPriority, be = _.unstable_NormalPriority, bd = _.unstable_LowPriority, ii = _.unstable_IdlePriority, Td = _.log, Ed = _.unstable_setDisableYieldValue, ba = null, tt = null;
  function Kt(l) {
    if (typeof Td == "function" && Ed(l), tt && typeof tt.setStrictMode == "function")
      try {
        tt.setStrictMode(ba, l);
      } catch {
      }
  }
  var ut = Math.clz32 ? Math.clz32 : zd, Ad = Math.log, _d = Math.LN2;
  function zd(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Ad(l) / _d | 0) | 0;
  }
  var Te = 256, Ee = 4194304;
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
  function Ae(l, t, u) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var e = 0, n = l.suspendedLanes, c = l.pingedLanes;
    l = l.warmLanes;
    var f = a & 134217727;
    return f !== 0 ? (a = f & ~n, a !== 0 ? e = mu(a) : (c &= f, c !== 0 ? e = mu(c) : u || (u = f & ~l, u !== 0 && (e = mu(u))))) : (f = a & ~n, f !== 0 ? e = mu(f) : c !== 0 ? e = mu(c) : u || (u = a & ~l, u !== 0 && (e = mu(u)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, u = t & -t, n >= u || n === 32 && (u & 4194048) !== 0) ? t : e;
  }
  function Ta(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Od(l, t) {
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
  function si() {
    var l = Te;
    return Te <<= 1, (Te & 4194048) === 0 && (Te = 256), l;
  }
  function oi() {
    var l = Ee;
    return Ee <<= 1, (Ee & 62914560) === 0 && (Ee = 4194304), l;
  }
  function Cn(l) {
    for (var t = [], u = 0; 31 > u; u++) t.push(l);
    return t;
  }
  function Ea(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Dd(l, t, u, a, e, n) {
    var c = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var f = l.entanglements, i = l.expirationTimes, y = l.hiddenUpdates;
    for (u = c & ~u; 0 < u; ) {
      var g = 31 - ut(u), E = 1 << g;
      f[g] = 0, i[g] = -1;
      var r = y[g];
      if (r !== null)
        for (y[g] = null, g = 0; g < r.length; g++) {
          var m = r[g];
          m !== null && (m.lane &= -536870913);
        }
      u &= ~E;
    }
    a !== 0 && di(l, a, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(c & ~t));
  }
  function di(l, t, u) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - ut(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | u & 4194090;
  }
  function vi(l, t) {
    var u = l.entangledLanes |= t;
    for (l = l.entanglements; u; ) {
      var a = 31 - ut(u), e = 1 << a;
      e & t | l[a] & t && (l[a] |= t), u &= ~e;
    }
  }
  function Xn(l) {
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
  function Qn(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function hi() {
    var l = D.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : w0(l.type));
  }
  function Md(l, t) {
    var u = D.p;
    try {
      return D.p = l, t();
    } finally {
      D.p = u;
    }
  }
  var Jt = Math.random().toString(36).slice(2), Vl = "__reactFiber$" + Jt, Wl = "__reactProps$" + Jt, Bu = "__reactContainer$" + Jt, Zn = "__reactEvents$" + Jt, Rd = "__reactListeners$" + Jt, Ud = "__reactHandles$" + Jt, yi = "__reactResources$" + Jt, Aa = "__reactMarker$" + Jt;
  function Vn(l) {
    delete l[Vl], delete l[Wl], delete l[Zn], delete l[Rd], delete l[Ud];
  }
  function xu(l) {
    var t = l[Vl];
    if (t) return t;
    for (var u = l.parentNode; u; ) {
      if (t = u[Bu] || u[Vl]) {
        if (u = t.alternate, t.child !== null || u !== null && u.child !== null)
          for (l = p0(l); l !== null; ) {
            if (u = l[Vl]) return u;
            l = p0(l);
          }
        return t;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Yu(l) {
    if (l = l[Vl] || l[Bu]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function _a(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(h(33));
  }
  function Gu(l) {
    var t = l[yi];
    return t || (t = l[yi] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function xl(l) {
    l[Aa] = !0;
  }
  var ri = /* @__PURE__ */ new Set(), mi = {};
  function gu(l, t) {
    ju(l, t), ju(l + "Capture", t);
  }
  function ju(l, t) {
    for (mi[l] = t, l = 0; l < t.length; l++)
      ri.add(t[l]);
  }
  var Nd = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), gi = {}, Si = {};
  function Hd(l) {
    return Yn.call(Si, l) ? !0 : Yn.call(gi, l) ? !1 : Nd.test(l) ? Si[l] = !0 : (gi[l] = !0, !1);
  }
  function _e(l, t, u) {
    if (Hd(t))
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
  function ze(l, t, u) {
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
  function Ut(l, t, u, a) {
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
  var Ln, bi;
  function Cu(l) {
    if (Ln === void 0)
      try {
        throw Error();
      } catch (u) {
        var t = u.stack.trim().match(/\n( *(at )?)/);
        Ln = t && t[1] || "", bi = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Ln + l + bi;
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
              var E = function() {
                throw Error();
              };
              if (Object.defineProperty(E.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(E, []);
                } catch (m) {
                  var r = m;
                }
                Reflect.construct(l, [], E);
              } else {
                try {
                  E.call();
                } catch (m) {
                  r = m;
                }
                l.call(E.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (m) {
                r = m;
              }
              (E = l()) && typeof E.catch == "function" && E.catch(function() {
              });
            }
          } catch (m) {
            if (m && r && typeof m.stack == "string")
              return [m.stack, r.stack];
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
      var n = a.DetermineComponentFrameRoot(), c = n[0], f = n[1];
      if (c && f) {
        var i = c.split(`
`), y = f.split(`
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
    return (u = l ? l.displayName || l.name : "") ? Cu(u) : "";
  }
  function pd(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Cu(l.type);
      case 16:
        return Cu("Lazy");
      case 13:
        return Cu("Suspense");
      case 19:
        return Cu("SuspenseList");
      case 0:
      case 15:
        return Jn(l.type, !1);
      case 11:
        return Jn(l.type.render, !1);
      case 1:
        return Jn(l.type, !0);
      case 31:
        return Cu("Activity");
      default:
        return "";
    }
  }
  function Ti(l) {
    try {
      var t = "";
      do
        t += pd(l), l = l.return;
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
  function Ei(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function qd(l) {
    var t = Ei(l) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(
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
        set: function(c) {
          a = "" + c, n.call(this, c);
        }
      }), Object.defineProperty(l, t, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(c) {
          a = "" + c;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function Oe(l) {
    l._valueTracker || (l._valueTracker = qd(l));
  }
  function Ai(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var u = t.getValue(), a = "";
    return l && (a = Ei(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== u ? (t.setValue(l), !0) : !1;
  }
  function De(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Bd = /[\n"\\]/g;
  function dt(l) {
    return l.replace(
      Bd,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function wn(l, t, u, a, e, n, c, f) {
    l.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.type = c : l.removeAttribute("type"), t != null ? c === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + ot(t)) : l.value !== "" + ot(t) && (l.value = "" + ot(t)) : c !== "submit" && c !== "reset" || l.removeAttribute("value"), t != null ? kn(l, c, ot(t)) : u != null ? kn(l, c, ot(u)) : a != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.name = "" + ot(f) : l.removeAttribute("name");
  }
  function _i(l, t, u, a, e, n, c, f) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || u != null) {
      if (!(n !== "submit" && n !== "reset" || t != null))
        return;
      u = u != null ? "" + ot(u) : "", t = t != null ? "" + ot(t) : u, f || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? e, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = f ? l.checked : !!a, l.defaultChecked = !!a, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (l.name = c);
  }
  function kn(l, t, u) {
    t === "number" && De(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function Xu(l, t, u, a) {
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
  function zi(l, t, u) {
    if (t != null && (t = "" + ot(t), t !== l.value && (l.value = t), u == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = u != null ? "" + ot(u) : "";
  }
  function Oi(l, t, u, a) {
    if (t == null) {
      if (a != null) {
        if (u != null) throw Error(h(92));
        if (Zl(a)) {
          if (1 < a.length) throw Error(h(93));
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
  var xd = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Di(l, t, u) {
    var a = t.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, u) : typeof u != "number" || u === 0 || xd.has(t) ? t === "float" ? l.cssFloat = u : l[t] = ("" + u).trim() : l[t] = u + "px";
  }
  function Mi(l, t, u) {
    if (t != null && typeof t != "object")
      throw Error(h(62));
    if (l = l.style, u != null) {
      for (var a in u)
        !u.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
      for (var e in t)
        a = t[e], t.hasOwnProperty(e) && u[e] !== a && Di(l, e, a);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && Di(l, n, t[n]);
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
  var Yd = /* @__PURE__ */ new Map([
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
  ]), Gd = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Me(l) {
    return Gd.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var $n = null;
  function Fn(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Zu = null, Vu = null;
  function Ri(l) {
    var t = Yu(l);
    if (t && (l = t.stateNode)) {
      var u = l[Wl] || null;
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
              'input[name="' + dt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < u.length; t++) {
              var a = u[t];
              if (a !== l && a.form === l.form) {
                var e = a[Wl] || null;
                if (!e) throw Error(h(90));
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
              a = u[t], a.form === l.form && Ai(a);
          }
          break l;
        case "textarea":
          zi(l, u.value, u.defaultValue);
          break l;
        case "select":
          t = u.value, t != null && Xu(l, !!u.multiple, t, !1);
      }
    }
  }
  var In = !1;
  function Ui(l, t, u) {
    if (In) return l(t, u);
    In = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (In = !1, (Zu !== null || Vu !== null) && (hn(), Zu && (t = Zu, l = Vu, Vu = Zu = null, Ri(t), l)))
        for (t = 0; t < l.length; t++) Ri(l[t]);
    }
  }
  function za(l, t) {
    var u = l.stateNode;
    if (u === null) return null;
    var a = u[Wl] || null;
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
        h(231, t, typeof u)
      );
    return u;
  }
  var Nt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Pn = !1;
  if (Nt)
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
  var wt = null, lc = null, Re = null;
  function Ni() {
    if (Re) return Re;
    var l, t = lc, u = t.length, a, e = "value" in wt ? wt.value : wt.textContent, n = e.length;
    for (l = 0; l < u && t[l] === e[l]; l++) ;
    var c = u - l;
    for (a = 1; a <= c && t[u - a] === e[n - a]; a++) ;
    return Re = e.slice(l, 1 < a ? 1 - a : void 0);
  }
  function Ue(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Ne() {
    return !0;
  }
  function Hi() {
    return !1;
  }
  function $l(l) {
    function t(u, a, e, n, c) {
      this._reactName = u, this._targetInst = e, this.type = a, this.nativeEvent = n, this.target = c, this.currentTarget = null;
      for (var f in l)
        l.hasOwnProperty(f) && (u = l[f], this[f] = u ? u(n) : n[f]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Ne : Hi, this.isPropagationStopped = Hi, this;
    }
    return N(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = Ne);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = Ne);
      },
      persist: function() {
      },
      isPersistent: Ne
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
  }, He = $l(Su), Da = N({}, Su, { view: 0, detail: 0 }), jd = $l(Da), tc, uc, Ma, pe = N({}, Da, {
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
    getModifierState: ec,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Ma && (Ma && l.type === "mousemove" ? (tc = l.screenX - Ma.screenX, uc = l.screenY - Ma.screenY) : uc = tc = 0, Ma = l), tc);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : uc;
    }
  }), pi = $l(pe), Cd = N({}, pe, { dataTransfer: 0 }), Xd = $l(Cd), Qd = N({}, Da, { relatedTarget: 0 }), ac = $l(Qd), Zd = N({}, Su, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Vd = $l(Zd), Ld = N({}, Su, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Kd = $l(Ld), Jd = N({}, Su, { data: 0 }), qi = $l(Jd), wd = {
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
  }, kd = {
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
  }, Wd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function $d(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = Wd[l]) ? !!t[l] : !1;
  }
  function ec() {
    return $d;
  }
  var Fd = N({}, Da, {
    key: function(l) {
      if (l.key) {
        var t = wd[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Ue(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? kd[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ec,
    charCode: function(l) {
      return l.type === "keypress" ? Ue(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Ue(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Id = $l(Fd), Pd = N({}, pe, {
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
  }), Bi = $l(Pd), lv = N({}, Da, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ec
  }), tv = $l(lv), uv = N({}, Su, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), av = $l(uv), ev = N({}, pe, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), nv = $l(ev), cv = N({}, Su, {
    newState: 0,
    oldState: 0
  }), fv = $l(cv), iv = [9, 13, 27, 32], nc = Nt && "CompositionEvent" in window, Ra = null;
  Nt && "documentMode" in document && (Ra = document.documentMode);
  var sv = Nt && "TextEvent" in window && !Ra, xi = Nt && (!nc || Ra && 8 < Ra && 11 >= Ra), Yi = " ", Gi = !1;
  function ji(l, t) {
    switch (l) {
      case "keyup":
        return iv.indexOf(t.keyCode) !== -1;
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
  function ov(l, t) {
    switch (l) {
      case "compositionend":
        return Ci(t);
      case "keypress":
        return t.which !== 32 ? null : (Gi = !0, Yi);
      case "textInput":
        return l = t.data, l === Yi && Gi ? null : l;
      default:
        return null;
    }
  }
  function dv(l, t) {
    if (Lu)
      return l === "compositionend" || !nc && ji(l, t) ? (l = Ni(), Re = lc = wt = null, Lu = !1, l) : null;
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
        return xi && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var vv = {
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
  function Xi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!vv[l.type] : t === "textarea";
  }
  function Qi(l, t, u, a) {
    Zu ? Vu ? Vu.push(a) : Vu = [a] : Zu = a, t = bn(t, "onChange"), 0 < t.length && (u = new He(
      "onChange",
      "change",
      null,
      u,
      a
    ), l.push({ event: u, listeners: t }));
  }
  var Ua = null, Na = null;
  function hv(l) {
    A0(l, 0);
  }
  function qe(l) {
    var t = _a(l);
    if (Ai(t)) return l;
  }
  function Zi(l, t) {
    if (l === "change") return t;
  }
  var Vi = !1;
  if (Nt) {
    var cc;
    if (Nt) {
      var fc = "oninput" in document;
      if (!fc) {
        var Li = document.createElement("div");
        Li.setAttribute("oninput", "return;"), fc = typeof Li.oninput == "function";
      }
      cc = fc;
    } else cc = !1;
    Vi = cc && (!document.documentMode || 9 < document.documentMode);
  }
  function Ki() {
    Ua && (Ua.detachEvent("onpropertychange", Ji), Na = Ua = null);
  }
  function Ji(l) {
    if (l.propertyName === "value" && qe(Na)) {
      var t = [];
      Qi(
        t,
        Na,
        l,
        Fn(l)
      ), Ui(hv, t);
    }
  }
  function yv(l, t, u) {
    l === "focusin" ? (Ki(), Ua = t, Na = u, Ua.attachEvent("onpropertychange", Ji)) : l === "focusout" && Ki();
  }
  function rv(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return qe(Na);
  }
  function mv(l, t) {
    if (l === "click") return qe(t);
  }
  function gv(l, t) {
    if (l === "input" || l === "change")
      return qe(t);
  }
  function Sv(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var at = typeof Object.is == "function" ? Object.is : Sv;
  function Ha(l, t) {
    if (at(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var u = Object.keys(l), a = Object.keys(t);
    if (u.length !== a.length) return !1;
    for (a = 0; a < u.length; a++) {
      var e = u[a];
      if (!Yn.call(t, e) || !at(l[e], t[e]))
        return !1;
    }
    return !0;
  }
  function wi(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function ki(l, t) {
    var u = wi(l);
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
      u = wi(u);
    }
  }
  function Wi(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Wi(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function $i(l) {
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
  function ic(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var bv = Nt && "documentMode" in document && 11 >= document.documentMode, Ku = null, sc = null, pa = null, oc = !1;
  function Fi(l, t, u) {
    var a = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    oc || Ku == null || Ku !== De(a) || (a = Ku, "selectionStart" in a && ic(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), pa && Ha(pa, a) || (pa = a, a = bn(sc, "onSelect"), 0 < a.length && (t = new He(
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
  }, dc = {}, Ii = {};
  Nt && (Ii = document.createElement("div").style, "AnimationEvent" in window || (delete Ju.animationend.animation, delete Ju.animationiteration.animation, delete Ju.animationstart.animation), "TransitionEvent" in window || delete Ju.transitionend.transition);
  function Tu(l) {
    if (dc[l]) return dc[l];
    if (!Ju[l]) return l;
    var t = Ju[l], u;
    for (u in t)
      if (t.hasOwnProperty(u) && u in Ii)
        return dc[l] = t[u];
    return l;
  }
  var Pi = Tu("animationend"), ls = Tu("animationiteration"), ts = Tu("animationstart"), Tv = Tu("transitionrun"), Ev = Tu("transitionstart"), Av = Tu("transitioncancel"), us = Tu("transitionend"), as = /* @__PURE__ */ new Map(), vc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  vc.push("scrollEnd");
  function bt(l, t) {
    as.set(l, t), gu(t, [l]);
  }
  var es = /* @__PURE__ */ new WeakMap();
  function vt(l, t) {
    if (typeof l == "object" && l !== null) {
      var u = es.get(l);
      return u !== void 0 ? u : (t = {
        value: l,
        source: t,
        stack: Ti(t)
      }, es.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: Ti(t)
    };
  }
  var ht = [], wu = 0, hc = 0;
  function Be() {
    for (var l = wu, t = hc = wu = 0; t < l; ) {
      var u = ht[t];
      ht[t++] = null;
      var a = ht[t];
      ht[t++] = null;
      var e = ht[t];
      ht[t++] = null;
      var n = ht[t];
      if (ht[t++] = null, a !== null && e !== null) {
        var c = a.pending;
        c === null ? e.next = e : (e.next = c.next, c.next = e), a.pending = e;
      }
      n !== 0 && ns(u, e, n);
    }
  }
  function xe(l, t, u, a) {
    ht[wu++] = l, ht[wu++] = t, ht[wu++] = u, ht[wu++] = a, hc |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function yc(l, t, u, a) {
    return xe(l, t, u, a), Ye(l);
  }
  function ku(l, t) {
    return xe(l, null, null, t), Ye(l);
  }
  function ns(l, t, u) {
    l.lanes |= u;
    var a = l.alternate;
    a !== null && (a.lanes |= u);
    for (var e = !1, n = l.return; n !== null; )
      n.childLanes |= u, a = n.alternate, a !== null && (a.childLanes |= u), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - ut(u), l = n.hiddenUpdates, a = l[e], a === null ? l[e] = [t] : a.push(t), t.lane = u | 536870912), n) : null;
  }
  function Ye(l) {
    if (50 < ae)
      throw ae = 0, Ef = null, Error(h(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Wu = {};
  function _v(l, t, u, a) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function et(l, t, u, a) {
    return new _v(l, t, u, a);
  }
  function rc(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Ht(l, t) {
    var u = l.alternate;
    return u === null ? (u = et(
      l.tag,
      t,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = t, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, t = l.dependencies, u.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function cs(l, t) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, t = u.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function Ge(l, t, u, a, e, n) {
    var c = 0;
    if (a = l, typeof l == "function") rc(l) && (c = 1);
    else if (typeof l == "string")
      c = Oh(
        l,
        u,
        B.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case Hl:
          return l = et(31, u, t, e), l.elementType = Hl, l.lanes = n, l;
        case Nl:
          return Eu(u.children, e, n, t);
        case Jl:
          c = 8, e |= 24;
          break;
        case q:
          return l = et(12, u, t, e | 2), l.elementType = q, l.lanes = n, l;
        case j:
          return l = et(13, u, t, e), l.elementType = j, l.lanes = n, l;
        case El:
          return l = et(19, u, t, e), l.elementType = El, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case rl:
              case cl:
                c = 10;
                break l;
              case vl:
                c = 9;
                break l;
              case gl:
                c = 11;
                break l;
              case hl:
                c = 14;
                break l;
              case ml:
                c = 16, a = null;
                break l;
            }
          c = 29, u = Error(
            h(130, l === null ? "null" : typeof l, "")
          ), a = null;
      }
    return t = et(c, u, t, e), t.elementType = l, t.type = a, t.lanes = n, t;
  }
  function Eu(l, t, u, a) {
    return l = et(7, l, a, t), l.lanes = u, l;
  }
  function mc(l, t, u) {
    return l = et(6, l, null, t), l.lanes = u, l;
  }
  function gc(l, t, u) {
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
  var $u = [], Fu = 0, je = null, Ce = 0, yt = [], rt = 0, Au = null, pt = 1, qt = "";
  function _u(l, t) {
    $u[Fu++] = Ce, $u[Fu++] = je, je = l, Ce = t;
  }
  function fs(l, t, u) {
    yt[rt++] = pt, yt[rt++] = qt, yt[rt++] = Au, Au = l;
    var a = pt;
    l = qt;
    var e = 32 - ut(a) - 1;
    a &= ~(1 << e), u += 1;
    var n = 32 - ut(t) + e;
    if (30 < n) {
      var c = e - e % 5;
      n = (a & (1 << c) - 1).toString(32), a >>= c, e -= c, pt = 1 << 32 - ut(t) + e | u << e | a, qt = n + l;
    } else
      pt = 1 << n | u << e | a, qt = l;
  }
  function Sc(l) {
    l.return !== null && (_u(l, 1), fs(l, 1, 0));
  }
  function bc(l) {
    for (; l === je; )
      je = $u[--Fu], $u[Fu] = null, Ce = $u[--Fu], $u[Fu] = null;
    for (; l === Au; )
      Au = yt[--rt], yt[rt] = null, qt = yt[--rt], yt[rt] = null, pt = yt[--rt], yt[rt] = null;
  }
  var kl = null, Al = null, ul = !1, zu = null, _t = !1, Tc = Error(h(519));
  function Ou(l) {
    var t = Error(h(418, ""));
    throw xa(vt(t, l)), Tc;
  }
  function is(l) {
    var t = l.stateNode, u = l.type, a = l.memoizedProps;
    switch (t[Vl] = l, t[Wl] = a, u) {
      case "dialog":
        w("cancel", t), w("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        w("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < ne.length; u++)
          w(ne[u], t);
        break;
      case "source":
        w("error", t);
        break;
      case "img":
      case "image":
      case "link":
        w("error", t), w("load", t);
        break;
      case "details":
        w("toggle", t);
        break;
      case "input":
        w("invalid", t), _i(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        ), Oe(t);
        break;
      case "select":
        w("invalid", t);
        break;
      case "textarea":
        w("invalid", t), Oi(t, a.value, a.defaultValue, a.children), Oe(t);
    }
    u = a.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || t.textContent === "" + u || a.suppressHydrationWarning === !0 || D0(t.textContent, u) ? (a.popover != null && (w("beforetoggle", t), w("toggle", t)), a.onScroll != null && w("scroll", t), a.onScrollEnd != null && w("scrollend", t), a.onClick != null && (t.onclick = Tn), t = !0) : t = !1, t || Ou(l);
  }
  function ss(l) {
    for (kl = l.return; kl; )
      switch (kl.tag) {
        case 5:
        case 13:
          _t = !1;
          return;
        case 27:
        case 3:
          _t = !0;
          return;
        default:
          kl = kl.return;
      }
  }
  function qa(l) {
    if (l !== kl) return !1;
    if (!ul) return ss(l), ul = !0, !1;
    var t = l.tag, u;
    if ((u = t !== 3 && t !== 27) && ((u = t === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Gf(l.type, l.memoizedProps)), u = !u), u && Al && Ou(l), ss(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(h(317));
      l: {
        for (l = l.nextSibling, t = 0; l; ) {
          if (l.nodeType === 8)
            if (u = l.data, u === "/$") {
              if (t === 0) {
                Al = Et(l.nextSibling);
                break l;
              }
              t--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || t++;
          l = l.nextSibling;
        }
        Al = null;
      }
    } else
      t === 27 ? (t = Al, su(l.type) ? (l = Qf, Qf = null, Al = l) : Al = t) : Al = kl ? Et(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Ba() {
    Al = kl = null, ul = !1;
  }
  function os() {
    var l = zu;
    return l !== null && (Pl === null ? Pl = l : Pl.push.apply(
      Pl,
      l
    ), zu = null), l;
  }
  function xa(l) {
    zu === null ? zu = [l] : zu.push(l);
  }
  var Ec = A(null), Du = null, Bt = null;
  function kt(l, t, u) {
    z(Ec, t._currentValue), t._currentValue = u;
  }
  function xt(l) {
    l._currentValue = Ec.current, M(Ec);
  }
  function Ac(l, t, u) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === u) break;
      l = l.return;
    }
  }
  function _c(l, t, u, a) {
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
              n.lanes |= u, f = n.alternate, f !== null && (f.lanes |= u), Ac(
                n.return,
                u,
                l
              ), a || (c = null);
              break l;
            }
          n = f.next;
        }
      } else if (e.tag === 18) {
        if (c = e.return, c === null) throw Error(h(341));
        c.lanes |= u, n = c.alternate, n !== null && (n.lanes |= u), Ac(c, u, l), c = null;
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
  function Ya(l, t, u, a) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var c = e.alternate;
        if (c === null) throw Error(h(387));
        if (c = c.memoizedProps, c !== null) {
          var f = e.type;
          at(e.pendingProps.value, c.value) || (l !== null ? l.push(f) : l = [f]);
        }
      } else if (e === lt.current) {
        if (c = e.alternate, c === null) throw Error(h(387));
        c.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(de) : l = [de]);
      }
      e = e.return;
    }
    l !== null && _c(
      t,
      l,
      u,
      a
    ), t.flags |= 262144;
  }
  function Xe(l) {
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
    Du = l, Bt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Ll(l) {
    return ds(Du, l);
  }
  function Qe(l, t) {
    return Du === null && Mu(l), ds(l, t);
  }
  function ds(l, t) {
    var u = t._currentValue;
    if (t = { context: t, memoizedValue: u, next: null }, Bt === null) {
      if (l === null) throw Error(h(308));
      Bt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Bt = Bt.next = t;
    return u;
  }
  var zv = typeof AbortController < "u" ? AbortController : function() {
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
  }, Ov = _.unstable_scheduleCallback, Dv = _.unstable_NormalPriority, pl = {
    $$typeof: cl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function zc() {
    return {
      controller: new zv(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ga(l) {
    l.refCount--, l.refCount === 0 && Ov(Dv, function() {
      l.controller.abort();
    });
  }
  var ja = null, Oc = 0, Iu = 0, Pu = null;
  function Mv(l, t) {
    if (ja === null) {
      var u = ja = [];
      Oc = 0, Iu = Rf(), Pu = {
        status: "pending",
        value: void 0,
        then: function(a) {
          u.push(a);
        }
      };
    }
    return Oc++, t.then(vs, vs), t;
  }
  function vs() {
    if (--Oc === 0 && ja !== null) {
      Pu !== null && (Pu.status = "fulfilled");
      var l = ja;
      ja = null, Iu = 0, Pu = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Rv(l, t) {
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
  var hs = S.S;
  S.S = function(l, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && Mv(l, t), hs !== null && hs(l, t);
  };
  var Ru = A(null);
  function Dc() {
    var l = Ru.current;
    return l !== null ? l : yl.pooledCache;
  }
  function Ze(l, t) {
    t === null ? z(Ru, Ru.current) : z(Ru, t.pool);
  }
  function ys() {
    var l = Dc();
    return l === null ? null : { parent: pl._currentValue, pool: l };
  }
  var Ca = Error(h(460)), rs = Error(h(474)), Ve = Error(h(542)), Mc = { then: function() {
  } };
  function ms(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Le() {
  }
  function gs(l, t, u) {
    switch (u = l[u], u === void 0 ? l.push(t) : u !== t && (t.then(Le, Le), t = u), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, bs(l), l;
      default:
        if (typeof t.status == "string") t.then(Le, Le);
        else {
          if (l = yl, l !== null && 100 < l.shellSuspendCounter)
            throw Error(h(482));
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
            throw l = t.reason, bs(l), l;
        }
        throw Xa = t, Ca;
    }
  }
  var Xa = null;
  function Ss() {
    if (Xa === null) throw Error(h(459));
    var l = Xa;
    return Xa = null, l;
  }
  function bs(l) {
    if (l === Ca || l === Ve)
      throw Error(h(483));
  }
  var Wt = !1;
  function Rc(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Uc(l, t) {
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
  function Ft(l, t, u) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (el & 2) !== 0) {
      var e = a.pending;
      return e === null ? t.next = t : (t.next = e.next, e.next = t), a.pending = t, t = Ye(l), ns(l, null, u), t;
    }
    return xe(l, a, t, u), Ye(l);
  }
  function Qa(l, t, u) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (u & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, vi(l, u);
    }
  }
  function Nc(l, t) {
    var u = l.updateQueue, a = l.alternate;
    if (a !== null && (a = a.updateQueue, u === a)) {
      var e = null, n = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var c = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          n === null ? e = n = c : n = n.next = c, u = u.next;
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
  var Hc = !1;
  function Za() {
    if (Hc) {
      var l = Pu;
      if (l !== null) throw l;
    }
  }
  function Va(l, t, u, a) {
    Hc = !1;
    var e = l.updateQueue;
    Wt = !1;
    var n = e.firstBaseUpdate, c = e.lastBaseUpdate, f = e.shared.pending;
    if (f !== null) {
      e.shared.pending = null;
      var i = f, y = i.next;
      i.next = null, c === null ? n = y : c.next = y, c = i;
      var g = l.alternate;
      g !== null && (g = g.updateQueue, f = g.lastBaseUpdate, f !== c && (f === null ? g.firstBaseUpdate = y : f.next = y, g.lastBaseUpdate = i));
    }
    if (n !== null) {
      var E = e.baseState;
      c = 0, g = y = i = null, f = n;
      do {
        var r = f.lane & -536870913, m = r !== f.lane;
        if (m ? ($ & r) === r : (a & r) === r) {
          r !== 0 && r === Iu && (Hc = !0), g !== null && (g = g.next = {
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: null,
            next: null
          });
          l: {
            var C = l, x = f;
            r = t;
            var sl = u;
            switch (x.tag) {
              case 1:
                if (C = x.payload, typeof C == "function") {
                  E = C.call(sl, E, r);
                  break l;
                }
                E = C;
                break l;
              case 3:
                C.flags = C.flags & -65537 | 128;
              case 0:
                if (C = x.payload, r = typeof C == "function" ? C.call(sl, E, r) : C, r == null) break l;
                E = N({}, E, r);
                break l;
              case 2:
                Wt = !0;
            }
          }
          r = f.callback, r !== null && (l.flags |= 64, m && (l.flags |= 8192), m = e.callbacks, m === null ? e.callbacks = [r] : m.push(r));
        } else
          m = {
            lane: r,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          }, g === null ? (y = g = m, i = E) : g = g.next = m, c |= r;
        if (f = f.next, f === null) {
          if (f = e.shared.pending, f === null)
            break;
          m = f, f = m.next, m.next = null, e.lastBaseUpdate = m, e.shared.pending = null;
        }
      } while (!0);
      g === null && (i = E), e.baseState = i, e.firstBaseUpdate = y, e.lastBaseUpdate = g, n === null && (e.shared.lanes = 0), nu |= c, l.lanes = c, l.memoizedState = E;
    }
  }
  function Ts(l, t) {
    if (typeof l != "function")
      throw Error(h(191, l));
    l.call(t);
  }
  function Es(l, t) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        Ts(u[l], t);
  }
  var la = A(null), Ke = A(0);
  function As(l, t) {
    l = Zt, z(Ke, l), z(la, t), Zt = l | t.baseLanes;
  }
  function pc() {
    z(Ke, Zt), z(la, la.current);
  }
  function qc() {
    Zt = Ke.current, M(la), M(Ke);
  }
  var It = 0, L = null, fl = null, Ml = null, Je = !1, ta = !1, Uu = !1, we = 0, La = 0, ua = null, Uv = 0;
  function Ol() {
    throw Error(h(321));
  }
  function Bc(l, t) {
    if (t === null) return !1;
    for (var u = 0; u < t.length && u < l.length; u++)
      if (!at(l[u], t[u])) return !1;
    return !0;
  }
  function xc(l, t, u, a, e, n) {
    return It = n, L = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, S.H = l === null || l.memoizedState === null ? no : co, Uu = !1, n = u(a, e), Uu = !1, ta && (n = zs(
      t,
      u,
      a,
      e
    )), _s(l), n;
  }
  function _s(l) {
    S.H = Pe;
    var t = fl !== null && fl.next !== null;
    if (It = 0, Ml = fl = L = null, Je = !1, La = 0, ua = null, t) throw Error(h(300));
    l === null || Yl || (l = l.dependencies, l !== null && Xe(l) && (Yl = !0));
  }
  function zs(l, t, u, a) {
    L = l;
    var e = 0;
    do {
      if (ta && (ua = null), La = 0, ta = !1, 25 <= e) throw Error(h(301));
      if (e += 1, Ml = fl = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      S.H = Yv, n = t(u, a);
    } while (ta);
    return n;
  }
  function Nv() {
    var l = S.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? Ka(t) : t, l = l.useState()[0], (fl !== null ? fl.memoizedState : null) !== l && (L.flags |= 1024), t;
  }
  function Yc() {
    var l = we !== 0;
    return we = 0, l;
  }
  function Gc(l, t, u) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~u;
  }
  function jc(l) {
    if (Je) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      Je = !1;
    }
    It = 0, Ml = fl = L = null, ta = !1, La = we = 0, ua = null;
  }
  function Fl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ml === null ? L.memoizedState = Ml = l : Ml = Ml.next = l, Ml;
  }
  function Rl() {
    if (fl === null) {
      var l = L.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = fl.next;
    var t = Ml === null ? L.memoizedState : Ml.next;
    if (t !== null)
      Ml = t, fl = l;
    else {
      if (l === null)
        throw L.alternate === null ? Error(h(467)) : Error(h(310));
      fl = l, l = {
        memoizedState: fl.memoizedState,
        baseState: fl.baseState,
        baseQueue: fl.baseQueue,
        queue: fl.queue,
        next: null
      }, Ml === null ? L.memoizedState = Ml = l : Ml = Ml.next = l;
    }
    return Ml;
  }
  function Cc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ka(l) {
    var t = La;
    return La += 1, ua === null && (ua = []), l = gs(ua, l, t), t = L, (Ml === null ? t.memoizedState : Ml.next) === null && (t = t.alternate, S.H = t === null || t.memoizedState === null ? no : co), l;
  }
  function ke(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Ka(l);
      if (l.$$typeof === cl) return Ll(l);
    }
    throw Error(h(438, String(l)));
  }
  function Xc(l) {
    var t = null, u = L.updateQueue;
    if (u !== null && (t = u.memoCache), t == null) {
      var a = L.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), u === null && (u = Cc(), L.updateQueue = u), u.memoCache = t, u = t.data[t.index], u === void 0)
      for (u = t.data[t.index] = Array(l), a = 0; a < l; a++)
        u[a] = wl;
    return t.index++, u;
  }
  function Yt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function We(l) {
    var t = Rl();
    return Qc(t, fl, l);
  }
  function Qc(l, t, u) {
    var a = l.queue;
    if (a === null) throw Error(h(311));
    a.lastRenderedReducer = u;
    var e = l.baseQueue, n = a.pending;
    if (n !== null) {
      if (e !== null) {
        var c = e.next;
        e.next = n.next, n.next = c;
      }
      t.baseQueue = e = n, a.pending = null;
    }
    if (n = l.baseState, e === null) l.memoizedState = n;
    else {
      t = e.next;
      var f = c = null, i = null, y = t, g = !1;
      do {
        var E = y.lane & -536870913;
        if (E !== y.lane ? ($ & E) === E : (It & E) === E) {
          var r = y.revertLane;
          if (r === 0)
            i !== null && (i = i.next = {
              lane: 0,
              revertLane: 0,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }), E === Iu && (g = !0);
          else if ((It & r) === r) {
            y = y.next, r === Iu && (g = !0);
            continue;
          } else
            E = {
              lane: 0,
              revertLane: y.revertLane,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }, i === null ? (f = i = E, c = n) : i = i.next = E, L.lanes |= r, nu |= r;
          E = y.action, Uu && u(n, E), n = y.hasEagerState ? y.eagerState : u(n, E);
        } else
          r = {
            lane: E,
            revertLane: y.revertLane,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null
          }, i === null ? (f = i = r, c = n) : i = i.next = r, L.lanes |= E, nu |= E;
        y = y.next;
      } while (y !== null && y !== t);
      if (i === null ? c = n : i.next = f, !at(n, l.memoizedState) && (Yl = !0, g && (u = Pu, u !== null)))
        throw u;
      l.memoizedState = n, l.baseState = c, l.baseQueue = i, a.lastRenderedState = n;
    }
    return e === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function Zc(l) {
    var t = Rl(), u = t.queue;
    if (u === null) throw Error(h(311));
    u.lastRenderedReducer = l;
    var a = u.dispatch, e = u.pending, n = t.memoizedState;
    if (e !== null) {
      u.pending = null;
      var c = e = e.next;
      do
        n = l(n, c.action), c = c.next;
      while (c !== e);
      at(n, t.memoizedState) || (Yl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), u.lastRenderedState = n;
    }
    return [n, a];
  }
  function Os(l, t, u) {
    var a = L, e = Rl(), n = ul;
    if (n) {
      if (u === void 0) throw Error(h(407));
      u = u();
    } else u = t();
    var c = !at(
      (fl || e).memoizedState,
      u
    );
    c && (e.memoizedState = u, Yl = !0), e = e.queue;
    var f = Rs.bind(null, a, e, l);
    if (Ja(2048, 8, f, [l]), e.getSnapshot !== t || c || Ml !== null && Ml.memoizedState.tag & 1) {
      if (a.flags |= 2048, aa(
        9,
        $e(),
        Ms.bind(
          null,
          a,
          e,
          u,
          t
        ),
        null
      ), yl === null) throw Error(h(349));
      n || (It & 124) !== 0 || Ds(a, t, u);
    }
    return u;
  }
  function Ds(l, t, u) {
    l.flags |= 16384, l = { getSnapshot: t, value: u }, t = L.updateQueue, t === null ? (t = Cc(), L.updateQueue = t, t.stores = [l]) : (u = t.stores, u === null ? t.stores = [l] : u.push(l));
  }
  function Ms(l, t, u, a) {
    t.value = u, t.getSnapshot = a, Us(t) && Ns(l);
  }
  function Rs(l, t, u) {
    return u(function() {
      Us(t) && Ns(l);
    });
  }
  function Us(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var u = t();
      return !at(l, u);
    } catch {
      return !0;
    }
  }
  function Ns(l) {
    var t = ku(l, 2);
    t !== null && st(t, l, 2);
  }
  function Vc(l) {
    var t = Fl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), Uu) {
        Kt(!0);
        try {
          u();
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
  function Hs(l, t, u, a) {
    return l.baseState = u, Qc(
      l,
      fl,
      typeof a == "function" ? a : Yt
    );
  }
  function Hv(l, t, u, a, e) {
    if (Ie(l)) throw Error(h(485));
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
      S.T !== null ? u(!0) : n.isTransition = !1, a(n), u = t.pending, u === null ? (n.next = t.pending = n, ps(t, n)) : (n.next = u.next, t.pending = u.next = n);
    }
  }
  function ps(l, t) {
    var u = t.action, a = t.payload, e = l.state;
    if (t.isTransition) {
      var n = S.T, c = {};
      S.T = c;
      try {
        var f = u(e, a), i = S.S;
        i !== null && i(c, f), qs(l, t, f);
      } catch (y) {
        Lc(l, t, y);
      } finally {
        S.T = n;
      }
    } else
      try {
        n = u(e, a), qs(l, t, n);
      } catch (y) {
        Lc(l, t, y);
      }
  }
  function qs(l, t, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(a) {
        Bs(l, t, a);
      },
      function(a) {
        return Lc(l, t, a);
      }
    ) : Bs(l, t, u);
  }
  function Bs(l, t, u) {
    t.status = "fulfilled", t.value = u, xs(t), l.state = u, t = l.pending, t !== null && (u = t.next, u === t ? l.pending = null : (u = u.next, t.next = u, ps(l, u)));
  }
  function Lc(l, t, u) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = u, xs(t), t = t.next;
      while (t !== a);
    }
    l.action = null;
  }
  function xs(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Ys(l, t) {
    return t;
  }
  function Gs(l, t) {
    if (ul) {
      var u = yl.formState;
      if (u !== null) {
        l: {
          var a = L;
          if (ul) {
            if (Al) {
              t: {
                for (var e = Al, n = _t; e.nodeType !== 8; ) {
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
                Al = Et(
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
    return u = Fl(), u.memoizedState = u.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ys,
      lastRenderedState: t
    }, u.queue = a, u = uo.bind(
      null,
      L,
      a
    ), a.dispatch = u, a = Vc(!1), n = Wc.bind(
      null,
      L,
      !1,
      a.queue
    ), a = Fl(), e = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = e, u = Hv.bind(
      null,
      L,
      e,
      n,
      u
    ), e.dispatch = u, a.memoizedState = l, [t, u, !1];
  }
  function js(l) {
    var t = Rl();
    return Cs(t, fl, l);
  }
  function Cs(l, t, u) {
    if (t = Qc(
      l,
      t,
      Ys
    )[0], l = We(Yt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = Ka(t);
      } catch (c) {
        throw c === Ca ? Ve : c;
      }
    else a = t;
    t = Rl();
    var e = t.queue, n = e.dispatch;
    return u !== t.memoizedState && (L.flags |= 2048, aa(
      9,
      $e(),
      pv.bind(null, e, u),
      null
    )), [a, n, l];
  }
  function pv(l, t) {
    l.action = t;
  }
  function Xs(l) {
    var t = Rl(), u = fl;
    if (u !== null)
      return Cs(t, u, l);
    Rl(), t = t.memoizedState, u = Rl();
    var a = u.queue.dispatch;
    return u.memoizedState = l, [t, a, !1];
  }
  function aa(l, t, u, a) {
    return l = { tag: l, create: u, deps: a, inst: t, next: null }, t = L.updateQueue, t === null && (t = Cc(), L.updateQueue = t), u = t.lastEffect, u === null ? t.lastEffect = l.next = l : (a = u.next, u.next = l, l.next = a, t.lastEffect = l), l;
  }
  function $e() {
    return { destroy: void 0, resource: void 0 };
  }
  function Qs() {
    return Rl().memoizedState;
  }
  function Fe(l, t, u, a) {
    var e = Fl();
    a = a === void 0 ? null : a, L.flags |= l, e.memoizedState = aa(
      1 | t,
      $e(),
      u,
      a
    );
  }
  function Ja(l, t, u, a) {
    var e = Rl();
    a = a === void 0 ? null : a;
    var n = e.memoizedState.inst;
    fl !== null && a !== null && Bc(a, fl.memoizedState.deps) ? e.memoizedState = aa(t, n, u, a) : (L.flags |= l, e.memoizedState = aa(
      1 | t,
      n,
      u,
      a
    ));
  }
  function Zs(l, t) {
    Fe(8390656, 8, l, t);
  }
  function Vs(l, t) {
    Ja(2048, 8, l, t);
  }
  function Ls(l, t) {
    return Ja(4, 2, l, t);
  }
  function Ks(l, t) {
    return Ja(4, 4, l, t);
  }
  function Js(l, t) {
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
  function ws(l, t, u) {
    u = u != null ? u.concat([l]) : null, Ja(4, 4, Js.bind(null, t, l), u);
  }
  function Kc() {
  }
  function ks(l, t) {
    var u = Rl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    return t !== null && Bc(t, a[1]) ? a[0] : (u.memoizedState = [l, t], l);
  }
  function Ws(l, t) {
    var u = Rl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    if (t !== null && Bc(t, a[1]))
      return a[0];
    if (a = l(), Uu) {
      Kt(!0);
      try {
        l();
      } finally {
        Kt(!1);
      }
    }
    return u.memoizedState = [a, t], a;
  }
  function Jc(l, t, u) {
    return u === void 0 || (It & 1073741824) !== 0 ? l.memoizedState = t : (l.memoizedState = u, l = Po(), L.lanes |= l, nu |= l, u);
  }
  function $s(l, t, u, a) {
    return at(u, t) ? u : la.current !== null ? (l = Jc(l, u, a), at(l, t) || (Yl = !0), l) : (It & 42) === 0 ? (Yl = !0, l.memoizedState = u) : (l = Po(), L.lanes |= l, nu |= l, t);
  }
  function Fs(l, t, u, a, e) {
    var n = D.p;
    D.p = n !== 0 && 8 > n ? n : 8;
    var c = S.T, f = {};
    S.T = f, Wc(l, !1, t, u);
    try {
      var i = e(), y = S.S;
      if (y !== null && y(f, i), i !== null && typeof i == "object" && typeof i.then == "function") {
        var g = Rv(
          i,
          a
        );
        wa(
          l,
          t,
          g,
          it(l)
        );
      } else
        wa(
          l,
          t,
          a,
          it(l)
        );
    } catch (E) {
      wa(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: E },
        it()
      );
    } finally {
      D.p = n, S.T = c;
    }
  }
  function qv() {
  }
  function wc(l, t, u, a) {
    if (l.tag !== 5) throw Error(h(476));
    var e = Is(l).queue;
    Fs(
      l,
      e,
      t,
      G,
      u === null ? qv : function() {
        return Ps(l), u(a);
      }
    );
  }
  function Is(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: G,
      baseState: G,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yt,
        lastRenderedState: G
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
        lastRenderedReducer: Yt,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function Ps(l) {
    var t = Is(l).next.queue;
    wa(l, t, {}, it());
  }
  function kc() {
    return Ll(de);
  }
  function lo() {
    return Rl().memoizedState;
  }
  function to() {
    return Rl().memoizedState;
  }
  function Bv(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var u = it();
          l = $t(u);
          var a = Ft(t, l, u);
          a !== null && (st(a, t, u), Qa(a, t, u)), t = { cache: zc() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function xv(l, t, u) {
    var a = it();
    u = {
      lane: a,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ie(l) ? ao(t, u) : (u = yc(l, t, u, a), u !== null && (st(u, l, a), eo(u, t, a)));
  }
  function uo(l, t, u) {
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
    if (Ie(l)) ao(t, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var c = t.lastRenderedState, f = n(c, u);
          if (e.hasEagerState = !0, e.eagerState = f, at(f, c))
            return xe(l, t, e, 0), yl === null && Be(), !1;
        } catch {
        } finally {
        }
      if (u = yc(l, t, e, a), u !== null)
        return st(u, l, a), eo(u, t, a), !0;
    }
    return !1;
  }
  function Wc(l, t, u, a) {
    if (a = {
      lane: 2,
      revertLane: Rf(),
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ie(l)) {
      if (t) throw Error(h(479));
    } else
      t = yc(
        l,
        u,
        a,
        2
      ), t !== null && st(t, l, 2);
  }
  function Ie(l) {
    var t = l.alternate;
    return l === L || t !== null && t === L;
  }
  function ao(l, t) {
    ta = Je = !0;
    var u = l.pending;
    u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t;
  }
  function eo(l, t, u) {
    if ((u & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, vi(l, u);
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
  }, no = {
    readContext: Ll,
    use: ke,
    useCallback: function(l, t) {
      return Fl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Ll,
    useEffect: Zs,
    useImperativeHandle: function(l, t, u) {
      u = u != null ? u.concat([l]) : null, Fe(
        4194308,
        4,
        Js.bind(null, t, l),
        u
      );
    },
    useLayoutEffect: function(l, t) {
      return Fe(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      Fe(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var u = Fl();
      t = t === void 0 ? null : t;
      var a = l();
      if (Uu) {
        Kt(!0);
        try {
          l();
        } finally {
          Kt(!1);
        }
      }
      return u.memoizedState = [a, t], a;
    },
    useReducer: function(l, t, u) {
      var a = Fl();
      if (u !== void 0) {
        var e = u(t);
        if (Uu) {
          Kt(!0);
          try {
            u(t);
          } finally {
            Kt(!1);
          }
        }
      } else e = t;
      return a.memoizedState = a.baseState = e, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: e
      }, a.queue = l, l = l.dispatch = xv.bind(
        null,
        L,
        l
      ), [a.memoizedState, l];
    },
    useRef: function(l) {
      var t = Fl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = Vc(l);
      var t = l.queue, u = uo.bind(null, L, t);
      return t.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: Kc,
    useDeferredValue: function(l, t) {
      var u = Fl();
      return Jc(u, l, t);
    },
    useTransition: function() {
      var l = Vc(!1);
      return l = Fs.bind(
        null,
        L,
        l.queue,
        !0,
        !1
      ), Fl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, u) {
      var a = L, e = Fl();
      if (ul) {
        if (u === void 0)
          throw Error(h(407));
        u = u();
      } else {
        if (u = t(), yl === null)
          throw Error(h(349));
        ($ & 124) !== 0 || Ds(a, t, u);
      }
      e.memoizedState = u;
      var n = { value: u, getSnapshot: t };
      return e.queue = n, Zs(Rs.bind(null, a, n, l), [
        l
      ]), a.flags |= 2048, aa(
        9,
        $e(),
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
      var l = Fl(), t = yl.identifierPrefix;
      if (ul) {
        var u = qt, a = pt;
        u = (a & ~(1 << 32 - ut(a) - 1)).toString(32) + u, t = "«" + t + "R" + u, u = we++, 0 < u && (t += "H" + u.toString(32)), t += "»";
      } else
        u = Uv++, t = "«" + t + "r" + u.toString(32) + "»";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: kc,
    useFormState: Gs,
    useActionState: Gs,
    useOptimistic: function(l) {
      var t = Fl();
      t.memoizedState = t.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = u, t = Wc.bind(
        null,
        L,
        !0,
        u
      ), u.dispatch = t, [l, t];
    },
    useMemoCache: Xc,
    useCacheRefresh: function() {
      return Fl().memoizedState = Bv.bind(
        null,
        L
      );
    }
  }, co = {
    readContext: Ll,
    use: ke,
    useCallback: ks,
    useContext: Ll,
    useEffect: Vs,
    useImperativeHandle: ws,
    useInsertionEffect: Ls,
    useLayoutEffect: Ks,
    useMemo: Ws,
    useReducer: We,
    useRef: Qs,
    useState: function() {
      return We(Yt);
    },
    useDebugValue: Kc,
    useDeferredValue: function(l, t) {
      var u = Rl();
      return $s(
        u,
        fl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = We(Yt)[0], t = Rl().memoizedState;
      return [
        typeof l == "boolean" ? l : Ka(l),
        t
      ];
    },
    useSyncExternalStore: Os,
    useId: lo,
    useHostTransitionStatus: kc,
    useFormState: js,
    useActionState: js,
    useOptimistic: function(l, t) {
      var u = Rl();
      return Hs(u, fl, l, t);
    },
    useMemoCache: Xc,
    useCacheRefresh: to
  }, Yv = {
    readContext: Ll,
    use: ke,
    useCallback: ks,
    useContext: Ll,
    useEffect: Vs,
    useImperativeHandle: ws,
    useInsertionEffect: Ls,
    useLayoutEffect: Ks,
    useMemo: Ws,
    useReducer: Zc,
    useRef: Qs,
    useState: function() {
      return Zc(Yt);
    },
    useDebugValue: Kc,
    useDeferredValue: function(l, t) {
      var u = Rl();
      return fl === null ? Jc(u, l, t) : $s(
        u,
        fl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = Zc(Yt)[0], t = Rl().memoizedState;
      return [
        typeof l == "boolean" ? l : Ka(l),
        t
      ];
    },
    useSyncExternalStore: Os,
    useId: lo,
    useHostTransitionStatus: kc,
    useFormState: Xs,
    useActionState: Xs,
    useOptimistic: function(l, t) {
      var u = Rl();
      return fl !== null ? Hs(u, fl, l, t) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Xc,
    useCacheRefresh: to
  }, ea = null, ka = 0;
  function ln(l) {
    var t = ka;
    return ka += 1, ea === null && (ea = []), gs(ea, l, t);
  }
  function Wa(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function tn(l, t) {
    throw t.$$typeof === W ? Error(h(525)) : (l = Object.prototype.toString.call(t), Error(
      h(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function fo(l) {
    var t = l._init;
    return t(l._payload);
  }
  function io(l) {
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
      return d = Ht(d, o), d.index = 0, d.sibling = null, d;
    }
    function n(d, o, v) {
      return d.index = v, l ? (v = d.alternate, v !== null ? (v = v.index, v < o ? (d.flags |= 67108866, o) : v) : (d.flags |= 67108866, o)) : (d.flags |= 1048576, o);
    }
    function c(d) {
      return l && d.alternate === null && (d.flags |= 67108866), d;
    }
    function f(d, o, v, b) {
      return o === null || o.tag !== 6 ? (o = mc(v, d.mode, b), o.return = d, o) : (o = e(o, v), o.return = d, o);
    }
    function i(d, o, v, b) {
      var R = v.type;
      return R === Nl ? g(
        d,
        o,
        v.props.children,
        b,
        v.key
      ) : o !== null && (o.elementType === R || typeof R == "object" && R !== null && R.$$typeof === ml && fo(R) === o.type) ? (o = e(o, v.props), Wa(o, v), o.return = d, o) : (o = Ge(
        v.type,
        v.key,
        v.props,
        null,
        d.mode,
        b
      ), Wa(o, v), o.return = d, o);
    }
    function y(d, o, v, b) {
      return o === null || o.tag !== 4 || o.stateNode.containerInfo !== v.containerInfo || o.stateNode.implementation !== v.implementation ? (o = gc(v, d.mode, b), o.return = d, o) : (o = e(o, v.children || []), o.return = d, o);
    }
    function g(d, o, v, b, R) {
      return o === null || o.tag !== 7 ? (o = Eu(
        v,
        d.mode,
        b,
        R
      ), o.return = d, o) : (o = e(o, v), o.return = d, o);
    }
    function E(d, o, v) {
      if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint")
        return o = mc(
          "" + o,
          d.mode,
          v
        ), o.return = d, o;
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case P:
            return v = Ge(
              o.type,
              o.key,
              o.props,
              null,
              d.mode,
              v
            ), Wa(v, o), v.return = d, v;
          case Ul:
            return o = gc(
              o,
              d.mode,
              v
            ), o.return = d, o;
          case ml:
            var b = o._init;
            return o = b(o._payload), E(d, o, v);
        }
        if (Zl(o) || zl(o))
          return o = Eu(
            o,
            d.mode,
            v,
            null
          ), o.return = d, o;
        if (typeof o.then == "function")
          return E(d, ln(o), v);
        if (o.$$typeof === cl)
          return E(
            d,
            Qe(d, o),
            v
          );
        tn(d, o);
      }
      return null;
    }
    function r(d, o, v, b) {
      var R = o !== null ? o.key : null;
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint")
        return R !== null ? null : f(d, o, "" + v, b);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case P:
            return v.key === R ? i(d, o, v, b) : null;
          case Ul:
            return v.key === R ? y(d, o, v, b) : null;
          case ml:
            return R = v._init, v = R(v._payload), r(d, o, v, b);
        }
        if (Zl(v) || zl(v))
          return R !== null ? null : g(d, o, v, b, null);
        if (typeof v.then == "function")
          return r(
            d,
            o,
            ln(v),
            b
          );
        if (v.$$typeof === cl)
          return r(
            d,
            o,
            Qe(d, v),
            b
          );
        tn(d, v);
      }
      return null;
    }
    function m(d, o, v, b, R) {
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
        return d = d.get(v) || null, f(o, d, "" + b, R);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case P:
            return d = d.get(
              b.key === null ? v : b.key
            ) || null, i(o, d, b, R);
          case Ul:
            return d = d.get(
              b.key === null ? v : b.key
            ) || null, y(o, d, b, R);
          case ml:
            var K = b._init;
            return b = K(b._payload), m(
              d,
              o,
              v,
              b,
              R
            );
        }
        if (Zl(b) || zl(b))
          return d = d.get(v) || null, g(o, d, b, R, null);
        if (typeof b.then == "function")
          return m(
            d,
            o,
            v,
            ln(b),
            R
          );
        if (b.$$typeof === cl)
          return m(
            d,
            o,
            v,
            Qe(o, b),
            R
          );
        tn(o, b);
      }
      return null;
    }
    function C(d, o, v, b) {
      for (var R = null, K = null, H = o, Y = o = 0, jl = null; H !== null && Y < v.length; Y++) {
        H.index > Y ? (jl = H, H = null) : jl = H.sibling;
        var tl = r(
          d,
          H,
          v[Y],
          b
        );
        if (tl === null) {
          H === null && (H = jl);
          break;
        }
        l && H && tl.alternate === null && t(d, H), o = n(tl, o, Y), K === null ? R = tl : K.sibling = tl, K = tl, H = jl;
      }
      if (Y === v.length)
        return u(d, H), ul && _u(d, Y), R;
      if (H === null) {
        for (; Y < v.length; Y++)
          H = E(d, v[Y], b), H !== null && (o = n(
            H,
            o,
            Y
          ), K === null ? R = H : K.sibling = H, K = H);
        return ul && _u(d, Y), R;
      }
      for (H = a(H); Y < v.length; Y++)
        jl = m(
          H,
          d,
          Y,
          v[Y],
          b
        ), jl !== null && (l && jl.alternate !== null && H.delete(
          jl.key === null ? Y : jl.key
        ), o = n(
          jl,
          o,
          Y
        ), K === null ? R = jl : K.sibling = jl, K = jl);
      return l && H.forEach(function(yu) {
        return t(d, yu);
      }), ul && _u(d, Y), R;
    }
    function x(d, o, v, b) {
      if (v == null) throw Error(h(151));
      for (var R = null, K = null, H = o, Y = o = 0, jl = null, tl = v.next(); H !== null && !tl.done; Y++, tl = v.next()) {
        H.index > Y ? (jl = H, H = null) : jl = H.sibling;
        var yu = r(d, H, tl.value, b);
        if (yu === null) {
          H === null && (H = jl);
          break;
        }
        l && H && yu.alternate === null && t(d, H), o = n(yu, o, Y), K === null ? R = yu : K.sibling = yu, K = yu, H = jl;
      }
      if (tl.done)
        return u(d, H), ul && _u(d, Y), R;
      if (H === null) {
        for (; !tl.done; Y++, tl = v.next())
          tl = E(d, tl.value, b), tl !== null && (o = n(tl, o, Y), K === null ? R = tl : K.sibling = tl, K = tl);
        return ul && _u(d, Y), R;
      }
      for (H = a(H); !tl.done; Y++, tl = v.next())
        tl = m(H, d, Y, tl.value, b), tl !== null && (l && tl.alternate !== null && H.delete(tl.key === null ? Y : tl.key), o = n(tl, o, Y), K === null ? R = tl : K.sibling = tl, K = tl);
      return l && H.forEach(function(Gh) {
        return t(d, Gh);
      }), ul && _u(d, Y), R;
    }
    function sl(d, o, v, b) {
      if (typeof v == "object" && v !== null && v.type === Nl && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case P:
            l: {
              for (var R = v.key; o !== null; ) {
                if (o.key === R) {
                  if (R = v.type, R === Nl) {
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
                  } else if (o.elementType === R || typeof R == "object" && R !== null && R.$$typeof === ml && fo(R) === o.type) {
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
              v.type === Nl ? (b = Eu(
                v.props.children,
                d.mode,
                b,
                v.key
              ), b.return = d, d = b) : (b = Ge(
                v.type,
                v.key,
                v.props,
                null,
                d.mode,
                b
              ), Wa(b, v), b.return = d, d = b);
            }
            return c(d);
          case Ul:
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
              b = gc(v, d.mode, b), b.return = d, d = b;
            }
            return c(d);
          case ml:
            return R = v._init, v = R(v._payload), sl(
              d,
              o,
              v,
              b
            );
        }
        if (Zl(v))
          return C(
            d,
            o,
            v,
            b
          );
        if (zl(v)) {
          if (R = zl(v), typeof R != "function") throw Error(h(150));
          return v = R.call(v), x(
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
      return typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint" ? (v = "" + v, o !== null && o.tag === 6 ? (u(d, o.sibling), b = e(o, v), b.return = d, d = b) : (u(d, o), b = mc(v, d.mode, b), b.return = d, d = b), c(d)) : u(d, o);
    }
    return function(d, o, v, b) {
      try {
        ka = 0;
        var R = sl(
          d,
          o,
          v,
          b
        );
        return ea = null, R;
      } catch (H) {
        if (H === Ca || H === Ve) throw H;
        var K = et(29, H, null, d.mode);
        return K.lanes = b, K.return = d, K;
      } finally {
      }
    };
  }
  var na = io(!0), so = io(!1), mt = A(null), zt = null;
  function Pt(l) {
    var t = l.alternate;
    z(ql, ql.current & 1), z(mt, l), zt === null && (t === null || la.current !== null || t.memoizedState !== null) && (zt = l);
  }
  function oo(l) {
    if (l.tag === 22) {
      if (z(ql, ql.current), z(mt, l), zt === null) {
        var t = l.alternate;
        t !== null && t.memoizedState !== null && (zt = l);
      }
    } else lu();
  }
  function lu() {
    z(ql, ql.current), z(mt, mt.current);
  }
  function Gt(l) {
    M(mt), zt === l && (zt = null), M(ql);
  }
  var ql = A(0);
  function un(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var u = t.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || Xf(u)))
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
  function $c(l, t, u, a) {
    t = l.memoizedState, u = u(a, t), u = u == null ? t : N({}, t, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var Fc = {
    enqueueSetState: function(l, t, u) {
      l = l._reactInternals;
      var a = it(), e = $t(a);
      e.payload = t, u != null && (e.callback = u), t = Ft(l, e, a), t !== null && (st(t, l, a), Qa(t, l, a));
    },
    enqueueReplaceState: function(l, t, u) {
      l = l._reactInternals;
      var a = it(), e = $t(a);
      e.tag = 1, e.payload = t, u != null && (e.callback = u), t = Ft(l, e, a), t !== null && (st(t, l, a), Qa(t, l, a));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var u = it(), a = $t(u);
      a.tag = 2, t != null && (a.callback = t), t = Ft(l, a, u), t !== null && (st(t, l, u), Qa(t, l, u));
    }
  };
  function vo(l, t, u, a, e, n, c) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, c) : t.prototype && t.prototype.isPureReactComponent ? !Ha(u, a) || !Ha(e, n) : !0;
  }
  function ho(l, t, u, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(u, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(u, a), t.state !== l && Fc.enqueueReplaceState(t, t.state, null);
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
  var an = typeof reportError == "function" ? reportError : function(l) {
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
  function yo(l) {
    an(l);
  }
  function ro(l) {
    console.error(l);
  }
  function mo(l) {
    an(l);
  }
  function en(l, t) {
    try {
      var u = l.onUncaughtError;
      u(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function go(l, t, u) {
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
  function Ic(l, t, u) {
    return u = $t(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      en(l, t);
    }, u;
  }
  function So(l) {
    return l = $t(l), l.tag = 3, l;
  }
  function bo(l, t, u, a) {
    var e = u.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = a.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        go(t, u, a);
      };
    }
    var c = u.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (l.callback = function() {
      go(t, u, a), typeof e != "function" && (cu === null ? cu = /* @__PURE__ */ new Set([this]) : cu.add(this));
      var f = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: f !== null ? f : ""
      });
    });
  }
  function Gv(l, t, u, a, e) {
    if (u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = u.alternate, t !== null && Ya(
        t,
        u,
        e,
        !0
      ), u = mt.current, u !== null) {
        switch (u.tag) {
          case 13:
            return zt === null ? _f() : u.alternate === null && _l === 0 && (_l = 3), u.flags &= -257, u.flags |= 65536, u.lanes = e, a === Mc ? u.flags |= 16384 : (t = u.updateQueue, t === null ? u.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Of(l, a, e)), !1;
          case 22:
            return u.flags |= 65536, a === Mc ? u.flags |= 16384 : (t = u.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, u.updateQueue = t) : (u = t.retryQueue, u === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : u.add(a)), Of(l, a, e)), !1;
        }
        throw Error(h(435, u.tag));
      }
      return Of(l, a, e), _f(), !1;
    }
    if (ul)
      return t = mt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, a !== Tc && (l = Error(h(422), { cause: a }), xa(vt(l, u)))) : (a !== Tc && (t = Error(h(423), {
        cause: a
      }), xa(
        vt(t, u)
      )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, a = vt(a, u), e = Ic(
        l.stateNode,
        a,
        e
      ), Nc(l, e), _l !== 4 && (_l = 2)), !1;
    var n = Error(h(520), { cause: a });
    if (n = vt(n, u), ue === null ? ue = [n] : ue.push(n), _l !== 4 && (_l = 2), t === null) return !0;
    a = vt(a, u), u = t;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = e & -e, u.lanes |= l, l = Ic(u.stateNode, a, l), Nc(u, l), !1;
        case 1:
          if (t = u.type, n = u.stateNode, (u.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (cu === null || !cu.has(n))))
            return u.flags |= 65536, e &= -e, u.lanes |= e, e = So(e), bo(
              e,
              l,
              u,
              a
            ), Nc(u, e), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var To = Error(h(461)), Yl = !1;
  function Cl(l, t, u, a) {
    t.child = l === null ? so(t, null, u, a) : na(
      t,
      l.child,
      u,
      a
    );
  }
  function Eo(l, t, u, a, e) {
    u = u.render;
    var n = t.ref;
    if ("ref" in a) {
      var c = {};
      for (var f in a)
        f !== "ref" && (c[f] = a[f]);
    } else c = a;
    return Mu(t), a = xc(
      l,
      t,
      u,
      c,
      n,
      e
    ), f = Yc(), l !== null && !Yl ? (Gc(l, t, e), jt(l, t, e)) : (ul && f && Sc(t), t.flags |= 1, Cl(l, t, a, e), t.child);
  }
  function Ao(l, t, u, a, e) {
    if (l === null) {
      var n = u.type;
      return typeof n == "function" && !rc(n) && n.defaultProps === void 0 && u.compare === null ? (t.tag = 15, t.type = n, _o(
        l,
        t,
        n,
        a,
        e
      )) : (l = Ge(
        u.type,
        null,
        a,
        t,
        t.mode,
        e
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !cf(l, e)) {
      var c = n.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Ha, u(c, a) && l.ref === t.ref)
        return jt(l, t, e);
    }
    return t.flags |= 1, l = Ht(n, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function _o(l, t, u, a, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Ha(n, a) && l.ref === t.ref)
        if (Yl = !1, t.pendingProps = a = n, cf(l, e))
          (l.flags & 131072) !== 0 && (Yl = !0);
        else
          return t.lanes = l.lanes, jt(l, t, e);
    }
    return Pc(
      l,
      t,
      u,
      a,
      e
    );
  }
  function zo(l, t, u) {
    var a = t.pendingProps, e = a.children, n = l !== null ? l.memoizedState : null;
    if (a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (a = n !== null ? n.baseLanes | u : u, l !== null) {
          for (e = t.child = l.child, n = 0; e !== null; )
            n = n | e.lanes | e.childLanes, e = e.sibling;
          t.childLanes = n & ~a;
        } else t.childLanes = 0, t.child = null;
        return Oo(
          l,
          t,
          a,
          u
        );
      }
      if ((u & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Ze(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? As(t, n) : pc(), oo(t);
      else
        return t.lanes = t.childLanes = 536870912, Oo(
          l,
          t,
          n !== null ? n.baseLanes | u : u,
          u
        );
    } else
      n !== null ? (Ze(t, n.cachePool), As(t, n), lu(), t.memoizedState = null) : (l !== null && Ze(t, null), pc(), lu());
    return Cl(l, t, e, u), t.child;
  }
  function Oo(l, t, u, a) {
    var e = Dc();
    return e = e === null ? null : { parent: pl._currentValue, pool: e }, t.memoizedState = {
      baseLanes: u,
      cachePool: e
    }, l !== null && Ze(t, null), pc(), oo(t), l !== null && Ya(l, t, a, !0), null;
  }
  function nn(l, t) {
    var u = t.ref;
    if (u === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(h(284));
      (l === null || l.ref !== u) && (t.flags |= 4194816);
    }
  }
  function Pc(l, t, u, a, e) {
    return Mu(t), u = xc(
      l,
      t,
      u,
      a,
      void 0,
      e
    ), a = Yc(), l !== null && !Yl ? (Gc(l, t, e), jt(l, t, e)) : (ul && a && Sc(t), t.flags |= 1, Cl(l, t, u, e), t.child);
  }
  function Do(l, t, u, a, e, n) {
    return Mu(t), t.updateQueue = null, u = zs(
      t,
      a,
      u,
      e
    ), _s(l), a = Yc(), l !== null && !Yl ? (Gc(l, t, n), jt(l, t, n)) : (ul && a && Sc(t), t.flags |= 1, Cl(l, t, u, n), t.child);
  }
  function Mo(l, t, u, a, e) {
    if (Mu(t), t.stateNode === null) {
      var n = Wu, c = u.contextType;
      typeof c == "object" && c !== null && (n = Ll(c)), n = new u(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Fc, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, Rc(t), c = u.contextType, n.context = typeof c == "object" && c !== null ? Ll(c) : Wu, n.state = t.memoizedState, c = u.getDerivedStateFromProps, typeof c == "function" && ($c(
        t,
        u,
        c,
        a
      ), n.state = t.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (c = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), c !== n.state && Fc.enqueueReplaceState(n, n.state, null), Va(t, a, n, e), Za(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (l === null) {
      n = t.stateNode;
      var f = t.memoizedProps, i = Nu(u, f);
      n.props = i;
      var y = n.context, g = u.contextType;
      c = Wu, typeof g == "object" && g !== null && (c = Ll(g));
      var E = u.getDerivedStateFromProps;
      g = typeof E == "function" || typeof n.getSnapshotBeforeUpdate == "function", f = t.pendingProps !== f, g || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f || y !== c) && ho(
        t,
        n,
        a,
        c
      ), Wt = !1;
      var r = t.memoizedState;
      n.state = r, Va(t, a, n, e), Za(), y = t.memoizedState, f || r !== y || Wt ? (typeof E == "function" && ($c(
        t,
        u,
        E,
        a
      ), y = t.memoizedState), (i = Wt || vo(
        t,
        u,
        i,
        a,
        r,
        y,
        c
      )) ? (g || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = y), n.props = a, n.state = y, n.context = c, a = i) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      n = t.stateNode, Uc(l, t), c = t.memoizedProps, g = Nu(u, c), n.props = g, E = t.pendingProps, r = n.context, y = u.contextType, i = Wu, typeof y == "object" && y !== null && (i = Ll(y)), f = u.getDerivedStateFromProps, (y = typeof f == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c !== E || r !== i) && ho(
        t,
        n,
        a,
        i
      ), Wt = !1, r = t.memoizedState, n.state = r, Va(t, a, n, e), Za();
      var m = t.memoizedState;
      c !== E || r !== m || Wt || l !== null && l.dependencies !== null && Xe(l.dependencies) ? (typeof f == "function" && ($c(
        t,
        u,
        f,
        a
      ), m = t.memoizedState), (g = Wt || vo(
        t,
        u,
        g,
        a,
        r,
        m,
        i
      ) || l !== null && l.dependencies !== null && Xe(l.dependencies)) ? (y || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, m, i), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        a,
        m,
        i
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || c === l.memoizedProps && r === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && r === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = m), n.props = a, n.state = m, n.context = i, a = g) : (typeof n.componentDidUpdate != "function" || c === l.memoizedProps && r === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && r === l.memoizedState || (t.flags |= 1024), a = !1);
    }
    return n = a, nn(l, t), a = (t.flags & 128) !== 0, n || a ? (n = t.stateNode, u = a && typeof u.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && a ? (t.child = na(
      t,
      l.child,
      null,
      e
    ), t.child = na(
      t,
      null,
      u,
      e
    )) : Cl(l, t, u, e), t.memoizedState = n.state, l = t.child) : l = jt(
      l,
      t,
      e
    ), l;
  }
  function Ro(l, t, u, a) {
    return Ba(), t.flags |= 256, Cl(l, t, u, a), t.child;
  }
  var lf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function tf(l) {
    return { baseLanes: l, cachePool: ys() };
  }
  function uf(l, t, u) {
    return l = l !== null ? l.childLanes & ~u : 0, t && (l |= gt), l;
  }
  function Uo(l, t, u) {
    var a = t.pendingProps, e = !1, n = (t.flags & 128) !== 0, c;
    if ((c = n) || (c = l !== null && l.memoizedState === null ? !1 : (ql.current & 2) !== 0), c && (e = !0, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (ul) {
        if (e ? Pt(t) : lu(), ul) {
          var f = Al, i;
          if (i = f) {
            l: {
              for (i = f, f = _t; i.nodeType !== 8; ) {
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
              treeContext: Au !== null ? { id: pt, overflow: qt } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, i = et(
              18,
              null,
              null,
              0
            ), i.stateNode = f, i.return = t, t.child = i, kl = t, Al = null, i = !0) : i = !1;
          }
          i || Ou(t);
        }
        if (f = t.memoizedState, f !== null && (f = f.dehydrated, f !== null))
          return Xf(f) ? t.lanes = 32 : t.lanes = 536870912, null;
        Gt(t);
      }
      return f = a.children, a = a.fallback, e ? (lu(), e = t.mode, f = cn(
        { mode: "hidden", children: f },
        e
      ), a = Eu(
        a,
        e,
        u,
        null
      ), f.return = t, a.return = t, f.sibling = a, t.child = f, e = t.child, e.memoizedState = tf(u), e.childLanes = uf(
        l,
        c,
        u
      ), t.memoizedState = lf, a) : (Pt(t), af(t, f));
    }
    if (i = l.memoizedState, i !== null && (f = i.dehydrated, f !== null)) {
      if (n)
        t.flags & 256 ? (Pt(t), t.flags &= -257, t = ef(
          l,
          t,
          u
        )) : t.memoizedState !== null ? (lu(), t.child = l.child, t.flags |= 128, t = null) : (lu(), e = a.fallback, f = t.mode, a = cn(
          { mode: "visible", children: a.children },
          f
        ), e = Eu(
          e,
          f,
          u,
          null
        ), e.flags |= 2, a.return = t, e.return = t, a.sibling = e, t.child = a, na(
          t,
          l.child,
          null,
          u
        ), a = t.child, a.memoizedState = tf(u), a.childLanes = uf(
          l,
          c,
          u
        ), t.memoizedState = lf, t = e);
      else if (Pt(t), Xf(f)) {
        if (c = f.nextSibling && f.nextSibling.dataset, c) var y = c.dgst;
        c = y, a = Error(h(419)), a.stack = "", a.digest = c, xa({ value: a, source: null, stack: null }), t = ef(
          l,
          t,
          u
        );
      } else if (Yl || Ya(l, t, u, !1), c = (u & l.childLanes) !== 0, Yl || c) {
        if (c = yl, c !== null && (a = u & -u, a = (a & 42) !== 0 ? 1 : Xn(a), a = (a & (c.suspendedLanes | u)) !== 0 ? 0 : a, a !== 0 && a !== i.retryLane))
          throw i.retryLane = a, ku(l, a), st(c, l, a), To;
        f.data === "$?" || _f(), t = ef(
          l,
          t,
          u
        );
      } else
        f.data === "$?" ? (t.flags |= 192, t.child = l.child, t = null) : (l = i.treeContext, Al = Et(
          f.nextSibling
        ), kl = t, ul = !0, zu = null, _t = !1, l !== null && (yt[rt++] = pt, yt[rt++] = qt, yt[rt++] = Au, pt = l.id, qt = l.overflow, Au = t), t = af(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return e ? (lu(), e = a.fallback, f = t.mode, i = l.child, y = i.sibling, a = Ht(i, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = i.subtreeFlags & 65011712, y !== null ? e = Ht(y, e) : (e = Eu(
      e,
      f,
      u,
      null
    ), e.flags |= 2), e.return = t, a.return = t, a.sibling = e, t.child = a, a = e, e = t.child, f = l.child.memoizedState, f === null ? f = tf(u) : (i = f.cachePool, i !== null ? (y = pl._currentValue, i = i.parent !== y ? { parent: y, pool: y } : i) : i = ys(), f = {
      baseLanes: f.baseLanes | u,
      cachePool: i
    }), e.memoizedState = f, e.childLanes = uf(
      l,
      c,
      u
    ), t.memoizedState = lf, a) : (Pt(t), u = l.child, l = u.sibling, u = Ht(u, {
      mode: "visible",
      children: a.children
    }), u.return = t, u.sibling = null, l !== null && (c = t.deletions, c === null ? (t.deletions = [l], t.flags |= 16) : c.push(l)), t.child = u, t.memoizedState = null, u);
  }
  function af(l, t) {
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
  function ef(l, t, u) {
    return na(t, l.child, null, u), l = af(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function No(l, t, u) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), Ac(l.return, t, u);
  }
  function nf(l, t, u, a, e) {
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
  function Ho(l, t, u) {
    var a = t.pendingProps, e = a.revealOrder, n = a.tail;
    if (Cl(l, t, a.children, u), a = ql.current, (a & 2) !== 0)
      a = a & 1 | 2, t.flags |= 128;
    else {
      if (l !== null && (l.flags & 128) !== 0)
        l: for (l = t.child; l !== null; ) {
          if (l.tag === 13)
            l.memoizedState !== null && No(l, u, t);
          else if (l.tag === 19)
            No(l, u, t);
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
    switch (z(ql, a), e) {
      case "forwards":
        for (u = t.child, e = null; u !== null; )
          l = u.alternate, l !== null && un(l) === null && (e = u), u = u.sibling;
        u = e, u === null ? (e = t.child, t.child = null) : (e = u.sibling, u.sibling = null), nf(
          t,
          !1,
          e,
          u,
          n
        );
        break;
      case "backwards":
        for (u = null, e = t.child, t.child = null; e !== null; ) {
          if (l = e.alternate, l !== null && un(l) === null) {
            t.child = e;
            break;
          }
          l = e.sibling, e.sibling = u, u = e, e = l;
        }
        nf(
          t,
          !0,
          u,
          null,
          n
        );
        break;
      case "together":
        nf(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function jt(l, t, u) {
    if (l !== null && (t.dependencies = l.dependencies), nu |= t.lanes, (u & t.childLanes) === 0)
      if (l !== null) {
        if (Ya(
          l,
          t,
          u,
          !1
        ), (u & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(h(153));
    if (t.child !== null) {
      for (l = t.child, u = Ht(l, l.pendingProps), t.child = u, u.return = t; l.sibling !== null; )
        l = l.sibling, u = u.sibling = Ht(l, l.pendingProps), u.return = t;
      u.sibling = null;
    }
    return t.child;
  }
  function cf(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Xe(l)));
  }
  function jv(l, t, u) {
    switch (t.tag) {
      case 3:
        Sl(t, t.stateNode.containerInfo), kt(t, pl, l.memoizedState.cache), Ba();
        break;
      case 27:
      case 5:
        xn(t);
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
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (Pt(t), t.flags |= 128, null) : (u & t.child.childLanes) !== 0 ? Uo(l, t, u) : (Pt(t), l = jt(
            l,
            t,
            u
          ), l !== null ? l.sibling : null);
        Pt(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (a = (u & t.childLanes) !== 0, a || (Ya(
          l,
          t,
          u,
          !1
        ), a = (u & t.childLanes) !== 0), e) {
          if (a)
            return Ho(
              l,
              t,
              u
            );
          t.flags |= 128;
        }
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), z(ql, ql.current), a) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, zo(l, t, u);
      case 24:
        kt(t, pl, l.memoizedState.cache);
    }
    return jt(l, t, u);
  }
  function po(l, t, u) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Yl = !0;
      else {
        if (!cf(l, u) && (t.flags & 128) === 0)
          return Yl = !1, jv(
            l,
            t,
            u
          );
        Yl = (l.flags & 131072) !== 0;
      }
    else
      Yl = !1, ul && (t.flags & 1048576) !== 0 && fs(t, Ce, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          l = t.pendingProps;
          var a = t.elementType, e = a._init;
          if (a = e(a._payload), t.type = a, typeof a == "function")
            rc(a) ? (l = Nu(a, l), t.tag = 1, t = Mo(
              null,
              t,
              a,
              l,
              u
            )) : (t.tag = 0, t = Pc(
              null,
              t,
              a,
              l,
              u
            ));
          else {
            if (a != null) {
              if (e = a.$$typeof, e === gl) {
                t.tag = 11, t = Eo(
                  null,
                  t,
                  a,
                  l,
                  u
                );
                break l;
              } else if (e === hl) {
                t.tag = 14, t = Ao(
                  null,
                  t,
                  a,
                  l,
                  u
                );
                break l;
              }
            }
            throw t = ru(a) || a, Error(h(306, t, ""));
          }
        }
        return t;
      case 0:
        return Pc(
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
        ), Mo(
          l,
          t,
          a,
          e,
          u
        );
      case 3:
        l: {
          if (Sl(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(h(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          e = n.element, Uc(l, t), Va(t, a, null, u);
          var c = t.memoizedState;
          if (a = c.cache, kt(t, pl, a), a !== n.cache && _c(
            t,
            [pl],
            u,
            !0
          ), Za(), a = c.element, n.isDehydrated)
            if (n = {
              element: a,
              isDehydrated: !1,
              cache: c.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = Ro(
                l,
                t,
                a,
                u
              );
              break l;
            } else if (a !== e) {
              e = vt(
                Error(h(424)),
                t
              ), xa(e), t = Ro(
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
              for (Al = Et(l.firstChild), kl = t, ul = !0, zu = null, _t = !0, u = so(
                t,
                null,
                a,
                u
              ), t.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (Ba(), a === e) {
              t = jt(
                l,
                t,
                u
              );
              break l;
            }
            Cl(
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
        return nn(l, t), l === null ? (u = Y0(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = u : ul || (u = t.type, l = t.pendingProps, a = En(
          Q.current
        ).createElement(u), a[Vl] = t, a[Wl] = l, Ql(a, u, l), xl(a), t.stateNode = a) : t.memoizedState = Y0(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return xn(t), l === null && ul && (a = t.stateNode = q0(
          t.type,
          t.pendingProps,
          Q.current
        ), kl = t, _t = !0, e = Al, su(t.type) ? (Qf = e, Al = Et(
          a.firstChild
        )) : Al = e), Cl(
          l,
          t,
          t.pendingProps.children,
          u
        ), nn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && ul && ((e = a = Al) && (a = vh(
          a,
          t.type,
          t.pendingProps,
          _t
        ), a !== null ? (t.stateNode = a, kl = t, Al = Et(
          a.firstChild
        ), _t = !1, e = !0) : e = !1), e || Ou(t)), xn(t), e = t.type, n = t.pendingProps, c = l !== null ? l.memoizedProps : null, a = n.children, Gf(e, n) ? a = null : c !== null && Gf(e, c) && (t.flags |= 32), t.memoizedState !== null && (e = xc(
          l,
          t,
          Nv,
          null,
          null,
          u
        ), de._currentValue = e), nn(l, t), Cl(l, t, a, u), t.child;
      case 6:
        return l === null && ul && ((l = u = Al) && (u = hh(
          u,
          t.pendingProps,
          _t
        ), u !== null ? (t.stateNode = u, kl = t, Al = null, l = !0) : l = !1), l || Ou(t)), null;
      case 13:
        return Uo(l, t, u);
      case 4:
        return Sl(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, l === null ? t.child = na(
          t,
          null,
          a,
          u
        ) : Cl(
          l,
          t,
          a,
          u
        ), t.child;
      case 11:
        return Eo(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 7:
        return Cl(
          l,
          t,
          t.pendingProps,
          u
        ), t.child;
      case 8:
        return Cl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 12:
        return Cl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 10:
        return a = t.pendingProps, kt(t, t.type, a.value), Cl(
          l,
          t,
          a.children,
          u
        ), t.child;
      case 9:
        return e = t.type._context, a = t.pendingProps.children, Mu(t), e = Ll(e), a = a(e), t.flags |= 1, Cl(l, t, a, u), t.child;
      case 14:
        return Ao(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 15:
        return _o(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 19:
        return Ho(l, t, u);
      case 31:
        return a = t.pendingProps, u = t.mode, a = {
          mode: a.mode,
          children: a.children
        }, l === null ? (u = cn(
          a,
          u
        ), u.ref = t.ref, t.child = u, u.return = t, t = u) : (u = Ht(l.child, a), u.ref = t.ref, t.child = u, u.return = t, t = u), t;
      case 22:
        return zo(l, t, u);
      case 24:
        return Mu(t), a = Ll(pl), l === null ? (e = Dc(), e === null && (e = yl, n = zc(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= u), e = n), t.memoizedState = {
          parent: a,
          cache: e
        }, Rc(t), kt(t, pl, e)) : ((l.lanes & u) !== 0 && (Uc(l, t), Va(t, null, null, u), Za()), e = l.memoizedState, n = t.memoizedState, e.parent !== a ? (e = { parent: a, cache: a }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), kt(t, pl, a)) : (a = n.cache, kt(t, pl, a), a !== e.cache && _c(
          t,
          [pl],
          u,
          !0
        ))), Cl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(h(156, t.tag));
  }
  function Ct(l) {
    l.flags |= 4;
  }
  function qo(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Q0(t)) {
      if (t = mt.current, t !== null && (($ & 4194048) === $ ? zt !== null : ($ & 62914560) !== $ && ($ & 536870912) === 0 || t !== zt))
        throw Xa = Mc, rs;
      l.flags |= 8192;
    }
  }
  function fn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? oi() : 536870912, l.lanes |= t, sa |= t);
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
  function Tl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, u = 0, a = 0;
    if (t)
      for (var e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags & 65011712, a |= e.flags & 65011712, e.return = l, e = e.sibling;
    else
      for (e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags, a |= e.flags, e.return = l, e = e.sibling;
    return l.subtreeFlags |= a, l.childLanes = u, t;
  }
  function Cv(l, t, u) {
    var a = t.pendingProps;
    switch (bc(t), t.tag) {
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
        return u = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), xt(pl), Lt(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (qa(t) ? Ct(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, os())), Tl(t), null;
      case 26:
        return u = t.memoizedState, l === null ? (Ct(t), u !== null ? (Tl(t), qo(t, u)) : (Tl(t), t.flags &= -16777217)) : u ? u !== l.memoizedState ? (Ct(t), Tl(t), qo(t, u)) : (Tl(t), t.flags &= -16777217) : (l.memoizedProps !== a && Ct(t), Tl(t), t.flags &= -16777217), null;
      case 27:
        Se(t), u = Q.current;
        var e = t.type;
        if (l !== null && t.stateNode != null)
          l.memoizedProps !== a && Ct(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(h(166));
            return Tl(t), null;
          }
          l = B.current, qa(t) ? is(t) : (l = q0(e, a, u), t.stateNode = l, Ct(t));
        }
        return Tl(t), null;
      case 5:
        if (Se(t), u = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && Ct(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(h(166));
            return Tl(t), null;
          }
          if (l = B.current, qa(t))
            is(t);
          else {
            switch (e = En(
              Q.current
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
            l[Vl] = t, l[Wl] = a;
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
            l: switch (Ql(l, u, a), u) {
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
        return Tl(t), t.flags &= -16777217, null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== a && Ct(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(h(166));
          if (l = Q.current, qa(t)) {
            if (l = t.stateNode, u = t.memoizedProps, a = null, e = kl, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  a = e.memoizedProps;
              }
            l[Vl] = t, l = !!(l.nodeValue === u || a !== null && a.suppressHydrationWarning === !0 || D0(l.nodeValue, u)), l || Ou(t);
          } else
            l = En(l).createTextNode(
              a
            ), l[Vl] = t, t.stateNode = l;
        }
        return Tl(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = qa(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(h(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(h(317));
              e[Vl] = t;
            } else
              Ba(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Tl(t), e = !1;
          } else
            e = os(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = !0;
          if (!e)
            return t.flags & 256 ? (Gt(t), t) : (Gt(t), null);
        }
        if (Gt(t), (t.flags & 128) !== 0)
          return t.lanes = u, t;
        if (u = a !== null, l = l !== null && l.memoizedState !== null, u) {
          a = t.child, e = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (e = a.alternate.memoizedState.cachePool.pool);
          var n = null;
          a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== e && (a.flags |= 2048);
        }
        return u !== l && u && (t.child.flags |= 8192), fn(t, t.updateQueue), Tl(t), null;
      case 4:
        return Lt(), l === null && pf(t.stateNode.containerInfo), Tl(t), null;
      case 10:
        return xt(t.type), Tl(t), null;
      case 19:
        if (M(ql), e = t.memoizedState, e === null) return Tl(t), null;
        if (a = (t.flags & 128) !== 0, n = e.rendering, n === null)
          if (a) $a(e, !1);
          else {
            if (_l !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = un(l), n !== null) {
                  for (t.flags |= 128, $a(e, !1), l = n.updateQueue, t.updateQueue = l, fn(t, l), t.subtreeFlags = 0, l = u, u = t.child; u !== null; )
                    cs(u, l), u = u.sibling;
                  return z(
                    ql,
                    ql.current & 1 | 2
                  ), t.child;
                }
                l = l.sibling;
              }
            e.tail !== null && At() > dn && (t.flags |= 128, a = !0, $a(e, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (l = un(n), l !== null) {
              if (t.flags |= 128, a = !0, l = l.updateQueue, t.updateQueue = l, fn(t, l), $a(e, !0), e.tail === null && e.tailMode === "hidden" && !n.alternate && !ul)
                return Tl(t), null;
            } else
              2 * At() - e.renderingStartTime > dn && u !== 536870912 && (t.flags |= 128, a = !0, $a(e, !1), t.lanes = 4194304);
          e.isBackwards ? (n.sibling = t.child, t.child = n) : (l = e.last, l !== null ? l.sibling = n : t.child = n, e.last = n);
        }
        return e.tail !== null ? (t = e.tail, e.rendering = t, e.tail = t.sibling, e.renderingStartTime = At(), t.sibling = null, l = ql.current, z(ql, a ? l & 1 | 2 : l & 1), t) : (Tl(t), null);
      case 22:
      case 23:
        return Gt(t), qc(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (u & 536870912) !== 0 && (t.flags & 128) === 0 && (Tl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Tl(t), u = t.updateQueue, u !== null && fn(t, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== u && (t.flags |= 2048), l !== null && M(Ru), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), xt(pl), Tl(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(h(156, t.tag));
  }
  function Xv(l, t) {
    switch (bc(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return xt(pl), Lt(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Se(t), null;
      case 13:
        if (Gt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(h(340));
          Ba();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return M(ql), null;
      case 4:
        return Lt(), null;
      case 10:
        return xt(t.type), null;
      case 22:
      case 23:
        return Gt(t), qc(), l !== null && M(Ru), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return xt(pl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Bo(l, t) {
    switch (bc(t), t.tag) {
      case 3:
        xt(pl), Lt();
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
        Gt(t);
        break;
      case 19:
        M(ql);
        break;
      case 10:
        xt(t.type);
        break;
      case 22:
      case 23:
        Gt(t), qc(), l !== null && M(Ru);
        break;
      case 24:
        xt(pl);
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
            var n = u.create, c = u.inst;
            a = n(), c.destroy = a;
          }
          u = u.next;
        } while (u !== e);
      }
    } catch (f) {
      dl(t, t.return, f);
    }
  }
  function tu(l, t, u) {
    try {
      var a = t.updateQueue, e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var c = a.inst, f = c.destroy;
            if (f !== void 0) {
              c.destroy = void 0, e = t;
              var i = u, y = f;
              try {
                y();
              } catch (g) {
                dl(
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
      dl(t, t.return, g);
    }
  }
  function xo(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var u = l.stateNode;
      try {
        Es(t, u);
      } catch (a) {
        dl(l, l.return, a);
      }
    }
  }
  function Yo(l, t, u) {
    u.props = Nu(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (a) {
      dl(l, t, a);
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
      dl(l, t, e);
    }
  }
  function Ot(l, t) {
    var u = l.ref, a = l.refCleanup;
    if (u !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (e) {
          dl(l, t, e);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (e) {
          dl(l, t, e);
        }
      else u.current = null;
  }
  function Go(l) {
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
      dl(l, l.return, e);
    }
  }
  function ff(l, t, u) {
    try {
      var a = l.stateNode;
      fh(a, l.type, u, t), a[Wl] = t;
    } catch (e) {
      dl(l, l.return, e);
    }
  }
  function jo(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && su(l.type) || l.tag === 4;
  }
  function sf(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || jo(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && su(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function of(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, t) : (t = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, t.appendChild(l), u = u._reactRootContainer, u != null || t.onclick !== null || (t.onclick = Tn));
    else if (a !== 4 && (a === 27 && su(l.type) && (u = l.stateNode, t = null), l = l.child, l !== null))
      for (of(l, t, u), l = l.sibling; l !== null; )
        of(l, t, u), l = l.sibling;
  }
  function sn(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? u.insertBefore(l, t) : u.appendChild(l);
    else if (a !== 4 && (a === 27 && su(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (sn(l, t, u), l = l.sibling; l !== null; )
        sn(l, t, u), l = l.sibling;
  }
  function Co(l) {
    var t = l.stateNode, u = l.memoizedProps;
    try {
      for (var a = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      Ql(t, a, u), t[Vl] = l, t[Wl] = u;
    } catch (n) {
      dl(l, l.return, n);
    }
  }
  var Xt = !1, Dl = !1, df = !1, Xo = typeof WeakSet == "function" ? WeakSet : Set, Gl = null;
  function Qv(l, t) {
    if (l = l.containerInfo, xf = Mn, l = $i(l), ic(l)) {
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
            var c = 0, f = -1, i = -1, y = 0, g = 0, E = l, r = null;
            t: for (; ; ) {
              for (var m; E !== u || e !== 0 && E.nodeType !== 3 || (f = c + e), E !== n || a !== 0 && E.nodeType !== 3 || (i = c + a), E.nodeType === 3 && (c += E.nodeValue.length), (m = E.firstChild) !== null; )
                r = E, E = m;
              for (; ; ) {
                if (E === l) break t;
                if (r === u && ++y === e && (f = c), r === n && ++g === a && (i = c), (m = E.nextSibling) !== null) break;
                E = r, r = E.parentNode;
              }
              E = m;
            }
            u = f === -1 || i === -1 ? null : { start: f, end: i };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Yf = { focusedElem: l, selectionRange: u }, Mn = !1, Gl = t; Gl !== null; )
      if (t = Gl, l = t.child, (t.subtreeFlags & 1024) !== 0 && l !== null)
        l.return = t, Gl = l;
      else
        for (; Gl !== null; ) {
          switch (t = Gl, n = t.alternate, l = t.flags, t.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                l = void 0, u = t, e = n.memoizedProps, n = n.memoizedState, a = u.stateNode;
                try {
                  var C = Nu(
                    u.type,
                    e,
                    u.elementType === u.type
                  );
                  l = a.getSnapshotBeforeUpdate(
                    C,
                    n
                  ), a.__reactInternalSnapshotBeforeUpdate = l;
                } catch (x) {
                  dl(
                    u,
                    u.return,
                    x
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = t.stateNode.containerInfo, u = l.nodeType, u === 9)
                  Cf(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Cf(l);
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
              if ((l & 1024) !== 0) throw Error(h(163));
          }
          if (l = t.sibling, l !== null) {
            l.return = t.return, Gl = l;
            break;
          }
          Gl = t.return;
        }
  }
  function Qo(l, t, u) {
    var a = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        uu(l, u), a & 4 && Fa(5, u);
        break;
      case 1:
        if (uu(l, u), a & 4)
          if (l = u.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (c) {
              dl(u, u.return, c);
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
            } catch (c) {
              dl(
                u,
                u.return,
                c
              );
            }
          }
        a & 64 && xo(u), a & 512 && Ia(u, u.return);
        break;
      case 3:
        if (uu(l, u), a & 64 && (l = u.updateQueue, l !== null)) {
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
            Es(l, t);
          } catch (c) {
            dl(u, u.return, c);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Co(u);
      case 26:
      case 5:
        uu(l, u), t === null && a & 4 && Go(u), a & 512 && Ia(u, u.return);
        break;
      case 12:
        uu(l, u);
        break;
      case 13:
        uu(l, u), a & 4 && Lo(l, u), a & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = $v.bind(
          null,
          u
        ), yh(l, u))));
        break;
      case 22:
        if (a = u.memoizedState !== null || Xt, !a) {
          t = t !== null && t.memoizedState !== null || Dl, e = Xt;
          var n = Dl;
          Xt = a, (Dl = t) && !n ? au(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : uu(l, u), Xt = e, Dl = n;
        }
        break;
      case 30:
        break;
      default:
        uu(l, u);
    }
  }
  function Zo(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, Zo(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && Vn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var bl = null, Il = !1;
  function Qt(l, t, u) {
    for (u = u.child; u !== null; )
      Vo(l, t, u), u = u.sibling;
  }
  function Vo(l, t, u) {
    if (tt && typeof tt.onCommitFiberUnmount == "function")
      try {
        tt.onCommitFiberUnmount(ba, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        Dl || Ot(u, t), Qt(
          l,
          t,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Dl || Ot(u, t);
        var a = bl, e = Il;
        su(u.type) && (bl = u.stateNode, Il = !1), Qt(
          l,
          t,
          u
        ), fe(u.stateNode), bl = a, Il = e;
        break;
      case 5:
        Dl || Ot(u, t);
      case 6:
        if (a = bl, e = Il, bl = null, Qt(
          l,
          t,
          u
        ), bl = a, Il = e, bl !== null)
          if (Il)
            try {
              (bl.nodeType === 9 ? bl.body : bl.nodeName === "HTML" ? bl.ownerDocument.body : bl).removeChild(u.stateNode);
            } catch (n) {
              dl(
                u,
                t,
                n
              );
            }
          else
            try {
              bl.removeChild(u.stateNode);
            } catch (n) {
              dl(
                u,
                t,
                n
              );
            }
        break;
      case 18:
        bl !== null && (Il ? (l = bl, H0(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), re(l)) : H0(bl, u.stateNode));
        break;
      case 4:
        a = bl, e = Il, bl = u.stateNode.containerInfo, Il = !0, Qt(
          l,
          t,
          u
        ), bl = a, Il = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Dl || tu(2, u, t), Dl || tu(4, u, t), Qt(
          l,
          t,
          u
        );
        break;
      case 1:
        Dl || (Ot(u, t), a = u.stateNode, typeof a.componentWillUnmount == "function" && Yo(
          u,
          t,
          a
        )), Qt(
          l,
          t,
          u
        );
        break;
      case 21:
        Qt(
          l,
          t,
          u
        );
        break;
      case 22:
        Dl = (a = Dl) || u.memoizedState !== null, Qt(
          l,
          t,
          u
        ), Dl = a;
        break;
      default:
        Qt(
          l,
          t,
          u
        );
    }
  }
  function Lo(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        re(l);
      } catch (u) {
        dl(t, t.return, u);
      }
  }
  function Zv(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Xo()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new Xo()), t;
      default:
        throw Error(h(435, l.tag));
    }
  }
  function vf(l, t) {
    var u = Zv(l);
    t.forEach(function(a) {
      var e = Fv.bind(null, l, a);
      u.has(a) || (u.add(a), a.then(e, e));
    });
  }
  function nt(l, t) {
    var u = t.deletions;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var e = u[a], n = l, c = t, f = c;
        l: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (su(f.type)) {
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
        if (bl === null) throw Error(h(160));
        Vo(n, c, e), bl = null, Il = !1, n = e.alternate, n !== null && (n.return = null), e.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        Ko(t, l), t = t.sibling;
  }
  var Tt = null;
  function Ko(l, t) {
    var u = l.alternate, a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        nt(t, l), ct(l), a & 4 && (tu(3, l, l.return), Fa(3, l), tu(5, l, l.return));
        break;
      case 1:
        nt(t, l), ct(l), a & 512 && (Dl || u === null || Ot(u, u.return)), a & 64 && Xt && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? a : u.concat(a))));
        break;
      case 26:
        var e = Tt;
        if (nt(t, l), ct(l), a & 512 && (Dl || u === null || Ot(u, u.return)), a & 4) {
          var n = u !== null ? u.memoizedState : null;
          if (a = l.memoizedState, u === null)
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  a = l.type, u = l.memoizedProps, e = e.ownerDocument || e;
                  t: switch (a) {
                    case "title":
                      n = e.getElementsByTagName("title")[0], (!n || n[Aa] || n[Vl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(a), e.head.insertBefore(
                        n,
                        e.querySelector("head > title")
                      )), Ql(n, a, u), n[Vl] = l, xl(n), a = n;
                      break l;
                    case "link":
                      var c = C0(
                        "link",
                        "href",
                        e
                      ).get(a + (u.href || ""));
                      if (c) {
                        for (var f = 0; f < c.length; f++)
                          if (n = c[f], n.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && n.getAttribute("rel") === (u.rel == null ? null : u.rel) && n.getAttribute("title") === (u.title == null ? null : u.title) && n.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            c.splice(f, 1);
                            break t;
                          }
                      }
                      n = e.createElement(a), Ql(n, a, u), e.head.appendChild(n);
                      break;
                    case "meta":
                      if (c = C0(
                        "meta",
                        "content",
                        e
                      ).get(a + (u.content || ""))) {
                        for (f = 0; f < c.length; f++)
                          if (n = c[f], n.getAttribute("content") === (u.content == null ? null : "" + u.content) && n.getAttribute("name") === (u.name == null ? null : u.name) && n.getAttribute("property") === (u.property == null ? null : u.property) && n.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && n.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            c.splice(f, 1);
                            break t;
                          }
                      }
                      n = e.createElement(a), Ql(n, a, u), e.head.appendChild(n);
                      break;
                    default:
                      throw Error(h(468, a));
                  }
                  n[Vl] = l, xl(n), a = n;
                }
                l.stateNode = a;
              } else
                X0(
                  e,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = j0(
                e,
                a,
                l.memoizedProps
              );
          else
            n !== a ? (n === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : n.count--, a === null ? X0(
              e,
              l.type,
              l.stateNode
            ) : j0(
              e,
              a,
              l.memoizedProps
            )) : a === null && l.stateNode !== null && ff(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        nt(t, l), ct(l), a & 512 && (Dl || u === null || Ot(u, u.return)), u !== null && a & 4 && ff(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (nt(t, l), ct(l), a & 512 && (Dl || u === null || Ot(u, u.return)), l.flags & 32) {
          e = l.stateNode;
          try {
            Qu(e, "");
          } catch (m) {
            dl(l, l.return, m);
          }
        }
        a & 4 && l.stateNode != null && (e = l.memoizedProps, ff(
          l,
          e,
          u !== null ? u.memoizedProps : e
        )), a & 1024 && (df = !0);
        break;
      case 6:
        if (nt(t, l), ct(l), a & 4) {
          if (l.stateNode === null)
            throw Error(h(162));
          a = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = a;
          } catch (m) {
            dl(l, l.return, m);
          }
        }
        break;
      case 3:
        if (zn = null, e = Tt, Tt = An(t.containerInfo), nt(t, l), Tt = e, ct(l), a & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            re(t.containerInfo);
          } catch (m) {
            dl(l, l.return, m);
          }
        df && (df = !1, Jo(l));
        break;
      case 4:
        a = Tt, Tt = An(
          l.stateNode.containerInfo
        ), nt(t, l), ct(l), Tt = a;
        break;
      case 12:
        nt(t, l), ct(l);
        break;
      case 13:
        nt(t, l), ct(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Sf = At()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, vf(l, a)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var i = u !== null && u.memoizedState !== null, y = Xt, g = Dl;
        if (Xt = y || e, Dl = g || i, nt(t, l), Dl = g, Xt = y, ct(l), a & 8192)
          l: for (t = l.stateNode, t._visibility = e ? t._visibility & -2 : t._visibility | 1, e && (u === null || i || Xt || Dl || Hu(l)), u = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (u === null) {
                i = u = t;
                try {
                  if (n = i.stateNode, e)
                    c = n.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                  else {
                    f = i.stateNode;
                    var E = i.memoizedProps.style, r = E != null && E.hasOwnProperty("display") ? E.display : null;
                    f.style.display = r == null || typeof r == "boolean" ? "" : ("" + r).trim();
                  }
                } catch (m) {
                  dl(i, i.return, m);
                }
              }
            } else if (t.tag === 6) {
              if (u === null) {
                i = t;
                try {
                  i.stateNode.nodeValue = e ? "" : i.memoizedProps;
                } catch (m) {
                  dl(i, i.return, m);
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
        a & 4 && (a = l.updateQueue, a !== null && (u = a.retryQueue, u !== null && (a.retryQueue = null, vf(l, u))));
        break;
      case 19:
        nt(t, l), ct(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, vf(l, a)));
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
        for (var u, a = l.return; a !== null; ) {
          if (jo(a)) {
            u = a;
            break;
          }
          a = a.return;
        }
        if (u == null) throw Error(h(160));
        switch (u.tag) {
          case 27:
            var e = u.stateNode, n = sf(l);
            sn(l, n, e);
            break;
          case 5:
            var c = u.stateNode;
            u.flags & 32 && (Qu(c, ""), u.flags &= -33);
            var f = sf(l);
            sn(l, f, c);
            break;
          case 3:
          case 4:
            var i = u.stateNode.containerInfo, y = sf(l);
            of(
              l,
              y,
              i
            );
            break;
          default:
            throw Error(h(161));
        }
      } catch (g) {
        dl(l, l.return, g);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function Jo(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        Jo(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function uu(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Qo(l, t.alternate, t), t = t.sibling;
  }
  function Hu(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          tu(4, t, t.return), Hu(t);
          break;
        case 1:
          Ot(t, t.return);
          var u = t.stateNode;
          typeof u.componentWillUnmount == "function" && Yo(
            t,
            t.return,
            u
          ), Hu(t);
          break;
        case 27:
          fe(t.stateNode);
        case 26:
        case 5:
          Ot(t, t.return), Hu(t);
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
  function au(l, t, u) {
    for (u = u && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, e = l, n = t, c = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          au(
            e,
            n,
            u
          ), Fa(4, n);
          break;
        case 1:
          if (au(
            e,
            n,
            u
          ), a = n, e = a.stateNode, typeof e.componentDidMount == "function")
            try {
              e.componentDidMount();
            } catch (y) {
              dl(a, a.return, y);
            }
          if (a = n, e = a.updateQueue, e !== null) {
            var f = a.stateNode;
            try {
              var i = e.shared.hiddenCallbacks;
              if (i !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++)
                  Ts(i[e], f);
            } catch (y) {
              dl(a, a.return, y);
            }
          }
          u && c & 64 && xo(n), Ia(n, n.return);
          break;
        case 27:
          Co(n);
        case 26:
        case 5:
          au(
            e,
            n,
            u
          ), u && a === null && c & 4 && Go(n), Ia(n, n.return);
          break;
        case 12:
          au(
            e,
            n,
            u
          );
          break;
        case 13:
          au(
            e,
            n,
            u
          ), u && c & 4 && Lo(e, n);
          break;
        case 22:
          n.memoizedState === null && au(
            e,
            n,
            u
          ), Ia(n, n.return);
          break;
        case 30:
          break;
        default:
          au(
            e,
            n,
            u
          );
      }
      t = t.sibling;
    }
  }
  function hf(l, t) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Ga(u));
  }
  function yf(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Ga(l));
  }
  function Dt(l, t, u, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        wo(
          l,
          t,
          u,
          a
        ), t = t.sibling;
  }
  function wo(l, t, u, a) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Dt(
          l,
          t,
          u,
          a
        ), e & 2048 && Fa(9, t);
        break;
      case 1:
        Dt(
          l,
          t,
          u,
          a
        );
        break;
      case 3:
        Dt(
          l,
          t,
          u,
          a
        ), e & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Ga(l)));
        break;
      case 12:
        if (e & 2048) {
          Dt(
            l,
            t,
            u,
            a
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
            dl(t, t.return, i);
          }
        } else
          Dt(
            l,
            t,
            u,
            a
          );
        break;
      case 13:
        Dt(
          l,
          t,
          u,
          a
        );
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, c = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? Dt(
          l,
          t,
          u,
          a
        ) : Pa(l, t) : n._visibility & 2 ? Dt(
          l,
          t,
          u,
          a
        ) : (n._visibility |= 2, ca(
          l,
          t,
          u,
          a,
          (t.subtreeFlags & 10256) !== 0
        )), e & 2048 && hf(c, t);
        break;
      case 24:
        Dt(
          l,
          t,
          u,
          a
        ), e & 2048 && yf(t.alternate, t);
        break;
      default:
        Dt(
          l,
          t,
          u,
          a
        );
    }
  }
  function ca(l, t, u, a, e) {
    for (e = e && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var n = l, c = t, f = u, i = a, y = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          ca(
            n,
            c,
            f,
            i,
            e
          ), Fa(8, c);
          break;
        case 23:
          break;
        case 22:
          var g = c.stateNode;
          c.memoizedState !== null ? g._visibility & 2 ? ca(
            n,
            c,
            f,
            i,
            e
          ) : Pa(
            n,
            c
          ) : (g._visibility |= 2, ca(
            n,
            c,
            f,
            i,
            e
          )), e && y & 2048 && hf(
            c.alternate,
            c
          );
          break;
        case 24:
          ca(
            n,
            c,
            f,
            i,
            e
          ), e && y & 2048 && yf(c.alternate, c);
          break;
        default:
          ca(
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
  function Pa(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var u = l, a = t, e = a.flags;
        switch (a.tag) {
          case 22:
            Pa(u, a), e & 2048 && hf(
              a.alternate,
              a
            );
            break;
          case 24:
            Pa(u, a), e & 2048 && yf(a.alternate, a);
            break;
          default:
            Pa(u, a);
        }
        t = t.sibling;
      }
  }
  var le = 8192;
  function fa(l) {
    if (l.subtreeFlags & le)
      for (l = l.child; l !== null; )
        ko(l), l = l.sibling;
  }
  function ko(l) {
    switch (l.tag) {
      case 26:
        fa(l), l.flags & le && l.memoizedState !== null && Mh(
          Tt,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        fa(l);
        break;
      case 3:
      case 4:
        var t = Tt;
        Tt = An(l.stateNode.containerInfo), fa(l), Tt = t;
        break;
      case 22:
        l.memoizedState === null && (t = l.alternate, t !== null && t.memoizedState !== null ? (t = le, le = 16777216, fa(l), le = t) : fa(l));
        break;
      default:
        fa(l);
    }
  }
  function Wo(l) {
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
          Gl = a, Fo(
            a,
            l
          );
        }
      Wo(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        $o(l), l = l.sibling;
  }
  function $o(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        te(l), l.flags & 2048 && tu(9, l, l.return);
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
          Gl = a, Fo(
            a,
            l
          );
        }
      Wo(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          tu(8, t, t.return), on(t);
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
  function Fo(l, t) {
    for (; Gl !== null; ) {
      var u = Gl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          tu(8, u, t);
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
      if (a = u.child, a !== null) a.return = u, Gl = a;
      else
        l: for (u = l; Gl !== null; ) {
          a = Gl;
          var e = a.sibling, n = a.return;
          if (Zo(a), a === u) {
            Gl = null;
            break l;
          }
          if (e !== null) {
            e.return = n, Gl = e;
            break l;
          }
          Gl = n;
        }
    }
  }
  var Vv = {
    getCacheForType: function(l) {
      var t = Ll(pl), u = t.data.get(l);
      return u === void 0 && (u = l(), t.data.set(l, u)), u;
    }
  }, Lv = typeof WeakMap == "function" ? WeakMap : Map, el = 0, yl = null, J = null, $ = 0, nl = 0, ft = null, eu = !1, ia = !1, rf = !1, Zt = 0, _l = 0, nu = 0, pu = 0, mf = 0, gt = 0, sa = 0, ue = null, Pl = null, gf = !1, Sf = 0, dn = 1 / 0, vn = null, cu = null, Xl = 0, fu = null, oa = null, da = 0, bf = 0, Tf = null, Io = null, ae = 0, Ef = null;
  function it() {
    if ((el & 2) !== 0 && $ !== 0)
      return $ & -$;
    if (S.T !== null) {
      var l = Iu;
      return l !== 0 ? l : Rf();
    }
    return hi();
  }
  function Po() {
    gt === 0 && (gt = ($ & 536870912) === 0 || ul ? si() : 536870912);
    var l = mt.current;
    return l !== null && (l.flags |= 32), gt;
  }
  function st(l, t, u) {
    (l === yl && (nl === 2 || nl === 9) || l.cancelPendingCommit !== null) && (va(l, 0), iu(
      l,
      $,
      gt,
      !1
    )), Ea(l, u), ((el & 2) === 0 || l !== yl) && (l === yl && ((el & 2) === 0 && (pu |= u), _l === 4 && iu(
      l,
      $,
      gt,
      !1
    )), Mt(l));
  }
  function l0(l, t, u) {
    if ((el & 6) !== 0) throw Error(h(327));
    var a = !u && (t & 124) === 0 && (t & l.expiredLanes) === 0 || Ta(l, t), e = a ? wv(l, t) : zf(l, t, !0), n = a;
    do {
      if (e === 0) {
        ia && !a && iu(l, t, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, n && !Kv(u)) {
          e = zf(l, t, !1), n = !1;
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
              e = ue;
              var i = f.current.memoizedState.isDehydrated;
              if (i && (va(f, c).flags |= 256), c = zf(
                f,
                c,
                !1
              ), c !== 2) {
                if (rf && !i) {
                  f.errorRecoveryDisabledLanes |= n, pu |= n, e = 4;
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
          va(l, 0), iu(l, t, 0, !0);
          break;
        }
        l: {
          switch (a = l, n = e, n) {
            case 0:
            case 1:
              throw Error(h(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              iu(
                a,
                t,
                gt,
                !eu
              );
              break l;
            case 2:
              Pl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(h(329));
          }
          if ((t & 62914560) === t && (e = Sf + 300 - At(), 10 < e)) {
            if (iu(
              a,
              t,
              gt,
              !eu
            ), Ae(a, 0, !0) !== 0) break l;
            a.timeoutHandle = U0(
              t0.bind(
                null,
                a,
                u,
                Pl,
                vn,
                gf,
                t,
                gt,
                pu,
                sa,
                eu,
                n,
                2,
                -0,
                0
              ),
              e
            );
            break l;
          }
          t0(
            a,
            u,
            Pl,
            vn,
            gf,
            t,
            gt,
            pu,
            sa,
            eu,
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
  function t0(l, t, u, a, e, n, c, f, i, y, g, E, r, m) {
    if (l.timeoutHandle = -1, E = t.subtreeFlags, (E & 8192 || (E & 16785408) === 16785408) && (oe = { stylesheets: null, count: 0, unsuspend: Dh }, ko(t), E = Rh(), E !== null)) {
      l.cancelPendingCommit = E(
        i0.bind(
          null,
          l,
          t,
          n,
          u,
          a,
          e,
          c,
          f,
          i,
          g,
          1,
          r,
          m
        )
      ), iu(l, n, c, !y);
      return;
    }
    i0(
      l,
      t,
      n,
      u,
      a,
      e,
      c,
      f,
      i
    );
  }
  function Kv(l) {
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
  function iu(l, t, u, a) {
    t &= ~mf, t &= ~pu, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - ut(e), c = 1 << n;
      a[n] = -1, e &= ~c;
    }
    u !== 0 && di(l, u, t);
  }
  function hn() {
    return (el & 6) === 0 ? (ee(0), !1) : !0;
  }
  function Af() {
    if (J !== null) {
      if (nl === 0)
        var l = J.return;
      else
        l = J, Bt = Du = null, jc(l), ea = null, ka = 0, l = J;
      for (; l !== null; )
        Bo(l.alternate, l), l = l.return;
      J = null;
    }
  }
  function va(l, t) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, sh(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), Af(), yl = l, J = u = Ht(l.current, null), $ = t, nl = 0, ft = null, eu = !1, ia = Ta(l, t), rf = !1, sa = gt = mf = pu = nu = _l = 0, Pl = ue = null, gf = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var e = 31 - ut(a), n = 1 << e;
        t |= l[e], a &= ~n;
      }
    return Zt = t, Be(), u;
  }
  function u0(l, t) {
    L = null, S.H = Pe, t === Ca || t === Ve ? (t = Ss(), nl = 3) : t === rs ? (t = Ss(), nl = 4) : nl = t === To ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ft = t, J === null && (_l = 1, en(
      l,
      vt(t, l.current)
    ));
  }
  function a0() {
    var l = S.H;
    return S.H = Pe, l === null ? Pe : l;
  }
  function e0() {
    var l = S.A;
    return S.A = Vv, l;
  }
  function _f() {
    _l = 4, eu || ($ & 4194048) !== $ && mt.current !== null || (ia = !0), (nu & 134217727) === 0 && (pu & 134217727) === 0 || yl === null || iu(
      yl,
      $,
      gt,
      !1
    );
  }
  function zf(l, t, u) {
    var a = el;
    el |= 2;
    var e = a0(), n = e0();
    (yl !== l || $ !== t) && (vn = null, va(l, t)), t = !1;
    var c = _l;
    l: do
      try {
        if (nl !== 0 && J !== null) {
          var f = J, i = ft;
          switch (nl) {
            case 8:
              Af(), c = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              mt.current === null && (t = !0);
              var y = nl;
              if (nl = 0, ft = null, ha(l, f, i, y), u && ia) {
                c = 0;
                break l;
              }
              break;
            default:
              y = nl, nl = 0, ft = null, ha(l, f, i, y);
          }
        }
        Jv(), c = _l;
        break;
      } catch (g) {
        u0(l, g);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Bt = Du = null, el = a, S.H = e, S.A = n, J === null && (yl = null, $ = 0, Be()), c;
  }
  function Jv() {
    for (; J !== null; ) n0(J);
  }
  function wv(l, t) {
    var u = el;
    el |= 2;
    var a = a0(), e = e0();
    yl !== l || $ !== t ? (vn = null, dn = At() + 500, va(l, t)) : ia = Ta(
      l,
      t
    );
    l: do
      try {
        if (nl !== 0 && J !== null) {
          t = J;
          var n = ft;
          t: switch (nl) {
            case 1:
              nl = 0, ft = null, ha(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (ms(n)) {
                nl = 0, ft = null, c0(t);
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
              ms(n) ? (nl = 0, ft = null, c0(t)) : (nl = 0, ft = null, ha(l, t, n, 7));
              break;
            case 5:
              var c = null;
              switch (J.tag) {
                case 26:
                  c = J.memoizedState;
                case 5:
                case 27:
                  var f = J;
                  if (!c || Q0(c)) {
                    nl = 0, ft = null;
                    var i = f.sibling;
                    if (i !== null) J = i;
                    else {
                      var y = f.return;
                      y !== null ? (J = y, yn(y)) : J = null;
                    }
                    break t;
                  }
              }
              nl = 0, ft = null, ha(l, t, n, 5);
              break;
            case 6:
              nl = 0, ft = null, ha(l, t, n, 6);
              break;
            case 8:
              Af(), _l = 6;
              break l;
            default:
              throw Error(h(462));
          }
        }
        kv();
        break;
      } catch (g) {
        u0(l, g);
      }
    while (!0);
    return Bt = Du = null, S.H = a, S.A = e, el = u, J !== null ? 0 : (yl = null, $ = 0, Be(), _l);
  }
  function kv() {
    for (; J !== null && !md(); )
      n0(J);
  }
  function n0(l) {
    var t = po(l.alternate, l, Zt);
    l.memoizedProps = l.pendingProps, t === null ? yn(l) : J = t;
  }
  function c0(l) {
    var t = l, u = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Do(
          u,
          t,
          t.pendingProps,
          t.type,
          void 0,
          $
        );
        break;
      case 11:
        t = Do(
          u,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          $
        );
        break;
      case 5:
        jc(t);
      default:
        Bo(u, t), t = J = cs(t, Zt), t = po(u, t, Zt);
    }
    l.memoizedProps = l.pendingProps, t === null ? yn(l) : J = t;
  }
  function ha(l, t, u, a) {
    Bt = Du = null, jc(t), ea = null, ka = 0;
    var e = t.return;
    try {
      if (Gv(
        l,
        e,
        t,
        u,
        $
      )) {
        _l = 1, en(
          l,
          vt(u, l.current)
        ), J = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw J = e, n;
      _l = 1, en(
        l,
        vt(u, l.current)
      ), J = null;
      return;
    }
    t.flags & 32768 ? (ul || a === 1 ? l = !0 : ia || ($ & 536870912) !== 0 ? l = !1 : (eu = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = mt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), f0(t, l)) : yn(t);
  }
  function yn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        f0(
          t,
          eu
        );
        return;
      }
      l = t.return;
      var u = Cv(
        t.alternate,
        t,
        Zt
      );
      if (u !== null) {
        J = u;
        return;
      }
      if (t = t.sibling, t !== null) {
        J = t;
        return;
      }
      J = t = l;
    } while (t !== null);
    _l === 0 && (_l = 5);
  }
  function f0(l, t) {
    do {
      var u = Xv(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, J = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !t && (l = l.sibling, l !== null)) {
        J = l;
        return;
      }
      J = l = u;
    } while (l !== null);
    _l = 6, J = null;
  }
  function i0(l, t, u, a, e, n, c, f, i) {
    l.cancelPendingCommit = null;
    do
      rn();
    while (Xl !== 0);
    if ((el & 6) !== 0) throw Error(h(327));
    if (t !== null) {
      if (t === l.current) throw Error(h(177));
      if (n = t.lanes | t.childLanes, n |= hc, Dd(
        l,
        u,
        n,
        c,
        f,
        i
      ), l === yl && (J = yl = null, $ = 0), oa = t, fu = l, da = u, bf = n, Tf = e, Io = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Iv(be, function() {
        return h0(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = S.T, S.T = null, e = D.p, D.p = 2, c = el, el |= 4;
        try {
          Qv(l, t, u);
        } finally {
          el = c, D.p = e, S.T = a;
        }
      }
      Xl = 1, s0(), o0(), d0();
    }
  }
  function s0() {
    if (Xl === 1) {
      Xl = 0;
      var l = fu, t = oa, u = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || u) {
        u = S.T, S.T = null;
        var a = D.p;
        D.p = 2;
        var e = el;
        el |= 4;
        try {
          Ko(t, l);
          var n = Yf, c = $i(l.containerInfo), f = n.focusedElem, i = n.selectionRange;
          if (c !== f && f && f.ownerDocument && Wi(
            f.ownerDocument.documentElement,
            f
          )) {
            if (i !== null && ic(f)) {
              var y = i.start, g = i.end;
              if (g === void 0 && (g = y), "selectionStart" in f)
                f.selectionStart = y, f.selectionEnd = Math.min(
                  g,
                  f.value.length
                );
              else {
                var E = f.ownerDocument || document, r = E && E.defaultView || window;
                if (r.getSelection) {
                  var m = r.getSelection(), C = f.textContent.length, x = Math.min(i.start, C), sl = i.end === void 0 ? x : Math.min(i.end, C);
                  !m.extend && x > sl && (c = sl, sl = x, x = c);
                  var d = ki(
                    f,
                    x
                  ), o = ki(
                    f,
                    sl
                  );
                  if (d && o && (m.rangeCount !== 1 || m.anchorNode !== d.node || m.anchorOffset !== d.offset || m.focusNode !== o.node || m.focusOffset !== o.offset)) {
                    var v = E.createRange();
                    v.setStart(d.node, d.offset), m.removeAllRanges(), x > sl ? (m.addRange(v), m.extend(o.node, o.offset)) : (v.setEnd(o.node, o.offset), m.addRange(v));
                  }
                }
              }
            }
            for (E = [], m = f; m = m.parentNode; )
              m.nodeType === 1 && E.push({
                element: m,
                left: m.scrollLeft,
                top: m.scrollTop
              });
            for (typeof f.focus == "function" && f.focus(), f = 0; f < E.length; f++) {
              var b = E[f];
              b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
            }
          }
          Mn = !!xf, Yf = xf = null;
        } finally {
          el = e, D.p = a, S.T = u;
        }
      }
      l.current = t, Xl = 2;
    }
  }
  function o0() {
    if (Xl === 2) {
      Xl = 0;
      var l = fu, t = oa, u = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || u) {
        u = S.T, S.T = null;
        var a = D.p;
        D.p = 2;
        var e = el;
        el |= 4;
        try {
          Qo(l, t.alternate, t);
        } finally {
          el = e, D.p = a, S.T = u;
        }
      }
      Xl = 3;
    }
  }
  function d0() {
    if (Xl === 4 || Xl === 3) {
      Xl = 0, gd();
      var l = fu, t = oa, u = da, a = Io;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Xl = 5 : (Xl = 0, oa = fu = null, v0(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (e === 0 && (cu = null), Qn(u), t = t.stateNode, tt && typeof tt.onCommitFiberRoot == "function")
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
        t = S.T, e = D.p, D.p = 2, S.T = null;
        try {
          for (var n = l.onRecoverableError, c = 0; c < a.length; c++) {
            var f = a[c];
            n(f.value, {
              componentStack: f.stack
            });
          }
        } finally {
          S.T = t, D.p = e;
        }
      }
      (da & 3) !== 0 && rn(), Mt(l), e = l.pendingLanes, (u & 4194090) !== 0 && (e & 42) !== 0 ? l === Ef ? ae++ : (ae = 0, Ef = l) : ae = 0, ee(0);
    }
  }
  function v0(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Ga(t)));
  }
  function rn(l) {
    return s0(), o0(), d0(), h0();
  }
  function h0() {
    if (Xl !== 5) return !1;
    var l = fu, t = bf;
    bf = 0;
    var u = Qn(da), a = S.T, e = D.p;
    try {
      D.p = 32 > u ? 32 : u, S.T = null, u = Tf, Tf = null;
      var n = fu, c = da;
      if (Xl = 0, oa = fu = null, da = 0, (el & 6) !== 0) throw Error(h(331));
      var f = el;
      if (el |= 4, $o(n.current), wo(
        n,
        n.current,
        c,
        u
      ), el = f, ee(0, !1), tt && typeof tt.onPostCommitFiberRoot == "function")
        try {
          tt.onPostCommitFiberRoot(ba, n);
        } catch {
        }
      return !0;
    } finally {
      D.p = e, S.T = a, v0(l, t);
    }
  }
  function y0(l, t, u) {
    t = vt(u, t), t = Ic(l.stateNode, t, 2), l = Ft(l, t, 2), l !== null && (Ea(l, 2), Mt(l));
  }
  function dl(l, t, u) {
    if (l.tag === 3)
      y0(l, l, u);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          y0(
            t,
            l,
            u
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (cu === null || !cu.has(a))) {
            l = vt(u, l), u = So(2), a = Ft(t, u, 2), a !== null && (bo(
              u,
              a,
              t,
              l
            ), Ea(a, 2), Mt(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Of(l, t, u) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new Lv();
      var e = /* @__PURE__ */ new Set();
      a.set(t, e);
    } else
      e = a.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), a.set(t, e));
    e.has(u) || (rf = !0, e.add(u), l = Wv.bind(null, l, t, u), t.then(l, l));
  }
  function Wv(l, t, u) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, yl === l && ($ & u) === u && (_l === 4 || _l === 3 && ($ & 62914560) === $ && 300 > At() - Sf ? (el & 2) === 0 && va(l, 0) : mf |= u, sa === $ && (sa = 0)), Mt(l);
  }
  function r0(l, t) {
    t === 0 && (t = oi()), l = ku(l, t), l !== null && (Ea(l, t), Mt(l));
  }
  function $v(l) {
    var t = l.memoizedState, u = 0;
    t !== null && (u = t.retryLane), r0(l, u);
  }
  function Fv(l, t) {
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
        throw Error(h(314));
    }
    a !== null && a.delete(t), r0(l, u);
  }
  function Iv(l, t) {
    return Gn(l, t);
  }
  var mn = null, ya = null, Df = !1, gn = !1, Mf = !1, qu = 0;
  function Mt(l) {
    l !== ya && l.next === null && (ya === null ? mn = ya = l : ya = ya.next = l), gn = !0, Df || (Df = !0, lh());
  }
  function ee(l, t) {
    if (!Mf && gn) {
      Mf = !0;
      do
        for (var u = !1, a = mn; a !== null; ) {
          if (l !== 0) {
            var e = a.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var c = a.suspendedLanes, f = a.pingedLanes;
              n = (1 << 31 - ut(42 | l) + 1) - 1, n &= e & ~(c & ~f), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (u = !0, b0(a, n));
          } else
            n = $, n = Ae(
              a,
              a === yl ? n : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (n & 3) === 0 || Ta(a, n) || (u = !0, b0(a, n));
          a = a.next;
        }
      while (u);
      Mf = !1;
    }
  }
  function Pv() {
    m0();
  }
  function m0() {
    gn = Df = !1;
    var l = 0;
    qu !== 0 && (ih() && (l = qu), qu = 0);
    for (var t = At(), u = null, a = mn; a !== null; ) {
      var e = a.next, n = g0(a, t);
      n === 0 ? (a.next = null, u === null ? mn = e : u.next = e, e === null && (ya = u)) : (u = a, (l !== 0 || (n & 3) !== 0) && (gn = !0)), a = e;
    }
    ee(l);
  }
  function g0(l, t) {
    for (var u = l.suspendedLanes, a = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var c = 31 - ut(n), f = 1 << c, i = e[c];
      i === -1 ? ((f & u) === 0 || (f & a) !== 0) && (e[c] = Od(f, t)) : i <= t && (l.expiredLanes |= f), n &= ~f;
    }
    if (t = yl, u = $, u = Ae(
      l,
      l === t ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a = l.callbackNode, u === 0 || l === t && (nl === 2 || nl === 9) || l.cancelPendingCommit !== null)
      return a !== null && a !== null && jn(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || Ta(l, u)) {
      if (t = u & -u, t === l.callbackPriority) return t;
      switch (a !== null && jn(a), Qn(u)) {
        case 2:
        case 8:
          u = fi;
          break;
        case 32:
          u = be;
          break;
        case 268435456:
          u = ii;
          break;
        default:
          u = be;
      }
      return a = S0.bind(null, l), u = Gn(u, a), l.callbackPriority = t, l.callbackNode = u, t;
    }
    return a !== null && a !== null && jn(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function S0(l, t) {
    if (Xl !== 0 && Xl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (rn() && l.callbackNode !== u)
      return null;
    var a = $;
    return a = Ae(
      l,
      l === yl ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a === 0 ? null : (l0(l, a, t), g0(l, At()), l.callbackNode != null && l.callbackNode === u ? S0.bind(null, l) : null);
  }
  function b0(l, t) {
    if (rn()) return null;
    l0(l, t, !0);
  }
  function lh() {
    oh(function() {
      (el & 6) !== 0 ? Gn(
        ci,
        Pv
      ) : m0();
    });
  }
  function Rf() {
    return qu === 0 && (qu = si()), qu;
  }
  function T0(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Me("" + l);
  }
  function E0(l, t) {
    var u = t.ownerDocument.createElement("input");
    return u.name = t.name, u.value = t.value, l.id && u.setAttribute("form", l.id), t.parentNode.insertBefore(u, t), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function th(l, t, u, a, e) {
    if (t === "submit" && u && u.stateNode === e) {
      var n = T0(
        (e[Wl] || null).action
      ), c = a.submitter;
      c && (t = (t = c[Wl] || null) ? T0(t.formAction) : c.getAttribute("formAction"), t !== null && (n = t, c = null));
      var f = new He(
        "action",
        "action",
        null,
        a,
        e
      );
      l.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (qu !== 0) {
                  var i = c ? E0(e, c) : new FormData(e);
                  wc(
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
                typeof n == "function" && (f.preventDefault(), i = c ? E0(e, c) : new FormData(e), wc(
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
  for (var Uf = 0; Uf < vc.length; Uf++) {
    var Nf = vc[Uf], uh = Nf.toLowerCase(), ah = Nf[0].toUpperCase() + Nf.slice(1);
    bt(
      uh,
      "on" + ah
    );
  }
  bt(Pi, "onAnimationEnd"), bt(ls, "onAnimationIteration"), bt(ts, "onAnimationStart"), bt("dblclick", "onDoubleClick"), bt("focusin", "onFocus"), bt("focusout", "onBlur"), bt(Tv, "onTransitionRun"), bt(Ev, "onTransitionStart"), bt(Av, "onTransitionCancel"), bt(us, "onTransitionEnd"), ju("onMouseEnter", ["mouseout", "mouseover"]), ju("onMouseLeave", ["mouseout", "mouseover"]), ju("onPointerEnter", ["pointerout", "pointerover"]), ju("onPointerLeave", ["pointerout", "pointerover"]), gu(
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
  ), eh = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ne)
  );
  function A0(l, t) {
    t = (t & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var a = l[u], e = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var c = a.length - 1; 0 <= c; c--) {
            var f = a[c], i = f.instance, y = f.currentTarget;
            if (f = f.listener, i !== n && e.isPropagationStopped())
              break l;
            n = f, e.currentTarget = y;
            try {
              n(e);
            } catch (g) {
              an(g);
            }
            e.currentTarget = null, n = i;
          }
        else
          for (c = 0; c < a.length; c++) {
            if (f = a[c], i = f.instance, y = f.currentTarget, f = f.listener, i !== n && e.isPropagationStopped())
              break l;
            n = f, e.currentTarget = y;
            try {
              n(e);
            } catch (g) {
              an(g);
            }
            e.currentTarget = null, n = i;
          }
      }
    }
  }
  function w(l, t) {
    var u = t[Zn];
    u === void 0 && (u = t[Zn] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    u.has(a) || (_0(t, l, 2, !1), u.add(a));
  }
  function Hf(l, t, u) {
    var a = 0;
    t && (a |= 4), _0(
      u,
      l,
      a,
      t
    );
  }
  var Sn = "_reactListening" + Math.random().toString(36).slice(2);
  function pf(l) {
    if (!l[Sn]) {
      l[Sn] = !0, ri.forEach(function(u) {
        u !== "selectionchange" && (eh.has(u) || Hf(u, !1, l), Hf(u, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Sn] || (t[Sn] = !0, Hf("selectionchange", !1, t));
    }
  }
  function _0(l, t, u, a) {
    switch (w0(t)) {
      case 2:
        var e = Hh;
        break;
      case 8:
        e = ph;
        break;
      default:
        e = Jf;
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
  function qf(l, t, u, a, e) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (; ; ) {
        if (a === null) return;
        var c = a.tag;
        if (c === 3 || c === 4) {
          var f = a.stateNode.containerInfo;
          if (f === e) break;
          if (c === 4)
            for (c = a.return; c !== null; ) {
              var i = c.tag;
              if ((i === 3 || i === 4) && c.stateNode.containerInfo === e)
                return;
              c = c.return;
            }
          for (; f !== null; ) {
            if (c = xu(f), c === null) return;
            if (i = c.tag, i === 5 || i === 6 || i === 26 || i === 27) {
              a = n = c;
              continue l;
            }
            f = f.parentNode;
          }
        }
        a = a.return;
      }
    Ui(function() {
      var y = n, g = Fn(u), E = [];
      l: {
        var r = as.get(l);
        if (r !== void 0) {
          var m = He, C = l;
          switch (l) {
            case "keypress":
              if (Ue(u) === 0) break l;
            case "keydown":
            case "keyup":
              m = Id;
              break;
            case "focusin":
              C = "focus", m = ac;
              break;
            case "focusout":
              C = "blur", m = ac;
              break;
            case "beforeblur":
            case "afterblur":
              m = ac;
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
              m = pi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              m = Xd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              m = tv;
              break;
            case Pi:
            case ls:
            case ts:
              m = Vd;
              break;
            case us:
              m = av;
              break;
            case "scroll":
            case "scrollend":
              m = jd;
              break;
            case "wheel":
              m = nv;
              break;
            case "copy":
            case "cut":
            case "paste":
              m = Kd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              m = Bi;
              break;
            case "toggle":
            case "beforetoggle":
              m = fv;
          }
          var x = (t & 4) !== 0, sl = !x && (l === "scroll" || l === "scrollend"), d = x ? r !== null ? r + "Capture" : null : r;
          x = [];
          for (var o = y, v; o !== null; ) {
            var b = o;
            if (v = b.stateNode, b = b.tag, b !== 5 && b !== 26 && b !== 27 || v === null || d === null || (b = za(o, d), b != null && x.push(
              ce(o, b, v)
            )), sl) break;
            o = o.return;
          }
          0 < x.length && (r = new m(
            r,
            C,
            null,
            u,
            g
          ), E.push({ event: r, listeners: x }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (r = l === "mouseover" || l === "pointerover", m = l === "mouseout" || l === "pointerout", r && u !== $n && (C = u.relatedTarget || u.fromElement) && (xu(C) || C[Bu]))
            break l;
          if ((m || r) && (r = g.window === g ? g : (r = g.ownerDocument) ? r.defaultView || r.parentWindow : window, m ? (C = u.relatedTarget || u.toElement, m = y, C = C ? xu(C) : null, C !== null && (sl = F(C), x = C.tag, C !== sl || x !== 5 && x !== 27 && x !== 6) && (C = null)) : (m = null, C = y), m !== C)) {
            if (x = pi, b = "onMouseLeave", d = "onMouseEnter", o = "mouse", (l === "pointerout" || l === "pointerover") && (x = Bi, b = "onPointerLeave", d = "onPointerEnter", o = "pointer"), sl = m == null ? r : _a(m), v = C == null ? r : _a(C), r = new x(
              b,
              o + "leave",
              m,
              u,
              g
            ), r.target = sl, r.relatedTarget = v, b = null, xu(g) === y && (x = new x(
              d,
              o + "enter",
              C,
              u,
              g
            ), x.target = v, x.relatedTarget = sl, b = x), sl = b, m && C)
              t: {
                for (x = m, d = C, o = 0, v = x; v; v = ra(v))
                  o++;
                for (v = 0, b = d; b; b = ra(b))
                  v++;
                for (; 0 < o - v; )
                  x = ra(x), o--;
                for (; 0 < v - o; )
                  d = ra(d), v--;
                for (; o--; ) {
                  if (x === d || d !== null && x === d.alternate)
                    break t;
                  x = ra(x), d = ra(d);
                }
                x = null;
              }
            else x = null;
            m !== null && z0(
              E,
              r,
              m,
              x,
              !1
            ), C !== null && sl !== null && z0(
              E,
              sl,
              C,
              x,
              !0
            );
          }
        }
        l: {
          if (r = y ? _a(y) : window, m = r.nodeName && r.nodeName.toLowerCase(), m === "select" || m === "input" && r.type === "file")
            var R = Zi;
          else if (Xi(r))
            if (Vi)
              R = gv;
            else {
              R = rv;
              var K = yv;
            }
          else
            m = r.nodeName, !m || m.toLowerCase() !== "input" || r.type !== "checkbox" && r.type !== "radio" ? y && Wn(y.elementType) && (R = Zi) : R = mv;
          if (R && (R = R(l, y))) {
            Qi(
              E,
              R,
              u,
              g
            );
            break l;
          }
          K && K(l, r, y), l === "focusout" && y && r.type === "number" && y.memoizedProps.value != null && kn(r, "number", r.value);
        }
        switch (K = y ? _a(y) : window, l) {
          case "focusin":
            (Xi(K) || K.contentEditable === "true") && (Ku = K, sc = y, pa = null);
            break;
          case "focusout":
            pa = sc = Ku = null;
            break;
          case "mousedown":
            oc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            oc = !1, Fi(E, u, g);
            break;
          case "selectionchange":
            if (bv) break;
          case "keydown":
          case "keyup":
            Fi(E, u, g);
        }
        var H;
        if (nc)
          l: {
            switch (l) {
              case "compositionstart":
                var Y = "onCompositionStart";
                break l;
              case "compositionend":
                Y = "onCompositionEnd";
                break l;
              case "compositionupdate":
                Y = "onCompositionUpdate";
                break l;
            }
            Y = void 0;
          }
        else
          Lu ? ji(l, u) && (Y = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (Y = "onCompositionStart");
        Y && (xi && u.locale !== "ko" && (Lu || Y !== "onCompositionStart" ? Y === "onCompositionEnd" && Lu && (H = Ni()) : (wt = g, lc = "value" in wt ? wt.value : wt.textContent, Lu = !0)), K = bn(y, Y), 0 < K.length && (Y = new qi(
          Y,
          l,
          null,
          u,
          g
        ), E.push({ event: Y, listeners: K }), H ? Y.data = H : (H = Ci(u), H !== null && (Y.data = H)))), (H = sv ? ov(l, u) : dv(l, u)) && (Y = bn(y, "onBeforeInput"), 0 < Y.length && (K = new qi(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          g
        ), E.push({
          event: K,
          listeners: Y
        }), K.data = H)), th(
          E,
          l,
          y,
          u,
          g
        );
      }
      A0(E, t);
    });
  }
  function ce(l, t, u) {
    return {
      instance: l,
      listener: t,
      currentTarget: u
    };
  }
  function bn(l, t) {
    for (var u = t + "Capture", a = []; l !== null; ) {
      var e = l, n = e.stateNode;
      if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = za(l, u), e != null && a.unshift(
        ce(l, e, n)
      ), e = za(l, t), e != null && a.push(
        ce(l, e, n)
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
  function z0(l, t, u, a, e) {
    for (var n = t._reactName, c = []; u !== null && u !== a; ) {
      var f = u, i = f.alternate, y = f.stateNode;
      if (f = f.tag, i !== null && i === a) break;
      f !== 5 && f !== 26 && f !== 27 || y === null || (i = y, e ? (y = za(u, n), y != null && c.unshift(
        ce(u, y, i)
      )) : e || (y = za(u, n), y != null && c.push(
        ce(u, y, i)
      ))), u = u.return;
    }
    c.length !== 0 && l.push({ event: t, listeners: c });
  }
  var nh = /\r\n?/g, ch = /\u0000|\uFFFD/g;
  function O0(l) {
    return (typeof l == "string" ? l : "" + l).replace(nh, `
`).replace(ch, "");
  }
  function D0(l, t) {
    return t = O0(t), O0(l) === t;
  }
  function Tn() {
  }
  function il(l, t, u, a, e, n) {
    switch (u) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Qu(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Qu(l, "" + a);
        break;
      case "className":
        ze(l, "class", a);
        break;
      case "tabIndex":
        ze(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ze(l, u, a);
        break;
      case "style":
        Mi(l, a, n);
        break;
      case "data":
        if (t !== "object") {
          ze(l, "data", a);
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
        a = Me("" + a), l.setAttribute(u, a);
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
        a = Me("" + a), l.setAttribute(u, a);
        break;
      case "onClick":
        a != null && (l.onclick = Tn);
        break;
      case "onScroll":
        a != null && w("scroll", l);
        break;
      case "onScrollEnd":
        a != null && w("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(h(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(h(60));
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
        u = Me("" + a), l.setAttributeNS(
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
        w("beforetoggle", l), w("toggle", l), _e(l, "popover", a);
        break;
      case "xlinkActuate":
        Ut(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Ut(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Ut(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Ut(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Ut(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Ut(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Ut(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Ut(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Ut(
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
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = Yd.get(u) || u, _e(l, u, a));
    }
  }
  function Bf(l, t, u, a, e, n) {
    switch (u) {
      case "style":
        Mi(l, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(h(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(h(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof a == "string" ? Qu(l, a) : (typeof a == "number" || typeof a == "bigint") && Qu(l, "" + a);
        break;
      case "onScroll":
        a != null && w("scroll", l);
        break;
      case "onScrollEnd":
        a != null && w("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = Tn);
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
        if (!mi.hasOwnProperty(u))
          l: {
            if (u[0] === "o" && u[1] === "n" && (e = u.endsWith("Capture"), t = u.slice(2, e ? u.length - 7 : void 0), n = l[Wl] || null, n = n != null ? n[u] : null, typeof n == "function" && l.removeEventListener(t, n, e), typeof a == "function")) {
              typeof n != "function" && n !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(t, a, e);
              break l;
            }
            u in l ? l[u] = a : a === !0 ? l.setAttribute(u, "") : _e(l, u, a);
          }
    }
  }
  function Ql(l, t, u) {
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
        w("error", l), w("load", l);
        var a = !1, e = !1, n;
        for (n in u)
          if (u.hasOwnProperty(n)) {
            var c = u[n];
            if (c != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(h(137, t));
                default:
                  il(l, t, n, c, u, null);
              }
          }
        e && il(l, t, "srcSet", u.srcSet, u, null), a && il(l, t, "src", u.src, u, null);
        return;
      case "input":
        w("invalid", l);
        var f = n = c = e = null, i = null, y = null;
        for (a in u)
          if (u.hasOwnProperty(a)) {
            var g = u[a];
            if (g != null)
              switch (a) {
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
                  y = g;
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
                    throw Error(h(137, t));
                  break;
                default:
                  il(l, t, a, g, u, null);
              }
          }
        _i(
          l,
          n,
          f,
          i,
          y,
          c,
          e,
          !1
        ), Oe(l);
        return;
      case "select":
        w("invalid", l), a = c = n = null;
        for (e in u)
          if (u.hasOwnProperty(e) && (f = u[e], f != null))
            switch (e) {
              case "value":
                n = f;
                break;
              case "defaultValue":
                c = f;
                break;
              case "multiple":
                a = f;
              default:
                il(l, t, e, f, u, null);
            }
        t = n, u = c, l.multiple = !!a, t != null ? Xu(l, !!a, t, !1) : u != null && Xu(l, !!a, u, !0);
        return;
      case "textarea":
        w("invalid", l), n = e = a = null;
        for (c in u)
          if (u.hasOwnProperty(c) && (f = u[c], f != null))
            switch (c) {
              case "value":
                a = f;
                break;
              case "defaultValue":
                e = f;
                break;
              case "children":
                n = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(h(91));
                break;
              default:
                il(l, t, c, f, u, null);
            }
        Oi(l, a, e, n), Oe(l);
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
        w("beforetoggle", l), w("toggle", l), w("cancel", l), w("close", l);
        break;
      case "iframe":
      case "object":
        w("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ne.length; a++)
          w(ne[a], l);
        break;
      case "image":
        w("error", l), w("load", l);
        break;
      case "details":
        w("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        w("error", l), w("load", l);
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
                throw Error(h(137, t));
              default:
                il(l, t, y, a, u, null);
            }
        return;
      default:
        if (Wn(t)) {
          for (g in u)
            u.hasOwnProperty(g) && (a = u[g], a !== void 0 && Bf(
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
    for (f in u)
      u.hasOwnProperty(f) && (a = u[f], a != null && il(l, t, f, a, u, null));
  }
  function fh(l, t, u, a) {
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
        var e = null, n = null, c = null, f = null, i = null, y = null, g = null;
        for (m in u) {
          var E = u[m];
          if (u.hasOwnProperty(m) && E != null)
            switch (m) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                i = E;
              default:
                a.hasOwnProperty(m) || il(l, t, m, null, a, E);
            }
        }
        for (var r in a) {
          var m = a[r];
          if (E = u[r], a.hasOwnProperty(r) && (m != null || E != null))
            switch (r) {
              case "type":
                n = m;
                break;
              case "name":
                e = m;
                break;
              case "checked":
                y = m;
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
                  throw Error(h(137, t));
                break;
              default:
                m !== E && il(
                  l,
                  t,
                  r,
                  m,
                  a,
                  E
                );
            }
        }
        wn(
          l,
          c,
          f,
          i,
          y,
          g,
          n,
          e
        );
        return;
      case "select":
        m = c = f = r = null;
        for (n in u)
          if (i = u[n], u.hasOwnProperty(n) && i != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                m = i;
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
                r = n;
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
                  a,
                  i
                );
            }
        t = f, u = c, a = m, r != null ? Xu(l, !!u, r, !1) : !!a != !!u && (t != null ? Xu(l, !!u, t, !0) : Xu(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        m = r = null;
        for (f in u)
          if (e = u[f], u.hasOwnProperty(f) && e != null && !a.hasOwnProperty(f))
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                il(l, t, f, null, a, e);
            }
        for (c in a)
          if (e = a[c], n = u[c], a.hasOwnProperty(c) && (e != null || n != null))
            switch (c) {
              case "value":
                r = e;
                break;
              case "defaultValue":
                m = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(h(91));
                break;
              default:
                e !== n && il(l, t, c, e, a, n);
            }
        zi(l, r, m);
        return;
      case "option":
        for (var C in u)
          if (r = u[C], u.hasOwnProperty(C) && r != null && !a.hasOwnProperty(C))
            switch (C) {
              case "selected":
                l.selected = !1;
                break;
              default:
                il(
                  l,
                  t,
                  C,
                  null,
                  a,
                  r
                );
            }
        for (i in a)
          if (r = a[i], m = u[i], a.hasOwnProperty(i) && r !== m && (r != null || m != null))
            switch (i) {
              case "selected":
                l.selected = r && typeof r != "function" && typeof r != "symbol";
                break;
              default:
                il(
                  l,
                  t,
                  i,
                  r,
                  a,
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
        for (var x in u)
          r = u[x], u.hasOwnProperty(x) && r != null && !a.hasOwnProperty(x) && il(l, t, x, null, a, r);
        for (y in a)
          if (r = a[y], m = u[y], a.hasOwnProperty(y) && r !== m && (r != null || m != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (r != null)
                  throw Error(h(137, t));
                break;
              default:
                il(
                  l,
                  t,
                  y,
                  r,
                  a,
                  m
                );
            }
        return;
      default:
        if (Wn(t)) {
          for (var sl in u)
            r = u[sl], u.hasOwnProperty(sl) && r !== void 0 && !a.hasOwnProperty(sl) && Bf(
              l,
              t,
              sl,
              void 0,
              a,
              r
            );
          for (g in a)
            r = a[g], m = u[g], !a.hasOwnProperty(g) || r === m || r === void 0 && m === void 0 || Bf(
              l,
              t,
              g,
              r,
              a,
              m
            );
          return;
        }
    }
    for (var d in u)
      r = u[d], u.hasOwnProperty(d) && r != null && !a.hasOwnProperty(d) && il(l, t, d, null, a, r);
    for (E in a)
      r = a[E], m = u[E], !a.hasOwnProperty(E) || r === m || r == null && m == null || il(l, t, E, r, a, m);
  }
  var xf = null, Yf = null;
  function En(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function M0(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function R0(l, t) {
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
  var jf = null;
  function ih() {
    var l = window.event;
    return l && l.type === "popstate" ? l === jf ? !1 : (jf = l, !0) : (jf = null, !1);
  }
  var U0 = typeof setTimeout == "function" ? setTimeout : void 0, sh = typeof clearTimeout == "function" ? clearTimeout : void 0, N0 = typeof Promise == "function" ? Promise : void 0, oh = typeof queueMicrotask == "function" ? queueMicrotask : typeof N0 < "u" ? function(l) {
    return N0.resolve(null).then(l).catch(dh);
  } : U0;
  function dh(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function su(l) {
    return l === "head";
  }
  function H0(l, t) {
    var u = t, a = 0, e = 0;
    do {
      var n = u.nextSibling;
      if (l.removeChild(u), n && n.nodeType === 8)
        if (u = n.data, u === "/$") {
          if (0 < a && 8 > a) {
            u = a;
            var c = l.ownerDocument;
            if (u & 1 && fe(c.documentElement), u & 2 && fe(c.body), u & 4)
              for (u = c.head, fe(u), c = u.firstChild; c; ) {
                var f = c.nextSibling, i = c.nodeName;
                c[Aa] || i === "SCRIPT" || i === "STYLE" || i === "LINK" && c.rel.toLowerCase() === "stylesheet" || u.removeChild(c), c = f;
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
  function Cf(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var u = t;
      switch (t = t.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Cf(u), Vn(u);
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
  function vh(l, t, u, a) {
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
      if (l = Et(l.nextSibling), l === null) break;
    }
    return null;
  }
  function hh(l, t, u) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = Et(l.nextSibling), l === null)) return null;
    return l;
  }
  function Xf(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete";
  }
  function yh(l, t) {
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
  var Qf = null;
  function p0(l) {
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
  function q0(l, t, u) {
    switch (t = En(u), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(h(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(h(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(h(454));
        return l;
      default:
        throw Error(h(451));
    }
  }
  function fe(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    Vn(l);
  }
  var St = /* @__PURE__ */ new Map(), B0 = /* @__PURE__ */ new Set();
  function An(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Vt = D.d;
  D.d = {
    f: rh,
    r: mh,
    D: gh,
    C: Sh,
    L: bh,
    m: Th,
    X: Ah,
    S: Eh,
    M: _h
  };
  function rh() {
    var l = Vt.f(), t = hn();
    return l || t;
  }
  function mh(l) {
    var t = Yu(l);
    t !== null && t.tag === 5 && t.type === "form" ? Ps(t) : Vt.r(l);
  }
  var ma = typeof document > "u" ? null : document;
  function x0(l, t, u) {
    var a = ma;
    if (a && typeof t == "string" && t) {
      var e = dt(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof u == "string" && (e += '[crossorigin="' + u + '"]'), B0.has(e) || (B0.add(e), l = { rel: l, crossOrigin: u, href: t }, a.querySelector(e) === null && (t = a.createElement("link"), Ql(t, "link", l), xl(t), a.head.appendChild(t)));
    }
  }
  function gh(l) {
    Vt.D(l), x0("dns-prefetch", l, null);
  }
  function Sh(l, t) {
    Vt.C(l, t), x0("preconnect", l, t);
  }
  function bh(l, t, u) {
    Vt.L(l, t, u);
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
      ), St.set(n, l), a.querySelector(e) !== null || t === "style" && a.querySelector(ie(n)) || t === "script" && a.querySelector(se(n)) || (t = a.createElement("link"), Ql(t, "link", l), xl(t), a.head.appendChild(t)));
    }
  }
  function Th(l, t) {
    Vt.m(l, t);
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
        a = u.createElement("link"), Ql(a, "link", l), xl(a), u.head.appendChild(a);
      }
    }
  }
  function Eh(l, t, u) {
    Vt.S(l, t, u);
    var a = ma;
    if (a && l) {
      var e = Gu(a).hoistableStyles, n = ga(l);
      t = t || "default";
      var c = e.get(n);
      if (!c) {
        var f = { loading: 0, preload: null };
        if (c = a.querySelector(
          ie(n)
        ))
          f.loading = 5;
        else {
          l = N(
            { rel: "stylesheet", href: l, "data-precedence": t },
            u
          ), (u = St.get(n)) && Zf(l, u);
          var i = c = a.createElement("link");
          xl(i), Ql(i, "link", l), i._p = new Promise(function(y, g) {
            i.onload = y, i.onerror = g;
          }), i.addEventListener("load", function() {
            f.loading |= 1;
          }), i.addEventListener("error", function() {
            f.loading |= 2;
          }), f.loading |= 4, _n(c, t, a);
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
  function Ah(l, t) {
    Vt.X(l, t);
    var u = ma;
    if (u && l) {
      var a = Gu(u).hoistableScripts, e = Sa(l), n = a.get(e);
      n || (n = u.querySelector(se(e)), n || (l = N({ src: l, async: !0 }, t), (t = St.get(e)) && Vf(l, t), n = u.createElement("script"), xl(n), Ql(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function _h(l, t) {
    Vt.M(l, t);
    var u = ma;
    if (u && l) {
      var a = Gu(u).hoistableScripts, e = Sa(l), n = a.get(e);
      n || (n = u.querySelector(se(e)), n || (l = N({ src: l, async: !0, type: "module" }, t), (t = St.get(e)) && Vf(l, t), n = u.createElement("script"), xl(n), Ql(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function Y0(l, t, u, a) {
    var e = (e = Q.current) ? An(e) : null;
    if (!e) throw Error(h(446));
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
          ).hoistableStyles, c = n.get(l);
          if (c || (e = e.ownerDocument || e, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, c), (n = e.querySelector(
            ie(l)
          )) && !n._p && (c.instance = n, c.state.loading = 5), St.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, St.set(l, u), n || zh(
            e,
            l,
            u,
            c.state
          ))), t && a === null)
            throw Error(h(528, ""));
          return c;
        }
        if (t && a !== null)
          throw Error(h(529, ""));
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
        throw Error(h(444, l));
    }
  }
  function ga(l) {
    return 'href="' + dt(l) + '"';
  }
  function ie(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function G0(l) {
    return N({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function zh(l, t, u, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), Ql(t, "link", u), xl(t), l.head.appendChild(t));
  }
  function Sa(l) {
    return '[src="' + dt(l) + '"]';
  }
  function se(l) {
    return "script[async]" + l;
  }
  function j0(l, t, u) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = l.querySelector(
            'style[data-href~="' + dt(u.href) + '"]'
          );
          if (a)
            return t.instance = a, xl(a), a;
          var e = N({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement(
            "style"
          ), xl(a), Ql(a, "style", e), _n(a, u.precedence, l), t.instance = a;
        case "stylesheet":
          e = ga(u.href);
          var n = l.querySelector(
            ie(e)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, xl(n), n;
          a = G0(u), (e = St.get(e)) && Zf(a, e), n = (l.ownerDocument || l).createElement("link"), xl(n);
          var c = n;
          return c._p = new Promise(function(f, i) {
            c.onload = f, c.onerror = i;
          }), Ql(n, "link", a), t.state.loading |= 4, _n(n, u.precedence, l), t.instance = n;
        case "script":
          return n = Sa(u.src), (e = l.querySelector(
            se(n)
          )) ? (t.instance = e, xl(e), e) : (a = u, (e = St.get(n)) && (a = N({}, u), Vf(a, e)), l = l.ownerDocument || l, e = l.createElement("script"), xl(e), Ql(e, "link", a), l.head.appendChild(e), t.instance = e);
        case "void":
          return null;
        default:
          throw Error(h(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, _n(a, u.precedence, l));
    return t.instance;
  }
  function _n(l, t, u) {
    for (var a = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), e = a.length ? a[a.length - 1] : null, n = e, c = 0; c < a.length; c++) {
      var f = a[c];
      if (f.dataset.precedence === t) n = f;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = u.nodeType === 9 ? u.head : u, t.insertBefore(l, t.firstChild));
  }
  function Zf(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function Vf(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var zn = null;
  function C0(l, t, u) {
    if (zn === null) {
      var a = /* @__PURE__ */ new Map(), e = zn = /* @__PURE__ */ new Map();
      e.set(u, a);
    } else
      e = zn, a = e.get(u), a || (a = /* @__PURE__ */ new Map(), e.set(u, a));
    if (a.has(l)) return a;
    for (a.set(l, null), u = u.getElementsByTagName(l), e = 0; e < u.length; e++) {
      var n = u[e];
      if (!(n[Aa] || n[Vl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = n.getAttribute(t) || "";
        c = l + c;
        var f = a.get(c);
        f ? f.push(n) : a.set(c, [n]);
      }
    }
    return a;
  }
  function X0(l, t, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function Oh(l, t, u) {
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
  function Q0(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var oe = null;
  function Dh() {
  }
  function Mh(l, t, u) {
    if (oe === null) throw Error(h(475));
    var a = oe;
    if (t.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var e = ga(u.href), n = l.querySelector(
          ie(e)
        );
        if (n) {
          l = n._p, l !== null && typeof l == "object" && typeof l.then == "function" && (a.count++, a = On.bind(a), l.then(a, a)), t.state.loading |= 4, t.instance = n, xl(n);
          return;
        }
        n = l.ownerDocument || l, u = G0(u), (e = St.get(e)) && Zf(u, e), n = n.createElement("link"), xl(n);
        var c = n;
        c._p = new Promise(function(f, i) {
          c.onload = f, c.onerror = i;
        }), Ql(n, "link", u), t.instance = n;
      }
      a.stylesheets === null && (a.stylesheets = /* @__PURE__ */ new Map()), a.stylesheets.set(t, l), (l = t.state.preload) && (t.state.loading & 3) === 0 && (a.count++, t = On.bind(a), l.addEventListener("load", t), l.addEventListener("error", t));
    }
  }
  function Rh() {
    if (oe === null) throw Error(h(475));
    var l = oe;
    return l.stylesheets && l.count === 0 && Lf(l, l.stylesheets), 0 < l.count ? function(t) {
      var u = setTimeout(function() {
        if (l.stylesheets && Lf(l, l.stylesheets), l.unsuspend) {
          var a = l.unsuspend;
          l.unsuspend = null, a();
        }
      }, 6e4);
      return l.unsuspend = t, function() {
        l.unsuspend = null, clearTimeout(u);
      };
    } : null;
  }
  function On() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Lf(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Dn = null;
  function Lf(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Dn = /* @__PURE__ */ new Map(), t.forEach(Uh, l), Dn = null, On.call(l));
  }
  function Uh(l, t) {
    if (!(t.state.loading & 4)) {
      var u = Dn.get(l);
      if (u) var a = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Dn.set(l, u);
        for (var e = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < e.length; n++) {
          var c = e[n];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (u.set(c.dataset.precedence, c), a = c);
        }
        a && u.set(null, a);
      }
      e = t.instance, c = e.getAttribute("data-precedence"), n = u.get(c) || a, n === a && u.set(null, e), u.set(c, e), this.count++, a = On.bind(this), e.addEventListener("load", a), e.addEventListener("error", a), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4;
    }
  }
  var de = {
    $$typeof: cl,
    Provider: null,
    Consumer: null,
    _currentValue: G,
    _currentValue2: G,
    _threadCount: 0
  };
  function Nh(l, t, u, a, e, n, c, f) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Cn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Cn(0), this.hiddenUpdates = Cn(null), this.identifierPrefix = a, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = f, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Z0(l, t, u, a, e, n, c, f, i, y, g, E) {
    return l = new Nh(
      l,
      t,
      u,
      c,
      f,
      i,
      y,
      E
    ), t = 1, n === !0 && (t |= 24), n = et(3, null, null, t), l.current = n, n.stateNode = l, t = zc(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: a,
      isDehydrated: u,
      cache: t
    }, Rc(n), l;
  }
  function V0(l) {
    return l ? (l = Wu, l) : Wu;
  }
  function L0(l, t, u, a, e, n) {
    e = V0(e), a.context === null ? a.context = e : a.pendingContext = e, a = $t(t), a.payload = { element: u }, n = n === void 0 ? null : n, n !== null && (a.callback = n), u = Ft(l, a, t), u !== null && (st(u, l, t), Qa(u, l, t));
  }
  function K0(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < t ? u : t;
    }
  }
  function Kf(l, t) {
    K0(l, t), (l = l.alternate) && K0(l, t);
  }
  function J0(l) {
    if (l.tag === 13) {
      var t = ku(l, 67108864);
      t !== null && st(t, l, 67108864), Kf(l, 67108864);
    }
  }
  var Mn = !0;
  function Hh(l, t, u, a) {
    var e = S.T;
    S.T = null;
    var n = D.p;
    try {
      D.p = 2, Jf(l, t, u, a);
    } finally {
      D.p = n, S.T = e;
    }
  }
  function ph(l, t, u, a) {
    var e = S.T;
    S.T = null;
    var n = D.p;
    try {
      D.p = 8, Jf(l, t, u, a);
    } finally {
      D.p = n, S.T = e;
    }
  }
  function Jf(l, t, u, a) {
    if (Mn) {
      var e = wf(a);
      if (e === null)
        qf(
          l,
          t,
          a,
          Rn,
          u
        ), k0(l, a);
      else if (Bh(
        e,
        l,
        t,
        u,
        a
      ))
        a.stopPropagation();
      else if (k0(l, a), t & 4 && -1 < qh.indexOf(l)) {
        for (; e !== null; ) {
          var n = Yu(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var c = mu(n.pendingLanes);
                  if (c !== 0) {
                    var f = n;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; c; ) {
                      var i = 1 << 31 - ut(c);
                      f.entanglements[1] |= i, c &= ~i;
                    }
                    Mt(n), (el & 6) === 0 && (dn = At() + 500, ee(0));
                  }
                }
                break;
              case 13:
                f = ku(n, 2), f !== null && st(f, n, 2), hn(), Kf(n, 2);
            }
          if (n = wf(a), n === null && qf(
            l,
            t,
            a,
            Rn,
            u
          ), n === e) break;
          e = n;
        }
        e !== null && a.stopPropagation();
      } else
        qf(
          l,
          t,
          a,
          null,
          u
        );
    }
  }
  function wf(l) {
    return l = Fn(l), kf(l);
  }
  var Rn = null;
  function kf(l) {
    if (Rn = null, l = xu(l), l !== null) {
      var t = F(l);
      if (t === null) l = null;
      else {
        var u = t.tag;
        if (u === 13) {
          if (l = I(t), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Rn = l, null;
  }
  function w0(l) {
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
        switch (Sd()) {
          case ci:
            return 2;
          case fi:
            return 8;
          case be:
          case bd:
            return 32;
          case ii:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Wf = !1, ou = null, du = null, vu = null, ve = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), hu = [], qh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function k0(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        ou = null;
        break;
      case "dragenter":
      case "dragleave":
        du = null;
        break;
      case "mouseover":
      case "mouseout":
        vu = null;
        break;
      case "pointerover":
      case "pointerout":
        ve.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        he.delete(t.pointerId);
    }
  }
  function ye(l, t, u, a, e, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: u,
      eventSystemFlags: a,
      nativeEvent: n,
      targetContainers: [e]
    }, t !== null && (t = Yu(t), t !== null && J0(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function Bh(l, t, u, a, e) {
    switch (t) {
      case "focusin":
        return ou = ye(
          ou,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "dragenter":
        return du = ye(
          du,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "mouseover":
        return vu = ye(
          vu,
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
          ye(
            ve.get(n) || null,
            l,
            t,
            u,
            a,
            e
          )
        ), !0;
      case "gotpointercapture":
        return n = e.pointerId, he.set(
          n,
          ye(
            he.get(n) || null,
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
  function W0(l) {
    var t = xu(l.target);
    if (t !== null) {
      var u = F(t);
      if (u !== null) {
        if (t = u.tag, t === 13) {
          if (t = I(u), t !== null) {
            l.blockedOn = t, Md(l.priority, function() {
              if (u.tag === 13) {
                var a = it();
                a = Xn(a);
                var e = ku(u, a);
                e !== null && st(e, u, a), Kf(u, a);
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
  function Un(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var u = wf(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var a = new u.constructor(
          u.type,
          u
        );
        $n = a, u.target.dispatchEvent(a), $n = null;
      } else
        return t = Yu(u), t !== null && J0(t), l.blockedOn = u, !1;
      t.shift();
    }
    return !0;
  }
  function $0(l, t, u) {
    Un(l) && u.delete(t);
  }
  function xh() {
    Wf = !1, ou !== null && Un(ou) && (ou = null), du !== null && Un(du) && (du = null), vu !== null && Un(vu) && (vu = null), ve.forEach($0), he.forEach($0);
  }
  function Nn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, Wf || (Wf = !0, _.unstable_scheduleCallback(
      _.unstable_NormalPriority,
      xh
    )));
  }
  var Hn = null;
  function F0(l) {
    Hn !== l && (Hn = l, _.unstable_scheduleCallback(
      _.unstable_NormalPriority,
      function() {
        Hn === l && (Hn = null);
        for (var t = 0; t < l.length; t += 3) {
          var u = l[t], a = l[t + 1], e = l[t + 2];
          if (typeof a != "function") {
            if (kf(a || u) === null)
              continue;
            break;
          }
          var n = Yu(u);
          n !== null && (l.splice(t, 3), t -= 3, wc(
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
      return Nn(i, l);
    }
    ou !== null && Nn(ou, l), du !== null && Nn(du, l), vu !== null && Nn(vu, l), ve.forEach(t), he.forEach(t);
    for (var u = 0; u < hu.length; u++) {
      var a = hu[u];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < hu.length && (u = hu[0], u.blockedOn === null); )
      W0(u), u.blockedOn === null && hu.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (a = 0; a < u.length; a += 3) {
        var e = u[a], n = u[a + 1], c = e[Wl] || null;
        if (typeof n == "function")
          c || F0(u);
        else if (c) {
          var f = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, c = n[Wl] || null)
              f = c.formAction;
            else if (kf(e) !== null) continue;
          } else f = c.action;
          typeof f == "function" ? u[a + 1] = f : (u.splice(a, 3), a -= 3), F0(u);
        }
      }
  }
  function $f(l) {
    this._internalRoot = l;
  }
  pn.prototype.render = $f.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(h(409));
    var u = t.current, a = it();
    L0(u, a, l, t, null, null);
  }, pn.prototype.unmount = $f.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      L0(l.current, 2, null, l, null, null), hn(), t[Bu] = null;
    }
  };
  function pn(l) {
    this._internalRoot = l;
  }
  pn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = hi();
      l = { blockedOn: null, target: l, priority: t };
      for (var u = 0; u < hu.length && t !== 0 && t < hu[u].priority; u++) ;
      hu.splice(u, 0, l), u === 0 && W0(l);
    }
  };
  var I0 = p.version;
  if (I0 !== "19.1.1")
    throw Error(
      h(
        527,
        I0,
        "19.1.1"
      )
    );
  D.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(h(188)) : (l = Object.keys(l).join(","), Error(h(268, l)));
    return l = O(t), l = l !== null ? T(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Yh = {
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
        ba = qn.inject(
          Yh
        ), tt = qn;
      } catch {
      }
  }
  return ge.createRoot = function(l, t) {
    if (!V(l)) throw Error(h(299));
    var u = !1, a = "", e = yo, n = ro, c = mo, f = null;
    return t != null && (t.unstable_strictMode === !0 && (u = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (f = t.unstable_transitionCallbacks)), t = Z0(
      l,
      1,
      !1,
      null,
      null,
      u,
      a,
      e,
      n,
      c,
      f,
      null
    ), l[Bu] = t.current, pf(l), new $f(t);
  }, ge.hydrateRoot = function(l, t, u) {
    if (!V(l)) throw Error(h(299));
    var a = !1, e = "", n = yo, c = ro, f = mo, i = null, y = null;
    return u != null && (u.unstable_strictMode === !0 && (a = !0), u.identifierPrefix !== void 0 && (e = u.identifierPrefix), u.onUncaughtError !== void 0 && (n = u.onUncaughtError), u.onCaughtError !== void 0 && (c = u.onCaughtError), u.onRecoverableError !== void 0 && (f = u.onRecoverableError), u.unstable_transitionCallbacks !== void 0 && (i = u.unstable_transitionCallbacks), u.formState !== void 0 && (y = u.formState)), t = Z0(
      l,
      1,
      !0,
      t,
      u ?? null,
      a,
      e,
      n,
      c,
      f,
      i,
      y
    ), t.context = V0(null), u = t.current, a = it(), a = Xn(a), e = $t(a), e.callback = null, Ft(u, e, a), u = a, t.current.lanes = u, Ea(t, u), Mt(t), l[Bu] = t.current, pf(l), new pn(t);
  }, ge.version = "19.1.1", ge;
}
var id;
function Jh() {
  if (id) return Pf.exports;
  id = 1;
  function _() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_);
      } catch (p) {
        console.error(p);
      }
  }
  return _(), Pf.exports = Kh(), Pf.exports;
}
var wh = Jh();
const kh = () => {
  const [_, p] = al.useState({
    openNewTab: "1",
    searchRule: ["url", "title", "parentTitle"],
    useDefaultSearch: "0"
  }), U = async () => {
    const h = await chrome.storage.local.get("searchBookmarkSetting");
    h.searchBookmarkSetting && p({
      ..._,
      ...h.searchBookmarkSetting
    });
  };
  return al.useEffect(() => {
    U();
  }, []), {
    setting: _
  };
}, sd = "bookMarkSearch", Wh = 10, $h = (_) => {
  const p = new URL(chrome.runtime.getURL("/_favicon/"));
  return p.searchParams.set("pageUrl", _), p.searchParams.set("size", "24"), p.toString();
}, hd = (_, p = "") => {
  const U = [];
  for (const h of _) {
    const V = p ? `${p}/${h.title}` : h.title;
    h.url && h.title ? U.push({
      url: h.url,
      title: h.title,
      id: h.id,
      parentId: h.parentId,
      parentTitle: V,
      faviconURL: $h(h.url)
    }) : Array.isArray(h.children) && U.push(
      ...hd(h.children, V)
    );
  }
  return U;
}, Fh = async () => {
  try {
    return hd(await chrome.bookmarks.getTree());
  } catch (_) {
    return console.error(_), [];
  }
}, Ih = () => new Promise((_) => {
  chrome.storage.local.get(sd, (p) => {
    _(p[sd] || []);
  });
}), Ph = (_, p) => _ && p ? p.toLowerCase().includes(_.toLowerCase()) : !1, od = (_) => _ ? new URL(_).hostname : "", yd = () => {
  window.close();
}, ly = () => {
  const [_, p] = al.useState([]), [U, h] = al.useState([]), [V, F] = al.useState(!1), [I, k] = al.useState(""), [O, T] = al.useState([]), [N, W] = al.useState(""), { setting: P } = kh();
  al.useEffect(() => {
    if (!I) {
      T(U), W(U[0]?.id || "");
      return;
    }
    const q = P.searchRule || ["url", "title", "parentTitle"], rl = Array.from({
      length: q.length
    }), vl = /* @__PURE__ */ new Set(), cl = (j) => _.filter((El) => {
      if (vl.has(El.id))
        return !1;
      const hl = Ph(I, Reflect.get(El, j));
      return hl && vl.add(El.id), hl;
    }).sort((El, hl) => {
      const ml = Reflect.get(El, j) || "", Hl = Reflect.get(hl, j) || "", wl = I.toLowerCase();
      if (j === "title")
        return ml.length - Hl.length;
      if (j === "url") {
        const Bl = ml.toLowerCase().indexOf(wl), zl = Hl.toLowerCase().indexOf(wl);
        return Bl - zl;
      }
      return 0;
    }), gl = rl.reduce(
      (j, El, hl) => {
        const ml = q[hl], Hl = cl(ml);
        return Hl.length && j.push(...Hl), j;
      },
      []
    );
    T(gl), W(gl[0]?.id || "");
  }, [I, _, U, P.searchRule]), al.useEffect(() => {
    F(!0), Promise.all([Fh(), Ih()]).then(
      ([q, rl]) => {
        p(q);
        const vl = new Map(q.map((gl) => [gl.id, gl])), cl = rl.reduce(
          (gl, j) => (vl.has(j) && gl.push(vl.get(j)), gl),
          []
        );
        h(cl), cl.length && (W(cl[0].id), T(cl)), F(!1);
      }
    );
  }, []);
  const [Ul, Nl] = al.useState(!1);
  return {
    loading: V,
    keyword: I,
    setKeyword: k,
    searchBookmarks: O,
    selectedId: N,
    setSelectedId: W,
    open: async (q, rl) => {
      const vl = await chrome.tabs.query({
        active: !0,
        currentWindow: !0
      }), cl = vl[0]?.url || "", gl = ["about:blank", "chrome://newtab/"].includes(cl);
      try {
        if (Ul)
          return;
        const { useDefaultSearch: j, openNewTab: El } = P;
        if (!q && I && +j == 1)
          await chrome.search.query({
            disposition: "NEW_TAB",
            text: I
          });
        else {
          const hl = _.find((Bl) => Bl.id === q);
          if (!hl)
            return;
          const ml = [...U], Hl = ml.findIndex((Bl) => Bl.id === q);
          Hl > -1 && ml.splice(Hl, 1), ml.unshift(hl), ml.length > Wh && ml.pop(), h(ml);
          let wl;
          if (!rl && +El == 0) {
            const Bl = await chrome.tabs.query({}), zl = od(hl.url);
            Bl?.length && zl && (wl = Bl.find((Rt) => od(Rt.url) === zl));
          }
          wl ? await Promise.all([
            // 切换激活的tab
            chrome.tabs.update(wl.id, { active: !0 }),
            () => {
              wl.windowId && chrome.windows.update(wl.windowId, { focused: !0 });
            }
          ]) : gl ? await chrome.tabs.update(vl[0].id, { url: hl.url }) : await chrome.tabs.create({ url: hl.url });
        }
        yd(), Nl(!0);
      } catch (j) {
        console.error(j), alert(
          "出现未知错误,请刷新重试，或者提交issue至：https://github.com/llxq/bookmark-search/issues"
        );
      }
    }
  };
};
function ai(_) {
  const p = al.useRef(_);
  return al.useEffect(() => {
    p.current = _;
  }, [_]), p;
}
const ty = () => {
  const _ = al.useRef(null), [p, U] = al.useState(!1), h = ai(p), V = al.useRef(null), {
    keyword: F,
    setKeyword: I,
    searchBookmarks: k,
    open: O,
    selectedId: T,
    setSelectedId: N
  } = ly(), W = ai(k), P = ai(T), [Ul, Nl] = al.useState({ top: 0, height: 0 }), Jl = al.useCallback((q) => {
    if (h.current)
      return;
    if (q.key === "Escape") {
      yd();
      return;
    }
    const rl = W.current.findIndex(
      (vl) => vl.id === P.current
    );
    if (rl > -1) {
      if (q.key === "ArrowUp") {
        const vl = rl === 0 ? W.current.length - 1 : rl - 1;
        N(W.current[vl].id), q.preventDefault();
      }
      if (q.key === "ArrowDown") {
        const vl = rl === W.current.length - 1 ? 0 : rl + 1;
        N(W.current[vl].id), q.preventDefault();
      }
    }
  }, []);
  return al.useLayoutEffect(() => (window.addEventListener("keydown", Jl), Nl(
    V.current?.getBoundingClientRect() ?? {
      top: 0,
      height: 0
    }
  ), () => {
    window.removeEventListener("keydown", Jl);
  }), []), al.useEffect(() => {
    const q = document.querySelector(`[data-id="${T}"]`);
    if (q) {
      const { top: rl, height: vl } = q.getBoundingClientRect(), { top: cl, height: gl } = Ul;
      rl >= cl ? rl + vl <= cl + gl || q.scrollIntoView({
        block: "end"
      }) : q.scrollIntoView({
        block: "start"
      });
    }
  }, [T, P]), /* @__PURE__ */ X.jsxs("div", { className: "search__container", children: [
    /* @__PURE__ */ X.jsxs("div", { className: "search__input-container", children: [
      /* @__PURE__ */ X.jsx("div", { className: "tips", children: "Enter 打开选中项、Esc 取消、↑ 或 ↓ 切换选中项" }),
      /* @__PURE__ */ X.jsx(
        "input",
        {
          placeholder: "请输入要搜索的关键字",
          type: "text",
          autoComplete: "off",
          className: "search__input",
          autoFocus: !0,
          ref: _,
          value: F,
          onChange: (q) => I(q.target.value),
          onCompositionStart: () => U(!0),
          onCompositionEnd: () => U(!1),
          onKeyDown: (q) => {
            !p && q.key === "Enter" && (O(T, q.metaKey || q.ctrlKey), q.preventDefault());
          }
        }
      )
    ] }),
    /* @__PURE__ */ X.jsx("div", { className: "search__result-container", children: /* @__PURE__ */ X.jsx("div", { className: "search__list", ref: V, children: k.map((q) => /* @__PURE__ */ X.jsxs(
      "div",
      {
        onClick: (rl) => O(q.id, rl.metaKey || rl.ctrlKey),
        className: `search__list-item ${T === q.id ? "search__list-item-active" : ""}`,
        "data-id": q.id,
        title: q.title,
        children: [
          q.faviconURL && /* @__PURE__ */ X.jsx(
            "img",
            {
              className: "search__list-item-favicon",
              src: q.faviconURL,
              alt: q.title
            }
          ),
          q.title
        ]
      },
      q.id
    )) }) })
  ] });
}, uy = ({
  name: _,
  value: p,
  onChange: U,
  options: h
}) => {
  const [V, F] = al.useState(p), I = (k) => {
    const O = V.includes(k) ? V.filter((T) => T !== k) : [...V, k];
    F(O), U?.(O);
  };
  return /* @__PURE__ */ X.jsx("div", { className: "checkbox__group", children: h?.map((k) => /* @__PURE__ */ X.jsx(X.Fragment, { children: /* @__PURE__ */ X.jsxs("label", { className: "checkbox", children: [
    /* @__PURE__ */ X.jsx(
      "input",
      {
        type: "checkbox",
        name: _,
        value: k.value,
        checked: V.includes(k.value),
        onChange: () => I(k.value)
      }
    ),
    /* @__PURE__ */ X.jsx("span", { children: k.name })
  ] }) })) });
}, ei = ({
  label: _,
  tips: p,
  children: U
}) => /* @__PURE__ */ X.jsxs("div", { className: "form-item", children: [
  /* @__PURE__ */ X.jsxs("div", { className: "form-item__label", children: [
    _,
    p && /* @__PURE__ */ X.jsx("span", { className: "form-item__tips", children: p })
  ] }),
  /* @__PURE__ */ X.jsx("div", { className: "form-item__content", children: U })
] }), rd = al.createContext({
  value: "0",
  name: "",
  onChange: (_) => {
  }
}), dd = ({
  children: _,
  name: p,
  value: U,
  onChange: h
}) => {
  const [V, F] = al.useState(U), I = (k) => {
    F(k), h?.(k);
  };
  return /* @__PURE__ */ X.jsx(
    rd.Provider,
    {
      value: { value: V, name: p, onChange: I },
      children: /* @__PURE__ */ X.jsx("div", { className: "radio-group", children: _ })
    }
  );
}, Bn = ({
  value: _,
  children: p
}) => {
  const { value: U, name: h, onChange: V } = al.useContext(rd);
  return /* @__PURE__ */ X.jsxs("label", { className: "radio", children: [
    /* @__PURE__ */ X.jsx(
      "input",
      {
        type: "radio",
        name: h,
        value: _,
        checked: U === _,
        onChange: (F) => V(F.target.value)
      }
    ),
    /* @__PURE__ */ X.jsx("span", { children: p })
  ] });
}, ay = () => {
  const [_, p] = al.useState(!0), [U, h] = al.useState({
    openNewTab: "1",
    searchRule: ["url", "title", "parentTitle"],
    useDefaultSearch: "0"
  }), [V, F] = al.useState(!1), I = async () => {
    if (!V) {
      F(!0);
      try {
        await chrome.storage.local.set({ searchBookmarkSetting: U }), await chrome.notifications.create({
          type: "basic",
          iconUrl: "icons/icon.png",
          title: "提示",
          message: "设置已保存"
        });
      } finally {
        F(!1);
      }
    }
  }, k = (O) => {
    h({ ...U, ...O });
  };
  return al.useEffect(() => {
    chrome.storage.local.get("searchBookmarkSetting", (O) => {
      O.searchBookmarkSetting && h({ ...U, ...O.searchBookmarkSetting }), p(!1);
    });
  }, []), !_ && /* @__PURE__ */ X.jsxs("div", { className: "setting__container", children: [
    /* @__PURE__ */ X.jsxs("div", { className: "setting__content", children: [
      /* @__PURE__ */ X.jsx(
        ei,
        {
          label: "是否新窗口打开",
          tips: "按住 Ctrl/Command 键可以强制新窗口打开",
          children: /* @__PURE__ */ X.jsxs(
            dd,
            {
              name: "openNewTab",
              value: U.openNewTab,
              onChange: (O) => k({ openNewTab: O }),
              children: [
                /* @__PURE__ */ X.jsx(Bn, { value: "0", children: "否（通过匹配域名查找已打开页面）" }),
                /* @__PURE__ */ X.jsx(Bn, { value: "1", children: "是" })
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ X.jsx(ei, { label: "搜索规则", children: /* @__PURE__ */ X.jsx(
        uy,
        {
          name: "searchRule",
          value: U.searchRule,
          onChange: (O) => k({
            searchRule: O
          }),
          options: [
            { name: "标题", value: "title" },
            { name: "父文件夹标题", value: "parentTitle" },
            { name: "URL", value: "url" }
          ]
        }
      ) }),
      /* @__PURE__ */ X.jsx(ei, { label: "搜索为空时是否使用默认搜索引擎搜索", children: /* @__PURE__ */ X.jsxs(
        dd,
        {
          name: "useDefaultSearch",
          value: U.useDefaultSearch,
          onChange: (O) => k({ useDefaultSearch: O }),
          children: [
            /* @__PURE__ */ X.jsx(Bn, { value: "0", children: "否" }),
            /* @__PURE__ */ X.jsx(Bn, { value: "1", children: "是" })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ X.jsx("div", { className: "setting__footer", children: /* @__PURE__ */ X.jsx("div", { className: "submit-button", onClick: I, children: "保存设置" }) })
  ] });
}, vd = [
  {
    name: "搜索",
    key: "search",
    component: /* @__PURE__ */ X.jsx(ty, {})
  },
  {
    name: "设置",
    key: "setting",
    component: /* @__PURE__ */ X.jsx(ay, {})
  }
], ey = () => {
  const [_, p] = al.useState("search");
  return /* @__PURE__ */ X.jsxs("div", { className: "layout__container", children: [
    /* @__PURE__ */ X.jsx("div", { className: "layout__header", children: vd.map((U) => /* @__PURE__ */ X.jsx(
      "div",
      {
        className: `layout__tab ${U.key === _ ? "active" : ""}`,
        onClick: () => p(U.key),
        children: U.name
      },
      U.key
    )) }),
    /* @__PURE__ */ X.jsx("div", { className: "layout__content", children: vd.find((U) => U.key === _)?.component })
  ] });
};
wh.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ X.jsx(al.StrictMode, { children: /* @__PURE__ */ X.jsx(ey, {}) })
);
