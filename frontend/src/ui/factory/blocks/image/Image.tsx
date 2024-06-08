"use client";

import { Fragment, useEffect, useState } from "react";
import NextImage from "next/image";
import { FactoryBlockConf } from "@/factory/types/FactoryTypes";
import { FactoryNotionImageData } from "@/factory/types/NotionTypes";
import { RichText } from "@/ui/factory/components/richText/RichText";
import "./image.scss";

type ImageDimensions = {
  width: number;
  height: number;
};

function ImageComponent(props: FactoryBlockConf<FactoryNotionImageData>) {
  const [source, setSource] = useState<string>();
  const [dimensions, setDimensions] = useState<ImageDimensions>();
  const [extension, setExtension] = useState<string>();

  useEffect(() => {
    const img: HTMLImageElement = new Image();
    let source: string | undefined = undefined;

    if (props.data?.type === "external") {
      source = props.data.external.url;
    } else if (props.data?.type === "file") {
      source = props.data.file.url;
    }

    if (source) {
      setSource(source);

      img.src = source;

      const extensionFilematches = source.match(/\.([a-zA-Z0-9]+)(?:[?#]|$)/);

      if (extensionFilematches) {
        setExtension(extensionFilematches[1]);
      }
    }

    img.onload = () => {
      setDimensions({ width: img.width, height: img.height });
    };
  }, [props.data]);

  const MediaContent = props.data?.caption.map((caption, index) => (
    <RichText key={props.key + "_" + index} content={caption} />
  ));

  return (
    <Fragment key={props.key}>
      {dimensions && source && extension !== "svg" && (
        <div
          className="media"
          style={{
            maxWidth: `${dimensions.width}px`,
          }}
        >
          <NextImage
            className="media__image"
            src={source}
            alt="No alt text."
            priority={false}
            width={dimensions.width}
            height={dimensions.height}
          />
          <p className="media__content">{MediaContent}</p>
        </div>
      )}
      {source && extension === "svg" && (
        <div
          className="media"
          style={{
            maxWidth: "100%",
          }}
        >
          <img
            className="media__image media__image--svg"
            src={source}
            alt="No alt text."
          />
          <p className="media__content">{MediaContent}</p>
        </div>
      )}
    </Fragment>
  );
}

export { ImageComponent as Image };
