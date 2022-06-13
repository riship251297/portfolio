import express from "express";
import {getposts,createpost,test} from '../controllers/posts.js';
const router = express.Router();

// router.get('/',firstpage);
router.post('/posts',createpost);
router.post('/tests', test);

export default router;