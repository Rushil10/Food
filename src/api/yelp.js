import axios from 'axios';

export default axios.create({
  baseURL:'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 
    'Bearer La1o6bocMAjmPDL_2I89pyrcUHc8VzVayPBMsXdwqrPnOV3IUh-HGZYhTLFU-771tVkmMTzoD8COSuGOK0x6SVNimMTt_ZN8BsXq1q0iZkdcdO1y7AAC2pvN_04mX3Yx'
  }
});

