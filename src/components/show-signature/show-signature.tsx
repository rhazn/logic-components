import { Component, Host, h, Prop } from "@stencil/core";
import { PropositionalSyntax } from "@rhazn/logic-ts";

@Component({
    tag: "show-signature",
    styleUrl: "show-signature.css",
    shadow: true,
})
export class ShowSignature {
    @Prop() signature: PropositionalSyntax;

    render() {
        return (
            <Host>
                <div>&sum; = {`{${[...this.signature].map(character => `${character}`)}}`}</div>
            </Host>
        );
    }
}
