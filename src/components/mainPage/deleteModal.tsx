import { XMarkIcon } from "@heroicons/react/16/solid";

export default function DeleteModal({
  deletePost,
  setShowDeleteModal,
}: {
  deletePost: () => void;
  setShowDeleteModal: React.Dispatch<boolean>;
}) {
  const closeModal = () => {
    setShowDeleteModal(false);
  };
  return (
    <section className=" text-primary inset-0 fixed w-screen  flex items-center justify-center bg-black bg-opacity-65 h-screen">
      <div className=" px-4 py-2 bg-white rounded-lg gap-2 flex flex-col items-center">
        <span className=" mb-1 w-full flex items-center justify-between">
          <XMarkIcon onClick={closeModal} className="size-5 cursor-pointer" />
        </span>{" "}
        <p className=" font-bold">آیا از انجام این عمل مطمئن هستید؟</p>
        <span className=" w-full flex items-center justify-around">
          <button
            onClick={deletePost}
            className=" hover:shadow-lg hover:bg-opacity-80 active:bg-opacity-90 transition-all rounded-lg px-3 py-1 text-white bg-red-600"
          >
            حذف
          </button>
          <button
            onClick={closeModal}
            className=" hover:shadow-lg hover:bg-opacity-90 active:bg-opacity-95 transition-all  rounded-lg  px-3 py-1 text-white bg-secondary"
          >
            لغو
          </button>
        </span>
      </div>
    </section>
  );
}
