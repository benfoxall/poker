module.exports = {
  mount: {
    src: "/dist",
    public: "/",
  },
  plugins: ["@snowpack/plugin-react-refresh"],
  experiments: {
    optimize: {
      bundle: true,
      minify: true,
    },
  },
};
