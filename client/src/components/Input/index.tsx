import React, { useContext, useState } from 'react';
import { addTodo } from '../../api/fetchTodo';
import { Store } from '../../store/store';
import { InputSpace, SubmitButton, Wrapper } from './style';

export const Input = () => {
	const [value, setValue] = useState("");
	const {dispatchFetch, dispatchTodos} = useContext(Store);
	const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		addTodo(value, dispatchTodos, dispatchFetch);
		setValue("");
	}
	return(
		<Wrapper onSubmit={(e) => handleAddTodo(e)}>
			<InputSpace value={value} onChange={ e => setValue(e.target.value) }/>
			<SubmitButton>Adicionar</SubmitButton>
		</Wrapper>
	)
}