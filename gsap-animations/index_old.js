const frames = document.querySelectorAll(".frame");

const tl = new TimelineMax({ delay: 2 });

tl.set(frames, { visibility: "visible" });
tl.from(frames, 2, { opacity: 0 })
  .addLabel("moveboxes")
  .to(frames[0], 1, { x: -50, y: 50 })
  .to(frames[2], 1, { x: 50, y: -50 }, "moveboxes")
  .addLabel("boxesOnSides")
  .to([frames[0], frames[2]], 2, {
    backgroundColor: "hsl(0,0%,5%)",
    borderColor: "transparent",
  })
  .to(frames[0], 1, { x: -300, y: 0 }, "boxesOnSides")
  .to(frames[2], 1, { x: 300, y: 0 }, "boxesOnSides")
  .addLabel("hideBehindBoxes")
  .set([frames[0], frames[2]], { zIndex: 99 })
  .to(frames[1], 2, { backgroundColor: "white" })
  .to([frames[0], frames[2]], 5, { x: 0 }, "hideBehindBexes+=3");
