import database from "infra/database.js";

async function status(req, res) {
  const result = await database.query("SELECT 1+1 as SUM;");
  console.log(result.rows[0]);

  res.status(200).json({ chave: "This is my first status code response!" });
}

export default status;
