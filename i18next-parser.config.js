module.exports = {
  createOldCatalogs: true,
  indentation: 2,
  lexers: {
    js: ["JsxLexer"],
    ts: ["JsxLexer"],
    jsx: ["JsxLexer"],
    tsx: ["JsxLexer"],

    default: ["JsxLexer"],
  },
  locales: ["en", "de", "ptbr", "jp"],
  output: "public/locales/$LOCALE/$NAMESPACE.json",
  input: ["src/**/*.{js,jsx,ts,tsx}"],
  verbose: true,
};
