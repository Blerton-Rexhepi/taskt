import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BeakerIcon,
} from "@heroicons/react/24/solid";
export default function Home() {
  return (
    <div className="">
      <div className="bg-black">
        <img
          src="images/HeartBackground.svg"
          className="flex ml-[-200px] w-[50%] h-[50%] py-[80px] justify-center items-start"
        />
        <div className="text-white mt-[-550px] pb-[90px]">
          <div>
            <p className="text-[25px] ml-[50px]">hellocare is for everyone</p>
          </div>
          <div className="py-2">
            <p className="text-xl ml-[50px]">
              hellocare provides consists of software, hardware and Artificial
              Intelligence (AI) that <br /> provides turnkey solutions for
              Hospitaks Home Care and Primary Care
            </p>
          </div>
          <div className="flex ml-[50px]  gap-[40px] z-3 pb-[80px]">
            <div className="bg-white w-[20%] rounded-[25px] text-black border-b-4 border-solid border-blue-400  hover:text-white hover:bg-blue-400 hover:border-white transition-colors duration-200 delay-100 ease-in">
              <div className="bg-blue-900 bg-opacity-20 rounded-full w-[69px] h-[78px] p-2 ml-6 mt-10">
                <img
                  src="images/home-care.svg"
                  className="flex justify-center items-center"
                />
              </div>
              <div className="ml-6">
                <p className="text-2xl py-4">Home Care</p>
                <p className="hover:text-opacity-10">
                  But I must explain to you all this mistaken idea of
                  denouncing.
                </p>
              </div>
              <ArrowRightIcon className="w-[37px] h-[34px] ml-5 my-[30px]" />
            </div>

            <div className="bg-white w-[20%] rounded-[25px] text-black border-b-4 border-solid border-green-600  hover:text-white hover:bg-green-600 hover:border-white transition-colors duration-200 delay-100 ease-in">
              <div className="bg-green-900 bg-opacity-20 rounded-full w-[69px] h-[78px] p-2 ml-6 mt-10">
                <img
                  src="images/primary-care.svg"
                  className="flex justify-center items-center"
                />
              </div>
              <div className="ml-6">
                <p className="text-2xl py-4">Primary Care</p>
                <p className="hover:text-opacity-10">
                  Personalized care for your physical and mental well-being
                </p>
              </div>
              <ArrowRightIcon className="w-[37px] h-[34px] ml-5 my-[30px]" />
            </div>
            <div className="bg-white w-[20%] rounded-[25px] text-black border-b-4 border-solid border-pink-400 transition-colors duration-200 delay-100 ease-in  hover:text-white hover:bg-pink-400 hover:border-white">
              <div className="bg-pink-900 bg-opacity-20 rounded-full w-[69px] h-[78px] p-2 ml-6 mt-10">
                <img
                  src="images/hospital-care.svg"
                  className="flex justify-center items-center"
                />
              </div>
              <div className="ml-6">
                <p className="text-2xl py-4">Primary Care</p>
                <p className="hover:text-opacity-10">
                  Personalized care for your physical and mental well-being
                </p>
              </div>
              <ArrowRightIcon className="w-[37px] h-[34px] ml-5 my-[30px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
