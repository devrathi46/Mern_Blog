import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import {
  createComment,
  getPostComments,
  likeComment,
  getcomments,
} from '../controllers/comment.controller.js';

const router = express.Router();

router.post('/create', verifyToken, createComment);
router.get('/getPostComments/:postId', getPostComments);
router.put('/likeComment/:commentId', verifyToken, likeComment);
router.get('/getcomments', verifyToken, getcomments);

export default router;