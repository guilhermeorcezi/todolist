import styled from 'styled-components';

const List = styled.li`
	margin-bottom: 10px;
	font-size: 16px;
	color: #666;
	align-content: stretch;
	display: flex;

	button,
	button:hover {
		border: 0;
		background-color: #FFF;
		margin: 0;
		padding: 0;
		height: auto;
		width: auto;
		margin-right: 20px;
		align-self: start;
		color: rgb(165, 245, 171);
		cursor: pointer;
	}

	button:hover {
		color: rgb(18, 171, 29) !important;
		transition: 0.3s ease-in;
	}

	p {
		margin-right: 20px;
		font-size: 21px;
		width: 100%;
	}

	.p-done {
		text-decoration: line-through;
	}

	.button-done {
		color: rgb(18, 171, 29);
	}

	.icons {
		position: relative;

		.delete:hover,
		.edit:hover {
			color: rgb(146, 145, 145) !important;
			transition: 0.3s ease-in;
		}

		.delete {
			position: absolute;
			right: 25px;
			top: 0px;
			margin: 0;
			cursor: pointer;
			color: #666;
		}

		.edit {
			position: absolute;
			right: 70px;
			top: 0px;
			margin: 0;
			cursor: pointer;
			color: #666;
		}
	}
`;

export default List;
