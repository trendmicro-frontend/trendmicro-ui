import React from 'react';

export default () => {
    return (
        <section>
            <h3 style={{ margin: '16px 0' }}>
                Field Labels
            </h3>
            <div>
                <p>Put field labels above or in front of the fields as required.</p>
                <ul>
                    <li>Use sentence capitalization.</li>
                    <li>Field labels within a form should be consistent in style -- that they are either above or in front of the fields.</li>
                </ul>
                <div>
                    <form>
                        <div className="form-group">
                            <label className="control-label" htmlFor="stackedInput">A stacked label:</label>
                            <input type="ext" className="form-control" id="stackedInput" />
                        </div>
                    </form>
                    <p />
                    <form className="form-horizontal">
                        <div className="form-group">
                            <label className="control-label" htmlFor="inlineInput">An inline label:</label>
                            <div className="control-wrapper">
                                <input type="text" className="form-control" id="inlineInput" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
