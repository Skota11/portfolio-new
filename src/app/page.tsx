import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <header className="flex w-full sticky top-0 bg-white dark:bg-slate-900 rounded-b-xl text-black dark:text-white">
        <p className="py-6 px-2 text-2xl text-black dark:text-white">Skota11's Portfolio</p>
        <div className="ml-auto flex mx-4 py-6">
          <p>Top</p>
          <p>1-2</p>
        </div>
      </header>
      <div id="content flex-grow">

      </div>
    </main>
  );
}
