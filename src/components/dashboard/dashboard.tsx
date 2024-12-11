import {
  BookmarkIcon,
  CurrencyDollarIcon,
  NewspaperIcon,
  UsersIcon,
} from "@heroicons/react/16/solid";
import pageLogo from "../../assets/pageLogo.svg";
import CategoryMenu from "./categoryMenu";

const routes = [
  { title: "ورزشی", id: 1, path: "/", icon: NewspaperIcon },
  { title: "اقتصادی", id: 2, path: "/", icon: CurrencyDollarIcon },
  { title: "اجتماعی", id: 3, path: "/", icon: UsersIcon },
  { title: "فرهنگی", id: 4, path: "/", icon: BookmarkIcon },
];

export default function Dashboard() {
  return (
    <section
      dir="rtl"
      className="   text-white bg-secondary   top-0 px-4 py-3 w-full flex flex-row items-center justify-between"
    >
      <div className=" flex lg:gap-8 gap-1 items-center">
        <span className="">
          {/* dashboard logo */}
          <img src={pageLogo} className=" max-lg:w-[65%]" alt="pageLogo" />
        </span>

        <CategoryMenu items={routes} />
      </div>
    </section>
  );
}
