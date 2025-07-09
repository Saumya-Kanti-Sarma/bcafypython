"use client";
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Components } from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import "./Markdown.css";
interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const [copyBtn, setCopyBtn] = useState("Copy");


  const components: Components = {
    a: ({ href, children, ...props }) => {
      if (href && href.match(/\.(mp4|webm|ogg)$/i)) {
        return (
          <video controls style={{ maxWidth: '100%', margin: '1rem 0' }} src={href} />
        );
      }
      if (href && href.match(/\.(svg|png|jpeg|jpg)$/i)) {
        return (
          <img style={{ maxWidth: '100%', margin: '1rem 0' }} src={href} alt='Embedded' />
        );
      }
      return <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
    },

    p: (props) => <p {...props}>{props.children}</p>,

    table: (props) => (
      <div {...props} className='w-full overflow-hidden overflow-x-auto'>
        <table {...props}> {props.children}</table>
      </div>
    ),

    pre: ({ children, ...props }) => {

      const handleCopyBtn = () => {
        const firstChild = props.node?.children?.[0];
        if (firstChild && firstChild.type === 'element') { // props.node?.children[0] has a type of ElementContent, which can be either a Text or a Element. Only Element has a children property — Text does not.
          const innerChildren = firstChild.children;
          const dataToCopy: string[] = [];
          innerChildren.forEach((element) => {
            if (element.type === 'text') {
              dataToCopy.push(element.value);
            }
            else if (element.type === 'element') {
              element.children.forEach((child) => {
                if (child.type === 'text') {
                  dataToCopy.push(child.value);
                }
              });
            }
          });
          navigator.clipboard.writeText(dataToCopy.join(""));
          setCopyBtn("Copied!");
          setTimeout(() => {
            setCopyBtn("Copy")
          }, 2000);
        } else return;

      };

      return (
        <div className='relative'>
          <div className='flex justify-between items-center absolute left-0 top-2 w-full px-4'><b className='opacity-70 normal'>Python</b> <button className='bg-[#fff] px-3 rounded-[4px] cursor-pointer transition duration-225 hover:opacity-70'
            onClick={handleCopyBtn} >{copyBtn}</button></div>
          <pre {...props} >

            {children}
          </pre>
        </div>
      )

    }


  };

  return (
    <div className="markdown">
      <ReactMarkdown
        components={components}
        rehypePlugins={[rehypeHighlight]}
        remarkPlugins={[remarkGfm]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer
