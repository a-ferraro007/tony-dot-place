export default function Main() {
  return (
    <>
      <nav className="fixed top-0 flex flex-row w-full justify-end gap-2 md:gap-4 py-6 px-4 md:px-10">
        <a className="text-xl md:text-3xl font-extralight border-b-[1.5px] border-black pb-[.125px]" href="https://github.com/a-ferraro007" target="_blank">github</a>
        <a className="text-xl md:text-3xl font-extralight border-b-[1.5px] border-black pb-[.125px]" href="https://www.linkedin.com/in/anthony-f-9a7084b8/" target="_blank">linkedin</a>
      </nav>

      <div>
        <div className="h-full flex flex-col items-center md:items-start mt-48 md:ml-36 md:mt-64">
          <h1 className="text-5xl md:text-7xl font-extralight mb-2">Anthony Ferraro</h1>
          <h2 className="md:ml-4 text-xl md:text-2xl font-light"> Software Engineer <span className="font-bold">/</span>
            <span className="text-xl md:text-2xl font-normal text-[#F45A27]"> LegalZoom </span></h2>
        </div>
      </div>
      <footer className="fixed bottom-0 w-full flex justify-center p-1">

        <a
          className=" font-semibold border-b-[.5px] border-black pb-[.125px]"
          href="https://github.com/a-ferraro007/OliveJs/tree/main"
          target="_blank"
        >
          made with 🫒
        </a>
      </footer>
    </>
  );
}
