import React from 'react';
import { Button, Row } from 'reactstrap';

import {
    AiOutlineCheck as Check,
    AiFillEdit as Edit,
} from 'react-icons/ai';
import {btn} from './styles';

import { row, rowItem, todoItem, btnClear } from './styles';

export default function TodoContainer({list, completeTodo, editTodo, completeAll, showAlert}) {

    return (
        <>
            {list.map(item => {
                const {id, title} = item;
                return (
                    <Row key={id} style={row}>
                        <div style={rowItem}>
                            <div style={todoItem}>
                                <h5>{title}</h5>
                                <div>
                                    <Button 
                                        style={btn} 
                                        color='success' 
                                        outline 
                                        onClick={() => {
                                            completeTodo(id);
                                            showAlert(true, 'Good job !', 'success');
                                        }}><Check/></Button>
                                    <Button color='info' outline onClick={() => editTodo(id)}><Edit/></Button>
                                </div>
                            </div>
                        </div>
                    </Row>
                )
            })}
            {list.length > 2 && 
                <Button 
                    block 
                    style={btnClear} 
                    color='success' 
                    onClick={() => {
                        completeAll();
                        showAlert(true, 'Wonderful !!!', 'success');
                    }}
                >Complete All</Button>}
            
        </>
    )
}