import React from 'react';
import RadioButton from '../components/RadioButton';

export default () => {
    return (
        <section>
            <h3 style={{ margin: '16px 0' }}>
                Radio Buttons
            </h3>
            <div>
                <p>A radio button allows the user to select an option from a list of options.</p>
                <p>Adhere to the following when using a radio button:</p>
                <ul>
                    <li>Always offer a default selection</li>
                    <li>The options must be mutually exclusive</li>
                    <li>A listed option is either checked or unchecked</li>
                    <li>Use sentence case for the listed options</li>
                    <li>Align the options vertically whenever possible</li>
                    <li>Make labels clickable whenever possible</li>
                </ul>
                <div className="row">
                    <div className="col-md-6">
                        <h6>HTML Radio Button</h6>
                        <label className="radio">
                            <input type="radio" />
                            Normal
                        </label>
                        <label className="radio">
                            <input type="radio" defaultChecked />
                            Checked
                        </label>
                        <label className="radio disabled">
                            <input type="radio" defaultChecked disabled />
                            Checked disabled
                        </label>
                        <label className="radio disabled">
                            <input type="radio" disabled />
                            Disabled
                        </label>
                    </div>
                    <h6>React Radio Button</h6>
                    <div className="col-md-6">
                        <RadioButton className="radio" text="Normal" />
                        <RadioButton className="radio" text="Checked" defaultChecked />
                        <RadioButton className="radio" text="Checked disabled" defaultChecked disabled />
                        <RadioButton className="radio" text="Disabled" disabled />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <hr />
                        <h5>Default (stacked)</h5>
                    </div>
                    <div className="col-md-6">
                        <h6>HTML Radio Button</h6>
                        <label className="radio">
                            <input type="radio" name="stackedRadios" />
                            Normal label one
                        </label>
                        <label className="radio">
                            <input type="radio" name="stackedRadios" />
                            Normal label two
                        </label>
                        <label className="radio disabled">
                            <input type="radio" name="stackedRadios" disabled />
                            Disabled label
                        </label>
                        <label className="radio">
                            <input type="radio" name="stackedRadios" defaultChecked />
                            Checked label
                            <div>
                                <div>Sed posuere consecteyur est at lobortus. Aenean eu leo quam.</div>
                                <div>Pellentesque omare sem lacinia quam venenatis vestibulum.</div>
                            </div>
                        </label>
                    </div>
                    <div className="col-md-6">
                        <h6>React Radio Button</h6>
                        <RadioButton className="radio" name="stackedRadios2" text="Normal label one" />
                        <RadioButton className="radio" name="stackedRadios2" text="Normal label two" />
                        <RadioButton className="radio" name="stackedRadios2" text="Disabled label" disabled />
                        <RadioButton className="radio" name="stackedRadios2" text="Checked label" defaultChecked>
                            <div>
                                <div>Sed posuere consecteyur est at lobortus. Aenean eu leo quam.</div>
                                <div>Pellentesque omare sem lacinia quam venenatis vestibulum.</div>
                            </div>
                        </RadioButton>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <hr />
                        <h5>Inline</h5>
                    </div>
                    <div className="col-md-6">
                        <h6>HTML Radio Button</h6>
                        <label className="radio-inline">
                            <input type="radio" name="inline" />
                            Normal label
                        </label>
                        <label className="radio-inline disabled">
                            <input type="radio" name="inline" disabled />
                            Disabled label
                        </label>
                        <label className="radio-inline">
                            <input type="radio" name="inline" defaultChecked />
                            Checked label
                        </label>
                    </div>
                    <div className="col-md-6">
                        <h6>React Radio Button</h6>
                        <RadioButton className="radio-inline" name="inline2" text="Normal label" />
                        <RadioButton className="radio-inline" name="inline2" text="Disabled label" disabled />
                        <RadioButton className="radio-inline" name="inline2" text="Checked label" defaultChecked />
                    </div>
                </div>
            </div>
        </section>
    );
};
