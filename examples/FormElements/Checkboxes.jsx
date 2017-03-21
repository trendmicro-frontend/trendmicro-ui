import React from 'react';

export default () => {
    return (
        <section>
            <h3 style={{ margin: '16px 0' }}>
                Checkboxes
            </h3>
            <div>
                <p>Checkboxes are used to permit the user to select one or more options from a set.</p>
                <ul>
                    <li>The user can select one, one, or multiple options from a set</li>
                    <li>When clicked, a checkbox displays or removes its check mark</li>
                    <li>Use sentence case for checkbox labels</li>
                    <li>Align checkbox labels vertically whenever possible</li>
                    <li>Make labels clickable whenever possible</li>
                </ul>
                <div className="checkbox">
                    <input type="checkbox" name="optionscheckboxs" id="optionscheckboxs1" className="input-checkbox" />
                    <label htmlFor="optionscheckboxs1">Normal</label>
                </div>
                <div className="checkbox">
                    <input type="checkbox" name="optionscheckboxs" id="optionscheckboxs2" className="input-checkbox hover" />
                    <label htmlFor="optionscheckboxs2">Hover</label>
                </div>
                <div className="checkbox">
                    <input type="checkbox" name="optionscheckboxs" id="optionscheckboxs3" className="input-checkbox" checked />
                    <label htmlFor="optionscheckboxs3">Checked</label>
                </div>
                <div className="checkbox">
                    <input type="checkbox" name="optionscheckboxs" id="optionscheckboxs4" className="input-checkbox checked checked-hover" />
                    <label htmlFor="optionscheckboxs4">Checked hover</label>
                </div>
                <div className="checkbox">
                    <input type="checkbox" name="optionscheckboxs" id="optionscheckboxs5" className="input-checkbox checkbox-partial" />
                    <label htmlFor="optionscheckboxs5">Partial checked</label>
                </div>
                <div className="checkbox disabled">
                    <input type="checkbox" name="optionscheckboxs" id="optionscheckboxs6" className="input-checkbox checked" disabled />
                    <label htmlFor="optionscheckboxs6">Checked disabled</label>
                </div>
                <div className="checkbox disabled">
                    <input type="checkbox" name="optionscheckboxs" id="optionscheckboxs7" className="input-checkbox disabled" disabled />
                    <label htmlFor="optionscheckboxs7">Disabled</label>
                </div>

                <hr />
                <h5>Default (stacked)</h5>
                <div className="checkbox">
                    <input type="checkbox" name="default" id="default1" className="input-checkbox" />
                    <label htmlFor="default1">Normal label one</label>
                </div>
                <div className="checkbox">
                    <input type="checkbox" name="default" id="default2" className="input-checkbox" />
                    <label htmlFor="default2">Normal label two</label>
                </div>
                <div className="checkbox disabled">
                    <input type="checkbox" name="default" id="default3" className="input-checkbox disabled" disabled />
                    <label htmlFor="default3">Normal label two</label>
                </div>
                <div className="checkbox">
                    <input type="checkbox" name="default" id="default4" className="input-checkbox checked" />
                    <label htmlFor="default4">Checked label</label>
                    <div>
                        <div>Sed posuere consecteyur est at lobortus. Aenean eu leo quam.</div>
                        <div>Pellentesque omare sem lacinia quam venenatis vestibulum.</div>
                    </div>
                </div>

                <hr />
                <h5>Inline</h5>
                <div className="checkbox-inline">
                    <input type="checkbox" name="inline" id="inline1" className="input-checkbox" />
                    <label htmlFor="inline1">Normal label</label>
                </div>
                <div className="checkbox-inline disabled">
                    <input type="checkbox" name="inline" id="inline2" className="input-checkbox disabled" disabled />
                    <label htmlFor="inline2">Disabled label</label>
                </div>
                <div className="checkbox-inline">
                    <input type="checkbox" name="inline" id="inline3" className="input-checkbox checked" />
                    <label htmlFor="inline3">Checked label</label>
                </div>
            </div>
        </section>
    );
};
