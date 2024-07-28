import { useQuery } from "@tanstack/react-query";
import { getBookings } from "@/api/services/orders";

export const useBookings = () => {
  const { data: bookings, isLoading: isBookingsLoading } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });

  return { bookings, isBookingsLoading };
};
