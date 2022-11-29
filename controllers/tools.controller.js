const { query } = require("express");
const { getDb } = require("../utils/dbConnect");

let tools = [
  { id: 1, name: "Hammer1" },
  { id: 2, name: "Hammer1" },
  { id: 3, name: "Hammer1" },
  { id: 4, name: "Hammer1" },
  { id: 5, name: "Hammer1" },
];

module.exports.getAllTools = (req, res, next) => {
  //   const { ip, params, body, headers, querry } = req;
  //   console.log(ip, params, body, headers, querry);
  //   res.download(__dirname + "/tools.controller.js");

  const { limit, page } = req.query;
  console.log(limit, page);

  res.json(tools.slice(0, limit));
};

module.exports.saveAtool = (req, res) => {
  const db = getDb();
};

module.exports.getToolsDetails = (req, res) => {
  const { id } = req.params;
  //   const filter ={_id:id}
  const foundTool = tools.find((tool) => tool.id == id);
  res.send(foundTool);
};

module.exports.updateTool = (req, res) => {
  const { id } = req.params;
  const filter = { _id: id };

  const newData = tools.find((tool) => tool.id == id);
  newData.id = id;
  newData.name = req.body.name;

  res.send(newData);
};

module.exports.deletePost = (req, res) => {
  const { id } = req.params;
  const filter = { _id: id };
  tools = tools.filter((tool) => tool.id !== Number(id));
  res.send(tools);
};
