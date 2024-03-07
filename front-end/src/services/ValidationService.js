class ValidationService {
  validateEmail(email) {
    const regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    return regex.test(email);
  }
  validatePassword(password) {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  }
  setLocalStorage(key, value) {
    localStorage.setItem(key, value);
  }
  getLocalStorage(key) {
    const result = localStorage.getItem(key);
    return result;
  }
  emptyLocalStorage(key) {
    localStorage.removeItem(key);
  }
  constructor() {}
}
export default ValidationService;
