document.addEventListener('DOMContentLoaded', (event) => {
	const imgSetter = async () => {
		let loader = document.querySelector('.loader');
		loader.innerText = 'Loading...';

		try {
			let catPic = document.querySelector('.cat-pic');
			const image = await fetch('/kitten/image');

			if (!image.ok) throw image;
			const json = await image.json();

			catPic.src = json.src;
			loader.innerHTML = '';
		} catch (err) {
			handleError(err);
			loader.innerText = '';
		}
	};

	document.getElementById('new-pic').addEventListener('click', (event) => {
		imgSetter();
	});

	imgSetter();

	const handleError = async (err) => {
		let errMessage = await err.json();
		document.querySelector('.error').innerHTML = errMessage.message;
    };
    
    //phase 4 Voting
    let upvote = document.getElementById('upvote');
    let downvote = document.getElementById('downvote');

    const upvoteFunc = async () => {
        try {
            let fetched = await fetch('/kitten/upvote');

            if(!fetched.ok) throw fetched;
            // const json = await fetched.json();
        } catch (err) {
            handleError(err);
        }
    }
    upvote.addEventListener('click', (event)  => {
        upvoteFunc();
    })
});
