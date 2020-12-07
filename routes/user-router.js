const { Router } = require('express');
const { userController } = require('../controllers');
const { userMiddlewares } = require('../middlewares');

const userRouter = Router();

userRouter.post('/', userMiddlewares.checkEmailValidity, userMiddlewares.checkPasswordValidity, userController.createUser);

userRouter.get('/', userController.getUsers);

userRouter.get('/:userId', userMiddlewares.checkIdValidity, userController.getUserById);

userRouter.put('/:userId', userMiddlewares.checkIdValidity, userController.updateUser);

userRouter.delete('/:userId', userMiddlewares.checkIdValidity, userController.deleteUser);

module.exports = userRouter;
