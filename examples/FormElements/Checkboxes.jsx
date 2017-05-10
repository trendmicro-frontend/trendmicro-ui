import React from 'react';
import Checkbox from '../components/Checkbox';

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
                <div className="row">
                    <div className="col-md-6">
                        <h6>HTML Checkbox</h6>
                        <label className="checkbox">
                            <input type="checkbox" name="optionscheckboxs" />
                            Normal
                        </label>
                        <label className="checkbox">
                            <input type="checkbox" name="optionscheckboxs" defaultChecked />
                            Checked
                        </label>
                        <label className="checkbox">
                            <input type="checkbox" name="optionscheckboxs" ref={elem => elem && (elem.indeterminate = true)} />
                            Partial checked
                        </label>
                        <label className="checkbox disabled">
                            <input type="checkbox" name="optionscheckboxs" defaultChecked disabled />
                            Checked disabled
                        </label>
                        <label className="checkbox disabled">
                            <input type="checkbox" name="optionscheckboxs" disabled />
                            Disabled
                        </label>
                    </div>
                    <div className="col-md-6">
                        <h6>React Checkbox</h6>
                        <Checkbox className="checkbox" text="Normal" />
                        <Checkbox className="checkbox" text="Checked" defaultChecked />
                        <Checkbox className="checkbox" text="Partial checked" indeterminate />
                        <Checkbox className="checkbox" text="Checked disabled" defaultChecked disabled />
                        <Checkbox className="checkbox" text="Disabled" disabled />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <hr />
                        <h5>Default (stacked)</h5>
                    </div>
                    <div className="col-md-6">
                        <h6>HTML Checkbox</h6>
                        <label className="checkbox">
                            <input type="checkbox" name="default" />
                            Normal label one
                        </label>
                        <label className="checkbox">
                            <input type="checkbox" name="default" />
                            Normal label two
                        </label>
                        <label className="checkbox disabled">
                            <input type="checkbox" name="default" disabled />
                            Disabled label
                        </label>
                        <label className="checkbox">
                            <input type="checkbox" name="default" defaultChecked />
                            Checked label
                            <div>
                                <div>Sed posuere consecteyur est at lobortus. Aenean eu leo quam.</div>
                                <div>Pellentesque omare sem lacinia quam venenatis vestibulum.</div>
                            </div>
                        </label>
                    </div>
                    <div className="col-md-6">
                        <h6>React Checkbox</h6>
                        <Checkbox className="checkbox" text="Normal label one" />
                        <Checkbox className="checkbox" text="Normal label two" />
                        <Checkbox className="checkbox" text="Disabled label" disabled />
                        <Checkbox className="checkbox" text="Checked label" defaultChecked>
                            <div>
                                <div>Sed posuere consecteyur est at lobortus. Aenean eu leo quam.</div>
                                <div>Pellentesque omare sem lacinia quam venenatis vestibulum.</div>
                            </div>
                        </Checkbox>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <hr />
                        <h5>Inline</h5>
                    </div>
                    <div className="col-md-6">
                        <h6>HTML Checkbox</h6>
                        <label className="checkbox-inline">
                            <input type="checkbox" name="inline" />
                            Normal label
                        </label>
                        <label className="checkbox-inline disabled">
                            <input type="checkbox" name="inline" disabled />
                            Disabled label
                        </label>
                        <label className="checkbox-inline">
                            <input type="checkbox" name="inline" defaultChecked />
                            Checked label
                        </label>
                    </div>
                    <div className="col-md-6">
                        <h6>React Checkbox</h6>
                        <Checkbox className="checkbox-inline" text="Normal label" />
                        <Checkbox className="checkbox-inline" text="Disabled label" disabled />
                        <Checkbox className="checkbox-inline" text="Checked label" defaultChecked />
                    </div>
                </div>
            </div>
        </section>
    );
};
