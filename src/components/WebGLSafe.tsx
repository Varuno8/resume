import React, { Component, ErrorInfo, ReactNode, useState } from 'react';

// Check if WebGL is available
export const isWebGLAvailable = (): boolean => {
    try {
        const canvas = document.createElement('canvas');
        return !!(
            window.WebGLRenderingContext &&
            (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
        );
    } catch (e) {
        return false;
    }
};

// Error boundary to catch WebGL/Three.js runtime errors
export class WebGLErrorBoundary extends Component<
    { children: ReactNode; fallback: ReactNode },
    { hasError: boolean }
> {
    constructor(props: { children: ReactNode; fallback: ReactNode }) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.warn('WebGL/3D rendering failed, using fallback:', error.message);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }
        return this.props.children;
    }
}

interface WebGLSafeProps {
    children: ReactNode;
    fallback?: ReactNode;
}

// Wrapper component that checks WebGL availability and wraps children in error boundary
const WebGLSafe: React.FC<WebGLSafeProps> = ({ children, fallback = null }) => {
    const [webGLSupported] = useState(() => isWebGLAvailable());

    if (!webGLSupported) {
        return <>{fallback}</>;
    }

    return (
        <WebGLErrorBoundary fallback={fallback || <></>}>
            <React.Suspense fallback={fallback || <></>}>
                {children}
            </React.Suspense>
        </WebGLErrorBoundary>
    );
};

export default WebGLSafe;
