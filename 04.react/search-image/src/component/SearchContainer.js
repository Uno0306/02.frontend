import styled from 'styled-components';
import Search from './Search';

const Container = styled.div`
	position: relative;
	width: 100%;
	background-color: var(--secondary);
`;

const SearchTitle = styled.h1`
	margin: 8px 0px;
`;

const SearchTitleLink = styled.a`
	text-decoration: none;
	color: var(--text);
	&:hover {
		color: var(--highlight);
	}
`;

const SearchSubtitle = styled.p`
	margin: 0px;
	color: var(--highlight);
	font: 24px;
`;

const Content = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-align: center;
	padding: 120px 32px 16px 32px;
`;

const SearchContainer = () => {
	return (
		<Container>
			<Content>
				<SearchTitle>
					<SearchTitleLink href="./">사진 검색</SearchTitleLink>
				</SearchTitle>
				<SearchSubtitle>What's your images?</SearchSubtitle>

				<Search />
			</Content>
		</Container>
	);
};

export default SearchContainer;
