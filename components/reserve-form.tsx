"use client";
import { useState } from "react";
import { addDays } from "date-fns";
import DatePicker from "react-datepicker";

const ReserveForm = () => {
  const StartDate = new Date();
  const EndDate = addDays(StartDate, 1)

  const [startDate, setStartDate] = useState(StartDate);
  const [endDate, setEndDate] = useState(EndDate);

  const handleDateChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  }
  
  return (
    <div>
      <form action="">
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Arrival - Departure
          </label>
          <DatePicker
            selected={startDate}
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            selectsRange={true}
            onChange={handleDateChange}
            dateFormat={"dd-MM-YYYY"}
            wrapperClassName="w-full"
            className="py-2 px-4 rounded-lg border border-gray-300 w-full"
          />
          <div aria-live="polite" aria-atomic="true">
            <p className="text-sm text-red-500 mt-2">message</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReserveForm;
