import React from 'react';
import Font from './Font';
import List from './List';
import DescriptionList from './DescriptionList';
import Text from './Text';
import TextColor from './TextColor';

export default () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-12 col-lg-6 col-xxl-4" style={{ marginBottom: 20 }}>
                    <div className="row-md-12">
                        <Font />
                    </div>
                </div>
                <div className="col-md-12 col-lg-6 col-xxl-4" style={{ marginBottom: 20 }}>
                    <div className="row-md-8">
                        <List />
                    </div>
                </div>
                <div className="col-md-12 col-lg-6 col-xxl-4" style={{ marginBottom: 20 }}>
                    <div className="row-md-4">
                        <DescriptionList />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 col-lg-6 col-xxl-4" style={{ marginBottom: 20 }}>
                    <div className="row-md-4 row-lg-4 row-xxl-4">
                        <Text />
                    </div>
                </div>
                <div className="col-md-12 col-lg-6 col-xxl-4" style={{ marginBottom: 20 }}>
                    <div className="row-md-4 row-lg-4 row-xxl-4">
                        <TextColor />
                    </div>
                </div>
            </div>
        </div>
    );
};
