const statistics: StatisticProps = {
  // 游戏分数
  SCORES: 0,
  // 游戏持续时间
  PLAYTIME: 0,
  // 技能使用次数
  USE_SKILLS: 0,
  // 总计拾取水果的个数
  TOTAL_FRUITS: 0,
  // 总计拾取腐烂水果的个数
  TOTAL_BAD_FRUITS: 0,
  // 水果奖励分数
  REWARD_SCORES_ARRAY: [],
  // 拾取健康水果计数
  HEALTHY_FRUIT_COUNTS: 0,
  // 拾取腐烂水果计数
  BAD_FRUIT_COUNTS: 0,
  // 道具CAKE影响玩家最终分数的变量
  CAKE_ITEM_INFLUENCE_VALUE: 1,
  // 生成的水果的计数
  SUMMONED_FRUIT_COUNTS: 0,
  // 总计达成的成就个数
  TOTAL_ACHIEVEMENTS: 0,
  // 总计获得的奖章个数
  TOTAL_MEDALS: 0,
  // 开始游戏后从未发生过移动
  NEVER_MOVED: true,
  // 实体生成冷却时间
  SUMMON_CD: 0,
};
const statisticsCopied: StatisticProps = { ...statistics };

interface StatisticProps {
  SCORES: number;
  PLAYTIME: number;
  USE_SKILLS: number;
  TOTAL_FRUITS: number;
  TOTAL_BAD_FRUITS: number;
  REWARD_SCORES_ARRAY: number[];
  HEALTHY_FRUIT_COUNTS: number;
  BAD_FRUIT_COUNTS: number;
  CAKE_ITEM_INFLUENCE_VALUE: number;
  SUMMONED_FRUIT_COUNTS: number;
  TOTAL_ACHIEVEMENTS: number;
  TOTAL_MEDALS: number;
  NEVER_MOVED: boolean;
  SUMMON_CD: number;
}

export { StatisticProps };

export default statistics;
export { statisticsCopied };
