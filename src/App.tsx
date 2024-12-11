import Dashboard from "./components/dashboard/dashboard";
import ArticleSection from "./components/mainPage/articleSection";

function App() {
  return (
    <section
      dir="rtl"
      className="lg:mb-5 mb-20 flex flex-col w-full items-center"
    >
      <Dashboard />
      <ArticleSection />
    </section>
  );
}

export default App;
