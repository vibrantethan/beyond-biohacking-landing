"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: { portalId: string; formId: string; region: string; target: string }) => void;
      };
    };
  }
}

export default function SignupForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptId = "hs-forms-script";

    const init = () => {
      if (window.hbspt && containerRef.current) {
        window.hbspt.forms.create({
          portalId: "22446299",
          formId: "bb7f72f2-ab31-457f-9af0-789c5fafaaca",
          region: "na1",
          target: "#hs-form-container",
        });
      }
    };

    if (document.getElementById(scriptId)) {
      init();
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.onload = init;
    document.head.appendChild(script);
  }, []);

  return (
    <div className="form-card">
      <div className="form-card-bar" />
      <div id="hs-form-container" ref={containerRef} />
    </div>
  );
}
