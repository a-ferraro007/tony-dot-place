export default function SubComponent() {
  return (
    <>
      <div className="subheading-container">
        <span className="subheading">
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
        <span className="footnote"> ( it's named after my cat )</span>
      </div>
      <span className="subheading mt-3">
        {" "}
        you can find my old site{" "}
        <a className="link" href="https://super-octo-computing-machine.vercel.app/">
          {" "}
          here{" "}
        </a>
      </span> 
    </>
  )
}
