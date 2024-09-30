module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("output.css");
  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("img");
};
