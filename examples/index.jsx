import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../src/index.styl';

class App extends Component {
    render() {
        return (
            <div>
                <section>
                    <div className="typography-example">
                        <h3>Fonts</h3>
                        <p>Ensure to use <strong>Interstate</strong> as the primary typeface in product UI. For text that is 18px or smaller, use <strong>Arial</strong>.</p>
                        <div className="row">
                            <label className="text-muted">Display 4</label>
                            <span className="display4">Interstate-ExtraLight 40px</span>
                        </div>
                        <div className="row">
                            <label className="text-muted">Display 3</label>
                            <span className="display3">Interstate-Light 32px</span>
                        </div>
                        <div className="row">
                            <label className="text-muted">H1, Display 2</label>
                            <span className="display2">Interstate-Light 26px</span>
                        </div>
                        <div className="row">
                            <label className="text-muted">H2, Display 1</label>
                            <span className="display1">Interstate-Light 24px</span>
                        </div>
                        <div className="row">
                            <label className="text-muted">H3, Title</label>
                            <h3>Interstate-Light 18px</h3>
                        </div>
                        <div className="row">
                            <label className="text-muted">H4, Large Text</label>
                            <h4>Arial 16px</h4>
                        </div>
                        <div className="row">
                            <label className="text-muted">H5</label>
                            <h5>Arial 14px Bold</h5>
                        </div>
                        <div className="row">
                            <label className="text-muted">H6</label>
                            <h6>Arial 13px Bold</h6>
                        </div>
                        <div className="row">
                            <label className="text-muted">Body</label>
                            <span>Arial 13px</span>
                        </div>
                        <div className="row">
                            <label className="text-muted">Small Text</label>
                            <span className="font-size-small">Arial 12px</span>
                        </div>
                        <div className="example">
                            <div className="typography-example">
                                <p>Use smaller font to create a secondary heading like product name.</p>
                                <h1>Trend Micro UI <small>for Enterprise</small></h1>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('container')
);
