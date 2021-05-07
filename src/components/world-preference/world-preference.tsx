import { Component, Host, h, Prop, State, Watch, Event, EventEmitter } from "@stencil/core";
import { PropositionalWorld } from "@rhazn/logic-ts";

@Component({
    tag: "world-preference",
    styleUrl: "world-preference.css",
    shadow: true,
})
export class WorldPreference {
    /**
     * Allow empty rows or not
     */
    @Prop() allowEmptyRows: Boolean = false;

    /**
     * Preference over worlds
     */
    @Prop() preference: PropositionalWorld[][] = [];

    @State() internalPreference: PropositionalWorld[][] = [];

    @Event() preferenceChanged: EventEmitter<PropositionalWorld[][]>;

    draggedWorld: { rankIndex: number; worldIndex: number };

    dragStartHandler(event: DragEvent) {
        this.draggedWorld = {
            rankIndex: +(event.target as HTMLElement).dataset.rank,
            worldIndex: +(event.target as HTMLElement).dataset.index,
        };
    }

    dragOverHandler(event: DragEvent) {
        event.preventDefault();
        event.stopPropagation();
    }

    dragDropHandler(event: DragEvent) {
        event.preventDefault();
        event.stopPropagation();

        const oldRank = this.draggedWorld.rankIndex;
        const oldIndex = this.draggedWorld.worldIndex;

        const world = this.internalPreference[oldRank][oldIndex];

        const newPreference = [...this.internalPreference];

        newPreference[oldRank] = newPreference[oldRank].filter((_, index) => index !== oldIndex);

        let newRank = 0;

        for (let i = 0; i < (event as any).path.length; i++) {
            const element = (event as any).path[i] as HTMLElement;

            if (element.dataset && element.dataset.rankindex !== undefined) {
                newRank = +element.dataset.rankindex;
                break;
            }
        }

        newPreference[newRank] = [...newPreference[newRank], world];

        this.internalPreference = this.manageEmptyRows(newPreference);

        this.emitChange();
    }

    @Watch("preference")
    updateInternalPreference(newPreference: PropositionalWorld[][]) {
        this.internalPreference = this.manageEmptyRows(newPreference);
    }

    componentWillLoad() {
        this.updateInternalPreference(this.preference);
    }

    private manageEmptyRows(preference: PropositionalWorld[][]): PropositionalWorld[][] {
        if (preference.length === 0) {
            return this.allowEmptyRows ? [[], []] : [[]];
        }

        for (var i = preference.length - 1; i >= 0; i--) {
            if (preference[i].length !== 0) {
                preference = preference.slice(0, i + 1);
                break;
            }
        }

        // add one or two additional empty rows on top to allow for creation of new ranks
        preference.push([]);

        if (this.allowEmptyRows) {
            preference.push([]);
        }

        if (this.allowEmptyRows) {
            return preference;
        } else {
            // remove all empty rows but the last
            return preference.filter((row, index) => {
                if (row.length === 0) {
                    if (index < preference.length - 1) {
                        return false;
                    }
                }

                return true;
            });
        }
    }

    private emitChange() {
        this.preferenceChanged.emit(
            this.internalPreference.slice(0, this.internalPreference.length - (this.allowEmptyRows ? 2 : 1)),
        );
    }

    render() {
        return (
            <Host>
                <div class="world-preference">
                    <table>
                        {this.internalPreference
                            .slice()
                            .reverse()
                            .map((rank, index) => {
                                const rankIndex = this.internalPreference.length - 1 - index;
                                return (
                                    <tr
                                        class="world-preference__rank"
                                        data-rankindex={rankIndex}
                                        onDragOver={e => this.dragOverHandler(e)}
                                        onDrop={e => this.dragDropHandler(e)}
                                    >
                                        <td class="world-preference__rank__number">{rankIndex}</td>
                                        <td class="world-preference__rank__worlds">
                                            {rank.map((world, worldIndex) => (
                                                <propositional-world-component
                                                    data-rank={rankIndex}
                                                    data-index={worldIndex}
                                                    draggable={true}
                                                    onDragStart={e => this.dragStartHandler(e)}
                                                    syntax={world.syntax}
                                                    interpretation={world.interpretation}
                                                />
                                            ))}
                                        </td>
                                    </tr>
                                );
                            })}
                    </table>
                </div>
            </Host>
        );
    }
}
