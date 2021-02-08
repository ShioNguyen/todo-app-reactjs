import React from 'react';
import { Modal, Alert } from 'reactstrap';

export default function Alerts({alert, setAlert}) {

    const toggle = () => {
        setAlert({
            show: false,
            msg: '',
            type: '',
        })
    }

    return (
        <>
            <Modal isOpen={alert.show} toggle={toggle}>
                    <Alert style={{margin: 0}} color={alert.type} toggle={toggle}>{alert.msg}</Alert>
            </Modal>
        </>
    )
}