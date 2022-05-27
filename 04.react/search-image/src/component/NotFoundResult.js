import styled from 'styled-components';

const NotFoundResultContainer = styled.div`
	width: 100%;
	text-align: center;
	padding: 16px 0;
	line-height: 1.3;
	color: var(--highlight);
`;

const NotFoundResult = () => {
	return (
		<NotFoundResultContainer>
			<h2>Can not serach!!</h2>
			Please Retry.
		</NotFoundResultContainer>
	);
};

export default NotFoundResult;
