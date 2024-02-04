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
                <li>
                    <Link to="/state/test">useState Test</Link>
                </li>
                <li>
                    <Link to="/redux/test">Redux Test</Link>
                </li>
                <li>
                    <Link to="/redux/toolkit/test">Redux Toolkit Test</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
