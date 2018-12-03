import React from 'react';
import SeriesList from '../../components/SeriesList'
import  Loader from '../../components/Loader';
import Intro from '../../components/Intro';

class Series extends React.Component {
    state = {
        series:[],
        seriesName: '',
        isFetching: false,
    }
      

    onSeriesInputChange = e => {
        this.setState({seriesName:e.target.value, isFetching:true});
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then(response  => response.json())
            .then(json => this.setState({series:json, isFetching:false}))
    }

    render() {
        const {series, seriesName, isFetching} = this.state;
        return( 
            <div>
                <Intro message="Hey Bingers ! You can find all your movies here"/>
            <div>
              <input value={seriesName} 
              type="text" 
              onChange={this.onSeriesInputChange} />
            </div>
            {series.length === 0 && seriesName.trim() === '' && 
                <p>Please enter the name of the TV series you're searching for</p>
            }
            {
                series.length === 0 && seriesName.trim() !== '' &&
                <p>No series called ' {seriesName} ' found.</p>
            }
            {
                isFetching === true && <Loader />
            }
            {
                !isFetching &&  <SeriesList list={this.state.series} />
            }
            </div>
        );
    }
}

export default Series;