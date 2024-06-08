import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md transition-transform duration-300 transform hover:scale-110">
        <p className="blue-gradient_text">CC</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to="/about" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black' }>
          Sobre
        </NavLink>
        <NavLink to="/projects" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black' }>
          Projetos
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar