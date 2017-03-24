import React from 'react';

export default () => {
    return (
        <section>
            <h3 style={{ margin: '16px 0' }}>
                Form Groups
            </h3>
            <p>If you have multiple fields, consider organizing related fields into groups. Put a title for each form group.</p>
            <form className="form-horizontal">
                <fieldset>
                    <legend>Group title</legend>
                    <div className="form-group">
                        <label className="control-label" htmlFor="normalInput">Text input:</label>
                        <div className="control-wrapper">
                            <input type="text" className="form-control" id="normalInput" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label" htmlFor="placeholderInput">Text label:</label>
                        <div className="control-wrapper">
                            <input type="text" className="form-control" id="placeholderInput" placeholder="Placeholder" />
                            <span id="helpBlock" className="help-block">Example block-level help text here.</span>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label">Description:</label>
                        <div className="control-wrapper">
                            <textarea className="form-control textarea-resizable" />
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Group title</legend>
                    <div className="form-group">
                        <label className="control-label" htmlFor="normalInput">Text input:</label>
                        <div className="control-wrapper">
                            <input type="text" className="form-control" id="normalInput" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label" htmlFor="placeholderInput">Text label:</label>
                        <div className="control-wrapper">
                            <input type="text" className="form-control" id="placeholderInput" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label">Static text:</label>
                        <div className="control-wrapper">
                            <p className="form-control-static">email@example.com</p>
                        </div>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};
