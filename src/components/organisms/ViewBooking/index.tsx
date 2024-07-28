import dayjs from "dayjs";
import { Modal } from "antd";
import { Order } from "@/schemas";

interface Props {
  open: boolean;
  booking: Order;
  handleClose: () => void;
}

export const ViewBooking = ({ open, booking, handleClose }: Props) => {
  return (
    <Modal
      open={open}
      footer={null}
      onCancel={handleClose}
      title={`Booking - ${booking.id}`}
    >
      <div className="font-semibold mb-2">Customer</div>
      <div className="grid grid-cols-2 mb-3 gap-1">
        <div className="font-medium">Name:</div>
        <div>{`${booking.user.firstName} ${booking.user.lastName}`}</div>
        <div className="font-medium">Email:</div>
        <div>{booking.user.email}</div>
        <div className="font-medium">Phone:</div>
        <div>{booking.user.phone}</div>
      </div>
      <div className="font-semibold mb-2">Booking Details</div>
      <div className="grid grid-cols-2 mb-3 gap-1">
        <div className="font-medium">Date/Time:</div>
        <div>{dayjs(booking.date).format("YYYY-MM-DD hh:mm A")}</div>
        <div className="font-medium">Address:</div>
        <div>{booking.address}</div>
        <div className="font-medium">City:</div>
        <div>{booking.city}</div>
        <div className="font-medium">State:</div>
        <div>{booking.state}</div>
        <div className="font-medium">Zip Code:</div>
        <div>{booking.zipCode}</div>
        <div className="font-medium">Category:</div>
        <div>{booking.serviceCategory.name}</div>
        <div className="font-medium">Service Type:</div>
        <div>{booking.serviceType.name}</div>
        <div className="font-medium">No. of Bedrooms:</div>
        <div>{booking.noOfBedrooms}</div>
        <div className="font-medium">No. of Bathrooms:</div>
        <div>{booking.noOfBathrooms}</div>
        <div className="font-medium">No. of Powder Rooms:</div>
        <div>{booking.noOfPowderRooms}</div>
        <div className="font-medium">No. of Storeys:</div>
        <div>{booking.noOfStoreys ? booking.noOfStoreys : "N/A"}</div>
        <div className="font-medium">Tip:</div>
        <div>AUD {booking.tip}</div>
        <div className="font-medium">Parking Availability:</div>
        <div>{booking.isParkingAvailable ? "Available" : "Not Available"}</div>
        <div className="font-medium">Get Inside Your Home:</div>
        <div>{booking.getInsideHome}</div>
        <div className="font-medium">Date/Time Flexibility:</div>
        <div>{booking.flexibility}</div>
        <div className="font-medium">Special Notes:</div>
        <div>{booking.notes}</div>
        <div className="font-medium">Heard From:</div>
        <div>{booking.heardFrom}</div>
      </div>
      <div className="mb-3">
        <div className="font-semibold mb-2">Extra Services</div>
        <div className="grid grid-cols-2 gap-1">
          <div className="font-medium">Service</div>
          <div className="font-medium">Quantity</div>
          {booking.extraServices.map((service) => (
            <>
              <div>{service.title}</div>
              <div>{service.quantity ?? "N/A"}</div>
            </>
          ))}
        </div>
      </div>
    </Modal>
  );
};
