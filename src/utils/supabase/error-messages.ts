// TODO: Find a better way to handle error messages from Supabase in spanish

export function getErrorMessage(originErrorMessage: string) {
  switch (originErrorMessage) {
    case "To signup, please provide your email":
      return "Para registrarse, por favor proporcione su correo electrónico";
      break;
    case "Signup requires a valid password":
      return "El registro requiere una contraseña válida";
      break;
    case "User already registered":
      return "Usuario ya registrado";
      break;
    case "Only an email address or phone number should be provided on signup.":
      return "Solo se debe proporcionar una dirección de correo electrónico o número de teléfono al registrarse.";
      break;
    case "Signups not allowed for this instance":
      return "No se permiten registros para esta instancia";
      break;
    case "Email signups are disabled":
      return "Los registros por correo electrónico están deshabilitados";
      break;
    case "Email link is invalid or has expired":
      return "El enlace de correo electrónico es inválido o ha expirado";
      break;
    case "Token has expired or is invalid":
      return "El token ha expirado o es inválido";
      break;
    case "The new email address provided is invalid":
      return "La nueva dirección de correo electrónico proporcionada no es válida";
      break;
    case "Password should be at least 6 characters":
      return "La contraseña debe tener al menos 6 caracteres";
      break;
    case "Invalid login credentials":
      return "Credenciales de inicio de sesión inválidas";
      break;
  }
}
