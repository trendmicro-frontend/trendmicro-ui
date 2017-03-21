import React from 'react';
import FieldHeights from './FieldHeights';
import FieldWidths from './FieldWidths';

export default () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-12" style={{ marginBottom: 20 }}>
                    <div className="row-md-4">
                        <FieldHeights />
                    </div>
                </div>
                <div className="col-md-12" style={{ marginBottom: 20 }}>
                    <div className="row-md-8">
                        <FieldWidths />
                    </div>
                </div>
            </div>
        </div>
    );
};
