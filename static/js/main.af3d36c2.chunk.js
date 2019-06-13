(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    22(e, n, t) {
      e.exports = t(43);
    },
    34(e, n, t) {},
    35(e, n, t) {},
    36(e, n, t) {},
    37(e, n, t) {},
    38(e, n, t) {},
    39(e, n, t) {},
    40(e, n, t) {},
    43(e, n, t) {
      t.r(n);
      const a = t(0);
      const r = t.n(a);
      const o = t(5);
      const c = t.n(o);
      const i = t(4);
      t(34),
        Boolean(
          window.location.hostname === 'localhost' ||
            window.location.hostname === '[::1]' ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
            ),
        );
      const l = t(1);
      const u = t(6);
      const m = t.n(u);
      t(35);
      const s = function() {
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
      const d = function() {
        return r.a.createElement('div', { className: 'About' }, 'About Component');
      };
      t(37);
      const f = function() {
        return r.a.createElement('div', { className: 'Services' }, 'Services Component');
      };
      t(38);
      const p = function() {
        return r.a.createElement('div', { className: 'Galery' }, 'Galery Component');
      };
      t(39);
      const v = function() {
        return r.a.createElement('div', { className: 'Blog' }, 'Blog Component');
      };
      t(40);
      const h = function() {
        return r.a.createElement('div', { className: 'Contact' }, 'Contact Component');
      };
      const b = function() {
        return r.a.createElement('div', { className: 'App' }, 'NotFound View');
      };
      const g = Object(l.g)({
        '/': Object(l.h)({
          title: 'Home',
          getData() {},
          view: r.a.createElement(s, null),
        }),
        '/about-us': Object(l.h)({
          title: 'About Us',
          getData() {},
          view: r.a.createElement(d, null),
        }),
        '/services': Object(l.h)({
          title: 'Services',
          getData() {},
          view: r.a.createElement(f, null),
        }),
        '/galery': Object(l.h)({
          title: 'Galery',
          getData() {},
          view: r.a.createElement(p, null),
        }),
        '/blog': Object(l.h)({
          title: 'Blog',
          getData() {},
          view: r.a.createElement(v, null),
        }),
        '/contact-us': Object(l.h)({
          title: 'Contact Us',
          getData() {},
          view: r.a.createElement(h, null),
        }),
        '/notFound': Object(l.h)({
          title: 'NotFound',
          getData() {},
          view: r.a.createElement(b, null),
        }),
      });
      const E = t(19);
      const w = t(16);
      const x = t(2);
      const y = t(8);
      const j = t.n(y);
      const O = j()('mode', { light: '#fafafa', dark: '#222' });
      const k = j()('mode', { light: '#000', dark: '#fff' });
      const N = { primary: 'rgb(46, 65, 109)', secondary: 'rgb(90, 191, 237)' };
      const A = [
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
      ];
      const S = t(3);
      function C() {
        const e = Object(S.a)([
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
        const e = Object(S.a)([
          '\n  position: relative;\n  display: block;\n  margin-top: -13px;\n  margin-right: 6%;\n  z-index: 1999;\n  transform: translateY(40%);\n',
        ]);
        return (
          (D = function() {
            return e;
          }),
          e
        );
      }
      const B = x.b.div(D());
      const L = x.b.div(C());
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
        const e = Object(S.a)(['\n  display: flex;\n']);
        return (
          (F = function() {
            return e;
          }),
          e
        );
      }
      const G = x.b.div(F());
      const z = 'logo';
      function W() {
        return r.a.createElement(
          G,
          { id: z },
          r.a.createElement('img', { src: m.a, style: { height: '5vmin' }, alt: 'logo' }),
        );
      }
      const H = t(21);
      function J() {
        const e = Object(S.a)([
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
        const e = Object(S.a)([
          '\n  display: flex;\n  max-width: 100%;\n  height: 50%;\n  align-items: center;\n  min-width: 0px;\n  min-height: 0px;\n  flex-direction: column;\n  justify-content: center;\n  font-family: Foundry;\n  outline: none;\n  margin: 0px;\n  padding: 6px;\n  &:hover,\n  &:focus {\n    opacity: 0.8;\n  }\n  &:active {\n    transform: scale(0.95);\n    opacity: 0.6;\n  }\n',
        ]);
        return (
          (M = function() {
            return e;
          }),
          e
        );
      }
      const U = x.b.li(M());
      const _ = x.b.span(J(), e => e.theme.colors.secondary);
      const I = {
        anchor: { fontWeight: 600, cursor: 'pointer', textDecoration: 'none' },
      };
      const R = 'li';
      const T = Object(x.c)(e => {
        const n = e.item;
        const t = e.theme;
        const a = Object(H.a)({}, I.anchor, { color: t.colors.primary });
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
        const e = Object(S.a)([
          '\n  display: flex;\n  align-items: center;\n  margin-right: 30px;\n',
        ]);
        return (
          (V = function() {
            return e;
          }),
          e
        );
      }
      const $ = x.b.nav(V());
      const q = 'ul';
      function K(e) {
        const n = e.items;
        return r.a.createElement(
          $,
          { id: q },
          n.map(e =>
            r.a.createElement(T, {
              key: ''.concat(e.title, '_').concat(e.href),
              item: e,
            }),
          ),
        );
      }
      const P = '375px';
      const Q = '425px';
      const X = '768px';
      const Z = '1024px';
      const ee = '1440px';
      const ne = '2560px';
      const te = {
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
        const e = Object(S.a)([
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
      const re = x.b.div(ae(), te.tablet);
      const oe = 'nav';
      function ce(e) {
        const n = e.items;
        return r.a.createElement(
          re,
          { id: oe },
          r.a.createElement(W, null),
          r.a.createElement(K, { items: n }),
          r.a.createElement(Y, null),
        );
      }
      function ie() {
        const e = Object(S.a)(['\n  background-color: ', ';\n  color: ', '\n']);
        return (
          (ie = function() {
            return e;
          }),
          e
        );
      }
      function le() {
        const e = Object(S.a)(['\n  height: 1000vh;\n']);
        return (
          (le = function() {
            return e;
          }),
          e
        );
      }
      function ue() {
        const e = Object(S.a)([
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
      const me = x.b.div(ue(), e => (e.scrollY > 100 ? 0.9 : 1));
      const se = x.b.div(le());
      const de = x.b.div(ie(), O, k);
      const fe = 'layout';
      c.a.render(
        r.a.createElement(
          i.b,
          { routes: g },
          r.a.createElement(
            e => {
              const n = e.children;
              const t = Object(a.useState)(window.scrollY);
              const o = Object(E.a)(t, 2);
              const c = o[0];
              const l = o[1];
              const u = Object(i.d)();
              const m = function() {
                return l(window.pageYOffset);
              };
              return (
                Object(a.useEffect)(
                  () => (
                    window.addEventListener('scroll', m, !0),
                    function() {
                      window.removeEventListener('scroll', m, !0);
                    }
                  ),
                  [],
                ),
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
          navigator.serviceWorker.ready.then(e => {
            e.unregister();
          });
    },
    6(e, n, t) {
      e.exports = `${t.p}static/media/logo.5d5d9eef.svg`;
    },
  },
  [[22, 1, 2]],
]);
// # sourceMappingURL=main.af3d36c2.chunk.js.map
