import React, { Component } from 'react';

import back_button from '../../images/back_button.svg';

import {Link} from 'react-router-dom';

import './Basico.css';

class Disciplina extends Component {
    render(){
        return(
            <section id="Basico">
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
                       <header>
                            <Link to="/">
                               <img src={back_button} alt=""/>
                            </Link>
                            <h1>Básico</h1>
                        </header>
                        <footer>
                            <h1>Disciplina 01</h1>
                        </footer>
                    </div>
                </article>
            </section>
        );
    }
}

export default Disciplina;