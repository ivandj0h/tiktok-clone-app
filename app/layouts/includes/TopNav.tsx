import Link from "next/link";
import Image from "next/image"; // Import the Image component
import { useRouter, usePathname } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useGeneralStore } from "@/app/stores/general";

const TopNav = () => {
  const router = useRouter();
  const pathname = usePathname();
  let { setIsLoginOpen, setIsEditProfileOpen } = useGeneralStore();

  const handleSearchName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchName = e.target.value;
    // router.push(`/search/${searchName}`);
    console.log(searchName);
  };

  const goTo = () => {
    console.log(`Here!`);
  };

  return (
    <>
      <div className="fixed bg-white z-30 flex items-center w-full border-b h-[60px]">
        <div
          className={`flex items-center justify-between gap-6 w-full px-4 mx-auto ${
            pathname === "/" ? "max-w-[1150px]" : ""
          }`}
        >
          <Link href="/">
            <Image
              src="/images/tiktok-logo.png"
              alt="logo"
              width={115} // Specify width
              height={60} // Specify height, adjust as needed
              className="min-w-[115px]"
            />
          </Link>

          <div className="relative hidden md:flex items-center justify-end bg-[#f1f1f2] p-1 rounded-full max-w-[430px] w-full">
            <input
              type="text"
              onChange={handleSearchName}
              className="w-full pl-3 my-2 bg-transparent placeholder:-[#838383] text-[15px] focus:outline-none"
              placeholder="Search Account"
            />

            <div className="absolute bg-white max-w-[910px] h-auto w-full z-20 left-0 top-12 border p-1">
              <div className="p-1">
                <Link
                  href={`/profile/1`}
                  className="flex items-center justify-between w-full cursor-pointer hover:bg-[#F12B56] p-1 px-2 hover:text-white"
                >
                  <div className="flex items-center">
                    <Image
                      src={`/images/placeholder-user.jpg`}
                      width={40}
                      height={40}
                      className="rounded-md"
                      alt="user-profile"
                    />
                    <div className="truncate ml-2">IvanDjoh</div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="px-3 py-1 flex items-center border-l border-l-gray-300">
              <BiSearch color="#A1A2A7" size="22" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => goTo()}
              className="flex items-center border rounded-sm py-[6px] hover:bg-gray-100 pl-1.5"
            >
              <AiOutlinePlus color="#000000" size="22" />
              <span className="px-2 font-medium text-[15px]">Upload</span>
            </button>

            <div className="flex items-center">
              <button
                onClick={() => setIsLoginOpen(true)}
                className="flex items-center bg-[#F02C56] text-white border rounded-md px-3 py-[6px]"
              >
                <span className="whitespace-nowrap mx-4 font-medium text-[15px]">
                  Log in
                </span>
              </button>
              <BsThreeDotsVertical color="#161724" size="25" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;