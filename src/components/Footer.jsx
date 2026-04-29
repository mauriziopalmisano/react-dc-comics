import FooterInfoList from "./FooterInfoList.jsx"
import FooterNavBar from "./FooterNavBar.jsx"
import FooterSocials from "./FooterSocials.jsx"

function Footer() {
    return<>
        <footer>

            <div className="bg-primary">
            <div className="container">
            <FooterNavBar/>
            </div>
            </div>


            <div className="info-list">
            <div className="container">
            <FooterInfoList/>
            </div>
            </div>
            
            
            <div className="bg-dark">
            <div className="container">
            <FooterSocials/>
            </div>
            </div>
        </footer>
    </>
}

export default Footer