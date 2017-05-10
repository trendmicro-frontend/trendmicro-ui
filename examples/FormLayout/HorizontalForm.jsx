import React from 'react';
import { Button } from '../components/Buttons';
import Checkbox from '../components/Checkbox';

export default () => {
    return (
        <section>
            <h3 style={{ margin: '16px 0' }}>
                Horizontal Form
            </h3>
            <p>In a horizontal form, labels are placed in front of the input fields and are aligned to the left. Use horizontal forms when you have enough space to accommodate for labels and controls.</p>
            <form className="form-horizontal">
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
                        <span className="help-block">Example block-level help text here.</span>
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label">Description:</label>
                    <div className="control-wrapper">
                        <textarea className="form-control textarea-resizable" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="control-wrapper control-wrapper-offset">
                        <Checkbox className="checkbox" text="I agree to the Terms &amp; Service" />
                    </div>
                </div>
                <div className="form-group">
                    <Button btnStyle="primary">Submit</Button>
                </div>
            </form>
        </section>
    );
};
