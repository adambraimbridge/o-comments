import Comments from './src/js/comments';

const constructAll = function () {
	Comments.init();
	document.removeEventListener('o.DOMContentLoaded', constructAll);
};

document.addEventListener('o.DOMContentLoaded', constructAll);

export default Comments;
