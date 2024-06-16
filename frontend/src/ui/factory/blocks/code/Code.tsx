"use client";

import { useEffect, useState } from "react";
import Prism from "prismjs";
import { FactoryBlockConf } from "@/factory/types/FactoryTypes";
import { FactoryNotionCodeData } from "@/factory/types/NotionTypes";
import { RichText } from "@/ui/factory/components/richText/RichText";
import "./prismVscDarkPlus.scss";
import "./code.scss";

export function Code(props: FactoryBlockConf<FactoryNotionCodeData>) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // DIY to avoid css unloading caused by images.
      setTimeout(() => setIsClient(true), 2000);
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      Prism.highlightAll();
    }
  }, [isClient]);

  // TODO : upgrade loading UI.
  return (
    <div key={props.key} className="factory__code">
      {!isClient && <p>chargement</p>}
      {isClient && (
        <pre className="factory__code__pre">
          <code className={`language language-${props.data?.language}`}>
            {props.data?.rich_text.map((rich_text, index) => (
              <RichText key={props.key + "_" + index} content={rich_text} />
            ))}
          </code>
        </pre>
      )}
    </div>
  );
}
