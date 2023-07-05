import img from "@/public/pexels-min-an-1093837.jpg";
import Image from "next/image";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { MdLocalPhone } from "react-icons/md";

const About = () => {
  return (
    <section className="flex flex-col h-full w-full">
      <div className="w-full h-2/6 flex flex-row justify-center bg-white lg:z-10 rounded-xl">
        <div className="flex flex-row items-center text-4xl text-black justify-between w-3/5">
          <div className="flex flex-col items-center">
            <LiaShippingFastSolid />
            <h1 className="text-lg">Free Shipping</h1>
            <h2 className="text-sm">On Orders Above 50,000</h2>
          </div>
          <div className="flex flex-col items-center">
            <BsArrowCounterclockwise />
            <h1 className="text-lg">Money Back Gaurantee</h1>
            <h2 className="text-sm">Within 3 days of Delivery</h2>
          </div>
          <div className="flex flex-col items-center">
            <SlCalender />
            <h1 className="text-lg">Office Hours</h1>
            <h2 className="text-sm">Mon - Sun : 09:00 - 16:00</h2>
          </div>
          <div className="flex flex-col items-center">
            <MdLocalPhone />
            <h1 className="text-lg">Call 09024521063</h1>
            <h2 className="text-sm">Order by phone</h2>
          </div>
        </div>
      </div>
      <div className="w-full h-4/6 flex flex-row bg-[#EDEAE7] text-green-800 rounded-xl">
        <Image
          src={img}
          alt="vegetable-stall"
          className="w-1/2 h-full rounded-l-xl"
        />
        <div className="w-1/2 h-full flex flex-col justify-center items-center p-4">
          <h1 className="pt-3 text-xl">Our Story</h1>
          <h2 className="py-3">
            We Have Partnered with Farmers accross the Nation, To Provide Fresh
            and Quality Foods For Our Customers
          </h2>
          <p className=" text-center pb-3">
            At Gwaree Foods, we are committed to providing you with the freshest
            and highest quality fruits and vegetables for your hospitality
            needs.
            <br /> We understand the challenges that hotels and restaurants face
            in procuring fresh produce, <br />
            and we are proud to offer a solution that streamlines the process
            while supporting smallholder farmers. <br />
            Our procurement service ensures that quality control is maintained
            at every step, from farm to table.
          </p>
          <button className="rounded-full bg-green-800 text-white p-2 font-bold mb-4">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
