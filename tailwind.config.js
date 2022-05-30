module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      color: {
        brand: {
          300: "#996dff",
          500: "#8257e6",
        },
      },
      borderRadius: {
        md: "4px",
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/bac-image.jpg')",
      },
    },
  },
  plugins: [],
};
