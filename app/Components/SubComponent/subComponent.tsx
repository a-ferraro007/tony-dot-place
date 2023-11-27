export default function SubComponent() {
  return (
    <>
      <div className="flex flex-col items-center gap-2 ">
        <span className="text-xs md:text-2xl text-[#f0f8ff]">
          {" "}
          built with a custom react framework in early development:{" "}
          <a
            className="link"
            href="https://github.com/a-ferraro007/OliveJs/tree/main"
          >
            {" "}   
            OliveJs
          </a>
        </span>
        <span className="text-xs md:text-2xl text-[#f0f8ff]"> ( it's named after my cat )</span>
      </div>
      <span className="text-[8px] md:text-xs mt-3 text-[#f0f8ff]">
        {" "}
        you can find my old site{" "}
        <a className="text-[#D84A31]" href="https://super-octo-computing-machine.vercel.app/">
          {" "}
          here{" "}
        </a>
      </span> 
    </>
  )
}
