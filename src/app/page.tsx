import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faJs, faNodeJs, faPython, faRaspberryPi, faReact, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <main className="flex flex-col h-screen bg-bgc">
      <header className="flex w-full sticky top-0 bg-white dark:bg-slate-900 rounded-b-xl text-black dark:text-white">
        <p className="py-6 px-2 text-2xl text-black dark:text-white">
          Skota11's Portfolio</p>
        <div className="ml-auto flex mx-4 py-6">
          <p>Top</p>
          <p>1-2</p>
        </div>
      </header>
      <div id="content flex-grow ">
        <div className="flex place-content-center">
          <div className="max-w-screen-lg">
            <video src="/top.mp4" autoPlay={true} muted={true}></video>
          </div>
        </div>
        <div className="bg-bgc p-4 md:p-12">
          <h1 className="text-2xl my-4 text-center">私について</h1>
          <div className='flex place-content-center'>
            <div className='rounded-xl bg-blue w-4/5 max-w-screen-md p-8 shadow-lg duration-300 hover:shadow-2xl'>
              <h2 className='my-4 text-xl'>Skota11 | こた</h2>
              <div className='mb-4 flex items-center gap-x-4'>
                <img className='rounded-full' src="https://avatars.githubusercontent.com/u/91359399" alt="" width="60px" />
                <p className='mb-2'>15yo / Student</p>
              </div>
              <div>
                <p>プログラミング好きの高校生。</p>
                <p>Webアプリ開発や、マイクラ鯖などを建てたりしてます。</p>
              </div>
              <hr className='my-4' />
              <h2 className='my-2'>DekiruKoto</h2>
              <p><FontAwesomeIcon width="30px" className='inline mr-2' icon={faJs} />JavaScript <FontAwesomeIcon width="30px" className='inline mx-2' icon={faNodeJs} />Node.js / Deno </p>
              <p className='mt-2'><FontAwesomeIcon width="30px" className='inline mr-2' icon={faReact} />React / Next.js <FontAwesomeIcon width="30px" className='inline mx-2' icon={faPython} />Python</p>
              <p className='mt-2'><FontAwesomeIcon width="30px" className='inline mr-2' icon={faRaspberryPi} />RaspberryPi 4 (自宅鯖運営)</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
