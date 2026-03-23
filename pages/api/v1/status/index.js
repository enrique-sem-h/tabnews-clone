function status(req, res) {
  res.status(200).json({ chave: "This is my first status code response!" });
}

export default status;
