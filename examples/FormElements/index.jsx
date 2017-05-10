import React from 'react';
import InputFields from './InputFields';
import TextArea from './TextArea';
import RadioButtons from './RadioButtons';
import Checkboxes from './Checkboxes';

export default () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-12" style={{ marginBottom: 20 }}>
                    <div className="row-md-8">
                        <InputFields />
                    </div>
                </div>
                <div className="col-md-12" style={{ marginBottom: 20 }}>
                    <div className="row-md-6">
                        <TextArea />
                    </div>
                </div>
                <div className="col-md-12" style={{ marginBottom: 20 }}>
                    <div className="row-md-12">
                        <RadioButtons />
                    </div>
                </div>
                <div className="col-md-12" style={{ marginBottom: 20 }}>
                    <div className="row-md-11">
                        <Checkboxes />
                    </div>
                </div>
            </div>
        </div>
    );
};
