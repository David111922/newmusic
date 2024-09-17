import GalleryItem from './GalleryItem';

interface GalleryProps {
  data: any[]; // You can replace `any[]` with a specific type if you know the structure of the data
}

function Gallery({ data }: GalleryProps) {
  const display = data.map((item, index) => {
    return <GalleryItem item={item} key={index} />;
  });

  return <div>{display}</div>;
}

export default Gallery;
