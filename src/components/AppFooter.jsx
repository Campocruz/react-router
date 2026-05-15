import { Link } from "react-router";
import logoFooter from "../assets/logo/logoFooter.png"
import AppNavLogo from "./AppNavLogo";
import AppNavItemList from "./AppNavItemList";

export default function AppFooter({ dataFooter }) {

  return (
    <>
      <footer className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-6">
            <ul className="list-unstyled d-flex justify-content-around">
              {
                dataFooter.map(link => <AppNavItemList key={link.id} link={link} />)
              }
            </ul>
          </div>
          <div className="col-2">
            <AppNavLogo logo={logoFooter} width="100px" height="80px" />
          </div>
        </div>
      </footer>
    </>
  )
}