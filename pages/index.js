import QRCode from "qrcode";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.qr}>QR code</h1>
        <div className={styles.qr}>
          <div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="200"
                viewBox="0 0 37 37"
                shapeRendering="crispEdges"
              >
                <path fill="#ffffff" d="M0 0h37v37H0z"></path>
                <path
                  stroke="#000000"
                  d="M0 0.5h7m2 0h2m1 0h2m2 0h2m1 0h3m1 0h1m3 0h2m1 0h7M0 1.5h1m5 0h1m1 0h1m1 0h3m3 0h1m1 0h1m4 0h2m2 0h2m1 0h1m5 0h1M0 2.5h1m1 0h3m1 0h1m1 0h2m1 0h1m2 0h2m1 0h1m2 0h2m1 0h1m6 0h1m1 0h3m1 0h1M0 3.5h1m1 0h3m1 0h1m2 0h1m1 0h1m1 0h1m1 0h2m2 0h2m2 0h3m1 0h2m1 0h1m1 0h3m1 0h1M0 4.5h1m1 0h3m1 0h1m1 0h1m1 0h1m2 0h3m1 0h1m2 0h5m3 0h1m1 0h1m1 0h3m1 0h1M0 5.5h1m5 0h1m1 0h1m1 0h1m1 0h3m1 0h1m1 0h1m2 0h3m1 0h3m2 0h1m5 0h1M0 6.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M8 7.5h5m5 0h1m2 0h1m1 0h1m2 0h1M0 8.5h2m1 0h1m2 0h2m2 0h3m1 0h2m1 0h1m1 0h1m1 0h2m3 0h1m1 0h1m1 0h3m1 0h2M1 9.5h1m2 0h2m3 0h1m6 0h1m2 0h1m3 0h4m4 0h1m1 0h4M2 10.5h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1m1 0h1m1 0h1m1 0h2m2 0h3m3 0h1m2 0h1m1 0h1M3 11.5h1m1 0h1m3 0h2m3 0h1m4 0h1m5 0h2m1 0h2m1 0h1m2 0h3M6 12.5h1m1 0h2m1 0h4m1 0h10m1 0h6m1 0h2M1 13.5h1m2 0h2m1 0h1m1 0h1m3 0h1m1 0h3m2 0h2m1 0h1m1 0h2m1 0h2m5 0h2M1 14.5h1m4 0h3m1 0h2m1 0h1m1 0h1m1 0h4m2 0h1m2 0h1m2 0h3m3 0h1M1 15.5h3m1 0h1m2 0h4m1 0h1m1 0h2m2 0h1m1 0h3m3 0h1m1 0h1m1 0h3m1 0h2M1 16.5h1m1 0h1m1 0h2m2 0h2m1 0h2m2 0h1m1 0h1m1 0h3m2 0h1m2 0h1m2 0h2m3 0h1M4 17.5h2m1 0h1m6 0h1m1 0h8m1 0h3m1 0h3m1 0h1M0 18.5h2m3 0h3m1 0h1m2 0h1m2 0h2m3 0h1m1 0h1m8 0h1m1 0h2M0 19.5h1m2 0h1m4 0h1m3 0h1m3 0h3m1 0h10m2 0h1m2 0h1M3 20.5h1m2 0h1m4 0h7m3 0h3m3 0h1m2 0h1m4 0h1M4 21.5h1m3 0h1m4 0h2m1 0h1m2 0h4m2 0h1m3 0h1m3 0h4M0 22.5h2m4 0h5m2 0h1m1 0h2m1 0h1m2 0h1m2 0h1m2 0h6m1 0h1M3 23.5h1m3 0h1m2 0h1m3 0h1m3 0h1m1 0h1m1 0h4m3 0h2m1 0h3M0 24.5h1m2 0h2m1 0h2m4 0h4m1 0h1m1 0h1m4 0h2m5 0h1m1 0h2M1 25.5h5m1 0h3m1 0h3m3 0h1m1 0h1m1 0h2m3 0h2m1 0h1m1 0h1m4 0h1M0 26.5h1m5 0h1m1 0h1m3 0h6m1 0h1m3 0h1m2 0h1m2 0h2m1 0h1m1 0h1m1 0h1M1 27.5h3m1 0h1m2 0h3m1 0h3m2 0h3m1 0h1m2 0h1m1 0h1m1 0h2m1 0h2m1 0h1m1 0h1M0 28.5h5m1 0h1m1 0h1m1 0h3m1 0h1m6 0h1m3 0h1m2 0h9M8 29.5h1m3 0h2m1 0h1m3 0h2m1 0h3m2 0h2m3 0h5M0 30.5h7m1 0h2m2 0h1m1 0h2m1 0h1m5 0h1m1 0h1m1 0h2m1 0h1m1 0h1m3 0h1M0 31.5h1m5 0h1m5 0h1m3 0h2m1 0h1m2 0h3m3 0h1m3 0h3M0 32.5h1m1 0h3m1 0h1m2 0h1m2 0h6m1 0h1m1 0h5m2 0h7M0 33.5h1m1 0h3m1 0h1m1 0h2m3 0h1m2 0h1m2 0h1m2 0h3m1 0h3m1 0h1m2 0h3M0 34.5h1m1 0h3m1 0h1m2 0h1m3 0h1m1 0h4m1 0h3m1 0h8m1 0h1m1 0h2M0 35.5h1m5 0h1m1 0h1m2 0h1m2 0h2m2 0h3m1 0h2m1 0h1m1 0h1m3 0h2m1 0h1m1 0h1M0 36.5h7m1 0h1m1 0h1m1 0h1m4 0h2m1 0h2m2 0h3m4 0h3m2 0h1"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
