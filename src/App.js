import React from 'react';
import ImageEffect from 'react-image-effects';

const effects = [
  'airbrush',
  // 'chalkboard',
  // 'collage',
  'colored-chalkboard',
  'colored-pencil',
  'emboss',
  // 'flannel',
  'hallucination',
  // 'infrared',
  // 'low-ink-h',
  // 'low-ink-v',
  // 'mirror-h',
  // 'mirror-v',
  // 'mosaic',
  'night-vision',
  // 'none',
  // 'pencil',
  // 'photo-border',
  'selective-color',
  // 'warhol',
  'watercolor',
];

const images = [
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2F1d6bc1.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2F397189.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2Fadbc39.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2Fb9dfcd.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2F62fd6d.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2Fb63b8e.png?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2Fb8a3b7.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2Fdf306e.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2Ff17ee5.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2F523b7e.png?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2F520669.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2Fa9eda0.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2Fc435e1.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2Fcb8829.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2Fc94079.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2F6e32fa.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2Fa69141.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2F24dda5.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2F6d245c.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2F89851a.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2Fcf19c3.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2Fa97302.png?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2Fdb0a18.png?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2F1d6bc1.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2F54c4e9.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2F8a90ac.png?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2F434da6.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2Ffba638.png?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2F757edd.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2F9908be.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2F2cdc94.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2F77bfa9.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2Fbd05df.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2Fb07c8c.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2F4d0de2.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2F204e25.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2F000014.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2F204e25.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2Ff6e144.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2F294712.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2F4d0de2.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2F0d6ced.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2F0f0f74.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2Fd8f78c.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2F67f569.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2F9dcbab.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2Fa5cfb6.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2Ff26d62.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2F562243.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/glide-prod.appspot.com/o/img-uploads%2FwgL0JdkDmy5zVYWe8SLV%2F7c4d6d.jpeg?alt=media',
];

function App() {
  return (
    <div>
      {images.map(image =>
        effects.map(effect => (
          <div style={{ marginBottom: '50px' }}>
            <ImageEffect url={image} effect={effect} />
            <h3>{`Effect: ${effect}`}</h3>
          </div>
        )),
      )}
      }
    </div>
  );
}

export default App;
