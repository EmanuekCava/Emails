import { Router } from "express";

import * as messageCtrl from '../controller/message.ctrl'

import validMessage from '../validation/message/validMessage';
import auth from '../middleware/auth'

const router = Router()

router.get('/messages', auth, messageCtrl.messages)
router.get('/messagesobtained', auth, messageCtrl.messagesObtained)
router.get('/messages/:id', auth, messageCtrl.message)

router.post('/createmessage', auth, validMessage, messageCtrl.createMessage)

router.delete('/messages/:id', auth, messageCtrl.removeMessage)

export default router