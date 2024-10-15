module.exports = {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  printWidth: 80,
  bracketPairColorizer2: {
    colors: ['#ff0000', '#00ff00', '#0000ff'],
    showBracketsInGutter: true,
    showBracketsInRuler: true,
  },
}
module.exports = {
  overrides: [
    {
      files: '*.html',
      options: {
        ...
        // Add the rule you want to disable
        htmlVoidTags: false,
      },
    },
  ],
};