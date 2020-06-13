import "./index.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".dark",
    start: "center bottom",
  },
});

tl.from("img", { x: 200, opacity: 0, duration: 1.5 }).from(
  ".content",
  {
    y: 300,
    opacity: 0,
    duration: 1,
  },
  "-=1"
);

gsap.to(".box", {
  scrollTrigger: { trigger: ".box", start: "bottom center" },
  x: 500,
});
