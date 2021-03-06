import React from 'react';
import { Button, Row } from 'reactstrap';

import {
    AiOutlineCheck as Check,
    AiFillEdit as Edit,
} from 'react-icons/ai';
import {btn} from './styles';

import { row, todoItem, btnClear } from './styles';

export default function TodoContainer({list, completeTodo, editTodo, completeAll, showAlert, resWidth}) {

    return (
        <>
            {list.map(item => {
                const {id, title} = item;
                return (
                    <Row key={id} style={row}>
                        <div style={{width: resWidth > 576 ? '50%' : '90%'}}>
                            <div style={todoItem}>
                                <h5>{title}</h5>
                                <div>
                                    <Button 
                                        style={btn} 
                                        color='success' 
                                        onClick={() => {
                                            completeTodo(id);
                                            showAlert(true, 'Good job !', 'success');
                                        }}

                                    ><Check/></Button>
                                    <Button 
                                        style={btn} 
                                        color='info' 
                                        onClick={() => editTodo(id)}
                                    ><Edit/></Button>
                                </div>
                            </div>
                        </div>
                    </Row>
                )
            })}
            {list.length > 2 && 
                <Button 
                    block 
                    style={{...btnClear, width: resWidth > 576 ? '50%' : '90%'}}
                    color='success' 
                    onClick={() => {
                        completeAll();
                        showAlert(true, 'Wow !!!', 'success');
                    }}
                >Complete All</Button>}
            
        </>
    )
}