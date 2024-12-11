import { categoryItem } from "../../types/dashboard";

export default function CategoryMenu({ items }: { items: categoryItem[] }) {
  return (
    <>
      <ul className=" hidden lg:flex flex-row items-center gap-4">
        {/* desktop view */}
        {items.map((item) => (
          <li
            className=" after:content-[''] flex flex-col items-center after:border-b-2 after:duration-200 after:border-b-white after:transition-all transition-all after:w-0 hover:after:w-full"
            key={item.id}
          >
            <a href={item.path}>{item.title}</a>
          </li>
        ))}
      </ul>
      <div className=" z-50 fixed bottom-0 left-0 justify-center items-center bg-white shadow-[0px_-5px_15px_-1px_rgba(0,_0,_0,_0.1)] w-[100vw]   lg:hidden flex px-4 py-2 rounded-t-2xl">
        <ul className="  w-full flex  flex-row items-center  justify-between">
          {/* desktop view */}
          {items.map((item) => (
            <li
              className=" text-gray-400 hover:text-secondary  cursor-pointer after:content-[''] flex flex-col items-center after:border-b-2 after:duration-200 after:border-b-white after:transition-all transition-all after:w-0 hover:after:w-full"
              key={item.id}
            >
              <a className=" flex flex-col items-center" href={item.path}>
                <item.icon className={"size-5"} />
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
