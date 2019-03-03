module.exports = function(eleventyConfig) {
    eleventyConfig.addLayoutAlias('default', 'layouts/base.hbs');

    return {
        dir: {
          input: 'src',
          output: '_site'
        }
    };
}