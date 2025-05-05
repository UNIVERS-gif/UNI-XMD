const axios = require("axios");

module.exports = {
  getBuffer: async (url) => {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    return response.data;
  },

  sleep: (ms) => new Promise(res => setTimeout(res, ms)),

  ytDownload: async (url) => {
    // For demo, return a dummy file link
    return {
      title: "Demo Song",
      link: "https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3"
    }
  }
};
