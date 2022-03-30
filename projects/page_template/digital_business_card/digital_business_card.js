// https://www.figma.com/file/4ctPLUvIn5b5Ep6YPOZWWd/Digital-Business-Card?node-id=0%3A1

// use separate components for:
//     - info (photo, name, buttons)
//     - about
//     - interests
//     - footer (social icons)

function Header() {
    return (
        <header>
            <img src="./img/profile_photo.jpg" />
            <h1 className="card-name">Paolo Gavasso</h1>
            <p className="job-description">Frontend Developer</p>
            <small className="web-site"><a href="https://rokuogun.github.io/" target="_blank">ruokuogun.github.io</a></small>
        </header>
    )
}

function Nav() {
    return (
        <nav>
            <button><i className="fas fa-envelope"></i>Email</button>
            <button className="linkedin-btn"><i className="fab fa-linkedin"></i>Linkedin</button>
        </nav>
    )
}

function MainContent() {
    return (
        <main>
            <h3>About</h3>
            <p>I'm a frontend and PLC software developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practise, and am always looking for new things to learn.</p>
            <h3>Interests</h3>
            <p>Food expert. Rock music lover. Reader. Car & moto passion. Bitcoin is the way i think.</p>
        </main>
    )
}

function Footer() {
    return (
        <footer>
            <a href="https://www.facebook.com/paolo.gavasso" target="_blank"><i className="fab fa-facebook-square fa-2x"></i></a>
            <a href="https://twitter.com/GavassoPaolo?t=8OcKEZgmCzjcR8qPsGja0A&s=09" target="_blank"><i className="fab fa-twitter fa-2x"></i></a>
            <a href="https://www.instagram.com/gavaolo/?hl=it" target="_blank"><i className="fab fa-instagram fa-2x"></i></a>      
            <a id="profile-link" href="https://github.com/RokuoGun" target="_blank"><i className="fab fa-github fa-2x"></i></a>
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