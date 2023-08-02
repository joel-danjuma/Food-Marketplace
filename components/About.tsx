import img from "@/public/mae-mu-s6S8IgEN6-4-unsplash.jpg";
import Image from "next/image";
import { SlCalender } from "react-icons/sl";
import { MdLocalPhone } from "react-icons/md";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { LiaShippingFastSolid } from "react-icons/lia";

const About = () => {
  return (
    <section>
      <div className="w-full h-36 p-4 lg:justify-center lg:flex hidden">
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
      <div className="w-full flex lg:flex-row flex-col bg-[#F9F8F8] text-green-800">
        <div className="lg:w-1/2 h-1/2 w-full">
          <Image src={img} alt="" className="max-w-full  object-cover" />
        </div>

        <div className="lg:w-1/2 w-full h-full  flex flex-col justi lg:text-2xl text-sm p-4">
          <h1 className="pt-3 text-xl">About Us</h1>
          <h2 className="py-3 lg:text-3xl text-xl text-[#274C5B] text-justify">
            We Have Partnered with Farmers accross the Nation, To Provide Fresh
            Food For Our Customers
          </h2>
          <p className=" lg:text-lg text-sm pb-3 text-justify">
            At Gwaree Foods, we are committed to providing you with the freshest
            and highest quality fruits and vegetables for your hospitality
            needs.
            <br /> We understand the challenges that hotels and restaurants face
            in procuring fresh produce, and we are proud to offer a solution
            that streamlines the process while supporting smallholder farmers.{" "}
            <br />
            Our procurement service ensures that quality control is maintained
            at every step, from farm to table.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
