import { useEffect, useState } from "react";
import Prism from "prismjs";
import "@/theme/prismVscDarkPlus.css";
import { BlockTags } from "@/types/Block";

export type CodeProps = {
  key: number;
  tag: BlockTags;
  content: string;
  code_language: string;
};

export function Code(props: CodeProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
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
        <pre>
          <code className={`language-${props.code_language}`}>{props.content}</code>
        </pre>
      )}
    </div>
  );
}
