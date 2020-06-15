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
    const icon = elements.getElementById("icon");
    const title = elements.getElementById("title");
    const headline = elements.getElementById("headline");
    const sidebar = elements.getElementById("sidebar");
    const rectangle = elements.getElementById("rectangle");

    gsap.set([background, product], { autoAlpha: 0 });
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    tl.fromTo(rectangle, { x: "-=400" }, { duration: 1, x: "+=400" })
      .to(background, { autoAlpha: 0.2, duration: 1 })
      .to(product, { autoAlpha: 1, duration: 1 });
  });

  return (
    <div ref={wrapper} className="App">
      <Scene />
    </div>
  );
}

export default App;
