import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { formatDate } from "@fullcalendar/core";
import SideBar from '../scenes/global/SideBar';

function Calendar() {
  const [currentEvents, setCurrentEvents] = useState([]);
  useEffect(() => {
    const storedEvents = JSON.parse(window.localStorage.getItem("events")) || [];
    setCurrentEvents(storedEvents);
  }, []);

  
  useEffect(() => {
    //  window.localStorage.setItem("events", JSON.stringify(currentEvents));
  }, [currentEvents]);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter an event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      const newEvent = {
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      };
      calendarApi.addEvent(newEvent);
      const updatedEvents = [...currentEvents, newEvent];
      setCurrentEvents(updatedEvents);
      window.localStorage.setItem("events", JSON.stringify(updatedEvents));
    }
  };

  const handleEventClick = (selected) => {
    if (window.confirm(`Are you sure you want to delete '${selected.event.title}'?`)) {
      selected.event.remove();
      const updatedEvents = currentEvents.filter(event => event.id !== selected.event.id);
      setCurrentEvents(updatedEvents);
      window.localStorage.setItem("events", JSON.stringify(updatedEvents));
    }
  };

  return (
    <Box>
      <SideBar />
      <Box display="flex" justifyContent="space-between" marginLeft="340px" marginTop="30px">
        <Box flex="1 1 70%" marginLeft="20px">
          <FullCalendar
            height="90vh"
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
            headerToolbar={{
              left: "prev, next, today",
              center: "title",
              right: "dayGridMonth, timeGridWeek, timeGridDay, listMonth"
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            events={currentEvents}  // Load events from state
          />
        </Box>
        <Box flex="1 1 16%" bgcolor="" marginTop="60px" marginLeft="10px">
          <Box
            bgcolor="white"
            height='80px'
            width="230px"
            borderRadius="20px"
            textAlign="center"
            display="flex"
            justifyContent="center"
            alignItems="center">
<Typography variant="h5">Schedule details</Typography>
          </Box>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: "white",
                  margin: "10px 0",
                  borderRadius: "20px",
                  height: "97px",
                  width: '230px'
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <>
                      <Typography>
                        {formatDate(event.start, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
}

export default Calendar;

