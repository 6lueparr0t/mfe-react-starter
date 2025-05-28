// apps/host/src/ErrorBoundary.tsx
import React from "react";

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, errorInfo: unknown) {
    console.error("🧨 RemoteApp Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <p>⚠️ RemoteApp 로딩 실패!</p>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
