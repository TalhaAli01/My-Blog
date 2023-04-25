export default function Header(){
    return(
        <header className="flex">
            <div className="logo-container flex">
            <img 
                src="logo192.png"
                alt="Logo"
                className="logo-img"
                />
            <h1 className="logo-text">My First Blog</h1>
            </div>
            <nav className="navbar flex">
                <ul className="navbar-ul flex">
                    <li><a href="_blank">Portfolio</a></li>
                    <li><a href="_blank">Socials</a></li>
                    <li className="flex"><button className="navbar-ul-li-btn">Sign In</button></li>
                </ul>
            </nav>
        </header>
    )
}