import { Component, Host, h, Prop, State, Watch, Event, EventEmitter } from "@stencil/core";
import { PropositionalWorld, WorldPreference } from "@rhazn/logic-ts";

@Component({
    tag: "world-preference-component",
    styleUrl: "world-preference.css",
    shadow: true,
})
export class WorldPreferenceComponent {
    /**
     * Allow empty rows or not
     */
    @Prop() allowEmptyRows: Boolean = false;

    /**
     * Allow changes or not
     */
    @Prop() allowChanges: Boolean = true;

    /**
     * Preference over worlds
     */
    @Prop() preference: WorldPreference = new WorldPreference([]);

    @State() internalPreference: WorldPreference = new WorldPreference([]);

    @Event() preferenceChanged: EventEmitter<WorldPreference>;

    draggedWorld: { rankIndex: number; worldIndex: number };

    dragStartHandler(event: DragEvent) {
        if (!this.allowChanges) {
            return;
        }

        this.draggedWorld = {
            rankIndex: +(event.target as HTMLElement).dataset.rank,
            worldIndex: +(event.target as HTMLElement).dataset.index,
        };
    }

    dragOverHandler(event: DragEvent) {
        if (!this.allowChanges) {
            return;
        }

        event.preventDefault();
        event.stopPropagation();
    }

    dragDropHandler(event: DragEvent) {
        if (!this.allowChanges) {
            return;
        }

        event.preventDefault();
        event.stopPropagation();

        const oldRank = this.draggedWorld.rankIndex;
        const oldIndex = this.draggedWorld.worldIndex;

        const world = this.internalPreference.data[oldRank][oldIndex];

        const newPreference = [...this.internalPreference.data];

        newPreference[oldRank] = newPreference[oldRank].filter((_, index) => index !== oldIndex);

        let newRank = 0;

        const eventPath = (event as any).path || ((event as any).composedPath && (event as any).composedPath());

        for (let i = 0; i < eventPath.length; i++) {
            const element = eventPath[i] as HTMLElement;

            if (element.dataset && element.dataset.rankindex !== undefined) {
                newRank = +element.dataset.rankindex;
                break;
            }
        }

        newPreference[newRank] = [...newPreference[newRank], world];

        this.internalPreference = new WorldPreference(this.manageEmptyRows(newPreference));

        this.emitChange();
    }

    @Watch("preference")
    updateInternalPreference(newPreference: WorldPreference) {
        this.internalPreference = new WorldPreference(this.manageEmptyRows(newPreference.data));
    }

    componentWillLoad() {
        this.updateInternalPreference(this.preference);
    }

    private manageEmptyRows(preference: PropositionalWorld[][] | undefined): PropositionalWorld[][] {
        if (preference === undefined || preference.length === 0) {
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
            new WorldPreference(
                this.internalPreference.data.slice(
                    0,
                    this.internalPreference.data.length - (this.allowEmptyRows ? 2 : 1),
                ),
            ),
        );
    }

    render() {
        return (
            <Host>
                <div class="world-preference">
                    <table>
                        {this.internalPreference.data
                            .slice()
                            .reverse()
                            .map((rank, index) => {
                                const rankIndex = this.internalPreference.data.length - 1 - index;
                                return (
                                    <tr
                                        class="world-preference__rank"
                                        data-rankindex={rankIndex}
                                        onDragOver={e => this.dragOverHandler(e)}
                                        onDrop={e => this.dragDropHandler(e)}
                                    >
                                        <td class="world-preference__rank__number">{rankIndex}</td>
                                        <td
                                            class={
                                                this.allowChanges
                                                    ? "world-preference__rank__worlds"
                                                    : "preference__rank__worlds_fixed"
                                            }
                                        >
                                            {rank.map((world, worldIndex) => (
                                                <propositional-world-component
                                                    data-rank={rankIndex}
                                                    data-index={worldIndex}
                                                    draggable={true}
                                                    onDragStart={e => this.dragStartHandler(e)}
                                                    world={world}
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
