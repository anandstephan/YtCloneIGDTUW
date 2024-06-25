// import AgoraRTC from "agora-rtc-sdk-ng";
// import { AgoraRTCProvider } from "agora-rtc-react";

// import ReactDOM from "react-dom/client";

// const Client = ({ children }) => {
//   return (
//     <AgoraRTCProvider
//       client={AgoraRTC.createClient({ mode: "rtc", codec: "vp8" })}
//     >
//       {children}
//     </AgoraRTCProvider>
//   );
// };
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Client />);
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
