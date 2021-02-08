import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

export default function Header() {
    return (
        <>
            <Navbar dark className='bg-primary' style={{position: 'fixed', width: '100vw',}}>
                <NavbarBrand className='m-auto'>Todo App</NavbarBrand>
            </Navbar>
        </>
    )
}