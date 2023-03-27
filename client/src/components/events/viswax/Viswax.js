import { useEffect, useState } from "react";
import ViswaxMain from "./ViswaxMain";

const Viswax = () => {
	let xmlDoc;
	const [runes, setRunes] = useState();
	useEffect(() => {
		fetch("/api/VisWaxCombination")
			.then((response) => response.json())
			.then((data) => {
				if (data.status === 200) {
					xmlDoc = new DOMParser().parseFromString(data.data, "text/xml");
					setRunes(updateRunes());
				} else {
				}
			})
			.catch((error) => {
				console.error(error.message);
			});
	}, []);

	/*
Mapping out the table to an object
From left to right each slot is separated by 3 indexes.
i.e Slot 1-1 is index 14, Slot 1-2 is index 17

From top to bottom each slot is separated by 9 indexes.
i.e Slot 1-1 is index 14, Slot 2-1 is index 23

| Slot1-1 	| Slot1-2 	| Slot1-3 	| Row starts at index 14
|---------	|---------	|---------	|
| Slot2-1 	| Slot2-4 	| Slot2-7 	| Row starts at index 23 (+9)
| Slot2-2 	| Slot2-5 	| Slot2-8 	| Row starts at index 32 (+9)
| Slot2-3 	| Slot2-6 	| Slot2-9 	| Row starts at index 41 (+9)
	*/
	const updateRunes = () => {
		const tdElements = xmlDoc.getElementsByTagName("td");
		const firstRuneIndex = 14;
		return {
			slot1: {
				1: {
					type: tdElements[firstRuneIndex].textContent.replace(" ", ""),
					value: tdElements[firstRuneIndex + 1].textContent,
				},
				2: {
					type: tdElements[firstRuneIndex + 3].textContent.replace(
						" ",
						""
					),
					value: tdElements[firstRuneIndex + 4].textContent,
				},
				3: {
					type: tdElements[firstRuneIndex + 6].textContent.replace(
						" ",
						""
					),
					value: tdElements[firstRuneIndex + 7].textContent,
				},
			},
			slot2: {
				1: {
					type: tdElements[firstRuneIndex + 9].textContent.replace(
						" ",
						""
					),
					value: tdElements[firstRuneIndex + 10].textContent,
				},
				2: {
					type: tdElements[firstRuneIndex + 18].textContent.replace(
						" ",
						""
					),
					value: tdElements[firstRuneIndex + 19].textContent,
				},
				3: {
					type: tdElements[firstRuneIndex + 27].textContent.replace(
						" ",
						""
					),
					value: tdElements[firstRuneIndex + 28].textContent,
				},
				4: {
					type: tdElements[firstRuneIndex + 12].textContent.replace(
						" ",
						""
					),
					value: tdElements[firstRuneIndex + 13].textContent,
				},
				5: {
					type: tdElements[firstRuneIndex + 21].textContent.replace(
						" ",
						""
					),
					value: tdElements[firstRuneIndex + 22].textContent,
				},
				6: {
					type: tdElements[firstRuneIndex + 30].textContent.replace(
						" ",
						""
					),
					value: tdElements[firstRuneIndex + 31].textContent,
				},
				7: {
					type: tdElements[firstRuneIndex + 15].textContent.replace(
						" ",
						""
					),
					value: tdElements[firstRuneIndex + 16].textContent,
				},
				8: {
					type: tdElements[firstRuneIndex + 24].textContent.replace(
						" ",
						""
					),
					value: tdElements[firstRuneIndex + 25].textContent,
				},
				9: {
					type: tdElements[firstRuneIndex + 33].textContent.replace(
						" ",
						""
					),
					value: tdElements[firstRuneIndex + 34].textContent,
				},
			},
		};
	};

	return <ViswaxMain runes={runes} />;
};

export default Viswax;
