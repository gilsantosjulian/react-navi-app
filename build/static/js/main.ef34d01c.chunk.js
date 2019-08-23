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
        o = t(6),
        i = t.n(o),
        c = t(5),
        l = t(8),
        u = Object(a.createContext)(),
        s = { opacity: !1, showResponsiveMenu: !1 },
        m = function(e, n) {
          switch (n.type) {
            case 'showResponsiveMenu':
              return Object(l.a)({}, e, {
                opacity: !0,
                showResponsiveMenu: !e.showResponsiveMenu,
              });
            default:
              return e;
          }
        },
        d = function() {
          return Object(a.useContext)(u);
        };
      t(34),
        Boolean(
          'localhost' === window.location.hostname ||
            '[::1]' === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
            ),
        );
      var f = t(2),
        p = t(7),
        h = t.n(p);
      t(35);
      var v = function() {
        return r.a.createElement(
          'div',
          { className: 'App' },
          r.a.createElement(
            'header',
            { className: 'App-header' },
            r.a.createElement('img', { src: h.a, className: 'App-logo', alt: 'logo' }),
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
      var b = function() {
        return r.a.createElement('div', { className: 'About' }, 'About Component');
      };
      t(37);
      var g = function() {
        return r.a.createElement('div', { className: 'Services' }, 'Services Component');
      };
      t(38);
      var w = function() {
        return r.a.createElement('div', { className: 'Galery' }, 'Galery Component');
      };
      t(39);
      var x = function() {
        return r.a.createElement('div', { className: 'Blog' }, 'Blog Component');
      };
      t(40);
      var y = function() {
        return r.a.createElement('div', { className: 'Contact' }, 'Contact Component');
      };
      var E = function() {
          return r.a.createElement('div', { className: 'App' }, 'NotFound View');
        },
        j = Object(f.g)({
          '/home': Object(f.h)({
            title: 'Home',
            getData: function() {},
            view: r.a.createElement(v, null),
          }),
          '/about-us': Object(f.h)({
            title: 'About Us',
            getData: function() {},
            view: r.a.createElement(b, null),
          }),
          '/services': Object(f.h)({
            title: 'Services',
            getData: function() {},
            view: r.a.createElement(g, null),
          }),
          '/galery': Object(f.h)({
            title: 'Galery',
            getData: function() {},
            view: r.a.createElement(w, null),
          }),
          '/blog': Object(f.h)({
            title: 'Blog',
            getData: function() {},
            view: r.a.createElement(x, null),
          }),
          '/contact-us': Object(f.h)({
            title: 'Contact Us',
            getData: function() {},
            view: r.a.createElement(y, null),
          }),
          '/notFound': Object(f.h)({
            title: 'NotFound',
            getData: function() {},
            view: r.a.createElement(E, null),
          }),
        }),
        O = t(4),
        k = t(18),
        C = t(1),
        N = t(10),
        S = t.n(N),
        A = S()('mode', { light: '#fafafa', dark: '#222' }),
        M = S()('mode', { light: '#000', dark: '#fff' }),
        R = { primary: 'rgb(46, 65, 109)', secondary: 'rgb(90, 191, 237)' },
        D = [
          { title: 'Home', href: '/home' },
          { title: 'About', href: '/about-us' },
          {
            dropdown: !0,
            title: 'Services',
            href: '/services',
            items: [
              { name: 'Service One', href: '/service-one' },
              { name: 'Service Two', href: '/service-two' },
            ],
          },
          { title: 'Galery', href: '/galery' },
          { title: 'Blog', href: '/blog' },
          { title: 'Contact', href: '/contact-us' },
        ],
        B = t(3),
        Y = '375px',
        L = '425px',
        z = '768px',
        F = '1024px',
        G = '1440px',
        W = '2560px',
        _ = {
          mobileS: '(max-width: '.concat('320px', ')'),
          mobileM: '(max-width: '.concat(Y, ')'),
          mobileL: '(max-width: '.concat(L, ')'),
          tablet: '(max-width: '.concat(z, ')'),
          laptop: '(max-width: '.concat(F, ')'),
          laptopL: '(max-width: '.concat(G, ')'),
          desktop: '(max-width: '.concat(W, ')'),
          desktopL: '(max-width: '.concat(W, ')'),
        };
      function H() {
        var e = Object(B.a)([
          '\n  position: relative;\n  display: none;\n  right: 45px;\n  margin-top: -10px;\n  z-index: 1;\n  transform: translateY(40%);\n  cursor: pointer;\n\n  &:hover {\n    color: #61dafb;\n  }\n\n  ',
          '\n\n  @media (min-width: ',
          ') {  \n    right: 7%;\n  }\n\n  @media ',
          ' {  \n    display: block;\n  }\n\n',
        ]);
        return (
          (H = function() {
            return e;
          }),
          e
        );
      }
      function J() {
        var e = Object(B.a)([
          '\n  transition: all 0.3s ease-in-out;\n  display: block;\n  text-decoration: none;\n  width: 25px;\n  height: 5px;\n  border-bottom: 2px solid;\n  overflow: hidden;\n',
        ]);
        return (
          (J = function() {
            return e;
          }),
          e
        );
      }
      var U = C.b.span(J()),
        I = C.b.div(
          H(),
          function(e) {
            return (
              e.close &&
              '\n    '
                .concat(
                  U,
                  ':nth-child(1) {\n      transform: translateX(4px) translateY(7px) rotate(45deg);\n    }\n\n    ',
                )
                .concat(U, ':nth-child(2) {\n      opacity: 0;\n    }\n\n    ')
                .concat(
                  U,
                  ':nth-child(3) {\n      transform: translateY(-7px) rotate(-45deg);\n    }\n  ',
                )
            );
          },
          z,
          _.tablet,
        );
      function P() {
        var e = d(),
          n = Object(O.a)(e, 2),
          t = n[0].opacity,
          o = n[1],
          i = Object(a.useState)(!1),
          c = Object(O.a)(i, 2),
          l = c[0],
          u = c[1];
        console.log(t);
        return r.a.createElement(
          I,
          {
            onClick: function() {
              return u(!l), o({ type: 'showResponsiveMenu' });
            },
            close: l,
          },
          r.a.createElement(U, null),
          r.a.createElement(U, null),
          r.a.createElement(U, null),
        );
      }
      function T() {
        var e = Object(B.a)(['\n  display: flex;\n']);
        return (
          (T = function() {
            return e;
          }),
          e
        );
      }
      var V = C.b.div(T()),
        X = 'logo';
      function $() {
        return r.a.createElement(
          V,
          { id: X },
          r.a.createElement('img', { src: h.a, style: { height: '40px' }, alt: 'logo' }),
        );
      }
      function q() {
        var e = Object(B.a)([
          '\n  font-family: Open Sans;\n  font-weight: 300;\n  font-size: 16px;\n  padding: .6em;\n  \n  &:hover {\n    color: ',
          ';\n  }\n\n  @media ',
          ' {  \n    padding: .6em 0;\n  }\n',
        ]);
        return (
          (q = function() {
            return e;
          }),
          e
        );
      }
      function K() {
        var e = Object(B.a)([
          '\n  display: flex;\n  max-width: 100%;\n  height: 5%;\n  align-items: center;\n  min-width: 0px;\n  min-height: 0px;\n  flex-direction: column;\n  justify-content: center;\n  font-family: Foundry;\n  outline: none;\n  margin: 0px;\n  padding: 6px;\n\n  &:hover,\n  &:focus {\n    opacity: 0.8;\n  }\n\n  .active span {\n    transform: scale(0.95);\n    opacity: 0.6;\n    color: ',
          ';\n  }\n\n  @media ',
          ' {  \n    float: none;\n    display: block;\n    border: 0;\n    background: 0;\n    padding: 0;\n    margin: 0;\n    clear: both;\n    width: 100 % ;\n  }\n',
        ]);
        return (
          (K = function() {
            return e;
          }),
          e
        );
      }
      var Q = C.b.li(
          K(),
          function(e) {
            return e.theme.colors.secondary;
          },
          _.tablet,
        ),
        Z = C.b.span(
          q(),
          function(e) {
            return e.theme.colors.secondary;
          },
          _.tablet,
        ),
        ee = { anchor: { fontWeight: 600, cursor: 'pointer', textDecoration: 'none' } },
        ne = 'li';
      var te = Object(C.c)(function(e) {
        var n = e.item,
          t = e.theme,
          a = d(),
          o = Object(O.a)(a, 1)[0],
          i = Object(l.a)({}, ee.anchor, { color: t.colors.primary });
        return r.a.createElement(
          Q,
          { id: ne, key: ''.concat(n.href, '-').concat(n.title) },
          r.a.createElement(
            c.a,
            {
              id: 'anchor',
              style: i,
              key: ''.concat(n.href, '-').concat(n.title),
              href: n.href,
              onClick: function() {
                return o({ type: 'showResponsiveMenu' });
              },
              activeClassName: 'active',
            },
            r.a.createElement(Z, null, n.title),
          ),
        );
      });
      function ae() {
        var e = Object(B.a)([
          '\n  display: flex;\n  align-items: center;\n  margin-right: 30px;\n  \n\n  @media ',
          ' {  \n    display: none;\n  }\n',
        ]);
        return (
          (ae = function() {
            return e;
          }),
          e
        );
      }
      var re = C.b.nav(ae(), _.tablet),
        oe = 'nav';
      function ie(e) {
        var n = e.items;
        return r.a.createElement(
          re,
          { id: oe },
          n.map(function(e) {
            return r.a.createElement(te, {
              key: ''.concat(e.title, '_').concat(e.href),
              item: e,
            });
          }),
        );
      }
      function ce() {
        var e = Object(B.a)([
          '\n  transition: all .2s ease-in-out;\n  height: 100%;\n  width: 200px;\n  padding: 50px 25px 20px;\n  background-color: #f4f4f4;\n  color: #000;\n  display: block;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n  position: fixed;\n  top: 0;\n  z-index: -1;\n  text-align: left;\n  right: 0;\n  \n  @media (min-width: ',
          ') {  \n    display: none;\n  }\n',
        ]);
        return (
          (ce = function() {
            return e;
          }),
          e
        );
      }
      var le = C.b.nav(ce(), z),
        ue = 'nav';
      function se(e) {
        var n = e.items,
          t = d();
        return (
          Object(O.a)(t, 1)[0].showResponsiveMenu &&
          r.a.createElement(
            le,
            { id: ue },
            n.map(function(e) {
              return r.a.createElement(te, {
                key: ''.concat(e.title, '_').concat(e.href),
                item: e,
              });
            }),
          )
        );
      }
      function me() {
        var e = Object(B.a)([
          '\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n\n  @media ',
          ' {  \n  }\n',
        ]);
        return (
          (me = function() {
            return e;
          }),
          e
        );
      }
      var de = C.b.div(me(), _.tablet),
        fe = 'header';
      function pe(e) {
        var n = e.items;
        return r.a.createElement(
          de,
          { id: fe },
          r.a.createElement($, null),
          r.a.createElement(ie, { items: n }),
          r.a.createElement(se, { items: n }),
          r.a.createElement(P, null),
        );
      }
      function he() {
        var e = Object(B.a)(['\n  background-color: ', ';\n  color: ', '\n']);
        return (
          (he = function() {
            return e;
          }),
          e
        );
      }
      function ve() {
        var e = Object(B.a)([
          '\n  height: 1000vh;\n  opacity ',
          ';\n  transition: opacity .2s ease-in-out;\n  \n  ',
          '\n',
        ]);
        return (
          (ve = function() {
            return e;
          }),
          e
        );
      }
      function be() {
        var e = Object(B.a)([
          '\n  padding: .15em 28px;\n  width: 100%;\n  min-height: 40px;\n  position: fixed;\n  top: 0px;\n  z-index: 1;\n  background: white;\n  opacity: ',
          ';\n  transition: opacity .3s ease-in-out;\n',
        ]);
        return (
          (be = function() {
            return e;
          }),
          e
        );
      }
      var ge = C.b.div(be(), function(e) {
          return e.scrollY > 100 ? 0.9 : 1;
        }),
        we = C.b.div(
          ve(),
          function(e) {
            return e.opacity;
          },
          function(e) {
            return (
              e.transition &&
              '\n    margin-left: -300px;\n    transition: left .2s ease-in-out;\n  '
            );
          },
        ),
        xe = C.b.div(he(), A, M),
        ye = 'layout';
      i.a.render(
        r.a.createElement(
          function(e) {
            var n = e.children;
            return r.a.createElement(
              u.Provider,
              { value: Object(a.useReducer)(m, s) },
              n,
            );
          },
          null,
          r.a.createElement(
            c.b,
            { routes: j },
            r.a.createElement(
              function(e) {
                var n = e.children,
                  t = Object(a.useState)(window.scrollY),
                  o = Object(O.a)(t, 2),
                  i = o[0],
                  l = o[1],
                  u = d(),
                  s = Object(O.a)(u, 1)[0],
                  m = s.opacity,
                  f = s.showResponsiveMenu,
                  p = Object(c.d)(),
                  h = function() {
                    return l(window.pageYOffset);
                  };
                return (
                  Object(a.useEffect)(function() {
                    return (
                      window.addEventListener('scroll', h, !0),
                      function() {
                        window.removeEventListener('scroll', h, !0);
                      }
                    );
                  }, []),
                  r.a.createElement(
                    C.a,
                    { theme: { mode: 'light', colors: R } },
                    r.a.createElement(
                      xe,
                      { id: ye },
                      r.a.createElement(k.a, { isBusy: !!p, delayMs: 200 }),
                      r.a.createElement(
                        ge,
                        { id: 'container', scrollY: i },
                        r.a.createElement(pe, { items: D }),
                      ),
                      r.a.createElement(
                        we,
                        { id: 'main', opacity: m ? '0.5' : '1', transition: f },
                        n,
                      ),
                    ),
                  )
                );
              },
              null,
              r.a.createElement(
                a.Suspense,
                { fallback: null },
                r.a.createElement(c.c, null),
              ),
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
    7: function(e, n, t) {
      e.exports = t.p + 'static/media/logo.5d5d9eef.svg';
    },
  },
  [[22, 1, 2]],
]);
//# sourceMappingURL=main.ef34d01c.chunk.js.map
