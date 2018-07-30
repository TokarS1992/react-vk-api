import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default class PhotoItem extends  Component{
    render() {
        const { info } = this.props;

        return <div className='photo-item'>
            <p><img src={info.photo_75} /></p>
            <p>{info.likes.count} ❤</p>
        </div>
    }
}

PhotoItem.propTypes = {
    info: PropTypes.any.isRequired
};