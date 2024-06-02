import { useEffect, useState } from "react";
import Prism from "prismjs";
import "@/theme/prismVscDarkPlus.css";

export type CodeProps = {
  key: number;
  content: string;
  code_language: string;
};

export function Code(props: CodeProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // DIY to avoid css not loading caused by images.
      setTimeout(() => setIsClient(true), 1000);
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      Prism.highlightAll();
    }
  }, [isClient]);

  return (
    <div key={props.key}>
      {!isClient && <p>chargement</p>}
      {isClient && (
        <pre style={{ overflowX: "scroll" }}>
          <code className={`language-${props.code_language}`}>
            {props.content}
          </code>
        </pre>
      )}
    </div>
  );
}
