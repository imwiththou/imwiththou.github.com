/*
 * For font license information, see the CSS file loaded by this JavaScript.
 */
if (!window.Typekit)
    window.Typekit = {};
window.Typekit.config = {
    "c": [".tk-ff-tundra-web-pro", "\"ff-tundra-web-pro\",sans-serif", ".tk-ff-tundra-sc-web-pro", "\"ff-tundra-sc-web-pro\",sans-serif"],
    "f": "//use.typekit.net/c/86886c/ff-tundra-sc-web-pro:n4:n7,ff-tundra-web-pro:i4:n4:n7.TPh:F:2,TPb:F:2,TSg:F:2,TSm:F:2,TSY:F:2/{format}{/extras*}?3bb2a6e53c9684ffdc9a9afe1f5b2a62e5d76b099c828680e711f4376c78c49aabfe6a170df58a5533d1608e6335f3b265f6f378f7edc2c769378d848863390823dd76377197f5ca5c3e82050d1dd71b21d1c878ec",
    "fn": ["ff-tundra-sc-web-pro", ["n4", "n7"], "ff-tundra-web-pro", ["i4", "n4", "n7"]],
    "k": "//use.typekit.net/{id}.js",
    "p": "//p.typekit.net/p.gif?s=1&k=jbk2yey&ht=tk&h={host}&f=13880.13885.13874.13725.13720&a=7091&_={_}",
    "w": "jbk2yey"
};
/*{"k":"1.2.2","created":"2013-01-21T19:47:29Z"}*/
;
(function(window, document, undefined) {
    var g = void 0, k=!0, l = null, m=!1;
    function n(a) {
        return function() {
            return this[a]
        }
    }
    var o;
    function p(a, c, b) {
        var d = 2 < arguments.length ? Array.prototype.slice.call(arguments, 2): [];
        return function() {
            d.push.apply(d, arguments);
            return c.apply(a, d)
        }
    }
    function q(a, c) {
        this.qa = c || a;
        this.j = this.qa.document;
        this.u = g
    }
    q.prototype.createElement = function(a, c, b) {
        a = this.j.createElement(a);
        if (c)
            for (var d in c)
                c.hasOwnProperty(d) && ("style" == d ? this.ya(a, c[d]) : a.setAttribute(d, c[d]));
        b && a.appendChild(this.j.createTextNode(b));
        return a
    };
    function r(a, c, b) {
        a = a.j.getElementsByTagName(c)[0];
        a || (a = document.documentElement);
        a && a.lastChild && a.insertBefore(b, a.lastChild)
    }
    function s(a) {
        function c() {
            document.body ? a() : setTimeout(c, 0)
        }
        c()
    }
    function t(a) {
        a.parentNode && a.parentNode.removeChild(a)
    }
    function u(a, c) {
        for (var b = a.className.split(/\s+/), d = 0, e = b.length; d < e; d++)
            if (b[d] == c)
                return;
        b.push(c);
        a.className = b.join(" ").replace(/^\s+/, "")
    }
    function v(a, c) {
        for (var b = a.className.split(/\s+/), d = [], e = 0, f = b.length; e < f; e++)
            b[e] != c && d.push(b[e]);
        a.className = d.join(" ").replace(/^\s+/, "").replace(/\s+$/, "")
    }
    function aa(a, c) {
        for (var b = a.className.split(/\s+/), d = 0, e = b.length; d < e; d++)
            if (b[d] == c)
                return k;
        return m
    }
    q.prototype.ya = function(a, c) {
        this.Z() ? a.setAttribute("style", c) : a.style.cssText = c
    };
    q.prototype.Z = function() {
        if (this.u === g) {
            var a = this.j.createElement("p");
            a.innerHTML = '<a style="top:1px;">w</a>';
            this.u = /top/.test(a.getElementsByTagName("a")[0].getAttribute("style"))
        }
        return this.u
    };
    function w(a, c, b, d, e, f, h) {
        this.aa = a;
        this.Xa = c;
        this.Fa = b;
        this.Ea = d;
        this.Sa = e;
        this.Ra = f;
        this.Da = h
    }
    o = w.prototype;
    o.getName = n("aa");
    o.getVersion = n("Xa");
    o.getEngine = n("Fa");
    o.getEngineVersion = n("Ea");
    o.getPlatform = n("Sa");
    o.getPlatformVersion = n("Ra");
    o.getDocumentMode = n("Da");
    function ba(a, c) {
        this.e = a;
        this.s = c
    }
    var ca = new w("Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", g);
    ba.prototype.parse = function() {
        var a;
        if (-1 != this.e.indexOf("MSIE")) {
            a = x(this);
            var c = y(this), b = z(this.e, /(MSIE [\d\w\.]+)/, 1);
            if ("" != b) {
                var d = b.split(" "), b = d[0], d = d[1];
                B(d);
                B(c);
                a = new w(b, d, b, d, a, c, C(this.s))
            } else 
                a = new w("MSIE", "Unknown", "MSIE", "Unknown", a, c, C(this.s))
        } else if (-1 != this.e.indexOf("Opera"))
            a: if (c = a = "Unknown", b = z(this.e, /(Presto\/[\d\w\.]+)/, 1)
                , "" != b ? (c = b.split("/"), a = c[0], c = c[1]) : (-1 != this.e.indexOf("Gecko") && (a = "Gecko"), b = z(this.e, /rv:([^\)]+)/, 1), "" != b && (c = b)), -1 != this.e.indexOf("Opera Mini/"))b =
        z(this.e, /Opera Mini\/([\d\.]+)/, 1), "" == b && (b = "Unknown"), a = new w("OperaMini", b, a, c, x(this), y(this), C(this.s));
        else {
            if (-1 != this.e.indexOf("Version/") && (b = z(this.e, /Version\/([\d\.]+)/, 1), "" != b)) {
                a = new w("Opera", b, a, c, x(this), y(this), C(this.s), 10 <= B(b));
                break a
            }
            b = z(this.e, /Opera[\/ ]([\d\.]+)/, 1);
            a = "" != b ? new w("Opera", b, a, c, x(this), y(this), C(this.s), 10 <= B(b)) : new w("Opera", "Unknown", a, c, x(this), y(this), C(this.s))
        } else if (/AppleWeb(K|k)it/.test(this.e)) {
            a = x(this);
            c = y(this);
            b = z(this.e, /AppleWeb(?:K|k)it\/([\d\.\+]+)/,
            1);
            "" == b && (b = "Unknown");
            d = "Unknown";
            -1 != this.e.indexOf("Chrome")||-1 != this.e.indexOf("CrMo")||-1 != this.e.indexOf("CriOS") ? d = "Chrome" : "BlackBerry" == a || "Android" == a ? d = "BuiltinBrowser" : -1 != this.e.indexOf("Safari") ? d = "Safari" : -1 != this.e.indexOf("AdobeAIR") && (d = "AdobeAIR");
            var e = "Unknown";
            "BuiltinBrowser" == d ? e = "Unknown" : -1 != this.e.indexOf("Version/") ? e = z(this.e, /Version\/([\d\.\w]+)/, 1) : "Chrome" == d ? e = z(this.e, /(Chrome|CrMo|CriOS)\/([\d\.]+)/, 2) : "AdobeAIR" == d && (e = z(this.e, /AdobeAIR\/([\d\.]+)/, 1));
            "AdobeAIR" ==
            d ? (z(e, /\d+\.(\d+)/, 1), 2 < B(e) || B(e)) : "BlackBerry" != a && "Android" != a && (z(b, /\d+\.(\d+)/, 1), 526 <= B(b) || B(b));
            a = new w(d, e, "AppleWebKit", b, a, c, C(this.s))
        } else if (-1 != this.e.indexOf("Gecko")) {
            c = a = "Unknown";
            d = m;
            -1 != this.e.indexOf("Firefox") ? (a = "Firefox", b = z(this.e, /Firefox\/([\d\w\.]+)/, 1), "" != b && (d = z(b, /\d+\.(\d+)/, 1), c = b, d = "" != b && 3 <= B(b) && 5 <= parseInt(d, 10))) : -1 != this.e.indexOf("Mozilla") && (a = "Mozilla");
            b = z(this.e, /rv:([^\)]+)/, 1);
            if ("" == b)
                b = "Unknown";
            else if (!d) {
                var d = B(b), e = parseInt(z(b, /\d+\.(\d+)/,
                1), 10), f = parseInt(z(b, /\d+\.\d+\.(\d+)/, 1), 10);
                1 < d || 1 == d && 9 < e || 1 == d && 9 == e && 2 <= f || b.match(/1\.9\.1b[123]/) != l || b.match(/1\.9\.1\.[\d\.]+/)
            }
            a = new w(a, c, "Gecko", b, x(this), y(this), C(this.s))
        } else 
            a = ca;
        return a
    };
    function x(a) {
        var c = z(a.e, /(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/, 1);
        if ("" != c)
            return /BB\d{2}/.test(c) && (c = "BlackBerry"), c;
        a = z(a.e, /(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/, 1);
        return "" != a ? ("Mac_PowerPC" == a && (a = "Macintosh"), a) : "Unknown"
    }
    function y(a) {
        var c = z(a.e, /(OS X|Windows NT|Android|CrOS) ([^;)]+)/, 2);
        if (c || (c = z(a.e, /Windows Phone( OS)? ([^;)]+)/, 2)))
            return c;
        if (c = z(a.e, /(iPhone )?OS ([\d_]+)/, 2))
            return c;
        if (c = z(a.e, /Linux ([i\d]+)/, 1))
            return c;
        return (a = z(a.e, /(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/, 2)) ? a : "Unknown"
    }
    function B(a) {
        a = z(a, /(\d+)/, 1);
        return "" != a ? parseInt(a, 10) : -1
    }
    function z(a, c, b) {
        return (a = a.match(c)) && a[b] ? a[b] : ""
    }
    function C(a) {
        if (a.documentMode)
            return a.documentMode
    }
    function da(a, c, b) {
        this.g = a;
        this.l = c;
        this.ga = b;
        this.o = "wf";
        this.m = new ga("-")
    }
    function ha(a) {
        v(a.l, a.m.h(a.o, "loading"));
        aa(a.l, a.m.h(a.o, "active")) || u(a.l, a.m.h(a.o, "inactive"));
        D(a, "inactive")
    }
    function D(a, c, b, d) {
        if (a.ga[c])
            a.ga[c](b, d)
    }
    function E(a, c, b, d, e) {
        this.g = a;
        this.D = c;
        this.G = b;
        this.t = d;
        this.M = e;
        this.T = 0;
        this.za = this.oa = m
    }
    E.prototype.watch = function(a, c, b, d, e) {
        for (var f = a.length, h = 0; h < f; h++) {
            var i = a[h];
            c[i] || (c[i] = ["n4"]);
            this.T += c[i].length
        }
        e && (this.oa = e);
        for (h = 0; h < f; h++)
            for (var i = a[h], e = c[i], j = b[i], A = 0, Ia = e.length; A < Ia; A++) {
                var ea = e[A], G = this.D, O = i, fa = ea;
                u(G.l, G.m.h(G.o, O, fa, "loading"));
                D(G, "fontloading", O, fa);
                G = p(this, this.Ga);
                O = p(this, this.Ha);
                (new d(G, O, this.g, this.G, this.t, this.M, i, ea, j)).start()
            }
    };
    E.prototype.Ga = function(a, c) {
        var b = this.D;
        v(b.l, b.m.h(b.o, a, c, "loading"));
        v(b.l, b.m.h(b.o, a, c, "inactive"));
        u(b.l, b.m.h(b.o, a, c, "active"));
        D(b, "fontactive", a, c);
        this.za = k;
        ia(this)
    };
    E.prototype.Ha = function(a, c) {
        var b = this.D;
        v(b.l, b.m.h(b.o, a, c, "loading"));
        aa(b.l, b.m.h(b.o, a, c, "active")) || u(b.l, b.m.h(b.o, a, c, "inactive"));
        D(b, "fontinactive", a, c);
        ia(this)
    };
    function ia(a) {
        0==--a.T && a.oa && (a.za ? (a = a.D, v(a.l, a.m.h(a.o, "loading")), v(a.l, a.m.h(a.o, "inactive")), u(a.l, a.m.h(a.o, "active")), D(a, "active")) : ha(a.D))
    }
    function F(a, c, b, d, e, f, h, i, j) {
        this.Ca = a;
        this.Ma = c;
        this.g = b;
        this.G = d;
        this.t = e;
        this.M = f;
        this.Qa = new ja;
        this.Ja = new ka;
        this.V = h;
        this.U = i;
        this.Ia = j || "BESbswy";
        this.ra = la(this, "arial,'URW Gothic L',sans-serif");
        this.ta = la(this, "Georgia,'Century Schoolbook L',serif");
        this.ma = this.ra;
        this.na = this.ta;
        this.ba = H(this, "arial,'URW Gothic L',sans-serif");
        this.ca = H(this, "Georgia,'Century Schoolbook L',serif")
    }
    F.prototype.start = function() {
        this.Va = this.M();
        this.ha()
    };
    F.prototype.ha = function() {
        var a = this.G.Y(this.ba), c = this.G.Y(this.ca);
        (this.ra != a || this.ta != c) && this.ma == a && this.na == c ? (a = this.Ca, t(this.ba), t(this.ca), a(this.V, this.U)) : 5E3 <= this.M() - this.Va ? (a = this.Ma, t(this.ba), t(this.ca), a(this.V, this.U)) : (this.ma = a, this.na = c, ma(this))
    };
    function ma(a) {
        a.t(function(a, b) {
            return function() {
                b.call(a)
            }
        }(a, a.ha), 25)
    }
    function la(a, c) {
        var b = H(a, c, k), d = a.G.Y(b);
        t(b);
        return d
    }
    function H(a, c, b) {
        c = a.g.createElement("span", {
            style: na(a, c, a.U, b)
        }, a.Ia);
        r(a.g, "body", c);
        return c
    }
    function na(a, c, b, d) {
        b = a.Ja.expand(b);
        return "position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;font-family:" + (d ? "" : a.Qa.quote(a.V) + ",") + c + ";" + b
    }
    function ga(a) {
        this.Oa = a || "-"
    }
    ga.prototype.h = function(a) {
        for (var c = [], b = 0; b < arguments.length; b++)
            c.push(arguments[b].replace(/[\W_]+/g, "").toLowerCase());
        return c.join(this.Oa)
    };
    function ja() {
        this.xa = "'"
    }
    ja.prototype.quote = function(a) {
        for (var c = [], a = a.split(/,\s*/), b = 0; b < a.length; b++) {
            var d = a[b].replace(/['"]/g, "");
            -1 == d.indexOf(" ") ? c.push(d) : c.push(this.xa + d + this.xa)
        }
        return c.join(",")
    };
    function ka() {
        this.va = oa;
        this.J = pa
    }
    var oa = ["font-style", "font-weight"], pa = {
        "font-style": [["n", "normal"], ["i", "italic"], ["o", "oblique"]],
        "font-weight": [["1", "100"], ["2", "200"], ["3", "300"], ["4", "400"], ["5", "500"], ["6", "600"], ["7", "700"], ["8", "800"], ["9", "900"], ["4", "normal"], ["7", "bold"]]
    };
    function qa(a, c, b) {
        this.Na = a;
        this.Ta = c;
        this.J = b
    }
    qa.prototype.expand = function(a, c) {
        for (var b = 0; b < this.J.length; b++)
            if (c == this.J[b][0]) {
                a[this.Na] = this.Ta + ":" + this.J[b][1];
                break
            }
    };
    ka.prototype.expand = function(a) {
        if (2 != a.length)
            return l;
        for (var c = [l, l], b = 0, d = this.va.length; b < d; b++) {
            var e = this.va[b];
            (new qa(b, e, this.J[e])).expand(c, a.substr(b, 1))
        }
        return c[0] && c[1] ? c.join(";") + ";" : l
    };
    function I(a, c) {
        this.qa = c || a;
        this.j = document;
        this.u = g
    }
    I.prototype = q.prototype;
    function J(a) {
        return "https:" == a.j.location.protocol
    }
    I.prototype.Ka = function() {
        return this.j.location.hostname
    };
    function ra(a, c, b) {
        var d = a.j.getElementsByTagName("head")[0];
        if (d) {
            var e = a.j.createElement("script");
            e.src = c;
            var f = m;
            e.onload = e.onreadystatechange = function() {
                if (!f && (!this.readyState || "loaded" == this.readyState || "complete" == this.readyState))
                    f = k, b && b(), e.onload = e.onreadystatechange = l, "HEAD" == e.parentNode.tagName && d.removeChild(e)
            };
            d.appendChild(e)
        }
    }
    I.prototype.ya = function(a, c) {
        this.Z() ? a.setAttribute("style", c) : a.style.cssText = c
    };
    I.prototype.Z = function() {
        if (this.u === g) {
            var a = this.j.createElement("p");
            a.innerHTML = '<a style="top:1px;">w</a>';
            this.u = /top/.test(a.getElementsByTagName("a")[0].getAttribute("style"))
        }
        return this.u
    };
    function sa() {
        var a = [{
            name: "font-family",
            value: K.c[L + 1]
        }
        ];
        this.Ua = [K.c[L]];
        this.ia = a
    }
    function ta(a) {
        for (var c = a.Ua.join(","), b = [], d = 0; d < a.ia.length; d++) {
            var e = a.ia[d];
            b.push(e.name + ":" + e.value + ";")
        }
        return c + "{" + b.join("") + "}"
    }
    function M(a, c) {
        this.F = a;
        this.L = c;
        this.ka = {};
        this.ja = {}
    }
    M.prototype.z = function(a) {
        return a ? (this.ka[a.N] || this.L).slice(0) : this.L.slice(0)
    };
    function ua(a, c, b) {
        for (var d = [], e = a.F.split(",")[0].replace(/"|'/g, ""), f = a.z(), h, i = [], j = {}, A = 0; A < f.length; A++)
            h = f[A], 0 < h.length&&!j[h] && (j[h] = k, i.push(h));
        b = b.wa ? b.wa(e, i, d) : i;
        c = c.N;
        a.ka[c] = b;
        a.ja[c] = d
    }
    M.prototype.watch = function(a, c, b) {
        var d = [], e = {};
        va(this, c, d, e);
        a(d, e, b)
    };
    function va(a, c, b, d) {
        b.push(a.F);
        d[a.F] = a.z(c);
        a = a.ja[c.N] || [];
        for (c = 0; c < a.length; c++) {
            for (var e = a[c], f = e.F, h = m, i = 0; i < b.length; i++)
                b[i] == f && (h = k);
            h || (b.push(f), d[f] = e.z())
        }
    }
    function wa(a, c) {
        this.F = a;
        this.L = c
    }
    wa.prototype.z = n("L");
    function xa(a) {
        var c = new Image(1, 1);
        c.src = a;
        c.onload = function() {
            c.onload = l
        }
    }
    function N(a, c) {
        this.N = a;
        this.la = c
    }
    function ya() {
        this.ea = this.Ba = this.v = this.H = this.I = k
    }
    function P(a) {
        za.Q.push(a)
    }
    function Aa(a) {
        this.g = a;
        this.fa = this.r = this.e = this.P = l;
        this.n = [];
        this.K = [];
        this.Aa = this.W = this.R = this.S = l
    }
    function Ba(a, c) {
        a.e = c;
        if (a.P) {
            var b;
            a:
            {
                b = a.P;
                for (var d = a.e, e = a.fa, f = 0; f < b.Q.length; f++) {
                    var h = b.Q[f], i = d, j = e;
                    j || (j = new ya);
                    if (h.la && h.la(i.getName(), i.getVersion(), i.getEngine(), i.getEngineVersion(), i.getPlatform(), i.getPlatformVersion(), i.getDocumentMode(), j)) {
                        b = h;
                        break a
                    }
                }
                b = l
            }
            a.r = b
        }
    }
    o = Aa.prototype;
    o.supportsConfiguredBrowser = function() {
        return !!this.r
    };
    o.init = function() {
        if (0 < this.K.length) {
            for (var a = [], c = 0; c < this.K.length; c++)
                a.push(ta(this.K[c]));
            var c = this.g, a = a.join(""), b = this.g.j.createElement("style");
            b.setAttribute("type", "text/css");
            b.styleSheet ? b.styleSheet.cssText = a : b.appendChild(document.createTextNode(a));
            r(c, "head", b)
        }
    };
    o.load = function(a, c) {
        var b = this.r.N;
        if (this.W)
            for (var d = Ca(this.W, b), e = 0; e < this.n.length; e++)
                ua(this.n[e], this.r, d);
        this.S && (d = [], this.R && (d = new Da(this.g, this.r, this.n), d = Ea(this.R, b, d)), b = this.S.h(J(this.g), Fa(b, d)), r(this.g, "head", this.g.createElement("link", {
            rel: "stylesheet",
            href: b
        })));
        a && s(function(a, b, c, e) {
            return function() {
                for (var d = 0; d < a.n.length; d++)
                    a.n[d].watch(b, c, e && d == a.n.length-1)
            }
        }(this, a, this.r, c))
    };
    o.collectFontFamilies = function(a, c) {
        for (var b = 0; b < this.n.length; b++)
            va(this.n[b], this.r, a, c)
    };
    o.performOptionalActions = function(a) {
        this.$ && s(function(a, b, d, e) {
            return function() {
                var b = a.$;
                if (b.ua) {
                    var h = window.__adobewebfontsappname__, h = h ? h.toString().substr(0, 20): "";
                    xa(b.ua.h(J(e), {
                        host: encodeURIComponent(e.j.location.hostname),
                        app: encodeURIComponent(h),
                        _: ( + new Date).toString()
                    }))
                }
                b = a.$;
                b.da && (b = b.da.h(d, e), r(e, "body", b))
            }
        }(this, a, this.e, this.g))
    };
    function Q(a, c, b, d) {
        this.Pa = a;
        this.g = c;
        this.l = b;
        this.t = d;
        this.q = []
    }
    Q.prototype.O = function(a) {
        this.q.push(a)
    };
    Q.prototype.load = function(a, c) {
        var b = a, d = c || {};
        if ("string" == typeof b)
            b = [b];
        else if (!b ||!b.length)
            d = b || {}, b = [];
        if (b.length)
            for (var e = this, f = b.length, h = 0; h < b.length; h++)
                Ga(this, b[h], function() {
                    0==--f && Ha(e, d)
                });
        else 
            Ha(this, d)
    };
    function Ga(a, c, b) {
        ra(a.g, a.Pa.h(J(a.g), {
            id: encodeURIComponent(c)
        }), b)
    }
    function Ha(a, c) {
        if (0 != a.q.length) {
            for (var b = new da(a.g, a.l, c), d = m, e = 0; e < a.q.length; e++)
                a.q[e].init(), d = d || a.q[e].supportsConfiguredBrowser();
            d ? (u(b.l, b.m.h(b.o, "loading")), D(b, "loading"), Ja(a, b)) : ha(b);
            a.q = []
        }
    }
    function Ja(a, c) {
        function b(a, b, c) {
            d.watch(a, b, {}, F, c)
        }
        for (var d = new E(a.g, c, {
            Y: function(a) {
                return a.offsetWidth
            }
        }, a.t, function() {
            return + new Date
        }), e = 0; e < a.q.length; e++) {
            var f = a.q[e];
            f.supportsConfiguredBrowser() && (f.load(b, e == a.q.length-1), f.performOptionalActions(window))
        }
    }
    function R(a, c) {
        this.A = a;
        this.t = c;
        this.q = []
    }
    R.prototype.O = function(a) {
        this.q.push(a)
    };
    R.prototype.load = function() {
        var a = this.A.__webfonttypekitmodule__;
        if (a)
            for (var c = 0; c < this.q.length; c++) {
                var b = this.q[c], d = a[b.Aa];
                if (d) {
                    var e = this.t;
                    d(function(a, c, d) {
                        var c = [], j = {};
                        Ba(b, a);
                        b.supportsConfiguredBrowser() && (b.init(), b.load(l, e), b.collectFontFamilies(c, j), b.performOptionalActions(window));
                        d(b.supportsConfiguredBrowser(), c, j)
                    })
                }
            }
        };
    function S(a, c) {
        this.aa = a;
        this.wa = c
    }
    S.prototype.getName = n("aa");
    function Ka(a) {
        var c = T;
        La(c, a.getName()) || c.X.push(a)
    }
    function La(a, c) {
        for (var b = 0; b < a.X.length; b++) {
            var d = a.X[b];
            if (c === d.getName())
                return d
        }
        return l
    }
    function Ca(a, c) {
        var b = a.B[c];
        return b ? La(a, b) : l
    }
    function Ea(a, c, b) {
        for (var d = [], a = a.C[c] || [], c = 0; c < a.length; c++) {
            var e;
            a:
            switch (a[c]) {
            case "observeddomain":
                e = new Ma(b.g);
                break a;
            case "fontmask":
                e = new Na(b.r, b.n);
                break a;
            default:
                e = l
            }
            e && d.push(e)
        }
        return d
    }
    function Da(a, c, b) {
        this.g = a;
        this.r = c;
        this.n = b
    }
    function Ma(a) {
        this.g = a
    }
    Ma.prototype.toString = function() {
        return encodeURIComponent(this.g.Ka ? this.g.j.location.hostname : document.location.hostname)
    };
    function Na(a, c) {
        this.r = a;
        this.n = c
    }
    Na.prototype.toString = function() {
        for (var a = [], c = 0; c < this.n.length; c++)
            for (var b = this.n[c], d = b.z(), b = b.z(this.r), e = 0; e < d.length; e++) {
                var f;
                a:
                {
                    for (f = 0; f < b.length; f++)
                        if (d[e] === b[f]) {
                            f = k;
                            break a
                        }
                        f = m
                    }
                    a.push(f ? 1 : 0)
            }
        a = a.join("");
        a = a.replace(/^0+/, "");
        c = [];
        for (d = a.length; 0 < d; d -= 4)
            b = a.slice(0 > d-4 ? 0 : d-4, d), c.unshift(parseInt(b, 2).toString(16));
        return c.join("")
    };
    function U(a) {
        this.Wa = a
    }
    U.prototype.h = function(a, c) {
        var b = c || {}, d = this.Wa.replace(/\{\/?([^*}]*)(\*?)\}/g, function(a, c, d) {
            return d && b[c] ? "/" + b[c].join("/") : b[c] || ""
        });
        d.match(/^\/\//) && (d = (a ? "https:" : "http:") + d);
        return d.replace(/\/*\?*($|\?)/, "$1")
    };
    function Fa(a, c) {
        for (var b = [], d = 0; d < c.length; d++)
            b.push(c[d].toString());
        return {
            format: a,
            extras: b
        }
    }
    function Oa(a, c, b, d) {
        this.A = a;
        this.j = c;
        this.La = b;
        this.pa = d
    }
    Oa.prototype.h = function(a, c) {
        var b = this.j.createElement("img");
        b.setAttribute("width", 62);
        b.setAttribute("height", 25);
        b.setAttribute("src", this.La.h(J(c)));
        b.setAttribute("class", "typekit-badge");
        b.setAttribute("alt", "Fonts by Typekit");
        b.setAttribute("title", "Information about the fonts used on this site");
        b.style.position = "fixed";
        b.style.zIndex = 2E9;
        b.style.right = 0;
        b.style.bottom = 0;
        b.style.cursor = "pointer";
        b.style.border = 0;
        "Opera" != a.getName() && (b.style.content = "none");
        b.style.display = "inline";
        b.style["float"] =
        "none";
        b.style.height = "25px";
        b.style.left = "auto";
        b.style.margin = 0;
        b.style.maxHeight = "25px";
        b.style.maxWidth = "62px";
        b.style.minHeight = "25px";
        b.style.minWidth = "62px";
        b.style.orphans = 2;
        b.style.outline = "none";
        b.style.overflow = "visible";
        b.style.padding = 0;
        b.style.pageBreakAfter = "auto";
        b.style.pageBreakBefore = "auto";
        b.style.pageBreakInside = "auto";
        b.style.tableLayout = "auto";
        b.style.textIndent = 0;
        b.style.top = "auto";
        b.style.unicodeBidi = "normal";
        b.style.verticalAlign = "baseline";
        b.style.visibility = "visible";
        b.style.widows =
        2;
        b.style.width = "65px";
        if (this.pa) {
            var d = this.j, e = this.pa;
            V(this, b, "click", function() {
                d.location.href = e
            })
        }
        var f = a.getPlatform();
        if ("MSIE" == a.getName() && "Windows Phone" != f) {
            b.style.position = "absolute";
            var h = this, i = function() {
                var a = Pa(h, "scrollLeft", "scrollTop"), c = Pa(h, "clientWidth", "clientHeight");
                b.style.bottom = "auto";
                b.style.right = "auto";
                b.style.top = a[1] + c[1]-25 + "px";
                b.style.left = a[0] + c[0]-3-62 + "px"
            };
            V(this, this.A, "scroll", i);
            V(this, this.A, "resize", i)
        }
        if ("iPhone" == f || "iPod" == f || "iPad" == f || "Android" ==
        f || "Windows Phone" == f || "BlackBerry" == f)
            b.style.display = "none";
        return b
    };
    function Pa(a, c, b) {
        var d = 0, e = 0, a = a.j;
        if (a.documentElement && (a.documentElement[c] || a.documentElement[b]))
            d = a.documentElement[c], e = a.documentElement[b];
        else if (a.body && (a.body[c] || a.body[b]))
            d = a.body[c], e = a.body[b];
        return [d, e]
    }
    function V(a, c, b, d) {
        if (c.attachEvent) {
            var e = a.A;
            c["e" + b + d] = d;
            c[b + d] = function() {
                c["e" + b + d](e.event)
            };
            c.attachEvent("on" + b, c[b + d])
        } else 
            c.addEventListener(b, d, m)
    }
    var za = new function() {
        this.Q = []
    };
    P(new N("a", function(a, c, b, d, e, f) {
        if (m || ("Windows" == e && "Unknown" == f ? k : m) || ("Ubuntu" == e || "Linux" == e ? k : m))
            a: {
            if ("AdobeAIR" == a && (a = /([0-9]+.[0-9]+)/.exec(c))) {
                a = 2.5 <= parseFloat(a[1]);
                break a
            }
            a = m
        } else 
            a = m;
        return a
    }));
    P(new N("b", function(a, c, b, d, e, f, h, i) {
        var j;
        j = m || function(a, b, c, e, d, f) {
            a = /^([0-9]+)(_|.)([0-9]+)/.exec(f);
            return "Macintosh" == d && a ? (d = parseInt(a[1], 10), f = parseInt(a[3], 10), 10 < d || 10 == d && 4 <= f) : "Macintosh" == d && "Unknown" == f ? k : m
        }(a, c, b, d, e, f, h, i);
        return !j ? m : function(a, b) {
            if ("AdobeAIR" == a) {
                var c = /([0-9]+.[0-9]+)/.exec(b);
                if (c)
                    return 2.5 <= parseFloat(c[1])
            }
            return m
        }(a, c, b, d, e, f, h, i)
    }));
    P(new N("a", function(a, c, b, d, e, f, h, i) {
        if (!(c = m))
            f = /([0-9]+).([0-9]+)/.exec(f), i.v && "Android" == e && f ? (e = parseInt(f[1], 10), i = parseInt(f[2], 10), c = 2 == e && 2 <= i || 3 == e && 1 > i) : c = m;
        return !c ? m : "BuiltinBrowser" == a
    }));
    P(new N("f", function(a, c, b, d, e, f, h, i) {
        if (!(c = m))
            f = /([0-9]+).([0-9]+)/.exec(f), i.v && "Android" == e && f ? (e = parseInt(f[1], 10), i = parseInt(f[2], 10), c = 3 == e && 1 <= i || 3 < e) : c = m;
        return !c ? m : "BuiltinBrowser" == a
    }));
    P(new N("d", function(a, c, b, d, e, f, h, i) {
        c = m || i.ea && 10 <= parseInt(f, 10);
        return !c ? m : "BuiltinBrowser" == a
    }));
    P(new N("a", function(a, c, b, d, e, f, h, i) {
        var j;
        j = (j = m || ("Windows" == e && "5.1" == f ? k : m) || ("Windows" == e && "5.2" == f ? k : m) || ("Windows" == e && "6.0" == f ? k : m) || function(a, b, c, d, e, f) {
            a = /^([0-9]+).([0-9]+)/.exec(f);
            return "Windows" == e && a ? (e = parseInt(a[1], 10), a = parseInt(a[2], 10), 6 < e || 6 == e && 1 <= a) : m
        }(a, c, b, d, e, f, h, i)) || function(a, b, c, d, e, f) {
            a = /^([0-9]+)(_|.)([0-9]+)/.exec(f);
            return "Macintosh" == e && a ? (e = parseInt(a[1], 10), f = parseInt(a[3], 10), 10 < e || 10 == e && 4 <= f) : "Macintosh" == e && "Unknown" == f ? k : m
        }(a, c, b, d, e, f, h, i);
        return !j&&!("Ubuntu" ==
        e || "Linux" == e ? k : m) ? m : function(a, b) {
            if ("Chrome" == a) {
                var c = /([0-9]+.[0-9]+).([0-9]+).([0-9]+)/.exec(b);
                if (c) {
                    var e = parseFloat(c[1]), d = parseInt(c[2], 10), c = parseInt(c[3], 10);
                    if (!(6 <= e) && (4 < e || 4 == e && 249 < d || 4 == e && 249 == d && 4 <= c))
                        return k
                }
            }
            return m
        }(a, c, b, d, e, f, h, i)
    }));
    P(new N("d", function(a, c, b, d, e, f, h, i) {
        var j;
        j = (j = (j = (j = (j = m || ("Windows" == e && "5.1" == f ? k : m) || ("Windows" == e && "5.2" == f ? k : m) || ("Windows" == e && "6.0" == f ? k : m) || function(a, b, c, e, d, f) {
            a = /^([0-9]+).([0-9]+)/.exec(f);
            return "Windows" == d && a ? (d = parseInt(a[1], 10), a = parseInt(a[2], 10), 6 < d || 6 == d && 1 <= a) : m
        }(a, c, b, d, e, f, h, i)) || function(a, b, c, e, d, f) {
            a = /^([0-9]+)(_|.)([0-9]+)/.exec(f);
            return "Macintosh" == d && a ? (d = parseInt(a[1], 10), f = parseInt(a[3], 10), 10 < d || 10 == d && 4 <= f) : "Macintosh" == d && "Unknown" == f ? k : m
        }(a, c, b, d, e, f, h, i)) || ("Ubuntu" ==
        e || "Linux" == e ? k : m) || function(a, b, c, d, e, f, h, i) {
            a = /([0-9]+).([0-9]+)/.exec(f);
            return i.v && "Android" == e && a ? (e = parseInt(a[1], 10), i = parseInt(a[2], 10), 3 == e && 1 <= i || 3 < e) : m
        }(a, c, b, d, e, f, h, i)) || "CrOS" == e || function(a, b, c, e, d, f, i, h) {
            return h.H && "iPad" == d ? (a = /^([0-9]+)_([0-9]+)/.exec(f)) ? 5 <= parseInt(a[1], 10) : m : m
        }(a, c, b, d, e, f, h, i)) || function(a, b, c, e, d, f, h, i) {
            return i.I && ("iPhone" == d || "iPod" == d) ? (a = /^([0-9]+)_([0-9]+)/.exec(f)) ? 5 <= parseInt(a[1], 10) : m : m
        }(a, c, b, d, e, f, h, i);
        return !j ? m : function(a, b) {
            if ("Chrome" == a) {
                var c =
                /([0-9]+.[0-9]+).([0-9]+).([0-9]+)/.exec(b);
                if (c && 6 <= parseFloat(c[1]))
                    return k
            }
        }(a, c, b, d, e, f, h, i)
    }));
    P(new N("a", function(a, c, b, d, e, f, h, i) {
        var j;
        j = (j = m || function(a, b, c, d, e, f, i, h) {
            return h.H && "iPad" == e && (a = /^([0-9]+)_([0-9]+)/.exec(f)) ? (b = parseInt(a[2], 10), 4 == parseInt(a[1], 10) && 2 <= b) : m
        }(a, c, b, d, e, f, h, i)) || function(a, b, c, d, e, f, h, i) {
            if (i.I && ("iPhone" == e || "iPod" == e))
                if (a = /^([0-9]+)_([0-9]+)/.exec(f))
                    return b = parseInt(a[2], 10), 4 == parseInt(a[1], 10) && 2 <= b;
            return m
        }(a, c, b, d, e, f, h, i);
        return !j ? m : function(a, b) {
            if ("Chrome" == a) {
                var c = /([0-9]+.[0-9]+).([0-9]+).([0-9]+)/.exec(b);
                if (c && 6 <= parseFloat(c[1]))
                    return k
            }
        }(a,
        c, b, d, e, f, h, i)
    }));
    P(new N("a", function(a, c, b, d, e, f, h, i) {
        var j;
        j = m || ("Windows" == e && "5.1" == f ? k : m) || ("Windows" == e && "5.2" == f ? k : m) || ("Windows" == e && "6.0" == f ? k : m) || function(a, b, c, e, d, f) {
            a = /^([0-9]+).([0-9]+)/.exec(f);
            return "Windows" == d && a ? (d = parseInt(a[1], 10), a = parseInt(a[2], 10), 6 < d || 6 == d && 1 <= a) : m
        }(a, c, b, d, e, f, h, i);
        return !j&&!("Ubuntu" == e || "Linux" == e ? k : m) ? m : function(a, b, c, d) {
            return "Gecko" == c ? (a = /1.9.1b[1-3]{1}/, /1.9.1/.test(d)&&!a.test(d)) : m
        }(a, c, b, d, e, f, h, i)
    }));
    P(new N("b", function(a, c, b, d, e, f, h, i) {
        var j;
        j = m || function(a, b, c, d, e, f) {
            a = /^([0-9]+)(_|.)([0-9]+)/.exec(f);
            return "Macintosh" == e && a ? (e = parseInt(a[1], 10), f = parseInt(a[3], 10), 10 < e || 10 == e && 4 <= f) : "Macintosh" == e && "Unknown" == f ? k : m
        }(a, c, b, d, e, f, h, i);
        return !j ? m : function(a, b, c, d) {
            return "Gecko" == c ? (a = /1.9.1b[1-3]{1}/, /1.9.1/.test(d)&&!a.test(d)) : m
        }(a, c, b, d, e, f, h, i)
    }));
    P(new N("d", function(a, c, b, d, e, f, h, i) {
        var j;
        j = (j = (j = m || ("Windows" == e && "5.1" == f ? k : m) || ("Windows" == e && "5.2" == f ? k : m) || ("Windows" == e && "6.0" == f ? k : m) || function(a, b, c, d, e, f) {
            a = /^([0-9]+).([0-9]+)/.exec(f);
            return "Windows" == e && a ? (e = parseInt(a[1], 10), a = parseInt(a[2], 10), 6 < e || 6 == e && 1 <= a) : m
        }(a, c, b, d, e, f, h, i)) || function(a, b, c, e, d, f) {
            a = /^([0-9]+)(_|.)([0-9]+)/.exec(f);
            return "Macintosh" == d && a ? (d = parseInt(a[1], 10), f = parseInt(a[3], 10), 10 < d || 10 == d && 4 <= f) : "Macintosh" == d && "Unknown" == f ? k : m
        }(a, c, b, d, e, f, h, i)) || ("Ubuntu" ==
        e || "Linux" == e ? k : m) || i.v && "Android" == e;
        return !j ? m : function(a, b, c, d) {
            return "Gecko" == c && (b = /([0-9]+.[0-9]+)(.([0-9]+)|)/.exec(d)) ? (a = parseFloat(b[1]), b = parseInt(b[3], 10), 1.9 < a || 1.9 <= a && 1 < b) : m
        }(a, c, b, d, e, f, h, i)
    }));
    P(new N("i", function(a, c, b, d, e, f, h, i) {
        var j;
        j = m || ("Windows" == e && "5.1" == f ? k : m) || ("Windows" == e && "5.2" == f ? k : m) || ("Windows" == e && "6.0" == f ? k : m) || function(a, b, c, d, e, f) {
            a = /^([0-9]+).([0-9]+)/.exec(f);
            return "Windows" == e && a ? (e = parseInt(a[1], 10), a = parseInt(a[2], 10), 6 < e || 6 == e && 1 <= a) : m
        }(a, c, b, d, e, f, h, i);
        return !j ? m : function(a, b, c, d, e, f, i) {
            if ("MSIE" == a)
                return (a = /([0-9]+.[0-9]+)/.exec(b)) ? 6 <= parseFloat(a[1]) && (i === g || 9 > i) : m
        }(a, c, b, d, e, f, h, i)
    }));
    P(new N("d", function(a, c, b, d, e, f, h) {
        if (!(c = m))
            b = /^([0-9]+).([0-9]+)/.exec(f), "Windows" == e && b ? (c = parseInt(b[1], 10), b = parseInt(b[2], 10), c = 6 < c || 6 == c && 1 <= b) : c = m;
        a = c || ("Windows" == e && "6.0" == f ? k : m) ? "MSIE" == a ? 9 <= h : g : m;
        return a
    }));
    P(new N("d", function(a, c, b, d, e, f, h, i) {
        if (!(c = m))
            f = /^([0-9]+)/.exec(f), c = i.Ba && "Windows Phone" == e && f ? 8 <= parseInt(f[1], 10) : m;
        return !c ? m : "MSIE" == a
    }));
    P(new N("a", function(a, c, b, d, e, f, h, i) {
        var j;
        j = m || ("Windows" == e && "5.1" == f ? k : m) || ("Windows" == e && "5.2" == f ? k : m) || ("Windows" == e && "6.0" == f ? k : m) || function(a, b, c, d, e, f) {
            a = /^([0-9]+).([0-9]+)/.exec(f);
            return "Windows" == e && a ? (e = parseInt(a[1], 10), a = parseInt(a[2], 10), 6 < e || 6 == e && 1 <= a) : m
        }(a, c, b, d, e, f, h, i);
        return !j&&!("Ubuntu" == e || "Linux" == e ? k : m) ? m : function(a, b) {
            if ("Opera" == a) {
                var c = parseFloat(b);
                return 10.54 <= c && 11.1 > c
            }
            return m
        }(a, c, b, d, e, f, h, i)
    }));
    P(new N("b", function(a, c, b, d, e, f, h, i) {
        var j;
        j = m || function(a, b, c, e, d, f) {
            a = /^([0-9]+)(_|.)([0-9]+)/.exec(f);
            return "Macintosh" == d && a ? (d = parseInt(a[1], 10), f = parseInt(a[3], 10), 10 < d || 10 == d && 4 <= f) : "Macintosh" == d && "Unknown" == f ? k : m
        }(a, c, b, d, e, f, h, i);
        return !j ? m : function(a, b) {
            if ("Opera" == a) {
                var c = parseFloat(b);
                return 10.54 <= c && 11.1 > c
            }
            return m
        }(a, c, b, d, e, f, h, i)
    }));
    P(new N("d", function(a, c, b, d, e, f, h, i) {
        var j;
        j = (j = (j = m || ("Windows" == e && "5.1" == f ? k : m) || ("Windows" == e && "5.2" == f ? k : m) || ("Windows" == e && "6.0" == f ? k : m) || function(a, b, c, d, e, f) {
            a = /^([0-9]+).([0-9]+)/.exec(f);
            return "Windows" == e && a ? (e = parseInt(a[1], 10), a = parseInt(a[2], 10), 6 < e || 6 == e && 1 <= a) : m
        }(a, c, b, d, e, f, h, i)) || function(a, b, c, e, d, f) {
            a = /^([0-9]+)(_|.)([0-9]+)/.exec(f);
            return "Macintosh" == d && a ? (d = parseInt(a[1], 10), f = parseInt(a[3], 10), 10 < d || 10 == d && 4 <= f) : "Macintosh" == d && "Unknown" == f ? k : m
        }(a, c, b, d, e, f, h, i)) || ("Ubuntu" ==
        e || "Linux" == e ? k : m) || i.v && "Android" == e;
        return !j ? m : "Opera" == a ? 11.1 <= parseFloat(c) : m
    }));
    P(new N("b", function(a, c, b, d, e, f, h, i) {
        var j;
        j = m || function(a, b, c, d, e, f) {
            a = /^([0-9]+)(_|.)([0-9]+)/.exec(f);
            return "Macintosh" == e && a ? (e = parseInt(a[1], 10), f = parseInt(a[3], 10), 10 < e || 10 == e && 4 <= f) : "Macintosh" == e && "Unknown" == f ? k : m
        }(a, c, b, d, e, f, h, i);
        return !j ? m : function(a, b, c, e) {
            return "Safari" == a && "AppleWebKit" == c && (a = /([0-9]+.[0-9]+)/.exec(e)) ? (a = parseFloat(a[1]), 525.13 <= a && 534.5 > a) : m
        }(a, c, b, d, e, f, h, i)
    }));
    P(new N("a", function(a, c, b, d, e, f, h, i) {
        var j;
        j = m || ("Windows" == e && "5.1" == f ? k : m) || ("Windows" == e && "5.2" == f ? k : m) || ("Windows" == e && "6.0" == f ? k : m) || function(a, b, c, e, d, f) {
            a = /^([0-9]+).([0-9]+)/.exec(f);
            return "Windows" == d && a ? (d = parseInt(a[1], 10), a = parseInt(a[2], 10), 6 < d || 6 == d && 1 <= a) : m
        }(a, c, b, d, e, f, h, i);
        return !j ? m : function(a, b, c, d) {
            return "Safari" == a && "AppleWebKit" == c && (a = /([0-9]+.[0-9]+)/.exec(d)) ? (a = parseFloat(a[1]), 525.13 <= a && 534.5 > a) : m
        }(a, c, b, d, e, f, h, i)
    }));
    P(new N("d", function(a, c, b, d, e, f, h, i) {
        var j;
        j = (j = m || ("Windows" == e && "5.1" == f ? k : m) || ("Windows" == e && "5.2" == f ? k : m) || ("Windows" == e && "6.0" == f ? k : m) || function(a, b, c, d, e, f) {
            a = /^([0-9]+).([0-9]+)/.exec(f);
            return "Windows" == e && a ? (e = parseInt(a[1], 10), a = parseInt(a[2], 10), 6 < e || 6 == e && 1 <= a) : m
        }(a, c, b, d, e, f, h, i)) || function(a, b, c, e, d, f) {
            a = /^([0-9]+)(_|.)([0-9]+)/.exec(f);
            return "Macintosh" == d && a ? (d = parseInt(a[1], 10), f = parseInt(a[3], 10), 10 < d || 10 == d && 4 <= f) : "Macintosh" == d && "Unknown" == f ? k : m
        }(a, c, b, d, e, f, h, i);
        return !j ? m : function(a,
        b, c, d) {
            return "Safari" == a && "AppleWebKit" == c && (a = /([0-9]+.[0-9]+)/.exec(d)) ? 534.5 <= parseFloat(a[1]) : m
        }(a, c, b, d, e, f, h, i)
    }));
    P(new N("a", function(a, c, b, d, e, f, h, i) {
        var j;
        j = (j = m || function(a, b, c, d, e, f, i, h) {
            return h.H && "iPad" == e && (a = /^([0-9]+)_([0-9]+)/.exec(f)) ? (b = parseInt(a[2], 10), 4 == parseInt(a[1], 10) && 2 <= b) : m
        }(a, c, b, d, e, f, h, i)) || function(a, b, c, d, e, f, i, h) {
            if (h.I && ("iPhone" == e || "iPod" == e))
                if (a = /^([0-9]+)_([0-9]+)/.exec(f))
                    return b = parseInt(a[2], 10), 4 == parseInt(a[1], 10) && 2 <= b;
            return m
        }(a, c, b, d, e, f, h, i);
        return !j ? m : "Safari" == a && "AppleWebKit" == b || "Unknown" == a && "AppleWebKit" == b && ("iPhone" == e || "iPad" == e) ? k : m
    }));
    P(new N("d", function(a, c, b, d, e, f, h, i) {
        var j;
        j = (j = m || function(a, b, c, d, e, f, i, h) {
            return h.H && "iPad" == e ? (a = /^([0-9]+)_([0-9]+)/.exec(f)) ? 5 <= parseInt(a[1], 10) : m : m
        }(a, c, b, d, e, f, h, i)) || function(a, b, c, d, e, f, i, h) {
            return h.I && ("iPhone" == e || "iPod" == e) ? (a = /^([0-9]+)_([0-9]+)/.exec(f)) ? 5 <= parseInt(a[1], 10) : m : m
        }(a, c, b, d, e, f, h, i);
        return !j ? m : "Safari" == a && "AppleWebKit" == b || "Unknown" == a && "AppleWebKit" == b && ("iPhone" == e || "iPad" == e) ? k : m
    }));
    var T = new function() {
        this.X = [];
        this.B = {}
    };
    Ka(new S("AllFonts", function(a, c) {
        return c
    }));
    Ka(new S("DefaultFourFontsWithSingleFvdFamilies", function(a, c, b) {
        for (var d = 0; d < c.length; d++) {
            var e = c[d], f = a.replace(/(-1|-2)$/, "").slice(0, 28) + "-" + e;
            b.push(new wa(f, [e]))
        }
        a = {};
        for (e = 0; e < c.length; e++)
            b = c[e], d = b.charAt(1), (a[d] || (a[d] = [])).push(b);
        b = [[4, 3, 2, 1, 5, 6, 7, 8, 9], [7, 8, 9, 6, 5, 4, 3, 2, 1]];
        d = [];
        for (e = 0; e < b.length; e++)
            for (var f = b[e], h = 0; h < f.length; h++) {
                var i = f[h];
                if (a[i]) {
                    d = d.concat(a[i]);
                    break
                }
            }
        b = d;
        d = {};
        a = [];
        for (e = 0; e < b.length; e++)
            f = b[e], d[f] || (d[f] = k, a.push(f));
        b = [];
        for (d = 0; d < c.length; d++) {
            e = c[d];
            for (f = 0; f < a.length; f++)
                h = a[f], h == e && b.push(h)
        }
        return b
    }));
    T.B.a = "AllFonts";
    T.B.b = "AllFonts";
    T.B.d = "AllFonts";
    T.B.f = "AllFonts";
    T.B.i = "DefaultFourFontsWithSingleFvdFamilies";
    var W = new function() {
        this.C = {}
    };
    W.C.a = [];
    W.C.b = [];
    W.C.d = [];
    W.C.f = ["observeddomain"];
    W.C.i = ["observeddomain", "fontmask"];
    window.Typekit || (window.Typekit = {});
    if (!window.Typekit.load) {
        var Qa = window.Typekit.config || {}, Ra = l;
        Qa.k && (Ra = new U(Qa.k));
        var Sa = function(a, c) {
            setTimeout(a, c)
        }, X = new Q(Ra, new I(window), document.documentElement, Sa), Y = new R(window, Sa);
        window.Typekit.load = function() {
            X.load.apply(X, arguments)
        };
        window.Typekit.addKit = function() {
            X.O.apply(X, arguments)
        }
    }
    var Ta, Ua = l, Va = l, Wa = l, Xa, Z, $, K = window.Typekit.config || {};
    K.b && (Ua = new U(K.b), Va = new Oa(window, document, Ua, K.bu));
    K.p && (Wa = new U(K.p));
    Xa = new function() {
        var a = Wa;
        this.da = Va;
        this.ua = a
    };
    $ = new Aa(new I(window));
    $.$ = Xa;
    Z = new ya;
    Z.I=!K.si;
    Z.H=!K.st;
    Z.v=!K.sa;
    Z.Ba=!K.sw;
    Z.ea=!K.sb;
    $.fa = Z;
    K.w && ($.Aa = K.w);
    K.f && (Ta = new U(K.f), $.S = Ta);
    var L;
    if (K.fn)
        for (L = 0; L < K.fn.length; L += 2)
            $.n.push(new M(K.fn[L], K.fn[L + 1]));
    if (K.c)
        for (L = 0; L < K.c.length; L += 2)
            $.K.push(new sa);
    $.R = W;
    $.P = za;
    $.W = T;
    Y && Y.A.__webfonttypekitmodule__ ? (Y.O($), Y.load()) : (Ba($, (new ba(navigator.userAgent, document)).parse()), window.Typekit.addKit($));
})(this, document);

