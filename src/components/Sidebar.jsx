import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { useStateContext } from '../context/contextProvider'
import { links} from '../data/dummy'

const Sidebar = () => {
  const {activeMenu, setActiveMenu,screenSize } = useStateContext();

  const handleCloseSidebar = () => {
    if(activeMenu !== undefined && screenSize <= 900){
      setActiveMenu(false)
    }
  }

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-200 text-md m-2';
  const inactiveLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto
    md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
        <div className="flex justify-between items-center">
          <Link to="/" className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900" onClick={handleCloseSidebar}>
            <SiShopware /><span>Shopply</span>
          </Link>
          <TooltipComponent content="Menu" target="menu" position="BottomCenter">
            <button type="button" onClick={() => setActiveMenu((prev) => !prev)} className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden">
              <MdOutlineCancel />
              </button>
          </TooltipComponent>
        </div>
        <div className="mt-10">
          {links.map(link => (
            <div key={link.title}>
              <p className="text-gray-400 dark:text-gray m-3 mt-4 uppercase">

              {link.title}
              </p>
              {link.links.map((sublink) =>(
                <NavLink onClick={handleCloseSidebar} key={sublink.name} to={`/${sublink.name}`} className={({ isActive }) => 
                isActive ? activeLink : inactiveLink
                } >
                  {sublink.icon}
                  <span className="capitalize">
                    {sublink.name}
                  </span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
        </>
      )}
      </div>
  )
}

export default Sidebar