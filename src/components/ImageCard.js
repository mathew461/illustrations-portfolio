import React from 'react';
import './imageCard.css';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { spans: 0 };

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
 
        const spans = Math.ceil(height / 11);
 
        this.setState({ spans });
     };

    render() {

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img
                    ref={this.imageRef} 
                    src={this.props.src}
                    //I think we will have to rejig the Image tag for it to work in the Portfolio Project.
                />
            </div>
        );
    }
}

export default ImageCard;






// I want to use this component in my Portfolio project. 
//This component was built during 10. Using Ref's for DOM Access: 3. Creating an Image Card Component
// ImageList.JS is where this Component is connected to. We will have to work out what file in Portfolio will be neccesary {The file with the Grid component}