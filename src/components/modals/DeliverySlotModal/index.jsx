import clsx from "clsx";
import Modal from "../Modal";
import { HiOutlineBolt } from "react-icons/hi2";
import { IoMdTime } from "react-icons/io";
import { getAvailableTimeSlots, getNext15Days } from "./utils/dateTimeHelpers";
import timeSlots from "./utils/timeSlots";
import { useState } from "react";

const DeliverySlotModal = ({ isModalOpen, closeModal, setDeliveryTime }) => {
  const daysArray = getNext15Days();
  const [selectedSlot, setSelectedSlot] = useState({
    ...getNext15Days()[0],
    time: "Now",
  });

  const handleDateSlotChange = (day) => {
    const firstSlot = getAvailableTimeSlots(day.fullDate, timeSlots)[0];
    setSelectedSlot({
      ...day,
      time: firstSlot,
    });
  };

  const handleTimeSlotChange = (time) => {
    setSelectedSlot((prev) => {
      return {
        ...prev,
        time: time,
      };
    });
  };

  const handleChangeDateTime = () => {
    if (selectedSlot?.time === "Now") {
      setDeliveryTime("Now");
      closeModal();
      return;
    }

    const currentDate = new Date();
    if (selectedSlot?.fullDate.toDateString() === currentDate.toDateString()) {
      setDeliveryTime(`By ${selectedSlot?.time}`);
      closeModal();
      return;
    }

    const date = selectedSlot.fullDate.toLocaleDateString("en-us", {
      day: "numeric",
      month: "short",
    });
    setDeliveryTime(`By ${date}, ${selectedSlot?.time}`);
    closeModal();
  };

  const availableTimeSlots = getAvailableTimeSlots(
    selectedSlot?.fullDate,
    timeSlots
  );

  return (
    <Modal
      isModalOpen={isModalOpen}
      closeModal={closeModal}
      disableScroll={true}
      closeOnOutsideClick={true}
      headerClasses={"px-4 pt-4"}
      header={
        <>
          <h3 className="font-bold text-xl">Select Delivery Date & Time</h3>
        </>
      }
    >
      <div
        className="px-4"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "rgb(73, 69, 190) transparent",
        }}
      >
        {/* Date Selection */}
        <div className="flex gap-3 my-4 pb-1 overflow-x-auto">
          {daysArray?.map((day) => (
            <div
              key={day?.date}
              onClick={() => handleDateSlotChange(day)}
              className={clsx(
                "px-3 py-3 border rounded-md w-28 min-w-max cursor-pointer",
                selectedSlot.date === day?.date
                  ? "border-primary"
                  : "border-ui-gray-light",
                "flex-shrink-0 flex flex-col items-center justify-center text-center"
              )}
            >
              <h5
                className={clsx(
                  "mb-1 text-sm",
                  selectedSlot.date === day?.date
                    ? "text-black font-bold"
                    : "text-ui-gray font-semibold"
                )}
              >
                {day?.weekday}
              </h5>
              <p className="text-ui-gray text-xs">{day?.date}</p>
            </div>
          ))}
        </div>

        <hr />

        <h4 className="mt-4 font-bold mb-4">Select a Slot Time</h4>

        {/* Time Slot Selection */}
        <div className="max-h-[40vh] pe-2 grid gap-3 overflow-y-auto">
          {availableTimeSlots?.length === 0 ? (
            <p className="px-3 py-2 border rounded-md w-full text-ui-gray flex items-center gap-2">
              No slot available
            </p>
          ) : (
            availableTimeSlots?.map((time) => (
              <button
                key={time}
                onClick={() => handleTimeSlotChange(time)}
                className={clsx(
                  "px-3 py-2 border rounded-md w-full",
                  selectedSlot?.time === time
                    ? "border-primary"
                    : "text-ui-gray",
                  "flex items-center gap-2"
                )}
              >
                <i
                  className={clsx(
                    "text-xl flex-shrink-0",
                    selectedSlot?.time === time
                      ? "text-primary"
                      : "text-ui-gray"
                  )}
                >
                  {time === "Now" ? <HiOutlineBolt /> : <IoMdTime />}
                </i>

                <span
                  className={clsx(
                    selectedSlot?.time === time
                      ? "text-black font-semibold"
                      : "text-ui-gray"
                  )}
                >
                  {time === "Now" ? "Now in 40 to 60 mins" : time}
                </span>
              </button>
            ))
          )}
        </div>

        <button
          onClick={handleChangeDateTime}
          className="bg-primary mt-6 mb-3 py-3 rounded-md w-full font-bold text-center text-white"
        >
          Change Date & Time
        </button>
      </div>
    </Modal>
  );
};

export default DeliverySlotModal;
