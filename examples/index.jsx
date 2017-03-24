import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Typography from './Typography';
import FormElements from './FormElements';
import FormLayout from './FormLayout';
import FormSize from './FormSize';
import FormValidation from './FormValidation';
import '../dist/css/trendmicro-ui.css';

class App extends Component {

    state = this.getDefaultState();

    tabs = [
        { id: 'Typography', text: 'Typography', component: <Typography /> },
        { id: 'FormElements', text: 'Form Elements', component: <FormElements /> },
        { id: 'AdvancedForm', text: 'Advanced Form' },
        { id: 'FormLayout', text: 'Form Layout', component: <FormLayout /> },
        { id: 'FormSize', text: 'Form Size', component: <FormSize /> },
        { id: 'FormValidation', text: 'Form Validation', component: <FormValidation /> },
        { id: 'HelpText', text: 'Help Text' },
        { id: 'InputGroups', text: 'Input Groups' },
        { id: 'FileUpload', text: 'File Upload' },
        { id: 'Search', text: 'Search' },
        { id: 'Tags', text: 'Tags' }
    ];

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

    renderTabItem(object) {
        if (!object.component) {
            return (<span>{object.text}</span>);
        } else {
            return (
                <a
                    href="#"
                    onClick={(e) => {
                        return this.handleSelectTab(object.id);
                    }}
                >{object.text}</a>
            );
        }
    }

    renderTabs() {
        let shortid = Date.now();
        return (
            <ul className="list-inline">
                {
                    this.tabs.map((object, index) => {
                        shortid += index;
                        return (
                            <li key={shortid}>
                                { this.renderTabItem(object) }
                            </li>
                        );
                    })
                }
            </ul>
        );
    }

    renderTabContent() {
        const { selectedTab } = this.state;
        const content = this.tabs.filter((obj) => {
            return obj.id === selectedTab;
        });
        if (content.length > 0 && content[0].component) {
            return content[0].component;
        } else {
            return null;
        }
    }

    render() {
        return (
            <div>
                { this.renderTabs() }
                { this.renderTabContent() }
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('container')
);
