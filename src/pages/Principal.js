import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Principal.css';

class New extends Component {
    render(){
        return(
            <section id="Principal">
                <article>
                    <div className="educadev-list">
                        <span className="Learn-list">
                            <h1>Learn</h1>
                        </span>
                        <span className="Games-list">
                            <h1>Games</h1>
                        </span>
                        <span className="Colab-list">
                            <h1>Colab</h1>
                        </span>
                        <span className="Forum-list">
                            <h1>Forum</h1>
                        </span>
                        <span className="About-list">
                            <h1>About</h1>
                        </span>
                    </div>
                </article>
                <article>
                    <div className="Learn">
                        <button onclick="">
                            <Link to="/learn_basico">
                                <span className="Basico-Learn">
                                    <h1>Basico</h1>
                                </span>
                            </Link>
                        </button>
                        <Link to="/learn_intermediario">
                            <span className="Intermediario-Learn">
                                <h1>Intermediário</h1>
                            </span>
                        </Link>
                        <Link to="/learn_avancado">
                            <span className="Avancado-Learn">
                                <h1>Avançado</h1>
                            </span>
                        </Link>
                    </div>
                </article>
            </section>
        );
    }
}

export default New;