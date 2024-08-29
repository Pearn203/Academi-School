import React, { createContext, useState, useEffect } from 'react';
export const StudentContext = createContext({
  students: null,
  setStudents: (students) => {},
});
export const StudentProvider = ({children}) =>{
    const [students, setStudents] = useState([
       {
         id: '#123456781',
         name: "Samanta William",
         date: "March 25, 2021",
         parent: "Mana William",
          city: "Jakarta",
        grade: "VII A",
         phone: "+0941 294 819",
       email: "william@gmail.com",
       Unpaid: "$20000"
       },
       {
         id: '#123456782',
         name: "Tony Soap",
         date: "April 12, 2021",
         parent: "Jame Soap",
         city: "Surabaya",
         grade: "VII B",
         phone: "+0932 194 712",
         email: "tony.soap@gmail.com",
        Unpaid: "$50451"
       },
       {
         id: '#123456783',
         name: "Karen Hope",
         date: "May 03, 2021",
         parent: "Justin Hope",
         city: "Bandung",
         grade: "VII C",
         phone: "+0923 584 123",
         email: "karen.hope@gmail.com",
          Unpaid: "$60000"
       },
       {
         id: '#123456784',
         name: "Jordan Nico",
         date: "June 15, 2021",
         parent: "Amanda Nico",
         city: "Jakarta",
         grade: "VII B",
         phone: "+0913 234 985",
       email: "jordan.nico@gmail.com",
        Unpaid: "$35000"
       },
     {
         id: '#123456785',
         name: "Emily Clark",
         date: "July 07, 2021",
         parent: "Sarah Clark",
         city: "Medan",
         grade: "VII A",
         phone: "+0951 384 124",
         email: "emily.clark@gmail.com",
          Unpaid: "$10000"
       },
       {
         id: '#123456786',
         name: "Michael Brown",
         date: "August 19, 2021",
         parent: "David Brown",
         city: "Jakarta",
         grade: "VII C",
         phone: "+0934 123 718",
         email: "michael.brown@gmail.com",
          Unpaid: "$23000"
       },
       {
         id: '#123456787',
         name: "Sophia Turner",
         date: "September 10, 2021",
         parent: "Linda Turner",
         city: "Surabaya",
         grade: "VII B",
         phone: "+0927 491 385",
         email: "sophia.turner@gmail.com",
          Unpaid: "$56000"
       },
       {
         id: '#123456788',
         name: "Liam Johnson",
         date: "October 25, 2021",
         parent: "Patricia Johnson",
         city: "Bandung",
         grade: "VII A",
         phone: "+0918 723 914",
         email: "liam.johnson@gmail.com",
          Unpaid: "$70000"
       },
       {
         id: '#123456789',
         name: "Olivia Smith",
         date: "November 13, 2021",
         parent: "Elizabeth Smith",
         city: "Jakarta",
         grade: "VII C",
         phone: "+0945 182 635",
         email: "olivia.smith@gmail.com", 
          Unpaid: "$30000"
       },
       {
         id: '#123456790',
         name: "James Wilson",
        date: "December 01, 2021",
         parent: "Robert Wilson",
         city: "Medan",
         grade: "VII B",
         phone: "+0937 129 482",
         email: "james.wilson@gmail.com",
          Unpaid: "$12000"
       },
       {
         id: '#123456791',
         name: "Mia Anderson",
         date: "January 22, 2022",
         parent: "Jennifer Anderson",
         city: "Jakarta",
         grade: "VII A",
         phone: "+0919 823 192",
         email: "mia.anderson@gmail.com",
          Unpaid: "$10000"
       },
       {
         id: '#123456792',
         name: "Ethan Taylor",
         date: "February 17, 2022",
         parent: "Charles Taylor",
         city: "Surabaya",
         grade: "VII C",
         phone: "+0952 432 791",
         email: "ethan.taylor@gmail.com",
          Unpaid: "$60000"
       },
       {
         id: '#123456793',
         name: "Ava Martinez",
         date: "March 03, 2022",
         parent: "Maria Martinez",
         city: "Bandung",
         grade: "VII B",
         phone: "+0948 129 623",
         email: "ava.martinez@gmail.com",
          Unpaid: "$80000"
       },
       {
         id: '#123456794',
         name: "Lucas Davis",
         date: "April 18, 2022",
         parent: "Rebecca Davis",
         city: "Jakarta",
         grade: "VII A",
         phone: "+0932 184 623",
         email: "lucas.davis@gmail.com",
          Unpaid: "$20000"
       },
       {
         id: '#123456795',
         name: "Isabella Garcia",
         date: "May 29, 2022",
         parent: "Sophia Garcia",
        city: "Medan",
         grade: "VII C",
         phone: "+0915 292 381",
        email: "isabella.garcia@gmail.com",
         Unpaid: "$10000"
     }
    ])
    useEffect(() => {
      const storedStudents = window.localStorage.getItem('students');
      if (storedStudents && storedStudents != "undefined") {
        setStudents(JSON.parse(storedStudents));
      }
    }, []);
  
    useEffect(() => {
      console.log('Saving to localStorage', students);
      // window.localStorage.setItem('students', JSON.stringify(students));
    }, [students]);
    return (
        <StudentContext.Provider value={{ students, setStudents }}>
          {children}
        </StudentContext.Provider>
      );
}