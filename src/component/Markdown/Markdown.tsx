"use client";
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Components } from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import "./Markdown.css"
interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const [copied, setCopied] = useState(false);

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