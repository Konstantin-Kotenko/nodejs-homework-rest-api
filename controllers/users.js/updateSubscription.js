const {User} = require('../../models/user');

const updateSubscription = async (req, res) => {
  const {_id} = req.user;
  const {email, subscription} = req.body;
  await User.findByIdAndUpdate(_id, {subscription}, {new: true});
  res.status(200).json({
    email,
    subscription,
  });
};

module.exports = updateSubscription;
