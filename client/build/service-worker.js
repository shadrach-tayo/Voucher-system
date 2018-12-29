"use strict";
var precacheConfig = [
    ["/index.html", "0a197d85e3fed2d1ebe87b496da98842"],
    ["/static/css/main.5298ef60.css", "c057da3fe3f5cb0b27b982f7308a7945"],
    ["/static/js/main.90ffd7db.js", "914f05c17f5cebd3d72d17a0427ed979"],
    ["/static/media/argos.6cd34b88.jpg", "6cd34b883687bbbe98a87d9195ce2696"],
    [
      "/static/media/background.3c996616.jpg",
      "3c996616410c4750542f54c6ce012cdc"
    ],
    ["/static/media/bq.c55f1768.png", "c55f1768dc63b13e324b063777d96d77"],
    [
      "/static/media/dorothy-perkins.47564e85.png",
      "47564e85085fd0aadb83c82359189057"
    ],
    [
      "/static/media/down-arrow.d7b0c05d.svg",
      "d7b0c05de1f0e6199685b9bbd263b9d9"
    ],
    ["/static/media/github.e4f2d6b0.svg", "e4f2d6b028d93b8c7988d2132bf13ca2"],
    [
      "/static/media/goldsmith.6b2bf6b3.png",
      "6b2bf6b390a3f7920312119c1af0bbd6"
    ],
    ["/static/media/ikea.dec7606d.jpg", "dec7606dcdcbbba6d3e91c7ca6a2c905"],
    [
      "/static/media/johnlewis.59777277.jpg",
      "597772779ebf63af003994a04f504793"
    ],
    ["/static/media/landing.2badd201.jpg", "2badd201af15283b55f692e1991abcc9"],
    [
      "/static/media/left-arrow.1648ea87.svg",
      "1648ea878726dc41a1b26908551be5e3"
    ],
    ["/static/media/linkedin.4b475fb3.svg", "4b475fb3f54b3e35daa04295ec48df4c"],
    ["/static/media/loader.34cf5337.gif", "34cf53375f840ece721fc985de40d881"],
    [
      "/static/media/logo-small.0c2353eb.jpg",
      "0c2353eb06a93a949baee1842ca4a5a2"
    ],
    [
      "/static/media/national-book.ae8fe136.png",
      "ae8fe13673488c6f724d228556bd13ee"
    ],
    ["/static/media/primark.df1886df.png", "df1886df55f8c91037777f798373a1d1"],
    [
      "/static/media/shopping-cart.2f79694d.svg",
      "2f79694de210f873ca01300355f8631f"
    ],
    [
      "/static/media/starbucks.23325c35.png",
      "23325c3506af4d1f242ee5a97c181a4c"
    ],
    [
      "/static/media/thomascook.f9d2d807.jpg",
      "f9d2d807600db0d7aba430304d918bf5"
    ],
    [
      "/static/media/ticketmaster.0b081e5a.jpg",
      "0b081e5af5542e14f562ead8d1325222"
    ],
    ["/static/media/topman.fa9bc1e6.png", "fa9bc1e6c8876ba339c60688be10ccee"],
    [
      "/static/media/turtle-bay.7c19668f.png",
      "7c19668fcf296f7fff35cf4d3004bf71"
    ],
    ["/static/media/twitter.a57ea219.svg", "a57ea219084451288a1f02aabba16f1b"],
    ["/static/media/vex.b8042334.png", "b80423343f4169218900b46d6105b365"],
    [
      "/static/media/voucher-image.feaea164.jpg",
      "feaea164e72dc0783a6ee3f5a66eddfc"
    ],
    ["/static/media/wickes.6646844e.png", "6646844ed3c3d670ebe13ae563afdc5e"]
  ],
  cacheName =
    "sw-precache-v3-sw-precache-webpack-plugin-" +
    (self.registration ? self.registration.scope : ""),
  ignoreUrlParametersMatching = [/^utm_/],
  addDirectoryIndex = function(e, a) {
    var t = new URL(e);
    return "/" === t.pathname.slice(-1) && (t.pathname += a), t.toString();
  },
  cleanResponse = function(a) {
    return a.redirected
      ? ("body" in a ? Promise.resolve(a.body) : a.blob()).then(function(e) {
          return new Response(e, {
            headers: a.headers,
            status: a.status,
            statusText: a.statusText
          });
        })
      : Promise.resolve(a);
  },
  createCacheKey = function(e, a, t, n) {
    var c = new URL(e);
    return (
      (n && c.pathname.match(n)) ||
        (c.search +=
          (c.search ? "&" : "") +
          encodeURIComponent(a) +
          "=" +
          encodeURIComponent(t)),
      c.toString()
    );
  },
  isPathWhitelisted = function(e, a) {
    if (0 === e.length) return !0;
    var t = new URL(a).pathname;
    return e.some(function(e) {
      return t.match(e);
    });
  },
  stripIgnoredUrlParameters = function(e, t) {
    var a = new URL(e);
    return (
      (a.hash = ""),
      (a.search = a.search
        .slice(1)
        .split("&")
        .map(function(e) {
          return e.split("=");
        })
        .filter(function(a) {
          return t.every(function(e) {
            return !e.test(a[0]);
          });
        })
        .map(function(e) {
          return e.join("=");
        })
        .join("&")),
      a.toString()
    );
  },
  hashParamName = "_sw-precache",
  urlsToCacheKeys = new Map(
    precacheConfig.map(function(e) {
      var a = e[0],
        t = e[1],
        n = new URL(a, self.location),
        c = createCacheKey(n, hashParamName, t, /\.\w{8}\./);
      return [n.toString(), c];
    })
  );
