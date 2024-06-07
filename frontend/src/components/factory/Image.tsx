import { Fragment, useEffect, useState } from "react";
import NextImage from "next/image";
import { BlockConf, NotionImageData } from "@/types/Block";
import "./image.scss";

type ImageDimensions = {
  width: number;
  height: number;
};

function ImageComponent(props: BlockConf<NotionImageData>) {
  const [imageSource, setImageSource] = useState<string>();
  const [imageCaption, setImageCaption] = useState<string>();
  const [dimensions, setDimensions] = useState<ImageDimensions>();

  useEffect(() => {
    const img = new Image();

    if (props.data?.type === "external") {
      img.src = props.data.external.url;
      setImageSource(props.data.external.url);
    } else if (props.data?.type === "file") {
      img.src = props.data.file.url;
      setImageSource(props.data.file.url);
    }

    setImageCaption(
      (props.data?.caption[0] && props.data?.caption[0].plain_text) ??
        "Missing alt text."
    );
    img.onload = () => {
      setDimensions({ width: img.width, height: img.height });
    };
  }, [props.data]);

  return (
    <Fragment key={props.key}>
      {dimensions && imageSource && imageCaption && (
        <div
          className="media"
          style={{
            maxWidth: `${dimensions.width}px`,
          }}
        >
          <NextImage
            className="media__image"
            src={imageSource}
            alt={imageCaption}
            priority={false}
            width={dimensions.width}
            height={dimensions.height}
          />
          {imageCaption && <p className="media__content">{imageCaption}</p>}
        </div>
      )}
    </Fragment>
  );
}

export { ImageComponent as Image };
