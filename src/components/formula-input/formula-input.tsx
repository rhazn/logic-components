import { Formula } from "@rhazn/logic-ts";
import { Component, Host, h, Prop, State, Event, EventEmitter, Watch } from "@stencil/core";

export interface SyntaxCheckResponse {
    valid: boolean;
    error?: string;
}

@Component({
    tag: "formula-input",
    styleUrl: "formula-input.css",
    shadow: true,
})
export class FormulaInput {
    @Prop() initialFormula: Formula = "";

    @Prop() prevalidate: (formula: Formula) => Formula = (formula: Formula) => `fof('formula', axiom, ${formula}).`;
    @Prop() validate: (formula: Formula) => Promise<SyntaxCheckResponse> = () => Promise.resolve({ valid: true });
    @Prop() postvalidate: (formula: Formula) => Formula = (formula: Formula) => formula;

    @Event() validFormulaEntered: EventEmitter<Formula>;

    @State() formula: Formula = "";
    @State() validFormula: Formula = "";

    @State() error: string | undefined = undefined;

    componentWillLoad() {
        this.formula = this.initialFormula;
    }

    @Watch("formula")
    watchFormulaHandler(newValue: Formula) {
        if (!newValue) {
            this.validFormula = newValue;
            this.error = undefined;

            return;
        }

        const formula = this.prevalidate(newValue);

        this.validate(formula).then(result => {
            this.error = result.error;

            if (result.valid) {
                this.validFormula = this.postvalidate(formula);
            }
        });
    }

    @Watch("validFormula")
    watchValidFormulaHandler(newValue: Formula) {
        this.validFormulaEntered.emit(newValue);
    }

    @Watch("initialFormula")
    watchInitialFormulaHandler(newValue: Formula) {
        this.formula = newValue;
    }

    private updateFormula(formula: Formula) {
        this.formula = formula;
    }

    render() {
        return (
            <Host>
                <form class="form" part="form" noValidate autoComplete="off">
                    <slot name="label">
                        <label htmlFor="formula-input" part="label">
                            Formula
                        </label>
                    </slot>
                    <div class="description" part="description">
                        <slot name="description">
                            Formula in TPTP syntax (
                            <a href="http://www.tptp.org/" target="_blank" rel="noopener noreferrer">
                                tptp.org
                            </a>
                            )
                        </slot>
                    </div>
                    <input
                        id="formula-input"
                        name="formula-input"
                        type="text"
                        part="input"
                        value={this.formula}
                        onInput={(e: any) => this.updateFormula(e.target.value)}
                    ></input>
                    {this.error && (
                        <div class="error" part="error">
                            {this.error}
                        </div>
                    )}
                </form>
            </Host>
        );
    }
}
