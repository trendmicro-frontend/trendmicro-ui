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
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" name="optionscheckboxs" />
                                Normal
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" name="optionscheckboxs" defaultChecked />
                                Checked
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" name="optionscheckboxs" ref={elem => elem && (elem.indeterminate = true)} />
                                Partial checked
                            </label>
                        </div>
                        <div className="checkbox disabled">
                            <label>
                                <input type="checkbox" name="optionscheckboxs" defaultChecked disabled />
                                Checked disabled
                            </label>
                        </div>
                        <div className="checkbox disabled">
                            <label>
                                <input type="checkbox" name="optionscheckboxs" disabled />
                                Disabled
                            </label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h6>React Checkbox</h6>
                        <div className="checkbox">
                            <Checkbox>
                                Normal
                            </Checkbox>
                        </div>
                        <div className="checkbox">
                            <Checkbox defaultChecked>
                                Checked
                            </Checkbox>
                        </div>
                        <div className="checkbox">
                            <Checkbox indeterminate>
                                Checked (partial)
                            </Checkbox>
                        </div>
                        <div className="checkbox">
                            <Checkbox defaultChecked disabled>
                                Checked (disabled)
                            </Checkbox>
                        </div>
                        <div className="checkbox">
                            <Checkbox disabled>
                                Disabled
                            </Checkbox>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <hr />
                        <h5>Default (stacked)</h5>
                    </div>
                    <div className="col-md-6">
                        <h6>HTML Checkbox</h6>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" name="default" />
                                Normal label one
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" name="default" />
                                Normal label two
                            </label>
                        </div>
                        <div className="checkbox disabled">
                            <label>
                                <input type="checkbox" name="default" disabled />
                                Disabled label
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" name="default" defaultChecked />
                                Checked label
                                <div>
                                    <div>Sed posuere consecteyur est at lobortus. Aenean eu leo quam.</div>
                                    <div>Pellentesque omare sem lacinia quam venenatis vestibulum.</div>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h6>React Checkbox</h6>
                        <div className="checkbox">
                            <Checkbox>
                                Normal label one
                            </Checkbox>
                        </div>
                        <div className="checkbox">
                            <Checkbox>
                                Normal label two
                            </Checkbox>
                        </div>
                        <div className="checkbox">
                            <Checkbox disabled>
                                Disabled label
                            </Checkbox>
                        </div>
                        <div className="checkbox">
                            <Checkbox defaultChecked>
                                Checked label
                            </Checkbox>
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
                        <h6>HTML Checkbox</h6>
                        <div className="checkbox-inline">
                            <label>
                                <input type="checkbox" name="inline" />
                                Normal label
                            </label>
                        </div>
                        <div className="checkbox-inline disabled">
                            <label>
                                <input type="checkbox" name="inline" disabled />
                                Disabled label
                            </label>
                        </div>
                        <div className="checkbox-inline">
                            <label>
                                <input type="checkbox" name="inline" defaultChecked />
                                Checked label
                            </label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h6>React Checkbox</h6>
                        <div className="checkbox-inline">
                            <Checkbox>
                                Normal label
                            </Checkbox>
                        </div>
                        <div className="checkbox-inline">
                            <Checkbox disabled>
                                Disabled label
                            </Checkbox>
                        </div>
                        <div className="checkbox-inline">
                            <Checkbox defaultChecked>
                                Checked label
                            </Checkbox>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
