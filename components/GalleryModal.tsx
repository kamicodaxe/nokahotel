import { useEffect, useState } from "react";
// @ts-ignore
import ImageGallery from "react-image-gallery";

const GalleryModal: React.FC<{
    images: string[],
    initialSlide: number,
    onOpenModal: boolean,
    onCloseModal: () => void,
    // @ts-ignore
    children
}> = ({ images, initialSlide, onOpenModal, onCloseModal, children }) => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (onOpenModal) {
            setShowModal(true);
        } else {
            onCloseModal()
            setShowModal(false);
        }
    }, [onOpenModal]);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const galleryImages = images.map((image: string) => ({
        original: image,
        thumbnail: image,
    }));

    return (
        <>
            <div className="gallery-modal-container">
                <button className="text-center py-32 px-16" onClick={handleOpenModal}>Voir la Galerie</button>
                {showModal && (
                    <div className="gallery-modal-backdrop" onClick={() => setShowModal(false)}>
                        <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
                            <span className="gallery-modal-close" onClick={handleCloseModal}>
                                &times;
                            </span>
                            <ImageGallery items={galleryImages} slideIndex={initialSlide} />
                        </div>
                    </div>
                )}

            </div>
            {/* @ts-ignore */}
            {children && children}
        </>

    );
}


export default GalleryModal