import { useState } from "react";

import AnswersList from "./AnswersList";
import CreateForm from "./Form"


export default function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answerItem, setAnswer] = useState({
    answerItem: {
      username: "",
      email: "",
      logo: "",
      colour: "",
      consistency: "",
      timeSpent: [],
      review: "",
      bestFeatures: [],
      worstFeatures: []
    }
  })

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* Use the AnswersList component here */}
      </section>
      <section className="main__form">
        <CreateForm answerItem={answerItem} setAnswer={setAnswer} />
      </section>
    </main >
  );
}
