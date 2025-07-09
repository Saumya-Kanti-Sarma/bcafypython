"use client";
import { useEffect, useState } from "react";
import "./global.css";
import 'highlight.js/styles/github.css';
import MarkdownRenderer from "@/component/Markdown/Markdown";
const page = () => {
  const [data, setData] = useState('hello');
  useEffect(() => {
    fetch("/notes/Overview.md")
      .then((res) => res.text())
      .then((text) => {
        setData(text);
      })
      .catch((e) => alert(e));
  }, [])
  return (
    <>
      <MarkdownRenderer content={data}></MarkdownRenderer>
    </>
  )
}

export default page
