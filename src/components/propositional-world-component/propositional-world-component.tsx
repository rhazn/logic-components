import { Component, Host, h, Prop } from "@stencil/core";
import { PropositionalWorld } from "@rhazn/logic-ts";

@Component({
    tag: "propositional-world-component",
    styleUrl: "propositional-world-component.css",
    shadow: true,
})
export class PropositionalWorldComponent {
    /**
     * Propositional world
     */
    @Prop() world: PropositionalWorld;

    render() {
        return (
            <Host>
                <div class="propositional-world-component">
                    {[...this.world.syntax].map(variable => (
                        <span class={this.world.assignment.has(variable) ? "variable-true" : "variable-false"}>
                            {variable}
                        </span>
                    ))}
                </div>
            </Host>
        );
    }
}
