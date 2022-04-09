import '../style/global.scss'
import { NavLink, Outlet } from 'react-router-dom'
import Tab from './tab'

const NavBar = () => {

    return <div className="app">
        <nav className="navBar">
            <NavLink
                className='navBar-element'
                to='/'
            >
                <Tab
                    name="Home"
                    color="green"
                />
            </NavLink>
            <NavLink
                className='navBar-element'
                to='/calendar'
            >
                <Tab
                    name="Calendar"
                    color="red"
                />
            </NavLink>
        </nav>
        <div className="content">
            <Outlet />
        </div>
    </div>
}

export default NavBar