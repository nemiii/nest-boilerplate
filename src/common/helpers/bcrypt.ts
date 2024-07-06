import * as bcrypt from 'bcrypt';

export const hashPassword = async (password: string) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);

  return bcrypt.hash(password, salt);
};

export const comparePassword = async (password: string, passwordHash: string) =>
  bcrypt.compare(password, passwordHash);
