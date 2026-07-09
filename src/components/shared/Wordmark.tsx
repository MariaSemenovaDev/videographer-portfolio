export function Wordmark() {
  return (
    <svg
      aria-hidden="true"
      className="wordmark-svg"
      fill="none"
      viewBox="0 0 1520 130"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="wordmark-gradient"
          x1="760"
          x2="760"
          y1="0"
          y2="130"
        >
          <stop stopColor="#4d4c4a" />
          <stop offset="1" stopColor="#000000" />
        </linearGradient>
      </defs>
      <text
        className="wordmark-svg__line"
        fill="url(#wordmark-gradient)"
        fillOpacity="0.2"
        x="760"
        y="100"
      >
        ВЕРТЕЛЕЦКИЙ МАКСИМ
      </text>
    </svg>
  );
}
