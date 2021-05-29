const { author: service } = require("../../services");

const getOne = async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await service.findOne(id);
    if (!result) {
      res.status(404).json({
        status: "error",
        code: 404,
        message: "Not found",
      });
    }
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
