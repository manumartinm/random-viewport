module.exports = {
  clearMocks: true,
  coverageProvider: "v8",
  moduleFileExtensions: [
    "js",
    "ts",
    "cjs"
  ],
  roots: [
    "./tests"
  ],
  testPathIgnorePatterns: [
    "\\\\node_modules\\\\"
  ],
  verbose: true,
};
