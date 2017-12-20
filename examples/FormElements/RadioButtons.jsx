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
                        <div className="radio">
                            <label>
                                <input type="radio" />
                                Normal
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" defaultChecked />
                                Checked
                            </label>
                        </div>
                        <div className="radio disabled">
                            <label>
                                <input type="radio" defaultChecked disabled />
                                Checked disabled
                            </label>
                        </div>
                        <div className="radio disabled">
                            <label>
                                <input type="radio" disabled />
                                Disabled
                            </label>
                        </div>
                    </div>
                    <h6>React Radio Button</h6>
                    <div className="col-md-6">
                        <div className="radio">
                            <RadioButton>
                                Normal
                            </RadioButton>
                        </div>
                        <div className="radio">
                            <RadioButton defaultChecked>
                                Checked
                            </RadioButton>
                        </div>
                        <div className="radio">
                            <RadioButton defaultChecked disabled>
                                Checked disabled
                            </RadioButton>
                        </div>
                        <div className="radio">
                            <RadioButton disabled>
                                Disabled
                            </RadioButton>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <hr />
                        <h5>Default (stacked)</h5>
                    </div>
                    <div className="col-md-6">
                        <h6>HTML Radio Button</h6>
                        <div className="radio">
                            <label>
                                <input type="radio" name="stackedRadios" />
                                Normal label one
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" name="stackedRadios" />
                                Normal label two
                            </label>
                        </div>
                        <div className="radio disabled">
                            <label>
                                <input type="radio" name="stackedRadios" disabled />
                                Disabled label
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" name="stackedRadios" defaultChecked />
                                Checked label
                            </label>
                            <div>
                                <div>Sed posuere consecteyur est at lobortus. Aenean eu leo quam.</div>
                                <div>Pellentesque omare sem lacinia quam venenatis vestibulum.</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h6>React Radio Button</h6>
                        <div className="radio">
                            <RadioButton name="stackedRadios2">
                                Normal label one
                            </RadioButton>
                        </div>
                        <div className="radio">
                            <RadioButton name="stackedRadios2">
                                Normal label two
                            </RadioButton>
                        </div>
                        <div className="radio">
                            <RadioButton name="stackedRadios2" disabled>
                                Disabled label
                            </RadioButton>
                        </div>
                        <div className="radio">
                            <RadioButton name="stackedRadios2" defaultChecked>
                                Checked label
                            </RadioButton>
                            <div>
                                <div>Sed posuere consecteyur est at lobortus. Aenean eu leo quam.</div>
                                <div>Pellentesque omare sem lacinia quam venenatis vestibulum.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <hr />
                        <h5>Inline</h5>
                    </div>
                    <div className="col-md-6">
                        <h6>HTML Radio Button</h6>
                        <div className="radio-inline">
                            <label>
                                <input type="radio" name="inline" />
                                Normal label
                            </label>
                        </div>
                        <div className="radio-inline disabled">
                            <label>
                                <input type="radio" name="inline" disabled />
                                Disabled label
                            </label>
                        </div>
                        <div className="radio-inline">
                            <label>
                                <input type="radio" name="inline" defaultChecked />
                                Checked label
                            </label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h6>React Radio Button</h6>
                        <div className="radio-inline">
                            <RadioButton name="inline2">
                                Normal label
                            </RadioButton>
                        </div>
                        <div className="radio-inline">
                            <RadioButton name="inline2" disabled>
                                Disabled label
                            </RadioButton>
                        </div>
                        <div className="radio-inline">
                            <RadioButton name="inline2" defaultChecked>
                                Checked label
                            </RadioButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
