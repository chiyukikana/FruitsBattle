import countdown_test from "@/test/countdown.test";

const player: PlayerProps = {
  // 剩余生命值，最大上限为10。
  health: 5,
  // 魔力值，初始为50，每3秒回复1点，最大上限为100。
  mana: 50,
  // 玩家未进行移动行为的计时
  not_moving_ticks: 0,
  // 游戏倒计时。
  countdown: countdown_test.enabled ? countdown_test.value : 90,
  // 游戏运行状态
  isRunning: false,
  // 游戏结束状态
  isEnded: false,
};
const playerCopied: PlayerProps = { ...player };

interface PlayerProps {
  health: number;
  mana: number;
  not_moving_ticks: number;
  countdown: number;
  isRunning: boolean;
  isEnded: boolean;
}

export { PlayerProps };

export default player;
export { playerCopied };
