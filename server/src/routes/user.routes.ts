import { Router } from "express";

import * as userCtrl from '../controller/user.ctrl'

import validRegister from '../validation/auth/validRegister'
import validLogin from '../validation/auth/validLogin'

const router = Router()

router.get('/users', userCtrl.users)

router.post('/register', validRegister, userCtrl.register)
router.post('/login', validLogin, userCtrl.login)

router.delete('/users/:id', userCtrl.removeUser)

export default router