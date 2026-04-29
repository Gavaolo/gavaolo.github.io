function Header() {
    return (
        <header>
            <img src="./img/profile_photo.jpg" />
            <h1 className="card-name">Paolo Gavasso</h1>
            <p className="job-description">Frontend Developer</p>
            <small className="web-site"><a href="https://gavaolo.github.io/" target="_blank">gavaolo.github.io</a></small>
        </header>
    )
}

function Nav() {
    return (
        <nav>
            <a href="mailto:gavassopaolo@gmail.com" target="_blank"><i className="fas fa-envelope"></i>Email</a>
            <a target="_blank" className="linkedin-link"><i className="fab fa-linkedin"></i>Linkedin</a>
        </nav>
    )
}

function MainContent() {
    return (
        <main>
            <h3>About</h3>
            <p>I'm a frontend and PLC software developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practise and I'm always looking for new things to learn.</p>
            <h3>Interests</h3>
            <p>Food. Rock music. Economy & Pihlosophy. Car & moto. Bitcoin ₿.</p>
        </main>
    )
}

function Footer() {
    return (
        <footer>
            <a target="_blank"><i className="fab fa-facebook-square fa-2x"></i></a>
            <a target="_blank"><i className="fab fa-twitter fa-2x"></i></a>
            <a href="https://www.instagram.com/gavaolo/?hl=it" target="_blank"><i className="fab fa-instagram fa-2x"></i></a>      
            <a id="profile-link" href="https://github.com/gavaolo" target="_blank"><i className="fab fa-github fa-2x"></i></a>
        </footer>
    )
}

function App() {
    return (
        <div className="container">
            <Header />
            <Nav />
            <MainContent />
            <Footer />
        </div>
    )
}
ReactDOM.render(<App />, document.querySelector("#root"))
