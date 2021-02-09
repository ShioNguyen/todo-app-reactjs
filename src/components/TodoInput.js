import React from 'react';
import { Button, Form, Input, InputGroup, InputGroupAddon, Row } from 'reactstrap';

import { row } from './styles';

export default function TodoInput({title, setTitle, list, setList, isEdit, editID, setIsEdit, setEditID, showAlert, resWidth}) {

    const handleOnSubmit = (event) => {
        event.preventDefault();

        if(!title) {
            showAlert(true, 'Please enter value !', 'danger');
        }
        else if(editID && title) {
            setList(list.map(item => {
                if(item.id === editID) {
                    return {...item, title: title};
                }
                return item;
            }));
            setTitle('');
            setIsEdit(false);
            setEditID(null);
            showAlert(true, 'Edit complete !', 'info');
        }
        else {
            const newItem = {id: new Date().getTime().toString(), title: title};
            setList([...list, newItem]);
            setTitle('');
        }
    }
    return (
        <>
            <Row style={row}>
                <Form style={{width: resWidth > 576 ? '50%' : '90%'}} onSubmit={handleOnSubmit}>
                    <InputGroup style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', }}>
                        <Input 
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                            style={{borderRadius: 0}}
                        />
                        <InputGroupAddon addonType='prepend'>
                            <Button 
                                color={isEdit ? 'info active' : 'primary'}
                            >
                            {isEdit ? 'Edit' : 'Submit'}</Button>
                        </InputGroupAddon>
                    </InputGroup>
                </Form>
            </Row>
        </>
    )
}