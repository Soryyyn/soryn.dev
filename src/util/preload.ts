import React from "react";

// lazy import + preloads the component / view
export function lazyPreloadRoute(importedComponent: any) {
    return React.lazy(() => importedComponent);
}