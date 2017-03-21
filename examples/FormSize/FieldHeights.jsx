import React from 'react';

export default () => {
    return (
        <section>
            <h3 style={{ margin: '16px 0' }}>
                Height
            </h3>
            <div>
                <p>Match the form height with any buttons used in the form.</p>
                <div>
                    <input className="form-control input-lg input-width-lg" placeholder="Large input" />
                </div>
                <div>
                    <input className="form-control input-width-lg" placeholder="Default input" />
                </div>
                <div>
                    <input className="form-control input-sm input-width-lg" placeholder="Small input" />
                </div>
                <div>
                    <input className="form-control input-xs input-width-lg" placeholder="Extra small input" />
                </div>
            </div>
        </section>
    );
};
