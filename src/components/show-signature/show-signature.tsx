import { Component, Host, h, Prop } from "@stencil/core";
import { PropositionalSignature } from "@rhazn/logic-ts";

@Component({
    tag: "show-signature",
    styleUrl: "show-signature.css",
    shadow: true,
})
export class ShowSignature {
    @Prop() signature: PropositionalSignature;

    render() {
        return (
            <Host>
                <div part="signature">
                    <slot name="signature-sign">&sum; =</slot>
                    {`{${[...this.signature].map(character => `${character}`)}}`}
                </div>
            </Host>
        );
    }
}
