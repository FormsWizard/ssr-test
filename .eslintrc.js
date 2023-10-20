module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-ssr-test`
  extends: ["ssr-test"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
