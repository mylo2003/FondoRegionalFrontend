export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("sub");
  window.location.href = "/";
};
