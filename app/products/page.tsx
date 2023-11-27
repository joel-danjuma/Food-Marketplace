"use client";
import { addProduct } from "@/app/actions/actions";
import SubmitFormButton from "./ui/submitFormButton";

const Page = () => {
  return (
    <>
      <h1>Add Product</h1>
      <form
        action={async (formData: FormData) => {
          await addProduct(formData);
          console.log("Added New Product");
        }}
      >
        <div className="mt-4 space-y-4">
          <div>
            <label className="block mb-3 text-sm font-medium text-gray-600">
              Product Name
            </label>
            <input
              name="name"
              className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              placeholder="Product Name"
            />
          </div>
          <div className="col-span-full">
            <label className="block mb-3 text-sm font-medium text-gray-600">
              Price
            </label>
            <input
              name="price"
              className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              placeholder="Price"
            />
          </div>
          <div>
            <label className="block mb-3 text-sm font-medium text-gray-600">
              Category
            </label>
            <input
              name="category"
              className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              placeholder="Category"
            />
          </div>
          <div className="col-span-full">
            <label className="block mb-3 text-sm font-medium text-gray-600">
              Description
            </label>
            <input
              name="description"
              className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              placeholder="Description"
            />
          </div>
          <div className="col-span-full">
            <label className="block mb-3 text-sm font-medium text-gray-600">
              Image
            </label>
            <input
              name="ImageUrl"
              className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              placeholder="Image"
            />
          </div>
          <div className="col-span-full">
            <SubmitFormButton />
          </div>
        </div>
      </form>
    </>
  );
};

export default Page;
