SSR and turbo test ground
==========================

This is a simple test ground for SSR related issues when building libraries that should work seamlessly in
several react environments (next.js, create-react-app, etc).

## How to run

```bash
pnpm i
pnpm build
pnpm start
```
## What is being tested

### raw and dist

Under next.js you can significantly improve dev time by using the raw version of libraries. This is because
next.js will not rebuild the library when you make changes to it.

Nevertheless, when you want to use the library under a create-react-script environment, you need to use the
dist version of the library, which is also the version that will be published to npm.

### SSR unfriendly libraries

Some libraries are not SSR friendly. This means that they will not work under next.js immediately. In order
to give developers a smooth development experiences when using such libraries, we need to make sure that
the according parts, that could cause issues, are not executed and not even imported on the server.

We can achieve this by using two separate entry points for the library. One for the client and one for the
server. The client entry point will import the library as usual, while the server entry point will not
import a place holder instead.

To avoid hydration errors we need to make sure that the client entry point is not executed on the server.
We do this by using `useEffect`, which is only executed on the client.

