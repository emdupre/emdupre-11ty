const isProduction = process.env.NODE_ENV === 'production'

module.exports = function(config) {
  config.dir = {
    input: './src',
    output: "./public"
  }

  config.setDataDeepMerge(true)

  config.setTemplateFormats([
    'njk',
    'md',
    'jpg',
    'png',
    'svg',
    // 'liquid',
    // 'pug',
    // 'ejs',
    // 'hbs',
    // 'mustache',
    // 'haml',
    // '11ty.js',
  ])

  return config
}