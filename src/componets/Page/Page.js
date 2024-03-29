import React, { Component } from 'react';
import PhotoItem from '../Photo-item/PhotoItem';
import PropTypes from 'prop-types';

export default class Page extends Component {
    onYearBtnClick(e) {
        this.props.getPhotos(+e.target.innerText);
    }
    render() {
        const { year, photos, fetching, error } = this.props;
        const years = [2016, 2015, 2014, 2013, 2012, 2011, 2010];

        return <div className='ib page'>
            <p>
                { years.map((item, index) =>  <button className='btn' key={index} onClick={::this.onYearBtnClick}>{item}</button> )}
            </p>

            <h3>{year} год [{photos.length}]</h3>

            { error ? <p className='error'> Во время загрузки фото произошла ошибка</p> : '' }

            {
                fetching ?
                    <p>Загрузка...</p>
                    :
                    <div className='photos-list'>
                        {photos.map((entry, index) =>
                            <PhotoItem key={index} info={entry}/>
                        )}
                    </div>
            }
        </div>
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    fetching: PropTypes.bool.isRequired,
    error: PropTypes.any.isRequired,
    getPhotos: PropTypes.func.isRequired,
    setYear: PropTypes.func.isRequired
};