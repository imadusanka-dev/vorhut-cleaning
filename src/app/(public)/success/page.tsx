import Link from "next/link";
import { Result, Button } from "antd";

const Success = () => {
  return (
    <div className="flex justify-center items-center">
      <Result
        status="success"
        title="Successfully Booked"
        subTitle="Your booking has been placed successfully. Thank you for choosing Vorhut Facility Service."
        extra={[
          <Link href="/add-booking" key="buy">
            <Button>Book Again</Button>
          </Link>,
        ]}
      />
    </div>
  );
};

export default Success;
