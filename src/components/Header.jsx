import HeaderLogo from "./HeaderLogo.jsx"
import HeaderNavBar from "./HeaderNavBar.jsx"

function Header() {
    return <>
        <header className="row top-bar flex-nowrap justify-content-md-center px-3">
            <HeaderLogo/>
            <HeaderNavBar/>
        </header>
    </>
}

export default Header