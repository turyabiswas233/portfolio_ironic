import React, { useState, useEffect } from "react";
import { CircleProgress } from "react-gradient-progress";

function ProgressBar({ timer, data }) {
  let value = data?.value;
  let type = data?.type;
  const gradient = ["#531da9", "#fd1ca5"];
  const [progress, setprogress] = useState(0);
  let pcY = timer?.mountPC;
  let mbY = timer?.mountMB;

  //   if scroll up, then hide skills
  useEffect(() => {
    setprogress(0);
  }, [pcY < 100, mbY < 50]);

  //   while showing skills, make animation to components
  useEffect(() => {
    let loop = setInterval(() => {
      if (progress < value) {
        setprogress((pre) => pre + 1);
      }
    }, 15);
    return () => clearInterval(loop);
  }, [progress < value]);

  return (
    <article
      className={`transition-all duration-1000
      grid justify-center items-center  ${
        pcY > 100 || mbY > 50
          ? "translate-x-0 opacity-100 "
          : "translate-x-10 opacity-0 "
      }
    `}
    >
      <CircleProgress
        percentage={progress}
        strokeWidth={15}
        width={180}
        fontColor={"rgb(244,50,63)"}
        fontSize={"1.5em"}
        fontFamily={"sans-serif"}
        primaryColor={gradient}
      />
      <p className="text-center uppercase text-rose-500">{type}</p>
    </article>
  );
}

export default ProgressBar;
