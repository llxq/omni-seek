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
var ld;
function xy() {
  if (ld) return me;
  ld = 1;
  var z = Symbol.for("react.transitional.element"), J = Symbol.for("react.fragment");
  function j(m, w, P) {
    var tl = null;
    if (P !== void 0 && (tl = "" + P), w.key !== void 0 && (tl = "" + w.key), "key" in w) {
      P = {};
      for (var k in w)
        k !== "key" && (P[k] = w[k]);
    } else P = w;
    return w = P.ref, {
      $$typeof: z,
      type: m,
      key: tl,
      ref: w !== void 0 ? w : null,
      props: P
    };
  }
  return me.Fragment = J, me.jsx = j, me.jsxs = j, me;
}
var td;
function Gy() {
  return td || (td = 1, Pc.exports = xy()), Pc.exports;
}
var Z = Gy(), li = { exports: {} }, Q = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ud;
function jy() {
  if (ud) return Q;
  ud = 1;
  var z = Symbol.for("react.transitional.element"), J = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), P = Symbol.for("react.consumer"), tl = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), E = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), el = Symbol.iterator;
  function $(s) {
    return s === null || typeof s != "object" ? null : (s = el && s[el] || s["@@iterator"], typeof s == "function" ? s : null);
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
  }, Hl = Object.assign, kl = {};
  function Yl(s, A, M) {
    this.props = s, this.context = A, this.refs = kl, this.updater = M || Nl;
  }
  Yl.prototype.isReactComponent = {}, Yl.prototype.setState = function(s, A) {
    if (typeof s != "object" && typeof s != "function" && s != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, s, A, "setState");
  }, Yl.prototype.forceUpdate = function(s) {
    this.updater.enqueueForceUpdate(this, s, "forceUpdate");
  };
  function Dt() {
  }
  Dt.prototype = Yl.prototype;
  function Wl(s, A, M) {
    this.props = s, this.context = A, this.refs = kl, this.updater = M || Nl;
  }
  var X = Wl.prototype = new Dt();
  X.constructor = Wl, Hl(X, Yl.prototype), X.isPureReactComponent = !0;
  var ol = Array.isArray, B = { H: null, A: null, T: null, S: null, V: null }, il = Object.prototype.hasOwnProperty;
  function Cl(s, A, M, O, H, F) {
    return M = F.ref, {
      $$typeof: z,
      type: s,
      key: A,
      ref: M !== void 0 ? M : null,
      props: F
    };
  }
  function Ol(s, A) {
    return Cl(
      s.type,
      A,
      void 0,
      void 0,
      void 0,
      s.props
    );
  }
  function $l(s) {
    return typeof s == "object" && s !== null && s.$$typeof === z;
  }
  function Mt(s) {
    var A = { "=": "=0", ":": "=2" };
    return "$" + s.replace(/[=:]/g, function(M) {
      return A[M];
    });
  }
  var ct = /\/+/g;
  function xl(s, A) {
    return typeof s == "object" && s !== null && s.key != null ? Mt("" + s.key) : A.toString(36);
  }
  function hu() {
  }
  function ru(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (typeof s.status == "string" ? s.then(hu, hu) : (s.status = "pending", s.then(
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
  function Gl(s, A, M, O, H) {
    var F = typeof s;
    (F === "undefined" || F === "boolean") && (s = null);
    var G = !1;
    if (s === null) G = !0;
    else
      switch (F) {
        case "bigint":
        case "string":
        case "number":
          G = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case z:
            case J:
              G = !0;
              break;
            case N:
              return G = s._init, Gl(
                G(s._payload),
                A,
                M,
                O,
                H
              );
          }
      }
    if (G)
      return H = H(s), G = O === "" ? "." + xl(s, 0) : O, ol(H) ? (M = "", G != null && (M = G.replace(ct, "$&/") + "/"), Gl(H, A, M, "", function(Vt) {
        return Vt;
      })) : H != null && ($l(H) && (H = Ol(
        H,
        M + (H.key == null || s && s.key === H.key ? "" : ("" + H.key).replace(
          ct,
          "$&/"
        ) + "/") + G
      )), A.push(H)), 1;
    G = 0;
    var Fl = O === "" ? "." : O + ":";
    if (ol(s))
      for (var yl = 0; yl < s.length; yl++)
        O = s[yl], F = Fl + xl(O, yl), G += Gl(
          O,
          A,
          M,
          F,
          H
        );
    else if (yl = $(s), typeof yl == "function")
      for (s = yl.call(s), yl = 0; !(O = s.next()).done; )
        O = O.value, F = Fl + xl(O, yl++), G += Gl(
          O,
          A,
          M,
          F,
          H
        );
    else if (F === "object") {
      if (typeof s.then == "function")
        return Gl(
          ru(s),
          A,
          M,
          O,
          H
        );
      throw A = String(s), Error(
        "Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return G;
  }
  function S(s, A, M) {
    if (s == null) return s;
    var O = [], H = 0;
    return Gl(s, O, "", "", function(F) {
      return A.call(M, F, H++);
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
  var Y = typeof reportError == "function" ? reportError : function(s) {
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
  return Q.Children = {
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
      if (!$l(s))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return s;
    }
  }, Q.Component = Yl, Q.Fragment = j, Q.Profiler = w, Q.PureComponent = Wl, Q.StrictMode = m, Q.Suspense = _, Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = B, Q.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(s) {
      return B.H.useMemoCache(s);
    }
  }, Q.cache = function(s) {
    return function() {
      return s.apply(null, arguments);
    };
  }, Q.cloneElement = function(s, A, M) {
    if (s == null)
      throw Error(
        "The argument must be a React element, but you passed " + s + "."
      );
    var O = Hl({}, s.props), H = s.key, F = void 0;
    if (A != null)
      for (G in A.ref !== void 0 && (F = void 0), A.key !== void 0 && (H = "" + A.key), A)
        !il.call(A, G) || G === "key" || G === "__self" || G === "__source" || G === "ref" && A.ref === void 0 || (O[G] = A[G]);
    var G = arguments.length - 2;
    if (G === 1) O.children = M;
    else if (1 < G) {
      for (var Fl = Array(G), yl = 0; yl < G; yl++)
        Fl[yl] = arguments[yl + 2];
      O.children = Fl;
    }
    return Cl(s.type, H, void 0, void 0, F, O);
  }, Q.createContext = function(s) {
    return s = {
      $$typeof: tl,
      _currentValue: s,
      _currentValue2: s,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, s.Provider = s, s.Consumer = {
      $$typeof: P,
      _context: s
    }, s;
  }, Q.createElement = function(s, A, M) {
    var O, H = {}, F = null;
    if (A != null)
      for (O in A.key !== void 0 && (F = "" + A.key), A)
        il.call(A, O) && O !== "key" && O !== "__self" && O !== "__source" && (H[O] = A[O]);
    var G = arguments.length - 2;
    if (G === 1) H.children = M;
    else if (1 < G) {
      for (var Fl = Array(G), yl = 0; yl < G; yl++)
        Fl[yl] = arguments[yl + 2];
      H.children = Fl;
    }
    if (s && s.defaultProps)
      for (O in G = s.defaultProps, G)
        H[O] === void 0 && (H[O] = G[O]);
    return Cl(s, F, void 0, void 0, null, H);
  }, Q.createRef = function() {
    return { current: null };
  }, Q.forwardRef = function(s) {
    return { $$typeof: k, render: s };
  }, Q.isValidElement = $l, Q.lazy = function(s) {
    return {
      $$typeof: N,
      _payload: { _status: -1, _result: s },
      _init: D
    };
  }, Q.memo = function(s, A) {
    return {
      $$typeof: E,
      type: s,
      compare: A === void 0 ? null : A
    };
  }, Q.startTransition = function(s) {
    var A = B.T, M = {};
    B.T = M;
    try {
      var O = s(), H = B.S;
      H !== null && H(M, O), typeof O == "object" && O !== null && typeof O.then == "function" && O.then(sl, Y);
    } catch (F) {
      Y(F);
    } finally {
      B.T = A;
    }
  }, Q.unstable_useCacheRefresh = function() {
    return B.H.useCacheRefresh();
  }, Q.use = function(s) {
    return B.H.use(s);
  }, Q.useActionState = function(s, A, M) {
    return B.H.useActionState(s, A, M);
  }, Q.useCallback = function(s, A) {
    return B.H.useCallback(s, A);
  }, Q.useContext = function(s) {
    return B.H.useContext(s);
  }, Q.useDebugValue = function() {
  }, Q.useDeferredValue = function(s, A) {
    return B.H.useDeferredValue(s, A);
  }, Q.useEffect = function(s, A, M) {
    var O = B.H;
    if (typeof M == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return O.useEffect(s, A);
  }, Q.useId = function() {
    return B.H.useId();
  }, Q.useImperativeHandle = function(s, A, M) {
    return B.H.useImperativeHandle(s, A, M);
  }, Q.useInsertionEffect = function(s, A) {
    return B.H.useInsertionEffect(s, A);
  }, Q.useLayoutEffect = function(s, A) {
    return B.H.useLayoutEffect(s, A);
  }, Q.useMemo = function(s, A) {
    return B.H.useMemo(s, A);
  }, Q.useOptimistic = function(s, A) {
    return B.H.useOptimistic(s, A);
  }, Q.useReducer = function(s, A, M) {
    return B.H.useReducer(s, A, M);
  }, Q.useRef = function(s) {
    return B.H.useRef(s);
  }, Q.useState = function(s) {
    return B.H.useState(s);
  }, Q.useSyncExternalStore = function(s, A, M) {
    return B.H.useSyncExternalStore(
      s,
      A,
      M
    );
  }, Q.useTransition = function() {
    return B.H.useTransition();
  }, Q.version = "19.1.1", Q;
}
var ad;
function ci() {
  return ad || (ad = 1, li.exports = jy()), li.exports;
}
var ml = ci(), ti = { exports: {} }, ge = {}, ui = { exports: {} }, ai = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ed;
function Xy() {
  return ed || (ed = 1, (function(z) {
    function J(S, D) {
      var Y = S.length;
      S.push(D);
      l: for (; 0 < Y; ) {
        var sl = Y - 1 >>> 1, s = S[sl];
        if (0 < w(s, D))
          S[sl] = D, S[Y] = s, Y = sl;
        else break l;
      }
    }
    function j(S) {
      return S.length === 0 ? null : S[0];
    }
    function m(S) {
      if (S.length === 0) return null;
      var D = S[0], Y = S.pop();
      if (Y !== D) {
        S[0] = Y;
        l: for (var sl = 0, s = S.length, A = s >>> 1; sl < A; ) {
          var M = 2 * (sl + 1) - 1, O = S[M], H = M + 1, F = S[H];
          if (0 > w(O, Y))
            H < s && 0 > w(F, O) ? (S[sl] = F, S[H] = Y, sl = H) : (S[sl] = O, S[M] = Y, sl = M);
          else if (H < s && 0 > w(F, Y))
            S[sl] = F, S[H] = Y, sl = H;
          else break l;
        }
      }
      return D;
    }
    function w(S, D) {
      var Y = S.sortIndex - D.sortIndex;
      return Y !== 0 ? Y : S.id - D.id;
    }
    if (z.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var P = performance;
      z.unstable_now = function() {
        return P.now();
      };
    } else {
      var tl = Date, k = tl.now();
      z.unstable_now = function() {
        return tl.now() - k;
      };
    }
    var _ = [], E = [], N = 1, el = null, $ = 3, Nl = !1, Hl = !1, kl = !1, Yl = !1, Dt = typeof setTimeout == "function" ? setTimeout : null, Wl = typeof clearTimeout == "function" ? clearTimeout : null, X = typeof setImmediate < "u" ? setImmediate : null;
    function ol(S) {
      for (var D = j(E); D !== null; ) {
        if (D.callback === null) m(E);
        else if (D.startTime <= S)
          m(E), D.sortIndex = D.expirationTime, J(_, D);
        else break;
        D = j(E);
      }
    }
    function B(S) {
      if (kl = !1, ol(S), !Hl)
        if (j(_) !== null)
          Hl = !0, il || (il = !0, xl());
        else {
          var D = j(E);
          D !== null && Gl(B, D.startTime - S);
        }
    }
    var il = !1, Cl = -1, Ol = 5, $l = -1;
    function Mt() {
      return Yl ? !0 : !(z.unstable_now() - $l < Ol);
    }
    function ct() {
      if (Yl = !1, il) {
        var S = z.unstable_now();
        $l = S;
        var D = !0;
        try {
          l: {
            Hl = !1, kl && (kl = !1, Wl(Cl), Cl = -1), Nl = !0;
            var Y = $;
            try {
              t: {
                for (ol(S), el = j(_); el !== null && !(el.expirationTime > S && Mt()); ) {
                  var sl = el.callback;
                  if (typeof sl == "function") {
                    el.callback = null, $ = el.priorityLevel;
                    var s = sl(
                      el.expirationTime <= S
                    );
                    if (S = z.unstable_now(), typeof s == "function") {
                      el.callback = s, ol(S), D = !0;
                      break t;
                    }
                    el === j(_) && m(_), ol(S);
                  } else m(_);
                  el = j(_);
                }
                if (el !== null) D = !0;
                else {
                  var A = j(E);
                  A !== null && Gl(
                    B,
                    A.startTime - S
                  ), D = !1;
                }
              }
              break l;
            } finally {
              el = null, $ = Y, Nl = !1;
            }
            D = void 0;
          }
        } finally {
          D ? xl() : il = !1;
        }
      }
    }
    var xl;
    if (typeof X == "function")
      xl = function() {
        X(ct);
      };
    else if (typeof MessageChannel < "u") {
      var hu = new MessageChannel(), ru = hu.port2;
      hu.port1.onmessage = ct, xl = function() {
        ru.postMessage(null);
      };
    } else
      xl = function() {
        Dt(ct, 0);
      };
    function Gl(S, D) {
      Cl = Dt(function() {
        S(z.unstable_now());
      }, D);
    }
    z.unstable_IdlePriority = 5, z.unstable_ImmediatePriority = 1, z.unstable_LowPriority = 4, z.unstable_NormalPriority = 3, z.unstable_Profiling = null, z.unstable_UserBlockingPriority = 2, z.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, z.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Ol = 0 < S ? Math.floor(1e3 / S) : 5;
    }, z.unstable_getCurrentPriorityLevel = function() {
      return $;
    }, z.unstable_next = function(S) {
      switch ($) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = $;
      }
      var Y = $;
      $ = D;
      try {
        return S();
      } finally {
        $ = Y;
      }
    }, z.unstable_requestPaint = function() {
      Yl = !0;
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
      var Y = $;
      $ = S;
      try {
        return D();
      } finally {
        $ = Y;
      }
    }, z.unstable_scheduleCallback = function(S, D, Y) {
      var sl = z.unstable_now();
      switch (typeof Y == "object" && Y !== null ? (Y = Y.delay, Y = typeof Y == "number" && 0 < Y ? sl + Y : sl) : Y = sl, S) {
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
      return s = Y + s, S = {
        id: N++,
        callback: D,
        priorityLevel: S,
        startTime: Y,
        expirationTime: s,
        sortIndex: -1
      }, Y > sl ? (S.sortIndex = Y, J(E, S), j(_) === null && S === j(E) && (kl ? (Wl(Cl), Cl = -1) : kl = !0, Gl(B, Y - sl))) : (S.sortIndex = s, J(_, S), Hl || Nl || (Hl = !0, il || (il = !0, xl()))), S;
    }, z.unstable_shouldYield = Mt, z.unstable_wrapCallback = function(S) {
      var D = $;
      return function() {
        var Y = $;
        $ = D;
        try {
          return S.apply(this, arguments);
        } finally {
          $ = Y;
        }
      };
    };
  })(ai)), ai;
}
var nd;
function Qy() {
  return nd || (nd = 1, ui.exports = Xy()), ui.exports;
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
var fd;
function Cy() {
  if (fd) return Ql;
  fd = 1;
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
  function j() {
  }
  var m = {
    d: {
      f: j,
      r: function() {
        throw Error(J(522));
      },
      D: j,
      C: j,
      L: j,
      m: j,
      X: j,
      S: j,
      M: j
    },
    p: 0,
    findDOMNode: null
  }, w = Symbol.for("react.portal");
  function P(_, E, N) {
    var el = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: w,
      key: el == null ? null : "" + el,
      children: _,
      containerInfo: E,
      implementation: N
    };
  }
  var tl = z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function k(_, E) {
    if (_ === "font") return "";
    if (typeof E == "string")
      return E === "use-credentials" ? E : "";
  }
  return Ql.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = m, Ql.createPortal = function(_, E) {
    var N = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!E || E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11)
      throw Error(J(299));
    return P(_, E, null, N);
  }, Ql.flushSync = function(_) {
    var E = tl.T, N = m.p;
    try {
      if (tl.T = null, m.p = 2, _) return _();
    } finally {
      tl.T = E, m.p = N, m.d.f();
    }
  }, Ql.preconnect = function(_, E) {
    typeof _ == "string" && (E ? (E = E.crossOrigin, E = typeof E == "string" ? E === "use-credentials" ? E : "" : void 0) : E = null, m.d.C(_, E));
  }, Ql.prefetchDNS = function(_) {
    typeof _ == "string" && m.d.D(_);
  }, Ql.preinit = function(_, E) {
    if (typeof _ == "string" && E && typeof E.as == "string") {
      var N = E.as, el = k(N, E.crossOrigin), $ = typeof E.integrity == "string" ? E.integrity : void 0, Nl = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
      N === "style" ? m.d.S(
        _,
        typeof E.precedence == "string" ? E.precedence : void 0,
        {
          crossOrigin: el,
          integrity: $,
          fetchPriority: Nl
        }
      ) : N === "script" && m.d.X(_, {
        crossOrigin: el,
        integrity: $,
        fetchPriority: Nl,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0
      });
    }
  }, Ql.preinitModule = function(_, E) {
    if (typeof _ == "string")
      if (typeof E == "object" && E !== null) {
        if (E.as == null || E.as === "script") {
          var N = k(
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
  }, Ql.preload = function(_, E) {
    if (typeof _ == "string" && typeof E == "object" && E !== null && typeof E.as == "string") {
      var N = E.as, el = k(N, E.crossOrigin);
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
  }, Ql.preloadModule = function(_, E) {
    if (typeof _ == "string")
      if (E) {
        var N = k(E.as, E.crossOrigin);
        m.d.m(_, {
          as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
          crossOrigin: N,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0
        });
      } else m.d.m(_);
  }, Ql.requestFormReset = function(_) {
    m.d.r(_);
  }, Ql.unstable_batchedUpdates = function(_, E) {
    return _(E);
  }, Ql.useFormState = function(_, E, N) {
    return tl.H.useFormState(_, E, N);
  }, Ql.useFormStatus = function() {
    return tl.H.useHostTransitionStatus();
  }, Ql.version = "19.1.1", Ql;
}
var cd;
function Zy() {
  if (cd) return ei.exports;
  cd = 1;
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
var id;
function Vy() {
  if (id) return ge;
  id = 1;
  var z = Qy(), J = ci(), j = Zy();
  function m(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        t += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function w(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function P(l) {
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
  function tl(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function k(l) {
    if (P(l) !== l)
      throw Error(m(188));
  }
  function _(l) {
    var t = l.alternate;
    if (!t) {
      if (t = P(l), t === null) throw Error(m(188));
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
  var N = Object.assign, el = Symbol.for("react.element"), $ = Symbol.for("react.transitional.element"), Nl = Symbol.for("react.portal"), Hl = Symbol.for("react.fragment"), kl = Symbol.for("react.strict_mode"), Yl = Symbol.for("react.profiler"), Dt = Symbol.for("react.provider"), Wl = Symbol.for("react.consumer"), X = Symbol.for("react.context"), ol = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), il = Symbol.for("react.suspense_list"), Cl = Symbol.for("react.memo"), Ol = Symbol.for("react.lazy"), $l = Symbol.for("react.activity"), Mt = Symbol.for("react.memo_cache_sentinel"), ct = Symbol.iterator;
  function xl(l) {
    return l === null || typeof l != "object" ? null : (l = ct && l[ct] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var hu = Symbol.for("react.client.reference");
  function ru(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === hu ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Hl:
        return "Fragment";
      case Yl:
        return "Profiler";
      case kl:
        return "StrictMode";
      case B:
        return "Suspense";
      case il:
        return "SuspenseList";
      case $l:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Nl:
          return "Portal";
        case X:
          return (l.displayName || "Context") + ".Provider";
        case Wl:
          return (l._context.displayName || "Context") + ".Consumer";
        case ol:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case Cl:
          return t = l.displayName || null, t !== null ? t : ru(l.type) || "Memo";
        case Ol:
          t = l._payload, l = l._init;
          try {
            return ru(l(t));
          } catch {
          }
      }
    return null;
  }
  var Gl = Array.isArray, S = J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = j.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = {
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
  function O(l, t) {
    s++, sl[s] = l.current, l.current = t;
  }
  var H = A(null), F = A(null), G = A(null), Fl = A(null);
  function yl(l, t) {
    switch (O(G, t), O(F, l), O(H, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Rv(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = Rv(t), l = Uv(t, l);
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
  function Vt() {
    M(H), M(F), M(G);
  }
  function Gn(l) {
    l.memoizedState !== null && O(Fl, l);
    var t = H.current, u = Uv(t, l.type);
    t !== u && (O(F, l), O(H, u));
  }
  function be(l) {
    F.current === l && (M(H), M(F)), Fl.current === l && (M(Fl), de._currentValue = Y);
  }
  var jn = Object.prototype.hasOwnProperty, Xn = z.unstable_scheduleCallback, Qn = z.unstable_cancelCallback, yd = z.unstable_shouldYield, hd = z.unstable_requestPaint, Tt = z.unstable_now, rd = z.unstable_getCurrentPriorityLevel, ii = z.unstable_ImmediatePriority, si = z.unstable_UserBlockingPriority, Te = z.unstable_NormalPriority, md = z.unstable_LowPriority, vi = z.unstable_IdlePriority, gd = z.log, Sd = z.unstable_setDisableYieldValue, ba = null, Il = null;
  function Lt(l) {
    if (typeof gd == "function" && Sd(l), Il && typeof Il.setStrictMode == "function")
      try {
        Il.setStrictMode(ba, l);
      } catch {
      }
  }
  var Pl = Math.clz32 ? Math.clz32 : Ed, bd = Math.log, Td = Math.LN2;
  function Ed(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (bd(l) / Td | 0) | 0;
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
  function Ad(l, t) {
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
    var l = Ee;
    return Ee <<= 1, (Ee & 4194048) === 0 && (Ee = 256), l;
  }
  function oi() {
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
  function zd(l, t, u, a, e, n) {
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
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : kv(l.type));
  }
  function _d(l, t) {
    var u = D.p;
    try {
      return D.p = l, t();
    } finally {
      D.p = u;
    }
  }
  var Kt = Math.random().toString(36).slice(2), jl = "__reactFiber$" + Kt, Vl = "__reactProps$" + Kt, Bu = "__reactContainer$" + Kt, Ln = "__reactEvents$" + Kt, Od = "__reactListeners$" + Kt, Dd = "__reactHandles$" + Kt, mi = "__reactResources$" + Kt, Aa = "__reactMarker$" + Kt;
  function Kn(l) {
    delete l[jl], delete l[Vl], delete l[Ln], delete l[Od], delete l[Dd];
  }
  function Yu(l) {
    var t = l[jl];
    if (t) return t;
    for (var u = l.parentNode; u; ) {
      if (t = u[Bu] || u[jl]) {
        if (u = t.alternate, t.child !== null || u !== null && u.child !== null)
          for (l = pv(l); l !== null; ) {
            if (u = l[jl]) return u;
            l = pv(l);
          }
        return t;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function xu(l) {
    if (l = l[jl] || l[Bu]) {
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
  function Dl(l) {
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
  var Md = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), bi = {}, Ti = {};
  function Rd(l) {
    return jn.call(Ti, l) ? !0 : jn.call(bi, l) ? !1 : Md.test(l) ? Ti[l] = !0 : (bi[l] = !0, !1);
  }
  function _e(l, t, u) {
    if (Rd(t))
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
  function Rt(l, t, u, a) {
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
  function Ud(l) {
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
        t += Ud(l), l = l.return;
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
  function Nd(l) {
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
    l._valueTracker || (l._valueTracker = Nd(l));
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
  var Hd = /[\n"\\]/g;
  function st(l) {
    return l.replace(
      Hd,
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
        if (Gl(a)) {
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
  var pd = /* @__PURE__ */ new Map([
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
  var In = null;
  function Pn(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Zu = null, Vu = null;
  function Ni(l) {
    var t = xu(l);
    if (t && (l = t.stateNode)) {
      var u = l[Vl] || null;
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
                var e = a[Vl] || null;
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
    var a = u[Vl] || null;
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
  var Ut = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), tf = !1;
  if (Ut)
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
  var Jt = null, uf = null, Ue = null;
  function qi() {
    if (Ue) return Ue;
    var l, t = uf, u = t.length, a, e = "value" in Jt ? Jt.value : Jt.textContent, n = e.length;
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
  function pi() {
    return !1;
  }
  function Ll(l) {
    function t(u, a, e, n, f) {
      this._reactName = u, this._targetInst = e, this.type = a, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (u = l[c], this[c] = u ? u(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? He : pi, this.isPropagationStopped = pi, this;
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
  }, qe = Ll(Su), Da = N({}, Su, { view: 0, detail: 0 }), Yd = Ll(Da), af, ef, Ma, pe = N({}, Da, {
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
  }), Bi = Ll(pe), xd = N({}, pe, { dataTransfer: 0 }), Gd = Ll(xd), jd = N({}, Da, { relatedTarget: 0 }), nf = Ll(jd), Xd = N({}, Su, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Qd = Ll(Xd), Cd = N({}, Su, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Zd = Ll(Cd), Vd = N({}, Su, { data: 0 }), Yi = Ll(Vd), Ld = {
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
  }, Kd = {
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
  }, Jd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function wd(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = Jd[l]) ? !!t[l] : !1;
  }
  function ff() {
    return wd;
  }
  var kd = N({}, Da, {
    key: function(l) {
      if (l.key) {
        var t = Ld[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Ne(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Kd[l.keyCode] || "Unidentified" : "";
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
  }), Wd = Ll(kd), $d = N({}, pe, {
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
  }), xi = Ll($d), Fd = N({}, Da, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ff
  }), Id = Ll(Fd), Pd = N({}, Su, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), lo = Ll(Pd), to = N({}, pe, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), uo = Ll(to), ao = N({}, Su, {
    newState: 0,
    oldState: 0
  }), eo = Ll(ao), no = [9, 13, 27, 32], cf = Ut && "CompositionEvent" in window, Ra = null;
  Ut && "documentMode" in document && (Ra = document.documentMode);
  var fo = Ut && "TextEvent" in window && !Ra, Gi = Ut && (!cf || Ra && 8 < Ra && 11 >= Ra), ji = " ", Xi = !1;
  function Qi(l, t) {
    switch (l) {
      case "keyup":
        return no.indexOf(t.keyCode) !== -1;
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
  function co(l, t) {
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
  function io(l, t) {
    if (Lu)
      return l === "compositionend" || !cf && Qi(l, t) ? (l = qi(), Ue = uf = Jt = null, Lu = !1, l) : null;
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
  var so = {
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
    return t === "input" ? !!so[l.type] : t === "textarea";
  }
  function Vi(l, t, u, a) {
    Zu ? Vu ? Vu.push(a) : Vu = [a] : Zu = a, t = Tn(t, "onChange"), 0 < t.length && (u = new qe(
      "onChange",
      "change",
      null,
      u,
      a
    ), l.push({ event: u, listeners: t }));
  }
  var Ua = null, Na = null;
  function vo(l) {
    zv(l, 0);
  }
  function Be(l) {
    var t = za(l);
    if (_i(t)) return l;
  }
  function Li(l, t) {
    if (l === "change") return t;
  }
  var Ki = !1;
  if (Ut) {
    var sf;
    if (Ut) {
      var vf = "oninput" in document;
      if (!vf) {
        var Ji = document.createElement("div");
        Ji.setAttribute("oninput", "return;"), vf = typeof Ji.oninput == "function";
      }
      sf = vf;
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
      ), Hi(vo, t);
    }
  }
  function oo(l, t, u) {
    l === "focusin" ? (wi(), Ua = t, Na = u, Ua.attachEvent("onpropertychange", ki)) : l === "focusout" && wi();
  }
  function yo(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Be(Na);
  }
  function ho(l, t) {
    if (l === "click") return Be(t);
  }
  function ro(l, t) {
    if (l === "input" || l === "change")
      return Be(t);
  }
  function mo(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var lt = typeof Object.is == "function" ? Object.is : mo;
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
  function df(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var go = Ut && "documentMode" in document && 11 >= document.documentMode, Ku = null, of = null, qa = null, yf = !1;
  function Pi(l, t, u) {
    var a = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    yf || Ku == null || Ku !== Me(a) || (a = Ku, "selectionStart" in a && df(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), qa && Ha(qa, a) || (qa = a, a = Tn(of, "onSelect"), 0 < a.length && (t = new qe(
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
  Ut && (ls = document.createElement("div").style, "AnimationEvent" in window || (delete Ju.animationend.animation, delete Ju.animationiteration.animation, delete Ju.animationstart.animation), "TransitionEvent" in window || delete Ju.transitionend.transition);
  function Tu(l) {
    if (hf[l]) return hf[l];
    if (!Ju[l]) return l;
    var t = Ju[l], u;
    for (u in t)
      if (t.hasOwnProperty(u) && u in ls)
        return hf[l] = t[u];
    return l;
  }
  var ts = Tu("animationend"), us = Tu("animationiteration"), as = Tu("animationstart"), So = Tu("transitionrun"), bo = Tu("transitionstart"), To = Tu("transitioncancel"), es = Tu("transitionend"), ns = /* @__PURE__ */ new Map(), rf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  rf.push("scrollEnd");
  function gt(l, t) {
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
  var dt = [], wu = 0, mf = 0;
  function Ye() {
    for (var l = wu, t = mf = wu = 0; t < l; ) {
      var u = dt[t];
      dt[t++] = null;
      var a = dt[t];
      dt[t++] = null;
      var e = dt[t];
      dt[t++] = null;
      var n = dt[t];
      if (dt[t++] = null, a !== null && e !== null) {
        var f = a.pending;
        f === null ? e.next = e : (e.next = f.next, f.next = e), a.pending = e;
      }
      n !== 0 && cs(u, e, n);
    }
  }
  function xe(l, t, u, a) {
    dt[wu++] = l, dt[wu++] = t, dt[wu++] = u, dt[wu++] = a, mf |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
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
  function Eo(l, t, u, a) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function tt(l, t, u, a) {
    return new Eo(l, t, u, a);
  }
  function Sf(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Nt(l, t) {
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
        case $l:
          return l = tt(31, u, t, e), l.elementType = $l, l.lanes = n, l;
        case Hl:
          return Eu(u.children, e, n, t);
        case kl:
          f = 8, e |= 24;
          break;
        case Yl:
          return l = tt(12, u, t, e | 2), l.elementType = Yl, l.lanes = n, l;
        case B:
          return l = tt(13, u, t, e), l.elementType = B, l.lanes = n, l;
        case il:
          return l = tt(19, u, t, e), l.elementType = il, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Dt:
              case X:
                f = 10;
                break l;
              case Wl:
                f = 9;
                break l;
              case ol:
                f = 11;
                break l;
              case Cl:
                f = 14;
                break l;
              case Ol:
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
  var $u = [], Fu = 0, Xe = null, Qe = 0, ot = [], yt = 0, Au = null, Ht = 1, qt = "";
  function zu(l, t) {
    $u[Fu++] = Qe, $u[Fu++] = Xe, Xe = l, Qe = t;
  }
  function ss(l, t, u) {
    ot[yt++] = Ht, ot[yt++] = qt, ot[yt++] = Au, Au = l;
    var a = Ht;
    l = qt;
    var e = 32 - Pl(a) - 1;
    a &= ~(1 << e), u += 1;
    var n = 32 - Pl(t) + e;
    if (30 < n) {
      var f = e - e % 5;
      n = (a & (1 << f) - 1).toString(32), a >>= f, e -= f, Ht = 1 << 32 - Pl(t) + e | u << e | a, qt = n + l;
    } else
      Ht = 1 << n | u << e | a, qt = l;
  }
  function Ef(l) {
    l.return !== null && (zu(l, 1), ss(l, 1, 0));
  }
  function Af(l) {
    for (; l === Xe; )
      Xe = $u[--Fu], $u[Fu] = null, Qe = $u[--Fu], $u[Fu] = null;
    for (; l === Au; )
      Au = ot[--yt], ot[yt] = null, qt = ot[--yt], ot[yt] = null, Ht = ot[--yt], ot[yt] = null;
  }
  var Zl = null, gl = null, ll = !1, _u = null, Et = !1, zf = Error(m(519));
  function Ou(l) {
    var t = Error(m(418, ""));
    throw Ya(vt(t, l)), zf;
  }
  function vs(l) {
    var t = l.stateNode, u = l.type, a = l.memoizedProps;
    switch (t[jl] = l, t[Vl] = a, u) {
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
    u = a.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || t.textContent === "" + u || a.suppressHydrationWarning === !0 || Mv(t.textContent, u) ? (a.popover != null && (K("beforetoggle", t), K("toggle", t)), a.onScroll != null && K("scroll", t), a.onScrollEnd != null && K("scrollend", t), a.onClick != null && (t.onclick = En), t = !0) : t = !1, t || Ou(l);
  }
  function ds(l) {
    for (Zl = l.return; Zl; )
      switch (Zl.tag) {
        case 5:
        case 13:
          Et = !1;
          return;
        case 27:
        case 3:
          Et = !0;
          return;
        default:
          Zl = Zl.return;
      }
  }
  function pa(l) {
    if (l !== Zl) return !1;
    if (!ll) return ds(l), ll = !0, !1;
    var t = l.tag, u;
    if ((u = t !== 3 && t !== 27) && ((u = t === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Xc(l.type, l.memoizedProps)), u = !u), u && gl && Ou(l), ds(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(m(317));
      l: {
        for (l = l.nextSibling, t = 0; l; ) {
          if (l.nodeType === 8)
            if (u = l.data, u === "/$") {
              if (t === 0) {
                gl = bt(l.nextSibling);
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
      t === 27 ? (t = gl, iu(l.type) ? (l = Vc, Vc = null, gl = l) : gl = t) : gl = Zl ? bt(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Ba() {
    gl = Zl = null, ll = !1;
  }
  function os() {
    var l = _u;
    return l !== null && (wl === null ? wl = l : wl.push.apply(
      wl,
      l
    ), _u = null), l;
  }
  function Ya(l) {
    _u === null ? _u = [l] : _u.push(l);
  }
  var _f = A(null), Du = null, pt = null;
  function wt(l, t, u) {
    O(_f, t._currentValue), t._currentValue = u;
  }
  function Bt(l) {
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
    Du = l, pt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Xl(l) {
    return ys(Du, l);
  }
  function Ze(l, t) {
    return Du === null && Mu(l), ys(l, t);
  }
  function ys(l, t) {
    var u = t._currentValue;
    if (t = { context: t, memoizedValue: u, next: null }, pt === null) {
      if (l === null) throw Error(m(308));
      pt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else pt = pt.next = t;
    return u;
  }
  var Ao = typeof AbortController < "u" ? AbortController : function() {
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
  }, zo = z.unstable_scheduleCallback, _o = z.unstable_NormalPriority, zl = {
    $$typeof: X,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Mf() {
    return {
      controller: new Ao(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ga(l) {
    l.refCount--, l.refCount === 0 && zo(_o, function() {
      l.controller.abort();
    });
  }
  var ja = null, Rf = 0, Iu = 0, Pu = null;
  function Oo(l, t) {
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
  function Do(l, t) {
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
    typeof t == "object" && t !== null && typeof t.then == "function" && Oo(l, t), rs !== null && rs(l, t);
  };
  var Ru = A(null);
  function Uf() {
    var l = Ru.current;
    return l !== null ? l : dl.pooledCache;
  }
  function Ve(l, t) {
    t === null ? O(Ru, Ru.current) : O(Ru, t.pool);
  }
  function ms() {
    var l = Uf();
    return l === null ? null : { parent: zl._currentValue, pool: l };
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
  var kt = !1;
  function Hf(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function qf(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function Wt(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function $t(l, t, u) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (ul & 2) !== 0) {
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
  function pf(l, t) {
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
    kt = !1;
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
          h !== 0 && h === Iu && (Bf = !0), g !== null && (g = g.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var x = l, q = c;
            h = t;
            var cl = u;
            switch (q.tag) {
              case 1:
                if (x = q.payload, typeof x == "function") {
                  T = x.call(cl, T, h);
                  break l;
                }
                T = x;
                break l;
              case 3:
                x.flags = x.flags & -65537 | 128;
              case 0:
                if (x = q.payload, h = typeof x == "function" ? x.call(cl, T, h) : x, h == null) break l;
                T = N({}, T, h);
                break l;
              case 2:
                kt = !0;
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
      g === null && (i = T), e.baseState = i, e.firstBaseUpdate = y, e.lastBaseUpdate = g, n === null && (e.shared.lanes = 0), eu |= f, l.lanes = f, l.memoizedState = T;
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
    l = Ct, O(Je, l), O(la, t), Ct = l | t.baseLanes;
  }
  function Yf() {
    O(Je, Ct), O(la, la.current);
  }
  function xf() {
    Ct = Je.current, M(la), M(Je);
  }
  var Ft = 0, C = null, nl = null, El = null, we = !1, ta = !1, Uu = !1, ke = 0, La = 0, ua = null, Mo = 0;
  function bl() {
    throw Error(m(321));
  }
  function Gf(l, t) {
    if (t === null) return !1;
    for (var u = 0; u < t.length && u < l.length; u++)
      if (!lt(l[u], t[u])) return !1;
    return !0;
  }
  function jf(l, t, u, a, e, n) {
    return Ft = n, C = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, S.H = l === null || l.memoizedState === null ? c0 : i0, Uu = !1, n = u(a, e), Uu = !1, ta && (n = Ds(
      t,
      u,
      a,
      e
    )), Os(l), n;
  }
  function Os(l) {
    S.H = ln;
    var t = nl !== null && nl.next !== null;
    if (Ft = 0, El = nl = C = null, we = !1, La = 0, ua = null, t) throw Error(m(300));
    l === null || Ml || (l = l.dependencies, l !== null && Ce(l) && (Ml = !0));
  }
  function Ds(l, t, u, a) {
    C = l;
    var e = 0;
    do {
      if (ta && (ua = null), La = 0, ta = !1, 25 <= e) throw Error(m(301));
      if (e += 1, El = nl = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      S.H = Bo, n = t(u, a);
    } while (ta);
    return n;
  }
  function Ro() {
    var l = S.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? Ka(t) : t, l = l.useState()[0], (nl !== null ? nl.memoizedState : null) !== l && (C.flags |= 1024), t;
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
    Ft = 0, El = nl = C = null, ta = !1, La = ke = 0, ua = null;
  }
  function Kl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return El === null ? C.memoizedState = El = l : El = El.next = l, El;
  }
  function Al() {
    if (nl === null) {
      var l = C.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = nl.next;
    var t = El === null ? C.memoizedState : El.next;
    if (t !== null)
      El = t, nl = l;
    else {
      if (l === null)
        throw C.alternate === null ? Error(m(467)) : Error(m(310));
      nl = l, l = {
        memoizedState: nl.memoizedState,
        baseState: nl.baseState,
        baseQueue: nl.baseQueue,
        queue: nl.queue,
        next: null
      }, El === null ? C.memoizedState = El = l : El = El.next = l;
    }
    return El;
  }
  function Zf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ka(l) {
    var t = La;
    return La += 1, ua === null && (ua = []), l = bs(ua, l, t), t = C, (El === null ? t.memoizedState : El.next) === null && (t = t.alternate, S.H = t === null || t.memoizedState === null ? c0 : i0), l;
  }
  function We(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Ka(l);
      if (l.$$typeof === X) return Xl(l);
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
        u[a] = Mt;
    return t.index++, u;
  }
  function Yt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function $e(l) {
    var t = Al();
    return Lf(t, nl, l);
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
        if (T !== y.lane ? (W & T) === T : (Ft & T) === T) {
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
          else if ((Ft & h) === h) {
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
            }, i === null ? (c = i = T, f = n) : i = i.next = T, C.lanes |= h, eu |= h;
          T = y.action, Uu && u(n, T), n = y.hasEagerState ? y.eagerState : u(n, T);
        } else
          h = {
            lane: T,
            revertLane: y.revertLane,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null
          }, i === null ? (c = i = h, f = n) : i = i.next = h, C.lanes |= T, eu |= T;
        y = y.next;
      } while (y !== null && y !== t);
      if (i === null ? f = n : i.next = c, !lt(n, l.memoizedState) && (Ml = !0, g && (u = Pu, u !== null)))
        throw u;
      l.memoizedState = n, l.baseState = f, l.baseQueue = i, a.lastRenderedState = n;
    }
    return e === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function Kf(l) {
    var t = Al(), u = t.queue;
    if (u === null) throw Error(m(311));
    u.lastRenderedReducer = l;
    var a = u.dispatch, e = u.pending, n = t.memoizedState;
    if (e !== null) {
      u.pending = null;
      var f = e = e.next;
      do
        n = l(n, f.action), f = f.next;
      while (f !== e);
      lt(n, t.memoizedState) || (Ml = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), u.lastRenderedState = n;
    }
    return [n, a];
  }
  function Ms(l, t, u) {
    var a = C, e = Al(), n = ll;
    if (n) {
      if (u === void 0) throw Error(m(407));
      u = u();
    } else u = t();
    var f = !lt(
      (nl || e).memoizedState,
      u
    );
    f && (e.memoizedState = u, Ml = !0), e = e.queue;
    var c = Ns.bind(null, a, e, l);
    if (Ja(2048, 8, c, [l]), e.getSnapshot !== t || f || El !== null && El.memoizedState.tag & 1) {
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
      ), dl === null) throw Error(m(349));
      n || (Ft & 124) !== 0 || Rs(a, t, u);
    }
    return u;
  }
  function Rs(l, t, u) {
    l.flags |= 16384, l = { getSnapshot: t, value: u }, t = C.updateQueue, t === null ? (t = Zf(), C.updateQueue = t, t.stores = [l]) : (u = t.stores, u === null ? t.stores = [l] : u.push(l));
  }
  function Us(l, t, u, a) {
    t.value = u, t.getSnapshot = a, Hs(t) && qs(l);
  }
  function Ns(l, t, u) {
    return u(function() {
      Hs(t) && qs(l);
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
  function qs(l) {
    var t = ku(l, 2);
    t !== null && ft(t, l, 2);
  }
  function Jf(l) {
    var t = Kl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), Uu) {
        Lt(!0);
        try {
          u();
        } finally {
          Lt(!1);
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
  function ps(l, t, u, a) {
    return l.baseState = u, Lf(
      l,
      nl,
      typeof a == "function" ? a : Yt
    );
  }
  function Uo(l, t, u, a, e) {
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
    if (ll) {
      var u = dl.formState;
      if (u !== null) {
        l: {
          var a = C;
          if (ll) {
            if (gl) {
              t: {
                for (var e = gl, n = Et; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (e = bt(
                    e.nextSibling
                  ), e === null) {
                    e = null;
                    break t;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                gl = bt(
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
    return u = Kl(), u.memoizedState = u.baseState = t, a = {
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
    ), a = Kl(), e = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = e, u = Uo.bind(
      null,
      C,
      e,
      n,
      u
    ), e.dispatch = u, a.memoizedState = l, [t, u, !1];
  }
  function Qs(l) {
    var t = Al();
    return Cs(t, nl, l);
  }
  function Cs(l, t, u) {
    if (t = Lf(
      l,
      t,
      js
    )[0], l = $e(Yt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = Ka(t);
      } catch (f) {
        throw f === Xa ? Le : f;
      }
    else a = t;
    t = Al();
    var e = t.queue, n = e.dispatch;
    return u !== t.memoizedState && (C.flags |= 2048, aa(
      9,
      Fe(),
      No.bind(null, e, u),
      null
    )), [a, n, l];
  }
  function No(l, t) {
    l.action = t;
  }
  function Zs(l) {
    var t = Al(), u = nl;
    if (u !== null)
      return Cs(t, u, l);
    Al(), t = t.memoizedState, u = Al();
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
    return Al().memoizedState;
  }
  function Ie(l, t, u, a) {
    var e = Kl();
    a = a === void 0 ? null : a, C.flags |= l, e.memoizedState = aa(
      1 | t,
      Fe(),
      u,
      a
    );
  }
  function Ja(l, t, u, a) {
    var e = Al();
    a = a === void 0 ? null : a;
    var n = e.memoizedState.inst;
    nl !== null && a !== null && Gf(a, nl.memoizedState.deps) ? e.memoizedState = aa(t, n, u, a) : (C.flags |= l, e.memoizedState = aa(
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
    var u = Al();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    return t !== null && Gf(t, a[1]) ? a[0] : (u.memoizedState = [l, t], l);
  }
  function Fs(l, t) {
    var u = Al();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    if (t !== null && Gf(t, a[1]))
      return a[0];
    if (a = l(), Uu) {
      Lt(!0);
      try {
        l();
      } finally {
        Lt(!1);
      }
    }
    return u.memoizedState = [a, t], a;
  }
  function Wf(l, t, u) {
    return u === void 0 || (Ft & 1073741824) !== 0 ? l.memoizedState = t : (l.memoizedState = u, l = lv(), C.lanes |= l, eu |= l, u);
  }
  function Is(l, t, u, a) {
    return lt(u, t) ? u : la.current !== null ? (l = Wf(l, u, a), lt(l, t) || (Ml = !0), l) : (Ft & 42) === 0 ? (Ml = !0, l.memoizedState = u) : (l = lv(), C.lanes |= l, eu |= l, t);
  }
  function Ps(l, t, u, a, e) {
    var n = D.p;
    D.p = n !== 0 && 8 > n ? n : 8;
    var f = S.T, c = {};
    S.T = c, If(l, !1, t, u);
    try {
      var i = e(), y = S.S;
      if (y !== null && y(c, i), i !== null && typeof i == "object" && typeof i.then == "function") {
        var g = Do(
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
  function Ho() {
  }
  function $f(l, t, u, a) {
    if (l.tag !== 5) throw Error(m(476));
    var e = l0(l).queue;
    Ps(
      l,
      e,
      t,
      Y,
      u === null ? Ho : function() {
        return t0(l), u(a);
      }
    );
  }
  function l0(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Y,
      baseState: Y,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yt,
        lastRenderedState: Y
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
  function t0(l) {
    var t = l0(l).next.queue;
    wa(l, t, {}, nt());
  }
  function Ff() {
    return Xl(de);
  }
  function u0() {
    return Al().memoizedState;
  }
  function a0() {
    return Al().memoizedState;
  }
  function qo(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var u = nt();
          l = Wt(u);
          var a = $t(t, l, u);
          a !== null && (ft(a, t, u), Ca(a, t, u)), t = { cache: Mf() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function po(l, t, u) {
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
            return xe(l, t, e, 0), dl === null && Ye(), !1;
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
    readContext: Xl,
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
  }, c0 = {
    readContext: Xl,
    use: We,
    useCallback: function(l, t) {
      return Kl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Xl,
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
      var u = Kl();
      t = t === void 0 ? null : t;
      var a = l();
      if (Uu) {
        Lt(!0);
        try {
          l();
        } finally {
          Lt(!1);
        }
      }
      return u.memoizedState = [a, t], a;
    },
    useReducer: function(l, t, u) {
      var a = Kl();
      if (u !== void 0) {
        var e = u(t);
        if (Uu) {
          Lt(!0);
          try {
            u(t);
          } finally {
            Lt(!1);
          }
        }
      } else e = t;
      return a.memoizedState = a.baseState = e, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: e
      }, a.queue = l, l = l.dispatch = po.bind(
        null,
        C,
        l
      ), [a.memoizedState, l];
    },
    useRef: function(l) {
      var t = Kl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = Jf(l);
      var t = l.queue, u = e0.bind(null, C, t);
      return t.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: kf,
    useDeferredValue: function(l, t) {
      var u = Kl();
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
      ), Kl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, u) {
      var a = C, e = Kl();
      if (ll) {
        if (u === void 0)
          throw Error(m(407));
        u = u();
      } else {
        if (u = t(), dl === null)
          throw Error(m(349));
        (W & 124) !== 0 || Rs(a, t, u);
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
      var l = Kl(), t = dl.identifierPrefix;
      if (ll) {
        var u = qt, a = Ht;
        u = (a & ~(1 << 32 - Pl(a) - 1)).toString(32) + u, t = "«" + t + "R" + u, u = ke++, 0 < u && (t += "H" + u.toString(32)), t += "»";
      } else
        u = Mo++, t = "«" + t + "r" + u.toString(32) + "»";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: Ff,
    useFormState: Xs,
    useActionState: Xs,
    useOptimistic: function(l) {
      var t = Kl();
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
      return Kl().memoizedState = qo.bind(
        null,
        C
      );
    }
  }, i0 = {
    readContext: Xl,
    use: We,
    useCallback: $s,
    useContext: Xl,
    useEffect: Ks,
    useImperativeHandle: Ws,
    useInsertionEffect: Js,
    useLayoutEffect: ws,
    useMemo: Fs,
    useReducer: $e,
    useRef: Vs,
    useState: function() {
      return $e(Yt);
    },
    useDebugValue: kf,
    useDeferredValue: function(l, t) {
      var u = Al();
      return Is(
        u,
        nl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = $e(Yt)[0], t = Al().memoizedState;
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
      var u = Al();
      return ps(u, nl, l, t);
    },
    useMemoCache: Vf,
    useCacheRefresh: a0
  }, Bo = {
    readContext: Xl,
    use: We,
    useCallback: $s,
    useContext: Xl,
    useEffect: Ks,
    useImperativeHandle: Ws,
    useInsertionEffect: Js,
    useLayoutEffect: ws,
    useMemo: Fs,
    useReducer: Kf,
    useRef: Vs,
    useState: function() {
      return Kf(Yt);
    },
    useDebugValue: kf,
    useDeferredValue: function(l, t) {
      var u = Al();
      return nl === null ? Wf(u, l, t) : Is(
        u,
        nl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = Kf(Yt)[0], t = Al().memoizedState;
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
      var u = Al();
      return nl !== null ? ps(u, nl, l, t) : (u.baseState = l, [l, u.queue.dispatch]);
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
  function v0(l) {
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
      return d = Nt(d, v), d.index = 0, d.sibling = null, d;
    }
    function n(d, v, o) {
      return d.index = o, l ? (o = d.alternate, o !== null ? (o = o.index, o < v ? (d.flags |= 67108866, v) : o) : (d.flags |= 67108866, v)) : (d.flags |= 1048576, v);
    }
    function f(d) {
      return l && d.alternate === null && (d.flags |= 67108866), d;
    }
    function c(d, v, o, b) {
      return v === null || v.tag !== 6 ? (v = bf(o, d.mode, b), v.return = d, v) : (v = e(v, o), v.return = d, v);
    }
    function i(d, v, o, b) {
      var R = o.type;
      return R === Hl ? g(
        d,
        v,
        o.props.children,
        b,
        o.key
      ) : v !== null && (v.elementType === R || typeof R == "object" && R !== null && R.$$typeof === Ol && s0(R) === v.type) ? (v = e(v, o.props), Wa(v, o), v.return = d, v) : (v = je(
        o.type,
        o.key,
        o.props,
        null,
        d.mode,
        b
      ), Wa(v, o), v.return = d, v);
    }
    function y(d, v, o, b) {
      return v === null || v.tag !== 4 || v.stateNode.containerInfo !== o.containerInfo || v.stateNode.implementation !== o.implementation ? (v = Tf(o, d.mode, b), v.return = d, v) : (v = e(v, o.children || []), v.return = d, v);
    }
    function g(d, v, o, b, R) {
      return v === null || v.tag !== 7 ? (v = Eu(
        o,
        d.mode,
        b,
        R
      ), v.return = d, v) : (v = e(v, o), v.return = d, v);
    }
    function T(d, v, o) {
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint")
        return v = bf(
          "" + v,
          d.mode,
          o
        ), v.return = d, v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case $:
            return o = je(
              v.type,
              v.key,
              v.props,
              null,
              d.mode,
              o
            ), Wa(o, v), o.return = d, o;
          case Nl:
            return v = Tf(
              v,
              d.mode,
              o
            ), v.return = d, v;
          case Ol:
            var b = v._init;
            return v = b(v._payload), T(d, v, o);
        }
        if (Gl(v) || xl(v))
          return v = Eu(
            v,
            d.mode,
            o,
            null
          ), v.return = d, v;
        if (typeof v.then == "function")
          return T(d, tn(v), o);
        if (v.$$typeof === X)
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
      var R = v !== null ? v.key : null;
      if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint")
        return R !== null ? null : c(d, v, "" + o, b);
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case $:
            return o.key === R ? i(d, v, o, b) : null;
          case Nl:
            return o.key === R ? y(d, v, o, b) : null;
          case Ol:
            return R = o._init, o = R(o._payload), h(d, v, o, b);
        }
        if (Gl(o) || xl(o))
          return R !== null ? null : g(d, v, o, b, null);
        if (typeof o.then == "function")
          return h(
            d,
            v,
            tn(o),
            b
          );
        if (o.$$typeof === X)
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
    function r(d, v, o, b, R) {
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
        return d = d.get(o) || null, c(v, d, "" + b, R);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case $:
            return d = d.get(
              b.key === null ? o : b.key
            ) || null, i(v, d, b, R);
          case Nl:
            return d = d.get(
              b.key === null ? o : b.key
            ) || null, y(v, d, b, R);
          case Ol:
            var V = b._init;
            return b = V(b._payload), r(
              d,
              v,
              o,
              b,
              R
            );
        }
        if (Gl(b) || xl(b))
          return d = d.get(o) || null, g(v, d, b, R, null);
        if (typeof b.then == "function")
          return r(
            d,
            v,
            o,
            tn(b),
            R
          );
        if (b.$$typeof === X)
          return r(
            d,
            v,
            o,
            Ze(v, b),
            R
          );
        un(v, b);
      }
      return null;
    }
    function x(d, v, o, b) {
      for (var R = null, V = null, U = v, p = v = 0, Ul = null; U !== null && p < o.length; p++) {
        U.index > p ? (Ul = U, U = null) : Ul = U.sibling;
        var I = h(
          d,
          U,
          o[p],
          b
        );
        if (I === null) {
          U === null && (U = Ul);
          break;
        }
        l && U && I.alternate === null && t(d, U), v = n(I, v, p), V === null ? R = I : V.sibling = I, V = I, U = Ul;
      }
      if (p === o.length)
        return u(d, U), ll && zu(d, p), R;
      if (U === null) {
        for (; p < o.length; p++)
          U = T(d, o[p], b), U !== null && (v = n(
            U,
            v,
            p
          ), V === null ? R = U : V.sibling = U, V = U);
        return ll && zu(d, p), R;
      }
      for (U = a(U); p < o.length; p++)
        Ul = r(
          U,
          d,
          p,
          o[p],
          b
        ), Ul !== null && (l && Ul.alternate !== null && U.delete(
          Ul.key === null ? p : Ul.key
        ), v = n(
          Ul,
          v,
          p
        ), V === null ? R = Ul : V.sibling = Ul, V = Ul);
      return l && U.forEach(function(yu) {
        return t(d, yu);
      }), ll && zu(d, p), R;
    }
    function q(d, v, o, b) {
      if (o == null) throw Error(m(151));
      for (var R = null, V = null, U = v, p = v = 0, Ul = null, I = o.next(); U !== null && !I.done; p++, I = o.next()) {
        U.index > p ? (Ul = U, U = null) : Ul = U.sibling;
        var yu = h(d, U, I.value, b);
        if (yu === null) {
          U === null && (U = Ul);
          break;
        }
        l && U && yu.alternate === null && t(d, U), v = n(yu, v, p), V === null ? R = yu : V.sibling = yu, V = yu, U = Ul;
      }
      if (I.done)
        return u(d, U), ll && zu(d, p), R;
      if (U === null) {
        for (; !I.done; p++, I = o.next())
          I = T(d, I.value, b), I !== null && (v = n(I, v, p), V === null ? R = I : V.sibling = I, V = I);
        return ll && zu(d, p), R;
      }
      for (U = a(U); !I.done; p++, I = o.next())
        I = r(U, d, p, I.value, b), I !== null && (l && I.alternate !== null && U.delete(I.key === null ? p : I.key), v = n(I, v, p), V === null ? R = I : V.sibling = I, V = I);
      return l && U.forEach(function(Yy) {
        return t(d, Yy);
      }), ll && zu(d, p), R;
    }
    function cl(d, v, o, b) {
      if (typeof o == "object" && o !== null && o.type === Hl && o.key === null && (o = o.props.children), typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case $:
            l: {
              for (var R = o.key; v !== null; ) {
                if (v.key === R) {
                  if (R = o.type, R === Hl) {
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
                  } else if (v.elementType === R || typeof R == "object" && R !== null && R.$$typeof === Ol && s0(R) === v.type) {
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
              o.type === Hl ? (b = Eu(
                o.props.children,
                d.mode,
                b,
                o.key
              ), b.return = d, d = b) : (b = je(
                o.type,
                o.key,
                o.props,
                null,
                d.mode,
                b
              ), Wa(b, o), b.return = d, d = b);
            }
            return f(d);
          case Nl:
            l: {
              for (R = o.key; v !== null; ) {
                if (v.key === R)
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
              b = Tf(o, d.mode, b), b.return = d, d = b;
            }
            return f(d);
          case Ol:
            return R = o._init, o = R(o._payload), cl(
              d,
              v,
              o,
              b
            );
        }
        if (Gl(o))
          return x(
            d,
            v,
            o,
            b
          );
        if (xl(o)) {
          if (R = xl(o), typeof R != "function") throw Error(m(150));
          return o = R.call(o), q(
            d,
            v,
            o,
            b
          );
        }
        if (typeof o.then == "function")
          return cl(
            d,
            v,
            tn(o),
            b
          );
        if (o.$$typeof === X)
          return cl(
            d,
            v,
            Ze(d, o),
            b
          );
        un(d, o);
      }
      return typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint" ? (o = "" + o, v !== null && v.tag === 6 ? (u(d, v.sibling), b = e(v, o), b.return = d, d = b) : (u(d, v), b = bf(o, d.mode, b), b.return = d, d = b), f(d)) : u(d, v);
    }
    return function(d, v, o, b) {
      try {
        ka = 0;
        var R = cl(
          d,
          v,
          o,
          b
        );
        return ea = null, R;
      } catch (U) {
        if (U === Xa || U === Le) throw U;
        var V = tt(29, U, null, d.mode);
        return V.lanes = b, V.return = d, V;
      } finally {
      }
    };
  }
  var na = v0(!0), d0 = v0(!1), ht = A(null), At = null;
  function It(l) {
    var t = l.alternate;
    O(_l, _l.current & 1), O(ht, l), At === null && (t === null || la.current !== null || t.memoizedState !== null) && (At = l);
  }
  function o0(l) {
    if (l.tag === 22) {
      if (O(_l, _l.current), O(ht, l), At === null) {
        var t = l.alternate;
        t !== null && t.memoizedState !== null && (At = l);
      }
    } else Pt();
  }
  function Pt() {
    O(_l, _l.current), O(ht, ht.current);
  }
  function xt(l) {
    M(ht), At === l && (At = null), M(_l);
  }
  var _l = A(0);
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
      var a = nt(), e = Wt(a);
      e.payload = t, u != null && (e.callback = u), t = $t(l, e, a), t !== null && (ft(t, l, a), Ca(t, l, a));
    },
    enqueueReplaceState: function(l, t, u) {
      l = l._reactInternals;
      var a = nt(), e = Wt(a);
      e.tag = 1, e.payload = t, u != null && (e.callback = u), t = $t(l, e, a), t !== null && (ft(t, l, a), Ca(t, l, a));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var u = nt(), a = Wt(u);
      a.tag = 2, t != null && (a.callback = t), t = $t(l, a, u), t !== null && (ft(t, l, u), Ca(t, l, u));
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
    return u = Wt(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      nn(l, t);
    }, u;
  }
  function b0(l) {
    return l = Wt(l), l.tag = 3, l;
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
      S0(t, u, a), typeof e != "function" && (nu === null ? nu = /* @__PURE__ */ new Set([this]) : nu.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function Yo(l, t, u, a, e) {
    if (u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = u.alternate, t !== null && xa(
        t,
        u,
        e,
        !0
      ), u = ht.current, u !== null) {
        switch (u.tag) {
          case 13:
            return At === null ? Oc() : u.alternate === null && Sl === 0 && (Sl = 3), u.flags &= -257, u.flags |= 65536, u.lanes = e, a === Nf ? u.flags |= 16384 : (t = u.updateQueue, t === null ? u.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Mc(l, a, e)), !1;
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
    if (ll)
      return t = ht.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, a !== zf && (l = Error(m(422), { cause: a }), Ya(vt(l, u)))) : (a !== zf && (t = Error(m(423), {
        cause: a
      }), Ya(
        vt(t, u)
      )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, a = vt(a, u), e = tc(
        l.stateNode,
        a,
        e
      ), pf(l, e), Sl !== 4 && (Sl = 2)), !1;
    var n = Error(m(520), { cause: a });
    if (n = vt(n, u), ue === null ? ue = [n] : ue.push(n), Sl !== 4 && (Sl = 2), t === null) return !0;
    a = vt(a, u), u = t;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = e & -e, u.lanes |= l, l = tc(u.stateNode, a, l), pf(u, l), !1;
        case 1:
          if (t = u.type, n = u.stateNode, (u.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (nu === null || !nu.has(n))))
            return u.flags |= 65536, e &= -e, u.lanes |= e, e = b0(e), T0(
              e,
              l,
              u,
              a
            ), pf(u, e), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var E0 = Error(m(461)), Ml = !1;
  function ql(l, t, u, a) {
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
    ), c = Xf(), l !== null && !Ml ? (Qf(l, t, e), Gt(l, t, e)) : (ll && c && Ef(t), t.flags |= 1, ql(l, t, a, e), t.child);
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
        return Gt(l, t, e);
    }
    return t.flags |= 1, l = Nt(n, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function _0(l, t, u, a, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Ha(n, a) && l.ref === t.ref)
        if (Ml = !1, t.pendingProps = a = n, sc(l, e))
          (l.flags & 131072) !== 0 && (Ml = !0);
        else
          return t.lanes = l.lanes, Gt(l, t, e);
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
        ), n !== null ? _s(t, n) : Yf(), o0(t);
      else
        return t.lanes = t.childLanes = 536870912, D0(
          l,
          t,
          n !== null ? n.baseLanes | u : u,
          u
        );
    } else
      n !== null ? (Ve(t, n.cachePool), _s(t, n), Pt(), t.memoizedState = null) : (l !== null && Ve(t, null), Yf(), Pt());
    return ql(l, t, e, u), t.child;
  }
  function D0(l, t, u, a) {
    var e = Uf();
    return e = e === null ? null : { parent: zl._currentValue, pool: e }, t.memoizedState = {
      baseLanes: u,
      cachePool: e
    }, l !== null && Ve(t, null), Yf(), o0(t), l !== null && xa(l, t, a, !0), null;
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
    ), a = Xf(), l !== null && !Ml ? (Qf(l, t, e), Gt(l, t, e)) : (ll && a && Ef(t), t.flags |= 1, ql(l, t, u, e), t.child);
  }
  function M0(l, t, u, a, e, n) {
    return Mu(t), t.updateQueue = null, u = Ds(
      t,
      a,
      u,
      e
    ), Os(l), a = Xf(), l !== null && !Ml ? (Qf(l, t, n), Gt(l, t, n)) : (ll && a && Ef(t), t.flags |= 1, ql(l, t, u, n), t.child);
  }
  function R0(l, t, u, a, e) {
    if (Mu(t), t.stateNode === null) {
      var n = Wu, f = u.contextType;
      typeof f == "object" && f !== null && (n = Xl(f)), n = new u(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = lc, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, Hf(t), f = u.contextType, n.context = typeof f == "object" && f !== null ? Xl(f) : Wu, n.state = t.memoizedState, f = u.getDerivedStateFromProps, typeof f == "function" && (Pf(
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
      f = Wu, typeof g == "object" && g !== null && (f = Xl(g));
      var T = u.getDerivedStateFromProps;
      g = typeof T == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, g || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || y !== f) && h0(
        t,
        n,
        a,
        f
      ), kt = !1;
      var h = t.memoizedState;
      n.state = h, Va(t, a, n, e), Za(), y = t.memoizedState, c || h !== y || kt ? (typeof T == "function" && (Pf(
        t,
        u,
        T,
        a
      ), y = t.memoizedState), (i = kt || y0(
        t,
        u,
        i,
        a,
        h,
        y,
        f
      )) ? (g || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = y), n.props = a, n.state = y, n.context = f, a = i) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      n = t.stateNode, qf(l, t), f = t.memoizedProps, g = Nu(u, f), n.props = g, T = t.pendingProps, h = n.context, y = u.contextType, i = Wu, typeof y == "object" && y !== null && (i = Xl(y)), c = u.getDerivedStateFromProps, (y = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== T || h !== i) && h0(
        t,
        n,
        a,
        i
      ), kt = !1, h = t.memoizedState, n.state = h, Va(t, a, n, e), Za();
      var r = t.memoizedState;
      f !== T || h !== r || kt || l !== null && l.dependencies !== null && Ce(l.dependencies) ? (typeof c == "function" && (Pf(
        t,
        u,
        c,
        a
      ), r = t.memoizedState), (g = kt || y0(
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
    )) : ql(l, t, u, e), t.memoizedState = n.state, l = t.child) : l = Gt(
      l,
      t,
      e
    ), l;
  }
  function U0(l, t, u, a) {
    return Ba(), t.flags |= 256, ql(l, t, u, a), t.child;
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
    if ((f = n) || (f = l !== null && l.memoizedState === null ? !1 : (_l.current & 2) !== 0), f && (e = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (ll) {
        if (e ? It(t) : Pt(), ll) {
          var c = gl, i;
          if (i = c) {
            l: {
              for (i = c, c = Et; i.nodeType !== 8; ) {
                if (!c) {
                  c = null;
                  break l;
                }
                if (i = bt(
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
              treeContext: Au !== null ? { id: Ht, overflow: qt } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, i = tt(
              18,
              null,
              null,
              0
            ), i.stateNode = c, i.return = t, t.child = i, Zl = t, gl = null, i = !0) : i = !1;
          }
          i || Ou(t);
        }
        if (c = t.memoizedState, c !== null && (c = c.dehydrated, c !== null))
          return Zc(c) ? t.lanes = 32 : t.lanes = 536870912, null;
        xt(t);
      }
      return c = a.children, a = a.fallback, e ? (Pt(), e = t.mode, c = cn(
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
      ), t.memoizedState = ac, a) : (It(t), fc(t, c));
    }
    if (i = l.memoizedState, i !== null && (c = i.dehydrated, c !== null)) {
      if (n)
        t.flags & 256 ? (It(t), t.flags &= -257, t = cc(
          l,
          t,
          u
        )) : t.memoizedState !== null ? (Pt(), t.child = l.child, t.flags |= 128, t = null) : (Pt(), e = a.fallback, c = t.mode, a = cn(
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
      else if (It(t), Zc(c)) {
        if (f = c.nextSibling && c.nextSibling.dataset, f) var y = f.dgst;
        f = y, a = Error(m(419)), a.stack = "", a.digest = f, Ya({ value: a, source: null, stack: null }), t = cc(
          l,
          t,
          u
        );
      } else if (Ml || xa(l, t, u, !1), f = (u & l.childLanes) !== 0, Ml || f) {
        if (f = dl, f !== null && (a = u & -u, a = (a & 42) !== 0 ? 1 : Zn(a), a = (a & (f.suspendedLanes | u)) !== 0 ? 0 : a, a !== 0 && a !== i.retryLane))
          throw i.retryLane = a, ku(l, a), ft(f, l, a), E0;
        c.data === "$?" || Oc(), t = cc(
          l,
          t,
          u
        );
      } else
        c.data === "$?" ? (t.flags |= 192, t.child = l.child, t = null) : (l = i.treeContext, gl = bt(
          c.nextSibling
        ), Zl = t, ll = !0, _u = null, Et = !1, l !== null && (ot[yt++] = Ht, ot[yt++] = qt, ot[yt++] = Au, Ht = l.id, qt = l.overflow, Au = t), t = fc(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return e ? (Pt(), e = a.fallback, c = t.mode, i = l.child, y = i.sibling, a = Nt(i, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = i.subtreeFlags & 65011712, y !== null ? e = Nt(y, e) : (e = Eu(
      e,
      c,
      u,
      null
    ), e.flags |= 2), e.return = t, a.return = t, a.sibling = e, t.child = a, a = e, e = t.child, c = l.child.memoizedState, c === null ? c = ec(u) : (i = c.cachePool, i !== null ? (y = zl._currentValue, i = i.parent !== y ? { parent: y, pool: y } : i) : i = ms(), c = {
      baseLanes: c.baseLanes | u,
      cachePool: i
    }), e.memoizedState = c, e.childLanes = nc(
      l,
      f,
      u
    ), t.memoizedState = ac, a) : (It(t), u = l.child, l = u.sibling, u = Nt(u, {
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
  function q0(l, t, u) {
    var a = t.pendingProps, e = a.revealOrder, n = a.tail;
    if (ql(l, t, a.children, u), a = _l.current, (a & 2) !== 0)
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
    switch (O(_l, a), e) {
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
  function Gt(l, t, u) {
    if (l !== null && (t.dependencies = l.dependencies), eu |= t.lanes, (u & t.childLanes) === 0)
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
      for (l = t.child, u = Nt(l, l.pendingProps), t.child = u, u.return = t; l.sibling !== null; )
        l = l.sibling, u = u.sibling = Nt(l, l.pendingProps), u.return = t;
      u.sibling = null;
    }
    return t.child;
  }
  function sc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Ce(l)));
  }
  function xo(l, t, u) {
    switch (t.tag) {
      case 3:
        yl(t, t.stateNode.containerInfo), wt(t, zl, l.memoizedState.cache), Ba();
        break;
      case 27:
      case 5:
        Gn(t);
        break;
      case 4:
        yl(t, t.stateNode.containerInfo);
        break;
      case 10:
        wt(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (It(t), t.flags |= 128, null) : (u & t.child.childLanes) !== 0 ? N0(l, t, u) : (It(t), l = Gt(
            l,
            t,
            u
          ), l !== null ? l.sibling : null);
        It(t);
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
            return q0(
              l,
              t,
              u
            );
          t.flags |= 128;
        }
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), O(_l, _l.current), a) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, O0(l, t, u);
      case 24:
        wt(t, zl, l.memoizedState.cache);
    }
    return Gt(l, t, u);
  }
  function p0(l, t, u) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Ml = !0;
      else {
        if (!sc(l, u) && (t.flags & 128) === 0)
          return Ml = !1, xo(
            l,
            t,
            u
          );
        Ml = (l.flags & 131072) !== 0;
      }
    else
      Ml = !1, ll && (t.flags & 1048576) !== 0 && ss(t, Qe, t.index);
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
              if (e = a.$$typeof, e === ol) {
                t.tag = 11, t = A0(
                  null,
                  t,
                  a,
                  l,
                  u
                );
                break l;
              } else if (e === Cl) {
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
            throw t = ru(a) || a, Error(m(306, t, ""));
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
          if (yl(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(m(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          e = n.element, qf(l, t), Va(t, a, null, u);
          var f = t.memoizedState;
          if (a = f.cache, wt(t, zl, a), a !== n.cache && Df(
            t,
            [zl],
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
              for (gl = bt(l.firstChild), Zl = t, ll = !0, _u = null, Et = !0, u = d0(
                t,
                null,
                a,
                u
              ), t.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (Ba(), a === e) {
              t = Gt(
                l,
                t,
                u
              );
              break l;
            }
            ql(
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
        return fn(l, t), l === null ? (u = Gv(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = u : ll || (u = t.type, l = t.pendingProps, a = An(
          G.current
        ).createElement(u), a[jl] = t, a[Vl] = l, Bl(a, u, l), Dl(a), t.stateNode = a) : t.memoizedState = Gv(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Gn(t), l === null && ll && (a = t.stateNode = Bv(
          t.type,
          t.pendingProps,
          G.current
        ), Zl = t, Et = !0, e = gl, iu(t.type) ? (Vc = e, gl = bt(
          a.firstChild
        )) : gl = e), ql(
          l,
          t,
          t.pendingProps.children,
          u
        ), fn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && ll && ((e = a = gl) && (a = vy(
          a,
          t.type,
          t.pendingProps,
          Et
        ), a !== null ? (t.stateNode = a, Zl = t, gl = bt(
          a.firstChild
        ), Et = !1, e = !0) : e = !1), e || Ou(t)), Gn(t), e = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, a = n.children, Xc(e, n) ? a = null : f !== null && Xc(e, f) && (t.flags |= 32), t.memoizedState !== null && (e = jf(
          l,
          t,
          Ro,
          null,
          null,
          u
        ), de._currentValue = e), fn(l, t), ql(l, t, a, u), t.child;
      case 6:
        return l === null && ll && ((l = u = gl) && (u = dy(
          u,
          t.pendingProps,
          Et
        ), u !== null ? (t.stateNode = u, Zl = t, gl = null, l = !0) : l = !1), l || Ou(t)), null;
      case 13:
        return N0(l, t, u);
      case 4:
        return yl(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, l === null ? t.child = na(
          t,
          null,
          a,
          u
        ) : ql(
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
        return ql(
          l,
          t,
          t.pendingProps,
          u
        ), t.child;
      case 8:
        return ql(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 12:
        return ql(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 10:
        return a = t.pendingProps, wt(t, t.type, a.value), ql(
          l,
          t,
          a.children,
          u
        ), t.child;
      case 9:
        return e = t.type._context, a = t.pendingProps.children, Mu(t), e = Xl(e), a = a(e), t.flags |= 1, ql(l, t, a, u), t.child;
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
        return q0(l, t, u);
      case 31:
        return a = t.pendingProps, u = t.mode, a = {
          mode: a.mode,
          children: a.children
        }, l === null ? (u = cn(
          a,
          u
        ), u.ref = t.ref, t.child = u, u.return = t, t = u) : (u = Nt(l.child, a), u.ref = t.ref, t.child = u, u.return = t, t = u), t;
      case 22:
        return O0(l, t, u);
      case 24:
        return Mu(t), a = Xl(zl), l === null ? (e = Uf(), e === null && (e = dl, n = Mf(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= u), e = n), t.memoizedState = {
          parent: a,
          cache: e
        }, Hf(t), wt(t, zl, e)) : ((l.lanes & u) !== 0 && (qf(l, t), Va(t, null, null, u), Za()), e = l.memoizedState, n = t.memoizedState, e.parent !== a ? (e = { parent: a, cache: a }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), wt(t, zl, a)) : (a = n.cache, wt(t, zl, a), a !== e.cache && Df(
          t,
          [zl],
          u,
          !0
        ))), ql(
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
  function jt(l) {
    l.flags |= 4;
  }
  function B0(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Zv(t)) {
      if (t = ht.current, t !== null && ((W & 4194048) === W ? At !== null : (W & 62914560) !== W && (W & 536870912) === 0 || t !== At))
        throw Qa = Nf, gs;
      l.flags |= 8192;
    }
  }
  function sn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? oi() : 536870912, l.lanes |= t, sa |= t);
  }
  function $a(l, t) {
    if (!ll)
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
  function rl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, u = 0, a = 0;
    if (t)
      for (var e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags & 65011712, a |= e.flags & 65011712, e.return = l, e = e.sibling;
    else
      for (e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags, a |= e.flags, e.return = l, e = e.sibling;
    return l.subtreeFlags |= a, l.childLanes = u, t;
  }
  function Go(l, t, u) {
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
        return rl(t), null;
      case 1:
        return rl(t), null;
      case 3:
        return u = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Bt(zl), Vt(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (pa(t) ? jt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, os())), rl(t), null;
      case 26:
        return u = t.memoizedState, l === null ? (jt(t), u !== null ? (rl(t), B0(t, u)) : (rl(t), t.flags &= -16777217)) : u ? u !== l.memoizedState ? (jt(t), rl(t), B0(t, u)) : (rl(t), t.flags &= -16777217) : (l.memoizedProps !== a && jt(t), rl(t), t.flags &= -16777217), null;
      case 27:
        be(t), u = G.current;
        var e = t.type;
        if (l !== null && t.stateNode != null)
          l.memoizedProps !== a && jt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(m(166));
            return rl(t), null;
          }
          l = H.current, pa(t) ? vs(t) : (l = Bv(e, a, u), t.stateNode = l, jt(t));
        }
        return rl(t), null;
      case 5:
        if (be(t), u = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && jt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(m(166));
            return rl(t), null;
          }
          if (l = H.current, pa(t))
            vs(t);
          else {
            switch (e = An(
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
            l[jl] = t, l[Vl] = a;
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
            l: switch (Bl(l, u, a), u) {
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
            l && jt(t);
          }
        }
        return rl(t), t.flags &= -16777217, null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== a && jt(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(m(166));
          if (l = G.current, pa(t)) {
            if (l = t.stateNode, u = t.memoizedProps, a = null, e = Zl, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  a = e.memoizedProps;
              }
            l[jl] = t, l = !!(l.nodeValue === u || a !== null && a.suppressHydrationWarning === !0 || Mv(l.nodeValue, u)), l || Ou(t);
          } else
            l = An(l).createTextNode(
              a
            ), l[jl] = t, t.stateNode = l;
        }
        return rl(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = pa(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(m(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(m(317));
              e[jl] = t;
            } else
              Ba(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            rl(t), e = !1;
          } else
            e = os(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = !0;
          if (!e)
            return t.flags & 256 ? (xt(t), t) : (xt(t), null);
        }
        if (xt(t), (t.flags & 128) !== 0)
          return t.lanes = u, t;
        if (u = a !== null, l = l !== null && l.memoizedState !== null, u) {
          a = t.child, e = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (e = a.alternate.memoizedState.cachePool.pool);
          var n = null;
          a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== e && (a.flags |= 2048);
        }
        return u !== l && u && (t.child.flags |= 8192), sn(t, t.updateQueue), rl(t), null;
      case 4:
        return Vt(), l === null && Bc(t.stateNode.containerInfo), rl(t), null;
      case 10:
        return Bt(t.type), rl(t), null;
      case 19:
        if (M(_l), e = t.memoizedState, e === null) return rl(t), null;
        if (a = (t.flags & 128) !== 0, n = e.rendering, n === null)
          if (a) $a(e, !1);
          else {
            if (Sl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = an(l), n !== null) {
                  for (t.flags |= 128, $a(e, !1), l = n.updateQueue, t.updateQueue = l, sn(t, l), t.subtreeFlags = 0, l = u, u = t.child; u !== null; )
                    is(u, l), u = u.sibling;
                  return O(
                    _l,
                    _l.current & 1 | 2
                  ), t.child;
                }
                l = l.sibling;
              }
            e.tail !== null && Tt() > on && (t.flags |= 128, a = !0, $a(e, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (l = an(n), l !== null) {
              if (t.flags |= 128, a = !0, l = l.updateQueue, t.updateQueue = l, sn(t, l), $a(e, !0), e.tail === null && e.tailMode === "hidden" && !n.alternate && !ll)
                return rl(t), null;
            } else
              2 * Tt() - e.renderingStartTime > on && u !== 536870912 && (t.flags |= 128, a = !0, $a(e, !1), t.lanes = 4194304);
          e.isBackwards ? (n.sibling = t.child, t.child = n) : (l = e.last, l !== null ? l.sibling = n : t.child = n, e.last = n);
        }
        return e.tail !== null ? (t = e.tail, e.rendering = t, e.tail = t.sibling, e.renderingStartTime = Tt(), t.sibling = null, l = _l.current, O(_l, a ? l & 1 | 2 : l & 1), t) : (rl(t), null);
      case 22:
      case 23:
        return xt(t), xf(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (u & 536870912) !== 0 && (t.flags & 128) === 0 && (rl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : rl(t), u = t.updateQueue, u !== null && sn(t, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== u && (t.flags |= 2048), l !== null && M(Ru), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), Bt(zl), rl(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(m(156, t.tag));
  }
  function jo(l, t) {
    switch (Af(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return Bt(zl), Vt(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return be(t), null;
      case 13:
        if (xt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(m(340));
          Ba();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return M(_l), null;
      case 4:
        return Vt(), null;
      case 10:
        return Bt(t.type), null;
      case 22:
      case 23:
        return xt(t), xf(), l !== null && M(Ru), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Bt(zl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Y0(l, t) {
    switch (Af(t), t.tag) {
      case 3:
        Bt(zl), Vt();
        break;
      case 26:
      case 27:
      case 5:
        be(t);
        break;
      case 4:
        Vt();
        break;
      case 13:
        xt(t);
        break;
      case 19:
        M(_l);
        break;
      case 10:
        Bt(t.type);
        break;
      case 22:
      case 23:
        xt(t), xf(), l !== null && M(Ru);
        break;
      case 24:
        Bt(zl);
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
  function lu(l, t, u) {
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
  function vc(l, t, u) {
    try {
      var a = l.stateNode;
      ny(a, l.type, u, t), a[Vl] = t;
    } catch (e) {
      vl(l, l.return, e);
    }
  }
  function X0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && iu(l.type) || l.tag === 4;
  }
  function dc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || X0(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && iu(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function oc(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, t) : (t = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, t.appendChild(l), u = u._reactRootContainer, u != null || t.onclick !== null || (t.onclick = En));
    else if (a !== 4 && (a === 27 && iu(l.type) && (u = l.stateNode, t = null), l = l.child, l !== null))
      for (oc(l, t, u), l = l.sibling; l !== null; )
        oc(l, t, u), l = l.sibling;
  }
  function vn(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? u.insertBefore(l, t) : u.appendChild(l);
    else if (a !== 4 && (a === 27 && iu(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (vn(l, t, u), l = l.sibling; l !== null; )
        vn(l, t, u), l = l.sibling;
  }
  function Q0(l) {
    var t = l.stateNode, u = l.memoizedProps;
    try {
      for (var a = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      Bl(t, a, u), t[jl] = l, t[Vl] = u;
    } catch (n) {
      vl(l, l.return, n);
    }
  }
  var Xt = !1, Tl = !1, yc = !1, C0 = typeof WeakSet == "function" ? WeakSet : Set, Rl = null;
  function Xo(l, t) {
    if (l = l.containerInfo, Gc = Rn, l = Ii(l), df(l)) {
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
    for (jc = { focusedElem: l, selectionRange: u }, Rn = !1, Rl = t; Rl !== null; )
      if (t = Rl, l = t.child, (t.subtreeFlags & 1024) !== 0 && l !== null)
        l.return = t, Rl = l;
      else
        for (; Rl !== null; ) {
          switch (t = Rl, n = t.alternate, l = t.flags, t.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                l = void 0, u = t, e = n.memoizedProps, n = n.memoizedState, a = u.stateNode;
                try {
                  var x = Nu(
                    u.type,
                    e,
                    u.elementType === u.type
                  );
                  l = a.getSnapshotBeforeUpdate(
                    x,
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
            l.return = t.return, Rl = l;
            break;
          }
          Rl = t.return;
        }
  }
  function Z0(l, t, u) {
    var a = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        tu(l, u), a & 4 && Fa(5, u);
        break;
      case 1:
        if (tu(l, u), a & 4)
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
        if (tu(l, u), a & 64 && (l = u.updateQueue, l !== null)) {
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
        tu(l, u), t === null && a & 4 && j0(u), a & 512 && Ia(u, u.return);
        break;
      case 12:
        tu(l, u);
        break;
      case 13:
        tu(l, u), a & 4 && K0(l, u), a & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = ko.bind(
          null,
          u
        ), oy(l, u))));
        break;
      case 22:
        if (a = u.memoizedState !== null || Xt, !a) {
          t = t !== null && t.memoizedState !== null || Tl, e = Xt;
          var n = Tl;
          Xt = a, (Tl = t) && !n ? uu(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : tu(l, u), Xt = e, Tl = n;
        }
        break;
      case 30:
        break;
      default:
        tu(l, u);
    }
  }
  function V0(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, V0(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && Kn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var hl = null, Jl = !1;
  function Qt(l, t, u) {
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
        Tl || zt(u, t), Qt(
          l,
          t,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Tl || zt(u, t);
        var a = hl, e = Jl;
        iu(u.type) && (hl = u.stateNode, Jl = !1), Qt(
          l,
          t,
          u
        ), ce(u.stateNode), hl = a, Jl = e;
        break;
      case 5:
        Tl || zt(u, t);
      case 6:
        if (a = hl, e = Jl, hl = null, Qt(
          l,
          t,
          u
        ), hl = a, Jl = e, hl !== null)
          if (Jl)
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
        hl !== null && (Jl ? (l = hl, qv(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), re(l)) : qv(hl, u.stateNode));
        break;
      case 4:
        a = hl, e = Jl, hl = u.stateNode.containerInfo, Jl = !0, Qt(
          l,
          t,
          u
        ), hl = a, Jl = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Tl || lu(2, u, t), Tl || lu(4, u, t), Qt(
          l,
          t,
          u
        );
        break;
      case 1:
        Tl || (zt(u, t), a = u.stateNode, typeof a.componentWillUnmount == "function" && G0(
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
        Tl = (a = Tl) || u.memoizedState !== null, Qt(
          l,
          t,
          u
        ), Tl = a;
        break;
      default:
        Qt(
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
  function Qo(l) {
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
    var u = Qo(l);
    t.forEach(function(a) {
      var e = Wo.bind(null, l, a);
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
              if (iu(c.type)) {
                hl = c.stateNode, Jl = !1;
                break l;
              }
              break;
            case 5:
              hl = c.stateNode, Jl = !1;
              break l;
            case 3:
            case 4:
              hl = c.stateNode.containerInfo, Jl = !0;
              break l;
          }
          c = c.return;
        }
        if (hl === null) throw Error(m(160));
        L0(n, f, e), hl = null, Jl = !1, n = e.alternate, n !== null && (n.return = null), e.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        J0(t, l), t = t.sibling;
  }
  var St = null;
  function J0(l, t) {
    var u = l.alternate, a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ut(t, l), at(l), a & 4 && (lu(3, l, l.return), Fa(3, l), lu(5, l, l.return));
        break;
      case 1:
        ut(t, l), at(l), a & 512 && (Tl || u === null || zt(u, u.return)), a & 64 && Xt && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? a : u.concat(a))));
        break;
      case 26:
        var e = St;
        if (ut(t, l), at(l), a & 512 && (Tl || u === null || zt(u, u.return)), a & 4) {
          var n = u !== null ? u.memoizedState : null;
          if (a = l.memoizedState, u === null)
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  a = l.type, u = l.memoizedProps, e = e.ownerDocument || e;
                  t: switch (a) {
                    case "title":
                      n = e.getElementsByTagName("title")[0], (!n || n[Aa] || n[jl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(a), e.head.insertBefore(
                        n,
                        e.querySelector("head > title")
                      )), Bl(n, a, u), n[jl] = l, Dl(n), a = n;
                      break l;
                    case "link":
                      var f = Qv(
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
                      n = e.createElement(a), Bl(n, a, u), e.head.appendChild(n);
                      break;
                    case "meta":
                      if (f = Qv(
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
                      n = e.createElement(a), Bl(n, a, u), e.head.appendChild(n);
                      break;
                    default:
                      throw Error(m(468, a));
                  }
                  n[jl] = l, Dl(n), a = n;
                }
                l.stateNode = a;
              } else
                Cv(
                  e,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = Xv(
                e,
                a,
                l.memoizedProps
              );
          else
            n !== a ? (n === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : n.count--, a === null ? Cv(
              e,
              l.type,
              l.stateNode
            ) : Xv(
              e,
              a,
              l.memoizedProps
            )) : a === null && l.stateNode !== null && vc(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        ut(t, l), at(l), a & 512 && (Tl || u === null || zt(u, u.return)), u !== null && a & 4 && vc(
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
        a & 4 && l.stateNode != null && (e = l.memoizedProps, vc(
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
        if (On = null, e = St, St = zn(t.containerInfo), ut(t, l), St = e, at(l), a & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            re(t.containerInfo);
          } catch (r) {
            vl(l, l.return, r);
          }
        yc && (yc = !1, w0(l));
        break;
      case 4:
        a = St, St = zn(
          l.stateNode.containerInfo
        ), ut(t, l), at(l), St = a;
        break;
      case 12:
        ut(t, l), at(l);
        break;
      case 13:
        ut(t, l), at(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Tc = Tt()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, hc(l, a)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var i = u !== null && u.memoizedState !== null, y = Xt, g = Tl;
        if (Xt = y || e, Tl = g || i, ut(t, l), Tl = g, Xt = y, at(l), a & 8192)
          l: for (t = l.stateNode, t._visibility = e ? t._visibility & -2 : t._visibility | 1, e && (u === null || i || Xt || Tl || Hu(l)), u = null, t = l; ; ) {
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
            var e = u.stateNode, n = dc(l);
            vn(l, n, e);
            break;
          case 5:
            var f = u.stateNode;
            u.flags & 32 && (Cu(f, ""), u.flags &= -33);
            var c = dc(l);
            vn(l, c, f);
            break;
          case 3:
          case 4:
            var i = u.stateNode.containerInfo, y = dc(l);
            oc(
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
  function tu(l, t) {
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
          lu(4, t, t.return), Hu(t);
          break;
        case 1:
          zt(t, t.return);
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
          zt(t, t.return), Hu(t);
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
  function uu(l, t, u) {
    for (u = u && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, e = l, n = t, f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          uu(
            e,
            n,
            u
          ), Fa(4, n);
          break;
        case 1:
          if (uu(
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
          uu(
            e,
            n,
            u
          ), u && a === null && f & 4 && j0(n), Ia(n, n.return);
          break;
        case 12:
          uu(
            e,
            n,
            u
          );
          break;
        case 13:
          uu(
            e,
            n,
            u
          ), u && f & 4 && K0(e, n);
          break;
        case 22:
          n.memoizedState === null && uu(
            e,
            n,
            u
          ), Ia(n, n.return);
          break;
        case 30:
          break;
        default:
          uu(
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
  function _t(l, t, u, a) {
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
        )), e & 2048 && rc(f, t);
        break;
      case 24:
        _t(
          l,
          t,
          u,
          a
        ), e & 2048 && mc(t.alternate, t);
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
          St,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        ca(l);
        break;
      case 3:
      case 4:
        var t = St;
        St = zn(l.stateNode.containerInfo), ca(l), St = t;
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
          Rl = a, I0(
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
        te(l), l.flags & 2048 && lu(9, l, l.return);
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
          Rl = a, I0(
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
          lu(8, t, t.return), dn(t);
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
  function I0(l, t) {
    for (; Rl !== null; ) {
      var u = Rl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          lu(8, u, t);
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
      if (a = u.child, a !== null) a.return = u, Rl = a;
      else
        l: for (u = l; Rl !== null; ) {
          a = Rl;
          var e = a.sibling, n = a.return;
          if (V0(a), a === u) {
            Rl = null;
            break l;
          }
          if (e !== null) {
            e.return = n, Rl = e;
            break l;
          }
          Rl = n;
        }
    }
  }
  var Co = {
    getCacheForType: function(l) {
      var t = Xl(zl), u = t.data.get(l);
      return u === void 0 && (u = l(), t.data.set(l, u)), u;
    }
  }, Zo = typeof WeakMap == "function" ? WeakMap : Map, ul = 0, dl = null, L = null, W = 0, al = 0, et = null, au = !1, ia = !1, gc = !1, Ct = 0, Sl = 0, eu = 0, qu = 0, Sc = 0, rt = 0, sa = 0, ue = null, wl = null, bc = !1, Tc = 0, on = 1 / 0, yn = null, nu = null, pl = 0, fu = null, va = null, da = 0, Ec = 0, Ac = null, P0 = null, ae = 0, zc = null;
  function nt() {
    if ((ul & 2) !== 0 && W !== 0)
      return W & -W;
    if (S.T !== null) {
      var l = Iu;
      return l !== 0 ? l : Nc();
    }
    return ri();
  }
  function lv() {
    rt === 0 && (rt = (W & 536870912) === 0 || ll ? di() : 536870912);
    var l = ht.current;
    return l !== null && (l.flags |= 32), rt;
  }
  function ft(l, t, u) {
    (l === dl && (al === 2 || al === 9) || l.cancelPendingCommit !== null) && (oa(l, 0), cu(
      l,
      W,
      rt,
      !1
    )), Ea(l, u), ((ul & 2) === 0 || l !== dl) && (l === dl && ((ul & 2) === 0 && (qu |= u), Sl === 4 && cu(
      l,
      W,
      rt,
      !1
    )), Ot(l));
  }
  function tv(l, t, u) {
    if ((ul & 6) !== 0) throw Error(m(327));
    var a = !u && (t & 124) === 0 && (t & l.expiredLanes) === 0 || Ta(l, t), e = a ? Ko(l, t) : Dc(l, t, !0), n = a;
    do {
      if (e === 0) {
        ia && !a && cu(l, t, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, n && !Vo(u)) {
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
              if (i && (oa(c, f).flags |= 256), f = Dc(
                c,
                f,
                !1
              ), f !== 2) {
                if (gc && !i) {
                  c.errorRecoveryDisabledLanes |= n, qu |= n, e = 4;
                  break l;
                }
                n = wl, wl = e, n !== null && (wl === null ? wl = n : wl.push.apply(
                  wl,
                  n
                ));
              }
              e = f;
            }
            if (n = !1, e !== 2) continue;
          }
        }
        if (e === 1) {
          oa(l, 0), cu(l, t, 0, !0);
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
              cu(
                a,
                t,
                rt,
                !au
              );
              break l;
            case 2:
              wl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(m(329));
          }
          if ((t & 62914560) === t && (e = Tc + 300 - Tt(), 10 < e)) {
            if (cu(
              a,
              t,
              rt,
              !au
            ), ze(a, 0, !0) !== 0) break l;
            a.timeoutHandle = Nv(
              uv.bind(
                null,
                a,
                u,
                wl,
                yn,
                bc,
                t,
                rt,
                qu,
                sa,
                au,
                n,
                2,
                -0,
                0
              ),
              e
            );
            break l;
          }
          uv(
            a,
            u,
            wl,
            yn,
            bc,
            t,
            rt,
            qu,
            sa,
            au,
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
  function uv(l, t, u, a, e, n, f, c, i, y, g, T, h, r) {
    if (l.timeoutHandle = -1, T = t.subtreeFlags, (T & 8192 || (T & 16785408) === 16785408) && (ve = { stylesheets: null, count: 0, unsuspend: _y }, W0(t), T = Dy(), T !== null)) {
      l.cancelPendingCommit = T(
        sv.bind(
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
      ), cu(l, n, f, !y);
      return;
    }
    sv(
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
  function Vo(l) {
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
  function cu(l, t, u, a) {
    t &= ~Sc, t &= ~qu, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - Pl(e), f = 1 << n;
      a[n] = -1, e &= ~f;
    }
    u !== 0 && yi(l, u, t);
  }
  function hn() {
    return (ul & 6) === 0 ? (ee(0), !1) : !0;
  }
  function _c() {
    if (L !== null) {
      if (al === 0)
        var l = L.return;
      else
        l = L, pt = Du = null, Cf(l), ea = null, ka = 0, l = L;
      for (; l !== null; )
        Y0(l.alternate, l), l = l.return;
      L = null;
    }
  }
  function oa(l, t) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, cy(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), _c(), dl = l, L = u = Nt(l.current, null), W = t, al = 0, et = null, au = !1, ia = Ta(l, t), gc = !1, sa = rt = Sc = qu = eu = Sl = 0, wl = ue = null, bc = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var e = 31 - Pl(a), n = 1 << e;
        t |= l[e], a &= ~n;
      }
    return Ct = t, Ye(), u;
  }
  function av(l, t) {
    C = null, S.H = ln, t === Xa || t === Le ? (t = Ts(), al = 3) : t === gs ? (t = Ts(), al = 4) : al = t === E0 ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, et = t, L === null && (Sl = 1, nn(
      l,
      vt(t, l.current)
    ));
  }
  function ev() {
    var l = S.H;
    return S.H = ln, l === null ? ln : l;
  }
  function nv() {
    var l = S.A;
    return S.A = Co, l;
  }
  function Oc() {
    Sl = 4, au || (W & 4194048) !== W && ht.current !== null || (ia = !0), (eu & 134217727) === 0 && (qu & 134217727) === 0 || dl === null || cu(
      dl,
      W,
      rt,
      !1
    );
  }
  function Dc(l, t, u) {
    var a = ul;
    ul |= 2;
    var e = ev(), n = nv();
    (dl !== l || W !== t) && (yn = null, oa(l, t)), t = !1;
    var f = Sl;
    l: do
      try {
        if (al !== 0 && L !== null) {
          var c = L, i = et;
          switch (al) {
            case 8:
              _c(), f = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              ht.current === null && (t = !0);
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
        Lo(), f = Sl;
        break;
      } catch (g) {
        av(l, g);
      }
    while (!0);
    return t && l.shellSuspendCounter++, pt = Du = null, ul = a, S.H = e, S.A = n, L === null && (dl = null, W = 0, Ye()), f;
  }
  function Lo() {
    for (; L !== null; ) fv(L);
  }
  function Ko(l, t) {
    var u = ul;
    ul |= 2;
    var a = ev(), e = nv();
    dl !== l || W !== t ? (yn = null, on = Tt() + 500, oa(l, t)) : ia = Ta(
      l,
      t
    );
    l: do
      try {
        if (al !== 0 && L !== null) {
          t = L;
          var n = et;
          t: switch (al) {
            case 1:
              al = 0, et = null, ya(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (Ss(n)) {
                al = 0, et = null, cv(t);
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
              Ss(n) ? (al = 0, et = null, cv(t)) : (al = 0, et = null, ya(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (L.tag) {
                case 26:
                  f = L.memoizedState;
                case 5:
                case 27:
                  var c = L;
                  if (!f || Zv(f)) {
                    al = 0, et = null;
                    var i = c.sibling;
                    if (i !== null) L = i;
                    else {
                      var y = c.return;
                      y !== null ? (L = y, rn(y)) : L = null;
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
              _c(), Sl = 6;
              break l;
            default:
              throw Error(m(462));
          }
        }
        Jo();
        break;
      } catch (g) {
        av(l, g);
      }
    while (!0);
    return pt = Du = null, S.H = a, S.A = e, ul = u, L !== null ? 0 : (dl = null, W = 0, Ye(), Sl);
  }
  function Jo() {
    for (; L !== null && !yd(); )
      fv(L);
  }
  function fv(l) {
    var t = p0(l.alternate, l, Ct);
    l.memoizedProps = l.pendingProps, t === null ? rn(l) : L = t;
  }
  function cv(l) {
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
        Cf(t);
      default:
        Y0(u, t), t = L = is(t, Ct), t = p0(u, t, Ct);
    }
    l.memoizedProps = l.pendingProps, t === null ? rn(l) : L = t;
  }
  function ya(l, t, u, a) {
    pt = Du = null, Cf(t), ea = null, ka = 0;
    var e = t.return;
    try {
      if (Yo(
        l,
        e,
        t,
        u,
        W
      )) {
        Sl = 1, nn(
          l,
          vt(u, l.current)
        ), L = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw L = e, n;
      Sl = 1, nn(
        l,
        vt(u, l.current)
      ), L = null;
      return;
    }
    t.flags & 32768 ? (ll || a === 1 ? l = !0 : ia || (W & 536870912) !== 0 ? l = !1 : (au = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = ht.current, a !== null && a.tag === 13 && (a.flags |= 16384))), iv(t, l)) : rn(t);
  }
  function rn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        iv(
          t,
          au
        );
        return;
      }
      l = t.return;
      var u = Go(
        t.alternate,
        t,
        Ct
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
    Sl === 0 && (Sl = 5);
  }
  function iv(l, t) {
    do {
      var u = jo(l.alternate, l);
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
    Sl = 6, L = null;
  }
  function sv(l, t, u, a, e, n, f, c, i) {
    l.cancelPendingCommit = null;
    do
      mn();
    while (pl !== 0);
    if ((ul & 6) !== 0) throw Error(m(327));
    if (t !== null) {
      if (t === l.current) throw Error(m(177));
      if (n = t.lanes | t.childLanes, n |= mf, zd(
        l,
        u,
        n,
        f,
        c,
        i
      ), l === dl && (L = dl = null, W = 0), va = t, fu = l, da = u, Ec = n, Ac = e, P0 = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, $o(Te, function() {
        return hv(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = S.T, S.T = null, e = D.p, D.p = 2, f = ul, ul |= 4;
        try {
          Xo(l, t, u);
        } finally {
          ul = f, D.p = e, S.T = a;
        }
      }
      pl = 1, vv(), dv(), ov();
    }
  }
  function vv() {
    if (pl === 1) {
      pl = 0;
      var l = fu, t = va, u = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || u) {
        u = S.T, S.T = null;
        var a = D.p;
        D.p = 2;
        var e = ul;
        ul |= 4;
        try {
          J0(t, l);
          var n = jc, f = Ii(l.containerInfo), c = n.focusedElem, i = n.selectionRange;
          if (f !== c && c && c.ownerDocument && Fi(
            c.ownerDocument.documentElement,
            c
          )) {
            if (i !== null && df(c)) {
              var y = i.start, g = i.end;
              if (g === void 0 && (g = y), "selectionStart" in c)
                c.selectionStart = y, c.selectionEnd = Math.min(
                  g,
                  c.value.length
                );
              else {
                var T = c.ownerDocument || document, h = T && T.defaultView || window;
                if (h.getSelection) {
                  var r = h.getSelection(), x = c.textContent.length, q = Math.min(i.start, x), cl = i.end === void 0 ? q : Math.min(i.end, x);
                  !r.extend && q > cl && (f = cl, cl = q, q = f);
                  var d = $i(
                    c,
                    q
                  ), v = $i(
                    c,
                    cl
                  );
                  if (d && v && (r.rangeCount !== 1 || r.anchorNode !== d.node || r.anchorOffset !== d.offset || r.focusNode !== v.node || r.focusOffset !== v.offset)) {
                    var o = T.createRange();
                    o.setStart(d.node, d.offset), r.removeAllRanges(), q > cl ? (r.addRange(o), r.extend(v.node, v.offset)) : (o.setEnd(v.node, v.offset), r.addRange(o));
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
          ul = e, D.p = a, S.T = u;
        }
      }
      l.current = t, pl = 2;
    }
  }
  function dv() {
    if (pl === 2) {
      pl = 0;
      var l = fu, t = va, u = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || u) {
        u = S.T, S.T = null;
        var a = D.p;
        D.p = 2;
        var e = ul;
        ul |= 4;
        try {
          Z0(l, t.alternate, t);
        } finally {
          ul = e, D.p = a, S.T = u;
        }
      }
      pl = 3;
    }
  }
  function ov() {
    if (pl === 4 || pl === 3) {
      pl = 0, hd();
      var l = fu, t = va, u = da, a = P0;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? pl = 5 : (pl = 0, va = fu = null, yv(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (e === 0 && (nu = null), Vn(u), t = t.stateNode, Il && typeof Il.onCommitFiberRoot == "function")
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
      (da & 3) !== 0 && mn(), Ot(l), e = l.pendingLanes, (u & 4194090) !== 0 && (e & 42) !== 0 ? l === zc ? ae++ : (ae = 0, zc = l) : ae = 0, ee(0);
    }
  }
  function yv(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Ga(t)));
  }
  function mn(l) {
    return vv(), dv(), ov(), hv();
  }
  function hv() {
    if (pl !== 5) return !1;
    var l = fu, t = Ec;
    Ec = 0;
    var u = Vn(da), a = S.T, e = D.p;
    try {
      D.p = 32 > u ? 32 : u, S.T = null, u = Ac, Ac = null;
      var n = fu, f = da;
      if (pl = 0, va = fu = null, da = 0, (ul & 6) !== 0) throw Error(m(331));
      var c = ul;
      if (ul |= 4, F0(n.current), k0(
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
      D.p = e, S.T = a, yv(l, t);
    }
  }
  function rv(l, t, u) {
    t = vt(u, t), t = tc(l.stateNode, t, 2), l = $t(l, t, 2), l !== null && (Ea(l, 2), Ot(l));
  }
  function vl(l, t, u) {
    if (l.tag === 3)
      rv(l, l, u);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          rv(
            t,
            l,
            u
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (nu === null || !nu.has(a))) {
            l = vt(u, l), u = b0(2), a = $t(t, u, 2), a !== null && (T0(
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
  function Mc(l, t, u) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new Zo();
      var e = /* @__PURE__ */ new Set();
      a.set(t, e);
    } else
      e = a.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), a.set(t, e));
    e.has(u) || (gc = !0, e.add(u), l = wo.bind(null, l, t, u), t.then(l, l));
  }
  function wo(l, t, u) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, dl === l && (W & u) === u && (Sl === 4 || Sl === 3 && (W & 62914560) === W && 300 > Tt() - Tc ? (ul & 2) === 0 && oa(l, 0) : Sc |= u, sa === W && (sa = 0)), Ot(l);
  }
  function mv(l, t) {
    t === 0 && (t = oi()), l = ku(l, t), l !== null && (Ea(l, t), Ot(l));
  }
  function ko(l) {
    var t = l.memoizedState, u = 0;
    t !== null && (u = t.retryLane), mv(l, u);
  }
  function Wo(l, t) {
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
    a !== null && a.delete(t), mv(l, u);
  }
  function $o(l, t) {
    return Xn(l, t);
  }
  var gn = null, ha = null, Rc = !1, Sn = !1, Uc = !1, pu = 0;
  function Ot(l) {
    l !== ha && l.next === null && (ha === null ? gn = ha = l : ha = ha.next = l), Sn = !0, Rc || (Rc = !0, Io());
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
            n !== 0 && (u = !0, Tv(a, n));
          } else
            n = W, n = ze(
              a,
              a === dl ? n : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (n & 3) === 0 || Ta(a, n) || (u = !0, Tv(a, n));
          a = a.next;
        }
      while (u);
      Uc = !1;
    }
  }
  function Fo() {
    gv();
  }
  function gv() {
    Sn = Rc = !1;
    var l = 0;
    pu !== 0 && (fy() && (l = pu), pu = 0);
    for (var t = Tt(), u = null, a = gn; a !== null; ) {
      var e = a.next, n = Sv(a, t);
      n === 0 ? (a.next = null, u === null ? gn = e : u.next = e, e === null && (ha = u)) : (u = a, (l !== 0 || (n & 3) !== 0) && (Sn = !0)), a = e;
    }
    ee(l);
  }
  function Sv(l, t) {
    for (var u = l.suspendedLanes, a = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - Pl(n), c = 1 << f, i = e[f];
      i === -1 ? ((c & u) === 0 || (c & a) !== 0) && (e[f] = Ad(c, t)) : i <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = dl, u = W, u = ze(
      l,
      l === t ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a = l.callbackNode, u === 0 || l === t && (al === 2 || al === 9) || l.cancelPendingCommit !== null)
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
          u = vi;
          break;
        default:
          u = Te;
      }
      return a = bv.bind(null, l), u = Xn(u, a), l.callbackPriority = t, l.callbackNode = u, t;
    }
    return a !== null && a !== null && Qn(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function bv(l, t) {
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
    ), a === 0 ? null : (tv(l, a, t), Sv(l, Tt()), l.callbackNode != null && l.callbackNode === u ? bv.bind(null, l) : null);
  }
  function Tv(l, t) {
    if (mn()) return null;
    tv(l, t, !0);
  }
  function Io() {
    iy(function() {
      (ul & 6) !== 0 ? Xn(
        ii,
        Fo
      ) : gv();
    });
  }
  function Nc() {
    return pu === 0 && (pu = di()), pu;
  }
  function Ev(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Re("" + l);
  }
  function Av(l, t) {
    var u = t.ownerDocument.createElement("input");
    return u.name = t.name, u.value = t.value, l.id && u.setAttribute("form", l.id), t.parentNode.insertBefore(u, t), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function Po(l, t, u, a, e) {
    if (t === "submit" && u && u.stateNode === e) {
      var n = Ev(
        (e[Vl] || null).action
      ), f = a.submitter;
      f && (t = (t = f[Vl] || null) ? Ev(t.formAction) : f.getAttribute("formAction"), t !== null && (n = t, f = null));
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
                if (pu !== 0) {
                  var i = f ? Av(e, f) : new FormData(e);
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
                typeof n == "function" && (c.preventDefault(), i = f ? Av(e, f) : new FormData(e), $f(
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
    var qc = rf[Hc], ly = qc.toLowerCase(), ty = qc[0].toUpperCase() + qc.slice(1);
    gt(
      ly,
      "on" + ty
    );
  }
  gt(ts, "onAnimationEnd"), gt(us, "onAnimationIteration"), gt(as, "onAnimationStart"), gt("dblclick", "onDoubleClick"), gt("focusin", "onFocus"), gt("focusout", "onBlur"), gt(So, "onTransitionRun"), gt(bo, "onTransitionStart"), gt(To, "onTransitionCancel"), gt(es, "onTransitionEnd"), ju("onMouseEnter", ["mouseout", "mouseover"]), ju("onMouseLeave", ["mouseout", "mouseover"]), ju("onPointerEnter", ["pointerout", "pointerover"]), ju("onPointerLeave", ["pointerout", "pointerover"]), gu(
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
  function zv(l, t) {
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
    u.has(a) || (_v(t, l, 2, !1), u.add(a));
  }
  function pc(l, t, u) {
    var a = 0;
    t && (a |= 4), _v(
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
        u !== "selectionchange" && (uy.has(u) || pc(u, !1, l), pc(u, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[bn] || (t[bn] = !0, pc("selectionchange", !1, t));
    }
  }
  function _v(l, t, u, a) {
    switch (kv(t)) {
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
          var r = qe, x = l;
          switch (l) {
            case "keypress":
              if (Ne(u) === 0) break l;
            case "keydown":
            case "keyup":
              r = Wd;
              break;
            case "focusin":
              x = "focus", r = nf;
              break;
            case "focusout":
              x = "blur", r = nf;
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
              r = Gd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              r = Id;
              break;
            case ts:
            case us:
            case as:
              r = Qd;
              break;
            case es:
              r = lo;
              break;
            case "scroll":
            case "scrollend":
              r = Yd;
              break;
            case "wheel":
              r = uo;
              break;
            case "copy":
            case "cut":
            case "paste":
              r = Zd;
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
              r = eo;
          }
          var q = (t & 4) !== 0, cl = !q && (l === "scroll" || l === "scrollend"), d = q ? h !== null ? h + "Capture" : null : h;
          q = [];
          for (var v = y, o; v !== null; ) {
            var b = v;
            if (o = b.stateNode, b = b.tag, b !== 5 && b !== 26 && b !== 27 || o === null || d === null || (b = _a(v, d), b != null && q.push(
              fe(v, b, o)
            )), cl) break;
            v = v.return;
          }
          0 < q.length && (h = new r(
            h,
            x,
            null,
            u,
            g
          ), T.push({ event: h, listeners: q }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (h = l === "mouseover" || l === "pointerover", r = l === "mouseout" || l === "pointerout", h && u !== In && (x = u.relatedTarget || u.fromElement) && (Yu(x) || x[Bu]))
            break l;
          if ((r || h) && (h = g.window === g ? g : (h = g.ownerDocument) ? h.defaultView || h.parentWindow : window, r ? (x = u.relatedTarget || u.toElement, r = y, x = x ? Yu(x) : null, x !== null && (cl = P(x), q = x.tag, x !== cl || q !== 5 && q !== 27 && q !== 6) && (x = null)) : (r = null, x = y), r !== x)) {
            if (q = Bi, b = "onMouseLeave", d = "onMouseEnter", v = "mouse", (l === "pointerout" || l === "pointerover") && (q = xi, b = "onPointerLeave", d = "onPointerEnter", v = "pointer"), cl = r == null ? h : za(r), o = x == null ? h : za(x), h = new q(
              b,
              v + "leave",
              r,
              u,
              g
            ), h.target = cl, h.relatedTarget = o, b = null, Yu(g) === y && (q = new q(
              d,
              v + "enter",
              x,
              u,
              g
            ), q.target = o, q.relatedTarget = cl, b = q), cl = b, r && x)
              t: {
                for (q = r, d = x, v = 0, o = q; o; o = ra(o))
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
            r !== null && Ov(
              T,
              h,
              r,
              q,
              !1
            ), x !== null && cl !== null && Ov(
              T,
              cl,
              x,
              q,
              !0
            );
          }
        }
        l: {
          if (h = y ? za(y) : window, r = h.nodeName && h.nodeName.toLowerCase(), r === "select" || r === "input" && h.type === "file")
            var R = Li;
          else if (Zi(h))
            if (Ki)
              R = ro;
            else {
              R = yo;
              var V = oo;
            }
          else
            r = h.nodeName, !r || r.toLowerCase() !== "input" || h.type !== "checkbox" && h.type !== "radio" ? y && Fn(y.elementType) && (R = Li) : R = ho;
          if (R && (R = R(l, y))) {
            Vi(
              T,
              R,
              u,
              g
            );
            break l;
          }
          V && V(l, h, y), l === "focusout" && y && h.type === "number" && y.memoizedProps.value != null && $n(h, "number", h.value);
        }
        switch (V = y ? za(y) : window, l) {
          case "focusin":
            (Zi(V) || V.contentEditable === "true") && (Ku = V, of = y, qa = null);
            break;
          case "focusout":
            qa = of = Ku = null;
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
            if (go) break;
          case "keydown":
          case "keyup":
            Pi(T, u, g);
        }
        var U;
        if (cf)
          l: {
            switch (l) {
              case "compositionstart":
                var p = "onCompositionStart";
                break l;
              case "compositionend":
                p = "onCompositionEnd";
                break l;
              case "compositionupdate":
                p = "onCompositionUpdate";
                break l;
            }
            p = void 0;
          }
        else
          Lu ? Qi(l, u) && (p = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (p = "onCompositionStart");
        p && (Gi && u.locale !== "ko" && (Lu || p !== "onCompositionStart" ? p === "onCompositionEnd" && Lu && (U = qi()) : (Jt = g, uf = "value" in Jt ? Jt.value : Jt.textContent, Lu = !0)), V = Tn(y, p), 0 < V.length && (p = new Yi(
          p,
          l,
          null,
          u,
          g
        ), T.push({ event: p, listeners: V }), U ? p.data = U : (U = Ci(u), U !== null && (p.data = U)))), (U = fo ? co(l, u) : io(l, u)) && (p = Tn(y, "onBeforeInput"), 0 < p.length && (V = new Yi(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          g
        ), T.push({
          event: V,
          listeners: p
        }), V.data = U)), Po(
          T,
          l,
          y,
          u,
          g
        );
      }
      zv(T, t);
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
  function Ov(l, t, u, a, e) {
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
  function Dv(l) {
    return (typeof l == "string" ? l : "" + l).replace(ay, `
`).replace(ey, "");
  }
  function Mv(l, t) {
    return t = Dv(t), Dv(l) === t;
  }
  function En() {
  }
  function fl(l, t, u, a, e, n) {
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
          typeof n == "function" && (u === "formAction" ? (t !== "input" && fl(l, t, "name", e.name, e, null), fl(
            l,
            t,
            "formEncType",
            e.formEncType,
            e,
            null
          ), fl(
            l,
            t,
            "formMethod",
            e.formMethod,
            e,
            null
          ), fl(
            l,
            t,
            "formTarget",
            e.formTarget,
            e,
            null
          )) : (fl(l, t, "encType", e.encType, e, null), fl(l, t, "method", e.method, e, null), fl(l, t, "target", e.target, e, null)));
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
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Rt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Rt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Rt(
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
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = pd.get(u) || u, _e(l, u, a));
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
            if (u[0] === "o" && u[1] === "n" && (e = u.endsWith("Capture"), t = u.slice(2, e ? u.length - 7 : void 0), n = l[Vl] || null, n = n != null ? n[u] : null, typeof n == "function" && l.removeEventListener(t, n, e), typeof a == "function")) {
              typeof n != "function" && n !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(t, a, e);
              break l;
            }
            u in l ? l[u] = a : a === !0 ? l.setAttribute(u, "") : _e(l, u, a);
          }
    }
  }
  function Bl(l, t, u) {
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
                  fl(l, t, n, f, u, null);
              }
          }
        e && fl(l, t, "srcSet", u.srcSet, u, null), a && fl(l, t, "src", u.src, u, null);
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
                  fl(l, t, a, g, u, null);
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
                fl(l, t, e, c, u, null);
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
                fl(l, t, f, c, u, null);
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
                fl(l, t, i, a, u, null);
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
                fl(l, t, y, a, u, null);
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
      u.hasOwnProperty(c) && (a = u[c], a != null && fl(l, t, c, a, u, null));
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
                a.hasOwnProperty(r) || fl(l, t, r, null, a, T);
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
                r !== T && fl(
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
                a.hasOwnProperty(n) || fl(
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
                n !== i && fl(
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
                fl(l, t, c, null, a, e);
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
                e !== n && fl(l, t, f, e, a, n);
            }
        Di(l, h, r);
        return;
      case "option":
        for (var x in u)
          if (h = u[x], u.hasOwnProperty(x) && h != null && !a.hasOwnProperty(x))
            switch (x) {
              case "selected":
                l.selected = !1;
                break;
              default:
                fl(
                  l,
                  t,
                  x,
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
                fl(
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
          h = u[q], u.hasOwnProperty(q) && h != null && !a.hasOwnProperty(q) && fl(l, t, q, null, a, h);
        for (y in a)
          if (h = a[y], r = u[y], a.hasOwnProperty(y) && h !== r && (h != null || r != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (h != null)
                  throw Error(m(137, t));
                break;
              default:
                fl(
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
          for (var cl in u)
            h = u[cl], u.hasOwnProperty(cl) && h !== void 0 && !a.hasOwnProperty(cl) && xc(
              l,
              t,
              cl,
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
    for (var d in u)
      h = u[d], u.hasOwnProperty(d) && h != null && !a.hasOwnProperty(d) && fl(l, t, d, null, a, h);
    for (T in a)
      h = a[T], r = u[T], !a.hasOwnProperty(T) || h === r || h == null && r == null || fl(l, t, T, h, a, r);
  }
  var Gc = null, jc = null;
  function An(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Rv(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Uv(l, t) {
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
  var Nv = typeof setTimeout == "function" ? setTimeout : void 0, cy = typeof clearTimeout == "function" ? clearTimeout : void 0, Hv = typeof Promise == "function" ? Promise : void 0, iy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Hv < "u" ? function(l) {
    return Hv.resolve(null).then(l).catch(sy);
  } : Nv;
  function sy(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function iu(l) {
    return l === "head";
  }
  function qv(l, t) {
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
  function vy(l, t, u, a) {
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
      if (l = bt(l.nextSibling), l === null) break;
    }
    return null;
  }
  function dy(l, t, u) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = bt(l.nextSibling), l === null)) return null;
    return l;
  }
  function Zc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete";
  }
  function oy(l, t) {
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
  function bt(l) {
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
  function pv(l) {
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
  function Bv(l, t, u) {
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
  var mt = /* @__PURE__ */ new Map(), Yv = /* @__PURE__ */ new Set();
  function zn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Zt = D.d;
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
    var l = Zt.f(), t = hn();
    return l || t;
  }
  function hy(l) {
    var t = xu(l);
    t !== null && t.tag === 5 && t.type === "form" ? t0(t) : Zt.r(l);
  }
  var ma = typeof document > "u" ? null : document;
  function xv(l, t, u) {
    var a = ma;
    if (a && typeof t == "string" && t) {
      var e = st(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof u == "string" && (e += '[crossorigin="' + u + '"]'), Yv.has(e) || (Yv.add(e), l = { rel: l, crossOrigin: u, href: t }, a.querySelector(e) === null && (t = a.createElement("link"), Bl(t, "link", l), Dl(t), a.head.appendChild(t)));
    }
  }
  function ry(l) {
    Zt.D(l), xv("dns-prefetch", l, null);
  }
  function my(l, t) {
    Zt.C(l, t), xv("preconnect", l, t);
  }
  function gy(l, t, u) {
    Zt.L(l, t, u);
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
      ), mt.set(n, l), a.querySelector(e) !== null || t === "style" && a.querySelector(ie(n)) || t === "script" && a.querySelector(se(n)) || (t = a.createElement("link"), Bl(t, "link", l), Dl(t), a.head.appendChild(t)));
    }
  }
  function Sy(l, t) {
    Zt.m(l, t);
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
        a = u.createElement("link"), Bl(a, "link", l), Dl(a), u.head.appendChild(a);
      }
    }
  }
  function by(l, t, u) {
    Zt.S(l, t, u);
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
          Dl(i), Bl(i, "link", l), i._p = new Promise(function(y, g) {
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
    Zt.X(l, t);
    var u = ma;
    if (u && l) {
      var a = Gu(u).hoistableScripts, e = Sa(l), n = a.get(e);
      n || (n = u.querySelector(se(e)), n || (l = N({ src: l, async: !0 }, t), (t = mt.get(e)) && Kc(l, t), n = u.createElement("script"), Dl(n), Bl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function Ey(l, t) {
    Zt.M(l, t);
    var u = ma;
    if (u && l) {
      var a = Gu(u).hoistableScripts, e = Sa(l), n = a.get(e);
      n || (n = u.querySelector(se(e)), n || (l = N({ src: l, async: !0, type: "module" }, t), (t = mt.get(e)) && Kc(l, t), n = u.createElement("script"), Dl(n), Bl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function Gv(l, t, u, a) {
    var e = (e = G.current) ? zn(e) : null;
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
  function jv(l) {
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
    }), Bl(t, "link", u), Dl(t), l.head.appendChild(t));
  }
  function Sa(l) {
    return '[src="' + st(l) + '"]';
  }
  function se(l) {
    return "script[async]" + l;
  }
  function Xv(l, t, u) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = l.querySelector(
            'style[data-href~="' + st(u.href) + '"]'
          );
          if (a)
            return t.instance = a, Dl(a), a;
          var e = N({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement(
            "style"
          ), Dl(a), Bl(a, "style", e), _n(a, u.precedence, l), t.instance = a;
        case "stylesheet":
          e = ga(u.href);
          var n = l.querySelector(
            ie(e)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, Dl(n), n;
          a = jv(u), (e = mt.get(e)) && Lc(a, e), n = (l.ownerDocument || l).createElement("link"), Dl(n);
          var f = n;
          return f._p = new Promise(function(c, i) {
            f.onload = c, f.onerror = i;
          }), Bl(n, "link", a), t.state.loading |= 4, _n(n, u.precedence, l), t.instance = n;
        case "script":
          return n = Sa(u.src), (e = l.querySelector(
            se(n)
          )) ? (t.instance = e, Dl(e), e) : (a = u, (e = mt.get(n)) && (a = N({}, u), Kc(a, e)), l = l.ownerDocument || l, e = l.createElement("script"), Dl(e), Bl(e, "link", a), l.head.appendChild(e), t.instance = e);
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
  function Qv(l, t, u) {
    if (On === null) {
      var a = /* @__PURE__ */ new Map(), e = On = /* @__PURE__ */ new Map();
      e.set(u, a);
    } else
      e = On, a = e.get(u), a || (a = /* @__PURE__ */ new Map(), e.set(u, a));
    if (a.has(l)) return a;
    for (a.set(l, null), u = u.getElementsByTagName(l), e = 0; e < u.length; e++) {
      var n = u[e];
      if (!(n[Aa] || n[jl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var c = a.get(f);
        c ? c.push(n) : a.set(f, [n]);
      }
    }
    return a;
  }
  function Cv(l, t, u) {
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
  function Zv(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var ve = null;
  function _y() {
  }
  function Oy(l, t, u) {
    if (ve === null) throw Error(m(475));
    var a = ve;
    if (t.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var e = ga(u.href), n = l.querySelector(
          ie(e)
        );
        if (n) {
          l = n._p, l !== null && typeof l == "object" && typeof l.then == "function" && (a.count++, a = Dn.bind(a), l.then(a, a)), t.state.loading |= 4, t.instance = n, Dl(n);
          return;
        }
        n = l.ownerDocument || l, u = jv(u), (e = mt.get(e)) && Lc(u, e), n = n.createElement("link"), Dl(n);
        var f = n;
        f._p = new Promise(function(c, i) {
          f.onload = c, f.onerror = i;
        }), Bl(n, "link", u), t.instance = n;
      }
      a.stylesheets === null && (a.stylesheets = /* @__PURE__ */ new Map()), a.stylesheets.set(t, l), (l = t.state.preload) && (t.state.loading & 3) === 0 && (a.count++, t = Dn.bind(a), l.addEventListener("load", t), l.addEventListener("error", t));
    }
  }
  function Dy() {
    if (ve === null) throw Error(m(475));
    var l = ve;
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
  var de = {
    $$typeof: X,
    Provider: null,
    Consumer: null,
    _currentValue: Y,
    _currentValue2: Y,
    _threadCount: 0
  };
  function Ry(l, t, u, a, e, n, f, c) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Cn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Cn(0), this.hiddenUpdates = Cn(null), this.identifierPrefix = a, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Vv(l, t, u, a, e, n, f, c, i, y, g, T) {
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
  function Lv(l) {
    return l ? (l = Wu, l) : Wu;
  }
  function Kv(l, t, u, a, e, n) {
    e = Lv(e), a.context === null ? a.context = e : a.pendingContext = e, a = Wt(t), a.payload = { element: u }, n = n === void 0 ? null : n, n !== null && (a.callback = n), u = $t(l, a, t), u !== null && (ft(u, l, t), Ca(u, l, t));
  }
  function Jv(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < t ? u : t;
    }
  }
  function wc(l, t) {
    Jv(l, t), (l = l.alternate) && Jv(l, t);
  }
  function wv(l) {
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
        ), Wv(l, a);
      else if (qy(
        e,
        l,
        t,
        u,
        a
      ))
        a.stopPropagation();
      else if (Wv(l, a), t & 4 && -1 < Hy.indexOf(l)) {
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
                    Ot(n), (ul & 6) === 0 && (on = Tt() + 500, ee(0));
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
      var t = P(l);
      if (t === null) l = null;
      else {
        var u = t.tag;
        if (u === 13) {
          if (l = tl(t), l !== null) return l;
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
  function kv(l) {
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
        switch (rd()) {
          case ii:
            return 2;
          case si:
            return 8;
          case Te:
          case md:
            return 32;
          case vi:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Fc = !1, su = null, vu = null, du = null, oe = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), ou = [], Hy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Wv(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        su = null;
        break;
      case "dragenter":
      case "dragleave":
        vu = null;
        break;
      case "mouseover":
      case "mouseout":
        du = null;
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
    }, t !== null && (t = xu(t), t !== null && wv(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function qy(l, t, u, a, e) {
    switch (t) {
      case "focusin":
        return su = he(
          su,
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
        return du = he(
          du,
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
  function $v(l) {
    var t = Yu(l.target);
    if (t !== null) {
      var u = P(t);
      if (u !== null) {
        if (t = u.tag, t === 13) {
          if (t = tl(u), t !== null) {
            l.blockedOn = t, _d(l.priority, function() {
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
        return t = xu(u), t !== null && wv(t), l.blockedOn = u, !1;
      t.shift();
    }
    return !0;
  }
  function Fv(l, t, u) {
    Nn(l) && u.delete(t);
  }
  function py() {
    Fc = !1, su !== null && Nn(su) && (su = null), vu !== null && Nn(vu) && (vu = null), du !== null && Nn(du) && (du = null), oe.forEach(Fv), ye.forEach(Fv);
  }
  function Hn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, Fc || (Fc = !0, z.unstable_scheduleCallback(
      z.unstable_NormalPriority,
      py
    )));
  }
  var qn = null;
  function Iv(l) {
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
      return Hn(i, l);
    }
    su !== null && Hn(su, l), vu !== null && Hn(vu, l), du !== null && Hn(du, l), oe.forEach(t), ye.forEach(t);
    for (var u = 0; u < ou.length; u++) {
      var a = ou[u];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < ou.length && (u = ou[0], u.blockedOn === null); )
      $v(u), u.blockedOn === null && ou.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (a = 0; a < u.length; a += 3) {
        var e = u[a], n = u[a + 1], f = e[Vl] || null;
        if (typeof n == "function")
          f || Iv(u);
        else if (f) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, f = n[Vl] || null)
              c = f.formAction;
            else if ($c(e) !== null) continue;
          } else c = f.action;
          typeof c == "function" ? u[a + 1] = c : (u.splice(a, 3), a -= 3), Iv(u);
        }
      }
  }
  function Ic(l) {
    this._internalRoot = l;
  }
  pn.prototype.render = Ic.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(m(409));
    var u = t.current, a = nt();
    Kv(u, a, l, t, null, null);
  }, pn.prototype.unmount = Ic.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      Kv(l.current, 2, null, l, null, null), hn(), t[Bu] = null;
    }
  };
  function pn(l) {
    this._internalRoot = l;
  }
  pn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = ri();
      l = { blockedOn: null, target: l, priority: t };
      for (var u = 0; u < ou.length && t !== 0 && t < ou[u].priority; u++) ;
      ou.splice(u, 0, l), u === 0 && $v(l);
    }
  };
  var Pv = J.version;
  if (Pv !== "19.1.1")
    throw Error(
      m(
        527,
        Pv,
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
    if (!w(l)) throw Error(m(299));
    var u = !1, a = "", e = r0, n = m0, f = g0, c = null;
    return t != null && (t.unstable_strictMode === !0 && (u = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (c = t.unstable_transitionCallbacks)), t = Vv(
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
    if (!w(l)) throw Error(m(299));
    var a = !1, e = "", n = r0, f = m0, c = g0, i = null, y = null;
    return u != null && (u.unstable_strictMode === !0 && (a = !0), u.identifierPrefix !== void 0 && (e = u.identifierPrefix), u.onUncaughtError !== void 0 && (n = u.onUncaughtError), u.onCaughtError !== void 0 && (f = u.onCaughtError), u.onRecoverableError !== void 0 && (c = u.onRecoverableError), u.unstable_transitionCallbacks !== void 0 && (i = u.unstable_transitionCallbacks), u.formState !== void 0 && (y = u.formState)), t = Vv(
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
    ), t.context = Lv(null), u = t.current, a = nt(), a = Zn(a), e = Wt(a), e.callback = null, $t(u, e, a), u = a, t.current.lanes = u, Ea(t, u), Ot(t), l[Bu] = t.current, Bc(l), new pn(t);
  }, ge.version = "19.1.1", ge;
}
var sd;
function Ly() {
  if (sd) return ti.exports;
  sd = 1;
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
const fi = (z) => window.parent.postMessage(z, "*"), vd = () => fi({ action: "closePopup" }), Jy = (z, J) => z && J ? J.toLowerCase().includes(z.toLowerCase()) : !1;
function Yn(z) {
  const J = ml.useRef(z);
  return ml.useEffect(() => {
    J.current = z;
  }, [z]), J;
}
let Se = ["title", "url", "parentTitle"];
const wy = () => {
  const [z, J] = ml.useState([]), [j, m] = ml.useState([]), [w, P] = ml.useState([]), tl = Yn(w), k = ml.useRef(null), [_, E] = ml.useState(""), N = Yn(_), [el, $] = ml.useState(""), Nl = Yn(el), [Hl, kl] = ml.useState({
    openNewTab: "1",
    searchRule: ["url", "title", "parentTitle"],
    useDefaultSearch: "0"
  }), Yl = Yn(Hl), Dt = ml.useCallback(async () => {
    const X = await chrome.storage.local.get("searchBookmarkSetting");
    X.searchBookmarkSetting && (Se = X.searchBookmarkSetting.searchRule, kl(X.searchBookmarkSetting));
  }, []);
  ml.useEffect(() => {
    const X = (ol) => {
      ol.action === "updateBookMarks" && Dt().finally(() => {
        const { bookmarks: B = [], historyBookmarks: il = [] } = ol;
        J(B), m(il), k.current?.focus();
      });
    };
    return chrome.runtime?.onMessage?.addListener(X), fi({ action: "initSuccess" }), () => {
      chrome.runtime?.onMessage?.removeListener(X);
    };
  }, [k]), ml.useEffect(() => {
    if (!_)
      P(j), $(j[0]?.id || "");
    else {
      const X = Array.from(
        { length: Se.length },
        () => []
      );
      for (let B = 0; B < Se.length; B++)
        X[B] = z.filter(
          (il) => Jy(_, Reflect.get(il, Se[B]))
        ).sort((il, Cl) => {
          const Ol = Se[B], $l = Reflect.get(il, Ol) || "", Mt = Reflect.get(Cl, Ol) || "", ct = _.toLowerCase();
          return Ol === "title" ? $l.length - Mt.length : Ol === "url" ? ct.indexOf($l) - ct.indexOf(Mt) : 1;
        });
      const ol = X.reduce(
        (B, il) => [.../* @__PURE__ */ new Set([...B, ...il])],
        []
      );
      P(ol), $(ol[0]?.id || "");
    }
  }, [_, z, j]);
  const Wl = ml.useCallback((X) => {
    $(X?.id || ""), !(!X?.url && Yl.current.useDefaultSearch === "0") && (fi({
      action: "goToBookmark",
      url: X?.url || "",
      keyword: N.current
    }), vd(), E(""));
  }, []);
  return ml.useEffect(() => {
    const X = (ol) => {
      if (ol.key === "Escape") {
        vd(), E("");
        return;
      }
      const B = tl.current.findIndex(
        (il) => il.id === Nl.current
      );
      if (B > -1) {
        if (ol.key === "ArrowUp") {
          const il = B === 0 ? tl.current.length - 1 : B - 1;
          $(tl.current[il].id), ol.preventDefault();
        }
        if (ol.key === "ArrowDown") {
          const il = B === tl.current.length - 1 ? 0 : B + 1;
          $(tl.current[il].id), ol.preventDefault();
        }
      }
      ol.key === "Enter" && (Wl(tl.current[B]), ol.preventDefault());
    };
    return window.addEventListener("keydown", X), () => {
      window.removeEventListener("keydown", X);
    };
  }, [Wl]), /* @__PURE__ */ Z.jsx("div", { className: "bookmarks-search__container", children: /* @__PURE__ */ Z.jsxs("div", { className: "bookmarks-search__content", children: [
    /* @__PURE__ */ Z.jsx("div", { className: "bookmarks-search__search", children: /* @__PURE__ */ Z.jsx(
      "input",
      {
        placeholder: "请输入要搜索的关键字",
        type: "text",
        autoComplete: "off",
        className: "bookmarks-search__search-input",
        autoFocus: !0,
        ref: k,
        value: _,
        onChange: (X) => E(X.target.value)
      }
    ) }),
    /* @__PURE__ */ Z.jsx("div", { className: "bookmarks-search__list", children: w.map((X) => /* @__PURE__ */ Z.jsxs(
      "div",
      {
        onClick: () => Wl(X),
        className: `bookmarks-search__list-item ${el === X.id ? "bookmarks-search__list-item-active" : ""}`,
        children: [
          X.faviconURL && /* @__PURE__ */ Z.jsx(
            "img",
            {
              className: "bookmarks-search__list-item-favicon",
              src: X.faviconURL,
              alt: X.title
            }
          ),
          X.title
        ]
      },
      X.id
    )) })
  ] }) });
}, ky = ({
  name: z,
  value: J,
  onChange: j,
  options: m
}) => {
  const [w, P] = ml.useState(J), tl = (k) => {
    const _ = w.includes(k) ? w.filter((E) => E !== k) : [...w, k];
    P(_), j?.(_);
  };
  return /* @__PURE__ */ Z.jsx("div", { className: "checkbox__group", children: m?.map((k) => /* @__PURE__ */ Z.jsx(Z.Fragment, { children: /* @__PURE__ */ Z.jsxs("label", { className: "checkbox", children: [
    /* @__PURE__ */ Z.jsx(
      "input",
      {
        type: "checkbox",
        name: z,
        value: k.value,
        checked: w.includes(k.value),
        onChange: () => tl(k.value)
      }
    ),
    /* @__PURE__ */ Z.jsx("span", { children: k.name })
  ] }) })) });
}, ni = ({
  label: z,
  children: J
}) => /* @__PURE__ */ Z.jsxs("div", { className: "form-item", children: [
  /* @__PURE__ */ Z.jsx("div", { className: "form-item__label", children: z }),
  /* @__PURE__ */ Z.jsx("div", { className: "form-item__content", children: J })
] }), od = ml.createContext({
  value: "0",
  name: "",
  onChange: (z) => {
  }
}), dd = ({
  children: z,
  name: J,
  value: j,
  onChange: m
}) => {
  const [w, P] = ml.useState(j), tl = (k) => {
    P(k), m?.(k);
  };
  return /* @__PURE__ */ Z.jsx(
    od.Provider,
    {
      value: { value: w, name: J, onChange: tl },
      children: /* @__PURE__ */ Z.jsx("div", { className: "radio-group", children: z })
    }
  );
}, xn = ({
  value: z,
  children: J
}) => {
  const { value: j, name: m, onChange: w } = ml.useContext(od);
  return /* @__PURE__ */ Z.jsxs("label", { className: "radio", children: [
    /* @__PURE__ */ Z.jsx(
      "input",
      {
        type: "radio",
        name: m,
        value: z,
        checked: j === z,
        onChange: (P) => w(P.target.value)
      }
    ),
    /* @__PURE__ */ Z.jsx("span", { children: J })
  ] });
}, Wy = () => {
  const [z, J] = ml.useState(!0), [j, m] = ml.useState({
    openNewTab: "1",
    searchRule: ["url", "title", "parentTitle"],
    useDefaultSearch: "0"
  }), [w, P] = ml.useState(!1), tl = async () => {
    if (!w) {
      P(!0);
      try {
        await chrome.storage.local.set({ searchBookmarkSetting: j }), await chrome.notifications.create({
          type: "basic",
          iconUrl: "icons/icon.png",
          title: "提示",
          message: "设置已保存，新设置重新打开搜索框即可生效。"
        });
      } finally {
        P(!1);
      }
      window.close();
    }
  }, k = (_) => {
    m({ ...j, ..._ });
  };
  return ml.useEffect(() => {
    chrome.storage.local.get("searchBookmarkSetting", (_) => {
      _.searchBookmarkSetting && m({ ...j, ..._.searchBookmarkSetting }), J(!1);
    });
  }, []), !z && /* @__PURE__ */ Z.jsxs("div", { className: "setting__container", children: [
    /* @__PURE__ */ Z.jsx("div", { className: "setting__title", children: "设置" }),
    /* @__PURE__ */ Z.jsxs("div", { className: "setting__content", children: [
      /* @__PURE__ */ Z.jsx(ni, { label: "是否新窗口打开", children: /* @__PURE__ */ Z.jsxs(
        dd,
        {
          name: "openNewTab",
          value: j.openNewTab,
          onChange: (_) => k({ openNewTab: _ }),
          children: [
            /* @__PURE__ */ Z.jsx(xn, { value: "0", children: "否（通过匹配域名查找已打开页面）" }),
            /* @__PURE__ */ Z.jsx(xn, { value: "1", children: "是" })
          ]
        }
      ) }),
      /* @__PURE__ */ Z.jsx(ni, { label: "查找规则", children: /* @__PURE__ */ Z.jsx(
        ky,
        {
          name: "searchRule",
          value: j.searchRule,
          onChange: (_) => k({
            searchRule: _
          }),
          options: [
            { name: "URL", value: "url" },
            { name: "标题", value: "title" },
            { name: "父节点标题", value: "parentTitle" }
          ]
        }
      ) }),
      /* @__PURE__ */ Z.jsx(ni, { label: "搜索为空时是否使用默认搜索引擎搜索", children: /* @__PURE__ */ Z.jsxs(
        dd,
        {
          name: "useDefaultSearch",
          value: j.useDefaultSearch,
          onChange: (_) => k({ useDefaultSearch: _ }),
          children: [
            /* @__PURE__ */ Z.jsx(xn, { value: "0", children: "否" }),
            /* @__PURE__ */ Z.jsx(xn, { value: "1", children: "是" })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ Z.jsx("div", { className: "setting__footer", children: /* @__PURE__ */ Z.jsx("div", { className: "submit-button", onClick: tl, children: "保存设置" }) })
  ] });
}, $y = window.self !== window.top;
Ky.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ Z.jsx(ml.StrictMode, { children: $y ? /* @__PURE__ */ Z.jsx(wy, {}) : /* @__PURE__ */ Z.jsx(Wy, {}) })
);
