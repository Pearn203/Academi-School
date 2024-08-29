import React, { useContext } from "react";
import { Box, Typography, Avatar, Button } from "@mui/material";
import { TeacherContext } from "../TeacherContext";
import "../css/TeacherDetail.css";

function TeacherDetail({ teacher, closeDetail }) {
  const { teachers, setTeachers } = useContext(TeacherContext);

  if (!teacher) return null;

  const handleDeleteTeacher = () => {
    // Xóa giáo viên khỏi danh sách
    const updatedTeachers = teachers.filter((t) => t.id !== teacher.id);
    setTeachers(updatedTeachers);

    // Lưu lại danh sách giáo viên mới vào localStorage
    localStorage.setItem("teachers", JSON.stringify(updatedTeachers));

    // Đóng chi tiết giáo viên
    closeDetail();
  };

  return (
    <div className="detail-container">
      <Box
        className="teacher-detail-container"
        style={{ padding: " 80px 20px 20px 50px" }}
      >
        {/* Nút Close */}
        <Button onClick={closeDetail} style={{ marginBottom: "20px" }}>
          Back to Teacher List
        </Button>

        {/* Nút Xóa */}
        <Button
          onClick={handleDeleteTeacher}
          style={{ marginBottom: "20px", marginLeft: "20px" }}
          color="error"
        >
          Delete Teacher
        </Button>

        {/* Header Section */}
        <Box className="header-section">
          <Avatar
            className="teacher-avatar"
            style={{ width: "120px", height: "120px" }}
          />
          <Box className="header-info">
            <Typography
              variant="h4"
              className="teacher-name"
              style={{ fontSize: "32px", fontWeight: "700" }}
            >
              {teacher.name}
            </Typography>
            <Typography className="teacher-role">
              {teacher.subject} Teacher
            </Typography>
            <Box className="teacher-contact-info">
              <Typography className="contact-item">
                <i className="fas fa-map-marker-alt"></i> {teacher.city}
              </Typography>
              <Typography className="contact-item">
                <i className="fas fa-phone"></i> {teacher.phone}
              </Typography>
              <Typography className="contact-item">
                <i className="fas fa-envelope"></i> {teacher.email}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* About Section */}
        <Box className="about-section">
          <Typography variant="h6" className="section-title">
            About:
          </Typography>
          <Typography className="section-content">{teacher.about}</Typography>
        </Box>

        {/* Education Section */}
        <Box className="education-section">
          <Typography variant="h6" className="section-title">
            Education:
          </Typography>
          <ul className="education-list">
            <li className="education-item">
              <Typography className="education-degree">
                {teacher.education}
              </Typography>
              <Typography className="education-duration">
                {/* Add any specific duration if applicable */}
              </Typography>
            </li>
          </ul>
        </Box>

        {/* Expertise Section */}
        <Box className="expertise-section">
          <Typography variant="h6" className="section-title">
            Expertise:
          </Typography>
          <Typography className="section-content">{teacher.expertise}</Typography>
        </Box>
      </Box>
    </div>
  );
}

export default TeacherDetail;
