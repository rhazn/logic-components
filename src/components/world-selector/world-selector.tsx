import { Component, Host, h, Prop, Watch, State, Event, EventEmitter } from "@stencil/core";
import { PropositionalWorld } from "@rhazn/logic-ts";

@Component({
    tag: "world-selector",
    styleUrl: "world-selector.css",
    shadow: true,
})
export class WorldSelector {
    /**
     * List of worlds
     */
    @Prop() worlds: PropositionalWorld[] = [];

    @State() selectedWorldIndices: number[] = [];

    @Event() worldSelected: EventEmitter<PropositionalWorld>;

    @Event() worldDeselected: EventEmitter<PropositionalWorld>;

    @Watch("worlds")
    updatePreferenceFromWorlds() {
        this.selectedWorldIndices = [];
    }

    handleWorldSelected(index: number) {
        this.selectedWorldIndices = [...this.selectedWorldIndices, index];
        this.worldSelected.emit(this.worlds[index]);
    }

    handleWorldDeselected(index: number) {
        this.selectedWorldIndices = this.selectedWorldIndices.filter(worldIndex => worldIndex !== index);
        this.worldDeselected.emit(this.worlds[index]);
    }

    render() {
        return (
            <Host>
                <div class="world-selector">
                    {this.worlds.map((world, index) => (
                        <propositional-world-component
                            class={`world-selector__world world-selector__world__${
                                this.selectedWorldIndices.includes(index) ? "selected" : "unselected"
                            }`}
                            onClick={() =>
                                this.selectedWorldIndices.includes(index)
                                    ? this.handleWorldDeselected(index)
                                    : this.handleWorldSelected(index)
                            }
                            syntax={world.syntax}
                            interpretation={world.interpretation}
                        />
                    ))}
                </div>
            </Host>
        );
    }
}
