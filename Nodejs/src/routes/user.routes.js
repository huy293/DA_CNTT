const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.Controller");
const authMiddleware = require("../middleware/authMiddleware");
const { checkPermission } = require("../middleware/permissionMiddleware");

router.post("/changerole/:id", authMiddleware.protect(), authMiddleware.restrictTo("admin", "moderator"), checkPermission('canManageUsers'), userController.changeRole);
router.get("/", authMiddleware.protect(), authMiddleware.restrictTo("admin", "moderator"), checkPermission('canManageUsers'), userController.getAllUsers);
router.get("/admins", authMiddleware.protect(), authMiddleware.restrictTo("admin"), userController.getAllAdmins);
router.get("/:id", authMiddleware.protect(), authMiddleware.restrictTo("admin", "moderator"), checkPermission('canManageUsers'), userController.getUserById);
router.put("/:id", authMiddleware.protect(), authMiddleware.restrictTo("admin", "user"), userController.updateUser);
router.put("/update-avatar/:id", authMiddleware.protect(), authMiddleware.restrictTo("admin","user"), userController.updateAvatar);
router.put("/toggle-lock/:userId", authMiddleware.protect(), authMiddleware.restrictTo("admin", "moderator"), checkPermission('canManageUsers'), userController.toggleLockUser);
router.get("/logs/:userId", authMiddleware.protect(), authMiddleware.restrictTo("admin"), checkPermission('canManageSettings'), userController.getLogs);
router.get("/permissions/:userId", authMiddleware.protect(), authMiddleware.restrictTo("admin", "moderator"), checkPermission('canManageSettings'), userController.getPermissions);
router.put("/permissions/:userId", authMiddleware.protect(), authMiddleware.restrictTo("admin", "moderator"), checkPermission('canManageSettings'), userController.updatePermissions);

module.exports = router;