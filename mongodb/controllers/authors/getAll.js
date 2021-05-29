const { author: service } = require("../../services");

const getAll = async (req, res, next) => {
  const { query } = req;
  /*
  if(query.priceFrom) {
      query.
  }
  */
  try {
    const result = await service.findAll(query);
    return res.json({
      status: "success",
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};
