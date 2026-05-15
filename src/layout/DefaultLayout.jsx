
import { Outlet } from "react-router";
import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";

export default function DefaultLayout({ dataList }) {

  return (
    <>
      <AppHeader dataHeader={dataList} />

      <main>
        <Outlet />
      </main>

      <AppFooter dataFooter={dataList} />
    </>
  )
}