import React from 'react';
import FieldLabels from './FieldLabels';
import HorizontalForm from './HorizontalForm';
import StackedForm from './StackedForm';
import InlineForm from './InlineForm';
import FormGroups from './FormGroups';

export default () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-12" style={{ marginBottom: 20 }}>
                    <div className="row-md-4">
                        <FieldLabels />
                    </div>
                </div>
                <div className="col-md-12" style={{ marginBottom: 20 }}>
                    <div className="row-md-6">
                        <HorizontalForm />
                    </div>
                </div>
                <div className="col-md-12" style={{ marginBottom: 20 }}>
                    <div className="row-md-6">
                        <StackedForm />
                    </div>
                </div>
                <div className="col-md-12" style={{ marginBottom: 20 }}>
                    <div className="row-md-3">
                        <InlineForm />
                    </div>
                </div>
                <div className="col-md-12" style={{ marginBottom: 20 }}>
                    <div className="row-md-8">
                        <FormGroups />
                    </div>
                </div>
            </div>
        </div>
    );
};
