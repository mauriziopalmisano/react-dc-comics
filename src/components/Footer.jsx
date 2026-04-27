import FooterInfoList from "./FooterInfoList.jsx"
import FooterNavBar from "./FooterNavBar.jsx"
import FooterSocials from "./FooterSocials.jsx"

function Footer() {
    return<>
        <footer className="row">
            <FooterNavBar/>
            <FooterInfoList/>
            <FooterSocials/>
        </footer>
    </>
}

export default Footer