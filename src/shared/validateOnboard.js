export default function validateOnboard(step, form) {
  const errors = {};

  /* =========================================
     STEP 1
  ========================================= */

  if (step === 1) {
    if (!form.instituteName?.trim()) {
      errors.instituteName = "Institute name is required";
    }

    const cleanedPhone = form.phone
      .replace(/\s+/g, "")
      .replace(/^\+91/, "")
      .replace(/^91/, "");

    if (!form.phone?.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(cleanedPhone)) {
      errors.phone = "Enter a valid Indian mobile number";
    }

    if (!form.type) {
      errors.type = "Please select institute type";
    }
  }

  /* =========================================
     STEP 2
  ========================================= */

  if (step === 2) {
    if (!form.subdomain?.trim()) {
      errors.subdomain = "Subdomain is required";
    } else if (form.subdomain.length < 3) {
      errors.subdomain = "Minimum 3 characters";
    } else if (!/^[a-z0-9-]+$/.test(form.subdomain)) {
      errors.subdomain = "Only lowercase letters, numbers & hyphens allowed";
    }
  }

  /* =========================================
     STEP 3
  ========================================= */

  if (step === 3) {
    if (!form.adminName?.trim()) {
      errors.adminName = "Admin name is required";
    }

    if (!form.adminEmail?.trim()) {
      errors.adminEmail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.adminEmail)) {
      errors.adminEmail = "Invalid email address";
    }

    if (!form.password) {
      errors.password = "Password is required";
    } else if (form.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
  }

  return errors;
}
