const fs = require('fs/promises');
const path = require('path');
const jimp = require('jimp');
const {User} = require('../../models/user');

const avatarDir = path.join(__dirname, '../../', 'public', 'avatars');

console.log(avatarDir);
const updateAvatar = async (req, res) => {
  const {_id} = req.user;
  const {path: tmpUpload, originalname} = req.file;
  if (req.file) {
    const {file} = req;
    const image = await jimp.read(file.path);
    await image
      .autocrop()
      .cover(
        250,
        250,
        jimp.HORIZONTAL_ALIGN_CENTER | jimp.VERTICAL_ALIGN_MIDDLE
      )
      .writeAsync(file.path);
  }
  const extention = originalname.split('.').pop();
  const filename = `${_id}.${extention}`;
  const resultUpload = path.join(avatarDir, filename);
  await fs.rename(tmpUpload, resultUpload);
  const avatarURL = path.join('avatars', filename);
  await User.findByIdAndUpdate(_id, {avatarURL});
  res.json({
    avatarURL,
  });
};

module.exports = updateAvatar;
