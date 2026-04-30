import Footer from "./components/Footer.jsx"
import Header from "./components/Header/Header.jsx"
import Main from "./components/Main/Main.jsx"


function App() {

  return <>
    <div>
      <div className="container">
        <Header />
      </div>
    </div>


    <div className="main-bg-img">
    </div>
    <div className="bg-dark">
      <div className="container position-relative">
        <span className="text-white text-uppercase fw-bold fs-4 bg-primary  translate position-absolute">current series</span>
        <Main />
      </div>
    </div>


    <Footer />
  </>
}

export default App
