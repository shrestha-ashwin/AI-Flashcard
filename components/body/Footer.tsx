import { github, linkedin } from "@/public/icons";

export default function Footer() {
  return (
    <div className="flex flex-col items-center gap-2 bg-black py-8">
      <div className="flex items-center w-full px-4 mb-2">
        <div className="border-t-[1px] border-lightText flex-grow"></div>
        <div className="flex gap-2 px-4">
          {github}
          {linkedin}
        </div>
        <div className="border-t-[1px] border-lightText flex-grow"></div>
      </div>
      <div className="text-borderGrey">
        Copyright &copy; 2024 Ashwin Shrestha
      </div>
    </div>
  );
}
