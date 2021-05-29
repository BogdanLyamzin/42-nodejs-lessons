const Joi = require("joi");
const fs = require("fs/promises");
const { productsApi } = require("../api");
const products = require("../data/products");

const getAll = (req, res, next) => {
  const { query } = req;
  console.log(query);
  // Product.find(query)
  res.json({
    status: "success",
    code: 200,
    data: {
      products,
    },
  });
  // {
  // brand: "Apple",
  // priceFrom: "14000",
  // priceTo: "20000"
  // }
};

const getOne = (req, res, next) => {
  const { id } = req.params;
  // try {
  //   const products = await fs.readFile("./products.json");
  //   const productsJOSN = JOSN.parse(products);
  //   const result = products.find((item) => item.id === id);

  //   if(!result) {
  //     res.status(404).json({

  //     })
  //   }
  // }
  // catch(error){
  //   res.json({
  //     status: "fail",
  //     code: 500,
  //     message: "Cannot read file"
  //   })
  // }
  const result = products.find((item) => item.id === id);
  // Product.findById(id)
  if (result) {
    return res.json({
      status: "success",
      code: 200,
      data: {
        result,
      },
    });
  } else {
    return res.status(404).json({
      status: "error",
      code: 404,
      message: "Not such id",
    });
  }
  // Product.findById
};

const add = (req, res, next) => {
  const { body } = req;
  try {
    const bodySchema = Joi.object({
      name: Joi.string().alphanum().min(3).max(30).required(),
      price: Joi.number().required(),
      decription: Joi.string().min(3),
    });

    bodySchema.validateAsync(body);
  } catch (error) {
    error.code = 400;
    next(error);
  }

  try {
  } catch (error) {
    error.code = 500;
    error.message = "Server error";
    next(error);
  }
  products.push({ ...body, id: 8 });
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result: { ...body, id: 8 },
    },
  });
};

const update = (req, res, next) => {
  const { id } = req.params;
};

const remove = (req, res, next) => {
  const { id } = req.params;
};

module.exports = {
  getAll,
  getOne,
  add,
  update,
  remove,
};
