import React from 'react';
import { Button } from '../components/Buttons';

export default () => {
    return (
        <section>
            <h3 style={{ margin: '16px 0' }}>
                Stacked Form
            </h3>
            <p>In a stacked form, labels are placed above input fields, and are aligned to the left. Stacked forms are the easiest to localize, but they will require more vertical space.</p>
            <form>
                <div className="form-group">
                    <label className="control-label" htmlFor="normalInput">Text input:</label>
                    <input type="text" className="form-control" id="normalInput" />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="placeholderInput">Text label:</label>
                    <input type="text" className="form-control" id="placeholderInput" placeholder="Placeholder" />
                </div>
                <div className="form-group">
                    <label className="control-label">Description:</label>
                    <textarea className="form-control textarea-resizable" />
                </div>
                <div className="form-group">
                    <div className="checkbox">
                        <input type="checkbox" id="stackedcheckboxs" className="input-checkbox" />
                        <label htmlFor="stackedcheckboxs">I agree to the Terms &amp; Service</label>
                    </div>
                </div>
                <div className="form-group">
                    <Button btnStyle="primary">Submit</Button>
                </div>
            </form>
        </section>
    );
};
