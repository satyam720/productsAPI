import Category from "../models/categoryModel.js";

const createCategory = async function (req, res) {
  try {
    console.log(req.body);
    const category = await Category.create(req.body);

    res.status(200).json({
      status: "succes",
      data: {
        category,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

export { createCategory };
