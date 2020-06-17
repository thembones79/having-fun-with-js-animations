import React, { useRef, useEffect } from "react";
import { ReactComponent as Scene } from "./banner_michal_en.svg";
import "./App.css";
import { gsap, TweenLite, TweenMax } from "gsap";

function App() {
  const wrapper = useRef(null);

  useEffect(() => {
    const [elements] = wrapper.current.children;
    const hq = elements.getElementById("hq");
    const slawekPhoto = elements.getElementById("slawekPhoto");
    const subheadline = elements.getElementById("subheadline");
    const icon = elements.getElementById("icon-2");
    const title = elements.getElementById("title-2");
    const headline = elements.getElementById("headline-2");
    const sidebar = elements.getElementById("sidebar");
    const rectangle = elements.getElementById("rectangle");
    const quote = elements.getElementById("quote");
    const iconQuote = elements.getElementById("iconQuote");

    gsap.set([hq, slawekPhoto], { autoAlpha: 0 });
    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut", duration: 1 },
    });

    tl.to(hq, { autoAlpha: 1, ease: "power4.in" })
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
        slawekPhoto,
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
      );

    var rotateCD,
      pauseTween,
      spinning = false,
      audio = document.createElement("audio");

    audio.loop = true;
    audio.src =
      "https://upload.wikimedia.org/wikipedia/en/d/d8/You_Spin_Me_Round_by_Dead_or_Alive.ogg";

    rotateCD = new TweenMax(slawekPhoto, 2, {
      rotation: 900,
      ease: "none",
      repeat: -1,
      paused: true,
    }).timeScale(0);

    function start() {
      rotateCD.play();
      TweenLite.to(rotateCD, 4, { timeScale: 4 });
      pauseTween && pauseTween.kill();
      if (audio.paused) TweenLite.set(audio, { volume: 0, playbackRate: 0.5 });
      TweenLite.to(audio, 4, { volume: 1, playbackRate: 1 });
      audio.play();
    }

    function stop() {
      TweenLite.to(rotateCD, 4, {
        timeScale: 0,
        onComplete: function () {
          this.pause();
        },
      });

      pauseTween && pauseTween.kill();
      pauseTween = TweenLite.to(audio, 4, {
        volume: 0,
        playbackRate: 0.5,
        onComplete: audio.pause,
        callbackScope: audio,
      });
    }

    slawekPhoto.onclick = function () {
      if (!spinning) {
        start();
        spinning = true;
      } else {
        stop();
        spinning = false;
      }
    };
  });

  return (
    <div ref={wrapper} className="App">
      <Scene />
    </div>
  );
}

export default App;
