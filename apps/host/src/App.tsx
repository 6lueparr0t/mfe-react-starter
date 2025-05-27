// apps/host/src/App.tsx
import React, { Suspense } from "react";
import { Button } from "@mfe/ui";

// 💡 remote1에서 App 불러오기 (Module Federation!)
const RemoteApp = React.lazy(() => import("remote1/App"));

function App() {
  return (
    <div style={{ padding: 40 }}>
      <h1 style={{ textAlign: "center" }}>
        🌐 Host App
        <Button>test</Button>
      </h1>
      <Suspense fallback={<p>Loading remote...</p>}>
        <RemoteApp />
      </Suspense>
    </div>
  );
}

export default App;
