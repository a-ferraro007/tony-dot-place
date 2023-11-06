import "./styles.css"

export default function App() {
  return (
    <div className="container">
      <h1 className="heading"> 🚧 Site In Progress 🚧</h1>
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
        <span className="footnote">  ( it's named after my cat )</span>
      </div>
      <span className="subheading mt-3">  you can find my old site <a className="link" href="https://www.tony.place"> here </a></span>
    </div>
  )
}
