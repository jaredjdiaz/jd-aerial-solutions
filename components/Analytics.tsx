"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const measurementId = "G-T95B8RZ5BC";
const consentKey = "jd-aerial-analytics-consent";

export default function Analytics() {
  const [consent, setConsent] = useState<"accepted" | "declined" | null>(null);

  useEffect(() => {
    const savedConsent = window.localStorage.getItem(consentKey);
    if (savedConsent === "accepted" || savedConsent === "declined") setConsent(savedConsent);
  }, []);

  const chooseConsent = (choice: "accepted" | "declined") => {
    window.localStorage.setItem(consentKey, choice);
    setConsent(choice);
  };

  return <>
    {consent === "accepted" && <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${measurementId}');
      `}</Script>
    </>}
    {consent === null && <aside className="analytics-consent" aria-label="Analytics cookie choice">
      <p>We use optional analytics to understand site traffic and improve the website. <a href="/privacy">Privacy Policy</a></p>
      <div><button type="button" onClick={() => chooseConsent("declined")}>Decline</button><button type="button" onClick={() => chooseConsent("accepted")}>Accept</button></div>
    </aside>}
  </>;
}
