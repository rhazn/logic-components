/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Interpretation, PropositionalSyntax, PropositionalWorld } from "@rhazn/logic-ts";
export namespace Components {
    interface CreateSyntax {
    }
    interface PropositionalWorldComponent {
        /**
          * Interpretation for the world
         */
        "interpretation": Interpretation;
        /**
          * Propositional Syntax for the world
         */
        "syntax": PropositionalSyntax;
    }
    interface ShowSignature {
        "signature": PropositionalSyntax;
    }
    interface WorldPreference {
        /**
          * Allow empty rows or not
         */
        "allowEmptyRows": Boolean;
        /**
          * Preference over worlds
         */
        "preference": PropositionalWorld[][];
    }
    interface WorldSelector {
        /**
          * List of worlds
         */
        "worlds": PropositionalWorld[];
    }
}
declare global {
    interface HTMLCreateSyntaxElement extends Components.CreateSyntax, HTMLStencilElement {
    }
    var HTMLCreateSyntaxElement: {
        prototype: HTMLCreateSyntaxElement;
        new (): HTMLCreateSyntaxElement;
    };
    interface HTMLPropositionalWorldComponentElement extends Components.PropositionalWorldComponent, HTMLStencilElement {
    }
    var HTMLPropositionalWorldComponentElement: {
        prototype: HTMLPropositionalWorldComponentElement;
        new (): HTMLPropositionalWorldComponentElement;
    };
    interface HTMLShowSignatureElement extends Components.ShowSignature, HTMLStencilElement {
    }
    var HTMLShowSignatureElement: {
        prototype: HTMLShowSignatureElement;
        new (): HTMLShowSignatureElement;
    };
    interface HTMLWorldPreferenceElement extends Components.WorldPreference, HTMLStencilElement {
    }
    var HTMLWorldPreferenceElement: {
        prototype: HTMLWorldPreferenceElement;
        new (): HTMLWorldPreferenceElement;
    };
    interface HTMLWorldSelectorElement extends Components.WorldSelector, HTMLStencilElement {
    }
    var HTMLWorldSelectorElement: {
        prototype: HTMLWorldSelectorElement;
        new (): HTMLWorldSelectorElement;
    };
    interface HTMLElementTagNameMap {
        "create-syntax": HTMLCreateSyntaxElement;
        "propositional-world-component": HTMLPropositionalWorldComponentElement;
        "show-signature": HTMLShowSignatureElement;
        "world-preference": HTMLWorldPreferenceElement;
        "world-selector": HTMLWorldSelectorElement;
    }
}
declare namespace LocalJSX {
    interface CreateSyntax {
        "onSyntaxUpdated"?: (event: CustomEvent<PropositionalSyntax>) => void;
    }
    interface PropositionalWorldComponent {
        /**
          * Interpretation for the world
         */
        "interpretation"?: Interpretation;
        /**
          * Propositional Syntax for the world
         */
        "syntax"?: PropositionalSyntax;
    }
    interface ShowSignature {
        "signature"?: PropositionalSyntax;
    }
    interface WorldPreference {
        /**
          * Allow empty rows or not
         */
        "allowEmptyRows"?: Boolean;
        "onPreferenceChanged"?: (event: CustomEvent<PropositionalWorld[][]>) => void;
        /**
          * Preference over worlds
         */
        "preference"?: PropositionalWorld[][];
    }
    interface WorldSelector {
        "onWorldDeselected"?: (event: CustomEvent<PropositionalWorld>) => void;
        "onWorldSelected"?: (event: CustomEvent<PropositionalWorld>) => void;
        /**
          * List of worlds
         */
        "worlds"?: PropositionalWorld[];
    }
    interface IntrinsicElements {
        "create-syntax": CreateSyntax;
        "propositional-world-component": PropositionalWorldComponent;
        "show-signature": ShowSignature;
        "world-preference": WorldPreference;
        "world-selector": WorldSelector;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "create-syntax": LocalJSX.CreateSyntax & JSXBase.HTMLAttributes<HTMLCreateSyntaxElement>;
            "propositional-world-component": LocalJSX.PropositionalWorldComponent & JSXBase.HTMLAttributes<HTMLPropositionalWorldComponentElement>;
            "show-signature": LocalJSX.ShowSignature & JSXBase.HTMLAttributes<HTMLShowSignatureElement>;
            "world-preference": LocalJSX.WorldPreference & JSXBase.HTMLAttributes<HTMLWorldPreferenceElement>;
            "world-selector": LocalJSX.WorldSelector & JSXBase.HTMLAttributes<HTMLWorldSelectorElement>;
        }
    }
}