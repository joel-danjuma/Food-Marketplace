"use client";

import Image from "next/image";
import salad from "@/public/salad_bowl.svg";

const about = () => {
  return (
    <section>
      <div
        className={`bg-[#E3F1E9] bg-no-repeat bg-cover flex justify-center w-full min-h-1/4 pt-14`}
      >
        SOME IMAGE
      </div>
      <div className="flex flex-row space-x-5">
        <Image src={salad} alt="salad" className="max-w-md"></Image>
        <div>
          <h3>About us</h3>
          <h1>We are High Achievers for Food Quality at the best Price</h1>
        </div>
      </div>
    </section>
  );
};

export default about;
