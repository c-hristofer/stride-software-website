"use client";

import { useEffect, useState } from "react";
import ContactView from "./contact-view";
import DayBoundView from "./daybound-view";
import StrengthPlanView from "./strengthplan-view";

type PageKey = "contact" | "daybound" | "strengthplan";

function pageFromHash(fallback: PageKey = "contact"): PageKey {
  if (typeof window === "undefined") return "contact";
  const key = window.location.hash.replace(/^#/, "");
  if (key === "daybound" || key === "strengthplan") return key;
  if (!key) return "contact";
  return fallback;
}

export default function SinglePageSite() {
  const [page, setPage] = useState<PageKey>("contact");

  useEffect(() => {
    const syncPage = () => setPage((currentPage) => pageFromHash(currentPage));
    syncPage();
    window.addEventListener("hashchange", syncPage);
    return () => window.removeEventListener("hashchange", syncPage);
  }, []);

  if (page === "daybound") return <DayBoundView />;
  if (page === "strengthplan") return <StrengthPlanView />;
  return <ContactView />;
}
