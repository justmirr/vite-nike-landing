import './Nav.css'

const Nav = () => {
  return (
    <div className='navbar'>
        <a href=""><img src="/images/nike_logo.png" alt="Logo" /></a>
        <ul className="nav-links">
            <li><a href='#'>Menu</a></li>
            <li><a href='#'>Location</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Contact</a></li>
        </ul>
        <button>Login</button>
    </div>
  )
}

export default Nav