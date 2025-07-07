"use client";
import useSidebarStore from "@/store/Store.zust"

const Sidebar = () => {
  const display = useSidebarStore((state) => state.visible);
  return (
    <>
      <div className="w-[250px] h-full overflow-y-auto bg-[#ccc] left-0 top-0 max-md:absolute transition duration-150 ease-in-out" style={{
        left: display ? "0" : "-100%",
        transition: "0.255s ease-in-out"
      }}>
        Sidebar component
      </div>
    </>
  )
}

export default Sidebar