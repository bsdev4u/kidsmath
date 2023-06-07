if (!self.define) {
    let e, s = {};
    const i = (i, n) => (i = new URL(i + ".js", n).href, s[i] || new Promise((s => {
        if ("document" in self) {
            const e = document.createElement("script");
            e.src = i, e.onload = s, document.head.appendChild(e)
        } else e = i, importScripts(i), s()
    })).then((() => {
        let e = s[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e
    })));
    self.define = (n, r) => {
        const t = e || ("document" in self ? document.currentScript.src : "") || location.href;
        if (s[t]) return;
        let o = {};
        const d = e => i(e, t), c = {module: {uri: t}, exports: o, require: d};
        s[t] = Promise.all(n.map((e => c[e] || d(e)))).then((e => (r(...e), o)))
    }
}
define(["./workbox-5b385ed2"], (function (e) {
    "use strict";
    e.setCacheNameDetails({prefix: "kidsmath"}), self.addEventListener("message", (e => {
        e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting()
    })), e.precacheAndRoute([{
        url: "/kidsmath/css/app.87ef1c43.css",
        revision: null
    }, {url: "/kidsmath/css/chunk-vendors.de32ab32.css", revision: null}, {
        url: "/kidsmath/index.html",
        revision: "2dd026a6a1c482a44457160aad470a26"
    }, {url: "/kidsmath/js/app.520d2636.js", revision: null}, {
        url: "/kidsmath/js/chunk-vendors.b8779c46.js",
        revision: null
    }, {url: "/kidsmath/manifest.json", revision: "50ad0f499c2627291e9d9ccb4d92dcd1"}, {
        url: "/kidsmath/robots.txt",
        revision: "b6216d61c03e6ce0c9aea6ca7808f7ca"
    }], {})
}));
//# sourceMappingURL=service-worker.js.map
