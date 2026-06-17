import SubCategory from "../models/subCategoryModel.js";

const createSubCategory = async function (req, res) {
  try {
    const subCat = await SubCategory.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        subCat,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

export {createSubCategory};
