(() => {
  type Avengers = {
    nick: string;
    ironmam: string;
    vision: string;
    activo: boolean;
    poder: number;
  };

  const avengers: Avengers = {
    nick: "samuel l. jackson",
    ironmam: "Robert Downey jr.",
    vision: "Paul Bettany",
    activo: true,
    poder: 15000.6983276479832,
  };

  //   const { poder, vision } = avengers;
  //   console.log(poder.toFixed(2), vision.toUpperCase());

  const printAvenger = ({ ironmam, ...resto }: Avengers) => {
    console.log(ironmam, resto);
  };

  // printAvenger(avengers);

  // desustructuracion con Array

  const avengerArr: [string, boolean, number] = ["cap. America", true, 150.15];

  const [capitan, ironmam, seriaUnNumero] = avengerArr;

  // console.log({ ironmam, capitan });
})();
