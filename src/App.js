import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import StarRating from './StarRating'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            features: [
                {
                    id: 0,
                    title: 'JSX',
                    rating: 2
                },
                {
                    id: 1,
                    title: 'React Dome',
                    rating: 4
                },
                {
                    id: 2,
                    title: 'Stateless Functional Component',
                    rating: 5
                },
                {
                    id: 3,
                    title: 'Class Component',
                    rating: 1
                }
            ]
        };
        this.rateFeature = this.rateFeature.bind(this);
    }

    rateFeature(id, rating) {
        const {features} = this.state;
        this.setState({
            features: features.map(f=>
                (f.id !== id) ? f : ({...f, rating})
            )
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <h2>Welcome to the jungle</h2>
                    <div className="features">
                        {this.state.features.map(f =>
                            <div key={f.id}>
                                <h3>{f.title}</h3>
                                <StarRating starsSelected={f.rating}
                                            onChange={rating => this.rateFeature(f.id, rating)}/>
                            </div>
                        )}
                    </div>
                </header>
            </div>
        );
    }
}

export default App;
