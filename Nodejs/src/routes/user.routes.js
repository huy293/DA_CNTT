const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.Controller");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/changerole/:id", authMiddleware.protect("admin"), userController.changeRole);
router.get("/", authMiddleware.protect("admin", "moderator"), userController.getAllUsers);
router.get("/admins", authMiddleware.protect("admin"), userController.getAllAdmins);
router.get("/:id", authMiddleware.protect("admin", "moderator"), userController.getUserById);
router.put("/:id", authMiddleware.protect("admin", "user"), userController.updateUser);
router.put("/update-avatar/:id", authMiddleware.protect("admin","user"), userController.updateAvatar);
router.put("/toggle-lock/:userId", authMiddleware.protect("admin"), userController.toggleLockUser);
router.get("/logs/:userId", authMiddleware.protect("admin"), userController.getLogs);
router.get("/permissions/:userId", authMiddleware.protect("admin"), userController.getPermissions);
router.put("/permissions/:userId", authMiddleware.protect("admin"), userController.updatePermissions);

module.exports = router;