import {Route, Routes} from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import RouterPropTest from "./routes/RouterPropTest";
import RouterPropTestResult from "./routes/RouterPropTestResult";
import Layout from "./routes/Layout";
import StudentList from "./routes/StudentList";
import StudentDetail from "./routes/StudentDetail";

function App() {
  return (
      <>
          <Layout>
              <Routes>
                  <Route index element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/prop/test" element={<RouterPropTest/> } />
                  <Route path="/prop/test/result" element={<RouterPropTestResult/> } />
                  <Route path="/student/*" />
                  <Route path="/student/list" element={<StudentList />} />
                  {/*Router v6부터 exact 없어지고 Routes 쓰면 정확히 path가 일치 하는 컴포넌트만 랜더링됨.
                  같은 경로 하위에 랜더링 시키고 싶으면 /student/* 사용하면 된다.*/}
                  <Route path="/student/detail/:id" element={<StudentDetail /> } />
              </Routes>
          </Layout>
      </>
  );
}

export default App;
