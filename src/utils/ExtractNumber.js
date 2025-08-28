export const getNumbers = (input) => {
  if (!input) return "00000";

  let numbers = String(input).replace(/\D/g, "");
  if (!numbers) return "00000";

  return numbers.padStart(5, "0");
};
