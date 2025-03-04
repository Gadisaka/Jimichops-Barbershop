"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function Call() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("floatingButton", {
        calLink: "gadisa-kasaye-tz2qwp/30min",
        config: { layout: "month_view" },
      });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
}
