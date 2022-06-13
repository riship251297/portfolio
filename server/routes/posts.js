import express from "express";
import {getposts,createpost,test} from '../controllers/posts.js';
const router = express.Router();

router.get('/',getposts);
router.post('/',createpost);

router.post('test', test);

export default router;