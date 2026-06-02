const createProduct = async (req, res) => {
  try {
    // const product = await 

    res.status(200).json({
      message: "succes",

    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
}

export { createProduct };