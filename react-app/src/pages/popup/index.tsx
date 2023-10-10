import React from "react";
import { createRoot } from "react-dom/client";
import Popup from "@pages/popup/Popup";
import refreshOnUpdate from "virtual:reload-on-update-in-view";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@root/utils/core/query-client/query-client";

refreshOnUpdate("pages/popup");

function init() {
  const appContainer = document.querySelector("#app-container");
  if (!appContainer) {
    throw new Error("Can not find #app-container");
  }

  const root = createRoot(appContainer);
  root.render(
    <QueryClientProvider client={queryClient}>
      <Popup />
    </QueryClientProvider>
  );
}

init();
