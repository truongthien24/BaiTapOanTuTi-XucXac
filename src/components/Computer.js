import React, { Component } from 'react'
import {connect} from 'react-redux'

class Computer extends Component {
    render() {
        
        let keyframe = `@keyframes randomItem${Date.now()} {
            from {top: 0px;}
            to {top: 50px;}
        }`;

        const {computer} = this.props;
        return (
            <div className="d-flex justify-content-center align-items-center">
                <style>
                    {keyframe}
                </style>
                <div className="d-flex" style={{ height: '300px', position: 'relative' }}>
                    <img src='./img/baiTapOanTuTi/playerComputer.png' style={{width: '170px', height: '170px'}} className="align-self-end"></img>
                    <div className="result d-flex align-items-center justify-content-center" style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)'}}>
                        <img src={computer.hinhAnh} style={{position: 'absolute',width: '50px', height: '50px', animation: `randomItem${Date.now()} 0.7s` }}></img>
                    </div>
                </div>
            </div>
        )
    }
}

//Lấy state trên reducer về làm props của component
const mapStateToProps = (rootReducer) => {
    return {
        computer: rootReducer.stateOanTuTi.computer
    }
};

export default connect(mapStateToProps)(Computer)