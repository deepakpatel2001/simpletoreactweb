import React, { useState } from "react";

const images = [
    {
        id: 1,
        src: "https://picsum.photos/200/200",
    },
    {
        id: 2,
        src: "https://picsum.photos/200/200",
    },
    {
        id: 3,
        src: "https://picsum.photos/200/200",
    },
    {
        id: 4,
        src: "https://picsum.photos/200/200",
    },
    {
        id: 5,
        src: "https://picsum.photos/200/200",
    },
];

const Lightbox = ({ image, onClose }) => {
    return (
        <div className="lightbox">
            <div className="lightbox__overlay" onClick={onClose}></div>
            <div className="lightbox__content">
                <img src={image.src} alt={`Image ${image.id}`} />
                <button className="lightbox__close" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

const Demo = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    return (
        <div className="gallery">
            {images.map((image) => (
                <div
                    key={image.id}
                    className="gallery__item"
                    onClick={() => handleImageClick(image)}
                >
                    <img src={image.src} alt={`Image ${image.id}`} />
                    <div className="gallery__overlay">
                        <i className="fa fa-search"></i>
                    </div>
                </div>
            ))}
            {selectedImage && <Lightbox image={selectedImage} onClose={handleClose} />}
        </div>
    );
};

export default Demo;