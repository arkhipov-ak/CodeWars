function weatherInfo(temp) {
  const f = (temp - 32) * 5 / 9;
  return f < 0 ? `${f} is freezing temperature` : `${f} is above freezing temperature`;
}