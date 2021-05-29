const { Author } = require("../models");

const add = async (req, res, next) => {
  const { body } = req;
  try {
    const data = await Author.create(body);
    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result: data,
      },
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      code: 400,
      message: error.message,
    });
  }
  //   Author.create(body, (error, data) => {
  //     if (error) {
  //       return res.status(400).json({
  //         status: "error",
  //         code: 400,
  //         message: error.message,
  //       });
  //     }
  //     res.status(201).json({
  //       status: "success",
  //       code: 201,
  //       data: {
  //         result: data,
  //       },
  //     });
  //   });
};

module.exports = {
  add,
};
