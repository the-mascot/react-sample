import {Link, useLocation, useMatch, useMatches, useParams} from "react-router-dom";

export default function StudentDetail() {
    const  params = useParams();
    console.log(params);
    return (
        <>
            <h4>Student Detail</h4>
            <Link to="/student/list">돌아가기</Link>
        </>
    );
}
