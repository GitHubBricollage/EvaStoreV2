
const shoesPictures = document.querySelectorAll(".thumbnail");

shoesPictures.forEach((image) => {
	image.addEventListener("mousemove", (e) => {
		image.style =
			"background-size: 840px 540px;" +
			`background-position: ${e.offsetX - 3 * e.offsetX}px ${
				e.offsetY - 3 * e.offsetY
			}px;`;
	});

	image.addEventListener("mouseout", (e) => {
		image.style = "unset;";
	});
});
