import React from 'react';

export default () => {
    return (
        <section>
            <h3 style={{ margin: '16px 0' }}>
                Field Widths
            </h3>
            <div>
                <p>Form widths such as those in drop-down menus and text boxes should communicate the expected length of content. Use consistent widths to help with alignment. Customize your form width if the following ones are not suitable for your particular scenario.</p>
                <div className="row form-group clearfix">
                    <label className="col-sm-2">Minimum:</label>
                    <div className="col-sm-10">
                        <input className="form-control input-width-mini" placeholder="64px" />
                    </div>
                </div>
                <div className="row form-group clearfix">
                    <label className="col-sm-2">Extra small:</label>
                    <div className="col-sm-10">
                        <input className="form-control input-width-xs" placeholder="120px" />
                    </div>
                </div>
                <div className="row form-group clearfix">
                    <label className="col-sm-2">Small:</label>
                    <div className="col-sm-10">
                        <input className="form-control input-width-sm" placeholder="168px" />
                    </div>
                </div>
                <div className="row form-group clearfix">
                    <label className="col-sm-2">Default:</label>
                    <div className="col-sm-10">
                        <input className="form-control input-width-default" placeholder="256px" />
                    </div>
                </div>
                <div className="row form-group clearfix">
                    <label className="col-sm-2">Medium:</label>
                    <div className="col-sm-10">
                        <input className="form-control input-width-md" placeholder="360px" />
                    </div>
                </div>
                <div className="row form-group clearfix">
                    <label className="col-sm-2">Large:</label>
                    <div className="col-sm-10">
                        <input className="form-control input-width-lg" placeholder="512px" />
                    </div>
                </div>
                <div className="row form-group clearfix">
                    <label className="col-sm-2">Full length:</label>
                    <div className="col-sm-10">
                        <input className="form-control" placeholder="100%" />
                    </div>
                </div>
            </div>
        </section>
    );
};
