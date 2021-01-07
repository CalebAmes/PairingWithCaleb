document.addEventListener('DOMContentLoaded', (event) => {
	const imgSetter = async () => {
        let loader = document.querySelector(".loader");
        loader.innerText = "Loading...";

        try {
            let catPic = document.querySelector('.cat-pic');
            const image = await fetch('/kitten/image');

            if (!image.ok) {
                throw image;
            }
            const json = await image.json();

            catPic.src = json.src;
            loader.innerHTML = "";

        } catch (err) {
            let errMessage = await err.json();
            loader.innerText = "";
            document.querySelector(".error").innerHTML = errMessage.message;
        }
	};
    imgSetter();

    document.getElementById('new-pic').addEventListener('click', (event) => {

        imgSetter();

    });
});
