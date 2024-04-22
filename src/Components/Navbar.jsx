import { FaGithub } from "react-icons/fa"

function Navbar() {
    return (
        <div className="container">
        <div className="navbar">
            <h1>
            <span className="Welcome2"> Ayomikun98 </span> GitHub Portfolio</h1>
            <img className="img-png" src="/src/components/backgroundimg.png" alt=""/>
        </div>
        <button className="new-repo">My Repo</button>       
    </div>
    )

}

export default Navbar