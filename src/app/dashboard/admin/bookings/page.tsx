"use client";

import dayjs from "dayjs";
import { useState } from "react";
import { Order } from "@/schemas";
import { useBookings } from "@/hooks";
import { ViewBooking } from "@/components";
import { Table, Button, Drawer } from "antd";

const ViewBookings = () => {
  const { bookings, isBookingsLoading } = useBookings();
  const [selectedBooking, setSelectedBooking] = useState<Order | null>(null);
  const [showDrawer, setShowDrawer] = useState(false);

  const handleDrawerOpen = (booking: Order) => {
    setSelectedBooking(booking);
    setShowDrawer(true);
  };

  const handleClose = () => {
    setSelectedBooking(null);
    setShowDrawer(false);
  };

  const columns = [
    {
      title: "Booking Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Customer Name",
      key: "name",
      render: (_, record) => `${record.user.firstName} ${record.user.lastName}`,
    },
    {
      title: "Date/Time",
      key: "dateTime",
      render: (_, record) => dayjs(record.date).format("YYYY-MM-DD hh:mm A"),
    },
    {
      title: "Booked At",
      key: "bookedAt",
      render: (_, record) =>
        dayjs(record.createdAt).format("YYYY-MM-DD hh:mm A"),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Button type="link" onClick={() => handleDrawerOpen(record)}>
          View
        </Button>
      ),
    },
  ];

  return (
    <div>
      <Table
        dataSource={bookings}
        columns={columns}
        loading={isBookingsLoading}
      />
      {selectedBooking && (
        <ViewBooking
          open={showDrawer}
          booking={selectedBooking}
          handleClose={handleClose}
        />
      )}
    </div>
  );
};

export default ViewBookings;
