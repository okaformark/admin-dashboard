import React, {useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import {RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import avatar from '../data/avatar.jpg'
import { Cart, Chat, Notification, UserProfile } from '.'
import { useStateContext } from '../context/contextProvider'

const NavButon = ({title,customFuntion, icon,color, dotColor}) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button type="button" onClick={() => customFuntion()} className="relative text-xl rounded-full p-3 hover:bg-light-gray" style={{ color}}>
      <span className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" style={{background: dotColor}} />
          {icon}
    </button>
    </TooltipComponent>
)

const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize } = useStateContext();

  useEffect(() => {
      const handleResize = () => setScreenSize(window.innerWidth);
      window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);

  }, [])

  useEffect(() => {
   if(screenSize <= 900){
     setActiveMenu(false)
   }
   else{
     setActiveMenu(true)
   }
    
  }, [screenSize, setActiveMenu])
  
  
  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButon title="Menu" customFuntion={() => setActiveMenu((prev) => !prev)} icon={<AiOutlineMenu />} color="blue" />
      <div className="flex">
      <NavButon title="Cart" customFuntion={() => handleClick('cart') } icon={<FiShoppingCart />} color="blue" />
      <NavButon title="Chat"  dotColor="#03c9d7" customFuntion={() => handleClick('chat') } icon={<BsChatLeft />} color="blue" />
      <NavButon title="Notifications"  dotColor="#03c9d7" customFuntion={() => handleClick('notification') } icon={<RiNotification3Line />} color="blue" />


      <TooltipComponent content="Profile" position="BottomCenter">
        <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg" onClick={() => handleClick('userProfile')}>
          <img src={avatar} alt="avatar" className="rounded-full h-8 w-8" />
          <p>
            <span className="text-gray-400 text-14">Hi</span>{' '}
            <span className="text-gray-400 font-bold ml-1 text-14">Mark</span>
          </p>
          <MdKeyboardArrowDown className="text-gray-400 text-14" />
        </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  )
}

export default Navbar