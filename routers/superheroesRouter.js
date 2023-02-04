const superheroRouter = require("express").Router();
const multer = require("multer");
const path = require("path");
const SuperheroController = require("../controllers/superheroController");
const { getSuperpower } = require("../middlewares/superpowerMW");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "../public/images"));
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

superheroRouter
  .post("/", SuperheroController.createSuperheroes)
  .post(
    "/:superheroId/superpowers/:superpowerId",
    getSuperpower,
    SuperheroController.addSuperpowersToSuperhero
  )
  .post(
    "/:superheroId/pictures",
    upload.fields([
      { name: "glass_picture", maxCount: 1 },
      { name: "glass_picture_2", maxCount: 1 },
    ]),
    SuperheroController.addPictureToSuperhero
  )
  .get("/", SuperheroController.getSuperheroes)
  .get("/:superheroId", SuperheroController.getSuperhero)
  .put("/:superheroId", SuperheroController.updateSuperhero)
  .delete("/:superheroId", SuperheroController.deleteSuperhero)
  .delete(
    "/:superheroId/superpowers/:superpowerId",
    getSuperpower,
    SuperheroController.removeSuperpowerFromSuperhero
  );

module.exports = superheroRouter;
