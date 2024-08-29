import React, { useContext, useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { TeacherContext } from "../TeacherContext.js";
import "../css/Teacher.css";
import SideBar from "../scenes/global/SideBar.jsx";
import TeacherDetail from "../components/TeacherDetail.jsx";
import { useNavigate } from "react-router-dom"; 
import Topbar from "../scenes/global/TopBar.jsx";

const Teacher = () => {
  const { teachers, setTeachers } = useContext(TeacherContext);
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [currentTeacher, setCurrentTeacher] = useState(null);
  const navigate = useNavigate();

  // Tải dữ liệu giáo viên từ localStorage khi component được render
  useEffect(() => {
    const storedTeachers = localStorage.getItem('teachers');
    if (storedTeachers) {
      setTeachers(JSON.parse(storedTeachers));
    }
  }, [setTeachers]);

  const handleAddNewTeacher = () => {
    navigate("/AddNewTeacher");
  };

  const onClickTeacher = (teacher) => {
    setCurrentTeacher(teacher);
    setIsShowDetail(true); // Hiển thị chi tiết giáo viên
  };

  const closeDetail = () => {
    setIsShowDetail(false); // Đóng chi tiết giáo viên
    setCurrentTeacher(null); // Xóa giáo viên hiện tại khi đóng
  };

  useEffect( () => {
    let teacherLst = window.localStorage.getItem('teachers');
    if (teacherLst && teacherLst != "undefined") {
      setTeachers(JSON.parse(teacherLst));
    }
  }, [])
  
  return (
    <>
      <SideBar></SideBar>
      <div className="teacher" style={{ marginLeft: "280px", padding: "16px" }}>
        <Box className="teacher-header">
          <h1
            style={{
              fontWeight: "700",
              fontSize: "36px",
              lineHeight: "54px",
              color: "#303972",
            }}
          >
            Teachers
          </h1>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddNewTeacher}
            style={{
              marginLeft: "20px",
              backgroundColor: "#4D44B5",
              color: "#fff",
              borderRadius: "40px",
            }}
          >
            Add New Teacher
          </Button>
        </Box>
        <div className="teacher-list">
          {teachers.map((teacher, index) => (
            <div
              onClick={() => onClickTeacher(teacher)}
              key={index}
              className="teacher-card"
            >
              <div className="teacher-avatar1"></div>
              <div className="teacher-info1">
                <h3>{teacher.name}</h3>
                <p>{teacher.subject}</p>
                <p>Email: {teacher.email}</p>
                <p>Phone: {teacher.phone}</p>
              </div>
              <div className="teacher-actions">
                <button className="phone-icon">📞</button>
                <button className="mail-icon">✉️</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isShowDetail && (
        <TeacherDetail teacher={currentTeacher} closeDetail={closeDetail} />
      )}
    </>
  );
};

export default Teacher;
