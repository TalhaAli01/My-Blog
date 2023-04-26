export default function Header(){
    return(
        <header className="flex justify-between border-b-2 border-solid border-gray-500 ">
            <div className="logo-container flex">
            <img 
                src="logo192.png"
                alt="Logo"
                className="w-12 ml-1"
                />
            <h1 className="text-[2rem] self-center">My First Blog</h1>
            </div>
            <nav className="navbar flex list-none items-center">
                <ul className="flex ">
                    <li className="text-[1.5rem] mr-[1rem] ml-[1rem]">
                        <a href="_blank">Portfolio</a></li>
                    <li className="text-[1.5rem] mr-[1rem] ml-[1rem]">
                        <a href="_blank">Socials</a></li>
                    <li className="text-[1.5rem] mr-[1rem] ml-[1rem] flex">
                        <button className="px-3 py-1 text-[1rem] text-center text-purple-600 font-semibold rounded-full border border-blue-500 hover:text-white hover:bg-blue-600 hover:border-transparent hover:font-semibold focus:outline-none focus:ring-2 focus:ring-purple-500 ">Sign In</button></li>
                </ul>
            </nav>
        </header>
    )
}