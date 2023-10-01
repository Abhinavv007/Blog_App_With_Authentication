import express from "express"
import multer from "multer"
import authController from "../controllers/authController.js"
import blogController from "../controllers/blogController.js"
import categoryController from "../controllers/categoryController.js"
import verifyToken from "../middlewares/authMiddleware.js"
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');  
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });
const router = express.Router()
router.post("/user/register",authController.userRegistration)
router.post("/user/login/",authController.userLogin)


router.get("/get/allblogs",verifyToken,blogController.getAllBlogs)
router.post("/get/addblog",verifyToken,upload.single('thumbnail'),blogController.addBlog)
router.get("/get/blog/:id",verifyToken,blogController.getSingleBlog)

router.get("/get/categories",verifyToken,categoryController.getAllCategories)
router.post("/add/category",verifyToken,categoryController.addNewCategory)

export default router