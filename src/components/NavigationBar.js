import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
const user = localStorage.getItem('username')
export default function NavigationBar() {
    return (
        <Navbar bg="primary" variant="dark" >
            {/* <Navbar.Brand href="">
                <img
                    alt=""
                    src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/last_fm-512.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                React Bootstrap
            </Navbar.Brand> */}
            <Link to={""} className="navbar-brand">
                <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/last_fm-512.png" width="30" height="30" alt="brand"/>{' '}
                    Last.fm Scraper

            </Link>
            <Nav className="mr-auto">
                <Link to={"/artists"}  replace className="nav-link">Artists</Link>
                <Link to={"/albums"} replace className="nav-link">Albums</Link>
                <Link to={"/tracks"} replace className="nav-link">Tracks</Link>              
            </Nav>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                Current User: {user}
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
}