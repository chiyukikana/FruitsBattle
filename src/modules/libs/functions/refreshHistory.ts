import elements from "@/modules/config/common/elements";
import calcRepair from "@/libs/functions/calcRepair";
import timeFormat from "@/libs/functions/timeFormat";
import { StatisticProps } from "@/config/common/statistics";

const { nodes } = elements;
const refreshHistory = (): void => {
  type HistoryProps = {
    statistics: StatisticProps & { DIFFICULTY_LEVELS: number };
    timestamp: number;
  };
  const getHistory = JSON.parse(
    <string>window.localStorage.getItem("app_history")
  ) as HistoryProps[];
  if (getHistory) {
    const fillElements = getHistory.map((history: HistoryProps) => {
      const { statistics, timestamp } = history;
      const { PLAYTIME, SCORES } = statistics;
      const {
        TOTAL_ACHIEVEMENTS,
        TOTAL_FRUITS,
        TOTAL_BAD_FRUITS,
        TOTAL_MEDALS,
        DIFFICULTY_LEVELS,
      } = statistics;
      const mainChunk = () => {
        const historyDate = new Date(timestamp);
        return `<div><p>${historyDate.getFullYear()}/${
          historyDate.getMonth() + 1
        }/${historyDate.getDate()} ${historyDate.getHours()}:${
          historyDate.getMinutes() < 10
            ? `0${historyDate.getMinutes()}`
            : historyDate.getMinutes()
        }</p><p>游戏时间 <span class="countdown-color">${timeFormat(
          Math.floor(PLAYTIME)
        )}</span></p><p>最终得分 <span class="base-scores">${calcRepair(
          SCORES
        )}</span></p></div>`;
      };
      const detailChunk = () =>
        `<div><p>最高难度等级 <span class="current-levels">Lv.${DIFFICULTY_LEVELS}</p><p>达成的成就数 ${TOTAL_ACHIEVEMENTS}</p><p>获得的奖牌数 ${TOTAL_MEDALS}</p></div>`;
      const countChunk = () =>
        `<div><p>总计拾取水果 <span class="healthy-fruits">${TOTAL_FRUITS}</span></p><p>总计拾取腐烂水果 <span class="bad-fruits">${TOTAL_BAD_FRUITS}</span></p></div>`;
      return `<div>${mainChunk()}${detailChunk()}${countChunk()}</div>`;
    });
    nodes.readme.historyElement.html(fillElements as never);
  } else {
    nodes.readme.historyElement.html('<h1 id="none-saves">暂无游戏记录</h1>');
  }
};

export default refreshHistory;
