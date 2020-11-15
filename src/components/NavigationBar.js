import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function NavigationBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Link to={""} className="navbar-brand">
                <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/last_fm-512.png" width="25" height="25" alt="brand"/>
                    Last.fm Scraper

            </Link>
            <Nav className="mr-auto">
                <Link to={"artists"}  replace className="nav-link">Artists</Link>
                <Link to={"albums"} replace className="nav-link">Albums</Link>
                <Link to={"tracks"} replace className="nav-link">Tracks</Link>              
            </Nav>
        </Navbar>
    );
}