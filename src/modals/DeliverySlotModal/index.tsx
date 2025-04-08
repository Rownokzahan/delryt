"use client"

import { useState } from "react";
import useDeliveryTime from "@/hooks/useDeliveryTime";
import DateSelection from "./DateSelection";
import TimeSlotSelection from "./TimeSlotSelection";
import { DayInfo } from "./types";
import getDeliveryTime from "./utils/getDeliveryTime";
import useModalById from "@/hooks/useModalById";
import Modal from "../Modal";
import { MdDeliveryDining } from "react-icons/md";

const DeliverySlotModal = () => {
  const [selectedDate, setSelectedDate] = useState<DayInfo | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");

  const { updateDeliveryTime } = useDeliveryTime();
  const { closeModal } = useModalById("deliverySlotModal");

  const handleChangeDateTime = () => {
    const deliveryTime = getDeliveryTime(selectedDate, selectedTime);
    updateDeliveryTime(deliveryTime);
    closeModal();
  };

  return (
    <Modal
      modalId={"deliverySlotModal"}
      fullHeightOnSmall={false}
      containerClasses="rounded-t-xl sm:rounded-t-none"
    >
      <div
        style={{
          scrollbarColor: "#7a737366 transparent",
        }}
      >
        <div className="sm:hidden p-1 rounded-t-full absolute top-4 left-1/2 -translate-x-1/2 bg-[#f4cece]">
          <div className="size-8 bg-linear-to-b rounded-full from-primary/60 to-primary/80 text-uiWhite flex items-center justify-center">
            <MdDeliveryDining className="text-xl" />
          </div>
        </div>

        <div className="p-4 pb-2 sm:pb-4 rounded-t-xl sm:rounded-t-none bg-primary/20 sm:bg-uiWhite">
          <div className="my-2 text-center">
            <h3 className="text-lg font-medium">Change Delivery Date & Time</h3>
            <p className="sm:mt-1 text-sm text-uiBlack-light">
              Order in advance and beat the rush!
            </p>
          </div>

          {/* Date Selection */}
          <DateSelection
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>

        <div className="px-4 mt-4 sm:mt-0">
          {/* Time Slot Selection */}
          {selectedDate ? (
            <TimeSlotSelection
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
            />
          ) : (
            <p className="text-center text-uiBlack/70">No slot available</p>
          )}
        </div>

        <div className="p-4 border-t">
          <button
            onClick={handleChangeDateTime}
            className="w-full py-3 rounded-md font-bold bg-primary text-center text-uiWhite"
          >
            Change Date & Time
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeliverySlotModal;
