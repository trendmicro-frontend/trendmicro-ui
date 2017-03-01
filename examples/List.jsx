import React from 'react';

export default () => {
    return (
        <section>
            <div style={{ margin: '16px 0' }}>
                List
            </div>
            <div className="typography-example">
                <div className="lists-unordered">
                    <h6>Unordered lists</h6>
                    <p>Use unordered lists if you do not want to imply a particular sequence for the listed items.</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Consectetur adipiscing elit
                            <ul>
                                <li>Phasellus iaculis neque</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <hr />
                <div>
                    <h6>Ordered lists</h6>
                    <p>Use ordered lists to imply a particular sequence for the listed items.</p>
                    <ol>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Consectetur adipiscing elit</li>
                        <li>Integer molestie lorem at massa</li>
                    </ol>
                </div>
                <hr />
                <div>
                    <h6>Unordered inline lists</h6>
                    <p>Place all list items on a single line with margin.</p>
                    <ul className="list-inline">
                        <li><a href="">Link item A</a></li>
                        <li><a href="">Link item B</a></li>
                        <li><a href="">Link item C</a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
