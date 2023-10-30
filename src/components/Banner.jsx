/* eslint-disable react/prop-types */
import Source_1 from '../background1.png';
import Source_2 from '../background2.png';

import '../sass/Banner.scss';

export default function Banner({ aboutPage = false}) {
return (
<div className="banner">
<img src={aboutPage ? Source_2 : Source_1} alt="image du body" />
 {!aboutPage && <h1>Chez vous, partout et ailleurs</h1>}
</div>
    
    )
}

