import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

/*function getData(data) {
  return <Note key={data.key} title={data.title} content={data.content} />;
} */

function App() {
  return (
    <div>
      <Header />

      {notes.map((data) => {
        return (
          <Note key={data.key} title={data.title} content={data.content} />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
