export default function getTimeFromSeconds(seconds) {
  const date = new Date(seconds * 1000);
  const [_, m, s] = date.toLocaleTimeString().split(":");
  const h = date.getUTCHours();

  return [h ? h : undefined, m, s].filter((el) => el).join(":");
}
