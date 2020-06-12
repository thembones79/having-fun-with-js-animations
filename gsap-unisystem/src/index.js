import "./main.scss";
import { gsap } from "gsap";

let tl = gsap.timeline({ defaults: { duration: 1, ease: "power4.out" } });
tl.set("#background", { opacity: 0 })
  .set("#cts", { x: 491 })
  .set("#tft", { x: 374 })
  .set("#som", { x: 279 })
  .from("#cts, #tft, #som", { opacity: 0 })
  .from(".headline-logo", {
    scaleY: 0,
    opacity: 0,
    transformOrigin: "50% 50%",
    stagger: 0.2,
    duration: 0.4,
  })
  .from("#blueLine", {
    scaleX: 0,
    transformOrigin: "100% 50%",
  })
  .from("#displays_touch_screens_with_embedded_systems", {
    scale: 0,
    opacity: 0,
    transformOrigin: "90% 90%",
    duration: 0.8,
  })
  .addLabel("collapse")
  .to("#som", { x: 405 })
  .to("#tft", { x: 348 }, "collapse+=0.1")
  .to("#cts", { x: 297 }, "collapse+=0.1")
  .to("#background", { opacity: 1, duration: 2, ease: "power4.in" })
  .to("#unisystem-banner-en", { opacity: 0, duration: 0.5, delay: 5 })
  .repeat(-1);
