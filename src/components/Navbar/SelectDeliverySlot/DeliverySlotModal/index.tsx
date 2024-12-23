import { FC, useState } from "react";
import DateSelection from "./DateSelection";
import TimeSlotSelection from "./TimeSlotSelection";
import { DayInfo } from "./types";
import getDeliveryTime from "./utils/getDeliveryTime";
import Modal from "@/components/Modal";

interface DeliverySlotModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  handleSetDeliveryTime: (time: string) => void;
}

const DeliverySlotModal: FC<DeliverySlotModalProps> = ({
  isModalOpen,
  closeModal,
  handleSetDeliveryTime,
}) => {
  const [selectedDate, setSelectedDate] = useState<DayInfo | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");

  const handleChangeDateTime = () => {
    const deliveryTime = getDeliveryTime(selectedDate, selectedTime);
    handleSetDeliveryTime(deliveryTime);
    closeModal();
  };

  return (
    <Modal
      isModalOpen={isModalOpen}
      closeModal={closeModal}
      disableScroll={true}
      closeOnOutsideClick={true}
      headerClasses={"px-4 pt-6 sm:block"}
      header={
        <div className="mb-2 sm:text-center text-">
          <h3 className="font-bold sm:text-xl">Select Delivery Date & Time</h3>
          <p className="mt-1 text-xs sm:text-sm">
            Order in advance and beat the rush!
          </p>
        </div>
      }
    >
      <div
        className="px-4"
        style={{
          scrollbarColor: "#7a737366 transparent",
        }}
      >
        {/* Date Selection */}
        <DateSelection
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />

        {/* Time Slot Selection */}
        {selectedDate ? (
          <TimeSlotSelection
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
          />
        ) : (
          <p className="px-3 pt-4 text-ui-gray text-center">
            No slot available
          </p>
        )}

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
