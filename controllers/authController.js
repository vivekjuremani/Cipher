import User from '../model.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, UnAuthenticatedError } from '../errors/index.js';
import bcrypt from 'bcryptjs';
const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError('please provide all values');
  }
  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError('Email already in use');
  }
  const user = await User.create({ name, email, password });

  const token = user.createJWT();

  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      lastName: user.lastName,
      mobileno: user.mobileno,
      name: user.name,
    },
    token,
  });
};
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError('Please provide all values');
  }
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    throw new UnAuthenticatedError('Invalid Credentials');
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError('Invalid Credentials');
  }
  const token = user.createJWT();

  user.password = undefined;

  res.status(StatusCodes.OK).json({ user, token });
};
const updateUser = async (req, res) => {
  const { email, name, lastName, mobileno } = req.body;
  if (!email || !name || !lastName || !mobileno) {
    throw new BadRequestError('Please provide all values');
  }
  const user = await User.findOne({ _id: req.user.userId });

  user.email = email;
  user.name = name;
  user.lastName = lastName;
  user.mobileno = mobileno;

  await user.save();

  const token = user.createJWT();

  res.status(StatusCodes.OK).json({ user, token });
};

const changepassword = async (req, res) => {
  var { old, new_pass, confirm } = req.body;
  if (!old || !confirm || !new_pass) {
    throw new BadRequestError('Please provide all values');
  }
  const user = await User.findOne({ _id: req.user.userId }).select('+password');
  const isPasswordCorrect = await user.comparePassword(old);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError('Invalid Credentials');
  }
  if (new_pass !== confirm) {
    throw new BadRequestError('Please provide correct values');
  } else {
    const salt = await bcrypt.genSalt(10);
    new_pass = await bcrypt.hash(new_pass, salt);
    await User.findOneAndUpdate(
      { _id: req.user.userId },
      { set: { password: new_pass } }
    );
  }
  res.status(StatusCodes.OK).json({});
};

const logout = async (req, res) => {
  res.cookie('token', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now() + 1000),
  });
  res.status(StatusCodes.OK).json({ msg: 'user logged out!' });
};

export { register, login, updateUser, changepassword, logout };
