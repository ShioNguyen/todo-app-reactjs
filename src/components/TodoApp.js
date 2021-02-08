import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';

import TodoInput from './TodoInput';
import TodoContainer from './TodoContainer';

import {container} from './styles';

export default function TodoApp() {

    const [title, setTitle] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const [editID, setEditID] = useState(null);
    const [list, setList] = useState(() => {
        let list = localStorage.getItem('list');
        if(list) {
            return JSON.parse(localStorage.getItem('list'));
        }
        else return [];
    })

    const completeTodo = (id) => {
        const newList = list.filter(item => item.id !== id);
        setList(newList);
    }

    const editTodo = (id) => {
        const itemEdited = list.find(item => item.id === id);
        setTitle(itemEdited.title);
        setIsEdit(true);
        setEditID(itemEdited.id);
    }

    const completeAll = () => {
        setList([]);
    }

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
    }, [list]);

    return (
        <>
            <Container style={container}>
                <TodoInput 
                    title={title} 
                    setTitle={setTitle} 
                    list={list} 
                    setList={setList} 
                    isEdit={isEdit} 
                    editID={editID} 
                    setIsEdit={setIsEdit} 
                    setEditID={setEditID}
                />
                <TodoContainer list={list} completeTodo={completeTodo} editTodo={editTodo} completeAll={completeAll}/>
            </Container>
        </>
    )
}
