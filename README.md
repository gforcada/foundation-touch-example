# Demonstration that Foundation spotSwipe does not work

Run the following commands on a checkout of this repository:

- yarn -s --frozen-lockfile --non-interactive
- yarn run webpack
- $(BROWSER) dist/index.html

After opening the index.html you will see the following traceback on the console logs:

```
  TypeError: jquery_src_jquery__WEBPACK_IMPORTED_MODULE_0___default(...)(...).spotSwipe is not a function[Més informació] bundle.js line 97 > eval:25:3
  <anonymous>
  webpack:///./example.js?:25:3
  mightThrow
  webpack:///./node_modules/jquery/src/deferred.js?:124:21
  resolve/</process<
  webpack:///./node_modules/jquery/src/deferred.js?:192:12
```
