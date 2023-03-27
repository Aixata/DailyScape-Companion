"use strict";

// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");
const { getVisWax } = require("./handlers/getViswax");

express()
	.use(morgan("tiny"))
	.use(express.json())

	.use(express.static("public"))

	//
	.get("/api/VisWaxCombination", getVisWax)
	// ---------------------------------

	.get("*", (req, res) => {
		res.status(404).json({
			status: 404,
			message: "This is obviously not what you are looking for.",
		});
	})

	// Node spins up our server and sets it to listen on port 8000.
	.listen(8000, () => console.log(`Listening on port 8000`));
