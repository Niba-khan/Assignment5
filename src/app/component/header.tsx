import Image from "next/image";

export default function Header() {
    return (
        <div className="bg-[#A29875] h-[134px] flex justify-center items-center">
           <div className="absolute top-[20px] left-[36px] p-5">
        <Image
          src={"/image/logo1.png"}
          alt="Logo"
          width={439}
          height={94}
        />
      </div>
        </div>
    )
}
