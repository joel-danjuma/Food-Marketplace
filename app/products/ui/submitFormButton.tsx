"use client";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { Spinner } from "@nextui-org/react";

const SubmitFormButton = () => {
  const { pending } = useFormStatus();
  return (
    <button className="flex mx-auto text-black bg-gray-300 border-0 py-2 px-4 focus:outline-none hover:bg-gray-600 rounded-xl text-lg">
      {pending ? <Spinner /> : "Add Product"}
    </button>
  );
};

export default SubmitFormButton;
