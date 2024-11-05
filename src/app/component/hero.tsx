import Image from "next/image";

export default function Hero() {
  return (
    <div className="h-screen">
  
      <div className="flex flex-col md:flex-row h-[80%]">
       
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start m-6 lg:m-12 pl-8 lg:pl-32">
          <h1 className="text-[30px] lg:text-[40px] w-full lg:w-[496px] font-libre-bodoni font-black mb-4 lg:mb-6">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className='text-[#787054] text-[16px] lg:text-[30px] mb-4 lg:mb-6 font-libre-bodoni'>
            An example of intricate workmanship and detail, elegant necklaces
            and long and short chains form a part of our desirable collection.
          </p>
          <button className="bg-[#A29875] w-[200px] lg:w-[288px] h-[48px] lg:h-[58px] font-libre-bodoni text-[20px] lg:text-[30px] leading-[26px] lg:leading-[37.5px] text-[#FFFFFF] p-[10px] rounded-md">
            Button Text
          </button>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-center mt-6 lg:mt-0">
          <Image
            src="/image/HeroImg.jpg" 
            alt="hero image"
            width={442} 
            height={611} 
            className="w-[250px] h-auto md:w-[442px] md:h-auto"
          />
        </div>
      </div>
    </div>
  );
}
