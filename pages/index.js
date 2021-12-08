import QRCode from "qrcode";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [src, setSrc] = useState("");

  useEffect(() => {
    QRCode.toDataURL("https://www.youtube.com/watch?v=D24RgeqgUDA", {
      width: 300,
    }).then(setSrc);
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <img src={src} className={styles.qr} alt="QR code" />
      </main>
    </div>
  );
}
