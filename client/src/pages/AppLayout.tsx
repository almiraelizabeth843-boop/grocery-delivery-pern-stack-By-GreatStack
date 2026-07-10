import { Outlet } from "react-router-dom"

const AppLayout = () => {
  return (
    <>
        {/* This will be displayed on all pages except login page. */}
        <p>banner</p>
        <p>navbar</p>
        <main className="min-h-screen">
            <Outlet/>
        </main>
        <p>footer</p>
        <p>cartSidebar</p>
    </>
  )
}

export default AppLayout