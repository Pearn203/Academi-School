import TopBar from "./scenes/global/TopBar";
import Home from "./page/Home"
import FoodDetail from "./component/FoodDetail";
import SideBar from "./scenes/global/SideBar";
import Table1 from "./page/Table_Student"
import Food from "./page/Food";
import AddStudent from "./component/AddStudent"
import { Route, Routes } from "react-router-dom";
import { StudentProvider } from "./StudentContext";
import Calendar from "./component/Calendar";
import StudentDetail from "./component/StudentDetail";
import Finance from "./page/Finance";
import Teacher from "./page/Teacher";
import { TeacherProvider } from "./TeacherContext";
import AddNewTeacher from "./components/AddNewTeacher";
import UserDashboard from "./page/UserDashboard";
import Register from "./Register";
import Chat from "./page/Chat"
import Activities from "./component/Activities";
function App() {
  return (
   
    <div className="app">
     
        <TeacherProvider>
        
      <StudentProvider>
      <Routes>
        <Route path="/Chat" element={<Chat/>} ></Route>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/User" element={<UserDashboard/>}/>
        <Route path="/AddNewTeacher" element={<AddNewTeacher/>} />
        <Route path="/Teacher" element={<Teacher/>}></Route>
				<Route path="/" element={<Home />} />
        <Route path="/Student" element={<Table1 />} />  
        <Route path="/Food" element={<Food />} />
        <Route path="/Finance" element={<Finance />} />
        <Route path="/AddStudent" element={<AddStudent />} />
        <Route path = "/Event"  element={<Calendar/>}></Route>
        <Route path="/Food/:foodId" element={<FoodDetail />} />
        <Route path="/Student/:studentId" element={<StudentDetail />} />
        <Route path = "/Activity" element={<Activities></Activities>} ></Route>
			</Routes>
      </StudentProvider>
        </TeacherProvider>

    </div>
  );
}

export default App;
