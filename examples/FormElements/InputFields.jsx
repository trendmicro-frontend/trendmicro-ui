import React from 'react';

export default () => {
    return (
        <section>
            <h3 style={{ margin: '16px 0' }}>
                Input Fields
            </h3>
            <div>
                <p>An input field is a field for users to enter a value or a short line of text. Use sentence case for field labels.</p>
                <div>
                    <label>Normal:</label>
                    <input className="form-control" />
                </div>
                <div>
                    <label>Placeholder:</label>
                    <input className="form-control" placeholder="Placeholder" />
                </div>
                <div>
                    <label>Disabled:</label>
                    <input className="form-control" disabled />
                </div>
                <div>
                    <label>Focused:</label>
                    <input className="form-control" />
                </div>
                <div>
                    <label className="label-required">Required:</label>
                    <input className="form-control" />
                </div>
                <div >
                    <label>Invalid:</label>
                    <input className="form-control form-invalid" value="trendmicro@trend" />
                    <span className="help-block help-block-invalid help-block-with-icon">
                        <span className="icon icon-warning-red"></span>
                        Invalid email address
                    </span>
                </div>
                <div>
                    <label>Static text:</label>
                    <p>email@example.com</p>
                </div>
            </div>
        </section>
    );
};
