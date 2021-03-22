import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

function sendDate(date, props, setSelectedDate) {
    setSelectedDate(date)
    props.dateCallback(date, props.legend)
}

function DateInput(props) {

    const [selectedDate, setSelectedDate] = useState(null)

    return (
        <DatePicker
            selected={selectedDate}
            onChange={date => sendDate(date, props, setSelectedDate)}
            dateFormat='dd/MM/yyyy'
            maxDate={new Date()}
            isClearable
            showYearDropdown
            />
    );
}

export default DateInput;