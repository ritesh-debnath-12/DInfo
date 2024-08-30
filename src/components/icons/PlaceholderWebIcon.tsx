import { SVGProps } from "react";
import Image from "next/image";

export default function PlaceholderWebIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <Image width="50" height="50" src="https://img.icons8.com/ios-filled/50/tornado.png" alt="tornado"/>
  );
}