function setOfCachedUrls(e) {
  return e
    .keys()
    .then(function(e) {
      return e.map(function(e) {
        return e.url;
      });
    })
    .then(function(e) {
      return new Set(e);
    });
}
self.addEventListener("install", function(e) {
  e.waitUntil(
    caches
      .open(cacheName)
      .then(function(n) {
        return setOfCachedUrls(n).then(function(t) {
          return Promise.all(
            Array.from(urlsToCacheKeys.values()).map(function(a) {
              if (!t.has(a)) {
                var e = new Request(a, { credentials: "same-origin" });
                return fetch(e).then(function(e) {
                  if (!e.ok)
                    throw new Error(
                      "Request for " +
                        a +
                        " returned a response with status " +
                        e.status
                    );
                  return cleanResponse(e).then(function(e) {
                    return n.put(a, e);
                  });
                });
              }
            })
          );
        });
      })
      .then(function() {
        return self.skipWaiting();
      })
  );
}),
  self.addEventListener("activate", function(e) {
    var t = new Set(urlsToCacheKeys.values());
    e.waitUntil(
      caches
        .open(cacheName)
        .then(function(a) {
          return a.keys().then(function(e) {
            return Promise.all(
              e.map(function(e) {
                if (!t.has(e.url)) return a.delete(e);
              })
            );
          });
        })
        .then(function() {
          return self.clients.claim();
        })
    );
  }),
  self.addEventListener("fetch", function(a) {
    if ("GET" === a.request.method) {
      var e,
        t = stripIgnoredUrlParameters(
          a.request.url,
          ignoreUrlParametersMatching
        ),
        n = "index.html";
      (e = urlsToCacheKeys.has(t)) ||
        ((t = addDirectoryIndex(t, n)), (e = urlsToCacheKeys.has(t)));
      var c = "/index.html";
      !e &&
        "navigate" === a.request.mode &&
        isPathWhitelisted(["^(?!\\/__).*"], a.request.url) &&
        ((t = new URL(c, self.location).toString()),
        (e = urlsToCacheKeys.has(t))),
        e &&
          a.respondWith(
            caches
              .open(cacheName)
              .then(function(e) {
                return e.match(urlsToCacheKeys.get(t)).then(function(e) {
                  if (e) return e;
                  throw Error(
                    "The cached response that was expected is missing."
                  );
                });
              })
              .catch(function(e) {
                return (
                  console.warn(
                    'Couldn\'t serve response for "%s" from cache: %O',
                    a.request.url,
                    e
                  ),
                  fetch(a.request)
                );
              })
          );
    }
  });
