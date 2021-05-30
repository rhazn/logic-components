import { Component, Host, h, State, EventEmitter, Event, Prop } from "@stencil/core";
import { PropositionalSyntax, PropositionalVariable } from "@rhazn/logic-ts";

@Component({
    tag: "create-syntax",
    styleUrl: "create-syntax.css",
    shadow: true,
})
export class CreateSignature {
    @Prop() maxSize: number = 10;
    @State() syntax: PropositionalSyntax = new Set(["a"]);
    @Event() syntaxUpdated: EventEmitter<PropositionalSyntax>;

    onChange(size: number) {
        this.syntax = new Set("abcdefghijklmnopqrstuvwxyz".substr(0, size).split("")) as Set<PropositionalVariable>;
    }

    render() {
        return (
            <Host>
                <input
                    part="input"
                    type="range"
                    min="1"
                    max={this.maxSize}
                    value={this.syntax.size}
                    class="slider"
                    onChange={e => this.onChange((e.target as any).value)}
                />
                <show-signature signature={this.syntax} />
                <button part="button" onClick={() => this.syntaxUpdated.emit(this.syntax)}>
                    Create
                </button>
            </Host>
        );
    }
}
