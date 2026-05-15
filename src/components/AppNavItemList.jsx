import { NavLink } from "react-router"
export default function AppNavItemList({ link }) {

  return (
    <>
      <li className="nav-item">
        <NavLink className="nav-link active" aria-current={link.link} to={link.path}>{link.text}</NavLink>
      </li>
    </>
  )
}