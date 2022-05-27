import styled from 'styled-components';
import SearchContainer from './component/SearchContainer';
import ResultContainer from './component/ResultContainer';
import './App.css';

const Container = styled.div`
	position: relative;
	background-color: var(--primary);
	min-height: 100vh;
`;

function App() {
	return (
		<>
			<Container>
				<SearchContainer />
				<ResultContainer />
			</Container>
		</>
	);
}
export default App;
