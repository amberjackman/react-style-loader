import React from 'react'
import styles from './Button.module.css'
import classNames from 'classnames/bind';


const cs = classNames.bind(styles);
console.log(cs('button', 'loading'))
class Button extends React.Component{

  state = {
    loading: false
  };

  render(){

    const { loading } = this.state;

    return (
    <button 
      onClick={this.startLoading} 
      className={cs("button",{loading})}
      {...this.props } />
    );
    }


  startLoading = () => {
    this.setState({
      loading:true
    });
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 1000)
  }

}

export default Button;

