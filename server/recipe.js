const recipe = (data) => {
  return (req, res) => {
    const result = data[req.params.item]
    if(result) return res.render("recipe", { item: result });

    res.send("Error")
  };
};

export default recipe;
