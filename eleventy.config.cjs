module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("bundle.css");
  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("img");
};
