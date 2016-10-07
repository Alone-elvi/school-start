try {! function(a, b) { "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");
    return b(a) } : b(a) }("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = a.document,
        e = c.slice,
        f = c.concat,
        g = c.push,
        h = c.indexOf,
        i = {},
        j = i.toString,
        k = i.hasOwnProperty,
        l = {},
        m = "1.12.4",
        n = function(a, b) {
            return new n.fn.init(a, b) },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase() };
    n.fn = n.prototype = { jquery: m, constructor: n, selector: "", length: 0, toArray: function() {
        return e.call(this) }, get: function(a) {
        return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this) }, pushStack: function(a) {
        var b = n.merge(this.constructor(), a);
        return b.prevObject = this, b.context = this.context, b }, each: function(a) {
        return n.each(this, a) }, map: function(a) {
        return this.pushStack(n.map(this, function(b, c) {
            return a.call(b, c, b) })) }, slice: function() {
        return this.pushStack(e.apply(this, arguments)) }, first: function() {
        return this.eq(0) }, last: function() {
        return this.eq(-1) }, eq: function(a) {
        var b = this.length,
            c = +a + (0 > a ? b : 0);
        return this.pushStack(c >= 0 && b > c ? [this[c]] : []) }, end: function() {
        return this.prevObject || this.constructor() }, push: g, sort: c.sort, splice: c.splice }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g }, n.extend({ expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(a) {
        throw new Error(a) }, noop: function() {}, isFunction: function(a) {
        return "function" === n.type(a) }, isArray: Array.isArray || function(a) {
        return "array" === n.type(a) }, isWindow: function(a) {
        return null != a && a == a.window }, isNumeric: function(a) {
        var b = a && a.toString();
        return !n.isArray(a) && b - parseFloat(b) + 1 >= 0 }, isEmptyObject: function(a) {
        var b;
        for (b in a) return !1;
        return !0 }, isPlainObject: function(a) {
        var b;
        if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
        try {
            if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (c) {
            return !1 }
        if (!l.ownFirst)
            for (b in a) return k.call(a, b);
        for (b in a);
        return void 0 === b || k.call(a, b) }, type: function(a) {
        return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a }, globalEval: function(b) { b && n.trim(b) && (a.execScript || function(b) { a.eval.call(a, b) })(b) }, camelCase: function(a) {
        return a.replace(p, "ms-").replace(q, r) }, nodeName: function(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() }, each: function(a, b) {
        var c, d = 0;
        if (s(a)) {
            for (c = a.length; c > d; d++)
                if (b.call(a[d], d, a[d]) === !1) break } else
            for (d in a)
                if (b.call(a[d], d, a[d]) === !1) break; return a }, trim: function(a) {
        return null == a ? "" : (a + "").replace(o, "") }, makeArray: function(a, b) {
        var c = b || [];
        return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c }, inArray: function(a, b, c) {
        var d;
        if (b) {
            if (h) return h.call(b, a, c);
            for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                if (c in b && b[c] === a) return c }
        return -1 }, merge: function(a, b) {
        var c = +b.length,
            d = 0,
            e = a.length;
        while (c > d) a[e++] = b[d++];
        if (c !== c)
            while (void 0 !== b[d]) a[e++] = b[d++];
        return a.length = e, a }, grep: function(a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
        return e }, map: function(a, b, c) {
        var d, e, g = 0,
            h = [];
        if (s(a))
            for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
        else
            for (g in a) e = b(a[g], g, c), null != e && h.push(e);
        return f.apply([], h) }, guid: 1, proxy: function(a, b) {
        var c, d, f;
        return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = e.call(arguments, 2), d = function() {
            return a.apply(b || this, c.concat(e.call(arguments))) }, d.guid = a.guid = a.guid || n.guid++, d) : void 0 }, now: function() {
        return +new Date }, support: l }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) { i["[object " + b + "]"] = b.toLowerCase() });

    function s(a) {
        var b = !!a && "length" in a && a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ga(),
            z = ga(),
            A = ga(),
            B = function(a, b) {
                return a === b && (l = !0), 0 },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1 },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
            O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"),
            Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"),
            S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            U = new RegExp(O),
            V = new RegExp("^" + M + "$"),
            W = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M + "|[*])"), ATTR: new RegExp("^" + N), PSEUDO: new RegExp("^" + O), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _ = /[+~]/,
            aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            ca = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) },
            da = function() { m() };
        try { H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType } catch (ea) { H = { apply: E.length ? function(a, b) { G.apply(a, I.call(b)) } : function(a, b) {
            var c = a.length,
                d = 0;
            while (a[c++] = b[d++]);
            a.length = c - 1 } } }

        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
                x = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d } else {
                        if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x) w = b, s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
                        while (h--) r[h] = l + " " + qa(r[h]);
                        s = r.join(","), w = _.test(a) && oa(b.parentNode) || b }
                    if (s) try {
                        return H.apply(d, w.querySelectorAll(s)), d } catch (y) {} finally { k === u && b.removeAttribute("id") } } }
            return i(a.replace(Q, "$1"), b, d, e) }

        function ga() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e }
            return b }

        function ha(a) {
            return a[u] = !0, a }

        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b) } catch (c) {
                return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } }

        function ja(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b }

        function ka(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1 }

        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a } }

        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a } }

        function na(a) {
            return ha(function(b) {
                return b = +b, ha(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e])) }) }) }

        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a }
        c = fa.support = {}, f = fa.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1 }, m = fa.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) {
                return a.className = "i", !a.getAttribute("className") }), c.getElementsByTagName = ia(function(a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : [] } }, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    return a.getAttribute("id") === b } }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b } }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0 } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d }
                return f }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                    return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0 }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) { o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]") }), ia(function(a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:") })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) { c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O) }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d))) } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1 }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1) } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return ka(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0 }, n) : n }, fa.matches = function(a, b) {
            return fa(a, null, null, b) }, fa.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) {}
            return fa(b, n, null, [a]).length > 0 }, fa.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b) }, fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null }, fa.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a) }, fa.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1) }
            return k = null, a }, e = fa.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a) } else if (3 === f || 4 === f) return a.nodeValue } else
                while (b = a[d++]) c += e(b);
            return c }, d = fa.selectors = { cacheLength: 50, createPseudo: ha, match: W, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(a) {
            return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function(a) {
            return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a }, PSEUDO: function(a) {
            var b, c = !a[6] && a[2];
            return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } }, filter: { TAG: function(a) {
            var b = a.replace(ba, ca).toLowerCase();
            return "*" === a ? function() {
                return !0 } : function(a) {
                return a.nodeName && a.nodeName.toLowerCase() === b } }, CLASS: function(a) {
            var b = y[a + " "];
            return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                    return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "") }) }, ATTR: function(a, b, c) {
            return function(d) {
                var e = fa.attr(d, a);
                return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0 } }, CHILD: function(a, b, c, d, e) {
            var f = "nth" !== a.slice(0, 3),
                g = "last" !== a.slice(-4),
                h = "of-type" === b;
            return 1 === d && 0 === e ? function(a) {
                return !!a.parentNode } : function(b, c, i) {
                var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                    q = b.parentNode,
                    r = h && b.nodeName.toLowerCase(),
                    s = !i && !h,
                    t = !1;
                if (q) {
                    if (f) {
                        while (p) { m = b;
                            while (m = m[p])
                                if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                            o = p = "only" === a && !o && "nextSibling" }
                        return !0 }
                    if (o = [g ? q.firstChild : q.lastChild], g && s) { m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                        while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                            if (1 === m.nodeType && ++t && m === b) { k[a] = [w, n, t];
                                break } } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                        while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                            if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                    return t -= e, t === d || t % d === 0 && t / d >= 0 } } }, PSEUDO: function(a, b) {
            var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
            return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                var d, f = e(a, b),
                    g = f.length;
                while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g]) }) : function(a) {
                return e(a, 0, c) }) : e } }, pseudos: { not: ha(function(a) {
            var b = [],
                c = [],
                d = h(a.replace(Q, "$1"));
            return d[u] ? ha(function(a, b, c, e) {
                var f, g = d(a, null, e, []),
                    h = a.length;
                while (h--)(f = g[h]) && (a[h] = !(b[h] = f)) }) : function(a, e, f) {
                return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop() } }), has: ha(function(a) {
            return function(b) {
                return fa(a, b).length > 0 } }), contains: ha(function(a) {
            return a = a.replace(ba, ca),
                function(b) {
                    return (b.textContent || b.innerText || e(b)).indexOf(a) > -1 } }), lang: ha(function(a) {
            return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
                function(b) {
                    var c;
                    do
                        if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                    while ((b = b.parentNode) && 1 === b.nodeType);
                    return !1 } }), target: function(b) {
            var c = a.location && a.location.hash;
            return c && c.slice(1) === b.id }, root: function(a) {
            return a === o }, focus: function(a) {
            return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) }, enabled: function(a) {
            return a.disabled === !1 }, disabled: function(a) {
            return a.disabled === !0 }, checked: function(a) {
            var b = a.nodeName.toLowerCase();
            return "input" === b && !!a.checked || "option" === b && !!a.selected }, selected: function(a) {
            return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 }, empty: function(a) {
            for (a = a.firstChild; a; a = a.nextSibling)
                if (a.nodeType < 6) return !1;
            return !0 }, parent: function(a) {
            return !d.pseudos.empty(a) }, header: function(a) {
            return Y.test(a.nodeName) }, input: function(a) {
            return X.test(a.nodeName) }, button: function(a) {
            var b = a.nodeName.toLowerCase();
            return "input" === b && "button" === a.type || "button" === b }, text: function(a) {
            var b;
            return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) }, first: na(function() {
            return [0] }), last: na(function(a, b) {
            return [b - 1] }), eq: na(function(a, b, c) {
            return [0 > c ? c + b : c] }), even: na(function(a, b) {
            for (var c = 0; b > c; c += 2) a.push(c);
            return a }), odd: na(function(a, b) {
            for (var c = 1; b > c; c += 2) a.push(c);
            return a }), lt: na(function(a, b, c) {
            for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
            return a }), gt: na(function(a, b, c) {
            for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
            return a }) } }, d.pseudos.nth = d.pseudos.eq;
        for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = la(b);
        for (b in { submit: !0, reset: !0 }) d.pseudos[b] = ma(b);

        function pa() {}
        pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) { c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(Q, " ") }), h = h.slice(c.length));
                for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
                if (!c) break }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0) };

        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d }

        function ra(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f) } : function(b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0 } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
                            if (i[d] = k, k[2] = a(b, c, g)) return !0 } } }

        function sa(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0 } : a[0] }

        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
            return c }

        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g }

        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ua(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) { j = ua(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l)) }
                if (f) {
                    if (e || a) {
                        if (e) { j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i) }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l)) } } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r) }) }

        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                return a === b }, h, !0), l = ra(function(a) {
                return J(b, a) > -1 }, h, !0), m = [function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a)) }
                    m.push(c) }
            return sa(m) }

        function xa(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) { o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++])
                                if (q(l, g || n, h)) { i.push(l);
                                    break }
                            k && (w = y) }
                        c && ((l = !q && l) && r--, f && t.push(l)) }
                    if (r += s, c && s !== r) { o = 0;
                        while (q = b[o++]) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = F.call(i));
                            u = ua(u) }
                        H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i) }
                    return k && (w = y, j = v), t };
            return c ? ha(f) : f }
        return h = fa.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) { b || (b = g(a)), c = b.length;
                while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)), f.selector = a }
            return f }, i = fa.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length) }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
                        break } } }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div")) }), ia(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || ja("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), c.attributes && ia(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || ja("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue }), ia(function(a) {
            return null == a.getAttribute("disabled") }) || ja(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), fa }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) break;
                    d.push(a) }
            return d },
        v = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c },
        w = n.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        y = /^.[^:#\[\.,]*$/;

    function z(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c });
        if ("string" == typeof b) {
            if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a) }
        return n.grep(a, function(a) {
            return n.inArray(a, b) > -1 !== c }) }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType })) }, n.fn.extend({ find: function(a) {
        var b, c = [],
            d = this,
            e = d.length;
        if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
            for (b = 0; e > b; b++)
                if (n.contains(d[b], this)) return !0 }));
        for (b = 0; e > b; b++) n.find(a, d[b], c);
        return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c }, filter: function(a) {
        return this.pushStack(z(this, a || [], !1)) }, not: function(a) {
        return this.pushStack(z(this, a || [], !0)) }, is: function(a) {
        return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length } });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = n.fn.init = function(a, b, c) {
            var e, f;
            if (!a) return this;
            if (c = c || A, "string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (e[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
                        for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                    return this }
                if (f = d.getElementById(e[2]), f && f.parentNode) {
                    if (f.id !== e[2]) return A.find(a);
                    this.length = 1, this[0] = f }
                return this.context = d, this.selector = a, this }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this)) };
    C.prototype = n.fn, A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/,
        E = { children: !0, contents: !0, next: !0, prev: !0 };
    n.fn.extend({ has: function(a) {
        var b, c = n(a, this),
            d = c.length;
        return this.filter(function() {
            for (b = 0; d > b; b++)
                if (n.contains(this, c[b])) return !0 }) }, closest: function(a, b) {
        for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
            for (c = this[d]; c && c !== b; c = c.parentNode)
                if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) { f.push(c);
                    break }
        return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f) }, index: function(a) {
        return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(a, b) {
        return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b)))) }, addBack: function(a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) } });

    function F(a, b) { do a = a[b]; while (a && 1 !== a.nodeType);
        return a }
    n.each({ parent: function(a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null }, parents: function(a) {
        return u(a, "parentNode") }, parentsUntil: function(a, b, c) {
        return u(a, "parentNode", c) }, next: function(a) {
        return F(a, "nextSibling") }, prev: function(a) {
        return F(a, "previousSibling") }, nextAll: function(a) {
        return u(a, "nextSibling") }, prevAll: function(a) {
        return u(a, "previousSibling") }, nextUntil: function(a, b, c) {
        return u(a, "nextSibling", c) }, prevUntil: function(a, b, c) {
        return u(a, "previousSibling", c) }, siblings: function(a) {
        return v((a.parentNode || {}).firstChild, a) }, children: function(a) {
        return v(a.firstChild) }, contents: function(a) {
        return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes) } }, function(a, b) { n.fn[a] = function(c, d) {
        var e = n.map(this, b, c);
        return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())), this.pushStack(e) } });
    var G = /\S+/g;

    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function(a, c) { b[c] = !0 }), b }
    n.Callbacks = function(a) { a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() {
                for (e = a.once, d = b = !0; g.length; h = -1) { c = g.shift();
                    while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1) }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "") },
            j = { add: function() {
                return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) { n.each(b, function(b, c) { n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c) }) }(arguments), c && !b && i()), this }, remove: function() {
                return n.each(arguments, function(a, b) {
                    var c;
                    while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h-- }), this }, has: function(a) {
                return a ? n.inArray(a, f) > -1 : f.length > 0 }, empty: function() {
                return f && (f = []), this }, disable: function() {
                return e = g = [], f = c = "", this }, disabled: function() {
                return !f }, lock: function() {
                return e = !0, c || j.disable(), this }, locked: function() {
                return !!e }, fireWith: function(a, c) {
                return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this }, fire: function() {
                return j.fireWith(this, arguments), this }, fired: function() {
                return !!d } };
        return j }, n.extend({ Deferred: function(a) {
        var b = [
                ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                ["notify", "progress", n.Callbacks("memory")]
            ],
            c = "pending",
            d = { state: function() {
                return c }, always: function() {
                return e.done(arguments).fail(arguments), this }, then: function() {
                var a = arguments;
                return n.Deferred(function(c) { n.each(b, function(b, f) {
                    var g = n.isFunction(a[b]) && a[b];
                    e[f[1]](function() {
                        var a = g && g.apply(this, arguments);
                        a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments) }) }), a = null }).promise() }, promise: function(a) {
                return null != a ? n.extend(a, d) : d } },
            e = {};
        return d.pipe = d.then, n.each(b, function(a, f) {
            var g = f[2],
                h = f[3];
            d[f[1]] = g.add, h && g.add(function() { c = h }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                return e[f[0] + "With"](this === e ? d : this, arguments), this }, e[f[0] + "With"] = g.fireWith }), d.promise(e), a && a.call(e, e), e }, when: function(a) {
        var b = 0,
            c = e.call(arguments),
            d = c.length,
            f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
            g = 1 === f ? a : n.Deferred(),
            h = function(a, b, c) {
                return function(d) { b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c) } },
            i, j, k;
        if (d > 1)
            for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
        return f || g.resolveWith(k, c), g.promise() } });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this }, n.extend({ isReady: !1, readyWait: 1, holdReady: function(a) { a ? n.readyWait++ : n.ready(!0) }, ready: function(a) {
        (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready")))) } });

    function J() { d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K)) }

    function K() {
        (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready()) }
    n.ready.promise = function(b) {
        if (!I)
            if (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) a.setTimeout(n.ready);
            else if (d.addEventListener) d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K);
            else { d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
                var c = !1;
                try { c = null == a.frameElement && d.documentElement } catch (e) {}
                c && c.doScroll && ! function f() {
                    if (!n.isReady) {
                        try { c.doScroll("left") } catch (b) {
                            return a.setTimeout(f, 50) }
                        J(), n.ready() } }() }
        return I.promise(b) }, n.ready.promise();
    var L;
    for (L in n(l)) break;
    l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = !1, n(function() {
        var a, b, c, e;
        c = d.getElementsByTagName("body")[0], c && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e)) }),
        function() {
            var a = d.createElement("div");
            l.deleteExpando = !0;
            try { delete a.test } catch (b) { l.deleteExpando = !1 }
            a = null }();
    var M = function(a) {
            var b = n.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b },
        N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;

    function P(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(O, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try { c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c } catch (e) {}
                n.data(a, b, c) } else c = void 0; }
        return c }

    function Q(a) {
        var b;
        for (b in a)
            if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0 }

    function R(a, b, d, e) {
        if (M(a)) {
            var f, g, h = n.expando,
                i = a.nodeType,
                j = i ? n.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : { toJSON: n.noop }), "object" != typeof b && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f } }

    function S(a, b, c) {
        if (M(a)) {
            var d, e, f = a.nodeType,
                g = f ? n.cache : a,
                h = f ? a[n.expando] : n.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) { n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !Q(d) : !n.isEmptyObject(d)) return }(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0) } } }
    n.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function(a) {
        return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a) }, data: function(a, b, c) {
        return R(a, b, c) }, removeData: function(a, b) {
        return S(a, b) }, _data: function(a, b, c) {
        return R(a, b, c, !0) }, _removeData: function(a, b) {
        return S(a, b, !0) } }), n.fn.extend({ data: function(a, b) {
        var c, d, e, f = this[0],
            g = f && f.attributes;
        if (void 0 === a) {
            if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) { c = g.length;
                while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                n._data(f, "parsedAttrs", !0) }
            return e }
        return "object" == typeof a ? this.each(function() { n.data(this, a) }) : arguments.length > 1 ? this.each(function() { n.data(this, a, b) }) : f ? P(f, a, n.data(f, a)) : void 0 }, removeData: function(a) {
        return this.each(function() { n.removeData(this, a) }) } }), n.extend({ queue: function(a, b, c) {
        var d;
        return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0 }, dequeue: function(a, b) { b = b || "fx";
        var c = n.queue(a, b),
            d = c.length,
            e = c.shift(),
            f = n._queueHooks(a, b),
            g = function() { n.dequeue(a, b) }; "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire() }, _queueHooks: function(a, b) {
        var c = b + "queueHooks";
        return n._data(a, c) || n._data(a, c, { empty: n.Callbacks("once memory").add(function() { n._removeData(a, b + "queue"), n._removeData(a, c) }) }) } }), n.fn.extend({ queue: function(a, b) {
        var c = 2;
        return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
            var c = n.queue(this, a, b);
            n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a) }) }, dequeue: function(a) {
        return this.each(function() { n.dequeue(this, a) }) }, clearQueue: function(a) {
        return this.queue(a || "fx", []) }, promise: function(a, b) {
        var c, d = 1,
            e = n.Deferred(),
            f = this,
            g = this.length,
            h = function() {--d || e.resolveWith(f, [f]) }; "string" != typeof a && (b = a, a = void 0), a = a || "fx";
        while (g--) c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b) } }),
        function() {
            var a;
            l.shrinkWrapBlocks = function() {
                if (null != a) return a;
                a = !1;
                var b, c, e;
                return c = d.getElementsByTagName("body")[0], c && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0 } }();
    var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
        V = ["Top", "Right", "Bottom", "Left"],
        W = function(a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a) };

    function X(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() {
                return d.cur() } : function() {
                return n.css(a, b, "") },
            i = h(),
            j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));
        if (k && k[3] !== j) { j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g) }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e }
    var Y = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === n.type(c)) { e = !0;
                for (h in c) Y(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(n(a), c) })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f },
        Z = /^(?:checkbox|radio)$/i,
        $ = /<([\w:-]+)/,
        _ = /^$|\/(?:java|ecma)script/i,
        aa = /^\s+/,
        ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

    function ca(a) {
        var b = ba.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c }! function() {
        var a = d.createElement("div"),
            b = d.createDocumentFragment(),
            c = d.createElement("input");
        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando) }();
    var da = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] };
    da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;

    function ea(a, b) {
        var c, d, e = 0,
            f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f }

    function fa(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval")) }
    var ga = /<|&#?\w+;/,
        ha = /<tbody/i;

    function ia(a) { Z.test(a.type) && (a.defaultChecked = a.checked) }

    function ja(a, b, c, d, e) {
        for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++)
            if (g = a[r], g || 0 === g)
                if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);
                else if (ga.test(g)) { i = i || p.appendChild(b.createElement("div")), j = ($.exec(g) || ["", ""])[1].toLowerCase(), m = da[j] || da._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0];
                    while (f--) i = i.lastChild;
                    if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l.tbody) { g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length;
                        while (f--) n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k) }
                    n.merge(q, i.childNodes), i.textContent = "";
                    while (i.firstChild) i.removeChild(i.firstChild);
                    i = p.lastChild } else q.push(b.createTextNode(g));
        i && p.removeChild(i), l.appendChecked || n.grep(ea(q, "input"), ia), r = 0;
        while (g = q[r++])
            if (d && n.inArray(g, d) > -1) e && e.push(g);
            else if (h = n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c) { f = 0;
                while (g = i[f++]) _.test(g.type || "") && c.push(g) }
        return i = null, p }! function() {
        var b, c, e = d.createElement("div");
        for (b in { submit: !0, change: !0, focusin: !0 }) c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando === !1);
        e = null }();
    var ka = /^(?:input|select|textarea)$/i,
        la = /^key/,
        ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        na = /^(?:focusinfocus|focusoutblur)$/,
        oa = /^([^.]*)(?:\.(.+)|)/;

    function pa() {
        return !0 }

    function qa() {
        return !1 }

    function ra() {
        try {
            return d.activeElement } catch (a) {} }

    function sa(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) { "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) sa(a, h, c, d, b[h], f);
            return a }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = qa;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return n().off(a), g.apply(this, arguments) }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() { n.event.add(this, b, e, d, c) }) }
    n.event = { global: {}, add: function(a, b, c, d, e) {
        var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
        if (r) { c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
            return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments) }, k.elem = a), b = (b || "").match(G) || [""], h = b.length;
            while (h--) f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
            a = null } }, remove: function(a, b, c, d, e) {
        var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
        if (r && (k = r.events)) { b = (b || "").match(G) || [""], j = b.length;
            while (j--)
                if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) { l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
                    while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                    i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o]) } else
                    for (o in k) n.event.remove(a, o + b[j], c, d, !0);
            n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events")) } }, trigger: function(b, c, e, f) {
        var g, h, i, j, l, m, o, p = [e || d],
            q = k.call(b, "type") ? b.type : b,
            r = k.call(b, "namespace") ? b.namespace.split(".") : [];
        if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
            if (!f && !l.noBubble && !n.isWindow(e)) {
                for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i.parentNode) p.push(i), m = i;
                m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a) }
            o = 0;
            while ((i = p[o++]) && !b.isPropagationStopped()) b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), g = h && i[h], g && g.apply && M(i) && (b.result = g.apply(i, c), b.result === !1 && b.preventDefault());
            if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) { m = e[h], m && (e[h] = null), n.event.triggered = q;
                try { e[q]() } catch (s) {}
                n.event.triggered = void 0, m && (e[h] = m) }
            return b.result } }, dispatch: function(a) { a = n.event.fix(a);
        var b, c, d, f, g, h = [],
            i = e.call(arguments),
            j = (n._data(this, "events") || {})[a.type] || [],
            k = n.event.special[a.type] || {};
        if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) { h = n.event.handlers.call(this, a, j), b = 0;
            while ((f = h[b++]) && !a.isPropagationStopped()) { a.currentTarget = f.elem, c = 0;
                while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation())) }
            return k.postDispatch && k.postDispatch.call(this, a), a.result } }, handlers: function(a, b) {
        var c, d, e, f, g = [],
            h = b.delegateCount,
            i = a.target;
        if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
            for (; i != this; i = i.parentNode || this)
                if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                    for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                    d.length && g.push({ elem: i, handlers: d }) }
        return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g }, fix: function(a) {
        if (a[n.expando]) return a;
        var b, c, e, f = a.type,
            g = a,
            h = this.fixHooks[f];
        h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
        while (b--) c = e[b], a[c] = g[c];
        return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a }, props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(a, b) {
        var c, e, f, g = b.button,
            h = b.fromElement;
        return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a } }, special: { load: { noBubble: !0 }, focus: { trigger: function() {
        if (this !== ra() && this.focus) try {
            return this.focus(), !1 } catch (a) {} }, delegateType: "focusin" }, blur: { trigger: function() {
        return this === ra() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function() {
        return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0 }, _default: function(a) {
        return n.nodeName(a.target, "a") } }, beforeunload: { postDispatch: function(a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result) } } }, simulate: function(a, b, c) {
        var d = n.extend(new n.Event, c, { type: a, isSimulated: !0 });
        n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault() } }, n.removeEvent = d.removeEventListener ? function(a, b, c) { a.removeEventListener && a.removeEventListener(b, c) } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c)) }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b) }, n.Event.prototype = { constructor: n.Event, isDefaultPrevented: qa, isPropagationStopped: qa, isImmediatePropagationStopped: qa, preventDefault: function() {
        var a = this.originalEvent;
        this.isDefaultPrevented = pa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1) }, stopPropagation: function() {
        var a = this.originalEvent;
        this.isPropagationStopped = pa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0) }, stopImmediatePropagation: function() {
        var a = this.originalEvent;
        this.isImmediatePropagationStopped = pa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation() } }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(a, b) { n.event.special[a] = { delegateType: b, bindType: b, handle: function(a) {
        var c, d = this,
            e = a.relatedTarget,
            f = a.handleObj;
        return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c } } }), l.submit || (n.event.special.submit = { setup: function() {
        return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function(a) {
            var b = a.target,
                c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
            c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function(a) { a._submitBubble = !0 }), n._data(c, "submit", !0)) }) }, postDispatch: function(a) { a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a)) }, teardown: function() {
        return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit") } }), l.change || (n.event.special.change = { setup: function() {
        return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function(a) { "checked" === a.originalEvent.propertyName && (this._justChanged = !0) }), n.event.add(this, "click._change", function(a) { this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a) })), !1) : void n.event.add(this, "beforeactivate._change", function(a) {
            var b = a.target;
            ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function(a) {!this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a) }), n._data(b, "change", !0)) }) }, handle: function(a) {
        var b = a.target;
        return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0 }, teardown: function() {
        return n.event.remove(this, "._change"), !ka.test(this.nodeName) } }), l.focusin || n.each({ focus: "focusin", blur: "focusout" }, function(a, b) {
        var c = function(a) { n.event.simulate(b, a.target, n.event.fix(a)) };
        n.event.special[b] = { setup: function() {
            var d = this.ownerDocument || this,
                e = n._data(d, b);
            e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1) }, teardown: function() {
            var d = this.ownerDocument || this,
                e = n._data(d, b) - 1;
            e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b)) } } }), n.fn.extend({ on: function(a, b, c, d) {
        return sa(this, a, b, c, d) }, one: function(a, b, c, d) {
        return sa(this, a, b, c, d, 1) }, off: function(a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
        if ("object" == typeof a) {
            for (e in a) this.off(e, b, a[e]);
            return this }
        return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = qa), this.each(function() { n.event.remove(this, a, c, b) }) }, trigger: function(a, b) {
        return this.each(function() { n.event.trigger(a, b, this) }) }, triggerHandler: function(a, b) {
        var c = this[0];
        return c ? n.event.trigger(a, b, c, !0) : void 0 } });
    var ta = / jQuery\d+="(?:null|\d+)"/g,
        ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
        va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        wa = /<script|<style|<link/i,
        xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ya = /^true\/(.*)/,
        za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Aa = ca(d),
        Ba = Aa.appendChild(d.createElement("div"));

    function Ca(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a }

    function Da(a) {
        return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a }

    function Ea(a) {
        var b = ya.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a }

    function Fa(a, b) {
        if (1 === b.nodeType && n.hasData(a)) {
            var c, d, e, f = n._data(a),
                g = n._data(b, f),
                h = f.events;
            if (h) { delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d]) }
            g.data && (g.data = n.extend({}, g.data)) } }

    function Ga(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) { e = n._data(b);
                for (d in e.events) n.removeEvent(b, d, e.handle);
                b.removeAttribute(n.expando) } "script" === c && b.text !== a.text ? (Da(b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue) } }

    function Ha(a, b, c, d) { b = f.apply([], b);
        var e, g, h, i, j, k, m = 0,
            o = a.length,
            p = o - 1,
            q = b[0],
            r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d) });
        if (o && (k = ja(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
            for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++) g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, ea(g, "script"))), c.call(a[m], g, m);
            if (h)
                for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++) g = i[m], _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
            k = e = null }
        return a }

    function Ia(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(ea(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")), d.parentNode.removeChild(d));
        return a }
    n.extend({ htmlPrefilter: function(a) {
        return a.replace(va, "<$1></$2>") }, clone: function(a, b, c) {
        var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
        if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
            for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g) d[g] && Ga(e, d[g]);
        if (b)
            if (c)
                for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++) Fa(e, d[g]);
            else Fa(a, f);
        return d = ea(f, "script"), d.length > 0 && fa(d, !i && ea(a, "script")), d = h = e = null, f }, cleanData: function(a, b) {
        for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++)
            if ((b || M(d)) && (f = d[i], g = f && j[f])) {
                if (g.events)
                    for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                j[f] && (delete j[f], k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f)) } } }), n.fn.extend({ domManip: Ha, detach: function(a) {
        return Ia(this, a, !0) }, remove: function(a) {
        return Ia(this, a) }, text: function(a) {
        return Y(this, function(a) {
            return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a)) }, null, a, arguments.length) }, append: function() {
        return Ha(this, arguments, function(a) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var b = Ca(this, a);
                b.appendChild(a) } }) }, prepend: function() {
        return Ha(this, arguments, function(a) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var b = Ca(this, a);
                b.insertBefore(a, b.firstChild) } }) }, before: function() {
        return Ha(this, arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this) }) }, after: function() {
        return Ha(this, arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) }, empty: function() {
        for (var a, b = 0; null != (a = this[b]); b++) { 1 === a.nodeType && n.cleanData(ea(a, !1));
            while (a.firstChild) a.removeChild(a.firstChild);
            a.options && n.nodeName(a, "select") && (a.options.length = 0) }
        return this }, clone: function(a, b) {
        return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
            return n.clone(this, a, b) }) }, html: function(a) {
        return Y(this, function(a) {
            var b = this[0] || {},
                c = 0,
                d = this.length;
            if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
            if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) { a = n.htmlPrefilter(a);
                try {
                    for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ea(b, !1)), b.innerHTML = a);
                    b = 0 } catch (e) {} }
            b && this.empty().append(a) }, null, a, arguments.length) }, replaceWith: function() {
        var a = [];
        return Ha(this, arguments, function(b) {
            var c = this.parentNode;
            n.inArray(this, a) < 0 && (n.cleanData(ea(this)), c && c.replaceChild(b, this)) }, a) } }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(a, b) { n.fn[a] = function(a) {
        for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get());
        return this.pushStack(e) } });
    var Ja, Ka = { HTML: "block", BODY: "block" };

    function La(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body),
            d = n.css(c[0], "display");
        return c.detach(), d }

    function Ma(a) {
        var b = d,
            c = Ka[a];
        return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0].contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja.detach()), Ka[a] = c), c }
    var Na = /^margin/,
        Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
        Pa = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e },
        Qa = d.documentElement;! function() {
        var b, c, e, f, g, h, i = d.createElement("div"),
            j = d.createElement("div");
        if (j.style) { j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, { reliableHiddenOffsets: function() {
            return null == b && k(), f }, boxSizingReliable: function() {
            return null == b && k(), e }, pixelMarginRight: function() {
            return null == b && k(), c }, pixelPosition: function() {
            return null == b && k(), b }, reliableMarginRight: function() {
            return null == b && k(), g }, reliableMarginLeft: function() {
            return null == b && k(), h } });

            function k() {
                var k, l, m = d.documentElement;
                m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || { width: "4px" }).width, j.style.marginRight = "50%", c = "4px" === (l || { marginRight: "4px" }).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", j.childNodes[0].style.borderCollapse = "separate", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === k[0].offsetHeight, f && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i) } } }();
    var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ra = function(b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a), c.getComputedStyle(b) }, Sa = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + "" }) : Qa.currentStyle && (Ra = function(a) {
        return a.currentStyle }, Sa = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Oa.test(g) && !Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto" });

    function Ua(a, b) {
        return { get: function() {
            return a() ? void delete this.get : (this.get = b).apply(this, arguments) } } }
    var Va = /alpha\([^)]*\)/i,
        Wa = /opacity\s*=\s*([^)]*)/i,
        Xa = /^(none|table(?!-c[ea]).+)/,
        Ya = new RegExp("^(" + T + ")(.*)$", "i"),
        Za = { position: "absolute", visibility: "hidden", display: "block" },
        $a = { letterSpacing: "0", fontWeight: "400" },
        _a = ["Webkit", "O", "Moz", "ms"],
        ab = d.createElement("div").style;

    function bb(a) {
        if (a in ab) return a;
        var b = a.charAt(0).toUpperCase() + a.slice(1),
            c = _a.length;
        while (c--)
            if (a = _a[c] + b, a in ab) return a }

    function cb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a }

    function db(a, b, c) {
        var d = Ya.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b }

    function eb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + V[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e), "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)));
        return g }

    function fb(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ra(a),
            g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Sa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Oa.test(e)) return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0 }
        return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px" }
    n.extend({ cssHooks: { opacity: { get: function(a, b) {
        if (b) {
            var c = Sa(a, "opacity");
            return "" === c ? "1" : c } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": l.cssFloat ? "cssFloat" : "styleFloat" }, style: function(a, b, c, d) {
        if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
            var e, f, g, h = n.camelCase(b),
                i = a.style;
            if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
            if (f = typeof c, "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try { i[b] = c } catch (j) {} } }, css: function(a, b, c, d) {
        var e, f, g, h = n.camelCase(b);
        return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Sa(a, b, d)), "normal" === f && b in $a && (f = $a[b]), "" === c || c ? (e = parseFloat(f), c === !0 || isFinite(e) ? e || 0 : f) : f } }), n.each(["height", "width"], function(a, b) { n.cssHooks[b] = { get: function(a, c, d) {
        return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function() {
            return fb(a, b, d) }) : fb(a, b, d) : void 0 }, set: function(a, c, d) {
        var e = d && Ra(a);
        return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0) } } }), l.opacity || (n.cssHooks.opacity = { get: function(a, b) {
        return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "" }, set: function(a, b) {
        var c = a.style,
            d = a.currentStyle,
            e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
            f = d && d.filter || c.filter || "";
        c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e) } }), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function(a, b) {
        return b ? Pa(a, { display: "inline-block" }, Sa, [a, "marginRight"]) : void 0 }), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, { marginLeft: 0 }, function() {
            return a.getBoundingClientRect().left }) : 0)) + "px" : void 0 }), n.each({ margin: "", padding: "", border: "Width" }, function(a, b) { n.cssHooks[a + b] = { expand: function(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
        return e } }, Na.test(a) || (n.cssHooks[a + b].set = db) }), n.fn.extend({ css: function(a, b) {
        return Y(this, function(a, b, c) {
            var d, e, f = {},
                g = 0;
            if (n.isArray(b)) {
                for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                return f }
            return void 0 !== c ? n.style(a, b, c) : n.css(a, b) }, a, b, arguments.length > 1) }, show: function() {
        return cb(this, !0) }, hide: function() {
        return cb(this) }, toggle: function(a) {
        return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() { W(this) ? n(this).show() : n(this).hide() }) } });

    function gb(a, b, c, d, e) {
        return new gb.prototype.init(a, b, c, d, e) }
    n.Tween = gb, gb.prototype = { constructor: gb, init: function(a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px") }, cur: function() {
        var a = gb.propHooks[this.prop];
        return a && a.get ? a.get(this) : gb.propHooks._default.get(this) }, run: function(a) {
        var b, c = gb.propHooks[this.prop];
        return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : gb.propHooks._default.set(this), this } }, gb.prototype.init.prototype = gb.prototype, gb.propHooks = { _default: { get: function(a) {
        var b;
        return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) }, set: function(a) { n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit) } } }, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = { set: function(a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, n.easing = { linear: function(a) {
        return a }, swing: function(a) {
        return .5 - Math.cos(a * Math.PI) / 2 }, _default: "swing" }, n.fx = gb.prototype.init, n.fx.step = {};
    var hb, ib, jb = /^(?:toggle|show|hide)$/,
        kb = /queueHooks$/;

    function lb() {
        return a.setTimeout(function() { hb = void 0 }), hb = n.now() }

    function mb(a, b) {
        var c, d = { height: a },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = V[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d }

    function nb(a, b, c) {
        for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d }

    function ob(a, b, c) {
        var d, e, f, g, h, i, j, k, m = this,
            o = {},
            p = a.style,
            q = a.nodeType && W(a),
            r = n._data(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() { h.unqueued || i() }), h.unqueued++, m.always(function() { m.always(function() { h.unqueued--, n.queue(a, "fx").length || h.empty.fire() }) })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function() { p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2] }));
        for (d in b)
            if (e = b[d], jb.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0 }
                o[d] = r && r[d] || n.style(a, d) } else j = void 0;
        if (n.isEmptyObject(o)) "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
        else { r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function() { n(a).hide() }), m.done(function() {
            var b;
            n._removeData(a, "fxshow");
            for (b in o) n.style(a, b, o[b]) });
            for (d in o) g = nb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0)) } }

    function pb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e }

    function qb(a, b, c) {
        var d, e, f = 0,
            g = qb.prefilters.length,
            h = n.Deferred().always(function() { delete i.elem }),
            i = function() {
                if (e) return !1;
                for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1) },
            j = h.promise({ elem: a, props: n.extend({}, b), opts: n.extend(!0, { specialEasing: {}, easing: n.easing._default }, c), originalProperties: b, originalOptions: c, startTime: hb || lb(), duration: c.duration, tweens: [], createTween: function(b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d }, stop: function(b) {
                var c = 0,
                    d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this } }),
            k = j.props;
        for (pb(k, j.opts.specialEasing); g > f; f++)
            if (d = qb.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
        return n.map(k, nb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always) }
    n.Animation = n.extend(qb, { tweeners: { "*": [function(a, b) {
        var c = this.createTween(a, b);
        return X(c.elem, a, U.exec(b), c), c }] }, tweener: function(a, b) { n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
        for (var c, d = 0, e = a.length; e > d; d++) c = a[d], qb.tweeners[c] = qb.tweeners[c] || [], qb.tweeners[c].unshift(b) }, prefilters: [ob], prefilter: function(a, b) { b ? qb.prefilters.unshift(a) : qb.prefilters.push(a) } }), n.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : { complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() { n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue) }, d }, n.fn.extend({ fadeTo: function(a, b, c, d) {
        return this.filter(W).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) }, animate: function(a, b, c, d) {
        var e = n.isEmptyObject(a),
            f = n.speed(b, c, d),
            g = function() {
                var b = qb(this, n.extend({}, a), f);
                (e || n._data(this, "finish")) && b.stop(!0) };
        return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g) }, stop: function(a, b, c) {
        var d = function(a) {
            var b = a.stop;
            delete a.stop, b(c) };
        return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
            var b = !0,
                e = null != a && a + "queueHooks",
                f = n.timers,
                g = n._data(this);
            if (e) g[e] && g[e].stop && d(g[e]);
            else
                for (e in g) g[e] && g[e].stop && kb.test(e) && d(g[e]);
            for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));!b && c || n.dequeue(this, a) }) }, finish: function(a) {
        return a !== !1 && (a = a || "fx"), this.each(function() {
            var b, c = n._data(this),
                d = c[a + "queue"],
                e = c[a + "queueHooks"],
                f = n.timers,
                g = d ? d.length : 0;
            for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish }) } }), n.each(["toggle", "show", "hide"], function(a, b) {
        var c = n.fn[b];
        n.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e) } }), n.each({ slideDown: mb("show"), slideUp: mb("hide"), slideToggle: mb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(a, b) { n.fn[a] = function(a, c, d) {
        return this.animate(b, a, c, d) } }), n.timers = [], n.fx.tick = function() {
        var a, b = n.timers,
            c = 0;
        for (hb = n.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
        b.length || n.fx.stop(), hb = void 0 }, n.fx.timer = function(a) { n.timers.push(a), a() ? n.fx.start() : n.timers.pop() }, n.fx.interval = 13, n.fx.start = function() { ib || (ib = a.setInterval(n.fx.tick, n.fx.interval)) }, n.fx.stop = function() { a.clearInterval(ib), ib = null }, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function(b, c) {
        return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function() { a.clearTimeout(e) } }) },
        function() {
            var a, b = d.createElement("input"),
                c = d.createElement("div"),
                e = d.createElement("select"),
                f = e.appendChild(d.createElement("option"));
            c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value }();
    var rb = /\r/g,
        sb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({ val: function(a) {
        var b, c, d, e = this[0]; {
            if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                    return null == a ? "" : a + "" })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e)) });
            if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c) } } }), n.extend({ valHooks: { option: { get: function(a) {
        var b = n.find.attr(a, "value");
        return null != b ? b : n.trim(n.text(a)).replace(sb, " ") } }, select: { get: function(a) {
        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
            if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                if (b = n(c).val(), f) return b;
                g.push(b) }
        return g }, set: function(a, b) {
        var c, d, e = a.options,
            f = n.makeArray(b),
            g = e.length;
        while (g--)
            if (d = e[g], n.inArray(n.valHooks.option.get(d), f) > -1) try { d.selected = c = !0 } catch (h) { d.scrollHeight } else d.selected = !1;
        return c || (a.selectedIndex = -1), e } } } }), n.each(["radio", "checkbox"], function() { n.valHooks[this] = { set: function(a, b) {
        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0 } }, l.checkOn || (n.valHooks[this].get = function(a) {
        return null === a.getAttribute("value") ? "on" : a.value }) });
    var tb, ub, vb = n.expr.attrHandle,
        wb = /^(?:checked|selected)$/i,
        xb = l.getSetAttribute,
        yb = l.input;
    n.fn.extend({ attr: function(a, b) {
        return Y(this, n.attr, a, b, arguments.length > 1) }, removeAttr: function(a) {
        return this.each(function() { n.removeAttr(this, a) }) } }), n.extend({ attr: function(a, b, c) {
        var d, e, f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d)) }, attrHooks: { type: { set: function(a, b) {
        if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b), c && (a.value = c), b } } } }, removeAttr: function(a, b) {
        var c, d, e = 0,
            f = b && b.match(G);
        if (f && 1 === a.nodeType)
            while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? yb && xb || !wb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(xb ? c : d) } }), ub = { set: function(a, b, c) {
        return b === !1 ? n.removeAttr(a, c) : yb && xb || !wb.test(c) ? a.setAttribute(!xb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c } }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = vb[b] || n.find.attr;
        yb && xb || !wb.test(b) ? vb[b] = function(a, b, d) {
            var e, f;
            return d || (f = vb[b], vb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, vb[b] = f), e } : vb[b] = function(a, b, c) {
            return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null } }), yb && xb || (n.attrHooks.value = { set: function(a, b, c) {
        return n.nodeName(a, "input") ? void(a.defaultValue = b) : tb && tb.set(a, b, c) } }), xb || (tb = { set: function(a, b, c) {
        var d = a.getAttributeNode(c);
        return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0 } }, vb.id = vb.name = vb.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null }, n.valHooks.button = { get: function(a, b) {
        var c = a.getAttributeNode(b);
        return c && c.specified ? c.value : void 0 }, set: tb.set }, n.attrHooks.contenteditable = { set: function(a, b, c) { tb.set(a, "" === b ? !1 : b, c) } }, n.each(["width", "height"], function(a, b) { n.attrHooks[b] = { set: function(a, c) {
        return "" === c ? (a.setAttribute(b, "auto"), c) : void 0 } } })), l.style || (n.attrHooks.style = { get: function(a) {
        return a.style.cssText || void 0 }, set: function(a, b) {
        return a.style.cssText = b + "" } });
    var zb = /^(?:input|select|textarea|button|object)$/i,
        Ab = /^(?:a|area)$/i;
    n.fn.extend({ prop: function(a, b) {
        return Y(this, n.prop, a, b, arguments.length > 1) }, removeProp: function(a) {
        return a = n.propFix[a] || a, this.each(function() {
            try { this[a] = void 0, delete this[a] } catch (b) {} }) } }), n.extend({ prop: function(a, b, c) {
        var d, e, f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b] }, propHooks: { tabIndex: { get: function(a) {
        var b = n.find.attr(a, "tabindex");
        return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), l.hrefNormalized || n.each(["href", "src"], function(a, b) { n.propHooks[b] = { get: function(a) {
        return a.getAttribute(b, 4) } } }), l.optSelected || (n.propHooks.selected = { get: function(a) {
        var b = a.parentNode;
        return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null }, set: function(a) {
        var b = a.parentNode;
        b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex) } }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { n.propFix[this.toLowerCase()] = this }), l.enctype || (n.propFix.enctype = "encoding");
    var Bb = /[\t\r\n\f]/g;

    function Cb(a) {
        return n.attr(a, "class") || "" }
    n.fn.extend({ addClass: function(a) {
        var b, c, d, e, f, g, h, i = 0;
        if (n.isFunction(a)) return this.each(function(b) { n(this).addClass(a.call(this, b, Cb(this))) });
        if ("string" == typeof a && a) { b = a.match(G) || [];
            while (c = this[i++])
                if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) { g = 0;
                    while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                    h = n.trim(d), e !== h && n.attr(c, "class", h) } }
        return this }, removeClass: function(a) {
        var b, c, d, e, f, g, h, i = 0;
        if (n.isFunction(a)) return this.each(function(b) { n(this).removeClass(a.call(this, b, Cb(this))) });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof a && a) { b = a.match(G) || [];
            while (c = this[i++])
                if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) { g = 0;
                    while (f = b[g++])
                        while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                    h = n.trim(d), e !== h && n.attr(c, "class", h) } }
        return this }, toggleClass: function(a, b) {
        var c = typeof a;
        return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) { n(this).toggleClass(a.call(this, c, Cb(this), b), b) }) : this.each(function() {
            var b, d, e, f;
            if ("string" === c) { d = 0, e = n(this), f = a.match(G) || [];
                while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b) } else void 0 !== a && "boolean" !== c || (b = Cb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || "")) }) }, hasClass: function(a) {
        var b, c, d = 0;
        b = " " + a + " ";
        while (c = this[d++])
            if (1 === c.nodeType && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1) return !0;
        return !1 } }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) { n.fn[b] = function(a, c) {
        return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), n.fn.extend({ hover: function(a, b) {
        return this.mouseenter(a).mouseleave(b || a) } });
    var Db = a.location,
        Eb = n.now(),
        Fb = /\?/,
        Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = n.trim(b + "");
        return e && !n.trim(e.replace(Gb, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "") })) ? Function("return " + e)() : n.error("Invalid JSON: " + b) }, n.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try { a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b)) } catch (e) { c = void 0 }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c };
    var Hb = /#.*$/,
        Ib = /([?&])_=[^&]*/,
        Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Lb = /^(?:GET|HEAD)$/,
        Mb = /^\/\//,
        Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Ob = {},
        Pb = {},
        Qb = "*/".concat("*"),
        Rb = Db.href,
        Sb = Nb.exec(Rb.toLowerCase()) || [];

    function Tb(a) {
        return function(b, c) { "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c))
                while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c) } }

    function Ub(a, b, c, d) {
        var e = {},
            f = a === Pb;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1) }), i }
        return g(b.dataTypes[0]) || !e["*"] && g("*") }

    function Vb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && n.extend(!0, a, c), a }

    function Wb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) { i.unshift(g);
                    break }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) { f = g;
                    break }
                d || (d = g) }
            f = f || d }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0 }

    function Xb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f], !g)
                        for (e in j)
                            if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) { g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                break }
                    if (g !== !0)
                        if (g && a["throws"]) b = g(b);
                        else try { b = g(b) } catch (l) {
                            return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f } } }
        return { state: "success", data: b } }
    n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Rb, type: "GET", isLocal: Kb.test(Sb[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Qb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(a, b) {
        return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a) }, ajaxPrefilter: Tb(Ob), ajaxTransport: Tb(Pb), ajax: function(b, c) { "object" == typeof b && (c = b, b = void 0), c = c || {};
        var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c),
            m = l.context || l,
            o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
            p = n.Deferred(),
            q = n.Callbacks("once memory"),
            r = l.statusCode || {},
            s = {},
            t = {},
            u = 0,
            v = "canceled",
            w = { readyState: 0, getResponseHeader: function(a) {
                var b;
                if (2 === u) {
                    if (!k) { k = {};
                        while (b = Jb.exec(g)) k[b[1].toLowerCase()] = b[2] }
                    b = k[a.toLowerCase()] }
                return null == b ? null : b }, getAllResponseHeaders: function() {
                return 2 === u ? g : null }, setRequestHeader: function(a, b) {
                var c = a.toLowerCase();
                return u || (a = t[c] = t[c] || a, s[a] = b), this }, overrideMimeType: function(a) {
                return u || (l.mimeType = a), this }, statusCode: function(a) {
                var b;
                if (a)
                    if (2 > u)
                        for (b in a) r[b] = [r[b], a[b]];
                    else w.always(a[w.status]);
                return this }, abort: function(a) {
                var b = a || v;
                return j && j.abort(b), y(0, b), this } };
        if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""], null == l.crossDomain && (d = Nb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Sb[1] && d[2] === Sb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Ub(Ob, l, c, w), 2 === u) return w;
        i = n.event && l.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Lb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "") : l.accepts["*"]);
        for (e in l.headers) w.setRequestHeader(e, l.headers[e]);
        if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u)) return w.abort();
        v = "abort";
        for (e in { success: 1, error: 1, complete: 1 }) w[e](l[e]);
        if (j = Ub(Pb, l, c, w)) {
            if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) return w;
            l.async && l.timeout > 0 && (h = a.setTimeout(function() { w.abort("timeout") }, l.timeout));
            try { u = 1, j.send(s, y) } catch (x) {
                if (!(2 > u)) throw x;
                y(-1, x) } } else y(-1, "No Transport");

        function y(b, c, d, e) {
            var k, s, t, v, x, y = c;
            2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Wb(l, w, d)), v = Xb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), x = w.getResponseHeader("etag"), x && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop"))) }
        return w }, getJSON: function(a, b, c) {
        return n.get(a, b, c, "json") }, getScript: function(a, b) {
        return n.get(a, void 0, b, "script") } }), n.each(["get", "post"], function(a, b) { n[b] = function(a, c, d, e) {
        return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({ url: a, type: b, dataType: e, data: c, success: d }, n.isPlainObject(a) && a)) } }), n._evalUrl = function(a) {
        return n.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 }) }, n.fn.extend({ wrapAll: function(a) {
        if (n.isFunction(a)) return this.each(function(b) { n(this).wrapAll(a.call(this, b)) });
        if (this[0]) {
            var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                var a = this;
                while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                return a }).append(this) }
        return this }, wrapInner: function(a) {
        return n.isFunction(a) ? this.each(function(b) { n(this).wrapInner(a.call(this, b)) }) : this.each(function() {
            var b = n(this),
                c = b.contents();
            c.length ? c.wrapAll(a) : b.append(a) }) }, wrap: function(a) {
        var b = n.isFunction(a);
        return this.each(function(c) { n(this).wrapAll(b ? a.call(this, c) : a) }) }, unwrap: function() {
        return this.parent().each(function() { n.nodeName(this, "body") || n(this).replaceWith(this.childNodes) }).end() } });

    function Yb(a) {
        return a.style && a.style.display || n.css(a, "display") }

    function Zb(a) {
        if (!n.contains(a.ownerDocument || d, a)) return !0;
        while (a && 1 === a.nodeType) {
            if ("none" === Yb(a) || "hidden" === a.type) return !0;
            a = a.parentNode }
        return !1 }
    n.expr.filters.hidden = function(a) {
        return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Zb(a) }, n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a) };
    var $b = /%20/g,
        _b = /\[\]$/,
        ac = /\r?\n/g,
        bc = /^(?:submit|button|image|reset|file)$/i,
        cc = /^(?:input|select|textarea|keygen)/i;

    function dc(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) { c || _b.test(a) ? d(a, e) : dc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d) });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) dc(a + "[" + e + "]", b[e], c, d) }
    n.param = function(a, b) {
        var c, d = [],
            e = function(a, b) { b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b) };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() { e(this.name, this.value) });
        else
            for (c in a) dc(c, a[c], b, e);
        return d.join("&").replace($b, "+") }, n.fn.extend({ serialize: function() {
        return n.param(this.serializeArray()) }, serializeArray: function() {
        return this.map(function() {
            var a = n.prop(this, "elements");
            return a ? n.makeArray(a) : this }).filter(function() {
            var a = this.type;
            return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a) && (this.checked || !Z.test(a)) }).map(function(a, b) {
            var c = n(this).val();
            return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                return { name: b.name, value: a.replace(ac, "\r\n") } }) : { name: b.name, value: c.replace(ac, "\r\n") } }).get() } }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic() } : hc;
    var ec = 0,
        fc = {},
        gc = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in fc) fc[a](void 0, !0) }), l.cors = !!gc && "withCredentials" in gc, gc = l.ajax = !!gc, gc && n.ajaxTransport(function(b) {
        if (!b.crossDomain || l.cors) {
            var c;
            return { send: function(d, e) {
                var f, g = b.xhr(),
                    h = ++ec;
                if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (f in b.xhrFields) g[f] = b.xhrFields[f];
                b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                g.send(b.hasContent && b.data || null), c = function(a, d) {
                    var f, i, j;
                    if (c && (d || 4 === g.readyState))
                        if (delete fc[h], c = void 0, g.onreadystatechange = n.noop, d) 4 !== g.readyState && g.abort();
                        else { j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);
                            try { i = g.statusText } catch (k) { i = "" }
                            f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404 }
                    j && e(f, i, j, g.getAllResponseHeaders()) }, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = fc[h] = c : c() }, abort: function() { c && c(void 0, !0) } } } });

    function hc() {
        try {
            return new a.XMLHttpRequest } catch (b) {} }

    function ic() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP") } catch (b) {} }
    n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(a) {
        return n.globalEval(a), a } } }), n.ajaxPrefilter("script", function(a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1) }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = d.head || n("head")[0] || d.documentElement;
            return { send: function(e, f) { b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success")) }, c.insertBefore(b, c.firstChild) }, abort: function() { b && b.onload(void 0, !0) } } } });
    var jc = [],
        kc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
        var a = jc.pop() || n.expando + "_" + Eb++;
        return this[a] = !0, a } }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(kc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function() { g = arguments }, d.always(function() { void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, jc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0 }), "script") : void 0 }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null; "boolean" == typeof b && (c = b, b = !1), b = b || d;
        var e = x.exec(a),
            f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes)) };
    var lc = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && lc) return lc.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function(a) { f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a) }).always(c && function(a, b) { g.each(function() { c.apply(this, f || [a.responseText, b, a]) }) }), this }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) { n.fn[b] = function(a) {
        return this.on(b, a) } }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem }).length };

    function mc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1 }
    n.offset = { setOffset: function(a, b, c) {
        var d, e, f, g, h, i, j, k = n.css(a, "position"),
            l = n(a),
            m = {}; "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m) } }, n.fn.extend({ offset: function(a) {
        if (arguments.length) return void 0 === a ? this : this.each(function(b) { n.offset.setOffset(this, a, b) });
        var b, c, d = { top: 0, left: 0 },
            e = this[0],
            f = e && e.ownerDocument;
        if (f) return b = f.documentElement, n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = mc(f), { top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0), left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0) }) : d }, position: function() {
        if (this[0]) {
            var a, b, c = { top: 0, left: 0 },
                d = this[0];
            return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), { top: b.top - c.top - n.css(d, "marginTop", !0), left: b.left - c.left - n.css(d, "marginLeft", !0) } } }, offsetParent: function() {
        return this.map(function() {
            var a = this.offsetParent;
            while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
            return a || Qa }) } }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function(d) {
            return Y(this, function(a, d, e) {
                var f = mc(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e) }, a, d, arguments.length, null) } }), n.each(["top", "left"], function(a, b) { n.cssHooks[b] = Ua(l.pixelPosition, function(a, c) {
        return c ? (c = Sa(a, b), Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0 }) }), n.each({ Height: "height", Width: "width" }, function(a, b) { n.each({ padding: "inner" + a, content: b, "": "outer" + a }, function(c, d) { n.fn[d] = function(d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
            g = c || (d === !0 || e === !0 ? "margin" : "border");
        return Y(this, function(b, c, d) {
            var e;
            return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g) }, b, f ? d : void 0, f, null) } }) }), n.fn.extend({ bind: function(a, b, c) {
        return this.on(a, null, b, c) }, unbind: function(a, b) {
        return this.off(a, null, b) }, delegate: function(a, b, c, d) {
        return this.on(b, a, c, d) }, undelegate: function(a, b, c) {
        return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) } }), n.fn.size = function() {
        return this.length }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n });
    var nc = a.jQuery,
        oc = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = oc), b && a.jQuery === n && (a.jQuery = nc), n }, b || (a.jQuery = a.$ = n), n });
    jQuery.noConflict(); } catch (e) { console.error('Error in file:http://webnus.biz/themes/michigan/kids/wp-includes/js/jquery/jquery.js?ver=1.12.4; Error:' + e.message); };
try { "undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    function(a, b, c) {
        function d(c) {
            var d = b.console;
            f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace())) }

        function e(b, c, e, f) {
            if (Object.defineProperty) try {
                return void Object.defineProperty(b, c, { configurable: !0, enumerable: !0, get: function() {
                    return d(f), e }, set: function(a) { d(f), e = a } }) } catch (g) {}
            a._definePropertyBroken = !0, b[c] = e }
        a.migrateVersion = "1.4.1";
        var f = {};
        a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function() { f = {}, a.migrateWarnings.length = 0 }, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
        var g = a("<input/>", { size: 1 }).attr("size") && a.attrFn,
            h = a.attr,
            i = a.attrHooks.value && a.attrHooks.value.get || function() {
                    return null },
            j = a.attrHooks.value && a.attrHooks.value.set || function() {
                    return c },
            k = /^(?:input|button)$/i,
            l = /^[238]$/,
            m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            n = /^(?:checked|selected)$/i;
        e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function(b, e, f, i) {
            var j = e.toLowerCase(),
                o = b && b.nodeType;
            return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = { get: function(b, d) {
                var e, f = a.prop(b, d);
                return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c }, set: function(b, c, d) {
                var e;
                return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d } }, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f)) }, a.attrHooks.value = { get: function(a, b) {
            var c = (a.nodeName || "").toLowerCase();
            return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null) }, set: function(a, b) {
            var c = (a.nodeName || "").toLowerCase();
            return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void(a.value = b)) } };
        var o, p, q = a.fn.init,
            r = a.find,
            s = a.parseJSON,
            t = /^\s*</,
            u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
            w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
        a.fn.init = function(b, e, f) {
            var g, h;
            return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h) }, a.fn.init.prototype = a.fn, a.find = function(a) {
            var b = Array.prototype.slice.call(arguments);
            if ("string" == typeof a && u.test(a)) try { document.querySelector(a) } catch (c) { a = a.replace(v, function(a, b, c, d) {
                return "[" + b + c + '"' + d + '"]' });
                try { document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a } catch (e) { d("Attribute selector with '#' was not fixed: " + b[0]) } }
            return r.apply(this, b) };
        var x;
        for (x in r) Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
        a.parseJSON = function(a) {
            return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null) }, a.uaMatch = function(a) { a = a.toLowerCase();
            var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
            return { browser: b[1] || "", version: b[2] || "0" } }, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function() {
            function b(a, c) {
                return new b.fn.init(a, c) }
            a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function(d, e) {
                var f = a.fn.init.call(this, d, e, c);
                return f instanceof b ? f : b(f) }, b.fn.init.prototype = b.fn;
            var c = b(document);
            return d("jQuery.sub() is deprecated"), b }, a.fn.size = function() {
            return d("jQuery.fn.size() is deprecated; use the .length property"), this.length };
        var y = !1;
        a.swap && a.each(["height", "width", "reliableMarginRight"], function(b, c) {
            var d = a.cssHooks[c] && a.cssHooks[c].get;
            d && (a.cssHooks[c].get = function() {
                var a;
                return y = !0, a = d.apply(this, arguments), y = !1, a }) }), a.swap = function(a, b, c, e) {
            var f, g, h = {};
            y || d("jQuery.swap() is undocumented and deprecated");
            for (g in b) h[g] = a.style[g], a.style[g] = b[g];
            f = c.apply(a, e || []);
            for (g in b) a.style[g] = h[g];
            return f }, a.ajaxSetup({ converters: { "text json": a.parseJSON } });
        var z = a.fn.data;
        a.fn.data = function(b) {
            var e, f, g = this[0];
            return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f) };
        var A = /\/(java|ecma)script/i;
        a.clean || (a.clean = function(b, c, e, f) { c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated");
            var g, h, i, j, k = [];
            if (a.merge(k, a.buildFragment(b, c).childNodes), e)
                for (i = function(a) {
                    return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0 }, g = 0; null != (h = k[g]); g++) a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length));
            return k });
        var B = a.event.add,
            C = a.event.remove,
            D = a.event.trigger,
            E = a.fn.toggle,
            F = a.fn.live,
            G = a.fn.die,
            H = a.fn.load,
            I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
            J = new RegExp("\\b(?:" + I + ")\\b"),
            K = /(?:^|\s)hover(\.\S+|)\b/,
            L = function(b) {
                return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1")) };
        a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function(a, b, c, e, f) { a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f) }, a.event.remove = function(a, b, c, d, e) { C.call(this, a, L(b) || "", c, d, e) }, a.each(["load", "unload", "error"], function(b, c) { a.fn[c] = function() {
            var a = Array.prototype.slice.call(arguments, 0);
            return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this)) } }), a.fn.toggle = function(b, c) {
            if (!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments);
            d("jQuery.fn.toggle(handler, handler...) is deprecated");
            var e = arguments,
                f = b.guid || a.guid++,
                g = 0,
                h = function(c) {
                    var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
                    return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1 };
            for (h.guid = f; g < e.length;) e[g++].guid = f;
            return this.click(h) }, a.fn.live = function(b, c, e) {
            return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this) }, a.fn.die = function(b, c) {
            return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this) }, a.event.trigger = function(a, b, c, e) {
            return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e) }, a.each(I.split("|"), function(b, c) { a.event.special[c] = { setup: function() {
            var b = this;
            return b !== document && (a.event.add(document, c + "." + a.guid, function() { a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0) }), a._data(this, c, a.guid++)), !1 }, teardown: function() {
            return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1 } } }), a.event.special.ready = { setup: function() { this === document && d("'ready' event is deprecated") } };
        var M = a.fn.andSelf || a.fn.addBack,
            N = a.fn.find;
        if (a.fn.andSelf = function() {
                return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments) }, a.fn.find = function(a) {
                var b = N.apply(this, arguments);
                return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b }, a.Callbacks) {
            var O = a.Deferred,
                P = [
                    ["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]
                ];
            a.Deferred = function(b) {
                var c = O(),
                    e = c.promise();
                return c.pipe = e.pipe = function() {
                    var b = arguments;
                    return d("deferred.pipe() is deprecated"), a.Deferred(function(d) { a.each(P, function(f, g) {
                        var h = a.isFunction(b[f]) && b[f];
                        c[g[1]](function() {
                            var b = h && h.apply(this, arguments);
                            b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments) }) }), b = null }).promise() }, c.isResolved = function() {
                    return d("deferred.isResolved is deprecated"), "resolved" === c.state() }, c.isRejected = function() {
                    return d("deferred.isRejected is deprecated"), "rejected" === c.state() }, b && b.call(c, c), c } } }(jQuery, window); } catch (e) { console.error('Error in file:http://webnus.biz/themes/michigan/kids/wp-includes/js/jquery/jquery-migrate.min.js?ver=1.4.1; Error:' + e.message); };
try {
    (function(e, t, n, r) { "use strict";
        var i = n("html"),
            s = n(e),
            o = n(t),
            u = n.esgbox = function() { u.open.apply(this, arguments) },
            a = navigator.userAgent.match(/msie/i),
            f = null,
            l = t.createTouch !== r,
            c = function(e) {
                return e && e.hasOwnProperty && e instanceof n },
            h = function(e) {
                return e && n.type(e) === "string" },
            p = function(e) {
                return h(e) && e.indexOf("%") > 0 },
            d = function(e) {
                return e && !(e.style.overflow && e.style.overflow === "hidden") && (e.clientWidth && e.scrollWidth > e.clientWidth || e.clientHeight && e.scrollHeight > e.clientHeight) },
            v = function(e, t) {
                var n = parseInt(e, 10) || 0;
                if (t && p(e)) { n = u.getViewport()[t] / 100 * n }
                return Math.ceil(n) },
            m = function(e, t) {
                return v(e, t) + "px" };
        n.extend(u, { version: "2.1.5", defaults: { padding: 15, margin: 20, width: 800, height: 600, minWidth: 100, minHeight: 100, maxWidth: 9999, maxHeight: 9999, pixelRatio: 1, autoSize: true, autoHeight: false, autoWidth: false, autoResize: true, autoCenter: !l, fitToView: true, aspectRatio: false, topRatio: .5, leftRatio: .5, scrolling: "auto", wrapCSS: "", arrows: true, closeBtn: true, closeClick: false, nextClick: false, mouseWheel: true, autoPlay: false, playSpeed: 3e3, preload: 3, modal: false, loop: true, ajax: { dataType: "html", headers: { "X-esgbox": true } }, iframe: { scrolling: "auto", preload: true }, swf: { wmode: "transparent", allowfullscreen: "true", allowscriptaccess: "always" }, keys: { next: { 13: "left", 34: "up", 39: "left", 40: "up" }, prev: { 8: "right", 33: "down", 37: "right", 38: "down" }, close: [27], play: [32], toggle: [70] }, direction: { next: "left", prev: "right" }, scrollOutside: true, index: 0, type: null, href: null, content: null, title: null, tpl: { wrap: '<div class="esgbox-wrap" tabIndex="-1"><div class="esgbox-skin"><div class="esgbox-outer"><div class="esgbox-inner"></div></div></div></div>', image: '<img class="esgbox-image" src="{href}" alt="" />', iframe: '<iframe id="esgbox-frame{rnd}" name="esgbox-frame{rnd}" class="esgbox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (a ? ' allowtransparency="true"' : "") + "></iframe>", error: '<p class="esgbox-error">The requested content cannot be loaded.<br/>Please try again later.</p>', closeBtn: '<a title="Close" class="esgbox-item esgbox-close" href="javascript:;"></a>', next: '<a title="Next" class="esgbox-nav esgbox-next" href="javascript:;"><span></span></a>', prev: '<a title="Previous" class="esgbox-nav esgbox-prev" href="javascript:;"><span></span></a>' }, openEffect: "fade", openSpeed: 250, openEasing: "swing", openOpacity: true, openMethod: "zoomIn", closeEffect: "fade", closeSpeed: 250, closeEasing: "swing", closeOpacity: true, closeMethod: "zoomOut", nextEffect: "elastic", nextSpeed: 250, nextEasing: "swing", nextMethod: "changeIn", prevEffect: "elastic", prevSpeed: 250, prevEasing: "swing", prevMethod: "changeOut", helpers: { overlay: true, title: true }, onCancel: n.noop, beforeLoad: n.noop, afterLoad: n.noop, beforeShow: n.noop, afterShow: n.noop, beforeChange: n.noop, beforeClose: n.noop, afterClose: n.noop }, group: {}, opts: {}, previous: null, coming: null, current: null, isActive: false, isOpen: false, isOpened: false, wrap: null, skin: null, outer: null, inner: null, player: { timer: null, isActive: false }, ajaxLoad: null, imgPreload: null, transitions: {}, helpers: {}, open: function(e, t) {
            if (!e) {
                return }
            if (!n.isPlainObject(t)) { t = {} }
            if (false === u.close(true)) {
                return }
            if (!n.isArray(e)) { e = c(e) ? n(e).get() : [e] }
            n.each(e, function(i, s) {
                var o = {},
                    a, f, l, p, d, v, m;
                if (n.type(s) === "object") {
                    if (s.nodeType) { s = n(s) }
                    if (c(s)) { o = { href: s.data("esgbox-href") || s.attr("href"), title: s.data("esgbox-title") || s.attr("title"), isDom: true, element: s };
                        if (n.metadata) { n.extend(true, o, s.metadata()) } } else { o = s } }
                a = t.href || o.href || (h(s) ? s : null);
                f = t.title !== r ? t.title : o.title || "";
                l = t.content || o.content;
                p = l ? "html" : t.type || o.type;
                if (!p && o.isDom) { p = s.data("esgbox-type");
                    if (!p) { d = s.prop("class").match(/esgbox\.(\w+)/);
                        p = d ? d[1] : null } }
                if (h(a)) {
                    if (!p) {
                        if (u.isImage(a)) { p = "image" } else if (u.isSWF(a)) { p = "swf" } else if (a.charAt(0) === "#") { p = "inline" } else if (h(s)) { p = "html";
                            l = s } }
                    if (p === "ajax") { v = a.split(/\s+/, 2);
                        a = v.shift();
                        m = v.shift() } }
                if (!l) {
                    if (p === "inline") {
                        if (a) { l = n(h(a) ? a.replace(/.*(?=#[^\s]+$)/, "") : a) } else if (o.isDom) { l = s } } else if (p === "html") { l = a } else if (!p && !a && o.isDom) { p = "inline";
                        l = s } }
                n.extend(o, { href: a, type: p, content: l, title: f, selector: m });
                e[i] = o });
            u.opts = n.extend(true, {}, u.defaults, t);
            if (t.keys !== r) { u.opts.keys = t.keys ? n.extend({}, u.defaults.keys, t.keys) : false }
            u.group = e;
            return u._start(u.opts.index) }, cancel: function() {
            var e = u.coming;
            if (!e || false === u.trigger("onCancel")) {
                return }
            u.hideLoading();
            if (u.ajaxLoad) { u.ajaxLoad.abort() }
            u.ajaxLoad = null;
            if (u.imgPreload) { u.imgPreload.onload = u.imgPreload.onerror = null }
            if (e.wrap) { e.wrap.stop(true, true).trigger("onReset").remove() }
            u.coming = null;
            if (!u.current) { u._afterZoomOut(e) } }, close: function(e) { u.cancel();
            if (false === u.trigger("beforeClose")) {
                return }
            u.unbindEvents();
            if (!u.isActive) {
                return }
            if (!u.isOpen || e === true) { n(".esgbox-wrap").stop(true).trigger("onReset").remove();
                u._afterZoomOut() } else { u.isOpen = u.isOpened = false;
                u.isClosing = true;
                n(".esgbox-item, .esgbox-nav").remove();
                u.wrap.stop(true, true).removeClass("esgbox-opened");
                u.transitions[u.current.closeMethod]() } }, play: function(e) {
            var t = function() { clearTimeout(u.player.timer) },
                n = function() { t();
                    if (u.current && u.player.isActive) { u.player.timer = setTimeout(u.next, u.current.playSpeed) } },
                r = function() { t();
                    o.unbind(".player");
                    u.player.isActive = false;
                    u.trigger("onPlayEnd") },
                i = function() {
                    if (u.current && (u.current.loop || u.current.index < u.group.length - 1)) { u.player.isActive = true;
                        o.bind({ "onCancel.player beforeClose.player": r, "onUpdate.player": n, "beforeLoad.player": t });
                        n();
                        u.trigger("onPlayStart") } };
            if (e === true || !u.player.isActive && e !== false) { i() } else { r() } }, next: function(e) {
            var t = u.current;
            if (t) {
                if (!h(e)) { e = t.direction.next }
                u.jumpto(t.index + 1, e, "next") } }, prev: function(e) {
            var t = u.current;
            if (t) {
                if (!h(e)) { e = t.direction.prev }
                u.jumpto(t.index - 1, e, "prev") } }, jumpto: function(e, t, n) {
            var i = u.current;
            if (!i) {
                return }
            e = v(e);
            u.direction = t || i.direction[e >= i.index ? "next" : "prev"];
            u.router = n || "jumpto";
            if (i.loop) {
                if (e < 0) { e = i.group.length + e % i.group.length }
                e = e % i.group.length }
            if (i.group[e] !== r) { u.cancel();
                u._start(e) } }, reposition: function(e, t) {
            var r = u.current,
                i = r ? r.wrap : null,
                s;
            if (i) { s = u._getPosition(t);
                if (e && e.type === "scroll") { delete s.position;
                    i.stop(true, true).animate(s, 200) } else { i.css(s);
                    r.pos = n.extend({}, r.dim, s) } } }, update: function(e) {
            var t = e && e.type,
                n = !t || t === "orientationchange";
            if (n) { clearTimeout(f);
                f = null }
            if (!u.isOpen || f) {
                return }
            f = setTimeout(function() {
                var r = u.current;
                if (!r || u.isClosing) {
                    return }
                u.wrap.removeClass("esgbox-tmp");
                if (n || t === "load" || t === "resize" && r.autoResize) { u._setDimension() }
                if (!(t === "scroll" && r.canShrink)) { u.reposition(e) }
                u.trigger("onUpdate");
                f = null }, n && !l ? 0 : 300) }, toggle: function(e) {
            if (u.isOpen) { u.current.fitToView = n.type(e) === "boolean" ? e : !u.current.fitToView;
                if (l) { u.wrap.removeAttr("style").addClass("esgbox-tmp");
                    u.trigger("onUpdate") }
                u.update() } }, hideLoading: function() { o.unbind(".loading");
            n("#esgbox-loading").remove() }, showLoading: function() {
            var e, t;
            u.hideLoading();
            e = n('<div id="esgbox-loading"><div></div></div>').click(u.cancel).appendTo("body");
            o.bind("keydown.loading", function(e) {
                if ((e.which || e.keyCode) === 27) { e.preventDefault();
                    u.cancel() } });
            if (!u.defaults.fixed) { t = u.getViewport();
                e.css({ position: "absolute", top: t.h * .5 + t.y, left: t.w * .5 + t.x }) } }, getViewport: function() {
            var t = u.current && u.current.locked || false,
                n = { x: s.scrollLeft(), y: s.scrollTop() };
            if (t) { n.w = t[0].clientWidth;
                n.h = t[0].clientHeight } else { n.w = l && e.innerWidth ? e.innerWidth : s.width();
                n.h = l && e.innerHeight ? e.innerHeight : s.height() }
            return n }, unbindEvents: function() {
            if (u.wrap && c(u.wrap)) { u.wrap.unbind(".fb") }
            o.unbind(".fb");
            s.unbind(".fb") }, bindEvents: function() {
            var e = u.current,
                t;
            if (!e) {
                return }
            s.bind("orientationchange.fb" + (l ? "" : " resize.fb") + (e.autoCenter && !e.locked ? " scroll.fb" : ""), u.update);
            t = e.keys;
            if (t) { o.bind("keydown.fb", function(i) {
                var s = i.which || i.keyCode,
                    o = i.target || i.srcElement;
                if (s === 27 && u.coming) {
                    return false }
                if (!i.ctrlKey && !i.altKey && !i.shiftKey && !i.metaKey && !(o && (o.type || n(o).is("[contenteditable]")))) { n.each(t, function(t, o) {
                    if (e.group.length > 1 && o[s] !== r) { u[t](o[s]);
                        i.preventDefault();
                        return false }
                    if (n.inArray(s, o) > -1) { u[t]();
                        i.preventDefault();
                        return false } }) } }) }
            if (n.fn.mousewheel && e.mouseWheel) { u.wrap.bind("mousewheel.fb", function(t, r, i, s) {
                var o = t.target || null,
                    a = n(o),
                    f = false;
                while (a.length) {
                    if (f || a.is(".esgbox-skin") || a.is(".esgbox-wrap")) {
                        break }
                    f = d(a[0]);
                    a = n(a).parent() }
                if (r !== 0 && !f) {
                    if (u.group.length > 1 && !e.canShrink) {
                        if (s > 0 || i > 0) { u.prev(s > 0 ? "down" : "left") } else if (s < 0 || i < 0) { u.next(s < 0 ? "up" : "right") }
                        t.preventDefault() } } }) } }, trigger: function(e, t) {
            var r, i = t || u.coming || u.current;
            if (!i) {
                return }
            if (n.isFunction(i[e])) { r = i[e].apply(i, Array.prototype.slice.call(arguments, 1)) }
            if (r === false) {
                return false }
            if (i.helpers) { n.each(i.helpers, function(t, r) {
                if (r && u.helpers[t] && n.isFunction(u.helpers[t][e])) { u.helpers[t][e](n.extend(true, {}, u.helpers[t].defaults, r), i) } }) }
            o.trigger(e) }, isImage: function(e) {
            return h(e) && e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i) }, isSWF: function(e) {
            return h(e) && e.match(/\.(swf)((\?|#).*)?$/i) }, _start: function(e) {
            var t = {},
                r, i, s, o, a;
            e = v(e);
            r = u.group[e] || null;
            if (!r) {
                return false }
            t = n.extend(true, {}, u.opts, r);
            o = t.margin;
            a = t.padding;
            if (n.type(o) === "number") { t.margin = [o, o, o, o] }
            if (n.type(a) === "number") { t.padding = [a, a, a, a] }
            if (t.modal) { n.extend(true, t, { closeBtn: false, closeClick: false, nextClick: false, arrows: false, mouseWheel: false, keys: null, helpers: { overlay: { closeClick: false } } }) }
            if (t.autoSize) { t.autoWidth = t.autoHeight = true }
            if (t.width === "auto") { t.autoWidth = true }
            if (t.height === "auto") { t.autoHeight = true }
            t.group = u.group;
            t.index = e;
            u.coming = t;
            if (false === u.trigger("beforeLoad")) { u.coming = null;
                return }
            s = t.type;
            i = t.href;
            if (!s) { u.coming = null;
                if (u.current && u.router && u.router !== "jumpto") { u.current.index = e;
                    return u[u.router](u.direction) }
                return false }
            u.isActive = true;
            if (s === "image" || s === "swf") { t.autoHeight = t.autoWidth = false;
                t.scrolling = "visible" }
            if (s === "image") { t.aspectRatio = true }
            if (s === "iframe" && l) { t.scrolling = "scroll" }
            t.wrap = n(t.tpl.wrap).addClass("esgbox-" + (l ? "mobile" : "desktop") + " esgbox-type-" + s + " esgbox-tmp " + t.wrapCSS).appendTo(t.parent || "body");
            n.extend(t, { skin: n(".esgbox-skin", t.wrap), outer: n(".esgbox-outer", t.wrap), inner: n(".esgbox-inner", t.wrap) });
            n.each(["Top", "Right", "Bottom", "Left"], function(e, n) { t.skin.css("padding" + n, m(t.padding[e])) });
            u.trigger("onReady");
            if (s === "inline" || s === "html") {
                if (!t.content || !t.content.length) {
                    return u._error("content") } } else if (!i) {
                return u._error("href") }
            if (s === "image") { u._loadImage() } else if (s === "ajax") { u._loadAjax() } else if (s === "iframe") { u._loadIframe() } else { u._afterLoad() } }, _error: function(e) { n.extend(u.coming, { type: "html", autoWidth: true, autoHeight: true, minWidth: 0, minHeight: 0, scrolling: "no", hasError: e, content: u.coming.tpl.error });
            u._afterLoad() }, _loadImage: function() {
            var e = u.imgPreload = new Image;
            e.onload = function() { this.onload = this.onerror = null;
                u.coming.width = this.width / u.opts.pixelRatio;
                u.coming.height = this.height / u.opts.pixelRatio;
                u._afterLoad() };
            e.onerror = function() { this.onload = this.onerror = null;
                u._error("image") };
            e.src = u.coming.href;
            if (e.complete !== true) { u.showLoading() } }, _loadAjax: function() {
            var e = u.coming;
            u.showLoading();
            u.ajaxLoad = n.ajax(n.extend({}, e.ajax, { url: e.href, error: function(e, t) {
                if (u.coming && t !== "abort") { u._error("ajax", e) } else { u.hideLoading() } }, success: function(t, n) {
                if (n === "success") { e.content = t;
                    u._afterLoad() } } })) }, _loadIframe: function() {
            var e = u.coming,
                t = n(e.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", l ? "auto" : e.iframe.scrolling).attr("src", e.href);
            n(e.wrap).bind("onReset", function() {
                try { n(this).find("iframe").hide().attr("src", "//about:blank").end().empty() } catch (e) {} });
            if (e.iframe.preload) { u.showLoading();
                t.one("load", function() { n(this).data("ready", 1);
                    if (!l) { n(this).bind("load.fb", u.update) }
                    n(this).parents(".esgbox-wrap").width("100%").removeClass("esgbox-tmp").show();
                    u._afterLoad() }) }
            e.content = t.appendTo(e.inner);
            if (!e.iframe.preload) { u._afterLoad() } }, _preloadImages: function() {
            var e = u.group,
                t = u.current,
                n = e.length,
                r = t.preload ? Math.min(t.preload, n - 1) : 0,
                i, s;
            for (s = 1; s <= r; s += 1) { i = e[(t.index + s) % n];
                if (i.type === "image" && i.href) {
                    (new Image).src = i.href } } }, _afterLoad: function() {
            var e = u.coming,
                t = u.current,
                r = "esgbox-placeholder",
                i, s, o, a, f, l;
            u.hideLoading();
            if (!e || u.isActive === false) {
                return }
            if (false === u.trigger("afterLoad", e, t)) { e.wrap.stop(true).trigger("onReset").remove();
                u.coming = null;
                return }
            if (t) { u.trigger("beforeChange", t);
                t.wrap.stop(true).removeClass("esgbox-opened").find(".esgbox-item, .esgbox-nav").remove() }
            u.unbindEvents();
            i = e;
            s = e.content;
            o = e.type;
            a = e.scrolling;
            n.extend(u, { wrap: i.wrap, skin: i.skin, outer: i.outer, inner: i.inner, current: i, previous: t });
            f = i.href;
            switch (o) {
                case "inline":
                case "ajax":
                case "html":
                    if (i.selector) { s = n("<div>").html(s).find(i.selector) } else if (c(s)) {
                        if (!s.data(r)) { s.data(r, n('<div class="' + r + '"></div>').insertAfter(s).hide()) }
                        s = s.show().detach();
                        i.wrap.bind("onReset", function() {
                            if (n(this).find(s).length) { s.hide().replaceAll(s.data(r)).data(r, false) } }) }
                    break;
                case "image":
                    s = i.tpl.image.replace("{href}", f);
                    break;
                case "swf":
                    s = '<object id="esgbox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + f + '"></param>';
                    l = "";
                    n.each(i.swf, function(e, t) { s += '<param name="' + e + '" value="' + t + '"></param>';
                        l += " " + e + '="' + t + '"' });
                    s += '<embed src="' + f + '" type="application/x-shockwave-flash" width="100%" height="100%"' + l + "></embed></object>";
                    break }
            if (!(c(s) && s.parent().is(i.inner))) { i.inner.append(s) }
            u.trigger("beforeShow");
            i.inner.css("overflow", a === "yes" ? "scroll" : a === "no" ? "hidden" : a);
            u._setDimension();
            u.reposition();
            u.isOpen = false;
            u.coming = null;
            u.bindEvents();
            if (!u.isOpened) { n(".esgbox-wrap").not(i.wrap).stop(true).trigger("onReset").remove() } else if (t.prevMethod) { u.transitions[t.prevMethod]() }
            u.transitions[u.isOpened ? i.nextMethod : i.openMethod]();
            u._preloadImages() }, _setDimension: function() {
            var e = u.getViewport(),
                t = 0,
                r = false,
                i = false,
                s = u.wrap,
                o = u.skin,
                a = u.inner,
                f = u.current,
                l = f.width,
                c = f.height,
                h = f.minWidth,
                d = f.minHeight,
                g = f.maxWidth,
                y = f.maxHeight,
                b = f.scrolling,
                w = f.scrollOutside ? f.scrollbarWidth : 0,
                E = f.margin,
                S = v(E[1] + E[3]),
                x = v(E[0] + E[2]),
                T, N, C, k, L, A, O, M, _, D, P, H, B, j, I;
            s.add(o).add(a).width("auto").height("auto").removeClass("esgbox-tmp");
            T = v(o.outerWidth(true) - o.width());
            N = v(o.outerHeight(true) - o.height());
            C = S + T;
            k = x + N;
            L = p(l) ? (e.w - C) * v(l) / 100 : l;
            A = p(c) ? (e.h - k) * v(c) / 100 : c;
            if (f.type === "iframe") { j = f.content;
                if (f.autoHeight && j.data("ready") === 1) {
                    try {
                        if (j[0].contentWindow.document.location) { a.width(L).height(9999);
                            I = j.contents().find("body");
                            if (w) { I.css("overflow-x", "hidden") }
                            A = I.outerHeight(true) } } catch (q) {} } } else if (f.autoWidth || f.autoHeight) { a.addClass("esgbox-tmp");
                if (!f.autoWidth) { a.width(L) }
                if (!f.autoHeight) { a.height(A) }
                if (f.autoWidth) { L = a.width() }
                if (f.autoHeight) { A = a.height() }
                a.removeClass("esgbox-tmp") }
            l = v(L);
            c = v(A);
            _ = L / A;
            h = v(p(h) ? v(h, "w") - C : h);
            g = v(p(g) ? v(g, "w") - C : g);
            d = v(p(d) ? v(d, "h") - k : d);
            y = v(p(y) ? v(y, "h") - k : y);
            O = g;
            M = y;
            if (f.fitToView) { g = Math.min(e.w - C, g);
                y = Math.min(e.h - k, y) }
            H = e.w - S;
            B = e.h - x;
            if (f.aspectRatio) {
                if (l > g) { l = g;
                    c = v(l / _) }
                if (c > y) { c = y;
                    l = v(c * _) }
                if (l < h) { l = h;
                    c = v(l / _) }
                if (c < d) { c = d;
                    l = v(c * _) } } else { l = Math.max(h, Math.min(l, g));
                if (f.autoHeight && f.type !== "iframe") { a.width(l);
                    c = a.height() }
                c = Math.max(d, Math.min(c, y)) }
            if (f.fitToView) { a.width(l).height(c);
                s.width(l + T);
                D = s.width();
                P = s.height();
                if (f.aspectRatio) {
                    while ((D > H || P > B) && l > h && c > d) {
                        if (t++ > 19) {
                            break }
                        c = Math.max(d, Math.min(y, c - 10));
                        l = v(c * _);
                        if (l < h) { l = h;
                            c = v(l / _) }
                        if (l > g) { l = g;
                            c = v(l / _) }
                        a.width(l).height(c);
                        s.width(l + T);
                        D = s.width();
                        P = s.height() } } else { l = Math.max(h, Math.min(l, l - (D - H)));
                    c = Math.max(d, Math.min(c, c - (P - B))) } }
            if (w && b === "auto" && c < A && l + T + w < H) { l += w }
            a.width(l).height(c);
            s.width(l + T);
            D = s.width();
            P = s.height();
            r = (D > H || P > B) && l > h && c > d;
            i = f.aspectRatio ? l < O && c < M && l < L && c < A : (l < O || c < M) && (l < L || c < A);
            n.extend(f, { dim: { width: m(D), height: m(P) }, origWidth: L, origHeight: A, canShrink: r, canExpand: i, wPadding: T, hPadding: N, wrapSpace: P - o.outerHeight(true), skinSpace: o.height() - c });
            if (!j && f.autoHeight && c > d && c < y && !i) { a.height("auto") } }, _getPosition: function(e) {
            var t = u.current,
                n = u.getViewport(),
                r = t.margin,
                i = u.wrap.width() + r[1] + r[3],
                s = u.wrap.height() + r[0] + r[2],
                o = { position: "absolute", top: r[0], left: r[3] };
            if (t.autoCenter && t.fixed && !e && s <= n.h && i <= n.w) { o.position = "fixed" } else if (!t.locked) { o.top += n.y;
                o.left += n.x }
            o.top = m(Math.max(o.top, o.top + (n.h - s) * t.topRatio));
            o.left = m(Math.max(o.left, o.left + (n.w - i) * t.leftRatio));
            return o }, _afterZoomIn: function() {
            var e = u.current;
            if (!e) {
                return }
            u.isOpen = u.isOpened = true;
            u.wrap.css("overflow", "visible").addClass("esgbox-opened");
            u.update();
            if (e.closeClick || e.nextClick && u.group.length > 1) { u.inner.css("cursor", "pointer").bind("click.fb", function(t) {
                if (!n(t.target).is("a") && !n(t.target).parent().is("a")) { t.preventDefault();
                    u[e.closeClick ? "close" : "next"]() } }) }
            if (e.closeBtn) { n(e.tpl.closeBtn).appendTo(u.skin).bind("click.fb", function(e) { e.preventDefault();
                u.close() }) }
            if (e.arrows && u.group.length > 1) {
                if (e.loop || e.index > 0) { n(e.tpl.prev).appendTo(u.outer).bind("click.fb", u.prev) }
                if (e.loop || e.index < u.group.length - 1) { n(e.tpl.next).appendTo(u.outer).bind("click.fb", u.next) } }
            u.trigger("afterShow");
            if (!e.loop && e.index === e.group.length - 1) { u.play(false) } else if (u.opts.autoPlay && !u.player.isActive) { u.opts.autoPlay = false;
                u.play() } }, _afterZoomOut: function(e) { e = e || u.current;
            n(".esgbox-wrap").trigger("onReset").remove();
            n.extend(u, { group: {}, opts: {}, router: false, current: null, isActive: false, isOpened: false, isOpen: false, isClosing: false, wrap: null, skin: null, outer: null, inner: null });
            u.trigger("afterClose", e) } });
        u.transitions = { getOrigPosition: function() {
            var e = u.current,
                t = e.element,
                n = e.orig,
                r = {},
                i = 50,
                s = 50,
                o = e.hPadding,
                a = e.wPadding,
                f = u.getViewport();
            if (!n && e.isDom && t.is(":visible")) { n = t.find("img:first");
                if (!n.length) { n = t } }
            if (c(n)) { r = n.offset();
                if (n.is("img")) { i = n.outerWidth();
                    s = n.outerHeight() } } else { r.top = f.y + (f.h - s) * e.topRatio;
                r.left = f.x + (f.w - i) * e.leftRatio }
            if (u.wrap.css("position") === "fixed" || e.locked) { r.top -= f.y;
                r.left -= f.x }
            r = { top: m(r.top - o * e.topRatio), left: m(r.left - a * e.leftRatio), width: m(i + a), height: m(s + o) };
            return r }, step: function(e, t) {
            var n, r, i, s = t.prop,
                o = u.current,
                a = o.wrapSpace,
                f = o.skinSpace;
            if (s === "width" || s === "height") { n = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start);
                if (u.isClosing) { n = 1 - n }
                r = s === "width" ? o.wPadding : o.hPadding;
                i = e - r;
                u.skin[s](v(s === "width" ? i : i - a * n));
                u.inner[s](v(s === "width" ? i : i - a * n - f * n)) } }, zoomIn: function() {
            var e = u.current,
                t = e.pos,
                r = e.openEffect,
                i = r === "elastic",
                s = n.extend({ opacity: 1 }, t);
            delete s.position;
            if (i) { t = this.getOrigPosition();
                if (e.openOpacity) { t.opacity = .1 } } else if (r === "fade") { t.opacity = .1 }
            u.wrap.css(t).animate(s, { duration: r === "none" ? 0 : e.openSpeed, easing: e.openEasing, step: i ? this.step : null, complete: u._afterZoomIn }) }, zoomOut: function() {
            var e = u.current,
                t = e.closeEffect,
                n = t === "elastic",
                r = { opacity: .1 };
            if (n) { r = this.getOrigPosition();
                if (e.closeOpacity) { r.opacity = .1 } }
            u.wrap.animate(r, { duration: t === "none" ? 0 : e.closeSpeed, easing: e.closeEasing, step: n ? this.step : null, complete: u._afterZoomOut }) }, changeIn: function() {
            var e = u.current,
                t = e.nextEffect,
                n = e.pos,
                r = { opacity: 1 },
                i = u.direction,
                s = 200,
                o;
            n.opacity = .1;
            if (t === "elastic") { o = i === "down" || i === "up" ? "top" : "left";
                if (i === "down" || i === "right") { n[o] = m(v(n[o]) - s);
                    r[o] = "+=" + s + "px" } else { n[o] = m(v(n[o]) + s);
                    r[o] = "-=" + s + "px" } }
            if (t === "none") { u._afterZoomIn() } else { u.wrap.css(n).animate(r, { duration: e.nextSpeed, easing: e.nextEasing, complete: u._afterZoomIn }) } }, changeOut: function() {
            var e = u.previous,
                t = e.prevEffect,
                r = { opacity: .1 },
                i = u.direction,
                s = 200;
            if (t === "elastic") { r[i === "down" || i === "up" ? "top" : "left"] = (i === "up" || i === "left" ? "-" : "+") + "=" + s + "px" }
            e.wrap.animate(r, { duration: t === "none" ? 0 : e.prevSpeed, easing: e.prevEasing, complete: function() { n(this).trigger("onReset").remove() } }) } };
        u.helpers.overlay = { defaults: { closeClick: true, speedOut: 200, showEarly: true, css: {}, locked: !l, fixed: true }, overlay: null, fixed: false, el: n("html"), create: function(e) { e = n.extend({}, this.defaults, e);
            if (this.overlay) { this.close() }
            this.overlay = n('<div class="esgbox-overlay"></div>').appendTo(u.coming ? u.coming.parent : e.parent);
            this.fixed = false;
            if (e.fixed && u.defaults.fixed) { this.overlay.addClass("esgbox-overlay-fixed");
                this.fixed = true } }, open: function(e) {
            var t = this;
            e = n.extend({}, this.defaults, e);
            if (this.overlay) { this.overlay.unbind(".overlay").width("auto").height("auto") } else { this.create(e) }
            if (!this.fixed) { s.bind("resize.overlay", n.proxy(this.update, this));
                this.update() }
            if (e.closeClick) { this.overlay.bind("click.overlay", function(e) {
                if (n(e.target).hasClass("esgbox-overlay")) {
                    if (u.isActive) { u.close() } else { t.close() }
                    return false } }) }
            this.overlay.css(e.css).show() }, close: function() {
            var e, t;
            s.unbind("resize.overlay");
            if (this.el.hasClass("esgbox-lock")) { n(".esgbox-margin").removeClass("esgbox-margin");
                e = s.scrollTop();
                t = s.scrollLeft();
                this.el.removeClass("esgbox-lock");
                s.scrollTop(e).scrollLeft(t) }
            n(".esgbox-overlay").remove().hide();
            n.extend(this, { overlay: null, fixed: false }) }, update: function() {
            var e = "100%",
                n;
            this.overlay.width(e).height("100%");
            if (a) { n = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth);
                if (o.width() > n) { e = o.width() } } else if (o.width() > s.width()) { e = o.width() }
            this.overlay.width(e).height(o.height()) }, onReady: function(e, t) {
            var r = this.overlay;
            n(".esgbox-overlay").stop(true, true);
            if (!r) { this.create(e) }
            if (e.locked && this.fixed && t.fixed) {
                if (!r) { this.margin = o.height() > s.height() ? n("html").css("margin-right").replace("px", "") : false }
                t.locked = this.overlay.append(t.wrap);
                t.fixed = false }
            if (e.showEarly === true) { this.beforeShow.apply(this, arguments) } }, beforeShow: function(e, t) {
            var r, i;
            if (t.locked) {
                if (this.margin !== false) { n("*").filter(function() {
                    return n(this).css("position") === "fixed" && !n(this).hasClass("esgbox-overlay") && !n(this).hasClass("esgbox-wrap") }).addClass("esgbox-margin");
                    this.el.addClass("esgbox-margin") }
                r = s.scrollTop();
                i = s.scrollLeft();
                this.el.addClass("esgbox-lock");
                s.scrollTop(r).scrollLeft(i) }
            this.open(e) }, onUpdate: function() {
            if (!this.fixed) { this.update() } }, afterClose: function(e) {
            if (this.overlay && !u.coming) { this.overlay.fadeOut(e.speedOut, n.proxy(this.close, this)) } } };
        u.helpers.title = { defaults: { type: "float", position: "bottom" }, beforeShow: function(e) {
            var t = u.current,
                r = t.title,
                i = e.type,
                s, o;
            if (n.isFunction(r)) { r = r.call(t.element, t) }
            if (!h(r) || n.trim(r) === "") {
                return }
            s = n('<div class="esgbox-title esgbox-title-' + i + '-wrap">' + r + "</div>");
            switch (i) {
                case "inside":
                    o = u.skin;
                    break;
                case "outside":
                    o = u.wrap;
                    break;
                case "over":
                    o = u.inner;
                    break;
                default:
                    o = u.skin;
                    s.appendTo("body");
                    if (a) { s.width(s.width()) }
                    s.wrapInner('<span class="child"></span>');
                    u.current.margin[2] += Math.abs(v(s.css("margin-bottom")));
                    break }
            s[e.position === "top" ? "prependTo" : "appendTo"](o) } };
        n.fn.esgbox = function(e) {
            var t, r = n(this),
                i = this.selector || "",
                s = function(s) {
                    var o = n(this).blur(),
                        a = t,
                        f, l;
                    if (!(s.ctrlKey || s.altKey || s.shiftKey || s.metaKey) && !o.is(".esgbox-wrap")) { f = e.groupAttr || "data-esgbox-group";
                        l = o.attr(f);
                        if (!l) { f = "rel";
                            l = o.get(0)[f] }
                        if (l && l !== "" && l !== "nofollow") { o = i.length ? n(i) : r;
                            o = o.filter("[" + f + '="' + l + '"]');
                            a = o.index(this) }
                        e.index = a;
                        if (u.open(o, e) !== false) { s.preventDefault() } } };
            e = e || {};
            t = e.index || 0;
            if (!i || e.live === false) { r.unbind("click.fb-start").bind("click.fb-start", s) } else { o.undelegate(i, "click.fb-start").delegate(i + ":not('.esgbox-item, .esgbox-nav')", "click.fb-start", s) }
            this.filter("[data-esgbox-start=1]").trigger("click");
            return this };
        o.ready(function() {
            var t, s;
            if (n.scrollbarWidth === r) { n.scrollbarWidth = function() {
                var e = n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                    t = e.children(),
                    r = t.innerWidth() - t.height(99).innerWidth();
                e.remove();
                return r } }
            if (n.support.fixedPosition === r) { n.support.fixedPosition = function() {
                var e = n('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
                    t = e[0].offsetTop === 20 || e[0].offsetTop === 15;
                e.remove();
                return t }() }
            n.extend(u.defaults, { scrollbarWidth: n.scrollbarWidth(), fixed: n.support.fixedPosition, parent: n("body") });
            t = n(e).width();
            i.addClass("esgbox-lock-test");
            s = n(e).width();
            i.removeClass("esgbox-lock-test");
            n("<style type='text/css'>.esgbox-margin{margin-right:" + (s - t) + "px;}</style>").appendTo("head") }) })(window, document, jQuery);
    (function(e) {
        var t = e.esgbox;
        t.helpers.buttons = { defaults: { skipSingle: false, position: "top", tpl: '<div id="esgbox-buttons"><ul><li><a class="btnPrev" title="Previous" href="javascript:;"></a></li><li><a class="btnPlay" title="Start slideshow" href="javascript:;"></a></li><li><a class="btnNext" title="Next" href="javascript:;"></a></li><li><a class="btnToggle" title="Toggle size" href="javascript:;"></a></li><li><a class="btnClose" title="Close" href="javascript:;"></a></li></ul></div>' }, list: null, buttons: null, beforeLoad: function(e, t) {
            if (e.skipSingle && t.group.length < 2) { t.helpers.buttons = false;
                t.closeBtn = true;
                return }
            t.margin[e.position === "bottom" ? 2 : 0] += 30 }, onPlayStart: function() {
            if (this.buttons) { this.buttons.play.attr("title", "Pause slideshow").addClass("btnPlayOn") } }, onPlayEnd: function() {
            if (this.buttons) { this.buttons.play.attr("title", "Start slideshow").removeClass("btnPlayOn") } }, afterShow: function(n, r) {
            var i = this.buttons;
            if (!i) { this.list = e(n.tpl).addClass(n.position).appendTo("body");
                i = { prev: this.list.find(".btnPrev").click(t.prev), next: this.list.find(".btnNext").click(t.next), play: this.list.find(".btnPlay").click(t.play), toggle: this.list.find(".btnToggle").click(t.toggle), close: this.list.find(".btnClose").click(t.close) } }
            if (r.index > 0 || r.loop) { i.prev.removeClass("btnDisabled") } else { i.prev.addClass("btnDisabled") }
            if (r.loop || r.index < r.group.length - 1) { i.next.removeClass("btnDisabled");
                i.play.removeClass("btnDisabled") } else { i.next.addClass("btnDisabled");
                i.play.addClass("btnDisabled") }
            this.buttons = i;
            this.onUpdate(n, r) }, onUpdate: function(e, t) {
            var n;
            if (!this.buttons) {
                return }
            n = this.buttons.toggle.removeClass("btnDisabled btnToggleOn");
            if (t.canShrink) { n.addClass("btnToggleOn") } else if (!t.canExpand) { n.addClass("btnDisabled") } }, beforeClose: function() {
            if (this.list) { this.list.remove() }
            this.list = null;
            this.buttons = null } } })(jQuery);
    (function(e) { "use strict";
        var t = e.esgbox,
            n = function(t, n, r) { r = r || "";
                if (e.type(r) === "object") { r = e.param(r, true) }
                e.each(n, function(e, n) { t = t.replace("$" + e, n || "") });
                if (r.length) { t += (t.indexOf("?") > 0 ? "&" : "?") + r }
                return t };
        t.helpers.media = { defaults: { youtube: { matcher: /(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i, params: { autoplay: 1, autohide: 1, fs: 1, rel: 0, hd: 1, wmode: "opaque", enablejsapi: 1 }, type: "iframe", url: "//www.youtube.com/embed/$3" }, vimeo: { matcher: /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/, params: { autoplay: 1, hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1 }, type: "iframe", url: "//player.vimeo.com/video/$1" }, metacafe: { matcher: /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/, params: { autoPlay: "yes" }, type: "swf", url: function(t, n, r) { r.swf.flashVars = "playerVars=" + e.param(n, true);
            return "//www.metacafe.com/fplayer/" + t[1] + "/.swf" } }, dailymotion: { matcher: /dailymotion.com\/video\/(.*)\/?(.*)/, params: { additionalInfos: 0, autoStart: 1 }, type: "swf", url: "//www.dailymotion.com/swf/video/$1" }, twitvid: { matcher: /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i, params: { autoplay: 0 }, type: "iframe", url: "//www.twitvid.com/embed.php?guid=$1" }, twitpic: { matcher: /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i, type: "image", url: "//twitpic.com/show/full/$1/" }, instagram: { matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i, type: "image", url: "//$1/p/$2/media/?size=l" }, google_maps: { matcher: /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i, type: "iframe", url: function(e) {
            return "//maps.google." + e[1] + "/" + e[3] + "" + e[4] + "&output=" + (e[4].indexOf("layer=c") > 0 ? "svembed" : "embed") } } }, beforeLoad: function(t, r) {
            var i = r.href || "",
                s = false,
                o, u, a, f;
            for (o in t) {
                if (t.hasOwnProperty(o)) { u = t[o];
                    a = i.match(u.matcher);
                    if (a) { s = u.type;
                        f = e.extend(true, {}, u.params, r[o] || (e.isPlainObject(t[o]) ? t[o].params : null));
                        i = e.type(u.url) === "function" ? u.url.call(this, a, f, r) : n(u.url, a, f);
                        break } } }
            if (s) { r.href = i;
                r.type = s;
                r.autoHeight = false } } } })(jQuery);
    (function(e) {
        var t = e.esgbox;
        t.helpers.thumbs = { defaults: { width: 50, height: 50, position: "bottom", source: function(t) {
            var n;
            if (t.element) { n = e(t.element).find("img").attr("src") }
            if (!n && t.type === "image" && t.href) { n = t.href }
            return n } }, wrap: null, list: null, width: 0, init: function(t, n) {
            var r = this,
                i, s = t.width,
                o = t.height,
                u = t.source;
            i = "";
            for (var a = 0; a < n.group.length; a++) { i += '<li><a style="width:' + s + "px;height:" + o + 'px;" href="javascript:jQuery.esgbox.jumpto(' + a + ');"></a></li>' }
            this.wrap = e('<div id="esgbox-thumbs"></div>').addClass(t.position).appendTo("body");
            this.list = e("<ul>" + i + "</ul>").appendTo(this.wrap);
            e.each(n.group, function(t) {
                var i = u(n.group[t]);
                if (!i) {
                    return }
                e("<img />").load(function() {
                    var n = this.width,
                        i = this.height,
                        u, a, f;
                    if (!r.list || !n || !i) {
                        return }
                    u = n / s;
                    a = i / o;
                    f = r.list.children().eq(t).find("a");
                    if (u >= 1 && a >= 1) {
                        if (u > a) { n = Math.floor(n / a);
                            i = o } else { n = s;
                            i = Math.floor(i / u) } }
                    e(this).css({ width: n, height: i, top: Math.floor(o / 2 - i / 2), left: Math.floor(s / 2 - n / 2) });
                    f.width(s).height(o);
                    e(this).hide().appendTo(f).fadeIn(300) }).attr("src", i) });
            this.width = this.list.children().eq(0).outerWidth(true);
            this.list.width(this.width * (n.group.length + 1)).css("left", Math.floor(e(window).width() * .5 - (n.index * this.width + this.width * .5))) }, beforeLoad: function(e, t) {
            if (t.group.length < 2) { t.helpers.thumbs = false;
                return }
            t.margin[e.position === "top" ? 0 : 2] += e.height + 15 }, afterShow: function(e, t) {
            if (this.list) { this.onUpdate(e, t) } else { this.init(e, t) }
            this.list.children().removeClass("active").eq(t.index).addClass("active") }, onUpdate: function(t, n) {
            if (this.list) { this.list.stop(true).animate({ left: Math.floor(e(window).width() * .5 - (n.index * this.width + this.width * .5)) }, 150) } }, beforeClose: function() {
            if (this.wrap) { this.wrap.remove() }
            this.wrap = null;
            this.list = null;
            this.width = 0 } } })(jQuery) } catch (e) { console.error('Error in file:http://webnus.biz/themes/michigan/kids/wp-content/plugins/essential-grid/public/assets/js/lightbox.js?ver=2.0.9.1; Error:' + e.message); };
try {
    (function(a) {
        if (typeof define === "function" && define.amd && define.amd.jQuery) { define(["jquery"], a) } else { a(jQuery) } }(function(f) {
        var y = "1.6.9",
            p = "left",
            o = "right",
            e = "up",
            x = "down",
            c = "in",
            A = "out",
            m = "none",
            s = "auto",
            l = "swipe",
            t = "pinch",
            B = "tap",
            j = "doubletap",
            b = "longtap",
            z = "hold",
            E = "horizontal",
            u = "vertical",
            i = "all",
            r = 10,
            g = "start",
            k = "move",
            h = "end",
            q = "cancel",
            a = "ontouchstart" in window,
            v = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
            d = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            C = "TouchSwipe";
        var n = { fingers: 1, threshold: 75, cancelThreshold: null, pinchThreshold: 20, maxTimeThreshold: null, fingerReleaseThreshold: 250, longTapThreshold: 500, doubleTapThreshold: 200, swipe: null, swipeLeft: null, swipeRight: null, swipeUp: null, swipeDown: null, swipeStatus: null, pinchIn: null, pinchOut: null, pinchStatus: null, click: null, tap: null, doubleTap: null, longTap: null, hold: null, triggerOnTouchEnd: true, triggerOnTouchLeave: false, allowPageScroll: "auto", fallbackToMouseEvents: true, excludedElements: "label, button, input, select, textarea, a, .noSwipe", preventDefaultEvents: true };
        f.fn.swipetp = function(H) {
            var G = f(this),
                F = G.data(C);
            if (F && typeof H === "string") {
                if (F[H]) {
                    return F[H].apply(this, Array.prototype.slice.call(arguments, 1)) } else { f.error("Method " + H + " does not exist on jQuery.swipetp") } } else {
                if (!F && (typeof H === "object" || !H)) {
                    return w.apply(this, arguments) } }
            return G };
        f.fn.swipetp.version = y;
        f.fn.swipetp.defaults = n;
        f.fn.swipetp.phases = { PHASE_START: g, PHASE_MOVE: k, PHASE_END: h, PHASE_CANCEL: q };
        f.fn.swipetp.directions = { LEFT: p, RIGHT: o, UP: e, DOWN: x, IN: c, OUT: A };
        f.fn.swipetp.pageScroll = { NONE: m, HORIZONTAL: E, VERTICAL: u, AUTO: s };
        f.fn.swipetp.fingers = { ONE: 1, TWO: 2, THREE: 3, ALL: i };

        function w(F) {
            if (F && (F.allowPageScroll === undefined && (F.swipe !== undefined || F.swipeStatus !== undefined))) { F.allowPageScroll = m }
            if (F.click !== undefined && F.tap === undefined) { F.tap = F.click }
            if (!F) { F = {} }
            F = f.extend({}, f.fn.swipetp.defaults, F);
            return this.each(function() {
                var H = f(this);
                var G = H.data(C);
                if (!G) { G = new D(this, F);
                    H.data(C, G) } }) }

        function D(a5, aw) {
            var aA = (a || d || !aw.fallbackToMouseEvents),
                K = aA ? (d ? (v ? "MSPointerDown" : "pointerdown") : "touchstart") : "mousedown",
                az = aA ? (d ? (v ? "MSPointerMove" : "pointermove") : "touchmove") : "mousemove",
                V = aA ? (d ? (v ? "MSPointerUp" : "pointerup") : "touchend") : "mouseup",
                T = aA ? null : "mouseleave",
                aE = (d ? (v ? "MSPointerCancel" : "pointercancel") : "touchcancel");
            var ah = 0,
                aQ = null,
                ac = 0,
                a2 = 0,
                a0 = 0,
                H = 1,
                ar = 0,
                aK = 0,
                N = null;
            var aS = f(a5);
            var aa = "start";
            var X = 0;
            var aR = null;
            var U = 0,
                a3 = 0,
                a6 = 0,
                ae = 0,
                O = 0;
            var aX = null,
                ag = null;
            try { aS.bind(K, aO);
                aS.bind(aE, ba) } catch (al) { f.error("events not supported " + K + "," + aE + " on jQuery.swipetp") }
            this.enable = function() { aS.bind(K, aO);
                aS.bind(aE, ba);
                return aS };
            this.disable = function() { aL();
                return aS };
            this.destroy = function() { aL();
                aS.data(C, null);
                aS = null };
            this.option = function(bd, bc) {
                if (aw[bd] !== undefined) {
                    if (bc === undefined) {
                        return aw[bd] } else { aw[bd] = bc } } else { f.error("Option " + bd + " does not exist on jQuery.swipetp.options") }
                return null };

            function aO(be) {
                if (aC()) {
                    return }
                if (f(be.target).closest(aw.excludedElements, aS).length > 0) {
                    return }
                var bf = be.originalEvent ? be.originalEvent : be;
                var bd, bg = bf.touches,
                    bc = bg ? bg[0] : bf;
                aa = g;
                if (bg) { X = bg.length } else { be.preventDefault() }
                ah = 0;
                aQ = null;
                aK = null;
                ac = 0;
                a2 = 0;
                a0 = 0;
                H = 1;
                ar = 0;
                aR = ak();
                N = ab();
                S();
                if (!bg || (X === aw.fingers || aw.fingers === i) || aY()) { aj(0, bc);
                    U = au();
                    if (X == 2) { aj(1, bg[1]);
                        a2 = a0 = av(aR[0].start, aR[1].start) }
                    if (aw.swipeStatus || aw.pinchStatus) { bd = P(bf, aa) } } else { bd = false }
                if (bd === false) { aa = q;
                    P(bf, aa);
                    return bd } else {
                    if (aw.hold) { ag = setTimeout(f.proxy(function() { aS.trigger("hold", [bf.target]);
                        if (aw.hold) { bd = aw.hold.call(aS, bf, bf.target) } }, this), aw.longTapThreshold) }
                    ap(true) }
                return null }

            function a4(bf) {
                var bi = bf.originalEvent ? bf.originalEvent : bf;
                if (aa === h || aa === q || an()) {
                    return }
                var be, bj = bi.touches,
                    bd = bj ? bj[0] : bi;
                var bg = aI(bd);
                a3 = au();
                if (bj) { X = bj.length }
                if (aw.hold) { clearTimeout(ag) }
                aa = k;
                if (X == 2) {
                    if (a2 == 0) { aj(1, bj[1]);
                        a2 = a0 = av(aR[0].start, aR[1].start) } else { aI(bj[1]);
                        a0 = av(aR[0].end, aR[1].end);
                        aK = at(aR[0].end, aR[1].end) }
                    H = a8(a2, a0);
                    ar = Math.abs(a2 - a0) }
                if ((X === aw.fingers || aw.fingers === i) || !bj || aY()) { aQ = aM(bg.start, bg.end);
                    am(bf, aQ);
                    ah = aT(bg.start, bg.end);
                    ac = aN();
                    aJ(aQ, ah);
                    if (aw.swipeStatus || aw.pinchStatus) { be = P(bi, aa) }
                    if (!aw.triggerOnTouchEnd || aw.triggerOnTouchLeave) {
                        var bc = true;
                        if (aw.triggerOnTouchLeave) {
                            var bh = aZ(this);
                            bc = F(bg.end, bh) }
                        if (!aw.triggerOnTouchEnd && bc) { aa = aD(k) } else {
                            if (aw.triggerOnTouchLeave && !bc) { aa = aD(h) } }
                        if (aa == q || aa == h) { P(bi, aa) } } } else { aa = q;
                    P(bi, aa) }
                if (be === false) { aa = q;
                    P(bi, aa) } }

            function M(bc) {
                var bd = bc.originalEvent ? bc.originalEvent : bc,
                    be = bd.touches;
                if (be) {
                    if (be.length) { G();
                        return true } }
                if (an()) { X = ae }
                a3 = au();
                ac = aN();
                if (bb() || !ao()) { aa = q;
                    P(bd, aa) } else {
                    if (aw.triggerOnTouchEnd || (aw.triggerOnTouchEnd == false && aa === k)) { bc.preventDefault();
                        aa = h;
                        P(bd, aa) } else {
                        if (!aw.triggerOnTouchEnd && a7()) { aa = h;
                            aG(bd, aa, B) } else {
                            if (aa === k) { aa = q;
                                P(bd, aa) } } } }
                ap(false);
                return null }

            function ba() { X = 0;
                a3 = 0;
                U = 0;
                a2 = 0;
                a0 = 0;
                H = 1;
                S();
                ap(false) }

            function L(bc) {
                var bd = bc.originalEvent ? bc.originalEvent : bc;
                if (aw.triggerOnTouchLeave) { aa = aD(h);
                    P(bd, aa) } }

            function aL() { aS.unbind(K, aO);
                aS.unbind(aE, ba);
                aS.unbind(az, a4);
                aS.unbind(V, M);
                if (T) { aS.unbind(T, L) }
                ap(false) }

            function aD(bg) {
                var bf = bg;
                var be = aB();
                var bd = ao();
                var bc = bb();
                if (!be || bc) { bf = q } else {
                    if (bd && bg == k && (!aw.triggerOnTouchEnd || aw.triggerOnTouchLeave)) { bf = h } else {
                        if (!bd && bg == h && aw.triggerOnTouchLeave) { bf = q } } }
                return bf }

            function P(be, bc) {
                var bd, bf = be.touches;
                if ((J() || W()) || (Q() || aY())) {
                    if (J() || W()) { bd = aG(be, bc, l) }
                    if ((Q() || aY()) && bd !== false) { bd = aG(be, bc, t) } } else {
                    if (aH() && bd !== false) { bd = aG(be, bc, j) } else {
                        if (aq() && bd !== false) { bd = aG(be, bc, b) } else {
                            if (ai() && bd !== false) { bd = aG(be, bc, B) } } } }
                if (bc === q) { ba(be) }
                if (bc === h) {
                    if (bf) {
                        if (!bf.length) { ba(be) } } else { ba(be) } }
                return bd }

            function aG(bf, bc, be) {
                var bd;
                if (be == l) { aS.trigger("swipeStatus", [bc, aQ || null, ah || 0, ac || 0, X, aR]);
                    if (aw.swipeStatus) { bd = aw.swipeStatus.call(aS, bf, bc, aQ || null, ah || 0, ac || 0, X, aR);
                        if (bd === false) {
                            return false } }
                    if (bc == h && aW()) { aS.trigger("swipe", [aQ, ah, ac, X, aR]);
                        if (aw.swipe) { bd = aw.swipe.call(aS, bf, aQ, ah, ac, X, aR);
                            if (bd === false) {
                                return false } }
                        switch (aQ) {
                            case p:
                                aS.trigger("swipeLeft", [aQ, ah, ac, X, aR]);
                                if (aw.swipeLeft) { bd = aw.swipeLeft.call(aS, bf, aQ, ah, ac, X, aR) }
                                break;
                            case o:
                                aS.trigger("swipeRight", [aQ, ah, ac, X, aR]);
                                if (aw.swipeRight) { bd = aw.swipeRight.call(aS, bf, aQ, ah, ac, X, aR) }
                                break;
                            case e:
                                aS.trigger("swipeUp", [aQ, ah, ac, X, aR]);
                                if (aw.swipeUp) { bd = aw.swipeUp.call(aS, bf, aQ, ah, ac, X, aR) }
                                break;
                            case x:
                                aS.trigger("swipeDown", [aQ, ah, ac, X, aR]);
                                if (aw.swipeDown) { bd = aw.swipeDown.call(aS, bf, aQ, ah, ac, X, aR) }
                                break } } }
                if (be == t) { aS.trigger("pinchStatus", [bc, aK || null, ar || 0, ac || 0, X, H, aR]);
                    if (aw.pinchStatus) { bd = aw.pinchStatus.call(aS, bf, bc, aK || null, ar || 0, ac || 0, X, H, aR);
                        if (bd === false) {
                            return false } }
                    if (bc == h && a9()) {
                        switch (aK) {
                            case c:
                                aS.trigger("pinchIn", [aK || null, ar || 0, ac || 0, X, H, aR]);
                                if (aw.pinchIn) { bd = aw.pinchIn.call(aS, bf, aK || null, ar || 0, ac || 0, X, H, aR) }
                                break;
                            case A:
                                aS.trigger("pinchOut", [aK || null, ar || 0, ac || 0, X, H, aR]);
                                if (aw.pinchOut) { bd = aw.pinchOut.call(aS, bf, aK || null, ar || 0, ac || 0, X, H, aR) }
                                break } } }
                if (be == B) {
                    if (bc === q || bc === h) { clearTimeout(aX);
                        clearTimeout(ag);
                        if (Z() && !I()) { O = au();
                            aX = setTimeout(f.proxy(function() { O = null;
                                aS.trigger("tap", [bf.target]);
                                if (aw.tap) { bd = aw.tap.call(aS, bf, bf.target) } }, this), aw.doubleTapThreshold) } else { O = null;
                            aS.trigger("tap", [bf.target]);
                            if (aw.tap) { bd = aw.tap.call(aS, bf, bf.target) } } } } else {
                    if (be == j) {
                        if (bc === q || bc === h) { clearTimeout(aX);
                            O = null;
                            aS.trigger("doubletap", [bf.target]);
                            if (aw.doubleTap) { bd = aw.doubleTap.call(aS, bf, bf.target) } } } else {
                        if (be == b) {
                            if (bc === q || bc === h) { clearTimeout(aX);
                                O = null;
                                aS.trigger("longtap", [bf.target]);
                                if (aw.longTap) { bd = aw.longTap.call(aS, bf, bf.target) } } } } }
                return bd }

            function ao() {
                var bc = true;
                if (aw.threshold !== null) { bc = ah >= aw.threshold }
                return bc }

            function bb() {
                var bc = false;
                if (aw.cancelThreshold !== null && aQ !== null) { bc = (aU(aQ) - ah) >= aw.cancelThreshold }
                return bc }

            function af() {
                if (aw.pinchThreshold !== null) {
                    return ar >= aw.pinchThreshold }
                return true }

            function aB() {
                var bc;
                if (aw.maxTimeThreshold) {
                    if (ac >= aw.maxTimeThreshold) { bc = false } else { bc = true } } else { bc = true }
                return bc }

            function am(bc, bd) {
                if (aw.preventDefaultEvents === false) {
                    return }
                if (aw.allowPageScroll === m) { bc.preventDefault() } else {
                    var be = aw.allowPageScroll === s;
                    switch (bd) {
                        case p:
                            if ((aw.swipeLeft && be) || (!be && aw.allowPageScroll != E)) { bc.preventDefault() }
                            break;
                        case o:
                            if ((aw.swipeRight && be) || (!be && aw.allowPageScroll != E)) { bc.preventDefault() }
                            break;
                        case e:
                            if ((aw.swipeUp && be) || (!be && aw.allowPageScroll != u)) { bc.preventDefault() }
                            break;
                        case x:
                            if ((aw.swipeDown && be) || (!be && aw.allowPageScroll != u)) { bc.preventDefault() }
                            break } } }

            function a9() {
                var bd = aP();
                var bc = Y();
                var be = af();
                return bd && bc && be }

            function aY() {
                return !!(aw.pinchStatus || aw.pinchIn || aw.pinchOut) }

            function Q() {
                return !!(a9() && aY()) }

            function aW() {
                var bf = aB();
                var bh = ao();
                var be = aP();
                var bc = Y();
                var bd = bb();
                var bg = !bd && bc && be && bh && bf;
                return bg }

            function W() {
                return !!(aw.swipe || aw.swipeStatus || aw.swipeLeft || aw.swipeRight || aw.swipeUp || aw.swipeDown) }

            function J() {
                return !!(aW() && W()) }

            function aP() {
                return ((X === aw.fingers || aw.fingers === i) || !a) }

            function Y() {
                return aR[0].end.x !== 0 }

            function a7() {
                return !!(aw.tap) }

            function Z() {
                return !!(aw.doubleTap) }

            function aV() {
                return !!(aw.longTap) }

            function R() {
                if (O == null) {
                    return false }
                var bc = au();
                return (Z() && ((bc - O) <= aw.doubleTapThreshold)) }

            function I() {
                return R() }

            function ay() {
                return ((X === 1 || !a) && (isNaN(ah) || ah < aw.threshold)) }

            function a1() {
                return ((ac > aw.longTapThreshold) && (ah < r)) }

            function ai() {
                return !!(ay() && a7()) }

            function aH() {
                return !!(R() && Z()) }

            function aq() {
                return !!(a1() && aV()) }

            function G() { a6 = au();
                ae = event.touches.length + 1 }

            function S() { a6 = 0;
                ae = 0 }

            function an() {
                var bc = false;
                if (a6) {
                    var bd = au() - a6;
                    if (bd <= aw.fingerReleaseThreshold) { bc = true } }
                return bc }

            function aC() {
                return !!(aS.data(C + "_intouch") === true) }

            function ap(bc) {
                if (bc === true) { aS.bind(az, a4);
                    aS.bind(V, M);
                    if (T) { aS.bind(T, L) } } else { aS.unbind(az, a4, false);
                    aS.unbind(V, M, false);
                    if (T) { aS.unbind(T, L, false) } }
                aS.data(C + "_intouch", bc === true) }

            function aj(bd, bc) {
                var be = bc.identifier !== undefined ? bc.identifier : 0;
                aR[bd].identifier = be;
                aR[bd].start.x = aR[bd].end.x = bc.pageX || bc.clientX;
                aR[bd].start.y = aR[bd].end.y = bc.pageY || bc.clientY;
                return aR[bd] }

            function aI(bc) {
                var be = bc.identifier !== undefined ? bc.identifier : 0;
                var bd = ad(be);
                bd.end.x = bc.pageX || bc.clientX;
                bd.end.y = bc.pageY || bc.clientY;
                return bd }

            function ad(bd) {
                for (var bc = 0; bc < aR.length; bc++) {
                    if (aR[bc].identifier == bd) {
                        return aR[bc] } } }

            function ak() {
                var bc = [];
                for (var bd = 0; bd <= 5; bd++) { bc.push({ start: { x: 0, y: 0 }, end: { x: 0, y: 0 }, identifier: 0 }) }
                return bc }

            function aJ(bc, bd) { bd = Math.max(bd, aU(bc));
                N[bc].distance = bd }

            function aU(bc) {
                if (N[bc]) {
                    return N[bc].distance }
                return undefined }

            function ab() {
                var bc = {};
                bc[p] = ax(p);
                bc[o] = ax(o);
                bc[e] = ax(e);
                bc[x] = ax(x);
                return bc }

            function ax(bc) {
                return { direction: bc, distance: 0 } }

            function aN() {
                return a3 - U }

            function av(bf, be) {
                var bd = Math.abs(bf.x - be.x);
                var bc = Math.abs(bf.y - be.y);
                return Math.round(Math.sqrt(bd * bd + bc * bc)) }

            function a8(bc, bd) {
                var be = (bd / bc) * 1;
                return be.toFixed(2) }

            function at() {
                if (H < 1) {
                    return A } else {
                    return c } }

            function aT(bd, bc) {
                return Math.round(Math.sqrt(Math.pow(bc.x - bd.x, 2) + Math.pow(bc.y - bd.y, 2))) }

            function aF(bf, bd) {
                var bc = bf.x - bd.x;
                var bh = bd.y - bf.y;
                var be = Math.atan2(bh, bc);
                var bg = Math.round(be * 180 / Math.PI);
                if (bg < 0) { bg = 360 - Math.abs(bg) }
                return bg }

            function aM(bd, bc) {
                var be = aF(bd, bc);
                if ((be <= 45) && (be >= 0)) {
                    return p } else {
                    if ((be <= 360) && (be >= 315)) {
                        return p } else {
                        if ((be >= 135) && (be <= 225)) {
                            return o } else {
                            if ((be > 45) && (be < 135)) {
                                return x } else {
                                return e } } } } }

            function au() {
                var bc = new Date();
                return bc.getTime() }

            function aZ(bc) { bc = f(bc);
                var be = bc.offset();
                var bd = { left: be.left, right: be.left + bc.outerWidth(), top: be.top, bottom: be.top + bc.outerHeight() };
                return bd }

            function F(bc, bd) {
                return (bc.x > bd.left && bc.x < bd.right && bc.y > bd.top && bc.y < bd.bottom) } } }));
    if (typeof(console) === 'undefined') {
        var console = {}
        console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = console.groupCollapsed = function() {};
    }
    if (window.tplogs == true)
        try { console.groupCollapsed("ThemePunch GreenSocks Logs"); } catch (e) {}
    var oldgs = window.GreenSockGlobals;
    oldgs_queue = window._gsQueue;
    var punchgs = window.GreenSockGlobals = {};
    if (window.tplogs == true)
        try { console.info("Build GreenSock SandBox for ThemePunch Plugins");
            console.info("GreenSock TweenLite Engine Initalised by ThemePunch Plugin"); } catch (e) {}
    (function(t, e) { "use strict";
        var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!i.TweenLite) {
            var s, n, r, a, o, l = function(t) {
                    var e, s = t.split("."),
                        n = i;
                    for (e = 0; s.length > e; e++) n[s[e]] = n = n[s[e]] || {};
                    return n },
                h = l("com.greensock"),
                _ = 1e-10,
                u = function(t) {
                    var e, i = [],
                        s = t.length;
                    for (e = 0; e !== s; i.push(t[e++]));
                    return i },
                m = function() {},
                f = function() {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e) } }(),
                c = {},
                p = function(s, n, r, a) { this.sc = c[s] ? c[s].sc : [], c[s] = this, this.gsClass = null, this.func = r;
                    var o = [];
                    this.check = function(h) {
                        for (var _, u, m, f, d = n.length, v = d; --d > -1;)(_ = c[n[d]] || new p(n[d], [])).gsClass ? (o[d] = _.gsClass, v--) : h && _.sc.push(this);
                        if (0 === v && r)
                            for (u = ("com.greensock." + s).split("."), m = u.pop(), f = l(u.join("."))[m] = this.gsClass = r.apply(r, o), a && (i[m] = f, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + s.split(".").pop(), [], function() {
                                return f }) : s === e && "undefined" != typeof module && module.exports && (module.exports = f)), d = 0; this.sc.length > d; d++) this.sc[d].check() }, this.check(!0) },
                d = t._gsDefine = function(t, e, i, s) {
                    return new p(t, e, i, s) },
                v = h._class = function(t, e, i) {
                    return e = e || function() {}, d(t, [], function() {
                        return e }, i), e };
            d.globals = i;
            var g = [0, 0, 1, 1],
                T = [],
                y = v("easing.Ease", function(t, e, i, s) { this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? g.concat(e) : g }, !0),
                w = y.map = {},
                P = y.register = function(t, e, i, s) {
                    for (var n, r, a, o, l = e.split(","), _ = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > -1;)
                        for (r = l[_], n = s ? v("easing." + r, null, !0) : h.easing[r] || {}, a = u.length; --a > -1;) o = u[a], w[r + "." + o] = w[o + r] = n[o] = t.getRatio ? t : t[o] || new t };
            for (r = y.prototype, r._calcEnd = !1, r.getRatio = function(t) {
                if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                var e = this._type,
                    i = this._power,
                    s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2 }, s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], n = s.length; --n > -1;) r = s[n] + ",Power" + n, P(new y(null, null, 1, n), r, "easeOut", !0), P(new y(null, null, 2, n), r, "easeIn" + (0 === n ? ",easeNone" : "")), P(new y(null, null, 3, n), r, "easeInOut");
            w.linear = h.easing.Linear.easeIn, w.swing = h.easing.Quad.easeInOut;
            var b = v("events.EventDispatcher", function(t) { this._listeners = {}, this._eventTarget = t || this });
            r = b.prototype, r.addEventListener = function(t, e, i, s, n) { n = n || 0;
                var r, l, h = this._listeners[t],
                    _ = 0;
                for (null == h && (this._listeners[t] = h = []), l = h.length; --l > -1;) r = h[l], r.c === e && r.s === i ? h.splice(l, 1) : 0 === _ && n > r.pr && (_ = l + 1);
                h.splice(_, 0, { c: e, s: i, up: s, pr: n }), this !== a || o || a.wake() }, r.removeEventListener = function(t, e) {
                var i, s = this._listeners[t];
                if (s)
                    for (i = s.length; --i > -1;)
                        if (s[i].c === e) return s.splice(i, 1), void 0 }, r.dispatchEvent = function(t) {
                var e, i, s, n = this._listeners[t];
                if (n)
                    for (e = n.length, i = this._eventTarget; --e > -1;) s = n[e], s && (s.up ? s.c.call(s.s || i, { type: t, target: i }) : s.c.call(s.s || i)) };
            var k = t.requestAnimationFrame,
                A = t.cancelAnimationFrame,
                S = Date.now || function() {
                        return (new Date).getTime() },
                x = S();
            for (s = ["ms", "moz", "webkit", "o"], n = s.length; --n > -1 && !k;) k = t[s[n] + "RequestAnimationFrame"], A = t[s[n] + "CancelAnimationFrame"] || t[s[n] + "CancelRequestAnimationFrame"];
            v("Ticker", function(t, e) {
                var i, s, n, r, l, h = this,
                    u = S(),
                    f = e !== !1 && k,
                    c = 500,
                    p = 33,
                    d = "tick",
                    v = function(t) {
                        var e, a, o = S() - x;
                        o > c && (u += o - p), x += o, h.time = (x - u) / 1e3, e = h.time - l, (!i || e > 0 || t === !0) && (h.frame++, l += e + (e >= r ? .004 : r - e), a = !0), t !== !0 && (n = s(v)), a && h.dispatchEvent(d) };
                b.call(h), h.time = h.frame = 0, h.tick = function() { v(!0) }, h.lagSmoothing = function(t, e) { c = t || 1 / _, p = Math.min(e, c, 0) }, h.sleep = function() { null != n && (f && A ? A(n) : clearTimeout(n), s = m, n = null, h === a && (o = !1)) }, h.wake = function() { null !== n ? h.sleep() : h.frame > 10 && (x = S() - c + 5), s = 0 === i ? m : f && k ? k : function(t) {
                    return setTimeout(t, 0 | 1e3 * (l - h.time) + 1) }, h === a && (o = !0), v(2) }, h.fps = function(t) {
                    return arguments.length ? (i = t, r = 1 / (i || 60), l = this.time + r, h.wake(), void 0) : i }, h.useRAF = function(t) {
                    return arguments.length ? (h.sleep(), f = t, h.fps(i), void 0) : f }, h.fps(t), setTimeout(function() { f && 5 > h.frame && h.useRAF(!1) }, 1500) }), r = h.Ticker.prototype = new h.events.EventDispatcher, r.constructor = h.Ticker;
            var R = v("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, B) { o || a.wake();
                    var i = this.vars.useFrames ? q : B;
                    i.add(this, i._time), this.vars.paused && this.paused(!0) } });
            a = R.ticker = new h.Ticker, r = R.prototype, r._dirty = r._gc = r._initted = r._paused = !1, r._totalTime = r._time = 0, r._rawPrevTime = -1, r._next = r._last = r._onUpdate = r._timeline = r.timeline = null, r._paused = !1;
            var C = function() { o && S() - x > 2e3 && a.wake(), setTimeout(C, 2e3) };
            C(), r.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1) }, r.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0) }, r.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1) }, r.seek = function(t, e) {
                return this.totalTime(Number(t), e !== !1) }, r.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0) }, r.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1) }, r.render = function() {}, r.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this }, r.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t }, r._enabled = function(t, e) {
                return o || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1 }, r._kill = function() {
                return this._enabled(!1, !1) }, r.kill = function(t, e) {
                return this._kill(t, e), this }, r._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this }, r._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i }, r._callback = function(t) {
                var e = this.vars;
                e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || T) }, r.eventCallback = function(t, e, i, s) {
                if ("on" === (t || "").substr(0, 2)) {
                    var n = this.vars;
                    if (1 === arguments.length) return n[t];
                    null == e ? delete n[t] : (n[t] = e, n[t + "Params"] = f(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, n[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e) }
                return this }, r.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay }, r.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration) }, r.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration }, r.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time }, r.totalTime = function(t, e, i) {
                if (o || a.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) { this._dirty && this.totalDuration();
                        var s = this._totalDuration,
                            n = this._timeline;
                        if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : n._time) - (this._reversed ? s - t : t) / this._timeScale, n._dirty || this._uncache(!1), n._timeline)
                            for (; n._timeline;) n._timeline._time !== (n._startTime + n._totalTime) / n._timeScale && n.totalTime(n._totalTime, !0), n = n._timeline }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), z.length && $()) }
                return this }, r.progress = r.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration() }, r.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime }, r.endTime = function(t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale }, r.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || _, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t }
                return this._timeScale = t, this._uncache(!1) }, r.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed }, r.paused = function(t) {
                if (!arguments.length) return this._paused;
                var e, i, s = this._timeline;
                return t != this._paused && s && (o || t || a.wake(), e = s.rawTime(), i = e - this._pauseTime, !t && s.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && this.render(s.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, !0, !0)), this._gc && !t && this._enabled(!0, !1), this };
            var D = v("core.SimpleTimeline", function(t) { R.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0 });
            r = D.prototype = new R, r.constructor = D, r.kill()._gc = !1, r._first = r._last = r._recent = null, r._sortChildren = !1, r.add = r.insert = function(t, e) {
                var i, s;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                    for (s = t._startTime; i && i._startTime > s;) i = i._prev;
                return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this }, r._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this }, r.render = function(t, e, i) {
                var s, n = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; n;) s = n._next, (n._active || t >= n._startTime && !n._paused) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s }, r.rawTime = function() {
                return o || a.wake(), this._totalTime };
            var I = v("TweenLite", function(e, i, s) {
                    if (R.call(this, i, s), this.render = I.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : I.selector(e) || e;
                    var n, r, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? Q[I.defaultOverwrite] : "number" == typeof l ? l >> 0 : Q[l], (o || e instanceof Array || e.push && f(e)) && "number" != typeof e[0])
                        for (this._targets = a = u(e), this._propLookup = [], this._siblings = [], n = 0; a.length > n; n++) r = a[n], r ? "string" != typeof r ? r.length && r !== t && r[0] && (r[0] === t || r[0].nodeType && r[0].style && !r.nodeType) ? (a.splice(n--, 1), this._targets = a = a.concat(u(r))) : (this._siblings[n] = K(r, this, !1), 1 === l && this._siblings[n].length > 1 && J(r, this, null, 1, this._siblings[n])) : (r = a[n--] = I.selector(r), "string" == typeof r && a.splice(n + 1, 1)) : a.splice(n--, 1);
                    else this._propLookup = {}, this._siblings = K(e, this, !1), 1 === l && this._siblings.length > 1 && J(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -_, this.render(-this._delay)) }, !0),
                E = function(e) {
                    return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType) },
                O = function(t, e) {
                    var i, s = {};
                    for (i in t) G[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!F[i] || F[i] && F[i]._autoCSS) || (s[i] = t[i], delete t[i]);
                    t.css = s };
            r = I.prototype = new R, r.constructor = I, r.kill()._gc = !1, r.ratio = 0, r._firstPT = r._targets = r._overwrittenProps = r._startAt = null, r._notifyPluginsOfEnabled = r._lazy = !1, I.version = "1.17.0", I.defaultEase = r._ease = new y(null, null, 1, 1), I.defaultOverwrite = "auto", I.ticker = a, I.autoSleep = 120, I.lagSmoothing = function(t, e) { a.lagSmoothing(t, e) }, I.selector = t.$ || t.jQuery || function(e) {
                    var i = t.$ || t.jQuery;
                    return i ? (I.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e) };
            var z = [],
                N = {},
                L = I._internals = { isArray: f, isSelector: E, lazyTweens: z },
                F = I._plugins = {},
                U = L.tweenLookup = {},
                j = 0,
                G = L.reservedProps = { ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1, onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1, lazy: 1, onOverwrite: 1, callbackScope: 1 },
                Q = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, "true": 1, "false": 0 },
                q = R._rootFramesTimeline = new D,
                B = R._rootTimeline = new D,
                M = 30,
                $ = L.lazyRender = function() {
                    var t, e = z.length;
                    for (N = {}; --e > -1;) t = z[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    z.length = 0 };
            B._startTime = a.time, q._startTime = a.frame, B._active = q._active = !0, setTimeout($, 1), R._updateRoot = I.render = function() {
                var t, e, i;
                if (z.length && $(), B.render((a.time - B._startTime) * B._timeScale, !1, !1), q.render((a.frame - q._startTime) * q._timeScale, !1, !1), z.length && $(), a.frame >= M) { M = a.frame + (parseInt(I.autoSleep, 10) || 120);
                    for (i in U) {
                        for (e = U[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete U[i] }
                    if (i = B._first, (!i || i._paused) && I.autoSleep && !q._first && 1 === a._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || a.sleep() } } }, a.addEventListener("tick", R._updateRoot);
            var K = function(t, e, i) {
                    var s, n, r = t._gsTweenID;
                    if (U[r || (t._gsTweenID = r = "t" + j++)] || (U[r] = { target: t, tweens: [] }), e && (s = U[r].tweens, s[n = s.length] = e, i))
                        for (; --n > -1;) s[n] === e && s.splice(n, 1);
                    return U[r].tweens },
                H = function(t, e, i, s) {
                    var n, r, a = t.vars.onOverwrite;
                    return a && (n = a(t, e, i, s)), a = I.onOverwrite, a && (r = a(t, e, i, s)), n !== !1 && r !== !1 },
                J = function(t, e, i, s, n) {
                    var r, a, o, l;
                    if (1 === s || s >= 4) {
                        for (l = n.length, r = 0; l > r; r++)
                            if ((o = n[r]) !== e) o._gc || o._kill(null, t, e) && (a = !0);
                            else if (5 === s) break;
                        return a }
                    var h, u = e._startTime + _,
                        m = [],
                        f = 0,
                        c = 0 === e._duration;
                    for (r = n.length; --r > -1;)(o = n[r]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || V(e, 0, c), 0 === V(o, h, c) && (m[f++] = o)) : u >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > u && ((c || !o._initted) && 2e-10 >= u - o._startTime || (m[f++] = o)));
                    for (r = f; --r > -1;)
                        if (o = m[r], 2 === s && o._kill(i, t, e) && (a = !0), 2 !== s || !o._firstPT && o._initted) {
                            if (2 !== s && !H(o, e)) continue;
                            o._enabled(!1, !1) && (a = !0) }
                    return a },
                V = function(t, e, i) {
                    for (var s = t._timeline, n = s._timeScale, r = t._startTime; s._timeline;) {
                        if (r += s._startTime, n *= s._timeScale, s._paused) return -100;
                        s = s._timeline }
                    return r /= n, r > e ? r - e : i && r === e || !t._initted && 2 * _ > r - e ? _ : (r += t.totalDuration() / t._timeScale / n) > e + _ ? 0 : r - e - _ };
            r._init = function() {
                var t, e, i, s, n, r = this.vars,
                    a = this._overwrittenProps,
                    o = this._duration,
                    l = !!r.immediateRender,
                    h = r.ease;
                if (r.startAt) { this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), n = {};
                    for (s in r.startAt) n[s] = r.startAt[s];
                    if (n.overwrite = !1, n.immediateRender = !0, n.lazy = l && r.lazy !== !1, n.startAt = n.delay = null, this._startAt = I.to(this.target, 0, n), l)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== o) return } else if (r.runBackwards && 0 !== o)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else { 0 !== this._time && (l = !1), i = {};
                        for (s in r) G[s] && "autoCSS" !== s || (i[s] = r[s]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && r.lazy !== !1, i.immediateRender = l, this._startAt = I.to(this.target, 0, i), l) {
                            if (0 === this._time) return } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null) }
                if (this._ease = h = h ? h instanceof y ? h : "function" == typeof h ? new y(h, r.easeParams) : w[h] || I.defaultEase : I.defaultEase, r.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, r.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, a);
                if (e && I._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = r.onUpdate, this._initted = !0 }, r._initProps = function(e, i, s, n) {
                var r, a, o, l, h, _;
                if (null == e) return !1;
                N[e._gsTweenID] && $(), this.vars.css || e.style && e !== t && e.nodeType && F.css && this.vars.autoCSS !== !1 && O(this.vars, e);
                for (r in this.vars) {
                    if (_ = this.vars[r], G[r]) _ && (_ instanceof Array || _.push && f(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[r] = _ = this._swapSelfInParams(_, this));
                    else if (F[r] && (l = new F[r])._onInitTween(e, this.vars[r], this)) {
                        for (this._firstPT = h = { _next: this._firstPT, t: l, p: "setRatio", s: 0, c: 1, f: !0, n: r, pg: !0, pr: l._priority }, a = l._overwriteProps.length; --a > -1;) i[l._overwriteProps[a]] = this._firstPT;
                        (l._priority || l._onInitAllProps) && (o = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0) } else this._firstPT = i[r] = h = { _next: this._firstPT, t: e, p: r, f: "function" == typeof e[r], n: r, pg: !1, pr: 0 }, h.s = h.f ? e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(e[r]), h.c = "string" == typeof _ && "=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2)) : Number(_) - h.s || 0;
                    h && h._next && (h._next._prev = h) }
                return n && this._kill(n, e) ? this._initProps(e, i, s, n) : this._overwrite > 1 && this._firstPT && s.length > 1 && J(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, n)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (N[e._gsTweenID] = !0), o) }, r.render = function(t, e, i) {
                var s, n, r, a, o = this._time,
                    l = this._duration,
                    h = this._rawPrevTime;
                if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, n = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > h || h === _ && "isPause" !== this.data) && h !== t && (i = !0, h > _ && (n = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t : _);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && h > 0) && (n = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== _ || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t : _)), this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var u = t / l,
                        m = this._easeType,
                        f = this._easePower;
                    (1 === m || 3 === m && u >= .5) && (u = 1 - u), 3 === m && (u *= 2), 1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u), this.ratio = 1 === m ? 1 - u : 2 === m ? u : .5 > t / l ? u / 2 : 1 - u / 2 } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== o || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = h, z.push(this), this._lazy = [t, e], void 0;
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / l) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s, r = r._next;
                    this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== o || s) && this._callback("onUpdate")), n && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[n] && this._callback(n), 0 === l && this._rawPrevTime === _ && a !== _ && (this._rawPrevTime = 0)) } }, r._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : I.selector(e) || e;
                var s, n, r, a, o, l, h, _, u, m = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((f(e) || E(e)) && "number" != typeof e[0])
                    for (s = e.length; --s > -1;) this._kill(t, e[s], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (s = this._targets.length; --s > -1;)
                            if (e === this._targets[s]) { o = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], n = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all";
                                break } } else {
                        if (e !== this.target) return !1;
                        o = this._propLookup, n = this._overwrittenProps = t ? this._overwrittenProps || {} : "all" }
                    if (o) {
                        if (h = t || o, _ = t !== n && "all" !== n && t !== o && ("object" != typeof t || !t._tempKill), i && (I.onOverwrite || this.vars.onOverwrite)) {
                            for (r in h) o[r] && (u || (u = []), u.push(r));
                            if ((u || !t) && !H(this, i, e, u)) return !1 }
                        for (r in h)(a = o[r]) && (m && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(h) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[r]), _ && (n[r] = 1);!this._firstPT && this._initted && this._enabled(!1, !1) } }
                return l }, r.invalidate = function() {
                return this._notifyPluginsOfEnabled && I._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], R.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -_, this.render(-this._delay)), this }, r._enabled = function(t, e) {
                if (o || a.wake(), t && this._gc) {
                    var i, s = this._targets;
                    if (s)
                        for (i = s.length; --i > -1;) this._siblings[i] = K(s[i], this, !0);
                    else this._siblings = K(this.target, this, !0) }
                return R.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? I._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1 }, I.to = function(t, e, i) {
                return new I(t, e, i) }, I.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new I(t, e, i) }, I.fromTo = function(t, e, i, s) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new I(t, e, s) }, I.delayedCall = function(t, e, i, s, n) {
                return new I(e, 0, { delay: t, onComplete: e, onCompleteParams: i, callbackScope: s, onReverseComplete: e, onReverseCompleteParams: i, immediateRender: !1, lazy: !1, useFrames: n, overwrite: 0 }) }, I.set = function(t, e) {
                return new I(t, 0, e) }, I.getTweensOf = function(t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : I.selector(t) || t;
                var i, s, n, r;
                if ((f(t) || E(t)) && "number" != typeof t[0]) {
                    for (i = t.length, s = []; --i > -1;) s = s.concat(I.getTweensOf(t[i], e));
                    for (i = s.length; --i > -1;)
                        for (r = s[i], n = i; --n > -1;) r === s[n] && s.splice(i, 1) } else
                    for (s = K(t).concat(), i = s.length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
                return s }, I.killTweensOf = I.killDelayedCallsTo = function(t, e, i) { "object" == typeof e && (i = e, e = !1);
                for (var s = I.getTweensOf(t, e), n = s.length; --n > -1;) s[n]._kill(i, t) };
            var W = v("plugins.TweenPlugin", function(t, e) { this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = W.prototype }, !0);
            if (r = W.prototype, W.version = "1.10.1", W.API = 2, r._firstPT = null, r._addTween = function(t, e, i, s, n, r) {
                    var a, o;
                    return null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - Number(i) : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) ? (this._firstPT = o = { _next: this._firstPT, t: t, p: e, s: i, c: a, f: "function" == typeof t[e], n: n || e, r: r }, o._next && (o._next._prev = o), o) : void 0 }, r.setRatio = function(t) {
                    for (var e, i = this._firstPT, s = 1e-6; i;) e = i.c * t + i.s, i.r ? e = Math.round(e) : s > e && e > -s && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next }, r._kill = function(t) {
                    var e, i = this._overwriteProps,
                        s = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                    return !1 }, r._roundProps = function(t, e) {
                    for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next }, I._onPluginEvent = function(t, e) {
                    var i, s, n, r, a, o = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; o;) {
                            for (a = o._next, s = n; s && s.pr > o.pr;) s = s._next;
                            (o._prev = s ? s._prev : r) ? o._prev._next = o: n = o, (o._next = s) ? s._prev = o : r = o, o = a }
                        o = e._firstPT = n }
                    for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                    return i }, W.activate = function(t) {
                    for (var e = t.length; --e > -1;) t[e].API === W.API && (F[(new t[e])._propName] = t[e]);
                    return !0 }, d.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        s = t.priority || 0,
                        n = t.overwriteProps,
                        r = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_roundProps", initAll: "_onInitAllProps" },
                        a = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() { W.call(this, i, s), this._overwriteProps = n || [] }, t.global === !0),
                        o = a.prototype = new W(i);
                    o.constructor = a, a.API = t.API;
                    for (e in r) "function" == typeof t[e] && (o[r[e]] = t[e]);
                    return a.version = t.version, W.activate([a]), a }, s = t._gsQueue) {
                for (n = 0; s.length > n; n++) s[n]();
                for (r in c) c[r].func || t.console.log("GSAP encountered missing dependency: com.greensock." + r) }
            o = !1 } })("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");
    var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
    (_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() { "use strict";
        _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
            var s = function(t) { e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                    var i, s, r = this.vars;
                    for (s in r) i = r[s], h(i) && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
                    h(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger) },
                r = 1e-10,
                n = i._internals,
                a = s._internals = {},
                o = n.isSelector,
                h = n.isArray,
                l = n.lazyTweens,
                _ = n.lazyRender,
                u = [],
                f = _gsScope._gsDefine.globals,
                c = function(t) {
                    var e, i = {};
                    for (e in t) i[e] = t[e];
                    return i },
                p = a.pauseCallback = function(t, e, i, s) {
                    var n, a = t._timeline,
                        o = a._totalTime,
                        h = t._startTime,
                        l = 0 > t._rawPrevTime || 0 === t._rawPrevTime && a._reversed,
                        _ = l ? 0 : r,
                        f = l ? r : 0;
                    if (e || !this._forcingPlayhead) {
                        for (a.pause(h), n = t._prev; n && n._startTime === h;) n._rawPrevTime = f, n = n._prev;
                        for (n = t._next; n && n._startTime === h;) n._rawPrevTime = _, n = n._next;
                        e && e.apply(s || a.vars.callbackScope || a, i || u), (this._forcingPlayhead || !a._paused) && a.seek(o) } },
                m = function(t) {
                    var e, i = [],
                        s = t.length;
                    for (e = 0; e !== s; i.push(t[e++]));
                    return i },
                d = s.prototype = new e;
            return s.version = "1.17.0", d.constructor = s, d.kill()._gc = d._forcingPlayhead = !1, d.to = function(t, e, s, r) {
                var n = s.repeat && f.TweenMax || i;
                return e ? this.add(new n(t, e, s), r) : this.set(t, s, r) }, d.from = function(t, e, s, r) {
                return this.add((s.repeat && f.TweenMax || i).from(t, e, s), r) }, d.fromTo = function(t, e, s, r, n) {
                var a = r.repeat && f.TweenMax || i;
                return e ? this.add(a.fromTo(t, e, s, r), n) : this.set(t, r, n) }, d.staggerTo = function(t, e, r, n, a, h, l, _) {
                var u, f = new s({ onComplete: h, onCompleteParams: l, callbackScope: _, smoothChildTiming: this.smoothChildTiming });
                for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], o(t) && (t = m(t)), n = n || 0, 0 > n && (t = m(t), t.reverse(), n *= -1), u = 0; t.length > u; u++) r.startAt && (r.startAt = c(r.startAt)), f.to(t[u], e, c(r), u * n);
                return this.add(f, a) }, d.staggerFrom = function(t, e, i, s, r, n, a, o) {
                return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, r, n, a, o) }, d.staggerFromTo = function(t, e, i, s, r, n, a, o, h) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, r, n, a, o, h) }, d.call = function(t, e, s, r) {
                return this.add(i.delayedCall(0, t, e, s), r) }, d.set = function(t, e, s) {
                return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s) }, s.exportRoot = function(t, e) { t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                var r, n, a = new s(t),
                    o = a._timeline;
                for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) n = r._next, e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = n;
                return o.add(a, 0), a }, d.add = function(r, n, a, o) {
                var l, _, u, f, c, p;
                if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t)) {
                    if (r instanceof Array || r && r.push && h(r)) {
                        for (a = a || "normal", o = o || 0, l = n, _ = r.length, u = 0; _ > u; u++) h(f = r[u]) && (f = new s({ tweens: f })), this.add(f, l), "string" != typeof f && "function" != typeof f && ("sequence" === a ? l = f._startTime + f.totalDuration() / f._timeScale : "start" === a && (f._startTime -= f.delay())), l += o;
                        return this._uncache(!0) }
                    if ("string" == typeof r) return this.addLabel(r, n);
                    if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                    r = i.delayedCall(0, r) }
                if (e.prototype.add.call(this, r, n), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                    for (c = this, p = c.rawTime() > r._startTime; c._timeline;) p && c._timeline.smoothChildTiming ? c.totalTime(c._totalTime, !0) : c._gc && c._enabled(!0, !1), c = c._timeline;
                return this }, d.remove = function(e) {
                if (e instanceof t) return this._remove(e, !1);
                if (e instanceof Array || e && e.push && h(e)) {
                    for (var i = e.length; --i > -1;) this.remove(e[i]);
                    return this }
                return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e) }, d._remove = function(t, i) { e.prototype._remove.call(this, t, i);
                var s = this._last;
                return s ? this._time > s._startTime + s._totalDuration / s._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this }, d.append = function(t, e) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t)) }, d.insert = d.insertMultiple = function(t, e, i, s) {
                return this.add(t, e || 0, i, s) }, d.appendMultiple = function(t, e, i, s) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s) }, d.addLabel = function(t, e) {
                return this._labels[t] = this._parseTimeOrLabel(e), this }, d.addPause = function(t, e, s, r) {
                var n = i.delayedCall(0, p, ["{self}", e, s, r], this);
                return n.data = "isPause", this.add(n, t) }, d.removeLabel = function(t) {
                return delete this._labels[t], this }, d.getLabelTime = function(t) {
                return null != this._labels[t] ? this._labels[t] : -1 }, d._parseTimeOrLabel = function(e, i, s, r) {
                var n;
                if (r instanceof t && r.timeline === this) this.remove(r);
                else if (r && (r instanceof Array || r.push && h(r)))
                    for (n = r.length; --n > -1;) r[n] instanceof t && r[n].timeline === this && this.remove(r[n]);
                if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
                if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                else {
                    if (n = e.indexOf("="), -1 === n) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                    i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)), e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration() }
                return Number(e) + i }, d.seek = function(t, e) {
                return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1) }, d.stop = function() {
                return this.paused(!0) }, d.gotoAndPlay = function(t, e) {
                return this.play(t, e) }, d.gotoAndStop = function(t, e) {
                return this.pause(t, e) }, d.render = function(t, e, i) { this._gc && this._enabled(!0, !1);
                var s, n, a, o, h, u = this._dirty ? this.totalDuration() : this._totalDuration,
                    f = this._time,
                    c = this._startTime,
                    p = this._timeScale,
                    m = this._paused;
                if (t >= u) this._totalTime = this._time = u, this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", h = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (h = !0, this._rawPrevTime > r && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = u + 1e-4;
                else if (1e-7 > t)
                    if (this._totalTime = this._time = 0, (0 !== f || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", n = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (h = n = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (h = !0), this._rawPrevTime = t;
                    else {
                        if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && n)
                            for (s = this._first; s && 0 === s._startTime;) s._duration || (n = !1), s = s._next;
                        t = 0, this._initted || (h = !0) }
                else this._totalTime = this._time = this._rawPrevTime = t;
                if (this._time !== f && this._first || i || h) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== f && t > 0 && (this._active = !0), 0 === f && this.vars.onStart && 0 !== this._time && (e || this._callback("onStart")), this._time >= f)
                        for (s = this._first; s && (a = s._next, !this._paused || m);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                    else
                        for (s = this._last; s && (a = s._prev, !this._paused || m);)(s._active || f >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                    this._onUpdate && (e || (l.length && _(), this._callback("onUpdate"))), o && (this._gc || (c === this._startTime || p !== this._timeScale) && (0 === this._time || u >= this.totalDuration()) && (n && (l.length && _(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o))) } }, d._hasPausedChild = function() {
                for (var t = this._first; t;) {
                    if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
                    t = t._next }
                return !1 }, d.getChildren = function(t, e, s, r) { r = r || -9999999999;
                for (var n = [], a = this._first, o = 0; a;) r > a._startTime || (a instanceof i ? e !== !1 && (n[o++] = a) : (s !== !1 && (n[o++] = a), t !== !1 && (n = n.concat(a.getChildren(!0, e, s)), o = n.length))), a = a._next;
                return n }, d.getTweensOf = function(t, e) {
                var s, r, n = this._gc,
                    a = [],
                    o = 0;
                for (n && this._enabled(!0, !0), s = i.getTweensOf(t), r = s.length; --r > -1;)(s[r].timeline === this || e && this._contains(s[r])) && (a[o++] = s[r]);
                return n && this._enabled(!1, !0), a }, d.recent = function() {
                return this._recent }, d._contains = function(t) {
                for (var e = t.timeline; e;) {
                    if (e === this) return !0;
                    e = e.timeline }
                return !1 }, d.shiftChildren = function(t, e, i) { i = i || 0;
                for (var s, r = this._first, n = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                if (e)
                    for (s in n) n[s] >= i && (n[s] += t);
                return this._uncache(!0) }, d._kill = function(t, e) {
                if (!t && !e) return this._enabled(!1, !1);
                for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1;) i[s]._kill(t, e) && (r = !0);
                return r }, d.clear = function(t) {
                var e = this.getChildren(!1, !0, !0),
                    i = e.length;
                for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                return t !== !1 && (this._labels = {}), this._uncache(!0) }, d.invalidate = function() {
                for (var e = this._first; e;) e.invalidate(), e = e._next;
                return t.prototype.invalidate.call(this) }, d._enabled = function(t, i) {
                if (t === this._gc)
                    for (var s = this._first; s;) s._enabled(t, !0), s = s._next;
                return e.prototype._enabled.call(this, t, i) }, d.totalTime = function() { this._forcingPlayhead = !0;
                var e = t.prototype.totalTime.apply(this, arguments);
                return this._forcingPlayhead = !1, e }, d.duration = function(t) {
                return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration) }, d.totalDuration = function(t) {
                if (!arguments.length) {
                    if (this._dirty) {
                        for (var e, i, s = 0, r = this._last, n = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime, 0 > r._startTime && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), n = 0), i = r._startTime + r._totalDuration / r._timeScale, i > s && (s = i), r = e;
                        this._duration = this._totalDuration = s, this._dirty = !1 }
                    return this._totalDuration }
                return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this }, d.paused = function(e) {
                if (!e)
                    for (var i = this._first, s = this._time; i;) i._startTime === s && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                return t.prototype.paused.apply(this, arguments) }, d.usesFrames = function() {
                for (var e = this._timeline; e._timeline;) e = e._timeline;
                return e === t._rootFramesTimeline }, d.rawTime = function() {
                return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale }, s }, !0) }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
        function(t) { "use strict";
            var e = function() {
                return (_gsScope.GreenSockGlobals || _gsScope)[t] }; "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("./TweenLite.js"), module.exports = e()) }("TimelineLite");
    var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
    (_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() { "use strict";
        _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
            var e, i, s, r = _gsScope.GreenSockGlobals || _gsScope,
                n = r.com.greensock,
                a = 2 * Math.PI,
                o = Math.PI / 2,
                h = n._class,
                l = function(e, i) {
                    var s = h("easing." + e, function() {}, !0),
                        r = s.prototype = new t;
                    return r.constructor = s, r.getRatio = i, s },
                _ = t.register || function() {},
                u = function(t, e, i, s) {
                    var r = h("easing." + t, { easeOut: new e, easeIn: new i, easeInOut: new s }, !0);
                    return _(r, t), r },
                c = function(t, e, i) { this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t) },
                f = function(e, i) {
                    var s = h("easing." + e, function(t) { this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1 }, !0),
                        r = s.prototype = new t;
                    return r.constructor = s, r.getRatio = i, r.config = function(t) {
                        return new s(t) }, s },
                p = u("Back", f("BackOut", function(t) {
                    return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1 }), f("BackIn", function(t) {
                    return t * t * ((this._p1 + 1) * t - this._p1) }), f("BackInOut", function(t) {
                    return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2) })),
                m = h("easing.SlowMo", function(t, e, i) { e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0 }, !0),
                d = m.prototype = new t;
            return d.constructor = m, d.getRatio = function(t) {
                var e = t + (.5 - t) * this._p;
                return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e }, m.ease = new m(.7, .7), d.config = m.config = function(t, e, i) {
                return new m(t, e, i) }, e = h("easing.SteppedEase", function(t) { t = t || 1, this._p1 = 1 / t, this._p2 = t + 1 }, !0), d = e.prototype = new t, d.constructor = e, d.getRatio = function(t) {
                return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1 }, d.config = e.config = function(t) {
                return new e(t) }, i = h("easing.RoughEase", function(e) { e = e || {};
                for (var i, s, r, n, a, o, h = e.taper || "none", l = [], _ = 0, u = 0 | (e.points || 20), f = u, p = e.randomize !== !1, m = e.clamp === !0, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) i = p ? Math.random() : 1 / u * f, s = d ? d.getRatio(i) : i, "none" === h ? r = g : "out" === h ? (n = 1 - i, r = n * n * g) : "in" === h ? r = i * i * g : .5 > i ? (n = 2 * i, r = .5 * n * n * g) : (n = 2 * (1 - i), r = .5 * n * n * g), p ? s += Math.random() * r - .5 * r : f % 2 ? s += .5 * r : s -= .5 * r, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), l[_++] = { x: i, y: s };
                for (l.sort(function(t, e) {
                    return t.x - e.x }), o = new c(1, 1, null), f = u; --f > -1;) a = l[f], o = new c(a.x, a.y, o);
                this._prev = new c(0, 0, 0 !== o.t ? o : o.next) }, !0), d = i.prototype = new t, d.constructor = i, d.getRatio = function(t) {
                var e = this._prev;
                if (t > e.t) {
                    for (; e.next && t >= e.t;) e = e.next;
                    e = e.prev } else
                    for (; e.prev && e.t >= t;) e = e.prev;
                return this._prev = e, e.v + (t - e.t) / e.gap * e.c }, d.config = function(t) {
                return new i(t) }, i.ease = new i, u("Bounce", l("BounceOut", function(t) {
                return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375 }), l("BounceIn", function(t) {
                return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375) }), l("BounceInOut", function(t) {
                var e = .5 > t;
                return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5 })), u("Circ", l("CircOut", function(t) {
                return Math.sqrt(1 - (t -= 1) * t) }), l("CircIn", function(t) {
                return -(Math.sqrt(1 - t * t) - 1) }), l("CircInOut", function(t) {
                return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1) })), s = function(e, i, s) {
                var r = h("easing." + e, function(t, e) { this._p1 = t >= 1 ? t : 1, this._p2 = (e || s) / (1 > t ? t : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2 }, !0),
                    n = r.prototype = new t;
                return n.constructor = r, n.getRatio = i, n.config = function(t, e) {
                    return new r(t, e) }, r }, u("Elastic", s("ElasticOut", function(t) {
                return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1 }, .3), s("ElasticIn", function(t) {
                return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)) }, .3), s("ElasticInOut", function(t) {
                return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) + 1 }, .45)), u("Expo", l("ExpoOut", function(t) {
                return 1 - Math.pow(2, -10 * t) }), l("ExpoIn", function(t) {
                return Math.pow(2, 10 * (t - 1)) - .001 }), l("ExpoInOut", function(t) {
                return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1))) })), u("Sine", l("SineOut", function(t) {
                return Math.sin(t * o) }), l("SineIn", function(t) {
                return -Math.cos(t * o) + 1 }), l("SineInOut", function(t) {
                return -.5 * (Math.cos(Math.PI * t) - 1) })), h("easing.EaseLookup", { find: function(e) {
                return t.map[e] } }, !0), _(r.SlowMo, "SlowMo", "ease,"), _(i, "RoughEase", "ease,"), _(e, "SteppedEase", "ease,"), p }, !0) }), _gsScope._gsDefine && _gsScope._gsQueue.pop()();
    var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
    (_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() { "use strict";
        _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
            var i, r, s, n, a = function() { t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio },
                o = _gsScope._gsDefine.globals,
                l = {},
                h = a.prototype = new t("css");
            h.constructor = a, a.version = "1.17.0", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", a.defaultSmoothOrigin = !0, h = "px", a.suffixMap = { top: h, right: h, bottom: h, left: h, width: h, height: h, fontSize: h, padding: h, margin: h, perspective: h, lineHeight: "" };
            var u, f, c, p, _, d, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                x = /(?:\d|\-|\+|=|#|\.)*/g,
                T = /opacity *= *([^)]*)/i,
                w = /opacity:([^;]*)/i,
                b = /alpha\(opacity *=.+?\)/i,
                P = /^(rgb|hsl)/,
                S = /([A-Z])/g,
                O = /-([a-z])/gi,
                k = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                C = function(t, e) {
                    return e.toUpperCase() },
                R = /(?:Left|Right|Width)/i,
                A = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                M = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                D = /,(?=[^\)]*(?:\(|$))/gi,
                N = Math.PI / 180,
                L = 180 / Math.PI,
                F = {},
                X = document,
                z = function(t) {
                    return X.createElementNS ? X.createElementNS("http://www.w3.org/1999/xhtml", t) : X.createElement(t) },
                B = z("div"),
                E = z("img"),
                I = a._internals = { _specialProps: l },
                Y = navigator.userAgent,
                W = function() {
                    var t = Y.indexOf("Android"),
                        e = z("a");
                    return c = -1 !== Y.indexOf("Safari") && -1 === Y.indexOf("Chrome") && (-1 === t || Number(Y.substr(t + 8, 1)) > 3), _ = c && 6 > Number(Y.substr(Y.indexOf("Version/") + 8, 1)), p = -1 !== Y.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y)) && (d = parseFloat(RegExp.$1)), e ? (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) : !1 }(),
                V = function(t) {
                    return T.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1 },
                j = function(t) { window.console && console.log(t) },
                G = "",
                U = "",
                q = function(t, e) { e = e || B;
                    var i, r, s = e.style;
                    if (void 0 !== s[t]) return t;
                    for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5; --r > -1 && void 0 === s[i[r] + t];);
                    return r >= 0 ? (U = 3 === r ? "ms" : i[r], G = "-" + U.toLowerCase() + "-", U + t) : null },
                H = X.defaultView ? X.defaultView.getComputedStyle : function() {},
                Q = a.getStyle = function(t, e, i, r, s) {
                    var n;
                    return W || "opacity" !== e ? (!r && t.style[e] ? n = t.style[e] : (i = i || H(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(S, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]), null == s || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : s) : V(t) },
                Z = I.convertToPixels = function(t, i, r, s, n) {
                    if ("px" === s || !s) return r;
                    if ("auto" === s || !r) return 0;
                    var o, l, h, u = R.test(i),
                        f = t,
                        c = B.style,
                        p = 0 > r;
                    if (p && (r = -r), "%" === s && -1 !== i.indexOf("border")) o = r / 100 * (u ? t.clientWidth : t.clientHeight);
                    else {
                        if (c.cssText = "border:0 solid red;position:" + Q(t, "position") + ";line-height:0;", "%" !== s && f.appendChild) c[u ? "borderLeftWidth" : "borderTopWidth"] = r + s;
                        else {
                            if (f = t.parentNode || X.body, l = f._gsCache, h = e.ticker.frame, l && u && l.time === h) return l.width * r / 100;
                            c[u ? "width" : "height"] = r + s }
                        f.appendChild(B), o = parseFloat(B[u ? "offsetWidth" : "offsetHeight"]), f.removeChild(B), u && "%" === s && a.cacheWidths !== !1 && (l = f._gsCache = f._gsCache || {}, l.time = h, l.width = 100 * (o / r)), 0 !== o || n || (o = Z(t, i, r, s, !0)) }
                    return p ? -o : o },
                $ = I.calculateOffset = function(t, e, i) {
                    if ("absolute" !== Q(t, "position", i)) return 0;
                    var r = "left" === e ? "Left" : "Top",
                        s = Q(t, "margin" + r, i);
                    return t["offset" + r] - (Z(t, e, parseFloat(s), s.replace(x, "")) || 0) },
                K = function(t, e) {
                    var i, r, s, n = {};
                    if (e = e || H(t, null))
                        if (i = e.length)
                            for (; --i > -1;) s = e[i], (-1 === s.indexOf("-transform") || Pe === s) && (n[s.replace(O, C)] = e.getPropertyValue(s));
                        else
                            for (i in e)(-1 === i.indexOf("Transform") || be === i) && (n[i] = e[i]);
                    else if (e = t.currentStyle || t.style)
                        for (i in e) "string" == typeof i && void 0 === n[i] && (n[i.replace(O, C)] = e[i]);
                    return W || (n.opacity = V(t)), r = Xe(t, e, !1), n.rotation = r.rotation, n.skewX = r.skewX, n.scaleX = r.scaleX, n.scaleY = r.scaleY, n.x = r.x, n.y = r.y, Oe && (n.z = r.z, n.rotationX = r.rotationX, n.rotationY = r.rotationY, n.scaleZ = r.scaleZ), n.filters && delete n.filters, n },
                J = function(t, e, i, r, s) {
                    var n, a, o, l = {},
                        h = t.style;
                    for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || s && s[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (l[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(y, "") ? n : 0 : $(t, a), void 0 !== h[a] && (o = new pe(h, a, h[a], o)));
                    if (r)
                        for (a in r) "className" !== a && (l[a] = r[a]);
                    return { difs: l, firstMPT: o } },
                te = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
                ee = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                ie = function(t, e, i) {
                    var r = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                        s = te[e],
                        n = s.length;
                    for (i = i || H(t, null); --n > -1;) r -= parseFloat(Q(t, "padding" + s[n], i, !0)) || 0, r -= parseFloat(Q(t, "border" + s[n] + "Width", i, !0)) || 0;
                    return r },
                re = function(t, e) {
                    (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                    var i = t.split(" "),
                        r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                        s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                    return null == s ? s = "center" === r ? "50%" : "0" : "center" === s && (s = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), t = r + " " + s + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== s.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === s.charAt(1), e.ox = parseFloat(r.replace(y, "")), e.oy = parseFloat(s.replace(y, "")), e.v = t), e || t },
                se = function(t, e) {
                    return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) },
                ne = function(t, e) {
                    return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) },
                ae = function(t, e, i, r) {
                    var s, n, a, o, l, h = 1e-6;
                    return null == t ? o = e : "number" == typeof t ? o = t : (s = 360, n = t.split("_"), l = "=" === t.charAt(1), a = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * (-1 === t.indexOf("rad") ? 1 : L) - (l ? 0 : e), n.length && (r && (r[i] = e + a), -1 !== t.indexOf("short") && (a %= s, a !== a % (s / 2) && (a = 0 > a ? a + s : a - s)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * s) % s - (0 | a / s) * s : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * s) % s - (0 | a / s) * s)), o = e + a), h > o && o > -h && (o = 0), o },
                oe = { aqua: [0, 255, 255], lime: [0, 255, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, 255], navy: [0, 0, 128], white: [255, 255, 255], fuchsia: [255, 0, 255], olive: [128, 128, 0], yellow: [255, 255, 0], orange: [255, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [255, 0, 0], pink: [255, 192, 203], cyan: [0, 255, 255], transparent: [255, 255, 255, 0] },
                le = function(t, e, i) {
                    return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5 },
                he = a.parseColor = function(t) {
                    var e, i, r, s, n, a;
                    return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), oe[t] ? oe[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), r = t.charAt(3), t = "#" + e + e + i + i + r + r), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(m), s = Number(t[0]) % 360 / 360, n = Number(t[1]) / 100, a = Number(t[2]) / 100, i = .5 >= a ? a * (n + 1) : a + n - a * n, e = 2 * a - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = le(s + 1 / 3, e, i), t[1] = le(s, e, i), t[2] = le(s - 1 / 3, e, i), t) : (t = t.match(m) || oe.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : oe.black },
                ue = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
            for (h in oe) ue += "|" + h + "\\b";
            ue = RegExp(ue + ")", "gi");
            var fe = function(t, e, i, r) {
                    if (null == t) return function(t) {
                        return t };
                    var s, n = e ? (t.match(ue) || [""])[0] : "",
                        a = t.split(n).join("").match(v) || [],
                        o = t.substr(0, t.indexOf(a[0])),
                        l = ")" === t.charAt(t.length - 1) ? ")" : "",
                        h = -1 !== t.indexOf(" ") ? " " : ",",
                        u = a.length,
                        f = u > 0 ? a[0].replace(m, "") : "";
                    return u ? s = e ? function(t) {
                        var e, c, p, _;
                        if ("number" == typeof t) t += f;
                        else if (r && D.test(t)) {
                            for (_ = t.replace(D, "|").split("|"), p = 0; _.length > p; p++) _[p] = s(_[p]);
                            return _.join(",") }
                        if (e = (t.match(ue) || [n])[0], c = t.split(e).join("").match(v) || [], p = c.length, u > p--)
                            for (; u > ++p;) c[p] = i ? c[0 | (p - 1) / 2] : a[p];
                        return o + c.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "") } : function(t) {
                        var e, n, c;
                        if ("number" == typeof t) t += f;
                        else if (r && D.test(t)) {
                            for (n = t.replace(D, "|").split("|"), c = 0; n.length > c; c++) n[c] = s(n[c]);
                            return n.join(",") }
                        if (e = t.match(v) || [], c = e.length, u > c--)
                            for (; u > ++c;) e[c] = i ? e[0 | (c - 1) / 2] : a[c];
                        return o + e.join(h) + l } : function(t) {
                        return t } },
                ce = function(t) {
                    return t = t.split(","),
                        function(e, i, r, s, n, a, o) {
                            var l, h = (i + "").split(" ");
                            for (o = {}, l = 0; 4 > l; l++) o[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                            return s.parse(e, o, n, a) } },
                pe = (I._setPluginRatio = function(t) { this.plugin.setRatio(t);
                    for (var e, i, r, s, n = this.data, a = n.proxy, o = n.firstMPT, l = 1e-6; o;) e = a[o.v], o.r ? e = Math.round(e) : l > e && e > -l && (e = 0), o.t[o.p] = e, o = o._next;
                    if (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t)
                        for (o = n.firstMPT; o;) {
                            if (i = o.t, i.type) {
                                if (1 === i.type) {
                                    for (s = i.xs0 + i.s + i.xs1, r = 1; i.l > r; r++) s += i["xn" + r] + i["xs" + (r + 1)];
                                    i.e = s } } else i.e = i.s + i.xs0;
                            o = o._next } }, function(t, e, i, r, s) { this.t = t, this.p = e, this.v = i, this.r = s, r && (r._prev = this, this._next = r) }),
                _e = (I._parseToProxy = function(t, e, i, r, s, n) {
                    var a, o, l, h, u, f = r,
                        c = {},
                        p = {},
                        _ = i._transform,
                        d = F;
                    for (i._transform = null, F = e, r = u = i.parse(t, e, r, s), F = d, n && (i._transform = _, f && (f._prev = null, f._prev && (f._prev._next = null))); r && r !== f;) {
                        if (1 >= r.type && (o = r.p, p[o] = r.s + r.c, c[o] = r.s, n || (h = new pe(r, "s", o, h, r.r), r.c = 0), 1 === r.type))
                            for (a = r.l; --a > 0;) l = "xn" + a, o = r.p + "_" + l, p[o] = r.data[l], c[o] = r[l], n || (h = new pe(r, l, o, h, r.rxp[l]));
                        r = r._next }
                    return { proxy: c, end: p, firstMPT: h, pt: u } }, I.CSSPropTween = function(t, e, r, s, a, o, l, h, u, f, c) { this.t = t, this.p = e, this.s = r, this.c = s, this.n = l || e, t instanceof _e || n.push(this.n), this.r = h, this.type = o || 0, u && (this.pr = u, i = !0), this.b = void 0 === f ? r : f, this.e = void 0 === c ? r + s : c, a && (this._next = a, a._prev = this) }),
                de = function(t, e, i, r, s, n) {
                    var a = new _e(t, e, i, r - i, s, -1, n);
                    return a.b = i, a.e = a.xs0 = r, a },
                me = a.parseComplex = function(t, e, i, r, s, n, a, o, l, h) { i = i || n || "", a = new _e(t, e, 0, 0, a, h ? 2 : 1, null, !1, o, i, r), r += "";
                    var f, c, p, _, d, v, y, x, T, w, b, S, O = i.split(", ").join(",").split(" "),
                        k = r.split(", ").join(",").split(" "),
                        C = O.length,
                        R = u !== !1;
                    for ((-1 !== r.indexOf(",") || -1 !== i.indexOf(",")) && (O = O.join(" ").replace(D, ", ").split(" "), k = k.join(" ").replace(D, ", ").split(" "), C = O.length), C !== k.length && (O = (n || "").split(" "), C = O.length), a.plugin = l, a.setRatio = h, f = 0; C > f; f++)
                        if (_ = O[f], d = k[f], x = parseFloat(_), x || 0 === x) a.appendXtra("", x, se(d, x), d.replace(g, ""), R && -1 !== d.indexOf("px"), !0);
                        else if (s && ("#" === _.charAt(0) || oe[_] || P.test(_))) S = "," === d.charAt(d.length - 1) ? ")," : ")", _ = he(_), d = he(d), T = _.length + d.length > 6, T && !W && 0 === d[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(k[f]).join("transparent")) : (W || (T = !1), a.appendXtra(T ? "rgba(" : "rgb(", _[0], d[0] - _[0], ",", !0, !0).appendXtra("", _[1], d[1] - _[1], ",", !0).appendXtra("", _[2], d[2] - _[2], T ? "," : S, !0), T && (_ = 4 > _.length ? 1 : _[3], a.appendXtra("", _, (4 > d.length ? 1 : d[3]) - _, S, !1)));
                        else if (v = _.match(m)) {
                            if (y = d.match(g), !y || y.length !== v.length) return a;
                            for (p = 0, c = 0; v.length > c; c++) b = v[c], w = _.indexOf(b, p), a.appendXtra(_.substr(p, w - p), Number(b), se(y[c], b), "", R && "px" === _.substr(w + b.length, 2), 0 === c), p = w + b.length;
                            a["xs" + a.l] += _.substr(p) } else a["xs" + a.l] += a.l ? " " + _ : _;
                    if (-1 !== r.indexOf("=") && a.data) {
                        for (S = a.xs0 + a.data.s, f = 1; a.l > f; f++) S += a["xs" + f] + a.data["xn" + f];
                        a.e = S + a["xs" + f] }
                    return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a },
                ge = 9;
            for (h = _e.prototype, h.l = h.pr = 0; --ge > 0;) h["xn" + ge] = 0, h["xs" + ge] = "";
            h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function(t, e, i, r, s, n) {
                var a = this,
                    o = a.l;
                return a["xs" + o] += n && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = r || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = s, a["xn" + o] = e, a.plugin || (a.xfirst = new _e(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, s, a.pr), a.xfirst.xs0 = 0), a) : (a.data = { s: e + i }, a.rxp = {}, a.s = e, a.c = i, a.r = s, a)) : (a["xs" + o] += e + (r || ""), a) };
            var ve = function(t, e) { e = e || {}, this.p = e.prefix ? q(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || fe(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0 },
                ye = I._registerComplexSpecialProp = function(t, e, i) { "object" != typeof e && (e = { parser: i });
                    var r, s, n = t.split(","),
                        a = e.defaultValue;
                    for (i = i || [a], r = 0; n.length > r; r++) e.prefix = 0 === r && e.prefix, e.defaultValue = i[r] || a, s = new ve(n[r], e) },
                xe = function(t) {
                    if (!l[t]) {
                        var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                        ye(t, { parser: function(t, i, r, s, n, a, h) {
                            var u = o.com.greensock.plugins[e];
                            return u ? (u._cssRegister(), l[r].parse(t, i, r, s, n, a, h)) : (j("Error: " + e + " js file not loaded."), n) } }) } };
            h = ve.prototype, h.parseComplex = function(t, e, i, r, s, n) {
                var a, o, l, h, u, f, c = this.keyword;
                if (this.multi && (D.test(i) || D.test(e) ? (o = e.replace(D, "|").split("|"), l = i.replace(D, "|").split("|")) : c && (o = [e], l = [i])), l) {
                    for (h = l.length > o.length ? l.length : o.length, a = 0; h > a; a++) e = o[a] = o[a] || this.dflt, i = l[a] = l[a] || this.dflt, c && (u = e.indexOf(c), f = i.indexOf(c), u !== f && (-1 === f ? o[a] = o[a].split(c).join("") : -1 === u && (o[a] += " " + c)));
                    e = o.join(", "), i = l.join(", ") }
                return me(t, this.p, e, i, this.clrs, this.dflt, r, this.pr, s, n) }, h.parse = function(t, e, i, r, n, a) {
                return this.parseComplex(t.style, this.format(Q(t, this.p, s, !1, this.dflt)), this.format(e), n, a) }, a.registerSpecialProp = function(t, e, i) { ye(t, { parser: function(t, r, s, n, a, o) {
                var l = new _e(t, s, 0, 0, a, 2, s, !1, i);
                return l.plugin = o, l.setRatio = e(t, r, n._tween, s), l }, priority: i }) }, a.useSVGTransformAttr = c || p;
            var Te, we = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                be = q("transform"),
                Pe = G + "transform",
                Se = q("transformOrigin"),
                Oe = null !== q("perspective"),
                ke = I.Transform = function() { this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = a.defaultForce3D !== !1 && Oe ? a.defaultForce3D || "auto" : !1 },
                Ce = window.SVGElement,
                Re = function(t, e, i) {
                    var r, s = X.createElementNS("http://www.w3.org/2000/svg", t),
                        n = /([a-z])([A-Z])/g;
                    for (r in i) s.setAttributeNS(null, r.replace(n, "$1-$2").toLowerCase(), i[r]);
                    return e.appendChild(s), s },
                Ae = X.documentElement,
                Me = function() {
                    var t, e, i, r = d || /Android/i.test(Y) && !window.chrome;
                    return X.createElementNS && !r && (t = Re("svg", Ae), e = Re("rect", t, { width: 100, height: 50, x: 100 }), i = e.getBoundingClientRect().width, e.style[Se] = "50% 50%", e.style[be] = "scaleX(0.5)", r = i === e.getBoundingClientRect().width && !(p && Oe), Ae.removeChild(t)), r }(),
                De = function(t, e, i, r, s) {
                    var n, o, l, h, u, f, c, p, _, d, m, g, v, y, x = t._gsTransform,
                        T = Fe(t, !0);
                    x && (v = x.xOrigin, y = x.yOrigin), (!r || 2 > (n = r.split(" ")).length) && (c = t.getBBox(), e = re(e).split(" "), n = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * c.width : parseFloat(e[0])) + c.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * c.height : parseFloat(e[1])) + c.y]), i.xOrigin = h = parseFloat(n[0]), i.yOrigin = u = parseFloat(n[1]), r && T !== Le && (f = T[0], c = T[1], p = T[2], _ = T[3], d = T[4], m = T[5], g = f * _ - c * p, o = h * (_ / g) + u * (-p / g) + (p * m - _ * d) / g, l = h * (-c / g) + u * (f / g) - (f * m - c * d) / g, h = i.xOrigin = n[0] = o, u = i.yOrigin = n[1] = l), x && (s || s !== !1 && a.defaultSmoothOrigin !== !1 ? (o = h - v, l = u - y, x.xOffset += o * T[0] + l * T[2] - o, x.yOffset += o * T[1] + l * T[3] - l) : x.xOffset = x.yOffset = 0), t.setAttribute("data-svg-origin", n.join(" ")) },
                Ne = function(t) {
                    return !!(Ce && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM)) },
                Le = [1, 0, 0, 1, 0, 0],
                Fe = function(t, e) {
                    var i, r, s, n, a, o = t._gsTransform || new ke,
                        l = 1e5;
                    if (be ? r = Q(t, Pe, null, !0) : t.currentStyle && (r = t.currentStyle.filter.match(A), r = r && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), o.x || 0, o.y || 0].join(",") : ""), i = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, (o.svg || t.getBBox && Ne(t)) && (i && -1 !== (t.style[be] + "").indexOf("matrix") && (r = t.style[be], i = 0), s = t.getAttribute("transform"), i && s && (-1 !== s.indexOf("matrix") ? (r = s, i = 0) : -1 !== s.indexOf("translate") && (r = "matrix(1,0,0,1," + s.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return Le;
                    for (s = (r || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], ge = s.length; --ge > -1;) n = Number(s[ge]), s[ge] = (a = n - (n |= 0)) ? (0 | a * l + (0 > a ? -.5 : .5)) / l + n : n;
                    return e && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s },
                Xe = I.getTransform = function(t, i, r, n) {
                    if (t._gsTransform && r && !n) return t._gsTransform;
                    var o, l, h, u, f, c, p = r ? t._gsTransform || new ke : new ke,
                        _ = 0 > p.scaleX,
                        d = 2e-5,
                        m = 1e5,
                        g = Oe ? parseFloat(Q(t, Se, i, !1, "0 0 0").split(" ")[2]) || p.zOrigin || 0 : 0,
                        v = parseFloat(a.defaultTransformPerspective) || 0;
                    if (p.svg = !(!t.getBBox || !Ne(t)), p.svg && (De(t, Q(t, Se, s, !1, "50% 50%") + "", p, t.getAttribute("data-svg-origin")), Te = a.useSVGTransformAttr || Me), o = Fe(t), o !== Le) {
                        if (16 === o.length) {
                            var y, x, T, w, b, P = o[0],
                                S = o[1],
                                O = o[2],
                                k = o[3],
                                C = o[4],
                                R = o[5],
                                A = o[6],
                                M = o[7],
                                D = o[8],
                                N = o[9],
                                F = o[10],
                                X = o[12],
                                z = o[13],
                                B = o[14],
                                E = o[11],
                                I = Math.atan2(A, F);
                            p.zOrigin && (B = -p.zOrigin, X = D * B - o[12], z = N * B - o[13], B = F * B + p.zOrigin - o[14]), p.rotationX = I * L, I && (w = Math.cos(-I), b = Math.sin(-I), y = C * w + D * b, x = R * w + N * b, T = A * w + F * b, D = C * -b + D * w, N = R * -b + N * w, F = A * -b + F * w, E = M * -b + E * w, C = y, R = x, A = T), I = Math.atan2(D, F), p.rotationY = I * L, I && (w = Math.cos(-I), b = Math.sin(-I), y = P * w - D * b, x = S * w - N * b, T = O * w - F * b, N = S * b + N * w, F = O * b + F * w, E = k * b + E * w, P = y, S = x, O = T), I = Math.atan2(S, P), p.rotation = I * L, I && (w = Math.cos(-I), b = Math.sin(-I), P = P * w + C * b, x = S * w + R * b, R = S * -b + R * w, A = O * -b + A * w, S = x), p.rotationX && Math.abs(p.rotationX) + Math.abs(p.rotation) > 359.9 && (p.rotationX = p.rotation = 0, p.rotationY += 180), p.scaleX = (0 | Math.sqrt(P * P + S * S) * m + .5) / m, p.scaleY = (0 | Math.sqrt(R * R + N * N) * m + .5) / m, p.scaleZ = (0 | Math.sqrt(A * A + F * F) * m + .5) / m, p.skewX = 0, p.perspective = E ? 1 / (0 > E ? -E : E) : 0, p.x = X, p.y = z, p.z = B, p.svg && (p.x -= p.xOrigin - (p.xOrigin * P - p.yOrigin * C), p.y -= p.yOrigin - (p.yOrigin * S - p.xOrigin * R)) } else if (!(Oe && !n && o.length && p.x === o[4] && p.y === o[5] && (p.rotationX || p.rotationY) || void 0 !== p.x && "none" === Q(t, "display", i))) {
                            var Y = o.length >= 6,
                                W = Y ? o[0] : 1,
                                V = o[1] || 0,
                                j = o[2] || 0,
                                G = Y ? o[3] : 1;
                            p.x = o[4] || 0, p.y = o[5] || 0, h = Math.sqrt(W * W + V * V), u = Math.sqrt(G * G + j * j), f = W || V ? Math.atan2(V, W) * L : p.rotation || 0, c = j || G ? Math.atan2(j, G) * L + f : p.skewX || 0, Math.abs(c) > 90 && 270 > Math.abs(c) && (_ ? (h *= -1, c += 0 >= f ? 180 : -180, f += 0 >= f ? 180 : -180) : (u *= -1, c += 0 >= c ? 180 : -180)), p.scaleX = h, p.scaleY = u, p.rotation = f, p.skewX = c, Oe && (p.rotationX = p.rotationY = p.z = 0, p.perspective = v, p.scaleZ = 1), p.svg && (p.x -= p.xOrigin - (p.xOrigin * W + p.yOrigin * j), p.y -= p.yOrigin - (p.xOrigin * V + p.yOrigin * G)) }
                        p.zOrigin = g;
                        for (l in p) d > p[l] && p[l] > -d && (p[l] = 0) }
                    return r && (t._gsTransform = p, p.svg && (Te && t.style[be] ? e.delayedCall(.001, function() { Ie(t.style, be) }) : !Te && t.getAttribute("transform") && e.delayedCall(.001, function() { t.removeAttribute("transform") }))), p },
                ze = function(t) {
                    var e, i, r = this.data,
                        s = -r.rotation * N,
                        n = s + r.skewX * N,
                        a = 1e5,
                        o = (0 | Math.cos(s) * r.scaleX * a) / a,
                        l = (0 | Math.sin(s) * r.scaleX * a) / a,
                        h = (0 | Math.sin(n) * -r.scaleY * a) / a,
                        u = (0 | Math.cos(n) * r.scaleY * a) / a,
                        f = this.t.style,
                        c = this.t.currentStyle;
                    if (c) { i = l, l = -h, h = -i, e = c.filter, f.filter = "";
                        var p, _, m = this.t.offsetWidth,
                            g = this.t.offsetHeight,
                            v = "absolute" !== c.position,
                            y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + h + ", M22=" + u,
                            w = r.x + m * r.xPercent / 100,
                            b = r.y + g * r.yPercent / 100;
                        if (null != r.ox && (p = (r.oxp ? .01 * m * r.ox : r.ox) - m / 2, _ = (r.oyp ? .01 * g * r.oy : r.oy) - g / 2, w += p - (p * o + _ * l), b += _ - (p * h + _ * u)), v ? (p = m / 2, _ = g / 2, y += ", Dx=" + (p - (p * o + _ * l) + w) + ", Dy=" + (_ - (p * h + _ * u) + b) + ")") : y += ", sizingMethod='auto expand')", f.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(M, y) : y + " " + e, (0 === t || 1 === t) && 1 === o && 0 === l && 0 === h && 1 === u && (v && -1 === y.indexOf("Dx=0, Dy=0") || T.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && f.removeAttribute("filter")), !v) {
                            var P, S, O, k = 8 > d ? 1 : -1;
                            for (p = r.ieOffsetX || 0, _ = r.ieOffsetY || 0, r.ieOffsetX = Math.round((m - ((0 > o ? -o : o) * m + (0 > l ? -l : l) * g)) / 2 + w), r.ieOffsetY = Math.round((g - ((0 > u ? -u : u) * g + (0 > h ? -h : h) * m)) / 2 + b), ge = 0; 4 > ge; ge++) S = ee[ge], P = c[S], i = -1 !== P.indexOf("px") ? parseFloat(P) : Z(this.t, S, parseFloat(P), P.replace(x, "")) || 0, O = i !== r[S] ? 2 > ge ? -r.ieOffsetX : -r.ieOffsetY : 2 > ge ? p - r.ieOffsetX : _ - r.ieOffsetY, f[S] = (r[S] = Math.round(i - O * (0 === ge || 2 === ge ? 1 : k))) + "px" } } },
                Be = I.set3DTransformRatio = I.setTransformRatio = function(t) {
                    var e, i, r, s, n, a, o, l, h, u, f, c, _, d, m, g, v, y, x, T, w, b, P, S = this.data,
                        O = this.t.style,
                        k = S.rotation,
                        C = S.rotationX,
                        R = S.rotationY,
                        A = S.scaleX,
                        M = S.scaleY,
                        D = S.scaleZ,
                        L = S.x,
                        F = S.y,
                        X = S.z,
                        z = S.svg,
                        B = S.perspective,
                        E = S.force3D;
                    if (!(((1 !== t && 0 !== t || "auto" !== E || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && E || X || B || R || C) && (!Te || !z) && Oe)) return k || S.skewX || z ? (k *= N, b = S.skewX * N, P = 1e5, e = Math.cos(k) * A, s = Math.sin(k) * A, i = Math.sin(k - b) * -M, n = Math.cos(k - b) * M, b && "simple" === S.skewType && (v = Math.tan(b), v = Math.sqrt(1 + v * v), i *= v, n *= v, S.skewY && (e *= v, s *= v)), z && (L += S.xOrigin - (S.xOrigin * e + S.yOrigin * i) + S.xOffset, F += S.yOrigin - (S.xOrigin * s + S.yOrigin * n) + S.yOffset, Te && (S.xPercent || S.yPercent) && (d = this.t.getBBox(), L += .01 * S.xPercent * d.width, F += .01 * S.yPercent * d.height), d = 1e-6, d > L && L > -d && (L = 0), d > F && F > -d && (F = 0)), x = (0 | e * P) / P + "," + (0 | s * P) / P + "," + (0 | i * P) / P + "," + (0 | n * P) / P + "," + L + "," + F + ")", z && Te ? this.t.setAttribute("transform", "matrix(" + x) : O[be] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + x) : O[be] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + A + ",0,0," + M + "," + L + "," + F + ")", void 0;
                    if (p && (d = 1e-4, d > A && A > -d && (A = D = 2e-5), d > M && M > -d && (M = D = 2e-5), !B || S.z || S.rotationX || S.rotationY || (B = 0)), k || S.skewX) k *= N, m = e = Math.cos(k), g = s = Math.sin(k), S.skewX && (k -= S.skewX * N, m = Math.cos(k), g = Math.sin(k), "simple" === S.skewType && (v = Math.tan(S.skewX * N), v = Math.sqrt(1 + v * v), m *= v, g *= v, S.skewY && (e *= v, s *= v))), i = -g, n = m;
                    else {
                        if (!(R || C || 1 !== D || B || z)) return O[be] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + L + "px," + F + "px," + X + "px)" + (1 !== A || 1 !== M ? " scale(" + A + "," + M + ")" : ""), void 0;
                        e = n = 1, i = s = 0 }
                    h = 1, r = a = o = l = u = f = 0, c = B ? -1 / B : 0, _ = S.zOrigin, d = 1e-6, T = ",", w = "0", k = R * N, k && (m = Math.cos(k), g = Math.sin(k), o = -g, u = c * -g, r = e * g, a = s * g, h = m, c *= m, e *= m, s *= m), k = C * N, k && (m = Math.cos(k), g = Math.sin(k), v = i * m + r * g, y = n * m + a * g, l = h * g, f = c * g, r = i * -g + r * m, a = n * -g + a * m, h *= m, c *= m, i = v, n = y), 1 !== D && (r *= D, a *= D, h *= D, c *= D), 1 !== M && (i *= M, n *= M, l *= M, f *= M), 1 !== A && (e *= A, s *= A, o *= A, u *= A), (_ || z) && (_ && (L += r * -_, F += a * -_, X += h * -_ + _), z && (L += S.xOrigin - (S.xOrigin * e + S.yOrigin * i) + S.xOffset, F += S.yOrigin - (S.xOrigin * s + S.yOrigin * n) + S.yOffset), d > L && L > -d && (L = w), d > F && F > -d && (F = w), d > X && X > -d && (X = 0)), x = S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(", x += (d > e && e > -d ? w : e) + T + (d > s && s > -d ? w : s) + T + (d > o && o > -d ? w : o), x += T + (d > u && u > -d ? w : u) + T + (d > i && i > -d ? w : i) + T + (d > n && n > -d ? w : n), C || R ? (x += T + (d > l && l > -d ? w : l) + T + (d > f && f > -d ? w : f) + T + (d > r && r > -d ? w : r), x += T + (d > a && a > -d ? w : a) + T + (d > h && h > -d ? w : h) + T + (d > c && c > -d ? w : c) + T) : x += ",0,0,0,0,1,0,", x += L + T + F + T + X + T + (B ? 1 + -X / B : 1) + ")", O[be] = x };
            h = ke.prototype, h.x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0, h.scaleX = h.scaleY = h.scaleZ = 1, ye("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", { parser: function(t, e, i, r, n, o, l) {
                if (r._lastParsedTransform === l) return n;
                r._lastParsedTransform = l;
                var h, u, f, c, p, _, d, m, g, v = t._gsTransform,
                    y = r._transform = Xe(t, s, !0, l.parseTransform),
                    x = t.style,
                    T = 1e-6,
                    w = we.length,
                    b = l,
                    P = {},
                    S = "transformOrigin";
                if ("string" == typeof b.transform && be) f = B.style, f[be] = b.transform, f.display = "block", f.position = "absolute", X.body.appendChild(B), h = Xe(B, null, !1), X.body.removeChild(B), null != b.xPercent && (h.xPercent = ne(b.xPercent, y.xPercent)), null != b.yPercent && (h.yPercent = ne(b.yPercent, y.yPercent));
                else if ("object" == typeof b) {
                    if (h = { scaleX: ne(null != b.scaleX ? b.scaleX : b.scale, y.scaleX), scaleY: ne(null != b.scaleY ? b.scaleY : b.scale, y.scaleY), scaleZ: ne(b.scaleZ, y.scaleZ), x: ne(b.x, y.x), y: ne(b.y, y.y), z: ne(b.z, y.z), xPercent: ne(b.xPercent, y.xPercent), yPercent: ne(b.yPercent, y.yPercent), perspective: ne(b.transformPerspective, y.perspective) }, d = b.directionalRotation, null != d)
                        if ("object" == typeof d)
                            for (f in d) b[f] = d[f];
                        else b.rotation = d;
                    "string" == typeof b.x && -1 !== b.x.indexOf("%") && (h.x = 0, h.xPercent = ne(b.x, y.xPercent)), "string" == typeof b.y && -1 !== b.y.indexOf("%") && (h.y = 0, h.yPercent = ne(b.y, y.yPercent)), h.rotation = ae("rotation" in b ? b.rotation : "shortRotation" in b ? b.shortRotation + "_short" : "rotationZ" in b ? b.rotationZ : y.rotation, y.rotation, "rotation", P), Oe && (h.rotationX = ae("rotationX" in b ? b.rotationX : "shortRotationX" in b ? b.shortRotationX + "_short" : y.rotationX || 0, y.rotationX, "rotationX", P), h.rotationY = ae("rotationY" in b ? b.rotationY : "shortRotationY" in b ? b.shortRotationY + "_short" : y.rotationY || 0, y.rotationY, "rotationY", P)), h.skewX = null == b.skewX ? y.skewX : ae(b.skewX, y.skewX), h.skewY = null == b.skewY ? y.skewY : ae(b.skewY, y.skewY), (u = h.skewY - y.skewY) && (h.skewX += u, h.rotation += u) }
                for (Oe && null != b.force3D && (y.force3D = b.force3D, _ = !0), y.skewType = b.skewType || y.skewType || a.defaultSkewType, p = y.force3D || y.z || y.rotationX || y.rotationY || h.z || h.rotationX || h.rotationY || h.perspective, p || null == b.scale || (h.scaleZ = 1); --w > -1;) i = we[w], c = h[i] - y[i], (c > T || -T > c || null != b[i] || null != F[i]) && (_ = !0, n = new _e(y, i, y[i], c, n), i in P && (n.e = P[i]), n.xs0 = 0, n.plugin = o, r._overwriteProps.push(n.n));
                return c = b.transformOrigin, y.svg && (c || b.svgOrigin) && (m = y.xOffset, g = y.yOffset, De(t, re(c), h, b.svgOrigin, b.smoothOrigin), n = de(y, "xOrigin", (v ? y : h).xOrigin, h.xOrigin, n, S), n = de(y, "yOrigin", (v ? y : h).yOrigin, h.yOrigin, n, S), (m !== y.xOffset || g !== y.yOffset) && (n = de(y, "xOffset", v ? m : y.xOffset, y.xOffset, n, S), n = de(y, "yOffset", v ? g : y.yOffset, y.yOffset, n, S)), c = Te ? null : "0px 0px"), (c || Oe && p && y.zOrigin) && (be ? (_ = !0, i = Se, c = (c || Q(t, i, s, !1, "50% 50%")) + "", n = new _e(x, i, 0, 0, n, -1, S), n.b = x[i], n.plugin = o, Oe ? (f = y.zOrigin, c = c.split(" "), y.zOrigin = (c.length > 2 && (0 === f || "0px" !== c[2]) ? parseFloat(c[2]) : f) || 0, n.xs0 = n.e = c[0] + " " + (c[1] || "50%") + " 0px", n = new _e(y, "zOrigin", 0, 0, n, -1, n.n), n.b = f, n.xs0 = n.e = y.zOrigin) : n.xs0 = n.e = c) : re(c + "", y)), _ && (r._transformType = y.svg && Te || !p && 3 !== this._transformType ? 2 : 3), n }, prefix: !0 }), ye("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }), ye("borderRadius", { defaultValue: "0px", parser: function(t, e, i, n, a) { e = this.format(e);
                var o, l, h, u, f, c, p, _, d, m, g, v, y, x, T, w, b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                    P = t.style;
                for (d = parseFloat(t.offsetWidth), m = parseFloat(t.offsetHeight), o = e.split(" "), l = 0; b.length > l; l++) this.p.indexOf("border") && (b[l] = q(b[l])), f = u = Q(t, b[l], s, !1, "0px"), -1 !== f.indexOf(" ") && (u = f.split(" "), f = u[0], u = u[1]), c = h = o[l], p = parseFloat(f), v = f.substr((p + "").length), y = "=" === c.charAt(1), y ? (_ = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), _ *= parseFloat(c), g = c.substr((_ + "").length - (0 > _ ? 1 : 0)) || "") : (_ = parseFloat(c), g = c.substr((_ + "").length)), "" === g && (g = r[i] || v), g !== v && (x = Z(t, "borderLeft", p, v), T = Z(t, "borderTop", p, v), "%" === g ? (f = 100 * (x / d) + "%", u = 100 * (T / m) + "%") : "em" === g ? (w = Z(t, "borderLeft", 1, "em"), f = x / w + "em", u = T / w + "em") : (f = x + "px", u = T + "px"), y && (c = parseFloat(f) + _ + g, h = parseFloat(u) + _ + g)), a = me(P, b[l], f + " " + u, c + " " + h, !1, "0px", a);
                return a }, prefix: !0, formatter: fe("0px 0px 0px 0px", !1, !0) }), ye("backgroundPosition", { defaultValue: "0 0", parser: function(t, e, i, r, n, a) {
                var o, l, h, u, f, c, p = "background-position",
                    _ = s || H(t, null),
                    m = this.format((_ ? d ? _.getPropertyValue(p + "-x") + " " + _.getPropertyValue(p + "-y") : _.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                    g = this.format(e);
                if (-1 !== m.indexOf("%") != (-1 !== g.indexOf("%")) && (c = Q(t, "backgroundImage").replace(k, ""), c && "none" !== c)) {
                    for (o = m.split(" "), l = g.split(" "), E.setAttribute("src", c), h = 2; --h > -1;) m = o[h], u = -1 !== m.indexOf("%"), u !== (-1 !== l[h].indexOf("%")) && (f = 0 === h ? t.offsetWidth - E.width : t.offsetHeight - E.height, o[h] = u ? parseFloat(m) / 100 * f + "px" : 100 * (parseFloat(m) / f) + "%");
                    m = o.join(" ") }
                return this.parseComplex(t.style, m, g, n, a) }, formatter: re }), ye("backgroundSize", { defaultValue: "0 0", formatter: re }), ye("perspective", { defaultValue: "0px", prefix: !0 }), ye("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }), ye("transformStyle", { prefix: !0 }), ye("backfaceVisibility", { prefix: !0 }), ye("userSelect", { prefix: !0 }), ye("margin", { parser: ce("marginTop,marginRight,marginBottom,marginLeft") }), ye("padding", { parser: ce("paddingTop,paddingRight,paddingBottom,paddingLeft") }), ye("clip", { defaultValue: "rect(0px,0px,0px,0px)", parser: function(t, e, i, r, n, a) {
                var o, l, h;
                return 9 > d ? (l = t.currentStyle, h = 8 > d ? " " : ",", o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (o = this.format(Q(t, this.p, s, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, a) } }), ye("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }), ye("autoRound,strictUnits", { parser: function(t, e, i, r, s) {
                return s } }), ye("border", { defaultValue: "0px solid #000", parser: function(t, e, i, r, n, a) {
                return this.parseComplex(t.style, this.format(Q(t, "borderTopWidth", s, !1, "0px") + " " + Q(t, "borderTopStyle", s, !1, "solid") + " " + Q(t, "borderTopColor", s, !1, "#000")), this.format(e), n, a) }, color: !0, formatter: function(t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(ue) || ["#000"])[0] } }), ye("borderWidth", { parser: ce("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }), ye("float,cssFloat,styleFloat", { parser: function(t, e, i, r, s) {
                var n = t.style,
                    a = "cssFloat" in n ? "cssFloat" : "styleFloat";
                return new _e(n, a, 0, 0, s, -1, i, !1, 0, n[a], e) } });
            var Ee = function(t) {
                var e, i = this.t,
                    r = i.filter || Q(this.data, "filter") || "",
                    s = 0 | this.s + this.c * t;
                100 === s && (-1 === r.indexOf("atrix(") && -1 === r.indexOf("radient(") && -1 === r.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Q(this.data, "filter")) : (i.filter = r.replace(b, ""), e = !0)), e || (this.xn1 && (i.filter = r = r || "alpha(opacity=" + s + ")"), -1 === r.indexOf("pacity") ? 0 === s && this.xn1 || (i.filter = r + " alpha(opacity=" + s + ")") : i.filter = r.replace(T, "opacity=" + s)) };
            ye("opacity,alpha,autoAlpha", { defaultValue: "1", parser: function(t, e, i, r, n, a) {
                var o = parseFloat(Q(t, "opacity", s, !1, "1")),
                    l = t.style,
                    h = "autoAlpha" === i;
                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), h && 1 === o && "hidden" === Q(t, "visibility", s) && 0 !== e && (o = 0), W ? n = new _e(l, "opacity", o, e - o, n) : (n = new _e(l, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = h ? 1 : 0, l.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = Ee), h && (n = new _e(l, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", r._overwriteProps.push(n.n), r._overwriteProps.push(i)), n } });
            var Ie = function(t, e) { e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(S, "-$1").toLowerCase())) : t.removeAttribute(e)) },
                Ye = function(t) {
                    if (this.t._gsClassPT = this, 1 === t || 0 === t) { this.t.setAttribute("class", 0 === t ? this.b : this.e);
                        for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Ie(i, e.p), e = e._next;
                        1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null) } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e) };
            ye("className", { parser: function(t, e, r, n, a, o, l) {
                var h, u, f, c, p, _ = t.getAttribute("class") || "",
                    d = t.style.cssText;
                if (a = n._classNamePT = new _e(t, r, 0, 0, a, 2), a.setRatio = Ye, a.pr = -11, i = !0, a.b = _, u = K(t, s), f = t._gsClassPT) {
                    for (c = {}, p = f.data; p;) c[p.p] = 1, p = p._next;
                    f.setRatio(1) }
                return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : _.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", a.e), h = J(t, u, K(t), l, c), t.setAttribute("class", _), a.data = h.firstMPT, t.style.cssText = d, a = a.xfirst = n.parse(t, h.difs, a, o) } });
            var We = function(t) {
                if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var e, i, r, s, n, a = this.t.style,
                        o = l.transform.parse;
                    if ("all" === this.e) a.cssText = "", s = !0;
                    else
                        for (e = this.e.split(" ").join("").split(","), r = e.length; --r > -1;) i = e[r], l[i] && (l[i].parse === o ? s = !0 : i = "transformOrigin" === i ? Se : l[i].p), Ie(a, i);
                    s && (Ie(a, be), n = this.t._gsTransform, n && (n.svg && this.t.removeAttribute("data-svg-origin"), delete this.t._gsTransform)) } };
            for (ye("clearProps", { parser: function(t, e, r, s, n) {
                return n = new _e(t, r, 0, 0, n, 2), n.setRatio = We, n.e = e, n.pr = -10, n.data = s._tween, i = !0, n } }), h = "bezier,throwProps,physicsProps,physics2D".split(","), ge = h.length; ge--;) xe(h[ge]);
            h = a.prototype, h._firstPT = h._lastParsedTransform = h._transform = null, h._onInitTween = function(t, e, o) {
                if (!t.nodeType) return !1;
                this._target = t, this._tween = o, this._vars = e, u = e.autoRound, i = !1, r = e.suffixMap || a.suffixMap, s = H(t, ""), n = this._overwriteProps;
                var h, p, d, m, g, v, y, x, T, b = t.style;
                if (f && "" === b.zIndex && (h = Q(t, "zIndex", s), ("auto" === h || "" === h) && this._addLazySet(b, "zIndex", 0)), "string" == typeof e && (m = b.cssText, h = K(t, s), b.cssText = m + ";" + e, h = J(t, h, K(t)).difs, !W && w.test(e) && (h.opacity = parseFloat(RegExp.$1)), e = h, b.cssText = m), this._firstPT = p = e.className ? l.className.parse(t, e.className, "className", this, null, null, e) : this.parse(t, e, null), this._transformType) {
                    for (T = 3 === this._transformType, be ? c && (f = !0, "" === b.zIndex && (y = Q(t, "zIndex", s), ("auto" === y || "" === y) && this._addLazySet(b, "zIndex", 0)), _ && this._addLazySet(b, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (T ? "visible" : "hidden"))) : b.zoom = 1, d = p; d && d._next;) d = d._next;
                    x = new _e(t, "transform", 0, 0, null, 2), this._linkCSSP(x, null, d), x.setRatio = be ? Be : ze, x.data = this._transform || Xe(t, s, !0), x.tween = o, x.pr = -1, n.pop() }
                if (i) {
                    for (; p;) {
                        for (v = p._next, d = m; d && d.pr > p.pr;) d = d._next;
                        (p._prev = d ? d._prev : g) ? p._prev._next = p: m = p, (p._next = d) ? d._prev = p : g = p, p = v }
                    this._firstPT = m }
                return !0 }, h.parse = function(t, e, i, n) {
                var a, o, h, f, c, p, _, d, m, g, v = t.style;
                for (a in e) p = e[a], o = l[a], o ? i = o.parse(t, p, a, this, i, n, e) : (c = Q(t, a, s) + "", m = "string" == typeof p, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || m && P.test(p) ? (m || (p = he(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), i = me(v, a, c, p, !0, "transparent", i, 0, n)) : !m || -1 === p.indexOf(" ") && -1 === p.indexOf(",") ? (h = parseFloat(c), _ = h || 0 === h ? c.substr((h + "").length) : "", ("" === c || "auto" === c) && ("width" === a || "height" === a ? (h = ie(t, a, s), _ = "px") : "left" === a || "top" === a ? (h = $(t, a, s), _ = "px") : (h = "opacity" !== a ? 0 : 1, _ = "")), g = m && "=" === p.charAt(1), g ? (f = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), f *= parseFloat(p), d = p.replace(x, "")) : (f = parseFloat(p), d = m ? p.replace(x, "") : ""), "" === d && (d = a in r ? r[a] : _), p = f || 0 === f ? (g ? f + h : f) + d : e[a], _ !== d && "" !== d && (f || 0 === f) && h && (h = Z(t, a, h, _), "%" === d ? (h /= Z(t, a, 100, "%") / 100, e.strictUnits !== !0 && (c = h + "%")) : "em" === d ? h /= Z(t, a, 1, "em") : "px" !== d && (f = Z(t, a, f, d), d = "px"), g && (f || 0 === f) && (p = f + h + d)), g && (f += h), !h && 0 !== h || !f && 0 !== f ? void 0 !== v[a] && (p || "NaN" != p + "" && null != p) ? (i = new _e(v, a, f || h || 0, 0, i, -1, a, !1, 0, c, p), i.xs0 = "none" !== p || "display" !== a && -1 === a.indexOf("Style") ? p : c) : j("invalid " + a + " tween value: " + e[a]) : (i = new _e(v, a, h, f - h, i, 0, a, u !== !1 && ("px" === d || "zIndex" === a), 0, c, p), i.xs0 = d)) : i = me(v, a, c, p, !0, null, i, 0, n)), n && i && !i.plugin && (i.plugin = n);
                return i }, h.setRatio = function(t) {
                var e, i, r, s = this._firstPT,
                    n = 1e-6;
                if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                        for (; s;) {
                            if (e = s.c * t + s.s, s.r ? e = Math.round(e) : n > e && e > -n && (e = 0), s.type)
                                if (1 === s.type)
                                    if (r = s.l, 2 === r) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2;
                                    else if (3 === r) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3;
                                    else if (4 === r) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4;
                                    else if (5 === r) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5;
                                    else {
                                        for (i = s.xs0 + e + s.xs1, r = 1; s.l > r; r++) i += s["xn" + r] + s["xs" + (r + 1)];
                                        s.t[s.p] = i } else -1 === s.type ? s.t[s.p] = s.xs0 : s.setRatio && s.setRatio(t);
                            else s.t[s.p] = e + s.xs0;
                            s = s._next } else
                        for (; s;) 2 !== s.type ? s.t[s.p] = s.b : s.setRatio(t), s = s._next;
                else
                    for (; s;) {
                        if (2 !== s.type)
                            if (s.r && -1 !== s.type)
                                if (e = Math.round(s.s + s.c), s.type) {
                                    if (1 === s.type) {
                                        for (r = s.l, i = s.xs0 + e + s.xs1, r = 1; s.l > r; r++) i += s["xn" + r] + s["xs" + (r + 1)];
                                        s.t[s.p] = i } } else s.t[s.p] = e + s.xs0;
                            else s.t[s.p] = s.e;
                        else s.setRatio(t);
                        s = s._next } }, h._enableTransforms = function(t) { this._transform = this._transform || Xe(this._target, s, !0), this._transformType = this._transform.svg && Te || !t && 3 !== this._transformType ? 2 : 3 };
            var Ve = function() { this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0) };
            h._addLazySet = function(t, e, i) {
                var r = this._firstPT = new _e(t, e, 0, 0, this._firstPT, 2);
                r.e = i, r.setRatio = Ve, r.data = this }, h._linkCSSP = function(t, e, i, r) {
                return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, r = !0), i ? i._next = t : r || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t }, h._kill = function(e) {
                var i, r, s, n = e;
                if (e.autoAlpha || e.alpha) { n = {};
                    for (r in e) n[r] = e[r];
                    n.opacity = 1, n.autoAlpha && (n.visibility = 1) }
                return e.className && (i = this._classNamePT) && (s = i.xfirst, s && s._prev ? this._linkCSSP(s._prev, i._next, s._prev._prev) : s === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, s._prev), this._classNamePT = null), t.prototype._kill.call(this, n) };
            var je = function(t, e, i) {
                var r, s, n, a;
                if (t.slice)
                    for (s = t.length; --s > -1;) je(t[s], e, i);
                else
                    for (r = t.childNodes, s = r.length; --s > -1;) n = r[s], a = n.type, n.style && (e.push(K(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || je(n, e, i) };
            return a.cascadeTo = function(t, i, r) {
                var s, n, a, o, l = e.to(t, i, r),
                    h = [l],
                    u = [],
                    f = [],
                    c = [],
                    p = e._internals.reservedProps;
                for (t = l._targets || l.target, je(t, u, c), l.render(i, !0, !0), je(t, f), l.render(0, !0, !0), l._enabled(!0), s = c.length; --s > -1;)
                    if (n = J(c[s], u[s], f[s]), n.firstMPT) { n = n.difs;
                        for (a in r) p[a] && (n[a] = r[a]);
                        o = {};
                        for (a in n) o[a] = u[s][a];
                        h.push(e.fromTo(c[s], i, o, n)) }
                return h }, t.activate([a]), a }, !0) }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
        function(t) { "use strict";
            var e = function() {
                return (_gsScope.GreenSockGlobals || _gsScope)[t] }; "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = e()) }("CSSPlugin");
    var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
    (function(t) { "use strict";
        var e = t.GreenSockGlobals || t,
            i = function(t) {
                var i, s = t.split("."),
                    r = e;
                for (i = 0; s.length > i; i++) r[s[i]] = r = r[s[i]] || {};
                return r },
            s = i("com.greensock.utils"),
            r = function(t) {
                var e = t.nodeType,
                    i = "";
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += r(t) } else if (3 === e || 4 === e) return t.nodeValue;
                return i },
            n = document,
            a = n.defaultView ? n.defaultView.getComputedStyle : function() {},
            o = /([A-Z])/g,
            h = function(t, e, i, s) {
                var r;
                return (i = i || a(t, null)) ? (t = i.getPropertyValue(e.replace(o, "-$1").toLowerCase()), r = t || i.length ? t : i[e]) : t.currentStyle && (i = t.currentStyle, r = i[e]), s ? r : parseInt(r, 10) || 0 },
            l = function(t) {
                return t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0]) ? !0 : !1 },
            _ = function(t) {
                var e, i, s, r = [],
                    n = t.length;
                for (e = 0; n > e; e++)
                    if (i = t[e], l(i))
                        for (s = i.length, s = 0; i.length > s; s++) r.push(i[s]);
                    else r.push(i);
                return r },
            u = ")eefec303079ad17405c",
            c = /(?:<br>|<br\/>|<br \/>)/gi,
            f = n.all && !n.addEventListener,
            p = "<div style='position:relative;display:inline-block;" + (f ? "*display:inline;*zoom:1;'" : "'"),
            m = function(t) { t = t || "";
                var e = -1 !== t.indexOf("++"),
                    i = 1;
                return e && (t = t.split("++").join("")),
                    function() {
                        return p + (t ? " class='" + t + (e ? i++ : "") + "'>" : ">") } },
            d = s.SplitText = e.SplitText = function(t, e) {
                if ("string" == typeof t && (t = d.selector(t)), !t) throw "cannot split a null element.";
                this.elements = l(t) ? _(t) : [t], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, this.split(e) },
            g = function(t, e, i) {
                var s = t.nodeType;
                if (1 === s || 9 === s || 11 === s)
                    for (t = t.firstChild; t; t = t.nextSibling) g(t, e, i);
                else(3 === s || 4 === s) && (t.nodeValue = t.nodeValue.split(e).join(i)) },
            v = function(t, e) {
                for (var i = e.length; --i > -1;) t.push(e[i]) },
            y = function(t, e, i, s, o) { c.test(t.innerHTML) && (t.innerHTML = t.innerHTML.replace(c, u));
                var l, _, f, p, d, y, T, w, b, x, P, S, k, C, R = r(t),
                    O = e.type || e.split || "chars,words,lines",
                    A = -1 !== O.indexOf("lines") ? [] : null,
                    D = -1 !== O.indexOf("words"),
                    M = -1 !== O.indexOf("chars"),
                    L = "absolute" === e.position || e.absolute === !0,
                    z = L ? "&#173; " : " ",
                    I = -999,
                    E = a(t),
                    N = h(t, "paddingLeft", E),
                    F = h(t, "borderBottomWidth", E) + h(t, "borderTopWidth", E),
                    B = h(t, "borderLeftWidth", E) + h(t, "borderRightWidth", E),
                    X = h(t, "paddingTop", E) + h(t, "paddingBottom", E),
                    j = h(t, "paddingLeft", E) + h(t, "paddingRight", E),
                    U = h(t, "textAlign", E, !0),
                    Y = t.clientHeight,
                    q = t.clientWidth,
                    V = "</div>",
                    G = m(e.wordsClass),
                    Q = m(e.charsClass),
                    W = -1 !== (e.linesClass || "").indexOf("++"),
                    Z = e.linesClass,
                    H = -1 !== R.indexOf("<"),
                    $ = !0,
                    K = [],
                    J = [],
                    te = [];
                for (W && (Z = Z.split("++").join("")), H && (R = R.split("<").join("{{LT}}")), l = R.length, p = G(), d = 0; l > d; d++)
                    if (T = R.charAt(d), ")" === T && R.substr(d, 20) === u) p += ($ ? V : "") + "<BR/>", $ = !1, d !== l - 20 && R.substr(d + 20, 20) !== u && (p += " " + G(), $ = !0), d += 19;
                    else if (" " === T && " " !== R.charAt(d - 1) && d !== l - 1 && R.substr(d - 20, 20) !== u) {
                        for (p += $ ? V : "", $ = !1;
                             " " === R.charAt(d + 1);) p += z, d++;
                        (")" !== R.charAt(d + 1) || R.substr(d + 1, 20) !== u) && (p += z + G(), $ = !0) } else p += M && " " !== T ? Q() + T + "</div>" : T;
                for (t.innerHTML = p + ($ ? V : ""), H && g(t, "{{LT}}", "<"), y = t.getElementsByTagName("*"), l = y.length, w = [], d = 0; l > d; d++) w[d] = y[d];
                if (A || L)
                    for (d = 0; l > d; d++) b = w[d], f = b.parentNode === t, (f || L || M && !D) && (x = b.offsetTop, A && f && x !== I && "BR" !== b.nodeName && (_ = [], A.push(_), I = x), L && (b._x = b.offsetLeft, b._y = x, b._w = b.offsetWidth, b._h = b.offsetHeight), A && (D !== f && M || (_.push(b), b._x -= N), f && d && (w[d - 1]._wordEnd = !0), "BR" === b.nodeName && b.nextSibling && "BR" === b.nextSibling.nodeName && A.push([])));
                for (d = 0; l > d; d++) b = w[d], f = b.parentNode === t, "BR" !== b.nodeName ? (L && (S = b.style, D || f || (b._x += b.parentNode._x, b._y += b.parentNode._y), S.left = b._x + "px", S.top = b._y + "px", S.position = "absolute", S.display = "block", S.width = b._w + 1 + "px", S.height = b._h + "px"), D ? f && "" !== b.innerHTML ? J.push(b) : M && K.push(b) : f ? (t.removeChild(b), w.splice(d--, 1), l--) : !f && M && (x = !A && !L && b.nextSibling, t.appendChild(b), x || t.appendChild(n.createTextNode(" ")), K.push(b))) : A || L ? (t.removeChild(b), w.splice(d--, 1), l--) : D || t.appendChild(b);
                if (A) {
                    for (L && (P = n.createElement("div"), t.appendChild(P), k = P.offsetWidth + "px", x = P.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(P)), S = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) t.removeChild(t.firstChild);
                    for (C = !L || !D && !M, d = 0; A.length > d; d++) {
                        for (_ = A[d], P = n.createElement("div"), P.style.cssText = "display:block;text-align:" + U + ";position:" + (L ? "absolute;" : "relative;"), Z && (P.className = Z + (W ? d + 1 : "")), te.push(P), l = _.length, y = 0; l > y; y++) "BR" !== _[y].nodeName && (b = _[y], P.appendChild(b), C && (b._wordEnd || D) && P.appendChild(n.createTextNode(" ")), L && (0 === y && (P.style.top = b._y + "px", P.style.left = N + x + "px"), b.style.top = "0px", x && (b.style.left = b._x - x + "px")));
                        0 === l && (P.innerHTML = "&nbsp;"), D || M || (P.innerHTML = r(P).split(String.fromCharCode(160)).join(" ")), L && (P.style.width = k, P.style.height = b._h + "px"), t.appendChild(P) }
                    t.style.cssText = S }
                L && (Y > t.clientHeight && (t.style.height = Y - X + "px", Y > t.clientHeight && (t.style.height = Y + F + "px")), q > t.clientWidth && (t.style.width = q - j + "px", q > t.clientWidth && (t.style.width = q + B + "px"))), v(i, K), v(s, J), v(o, te) },
            T = d.prototype;
        T.split = function(t) { this.isSplit && this.revert(), this.vars = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
            for (var e = this.elements.length; --e > -1;) this._originals[e] = this.elements[e].innerHTML, y(this.elements[e], this.vars, this.chars, this.words, this.lines);
            return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this }, T.revert = function() {
            if (!this._originals) throw "revert() call wasn't scoped properly.";
            for (var t = this._originals.length; --t > -1;) this.elements[t].innerHTML = this._originals[t];
            return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this }, d.selector = t.$ || t.jQuery || function(e) {
                var i = t.$ || t.jQuery;
                return i ? (d.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e) }, d.version = "0.3.3" })(_gsScope),
        function(t) { "use strict";
            var e = function() {
                return (_gsScope.GreenSockGlobals || _gsScope)[t] }; "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (module.exports = e()) }("SplitText");
    try { window.GreenSockGlobals = null;
        window._gsQueue = null;
        window._gsDefine = null;
        delete(window.GreenSockGlobals);
        delete(window._gsQueue);
        delete(window._gsDefine); } catch (e) {}
    try { window.GreenSockGlobals = oldgs;
        window._gsQueue = oldgs_queue; } catch (e) {}
    if (window.tplogs == true)
        try { console.groupEnd(); } catch (e) {}
    (function(e, t) { e.waitForImages = { hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage"] };
        e.expr[":"].uncached = function(t) {
            var n = document.createElement("img");
            n.src = t.src;
            return e(t).is('img[src!=""]') && !n.complete };
        e.fn.waitForImages = function(t, n, r) {
            if (e.isPlainObject(arguments[0])) { n = t.each;
                r = t.waitForAll;
                t = t.finished }
            t = t || e.noop;
            n = n || e.noop;
            r = !!r;
            if (!e.isFunction(t) || !e.isFunction(n)) {
                throw new TypeError("An invalid callback was supplied.") }
            return this.each(function() {
                var i = e(this),
                    s = [];
                if (r) {
                    var o = e.waitForImages.hasImageProperties || [],
                        u = /url\((['"]?)(.*?)\1\)/g;
                    i.find("*").each(function() {
                        var t = e(this);
                        if (t.is("img:uncached")) { s.push({ src: t.attr("src"), element: t[0] }) }
                        e.each(o, function(e, n) {
                            var r = t.css(n);
                            if (!r) {
                                return true }
                            var i;
                            while (i = u.exec(r)) { s.push({ src: i[2], element: t[0] }) } }) }) } else { i.find("img:uncached").each(function() { s.push({ src: this.src, element: this }) }) }
                var f = s.length,
                    l = 0;
                if (f == 0) { t.call(i[0]) }
                e.each(s, function(r, s) {
                    var o = new Image;
                    e(o).bind("load error", function(e) { l++;
                        n.call(s.element, l, f, e.type == "load");
                        if (l == f) { t.call(i[0]);
                            return false } });
                    o.src = s.src }) }) }; })(jQuery)
} catch (e) { console.error('Error in file:http://webnus.biz/themes/michigan/kids/wp-content/plugins/essential-grid/public/assets/js/jquery.themepunch.tools.min.js?ver=2.0.9.1; Error:' + e.message); };
try {! function(jQuery, undefined) {
    function createCookie(e, t, a) {
        var o;
        if (a) {
            var i = new Date;
            i.setTime(i.getTime() + 24 * a * 60 * 60 * 1e3), o = "; expires=" + i.toGMTString() } else o = "";
        document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + o + "; path=/" }

    function readCookie(e) {
        for (var t = encodeURIComponent(e) + "=", a = document.cookie.split(";"), o = 0; o < a.length; o++) {
            for (var i = a[o];
                 " " === i.charAt(0);) i = i.substring(1, i.length);
            if (0 === i.indexOf(t)) return decodeURIComponent(i.substring(t.length, i.length)) }
        return null }

    function eraseCookie(e) { createCookie(e, "", -1) }

    function checkAvailableFilters() {}

    function checkMoreToLoad(e, t) {
        var a = new Array;
        fidlist = new Array, searchchanged = jQuery(t.filterGroupClass + ".esg-filter-wrapper.eg-search-wrapper .eg-justfilteredtosearch").length, forcesearch = jQuery(t.filterGroupClass + ".esg-filter-wrapper.eg-search-wrapper .eg-forcefilter").length, jQuery(t.filterGroupClass + ".esg-filter-wrapper .esg-filterbutton.selected, " + t.filterGroupClass + " .esg-filter-wrapper .esg-filterbutton.selected").each(function() {
            var e = jQuery(this).data("fid"); - 1 == jQuery.inArray(e, fidlist) && (a.push(e), fidlist.push(e)) }), 0 == jQuery(t.filterGroupClass + ".esg-filter-wrapper .esg-filterbutton.selected, " + t.filterGroupClass + " .esg-filter-wrapper .esg-filterbutton.selected").length && a.push(-1);
        for (var o = new Array, i = 0; i < t.loadMoreItems.length; i++) jQuery.each(t.loadMoreItems[i][1], function(e, r) { jQuery.each(a, function(e, a) { a == r && -1 != t.loadMoreItems[i][0] && (0 == forcesearch || 1 == forcesearch && "cat-searchresult" === t.loadMoreItems[i][2]) && o.push(t.loadMoreItems[i]) }) });
        return addCountSuffix(e, t), o }

    function addCountSuffix(e, t) {
        var a = jQuery(t.filterGroupClass + ".esg-filter-wrapper.eg-search-wrapper .eg-justfilteredtosearch").length,
            o = jQuery(t.filterGroupClass + ".esg-filter-wrapper.eg-search-wrapper .eg-forcefilter").length;
        jQuery(t.filterGroupClass + ".esg-filter-wrapper.eg-show-amount .esg-filterbutton").each(function() {
            var i = jQuery(this);
            if (0 == i.find(".eg-el-amount").length || a > 0) {
                var r = i.data("fid"),
                    n = i.data("filter");
                o > 0 && (n += ".cat-searchresult");
                for (var s = e.find("." + n).length, l = 0; l < t.loadMoreItems.length; l++) { 0 == o ? jQuery.each(t.loadMoreItems[l][1], function(e, a) { a === r && -1 != t.loadMoreItems[l][0] && s++ }) : -1 != jQuery.inArray(r, t.loadMoreItems[l][1]) && "cat-searchresult" === t.loadMoreItems[l][2] && s++ }
                0 == i.find(".eg-el-amount").length && i.append('<span class="eg-el-amount">0</span>'), countToTop(i, s) } }), jQuery(t.filterGroupClass + ".esg-filter-wrapper.eg-search-wrapper .eg-justfilteredtosearch").removeClass("eg-justfilteredtosearch") }

    function countToTop(e, t) {
        function a(e, t) { o.html(Math.round(e.target[t])) }
        var o = e.find(".eg-el-amount"),
            i = { value: parseInt(o.text(), 0) };
        punchgs.TweenLite.to(i, 2, { value: t, onUpdate: a, onUpdateParams: ["{self}", "value"], ease: punchgs.Power3.easeInOut }) }

    function buildLoader(e, t, a) {
        return e.find(".esg-loader").length > 0 ? !1 : (e.append('<div class="esg-loader ' + t.spinner + '"><div class="dot1"></div><div class="dot2"></div><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'), ("spinner1" == t.spinner || "spinner2" == t.spinner) && e.find(".esg-loader").css({ backgroundColor: t.spinnerColor }), ("spinner3" == t.spinner || "spinner4" == t.spinner) && e.find(".bounce1, .bounce2, .bounce3, .dot1, .dot2").css({ backgroundColor: t.spinnerColor }), void(a || punchgs.TweenLite.to(e, .3, { minHeight: "100px", zIndex: 0 }))) }

    function setKeyToNull(e, t) { jQuery.each(e.loadMoreItems, function(a, o) { o[0] == t && (e.loadMoreItems[a][0] = -1, e.loadMoreItems[a][2] = "already loaded") }) }

    function loadMoreEmpty(e) {
        for (var t = !0, a = 0; a < e.loadMoreItems.length; a++) - 1 != e.loadMoreItems[a][0] && (t = !1);
        return t }

    function loadMoreItems(e, t) {
        var a = checkMoreToLoad(e, t),
            o = new Array;
        jQuery.each(a, function(e, a) { o.length < t.loadMoreAmount && (o.push(a[0]), setKeyToNull(t, a[0])) });
        var i = checkMoreToLoad(e, t).length;
        if (o.length > 0) {
            var r = e.find(".esg-loadmore");
            r.length > 0 && (punchgs.TweenLite.to(r, .4, { autoAlpha: .2 }), r.data("loading", 1));
            var n = { action: t.loadMoreAjaxAction, client_action: "load_more_items", token: t.loadMoreAjaxToken, data: o, gridid: t.gridID };
            jQuery.ajax({ type: "post", url: t.loadMoreAjaxUrl, dataType: "json", data: n }).success(function(a) {
                if (a.success) {
                    var o = jQuery(a.data);
                    jQuery(t.filterGroupClass + ".esg-filter-wrapper.eg-search-wrapper .eg-forcefilter").length > 0 && o.addClass("cat-searchresult"), e.find("ul").first().append(o), checkAvailableFilters(e, t), prepareItemsInGrid(t, !0), setItemsOnPages(t), setTimeout(function() {
                        if (t.animDelay = "off", organiseGrid(t), prepareSortingAndOrders(e), loadMoreEmpty(t)) e.find(".esg-loadmore").remove();
                        else {
                            var a = e.find(".esg-loadmore"),
                                o = t.loadMoreTxt + " (" + i + ")"; "off" == t.loadMoreNr && (o = t.loadMoreTxt), a.html(0 == i ? t.loadMoreEndTxt : o), a.length > 0 && (punchgs.TweenLite.to(a, .4, { autoAlpha: 1, overwrite: "all" }), a.data("loading", 0)) }
                        setTimeout(function() { t.animDelay = "on" }, 500) }, 10) } }).error(function(t, a) { e.find(".esg-loadmore").html("FAILURE: " + a) }) } else loadMoreEmpty(t) ? e.find(".esg-loadmore").remove() : e.find(".esg-loadmore").html(t.loadMoreEndTxt) }

    function killOldCustomAjaxContent(e) {
        var t = e.data("lastposttype"),
            a = e.data("oldajaxsource"),
            o = e.data("oldajaxtype"),
            i = e.data("oldajaxvideoaspect"),
            r = e.data("oldselector");
        if (t != undefined && "" != t) try { jQuery.each(jQuery.fn.tpessential.defaults.ajaxTypes, function(n, s) { s != undefined && s.type != undefined && s.type == t && s.killfunc != undefined && setTimeout(function() { s.killfunc.call(this, { id: a, type: o, aspectratio: i, selector: r }) && e.empty() }, 250) }) } catch (n) { console.log(n) }
        e.data("lastposttype", "") }

    function addAjaxNavigagtion(e, t) {
        function a(e) {
            var t = new Array;
            return jQuery.each(e, function(e, a) { jQuery(a).closest(".itemtoshow.isvisiblenow").length > 0 && t.push(a) }), t }
        var o = " eg-acp-" + e.ajaxClosePosition;
        o = o + " eg-acp-" + e.ajaxCloseStyle, o = o + " eg-acp-" + e.ajaxCloseType, loc = "eg-icon-left-open-1", roc = "eg-icon-right-open-1", xoc = '<i class="eg-icon-cancel"></i>', "type1" == e.ajaxCloseType && (loc = "eg-icon-left-open-big", roc = "eg-icon-right-open-big", e.ajaxCloseTxt = "", xoc = "X"), ("true" == e.ajaxCloseInner || 1 == e.ajaxCloseInner) && (o += " eg-acp-inner");
        var i = '<div class="eg-ajax-closer-wrapper' + o + '">';
        switch ("tr" == e.ajaxClosePosition || "br" == e.ajaxClosePosition ? ("on" == e.ajaxNavButton && (i = i + '<div class="eg-ajax-left eg-ajax-navbt"><i class="' + loc + '"></i></div><div class="eg-ajax-right eg-ajax-navbt"><i class="' + roc + '"></i></div>'), "on" == e.ajaxCloseButton && (i = i + '<div class="eg-ajax-closer eg-ajax-navbt">' + xoc + e.ajaxCloseTxt + "</div>")) : ("on" == e.ajaxCloseButton && (i = i + '<div class="eg-ajax-closer eg-ajax-navbt">' + xoc + e.ajaxCloseTxt + "</div>"), "on" == e.ajaxNavButton && (i = i + '<div class="eg-ajax-left eg-ajax-navbt"><i class="' + loc + '"></i></div><div class="eg-ajax-right eg-ajax-navbt"><i class="' + roc + '"></i></div>')), i += "</div>", e.ajaxClosePosition) {
            case "tl":
            case "tr":
            case "t":
                t.prepend(i);
                break;
            case "bl":
            case "br":
            case "b":
                t.append(i) }
        t.find(".eg-ajax-closer").click(function() { showHideAjaxContainer(t, !1, null, null, .25, !0) }), t.find(".eg-ajax-right").click(function() {
            var e = t.data("container").find(".lastclickedajax").closest("li"),
                o = e.nextAll().find(".eg-ajax-a-button"),
                i = e.prevAll().find(".eg-ajax-a-button");
            o = a(o), i = a(i), o.length > 0 ? o[0].click() : i[0].click() }), t.find(".eg-ajax-left").click(function() {
            var e = t.data("container").find(".lastclickedajax").closest("li"),
                o = e.nextAll().find(".eg-ajax-a-button"),
                i = e.prevAll().find(".eg-ajax-a-button");
            o = a(o), i = a(i), i.length > 0 ? i[i.length - 1].click() : o[o.length - 1].click() }) }

    function showHideAjaxContainer(e, t, a, o, i, r) { i = i == undefined ? .25 : i;
        var n = e.data("container").data("opt"),
            s = e.data("lastheight") != undefined ? e.data("lastheight") : "100px";
        t ? (i += 1.2, addAjaxNavigagtion(n, e), punchgs.TweenLite.set(e, { height: "auto" }), punchgs.TweenLite.set(e.parent(), { minHeight: 0, maxHeight: "none", height: "auto", overwrite: "all" }), punchgs.TweenLite.from(e, i, { height: s, ease: punchgs.Power3.easeInOut, onStart: function() { punchgs.TweenLite.to(e, i, { autoAlpha: 1, ease: punchgs.Power3.easeOut }) }, onComplete: function() { e.data("lastheight", e.height()), jQuery(window).trigger("resize.essg"), 0 == e.find(".eg-ajax-closer-wrapper").length && addAjaxNavigagtion(n, e) } }), "off" != n.ajaxScrollToOnLoad && jQuery("html, body").animate({ scrollTop: e.offset().top - o }, { queue: !1, speed: .5 })) : (r && (killOldCustomAjaxContent(e), s = "0px"), punchgs.TweenLite.to(e.parent(), i, { height: s, ease: punchgs.Power2.easeInOut, onStart: function() { punchgs.TweenLite.to(e, i, { autoAlpha: 0, ease: punchgs.Power3.easeOut }) }, onComplete: function() { setTimeout(function() { r && e.html("") }, 300) } })) }

    function removeLoader(e) { e.closest(".eg-ajaxanimwrapper").find(".esg-loader").remove() }

    function ajaxCallBack(opt, a) {
        if (opt.ajaxCallback == undefined || "" == opt.ajaxCallback || opt.ajaxCallback.length < 3) return !1;
        var splitter = opt.ajaxCallback.split(")"),
            splitter = splitter[0].split("("),
            callback = splitter[0],
            arguments = splitter.length > 1 && "" != splitter[1] ? splitter[1] + "," : "",
            obj = new Object;
        try { obj.containerid = "#" + opt.ajaxContentTarget, obj.postsource = a.data("ajaxsource"), obj.posttype = a.data("ajaxtype"), eval("on" == opt.ajaxCallbackArgument ? callback + "(" + arguments + "obj)" : callback + "(" + arguments + ")") } catch (e) { console.log("Callback Error"), console.log(e) } }

    function loadMoreContent(e, t, a) { e.find(".lastclickedajax").removeClass("lastclickedajax"), a.addClass("lastclickedajax");
        var o = jQuery("#" + t.ajaxContentTarget).find(".eg-ajax-target"),
            i = a.data("ajaxsource"),
            r = a.data("ajaxtype"),
            n = a.data("ajaxvideoaspect");
        if (o.data("container", e), n = "16:9" == n ? "widevideo" : "normalvideo", showHideAjaxContainer(o, !1), o.length > 0) switch (t.ajaxJsUrl != undefined && "" != t.ajaxJsUrl && t.ajaxJsUrl.length > 3 && jQuery.getScript(t.ajaxJsUrl).done(function() { t.ajaxJsUrl = "" }).fail(function() { console.log("Loading Error on Ajax jQuery File. Please doublecheck if JS File and Path exist:" + t.ajaxJSUrl), t.ajaxJsUrl = "" }), t.ajaxCssUrl != undefined && "" != t.ajaxCssUrl && t.ajaxCssUrl.length > 3 && (jQuery("<link>").appendTo("head").attr({ type: "text/css", rel: "stylesheet" }).attr("href", t.ajaxCssUrl), "" == t.ajaxCssUrl), buildLoader(o.closest(".eg-ajaxanimwrapper"), t), o.data("ajaxload") != undefined && o.data("ajaxload").abort(), killOldCustomAjaxContent(o), r) {
            case "postid":
                var s = { action: t.loadMoreAjaxAction, client_action: "load_more_content", token: t.loadMoreAjaxToken, postid: i };
                setTimeout(function() { o.data("ajaxload", jQuery.ajax({ type: "post", url: t.loadMoreAjaxUrl, dataType: "json", data: s })), o.data("ajaxload").success(function(e) { e.success && (jQuery(o).html(e.data), showHideAjaxContainer(o, !0, t.ajaxScrollToOnLoad, t.ajaxScrollToOffset), removeLoader(o), ajaxCallBack(t, a)) }), o.data("ajaxload").error(function(e, t) { "abort" != t && (jQuery(o).append("<p>FAILURE: <strong>" + t + "</strong></p>"), removeLoader(o)) }) }, 300);
                break;
            case "youtubeid":
                setTimeout(function() { o.html('<div class="eg-ajax-video-container ' + n + '"><iframe width="560" height="315" src="//www.youtube.com/embed/' + i + '?autoplay=1&vq=hd1080" frameborder="0" allowfullscreen></iframe></div>'), removeLoader(o), showHideAjaxContainer(o, !0, t.ajaxScrollToOnLoad, t.ajaxScrollToOffset), ajaxCallBack(t, a) }, 300);
                break;
            case "vimeoid":
                setTimeout(function() { o.html('<div class="eg-ajax-video-container ' + n + '"><iframe src="//player.vimeo.com/video/' + i + '?portrait=0&autoplay=1" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>'), removeLoader(o), showHideAjaxContainer(o, !0, t.ajaxScrollToOnLoad, t.ajaxScrollToOffset), ajaxCallBack(t, a) }, 300);
                break;
            case "wistiaid":
                setTimeout(function() { o.html('<div class="eg-ajax-video-container ' + n + '"><iframe src="//fast.wistia.net/embed/iframe/' + i + '"allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="640" height="388"></iframe></div>'), removeLoader(o), showHideAjaxContainer(o, !0, t.ajaxScrollToOnLoad, t.ajaxScrollToOffset), ajaxCallBack(t, a) }, 300);
                break;
            case "html5vid":
                i = i.split("|"), setTimeout(function() { o.html('<video autoplay="true" loop="" class="rowbgimage" poster="" width="100%" height="auto"><source src="' + i[0] + '" type="video/mp4"><source src="' + i[1] + '" type="video/webm"><source src="' + i[2] + '" type="video/ogg"></video>'), removeLoader(o), showHideAjaxContainer(o, !0, t.ajaxScrollToOnLoad, t.ajaxScrollToOffset), ajaxCallBack(t, a) }, 300);
                break;
            case "soundcloud":
            case "soundcloudid":
                setTimeout(function() { o.html('<iframe width="100%" height="250" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + i + '&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true"></iframe>'), removeLoader(o), showHideAjaxContainer(o, !0, t.ajaxScrollToOnLoad, t.ajaxScrollToOffset), ajaxCallBack(t, a) }, 300);
                break;
            case "imageurl":
                setTimeout(function() {
                    var e = new Image;
                    e.onload = function() {
                        var e = jQuery(this);
                        o.html(""), e.css({ width: "100%", height: "auto" }), o.append(jQuery(this)), removeLoader(o), showHideAjaxContainer(o, !0, t.ajaxScrollToOnLoad, t.ajaxScrollToOffset), ajaxCallBack(t, a) }, e.onerror = function() { o.html("Error"), removeLoader(o), showHideAjaxContainer(o, !0, t.ajaxScrollToOnLoad, t.ajaxScrollToOffset) }, e.src = i }, 300);
                break;
            default:
                jQuery.each(jQuery.fn.tpessential.defaults.ajaxTypes, function(e, a) { a.openAnimationSpeed == undefined && (a.openAnimationSpeed = 0), a != undefined && a.type != undefined && a.type == r && setTimeout(function() { o.data("lastposttype", r), o.data("oldajaxsource", i), o.data("oldajaxtype", r), o.data("oldajaxvideoaspect", n), o.data("oldselector", "#" + t.ajaxContentTarget + " .eg-ajax-target"), showHideAjaxContainer(o, !0, t.ajaxScrollToOnLoad, t.ajaxScrollToOffset, 0), o.html(a.func.call(this, { id: i, type: r, aspectratio: n })), removeLoader(o) }, 300) }) } }

    function resetFiltersFromCookies(e, t, a) {
        if ("on" == e.cookies.filter) {
            var o = a !== undefined ? a : readCookie("grid_" + e.girdID + "_filters");
            if (o !== undefined && null !== o && o.length > 0) {
                var i = 0;
                jQuery.each(o.split(","), function(a, o) { o !== undefined && -1 !== o && "-1" !== o && jQuery(e.filterGroupClass + ".esg-filterbutton," + e.filterGroupClass + " .esg-filterbutton").each(function() { jQuery(this).data("fid") != o && parseInt(jQuery(this).data("fid"), 0) !== parseInt(o, 0) || jQuery(this).hasClass("esg-pagination-button") || (t ? jQuery(this).click() : jQuery(this).addClass("selected"), i++) }) }), i > 0 && jQuery(e.filterGroupClass + ".esg-filterbutton.esg-allfilter," + e.filterGroupClass + " .esg-filterbutton.esg-allfilter").removeClass("selected") } } }

    function resetPaginationFromCookies(e, t) {
        if ("on" === e.cookies.pagination) {
            var a = t !== undefined ? t : readCookie("grid_" + e.girdID + "_pagination");
            a !== undefined && null !== a && a.length > 0 && jQuery(e.filterGroupClass + ".esg-filterbutton.esg-pagination-button," + e.filterGroupClass + " .esg-filterbutton.esg-pagination-button").each(function() { parseInt(jQuery(this).data("page"), 0) !== parseInt(a, 0) || jQuery(this).hasClass("selected") || jQuery(this).click() }) } }

    function resetSearchFromCookies(e) {
        if ("on" === e.cookies.search) {
            var t = readCookie("grid_" + e.gridID + "_search");
            t !== undefined && null != t && t.length > 0 && (jQuery(e.filterGroupClass + ".eg-search-wrapper .eg-search-input").val(t).trigger("change"), e.cookies.searchjusttriggered = !0) } }

    function mainPreparing(e, t) {
        function a() {
            if (1 == t.lastsearchtimer) return !1;
            t.lastsearchtimer = 1, buildLoader(jQuery(t.filterGroupClass + ".eg-search-wrapper"), { spinner: "spinner3", spinnerColor: "#fff" }, !0), punchgs.TweenLite.fromTo(jQuery(t.filterGroupClass + ".eg-search-wrapper").find(".esg-loader"), .3, { autoAlpha: 0 }, { autoAlpha: 1, ease: punchgs.Power3.easeInOut });
            var a = jQuery(t.filterGroupClass + ".eg-search-wrapper .eg-search-input"),
                o = a.val(),
                i = jQuery(t.filterGroupClass + ".eg-search-wrapper.esg-filter-wrapper .hiddensearchfield");
            if (a.attr("disabled", "true"), o.length > 0) { a.trigger("searchstarting");
                var r = { search: o, id: t.gridID },
                    n = { action: t.loadMoreAjaxAction, client_action: "get_grid_search_ids", token: t.loadMoreAjaxToken, data: r };
                jQuery.ajax({ type: "post", url: t.loadMoreAjaxUrl, dataType: "json", data: n }).success(function(a) {
                    if ("on" === t.cookies.search && createCookie("grid_" + t.gridID + "_search", o, t.cookies.timetosave * (1 / 60 / 60)), t.cookies.searchjusttriggered === !0) {
                        var r = readCookie("grid_" + t.girdID + "_pagination"),
                            n = readCookie("grid_" + t.girdID + "_filters");
                        setTimeout(function() { resetFiltersFromCookies(t, !0, n), resetPaginationFromCookies(t, r) }, 200), t.cookies.searchjusttriggered = !1 }
                    setTimeout(function() { t.lastsearchtimer = 0, jQuery(t.filterGroupClass + ".eg-search-wrapper .eg-search-input").attr("disabled", !1), punchgs.TweenLite.to(jQuery(t.filterGroupClass + ".eg-search-wrapper").find(".esg-loader"), .5, { autoAlpha: 1, ease: punchgs.Power3.easeInOut, onComplete: function() { jQuery(t.filterGroupClass + ".eg-search-wrapper").find(".esg-loader").remove() } }), jQuery(t.filterGroupClass + ".eg-search-wrapper .eg-search-input").trigger("searchended") }, 1e3);
                    var s = new Array;
                    a && jQuery.each(a, function(e, t) { t != undefined && jQuery.isNumeric(t) && s.push(t) }), e.find(".cat-searchresult").removeClass("cat-searchresult");
                    var l = 0;
                    jQuery.each(t.loadMoreItems, function(e, t) { t[2] = "notsearched", jQuery.each(s, function(e, a) {
                        return parseInt(t[0], 0) === parseInt(a, 0) && -1 != parseInt(t[0], 0) ? (t[2] = "cat-searchresult", l++, !1) : void 0 }) }), jQuery.each(s, function(t, a) { e.find(".eg-post-id-" + a).addClass("cat-searchresult") }), i.addClass("eg-forcefilter").addClass("eg-justfilteredtosearch"), jQuery(t.filterGroupClass + ".esg-filter-wrapper .esg-allfilter").trigger("click") }).error(function(e, a) { console.log("FAILURE: " + a), setTimeout(function() { t.lastsearchtimer = 0, jQuery(t.filterGroupClass + ".eg-search-wrapper .eg-search-input").attr("disabled", !1), punchgs.TweenLite.to(jQuery(t.filterGroupClass + ".eg-search-wrapper").find(".esg-loader"), .5, { autoAlpha: 1, ease: punchgs.Power3.easeInOut, onComplete: function() { jQuery(t.filterGroupClass + ".eg-search-wrapper").find(".esg-loader").remove() } }), jQuery(t.filterGroupClass + ".eg-search-wrapper .eg-search-input").trigger("searchended") }, 1e3) }) } else { jQuery.each(t.loadMoreItems, function(e, t) { t[2] = "notsearched" }), e.find(".cat-searchresult").removeClass("cat-searchresult");
                var i = jQuery(t.filterGroupClass + ".eg-search-wrapper.esg-filter-wrapper .hiddensearchfield");
                i.removeClass("eg-forcefilter").addClass("eg-justfilteredtosearch"), "on" === t.cookies.search && createCookie("grid_" + t.gridID + "_search", "", -1), jQuery(t.filterGroupClass + ".esg-filter-wrapper .esg-allfilter").trigger("click"), setTimeout(function() { t.lastsearchtimer = 0, jQuery(t.filterGroupClass + ".eg-search-wrapper .eg-search-input").attr("disabled", !1), punchgs.TweenLite.to(jQuery(t.filterGroupClass + ".eg-search-wrapper").find(".esg-loader"), .5, { autoAlpha: 1, ease: punchgs.Power3.easeInOut, onComplete: function() { jQuery(t.filterGroupClass + ".eg-search-wrapper").find(".esg-loader").remove() } }), jQuery(t.filterGroupClass + ".eg-search-wrapper .eg-search-input").trigger("searchended") }, 1e3) } }
        resetFiltersFromCookies(t);
        var o = e.find(".eg-leftright-container"),
            i = getBestFitColumn(t, jQuery(window).width(), "id");
        if (t.column = i.column, t.columnindex = i.index, prepareItemsInGrid(t), organiseGrid(t), jQuery(t.filterGroupClass + ".eg-search-wrapper").length > 0) {
            var r = t.filterGroupClass.replace(".", ""),
                n = "Search Result",
                s = jQuery(t.filterGroupClass + ".eg-search-wrapper .eg-search-submit"),
                l = jQuery(t.filterGroupClass + ".eg-search-wrapper .eg-search-clean");
            jQuery(t.filterGroupClass + ".esg-filter-wrapper.eg-search-wrapper").append('<div style="display:none !important" class="esg-filterbutton hiddensearchfield ' + r + '" data-filter="cat-searchresult"><span>' + n + "</span></div>"), t.lastsearchtimer = 0, s.click(a), jQuery(t.filterGroupClass + ".eg-search-wrapper .eg-search-input").on("change", a), l.click(function() { "on" === t.cookies.search && createCookie("grid_" + t.gridID + "_search", "", -1), jQuery.each(t.loadMoreItems, function(e, t) { t[2] = "notsearched" }), e.find(".cat-searchresult").removeClass("cat-searchresult");
                var a = jQuery(t.filterGroupClass + ".eg-search-wrapper.esg-filter-wrapper .hiddensearchfield");
                jQuery(t.filterGroupClass + ".eg-search-wrapper .eg-search-input").val(""), a.removeClass("eg-forcefilter").addClass("eg-justfilteredtosearch"), jQuery(t.filterGroupClass + ".esg-filter-wrapper .esg-allfilter").trigger("click"), setTimeout(function() { t.lastsearchtimer = 0, jQuery(t.filterGroupClass + ".eg-search-wrapper .eg-search-input").attr("disabled", !1), punchgs.TweenLite.to(jQuery(t.filterGroupClass + ".eg-search-wrapper").find(".esg-loader"), .5, { autoAlpha: 1, ease: punchgs.Power3.easeInOut, onComplete: function() { jQuery(t.filterGroupClass + ".eg-search-wrapper").find(".esg-loader").remove() } }), jQuery(t.filterGroupClass + ".eg-search-wrapper .eg-search-input").trigger("searchended") }, 1e3) }) }
        addCountSuffix(e, t), jQuery(t.filterGroupClass + ".esg-filter-wrapper," + t.filterGroupClass + " .esg-filter-wrapper").each(function() {
            var e = jQuery(this);
            e.hasClass("dropdownstyle") && (e.find(".esg-filter-checked").each(function() { jQuery(this).prependTo(jQuery(this).parent()) }), is_mobile() ? e.find(".esg-selected-filterbutton").click(function() {
                var t = e.find(".esg-selected-filterbutton");
                t.hasClass("hoveredfilter") ? (setTimeout(function() { t.removeClass("hoveredfilter") }, 200), e.find(".esg-dropdown-wrapper").stop().hide()) : (setTimeout(function() { t.addClass("hoveredfilter") }, 200), e.find(".esg-dropdown-wrapper").stop().show()) }) : "click" == t.showDropFilter ? (e.click(function() {
                var e = jQuery(this).closest(".esg-filter-wrapper");
                e.find(".esg-selected-filterbutton").addClass("hoveredfilter"), e.find(".esg-dropdown-wrapper").stop().show() }), e.on("mouseleave", function() {
                var e = jQuery(this).closest(".esg-filter-wrapper");
                e.find(".esg-selected-filterbutton").removeClass("hoveredfilter"), e.find(".esg-dropdown-wrapper").stop().hide() })) : e.hover(function() {
                var e = jQuery(this).closest(".esg-filter-wrapper");
                e.find(".esg-selected-filterbutton").addClass("hoveredfilter"), e.find(".esg-dropdown-wrapper").stop().show() }, function() {
                var e = jQuery(this).closest(".esg-filter-wrapper");
                e.find(".esg-selected-filterbutton").removeClass("hoveredfilter"), e.find(".esg-dropdown-wrapper").stop().hide() })) }), jQuery("body").on("click", t.filterGroupClass + ".esg-left," + t.filterGroupClass + " .esg-left", function() { t = getOptions(e), t.oldpage = t.currentpage, t.currentpage--, t.currentpage < 0 && (t.currentpage = t.realmaxpage - 1);
            var a = getBestFitColumn(t, jQuery(window).width(), "id");
            t.column = a.column, t.columnindex = a.index, setItemsOnPages(t), organiseGrid(t, "right"), setOptions(e, t), stopAllVideos(!0) }), jQuery("body").on("click", t.filterGroupClass + ".esg-right," + t.filterGroupClass + " .esg-right", function() { t = getOptions(e), t.oldpage = t.currentpage, t.currentpage++, t.currentpage >= t.realmaxpage && (t.currentpage = 0);
            var a = getBestFitColumn(t, jQuery(window).width(), "id");
            t.column = a.column, t.columnindex = a.index, setItemsOnPages(t), organiseGrid(t, "right"), setOptions(e, t), stopAllVideos(!0) }), jQuery(t.filterGroupClass + ".esg-filterbutton, " + t.filterGroupClass + " .esg-filterbutton").each(function() { jQuery(this).hasClass("esg-pagination-button") || jQuery(this).click(function() {
            var t = getOptions(e);
            stopAllVideos(!0);
            var a = jQuery(this);
            a.hasClass("esg-pagination-button") || (jQuery(t.filterGroupClass + ".esg-allfilter, " + t.filterGroupClass + " .esg-allfilter").removeClass("selected"), a.hasClass("esg-allfilter") && jQuery(t.filterGroupClass + ".esg-filterbutton, " + t.filterGroupClass + " .esg-filterbutton").each(function() { jQuery(this).removeClass("selected") })), a.closest(".esg-filters").hasClass("esg-singlefilters") || "single" == t.filterType ? (jQuery(t.filterGroupClass + ".esg-filterbutton, " + t.filterGroupClass + " .esg-filterbutton").each(function() { jQuery(this).removeClass("selected") }), a.addClass("selected")) : a.hasClass("selected") ? a.removeClass("selected") : a.addClass("selected");
            var o = jQuery(t.filterGroupClass + ".esg-filter-wrapper .hiddensearchfield");
            o.hasClass("eg-forcefilter") && o.addClass("selected");
            var i = 0,
                r = "";
            jQuery(t.filterGroupClass + ".esg-filterbutton.selected," + t.filterGroupClass + " .esg-filterbutton.selected").each(function() { jQuery(this).hasClass("selected") && !jQuery(this).hasClass("esg-pagination-button") && (i++, r = 0 === i ? jQuery(this).data("fid") : r + "," + jQuery(this).data("fid")) }), "on" === t.cookies.filter && t.cookies.searchjusttriggered !== !0 && createCookie("grid_" + t.girdID + "_filters", r, t.cookies.timetosave * (1 / 60 / 60)), 0 == i && jQuery(t.filterGroupClass + ".esg-allfilter," + t.filterGroupClass + " .esg-allfilter").addClass("selected"), t.filterchanged = !0, t.currentpage = 0, 1 == t.maxpage ? (jQuery(t.filterGroupClass + ".navigationbuttons," + t.filterGroupClass + " .navigationbuttons").css({ display: "none" }), jQuery(t.filterGroupClass + ".esg-pagination," + t.filterGroupClass + " .esg-pagination").css({ display: "none" })) : (jQuery(t.filterGroupClass + ".navigationbuttons," + t.filterGroupClass + " .navigationbuttons").css({ display: "inline-block" }), jQuery(t.filterGroupClass + ".esg-pagination," + t.filterGroupClass + " .esg-pagination").css({ display: "inline-block" }));
            var n = e.find(".esg-loadmore");
            if (n.length > 0) {
                var s = checkMoreToLoad(e, t).length;
                n.html(s > 0 ? "off" == t.loadMoreNr ? t.loadMoreTxt : t.loadMoreTxt + " (" + s + ")" : t.loadMoreEndTxt) }
            setItemsOnPages(t), organiseGrid(t), setOptions(e, t) }) });
        var u;
        jQuery(window).on("resize.essg", function() {
            if (clearTimeout(u), "on" == t.forceFullWidth || "on" == t.forceFullScreen) {
                var a = e.parent().parent().find(".esg-relative-placeholder").offset().left;
                e.closest(".esg-container-fullscreen-forcer").css({ left: 0 - a, width: jQuery(window).width() }) } else e.closest(".esg-container-fullscreen-forcer").css({ left: 0, width: "auto" });
            if (o.length > 0) {
                var i = o.outerWidth(!0);
                punchgs.TweenLite.set(e.find(".esg-overflowtrick"), { width: e.width() - i, overwrite: "all" }) }
            var r = getBestFitColumn(t, jQuery(window).width(), "id");
            t.column = r.column, t.columnindex = r.index, setOptions(e, t), u = setTimeout(function() { t = getOptions(e), setItemsOnPages(t), organiseGrid(t), setOptions(e, t) }, 200) }), e.on("itemsinposition", function() {
            var e = jQuery(this),
                t = getOptions(e),
                a = e.find(".eg-leftright-container");
            if (clearTimeout(e.data("callednow")), t.maxheight > 0 && t.maxheight < 9999999999) { t.inanimation = !1;
                var o = e.find(".esg-overflowtrick").first(),
                    i = e.find("ul").first(),
                    a = e.find(".eg-leftright-container"),
                    r = parseInt(o.css("paddingTop"), 0);
                r = r == undefined ? 0 : r, r = null == r ? 0 : r;
                var n = parseInt(o.css("paddingBottom"), 0);
                n = n == undefined ? 0 : n, n = null == n ? 0 : n;
                var s = t.maxheight + t.overflowoffset + r + n;
                if ("on" == t.forceFullScreen) {
                    var l = jQuery(window).height();
                    if (t.fullScreenOffsetContainer != undefined) try {
                        var u = t.fullScreenOffsetContainer.split(",");
                        jQuery.each(u, function(e, a) { l -= jQuery(a).outerHeight(!0), l < t.minFullScreenHeight && (l = t.minFullScreenHeight) }) } catch (d) {}
                    s = l }
                var c = .3;
                i.height() < 200 && (c = 1), punchgs.TweenLite.to(i, c, { force3D: "auto", height: s, ease: punchgs.Power3.easeInOut, clearProps: "transform" }), punchgs.TweenLite.to(o, c, { force3D: !0, height: s, ease: punchgs.Power3.easeInOut, clearProps: "transform", onComplete: function() { e.closest(".eg-grid-wrapper, .myportfolio-container").css({ height: "auto" }).removeClass("eg-startheight") } }), a.length > 0 && punchgs.TweenLite.set(a, { minHeight: s, ease: punchgs.Power3.easeInOut });
                var p = jQuery(t.filterGroupClass + ".esg-navbutton-solo-left," + t.filterGroupClass + " .esg-navbutton-solo-left"),
                    h = jQuery(t.filterGroupClass + ".esg-navbutton-solo-right," + t.filterGroupClass + " .esg-navbutton-solo-right");
                p.length > 0 && p.css({ marginTop: 0 - p.height() / 2 }), h.length > 0 && h.css({ marginTop: 0 - h.height() / 2 }) } else if (0 == t.maxheight) {
                var o = e.find(".esg-overflowtrick").first(),
                    i = e.find("ul").first();
                punchgs.TweenLite.to(i, 1, { force3D: "auto", height: 0, ease: punchgs.Power3.easeInOut, clearProps: "transform" }), punchgs.TweenLite.to(o, 1, { force3D: !0, height: 0, ease: punchgs.Power3.easeInOut, clearProps: "transform" }) }
            e.data("callednow", setTimeout(function() { e.find(".itemtoshow.isvisiblenow").each(function() { hideUnderElems(jQuery(this)) }) }, 250)), t.firstLoadFinnished === undefined && (e.trigger("essential_grid_ready_to_use"), resetSearchFromCookies(t), resetPaginationFromCookies(t), t.firstLoadFinnished = !0) }), prepareSortingAndOrders(e), prepareSortingClicks(e) }

    function prepareSortingAndOrders(e) {
        var t = getOptions(e);
        e.find(".tp-esg-item").each(function() {
            var e = new Date(jQuery(this).data("date"));
            jQuery(this).data("date", e.getTime() / 1e3) }), jQuery(t.filterGroupClass + ".esg-sortbutton-order," + t.filterGroupClass + " .esg-sortbutton-order").each(function() {
            var e = jQuery(this);
            e.removeClass("tp-desc").addClass("tp-asc"), e.data("dir", "asc") }) }

    function prepareSortingClicks(e) { opt = getOptions(e);
        var t;
        jQuery(opt.filterGroupClass + ".esg-sortbutton-wrapper .esg-sortbutton-order," + opt.filterGroupClass + " .esg-sortbutton-wrapper .esg-sortbutton-order").click(function() {
            var a = jQuery(this);
            a.hasClass("tp-desc") ? (a.removeClass("tp-desc").addClass("tp-asc"), a.data("dir", "asc")) : (a.removeClass("tp-asc").addClass("tp-desc"), a.data("dir", "desc"));
            var o = a.data("dir");
            stopAllVideos(!0, !0), jQuery(opt.filterGroupClass + ".esg-sorting-select," + opt.filterGroupClass + " .esg-sorting-select").each(function() {
                var a = jQuery(this).val();
                clearTimeout(t), e.find(".tp-esg-item").tsort({ data: a, forceStrings: "false", order: o }), t = setTimeout(function() { opt = getOptions(e), setItemsOnPages(opt), organiseGrid(opt), setOptions(e, opt) }, 200) }) }), jQuery(opt.filterGroupClass + ".esg-sorting-select," + opt.filterGroupClass + " .esg-sorting-select").each(function() {
            var a = jQuery(this);
            a.change(function() { e.find("iframe").css({ visibility: "hidden" }), e.find(".video-eg").css({ visibility: "hidden" });
                var o = jQuery(this).closest(".esg-sortbutton-wrapper").find(".esg-sortbutton-order"),
                    i = a.val(),
                    r = a.find("option:selected").text(),
                    n = o.data("dir");
                stopAllVideos(!0, !0), clearTimeout(t), a.parent().parent().find(".sortby_data").text(r), e.find(".tp-esg-item").tsort({ data: i, forceStrings: "false", order: n }), t = setTimeout(function() { opt = getOptions(e), setItemsOnPages(opt), organiseGrid(opt), setOptions(e, opt) }, 500) }) }) }

    function fixCenteredCoverElement(e, t, a) {
        if (t == undefined && (t = e.find(".esg-entry-cover")), a == undefined && (a = e.find(".esg-entry-media")), t && a) {
            var o = a.height();
            punchgs.TweenLite.set(t, { height: o });
            var i = e.find(".esg-cc");
            punchgs.TweenLite.set(i, { top: (o - i.height()) / 2 }) } }

    function getBestFitColumn(e, t, a) {
        var o = t,
            i = 0,
            r = 9999,
            n = 0,
            s = e.column,
            l = (e.column, e.column),
            u = 0,
            d = 0;
        e.responsiveEntries != undefined && e.responsiveEntries.length > 0 && jQuery.each(e.responsiveEntries, function(e, t) {
            var a = t.width != undefined ? t.width : 0,
                c = t.amount != undefined ? t.amount : 0;
            r > a && (r = a, s = c, d = e), a > n && (n = a, lamount = c), a > i && o >= a && (i = a, l = c, u = e) }), r > t && (l = s, u = d);
        var c = new Object;
        return c.index = u, c.column = l, "id" == a ? c : l }

    function getOptions(e) {
        return e.data("opt") }

    function setOptions(e, t) { e.data("opt", t) }

    function checkMediaListeners(e) { e.find("iframe").each(function() {
        var e = jQuery(this);
        e.attr("src").toLowerCase().indexOf("youtube") > 0 ? prepareYT(e) : e.attr("src").toLowerCase().indexOf("vimeo") > 0 ? prepareVimeo(e) : e.attr("src").toLowerCase().indexOf("wistia") > 0 ? prepareWs(e) : e.attr("src").toLowerCase().indexOf("soundcloud") > 0 && prepareSoundCloud(e) }), e.find("video").each(function() { prepareVideo(jQuery(this)) }) }

    function waitMediaListeners(e) {
        var t = setInterval(function() { e.find("iframe").each(function() {
            var e = jQuery(this);
            e.attr("src").toLowerCase().indexOf("youtube") > 0 ? prepareYT(e) && clearInterval(t) : e.attr("src").toLowerCase().indexOf("vimeo") > 0 ? prepareVimeo(e) && clearInterval(t) : e.attr("src").toLowerCase().indexOf("wistia") > 0 ? prepareWs(e) && clearInterval(t) : e.attr("src").toLowerCase().indexOf("soundcloud") > 0 ? prepareSoundCloud(e) && clearInterval(t) : clearInterval(t) }), e.find("video").each(function() { prepareVideo(jQuery(this)) && clearInterval(t) }) }, 50) }

    function directionPrepare(e, t, a, o, i) {
        var r = new Object;
        switch (e) {
            case 0:
                r.x = 0, r.y = "in" == t ? 0 - o : 10 + o, r.y = i && "in" == t ? r.y - 5 : r.y;
                break;
            case 1:
                r.y = 0, r.x = "in" == t ? a : -10 - a, r.x = i && "in" == t ? r.x + 5 : r.x;
                break;
            case 2:
                r.y = "in" == t ? o : -10 - o, r.x = 0, r.y = i && "in" == t ? r.y + 5 : r.y;
                break;
            case 3:
                r.y = 0, r.x = "in" == t ? 0 - a : 10 + a, r.x = i && "in" == t ? r.x - 5 : r.x }
        return r }

    function getDir(e, t) {
        var a = e.width(),
            o = e.height(),
            i = (t.x - e.offset().left - a / 2) * (a > o ? o / a : 1),
            r = (t.y - e.offset().top - o / 2) * (o > a ? a / o : 1),
            n = Math.round((Math.atan2(r, i) * (180 / Math.PI) + 180) / 90 + 3) % 4;
        return n }

    function hideUnderElems(e) { e.find(".eg-handlehideunder").each(function() {
        var t = jQuery(this),
            a = t.data("hideunder"),
            o = t.data("hideunderheight"),
            i = t.data("hidetype");
        t.data("knowndisplay") == undefined && t.data("knowndisplay", t.css("display")), e.width() < a && a != undefined || e.height() < o && o != undefined ? "visibility" == i ? t.addClass("forcenotvisible") : "display" == i && t.addClass("forcenotdisplay") : "visibility" == i ? t.removeClass("forcenotvisible") : "display" == i && t.removeClass("forcenotdisplay") }) }

    function offsetParrents(e, t) {
        var a = t.closest(".mainul"),
            o = a.parent();
        if (t.position().top + t.height() > a.height() + 40 || 0 == e || 0 != a.data("bh") && a.data("bh") != undefined && t.position().top + t.height() > parseInt(a.data("bh"), 0) + 40) {
            (a.data("bh") == undefined || 0 == a.data("bh")) && a.data("bh", a.height()), (o.data("bh") == undefined || 0 == o.data("bh")) && o.data("bh", o.height());
            var i = a.data("bh"),
                r = o.data("bh");
            0 != e ? (a.data("alreadyinoff", !1), punchgs.TweenLite.to(a, .2, { height: i + e }), punchgs.TweenLite.to(o, .2, { height: r + e })) : a.data("alreadyinoff") || (a.data("alreadyinoff", !0), punchgs.TweenLite.to(a, .3, { height: i, ease: punchgs.Power3.easeIn, onComplete: function() { a.data("bh", 0), o.data("bh", 0), a.data("alreadyinoff", !1) } }), punchgs.TweenLite.to(o, .3, { height: r, ease: punchgs.Power3.easeIn, onComplete: function() { a.data("bh", 0), o.data("bh", 0), a.data("alreadyinoff", !1) } })) } }

    function itemHoverAnim(e, t, a, o) { 1 != e.data("simplevideo") && checkMediaListeners(e);
        var i = !1,
            r = e.find(".esg-media-poster");
        if (r.length > 0 && 0 == r.css("opacity") && (i = !0), e.find(".isplaying, .isinpause").length > 0 || i) return !1;
        clearTimeout(e.data("hovertimer"));
        var n = a.mainhoverdelay; "set" == t && (n = 0), e.data("hovertimer", setTimeout(function() { e.data("animstarted", 1), punchgs.TweenLite.set(e, { z: .01, x: 0, y: 0, rotationX: 0, rotationY: 0, rotationZ: 0 }), e.addClass("esg-hovered");
            var i = e.find(".esg-entry-cover");
            if (punchgs.TweenLite.set(i, { transformStyle: "flat" }), "set" != t && fixCenteredCoverElement(e, i), e.find(".esg-entry-content").length > 0 && "set" != t && "even" == a.layout) {
                var r = e.data("pt"),
                    n = e.data("pb"),
                    s = e.data("pl"),
                    l = e.data("pr"),
                    u = e.data("bt"),
                    d = e.data("bb"),
                    c = e.data("bl"),
                    p = e.data("br");
                if (e.data("hhh", e.outerHeight()), e.data("www", e.outerWidth()), punchgs.TweenLite.set(e.find(".esg-entry-content"), { display: "block" }), punchgs.TweenLite.set(e.find(".esg-entry-media"), { height: e.data("hhh") }), punchgs.TweenLite.set(e, { z: .1, zIndex: 50, x: 0 - (s + l + p + c) / 2, y: 0 - (r + n + u + d) / 2, height: "auto", width: e.data("www") + s + l + c + p }), "on" == a.evenGridMasonrySkinPusher) {
                    var h = e.height() - e.data("hhh");
                    offsetParrents(h, e) }
                e.css({ paddingTop: r + "px", paddingLeft: s + "px", paddingRight: l + "px", paddingBottom: l + "px" }), e.css({ borderTopWidth: u + "px", borderBottomWidth: d + "px", borderLeftWidth: c + "px", borderRightWidth: p + "px" }), 1 != a.inanimation && punchgs.TweenLite.set(e.closest(".esg-overflowtrick"), { overflow: "visible", overwrite: "all" }) }
            jQuery.each(esgAnimmatrix, function(a, i) { e.find(i[0]).each(function() {
                var a = jQuery(this),
                    r = a.data("delay") != undefined ? a.data("delay") : 0;
                animfrom = i[2], animto = i[3], animto.delay = r, animto.overwrite = "all", animfrom.overwrite = "all", animto.transformStyle = "flat", animto.force3D = !0;
                var n = 0,
                    s = i[0].indexOf("out") > -1;
                a.hasClass("esg-entry-media") || s || (animto.clearProps = "transform"), s && (animfrom.clearProps = "transform"), animto.z = .001, animfrom.transformPerspective == undefined && (animfrom.transformPerspective = 1e3), a.hasClass("esg-overlay") && (animfrom.z == undefined && (animfrom.z = -.002), animto.z = -1e-4);
                var l = a;
                if (a.hasClass("esg-entry-media") && a.find(".esg-media-video").length > 0) return !0;
                var u = punchgs.TweenLite.killTweensOf(l, !1);
                if ("set" == t) {
                    var u = punchgs.TweenLite.set(l, animfrom);
                    s && u.eventCallback("onComplete", resetTransforms, [l]) } else switch (i[0]) {
                    case ".esg-shifttotop":
                        animto.y = 0 - e.find(".esg-bc.eec").last().height();
                        var u = punchgs.TweenLite.fromTo(a, .5, { y: 0 }, { y: animto.y });
                        break;
                    case ".esg-slide":
                        var d = directionPrepare(o, "in", e.width(), e.height()),
                            c = new Object,
                            p = new Object;
                        jQuery.extend(c, animfrom), jQuery.extend(p, animto), c.css.x = d.x, c.css.y = d.y;
                        var u = punchgs.TweenLite.fromTo(l, i[1], c, p, n);
                        break;
                    case ".esg-slideout":
                        var d = directionPrepare(o, "out", e.width(), e.height()),
                            c = new Object,
                            p = new Object;
                        jQuery.extend(c, animfrom), jQuery.extend(p, animto), p.x = d.x, p.y = d.y, p.clearProps = "";
                        var u = punchgs.TweenLite.fromTo(l, i[1], c, p, n);
                        break;
                    default:
                        var u = punchgs.TweenLite.fromTo(l, i[1], animfrom, animto, n) } }) }) }, n)) }

    function videoClickEvent(e, t, a, o) { e.css({ transform: "none", "-moz-transform": "none", "-webkit-transform": "none" }), e.closest(".esg-overflowtrick").css({ transform: "none", "-moz-transform": "none", "-webkit-transform": "none" }), e.closest("ul").css({ transform: "none", "-moz-transform": "none", "-webkit-transform": "none" }), o || e.find(".esg-media-video").each(function() {
        var t = jQuery(this);
        if (t.data("youtube") != undefined && 0 == e.find(".esg-youtube-frame").length) {
            var a = e.find(".esg-entry-media"),
                o = "https://www.youtube.com/embed/" + t.data("youtube") + "?version=3&enablejsapi=1&html5=1&controls=1&autohide=1&rel=0&showinfo=0";
            a.append('<iframe class="esg-youtube-frame" wmode="Opaque" style="position:absolute;top:0px;left:0px;display:none" width="' + t.attr("width") + '" height="' + t.attr("height") + '" data-src="' + o + '" src="about:blank"></iframe>') }
        if (t.data("vimeo") != undefined && 0 == e.find(".esg-vimeo-frame").length) {
            var a = e.find(".esg-entry-media"),
                i = "http://player.vimeo.com/video/" + t.data("youtube") + "?title=0&byline=0&html5=1&portrait=0&api=1;";
            a.append('<iframe class="esg-vimeo-frame"  allowfullscreen="false" style="position:absolute;top:0px;left:0px;display:none" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" width="' + t.attr("width") + '" height="' + t.attr("height") + '" data-src="' + i + '" src="about:blank"></iframe>') }
        if (t.data("wistia") != undefined && 0 == e.find(".esg-wistia-frame").length) {
            var a = e.find(".esg-entry-media"),
                r = "https://fast.wistia.net/embed/iframe/" + t.data("wistia") + "?version=3&enablejsapi=1&html5=1&controls=1&autohide=1&rel=0&showinfo=0";
            a.append('<iframe class="esg-wistia-frame" wmode="Opaque" style="position:absolute;top:0px;left:0px;display:none" width="' + t.attr("width") + '" height="' + t.attr("height") + '" data-src="' + r + '" src="about:blank"></iframe>') }
        if (t.data("soundcloud") != undefined && 0 == e.find(".esg-soundcloud-frame").length) {
            var a = e.find(".esg-entry-media"),
                n = "https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/" + t.data("soundcloud") + "&auto_play=false&hide_related=false&visual=true&show_artwork=true";
            a.append('<iframe class="esg-soundcloud-frame" allowfullscreen="false" style="position:absolute;top:0px;left:0px;display:none" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" width="' + t.attr("width") + '" height="' + t.attr("height") + '" scrolling="no" frameborder="no" data-src="' + n + '" src="about:blank"></iframe>') }
        if ((t.data("mp4") != undefined || t.data("webm") != undefined || t.data("ogv") != undefined) && 0 == e.find(".esg-video-frame").length) {
            var a = e.find(".esg-entry-media");
            a.append('<video class="esg-video-frame" style="position:absolute;top:0px;left:0px;display:none" width="' + t.attr("width") + '" height="' + t.attr("height") + '" data-origw="' + t.attr("width") + '" data-origh="' + t.attr("height") + '" ></video'), t.data("mp4") != undefined && a.find("video").append('<source src="' + t.data("mp4") + '" type="video/mp4" />'), t.data("webm") != undefined && a.find("video").append('<source src="' + t.data("webm") + '" type="video/webm" />'), t.data("ogv") != undefined && a.find("video").append('<source src="' + t.data("ogv") + '" type="video/ogg" />') } }), adjustMediaSize(e, !0, null, a);
        var i = e.find(".esg-youtube-frame");
        0 == i.length && (i = e.find(".esg-vimeo-frame")), 0 == i.length && (i = e.find(".esg-wistia-frame")), 0 == i.length && (i = e.find(".esg-soundcloud-frame")), 0 == i.length && (i = e.find(".esg-video-frame"));
        var r = e.find(".esg-entry-cover"),
            n = e.find(".esg-media-poster");
        if ("about:blank" == i.attr("src")) { i.attr("src", i.data("src")), loadVideoApis(t, a), o || punchgs.TweenLite.set(i, { opacity: 0, display: "block" });
            var s = setInterval(function() { i.attr("src").toLowerCase().indexOf("youtube") > 0 ? 1 == prepareYT(i) && (clearInterval(s), o || (is_mobile() ? (punchgs.TweenLite.set(i, { autoAlpha: 1 }), punchgs.TweenLite.set(n, { autoAlpha: 0 }), punchgs.TweenLite.set(r, { autoAlpha: 0 })) : (punchgs.TweenLite.to(i, .5, { autoAlpha: 1 }), punchgs.TweenLite.to(n, .5, { autoAlpha: 0 }), punchgs.TweenLite.to(r, .5, { autoAlpha: 0 }), playYT(i, o)))) : i.attr("src").toLowerCase().indexOf("vimeo") > 0 ? 1 == prepareVimeo(i) && (clearInterval(s), o || (is_mobile() ? (punchgs.TweenLite.set(i, { autoAlpha: 1 }), punchgs.TweenLite.set(n, { autoAlpha: 0 }), punchgs.TweenLite.set(r, { autoAlpha: 0 })) : (punchgs.TweenLite.to(i, .5, { autoAlpha: 1 }), punchgs.TweenLite.to(n, .5, { autoAlpha: 0 }), punchgs.TweenLite.to(r, .5, { autoAlpha: 0 })), playVimeo(i, o))) : i.attr("src").toLowerCase().indexOf("wistia") > 0 ? 1 == prepareWs(i) && (clearInterval(s), o || (is_mobile() ? (punchgs.TweenLite.set(i, { autoAlpha: 1 }), punchgs.TweenLite.set(n, { autoAlpha: 0 }), punchgs.TweenLite.set(r, { autoAlpha: 0 })) : (punchgs.TweenLite.to(i, .5, { autoAlpha: 1 }), punchgs.TweenLite.to(n, .5, { autoAlpha: 0 }), punchgs.TweenLite.to(r, .5, { autoAlpha: 0 }), playYT(i, o)))) : i.attr("src").toLowerCase().indexOf("soundcloud") > 0 && 1 == prepareSoundCloud(i) && (clearInterval(s), o || (is_mobile() ? (punchgs.TweenLite.set(i, { autoAlpha: 1 }), punchgs.TweenLite.set(n, { autoAlpha: 0 }), punchgs.TweenLite.set(r, { autoAlpha: 0 })) : (punchgs.TweenLite.to(i, .5, { autoAlpha: 1 }), punchgs.TweenLite.to(n, .5, { autoAlpha: 0 }), punchgs.TweenLite.to(r, .5, { autoAlpha: 0 })), playSC(i, o))) }, 100) } else if (i.hasClass("esg-video-frame")) { loadVideoApis(t, a), punchgs.TweenLite.set(i, { opacity: 0, display: "block" });
            var s = setInterval(function() { 1 == prepareVideo(i) && (clearInterval(s), o || (is_mobile() ? (punchgs.TweenLite.set(i, { autoAlpha: 1 }), punchgs.TweenLite.set(n, { autoAlpha: 0 }), punchgs.TweenLite.set(r, { autoAlpha: 0 })) : (punchgs.TweenLite.to(i, .5, { autoAlpha: 1 }), punchgs.TweenLite.to(n, .5, { autoAlpha: 0 }), punchgs.TweenLite.to(r, .5, { autoAlpha: 0 })), playVideo(i, o))) }, 100) } else o || (is_mobile() ? (punchgs.TweenLite.set(i, { autoAlpha: 1 }), punchgs.TweenLite.set(n, { autoAlpha: 0 }), punchgs.TweenLite.set(r, { autoAlpha: 0 })) : (punchgs.TweenLite.set(i, { opacity: 0, display: "block" }), punchgs.TweenLite.to(i, .5, { autoAlpha: 1 }), punchgs.TweenLite.to(n, .5, { autoAlpha: 0 }), punchgs.TweenLite.to(r, .5, { autoAlpha: 0 }))), i.attr("src") != undefined && (i.attr("src").toLowerCase().indexOf("youtube") > 0 && playYT(i, o), i.attr("src").toLowerCase().indexOf("vimeo") > 0 && playVimeo(i, o), i.attr("src").toLowerCase().indexOf("wistia") > 0 && playWs(i, o), i.attr("src").toLowerCase().indexOf("soundcloud") > 0 && playSC(i, o)) }

    function prepareItemsInGrid(e, t) {
        var a = e.container;
        a.addClass("esg-container"), t || a.find(".mainul>li").each(function() { jQuery(this).addClass("eg-newli") });
        var o = a.find(".mainul>.eg-newli"),
            i = (100 / e.column, e.aspectratio),
            r = a.find(".esg-overflowtrick").parent().width(),
            n = (a.find("ul").first(), a.find(".esg-overflowtrick").first(), 0);
        i = i.split(":"), aratio = parseInt(i[0], 0) / parseInt(i[1], 0), n = r / e.column / aratio, jQuery.each(o, function(t, o) {
            var i = jQuery(o),
                r = i.find(".esg-entry-media"),
                n = r.find("img").attr("src");
            i.removeClass("eg-newli"), punchgs.TweenLite.set(i, { force3D: "auto", autoAlpha: 0, opacity: 0 }), i.addClass("tp-esg-item"), "even" == e.layout ? n != undefined && (i.find(".esg-entry-media").wrap('<div class="esg-entry-media-wrapper" style="width:100%;height:100%; overflow:hidden;position:relative;"></div>'), r.find("img").css({ top: "0px", left: "0px", width: "100%", height: "auto", visibility: "visible", display: "block" })) : i.find(".esg-entry-media").wrap('<div class="esg-entry-media-wrapper" style="overflow:hidden;position:relative;"></div>'), i.find(".esg-media-video").each(function() {
                var t = jQuery(this),
                    o = i.find(".esg-entry-media"),
                    r = "display:none;",
                    n = "data-src=",
                    s = "src=";
                if (t.data("poster") != undefined && t.data("poster").length > 3 ? "even" != e.layout ? (o.append('<img class="esg-media-poster" src="' + t.data("poster") + '" width="' + t.attr("width") + '" height="' + t.attr("height") + '">'), o.find("img").css({ top: "0px", left: "0px", width: "100%", height: "auto", visibility: "visible", display: "block" })) : (o.append('<div class="esg-media-poster" style="background:url(' + t.data("poster") + '); background-size:cover; background-position:center center">'), o.find(".esg-media-poster").css({ width: "100%", height: "100%", visibility: "visible", position: "relative", display: "block" })) : (i.find(".esg-entry-cover").remove(), r = "display:block;", n = "src=", s = "data-src=", i.data("simplevideo", 1)), 0 == i.find(".esg-click-to-play-video").length && (i.find(".esg-entry-cover").find("*").each(function() { 0 == jQuery(this).closest("a").length && 0 == jQuery(this).find("a").length && jQuery(this).addClass("esg-click-to-play-video") }), i.find(".esg-overlay").addClass("esg-click-to-play-video")), t.data("youtube") != undefined) {
                    var l = "https://www.youtube.com/embed/" + t.data("youtube") + "?version=3&enablejsapi=1&html5=1&controls=1&autohide=1&rel=0&showinfo=0";
                    o.append('<iframe class="esg-youtube-frame" wmode="Opaque" style="position:absolute;top:0px;left:0px;' + r + '" width="' + t.attr("width") + '" height="' + t.attr("height") + '" ' + n + '"' + l + '" ' + s + '"about:blank"></iframe>') }
                if (t.data("vimeo") != undefined) {
                    var u = "http://player.vimeo.com/video/" + t.data("vimeo") + "?title=0&byline=0&html5=1&portrait=0&api=1";
                    o.append('<iframe class="esg-vimeo-frame" style="position:absolute;top:0px;left:0px;' + r + '" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""  width="' + t.attr("width") + '" height="' + t.attr("height") + '" ' + n + '"' + u + '" ' + s + '"about:blank"></iframe>') }
                if (t.data("wistia") != undefined) {
                    var d = "https://fast.wistia.net/embed/iframe/" + t.data("wistia") + "?version=3&enablejsapi=1&html5=1&controls=1&autohide=1&rel=0&showinfo=0";
                    o.append('<iframe class="esg-wistia-frame" wmode="Opaque" style="position:absolute;top:0px;left:0px;' + r + '" width="' + t.attr("width") + '" height="' + t.attr("height") + '" ' + n + '"' + d + '" ' + s + '"about:blank"></iframe>') }
                if (t.data("soundcloud") != undefined) {
                    var c = "https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/" + t.data("soundcloud") + "&auto_play=false&hide_related=false&visual=true&show_artwork=true";
                    o.append('<iframe class="esg-soundcloud-frame" style="position:absolute;top:0px;left:0px;' + r + '" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" width="' + t.attr("width") + '" height="' + t.attr("height") + '" ' + n + '"' + c + '" ' + s + '"about:blank"></iframe>') }(t.data("mp4") != undefined || t.data("webm") != undefined || t.data("ogv") != undefined) && (o.append('<video class="esg-video-frame" controls style="position:absolute;top:0px;left:0px;' + r + '" width="' + t.attr("width") + '" height="' + t.attr("height") + '" data-origw="' + t.attr("width") + '" data-origh="' + t.attr("height") + '"></video'), t.data("mp4") != undefined && o.find("video").append('<source src="' + t.data("mp4") + '" type="video/mp4" />'), t.data("webm") != undefined && o.find("video").append('<source src="' + t.data("webm") + '" type="video/webm" />'), t.data("ogv") != undefined && o.find("video").append('<source src="' + t.data("ogv") + '" type="video/ogg" />')), i.find(".esg-click-to-play-video").click(function() {
                    var t = jQuery(this).closest(".tp-esg-item");
                    videoClickEvent(t, a, e) }), 1 == i.data("simplevideo") && waitMediaListeners(i) }), 0 == i.find(".esg-media-video").length && i.find(".esg-click-to-play-video").remove(), adjustMediaSize(i, !0, null, e), i.find(".esg-entry-content").length > 0 && i.find(".esg-media-cover-wrapper").length > 0 && (i.find(".esg-entry-content").index() < i.find(".esg-media-cover-wrapper").index() || i.find(".esg-entry-content").addClass("esg-notalone")), i.find(".esg-entry-cover").each(function() {
                var e = jQuery(this),
                    t = e.data("clickable");
                e.find(".esg-top").wrapAll('<div class="esg-tc eec"></div>'), e.find(".esg-left").wrapAll('<div class="esg-lc eec"></div>'), e.find(".esg-right").wrapAll('<div class="esg-rc eec"></div>'), e.find(".esg-center").wrapAll('<div class="esg-cc eec"></div>'), e.find(".esg-bottom").wrapAll('<div class="esg-bc eec"></div>'), e.find(".eec").append("<div></div>"), "on" == t && e.find(".esg-overlay").length >= 1 && e.click(function(e) { 0 == jQuery(e.target).closest("a").length && jQuery(this).find(".eg-invisiblebutton")[0].click() }).css({ cursor: "pointer" }) }), i.data("pt", parseInt(i.css("paddingTop"), 0)), i.data("pb", parseInt(i.css("paddingBottom"), 0)), i.data("pl", parseInt(i.css("paddingLeft"), 0)), i.data("pr", parseInt(i.css("paddingRight"), 0)), i.data("bt", parseInt(i.css("borderTopWidth"), 0)), i.data("bb", parseInt(i.css("borderBottomWidth"), 0)), i.data("bl", parseInt(i.css("borderLeftWidth"), 0)), i.data("br", parseInt(i.css("borderRightWidth"), 0)), i.find(".esg-entry-content").length > 0 && "even" == e.layout && (i.css({ paddingTop: "0px", paddingLeft: "0px", paddingRight: "0px", paddingBottom: "0px" }), i.css({ borderTopWidth: "0px", borderBottomWidth: "0px", borderLeftWidth: "0px", borderRightWidth: "0px" })), i.find(".eg-handlehideunder").each(function() {}), e.ajaxContentTarget != undefined && jQuery("#" + e.ajaxContentTarget).length > 0 && i.find(".eg-ajaxclicklistener, a").each(function() {
                var t = jQuery(this),
                    o = jQuery("#" + e.ajaxContentTarget).find(".eg-ajax-target");
                o.parent().hasClass("eg-ajaxanimwrapper") || o.wrap('<div class="eg-ajaxanimwrapper" style="position:relative;overflow:hidden;"></div>'), t.data("ajaxsource") != undefined && t.data("ajaxtype") != undefined && (t.addClass("eg-ajax-a-button"), t.click(function() {
                    return loadMoreContent(a, e, t), o.length > 0 ? !1 : !0 })) }), i.find(".eg-triggerfilter").click(function() {
                var t = jQuery(this).data("filter");
                return jQuery(e.filterGroupClass + ".esg-filterbutton," + e.filterGroupClass + " .esg-filterbutton").each(function() { jQuery(this).data("filter") == t && jQuery(this).trigger("click") }), !1 }).css({ cursor: "pointer" }), i.on("mouseenter.hoverdir, mouseleave.hoverdir", function(t) {
                var a = jQuery(this),
                    o = getDir(a, { x: t.pageX, y: t.pageY });
                if ("mouseenter" === t.type) itemHoverAnim(jQuery(this), "nope", e, o);
                else {
                    if (clearTimeout(a.data("hovertimer")), 1 == a.data("animstarted")) { a.data("animstarted", 0), a.removeClass("esg-hovered");
                        var i = (a.find(".esg-entry-cover"), 0);
                        a.find(".esg-entry-content").length > 0 && "even" == e.layout && (punchgs.TweenLite.set(a.find(".esg-entry-content"), { display: "none" }), punchgs.TweenLite.set(a, { zIndex: 5 }), punchgs.TweenLite.set(a.closest(".esg-overflowtrick"), { overflow: "hidden", overwrite: "all" }), a.css({ paddingTop: "0px", paddingLeft: "0px", paddingRight: "0px", paddingBottom: "0px" }), a.css({ borderTopWidth: "0px", borderBottomWidth: "0px", borderLeftWidth: "0px", borderRightWidth: "0px" }), a.find(".esg-entry-media").css({ height: "100%" }), punchgs.TweenLite.set(a, { z: 0, height: a.data("hhh"), width: a.data("www"), x: 0, y: 0 }), "on" == e.evenGridMasonrySkinPusher && offsetParrents(0, a)), jQuery.each(esgAnimmatrix, function(e, t) { a.find(t[0]).each(function() {
                            var e = jQuery(this),
                                r = e.data("delay") != undefined ? e.data("delay") : 0,
                                n = t[5],
                                s = 0;
                            switch (animobject = e, splitted = !1, isOut = t[0].indexOf("out") > -1, r > i && (i = r), n.z == undefined && (n.z = 1), t[0]) {
                                case ".esg-slide":
                                    var l = directionPrepare(o, "in", a.width(), a.height(), !0);
                                    n.x = l.x, n.y = l.y;
                                    var u = punchgs.TweenLite.to(animobject, .5, { y: n.y, x: n.x, overwrite: "all", onCompleteParams: [animobject], onComplete: function(e) { punchgs.TweenLite.set(e, { autoAlpha: 0 }) } });
                                    break;
                                case ".esg-slideout":
                                    var l = directionPrepare(o, "out", a.width(), a.height());
                                    n.x = 0, n.y = 0, n.overwrite = "all";
                                    var u = punchgs.TweenLite.fromTo(animobject, .5, { autoAlpha: 1, x: l.x, y: l.y }, { x: 0, y: 0, autoAlpha: 1, overwrite: "all" });
                                    break;
                                default:
                                    n.force3D = "auto";
                                    var u = punchgs.TweenLite.to(animobject, t[4], n, s) }
                            isOut && u.eventCallback("onComplete", resetTransforms, [animobject]) }) }) }
                    a.hasClass("esg-demo") && setTimeout(function() { itemHoverAnim(a) }, 800) } }), itemHoverAnim(i, "set", e), i.hasClass("esg-demo") && itemHoverAnim(i) }), loadVideoApis(a, e), setItemsOnPages(e) }

    function resetTransforms(e) { punchgs.TweenLite.set(e, { clearProps: "transform", css: { clearProps: "transform" } }) }

    function adjustMediaSize(e, t, a, o) { e.find("iframe").length > 0 && e.find("iframe").each(function() {
        var i = jQuery(this);
        i.data("origw", i.attr("width")), i.data("origh", i.attr("height"));
        var r = i.data("origw"),
            n = i.data("origh");
        if (a != undefined) var s = a.itemw;
        else var s = e.width();
        ifh = s / r * n, s = Math.round(s), ifh = Math.round(ifh), i.data("neww", s), i.data("newh", ifh), t && "even" != o.layout ? (punchgs.TweenLite.set(i, { width: s, height: ifh }), punchgs.TweenLite.set(e.find(".esg-media-poster"), { width: s, height: ifh }), punchgs.TweenLite.set(e.find(".esg-entry-media"), { width: s, height: ifh })) : (punchgs.TweenLite.set(i, { width: "100%", height: "100%" }), punchgs.TweenLite.set(e.find(".esg-media-poster"), { width: "100%", height: "100%" }), punchgs.TweenLite.set(e.find(".esg-entry-media"), { width: "100%", height: "100%" })) }), e.find(".esg-video-frame").length > 0 && e.find(".esg-video-frame").each(function() {
        var i = jQuery(this);
        i.parent().data("origw", i.data("origw")), i.parent().data("origh", i.data("origh"));
        var r = i.data("origw"),
            n = i.data("origh");
        if (a != undefined) var s = a.itemw;
        else var s = e.width();
        ifh = s / r * n, s = Math.round(s), ifh = Math.round(ifh), i.data("neww", s), i.data("newh", ifh), t && "even" != o.layout ? (punchgs.TweenLite.set(i, { width: s, height: ifh }), punchgs.TweenLite.set(e.find(".esg-media-poster"), { width: s, height: ifh }), punchgs.TweenLite.set(e.find(".esg-entry-media"), { width: s, height: ifh })) : (punchgs.TweenLite.set(i, { width: "100%", height: "100%" }), punchgs.TweenLite.set(e.find(".esg-media-poster"), { width: "100%", height: "100%" }), punchgs.TweenLite.set(e.find(".esg-entry-media"), { width: "100%", height: "100%" })) }) }

    function setItemsOnPages(e) {
        var t = e.container,
            a = t.find(".mainul>li"),
            o = e.column * e.row,
            i = e.rowItemMultiplier,
            r = i.length;
        if (r > 0 && "even" == e.layout) { o = 0;
            for (var n = 0; n < e.row; n++) {
                var s = n - r * Math.floor(n / r);
                o += i[s][e.columnindex] } }
        if ("on" == e.evenCobbles && e.cobblesPattern != undefined) {
            var l = 0,
                o = 0;
            jQuery.each(a, function(t) {
                var a = jQuery(a),
                    i = a.data("cobblesw"),
                    r = a.data("cobblesh");
                if (e.cobblesPattern != undefined && e.cobblesPattern.length > 2) {
                    var n = getCobblePat(e.cobblesPattern, t);
                    i = parseInt(n.w, 0), r = parseInt(n.h, 0) }
                i = i == undefined ? 1 : i, r = r == undefined ? 1 : r, e.column < i && (i = e.column), l += i * r, e.column * e.row >= l && o++ }) }
        var u = o * e.currentpage,
            d = (t.find(".esg-overflowtrick").parent().width(), u + o),
            c = jQuery(e.filterGroupClass + ".esg-filterbutton.selected:not(.esg-navigationbutton)," + e.filterGroupClass + " .esg-filterbutton.selected:not(.esg-navigationbutton)"),
            p = 0;
        if (jQuery(e.filterGroupClass + ".esg-filter-wrapper, " + e.filterGroupClass + " .esg-filter-wrapper").length > 0 ? jQuery.each(a, function(t, a) {
                var o = jQuery(a);
                o.find(".esgbox").each(function() { "all" == e.lightBoxMode ? jQuery(this).attr("rel", "group") : "contentgroup" != e.lightBoxMode && jQuery(this).attr("rel", "") });
                var i = !0,
                    r = 0;
                jQuery.each(c, function(e, t) { o.hasClass(jQuery(t).data("filter")) && (i = !1, r++) }), "and" == e.filterLogic && r < c.length && (i = !0), hidsbutton = jQuery(e.filterGroupClass + ".esg-filter-wrapper .hiddensearchfield"), hidsbutton.hasClass("eg-forcefilter") && r < c.length && (i = !0), p >= u && d > p && !i ? (o.addClass("itemtoshow").removeClass("itemishidden").removeClass("itemonotherpage"), ("filterpage" == e.lightBoxMode || "filterall" == e.lightBoxMode) && o.find(".esgbox").attr("rel", "group"), p++) : ("filterall" == e.lightBoxMode && o.find(".esgbox").attr("rel", "group"), i ? o.addClass("itemishidden").removeClass("itemtoshow").removeClass("fitsinfilter") : (u > p || p >= d ? (o.addClass("itemonotherpage"), o.removeClass("itemtoshow"), p++) : (o.addClass("itemtoshow").removeClass("itemishidden").removeClass("itemonotherpage"), p++), o.addClass("fitsinfilter"))) }) : jQuery.each(a, function(t, a) {
                var o = jQuery(a);
                o.find(".esgbox").each(function() { "all" == e.lightBoxMode ? jQuery(this).attr("rel", "group") : "contentgroup" != e.lightBoxMode && jQuery(this).attr("rel", "") }), p >= u && d > p ? (o.addClass("itemtoshow").removeClass("itemishidden").removeClass("itemonotherpage"), p++) : (u > p || p >= d ? (o.addClass("itemonotherpage"), o.removeClass("itemtoshow"), p++) : (o.addClass("itemtoshow").removeClass("itemishidden").removeClass("itemonotherpage"), p++), o.addClass("fitsinfilter")) }), e.nonefiltereditems = t.find(".itemtoshow, .fitsinfilter").length, "none" != e.loadMoreType) {
            var h = 0,
                f = !1;
            c.each(function() {
                var e = jQuery(this).data("filter");
                if (e != undefined) {
                    var a = t.find("." + e).length;
                    h += a, 0 == a && (f = !0) } }), (0 == c.length || 1 == c.length) && (h = 1), (0 == h || f) && loadMoreItems(t, e) }
        var g = jQuery(e.filterGroupClass + ".esg-pagination," + e.filterGroupClass + " .esg-pagination");
        g.find(".esg-pagination").remove(), g.html(""), e.maxpage = 0;
        var w, m = Math.ceil(e.nonefiltereditems / o);
        if (e.realmaxpage = m, m > 7 && "on" == e.smartPagination)
            if (e.currentpage < 3) {
                for (var n = 0; 4 > n; n++) w = n == e.currentpage ? "selected" : "", e.maxpage++, g.append('<div class="esg-navigationbutton esg-filterbutton esg-pagination-button ' + w + '" data-page="' + n + '">' + (n + 1) + "</div>");
                g.append('<div class="esg-navigationbutton">...</div>'), g.append('<div class="esg-navigationbutton esg-filterbutton esg-pagination-button ' + w + '" data-page="' + (m - 1) + '">' + m + "</div>") } else if (m - e.currentpage < 4) { g.append('<div class="esg-navigationbutton esg-filterbutton esg-pagination-button ' + w + '" data-page="0">1</div>'), g.append('<div class="esg-navigationbutton">...</div>');
                for (var n = m - 4; m > n; n++) w = n == e.currentpage ? "selected" : "", e.maxpage++, g.append('<div class="esg-navigationbutton esg-filterbutton esg-pagination-button ' + w + '" data-page="' + n + '">' + (n + 1) + "</div>") } else { g.append('<div class="esg-navigationbutton esg-filterbutton esg-pagination-button ' + w + '" data-page="0">1</div>'), g.append('<div class="esg-navigationbutton">...</div>');
                for (var n = e.currentpage - 1; n < e.currentpage + 2; n++) w = n == e.currentpage ? "selected" : "", e.maxpage++, g.append('<div class="esg-navigationbutton esg-filterbutton esg-pagination-button ' + w + '" data-page="' + n + '">' + (n + 1) + "</div>");
                g.append('<div class="esg-navigationbutton">...</div>'), g.append('<div class="esg-navigationbutton esg-filterbutton esg-pagination-button ' + w + '" data-page="' + (m - 1) + '">' + m + "</div>") } else
            for (var n = 0; m > n; n++) w = n == e.currentpage ? "selected" : "", e.maxpage++, g.append('<div class="esg-navigationbutton esg-filterbutton esg-pagination-button ' + w + '" data-page="' + n + '">' + (n + 1) + "</div>");
        if (1 == e.maxpage ? (jQuery(e.filterGroupClass + ".esg-navigationbutton," + e.filterGroupClass + " .esg-navigationbutton").not(".esg-loadmore").css({ display: "none" }), g.css({ display: "none" })) : (jQuery(e.filterGroupClass + ".esg-navigationbutton," + e.filterGroupClass + " .esg-navigationbutton").css({ display: "inline-block" }), g.css({ display: "inline-block" })), e.currentpage >= Math.ceil(e.nonefiltereditems / o)) { e.oldpage = e.currentpage, e.currentpage = 0;
            var v = 0;
            t.find(".itemtoshow, .fitsinfilter").each(function() { v++, d > v && jQuery(this).removeClass("itemonotherpage") }), g.find(".esg-pagination-button").first().addClass("selected") }
        e.currentpage < 0 && (e.currentpage = 0), g.find(".esg-pagination-button").on("click", function() { e.oldpage = e.currentpage, e.currentpage = jQuery(this).data("page"), e = getOptions(t);
            var a = getBestFitColumn(e, jQuery(window).width(), "id");
            e.column = a.column, e.columnindex = a.index, "on" === e.cookies.pagination && e.cookies.searchjusttriggered !== !0 && createCookie("grid_" + e.girdID + "_pagination", e.currentpage, e.cookies.timetosave * (1 / 60 / 60)), setItemsOnPages(e), organiseGrid(e), setOptions(t, e), stopAllVideos(!0), "on" == e.paginationScrollToTop && jQuery("html, body").animate({ scrollTop: t.offset().top - e.paginationScrollToTopOffset }, { queue: !1, speed: .5 }) }), e.firstshowever == undefined && jQuery(e.filterGroupClass + ".esg-navigationbutton," + e.filterGroupClass + " .esg-navigationbutton").css({ visibility: "hidden" }) }

    function waittorungGrid(e, t, a) {
        var o = e.closest(".mainul");
        clearTimeout(o.data("intreorganisier")), o.hasClass("gridorganising") ? o.data("intreorganisier", setTimeout(function() { waittorungGrid(e, t, a) }, 10)) : runGrid(t, a) }

    function loadAllPrepared(e, t) {
        if (1 == e.data("preloading")) return !1;
        var a = t.aspectratio,
            o = (parseInt(a[0], 0) / parseInt(a[1], 0), new Image);
        e.data("lazysrc") != e.attr("src") && e.data("lazysrc") != undefined && "undefined" != e.data("lazysrc") && e.data("lazysrc") != undefined && "undefined" != e.data("lazysrc") && e.attr("src", e.data("lazysrc")), e.data("preloading", 1), o.onload = function() { e.data("lazydone", 1), e.data("ww", o.width), e.data("hh", o.height), e.closest(".showmeonload").addClass("itemtoshow").removeClass("showmeonload").addClass("loadedmedia"), evenImageRatio(e, t), "on" == t.lazyLoad && waittorungGrid(e, t, !0) }, o.onerror = function() { e.data("lazydone", 1), e.closest(".showmeonload").addClass("itemtoshow").removeClass("showmeonload").addClass("loadedmedia"), "on" == t.lazyLoad && waittorungGrid(e, t, !0) }, o.src = e.attr("src") != undefined && "undefined" != e.attr("src") ? e.attr("src") : e.data("src"), o.complete && (e.data("lazydone", 1), e.data("ww", o.width), e.data("hh", o.height), e.closest(".showmeonload").addClass("itemtoshow").removeClass("showmeonload").addClass("loadedmedia"), evenImageRatio(e, t), "on" == t.lazyLoad && waittorungGrid(e, t, !0)) }

    function organiseGrid(e) {
        var t = e.container;
        e.listneractivated == undefined && (t.on("visibleimagesloaded", function() { runGrid(e) }), e.listneractivated = !0, setOptions(t, e)), waitForLoads(t.find(".itemtoshow"), e) }

    function evenImageRatio(e, t, a) {
        if ("even" == t.layout && e.is(":visible")) {
            var o = t.aspectratio;
            o = o.split(":");
            var i = parseInt(o[0], 0) / parseInt(o[1], 0),
                r = e.data("ww"),
                n = e.data("lazydone");
            if (r == undefined && 1 == n || "on" == t.forceFullScreen && 1 == n || a && r != undefined) {
                var s = e.data("hh"),
                    l = r / s;
                if (l >= i) {
                    var u = s / o[1],
                        d = s / u,
                        c = r / u,
                        p = (c - o[0]) / 2;
                    p = 100 / o[0] * p, e.css({ position: "absolute", width: "auto", height: "101%", top: "0%", left: 0 - p + "%" }) } else {
                    var u = r / o[0],
                        d = s / u,
                        c = r / u,
                        p = (d - o[1]) / 2;
                    p = 100 / o[1] * p, e.css({ position: "absolute", width: "101%", height: "auto", left: "0%", top: 0 - p + "%" }) }
                removeLLCover(e) } } else removeLLCover(e) }

    function removeLLCover(e) {!e.hasClass("coverremoved") && e.parent().find(".lazyloadcover").length > 0 && (e.addClass("coverremoved"), punchgs.TweenLite.to(e.parent().find(".lazyloadcover"), .5, { autoAlpha: 0, ease: punchgs.Power3.easeInOut, onComplete: function() { e.parent().find(".lazyloadcover").remove() } })) }

    function runGrid(e, t) {
        var a = e.container;
        e.firstshowever == undefined ? (a.is(":hidden") ? (punchgs.TweenLite.set(a, { autoAlpha: 1, display: "block" }), setTimeout(function() { runGridMain(e, t), jQuery(e.filterGroupClass + ".esg-navigationbutton, " + e.filterGroupClass + " .esg-navigationbutton").css({ visibility: "visible" }) }, 300)) : (runGridMain(e, t), jQuery(e.filterGroupClass + ".esg-navigationbutton, " + e.filterGroupClass + " .esg-navigationbutton").css({ visibility: "visible" })), e.firstshowever = 1) : (runGridMain(e, t), jQuery(e.filterGroupClass + ".esg-navigationbutton, " + e.filterGroupClass + " .esg-navigationbutton").css({ visibility: "visible" })) }

    function getCobblePat(e, t) {
        var a = new Object;
        return a.w = 1, a.h = 1, e = e.split(","), e != undefined && (e = e[t - Math.floor(t / e.length) * e.length].split("x"), a.w = e[0], a.h = e[1]), a }

    function runGridMain(e, t) {
        var a, o = e.container,
            i = o.find(".itemtoshow, .isvisiblenow").not(".ui-sortable-helper"),
            r = new Object,
            n = o.find("ul").first(),
            s = (o.find(".esg-overflowtrick").first(), e.aspectratio),
            l = 0;
        e.aspectratioOrig = e.aspectratio, o.find(".mainul").addClass("gridorganising"), s = s.split(":"), a = parseInt(s[0], 0) / parseInt(s[1], 0), r.item = 0, r.pagetoanimate = 0 - e.currentpage, r.col = 0, r.row = 0, r.pagecounter = 0, r.itemcounter = 0, r.fakecol = 0, r.fakerow = 0, r.maxheight = 0, r.allcol = 0, r.allrow = 0, r.ulcurheight = 0, r.ulwidth = n.width(), r.verticalsteps = 1, r.currentcolumnheight = new Array;
        for (var u = 0; u < e.column; u++) r.currentcolumnheight[u] = 0;
        r.pageitemcounterfake = 0, r.pageitemcounter = 0, r.delaybasic = e.delayBasic != undefined ? e.delayBasic : .08, r.anim = e.pageAnimation, r.itemtowait = 0, r.itemouttowait = 0, r.ease = "punchgs.Power1.easeInOut", r.easeout = r.ease, r.row = 0, r.col = 0; {
            var d = e.rowItemMultiplier,
                c = d.length;
            e.column }
        if (r.y = 0, r.fakey = 0, o.find(".esg-overflowtrick").css({ width: "100%" }), 100 == o.find(".esg-overflowtrick").width() && o.find(".esg-overflowtrick").css({ width: o.find(".esg-overflowtrick").parent().width() }), r.cwidth = o.find(".esg-overflowtrick").width() - 2 * e.overflowoffset, e.inanimation = !0, r.cwidth_n_spaces = r.cwidth - (e.column - 1) * e.space, r.itemw = Math.round(r.cwidth_n_spaces / e.column), r.originalitemw = r.itemw, "on" == e.forceFullScreen && (l = jQuery(window).height(), e.fullScreenOffsetContainer != undefined)) try {
            var p = e.fullScreenOffsetContainer.split(",");
            jQuery.each(p, function(t, a) { l -= jQuery(a).outerHeight(!0), l < e.minFullScreenHeight && (l = e.minFullScreenHeight) }) } catch (h) {}
        "even" == e.layout ? (r.itemh = Math.round(0 == Math.round(l) ? r.cwidth_n_spaces / e.column / a : l / e.row), e.aspectratio = 0 == l ? e.aspectratio : r.itemw + ":" + r.itemh, c > 0 ? punchgs.TweenLite.set(i, { display: "block", visibility: "visible", overwrite: "auto" }) : punchgs.TweenLite.set(i, { display: "block", width: r.itemw, height: r.itemh, visibility: "visible", overwrite: "auto" })) : punchgs.TweenLite.set(i, { display: "block", width: r.itemw, height: "auto", visibility: "visible", overwrite: "auto" }), t || punchgs.TweenLite.killTweensOf(i), r.originalitemh = r.itemh;
        for (var f = new Array, g = e.row * e.column * 2, w = 0; g > w; w++) {
            for (var m = new Array, v = 0; v < e.column; v++) m.push(0);
            f.push(m) }
        var y = 0;
        0 == i.length && o.trigger("itemsinposition"), jQuery.each(i, function(t, i) {
            var s = jQuery(i);
            if (r.itemw = r.originalitemw, "on" != e.evenCobbles || s.hasClass("itemonotherpage") || s.hasClass("itemishidden")) {
                var u = r.row - c * Math.floor(r.row / c); "even" == e.layout && c > 0 && (e.column = d[u][e.columnindex], r.cwidth = o.find(".esg-overflowtrick").width() - 2 * e.overflowoffset, r.cwidth_n_spaces = r.cwidth - (e.column - 1) * e.space, r.itemw = Math.round(r.cwidth_n_spaces / e.column), r.itemh = 0 == l ? r.cwidth_n_spaces / e.column / a : l / e.row, e.aspectratio = 0 == l ? e.aspectratio : r.itemw + ":" + r.itemh, punchgs.TweenLite.set(s, { width: r.itemw, height: r.itemh, overwrite: "auto" })) } else {
                var p = s.data("cobblesw"),
                    h = s.data("cobblesh");
                if (e.cobblesPattern != undefined && e.cobblesPattern.length > 2) {
                    var w = getCobblePat(e.cobblesPattern, y);
                    p = parseInt(w.w, 0), h = parseInt(w.h, 0), y++ }
                p = p == undefined ? 1 : p, h = h == undefined ? 1 : h, e.column < p && (p = e.column), r.cobblesorigw = r.originalitemw, r.cobblesorigh = r.originalitemh, r.itemw = r.itemw * p + (p - 1) * e.space, r.itemh = r.originalitemh, r.itemh = r.itemh * h + (h - 1) * e.space;
                var m = p + ":" + h,
                    v = !1,
                    b = 0,
                    x = 0;
                switch (m) {
                    case "1:1":
                        do 0 == f[b][x] && (f[b][x] = "1:1", v = !0, r.cobblesx = x, r.cobblesy = b), x++, x == e.column && (x = 0, b++), b >= g && (v = !0); while (!v);
                        break;
                    case "1:2":
                        do 0 == f[b][x] && g - 1 > b && 0 == f[b + 1][x] && (f[b][x] = "1:2", f[b + 1][x] = "1:2", r.cobblesx = x, r.cobblesy = b, v = !0), x++, x == e.column && (x = 0, b++), b >= g && (v = !0); while (!v);
                        break;
                    case "1:3":
                        do 0 == f[b][x] && g - 2 > b && 0 == f[b + 1][x] && 0 == f[b + 2][x] && (f[b][x] = "1:3", f[b + 1][x] = "1:3", f[b + 2][x] = "1:3", r.cobblesx = x, r.cobblesy = b, v = !0), x++, x == e.column && (x = 0, b++), b >= g && (v = !0); while (!v);
                        break;
                    case "2:1":
                        do 0 == f[b][x] && x < e.column - 1 && 0 == f[b][x + 1] && (f[b][x] = "2:1", f[b][x + 1] = "2:1", r.cobblesx = x, r.cobblesy = b, v = !0), x++, x == e.column && (x = 0, b++), b >= g && (v = !0); while (!v);
                        break;
                    case "3:1":
                        do 0 == f[b][x] && x < e.column - 2 && 0 == f[b][x + 1] && 0 == f[b][x + 2] && (f[b][x] = "3:1", f[b][x + 1] = "3:1", f[b][x + 2] = "3:1", r.cobblesx = x, r.cobblesy = b, v = !0), x++, x == e.column && (x = 0, b++), b >= g && (v = !0); while (!v);
                        break;
                    case "2:2":
                        do x < e.column - 1 && g - 1 > b && 0 == f[b][x] && 0 == f[b][x + 1] && 0 == f[b + 1][x] && 0 == f[b + 1][x + 1] && (f[b][x] = "2:2", f[b + 1][x] = "2:2", f[b][x + 1] = "2:2", f[b + 1][x + 1] = "2:2", r.cobblesx = x, r.cobblesy = b, v = !0), x++, x == e.column && (x = 0, b++), b >= g && (v = !0); while (!v);
                        break;
                    case "3:2":
                        do x < e.column - 2 && g - 1 > b && 0 == f[b][x] && 0 == f[b][x + 1] && 0 == f[b][x + 2] && 0 == f[b + 1][x] && 0 == f[b + 1][x + 1] && 0 == f[b + 1][x + 2] && (f[b][x] = "3:2", f[b][x + 1] = "3:2", f[b][x + 2] = "3:2", f[b + 1][x] = "3:2", f[b + 1][x + 1] = "3:2", f[b + 1][x + 2] = "3:2", r.cobblesx = x, r.cobblesy = b, v = !0), x++, x == e.column && (x = 0, b++), b >= g && (v = !0); while (!v);
                        break;
                    case "2:3":
                        do x < e.column - 1 && g - 2 > b && 0 == f[b][x] && 0 == f[b][x + 1] && 0 == f[b + 1][x] && 0 == f[b + 1][x + 1] && 0 == f[b + 2][x + 1] && 0 == f[b + 2][x + 1] && (f[b][x] = "2:3", f[b][x + 1] = "2:3", f[b + 1][x] = "2:3", f[b + 1][x + 1] = "2:3", f[b + 2][x] = "2:3", f[b + 2][x + 1] = "2:3", r.cobblesx = x, r.cobblesy = b, v = !0), x++, x == e.column && (x = 0, b++), b >= g && (v = !0); while (!v);
                        break;
                    case "3:3":
                        do x < e.column - 2 && g - 2 > b && 0 == f[b][x] && 0 == f[b][x + 1] && 0 == f[b][x + 2] && 0 == f[b + 1][x] && 0 == f[b + 1][x + 1] && 0 == f[b + 1][x + 2] && 0 == f[b + 2][x] && 0 == f[b + 2][x + 1] && 0 == f[b + 2][x + 2] && (f[b][x] = "3:3", f[b][x + 1] = "3:3", f[b][x + 2] = "3:3", f[b + 1][x] = "3:3", f[b + 1][x + 1] = "3:3", f[b + 1][x + 2] = "3:3", f[b + 2][x] = "3:3", f[b + 2][x + 1] = "3:3", f[b + 2][x + 2] = "3:3", r.cobblesx = x, r.cobblesy = b, v = !0), x++, x == e.column && (x = 0, b++), b >= g && (v = !0); while (!v) }
                e.aspectratio = r.itemw + ":" + r.itemh, punchgs.TweenLite.set(s, { width: r.itemw, height: r.itemh, overwrite: "auto" });
                var j = s.find(".esg-entry-media").find("img");
                j.length > 0 && evenImageRatio(j, e, !0) }
            if ("even" == e.layout) {
                var j = s.find(".esg-entry-media").find("img");
                j.length > 0 && evenImageRatio(j, e, !0) } else s.hasClass("itemtoshow") && (s.width() != r.itemw || 0 == s.css("opacity") || "hidden" == s.css("visibility")) ? r = prepareItemToMessure(s, r, o) : (adjustMediaSize(s, !0, r, e), r.itemh = s.height());
            r = animateGrid(i, e, r), r.itemcounter++, n.height() < r.maxheight && o.trigger("itemsinposition") }), e.aspectratio = e.aspectratioOrig, 0 == r.itemtowait && (e.container.trigger("itemsinposition"), o.find(".mainul").removeClass("gridorganising"));
        var b = getBestFitColumn(e, jQuery(window).width(), "id");
        e.column = b.column, e.columnindex = b.index, e.maxheight = r.maxheight, e.container.trigger("itemsinposition"), e.inanimation = !0, e.started = !1, e.filterchanged = !1, e.silent = !1, e.silentout = !1, e.changedAnim = "", setOptions(o, e);
        var x = o.parent().parent().find(".esg-loader");
        x.length > 0 && punchgs.TweenLite.to(x, .2, { autoAlpha: 0 }) }

    function prepareItemToMessure(e, t, a) {
        return adjustMediaSize(e, !0, t, a.data("opt")), t.itemh = e.outerHeight(!0), t }

    function animateGrid(e, t, a) {
        var o = jQuery(e);
        if (a.skipanim = !1, a.x = Math.round(a.col * a.itemw), "even" == t.layout);
        else { a.idealcol = 0, a.backupcol = a.col;
            for (var i = 0; i < t.column; i++) a.currentcolumnheight[a.idealcol] > a.currentcolumnheight[i] && (a.idealcol = i);
            a.y = a.currentcolumnheight[a.idealcol], a.x = Math.round(a.idealcol * a.itemw) + a.idealcol * t.space, a.col = a.idealcol, a.itemh == undefined && (a.itemh = 0) }
        if (a.cobblesx != undefined && (a.x = a.cobblesx * a.cobblesorigw, a.y = a.cobblesy * a.cobblesorigh), a.waits = a.col * a.delaybasic + a.row * a.delaybasic * t.column, a.speed = t.animSpeed, a.inxrot = 0, a.inyrot = 0, a.outxrot = 0, a.outyrot = 0, a.inorigin = "center center", a.outorigin = "center center", a.itemh = Math.round(a.itemh), a.scale = 1, a.outfade = 0, a.infade = 0, o.hasClass("itemonotherpage") && (a.skipanim = !0), "horizontal-slide" == a.anim ? (a.waits = 0, a.hsoffset = 0 - a.cwidth - parseInt(t.space), a.hsoffsetout = 0 - a.cwidth - parseInt(t.space), t.oldpage != undefined && t.oldpage > t.currentpage && (a.hsoffset = a.cwidth + parseInt(t.space), a.hsoffsetout = a.cwidth + parseInt(t.space))) : "vertical-slide" == a.anim && (a.waits = 0, a.maxcalcheight = t.row * t.space + t.row * a.itemh, a.vsoffset = a.maxcalcheight + parseInt(t.space), a.vsoffsetout = a.maxcalcheight + parseInt(t.space), t.oldpage != undefined && t.oldpage > t.currentpage && (a.vsoffset = 0 - a.maxcalcheight - parseInt(t.space), a.vsoffsetout = 0 - a.maxcalcheight - parseInt(t.space))), a.outwaits = a.waits, "even" == t.layout && a.cobblesx == undefined && (a.x = a.x + a.col * t.space), a.cobblesx != undefined && (a.x = a.x + a.cobblesx * t.space, a.y = a.y + a.cobblesy * t.space), ("vertical-flip" == a.anim || "horizontal-flip" == a.anim || "vertical-flipbook" == a.anim || "horizontal-flipbook" == a.anim) && (a = fakePositions(o, a, t)), "vertical-flip" == a.anim ? (a.inxrot = -180, a.outxrot = 180) : "horizontal-flip" == a.anim && (a.inyrot = -180, a.outyrot = 180), a.outspeed = a.speed, "off" == t.animDelay && (a.waits = 0, a.outwaits = 0), "scale" == a.anim ? a.scale = 0 : "vertical-flipbook" == a.anim ? (a.inxrot = -90, a.outxrot = 90, a.inorigin = "center top", a.outorigin = "center bottom", a.waits = a.waits + a.speed / 3, a.outfade = 1, a.infade = 1, a.outspeed = a.speed / 1.2, a.ease = "Sine.easeOut", a.easeout = "Sine.easeIn", "off" == t.animDelay && (a.waits = a.speed / 3, a.outwaits = 0)) : "horizontal-flipbook" == a.anim ? (a.inyrot = -90, a.outyrot = -90, a.inorigin = "left center", a.outorigin = "right center", a.waits = a.waits + a.speed / 2.4, a.outfade = 1, a.infade = 1, a.outspeed = a.speed / 1.2, a.ease = "Sine.easeOut", a.easeout = "Sine.easeIn", "off" == t.animDelay && (a.waits = a.speed / 3, a.outwaits = 0)) : ("fall" == a.anim || "rotatefall" == a.anim) && (a.outoffsety = 100, a = fakePositions(o, a, t), a.outfade = 0), "rotatefall" == a.anim ? (a.rotatez = 20, a.outorigin = "left top", a.outfade = 1, a.outoffsety = 600) : "rotatescale" == a.anim ? (a.scale = 0, a.inorigin = "left bottom", a.outorigin = "center center", a.faeout = 1, a.outoffsety = 100, a = fakePositions(o, a, t)) : "stack" == a.anim && (a.scale = 0, a.inorigin = "center center", a.faeout = 1, a.ease = "punchgs.Power3.easeOut", a = fakePositions(o, a, t), a.ease = "Back.easeOut"), t.silent && (a.waits = 0, a.outwaits = 0, a.speed = 0, a.outspeed = 0), t.silentout && (a.outwaits = 0, a.outspeed = .4, a.speed = .4, a.ease = "punchgs.Power3.easeOut", a.easeout = a.ease), a.hooffset = t.overflowoffset, a.vooffset = t.overflowoffset, a.itemw + a.x - a.cwidth < 20 && a.itemw + a.x - a.cwidth > -20) {
            var r = a.itemw + a.x - a.cwidth;
            a.itemw = a.itemw - r }
        if (!o.hasClass("itemtoshow") && !o.hasClass("fitsinfilter") || a.skipanim) a.itemouttowait++, punchgs.TweenLite.set(o, { zIndex: 5 }), o.removeClass("isvisiblenow"), o.css("opacity") > 0 ? "stack" == a.anim ? (punchgs.TweenLite.set(o, { zIndex: a.pageitemcounterfake + 100 }), punchgs.TweenLite.to(o, a.outspeed / 2, { force3D: "auto", x: -20 - a.itemw, rotationY: 30, rotationX: 10, ease: Sine.easeInOut, delay: a.outwaits }), punchgs.TweenLite.to(o, .01, { force3D: "auto", zIndex: a.pageitemcounterfake, delay: a.outwaits + a.outspeed / 3 }), punchgs.TweenLite.to(o, .2 * a.outspeed, { force3D: "auto", delay: a.outwaits + .9 * a.outspeed, autoAlpha: 0, ease: Sine.easeInOut }), punchgs.TweenLite.to(o, a.outspeed / 3, { zIndex: 2, force3D: "auto", x: 0, scale: .9, rotationY: 0, rotationX: 0, ease: Sine.easeInOut, delay: a.outwaits + a.outspeed / 1.4, onComplete: function() { o.hasClass("itemtoshow") || punchgs.TweenLite.set(o, { autoAlpha: 0, overwrite: "all", display: "none" }), a.itemouttowait--, 0 == a.itemouttowait && t.container.trigger("itemsinposition") } })) : "horizontal-flipbook" == a.anim || "vertical-flipbook" == a.anim ? punchgs.TweenLite.to(o, a.outspeed, { force3D: "auto", zIndex: 2, scale: a.scale, autoAlpha: a.outfade, transformOrigin: a.outorigin, rotationX: a.outxrot, rotationY: a.outyrot, ease: a.easeout, delay: a.outwaits, onComplete: function() { o.hasClass("itemtoshow") || punchgs.TweenLite.set(o, { autoAlpha: 0, overwrite: "all", display: "none" }), a.itemouttowait--, 0 == a.itemouttowait && t.container.trigger("itemsinposition") } }) : "fall" == a.anim ? punchgs.TweenLite.to(o, a.outspeed, { zIndex: 2, force3D: "auto", y: a.outoffsety, autoAlpha: 0, ease: a.easeout, delay: a.outwaits, onComplete: function() { o.hasClass("itemtoshow") || punchgs.TweenLite.set(o, { autoAlpha: 0, overwrite: "all", display: "none" }), a.itemouttowait--, 0 == a.itemouttowait && t.container.trigger("itemsinposition") } }) : "horizontal-slide" == a.anim ? punchgs.TweenLite.to(o, a.outspeed, { zIndex: 2, force3D: "auto", autoAlpha: 1, left: a.hooffset + o.position().left + a.hsoffsetout, top: a.vooffset + o.position().top, ease: a.easeout, delay: a.outwaits, onComplete: function() { punchgs.TweenLite.set(o, { autoAlpha: 0, overwrite: "all", display: "none" }), a.itemouttowait--, 0 == a.itemouttowait && t.container.trigger("itemsinposition") } }) : "vertical-slide" == a.anim ? punchgs.TweenLite.to(o, a.outspeed, { zIndex: 2, force3D: "auto", autoAlpha: 1, left: a.hooffset + o.position().left, top: a.vooffset + o.position().top + a.vsoffsetout, ease: a.easeout, delay: a.outwaits, onComplete: function() { punchgs.TweenLite.set(o, { autoAlpha: 0, overwrite: "all", display: "none" }), a.itemouttowait--, 0 == a.itemouttowait && t.container.trigger("itemsinposition") } }) : "rotatefall" == a.anim && o.css("opacity") > 0 ? (punchgs.TweenLite.set(o, { zIndex: 300 - a.item }), punchgs.TweenLite.to(o, a.outspeed / 2, { force3D: "auto", transformOrigin: a.outorigin, ease: "punchgs.Bounce.easeOut", rotationZ: a.rotatez, delay: a.outwaits }), punchgs.TweenLite.to(o, a.outspeed / 2, { zIndex: 2, force3D: "auto", autoAlpha: 0, y: a.outoffsety, ease: punchgs.Power3.easeIn, delay: a.outwaits + a.outspeed / 3 })) : punchgs.TweenLite.to(o, a.outspeed, { force3D: "auto", zIndex: 2, scale: a.scale, autoAlpha: a.outfade, transformOrigin: a.outorigin, rotationX: a.outxrot, rotationY: a.outyrot, ease: a.easeout, delay: a.outwaits, onComplete: function() { o.hasClass("itemtoshow") || punchgs.TweenLite.set(o, { autoAlpha: 0, overwrite: "all", display: "none" }), a.itemouttowait--, 0 == a.itemouttowait && t.container.trigger("itemsinposition") } }) : punchgs.TweenLite.set(o, { zIndex: 2, scale: a.scale, autoAlpha: 0, transformOrigin: a.outorigin, rotationX: a.outxrot, rotationY: a.outyrot, onComplete: function() { o.hasClass("itemtoshow") || punchgs.TweenLite.set(o, { autoAlpha: 0, overwrite: "all", display: "none" }), a.itemouttowait--, 0 == a.itemouttowait && t.container.trigger("itemsinposition") } }), a = shiftGridFake(a, t);
        else { o.addClass("isvisiblenow"), "even" != t.layout ? (a.currentcolumnheight[a.idealcol] = a.currentcolumnheight[a.idealcol] + a.itemh + parseInt(t.space), a.ulcurheight < a.currentcolumnheight[a.idealcol] && (a.ulcurheight = a.currentcolumnheight[a.idealcol])) : a.ulcurheight = a.y + a.itemh, a.maxheight < a.ulcurheight && (a.maxheight = a.ulcurheight), a.itemtowait++;
            var n = Math.round(a.hooffset + a.x),
                s = Math.round(a.vooffset + a.y); "on" == t.rtl && (n = a.ulwidth - n - a.itemw), 0 == o.css("opacity") && "fade" == a.anim ? punchgs.TweenLite.set(o, { opacity: 0, autoAlpha: 0, width: a.itemw, height: a.itemh, scale: 1, left: n, y: 0, top: s, overwrite: "all" }) : 0 == o.css("opacity") && "scale" == a.anim ? punchgs.TweenLite.set(o, { width: a.itemw, height: a.itemh, scale: 0, left: n, y: 0, top: s, overwrite: "all" }) : 0 == o.css("opacity") && "rotatescale" == a.anim ? punchgs.TweenLite.set(o, { width: a.itemw, height: a.itemh, scale: 1, left: n, top: s, xPercent: 150, yPercent: 150, rotationZ: 20, overwrite: "all" }) : 0 == o.css("opacity") && "fall" == a.anim ? punchgs.TweenLite.set(o, { width: a.itemw, height: a.itemh, scale: .5, left: n, top: s, y: 0, overwrite: "all" }) : 0 == o.css("opacity") && "rotatefall" == a.anim && punchgs.TweenLite.set(o, { autoAlpha: 0, width: a.itemw, height: a.itemh, left: n, rotationZ: 0, top: s, y: 0, overwrite: "all" }), 0 != o.css("opacity") || "vertical-flip" != a.anim && "horizontal-flip" != a.anim && "vertical-flipbook" != a.anim && "horizontal-flipbook" != a.anim || punchgs.TweenLite.set(o, { autoAlpha: a.infade, zIndex: 10, scale: 1, y: 0, transformOrigin: a.inorigin, rotationX: a.inxrot, rotationY: a.inyrot, width: a.itemw, height: a.itemh, left: n, top: s, overwrite: "all" }), "stack" == a.anim && punchgs.TweenLite.set(o, { zIndex: a.pageitemcounter, scale: .5, autoAlpha: 1, left: n, top: s }), "horizontal-slide" == a.anim && 0 == o.css("opacity") && punchgs.TweenLite.set(o, { autoAlpha: 1, left: Math.round(a.hooffset + (a.x - a.hsoffset)), top: s, width: a.itemw, height: a.itemh }), "vertical-slide" == a.anim && 0 == o.css("opacity") && punchgs.TweenLite.set(o, { autoAlpha: 1, left: n, top: Math.round(a.vooffset + a.y - a.vsoffset), width: a.itemw, height: a.itemh });
            var l = o.find(".esg-entry-cover"),
                u = o.find(".esg-entry-media");
            if (l && u) {
                var d = u.height(),
                    c = o.find(".esg-cc");
                punchgs.TweenLite.to(l, .01, { height: d, ease: a.ease, delay: a.waits }), punchgs.TweenLite.to(c, .01, { top: (d - c.height()) / 2, ease: a.ease, delay: a.waits }) }
            punchgs.TweenLite.to(o, a.speed, { force3D: "auto", autoAlpha: 1, scale: 1, transformOrigin: a.inorigin, rotationX: 0, rotationY: 0, y: 0, x: 0, xPercent: 0, yPercent: 0, z: .1, rotationZ: 0, left: n, top: s, ease: a.ease, delay: a.waits, onComplete: function() { o.hasClass("itemtoshow") && punchgs.TweenLite.set(o, { autoAlpha: 1, overwrite: "all" }), a.itemtowait--, 0 == a.itemtowait && (t.container.trigger("itemsinposition"), o.closest(".mainul").removeClass("gridorganising")) } }), o.find("iframe").length > 0 && o.find("iframe").each(function() {
                var e = jQuery(this),
                    a = Math.round(e.data("neww")),
                    i = Math.round(e.data("newh")); "even" != t.layout ? (punchgs.TweenLite.set(o.find(".esg-media-poster"), { width: a, height: i }), punchgs.TweenLite.set(o.find("iframe"), { width: a, height: i })) : (punchgs.TweenLite.set(o.find(".esg-media-poster"), { width: "100%", height: "100%" }), punchgs.TweenLite.set(o.find("iframe"), { width: "100%", height: "100%" })) }), o.find(".video-eg").length > 0 && o.find(".video-eg").each(function() {
                var e = jQuery(this),
                    a = e.data("neww"),
                    i = e.data("newh"); "even" != t.layout ? (punchgs.TweenLite.set(o.find(".esg-media-poster"), { width: a, height: i }), punchgs.TweenLite.set(o.find(".esg-entry-media"), { width: a, height: i }), punchgs.TweenLite.set(o.find(".video-eg"), { width: a, height: i })) : (punchgs.TweenLite.set(o.find(".esg-media-poster"), { width: "100%", height: "100%" }), punchgs.TweenLite.set(o.find(".esg-entry-media"), { width: "100%", height: "100%" }), punchgs.TweenLite.set(o.find(".video-eg"), { width: "100%", height: "100%" })) }), "masonry" == t.layout && (a.col = a.backupcol), a = shiftGrid(a, t, o) }
        return a }

    function fakePositions(e, t, a) {
        if (!e.hasClass("itemtoshow") && !e.hasClass("fitsinfilter") || t.skipanim) {
            var o = e.data("col"),
                i = e.data("row");
            (o == undefined || i == undefined) && 0 != t.x && 0 != t.y && (t.x = Math.round(t.fakecol * t.itemw), t.y = t.fakey, o = t.fakecol, i = t.fakerow, e.data("col", t.fakecol), e.data("row", t.fakerow)), t.outwaits = "rotatefall" == t.anim ? (a.column - o) * t.delaybasic + i * t.delaybasic * a.column : o * t.delaybasic + i * t.delaybasic * a.column } else;
        return t }

    function shiftGrid(e, t, a) {
        if (a.data("col", e.col), a.data("row", e.row), e.pageitemcounter++, e.col = e.col + e.verticalsteps, e.allcol++, e.col == t.column && (e.col = 0, e.row++, e.allrow++, e.y = parseFloat(e.y) + parseFloat(e.itemh) + parseFloat(t.space), e.row == t.row && (e.row = 0, e.pageitemcounter >= t.column * t.row && (e.pageitemcounter = 0), e.pagetoanimate = e.pagetoanimate + 1, e.pagecounter++, 0 == e.pageitemcounter)))
            for (var o = 0; o < t.column; o++) e.currentcolumnheight[o] = 0;
        return e }

    function shiftGridFake(e, t) {
        return e.fakecol = e.fakecol + 1, e.pageitemcounterfake++, e.fakecol == t.column && (e.fakecol = 0, e.fakerow++, e.fakey = e.fakey + e.itemh + t.space, e.fakerow == t.row && (e.fakerow = 0, e.pageitemcounterfake = 0)), e }

    function loadVideoApis(e) {
        var t = 0,
            a = 0,
            o = 0,
            i = 0,
            r = 0,
            n = "http"; "https:" === location.protocol && (n = "https"), e.find("iframe").each(function() {
            try {
                if (jQuery(this).attr("src").indexOf("you") > 0 && 0 == t) { t = 1;
                    var e = document.createElement("script"),
                        a = "https";
                    e.src = a + "://www.youtube.com/iframe_api";
                    var o = document.getElementsByTagName("script")[0],
                        i = !0;
                    jQuery("head").find("*").each(function() { jQuery(this).attr("src") == a + "://www.youtube.com/iframe_api" && (i = !1) }), i && o.parentNode.insertBefore(e, o) } } catch (r) {} }), e.find("iframe").each(function() {
            try {
                if (jQuery(this).attr("src").indexOf("ws") > 0 && 0 == o) { o = 1;
                    var e = document.createElement("script");
                    e.src = n + "://fast.wistia.com/assets/external/E-v1.js";
                    var t = document.getElementsByTagName("script")[0],
                        a = !0;
                    jQuery("head").find("*").each(function() { jQuery(this).attr("src") == n + "://fast.wistia.com/assets/external/E-v1.js" && (a = !1) }), a && t.parentNode.insertBefore(e, t) } } catch (i) {} }), e.find("iframe").each(function() {
            try {
                if (jQuery(this).attr("src").indexOf("vim") > 0 && 0 == a) { a = 1;
                    var e = document.createElement("script");
                    e.src = n + "://a.vimeocdn.com/js/froogaloop2.min.js";
                    var t = document.getElementsByTagName("script")[0],
                        o = !0;
                    jQuery("head").find("*").each(function() { jQuery(this).attr("src") == n + "://a.vimeocdn.com/js/froogaloop2.min.js" && (o = !1) }), o && t.parentNode.insertBefore(e, t) } } catch (i) {} }), e.find("iframe").each(function() {
            try {
                if (jQuery(this).attr("src").indexOf("soundcloud") > 0 && 0 == r) { r = 1;
                    var e = document.createElement("script");
                    e.src = n + "://w.soundcloud.com/player/api.js";
                    var t = document.getElementsByTagName("script")[0],
                        a = !0;
                    jQuery("head").find("*").each(function() { jQuery(this).attr("src") == n + "://w.soundcloud.com/player/api.js" && (a = !1) }), a && t.parentNode.insertBefore(e, t) } } catch (o) {} });
        var s = { youtube: t, vimeo: a, wistia: o, soundcloud: r, htmlvid: i };
        return s }

    function toHHMMSS() {
        var e = new Date,
            t = Math.floor(e) / 1e3,
            a = Math.floor(t / 60),
            o = Math.floor(a / 60),
            i = Math.floor(o / 24),
            o = o - 24 * i,
            a = a - 24 * i * 60 - 60 * o,
            t = t - 24 * i * 60 * 60 - 60 * o * 60 - 60 * a;
        return o + ":" + a + ":" + t }

    function stopAllVideos(e, t, a) {
        var o = ".isplaying";
        e && (o = ""), jQuery(".esg-youtubevideo.haslistener" + o).each(function() {
            var t = jQuery(this),
                o = t.data("player");
            a != t.attr("id") && (o.pauseVideo(), e && forceVideoInPause(t, !0, o, "youtube")) }), jQuery(".esg-vimeovideo.haslistener" + o).each(function() {
            var t = jQuery(this),
                o = t.attr("id"),
                i = $f(o);
            a != o && (i.api("pause"), a === undefined && e && forceVideoInPause(t, !0, i, "vimeo")) }), jQuery(".esg-wistiavideo.haslistener" + o).each(function() {
            var t = jQuery(this),
                o = t.data("player");
            a != t.attr("id") && (t.wistiaApi.pause(), e && forceVideoInPause(t, !0, o, "wistia")) }), jQuery(".esg-htmlvideo.haslistener" + o).each(function() {
            var t = jQuery(this),
                o = t.attr("id"),
                i = document.getElementById(o);
            a != o && (i.pause(), e && forceVideoInPause(t, !0, i, "html5vid")) }), jQuery(".esg-soundcloud" + o).each(function() {
            var t = jQuery(this),
                o = t.data("player");
            a != t.attr("id") && (o.pause(), e && forceVideoInPause(t, !0, o, "soundcloud")) }) }

    function forceVideoInPause(e, t, a, o) { e.removeClass("isplaying");
        var i = e.closest(".tp-esg-item");
        if (i.find(".esg-media-video").length > 0 && !jQuery("body").data("fullScreenMode")) {
            var r = i.find(".esg-entry-cover"),
                n = i.find(".esg-media-poster");
            if (n.length > 0)
                if (is_mobile() ? (punchgs.TweenLite.set(r, { autoAlpha: 1 }), punchgs.TweenLite.set(n, { autoAlpha: 1 }), punchgs.TweenLite.set(e, { autoAlpha: 0 })) : (punchgs.TweenLite.to(r, .5, { autoAlpha: 1 }), punchgs.TweenLite.to(n, .5, { autoAlpha: 1 }), punchgs.TweenLite.to(e, .5, { autoAlpha: 0 })), t)
                    if ("youtube" == o) try { a.destroy() } catch (s) {} else if ("vimeo" == o) try { a.api("unload") } catch (s) {} else if ("wistia" == o) try { a.end() } catch (s) {} else "html5vid" != o && (e.removeClass("haslistener"), e.removeClass("readytoplay"));
                else setTimeout(function() { is_mobile() || e.css({ display: "none" }) }, 500) } }

    function onPlayerStateChange(e) {
        var t = e.target.getVideoEmbedCode(),
            a = jQuery("#" + t.split('id="')[1].split('"')[0]),
            o = a.data("player");
        e.data == YT.PlayerState.PLAYING && (o.setPlaybackQuality("hd1080"), stopAllVideos(!0, !1, a.attr("id")), a.addClass("isplaying"), a.removeClass("isinpause")), 2 == e.data && forceVideoInPause(a), 0 == e.data && forceVideoInPause(a) }

    function vimeoready_auto(e) {
        var t = $f(e),
            a = jQuery("#" + e);
        t.addEvent("ready", function() { a.addClass("readytoplay"), t.addEvent("play", function() { stopAllVideos(!0, !1, e), a.addClass("isplaying"), a.removeClass("isinpause") }), t.addEvent("finish", function() { forceVideoInPause(a), a.removeClass("isplaying") }), t.addEvent("pause", function() { forceVideoInPause(a), a.removeClass("isplaying") }) }) }

    function addEvent(e, t, a) { e.addEventListener ? e.addEventListener(t, a, !1) : e.attachEvent(t, a, !1) }

    function html5vidready(e, t, a) { t.addClass("readytoplay"), t.on("play", function() { stopAllVideos(!0, !1, a), t.addClass("isplaying"), t.removeClass("isinpause") }), t.on("pause", function() { forceVideoInPause(t), t.removeClass("isplaying") }), t.on("ended", function() { forceVideoInPause(t), t.removeClass("isplaying") }) }

    function prepareYT(e) {
        var t = "ytiframe" + Math.round(1e5 * Math.random() + 1);
        if (e.hasClass("haslistener") || "undefined" == typeof YT) {
            var a = e.data("player");
            return a != undefined && "function" == typeof a.playVideo ? !0 : !1 }
        try { e.attr("id", t);
            var a = new YT.Player(t, { events: { onStateChange: onPlayerStateChange } });
            e.data("player", a), e.addClass("haslistener").addClass("esg-youtubevideo") } catch (o) {
            return !1 } }

    function playYT(e) {
        var t = e.data("player");
        t != undefined && "function" == typeof t.playVideo && t.playVideo() }

    function prepareVimeo(e) {
        if (e.hasClass("haslistener") || "undefined" == typeof $f) {
            if (typeof $f != undefined && "undefined" != typeof $f) {
                var t = $f(e.attr("id"));
                return "function" == typeof t.api && e.hasClass("readytoplay") ? !0 : !1 }
            return !1 }
        try {
            var a = "vimeoiframe" + Math.round(1e5 * Math.random() + 1);
            e.attr("id", a);
            for (var o, i = e.attr("src"), r = {}, n = i, s = /([^&=]+)=([^&]*)/g; o = s.exec(n);) r[decodeURIComponent(o[1])] = decodeURIComponent(o[2]);
            i = r.player_id != undefined ? i.replace(r.player_id, a) : i + "&player_id=" + a;
            try { i = i.replace("api=0", "api=1") } catch (l) {}
            i += "&api=1", e.attr("src", i);
            var u = e[0];
            $f(u).addEvent("ready", function() { vimeoready_auto(a) }), e.addClass("haslistener").addClass("esg-vimeovideo") } catch (l) {
            return !1 } }

    function playVimeo(e) {
        var t = $f(e.attr("id"));
        t.api("play") }

    function prepareWs(e) {
        var t = "wsiframe" + Math.round(1e5 * Math.random() + 1);
        if (e.hasClass("haslistener") || "undefined" == typeof Ws) {
            var a = e.data("player");
            return a != undefined && "function" == typeof a.playVideo ? !0 : !1 }
        try { e.attr("id", t);
            var a = new Ws.Player(t, { events: { onStateChange: onPlayerStateChange } });
            e.data("player", a), e.addClass("haslistener").addClass("esg-wistiavideo") } catch (o) {
            return !1 } }

    function playWs(e) {
        var t = e.data("player");
        t != undefined && "function" == typeof t.playVideo && t.wistiaApi.Plau() }

    function prepareSoundCloud(e) {
        if (e.data("player") != undefined || "undefined" == typeof SC) {
            var t = e.data("player");
            return t != undefined && "function" == typeof t.getVolume ? !0 : !1 }
        var a = "sciframe" + Math.round(1e5 * Math.random() + 1);
        try { e.attr("id", a);
            var t = SC.Widget(a);
            t.bind(SC.Widget.Events.PLAY, function() { stopAllVideos(!0, !1, e.attr("id")), e.addClass("isplaying"), e.removeClass("isinpause") }), t.bind(SC.Widget.Events.PAUSE, function() { forceVideoInPause(e), e.removeClass("isplaying") }), t.bind(SC.Widget.Events.FINISH, function() { forceVideoInPause(e), e.removeClass("isplaying") }), e.data("player", t), e.addClass("haslistener").addClass("esg-soundcloud") } catch (o) {
            return !1 } }

    function playSC(e) {
        var t = e.data("player");
        t != undefined && "function" == typeof t.getVolume && setTimeout(function() { t.play() }, 500) }

    function prepareVideo(e) {
        if (e.hasClass("haslistener")) try {
            var t = e.attr("id"),
                a = document.getElementById(t);
            return "function" == typeof a.play && e.hasClass("readytoplay") ? !0 : !1 } catch (o) {
            return !1 } else {
            var i = "videoid_" + Math.round(1e5 * Math.random() + 1);
            e.attr("id", i);
            var a = document.getElementById(i);
            a.oncanplay = html5vidready(a, e, i), e.addClass("haslistener").addClass("esg-htmlvideo") } }

    function playVideo(e) {
        var t = e.attr("id"),
            a = document.getElementById(t);
        a.play() }
    var esgAnimmatrix = [
        [".esg-none", 0, { autoAlpha: 1, rotationZ: 0, x: 0, y: 0, scale: 1, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0 }, { autoAlpha: 1, ease: punchgs.Power2.easeOut, overwrite: "all" }, 0, { autoAlpha: 1, overwrite: "all" }],
        [".esg-fade", .3, { autoAlpha: 0, rotationZ: 0, x: 0, y: 0, scale: 1, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0 }, { autoAlpha: 1, ease: punchgs.Power2.easeOut, overwrite: "all" }, .3, { autoAlpha: 0, ease: punchgs.Power2.easeOut, overwrite: "all" }],
        [".esg-fadeout", .3, { autoAlpha: 1, ease: punchgs.Power2.easeOut, overwrite: "all" }, { autoAlpha: 0, rotationZ: 0, x: 0, y: 0, scale: 1, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0 }, .3, { autoAlpha: 1, rotationZ: 0, x: 0, y: 0, scale: 1, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, ease: punchgs.Power2.easeOut, overwrite: "all" }],
        [".esg-covergrowup", .3, { autoAlpha: 1, top: "100%", marginTop: -10, rotationZ: 0, x: 0, y: 0, scale: 1, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0 }, { autoAlpha: 1, top: "0%", marginTop: 0, ease: punchgs.Power2.easeOut, overwrite: "all" }, .3, { autoAlpha: 1, top: "100%", marginTop: -10, bottom: 0, z: 0, ease: punchgs.Power2.easeOut, overwrite: "all" }, !0],
        [".esg-flipvertical", .5, { x: 0, y: 0, scale: 1, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, rotationX: 180, autoAlpha: 0, z: -.001, transformOrigin: "50% 50%" }, { rotationX: 0, autoAlpha: 1, scale: 1, z: .001, ease: punchgs.Power3.easeInOut, overwrite: "all" }, .5, { rotationX: 180, autoAlpha: 0, scale: 1, z: -.001, ease: punchgs.Power3.easeInOut, overwrite: "all" }, !0],
        [".esg-flipverticalout", .5, { x: 0, y: 0, scale: 1, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, rotationX: 0, autoAlpha: 1, z: .001, transformOrigin: "50% 50%" }, { rotationX: -180, scale: 1, autoAlpha: 0, z: -150, ease: punchgs.Power3.easeInOut, overwrite: "all" }, .5, { rotationX: 0, autoAlpha: 1, scale: 1, z: 0, ease: punchgs.Power3.easeInOut, overwrite: "all" }],
        [".esg-fliphorizontal", .5, { x: 0, y: 0, scale: 1, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, rotationY: 180, autoAlpha: 0, z: -.001, transformOrigin: "50% 50%" }, { rotationY: 0, autoAlpha: 1, scale: 1, z: .001, ease: punchgs.Power3.easeInOut, overwrite: "all" }, .5, { rotationY: 180, autoAlpha: 0, scale: 1, z: -.001, ease: punchgs.Power3.easeInOut, overwrite: "all" }, !0],
        [".esg-fliphorizontalout", .5, { x: 0, y: 0, scale: 1, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 1, z: .001, transformOrigin: "50% 50%" }, { rotationY: -180, scale: 1, autoAlpha: 0, z: -150, ease: punchgs.Power3.easeInOut, overwrite: "all" }, .5, { rotationY: 0, autoAlpha: 1, scale: 1, z: .001, ease: punchgs.Power3.easeInOut, overwrite: "all" }],
        [".esg-flipup", .5, { x: 0, y: 0, scale: .8, rotationZ: 0, rotationX: 90, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 0, z: .001, transformOrigin: "50% 100%" }, { scale: 1, rotationX: 0, autoAlpha: 1, z: .001, ease: punchgs.Power2.easeOut, overwrite: "all" }, .3, { scale: .8, rotationX: 90, autoAlpha: 0, z: .001, ease: punchgs.Power2.easeOut, overwrite: "all" }, !0],
        [".esg-flipupout", .5, { rotationX: 0, autoAlpha: 1, y: 0, ease: punchgs.Bounce.easeOut, overwrite: "all" }, { x: 0, y: 0, scale: 1, rotationZ: 0, rotationX: -90, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 1, z: .001, transformOrigin: "50% 0%" }, .3, { rotationX: 0, autoAlpha: 1, y: 0, ease: punchgs.Bounce.easeOut, overwrite: "all" }],
        [".esg-flipdown", .5, { x: 0, y: 0, scale: 1, rotationZ: 0, rotationX: -90, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 0, z: .001, transformOrigin: "50% 0%" }, { rotationX: 0, autoAlpha: 1, y: 0, ease: punchgs.Bounce.easeOut, overwrite: "all" }, .3, { rotationX: -90, z: 0, ease: punchgs.Power2.easeOut, autoAlpha: 0, overwrite: "all" }, !0],
        [".esg-flipdownout", .5, { scale: 1, rotationX: 0, autoAlpha: 1, z: 0, ease: punchgs.Power2.easeOut, overwrite: "all" }, { x: 0, y: 0, scale: .8, rotationZ: 0, rotationX: 90, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 0, z: .001, transformOrigin: "50% 100%" }, .3, { scale: 1, rotationX: 0, autoAlpha: 1, z: 0, ease: punchgs.Power2.easeOut, overwrite: "all" }],
        [".esg-flipright", .5, { x: 0, y: 0, scale: .8, rotationZ: 0, rotationX: 0, rotationY: 90, skewX: 0, skewY: 0, autoAlpha: 0, transformOrigin: "0% 50%" }, { scale: 1, rotationY: 0, autoAlpha: 1, ease: punchgs.Power2.easeOut, overwrite: "all" }, .3, { autoAlpha: 0, scale: .8, rotationY: 90, ease: punchgs.Power3.easeOut, overwrite: "all" }, !0],
        [".esg-fliprightout", .5, { x: 0, y: 0, scale: 1, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, rotationY: 0, autoAlpha: 1, transformOrigin: "100% 50%" }, { scale: 1, rotationY: -90, autoAlpha: 0, ease: punchgs.Power2.easeOut, overwrite: "all" }, .3, { scale: 1, z: 0, rotationY: 0, autoAlpha: 1, ease: punchgs.Power3.easeOut, overwrite: "all" }],
        [".esg-flipleft", .5, { x: 0, y: 0, scale: 1, rotationZ: 0, rotationX: 0, rotationY: -90, skewX: 0, skewY: 0, autoAlpha: 1, transformOrigin: "100% 50%" }, { rotationY: 0, autoAlpha: 1, z: .001, scale: 1, ease: punchgs.Power3.easeOut, overwrite: "all" }, .3, { autoAlpha: 0, rotationY: -90, z: 0, ease: punchgs.Power2.easeOut, overwrite: "all" }, !0],
        [".esg-flipleftout", .5, { x: 0, y: 0, scale: 1, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, rotationY: 0, autoAlpha: 1, transformOrigin: "0% 50%" }, { scale: 1, rotationY: 90, autoAlpha: 0, ease: punchgs.Power2.easeOut, overwrite: "all" }, .3, { scale: 1, z: 0, rotationY: 0, autoAlpha: 1, ease: punchgs.Power3.easeOut, overwrite: "all" }],
        [".esg-turn", .5, { x: 50, y: 0, scale: 0, rotationZ: 0, rotationX: 0, rotationY: -40, skewX: 0, skewY: 0, autoAlpha: 1, transformOrigin: "50% 50%" }, { scale: 1, x: 0, rotationY: 0, autoAlpha: 1, ease: punchgs.Power3.easeInOut, overwrite: "all" }, .3, { scale: 0, rotationY: -40, autoAlpha: 1, z: 0, x: 50, ease: punchgs.Power3.easeInOut, overwrite: "all" }, !0],
        [".esg-turnout", .5, { x: 0, y: 0, scale: 1, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 1, transformOrigin: "50% 50%" }, { scale: 1, rotationY: 40, scale: .6, autoAlpha: 0, x: -50, ease: punchgs.Power3.easeInOut, overwrite: "all" }, .3, { scale: 1, rotationY: 0, z: 0, autoAlpha: 1, x: 0, rotationX: 0, rotationZ: 0, ease: punchgs.Power3.easeInOut, overwrite: "all" }],
        [".esg-slide", .5, { x: -1e4, y: 0, scale: 1, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 1, transformOrigin: "50% 50%" }, { autoAlpha: 1, x: 0, y: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }, .3, { autoAlpha: 1, x: -1e4, y: 0, z: 0, ease: punchgs.Power2.easeOut, overwrite: "all" }],
        [".esg-slideout", .5, { x: 0, y: 0, scale: 1, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 1, transformOrigin: "50% 50%" }, { autoAlpha: 1, x: 0, y: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }, .3, { autoAlpha: 1, x: 0, y: 0, z: 0, ease: punchgs.Power2.easeOut, overwrite: "all" }],
        [".esg-slideright", .5, { xPercent: -50, y: 0, scale: 1, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 0, transformOrigin: "50% 50%" }, { autoAlpha: 1, xPercent: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }, .3, { autoAlpha: 0, xPercent: -50, z: 0, ease: punchgs.Power2.easeOut, overwrite: "all" }],
        [".esg-sliderightout", .5, { autoAlpha: 1, xPercent: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }, { xPercent: 50, y: 0, scale: 1, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 0, transformOrigin: "50% 50%" }, .3, { autoAlpha: 1, xPercent: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }],
        [".esg-scaleleft", .5, { x: 0, y: 0, scaleX: 0, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 1, transformOrigin: "100% 50%" }, { autoAlpha: 1, x: 0, scaleX: 1, ease: punchgs.Power3.easeOut, overwrite: "all" }, .3, { autoAlpha: 1, x: 0, z: 0, scaleX: 0, ease: punchgs.Power2.easeOut, overwrite: "all" }],
        [".esg-scaleright", .5, { x: 0, y: 0, scaleX: 0, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 1, transformOrigin: "0% 50%" }, { autoAlpha: 1, x: 0, scaleX: 1, ease: punchgs.Power3.easeOut, overwrite: "all" }, .3, { autoAlpha: 1, x: 0, z: 0, scaleX: 0, ease: punchgs.Power2.easeOut, overwrite: "all" }],
        [".esg-slideleft", .5, { xPercent: 50, y: 0, scale: 1, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 0, transformOrigin: "50% 50%" }, { autoAlpha: 1, xPercent: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }, .3, { autoAlpha: 0, xPercent: 50, z: 0, ease: punchgs.Power2.easeOut, overwrite: "all" }],
        [".esg-slideleftout", .5, { autoAlpha: 1, xPercent: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }, { xPercent: -50, y: 0, scale: 1, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 0, transformOrigin: "50% 50%" }, .3, { autoAlpha: 1, xPercent: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }],
        [".esg-slideup", .5, { x: 0, yPercent: 50, scale: 1, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 0, transformOrigin: "50% 50%" }, { autoAlpha: 1, yPercent: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }, .3, { autoAlpha: 0, yPercent: 50, z: 0, ease: punchgs.Power2.easeOut, overwrite: "all" }],
        [".esg-slideupout", .5, { autoAlpha: 1, yPercent: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }, { x: 0, yPercent: -50, scale: 1, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 0, transformOrigin: "50% 50%" }, .3, { autoAlpha: 1, yPercent: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }],
        [".esg-slidedown", .5, { x: 0, yPercent: -50, scale: 1, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 0, transformOrigin: "50% 50%" }, { autoAlpha: 1, yPercent: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }, .3, { autoAlpha: 0, yPercent: -50, z: 0, ease: punchgs.Power2.easeOut, overwrite: "all" }],
        [".esg-slidedownout", .5, { autoAlpha: 1, yPercent: 0, z: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }, { x: 0, yPercent: 50, scale: 1, rotationZ: 0, rotationX: 0, z: 10, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 0, transformOrigin: "50% 50%" }, .3, { autoAlpha: 1, yPercent: 0, z: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }],
        [".esg-slideshortright", .5, { x: -30, y: 0, scale: 1, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 0, transformOrigin: "50% 50%" }, { autoAlpha: 1, x: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }, .3, { autoAlpha: 0, x: -30, z: 0, ease: punchgs.Power2.easeOut, overwrite: "all" }],
        [".esg-slideshortrightout", .5, { autoAlpha: 1, x: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }, { x: 30, y: 0, scale: 1, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 0, transformOrigin: "50% 50%" }, .3, { autoAlpha: 1, x: 30, ease: punchgs.Power3.easeOut, overwrite: "all" }],
        [".esg-slideshortleft", .5, { x: 30, y: 0, scale: 1, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 0, transformOrigin: "50% 50%" }, { autoAlpha: 1, x: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }, .3, { autoAlpha: 0, x: 30, z: 0, ease: punchgs.Power2.easeOut, overwrite: "all" }],
        [".esg-slideshortleftout", .5, { autoAlpha: 1, x: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }, { x: -30, y: 0, scale: 1, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 0, transformOrigin: "50% 50%" }, .3, { autoAlpha: 1, x: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }],
        [".esg-slideshortup", .5, { x: 0, y: 30, scale: 1, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 0, transformOrigin: "50% 50%" }, { autoAlpha: 1, y: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }, .3, { autoAlpha: 0, y: 30, z: 0, ease: punchgs.Power2.easeOut, overwrite: "all" }],
        [".esg-slideshortupout", .5, { autoAlpha: 1, y: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }, { x: 0, y: -30, scale: 1, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 0, transformOrigin: "50% 50%" }, .3, { autoAlpha: 1, y: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }],
        [".esg-slideshortdown", .5, { x: 0, y: -30, scale: 1, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 0, transformOrigin: "50% 50%" }, { autoAlpha: 1, y: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }, .3, { autoAlpha: 0, y: -30, z: 0, ease: punchgs.Power2.easeOut, overwrite: "all" }],
        [".esg-slideshortdownout", .5, { autoAlpha: 1, y: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }, { x: 0, y: 30, scale: 1, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 0, transformOrigin: "50% 50%" }, .3, { autoAlpha: 1, y: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }],
        [".esg-skewright", .5, { xPercent: -100, y: 0, scale: 1, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 60, skewY: 0, autoAlpha: 0, transformOrigin: "50% 50%" }, { autoAlpha: 1, xPercent: 0, skewX: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }, .3, { autoAlpha: 0, skewX: -60, xPercent: -100, z: 0, ease: punchgs.Power2.easeOut, overwrite: "all" }],
        [".esg-skewrightout", .5, { autoAlpha: 1, xPercent: 0, skewX: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }, { xPercent: 100, y: 0, scale: 1, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: -60, skewY: 0, autoAlpha: 0, transformOrigin: "50% 50%" }, .3, { autoAlpha: 1, xPercent: 0, skewX: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }],
        [".esg-skewleft", .5, { xPercent: 100, y: 0, scale: 1, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: -60, skewY: 0, autoAlpha: 0, transformOrigin: "50% 50%" }, { autoAlpha: 1, xPercent: 0, skewX: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }, .3, { autoAlpha: 0, xPercent: 100, z: 0, skewX: 60, ease: punchgs.Power2.easeOut, overwrite: "all" }],
        [".esg-skewleftout", .5, { autoAlpha: 1, xPercent: 0, skewX: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }, { xPercent: -100, y: 0, scale: 1, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 60, skewY: 0, autoAlpha: 0, transformOrigin: "50% 50%" }, .3, { autoAlpha: 1, xPercent: 0, skewX: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }],
        [".esg-shifttotop", .5, { x: 0, y: 0, scale: 1, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 1, transformOrigin: "50% 50%" }, { autoAlpha: 1, y: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }, .3, { autoAlpha: 1, y: 0, z: 0, ease: punchgs.Power2.easeOut, overwrite: "all" }],
        [".esg-rollleft", .5, { xPercent: 50, y: 0, scale: 1, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 0, rotationZ: 90, transformOrigin: "50% 50%" }, { autoAlpha: 1, xPercent: 0, rotationZ: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }, .3, { autoAlpha: 0, xPercent: 50, z: 0, rotationZ: 90, ease: punchgs.Power2.easeOut, overwrite: "all" }],
        [".esg-rollleftout", .5, { autoAlpha: 1, xPercent: 0, rotationZ: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }, { xPercent: 50, y: 0, scale: 1, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 0, rotationZ: 90, transformOrigin: "50% 50%" }, .3, { autoAlpha: 1, xPercent: 0, rotationZ: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }],
        [".esg-rollright", .5, { xPercent: -50, y: 0, scale: 1, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 0, rotationZ: -90, transformOrigin: "50% 50%" }, { autoAlpha: 1, xPercent: 0, rotationZ: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }, .3, { autoAlpha: 0, xPercent: -50, rotationZ: -90, z: 0, ease: punchgs.Power2.easeOut, overwrite: "all" }],
        [".esg-rollrightout", .5, { autoAlpha: 1, xPercent: 0, rotationZ: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }, { xPercent: -50, y: 0, scale: 1, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 0, rotationZ: -90, transformOrigin: "50% 50%" }, .3, { autoAlpha: 1, xPercent: 0, rotationZ: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }],
        [".esg-falldown", .4, { x: 0, scale: 1, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 0, yPercent: -100 }, { autoAlpha: 1, yPercent: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }, .4, { yPercent: -100, autoAlpha: 0, z: 0, ease: punchgs.Power2.easeOut, delay: .2, overwrite: "all" }],
        [".esg-falldownout", .4, { autoAlpha: 1, yPercent: 0, ease: punchgs.Back.easeOut, overwrite: "all" }, { x: 0, scale: 1, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 0, yPercent: 100 }, .4, { autoAlpha: 1, yPercent: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }],
        [".esg-rotatescale", .3, { x: 0, y: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 0, rotationZ: 80, scale: .6, transformOrigin: "50% 50%" }, { autoAlpha: 1, scale: 1, rotationZ: 0, ease: punchgs.Back.easeOut, overwrite: "all" }, .3, { autoAlpha: 0, scale: .6, z: 0, rotationZ: 80, ease: punchgs.Power2.easeOut, overwrite: "all" }],
        [".esg-rotatescaleout", .3, { autoAlpha: 1, scale: 1, rotationZ: 0, ease: punchgs.Back.easeOut, overwrite: "all" }, { x: 0, y: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 0, rotationZ: 80, scale: .6, transformOrigin: "50% 50%" }, .3, { autoAlpha: 1, scale: 1, rotationZ: 0, ease: punchgs.Back.easeOut, overwrite: "all" }],
        [".esg-zoomintocorner", .5, { x: 0, y: 0, scale: 1, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 1, transformOrigin: "20% 50%" }, { autoAlpha: 1, scale: 1.2, x: 0, y: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }, .5, { autoAlpha: 0, x: 0, y: 0, scale: 1, autoAlpha: 1, z: 0, ease: punchgs.Power2.easeOut, overwrite: "all" }],
        [".esg-zoomouttocorner", .5, { x: 0, y: 0, scale: 1.2, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 1, transformOrigin: "80% 50%" }, { autoAlpha: 1, scale: 1, x: 0, y: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }, .5, { autoAlpha: 0, x: 0, y: 0, scale: 1.2, autoAlpha: 1, z: 0, ease: punchgs.Power2.easeOut, overwrite: "all" }],
        [".esg-zoomtodefault", .5, { x: 0, y: 0, scale: 1.2, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 1, transformOrigin: "50% 50%" }, { autoAlpha: 1, scale: 1, x: 0, y: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }, .5, { autoAlpha: 0, x: 0, y: 0, scale: 1.2, autoAlpha: 1, z: 0, ease: punchgs.Power2.easeOut, overwrite: "all" }],
        [".esg-zoomback", .5, { x: 0, y: 0, scale: .2, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 0, transformOrigin: "50% 50%" }, { autoAlpha: 1, scale: 1, x: 0, y: 0, ease: punchgs.Back.easeOut, overwrite: "all" }, .5, { autoAlpha: 0, x: 0, y: 0, scale: .2, autoAlpha: 0, z: 0, ease: punchgs.Power2.easeOut, overwrite: "all" }],
        [".esg-zoombackout", .5, { autoAlpha: 1, scale: 1, x: 0, y: 0, ease: punchgs.Back.easeOut, overwrite: "all" }, { x: 0, y: 0, scale: .2, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 0, transformOrigin: "50% 50%" }, .5, { autoAlpha: 1, scale: 1, x: 0, y: 0, ease: punchgs.Back.easeOut, overwrite: "all" }],
        [".esg-zoomfront", .5, { x: 0, y: 0, scale: 1.5, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 0, transformOrigin: "50% 50%" }, { autoAlpha: 1, scale: 1, x: 0, y: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }, .5, { autoAlpha: 0, x: 0, y: 0, scale: 1.5, z: 0, ease: punchgs.Power2.easeOut, overwrite: "all" }],
        [".esg-zoomfrontout", .5, { autoAlpha: 1, scale: 1, x: 0, y: 0, ease: punchgs.Back.easeOut, overwrite: "all" }, { x: 0, y: 0, scale: 1.5, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 0, transformOrigin: "50% 50%" }, .5, { autoAlpha: 1, scale: 1, x: 0, y: 0, ease: punchgs.Back.easeOut, overwrite: "all" }],
        [".esg-flyleft", .8, { x: -80, y: 0, z: 0, scale: .3, rotationZ: 0, rotationY: 75, rotationX: 10, skewX: 0, skewY: 0, autoAlpha: .01, transformOrigin: "30% 10%" }, { x: 0, y: 0, rotationY: 0, z: .001, rotationX: 0, rotationZ: 0, autoAlpha: 1, scale: 1, x: 0, y: 0, z: 0, ease: punchgs.Power3.easeInOut, overwrite: "all" }, .8, { autoAlpha: .01, x: -40, y: 0, z: 300, rotationY: 60, rotationX: 20, overwrite: "all" }],
        [".esg-flyleftout", .8, { x: 0, y: 0, rotationY: 0, z: .001, rotationX: 0, rotationZ: 0, autoAlpha: 1, scale: 1, x: 0, y: 0, z: 0, ease: punchgs.Power3.easeInOut, overwrite: "all" }, { x: -80, y: 0, z: 0, scale: .3, rotationZ: 0, rotationY: 75, rotationX: 10, skewX: 0, skewY: 0, autoAlpha: .01, transformOrigin: "30% 10%" }, .8, { x: 0, y: 0, rotationY: 0, z: .001, rotationX: 0, rotationZ: 0, autoAlpha: 1, scale: 1, x: 0, y: 0, z: 0, ease: punchgs.Power3.easeInOut, overwrite: "all" }],
        [".esg-flyright", .8, { scale: 1, skewX: 0, skewY: 0, autoAlpha: 0, x: 80, y: 0, z: 0, scale: .3, rotationZ: 0, rotationY: -75, rotationX: 10, transformOrigin: "70% 20%" }, { x: 0, y: 0, rotationY: 0, z: .001, rotationX: 0, autoAlpha: 1, scale: 1, x: 0, y: 0, z: 0, ease: punchgs.Power3.easeInOut, overwrite: "all" }, .8, { autoAlpha: 0, x: 40, y: -40, z: 300, rotationY: -60, rotationX: -40, overwrite: "all" }],
        [".esg-flyrightout", .8, { x: 0, y: 0, rotationY: 0, z: .001, rotationX: 0, autoAlpha: 1, scale: 1, x: 0, y: 0, z: 0, ease: punchgs.Power3.easeInOut, overwrite: "all" }, { scale: 1, skewX: 0, skewY: 0, autoAlpha: 0, x: 80, y: 0, z: 0, scale: .3, rotationZ: 0, rotationY: -75, rotationX: 10, transformOrigin: "70% 20%" }, .8, { x: 0, y: 0, rotationY: 0, z: .001, rotationX: 0, autoAlpha: 1, scale: 1, x: 0, y: 0, z: 0, ease: punchgs.Power3.easeInOut, overwrite: "all" }],
        [".esg-mediazoom", .3, { x: 0, y: 0, scale: 1, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 1, transformOrigin: "50% 50%" }, { autoAlpha: 1, scale: 1.4, x: 0, y: 0, ease: punchgs.Back.easeOut, overwrite: "all" }, .3, { autoAlpha: 0, x: 0, y: 0, scale: 1, z: 0, ease: punchgs.Power2.easeOut, overwrite: "all" }],
        [".esg-zoomandrotate", .6, { x: 0, y: 0, scale: 1, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 1, transformOrigin: "50% 50%" }, { autoAlpha: 1, scale: 1.4, x: 0, y: 0, rotationZ: 30, ease: punchgs.Power2.easeOut, overwrite: "all" }, .4, { x: 0, y: 0, scale: 1, z: 0, rotationZ: 0, ease: punchgs.Power2.easeOut, overwrite: "all" }],
        [".esg-pressback", .5, { x: 0, y: 0, scale: 1, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 1, transformOrigin: "50% 50%" }, { rotationY: 0, autoAlpha: 1, scale: .8, ease: punchgs.Power3.easeOut, overwrite: "all" }, .3, { rotationY: 0, autoAlpha: 1, z: 0, scale: 1, ease: punchgs.Power2.easeOut, overwrite: "all" }],
        [".esg-3dturnright", .5, { x: 0, y: 0, scale: 1, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 1, transformPerspective: 600 }, { x: -40, y: 0, scale: .8, rotationZ: 2, rotationX: 5, rotationY: -28, skewX: 0, skewY: 0, autoAlpha: 1, transformOrigin: "100% 50% 40%", transformPerspective: 600, ease: punchgs.Power3.easeOut, overwrite: "all" }, .3, { z: 0, x: 0, y: 0, scale: 1, rotationZ: 0, rotationX: 0, rotationY: 0, skewX: 0, skewY: 0, autoAlpha: 1, force3D: "auto", ease: punchgs.Power2.easeOut, overwrite: "all" }, !0]
    ];
    jQuery.fn.extend({ tpessential: function(e) {
        return jQuery.fn.tpessential.defaults = { forceFullWidth: "off", forceFullScreen: "off", fullScreenOffsetContainer: "", row: 3, column: 4, space: 10, pageAnimation: "fade", animSpeed: 600, delayBasic: .08, smartPagination: "on", paginationScrollToTop: "off", paginationScrollToTopOffset: 200, layout: "even", rtl: "off", aspectratio: "16:9", bgPosition: "center center", bgSize: "cover", videoJsPath: "", overflowoffset: 0, mainhoverdelay: 0, rowItemMultiplier: [], filterGroupClass: "", filterType: "", filterLogic: "or", showDropFilter: "hover", evenGridMasonrySkinPusher: "on", loadMoreType: "none", loadMoreItems: [], loadMoreAmount: 5, loadMoreTxt: "Load More", loadMoreNr: "on", loadMoreEndTxt: "No More Items for the Selected Filter", loadMoreAjaxUrl: "", loadMoreAjaxToken: "", loadMoreAjaxAction: "", lazyLoad: "off", lazyLoadColor: "#ff0000", gridID: 0, spinner: "", spinnerColor: "", lightBoxMode: "single", cobblesPattern: "", searchInput: ".faqsearch", googleFonts: "", googleFontJS: "//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js", ajaxContentTarget: "", ajaxScrollToOnLoad: "off", ajaxScrollToOffset: 100, ajaxCallback: "", ajaxCallbackArgument: "on", ajaxCssUrl: "", ajaxJsUrl: "", ajaxCloseButton: "on", ajaxNavButton: "on", ajaxCloseTxt: "Close", ajaxCloseType: "type1", ajaxClosePosition: "tr", ajaxCloseInner: "true", ajaxCloseStyle: "light", ajaxTypes: [], cookies: { search: "off", filter: "off", pagination: "off", loadmore: "off", timetosave: "30" } }, e = jQuery.extend({}, jQuery.fn.tpessential.defaults, e), "undefined" == typeof WebFontConfig && (WebFontConfig = new Object), this.each(function() {
            function t(e, t) { mainPreparing(e, t), t.initialised = "ready", jQuery("body").trigger("essentialready", e.attr("id")) }

            function a(e, t) {
                var a = e.offset().top + e.height() - jQuery(document).scrollTop();
                jQuery(window).height() > a && 1 != t.data("loading") && (t.data("loading", 1), loadMoreItems(e, o)) }
            var o = e,
                i = jQuery(this);
            if (i == undefined) return !1;
            if (i.parent().css({ position: "relative" }), "cobbles" == o.layout ? (o.layout = "even", o.evenCobbles = "on") : o.evenCobbles = "off", "true" != o.get && 1 != o.get) {
                if (o.get = !0, o.filterGroupClass = o.filterGroupClass == undefined || 0 == o.filterGroupClass.length ? "#" + i.attr("id") : "." + o.filterGroupClass, 1 == window.tplogs) try { console.groupCollapsed("Essential Grid  2.0.5 Initialisation on " + i.attr("id")), console.groupCollapsed("Used Options:"), console.info(e), console.groupEnd(), console.groupCollapsed("Tween Engine:") } catch (r) {}
                if (punchgs.TweenLite == undefined) {
                    if (1 == window.tplogs) try { console.error("GreenSock Engine Does not Exist!") } catch (r) {}
                    return !1 }
                if (punchgs.force3D = !0, 1 == window.tplogs) try { console.info("GreenSock Engine Version in Essential Grid:" + punchgs.TweenLite.version) } catch (r) {}
                if (punchgs.TweenLite.lagSmoothing(2e3, 16), punchgs.force3D = "auto", 1 == window.tplogs) try { console.groupEnd(), console.groupEnd() } catch (r) {}
                jQuery("body").data("fullScreenMode", !1), jQuery(window).on("mozfullscreenchange webkitfullscreenchange fullscreenchange", function() { jQuery("body").data("fullScreenMode", !jQuery("body").data("fullScreenMode")) }), buildLoader(i.parent(), o), o.firstshowever == undefined && jQuery(o.filterGroupClass + ".esg-navigationbutton," + o.filterGroupClass + " .esg-navigationbutton").css({ visibility: "hidden" }), i.parent().append('<div class="esg-relative-placeholder" style="width:100%;height:auto"></div>'), i.wrap('<div class="esg-container-fullscreen-forcer" style="position:relative;left:0px;top:0px;width:100%;height:auto;"></div>');
                var n = i.parent().parent().find(".esg-relative-placeholder").offset().left;
                ("on" == o.forceFullWidth || "on" == o.forceFullScreen) && i.closest(".esg-container-fullscreen-forcer").css({ left: 0 - n, width: jQuery(window).width() }), o.animDelay = 0 == o.delayBasic ? "off" : "on", o.container = i, i.find("ul").first().addClass("mainul").wrap('<div class="esg-overflowtrick"></div>');
                var s = jQuery(o.filterGroupClass + ".esg-navbutton-solo-left," + o.filterGroupClass + " .esg-navbutton-solo-left"),
                    l = jQuery(o.filterGroupClass + ".esg-navbutton-solo-right," + o.filterGroupClass + " .esg-navbutton-solo-right");
                s.length > 0 && (s.css({ marginTop: 0 - s.height() / 2 }), s.appendTo(i.find(".esg-overflowtrick"))), l.length > 0 && (l.css({ marginTop: 0 - l.height() / 2 }), l.appendTo(i.find(".esg-overflowtrick"))), punchgs.CSSPlugin.defaultTransformPerspective = 1200, o.animSpeed = o.animSpeed / 1e3, o.delayBasic = o.delayBasic / 100, setOptions(i, o), o.filter = o.statfilter, o.origcolumn = o.column, o.currentpage = 0, i.addClass("esg-layout-" + o.layout); { loadVideoApis(i, o) }
                if ("even" == o.layout && "on" == o.forceFullScreen) {
                    var u = jQuery(window).height();
                    if (o.fullScreenOffsetContainer != undefined) try {
                        var d = o.fullScreenOffsetContainer.split(",");
                        d && jQuery.each(d, function(e, t) { u -= jQuery(t).outerHeight(!0), u < o.minFullScreenHeight && (u = o.minFullScreenHeight) }) } catch (r) {}
                    var c = i.find(".esg-overflowtrick").first(),
                        p = i.find("ul").first();
                    c.css({ display: "block", height: u + "px" }), p.css({ display: "block", height: u + "px" }), i.closest(".eg-grid-wrapper, .myportfolio-container").css({ height: "auto" }).removeClass("eg-startheight") }
                if (0 != o.googleFonts.length && "masonry" == o.layout) {
                    var h = (o.googleFonts.length, !0);
                    if (jQuery("head").find("*").each(function() { jQuery(this).attr("src") != undefined && jQuery(this).attr("src").indexOf("webfont.js") > 0 && (h = !1) }), WebFontConfig.active == undefined && h) { WebFontConfig = { google: { families: o.googleFonts }, active: function() { t(i, o) }, inactive: function() { t(i, o) }, timeout: 1500 };
                        var f = document.createElement("script");
                        f.src = ("https:" == document.location.protocol ? "https" : "http") + "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js", f.type = "text/javascript", f.async = "true";
                        var g = document.getElementsByTagName("script")[0];
                        g.parentNode.insertBefore(f, g) } else t(i, o) } else t(i, o);
                if ("button" == o.loadMoreType) { i.append('<div class="esg-loadmore-wrapper" style="text-align:center"><div class="esg-navigationbutton esg-loadmore">LOAD MORE</div></div>');
                    var w = i.find(".esg-loadmore"),
                        m = o.loadMoreTxt + " (" + checkMoreToLoad(i, o).length + ")"; "off" == o.loadMoreNr && (m = o.loadMoreTxt), w.html(m), w.click(function() { 1 != w.data("loading") && loadMoreItems(i, o) }), 0 == checkMoreToLoad(i, o).length && w.remove() } else if ("scroll" == o.loadMoreType) { i.append('<div style="display:inline-block" class="esg-navigationbutton esg-loadmore">LOAD MORE</div>');
                    var w = i.find(".esg-loadmore"),
                        m = o.loadMoreTxt + " (" + checkMoreToLoad(i, o).length + ")"; "off" == o.loadMoreNr && (m = o.loadMoreTxt), w.html(m), jQuery(document, window).scroll(function() { a(i, w) }), a(i, w), 0 == checkMoreToLoad(i, o).length && w.remove() }
                checkAvailableFilters(i, o), tabBlurringCheck(i, o) } }) }, esappend: function() {
        var e = jQuery(this);
        return prepareItemsInGrid(opt, !0), organiseGrid(opt), prepareSortingAndOrders(e), opt.lastslide }, esskill: function() {
        var e = jQuery(this);
        e.find("*").each(function() { jQuery(this).off("click, focus, focusin, hover, play, ended, stop, pause, essentialready"), jQuery(this).remove() }), e.remove(), e.html(), e = null }, esreadsettings: function(e) { e = e == undefined ? new Object : e;
        var t = jQuery(this),
            a = getOptions(t);
        return a }, esredraw: function(e) { e = e == undefined ? new Object : e;
        var t = jQuery(this),
            a = getOptions(t);
        if (e.space != undefined && (a.space = parseInt(e.space, 0)), e.row != undefined && (a.row = parseInt(e.row, 0)), e.rtl != undefined && (a.rtl = e.rtl), e.aspectratio != undefined && (a.aspectratio = e.aspectratio), e.forceFullWidth != undefined)
            if (a.forceFullWidth = e.forceFullWidth, "on" == a.forceFullWidth) {
                var o = t.parent().parent().find(".esg-relative-placeholder").offset().left;
                t.closest(".esg-container-fullscreen-forcer").css({ left: 0 - o, width: jQuery(window).width() }) } else t.closest(".esg-container-fullscreen-forcer").css({ left: 0, width: "auto" });
        if (e.rowItemMultiplier != undefined && (a.rowItemMultiplier = e.rowItemMultiplier), e.responsiveEntries != undefined && (a.responsiveEntries = e.responsiveEntries), e.column != undefined) {
            if (e.column <= 0 || e.column >= 20) {
                var i = getBestFitColumn(a, jQuery(window).width(), "id");
                a.column = i.column, a.columnindex = i.index } else a.column = parseInt(e.column, 0);
            a.origcolumn = a.column }
        e.animSpeed != undefined && (a.animSpeed = e.animSpeed / 1e3), e.delayBasic != undefined && (a.delayBasic = e.delayBasic / 100), e.pageAnimation != undefined && (a.pageAnimation = e.pageAnimation), e.changedAnim != undefined && (a.changedAnim = e.changedAnim), a.started = !0, 1 == e.silent && (a.silent = !0), setOptions(t, a), setItemsOnPages(a), organiseGrid(a) }, esquickdraw: function() {
        var e = jQuery(this),
            t = getOptions(e);
        t.silent = !0, setOptions(e, t), setItemsOnPages(t), organiseGrid(t) }, esreinit: function() {
        var e = jQuery(this);
        return prepareItemsInGrid(opt, !0), organiseGrid(opt), prepareSortingAndOrders(e), opt.lastslide }, somemethodb: function() {
        return this.each(function() { jQuery(this) }) } });
    var vis = function() {
            var e, t, a = { hidden: "visibilitychange", webkitHidden: "webkitvisibilitychange", mozHidden: "mozvisibilitychange", msHidden: "msvisibilitychange" };
            for (e in a)
                if (e in document) { t = a[e];
                    break }
            return function(a) {
                return a && document.addEventListener(t, a), !document[e] } }(),
        tabBlurringCheck = function() {
            var e = document.documentMode === undefined,
                t = window.chrome;
            jQuery("body").hasClass("esg-blurlistenerexists") || (jQuery("body").addClass("esg-blurlistenerexists"), e && !t ? jQuery(window).on("focusin", function() { setTimeout(function() { jQuery("body").find(".esg-grid.esg-container").each(function() { jQuery(this).esquickdraw() }) }, 300) }).on("focusout", function() {}) : window.addEventListener ? window.addEventListener("focus", function() { setTimeout(function() { jQuery("body").find(".esg-grid.esg-container").each(function() { jQuery(this).esquickdraw() }) }, 300) }, !1) : window.attachEvent("focus", function() { setTimeout(function() { jQuery("body").find(".esg-grid.esg-container").each(function() { jQuery(this).esquickdraw() }) }, 300) })) },
        is_mobile = function() {
            var e = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos", , "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"],
                t = !1;
            for (i in e) navigator.userAgent.split(e[i]).length > 1 && (t = !0);
            return t },
        waitForLoads = function(e, t) {
            var a = e.closest(".esg-grid").parent().parent().find(".esg-loader");
            jQuery.each(e, function(e, o) { o = jQuery(o), a.length > 0 && punchgs.TweenLite.to(a, .2, { autoAlpha: 1, delay: .5 }), !o.hasClass("loadedmedia") && "even" != t.layout && o.find("img").length > 0 && o.hasClass("itemtoshow") && o.removeClass("itemtoshow").addClass("showmeonload"), o.hasClass("loadedmedia") || "even" == t.layout || 0 != o.find("img").length || (evenImageRatio(o.find("img"), t), waittorungGrid(o, t, !0)) });
            var o = setInterval(function() { t.bannertimeronpause = !0, t.cd = 0;
                var i = 0;
                e.find("img").each(function() {
                    var e = jQuery(this);
                    1 != e.data("lazydone") && "on" == t.lazyLoad && e.parent().find(".lazyloadcover").length < 1 && e.parent().append('<div class="lazyloadcover" style="position:absolute;top:0px;left:0px;z-index:10;width:100%;height:100%;background:' + t.lazyLoadColor + '"></div>'), 1 != e.data("lazydone") && 3 > i && (i++, loadAllPrepared(jQuery(this), t)) }), 0 == i && a.length > 0 && (punchgs.TweenLite.killTweensOf(a, !1), punchgs.TweenLite.to(a, .2, { autoAlpha: 0 })), 0 != i || e.closest(".mainul").hasClass("gridorganising") || (clearInterval(o), runGrid(t)) }, 50) } }(jQuery),
    function(e, t) { "use strict";

        function a(e) {
            return e && e.toLowerCase ? e.toLowerCase() : e }

        function o(e, t) {
            for (var a = 0, o = e.length; o > a; a++)
                if (e[a] == t) return !i;
            return i }
        var i = !1,
            r = null,
            n = parseFloat,
            s = Math.min,
            l = /(-?\d+\.?\d*)$/g,
            u = /(\d+\.?\d*)$/g,
            d = [],
            c = [],
            p = function(e) {
                return "string" == typeof e },
            h = function(e, t) {
                for (var a, o = e.length, i = o; i--;) a = o - i - 1, t(e[a], a) },
            f = Array.prototype.indexOf || function(e) {
                    var t = this.length,
                        a = Number(arguments[1]) || 0;
                    for (a = 0 > a ? Math.ceil(a) : Math.floor(a), 0 > a && (a += t); t > a; a++)
                        if (a in this && this[a] === e) return a;
                    return -1 };
        e.tinysort = { id: "TinySort", version: "1.5.6", copyright: "Copyright (c) 2008-2013 Ron Valstar", uri: "http://tinysort.sjeiti.com/", licensed: { MIT: "http://www.opensource.org/licenses/mit-license.php", GPL: "http://www.gnu.org/licenses/gpl.html" }, plugin: function() {
            var e = function(e, t) { d.push(e), c.push(t) };
            return e.indexOf = f, e }(), defaults: { order: "asc", attr: r, data: r, useVal: i, place: "start", returns: i, cases: i, forceStrings: i, ignoreDashes: i, sortFunction: r } }, e.fn.extend({ tinysort: function() {
            var g, w, m, v, y = this,
                b = [],
                x = [],
                j = [],
                C = [],
                k = 0,
                A = [],
                T = [],
                O = function(e) { h(d, function(t) { t.call(t, e) }) },
                P = function(e, t) {
                    return "string" == typeof t && (e.cases || (t = a(t)), t = t.replace(/^\s*(.*?)\s*$/i, "$1")), t },
                Q = function(e, t) {
                    var a = 0;
                    for (0 !== k && (k = 0); 0 === a && v > k;) {
                        var o = C[k],
                            r = o.oSettings,
                            s = r.ignoreDashes ? u : l;
                        if (O(r), r.sortFunction) a = r.sortFunction(e, t);
                        else if ("rand" == r.order) a = Math.random() < .5 ? 1 : -1;
                        else {
                            var d = i,
                                f = P(r, e.s[k]),
                                g = P(r, t.s[k]);
                            if (!r.forceStrings) {
                                var w = p(f) ? f && f.match(s) : i,
                                    m = p(g) ? g && g.match(s) : i;
                                if (w && m) {
                                    var y = f.substr(0, f.length - w[0].length),
                                        b = g.substr(0, g.length - m[0].length);
                                    y == b && (d = !i, f = n(w[0]), g = n(m[0])) } }
                            a = o.iAsc * (g > f ? -1 : f > g ? 1 : 0) }
                        h(c, function(e) { a = e.call(e, d, f, g, a) }), 0 === a && k++ }
                    return a };
            for (g = 0, m = arguments.length; m > g; g++) {
                var L = arguments[g];
                p(L) ? A.push(L) - 1 > T.length && (T.length = A.length - 1) : T.push(L) > A.length && (A.length = T.length) }
            for (A.length > T.length && (T.length = A.length), v = A.length, 0 === v && (v = A.length = 1, T.push({})), g = 0, m = v; m > g; g++) {
                var I = A[g],
                    Y = e.extend({}, e.tinysort.defaults, T[g]),
                    X = !(!I || "" === I),
                    z = X && ":" === I[0];
                C.push({ sFind: I, oSettings: Y, bFind: X, bAttr: !(Y.attr === r || "" === Y.attr), bData: Y.data !== r, bFilter: z, $Filter: z ? y.filter(I) : y, fnSort: Y.sortFunction, iAsc: "asc" == Y.order ? 1 : -1 }) }
            return y.each(function(a, o) {
                var i, r = e(o),
                    n = r.parent().get(0),
                    s = [];
                for (w = 0; v > w; w++) {
                    var l = C[w],
                        u = l.bFind ? l.bFilter ? l.$Filter.filter(o) : r.find(l.sFind) : r;
                    s.push(l.bData ? u.data(l.oSettings.data) : l.bAttr ? u.attr(l.oSettings.attr) : l.oSettings.useVal ? u.val() : u.text()), i === t && (i = u) }
                var d = f.call(j, n);
                0 > d && (d = j.push(n) - 1, x[d] = { s: [], n: [] }), i.length > 0 ? x[d].s.push({ s: s, e: r, n: a }) : x[d].n.push({ e: r, n: a }) }), h(x, function(e) { e.s.sort(Q) }), h(x, function(e) {
                var t = e.s,
                    a = e.n,
                    r = t.length,
                    n = a.length,
                    l = r + n,
                    u = [],
                    d = l,
                    c = [0, 0];
                switch (Y.place) {
                    case "first":
                        h(t, function(e) { d = s(d, e.n) });
                        break;
                    case "org":
                        h(t, function(e) { u.push(e.n) });
                        break;
                    case "end":
                        d = n;
                        break;
                    default:
                        d = 0 }
                for (g = 0; l > g; g++) {
                    var p = o(u, g) ? !i : g >= d && d + r > g,
                        f = p ? 0 : 1,
                        w = (p ? t : a)[c[f]].e;
                    w.parent().append(w), (p || !Y.returns) && b.push(w.get(0)), c[f]++ } }), y.length = 0, Array.prototype.push.apply(y, b), y } }), e.fn.TinySort = e.fn.Tinysort = e.fn.tsort = e.fn.tinysort }(jQuery); } catch (e) { console.error('Error in file:http://webnus.biz/themes/michigan/kids/wp-content/plugins/essential-grid/public/assets/js/jquery.themepunch.essential.min.js?ver=2.0.9.1; Error:' + e.message); };
try {
    + function($) {
        'use strict';
        var Collapse = function(element, options) {
            this.$element = $(element)
            this.options = $.extend({}, Collapse.DEFAULTS, options)
            this.$trigger = $('[data-toggle="collapse"][href="#' + element.id + '"],' + '[data-toggle="collapse"][data-target="#' + element.id + '"]')
            this.transitioning = null
            if (this.options.parent) { this.$parent = this.getParent() } else { this.addAriaAndCollapsedClass(this.$element, this.$trigger) }
            if (this.options.toggle) this.toggle()
        }
        Collapse.VERSION = '3.3.5'
        Collapse.TRANSITION_DURATION = 350
        Collapse.DEFAULTS = { toggle: true }
        Collapse.prototype.dimension = function() {
            var hasWidth = this.$element.hasClass('width')
            return hasWidth ? 'width' : 'height'
        }
        Collapse.prototype.show = function() {
            if (this.transitioning || this.$element.hasClass('in')) return
            var activesData
            var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')
            if (actives && actives.length) {
                activesData = actives.data('bs.collapse')
                if (activesData && activesData.transitioning) return
            }
            var startEvent = $.Event('show.bs.collapse')
            this.$element.trigger(startEvent)
            if (startEvent.isDefaultPrevented()) return
            if (actives && actives.length) {
                Plugin.call(actives, 'hide')
                activesData || actives.data('bs.collapse', null)
            }
            var dimension = this.dimension()
            this.$element.removeClass('collapse').addClass('collapsing')[dimension](0).attr('aria-expanded', true)
            this.$trigger.removeClass('collapsed').attr('aria-expanded', true)
            this.transitioning = 1
            var complete = function() {
                this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('')
                this.transitioning = 0
                this.$element.trigger('shown.bs.collapse')
            }
            if (!$.support.transition) return complete.call(this)
            var scrollSize = $.camelCase(['scroll', dimension].join('-'))
            this.$element.one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
        }
        Collapse.prototype.hide = function() {
            if (this.transitioning || !this.$element.hasClass('in')) return
            var startEvent = $.Event('hide.bs.collapse')
            this.$element.trigger(startEvent)
            if (startEvent.isDefaultPrevented()) return
            var dimension = this.dimension()
            this.$element[dimension](this.$element[dimension]())[0].offsetHeight
            this.$element.addClass('collapsing').removeClass('collapse in').attr('aria-expanded', false)
            this.$trigger.addClass('collapsed').attr('aria-expanded', false)
            this.transitioning = 1
            var complete = function() {
                this.transitioning = 0
                this.$element.removeClass('collapsing').addClass('collapse').trigger('hidden.bs.collapse')
            }
            if (!$.support.transition) return complete.call(this)
            this.$element[dimension](0).one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)
        }
        Collapse.prototype.toggle = function() { this[this.$element.hasClass('in') ? 'hide' : 'show']() }
        Collapse.prototype.getParent = function() {
            return $(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each($.proxy(function(i, element) {
                var $element = $(element)
                this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
            }, this)).end()
        }
        Collapse.prototype.addAriaAndCollapsedClass = function($element, $trigger) {
            var isOpen = $element.hasClass('in')
            $element.attr('aria-expanded', isOpen)
            $trigger.toggleClass('collapsed', !isOpen).attr('aria-expanded', isOpen)
        }

        function getTargetFromTrigger($trigger) {
            var href
            var target = $trigger.attr('data-target') || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')
            return $(target)
        }

        function Plugin(option) {
            return this.each(function() {
                var $this = $(this)
                var data = $this.data('bs.collapse')
                var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)
                if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
                if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
                if (typeof option == 'string') data[option]()
            })
        }
        var old = $.fn.collapse
        $.fn.collapse = Plugin
        $.fn.collapse.Constructor = Collapse
        $.fn.collapse.noConflict = function() {
            $.fn.collapse = old
            return this
        }
        $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function(e) {
            var $this = $(this)
            if (!$this.attr('data-target')) e.preventDefault()
            var $target = getTargetFromTrigger($this)
            var data = $target.data('bs.collapse')
            var option = data ? 'toggle' : $this.data()
            Plugin.call($target, option)
        })
    }(jQuery);
} catch (e) { console.error('Error in file:http://webnus.biz/themes/michigan/kids/wp-content/plugins/lifterlms/assets/js/vendor/collapse.js?ver=4.5.4; Error:' + e.message); };
try {
    + function($) {
        'use strict';

        function transitionEnd() {
            var el = document.createElement('bootstrap')
            var transEndEventNames = { WebkitTransition: 'webkitTransitionEnd', MozTransition: 'transitionend', OTransition: 'oTransitionEnd otransitionend', transition: 'transitionend' }
            for (var name in transEndEventNames) {
                if (el.style[name] !== undefined) {
                    return { end: transEndEventNames[name] } } }
            return false
        }
        $.fn.emulateTransitionEnd = function(duration) {
            var called = false
            var $el = this
            $(this).one('bsTransitionEnd', function() { called = true })
            var callback = function() {
                if (!called) $($el).trigger($.support.transition.end) }
            setTimeout(callback, duration)
            return this
        }
        $(function() {
            $.support.transition = transitionEnd()
            if (!$.support.transition) return
            $.event.special.bsTransitionEnd = { bindType: $.support.transition.end, delegateType: $.support.transition.end, handle: function(e) {
                if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments) } }
        })
    }(jQuery);
} catch (e) { console.error('Error in file:http://webnus.biz/themes/michigan/kids/wp-content/plugins/lifterlms/assets/js/vendor/transition.js?ver=4.5.4; Error:' + e.message); };
try {! function(jQuery, undefined) { "use strict";
    jQuery.fn.extend({ revolution: function(e) {
        var t = { delay: 9e3, responsiveLevels: 4064, visibilityLevels: [2048, 1024, 778, 480], gridwidth: 960, gridheight: 500, minHeight: 0, autoHeight: "off", sliderType: "standard", sliderLayout: "auto", fullScreenAutoWidth: "off", fullScreenAlignForce: "off", fullScreenOffsetContainer: "", fullScreenOffset: "0", hideCaptionAtLimit: 0, hideAllCaptionAtLimit: 0, hideSliderAtLimit: 0, disableProgressBar: "off", stopAtSlide: -1, stopAfterLoops: -1, shadow: 0, dottedOverlay: "none", startDelay: 0, lazyType: "smart", spinner: "spinner0", shuffle: "off", viewPort: { enable: !1, outof: "wait", visible_area: "60%" }, fallbacks: { isJoomla: !1, panZoomDisableOnMobile: "off", simplifyAll: "on", nextSlideOnWindowFocus: "off", disableFocusListener: !0, ignoreHeightChanges: "off", ignoreHeightChangesSize: 0 }, parallax: { type: "off", levels: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85], origo: "enterpoint", speed: 400, bgparallax: "off", opacity: "on", disable_onmobile: "off", ddd_shadow: "on", ddd_bgfreeze: "off", ddd_overflow: "visible", ddd_layer_overflow: "visible", ddd_z_correction: 65, ddd_path: "mouse" }, carousel: { horizontal_align: "center", vertical_align: "center", infinity: "on", space: 0, maxVisibleItems: 3, stretch: "off", fadeout: "on", maxRotation: 0, minScale: 0, vary_fade: "off", vary_rotation: "on", vary_scale: "off", border_radius: "0px", padding_top: 0, padding_bottom: 0 }, navigation: { keyboardNavigation: "off", keyboard_direction: "horizontal", mouseScrollNavigation: "off", onHoverStop: "on", touch: { touchenabled: "off", swipe_treshold: 75, swipe_min_touches: 1, drag_block_vertical: !1, swipe_direction: "horizontal" }, arrows: { style: "", enable: !1, hide_onmobile: !1, hide_onleave: !0, hide_delay: 200, hide_delay_mobile: 1200, hide_under: 0, hide_over: 9999, tmp: "", rtl: !1, left: { h_align: "left", v_align: "center", h_offset: 20, v_offset: 0, container: "slider" }, right: { h_align: "right", v_align: "center", h_offset: 20, v_offset: 0, container: "slider" } }, bullets: { container: "slider", rtl: !1, style: "", enable: !1, hide_onmobile: !1, hide_onleave: !0, hide_delay: 200, hide_delay_mobile: 1200, hide_under: 0, hide_over: 9999, direction: "horizontal", h_align: "left", v_align: "center", space: 0, h_offset: 20, v_offset: 0, tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>' }, thumbnails: { container: "slider", rtl: !1, style: "", enable: !1, width: 100, height: 50, min_width: 100, wrapper_padding: 2, wrapper_color: "#f5f5f5", wrapper_opacity: 1, tmp: '<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>', visibleAmount: 5, hide_onmobile: !1, hide_onleave: !0, hide_delay: 200, hide_delay_mobile: 1200, hide_under: 0, hide_over: 9999, direction: "horizontal", span: !1, position: "inner", space: 2, h_align: "left", v_align: "center", h_offset: 20, v_offset: 0 }, tabs: { container: "slider", rtl: !1, style: "", enable: !1, width: 100, min_width: 100, height: 50, wrapper_padding: 10, wrapper_color: "#f5f5f5", wrapper_opacity: 1, tmp: '<span class="tp-tab-image"></span>', visibleAmount: 5, hide_onmobile: !1, hide_onleave: !0, hide_delay: 200, hide_delay_mobile: 1200, hide_under: 0, hide_over: 9999, direction: "horizontal", span: !1, space: 0, position: "inner", h_align: "left", v_align: "center", h_offset: 20, v_offset: 0 } }, extensions: "extensions/", extensions_suffix: ".min.js", debugMode: !1 };
        return e = jQuery.extend(!0, {}, t, e), this.each(function() {
            var t = jQuery(this);
            e.minHeight = e.minHeight != undefined ? parseInt(e.minHeight, 0) : e.minHeight, "hero" == e.sliderType && t.find(">ul>li").each(function(e) { e > 0 && jQuery(this).remove() }), e.jsFileLocation = e.jsFileLocation || getScriptLocation("themepunch.revolution.min.js"), e.jsFileLocation = e.jsFileLocation + e.extensions, e.scriptsneeded = getNeededScripts(e, t), e.curWinRange = 0, e.rtl = !0, e.navigation != undefined && e.navigation.touch != undefined && (e.navigation.touch.swipe_min_touches = e.navigation.touch.swipe_min_touches > 5 ? 1 : e.navigation.touch.swipe_min_touches), jQuery(this).on("scriptsloaded", function() {
                return e.modulesfailing ? (t.html('<div style="margin:auto;line-height:40px;font-size:14px;color:#fff;padding:15px;background:#e74c3c;margin:20px 0px;">!! Error at loading Slider Revolution 5.0 Extrensions.' + e.errorm + "</div>").show(), !1) : (_R.migration != undefined && (e = _R.migration(t, e)), punchgs.force3D = !0, "on" !== e.simplifyAll && punchgs.TweenLite.lagSmoothing(1e3, 16), prepareOptions(t, e), void initSlider(t, e)) }), t.data("opt", e), waitForScripts(t, e) }) }, revremoveslide: function(e) {
        return this.each(function() {
            var t = jQuery(this);
            if (t != undefined && t.length > 0 && jQuery("body").find("#" + t.attr("id")).length > 0) {
                var i = t.parent().find(".tp-bannertimer"),
                    a = i.data("opt");
                if (a && a.li.length > 0 && (e > 0 || e <= a.li.length)) {
                    var n = jQuery(a.li[e]),
                        r = n.data("index"),
                        o = !1;
                    a.slideamount = a.slideamount - 1, removeNavWithLiref(".tp-bullet", r, a), removeNavWithLiref(".tp-tab", r, a), removeNavWithLiref(".tp-thumb", r, a), n.hasClass("active-revslide") && (o = !0), n.remove(), a.li = removeArray(a.li, e), a.carousel && a.carousel.slides && (a.carousel.slides = removeArray(a.carousel.slides, e)), a.thumbs = removeArray(a.thumbs, e), _R.updateNavIndexes && _R.updateNavIndexes(a), o && t.revnext(), punchgs.TweenLite.set(a.li, { minWidth: "99%" }), punchgs.TweenLite.set(a.li, { minWidth: "100%" }) } } }) }, revaddcallback: function(e) {
        return this.each(function() {
            var t = jQuery(this);
            if (t != undefined && t.length > 0 && jQuery("body").find("#" + t.attr("id")).length > 0) {
                var i = t.parent().find(".tp-bannertimer"),
                    a = i.data("opt");
                a.callBackArray === undefined && (a.callBackArray = new Array), a.callBackArray.push(e) } }) }, revgetparallaxproc: function() {
        var e = jQuery(this);
        if (e != undefined && e.length > 0 && jQuery("body").find("#" + e.attr("id")).length > 0) {
            var t = e.parent().find(".tp-bannertimer"),
                i = t.data("opt");
            return i.scrollproc } }, revdebugmode: function() {
        return this.each(function() {
            var e = jQuery(this);
            if (e != undefined && e.length > 0 && jQuery("body").find("#" + e.attr("id")).length > 0) {
                var t = e.parent().find(".tp-bannertimer"),
                    i = t.data("opt");
                i.debugMode = !0, containerResized(e, i) } }) }, revscroll: function(e) {
        return this.each(function() {
            var t = jQuery(this);
            t != undefined && t.length > 0 && jQuery("body").find("#" + t.attr("id")).length > 0 && jQuery("body,html").animate({ scrollTop: t.offset().top + t.height() - e + "px" }, { duration: 400 }) }) }, revredraw: function(e) {
        return this.each(function() {
            var e = jQuery(this);
            if (e != undefined && e.length > 0 && jQuery("body").find("#" + e.attr("id")).length > 0) {
                var t = e.parent().find(".tp-bannertimer"),
                    i = t.data("opt");
                containerResized(e, i) } }) }, revkill: function(e) {
        var t = this,
            i = jQuery(this);
        if (punchgs.TweenLite.killDelayedCallsTo(_R.showHideNavElements), _R.endMoveCaption && n.endtimeouts && n.endtimeouts.length > 0 && jQuery.each(n.endtimeouts, function(e, t) { clearTimeout(t) }), i != undefined && i.length > 0 && jQuery("body").find("#" + i.attr("id")).length > 0) { i.data("conthover", 1), i.data("conthover-changed", 1), i.trigger("revolution.slide.onpause");
            var a = i.parent().find(".tp-bannertimer"),
                n = a.data("opt");
            n.tonpause = !0, i.trigger("stoptimer"), punchgs.TweenLite.killTweensOf(i.find("*"), !1), punchgs.TweenLite.killTweensOf(i, !1), i.unbind("hover, mouseover, mouseenter,mouseleave, resize");
            var r = "resize.revslider-" + i.attr("id");
            jQuery(window).off(r), i.find("*").each(function() {
                var e = jQuery(this);
                e.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"), e.off("on, hover, mouseenter,mouseleave,mouseover, resize"), e.data("mySplitText", null), e.data("ctl", null), e.data("tween") != undefined && e.data("tween").kill(), e.data("kenburn") != undefined && e.data("kenburn").kill(), e.data("timeline_out") != undefined && e.data("timeline_out").kill(), e.data("timeline") != undefined && e.data("timeline").kill(), e.remove(), e.empty(), e = null }), punchgs.TweenLite.killTweensOf(i.find("*"), !1), punchgs.TweenLite.killTweensOf(i, !1), a.remove();
            try { i.closest(".forcefullwidth_wrapper_tp_banner").remove() } catch (o) {}
            try { i.closest(".rev_slider_wrapper").remove() } catch (o) {}
            try { i.remove() } catch (o) {}
            return i.empty(), i.html(), i = null, n = null, delete t.c, delete t.opt, !0 }
        return !1 }, revpause: function() {
        return this.each(function() {
            var e = jQuery(this);
            if (e != undefined && e.length > 0 && jQuery("body").find("#" + e.attr("id")).length > 0) { e.data("conthover", 1), e.data("conthover-changed", 1), e.trigger("revolution.slide.onpause");
                var t = e.parent().find(".tp-bannertimer"),
                    i = t.data("opt");
                i.tonpause = !0, e.trigger("stoptimer") } }) }, revresume: function() {
        return this.each(function() {
            var e = jQuery(this);
            if (e != undefined && e.length > 0 && jQuery("body").find("#" + e.attr("id")).length > 0) { e.data("conthover", 0), e.data("conthover-changed", 1), e.trigger("revolution.slide.onresume");
                var t = e.parent().find(".tp-bannertimer"),
                    i = t.data("opt");
                i.tonpause = !1, e.trigger("starttimer") } }) }, revstart: function() {
        var e = jQuery(this);
        return e != undefined && e.length > 0 && jQuery("body").find("#" + e.attr("id")).length > 0 && e.data("opt") ? e.data("opt").sliderisrunning ? (console.log("Slider Is Running Already"), !1) : (runSlider(e, e.data("opt")), !0) : void 0 }, revnext: function() {
        return this.each(function() {
            var e = jQuery(this);
            if (e != undefined && e.length > 0 && jQuery("body").find("#" + e.attr("id")).length > 0) {
                var t = e.parent().find(".tp-bannertimer"),
                    i = t.data("opt");
                _R.callingNewSlide(i, e, 1) } }) }, revprev: function() {
        return this.each(function() {
            var e = jQuery(this);
            if (e != undefined && e.length > 0 && jQuery("body").find("#" + e.attr("id")).length > 0) {
                var t = e.parent().find(".tp-bannertimer"),
                    i = t.data("opt");
                _R.callingNewSlide(i, e, -1) } }) }, revmaxslide: function() {
        return jQuery(this).find(".tp-revslider-mainul >li").length }, revcurrentslide: function() {
        var e = jQuery(this);
        if (e != undefined && e.length > 0 && jQuery("body").find("#" + e.attr("id")).length > 0) {
            var t = e.parent().find(".tp-bannertimer"),
                i = t.data("opt");
            return parseInt(i.act, 0) + 1 } }, revlastslide: function() {
        return jQuery(this).find(".tp-revslider-mainul >li").length }, revshowslide: function(e) {
        return this.each(function() {
            var t = jQuery(this);
            if (t != undefined && t.length > 0 && jQuery("body").find("#" + t.attr("id")).length > 0) {
                var i = t.parent().find(".tp-bannertimer"),
                    a = i.data("opt");
                _R.callingNewSlide(a, t, "to" + (e - 1)) } }) }, revcallslidewithid: function(e) {
        return this.each(function() {
            var t = jQuery(this);
            if (t != undefined && t.length > 0 && jQuery("body").find("#" + t.attr("id")).length > 0) {
                var i = t.parent().find(".tp-bannertimer"),
                    a = i.data("opt");
                _R.callingNewSlide(a, t, e) } }) } });
    var _R = jQuery.fn.revolution;
    jQuery.extend(!0, _R, { simp: function(e, t, i) {
        var a = Math.abs(e) - Math.floor(Math.abs(e / t)) * t;
        return i ? a : 0 > e ? -1 * a : a }, iOSVersion: function() {
        var e = !1;
        return navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) ? navigator.userAgent.match(/OS 4_\d like Mac OS X/i) && (e = !0) : e = !1, e }, isIE: function(e, t) {
        var i = jQuery('<div style="display:none;"/>').appendTo(jQuery("body"));
        i.html("<!--[if " + (t || "") + " IE " + (e || "") + "]><a>&nbsp;</a><![endif]-->");
        var a = i.find("a").length;
        return i.remove(), a }, is_mobile: function() {
        var e = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos", , "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"],
            t = !1;
        for (var i in e) navigator.userAgent.split(e[i]).length > 1 && (t = !0);
        return t }, callBackHandling: function(e, t, i) {
        try { e.callBackArray && jQuery.each(e.callBackArray, function(e, a) { a && a.inmodule && a.inmodule === t && a.atposition && a.atposition === i && a.callback && a.callback.call() }) } catch (a) { console.log("Call Back Failed") } }, get_browser: function() {
        var e, t = navigator.appName,
            i = navigator.userAgent,
            a = i.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
        return a && null != (e = i.match(/version\/([\.\d]+)/i)) && (a[2] = e[1]), a = a ? [a[1], a[2]] : [t, navigator.appVersion, "-?"], a[0] }, get_browser_version: function() {
        var e, t = navigator.appName,
            i = navigator.userAgent,
            a = i.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
        return a && null != (e = i.match(/version\/([\.\d]+)/i)) && (a[2] = e[1]), a = a ? [a[1], a[2]] : [t, navigator.appVersion, "-?"], a[1] }, getHorizontalOffset: function(e, t) {
        var i = gWiderOut(e, ".outer-left"),
            a = gWiderOut(e, ".outer-right");
        switch (t) {
            case "left":
                return i;
            case "right":
                return a;
            case "both":
                return i + a } }, callingNewSlide: function(e, t, i) {
        var a = t.find(".next-revslide").length > 0 ? t.find(".next-revslide").index() : t.find(".processing-revslide").length > 0 ? t.find(".processing-revslide").index() : t.find(".active-revslide").index(),
            n = 0;
        t.find(".next-revslide").removeClass("next-revslide"), t.find(".active-revslide").hasClass("tp-invisible-slide") && (a = e.last_shown_slide), i && jQuery.isNumeric(i) || i.match(/to/g) ? (1 === i || -1 === i ? (n = a + i, n = 0 > n ? e.slideamount - 1 : n >= e.slideamount ? 0 : n) : (i = jQuery.isNumeric(i) ? i : parseInt(i.split("to")[1], 0), n = 0 > i ? 0 : i > e.slideamount - 1 ? e.slideamount - 1 : i), t.find(".tp-revslider-slidesli:eq(" + n + ")").addClass("next-revslide")) : i && t.find(".tp-revslider-slidesli").each(function() {
            var e = jQuery(this);
            e.data("index") === i && e.addClass("next-revslide") }), n = t.find(".next-revslide").index(), t.trigger("revolution.nextslide.waiting"), a === n && a === e.last_shown_slide || n !== a && -1 != n ? swapSlide(t, e) : t.find(".next-revslide").removeClass("next-revslide") }, slotSize: function(e, t) { t.slotw = Math.ceil(t.width / t.slots), "fullscreen" == t.sliderLayout ? t.sloth = Math.ceil(jQuery(window).height() / t.slots) : t.sloth = Math.ceil(t.height / t.slots), "on" == t.autoHeight && e !== undefined && "" !== e && (t.sloth = Math.ceil(e.height() / t.slots)) }, setSize: function(e) {
        var t = (e.top_outer || 0) + (e.bottom_outer || 0),
            i = parseInt(e.carousel.padding_top || 0, 0),
            a = parseInt(e.carousel.padding_bottom || 0, 0),
            n = e.gridheight[e.curWinRange];
        if (e.paddings = e.paddings === undefined ? { top: parseInt(e.c.parent().css("paddingTop"), 0) || 0, bottom: parseInt(e.c.parent().css("paddingBottom"), 0) || 0 } : e.paddings, n = n < e.minHeight ? e.minHeight : n, "fullwidth" == e.sliderLayout && "off" == e.autoHeight && punchgs.TweenLite.set(e.c, { maxHeight: n + "px" }), e.c.css({ marginTop: i, marginBottom: a }), e.width = e.ul.width(), e.height = e.ul.height(), setScale(e), e.height = Math.round(e.gridheight[e.curWinRange] * (e.width / e.gridwidth[e.curWinRange])), e.height > e.gridheight[e.curWinRange] && "on" != e.autoHeight && (e.height = e.gridheight[e.curWinRange]), "fullscreen" == e.sliderLayout || e.infullscreenmode) { e.height = e.bw * e.gridheight[e.curWinRange];
            var r = (e.c.parent().width(), jQuery(window).height());
            if (e.fullScreenOffsetContainer != undefined) {
                try {
                    var o = e.fullScreenOffsetContainer.split(",");
                    o && jQuery.each(o, function(e, t) { r = jQuery(t).length > 0 ? r - jQuery(t).outerHeight(!0) : r }) } catch (s) {}
                try { e.fullScreenOffset.split("%").length > 1 && e.fullScreenOffset != undefined && e.fullScreenOffset.length > 0 ? r -= jQuery(window).height() * parseInt(e.fullScreenOffset, 0) / 100 : e.fullScreenOffset != undefined && e.fullScreenOffset.length > 0 && (r -= parseInt(e.fullScreenOffset, 0)) } catch (s) {} }
            r = r < e.minHeight ? e.minHeight : r, r -= t, e.c.parent().height(r), e.c.closest(".rev_slider_wrapper").height(r), e.c.css({ height: "100%" }), e.height = r, e.minHeight != undefined && e.height < e.minHeight && (e.height = e.minHeight) } else e.minHeight != undefined && e.height < e.minHeight && (e.height = e.minHeight), e.c.height(e.height);
        var d = { height: i + a + t + e.height + e.paddings.top + e.paddings.bottom };
        e.c.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css(d), e.c.closest(".rev_slider_wrapper").css(d), setScale(e) }, enterInViewPort: function(e) { e.waitForCountDown && (countDown(e.c, e), e.waitForCountDown = !1), e.waitForFirstSlide && (swapSlide(e.c, e), e.waitForFirstSlide = !1), ("playing" == e.sliderlaststatus || e.sliderlaststatus == undefined) && e.c.trigger("starttimer"), e.lastplayedvideos != undefined && e.lastplayedvideos.length > 0 && jQuery.each(e.lastplayedvideos, function(t, i) { _R.playVideo(i, e) }) }, leaveViewPort: function(e) { e.sliderlaststatus = e.sliderstatus, e.c.trigger("stoptimer"), e.playingvideos != undefined && e.playingvideos.length > 0 && (e.lastplayedvideos = jQuery.extend(!0, [], e.playingvideos), e.playingvideos && jQuery.each(e.playingvideos, function(t, i) { e.leaveViewPortBasedStop = !0, _R.stopVideo && _R.stopVideo(i, e) })) }, unToggleState: function(e) { e != undefined && e.length > 0 && jQuery.each(e, function(e, t) { t.removeClass("rs-toggle-content-active") }) }, toggleState: function(e) { e != undefined && e.length > 0 && jQuery.each(e, function(e, t) { t.addClass("rs-toggle-content-active") }) }, lastToggleState: function(e) {
        var t = 0;
        return e != undefined && e.length > 0 && jQuery.each(e, function(e, i) { t = i.hasClass("rs-toggle-content-active") }), t } });
    var _ISM = _R.is_mobile(),
        removeArray = function(e, t) {
            var i = [];
            return jQuery.each(e, function(e, a) { e != t && i.push(a) }), i },
        removeNavWithLiref = function(e, t, i) { i.c.find(e).each(function() {
            var e = jQuery(this);
            e.data("liref") === t && e.remove() }) },
        lAjax = function(e, t) {
            return jQuery("body").data(e) ? !1 : t.filesystem ? (t.errorm === undefined && (t.errorm = "<br>Local Filesystem Detected !<br>Put this to your header:"), console.warn("Local Filesystem detected !"), t.errorm = t.errorm + '<br>&lt;script type="text/javascript" src="' + t.jsFileLocation + e + t.extensions_suffix + '"&gt;&lt;/script&gt;', console.warn(t.jsFileLocation + e + t.extensions_suffix + " could not be loaded !"), console.warn("Please use a local Server or work online or make sure that you load all needed Libraries manually in your Document."), console.log(" "), t.modulesfailing = !0, !1) : (jQuery.ajax({ url: t.jsFileLocation + e + t.extensions_suffix, dataType: "script", cache: !0, error: function(i) { console.warn("Slider Revolution 5.0 Error !"), console.error("Failure at Loading:" + e + t.extensions_suffix + " on Path:" + t.jsFileLocation), console.info(i) } }), void jQuery("body").data(e, !0)) },
        getNeededScripts = function(e, t) {
            var i = new Object,
                a = e.navigation;
            return i.kenburns = !1, i.parallax = !1, i.carousel = !1, i.navigation = !1, i.videos = !1, i.actions = !1, i.layeranim = !1, i.migration = !1, t.data("version") && t.data("version").toString().match(/5./gi) ? (t.find("img").each(function() { "on" == jQuery(this).data("kenburns") && (i.kenburns = !0) }), ("carousel" == e.sliderType || "on" == a.keyboardNavigation || "on" == a.mouseScrollNavigation || "on" == a.touch.touchenabled || a.arrows.enable || a.bullets.enable || a.thumbnails.enable || a.tabs.enable) && (i.navigation = !0), t.find(".tp-caption, .tp-static-layer, .rs-background-video-layer").each(function() {
                var e = jQuery(this);
                (e.data("ytid") != undefined || e.find("iframe").length > 0 && e.find("iframe").attr("src").toLowerCase().indexOf("youtube") > 0) && (i.videos = !0), (e.data("vimeoid") != undefined || e.find("iframe").length > 0 && e.find("iframe").attr("src").toLowerCase().indexOf("vimeo") > 0) && (i.videos = !0), e.data("actions") !== undefined && (i.actions = !0), i.layeranim = !0 }), t.find("li").each(function() { jQuery(this).data("link") && jQuery(this).data("link") != undefined && (i.layeranim = !0, i.actions = !0) }), !i.videos && (t.find(".rs-background-video-layer").length > 0 || t.find(".tp-videolayer").length > 0 || t.find(".tp-audiolayer") || t.find("iframe").length > 0 || t.find("video").length > 0) && (i.videos = !0), "carousel" == e.sliderType && (i.carousel = !0), ("off" !== e.parallax.type || e.viewPort.enable || "true" == e.viewPort.enable) && (i.parallax = !0)) : (i.kenburns = !0, i.parallax = !0, i.carousel = !1, i.navigation = !0, i.videos = !0, i.actions = !0, i.layeranim = !0, i.migration = !0), "hero" == e.sliderType && (i.carousel = !1, i.navigation = !1), window.location.href.match(/file:/gi) && (i.filesystem = !0, e.filesystem = !0), i.videos && "undefined" == typeof _R.isVideoPlaying && lAjax("revolution.extension.video", e), i.carousel && "undefined" == typeof _R.prepareCarousel && lAjax("revolution.extension.carousel", e), i.carousel || "undefined" != typeof _R.animateSlide || lAjax("revolution.extension.slideanims", e), i.actions && "undefined" == typeof _R.checkActions && lAjax("revolution.extension.actions", e), i.layeranim && "undefined" == typeof _R.handleStaticLayers && lAjax("revolution.extension.layeranimation", e), i.kenburns && "undefined" == typeof _R.stopKenBurn && lAjax("revolution.extension.kenburn", e), i.navigation && "undefined" == typeof _R.createNavigation && lAjax("revolution.extension.navigation", e), i.migration && "undefined" == typeof _R.migration && lAjax("revolution.extension.migration", e), i.parallax && "undefined" == typeof _R.checkForParallax && lAjax("revolution.extension.parallax", e), e.addons != undefined && e.addons.length > 0 && jQuery.each(e.addons, function(t, i) { "object" == typeof i && i.fileprefix != undefined && lAjax(i.fileprefix, e) }), i },
        waitForScripts = function(e, t) {
            var i = !0,
                a = t.scriptsneeded;
            t.addons != undefined && t.addons.length > 0 && jQuery.each(t.addons, function(e, t) { "object" == typeof t && t.init != undefined && _R[t.init] === undefined && (i = !1) }), a.filesystem || "undefined" != typeof punchgs && i && (!a.kenburns || a.kenburns && "undefined" != typeof _R.stopKenBurn) && (!a.navigation || a.navigation && "undefined" != typeof _R.createNavigation) && (!a.carousel || a.carousel && "undefined" != typeof _R.prepareCarousel) && (!a.videos || a.videos && "undefined" != typeof _R.resetVideo) && (!a.actions || a.actions && "undefined" != typeof _R.checkActions) && (!a.layeranim || a.layeranim && "undefined" != typeof _R.handleStaticLayers) && (!a.migration || a.migration && "undefined" != typeof _R.migration) && (!a.parallax || a.parallax && "undefined" != typeof _R.checkForParallax) && (a.carousel || !a.carousel && "undefined" != typeof _R.animateSlide) ? e.trigger("scriptsloaded") : setTimeout(function() { waitForScripts(e, t) }, 50) },
        getScriptLocation = function(e) {
            var t = new RegExp("themepunch.revolution.min.js", "gi"),
                i = "";
            return jQuery("script").each(function() {
                var e = jQuery(this).attr("src");
                e && e.match(t) && (i = e) }), i = i.replace("jquery.themepunch.revolution.min.js", ""), i = i.replace("jquery.themepunch.revolution.js", ""), i = i.split("?")[0] },
        setCurWinRange = function(e, t) {
            var i = 9999,
                a = 0,
                n = 0,
                r = 0,
                o = jQuery(window).width(),
                s = t && 9999 == e.responsiveLevels ? e.visibilityLevels : e.responsiveLevels;
            s && s.length && jQuery.each(s, function(e, t) { t > o && (0 == a || a > t) && (i = t, r = e, a = t), o > t && t > a && (a = t, n = e) }), i > a && (r = n), t ? e.forcedWinRange = r : e.curWinRange = r },
        prepareOptions = function(e, t) { t.carousel.maxVisibleItems = t.carousel.maxVisibleItems < 1 ? 999 : t.carousel.maxVisibleItems, t.carousel.vertical_align = "top" === t.carousel.vertical_align ? "0%" : "bottom" === t.carousel.vertical_align ? "100%" : "50%" },
        gWiderOut = function(e, t) {
            var i = 0;
            return e.find(t).each(function() {
                var e = jQuery(this);!e.hasClass("tp-forcenotvisible") && i < e.outerWidth() && (i = e.outerWidth()) }), i },
        initSlider = function(container, opt) {
            return container == undefined ? !1 : (container.data("aimg") != undefined && ("enabled" == container.data("aie8") && _R.isIE(8) || "enabled" == container.data("amobile") && _ISM) && container.html('<img class="tp-slider-alternative-image" src="' + container.data("aimg") + '">'), container.find(">ul").addClass("tp-revslider-mainul"), opt.c = container, opt.ul = container.find(".tp-revslider-mainul"), opt.ul.find(">li").each(function(e) {
                var t = jQuery(this); "on" == t.data("hideslideonmobile") && _ISM && t.remove(), (t.data("invisible") || t.data("invisible") === !0) && (t.addClass("tp-invisible-slide"), t.appendTo(opt.ul)) }), opt.addons != undefined && opt.addons.length > 0 && jQuery.each(opt.addons, function(i, obj) { "object" == typeof obj && obj.init != undefined && _R[obj.init](eval(obj.params)) }), opt.cid = container.attr("id"), opt.ul.css({ visibility: "visible" }), opt.slideamount = opt.ul.find(">li").not(".tp-invisible-slide").length, opt.slayers = container.find(".tp-static-layers"), void(1 != opt.waitForInit && (container.data("opt", opt), runSlider(container, opt)))) },
        runSlider = function(e, t) {
            if (t.sliderisrunning = !0, t.ul.find(">li").each(function(e) { jQuery(this).data("originalindex", e) }), "on" == t.shuffle) {
                var i = new Object,
                    a = t.ul.find(">li:first-child");
                i.fstransition = a.data("fstransition"), i.fsmasterspeed = a.data("fsmasterspeed"), i.fsslotamount = a.data("fsslotamount");
                for (var n = 0; n < t.slideamount; n++) {
                    var r = Math.round(Math.random() * t.slideamount);
                    t.ul.find(">li:eq(" + r + ")").prependTo(t.ul) }
                var o = t.ul.find(">li:first-child");
                o.data("fstransition", i.fstransition), o.data("fsmasterspeed", i.fsmasterspeed), o.data("fsslotamount", i.fsslotamount), t.li = t.ul.find(">li").not(".tp-invisible-slide") }
            if (t.allli = t.ul.find(">li"), t.li = t.ul.find(">li").not(".tp-invisible-slide"), t.inli = t.ul.find(">li.tp-invisible-slide"), t.thumbs = new Array, t.slots = 4, t.act = -1, t.firststart = 1, t.loadqueue = new Array, t.syncload = 0, t.conw = e.width(), t.conh = e.height(), t.responsiveLevels.length > 1 ? t.responsiveLevels[0] = 9999 : t.responsiveLevels = 9999, jQuery.each(t.allli, function(e, i) {
                    var i = jQuery(i),
                        a = i.find(".rev-slidebg") || i.find("img").first(),
                        n = 0;
                    i.addClass("tp-revslider-slidesli"), i.data("index") === undefined && i.data("index", "rs-" + Math.round(999999 * Math.random()));
                    var r = new Object;
                    r.params = new Array, r.id = i.data("index"), r.src = i.data("thumb") !== undefined ? i.data("thumb") : a.data("lazyload") !== undefined ? a.data("lazyload") : a.attr("src"), i.data("title") !== undefined && r.params.push({ from: RegExp("\\{\\{title\\}\\}", "g"), to: i.data("title") }), i.data("description") !== undefined && r.params.push({ from: RegExp("\\{\\{description\\}\\}", "g"), to: i.data("description") });
                    for (var n = 1; 10 >= n; n++) i.data("param" + n) !== undefined && r.params.push({ from: RegExp("\\{\\{param" + n + "\\}\\}", "g"), to: i.data("param" + n) });
                    if (t.thumbs.push(r), i.data("origindex", i.index()), i.data("link") != undefined) {
                        var o = i.data("link"),
                            s = i.data("target") || "_self",
                            d = "back" === i.data("slideindex") ? 0 : 60,
                            l = i.data("linktoslide"),
                            u = l;
                        l != undefined && "next" != l && "prev" != l && t.allli.each(function() {
                            var e = jQuery(this);
                            e.data("origindex") + 1 == u && (l = e.data("index")) }), "slide" != o && (l = "no");
                        var c = '<div class="tp-caption slidelink" style="cursor:pointer;width:100%;height:100%;z-index:' + d + ';" data-x="center" data-y="center" data-basealign="slide" ',
                            p = "scroll_under" === l ? '[{"event":"click","action":"scrollbelow","offset":"100px","delay":"0"}]' : "prev" === l ? '[{"event":"click","action":"jumptoslide","slide":"prev","delay":"0.2"}]' : "next" === l ? '[{"event":"click","action":"jumptoslide","slide":"next","delay":"0.2"}]' : '[{"event":"click","action":"jumptoslide","slide":"' + l + '","delay":"0.2"}]';
                        c = "no" == l ? c + ' data-start="0">' : c + "data-actions='" + p + '\' data-start="0">', c += '<a style="width:100%;height:100%;display:block"', c = "slide" != o ? c + ' target="' + s + '" href="' + o + '"' : c, c += '><span style="width:100%;height:100%;display:block"></span></a></div>', i.append(c) } }), t.rle = t.responsiveLevels.length || 1, t.gridwidth = cArray(t.gridwidth, t.rle), t.gridheight = cArray(t.gridheight, t.rle), "on" == t.simplifyAll && (_R.isIE(8) || _R.iOSVersion()) && (e.find(".tp-caption").each(function() {
                    var e = jQuery(this);
                    e.removeClass("customin customout").addClass("fadein fadeout"), e.data("splitin", ""), e.data("speed", 400) }), t.allli.each(function() {
                    var e = jQuery(this);
                    e.data("transition", "fade"), e.data("masterspeed", 500), e.data("slotamount", 1);
                    var t = e.find(".rev-slidebg") || e.find(">img").first();
                    t.data("kenburns", "off") })), t.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), t.autoHeight = "fullscreen" == t.sliderLayout ? "on" : t.autoHeight, "fullwidth" == t.sliderLayout && "off" == t.autoHeight && e.css({ maxHeight: t.gridheight[t.curWinRange] + "px" }), "auto" != t.sliderLayout && 0 == e.closest(".forcefullwidth_wrapper_tp_banner").length && ("fullscreen" !== t.sliderLayout || "on" != t.fullScreenAutoWidth)) {
                var s = e.parent(),
                    d = s.css("marginBottom"),
                    l = s.css("marginTop"),
                    u = e.attr("id") + "_forcefullwidth";
                d = d === undefined ? 0 : d, l = l === undefined ? 0 : l, s.wrap('<div class="forcefullwidth_wrapper_tp_banner" id="' + u + '" style="position:relative;width:100%;height:auto;margin-top:' + l + ";margin-bottom:" + d + '"></div>'), e.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:' + e.height() + 'px"></div>'), e.parent().css({ marginTop: "0px", marginBottom: "0px" }), e.parent().css({ position: "absolute" }) }
            if (t.shadow !== undefined && t.shadow > 0 && (e.parent().addClass("tp-shadow" + t.shadow), e.parent().append('<div class="tp-shadowcover"></div>'), e.parent().find(".tp-shadowcover").css({ backgroundColor: e.parent().css("backgroundColor"), backgroundImage: e.parent().css("backgroundImage") })), setCurWinRange(t), setCurWinRange(t, !0), !e.hasClass("revslider-initialised")) { e.addClass("revslider-initialised"), e.addClass("tp-simpleresponsive"), e.attr("id") == undefined && e.attr("id", "revslider-" + Math.round(1e3 * Math.random() + 5)), t.firefox13 = !1, t.ie = !jQuery.support.opacity, t.ie9 = 9 == document.documentMode, t.origcd = t.delay;
                var c = jQuery.fn.jquery.split("."),
                    p = parseFloat(c[0]),
                    f = parseFloat(c[1]);
                parseFloat(c[2] || "0");
                1 == p && 7 > f && e.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + c + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"), p > 1 && (t.ie = !1);
                var h = new Object;
                h.addedyt = 0, h.addedvim = 0, h.addedvid = 0, e.find(".tp-caption, .rs-background-video-layer").each(function(e) {
                    var i = jQuery(this),
                        a = i.data("autoplayonlyfirsttime"),
                        n = i.data("autoplay"),
                        r = i.hasClass("tp-audiolayer"),
                        o = i.data("videoloop");
                    i.hasClass("tp-static-layer") && _R.handleStaticLayers && _R.handleStaticLayers(i, t);
                    var s = i.data("noposteronmobile") || i.data("noPosterOnMobile") || i.data("posteronmobile") || i.data("posterOnMobile") || i.data("posterOnMObile");
                    i.data("noposteronmobile", s);
                    var d = 0;
                    if (i.find("iframe").each(function() { punchgs.TweenLite.set(jQuery(this), { autoAlpha: 0 }), d++ }), d > 0 && i.data("iframes", !0), i.hasClass("tp-caption")) {
                        var l = i.hasClass("slidelink") ? "width:100% !important;height:100% !important;" : "";
                        i.wrap('<div class="tp-parallax-wrap" style="' + l + 'position:absolute;visibility:hidden"><div class="tp-loop-wrap" style="' + l + 'position:absolute;"><div class="tp-mask-wrap" style="' + l + 'position:absolute" ></div></div></div>');
                        var u = ["pendulum", "rotate", "slideloop", "pulse", "wave"],
                            c = i.closest(".tp-loop-wrap");
                        jQuery.each(u, function(e, t) {
                            var a = i.find(".rs-" + t),
                                n = a.data() || ""; "" != n && (c.data(n), c.addClass("rs-" + t), a.children(0).unwrap(), i.data("loopanimation", "on")) }), punchgs.TweenLite.set(i, { visibility: "hidden" }) }
                    var p = i.data("actions");
                    p !== undefined && _R.checkActions(i, t, p), checkHoverDependencies(i, t), _R.checkVideoApis && (h = _R.checkVideoApis(i, t, h)), _ISM && ((1 == a || "true" == a) && (i.data("autoplayonlyfirsttime", "false"), a = !1), (1 == n || "true" == n || "on" == n || "1sttime" == n) && (i.data("autoplay", "off"), n = "off")), i.data("videoloop", o), r || 1 != a && "true" != a && "1sttime" != n || "loopandnoslidestop" == o || i.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-once"), r || 1 != n && "true" != n && "on" != n && "no1sttime" != n || "loopandnoslidestop" == o || i.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-always") }), e.hover(function() { e.trigger("tp-mouseenter"), t.overcontainer = !0 }, function() { e.trigger("tp-mouseleft"), t.overcontainer = !1 }), e.on("mouseover", function() { e.trigger("tp-mouseover"), t.overcontainer = !0 }), e.find(".tp-caption video").each(function(e) {
                    var t = jQuery(this);
                    t.removeClass("video-js vjs-default-skin"), t.attr("preload", ""), t.css({ display: "none" }) }), "standard" !== t.sliderType && (t.lazyType = "all"), loadImages(e.find(".tp-static-layers"), t, 0, !0), waitForCurrentImages(e.find(".tp-static-layers"), t, function() { e.find(".tp-static-layers img").each(function() {
                    var e = jQuery(this),
                        i = e.data("lazyload") != undefined ? e.data("lazyload") : e.attr("src"),
                        a = getLoadObj(t, i);
                    e.attr("src", a.src) }) }), t.allli.each(function(e) {
                    var i = jQuery(this);
                    ("all" == t.lazyType || "smart" == t.lazyType && (0 == e || 1 == e || e == t.slideamount || e == t.slideamount - 1)) && (loadImages(i, t, e), waitForCurrentImages(i, t, function() { "carousel" == t.sliderType && punchgs.TweenLite.to(i, 1, { autoAlpha: 1, ease: punchgs.Power3.easeInOut }) })) });
                var g = getUrlVars("#")[0];
                if (g.length < 9 && g.split("slide").length > 1) {
                    var v = parseInt(g.split("slide")[1], 0);
                    1 > v && (v = 1), v > t.slideamount && (v = t.slideamount), t.startWithSlide = v - 1 }
                e.append('<div class="tp-loader ' + t.spinner + '"><div class="dot1"></div><div class="dot2"></div><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'), 0 === e.find(".tp-bannertimer").length && e.append('<div class="tp-bannertimer" style="visibility:hidden"></div>'), e.find(".tp-bannertimer").css({ width: "0%" }), e.find(".tp-bannertimer").data("opt", t), t.ul.css({ display: "block" }), prepareSlides(e, t), "off" !== t.parallax.type && _R.checkForParallax && _R.checkForParallax(e, t), _R.setSize(t), "hero" !== t.sliderType && _R.createNavigation && _R.createNavigation(e, t), _R.resizeThumbsTabs && _R.resizeThumbsTabs && _R.resizeThumbsTabs(t), contWidthManager(t);
                var m = t.viewPort;
                t.inviewport = !1, m != undefined && m.enable && (jQuery.isNumeric(m.visible_area) || -1 !== m.visible_area.indexOf("%") && (m.visible_area = parseInt(m.visible_area) / 100), _R.scrollTicker && _R.scrollTicker(t, e)), setTimeout(function() { "carousel" == t.sliderType && _R.prepareCarousel && _R.prepareCarousel(t), !m.enable || m.enable && t.inviewport || m.enable && !t.inviewport && "wait" == !m.outof ? swapSlide(e, t) : t.waitForFirstSlide = !0, _R.manageNavigation && _R.manageNavigation(t), t.slideamount > 1 && (!m.enable || m.enable && t.inviewport ? countDown(e, t) : t.waitForCountDown = !0), setTimeout(function() { e.trigger("revolution.slide.onloaded") }, 100) }, t.startDelay), t.startDelay = 0, jQuery("body").data("rs-fullScreenMode", !1), jQuery(window).on("mozfullscreenchange webkitfullscreenchange fullscreenchange", function() { jQuery("body").data("rs-fullScreenMode", !jQuery("body").data("rs-fullScreenMode")), jQuery("body").data("rs-fullScreenMode") && setTimeout(function() { jQuery(window).trigger("resize") }, 200) });
                var y = "resize.revslider-" + e.attr("id");
                jQuery(window).on(y, function() {
                    if (e == undefined) return !1;
                    0 != jQuery("body").find(e) && contWidthManager(t);
                    var i = !1;
                    if ("fullscreen" == t.sliderLayout) {
                        var a = jQuery(window).height(); "mobile" == t.fallbacks.ignoreHeightChanges && _ISM || "always" == t.fallbacks.ignoreHeightChanges ? (t.fallbacks.ignoreHeightChangesSize = t.fallbacks.ignoreHeightChangesSize == undefined ? 0 : t.fallbacks.ignoreHeightChangesSize, i = a != t.lastwindowheight && Math.abs(a - t.lastwindowheight) > t.fallbacks.ignoreHeightChangesSize) : i = a != t.lastwindowheight }(e.outerWidth(!0) != t.width || e.is(":hidden") || i) && (t.lastwindowheight = jQuery(window).height(), containerResized(e, t)) }), hideSliderUnder(e, t), contWidthManager(t), t.fallbacks.disableFocusListener || "true" == t.fallbacks.disableFocusListener || t.fallbacks.disableFocusListener === !0 || tabBlurringCheck(e, t) } },
        cArray = function(e, t) {
            if (!jQuery.isArray(e)) {
                var i = e;
                e = new Array, e.push(i) }
            if (e.length < t)
                for (var i = e[e.length - 1], a = 0; a < t - e.length + 2; a++) e.push(i);
            return e },
        checkHoverDependencies = function(e, t) { "sliderenter" === e.data("start") && (t.layersonhover === undefined && (t.c.on("tp-mouseenter", function() { t.layersonhover && jQuery.each(t.layersonhover, function(e, i) { i.data("animdirection", "in");
            var a = i.data("timeline_out"),
                n = "carousel" === t.sliderType ? 0 : t.width / 2 - t.gridwidth[t.curWinRange] * t.bw / 2,
                r = 0,
                o = i.closest(".tp-revslider-slidesli"),
                s = i.closest(".tp-static-layers");
            if (o.length > 0 && o.hasClass("active-revslide") || o.hasClass("processing-revslide") || s.length > 0) { a != undefined && (a.pause(0), a.kill()), _R.animateSingleCaption(i, t, n, r, 0, !1, !0);
                var d = i.data("timeline");
                i.data("triggerstate", "on"), d.play(0) } }) }), t.c.on("tp-mouseleft", function() { t.layersonhover && jQuery.each(t.layersonhover, function(e, i) { i.data("animdirection", "out"), i.data("triggered", !0), i.data("triggerstate", "off"), _R.stopVideo && _R.stopVideo(i, t), _R.endMoveCaption && _R.endMoveCaption(i, null, null, t) }) }), t.layersonhover = new Array), t.layersonhover.push(e)) },
        contWidthManager = function(e) {
            var t = _R.getHorizontalOffset(e.c, "left");
            if ("auto" == e.sliderLayout || "fullscreen" === e.sliderLayout && "on" == e.fullScreenAutoWidth) "fullscreen" == e.sliderLayout && "on" == e.fullScreenAutoWidth ? punchgs.TweenLite.set(e.ul, { left: 0, width: e.c.width() }) : punchgs.TweenLite.set(e.ul, { left: t, width: e.c.width() - _R.getHorizontalOffset(e.c, "both") });
            else {
                var i = Math.ceil(e.c.closest(".forcefullwidth_wrapper_tp_banner").offset().left - t);
                punchgs.TweenLite.set(e.c.parent(), { left: 0 - i + "px", width: jQuery(window).width() - _R.getHorizontalOffset(e.c, "both") }) }
            e.slayers && "fullwidth" != e.sliderLayout && "fullscreen" != e.sliderLayout && punchgs.TweenLite.set(e.slayers, { left: t }) },
        cv = function(e, t) {
            return e === undefined ? t : e },
        hideSliderUnder = function(e, t, i) {
            var a = e.parent();
            jQuery(window).width() < t.hideSliderAtLimit ? (e.trigger("stoptimer"), "none" != a.css("display") && a.data("olddisplay", a.css("display")), a.css({ display: "none" })) : e.is(":hidden") && i && (a.data("olddisplay") != undefined && "undefined" != a.data("olddisplay") && "none" != a.data("olddisplay") ? a.css({ display: a.data("olddisplay") }) : a.css({ display: "block" }), e.trigger("restarttimer"), setTimeout(function() { containerResized(e, t) }, 150)), _R.hideUnHideNav && _R.hideUnHideNav(t) },
        containerResized = function(e, t) {
            if (1 == t.infullscreenmode && (t.minHeight = jQuery(window).height()), setCurWinRange(t), setCurWinRange(t, !0), !_R.resizeThumbsTabs || _R.resizeThumbsTabs(t) === !0) {
                if (hideSliderUnder(e, t, !0), contWidthManager(t), "carousel" == t.sliderType && _R.prepareCarousel(t, !0), e === undefined) return !1;
                _R.setSize(t), t.conw = t.c.width(), t.conh = t.infullscreenmode ? t.minHeight : t.c.height();
                var i = e.find(".active-revslide .slotholder"),
                    a = e.find(".processing-revslide .slotholder");
                removeSlots(e, t, e, 2), "standard" === t.sliderType && (punchgs.TweenLite.set(a.find(".defaultimg"), { opacity: 0 }), i.find(".defaultimg").css({ opacity: 1 })), "carousel" == t.sliderType && t.lastconw != t.conw && (clearTimeout(t.pcartimer), t.pcartimer = setTimeout(function() { _R.prepareCarousel(t, !0) }, 100), t.lastconw = t.conw), _R.manageNavigation && _R.manageNavigation(t), _R.animateTheCaptions && _R.animateTheCaptions(e.find(".active-revslide"), t, !0), "on" == a.data("kenburns") && _R.startKenBurn(a, t, a.data("kbtl").progress()), "on" == i.data("kenburns") && _R.startKenBurn(i, t, i.data("kbtl").progress()), _R.animateTheCaptions && _R.animateTheCaptions(a.closest("li"), t, !0), _R.manageNavigation && _R.manageNavigation(t) } },
        setScale = function(e) { e.bw = e.width / e.gridwidth[e.curWinRange], e.bh = e.height / e.gridheight[e.curWinRange], e.bh > e.bw ? e.bh = e.bw : e.bw = e.bh, (e.bh > 1 || e.bw > 1) && (e.bw = 1, e.bh = 1) },
        prepareSlides = function(e, t) {
            if (e.find(".tp-caption").each(function() {
                    var e = jQuery(this);
                    e.data("transition") !== undefined && e.addClass(e.data("transition")) }), t.ul.css({ overflow: "hidden", width: "100%", height: "100%", maxHeight: e.parent().css("maxHeight") }), "on" == t.autoHeight && (t.ul.css({ overflow: "hidden", width: "100%", height: "100%", maxHeight: "none" }), e.css({ maxHeight: "none" }), e.parent().css({ maxHeight: "none" })), t.allli.each(function(e) {
                    var i = jQuery(this),
                        a = i.data("originalindex");
                    (t.startWithSlide != undefined && a == t.startWithSlide || t.startWithSlide === undefined && 0 == e) && i.addClass("next-revslide"), i.css({ width: "100%", height: "100%", overflow: "hidden" }) }), "carousel" === t.sliderType) { t.ul.css({ overflow: "visible" }).wrap('<div class="tp-carousel-wrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden;"></div>');
                var i = '<div style="clear:both;display:block;width:100%;height:1px;position:relative;margin-bottom:-1px"></div>';
                t.c.parent().prepend(i), t.c.parent().append(i), _R.prepareCarousel(t) }
            e.parent().css({ overflow: "visible" }), t.allli.find(">img").each(function(e) {
                var i = jQuery(this),
                    a = i.closest("li").find(".rs-background-video-layer");
                a.addClass("defaultvid").css({ zIndex: 30 }), i.addClass("defaultimg"), "on" == t.fallbacks.panZoomDisableOnMobile && _ISM && (i.data("kenburns", "off"), i.data("bgfit", "cover")), i.wrap('<div class="slotholder" style="position:absolute; top:0px; left:0px; z-index:0;width:100%;height:100%;"></div>'), a.appendTo(i.closest("li").find(".slotholder"));
                var n = i.data();
                i.closest(".slotholder").data(n), a.length > 0 && n.bgparallax != undefined && a.data("bgparallax", n.bgparallax), "none" != t.dottedOverlay && t.dottedOverlay != undefined && i.closest(".slotholder").append('<div class="tp-dottedoverlay ' + t.dottedOverlay + '"></div>');
                var r = i.attr("src");
                n.src = r, n.bgfit = n.bgfit || "cover", n.bgrepeat = n.bgrepeat || "no-repeat", n.bgposition = n.bgposition || "center center";
                var o = i.closest(".slotholder");
                i.parent().append('<div class="tp-bgimg defaultimg" style="background-color:' + i.css("backgroundColor") + ";background-repeat:" + n.bgrepeat + ";background-image:url(" + r + ");background-size:" + n.bgfit + ";background-position:" + n.bgposition + ';width:100%;height:100%;"></div>');
                var s = document.createComment("Runtime Modification - Img tag is Still Available for SEO Goals in Source - " + i.get(0).outerHTML);
                i.replaceWith(s), i = o.find(".tp-bgimg"), i.data(n), i.attr("src", r), ("standard" === t.sliderType || "undefined" === t.sliderType) && i.css({ opacity: 0 }) }) },
        removeSlots = function(e, t, i, a) { t.removePrepare = t.removePrepare + a, i.find(".slot, .slot-circle-wrapper").each(function() { jQuery(this).remove() }), t.transition = 0, t.removePrepare = 0 },
        cutParams = function(e) {
            var t = e;
            return e != undefined && e.length > 0 && (t = e.split("?")[0]), t },
        relativeRedir = function(e) {
            return location.pathname.replace(/(.*)\/[^\/]*/, "$1/" + e) },
        abstorel = function(e, t) {
            var i = e.split("/"),
                a = t.split("/");
            i.pop();
            for (var n = 0; n < a.length; n++) "." != a[n] && (".." == a[n] ? i.pop() : i.push(a[n]));
            return i.join("/") },
        imgLoaded = function(e, t, i) { t.syncload--, t.loadqueue && jQuery.each(t.loadqueue, function(t, a) {
            var n = a.src.replace(/\.\.\/\.\.\//gi, ""),
                r = self.location.href,
                o = document.location.origin,
                s = r.substring(0, r.length - 1) + "/" + n,
                d = o + "/" + n,
                l = abstorel(self.location.href, a.src);
            r = r.substring(0, r.length - 1) + n, o += n, (cutParams(o) === cutParams(decodeURIComponent(e.src)) || cutParams(r) === cutParams(decodeURIComponent(e.src)) || cutParams(l) === cutParams(decodeURIComponent(e.src)) || cutParams(d) === cutParams(decodeURIComponent(e.src)) || cutParams(s) === cutParams(decodeURIComponent(e.src)) || cutParams(a.src) === cutParams(decodeURIComponent(e.src)) || cutParams(a.src).replace(/^.*\/\/[^\/]+/, "") === cutParams(decodeURIComponent(e.src)).replace(/^.*\/\/[^\/]+/, "") || "file://" === window.location.origin && cutParams(e.src).match(new RegExp(n))) && (a.progress = i, a.width = e.width, a.height = e.height) }), progressImageLoad(t) },
        progressImageLoad = function(e) { 3 != e.syncload && e.loadqueue && jQuery.each(e.loadqueue, function(t, i) {
            if (i.progress.match(/prepared/g) && e.syncload <= 3) {
                if (e.syncload++, "img" == i.type) {
                    var a = new Image;
                    a.onload = function() { imgLoaded(this, e, "loaded"), i.error = !1 }, a.onerror = function() { imgLoaded(this, e, "failed"), i.error = !0 }, a.src = i.src } else jQuery.get(i.src, function(t) { i.innerHTML = (new XMLSerializer).serializeToString(t.documentElement), i.progress = "loaded", e.syncload--, progressImageLoad(e) }).fail(function() { i.progress = "failed", e.syncload--, progressImageLoad(e) });
                i.progress = "inload" } }) },
        addToLoadQueue = function(e, t, i, a, n) {
            var r = !1;
            if (t.loadqueue && jQuery.each(t.loadqueue, function(t, i) { i.src === e && (r = !0) }), !r) {
                var o = new Object;
                o.src = e, o.starttoload = jQuery.now(), o.type = a || "img", o.prio = i, o.progress = "prepared", o["static"] = n, t.loadqueue.push(o) } },
        loadImages = function(e, t, i, a) { e.find("img,.defaultimg, .tp-svg-layer").each(function() {
            var e = jQuery(this),
                n = e.data("lazyload") !== undefined && "undefined" !== e.data("lazyload") ? e.data("lazyload") : e.data("svg_src") != undefined ? e.data("svg_src") : e.attr("src"),
                r = e.data("svg_src") != undefined ? "svg" : "img";
            e.data("start-to-load", jQuery.now()), addToLoadQueue(n, t, i, r, a) }), progressImageLoad(t) },
        getLoadObj = function(e, t) {
            var i = new Object;
            return e.loadqueue && jQuery.each(e.loadqueue, function(e, a) { a.src == t && (i = a) }), i },
        waitForCurrentImages = function(e, t, i) {
            var a = !1;
            e.find("img,.defaultimg, .tp-svg-layer").each(function() {
                var i = jQuery(this),
                    n = i.data("lazyload") != undefined ? i.data("lazyload") : i.data("svg_src") != undefined ? i.data("svg_src") : i.attr("src"),
                    r = getLoadObj(t, n);
                if (i.data("loaded") === undefined && r !== undefined && r.progress && r.progress.match(/loaded/g)) {
                    if (i.attr("src", r.src), "img" == r.type)
                        if (i.hasClass("defaultimg")) _R.isIE(8) ? defimg.attr("src", r.src) : i.css({ backgroundImage: 'url("' + r.src + '")' }), e.data("owidth", r.width), e.data("oheight", r.height), e.find(".slotholder").data("owidth", r.width), e.find(".slotholder").data("oheight", r.height);
                        else {
                            var o = i.data("ww"),
                                s = i.data("hh");
                            i.data("owidth", r.width), i.data("oheight", r.height), o = o == undefined || "auto" == o || "" == o ? r.width : o, s = s == undefined || "auto" == s || "" == s ? r.height : s, i.data("ww", o), i.data("hh", s) }
                    else "svg" == r.type && "loaded" == r.progress && (i.append('<div class="tp-svg-innercontainer"></div>'), i.find(".tp-svg-innercontainer").append(r.innerHTML));
                    i.data("loaded", !0) }
                if (r && r.progress && r.progress.match(/inprogress|inload|prepared/g) && (!r.error && jQuery.now() - i.data("start-to-load") < 5e3 ? a = !0 : (r.progress = "failed", r.reported_img || (r.reported_img = !0, console.warn(n + "  Could not be loaded !")))), 1 == t.youtubeapineeded && (!window.YT || YT.Player == undefined) && (a = !0, jQuery.now() - t.youtubestarttime > 5e3 && 1 != t.youtubewarning)) { t.youtubewarning = !0;
                    var d = "YouTube Api Could not be loaded !"; "https:" === location.protocol && (d += " Please Check and Renew SSL Certificate !"), console.error(d), t.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>' + d + "</strong></div>") }
                if (1 == t.vimeoapineeded && !window.Froogaloop && (a = !0, jQuery.now() - t.vimeostarttime > 5e3 && 1 != t.vimeowarning)) { t.vimeowarning = !0;
                    var d = "Vimeo Froogaloop Api Could not be loaded !"; "https:" === location.protocol && (d += " Please Check and Renew SSL Certificate !"), console.error(d), t.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>' + d + "</strong></div>") } }), !_ISM && t.audioqueue && t.audioqueue.length > 0 && jQuery.each(t.audioqueue, function(e, t) { t.status && "prepared" === t.status && jQuery.now() - t.start < t.waittime && (a = !0) }), jQuery.each(t.loadqueue, function(e, t) { t["static"] !== !0 || "loaded" == t.progress && "failed" !== t.progress || ("failed" == t.progress ? t.reported || (t.reported = !0, console.warn("Static Image " + t.src + "  Could not be loaded in time. Error Exists:" + t.error)) : !t.error && jQuery.now() - t.starttoload < 5e3 ? a = !0 : t.reported || (t.reported = !0, console.warn("Static Image " + t.src + "  Could not be loaded within 5s! Error Exists:" + t.error))) }), a ? setTimeout(function() { waitForCurrentImages(e, t, i) }, 19) : setTimeout(i, 19) },
        swapSlide = function(e, t) {
            if (clearTimeout(t.waitWithSwapSlide), e.find(".processing-revslide").length > 0) return t.waitWithSwapSlide = setTimeout(function() { swapSlide(e, t) }, 150), !1;
            var i = e.find(".active-revslide"),
                a = e.find(".next-revslide"),
                n = a.find(".defaultimg");
            return a.index() === i.index() ? (a.removeClass("next-revslide"), !1) : (a.removeClass("next-revslide").addClass("processing-revslide"), a.data("slide_on_focus_amount", a.data("slide_on_focus_amount") + 1 || 1), "on" == t.stopLoop && a.index() == t.lastslidetoshow - 1 && (e.find(".tp-bannertimer").css({ visibility: "hidden" }), e.trigger("revolution.slide.onstop"), t.noloopanymore = 1), a.index() === t.slideamount - 1 && (t.looptogo = t.looptogo - 1, t.looptogo <= 0 && (t.stopLoop = "on")), t.tonpause = !0, e.trigger("stoptimer"), t.cd = 0, "off" === t.spinner ? e.find(".tp-loader").css({ display: "none" }) : e.find(".tp-loader").css({ display: "block" }), loadImages(a, t, 1), _R.preLoadAudio && _R.preLoadAudio(a, t, 1), void waitForCurrentImages(a, t, function() { a.find(".rs-background-video-layer").each(function() {
                var e = jQuery(this);
                e.hasClass("HasListener") || (e.data("bgvideo", 1), _R.manageVideoLayer && _R.manageVideoLayer(e, t)), 0 == e.find(".rs-fullvideo-cover").length && e.append('<div class="rs-fullvideo-cover"></div>') }), swapSlideProgress(t, n, e) })) },
        swapSlideProgress = function(e, t, i) {
            var a = i.find(".active-revslide"),
                n = i.find(".processing-revslide"),
                r = a.find(".slotholder"),
                o = n.find(".slotholder");
            e.tonpause = !1, e.cd = 0, i.find(".tp-loader").css({ display: "none" }), _R.setSize(e), _R.slotSize(t, e), _R.manageNavigation && _R.manageNavigation(e);
            var s = {};
            s.nextslide = n, s.currentslide = a, i.trigger("revolution.slide.onbeforeswap", s), e.transition = 1, e.videoplaying = !1, n.data("delay") != undefined ? (e.cd = 0, e.delay = n.data("delay")) : e.delay = e.origcd, "true" == n.data("ssop") || n.data("ssop") === !0 ? e.ssop = !0 : e.ssop = !1, i.trigger("nulltimer");
            var d = a.index(),
                l = n.index();
            e.sdir = d > l ? 1 : 0, "arrow" == e.sc_indicator && (0 == d && l == e.slideamount - 1 && (e.sdir = 1), d == e.slideamount - 1 && 0 == l && (e.sdir = 0)), e.lsdir = e.lsdir === undefined ? e.sdir : e.lsdir, e.dirc = e.lsdir != e.sdir, e.lsdir = e.sdir, a.index() != n.index() && 1 != e.firststart && _R.removeTheCaptions && _R.removeTheCaptions(a, e), n.hasClass("rs-pause-timer-once") || n.hasClass("rs-pause-timer-always") ? e.videoplaying = !0 : i.trigger("restarttimer"), n.removeClass("rs-pause-timer-once");
            var u, c;
            if ("carousel" == e.sliderType) c = new punchgs.TimelineLite, _R.prepareCarousel(e, c), letItFree(i, e, o, r, n, a, c), e.transition = 0, e.firststart = 0;
            else { c = new punchgs.TimelineLite({ onComplete: function() { letItFree(i, e, o, r, n, a, c) } }), c.add(punchgs.TweenLite.set(o.find(".defaultimg"), { opacity: 0 })), c.pause(), 1 == e.firststart && (punchgs.TweenLite.set(a, { autoAlpha: 0 }), e.firststart = 0), punchgs.TweenLite.set(a, { zIndex: 18 }), punchgs.TweenLite.set(n, { autoAlpha: 0, zIndex: 20 }), "prepared" == n.data("differentissplayed") && (n.data("differentissplayed", "done"), n.data("transition", n.data("savedtransition")), n.data("slotamount", n.data("savedslotamount")), n.data("masterspeed", n.data("savedmasterspeed"))), n.data("fstransition") != undefined && "done" != n.data("differentissplayed") && (n.data("savedtransition", n.data("transition")), n.data("savedslotamount", n.data("slotamount")), n.data("savedmasterspeed", n.data("masterspeed")), n.data("transition", n.data("fstransition")), n.data("slotamount", n.data("fsslotamount")), n.data("masterspeed", n.data("fsmasterspeed")), n.data("differentissplayed", "prepared")), n.data("transition") == undefined && n.data("transition", "random"), u = 0;
                var p = n.data("transition") !== undefined ? n.data("transition").split(",") : "fade",
                    f = n.data("nexttransid") == undefined ? -1 : n.data("nexttransid"); "on" == n.data("randomtransition") ? f = Math.round(Math.random() * p.length) : f += 1, f == p.length && (f = 0), n.data("nexttransid", f);
                var h = p[f];
                e.ie && ("boxfade" == h && (h = "boxslide"), "slotfade-vertical" == h && (h = "slotzoom-vertical"), "slotfade-horizontal" == h && (h = "slotzoom-horizontal")), _R.isIE(8) && (h = 11), c = _R.animateSlide(u, h, i, e, n, a, o, r, c), "on" == o.data("kenburns") && (_R.startKenBurn(o, e), c.add(punchgs.TweenLite.set(o, { autoAlpha: 0 }))), c.pause() }
            _R.scrollHandling && (_R.scrollHandling(e, !0), c.eventCallback("onUpdate", function() { _R.scrollHandling(e, !0) })), "off" != e.parallax.type && e.parallax.firstgo == undefined && _R.scrollHandling && (e.parallax.firstgo = !0, e.lastscrolltop = -999, _R.scrollHandling(e, !0), setTimeout(function() { e.lastscrolltop = -999, _R.scrollHandling(e, !0) }, 210), setTimeout(function() { e.lastscrolltop = -999, _R.scrollHandling(e, !0) }, 420)), _R.animateTheCaptions ? _R.animateTheCaptions(n, e, null, c) : c != undefined && setTimeout(function() { c.resume() }, 30), punchgs.TweenLite.to(n, .001, { autoAlpha: 1 }) },
        letItFree = function(e, t, i, a, n, r, o) { "carousel" === t.sliderType || (t.removePrepare = 0, punchgs.TweenLite.to(i.find(".defaultimg"), .001, { zIndex: 20, autoAlpha: 1, onComplete: function() { removeSlots(e, t, n, 1) } }), n.index() != r.index() && punchgs.TweenLite.to(r, .2, { zIndex: 18, autoAlpha: 0, onComplete: function() { removeSlots(e, t, r, 1) } })), e.find(".active-revslide").removeClass("active-revslide"), e.find(".processing-revslide").removeClass("processing-revslide").addClass("active-revslide"), t.act = n.index(), t.c.attr("data-slideactive", e.find(".active-revslide").data("index")), ("scroll" == t.parallax.type || "scroll+mouse" == t.parallax.type || "mouse+scroll" == t.parallax.type) && (t.lastscrolltop = -999, _R.scrollHandling(t)), o.clear(), a.data("kbtl") != undefined && (a.data("kbtl").reverse(), a.data("kbtl").timeScale(25)), "on" == i.data("kenburns") && (i.data("kbtl") != undefined ? (i.data("kbtl").timeScale(1), i.data("kbtl").play()) : _R.startKenBurn(i, t)), n.find(".rs-background-video-layer").each(function(e) {
            if (_ISM) return !1;
            var i = jQuery(this);
            _R.resetVideo(i, t), punchgs.TweenLite.fromTo(i, 1, { autoAlpha: 0 }, { autoAlpha: 1, ease: punchgs.Power3.easeInOut, delay: .2, onComplete: function() { _R.animcompleted && _R.animcompleted(i, t) } }) }), r.find(".rs-background-video-layer").each(function(e) {
            if (_ISM) return !1;
            var i = jQuery(this);
            _R.stopVideo && (_R.resetVideo(i, t), _R.stopVideo(i, t)), punchgs.TweenLite.to(i, 1, { autoAlpha: 0, ease: punchgs.Power3.easeInOut, delay: .2 }) });
            var s = {};
            s.slideIndex = n.index() + 1, s.slideLIIndex = n.index(), s.slide = n, s.currentslide = n, s.prevslide = r, t.last_shown_slide = r.index(), e.trigger("revolution.slide.onchange", s), e.trigger("revolution.slide.onafterswap", s), t.duringslidechange = !1;
            var d = r.data("slide_on_focus_amount"),
                l = r.data("hideafterloop");
            0 != l && d >= l && t.c.revremoveslide(r.index()) },
        removeAllListeners = function(e, t) { e.children().each(function() {
            try { jQuery(this).die("click") } catch (e) {}
            try { jQuery(this).die("mouseenter") } catch (e) {}
            try { jQuery(this).die("mouseleave") } catch (e) {}
            try { jQuery(this).unbind("hover") } catch (e) {} });
            try { e.die("click", "mouseenter", "mouseleave") } catch (i) {}
            clearInterval(t.cdint), e = null },
        countDown = function(e, t) { t.cd = 0, t.loop = 0, t.stopAfterLoops != undefined && t.stopAfterLoops > -1 ? t.looptogo = t.stopAfterLoops : t.looptogo = 9999999, t.stopAtSlide != undefined && t.stopAtSlide > -1 ? t.lastslidetoshow = t.stopAtSlide : t.lastslidetoshow = 999, t.stopLoop = "off", 0 == t.looptogo && (t.stopLoop = "on");
            var i = e.find(".tp-bannertimer");
            e.on("stoptimer", function() {
                var e = jQuery(this).find(".tp-bannertimer");
                e.data("tween").pause(), "on" == t.disableProgressBar && e.css({ visibility: "hidden" }), t.sliderstatus = "paused", _R.unToggleState(t.slidertoggledby) }), e.on("starttimer", function() { t.forcepause_viatoggle || (1 != t.conthover && 1 != t.videoplaying && t.width > t.hideSliderAtLimit && 1 != t.tonpause && 1 != t.overnav && 1 != t.ssop && (1 === t.noloopanymore || t.viewPort.enable && !t.inviewport || (i.css({ visibility: "visible" }), i.data("tween").resume(), t.sliderstatus = "playing")), "on" == t.disableProgressBar && i.css({ visibility: "hidden" }), _R.toggleState(t.slidertoggledby)) }), e.on("restarttimer", function() {
                if (!t.forcepause_viatoggle) {
                    var e = jQuery(this).find(".tp-bannertimer");
                    if (t.mouseoncontainer && "on" == t.navigation.onHoverStop && !_ISM) return !1;
                    1 === t.noloopanymore || t.viewPort.enable && !t.inviewport || 1 == t.ssop || (e.css({ visibility: "visible" }), e.data("tween").kill(), e.data("tween", punchgs.TweenLite.fromTo(e, t.delay / 1e3, { width: "0%" }, { force3D: "auto", width: "100%", ease: punchgs.Linear.easeNone, onComplete: a, delay: 1 })), t.sliderstatus = "playing"), "on" == t.disableProgressBar && e.css({ visibility: "hidden" }), _R.toggleState(t.slidertoggledby) } }), e.on("nulltimer", function() { i.data("tween").kill(), i.data("tween", punchgs.TweenLite.fromTo(i, t.delay / 1e3, { width: "0%" }, { force3D: "auto", width: "100%", ease: punchgs.Linear.easeNone, onComplete: a, delay: 1 })), i.data("tween").pause(0), "on" == t.disableProgressBar && i.css({ visibility: "hidden" }), t.sliderstatus = "paused" });
            var a = function() { 0 == jQuery("body").find(e).length && (removeAllListeners(e, t), clearInterval(t.cdint)), e.trigger("revolution.slide.slideatend"), 1 == e.data("conthover-changed") && (t.conthover = e.data("conthover"), e.data("conthover-changed", 0)), _R.callingNewSlide(t, e, 1) };
            i.data("tween", punchgs.TweenLite.fromTo(i, t.delay / 1e3, { width: "0%" }, { force3D: "auto", width: "100%", ease: punchgs.Linear.easeNone, onComplete: a, delay: 1 })), i.data("opt", t), t.slideamount > 1 && (0 != t.stopAfterLoops || 1 != t.stopAtSlide) ? e.trigger("starttimer") : (t.noloopanymore = 1, e.trigger("nulltimer")), e.on("tp-mouseenter", function() { t.mouseoncontainer = !0, "on" != t.navigation.onHoverStop || _ISM || (e.trigger("stoptimer"), e.trigger("revolution.slide.onpause")) }), e.on("tp-mouseleft", function() { t.mouseoncontainer = !1, 1 != e.data("conthover") && "on" == t.navigation.onHoverStop && (1 == t.viewPort.enable && t.inviewport || 0 == t.viewPort.enable) && (e.trigger("revolution.slide.onresume"), e.trigger("starttimer")) }) },
        vis = function() {
            var e, t, i = { hidden: "visibilitychange", webkitHidden: "webkitvisibilitychange", mozHidden: "mozvisibilitychange", msHidden: "msvisibilitychange" };
            for (e in i)
                if (e in document) { t = i[e];
                    break }
            return function(i) {
                return i && document.addEventListener(t, i), !document[e] } }(),
        restartOnFocus = function(e) {
            return e == undefined || e.c == undefined ? !1 : void(1 != e.windowfocused && (e.windowfocused = !0, punchgs.TweenLite.delayedCall(.3, function() { "on" == e.fallbacks.nextSlideOnWindowFocus && e.c.revnext(), e.c.revredraw(), "playing" == e.lastsliderstatus && e.c.revresume() }))) },
        lastStatBlur = function(e) { e.windowfocused = !1, e.lastsliderstatus = e.sliderstatus, e.c.revpause();
            var t = e.c.find(".active-revslide .slotholder"),
                i = e.c.find(".processing-revslide .slotholder"); "on" == i.data("kenburns") && _R.stopKenBurn(i, e), "on" == t.data("kenburns") && _R.stopKenBurn(t, e) },
        tabBlurringCheck = function(e, t) {
            var i = document.documentMode === undefined,
                a = window.chrome;
            i && !a ? jQuery(window).on("focusin", function() { restartOnFocus(t) }).on("focusout", function() { lastStatBlur(t) }) : window.addEventListener ? (window.addEventListener("focus", function(e) { restartOnFocus(t) }, !1), window.addEventListener("blur", function(e) { lastStatBlur(t) }, !1)) : (window.attachEvent("focus", function(e) { restartOnFocus(t) }), window.attachEvent("blur", function(e) { lastStatBlur(t) })) },
        getUrlVars = function(e) {
            for (var t, i = [], a = window.location.href.slice(window.location.href.indexOf(e) + 1).split("_"), n = 0; n < a.length; n++) a[n] = a[n].replace("%3D", "="), t = a[n].split("="), i.push(t[0]), i[t[0]] = t[1];
            return i } }(jQuery); } catch (e) { console.error('Error in file:http://webnus.biz/themes/michigan/kids/wp-content/plugins/revslider/public/assets/js/jquery.themepunch.revolution.min.js?ver=5.2.5.3; Error:' + e.message); };;
/**
 * Created by alone_elvi on 22.09.16.
 */
