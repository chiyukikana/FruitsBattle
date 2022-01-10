import $ from "jquery";
import { audio, levels, player, statistics, verify } from "../data/index.js";
import {
  antiCheatVerification,
  playSound,
  refreshStatus,
  runGame,
} from "../libs/index.js";
import bgm from "./bgm.js";
import "./icon";
import "./detail";
import "./history";

$("#STARTGAME")
  .one("click", () => bgm.play())
  .on("click", () => {
    if (player.isRunning) return;
    player.isRunning = !player.isStarted;
    // 刷新状态栏
    refreshStatus();
    // 暂时关闭游戏区域验证，等待其他项目验证完毕后再次打开。
    verify.LEAVING_THE_GAME_AREA.enabled = false;
    // 反作弊验证
    antiCheatVerification();
    // 打开游戏区域验证
    verify.LEAVING_THE_GAME_AREA.enabled = true;
    // 重置玩家的默认位置
    $("#fruit-basket").css({
      left:
        ($("#app") as any).width() / 2 -
        ($("#fruit-basket") as any).width() / 2,
      top: $("#app").height,
    });
    playSound({ src: audio.click });
    $("#readme").fadeOut(300, () => {
      $("#player-status").animate({ height: 42 }, 300, "swing");
      $("#fruit-basket").animate(
        {
          top:
            ($("#app") as any).height() / 2 -
            ($("#fruit-basket") as any).width() / 2,
        },
        600,
        "swing",
        runGame
      );
    });
  });

$("#RESTART").on("click", () => {
  if (!player.isRunning) return;
  player.isRunning = !player.isRunning;
  $("*:not(#readme)").removeAttr("style");
  levels.reset();
  player.reset();
  statistics.reset();
  const ev = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: false,
  });
  $("#STARTGAME")[0].dispatchEvent(ev);
});