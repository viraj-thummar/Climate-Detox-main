import express from 'express';
import AuthController from '../../controllers/authController';

const authRoutes = express.Router()

authRoutes.route('/login').post(AuthController.login)

export default authRoutes;