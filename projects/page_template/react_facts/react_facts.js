const app = (
    <div>
        <img src="./img/react-logo.png" />
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was firtst released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K strars on GitHub</li>
            <li>Is mantained by Facebook</li>
            <li>Powers thousands of enterprise apps, including moible apps</li>
        </ul>
    </div>
)

ReactDOM.render(app, document.querySelector("#root"))