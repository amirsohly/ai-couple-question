import { useState } from "react";

export default function App() {

  const [level, setLevel] = useState("intimate");
  const [question, setQuestion] = useState(
    "Level رو انتخاب کن و دکمه رو بزن"
  );

  async function getQuestion() {

  const res = await fetch(
    `https://subsidiary-francisco-schemes-someone.trycloudflare.com/question?level=${level}`
  )

  const data = await res.json()

  setQuestion(data.question)
}

  return (
    <div className="container">

      <div className="levels">
        <button
          className={level === "intimate" ? "active" : ""}
          onClick={() => setLevel("intimate")}
        >
          🟠 Friendly
        </button>

        <button
          className={level === "bold" ? "active" : ""}
          onClick={() => setLevel("bold")}
        >
          🔴 Bold
        </button>

        <button
          className={level === "spicy" ? "active" : ""}
          onClick={() => setLevel("spicy")}
        >
          🔥 Sexy
        </button>

      </div>

      <div className="question">
        {question}
      </div>

      <button
        className="main-button"
        onClick={getQuestion}
      >
        Tap Here
      </button>

    </div>
  );
}