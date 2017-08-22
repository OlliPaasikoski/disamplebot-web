import React from 'react';
import { render } from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/app.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            botWindowToggled: false,
            components: [
                { key: 0, title: "Azure Bot Service (Preview)", link: "https://azure.microsoft.com/en-us/services/bot-service/", description: "Azure Bot Service enables rapid intelligent bot development powered by the Microsoft Bot Framework, and runs in a serverless environment on Azure. Build, connect, deploy and manage intelligent bots that interact naturally wherever your users are talking – from your app or website to text/sms to Skype, Slack, Teams, Facebook Messenger, Kik, Office 365 mail and other popular services. Allow your bots to scale based on-demand and you pay only for the resources you consume." },
                { key: 1, title: "Azure App Service", link: "", description: "Azure App Service enables ultimately scalable PaaS web service hosting." },
                { key: 2, title: "Luis AI", link: "https://www.luis.ai/about", description: "NLU platform by MS Cognitive Services" },
                { key: 3, title: "Azure Search Service", link: "", description: "" }
            ]
        }
        this.botTitleBarOnClick = this.botTitleBarOnClick.bind(this);
    };

    botTitleBarOnClick() {
        this.setState(prevState => ({
            botWindowToggled: !prevState.botWindowToggled
        }));
    }

    render() {
        return (
            <div className="main-container container-fluid">
                <div className="sidePanel"></div>
                <div className="row">
                    <div className="col-sm-6">
                        <h2>DI Sample Chat Bot</h2>
                        <h4>Purpose</h4>
                        <p>Generic + CRM chatbot demo. Natural Language Understanding to provide meaningful responses
                           to random queries written in english. Falls back to keyword-based full text search index to
                           cover for misspelled or linguistically challenging queries.
                        </p>
                        <h4>Components</h4>
                    </div>
                    <div className="col-sm-6">
                    </div>
                </div>
                <div className="row">
                    <section className="components col-sm-12">
                        <ComponentList components={this.state.components} />
                    </section>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className={(this.state.botWindowToggled) ? 'bot-container bot-container-open' : 'bot-container'}>
                            <div className="bot-titlebar" onClick={this.botTitleBarOnClick}></div>
                            <iframe className="bot-frame" src='https://webchat.botframework.com/embed/disamplebot_net?s=SEcurXg8h3w.cwA.Jxk.JMEMogU4t0SWgoU2yQMlmYFR82-v7hlNMHKkonPHV1M'></iframe>
                        </div>
                    </div>
                </div>
            </div >

        );

    }
}

const ComponentList = (props) => {
    return (
        <div>
            {props.components.map(component => <Component key={component.id} {...component} />)}
        </div>
    );
}

const Component = (props) => {
    return (
        <article>
            <div className="row">
                <p className="col-sm-3 component-title">{props.title}</p>
                <p className="col-sm-6 component-desc">
                    {props.description}
                </p>
            </div>
        </article>
    );
};

render(<App />, document.getElementById('app'));