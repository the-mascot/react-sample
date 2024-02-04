import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul className="navList">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/prop/test">router prop test</Link>
                </li>
                <li>
                    <Link to="/student/list">Student List</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
