import React from 'react';

export default () => {
    return (
        <section>
            <h3 style={{ margin: '16px 0' }}>
                Examples
            </h3>
            <div>
                <p>The goal of form validation is to ensure that the user provides necessary and properly formatted information needed to successfully complete an operation.</p>
                <ul>
                    <li>Scroll to and focus the first field with an error when the form is submitted.</li>
                    <li>Provide field level validation for fields that are known to be invalid.</li>
                    <li>Describe why an error occurred.</li>
                </ul>
                <div>
                    <label htmlFor="errorInput" className="label-required">Required fields:</label>
                    <input id="errorInput" className="form-control form-invalid" />
                    <span className="help-block help-block-invalid help-block-with-icon">
                        <span className="icon icon-warning-red" />
                        Required field.
                    </span>
                </div>
                <div>
                    <label htmlFor="errorTextarea">Text area:</label>
                    <textarea id="errorTextarea" className="form-control textarea-normal textarea-resize form-invalid">
                        This text area has exceed the character limit by 100 characters. The user can still continue to type after reaching the limit, but the field is invalid.
                    </textarea>
                    <span className="help-block help-block-invalid help-block-with-icon">
                        <span className="icon icon-warning-red" />
                        152/100 character limit.
                    </span>
                </div>
                <div>
                    <label className="label-required">Checkboxes:</label>
                    <div>
                        <div className="checkbox">
                            <input type="checkbox" name="optionscheckboxs" id="validationcheckboxs1" className="input-checkbox" />
                            <label htmlFor="validationcheckboxs1">Item 1</label>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" name="optionscheckboxs" id="validationcheckboxs2" className="input-checkbox" />
                            <label htmlFor="validationcheckboxs2">Item 2</label>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" name="optionscheckboxs" id="validationcheckboxs3" className="input-checkbox" />
                            <label htmlFor="validationcheckboxs3">Item 3</label>
                        </div>
                    </div>
                    <span className="help-block help-block-invalid help-block-with-icon">
                        <span className="icon icon-warning-red" />
                        Please specify at least one.
                    </span>
                </div>
            </div>
        </section>
    );
};
