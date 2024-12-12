import {
  ArrowUpTrayIcon,
  ArrowUturnRightIcon,
} from "@heroicons/react/16/solid";
import { useState } from "react";
import { postItem } from "../../types/mainPage";

export default function ModifyArticle({
  posts,
  setPosts,
  setToggleForm,
  edit,
  setEditId,
  item,
}: {
  posts: postItem[];
  setPosts: React.Dispatch<postItem[]>;
  setToggleForm?: React.Dispatch<boolean>;
  setEditId?: React.Dispatch<number | string>;
  edit?: boolean;
  item?: postItem;
}) {
  const [image, setImage] = useState(() => {
    return edit && item?.image ? item.image : "";
  });
  const [title, setTitle] = useState(() => {
    return edit && item?.title ? item?.title : "";
  });
  const [description, setDescription] = useState(() => {
    return edit && item?.description ? item.description : "";
  });
  const resetValue = () => {
    setImage("");
    setTitle("");
    setDescription("");
    setToggleForm && setToggleForm(false);
  };

  const createArticle = () => {
    const createdDate = new Date(Date.now());
    const formatDate = new Intl.DateTimeFormat("en-US").format(createdDate);
    setPosts([
      ...posts,
      { image, title, description, date: formatDate, id: Date.now() },
    ]);
    resetValue();
  };
  const editArticle = () => {
    setPosts(
      posts.map((i) => ({
        ...i,
        image: i.id == item?.id ? image : i.image,
        description: i.id == item?.id ? description : i.description,
        title: i.id == item?.id ? title : i.title,
        date: i.date,
      }))
    );
    setEditId && setEditId("");
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        edit ? editArticle() : createArticle();
      }}
      className=" h-[416px] rounded-lg  w-full pb-2 gap-2  items-center  shadow-[0px_0px_12px_5px_rgba(0,_0,_0,_0.1)] flex flex-col"
    >
      <span
        style={{ display: image ? "none" : "" }}
        className="cursor-pointer  text-gray-400 self-start  items-center    w-10 h-10
        transition-all   flex flex-row  rounded-full px-2 py-3 "
        onClick={() => {
          resetValue();
          setEditId && setEditId("");
        }}
      >
        <ArrowUturnRightIcon className=" size-5" />
      </span>
      <span className=" w-full rounded-lg h-[60%] flex items-center justify-center">
        {image ? (
          <span className="w-full group relative h-full  rounded-lg overflow-hidden">
            {/* showing selected image */}
            <span
              className="cursor-pointer absolute text-white bg-secondary bg-opacity-55 self-start top-0 right-0  items-center    w-10 h-10
        transition-all   flex flex-row  rounded-bl-full px-2 py-3 "
              onClick={() => {
                resetValue();
                setEditId && setEditId("");
              }}
            >
              <ArrowUturnRightIcon className=" size-5" />
            </span>

            <img
              className="h-full block w-full object-cover "
              src={image}
              alt="uploadedImage"
            />
            <label
              htmlFor={edit ? "image" + item?.id : "image"}
              className="cursor-pointer  text-white  absolute right-0  bottom-0 opacity-0 border group-hover:opacity-80  transition-all bg-secondary w-fit flex flex-row  rounded-tl-full px-2 py-3 "
            >
              <ArrowUpTrayIcon className=" size-5" />
            </label>
            <input
              onChange={(e) => {
                if (e.target.files) {
                  let fileUrl = URL.createObjectURL(e.target.files[0]);
                  setImage(fileUrl);
                }
              }}
              id={edit ? "image" + item?.id : "image"}
              name="image"
              type="file"
              className=" hidden"
            />
          </span>
        ) : (
          <>
            {/* upload button */}
            <label
              htmlFor={edit ? "image" + item?.id : "image"}
              className=" mt-4 cursor-pointer gap-1  hover:text-secondary hover:bg-transparent border border-secondary transition-all bg-secondary w-fit flex flex-row  rounded-full px-2 py-3 text-white"
            >
              <ArrowUpTrayIcon className=" size-5" />
              <p>آپلود تصویر</p>
            </label>
            <input
              onChange={(e) => {
                if (e.target.files) {
                  let fileUrl = URL.createObjectURL(e.target.files[0]);
                  setImage(fileUrl);
                }
              }}
              id={edit ? "image" + item?.id : "image"}
              name="image"
              type="file"
              className=" hidden"
            />
          </>
        )}
      </span>
      <span className=" flex flex-col items-center gap-2 px-3 w-full">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="عنوان"
          className=" text-sm w-full outline-none bg-slate-200 rounded-lg px-2 py-2"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="توضیحات"
          className=" resize-none text-xs w-full outline-none bg-slate-200 rounded-lg px-2 py-2"
        />{" "}
        <button
          disabled={!title.trim()}
          className={`${
            !title.trim()
              ? "bg-gray-300 border-gray-300"
              : "bg-green-700 border-green-700  transition-all hover:bg-transparent hover:text-green-700"
          } text-white text-sm border  px-3 py-1 self-start rounded`}
        >
          ثبت
        </button>
      </span>
    </form>
  );
}
