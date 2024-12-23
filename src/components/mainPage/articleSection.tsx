import { useState } from "react";
import { postItem } from "../../types/mainPage";
import firstPost from "../../assets/images/first_post.jpg";
import secondPost from "../../assets/images/second_post.jpg";
import ArticleCard from "./articleCard";
import { PlusIcon } from "@heroicons/react/16/solid";
import ModifyArticle from "./modifyArticle";
const sampleData = [
  {
    id: 1,
    title:
      "Scammers are using Telegram verification bots to inject crypto-stealing malware",
    description:
      "Scam Sniffer told Cointelegraph it was the first time it’s seen a scam use a “specific combination of fake X accounts, fake Telegram channels and malicious Telegram bots.”",
    image: firstPost,
    date: "10/2/2024",
  },
  {
    id: 2,
    title:
      "Bitwise predicts 2025 as year for crypto IPO — Kraken, Circle to go public",
    description:
      "Bitwise predicted that in 2025, Bitcoin could hit $500,000, Coinbase will enter the S&P 500 and AI agents will drive the next “memecoin mania.”",
    image: secondPost,
    date: "12/2/2024",
  },
];

export default function ArticleSection() {
  const [toggleForm, setToggleForm] = useState(false);

  const [editId, setEditId] = useState<string | number>("");

  const [posts, setPosts] = useState<postItem[]>(() =>
    localStorage.getItem("postdata")
      ? JSON.parse(localStorage.getItem("postdata") || "{}")
      : sampleData
  );
  const setLocalStorageData = (data: postItem[]) => {
    // store posts in localStorage
    const stringData = JSON.stringify(data);
    localStorage.setItem("postdata", stringData);
  };
  return (
    <section className=" w-full mt-8 px-4 flex flex-col items-center">
      <div className=" w-full grid grid-cols-1 lg:grid-cols-4 items-start gap-5">
        {/* post list */}
        {posts.map((item) => (
          <ArticleCard
            posts={posts}
            setPosts={setPosts}
            key={item.id}
            item={item}
            editId={editId}
            setLocalStorageData={setLocalStorageData}
            setEditId={setEditId}
          />
        ))}

        <div
          // toggle between add button and ModifyArticle Form
          className={` ${
            toggleForm
              ? "  shadow-none"
              : "hover:shadow-[0px_0px_12px_5px_rgba(0,_0,_0,_0.1)] rounded-lg"
          } w-full transition-all flex items-center justify-center h-[416px]`}
        >
          {toggleForm ? (
            <ModifyArticle
              setToggleForm={setToggleForm}
              posts={posts}
              setLocalStorageData={setLocalStorageData}
              setPosts={setPosts}
            />
          ) : (
            <span
              onClick={() => setToggleForm(true)}
              className="  self-center justify-self-center flex items-center rounded-full px-3 h-12 gap-1 justify-center text-white transition-all py-2 bg-opacity-80 group w-12 overflow-clip  hover:bg-opacity-90 cursor-pointer hover:w-28 bg-secondary"
            >
              <PlusIcon className=" group-hover:rotate-[360deg] duration-200 group-hover:transition-all rotate-0 transition-all size-4" />
              <p className="hidden group-hover:block flex-shrink-0">
                افزودن خبر
              </p>
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
