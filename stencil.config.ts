import { Config } from "@stencil/core";
import { reactOutputTarget } from "@stencil/react-output-target";

export const config: Config = {
    namespace: "logic-components",
    outputTargets: [
        {
            type: "dist",
            esmLoaderPath: "../loader",
        },
        {
            type: "dist-custom-elements-bundle",
        },
        {
            type: "docs-readme",
        },
        {
            type: "www",
            serviceWorker: null, // disable service workers
        },
        reactOutputTarget({
            componentCorePackage: "@rhazn/logic-components",
            proxiesFile: "../logic-components-react/src/components.ts",
            includeDefineCustomElements: true,
        }),
    ],
};
