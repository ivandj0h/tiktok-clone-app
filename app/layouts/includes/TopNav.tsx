import { useRouter, usePathname } from "next/navigation";

const TopNav = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <>
      <div className="fixed bg-white z-30 flex items-center w-full border-b h-[60px]">
        <div
          className={`flex items-center justify-between gap-6 w-full px-4 mx-auto ${
            pathname === "/" ? "max-w-[1150px]" : ""
          }`}
        ></div>
      </div>
    </>
  );
};

export default TopNav;
