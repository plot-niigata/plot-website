import style from "./WorksSlider.module.css";
import WorkItem from "./workItem/WorkItem";
import type { Work } from "../types/global";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const apiUrl = "https://prm2ykvwe8.microcms.io/api/v1/works";
const baseHeaders = {
  headers: { "X-MICROCMS-API-KEY": "e5286cb7434f40bcbaca4b625c68f8a974a4" },
};
const response = await fetch(apiUrl, baseHeaders);
const works = await response.json().then((data) => data.works);

const WorksSlider = () => {
  return (
    <Splide
      options={{
        type: "loop",
        rewind: true,
        width: "40em",
        height: "45em",
        gap: "1rem",
        autoplay: true,
      }}
    >
      {works.map((work: Work, index: number) => {
        return (
          <SplideSlide key={index}>
            <WorkItem work={work} />
          </SplideSlide>
        );
      })}
    </Splide>
  );
};

export default WorksSlider;
