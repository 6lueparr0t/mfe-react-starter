// apps/host/src/App.tsx
import React, { Suspense } from "react";
import { Button } from "@mfe/ui";
import ErrorBoundary from "./ErrorBoundary";

// 💡 remote1에서 App 불러오기 (Module Federation!)
const RemoteApp = React.lazy(() => import("remote1/App"));

function App() {
  return (
    <div style={{ padding: 40 }}>
      <h1 style={{ textAlign: "center" }}>🌐 Host App</h1>
      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <Button>package/ui import button</Button>
      </div>
      <Suspense fallback={<p>⌛ RemoteApp 로딩 중...</p>}>
        <ErrorBoundary fallback={<p>🚫 RemoteApp을 불러올 수 없어요.</p>}>
          <RemoteApp />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}

export default App;
