function lightBulb({ colorMode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 480.8 480.8"
      version="1.1"
      viewBox="0 0 480.8 480.8"
      xmlSpace="preserve"
      width="200px"
    >
      <path
        fill={colorMode === "light" ? "#FFD517" : "#111"}
        d="M317.112 314.4c-22.4 22.4-19.6 67.6-19.6 67.6h-113.6s2.4-45.2-19.6-67.6c-24.4-21.6-40-52.8-40-87.6 0-64 52-116 116-116s116 52 116 116c0 34.8-15.2 66-39.2 87.6z"
      ></path>
      <g fill={colorMode === "light" ? "#210B20" : "#E5E5E5"}>
        <path d="M300.712 417.6c0 6-4.8 10.8-10.8 10.8h-98.8c-6 0-10.8-4.8-10.8-10.8 0-6 4.8-10.8 10.8-10.8h98.4c6 0 11.2 4.8 11.2 10.8zM285.912 462.4c0 6-4.8 10.8-10.8 10.8h-69.2c-6 0-10.8-4.8-10.8-10.8 0-6 4.8-10.8 10.8-10.8h69.2c6 0 10.8 4.8 10.8 10.8z"></path>
      </g>
      <g fill={colorMode === "light" ? "#FFD517" : "#210B20"}>
        <path d="M323.112 318.4c26-23.6 40.8-56.8 40.8-91.6 0-68-55.6-123.6-123.6-123.6s-123.6 55.6-123.6 123.6c0 35.6 15.6 69.6 42 92.8 19.6 19.6 17.6 61.2 17.6 61.6 0 2 .8 4 2 5.6 1.6 1.6 3.6 2.4 5.6 2.4h113.2c2 0 4-.8 5.6-2.4s2-3.6 2-5.6c0-.4-2-42 17.6-61.6.4-.4.8-.8.8-1.2zm-11.2-10c-.8.4-1.2 1.2-1.6 2-17.6 18.8-20.4 49.6-20.8 64h-98c-.4-14.8-3.6-46.8-22.4-65.6-23.6-20.8-37.2-50.4-37.2-81.6 0-60 48.8-108.4 108.4-108.4 60 0 108.4 48.8 108.4 108.4 0 30.8-13.2 60.8-36.8 81.2z"></path>
        <path d="M240.312 135.2c-4 0-7.6 3.2-7.6 7.6 0 4 3.2 7.6 7.6 7.6 44.8 0 81.2 36.4 81.2 81.2 0 4 3.2 7.6 7.6 7.6 4 0 7.6-3.2 7.6-7.6 0-53.2-43.2-96.4-96.4-96.4zM308.312 417.6c0-10.4-8.4-18.4-18.4-18.4h-98.8c-10.4 0-18.4 8.4-18.4 18.4 0 10.4 8.4 18.4 18.4 18.4h98.4c10.4 0 18.8-8 18.8-18.4zm-18.8 3.2h-98.4c-2 0-3.2-1.6-3.2-3.2 0-2 1.6-3.2 3.2-3.2h98.4c2 0 3.2 1.6 3.2 3.2.4 2-1.2 3.2-3.2 3.2zM275.112 444h-69.2c-10.4 0-18.4 8.4-18.4 18.4 0 10.4 8.4 18.4 18.4 18.4h69.2c10.4 0 18.4-8.4 18.4-18.4 0-10-8.4-18.4-18.4-18.4zm0 21.6h-69.2c-2 0-3.2-1.6-3.2-3.2 0-2 1.6-3.2 3.2-3.2h69.2c2 0 3.2 1.6 3.2 3.2 0 2-1.2 3.2-3.2 3.2zM247.912 58.8V7.6c0-4-3.2-7.6-7.6-7.6-4 0-7.6 3.2-7.6 7.6v51.6c0 4 3.2 7.6 7.6 7.6 4.4-.4 7.6-3.6 7.6-8zM366.312 38c-3.6-2.4-8-1.2-10.4 2l-28.4 42.8c-2.4 3.6-1.2 8 2 10.4 1.2.8 2.8 1.2 4 1.2 2.4 0 4.8-1.2 6.4-3.2l28.4-42.8c2.4-3.2 1.2-8-2-10.4zM149.912 92.8c1.2 0 2.8-.4 4-1.2 3.6-2.4 4.4-6.8 2.4-10.4l-27.6-43.2c-2.4-3.6-6.8-4.4-10.4-2.4-3.6 2.4-4.4 6.8-2.4 10.4l27.6 43.2c1.6 2.4 4 3.6 6.4 3.6zM43.912 128.8l45.2 24.4c1.2.8 2.4.8 3.6.8 2.8 0 5.2-1.6 6.8-4 2-3.6.8-8.4-3.2-10.4l-45.2-24.4c-3.6-2-8.4-.8-10.4 3.2-1.6 4-.4 8.4 3.2 10.4zM387.912 154.4c1.2 0 2.4-.4 3.6-.8l45.2-24.4c3.6-2 5.2-6.4 3.2-10.4-2-3.6-6.4-5.2-10.4-3.2l-45.2 24.4c-3.6 2-5.2 6.4-3.2 10.4 1.2 2.4 4 4 6.8 4z"></path>
      </g>
    </svg>
  );
}

export default lightBulb;
