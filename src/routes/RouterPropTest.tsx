import {Link} from "react-router-dom";
interface propTypes {
        name: string,
        price: string
}

export default function RouterPropTest() {
    const menu:propTypes = {
        name: "간짜장",
        price: "8000원"
    }
    return (
        <>
            <h1>Router prop TEST</h1>
            <Link to="/prop/test/result" state={{ menu }}>데이터 날리기</Link>
            {/*이전버젼*/}
{/*            <Link to={{
                pathname: "/prop/test/result"
                state: { menu }
            }}>데이터 날리기</Link>*/}
        </>
    );
}
