import 'dotenv/config';

export default {
  expo: {
    name: "Foodies",
    slug: "your-Foodies",
    extra: {
      BASE_DEVICE_HEIGHT: process.env.BASE_DEVICE_HEIGHT,
      BASE_DEVICE_WIDTH: process.env.BASE_DEVICE_WIDTH,
    },
  },
};
