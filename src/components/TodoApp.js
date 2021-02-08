import React, { useEffect, useState } from 'react';
import { Container} from 'reactstrap';

import TodoInput from './TodoInput';
import TodoContainer from './TodoContainer';
import Alerts from './Alerts';
import Header from './Header';
import Footer from './Footer';

import {container} from './styles';

export default function TodoApp() {

    const [title, setTitle] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const [editID, setEditID] = useState(null);
    const [alert, setAlert] = useState({show: false, msg: '', type: ''});
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

    const showAlert = (show=false, msg='', type='') => {
        setAlert({show, msg, type});
    }
    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
    }, [list]);

    return (
        <>  
            <Header/>
            <Container style={container}>
                <Alerts alert={alert} setAlert={setAlert}/>
                <TodoInput
                    showAlert={showAlert}
                    title={title} 
                    setTitle={setTitle} 
                    list={list} 
                    setList={setList} 
                    isEdit={isEdit} 
                    editID={editID} 
                    setIsEdit={setIsEdit} 
                    setEditID={setEditID}
                    setAlert={setAlert}
                />
                <TodoContainer 
                    list={list} 
                    completeTodo={completeTodo} 
                    editTodo={editTodo} 
                    completeAll={completeAll}
                    showAlert={showAlert}
                />
            </Container>
            <Footer/>
        </>
    )
}
