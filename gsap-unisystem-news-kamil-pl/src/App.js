import React, { useRef, useEffect } from "react";
import { ReactComponent as Scene } from "./banner_kamil_pl.svg";
import "./App.css";
import gsap from "gsap";

function App() {
  const wrapper = useRef(null);

  useEffect(() => {
    const [elements] = wrapper.current.children;
    const hq = elements.getElementById("hq");
    const kamilPhoto = elements.getElementById("kamilPhoto");
    const subheadline = elements.getElementById("subheadline");
    const icon = elements.getElementById("icon-2");
    const title = elements.getElementById("title-2");
    const headline = elements.getElementById("headline-2");
    const sidebar = elements.getElementById("sidebar");
    const rectangle = elements.getElementById("rectangle");
    const quote = elements.getElementById("quote");
    const iconQuote = elements.getElementById("iconQuote");

    gsap.set([hq, kamilPhoto], { autoAlpha: 0 });
    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut", duration: 1 },
    });

    tl.to(hq, { autoAlpha: 0.15, ease: "power4.in" })
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
      .from(subheadline, {
        y: "-=30",
        autoAlpha: 0,
        scaleY: 0,
        ease: "elastic",
        duration: 1.2,
      })
      .fromTo(
        kamilPhoto,
        { scale: 0.1, transformOrigin: "50% 50%", rotation: 200 },
        { autoAlpha: 1, scale: 1.2, ease: "back", rotation: 0 },
        "-=0.5"
      )
      .from(iconQuote, {
        scale: 0.2,
        y: "+=50",
        transformOrigin: "50% 50%",
        autoAlpha: 0,
        ease: "back",
      })
      .from(
        quote,
        {
          scaleX: 0,
          y: "+=100",
          transformOrigin: "100% -150%",
          autoAlpha: 0,
          ease: "back",
        },
        "-=0.6"
      )
      .fromTo(
        kamilPhoto,
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
