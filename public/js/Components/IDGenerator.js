const generator = () => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const charLength = chars.length;
  let result = '__';
  for (let i = 0; i < 15; i++) {
    result += chars.charAt(Math.floor(Math.random() * charLength));
  }
  return result;
}

export { generator }