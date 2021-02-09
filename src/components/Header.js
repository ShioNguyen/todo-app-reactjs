import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

import {header} from './styles';

export default function Header() {
    return (
        <>
            <Navbar dark className='bg-primary' style={header}>
                <NavbarBrand className='m-auto'>TODO APP</NavbarBrand>
            </Navbar>
        </>
    )
}