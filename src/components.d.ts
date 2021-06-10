/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Formula, PropositionalSignature, PropositionalWorld, WorldPreference } from "@rhazn/logic-ts";
import { SyntaxCheckResponse } from "./components/formula-input/formula-input";
export namespace Components {
    interface CreateSignature {
        "maxSize": number;
    }
    interface FormulaInput {
        "initialFormula": Formula;
        "postvalidate": (formula: Formula) => Formula;
        "prevalidate": (formula: Formula) => Formula;
        "validate": (formula: Formula) => Promise<SyntaxCheckResponse>;
    }
    interface PropositionalWorldComponent {
        /**
          * Propositional world
         */
        "world": PropositionalWorld;
    }
    interface ShowSignature {
        "signature": PropositionalSignature;
    }
    interface WorldPreferenceComponent {
        /**
          * Allow empty rows or not
         */
        "allowEmptyRows": Boolean;
        /**
          * Preference over worlds
         */
        "preference": WorldPreference;
    }
    interface WorldSelector {
        /**
          * List of worlds
         */
        "worlds": PropositionalWorld[];
    }
}
declare global {
    interface HTMLCreateSignatureElement extends Components.CreateSignature, HTMLStencilElement {
    }
    var HTMLCreateSignatureElement: {
        prototype: HTMLCreateSignatureElement;
        new (): HTMLCreateSignatureElement;
    };
    interface HTMLFormulaInputElement extends Components.FormulaInput, HTMLStencilElement {
    }
    var HTMLFormulaInputElement: {
        prototype: HTMLFormulaInputElement;
        new (): HTMLFormulaInputElement;
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
    interface HTMLWorldPreferenceComponentElement extends Components.WorldPreferenceComponent, HTMLStencilElement {
    }
    var HTMLWorldPreferenceComponentElement: {
        prototype: HTMLWorldPreferenceComponentElement;
        new (): HTMLWorldPreferenceComponentElement;
    };
    interface HTMLWorldSelectorElement extends Components.WorldSelector, HTMLStencilElement {
    }
    var HTMLWorldSelectorElement: {
        prototype: HTMLWorldSelectorElement;
        new (): HTMLWorldSelectorElement;
    };
    interface HTMLElementTagNameMap {
        "create-signature": HTMLCreateSignatureElement;
        "formula-input": HTMLFormulaInputElement;
        "propositional-world-component": HTMLPropositionalWorldComponentElement;
        "show-signature": HTMLShowSignatureElement;
        "world-preference-component": HTMLWorldPreferenceComponentElement;
        "world-selector": HTMLWorldSelectorElement;
    }
}
declare namespace LocalJSX {
    interface CreateSignature {
        "maxSize"?: number;
        "onSignatureUpdated"?: (event: CustomEvent<PropositionalSignature>) => void;
    }
    interface FormulaInput {
        "initialFormula"?: Formula;
        "onValidFormulaEntered"?: (event: CustomEvent<Formula>) => void;
        "postvalidate"?: (formula: Formula) => Formula;
        "prevalidate"?: (formula: Formula) => Formula;
        "validate"?: (formula: Formula) => Promise<SyntaxCheckResponse>;
    }
    interface PropositionalWorldComponent {
        /**
          * Propositional world
         */
        "world"?: PropositionalWorld;
    }
    interface ShowSignature {
        "signature"?: PropositionalSignature;
    }
    interface WorldPreferenceComponent {
        /**
          * Allow empty rows or not
         */
        "allowEmptyRows"?: Boolean;
        "onPreferenceChanged"?: (event: CustomEvent<WorldPreference>) => void;
        /**
          * Preference over worlds
         */
        "preference"?: WorldPreference;
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
        "create-signature": CreateSignature;
        "formula-input": FormulaInput;
        "propositional-world-component": PropositionalWorldComponent;
        "show-signature": ShowSignature;
        "world-preference-component": WorldPreferenceComponent;
        "world-selector": WorldSelector;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "create-signature": LocalJSX.CreateSignature & JSXBase.HTMLAttributes<HTMLCreateSignatureElement>;
            "formula-input": LocalJSX.FormulaInput & JSXBase.HTMLAttributes<HTMLFormulaInputElement>;
            "propositional-world-component": LocalJSX.PropositionalWorldComponent & JSXBase.HTMLAttributes<HTMLPropositionalWorldComponentElement>;
            "show-signature": LocalJSX.ShowSignature & JSXBase.HTMLAttributes<HTMLShowSignatureElement>;
            "world-preference-component": LocalJSX.WorldPreferenceComponent & JSXBase.HTMLAttributes<HTMLWorldPreferenceComponentElement>;
            "world-selector": LocalJSX.WorldSelector & JSXBase.HTMLAttributes<HTMLWorldSelectorElement>;
        }
    }
}
