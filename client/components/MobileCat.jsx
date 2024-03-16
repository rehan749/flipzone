
import ReactCardSlider from 'react-card-slider-component';

    const slides = [
        {
          image: "https://picsum.photos/200/300",
          title: "This is a title 1",
          description: "This is a description",
          clickEvent: "sliderClick"
        },
        {
          image: "https://picsum.photos/600/500",
          title: "This is a second title 2",
          description: "This is a second description",
          clickEvent: "sliderClick"
        },
        {
          image: "https://picsum.photos/700/600",
          title: "This is a third title 3",
          description: "This is a third description",
          clickEvent: "sliderClick"
        },
        {
          image: "https://picsum.photos/700/600",
          title: "This is a third title 4",
          description: "This is a third description",
          clickEvent: "sliderClick"
        },
        {
          image: "https://picsum.photos/700/600",
          title: "This is a third title 5",
          description: "This is a third description",
          clickEvent: "sliderClick"
        },
        {
          image: "https://picsum.photos/700/600",
          title: "This is a third title 6",
          description: "This is a third description",
          clickEvent: "sliderClick"
        },
        {
          image: "https://picsum.photos/700/600",
          title: "This is a third title 7",
          description: "This is a third description",
          clickEvent: "sliderClick"
        },
        {
          image: "https://picsum.photos/700/600",
          title: "This is a third title 8",
          description: "This is a third description",
          clickEvent: "sliderClick"
        },
        {
          image: "https://picsum.photos/700/600",
          title: "This is a third title 9",
          description: "This is a third description",
          clickEvent: "sliderClick"
        },
        {
          image: "https://picsum.photos/700/600",
          title: "This is a third title 11",
          description: "This is a third description",
          clickEvent: "sliderClick"
        },
        {
          image: "https://picsum.photos/700/600",
          title: "This is a third title 12",
          description: "This is a third description",
          clickEvent: "sliderClick"
        },
        {
          image: "https://picsum.photos/700/600",
          title: "This is a third title 13",
          description: "This is a third description",
          clickEvent: "sliderClick"
        },
        {
          image: "https://picsum.photos/700/600",
          title: "This is a third title 14",
          description: "This is a third description",
          clickEvent: "sliderClick"
        }
      ];
    
      const MobileCat = () => {
    return (
       <div className="container py-4">
          <div className="row">
              <div className="slider">
                  <p>SmartPhones</p>
                  <ReactCardSlider slides={slides} />
              </div>
          </div>
       </div>
    );
};

export default MobileCat;
