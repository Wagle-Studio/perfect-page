import { Fragment, useEffect, useState } from "react";
import NextImage from "next/image";

export type ImageProps = {
  key: number;
  content: string;
  image_url: string;
};

function ImageComponent(props: ImageProps) {
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = props.image_url;
    img.onload = () => {
      setDimensions({ width: img.width, height: img.height });
    };
  }, [props.image_url]);

  return (
    <Fragment key={props.key}>
      {dimensions && (
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: `${dimensions.width}px`,
            height: "auto",
          }}
        >
          <NextImage
            src={props.image_url}
            alt={props.content ?? "Missing alt text."}
            priority={false}
            width={dimensions.width}
            height={dimensions.height}
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>
      )}
    </Fragment>
  );
}

export { ImageComponent as Image };
