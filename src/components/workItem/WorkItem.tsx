import type { Work } from "../../types/global";
import style from "./WorkItem.module.css";

export type Props = { work: Work };

const WorkItem = (props: Props) => {
  const work = props.work;
  return (
    <div className={style["card-container"]}>
      <div className={style["card-header"]}>
        <h2 className={style.title}>{work.title}</h2>
        <p clasNames={style.developer}>created by {work.developer}</p>
      </div>
      <div className={style["card-main"]}>
        <img src={work.image.url} />
        <p>{work.description}</p>
        <div className={style["technology-container"]}>
          {work.technologies.map((item) => {
            return <p className={style.technology}>{item.technology}</p>;
          })}
        </div>
        <div className={style["link-container"]}>
          <a href={work.link} className={style.link}>
            リンクはこちら
          </a>
        </div>
      </div>
    </div>
  );
};
export default WorkItem;
