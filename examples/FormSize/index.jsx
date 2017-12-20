import React from 'react';
import Height from './Height';
import Width from './Width';

export default () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-12" style={{ marginBottom: 20 }}>
                    <div className="row-md-5">
                        <Height />
                    </div>
                </div>
                <div className="col-md-12" style={{ marginBottom: 20 }}>
                    <div className="row-md-8">
                        <Width />
                    </div>
                </div>
            </div>
        </div>
    );
};
