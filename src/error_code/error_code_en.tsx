const error_code_en: any = {
  "200": "Success",
  "400": "Bad Request",
  "401": "Unauthorized",
  "402": "Invalid token",
  "403": "Forbidden",
  "404": "Not Found",
  "405": "Method Not Allowed",
  "406": "Error in parameters",
  "503": "Service Unavailable",
  "500": "Internal Server Error, please contact administrator.",
  "10002": "Rule Exists!",
  "user-auth-400001": "Account does not exist",
  "user-auth-400002": "Account is locked, please contact administrator",
  "user-auth-400003": "Incorrect user name or password",
  "user-auth-400004": "Account is locked, please contact administrator",
  "user-auth-400005": "Too frequent operation!",
  "user-auth-400006": "Please enter account in email format",
  "user-auth-400007": "Not compliant with password policy",
  "user-account-400001": "Account does not exist",
  "user-account-400002": "Account format is invalid",
  "user-account-400003": "Password format is invalid",
  "user-account-400004": "Password not same",
  "user-account-400005": "Not compliant with password policy",
  "user-account-400006": "Verification code format is invalid",
  "user-account-400007": "Verification code is invalid",
  "user-account-400008": "New password cannot be the same as old password.",
  "user-account-400009": "Old password is wrong",
  "user-account-400010":
    "Operation is too frequent, account is locked! Please contact administrator!",
  "user-account-400011": "Account is locked!",
  "user-policy-400001": "Fixed password cannot be empty",
  "user-info-400001": "Account already exists",
  "user-info-400002": "Account format is invalid",
  "user-info-400003": "Email format is invalid",
  "user-info-400004": "ID format is invalid",
  "user-info-400005": "Telephone format is invalid",
  "user-info-400006": "Name format is invalid",
  "user-info-400007": "Position format is invalid",
  "user-info-400008": "Gender format is invalid",
  "user-info-400009": "DOB format is invalid",
  "user-info-400010": "Onboard date format is invalid",
  "user-info-400011": "No results found",
  "user-role-400001": "Role does not exist",
  "user-role-400002": "User role is empty",
  "user-role-400003": "Role has associated user or resource, cannot be deleted",
  "user-role-400004": "Role name format is invalid",
  "user-role-400005": "Role description format is invalid",
  "user-role-400006": "System administrator prohibits modification and deletion",
  "user-role-400007": "System administrator prohibits resource modification",
  "user-role-400008": "Role name already exists",
  "user-sys-400001": "No results found",
  "user-sys-400002": "No data found",
  "user-org-400001": "No results found",
  "user-org-400002": "Organization already exists",
  "user-org-400003": "Organization has users, cannot be deleted",
  "user-org-400004": "Organization has subordinates, cannot be deleted",
  "user-org-400005": "Email format is invalid",
  "user-org-400006": "Number format is invalid",
  "user-org-400007": "Name format is invalid",
  "user-org-400008": "Abbreviation format is invalid",
  "user-org-400009": "Parent organization does not exist",
  "user-org-400010": "Organization head does not exist",

  "90000": "Order list cannot be empty",
  "90001": "Order source is entered incorrectly",
  "90002": "Service item is entered incorrectly",
  "90003": "Order status is entered incorrectly",
  "90004": "Exhibition name max length is 32",
  "90005": "Order number is entered incorrectly",
  "90006": "Customer name is entered incorrectly",
  "90007": "Order amount is entered incorrectly",
  "90008": "Order creation time cannot be empty",
  "90009": "Exhibition start date cannot be less than end date.",
  "90010": "Product name is entered incorrectly",
  "90011": "Payment code is entered incorrectly",
  "90012": "Product number is entered incorrectly",
  "90013": "Product price is wrong",
  "90014": "Pavilion number is entered incorrectly",
  "90015": "Exhibition number is entered incorrectly",

  // 角色与资源管理
  "user-role-40003": "The role has associated users or resources and cannot be deleted",
  "user-sesp-role-400001": "Super admin role, individual role, dispatch desk role are not allowed to be modified",
  "user-sesp-role-400002": "Super admin role, individual role, dispatch desk role are not allowed to be deleted",
  "user-sesp-role-400003": "Resources of the super admin role, individual role, dispatch desk role are not allowed to be modified",
  "user-sesp-role-400004": "Resources of the super admin role, individual role, dispatch desk role are not allowed to be deleted",
  "user-sesp-role-400005": "SESP default role can not allowed to be modified or deleted",
  "user-sesp-role-400006": "Resources of the SESP default role can not allowed to be modified or deleted"
};
export default error_code_en;
