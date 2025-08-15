document.addEventListener('DOMContentLoaded', function(){
	const post = document.querySelector(".post");
	const fermer = document.querySelector(".fermer");
	const postView = document.querySelector('.postView');

	post.addEventListener('click', function(){
		postView.classList.remove('hidden');
	})

	fermer.addEventListener('click', function(){
		postView.classList.add('hidden');
	})

	document.addEventListener('click', function (e) {
	    if (!postView.classList.contains('hidden') && !postView.contains(e.target) && !post.contains(e.target)) {
	        postView.classList.add('hidden');
	    }
	});

})