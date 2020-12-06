const { Router } = require('express');
const { userController } = require('../controllers');
const { userMiddlewares } = require('../middlewares');

const userRouter = Router();

userRouter.post('/', userMiddlewares.checkEmailValidity, userMiddlewares.checkPasswordValidity, userController.createUser);

userRouter.get('/', userController.getUsers);

userRouter.get('/:userId', userController.getUserById);

userRouter.put('/:userId', userController.updateUser);

userRouter.delete('/:userId', userController.deleteUser);

module.exports = userRouter;