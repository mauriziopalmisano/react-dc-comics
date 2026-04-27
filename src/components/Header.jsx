import HeaderLogo from "./HeaderLogo.jsx"
import HeaderNavBar from "./HeaderNavBar.jsx"

function Header() {
    return <>
        <header className="row">
            <HeaderLogo/>
            <HeaderNavBar/>
        </header>
    </>
}

export default Header