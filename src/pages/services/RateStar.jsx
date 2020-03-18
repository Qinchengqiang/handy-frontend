import React, { Component } from "react";

import starImg from "../../img/star.svg";
import halfStarImg from "../../img/star-half-alt.svg";

class RateStar extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {

    //     };
    // }

    componentDidMount() {
        //get data from the store when the first render

    }


    // showFullStar(){
    //     return (
    //         <div className="review__star">
    //             <img src={starImg} alt="star" width="100%" />
    //         </div>
    //     );
    // }


    // showHalfStar(){
    //     return (
    //         <div className="review__star">
    //             <img src={halfStarImg} alt="star" width="100%" />
    //         </div>
    //     );
    // }


    showStar(star, halfStar) {

        // for(let i=0; i<star; i++){
        //     this.showFullStar();
        // }
        // for(let j=0; j<halfStar; j++){
        //     this.showHalfStar();
        // }


        if (star === 5)
            return (
                <div className="review__star">
                    <img src={starImg} alt="star" width="100%" />
                    <img src={starImg} alt="star" width="100%" />
                    <img src={starImg} alt="star" width="100%" />
                    <img src={starImg} alt="star" width="100%" />
                    <img src={starImg} alt="star" width="100%" />
                </div>
            );
        else if (star === 4 && halfStar === 1){
            return (
                <div className="review__star">
                    <img src={starImg} alt="star" width="100%" />
                    <img src={starImg} alt="star" width="100%" />
                    <img src={starImg} alt="star" width="100%" />
                    <img src={starImg} alt="star" width="100%" />
                    <img src={halfStarImg} alt="star" width="100%" />
                </div>
            );
        }
    }

    render() {
        return (
            <div className="review__star">
                {this.showStar(this.props.star, this.props.halfStar)}
            </div>
        );
    }
}

export default RateStar;
