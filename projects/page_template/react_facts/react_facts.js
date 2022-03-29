import Footer from ".\components\Footer.js"
import Header from ".\components\Header.js"
import MainContent from ".\components\MainContent.js"
import react from "https://unpkg.com/react@17/umd/react.development.js"
import ReactDOM from "react-dom"


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