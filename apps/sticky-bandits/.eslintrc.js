module.exports = {
  root: true,
  extends: ['base/library'],
  overrides: [
    {
      files: ['metro.config.js', 'babel.config.js'],
      env: {
        node: true
      }
    }
  ]
}
