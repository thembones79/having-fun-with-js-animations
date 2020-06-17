import React, { useRef, useEffect } from "react";
import { ReactComponent as Scene } from "./news_banner.svg";
import "./App.css";
import gsap from "gsap";

function App() {
  const wrapper = useRef(null);

  useEffect(() => {
    const [elements] = wrapper.current.children;
    const background = elements.getElementById("background");
    const product = elements.getElementById("product-2");
    const arrow_w_txt = elements.getElementById("arrow_w_txt");
    const logo = elements.getElementById("logo");
    const icon = elements.getElementById("icon-2");
    const title = elements.getElementById("title-2");
    const headline = elements.getElementById("headline-2");
    const sidebar = elements.getElementById("sidebar");
    const rectangle = elements.getElementById("rectangle");

    gsap.set([background, product], { autoAlpha: 0 });
    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut", duration: 1 },
    });

    tl.to(background, { autoAlpha: 0.15, ease: "power4.in" })
      .from(sidebar, {
        x: "-=400",
        autoAlpha: 0,
        ease: "power4.out",
        duration: 0.6,
      })
      .from(icon, { y: "+=200", autoAlpha: 0, ease: "power4.out" }, "-=0.2")
      .from(title, { scaleX: 0, y: "+=300", autoAlpha: 0 }, "-=1")
      .from(rectangle, {
        rotation: "200",
        scale: 0,
        transformOrigin: "50% 50%",
        autoAlpha: 0,
        ease: "back",
      })
      .from(headline, { scaleX: 0, autoAlpha: 0 }, "-=0.5")
      .from(logo, {
        scale: 0,
        autoAlpha: 0,
        ease: "elastic",
        durarion: 1.7,
        transformOrigin: "50% 50%",
      })
      .fromTo(
        product,
        { scale: 0.2, transformOrigin: "50% 50%" },
        { autoAlpha: 1, scale: 1.2, ease: "back" }
      )
      .from(arrow_w_txt, {
        y: "+=300",
        autoAlpha: 0,
        ease: "elastic",
        duration: 1.2,
      })
      .fromTo(
        product,
        { scale: 1.2, transformOrigin: "50% 50%" },
        {
          scale: 1.25,
          repeat: -1,
          yoyo: true,
          repeatDelay: 0,
          duration: 0.9,
          delay: 2,
          ease: "power1.in",
        }
      );
  });

  return (
    <div ref={wrapper} className="App">
      <Scene />
    </div>
  );
}

export default App;
