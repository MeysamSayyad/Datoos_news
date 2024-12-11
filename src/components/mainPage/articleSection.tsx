import { useState } from "react";
import { postItem } from "../../types/mainPage";
import firstPost from "../../assets/images/first_post.jpg";
import secondPost from "../../assets/images/second_post.jpg";
import ArticleCard from "./articleCard";
import { PlusIcon } from "@heroicons/react/16/solid";

export default function ArticleSection() {
  const [posts, setPosts] = useState<postItem[]>([
    {
      id: 1,
      title:
        "Scammers are using Telegram verification bots to inject crypto-stealing malware",
      description:
        "Scam Sniffer told Cointelegraph it was the first time it’s seen a scam use a “specific combination of fake X accounts, fake Telegram channels and malicious Telegram bots.”",
      image: firstPost,
      date: "2024/2/10",
    },
    {
      id: 1,
      title:
        "Bitwise predicts 2025 as year for crypto IPO — Kraken, Circle to go public",
      description:
        "Bitwise predicted that in 2025, Bitcoin could hit $500,000, Coinbase will enter the S&P 500 and AI agents will drive the next “memecoin mania.”",
      image: secondPost,
      date: "2024/2/11",
    },
  ]);
  return (
    <section className=" mt-8 px-4 flex flex-col items-center">
      <div className=" grid grid-cols-1 lg:grid-cols-4 items-center gap-5">
        {/* post list */}
        {posts.map((item) => (
          <ArticleCard key={item.id} item={item} />
        ))}
        <span className=" flex items-center rounded-full px-3 h-12 gap-1 justify-center text-white transition-all py-2 bg-opacity-70 group w-12 overflow-clip  hover:bg-opacity-75 cursor-pointer hover:w-28 bg-primary">
          <PlusIcon className=" group-hover:rotate-[360deg] duration-200 group-hover:transition-all rotate-0 transition-all size-4" />
          <p className="hidden group-hover:block flex-shrink-0">افزودن خبر</p>
        </span>
      </div>
    </section>
  );
}
