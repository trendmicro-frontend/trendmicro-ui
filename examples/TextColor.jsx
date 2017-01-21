import React from 'react';

export default () => {
    return (
        <section>
            <h3 style={{ margin: '16px 0' }}>
                Text Color
            </h3>
            <div className="typography-example">
                <p>Use #222222 RGB(34, 34, 34) as the primary color.</p>
                <p className="text-error">Use #DB3D44 RGB(219, 61, 68) for error messages.</p>
                <p className="text-warning">Use #FF7633 RGB(255, 118, 51) for warning messages.</p>
                <p className="text-muted">Use #999999 RGB(153, 153, 153) to mute text.</p>
                <p className="text-disabled">Use #BBBBBB RGB(187, 187, 187) for unsupported settings.</p>
                <p className="text-link">Use #0096CC RGB(0, 150, 204) for hypertext.</p>
            </div>
        </section>
    );
};
