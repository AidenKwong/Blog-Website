import { useSelector } from "react-redux";
import Link from "next/link";

const MAIN = {
  display: "flex",
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
};

const MODAL = {
  backgroundColor: "#fff",
  padding: "30px",
  zIndex: 1000,
  border: "2px solid #199607",
  fontSize: " x-large",
  fontWeight: 600,
  whiteSpace: "pre-line",
  textAlign: "center",
  lineHeight: "2.5rem",
};

const BUTTON = {
  color: "#199607",
  border: "2px solid #199607",
  borderRadius: "10px",
  padding: "5px",
  fontSize: " medium",
  cursor: "pointer",
  width: "fit-content",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "2rem",
};

export default function OnPublishSuccess() {
  return (
    <div style={MAIN}>
      <div style={MODAL}>
        {"Congratulation! \n You have successfully published post "}

        <Link href="/">
          <div style={BUTTON}>Back to homepage</div>
        </Link>
      </div>
    </div>
  );
}
