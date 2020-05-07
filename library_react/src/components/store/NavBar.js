import React from "react"
import {  Navbar, Nav, NavItem, NavLink } from 'reactstrap';
export const NavBar = () => {

    return (
        <Navbar className="m-0 p-0" expand="md">
            <Nav className="p-0 m-0" navbar>
                <NavItem>
                    <NavLink className="sednavbar">Charts</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="sednavbar">Genres & Moods</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="sednavbar">New Releases</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="sednavbar">Discover</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="sednavbar">Concerts</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="sednavbar">Podcasts</NavLink>
                </NavItem>
            </Nav>

        </Navbar>

    )
}


