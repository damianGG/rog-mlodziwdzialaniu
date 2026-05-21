import Image from "next/image";
import { DetailedHTMLProps, HTMLAttributes } from "react";

// ====================================================
interface FigureImageProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  src: string;
  width: number;
  height: number;
  className?: string;
}
// ====================================================

export default function FigureImage(props: FigureImageProps) {
  const { className, src, width, height, ...others } = props;

  return (
    <figure className={className} {...others}>
      <Image src={src} alt="demo" width={width} height={height} className="w-md-100 w-50 h-auto" />
    </figure>
  );
}
