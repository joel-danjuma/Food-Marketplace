import { SlCalender } from "react-icons/sl";
import { MdLocalPhone } from "react-icons/md";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { LiaShippingFastSolid } from "react-icons/lia";

const Features = () => {
  return (
    <div>
      <div className="w-full h-36 p-4 lg:justify-center lg:flex hidden ">
        <div className="grid grid-flow-col grid-cols-4 gap-4 lg:text-4xl text-2xl text-center text-black justify-between w-full">
          <div className="flex flex-col items-center justify-center">
            <LiaShippingFastSolid />
            <h1 className="lg:text-lg text-sm">Free Shipping</h1>
            <h2 className="text-sm ">On Orders Above 50,000</h2>
          </div>
          <div className="flex flex-col items-center">
            <BsArrowCounterclockwise />
            <h1 className="lg:text-lg text-sm">Money Back</h1>
            <h2 className="text-sm">Within 3 days of Delivery</h2>
          </div>
          <div className="flex flex-col items-center">
            <SlCalender />
            <h1 className="lg:text-lg text-sm">Office Hours</h1>
            <h2 className="text-sm">Mon - Sun : 09:00 - 16:00</h2>
          </div>
          <div className="flex flex-col items-center">
            <MdLocalPhone />
            <h1 className="lg:text-lg text-sm">Call 09024521063</h1>
            <h2 className="text-sm">Order by phone</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
