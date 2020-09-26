import styled from 'styled-components';

export const Item = styled.li`
	padding: 5px;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid;
	color: var(--secondary);
`;

export const ItemText = styled.span`
	text-align: left;
	width: 80%;
	&.active{
		text-decoration: line-through gray;
	}
`;

export const Delete = styled.button`
	width: 50px;
	background: red;
	color: white;
`;