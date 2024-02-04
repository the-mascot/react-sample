import {Link, useLocation} from "react-router-dom";

interface propTypes {
    name: string,
    price: string
}

export default function RouterPropTestResult(props: any) {
    // 기존은 props 전달 하였으나 현재는 useLocation 사용
    console.log(props);
    console.log(useLocation());
    const menu: propTypes = useLocation().state.menu;
    console.log(menu);
    const price: string = menu.price;

    return (
        <>
            <h1>Router prop TEST result</h1>
            <Link to="/prop/test">돌아가기</Link>
        </>
    );
}
