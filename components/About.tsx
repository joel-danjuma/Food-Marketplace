import img from "@/public/mae-mu-s6S8IgEN6-4-unsplash.jpg";
import Image from "next/image";

const About = () => {
  return (
    <section>
      <div className="w-full h-[100vh]"></div>
      <div className="w-full absolute lg:top-14 top-12 flex lg:flex-row flex-col bg-[#F9F8F8] text-green-800">
        <div className="lg:w-1/2 h-1/2 w-full">
          <Image
            src={img}
            alt=""
            className="max-w-full lg:block hidden object-cover"
          />
          <div className="lg:w-1/2 w-full h-full absolute top-0 lg:right-0 flex flex-col justi lg:text-2xl text-sm p-4">
            <h1 className="pt-3 text-xl">About Us</h1>
            <h2 className="py-3 lg:text-3xl text-xl text-[#274C5B] text-justify">
              We Have Partnered with Farmers accross the Nation, To Provide
              Fresh Food For Our Customers
            </h2>
            <p className=" lg:text-lg text-sm pb-3 text-justify">
              At Gwaree Foods, we are committed to providing you with the
              freshest and highest quality fruits and vegetables for your
              hospitality needs.
              <br /> We understand the challenges that hotels and restaurants
              face in procuring fresh produce, and we are proud to offer a
              solution that streamlines the process while supporting smallholder
              farmers. <br />
              Our procurement service ensures that quality control is maintained
              at every step, from farm to table.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
