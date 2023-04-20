import {Router} from 'express';
import { createUser,getUser} from '../controllers/usuario.controller.js';

const router = Router();

router.get('/api/usuario',getUser);
router.post('/api/usuario',createUser);

export default router;