// routes/post_message_details.js
const postMessageDetailsRoute = {
  path: '/submit',
  method: 'post',
  handler: async (req, res) => {
    console.log(req.body);
    res.status(200).json({
      message: 'Data received',
      data: req.body
    });
  }
};

module.exports = { postMessageDetailsRoute };
