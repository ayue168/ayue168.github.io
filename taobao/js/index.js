!function (e) {
    function t(o) {
        if (n[o])return n[o].exports;
        var i = n[o] = {exports: {}, id: o, loaded: !1};
        return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
    }

    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
}([function (e, t, n) {
    "use strict";
    function o(e) {
        var t = p ? p.split(";") : [], n = {};
        return t.forEach(function (e) {
            if (e) {
                var t = e.split(":");
                n[t[0]] = t[1] ? decodeURIComponent(t[1]) : ""
            }
        }), s.toUrl(e, n, !0)
    }

    function i(e) {
        var t = o(r[e].url), n = c.getUCVersion();
        if (c.compareVer(n, "11.7.5.955") >= 0 && m && (t += "#utpreco_id=" + m), window.ucapi && window.ucapi.invoke && "android" === c.getOS()) {
            var i = function (n) {
                var o = {
                    url: t, pkg: r[e].pkg, fileName: r[e].fileName, success: function (t) {
                        g.sendEvent("foxyad_download", "success", {msg: JSON.stringify(t), type: n, aid: e})
                    }, fail: function (o) {
                        var i = o || "unknown error";
                        g.sendEvent("foxyad_download", "fail", {
                            msg: JSON.stringify(i),
                            type: n,
                            aid: e
                        }), window.location.href = t
                    }
                };
                return o
            };
            c.compareVer(n, "10.4.9999.9999") > 0 ? window.ucapi.invoke("biz.quickDownload", i("quickDownload")) : g.sendEvent("foxyad_download", "href", {
                msg: "location href",
                type: "lt105",
                aid: e
            }, function () {
                window.location.href = t
            })
        } else g.sendEvent("foxyad_download", "href", {msg: "location href", type: "ucapi404", aid: e}, function () {
            t && (window.location.href = t)
        })
    }

    var r = n(1), a = n(2), c = n(4), s = n(5), u = n(6), l = s.queryString("_aid"), p = s.queryString("_params"), d = s.queryString("_dl"), f = s.queryString("_redir"), m = s.queryString("r_id"), h = {
        AppID: "28b55b6cfd63",
        uc_param_str: "cpvednktntnw"
    }, g = new a(h, {refer: window.document.referrer, downSilent: 0, cid: s.queryString("_cid")});
    if (g.sendEvent("foxyad_download", "impress", {aid: l}), l && r[l]) {
        if (r[l].bg) {
            var v = window.document.getElementById("bg-img"), w = window.document.getElementById("background-img");
            v && w && (w.src = r[l].bg, v.style.display = "block")
        } else {
            var y = window.document.getElementById("bg");
            if (y) {
                var _ = window.document.getElementById("tips");
                _ && (_.innerHTML = "\u6b63\u5728\u8df3\u8f6c " + r[l].name), y.style.display = "block"
            }
        }
        if (d) {
            var k = new u;
            k.calloutApp(d).then(function () {
                g.sendEvent("foxyad_download", "deeplink_success", {aid: l}), f && (window.location.href = f)
            }).catch(function () {
                g.sendEvent("foxyad_download", "deeplink_fail", {aid: l}), f && 0 === f.indexOf("http") ? "youku" === l && "android" === c.getOS() ? i(l) : window.location.href = f : i(l)
            })
        } else f && 0 === f.indexOf("http") ? window.location.href = f : i(l)
    }
}, function (e, t) {
    "use strict";
    e.exports = {
        amap: {
            name: "\u4f18\u60e0\u5238\u641c\u7d22",
            url: "http://ffquan.com/app/2704965F",
            fileName: "\u4f18\u60e0\u5238\u641c\u7d22.apk",
            pkg: "com.autonavi.minimap",
            bg: "http://rescn.u3.ucweb.com/butterfly/res/bfad/img/midpage/gaode.jpg?v=20170412"
        },
        shuqireader: {
            name: "\u4f18\u60e0\u5238\u641c\u7d22",
            url: "http://ffquan.com/app/2704965F",
            fileName: "\u4f18\u60e0\u5238\u641c\u7d22.apk",
            pkg: "com.shuqi.controller",
            bg: "http://rescn.u3.ucweb.com/butterfly/res/bfad/img/midpage/shuqi.png?v=20170412"
        },
        youku: {
            name: "\u4f18\u60e0\u5238\u641c\u7d22",
            url: "http://ffquan.com/app/2704965F",
            fileName: "\u4f18\u60e0\u5238\u641c\u7d22.apk",
            pkg: "com.youku.phone",
            bg: "http://uyo.jietuono1.com/xz/js/uc_640x1080(1).jpg?v=20171031"
        },
        vip: {
            name: "\u552f\u54c1\u4f1a",
            url: "https://api.union.vip.com/getPromotion/v1",
            fileName: "\u552f\u54c1\u4f1a.apk",
            pkg: "com.achievo.vipshop",
            bg: "http://rescn.u3.ucweb.com/butterfly/res/bfad/img/midpage/vip.jpg?v=20170414"
        },
        liebao: {
            name: "\u730e\u8c79\u6e05\u7406\u5927\u5e08",
            url: "http://dl.cm.ksmobile.com/static/res/fixed/6c/CleanMaster_uc.apk",
            fileName: "\u730e\u8c79\u6e05\u7406\u5927\u5e08.apk",
            pkg: "com.cleanmaster.mguard_cn",
            bg: "http://rescn.u3.ucweb.com/butterfly/res/bfad/img/midpage/liebao.png?v=20170424"
        },
        didapinche: {
            name: "\u5600\u55d2\u62fc\u8f66",
            url: "http://www.didapinche.com/getapk.php?c=ch39&t.apk",
            fileName: "\u5600\u55d2\u62fc\u8f66.apk",
            pkg: "com.didapinche.booking",
            bg: "http://rescn.u3.ucweb.com/butterfly/res/bfad/img/midpage/didapinche.jpg?v=20170511"
        },
        pp: {
            name: "PP\u52a9\u624b",
            url: "https://ucan.25pp.com/PPAssistant_pp_83.apk?x-oss-process=udf/pp-udf,JiQzLjEuMz4nJy8zMzd9aGgqaTc3aSQpaDcyJSsuJGg0NyIkLiYrNGh1aHg0LiN6dH9xdmEzLyIqInooNSYpICJhKy40MxM%2BNyJ6dg%3D%3D",
            fileName: "PP\u52a9\u624b.apk",
            pkg: "com.pp.assistant",
            bg: "http://rescn.u3.ucweb.com/butterfly/res/bfad/img/midpage/pp.jpg?v=20170614"
        },
        pp82: {
            name: "PP\u52a9\u624b",
            url: "http://ucan.25pp.com/PPAssistant_pp_82.apk",
            fileName: "PP\u52a9\u624b.apk",
            pkg: "com.pp.assistant",
            bg: "http://rescn.u3.ucweb.com/butterfly/res/bfad/img/midpage/PP3.jpg?v=20170804"
        },
        pp84: {
            name: "PP\u52a9\u624b",
            url: "https://ucan.25pp.com/PPAssistant_pp_84.apk?x-oss-process=udf/pp-udf,JiQzLjEuMz4nJy8zMzd9aGgqaTc3aSQpaDc3JjAiJWgiKiUiI2g0MiU0JDUuNzMuKClodWojIjMmLitpLzMqK3guI3p2d3d0cnZyYTN6dnN%2Bf3J1fnVyf3dwfmEseiYhI3Z2cnJ1Jn4icCEhJXU%3D",
            fileName: "PP\u52a9\u624b.apk",
            pkg: "com.pp.assistant",
            bg: "http://rescn.u3.ucweb.com/butterfly/res/bfad/img/midpage/pp1.jpg?v=20170720"
        },
        pp85: {
            name: "PP\u52a9\u624b",
            url: "https://ucan.25pp.com/PPAssistant_PP_85.apk?x-oss-process=udf/pp-udf,JiQzLjEuMz4nJy8zMzd9aGgqaTc3aSQpaDc3JjAiJWgiKiUiI2g0MiU0JDUuNzMuKClodWojIjMmLitpLzMqK3guI3p2d3d3dXByYTN6dnN%2Bf3J1fnRyf3VycGEsenJxIXB1d3V0cXIlJCFwIiQ%3D",
            fileName: "PP\u52a9\u624b.apk",
            pkg: "com.pp.assistant",
            bg: "http://rescn.u3.ucweb.com/butterfly/res/bfad/img/midpage/pp1.jpg?v=20170720"
        },
        pp86: {
            name: "PP\u52a9\u624b",
            url: "https://ucan.25pp.com/PPAssistant_PP_86.apk?x-oss-process=udf/pp-udf,JiQzLjEuMz4nJy8zMzd9aGgqaTc3aSQpaDc3JjAiJWgiKiUiI2g0MiU0JDUuNzMuKClodWojIjMmLitpLzMqK3guI3p2d3V%2BcnR2YTN6dnN%2Bf3J1fnN1cnd%2Bd2EsenQhdnJwIiJyISFxJnUmciM%3D",
            fileName: "PP\u52a9\u624b.apk",
            pkg: "com.pp.assistant",
            bg: "http://rescn.u3.ucweb.com/butterfly/res/bfad/img/midpage/pp1.jpg?v=20170720"
        },
        weibo: {name: "\u5fae\u535a", url: "", fileName: "", pkg: "", bg: ""},
        huluxia: {
            name: "\u846b\u82a6\u4fa0",
            url: "http://reg.ksyun.huluxia.com/new/2017/07/14/huluxia-tool-197-3.5.1.67-tool_pp-20170710211451-release.apk",
            fileName: "\u846b\u82a6\u4fa0.apk",
            pkg: "com.huluxia.gametools",
            bg: "http://rescn.u3.ucweb.com/butterfly/res/bfad/img/midpage/huluxia.jpg?v=20170720"
        },
        sinanews: {
            name: "\u65b0\u6d6a\u65b0\u95fb",
            url: "http://down.apps.sina.cn/sinasrc/b3/d2/b9938f5fa2ec295f4d09b625e825d2b3.apk",
            fileName: "\u65b0\u6d6a\u65b0\u95fb.apk",
            pkg: "com.sina.news",
            bg: ""
        },
        meitu: {
            name: "\u7f8e\u56fe\u79c0\u79c0",
            url: "http://xiuxiu.android.dl.meitu.com/kuake.apk",
            fileName: "\u7f8e\u56fe\u79c0\u79c0.apk",
            pkg: "com.mt.mtxx.mtxx",
            bg: "http://rescn.u3.ucweb.com/butterfly/res/bfad/img/midpage/mp.jpg?v=0831"
        },
        meitu2: {
            name: "\u7f8e\u56fe\u79c0\u79c0",
            url: "http://xiuxiu.android.dl.meitu.com/kuake1.apk",
            fileName: "\u7f8e\u56fe\u79c0\u79c0.apk",
            pkg: "com.mt.mtxx.mtxx",
            bg: "http://rescn.u3.ucweb.com/butterfly/res/bfad/img/midpage/mt.jpg?v=0831"
        },
        bamen: {
            name: "\u516b\u95e8\u795e\u5668",
            url: "http://dl.bamenzhushou.com/bamen/ucbamen.apk",
            fileName: "\u516b\u95e8\u795e\u5668.apk",
            pkg: "com.zhangkongapp.joke.bamenshenqi",
            bg: "http://rescn.u3.ucweb.com/butterfly/res/bfad/img/midpage/bamen.jpg?v=0922"
        }
    }
}, function (e, t, n) {
    "use strict";
    function o(e, t) {
        var n = e || {};
        n.uc_param_str || (n.uc_param_str = "dnfrcpvenwnt");
        var o = this;
        if (this._opts = n, o._common = {}, "undefined" != typeof t && (o._common = Object.keys(t).reduce(function (e, n) {
                var i = e || {}, r = t[n];
                return "boolean" != typeof r && "number" != typeof r || (r += ""), "string" != typeof r ? i : "appid" === n ? (o._opts.AppID = r, i) : "uc_param_str" === n ? (o._opts.uc_param_str = r, i) : (i[n] = r, i)
            }, {})), !this._opts.AppID)throw new Error("AppID is required");
        var i = "cn", r = "direct";
        this._opts.WA_URL = a[r][i]
    }

    function i(e, t, n) {
        var o = /\?/gi.test(e), i = [], r = Object.keys(t);
        return r.forEach(function (e) {
            null !== t[e] && void 0 !== t[e] ? i.push(e + "=" + (n ? encodeURIComponent(t[e]) : t[e])) : i.push(e + "=")
        }), e + (o ? "&" + i.join("&") : "?" + i.join("&"))
    }

    var r = n(3), a = {direct: {cn: "https://track.uc.cn/"}};
    o.prototype.sendEvent = function (e, t, n, o) {
        var i = {lt: "event"}, a = [].slice.call(arguments, 0), c = null, s = ["e_c", "e_a", "e_n", "e_v"];
        a.forEach(function (e, t) {
            "object" != typeof e && "function" != typeof e ? i[s[t]] = e : "object" == typeof a[t] ? r(i, a[t]) : "function" == typeof a[t] && (c = a[t])
        }), this.send(i, c, !1)
    }, o.prototype.send = function (e, t, n) {
        var o = this, a = r({
            uc_param_str: o._opts.uc_param_str,
            appid: o._opts.AppID
        }, o._common, e), c = i(o._opts.WA_URL + "collect", a, !1), s = new Image;
        return s.show = "force", t && "function" == typeof t && (s.onerror = function () {
            t()
        }), s.src = c, c
    }, e.exports = o
}, function (e, t) {
    "use strict";
    e.exports = function (e) {
        if (null === e)throw new TypeError("Cannot convert undefined or null to object");
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            if (null !== n)for (var o in n)Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
        }
        return e
    }
}, function (e, t) {
    function n() {
        var e = window.navigator.userAgent.match(/UCBrowser\/([\d\.]+)/i);
        return e && e.length > 1 && e[1] || ""
    }

    function o(e, t) {
        var n = 0;
        if ("string" == typeof e && "string" == typeof t) {
            for (var o = e.split("."), i = t.split("."), r = Math.min(o.length, i.length), a = 0; a < r; a++) {
                var c = parseInt(o[a], 10), s = parseInt(i[a], 10);
                if (c > s)return n = 1;
                if (c < s)return n = -1
            }
            o.length > i.length ? n = 1 : o.length < i.length && (n = -1)
        } else n = -2;
        return n
    }

    function i() {
        var e = window.navigator.userAgent;
        return /Android/i.test(e) ? "android" : /iPhone|iPad|iPod/i.test(e) ? "iphone" : "unknown"
    }

    e.exports = {getUCVersion: n, compareVer: o, getOS: i}
}, function (e, t) {
    e.exports = {
        queryString: function (e, t) {
            var n = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", t ? "i" : ""), o = window.location.search.substr(1).match(n);
            return o && o[2] ? decodeURIComponent(o[2]) : ""
        }, toUrl: function (e, t, n) {
            var o = /\?/gi.test(e), i = [], r = Object.keys(t);
            return r.forEach(function (e) {
                null !== t[e] && void 0 !== t[e] ? i.push(e + "=" + (n ? encodeURIComponent(t[e]) : t[e])) : i.push(e + "=")
            }), i.length ? e + (o ? "&" + i.join("&") : "?" + i.join("&")) : e
        }
    }
}, function (e, t, n) {
    "use strict";
    function o() {
    }

    function i(e) {
        var t = document.querySelectorAll("[data-adid]");
        return t = [].slice.call(t), !e && t.length <= 0 && I < 5 ? (I += 1, void setTimeout(function () {
            i(!1)
        }, 200 * I)) : (L && setTimeout(function () {
            L = !1, i(!0)
        }, 500), void t.forEach(function (e, t) {
            var n = e.getAttribute("data-adid"), o = e.getBoundingClientRect(), i = C.innerHeight || j.documentElement.clientHeight;
            o.top < i && !e.getAttribute("data-impress") && (u(n, "impress"), e.setAttribute("data-impress", 1))
        }))
    }

    function r(e, t) {
        2 === e.url_type && e.url_addr ? C.location.href = e.url_addr : t && b({
            downLink: t,
            pkgName: e.pkg_name,
            fileName: ""
        }, "quick")
    }

    function a(e) {
        return ["com.UCMobile", "com.ucweb.iphone.lowversion", "com.uc.infoflow", "com.uc.ucnews"].indexOf(e) >= 0
    }

    function c() {
        return x.isWeChat() || "iphone" === m.getOS() && x.isQQ()
    }

    function s(e, t) {
        var n = x._extends({}, {
            appid: y,
            b_id: "foxy_chan",
            tm: Date.now(),
            uc_param_str: "cpfrvelasvprktdndd"
        }, e || {}), o = t || S, i = w + "?" + p(n);
        if (C.navigator.sendBeacon)C.navigator.sendBeacon(i, null), setTimeout(o, 1); else {
            var r = new Image, a = !1, c = setTimeout(function () {
                a || (a = !0, o())
            }, 500);
            r.onerror = function () {
                a = !0, clearTimeout(c), o()
            }, r.src = i
        }
    }

    function u(e, t, n) {
        var o = E.filter(function (t) {
            return t.adid === e
        }), i = "string" == typeof e ? e.split(":") : [], r = o.length > 0 ? o[0] : null, a = {
            c_id: r ? r.channel_id : i[2] || "",
            ev_ac: t,
            ev_ct: "",
            u_id: r ? r.unit_id : i[3] || "",
            a_id: r ? r.asset_id : i[1] || "",
            p_id: r ? r.plan_id : i[4] || "",
            ab_tag: r ? r.ab_tag : "none",
            r_id: i && i[0] ? i[0] : ""
        };
        s(a, n)
    }

    var l = n(7), p = l.toQueryString, d = n(8), f = n(11), m = n(12), h = n(13), g = new h, v = "https://utp.ucweb.com/a", w = "https://utp-dmp.ucweb.com/api/collect", y = "28b55b6cfd63", _ = n(26), k = n(31), b = n(32), x = n(29), S = function () {
    }, C = x.getWindow(), E = [], N = n(33);
    o.prototype.load = function (e) {
        function t() {
            return new d(function (t, n) {
                var o = (new Date).getTime();
                l.ajax({
                    url: v + "?" + p(e), method: "GET", success: function (i) {
                        N.sendEvent("jssdk", "loaded", {
                            dur: (new Date).getTime() - o,
                            st: i.status,
                            r_id: i.reqid,
                            cnt: i.assets ? i.assets.length : 0,
                            cids: e.cids
                        }), 1e3 === i.status ? _(i.assets, i.reqid, e).then(function (e) {
                            var n = e.filter(function (e) {
                                return !!e
                            });
                            E = E.concat(n), t({status: 1e3, reqid: i.reqid, result: n})
                        }).catch(function () {
                            n({status: -1, msg: "format_data_err"})
                        }) : t({status: i.status})
                    }, error: function (t) {
                        s({
                            ev_ac: "loaded",
                            dur: (new Date).getTime() - o,
                            st: -2,
                            r_id: "",
                            cnt: 0,
                            cids: e.cids,
                            msg: t ? t.message : "net_err"
                        }), n({status: -2, msg: t ? t.message : "net_err"})
                    }
                })
            })
        }

        var n = C.document, o = C.location;
        if (e.p_u = e.p_u || o.href, e.p_t = e.p_t || n.title, e.limit = e.limit ? +e.limit : 1, e.fromCache = !!e.fromCache, !e.p_k) {
            var i = n.querySelector('meta[name="keywords"]');
            e.p_k = i ? i.getAttribute("content") : ""
        }
        return e.p_r = e.p_r || n.referrer, e.uc_param_str = e.uc_param_str || "cpfrvelasvprktdndd", e.utp_ver = 2, x.isUC() ? new d(function (n, o) {
            var i = ["com.sina.weibo", "com.youku.phone", "com.autonavi.minimap", "com.qiyi.video", "com.sina.news"];
            f.queryApp({pkgs: i}).then(function (r) {
                var a = [];
                i.forEach(function (e) {
                    var t = "[object Object]" === Object.prototype.toString.call(r[e]);
                    t && Object.keys(r[e]).length > 0 ? a.push(1) : a.push(0)
                }), e.i_a = a.join(","), t().then(n).catch(o)
            }).catch(function () {
                return t().then(n).catch(o)
            })
        }) : t()
    }, o.prototype.impress = function (e, t) {
        u.call(this, e, "impress", t)
    };
    var I = 0, j = C.document, L = !0;
    setTimeout(function () {
        i(!1)
    }, 200), C.addEventListener("scroll", function () {
        i(!0)
    }, !1), o.prototype.click = function (e, t, n, o) {
        var i, s = !0, l = !0, p = {};
        "[object object]" === Object.prototype.toString.apply(t).toLowerCase() ? (p = t, i = p.cb || S, s = p.hasOwnProperty("isDownload") ? p.isDownload : s, l = p.hasOwnProperty("isCallout") ? p.isCallout : l) : "function" == typeof t ? i = t : (s = "undefined" == typeof t || !!t, i = n || S);
        var d = E.filter(function (t) {
            return t.adid === e
        });
        if (u(e, "click"), d && d.length > 0) {
            var f = d[0], m = f.deeplink;
            !m && f.detail && f.detail.deeplink && (m = f.detail.deeplink);
            var h = o || p.circlePage || f.circle_page;
            !h && 2 === f.url_type && f.url_addr && (h = f.url_addr), h || (h = C.location.href), m && 0 === m.indexOf("uclink://") && (m += /&url=$/gi.test(m) ? encodeURIComponent(h) : "&url=" + encodeURIComponent(h));
            var v = f.detail && f.detail.down_link ? f.detail.down_link : void 0;
            !v && 1 === f.url_type && f.url_addr && (v = f.url_addr), f.detail && f.detail.bid ? g.sdkClick({
                pkgName: f.pkg_name,
                ucLink: m,
                adChannel: f.detail.ch,
                adBid: f.detail.bid,
                appID: f.detail.app_key,
                downLink: v,
                adPosID: "",
                cid: f.detail.cid,
                noDownload: !s,
                landingPage: h,
                directDownload: !l,
                fileName: ""
            }).then(function () {
                i()
            }) : s && a(f.pkg_name) && c() ? (m = k(f.pkg_name, h), u(e, "call_qq"), C.location.href = m) : m && l ? g.calloutApp(m).then(function () {
                u(e, "call_suc"), i()
            }).catch(function () {
                u(e, "call_fail"), i(new Error("call_fail")), r(f, v)
            }) : s ? r(f, v) : i(new Error("no_down"))
        } else i(new Error("no_ad"))
    }, o.prototype.calloutApp = g.calloutApp, e.exports = o
}, function (e, t) {
    function n(e, t, n, o) {
        "function" == typeof t && (n = t, t = {}), i({url: e, data: t, success: n, error: o, method: "GET"})
    }

    function o(e, t, n, o) {
        "function" == typeof t && (n = t, t = {}), i({url: e, data: t, success: n, error: o, method: "POST"})
    }

    function i(e) {
        var t;
        a(e);
        var n = new XMLHttpRequest;
        if (n.onreadystatechange = function () {
                4 === n.readyState && (t && clearTimeout(t), n.status >= 200 && n.status < 300 || 304 === n.status ? e.success && e.success(r(n.responseText), n) : e.error && e.error(new Error("\u8bf7\u6c42\u5931\u8d25:" + n.status), n))
            }, n.open(e.method, e.url, !0), e.headers)for (var o in e.headers)n.setRequestHeader(o, e.headers[o]);
        n.send(c(e.data)), t = setTimeout(function () {
            return n.abort(), "function" == typeof e.error && e.error(new Error("\u8bf7\u6c42\u8d85\u65f6!"), n), !1
        }, e.timeout)
    }

    function r(e) {
        var t = e;
        try {
            t = JSON.parse(e)
        } catch (e) {
            console.error(e)
        }
        return t
    }

    function a(e) {
        e.method = e.method || "GET", "POST" === e.method && (e.headers = e.headers || {}, e.headers["Content-type"] = e.headers["Content-type"] || "application/x-www-form-urlencoded"), e.timeout = e.timeout || 5e3
    }

    function c(e) {
        var t = [];
        if ("string" == typeof e)return e;
        for (var n in e)e.hasOwnProperty(n) && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
        return t.join("&")
    }

    e.exports = {get: n, post: o, ajax: i, toQueryString: c}
}, function (e, t, n) {
    function o(e) {
        i.call(this);
        var t = this, n = function () {
            var e = [].slice.call(arguments, 0);
            t.off("reject"), e.unshift("resolve"), t.emit.apply(t, e)
        }, o = function () {
            var e = [].slice.call(arguments, 0);
            t.off("resolve"), e.unshift("reject"), t.emit.apply(t, e)
        };
        e && setTimeout(function () {
            var t = e(n, o);
            t && t.then(n, o)
        }, 0)
    }

    var i = n(9), r = n(10);
    r(i, o), o.prototype.then = function (e, t) {
        var n = new o;
        if (e) {
            var i = function () {
                var t = [].slice.call(arguments, 0), i = e.apply(null, t);
                i instanceof o ? i.then(function () {
                    var e = [].slice.call(arguments, 0);
                    e.unshift("resolve"), n.emit.apply(n, e)
                }, function () {
                    var e = [].slice.call(arguments, 0);
                    e.unshift("reject"), n.emit.apply(n, e)
                }) : n.emit("resolve", i)
            };
            this.once("resolve", i)
        }
        if (t) {
            var r = function (e) {
                var o = [].slice.call(arguments, 0), i = t.apply(null, o);
                n.emit("reject", i)
            };
            this.once("reject", r)
        } else this.once("reject", function (e) {
            n.emit("reject", e)
        });
        return n
    }, o.prototype.catch = function (e) {
        this.once("reject", e)
    }, o.all = function (e) {
        function t(e) {
            return function () {
                var t = [].slice.call(arguments, 0);
                1 === t.length && (t = t[0]), l.splice(e, 0, t), s++, i()
            }
        }

        function n() {
            var e = [].slice.call(arguments, 0);
            1 === e.length && (e = e[0]), u.push(e), i()
        }

        function i() {
            s === c && r ? r.call(null, l) : u.length > 0 && a && a.apply(null, u)
        }

        var r, a, c = e.length, s = 0, u = [], l = [];
        return e.forEach(function (e, o) {
            e.then(t(o)).catch(n)
        }), new o(function (e, t) {
            r = e, a = t, i()
        })
    }, window.Promise ? e.exports = window.Promise : e.exports = o
}, function (e, t) {
    "use strict";
    function n() {
        this._evts = {}, this._once_evts = {}
    }

    n.prototype.on = function (e, t) {
        this._evts[e] = this._evts[e] || [], this._evts[e].push(t)
    }, n.prototype.once = function (e, t) {
        this._once_evts[e] = this._once_evts[e] || [], this._once_evts[e].push(t)
    }, n.prototype.emit = function (e) {
        var t = this._evts[e], n = this._once_evts[e], o = this;
        if (t && t.length > 0) {
            var i = [].slice.call(arguments, 1);
            t.forEach(function (e) {
                e.apply(o, i)
            })
        }
        if (n && n.length > 0)for (var r, i = [].slice.call(arguments, 1); r = n.shift();)r.apply(o, i)
    }, n.prototype.off = function (e) {
        this._evts[e] && (this._evts[e] = null, delete this._evts[e]), this._once_evts[e] && (this._once_evts[e] = null, delete this._once_evts[e])
    }, e.exports = n
}, function (e, t) {
    "use strict";
    e.exports = function (e, t) {
        function n() {
            this.constructor = t
        }

        for (var o in e)e.hasOwnProperty(o) && (t[o] = e[o]);
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }
}, function (e, t, n) {
    "use strict";
    function o() {
        var e = window.navigator.userAgent;
        return /Android/i.test(e) ? "android" : /iPhone|iPad|iPod/i.test(e) ? "ios" : "unknown"
    }

    function i(e) {
        var t = o();
        return function (n) {
            return n = n || {}, new r(function (o, i) {
                function r() {
                    clearTimeout(s);
                    var e = [].slice.call(arguments);
                    o.apply(null, e)
                }

                function a() {
                    clearTimeout(s);
                    var e = [].slice.call(arguments);
                    i.apply(null, e)
                }

                var c = window.ucapi || window.top.ucapi;
                "unknown" !== t && c ? (n.success = r, n.fail = a, n.timeout = +n.timeout || 1e3, c.invoke(e, n)) : i(new Error("Unknown platform"));
                var s = setTimeout(a.bind(null, new Error("Timeout expired in " + n.timeout + "ms")), n.timeout)
            })
        }
    }

    var r = n(8), a = {
        getVersion: "base.getVersion",
        needShowUcnewsBanner: "biz.needShowUcnewsBanner",
        downSilent: "download.downSilent",
        queryApp: "biz.queryApp",
        quickDown: "biz.quickDownload",
        callUCNews: {ios: "biz.pageDiversion"},
        getPageInfo: "promotion.getPageInfo"
    }, c = o(), s = {};
    Object.keys(a).forEach(function (e) {
        var t, n = a[e];
        t = "string" == typeof n ? n : a[e][c], t && (s[e] = i(t))
    }), e.exports = s
}, function (e, t) {
    function n() {
        var e = window.navigator.userAgent.match(/UCBrowser\/([\d\.]+)/i);
        return e && e.length > 1 && e[1] || ""
    }

    function o(e, t) {
        var n = 0;
        if ("string" == typeof e && "string" == typeof t) {
            for (var o = e.split("."), i = t.split("."), r = Math.min(o.length, i.length), a = 0; a < r; a++) {
                var c = parseInt(o[a], 10), s = parseInt(i[a], 10);
                if (c > s)return n = 1;
                if (c < s)return n = -1
            }
            o.length > i.length ? n = 1 : o.length < i.length && (n = -1)
        } else n = -2;
        return n
    }

    function i() {
        var e = window.navigator.userAgent;
        return /Android/i.test(e) ? "android" : /iPhone|iPad|iPod/i.test(e) ? "iphone" : "unknown"
    }

    e.exports = {getUCVersion: n, compareVer: o, getOS: i}
}, function (e, t, n) {
    "use strict";
    function o() {
    }

    var i = n(14), r = n(16), a = n(18);
    o.prototype.sdkClick = function (e) {
        if (e.ucLink && !e.landingPage) {
            var t = /^uclink:\/\/.*&url=(.*)$/gi, n = t.exec(e.ucLink);
            n && n[1] && (e.landingPage = decodeURIComponent(n[1]))
        }
        return i.click(e)
    }, o.prototype.bindClick = function (e, t) {
        if (t) {
            var n = r.generateUUID(), o = new a(t, {
                text: function () {
                    return "UCFP:" + n
                }
            });
            return o.on("success", function (t) {
                return i.click(e, n)
            }), o.on("error", function (t) {
                return i.click(e, "fail")
            }), o.destroy.bind(o)
        }
        throw new Error("bindclick param need selector")
    }, o.prototype.calloutApp = i.calloutApp, e.exports = o
}, function (e, t, n) {
    "use strict";
    function o(e, t) {
        return "fail" === t ? l(g + "?" + f({
                st_name: "JSSDK",
                st_event: "clipboard_fail",
                appkey: e.appID,
                ch: e.adChannel,
                bid: e.adBid,
                pkg: e.pkgName,
                uc_param_str: "cpfrvelasvprktdndd"
            })) : t && l(g + "?" + f({
                st_name: "JSSDK",
                st_event: "clipboard_suc",
                appkey: e.appID,
                ch: e.adChannel,
                bid: e.adBid,
                pkg: e.pkgName,
                uc_param_str: "cpfrvelasvprktdndd"
            })), new m(function (n) {
            function o() {
                s(e, "fail" === t ? "" : t, function (t) {
                    t && l(g + "?" + f({
                            st_name: "JSSDK",
                            st_event: "collect_err",
                            appkey: e.appID,
                            ch: e.adChannel,
                            bid: e.adBid,
                            pkg: e.pkgName,
                            uc_param_str: "cpfrvelasvprktdndd"
                        })), c(e)
                })
            }

            function c() {
                var t = w.isWeChat() || "iphone" === d.getOS() && w.isQQ();
                t ? e.noDownload || r(e) : i(e).then(n)
            }

            var u = w.isWeChat() || w.isQQ(), p = d.getUCVersion();
            "android" === d.getOS() && w.isUC() && d.compareVer(p, "11.5.5") >= 0 ? a(e).then(n).catch(function (t) {
                if (4 === +t.message) {
                    if (l(g + "?" + f({
                                st_name: "JSSDK",
                                st_event: "err_4",
                                appkey: e.appID,
                                ch: e.adChannel,
                                bid: e.adBid,
                                pkg: e.pkgName,
                                uc_param_str: "cpfrvelasvprktdndd"
                            })), !e.noDownload) {
                        var n = e.fileName ? e.fileName : e.pkgName;
                        _({downLink: e.downLink, pkgName: e.pkgName, fileName: n + ".apk"}, "quick")
                    }
                } else o()
            }) : "iphone" === d.getOS() && u && e.directDownload !== !0 ? y.location.href = "http://unet.ucweb.com/ucbrowser/ulcall?" + f({
                    st_name: "JSSDK",
                    appkey: e.appID,
                    ch: e.adChannel,
                    bid: e.adBid,
                    pkg: e.pkgName,
                    fr: "ios",
                    fromULcall: 1,
                    ucLink: e.ucLink
                }) : o()
        })
    }

    function i(e) {
        return new m(function (t, n) {
            var o = w.isWeChat() || "iphone" === d.getOS() && w.isQQ();
            return o ? void r(e) : void(e.directDownload ? (l(g + "?" + f({
                    st_name: "JSSDK",
                    st_event: "direct_download",
                    appkey: e.appID,
                    ch: e.adChannel,
                    bid: e.adBid,
                    pkg: e.pkgName
                })), e.noDownload ? t() : setTimeout(function () {
                var t = e.fileName ? e.fileName : e.pkgName;
                _({downLink: e.downLink, pkgName: e.pkgName, fileName: t + ".apk"}, "quick")
            }, 200)) : c(e).then(t).catch(function () {
                if (e.noDownload)t(); else {
                    var n = e.fileName ? e.fileName : e.pkgName;
                    _({downLink: e.downLink, pkgName: e.pkgName, fileName: n + ".apk"}, "quick")
                }
            }))
        })
    }

    function r(e) {
        if (e.directDownload)l(g + "?" + f({
                st_name: "JSSDK",
                st_event: "direct_download",
                appkey: e.appID,
                ch: e.adChannel,
                bid: e.adBid,
                pkg: e.pkgName
            })), e.noDownload || setTimeout(function () {
            var t = e.fileName ? e.fileName : e.pkgName;
            _({downLink: e.downLink, pkgName: e.pkgName, fileName: t + ".apk"}, "quick")
        }, 200); else {
            var t = "", n = "";
            w.isWeChat() && (n = "wechat", t = v(e.pkgName, e.landingPage)), "iphone" === d.getOS() && w.isQQ() && (n = "qq", t = v(e.pkgName, e.landingPage)), t && (l(g + "?" + f({
                    st_name: "JSSDK",
                    st_event: "call_qq",
                    appkey: e.appID,
                    ch: e.adChannel,
                    bid: e.adBid,
                    pkg: e.pkgName,
                    type: n,
                    uc_param_str: "cpfrvelasvprktdndd"
                })), y.location.href = t)
        }
    }

    function a(e) {
        var t = document.createElement("iframe");
        return t.src = k, t.setAttribute("frameborder", "0"), t.setAttribute("width", "0"), t.setAttribute("height", "0"), t.style.cssText = "width:0 !important;height:0 !important;margin:0 !important;padding:0 !important;opacity:0 !important;pointer-events:none !important;position:fixed !important;top:0 !important;left:0 !important;", new m(function (n, o) {
            function i(e) {
                r && clearTimeout(r), window.removeEventListener("message", i), document.body.removeChild(t);
                var c = e.data;
                "string" == typeof c && (c = JSON.parse(c)), "base.clickAdvertInfo" === c.name && c.symbol === a && c.result ? n() : o(c.errCode ? new Error(c.errCode) : new Error("INVALID_CB"))
            }

            var r, a = (new Date).getTime();
            t.onload = function () {
                t.contentWindow.postMessage({name: "base.clickAdvertInfo", param: e, symbol: a}, "*")
            }, document.body.appendChild(t), window.addEventListener("message", i), r = setTimeout(function () {
                document.body.removeChild(t), window.removeEventListener("message", i), o(new Error("TIMEOUT"))
            }, 3e3)
        })
    }

    function c(e) {
        var t = e.oldLink ? e.oldLink : e.ucLink;
        return new m(function (n, o) {
            u(t, e.timeout).then(function (t) {
                var o = t.result || "call_suc";
                l(t && "undefined" != typeof t.timeout ? g + "?" + f({
                    st_name: "JSSDK",
                    st_event: o,
                    appkey: e.appID,
                    ch: e.adChannel,
                    bid: e.adBid,
                    pkg: e.pkgName,
                    timeout: t.timeout,
                    uc_param_str: "cpfrvelasvprktdndd"
                }) : g + "?" + f({
                    st_name: "JSSDK",
                    st_event: o,
                    appkey: e.appID,
                    ch: e.adChannel,
                    bid: e.adBid,
                    pkg: e.pkgName,
                    uc_param_str: "cpfrvelasvprktdndd"
                })), n()
            }).catch(function (t) {
                var n = t.err && t.err.message.indexOf("call_local_fail") !== -1 ? t.err.message : "call_timeout";
                l(t && "undefined" != typeof t.timeout ? g + "?" + f({
                    st_name: "JSSDK",
                    st_event: n,
                    appkey: e.appID,
                    ch: e.adChannel,
                    bid: e.adBid,
                    pkg: e.pkgName,
                    timeout: t.timeout,
                    uc_param_str: "cpfrvelasvprktdndd"
                }) : g + "?" + f({
                    st_name: "JSSDK",
                    st_event: n,
                    appkey: e.appID,
                    ch: e.adChannel,
                    bid: e.adBid,
                    pkg: e.pkgName,
                    uc_param_str: "cpfrvelasvprktdndd"
                })), o(t.err)
            })
        })
    }

    function s(e, t, n) {
        var o = n || b;
        p.ajax({
            url: h,
            method: "POST",
            headers: {"Content-Type": "application/json; charset=UTF-8"},
            data: JSON.stringify({
                packageInfo: {},
                adInfo: {
                    ch: e.adChannel,
                    bid: e.adBid,
                    appId: e.appID,
                    deeplink: e.ucLink,
                    adPosId: e.adPosID,
                    targetPkg: e.pkgName,
                    cid: e.cid
                },
                deviceInfo: {ua: y.navigator.userAgent, fp: t},
                sdkInfo: {ver: "1.1.0", type: "js"}
            }),
            success: function () {
                o()
            },
            error: function (e) {
                o(e)
            },
            timeout: 3e3
        })
    }

    function u(e, t) {
        return new m(function (n, o) {
            function i() {
                s && (window.removeEventListener("pagehide", i), document.removeEventListener(u, i)), n({
                    result: "call_suc",
                    timeout: 20 * l
                })
            }

            function r(e, t, n, o) {
                var i = function (t, n) {
                    var r = n;
                    return function () {
                        if ("undefined" == typeof n || r > 0) {
                            try {
                                if (e.call(null))return
                            } catch (e) {
                                throw r = 0, e.toString()
                            }
                            setTimeout(i, t)
                        } else o.call(null);
                        r -= 1
                    }
                }(t, n);
                setTimeout(i, t)
            }

            function a(e) {
                return "number" != typeof e ? 100 : e >= 2e3 ? 100 : e <= 1e3 ? 50 : Math.floor(e / 20)
            }

            function c(e, t, n) {
                p.ajax({
                    url: "http://localhost:" + m[e] + "/douclink?uclink=" + encodeURIComponent(t + "&from=jssdk"),
                    method: "GET",
                    success: function (t) {
                        n("0" === t["result-handled"] ? "call_local_suc_" + m[e] : "call_local_fail_" + t["result-handled"])
                    },
                    error: function () {
                        e < 2 ? c(e + 1, t, n) : n("call_local_fail_all_port")
                    },
                    timeout: 200
                })
            }

            var s, u, l, f = d.getOS(), m = ["49192", "51423", "55426"];
            if ("undefined" != typeof document.hidden ? (s = "hidden", u = "visibilitychange") : "undefined" != typeof document.msHidden ? (s = "msHidden", u = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (s = "webkitHidden", u = "webkitvisibilitychange"), "" !== f) {
                var h = Date.now(), g = 1e3;
                if (l = t ? a(t) : 100, r(function () {
                        return !!(document[s] || Date.now() - h > 20 * l + g) && (i(), !0)
                    }, 20, l, function () {
                        e.indexOf("uclink") !== -1 && "android" === d.getOS() ? c(0, e, function (e) {
                            e.indexOf("call_local_suc") !== -1 ? n({
                                result: e,
                                timeout: 20 * l
                            }) : o({error: new Error(e), timeout: 20 * l})
                        }) : o({error: new Error("FAILWAKE"), timeout: 20 * l})
                    }), e)if (s && (window.addEventListener("pagehide", i, !1), document.addEventListener(u, i, !1)), "iphone" === f || w.isWeChat() || w.isQQ())y.location.href = e; else {
                    var v = document.createElement("iframe");
                    v.src = e, v.style.display = "none", v.style.width = 0, v.style.height = 0, v.style.border = 0, document.body.appendChild(v)
                } else o({error: new Error("NO_DEEPLINK"), timeout: 20 * l})
            } else o({error: new Error("UNKNOWN_OS")})
        })
    }

    function l(e) {
        if (y.navigator.sendBeacon)y.navigator.sendBeacon(e, null); else {
            var t = new Image;
            t.src = e
        }
    }

    var p = n(7), d = n(12), f = p.toQueryString, m = n(8), h = "https://adtrack.ucweb.com/v1/sdkClick", g = "https://adtrack.ucweb.com/v1/collect", v = n(15), w = n(16), y = w.getWindow(), _ = n(17), k = (location.protocol || "https:") + "//image.uc.cn/s/uae/g/3n/utp/jssdk/index.html", b = function () {
    };
    e.exports = {click: o, calloutApp: u, sendCollect: s}
}, function (e, t, n) {
    "use strict";
    var o = n(12), i = n(16), r = i.getWindow();
    e.exports = function (e, t) {
        var n = "", i = "", a = "", c = "", s = t, u = "";
        if ("com.UCMobile" === e || "com.ucweb.iphone.lowversion" === e)u = "uc"; else {
            if ("com.uc.infoflow" !== e && "com.uc.ucnews" !== e)return;
            u = "ucnews"
        }
        var l = r.xissJsonData && r.xissJsonData.cid || 100;
        return "uc" === u ? (n = "com.UCMobile", i = "ucbrowser", a = "ucweb") : "ucnews" === u && (n = "com.uc.infoflow", i = "newsapp", a = "ucnews", s = s ? s.replace("webapp/webview/article/news.html", "ucnews/news").replace(/uc-iflow/g, "ucnews-iflow").replace("&pagetype=share", "").replace("webview/news", "ucnews/news").replace("webview/video", "ucnews/video") : void 0), "android" === o.getOS() ? (c = "http://a.app.qq.com/o/simple.jsp?pkgname=" + n + "&android_scheme=", s ? c += encodeURIComponent(a + "://|" + encodeURIComponent(s)) : "ucnews" === u && (c += encodeURIComponent(a + "://ext:info_flow_open_channel:ch_id=" + l + "&type=multiple"))) : "iphone" === o.getOS() && (c = "http://iflow.uczzd.cn/" + i + "/openapp.html", s ? c += "?pageurl=" + encodeURIComponent(s) : "ucnews" === u && (c += "?channelid=" + l)), c
    }
}, function (e, t) {
    "use strict";
    function n() {
        var e = c.navigator.userAgent;
        return /UCBrowser\/([\d.]+)/i.test(e)
    }

    function o() {
        var e = c.navigator.userAgent.toLowerCase();
        return /micromessenger/i.test(e)
    }

    function i() {
        var e = c.navigator.userAgent.toLowerCase();
        return /QQ\/([\d.]+)/i.test(e) || /MQQBrowser\/([\d.]+)/i.test(e)
    }

    function r() {
        try {
            window.top.document;
            return window.top
        } catch (e) {
            return window
        }
    }

    function a() {
        var e = (new Date).getTime(), t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
            var n = (e + 16 * Math.random()) % 16 | 0;
            return e = Math.floor(e / 16), ("x" === t ? n : 7 & n | 8).toString(16)
        });
        return t
    }

    var c = r();
    e.exports = {isUC: n, isWeChat: o, isQQ: i, getWindow: r, generateUUID: a}
}, function (e, t, n) {
    "use strict";
    function o(e, t) {
        a.isUC() && "android" === i.getOS() ? "silent" === t && i.compareVer(i.getUCVersion(), "11.4.7.9999") > 0 ? r.downSilent({
            url: e.downLink,
            pkg: e.pkgName,
            fileName: e.fileName
        }).catch(function () {
            c.location.href = e.downLink
        }) : "quick" === t && i.compareVer(i.getUCVersion(), "10.4.9999.9999") > 0 ? r.quickDown({
            url: e.downLink,
            pkg: e.pkgName,
            fileName: e.fileName
        }).catch(function () {
            c.location.href = e.downLink
        }) : c.location.href = e.downLink : c.location.href = e.downLink
    }

    var i = n(12), r = n(11), a = n(16), c = a.getWindow();
    e.exports = o
}, function (e, t, n) {
    var o, i, r;
    !function (a, c) {
        i = [e, n(19), n(21), n(22)], o = c, r = "function" == typeof o ? o.apply(t, i) : o, !(void 0 !== r && (e.exports = r))
    }(this, function (e, t, n, o) {
        "use strict";
        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function r(e, t) {
            if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function c(e, t) {
            if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function s(e, t) {
            var n = "data-clipboard-" + e;
            if (t.hasAttribute(n))return t.getAttribute(n)
        }

        var u = i(t), l = i(n), p = i(o), d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, f = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            return function (t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(), m = function (e) {
            function t(e, n) {
                r(this, t);
                var o = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return o.resolveOptions(n), o.listenClick(e), o
            }

            return c(t, e), f(t, [{
                key: "resolveOptions", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText, this.container = "object" === d(e.container) ? e.container : document.body
                }
            }, {
                key: "listenClick", value: function (e) {
                    var t = this;
                    this.listener = (0, p.default)(e, "click", function (e) {
                        return t.onClick(e)
                    })
                }
            }, {
                key: "onClick", value: function (e) {
                    var t = e.delegateTarget || e.currentTarget;
                    this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new u.default({
                        action: this.action(t),
                        target: this.target(t),
                        text: this.text(t),
                        container: this.container,
                        trigger: t,
                        emitter: this
                    })
                }
            }, {
                key: "defaultAction", value: function (e) {
                    return s("action", e)
                }
            }, {
                key: "defaultTarget", value: function (e) {
                    var t = s("target", e);
                    if (t)return document.querySelector(t)
                }
            }, {
                key: "defaultText", value: function (e) {
                    return s("text", e)
                }
            }, {
                key: "destroy", value: function () {
                    this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                }
            }], [{
                key: "isSupported", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"], t = "string" == typeof e ? [e] : e, n = !!document.queryCommandSupported;
                    return t.forEach(function (e) {
                        n = n && !!document.queryCommandSupported(e)
                    }), n
                }
            }]), t
        }(l.default);
        e.exports = m
    })
}, function (e, t, n) {
    var o, i, r;
    !function (a, c) {
        i = [e, n(20)], o = c, r = "function" == typeof o ? o.apply(t, i) : o, !(void 0 !== r && (e.exports = r))
    }(this, function (e, t) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function o(e, t) {
            if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
        }

        var i = n(t), r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            return function (t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(), c = function () {
            function e(t) {
                o(this, e), this.resolveOptions(t), this.initSelection()
            }

            return a(e, [{
                key: "resolveOptions", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.action = e.action, this.container = e.container, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = ""
                }
            }, {
                key: "initSelection", value: function () {
                    this.text ? this.selectFake() : this.target && this.selectTarget()
                }
            }, {
                key: "selectFake", value: function () {
                    var e = this, t = "rtl" == document.documentElement.getAttribute("dir");
                    this.removeFake(), this.fakeHandlerCallback = function () {
                        return e.removeFake()
                    }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[t ? "right" : "left"] = "-9999px";
                    var n = window.pageYOffset || document.documentElement.scrollTop;
                    this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, i.default)(this.fakeElem), this.copyText()
                }
            }, {
                key: "removeFake", value: function () {
                    this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
                }
            }, {
                key: "selectTarget", value: function () {
                    this.selectedText = (0, i.default)(this.target), this.copyText()
                }
            }, {
                key: "copyText", value: function () {
                    var e = void 0;
                    try {
                        e = document.execCommand(this.action)
                    } catch (t) {
                        e = !1
                    }
                    this.handleResult(e)
                }
            }, {
                key: "handleResult", value: function (e) {
                    this.emitter.emit(e ? "success" : "error", {
                        action: this.action,
                        text: this.selectedText,
                        trigger: this.trigger,
                        clearSelection: this.clearSelection.bind(this)
                    })
                }
            }, {
                key: "clearSelection", value: function () {
                    this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges()
                }
            }, {
                key: "destroy", value: function () {
                    this.removeFake()
                }
            }, {
                key: "action", set: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                    if (this._action = e, "copy" !== this._action && "cut" !== this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')
                }, get: function () {
                    return this._action
                }
            }, {
                key: "target", set: function (e) {
                    if (void 0 !== e) {
                        if (!e || "object" !== ("undefined" == typeof e ? "undefined" : r(e)) || 1 !== e.nodeType)throw new Error('Invalid "target" value, use a valid Element');
                        if ("copy" === this.action && e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                        if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                        this._target = e
                    }
                }, get: function () {
                    return this._target
                }
            }]), e
        }();
        e.exports = c
    })
}, function (e, t) {
    function n(e) {
        var t;
        if ("SELECT" === e.nodeName)e.focus(), t = e.value; else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
            var n = e.hasAttribute("readonly");
            n || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), n || e.removeAttribute("readonly"), t = e.value
        } else {
            e.hasAttribute("contenteditable") && e.focus();
            var o = window.getSelection(), i = document.createRange();
            i.selectNodeContents(e), o.removeAllRanges(), o.addRange(i), t = o.toString()
        }
        return t
    }

    e.exports = n
}, function (e, t) {
    function n() {
    }

    n.prototype = {
        on: function (e, t, n) {
            var o = this.e || (this.e = {});
            return (o[e] || (o[e] = [])).push({fn: t, ctx: n}), this
        }, once: function (e, t, n) {
            function o() {
                i.off(e, o), t.apply(n, arguments)
            }

            var i = this;
            return o._ = t, this.on(e, o, n)
        }, emit: function (e) {
            var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), o = 0, i = n.length;
            for (o; o < i; o++)n[o].fn.apply(n[o].ctx, t);
            return this
        }, off: function (e, t) {
            var n = this.e || (this.e = {}), o = n[e], i = [];
            if (o && t)for (var r = 0, a = o.length; r < a; r++)o[r].fn !== t && o[r].fn._ !== t && i.push(o[r]);
            return i.length ? n[e] = i : delete n[e], this
        }
    }, e.exports = n
}, function (e, t, n) {
    function o(e, t, n) {
        if (!e && !t && !n)throw new Error("Missing required arguments");
        if (!c.string(t))throw new TypeError("Second argument must be a String");
        if (!c.fn(n))throw new TypeError("Third argument must be a Function");
        if (c.node(e))return i(e, t, n);
        if (c.nodeList(e))return r(e, t, n);
        if (c.string(e))return a(e, t, n);
        throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
    }

    function i(e, t, n) {
        return e.addEventListener(t, n), {
            destroy: function () {
                e.removeEventListener(t, n)
            }
        }
    }

    function r(e, t, n) {
        return Array.prototype.forEach.call(e, function (e) {
            e.addEventListener(t, n)
        }), {
            destroy: function () {
                Array.prototype.forEach.call(e, function (e) {
                    e.removeEventListener(t, n)
                })
            }
        }
    }

    function a(e, t, n) {
        return s(document.body, e, t, n)
    }

    var c = n(23), s = n(24);
    e.exports = o
}, function (e, t) {
    t.node = function (e) {
        return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
    }, t.nodeList = function (e) {
        var n = Object.prototype.toString.call(e);
        return void 0 !== e && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length"in e && (0 === e.length || t.node(e[0]))
    }, t.string = function (e) {
        return "string" == typeof e || e instanceof String
    }, t.fn = function (e) {
        var t = Object.prototype.toString.call(e);
        return "[object Function]" === t
    }
}, function (e, t, n) {
    function o(e, t, n, o, r) {
        var a = i.apply(this, arguments);
        return e.addEventListener(n, a, r), {
            destroy: function () {
                e.removeEventListener(n, a, r)
            }
        }
    }

    function i(e, t, n, o) {
        return function (n) {
            n.delegateTarget = r(n.target, t), n.delegateTarget && o.call(e, n)
        }
    }

    var r = n(25);
    e.exports = o
}, function (e, t) {
    function n(e, t) {
        for (; e && e.nodeType !== o;) {
            if ("function" == typeof e.matches && e.matches(t))return e;
            e = e.parentNode
        }
    }

    var o = 9;
    if ("undefined" != typeof Element && !Element.prototype.matches) {
        var i = Element.prototype;
        i.matches = i.matchesSelector || i.mozMatchesSelector || i.msMatchesSelector || i.oMatchesSelector || i.webkitMatchesSelector
    }
    e.exports = n
}, function (e, t, n) {
    "use strict";
    function o(e, t, n) {
        var o = e.map(function (e) {
            return e.adid = [t, e.asset_id, e.channel_id, e.unit_id, e.plan_id].join(":"), i(e, n)
        });
        return s.all(o)
    }

    function i(e, t) {
        return new s(function (n, o) {
            var i = +e.asset_type;
            if (0 === i)n(e); else if (1 === i) {
                var c = +e.api_type;
                if (0 === c)a(t).then(function (t) {
                    e.data = t, n(e)
                }).catch(function () {
                    n(null)
                }); else if (1 === c || 2 === c) {
                    var s = 1 === c ? 1 : 30;
                    r(t, s).then(function (t) {
                        e.data = t, n(e)
                    }).catch(function () {
                        n(null)
                    })
                } else n(e)
            }
        })
    }

    function r(e, t) {
        return new s(function (n, o) {
            var i = d + "_" + t;
            if (e.fromCache) {
                var r = window.localStorage.getItem(i);
                if (r && (r = JSON.parse(r), !c(r.lastTime)))return void n(r.data)
            }
            return l(t, {p_t: e.p_t, p_k: e.p_k}).then(function (e) {
                Array.isArray(e) ? (n(e), window.localStorage.setItem(i, JSON.stringify({
                    data: e,
                    lastTime: (new Date).getTime()
                }))) : o(e)
            }).catch(o)
        })
    }

    function a(e) {
        return new s(function (t, n) {
            if (e.fromCache) {
                var o = window.localStorage.getItem(p);
                if (o && (o = JSON.parse(o), !c(o.lastTime)))return void t(o.data)
            }
            u({p_t: e.p_t, p_u: e.p_u}).then(function (e) {
                e ? (t(e), window.localStorage.setItem(p, JSON.stringify({
                    data: e,
                    lastTime: (new Date).getTime()
                }))) : t([])
            }).catch(n)
        })
    }

    function c(e) {
        var t = (new Date).getTime() - e;
        return Math.floor(t / 1e3) > 259200
    }

    var s = n(8), u = n(27), l = n(30), p = "$__sm_list", d = "$__news_list";
    e.exports = o
}, function (e, t, n) {
    "use strict";
    function o(e, t) {
        return t.map(function (t) {
            var n = {};
            return n.smType = e, n.hot_flag = t.hot_flag || t.hot_level, n.title = t.word || t.title, n.url = t.url ? "https://yz.m.sm.cn/" + t.url : "https://yz.m.sm.cn/s?q=" + encodeURIComponent(n.title) + "&by=hot&from=" + h, n
        })
    }

    function i(e) {
        var t = s({
            app: "related_query",
            type: "json",
            title: e.p_t,
            count: 10,
            from: h,
            athena_allow_origin: "rec.uc.cn",
            url: e.p_u,
            preu: e.p_r
        }), n = d + "?" + t;
        return new u(function (e, t) {
            a.get(n, null, function (t) {
                e(t.hits && t.hits.length > 0 ? o(2, t.hits) : void 0)
            }, t)
        })
    }

    function r() {
        var e = s({method: "tools.hot", size: 0, from: h}), t = p + "?" + e;
        return new u(function (e, n) {
            c({
                url: t, callback: "callback", timeout: 5e3, success: function (t) {
                    e(t && t.length > 0 ? o(1, t) : void 0)
                }, fail: function (e) {
                    n(e)
                }
            })
        })
    }

    var a = n(7), c = n(28), s = a.toQueryString, u = n(8), l = n(12), p = "https://api.m.sm.cn/rest", d = "http://rec.m.sm.cn/", f = n(29), m = f.getWindow(), h = m._ucErrorPage ? "wm963115" : m.maxCmsLevel ? "wh10249" : "wh10235";
    "android" === l.getOS() && (h = m.maxCmsLevel ? "wh10249" : "wh10235"), e.exports = function (e) {
        return new u(function (t, n) {
            m._ucErrorPage && !!m.maxCmsLevel == !1 ? r().then(t).catch(n) : i(e).then(function (e) {
                return e ? void t(e) : r().then(t).catch(n)
            }).catch(function () {
                return r().then(t).catch(n)
            })
        })
    }
}, function (e, t) {
    "use strict";
    var n = function (e) {
        var t = [];
        if ("object" != typeof e && "function" != typeof e || null === e) {
            var n = "string" == typeof e ? e : "";
            return n
        }
        var o = Object.keys(e);
        return o.forEach(function (n) {
            var o = encodeURIComponent(n) + "=" + encodeURIComponent(e[n]);
            t.push(o)
        }), t.join("&")
    }, o = function (e) {
        if (e = e || {}, !e.url || !e.callback)throw new Error("request param is invalid");
        var t = ("jsonp_" + Math.random()).replace(".", ""), o = document.getElementsByTagName("head")[0], i = "";
        i += e.url.indexOf("?") > -1 ? "&" : "?", e.data ? (e.data[e.callback] = t, i += n(e.data)) : i += e.callback + "=" + t;
        var r = document.createElement("script");
        window[t] = function (n) {
            o.removeChild(r), clearTimeout(r.timer), window[t] = null, e.success && e.success(n)
        }, r.src = e.url + i, e.timeout && (r.timer = setTimeout(function () {
            window[t] = null, o.removeChild(r), e.fail && e.fail({message: "request timeout"})
        }, e.timeout)), o.appendChild(r)
    };
    e.exports = o
}, function (e, t) {
    "use strict";
    function n() {
        var e = a.navigator.userAgent;
        return /UCBrowser\/([\d.]+)/i.test(e)
    }

    function o() {
        var e = a.navigator.userAgent.toLowerCase();
        return /micromessenger/i.test(e)
    }

    function i() {
        var e = a.navigator.userAgent.toLowerCase();
        return /QQ\/([\d.]+)/i.test(e) || /MQQBrowser\/([\d.]+)/i.test(e)
    }

    function r() {
        try {
            window.top.document;
            return window.top
        } catch (e) {
            return window
        }
    }

    var a = r(), c = Object.assign || function (e) {
            for (var t = 1, n = arguments.length; t < n; t += 1) {
                var o = arguments[t];
                for (var i in o)Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i])
            }
            return e
        };
    e.exports = {isUC: n, isWeChat: o, isQQ: i, getWindow: r, _extends: c}
}, function (e, t, n) {
    "use strict";
    function o(e) {
        return e.map(function (e) {
            var t = {title: e.title, url: e.url, images: e.images, item_type: +e.item_type};
            return e.thumbnails && e.thumbnails.length ? t.imageSrc = e.thumbnails[0].url + (e.thumbnails[0].url && e.thumbnails[0].url.indexOf("?") > -1 ? "&" : "?") + (30 === +e.item_type ? "" : "height=" + p.imgH) : t.imageSrc = "http://rescn.u3.ucweb.com/butterfly/res/bfad/img/tt_default.jpg", t
        })
    }

    var i = n(7).toQueryString, r = n(8), a = "https://m.uczzd.cn/iflow/api/v1/article/search", c = n(28), s = n(3), u = n(29), l = u.getWindow(), p = {
        scene: "ucmidware",
        detail: 1,
        query: "",
        size: 3,
        imgW: 100,
        imgH: 80
    };
    e.exports = function (e, t) {
        var n = s({}, p, {itemtype: e});
        n.query = t.p_t, n.keywords = t.p_k, l.maxCmsLevel && (n.keywords = "\u7f8e\u5973\u5199\u771f,\u6027\u611f\u7f8e\u5973");
        var u = a + "?" + i(n);
        return new r(function (e, t) {
            c({
                url: u, callback: "callback", timeout: 1e4, success: function (t) {
                    e(0 === +t.status && t.data && Array.isArray(t.data.items) ? o(t.data.items) : void 0)
                }, fail: function (e) {
                    t(e)
                }
            })
        })
    }
}, function (e, t, n) {
    "use strict";
    var o = n(12), i = n(29), r = i.getWindow();
    e.exports = function (e, t) {
        var n = "", i = "", a = "", c = "", s = t, u = "";
        if ("com.UCMobile" === e || "com.ucweb.iphone.lowversion" === e)u = "uc"; else {
            if ("com.uc.infoflow" !== e && "com.uc.ucnews" !== e)return;
            u = "ucnews"
        }
        var l = r.xissJsonData && r.xissJsonData.cid || 100;
        return "uc" === u ? (n = "com.UCMobile", i = "ucbrowser", a = "ucweb") : "ucnews" === u && (n = "com.uc.infoflow", i = "newsapp", a = "ucnews", s = s ? s.replace("webapp/webview/article/news.html", "ucnews/news").replace(/uc-iflow/g, "ucnews-iflow").replace("&pagetype=share", "").replace("webview/news", "ucnews/news").replace("webview/video", "ucnews/video") : void 0), "android" === o.getOS() ? (c = "http://a.app.qq.com/o/simple.jsp?pkgname=" + n + "&android_scheme=", s ? c += encodeURIComponent(a + "://|" + encodeURIComponent(s)) : "ucnews" === u && (c += encodeURIComponent(a + "://ext:info_flow_open_channel:ch_id=" + l + "&type=multiple"))) : "iphone" === o.getOS() && (c = "http://iflow.uczzd.cn/" + i + "/openapp.html", s ? c += "?pageurl=" + encodeURIComponent(s) : "ucnews" === u && (c += "?channelid=" + l)), c
    }
}, function (e, t, n) {
    "use strict";
    function o(e, t) {
        a.isUC() && "android" === i.getOS() ? "silent" === t && i.compareVer(i.getUCVersion(), "11.4.7.9999") > 0 ? r.downSilent({
            url: e.downLink,
            pkg: e.pkgName,
            fileName: e.fileName
        }).catch(function () {
            c.location.href = e.downLink
        }) : "quick" === t && i.compareVer(i.getUCVersion(), "10.4.9999.9999") > 0 ? r.quickDown({
            url: e.downLink,
            pkg: e.pkgName,
            fileName: e.fileName
        }).catch(function () {
            c.location.href = e.downLink
        }) : c.location.href = e.downLink : c.location.href = e.downLink
    }

    var i = n(12), r = n(11), a = n(29), c = a.getWindow();
    e.exports = o
}, function (e, t, n) {
    "use strict";
    var o = n(34), i = n(29), r = i.getWindow(), a = {
        CaptureTiming: !1,
        CaptureJSError: !1,
        https: !0,
        AppID: "28b55b6cfd63",
        uc_param_str: "cpfrvelasvprktdndd"
    }, c = {
        domain: encodeURIComponent(r.location.hostname),
        https: !0,
        isMaxcms: !!r.maxCmsLevel,
        batch: "20170823",
        b_id: "foxy_chan"
    }, s = new o(a, c);
    e.exports = s
}, function (e, t, n) {
    "use strict";
    function o(e, t) {
        e.uc_param_str || (e.uc_param_str = "dnfrcpvenwnt");
        var n = this;
        if (this._opts = e, n._common = {}, "undefined" != typeof t && (n._common = Object.keys(t).reduce(function (e, o) {
                var i = t[o];
                return "boolean" != typeof i && "number" != typeof i || (i += ""), "string" != typeof i ? e : "appid" === o ? (n._opts.AppID = i, e) : "uc_param_str" === o ? (n._opts.uc_param_str = i, e) : (e[o] = i, e)
            }, {})), !this._opts.AppID)throw new Error("AppID is required");
        var o = this._opts.i18n ? "i18n" : "cn", i = this._opts.Proxy ? "proxy" : "direct";
        if (this._opts.WA_URL = d[i][o], this._opts.https) {
            var r = document.createElement("a");
            r.href = this._opts.WA_URL, r.protocol = "https:", r.port && (r.port = "443"), this._opts.WA_URL = r.href
        }
        this._opts.BatchSend && (this.CacheStat = [], localStorage.getItem(f) && (this.CacheStat = JSON.parse(localStorage.getItem(f))), this._opts.BatchSize = e.BatchSize || 5), this._opts.CaptureTiming && a.call(this), this._opts.CaptureJSError && c.call(this)
    }

    function i() {
        var e, t, n = ["nst", "dts", "dte", "tcs", "tce", "rqs", "rps", "rpe", "dlt", "dit", "dls", "dle", "dct", "lds", "lde"], o = {};
        if (e = ["navigationStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "requestStart", "responseStart", "responseEnd", "domLoading", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd"], "performance"in window && (t = window.performance, void 0 != t) && "timing"in t) {
            for (var i, r, a = t.timing, c = a.navigationStart, s = 0; s < n.length; s++)i = n[s], r = e[s], 0 != s ? o[i] = a[r] - c : o[i] = c;
            return o
        }
        return !1
    }

    function r(e) {
        localStorage.setItem(f, JSON.stringify(e))
    }

    function a() {
        var e = this;
        window.addEventListener("load", function () {
            var t = i();
            t && e.sendEvent("perf", "Timing", t)
        }, !1)
    }

    function c() {
        var e = this;
        window.addEventListener("error", function (t) {
            e.sendEvent("error", "jsRunError", {status: "fail", msg: t.message})
        }, !1)
    }

    function s(e, t, n) {
        var o = /\?/gi.test(e), i = [], r = Object.keys(t);
        return r.forEach(function (e) {
            null !== t[e] && void 0 !== t[e] ? i.push(e + "=" + (n ? encodeURIComponent(t[e]) : t[e])) : i.push(e + "=")
        }), e + (o ? "&" + i.join("&") : "?" + i.join("&"))
    }

    function u(e) {
        var t = [];
        e.hasOwnProperty("lt") ? t.push("lt=" + e.lt) : t.push("lt=event");
        for (var n in e)e.hasOwnProperty(n) && "lt" !== n && t.push(n + "=" + e[n]);
        return t.join("`")
    }

    var l = n(3), p = n(7), d = {
        proxy: {i18n: "http://uc.gre/pass/sdk_js_wa_gj/", cn: "http://uc.gre/pass/sdk_js_wa/"},
        direct: {i18n: "http://gj.track.uc.cn/", cn: "http://track.uc.cn/"}
    }, f = "__$_stat_key";
    o.prototype.pv = function (e) {
        l(e, {lt: "pageview"}), e.domain = e.domain || location.host, e.url = e.url || location.href, e.title = e.title || document.title, this.send(e)
    }, o.prototype.PV = function (e) {
        this.pv(e)
    }, o.prototype.sendEvent = function (e, t, n, o) {
        var i = {lt: "event"}, r = [].slice.call(arguments, 0), a = null, c = ["e_c", "e_a", "e_n", "e_v"];
        (this._opts.BatchSend || this._opts.Proxy) && (c = ["ev_ct", "ev_ac", "ev_lb", "ev_vl"]), r.forEach(function (e, t) {
            "object" != typeof e && "function" != typeof e ? i[c[t]] = e : "object" == typeof r[t] ? l(i, r[t]) : "function" == typeof r[t] && (a = r[t])
        }), this.send(i, a, !1)
    }, o.prototype.sendEventSync = function (e, t, n, o) {
        this.sendEvent(e, t, n, o, !0)
    }, o.prototype.send = function (e, t, n) {
        var o = this;
        if (o._opts.BatchSend && !n) {
            if (o.CacheStat.push(e), o.CacheStat.length >= o._opts.BatchSize) {
                var i = JSON.parse(JSON.stringify(o.CacheStat));
                localStorage.removeItem(f), o.CacheStat = [], o.sendBatch(i.map(function (e) {
                    return l({}, o._common, e)
                }), function (e, n) {
                    e ? t && t(e) : t && t()
                })
            } else r(o.CacheStat), t && t();
            return o.CacheStat
        }
        var a = l({
            uc_param_str: this._opts.uc_param_str,
            appid: this._opts.AppID
        }, o._common, e), c = s(this._opts.WA_URL + "collect", a, !1);
        if ("function" == typeof navigator.sendBeacon)return navigator.sendBeacon(c, null), t && "function" == typeof t && setTimeout(function () {
            t()
        }, 1), c;
        var u = new Image;
        return u.show = "force", t && "function" == typeof t && (u.onerror = function () {
            t()
        }, u.onload = function () {
            t()
        }), u.src = c, c
    }, o.prototype.sendBatch = function (e, t) {
        var n = this._opts.WA_URL + "post_collect?uc_param_str=" + this._opts.uc_param_str + "&appid=" + this._opts.AppID, o = [];
        e.forEach(function (e) {
            o.push(u(e))
        }), p.ajax({
            url: n,
            method: "POST",
            data: o.join("\n"),
            headers: {"Content-Type": "text/plain"},
            success: function (e, n) {
                t(null, e)
            },
            error: function (e) {
                t(e)
            }
        })
    }, o.prototype.sendLog = function (e, t) {
        l(e, {lt: "log"}), this.send(e, t)
    }, e.exports = o
}]);