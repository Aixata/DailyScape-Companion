const fetch = require("node-fetch");

const getVisWax = async (request, response) => {
	await fetch(
		"https://runescape.wiki/api.php?action=parse&format=json&page=Rune Goldberg Machine&section=1&prop=text"
	)
		.then((response) => response.json())
		.then((data) => {
			if (data) {
				response
					.status(200)
					.json({ status: 200, data: data.parse.text["*"] });
			} else {
				response.status(502);
			}
		});
};

module.exports = { getVisWax };
