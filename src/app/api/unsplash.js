// pages/api/unsplash.js
import axios from 'axios';

export default async (req, res) => {
  try {
    // Replace 'YOUR_ACCESS_KEY' with your actual Unsplash API access key
    const accessKey = 'BAzdVIK3DE31jR4VlJzu8oG1sawM8U8ZUgLdtToZtt4';
    const response = await axios.get('https://api.unsplash.com/photos/?client_id=', {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
    });
    if (response.status === 200) {
      const photoData = response.data;
      res.status(200).json(photoData);
    } else {
      res.status(response.status).json(response.data);
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the photo.' });
  }
};
