import { NavLink, Link } from "react-router";
import logo from "../assets/logo/logo.png"
import AppNavItemList from "./AppNavItemList";
import AppNavSearch from "./AppNavSearch";
import AppNavLogo from "./AppNavLogo";

export default function AppHeader({ dataHeader }) {

  return (
    <>

      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <AppNavLogo logo={logo} width="200px" height="150px" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {
                  dataHeader.map(link => <AppNavItemList key={link.id} link={link} />)
                }
              </ul>
              <AppNavSearch />
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}