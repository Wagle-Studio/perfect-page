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

  const aspectRatio = dimensions
    ? (dimensions.height / dimensions.width) * 100
    : 0;

  return (
    <Fragment key={props.key}>
      {dimensions && (
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingBottom: `${aspectRatio}%`,
            overflow: "hidden",
          }}
        >
          <NextImage
            src={props.image_url}
            alt={props.content ?? "Missing alt text."}
            width={dimensions.width}
            height={dimensions.height}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      )}
    </Fragment>
  );
}

export { ImageComponent as Image };
