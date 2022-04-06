function Navbar() {
    return(
        <nav>
            <span><span class="fas fa-globe-americas"></span> my travel journal.</span>
        </nav>
    )
}

function Travel() {
    return (
        <div>
            <img src=""/>
            <div className="travel-content">
                
            </div>
        </div>
    )
}

function App() {
    return (
        <div className="container">
            <Navbar />
            <Main />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"))