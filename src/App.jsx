import { Route, Routes } from "react-router-dom";

import Website from "./Components/Website.";
import HomePage from "./Components/HomePage/HomePage";
import CareersPage from "./Components/CareersPage/Careers";
import AboutUs from "./Components/AboutUsPage/AboutUs";
import ContactUs from "./Components/ContactUsPage/ContactUs";
import Courses from "./Components/CoursesPage/Courses";
import SingleCourse from "./Components/CoursesPage/SingleCourse";
import Artifical from "./Components/ArtificalLeftPage/ArtificalLeft";
import Enhancing from "./Components/EnhancingPage/Enhancing";
import Testing from "./Components/TestingPage/Testing";
import Login from "./Components/Authantication/Login";
import Register from "./Components/Authantication/Register";
import Dashboard from "./Dashboard/Dashboard";
import RequireLogin from "./Components/Authantication/RequireLogin";
import Requireauth from "./Dashboard/Requireauth";
import Users from "./Dashboard/Users/Users";
import Updateuser from "./Dashboard/Users/UpdateUser";
import Adduser from "./Dashboard/Users/AddUser";
import Software from "./Components/Software/Software";
import Applynow from "./Components/CareersPage/Applnow";
import Consultation from "./Components/Consultation/consultation";
import Jobs from "./Dashboard/Jobs/jobs";
import Updatejobs from "./Dashboard/Jobs/Updatejobs";
import Addjob from "./Dashboard/Jobs/Addjobs";

function App() {
  return (
    <>
      <Routes>
        {/* Puplic routes */}
        <Route element={<Website />}>
          <Route path="/" element={<HomePage/>} />
          <Route path="/applynow" element={<Applynow />} />
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/courses/course" element={<SingleCourse/>}/>
          <Route path="/projects" element={<CareersPage/>}/>
          <Route path="/applynow" element={<Applynow />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/artificalleft" element={<Artifical />} />
          <Route path="/enhancing" element={<Enhancing />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="/software" element={<Software />} />
          <Route path="/consultation" element={<Consultation />} />

        </Route>

        <Route element={<RequireLogin/>}>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
        </Route>

        <Route element={<Requireauth Allowedrole={['2001']}/>}>
          <Route path='/dashboard' element={<Dashboard/>}>
              <Route path='users' element={<Users/>}/>
              <Route path='users/:ID' element={<Updateuser/>}/>
              <Route path='user/add' element={<Adduser/>}/>

              <Route path='jobs' element={<Jobs/>}/>
              <Route path='jobs/:ID' element={<Updatejobs/>}/>
              <Route path='jobs/add' element={<Addjob/>}/>


          </Route>



          </Route>
      </Routes>
    </>
  );
}

export default App;