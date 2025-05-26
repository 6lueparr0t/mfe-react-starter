// apps/host/src/App.tsx
import React, { Suspense } from "react";

// 💡 remote1에서 Button 불러오기 (Module Federation!)
const RemoteButton = React.lazy(() => import("remote1/Button"));

function App() {
  return (
    <div style={{ padding: 40 }}>
      <h1>🌐 Host App</h1>
      <Suspense fallback={<p>Loading remote...</p>}>
        <RemoteButton />
      </Suspense>
    </div>
  );
}

export default App;
