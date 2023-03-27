import styled from "styled-components";
import Viswax from "./components/events/viswax/Viswax";
import GlobalStyles from "./components/GlobalStyles";

export function App() {
	return (
		<Wrapper>
			<GlobalStyles />
			<Viswax />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 400px;
`;
