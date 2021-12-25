import express from 'express';
import commentendpoint from './routers.js';

const {
	getAllComments,
	createComment,
	getCommentById,
	updateComment,
	deleteComment,
} = commentendpoint;

const commentsRouter = express.Router();

commentsRouter.route('/comment').post(createComment).get(getAllComments);

commentsRouter
	.route('/comment/:id')
	.put(updateComment)
	.get(getCommentById)
	.delete(deleteComment);

export default commentsRouter;
