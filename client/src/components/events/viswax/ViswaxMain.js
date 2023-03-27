import styled from "styled-components";
import GlobalStyles from "../../GlobalStyles";

const ViswaxMain = ({ runes }) => {
	return (
		<Wrapper>
			<Slot1>
				<span>Slot1</span>
				{runes && (
					<Runes>
						<Rune>
							<img
								src={`https://runescape.wiki/images/${runes.slot1[1].type}_rune.png?`}
							></img>
							<div>{runes.slot1[1].value}</div>
						</Rune>
						<Rune>
							<img
								src={`https://runescape.wiki/images/${runes.slot1[2].type}_rune.png?`}
							></img>
							<div>{runes.slot1[2].value}</div>
						</Rune>
						<Rune>
							<img
								src={`https://runescape.wiki/images/${runes.slot1[3].type}_rune.png?`}
							></img>
							<div>{runes.slot1[3].value}</div>
						</Rune>
					</Runes>
				)}
			</Slot1>
			<Slot2>
				<span>Slot2</span>
				{runes && (
					<Runes>
						<Rune>
							<img
								src={`https://runescape.wiki/images/${runes.slot2[1].type}_rune.png?`}
							></img>

							<div>{runes.slot2[1].value}</div>
						</Rune>
						<Rune>
							<img
								src={`https://runescape.wiki/images/${runes.slot2[2].type}_rune.png?`}
							></img>
							<div>{runes.slot2[2].value}</div>
						</Rune>
						<Rune>
							<img
								src={`https://runescape.wiki/images/${runes.slot2[3].type}_rune.png?`}
							></img>
							<div>{runes.slot2[3].value}</div>
						</Rune>
						<Rune>
							<img
								src={`https://runescape.wiki/images/${runes.slot2[4].type}_rune.png?`}
							></img>
							<div>{runes.slot2[4].value}</div>
						</Rune>
						<Rune>
							<img
								src={`https://runescape.wiki/images/${runes.slot2[5].type}_rune.png?`}
							></img>
							<div>{runes.slot2[5].value}</div>
						</Rune>
						<Rune>
							<img
								src={`https://runescape.wiki/images/${runes.slot2[6].type}_rune.png?`}
							></img>
							<div>{runes.slot2[6].value}</div>
						</Rune>
					</Runes>
				)}
			</Slot2>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: inherit;
	padding: 5px;
	border-radius: 10px;
	text-align: center;
	display: flex;
	justify-content: space-between;
	background-color: var(--light-blue);
	color: white;

	span {
		font-size: 12px;
	}
`;

const Slot1 = styled.div`
	margin-left: 10px;
	display: flex;
	flex-direction: column;
`;
const Slot2 = styled.div`
	margin-right: 10px;
	display: flex;
	flex-direction: column;
`;

const Runes = styled.div`
	display: flex;
	flex-direction: row;
`;

const Rune = styled.div`
	margin: 2px;
	padding: 2px;
`;
export default ViswaxMain;
