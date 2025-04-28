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


const signinValidation = zod.object({
  email:zod.string(),
  password:zod.string().min(5).max(10)
})


const CreatecaseValidation = zod.object({
  title: zod.string().min(1, "Title is required"),
  description: zod.string().min(1, "Description is required"),

  specialties: zod.array(zod.string()).optional(),
  diseaseTags: zod.array(zod.string()).optional(),
  generalTags: zod.array(zod.string()).optional(),

  patientAge: zod.number().optional(),
  patientGender: zod.enum(["Male", "Female", "Other", "Unknown"]).optional(), 
  upvotes: zod.number().optional(),
  upvotedBy: zod.array(zod.string().regex(/^[0-9a-fA-F]{24}$/)).optional(),
  
  status: zod.enum(["Published", "Under Review", "Flagged"]).optional(),
  views: zod.number().optional(),

  createdAt: zod.date().optional(),
  updatedAt: zod.date().optional()
});





module.exports = {
  signupValidate,
  signinValidation,
  CreatecaseValidation
}