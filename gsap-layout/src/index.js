import "./main.scss";
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(CSSRulePlugin);

const rule = CSSRulePlugin.getRule("span:after");
/*
gsap.from(".anim1", {
  opacity: 0,
  duration: 1,
  y: -50,
  ease: "Power2.easeOut",
  stagger: 0.6,
});

gsap.from("img", {
  opacity: 0,
  duration: 1,
  y: 30,
  ease: "Power2.easeOut",
  delay: 1.4,
});
gsap.to(rule, { cssRule: { scaleY: 0 }, duration: 1 });
gsap.from("aside", {
  opacity: 0,
  duration: 1,
  backgroundPosition: "200px 0px",
  ease: "Power2.easeOut",
  delay: 1.1,
});
*/

let tl = gsap.timeline({ defaults: { duration: 1 } });
tl.from(".anim1", { y: -50, stagger: 0.6, opacity: 0 })
  .to(rule, { duration: 1.8, cssRule: { scaleY: 0 } }, "-=2.2")
  .from("aside", { opacity: 0, backgroundPosition: "200px 0px" }, "-=1.5")
  .from("img", { opacity: 0, y: 130 }, "-=0.5");

document.getElementById("cta").addEventListener("click", () => {
  tl.reversed() ? tl.play() : tl.reverse();
});
