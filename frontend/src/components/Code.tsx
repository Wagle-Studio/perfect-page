import { useEffect, useState } from "react";
import Prism from "prismjs";
import "@/theme/prismVscDarkPlus.css";
import { MarkupConf } from "@/types/Markup";

export function Code(props: MarkupConf) {
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
          <code className="language-javascript">{props.content}</code>
        </pre>
      )}
    </div>
  );
}
