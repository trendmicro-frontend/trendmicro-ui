import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Typography from './Typography';
import FormElements from './FormElements';
import FormSize from './FormSize';
import FormValidation from './FormValidation';
import '../dist/css/trendmicro-ui.css';

class App extends Component {

    state = this.getDefaultState();

    getDefaultState () {
        return {
            selectedTab: 'Typography'
        };
    }

    handleSelectTab(activeKey) {
        this.setState({
            'selectedTab': activeKey
        });
        return false;
    }

    componentDidMount() {
        document.querySelector('.site-header').style.visibility = 'visible';
    }

    renderTabs() {
        return (
            <ul className="list-inline">
                <li>
                    <a
                        href="#"
                        onClick={(e) => {
                            return this.handleSelectTab('Typography');
                        }}
                    >Typography</a>
                </li>
                <li>
                    <a
                        href="#"
                        onClick={(e) => {
                            return this.handleSelectTab('FormElements');
                        }}
                    >Form Elements</a>
                </li>
                <li>
                    <a
                        href="#"
                        onClick={(e) => {
                            return this.handleSelectTab('AdvancedForm');
                        }}
                    >Advanced Form</a>
                </li>
                <li>
                    <a
                        href="#"
                        onClick={(e) => {
                            return this.handleSelectTab('FormLayout');
                        }}
                    >Form Layout</a>
                </li>
                <li>
                    <a
                        href="#"
                        onClick={(e) => {
                            return this.handleSelectTab('FormSize');
                        }}
                    >Form Size</a>
                </li>
                <li>
                    <a
                        href="#"
                        onClick={(e) => {
                            return this.handleSelectTab('FormValidation');
                        }}
                    >Form Validation</a>
                </li>
                <li>
                    <a
                        href="#"
                        onClick={(e) => {
                            return this.handleSelectTab('HelpText');
                        }}
                    >Help Text</a>
                </li>
                <li>
                    <a
                        href="#"
                        onClick={(e) => {
                            return this.handleSelectTab('InputGroups');
                        }}
                    >Input Groups</a>
                </li>
                <li>
                    <a
                        href="#"
                        onClick={(e) => {
                            return this.handleSelectTab('FileUpload');
                        }}
                    >File Upload</a>
                </li>
                <li>
                    <a
                        href="#"
                        onClick={(e) => {
                            return this.handleSelectTab('Search');
                        }}
                    >Search</a>
                </li>
                <li>
                    <a
                        href="#"
                        onClick={(e) => {
                            return this.handleSelectTab('Tags');
                        }}
                    >Tags</a>
                </li>
            </ul>
        );
    }

    render() {
        const { selectedTab } = this.state;
        return (
            <div>
                { this.renderTabs() }
                { selectedTab === 'Typography' && <Typography /> }
                { selectedTab === 'FormElements' && <FormElements /> }
                { selectedTab === 'FormSize' && <FormSize /> }
                { selectedTab === 'FormValidation' && <FormValidation /> }
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('container')
);
