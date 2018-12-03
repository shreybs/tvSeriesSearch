import React from 'react';
import Loading from'./loading.gif';

const Loader = props => (
    <div><img src={Loading} alt="LoadingIcon" style={{width:75}}/></div>
);

export default Loader; 