"use client";

import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "./ReservationContext";

//! Prevent from selecting booked dates-1
function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({ settings, cabin, bookedDates }) {
  const { range, setRange, resetRange } = useReservation();
  //! Prevent from selecting booked dates-2
  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;
  const { regularPrice, discount } = cabin;
  const numNights = differenceInDays(displayRange.to, displayRange.from);
  const cabinPrice = numNights * (regularPrice - discount);

  // SETTINGS
  const minBookingLength = 1;
  const maxBookingLength = 23;

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        className="pt-12 place-self-center rdp w-[80%] lg:w-auto"
        mode="range"
        min={minBookingLength + 1}
        max={maxBookingLength}
        // onSelect={(range) => setRange(range)}
        onSelect={setRange}
        selected={displayRange}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={2}
        //! Prevent from selecting booked dates-3
        disabled={(curDate) =>
          isPast(curDate) ||
          bookedDates.some((date) => isSameDay(date, curDate))
        }
      />

      <div className="flex w-full flex-col lg-flex-row items-center gap-2 justify-between px-8 py-4 bg-accent-500 text-primary-800 h-[50%] lg:h-[72px]">
        <div className="flex w-full items-center lg:items-baseline gap-4 lg:gap-6 flex-col lg:flex-row">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl">${regularPrice - discount}</span>
                <span className="line-through font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl">${regularPrice}</span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-lg lg:text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-base lg:text-lg font-bold uppercase">
                  Total
                </span>{" "}
                <span className="text-lg lg:text-2xl font-semibold">
                  ${cabinPrice}
                </span>
              </p>
            </>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className="border border-primary-800 py-2 px-4 text-sm font-semibold"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
