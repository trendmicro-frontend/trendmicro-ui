import React from 'react';
import Styles from './Styles';
import Examples from './Examples';

export default () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-12" style={{ marginBottom: 20 }}>
                    <div className="row-md-3">
                        <Styles />
                    </div>
                </div>
                <div className="col-md-12" style={{ marginBottom: 20 }}>
                    <div className="row-md-8">
                        <Examples />
                    </div>
                </div>
            </div>
        </div>
    );
};
