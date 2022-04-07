function Navbar() {
    return(
        <nav>
            <span><span class="fas fa-globe-americas"></span> my travel journal.</span>
        </nav>
    )
}

const data = [
    {
        img: "img/mount_fuji.png",
        country: "JAPAN",
        link: "https://www.google.com/maps/place/Monte+Fuji/@35.3606237,138.7098538,14z/data=!3m1!4b1!4m5!3m4!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!5m1!1e4",
        title: "Mount Fuji",
        date: "12 Jan, 2021 -24 Jan, 2021",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists",
    },
    {
        img: "img/sydney_opera_house.png",
        country: "AUSTRALIA",
        link: "https://www.google.com/maps/place/Teatro+dell'opera+di+Sydney/@-33.8567799,151.213108,17z/data=!3m2!4b1!5s0x6b12ae67d234a27f:0xd6d4e9380ca1e32f!4m5!3m4!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967",
        title: "Mount Fuji",
        date: "12 Jan, 2021 -24 Jan, 2021",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists",
    },
    {
        img: "img/geirangerfjord.png",
        country: "JAPAN",
        link: "https://www.google.com/maps/place/Geirangerfjord/@62.1049385,6.9351327,11z/data=!3m1!4b1!4m5!3m4!1s0x46169d427b268c51:0xb8c99540dcc397fe!8m2!3d62.101506!4d7.0940816",
        title: "Mount Fuji",
        date: "12 Jan, 2021 -24 Jan, 2021",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists",
    }
]

function Travel(props) {
    return (
        <div className="travel">
            <div className="travel-info">
                <img src={props.img} className="travel-image"/>
                <div className="travel-content">
                    <div className="travel-location">
                        <span class="fas fa-map-marker-alt gps-loc"></span> 
                        &nbsp;{props.country}&nbsp;
                        <a target="_blank" href={props.link}>View on Google Maps</a>
                    </div>
                    <h1 className="travel-title">{props.title}</h1>
                    <div className="travel-date">{props.date}</div>
                    <p className="travel-description">{props.description}</p>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}

function App() {
    const travels = data.map(item => {
        return (
            <Travel 
                key = {item.id}
                {...item}
            />
        )
    })

    return (
        <div className="container">
            <Navbar />
            {travels}
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"))