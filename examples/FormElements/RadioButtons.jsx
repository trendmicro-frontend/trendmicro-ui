import React from 'react';

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
                <div className="radio">
                    <input type="radio" name="optionsRadios" id="optionsRadios1" className="input-radio" />
                    <label htmlFor="optionsRadios1">Normal</label>
                </div>
                <div className="radio">
                    <input type="radio" name="optionsRadios" id="optionsRadios2" className="input-radio hover" />
                    <label htmlFor="optionsRadios2">Hover</label>
                </div>
                <div className="radio">
                    <input type="radio" name="optionsRadios" id="optionsRadios3" className="input-radio" checked />
                    <label htmlFor="optionsRadios3">Checked</label>
                </div>
                <div className="radio">
                    <input type="radio" name="optionsRadios" id="optionsRadios4" className="input-radio checked checked-hover" />
                    <label htmlFor="optionsRadios4">Checked hover</label>
                </div>
                <div className="radio disabled">
                    <input type="radio" name="optionsRadios" id="optionsRadios5" className="input-radio checked" disabled />
                    <label htmlFor="optionsRadios5">Checked disabled</label>
                </div>
                <div className="radio disabled">
                    <input type="radio" name="optionsRadios" id="optionsRadios6" className="input-radio disabled" disabled />
                    <label htmlFor="optionsRadios6">Disabled</label>
                </div>

                <hr />
                <h5>Default (stacked)</h5>
                <div className="radio">
                    <input type="radio" name="default" id="default1" className="input-radio" />
                    <label htmlFor="default1">Normal label one</label>
                </div>
                <div className="radio">
                    <input type="radio" name="default" id="default2" className="input-radio" />
                    <label htmlFor="default2">Normal label two</label>
                </div>
                <div className="radio disabled">
                    <input type="radio" name="default" id="default3" className="input-radio disabled" disabled />
                    <label htmlFor="default3">Normal label two</label>
                </div>
                <div className="radio">
                    <input type="radio" name="default" id="default4" className="input-radio" checked />
                    <label htmlFor="default4">Checked label</label>
                    <div>
                        <div>Sed posuere consecteyur est at lobortus. Aenean eu leo quam.</div>
                        <div>Pellentesque omare sem lacinia quam venenatis vestibulum.</div>
                    </div>
                </div>

                <hr />
                <h5>Inline</h5>
                <div className="radio-inline">
                    <input type="radio" name="inline" id="inline1" className="input-radio" />
                    <label htmlFor="inline1">Normal label</label>
                </div>
                <div className="radio-inline disabled">
                    <input type="radio" name="inline" id="inline2" className="input-radio disabled" disabled />
                    <label htmlFor="inline2">Disabled label</label>
                </div>
                <div className="radio-inline">
                    <input type="radio" name="inline" id="inline3" className="input-radio" checked />
                    <label htmlFor="inline3">Checked label</label>
                </div>
            </div>
        </section>
    );
};
