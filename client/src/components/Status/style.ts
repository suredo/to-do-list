import styled from "styled-components";

export const FilterList = styled.ul`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-content: center;
	color: var(--secondary);
`;

export const FilterItem = styled.li`
	cursor: pointer;
	font-weight: 400;
	font-size: 20pt;
	&:hover{
		text-decoration: underline;
	}
`;