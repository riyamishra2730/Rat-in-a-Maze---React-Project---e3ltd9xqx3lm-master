import React from 'react';
import "./maze.css";

const Maze = ({ arr, sol, problem }) => {
    return (
        <div className='main-Container'>
            <div className='top'>
                <img className='icon' src="https://www.freepnglogos.com/uploads/tom-and-jerry-png/tom-and-jerry-crew-member-the-month-april-never-home-23.png" />
            </div>
            <div className='Container'>
                { arr?.map((item, index) => {
                    return(
                        <div className='row'>
                            { item?.map((block, number) => {
                                return (
                                    <div
                                        className='block' 
                                        style={{ 
                                            backgroundColor: 
                                                block === 1 && sol ? 'green' 
                                                : block === 1 && problem ? 'white' 
                                                : block === 0 && problem ? 'darkred' : 'white',
                                            color: 
                                                block === 1 && sol ? 'green'
                                                : block === 1 && problem ? 'white'
                                                : block === 0 && problem ? 'darkred' : 'white'
                                        }}> { block } </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
            
            <img className='icon bottom' src='https://cdn-icons-png.flaticon.com/512/5900/5900369.png'></img>
        </div>
    );
};

export default Maze;