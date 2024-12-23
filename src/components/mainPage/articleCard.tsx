import {
  CalendarDateRangeIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import { postItem } from "../../types/mainPage";
import textModifier from "../../utils/textmodifier";
import noPhoto from "../../assets/images/no_photo.png";
import { useState } from "react";

import ModifyArticle from "./modifyArticle";
import DeleteModal from "./deleteModal";

export default function ArticleCard({
  item,
  posts,
  setPosts,
  editId,
  setEditId,
  setLocalStorageData,
}: {
  item: postItem;
  posts: postItem[];
  setPosts: React.Dispatch<postItem[]>;
  editId: string | number;
  setLocalStorageData: (data: postItem[]) => void;
  setEditId: React.Dispatch<string | number>;
}) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const deletePost = () => {
    const data = posts.filter((i) => i.id != item.id);
    setPosts(data);
    setLocalStorageData(data);
  };

  return editId == item?.id ? (
    <ModifyArticle
      posts={posts}
      setPosts={setPosts}
      setLocalStorageData={setLocalStorageData}
      setEditId={setEditId}
      edit={true}
      item={item}
    />
  ) : (
    <article className="  shadow-[0px_0px_12px_5px_rgba(0,_0,_0,_0.1)] h-[416px] rounded-lg  justify-between  text-black w-full flex flex-col items-center">
      <span className="cursor-pointer flex items-center justify-center  rounded-t-lg overflow-hidden h-[60%] w-full">
        {/* article Image */}
        <img
          className={` ${
            !item?.image ? "w-[50%]  h-[60%]" : "object-cover h-full w-full"
          }  block   `}
          src={item?.image ? item?.image : noPhoto}
          alt={item.title}
        />
      </span>
      <span className=" py-3 px-2 w-full gap-3 flex flex-col items-start">
        {/* article title & description */}
        <h5 className=" hover:underline break-words w-full cursor-pointer font-bold">
          {textModifier(item.title, 77)}
        </h5>
        <p className="hover:underline break-words w-full cursor-pointer font-thin text-xs">
          {textModifier(item?.description ? item.description : "", 150)}
        </p>
      </span>
      <div className="w-full px-2 py-2 text-gray-400 text-opacity-80 flex flex-row items-center justify-between border-t-gray-300 border-t">
        <span className=" flex items-center gap-1">
          {/* created date */}
          <small>{item?.date}</small>
          <CalendarDateRangeIcon className=" size-[14px]" />
        </span>
        <span className=" gap-2 flex items-center ">
          {/* operation buttons */}
          <PencilSquareIcon
            onClick={() => {
              // setting Item id to prevent multiple edits
              setEditId(item.id);
            }}
            className=" hover:text-secondary cursor-pointer size-[18px]"
          />
          <TrashIcon
            onClick={() => {
              setShowDeleteModal(true);
            }}
            className=" hover:text-[#B8001F] cursor-pointer size-[18px]"
          />
          {showDeleteModal && (
            <DeleteModal
              setShowDeleteModal={setShowDeleteModal}
              deletePost={deletePost}
            />
          )}
        </span>
      </div>
    </article>
  );
}
