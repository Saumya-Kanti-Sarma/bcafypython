"use client";
import sidebarData from "./Data.sidebar"; // adjust path
import useSidebarStore from "@/store/Store.zust";
import Link from "next/link";

const Sidebar = () => {
  const display = useSidebarStore((state) => state.visible);

  return (
    <div
      className="w-[250px] h-full overflow-y-auto bg-[#ebebeb] left-0 top-0 flex flex-col justify-start gap-5 px-4 py-6 transition duration-150 ease-in-out max-md:absolute"
      style={{
        left: display ? "0" : "-100%",
        transition: "0.255s ease-in-out"
      }}>
      {sidebarData.map((topic, topicIdx) => (
        <details key={topicIdx} className="mb-4">
          <summary className="cursor-pointer text-lg font-semibold text-[#727272]">
            {topic.title}
          </summary>

          {topic.subtopics.map((item, subIdx) => (
            <details key={subIdx} className="ml-4 mt-2">
              <summary className="cursor-pointer text-base font-medium text-[#474747]">
                <Link href="#" className="text-[var(--blue)] underline">{item}</Link>
              </summary>

            </details>
          ))}
        </details>
      ))}
    </div>
  );
};

export default Sidebar;
