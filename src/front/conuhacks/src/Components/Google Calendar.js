import React from "react";
import Box from '@mui/material/Box';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';


const events = [
    {
        id: 1,
        title: 'event 1',
        start: '2023-01-23T10:00:00',
        end: '2023-01-23T12:00:00',
    },
];




class GoogleCalendar extends React.Component {
    render() {
        return (
            <Box sx={{
                borderRadius: 3,
                bgcolor: "transparent",
                height: '100%',
                pl: 3,
                pr: 3,
            }}
                style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
                <Box sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "white",
                    pt: 3,
                    pb: 1,
                }}>Google Calendar</Box>
                <Box sx={{
                    textAlign: "center",
                    color: 'white',
                    fontSize: 'small',
                }}><FullCalendar
                        plugins={[dayGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        headerToolbar={{
                            start: 'title',
                            center: '',
                            end: 'prev, next',
                        }}
                        events={events}
                        eventColor="red"
                        nowIndicator
                        dateClick={(e) => console.log(e.dateStr)}
                        eventClick={(e) => console.log(e.event.id)}
                    /></Box>
            </Box>
        )
    }
}

export default GoogleCalendar;