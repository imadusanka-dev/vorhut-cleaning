"use client";

import { useRef } from "react";
import { BookingForm, BookingSummary } from "@/components";

const AddBooking = () => {
  const submitButtonRef = useRef(null);

  return (
    <div className="flex flex-wrap">
      <div className="lg:w-3/5 md:w-full p-5">
        <BookingForm submitButtonRef={submitButtonRef} />
      </div>
      <div className="lg:w-2/5 md:w-full  p-5">
        <BookingSummary submitButtonRef={submitButtonRef} />
      </div>
    </div>
  );
};

export default AddBooking;
