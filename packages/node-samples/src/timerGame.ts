import colors from "colors";

function timerGame(callback?: () => void) {
  console.log(colors.green("Ready....go!"));
  setTimeout(() => {
    console.log(colors.red("Time's up -- Stop!"));
    callback && callback();
  }, 1000);
}

export default timerGame;
