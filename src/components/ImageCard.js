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
        // This is the Lightbox code from the HTML version of this site. It works perfect there, but here seems to be causing problems.                              
        const lightbox = document.createElement('div')
        lightbox.id = 'lightbox'
        document.body.appendChild(lightbox)

        const images = document.querySelectorAll('img')
        images.forEach(image => {
            image.addEventListener('click', e => {
                lightbox.classList.add('active')
                const img = document.createElement('img')
                img.src = image.src
                while (lightbox.firstChild) {
                    lightbox.removeChild(lightbox.firstChild)
                }
                lightbox.appendChild(img)
            })
        });

        lightbox.addEventListener('click', e => {
            if (e.target !== e.currentTarget) return
            lightbox.classList.remove('active')
        })
        //End of Lightbox Code

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