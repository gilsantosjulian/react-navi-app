(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    22: function(e, n, t) {
      e.exports = t(43);
    },
    34: function(e, n, t) {},
    35: function(e, n, t) {},
    36: function(e, n, t) {},
    37: function(e, n, t) {},
    38: function(e, n, t) {},
    39: function(e, n, t) {},
    40: function(e, n, t) {},
    43: function(e, n, t) {
      'use strict';
      t.r(n);
      var a = t(0),
        r = t.n(a),
        o = t(5),
        c = t.n(o),
        i = t(4);
      t(34),
        Boolean(
          'localhost' === window.location.hostname ||
            '[::1]' === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
            ),
        );
      var l = t(1),
        u = t(6),
        m = t.n(u);
      t(35);
      var s = function() {
        return r.a.createElement(
          'div',
          { className: 'App' },
          r.a.createElement(
            'header',
            { className: 'App-header' },
            r.a.createElement('img', { src: m.a, className: 'App-logo', alt: 'logo' }),
            r.a.createElement(
              'p',
              null,
              'Edit ',
              r.a.createElement('code', null, 'src/App.js'),
              ' and save to reload.',
            ),
            r.a.createElement(
              'a',
              {
                className: 'App-link',
                href: 'https://reactjs.org',
                target: '_blank',
                rel: 'noopener noreferrer',
              },
              'Learn React',
            ),
          ),
        );
      };
      t(36);
      var d = function() {
        return r.a.createElement('div', { className: 'About' }, 'About Component');
      };
      t(37);
      var f = function() {
        return r.a.createElement('div', { className: 'Services' }, 'Services Component');
      };
      t(38);
      var p = function() {
        return r.a.createElement('div', { className: 'Galery' }, 'Galery Component');
      };
      t(39);
      var v = function() {
        return r.a.createElement('div', { className: 'Blog' }, 'Blog Component');
      };
      t(40);
      var h = function() {
        return r.a.createElement('div', { className: 'Contact' }, 'Contact Component');
      };
      var b = function() {
          return r.a.createElement('div', { className: 'App' }, 'NotFound View');
        },
        g = Object(l.g)({
          '/': Object(l.h)({
            title: 'Home',
            getData: function() {},
            view: r.a.createElement(s, null),
          }),
          '/about-us': Object(l.h)({
            title: 'About Us',
            getData: function() {},
            view: r.a.createElement(d, null),
          }),
          '/services': Object(l.h)({
            title: 'Services',
            getData: function() {},
            view: r.a.createElement(f, null),
          }),
          '/galery': Object(l.h)({
            title: 'Galery',
            getData: function() {},
            view: r.a.createElement(p, null),
          }),
          '/blog': Object(l.h)({
            title: 'Blog',
            getData: function() {},
            view: r.a.createElement(v, null),
          }),
          '/contact-us': Object(l.h)({
            title: 'Contact Us',
            getData: function() {},
            view: r.a.createElement(h, null),
          }),
          '/notFound': Object(l.h)({
            title: 'NotFound',
            getData: function() {},
            view: r.a.createElement(b, null),
          }),
        }),
        E = t(19),
        w = t(16),
        x = t(2),
        y = t(8),
        j = t.n(y),
        O = j()('mode', { light: '#fafafa', dark: '#222' }),
        k = j()('mode', { light: '#000', dark: '#fff' }),
        N = { primary: 'rgb(46, 65, 109)', secondary: 'rgb(90, 191, 237)' },
        A = [
          { title: 'Home', href: '/' },
          { title: 'About', href: '/about-us' },
          {
            dropdown: !0,
            title: 'Services',
            items: [
              { name: 'Service One', href: '/service-one' },
              { name: 'Service Two', href: '/service-two' },
            ],
          },
          { title: 'Galery', href: '/galery' },
          { title: 'Blog', href: '/blog' },
          { title: 'Contact', href: '/contact-us' },
        ],
        S = t(3);
      function C() {
        var e = Object(S.a)([
          '\n  display: block;\n  text-decoration: none;\n  width: 25px;\n  height: 5px;\n  border-bottom: 2px solid;\n  overflow: hidden;\n',
        ]);
        return (
          (C = function() {
            return e;
          }),
          e
        );
      }
      function D() {
        var e = Object(S.a)([
          '\n  position: relative;\n  display: block;\n  margin-top: -13px;\n  margin-right: 6%;\n  z-index: 1999;\n  transform: translateY(40%);\n',
        ]);
        return (
          (D = function() {
            return e;
          }),
          e
        );
      }
      var B = x.b.div(D()),
        L = x.b.div(C());
      function Y() {
        return r.a.createElement(
          B,
          null,
          r.a.createElement(L, null),
          r.a.createElement(L, null),
          r.a.createElement(L, null),
        );
      }
      function F() {
        var e = Object(S.a)(['\n  display: flex;\n']);
        return (
          (F = function() {
            return e;
          }),
          e
        );
      }
      var G = x.b.div(F()),
        z = 'logo';
      function W() {
        return r.a.createElement(
          G,
          { id: z },
          r.a.createElement('img', { src: m.a, style: { height: '5vmin' }, alt: 'logo' }),
        );
      }
      var H = t(21);
      function J() {
        var e = Object(S.a)([
          '\n  font-family: Open Sans;\n  font-weight: 300;\n  font-size: 16px;\n  padding: .6em;\n  &:hover {\n    color: ',
          ';\n  }\n',
        ]);
        return (
          (J = function() {
            return e;
          }),
          e
        );
      }
      function M() {
        var e = Object(S.a)([
          '\n  display: flex;\n  max-width: 100%;\n  height: 50%;\n  align-items: center;\n  min-width: 0px;\n  min-height: 0px;\n  flex-direction: column;\n  justify-content: center;\n  font-family: Foundry;\n  outline: none;\n  margin: 0px;\n  padding: 6px;\n  &:hover,\n  &:focus {\n    opacity: 0.8;\n  }\n  &:active {\n    transform: scale(0.95);\n    opacity: 0.6;\n  }\n',
        ]);
        return (
          (M = function() {
            return e;
          }),
          e
        );
      }
      var U = x.b.li(M()),
        _ = x.b.span(J(), function(e) {
          return e.theme.colors.secondary;
        }),
        I = { anchor: { fontWeight: 600, cursor: 'pointer', textDecoration: 'none' } },
        R = 'li';
      var T = Object(x.c)(function(e) {
        var n = e.item,
          t = e.theme,
          a = Object(H.a)({}, I.anchor, { color: t.colors.primary });
        return r.a.createElement(
          U,
          { id: R, key: ''.concat(n.href, '-').concat(n.title) },
          r.a.createElement(
            i.a,
            {
              id: 'anchor',
              style: a,
              key: ''.concat(n.href, '-').concat(n.title),
              href: n.href,
            },
            r.a.createElement(_, null, n.title),
          ),
        );
      });
      function V() {
        var e = Object(S.a)([
          '\n  display: flex;\n  align-items: center;\n  margin-right: 30px;\n',
        ]);
        return (
          (V = function() {
            return e;
          }),
          e
        );
      }
      var $ = x.b.nav(V()),
        q = 'ul';
      function K(e) {
        var n = e.items;
        return r.a.createElement(
          $,
          { id: q },
          n.map(function(e) {
            return r.a.createElement(T, {
              key: ''.concat(e.title, '_').concat(e.href),
              item: e,
            });
          }),
        );
      }
      var P = '375px',
        Q = '425px',
        X = '768px',
        Z = '1024px',
        ee = '1440px',
        ne = '2560px',
        te = {
          mobileS: '(max-width: '.concat('320px', ')'),
          mobileM: '(max-width: '.concat(P, ')'),
          mobileL: '(max-width: '.concat(Q, ')'),
          tablet: '(max-width: '.concat(X, ')'),
          laptop: '(max-width: '.concat(Z, ')'),
          laptopL: '(max-width: '.concat(ee, ')'),
          desktop: '(max-width: '.concat(ne, ')'),
          desktopL: '(max-width: '.concat(ne, ')'),
        };
      function ae() {
        var e = Object(S.a)([
          '\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n\n  @media ',
          ' {  \n    background-color: red;\n  }\n',
        ]);
        return (
          (ae = function() {
            return e;
          }),
          e
        );
      }
      var re = x.b.div(ae(), te.tablet),
        oe = 'nav';
      function ce(e) {
        var n = e.items;
        return r.a.createElement(
          re,
          { id: oe },
          r.a.createElement(W, null),
          r.a.createElement(K, { items: n }),
          r.a.createElement(Y, null),
        );
      }
      function ie() {
        var e = Object(S.a)(['\n  background-color: ', ';\n  color: ', '\n']);
        return (
          (ie = function() {
            return e;
          }),
          e
        );
      }
      function le() {
        var e = Object(S.a)(['\n  height: 1000vh;\n']);
        return (
          (le = function() {
            return e;
          }),
          e
        );
      }
      function ue() {
        var e = Object(S.a)([
          '\n  padding: .15em 28px;\n  width: 100%;\n  min-height: 40px;\n  position: fixed;\n  top: 0px;\n  z-index: 1;\n  background: white;\n  opacity: ',
          ';\n  transition: opacity .3s ease-in-out;\n',
        ]);
        return (
          (ue = function() {
            return e;
          }),
          e
        );
      }
      var me = x.b.div(ue(), function(e) {
          return e.scrollY > 100 ? 0.9 : 1;
        }),
        se = x.b.div(le()),
        de = x.b.div(ie(), O, k),
        fe = 'layout';
      c.a.render(
        r.a.createElement(
          i.b,
          { routes: g },
          r.a.createElement(
            function(e) {
              var n = e.children,
                t = Object(a.useState)(window.scrollY),
                o = Object(E.a)(t, 2),
                c = o[0],
                l = o[1],
                u = Object(i.d)(),
                m = function() {
                  return l(window.pageYOffset);
                };
              return (
                Object(a.useEffect)(function() {
                  return (
                    window.addEventListener('scroll', m, !0),
                    function() {
                      window.removeEventListener('scroll', m, !0);
                    }
                  );
                }, []),
                r.a.createElement(
                  x.a,
                  { theme: { mode: 'light', colors: N } },
                  r.a.createElement(
                    de,
                    { id: fe },
                    r.a.createElement(w.a, { isBusy: !!u, delayMs: 200 }),
                    r.a.createElement(
                      me,
                      { id: 'header', scrollY: c },
                      r.a.createElement(ce, { items: A }),
                    ),
                    r.a.createElement(se, null, n),
                  ),
                )
              );
            },
            null,
            r.a.createElement(
              a.Suspense,
              { fallback: null },
              r.a.createElement(i.c, null),
            ),
          ),
        ),
        document.getElementById('root'),
      ),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    },
    6: function(e, n, t) {
      e.exports = t.p + 'static/media/logo.5d5d9eef.svg';
    },
  },
  [[22, 1, 2]],
]);
//# sourceMappingURL=main.af3d36c2.chunk.js.map
