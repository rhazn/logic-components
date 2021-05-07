import { Component, Host, h, Prop } from "@stencil/core";
import { Interpretation, PropositionalSyntax } from "@rhazn/logic-ts";

@Component({
    tag: "propositional-world-component",
    styleUrl: "propositional-world-component.css",
    shadow: true,
})
export class PropositionalWorldComponent {
    /**
     * Propositional Syntax for the world
     */
    @Prop() syntax: PropositionalSyntax;

    /**
     * Interpretation for the world
     */
    @Prop() interpretation: Interpretation;

    render() {
        return (
            <Host>
                <div class="propositional-world-component">
                    {[...this.syntax].map(variable => (
                        <span class={this.interpretation(variable) ? "variable-true" : "variable-false"}>
                            {variable}
                        </span>
                    ))}
                </div>
            </Host>
        );
    }
}
