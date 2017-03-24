import React from 'react';
import { Button } from '../components/Buttons';

export default () => {
    return (
        <section>
            <h3 style={{ margin: '16px 0' }}>
                Inline Form
            </h3>
            <p>Multiple input fields can be placed on the same line. Use inline forms when you expect short inputs.</p>
            <form className="form-inline">
                <div className="form-group">
                    <label className="control-label" htmlFor="nameInput">Name:</label>
                    <input type="text" className="form-control" id="nameInput" />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="emilInput">Email:</label>
                    <input type="text" className="form-control" id="emilInput" />
                </div>
                <Button btnStyle="primary">Submit</Button>
            </form>
        </section>
    );
};
