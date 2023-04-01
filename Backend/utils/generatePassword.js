function generatePassword() {
    const charset = '123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$'; // Characters that can be used in the password
    let password = '';
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length); // Generate a random index to select a character from the charset
      password += charset[randomIndex];
    }
    return password;
  }
  module.exports=generatePassword;