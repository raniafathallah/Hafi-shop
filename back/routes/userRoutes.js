const  express =require ('express');
const {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById, 
  updateUser,
} =require('../controllers/userController.js');
const { protect, admin } =require('../middleware/authMiddleware.js');

const router = express.Router();

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/login", authUser);
router
  .route("/profile")
  .put(protect, updateUserProfile)
  .get(protect, getUserProfile);

router
  .route("/:id")
  .put(protect, admin, updateUser)
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById);

module.exports=router;