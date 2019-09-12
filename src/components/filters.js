import { Navbar, Nav, Form, FormControl } from 'react-bootstrap'
import React from 'react'

export const Filter = ({ filterDone, setSearchStr }) => (
<header className='App-header mt-0'>
    <p className='mt-3'>
        React To-do List
    </p>
    <Navbar bg='info' expand='lg'>
        {/* { <Navbar.Brand href='#TAKEOUT'>My To-do List</Navbar.Brand> } */}
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
        <Nav.Link className='text-black-50' onClick={ filterDone }>show/hide done todos</Nav.Link>
        <Form inline>
            <FormControl id='searchForm' type='text' placeholder='Search' className='mr-sm-2' onChange={ e => setSearchStr(e.target.value) } />
            {/* <Button href='TAKEOUT!' variant='outline-dark' type='submit'>Search</Button> */}
        </Form>
        </Navbar.Collapse>
    </Navbar>
</header>
)
