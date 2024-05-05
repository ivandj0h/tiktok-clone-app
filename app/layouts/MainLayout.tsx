import { usePathname } from "next/navigation";
import TopNav from "./includes/TopNav";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <>
    <TopNav />
      <div
        className={`flex justify-between mx-auto w-full lg:px-2.5 px-0 ${
          pathname == "/" ? "max-w-[1140px]" : ""
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default MainLayout;
