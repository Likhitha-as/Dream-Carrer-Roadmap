function ProgressBar({ progress }) {
  return (
    <div className="progress">
      <div
        style={{
          width: `${progress}%`,
          height: "100%",
          background: "linear-gradient(to right, #06b6d4, #3b82f6)",
          borderRadius: "20px",
        }}
      ></div>
    </div>
  );
}

export default ProgressBar;