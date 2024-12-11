import {
  ClockIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import { postItem } from "../../types/mainPage";

export default function ArticleCard({ item }: { item: postItem }) {
  return (
    <article className="  shadow-[0px_0px_12px_5px_rgba(0,_0,_0,_0.1)] rounded-lg overflow-hidden  text-black w-full flex flex-col items-center">
      <span className="cursor-pointer w-full">
        <img className=" w-full" src={item?.image} alt={item.title} />
      </span>
      <span className=" py-3 px-2 w-full gap-3 flex flex-col items-start">
        <h5 className=" hover:underline cursor-pointer font-bold">
          {item.title}
        </h5>
        <p className="hover:underline cursor-pointer font-thin text-xs">
          {item?.description}
        </p>
      </span>
      <div className="w-full px-2 py-2 text-gray-400 text-opacity-80 flex flex-row items-center justify-between border-t-gray-300 border-t">
        <span className=" flex items-center gap-1">
          {/* created date */}
          <small>{item?.date}</small>
          <ClockIcon className=" size-[14px]" />
        </span>
        <span className=" gap-2 flex items-center ">
          {/* operation buttons */}
          <PencilSquareIcon className=" hover:text-secondary cursor-pointer size-[18px]" />
          <TrashIcon className=" hover:text-[#B8001F] cursor-pointer size-[18px]" />
        </span>
      </div>
    </article>
  );
}
