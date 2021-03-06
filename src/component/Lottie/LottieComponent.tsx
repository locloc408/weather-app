import React, { FC, useEffect, useState } from "react";
import Lottie from "react-lottie-player";
/* eslint-disable import/first */
interface LottieComponentProps {
  src: string | null;
  props: any;
}
export const LottieComponent: FC<LottieComponentProps> = ({ src, props }) => {
  useEffect(() => {
    if (src) {
      import(`../../asset/${src}`).then((value) => setAnimationData(value));
    }
  }, [src]);
  const [animationData, setAnimationData] = useState<any>();

  return <Lottie animationData={animationData} speed={2} {...props}></Lottie>;
};
