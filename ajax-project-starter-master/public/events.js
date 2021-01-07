document.addEventListener('DOMContentLoaded', (event) => {
	const imgSetter = async () => {
		let catPic = document.querySelector('.cat-pic');
		const image = await fetch('/kitten/image');
		const json = await image.json();

		catPic.src = json.src;
	};
    imgSetter();
    document.getElementById('new-pic').addEventListener('click', imgSetter)
});
