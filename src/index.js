import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const headlines = [
    { title: "My First Title", url: "https://news.com/first-title" },
    { title: "My Second Title", url: "https://news.com/second-title" },
    { title: "My Third Title", url: "https://news.com/third-title" },
    { title: "My Fourth Title", url: "https://news.com/fourth-title" }
  ];
  return (
    <div className="App">
      {headlines.map(headline => (
        // `headline` is now an object
        <Headline key={headline.url} title={headline.title} />
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
