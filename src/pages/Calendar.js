// File: src/pages/Calendar.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';

function BirthdayCalendar() {
  const [date, setDate] = useState(new Date());

  // Sample birthdays (format: YYYY-MM-DD)
  const birthdays = {
    '2025-06-14': '🎉 evarido Birthday 🎂',
    '2025-08-29': '🎉 Babu Reddy K L Birthday 🎂',
    '2025-07-05': '🎉 Priyanka A S Birthday 🎂',
    '2025-09-03': '🎉 evarido Birthday 🎂',
    '2025-09-04': '🎉 Teachers Day + Varun Birthday 🎂',
  };

  // Highlight birthday tiles
  const tileContent = ({ date, view }) => {
    const key = date.toISOString().split('T')[0];
    return view === 'month' && birthdays[key] ? (
      <div className="birthday-marker">🎂</div>
    ) : null;
  };

  return (
    <div className="page calendar">
      <h2>🎂 Friends' Birthday Calendar</h2>
      <Calendar
        onChange={setDate}
        value={date}
        tileContent={tileContent}
      />
      <div className="birthday-info">
        <h3>🎈 Selected Date: {date.toDateString()}</h3>
        <p>
          {birthdays[date.toISOString().split('T')[0]] || 'No birthdays on this day.'}
        </p>
      </div>
    </div>
  );
}

export default BirthdayCalendar;
