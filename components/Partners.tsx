import Image from "next/image";

const Partners = () => {
  return (
    <section>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="px-4 pb-12 mx-auto">
          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-6 lg:mt-8">
            <div className="flex justify-center col-span-1 px-8">
              <Image
                // className="max-h-12"
                width={100}
                height={100}
                src="https://d33wubrfki0l68.cloudfront.net/2a4d2cdd794587314ad2034778712608ac32e37c/79f3b/images/logos/8.svg"
                alt=" logo"
              />
            </div>
            <div className="flex justify-center col-span-1 px-8">
              <Image
                // className="w-5 h-5 max-h-12"
                width={100}
                height={100}
                src="https://d33wubrfki0l68.cloudfront.net/aae3d6dfaee9138c485f5305dd33b7f80379edb4/64dd2/images/logos/2.svg"
                alt="logo"
              />
            </div>
            <div className="flex justify-center col-span-1 px-8">
              <Image
                // className="w-5 h-5 max-h-12"
                width={100}
                height={100}
                src="https://d33wubrfki0l68.cloudfront.net/4dc5df63255f9f0c1f54c804dd3149cf11308507/b7a70/images/logos/3.svg"
                alt="logo"
              />
            </div>
            <div className="flex justify-center col-span-1 px-8">
              <Image
                // className="w-5 h-5 max-h-12"
                width={100}
                height={100}
                src="https://d33wubrfki0l68.cloudfront.net/be7130b04bb6b932ed9222877a5e9146d80c0eba/6511d/images/logos/4.svg"
                alt="logo"
              />
            </div>
            <div className="flex justify-center col-span-1 px-8">
              <Image
                // className="w-5 h-5 max-h-12"
                width={100}
                height={100}
                src="https://d33wubrfki0l68.cloudfront.net/456c999508e76cd199714cfa4fad3826ebb02216/9147b/images/logos/5.svg"
                alt="logo"
              />
            </div>
            <div className="flex justify-center col-span-1 px-8">
              <Image
                // className="w-5 h-5 max-h-12"
                width={100}
                height={100}
                src="https://d33wubrfki0l68.cloudfront.net/b5d09ea7476a226d10dd1235e071288761e51da7/e68ac/images/logos/6.svg"
                alt="logo"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 text-center lg:grid-cols-2 lg:gap-24">
          <p className="text-gray-500 md:mt-5">
            Responding to floods and weather caused by climate change,
            Florida-based Brillhart Architecture has raised a residence in
            southern Miami on galvanized steel stilts.
          </p>
          <p className="text-gray-500 md:mt-5">
            Responding to floods and weather caused by climate change,
            Florida-based Brillhart Architecture has raised a residence in
            southern Miami on galvanized steel stilts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
