import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <header className="w-full bg-blue-500 shadow shadow-white sticky top-0 h-14 grid items-center">
            <nav className="flex items-center justify-between">
                <Link to="/" className="w-1/3 text-2xl text-black font-bold px-4 cursor-pointer">Navigation</Link>
                <ul className="w-1/3 m-auto flex items-center justify-between text-lg font-bold">
                    <li className="hover:text-white delay-100 ease-in-out cursor-pointer">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="hover:text-white delay-100 ease-in-out cursor-pointer">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="hover:text-white delay-100 ease-in-out cursor-pointer">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
