export const getNumbers = (input) => {
  let numbers = input.replace(/\D/g, "");
  if (!numbers) return "00000";
  return numbers.padStart(5, "0");
}
