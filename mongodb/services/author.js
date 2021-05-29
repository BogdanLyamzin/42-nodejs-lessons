const { Author } = require("../../models");

const findAll = (query) => {
  return Author.find(query);
};

module.exports = { findAll };
