export const isEmail = (value: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
};

export const isPhone = (value: string) => {
  return /^\+?\d{10,15}$/.test(value);
};

export const getType = (emailOrPhone: string) => {
  if (isEmail(emailOrPhone)) return "email";
  if (isPhone(emailOrPhone)) return "phone";
  return undefined;
};
