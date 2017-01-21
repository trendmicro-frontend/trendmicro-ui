import React from 'react';

export default () => {
    return (
        <section>
            <h3 style={{ margin: '16px 0' }}>
                Horizontal Description List
            </h3>
            <div className="typography-example">
                <p>A horizontal description list shows a list of variables with corresponding values or information.</p>
                <dl className="dl-horizontal">
                    <dt>Original filename:</dt>
                    <dd>ACME_encrybter.exe</dd>
                    <dt>Location:</dt>
                    <dd>C:\Program Files\Adobe\Reader11.0\Readme</dd>
                    <dt>Size:</dt>
                    <dd>27.6 MB</dd>
                    <dt>File description:</dt>
                    <dd>Acme Inc.</dd>
                    <dt>File version:</dt>
                    <dd>11.0.1.36</dd>
                    <dt>Create time:</dt>
                    <dd>04/12/2016 2:08:32 PM +0800</dd>
                </dl>
            </div>
        </section>
    );
};
