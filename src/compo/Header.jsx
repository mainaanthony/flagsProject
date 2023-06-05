import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';




const Header = ({theme, setTheme}) => {

  

  const [nametheme, setnameTheme] = useState('Dark Mode')


  // const dark = "Dark Mode"
  // const light  = "Light Mode"

   const toggleTheme = () =>{
           if (theme === 'light'){
            setTheme('dark')
            setnameTheme('Dark Mode')

           }else{
            setTheme('light')
            setnameTheme('Light Mode')

           }


   }


  return (
    <div className='header'>
      <div>
      <h2>Where in the world</h2>
      </div>

     <button id='mode' onClick={toggleTheme}>
        {nametheme}
     </button>

    </div>
  )
}

export default Header
