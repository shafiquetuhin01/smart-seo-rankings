module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#1D75CC",
          secondary: "#F37F34",
          accent: "#1E293B",
          neutral: "#1A3667",
          "base-100": "#ffffff",
          info: "#0E2E67",
          success: "#1BBB70",
          warning: "#FFD224",
          error: "#FA5C5C",
        },
      },
      {
        dark: {
          primary: "#3483D1",
          secondary: "#F37F34",
          accent: "#0E2E67",
          neutral: "#F3F4F6",
          "base-100": "#1F2937",
          info: "#98A8DD",
          success: "#1BBB70",
          warning: "#F59E0B",
          error: "#FB7185",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};