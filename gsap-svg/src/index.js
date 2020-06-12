import "./main.scss";
import { gsap, TweenMax, TimelineMax } from "gsap";

const tl = new TimelineMax();
tl.from("#bowl", 1, { x: "-480", opacity: 0, ease: "Power1.easeOut" });
tl.from("#sushi1", 1, {
  y: "-480",
  opacity: 0,
  rotation: 20,
  transformOrigin: "50% 50%",
  ease: "Bounce.easeOut",
});
tl.from(
  "#sushi2",
  1,
  {
    y: "-380",
    opacity: 0,
    rotation: -70,
    transformOrigin: "50% 50%",
    ease: "Bounce.easeOut",
  },
  "-=0.7"
);
tl.from("#chopstick1", 1, {
  y: "-480",
  opacity: 0,
  rotation: 20,
  transformOrigin: "50% 50%",
  ease: "Power1.easeOut",
});
tl.from(
  "#chopstick2",
  1,
  {
    y: "-380",
    opacity: 0,
    rotation: -70,
    transformOrigin: "50% 50%",
    ease: "Power1.easeOut",
  },
  "-=0.7"
);

tl.from("#bg1", 1, { x: "780", opacity: 0, ease: "Power1.easeOut" });
tl.from("#bg2", 1, { x: "480", opacity: 0, ease: "Power1.easeOut" }, "-=0.9");
