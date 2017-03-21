import React from 'react';

export default () => {
    return (
        <section>
            <h3 style={{ margin: '16px 0' }}>
                Text Area
            </h3>
            <div>
                <p>A text area allows the user to type in extended, multi-line inputs.</p>
                <p>A text area can be fixed in height, grow automatically based on the input, or contain a resize handle, which allows for vertical resizing.</p>
                <div>
                    <label>Normal:</label>
                    <textarea className="form-control" placeholder="Enter a description" />
                </div>
                <div>
                    <label>Disabled:</label>
                    <textarea className="form-control" disabled />
                </div>
                <div >
                    <label>Resizable:</label>
                    <textarea className="form-control textarea-resizable" />
                </div>
            </div>
        </section>
    );
};
