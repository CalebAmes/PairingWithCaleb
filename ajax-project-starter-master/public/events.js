
document.addEventListener('DOMContentLoaded', (event) => {
    const imgSetter = async () => {
        let loader = document.querySelector('.loader');
        let score = document.querySelector('.score');
        loader.innerText = 'Loading...';
        try {
            let catPic = document.querySelector('.cat-pic');
            const image = await fetch('/kitten/image');

            if (!image.ok) throw image;
            const json = await image.json();

            catPic.src = json.src;
            loader.innerHTML = '';
            score.innerHTML = 0;

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
        console.log(err)
        let errMessage = await err.json();
        document.querySelector('.error').innerHTML = errMessage.message;
    };

    //phase 4 Voting

    const voteFunc = async (str) => {
        try {
            let fetched = await fetch(`/kitten/${str}vote`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
            });

            if (!fetched.ok) throw fetched;

            let result = await fetched.json();
            document.querySelector(".score").innerHTML = result.score;

        } catch (err) { handleError(err) };
    }
    document
        .getElementById('upvote')
        .addEventListener('click', (event) => voteFunc("up"));

    document
        .getElementById('downvote')
        .addEventListener('click', (event) => voteFunc("down"));

    let form = document.querySelector('.comment-form');
        // form.addEventListener('submit', (event) => {
        //     event.preventDefault();

        // })
    form.onsubmit = async (event) => {
        event.preventDefault();
        let entered = document.getElementById("user-comment");
        let response = await fetch("/kitten/comments", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({comment: entered.value})
        })
        let result = await response.json();

        let commentsBox = document.querySelector(".comments");
        console.log(commentsBox);

        // commentsBox.innerText += result.comments;
        const pTag = document.createElement("p");
        pTag.innerHTML = result.comments[result.comments.length - 1];
        commentsBox.appendChild(pTag);
        // commentsBox.appendChild(`<p class="comments-child">${result.comments[result.comments.length - 1]}</p>`);
    }
});
