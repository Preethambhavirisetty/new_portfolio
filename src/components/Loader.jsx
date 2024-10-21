import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "90px", // Adjust this value to move the loader down
      }}
    >
      <span className='canvas-loader' style={{ marginTop: "20px" }}></span> {/* Add margin to the loader itself */}
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 10, // Adjust this value for spacing between loader and progress text
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
