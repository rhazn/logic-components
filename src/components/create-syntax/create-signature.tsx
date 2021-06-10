import { Component, Host, h, State, EventEmitter, Event, Prop } from "@stencil/core";
import { PropositionalSignature, PropositionalVariable } from "@rhazn/logic-ts";

@Component({
    tag: "create-signature",
    styleUrl: "create-signature.css",
    shadow: true,
})
export class CreateSignature {
    @Prop() maxSize: number = 10;
    @State() signature: PropositionalSignature = new Set(["a"]);
    @Event() signatureUpdated: EventEmitter<PropositionalSignature>;

    onChange(size: number) {
        this.signature = new Set("abcdefghijklmnopqrstuvwxyz".substr(0, size).split("")) as Set<PropositionalVariable>;
    }

    render() {
        return (
            <Host>
                <input
                    part="input"
                    type="range"
                    min="1"
                    max={this.maxSize}
                    value={this.signature.size}
                    class="slider"
                    onChange={e => this.onChange((e.target as any).value)}
                />
                <show-signature signature={this.signature} />
                <button part="button" onClick={() => this.signatureUpdated.emit(this.signature)}>
                    Create
                </button>
            </Host>
        );
    }
}
