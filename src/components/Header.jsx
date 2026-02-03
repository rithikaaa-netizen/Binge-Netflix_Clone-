import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
const Header = () => {
  return (
    <header className='top-0 left-0 right-0'>
        <div className=' py-4 px-6 flex justify-between items-center h-16 ml-30'>
          <img className=' w-47 ' src={logo} alt='netflix'></img>
          <div className='bg-black text-white h-8 w-30 border-2 rounded-sm flex justify-center ml-auto mr-3'> 
            <label for='languages'></label>
              <select name='languages' id='languages'>
                <option className='text-black justify-center'>English</option>
                <option className='text-black justify-center'>हिन्दी</option>
                </select>
          </div>
          <div>
            <nav>
            <Link to="/signin">
            <button 
              className='bg-[#E50914] hover:bg-[#f6121d] transition text-white h-8 w-18 text-center rounded-md justify-center font-bold mr-14'>
                Sign In
            </button>
            </Link>
            </nav>
          </div>
        </div>        
    </header>
  )
}

export default Header