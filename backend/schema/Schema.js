const mongoose = require('mongoose');

const doctorSchema=new mongoose.Schema(
    {
    _id: ObjectId,
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },

    licenseNumber: { type: String, required: true },
    licenseState: { type: String },
    licenseCountry: { type: String, default: "India" },

    // CLOUDINARY FIELDS for license certificate
    licenseDocument: {
      url: { type: String },        // Cloudinary secure URL
      publicId: { type: String },   // Cloudinary public_id (needed for deleting later)
    },

    // CLOUDINARY FIELDS for profile picture
    profilePicture: {
      url: { type: String },        // Cloudinary secure URL
      publicId: { type: String },   // Cloudinary public_id
    },

    isVerified: { type: Boolean, default: false },
    
    bio: { type: String },

    reputationPoints: { type: Number, default: 0 },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  }
)



const caseSchema = new mongoose.Schema(
  {
    _id: ObjectId,

    title: { type: String, required: true },
    description: { type: String, required: true },

    specialties: [String],
    diseaseTags: [String],
    generalTags: [String],

    patientAge: { type: Number },
    patientGender: { type: String, enum: ["Male", "Female", "Other", "Unknown"] },

    // CLOUDINARY CASE FILES
    caseFiles: [{
      url: { type: String },        // Cloudinary secure URL
      publicId: { type: String },   // Cloudinary public_id
      fileType: { type: String },   // "image" | "pdf" | "docx" etc.
    }],

    createdBy: { type: ObjectId, ref: 'Doctors', required: true },
    upvotes: { type: Number, default: 0 },
    upvotedBy: [{ type: ObjectId, ref: 'Doctors' }],

    status: { type: String, enum: ["Published", "Under Review", "Flagged"], default: "Under Review" },
    views: { type: Number, default: 0 },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  }
)


const doctorModel = mongoose.model('Doctors', doctorSchema);
const CaseModel = mongoose.model('Cases', caseSchema);

module.exports = {
  doctorModel,
  CaseModel
}