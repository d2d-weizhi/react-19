import React from 'react';
import { Route, NavLink } from 'react-router-dom';

function MainMenu() {
	return (
		<>
			<div>
			<ul>
          <li>
            <NavLink
              exact
              to="/"
              activeStyle={{ backgroundColor: "black", color: "white" }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              strict
              to="/aboutUs/"
              activeStyle={{ backgroundColor: "black", color: "white" }}
            >
              About Us
            </NavLink>
            <ul>
              <li>
                <NavLink
                  strict
                  to="/aboutUs/team/"
                  activeStyle={{ backgroundColor: "black", color: "white" }}
                >
                  Meet the Team
                </NavLink>
              </li>
              <li>
                <NavLink
                  strict
                  to="/aboutUs/history/"
                  activeStyle={{ backgroundColor: "black", color: "white" }}
                >
                  Company History
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              exact
              to="/contactUs"
              activeStyle={{ backgroundColor: "black", color: "white" }}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        <Route path="/">
          <p>home</p>
        </Route>
        <Route path="/aboutUs/">
          <p>about us</p>
        </Route>
        <Route path="/aboutUs/team/">
          <p>meet the team</p>
        </Route>
			</div>
		</>
	);
}

export default MainMenu;