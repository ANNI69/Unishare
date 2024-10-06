import cloudinary from 'cloudinary';

cloudinary.v2.config({
    cloud_name: 'dh2p410f2',
    api_key:  process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


export default cloudinary;