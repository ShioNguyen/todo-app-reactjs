import React from 'react';
import { Button, Form, Input, InputGroup, InputGroupAddon, Row } from 'reactstrap';

import { row, rowItem } from './styles';

export default function TodoInput({title, setTitle, list, setList, isEdit, editID, setIsEdit, setEditID}) {

    const handleOnSubmit = (event) => {
        event.preventDefault();

        if(editID && title) {
            setList(list.map(item => {
                if(item.id === editID) {
                    return {...item, title: title};
                }
                return item;
            }));
            setTitle('');
            setIsEdit(false);
            setEditID(null);
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
                <Form style={rowItem} onSubmit={handleOnSubmit}>
                    <InputGroup>
                        <Input 
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                        />
                        <InputGroupAddon addonType='append'>
                            <Button color={isEdit ? 'info active' : 'primary'}>{isEdit ? 'Edit' : 'Submit'}</Button>
                        </InputGroupAddon>
                    </InputGroup>
                </Form>
            </Row>
        </>
    )
}