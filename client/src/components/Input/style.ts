import styled from "styled-components";

export const Wrapper = styled.form`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-content: center;
	margin-top: 10px;
`;

export const InputSpace = styled.input`
	border-bottom: 1px solid var(--primary);
	width: 80%;
	color: var(--primary);
	font-size: 15pt;
`;

export const SubmitButton = styled.button`
	color: white;
	background: var(--primary);
	height: 30px;
	width: 100px;
`;