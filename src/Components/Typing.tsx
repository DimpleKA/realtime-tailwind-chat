import React, { useEffect } from 'react';
import ClipboardJS from 'clipboard';
import './Typing.css';

const Typing: React.FC = () => {
  useEffect(() => {
    const snippets = document.querySelectorAll('.snippet');

    const clearTooltip = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      target.setAttribute('class', 'snippet');
      target.removeAttribute('aria-label');
    };

    const showTooltip = (el: HTMLElement, msg: string) => {
      el.setAttribute('class', 'snippet tooltip');
      el.setAttribute('aria-label', msg);
    };

    for (let i = 0; i < snippets.length; i++) {
      snippets[i].addEventListener('mouseleave', clearTooltip);
      snippets[i].addEventListener('blur', clearTooltip);
    }

    const clipboardSnippets = new ClipboardJS('.snippet', {
      text: (trigger) => (trigger as HTMLElement).getAttribute('data-title') || '',
    });

    clipboardSnippets.on('success', (e) => {
      e.clearSelection();
      showTooltip(e.trigger as HTMLElement, 'Copied!');
    });

    clipboardSnippets.on('error', (e) => {
      showTooltip(e.trigger as HTMLElement, 'Copy failed!');
    });

    return () => {
      for (let i = 0; i < snippets.length; i++) {
        snippets[i].removeEventListener('mouseleave', clearTooltip);
        snippets[i].removeEventListener('blur', clearTooltip);
      }
    };
  }, []);

  return (
    <div className="col-3 m-10 p-5">
      <div className="snippet" data-title="dot-typing">
        <div className="stage">
          <div className="dot-typing"></div>
        </div>
      </div>
    </div>
  );
};

export default Typing;
