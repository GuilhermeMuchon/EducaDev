import React, { Component } from 'react';

import back_button from '../../images/back_button.svg';
import icone_pesquisa from '../../images/icone_pesquisa.svg';
import Grid from '@material-ui/core/Grid'; 
import TextField from '@material-ui/core/TextField';
import ButtonBase from '@material-ui/core/ButtonBase';

import ComplexGrid from '../../components/ComplexGrid';

import {Link} from 'react-router-dom';

import './Basico.css';

class Basico extends Component {
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
                            <span className="search-learn">
                                <TextField className="searchInput"
                                           id="searchInput" 
                                           placeholder="Search for Courses" 
                                           onChange={this.onSearchInputChange} 
                                /> 
                                <img src={icone_pesquisa} alt=""/>
                            </span>
                            <span className="list-conteudos">
                                <Grid container spacing={2}>
                                    <Grid item xs={3}>
                                        <ButtonBase>
                                            <ComplexGrid/>
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <ComplexGrid/>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <ComplexGrid/>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <ComplexGrid/>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <ComplexGrid/>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <ComplexGrid/>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <ComplexGrid/>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <ComplexGrid/>
                                    </Grid>
                                </Grid>
                            </span>
                        </footer>
                    </div>
                </article>
            </section>
        );
    }
}

export default Basico;