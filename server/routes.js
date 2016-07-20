import express from "express";
import engineApi from "./controllers/engineController";

let router = express.Router();
let engineController = engineApi();

// {api/engine}
router
    .route("/engine")
    .get(engineController.get);
    // .post(engineController.post);

// {api/engine/:id}
// router,..use("/engine/:id", engineController.bookIdMiddleWare);
// router.route("/engine/:id")
//     .get(engineController.getById)
//     .put(engineController.update)
//     .patch(engineController.patch)
//     .delete(engineController.deleteBook);

export default router;