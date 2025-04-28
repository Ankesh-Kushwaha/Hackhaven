const zod = require('zod');

const signupValidate = zod.object({
  fullName: zod.string(),
  email: zod.string().email(),
  password: zod.string().min(5).max(10),
  licenseNumber: zod.string(),
  licenseState: zod.string(),
  licenseCountry: zod.string(),
  bio:zod.string()
})




module.exports = {
   signupValidate,
}