import React from 'react';

export default () => {
    return (
        <section>
            <h3 style={{ margin: '16px 0' }}>
                Validation Styles
            </h3>
            <div>
                <p>For an invalid input, the error will be indicated right below the input field.</p>
                <div>
                    <label htmlFor="errorStyle" className="label-required">Input error:</label>
                    <input id="errorStyle" className="form-control form-invalid" />
                    <span className="help-block help-block-invalid help-block-with-icon">
                        <span className="icon icon-warning-red" />
                        Required field.
                    </span>
                </div>
            </div>
        </section>
    );
};
