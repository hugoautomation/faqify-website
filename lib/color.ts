export const getColor = (color: string) => {
  const colorMap: Record<string, string> = {
    red: "bg-red-500",
    redLight: "bg-red-300",
    amber: "bg-amber-500",
    amberLight: "bg-amber-300",
    green: "bg-green-500",
    greenLight: "bg-green-300",
    blue: "bg-blue-500",
    blueLight: "bg-blue-300",
    indigo: "bg-indigo-500",
    indigoLight: "bg-indigo-300",
    purple: "bg-purple-500",
    purpleLight: "bg-purple-300",
    cyan: "bg-cyan-500",
    cyanLight: "bg-cyan-300",
    orange: "bg-orange-500",
    orangeLight: "bg-orange-300",
  };
  return colorMap[color] || "bg-slate-500";
};
