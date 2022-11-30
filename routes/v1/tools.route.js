const express = require("express");
const viewCount = require("../../middleware/viewCount");
const toolsController = require("../../controllers/tools.controller");
const { limiter } = require("../../middleware/limiter");
const { Router } = require("express");

const router = express.Router();

// manual routing
// router.get("/:id", (req, res) => {
//   res.send("tools found with id");
// });

// router.post("/", (req, res) => {});

// shortcut routing

router
  .route("/")
  /**
   * @api {get} /tools All tools
   * @apiDescription Get all the tools
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the tools.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(toolsController.getAllTools)
  /**
   * @api {post} /save a tool
   * @apiDescription Get all the tools
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the tools.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .post(toolsController.saveAtool);

// Router level middle counting the views

router
  .route("/test")
  .post(toolsController.testPost)
  .get(toolsController.testGet);
router
  .route("/:id")
  .get(viewCount, limiter, toolsController.getToolsDetails)
  .patch(toolsController.updateTool)
  .delete(toolsController.deletePost);

module.exports = router;
