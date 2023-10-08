import {Col, Container, Row} from 'react-bootstrap';

import React from 'react';
import slogo from '../images/slogo.png'

const NavBar = ({search}) => {
    const onSearch = (word)=>{
        search(word)
    }
    return (
        <div className='nav-style w-100'>
            <Container>
                <Row className='pt-2 align-items-center justify-content-center'>
                    <Col xs='2' lg='1'>
                        <a href='/'>
                            <img className='logo' src={slogo} alt='dfs' />
                        </a>
                    </Col>

                    <Col xs='10' lg='11'>
                        <div className='search d-flex justify-content-center'>
                            <i className='fa fa-search'></i>
                            <input onChange={(e)=>onSearch(e.target.value)} type='text' className='form-control' placeholder='Search'/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NavBar;