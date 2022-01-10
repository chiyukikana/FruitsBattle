import $ from "jquery";
import { calcRepair } from "../index";

function showDetails({ id, pos, before, after, extra, fixed }: ShowDetails) {
  const getPos = pos;

  function send(className: string, text: string | number) {
    $("<span/>")
      .appendTo($("#app"))
      .addClass(`pickup ${className}`)
      .html(() => {
        const extraClass = extra ? extra() : "";

        return `<span class="picked-icon picked-${id} ${extraClass}"></span> ${text}`;
      })
      .css({
        left() {
          // 阻止拾取后显示的信息超出游戏区域
          if (getPos.x < 0) getPos.x = 0;
          if (
            getPos.x >
            ($("#app") as any).width() - ($(this) as any).width()
          ) {
            getPos.x = ($("#app") as any).width() - ($(this) as any).width();
          }

          return getPos.x;
        },
        top() {
          if (getPos.y < 0) getPos.y = 0;
          if (
            getPos.y >
            ($("#app") as any).height() -
              ($("#player-status") as any).height() -
              ($(this) as any).height()
          ) {
            getPos.y =
              ($("#app") as any).height() -
              ($("#player-status") as any).height() -
              ($(this) as any).height();
          }

          return getPos.y;
        },
      })
      .fadeOut(1500, function () {
        $(this).remove();
      });
  }

  if (after > before) {
    send(
      "get",
      "+" +
        calcRepair({
          formula: after - before,
          ceil: false,
          fixed,
        })
    );
  } else {
    send(
      "lose",
      calcRepair({
        formula: after - before,
        ceil: true,
        fixed,
      })
    );
  }
}

export default showDetails;