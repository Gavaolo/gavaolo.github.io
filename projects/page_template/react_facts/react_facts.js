import Header from ".\components\Header.js"
import MainContent from ".\components\MainContent.js"
import Footer from ".\components\Footer.js"
// import react from "react"
// import ReactDOM from "react-dom"

function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))