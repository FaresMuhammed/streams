import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

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
import Appliedjobs from "./Dashboard/Jobs/Appliedjobs";
import Cat1 from "./Dashboard/COURSES/AddCategory1";
import Categeory1 from "./Dashboard/COURSES/Categoeries1";
import Updatecat1 from "./Dashboard/COURSES/Updatecat1";
import Addsubcategeories from "./Dashboard/COURSES/Addsubcategeories";
import Subcategeories from "./Dashboard/COURSES/Subcategeories";
import Updatesubcategory from "./Dashboard/COURSES/Updatesubcategory";
import AddCourse from "./Dashboard/COURSES/Addcourse";
import Coursespage from "./Dashboard/COURSES/Courses";
import Updatecourse from "./Dashboard/COURSES/Updatecourse";
import Payment from "./Components/CoursesPage/Payment";
import Profilepage from "./Components/ProfilePage.jsx/Profilepage";
import Updatecurrentuser from "./Components/ProfilePage.jsx/Updatecurrentuser";
import Transactions from "./Dashboard/Transactions/Transactions";
import AddCertificate from "./Dashboard/COURSES/AddCertificate";
import Certificates from "./Dashboard/COURSES/Certificates";
import Wrapper from "./Components/Scroll";
import Strategy from "./Components/Consultation/Startegy";
import Consultation2 from "./Components/Consultation/Consultation2";
import Consultation3 from "./Components/Consultation/consultation3";
import Consultation4 from "./Components/Consultation/consultation4";
import Consultation5 from "./Components/Consultation/consultation5";
import Consultation6 from "./Components/Consultation/consultation6";
import Privacy from "./Components/HomePage/Footer/Privacy";
import Refund from "./Components/HomePage/Footer/Refund";

function App() {
  useEffect(() => {
    window.scrollTo();
  }, []);
  return (
    <>
    <Wrapper>
      <Routes>
        {/* Puplic routes */}
        <Route element={<Website />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<Profilepage />} />
          <Route path="/update/:ID" element={<Updatecurrentuser />} />
          <Route path="/applynow" element={<Applynow />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:ID" element={<SingleCourse />} />
          <Route path="/coursespayment/:ID" element={<Payment />} />
          <Route path="/projects" element={<CareersPage />} />
          <Route path="/applynow/:ID" element={<Applynow />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/artificalleft" element={<Artifical />} />
          <Route path="/enhancing" element={<Enhancing />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="/software" element={<Software />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/consultation/strategy" element={<Strategy />} />
          <Route path="/consultation/2" element={<Consultation2 />} />
          <Route path="/consultation/3" element={<Consultation3 />} />
          <Route path="/consultation/4" element={<Consultation4 />} />
          <Route path="/consultation/5" element={<Consultation5 />} />
          <Route path="/consultation/6" element={<Consultation6 />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/refund-returns-policy" element={<Refund />} />
        </Route>

        <Route element={<RequireLogin />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<Requireauth Allowedrole={["2001", "1996"]} />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route element={<Requireauth Allowedrole={["2001"]} />}>
              <Route path="users" element={<Users />} />
              <Route path="users/:ID" element={<Updateuser />} />
              <Route path="user/add" element={<Adduser />} />
            </Route>

            <Route path="jobs" element={<Jobs />} />
            <Route path="jobs/:ID" element={<Updatejobs />} />
            <Route path="job/add" element={<Addjob />} />
            <Route path="job/jobrequests" element={<Appliedjobs />} />

            <Route path="categories" element={<Categeory1 />} />
            <Route path="addcategory" element={<Cat1 />} />
            <Route path="categories/:ID" element={<Updatecat1 />} />

            <Route path="subcategories" element={<Subcategeories />} />
            <Route path="addsubcategory" element={<Addsubcategeories />} />
            <Route path="subcategories/:ID" element={<Updatesubcategory />} />

            <Route path="courses" element={<Coursespage />} />
            <Route path="addcourse" element={<AddCourse />} />
            <Route path="courses/:ID" element={<Updatecourse />} />

            <Route path="addcertificate" element={<AddCertificate />} />
            <Route path="certificates" element={<Certificates />} />

            <Route path="payment" element={<Transactions />} />

          </Route>
        </Route>
      </Routes>
      </Wrapper>
    </>
  );
}

export default App;