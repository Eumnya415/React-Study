import React, { Component } from 'react';

class LifeCycle extends Component {
    state = {
        color:null
    }
    constructor(props){
        super(props);
        console.log('constructor');
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    // 마운트 과정에서도 호출되고, 업데이트가 시작하기 전에도 호출되는 메서드
    static getDerivedStateFromProps(nextProps, prevState){
        console.log('getDerivedStateFromProps',nextProps,prevState);
        if(nextProps.color !== prevState.color){
            return{color:nextProps.color}
        }
        return null;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('getSnapshotBeforeUpdate',prevProps,prevState);
        if(prevProps.color !== this.props.color){
        return prevProps.color;
        }
        return null;
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('componentDidUpdate',prevProps,prevState,snapshot);
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate',nextProps,nextState);
        return nextProps.color === 'green' ? false : true;
    }

    render() {
        console.log('render');
        return (
            <div>
                <h1 style={{color:this.props.color}}>
                    props : {this.props.color} <br />
                    state : {this.state.color}
                </h1>
            </div>
        );
    }
}

export default LifeCycle;