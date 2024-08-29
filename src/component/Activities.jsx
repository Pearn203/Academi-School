import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SideBar from '../scenes/global/SideBar';

function Activities() {
  const activities = {
    Monday: ["Morning Jogging", "Team Meeting at 10 AM", "Lunch with Sarah", "Client Presentation at 2 PM", "Evening Yoga"],
    Tuesday: ["Code Review", "Project Planning", "One-on-One with Manager", "Gym"],
    Wednesday: ["Team Standup", "Lunch with Clients", "Work on Project A", "Guitar Practice"],
    Thursday: ["Morning Meditation", "Team Retrospective", "Workshop at 3 PM", "Dinner with Family"],
    Friday: ["Finalizing Reports", "Client Call", "Team Happy Hour", "Evening Run"],
    Saturday: ["Grocery Shopping", "House Cleaning", "Family Picnic", "Movie Night"]
  };

  return (
    <>
    <SideBar></SideBar>
    <Box m="30px" marginLeft="280px">
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', color: '#3f51b5' }}>
        Activities
      </Typography>
      {Object.keys(activities).map((day) => (
        <Accordion 
          key={day} 
          sx={{ 
            marginTop: "10px", 
            backgroundColor: '#f5f5f5', 
            borderRadius: '8px', 
            boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
            '&:before': { display: 'none' } 
          }}
        >
          <AccordionSummary 
            expandIcon={<ExpandMoreIcon sx={{ color: '#3f51b5' }} />} 
            sx={{ 
              backgroundColor: '#e8eaf6', 
              borderRadius: '8px 8px 0 0', 
              padding: '0 16px',
              '& .MuiAccordionSummary-content': { margin: '12px 0' } 
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
              {day}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: '16px', backgroundColor: '#fafafa' }}>
            <List>
              {activities[day].map((activity, index) => (
                <ListItem 
                  key={index} 
                  sx={{ 
                    padding: '8px 0', 
                    borderBottom: '1px solid #e0e0e0', 
                    '&:last-child': { borderBottom: 'none' }
                  }}
                >
                  <ListItemText primary={activity} sx={{ color: '#424242' }} />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
    </>
  );
}

export default Activities;
