import { useEffect, useState } from "react";
import Prism from "prismjs";
import "@/theme/prismVscDarkPlus.css";
import { BlockConf, NotionCodeData } from "@/types/Block";

export function Code(props: BlockConf<NotionCodeData>) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // DIY to avoid css unloading caused by images.
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
          <code className={`language-${props.data?.language}`}>
            {props.data?.rich_text[0].plain_text}
          </code>
        </pre>
      )}
    </div>
  );
}
