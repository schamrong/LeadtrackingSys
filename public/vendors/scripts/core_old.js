/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function (a, b) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = a.document
              ? b(a, !0)
              : function (a) {
                    if (!a.document)
                        throw new Error(
                            "jQuery requires a window with a document"
                        );
                    return b(a);
                })
        : b(a);
})("undefined" != typeof window ? window : this, function (a, b) {
    "use strict";
    var c = [],
        d = a.document,
        e = Object.getPrototypeOf,
        f = c.slice,
        g = c.concat,
        h = c.push,
        i = c.indexOf,
        j = {},
        k = j.toString,
        l = j.hasOwnProperty,
        m = l.toString,
        n = m.call(Object),
        o = {};
    function p(a, b) {
        b = b || d;
        var c = b.createElement("script");
        (c.text = a), b.head.appendChild(c).parentNode.removeChild(c);
    }
    var q = "3.2.1",
        r = function (a, b) {
            return new r.fn.init(a, b);
        },
        s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        t = /^-ms-/,
        u = /-([a-z])/g,
        v = function (a, b) {
            return b.toUpperCase();
        };
    (r.fn = r.prototype =
        {
            jquery: q,
            constructor: r,
            length: 0,
            toArray: function () {
                return f.call(this);
            },
            get: function (a) {
                return null == a
                    ? f.call(this)
                    : a < 0
                    ? this[a + this.length]
                    : this[a];
            },
            pushStack: function (a) {
                var b = r.merge(this.constructor(), a);
                return (b.prevObject = this), b;
            },
            each: function (a) {
                return r.each(this, a);
            },
            map: function (a) {
                return this.pushStack(
                    r.map(this, function (b, c) {
                        return a.call(b, c, b);
                    })
                );
            },
            slice: function () {
                return this.pushStack(f.apply(this, arguments));
            },
            first: function () {
                return this.eq(0);
            },
            last: function () {
                return this.eq(-1);
            },
            eq: function (a) {
                var b = this.length,
                    c = +a + (a < 0 ? b : 0);
                return this.pushStack(c >= 0 && c < b ? [this[c]] : []);
            },
            end: function () {
                return this.prevObject || this.constructor();
            },
            push: h,
            sort: c.sort,
            splice: c.splice,
        }),
        (r.extend = r.fn.extend =
            function () {
                var a,
                    b,
                    c,
                    d,
                    e,
                    f,
                    g = arguments[0] || {},
                    h = 1,
                    i = arguments.length,
                    j = !1;
                for (
                    "boolean" == typeof g &&
                        ((j = g), (g = arguments[h] || {}), h++),
                        "object" == typeof g || r.isFunction(g) || (g = {}),
                        h === i && ((g = this), h--);
                    h < i;
                    h++
                )
                    if (null != (a = arguments[h]))
                        for (b in a)
                            (c = g[b]),
                                (d = a[b]),
                                g !== d &&
                                    (j &&
                                    d &&
                                    (r.isPlainObject(d) ||
                                        (e = Array.isArray(d)))
                                        ? (e
                                              ? ((e = !1),
                                                (f =
                                                    c && Array.isArray(c)
                                                        ? c
                                                        : []))
                                              : (f =
                                                    c && r.isPlainObject(c)
                                                        ? c
                                                        : {}),
                                          (g[b] = r.extend(j, f, d)))
                                        : void 0 !== d && (g[b] = d));
                return g;
            }),
        r.extend({
            expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (a) {
                throw new Error(a);
            },
            noop: function () {},
            isFunction: function (a) {
                return "function" === r.type(a);
            },
            isWindow: function (a) {
                return null != a && a === a.window;
            },
            isNumeric: function (a) {
                var b = r.type(a);
                return (
                    ("number" === b || "string" === b) &&
                    !isNaN(a - parseFloat(a))
                );
            },
            isPlainObject: function (a) {
                var b, c;
                return (
                    !(!a || "[object Object]" !== k.call(a)) &&
                    (!(b = e(a)) ||
                        ((c = l.call(b, "constructor") && b.constructor),
                        "function" == typeof c && m.call(c) === n))
                );
            },
            isEmptyObject: function (a) {
                var b;
                for (b in a) return !1;
                return !0;
            },
            type: function (a) {
                return null == a
                    ? a + ""
                    : "object" == typeof a || "function" == typeof a
                    ? j[k.call(a)] || "object"
                    : typeof a;
            },
            globalEval: function (a) {
                p(a);
            },
            camelCase: function (a) {
                return a.replace(t, "ms-").replace(u, v);
            },
            each: function (a, b) {
                var c,
                    d = 0;
                if (w(a)) {
                    for (c = a.length; d < c; d++)
                        if (b.call(a[d], d, a[d]) === !1) break;
                } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
                return a;
            },
            trim: function (a) {
                return null == a ? "" : (a + "").replace(s, "");
            },
            makeArray: function (a, b) {
                var c = b || [];
                return (
                    null != a &&
                        (w(Object(a))
                            ? r.merge(c, "string" == typeof a ? [a] : a)
                            : h.call(c, a)),
                    c
                );
            },
            inArray: function (a, b, c) {
                return null == b ? -1 : i.call(b, a, c);
            },
            merge: function (a, b) {
                for (var c = +b.length, d = 0, e = a.length; d < c; d++)
                    a[e++] = b[d];
                return (a.length = e), a;
            },
            grep: function (a, b, c) {
                for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++)
                    (d = !b(a[f], f)), d !== h && e.push(a[f]);
                return e;
            },
            map: function (a, b, c) {
                var d,
                    e,
                    f = 0,
                    h = [];
                if (w(a))
                    for (d = a.length; f < d; f++)
                        (e = b(a[f], f, c)), null != e && h.push(e);
                else for (f in a) (e = b(a[f], f, c)), null != e && h.push(e);
                return g.apply([], h);
            },
            guid: 1,
            proxy: function (a, b) {
                var c, d, e;
                if (
                    ("string" == typeof b && ((c = a[b]), (b = a), (a = c)),
                    r.isFunction(a))
                )
                    return (
                        (d = f.call(arguments, 2)),
                        (e = function () {
                            return a.apply(
                                b || this,
                                d.concat(f.call(arguments))
                            );
                        }),
                        (e.guid = a.guid = a.guid || r.guid++),
                        e
                    );
            },
            now: Date.now,
            support: o,
        }),
        "function" == typeof Symbol &&
            (r.fn[Symbol.iterator] = c[Symbol.iterator]),
        r.each(
            "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
            ),
            function (a, b) {
                j["[object " + b + "]"] = b.toLowerCase();
            }
        );
    function w(a) {
        var b = !!a && "length" in a && a.length,
            c = r.type(a);
        return (
            "function" !== c &&
            !r.isWindow(a) &&
            ("array" === c ||
                0 === b ||
                ("number" == typeof b && b > 0 && b - 1 in a))
        );
    }
    var x = (function (a) {
        var b,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u = "sizzle" + 1 * new Date(),
            v = a.document,
            w = 0,
            x = 0,
            y = ha(),
            z = ha(),
            A = ha(),
            B = function (a, b) {
                return a === b && (l = !0), 0;
            },
            C = {}.hasOwnProperty,
            D = [],
            E = D.pop,
            F = D.push,
            G = D.push,
            H = D.slice,
            I = function (a, b) {
                for (var c = 0, d = a.length; c < d; c++)
                    if (a[c] === b) return c;
                return -1;
            },
            J =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            K = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            M =
                "\\[" +
                K +
                "*(" +
                L +
                ")(?:" +
                K +
                "*([*^$|!~]?=)" +
                K +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                L +
                "))|)" +
                K +
                "*\\]",
            N =
                ":(" +
                L +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                M +
                ")*)|.*)\\)|)",
            O = new RegExp(K + "+", "g"),
            P = new RegExp(
                "^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$",
                "g"
            ),
            Q = new RegExp("^" + K + "*," + K + "*"),
            R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
            S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
            T = new RegExp(N),
            U = new RegExp("^" + L + "$"),
            V = {
                ID: new RegExp("^#(" + L + ")"),
                CLASS: new RegExp("^\\.(" + L + ")"),
                TAG: new RegExp("^(" + L + "|[*])"),
                ATTR: new RegExp("^" + M),
                PSEUDO: new RegExp("^" + N),
                CHILD: new RegExp(
                    "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                        K +
                        "*(even|odd|(([+-]|)(\\d*)n|)" +
                        K +
                        "*(?:([+-]|)" +
                        K +
                        "*(\\d+)|))" +
                        K +
                        "*\\)|)",
                    "i"
                ),
                bool: new RegExp("^(?:" + J + ")$", "i"),
                needsContext: new RegExp(
                    "^" +
                        K +
                        "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                        K +
                        "*((?:-\\d)?\\d*)" +
                        K +
                        "*\\)|)(?=[^-]|$)",
                    "i"
                ),
            },
            W = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            $ = /[+~]/,
            _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
            aa = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c
                    ? b
                    : d < 0
                    ? String.fromCharCode(d + 65536)
                    : String.fromCharCode(
                          (d >> 10) | 55296,
                          (1023 & d) | 56320
                      );
            },
            ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ca = function (a, b) {
                return b
                    ? "\0" === a
                        ? "\ufffd"
                        : a.slice(0, -1) +
                          "\\" +
                          a.charCodeAt(a.length - 1).toString(16) +
                          " "
                    : "\\" + a;
            },
            da = function () {
                m();
            },
            ea = ta(
                function (a) {
                    return a.disabled === !0 && ("form" in a || "label" in a);
                },
                { dir: "parentNode", next: "legend" }
            );
        try {
            G.apply((D = H.call(v.childNodes)), v.childNodes),
                D[v.childNodes.length].nodeType;
        } catch (fa) {
            G = {
                apply: D.length
                    ? function (a, b) {
                          F.apply(a, H.call(b));
                      }
                    : function (a, b) {
                          var c = a.length,
                              d = 0;
                          while ((a[c++] = b[d++]));
                          a.length = c - 1;
                      },
            };
        }
        function ga(a, b, d, e) {
            var f,
                h,
                j,
                k,
                l,
                o,
                r,
                s = b && b.ownerDocument,
                w = b ? b.nodeType : 9;
            if (
                ((d = d || []),
                "string" != typeof a || !a || (1 !== w && 9 !== w && 11 !== w))
            )
                return d;
            if (
                !e &&
                ((b ? b.ownerDocument || b : v) !== n && m(b), (b = b || n), p)
            ) {
                if (11 !== w && (l = Z.exec(a)))
                    if ((f = l[1])) {
                        if (9 === w) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d;
                        } else if (
                            s &&
                            (j = s.getElementById(f)) &&
                            t(b, j) &&
                            j.id === f
                        )
                            return d.push(j), d;
                    } else {
                        if (l[2])
                            return G.apply(d, b.getElementsByTagName(a)), d;
                        if (
                            (f = l[3]) &&
                            c.getElementsByClassName &&
                            b.getElementsByClassName
                        )
                            return G.apply(d, b.getElementsByClassName(f)), d;
                    }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== w) (s = b), (r = a);
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id"))
                            ? (k = k.replace(ba, ca))
                            : b.setAttribute("id", (k = u)),
                            (o = g(a)),
                            (h = o.length);
                        while (h--) o[h] = "#" + k + " " + sa(o[h]);
                        (r = o.join(",")),
                            (s = ($.test(a) && qa(b.parentNode)) || b);
                    }
                    if (r)
                        try {
                            return G.apply(d, s.querySelectorAll(r)), d;
                        } catch (x) {
                        } finally {
                            k === u && b.removeAttribute("id");
                        }
                }
            }
            return i(a.replace(P, "$1"), b, d, e);
        }
        function ha() {
            var a = [];
            function b(c, e) {
                return (
                    a.push(c + " ") > d.cacheLength && delete b[a.shift()],
                    (b[c + " "] = e)
                );
            }
            return b;
        }
        function ia(a) {
            return (a[u] = !0), a;
        }
        function ja(a) {
            var b = n.createElement("fieldset");
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), (b = null);
            }
        }
        function ka(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b;
        }
        function la(a, b) {
            var c = b && a,
                d =
                    c &&
                    1 === a.nodeType &&
                    1 === b.nodeType &&
                    a.sourceIndex - b.sourceIndex;
            if (d) return d;
            if (c) while ((c = c.nextSibling)) if (c === b) return -1;
            return a ? 1 : -1;
        }
        function ma(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a;
            };
        }
        function na(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        function oa(a) {
            return function (b) {
                return "form" in b
                    ? b.parentNode && b.disabled === !1
                        ? "label" in b
                            ? "label" in b.parentNode
                                ? b.parentNode.disabled === a
                                : b.disabled === a
                            : b.isDisabled === a ||
                              (b.isDisabled !== !a && ea(b) === a)
                        : b.disabled === a
                    : "label" in b && b.disabled === a;
            };
        }
        function pa(a) {
            return ia(function (b) {
                return (
                    (b = +b),
                    ia(function (c, d) {
                        var e,
                            f = a([], c.length, b),
                            g = f.length;
                        while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
                    })
                );
            });
        }
        function qa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a;
        }
        (c = ga.support = {}),
            (f = ga.isXML =
                function (a) {
                    var b = a && (a.ownerDocument || a).documentElement;
                    return !!b && "HTML" !== b.nodeName;
                }),
            (m = ga.setDocument =
                function (a) {
                    var b,
                        e,
                        g = a ? a.ownerDocument || a : v;
                    return g !== n && 9 === g.nodeType && g.documentElement
                        ? ((n = g),
                          (o = n.documentElement),
                          (p = !f(n)),
                          v !== n &&
                              (e = n.defaultView) &&
                              e.top !== e &&
                              (e.addEventListener
                                  ? e.addEventListener("unload", da, !1)
                                  : e.attachEvent &&
                                    e.attachEvent("onunload", da)),
                          (c.attributes = ja(function (a) {
                              return (
                                  (a.className = "i"),
                                  !a.getAttribute("className")
                              );
                          })),
                          (c.getElementsByTagName = ja(function (a) {
                              return (
                                  a.appendChild(n.createComment("")),
                                  !a.getElementsByTagName("*").length
                              );
                          })),
                          (c.getElementsByClassName = Y.test(
                              n.getElementsByClassName
                          )),
                          (c.getById = ja(function (a) {
                              return (
                                  (o.appendChild(a).id = u),
                                  !n.getElementsByName ||
                                      !n.getElementsByName(u).length
                              );
                          })),
                          c.getById
                              ? ((d.filter.ID = function (a) {
                                    var b = a.replace(_, aa);
                                    return function (a) {
                                        return a.getAttribute("id") === b;
                                    };
                                }),
                                (d.find.ID = function (a, b) {
                                    if (
                                        "undefined" !=
                                            typeof b.getElementById &&
                                        p
                                    ) {
                                        var c = b.getElementById(a);
                                        return c ? [c] : [];
                                    }
                                }))
                              : ((d.filter.ID = function (a) {
                                    var b = a.replace(_, aa);
                                    return function (a) {
                                        var c =
                                            "undefined" !=
                                                typeof a.getAttributeNode &&
                                            a.getAttributeNode("id");
                                        return c && c.value === b;
                                    };
                                }),
                                (d.find.ID = function (a, b) {
                                    if (
                                        "undefined" !=
                                            typeof b.getElementById &&
                                        p
                                    ) {
                                        var c,
                                            d,
                                            e,
                                            f = b.getElementById(a);
                                        if (f) {
                                            if (
                                                ((c = f.getAttributeNode("id")),
                                                c && c.value === a)
                                            )
                                                return [f];
                                            (e = b.getElementsByName(a)),
                                                (d = 0);
                                            while ((f = e[d++]))
                                                if (
                                                    ((c =
                                                        f.getAttributeNode(
                                                            "id"
                                                        )),
                                                    c && c.value === a)
                                                )
                                                    return [f];
                                        }
                                        return [];
                                    }
                                })),
                          (d.find.TAG = c.getElementsByTagName
                              ? function (a, b) {
                                    return "undefined" !=
                                        typeof b.getElementsByTagName
                                        ? b.getElementsByTagName(a)
                                        : c.qsa
                                        ? b.querySelectorAll(a)
                                        : void 0;
                                }
                              : function (a, b) {
                                    var c,
                                        d = [],
                                        e = 0,
                                        f = b.getElementsByTagName(a);
                                    if ("*" === a) {
                                        while ((c = f[e++]))
                                            1 === c.nodeType && d.push(c);
                                        return d;
                                    }
                                    return f;
                                }),
                          (d.find.CLASS =
                              c.getElementsByClassName &&
                              function (a, b) {
                                  if (
                                      "undefined" !=
                                          typeof b.getElementsByClassName &&
                                      p
                                  )
                                      return b.getElementsByClassName(a);
                              }),
                          (r = []),
                          (q = []),
                          (c.qsa = Y.test(n.querySelectorAll)) &&
                              (ja(function (a) {
                                  (o.appendChild(a).innerHTML =
                                      "<a id='" +
                                      u +
                                      "'></a><select id='" +
                                      u +
                                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                      a.querySelectorAll("[msallowcapture^='']")
                                          .length &&
                                          q.push("[*^$]=" + K + "*(?:''|\"\")"),
                                      a.querySelectorAll("[selected]").length ||
                                          q.push(
                                              "\\[" + K + "*(?:value|" + J + ")"
                                          ),
                                      a.querySelectorAll("[id~=" + u + "-]")
                                          .length || q.push("~="),
                                      a.querySelectorAll(":checked").length ||
                                          q.push(":checked"),
                                      a.querySelectorAll("a#" + u + "+*")
                                          .length || q.push(".#.+[+~]");
                              }),
                              ja(function (a) {
                                  a.innerHTML =
                                      "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                  var b = n.createElement("input");
                                  b.setAttribute("type", "hidden"),
                                      a
                                          .appendChild(b)
                                          .setAttribute("name", "D"),
                                      a.querySelectorAll("[name=d]").length &&
                                          q.push("name" + K + "*[*^$|!~]?="),
                                      2 !==
                                          a.querySelectorAll(":enabled")
                                              .length &&
                                          q.push(":enabled", ":disabled"),
                                      (o.appendChild(a).disabled = !0),
                                      2 !==
                                          a.querySelectorAll(":disabled")
                                              .length &&
                                          q.push(":enabled", ":disabled"),
                                      a.querySelectorAll("*,:x"),
                                      q.push(",.*:");
                              })),
                          (c.matchesSelector = Y.test(
                              (s =
                                  o.matches ||
                                  o.webkitMatchesSelector ||
                                  o.mozMatchesSelector ||
                                  o.oMatchesSelector ||
                                  o.msMatchesSelector)
                          )) &&
                              ja(function (a) {
                                  (c.disconnectedMatch = s.call(a, "*")),
                                      s.call(a, "[s!='']:x"),
                                      r.push("!=", N);
                              }),
                          (q = q.length && new RegExp(q.join("|"))),
                          (r = r.length && new RegExp(r.join("|"))),
                          (b = Y.test(o.compareDocumentPosition)),
                          (t =
                              b || Y.test(o.contains)
                                  ? function (a, b) {
                                        var c =
                                                9 === a.nodeType
                                                    ? a.documentElement
                                                    : a,
                                            d = b && b.parentNode;
                                        return (
                                            a === d ||
                                            !(
                                                !d ||
                                                1 !== d.nodeType ||
                                                !(c.contains
                                                    ? c.contains(d)
                                                    : a.compareDocumentPosition &&
                                                      16 &
                                                          a.compareDocumentPosition(
                                                              d
                                                          ))
                                            )
                                        );
                                    }
                                  : function (a, b) {
                                        if (b)
                                            while ((b = b.parentNode))
                                                if (b === a) return !0;
                                        return !1;
                                    }),
                          (B = b
                              ? function (a, b) {
                                    if (a === b) return (l = !0), 0;
                                    var d =
                                        !a.compareDocumentPosition -
                                        !b.compareDocumentPosition;
                                    return d
                                        ? d
                                        : ((d =
                                              (a.ownerDocument || a) ===
                                              (b.ownerDocument || b)
                                                  ? a.compareDocumentPosition(b)
                                                  : 1),
                                          1 & d ||
                                          (!c.sortDetached &&
                                              b.compareDocumentPosition(a) ===
                                                  d)
                                              ? a === n ||
                                                (a.ownerDocument === v &&
                                                    t(v, a))
                                                  ? -1
                                                  : b === n ||
                                                    (b.ownerDocument === v &&
                                                        t(v, b))
                                                  ? 1
                                                  : k
                                                  ? I(k, a) - I(k, b)
                                                  : 0
                                              : 4 & d
                                              ? -1
                                              : 1);
                                }
                              : function (a, b) {
                                    if (a === b) return (l = !0), 0;
                                    var c,
                                        d = 0,
                                        e = a.parentNode,
                                        f = b.parentNode,
                                        g = [a],
                                        h = [b];
                                    if (!e || !f)
                                        return a === n
                                            ? -1
                                            : b === n
                                            ? 1
                                            : e
                                            ? -1
                                            : f
                                            ? 1
                                            : k
                                            ? I(k, a) - I(k, b)
                                            : 0;
                                    if (e === f) return la(a, b);
                                    c = a;
                                    while ((c = c.parentNode)) g.unshift(c);
                                    c = b;
                                    while ((c = c.parentNode)) h.unshift(c);
                                    while (g[d] === h[d]) d++;
                                    return d
                                        ? la(g[d], h[d])
                                        : g[d] === v
                                        ? -1
                                        : h[d] === v
                                        ? 1
                                        : 0;
                                }),
                          n)
                        : n;
                }),
            (ga.matches = function (a, b) {
                return ga(a, null, null, b);
            }),
            (ga.matchesSelector = function (a, b) {
                if (
                    ((a.ownerDocument || a) !== n && m(a),
                    (b = b.replace(S, "='$1']")),
                    c.matchesSelector &&
                        p &&
                        !A[b + " "] &&
                        (!r || !r.test(b)) &&
                        (!q || !q.test(b)))
                )
                    try {
                        var d = s.call(a, b);
                        if (
                            d ||
                            c.disconnectedMatch ||
                            (a.document && 11 !== a.document.nodeType)
                        )
                            return d;
                    } catch (e) {}
                return ga(b, n, null, [a]).length > 0;
            }),
            (ga.contains = function (a, b) {
                return (a.ownerDocument || a) !== n && m(a), t(a, b);
            }),
            (ga.attr = function (a, b) {
                (a.ownerDocument || a) !== n && m(a);
                var e = d.attrHandle[b.toLowerCase()],
                    f =
                        e && C.call(d.attrHandle, b.toLowerCase())
                            ? e(a, b, !p)
                            : void 0;
                return void 0 !== f
                    ? f
                    : c.attributes || !p
                    ? a.getAttribute(b)
                    : (f = a.getAttributeNode(b)) && f.specified
                    ? f.value
                    : null;
            }),
            (ga.escape = function (a) {
                return (a + "").replace(ba, ca);
            }),
            (ga.error = function (a) {
                throw new Error("Syntax error, unrecognized expression: " + a);
            }),
            (ga.uniqueSort = function (a) {
                var b,
                    d = [],
                    e = 0,
                    f = 0;
                if (
                    ((l = !c.detectDuplicates),
                    (k = !c.sortStable && a.slice(0)),
                    a.sort(B),
                    l)
                ) {
                    while ((b = a[f++])) b === a[f] && (e = d.push(f));
                    while (e--) a.splice(d[e], 1);
                }
                return (k = null), a;
            }),
            (e = ga.getText =
                function (a) {
                    var b,
                        c = "",
                        d = 0,
                        f = a.nodeType;
                    if (f) {
                        if (1 === f || 9 === f || 11 === f) {
                            if ("string" == typeof a.textContent)
                                return a.textContent;
                            for (a = a.firstChild; a; a = a.nextSibling)
                                c += e(a);
                        } else if (3 === f || 4 === f) return a.nodeValue;
                    } else while ((b = a[d++])) c += e(b);
                    return c;
                }),
            (d = ga.selectors =
                {
                    cacheLength: 50,
                    createPseudo: ia,
                    match: V,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": { dir: "parentNode", first: !0 },
                        " ": { dir: "parentNode" },
                        "+": { dir: "previousSibling", first: !0 },
                        "~": { dir: "previousSibling" },
                    },
                    preFilter: {
                        ATTR: function (a) {
                            return (
                                (a[1] = a[1].replace(_, aa)),
                                (a[3] = (a[3] || a[4] || a[5] || "").replace(
                                    _,
                                    aa
                                )),
                                "~=" === a[2] && (a[3] = " " + a[3] + " "),
                                a.slice(0, 4)
                            );
                        },
                        CHILD: function (a) {
                            return (
                                (a[1] = a[1].toLowerCase()),
                                "nth" === a[1].slice(0, 3)
                                    ? (a[3] || ga.error(a[0]),
                                      (a[4] = +(a[4]
                                          ? a[5] + (a[6] || 1)
                                          : 2 *
                                            ("even" === a[3] ||
                                                "odd" === a[3]))),
                                      (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                                    : a[3] && ga.error(a[0]),
                                a
                            );
                        },
                        PSEUDO: function (a) {
                            var b,
                                c = !a[6] && a[2];
                            return V.CHILD.test(a[0])
                                ? null
                                : (a[3]
                                      ? (a[2] = a[4] || a[5] || "")
                                      : c &&
                                        T.test(c) &&
                                        (b = g(c, !0)) &&
                                        (b =
                                            c.indexOf(")", c.length - b) -
                                            c.length) &&
                                        ((a[0] = a[0].slice(0, b)),
                                        (a[2] = c.slice(0, b))),
                                  a.slice(0, 3));
                        },
                    },
                    filter: {
                        TAG: function (a) {
                            var b = a.replace(_, aa).toLowerCase();
                            return "*" === a
                                ? function () {
                                      return !0;
                                  }
                                : function (a) {
                                      return (
                                          a.nodeName &&
                                          a.nodeName.toLowerCase() === b
                                      );
                                  };
                        },
                        CLASS: function (a) {
                            var b = y[a + " "];
                            return (
                                b ||
                                ((b = new RegExp(
                                    "(^|" + K + ")" + a + "(" + K + "|$)"
                                )) &&
                                    y(a, function (a) {
                                        return b.test(
                                            ("string" == typeof a.className &&
                                                a.className) ||
                                                ("undefined" !=
                                                    typeof a.getAttribute &&
                                                    a.getAttribute("class")) ||
                                                ""
                                        );
                                    }))
                            );
                        },
                        ATTR: function (a, b, c) {
                            return function (d) {
                                var e = ga.attr(d, a);
                                return null == e
                                    ? "!=" === b
                                    : !b ||
                                          ((e += ""),
                                          "=" === b
                                              ? e === c
                                              : "!=" === b
                                              ? e !== c
                                              : "^=" === b
                                              ? c && 0 === e.indexOf(c)
                                              : "*=" === b
                                              ? c && e.indexOf(c) > -1
                                              : "$=" === b
                                              ? c && e.slice(-c.length) === c
                                              : "~=" === b
                                              ? (
                                                    " " +
                                                    e.replace(O, " ") +
                                                    " "
                                                ).indexOf(c) > -1
                                              : "|=" === b &&
                                                (e === c ||
                                                    e.slice(0, c.length + 1) ===
                                                        c + "-"));
                            };
                        },
                        CHILD: function (a, b, c, d, e) {
                            var f = "nth" !== a.slice(0, 3),
                                g = "last" !== a.slice(-4),
                                h = "of-type" === b;
                            return 1 === d && 0 === e
                                ? function (a) {
                                      return !!a.parentNode;
                                  }
                                : function (b, c, i) {
                                      var j,
                                          k,
                                          l,
                                          m,
                                          n,
                                          o,
                                          p =
                                              f !== g
                                                  ? "nextSibling"
                                                  : "previousSibling",
                                          q = b.parentNode,
                                          r = h && b.nodeName.toLowerCase(),
                                          s = !i && !h,
                                          t = !1;
                                      if (q) {
                                          if (f) {
                                              while (p) {
                                                  m = b;
                                                  while ((m = m[p]))
                                                      if (
                                                          h
                                                              ? m.nodeName.toLowerCase() ===
                                                                r
                                                              : 1 === m.nodeType
                                                      )
                                                          return !1;
                                                  o = p =
                                                      "only" === a &&
                                                      !o &&
                                                      "nextSibling";
                                              }
                                              return !0;
                                          }
                                          if (
                                              ((o = [
                                                  g
                                                      ? q.firstChild
                                                      : q.lastChild,
                                              ]),
                                              g && s)
                                          ) {
                                              (m = q),
                                                  (l = m[u] || (m[u] = {})),
                                                  (k =
                                                      l[m.uniqueID] ||
                                                      (l[m.uniqueID] = {})),
                                                  (j = k[a] || []),
                                                  (n = j[0] === w && j[1]),
                                                  (t = n && j[2]),
                                                  (m = n && q.childNodes[n]);
                                              while (
                                                  (m =
                                                      (++n && m && m[p]) ||
                                                      (t = n = 0) ||
                                                      o.pop())
                                              )
                                                  if (
                                                      1 === m.nodeType &&
                                                      ++t &&
                                                      m === b
                                                  ) {
                                                      k[a] = [w, n, t];
                                                      break;
                                                  }
                                          } else if (
                                              (s &&
                                                  ((m = b),
                                                  (l = m[u] || (m[u] = {})),
                                                  (k =
                                                      l[m.uniqueID] ||
                                                      (l[m.uniqueID] = {})),
                                                  (j = k[a] || []),
                                                  (n = j[0] === w && j[1]),
                                                  (t = n)),
                                              t === !1)
                                          )
                                              while (
                                                  (m =
                                                      (++n && m && m[p]) ||
                                                      (t = n = 0) ||
                                                      o.pop())
                                              )
                                                  if (
                                                      (h
                                                          ? m.nodeName.toLowerCase() ===
                                                            r
                                                          : 1 === m.nodeType) &&
                                                      ++t &&
                                                      (s &&
                                                          ((l =
                                                              m[u] ||
                                                              (m[u] = {})),
                                                          (k =
                                                              l[m.uniqueID] ||
                                                              (l[m.uniqueID] =
                                                                  {})),
                                                          (k[a] = [w, t])),
                                                      m === b)
                                                  )
                                                      break;
                                          return (
                                              (t -= e),
                                              t === d ||
                                                  (t % d === 0 && t / d >= 0)
                                          );
                                      }
                                  };
                        },
                        PSEUDO: function (a, b) {
                            var c,
                                e =
                                    d.pseudos[a] ||
                                    d.setFilters[a.toLowerCase()] ||
                                    ga.error("unsupported pseudo: " + a);
                            return e[u]
                                ? e(b)
                                : e.length > 1
                                ? ((c = [a, a, "", b]),
                                  d.setFilters.hasOwnProperty(a.toLowerCase())
                                      ? ia(function (a, c) {
                                            var d,
                                                f = e(a, b),
                                                g = f.length;
                                            while (g--)
                                                (d = I(a, f[g])),
                                                    (a[d] = !(c[d] = f[g]));
                                        })
                                      : function (a) {
                                            return e(a, 0, c);
                                        })
                                : e;
                        },
                    },
                    pseudos: {
                        not: ia(function (a) {
                            var b = [],
                                c = [],
                                d = h(a.replace(P, "$1"));
                            return d[u]
                                ? ia(function (a, b, c, e) {
                                      var f,
                                          g = d(a, null, e, []),
                                          h = a.length;
                                      while (h--)
                                          (f = g[h]) && (a[h] = !(b[h] = f));
                                  })
                                : function (a, e, f) {
                                      return (
                                          (b[0] = a),
                                          d(b, null, f, c),
                                          (b[0] = null),
                                          !c.pop()
                                      );
                                  };
                        }),
                        has: ia(function (a) {
                            return function (b) {
                                return ga(a, b).length > 0;
                            };
                        }),
                        contains: ia(function (a) {
                            return (
                                (a = a.replace(_, aa)),
                                function (b) {
                                    return (
                                        (
                                            b.textContent ||
                                            b.innerText ||
                                            e(b)
                                        ).indexOf(a) > -1
                                    );
                                }
                            );
                        }),
                        lang: ia(function (a) {
                            return (
                                U.test(a || "") ||
                                    ga.error("unsupported lang: " + a),
                                (a = a.replace(_, aa).toLowerCase()),
                                function (b) {
                                    var c;
                                    do
                                        if (
                                            (c = p
                                                ? b.lang
                                                : b.getAttribute("xml:lang") ||
                                                  b.getAttribute("lang"))
                                        )
                                            return (
                                                (c = c.toLowerCase()),
                                                c === a ||
                                                    0 === c.indexOf(a + "-")
                                            );
                                    while (
                                        (b = b.parentNode) &&
                                        1 === b.nodeType
                                    );
                                    return !1;
                                }
                            );
                        }),
                        target: function (b) {
                            var c = a.location && a.location.hash;
                            return c && c.slice(1) === b.id;
                        },
                        root: function (a) {
                            return a === o;
                        },
                        focus: function (a) {
                            return (
                                a === n.activeElement &&
                                (!n.hasFocus || n.hasFocus()) &&
                                !!(a.type || a.href || ~a.tabIndex)
                            );
                        },
                        enabled: oa(!1),
                        disabled: oa(!0),
                        checked: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return (
                                ("input" === b && !!a.checked) ||
                                ("option" === b && !!a.selected)
                            );
                        },
                        selected: function (a) {
                            return (
                                a.parentNode && a.parentNode.selectedIndex,
                                a.selected === !0
                            );
                        },
                        empty: function (a) {
                            for (a = a.firstChild; a; a = a.nextSibling)
                                if (a.nodeType < 6) return !1;
                            return !0;
                        },
                        parent: function (a) {
                            return !d.pseudos.empty(a);
                        },
                        header: function (a) {
                            return X.test(a.nodeName);
                        },
                        input: function (a) {
                            return W.test(a.nodeName);
                        },
                        button: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return (
                                ("input" === b && "button" === a.type) ||
                                "button" === b
                            );
                        },
                        text: function (a) {
                            var b;
                            return (
                                "input" === a.nodeName.toLowerCase() &&
                                "text" === a.type &&
                                (null == (b = a.getAttribute("type")) ||
                                    "text" === b.toLowerCase())
                            );
                        },
                        first: pa(function () {
                            return [0];
                        }),
                        last: pa(function (a, b) {
                            return [b - 1];
                        }),
                        eq: pa(function (a, b, c) {
                            return [c < 0 ? c + b : c];
                        }),
                        even: pa(function (a, b) {
                            for (var c = 0; c < b; c += 2) a.push(c);
                            return a;
                        }),
                        odd: pa(function (a, b) {
                            for (var c = 1; c < b; c += 2) a.push(c);
                            return a;
                        }),
                        lt: pa(function (a, b, c) {
                            for (var d = c < 0 ? c + b : c; --d >= 0; )
                                a.push(d);
                            return a;
                        }),
                        gt: pa(function (a, b, c) {
                            for (var d = c < 0 ? c + b : c; ++d < b; )
                                a.push(d);
                            return a;
                        }),
                    },
                }),
            (d.pseudos.nth = d.pseudos.eq);
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0,
        })
            d.pseudos[b] = ma(b);
        for (b in { submit: !0, reset: !0 }) d.pseudos[b] = na(b);
        function ra() {}
        (ra.prototype = d.filters = d.pseudos),
            (d.setFilters = new ra()),
            (g = ga.tokenize =
                function (a, b) {
                    var c,
                        e,
                        f,
                        g,
                        h,
                        i,
                        j,
                        k = z[a + " "];
                    if (k) return b ? 0 : k.slice(0);
                    (h = a), (i = []), (j = d.preFilter);
                    while (h) {
                        (c && !(e = Q.exec(h))) ||
                            (e && (h = h.slice(e[0].length) || h),
                            i.push((f = []))),
                            (c = !1),
                            (e = R.exec(h)) &&
                                ((c = e.shift()),
                                f.push({
                                    value: c,
                                    type: e[0].replace(P, " "),
                                }),
                                (h = h.slice(c.length)));
                        for (g in d.filter)
                            !(e = V[g].exec(h)) ||
                                (j[g] && !(e = j[g](e))) ||
                                ((c = e.shift()),
                                f.push({ value: c, type: g, matches: e }),
                                (h = h.slice(c.length)));
                        if (!c) break;
                    }
                    return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
                });
        function sa(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
            return d;
        }
        function ta(a, b, c) {
            var d = b.dir,
                e = b.next,
                f = e || d,
                g = c && "parentNode" === f,
                h = x++;
            return b.first
                ? function (b, c, e) {
                      while ((b = b[d]))
                          if (1 === b.nodeType || g) return a(b, c, e);
                      return !1;
                  }
                : function (b, c, i) {
                      var j,
                          k,
                          l,
                          m = [w, h];
                      if (i) {
                          while ((b = b[d]))
                              if ((1 === b.nodeType || g) && a(b, c, i))
                                  return !0;
                      } else
                          while ((b = b[d]))
                              if (1 === b.nodeType || g)
                                  if (
                                      ((l = b[u] || (b[u] = {})),
                                      (k =
                                          l[b.uniqueID] ||
                                          (l[b.uniqueID] = {})),
                                      e && e === b.nodeName.toLowerCase())
                                  )
                                      b = b[d] || b;
                                  else {
                                      if (
                                          (j = k[f]) &&
                                          j[0] === w &&
                                          j[1] === h
                                      )
                                          return (m[2] = j[2]);
                                      if (((k[f] = m), (m[2] = a(b, c, i))))
                                          return !0;
                                  }
                      return !1;
                  };
        }
        function ua(a) {
            return a.length > 1
                ? function (b, c, d) {
                      var e = a.length;
                      while (e--) if (!a[e](b, c, d)) return !1;
                      return !0;
                  }
                : a[0];
        }
        function va(a, b, c) {
            for (var d = 0, e = b.length; d < e; d++) ga(a, b[d], c);
            return c;
        }
        function wa(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)
                (f = a[h]) &&
                    ((c && !c(f, d, e)) || (g.push(f), j && b.push(h)));
            return g;
        }
        function xa(a, b, c, d, e, f) {
            return (
                d && !d[u] && (d = xa(d)),
                e && !e[u] && (e = xa(e, f)),
                ia(function (f, g, h, i) {
                    var j,
                        k,
                        l,
                        m = [],
                        n = [],
                        o = g.length,
                        p = f || va(b || "*", h.nodeType ? [h] : h, []),
                        q = !a || (!f && b) ? p : wa(p, m, a, h, i),
                        r = c ? (e || (f ? a : o || d) ? [] : g) : q;
                    if ((c && c(q, r, h, i), d)) {
                        (j = wa(r, n)), d(j, [], h, i), (k = j.length);
                        while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                    }
                    if (f) {
                        if (e || a) {
                            if (e) {
                                (j = []), (k = r.length);
                                while (k--) (l = r[k]) && j.push((q[k] = l));
                                e(null, (r = []), j, i);
                            }
                            k = r.length;
                            while (k--)
                                (l = r[k]) &&
                                    (j = e ? I(f, l) : m[k]) > -1 &&
                                    (f[j] = !(g[j] = l));
                        }
                    } else (r = wa(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : G.apply(g, r);
                })
            );
        }
        function ya(a) {
            for (
                var b,
                    c,
                    e,
                    f = a.length,
                    g = d.relative[a[0].type],
                    h = g || d.relative[" "],
                    i = g ? 1 : 0,
                    k = ta(
                        function (a) {
                            return a === b;
                        },
                        h,
                        !0
                    ),
                    l = ta(
                        function (a) {
                            return I(b, a) > -1;
                        },
                        h,
                        !0
                    ),
                    m = [
                        function (a, c, d) {
                            var e =
                                (!g && (d || c !== j)) ||
                                ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                            return (b = null), e;
                        },
                    ];
                i < f;
                i++
            )
                if ((c = d.relative[a[i].type])) m = [ta(ua(m), c)];
                else {
                    if (
                        ((c = d.filter[a[i].type].apply(null, a[i].matches)),
                        c[u])
                    ) {
                        for (e = ++i; e < f; e++)
                            if (d.relative[a[e].type]) break;
                        return xa(
                            i > 1 && ua(m),
                            i > 1 &&
                                sa(
                                    a
                                        .slice(0, i - 1)
                                        .concat({
                                            value:
                                                " " === a[i - 2].type
                                                    ? "*"
                                                    : "",
                                        })
                                ).replace(P, "$1"),
                            c,
                            i < e && ya(a.slice(i, e)),
                            e < f && ya((a = a.slice(e))),
                            e < f && sa(a)
                        );
                    }
                    m.push(c);
                }
            return ua(m);
        }
        function za(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function (f, g, h, i, k) {
                    var l,
                        o,
                        q,
                        r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || (e && d.find.TAG("*", k)),
                        y = (w += null == v ? 1 : Math.random() || 0.1),
                        z = x.length;
                    for (
                        k && (j = g === n || g || k);
                        s !== z && null != (l = x[s]);
                        s++
                    ) {
                        if (e && l) {
                            (o = 0),
                                g || l.ownerDocument === n || (m(l), (h = !p));
                            while ((q = a[o++]))
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break;
                                }
                            k && (w = y);
                        }
                        c && ((l = !q && l) && r--, f && t.push(l));
                    }
                    if (((r += s), c && s !== r)) {
                        o = 0;
                        while ((q = b[o++])) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = E.call(i));
                            u = wa(u);
                        }
                        G.apply(i, u),
                            k &&
                                !f &&
                                u.length > 0 &&
                                r + b.length > 1 &&
                                ga.uniqueSort(i);
                    }
                    return k && ((w = y), (j = v)), t;
                };
            return c ? ia(f) : f;
        }
        return (
            (h = ga.compile =
                function (a, b) {
                    var c,
                        d = [],
                        e = [],
                        f = A[a + " "];
                    if (!f) {
                        b || (b = g(a)), (c = b.length);
                        while (c--)
                            (f = ya(b[c])), f[u] ? d.push(f) : e.push(f);
                        (f = A(a, za(e, d))), (f.selector = a);
                    }
                    return f;
                }),
            (i = ga.select =
                function (a, b, c, e) {
                    var f,
                        i,
                        j,
                        k,
                        l,
                        m = "function" == typeof a && a,
                        n = !e && g((a = m.selector || a));
                    if (((c = c || []), 1 === n.length)) {
                        if (
                            ((i = n[0] = n[0].slice(0)),
                            i.length > 2 &&
                                "ID" === (j = i[0]).type &&
                                9 === b.nodeType &&
                                p &&
                                d.relative[i[1].type])
                        ) {
                            if (
                                ((b = (d.find.ID(
                                    j.matches[0].replace(_, aa),
                                    b
                                ) || [])[0]),
                                !b)
                            )
                                return c;
                            m && (b = b.parentNode),
                                (a = a.slice(i.shift().value.length));
                        }
                        f = V.needsContext.test(a) ? 0 : i.length;
                        while (f--) {
                            if (((j = i[f]), d.relative[(k = j.type)])) break;
                            if (
                                (l = d.find[k]) &&
                                (e = l(
                                    j.matches[0].replace(_, aa),
                                    ($.test(i[0].type) && qa(b.parentNode)) || b
                                ))
                            ) {
                                if (
                                    (i.splice(f, 1),
                                    (a = e.length && sa(i)),
                                    !a)
                                )
                                    return G.apply(c, e), c;
                                break;
                            }
                        }
                    }
                    return (
                        (m || h(a, n))(
                            e,
                            b,
                            !p,
                            c,
                            !b || ($.test(a) && qa(b.parentNode)) || b
                        ),
                        c
                    );
                }),
            (c.sortStable = u.split("").sort(B).join("") === u),
            (c.detectDuplicates = !!l),
            m(),
            (c.sortDetached = ja(function (a) {
                return (
                    1 & a.compareDocumentPosition(n.createElement("fieldset"))
                );
            })),
            ja(function (a) {
                return (
                    (a.innerHTML = "<a href='#'></a>"),
                    "#" === a.firstChild.getAttribute("href")
                );
            }) ||
                ka("type|href|height|width", function (a, b, c) {
                    if (!c)
                        return a.getAttribute(
                            b,
                            "type" === b.toLowerCase() ? 1 : 2
                        );
                }),
            (c.attributes &&
                ja(function (a) {
                    return (
                        (a.innerHTML = "<input/>"),
                        a.firstChild.setAttribute("value", ""),
                        "" === a.firstChild.getAttribute("value")
                    );
                })) ||
                ka("value", function (a, b, c) {
                    if (!c && "input" === a.nodeName.toLowerCase())
                        return a.defaultValue;
                }),
            ja(function (a) {
                return null == a.getAttribute("disabled");
            }) ||
                ka(J, function (a, b, c) {
                    var d;
                    if (!c)
                        return a[b] === !0
                            ? b.toLowerCase()
                            : (d = a.getAttributeNode(b)) && d.specified
                            ? d.value
                            : null;
                }),
            ga
        );
    })(a);
    (r.find = x),
        (r.expr = x.selectors),
        (r.expr[":"] = r.expr.pseudos),
        (r.uniqueSort = r.unique = x.uniqueSort),
        (r.text = x.getText),
        (r.isXMLDoc = x.isXML),
        (r.contains = x.contains),
        (r.escapeSelector = x.escape);
    var y = function (a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && r(a).is(c)) break;
                    d.push(a);
                }
            return d;
        },
        z = function (a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c;
        },
        A = r.expr.match.needsContext;
    function B(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    }
    var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        D = /^.[^:#\[\.,]*$/;
    function E(a, b, c) {
        return r.isFunction(b)
            ? r.grep(a, function (a, d) {
                  return !!b.call(a, d, a) !== c;
              })
            : b.nodeType
            ? r.grep(a, function (a) {
                  return (a === b) !== c;
              })
            : "string" != typeof b
            ? r.grep(a, function (a) {
                  return i.call(b, a) > -1 !== c;
              })
            : D.test(b)
            ? r.filter(b, a, c)
            : ((b = r.filter(b, a)),
              r.grep(a, function (a) {
                  return i.call(b, a) > -1 !== c && 1 === a.nodeType;
              }));
    }
    (r.filter = function (a, b, c) {
        var d = b[0];
        return (
            c && (a = ":not(" + a + ")"),
            1 === b.length && 1 === d.nodeType
                ? r.find.matchesSelector(d, a)
                    ? [d]
                    : []
                : r.find.matches(
                      a,
                      r.grep(b, function (a) {
                          return 1 === a.nodeType;
                      })
                  )
        );
    }),
        r.fn.extend({
            find: function (a) {
                var b,
                    c,
                    d = this.length,
                    e = this;
                if ("string" != typeof a)
                    return this.pushStack(
                        r(a).filter(function () {
                            for (b = 0; b < d; b++)
                                if (r.contains(e[b], this)) return !0;
                        })
                    );
                for (c = this.pushStack([]), b = 0; b < d; b++)
                    r.find(a, e[b], c);
                return d > 1 ? r.uniqueSort(c) : c;
            },
            filter: function (a) {
                return this.pushStack(E(this, a || [], !1));
            },
            not: function (a) {
                return this.pushStack(E(this, a || [], !0));
            },
            is: function (a) {
                return !!E(
                    this,
                    "string" == typeof a && A.test(a) ? r(a) : a || [],
                    !1
                ).length;
            },
        });
    var F,
        G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        H = (r.fn.init = function (a, b, c) {
            var e, f;
            if (!a) return this;
            if (((c = c || F), "string" == typeof a)) {
                if (
                    ((e =
                        "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3
                            ? [null, a, null]
                            : G.exec(a)),
                    !e || (!e[1] && b))
                )
                    return !b || b.jquery
                        ? (b || c).find(a)
                        : this.constructor(b).find(a);
                if (e[1]) {
                    if (
                        ((b = b instanceof r ? b[0] : b),
                        r.merge(
                            this,
                            r.parseHTML(
                                e[1],
                                b && b.nodeType ? b.ownerDocument || b : d,
                                !0
                            )
                        ),
                        C.test(e[1]) && r.isPlainObject(b))
                    )
                        for (e in b)
                            r.isFunction(this[e])
                                ? this[e](b[e])
                                : this.attr(e, b[e]);
                    return this;
                }
                return (
                    (f = d.getElementById(e[2])),
                    f && ((this[0] = f), (this.length = 1)),
                    this
                );
            }
            return a.nodeType
                ? ((this[0] = a), (this.length = 1), this)
                : r.isFunction(a)
                ? void 0 !== c.ready
                    ? c.ready(a)
                    : a(r)
                : r.makeArray(a, this);
        });
    (H.prototype = r.fn), (F = r(d));
    var I = /^(?:parents|prev(?:Until|All))/,
        J = { children: !0, contents: !0, next: !0, prev: !0 };
    r.fn.extend({
        has: function (a) {
            var b = r(a, this),
                c = b.length;
            return this.filter(function () {
                for (var a = 0; a < c; a++)
                    if (r.contains(this, b[a])) return !0;
            });
        },
        closest: function (a, b) {
            var c,
                d = 0,
                e = this.length,
                f = [],
                g = "string" != typeof a && r(a);
            if (!A.test(a))
                for (; d < e; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (
                            c.nodeType < 11 &&
                            (g
                                ? g.index(c) > -1
                                : 1 === c.nodeType &&
                                  r.find.matchesSelector(c, a))
                        ) {
                            f.push(c);
                            break;
                        }
            return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f);
        },
        index: function (a) {
            return a
                ? "string" == typeof a
                    ? i.call(r(a), this[0])
                    : i.call(this, a.jquery ? a[0] : a)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
        },
        add: function (a, b) {
            return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));
        },
        addBack: function (a) {
            return this.add(
                null == a ? this.prevObject : this.prevObject.filter(a)
            );
        },
    });
    function K(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a;
    }
    r.each(
        {
            parent: function (a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null;
            },
            parents: function (a) {
                return y(a, "parentNode");
            },
            parentsUntil: function (a, b, c) {
                return y(a, "parentNode", c);
            },
            next: function (a) {
                return K(a, "nextSibling");
            },
            prev: function (a) {
                return K(a, "previousSibling");
            },
            nextAll: function (a) {
                return y(a, "nextSibling");
            },
            prevAll: function (a) {
                return y(a, "previousSibling");
            },
            nextUntil: function (a, b, c) {
                return y(a, "nextSibling", c);
            },
            prevUntil: function (a, b, c) {
                return y(a, "previousSibling", c);
            },
            siblings: function (a) {
                return z((a.parentNode || {}).firstChild, a);
            },
            children: function (a) {
                return z(a.firstChild);
            },
            contents: function (a) {
                return B(a, "iframe")
                    ? a.contentDocument
                    : (B(a, "template") && (a = a.content || a),
                      r.merge([], a.childNodes));
            },
        },
        function (a, b) {
            r.fn[a] = function (c, d) {
                var e = r.map(this, b, c);
                return (
                    "Until" !== a.slice(-5) && (d = c),
                    d && "string" == typeof d && (e = r.filter(d, e)),
                    this.length > 1 &&
                        (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()),
                    this.pushStack(e)
                );
            };
        }
    );
    var L = /[^\x20\t\r\n\f]+/g;
    function M(a) {
        var b = {};
        return (
            r.each(a.match(L) || [], function (a, c) {
                b[c] = !0;
            }),
            b
        );
    }
    r.Callbacks = function (a) {
        a = "string" == typeof a ? M(a) : r.extend({}, a);
        var b,
            c,
            d,
            e,
            f = [],
            g = [],
            h = -1,
            i = function () {
                for (e = e || a.once, d = b = !0; g.length; h = -1) {
                    c = g.shift();
                    while (++h < f.length)
                        f[h].apply(c[0], c[1]) === !1 &&
                            a.stopOnFalse &&
                            ((h = f.length), (c = !1));
                }
                a.memory || (c = !1), (b = !1), e && (f = c ? [] : "");
            },
            j = {
                add: function () {
                    return (
                        f &&
                            (c && !b && ((h = f.length - 1), g.push(c)),
                            (function d(b) {
                                r.each(b, function (b, c) {
                                    r.isFunction(c)
                                        ? (a.unique && j.has(c)) || f.push(c)
                                        : c &&
                                          c.length &&
                                          "string" !== r.type(c) &&
                                          d(c);
                                });
                            })(arguments),
                            c && !b && i()),
                        this
                    );
                },
                remove: function () {
                    return (
                        r.each(arguments, function (a, b) {
                            var c;
                            while ((c = r.inArray(b, f, c)) > -1)
                                f.splice(c, 1), c <= h && h--;
                        }),
                        this
                    );
                },
                has: function (a) {
                    return a ? r.inArray(a, f) > -1 : f.length > 0;
                },
                empty: function () {
                    return f && (f = []), this;
                },
                disable: function () {
                    return (e = g = []), (f = c = ""), this;
                },
                disabled: function () {
                    return !f;
                },
                lock: function () {
                    return (e = g = []), c || b || (f = c = ""), this;
                },
                locked: function () {
                    return !!e;
                },
                fireWith: function (a, c) {
                    return (
                        e ||
                            ((c = c || []),
                            (c = [a, c.slice ? c.slice() : c]),
                            g.push(c),
                            b || i()),
                        this
                    );
                },
                fire: function () {
                    return j.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!d;
                },
            };
        return j;
    };
    function N(a) {
        return a;
    }
    function O(a) {
        throw a;
    }
    function P(a, b, c, d) {
        var e;
        try {
            a && r.isFunction((e = a.promise))
                ? e.call(a).done(b).fail(c)
                : a && r.isFunction((e = a.then))
                ? e.call(a, b, c)
                : b.apply(void 0, [a].slice(d));
        } catch (a) {
            c.apply(void 0, [a]);
        }
    }
    r.extend({
        Deferred: function (b) {
            var c = [
                    [
                        "notify",
                        "progress",
                        r.Callbacks("memory"),
                        r.Callbacks("memory"),
                        2,
                    ],
                    [
                        "resolve",
                        "done",
                        r.Callbacks("once memory"),
                        r.Callbacks("once memory"),
                        0,
                        "resolved",
                    ],
                    [
                        "reject",
                        "fail",
                        r.Callbacks("once memory"),
                        r.Callbacks("once memory"),
                        1,
                        "rejected",
                    ],
                ],
                d = "pending",
                e = {
                    state: function () {
                        return d;
                    },
                    always: function () {
                        return f.done(arguments).fail(arguments), this;
                    },
                    catch: function (a) {
                        return e.then(null, a);
                    },
                    pipe: function () {
                        var a = arguments;
                        return r
                            .Deferred(function (b) {
                                r.each(c, function (c, d) {
                                    var e = r.isFunction(a[d[4]]) && a[d[4]];
                                    f[d[1]](function () {
                                        var a = e && e.apply(this, arguments);
                                        a && r.isFunction(a.promise)
                                            ? a
                                                  .promise()
                                                  .progress(b.notify)
                                                  .done(b.resolve)
                                                  .fail(b.reject)
                                            : b[d[0] + "With"](
                                                  this,
                                                  e ? [a] : arguments
                                              );
                                    });
                                }),
                                    (a = null);
                            })
                            .promise();
                    },
                    then: function (b, d, e) {
                        var f = 0;
                        function g(b, c, d, e) {
                            return function () {
                                var h = this,
                                    i = arguments,
                                    j = function () {
                                        var a, j;
                                        if (!(b < f)) {
                                            if (
                                                ((a = d.apply(h, i)),
                                                a === c.promise())
                                            )
                                                throw new TypeError(
                                                    "Thenable self-resolution"
                                                );
                                            (j =
                                                a &&
                                                ("object" == typeof a ||
                                                    "function" == typeof a) &&
                                                a.then),
                                                r.isFunction(j)
                                                    ? e
                                                        ? j.call(
                                                              a,
                                                              g(f, c, N, e),
                                                              g(f, c, O, e)
                                                          )
                                                        : (f++,
                                                          j.call(
                                                              a,
                                                              g(f, c, N, e),
                                                              g(f, c, O, e),
                                                              g(
                                                                  f,
                                                                  c,
                                                                  N,
                                                                  c.notifyWith
                                                              )
                                                          ))
                                                    : (d !== N &&
                                                          ((h = void 0),
                                                          (i = [a])),
                                                      (e || c.resolveWith)(
                                                          h,
                                                          i
                                                      ));
                                        }
                                    },
                                    k = e
                                        ? j
                                        : function () {
                                              try {
                                                  j();
                                              } catch (a) {
                                                  r.Deferred.exceptionHook &&
                                                      r.Deferred.exceptionHook(
                                                          a,
                                                          k.stackTrace
                                                      ),
                                                      b + 1 >= f &&
                                                          (d !== O &&
                                                              ((h = void 0),
                                                              (i = [a])),
                                                          c.rejectWith(h, i));
                                              }
                                          };
                                b
                                    ? k()
                                    : (r.Deferred.getStackHook &&
                                          (k.stackTrace =
                                              r.Deferred.getStackHook()),
                                      a.setTimeout(k));
                            };
                        }
                        return r
                            .Deferred(function (a) {
                                c[0][3].add(
                                    g(
                                        0,
                                        a,
                                        r.isFunction(e) ? e : N,
                                        a.notifyWith
                                    )
                                ),
                                    c[1][3].add(
                                        g(0, a, r.isFunction(b) ? b : N)
                                    ),
                                    c[2][3].add(
                                        g(0, a, r.isFunction(d) ? d : O)
                                    );
                            })
                            .promise();
                    },
                    promise: function (a) {
                        return null != a ? r.extend(a, e) : e;
                    },
                },
                f = {};
            return (
                r.each(c, function (a, b) {
                    var g = b[2],
                        h = b[5];
                    (e[b[1]] = g.add),
                        h &&
                            g.add(
                                function () {
                                    d = h;
                                },
                                c[3 - a][2].disable,
                                c[0][2].lock
                            ),
                        g.add(b[3].fire),
                        (f[b[0]] = function () {
                            return (
                                f[b[0] + "With"](
                                    this === f ? void 0 : this,
                                    arguments
                                ),
                                this
                            );
                        }),
                        (f[b[0] + "With"] = g.fireWith);
                }),
                e.promise(f),
                b && b.call(f, f),
                f
            );
        },
        when: function (a) {
            var b = arguments.length,
                c = b,
                d = Array(c),
                e = f.call(arguments),
                g = r.Deferred(),
                h = function (a) {
                    return function (c) {
                        (d[a] = this),
                            (e[a] =
                                arguments.length > 1 ? f.call(arguments) : c),
                            --b || g.resolveWith(d, e);
                    };
                };
            if (
                b <= 1 &&
                (P(a, g.done(h(c)).resolve, g.reject, !b),
                "pending" === g.state() || r.isFunction(e[c] && e[c].then))
            )
                return g.then();
            while (c--) P(e[c], h(c), g.reject);
            return g.promise();
        },
    });
    var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (r.Deferred.exceptionHook = function (b, c) {
        a.console &&
            a.console.warn &&
            b &&
            Q.test(b.name) &&
            a.console.warn(
                "jQuery.Deferred exception: " + b.message,
                b.stack,
                c
            );
    }),
        (r.readyException = function (b) {
            a.setTimeout(function () {
                throw b;
            });
        });
    var R = r.Deferred();
    (r.fn.ready = function (a) {
        return (
            R.then(a)["catch"](function (a) {
                r.readyException(a);
            }),
            this
        );
    }),
        r.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (a) {
                (a === !0 ? --r.readyWait : r.isReady) ||
                    ((r.isReady = !0),
                    (a !== !0 && --r.readyWait > 0) || R.resolveWith(d, [r]));
            },
        }),
        (r.ready.then = R.then);
    function S() {
        d.removeEventListener("DOMContentLoaded", S),
            a.removeEventListener("load", S),
            r.ready();
    }
    "complete" === d.readyState ||
    ("loading" !== d.readyState && !d.documentElement.doScroll)
        ? a.setTimeout(r.ready)
        : (d.addEventListener("DOMContentLoaded", S),
          a.addEventListener("load", S));
    var T = function (a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === r.type(c)) {
                e = !0;
                for (h in c) T(a, b, h, c[h], !0, f, g);
            } else if (
                void 0 !== d &&
                ((e = !0),
                r.isFunction(d) || (g = !0),
                j &&
                    (g
                        ? (b.call(a, d), (b = null))
                        : ((j = b),
                          (b = function (a, b, c) {
                              return j.call(r(a), c);
                          }))),
                b)
            )
                for (; h < i; h++)
                    b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
        },
        U = function (a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
        };
    function V() {
        this.expando = r.expando + V.uid++;
    }
    (V.uid = 1),
        (V.prototype = {
            cache: function (a) {
                var b = a[this.expando];
                return (
                    b ||
                        ((b = {}),
                        U(a) &&
                            (a.nodeType
                                ? (a[this.expando] = b)
                                : Object.defineProperty(a, this.expando, {
                                      value: b,
                                      configurable: !0,
                                  }))),
                    b
                );
            },
            set: function (a, b, c) {
                var d,
                    e = this.cache(a);
                if ("string" == typeof b) e[r.camelCase(b)] = c;
                else for (d in b) e[r.camelCase(d)] = b[d];
                return e;
            },
            get: function (a, b) {
                return void 0 === b
                    ? this.cache(a)
                    : a[this.expando] && a[this.expando][r.camelCase(b)];
            },
            access: function (a, b, c) {
                return void 0 === b ||
                    (b && "string" == typeof b && void 0 === c)
                    ? this.get(a, b)
                    : (this.set(a, b, c), void 0 !== c ? c : b);
            },
            remove: function (a, b) {
                var c,
                    d = a[this.expando];
                if (void 0 !== d) {
                    if (void 0 !== b) {
                        Array.isArray(b)
                            ? (b = b.map(r.camelCase))
                            : ((b = r.camelCase(b)),
                              (b = b in d ? [b] : b.match(L) || [])),
                            (c = b.length);
                        while (c--) delete d[b[c]];
                    }
                    (void 0 === b || r.isEmptyObject(d)) &&
                        (a.nodeType
                            ? (a[this.expando] = void 0)
                            : delete a[this.expando]);
                }
            },
            hasData: function (a) {
                var b = a[this.expando];
                return void 0 !== b && !r.isEmptyObject(b);
            },
        });
    var W = new V(),
        X = new V(),
        Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;
    function $(a) {
        return (
            "true" === a ||
            ("false" !== a &&
                ("null" === a
                    ? null
                    : a === +a + ""
                    ? +a
                    : Y.test(a)
                    ? JSON.parse(a)
                    : a))
        );
    }
    function _(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (
                ((d = "data-" + b.replace(Z, "-$&").toLowerCase()),
                (c = a.getAttribute(d)),
                "string" == typeof c)
            ) {
                try {
                    c = $(c);
                } catch (e) {}
                X.set(a, b, c);
            } else c = void 0;
        return c;
    }
    r.extend({
        hasData: function (a) {
            return X.hasData(a) || W.hasData(a);
        },
        data: function (a, b, c) {
            return X.access(a, b, c);
        },
        removeData: function (a, b) {
            X.remove(a, b);
        },
        _data: function (a, b, c) {
            return W.access(a, b, c);
        },
        _removeData: function (a, b) {
            W.remove(a, b);
        },
    }),
        r.fn.extend({
            data: function (a, b) {
                var c,
                    d,
                    e,
                    f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (
                        this.length &&
                        ((e = X.get(f)),
                        1 === f.nodeType && !W.get(f, "hasDataAttrs"))
                    ) {
                        c = g.length;
                        while (c--)
                            g[c] &&
                                ((d = g[c].name),
                                0 === d.indexOf("data-") &&
                                    ((d = r.camelCase(d.slice(5))),
                                    _(f, d, e[d])));
                        W.set(f, "hasDataAttrs", !0);
                    }
                    return e;
                }
                return "object" == typeof a
                    ? this.each(function () {
                          X.set(this, a);
                      })
                    : T(
                          this,
                          function (b) {
                              var c;
                              if (f && void 0 === b) {
                                  if (((c = X.get(f, a)), void 0 !== c))
                                      return c;
                                  if (((c = _(f, a)), void 0 !== c)) return c;
                              } else
                                  this.each(function () {
                                      X.set(this, a, b);
                                  });
                          },
                          null,
                          b,
                          arguments.length > 1,
                          null,
                          !0
                      );
            },
            removeData: function (a) {
                return this.each(function () {
                    X.remove(this, a);
                });
            },
        }),
        r.extend({
            queue: function (a, b, c) {
                var d;
                if (a)
                    return (
                        (b = (b || "fx") + "queue"),
                        (d = W.get(a, b)),
                        c &&
                            (!d || Array.isArray(c)
                                ? (d = W.access(a, b, r.makeArray(c)))
                                : d.push(c)),
                        d || []
                    );
            },
            dequeue: function (a, b) {
                b = b || "fx";
                var c = r.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = r._queueHooks(a, b),
                    g = function () {
                        r.dequeue(a, b);
                    };
                "inprogress" === e && ((e = c.shift()), d--),
                    e &&
                        ("fx" === b && c.unshift("inprogress"),
                        delete f.stop,
                        e.call(a, g, f)),
                    !d && f && f.empty.fire();
            },
            _queueHooks: function (a, b) {
                var c = b + "queueHooks";
                return (
                    W.get(a, c) ||
                    W.access(a, c, {
                        empty: r.Callbacks("once memory").add(function () {
                            W.remove(a, [b + "queue", c]);
                        }),
                    })
                );
            },
        }),
        r.fn.extend({
            queue: function (a, b) {
                var c = 2;
                return (
                    "string" != typeof a && ((b = a), (a = "fx"), c--),
                    arguments.length < c
                        ? r.queue(this[0], a)
                        : void 0 === b
                        ? this
                        : this.each(function () {
                              var c = r.queue(this, a, b);
                              r._queueHooks(this, a),
                                  "fx" === a &&
                                      "inprogress" !== c[0] &&
                                      r.dequeue(this, a);
                          })
                );
            },
            dequeue: function (a) {
                return this.each(function () {
                    r.dequeue(this, a);
                });
            },
            clearQueue: function (a) {
                return this.queue(a || "fx", []);
            },
            promise: function (a, b) {
                var c,
                    d = 1,
                    e = r.Deferred(),
                    f = this,
                    g = this.length,
                    h = function () {
                        --d || e.resolveWith(f, [f]);
                    };
                "string" != typeof a && ((b = a), (a = void 0)),
                    (a = a || "fx");
                while (g--)
                    (c = W.get(f[g], a + "queueHooks")),
                        c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b);
            },
        });
    var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"),
        ca = ["Top", "Right", "Bottom", "Left"],
        da = function (a, b) {
            return (
                (a = b || a),
                "none" === a.style.display ||
                    ("" === a.style.display &&
                        r.contains(a.ownerDocument, a) &&
                        "none" === r.css(a, "display"))
            );
        },
        ea = function (a, b, c, d) {
            var e,
                f,
                g = {};
            for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e;
        };
    function fa(a, b, c, d) {
        var e,
            f = 1,
            g = 20,
            h = d
                ? function () {
                      return d.cur();
                  }
                : function () {
                      return r.css(a, b, "");
                  },
            i = h(),
            j = (c && c[3]) || (r.cssNumber[b] ? "" : "px"),
            k = (r.cssNumber[b] || ("px" !== j && +i)) && ba.exec(r.css(a, b));
        if (k && k[3] !== j) {
            (j = j || k[3]), (c = c || []), (k = +i || 1);
            do (f = f || ".5"), (k /= f), r.style(a, b, k + j);
            while (f !== (f = h() / i) && 1 !== f && --g);
        }
        return (
            c &&
                ((k = +k || +i || 0),
                (e = c[1] ? k + (c[1] + 1) * c[2] : +c[2]),
                d && ((d.unit = j), (d.start = k), (d.end = e))),
            e
        );
    }
    var ga = {};
    function ha(a) {
        var b,
            c = a.ownerDocument,
            d = a.nodeName,
            e = ga[d];
        return e
            ? e
            : ((b = c.body.appendChild(c.createElement(d))),
              (e = r.css(b, "display")),
              b.parentNode.removeChild(b),
              "none" === e && (e = "block"),
              (ga[d] = e),
              e);
    }
    function ia(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; f < g; f++)
            (d = a[f]),
                d.style &&
                    ((c = d.style.display),
                    b
                        ? ("none" === c &&
                              ((e[f] = W.get(d, "display") || null),
                              e[f] || (d.style.display = "")),
                          "" === d.style.display && da(d) && (e[f] = ha(d)))
                        : "none" !== c &&
                          ((e[f] = "none"), W.set(d, "display", c)));
        for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]);
        return a;
    }
    r.fn.extend({
        show: function () {
            return ia(this, !0);
        },
        hide: function () {
            return ia(this);
        },
        toggle: function (a) {
            return "boolean" == typeof a
                ? a
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                      da(this) ? r(this).show() : r(this).hide();
                  });
        },
    });
    var ja = /^(?:checkbox|radio)$/i,
        ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        la = /^$|\/(?:java|ecma)script/i,
        ma = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
        };
    (ma.optgroup = ma.option),
        (ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead),
        (ma.th = ma.td);
    function na(a, b) {
        var c;
        return (
            (c =
                "undefined" != typeof a.getElementsByTagName
                    ? a.getElementsByTagName(b || "*")
                    : "undefined" != typeof a.querySelectorAll
                    ? a.querySelectorAll(b || "*")
                    : []),
            void 0 === b || (b && B(a, b)) ? r.merge([a], c) : c
        );
    }
    function oa(a, b) {
        for (var c = 0, d = a.length; c < d; c++)
            W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval"));
    }
    var pa = /<|&#?\w+;/;
    function qa(a, b, c, d, e) {
        for (
            var f,
                g,
                h,
                i,
                j,
                k,
                l = b.createDocumentFragment(),
                m = [],
                n = 0,
                o = a.length;
            n < o;
            n++
        )
            if (((f = a[n]), f || 0 === f))
                if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);
                else if (pa.test(f)) {
                    (g = g || l.appendChild(b.createElement("div"))),
                        (h = (ka.exec(f) || ["", ""])[1].toLowerCase()),
                        (i = ma[h] || ma._default),
                        (g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2]),
                        (k = i[0]);
                    while (k--) g = g.lastChild;
                    r.merge(m, g.childNodes),
                        (g = l.firstChild),
                        (g.textContent = "");
                } else m.push(b.createTextNode(f));
        (l.textContent = ""), (n = 0);
        while ((f = m[n++]))
            if (d && r.inArray(f, d) > -1) e && e.push(f);
            else if (
                ((j = r.contains(f.ownerDocument, f)),
                (g = na(l.appendChild(f), "script")),
                j && oa(g),
                c)
            ) {
                k = 0;
                while ((f = g[k++])) la.test(f.type || "") && c.push(f);
            }
        return l;
    }
    !(function () {
        var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");
        c.setAttribute("type", "radio"),
            c.setAttribute("checked", "checked"),
            c.setAttribute("name", "t"),
            b.appendChild(c),
            (o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (b.innerHTML = "<textarea>x</textarea>"),
            (o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
    })();
    var ra = d.documentElement,
        sa = /^key/,
        ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ua = /^([^.]*)(?:\.(.+)|)/;
    function va() {
        return !0;
    }
    function wa() {
        return !1;
    }
    function xa() {
        try {
            return d.activeElement;
        } catch (a) {}
    }
    function ya(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && ((d = d || c), (c = void 0));
            for (h in b) ya(a, h, c, d, b[h], f);
            return a;
        }
        if (
            (null == d && null == e
                ? ((e = c), (d = c = void 0))
                : null == e &&
                  ("string" == typeof c
                      ? ((e = d), (d = void 0))
                      : ((e = d), (d = c), (c = void 0))),
            e === !1)
        )
            e = wa;
        else if (!e) return a;
        return (
            1 === f &&
                ((g = e),
                (e = function (a) {
                    return r().off(a), g.apply(this, arguments);
                }),
                (e.guid = g.guid || (g.guid = r.guid++))),
            a.each(function () {
                r.event.add(this, b, e, d, c);
            })
        );
    }
    (r.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q = W.get(a);
            if (q) {
                c.handler && ((f = c), (c = f.handler), (e = f.selector)),
                    e && r.find.matchesSelector(ra, e),
                    c.guid || (c.guid = r.guid++),
                    (i = q.events) || (i = q.events = {}),
                    (g = q.handle) ||
                        (g = q.handle =
                            function (b) {
                                return "undefined" != typeof r &&
                                    r.event.triggered !== b.type
                                    ? r.event.dispatch.apply(a, arguments)
                                    : void 0;
                            }),
                    (b = (b || "").match(L) || [""]),
                    (j = b.length);
                while (j--)
                    (h = ua.exec(b[j]) || []),
                        (n = p = h[1]),
                        (o = (h[2] || "").split(".").sort()),
                        n &&
                            ((l = r.event.special[n] || {}),
                            (n = (e ? l.delegateType : l.bindType) || n),
                            (l = r.event.special[n] || {}),
                            (k = r.extend(
                                {
                                    type: n,
                                    origType: p,
                                    data: d,
                                    handler: c,
                                    guid: c.guid,
                                    selector: e,
                                    needsContext:
                                        e && r.expr.match.needsContext.test(e),
                                    namespace: o.join("."),
                                },
                                f
                            )),
                            (m = i[n]) ||
                                ((m = i[n] = []),
                                (m.delegateCount = 0),
                                (l.setup && l.setup.call(a, d, o, g) !== !1) ||
                                    (a.addEventListener &&
                                        a.addEventListener(n, g))),
                            l.add &&
                                (l.add.call(a, k),
                                k.handler.guid || (k.handler.guid = c.guid)),
                            e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
                            (r.event.global[n] = !0));
            }
        },
        remove: function (a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q = W.hasData(a) && W.get(a);
            if (q && (i = q.events)) {
                (b = (b || "").match(L) || [""]), (j = b.length);
                while (j--)
                    if (
                        ((h = ua.exec(b[j]) || []),
                        (n = p = h[1]),
                        (o = (h[2] || "").split(".").sort()),
                        n)
                    ) {
                        (l = r.event.special[n] || {}),
                            (n = (d ? l.delegateType : l.bindType) || n),
                            (m = i[n] || []),
                            (h =
                                h[2] &&
                                new RegExp(
                                    "(^|\\.)" +
                                        o.join("\\.(?:.*\\.|)") +
                                        "(\\.|$)"
                                )),
                            (g = f = m.length);
                        while (f--)
                            (k = m[f]),
                                (!e && p !== k.origType) ||
                                    (c && c.guid !== k.guid) ||
                                    (h && !h.test(k.namespace)) ||
                                    (d &&
                                        d !== k.selector &&
                                        ("**" !== d || !k.selector)) ||
                                    (m.splice(f, 1),
                                    k.selector && m.delegateCount--,
                                    l.remove && l.remove.call(a, k));
                        g &&
                            !m.length &&
                            ((l.teardown &&
                                l.teardown.call(a, o, q.handle) !== !1) ||
                                r.removeEvent(a, n, q.handle),
                            delete i[n]);
                    } else for (n in i) r.event.remove(a, n + b[j], c, d, !0);
                r.isEmptyObject(i) && W.remove(a, "handle events");
            }
        },
        dispatch: function (a) {
            var b = r.event.fix(a),
                c,
                d,
                e,
                f,
                g,
                h,
                i = new Array(arguments.length),
                j = (W.get(this, "events") || {})[b.type] || [],
                k = r.event.special[b.type] || {};
            for (i[0] = b, c = 1; c < arguments.length; c++)
                i[c] = arguments[c];
            if (
                ((b.delegateTarget = this),
                !k.preDispatch || k.preDispatch.call(this, b) !== !1)
            ) {
                (h = r.event.handlers.call(this, b, j)), (c = 0);
                while ((f = h[c++]) && !b.isPropagationStopped()) {
                    (b.currentTarget = f.elem), (d = 0);
                    while (
                        (g = f.handlers[d++]) &&
                        !b.isImmediatePropagationStopped()
                    )
                        (b.rnamespace && !b.rnamespace.test(g.namespace)) ||
                            ((b.handleObj = g),
                            (b.data = g.data),
                            (e = (
                                (r.event.special[g.origType] || {}).handle ||
                                g.handler
                            ).apply(f.elem, i)),
                            void 0 !== e &&
                                (b.result = e) === !1 &&
                                (b.preventDefault(), b.stopPropagation()));
                }
                return k.postDispatch && k.postDispatch.call(this, b), b.result;
            }
        },
        handlers: function (a, b) {
            var c,
                d,
                e,
                f,
                g,
                h = [],
                i = b.delegateCount,
                j = a.target;
            if (i && j.nodeType && !("click" === a.type && a.button >= 1))
                for (; j !== this; j = j.parentNode || this)
                    if (
                        1 === j.nodeType &&
                        ("click" !== a.type || j.disabled !== !0)
                    ) {
                        for (f = [], g = {}, c = 0; c < i; c++)
                            (d = b[c]),
                                (e = d.selector + " "),
                                void 0 === g[e] &&
                                    (g[e] = d.needsContext
                                        ? r(e, this).index(j) > -1
                                        : r.find(e, this, null, [j]).length),
                                g[e] && f.push(d);
                        f.length && h.push({ elem: j, handlers: f });
                    }
            return (
                (j = this),
                i < b.length && h.push({ elem: j, handlers: b.slice(i) }),
                h
            );
        },
        addProp: function (a, b) {
            Object.defineProperty(r.Event.prototype, a, {
                enumerable: !0,
                configurable: !0,
                get: r.isFunction(b)
                    ? function () {
                          if (this.originalEvent) return b(this.originalEvent);
                      }
                    : function () {
                          if (this.originalEvent) return this.originalEvent[a];
                      },
                set: function (b) {
                    Object.defineProperty(this, a, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: b,
                    });
                },
            });
        },
        fix: function (a) {
            return a[r.expando] ? a : new r.Event(a);
        },
        special: {
            load: { noBubble: !0 },
            focus: {
                trigger: function () {
                    if (this !== xa() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin",
            },
            blur: {
                trigger: function () {
                    if (this === xa() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout",
            },
            click: {
                trigger: function () {
                    if (
                        "checkbox" === this.type &&
                        this.click &&
                        B(this, "input")
                    )
                        return this.click(), !1;
                },
                _default: function (a) {
                    return B(a.target, "a");
                },
            },
            beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result &&
                        a.originalEvent &&
                        (a.originalEvent.returnValue = a.result);
                },
            },
        },
    }),
        (r.removeEvent = function (a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c);
        }),
        (r.Event = function (a, b) {
            return this instanceof r.Event
                ? (a && a.type
                      ? ((this.originalEvent = a),
                        (this.type = a.type),
                        (this.isDefaultPrevented =
                            a.defaultPrevented ||
                            (void 0 === a.defaultPrevented &&
                                a.returnValue === !1)
                                ? va
                                : wa),
                        (this.target =
                            a.target && 3 === a.target.nodeType
                                ? a.target.parentNode
                                : a.target),
                        (this.currentTarget = a.currentTarget),
                        (this.relatedTarget = a.relatedTarget))
                      : (this.type = a),
                  b && r.extend(this, b),
                  (this.timeStamp = (a && a.timeStamp) || r.now()),
                  void (this[r.expando] = !0))
                : new r.Event(a, b);
        }),
        (r.Event.prototype = {
            constructor: r.Event,
            isDefaultPrevented: wa,
            isPropagationStopped: wa,
            isImmediatePropagationStopped: wa,
            isSimulated: !1,
            preventDefault: function () {
                var a = this.originalEvent;
                (this.isDefaultPrevented = va),
                    a && !this.isSimulated && a.preventDefault();
            },
            stopPropagation: function () {
                var a = this.originalEvent;
                (this.isPropagationStopped = va),
                    a && !this.isSimulated && a.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var a = this.originalEvent;
                (this.isImmediatePropagationStopped = va),
                    a && !this.isSimulated && a.stopImmediatePropagation(),
                    this.stopPropagation();
            },
        }),
        r.each(
            {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (a) {
                    var b = a.button;
                    return null == a.which && sa.test(a.type)
                        ? null != a.charCode
                            ? a.charCode
                            : a.keyCode
                        : !a.which && void 0 !== b && ta.test(a.type)
                        ? 1 & b
                            ? 1
                            : 2 & b
                            ? 3
                            : 4 & b
                            ? 2
                            : 0
                        : a.which;
                },
            },
            r.event.addProp
        ),
        r.each(
            {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
            },
            function (a, b) {
                r.event.special[a] = {
                    delegateType: b,
                    bindType: b,
                    handle: function (a) {
                        var c,
                            d = this,
                            e = a.relatedTarget,
                            f = a.handleObj;
                        return (
                            (e && (e === d || r.contains(d, e))) ||
                                ((a.type = f.origType),
                                (c = f.handler.apply(this, arguments)),
                                (a.type = b)),
                            c
                        );
                    },
                };
            }
        ),
        r.fn.extend({
            on: function (a, b, c, d) {
                return ya(this, a, b, c, d);
            },
            one: function (a, b, c, d) {
                return ya(this, a, b, c, d, 1);
            },
            off: function (a, b, c) {
                var d, e;
                if (a && a.preventDefault && a.handleObj)
                    return (
                        (d = a.handleObj),
                        r(a.delegateTarget).off(
                            d.namespace
                                ? d.origType + "." + d.namespace
                                : d.origType,
                            d.selector,
                            d.handler
                        ),
                        this
                    );
                if ("object" == typeof a) {
                    for (e in a) this.off(e, b, a[e]);
                    return this;
                }
                return (
                    (b !== !1 && "function" != typeof b) ||
                        ((c = b), (b = void 0)),
                    c === !1 && (c = wa),
                    this.each(function () {
                        r.event.remove(this, a, c, b);
                    })
                );
            },
        });
    var za =
            /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Aa = /<script|<style|<link/i,
        Ba = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ca = /^true\/(.*)/,
        Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Ea(a, b) {
        return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr")
            ? r(">tbody", a)[0] || a
            : a;
    }
    function Fa(a) {
        return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
    }
    function Ga(a) {
        var b = Ca.exec(a.type);
        return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
    }
    function Ha(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (
                W.hasData(a) &&
                ((f = W.access(a)), (g = W.set(b, f)), (j = f.events))
            ) {
                delete g.handle, (g.events = {});
                for (e in j)
                    for (c = 0, d = j[e].length; c < d; c++)
                        r.event.add(b, e, j[e][c]);
            }
            X.hasData(a) &&
                ((h = X.access(a)), (i = r.extend({}, h)), X.set(b, i));
        }
    }
    function Ia(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && ja.test(a.type)
            ? (b.checked = a.checked)
            : ("input" !== c && "textarea" !== c) ||
              (b.defaultValue = a.defaultValue);
    }
    function Ja(a, b, c, d) {
        b = g.apply([], b);
        var e,
            f,
            h,
            i,
            j,
            k,
            l = 0,
            m = a.length,
            n = m - 1,
            q = b[0],
            s = r.isFunction(q);
        if (s || (m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q)))
            return a.each(function (e) {
                var f = a.eq(e);
                s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d);
            });
        if (
            m &&
            ((e = qa(b, a[0].ownerDocument, !1, a, d)),
            (f = e.firstChild),
            1 === e.childNodes.length && (e = f),
            f || d)
        ) {
            for (h = r.map(na(e, "script"), Fa), i = h.length; l < m; l++)
                (j = e),
                    l !== n &&
                        ((j = r.clone(j, !0, !0)),
                        i && r.merge(h, na(j, "script"))),
                    c.call(a[l], j, l);
            if (i)
                for (
                    k = h[h.length - 1].ownerDocument, r.map(h, Ga), l = 0;
                    l < i;
                    l++
                )
                    (j = h[l]),
                        la.test(j.type || "") &&
                            !W.access(j, "globalEval") &&
                            r.contains(k, j) &&
                            (j.src
                                ? r._evalUrl && r._evalUrl(j.src)
                                : p(j.textContent.replace(Da, ""), k));
        }
        return a;
    }
    function Ka(a, b, c) {
        for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
            c || 1 !== d.nodeType || r.cleanData(na(d)),
                d.parentNode &&
                    (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")),
                    d.parentNode.removeChild(d));
        return a;
    }
    r.extend({
        htmlPrefilter: function (a) {
            return a.replace(za, "<$1></$2>");
        },
        clone: function (a, b, c) {
            var d,
                e,
                f,
                g,
                h = a.cloneNode(!0),
                i = r.contains(a.ownerDocument, a);
            if (
                !(
                    o.noCloneChecked ||
                    (1 !== a.nodeType && 11 !== a.nodeType) ||
                    r.isXMLDoc(a)
                )
            )
                for (g = na(h), f = na(a), d = 0, e = f.length; d < e; d++)
                    Ia(f[d], g[d]);
            if (b)
                if (c)
                    for (
                        f = f || na(a), g = g || na(h), d = 0, e = f.length;
                        d < e;
                        d++
                    )
                        Ha(f[d], g[d]);
                else Ha(a, h);
            return (
                (g = na(h, "script")),
                g.length > 0 && oa(g, !i && na(a, "script")),
                h
            );
        },
        cleanData: function (a) {
            for (
                var b, c, d, e = r.event.special, f = 0;
                void 0 !== (c = a[f]);
                f++
            )
                if (U(c)) {
                    if ((b = c[W.expando])) {
                        if (b.events)
                            for (d in b.events)
                                e[d]
                                    ? r.event.remove(c, d)
                                    : r.removeEvent(c, d, b.handle);
                        c[W.expando] = void 0;
                    }
                    c[X.expando] && (c[X.expando] = void 0);
                }
        },
    }),
        r.fn.extend({
            detach: function (a) {
                return Ka(this, a, !0);
            },
            remove: function (a) {
                return Ka(this, a);
            },
            text: function (a) {
                return T(
                    this,
                    function (a) {
                        return void 0 === a
                            ? r.text(this)
                            : this.empty().each(function () {
                                  (1 !== this.nodeType &&
                                      11 !== this.nodeType &&
                                      9 !== this.nodeType) ||
                                      (this.textContent = a);
                              });
                    },
                    null,
                    a,
                    arguments.length
                );
            },
            append: function () {
                return Ja(this, arguments, function (a) {
                    if (
                        1 === this.nodeType ||
                        11 === this.nodeType ||
                        9 === this.nodeType
                    ) {
                        var b = Ea(this, a);
                        b.appendChild(a);
                    }
                });
            },
            prepend: function () {
                return Ja(this, arguments, function (a) {
                    if (
                        1 === this.nodeType ||
                        11 === this.nodeType ||
                        9 === this.nodeType
                    ) {
                        var b = Ea(this, a);
                        b.insertBefore(a, b.firstChild);
                    }
                });
            },
            before: function () {
                return Ja(this, arguments, function (a) {
                    this.parentNode && this.parentNode.insertBefore(a, this);
                });
            },
            after: function () {
                return Ja(this, arguments, function (a) {
                    this.parentNode &&
                        this.parentNode.insertBefore(a, this.nextSibling);
                });
            },
            empty: function () {
                for (var a, b = 0; null != (a = this[b]); b++)
                    1 === a.nodeType &&
                        (r.cleanData(na(a, !1)), (a.textContent = ""));
                return this;
            },
            clone: function (a, b) {
                return (
                    (a = null != a && a),
                    (b = null == b ? a : b),
                    this.map(function () {
                        return r.clone(this, a, b);
                    })
                );
            },
            html: function (a) {
                return T(
                    this,
                    function (a) {
                        var b = this[0] || {},
                            c = 0,
                            d = this.length;
                        if (void 0 === a && 1 === b.nodeType)
                            return b.innerHTML;
                        if (
                            "string" == typeof a &&
                            !Aa.test(a) &&
                            !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]
                        ) {
                            a = r.htmlPrefilter(a);
                            try {
                                for (; c < d; c++)
                                    (b = this[c] || {}),
                                        1 === b.nodeType &&
                                            (r.cleanData(na(b, !1)),
                                            (b.innerHTML = a));
                                b = 0;
                            } catch (e) {}
                        }
                        b && this.empty().append(a);
                    },
                    null,
                    a,
                    arguments.length
                );
            },
            replaceWith: function () {
                var a = [];
                return Ja(
                    this,
                    arguments,
                    function (b) {
                        var c = this.parentNode;
                        r.inArray(this, a) < 0 &&
                            (r.cleanData(na(this)),
                            c && c.replaceChild(b, this));
                    },
                    a
                );
            },
        }),
        r.each(
            {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
            },
            function (a, b) {
                r.fn[a] = function (a) {
                    for (
                        var c, d = [], e = r(a), f = e.length - 1, g = 0;
                        g <= f;
                        g++
                    )
                        (c = g === f ? this : this.clone(!0)),
                            r(e[g])[b](c),
                            h.apply(d, c.get());
                    return this.pushStack(d);
                };
            }
        );
    var La = /^margin/,
        Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"),
        Na = function (b) {
            var c = b.ownerDocument.defaultView;
            return (c && c.opener) || (c = a), c.getComputedStyle(b);
        };
    !(function () {
        function b() {
            if (i) {
                (i.style.cssText =
                    "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
                    (i.innerHTML = ""),
                    ra.appendChild(h);
                var b = a.getComputedStyle(i);
                (c = "1%" !== b.top),
                    (g = "2px" === b.marginLeft),
                    (e = "4px" === b.width),
                    (i.style.marginRight = "50%"),
                    (f = "4px" === b.marginRight),
                    ra.removeChild(h),
                    (i = null);
            }
        }
        var c,
            e,
            f,
            g,
            h = d.createElement("div"),
            i = d.createElement("div");
        i.style &&
            ((i.style.backgroundClip = "content-box"),
            (i.cloneNode(!0).style.backgroundClip = ""),
            (o.clearCloneStyle = "content-box" === i.style.backgroundClip),
            (h.style.cssText =
                "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
            h.appendChild(i),
            r.extend(o, {
                pixelPosition: function () {
                    return b(), c;
                },
                boxSizingReliable: function () {
                    return b(), e;
                },
                pixelMarginRight: function () {
                    return b(), f;
                },
                reliableMarginLeft: function () {
                    return b(), g;
                },
            }));
    })();
    function Oa(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.style;
        return (
            (c = c || Na(a)),
            c &&
                ((g = c.getPropertyValue(b) || c[b]),
                "" !== g ||
                    r.contains(a.ownerDocument, a) ||
                    (g = r.style(a, b)),
                !o.pixelMarginRight() &&
                    Ma.test(g) &&
                    La.test(b) &&
                    ((d = h.width),
                    (e = h.minWidth),
                    (f = h.maxWidth),
                    (h.minWidth = h.maxWidth = h.width = g),
                    (g = c.width),
                    (h.width = d),
                    (h.minWidth = e),
                    (h.maxWidth = f))),
            void 0 !== g ? g + "" : g
        );
    }
    function Pa(a, b) {
        return {
            get: function () {
                return a()
                    ? void delete this.get
                    : (this.get = b).apply(this, arguments);
            },
        };
    }
    var Qa = /^(none|table(?!-c[ea]).+)/,
        Ra = /^--/,
        Sa = { position: "absolute", visibility: "hidden", display: "block" },
        Ta = { letterSpacing: "0", fontWeight: "400" },
        Ua = ["Webkit", "Moz", "ms"],
        Va = d.createElement("div").style;
    function Wa(a) {
        if (a in Va) return a;
        var b = a[0].toUpperCase() + a.slice(1),
            c = Ua.length;
        while (c--) if (((a = Ua[c] + b), a in Va)) return a;
    }
    function Xa(a) {
        var b = r.cssProps[a];
        return b || (b = r.cssProps[a] = Wa(a) || a), b;
    }
    function Ya(a, b, c) {
        var d = ba.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
    }
    function Za(a, b, c, d, e) {
        var f,
            g = 0;
        for (
            f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0;
            f < 4;
            f += 2
        )
            "margin" === c && (g += r.css(a, c + ca[f], !0, e)),
                d
                    ? ("content" === c &&
                          (g -= r.css(a, "padding" + ca[f], !0, e)),
                      "margin" !== c &&
                          (g -= r.css(a, "border" + ca[f] + "Width", !0, e)))
                    : ((g += r.css(a, "padding" + ca[f], !0, e)),
                      "padding" !== c &&
                          (g += r.css(a, "border" + ca[f] + "Width", !0, e)));
        return g;
    }
    function $a(a, b, c) {
        var d,
            e = Na(a),
            f = Oa(a, b, e),
            g = "border-box" === r.css(a, "boxSizing", !1, e);
        return Ma.test(f)
            ? f
            : ((d = g && (o.boxSizingReliable() || f === a.style[b])),
              "auto" === f &&
                  (f = a["offset" + b[0].toUpperCase() + b.slice(1)]),
              (f = parseFloat(f) || 0),
              f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px");
    }
    r.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = Oa(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                },
            },
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
        },
        cssProps: { float: "cssFloat" },
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e,
                    f,
                    g,
                    h = r.camelCase(b),
                    i = Ra.test(b),
                    j = a.style;
                return (
                    i || (b = Xa(h)),
                    (g = r.cssHooks[b] || r.cssHooks[h]),
                    void 0 === c
                        ? g && "get" in g && void 0 !== (e = g.get(a, !1, d))
                            ? e
                            : j[b]
                        : ((f = typeof c),
                          "string" === f &&
                              (e = ba.exec(c)) &&
                              e[1] &&
                              ((c = fa(a, b, e)), (f = "number")),
                          null != c &&
                              c === c &&
                              ("number" === f &&
                                  (c +=
                                      (e && e[3]) ||
                                      (r.cssNumber[h] ? "" : "px")),
                              o.clearCloneStyle ||
                                  "" !== c ||
                                  0 !== b.indexOf("background") ||
                                  (j[b] = "inherit"),
                              (g &&
                                  "set" in g &&
                                  void 0 === (c = g.set(a, c, d))) ||
                                  (i ? j.setProperty(b, c) : (j[b] = c))),
                          void 0)
                );
            }
        },
        css: function (a, b, c, d) {
            var e,
                f,
                g,
                h = r.camelCase(b),
                i = Ra.test(b);
            return (
                i || (b = Xa(h)),
                (g = r.cssHooks[b] || r.cssHooks[h]),
                g && "get" in g && (e = g.get(a, !0, c)),
                void 0 === e && (e = Oa(a, b, d)),
                "normal" === e && b in Ta && (e = Ta[b]),
                "" === c || c
                    ? ((f = parseFloat(e)),
                      c === !0 || isFinite(f) ? f || 0 : e)
                    : e
            );
        },
    }),
        r.each(["height", "width"], function (a, b) {
            r.cssHooks[b] = {
                get: function (a, c, d) {
                    if (c)
                        return !Qa.test(r.css(a, "display")) ||
                            (a.getClientRects().length &&
                                a.getBoundingClientRect().width)
                            ? $a(a, b, d)
                            : ea(a, Sa, function () {
                                  return $a(a, b, d);
                              });
                },
                set: function (a, c, d) {
                    var e,
                        f = d && Na(a),
                        g =
                            d &&
                            Za(
                                a,
                                b,
                                d,
                                "border-box" === r.css(a, "boxSizing", !1, f),
                                f
                            );
                    return (
                        g &&
                            (e = ba.exec(c)) &&
                            "px" !== (e[3] || "px") &&
                            ((a.style[b] = c), (c = r.css(a, b))),
                        Ya(a, c, g)
                    );
                },
            };
        }),
        (r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function (a, b) {
            if (b)
                return (
                    (parseFloat(Oa(a, "marginLeft")) ||
                        a.getBoundingClientRect().left -
                            ea(a, { marginLeft: 0 }, function () {
                                return a.getBoundingClientRect().left;
                            })) + "px"
                );
        })),
        r.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
            (r.cssHooks[a + b] = {
                expand: function (c) {
                    for (
                        var d = 0,
                            e = {},
                            f = "string" == typeof c ? c.split(" ") : [c];
                        d < 4;
                        d++
                    )
                        e[a + ca[d] + b] = f[d] || f[d - 2] || f[0];
                    return e;
                },
            }),
                La.test(a) || (r.cssHooks[a + b].set = Ya);
        }),
        r.fn.extend({
            css: function (a, b) {
                return T(
                    this,
                    function (a, b, c) {
                        var d,
                            e,
                            f = {},
                            g = 0;
                        if (Array.isArray(b)) {
                            for (d = Na(a), e = b.length; g < e; g++)
                                f[b[g]] = r.css(a, b[g], !1, d);
                            return f;
                        }
                        return void 0 !== c ? r.style(a, b, c) : r.css(a, b);
                    },
                    a,
                    b,
                    arguments.length > 1
                );
            },
        });
    function _a(a, b, c, d, e) {
        return new _a.prototype.init(a, b, c, d, e);
    }
    (r.Tween = _a),
        (_a.prototype = {
            constructor: _a,
            init: function (a, b, c, d, e, f) {
                (this.elem = a),
                    (this.prop = c),
                    (this.easing = e || r.easing._default),
                    (this.options = b),
                    (this.start = this.now = this.cur()),
                    (this.end = d),
                    (this.unit = f || (r.cssNumber[c] ? "" : "px"));
            },
            cur: function () {
                var a = _a.propHooks[this.prop];
                return a && a.get
                    ? a.get(this)
                    : _a.propHooks._default.get(this);
            },
            run: function (a) {
                var b,
                    c = _a.propHooks[this.prop];
                return (
                    this.options.duration
                        ? (this.pos = b =
                              r.easing[this.easing](
                                  a,
                                  this.options.duration * a,
                                  0,
                                  1,
                                  this.options.duration
                              ))
                        : (this.pos = b = a),
                    (this.now = (this.end - this.start) * b + this.start),
                    this.options.step &&
                        this.options.step.call(this.elem, this.now, this),
                    c && c.set ? c.set(this) : _a.propHooks._default.set(this),
                    this
                );
            },
        }),
        (_a.prototype.init.prototype = _a.prototype),
        (_a.propHooks = {
            _default: {
                get: function (a) {
                    var b;
                    return 1 !== a.elem.nodeType ||
                        (null != a.elem[a.prop] && null == a.elem.style[a.prop])
                        ? a.elem[a.prop]
                        : ((b = r.css(a.elem, a.prop, "")),
                          b && "auto" !== b ? b : 0);
                },
                set: function (a) {
                    r.fx.step[a.prop]
                        ? r.fx.step[a.prop](a)
                        : 1 !== a.elem.nodeType ||
                          (null == a.elem.style[r.cssProps[a.prop]] &&
                              !r.cssHooks[a.prop])
                        ? (a.elem[a.prop] = a.now)
                        : r.style(a.elem, a.prop, a.now + a.unit);
                },
            },
        }),
        (_a.propHooks.scrollTop = _a.propHooks.scrollLeft =
            {
                set: function (a) {
                    a.elem.nodeType &&
                        a.elem.parentNode &&
                        (a.elem[a.prop] = a.now);
                },
            }),
        (r.easing = {
            linear: function (a) {
                return a;
            },
            swing: function (a) {
                return 0.5 - Math.cos(a * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (r.fx = _a.prototype.init),
        (r.fx.step = {});
    var ab,
        bb,
        cb = /^(?:toggle|show|hide)$/,
        db = /queueHooks$/;
    function eb() {
        bb &&
            (d.hidden === !1 && a.requestAnimationFrame
                ? a.requestAnimationFrame(eb)
                : a.setTimeout(eb, r.fx.interval),
            r.fx.tick());
    }
    function fb() {
        return (
            a.setTimeout(function () {
                ab = void 0;
            }),
            (ab = r.now())
        );
    }
    function gb(a, b) {
        var c,
            d = 0,
            e = { height: a };
        for (b = b ? 1 : 0; d < 4; d += 2 - b)
            (c = ca[d]), (e["margin" + c] = e["padding" + c] = a);
        return b && (e.opacity = e.width = a), e;
    }
    function hb(a, b, c) {
        for (
            var d,
                e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]),
                f = 0,
                g = e.length;
            f < g;
            f++
        )
            if ((d = e[f].call(c, b, a))) return d;
    }
    function ib(a, b, c) {
        var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l = "width" in b || "height" in b,
            m = this,
            n = {},
            o = a.style,
            p = a.nodeType && da(a),
            q = W.get(a, "fxshow");
        c.queue ||
            ((g = r._queueHooks(a, "fx")),
            null == g.unqueued &&
                ((g.unqueued = 0),
                (h = g.empty.fire),
                (g.empty.fire = function () {
                    g.unqueued || h();
                })),
            g.unqueued++,
            m.always(function () {
                m.always(function () {
                    g.unqueued--, r.queue(a, "fx").length || g.empty.fire();
                });
            }));
        for (d in b)
            if (((e = b[d]), cb.test(e))) {
                if (
                    (delete b[d],
                    (f = f || "toggle" === e),
                    e === (p ? "hide" : "show"))
                ) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0;
                }
                n[d] = (q && q[d]) || r.style(a, d);
            }
        if (((i = !r.isEmptyObject(b)), i || !r.isEmptyObject(n))) {
            l &&
                1 === a.nodeType &&
                ((c.overflow = [o.overflow, o.overflowX, o.overflowY]),
                (j = q && q.display),
                null == j && (j = W.get(a, "display")),
                (k = r.css(a, "display")),
                "none" === k &&
                    (j
                        ? (k = j)
                        : (ia([a], !0),
                          (j = a.style.display || j),
                          (k = r.css(a, "display")),
                          ia([a]))),
                ("inline" === k || ("inline-block" === k && null != j)) &&
                    "none" === r.css(a, "float") &&
                    (i ||
                        (m.done(function () {
                            o.display = j;
                        }),
                        null == j &&
                            ((k = o.display), (j = "none" === k ? "" : k))),
                    (o.display = "inline-block"))),
                c.overflow &&
                    ((o.overflow = "hidden"),
                    m.always(function () {
                        (o.overflow = c.overflow[0]),
                            (o.overflowX = c.overflow[1]),
                            (o.overflowY = c.overflow[2]);
                    })),
                (i = !1);
            for (d in n)
                i ||
                    (q
                        ? "hidden" in q && (p = q.hidden)
                        : (q = W.access(a, "fxshow", { display: j })),
                    f && (q.hidden = !p),
                    p && ia([a], !0),
                    m.done(function () {
                        p || ia([a]), W.remove(a, "fxshow");
                        for (d in n) r.style(a, d, n[d]);
                    })),
                    (i = hb(p ? q[d] : 0, d, m)),
                    d in q ||
                        ((q[d] = i.start),
                        p && ((i.end = i.start), (i.start = 0)));
        }
    }
    function jb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (
                ((d = r.camelCase(c)),
                (e = b[d]),
                (f = a[c]),
                Array.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
                c !== d && ((a[d] = f), delete a[c]),
                (g = r.cssHooks[d]),
                g && "expand" in g)
            ) {
                (f = g.expand(f)), delete a[d];
                for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
            } else b[d] = e;
    }
    function kb(a, b, c) {
        var d,
            e,
            f = 0,
            g = kb.prefilters.length,
            h = r.Deferred().always(function () {
                delete i.elem;
            }),
            i = function () {
                if (e) return !1;
                for (
                    var b = ab || fb(),
                        c = Math.max(0, j.startTime + j.duration - b),
                        d = c / j.duration || 0,
                        f = 1 - d,
                        g = 0,
                        i = j.tweens.length;
                    g < i;
                    g++
                )
                    j.tweens[g].run(f);
                return (
                    h.notifyWith(a, [j, f, c]),
                    f < 1 && i
                        ? c
                        : (i || h.notifyWith(a, [j, 1, 0]),
                          h.resolveWith(a, [j]),
                          !1)
                );
            },
            j = h.promise({
                elem: a,
                props: r.extend({}, b),
                opts: r.extend(
                    !0,
                    { specialEasing: {}, easing: r.easing._default },
                    c
                ),
                originalProperties: b,
                originalOptions: c,
                startTime: ab || fb(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                    var d = r.Tween(
                        a,
                        j.opts,
                        b,
                        c,
                        j.opts.specialEasing[b] || j.opts.easing
                    );
                    return j.tweens.push(d), d;
                },
                stop: function (b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; c < d; c++) j.tweens[c].run(1);
                    return (
                        b
                            ? (h.notifyWith(a, [j, 1, 0]),
                              h.resolveWith(a, [j, b]))
                            : h.rejectWith(a, [j, b]),
                        this
                    );
                },
            }),
            k = j.props;
        for (jb(k, j.opts.specialEasing); f < g; f++)
            if ((d = kb.prefilters[f].call(j, a, k, j.opts)))
                return (
                    r.isFunction(d.stop) &&
                        (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(
                            d.stop,
                            d
                        )),
                    d
                );
        return (
            r.map(k, hb, j),
            r.isFunction(j.opts.start) && j.opts.start.call(a, j),
            j
                .progress(j.opts.progress)
                .done(j.opts.done, j.opts.complete)
                .fail(j.opts.fail)
                .always(j.opts.always),
            r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
            j
        );
    }
    (r.Animation = r.extend(kb, {
        tweeners: {
            "*": [
                function (a, b) {
                    var c = this.createTween(a, b);
                    return fa(c.elem, a, ba.exec(b), c), c;
                },
            ],
        },
        tweener: function (a, b) {
            r.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.match(L));
            for (var c, d = 0, e = a.length; d < e; d++)
                (c = a[d]),
                    (kb.tweeners[c] = kb.tweeners[c] || []),
                    kb.tweeners[c].unshift(b);
        },
        prefilters: [ib],
        prefilter: function (a, b) {
            b ? kb.prefilters.unshift(a) : kb.prefilters.push(a);
        },
    })),
        (r.speed = function (a, b, c) {
            var d =
                a && "object" == typeof a
                    ? r.extend({}, a)
                    : {
                          complete: c || (!c && b) || (r.isFunction(a) && a),
                          duration: a,
                          easing: (c && b) || (b && !r.isFunction(b) && b),
                      };
            return (
                r.fx.off
                    ? (d.duration = 0)
                    : "number" != typeof d.duration &&
                      (d.duration in r.fx.speeds
                          ? (d.duration = r.fx.speeds[d.duration])
                          : (d.duration = r.fx.speeds._default)),
                (null != d.queue && d.queue !== !0) || (d.queue = "fx"),
                (d.old = d.complete),
                (d.complete = function () {
                    r.isFunction(d.old) && d.old.call(this),
                        d.queue && r.dequeue(this, d.queue);
                }),
                d
            );
        }),
        r.fn.extend({
            fadeTo: function (a, b, c, d) {
                return this.filter(da)
                    .css("opacity", 0)
                    .show()
                    .end()
                    .animate({ opacity: b }, a, c, d);
            },
            animate: function (a, b, c, d) {
                var e = r.isEmptyObject(a),
                    f = r.speed(b, c, d),
                    g = function () {
                        var b = kb(this, r.extend({}, a), f);
                        (e || W.get(this, "finish")) && b.stop(!0);
                    };
                return (
                    (g.finish = g),
                    e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
                );
            },
            stop: function (a, b, c) {
                var d = function (a) {
                    var b = a.stop;
                    delete a.stop, b(c);
                };
                return (
                    "string" != typeof a && ((c = b), (b = a), (a = void 0)),
                    b && a !== !1 && this.queue(a || "fx", []),
                    this.each(function () {
                        var b = !0,
                            e = null != a && a + "queueHooks",
                            f = r.timers,
                            g = W.get(this);
                        if (e) g[e] && g[e].stop && d(g[e]);
                        else
                            for (e in g)
                                g[e] && g[e].stop && db.test(e) && d(g[e]);
                        for (e = f.length; e--; )
                            f[e].elem !== this ||
                                (null != a && f[e].queue !== a) ||
                                (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
                        (!b && c) || r.dequeue(this, a);
                    })
                );
            },
            finish: function (a) {
                return (
                    a !== !1 && (a = a || "fx"),
                    this.each(function () {
                        var b,
                            c = W.get(this),
                            d = c[a + "queue"],
                            e = c[a + "queueHooks"],
                            f = r.timers,
                            g = d ? d.length : 0;
                        for (
                            c.finish = !0,
                                r.queue(this, a, []),
                                e && e.stop && e.stop.call(this, !0),
                                b = f.length;
                            b--;

                        )
                            f[b].elem === this &&
                                f[b].queue === a &&
                                (f[b].anim.stop(!0), f.splice(b, 1));
                        for (b = 0; b < g; b++)
                            d[b] && d[b].finish && d[b].finish.call(this);
                        delete c.finish;
                    })
                );
            },
        }),
        r.each(["toggle", "show", "hide"], function (a, b) {
            var c = r.fn[b];
            r.fn[b] = function (a, d, e) {
                return null == a || "boolean" == typeof a
                    ? c.apply(this, arguments)
                    : this.animate(gb(b, !0), a, d, e);
            };
        }),
        r.each(
            {
                slideDown: gb("show"),
                slideUp: gb("hide"),
                slideToggle: gb("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
            },
            function (a, b) {
                r.fn[a] = function (a, c, d) {
                    return this.animate(b, a, c, d);
                };
            }
        ),
        (r.timers = []),
        (r.fx.tick = function () {
            var a,
                b = 0,
                c = r.timers;
            for (ab = r.now(); b < c.length; b++)
                (a = c[b]), a() || c[b] !== a || c.splice(b--, 1);
            c.length || r.fx.stop(), (ab = void 0);
        }),
        (r.fx.timer = function (a) {
            r.timers.push(a), r.fx.start();
        }),
        (r.fx.interval = 13),
        (r.fx.start = function () {
            bb || ((bb = !0), eb());
        }),
        (r.fx.stop = function () {
            bb = null;
        }),
        (r.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (r.fn.delay = function (b, c) {
            return (
                (b = r.fx ? r.fx.speeds[b] || b : b),
                (c = c || "fx"),
                this.queue(c, function (c, d) {
                    var e = a.setTimeout(c, b);
                    d.stop = function () {
                        a.clearTimeout(e);
                    };
                })
            );
        }),
        (function () {
            var a = d.createElement("input"),
                b = d.createElement("select"),
                c = b.appendChild(d.createElement("option"));
            (a.type = "checkbox"),
                (o.checkOn = "" !== a.value),
                (o.optSelected = c.selected),
                (a = d.createElement("input")),
                (a.value = "t"),
                (a.type = "radio"),
                (o.radioValue = "t" === a.value);
        })();
    var lb,
        mb = r.expr.attrHandle;
    r.fn.extend({
        attr: function (a, b) {
            return T(this, r.attr, a, b, arguments.length > 1);
        },
        removeAttr: function (a) {
            return this.each(function () {
                r.removeAttr(this, a);
            });
        },
    }),
        r.extend({
            attr: function (a, b, c) {
                var d,
                    e,
                    f = a.nodeType;
                if (3 !== f && 8 !== f && 2 !== f)
                    return "undefined" == typeof a.getAttribute
                        ? r.prop(a, b, c)
                        : ((1 === f && r.isXMLDoc(a)) ||
                              (e =
                                  r.attrHooks[b.toLowerCase()] ||
                                  (r.expr.match.bool.test(b) ? lb : void 0)),
                          void 0 !== c
                              ? null === c
                                  ? void r.removeAttr(a, b)
                                  : e &&
                                    "set" in e &&
                                    void 0 !== (d = e.set(a, c, b))
                                  ? d
                                  : (a.setAttribute(b, c + ""), c)
                              : e && "get" in e && null !== (d = e.get(a, b))
                              ? d
                              : ((d = r.find.attr(a, b)),
                                null == d ? void 0 : d));
            },
            attrHooks: {
                type: {
                    set: function (a, b) {
                        if (!o.radioValue && "radio" === b && B(a, "input")) {
                            var c = a.value;
                            return (
                                a.setAttribute("type", b), c && (a.value = c), b
                            );
                        }
                    },
                },
            },
            removeAttr: function (a, b) {
                var c,
                    d = 0,
                    e = b && b.match(L);
                if (e && 1 === a.nodeType)
                    while ((c = e[d++])) a.removeAttribute(c);
            },
        }),
        (lb = {
            set: function (a, b, c) {
                return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c;
            },
        }),
        r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
            var c = mb[b] || r.find.attr;
            mb[b] = function (a, b, d) {
                var e,
                    f,
                    g = b.toLowerCase();
                return (
                    d ||
                        ((f = mb[g]),
                        (mb[g] = e),
                        (e = null != c(a, b, d) ? g : null),
                        (mb[g] = f)),
                    e
                );
            };
        });
    var nb = /^(?:input|select|textarea|button)$/i,
        ob = /^(?:a|area)$/i;
    r.fn.extend({
        prop: function (a, b) {
            return T(this, r.prop, a, b, arguments.length > 1);
        },
        removeProp: function (a) {
            return this.each(function () {
                delete this[r.propFix[a] || a];
            });
        },
    }),
        r.extend({
            prop: function (a, b, c) {
                var d,
                    e,
                    f = a.nodeType;
                if (3 !== f && 8 !== f && 2 !== f)
                    return (
                        (1 === f && r.isXMLDoc(a)) ||
                            ((b = r.propFix[b] || b), (e = r.propHooks[b])),
                        void 0 !== c
                            ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                                ? d
                                : (a[b] = c)
                            : e && "get" in e && null !== (d = e.get(a, b))
                            ? d
                            : a[b]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (a) {
                        var b = r.find.attr(a, "tabindex");
                        return b
                            ? parseInt(b, 10)
                            : nb.test(a.nodeName) ||
                              (ob.test(a.nodeName) && a.href)
                            ? 0
                            : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        o.optSelected ||
            (r.propHooks.selected = {
                get: function (a) {
                    var b = a.parentNode;
                    return (
                        b && b.parentNode && b.parentNode.selectedIndex, null
                    );
                },
                set: function (a) {
                    var b = a.parentNode;
                    b &&
                        (b.selectedIndex,
                        b.parentNode && b.parentNode.selectedIndex);
                },
            }),
        r.each(
            [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
            ],
            function () {
                r.propFix[this.toLowerCase()] = this;
            }
        );
    function pb(a) {
        var b = a.match(L) || [];
        return b.join(" ");
    }
    function qb(a) {
        return (a.getAttribute && a.getAttribute("class")) || "";
    }
    r.fn.extend({
        addClass: function (a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h,
                i = 0;
            if (r.isFunction(a))
                return this.each(function (b) {
                    r(this).addClass(a.call(this, b, qb(this)));
                });
            if ("string" == typeof a && a) {
                b = a.match(L) || [];
                while ((c = this[i++]))
                    if (
                        ((e = qb(c)),
                        (d = 1 === c.nodeType && " " + pb(e) + " "))
                    ) {
                        g = 0;
                        while ((f = b[g++]))
                            d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        (h = pb(d)), e !== h && c.setAttribute("class", h);
                    }
            }
            return this;
        },
        removeClass: function (a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h,
                i = 0;
            if (r.isFunction(a))
                return this.each(function (b) {
                    r(this).removeClass(a.call(this, b, qb(this)));
                });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(L) || [];
                while ((c = this[i++]))
                    if (
                        ((e = qb(c)),
                        (d = 1 === c.nodeType && " " + pb(e) + " "))
                    ) {
                        g = 0;
                        while ((f = b[g++]))
                            while (d.indexOf(" " + f + " ") > -1)
                                d = d.replace(" " + f + " ", " ");
                        (h = pb(d)), e !== h && c.setAttribute("class", h);
                    }
            }
            return this;
        },
        toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c
                ? b
                    ? this.addClass(a)
                    : this.removeClass(a)
                : r.isFunction(a)
                ? this.each(function (c) {
                      r(this).toggleClass(a.call(this, c, qb(this), b), b);
                  })
                : this.each(function () {
                      var b, d, e, f;
                      if ("string" === c) {
                          (d = 0), (e = r(this)), (f = a.match(L) || []);
                          while ((b = f[d++]))
                              e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                      } else (void 0 !== a && "boolean" !== c) || ((b = qb(this)), b && W.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W.get(this, "__className__") || ""));
                  });
        },
        hasClass: function (a) {
            var b,
                c,
                d = 0;
            b = " " + a + " ";
            while ((c = this[d++]))
                if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1)
                    return !0;
            return !1;
        },
    });
    var rb = /\r/g;
    r.fn.extend({
        val: function (a) {
            var b,
                c,
                d,
                e = this[0];
            {
                if (arguments.length)
                    return (
                        (d = r.isFunction(a)),
                        this.each(function (c) {
                            var e;
                            1 === this.nodeType &&
                                ((e = d ? a.call(this, c, r(this).val()) : a),
                                null == e
                                    ? (e = "")
                                    : "number" == typeof e
                                    ? (e += "")
                                    : Array.isArray(e) &&
                                      (e = r.map(e, function (a) {
                                          return null == a ? "" : a + "";
                                      })),
                                (b =
                                    r.valHooks[this.type] ||
                                    r.valHooks[this.nodeName.toLowerCase()]),
                                (b &&
                                    "set" in b &&
                                    void 0 !== b.set(this, e, "value")) ||
                                    (this.value = e));
                        })
                    );
                if (e)
                    return (
                        (b =
                            r.valHooks[e.type] ||
                            r.valHooks[e.nodeName.toLowerCase()]),
                        b && "get" in b && void 0 !== (c = b.get(e, "value"))
                            ? c
                            : ((c = e.value),
                              "string" == typeof c
                                  ? c.replace(rb, "")
                                  : null == c
                                  ? ""
                                  : c)
                    );
            }
        },
    }),
        r.extend({
            valHooks: {
                option: {
                    get: function (a) {
                        var b = r.find.attr(a, "value");
                        return null != b ? b : pb(r.text(a));
                    },
                },
                select: {
                    get: function (a) {
                        var b,
                            c,
                            d,
                            e = a.options,
                            f = a.selectedIndex,
                            g = "select-one" === a.type,
                            h = g ? null : [],
                            i = g ? f + 1 : e.length;
                        for (d = f < 0 ? i : g ? f : 0; d < i; d++)
                            if (
                                ((c = e[d]),
                                (c.selected || d === f) &&
                                    !c.disabled &&
                                    (!c.parentNode.disabled ||
                                        !B(c.parentNode, "optgroup")))
                            ) {
                                if (((b = r(c).val()), g)) return b;
                                h.push(b);
                            }
                        return h;
                    },
                    set: function (a, b) {
                        var c,
                            d,
                            e = a.options,
                            f = r.makeArray(b),
                            g = e.length;
                        while (g--)
                            (d = e[g]),
                                (d.selected =
                                    r.inArray(r.valHooks.option.get(d), f) >
                                    -1) && (c = !0);
                        return c || (a.selectedIndex = -1), f;
                    },
                },
            },
        }),
        r.each(["radio", "checkbox"], function () {
            (r.valHooks[this] = {
                set: function (a, b) {
                    if (Array.isArray(b))
                        return (a.checked = r.inArray(r(a).val(), b) > -1);
                },
            }),
                o.checkOn ||
                    (r.valHooks[this].get = function (a) {
                        return null === a.getAttribute("value")
                            ? "on"
                            : a.value;
                    });
        });
    var sb = /^(?:focusinfocus|focusoutblur)$/;
    r.extend(r.event, {
        trigger: function (b, c, e, f) {
            var g,
                h,
                i,
                j,
                k,
                m,
                n,
                o = [e || d],
                p = l.call(b, "type") ? b.type : b,
                q = l.call(b, "namespace") ? b.namespace.split(".") : [];
            if (
                ((h = i = e = e || d),
                3 !== e.nodeType &&
                    8 !== e.nodeType &&
                    !sb.test(p + r.event.triggered) &&
                    (p.indexOf(".") > -1 &&
                        ((q = p.split(".")), (p = q.shift()), q.sort()),
                    (k = p.indexOf(":") < 0 && "on" + p),
                    (b = b[r.expando]
                        ? b
                        : new r.Event(p, "object" == typeof b && b)),
                    (b.isTrigger = f ? 2 : 3),
                    (b.namespace = q.join(".")),
                    (b.rnamespace = b.namespace
                        ? new RegExp(
                              "(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          )
                        : null),
                    (b.result = void 0),
                    b.target || (b.target = e),
                    (c = null == c ? [b] : r.makeArray(c, [b])),
                    (n = r.event.special[p] || {}),
                    f || !n.trigger || n.trigger.apply(e, c) !== !1))
            ) {
                if (!f && !n.noBubble && !r.isWindow(e)) {
                    for (
                        j = n.delegateType || p,
                            sb.test(j + p) || (h = h.parentNode);
                        h;
                        h = h.parentNode
                    )
                        o.push(h), (i = h);
                    i === (e.ownerDocument || d) &&
                        o.push(i.defaultView || i.parentWindow || a);
                }
                g = 0;
                while ((h = o[g++]) && !b.isPropagationStopped())
                    (b.type = g > 1 ? j : n.bindType || p),
                        (m =
                            (W.get(h, "events") || {})[b.type] &&
                            W.get(h, "handle")),
                        m && m.apply(h, c),
                        (m = k && h[k]),
                        m &&
                            m.apply &&
                            U(h) &&
                            ((b.result = m.apply(h, c)),
                            b.result === !1 && b.preventDefault());
                return (
                    (b.type = p),
                    f ||
                        b.isDefaultPrevented() ||
                        (n._default && n._default.apply(o.pop(), c) !== !1) ||
                        !U(e) ||
                        (k &&
                            r.isFunction(e[p]) &&
                            !r.isWindow(e) &&
                            ((i = e[k]),
                            i && (e[k] = null),
                            (r.event.triggered = p),
                            e[p](),
                            (r.event.triggered = void 0),
                            i && (e[k] = i))),
                    b.result
                );
            }
        },
        simulate: function (a, b, c) {
            var d = r.extend(new r.Event(), c, { type: a, isSimulated: !0 });
            r.event.trigger(d, null, b);
        },
    }),
        r.fn.extend({
            trigger: function (a, b) {
                return this.each(function () {
                    r.event.trigger(a, b, this);
                });
            },
            triggerHandler: function (a, b) {
                var c = this[0];
                if (c) return r.event.trigger(a, b, c, !0);
            },
        }),
        r.each(
            "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
            ),
            function (a, b) {
                r.fn[b] = function (a, c) {
                    return arguments.length > 0
                        ? this.on(b, null, a, c)
                        : this.trigger(b);
                };
            }
        ),
        r.fn.extend({
            hover: function (a, b) {
                return this.mouseenter(a).mouseleave(b || a);
            },
        }),
        (o.focusin = "onfocusin" in a),
        o.focusin ||
            r.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
                var c = function (a) {
                    r.event.simulate(b, a.target, r.event.fix(a));
                };
                r.event.special[b] = {
                    setup: function () {
                        var d = this.ownerDocument || this,
                            e = W.access(d, b);
                        e || d.addEventListener(a, c, !0),
                            W.access(d, b, (e || 0) + 1);
                    },
                    teardown: function () {
                        var d = this.ownerDocument || this,
                            e = W.access(d, b) - 1;
                        e
                            ? W.access(d, b, e)
                            : (d.removeEventListener(a, c, !0), W.remove(d, b));
                    },
                };
            });
    var tb = a.location,
        ub = r.now(),
        vb = /\?/;
    r.parseXML = function (b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = new a.DOMParser().parseFromString(b, "text/xml");
        } catch (d) {
            c = void 0;
        }
        return (
            (c && !c.getElementsByTagName("parsererror").length) ||
                r.error("Invalid XML: " + b),
            c
        );
    };
    var wb = /\[\]$/,
        xb = /\r?\n/g,
        yb = /^(?:submit|button|image|reset|file)$/i,
        zb = /^(?:input|select|textarea|keygen)/i;
    function Ab(a, b, c, d) {
        var e;
        if (Array.isArray(b))
            r.each(b, function (b, e) {
                c || wb.test(a)
                    ? d(a, e)
                    : Ab(
                          a +
                              "[" +
                              ("object" == typeof e && null != e ? b : "") +
                              "]",
                          e,
                          c,
                          d
                      );
            });
        else if (c || "object" !== r.type(b)) d(a, b);
        else for (e in b) Ab(a + "[" + e + "]", b[e], c, d);
    }
    (r.param = function (a, b) {
        var c,
            d = [],
            e = function (a, b) {
                var c = r.isFunction(b) ? b() : b;
                d[d.length] =
                    encodeURIComponent(a) +
                    "=" +
                    encodeURIComponent(null == c ? "" : c);
            };
        if (Array.isArray(a) || (a.jquery && !r.isPlainObject(a)))
            r.each(a, function () {
                e(this.name, this.value);
            });
        else for (c in a) Ab(c, a[c], b, e);
        return d.join("&");
    }),
        r.fn.extend({
            serialize: function () {
                return r.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var a = r.prop(this, "elements");
                    return a ? r.makeArray(a) : this;
                })
                    .filter(function () {
                        var a = this.type;
                        return (
                            this.name &&
                            !r(this).is(":disabled") &&
                            zb.test(this.nodeName) &&
                            !yb.test(a) &&
                            (this.checked || !ja.test(a))
                        );
                    })
                    .map(function (a, b) {
                        var c = r(this).val();
                        return null == c
                            ? null
                            : Array.isArray(c)
                            ? r.map(c, function (a) {
                                  return {
                                      name: b.name,
                                      value: a.replace(xb, "\r\n"),
                                  };
                              })
                            : { name: b.name, value: c.replace(xb, "\r\n") };
                    })
                    .get();
            },
        });
    var Bb = /%20/g,
        Cb = /#.*$/,
        Db = /([?&])_=[^&]*/,
        Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Gb = /^(?:GET|HEAD)$/,
        Hb = /^\/\//,
        Ib = {},
        Jb = {},
        Kb = "*/".concat("*"),
        Lb = d.createElement("a");
    Lb.href = tb.href;
    function Mb(a) {
        return function (b, c) {
            "string" != typeof b && ((c = b), (b = "*"));
            var d,
                e = 0,
                f = b.toLowerCase().match(L) || [];
            if (r.isFunction(c))
                while ((d = f[e++]))
                    "+" === d[0]
                        ? ((d = d.slice(1) || "*"),
                          (a[d] = a[d] || []).unshift(c))
                        : (a[d] = a[d] || []).push(c);
        };
    }
    function Nb(a, b, c, d) {
        var e = {},
            f = a === Jb;
        function g(h) {
            var i;
            return (
                (e[h] = !0),
                r.each(a[h] || [], function (a, h) {
                    var j = h(b, c, d);
                    return "string" != typeof j || f || e[j]
                        ? f
                            ? !(i = j)
                            : void 0
                        : (b.dataTypes.unshift(j), g(j), !1);
                }),
                i
            );
        }
        return g(b.dataTypes[0]) || (!e["*"] && g("*"));
    }
    function Ob(a, b) {
        var c,
            d,
            e = r.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && r.extend(!0, a, d), a;
    }
    function Pb(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0])
            i.shift(),
                void 0 === d &&
                    (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break;
                }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break;
                }
                g || (g = e);
            }
            f = f || g;
        }
        if (f) return f !== i[0] && i.unshift(f), c[f];
    }
    function Qb(a, b, c, d) {
        var e,
            f,
            g,
            h,
            i,
            j = {},
            k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (
                (a.responseFields[f] && (c[a.responseFields[f]] = b),
                !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
                (i = f),
                (f = k.shift()))
            )
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
                    if (((g = j[i + " " + f] || j["* " + f]), !g))
                        for (e in j)
                            if (
                                ((h = e.split(" ")),
                                h[1] === f &&
                                    (g = j[i + " " + h[0]] || j["* " + h[0]]))
                            ) {
                                g === !0
                                    ? (g = j[e])
                                    : j[e] !== !0 &&
                                      ((f = h[0]), k.unshift(h[1]));
                                break;
                            }
                    if (g !== !0)
                        if (g && a["throws"]) b = g(b);
                        else
                            try {
                                b = g(b);
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: g
                                        ? l
                                        : "No conversion from " +
                                          i +
                                          " to " +
                                          f,
                                };
                            }
                }
        return { state: "success", data: b };
    }
    r.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: tb.href,
            type: "GET",
            isLocal: Fb.test(tb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Kb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON",
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": r.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (a, b) {
            return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a);
        },
        ajaxPrefilter: Mb(Ib),
        ajaxTransport: Mb(Jb),
        ajax: function (b, c) {
            "object" == typeof b && ((c = b), (b = void 0)), (c = c || {});
            var e,
                f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o = r.ajaxSetup({}, c),
                p = o.context || o,
                q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
                s = r.Deferred(),
                t = r.Callbacks("once memory"),
                u = o.statusCode || {},
                v = {},
                w = {},
                x = "canceled",
                y = {
                    readyState: 0,
                    getResponseHeader: function (a) {
                        var b;
                        if (k) {
                            if (!h) {
                                h = {};
                                while ((b = Eb.exec(g)))
                                    h[b[1].toLowerCase()] = b[2];
                            }
                            b = h[a.toLowerCase()];
                        }
                        return null == b ? null : b;
                    },
                    getAllResponseHeaders: function () {
                        return k ? g : null;
                    },
                    setRequestHeader: function (a, b) {
                        return (
                            null == k &&
                                ((a = w[a.toLowerCase()] =
                                    w[a.toLowerCase()] || a),
                                (v[a] = b)),
                            this
                        );
                    },
                    overrideMimeType: function (a) {
                        return null == k && (o.mimeType = a), this;
                    },
                    statusCode: function (a) {
                        var b;
                        if (a)
                            if (k) y.always(a[y.status]);
                            else for (b in a) u[b] = [u[b], a[b]];
                        return this;
                    },
                    abort: function (a) {
                        var b = a || x;
                        return e && e.abort(b), A(0, b), this;
                    },
                };
            if (
                (s.promise(y),
                (o.url = ((b || o.url || tb.href) + "").replace(
                    Hb,
                    tb.protocol + "//"
                )),
                (o.type = c.method || c.type || o.method || o.type),
                (o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [
                    "",
                ]),
                null == o.crossDomain)
            ) {
                j = d.createElement("a");
                try {
                    (j.href = o.url),
                        (j.href = j.href),
                        (o.crossDomain =
                            Lb.protocol + "//" + Lb.host !=
                            j.protocol + "//" + j.host);
                } catch (z) {
                    o.crossDomain = !0;
                }
            }
            if (
                (o.data &&
                    o.processData &&
                    "string" != typeof o.data &&
                    (o.data = r.param(o.data, o.traditional)),
                Nb(Ib, o, c, y),
                k)
            )
                return y;
            (l = r.event && o.global),
                l && 0 === r.active++ && r.event.trigger("ajaxStart"),
                (o.type = o.type.toUpperCase()),
                (o.hasContent = !Gb.test(o.type)),
                (f = o.url.replace(Cb, "")),
                o.hasContent
                    ? o.data &&
                      o.processData &&
                      0 ===
                          (o.contentType || "").indexOf(
                              "application/x-www-form-urlencoded"
                          ) &&
                      (o.data = o.data.replace(Bb, "+"))
                    : ((n = o.url.slice(f.length)),
                      o.data &&
                          ((f += (vb.test(f) ? "&" : "?") + o.data),
                          delete o.data),
                      o.cache === !1 &&
                          ((f = f.replace(Db, "$1")),
                          (n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n)),
                      (o.url = f + n)),
                o.ifModified &&
                    (r.lastModified[f] &&
                        y.setRequestHeader(
                            "If-Modified-Since",
                            r.lastModified[f]
                        ),
                    r.etag[f] &&
                        y.setRequestHeader("If-None-Match", r.etag[f])),
                ((o.data && o.hasContent && o.contentType !== !1) ||
                    c.contentType) &&
                    y.setRequestHeader("Content-Type", o.contentType),
                y.setRequestHeader(
                    "Accept",
                    o.dataTypes[0] && o.accepts[o.dataTypes[0]]
                        ? o.accepts[o.dataTypes[0]] +
                              ("*" !== o.dataTypes[0]
                                  ? ", " + Kb + "; q=0.01"
                                  : "")
                        : o.accepts["*"]
                );
            for (m in o.headers) y.setRequestHeader(m, o.headers[m]);
            if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k))
                return y.abort();
            if (
                ((x = "abort"),
                t.add(o.complete),
                y.done(o.success),
                y.fail(o.error),
                (e = Nb(Jb, o, c, y)))
            ) {
                if (((y.readyState = 1), l && q.trigger("ajaxSend", [y, o]), k))
                    return y;
                o.async &&
                    o.timeout > 0 &&
                    (i = a.setTimeout(function () {
                        y.abort("timeout");
                    }, o.timeout));
                try {
                    (k = !1), e.send(v, A);
                } catch (z) {
                    if (k) throw z;
                    A(-1, z);
                }
            } else A(-1, "No Transport");
            function A(b, c, d, h) {
                var j,
                    m,
                    n,
                    v,
                    w,
                    x = c;
                k ||
                    ((k = !0),
                    i && a.clearTimeout(i),
                    (e = void 0),
                    (g = h || ""),
                    (y.readyState = b > 0 ? 4 : 0),
                    (j = (b >= 200 && b < 300) || 304 === b),
                    d && (v = Pb(o, y, d)),
                    (v = Qb(o, v, y, j)),
                    j
                        ? (o.ifModified &&
                              ((w = y.getResponseHeader("Last-Modified")),
                              w && (r.lastModified[f] = w),
                              (w = y.getResponseHeader("etag")),
                              w && (r.etag[f] = w)),
                          204 === b || "HEAD" === o.type
                              ? (x = "nocontent")
                              : 304 === b
                              ? (x = "notmodified")
                              : ((x = v.state),
                                (m = v.data),
                                (n = v.error),
                                (j = !n)))
                        : ((n = x),
                          (!b && x) || ((x = "error"), b < 0 && (b = 0))),
                    (y.status = b),
                    (y.statusText = (c || x) + ""),
                    j
                        ? s.resolveWith(p, [m, x, y])
                        : s.rejectWith(p, [y, x, n]),
                    y.statusCode(u),
                    (u = void 0),
                    l &&
                        q.trigger(j ? "ajaxSuccess" : "ajaxError", [
                            y,
                            o,
                            j ? m : n,
                        ]),
                    t.fireWith(p, [y, x]),
                    l &&
                        (q.trigger("ajaxComplete", [y, o]),
                        --r.active || r.event.trigger("ajaxStop")));
            }
            return y;
        },
        getJSON: function (a, b, c) {
            return r.get(a, b, c, "json");
        },
        getScript: function (a, b) {
            return r.get(a, void 0, b, "script");
        },
    }),
        r.each(["get", "post"], function (a, b) {
            r[b] = function (a, c, d, e) {
                return (
                    r.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
                    r.ajax(
                        r.extend(
                            {
                                url: a,
                                type: b,
                                dataType: e,
                                data: c,
                                success: d,
                            },
                            r.isPlainObject(a) && a
                        )
                    )
                );
            };
        }),
        (r._evalUrl = function (a) {
            return r.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0,
            });
        }),
        r.fn.extend({
            wrapAll: function (a) {
                var b;
                return (
                    this[0] &&
                        (r.isFunction(a) && (a = a.call(this[0])),
                        (b = r(a, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && b.insertBefore(this[0]),
                        b
                            .map(function () {
                                var a = this;
                                while (a.firstElementChild)
                                    a = a.firstElementChild;
                                return a;
                            })
                            .append(this)),
                    this
                );
            },
            wrapInner: function (a) {
                return r.isFunction(a)
                    ? this.each(function (b) {
                          r(this).wrapInner(a.call(this, b));
                      })
                    : this.each(function () {
                          var b = r(this),
                              c = b.contents();
                          c.length ? c.wrapAll(a) : b.append(a);
                      });
            },
            wrap: function (a) {
                var b = r.isFunction(a);
                return this.each(function (c) {
                    r(this).wrapAll(b ? a.call(this, c) : a);
                });
            },
            unwrap: function (a) {
                return (
                    this.parent(a)
                        .not("body")
                        .each(function () {
                            r(this).replaceWith(this.childNodes);
                        }),
                    this
                );
            },
        }),
        (r.expr.pseudos.hidden = function (a) {
            return !r.expr.pseudos.visible(a);
        }),
        (r.expr.pseudos.visible = function (a) {
            return !!(
                a.offsetWidth ||
                a.offsetHeight ||
                a.getClientRects().length
            );
        }),
        (r.ajaxSettings.xhr = function () {
            try {
                return new a.XMLHttpRequest();
            } catch (b) {}
        });
    var Rb = { 0: 200, 1223: 204 },
        Sb = r.ajaxSettings.xhr();
    (o.cors = !!Sb && "withCredentials" in Sb),
        (o.ajax = Sb = !!Sb),
        r.ajaxTransport(function (b) {
            var c, d;
            if (o.cors || (Sb && !b.crossDomain))
                return {
                    send: function (e, f) {
                        var g,
                            h = b.xhr();
                        if (
                            (h.open(
                                b.type,
                                b.url,
                                b.async,
                                b.username,
                                b.password
                            ),
                            b.xhrFields)
                        )
                            for (g in b.xhrFields) h[g] = b.xhrFields[g];
                        b.mimeType &&
                            h.overrideMimeType &&
                            h.overrideMimeType(b.mimeType),
                            b.crossDomain ||
                                e["X-Requested-With"] ||
                                (e["X-Requested-With"] = "XMLHttpRequest");
                        for (g in e) h.setRequestHeader(g, e[g]);
                        (c = function (a) {
                            return function () {
                                c &&
                                    ((c =
                                        d =
                                        h.onload =
                                        h.onerror =
                                        h.onabort =
                                        h.onreadystatechange =
                                            null),
                                    "abort" === a
                                        ? h.abort()
                                        : "error" === a
                                        ? "number" != typeof h.status
                                            ? f(0, "error")
                                            : f(h.status, h.statusText)
                                        : f(
                                              Rb[h.status] || h.status,
                                              h.statusText,
                                              "text" !==
                                                  (h.responseType || "text") ||
                                                  "string" !=
                                                      typeof h.responseText
                                                  ? { binary: h.response }
                                                  : { text: h.responseText },
                                              h.getAllResponseHeaders()
                                          ));
                            };
                        }),
                            (h.onload = c()),
                            (d = h.onerror = c("error")),
                            void 0 !== h.onabort
                                ? (h.onabort = d)
                                : (h.onreadystatechange = function () {
                                      4 === h.readyState &&
                                          a.setTimeout(function () {
                                              c && d();
                                          });
                                  }),
                            (c = c("abort"));
                        try {
                            h.send((b.hasContent && b.data) || null);
                        } catch (i) {
                            if (c) throw i;
                        }
                    },
                    abort: function () {
                        c && c();
                    },
                };
        }),
        r.ajaxPrefilter(function (a) {
            a.crossDomain && (a.contents.script = !1);
        }),
        r.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
            },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (a) {
                    return r.globalEval(a), a;
                },
            },
        }),
        r.ajaxPrefilter("script", function (a) {
            void 0 === a.cache && (a.cache = !1),
                a.crossDomain && (a.type = "GET");
        }),
        r.ajaxTransport("script", function (a) {
            if (a.crossDomain) {
                var b, c;
                return {
                    send: function (e, f) {
                        (b = r("<script>")
                            .prop({ charset: a.scriptCharset, src: a.url })
                            .on(
                                "load error",
                                (c = function (a) {
                                    b.remove(),
                                        (c = null),
                                        a &&
                                            f(
                                                "error" === a.type ? 404 : 200,
                                                a.type
                                            );
                                })
                            )),
                            d.head.appendChild(b[0]);
                    },
                    abort: function () {
                        c && c();
                    },
                };
            }
        });
    var Tb = [],
        Ub = /(=)\?(?=&|$)|\?\?/;
    r.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = Tb.pop() || r.expando + "_" + ub++;
            return (this[a] = !0), a;
        },
    }),
        r.ajaxPrefilter("json jsonp", function (b, c, d) {
            var e,
                f,
                g,
                h =
                    b.jsonp !== !1 &&
                    (Ub.test(b.url)
                        ? "url"
                        : "string" == typeof b.data &&
                          0 ===
                              (b.contentType || "").indexOf(
                                  "application/x-www-form-urlencoded"
                              ) &&
                          Ub.test(b.data) &&
                          "data");
            if (h || "jsonp" === b.dataTypes[0])
                return (
                    (e = b.jsonpCallback =
                        r.isFunction(b.jsonpCallback)
                            ? b.jsonpCallback()
                            : b.jsonpCallback),
                    h
                        ? (b[h] = b[h].replace(Ub, "$1" + e))
                        : b.jsonp !== !1 &&
                          (b.url +=
                              (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
                    (b.converters["script json"] = function () {
                        return g || r.error(e + " was not called"), g[0];
                    }),
                    (b.dataTypes[0] = "json"),
                    (f = a[e]),
                    (a[e] = function () {
                        g = arguments;
                    }),
                    d.always(function () {
                        void 0 === f ? r(a).removeProp(e) : (a[e] = f),
                            b[e] &&
                                ((b.jsonpCallback = c.jsonpCallback),
                                Tb.push(e)),
                            g && r.isFunction(f) && f(g[0]),
                            (g = f = void 0);
                    }),
                    "script"
                );
        }),
        (o.createHTMLDocument = (function () {
            var a = d.implementation.createHTMLDocument("").body;
            return (
                (a.innerHTML = "<form></form><form></form>"),
                2 === a.childNodes.length
            );
        })()),
        (r.parseHTML = function (a, b, c) {
            if ("string" != typeof a) return [];
            "boolean" == typeof b && ((c = b), (b = !1));
            var e, f, g;
            return (
                b ||
                    (o.createHTMLDocument
                        ? ((b = d.implementation.createHTMLDocument("")),
                          (e = b.createElement("base")),
                          (e.href = d.location.href),
                          b.head.appendChild(e))
                        : (b = d)),
                (f = C.exec(a)),
                (g = !c && []),
                f
                    ? [b.createElement(f[1])]
                    : ((f = qa([a], b, g)),
                      g && g.length && r(g).remove(),
                      r.merge([], f.childNodes))
            );
        }),
        (r.fn.load = function (a, b, c) {
            var d,
                e,
                f,
                g = this,
                h = a.indexOf(" ");
            return (
                h > -1 && ((d = pb(a.slice(h))), (a = a.slice(0, h))),
                r.isFunction(b)
                    ? ((c = b), (b = void 0))
                    : b && "object" == typeof b && (e = "POST"),
                g.length > 0 &&
                    r
                        .ajax({
                            url: a,
                            type: e || "GET",
                            dataType: "html",
                            data: b,
                        })
                        .done(function (a) {
                            (f = arguments),
                                g.html(
                                    d
                                        ? r("<div>")
                                              .append(r.parseHTML(a))
                                              .find(d)
                                        : a
                                );
                        })
                        .always(
                            c &&
                                function (a, b) {
                                    g.each(function () {
                                        c.apply(
                                            this,
                                            f || [a.responseText, b, a]
                                        );
                                    });
                                }
                        ),
                this
            );
        }),
        r.each(
            [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
            ],
            function (a, b) {
                r.fn[b] = function (a) {
                    return this.on(b, a);
                };
            }
        ),
        (r.expr.pseudos.animated = function (a) {
            return r.grep(r.timers, function (b) {
                return a === b.elem;
            }).length;
        }),
        (r.offset = {
            setOffset: function (a, b, c) {
                var d,
                    e,
                    f,
                    g,
                    h,
                    i,
                    j,
                    k = r.css(a, "position"),
                    l = r(a),
                    m = {};
                "static" === k && (a.style.position = "relative"),
                    (h = l.offset()),
                    (f = r.css(a, "top")),
                    (i = r.css(a, "left")),
                    (j =
                        ("absolute" === k || "fixed" === k) &&
                        (f + i).indexOf("auto") > -1),
                    j
                        ? ((d = l.position()), (g = d.top), (e = d.left))
                        : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
                    r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))),
                    null != b.top && (m.top = b.top - h.top + g),
                    null != b.left && (m.left = b.left - h.left + e),
                    "using" in b ? b.using.call(a, m) : l.css(m);
            },
        }),
        r.fn.extend({
            offset: function (a) {
                if (arguments.length)
                    return void 0 === a
                        ? this
                        : this.each(function (b) {
                              r.offset.setOffset(this, a, b);
                          });
                var b,
                    c,
                    d,
                    e,
                    f = this[0];
                if (f)
                    return f.getClientRects().length
                        ? ((d = f.getBoundingClientRect()),
                          (b = f.ownerDocument),
                          (c = b.documentElement),
                          (e = b.defaultView),
                          {
                              top: d.top + e.pageYOffset - c.clientTop,
                              left: d.left + e.pageXOffset - c.clientLeft,
                          })
                        : { top: 0, left: 0 };
            },
            position: function () {
                if (this[0]) {
                    var a,
                        b,
                        c = this[0],
                        d = { top: 0, left: 0 };
                    return (
                        "fixed" === r.css(c, "position")
                            ? (b = c.getBoundingClientRect())
                            : ((a = this.offsetParent()),
                              (b = this.offset()),
                              B(a[0], "html") || (d = a.offset()),
                              (d = {
                                  top:
                                      d.top + r.css(a[0], "borderTopWidth", !0),
                                  left:
                                      d.left +
                                      r.css(a[0], "borderLeftWidth", !0),
                              })),
                        {
                            top: b.top - d.top - r.css(c, "marginTop", !0),
                            left: b.left - d.left - r.css(c, "marginLeft", !0),
                        }
                    );
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    var a = this.offsetParent;
                    while (a && "static" === r.css(a, "position"))
                        a = a.offsetParent;
                    return a || ra;
                });
            },
        }),
        r.each(
            { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
            function (a, b) {
                var c = "pageYOffset" === b;
                r.fn[a] = function (d) {
                    return T(
                        this,
                        function (a, d, e) {
                            var f;
                            return (
                                r.isWindow(a)
                                    ? (f = a)
                                    : 9 === a.nodeType && (f = a.defaultView),
                                void 0 === e
                                    ? f
                                        ? f[b]
                                        : a[d]
                                    : void (f
                                          ? f.scrollTo(
                                                c ? f.pageXOffset : e,
                                                c ? e : f.pageYOffset
                                            )
                                          : (a[d] = e))
                            );
                        },
                        a,
                        d,
                        arguments.length
                    );
                };
            }
        ),
        r.each(["top", "left"], function (a, b) {
            r.cssHooks[b] = Pa(o.pixelPosition, function (a, c) {
                if (c)
                    return (
                        (c = Oa(a, b)),
                        Ma.test(c) ? r(a).position()[b] + "px" : c
                    );
            });
        }),
        r.each({ Height: "height", Width: "width" }, function (a, b) {
            r.each(
                { padding: "inner" + a, content: b, "": "outer" + a },
                function (c, d) {
                    r.fn[d] = function (e, f) {
                        var g =
                                arguments.length &&
                                (c || "boolean" != typeof e),
                            h =
                                c ||
                                (e === !0 || f === !0 ? "margin" : "border");
                        return T(
                            this,
                            function (b, c, e) {
                                var f;
                                return r.isWindow(b)
                                    ? 0 === d.indexOf("outer")
                                        ? b["inner" + a]
                                        : b.document.documentElement[
                                              "client" + a
                                          ]
                                    : 9 === b.nodeType
                                    ? ((f = b.documentElement),
                                      Math.max(
                                          b.body["scroll" + a],
                                          f["scroll" + a],
                                          b.body["offset" + a],
                                          f["offset" + a],
                                          f["client" + a]
                                      ))
                                    : void 0 === e
                                    ? r.css(b, c, h)
                                    : r.style(b, c, e, h);
                            },
                            b,
                            g ? e : void 0,
                            g
                        );
                    };
                }
            );
        }),
        r.fn.extend({
            bind: function (a, b, c) {
                return this.on(a, null, b, c);
            },
            unbind: function (a, b) {
                return this.off(a, null, b);
            },
            delegate: function (a, b, c, d) {
                return this.on(b, a, c, d);
            },
            undelegate: function (a, b, c) {
                return 1 === arguments.length
                    ? this.off(a, "**")
                    : this.off(b, a || "**", c);
            },
        }),
        (r.holdReady = function (a) {
            a ? r.readyWait++ : r.ready(!0);
        }),
        (r.isArray = Array.isArray),
        (r.parseJSON = JSON.parse),
        (r.nodeName = B),
        "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return r;
            });
    var Vb = a.jQuery,
        Wb = a.$;
    return (
        (r.noConflict = function (b) {
            return (
                a.$ === r && (a.$ = Wb),
                b && a.jQuery === r && (a.jQuery = Vb),
                r
            );
        }),
        b || (a.jQuery = a.$ = r),
        r
    );
});

(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = t())
        : "function" == typeof define && define.amd
        ? define(t)
        : (e.Popper = t());
})(this, function () {
    "use strict";
    function e(e) {
        return e && "[object Function]" === {}.toString.call(e);
    }
    function t(e, t) {
        if (1 !== e.nodeType) return [];
        var o = e.ownerDocument.defaultView,
            n = o.getComputedStyle(e, null);
        return t ? n[t] : n;
    }
    function o(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host;
    }
    function n(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body;
        }
        var i = t(e),
            r = i.overflow,
            p = i.overflowX,
            s = i.overflowY;
        return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e));
    }
    function i(e) {
        return e && e.referenceNode ? e.referenceNode : e;
    }
    function r(e) {
        return 11 === e ? re : 10 === e ? pe : re || pe;
    }
    function p(e) {
        if (!e) return document.documentElement;
        for (
            var o = r(10) ? document.body : null, n = e.offsetParent || null;
            n === o && e.nextElementSibling;

        )
            n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i
            ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) &&
              "static" === t(n, "position")
                ? p(n)
                : n
            : e
            ? e.ownerDocument.documentElement
            : document.documentElement;
    }
    function s(e) {
        var t = e.nodeName;
        return "BODY" !== t && ("HTML" === t || p(e.firstElementChild) === e);
    }
    function d(e) {
        return null === e.parentNode ? e : d(e.parentNode);
    }
    function a(e, t) {
        if (!e || !e.nodeType || !t || !t.nodeType)
            return document.documentElement;
        var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            n = o ? e : t,
            i = o ? t : e,
            r = document.createRange();
        r.setStart(n, 0), r.setEnd(i, 0);
        var l = r.commonAncestorContainer;
        if ((e !== l && t !== l) || n.contains(i)) return s(l) ? l : p(l);
        var f = d(e);
        return f.host ? a(f.host, t) : a(e, d(t).host);
    }
    function l(e) {
        var t =
                1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : "top",
            o = "top" === t ? "scrollTop" : "scrollLeft",
            n = e.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var i = e.ownerDocument.documentElement,
                r = e.ownerDocument.scrollingElement || i;
            return r[o];
        }
        return e[o];
    }
    function f(e, t) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            n = l(t, "top"),
            i = l(t, "left"),
            r = o ? -1 : 1;
        return (
            (e.top += n * r),
            (e.bottom += n * r),
            (e.left += i * r),
            (e.right += i * r),
            e
        );
    }
    function m(e, t) {
        var o = "x" === t ? "Left" : "Top",
            n = "Left" == o ? "Right" : "Bottom";
        return (
            parseFloat(e["border" + o + "Width"], 10) +
            parseFloat(e["border" + n + "Width"], 10)
        );
    }
    function h(e, t, o, n) {
        return ee(
            t["offset" + e],
            t["scroll" + e],
            o["client" + e],
            o["offset" + e],
            o["scroll" + e],
            r(10)
                ? parseInt(o["offset" + e]) +
                      parseInt(
                          n["margin" + ("Height" === e ? "Top" : "Left")]
                      ) +
                      parseInt(
                          n["margin" + ("Height" === e ? "Bottom" : "Right")]
                      )
                : 0
        );
    }
    function c(e) {
        var t = e.body,
            o = e.documentElement,
            n = r(10) && getComputedStyle(o);
        return { height: h("Height", t, o, n), width: h("Width", t, o, n) };
    }
    function g(e) {
        return le({}, e, { right: e.left + e.width, bottom: e.top + e.height });
    }
    function u(e) {
        var o = {};
        try {
            if (r(10)) {
                o = e.getBoundingClientRect();
                var n = l(e, "top"),
                    i = l(e, "left");
                (o.top += n), (o.left += i), (o.bottom += n), (o.right += i);
            } else o = e.getBoundingClientRect();
        } catch (t) {}
        var p = {
                left: o.left,
                top: o.top,
                width: o.right - o.left,
                height: o.bottom - o.top,
            },
            s = "HTML" === e.nodeName ? c(e.ownerDocument) : {},
            d = s.width || e.clientWidth || p.width,
            a = s.height || e.clientHeight || p.height,
            f = e.offsetWidth - d,
            h = e.offsetHeight - a;
        if (f || h) {
            var u = t(e);
            (f -= m(u, "x")), (h -= m(u, "y")), (p.width -= f), (p.height -= h);
        }
        return g(p);
    }
    function b(e, o) {
        var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            p = r(10),
            s = "HTML" === o.nodeName,
            d = u(e),
            a = u(o),
            l = n(e),
            m = t(o),
            h = parseFloat(m.borderTopWidth, 10),
            c = parseFloat(m.borderLeftWidth, 10);
        i && s && ((a.top = ee(a.top, 0)), (a.left = ee(a.left, 0)));
        var b = g({
            top: d.top - a.top - h,
            left: d.left - a.left - c,
            width: d.width,
            height: d.height,
        });
        if (((b.marginTop = 0), (b.marginLeft = 0), !p && s)) {
            var w = parseFloat(m.marginTop, 10),
                y = parseFloat(m.marginLeft, 10);
            (b.top -= h - w),
                (b.bottom -= h - w),
                (b.left -= c - y),
                (b.right -= c - y),
                (b.marginTop = w),
                (b.marginLeft = y);
        }
        return (
            (p && !i ? o.contains(l) : o === l && "BODY" !== l.nodeName) &&
                (b = f(b, o)),
            b
        );
    }
    function w(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            o = e.ownerDocument.documentElement,
            n = b(e, o),
            i = ee(o.clientWidth, window.innerWidth || 0),
            r = ee(o.clientHeight, window.innerHeight || 0),
            p = t ? 0 : l(o),
            s = t ? 0 : l(o, "left"),
            d = {
                top: p - n.top + n.marginTop,
                left: s - n.left + n.marginLeft,
                width: i,
                height: r,
            };
        return g(d);
    }
    function y(e) {
        var n = e.nodeName;
        if ("BODY" === n || "HTML" === n) return !1;
        if ("fixed" === t(e, "position")) return !0;
        var i = o(e);
        return !!i && y(i);
    }
    function E(e) {
        if (!e || !e.parentElement || r()) return document.documentElement;
        for (var o = e.parentElement; o && "none" === t(o, "transform"); )
            o = o.parentElement;
        return o || document.documentElement;
    }
    function v(e, t, r, p) {
        var s = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
            d = { top: 0, left: 0 },
            l = s ? E(e) : a(e, i(t));
        if ("viewport" === p) d = w(l, s);
        else {
            var f;
            "scrollParent" === p
                ? ((f = n(o(t))),
                  "BODY" === f.nodeName &&
                      (f = e.ownerDocument.documentElement))
                : "window" === p
                ? (f = e.ownerDocument.documentElement)
                : (f = p);
            var m = b(f, l, s);
            if ("HTML" === f.nodeName && !y(l)) {
                var h = c(e.ownerDocument),
                    g = h.height,
                    u = h.width;
                (d.top += m.top - m.marginTop),
                    (d.bottom = g + m.top),
                    (d.left += m.left - m.marginLeft),
                    (d.right = u + m.left);
            } else d = m;
        }
        r = r || 0;
        var v = "number" == typeof r;
        return (
            (d.left += v ? r : r.left || 0),
            (d.top += v ? r : r.top || 0),
            (d.right -= v ? r : r.right || 0),
            (d.bottom -= v ? r : r.bottom || 0),
            d
        );
    }
    function x(e) {
        var t = e.width,
            o = e.height;
        return t * o;
    }
    function O(e, t, o, n, i) {
        var r =
            5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var p = v(o, n, r, i),
            s = {
                top: { width: p.width, height: t.top - p.top },
                right: { width: p.right - t.right, height: p.height },
                bottom: { width: p.width, height: p.bottom - t.bottom },
                left: { width: t.left - p.left, height: p.height },
            },
            d = Object.keys(s)
                .map(function (e) {
                    return le({ key: e }, s[e], { area: x(s[e]) });
                })
                .sort(function (e, t) {
                    return t.area - e.area;
                }),
            a = d.filter(function (e) {
                var t = e.width,
                    n = e.height;
                return t >= o.clientWidth && n >= o.clientHeight;
            }),
            l = 0 < a.length ? a[0].key : d[0].key,
            f = e.split("-")[1];
        return l + (f ? "-" + f : "");
    }
    function L(e, t, o) {
        var n =
                3 < arguments.length && void 0 !== arguments[3]
                    ? arguments[3]
                    : null,
            r = n ? E(t) : a(t, i(o));
        return b(o, r, n);
    }
    function S(e) {
        var t = e.ownerDocument.defaultView,
            o = t.getComputedStyle(e),
            n = parseFloat(o.marginTop || 0) + parseFloat(o.marginBottom || 0),
            i = parseFloat(o.marginLeft || 0) + parseFloat(o.marginRight || 0),
            r = { width: e.offsetWidth + i, height: e.offsetHeight + n };
        return r;
    }
    function T(e) {
        var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
        return e.replace(/left|right|bottom|top/g, function (e) {
            return t[e];
        });
    }
    function C(e, t, o) {
        o = o.split("-")[0];
        var n = S(e),
            i = { width: n.width, height: n.height },
            r = -1 !== ["right", "left"].indexOf(o),
            p = r ? "top" : "left",
            s = r ? "left" : "top",
            d = r ? "height" : "width",
            a = r ? "width" : "height";
        return (
            (i[p] = t[p] + t[d] / 2 - n[d] / 2),
            (i[s] = o === s ? t[s] - n[a] : t[T(s)]),
            i
        );
    }
    function D(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0];
    }
    function N(e, t, o) {
        if (Array.prototype.findIndex)
            return e.findIndex(function (e) {
                return e[t] === o;
            });
        var n = D(e, function (e) {
            return e[t] === o;
        });
        return e.indexOf(n);
    }
    function P(t, o, n) {
        var i = void 0 === n ? t : t.slice(0, N(t, "name", n));
        return (
            i.forEach(function (t) {
                t["function"] &&
                    console.warn(
                        "`modifier.function` is deprecated, use `modifier.fn`!"
                    );
                var n = t["function"] || t.fn;
                t.enabled &&
                    e(n) &&
                    ((o.offsets.popper = g(o.offsets.popper)),
                    (o.offsets.reference = g(o.offsets.reference)),
                    (o = n(o, t)));
            }),
            o
        );
    }
    function k() {
        if (!this.state.isDestroyed) {
            var e = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {},
            };
            (e.offsets.reference = L(
                this.state,
                this.popper,
                this.reference,
                this.options.positionFixed
            )),
                (e.placement = O(
                    this.options.placement,
                    e.offsets.reference,
                    this.popper,
                    this.reference,
                    this.options.modifiers.flip.boundariesElement,
                    this.options.modifiers.flip.padding
                )),
                (e.originalPlacement = e.placement),
                (e.positionFixed = this.options.positionFixed),
                (e.offsets.popper = C(
                    this.popper,
                    e.offsets.reference,
                    e.placement
                )),
                (e.offsets.popper.position = this.options.positionFixed
                    ? "fixed"
                    : "absolute"),
                (e = P(this.modifiers, e)),
                this.state.isCreated
                    ? this.options.onUpdate(e)
                    : ((this.state.isCreated = !0), this.options.onCreate(e));
        }
    }
    function W(e, t) {
        return e.some(function (e) {
            var o = e.name,
                n = e.enabled;
            return n && o === t;
        });
    }
    function B(e) {
        for (
            var t = [!1, "ms", "Webkit", "Moz", "O"],
                o = e.charAt(0).toUpperCase() + e.slice(1),
                n = 0;
            n < t.length;
            n++
        ) {
            var i = t[n],
                r = i ? "" + i + o : e;
            if ("undefined" != typeof document.body.style[r]) return r;
        }
        return null;
    }
    function H() {
        return (
            (this.state.isDestroyed = !0),
            W(this.modifiers, "applyStyle") &&
                (this.popper.removeAttribute("x-placement"),
                (this.popper.style.position = ""),
                (this.popper.style.top = ""),
                (this.popper.style.left = ""),
                (this.popper.style.right = ""),
                (this.popper.style.bottom = ""),
                (this.popper.style.willChange = ""),
                (this.popper.style[B("transform")] = "")),
            this.disableEventListeners(),
            this.options.removeOnDestroy &&
                this.popper.parentNode.removeChild(this.popper),
            this
        );
    }
    function A(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window;
    }
    function M(e, t, o, i) {
        var r = "BODY" === e.nodeName,
            p = r ? e.ownerDocument.defaultView : e;
        p.addEventListener(t, o, { passive: !0 }),
            r || M(n(p.parentNode), t, o, i),
            i.push(p);
    }
    function F(e, t, o, i) {
        (o.updateBound = i),
            A(e).addEventListener("resize", o.updateBound, { passive: !0 });
        var r = n(e);
        return (
            M(r, "scroll", o.updateBound, o.scrollParents),
            (o.scrollElement = r),
            (o.eventsEnabled = !0),
            o
        );
    }
    function I() {
        this.state.eventsEnabled ||
            (this.state = F(
                this.reference,
                this.options,
                this.state,
                this.scheduleUpdate
            ));
    }
    function R(e, t) {
        return (
            A(e).removeEventListener("resize", t.updateBound),
            t.scrollParents.forEach(function (e) {
                e.removeEventListener("scroll", t.updateBound);
            }),
            (t.updateBound = null),
            (t.scrollParents = []),
            (t.scrollElement = null),
            (t.eventsEnabled = !1),
            t
        );
    }
    function U() {
        this.state.eventsEnabled &&
            (cancelAnimationFrame(this.scheduleUpdate),
            (this.state = R(this.reference, this.state)));
    }
    function Y(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
    }
    function V(e, t) {
        Object.keys(t).forEach(function (o) {
            var n = "";
            -1 !==
                ["width", "height", "top", "right", "bottom", "left"].indexOf(
                    o
                ) &&
                Y(t[o]) &&
                (n = "px"),
                (e.style[o] = t[o] + n);
        });
    }
    function j(e, t) {
        Object.keys(t).forEach(function (o) {
            var n = t[o];
            !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
        });
    }
    function q(e, t) {
        var o = e.offsets,
            n = o.popper,
            i = o.reference,
            r = $,
            p = function (e) {
                return e;
            },
            s = r(i.width),
            d = r(n.width),
            a = -1 !== ["left", "right"].indexOf(e.placement),
            l = -1 !== e.placement.indexOf("-"),
            f = t ? (a || l || s % 2 == d % 2 ? r : Z) : p,
            m = t ? r : p;
        return {
            left: f(1 == s % 2 && 1 == d % 2 && !l && t ? n.left - 1 : n.left),
            top: m(n.top),
            bottom: m(n.bottom),
            right: f(n.right),
        };
    }
    function K(e, t, o) {
        var n = D(e, function (e) {
                var o = e.name;
                return o === t;
            }),
            i =
                !!n &&
                e.some(function (e) {
                    return e.name === o && e.enabled && e.order < n.order;
                });
        if (!i) {
            var r = "`" + t + "`";
            console.warn(
                "`" +
                    o +
                    "`" +
                    " modifier is required by " +
                    r +
                    " modifier in order to work, be sure to include it before " +
                    r +
                    "!"
            );
        }
        return i;
    }
    function z(e) {
        return "end" === e ? "start" : "start" === e ? "end" : e;
    }
    function G(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            o = he.indexOf(e),
            n = he.slice(o + 1).concat(he.slice(0, o));
        return t ? n.reverse() : n;
    }
    function _(e, t, o, n) {
        var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
            r = +i[1],
            p = i[2];
        if (!r) return e;
        if (0 === p.indexOf("%")) {
            var s;
            switch (p) {
                case "%p":
                    s = o;
                    break;
                case "%":
                case "%r":
                default:
                    s = n;
            }
            var d = g(s);
            return (d[t] / 100) * r;
        }
        if ("vh" === p || "vw" === p) {
            var a;
            return (
                (a =
                    "vh" === p
                        ? ee(
                              document.documentElement.clientHeight,
                              window.innerHeight || 0
                          )
                        : ee(
                              document.documentElement.clientWidth,
                              window.innerWidth || 0
                          )),
                (a / 100) * r
            );
        }
        return r;
    }
    function X(e, t, o, n) {
        var i = [0, 0],
            r = -1 !== ["right", "left"].indexOf(n),
            p = e.split(/(\+|\-)/).map(function (e) {
                return e.trim();
            }),
            s = p.indexOf(
                D(p, function (e) {
                    return -1 !== e.search(/,|\s/);
                })
            );
        p[s] &&
            -1 === p[s].indexOf(",") &&
            console.warn(
                "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
            );
        var d = /\s*,\s*|\s+/,
            a =
                -1 === s
                    ? [p]
                    : [
                          p.slice(0, s).concat([p[s].split(d)[0]]),
                          [p[s].split(d)[1]].concat(p.slice(s + 1)),
                      ];
        return (
            (a = a.map(function (e, n) {
                var i = (1 === n ? !r : r) ? "height" : "width",
                    p = !1;
                return e
                    .reduce(function (e, t) {
                        return "" === e[e.length - 1] &&
                            -1 !== ["+", "-"].indexOf(t)
                            ? ((e[e.length - 1] = t), (p = !0), e)
                            : p
                            ? ((e[e.length - 1] += t), (p = !1), e)
                            : e.concat(t);
                    }, [])
                    .map(function (e) {
                        return _(e, i, t, o);
                    });
            })),
            a.forEach(function (e, t) {
                e.forEach(function (o, n) {
                    Y(o) && (i[t] += o * ("-" === e[n - 1] ? -1 : 1));
                });
            }),
            i
        );
    }
    function J(e, t) {
        var o,
            n = t.offset,
            i = e.placement,
            r = e.offsets,
            p = r.popper,
            s = r.reference,
            d = i.split("-")[0];
        return (
            (o = Y(+n) ? [+n, 0] : X(n, p, s, d)),
            "left" === d
                ? ((p.top += o[0]), (p.left -= o[1]))
                : "right" === d
                ? ((p.top += o[0]), (p.left += o[1]))
                : "top" === d
                ? ((p.left += o[0]), (p.top -= o[1]))
                : "bottom" === d && ((p.left += o[0]), (p.top += o[1])),
            (e.popper = p),
            e
        );
    }
    var Q = Math.min,
        Z = Math.floor,
        $ = Math.round,
        ee = Math.max,
        te =
            "undefined" != typeof window &&
            "undefined" != typeof document &&
            "undefined" != typeof navigator,
        oe = (function () {
            for (
                var e = ["Edge", "Trident", "Firefox"], t = 0;
                t < e.length;
                t += 1
            )
                if (te && 0 <= navigator.userAgent.indexOf(e[t])) return 1;
            return 0;
        })(),
        ne = te && window.Promise,
        ie = ne
            ? function (e) {
                  var t = !1;
                  return function () {
                      t ||
                          ((t = !0),
                          window.Promise.resolve().then(function () {
                              (t = !1), e();
                          }));
                  };
              }
            : function (e) {
                  var t = !1;
                  return function () {
                      t ||
                          ((t = !0),
                          setTimeout(function () {
                              (t = !1), e();
                          }, oe));
                  };
              },
        re = te && !!(window.MSInputMethodContext && document.documentMode),
        pe = te && /MSIE 10/.test(navigator.userAgent),
        se = function (e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
        },
        de = (function () {
            function e(e, t) {
                for (var o, n = 0; n < t.length; n++)
                    (o = t[n]),
                        (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        "value" in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
            }
            return function (t, o, n) {
                return o && e(t.prototype, o), n && e(t, n), t;
            };
        })(),
        ae = function (e, t, o) {
            return (
                t in e
                    ? Object.defineProperty(e, t, {
                          value: o,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = o),
                e
            );
        },
        le =
            Object.assign ||
            function (e) {
                for (var t, o = 1; o < arguments.length; o++)
                    for (var n in ((t = arguments[o]), t))
                        Object.prototype.hasOwnProperty.call(t, n) &&
                            (e[n] = t[n]);
                return e;
            },
        fe = te && /Firefox/i.test(navigator.userAgent),
        me = [
            "auto-start",
            "auto",
            "auto-end",
            "top-start",
            "top",
            "top-end",
            "right-start",
            "right",
            "right-end",
            "bottom-end",
            "bottom",
            "bottom-start",
            "left-end",
            "left",
            "left-start",
        ],
        he = me.slice(3),
        ce = {
            FLIP: "flip",
            CLOCKWISE: "clockwise",
            COUNTERCLOCKWISE: "counterclockwise",
        },
        ge = (function () {
            function t(o, n) {
                var i = this,
                    r =
                        2 < arguments.length && void 0 !== arguments[2]
                            ? arguments[2]
                            : {};
                se(this, t),
                    (this.scheduleUpdate = function () {
                        return requestAnimationFrame(i.update);
                    }),
                    (this.update = ie(this.update.bind(this))),
                    (this.options = le({}, t.Defaults, r)),
                    (this.state = {
                        isDestroyed: !1,
                        isCreated: !1,
                        scrollParents: [],
                    }),
                    (this.reference = o && o.jquery ? o[0] : o),
                    (this.popper = n && n.jquery ? n[0] : n),
                    (this.options.modifiers = {}),
                    Object.keys(
                        le({}, t.Defaults.modifiers, r.modifiers)
                    ).forEach(function (e) {
                        i.options.modifiers[e] = le(
                            {},
                            t.Defaults.modifiers[e] || {},
                            r.modifiers ? r.modifiers[e] : {}
                        );
                    }),
                    (this.modifiers = Object.keys(this.options.modifiers)
                        .map(function (e) {
                            return le({ name: e }, i.options.modifiers[e]);
                        })
                        .sort(function (e, t) {
                            return e.order - t.order;
                        })),
                    this.modifiers.forEach(function (t) {
                        t.enabled &&
                            e(t.onLoad) &&
                            t.onLoad(
                                i.reference,
                                i.popper,
                                i.options,
                                t,
                                i.state
                            );
                    }),
                    this.update();
                var p = this.options.eventsEnabled;
                p && this.enableEventListeners(),
                    (this.state.eventsEnabled = p);
            }
            return (
                de(t, [
                    {
                        key: "update",
                        value: function () {
                            return k.call(this);
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            return H.call(this);
                        },
                    },
                    {
                        key: "enableEventListeners",
                        value: function () {
                            return I.call(this);
                        },
                    },
                    {
                        key: "disableEventListeners",
                        value: function () {
                            return U.call(this);
                        },
                    },
                ]),
                t
            );
        })();
    return (
        (ge.Utils = (
            "undefined" == typeof window ? global : window
        ).PopperUtils),
        (ge.placements = me),
        (ge.Defaults = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function () {},
            onUpdate: function () {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function (e) {
                        var t = e.placement,
                            o = t.split("-")[0],
                            n = t.split("-")[1];
                        if (n) {
                            var i = e.offsets,
                                r = i.reference,
                                p = i.popper,
                                s = -1 !== ["bottom", "top"].indexOf(o),
                                d = s ? "left" : "top",
                                a = s ? "width" : "height",
                                l = {
                                    start: ae({}, d, r[d]),
                                    end: ae({}, d, r[d] + r[a] - p[a]),
                                };
                            e.offsets.popper = le({}, p, l[n]);
                        }
                        return e;
                    },
                },
                offset: { order: 200, enabled: !0, fn: J, offset: 0 },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function (e, t) {
                        var o = t.boundariesElement || p(e.instance.popper);
                        e.instance.reference === o && (o = p(o));
                        var n = B("transform"),
                            i = e.instance.popper.style,
                            r = i.top,
                            s = i.left,
                            d = i[n];
                        (i.top = ""), (i.left = ""), (i[n] = "");
                        var a = v(
                            e.instance.popper,
                            e.instance.reference,
                            t.padding,
                            o,
                            e.positionFixed
                        );
                        (i.top = r),
                            (i.left = s),
                            (i[n] = d),
                            (t.boundaries = a);
                        var l = t.priority,
                            f = e.offsets.popper,
                            m = {
                                primary: function (e) {
                                    var o = f[e];
                                    return (
                                        f[e] < a[e] &&
                                            !t.escapeWithReference &&
                                            (o = ee(f[e], a[e])),
                                        ae({}, e, o)
                                    );
                                },
                                secondary: function (e) {
                                    var o = "right" === e ? "left" : "top",
                                        n = f[o];
                                    return (
                                        f[e] > a[e] &&
                                            !t.escapeWithReference &&
                                            (n = Q(
                                                f[o],
                                                a[e] -
                                                    ("right" === e
                                                        ? f.width
                                                        : f.height)
                                            )),
                                        ae({}, o, n)
                                    );
                                },
                            };
                        return (
                            l.forEach(function (e) {
                                var t =
                                    -1 === ["left", "top"].indexOf(e)
                                        ? "secondary"
                                        : "primary";
                                f = le({}, f, m[t](e));
                            }),
                            (e.offsets.popper = f),
                            e
                        );
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent",
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function (e) {
                        var t = e.offsets,
                            o = t.popper,
                            n = t.reference,
                            i = e.placement.split("-")[0],
                            r = Z,
                            p = -1 !== ["top", "bottom"].indexOf(i),
                            s = p ? "right" : "bottom",
                            d = p ? "left" : "top",
                            a = p ? "width" : "height";
                        return (
                            o[s] < r(n[d]) &&
                                (e.offsets.popper[d] = r(n[d]) - o[a]),
                            o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])),
                            e
                        );
                    },
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function (e, o) {
                        var n;
                        if (!K(e.instance.modifiers, "arrow", "keepTogether"))
                            return e;
                        var i = o.element;
                        if ("string" == typeof i) {
                            if (((i = e.instance.popper.querySelector(i)), !i))
                                return e;
                        } else if (!e.instance.popper.contains(i))
                            return (
                                console.warn(
                                    "WARNING: `arrow.element` must be child of its popper element!"
                                ),
                                e
                            );
                        var r = e.placement.split("-")[0],
                            p = e.offsets,
                            s = p.popper,
                            d = p.reference,
                            a = -1 !== ["left", "right"].indexOf(r),
                            l = a ? "height" : "width",
                            f = a ? "Top" : "Left",
                            m = f.toLowerCase(),
                            h = a ? "left" : "top",
                            c = a ? "bottom" : "right",
                            u = S(i)[l];
                        d[c] - u < s[m] &&
                            (e.offsets.popper[m] -= s[m] - (d[c] - u)),
                            d[m] + u > s[c] &&
                                (e.offsets.popper[m] += d[m] + u - s[c]),
                            (e.offsets.popper = g(e.offsets.popper));
                        var b = d[m] + d[l] / 2 - u / 2,
                            w = t(e.instance.popper),
                            y = parseFloat(w["margin" + f], 10),
                            E = parseFloat(w["border" + f + "Width"], 10),
                            v = b - e.offsets.popper[m] - y - E;
                        return (
                            (v = ee(Q(s[l] - u, v), 0)),
                            (e.arrowElement = i),
                            (e.offsets.arrow =
                                ((n = {}), ae(n, m, $(v)), ae(n, h, ""), n)),
                            e
                        );
                    },
                    element: "[x-arrow]",
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function (e, t) {
                        if (W(e.instance.modifiers, "inner")) return e;
                        if (e.flipped && e.placement === e.originalPlacement)
                            return e;
                        var o = v(
                                e.instance.popper,
                                e.instance.reference,
                                t.padding,
                                t.boundariesElement,
                                e.positionFixed
                            ),
                            n = e.placement.split("-")[0],
                            i = T(n),
                            r = e.placement.split("-")[1] || "",
                            p = [];
                        switch (t.behavior) {
                            case ce.FLIP:
                                p = [n, i];
                                break;
                            case ce.CLOCKWISE:
                                p = G(n);
                                break;
                            case ce.COUNTERCLOCKWISE:
                                p = G(n, !0);
                                break;
                            default:
                                p = t.behavior;
                        }
                        return (
                            p.forEach(function (s, d) {
                                if (n !== s || p.length === d + 1) return e;
                                (n = e.placement.split("-")[0]), (i = T(n));
                                var a = e.offsets.popper,
                                    l = e.offsets.reference,
                                    f = Z,
                                    m =
                                        ("left" === n &&
                                            f(a.right) > f(l.left)) ||
                                        ("right" === n &&
                                            f(a.left) < f(l.right)) ||
                                        ("top" === n &&
                                            f(a.bottom) > f(l.top)) ||
                                        ("bottom" === n &&
                                            f(a.top) < f(l.bottom)),
                                    h = f(a.left) < f(o.left),
                                    c = f(a.right) > f(o.right),
                                    g = f(a.top) < f(o.top),
                                    u = f(a.bottom) > f(o.bottom),
                                    b =
                                        ("left" === n && h) ||
                                        ("right" === n && c) ||
                                        ("top" === n && g) ||
                                        ("bottom" === n && u),
                                    w = -1 !== ["top", "bottom"].indexOf(n),
                                    y =
                                        !!t.flipVariations &&
                                        ((w && "start" === r && h) ||
                                            (w && "end" === r && c) ||
                                            (!w && "start" === r && g) ||
                                            (!w && "end" === r && u)),
                                    E =
                                        !!t.flipVariationsByContent &&
                                        ((w && "start" === r && c) ||
                                            (w && "end" === r && h) ||
                                            (!w && "start" === r && u) ||
                                            (!w && "end" === r && g)),
                                    v = y || E;
                                (m || b || v) &&
                                    ((e.flipped = !0),
                                    (m || b) && (n = p[d + 1]),
                                    v && (r = z(r)),
                                    (e.placement = n + (r ? "-" + r : "")),
                                    (e.offsets.popper = le(
                                        {},
                                        e.offsets.popper,
                                        C(
                                            e.instance.popper,
                                            e.offsets.reference,
                                            e.placement
                                        )
                                    )),
                                    (e = P(e.instance.modifiers, e, "flip")));
                            }),
                            e
                        );
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport",
                    flipVariations: !1,
                    flipVariationsByContent: !1,
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function (e) {
                        var t = e.placement,
                            o = t.split("-")[0],
                            n = e.offsets,
                            i = n.popper,
                            r = n.reference,
                            p = -1 !== ["left", "right"].indexOf(o),
                            s = -1 === ["top", "left"].indexOf(o);
                        return (
                            (i[p ? "left" : "top"] =
                                r[o] - (s ? i[p ? "width" : "height"] : 0)),
                            (e.placement = T(t)),
                            (e.offsets.popper = g(i)),
                            e
                        );
                    },
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function (e) {
                        if (!K(e.instance.modifiers, "hide", "preventOverflow"))
                            return e;
                        var t = e.offsets.reference,
                            o = D(e.instance.modifiers, function (e) {
                                return "preventOverflow" === e.name;
                            }).boundaries;
                        if (
                            t.bottom < o.top ||
                            t.left > o.right ||
                            t.top > o.bottom ||
                            t.right < o.left
                        ) {
                            if (!0 === e.hide) return e;
                            (e.hide = !0),
                                (e.attributes["x-out-of-boundaries"] = "");
                        } else {
                            if (!1 === e.hide) return e;
                            (e.hide = !1),
                                (e.attributes["x-out-of-boundaries"] = !1);
                        }
                        return e;
                    },
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function (e, t) {
                        var o = t.x,
                            n = t.y,
                            i = e.offsets.popper,
                            r = D(e.instance.modifiers, function (e) {
                                return "applyStyle" === e.name;
                            }).gpuAcceleration;
                        void 0 !== r &&
                            console.warn(
                                "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
                            );
                        var s,
                            d,
                            a = void 0 === r ? t.gpuAcceleration : r,
                            l = p(e.instance.popper),
                            f = u(l),
                            m = { position: i.position },
                            h = q(e, 2 > window.devicePixelRatio || !fe),
                            c = "bottom" === o ? "top" : "bottom",
                            g = "right" === n ? "left" : "right",
                            b = B("transform");
                        if (
                            ((d =
                                "bottom" == c
                                    ? "HTML" === l.nodeName
                                        ? -l.clientHeight + h.bottom
                                        : -f.height + h.bottom
                                    : h.top),
                            (s =
                                "right" == g
                                    ? "HTML" === l.nodeName
                                        ? -l.clientWidth + h.right
                                        : -f.width + h.right
                                    : h.left),
                            a && b)
                        )
                            (m[b] = "translate3d(" + s + "px, " + d + "px, 0)"),
                                (m[c] = 0),
                                (m[g] = 0),
                                (m.willChange = "transform");
                        else {
                            var w = "bottom" == c ? -1 : 1,
                                y = "right" == g ? -1 : 1;
                            (m[c] = d * w),
                                (m[g] = s * y),
                                (m.willChange = c + ", " + g);
                        }
                        var E = { "x-placement": e.placement };
                        return (
                            (e.attributes = le({}, E, e.attributes)),
                            (e.styles = le({}, m, e.styles)),
                            (e.arrowStyles = le(
                                {},
                                e.offsets.arrow,
                                e.arrowStyles
                            )),
                            e
                        );
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right",
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function (e) {
                        return (
                            V(e.instance.popper, e.styles),
                            j(e.instance.popper, e.attributes),
                            e.arrowElement &&
                                Object.keys(e.arrowStyles).length &&
                                V(e.arrowElement, e.arrowStyles),
                            e
                        );
                    },
                    onLoad: function (e, t, o, n, i) {
                        var r = L(i, t, e, o.positionFixed),
                            p = O(
                                o.placement,
                                r,
                                t,
                                e,
                                o.modifiers.flip.boundariesElement,
                                o.modifiers.flip.padding
                            );
                        return (
                            t.setAttribute("x-placement", p),
                            V(t, {
                                position: o.positionFixed
                                    ? "fixed"
                                    : "absolute",
                            }),
                            o
                        );
                    },
                    gpuAcceleration: void 0,
                },
            },
        }),
        ge
    );
});
!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
        ? e(exports, require("jquery"), require("popper.js"))
        : "function" == typeof define && define.amd
        ? define(["exports", "jquery", "popper.js"], e)
        : e(((t = t || self).bootstrap = {}), t.jQuery, t.Popper);
})(this, function (t, g, u) {
    "use strict";
    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i);
        }
    }
    function s(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t;
    }
    function e(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t &&
                (i = i.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, i);
        }
        return n;
    }
    function l(o) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
                ? e(Object(r), !0).forEach(function (t) {
                      var e, n, i;
                      (e = o),
                          (i = r[(n = t)]),
                          n in e
                              ? Object.defineProperty(e, n, {
                                    value: i,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                })
                              : (e[n] = i);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                      o,
                      Object.getOwnPropertyDescriptors(r)
                  )
                : e(Object(r)).forEach(function (t) {
                      Object.defineProperty(
                          o,
                          t,
                          Object.getOwnPropertyDescriptor(r, t)
                      );
                  });
        }
        return o;
    }
    (g = g && g.hasOwnProperty("default") ? g.default : g),
        (u = u && u.hasOwnProperty("default") ? u.default : u);
    var n = "transitionend";
    function o(t) {
        var e = this,
            n = !1;
        return (
            g(this).one(_.TRANSITION_END, function () {
                n = !0;
            }),
            setTimeout(function () {
                n || _.triggerTransitionEnd(e);
            }, t),
            this
        );
    }
    var _ = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function (t) {
            for (
                ;
                (t += ~~(1e6 * Math.random())), document.getElementById(t);

            );
            return t;
        },
        getSelectorFromElement: function (t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : "";
            }
            try {
                return document.querySelector(e) ? e : null;
            } catch (t) {
                return null;
            }
        },
        getTransitionDurationFromElement: function (t) {
            if (!t) return 0;
            var e = g(t).css("transition-duration"),
                n = g(t).css("transition-delay"),
                i = parseFloat(e),
                o = parseFloat(n);
            return i || o
                ? ((e = e.split(",")[0]),
                  (n = n.split(",")[0]),
                  1e3 * (parseFloat(e) + parseFloat(n)))
                : 0;
        },
        reflow: function (t) {
            return t.offsetHeight;
        },
        triggerTransitionEnd: function (t) {
            g(t).trigger(n);
        },
        supportsTransitionEnd: function () {
            return Boolean(n);
        },
        isElement: function (t) {
            return (t[0] || t).nodeType;
        },
        typeCheckConfig: function (t, e, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i],
                        r = e[i],
                        s =
                            r && _.isElement(r)
                                ? "element"
                                : ((a = r),
                                  {}.toString
                                      .call(a)
                                      .match(/\s([a-z]+)/i)[1]
                                      .toLowerCase());
                    if (!new RegExp(o).test(s))
                        throw new Error(
                            t.toUpperCase() +
                                ': Option "' +
                                i +
                                '" provided type "' +
                                s +
                                '" but expected type "' +
                                o +
                                '".'
                        );
                }
            var a;
        },
        findShadowRoot: function (t) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" != typeof t.getRootNode)
                return t instanceof ShadowRoot
                    ? t
                    : t.parentNode
                    ? _.findShadowRoot(t.parentNode)
                    : null;
            var e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null;
        },
        jQueryDetection: function () {
            if ("undefined" == typeof g)
                throw new TypeError(
                    "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
                );
            var t = g.fn.jquery.split(" ")[0].split(".");
            if (
                (t[0] < 2 && t[1] < 9) ||
                (1 === t[0] && 9 === t[1] && t[2] < 1) ||
                4 <= t[0]
            )
                throw new Error(
                    "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
                );
        },
    };
    _.jQueryDetection(),
        (g.fn.emulateTransitionEnd = o),
        (g.event.special[_.TRANSITION_END] = {
            bindType: n,
            delegateType: n,
            handle: function (t) {
                if (g(t.target).is(this))
                    return t.handleObj.handler.apply(this, arguments);
            },
        });
    var r = "alert",
        a = "bs.alert",
        c = "." + a,
        h = g.fn[r],
        f = {
            CLOSE: "close" + c,
            CLOSED: "closed" + c,
            CLICK_DATA_API: "click" + c + ".data-api",
        },
        d = "alert",
        m = "fade",
        p = "show",
        v = (function () {
            function i(t) {
                this._element = t;
            }
            var t = i.prototype;
            return (
                (t.close = function (t) {
                    var e = this._element;
                    t && (e = this._getRootElement(t)),
                        this._triggerCloseEvent(e).isDefaultPrevented() ||
                            this._removeElement(e);
                }),
                (t.dispose = function () {
                    g.removeData(this._element, a), (this._element = null);
                }),
                (t._getRootElement = function (t) {
                    var e = _.getSelectorFromElement(t),
                        n = !1;
                    return (
                        e && (n = document.querySelector(e)),
                        (n = n || g(t).closest("." + d)[0])
                    );
                }),
                (t._triggerCloseEvent = function (t) {
                    var e = g.Event(f.CLOSE);
                    return g(t).trigger(e), e;
                }),
                (t._removeElement = function (e) {
                    var n = this;
                    if ((g(e).removeClass(p), g(e).hasClass(m))) {
                        var t = _.getTransitionDurationFromElement(e);
                        g(e)
                            .one(_.TRANSITION_END, function (t) {
                                return n._destroyElement(e, t);
                            })
                            .emulateTransitionEnd(t);
                    } else this._destroyElement(e);
                }),
                (t._destroyElement = function (t) {
                    g(t).detach().trigger(f.CLOSED).remove();
                }),
                (i._jQueryInterface = function (n) {
                    return this.each(function () {
                        var t = g(this),
                            e = t.data(a);
                        e || ((e = new i(this)), t.data(a, e)),
                            "close" === n && e[n](this);
                    });
                }),
                (i._handleDismiss = function (e) {
                    return function (t) {
                        t && t.preventDefault(), e.close(this);
                    };
                }),
                s(i, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.4.1";
                        },
                    },
                ]),
                i
            );
        })();
    g(document).on(
        f.CLICK_DATA_API,
        '[data-dismiss="alert"]',
        v._handleDismiss(new v())
    ),
        (g.fn[r] = v._jQueryInterface),
        (g.fn[r].Constructor = v),
        (g.fn[r].noConflict = function () {
            return (g.fn[r] = h), v._jQueryInterface;
        });
    var y = "button",
        E = "bs.button",
        C = "." + E,
        T = ".data-api",
        b = g.fn[y],
        S = "active",
        D = "btn",
        I = "focus",
        w = '[data-toggle^="button"]',
        A = '[data-toggle="buttons"]',
        N = '[data-toggle="button"]',
        O = '[data-toggle="buttons"] .btn',
        k = 'input:not([type="hidden"])',
        P = ".active",
        L = ".btn",
        j = {
            CLICK_DATA_API: "click" + C + T,
            FOCUS_BLUR_DATA_API: "focus" + C + T + " blur" + C + T,
            LOAD_DATA_API: "load" + C + T,
        },
        H = (function () {
            function n(t) {
                this._element = t;
            }
            var t = n.prototype;
            return (
                (t.toggle = function () {
                    var t = !0,
                        e = !0,
                        n = g(this._element).closest(A)[0];
                    if (n) {
                        var i = this._element.querySelector(k);
                        if (i) {
                            if ("radio" === i.type)
                                if (
                                    i.checked &&
                                    this._element.classList.contains(S)
                                )
                                    t = !1;
                                else {
                                    var o = n.querySelector(P);
                                    o && g(o).removeClass(S);
                                }
                            else
                                "checkbox" === i.type
                                    ? "LABEL" === this._element.tagName &&
                                      i.checked ===
                                          this._element.classList.contains(S) &&
                                      (t = !1)
                                    : (t = !1);
                            t &&
                                ((i.checked =
                                    !this._element.classList.contains(S)),
                                g(i).trigger("change")),
                                i.focus(),
                                (e = !1);
                        }
                    }
                    this._element.hasAttribute("disabled") ||
                        this._element.classList.contains("disabled") ||
                        (e &&
                            this._element.setAttribute(
                                "aria-pressed",
                                !this._element.classList.contains(S)
                            ),
                        t && g(this._element).toggleClass(S));
                }),
                (t.dispose = function () {
                    g.removeData(this._element, E), (this._element = null);
                }),
                (n._jQueryInterface = function (e) {
                    return this.each(function () {
                        var t = g(this).data(E);
                        t || ((t = new n(this)), g(this).data(E, t)),
                            "toggle" === e && t[e]();
                    });
                }),
                s(n, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.4.1";
                        },
                    },
                ]),
                n
            );
        })();
    g(document)
        .on(j.CLICK_DATA_API, w, function (t) {
            var e = t.target;
            if (
                (g(e).hasClass(D) || (e = g(e).closest(L)[0]),
                !e ||
                    e.hasAttribute("disabled") ||
                    e.classList.contains("disabled"))
            )
                t.preventDefault();
            else {
                var n = e.querySelector(k);
                if (
                    n &&
                    (n.hasAttribute("disabled") ||
                        n.classList.contains("disabled"))
                )
                    return void t.preventDefault();
                H._jQueryInterface.call(g(e), "toggle");
            }
        })
        .on(j.FOCUS_BLUR_DATA_API, w, function (t) {
            var e = g(t.target).closest(L)[0];
            g(e).toggleClass(I, /^focus(in)?$/.test(t.type));
        }),
        g(window).on(j.LOAD_DATA_API, function () {
            for (
                var t = [].slice.call(document.querySelectorAll(O)),
                    e = 0,
                    n = t.length;
                e < n;
                e++
            ) {
                var i = t[e],
                    o = i.querySelector(k);
                o.checked || o.hasAttribute("checked")
                    ? i.classList.add(S)
                    : i.classList.remove(S);
            }
            for (
                var r = 0,
                    s = (t = [].slice.call(document.querySelectorAll(N)))
                        .length;
                r < s;
                r++
            ) {
                var a = t[r];
                "true" === a.getAttribute("aria-pressed")
                    ? a.classList.add(S)
                    : a.classList.remove(S);
            }
        }),
        (g.fn[y] = H._jQueryInterface),
        (g.fn[y].Constructor = H),
        (g.fn[y].noConflict = function () {
            return (g.fn[y] = b), H._jQueryInterface;
        });
    var R = "carousel",
        x = "bs.carousel",
        F = "." + x,
        U = ".data-api",
        W = g.fn[R],
        q = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0,
        },
        M = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean",
        },
        K = "next",
        Q = "prev",
        B = "left",
        V = "right",
        Y = {
            SLIDE: "slide" + F,
            SLID: "slid" + F,
            KEYDOWN: "keydown" + F,
            MOUSEENTER: "mouseenter" + F,
            MOUSELEAVE: "mouseleave" + F,
            TOUCHSTART: "touchstart" + F,
            TOUCHMOVE: "touchmove" + F,
            TOUCHEND: "touchend" + F,
            POINTERDOWN: "pointerdown" + F,
            POINTERUP: "pointerup" + F,
            DRAG_START: "dragstart" + F,
            LOAD_DATA_API: "load" + F + U,
            CLICK_DATA_API: "click" + F + U,
        },
        z = "carousel",
        X = "active",
        $ = "slide",
        G = "carousel-item-right",
        J = "carousel-item-left",
        Z = "carousel-item-next",
        tt = "carousel-item-prev",
        et = "pointer-event",
        nt = ".active",
        it = ".active.carousel-item",
        ot = ".carousel-item",
        rt = ".carousel-item img",
        st = ".carousel-item-next, .carousel-item-prev",
        at = ".carousel-indicators",
        lt = "[data-slide], [data-slide-to]",
        ct = '[data-ride="carousel"]',
        ht = { TOUCH: "touch", PEN: "pen" },
        ut = (function () {
            function r(t, e) {
                (this._items = null),
                    (this._interval = null),
                    (this._activeElement = null),
                    (this._isPaused = !1),
                    (this._isSliding = !1),
                    (this.touchTimeout = null),
                    (this.touchStartX = 0),
                    (this.touchDeltaX = 0),
                    (this._config = this._getConfig(e)),
                    (this._element = t),
                    (this._indicatorsElement = this._element.querySelector(at)),
                    (this._touchSupported =
                        "ontouchstart" in document.documentElement ||
                        0 < navigator.maxTouchPoints),
                    (this._pointerEvent = Boolean(
                        window.PointerEvent || window.MSPointerEvent
                    )),
                    this._addEventListeners();
            }
            var t = r.prototype;
            return (
                (t.next = function () {
                    this._isSliding || this._slide(K);
                }),
                (t.nextWhenVisible = function () {
                    !document.hidden &&
                        g(this._element).is(":visible") &&
                        "hidden" !== g(this._element).css("visibility") &&
                        this.next();
                }),
                (t.prev = function () {
                    this._isSliding || this._slide(Q);
                }),
                (t.pause = function (t) {
                    t || (this._isPaused = !0),
                        this._element.querySelector(st) &&
                            (_.triggerTransitionEnd(this._element),
                            this.cycle(!0)),
                        clearInterval(this._interval),
                        (this._interval = null);
                }),
                (t.cycle = function (t) {
                    t || (this._isPaused = !1),
                        this._interval &&
                            (clearInterval(this._interval),
                            (this._interval = null)),
                        this._config.interval &&
                            !this._isPaused &&
                            (this._interval = setInterval(
                                (document.visibilityState
                                    ? this.nextWhenVisible
                                    : this.next
                                ).bind(this),
                                this._config.interval
                            ));
                }),
                (t.to = function (t) {
                    var e = this;
                    this._activeElement = this._element.querySelector(it);
                    var n = this._getItemIndex(this._activeElement);
                    if (!(t > this._items.length - 1 || t < 0))
                        if (this._isSliding)
                            g(this._element).one(Y.SLID, function () {
                                return e.to(t);
                            });
                        else {
                            if (n === t) return this.pause(), void this.cycle();
                            var i = n < t ? K : Q;
                            this._slide(i, this._items[t]);
                        }
                }),
                (t.dispose = function () {
                    g(this._element).off(F),
                        g.removeData(this._element, x),
                        (this._items = null),
                        (this._config = null),
                        (this._element = null),
                        (this._interval = null),
                        (this._isPaused = null),
                        (this._isSliding = null),
                        (this._activeElement = null),
                        (this._indicatorsElement = null);
                }),
                (t._getConfig = function (t) {
                    return (t = l({}, q, {}, t)), _.typeCheckConfig(R, t, M), t;
                }),
                (t._handleSwipe = function () {
                    var t = Math.abs(this.touchDeltaX);
                    if (!(t <= 40)) {
                        var e = t / this.touchDeltaX;
                        (this.touchDeltaX = 0) < e && this.prev(),
                            e < 0 && this.next();
                    }
                }),
                (t._addEventListeners = function () {
                    var e = this;
                    this._config.keyboard &&
                        g(this._element).on(Y.KEYDOWN, function (t) {
                            return e._keydown(t);
                        }),
                        "hover" === this._config.pause &&
                            g(this._element)
                                .on(Y.MOUSEENTER, function (t) {
                                    return e.pause(t);
                                })
                                .on(Y.MOUSELEAVE, function (t) {
                                    return e.cycle(t);
                                }),
                        this._config.touch && this._addTouchEventListeners();
                }),
                (t._addTouchEventListeners = function () {
                    var e = this;
                    if (this._touchSupported) {
                        var n = function (t) {
                                e._pointerEvent &&
                                ht[t.originalEvent.pointerType.toUpperCase()]
                                    ? (e.touchStartX = t.originalEvent.clientX)
                                    : e._pointerEvent ||
                                      (e.touchStartX =
                                          t.originalEvent.touches[0].clientX);
                            },
                            i = function (t) {
                                e._pointerEvent &&
                                    ht[
                                        t.originalEvent.pointerType.toUpperCase()
                                    ] &&
                                    (e.touchDeltaX =
                                        t.originalEvent.clientX -
                                        e.touchStartX),
                                    e._handleSwipe(),
                                    "hover" === e._config.pause &&
                                        (e.pause(),
                                        e.touchTimeout &&
                                            clearTimeout(e.touchTimeout),
                                        (e.touchTimeout = setTimeout(function (
                                            t
                                        ) {
                                            return e.cycle(t);
                                        },
                                        500 + e._config.interval)));
                            };
                        g(this._element.querySelectorAll(rt)).on(
                            Y.DRAG_START,
                            function (t) {
                                return t.preventDefault();
                            }
                        ),
                            this._pointerEvent
                                ? (g(this._element).on(
                                      Y.POINTERDOWN,
                                      function (t) {
                                          return n(t);
                                      }
                                  ),
                                  g(this._element).on(
                                      Y.POINTERUP,
                                      function (t) {
                                          return i(t);
                                      }
                                  ),
                                  this._element.classList.add(et))
                                : (g(this._element).on(
                                      Y.TOUCHSTART,
                                      function (t) {
                                          return n(t);
                                      }
                                  ),
                                  g(this._element).on(
                                      Y.TOUCHMOVE,
                                      function (t) {
                                          return (function (t) {
                                              t.originalEvent.touches &&
                                              1 < t.originalEvent.touches.length
                                                  ? (e.touchDeltaX = 0)
                                                  : (e.touchDeltaX =
                                                        t.originalEvent
                                                            .touches[0]
                                                            .clientX -
                                                        e.touchStartX);
                                          })(t);
                                      }
                                  ),
                                  g(this._element).on(Y.TOUCHEND, function (t) {
                                      return i(t);
                                  }));
                    }
                }),
                (t._keydown = function (t) {
                    if (!/input|textarea/i.test(t.target.tagName))
                        switch (t.which) {
                            case 37:
                                t.preventDefault(), this.prev();
                                break;
                            case 39:
                                t.preventDefault(), this.next();
                        }
                }),
                (t._getItemIndex = function (t) {
                    return (
                        (this._items =
                            t && t.parentNode
                                ? [].slice.call(
                                      t.parentNode.querySelectorAll(ot)
                                  )
                                : []),
                        this._items.indexOf(t)
                    );
                }),
                (t._getItemByDirection = function (t, e) {
                    var n = t === K,
                        i = t === Q,
                        o = this._getItemIndex(e),
                        r = this._items.length - 1;
                    if (
                        ((i && 0 === o) || (n && o === r)) &&
                        !this._config.wrap
                    )
                        return e;
                    var s = (o + (t === Q ? -1 : 1)) % this._items.length;
                    return -1 == s
                        ? this._items[this._items.length - 1]
                        : this._items[s];
                }),
                (t._triggerSlideEvent = function (t, e) {
                    var n = this._getItemIndex(t),
                        i = this._getItemIndex(this._element.querySelector(it)),
                        o = g.Event(Y.SLIDE, {
                            relatedTarget: t,
                            direction: e,
                            from: i,
                            to: n,
                        });
                    return g(this._element).trigger(o), o;
                }),
                (t._setActiveIndicatorElement = function (t) {
                    if (this._indicatorsElement) {
                        var e = [].slice.call(
                            this._indicatorsElement.querySelectorAll(nt)
                        );
                        g(e).removeClass(X);
                        var n =
                            this._indicatorsElement.children[
                                this._getItemIndex(t)
                            ];
                        n && g(n).addClass(X);
                    }
                }),
                (t._slide = function (t, e) {
                    var n,
                        i,
                        o,
                        r = this,
                        s = this._element.querySelector(it),
                        a = this._getItemIndex(s),
                        l = e || (s && this._getItemByDirection(t, s)),
                        c = this._getItemIndex(l),
                        h = Boolean(this._interval);
                    if (
                        ((o =
                            t === K
                                ? ((n = J), (i = Z), B)
                                : ((n = G), (i = tt), V)),
                        l && g(l).hasClass(X))
                    )
                        this._isSliding = !1;
                    else if (
                        !this._triggerSlideEvent(l, o).isDefaultPrevented() &&
                        s &&
                        l
                    ) {
                        (this._isSliding = !0),
                            h && this.pause(),
                            this._setActiveIndicatorElement(l);
                        var u = g.Event(Y.SLID, {
                            relatedTarget: l,
                            direction: o,
                            from: a,
                            to: c,
                        });
                        if (g(this._element).hasClass($)) {
                            g(l).addClass(i),
                                _.reflow(l),
                                g(s).addClass(n),
                                g(l).addClass(n);
                            var f = parseInt(
                                l.getAttribute("data-interval"),
                                10
                            );
                            f
                                ? ((this._config.defaultInterval =
                                      this._config.defaultInterval ||
                                      this._config.interval),
                                  (this._config.interval = f))
                                : (this._config.interval =
                                      this._config.defaultInterval ||
                                      this._config.interval);
                            var d = _.getTransitionDurationFromElement(s);
                            g(s)
                                .one(_.TRANSITION_END, function () {
                                    g(l)
                                        .removeClass(n + " " + i)
                                        .addClass(X),
                                        g(s).removeClass(X + " " + i + " " + n),
                                        (r._isSliding = !1),
                                        setTimeout(function () {
                                            return g(r._element).trigger(u);
                                        }, 0);
                                })
                                .emulateTransitionEnd(d);
                        } else
                            g(s).removeClass(X),
                                g(l).addClass(X),
                                (this._isSliding = !1),
                                g(this._element).trigger(u);
                        h && this.cycle();
                    }
                }),
                (r._jQueryInterface = function (i) {
                    return this.each(function () {
                        var t = g(this).data(x),
                            e = l({}, q, {}, g(this).data());
                        "object" == typeof i && (e = l({}, e, {}, i));
                        var n = "string" == typeof i ? i : e.slide;
                        if (
                            (t || ((t = new r(this, e)), g(this).data(x, t)),
                            "number" == typeof i)
                        )
                            t.to(i);
                        else if ("string" == typeof n) {
                            if ("undefined" == typeof t[n])
                                throw new TypeError(
                                    'No method named "' + n + '"'
                                );
                            t[n]();
                        } else e.interval && e.ride && (t.pause(), t.cycle());
                    });
                }),
                (r._dataApiClickHandler = function (t) {
                    var e = _.getSelectorFromElement(this);
                    if (e) {
                        var n = g(e)[0];
                        if (n && g(n).hasClass(z)) {
                            var i = l({}, g(n).data(), {}, g(this).data()),
                                o = this.getAttribute("data-slide-to");
                            o && (i.interval = !1),
                                r._jQueryInterface.call(g(n), i),
                                o && g(n).data(x).to(o),
                                t.preventDefault();
                        }
                    }
                }),
                s(r, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.4.1";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return q;
                        },
                    },
                ]),
                r
            );
        })();
    g(document).on(Y.CLICK_DATA_API, lt, ut._dataApiClickHandler),
        g(window).on(Y.LOAD_DATA_API, function () {
            for (
                var t = [].slice.call(document.querySelectorAll(ct)),
                    e = 0,
                    n = t.length;
                e < n;
                e++
            ) {
                var i = g(t[e]);
                ut._jQueryInterface.call(i, i.data());
            }
        }),
        (g.fn[R] = ut._jQueryInterface),
        (g.fn[R].Constructor = ut),
        (g.fn[R].noConflict = function () {
            return (g.fn[R] = W), ut._jQueryInterface;
        });
    var ft = "collapse",
        dt = "bs.collapse",
        gt = "." + dt,
        _t = g.fn[ft],
        mt = { toggle: !0, parent: "" },
        pt = { toggle: "boolean", parent: "(string|element)" },
        vt = {
            SHOW: "show" + gt,
            SHOWN: "shown" + gt,
            HIDE: "hide" + gt,
            HIDDEN: "hidden" + gt,
            CLICK_DATA_API: "click" + gt + ".data-api",
        },
        yt = "show",
        Et = "collapse",
        Ct = "collapsing",
        Tt = "collapsed",
        bt = "width",
        St = "height",
        Dt = ".show, .collapsing",
        It = '[data-toggle="collapse"]',
        wt = (function () {
            function a(e, t) {
                (this._isTransitioning = !1),
                    (this._element = e),
                    (this._config = this._getConfig(t)),
                    (this._triggerArray = [].slice.call(
                        document.querySelectorAll(
                            '[data-toggle="collapse"][href="#' +
                                e.id +
                                '"],[data-toggle="collapse"][data-target="#' +
                                e.id +
                                '"]'
                        )
                    ));
                for (
                    var n = [].slice.call(document.querySelectorAll(It)),
                        i = 0,
                        o = n.length;
                    i < o;
                    i++
                ) {
                    var r = n[i],
                        s = _.getSelectorFromElement(r),
                        a = [].slice
                            .call(document.querySelectorAll(s))
                            .filter(function (t) {
                                return t === e;
                            });
                    null !== s &&
                        0 < a.length &&
                        ((this._selector = s), this._triggerArray.push(r));
                }
                (this._parent = this._config.parent ? this._getParent() : null),
                    this._config.parent ||
                        this._addAriaAndCollapsedClass(
                            this._element,
                            this._triggerArray
                        ),
                    this._config.toggle && this.toggle();
            }
            var t = a.prototype;
            return (
                (t.toggle = function () {
                    g(this._element).hasClass(yt) ? this.hide() : this.show();
                }),
                (t.show = function () {
                    var t,
                        e,
                        n = this;
                    if (
                        !this._isTransitioning &&
                        !g(this._element).hasClass(yt) &&
                        (this._parent &&
                            0 ===
                                (t = [].slice
                                    .call(this._parent.querySelectorAll(Dt))
                                    .filter(function (t) {
                                        return "string" ==
                                            typeof n._config.parent
                                            ? t.getAttribute("data-parent") ===
                                                  n._config.parent
                                            : t.classList.contains(Et);
                                    })).length &&
                            (t = null),
                        !(
                            t &&
                            (e = g(t).not(this._selector).data(dt)) &&
                            e._isTransitioning
                        ))
                    ) {
                        var i = g.Event(vt.SHOW);
                        if (
                            (g(this._element).trigger(i),
                            !i.isDefaultPrevented())
                        ) {
                            t &&
                                (a._jQueryInterface.call(
                                    g(t).not(this._selector),
                                    "hide"
                                ),
                                e || g(t).data(dt, null));
                            var o = this._getDimension();
                            g(this._element).removeClass(Et).addClass(Ct),
                                (this._element.style[o] = 0),
                                this._triggerArray.length &&
                                    g(this._triggerArray)
                                        .removeClass(Tt)
                                        .attr("aria-expanded", !0),
                                this.setTransitioning(!0);
                            var r =
                                    "scroll" +
                                    (o[0].toUpperCase() + o.slice(1)),
                                s = _.getTransitionDurationFromElement(
                                    this._element
                                );
                            g(this._element)
                                .one(_.TRANSITION_END, function () {
                                    g(n._element)
                                        .removeClass(Ct)
                                        .addClass(Et)
                                        .addClass(yt),
                                        (n._element.style[o] = ""),
                                        n.setTransitioning(!1),
                                        g(n._element).trigger(vt.SHOWN);
                                })
                                .emulateTransitionEnd(s),
                                (this._element.style[o] =
                                    this._element[r] + "px");
                        }
                    }
                }),
                (t.hide = function () {
                    var t = this;
                    if (
                        !this._isTransitioning &&
                        g(this._element).hasClass(yt)
                    ) {
                        var e = g.Event(vt.HIDE);
                        if (
                            (g(this._element).trigger(e),
                            !e.isDefaultPrevented())
                        ) {
                            var n = this._getDimension();
                            (this._element.style[n] =
                                this._element.getBoundingClientRect()[n] +
                                "px"),
                                _.reflow(this._element),
                                g(this._element)
                                    .addClass(Ct)
                                    .removeClass(Et)
                                    .removeClass(yt);
                            var i = this._triggerArray.length;
                            if (0 < i)
                                for (var o = 0; o < i; o++) {
                                    var r = this._triggerArray[o],
                                        s = _.getSelectorFromElement(r);
                                    if (null !== s)
                                        g(
                                            [].slice.call(
                                                document.querySelectorAll(s)
                                            )
                                        ).hasClass(yt) ||
                                            g(r)
                                                .addClass(Tt)
                                                .attr("aria-expanded", !1);
                                }
                            this.setTransitioning(!0);
                            this._element.style[n] = "";
                            var a = _.getTransitionDurationFromElement(
                                this._element
                            );
                            g(this._element)
                                .one(_.TRANSITION_END, function () {
                                    t.setTransitioning(!1),
                                        g(t._element)
                                            .removeClass(Ct)
                                            .addClass(Et)
                                            .trigger(vt.HIDDEN);
                                })
                                .emulateTransitionEnd(a);
                        }
                    }
                }),
                (t.setTransitioning = function (t) {
                    this._isTransitioning = t;
                }),
                (t.dispose = function () {
                    g.removeData(this._element, dt),
                        (this._config = null),
                        (this._parent = null),
                        (this._element = null),
                        (this._triggerArray = null),
                        (this._isTransitioning = null);
                }),
                (t._getConfig = function (t) {
                    return (
                        ((t = l({}, mt, {}, t)).toggle = Boolean(t.toggle)),
                        _.typeCheckConfig(ft, t, pt),
                        t
                    );
                }),
                (t._getDimension = function () {
                    return g(this._element).hasClass(bt) ? bt : St;
                }),
                (t._getParent = function () {
                    var t,
                        n = this;
                    _.isElement(this._config.parent)
                        ? ((t = this._config.parent),
                          "undefined" != typeof this._config.parent.jquery &&
                              (t = this._config.parent[0]))
                        : (t = document.querySelector(this._config.parent));
                    var e =
                            '[data-toggle="collapse"][data-parent="' +
                            this._config.parent +
                            '"]',
                        i = [].slice.call(t.querySelectorAll(e));
                    return (
                        g(i).each(function (t, e) {
                            n._addAriaAndCollapsedClass(
                                a._getTargetFromElement(e),
                                [e]
                            );
                        }),
                        t
                    );
                }),
                (t._addAriaAndCollapsedClass = function (t, e) {
                    var n = g(t).hasClass(yt);
                    e.length &&
                        g(e).toggleClass(Tt, !n).attr("aria-expanded", n);
                }),
                (a._getTargetFromElement = function (t) {
                    var e = _.getSelectorFromElement(t);
                    return e ? document.querySelector(e) : null;
                }),
                (a._jQueryInterface = function (i) {
                    return this.each(function () {
                        var t = g(this),
                            e = t.data(dt),
                            n = l(
                                {},
                                mt,
                                {},
                                t.data(),
                                {},
                                "object" == typeof i && i ? i : {}
                            );
                        if (
                            (!e &&
                                n.toggle &&
                                /show|hide/.test(i) &&
                                (n.toggle = !1),
                            e || ((e = new a(this, n)), t.data(dt, e)),
                            "string" == typeof i)
                        ) {
                            if ("undefined" == typeof e[i])
                                throw new TypeError(
                                    'No method named "' + i + '"'
                                );
                            e[i]();
                        }
                    });
                }),
                s(a, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.4.1";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return mt;
                        },
                    },
                ]),
                a
            );
        })();
    g(document).on(vt.CLICK_DATA_API, It, function (t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var n = g(this),
            e = _.getSelectorFromElement(this),
            i = [].slice.call(document.querySelectorAll(e));
        g(i).each(function () {
            var t = g(this),
                e = t.data(dt) ? "toggle" : n.data();
            wt._jQueryInterface.call(t, e);
        });
    }),
        (g.fn[ft] = wt._jQueryInterface),
        (g.fn[ft].Constructor = wt),
        (g.fn[ft].noConflict = function () {
            return (g.fn[ft] = _t), wt._jQueryInterface;
        });
    var At = "dropdown",
        Nt = "bs.dropdown",
        Ot = "." + Nt,
        kt = ".data-api",
        Pt = g.fn[At],
        Lt = new RegExp("38|40|27"),
        jt = {
            HIDE: "hide" + Ot,
            HIDDEN: "hidden" + Ot,
            SHOW: "show" + Ot,
            SHOWN: "shown" + Ot,
            CLICK: "click" + Ot,
            CLICK_DATA_API: "click" + Ot + kt,
            KEYDOWN_DATA_API: "keydown" + Ot + kt,
            KEYUP_DATA_API: "keyup" + Ot + kt,
        },
        Ht = "disabled",
        Rt = "show",
        xt = "dropup",
        Ft = "dropright",
        Ut = "dropleft",
        Wt = "dropdown-menu-right",
        qt = "position-static",
        Mt = '[data-toggle="dropdown"]',
        Kt = ".dropdown form",
        Qt = ".dropdown-menu",
        Bt = ".navbar-nav",
        Vt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        Yt = "top-start",
        zt = "top-end",
        Xt = "bottom-start",
        $t = "bottom-end",
        Gt = "right-start",
        Jt = "left-start",
        Zt = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null,
        },
        te = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string",
            popperConfig: "(null|object)",
        },
        ee = (function () {
            function c(t, e) {
                (this._element = t),
                    (this._popper = null),
                    (this._config = this._getConfig(e)),
                    (this._menu = this._getMenuElement()),
                    (this._inNavbar = this._detectNavbar()),
                    this._addEventListeners();
            }
            var t = c.prototype;
            return (
                (t.toggle = function () {
                    if (
                        !this._element.disabled &&
                        !g(this._element).hasClass(Ht)
                    ) {
                        var t = g(this._menu).hasClass(Rt);
                        c._clearMenus(), t || this.show(!0);
                    }
                }),
                (t.show = function (t) {
                    if (
                        (void 0 === t && (t = !1),
                        !(
                            this._element.disabled ||
                            g(this._element).hasClass(Ht) ||
                            g(this._menu).hasClass(Rt)
                        ))
                    ) {
                        var e = { relatedTarget: this._element },
                            n = g.Event(jt.SHOW, e),
                            i = c._getParentFromElement(this._element);
                        if ((g(i).trigger(n), !n.isDefaultPrevented())) {
                            if (!this._inNavbar && t) {
                                if ("undefined" == typeof u)
                                    throw new TypeError(
                                        "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                                    );
                                var o = this._element;
                                "parent" === this._config.reference
                                    ? (o = i)
                                    : _.isElement(this._config.reference) &&
                                      ((o = this._config.reference),
                                      "undefined" !=
                                          typeof this._config.reference
                                              .jquery &&
                                          (o = this._config.reference[0])),
                                    "scrollParent" !== this._config.boundary &&
                                        g(i).addClass(qt),
                                    (this._popper = new u(
                                        o,
                                        this._menu,
                                        this._getPopperConfig()
                                    ));
                            }
                            "ontouchstart" in document.documentElement &&
                                0 === g(i).closest(Bt).length &&
                                g(document.body)
                                    .children()
                                    .on("mouseover", null, g.noop),
                                this._element.focus(),
                                this._element.setAttribute("aria-expanded", !0),
                                g(this._menu).toggleClass(Rt),
                                g(i)
                                    .toggleClass(Rt)
                                    .trigger(g.Event(jt.SHOWN, e));
                        }
                    }
                }),
                (t.hide = function () {
                    if (
                        !this._element.disabled &&
                        !g(this._element).hasClass(Ht) &&
                        g(this._menu).hasClass(Rt)
                    ) {
                        var t = { relatedTarget: this._element },
                            e = g.Event(jt.HIDE, t),
                            n = c._getParentFromElement(this._element);
                        g(n).trigger(e),
                            e.isDefaultPrevented() ||
                                (this._popper && this._popper.destroy(),
                                g(this._menu).toggleClass(Rt),
                                g(n)
                                    .toggleClass(Rt)
                                    .trigger(g.Event(jt.HIDDEN, t)));
                    }
                }),
                (t.dispose = function () {
                    g.removeData(this._element, Nt),
                        g(this._element).off(Ot),
                        (this._element = null),
                        (this._menu = null) !== this._popper &&
                            (this._popper.destroy(), (this._popper = null));
                }),
                (t.update = function () {
                    (this._inNavbar = this._detectNavbar()),
                        null !== this._popper && this._popper.scheduleUpdate();
                }),
                (t._addEventListeners = function () {
                    var e = this;
                    g(this._element).on(jt.CLICK, function (t) {
                        t.preventDefault(), t.stopPropagation(), e.toggle();
                    });
                }),
                (t._getConfig = function (t) {
                    return (
                        (t = l(
                            {},
                            this.constructor.Default,
                            {},
                            g(this._element).data(),
                            {},
                            t
                        )),
                        _.typeCheckConfig(At, t, this.constructor.DefaultType),
                        t
                    );
                }),
                (t._getMenuElement = function () {
                    if (!this._menu) {
                        var t = c._getParentFromElement(this._element);
                        t && (this._menu = t.querySelector(Qt));
                    }
                    return this._menu;
                }),
                (t._getPlacement = function () {
                    var t = g(this._element.parentNode),
                        e = Xt;
                    return (
                        t.hasClass(xt)
                            ? ((e = Yt), g(this._menu).hasClass(Wt) && (e = zt))
                            : t.hasClass(Ft)
                            ? (e = Gt)
                            : t.hasClass(Ut)
                            ? (e = Jt)
                            : g(this._menu).hasClass(Wt) && (e = $t),
                        e
                    );
                }),
                (t._detectNavbar = function () {
                    return 0 < g(this._element).closest(".navbar").length;
                }),
                (t._getOffset = function () {
                    var e = this,
                        t = {};
                    return (
                        "function" == typeof this._config.offset
                            ? (t.fn = function (t) {
                                  return (
                                      (t.offsets = l(
                                          {},
                                          t.offsets,
                                          {},
                                          e._config.offset(
                                              t.offsets,
                                              e._element
                                          ) || {}
                                      )),
                                      t
                                  );
                              })
                            : (t.offset = this._config.offset),
                        t
                    );
                }),
                (t._getPopperConfig = function () {
                    var t = {
                        placement: this._getPlacement(),
                        modifiers: {
                            offset: this._getOffset(),
                            flip: { enabled: this._config.flip },
                            preventOverflow: {
                                boundariesElement: this._config.boundary,
                            },
                        },
                    };
                    return (
                        "static" === this._config.display &&
                            (t.modifiers.applyStyle = { enabled: !1 }),
                        l({}, t, {}, this._config.popperConfig)
                    );
                }),
                (c._jQueryInterface = function (e) {
                    return this.each(function () {
                        var t = g(this).data(Nt);
                        if (
                            (t ||
                                ((t = new c(
                                    this,
                                    "object" == typeof e ? e : null
                                )),
                                g(this).data(Nt, t)),
                            "string" == typeof e)
                        ) {
                            if ("undefined" == typeof t[e])
                                throw new TypeError(
                                    'No method named "' + e + '"'
                                );
                            t[e]();
                        }
                    });
                }),
                (c._clearMenus = function (t) {
                    if (
                        !t ||
                        (3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                    )
                        for (
                            var e = [].slice.call(
                                    document.querySelectorAll(Mt)
                                ),
                                n = 0,
                                i = e.length;
                            n < i;
                            n++
                        ) {
                            var o = c._getParentFromElement(e[n]),
                                r = g(e[n]).data(Nt),
                                s = { relatedTarget: e[n] };
                            if (
                                (t && "click" === t.type && (s.clickEvent = t),
                                r)
                            ) {
                                var a = r._menu;
                                if (
                                    g(o).hasClass(Rt) &&
                                    !(
                                        t &&
                                        (("click" === t.type &&
                                            /input|textarea/i.test(
                                                t.target.tagName
                                            )) ||
                                            ("keyup" === t.type &&
                                                9 === t.which)) &&
                                        g.contains(o, t.target)
                                    )
                                ) {
                                    var l = g.Event(jt.HIDE, s);
                                    g(o).trigger(l),
                                        l.isDefaultPrevented() ||
                                            ("ontouchstart" in
                                                document.documentElement &&
                                                g(document.body)
                                                    .children()
                                                    .off(
                                                        "mouseover",
                                                        null,
                                                        g.noop
                                                    ),
                                            e[n].setAttribute(
                                                "aria-expanded",
                                                "false"
                                            ),
                                            r._popper && r._popper.destroy(),
                                            g(a).removeClass(Rt),
                                            g(o)
                                                .removeClass(Rt)
                                                .trigger(
                                                    g.Event(jt.HIDDEN, s)
                                                ));
                                }
                            }
                        }
                }),
                (c._getParentFromElement = function (t) {
                    var e,
                        n = _.getSelectorFromElement(t);
                    return (
                        n && (e = document.querySelector(n)), e || t.parentNode
                    );
                }),
                (c._dataApiKeydownHandler = function (t) {
                    if (
                        (/input|textarea/i.test(t.target.tagName)
                            ? !(
                                  32 === t.which ||
                                  (27 !== t.which &&
                                      ((40 !== t.which && 38 !== t.which) ||
                                          g(t.target).closest(Qt).length))
                              )
                            : Lt.test(t.which)) &&
                        (t.preventDefault(),
                        t.stopPropagation(),
                        !this.disabled && !g(this).hasClass(Ht))
                    ) {
                        var e = c._getParentFromElement(this),
                            n = g(e).hasClass(Rt);
                        if (n || 27 !== t.which)
                            if (
                                n &&
                                (!n || (27 !== t.which && 32 !== t.which))
                            ) {
                                var i = [].slice
                                    .call(e.querySelectorAll(Vt))
                                    .filter(function (t) {
                                        return g(t).is(":visible");
                                    });
                                if (0 !== i.length) {
                                    var o = i.indexOf(t.target);
                                    38 === t.which && 0 < o && o--,
                                        40 === t.which &&
                                            o < i.length - 1 &&
                                            o++,
                                        o < 0 && (o = 0),
                                        i[o].focus();
                                }
                            } else {
                                if (27 === t.which) {
                                    var r = e.querySelector(Mt);
                                    g(r).trigger("focus");
                                }
                                g(this).trigger("click");
                            }
                    }
                }),
                s(c, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.4.1";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return Zt;
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function () {
                            return te;
                        },
                    },
                ]),
                c
            );
        })();
    g(document)
        .on(jt.KEYDOWN_DATA_API, Mt, ee._dataApiKeydownHandler)
        .on(jt.KEYDOWN_DATA_API, Qt, ee._dataApiKeydownHandler)
        .on(jt.CLICK_DATA_API + " " + jt.KEYUP_DATA_API, ee._clearMenus)
        .on(jt.CLICK_DATA_API, Mt, function (t) {
            t.preventDefault(),
                t.stopPropagation(),
                ee._jQueryInterface.call(g(this), "toggle");
        })
        .on(jt.CLICK_DATA_API, Kt, function (t) {
            t.stopPropagation();
        }),
        (g.fn[At] = ee._jQueryInterface),
        (g.fn[At].Constructor = ee),
        (g.fn[At].noConflict = function () {
            return (g.fn[At] = Pt), ee._jQueryInterface;
        });
    var ne = "modal",
        ie = "bs.modal",
        oe = "." + ie,
        re = g.fn[ne],
        se = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        ae = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean",
        },
        le = {
            HIDE: "hide" + oe,
            HIDE_PREVENTED: "hidePrevented" + oe,
            HIDDEN: "hidden" + oe,
            SHOW: "show" + oe,
            SHOWN: "shown" + oe,
            FOCUSIN: "focusin" + oe,
            RESIZE: "resize" + oe,
            CLICK_DISMISS: "click.dismiss" + oe,
            KEYDOWN_DISMISS: "keydown.dismiss" + oe,
            MOUSEUP_DISMISS: "mouseup.dismiss" + oe,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + oe,
            CLICK_DATA_API: "click" + oe + ".data-api",
        },
        ce = "modal-dialog-scrollable",
        he = "modal-scrollbar-measure",
        ue = "modal-backdrop",
        fe = "modal-open",
        de = "fade",
        ge = "show",
        _e = "modal-static",
        me = ".modal-dialog",
        pe = ".modal-body",
        ve = '[data-toggle="modal"]',
        ye = '[data-dismiss="modal"]',
        Ee = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        Ce = ".sticky-top",
        Te = (function () {
            function o(t, e) {
                (this._config = this._getConfig(e)),
                    (this._element = t),
                    (this._dialog = t.querySelector(me)),
                    (this._backdrop = null),
                    (this._isShown = !1),
                    (this._isBodyOverflowing = !1),
                    (this._ignoreBackdropClick = !1),
                    (this._isTransitioning = !1),
                    (this._scrollbarWidth = 0);
            }
            var t = o.prototype;
            return (
                (t.toggle = function (t) {
                    return this._isShown ? this.hide() : this.show(t);
                }),
                (t.show = function (t) {
                    var e = this;
                    if (!this._isShown && !this._isTransitioning) {
                        g(this._element).hasClass(de) &&
                            (this._isTransitioning = !0);
                        var n = g.Event(le.SHOW, { relatedTarget: t });
                        g(this._element).trigger(n),
                            this._isShown ||
                                n.isDefaultPrevented() ||
                                ((this._isShown = !0),
                                this._checkScrollbar(),
                                this._setScrollbar(),
                                this._adjustDialog(),
                                this._setEscapeEvent(),
                                this._setResizeEvent(),
                                g(this._element).on(
                                    le.CLICK_DISMISS,
                                    ye,
                                    function (t) {
                                        return e.hide(t);
                                    }
                                ),
                                g(this._dialog).on(
                                    le.MOUSEDOWN_DISMISS,
                                    function () {
                                        g(e._element).one(
                                            le.MOUSEUP_DISMISS,
                                            function (t) {
                                                g(t.target).is(e._element) &&
                                                    (e._ignoreBackdropClick =
                                                        !0);
                                            }
                                        );
                                    }
                                ),
                                this._showBackdrop(function () {
                                    return e._showElement(t);
                                }));
                    }
                }),
                (t.hide = function (t) {
                    var e = this;
                    if (
                        (t && t.preventDefault(),
                        this._isShown && !this._isTransitioning)
                    ) {
                        var n = g.Event(le.HIDE);
                        if (
                            (g(this._element).trigger(n),
                            this._isShown && !n.isDefaultPrevented())
                        ) {
                            this._isShown = !1;
                            var i = g(this._element).hasClass(de);
                            if (
                                (i && (this._isTransitioning = !0),
                                this._setEscapeEvent(),
                                this._setResizeEvent(),
                                g(document).off(le.FOCUSIN),
                                g(this._element).removeClass(ge),
                                g(this._element).off(le.CLICK_DISMISS),
                                g(this._dialog).off(le.MOUSEDOWN_DISMISS),
                                i)
                            ) {
                                var o = _.getTransitionDurationFromElement(
                                    this._element
                                );
                                g(this._element)
                                    .one(_.TRANSITION_END, function (t) {
                                        return e._hideModal(t);
                                    })
                                    .emulateTransitionEnd(o);
                            } else this._hideModal();
                        }
                    }
                }),
                (t.dispose = function () {
                    [window, this._element, this._dialog].forEach(function (t) {
                        return g(t).off(oe);
                    }),
                        g(document).off(le.FOCUSIN),
                        g.removeData(this._element, ie),
                        (this._config = null),
                        (this._element = null),
                        (this._dialog = null),
                        (this._backdrop = null),
                        (this._isShown = null),
                        (this._isBodyOverflowing = null),
                        (this._ignoreBackdropClick = null),
                        (this._isTransitioning = null),
                        (this._scrollbarWidth = null);
                }),
                (t.handleUpdate = function () {
                    this._adjustDialog();
                }),
                (t._getConfig = function (t) {
                    return (
                        (t = l({}, se, {}, t)), _.typeCheckConfig(ne, t, ae), t
                    );
                }),
                (t._triggerBackdropTransition = function () {
                    var t = this;
                    if ("static" === this._config.backdrop) {
                        var e = g.Event(le.HIDE_PREVENTED);
                        if ((g(this._element).trigger(e), e.defaultPrevented))
                            return;
                        this._element.classList.add(_e);
                        var n = _.getTransitionDurationFromElement(
                            this._element
                        );
                        g(this._element)
                            .one(_.TRANSITION_END, function () {
                                t._element.classList.remove(_e);
                            })
                            .emulateTransitionEnd(n),
                            this._element.focus();
                    } else this.hide();
                }),
                (t._showElement = function (t) {
                    var e = this,
                        n = g(this._element).hasClass(de),
                        i = this._dialog
                            ? this._dialog.querySelector(pe)
                            : null;
                    (this._element.parentNode &&
                        this._element.parentNode.nodeType ===
                            Node.ELEMENT_NODE) ||
                        document.body.appendChild(this._element),
                        (this._element.style.display = "block"),
                        this._element.removeAttribute("aria-hidden"),
                        this._element.setAttribute("aria-modal", !0),
                        g(this._dialog).hasClass(ce) && i
                            ? (i.scrollTop = 0)
                            : (this._element.scrollTop = 0),
                        n && _.reflow(this._element),
                        g(this._element).addClass(ge),
                        this._config.focus && this._enforceFocus();
                    function o() {
                        e._config.focus && e._element.focus(),
                            (e._isTransitioning = !1),
                            g(e._element).trigger(r);
                    }
                    var r = g.Event(le.SHOWN, { relatedTarget: t });
                    if (n) {
                        var s = _.getTransitionDurationFromElement(
                            this._dialog
                        );
                        g(this._dialog)
                            .one(_.TRANSITION_END, o)
                            .emulateTransitionEnd(s);
                    } else o();
                }),
                (t._enforceFocus = function () {
                    var e = this;
                    g(document)
                        .off(le.FOCUSIN)
                        .on(le.FOCUSIN, function (t) {
                            document !== t.target &&
                                e._element !== t.target &&
                                0 === g(e._element).has(t.target).length &&
                                e._element.focus();
                        });
                }),
                (t._setEscapeEvent = function () {
                    var e = this;
                    this._isShown && this._config.keyboard
                        ? g(this._element).on(le.KEYDOWN_DISMISS, function (t) {
                              27 === t.which && e._triggerBackdropTransition();
                          })
                        : this._isShown ||
                          g(this._element).off(le.KEYDOWN_DISMISS);
                }),
                (t._setResizeEvent = function () {
                    var e = this;
                    this._isShown
                        ? g(window).on(le.RESIZE, function (t) {
                              return e.handleUpdate(t);
                          })
                        : g(window).off(le.RESIZE);
                }),
                (t._hideModal = function () {
                    var t = this;
                    (this._element.style.display = "none"),
                        this._element.setAttribute("aria-hidden", !0),
                        this._element.removeAttribute("aria-modal"),
                        (this._isTransitioning = !1),
                        this._showBackdrop(function () {
                            g(document.body).removeClass(fe),
                                t._resetAdjustments(),
                                t._resetScrollbar(),
                                g(t._element).trigger(le.HIDDEN);
                        });
                }),
                (t._removeBackdrop = function () {
                    this._backdrop &&
                        (g(this._backdrop).remove(), (this._backdrop = null));
                }),
                (t._showBackdrop = function (t) {
                    var e = this,
                        n = g(this._element).hasClass(de) ? de : "";
                    if (this._isShown && this._config.backdrop) {
                        if (
                            ((this._backdrop = document.createElement("div")),
                            (this._backdrop.className = ue),
                            n && this._backdrop.classList.add(n),
                            g(this._backdrop).appendTo(document.body),
                            g(this._element).on(le.CLICK_DISMISS, function (t) {
                                e._ignoreBackdropClick
                                    ? (e._ignoreBackdropClick = !1)
                                    : t.target === t.currentTarget &&
                                      e._triggerBackdropTransition();
                            }),
                            n && _.reflow(this._backdrop),
                            g(this._backdrop).addClass(ge),
                            !t)
                        )
                            return;
                        if (!n) return void t();
                        var i = _.getTransitionDurationFromElement(
                            this._backdrop
                        );
                        g(this._backdrop)
                            .one(_.TRANSITION_END, t)
                            .emulateTransitionEnd(i);
                    } else if (!this._isShown && this._backdrop) {
                        g(this._backdrop).removeClass(ge);
                        var o = function () {
                            e._removeBackdrop(), t && t();
                        };
                        if (g(this._element).hasClass(de)) {
                            var r = _.getTransitionDurationFromElement(
                                this._backdrop
                            );
                            g(this._backdrop)
                                .one(_.TRANSITION_END, o)
                                .emulateTransitionEnd(r);
                        } else o();
                    } else t && t();
                }),
                (t._adjustDialog = function () {
                    var t =
                        this._element.scrollHeight >
                        document.documentElement.clientHeight;
                    !this._isBodyOverflowing &&
                        t &&
                        (this._element.style.paddingLeft =
                            this._scrollbarWidth + "px"),
                        this._isBodyOverflowing &&
                            !t &&
                            (this._element.style.paddingRight =
                                this._scrollbarWidth + "px");
                }),
                (t._resetAdjustments = function () {
                    (this._element.style.paddingLeft = ""),
                        (this._element.style.paddingRight = "");
                }),
                (t._checkScrollbar = function () {
                    var t = document.body.getBoundingClientRect();
                    (this._isBodyOverflowing =
                        t.left + t.right < window.innerWidth),
                        (this._scrollbarWidth = this._getScrollbarWidth());
                }),
                (t._setScrollbar = function () {
                    var o = this;
                    if (this._isBodyOverflowing) {
                        var t = [].slice.call(document.querySelectorAll(Ee)),
                            e = [].slice.call(document.querySelectorAll(Ce));
                        g(t).each(function (t, e) {
                            var n = e.style.paddingRight,
                                i = g(e).css("padding-right");
                            g(e)
                                .data("padding-right", n)
                                .css(
                                    "padding-right",
                                    parseFloat(i) + o._scrollbarWidth + "px"
                                );
                        }),
                            g(e).each(function (t, e) {
                                var n = e.style.marginRight,
                                    i = g(e).css("margin-right");
                                g(e)
                                    .data("margin-right", n)
                                    .css(
                                        "margin-right",
                                        parseFloat(i) - o._scrollbarWidth + "px"
                                    );
                            });
                        var n = document.body.style.paddingRight,
                            i = g(document.body).css("padding-right");
                        g(document.body)
                            .data("padding-right", n)
                            .css(
                                "padding-right",
                                parseFloat(i) + this._scrollbarWidth + "px"
                            );
                    }
                    g(document.body).addClass(fe);
                }),
                (t._resetScrollbar = function () {
                    var t = [].slice.call(document.querySelectorAll(Ee));
                    g(t).each(function (t, e) {
                        var n = g(e).data("padding-right");
                        g(e).removeData("padding-right"),
                            (e.style.paddingRight = n || "");
                    });
                    var e = [].slice.call(document.querySelectorAll("" + Ce));
                    g(e).each(function (t, e) {
                        var n = g(e).data("margin-right");
                        "undefined" != typeof n &&
                            g(e)
                                .css("margin-right", n)
                                .removeData("margin-right");
                    });
                    var n = g(document.body).data("padding-right");
                    g(document.body).removeData("padding-right"),
                        (document.body.style.paddingRight = n || "");
                }),
                (t._getScrollbarWidth = function () {
                    var t = document.createElement("div");
                    (t.className = he), document.body.appendChild(t);
                    var e = t.getBoundingClientRect().width - t.clientWidth;
                    return document.body.removeChild(t), e;
                }),
                (o._jQueryInterface = function (n, i) {
                    return this.each(function () {
                        var t = g(this).data(ie),
                            e = l(
                                {},
                                se,
                                {},
                                g(this).data(),
                                {},
                                "object" == typeof n && n ? n : {}
                            );
                        if (
                            (t || ((t = new o(this, e)), g(this).data(ie, t)),
                            "string" == typeof n)
                        ) {
                            if ("undefined" == typeof t[n])
                                throw new TypeError(
                                    'No method named "' + n + '"'
                                );
                            t[n](i);
                        } else e.show && t.show(i);
                    });
                }),
                s(o, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.4.1";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return se;
                        },
                    },
                ]),
                o
            );
        })();
    g(document).on(le.CLICK_DATA_API, ve, function (t) {
        var e,
            n = this,
            i = _.getSelectorFromElement(this);
        i && (e = document.querySelector(i));
        var o = g(e).data(ie)
            ? "toggle"
            : l({}, g(e).data(), {}, g(this).data());
        ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
        var r = g(e).one(le.SHOW, function (t) {
            t.isDefaultPrevented() ||
                r.one(le.HIDDEN, function () {
                    g(n).is(":visible") && n.focus();
                });
        });
        Te._jQueryInterface.call(g(e), o, this);
    }),
        (g.fn[ne] = Te._jQueryInterface),
        (g.fn[ne].Constructor = Te),
        (g.fn[ne].noConflict = function () {
            return (g.fn[ne] = re), Te._jQueryInterface;
        });
    var be = [
            "background",
            "cite",
            "href",
            "itemtype",
            "longdesc",
            "poster",
            "src",
            "xlink:href",
        ],
        Se = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: [],
        },
        De = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        Ie =
            /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
    function we(t, r, e) {
        if (0 === t.length) return t;
        if (e && "function" == typeof e) return e(t);
        for (
            var n = new window.DOMParser().parseFromString(t, "text/html"),
                s = Object.keys(r),
                a = [].slice.call(n.body.querySelectorAll("*")),
                i = function (t) {
                    var e = a[t],
                        n = e.nodeName.toLowerCase();
                    if (-1 === s.indexOf(e.nodeName.toLowerCase()))
                        return e.parentNode.removeChild(e), "continue";
                    var i = [].slice.call(e.attributes),
                        o = [].concat(r["*"] || [], r[n] || []);
                    i.forEach(function (t) {
                        !(function (t, e) {
                            var n = t.nodeName.toLowerCase();
                            if (-1 !== e.indexOf(n))
                                return (
                                    -1 === be.indexOf(n) ||
                                    Boolean(
                                        t.nodeValue.match(De) ||
                                            t.nodeValue.match(Ie)
                                    )
                                );
                            for (
                                var i = e.filter(function (t) {
                                        return t instanceof RegExp;
                                    }),
                                    o = 0,
                                    r = i.length;
                                o < r;
                                o++
                            )
                                if (n.match(i[o])) return !0;
                            return !1;
                        })(t, o) && e.removeAttribute(t.nodeName);
                    });
                },
                o = 0,
                l = a.length;
            o < l;
            o++
        )
            i(o);
        return n.body.innerHTML;
    }
    var Ae = "tooltip",
        Ne = "bs.tooltip",
        Oe = "." + Ne,
        ke = g.fn[Ae],
        Pe = "bs-tooltip",
        Le = new RegExp("(^|\\s)" + Pe + "\\S+", "g"),
        je = ["sanitize", "whiteList", "sanitizeFn"],
        He = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object",
            popperConfig: "(null|object)",
        },
        Re = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left",
        },
        xe = {
            animation: !0,
            template:
                '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: Se,
            popperConfig: null,
        },
        Fe = "show",
        Ue = "out",
        We = {
            HIDE: "hide" + Oe,
            HIDDEN: "hidden" + Oe,
            SHOW: "show" + Oe,
            SHOWN: "shown" + Oe,
            INSERTED: "inserted" + Oe,
            CLICK: "click" + Oe,
            FOCUSIN: "focusin" + Oe,
            FOCUSOUT: "focusout" + Oe,
            MOUSEENTER: "mouseenter" + Oe,
            MOUSELEAVE: "mouseleave" + Oe,
        },
        qe = "fade",
        Me = "show",
        Ke = ".tooltip-inner",
        Qe = ".arrow",
        Be = "hover",
        Ve = "focus",
        Ye = "click",
        ze = "manual",
        Xe = (function () {
            function i(t, e) {
                if ("undefined" == typeof u)
                    throw new TypeError(
                        "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
                    );
                (this._isEnabled = !0),
                    (this._timeout = 0),
                    (this._hoverState = ""),
                    (this._activeTrigger = {}),
                    (this._popper = null),
                    (this.element = t),
                    (this.config = this._getConfig(e)),
                    (this.tip = null),
                    this._setListeners();
            }
            var t = i.prototype;
            return (
                (t.enable = function () {
                    this._isEnabled = !0;
                }),
                (t.disable = function () {
                    this._isEnabled = !1;
                }),
                (t.toggleEnabled = function () {
                    this._isEnabled = !this._isEnabled;
                }),
                (t.toggle = function (t) {
                    if (this._isEnabled)
                        if (t) {
                            var e = this.constructor.DATA_KEY,
                                n = g(t.currentTarget).data(e);
                            n ||
                                ((n = new this.constructor(
                                    t.currentTarget,
                                    this._getDelegateConfig()
                                )),
                                g(t.currentTarget).data(e, n)),
                                (n._activeTrigger.click =
                                    !n._activeTrigger.click),
                                n._isWithActiveTrigger()
                                    ? n._enter(null, n)
                                    : n._leave(null, n);
                        } else {
                            if (g(this.getTipElement()).hasClass(Me))
                                return void this._leave(null, this);
                            this._enter(null, this);
                        }
                }),
                (t.dispose = function () {
                    clearTimeout(this._timeout),
                        g.removeData(this.element, this.constructor.DATA_KEY),
                        g(this.element).off(this.constructor.EVENT_KEY),
                        g(this.element)
                            .closest(".modal")
                            .off("hide.bs.modal", this._hideModalHandler),
                        this.tip && g(this.tip).remove(),
                        (this._isEnabled = null),
                        (this._timeout = null),
                        (this._hoverState = null),
                        (this._activeTrigger = null),
                        this._popper && this._popper.destroy(),
                        (this._popper = null),
                        (this.element = null),
                        (this.config = null),
                        (this.tip = null);
                }),
                (t.show = function () {
                    var e = this;
                    if ("none" === g(this.element).css("display"))
                        throw new Error("Please use show on visible elements");
                    var t = g.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        g(this.element).trigger(t);
                        var n = _.findShadowRoot(this.element),
                            i = g.contains(
                                null !== n
                                    ? n
                                    : this.element.ownerDocument
                                          .documentElement,
                                this.element
                            );
                        if (t.isDefaultPrevented() || !i) return;
                        var o = this.getTipElement(),
                            r = _.getUID(this.constructor.NAME);
                        o.setAttribute("id", r),
                            this.element.setAttribute("aria-describedby", r),
                            this.setContent(),
                            this.config.animation && g(o).addClass(qe);
                        var s =
                                "function" == typeof this.config.placement
                                    ? this.config.placement.call(
                                          this,
                                          o,
                                          this.element
                                      )
                                    : this.config.placement,
                            a = this._getAttachment(s);
                        this.addAttachmentClass(a);
                        var l = this._getContainer();
                        g(o).data(this.constructor.DATA_KEY, this),
                            g.contains(
                                this.element.ownerDocument.documentElement,
                                this.tip
                            ) || g(o).appendTo(l),
                            g(this.element).trigger(
                                this.constructor.Event.INSERTED
                            ),
                            (this._popper = new u(
                                this.element,
                                o,
                                this._getPopperConfig(a)
                            )),
                            g(o).addClass(Me),
                            "ontouchstart" in document.documentElement &&
                                g(document.body)
                                    .children()
                                    .on("mouseover", null, g.noop);
                        var c = function () {
                            e.config.animation && e._fixTransition();
                            var t = e._hoverState;
                            (e._hoverState = null),
                                g(e.element).trigger(e.constructor.Event.SHOWN),
                                t === Ue && e._leave(null, e);
                        };
                        if (g(this.tip).hasClass(qe)) {
                            var h = _.getTransitionDurationFromElement(
                                this.tip
                            );
                            g(this.tip)
                                .one(_.TRANSITION_END, c)
                                .emulateTransitionEnd(h);
                        } else c();
                    }
                }),
                (t.hide = function (t) {
                    function e() {
                        n._hoverState !== Fe &&
                            i.parentNode &&
                            i.parentNode.removeChild(i),
                            n._cleanTipClass(),
                            n.element.removeAttribute("aria-describedby"),
                            g(n.element).trigger(n.constructor.Event.HIDDEN),
                            null !== n._popper && n._popper.destroy(),
                            t && t();
                    }
                    var n = this,
                        i = this.getTipElement(),
                        o = g.Event(this.constructor.Event.HIDE);
                    if ((g(this.element).trigger(o), !o.isDefaultPrevented())) {
                        if (
                            (g(i).removeClass(Me),
                            "ontouchstart" in document.documentElement &&
                                g(document.body)
                                    .children()
                                    .off("mouseover", null, g.noop),
                            (this._activeTrigger[Ye] = !1),
                            (this._activeTrigger[Ve] = !1),
                            (this._activeTrigger[Be] = !1),
                            g(this.tip).hasClass(qe))
                        ) {
                            var r = _.getTransitionDurationFromElement(i);
                            g(i)
                                .one(_.TRANSITION_END, e)
                                .emulateTransitionEnd(r);
                        } else e();
                        this._hoverState = "";
                    }
                }),
                (t.update = function () {
                    null !== this._popper && this._popper.scheduleUpdate();
                }),
                (t.isWithContent = function () {
                    return Boolean(this.getTitle());
                }),
                (t.addAttachmentClass = function (t) {
                    g(this.getTipElement()).addClass(Pe + "-" + t);
                }),
                (t.getTipElement = function () {
                    return (
                        (this.tip = this.tip || g(this.config.template)[0]),
                        this.tip
                    );
                }),
                (t.setContent = function () {
                    var t = this.getTipElement();
                    this.setElementContent(
                        g(t.querySelectorAll(Ke)),
                        this.getTitle()
                    ),
                        g(t).removeClass(qe + " " + Me);
                }),
                (t.setElementContent = function (t, e) {
                    "object" != typeof e || (!e.nodeType && !e.jquery)
                        ? this.config.html
                            ? (this.config.sanitize &&
                                  (e = we(
                                      e,
                                      this.config.whiteList,
                                      this.config.sanitizeFn
                                  )),
                              t.html(e))
                            : t.text(e)
                        : this.config.html
                        ? g(e).parent().is(t) || t.empty().append(e)
                        : t.text(g(e).text());
                }),
                (t.getTitle = function () {
                    var t = this.element.getAttribute("data-original-title");
                    return (t =
                        t ||
                        ("function" == typeof this.config.title
                            ? this.config.title.call(this.element)
                            : this.config.title));
                }),
                (t._getPopperConfig = function (t) {
                    var e = this;
                    return l(
                        {},
                        {
                            placement: t,
                            modifiers: {
                                offset: this._getOffset(),
                                flip: {
                                    behavior: this.config.fallbackPlacement,
                                },
                                arrow: { element: Qe },
                                preventOverflow: {
                                    boundariesElement: this.config.boundary,
                                },
                            },
                            onCreate: function (t) {
                                t.originalPlacement !== t.placement &&
                                    e._handlePopperPlacementChange(t);
                            },
                            onUpdate: function (t) {
                                return e._handlePopperPlacementChange(t);
                            },
                        },
                        {},
                        this.config.popperConfig
                    );
                }),
                (t._getOffset = function () {
                    var e = this,
                        t = {};
                    return (
                        "function" == typeof this.config.offset
                            ? (t.fn = function (t) {
                                  return (
                                      (t.offsets = l(
                                          {},
                                          t.offsets,
                                          {},
                                          e.config.offset(
                                              t.offsets,
                                              e.element
                                          ) || {}
                                      )),
                                      t
                                  );
                              })
                            : (t.offset = this.config.offset),
                        t
                    );
                }),
                (t._getContainer = function () {
                    return !1 === this.config.container
                        ? document.body
                        : _.isElement(this.config.container)
                        ? g(this.config.container)
                        : g(document).find(this.config.container);
                }),
                (t._getAttachment = function (t) {
                    return Re[t.toUpperCase()];
                }),
                (t._setListeners = function () {
                    var i = this;
                    this.config.trigger.split(" ").forEach(function (t) {
                        if ("click" === t)
                            g(i.element).on(
                                i.constructor.Event.CLICK,
                                i.config.selector,
                                function (t) {
                                    return i.toggle(t);
                                }
                            );
                        else if (t !== ze) {
                            var e =
                                    t === Be
                                        ? i.constructor.Event.MOUSEENTER
                                        : i.constructor.Event.FOCUSIN,
                                n =
                                    t === Be
                                        ? i.constructor.Event.MOUSELEAVE
                                        : i.constructor.Event.FOCUSOUT;
                            g(i.element)
                                .on(e, i.config.selector, function (t) {
                                    return i._enter(t);
                                })
                                .on(n, i.config.selector, function (t) {
                                    return i._leave(t);
                                });
                        }
                    }),
                        (this._hideModalHandler = function () {
                            i.element && i.hide();
                        }),
                        g(this.element)
                            .closest(".modal")
                            .on("hide.bs.modal", this._hideModalHandler),
                        this.config.selector
                            ? (this.config = l({}, this.config, {
                                  trigger: "manual",
                                  selector: "",
                              }))
                            : this._fixTitle();
                }),
                (t._fixTitle = function () {
                    var t = typeof this.element.getAttribute(
                        "data-original-title"
                    );
                    (!this.element.getAttribute("title") && "string" == t) ||
                        (this.element.setAttribute(
                            "data-original-title",
                            this.element.getAttribute("title") || ""
                        ),
                        this.element.setAttribute("title", ""));
                }),
                (t._enter = function (t, e) {
                    var n = this.constructor.DATA_KEY;
                    (e = e || g(t.currentTarget).data(n)) ||
                        ((e = new this.constructor(
                            t.currentTarget,
                            this._getDelegateConfig()
                        )),
                        g(t.currentTarget).data(n, e)),
                        t &&
                            (e._activeTrigger["focusin" === t.type ? Ve : Be] =
                                !0),
                        g(e.getTipElement()).hasClass(Me) ||
                        e._hoverState === Fe
                            ? (e._hoverState = Fe)
                            : (clearTimeout(e._timeout),
                              (e._hoverState = Fe),
                              e.config.delay && e.config.delay.show
                                  ? (e._timeout = setTimeout(function () {
                                        e._hoverState === Fe && e.show();
                                    }, e.config.delay.show))
                                  : e.show());
                }),
                (t._leave = function (t, e) {
                    var n = this.constructor.DATA_KEY;
                    (e = e || g(t.currentTarget).data(n)) ||
                        ((e = new this.constructor(
                            t.currentTarget,
                            this._getDelegateConfig()
                        )),
                        g(t.currentTarget).data(n, e)),
                        t &&
                            (e._activeTrigger["focusout" === t.type ? Ve : Be] =
                                !1),
                        e._isWithActiveTrigger() ||
                            (clearTimeout(e._timeout),
                            (e._hoverState = Ue),
                            e.config.delay && e.config.delay.hide
                                ? (e._timeout = setTimeout(function () {
                                      e._hoverState === Ue && e.hide();
                                  }, e.config.delay.hide))
                                : e.hide());
                }),
                (t._isWithActiveTrigger = function () {
                    for (var t in this._activeTrigger)
                        if (this._activeTrigger[t]) return !0;
                    return !1;
                }),
                (t._getConfig = function (t) {
                    var e = g(this.element).data();
                    return (
                        Object.keys(e).forEach(function (t) {
                            -1 !== je.indexOf(t) && delete e[t];
                        }),
                        "number" ==
                            typeof (t = l(
                                {},
                                this.constructor.Default,
                                {},
                                e,
                                {},
                                "object" == typeof t && t ? t : {}
                            )).delay &&
                            (t.delay = { show: t.delay, hide: t.delay }),
                        "number" == typeof t.title &&
                            (t.title = t.title.toString()),
                        "number" == typeof t.content &&
                            (t.content = t.content.toString()),
                        _.typeCheckConfig(Ae, t, this.constructor.DefaultType),
                        t.sanitize &&
                            (t.template = we(
                                t.template,
                                t.whiteList,
                                t.sanitizeFn
                            )),
                        t
                    );
                }),
                (t._getDelegateConfig = function () {
                    var t = {};
                    if (this.config)
                        for (var e in this.config)
                            this.constructor.Default[e] !== this.config[e] &&
                                (t[e] = this.config[e]);
                    return t;
                }),
                (t._cleanTipClass = function () {
                    var t = g(this.getTipElement()),
                        e = t.attr("class").match(Le);
                    null !== e && e.length && t.removeClass(e.join(""));
                }),
                (t._handlePopperPlacementChange = function (t) {
                    var e = t.instance;
                    (this.tip = e.popper),
                        this._cleanTipClass(),
                        this.addAttachmentClass(
                            this._getAttachment(t.placement)
                        );
                }),
                (t._fixTransition = function () {
                    var t = this.getTipElement(),
                        e = this.config.animation;
                    null === t.getAttribute("x-placement") &&
                        (g(t).removeClass(qe),
                        (this.config.animation = !1),
                        this.hide(),
                        this.show(),
                        (this.config.animation = e));
                }),
                (i._jQueryInterface = function (n) {
                    return this.each(function () {
                        var t = g(this).data(Ne),
                            e = "object" == typeof n && n;
                        if (
                            (t || !/dispose|hide/.test(n)) &&
                            (t || ((t = new i(this, e)), g(this).data(Ne, t)),
                            "string" == typeof n)
                        ) {
                            if ("undefined" == typeof t[n])
                                throw new TypeError(
                                    'No method named "' + n + '"'
                                );
                            t[n]();
                        }
                    });
                }),
                s(i, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.4.1";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return xe;
                        },
                    },
                    {
                        key: "NAME",
                        get: function () {
                            return Ae;
                        },
                    },
                    {
                        key: "DATA_KEY",
                        get: function () {
                            return Ne;
                        },
                    },
                    {
                        key: "Event",
                        get: function () {
                            return We;
                        },
                    },
                    {
                        key: "EVENT_KEY",
                        get: function () {
                            return Oe;
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function () {
                            return He;
                        },
                    },
                ]),
                i
            );
        })();
    (g.fn[Ae] = Xe._jQueryInterface),
        (g.fn[Ae].Constructor = Xe),
        (g.fn[Ae].noConflict = function () {
            return (g.fn[Ae] = ke), Xe._jQueryInterface;
        });
    var $e = "popover",
        Ge = "bs.popover",
        Je = "." + Ge,
        Ze = g.fn[$e],
        tn = "bs-popover",
        en = new RegExp("(^|\\s)" + tn + "\\S+", "g"),
        nn = l({}, Xe.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template:
                '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        }),
        on = l({}, Xe.DefaultType, { content: "(string|element|function)" }),
        rn = "fade",
        sn = "show",
        an = ".popover-header",
        ln = ".popover-body",
        cn = {
            HIDE: "hide" + Je,
            HIDDEN: "hidden" + Je,
            SHOW: "show" + Je,
            SHOWN: "shown" + Je,
            INSERTED: "inserted" + Je,
            CLICK: "click" + Je,
            FOCUSIN: "focusin" + Je,
            FOCUSOUT: "focusout" + Je,
            MOUSEENTER: "mouseenter" + Je,
            MOUSELEAVE: "mouseleave" + Je,
        },
        hn = (function (t) {
            function i() {
                return t.apply(this, arguments) || this;
            }
            !(function (t, e) {
                (t.prototype = Object.create(e.prototype)),
                    ((t.prototype.constructor = t).__proto__ = e);
            })(i, t);
            var e = i.prototype;
            return (
                (e.isWithContent = function () {
                    return this.getTitle() || this._getContent();
                }),
                (e.addAttachmentClass = function (t) {
                    g(this.getTipElement()).addClass(tn + "-" + t);
                }),
                (e.getTipElement = function () {
                    return (
                        (this.tip = this.tip || g(this.config.template)[0]),
                        this.tip
                    );
                }),
                (e.setContent = function () {
                    var t = g(this.getTipElement());
                    this.setElementContent(t.find(an), this.getTitle());
                    var e = this._getContent();
                    "function" == typeof e && (e = e.call(this.element)),
                        this.setElementContent(t.find(ln), e),
                        t.removeClass(rn + " " + sn);
                }),
                (e._getContent = function () {
                    return (
                        this.element.getAttribute("data-content") ||
                        this.config.content
                    );
                }),
                (e._cleanTipClass = function () {
                    var t = g(this.getTipElement()),
                        e = t.attr("class").match(en);
                    null !== e && 0 < e.length && t.removeClass(e.join(""));
                }),
                (i._jQueryInterface = function (n) {
                    return this.each(function () {
                        var t = g(this).data(Ge),
                            e = "object" == typeof n ? n : null;
                        if (
                            (t || !/dispose|hide/.test(n)) &&
                            (t || ((t = new i(this, e)), g(this).data(Ge, t)),
                            "string" == typeof n)
                        ) {
                            if ("undefined" == typeof t[n])
                                throw new TypeError(
                                    'No method named "' + n + '"'
                                );
                            t[n]();
                        }
                    });
                }),
                s(i, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.4.1";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return nn;
                        },
                    },
                    {
                        key: "NAME",
                        get: function () {
                            return $e;
                        },
                    },
                    {
                        key: "DATA_KEY",
                        get: function () {
                            return Ge;
                        },
                    },
                    {
                        key: "Event",
                        get: function () {
                            return cn;
                        },
                    },
                    {
                        key: "EVENT_KEY",
                        get: function () {
                            return Je;
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function () {
                            return on;
                        },
                    },
                ]),
                i
            );
        })(Xe);
    (g.fn[$e] = hn._jQueryInterface),
        (g.fn[$e].Constructor = hn),
        (g.fn[$e].noConflict = function () {
            return (g.fn[$e] = Ze), hn._jQueryInterface;
        });
    var un = "scrollspy",
        fn = "bs.scrollspy",
        dn = "." + fn,
        gn = g.fn[un],
        _n = { offset: 10, method: "auto", target: "" },
        mn = { offset: "number", method: "string", target: "(string|element)" },
        pn = {
            ACTIVATE: "activate" + dn,
            SCROLL: "scroll" + dn,
            LOAD_DATA_API: "load" + dn + ".data-api",
        },
        vn = "dropdown-item",
        yn = "active",
        En = '[data-spy="scroll"]',
        Cn = ".nav, .list-group",
        Tn = ".nav-link",
        bn = ".nav-item",
        Sn = ".list-group-item",
        Dn = ".dropdown",
        In = ".dropdown-item",
        wn = ".dropdown-toggle",
        An = "offset",
        Nn = "position",
        On = (function () {
            function n(t, e) {
                var n = this;
                (this._element = t),
                    (this._scrollElement = "BODY" === t.tagName ? window : t),
                    (this._config = this._getConfig(e)),
                    (this._selector =
                        this._config.target +
                        " " +
                        Tn +
                        "," +
                        this._config.target +
                        " " +
                        Sn +
                        "," +
                        this._config.target +
                        " " +
                        In),
                    (this._offsets = []),
                    (this._targets = []),
                    (this._activeTarget = null),
                    (this._scrollHeight = 0),
                    g(this._scrollElement).on(pn.SCROLL, function (t) {
                        return n._process(t);
                    }),
                    this.refresh(),
                    this._process();
            }
            var t = n.prototype;
            return (
                (t.refresh = function () {
                    var e = this,
                        t =
                            this._scrollElement === this._scrollElement.window
                                ? An
                                : Nn,
                        o =
                            "auto" === this._config.method
                                ? t
                                : this._config.method,
                        r = o === Nn ? this._getScrollTop() : 0;
                    (this._offsets = []),
                        (this._targets = []),
                        (this._scrollHeight = this._getScrollHeight()),
                        [].slice
                            .call(document.querySelectorAll(this._selector))
                            .map(function (t) {
                                var e,
                                    n = _.getSelectorFromElement(t);
                                if ((n && (e = document.querySelector(n)), e)) {
                                    var i = e.getBoundingClientRect();
                                    if (i.width || i.height)
                                        return [g(e)[o]().top + r, n];
                                }
                                return null;
                            })
                            .filter(function (t) {
                                return t;
                            })
                            .sort(function (t, e) {
                                return t[0] - e[0];
                            })
                            .forEach(function (t) {
                                e._offsets.push(t[0]), e._targets.push(t[1]);
                            });
                }),
                (t.dispose = function () {
                    g.removeData(this._element, fn),
                        g(this._scrollElement).off(dn),
                        (this._element = null),
                        (this._scrollElement = null),
                        (this._config = null),
                        (this._selector = null),
                        (this._offsets = null),
                        (this._targets = null),
                        (this._activeTarget = null),
                        (this._scrollHeight = null);
                }),
                (t._getConfig = function (t) {
                    if (
                        "string" !=
                        typeof (t = l(
                            {},
                            _n,
                            {},
                            "object" == typeof t && t ? t : {}
                        )).target
                    ) {
                        var e = g(t.target).attr("id");
                        e || ((e = _.getUID(un)), g(t.target).attr("id", e)),
                            (t.target = "#" + e);
                    }
                    return _.typeCheckConfig(un, t, mn), t;
                }),
                (t._getScrollTop = function () {
                    return this._scrollElement === window
                        ? this._scrollElement.pageYOffset
                        : this._scrollElement.scrollTop;
                }),
                (t._getScrollHeight = function () {
                    return (
                        this._scrollElement.scrollHeight ||
                        Math.max(
                            document.body.scrollHeight,
                            document.documentElement.scrollHeight
                        )
                    );
                }),
                (t._getOffsetHeight = function () {
                    return this._scrollElement === window
                        ? window.innerHeight
                        : this._scrollElement.getBoundingClientRect().height;
                }),
                (t._process = function () {
                    var t = this._getScrollTop() + this._config.offset,
                        e = this._getScrollHeight(),
                        n = this._config.offset + e - this._getOffsetHeight();
                    if ((this._scrollHeight !== e && this.refresh(), n <= t)) {
                        var i = this._targets[this._targets.length - 1];
                        this._activeTarget !== i && this._activate(i);
                    } else {
                        if (
                            this._activeTarget &&
                            t < this._offsets[0] &&
                            0 < this._offsets[0]
                        )
                            return (
                                (this._activeTarget = null), void this._clear()
                            );
                        for (var o = this._offsets.length; o--; ) {
                            this._activeTarget !== this._targets[o] &&
                                t >= this._offsets[o] &&
                                ("undefined" == typeof this._offsets[o + 1] ||
                                    t < this._offsets[o + 1]) &&
                                this._activate(this._targets[o]);
                        }
                    }
                }),
                (t._activate = function (e) {
                    (this._activeTarget = e), this._clear();
                    var t = this._selector.split(",").map(function (t) {
                            return (
                                t +
                                '[data-target="' +
                                e +
                                '"],' +
                                t +
                                '[href="' +
                                e +
                                '"]'
                            );
                        }),
                        n = g(
                            [].slice.call(
                                document.querySelectorAll(t.join(","))
                            )
                        );
                    n.hasClass(vn)
                        ? (n.closest(Dn).find(wn).addClass(yn), n.addClass(yn))
                        : (n.addClass(yn),
                          n
                              .parents(Cn)
                              .prev(Tn + ", " + Sn)
                              .addClass(yn),
                          n.parents(Cn).prev(bn).children(Tn).addClass(yn)),
                        g(this._scrollElement).trigger(pn.ACTIVATE, {
                            relatedTarget: e,
                        });
                }),
                (t._clear = function () {
                    [].slice
                        .call(document.querySelectorAll(this._selector))
                        .filter(function (t) {
                            return t.classList.contains(yn);
                        })
                        .forEach(function (t) {
                            return t.classList.remove(yn);
                        });
                }),
                (n._jQueryInterface = function (e) {
                    return this.each(function () {
                        var t = g(this).data(fn);
                        if (
                            (t ||
                                ((t = new n(this, "object" == typeof e && e)),
                                g(this).data(fn, t)),
                            "string" == typeof e)
                        ) {
                            if ("undefined" == typeof t[e])
                                throw new TypeError(
                                    'No method named "' + e + '"'
                                );
                            t[e]();
                        }
                    });
                }),
                s(n, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.4.1";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return _n;
                        },
                    },
                ]),
                n
            );
        })();
    g(window).on(pn.LOAD_DATA_API, function () {
        for (
            var t = [].slice.call(document.querySelectorAll(En)), e = t.length;
            e--;

        ) {
            var n = g(t[e]);
            On._jQueryInterface.call(n, n.data());
        }
    }),
        (g.fn[un] = On._jQueryInterface),
        (g.fn[un].Constructor = On),
        (g.fn[un].noConflict = function () {
            return (g.fn[un] = gn), On._jQueryInterface;
        });
    var kn = "bs.tab",
        Pn = "." + kn,
        Ln = g.fn.tab,
        jn = {
            HIDE: "hide" + Pn,
            HIDDEN: "hidden" + Pn,
            SHOW: "show" + Pn,
            SHOWN: "shown" + Pn,
            CLICK_DATA_API: "click" + Pn + ".data-api",
        },
        Hn = "dropdown-menu",
        Rn = "active",
        xn = "disabled",
        Fn = "fade",
        Un = "show",
        Wn = ".dropdown",
        qn = ".nav, .list-group",
        Mn = ".active",
        Kn = "> li > .active",
        Qn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        Bn = ".dropdown-toggle",
        Vn = "> .dropdown-menu .active",
        Yn = (function () {
            function i(t) {
                this._element = t;
            }
            var t = i.prototype;
            return (
                (t.show = function () {
                    var n = this;
                    if (
                        !(
                            (this._element.parentNode &&
                                this._element.parentNode.nodeType ===
                                    Node.ELEMENT_NODE &&
                                g(this._element).hasClass(Rn)) ||
                            g(this._element).hasClass(xn)
                        )
                    ) {
                        var t,
                            i,
                            e = g(this._element).closest(qn)[0],
                            o = _.getSelectorFromElement(this._element);
                        if (e) {
                            var r =
                                "UL" === e.nodeName || "OL" === e.nodeName
                                    ? Kn
                                    : Mn;
                            i = (i = g.makeArray(g(e).find(r)))[i.length - 1];
                        }
                        var s = g.Event(jn.HIDE, {
                                relatedTarget: this._element,
                            }),
                            a = g.Event(jn.SHOW, { relatedTarget: i });
                        if (
                            (i && g(i).trigger(s),
                            g(this._element).trigger(a),
                            !a.isDefaultPrevented() && !s.isDefaultPrevented())
                        ) {
                            o && (t = document.querySelector(o)),
                                this._activate(this._element, e);
                            var l = function () {
                                var t = g.Event(jn.HIDDEN, {
                                        relatedTarget: n._element,
                                    }),
                                    e = g.Event(jn.SHOWN, { relatedTarget: i });
                                g(i).trigger(t), g(n._element).trigger(e);
                            };
                            t ? this._activate(t, t.parentNode, l) : l();
                        }
                    }
                }),
                (t.dispose = function () {
                    g.removeData(this._element, kn), (this._element = null);
                }),
                (t._activate = function (t, e, n) {
                    function i() {
                        return o._transitionComplete(t, r, n);
                    }
                    var o = this,
                        r = (
                            !e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
                                ? g(e).children(Mn)
                                : g(e).find(Kn)
                        )[0],
                        s = n && r && g(r).hasClass(Fn);
                    if (r && s) {
                        var a = _.getTransitionDurationFromElement(r);
                        g(r)
                            .removeClass(Un)
                            .one(_.TRANSITION_END, i)
                            .emulateTransitionEnd(a);
                    } else i();
                }),
                (t._transitionComplete = function (t, e, n) {
                    if (e) {
                        g(e).removeClass(Rn);
                        var i = g(e.parentNode).find(Vn)[0];
                        i && g(i).removeClass(Rn),
                            "tab" === e.getAttribute("role") &&
                                e.setAttribute("aria-selected", !1);
                    }
                    if (
                        (g(t).addClass(Rn),
                        "tab" === t.getAttribute("role") &&
                            t.setAttribute("aria-selected", !0),
                        _.reflow(t),
                        t.classList.contains(Fn) && t.classList.add(Un),
                        t.parentNode && g(t.parentNode).hasClass(Hn))
                    ) {
                        var o = g(t).closest(Wn)[0];
                        if (o) {
                            var r = [].slice.call(o.querySelectorAll(Bn));
                            g(r).addClass(Rn);
                        }
                        t.setAttribute("aria-expanded", !0);
                    }
                    n && n();
                }),
                (i._jQueryInterface = function (n) {
                    return this.each(function () {
                        var t = g(this),
                            e = t.data(kn);
                        if (
                            (e || ((e = new i(this)), t.data(kn, e)),
                            "string" == typeof n)
                        ) {
                            if ("undefined" == typeof e[n])
                                throw new TypeError(
                                    'No method named "' + n + '"'
                                );
                            e[n]();
                        }
                    });
                }),
                s(i, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.4.1";
                        },
                    },
                ]),
                i
            );
        })();
    g(document).on(jn.CLICK_DATA_API, Qn, function (t) {
        t.preventDefault(), Yn._jQueryInterface.call(g(this), "show");
    }),
        (g.fn.tab = Yn._jQueryInterface),
        (g.fn.tab.Constructor = Yn),
        (g.fn.tab.noConflict = function () {
            return (g.fn.tab = Ln), Yn._jQueryInterface;
        });
    var zn = "toast",
        Xn = "bs.toast",
        $n = "." + Xn,
        Gn = g.fn[zn],
        Jn = {
            CLICK_DISMISS: "click.dismiss" + $n,
            HIDE: "hide" + $n,
            HIDDEN: "hidden" + $n,
            SHOW: "show" + $n,
            SHOWN: "shown" + $n,
        },
        Zn = "fade",
        ti = "hide",
        ei = "show",
        ni = "showing",
        ii = { animation: "boolean", autohide: "boolean", delay: "number" },
        oi = { animation: !0, autohide: !0, delay: 500 },
        ri = '[data-dismiss="toast"]',
        si = (function () {
            function i(t, e) {
                (this._element = t),
                    (this._config = this._getConfig(e)),
                    (this._timeout = null),
                    this._setListeners();
            }
            var t = i.prototype;
            return (
                (t.show = function () {
                    var t = this,
                        e = g.Event(Jn.SHOW);
                    if (
                        (g(this._element).trigger(e), !e.isDefaultPrevented())
                    ) {
                        this._config.animation &&
                            this._element.classList.add(Zn);
                        var n = function () {
                            t._element.classList.remove(ni),
                                t._element.classList.add(ei),
                                g(t._element).trigger(Jn.SHOWN),
                                t._config.autohide &&
                                    (t._timeout = setTimeout(function () {
                                        t.hide();
                                    }, t._config.delay));
                        };
                        if (
                            (this._element.classList.remove(ti),
                            _.reflow(this._element),
                            this._element.classList.add(ni),
                            this._config.animation)
                        ) {
                            var i = _.getTransitionDurationFromElement(
                                this._element
                            );
                            g(this._element)
                                .one(_.TRANSITION_END, n)
                                .emulateTransitionEnd(i);
                        } else n();
                    }
                }),
                (t.hide = function () {
                    if (this._element.classList.contains(ei)) {
                        var t = g.Event(Jn.HIDE);
                        g(this._element).trigger(t),
                            t.isDefaultPrevented() || this._close();
                    }
                }),
                (t.dispose = function () {
                    clearTimeout(this._timeout),
                        (this._timeout = null),
                        this._element.classList.contains(ei) &&
                            this._element.classList.remove(ei),
                        g(this._element).off(Jn.CLICK_DISMISS),
                        g.removeData(this._element, Xn),
                        (this._element = null),
                        (this._config = null);
                }),
                (t._getConfig = function (t) {
                    return (
                        (t = l(
                            {},
                            oi,
                            {},
                            g(this._element).data(),
                            {},
                            "object" == typeof t && t ? t : {}
                        )),
                        _.typeCheckConfig(zn, t, this.constructor.DefaultType),
                        t
                    );
                }),
                (t._setListeners = function () {
                    var t = this;
                    g(this._element).on(Jn.CLICK_DISMISS, ri, function () {
                        return t.hide();
                    });
                }),
                (t._close = function () {
                    function t() {
                        e._element.classList.add(ti),
                            g(e._element).trigger(Jn.HIDDEN);
                    }
                    var e = this;
                    if (
                        (this._element.classList.remove(ei),
                        this._config.animation)
                    ) {
                        var n = _.getTransitionDurationFromElement(
                            this._element
                        );
                        g(this._element)
                            .one(_.TRANSITION_END, t)
                            .emulateTransitionEnd(n);
                    } else t();
                }),
                (i._jQueryInterface = function (n) {
                    return this.each(function () {
                        var t = g(this),
                            e = t.data(Xn);
                        if (
                            (e ||
                                ((e = new i(this, "object" == typeof n && n)),
                                t.data(Xn, e)),
                            "string" == typeof n)
                        ) {
                            if ("undefined" == typeof e[n])
                                throw new TypeError(
                                    'No method named "' + n + '"'
                                );
                            e[n](this);
                        }
                    });
                }),
                s(i, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.4.1";
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function () {
                            return ii;
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return oi;
                        },
                    },
                ]),
                i
            );
        })();
    (g.fn[zn] = si._jQueryInterface),
        (g.fn[zn].Constructor = si),
        (g.fn[zn].noConflict = function () {
            return (g.fn[zn] = Gn), si._jQueryInterface;
        }),
        (t.Alert = v),
        (t.Button = H),
        (t.Carousel = ut),
        (t.Collapse = wt),
        (t.Dropdown = ee),
        (t.Modal = Te),
        (t.Popover = hn),
        (t.Scrollspy = On),
        (t.Tab = Yn),
        (t.Toast = si),
        (t.Tooltip = Xe),
        (t.Util = _),
        Object.defineProperty(t, "__esModule", { value: !0 });
});

(function (global, factory) {
    typeof exports === "object" && typeof module !== "undefined"
        ? (module.exports = factory())
        : typeof define === "function" && define.amd
        ? define(factory)
        : (global.moment = factory());
})(this, function () {
    "use strict";

    var hookCallback;

    function hooks() {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback(callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return (
            input instanceof Array ||
            Object.prototype.toString.call(input) === "[object Array]"
        );
    }

    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return (
            input != null &&
            Object.prototype.toString.call(input) === "[object Object]"
        );
    }

    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
            return Object.getOwnPropertyNames(obj).length === 0;
        } else {
            var k;
            for (k in obj) {
                if (obj.hasOwnProperty(k)) {
                    return false;
                }
            }
            return true;
        }
    }

    function isUndefined(input) {
        return input === void 0;
    }

    function isNumber(input) {
        return (
            typeof input === "number" ||
            Object.prototype.toString.call(input) === "[object Number]"
        );
    }

    function isDate(input) {
        return (
            input instanceof Date ||
            Object.prototype.toString.call(input) === "[object Date]"
        );
    }

    function map(arr, fn) {
        var res = [],
            i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, "toString")) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, "valueOf")) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function createUTC(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: false,
            weekdayMismatch: false,
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function (fun) {
            var t = Object(this);
            var len = t.length >>> 0;

            for (var i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            var parsedParts = some.call(flags.parsedDateParts, function (i) {
                return i != null;
            });
            var isNowValid =
                !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.weekdayMismatch &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated &&
                (!flags.meridiem || (flags.meridiem && parsedParts));

            if (m._strict) {
                isNowValid =
                    isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
            } else {
                return isNowValid;
            }
        }
        return m._isValid;
    }

    function createInvalid(flags) {
        var m = createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        } else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = (hooks.momentProperties = []);

    function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i = 0; i < momentProperties.length; i++) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    var updateInProgress = false;

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN);
        }
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment(obj) {
        return (
            obj instanceof Moment ||
            (obj != null && obj._isAMomentObject != null)
        );
    }

    function absFloor(number) {
        if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if (
                (dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))
            ) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function warn(msg) {
        if (
            hooks.suppressDeprecationWarnings === false &&
            typeof console !== "undefined" &&
            console.warn
        ) {
            console.warn("Deprecation warning: " + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [];
                var arg;
                for (var i = 0; i < arguments.length; i++) {
                    arg = "";
                    if (typeof arguments[i] === "object") {
                        arg += "\n[" + i + "] ";
                        for (var key in arguments[0]) {
                            arg += key + ": " + arguments[0][key] + ", ";
                        }
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(
                    msg +
                        "\nArguments: " +
                        Array.prototype.slice.call(args).join("") +
                        "\n" +
                        new Error().stack
                );
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
        return (
            input instanceof Function ||
            Object.prototype.toString.call(input) === "[object Function]"
        );
    }

    function set(config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (isFunction(prop)) {
                this[i] = prop;
            } else {
                this["_" + i] = prop;
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
                "|" +
                /\d{1,2}/.source
        );
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig),
            prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (
                    isObject(parentConfig[prop]) &&
                    isObject(childConfig[prop])
                ) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (
                hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])
            ) {
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    var keys;

    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function (obj) {
            var i,
                res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }

    var defaultCalendar = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L",
    };

    function calendar(key, mom, now) {
        var output = this._calendar[key] || this._calendar["sameElse"];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A",
    };

    function longDateFormat(key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper.replace(
            /MMMM|MM|DD|dddd/g,
            function (val) {
                return val.slice(1);
            }
        );

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = "Invalid date";

    function invalidDate() {
        return this._invalidDate;
    }

    var defaultOrdinal = "%d";
    var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal(number) {
        return this._ordinal.replace("%d", number);
    }

    var defaultRelativeTime = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years",
    };

    function relativeTime(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return isFunction(output)
            ? output(number, withoutSuffix, string, isFuture)
            : output.replace(/%d/i, number);
    }

    function pastFuture(diff, output) {
        var format = this._relativeTime[diff > 0 ? "future" : "past"];
        return isFunction(format)
            ? format(output)
            : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias(unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] =
            aliases[lowerCase + "s"] =
            aliases[shorthand] =
                unit;
    }

    function normalizeUnits(units) {
        return typeof units === "string"
            ? aliases[units] || aliases[units.toLowerCase()]
            : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
        var units = [];
        for (var u in unitsObj) {
            units.push({ unit: u, priority: priorities[u] });
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = "" + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (
            (sign ? (forceSign ? "+" : "") : "-") +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) +
            absNumber
        );
    }

    var formattingTokens =
        /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

    var formatFunctions = {};

    var formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken(token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === "string") {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(
                    func.apply(this, arguments),
                    padded[1],
                    padded[2]
                );
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(
                    func.apply(this, arguments),
                    token
                );
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, "");
        }
        return input.replace(/\\/g, "");
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens),
            i,
            length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = "",
                i;
            for (i = 0; i < length; i++) {
                output += isFunction(array[i])
                    ? array[i].call(mom, format)
                    : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] =
            formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(
                localFormattingTokens,
                replaceLongDateFormatTokens
            );
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var match1 = /\d/; //       0 - 9
    var match2 = /\d\d/; //      00 - 99
    var match3 = /\d{3}/; //     000 - 999
    var match4 = /\d{4}/; //    0000 - 9999
    var match6 = /[+-]?\d{6}/; // -999999 - 999999
    var match1to2 = /\d\d?/; //       0 - 99
    var match3to4 = /\d\d\d\d?/; //     999 - 9999
    var match5to6 = /\d\d\d\d\d\d?/; //   99999 - 999999
    var match1to3 = /\d{1,3}/; //       0 - 999
    var match1to4 = /\d{1,4}/; //       0 - 9999
    var match1to6 = /[+-]?\d{1,6}/; // -999999 - 999999

    var matchUnsigned = /\d+/; //       0 - inf
    var matchSigned = /[+-]?\d+/; //    -inf - inf

    var matchOffset = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    var matchWord =
        /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

    var regexes = {};

    function addRegexToken(token, regex, strictRegex) {
        regexes[token] = isFunction(regex)
            ? regex
            : function (isStrict, localeData) {
                  return isStrict && strictRegex ? strictRegex : regex;
              };
    }

    function getParseRegexForToken(token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(
            s
                .replace("\\", "")
                .replace(
                    /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                    function (matched, p1, p2, p3, p4) {
                        return p1 || p2 || p3 || p4;
                    }
                )
        );
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }

    var tokens = {};

    function addParseToken(token, callback) {
        var i,
            func = callback;
        if (typeof token === "string") {
            token = [token];
        }
        if (isNumber(callback)) {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken(token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    var WEEK = 7;
    var WEEKDAY = 8;

    // FORMATTING

    addFormatToken("Y", 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? "" + y : "+" + y;
    });

    addFormatToken(0, ["YY", 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ["YYYY", 4], 0, "year");
    addFormatToken(0, ["YYYYY", 5], 0, "year");
    addFormatToken(0, ["YYYYYY", 6, true], 0, "year");

    // ALIASES

    addUnitAlias("year", "y");

    // PRIORITIES

    addUnitPriority("year", 1);

    // PARSING

    addRegexToken("Y", matchSigned);
    addRegexToken("YY", match1to2, match2);
    addRegexToken("YYYY", match1to4, match4);
    addRegexToken("YYYYY", match1to6, match6);
    addRegexToken("YYYYYY", match1to6, match6);

    addParseToken(["YYYYY", "YYYYYY"], YEAR);
    addParseToken("YYYY", function (input, array) {
        array[YEAR] =
            input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken("YY", function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken("Y", function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    // HOOKS

    hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet("FullYear", true);

    function getIsLeapYear() {
        return isLeapYear(this.year());
    }

    function makeGetSet(unit, keepTime) {
        return function (value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get(this, unit);
            }
        };
    }

    function get(mom, unit) {
        return mom.isValid()
            ? mom._d["get" + (mom._isUTC ? "UTC" : "") + unit]()
            : NaN;
    }

    function set$1(mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (
                unit === "FullYear" &&
                isLeapYear(mom.year()) &&
                mom.month() === 1 &&
                mom.date() === 29
            ) {
                mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](
                    value,
                    mom.month(),
                    daysInMonth(value, mom.month())
                );
            } else {
                mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value);
            }
        }
    }

    // MOMENTS

    function stringGet(units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }

    function stringSet(units, value) {
        if (typeof units === "object") {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units);
            for (var i = 0; i < prioritized.length; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    function mod(n, x) {
        return ((n % x) + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (o) {
            // I know
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }

    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1
            ? isLeapYear(year)
                ? 29
                : 28
            : 31 - ((modMonth % 7) % 2);
    }

    // FORMATTING

    addFormatToken("M", ["MM", 2], "Mo", function () {
        return this.month() + 1;
    });

    addFormatToken("MMM", 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken("MMMM", 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias("month", "M");

    // PRIORITY

    addUnitPriority("month", 8);

    // PARSING

    addRegexToken("M", match1to2);
    addRegexToken("MM", match1to2, match2);
    addRegexToken("MMM", function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken("MMMM", function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(["M", "MM"], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(["MMM", "MMMM"], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    var defaultLocaleMonths =
        "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
        );
    function localeMonths(m, format) {
        if (!m) {
            return isArray(this._months)
                ? this._months
                : this._months["standalone"];
        }
        return isArray(this._months)
            ? this._months[m.month()]
            : this._months[
                  (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
                      ? "format"
                      : "standalone"
              ][m.month()];
    }

    var defaultLocaleMonthsShort =
        "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
    function localeMonthsShort(m, format) {
        if (!m) {
            return isArray(this._monthsShort)
                ? this._monthsShort
                : this._monthsShort["standalone"];
        }
        return isArray(this._monthsShort)
            ? this._monthsShort[m.month()]
            : this._monthsShort[
                  MONTHS_IN_FORMAT.test(format) ? "format" : "standalone"
              ][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
        var i,
            ii,
            mom,
            llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(
                    mom,
                    ""
                ).toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(
                    mom,
                    ""
                ).toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === "MMM") {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === "MMM") {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeMonthsParse(monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp(
                    "^" + this.months(mom, "").replace(".", "") + "$",
                    "i"
                );
                this._shortMonthsParse[i] = new RegExp(
                    "^" + this.monthsShort(mom, "").replace(".", "") + "$",
                    "i"
                );
            }
            if (!strict && !this._monthsParse[i]) {
                regex =
                    "^" +
                    this.months(mom, "") +
                    "|^" +
                    this.monthsShort(mom, "");
                this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i");
            }
            // test the regex
            if (
                strict &&
                format === "MMMM" &&
                this._longMonthsParse[i].test(monthName)
            ) {
                return i;
            } else if (
                strict &&
                format === "MMM" &&
                this._shortMonthsParse[i].test(monthName)
            ) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth(mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        if (typeof value === "string") {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) {
                    return mom;
                }
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d["set" + (mom._isUTC ? "UTC" : "") + "Month"](value, dayOfMonth);
        return mom;
    }

    function getSetMonth(value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else {
            return get(this, "Month");
        }
    }

    function getDaysInMonth() {
        return daysInMonth(this.year(), this.month());
    }

    var defaultMonthsShortRegex = matchWord;
    function monthsShortRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, "_monthsRegex")) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            if (!hasOwnProp(this, "_monthsShortRegex")) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict
                ? this._monthsShortStrictRegex
                : this._monthsShortRegex;
        }
    }

    var defaultMonthsRegex = matchWord;
    function monthsRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, "_monthsRegex")) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            if (!hasOwnProp(this, "_monthsRegex")) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict
                ? this._monthsStrictRegex
                : this._monthsRegex;
        }
    }

    function computeMonthsParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ""));
            longPieces.push(this.months(mom, ""));
            mixedPieces.push(this.months(mom, ""));
            mixedPieces.push(this.monthsShort(mom, ""));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp(
            "^(" + longPieces.join("|") + ")",
            "i"
        );
        this._monthsShortStrictRegex = new RegExp(
            "^(" + shortPieces.join("|") + ")",
            "i"
        );
    }

    function createDate(y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date = new Date(y, m, d, h, M, s, ms);

        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
            date.setFullYear(y);
        }
        return date;
    }

    function createUTCDate(y) {
        var date = new Date(Date.UTC.apply(null, arguments));

        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
            date.setUTCFullYear(y);
        }
        return date;
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear,
            resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear,
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek,
            resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear,
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // FORMATTING

    addFormatToken("w", ["ww", 2], "wo", "week");
    addFormatToken("W", ["WW", 2], "Wo", "isoWeek");

    // ALIASES

    addUnitAlias("week", "w");
    addUnitAlias("isoWeek", "W");

    // PRIORITIES

    addUnitPriority("week", 5);
    addUnitPriority("isoWeek", 5);

    // PARSING

    addRegexToken("w", match1to2);
    addRegexToken("ww", match1to2, match2);
    addRegexToken("W", match1to2);
    addRegexToken("WW", match1to2, match2);

    addWeekParseToken(
        ["w", "ww", "W", "WW"],
        function (input, week, config, token) {
            week[token.substr(0, 1)] = toInt(input);
        }
    );

    // HELPERS

    // LOCALES

    function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow: 0, // Sunday is the first day of the week.
        doy: 6, // The week that contains Jan 1st is the first week of the year.
    };

    function localeFirstDayOfWeek() {
        return this._week.dow;
    }

    function localeFirstDayOfYear() {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek(input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, "d");
    }

    function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, "d");
    }

    // FORMATTING

    addFormatToken("d", 0, "do", "day");

    addFormatToken("dd", 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken("ddd", 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken("dddd", 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken("e", 0, 0, "weekday");
    addFormatToken("E", 0, 0, "isoWeekday");

    // ALIASES

    addUnitAlias("day", "d");
    addUnitAlias("weekday", "e");
    addUnitAlias("isoWeekday", "E");

    // PRIORITY
    addUnitPriority("day", 11);
    addUnitPriority("weekday", 11);
    addUnitPriority("isoWeekday", 11);

    // PARSING

    addRegexToken("d", match1to2);
    addRegexToken("e", match1to2);
    addRegexToken("E", match1to2);
    addRegexToken("dd", function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken("ddd", function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken("dddd", function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(
        ["dd", "ddd", "dddd"],
        function (input, week, config, token) {
            var weekday = config._locale.weekdaysParse(
                input,
                token,
                config._strict
            );
            // if we didn't get a weekday name, mark the date as invalid
            if (weekday != null) {
                week.d = weekday;
            } else {
                getParsingFlags(config).invalidWeekday = input;
            }
        }
    );

    addWeekParseToken(["d", "e", "E"], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== "string") {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === "number") {
            return input;
        }

        return null;
    }

    function parseIsoWeekday(input, locale) {
        if (typeof input === "string") {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }

    // LOCALES

    var defaultLocaleWeekdays =
        "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
    function localeWeekdays(m, format) {
        if (!m) {
            return isArray(this._weekdays)
                ? this._weekdays
                : this._weekdays["standalone"];
        }
        return isArray(this._weekdays)
            ? this._weekdays[m.day()]
            : this._weekdays[
                  this._weekdays.isFormat.test(format) ? "format" : "standalone"
              ][m.day()];
    }

    var defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
    function localeWeekdaysShort(m) {
        return m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
    }

    var defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    function localeWeekdaysMin(m) {
        return m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
        var i,
            ii,
            mom,
            llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
                mom = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(
                    mom,
                    ""
                ).toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(
                    mom,
                    ""
                ).toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(
                    mom,
                    ""
                ).toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === "dddd") {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === "ddd") {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === "dddd") {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === "ddd") {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeWeekdaysParse(weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp(
                    "^" + this.weekdays(mom, "").replace(".", ".?") + "$",
                    "i"
                );
                this._shortWeekdaysParse[i] = new RegExp(
                    "^" + this.weekdaysShort(mom, "").replace(".", ".?") + "$",
                    "i"
                );
                this._minWeekdaysParse[i] = new RegExp(
                    "^" + this.weekdaysMin(mom, "").replace(".", ".?") + "$",
                    "i"
                );
            }
            if (!this._weekdaysParse[i]) {
                regex =
                    "^" +
                    this.weekdays(mom, "") +
                    "|^" +
                    this.weekdaysShort(mom, "") +
                    "|^" +
                    this.weekdaysMin(mom, "");
                this._weekdaysParse[i] = new RegExp(
                    regex.replace(".", ""),
                    "i"
                );
            }
            // test the regex
            if (
                strict &&
                format === "dddd" &&
                this._fullWeekdaysParse[i].test(weekdayName)
            ) {
                return i;
            } else if (
                strict &&
                format === "ddd" &&
                this._shortWeekdaysParse[i].test(weekdayName)
            ) {
                return i;
            } else if (
                strict &&
                format === "dd" &&
                this._minWeekdaysParse[i].test(weekdayName)
            ) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, "d");
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, "d");
    }

    function getSetISODayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }

        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.

        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
            return this.day() || 7;
        }
    }

    var defaultWeekdaysRegex = matchWord;
    function weekdaysRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, "_weekdaysRegex")) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            if (!hasOwnProp(this, "_weekdaysRegex")) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict
                ? this._weekdaysStrictRegex
                : this._weekdaysRegex;
        }
    }

    var defaultWeekdaysShortRegex = matchWord;
    function weekdaysShortRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, "_weekdaysRegex")) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            if (!hasOwnProp(this, "_weekdaysShortRegex")) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict
                ? this._weekdaysShortStrictRegex
                : this._weekdaysShortRegex;
        }
    }

    var defaultWeekdaysMinRegex = matchWord;
    function weekdaysMinRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, "_weekdaysRegex")) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            if (!hasOwnProp(this, "_weekdaysMinRegex")) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict
                ? this._weekdaysMinStrictRegex
                : this._weekdaysMinRegex;
        }
    }

    function computeWeekdaysParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var minPieces = [],
            shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom,
            minp,
            shortp,
            longp;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);
            minp = this.weekdaysMin(mom, "");
            shortp = this.weekdaysShort(mom, "");
            longp = this.weekdays(mom, "");
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 7; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._weekdaysRegex = new RegExp(
            "^(" + mixedPieces.join("|") + ")",
            "i"
        );
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp(
            "^(" + longPieces.join("|") + ")",
            "i"
        );
        this._weekdaysShortStrictRegex = new RegExp(
            "^(" + shortPieces.join("|") + ")",
            "i"
        );
        this._weekdaysMinStrictRegex = new RegExp(
            "^(" + minPieces.join("|") + ")",
            "i"
        );
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    function kFormat() {
        return this.hours() || 24;
    }

    addFormatToken("H", ["HH", 2], 0, "hour");
    addFormatToken("h", ["hh", 2], 0, hFormat);
    addFormatToken("k", ["kk", 2], 0, kFormat);

    addFormatToken("hmm", 0, 0, function () {
        return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken("hmmss", 0, 0, function () {
        return (
            "" +
            hFormat.apply(this) +
            zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2)
        );
    });

    addFormatToken("Hmm", 0, 0, function () {
        return "" + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken("Hmmss", 0, 0, function () {
        return (
            "" +
            this.hours() +
            zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2)
        );
    });

    function meridiem(token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(
                this.hours(),
                this.minutes(),
                lowercase
            );
        });
    }

    meridiem("a", true);
    meridiem("A", false);

    // ALIASES

    addUnitAlias("hour", "h");

    // PRIORITY
    addUnitPriority("hour", 13);

    // PARSING

    function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken("a", matchMeridiem);
    addRegexToken("A", matchMeridiem);
    addRegexToken("H", match1to2);
    addRegexToken("h", match1to2);
    addRegexToken("k", match1to2);
    addRegexToken("HH", match1to2, match2);
    addRegexToken("hh", match1to2, match2);
    addRegexToken("kk", match1to2, match2);

    addRegexToken("hmm", match3to4);
    addRegexToken("hmmss", match5to6);
    addRegexToken("Hmm", match3to4);
    addRegexToken("Hmmss", match5to6);

    addParseToken(["H", "HH"], HOUR);
    addParseToken(["k", "kk"], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(["a", "A"], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(["h", "hh"], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken("hmm", function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken("hmmss", function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken("Hmm", function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken("Hmmss", function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM(input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return (input + "").toLowerCase().charAt(0) === "p";
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem(hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? "pm" : "PM";
        } else {
            return isLower ? "am" : "AM";
        }
    }

    // MOMENTS

    // Setting the hour should keep the time, because the user explicitly
    // specified which hour he wants. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    var getSetHour = makeGetSet("Hours", true);

    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse,
    };

    // internal storage for locale config files
    var locales = {};
    var localeFamilies = {};
    var globalLocale;

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace("_", "-") : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0,
            j,
            next,
            locale,
            split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split("-");
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split("-") : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join("-"));
                if (locale) {
                    return locale;
                }
                if (
                    next &&
                    next.length >= j &&
                    compareArrays(split, next, true) >= j - 1
                ) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return globalLocale;
    }

    function loadLocale(name) {
        var oldLocale = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (
            !locales[name] &&
            typeof module !== "undefined" &&
            module &&
            module.exports
        ) {
            try {
                oldLocale = globalLocale._abbr;
                var aliasedRequire = require;
                aliasedRequire("./locale/" + name);
                getSetGlobalLocale(oldLocale);
            } catch (e) {}
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale(key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            } else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            } else {
                if (typeof console !== "undefined" && console.warn) {
                    //warn user if arguments are passed but the locale could not be set
                    console.warn(
                        "Locale " +
                            key +
                            " not found. Did you forget to load it?"
                    );
                }
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale(name, config) {
        if (config !== null) {
            var locale,
                parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple(
                    "defineLocaleOverride",
                    "use moment.updateLocale(localeName, config) to change " +
                        "an existing locale. moment.defineLocale(localeName, " +
                        "config) should only be used for creating a new locale " +
                        "See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
                );
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                } else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) {
                        parentConfig = locale._config;
                    } else {
                        if (!localeFamilies[config.parentLocale]) {
                            localeFamilies[config.parentLocale] = [];
                        }
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config,
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (localeFamilies[name]) {
                localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                });
            }

            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);

            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale,
                tmpLocale,
                parentConfig = baseConfig;
            // MERGE
            tmpLocale = loadLocale(name);
            if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
            }
            config = mergeConfigs(parentConfig, config);
            locale = new Locale(config);
            locale.parentLocale = locales[name];
            locales[name] = locale;

            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

    // returns locale data
    function getLocale(key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function listLocales() {
        return keys(locales);
    }

    function checkOverflow(m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH] < 0 || a[MONTH] > 11
                    ? MONTH
                    : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH])
                    ? DATE
                    : a[HOUR] < 0 ||
                      a[HOUR] > 24 ||
                      (a[HOUR] === 24 &&
                          (a[MINUTE] !== 0 ||
                              a[SECOND] !== 0 ||
                              a[MILLISECOND] !== 0))
                    ? HOUR
                    : a[MINUTE] < 0 || a[MINUTE] > 59
                    ? MINUTE
                    : a[SECOND] < 0 || a[SECOND] > 59
                    ? SECOND
                    : a[MILLISECOND] < 0 || a[MILLISECOND] > 999
                    ? MILLISECOND
                    : -1;

            if (
                getParsingFlags(m)._overflowDayOfYear &&
                (overflow < YEAR || overflow > DATE)
            ) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
            return [
                nowValue.getUTCFullYear(),
                nowValue.getUTCMonth(),
                nowValue.getUTCDate(),
            ];
        }
        return [
            nowValue.getFullYear(),
            nowValue.getMonth(),
            nowValue.getDate(),
        ];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray(config) {
        var i,
            date,
            input = [],
            currentDate,
            expectedWeekday,
            yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (
                config._dayOfYear > daysInYear(yearToUse) ||
                config._dayOfYear === 0
            ) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] =
                config._a[i] == null ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (
            config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0
        ) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(
            null,
            input
        );
        expectedWeekday = config._useUTC
            ? config._d.getUTCDay()
            : config._d.getDay();

        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }

        // check for mismatching day of week
        if (
            config._w &&
            typeof config._w.d !== "undefined" &&
            config._w.d !== expectedWeekday
        ) {
            getParsingFlags(config).weekdayMismatch = true;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(
                w.GG,
                config._a[YEAR],
                weekOfYear(createLocal(), 1, 4).year
            );
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            var curWeek = weekOfYear(createLocal(), dow, doy);

            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

            // Default to current week.
            week = defaults(w.w, curWeek.week);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from begining of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to begining of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex =
        /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var basicIsoRegex =
        /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

    var isoDates = [
        ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
        ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
        ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
        ["GGGG-[W]WW", /\d{4}-W\d\d/, false],
        ["YYYY-DDD", /\d{4}-\d{3}/],
        ["YYYY-MM", /\d{4}-\d\d/, false],
        ["YYYYYYMMDD", /[+-]\d{10}/],
        ["YYYYMMDD", /\d{8}/],
        // YYYYMM is NOT allowed by the standard
        ["GGGG[W]WWE", /\d{4}W\d{3}/],
        ["GGGG[W]WW", /\d{4}W\d{2}/, false],
        ["YYYYDDD", /\d{7}/],
    ];

    // iso time formats and regexes
    var isoTimes = [
        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
        ["HH:mm", /\d\d:\d\d/],
        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
        ["HHmmss", /\d\d\d\d\d\d/],
        ["HHmm", /\d\d\d\d/],
        ["HH", /\d\d/],
    ];

    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

    // date from iso format
    function configFromISO(config) {
        var i,
            l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime,
            dateFormat,
            timeFormat,
            tzFormat;

        if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || " ") + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = "Z";
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || "") + (tzFormat || "");
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    var rfc2822 =
        /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

    function extractFromRFC2822Strings(
        yearStr,
        monthStr,
        dayStr,
        hourStr,
        minuteStr,
        secondStr
    ) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10),
        ];

        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }

        return result;
    }

    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
            return 2000 + year;
        } else if (year <= 999) {
            return 1900 + year;
        }
        return year;
    }

    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s
            .replace(/\([^)]*\)|[\n\t]/g, " ")
            .replace(/(\s\s+)/g, " ")
            .trim();
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
            var weekdayProvided =
                    defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                weekdayActual = new Date(
                    parsedInput[0],
                    parsedInput[1],
                    parsedInput[2]
                ).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }

    var obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60,
    };

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        } else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
        } else {
            var hm = parseInt(numOffset, 10);
            var m = hm % 100,
                h = (hm - m) / 100;
            return h * 60 + m;
        }
    }

    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i));
        if (match) {
            var parsedArray = extractFromRFC2822Strings(
                match[4],
                match[3],
                match[2],
                match[5],
                match[6],
                match[7]
            );
            if (!checkWeekday(match[1], parsedArray, config)) {
                return;
            }

            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);

            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

            getParsingFlags(config).rfc2822 = true;
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        // Final attempt, use Input Fallback
        hooks.createFromInputFallback(config);
    }

    hooks.createFromInputFallback = deprecate(
        "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), " +
            "which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are " +
            "discouraged and will be removed in an upcoming major release. Please refer to " +
            "http://momentjs.com/guides/#/warnings/js-date/ for more info.",
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? " UTC" : ""));
        }
    );

    // constant that refers to the ISO standard
    hooks.ISO_8601 = function () {};

    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = "" + config._i,
            i,
            parsedInput,
            tokens,
            token,
            skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens =
            expandFormat(config._f, config._locale).match(formattingTokens) ||
            [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) ||
                [])[0];
            // console.log('token', token, 'parsedInput', parsedInput,
            //         'regex', getParseRegexForToken(token, config));
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(
                    string.indexOf(parsedInput) + parsedInput.length
                );
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                } else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            } else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver =
            stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (
            config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0
        ) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(
            config._locale,
            config._a[HOUR],
            config._meridiem
        );

        configFromArray(config);
        checkOverflow(config);
    }

    function meridiemFixWrap(locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig, bestMoment, scoreToBeat, i, currentScore;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore +=
                getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = map(
            [
                i.year,
                i.month,
                i.day || i.date,
                i.hour,
                i.minute,
                i.second,
                i.millisecond,
            ],
            function (obj) {
                return obj && parseInt(obj, 10);
            }
        );

        configFromArray(config);
    }

    function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, "d");
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig(config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || getLocale(config._l);

        if (input === null || (format === undefined && input === "")) {
            return createInvalid({ nullInput: true });
        }

        if (typeof input === "string") {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
            config._d = input;
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        } else {
            configFromInput(config);
        }

        if (!isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
            config._d = new Date(hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === "string") {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) {
            configFromObject(config);
        } else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        } else {
            hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC(input, format, locale, strict, isUTC) {
        var c = {};

        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }

        if (
            (isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)
        ) {
            input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function createLocal(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
        "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other < this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    var prototypeMax = deprecate(
        "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other > this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min() {
        var args = [].slice.call(arguments, 0);

        return pickBy("isBefore", args);
    }

    function max() {
        var args = [].slice.call(arguments, 0);

        return pickBy("isAfter", args);
    }

    var now = function () {
        return Date.now ? Date.now() : +new Date();
    };

    var ordering = [
        "year",
        "quarter",
        "month",
        "week",
        "day",
        "hour",
        "minute",
        "second",
        "millisecond",
    ];

    function isDurationValid(m) {
        for (var key in m) {
            if (
                !(
                    indexOf.call(ordering, key) !== -1 &&
                    (m[key] == null || !isNaN(m[key]))
                )
            ) {
                return false;
            }
        }

        var unitHasDecimal = false;
        for (var i = 0; i < ordering.length; ++i) {
            if (m[ordering[i]]) {
                if (unitHasDecimal) {
                    return false; // only allow non-integers for smallest unit
                }
                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }

        return true;
    }

    function isValid$1() {
        return this._isValid;
    }

    function createInvalid$1() {
        return createDuration(NaN);
    }

    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        this._isValid = isDurationValid(normalizedInput);

        // representation for dateAddRemove
        this._milliseconds =
            +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days + weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months + quarters * 3 + years * 12;

        this._data = {};

        this._locale = getLocale();

        this._bubble();
    }

    function isDuration(obj) {
        return obj instanceof Duration;
    }

    function absRound(number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

    // FORMATTING

    function offset(token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = "+";
            if (offset < 0) {
                offset = -offset;
                sign = "-";
            }
            return (
                sign +
                zeroFill(~~(offset / 60), 2) +
                separator +
                zeroFill(~~offset % 60, 2)
            );
        });
    }

    offset("Z", ":");
    offset("ZZ", "");

    // PARSING

    addRegexToken("Z", matchShortOffset);
    addRegexToken("ZZ", matchShortOffset);
    addParseToken(["Z", "ZZ"], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = (string || "").match(matcher);

        if (matches === null) {
            return null;
        }

        var chunk = matches[matches.length - 1] || [];
        var parts = (chunk + "").match(chunkOffset) || ["-", 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);

        return minutes === 0 ? 0 : parts[0] === "+" ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff =
                (isMoment(input) || isDate(input)
                    ? input.valueOf()
                    : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else {
            return createLocal(input).local();
        }
    }

    function getDateOffset(m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset(input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === "string") {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) {
                    return this;
                }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, "m");
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(
                        this,
                        createDuration(input - offset, "m"),
                        1,
                        false
                    );
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone(input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== "string") {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), "m");
            }
        }
        return this;
    }

    function setOffsetToParsedOffset() {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === "string") {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
                this.utcOffset(tZone);
            } else {
                this.utcOffset(0, true);
            }
        }
        return this;
    }

    function hasAlignedHourOffset(input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime() {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted() {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {};

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted =
                this.isValid() && compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal() {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset() {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex =
        /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    var isoRegex =
        /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration(input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms: input._milliseconds,
                d: input._days,
                M: input._months,
            };
        } else if (isNumber(input)) {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = match[1] === "-" ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign, // the millisecond decimal point is included in the match
            };
        } else if (!!(match = isoRegex.exec(input))) {
            sign = match[1] === "-" ? -1 : match[1] === "+" ? 1 : 1;
            duration = {
                y: parseIso(match[2], sign),
                M: parseIso(match[3], sign),
                w: parseIso(match[4], sign),
                d: parseIso(match[5], sign),
                h: parseIso(match[6], sign),
                m: parseIso(match[7], sign),
                s: parseIso(match[8], sign),
            };
        } else if (duration == null) {
            // checks for null or undefined
            duration = {};
        } else if (
            typeof duration === "object" &&
            ("from" in duration || "to" in duration)
        ) {
            diffRes = momentsDifference(
                createLocal(duration.from),
                createLocal(duration.to)
            );

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, "_locale")) {
            ret._locale = input._locale;
        }

        return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso(inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(",", "."));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = { milliseconds: 0, months: 0 };

        res.months =
            other.month() - base.month() + (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, "M").isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +base.clone().add(res.months, "M");

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return { milliseconds: 0, months: 0 };
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(
                    name,
                    "moment()." +
                        name +
                        "(period, number) is deprecated. Please use moment()." +
                        name +
                        "(number, period). " +
                        "See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
                );
                tmp = val;
                val = period;
                period = tmp;
            }

            val = typeof val === "string" ? +val : val;
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }

    function addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
            setMonth(mom, get(mom, "Month") + months * isAdding);
        }
        if (days) {
            set$1(mom, "Date", get(mom, "Date") + days * isAdding);
        }
        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
            hooks.updateOffset(mom, days || months);
        }
    }

    var add = createAdder(1, "add");
    var subtract = createAdder(-1, "subtract");

    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, "days", true);
        return diff < -6
            ? "sameElse"
            : diff < -1
            ? "lastWeek"
            : diff < 0
            ? "lastDay"
            : diff < 1
            ? "sameDay"
            : diff < 2
            ? "nextDay"
            : diff < 7
            ? "nextWeek"
            : "sameElse";
    }

    function calendar$1(time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf("day"),
            format = hooks.calendarFormat(this, sod) || "sameElse";

        var output =
            formats &&
            (isFunction(formats[format])
                ? formats[format].call(this, now)
                : formats[format]);

        return this.format(
            output || this.localeData().calendar(format, this, createLocal(now))
        );
    }

    function clone() {
        return new Moment(this);
    }

    function isAfter(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(!isUndefined(units) ? units : "millisecond");
        if (units === "millisecond") {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(!isUndefined(units) ? units : "millisecond");
        if (units === "millisecond") {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween(from, to, units, inclusivity) {
        inclusivity = inclusivity || "()";
        return (
            (inclusivity[0] === "("
                ? this.isAfter(from, units)
                : !this.isBefore(from, units)) &&
            (inclusivity[1] === ")"
                ? this.isBefore(to, units)
                : !this.isAfter(to, units))
        );
    }

    function isSame(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units || "millisecond");
        if (units === "millisecond") {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return (
                this.clone().startOf(units).valueOf() <= inputMs &&
                inputMs <= this.clone().endOf(units).valueOf()
            );
        }
    }

    function isSameOrAfter(input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }

    function isSameOrBefore(input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }

    function diff(input, units, asFloat) {
        var that, zoneDelta, output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        switch (units) {
            case "year":
                output = monthDiff(this, that) / 12;
                break;
            case "month":
                output = monthDiff(this, that);
                break;
            case "quarter":
                output = monthDiff(this, that) / 3;
                break;
            case "second":
                output = (this - that) / 1e3;
                break; // 1000
            case "minute":
                output = (this - that) / 6e4;
                break; // 1000 * 60
            case "hour":
                output = (this - that) / 36e5;
                break; // 1000 * 60 * 60
            case "day":
                output = (this - that - zoneDelta) / 864e5;
                break; // 1000 * 60 * 60 * 24, negate dst
            case "week":
                output = (this - that - zoneDelta) / 6048e5;
                break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default:
                output = this - that;
        }

        return asFloat ? output : absFloor(output);
    }

    function monthDiff(a, b) {
        // difference in months
        var wholeMonthDiff =
                (b.year() - a.year()) * 12 + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, "months"),
            anchor2,
            adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, "months");
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, "months");
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";

    function toString() {
        return this.clone()
            .locale("en")
            .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
    }

    function toISOString(keepOffset) {
        if (!this.isValid()) {
            return null;
        }
        var utc = keepOffset !== true;
        var m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(
                m,
                utc
                    ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                    : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
            );
        }
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) {
                return this.toDate().toISOString();
            } else {
                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000)
                    .toISOString()
                    .replace("Z", formatMoment(m, "Z"));
            }
        }
        return formatMoment(
            m,
            utc ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
        );
    }

    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
    function inspect() {
        if (!this.isValid()) {
            return "moment.invalid(/* " + this._i + " */)";
        }
        var func = "moment";
        var zone = "";
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
            zone = "Z";
        }
        var prefix = "[" + func + '("]';
        var year = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
        var datetime = "-MM-DD[T]HH:mm:ss.SSS";
        var suffix = zone + '[")]';

        return this.format(prefix + year + datetime + suffix);
    }

    function format(inputString) {
        if (!inputString) {
            inputString = this.isUtc()
                ? hooks.defaultFormatUtc
                : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from(time, withoutSuffix) {
        if (
            this.isValid() &&
            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
        ) {
            return createDuration({ to: this, from: time })
                .locale(this.locale())
                .humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow(withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }

    function to(time, withoutSuffix) {
        if (
            this.isValid() &&
            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
        ) {
            return createDuration({ from: this, to: time })
                .locale(this.locale())
                .humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow(withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale(key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData() {
        return this._locale;
    }

    function startOf(units) {
        units = normalizeUnits(units);
        // the following switch intentionally omits break keywords
        // to utilize falling through the cases.
        switch (units) {
            case "year":
                this.month(0);
            /* falls through */
            case "quarter":
            case "month":
                this.date(1);
            /* falls through */
            case "week":
            case "isoWeek":
            case "day":
            case "date":
                this.hours(0);
            /* falls through */
            case "hour":
                this.minutes(0);
            /* falls through */
            case "minute":
                this.seconds(0);
            /* falls through */
            case "second":
                this.milliseconds(0);
        }

        // weeks are a special case
        if (units === "week") {
            this.weekday(0);
        }
        if (units === "isoWeek") {
            this.isoWeekday(1);
        }

        // quarters are also special
        if (units === "quarter") {
            this.month(Math.floor(this.month() / 3) * 3);
        }

        return this;
    }

    function endOf(units) {
        units = normalizeUnits(units);
        if (units === undefined || units === "millisecond") {
            return this;
        }

        // 'date' is an alias for 'day', so it should be considered as such.
        if (units === "date") {
            units = "day";
        }

        return this.startOf(units)
            .add(1, units === "isoWeek" ? "week" : units)
            .subtract(1, "ms");
    }

    function valueOf() {
        return this._d.valueOf() - (this._offset || 0) * 60000;
    }

    function unix() {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate() {
        return new Date(this.valueOf());
    }

    function toArray() {
        var m = this;
        return [
            m.year(),
            m.month(),
            m.date(),
            m.hour(),
            m.minute(),
            m.second(),
            m.millisecond(),
        ];
    }

    function toObject() {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds(),
        };
    }

    function toJSON() {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2() {
        return isValid(this);
    }

    function parsingFlags() {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt() {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict,
        };
    }

    // FORMATTING

    addFormatToken(0, ["gg", 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ["GG", 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken(token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken("gggg", "weekYear");
    addWeekYearFormatToken("ggggg", "weekYear");
    addWeekYearFormatToken("GGGG", "isoWeekYear");
    addWeekYearFormatToken("GGGGG", "isoWeekYear");

    // ALIASES

    addUnitAlias("weekYear", "gg");
    addUnitAlias("isoWeekYear", "GG");

    // PRIORITY

    addUnitPriority("weekYear", 1);
    addUnitPriority("isoWeekYear", 1);

    // PARSING

    addRegexToken("G", matchSigned);
    addRegexToken("g", matchSigned);
    addRegexToken("GG", match1to2, match2);
    addRegexToken("gg", match1to2, match2);
    addRegexToken("GGGG", match1to4, match4);
    addRegexToken("gggg", match1to4, match4);
    addRegexToken("GGGGG", match1to6, match6);
    addRegexToken("ggggg", match1to6, match6);

    addWeekParseToken(
        ["gggg", "ggggg", "GGGG", "GGGGG"],
        function (input, week, config, token) {
            week[token.substr(0, 2)] = toInt(input);
        }
    );

    addWeekParseToken(["gg", "GG"], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear(input) {
        return getSetWeekYearHelper.call(
            this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy
        );
    }

    function getSetISOWeekYear(input) {
        return getSetWeekYearHelper.call(
            this,
            input,
            this.isoWeek(),
            this.isoWeekday(),
            1,
            4
        );
    }

    function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(
                weekYear,
                week,
                weekday,
                dow,
                doy
            ),
            date = createUTCDate(
                dayOfYearData.year,
                0,
                dayOfYearData.dayOfYear
            );

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken("Q", 0, "Qo", "quarter");

    // ALIASES

    addUnitAlias("quarter", "Q");

    // PRIORITY

    addUnitPriority("quarter", 7);

    // PARSING

    addRegexToken("Q", match1);
    addParseToken("Q", function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter(input) {
        return input == null
            ? Math.ceil((this.month() + 1) / 3)
            : this.month((input - 1) * 3 + (this.month() % 3));
    }

    // FORMATTING

    addFormatToken("D", ["DD", 2], "Do", "date");

    // ALIASES

    addUnitAlias("date", "D");

    // PRIOROITY
    addUnitPriority("date", 9);

    // PARSING

    addRegexToken("D", match1to2);
    addRegexToken("DD", match1to2, match2);
    addRegexToken("Do", function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict
            ? locale._dayOfMonthOrdinalParse || locale._ordinalParse
            : locale._dayOfMonthOrdinalParseLenient;
    });

    addParseToken(["D", "DD"], DATE);
    addParseToken("Do", function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet("Date", true);

    // FORMATTING

    addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear");

    // ALIASES

    addUnitAlias("dayOfYear", "DDD");

    // PRIORITY
    addUnitPriority("dayOfYear", 4);

    // PARSING

    addRegexToken("DDD", match1to3);
    addRegexToken("DDDD", match3);
    addParseToken(["DDD", "DDDD"], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear(input) {
        var dayOfYear =
            Math.round(
                (this.clone().startOf("day") - this.clone().startOf("year")) /
                    864e5
            ) + 1;
        return input == null ? dayOfYear : this.add(input - dayOfYear, "d");
    }

    // FORMATTING

    addFormatToken("m", ["mm", 2], 0, "minute");

    // ALIASES

    addUnitAlias("minute", "m");

    // PRIORITY

    addUnitPriority("minute", 14);

    // PARSING

    addRegexToken("m", match1to2);
    addRegexToken("mm", match1to2, match2);
    addParseToken(["m", "mm"], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet("Minutes", false);

    // FORMATTING

    addFormatToken("s", ["ss", 2], 0, "second");

    // ALIASES

    addUnitAlias("second", "s");

    // PRIORITY

    addUnitPriority("second", 15);

    // PARSING

    addRegexToken("s", match1to2);
    addRegexToken("ss", match1to2, match2);
    addParseToken(["s", "ss"], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet("Seconds", false);

    // FORMATTING

    addFormatToken("S", 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ["SS", 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ["SSS", 3], 0, "millisecond");
    addFormatToken(0, ["SSSS", 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ["SSSSS", 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ["SSSSSS", 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ["SSSSSSS", 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ["SSSSSSSS", 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ["SSSSSSSSS", 9], 0, function () {
        return this.millisecond() * 1000000;
    });

    // ALIASES

    addUnitAlias("millisecond", "ms");

    // PRIORITY

    addUnitPriority("millisecond", 16);

    // PARSING

    addRegexToken("S", match1to3, match1);
    addRegexToken("SS", match1to3, match2);
    addRegexToken("SSS", match1to3, match3);

    var token;
    for (token = "SSSS"; token.length <= 9; token += "S") {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(("0." + input) * 1000);
    }

    for (token = "S"; token.length <= 9; token += "S") {
        addParseToken(token, parseMs);
    }
    // MOMENTS

    var getSetMillisecond = makeGetSet("Milliseconds", false);

    // FORMATTING

    addFormatToken("z", 0, 0, "zoneAbbr");
    addFormatToken("zz", 0, 0, "zoneName");

    // MOMENTS

    function getZoneAbbr() {
        return this._isUTC ? "UTC" : "";
    }

    function getZoneName() {
        return this._isUTC ? "Coordinated Universal Time" : "";
    }

    var proto = Moment.prototype;

    proto.add = add;
    proto.calendar = calendar$1;
    proto.clone = clone;
    proto.diff = diff;
    proto.endOf = endOf;
    proto.format = format;
    proto.from = from;
    proto.fromNow = fromNow;
    proto.to = to;
    proto.toNow = toNow;
    proto.get = stringGet;
    proto.invalidAt = invalidAt;
    proto.isAfter = isAfter;
    proto.isBefore = isBefore;
    proto.isBetween = isBetween;
    proto.isSame = isSame;
    proto.isSameOrAfter = isSameOrAfter;
    proto.isSameOrBefore = isSameOrBefore;
    proto.isValid = isValid$2;
    proto.lang = lang;
    proto.locale = locale;
    proto.localeData = localeData;
    proto.max = prototypeMax;
    proto.min = prototypeMin;
    proto.parsingFlags = parsingFlags;
    proto.set = stringSet;
    proto.startOf = startOf;
    proto.subtract = subtract;
    proto.toArray = toArray;
    proto.toObject = toObject;
    proto.toDate = toDate;
    proto.toISOString = toISOString;
    proto.inspect = inspect;
    proto.toJSON = toJSON;
    proto.toString = toString;
    proto.unix = unix;
    proto.valueOf = valueOf;
    proto.creationData = creationData;
    proto.year = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week = proto.weeks = getSetWeek;
    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
    proto.weeksInYear = getWeeksInYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.date = getSetDayOfMonth;
    proto.day = proto.days = getSetDayOfWeek;
    proto.weekday = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset = getSetOffset;
    proto.utc = setOffsetToUTC;
    proto.local = setOffsetToLocal;
    proto.parseZone = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST = isDaylightSavingTime;
    proto.isLocal = isLocal;
    proto.isUtcOffset = isUtcOffset;
    proto.isUtc = isUtc;
    proto.isUTC = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates = deprecate(
        "dates accessor is deprecated. Use date instead.",
        getSetDayOfMonth
    );
    proto.months = deprecate(
        "months accessor is deprecated. Use month instead",
        getSetMonth
    );
    proto.years = deprecate(
        "years accessor is deprecated. Use year instead",
        getSetYear
    );
    proto.zone = deprecate(
        "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
        getSetZone
    );
    proto.isDSTShifted = deprecate(
        "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
        isDaylightSavingTimeShifted
    );

    function createUnix(input) {
        return createLocal(input * 1000);
    }

    function createInZone() {
        return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat(string) {
        return string;
    }

    var proto$1 = Locale.prototype;

    proto$1.calendar = calendar;
    proto$1.longDateFormat = longDateFormat;
    proto$1.invalidDate = invalidDate;
    proto$1.ordinal = ordinal;
    proto$1.preparse = preParsePostFormat;
    proto$1.postformat = preParsePostFormat;
    proto$1.relativeTime = relativeTime;
    proto$1.pastFuture = pastFuture;
    proto$1.set = set;

    proto$1.months = localeMonths;
    proto$1.monthsShort = localeMonthsShort;
    proto$1.monthsParse = localeMonthsParse;
    proto$1.monthsRegex = monthsRegex;
    proto$1.monthsShortRegex = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

    proto$1.weekdays = localeWeekdays;
    proto$1.weekdaysMin = localeWeekdaysMin;
    proto$1.weekdaysShort = localeWeekdaysShort;
    proto$1.weekdaysParse = localeWeekdaysParse;

    proto$1.weekdaysRegex = weekdaysRegex;
    proto$1.weekdaysShortRegex = weekdaysShortRegex;
    proto$1.weekdaysMinRegex = weekdaysMinRegex;

    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1(format, index, field, setter) {
        var locale = getLocale();
        var utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl(format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || "";

        if (index != null) {
            return get$1(format, index, field, "month");
        }

        var i;
        var out = [];
        for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, "month");
        }
        return out;
    }

    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl(localeSorted, format, index, field) {
        if (typeof localeSorted === "boolean") {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || "";
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || "";
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0;

        if (index != null) {
            return get$1(format, (index + shift) % 7, field, "day");
        }

        var i;
        var out = [];
        for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, "day");
        }
        return out;
    }

    function listMonths(format, index) {
        return listMonthsImpl(format, index, "months");
    }

    function listMonthsShort(format, index) {
        return listMonthsImpl(format, index, "monthsShort");
    }

    function listWeekdays(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, "weekdays");
    }

    function listWeekdaysShort(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, "weekdaysShort");
    }

    function listWeekdaysMin(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, "weekdaysMin");
    }

    getSetGlobalLocale("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (number) {
            var b = number % 10,
                output =
                    toInt((number % 100) / 10) === 1
                        ? "th"
                        : b === 1
                        ? "st"
                        : b === 2
                        ? "nd"
                        : b === 3
                        ? "rd"
                        : "th";
            return number + output;
        },
    });

    // Side effect imports

    hooks.lang = deprecate(
        "moment.lang is deprecated. Use moment.locale instead.",
        getSetGlobalLocale
    );
    hooks.langData = deprecate(
        "moment.langData is deprecated. Use moment.localeData instead.",
        getLocale
    );

    var mathAbs = Math.abs;

    function abs() {
        var data = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);

        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.months = mathAbs(data.months);
        data.years = mathAbs(data.years);

        return this;
    }

    function addSubtract$1(duration, input, value, direction) {
        var other = createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days += direction * other._days;
        duration._months += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1(input, value) {
        return addSubtract$1(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1(input, value) {
        return addSubtract$1(this, input, value, -1);
    }

    function absCeil(number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble() {
        var milliseconds = this._milliseconds;
        var days = this._days;
        var months = this._months;
        var data = this._data;
        var seconds, minutes, hours, years, monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (
            !(
                (milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0)
            )
        ) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds = absFloor(milliseconds / 1000);
        data.seconds = seconds % 60;

        minutes = absFloor(seconds / 60);
        data.minutes = minutes % 60;

        hours = absFloor(minutes / 60);
        data.hours = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days = days;
        data.months = months;
        data.years = years;

        return this;
    }

    function daysToMonths(days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return (days * 4800) / 146097;
    }

    function monthsToDays(months) {
        // the reverse of daysToMonths
        return (months * 146097) / 4800;
    }

    function as(units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days;
        var months;
        var milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === "month" || units === "year") {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            return units === "month" ? months : months / 12;
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case "week":
                    return days / 7 + milliseconds / 6048e5;
                case "day":
                    return days + milliseconds / 864e5;
                case "hour":
                    return days * 24 + milliseconds / 36e5;
                case "minute":
                    return days * 1440 + milliseconds / 6e4;
                case "second":
                    return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case "millisecond":
                    return Math.floor(days * 864e5) + milliseconds;
                default:
                    throw new Error("Unknown unit " + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function valueOf$1() {
        if (!this.isValid()) {
            return NaN;
        }
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs(alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs("ms");
    var asSeconds = makeAs("s");
    var asMinutes = makeAs("m");
    var asHours = makeAs("h");
    var asDays = makeAs("d");
    var asWeeks = makeAs("w");
    var asMonths = makeAs("M");
    var asYears = makeAs("y");

    function clone$1() {
        return createDuration(this);
    }

    function get$2(units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + "s"]() : NaN;
    }

    function makeGetter(name) {
        return function () {
            return this.isValid() ? this._data[name] : NaN;
        };
    }

    var milliseconds = makeGetter("milliseconds");
    var seconds = makeGetter("seconds");
    var minutes = makeGetter("minutes");
    var hours = makeGetter("hours");
    var days = makeGetter("days");
    var months = makeGetter("months");
    var years = makeGetter("years");

    function weeks() {
        return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
        ss: 44, // a few seconds to seconds
        s: 45, // seconds to minute
        m: 45, // minutes to hour
        h: 22, // hours to day
        d: 26, // days to month
        M: 11, // months to year
    };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(
        string,
        number,
        withoutSuffix,
        isFuture,
        locale
    ) {
        return locale.relativeTime(
            number || 1,
            !!withoutSuffix,
            string,
            isFuture
        );
    }

    function relativeTime$1(posNegDuration, withoutSuffix, locale) {
        var duration = createDuration(posNegDuration).abs();
        var seconds = round(duration.as("s"));
        var minutes = round(duration.as("m"));
        var hours = round(duration.as("h"));
        var days = round(duration.as("d"));
        var months = round(duration.as("M"));
        var years = round(duration.as("y"));

        var a = (seconds <= thresholds.ss && ["s", seconds]) ||
            (seconds < thresholds.s && ["ss", seconds]) ||
            (minutes <= 1 && ["m"]) ||
            (minutes < thresholds.m && ["mm", minutes]) ||
            (hours <= 1 && ["h"]) ||
            (hours < thresholds.h && ["hh", hours]) ||
            (days <= 1 && ["d"]) ||
            (days < thresholds.d && ["dd", days]) ||
            (months <= 1 && ["M"]) ||
            (months < thresholds.M && ["MM", months]) ||
            (years <= 1 && ["y"]) || ["yy", years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding(roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof roundingFunction === "function") {
            round = roundingFunction;
            return true;
        }
        return false;
    }

    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === "s") {
            thresholds.ss = limit - 1;
        }
        return true;
    }

    function humanize(withSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var locale = this.localeData();
        var output = relativeTime$1(this, !withSuffix, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
        return (x > 0) - (x < 0) || +x;
    }

    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000;
        var days = abs$1(this._days);
        var months = abs$1(this._months);
        var minutes, hours, years;

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes = absFloor(seconds / 60);
        hours = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, "") : "";
        var total = this.asSeconds();

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return "P0D";
        }

        var totalSign = total < 0 ? "-" : "";
        var ymSign = sign(this._months) !== sign(total) ? "-" : "";
        var daysSign = sign(this._days) !== sign(total) ? "-" : "";
        var hmsSign = sign(this._milliseconds) !== sign(total) ? "-" : "";

        return (
            totalSign +
            "P" +
            (Y ? ymSign + Y + "Y" : "") +
            (M ? ymSign + M + "M" : "") +
            (D ? daysSign + D + "D" : "") +
            (h || m || s ? "T" : "") +
            (h ? hmsSign + h + "H" : "") +
            (m ? hmsSign + m + "M" : "") +
            (s ? hmsSign + s + "S" : "")
        );
    }

    var proto$2 = Duration.prototype;

    proto$2.isValid = isValid$1;
    proto$2.abs = abs;
    proto$2.add = add$1;
    proto$2.subtract = subtract$1;
    proto$2.as = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds = asSeconds;
    proto$2.asMinutes = asMinutes;
    proto$2.asHours = asHours;
    proto$2.asDays = asDays;
    proto$2.asWeeks = asWeeks;
    proto$2.asMonths = asMonths;
    proto$2.asYears = asYears;
    proto$2.valueOf = valueOf$1;
    proto$2._bubble = bubble;
    proto$2.clone = clone$1;
    proto$2.get = get$2;
    proto$2.milliseconds = milliseconds;
    proto$2.seconds = seconds;
    proto$2.minutes = minutes;
    proto$2.hours = hours;
    proto$2.days = days;
    proto$2.weeks = weeks;
    proto$2.months = months;
    proto$2.years = years;
    proto$2.humanize = humanize;
    proto$2.toISOString = toISOString$1;
    proto$2.toString = toISOString$1;
    proto$2.toJSON = toISOString$1;
    proto$2.locale = locale;
    proto$2.localeData = localeData;

    proto$2.toIsoString = deprecate(
        "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
        toISOString$1
    );
    proto$2.lang = lang;

    // Side effect imports

    // FORMATTING

    addFormatToken("X", 0, 0, "unix");
    addFormatToken("x", 0, 0, "valueOf");

    // PARSING

    addRegexToken("x", matchSigned);
    addRegexToken("X", matchTimestamp);
    addParseToken("X", function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken("x", function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    // Side effect imports

    hooks.version = "2.21.0";

    setHookCallback(createLocal);

    hooks.fn = proto;
    hooks.min = min;
    hooks.max = max;
    hooks.now = now;
    hooks.utc = createUTC;
    hooks.unix = createUnix;
    hooks.months = listMonths;
    hooks.isDate = isDate;
    hooks.locale = getSetGlobalLocale;
    hooks.invalid = createInvalid;
    hooks.duration = createDuration;
    hooks.isMoment = isMoment;
    hooks.weekdays = listWeekdays;
    hooks.parseZone = createInZone;
    hooks.localeData = getLocale;
    hooks.isDuration = isDuration;
    hooks.monthsShort = listMonthsShort;
    hooks.weekdaysMin = listWeekdaysMin;
    hooks.defineLocale = defineLocale;
    hooks.updateLocale = updateLocale;
    hooks.locales = listLocales;
    hooks.weekdaysShort = listWeekdaysShort;
    hooks.normalizeUnits = normalizeUnits;
    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat = getCalendarFormat;
    hooks.prototype = proto;

    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm", // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss", // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS", // <input type="datetime-local" step="0.001" />
        DATE: "YYYY-MM-DD", // <input type="date" />
        TIME: "HH:mm", // <input type="time" />
        TIME_SECONDS: "HH:mm:ss", // <input type="time" step="1" />
        TIME_MS: "HH:mm:ss.SSS", // <input type="time" step="0.001" />
        WEEK: "YYYY-[W]WW", // <input type="week" />
        MONTH: "YYYY-MM", // <input type="month" />
    };

    return hooks;
});

(function (factory) {
    if (typeof define === 'function' && define.amd) {
      // AMD. Register as an anonymous module.
      define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
      // Node/CommonJS
      module.exports = function (root, jQuery) {
        if (jQuery === undefined) {
          // require('jQuery') returns a factory that requires window to
          // build a jQuery instance, we normalize how we use modules
          // that require this pattern but the window provided is a noop
          // if it's defined (how jquery works)
          if (typeof window !== 'undefined') {
            jQuery = require('jquery');
          }
          else {
            jQuery = require('jquery')(root);
          }
        }
        factory(jQuery);
        return jQuery;
      };
    } else {
      // Browser globals
      factory(jQuery);
    }
  } (function (jQuery) {
    // This is needed so we can catch the AMD loader configuration and use it
    // The inner file should be wrapped (by `banner.start.js`) in a function that
    // returns the AMD loader references.
    var S2 =(function () {
    // Restore the Select2 AMD loader so it can be used
    // Needed mostly in the language files, where the loader is not inserted
    if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
      var S2 = jQuery.fn.select2.amd;
    }
  var S2;(function () { if (!S2 || !S2.requirejs) {
  if (!S2) { S2 = {}; } else { require = S2; }
  /**
   * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
   * Released under MIT license, http://github.com/requirejs/almond/LICENSE
   */
  //Going sloppy to avoid 'use strict' string cost, but strict practices should
  //be followed.
  /*global setTimeout: false */
  
  var requirejs, require, define;
  (function (undef) {
      var main, req, makeMap, handlers,
          defined = {},
          waiting = {},
          config = {},
          defining = {},
          hasOwn = Object.prototype.hasOwnProperty,
          aps = [].slice,
          jsSuffixRegExp = /\.js$/;
  
      function hasProp(obj, prop) {
          return hasOwn.call(obj, prop);
      }
  
      /**
       * Given a relative module name, like ./something, normalize it to
       * a real name that can be mapped to a path.
       * @param {String} name the relative name
       * @param {String} baseName a real name that the name arg is relative
       * to.
       * @returns {String} normalized name
       */
      function normalize(name, baseName) {
          var nameParts, nameSegment, mapValue, foundMap, lastIndex,
              foundI, foundStarMap, starI, i, j, part, normalizedBaseParts,
              baseParts = baseName && baseName.split("/"),
              map = config.map,
              starMap = (map && map['*']) || {};
  
          //Adjust any relative paths.
          if (name) {
              name = name.split('/');
              lastIndex = name.length - 1;
  
              // If wanting node ID compatibility, strip .js from end
              // of IDs. Have to do this here, and not in nameToUrl
              // because node allows either .js or non .js to map
              // to same file.
              if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                  name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
              }
  
              // Starts with a '.' so need the baseName
              if (name[0].charAt(0) === '.' && baseParts) {
                  //Convert baseName to array, and lop off the last part,
                  //so that . matches that 'directory' and not name of the baseName's
                  //module. For instance, baseName of 'one/two/three', maps to
                  //'one/two/three.js', but we want the directory, 'one/two' for
                  //this normalization.
                  normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
                  name = normalizedBaseParts.concat(name);
              }
  
              //start trimDots
              for (i = 0; i < name.length; i++) {
                  part = name[i];
                  if (part === '.') {
                      name.splice(i, 1);
                      i -= 1;
                  } else if (part === '..') {
                      // If at the start, or previous value is still ..,
                      // keep them so that when converted to a path it may
                      // still work when converted to a path, even though
                      // as an ID it is less than ideal. In larger point
                      // releases, may be better to just kick out an error.
                      if (i === 0 || (i === 1 && name[2] === '..') || name[i - 1] === '..') {
                          continue;
                      } else if (i > 0) {
                          name.splice(i - 1, 2);
                          i -= 2;
                      }
                  }
              }
              //end trimDots
  
              name = name.join('/');
          }
  
          //Apply map config if available.
          if ((baseParts || starMap) && map) {
              nameParts = name.split('/');
  
              for (i = nameParts.length; i > 0; i -= 1) {
                  nameSegment = nameParts.slice(0, i).join("/");
  
                  if (baseParts) {
                      //Find the longest baseName segment match in the config.
                      //So, do joins on the biggest to smallest lengths of baseParts.
                      for (j = baseParts.length; j > 0; j -= 1) {
                          mapValue = map[baseParts.slice(0, j).join('/')];
  
                          //baseName segment has  config, find if it has one for
                          //this name.
                          if (mapValue) {
                              mapValue = mapValue[nameSegment];
                              if (mapValue) {
                                  //Match, update name to the new value.
                                  foundMap = mapValue;
                                  foundI = i;
                                  break;
                              }
                          }
                      }
                  }
  
                  if (foundMap) {
                      break;
                  }
  
                  //Check for a star map match, but just hold on to it,
                  //if there is a shorter segment match later in a matching
                  //config, then favor over this star map.
                  if (!foundStarMap && starMap && starMap[nameSegment]) {
                      foundStarMap = starMap[nameSegment];
                      starI = i;
                  }
              }
  
              if (!foundMap && foundStarMap) {
                  foundMap = foundStarMap;
                  foundI = starI;
              }
  
              if (foundMap) {
                  nameParts.splice(0, foundI, foundMap);
                  name = nameParts.join('/');
              }
          }
  
          return name;
      }
  
      function makeRequire(relName, forceSync) {
          return function () {
              //A version of a require function that passes a moduleName
              //value for items that may need to
              //look up paths relative to the moduleName
              var args = aps.call(arguments, 0);
  
              //If first arg is not require('string'), and there is only
              //one arg, it is the array form without a callback. Insert
              //a null so that the following concat is correct.
              if (typeof args[0] !== 'string' && args.length === 1) {
                  args.push(null);
              }
              return req.apply(undef, args.concat([relName, forceSync]));
          };
      }
  
      function makeNormalize(relName) {
          return function (name) {
              return normalize(name, relName);
          };
      }
  
      function makeLoad(depName) {
          return function (value) {
              defined[depName] = value;
          };
      }
  
      function callDep(name) {
          if (hasProp(waiting, name)) {
              var args = waiting[name];
              delete waiting[name];
              defining[name] = true;
              main.apply(undef, args);
          }
  
          if (!hasProp(defined, name) && !hasProp(defining, name)) {
              throw new Error('No ' + name);
          }
          return defined[name];
      }
  
      //Turns a plugin!resource to [plugin, resource]
      //with the plugin being undefined if the name
      //did not have a plugin prefix.
      function splitPrefix(name) {
          var prefix,
              index = name ? name.indexOf('!') : -1;
          if (index > -1) {
              prefix = name.substring(0, index);
              name = name.substring(index + 1, name.length);
          }
          return [prefix, name];
      }
  
      //Creates a parts array for a relName where first part is plugin ID,
      //second part is resource ID. Assumes relName has already been normalized.
      function makeRelParts(relName) {
          return relName ? splitPrefix(relName) : [];
      }
  
      /**
       * Makes a name map, normalizing the name, and using a plugin
       * for normalization if necessary. Grabs a ref to plugin
       * too, as an optimization.
       */
      makeMap = function (name, relParts) {
          var plugin,
              parts = splitPrefix(name),
              prefix = parts[0],
              relResourceName = relParts[1];
  
          name = parts[1];
  
          if (prefix) {
              prefix = normalize(prefix, relResourceName);
              plugin = callDep(prefix);
          }
  
          //Normalize according
          if (prefix) {
              if (plugin && plugin.normalize) {
                  name = plugin.normalize(name, makeNormalize(relResourceName));
              } else {
                  name = normalize(name, relResourceName);
              }
          } else {
              name = normalize(name, relResourceName);
              parts = splitPrefix(name);
              prefix = parts[0];
              name = parts[1];
              if (prefix) {
                  plugin = callDep(prefix);
              }
          }
  
          //Using ridiculous property names for space reasons
          return {
              f: prefix ? prefix + '!' + name : name, //fullName
              n: name,
              pr: prefix,
              p: plugin
          };
      };
  
      function makeConfig(name) {
          return function () {
              return (config && config.config && config.config[name]) || {};
          };
      }
  
      handlers = {
          require: function (name) {
              return makeRequire(name);
          },
          exports: function (name) {
              var e = defined[name];
              if (typeof e !== 'undefined') {
                  return e;
              } else {
                  return (defined[name] = {});
              }
          },
          module: function (name) {
              return {
                  id: name,
                  uri: '',
                  exports: defined[name],
                  config: makeConfig(name)
              };
          }
      };
  
      main = function (name, deps, callback, relName) {
          var cjsModule, depName, ret, map, i, relParts,
              args = [],
              callbackType = typeof callback,
              usingExports;
  
          //Use name if no relName
          relName = relName || name;
          relParts = makeRelParts(relName);
  
          //Call the callback to define the module, if necessary.
          if (callbackType === 'undefined' || callbackType === 'function') {
              //Pull out the defined dependencies and pass the ordered
              //values to the callback.
              //Default to [require, exports, module] if no deps
              deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
              for (i = 0; i < deps.length; i += 1) {
                  map = makeMap(deps[i], relParts);
                  depName = map.f;
  
                  //Fast path CommonJS standard dependencies.
                  if (depName === "require") {
                      args[i] = handlers.require(name);
                  } else if (depName === "exports") {
                      //CommonJS module spec 1.1
                      args[i] = handlers.exports(name);
                      usingExports = true;
                  } else if (depName === "module") {
                      //CommonJS module spec 1.1
                      cjsModule = args[i] = handlers.module(name);
                  } else if (hasProp(defined, depName) ||
                             hasProp(waiting, depName) ||
                             hasProp(defining, depName)) {
                      args[i] = callDep(depName);
                  } else if (map.p) {
                      map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                      args[i] = defined[depName];
                  } else {
                      throw new Error(name + ' missing ' + depName);
                  }
              }
  
              ret = callback ? callback.apply(defined[name], args) : undefined;
  
              if (name) {
                  //If setting exports via "module" is in play,
                  //favor that over return value and exports. After that,
                  //favor a non-undefined return value over exports use.
                  if (cjsModule && cjsModule.exports !== undef &&
                          cjsModule.exports !== defined[name]) {
                      defined[name] = cjsModule.exports;
                  } else if (ret !== undef || !usingExports) {
                      //Use the return value from the function.
                      defined[name] = ret;
                  }
              }
          } else if (name) {
              //May just be an object definition for the module. Only
              //worry about defining if have a module name.
              defined[name] = callback;
          }
      };
  
      requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
          if (typeof deps === "string") {
              if (handlers[deps]) {
                  //callback in this case is really relName
                  return handlers[deps](callback);
              }
              //Just return the module wanted. In this scenario, the
              //deps arg is the module name, and second arg (if passed)
              //is just the relName.
              //Normalize module name, if it contains . or ..
              return callDep(makeMap(deps, makeRelParts(callback)).f);
          } else if (!deps.splice) {
              //deps is a config object, not an array.
              config = deps;
              if (config.deps) {
                  req(config.deps, config.callback);
              }
              if (!callback) {
                  return;
              }
  
              if (callback.splice) {
                  //callback is an array, which means it is a dependency list.
                  //Adjust args if there are dependencies
                  deps = callback;
                  callback = relName;
                  relName = null;
              } else {
                  deps = undef;
              }
          }
  
          //Support require(['a'])
          callback = callback || function () {};
  
          //If relName is a function, it is an errback handler,
          //so remove it.
          if (typeof relName === 'function') {
              relName = forceSync;
              forceSync = alt;
          }
  
          //Simulate async callback;
          if (forceSync) {
              main(undef, deps, callback, relName);
          } else {
              //Using a non-zero value because of concern for what old browsers
              //do, and latest browsers "upgrade" to 4 if lower value is used:
              //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
              //If want a value immediately, use require('id') instead -- something
              //that works in almond on the global level, but not guaranteed and
              //unlikely to work in other AMD implementations.
              setTimeout(function () {
                  main(undef, deps, callback, relName);
              }, 4);
          }
  
          return req;
      };
  
      /**
       * Just drops the config on the floor, but returns req in case
       * the config return value is used.
       */
      req.config = function (cfg) {
          return req(cfg);
      };
  
      /**
       * Expose module registry for debugging and tooling
       */
      requirejs._defined = defined;
  
      define = function (name, deps, callback) {
          if (typeof name !== 'string') {
              throw new Error('See almond README: incorrect module build, no module name');
          }
  
          //This module may not have dependencies
          if (!deps.splice) {
              //deps is not an array, so probably means
              //an object literal or factory function for
              //the value. Adjust args.
              callback = deps;
              deps = [];
          }
  
          if (!hasProp(defined, name) && !hasProp(waiting, name)) {
              waiting[name] = [name, deps, callback];
          }
      };
  
      define.amd = {
          jQuery: true
      };
  }());
  
  S2.requirejs = requirejs;S2.require = require;S2.define = define;
  }
  }());
  S2.define("almond", function(){});
  
  /* global jQuery:false, $:false */
  S2.define('jquery',[],function () {
    var _$ = jQuery || $;
  
    if (_$ == null && console && console.error) {
      console.error(
        'Select2: An instance of jQuery or a jQuery-compatible library was not ' +
        'found. Make sure that you are including jQuery before Select2 on your ' +
        'web page.'
      );
    }
  
    return _$;
  });
  
  S2.define('select2/utils',[
    'jquery'
  ], function ($) {
    var Utils = {};
  
    Utils.Extend = function (ChildClass, SuperClass) {
      var __hasProp = {}.hasOwnProperty;
  
      function BaseConstructor () {
        this.constructor = ChildClass;
      }
  
      for (var key in SuperClass) {
        if (__hasProp.call(SuperClass, key)) {
          ChildClass[key] = SuperClass[key];
        }
      }
  
      BaseConstructor.prototype = SuperClass.prototype;
      ChildClass.prototype = new BaseConstructor();
      ChildClass.__super__ = SuperClass.prototype;
  
      return ChildClass;
    };
  
    function getMethods (theClass) {
      var proto = theClass.prototype;
  
      var methods = [];
  
      for (var methodName in proto) {
        var m = proto[methodName];
  
        if (typeof m !== 'function') {
          continue;
        }
  
        if (methodName === 'constructor') {
          continue;
        }
  
        methods.push(methodName);
      }
  
      return methods;
    }
  
    Utils.Decorate = function (SuperClass, DecoratorClass) {
      var decoratedMethods = getMethods(DecoratorClass);
      var superMethods = getMethods(SuperClass);
  
      function DecoratedClass () {
        var unshift = Array.prototype.unshift;
  
        var argCount = DecoratorClass.prototype.constructor.length;
  
        var calledConstructor = SuperClass.prototype.constructor;
  
        if (argCount > 0) {
          unshift.call(arguments, SuperClass.prototype.constructor);
  
          calledConstructor = DecoratorClass.prototype.constructor;
        }
  
        calledConstructor.apply(this, arguments);
      }
  
      DecoratorClass.displayName = SuperClass.displayName;
  
      function ctr () {
        this.constructor = DecoratedClass;
      }
  
      DecoratedClass.prototype = new ctr();
  
      for (var m = 0; m < superMethods.length; m++) {
        var superMethod = superMethods[m];
  
        DecoratedClass.prototype[superMethod] =
          SuperClass.prototype[superMethod];
      }
  
      var calledMethod = function (methodName) {
        // Stub out the original method if it's not decorating an actual method
        var originalMethod = function () {};
  
        if (methodName in DecoratedClass.prototype) {
          originalMethod = DecoratedClass.prototype[methodName];
        }
  
        var decoratedMethod = DecoratorClass.prototype[methodName];
  
        return function () {
          var unshift = Array.prototype.unshift;
  
          unshift.call(arguments, originalMethod);
  
          return decoratedMethod.apply(this, arguments);
        };
      };
  
      for (var d = 0; d < decoratedMethods.length; d++) {
        var decoratedMethod = decoratedMethods[d];
  
        DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
      }
  
      return DecoratedClass;
    };
  
    var Observable = function () {
      this.listeners = {};
    };
  
    Observable.prototype.on = function (event, callback) {
      this.listeners = this.listeners || {};
  
      if (event in this.listeners) {
        this.listeners[event].push(callback);
      } else {
        this.listeners[event] = [callback];
      }
    };
  
    Observable.prototype.trigger = function (event) {
      var slice = Array.prototype.slice;
      var params = slice.call(arguments, 1);
  
      this.listeners = this.listeners || {};
  
      // Params should always come in as an array
      if (params == null) {
        params = [];
      }
  
      // If there are no arguments to the event, use a temporary object
      if (params.length === 0) {
        params.push({});
      }
  
      // Set the `_type` of the first object to the event
      params[0]._type = event;
  
      if (event in this.listeners) {
        this.invoke(this.listeners[event], slice.call(arguments, 1));
      }
  
      if ('*' in this.listeners) {
        this.invoke(this.listeners['*'], arguments);
      }
    };
  
    Observable.prototype.invoke = function (listeners, params) {
      for (var i = 0, len = listeners.length; i < len; i++) {
        listeners[i].apply(this, params);
      }
    };
  
    Utils.Observable = Observable;
  
    Utils.generateChars = function (length) {
      var chars = '';
  
      for (var i = 0; i < length; i++) {
        var randomChar = Math.floor(Math.random() * 36);
        chars += randomChar.toString(36);
      }
  
      return chars;
    };
  
    Utils.bind = function (func, context) {
      return function () {
        func.apply(context, arguments);
      };
    };
  
    Utils._convertData = function (data) {
      for (var originalKey in data) {
        var keys = originalKey.split('-');
  
        var dataLevel = data;
  
        if (keys.length === 1) {
          continue;
        }
  
        for (var k = 0; k < keys.length; k++) {
          var key = keys[k];
  
          // Lowercase the first letter
          // By default, dash-separated becomes camelCase
          key = key.substring(0, 1).toLowerCase() + key.substring(1);
  
          if (!(key in dataLevel)) {
            dataLevel[key] = {};
          }
  
          if (k == keys.length - 1) {
            dataLevel[key] = data[originalKey];
          }
  
          dataLevel = dataLevel[key];
        }
  
        delete data[originalKey];
      }
  
      return data;
    };
  
    Utils.hasScroll = function (index, el) {
      // Adapted from the function created by @ShadowScripter
      // and adapted by @BillBarry on the Stack Exchange Code Review website.
      // The original code can be found at
      // http://codereview.stackexchange.com/q/13338
      // and was designed to be used with the Sizzle selector engine.
  
      var $el = $(el);
      var overflowX = el.style.overflowX;
      var overflowY = el.style.overflowY;
  
      //Check both x and y declarations
      if (overflowX === overflowY &&
          (overflowY === 'hidden' || overflowY === 'visible')) {
        return false;
      }
  
      if (overflowX === 'scroll' || overflowY === 'scroll') {
        return true;
      }
  
      return ($el.innerHeight() < el.scrollHeight ||
        $el.innerWidth() < el.scrollWidth);
    };
  
    Utils.escapeMarkup = function (markup) {
      var replaceMap = {
        '\\': '&#92;',
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '\'': '&#39;',
        '/': '&#47;'
      };
  
      // Do not try to escape the markup if it's not a string
      if (typeof markup !== 'string') {
        return markup;
      }
  
      return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
        return replaceMap[match];
      });
    };
  
    // Append an array of jQuery nodes to a given element.
    Utils.appendMany = function ($element, $nodes) {
      // jQuery 1.7.x does not support $.fn.append() with an array
      // Fall back to a jQuery object collection using $.fn.add()
      if ($.fn.jquery.substr(0, 3) === '1.7') {
        var $jqNodes = $();
  
        $.map($nodes, function (node) {
          $jqNodes = $jqNodes.add(node);
        });
  
        $nodes = $jqNodes;
      }
  
      $element.append($nodes);
    };
  
    // Cache objects in Utils.__cache instead of $.data (see #4346)
    Utils.__cache = {};
  
    var id = 0;
    Utils.GetUniqueElementId = function (element) {
      // Get a unique element Id. If element has no id, 
      // creates a new unique number, stores it in the id 
      // attribute and returns the new id. 
      // If an id already exists, it simply returns it.
  
      var select2Id = element.getAttribute('data-select2-id');
      if (select2Id == null) {
        // If element has id, use it.
        if (element.id) {
          select2Id = element.id;
          element.setAttribute('data-select2-id', select2Id);
        } else {
          element.setAttribute('data-select2-id', ++id);
          select2Id = id.toString();
        }
      }
      return select2Id;
    };
  
    Utils.StoreData = function (element, name, value) {
      // Stores an item in the cache for a specified element.
      // name is the cache key.    
      var id = Utils.GetUniqueElementId(element);
      if (!Utils.__cache[id]) {
        Utils.__cache[id] = {};
      }
  
      Utils.__cache[id][name] = value;
    };
  
    Utils.GetData = function (element, name) {
      // Retrieves a value from the cache by its key (name)
      // name is optional. If no name specified, return 
      // all cache items for the specified element.
      // and for a specified element.
      var id = Utils.GetUniqueElementId(element);
      if (name) {
        if (Utils.__cache[id]) {
          return Utils.__cache[id][name] != null ? 
            Utils.__cache[id][name]:
            $(element).data(name); // Fallback to HTML5 data attribs.
        }
        return $(element).data(name); // Fallback to HTML5 data attribs.
      } else {
        return Utils.__cache[id];			   
      }
    };
  
    Utils.RemoveData = function (element) {
      // Removes all cached items for a specified element.
      var id = Utils.GetUniqueElementId(element);
      if (Utils.__cache[id] != null) {
        delete Utils.__cache[id];
      }
    };
  
    return Utils;
  });
  
  S2.define('select2/results',[
    'jquery',
    './utils'
  ], function ($, Utils) {
    function Results ($element, options, dataAdapter) {
      this.$element = $element;
      this.data = dataAdapter;
      this.options = options;
  
      Results.__super__.constructor.call(this);
    }
  
    Utils.Extend(Results, Utils.Observable);
  
    Results.prototype.render = function () {
      var $results = $(
        '<ul class="select2-results__options" role="tree"></ul>'
      );
  
      if (this.options.get('multiple')) {
        $results.attr('aria-multiselectable', 'true');
      }
  
      this.$results = $results;
  
      return $results;
    };
  
    Results.prototype.clear = function () {
      this.$results.empty();
    };
  
    Results.prototype.displayMessage = function (params) {
      var escapeMarkup = this.options.get('escapeMarkup');
  
      this.clear();
      this.hideLoading();
  
      var $message = $(
        '<li role="treeitem" aria-live="assertive"' +
        ' class="select2-results__option"></li>'
      );
  
      var message = this.options.get('translations').get(params.message);
  
      $message.append(
        escapeMarkup(
          message(params.args)
        )
      );
  
      $message[0].className += ' select2-results__message';
  
      this.$results.append($message);
    };
  
    Results.prototype.hideMessages = function () {
      this.$results.find('.select2-results__message').remove();
    };
  
    Results.prototype.append = function (data) {
      this.hideLoading();
  
      var $options = [];
  
      if (data.results == null || data.results.length === 0) {
        if (this.$results.children().length === 0) {
          this.trigger('results:message', {
            message: 'noResults'
          });
        }
  
        return;
      }
  
      data.results = this.sort(data.results);
  
      for (var d = 0; d < data.results.length; d++) {
        var item = data.results[d];
  
        var $option = this.option(item);
  
        $options.push($option);
      }
  
      this.$results.append($options);
    };
  
    Results.prototype.position = function ($results, $dropdown) {
      var $resultsContainer = $dropdown.find('.select2-results');
      $resultsContainer.append($results);
    };
  
    Results.prototype.sort = function (data) {
      var sorter = this.options.get('sorter');
  
      return sorter(data);
    };
  
    Results.prototype.highlightFirstItem = function () {
      var $options = this.$results
        .find('.select2-results__option[aria-selected]');
  
      var $selected = $options.filter('[aria-selected=true]');
  
      // Check if there are any selected options
      if ($selected.length > 0) {
        // If there are selected options, highlight the first
        $selected.first().trigger('mouseenter');
      } else {
        // If there are no selected options, highlight the first option
        // in the dropdown
        $options.first().trigger('mouseenter');
      }
  
      this.ensureHighlightVisible();
    };
  
    Results.prototype.setClasses = function () {
      var self = this;
  
      this.data.current(function (selected) {
        var selectedIds = $.map(selected, function (s) {
          return s.id.toString();
        });
  
        var $options = self.$results
          .find('.select2-results__option[aria-selected]');
  
        $options.each(function () {
          var $option = $(this);
  
          var item = Utils.GetData(this, 'data');
  
          // id needs to be converted to a string when comparing
          var id = '' + item.id;
  
          if ((item.element != null && item.element.selected) ||
              (item.element == null && $.inArray(id, selectedIds) > -1)) {
            $option.attr('aria-selected', 'true');
          } else {
            $option.attr('aria-selected', 'false');
          }
        });
  
      });
    };
  
    Results.prototype.showLoading = function (params) {
      this.hideLoading();
  
      var loadingMore = this.options.get('translations').get('searching');
  
      var loading = {
        disabled: true,
        loading: true,
        text: loadingMore(params)
      };
      var $loading = this.option(loading);
      $loading.className += ' loading-results';
  
      this.$results.prepend($loading);
    };
  
    Results.prototype.hideLoading = function () {
      this.$results.find('.loading-results').remove();
    };
  
    Results.prototype.option = function (data) {
      var option = document.createElement('li');
      option.className = 'select2-results__option';
  
      var attrs = {
        'role': 'treeitem',
        'aria-selected': 'false'
      };
  
      if (data.disabled) {
        delete attrs['aria-selected'];
        attrs['aria-disabled'] = 'true';
      }
  
      if (data.id == null) {
        delete attrs['aria-selected'];
      }
  
      if (data._resultId != null) {
        option.id = data._resultId;
      }
  
      if (data.title) {
        option.title = data.title;
      }
  
      if (data.children) {
        attrs.role = 'group';
        attrs['aria-label'] = data.text;
        delete attrs['aria-selected'];
      }
  
      for (var attr in attrs) {
        var val = attrs[attr];
  
        option.setAttribute(attr, val);
      }
  
      if (data.children) {
        var $option = $(option);
  
        var label = document.createElement('strong');
        label.className = 'select2-results__group';
  
        var $label = $(label);
        this.template(data, label);
  
        var $children = [];
  
        for (var c = 0; c < data.children.length; c++) {
          var child = data.children[c];
  
          var $child = this.option(child);
  
          $children.push($child);
        }
  
        var $childrenContainer = $('<ul></ul>', {
          'class': 'select2-results__options select2-results__options--nested'
        });
  
        $childrenContainer.append($children);
  
        $option.append(label);
        $option.append($childrenContainer);
      } else {
        this.template(data, option);
      }
  
      Utils.StoreData(option, 'data', data);
  
      return option;
    };
  
    Results.prototype.bind = function (container, $container) {
      var self = this;
  
      var id = container.id + '-results';
  
      this.$results.attr('id', id);
  
      container.on('results:all', function (params) {
        self.clear();
        self.append(params.data);
  
        if (container.isOpen()) {
          self.setClasses();
          self.highlightFirstItem();
        }
      });
  
      container.on('results:append', function (params) {
        self.append(params.data);
  
        if (container.isOpen()) {
          self.setClasses();
        }
      });
  
      container.on('query', function (params) {
        self.hideMessages();
        self.showLoading(params);
      });
  
      container.on('select', function () {
        if (!container.isOpen()) {
          return;
        }
  
        self.setClasses();
        self.highlightFirstItem();
      });
  
      container.on('unselect', function () {
        if (!container.isOpen()) {
          return;
        }
  
        self.setClasses();
        self.highlightFirstItem();
      });
  
      container.on('open', function () {
        // When the dropdown is open, aria-expended="true"
        self.$results.attr('aria-expanded', 'true');
        self.$results.attr('aria-hidden', 'false');
  
        self.setClasses();
        self.ensureHighlightVisible();
      });
  
      container.on('close', function () {
        // When the dropdown is closed, aria-expended="false"
        self.$results.attr('aria-expanded', 'false');
        self.$results.attr('aria-hidden', 'true');
        self.$results.removeAttr('aria-activedescendant');
      });
  
      container.on('results:toggle', function () {
        var $highlighted = self.getHighlightedResults();
  
        if ($highlighted.length === 0) {
          return;
        }
  
        $highlighted.trigger('mouseup');
      });
  
      container.on('results:select', function () {
        var $highlighted = self.getHighlightedResults();
  
        if ($highlighted.length === 0) {
          return;
        }
  
        var data = Utils.GetData($highlighted[0], 'data');
  
        if ($highlighted.attr('aria-selected') == 'true') {
          self.trigger('close', {});
        } else {
          self.trigger('select', {
            data: data
          });
        }
      });
  
      container.on('results:previous', function () {
        var $highlighted = self.getHighlightedResults();
  
        var $options = self.$results.find('[aria-selected]');
  
        var currentIndex = $options.index($highlighted);
  
        // If we are already at te top, don't move further
        // If no options, currentIndex will be -1
        if (currentIndex <= 0) {
          return;
        }
  
        var nextIndex = currentIndex - 1;
  
        // If none are highlighted, highlight the first
        if ($highlighted.length === 0) {
          nextIndex = 0;
        }
  
        var $next = $options.eq(nextIndex);
  
        $next.trigger('mouseenter');
  
        var currentOffset = self.$results.offset().top;
        var nextTop = $next.offset().top;
        var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);
  
        if (nextIndex === 0) {
          self.$results.scrollTop(0);
        } else if (nextTop - currentOffset < 0) {
          self.$results.scrollTop(nextOffset);
        }
      });
  
      container.on('results:next', function () {
        var $highlighted = self.getHighlightedResults();
  
        var $options = self.$results.find('[aria-selected]');
  
        var currentIndex = $options.index($highlighted);
  
        var nextIndex = currentIndex + 1;
  
        // If we are at the last option, stay there
        if (nextIndex >= $options.length) {
          return;
        }
  
        var $next = $options.eq(nextIndex);
  
        $next.trigger('mouseenter');
  
        var currentOffset = self.$results.offset().top +
          self.$results.outerHeight(false);
        var nextBottom = $next.offset().top + $next.outerHeight(false);
        var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;
  
        if (nextIndex === 0) {
          self.$results.scrollTop(0);
        } else if (nextBottom > currentOffset) {
          self.$results.scrollTop(nextOffset);
        }
      });
  
      container.on('results:focus', function (params) {
        params.element.addClass('select2-results__option--highlighted');
      });
  
      container.on('results:message', function (params) {
        self.displayMessage(params);
      });
  
      if ($.fn.mousewheel) {
        this.$results.on('mousewheel', function (e) {
          var top = self.$results.scrollTop();
  
          var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;
  
          var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
          var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();
  
          if (isAtTop) {
            self.$results.scrollTop(0);
  
            e.preventDefault();
            e.stopPropagation();
          } else if (isAtBottom) {
            self.$results.scrollTop(
              self.$results.get(0).scrollHeight - self.$results.height()
            );
  
            e.preventDefault();
            e.stopPropagation();
          }
        });
      }
  
      this.$results.on('mouseup', '.select2-results__option[aria-selected]',
        function (evt) {
        var $this = $(this);
  
        var data = Utils.GetData(this, 'data');
  
        if ($this.attr('aria-selected') === 'true') {
          if (self.options.get('multiple')) {
            self.trigger('unselect', {
              originalEvent: evt,
              data: data
            });
          } else {
            self.trigger('close', {});
          }
  
          return;
        }
  
        self.trigger('select', {
          originalEvent: evt,
          data: data
        });
      });
  
      this.$results.on('mouseenter', '.select2-results__option[aria-selected]',
        function (evt) {
        var data = Utils.GetData(this, 'data');
  
        self.getHighlightedResults()
            .removeClass('select2-results__option--highlighted');
  
        self.trigger('results:focus', {
          data: data,
          element: $(this)
        });
      });
    };
  
    Results.prototype.getHighlightedResults = function () {
      var $highlighted = this.$results
      .find('.select2-results__option--highlighted');
  
      return $highlighted;
    };
  
    Results.prototype.destroy = function () {
      this.$results.remove();
    };
  
    Results.prototype.ensureHighlightVisible = function () {
      var $highlighted = this.getHighlightedResults();
  
      if ($highlighted.length === 0) {
        return;
      }
  
      var $options = this.$results.find('[aria-selected]');
  
      var currentIndex = $options.index($highlighted);
  
      var currentOffset = this.$results.offset().top;
      var nextTop = $highlighted.offset().top;
      var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);
  
      var offsetDelta = nextTop - currentOffset;
      nextOffset -= $highlighted.outerHeight(false) * 2;
  
      if (currentIndex <= 2) {
        this.$results.scrollTop(0);
      } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
        this.$results.scrollTop(nextOffset);
      }
    };
  
    Results.prototype.template = function (result, container) {
      var template = this.options.get('templateResult');
      var escapeMarkup = this.options.get('escapeMarkup');
  
      var content = template(result, container);
  
      if (content == null) {
        container.style.display = 'none';
      } else if (typeof content === 'string') {
        container.innerHTML = escapeMarkup(content);
      } else {
        $(container).append(content);
      }
    };
  
    return Results;
  });
  
  S2.define('select2/keys',[
  
  ], function () {
    var KEYS = {
      BACKSPACE: 8,
      TAB: 9,
      ENTER: 13,
      SHIFT: 16,
      CTRL: 17,
      ALT: 18,
      ESC: 27,
      SPACE: 32,
      PAGE_UP: 33,
      PAGE_DOWN: 34,
      END: 35,
      HOME: 36,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40,
      DELETE: 46
    };
  
    return KEYS;
  });
  
  S2.define('select2/selection/base',[
    'jquery',
    '../utils',
    '../keys'
  ], function ($, Utils, KEYS) {
    function BaseSelection ($element, options) {
      this.$element = $element;
      this.options = options;
  
      BaseSelection.__super__.constructor.call(this);
    }
  
    Utils.Extend(BaseSelection, Utils.Observable);
  
    BaseSelection.prototype.render = function () {
      var $selection = $(
        '<span class="select2-selection" role="combobox" ' +
        ' aria-haspopup="true" aria-expanded="false">' +
        '</span>'
      );
  
      this._tabindex = 0;
  
      if (Utils.GetData(this.$element[0], 'old-tabindex') != null) {
        this._tabindex = Utils.GetData(this.$element[0], 'old-tabindex');
      } else if (this.$element.attr('tabindex') != null) {
        this._tabindex = this.$element.attr('tabindex');
      }
  
      $selection.attr('title', this.$element.attr('title'));
      $selection.attr('tabindex', this._tabindex);
  
      this.$selection = $selection;
  
      return $selection;
    };
  
    BaseSelection.prototype.bind = function (container, $container) {
      var self = this;
  
      var id = container.id + '-container';
      var resultsId = container.id + '-results';
  
      this.container = container;
  
      this.$selection.on('focus', function (evt) {
        self.trigger('focus', evt);
      });
  
      this.$selection.on('blur', function (evt) {
        self._handleBlur(evt);
      });
  
      this.$selection.on('keydown', function (evt) {
        self.trigger('keypress', evt);
  
        if (evt.which === KEYS.SPACE) {
          evt.preventDefault();
        }
      });
  
      container.on('results:focus', function (params) {
        self.$selection.attr('aria-activedescendant', params.data._resultId);
      });
  
      container.on('selection:update', function (params) {
        self.update(params.data);
      });
  
      container.on('open', function () {
        // When the dropdown is open, aria-expanded="true"
        self.$selection.attr('aria-expanded', 'true');
        self.$selection.attr('aria-owns', resultsId);
  
        self._attachCloseHandler(container);
      });
  
      container.on('close', function () {
        // When the dropdown is closed, aria-expanded="false"
        self.$selection.attr('aria-expanded', 'false');
        self.$selection.removeAttr('aria-activedescendant');
        self.$selection.removeAttr('aria-owns');
  
        self.$selection.focus();
        window.setTimeout(function () {
          self.$selection.focus();
        }, 0);
  
        self._detachCloseHandler(container);
      });
  
      container.on('enable', function () {
        self.$selection.attr('tabindex', self._tabindex);
      });
  
      container.on('disable', function () {
        self.$selection.attr('tabindex', '-1');
      });
    };
  
    BaseSelection.prototype._handleBlur = function (evt) {
      var self = this;
  
      // This needs to be delayed as the active element is the body when the tab
      // key is pressed, possibly along with others.
      window.setTimeout(function () {
        // Don't trigger `blur` if the focus is still in the selection
        if (
          (document.activeElement == self.$selection[0]) ||
          ($.contains(self.$selection[0], document.activeElement))
        ) {
          return;
        }
  
        self.trigger('blur', evt);
      }, 1);
    };
  
    BaseSelection.prototype._attachCloseHandler = function (container) {
      var self = this;
  
      $(document.body).on('mousedown.select2.' + container.id, function (e) {
        var $target = $(e.target);
  
        var $select = $target.closest('.select2');
  
        var $all = $('.select2.select2-container--open');
  
        $all.each(function () {
          var $this = $(this);
  
          if (this == $select[0]) {
            return;
          }
  
          var $element = Utils.GetData(this, 'element');
  
          $element.select2('close');
        });
      });
    };
  
    BaseSelection.prototype._detachCloseHandler = function (container) {
      $(document.body).off('mousedown.select2.' + container.id);
    };
  
    BaseSelection.prototype.position = function ($selection, $container) {
      var $selectionContainer = $container.find('.selection');
      $selectionContainer.append($selection);
    };
  
    BaseSelection.prototype.destroy = function () {
      this._detachCloseHandler(this.container);
    };
  
    BaseSelection.prototype.update = function (data) {
      throw new Error('The `update` method must be defined in child classes.');
    };
  
    return BaseSelection;
  });
  
  S2.define('select2/selection/single',[
    'jquery',
    './base',
    '../utils',
    '../keys'
  ], function ($, BaseSelection, Utils, KEYS) {
    function SingleSelection () {
      SingleSelection.__super__.constructor.apply(this, arguments);
    }
  
    Utils.Extend(SingleSelection, BaseSelection);
  
    SingleSelection.prototype.render = function () {
      var $selection = SingleSelection.__super__.render.call(this);
  
      $selection.addClass('select2-selection--single');
  
      $selection.html(
        '<span class="select2-selection__rendered"></span>' +
        '<span class="select2-selection__arrow" role="presentation">' +
          '<b role="presentation"></b>' +
        '</span>'
      );
  
      return $selection;
    };
  
    SingleSelection.prototype.bind = function (container, $container) {
      var self = this;
  
      SingleSelection.__super__.bind.apply(this, arguments);
  
      var id = container.id + '-container';
  
      this.$selection.find('.select2-selection__rendered')
        .attr('id', id)
        .attr('role', 'textbox')
        .attr('aria-readonly', 'true');
      this.$selection.attr('aria-labelledby', id);
  
      this.$selection.on('mousedown', function (evt) {
        // Only respond to left clicks
        if (evt.which !== 1) {
          return;
        }
  
        self.trigger('toggle', {
          originalEvent: evt
        });
      });
  
      this.$selection.on('focus', function (evt) {
        // User focuses on the container
      });
  
      this.$selection.on('blur', function (evt) {
        // User exits the container
      });
  
      container.on('focus', function (evt) {
        if (!container.isOpen()) {
          self.$selection.focus();
        }
      });
    };
  
    SingleSelection.prototype.clear = function () {
      var $rendered = this.$selection.find('.select2-selection__rendered');
      $rendered.empty();
      $rendered.removeAttr('title'); // clear tooltip on empty
    };
  
    SingleSelection.prototype.display = function (data, container) {
      var template = this.options.get('templateSelection');
      var escapeMarkup = this.options.get('escapeMarkup');
  
      return escapeMarkup(template(data, container));
    };
  
    SingleSelection.prototype.selectionContainer = function () {
      return $('<span></span>');
    };
  
    SingleSelection.prototype.update = function (data) {
      if (data.length === 0) {
        this.clear();
        return;
      }
  
      var selection = data[0];
  
      var $rendered = this.$selection.find('.select2-selection__rendered');
      var formatted = this.display(selection, $rendered);
  
      $rendered.empty().append(formatted);
      $rendered.attr('title', selection.title || selection.text);
    };
  
    return SingleSelection;
  });
  
  S2.define('select2/selection/multiple',[
    'jquery',
    './base',
    '../utils'
  ], function ($, BaseSelection, Utils) {
    function MultipleSelection ($element, options) {
      MultipleSelection.__super__.constructor.apply(this, arguments);
    }
  
    Utils.Extend(MultipleSelection, BaseSelection);
  
    MultipleSelection.prototype.render = function () {
      var $selection = MultipleSelection.__super__.render.call(this);
  
      $selection.addClass('select2-selection--multiple');
  
      $selection.html(
        '<ul class="select2-selection__rendered"></ul>'
      );
  
      return $selection;
    };
  
    MultipleSelection.prototype.bind = function (container, $container) {
      var self = this;
  
      MultipleSelection.__super__.bind.apply(this, arguments);
  
      this.$selection.on('click', function (evt) {
        self.trigger('toggle', {
          originalEvent: evt
        });
      });
  
      this.$selection.on(
        'click',
        '.select2-selection__choice__remove',
        function (evt) {
          // Ignore the event if it is disabled
          if (self.options.get('disabled')) {
            return;
          }
  
          var $remove = $(this);
          var $selection = $remove.parent();
  
          var data = Utils.GetData($selection[0], 'data');
  
          self.trigger('unselect', {
            originalEvent: evt,
            data: data
          });
        }
      );
    };
  
    MultipleSelection.prototype.clear = function () {
      var $rendered = this.$selection.find('.select2-selection__rendered');
      $rendered.empty();
      $rendered.removeAttr('title');
    };
  
    MultipleSelection.prototype.display = function (data, container) {
      var template = this.options.get('templateSelection');
      var escapeMarkup = this.options.get('escapeMarkup');
  
      return escapeMarkup(template(data, container));
    };
  
    MultipleSelection.prototype.selectionContainer = function () {
      var $container = $(
        '<li class="select2-selection__choice">' +
          '<span class="select2-selection__choice__remove" role="presentation">' +
            '&times;' +
          '</span>' +
        '</li>'
      );
  
      return $container;
    };
  
    MultipleSelection.prototype.update = function (data) {
      this.clear();
  
      if (data.length === 0) {
        return;
      }
  
      var $selections = [];
  
      for (var d = 0; d < data.length; d++) {
        var selection = data[d];
  
        var $selection = this.selectionContainer();
        var formatted = this.display(selection, $selection);
  
        $selection.append(formatted);
        $selection.attr('title', selection.title || selection.text);
  
        Utils.StoreData($selection[0], 'data', selection);
  
        $selections.push($selection);
      }
  
      var $rendered = this.$selection.find('.select2-selection__rendered');
  
      Utils.appendMany($rendered, $selections);
    };
  
    return MultipleSelection;
  });
  
  S2.define('select2/selection/placeholder',[
    '../utils'
  ], function (Utils) {
    function Placeholder (decorated, $element, options) {
      this.placeholder = this.normalizePlaceholder(options.get('placeholder'));
  
      decorated.call(this, $element, options);
    }
  
    Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {
      if (typeof placeholder === 'string') {
        placeholder = {
          id: '',
          text: placeholder
        };
      }
  
      return placeholder;
    };
  
    Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {
      var $placeholder = this.selectionContainer();
  
      $placeholder.html(this.display(placeholder));
      $placeholder.addClass('select2-selection__placeholder')
                  .removeClass('select2-selection__choice');
  
      return $placeholder;
    };
  
    Placeholder.prototype.update = function (decorated, data) {
      var singlePlaceholder = (
        data.length == 1 && data[0].id != this.placeholder.id
      );
      var multipleSelections = data.length > 1;
  
      if (multipleSelections || singlePlaceholder) {
        return decorated.call(this, data);
      }
  
      this.clear();
  
      var $placeholder = this.createPlaceholder(this.placeholder);
  
      this.$selection.find('.select2-selection__rendered').append($placeholder);
    };
  
    return Placeholder;
  });
  
  S2.define('select2/selection/allowClear',[
    'jquery',
    '../keys',
    '../utils'
  ], function ($, KEYS, Utils) {
    function AllowClear () { }
  
    AllowClear.prototype.bind = function (decorated, container, $container) {
      var self = this;
  
      decorated.call(this, container, $container);
  
      if (this.placeholder == null) {
        if (this.options.get('debug') && window.console && console.error) {
          console.error(
            'Select2: The `allowClear` option should be used in combination ' +
            'with the `placeholder` option.'
          );
        }
      }
  
      this.$selection.on('mousedown', '.select2-selection__clear',
        function (evt) {
          self._handleClear(evt);
      });
  
      container.on('keypress', function (evt) {
        self._handleKeyboardClear(evt, container);
      });
    };
  
    AllowClear.prototype._handleClear = function (_, evt) {
      // Ignore the event if it is disabled
      if (this.options.get('disabled')) {
        return;
      }
  
      var $clear = this.$selection.find('.select2-selection__clear');
  
      // Ignore the event if nothing has been selected
      if ($clear.length === 0) {
        return;
      }
  
      evt.stopPropagation();
  
      var data = Utils.GetData($clear[0], 'data');
  
      var previousVal = this.$element.val();
      this.$element.val(this.placeholder.id);
  
      var unselectData = {
        data: data
      };
      this.trigger('clear', unselectData);
      if (unselectData.prevented) {
        this.$element.val(previousVal);
        return;
      }
  
      for (var d = 0; d < data.length; d++) {
        unselectData = {
          data: data[d]
        };
  
        // Trigger the `unselect` event, so people can prevent it from being
        // cleared.
        this.trigger('unselect', unselectData);
  
        // If the event was prevented, don't clear it out.
        if (unselectData.prevented) {
          this.$element.val(previousVal);
          return;
        }
      }
  
      this.$element.trigger('change');
  
      this.trigger('toggle', {});
    };
  
    AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {
      if (container.isOpen()) {
        return;
      }
  
      if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {
        this._handleClear(evt);
      }
    };
  
    AllowClear.prototype.update = function (decorated, data) {
      decorated.call(this, data);
  
      if (this.$selection.find('.select2-selection__placeholder').length > 0 ||
          data.length === 0) {
        return;
      }
  
      var $remove = $(
        '<span class="select2-selection__clear">' +
          '&times;' +
        '</span>'
      );
      Utils.StoreData($remove[0], 'data', data);
  
      this.$selection.find('.select2-selection__rendered').prepend($remove);
    };
  
    return AllowClear;
  });
  
  S2.define('select2/selection/search',[
    'jquery',
    '../utils',
    '../keys'
  ], function ($, Utils, KEYS) {
    function Search (decorated, $element, options) {
      decorated.call(this, $element, options);
    }
  
    Search.prototype.render = function (decorated) {
      var $search = $(
        '<li class="select2-search select2-search--inline">' +
          '<input class="select2-search__field" type="search" tabindex="-1"' +
          ' autocomplete="off" autocorrect="off" autocapitalize="none"' +
          ' spellcheck="false" role="textbox" aria-autocomplete="list" />' +
        '</li>'
      );
  
      this.$searchContainer = $search;
      this.$search = $search.find('input');
  
      var $rendered = decorated.call(this);
  
      this._transferTabIndex();
  
      return $rendered;
    };
  
    Search.prototype.bind = function (decorated, container, $container) {
      var self = this;
  
      decorated.call(this, container, $container);
  
      container.on('open', function () {
        self.$search.trigger('focus');
      });
  
      container.on('close', function () {
        self.$search.val('');
        self.$search.removeAttr('aria-activedescendant');
        self.$search.trigger('focus');
      });
  
      container.on('enable', function () {
        self.$search.prop('disabled', false);
  
        self._transferTabIndex();
      });
  
      container.on('disable', function () {
        self.$search.prop('disabled', true);
      });
  
      container.on('focus', function (evt) {
        self.$search.trigger('focus');
      });
  
      container.on('results:focus', function (params) {
        self.$search.attr('aria-activedescendant', params.id);
      });
  
      this.$selection.on('focusin', '.select2-search--inline', function (evt) {
        self.trigger('focus', evt);
      });
  
      this.$selection.on('focusout', '.select2-search--inline', function (evt) {
        self._handleBlur(evt);
      });
  
      this.$selection.on('keydown', '.select2-search--inline', function (evt) {
        evt.stopPropagation();
  
        self.trigger('keypress', evt);
  
        self._keyUpPrevented = evt.isDefaultPrevented();
  
        var key = evt.which;
  
        if (key === KEYS.BACKSPACE && self.$search.val() === '') {
          var $previousChoice = self.$searchContainer
            .prev('.select2-selection__choice');
  
          if ($previousChoice.length > 0) {
            var item = Utils.GetData($previousChoice[0], 'data');
  
            self.searchRemoveChoice(item);
  
            evt.preventDefault();
          }
        }
      });
  
      // Try to detect the IE version should the `documentMode` property that
      // is stored on the document. This is only implemented in IE and is
      // slightly cleaner than doing a user agent check.
      // This property is not available in Edge, but Edge also doesn't have
      // this bug.
      var msie = document.documentMode;
      var disableInputEvents = msie && msie <= 11;
  
      // Workaround for browsers which do not support the `input` event
      // This will prevent double-triggering of events for browsers which support
      // both the `keyup` and `input` events.
      this.$selection.on(
        'input.searchcheck',
        '.select2-search--inline',
        function (evt) {
          // IE will trigger the `input` event when a placeholder is used on a
          // search box. To get around this issue, we are forced to ignore all
          // `input` events in IE and keep using `keyup`.
          if (disableInputEvents) {
            self.$selection.off('input.search input.searchcheck');
            return;
          }
  
          // Unbind the duplicated `keyup` event
          self.$selection.off('keyup.search');
        }
      );
  
      this.$selection.on(
        'keyup.search input.search',
        '.select2-search--inline',
        function (evt) {
          // IE will trigger the `input` event when a placeholder is used on a
          // search box. To get around this issue, we are forced to ignore all
          // `input` events in IE and keep using `keyup`.
          if (disableInputEvents && evt.type === 'input') {
            self.$selection.off('input.search input.searchcheck');
            return;
          }
  
          var key = evt.which;
  
          // We can freely ignore events from modifier keys
          if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {
            return;
          }
  
          // Tabbing will be handled during the `keydown` phase
          if (key == KEYS.TAB) {
            return;
          }
  
          self.handleSearch(evt);
        }
      );
    };
  
    /**
     * This method will transfer the tabindex attribute from the rendered
     * selection to the search box. This allows for the search box to be used as
     * the primary focus instead of the selection container.
     *
     * @private
     */
    Search.prototype._transferTabIndex = function (decorated) {
      this.$search.attr('tabindex', this.$selection.attr('tabindex'));
      this.$selection.attr('tabindex', '-1');
    };
  
    Search.prototype.createPlaceholder = function (decorated, placeholder) {
      this.$search.attr('placeholder', placeholder.text);
    };
  
    Search.prototype.update = function (decorated, data) {
      var searchHadFocus = this.$search[0] == document.activeElement;
  
      this.$search.attr('placeholder', '');
  
      decorated.call(this, data);
  
      this.$selection.find('.select2-selection__rendered')
                     .append(this.$searchContainer);
  
      this.resizeSearch();
      if (searchHadFocus) {
        var isTagInput = this.$element.find('[data-select2-tag]').length;
        if (isTagInput) {
          // fix IE11 bug where tag input lost focus
          this.$element.focus();
        } else {
          this.$search.focus();
        }
      }
    };
  
    Search.prototype.handleSearch = function () {
      this.resizeSearch();
  
      if (!this._keyUpPrevented) {
        var input = this.$search.val();
  
        this.trigger('query', {
          term: input
        });
      }
  
      this._keyUpPrevented = false;
    };
  
    Search.prototype.searchRemoveChoice = function (decorated, item) {
      this.trigger('unselect', {
        data: item
      });
  
      this.$search.val(item.text);
      this.handleSearch();
    };
  
    Search.prototype.resizeSearch = function () {
      this.$search.css('width', '25px');
  
      var width = '';
  
      if (this.$search.attr('placeholder') !== '') {
        width = this.$selection.find('.select2-selection__rendered').innerWidth();
      } else {
        var minimumWidth = this.$search.val().length + 1;
  
        width = (minimumWidth * 0.75) + 'em';
      }
  
      this.$search.css('width', width);
    };
  
    return Search;
  });
  
  S2.define('select2/selection/eventRelay',[
    'jquery'
  ], function ($) {
    function EventRelay () { }
  
    EventRelay.prototype.bind = function (decorated, container, $container) {
      var self = this;
      var relayEvents = [
        'open', 'opening',
        'close', 'closing',
        'select', 'selecting',
        'unselect', 'unselecting',
        'clear', 'clearing'
      ];
  
      var preventableEvents = [
        'opening', 'closing', 'selecting', 'unselecting', 'clearing'
      ];
  
      decorated.call(this, container, $container);
  
      container.on('*', function (name, params) {
        // Ignore events that should not be relayed
        if ($.inArray(name, relayEvents) === -1) {
          return;
        }
  
        // The parameters should always be an object
        params = params || {};
  
        // Generate the jQuery event for the Select2 event
        var evt = $.Event('select2:' + name, {
          params: params
        });
  
        self.$element.trigger(evt);
  
        // Only handle preventable events if it was one
        if ($.inArray(name, preventableEvents) === -1) {
          return;
        }
  
        params.prevented = evt.isDefaultPrevented();
      });
    };
  
    return EventRelay;
  });
  
  S2.define('select2/translation',[
    'jquery',
    'require'
  ], function ($, require) {
    function Translation (dict) {
      this.dict = dict || {};
    }
  
    Translation.prototype.all = function () {
      return this.dict;
    };
  
    Translation.prototype.get = function (key) {
      return this.dict[key];
    };
  
    Translation.prototype.extend = function (translation) {
      this.dict = $.extend({}, translation.all(), this.dict);
    };
  
    // Static functions
  
    Translation._cache = {};
  
    Translation.loadPath = function (path) {
      if (!(path in Translation._cache)) {
        var translations = require(path);
  
        Translation._cache[path] = translations;
      }
  
      return new Translation(Translation._cache[path]);
    };
  
    return Translation;
  });
  
  S2.define('select2/diacritics',[
  
  ], function () {
    var diacritics = {
      '\u24B6': 'A',
      '\uFF21': 'A',
      '\u00C0': 'A',
      '\u00C1': 'A',
      '\u00C2': 'A',
      '\u1EA6': 'A',
      '\u1EA4': 'A',
      '\u1EAA': 'A',
      '\u1EA8': 'A',
      '\u00C3': 'A',
      '\u0100': 'A',
      '\u0102': 'A',
      '\u1EB0': 'A',
      '\u1EAE': 'A',
      '\u1EB4': 'A',
      '\u1EB2': 'A',
      '\u0226': 'A',
      '\u01E0': 'A',
      '\u00C4': 'A',
      '\u01DE': 'A',
      '\u1EA2': 'A',
      '\u00C5': 'A',
      '\u01FA': 'A',
      '\u01CD': 'A',
      '\u0200': 'A',
      '\u0202': 'A',
      '\u1EA0': 'A',
      '\u1EAC': 'A',
      '\u1EB6': 'A',
      '\u1E00': 'A',
      '\u0104': 'A',
      '\u023A': 'A',
      '\u2C6F': 'A',
      '\uA732': 'AA',
      '\u00C6': 'AE',
      '\u01FC': 'AE',
      '\u01E2': 'AE',
      '\uA734': 'AO',
      '\uA736': 'AU',
      '\uA738': 'AV',
      '\uA73A': 'AV',
      '\uA73C': 'AY',
      '\u24B7': 'B',
      '\uFF22': 'B',
      '\u1E02': 'B',
      '\u1E04': 'B',
      '\u1E06': 'B',
      '\u0243': 'B',
      '\u0182': 'B',
      '\u0181': 'B',
      '\u24B8': 'C',
      '\uFF23': 'C',
      '\u0106': 'C',
      '\u0108': 'C',
      '\u010A': 'C',
      '\u010C': 'C',
      '\u00C7': 'C',
      '\u1E08': 'C',
      '\u0187': 'C',
      '\u023B': 'C',
      '\uA73E': 'C',
      '\u24B9': 'D',
      '\uFF24': 'D',
      '\u1E0A': 'D',
      '\u010E': 'D',
      '\u1E0C': 'D',
      '\u1E10': 'D',
      '\u1E12': 'D',
      '\u1E0E': 'D',
      '\u0110': 'D',
      '\u018B': 'D',
      '\u018A': 'D',
      '\u0189': 'D',
      '\uA779': 'D',
      '\u01F1': 'DZ',
      '\u01C4': 'DZ',
      '\u01F2': 'Dz',
      '\u01C5': 'Dz',
      '\u24BA': 'E',
      '\uFF25': 'E',
      '\u00C8': 'E',
      '\u00C9': 'E',
      '\u00CA': 'E',
      '\u1EC0': 'E',
      '\u1EBE': 'E',
      '\u1EC4': 'E',
      '\u1EC2': 'E',
      '\u1EBC': 'E',
      '\u0112': 'E',
      '\u1E14': 'E',
      '\u1E16': 'E',
      '\u0114': 'E',
      '\u0116': 'E',
      '\u00CB': 'E',
      '\u1EBA': 'E',
      '\u011A': 'E',
      '\u0204': 'E',
      '\u0206': 'E',
      '\u1EB8': 'E',
      '\u1EC6': 'E',
      '\u0228': 'E',
      '\u1E1C': 'E',
      '\u0118': 'E',
      '\u1E18': 'E',
      '\u1E1A': 'E',
      '\u0190': 'E',
      '\u018E': 'E',
      '\u24BB': 'F',
      '\uFF26': 'F',
      '\u1E1E': 'F',
      '\u0191': 'F',
      '\uA77B': 'F',
      '\u24BC': 'G',
      '\uFF27': 'G',
      '\u01F4': 'G',
      '\u011C': 'G',
      '\u1E20': 'G',
      '\u011E': 'G',
      '\u0120': 'G',
      '\u01E6': 'G',
      '\u0122': 'G',
      '\u01E4': 'G',
      '\u0193': 'G',
      '\uA7A0': 'G',
      '\uA77D': 'G',
      '\uA77E': 'G',
      '\u24BD': 'H',
      '\uFF28': 'H',
      '\u0124': 'H',
      '\u1E22': 'H',
      '\u1E26': 'H',
      '\u021E': 'H',
      '\u1E24': 'H',
      '\u1E28': 'H',
      '\u1E2A': 'H',
      '\u0126': 'H',
      '\u2C67': 'H',
      '\u2C75': 'H',
      '\uA78D': 'H',
      '\u24BE': 'I',
      '\uFF29': 'I',
      '\u00CC': 'I',
      '\u00CD': 'I',
      '\u00CE': 'I',
      '\u0128': 'I',
      '\u012A': 'I',
      '\u012C': 'I',
      '\u0130': 'I',
      '\u00CF': 'I',
      '\u1E2E': 'I',
      '\u1EC8': 'I',
      '\u01CF': 'I',
      '\u0208': 'I',
      '\u020A': 'I',
      '\u1ECA': 'I',
      '\u012E': 'I',
      '\u1E2C': 'I',
      '\u0197': 'I',
      '\u24BF': 'J',
      '\uFF2A': 'J',
      '\u0134': 'J',
      '\u0248': 'J',
      '\u24C0': 'K',
      '\uFF2B': 'K',
      '\u1E30': 'K',
      '\u01E8': 'K',
      '\u1E32': 'K',
      '\u0136': 'K',
      '\u1E34': 'K',
      '\u0198': 'K',
      '\u2C69': 'K',
      '\uA740': 'K',
      '\uA742': 'K',
      '\uA744': 'K',
      '\uA7A2': 'K',
      '\u24C1': 'L',
      '\uFF2C': 'L',
      '\u013F': 'L',
      '\u0139': 'L',
      '\u013D': 'L',
      '\u1E36': 'L',
      '\u1E38': 'L',
      '\u013B': 'L',
      '\u1E3C': 'L',
      '\u1E3A': 'L',
      '\u0141': 'L',
      '\u023D': 'L',
      '\u2C62': 'L',
      '\u2C60': 'L',
      '\uA748': 'L',
      '\uA746': 'L',
      '\uA780': 'L',
      '\u01C7': 'LJ',
      '\u01C8': 'Lj',
      '\u24C2': 'M',
      '\uFF2D': 'M',
      '\u1E3E': 'M',
      '\u1E40': 'M',
      '\u1E42': 'M',
      '\u2C6E': 'M',
      '\u019C': 'M',
      '\u24C3': 'N',
      '\uFF2E': 'N',
      '\u01F8': 'N',
      '\u0143': 'N',
      '\u00D1': 'N',
      '\u1E44': 'N',
      '\u0147': 'N',
      '\u1E46': 'N',
      '\u0145': 'N',
      '\u1E4A': 'N',
      '\u1E48': 'N',
      '\u0220': 'N',
      '\u019D': 'N',
      '\uA790': 'N',
      '\uA7A4': 'N',
      '\u01CA': 'NJ',
      '\u01CB': 'Nj',
      '\u24C4': 'O',
      '\uFF2F': 'O',
      '\u00D2': 'O',
      '\u00D3': 'O',
      '\u00D4': 'O',
      '\u1ED2': 'O',
      '\u1ED0': 'O',
      '\u1ED6': 'O',
      '\u1ED4': 'O',
      '\u00D5': 'O',
      '\u1E4C': 'O',
      '\u022C': 'O',
      '\u1E4E': 'O',
      '\u014C': 'O',
      '\u1E50': 'O',
      '\u1E52': 'O',
      '\u014E': 'O',
      '\u022E': 'O',
      '\u0230': 'O',
      '\u00D6': 'O',
      '\u022A': 'O',
      '\u1ECE': 'O',
      '\u0150': 'O',
      '\u01D1': 'O',
      '\u020C': 'O',
      '\u020E': 'O',
      '\u01A0': 'O',
      '\u1EDC': 'O',
      '\u1EDA': 'O',
      '\u1EE0': 'O',
      '\u1EDE': 'O',
      '\u1EE2': 'O',
      '\u1ECC': 'O',
      '\u1ED8': 'O',
      '\u01EA': 'O',
      '\u01EC': 'O',
      '\u00D8': 'O',
      '\u01FE': 'O',
      '\u0186': 'O',
      '\u019F': 'O',
      '\uA74A': 'O',
      '\uA74C': 'O',
      '\u01A2': 'OI',
      '\uA74E': 'OO',
      '\u0222': 'OU',
      '\u24C5': 'P',
      '\uFF30': 'P',
      '\u1E54': 'P',
      '\u1E56': 'P',
      '\u01A4': 'P',
      '\u2C63': 'P',
      '\uA750': 'P',
      '\uA752': 'P',
      '\uA754': 'P',
      '\u24C6': 'Q',
      '\uFF31': 'Q',
      '\uA756': 'Q',
      '\uA758': 'Q',
      '\u024A': 'Q',
      '\u24C7': 'R',
      '\uFF32': 'R',
      '\u0154': 'R',
      '\u1E58': 'R',
      '\u0158': 'R',
      '\u0210': 'R',
      '\u0212': 'R',
      '\u1E5A': 'R',
      '\u1E5C': 'R',
      '\u0156': 'R',
      '\u1E5E': 'R',
      '\u024C': 'R',
      '\u2C64': 'R',
      '\uA75A': 'R',
      '\uA7A6': 'R',
      '\uA782': 'R',
      '\u24C8': 'S',
      '\uFF33': 'S',
      '\u1E9E': 'S',
      '\u015A': 'S',
      '\u1E64': 'S',
      '\u015C': 'S',
      '\u1E60': 'S',
      '\u0160': 'S',
      '\u1E66': 'S',
      '\u1E62': 'S',
      '\u1E68': 'S',
      '\u0218': 'S',
      '\u015E': 'S',
      '\u2C7E': 'S',
      '\uA7A8': 'S',
      '\uA784': 'S',
      '\u24C9': 'T',
      '\uFF34': 'T',
      '\u1E6A': 'T',
      '\u0164': 'T',
      '\u1E6C': 'T',
      '\u021A': 'T',
      '\u0162': 'T',
      '\u1E70': 'T',
      '\u1E6E': 'T',
      '\u0166': 'T',
      '\u01AC': 'T',
      '\u01AE': 'T',
      '\u023E': 'T',
      '\uA786': 'T',
      '\uA728': 'TZ',
      '\u24CA': 'U',
      '\uFF35': 'U',
      '\u00D9': 'U',
      '\u00DA': 'U',
      '\u00DB': 'U',
      '\u0168': 'U',
      '\u1E78': 'U',
      '\u016A': 'U',
      '\u1E7A': 'U',
      '\u016C': 'U',
      '\u00DC': 'U',
      '\u01DB': 'U',
      '\u01D7': 'U',
      '\u01D5': 'U',
      '\u01D9': 'U',
      '\u1EE6': 'U',
      '\u016E': 'U',
      '\u0170': 'U',
      '\u01D3': 'U',
      '\u0214': 'U',
      '\u0216': 'U',
      '\u01AF': 'U',
      '\u1EEA': 'U',
      '\u1EE8': 'U',
      '\u1EEE': 'U',
      '\u1EEC': 'U',
      '\u1EF0': 'U',
      '\u1EE4': 'U',
      '\u1E72': 'U',
      '\u0172': 'U',
      '\u1E76': 'U',
      '\u1E74': 'U',
      '\u0244': 'U',
      '\u24CB': 'V',
      '\uFF36': 'V',
      '\u1E7C': 'V',
      '\u1E7E': 'V',
      '\u01B2': 'V',
      '\uA75E': 'V',
      '\u0245': 'V',
      '\uA760': 'VY',
      '\u24CC': 'W',
      '\uFF37': 'W',
      '\u1E80': 'W',
      '\u1E82': 'W',
      '\u0174': 'W',
      '\u1E86': 'W',
      '\u1E84': 'W',
      '\u1E88': 'W',
      '\u2C72': 'W',
      '\u24CD': 'X',
      '\uFF38': 'X',
      '\u1E8A': 'X',
      '\u1E8C': 'X',
      '\u24CE': 'Y',
      '\uFF39': 'Y',
      '\u1EF2': 'Y',
      '\u00DD': 'Y',
      '\u0176': 'Y',
      '\u1EF8': 'Y',
      '\u0232': 'Y',
      '\u1E8E': 'Y',
      '\u0178': 'Y',
      '\u1EF6': 'Y',
      '\u1EF4': 'Y',
      '\u01B3': 'Y',
      '\u024E': 'Y',
      '\u1EFE': 'Y',
      '\u24CF': 'Z',
      '\uFF3A': 'Z',
      '\u0179': 'Z',
      '\u1E90': 'Z',
      '\u017B': 'Z',
      '\u017D': 'Z',
      '\u1E92': 'Z',
      '\u1E94': 'Z',
      '\u01B5': 'Z',
      '\u0224': 'Z',
      '\u2C7F': 'Z',
      '\u2C6B': 'Z',
      '\uA762': 'Z',
      '\u24D0': 'a',
      '\uFF41': 'a',
      '\u1E9A': 'a',
      '\u00E0': 'a',
      '\u00E1': 'a',
      '\u00E2': 'a',
      '\u1EA7': 'a',
      '\u1EA5': 'a',
      '\u1EAB': 'a',
      '\u1EA9': 'a',
      '\u00E3': 'a',
      '\u0101': 'a',
      '\u0103': 'a',
      '\u1EB1': 'a',
      '\u1EAF': 'a',
      '\u1EB5': 'a',
      '\u1EB3': 'a',
      '\u0227': 'a',
      '\u01E1': 'a',
      '\u00E4': 'a',
      '\u01DF': 'a',
      '\u1EA3': 'a',
      '\u00E5': 'a',
      '\u01FB': 'a',
      '\u01CE': 'a',
      '\u0201': 'a',
      '\u0203': 'a',
      '\u1EA1': 'a',
      '\u1EAD': 'a',
      '\u1EB7': 'a',
      '\u1E01': 'a',
      '\u0105': 'a',
      '\u2C65': 'a',
      '\u0250': 'a',
      '\uA733': 'aa',
      '\u00E6': 'ae',
      '\u01FD': 'ae',
      '\u01E3': 'ae',
      '\uA735': 'ao',
      '\uA737': 'au',
      '\uA739': 'av',
      '\uA73B': 'av',
      '\uA73D': 'ay',
      '\u24D1': 'b',
      '\uFF42': 'b',
      '\u1E03': 'b',
      '\u1E05': 'b',
      '\u1E07': 'b',
      '\u0180': 'b',
      '\u0183': 'b',
      '\u0253': 'b',
      '\u24D2': 'c',
      '\uFF43': 'c',
      '\u0107': 'c',
      '\u0109': 'c',
      '\u010B': 'c',
      '\u010D': 'c',
      '\u00E7': 'c',
      '\u1E09': 'c',
      '\u0188': 'c',
      '\u023C': 'c',
      '\uA73F': 'c',
      '\u2184': 'c',
      '\u24D3': 'd',
      '\uFF44': 'd',
      '\u1E0B': 'd',
      '\u010F': 'd',
      '\u1E0D': 'd',
      '\u1E11': 'd',
      '\u1E13': 'd',
      '\u1E0F': 'd',
      '\u0111': 'd',
      '\u018C': 'd',
      '\u0256': 'd',
      '\u0257': 'd',
      '\uA77A': 'd',
      '\u01F3': 'dz',
      '\u01C6': 'dz',
      '\u24D4': 'e',
      '\uFF45': 'e',
      '\u00E8': 'e',
      '\u00E9': 'e',
      '\u00EA': 'e',
      '\u1EC1': 'e',
      '\u1EBF': 'e',
      '\u1EC5': 'e',
      '\u1EC3': 'e',
      '\u1EBD': 'e',
      '\u0113': 'e',
      '\u1E15': 'e',
      '\u1E17': 'e',
      '\u0115': 'e',
      '\u0117': 'e',
      '\u00EB': 'e',
      '\u1EBB': 'e',
      '\u011B': 'e',
      '\u0205': 'e',
      '\u0207': 'e',
      '\u1EB9': 'e',
      '\u1EC7': 'e',
      '\u0229': 'e',
      '\u1E1D': 'e',
      '\u0119': 'e',
      '\u1E19': 'e',
      '\u1E1B': 'e',
      '\u0247': 'e',
      '\u025B': 'e',
      '\u01DD': 'e',
      '\u24D5': 'f',
      '\uFF46': 'f',
      '\u1E1F': 'f',
      '\u0192': 'f',
      '\uA77C': 'f',
      '\u24D6': 'g',
      '\uFF47': 'g',
      '\u01F5': 'g',
      '\u011D': 'g',
      '\u1E21': 'g',
      '\u011F': 'g',
      '\u0121': 'g',
      '\u01E7': 'g',
      '\u0123': 'g',
      '\u01E5': 'g',
      '\u0260': 'g',
      '\uA7A1': 'g',
      '\u1D79': 'g',
      '\uA77F': 'g',
      '\u24D7': 'h',
      '\uFF48': 'h',
      '\u0125': 'h',
      '\u1E23': 'h',
      '\u1E27': 'h',
      '\u021F': 'h',
      '\u1E25': 'h',
      '\u1E29': 'h',
      '\u1E2B': 'h',
      '\u1E96': 'h',
      '\u0127': 'h',
      '\u2C68': 'h',
      '\u2C76': 'h',
      '\u0265': 'h',
      '\u0195': 'hv',
      '\u24D8': 'i',
      '\uFF49': 'i',
      '\u00EC': 'i',
      '\u00ED': 'i',
      '\u00EE': 'i',
      '\u0129': 'i',
      '\u012B': 'i',
      '\u012D': 'i',
      '\u00EF': 'i',
      '\u1E2F': 'i',
      '\u1EC9': 'i',
      '\u01D0': 'i',
      '\u0209': 'i',
      '\u020B': 'i',
      '\u1ECB': 'i',
      '\u012F': 'i',
      '\u1E2D': 'i',
      '\u0268': 'i',
      '\u0131': 'i',
      '\u24D9': 'j',
      '\uFF4A': 'j',
      '\u0135': 'j',
      '\u01F0': 'j',
      '\u0249': 'j',
      '\u24DA': 'k',
      '\uFF4B': 'k',
      '\u1E31': 'k',
      '\u01E9': 'k',
      '\u1E33': 'k',
      '\u0137': 'k',
      '\u1E35': 'k',
      '\u0199': 'k',
      '\u2C6A': 'k',
      '\uA741': 'k',
      '\uA743': 'k',
      '\uA745': 'k',
      '\uA7A3': 'k',
      '\u24DB': 'l',
      '\uFF4C': 'l',
      '\u0140': 'l',
      '\u013A': 'l',
      '\u013E': 'l',
      '\u1E37': 'l',
      '\u1E39': 'l',
      '\u013C': 'l',
      '\u1E3D': 'l',
      '\u1E3B': 'l',
      '\u017F': 'l',
      '\u0142': 'l',
      '\u019A': 'l',
      '\u026B': 'l',
      '\u2C61': 'l',
      '\uA749': 'l',
      '\uA781': 'l',
      '\uA747': 'l',
      '\u01C9': 'lj',
      '\u24DC': 'm',
      '\uFF4D': 'm',
      '\u1E3F': 'm',
      '\u1E41': 'm',
      '\u1E43': 'm',
      '\u0271': 'm',
      '\u026F': 'm',
      '\u24DD': 'n',
      '\uFF4E': 'n',
      '\u01F9': 'n',
      '\u0144': 'n',
      '\u00F1': 'n',
      '\u1E45': 'n',
      '\u0148': 'n',
      '\u1E47': 'n',
      '\u0146': 'n',
      '\u1E4B': 'n',
      '\u1E49': 'n',
      '\u019E': 'n',
      '\u0272': 'n',
      '\u0149': 'n',
      '\uA791': 'n',
      '\uA7A5': 'n',
      '\u01CC': 'nj',
      '\u24DE': 'o',
      '\uFF4F': 'o',
      '\u00F2': 'o',
      '\u00F3': 'o',
      '\u00F4': 'o',
      '\u1ED3': 'o',
      '\u1ED1': 'o',
      '\u1ED7': 'o',
      '\u1ED5': 'o',
      '\u00F5': 'o',
      '\u1E4D': 'o',
      '\u022D': 'o',
      '\u1E4F': 'o',
      '\u014D': 'o',
      '\u1E51': 'o',
      '\u1E53': 'o',
      '\u014F': 'o',
      '\u022F': 'o',
      '\u0231': 'o',
      '\u00F6': 'o',
      '\u022B': 'o',
      '\u1ECF': 'o',
      '\u0151': 'o',
      '\u01D2': 'o',
      '\u020D': 'o',
      '\u020F': 'o',
      '\u01A1': 'o',
      '\u1EDD': 'o',
      '\u1EDB': 'o',
      '\u1EE1': 'o',
      '\u1EDF': 'o',
      '\u1EE3': 'o',
      '\u1ECD': 'o',
      '\u1ED9': 'o',
      '\u01EB': 'o',
      '\u01ED': 'o',
      '\u00F8': 'o',
      '\u01FF': 'o',
      '\u0254': 'o',
      '\uA74B': 'o',
      '\uA74D': 'o',
      '\u0275': 'o',
      '\u01A3': 'oi',
      '\u0223': 'ou',
      '\uA74F': 'oo',
      '\u24DF': 'p',
      '\uFF50': 'p',
      '\u1E55': 'p',
      '\u1E57': 'p',
      '\u01A5': 'p',
      '\u1D7D': 'p',
      '\uA751': 'p',
      '\uA753': 'p',
      '\uA755': 'p',
      '\u24E0': 'q',
      '\uFF51': 'q',
      '\u024B': 'q',
      '\uA757': 'q',
      '\uA759': 'q',
      '\u24E1': 'r',
      '\uFF52': 'r',
      '\u0155': 'r',
      '\u1E59': 'r',
      '\u0159': 'r',
      '\u0211': 'r',
      '\u0213': 'r',
      '\u1E5B': 'r',
      '\u1E5D': 'r',
      '\u0157': 'r',
      '\u1E5F': 'r',
      '\u024D': 'r',
      '\u027D': 'r',
      '\uA75B': 'r',
      '\uA7A7': 'r',
      '\uA783': 'r',
      '\u24E2': 's',
      '\uFF53': 's',
      '\u00DF': 's',
      '\u015B': 's',
      '\u1E65': 's',
      '\u015D': 's',
      '\u1E61': 's',
      '\u0161': 's',
      '\u1E67': 's',
      '\u1E63': 's',
      '\u1E69': 's',
      '\u0219': 's',
      '\u015F': 's',
      '\u023F': 's',
      '\uA7A9': 's',
      '\uA785': 's',
      '\u1E9B': 's',
      '\u24E3': 't',
      '\uFF54': 't',
      '\u1E6B': 't',
      '\u1E97': 't',
      '\u0165': 't',
      '\u1E6D': 't',
      '\u021B': 't',
      '\u0163': 't',
      '\u1E71': 't',
      '\u1E6F': 't',
      '\u0167': 't',
      '\u01AD': 't',
      '\u0288': 't',
      '\u2C66': 't',
      '\uA787': 't',
      '\uA729': 'tz',
      '\u24E4': 'u',
      '\uFF55': 'u',
      '\u00F9': 'u',
      '\u00FA': 'u',
      '\u00FB': 'u',
      '\u0169': 'u',
      '\u1E79': 'u',
      '\u016B': 'u',
      '\u1E7B': 'u',
      '\u016D': 'u',
      '\u00FC': 'u',
      '\u01DC': 'u',
      '\u01D8': 'u',
      '\u01D6': 'u',
      '\u01DA': 'u',
      '\u1EE7': 'u',
      '\u016F': 'u',
      '\u0171': 'u',
      '\u01D4': 'u',
      '\u0215': 'u',
      '\u0217': 'u',
      '\u01B0': 'u',
      '\u1EEB': 'u',
      '\u1EE9': 'u',
      '\u1EEF': 'u',
      '\u1EED': 'u',
      '\u1EF1': 'u',
      '\u1EE5': 'u',
      '\u1E73': 'u',
      '\u0173': 'u',
      '\u1E77': 'u',
      '\u1E75': 'u',
      '\u0289': 'u',
      '\u24E5': 'v',
      '\uFF56': 'v',
      '\u1E7D': 'v',
      '\u1E7F': 'v',
      '\u028B': 'v',
      '\uA75F': 'v',
      '\u028C': 'v',
      '\uA761': 'vy',
      '\u24E6': 'w',
      '\uFF57': 'w',
      '\u1E81': 'w',
      '\u1E83': 'w',
      '\u0175': 'w',
      '\u1E87': 'w',
      '\u1E85': 'w',
      '\u1E98': 'w',
      '\u1E89': 'w',
      '\u2C73': 'w',
      '\u24E7': 'x',
      '\uFF58': 'x',
      '\u1E8B': 'x',
      '\u1E8D': 'x',
      '\u24E8': 'y',
      '\uFF59': 'y',
      '\u1EF3': 'y',
      '\u00FD': 'y',
      '\u0177': 'y',
      '\u1EF9': 'y',
      '\u0233': 'y',
      '\u1E8F': 'y',
      '\u00FF': 'y',
      '\u1EF7': 'y',
      '\u1E99': 'y',
      '\u1EF5': 'y',
      '\u01B4': 'y',
      '\u024F': 'y',
      '\u1EFF': 'y',
      '\u24E9': 'z',
      '\uFF5A': 'z',
      '\u017A': 'z',
      '\u1E91': 'z',
      '\u017C': 'z',
      '\u017E': 'z',
      '\u1E93': 'z',
      '\u1E95': 'z',
      '\u01B6': 'z',
      '\u0225': 'z',
      '\u0240': 'z',
      '\u2C6C': 'z',
      '\uA763': 'z',
      '\u0386': '\u0391',
      '\u0388': '\u0395',
      '\u0389': '\u0397',
      '\u038A': '\u0399',
      '\u03AA': '\u0399',
      '\u038C': '\u039F',
      '\u038E': '\u03A5',
      '\u03AB': '\u03A5',
      '\u038F': '\u03A9',
      '\u03AC': '\u03B1',
      '\u03AD': '\u03B5',
      '\u03AE': '\u03B7',
      '\u03AF': '\u03B9',
      '\u03CA': '\u03B9',
      '\u0390': '\u03B9',
      '\u03CC': '\u03BF',
      '\u03CD': '\u03C5',
      '\u03CB': '\u03C5',
      '\u03B0': '\u03C5',
      '\u03C9': '\u03C9',
      '\u03C2': '\u03C3'
    };
  
    return diacritics;
  });
  
  S2.define('select2/data/base',[
    '../utils'
  ], function (Utils) {
    function BaseAdapter ($element, options) {
      BaseAdapter.__super__.constructor.call(this);
    }
  
    Utils.Extend(BaseAdapter, Utils.Observable);
  
    BaseAdapter.prototype.current = function (callback) {
      throw new Error('The `current` method must be defined in child classes.');
    };
  
    BaseAdapter.prototype.query = function (params, callback) {
      throw new Error('The `query` method must be defined in child classes.');
    };
  
    BaseAdapter.prototype.bind = function (container, $container) {
      // Can be implemented in subclasses
    };
  
    BaseAdapter.prototype.destroy = function () {
      // Can be implemented in subclasses
    };
  
    BaseAdapter.prototype.generateResultId = function (container, data) {
      var id = container.id + '-result-';
  
      id += Utils.generateChars(4);
  
      if (data.id != null) {
        id += '-' + data.id.toString();
      } else {
        id += '-' + Utils.generateChars(4);
      }
      return id;
    };
  
    return BaseAdapter;
  });
  
  S2.define('select2/data/select',[
    './base',
    '../utils',
    'jquery'
  ], function (BaseAdapter, Utils, $) {
    function SelectAdapter ($element, options) {
      this.$element = $element;
      this.options = options;
  
      SelectAdapter.__super__.constructor.call(this);
    }
  
    Utils.Extend(SelectAdapter, BaseAdapter);
  
    SelectAdapter.prototype.current = function (callback) {
      var data = [];
      var self = this;
  
      this.$element.find(':selected').each(function () {
        var $option = $(this);
  
        var option = self.item($option);
  
        data.push(option);
      });
  
      callback(data);
    };
  
    SelectAdapter.prototype.select = function (data) {
      var self = this;
  
      data.selected = true;
  
      // If data.element is a DOM node, use it instead
      if ($(data.element).is('option')) {
        data.element.selected = true;
  
        this.$element.trigger('change');
  
        return;
      }
  
      if (this.$element.prop('multiple')) {
        this.current(function (currentData) {
          var val = [];
  
          data = [data];
          data.push.apply(data, currentData);
  
          for (var d = 0; d < data.length; d++) {
            var id = data[d].id;
  
            if ($.inArray(id, val) === -1) {
              val.push(id);
            }
          }
  
          self.$element.val(val);
          self.$element.trigger('change');
        });
      } else {
        var val = data.id;
  
        this.$element.val(val);
        this.$element.trigger('change');
      }
    };
  
    SelectAdapter.prototype.unselect = function (data) {
      var self = this;
  
      if (!this.$element.prop('multiple')) {
        return;
      }
  
      data.selected = false;
  
      if ($(data.element).is('option')) {
        data.element.selected = false;
  
        this.$element.trigger('change');
  
        return;
      }
  
      this.current(function (currentData) {
        var val = [];
  
        for (var d = 0; d < currentData.length; d++) {
          var id = currentData[d].id;
  
          if (id !== data.id && $.inArray(id, val) === -1) {
            val.push(id);
          }
        }
  
        self.$element.val(val);
  
        self.$element.trigger('change');
      });
    };
  
    SelectAdapter.prototype.bind = function (container, $container) {
      var self = this;
  
      this.container = container;
  
      container.on('select', function (params) {
        self.select(params.data);
      });
  
      container.on('unselect', function (params) {
        self.unselect(params.data);
      });
    };
  
    SelectAdapter.prototype.destroy = function () {
      // Remove anything added to child elements
      this.$element.find('*').each(function () {
        // Remove any custom data set by Select2
        Utils.RemoveData(this);
      });
    };
  
    SelectAdapter.prototype.query = function (params, callback) {
      var data = [];
      var self = this;
  
      var $options = this.$element.children();
  
      $options.each(function () {
        var $option = $(this);
  
        if (!$option.is('option') && !$option.is('optgroup')) {
          return;
        }
  
        var option = self.item($option);
  
        var matches = self.matches(params, option);
  
        if (matches !== null) {
          data.push(matches);
        }
      });
  
      callback({
        results: data
      });
    };
  
    SelectAdapter.prototype.addOptions = function ($options) {
      Utils.appendMany(this.$element, $options);
    };
  
    SelectAdapter.prototype.option = function (data) {
      var option;
  
      if (data.children) {
        option = document.createElement('optgroup');
        option.label = data.text;
      } else {
        option = document.createElement('option');
  
        if (option.textContent !== undefined) {
          option.textContent = data.text;
        } else {
          option.innerText = data.text;
        }
      }
  
      if (data.id !== undefined) {
        option.value = data.id;
      }
  
      if (data.disabled) {
        option.disabled = true;
      }
  
      if (data.selected) {
        option.selected = true;
      }
  
      if (data.title) {
        option.title = data.title;
      }
  
      var $option = $(option);
  
      var normalizedData = this._normalizeItem(data);
      normalizedData.element = option;
  
      // Override the option's data with the combined data
      Utils.StoreData(option, 'data', normalizedData);
  
      return $option;
    };
  
    SelectAdapter.prototype.item = function ($option) {
      var data = {};
  
      data = Utils.GetData($option[0], 'data');
  
      if (data != null) {
        return data;
      }
  
      if ($option.is('option')) {
        data = {
          id: $option.val(),
          text: $option.text(),
          disabled: $option.prop('disabled'),
          selected: $option.prop('selected'),
          title: $option.prop('title')
        };
      } else if ($option.is('optgroup')) {
        data = {
          text: $option.prop('label'),
          children: [],
          title: $option.prop('title')
        };
  
        var $children = $option.children('option');
        var children = [];
  
        for (var c = 0; c < $children.length; c++) {
          var $child = $($children[c]);
  
          var child = this.item($child);
  
          children.push(child);
        }
  
        data.children = children;
      }
  
      data = this._normalizeItem(data);
      data.element = $option[0];
  
      Utils.StoreData($option[0], 'data', data);
  
      return data;
    };
  
    SelectAdapter.prototype._normalizeItem = function (item) {
      if (item !== Object(item)) {
        item = {
          id: item,
          text: item
        };
      }
  
      item = $.extend({}, {
        text: ''
      }, item);
  
      var defaults = {
        selected: false,
        disabled: false
      };
  
      if (item.id != null) {
        item.id = item.id.toString();
      }
  
      if (item.text != null) {
        item.text = item.text.toString();
      }
  
      if (item._resultId == null && item.id && this.container != null) {
        item._resultId = this.generateResultId(this.container, item);
      }
  
      return $.extend({}, defaults, item);
    };
  
    SelectAdapter.prototype.matches = function (params, data) {
      var matcher = this.options.get('matcher');
  
      return matcher(params, data);
    };
  
    return SelectAdapter;
  });
  
  S2.define('select2/data/array',[
    './select',
    '../utils',
    'jquery'
  ], function (SelectAdapter, Utils, $) {
    function ArrayAdapter ($element, options) {
      var data = options.get('data') || [];
  
      ArrayAdapter.__super__.constructor.call(this, $element, options);
  
      this.addOptions(this.convertToOptions(data));
    }
  
    Utils.Extend(ArrayAdapter, SelectAdapter);
  
    ArrayAdapter.prototype.select = function (data) {
      var $option = this.$element.find('option').filter(function (i, elm) {
        return elm.value == data.id.toString();
      });
  
      if ($option.length === 0) {
        $option = this.option(data);
  
        this.addOptions($option);
      }
  
      ArrayAdapter.__super__.select.call(this, data);
    };
  
    ArrayAdapter.prototype.convertToOptions = function (data) {
      var self = this;
  
      var $existing = this.$element.find('option');
      var existingIds = $existing.map(function () {
        return self.item($(this)).id;
      }).get();
  
      var $options = [];
  
      // Filter out all items except for the one passed in the argument
      function onlyItem (item) {
        return function () {
          return $(this).val() == item.id;
        };
      }
  
      for (var d = 0; d < data.length; d++) {
        var item = this._normalizeItem(data[d]);
  
        // Skip items which were pre-loaded, only merge the data
        if ($.inArray(item.id, existingIds) >= 0) {
          var $existingOption = $existing.filter(onlyItem(item));
  
          var existingData = this.item($existingOption);
          var newData = $.extend(true, {}, item, existingData);
  
          var $newOption = this.option(newData);
  
          $existingOption.replaceWith($newOption);
  
          continue;
        }
  
        var $option = this.option(item);
  
        if (item.children) {
          var $children = this.convertToOptions(item.children);
  
          Utils.appendMany($option, $children);
        }
  
        $options.push($option);
      }
  
      return $options;
    };
  
    return ArrayAdapter;
  });
  
  S2.define('select2/data/ajax',[
    './array',
    '../utils',
    'jquery'
  ], function (ArrayAdapter, Utils, $) {
    function AjaxAdapter ($element, options) {
      this.ajaxOptions = this._applyDefaults(options.get('ajax'));
  
      if (this.ajaxOptions.processResults != null) {
        this.processResults = this.ajaxOptions.processResults;
      }
  
      AjaxAdapter.__super__.constructor.call(this, $element, options);
    }
  
    Utils.Extend(AjaxAdapter, ArrayAdapter);
  
    AjaxAdapter.prototype._applyDefaults = function (options) {
      var defaults = {
        data: function (params) {
          return $.extend({}, params, {
            q: params.term
          });
        },
        transport: function (params, success, failure) {
          var $request = $.ajax(params);
  
          $request.then(success);
          $request.fail(failure);
  
          return $request;
        }
      };
  
      return $.extend({}, defaults, options, true);
    };
  
    AjaxAdapter.prototype.processResults = function (results) {
      return results;
    };
  
    AjaxAdapter.prototype.query = function (params, callback) {
      var matches = [];
      var self = this;
  
      if (this._request != null) {
        // JSONP requests cannot always be aborted
        if ($.isFunction(this._request.abort)) {
          this._request.abort();
        }
  
        this._request = null;
      }
  
      var options = $.extend({
        type: 'GET'
      }, this.ajaxOptions);
  
      if (typeof options.url === 'function') {
        options.url = options.url.call(this.$element, params);
      }
  
      if (typeof options.data === 'function') {
        options.data = options.data.call(this.$element, params);
      }
  
      function request () {
        var $request = options.transport(options, function (data) {
          var results = self.processResults(data, params);
  
          if (self.options.get('debug') && window.console && console.error) {
            // Check to make sure that the response included a `results` key.
            if (!results || !results.results || !$.isArray(results.results)) {
              console.error(
                'Select2: The AJAX results did not return an array in the ' +
                '`results` key of the response.'
              );
            }
          }
  
          callback(results);
        }, function () {
          // Attempt to detect if a request was aborted
          // Only works if the transport exposes a status property
          if ('status' in $request &&
              ($request.status === 0 || $request.status === '0')) {
            return;
          }
  
          self.trigger('results:message', {
            message: 'errorLoading'
          });
        });
  
        self._request = $request;
      }
  
      if (this.ajaxOptions.delay && params.term != null) {
        if (this._queryTimeout) {
          window.clearTimeout(this._queryTimeout);
        }
  
        this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
      } else {
        request();
      }
    };
  
    return AjaxAdapter;
  });
  
  S2.define('select2/data/tags',[
    'jquery'
  ], function ($) {
    function Tags (decorated, $element, options) {
      var tags = options.get('tags');
  
      var createTag = options.get('createTag');
  
      if (createTag !== undefined) {
        this.createTag = createTag;
      }
  
      var insertTag = options.get('insertTag');
  
      if (insertTag !== undefined) {
          this.insertTag = insertTag;
      }
  
      decorated.call(this, $element, options);
  
      if ($.isArray(tags)) {
        for (var t = 0; t < tags.length; t++) {
          var tag = tags[t];
          var item = this._normalizeItem(tag);
  
          var $option = this.option(item);
  
          this.$element.append($option);
        }
      }
    }
  
    Tags.prototype.query = function (decorated, params, callback) {
      var self = this;
  
      this._removeOldTags();
  
      if (params.term == null || params.page != null) {
        decorated.call(this, params, callback);
        return;
      }
  
      function wrapper (obj, child) {
        var data = obj.results;
  
        for (var i = 0; i < data.length; i++) {
          var option = data[i];
  
          var checkChildren = (
            option.children != null &&
            !wrapper({
              results: option.children
            }, true)
          );
  
          var optionText = (option.text || '').toUpperCase();
          var paramsTerm = (params.term || '').toUpperCase();
  
          var checkText = optionText === paramsTerm;
  
          if (checkText || checkChildren) {
            if (child) {
              return false;
            }
  
            obj.data = data;
            callback(obj);
  
            return;
          }
        }
  
        if (child) {
          return true;
        }
  
        var tag = self.createTag(params);
  
        if (tag != null) {
          var $option = self.option(tag);
          $option.attr('data-select2-tag', true);
  
          self.addOptions([$option]);
  
          self.insertTag(data, tag);
        }
  
        obj.results = data;
  
        callback(obj);
      }
  
      decorated.call(this, params, wrapper);
    };
  
    Tags.prototype.createTag = function (decorated, params) {
      var term = $.trim(params.term);
  
      if (term === '') {
        return null;
      }
  
      return {
        id: term,
        text: term
      };
    };
  
    Tags.prototype.insertTag = function (_, data, tag) {
      data.unshift(tag);
    };
  
    Tags.prototype._removeOldTags = function (_) {
      var tag = this._lastTag;
  
      var $options = this.$element.find('option[data-select2-tag]');
  
      $options.each(function () {
        if (this.selected) {
          return;
        }
  
        $(this).remove();
      });
    };
  
    return Tags;
  });
  
  S2.define('select2/data/tokenizer',[
    'jquery'
  ], function ($) {
    function Tokenizer (decorated, $element, options) {
      var tokenizer = options.get('tokenizer');
  
      if (tokenizer !== undefined) {
        this.tokenizer = tokenizer;
      }
  
      decorated.call(this, $element, options);
    }
  
    Tokenizer.prototype.bind = function (decorated, container, $container) {
      decorated.call(this, container, $container);
  
      this.$search =  container.dropdown.$search || container.selection.$search ||
        $container.find('.select2-search__field');
    };
  
    Tokenizer.prototype.query = function (decorated, params, callback) {
      var self = this;
  
      function createAndSelect (data) {
        // Normalize the data object so we can use it for checks
        var item = self._normalizeItem(data);
  
        // Check if the data object already exists as a tag
        // Select it if it doesn't
        var $existingOptions = self.$element.find('option').filter(function () {
          return $(this).val() === item.id;
        });
  
        // If an existing option wasn't found for it, create the option
        if (!$existingOptions.length) {
          var $option = self.option(item);
          $option.attr('data-select2-tag', true);
  
          self._removeOldTags();
          self.addOptions([$option]);
        }
  
        // Select the item, now that we know there is an option for it
        select(item);
      }
  
      function select (data) {
        self.trigger('select', {
          data: data
        });
      }
  
      params.term = params.term || '';
  
      var tokenData = this.tokenizer(params, this.options, createAndSelect);
  
      if (tokenData.term !== params.term) {
        // Replace the search term if we have the search box
        if (this.$search.length) {
          this.$search.val(tokenData.term);
          this.$search.focus();
        }
  
        params.term = tokenData.term;
      }
  
      decorated.call(this, params, callback);
    };
  
    Tokenizer.prototype.tokenizer = function (_, params, options, callback) {
      var separators = options.get('tokenSeparators') || [];
      var term = params.term;
      var i = 0;
  
      var createTag = this.createTag || function (params) {
        return {
          id: params.term,
          text: params.term
        };
      };
  
      while (i < term.length) {
        var termChar = term[i];
  
        if ($.inArray(termChar, separators) === -1) {
          i++;
  
          continue;
        }
  
        var part = term.substr(0, i);
        var partParams = $.extend({}, params, {
          term: part
        });
  
        var data = createTag(partParams);
  
        if (data == null) {
          i++;
          continue;
        }
  
        callback(data);
  
        // Reset the term to not include the tokenized portion
        term = term.substr(i + 1) || '';
        i = 0;
      }
  
      return {
        term: term
      };
    };
  
    return Tokenizer;
  });
  
  S2.define('select2/data/minimumInputLength',[
  
  ], function () {
    function MinimumInputLength (decorated, $e, options) {
      this.minimumInputLength = options.get('minimumInputLength');
  
      decorated.call(this, $e, options);
    }
  
    MinimumInputLength.prototype.query = function (decorated, params, callback) {
      params.term = params.term || '';
  
      if (params.term.length < this.minimumInputLength) {
        this.trigger('results:message', {
          message: 'inputTooShort',
          args: {
            minimum: this.minimumInputLength,
            input: params.term,
            params: params
          }
        });
  
        return;
      }
  
      decorated.call(this, params, callback);
    };
  
    return MinimumInputLength;
  });
  
  S2.define('select2/data/maximumInputLength',[
  
  ], function () {
    function MaximumInputLength (decorated, $e, options) {
      this.maximumInputLength = options.get('maximumInputLength');
  
      decorated.call(this, $e, options);
    }
  
    MaximumInputLength.prototype.query = function (decorated, params, callback) {
      params.term = params.term || '';
  
      if (this.maximumInputLength > 0 &&
          params.term.length > this.maximumInputLength) {
        this.trigger('results:message', {
          message: 'inputTooLong',
          args: {
            maximum: this.maximumInputLength,
            input: params.term,
            params: params
          }
        });
  
        return;
      }
  
      decorated.call(this, params, callback);
    };
  
    return MaximumInputLength;
  });
  
  S2.define('select2/data/maximumSelectionLength',[
  
  ], function (){
    function MaximumSelectionLength (decorated, $e, options) {
      this.maximumSelectionLength = options.get('maximumSelectionLength');
  
      decorated.call(this, $e, options);
    }
  
    MaximumSelectionLength.prototype.query =
      function (decorated, params, callback) {
        var self = this;
  
        this.current(function (currentData) {
          var count = currentData != null ? currentData.length : 0;
          if (self.maximumSelectionLength > 0 &&
            count >= self.maximumSelectionLength) {
            self.trigger('results:message', {
              message: 'maximumSelected',
              args: {
                maximum: self.maximumSelectionLength
              }
            });
            return;
          }
          decorated.call(self, params, callback);
        });
    };
  
    return MaximumSelectionLength;
  });
  
  S2.define('select2/dropdown',[
    'jquery',
    './utils'
  ], function ($, Utils) {
    function Dropdown ($element, options) {
      this.$element = $element;
      this.options = options;
  
      Dropdown.__super__.constructor.call(this);
    }
  
    Utils.Extend(Dropdown, Utils.Observable);
  
    Dropdown.prototype.render = function () {
      var $dropdown = $(
        '<span class="select2-dropdown">' +
          '<span class="select2-results"></span>' +
        '</span>'
      );
  
      $dropdown.attr('dir', this.options.get('dir'));
  
      this.$dropdown = $dropdown;
  
      return $dropdown;
    };
  
    Dropdown.prototype.bind = function () {
      // Should be implemented in subclasses
    };
  
    Dropdown.prototype.position = function ($dropdown, $container) {
      // Should be implmented in subclasses
    };
  
    Dropdown.prototype.destroy = function () {
      // Remove the dropdown from the DOM
      this.$dropdown.remove();
    };
  
    return Dropdown;
  });
  
  S2.define('select2/dropdown/search',[
    'jquery',
    '../utils'
  ], function ($, Utils) {
    function Search () { }
  
    Search.prototype.render = function (decorated) {
      var $rendered = decorated.call(this);
  
      var $search = $(
        '<span class="select2-search select2-search--dropdown">' +
          '<input class="select2-search__field" type="search" tabindex="-1"' +
          ' autocomplete="off" autocorrect="off" autocapitalize="none"' +
          ' spellcheck="false" role="textbox" />' +
        '</span>'
      );
  
      this.$searchContainer = $search;
      this.$search = $search.find('input');
  
      $rendered.prepend($search);
  
      return $rendered;
    };
  
    Search.prototype.bind = function (decorated, container, $container) {
      var self = this;
  
      decorated.call(this, container, $container);
  
      this.$search.on('keydown', function (evt) {
        self.trigger('keypress', evt);
  
        self._keyUpPrevented = evt.isDefaultPrevented();
      });
  
      // Workaround for browsers which do not support the `input` event
      // This will prevent double-triggering of events for browsers which support
      // both the `keyup` and `input` events.
      this.$search.on('input', function (evt) {
        // Unbind the duplicated `keyup` event
        $(this).off('keyup');
      });
  
      this.$search.on('keyup input', function (evt) {
        self.handleSearch(evt);
      });
  
      container.on('open', function () {
        self.$search.attr('tabindex', 0);
  
        self.$search.focus();
  
        window.setTimeout(function () {
          self.$search.focus();
        }, 0);
      });
  
      container.on('close', function () {
        self.$search.attr('tabindex', -1);
  
        self.$search.val('');
        self.$search.blur();
      });
  
      container.on('focus', function () {
        if (!container.isOpen()) {
          self.$search.focus();
        }
      });
  
      container.on('results:all', function (params) {
        if (params.query.term == null || params.query.term === '') {
          var showSearch = self.showSearch(params);
  
          if (showSearch) {
            self.$searchContainer.removeClass('select2-search--hide');
          } else {
            self.$searchContainer.addClass('select2-search--hide');
          }
        }
      });
    };
  
    Search.prototype.handleSearch = function (evt) {
      if (!this._keyUpPrevented) {
        var input = this.$search.val();
  
        this.trigger('query', {
          term: input
        });
      }
  
      this._keyUpPrevented = false;
    };
  
    Search.prototype.showSearch = function (_, params) {
      return true;
    };
  
    return Search;
  });
  
  S2.define('select2/dropdown/hidePlaceholder',[
  
  ], function () {
    function HidePlaceholder (decorated, $element, options, dataAdapter) {
      this.placeholder = this.normalizePlaceholder(options.get('placeholder'));
  
      decorated.call(this, $element, options, dataAdapter);
    }
  
    HidePlaceholder.prototype.append = function (decorated, data) {
      data.results = this.removePlaceholder(data.results);
  
      decorated.call(this, data);
    };
  
    HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {
      if (typeof placeholder === 'string') {
        placeholder = {
          id: '',
          text: placeholder
        };
      }
  
      return placeholder;
    };
  
    HidePlaceholder.prototype.removePlaceholder = function (_, data) {
      var modifiedData = data.slice(0);
  
      for (var d = data.length - 1; d >= 0; d--) {
        var item = data[d];
  
        if (this.placeholder.id === item.id) {
          modifiedData.splice(d, 1);
        }
      }
  
      return modifiedData;
    };
  
    return HidePlaceholder;
  });
  
  S2.define('select2/dropdown/infiniteScroll',[
    'jquery'
  ], function ($) {
    function InfiniteScroll (decorated, $element, options, dataAdapter) {
      this.lastParams = {};
  
      decorated.call(this, $element, options, dataAdapter);
  
      this.$loadingMore = this.createLoadingMore();
      this.loading = false;
    }
  
    InfiniteScroll.prototype.append = function (decorated, data) {
      this.$loadingMore.remove();
      this.loading = false;
  
      decorated.call(this, data);
  
      if (this.showLoadingMore(data)) {
        this.$results.append(this.$loadingMore);
      }
    };
  
    InfiniteScroll.prototype.bind = function (decorated, container, $container) {
      var self = this;
  
      decorated.call(this, container, $container);
  
      container.on('query', function (params) {
        self.lastParams = params;
        self.loading = true;
      });
  
      container.on('query:append', function (params) {
        self.lastParams = params;
        self.loading = true;
      });
  
      this.$results.on('scroll', function () {
        var isLoadMoreVisible = $.contains(
          document.documentElement,
          self.$loadingMore[0]
        );
  
        if (self.loading || !isLoadMoreVisible) {
          return;
        }
  
        var currentOffset = self.$results.offset().top +
          self.$results.outerHeight(false);
        var loadingMoreOffset = self.$loadingMore.offset().top +
          self.$loadingMore.outerHeight(false);
  
        if (currentOffset + 50 >= loadingMoreOffset) {
          self.loadMore();
        }
      });
    };
  
    InfiniteScroll.prototype.loadMore = function () {
      this.loading = true;
  
      var params = $.extend({}, {page: 1}, this.lastParams);
  
      params.page++;
  
      this.trigger('query:append', params);
    };
  
    InfiniteScroll.prototype.showLoadingMore = function (_, data) {
      return data.pagination && data.pagination.more;
    };
  
    InfiniteScroll.prototype.createLoadingMore = function () {
      var $option = $(
        '<li ' +
        'class="select2-results__option select2-results__option--load-more"' +
        'role="treeitem" aria-disabled="true"></li>'
      );
  
      var message = this.options.get('translations').get('loadingMore');
  
      $option.html(message(this.lastParams));
  
      return $option;
    };
  
    return InfiniteScroll;
  });
  
  S2.define('select2/dropdown/attachBody',[
    'jquery',
    '../utils'
  ], function ($, Utils) {
    function AttachBody (decorated, $element, options) {
      this.$dropdownParent = options.get('dropdownParent') || $(document.body);
  
      decorated.call(this, $element, options);
    }
  
    AttachBody.prototype.bind = function (decorated, container, $container) {
      var self = this;
  
      var setupResultsEvents = false;
  
      decorated.call(this, container, $container);
  
      container.on('open', function () {
        self._showDropdown();
        self._attachPositioningHandler(container);
  
        if (!setupResultsEvents) {
          setupResultsEvents = true;
  
          container.on('results:all', function () {
            self._positionDropdown();
            self._resizeDropdown();
          });
  
          container.on('results:append', function () {
            self._positionDropdown();
            self._resizeDropdown();
          });
        }
      });
  
      container.on('close', function () {
        self._hideDropdown();
        self._detachPositioningHandler(container);
      });
  
      this.$dropdownContainer.on('mousedown', function (evt) {
        evt.stopPropagation();
      });
    };
  
    AttachBody.prototype.destroy = function (decorated) {
      decorated.call(this);
  
      this.$dropdownContainer.remove();
    };
  
    AttachBody.prototype.position = function (decorated, $dropdown, $container) {
      // Clone all of the container classes
      $dropdown.attr('class', $container.attr('class'));
  
      $dropdown.removeClass('select2');
      $dropdown.addClass('select2-container--open');
  
      $dropdown.css({
        position: 'absolute',
        top: -999999
      });
  
      this.$container = $container;
    };
  
    AttachBody.prototype.render = function (decorated) {
      var $container = $('<span></span>');
  
      var $dropdown = decorated.call(this);
      $container.append($dropdown);
  
      this.$dropdownContainer = $container;
  
      return $container;
    };
  
    AttachBody.prototype._hideDropdown = function (decorated) {
      this.$dropdownContainer.detach();
    };
  
    AttachBody.prototype._attachPositioningHandler =
        function (decorated, container) {
      var self = this;
  
      var scrollEvent = 'scroll.select2.' + container.id;
      var resizeEvent = 'resize.select2.' + container.id;
      var orientationEvent = 'orientationchange.select2.' + container.id;
  
      var $watchers = this.$container.parents().filter(Utils.hasScroll);
      $watchers.each(function () {
        Utils.StoreData(this, 'select2-scroll-position', {
          x: $(this).scrollLeft(),
          y: $(this).scrollTop()
        });
      });
  
      $watchers.on(scrollEvent, function (ev) {
        var position = Utils.GetData(this, 'select2-scroll-position');
        $(this).scrollTop(position.y);
      });
  
      $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent,
        function (e) {
        self._positionDropdown();
        self._resizeDropdown();
      });
    };
  
    AttachBody.prototype._detachPositioningHandler =
        function (decorated, container) {
      var scrollEvent = 'scroll.select2.' + container.id;
      var resizeEvent = 'resize.select2.' + container.id;
      var orientationEvent = 'orientationchange.select2.' + container.id;
  
      var $watchers = this.$container.parents().filter(Utils.hasScroll);
      $watchers.off(scrollEvent);
  
      $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);
    };
  
    AttachBody.prototype._positionDropdown = function () {
      var $window = $(window);
  
      var isCurrentlyAbove = this.$dropdown.hasClass('select2-dropdown--above');
      var isCurrentlyBelow = this.$dropdown.hasClass('select2-dropdown--below');
  
      var newDirection = null;
  
      var offset = this.$container.offset();
  
      offset.bottom = offset.top + this.$container.outerHeight(false);
  
      var container = {
        height: this.$container.outerHeight(false)
      };
  
      container.top = offset.top;
      container.bottom = offset.top + container.height;
  
      var dropdown = {
        height: this.$dropdown.outerHeight(false)
      };
  
      var viewport = {
        top: $window.scrollTop(),
        bottom: $window.scrollTop() + $window.height()
      };
  
      var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);
      var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);
  
      var css = {
        left: offset.left,
        top: container.bottom
      };
  
      // Determine what the parent element is to use for calciulating the offset
      var $offsetParent = this.$dropdownParent;
  
      // For statically positoned elements, we need to get the element
      // that is determining the offset
      if ($offsetParent.css('position') === 'static') {
        $offsetParent = $offsetParent.offsetParent();
      }
  
      var parentOffset = $offsetParent.offset();
  
      css.top -= parentOffset.top;
      css.left -= parentOffset.left;
  
      if (!isCurrentlyAbove && !isCurrentlyBelow) {
        newDirection = 'below';
      }
  
      if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
        newDirection = 'above';
      } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
        newDirection = 'below';
      }
  
      if (newDirection == 'above' ||
        (isCurrentlyAbove && newDirection !== 'below')) {
        css.top = container.top - parentOffset.top - dropdown.height;
      }
  
      if (newDirection != null) {
        this.$dropdown
          .removeClass('select2-dropdown--below select2-dropdown--above')
          .addClass('select2-dropdown--' + newDirection);
        this.$container
          .removeClass('select2-container--below select2-container--above')
          .addClass('select2-container--' + newDirection);
      }
  
      this.$dropdownContainer.css(css);
    };
  
    AttachBody.prototype._resizeDropdown = function () {
      var css = {
        width: this.$container.outerWidth(false) + 'px'
      };
  
      if (this.options.get('dropdownAutoWidth')) {
        css.minWidth = css.width;
        css.position = 'relative';
        css.width = 'auto';
      }
  
      this.$dropdown.css(css);
    };
  
    AttachBody.prototype._showDropdown = function (decorated) {
      this.$dropdownContainer.appendTo(this.$dropdownParent);
  
      this._positionDropdown();
      this._resizeDropdown();
    };
  
    return AttachBody;
  });
  
  S2.define('select2/dropdown/minimumResultsForSearch',[
  
  ], function () {
    function countResults (data) {
      var count = 0;
  
      for (var d = 0; d < data.length; d++) {
        var item = data[d];
  
        if (item.children) {
          count += countResults(item.children);
        } else {
          count++;
        }
      }
  
      return count;
    }
  
    function MinimumResultsForSearch (decorated, $element, options, dataAdapter) {
      this.minimumResultsForSearch = options.get('minimumResultsForSearch');
  
      if (this.minimumResultsForSearch < 0) {
        this.minimumResultsForSearch = Infinity;
      }
  
      decorated.call(this, $element, options, dataAdapter);
    }
  
    MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {
      if (countResults(params.data.results) < this.minimumResultsForSearch) {
        return false;
      }
  
      return decorated.call(this, params);
    };
  
    return MinimumResultsForSearch;
  });
  
  S2.define('select2/dropdown/selectOnClose',[
    '../utils'
  ], function (Utils) {
    function SelectOnClose () { }
  
    SelectOnClose.prototype.bind = function (decorated, container, $container) {
      var self = this;
  
      decorated.call(this, container, $container);
  
      container.on('close', function (params) {
        self._handleSelectOnClose(params);
      });
    };
  
    SelectOnClose.prototype._handleSelectOnClose = function (_, params) {
      if (params && params.originalSelect2Event != null) {
        var event = params.originalSelect2Event;
  
        // Don't select an item if the close event was triggered from a select or
        // unselect event
        if (event._type === 'select' || event._type === 'unselect') {
          return;
        }
      }
  
      var $highlightedResults = this.getHighlightedResults();
  
      // Only select highlighted results
      if ($highlightedResults.length < 1) {
        return;
      }
  
      var data = Utils.GetData($highlightedResults[0], 'data');
  
      // Don't re-select already selected resulte
      if (
        (data.element != null && data.element.selected) ||
        (data.element == null && data.selected)
      ) {
        return;
      }
  
      this.trigger('select', {
          data: data
      });
    };
  
    return SelectOnClose;
  });
  
  S2.define('select2/dropdown/closeOnSelect',[
  
  ], function () {
    function CloseOnSelect () { }
  
    CloseOnSelect.prototype.bind = function (decorated, container, $container) {
      var self = this;
  
      decorated.call(this, container, $container);
  
      container.on('select', function (evt) {
        self._selectTriggered(evt);
      });
  
      container.on('unselect', function (evt) {
        self._selectTriggered(evt);
      });
    };
  
    CloseOnSelect.prototype._selectTriggered = function (_, evt) {
      var originalEvent = evt.originalEvent;
  
      // Don't close if the control key is being held
      if (originalEvent && originalEvent.ctrlKey) {
        return;
      }
  
      this.trigger('close', {
        originalEvent: originalEvent,
        originalSelect2Event: evt
      });
    };
  
    return CloseOnSelect;
  });
  
  S2.define('select2/i18n/en',[],function () {
    // English
    return {
      errorLoading: function () {
        return 'The results could not be loaded.';
      },
      inputTooLong: function (args) {
        var overChars = args.input.length - args.maximum;
  
        var message = 'Please delete ' + overChars + ' character';
  
        if (overChars != 1) {
          message += 's';
        }
  
        return message;
      },
      inputTooShort: function (args) {
        var remainingChars = args.minimum - args.input.length;
  
        var message = 'Please enter ' + remainingChars + ' or more characters';
  
        return message;
      },
      loadingMore: function () {
        return 'Loading more results???';
      },
      maximumSelected: function (args) {
        var message = 'You can only select ' + args.maximum + ' item';
  
        if (args.maximum != 1) {
          message += 's';
        }
  
        return message;
      },
      noResults: function () {
        return 'No results found';
      },
      searching: function () {
        return 'Searching???';
      }
    };
  });
  
  S2.define('select2/defaults',[
    'jquery',
    'require',
  
    './results',
  
    './selection/single',
    './selection/multiple',
    './selection/placeholder',
    './selection/allowClear',
    './selection/search',
    './selection/eventRelay',
  
    './utils',
    './translation',
    './diacritics',
  
    './data/select',
    './data/array',
    './data/ajax',
    './data/tags',
    './data/tokenizer',
    './data/minimumInputLength',
    './data/maximumInputLength',
    './data/maximumSelectionLength',
  
    './dropdown',
    './dropdown/search',
    './dropdown/hidePlaceholder',
    './dropdown/infiniteScroll',
    './dropdown/attachBody',
    './dropdown/minimumResultsForSearch',
    './dropdown/selectOnClose',
    './dropdown/closeOnSelect',
  
    './i18n/en'
  ], function ($, require,
  
               ResultsList,
  
               SingleSelection, MultipleSelection, Placeholder, AllowClear,
               SelectionSearch, EventRelay,
  
               Utils, Translation, DIACRITICS,
  
               SelectData, ArrayData, AjaxData, Tags, Tokenizer,
               MinimumInputLength, MaximumInputLength, MaximumSelectionLength,
  
               Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll,
               AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect,
  
               EnglishTranslation) {
    function Defaults () {
      this.reset();
    }
  
    Defaults.prototype.apply = function (options) {
      options = $.extend(true, {}, this.defaults, options);
  
      if (options.dataAdapter == null) {
        if (options.ajax != null) {
          options.dataAdapter = AjaxData;
        } else if (options.data != null) {
          options.dataAdapter = ArrayData;
        } else {
          options.dataAdapter = SelectData;
        }
  
        if (options.minimumInputLength > 0) {
          options.dataAdapter = Utils.Decorate(
            options.dataAdapter,
            MinimumInputLength
          );
        }
  
        if (options.maximumInputLength > 0) {
          options.dataAdapter = Utils.Decorate(
            options.dataAdapter,
            MaximumInputLength
          );
        }
  
        if (options.maximumSelectionLength > 0) {
          options.dataAdapter = Utils.Decorate(
            options.dataAdapter,
            MaximumSelectionLength
          );
        }
  
        if (options.tags) {
          options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
        }
  
        if (options.tokenSeparators != null || options.tokenizer != null) {
          options.dataAdapter = Utils.Decorate(
            options.dataAdapter,
            Tokenizer
          );
        }
  
        if (options.query != null) {
          var Query = require(options.amdBase + 'compat/query');
  
          options.dataAdapter = Utils.Decorate(
            options.dataAdapter,
            Query
          );
        }
  
        if (options.initSelection != null) {
          var InitSelection = require(options.amdBase + 'compat/initSelection');
  
          options.dataAdapter = Utils.Decorate(
            options.dataAdapter,
            InitSelection
          );
        }
      }
  
      if (options.resultsAdapter == null) {
        options.resultsAdapter = ResultsList;
  
        if (options.ajax != null) {
          options.resultsAdapter = Utils.Decorate(
            options.resultsAdapter,
            InfiniteScroll
          );
        }
  
        if (options.placeholder != null) {
          options.resultsAdapter = Utils.Decorate(
            options.resultsAdapter,
            HidePlaceholder
          );
        }
  
        if (options.selectOnClose) {
          options.resultsAdapter = Utils.Decorate(
            options.resultsAdapter,
            SelectOnClose
          );
        }
      }
  
      if (options.dropdownAdapter == null) {
        if (options.multiple) {
          options.dropdownAdapter = Dropdown;
        } else {
          var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);
  
          options.dropdownAdapter = SearchableDropdown;
        }
  
        if (options.minimumResultsForSearch !== 0) {
          options.dropdownAdapter = Utils.Decorate(
            options.dropdownAdapter,
            MinimumResultsForSearch
          );
        }
  
        if (options.closeOnSelect) {
          options.dropdownAdapter = Utils.Decorate(
            options.dropdownAdapter,
            CloseOnSelect
          );
        }
  
        if (
          options.dropdownCssClass != null ||
          options.dropdownCss != null ||
          options.adaptDropdownCssClass != null
        ) {
          var DropdownCSS = require(options.amdBase + 'compat/dropdownCss');
  
          options.dropdownAdapter = Utils.Decorate(
            options.dropdownAdapter,
            DropdownCSS
          );
        }
  
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          AttachBody
        );
      }
  
      if (options.selectionAdapter == null) {
        if (options.multiple) {
          options.selectionAdapter = MultipleSelection;
        } else {
          options.selectionAdapter = SingleSelection;
        }
  
        // Add the placeholder mixin if a placeholder was specified
        if (options.placeholder != null) {
          options.selectionAdapter = Utils.Decorate(
            options.selectionAdapter,
            Placeholder
          );
        }
  
        if (options.allowClear) {
          options.selectionAdapter = Utils.Decorate(
            options.selectionAdapter,
            AllowClear
          );
        }
  
        if (options.multiple) {
          options.selectionAdapter = Utils.Decorate(
            options.selectionAdapter,
            SelectionSearch
          );
        }
  
        if (
          options.containerCssClass != null ||
          options.containerCss != null ||
          options.adaptContainerCssClass != null
        ) {
          var ContainerCSS = require(options.amdBase + 'compat/containerCss');
  
          options.selectionAdapter = Utils.Decorate(
            options.selectionAdapter,
            ContainerCSS
          );
        }
  
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          EventRelay
        );
      }
  
      if (typeof options.language === 'string') {
        // Check if the language is specified with a region
        if (options.language.indexOf('-') > 0) {
          // Extract the region information if it is included
          var languageParts = options.language.split('-');
          var baseLanguage = languageParts[0];
  
          options.language = [options.language, baseLanguage];
        } else {
          options.language = [options.language];
        }
      }
  
      if ($.isArray(options.language)) {
        var languages = new Translation();
        options.language.push('en');
  
        var languageNames = options.language;
  
        for (var l = 0; l < languageNames.length; l++) {
          var name = languageNames[l];
          var language = {};
  
          try {
            // Try to load it with the original name
            language = Translation.loadPath(name);
          } catch (e) {
            try {
              // If we couldn't load it, check if it wasn't the full path
              name = this.defaults.amdLanguageBase + name;
              language = Translation.loadPath(name);
            } catch (ex) {
              // The translation could not be loaded at all. Sometimes this is
              // because of a configuration problem, other times this can be
              // because of how Select2 helps load all possible translation files.
              if (options.debug && window.console && console.warn) {
                console.warn(
                  'Select2: The language file for "' + name + '" could not be ' +
                  'automatically loaded. A fallback will be used instead.'
                );
              }
  
              continue;
            }
          }
  
          languages.extend(language);
        }
  
        options.translations = languages;
      } else {
        var baseTranslation = Translation.loadPath(
          this.defaults.amdLanguageBase + 'en'
        );
        var customTranslation = new Translation(options.language);
  
        customTranslation.extend(baseTranslation);
  
        options.translations = customTranslation;
      }
  
      return options;
    };
  
    Defaults.prototype.reset = function () {
      function stripDiacritics (text) {
        // Used 'uni range + named function' from http://jsperf.com/diacritics/18
        function match(a) {
          return DIACRITICS[a] || a;
        }
  
        return text.replace(/[^\u0000-\u007E]/g, match);
      }
  
      function matcher (params, data) {
        // Always return the object if there is nothing to compare
        if ($.trim(params.term) === '') {
          return data;
        }
  
        // Do a recursive check for options with children
        if (data.children && data.children.length > 0) {
          // Clone the data object if there are children
          // This is required as we modify the object to remove any non-matches
          var match = $.extend(true, {}, data);
  
          // Check each child of the option
          for (var c = data.children.length - 1; c >= 0; c--) {
            var child = data.children[c];
  
            var matches = matcher(params, child);
  
            // If there wasn't a match, remove the object in the array
            if (matches == null) {
              match.children.splice(c, 1);
            }
          }
  
          // If any children matched, return the new object
          if (match.children.length > 0) {
            return match;
          }
  
          // If there were no matching children, check just the plain object
          return matcher(params, match);
        }
  
        var original = stripDiacritics(data.text).toUpperCase();
        var term = stripDiacritics(params.term).toUpperCase();
  
        // Check if the text contains the term
        if (original.indexOf(term) > -1) {
          return data;
        }
  
        // If it doesn't contain the term, don't return anything
        return null;
      }
  
      this.defaults = {
        amdBase: './',
        amdLanguageBase: './i18n/',
        closeOnSelect: true,
        debug: false,
        dropdownAutoWidth: false,
        escapeMarkup: Utils.escapeMarkup,
        language: EnglishTranslation,
        matcher: matcher,
        minimumInputLength: 0,
        maximumInputLength: 0,
        maximumSelectionLength: 0,
        minimumResultsForSearch: 0,
        selectOnClose: false,
        sorter: function (data) {
          return data;
        },
        templateResult: function (result) {
          return result.text;
        },
        templateSelection: function (selection) {
          return selection.text;
        },
        theme: 'default',
        width: 'resolve'
      };
    };
  
    Defaults.prototype.set = function (key, value) {
      var camelKey = $.camelCase(key);
  
      var data = {};
      data[camelKey] = value;
  
      var convertedData = Utils._convertData(data);
  
      $.extend(true, this.defaults, convertedData);
    };
  
    var defaults = new Defaults();
  
    return defaults;
  });
  
  S2.define('select2/options',[
    'require',
    'jquery',
    './defaults',
    './utils'
  ], function (require, $, Defaults, Utils) {
    function Options (options, $element) {
      this.options = options;
  
      if ($element != null) {
        this.fromElement($element);
      }
  
      this.options = Defaults.apply(this.options);
  
      if ($element && $element.is('input')) {
        var InputCompat = require(this.get('amdBase') + 'compat/inputData');
  
        this.options.dataAdapter = Utils.Decorate(
          this.options.dataAdapter,
          InputCompat
        );
      }
    }
  
    Options.prototype.fromElement = function ($e) {
      var excludedData = ['select2'];
  
      if (this.options.multiple == null) {
        this.options.multiple = $e.prop('multiple');
      }
  
      if (this.options.disabled == null) {
        this.options.disabled = $e.prop('disabled');
      }
  
      if (this.options.language == null) {
        if ($e.prop('lang')) {
          this.options.language = $e.prop('lang').toLowerCase();
        } else if ($e.closest('[lang]').prop('lang')) {
          this.options.language = $e.closest('[lang]').prop('lang');
        }
      }
  
      if (this.options.dir == null) {
        if ($e.prop('dir')) {
          this.options.dir = $e.prop('dir');
        } else if ($e.closest('[dir]').prop('dir')) {
          this.options.dir = $e.closest('[dir]').prop('dir');
        } else {
          this.options.dir = 'ltr';
        }
      }
  
      $e.prop('disabled', this.options.disabled);
      $e.prop('multiple', this.options.multiple);
  
      if (Utils.GetData($e[0], 'select2Tags')) {
        if (this.options.debug && window.console && console.warn) {
          console.warn(
            'Select2: The `data-select2-tags` attribute has been changed to ' +
            'use the `data-data` and `data-tags="true"` attributes and will be ' +
            'removed in future versions of Select2.'
          );
        }
  
        Utils.StoreData($e[0], 'data', Utils.GetData($e[0], 'select2Tags'));
        Utils.StoreData($e[0], 'tags', true);
      }
  
      if (Utils.GetData($e[0], 'ajaxUrl')) {
        if (this.options.debug && window.console && console.warn) {
          console.warn(
            'Select2: The `data-ajax-url` attribute has been changed to ' +
            '`data-ajax--url` and support for the old attribute will be removed' +
            ' in future versions of Select2.'
          );
        }
  
        $e.attr('ajax--url', Utils.GetData($e[0], 'ajaxUrl'));
        Utils.StoreData($e[0], 'ajax-Url', Utils.GetData($e[0], 'ajaxUrl'));
        
      }
  
      var dataset = {};
  
      // Prefer the element's `dataset` attribute if it exists
      // jQuery 1.x does not correctly handle data attributes with multiple dashes
      if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {
        dataset = $.extend(true, {}, $e[0].dataset, Utils.GetData($e[0]));
      } else {
        dataset = Utils.GetData($e[0]);
      }
  
      var data = $.extend(true, {}, dataset);
  
      data = Utils._convertData(data);
  
      for (var key in data) {
        if ($.inArray(key, excludedData) > -1) {
          continue;
        }
  
        if ($.isPlainObject(this.options[key])) {
          $.extend(this.options[key], data[key]);
        } else {
          this.options[key] = data[key];
        }
      }
  
      return this;
    };
  
    Options.prototype.get = function (key) {
      return this.options[key];
    };
  
    Options.prototype.set = function (key, val) {
      this.options[key] = val;
    };
  
    return Options;
  });
  
  S2.define('select2/core',[
    'jquery',
    './options',
    './utils',
    './keys'
  ], function ($, Options, Utils, KEYS) {
    var Select2 = function ($element, options) {
      if (Utils.GetData($element[0], 'select2') != null) {
        Utils.GetData($element[0], 'select2').destroy();
      }
  
      this.$element = $element;
  
      this.id = this._generateId($element);
  
      options = options || {};
  
      this.options = new Options(options, $element);
  
      Select2.__super__.constructor.call(this);
  
      // Set up the tabindex
  
      var tabindex = $element.attr('tabindex') || 0;
      Utils.StoreData($element[0], 'old-tabindex', tabindex);
      $element.attr('tabindex', '-1');
  
      // Set up containers and adapters
  
      var DataAdapter = this.options.get('dataAdapter');
      this.dataAdapter = new DataAdapter($element, this.options);
  
      var $container = this.render();
  
      this._placeContainer($container);
  
      var SelectionAdapter = this.options.get('selectionAdapter');
      this.selection = new SelectionAdapter($element, this.options);
      this.$selection = this.selection.render();
  
      this.selection.position(this.$selection, $container);
  
      var DropdownAdapter = this.options.get('dropdownAdapter');
      this.dropdown = new DropdownAdapter($element, this.options);
      this.$dropdown = this.dropdown.render();
  
      this.dropdown.position(this.$dropdown, $container);
  
      var ResultsAdapter = this.options.get('resultsAdapter');
      this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
      this.$results = this.results.render();
  
      this.results.position(this.$results, this.$dropdown);
  
      // Bind events
  
      var self = this;
  
      // Bind the container to all of the adapters
      this._bindAdapters();
  
      // Register any DOM event handlers
      this._registerDomEvents();
  
      // Register any internal event handlers
      this._registerDataEvents();
      this._registerSelectionEvents();
      this._registerDropdownEvents();
      this._registerResultsEvents();
      this._registerEvents();
  
      // Set the initial state
      this.dataAdapter.current(function (initialData) {
        self.trigger('selection:update', {
          data: initialData
        });
      });
  
      // Hide the original select
      $element.addClass('select2-hidden-accessible');
      $element.attr('aria-hidden', 'true');
  
      // Synchronize any monitored attributes
      this._syncAttributes();
  
      Utils.StoreData($element[0], 'select2', this);
  
      // Ensure backwards compatibility with $element.data('select2').
      $element.data('select2', this);
    };
  
    Utils.Extend(Select2, Utils.Observable);
  
    Select2.prototype._generateId = function ($element) {
      var id = '';
  
      if ($element.attr('id') != null) {
        id = $element.attr('id');
      } else if ($element.attr('name') != null) {
        id = $element.attr('name') + '-' + Utils.generateChars(2);
      } else {
        id = Utils.generateChars(4);
      }
  
      id = id.replace(/(:|\.|\[|\]|,)/g, '');
      id = 'select2-' + id;
  
      return id;
    };
  
    Select2.prototype._placeContainer = function ($container) {
      $container.insertAfter(this.$element);
  
      var width = this._resolveWidth(this.$element, this.options.get('width'));
  
      if (width != null) {
        $container.css('width', width);
      }
    };
  
    Select2.prototype._resolveWidth = function ($element, method) {
      var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
  
      if (method == 'resolve') {
        var styleWidth = this._resolveWidth($element, 'style');
  
        if (styleWidth != null) {
          return styleWidth;
        }
  
        return this._resolveWidth($element, 'element');
      }
  
      if (method == 'element') {
        var elementWidth = $element.outerWidth(false);
  
        if (elementWidth <= 0) {
          return 'auto';
        }
  
        return elementWidth + 'px';
      }
  
      if (method == 'style') {
        var style = $element.attr('style');
  
        if (typeof(style) !== 'string') {
          return null;
        }
  
        var attrs = style.split(';');
  
        for (var i = 0, l = attrs.length; i < l; i = i + 1) {
          var attr = attrs[i].replace(/\s/g, '');
          var matches = attr.match(WIDTH);
  
          if (matches !== null && matches.length >= 1) {
            return matches[1];
          }
        }
  
        return null;
      }
  
      return method;
    };
  
    Select2.prototype._bindAdapters = function () {
      this.dataAdapter.bind(this, this.$container);
      this.selection.bind(this, this.$container);
  
      this.dropdown.bind(this, this.$container);
      this.results.bind(this, this.$container);
    };
  
    Select2.prototype._registerDomEvents = function () {
      var self = this;
  
      this.$element.on('change.select2', function () {
        self.dataAdapter.current(function (data) {
          self.trigger('selection:update', {
            data: data
          });
        });
      });
  
      this.$element.on('focus.select2', function (evt) {
        self.trigger('focus', evt);
      });
  
      this._syncA = Utils.bind(this._syncAttributes, this);
      this._syncS = Utils.bind(this._syncSubtree, this);
  
      if (this.$element[0].attachEvent) {
        this.$element[0].attachEvent('onpropertychange', this._syncA);
      }
  
      var observer = window.MutationObserver ||
        window.WebKitMutationObserver ||
        window.MozMutationObserver
      ;
  
      if (observer != null) {
        this._observer = new observer(function (mutations) {
          $.each(mutations, self._syncA);
          $.each(mutations, self._syncS);
        });
        this._observer.observe(this.$element[0], {
          attributes: true,
          childList: true,
          subtree: false
        });
      } else if (this.$element[0].addEventListener) {
        this.$element[0].addEventListener(
          'DOMAttrModified',
          self._syncA,
          false
        );
        this.$element[0].addEventListener(
          'DOMNodeInserted',
          self._syncS,
          false
        );
        this.$element[0].addEventListener(
          'DOMNodeRemoved',
          self._syncS,
          false
        );
      }
    };
  
    Select2.prototype._registerDataEvents = function () {
      var self = this;
  
      this.dataAdapter.on('*', function (name, params) {
        self.trigger(name, params);
      });
    };
  
    Select2.prototype._registerSelectionEvents = function () {
      var self = this;
      var nonRelayEvents = ['toggle', 'focus'];
  
      this.selection.on('toggle', function () {
        self.toggleDropdown();
      });
  
      this.selection.on('focus', function (params) {
        self.focus(params);
      });
  
      this.selection.on('*', function (name, params) {
        if ($.inArray(name, nonRelayEvents) !== -1) {
          return;
        }
  
        self.trigger(name, params);
      });
    };
  
    Select2.prototype._registerDropdownEvents = function () {
      var self = this;
  
      this.dropdown.on('*', function (name, params) {
        self.trigger(name, params);
      });
    };
  
    Select2.prototype._registerResultsEvents = function () {
      var self = this;
  
      this.results.on('*', function (name, params) {
        self.trigger(name, params);
      });
    };
  
    Select2.prototype._registerEvents = function () {
      var self = this;
  
      this.on('open', function () {
        self.$container.addClass('select2-container--open');
      });
  
      this.on('close', function () {
        self.$container.removeClass('select2-container--open');
      });
  
      this.on('enable', function () {
        self.$container.removeClass('select2-container--disabled');
      });
  
      this.on('disable', function () {
        self.$container.addClass('select2-container--disabled');
      });
  
      this.on('blur', function () {
        self.$container.removeClass('select2-container--focus');
      });
  
      this.on('query', function (params) {
        if (!self.isOpen()) {
          self.trigger('open', {});
        }
  
        this.dataAdapter.query(params, function (data) {
          self.trigger('results:all', {
            data: data,
            query: params
          });
        });
      });
  
      this.on('query:append', function (params) {
        this.dataAdapter.query(params, function (data) {
          self.trigger('results:append', {
            data: data,
            query: params
          });
        });
      });
  
      this.on('keypress', function (evt) {
        var key = evt.which;
  
        if (self.isOpen()) {
          if (key === KEYS.ESC || key === KEYS.TAB ||
              (key === KEYS.UP && evt.altKey)) {
            self.close();
  
            evt.preventDefault();
          } else if (key === KEYS.ENTER) {
            self.trigger('results:select', {});
  
            evt.preventDefault();
          } else if ((key === KEYS.SPACE && evt.ctrlKey)) {
            self.trigger('results:toggle', {});
  
            evt.preventDefault();
          } else if (key === KEYS.UP) {
            self.trigger('results:previous', {});
  
            evt.preventDefault();
          } else if (key === KEYS.DOWN) {
            self.trigger('results:next', {});
  
            evt.preventDefault();
          }
        } else {
          if (key === KEYS.ENTER || key === KEYS.SPACE ||
              (key === KEYS.DOWN && evt.altKey)) {
            self.open();
  
            evt.preventDefault();
          }
        }
      });
    };
  
    Select2.prototype._syncAttributes = function () {
      this.options.set('disabled', this.$element.prop('disabled'));
  
      if (this.options.get('disabled')) {
        if (this.isOpen()) {
          this.close();
        }
  
        this.trigger('disable', {});
      } else {
        this.trigger('enable', {});
      }
    };
  
    Select2.prototype._syncSubtree = function (evt, mutations) {
      var changed = false;
      var self = this;
  
      // Ignore any mutation events raised for elements that aren't options or
      // optgroups. This handles the case when the select element is destroyed
      if (
        evt && evt.target && (
          evt.target.nodeName !== 'OPTION' && evt.target.nodeName !== 'OPTGROUP'
        )
      ) {
        return;
      }
  
      if (!mutations) {
        // If mutation events aren't supported, then we can only assume that the
        // change affected the selections
        changed = true;
      } else if (mutations.addedNodes && mutations.addedNodes.length > 0) {
        for (var n = 0; n < mutations.addedNodes.length; n++) {
          var node = mutations.addedNodes[n];
  
          if (node.selected) {
            changed = true;
          }
        }
      } else if (mutations.removedNodes && mutations.removedNodes.length > 0) {
        changed = true;
      }
  
      // Only re-pull the data if we think there is a change
      if (changed) {
        this.dataAdapter.current(function (currentData) {
          self.trigger('selection:update', {
            data: currentData
          });
        });
      }
    };
  
    /**
     * Override the trigger method to automatically trigger pre-events when
     * there are events that can be prevented.
     */
    Select2.prototype.trigger = function (name, args) {
      var actualTrigger = Select2.__super__.trigger;
      var preTriggerMap = {
        'open': 'opening',
        'close': 'closing',
        'select': 'selecting',
        'unselect': 'unselecting',
        'clear': 'clearing'
      };
  
      if (args === undefined) {
        args = {};
      }
  
      if (name in preTriggerMap) {
        var preTriggerName = preTriggerMap[name];
        var preTriggerArgs = {
          prevented: false,
          name: name,
          args: args
        };
  
        actualTrigger.call(this, preTriggerName, preTriggerArgs);
  
        if (preTriggerArgs.prevented) {
          args.prevented = true;
  
          return;
        }
      }
  
      actualTrigger.call(this, name, args);
    };
  
    Select2.prototype.toggleDropdown = function () {
      if (this.options.get('disabled')) {
        return;
      }
  
      if (this.isOpen()) {
        this.close();
      } else {
        this.open();
      }
    };
  
    Select2.prototype.open = function () {
      if (this.isOpen()) {
        return;
      }
  
      this.trigger('query', {});
    };
  
    Select2.prototype.close = function () {
      if (!this.isOpen()) {
        return;
      }
  
      this.trigger('close', {});
    };
  
    Select2.prototype.isOpen = function () {
      return this.$container.hasClass('select2-container--open');
    };
  
    Select2.prototype.hasFocus = function () {
      return this.$container.hasClass('select2-container--focus');
    };
  
    Select2.prototype.focus = function (data) {
      // No need to re-trigger focus events if we are already focused
      if (this.hasFocus()) {
        return;
      }
  
      this.$container.addClass('select2-container--focus');
      this.trigger('focus', {});
    };
  
    Select2.prototype.enable = function (args) {
      if (this.options.get('debug') && window.console && console.warn) {
        console.warn(
          'Select2: The `select2("enable")` method has been deprecated and will' +
          ' be removed in later Select2 versions. Use $element.prop("disabled")' +
          ' instead.'
        );
      }
  
      if (args == null || args.length === 0) {
        args = [true];
      }
  
      var disabled = !args[0];
  
      this.$element.prop('disabled', disabled);
    };
  
    Select2.prototype.data = function () {
      if (this.options.get('debug') &&
          arguments.length > 0 && window.console && console.warn) {
        console.warn(
          'Select2: Data can no longer be set using `select2("data")`. You ' +
          'should consider setting the value instead using `$element.val()`.'
        );
      }
  
      var data = [];
  
      this.dataAdapter.current(function (currentData) {
        data = currentData;
      });
  
      return data;
    };
  
    Select2.prototype.val = function (args) {
      if (this.options.get('debug') && window.console && console.warn) {
        console.warn(
          'Select2: The `select2("val")` method has been deprecated and will be' +
          ' removed in later Select2 versions. Use $element.val() instead.'
        );
      }
  
      if (args == null || args.length === 0) {
        return this.$element.val();
      }
  
      var newVal = args[0];
  
      if ($.isArray(newVal)) {
        newVal = $.map(newVal, function (obj) {
          return obj.toString();
        });
      }
  
      this.$element.val(newVal).trigger('change');
    };
  
    Select2.prototype.destroy = function () {
      this.$container.remove();
  
      if (this.$element[0].detachEvent) {
        this.$element[0].detachEvent('onpropertychange', this._syncA);
      }
  
      if (this._observer != null) {
        this._observer.disconnect();
        this._observer = null;
      } else if (this.$element[0].removeEventListener) {
        this.$element[0]
          .removeEventListener('DOMAttrModified', this._syncA, false);
        this.$element[0]
          .removeEventListener('DOMNodeInserted', this._syncS, false);
        this.$element[0]
          .removeEventListener('DOMNodeRemoved', this._syncS, false);
      }
  
      this._syncA = null;
      this._syncS = null;
  
      this.$element.off('.select2');
      this.$element.attr('tabindex',
      Utils.GetData(this.$element[0], 'old-tabindex'));
  
      this.$element.removeClass('select2-hidden-accessible');
      this.$element.attr('aria-hidden', 'false');
      Utils.RemoveData(this.$element[0]);
      this.$element.removeData('select2');
  
      this.dataAdapter.destroy();
      this.selection.destroy();
      this.dropdown.destroy();
      this.results.destroy();
  
      this.dataAdapter = null;
      this.selection = null;
      this.dropdown = null;
      this.results = null;
    };
  
    Select2.prototype.render = function () {
      var $container = $(
        '<span class="select2 select2-container">' +
          '<span class="selection"></span>' +
          '<span class="dropdown-wrapper" aria-hidden="true"></span>' +
        '</span>'
      );
  
      $container.attr('dir', this.options.get('dir'));
  
      this.$container = $container;
  
      this.$container.addClass('select2-container--' + this.options.get('theme'));
  
      Utils.StoreData($container[0], 'element', this.$element);
  
      return $container;
    };
  
    return Select2;
  });
  
  S2.define('select2/compat/utils',[
    'jquery'
  ], function ($) {
    function syncCssClasses ($dest, $src, adapter) {
      var classes, replacements = [], adapted;
  
      classes = $.trim($dest.attr('class'));
  
      if (classes) {
        classes = '' + classes; // for IE which returns object
  
        $(classes.split(/\s+/)).each(function () {
          // Save all Select2 classes
          if (this.indexOf('select2-') === 0) {
            replacements.push(this);
          }
        });
      }
  
      classes = $.trim($src.attr('class'));
  
      if (classes) {
        classes = '' + classes; // for IE which returns object
  
        $(classes.split(/\s+/)).each(function () {
          // Only adapt non-Select2 classes
          if (this.indexOf('select2-') !== 0) {
            adapted = adapter(this);
  
            if (adapted != null) {
              replacements.push(adapted);
            }
          }
        });
      }
  
      $dest.attr('class', replacements.join(' '));
    }
  
    return {
      syncCssClasses: syncCssClasses
    };
  });
  
  S2.define('select2/compat/containerCss',[
    'jquery',
    './utils'
  ], function ($, CompatUtils) {
    // No-op CSS adapter that discards all classes by default
    function _containerAdapter (clazz) {
      return null;
    }
  
    function ContainerCSS () { }
  
    ContainerCSS.prototype.render = function (decorated) {
      var $container = decorated.call(this);
  
      var containerCssClass = this.options.get('containerCssClass') || '';
  
      if ($.isFunction(containerCssClass)) {
        containerCssClass = containerCssClass(this.$element);
      }
  
      var containerCssAdapter = this.options.get('adaptContainerCssClass');
      containerCssAdapter = containerCssAdapter || _containerAdapter;
  
      if (containerCssClass.indexOf(':all:') !== -1) {
        containerCssClass = containerCssClass.replace(':all:', '');
  
        var _cssAdapter = containerCssAdapter;
  
        containerCssAdapter = function (clazz) {
          var adapted = _cssAdapter(clazz);
  
          if (adapted != null) {
            // Append the old one along with the adapted one
            return adapted + ' ' + clazz;
          }
  
          return clazz;
        };
      }
  
      var containerCss = this.options.get('containerCss') || {};
  
      if ($.isFunction(containerCss)) {
        containerCss = containerCss(this.$element);
      }
  
      CompatUtils.syncCssClasses($container, this.$element, containerCssAdapter);
  
      $container.css(containerCss);
      $container.addClass(containerCssClass);
  
      return $container;
    };
  
    return ContainerCSS;
  });
  
  S2.define('select2/compat/dropdownCss',[
    'jquery',
    './utils'
  ], function ($, CompatUtils) {
    // No-op CSS adapter that discards all classes by default
    function _dropdownAdapter (clazz) {
      return null;
    }
  
    function DropdownCSS () { }
  
    DropdownCSS.prototype.render = function (decorated) {
      var $dropdown = decorated.call(this);
  
      var dropdownCssClass = this.options.get('dropdownCssClass') || '';
  
      if ($.isFunction(dropdownCssClass)) {
        dropdownCssClass = dropdownCssClass(this.$element);
      }
  
      var dropdownCssAdapter = this.options.get('adaptDropdownCssClass');
      dropdownCssAdapter = dropdownCssAdapter || _dropdownAdapter;
  
      if (dropdownCssClass.indexOf(':all:') !== -1) {
        dropdownCssClass = dropdownCssClass.replace(':all:', '');
  
        var _cssAdapter = dropdownCssAdapter;
  
        dropdownCssAdapter = function (clazz) {
          var adapted = _cssAdapter(clazz);
  
          if (adapted != null) {
            // Append the old one along with the adapted one
            return adapted + ' ' + clazz;
          }
  
          return clazz;
        };
      }
  
      var dropdownCss = this.options.get('dropdownCss') || {};
  
      if ($.isFunction(dropdownCss)) {
        dropdownCss = dropdownCss(this.$element);
      }
  
      CompatUtils.syncCssClasses($dropdown, this.$element, dropdownCssAdapter);
  
      $dropdown.css(dropdownCss);
      $dropdown.addClass(dropdownCssClass);
  
      return $dropdown;
    };
  
    return DropdownCSS;
  });
  
  S2.define('select2/compat/initSelection',[
    'jquery'
  ], function ($) {
    function InitSelection (decorated, $element, options) {
      if (options.get('debug') && window.console && console.warn) {
        console.warn(
          'Select2: The `initSelection` option has been deprecated in favor' +
          ' of a custom data adapter that overrides the `current` method. ' +
          'This method is now called multiple times instead of a single ' +
          'time when the instance is initialized. Support will be removed ' +
          'for the `initSelection` option in future versions of Select2'
        );
      }
  
      this.initSelection = options.get('initSelection');
      this._isInitialized = false;
  
      decorated.call(this, $element, options);
    }
  
    InitSelection.prototype.current = function (decorated, callback) {
      var self = this;
  
      if (this._isInitialized) {
        decorated.call(this, callback);
  
        return;
      }
  
      this.initSelection.call(null, this.$element, function (data) {
        self._isInitialized = true;
  
        if (!$.isArray(data)) {
          data = [data];
        }
  
        callback(data);
      });
    };
  
    return InitSelection;
  });
  
  S2.define('select2/compat/inputData',[
    'jquery',
    '../utils'
  ], function ($, Utils) {
    function InputData (decorated, $element, options) {
      this._currentData = [];
      this._valueSeparator = options.get('valueSeparator') || ',';
  
      if ($element.prop('type') === 'hidden') {
        if (options.get('debug') && console && console.warn) {
          console.warn(
            'Select2: Using a hidden input with Select2 is no longer ' +
            'supported and may stop working in the future. It is recommended ' +
            'to use a `<select>` element instead.'
          );
        }
      }
  
      decorated.call(this, $element, options);
    }
  
    InputData.prototype.current = function (_, callback) {
      function getSelected (data, selectedIds) {
        var selected = [];
  
        if (data.selected || $.inArray(data.id, selectedIds) !== -1) {
          data.selected = true;
          selected.push(data);
        } else {
          data.selected = false;
        }
  
        if (data.children) {
          selected.push.apply(selected, getSelected(data.children, selectedIds));
        }
  
        return selected;
      }
  
      var selected = [];
  
      for (var d = 0; d < this._currentData.length; d++) {
        var data = this._currentData[d];
  
        selected.push.apply(
          selected,
          getSelected(
            data,
            this.$element.val().split(
              this._valueSeparator
            )
          )
        );
      }
  
      callback(selected);
    };
  
    InputData.prototype.select = function (_, data) {
      if (!this.options.get('multiple')) {
        this.current(function (allData) {
          $.map(allData, function (data) {
            data.selected = false;
          });
        });
  
        this.$element.val(data.id);
        this.$element.trigger('change');
      } else {
        var value = this.$element.val();
        value += this._valueSeparator + data.id;
  
        this.$element.val(value);
        this.$element.trigger('change');
      }
    };
  
    InputData.prototype.unselect = function (_, data) {
      var self = this;
  
      data.selected = false;
  
      this.current(function (allData) {
        var values = [];
  
        for (var d = 0; d < allData.length; d++) {
          var item = allData[d];
  
          if (data.id == item.id) {
            continue;
          }
  
          values.push(item.id);
        }
  
        self.$element.val(values.join(self._valueSeparator));
        self.$element.trigger('change');
      });
    };
  
    InputData.prototype.query = function (_, params, callback) {
      var results = [];
  
      for (var d = 0; d < this._currentData.length; d++) {
        var data = this._currentData[d];
  
        var matches = this.matches(params, data);
  
        if (matches !== null) {
          results.push(matches);
        }
      }
  
      callback({
        results: results
      });
    };
  
    InputData.prototype.addOptions = function (_, $options) {
      var options = $.map($options, function ($option) {
        return Utils.GetData($option[0], 'data');
      });
  
      this._currentData.push.apply(this._currentData, options);
    };
  
    return InputData;
  });
  
  S2.define('select2/compat/matcher',[
    'jquery'
  ], function ($) {
    function oldMatcher (matcher) {
      function wrappedMatcher (params, data) {
        var match = $.extend(true, {}, data);
  
        if (params.term == null || $.trim(params.term) === '') {
          return match;
        }
  
        if (data.children) {
          for (var c = data.children.length - 1; c >= 0; c--) {
            var child = data.children[c];
  
            // Check if the child object matches
            // The old matcher returned a boolean true or false
            var doesMatch = matcher(params.term, child.text, child);
  
            // If the child didn't match, pop it off
            if (!doesMatch) {
              match.children.splice(c, 1);
            }
          }
  
          if (match.children.length > 0) {
            return match;
          }
        }
  
        if (matcher(params.term, data.text, data)) {
          return match;
        }
  
        return null;
      }
  
      return wrappedMatcher;
    }
  
    return oldMatcher;
  });
  
  S2.define('select2/compat/query',[
  
  ], function () {
    function Query (decorated, $element, options) {
      if (options.get('debug') && window.console && console.warn) {
        console.warn(
          'Select2: The `query` option has been deprecated in favor of a ' +
          'custom data adapter that overrides the `query` method. Support ' +
          'will be removed for the `query` option in future versions of ' +
          'Select2.'
        );
      }
  
      decorated.call(this, $element, options);
    }
  
    Query.prototype.query = function (_, params, callback) {
      params.callback = callback;
  
      var query = this.options.get('query');
  
      query.call(null, params);
    };
  
    return Query;
  });
  
  S2.define('select2/dropdown/attachContainer',[
  
  ], function () {
    function AttachContainer (decorated, $element, options) {
      decorated.call(this, $element, options);
    }
  
    AttachContainer.prototype.position =
      function (decorated, $dropdown, $container) {
      var $dropdownContainer = $container.find('.dropdown-wrapper');
      $dropdownContainer.append($dropdown);
  
      $dropdown.addClass('select2-dropdown--below');
      $container.addClass('select2-container--below');
    };
  
    return AttachContainer;
  });
  
  S2.define('select2/dropdown/stopPropagation',[
  
  ], function () {
    function StopPropagation () { }
  
    StopPropagation.prototype.bind = function (decorated, container, $container) {
      decorated.call(this, container, $container);
  
      var stoppedEvents = [
      'blur',
      'change',
      'click',
      'dblclick',
      'focus',
      'focusin',
      'focusout',
      'input',
      'keydown',
      'keyup',
      'keypress',
      'mousedown',
      'mouseenter',
      'mouseleave',
      'mousemove',
      'mouseover',
      'mouseup',
      'search',
      'touchend',
      'touchstart'
      ];
  
      this.$dropdown.on(stoppedEvents.join(' '), function (evt) {
        evt.stopPropagation();
      });
    };
  
    return StopPropagation;
  });
  
  S2.define('select2/selection/stopPropagation',[
  
  ], function () {
    function StopPropagation () { }
  
    StopPropagation.prototype.bind = function (decorated, container, $container) {
      decorated.call(this, container, $container);
  
      var stoppedEvents = [
        'blur',
        'change',
        'click',
        'dblclick',
        'focus',
        'focusin',
        'focusout',
        'input',
        'keydown',
        'keyup',
        'keypress',
        'mousedown',
        'mouseenter',
        'mouseleave',
        'mousemove',
        'mouseover',
        'mouseup',
        'search',
        'touchend',
        'touchstart'
      ];
  
      this.$selection.on(stoppedEvents.join(' '), function (evt) {
        evt.stopPropagation();
      });
    };
  
    return StopPropagation;
  });
  
  /*!
   * jQuery Mousewheel 3.1.13
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license
   * http://jquery.org/license
   */
  
  (function (factory) {
      if ( typeof S2.define === 'function' && S2.define.amd ) {
          // AMD. Register as an anonymous module.
          S2.define('jquery-mousewheel',['jquery'], factory);
      } else if (typeof exports === 'object') {
          // Node/CommonJS style for Browserify
          module.exports = factory;
      } else {
          // Browser globals
          factory(jQuery);
      }
  }(function ($) {
  
      var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
          toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                      ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
          slice  = Array.prototype.slice,
          nullLowestDeltaTimeout, lowestDelta;
  
      if ( $.event.fixHooks ) {
          for ( var i = toFix.length; i; ) {
              $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
          }
      }
  
      var special = $.event.special.mousewheel = {
          version: '3.1.12',
  
          setup: function() {
              if ( this.addEventListener ) {
                  for ( var i = toBind.length; i; ) {
                      this.addEventListener( toBind[--i], handler, false );
                  }
              } else {
                  this.onmousewheel = handler;
              }
              // Store the line height and page height for this particular element
              $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
              $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
          },
  
          teardown: function() {
              if ( this.removeEventListener ) {
                  for ( var i = toBind.length; i; ) {
                      this.removeEventListener( toBind[--i], handler, false );
                  }
              } else {
                  this.onmousewheel = null;
              }
              // Clean up the data we added to the element
              $.removeData(this, 'mousewheel-line-height');
              $.removeData(this, 'mousewheel-page-height');
          },
  
          getLineHeight: function(elem) {
              var $elem = $(elem),
                  $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
              if (!$parent.length) {
                  $parent = $('body');
              }
              return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
          },
  
          getPageHeight: function(elem) {
              return $(elem).height();
          },
  
          settings: {
              adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
              normalizeOffset: true  // calls getBoundingClientRect for each event
          }
      };
  
      $.fn.extend({
          mousewheel: function(fn) {
              return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
          },
  
          unmousewheel: function(fn) {
              return this.unbind('mousewheel', fn);
          }
      });
  
  
      function handler(event) {
          var orgEvent   = event || window.event,
              args       = slice.call(arguments, 1),
              delta      = 0,
              deltaX     = 0,
              deltaY     = 0,
              absDelta   = 0,
              offsetX    = 0,
              offsetY    = 0;
          event = $.event.fix(orgEvent);
          event.type = 'mousewheel';
  
          // Old school scrollwheel delta
          if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
          if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
          if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
          if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }
  
          // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
          if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
              deltaX = deltaY * -1;
              deltaY = 0;
          }
  
          // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
          delta = deltaY === 0 ? deltaX : deltaY;
  
          // New school wheel delta (wheel event)
          if ( 'deltaY' in orgEvent ) {
              deltaY = orgEvent.deltaY * -1;
              delta  = deltaY;
          }
          if ( 'deltaX' in orgEvent ) {
              deltaX = orgEvent.deltaX;
              if ( deltaY === 0 ) { delta  = deltaX * -1; }
          }
  
          // No change actually happened, no reason to go any further
          if ( deltaY === 0 && deltaX === 0 ) { return; }
  
          // Need to convert lines and pages to pixels if we aren't already in pixels
          // There are three delta modes:
          //   * deltaMode 0 is by pixels, nothing to do
          //   * deltaMode 1 is by lines
          //   * deltaMode 2 is by pages
          if ( orgEvent.deltaMode === 1 ) {
              var lineHeight = $.data(this, 'mousewheel-line-height');
              delta  *= lineHeight;
              deltaY *= lineHeight;
              deltaX *= lineHeight;
          } else if ( orgEvent.deltaMode === 2 ) {
              var pageHeight = $.data(this, 'mousewheel-page-height');
              delta  *= pageHeight;
              deltaY *= pageHeight;
              deltaX *= pageHeight;
          }
  
          // Store lowest absolute delta to normalize the delta values
          absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );
  
          if ( !lowestDelta || absDelta < lowestDelta ) {
              lowestDelta = absDelta;
  
              // Adjust older deltas if necessary
              if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                  lowestDelta /= 40;
              }
          }
  
          // Adjust older deltas if necessary
          if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
              // Divide all the things by 40!
              delta  /= 40;
              deltaX /= 40;
              deltaY /= 40;
          }
  
          // Get a whole, normalized value for the deltas
          delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
          deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
          deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);
  
          // Normalise offsetX and offsetY properties
          if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
              var boundingRect = this.getBoundingClientRect();
              offsetX = event.clientX - boundingRect.left;
              offsetY = event.clientY - boundingRect.top;
          }
  
          // Add information to the event object
          event.deltaX = deltaX;
          event.deltaY = deltaY;
          event.deltaFactor = lowestDelta;
          event.offsetX = offsetX;
          event.offsetY = offsetY;
          // Go ahead and set deltaMode to 0 since we converted to pixels
          // Although this is a little odd since we overwrite the deltaX/Y
          // properties with normalized deltas.
          event.deltaMode = 0;
  
          // Add event and delta to the front of the arguments
          args.unshift(event, delta, deltaX, deltaY);
  
          // Clearout lowestDelta after sometime to better
          // handle multiple device types that give different
          // a different lowestDelta
          // Ex: trackpad = 3 and mouse wheel = 120
          if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
          nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);
  
          return ($.event.dispatch || $.event.handle).apply(this, args);
      }
  
      function nullLowestDelta() {
          lowestDelta = null;
      }
  
      function shouldAdjustOldDeltas(orgEvent, absDelta) {
          // If this is an older event and the delta is divisable by 120,
          // then we are assuming that the browser is treating this as an
          // older mouse wheel event and that we should divide the deltas
          // by 40 to try and get a more usable deltaFactor.
          // Side note, this actually impacts the reported scroll distance
          // in older browsers and can cause scrolling to be slower than native.
          // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
          return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
      }
  
  }));
  
  S2.define('jquery.select2',[
    'jquery',
    'jquery-mousewheel',
  
    './select2/core',
    './select2/defaults',
    './select2/utils'
  ], function ($, _, Select2, Defaults, Utils) {
    if ($.fn.select2 == null) {
      // All methods that should return the element
      var thisMethods = ['open', 'close', 'destroy'];
  
      $.fn.select2 = function (options) {
        options = options || {};
  
        if (typeof options === 'object') {
          this.each(function () {
            var instanceOptions = $.extend(true, {}, options);
  
            var instance = new Select2($(this), instanceOptions);
          });
  
          return this;
        } else if (typeof options === 'string') {
          var ret;
          var args = Array.prototype.slice.call(arguments, 1);
  
          this.each(function () {
            var instance = Utils.GetData(this, 'select2');
  
            if (instance == null && window.console && console.error) {
              console.error(
                'The select2(\'' + options + '\') method was called on an ' +
                'element that is not using Select2.'
              );
            }
  
            ret = instance[options].apply(instance, args);
          });
  
          // Check if we should be returning `this`
          if ($.inArray(options, thisMethods) > -1) {
            return this;
          }
  
          return ret;
        } else {
          throw new Error('Invalid arguments for Select2: ' + options);
        }
      };
    }
  
    if ($.fn.select2.defaults == null) {
      $.fn.select2.defaults = Defaults;
    }
  
    return Select2;
  });
  
    // Return the AMD loader configuration so it can be used outside of this file
    return {
      define: S2.define,
      require: S2.require
    };
  }());
  
    // Autoload the jQuery bindings
    // We know that all of the modules exist above this, so we're safe
    var select2 = S2.require('jquery.select2');
  
    // Hold the AMD module references on the jQuery function that was just loaded
    // This allows Select2 to use the internal loader outside of this file, such
    // as in the language files.
    jQuery.fn.select2.amd = S2;
  
    // Return the Select2 instance for anyone who is importing it.
    return select2;
  }));


  (function(factory){
	if(typeof define==="function" && define.amd){
		define(["jquery"],factory);
	}else if(typeof module!=="undefined" && module.exports){
		module.exports=factory;
	}else{
		factory(jQuery,window,document);
	}
}(function($){
(function(init){
	var _rjs=typeof define==="function" && define.amd, /* RequireJS */
		_njs=typeof module !== "undefined" && module.exports, /* NodeJS */
		_dlp=("https:"==document.location.protocol) ? "https:" : "http:", /* location protocol */
		_url="cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";
	if(!_rjs){
		if(_njs){
			require("jquery-mousewheel")($);
		}else{
			/* load jquery-mousewheel plugin (via CDN) if it's not present or not loaded via RequireJS 
			(works when mCustomScrollbar fn is called on window load) */
			$.event.special.mousewheel || $("head").append(decodeURI("%3Cscript src="+_dlp+"//"+_url+"%3E%3C/script%3E"));
		}
	}
	init();
}(function(){
	
	/* 
	----------------------------------------
	PLUGIN NAMESPACE, PREFIX, DEFAULT SELECTOR(S) 
	----------------------------------------
	*/
	
	var pluginNS="mCustomScrollbar",
		pluginPfx="mCS",
		defaultSelector=".mCustomScrollbar",
	
	
		
	
	
	/* 
	----------------------------------------
	DEFAULT OPTIONS 
	----------------------------------------
	*/
	
		defaults={
			/*
			set element/content width/height programmatically 
			values: boolean, pixels, percentage 
				option						default
				-------------------------------------
				setWidth					false
				setHeight					false
			*/
			/*
			set the initial css top property of content  
			values: string (e.g. "-100px", "10%" etc.)
			*/
			setTop:0,
			/*
			set the initial css left property of content  
			values: string (e.g. "-100px", "10%" etc.)
			*/
			setLeft:0,
			/* 
			scrollbar axis (vertical and/or horizontal scrollbars) 
			values (string): "y", "x", "yx"
			*/
			axis:"y",
			/*
			position of scrollbar relative to content  
			values (string): "inside", "outside" ("outside" requires elements with position:relative)
			*/
			scrollbarPosition:"inside",
			/*
			scrolling inertia
			values: integer (milliseconds)
			*/
			scrollInertia:950,
			/* 
			auto-adjust scrollbar dragger length
			values: boolean
			*/
			autoDraggerLength:true,
			/*
			auto-hide scrollbar when idle 
			values: boolean
				option						default
				-------------------------------------
				autoHideScrollbar			false
			*/
			/*
			auto-expands scrollbar on mouse-over and dragging
			values: boolean
				option						default
				-------------------------------------
				autoExpandScrollbar			false
			*/
			/*
			always show scrollbar, even when there's nothing to scroll 
			values: integer (0=disable, 1=always show dragger rail and buttons, 2=always show dragger rail, dragger and buttons), boolean
			*/
			alwaysShowScrollbar:0,
			/*
			scrolling always snaps to a multiple of this number in pixels
			values: integer, array ([y,x])
				option						default
				-------------------------------------
				snapAmount					null
			*/
			/*
			when snapping, snap with this number in pixels as an offset 
			values: integer
			*/
			snapOffset:0,
			/* 
			mouse-wheel scrolling
			*/
			mouseWheel:{
				/* 
				enable mouse-wheel scrolling
				values: boolean
				*/
				enable:true,
				/* 
				scrolling amount in pixels
				values: "auto", integer 
				*/
				scrollAmount:"auto",
				/* 
				mouse-wheel scrolling axis 
				the default scrolling direction when both vertical and horizontal scrollbars are present 
				values (string): "y", "x" 
				*/
				axis:"y",
				/* 
				prevent the default behaviour which automatically scrolls the parent element(s) when end of scrolling is reached 
				values: boolean
					option						default
					-------------------------------------
					preventDefault				null
				*/
				/*
				the reported mouse-wheel delta value. The number of lines (translated to pixels) one wheel notch scrolls.  
				values: "auto", integer 
				"auto" uses the default OS/browser value 
				*/
				deltaFactor:"auto",
				/*
				normalize mouse-wheel delta to -1 or 1 (disables mouse-wheel acceleration) 
				values: boolean
					option						default
					-------------------------------------
					normalizeDelta				null
				*/
				/*
				invert mouse-wheel scrolling direction 
				values: boolean
					option						default
					-------------------------------------
					invert						null
				*/
				/*
				the tags that disable mouse-wheel when cursor is over them
				*/
				disableOver:["select","option","keygen","datalist","textarea"]
			},
			/* 
			scrollbar buttons
			*/
			scrollButtons:{ 
				/*
				enable scrollbar buttons
				values: boolean
					option						default
					-------------------------------------
					enable						null
				*/
				/*
				scrollbar buttons scrolling type 
				values (string): "stepless", "stepped"
				*/
				scrollType:"stepless",
				/*
				scrolling amount in pixels
				values: "auto", integer 
				*/
				scrollAmount:"auto"
				/*
				tabindex of the scrollbar buttons
				values: false, integer
					option						default
					-------------------------------------
					tabindex					null
				*/
			},
			/* 
			keyboard scrolling
			*/
			keyboard:{ 
				/*
				enable scrolling via keyboard
				values: boolean
				*/
				enable:true,
				/*
				keyboard scrolling type 
				values (string): "stepless", "stepped"
				*/
				scrollType:"stepless",
				/*
				scrolling amount in pixels
				values: "auto", integer 
				*/
				scrollAmount:"auto"
			},
			/*
			enable content touch-swipe scrolling 
			values: boolean, integer, string (number)
			integer values define the axis-specific minimum amount required for scrolling momentum
			*/
			contentTouchScroll:25,
			/*
			enable/disable document (default) touch-swipe scrolling 
			*/
			documentTouchScroll:true,
			/*
			advanced option parameters
			*/
			advanced:{
				/*
				auto-expand content horizontally (for "x" or "yx" axis) 
				values: boolean, integer (the value 2 forces the non scrollHeight/scrollWidth method, the value 3 forces the scrollHeight/scrollWidth method)
					option						default
					-------------------------------------
					autoExpandHorizontalScroll	null
				*/
				/*
				auto-scroll to elements with focus
				*/
				autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
				/*
				auto-update scrollbars on content, element or viewport resize 
				should be true for fluid layouts/elements, adding/removing content dynamically, hiding/showing elements, content with images etc. 
				values: boolean
				*/
				updateOnContentResize:true,
				/*
				auto-update scrollbars each time each image inside the element is fully loaded 
				values: "auto", boolean
				*/
				updateOnImageLoad:"auto",
				/*
				auto-update scrollbars based on the amount and size changes of specific selectors 
				useful when you need to update the scrollbar(s) automatically, each time a type of element is added, removed or changes its size 
				values: boolean, string (e.g. "ul li" will auto-update scrollbars each time list-items inside the element are changed) 
				a value of true (boolean) will auto-update scrollbars each time any element is changed
					option						default
					-------------------------------------
					updateOnSelectorChange		null
				*/
				/*
				extra selectors that'll allow scrollbar dragging upon mousemove/up, pointermove/up, touchend etc. (e.g. "selector-1, selector-2")
					option						default
					-------------------------------------
					extraDraggableSelectors		null
				*/
				/*
				extra selectors that'll release scrollbar dragging upon mouseup, pointerup, touchend etc. (e.g. "selector-1, selector-2")
					option						default
					-------------------------------------
					releaseDraggableSelectors	null
				*/
				/*
				auto-update timeout 
				values: integer (milliseconds)
				*/
				autoUpdateTimeout:60
			},
			/* 
			scrollbar theme 
			values: string (see CSS/plugin URI for a list of ready-to-use themes)
			*/
			theme:"light",
			/*
			user defined callback functions
			*/
			callbacks:{
				/*
				Available callbacks: 
					callback					default
					-------------------------------------
					onCreate					null
					onInit						null
					onScrollStart				null
					onScroll					null
					onTotalScroll				null
					onTotalScrollBack			null
					whileScrolling				null
					onOverflowY					null
					onOverflowX					null
					onOverflowYNone				null
					onOverflowXNone				null
					onImageLoad					null
					onSelectorChange			null
					onBeforeUpdate				null
					onUpdate					null
				*/
				onTotalScrollOffset:0,
				onTotalScrollBackOffset:0,
				alwaysTriggerOffsets:true
			}
			/*
			add scrollbar(s) on all elements matching the current selector, now and in the future 
			values: boolean, string 
			string values: "on" (enable), "once" (disable after first invocation), "off" (disable)
			liveSelector values: string (selector)
				option						default
				-------------------------------------
				live						false
				liveSelector				null
			*/
		},
	
	
	
	
	
	/* 
	----------------------------------------
	VARS, CONSTANTS 
	----------------------------------------
	*/
	
		totalInstances=0, /* plugin instances amount */
		liveTimers={}, /* live option timers */
		oldIE=(window.attachEvent && !window.addEventListener) ? 1 : 0, /* detect IE < 9 */
		touchActive=false,touchable, /* global touch vars (for touch and pointer events) */
		/* general plugin classes */
		classes=[
			"mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar",
			"mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer",
			"mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"
		],
		
	
	
	
	
	/* 
	----------------------------------------
	METHODS 
	----------------------------------------
	*/
	
		methods={
			
			/* 
			plugin initialization method 
			creates the scrollbar(s), plugin data object and options
			----------------------------------------
			*/
			
			init:function(options){
				
				var options=$.extend(true,{},defaults,options),
					selector=_selector.call(this); /* validate selector */
				
				/* 
				if live option is enabled, monitor for elements matching the current selector and 
				apply scrollbar(s) when found (now and in the future) 
				*/
				if(options.live){
					var liveSelector=options.liveSelector || this.selector || defaultSelector, /* live selector(s) */
						$liveSelector=$(liveSelector); /* live selector(s) as jquery object */
					if(options.live==="off"){
						/* 
						disable live if requested 
						usage: $(selector).mCustomScrollbar({live:"off"}); 
						*/
						removeLiveTimers(liveSelector);
						return;
					}
					liveTimers[liveSelector]=setTimeout(function(){
						/* call mCustomScrollbar fn on live selector(s) every half-second */
						$liveSelector.mCustomScrollbar(options);
						if(options.live==="once" && $liveSelector.length){
							/* disable live after first invocation */
							removeLiveTimers(liveSelector);
						}
					},500);
				}else{
					removeLiveTimers(liveSelector);
				}
				
				/* options backward compatibility (for versions < 3.0.0) and normalization */
				options.setWidth=(options.set_width) ? options.set_width : options.setWidth;
				options.setHeight=(options.set_height) ? options.set_height : options.setHeight;
				options.axis=(options.horizontalScroll) ? "x" : _findAxis(options.axis);
				options.scrollInertia=options.scrollInertia>0 && options.scrollInertia<17 ? 17 : options.scrollInertia;
				if(typeof options.mouseWheel!=="object" &&  options.mouseWheel==true){ /* old school mouseWheel option (non-object) */
					options.mouseWheel={enable:true,scrollAmount:"auto",axis:"y",preventDefault:false,deltaFactor:"auto",normalizeDelta:false,invert:false}
				}
				options.mouseWheel.scrollAmount=!options.mouseWheelPixels ? options.mouseWheel.scrollAmount : options.mouseWheelPixels;
				options.mouseWheel.normalizeDelta=!options.advanced.normalizeMouseWheelDelta ? options.mouseWheel.normalizeDelta : options.advanced.normalizeMouseWheelDelta;
				options.scrollButtons.scrollType=_findScrollButtonsType(options.scrollButtons.scrollType); 
				
				_theme(options); /* theme-specific options */
				
				/* plugin constructor */
				return $(selector).each(function(){
					
					var $this=$(this);
					
					if(!$this.data(pluginPfx)){ /* prevent multiple instantiations */
					
						/* store options and create objects in jquery data */
						$this.data(pluginPfx,{
							idx:++totalInstances, /* instance index */
							opt:options, /* options */
							scrollRatio:{y:null,x:null}, /* scrollbar to content ratio */
							overflowed:null, /* overflowed axis */
							contentReset:{y:null,x:null}, /* object to check when content resets */
							bindEvents:false, /* object to check if events are bound */
							tweenRunning:false, /* object to check if tween is running */
							sequential:{}, /* sequential scrolling object */
							langDir:$this.css("direction"), /* detect/store direction (ltr or rtl) */
							cbOffsets:null, /* object to check whether callback offsets always trigger */
							/* 
							object to check how scrolling events where last triggered 
							"internal" (default - triggered by this script), "external" (triggered by other scripts, e.g. via scrollTo method) 
							usage: object.data("mCS").trigger
							*/
							trigger:null,
							/* 
							object to check for changes in elements in order to call the update method automatically 
							*/
							poll:{size:{o:0,n:0},img:{o:0,n:0},change:{o:0,n:0}}
						});
						
						var d=$this.data(pluginPfx),o=d.opt,
							/* HTML data attributes */
							htmlDataAxis=$this.data("mcs-axis"),htmlDataSbPos=$this.data("mcs-scrollbar-position"),htmlDataTheme=$this.data("mcs-theme");
						 
						if(htmlDataAxis){o.axis=htmlDataAxis;} /* usage example: data-mcs-axis="y" */
						if(htmlDataSbPos){o.scrollbarPosition=htmlDataSbPos;} /* usage example: data-mcs-scrollbar-position="outside" */
						if(htmlDataTheme){ /* usage example: data-mcs-theme="minimal" */
							o.theme=htmlDataTheme;
							_theme(o); /* theme-specific options */
						}
						
						_pluginMarkup.call(this); /* add plugin markup */
						
						if(d && o.callbacks.onCreate && typeof o.callbacks.onCreate==="function"){o.callbacks.onCreate.call(this);} /* callbacks: onCreate */
						
						$("#mCSB_"+d.idx+"_container img:not(."+classes[2]+")").addClass(classes[2]); /* flag loaded images */
						
						methods.update.call(null,$this); /* call the update method */
					
					}
					
				});
				
			},
			/* ---------------------------------------- */
			
			
			
			/* 
			plugin update method 
			updates content and scrollbar(s) values, events and status 
			----------------------------------------
			usage: $(selector).mCustomScrollbar("update");
			*/
			
			update:function(el,cb){
				
				var selector=el || _selector.call(this); /* validate selector */
				
				return $(selector).each(function(){
					
					var $this=$(this);
					
					if($this.data(pluginPfx)){ /* check if plugin has initialized */
						
						var d=$this.data(pluginPfx),o=d.opt,
							mCSB_container=$("#mCSB_"+d.idx+"_container"),
							mCustomScrollBox=$("#mCSB_"+d.idx),
							mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")];
						
						if(!mCSB_container.length){return;}
						
						if(d.tweenRunning){_stop($this);} /* stop any running tweens while updating */
						
						if(cb && d && o.callbacks.onBeforeUpdate && typeof o.callbacks.onBeforeUpdate==="function"){o.callbacks.onBeforeUpdate.call(this);} /* callbacks: onBeforeUpdate */
						
						/* if element was disabled or destroyed, remove class(es) */
						if($this.hasClass(classes[3])){$this.removeClass(classes[3]);}
						if($this.hasClass(classes[4])){$this.removeClass(classes[4]);}
						
						/* css flexbox fix, detect/set max-height */
						mCustomScrollBox.css("max-height","none");
						if(mCustomScrollBox.height()!==$this.height()){mCustomScrollBox.css("max-height",$this.height());}
						
						_expandContentHorizontally.call(this); /* expand content horizontally */
						
						if(o.axis!=="y" && !o.advanced.autoExpandHorizontalScroll){
							mCSB_container.css("width",_contentWidth(mCSB_container));
						}
						
						d.overflowed=_overflowed.call(this); /* determine if scrolling is required */
						
						_scrollbarVisibility.call(this); /* show/hide scrollbar(s) */
						
						/* auto-adjust scrollbar dragger length analogous to content */
						if(o.autoDraggerLength){_setDraggerLength.call(this);}
						
						_scrollRatio.call(this); /* calculate and store scrollbar to content ratio */
						
						_bindEvents.call(this); /* bind scrollbar events */
						
						/* reset scrolling position and/or events */
						var to=[Math.abs(mCSB_container[0].offsetTop),Math.abs(mCSB_container[0].offsetLeft)];
						if(o.axis!=="x"){ /* y/yx axis */
							if(!d.overflowed[0]){ /* y scrolling is not required */
								_resetContentPosition.call(this); /* reset content position */
								if(o.axis==="y"){
									_unbindEvents.call(this);
								}else if(o.axis==="yx" && d.overflowed[1]){
									_scrollTo($this,to[1].toString(),{dir:"x",dur:0,overwrite:"none"});
								}
							}else if(mCSB_dragger[0].height()>mCSB_dragger[0].parent().height()){
								_resetContentPosition.call(this); /* reset content position */
							}else{ /* y scrolling is required */
								_scrollTo($this,to[0].toString(),{dir:"y",dur:0,overwrite:"none"});
								d.contentReset.y=null;
							}
						}
						if(o.axis!=="y"){ /* x/yx axis */
							if(!d.overflowed[1]){ /* x scrolling is not required */
								_resetContentPosition.call(this); /* reset content position */
								if(o.axis==="x"){
									_unbindEvents.call(this);
								}else if(o.axis==="yx" && d.overflowed[0]){
									_scrollTo($this,to[0].toString(),{dir:"y",dur:0,overwrite:"none"});
								}
							}else if(mCSB_dragger[1].width()>mCSB_dragger[1].parent().width()){
								_resetContentPosition.call(this); /* reset content position */
							}else{ /* x scrolling is required */
								_scrollTo($this,to[1].toString(),{dir:"x",dur:0,overwrite:"none"});
								d.contentReset.x=null;
							}
						}
						
						/* callbacks: onImageLoad, onSelectorChange, onUpdate */
						if(cb && d){
							if(cb===2 && o.callbacks.onImageLoad && typeof o.callbacks.onImageLoad==="function"){
								o.callbacks.onImageLoad.call(this);
							}else if(cb===3 && o.callbacks.onSelectorChange && typeof o.callbacks.onSelectorChange==="function"){
								o.callbacks.onSelectorChange.call(this);
							}else if(o.callbacks.onUpdate && typeof o.callbacks.onUpdate==="function"){
								o.callbacks.onUpdate.call(this);
							}
						}
						
						_autoUpdate.call(this); /* initialize automatic updating (for dynamic content, fluid layouts etc.) */
						
					}
					
				});
				
			},
			/* ---------------------------------------- */
			
			
			
			/* 
			plugin scrollTo method 
			triggers a scrolling event to a specific value
			----------------------------------------
			usage: $(selector).mCustomScrollbar("scrollTo",value,options);
			*/
		
			scrollTo:function(val,options){
				
				/* prevent silly things like $(selector).mCustomScrollbar("scrollTo",undefined); */
				if(typeof val=="undefined" || val==null){return;}
				
				var selector=_selector.call(this); /* validate selector */
				
				return $(selector).each(function(){
					
					var $this=$(this);
					
					if($this.data(pluginPfx)){ /* check if plugin has initialized */
					
						var d=$this.data(pluginPfx),o=d.opt,
							/* method default options */
							methodDefaults={
								trigger:"external", /* method is by default triggered externally (e.g. from other scripts) */
								scrollInertia:o.scrollInertia, /* scrolling inertia (animation duration) */
								scrollEasing:"mcsEaseInOut", /* animation easing */
								moveDragger:false, /* move dragger instead of content */
								timeout:60, /* scroll-to delay */
								callbacks:true, /* enable/disable callbacks */
								onStart:true,
								onUpdate:true,
								onComplete:true
							},
							methodOptions=$.extend(true,{},methodDefaults,options),
							to=_arr.call(this,val),dur=methodOptions.scrollInertia>0 && methodOptions.scrollInertia<17 ? 17 : methodOptions.scrollInertia;
						
						/* translate yx values to actual scroll-to positions */
						to[0]=_to.call(this,to[0],"y");
						to[1]=_to.call(this,to[1],"x");
						
						/* 
						check if scroll-to value moves the dragger instead of content. 
						Only pixel values apply on dragger (e.g. 100, "100px", "-=100" etc.) 
						*/
						if(methodOptions.moveDragger){
							to[0]*=d.scrollRatio.y;
							to[1]*=d.scrollRatio.x;
						}
						
						methodOptions.dur=_isTabHidden() ? 0 : dur; //skip animations if browser tab is hidden
						
						setTimeout(function(){ 
							/* do the scrolling */
							if(to[0]!==null && typeof to[0]!=="undefined" && o.axis!=="x" && d.overflowed[0]){ /* scroll y */
								methodOptions.dir="y";
								methodOptions.overwrite="all";
								_scrollTo($this,to[0].toString(),methodOptions);
							}
							if(to[1]!==null && typeof to[1]!=="undefined" && o.axis!=="y" && d.overflowed[1]){ /* scroll x */
								methodOptions.dir="x";
								methodOptions.overwrite="none";
								_scrollTo($this,to[1].toString(),methodOptions);
							}
						},methodOptions.timeout);
						
					}
					
				});
				
			},
			/* ---------------------------------------- */
			
			
			
			/*
			plugin stop method 
			stops scrolling animation
			----------------------------------------
			usage: $(selector).mCustomScrollbar("stop");
			*/
			stop:function(){
				
				var selector=_selector.call(this); /* validate selector */
				
				return $(selector).each(function(){
					
					var $this=$(this);
					
					if($this.data(pluginPfx)){ /* check if plugin has initialized */
										
						_stop($this);
					
					}
					
				});
				
			},
			/* ---------------------------------------- */
			
			
			
			/*
			plugin disable method 
			temporarily disables the scrollbar(s) 
			----------------------------------------
			usage: $(selector).mCustomScrollbar("disable",reset); 
			reset (boolean): resets content position to 0 
			*/
			disable:function(r){
				
				var selector=_selector.call(this); /* validate selector */
				
				return $(selector).each(function(){
					
					var $this=$(this);
					
					if($this.data(pluginPfx)){ /* check if plugin has initialized */
						
						var d=$this.data(pluginPfx);
						
						_autoUpdate.call(this,"remove"); /* remove automatic updating */
						
						_unbindEvents.call(this); /* unbind events */
						
						if(r){_resetContentPosition.call(this);} /* reset content position */
						
						_scrollbarVisibility.call(this,true); /* show/hide scrollbar(s) */
						
						$this.addClass(classes[3]); /* add disable class */
					
					}
					
				});
				
			},
			/* ---------------------------------------- */
			
			
			
			/*
			plugin destroy method 
			completely removes the scrollbar(s) and returns the element to its original state
			----------------------------------------
			usage: $(selector).mCustomScrollbar("destroy"); 
			*/
			destroy:function(){
				
				var selector=_selector.call(this); /* validate selector */
				
				return $(selector).each(function(){
					
					var $this=$(this);
					
					if($this.data(pluginPfx)){ /* check if plugin has initialized */
					
						var d=$this.data(pluginPfx),o=d.opt,
							mCustomScrollBox=$("#mCSB_"+d.idx),
							mCSB_container=$("#mCSB_"+d.idx+"_container"),
							scrollbar=$(".mCSB_"+d.idx+"_scrollbar");
					
						if(o.live){removeLiveTimers(o.liveSelector || $(selector).selector);} /* remove live timers */
						
						_autoUpdate.call(this,"remove"); /* remove automatic updating */
						
						_unbindEvents.call(this); /* unbind events */
						
						_resetContentPosition.call(this); /* reset content position */
						
						$this.removeData(pluginPfx); /* remove plugin data object */
						
						_delete(this,"mcs"); /* delete callbacks object */
						
						/* remove plugin markup */
						scrollbar.remove(); /* remove scrollbar(s) first (those can be either inside or outside plugin's inner wrapper) */
						mCSB_container.find("img."+classes[2]).removeClass(classes[2]); /* remove loaded images flag */
						mCustomScrollBox.replaceWith(mCSB_container.contents()); /* replace plugin's inner wrapper with the original content */
						/* remove plugin classes from the element and add destroy class */
						$this.removeClass(pluginNS+" _"+pluginPfx+"_"+d.idx+" "+classes[6]+" "+classes[7]+" "+classes[5]+" "+classes[3]).addClass(classes[4]);
					
					}
					
				});
				
			}
			/* ---------------------------------------- */
			
		},
	
	
	
	
		
	/* 
	----------------------------------------
	FUNCTIONS
	----------------------------------------
	*/
	
		/* validates selector (if selector is invalid or undefined uses the default one) */
		_selector=function(){
			return (typeof $(this)!=="object" || $(this).length<1) ? defaultSelector : this;
		},
		/* -------------------- */
		
		
		/* changes options according to theme */
		_theme=function(obj){
			var fixedSizeScrollbarThemes=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],
				nonExpandedScrollbarThemes=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],
				disabledScrollButtonsThemes=["minimal","minimal-dark"],
				enabledAutoHideScrollbarThemes=["minimal","minimal-dark"],
				scrollbarPositionOutsideThemes=["minimal","minimal-dark"];
			obj.autoDraggerLength=$.inArray(obj.theme,fixedSizeScrollbarThemes) > -1 ? false : obj.autoDraggerLength;
			obj.autoExpandScrollbar=$.inArray(obj.theme,nonExpandedScrollbarThemes) > -1 ? false : obj.autoExpandScrollbar;
			obj.scrollButtons.enable=$.inArray(obj.theme,disabledScrollButtonsThemes) > -1 ? false : obj.scrollButtons.enable;
			obj.autoHideScrollbar=$.inArray(obj.theme,enabledAutoHideScrollbarThemes) > -1 ? true : obj.autoHideScrollbar;
			obj.scrollbarPosition=$.inArray(obj.theme,scrollbarPositionOutsideThemes) > -1 ? "outside" : obj.scrollbarPosition;
		},
		/* -------------------- */
		
		
		/* live option timers removal */
		removeLiveTimers=function(selector){
			if(liveTimers[selector]){
				clearTimeout(liveTimers[selector]);
				_delete(liveTimers,selector);
			}
		},
		/* -------------------- */
		
		
		/* normalizes axis option to valid values: "y", "x", "yx" */
		_findAxis=function(val){
			return (val==="yx" || val==="xy" || val==="auto") ? "yx" : (val==="x" || val==="horizontal") ? "x" : "y";
		},
		/* -------------------- */
		
		
		/* normalizes scrollButtons.scrollType option to valid values: "stepless", "stepped" */
		_findScrollButtonsType=function(val){
			return (val==="stepped" || val==="pixels" || val==="step" || val==="click") ? "stepped" : "stepless";
		},
		/* -------------------- */
		
		
		/* generates plugin markup */
		_pluginMarkup=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				expandClass=o.autoExpandScrollbar ? " "+classes[1]+"_expand" : "",
				scrollbar=["<div id='mCSB_"+d.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+d.idx+"_scrollbar mCS-"+o.theme+" mCSB_scrollTools_vertical"+expandClass+"'><div class='"+classes[12]+"'><div id='mCSB_"+d.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+d.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+d.idx+"_scrollbar mCS-"+o.theme+" mCSB_scrollTools_horizontal"+expandClass+"'><div class='"+classes[12]+"'><div id='mCSB_"+d.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
				wrapperClass=o.axis==="yx" ? "mCSB_vertical_horizontal" : o.axis==="x" ? "mCSB_horizontal" : "mCSB_vertical",
				scrollbars=o.axis==="yx" ? scrollbar[0]+scrollbar[1] : o.axis==="x" ? scrollbar[1] : scrollbar[0],
				contentWrapper=o.axis==="yx" ? "<div id='mCSB_"+d.idx+"_container_wrapper' class='mCSB_container_wrapper' />" : "",
				autoHideClass=o.autoHideScrollbar ? " "+classes[6] : "",
				scrollbarDirClass=(o.axis!=="x" && d.langDir==="rtl") ? " "+classes[7] : "";
			if(o.setWidth){$this.css("width",o.setWidth);} /* set element width */
			if(o.setHeight){$this.css("height",o.setHeight);} /* set element height */
			o.setLeft=(o.axis!=="y" && d.langDir==="rtl") ? "989999px" : o.setLeft; /* adjust left position for rtl direction */
			$this.addClass(pluginNS+" _"+pluginPfx+"_"+d.idx+autoHideClass+scrollbarDirClass).wrapInner("<div id='mCSB_"+d.idx+"' class='mCustomScrollBox mCS-"+o.theme+" "+wrapperClass+"'><div id='mCSB_"+d.idx+"_container' class='mCSB_container' style='position:relative; top:"+o.setTop+"; left:"+o.setLeft+";' dir='"+d.langDir+"' /></div>");
			var mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_container=$("#mCSB_"+d.idx+"_container");
			if(o.axis!=="y" && !o.advanced.autoExpandHorizontalScroll){
				mCSB_container.css("width",_contentWidth(mCSB_container));
			}
			if(o.scrollbarPosition==="outside"){
				if($this.css("position")==="static"){ /* requires elements with non-static position */
					$this.css("position","relative");
				}
				$this.css("overflow","visible");
				mCustomScrollBox.addClass("mCSB_outside").after(scrollbars);
			}else{
				mCustomScrollBox.addClass("mCSB_inside").append(scrollbars);
				mCSB_container.wrap(contentWrapper);
			}
			_scrollButtons.call(this); /* add scrollbar buttons */
			/* minimum dragger length */
			var mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")];
			mCSB_dragger[0].css("min-height",mCSB_dragger[0].height());
			mCSB_dragger[1].css("min-width",mCSB_dragger[1].width());
		},
		/* -------------------- */
		
		
		/* calculates content width */
		_contentWidth=function(el){
			var val=[el[0].scrollWidth,Math.max.apply(Math,el.children().map(function(){return $(this).outerWidth(true);}).get())],w=el.parent().width();
			return val[0]>w ? val[0] : val[1]>w ? val[1] : "100%";
		},
		/* -------------------- */
		
		
		/* expands content horizontally */
		_expandContentHorizontally=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				mCSB_container=$("#mCSB_"+d.idx+"_container");
			if(o.advanced.autoExpandHorizontalScroll && o.axis!=="y"){
				/* calculate scrollWidth */
				mCSB_container.css({"width":"auto","min-width":0,"overflow-x":"scroll"});
				var w=Math.ceil(mCSB_container[0].scrollWidth);
				if(o.advanced.autoExpandHorizontalScroll===3 || (o.advanced.autoExpandHorizontalScroll!==2 && w>mCSB_container.parent().width())){
					mCSB_container.css({"width":w,"min-width":"100%","overflow-x":"inherit"});
				}else{
					/* 
					wrap content with an infinite width div and set its position to absolute and width to auto. 
					Setting width to auto before calculating the actual width is important! 
					We must let the browser set the width as browser zoom values are impossible to calculate.
					*/
					mCSB_container.css({"overflow-x":"inherit","position":"absolute"})
						.wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />")
						.css({ /* set actual width, original position and un-wrap */
							/* 
							get the exact width (with decimals) and then round-up. 
							Using jquery outerWidth() will round the width value which will mess up with inner elements that have non-integer width
							*/
							"width":(Math.ceil(mCSB_container[0].getBoundingClientRect().right+0.4)-Math.floor(mCSB_container[0].getBoundingClientRect().left)),
							"min-width":"100%",
							"position":"relative"
						}).unwrap();
				}
			}
		},
		/* -------------------- */
		
		
		/* adds scrollbar buttons */
		_scrollButtons=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				mCSB_scrollTools=$(".mCSB_"+d.idx+"_scrollbar:first"),
				tabindex=!_isNumeric(o.scrollButtons.tabindex) ? "" : "tabindex='"+o.scrollButtons.tabindex+"'",
				btnHTML=[
					"<a href='#' class='"+classes[13]+"' "+tabindex+" />",
					"<a href='#' class='"+classes[14]+"' "+tabindex+" />",
					"<a href='#' class='"+classes[15]+"' "+tabindex+" />",
					"<a href='#' class='"+classes[16]+"' "+tabindex+" />"
				],
				btn=[(o.axis==="x" ? btnHTML[2] : btnHTML[0]),(o.axis==="x" ? btnHTML[3] : btnHTML[1]),btnHTML[2],btnHTML[3]];
			if(o.scrollButtons.enable){
				mCSB_scrollTools.prepend(btn[0]).append(btn[1]).next(".mCSB_scrollTools").prepend(btn[2]).append(btn[3]);
			}
		},
		/* -------------------- */
		
		
		/* auto-adjusts scrollbar dragger length */
		_setDraggerLength=function(){
			var $this=$(this),d=$this.data(pluginPfx),
				mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")],
				ratio=[mCustomScrollBox.height()/mCSB_container.outerHeight(false),mCustomScrollBox.width()/mCSB_container.outerWidth(false)],
				l=[
					parseInt(mCSB_dragger[0].css("min-height")),Math.round(ratio[0]*mCSB_dragger[0].parent().height()),
					parseInt(mCSB_dragger[1].css("min-width")),Math.round(ratio[1]*mCSB_dragger[1].parent().width())
				],
				h=oldIE && (l[1]<l[0]) ? l[0] : l[1],w=oldIE && (l[3]<l[2]) ? l[2] : l[3];
			mCSB_dragger[0].css({
				"height":h,"max-height":(mCSB_dragger[0].parent().height()-10)
			}).find(".mCSB_dragger_bar").css({"line-height":l[0]+"px"});
			mCSB_dragger[1].css({
				"width":w,"max-width":(mCSB_dragger[1].parent().width()-10)
			});
		},
		/* -------------------- */
		
		
		/* calculates scrollbar to content ratio */
		_scrollRatio=function(){
			var $this=$(this),d=$this.data(pluginPfx),
				mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")],
				scrollAmount=[mCSB_container.outerHeight(false)-mCustomScrollBox.height(),mCSB_container.outerWidth(false)-mCustomScrollBox.width()],
				ratio=[
					scrollAmount[0]/(mCSB_dragger[0].parent().height()-mCSB_dragger[0].height()),
					scrollAmount[1]/(mCSB_dragger[1].parent().width()-mCSB_dragger[1].width())
				];
			d.scrollRatio={y:ratio[0],x:ratio[1]};
		},
		/* -------------------- */
		
		
		/* toggles scrolling classes */
		_onDragClasses=function(el,action,xpnd){
			var expandClass=xpnd ? classes[0]+"_expanded" : "",
				scrollbar=el.closest(".mCSB_scrollTools");
			if(action==="active"){
				el.toggleClass(classes[0]+" "+expandClass); scrollbar.toggleClass(classes[1]); 
				el[0]._draggable=el[0]._draggable ? 0 : 1;
			}else{
				if(!el[0]._draggable){
					if(action==="hide"){
						el.removeClass(classes[0]); scrollbar.removeClass(classes[1]);
					}else{
						el.addClass(classes[0]); scrollbar.addClass(classes[1]);
					}
				}
			}
		},
		/* -------------------- */
		
		
		/* checks if content overflows its container to determine if scrolling is required */
		_overflowed=function(){
			var $this=$(this),d=$this.data(pluginPfx),
				mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				contentHeight=d.overflowed==null ? mCSB_container.height() : mCSB_container.outerHeight(false),
				contentWidth=d.overflowed==null ? mCSB_container.width() : mCSB_container.outerWidth(false),
				h=mCSB_container[0].scrollHeight,w=mCSB_container[0].scrollWidth;
			if(h>contentHeight){contentHeight=h;}
			if(w>contentWidth){contentWidth=w;}
			return [contentHeight>mCustomScrollBox.height(),contentWidth>mCustomScrollBox.width()];
		},
		/* -------------------- */
		
		
		/* resets content position to 0 */
		_resetContentPosition=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")];
			_stop($this); /* stop any current scrolling before resetting */
			if((o.axis!=="x" && !d.overflowed[0]) || (o.axis==="y" && d.overflowed[0])){ /* reset y */
				mCSB_dragger[0].add(mCSB_container).css("top",0);
				_scrollTo($this,"_resetY");
			}
			if((o.axis!=="y" && !d.overflowed[1]) || (o.axis==="x" && d.overflowed[1])){ /* reset x */
				var cx=dx=0;
				if(d.langDir==="rtl"){ /* adjust left position for rtl direction */
					cx=mCustomScrollBox.width()-mCSB_container.outerWidth(false);
					dx=Math.abs(cx/d.scrollRatio.x);
				}
				mCSB_container.css("left",cx);
				mCSB_dragger[1].css("left",dx);
				_scrollTo($this,"_resetX");
			}
		},
		/* -------------------- */
		
		
		/* binds scrollbar events */
		_bindEvents=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt;
			if(!d.bindEvents){ /* check if events are already bound */
				_draggable.call(this);
				if(o.contentTouchScroll){_contentDraggable.call(this);}
				_selectable.call(this);
				if(o.mouseWheel.enable){ /* bind mousewheel fn when plugin is available */
					function _mwt(){
						mousewheelTimeout=setTimeout(function(){
							if(!$.event.special.mousewheel){
								_mwt();
							}else{
								clearTimeout(mousewheelTimeout);
								_mousewheel.call($this[0]);
							}
						},100);
					}
					var mousewheelTimeout;
					_mwt();
				}
				_draggerRail.call(this);
				_wrapperScroll.call(this);
				if(o.advanced.autoScrollOnFocus){_focus.call(this);}
				if(o.scrollButtons.enable){_buttons.call(this);}
				if(o.keyboard.enable){_keyboard.call(this);}
				d.bindEvents=true;
			}
		},
		/* -------------------- */
		
		
		/* unbinds scrollbar events */
		_unbindEvents=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				namespace=pluginPfx+"_"+d.idx,
				sb=".mCSB_"+d.idx+"_scrollbar",
				sel=$("#mCSB_"+d.idx+",#mCSB_"+d.idx+"_container,#mCSB_"+d.idx+"_container_wrapper,"+sb+" ."+classes[12]+",#mCSB_"+d.idx+"_dragger_vertical,#mCSB_"+d.idx+"_dragger_horizontal,"+sb+">a"),
				mCSB_container=$("#mCSB_"+d.idx+"_container");
			if(o.advanced.releaseDraggableSelectors){sel.add($(o.advanced.releaseDraggableSelectors));}
			if(o.advanced.extraDraggableSelectors){sel.add($(o.advanced.extraDraggableSelectors));}
			if(d.bindEvents){ /* check if events are bound */
				/* unbind namespaced events from document/selectors */
				$(document).add($(!_canAccessIFrame() || top.document)).unbind("."+namespace);
				sel.each(function(){
					$(this).unbind("."+namespace);
				});
				/* clear and delete timeouts/objects */
				clearTimeout($this[0]._focusTimeout); _delete($this[0],"_focusTimeout");
				clearTimeout(d.sequential.step); _delete(d.sequential,"step");
				clearTimeout(mCSB_container[0].onCompleteTimeout); _delete(mCSB_container[0],"onCompleteTimeout");
				d.bindEvents=false;
			}
		},
		/* -------------------- */
		
		
		/* toggles scrollbar visibility */
		_scrollbarVisibility=function(disabled){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				contentWrapper=$("#mCSB_"+d.idx+"_container_wrapper"),
				content=contentWrapper.length ? contentWrapper : $("#mCSB_"+d.idx+"_container"),
				scrollbar=[$("#mCSB_"+d.idx+"_scrollbar_vertical"),$("#mCSB_"+d.idx+"_scrollbar_horizontal")],
				mCSB_dragger=[scrollbar[0].find(".mCSB_dragger"),scrollbar[1].find(".mCSB_dragger")];
			if(o.axis!=="x"){
				if(d.overflowed[0] && !disabled){
					scrollbar[0].add(mCSB_dragger[0]).add(scrollbar[0].children("a")).css("display","block");
					content.removeClass(classes[8]+" "+classes[10]);
				}else{
					if(o.alwaysShowScrollbar){
						if(o.alwaysShowScrollbar!==2){mCSB_dragger[0].css("display","none");}
						content.removeClass(classes[10]);
					}else{
						scrollbar[0].css("display","none");
						content.addClass(classes[10]);
					}
					content.addClass(classes[8]);
				}
			}
			if(o.axis!=="y"){
				if(d.overflowed[1] && !disabled){
					scrollbar[1].add(mCSB_dragger[1]).add(scrollbar[1].children("a")).css("display","block");
					content.removeClass(classes[9]+" "+classes[11]);
				}else{
					if(o.alwaysShowScrollbar){
						if(o.alwaysShowScrollbar!==2){mCSB_dragger[1].css("display","none");}
						content.removeClass(classes[11]);
					}else{
						scrollbar[1].css("display","none");
						content.addClass(classes[11]);
					}
					content.addClass(classes[9]);
				}
			}
			if(!d.overflowed[0] && !d.overflowed[1]){
				$this.addClass(classes[5]);
			}else{
				$this.removeClass(classes[5]);
			}
		},
		/* -------------------- */
		
		
		/* returns input coordinates of pointer, touch and mouse events (relative to document) */
		_coordinates=function(e){
			var t=e.type,o=e.target.ownerDocument!==document && frameElement!==null ? [$(frameElement).offset().top,$(frameElement).offset().left] : null,
				io=_canAccessIFrame() && e.target.ownerDocument!==top.document && frameElement!==null ? [$(e.view.frameElement).offset().top,$(e.view.frameElement).offset().left] : [0,0];
			switch(t){
				case "pointerdown": case "MSPointerDown": case "pointermove": case "MSPointerMove": case "pointerup": case "MSPointerUp":
					return o ? [e.originalEvent.pageY-o[0]+io[0],e.originalEvent.pageX-o[1]+io[1],false] : [e.originalEvent.pageY,e.originalEvent.pageX,false];
					break;
				case "touchstart": case "touchmove": case "touchend":
					var touch=e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
						touches=e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
					return e.target.ownerDocument!==document ? [touch.screenY,touch.screenX,touches>1] : [touch.pageY,touch.pageX,touches>1];
					break;
				default:
					return o ? [e.pageY-o[0]+io[0],e.pageX-o[1]+io[1],false] : [e.pageY,e.pageX,false];
			}
		},
		/* -------------------- */
		
		
		/* 
		SCROLLBAR DRAG EVENTS
		scrolls content via scrollbar dragging 
		*/
		_draggable=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				namespace=pluginPfx+"_"+d.idx,
				draggerId=["mCSB_"+d.idx+"_dragger_vertical","mCSB_"+d.idx+"_dragger_horizontal"],
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				mCSB_dragger=$("#"+draggerId[0]+",#"+draggerId[1]),
				draggable,dragY,dragX,
				rds=o.advanced.releaseDraggableSelectors ? mCSB_dragger.add($(o.advanced.releaseDraggableSelectors)) : mCSB_dragger,
				eds=o.advanced.extraDraggableSelectors ? $(!_canAccessIFrame() || top.document).add($(o.advanced.extraDraggableSelectors)) : $(!_canAccessIFrame() || top.document);
			mCSB_dragger.bind("contextmenu."+namespace,function(e){
				e.preventDefault(); //prevent right click
			}).bind("mousedown."+namespace+" touchstart."+namespace+" pointerdown."+namespace+" MSPointerDown."+namespace,function(e){
				e.stopImmediatePropagation();
				e.preventDefault();
				if(!_mouseBtnLeft(e)){return;} /* left mouse button only */
				touchActive=true;
				if(oldIE){document.onselectstart=function(){return false;}} /* disable text selection for IE < 9 */
				_iframe.call(mCSB_container,false); /* enable scrollbar dragging over iframes by disabling their events */
				_stop($this);
				draggable=$(this);
				var offset=draggable.offset(),y=_coordinates(e)[0]-offset.top,x=_coordinates(e)[1]-offset.left,
					h=draggable.height()+offset.top,w=draggable.width()+offset.left;
				if(y<h && y>0 && x<w && x>0){
					dragY=y; 
					dragX=x;
				}
				_onDragClasses(draggable,"active",o.autoExpandScrollbar); 
			}).bind("touchmove."+namespace,function(e){
				e.stopImmediatePropagation();
				e.preventDefault();
				var offset=draggable.offset(),y=_coordinates(e)[0]-offset.top,x=_coordinates(e)[1]-offset.left;
				_drag(dragY,dragX,y,x);
			});
			$(document).add(eds).bind("mousemove."+namespace+" pointermove."+namespace+" MSPointerMove."+namespace,function(e){
				if(draggable){
					var offset=draggable.offset(),y=_coordinates(e)[0]-offset.top,x=_coordinates(e)[1]-offset.left;
					if(dragY===y && dragX===x){return;} /* has it really moved? */
					_drag(dragY,dragX,y,x);
				}
			}).add(rds).bind("mouseup."+namespace+" touchend."+namespace+" pointerup."+namespace+" MSPointerUp."+namespace,function(e){
				if(draggable){
					_onDragClasses(draggable,"active",o.autoExpandScrollbar); 
					draggable=null;
				}
				touchActive=false;
				if(oldIE){document.onselectstart=null;} /* enable text selection for IE < 9 */
				_iframe.call(mCSB_container,true); /* enable iframes events */
			});
			function _drag(dragY,dragX,y,x){
				mCSB_container[0].idleTimer=o.scrollInertia<233 ? 250 : 0;
				if(draggable.attr("id")===draggerId[1]){
					var dir="x",to=((draggable[0].offsetLeft-dragX)+x)*d.scrollRatio.x;
				}else{
					var dir="y",to=((draggable[0].offsetTop-dragY)+y)*d.scrollRatio.y;
				}
				_scrollTo($this,to.toString(),{dir:dir,drag:true});
			}
		},
		/* -------------------- */
		
		
		/* 
		TOUCH SWIPE EVENTS
		scrolls content via touch swipe 
		Emulates the native touch-swipe scrolling with momentum found in iOS, Android and WP devices 
		*/
		_contentDraggable=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				namespace=pluginPfx+"_"+d.idx,
				mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")],
				draggable,dragY,dragX,touchStartY,touchStartX,touchMoveY=[],touchMoveX=[],startTime,runningTime,endTime,distance,speed,amount,
				durA=0,durB,overwrite=o.axis==="yx" ? "none" : "all",touchIntent=[],touchDrag,docDrag,
				iframe=mCSB_container.find("iframe"),
				events=[
					"touchstart."+namespace+" pointerdown."+namespace+" MSPointerDown."+namespace, //start
					"touchmove."+namespace+" pointermove."+namespace+" MSPointerMove."+namespace, //move
					"touchend."+namespace+" pointerup."+namespace+" MSPointerUp."+namespace //end
				],
				touchAction=document.body.style.touchAction!==undefined && document.body.style.touchAction!=="";
			mCSB_container.bind(events[0],function(e){
				_onTouchstart(e);
			}).bind(events[1],function(e){
				_onTouchmove(e);
			});
			mCustomScrollBox.bind(events[0],function(e){
				_onTouchstart2(e);
			}).bind(events[2],function(e){
				_onTouchend(e);
			});
			if(iframe.length){
				iframe.each(function(){
					$(this).bind("load",function(){
						/* bind events on accessible iframes */
						if(_canAccessIFrame(this)){
							$(this.contentDocument || this.contentWindow.document).bind(events[0],function(e){
								_onTouchstart(e);
								_onTouchstart2(e);
							}).bind(events[1],function(e){
								_onTouchmove(e);
							}).bind(events[2],function(e){
								_onTouchend(e);
							});
						}
					});
				});
			}
			function _onTouchstart(e){
				if(!_pointerTouch(e) || touchActive || _coordinates(e)[2]){touchable=0; return;}
				touchable=1; touchDrag=0; docDrag=0; draggable=1;
				$this.removeClass("mCS_touch_action");
				var offset=mCSB_container.offset();
				dragY=_coordinates(e)[0]-offset.top;
				dragX=_coordinates(e)[1]-offset.left;
				touchIntent=[_coordinates(e)[0],_coordinates(e)[1]];
			}
			function _onTouchmove(e){
				if(!_pointerTouch(e) || touchActive || _coordinates(e)[2]){return;}
				if(!o.documentTouchScroll){e.preventDefault();} 
				e.stopImmediatePropagation();
				if(docDrag && !touchDrag){return;}
				if(draggable){
					runningTime=_getTime();
					var offset=mCustomScrollBox.offset(),y=_coordinates(e)[0]-offset.top,x=_coordinates(e)[1]-offset.left,
						easing="mcsLinearOut";
					touchMoveY.push(y);
					touchMoveX.push(x);
					touchIntent[2]=Math.abs(_coordinates(e)[0]-touchIntent[0]); touchIntent[3]=Math.abs(_coordinates(e)[1]-touchIntent[1]);
					if(d.overflowed[0]){
						var limit=mCSB_dragger[0].parent().height()-mCSB_dragger[0].height(),
							prevent=((dragY-y)>0 && (y-dragY)>-(limit*d.scrollRatio.y) && (touchIntent[3]*2<touchIntent[2] || o.axis==="yx"));
					}
					if(d.overflowed[1]){
						var limitX=mCSB_dragger[1].parent().width()-mCSB_dragger[1].width(),
							preventX=((dragX-x)>0 && (x-dragX)>-(limitX*d.scrollRatio.x) && (touchIntent[2]*2<touchIntent[3] || o.axis==="yx"));
					}
					if(prevent || preventX){ /* prevent native document scrolling */
						if(!touchAction){e.preventDefault();} 
						touchDrag=1;
					}else{
						docDrag=1;
						$this.addClass("mCS_touch_action");
					}
					if(touchAction){e.preventDefault();} 
					amount=o.axis==="yx" ? [(dragY-y),(dragX-x)] : o.axis==="x" ? [null,(dragX-x)] : [(dragY-y),null];
					mCSB_container[0].idleTimer=250;
					if(d.overflowed[0]){_drag(amount[0],durA,easing,"y","all",true);}
					if(d.overflowed[1]){_drag(amount[1],durA,easing,"x",overwrite,true);}
				}
			}
			function _onTouchstart2(e){
				if(!_pointerTouch(e) || touchActive || _coordinates(e)[2]){touchable=0; return;}
				touchable=1;
				e.stopImmediatePropagation();
				_stop($this);
				startTime=_getTime();
				var offset=mCustomScrollBox.offset();
				touchStartY=_coordinates(e)[0]-offset.top;
				touchStartX=_coordinates(e)[1]-offset.left;
				touchMoveY=[]; touchMoveX=[];
			}
			function _onTouchend(e){
				if(!_pointerTouch(e) || touchActive || _coordinates(e)[2]){return;}
				draggable=0;
				e.stopImmediatePropagation();
				touchDrag=0; docDrag=0;
				endTime=_getTime();
				var offset=mCustomScrollBox.offset(),y=_coordinates(e)[0]-offset.top,x=_coordinates(e)[1]-offset.left;
				if((endTime-runningTime)>30){return;}
				speed=1000/(endTime-startTime);
				var easing="mcsEaseOut",slow=speed<2.5,
					diff=slow ? [touchMoveY[touchMoveY.length-2],touchMoveX[touchMoveX.length-2]] : [0,0];
				distance=slow ? [(y-diff[0]),(x-diff[1])] : [y-touchStartY,x-touchStartX];
				var absDistance=[Math.abs(distance[0]),Math.abs(distance[1])];
				speed=slow ? [Math.abs(distance[0]/4),Math.abs(distance[1]/4)] : [speed,speed];
				var a=[
					Math.abs(mCSB_container[0].offsetTop)-(distance[0]*_m((absDistance[0]/speed[0]),speed[0])),
					Math.abs(mCSB_container[0].offsetLeft)-(distance[1]*_m((absDistance[1]/speed[1]),speed[1]))
				];
				amount=o.axis==="yx" ? [a[0],a[1]] : o.axis==="x" ? [null,a[1]] : [a[0],null];
				durB=[(absDistance[0]*4)+o.scrollInertia,(absDistance[1]*4)+o.scrollInertia];
				var md=parseInt(o.contentTouchScroll) || 0; /* absolute minimum distance required */
				amount[0]=absDistance[0]>md ? amount[0] : 0;
				amount[1]=absDistance[1]>md ? amount[1] : 0;
				if(d.overflowed[0]){_drag(amount[0],durB[0],easing,"y",overwrite,false);}
				if(d.overflowed[1]){_drag(amount[1],durB[1],easing,"x",overwrite,false);}
			}
			function _m(ds,s){
				var r=[s*1.5,s*2,s/1.5,s/2];
				if(ds>90){
					return s>4 ? r[0] : r[3];
				}else if(ds>60){
					return s>3 ? r[3] : r[2];
				}else if(ds>30){
					return s>8 ? r[1] : s>6 ? r[0] : s>4 ? s : r[2];
				}else{
					return s>8 ? s : r[3];
				}
			}
			function _drag(amount,dur,easing,dir,overwrite,drag){
				if(!amount){return;}
				_scrollTo($this,amount.toString(),{dur:dur,scrollEasing:easing,dir:dir,overwrite:overwrite,drag:drag});
			}
		},
		/* -------------------- */
		
		
		/* 
		SELECT TEXT EVENTS 
		scrolls content when text is selected 
		*/
		_selectable=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,seq=d.sequential,
				namespace=pluginPfx+"_"+d.idx,
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				wrapper=mCSB_container.parent(),
				action;
			mCSB_container.bind("mousedown."+namespace,function(e){
				if(touchable){return;}
				if(!action){action=1; touchActive=true;}
			}).add(document).bind("mousemove."+namespace,function(e){
				if(!touchable && action && _sel()){
					var offset=mCSB_container.offset(),
						y=_coordinates(e)[0]-offset.top+mCSB_container[0].offsetTop,x=_coordinates(e)[1]-offset.left+mCSB_container[0].offsetLeft;
					if(y>0 && y<wrapper.height() && x>0 && x<wrapper.width()){
						if(seq.step){_seq("off",null,"stepped");}
					}else{
						if(o.axis!=="x" && d.overflowed[0]){
							if(y<0){
								_seq("on",38);
							}else if(y>wrapper.height()){
								_seq("on",40);
							}
						}
						if(o.axis!=="y" && d.overflowed[1]){
							if(x<0){
								_seq("on",37);
							}else if(x>wrapper.width()){
								_seq("on",39);
							}
						}
					}
				}
			}).bind("mouseup."+namespace+" dragend."+namespace,function(e){
				if(touchable){return;}
				if(action){action=0; _seq("off",null);}
				touchActive=false;
			});
			function _sel(){
				return 	window.getSelection ? window.getSelection().toString() : 
						document.selection && document.selection.type!="Control" ? document.selection.createRange().text : 0;
			}
			function _seq(a,c,s){
				seq.type=s && action ? "stepped" : "stepless";
				seq.scrollAmount=10;
				_sequentialScroll($this,a,c,"mcsLinearOut",s ? 60 : null);
			}
		},
		/* -------------------- */
		
		
		/* 
		MOUSE WHEEL EVENT
		scrolls content via mouse-wheel 
		via mouse-wheel plugin (https://github.com/brandonaaron/jquery-mousewheel)
		*/
		_mousewheel=function(){
			if(!$(this).data(pluginPfx)){return;} /* Check if the scrollbar is ready to use mousewheel events (issue: #185) */
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				namespace=pluginPfx+"_"+d.idx,
				mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")],
				iframe=$("#mCSB_"+d.idx+"_container").find("iframe");
			if(iframe.length){
				iframe.each(function(){
					$(this).bind("load",function(){
						/* bind events on accessible iframes */
						if(_canAccessIFrame(this)){
							$(this.contentDocument || this.contentWindow.document).bind("mousewheel."+namespace,function(e,delta){
								_onMousewheel(e,delta);
							});
						}
					});
				});
			}
			mCustomScrollBox.bind("mousewheel."+namespace,function(e,delta){
				_onMousewheel(e,delta);
			});
			function _onMousewheel(e,delta){
				_stop($this);
				if(_disableMousewheel($this,e.target)){return;} /* disables mouse-wheel when hovering specific elements */
				var deltaFactor=o.mouseWheel.deltaFactor!=="auto" ? parseInt(o.mouseWheel.deltaFactor) : (oldIE && e.deltaFactor<100) ? 100 : e.deltaFactor || 100,
					dur=o.scrollInertia;
				if(o.axis==="x" || o.mouseWheel.axis==="x"){
					var dir="x",
						px=[Math.round(deltaFactor*d.scrollRatio.x),parseInt(o.mouseWheel.scrollAmount)],
						amount=o.mouseWheel.scrollAmount!=="auto" ? px[1] : px[0]>=mCustomScrollBox.width() ? mCustomScrollBox.width()*0.9 : px[0],
						contentPos=Math.abs($("#mCSB_"+d.idx+"_container")[0].offsetLeft),
						draggerPos=mCSB_dragger[1][0].offsetLeft,
						limit=mCSB_dragger[1].parent().width()-mCSB_dragger[1].width(),
						dlt=o.mouseWheel.axis==="y" ? (e.deltaY || delta) : e.deltaX;
				}else{
					var dir="y",
						px=[Math.round(deltaFactor*d.scrollRatio.y),parseInt(o.mouseWheel.scrollAmount)],
						amount=o.mouseWheel.scrollAmount!=="auto" ? px[1] : px[0]>=mCustomScrollBox.height() ? mCustomScrollBox.height()*0.9 : px[0],
						contentPos=Math.abs($("#mCSB_"+d.idx+"_container")[0].offsetTop),
						draggerPos=mCSB_dragger[0][0].offsetTop,
						limit=mCSB_dragger[0].parent().height()-mCSB_dragger[0].height(),
						dlt=e.deltaY || delta;
				}
				if((dir==="y" && !d.overflowed[0]) || (dir==="x" && !d.overflowed[1])){return;}
				if(o.mouseWheel.invert || e.webkitDirectionInvertedFromDevice){dlt=-dlt;}
				if(o.mouseWheel.normalizeDelta){dlt=dlt<0 ? -1 : 1;}
				if((dlt>0 && draggerPos!==0) || (dlt<0 && draggerPos!==limit) || o.mouseWheel.preventDefault){
					e.stopImmediatePropagation();
					e.preventDefault();
				}
				if(e.deltaFactor<5 && !o.mouseWheel.normalizeDelta){
					//very low deltaFactor values mean some kind of delta acceleration (e.g. osx trackpad), so adjusting scrolling accordingly
					amount=e.deltaFactor; dur=17;
				}
				_scrollTo($this,(contentPos-(dlt*amount)).toString(),{dir:dir,dur:dur});
			}
		},
		/* -------------------- */
		
		
		/* checks if iframe can be accessed */
		_canAccessIFrameCache=new Object(),
		_canAccessIFrame=function(iframe){
		    var result=false,cacheKey=false,html=null;
		    if(iframe===undefined){
				cacheKey="#empty";
		    }else if($(iframe).attr("id")!==undefined){
				cacheKey=$(iframe).attr("id");
		    }
			if(cacheKey!==false && _canAccessIFrameCache[cacheKey]!==undefined){
				return _canAccessIFrameCache[cacheKey];
			}
			if(!iframe){
				try{
					var doc=top.document;
					html=doc.body.innerHTML;
				}catch(err){/* do nothing */}
				result=(html!==null);
			}else{
				try{
					var doc=iframe.contentDocument || iframe.contentWindow.document;
					html=doc.body.innerHTML;
				}catch(err){/* do nothing */}
				result=(html!==null);
			}
			if(cacheKey!==false){_canAccessIFrameCache[cacheKey]=result;}
			return result;
		},
		/* -------------------- */
		
		
		/* switches iframe's pointer-events property (drag, mousewheel etc. over cross-domain iframes) */
		_iframe=function(evt){
			var el=this.find("iframe");
			if(!el.length){return;} /* check if content contains iframes */
			var val=!evt ? "none" : "auto";
			el.css("pointer-events",val); /* for IE11, iframe's display property should not be "block" */
		},
		/* -------------------- */
		
		
		/* disables mouse-wheel when hovering specific elements like select, datalist etc. */
		_disableMousewheel=function(el,target){
			var tag=target.nodeName.toLowerCase(),
				tags=el.data(pluginPfx).opt.mouseWheel.disableOver,
				/* elements that require focus */
				focusTags=["select","textarea"];
			return $.inArray(tag,tags) > -1 && !($.inArray(tag,focusTags) > -1 && !$(target).is(":focus"));
		},
		/* -------------------- */
		
		
		/* 
		DRAGGER RAIL CLICK EVENT
		scrolls content via dragger rail 
		*/
		_draggerRail=function(){
			var $this=$(this),d=$this.data(pluginPfx),
				namespace=pluginPfx+"_"+d.idx,
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				wrapper=mCSB_container.parent(),
				mCSB_draggerContainer=$(".mCSB_"+d.idx+"_scrollbar ."+classes[12]),
				clickable;
			mCSB_draggerContainer.bind("mousedown."+namespace+" touchstart."+namespace+" pointerdown."+namespace+" MSPointerDown."+namespace,function(e){
				touchActive=true;
				if(!$(e.target).hasClass("mCSB_dragger")){clickable=1;}
			}).bind("touchend."+namespace+" pointerup."+namespace+" MSPointerUp."+namespace,function(e){
				touchActive=false;
			}).bind("click."+namespace,function(e){
				if(!clickable){return;}
				clickable=0;
				if($(e.target).hasClass(classes[12]) || $(e.target).hasClass("mCSB_draggerRail")){
					_stop($this);
					var el=$(this),mCSB_dragger=el.find(".mCSB_dragger");
					if(el.parent(".mCSB_scrollTools_horizontal").length>0){
						if(!d.overflowed[1]){return;}
						var dir="x",
							clickDir=e.pageX>mCSB_dragger.offset().left ? -1 : 1,
							to=Math.abs(mCSB_container[0].offsetLeft)-(clickDir*(wrapper.width()*0.9));
					}else{
						if(!d.overflowed[0]){return;}
						var dir="y",
							clickDir=e.pageY>mCSB_dragger.offset().top ? -1 : 1,
							to=Math.abs(mCSB_container[0].offsetTop)-(clickDir*(wrapper.height()*0.9));
					}
					_scrollTo($this,to.toString(),{dir:dir,scrollEasing:"mcsEaseInOut"});
				}
			});
		},
		/* -------------------- */
		
		
		/* 
		FOCUS EVENT
		scrolls content via element focus (e.g. clicking an input, pressing TAB key etc.)
		*/
		_focus=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				namespace=pluginPfx+"_"+d.idx,
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				wrapper=mCSB_container.parent();
			mCSB_container.bind("focusin."+namespace,function(e){
				var el=$(document.activeElement),
					nested=mCSB_container.find(".mCustomScrollBox").length,
					dur=0;
				if(!el.is(o.advanced.autoScrollOnFocus)){return;}
				_stop($this);
				clearTimeout($this[0]._focusTimeout);
				$this[0]._focusTimer=nested ? (dur+17)*nested : 0;
				$this[0]._focusTimeout=setTimeout(function(){
					var	to=[_childPos(el)[0],_childPos(el)[1]],
						contentPos=[mCSB_container[0].offsetTop,mCSB_container[0].offsetLeft],
						isVisible=[
							(contentPos[0]+to[0]>=0 && contentPos[0]+to[0]<wrapper.height()-el.outerHeight(false)),
							(contentPos[1]+to[1]>=0 && contentPos[0]+to[1]<wrapper.width()-el.outerWidth(false))
						],
						overwrite=(o.axis==="yx" && !isVisible[0] && !isVisible[1]) ? "none" : "all";
					if(o.axis!=="x" && !isVisible[0]){
						_scrollTo($this,to[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:overwrite,dur:dur});
					}
					if(o.axis!=="y" && !isVisible[1]){
						_scrollTo($this,to[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:overwrite,dur:dur});
					}
				},$this[0]._focusTimer);
			});
		},
		/* -------------------- */
		
		
		/* sets content wrapper scrollTop/scrollLeft always to 0 */
		_wrapperScroll=function(){
			var $this=$(this),d=$this.data(pluginPfx),
				namespace=pluginPfx+"_"+d.idx,
				wrapper=$("#mCSB_"+d.idx+"_container").parent();
			wrapper.bind("scroll."+namespace,function(e){
				if(wrapper.scrollTop()!==0 || wrapper.scrollLeft()!==0){
					$(".mCSB_"+d.idx+"_scrollbar").css("visibility","hidden"); /* hide scrollbar(s) */
				}
			});
		},
		/* -------------------- */
		
		
		/* 
		BUTTONS EVENTS
		scrolls content via up, down, left and right buttons 
		*/
		_buttons=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,seq=d.sequential,
				namespace=pluginPfx+"_"+d.idx,
				sel=".mCSB_"+d.idx+"_scrollbar",
				btn=$(sel+">a");
			btn.bind("contextmenu."+namespace,function(e){
				e.preventDefault(); //prevent right click
			}).bind("mousedown."+namespace+" touchstart."+namespace+" pointerdown."+namespace+" MSPointerDown."+namespace+" mouseup."+namespace+" touchend."+namespace+" pointerup."+namespace+" MSPointerUp."+namespace+" mouseout."+namespace+" pointerout."+namespace+" MSPointerOut."+namespace+" click."+namespace,function(e){
				e.preventDefault();
				if(!_mouseBtnLeft(e)){return;} /* left mouse button only */
				var btnClass=$(this).attr("class");
				seq.type=o.scrollButtons.scrollType;
				switch(e.type){
					case "mousedown": case "touchstart": case "pointerdown": case "MSPointerDown":
						if(seq.type==="stepped"){return;}
						touchActive=true;
						d.tweenRunning=false;
						_seq("on",btnClass);
						break;
					case "mouseup": case "touchend": case "pointerup": case "MSPointerUp":
					case "mouseout": case "pointerout": case "MSPointerOut":
						if(seq.type==="stepped"){return;}
						touchActive=false;
						if(seq.dir){_seq("off",btnClass);}
						break;
					case "click":
						if(seq.type!=="stepped" || d.tweenRunning){return;}
						_seq("on",btnClass);
						break;
				}
				function _seq(a,c){
					seq.scrollAmount=o.scrollButtons.scrollAmount;
					_sequentialScroll($this,a,c);
				}
			});
		},
		/* -------------------- */
		
		
		/* 
		KEYBOARD EVENTS
		scrolls content via keyboard 
		Keys: up arrow, down arrow, left arrow, right arrow, PgUp, PgDn, Home, End
		*/
		_keyboard=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,seq=d.sequential,
				namespace=pluginPfx+"_"+d.idx,
				mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				wrapper=mCSB_container.parent(),
				editables="input,textarea,select,datalist,keygen,[contenteditable='true']",
				iframe=mCSB_container.find("iframe"),
				events=["blur."+namespace+" keydown."+namespace+" keyup."+namespace];
			if(iframe.length){
				iframe.each(function(){
					$(this).bind("load",function(){
						/* bind events on accessible iframes */
						if(_canAccessIFrame(this)){
							$(this.contentDocument || this.contentWindow.document).bind(events[0],function(e){
								_onKeyboard(e);
							});
						}
					});
				});
			}
			mCustomScrollBox.attr("tabindex","0").bind(events[0],function(e){
				_onKeyboard(e);
			});
			function _onKeyboard(e){
				switch(e.type){
					case "blur":
						if(d.tweenRunning && seq.dir){_seq("off",null);}
						break;
					case "keydown": case "keyup":
						var code=e.keyCode ? e.keyCode : e.which,action="on";
						if((o.axis!=="x" && (code===38 || code===40)) || (o.axis!=="y" && (code===37 || code===39))){
							/* up (38), down (40), left (37), right (39) arrows */
							if(((code===38 || code===40) && !d.overflowed[0]) || ((code===37 || code===39) && !d.overflowed[1])){return;}
							if(e.type==="keyup"){action="off";}
							if(!$(document.activeElement).is(editables)){
								e.preventDefault();
								e.stopImmediatePropagation();
								_seq(action,code);
							}
						}else if(code===33 || code===34){
							/* PgUp (33), PgDn (34) */
							if(d.overflowed[0] || d.overflowed[1]){
								e.preventDefault();
								e.stopImmediatePropagation();
							}
							if(e.type==="keyup"){
								_stop($this);
								var keyboardDir=code===34 ? -1 : 1;
								if(o.axis==="x" || (o.axis==="yx" && d.overflowed[1] && !d.overflowed[0])){
									var dir="x",to=Math.abs(mCSB_container[0].offsetLeft)-(keyboardDir*(wrapper.width()*0.9));
								}else{
									var dir="y",to=Math.abs(mCSB_container[0].offsetTop)-(keyboardDir*(wrapper.height()*0.9));
								}
								_scrollTo($this,to.toString(),{dir:dir,scrollEasing:"mcsEaseInOut"});
							}
						}else if(code===35 || code===36){
							/* End (35), Home (36) */
							if(!$(document.activeElement).is(editables)){
								if(d.overflowed[0] || d.overflowed[1]){
									e.preventDefault();
									e.stopImmediatePropagation();
								}
								if(e.type==="keyup"){
									if(o.axis==="x" || (o.axis==="yx" && d.overflowed[1] && !d.overflowed[0])){
										var dir="x",to=code===35 ? Math.abs(wrapper.width()-mCSB_container.outerWidth(false)) : 0;
									}else{
										var dir="y",to=code===35 ? Math.abs(wrapper.height()-mCSB_container.outerHeight(false)) : 0;
									}
									_scrollTo($this,to.toString(),{dir:dir,scrollEasing:"mcsEaseInOut"});
								}
							}
						}
						break;
				}
				function _seq(a,c){
					seq.type=o.keyboard.scrollType;
					seq.scrollAmount=o.keyboard.scrollAmount;
					if(seq.type==="stepped" && d.tweenRunning){return;}
					_sequentialScroll($this,a,c);
				}
			}
		},
		/* -------------------- */
		
		
		/* scrolls content sequentially (used when scrolling via buttons, keyboard arrows etc.) */
		_sequentialScroll=function(el,action,trigger,e,s){
			var d=el.data(pluginPfx),o=d.opt,seq=d.sequential,
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				once=seq.type==="stepped" ? true : false,
				steplessSpeed=o.scrollInertia < 26 ? 26 : o.scrollInertia, /* 26/1.5=17 */
				steppedSpeed=o.scrollInertia < 1 ? 17 : o.scrollInertia;
			switch(action){
				case "on":
					seq.dir=[
						(trigger===classes[16] || trigger===classes[15] || trigger===39 || trigger===37 ? "x" : "y"),
						(trigger===classes[13] || trigger===classes[15] || trigger===38 || trigger===37 ? -1 : 1)
					];
					_stop(el);
					if(_isNumeric(trigger) && seq.type==="stepped"){return;}
					_on(once);
					break;
				case "off":
					_off();
					if(once || (d.tweenRunning && seq.dir)){
						_on(true);
					}
					break;
			}
			
			/* starts sequence */
			function _on(once){
				if(o.snapAmount){seq.scrollAmount=!(o.snapAmount instanceof Array) ? o.snapAmount : seq.dir[0]==="x" ? o.snapAmount[1] : o.snapAmount[0];} /* scrolling snapping */
				var c=seq.type!=="stepped", /* continuous scrolling */
					t=s ? s : !once ? 1000/60 : c ? steplessSpeed/1.5 : steppedSpeed, /* timer */
					m=!once ? 2.5 : c ? 7.5 : 40, /* multiplier */
					contentPos=[Math.abs(mCSB_container[0].offsetTop),Math.abs(mCSB_container[0].offsetLeft)],
					ratio=[d.scrollRatio.y>10 ? 10 : d.scrollRatio.y,d.scrollRatio.x>10 ? 10 : d.scrollRatio.x],
					amount=seq.dir[0]==="x" ? contentPos[1]+(seq.dir[1]*(ratio[1]*m)) : contentPos[0]+(seq.dir[1]*(ratio[0]*m)),
					px=seq.dir[0]==="x" ? contentPos[1]+(seq.dir[1]*parseInt(seq.scrollAmount)) : contentPos[0]+(seq.dir[1]*parseInt(seq.scrollAmount)),
					to=seq.scrollAmount!=="auto" ? px : amount,
					easing=e ? e : !once ? "mcsLinear" : c ? "mcsLinearOut" : "mcsEaseInOut",
					onComplete=!once ? false : true;
				if(once && t<17){
					to=seq.dir[0]==="x" ? contentPos[1] : contentPos[0];
				}
				_scrollTo(el,to.toString(),{dir:seq.dir[0],scrollEasing:easing,dur:t,onComplete:onComplete});
				if(once){
					seq.dir=false;
					return;
				}
				clearTimeout(seq.step);
				seq.step=setTimeout(function(){
					_on();
				},t);
			}
			/* stops sequence */
			function _off(){
				clearTimeout(seq.step);
				_delete(seq,"step");
				_stop(el);
			}
		},
		/* -------------------- */
		
		
		/* returns a yx array from value */
		_arr=function(val){
			var o=$(this).data(pluginPfx).opt,vals=[];
			if(typeof val==="function"){val=val();} /* check if the value is a single anonymous function */
			/* check if value is object or array, its length and create an array with yx values */
			if(!(val instanceof Array)){ /* object value (e.g. {y:"100",x:"100"}, 100 etc.) */
				vals[0]=val.y ? val.y : val.x || o.axis==="x" ? null : val;
				vals[1]=val.x ? val.x : val.y || o.axis==="y" ? null : val;
			}else{ /* array value (e.g. [100,100]) */
				vals=val.length>1 ? [val[0],val[1]] : o.axis==="x" ? [null,val[0]] : [val[0],null];
			}
			/* check if array values are anonymous functions */
			if(typeof vals[0]==="function"){vals[0]=vals[0]();}
			if(typeof vals[1]==="function"){vals[1]=vals[1]();}
			return vals;
		},
		/* -------------------- */
		
		
		/* translates values (e.g. "top", 100, "100px", "#id") to actual scroll-to positions */
		_to=function(val,dir){
			if(val==null || typeof val=="undefined"){return;}
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				wrapper=mCSB_container.parent(),
				t=typeof val;
			if(!dir){dir=o.axis==="x" ? "x" : "y";}
			var contentLength=dir==="x" ? mCSB_container.outerWidth(false)-wrapper.width() : mCSB_container.outerHeight(false)-wrapper.height(),
				contentPos=dir==="x" ? mCSB_container[0].offsetLeft : mCSB_container[0].offsetTop,
				cssProp=dir==="x" ? "left" : "top";
			switch(t){
				case "function": /* this currently is not used. Consider removing it */
					return val();
					break;
				case "object": /* js/jquery object */
					var obj=val.jquery ? val : $(val);
					if(!obj.length){return;}
					return dir==="x" ? _childPos(obj)[1] : _childPos(obj)[0];
					break;
				case "string": case "number":
					if(_isNumeric(val)){ /* numeric value */
						return Math.abs(val);
					}else if(val.indexOf("%")!==-1){ /* percentage value */
						return Math.abs(contentLength*parseInt(val)/100);
					}else if(val.indexOf("-=")!==-1){ /* decrease value */
						return Math.abs(contentPos-parseInt(val.split("-=")[1]));
					}else if(val.indexOf("+=")!==-1){ /* inrease value */
						var p=(contentPos+parseInt(val.split("+=")[1]));
						return p>=0 ? 0 : Math.abs(p);
					}else if(val.indexOf("px")!==-1 && _isNumeric(val.split("px")[0])){ /* pixels string value (e.g. "100px") */
						return Math.abs(val.split("px")[0]);
					}else{
						if(val==="top" || val==="left"){ /* special strings */
							return 0;
						}else if(val==="bottom"){
							return Math.abs(wrapper.height()-mCSB_container.outerHeight(false));
						}else if(val==="right"){
							return Math.abs(wrapper.width()-mCSB_container.outerWidth(false));
						}else if(val==="first" || val==="last"){
							var obj=mCSB_container.find(":"+val);
							return dir==="x" ? _childPos(obj)[1] : _childPos(obj)[0];
						}else{
							if($(val).length){ /* jquery selector */
								return dir==="x" ? _childPos($(val))[1] : _childPos($(val))[0];
							}else{ /* other values (e.g. "100em") */
								mCSB_container.css(cssProp,val);
								methods.update.call(null,$this[0]);
								return;
							}
						}
					}
					break;
			}
		},
		/* -------------------- */
		
		
		/* calls the update method automatically */
		_autoUpdate=function(rem){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				mCSB_container=$("#mCSB_"+d.idx+"_container");
			if(rem){
				/* 
				removes autoUpdate timer 
				usage: _autoUpdate.call(this,"remove");
				*/
				clearTimeout(mCSB_container[0].autoUpdate);
				_delete(mCSB_container[0],"autoUpdate");
				return;
			}
			upd();
			function upd(){
				clearTimeout(mCSB_container[0].autoUpdate);
				if($this.parents("html").length===0){
					/* check element in dom tree */
					$this=null;
					return;
				}
				mCSB_container[0].autoUpdate=setTimeout(function(){
					/* update on specific selector(s) length and size change */
					if(o.advanced.updateOnSelectorChange){
						d.poll.change.n=sizesSum();
						if(d.poll.change.n!==d.poll.change.o){
							d.poll.change.o=d.poll.change.n;
							doUpd(3);
							return;
						}
					}
					/* update on main element and scrollbar size changes */
					if(o.advanced.updateOnContentResize){
						d.poll.size.n=$this[0].scrollHeight+$this[0].scrollWidth+mCSB_container[0].offsetHeight+$this[0].offsetHeight+$this[0].offsetWidth;
						if(d.poll.size.n!==d.poll.size.o){
							d.poll.size.o=d.poll.size.n;
							doUpd(1);
							return;
						}
					}
					/* update on image load */
					if(o.advanced.updateOnImageLoad){
						if(!(o.advanced.updateOnImageLoad==="auto" && o.axis==="y")){ //by default, it doesn't run on vertical content
							d.poll.img.n=mCSB_container.find("img").length;
							if(d.poll.img.n!==d.poll.img.o){
								d.poll.img.o=d.poll.img.n;
								mCSB_container.find("img").each(function(){
									imgLoader(this);
								});
								return;
							}
						}
					}
					if(o.advanced.updateOnSelectorChange || o.advanced.updateOnContentResize || o.advanced.updateOnImageLoad){upd();}
				},o.advanced.autoUpdateTimeout);
			}
			/* a tiny image loader */
			function imgLoader(el){
				if($(el).hasClass(classes[2])){doUpd(); return;}
				var img=new Image();
				function createDelegate(contextObject,delegateMethod){
					return function(){return delegateMethod.apply(contextObject,arguments);}
				}
				function imgOnLoad(){
					this.onload=null;
					$(el).addClass(classes[2]);
					doUpd(2);
				}
				img.onload=createDelegate(img,imgOnLoad);
				img.src=el.src;
			}
			/* returns the total height and width sum of all elements matching the selector */
			function sizesSum(){
				if(o.advanced.updateOnSelectorChange===true){o.advanced.updateOnSelectorChange="*";}
				var total=0,sel=mCSB_container.find(o.advanced.updateOnSelectorChange);
				if(o.advanced.updateOnSelectorChange && sel.length>0){sel.each(function(){total+=this.offsetHeight+this.offsetWidth;});}
				return total;
			}
			/* calls the update method */
			function doUpd(cb){
				clearTimeout(mCSB_container[0].autoUpdate);
				methods.update.call(null,$this[0],cb);
			}
		},
		/* -------------------- */
		
		
		/* snaps scrolling to a multiple of a pixels number */
		_snapAmount=function(to,amount,offset){
			return (Math.round(to/amount)*amount-offset); 
		},
		/* -------------------- */
		
		
		/* stops content and scrollbar animations */
		_stop=function(el){
			var d=el.data(pluginPfx),
				sel=$("#mCSB_"+d.idx+"_container,#mCSB_"+d.idx+"_container_wrapper,#mCSB_"+d.idx+"_dragger_vertical,#mCSB_"+d.idx+"_dragger_horizontal");
			sel.each(function(){
				_stopTween.call(this);
			});
		},
		/* -------------------- */
		
		
		/* 
		ANIMATES CONTENT 
		This is where the actual scrolling happens
		*/
		_scrollTo=function(el,to,options){
			var d=el.data(pluginPfx),o=d.opt,
				defaults={
					trigger:"internal",
					dir:"y",
					scrollEasing:"mcsEaseOut",
					drag:false,
					dur:o.scrollInertia,
					overwrite:"all",
					callbacks:true,
					onStart:true,
					onUpdate:true,
					onComplete:true
				},
				options=$.extend(defaults,options),
				dur=[options.dur,(options.drag ? 0 : options.dur)],
				mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				wrapper=mCSB_container.parent(),
				totalScrollOffsets=o.callbacks.onTotalScrollOffset ? _arr.call(el,o.callbacks.onTotalScrollOffset) : [0,0],
				totalScrollBackOffsets=o.callbacks.onTotalScrollBackOffset ? _arr.call(el,o.callbacks.onTotalScrollBackOffset) : [0,0];
			d.trigger=options.trigger;
			if(wrapper.scrollTop()!==0 || wrapper.scrollLeft()!==0){ /* always reset scrollTop/Left */
				$(".mCSB_"+d.idx+"_scrollbar").css("visibility","visible");
				wrapper.scrollTop(0).scrollLeft(0);
			}
			if(to==="_resetY" && !d.contentReset.y){
				/* callbacks: onOverflowYNone */
				if(_cb("onOverflowYNone")){o.callbacks.onOverflowYNone.call(el[0]);}
				d.contentReset.y=1;
			}
			if(to==="_resetX" && !d.contentReset.x){
				/* callbacks: onOverflowXNone */
				if(_cb("onOverflowXNone")){o.callbacks.onOverflowXNone.call(el[0]);}
				d.contentReset.x=1;
			}
			if(to==="_resetY" || to==="_resetX"){return;}
			if((d.contentReset.y || !el[0].mcs) && d.overflowed[0]){
				/* callbacks: onOverflowY */
				if(_cb("onOverflowY")){o.callbacks.onOverflowY.call(el[0]);}
				d.contentReset.x=null;
			}
			if((d.contentReset.x || !el[0].mcs) && d.overflowed[1]){
				/* callbacks: onOverflowX */
				if(_cb("onOverflowX")){o.callbacks.onOverflowX.call(el[0]);}
				d.contentReset.x=null;
			}
			if(o.snapAmount){ /* scrolling snapping */
				var snapAmount=!(o.snapAmount instanceof Array) ? o.snapAmount : options.dir==="x" ? o.snapAmount[1] : o.snapAmount[0];
				to=_snapAmount(to,snapAmount,o.snapOffset);
			}
			switch(options.dir){
				case "x":
					var mCSB_dragger=$("#mCSB_"+d.idx+"_dragger_horizontal"),
						property="left",
						contentPos=mCSB_container[0].offsetLeft,
						limit=[
							mCustomScrollBox.width()-mCSB_container.outerWidth(false),
							mCSB_dragger.parent().width()-mCSB_dragger.width()
						],
						scrollTo=[to,to===0 ? 0 : (to/d.scrollRatio.x)],
						tso=totalScrollOffsets[1],
						tsbo=totalScrollBackOffsets[1],
						totalScrollOffset=tso>0 ? tso/d.scrollRatio.x : 0,
						totalScrollBackOffset=tsbo>0 ? tsbo/d.scrollRatio.x : 0;
					break;
				case "y":
					var mCSB_dragger=$("#mCSB_"+d.idx+"_dragger_vertical"),
						property="top",
						contentPos=mCSB_container[0].offsetTop,
						limit=[
							mCustomScrollBox.height()-mCSB_container.outerHeight(false),
							mCSB_dragger.parent().height()-mCSB_dragger.height()
						],
						scrollTo=[to,to===0 ? 0 : (to/d.scrollRatio.y)],
						tso=totalScrollOffsets[0],
						tsbo=totalScrollBackOffsets[0],
						totalScrollOffset=tso>0 ? tso/d.scrollRatio.y : 0,
						totalScrollBackOffset=tsbo>0 ? tsbo/d.scrollRatio.y : 0;
					break;
			}
			if(scrollTo[1]<0 || (scrollTo[0]===0 && scrollTo[1]===0)){
				scrollTo=[0,0];
			}else if(scrollTo[1]>=limit[1]){
				scrollTo=[limit[0],limit[1]];
			}else{
				scrollTo[0]=-scrollTo[0];
			}
			if(!el[0].mcs){
				_mcs();  /* init mcs object (once) to make it available before callbacks */
				if(_cb("onInit")){o.callbacks.onInit.call(el[0]);} /* callbacks: onInit */
			}
			clearTimeout(mCSB_container[0].onCompleteTimeout);
			_tweenTo(mCSB_dragger[0],property,Math.round(scrollTo[1]),dur[1],options.scrollEasing);
			if(!d.tweenRunning && ((contentPos===0 && scrollTo[0]>=0) || (contentPos===limit[0] && scrollTo[0]<=limit[0]))){return;}
			_tweenTo(mCSB_container[0],property,Math.round(scrollTo[0]),dur[0],options.scrollEasing,options.overwrite,{
				onStart:function(){
					if(options.callbacks && options.onStart && !d.tweenRunning){
						/* callbacks: onScrollStart */
						if(_cb("onScrollStart")){_mcs(); o.callbacks.onScrollStart.call(el[0]);}
						d.tweenRunning=true;
						_onDragClasses(mCSB_dragger);
						d.cbOffsets=_cbOffsets();
					}
				},onUpdate:function(){
					if(options.callbacks && options.onUpdate){
						/* callbacks: whileScrolling */
						if(_cb("whileScrolling")){_mcs(); o.callbacks.whileScrolling.call(el[0]);}
					}
				},onComplete:function(){
					if(options.callbacks && options.onComplete){
						if(o.axis==="yx"){clearTimeout(mCSB_container[0].onCompleteTimeout);}
						var t=mCSB_container[0].idleTimer || 0;
						mCSB_container[0].onCompleteTimeout=setTimeout(function(){
							/* callbacks: onScroll, onTotalScroll, onTotalScrollBack */
							if(_cb("onScroll")){_mcs(); o.callbacks.onScroll.call(el[0]);}
							if(_cb("onTotalScroll") && scrollTo[1]>=limit[1]-totalScrollOffset && d.cbOffsets[0]){_mcs(); o.callbacks.onTotalScroll.call(el[0]);}
							if(_cb("onTotalScrollBack") && scrollTo[1]<=totalScrollBackOffset && d.cbOffsets[1]){_mcs(); o.callbacks.onTotalScrollBack.call(el[0]);}
							d.tweenRunning=false;
							mCSB_container[0].idleTimer=0;
							_onDragClasses(mCSB_dragger,"hide");
						},t);
					}
				}
			});
			/* checks if callback function exists */
			function _cb(cb){
				return d && o.callbacks[cb] && typeof o.callbacks[cb]==="function";
			}
			/* checks whether callback offsets always trigger */
			function _cbOffsets(){
				return [o.callbacks.alwaysTriggerOffsets || contentPos>=limit[0]+tso,o.callbacks.alwaysTriggerOffsets || contentPos<=-tsbo];
			}
			/* 
			populates object with useful values for the user 
			values: 
				content: this.mcs.content
				content top position: this.mcs.top 
				content left position: this.mcs.left 
				dragger top position: this.mcs.draggerTop 
				dragger left position: this.mcs.draggerLeft 
				scrolling y percentage: this.mcs.topPct 
				scrolling x percentage: this.mcs.leftPct 
				scrolling direction: this.mcs.direction
			*/
			function _mcs(){
				var cp=[mCSB_container[0].offsetTop,mCSB_container[0].offsetLeft], /* content position */
					dp=[mCSB_dragger[0].offsetTop,mCSB_dragger[0].offsetLeft], /* dragger position */
					cl=[mCSB_container.outerHeight(false),mCSB_container.outerWidth(false)], /* content length */
					pl=[mCustomScrollBox.height(),mCustomScrollBox.width()]; /* content parent length */
				el[0].mcs={
					content:mCSB_container, /* original content wrapper as jquery object */
					top:cp[0],left:cp[1],draggerTop:dp[0],draggerLeft:dp[1],
					topPct:Math.round((100*Math.abs(cp[0]))/(Math.abs(cl[0])-pl[0])),leftPct:Math.round((100*Math.abs(cp[1]))/(Math.abs(cl[1])-pl[1])),
					direction:options.dir
				};
				/* 
				this refers to the original element containing the scrollbar(s)
				usage: this.mcs.top, this.mcs.leftPct etc. 
				*/
			}
		},
		/* -------------------- */
		
		
		/* 
		CUSTOM JAVASCRIPT ANIMATION TWEEN 
		Lighter and faster than jquery animate() and css transitions 
		Animates top/left properties and includes easings 
		*/
		_tweenTo=function(el,prop,to,duration,easing,overwrite,callbacks){
			if(!el._mTween){el._mTween={top:{},left:{}};}
			var callbacks=callbacks || {},
				onStart=callbacks.onStart || function(){},onUpdate=callbacks.onUpdate || function(){},onComplete=callbacks.onComplete || function(){},
				startTime=_getTime(),_delay,progress=0,from=el.offsetTop,elStyle=el.style,_request,tobj=el._mTween[prop];
			if(prop==="left"){from=el.offsetLeft;}
			var diff=to-from;
			tobj.stop=0;
			if(overwrite!=="none"){_cancelTween();}
			_startTween();
			function _step(){
				if(tobj.stop){return;}
				if(!progress){onStart.call();}
				progress=_getTime()-startTime;
				_tween();
				if(progress>=tobj.time){
					tobj.time=(progress>tobj.time) ? progress+_delay-(progress-tobj.time) : progress+_delay-1;
					if(tobj.time<progress+1){tobj.time=progress+1;}
				}
				if(tobj.time<duration){tobj.id=_request(_step);}else{onComplete.call();}
			}
			function _tween(){
				if(duration>0){
					tobj.currVal=_ease(tobj.time,from,diff,duration,easing);
					elStyle[prop]=Math.round(tobj.currVal)+"px";
				}else{
					elStyle[prop]=to+"px";
				}
				onUpdate.call();
			}
			function _startTween(){
				_delay=1000/60;
				tobj.time=progress+_delay;
				_request=(!window.requestAnimationFrame) ? function(f){_tween(); return setTimeout(f,0.01);} : window.requestAnimationFrame;
				tobj.id=_request(_step);
			}
			function _cancelTween(){
				if(tobj.id==null){return;}
				if(!window.requestAnimationFrame){clearTimeout(tobj.id);
				}else{window.cancelAnimationFrame(tobj.id);}
				tobj.id=null;
			}
			function _ease(t,b,c,d,type){
				switch(type){
					case "linear": case "mcsLinear":
						return c*t/d + b;
						break;
					case "mcsLinearOut":
						t/=d; t--; return c * Math.sqrt(1 - t*t) + b;
						break;
					case "easeInOutSmooth":
						t/=d/2;
						if(t<1) return c/2*t*t + b;
						t--;
						return -c/2 * (t*(t-2) - 1) + b;
						break;
					case "easeInOutStrong":
						t/=d/2;
						if(t<1) return c/2 * Math.pow( 2, 10 * (t - 1) ) + b;
						t--;
						return c/2 * ( -Math.pow( 2, -10 * t) + 2 ) + b;
						break;
					case "easeInOut": case "mcsEaseInOut":
						t/=d/2;
						if(t<1) return c/2*t*t*t + b;
						t-=2;
						return c/2*(t*t*t + 2) + b;
						break;
					case "easeOutSmooth":
						t/=d; t--;
						return -c * (t*t*t*t - 1) + b;
						break;
					case "easeOutStrong":
						return c * ( -Math.pow( 2, -10 * t/d ) + 1 ) + b;
						break;
					case "easeOut": case "mcsEaseOut": default:
						var ts=(t/=d)*t,tc=ts*t;
						return b+c*(0.499999999999997*tc*ts + -2.5*ts*ts + 5.5*tc + -6.5*ts + 4*t);
				}
			}
		},
		/* -------------------- */
		
		
		/* returns current time */
		_getTime=function(){
			if(window.performance && window.performance.now){
				return window.performance.now();
			}else{
				if(window.performance && window.performance.webkitNow){
					return window.performance.webkitNow();
				}else{
					if(Date.now){return Date.now();}else{return new Date().getTime();}
				}
			}
		},
		/* -------------------- */
		
		
		/* stops a tween */
		_stopTween=function(){
			var el=this;
			if(!el._mTween){el._mTween={top:{},left:{}};}
			var props=["top","left"];
			for(var i=0; i<props.length; i++){
				var prop=props[i];
				if(el._mTween[prop].id){
					if(!window.requestAnimationFrame){clearTimeout(el._mTween[prop].id);
					}else{window.cancelAnimationFrame(el._mTween[prop].id);}
					el._mTween[prop].id=null;
					el._mTween[prop].stop=1;
				}
			}
		},
		/* -------------------- */
		
		
		/* deletes a property (avoiding the exception thrown by IE) */
		_delete=function(c,m){
			try{delete c[m];}catch(e){c[m]=null;}
		},
		/* -------------------- */
		
		
		/* detects left mouse button */
		_mouseBtnLeft=function(e){
			return !(e.which && e.which!==1);
		},
		/* -------------------- */
		
		
		/* detects if pointer type event is touch */
		_pointerTouch=function(e){
			var t=e.originalEvent.pointerType;
			return !(t && t!=="touch" && t!==2);
		},
		/* -------------------- */
		
		
		/* checks if value is numeric */
		_isNumeric=function(val){
			return !isNaN(parseFloat(val)) && isFinite(val);
		},
		/* -------------------- */
		
		
		/* returns element position according to content */
		_childPos=function(el){
			var p=el.parents(".mCSB_container");
			return [el.offset().top-p.offset().top,el.offset().left-p.offset().left];
		},
		/* -------------------- */
		
		
		/* checks if browser tab is hidden/inactive via Page Visibility API */
		_isTabHidden=function(){
			var prop=_getHiddenProp();
			if(!prop) return false;
			return document[prop];
			function _getHiddenProp(){
				var pfx=["webkit","moz","ms","o"];
				if("hidden" in document) return "hidden"; //natively supported
				for(var i=0; i<pfx.length; i++){ //prefixed
				    if((pfx[i]+"Hidden") in document) 
				        return pfx[i]+"Hidden";
				}
				return null; //not supported
			}
		};
		/* -------------------- */
		
	
	
	
	
	/* 
	----------------------------------------
	PLUGIN SETUP 
	----------------------------------------
	*/
	
	/* plugin constructor functions */
	$.fn[pluginNS]=function(method){ /* usage: $(selector).mCustomScrollbar(); */
		if(methods[method]){
			return methods[method].apply(this,Array.prototype.slice.call(arguments,1));
		}else if(typeof method==="object" || !method){
			return methods.init.apply(this,arguments);
		}else{
			$.error("Method "+method+" does not exist");
		}
	};
	$[pluginNS]=function(method){ /* usage: $.mCustomScrollbar(); */
		if(methods[method]){
			return methods[method].apply(this,Array.prototype.slice.call(arguments,1));
		}else if(typeof method==="object" || !method){
			return methods.init.apply(this,arguments);
		}else{
			$.error("Method "+method+" does not exist");
		}
	};
	
	/* 
	allow setting plugin default options. 
	usage: $.mCustomScrollbar.defaults.scrollInertia=500; 
	to apply any changed default options on default selectors (below), use inside document ready fn 
	e.g.: $(document).ready(function(){ $.mCustomScrollbar.defaults.scrollInertia=500; });
	*/
	$[pluginNS].defaults=defaults;
	
	/* 
	add window object (window.mCustomScrollbar) 
	usage: if(window.mCustomScrollbar){console.log("custom scrollbar plugin loaded");}
	*/
	window[pluginNS]=true;
	
	$(window).bind("load",function(){
		
		$(defaultSelector)[pluginNS](); /* add scrollbars automatically on default selector */
		
		/* extend jQuery expressions */
		$.extend($.expr[":"],{
			/* checks if element is within scrollable viewport */
			mcsInView:$.expr[":"].mcsInView || function(el){
				var $el=$(el),content=$el.parents(".mCSB_container"),wrapper,cPos;
				if(!content.length){return;}
				wrapper=content.parent();
				cPos=[content[0].offsetTop,content[0].offsetLeft];
				return 	cPos[0]+_childPos($el)[0]>=0 && cPos[0]+_childPos($el)[0]<wrapper.height()-$el.outerHeight(false) && 
						cPos[1]+_childPos($el)[1]>=0 && cPos[1]+_childPos($el)[1]<wrapper.width()-$el.outerWidth(false);
			},
			/* checks if element or part of element is in view of scrollable viewport */
			mcsInSight:$.expr[":"].mcsInSight || function(el,i,m){
				var $el=$(el),elD,content=$el.parents(".mCSB_container"),wrapperView,pos,wrapperViewPct,
					pctVals=m[3]==="exact" ? [[1,0],[1,0]] : [[0.9,0.1],[0.6,0.4]];
				if(!content.length){return;}
				elD=[$el.outerHeight(false),$el.outerWidth(false)];
				pos=[content[0].offsetTop+_childPos($el)[0],content[0].offsetLeft+_childPos($el)[1]];
				wrapperView=[content.parent()[0].offsetHeight,content.parent()[0].offsetWidth];
				wrapperViewPct=[elD[0]<wrapperView[0] ? pctVals[0] : pctVals[1],elD[1]<wrapperView[1] ? pctVals[0] : pctVals[1]];
				return 	pos[0]-(wrapperView[0]*wrapperViewPct[0][0])<0 && pos[0]+elD[0]-(wrapperView[0]*wrapperViewPct[0][1])>=0 && 
						pos[1]-(wrapperView[1]*wrapperViewPct[1][0])<0 && pos[1]+elD[1]-(wrapperView[1]*wrapperViewPct[1][1])>=0;
			},
			/* checks if element is overflowed having visible scrollbar(s) */
			mcsOverflow:$.expr[":"].mcsOverflow || function(el){
				var d=$(el).data(pluginPfx);
				if(!d){return;}
				return d.overflowed[0] || d.overflowed[1];
			}
		});
	
	});

}))}));

