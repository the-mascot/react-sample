import data from "../data.json";
import {Link} from "react-router-dom";

export default function StudentList() {
    const students = data.data.students;
    console.log(students);
    return (
      <div>
          <h1>학생명단</h1>
          <div>
              {students.map((student) => (
                  <h4 key={ student.id }>
                      <Link to={`/student/detail/${student.id}`}>{ student.name }</Link>
                  </h4>
              ))}
          </div>
      </div>
    );
}
