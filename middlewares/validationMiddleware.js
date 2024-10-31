import { body, param, validationResult } from "express-validator";
import { BadRequestError } from "../utils/customErrors.js";
import mongoose from "mongoose";
import User from "../models/userModel.js";
import Company from "../models/companyModel.js";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessage = errors.array().map((err) => err.msg);
        throw new BadRequestError(errorMessage);
      }
      next();
    },
  ];
};

/************************ VALIDATORS ************************/

export const validateId = withValidationErrors([
  param("id")
    .custom((val) => mongoose.Types.ObjectId.isValid(val)).withMessage("Invalid MongoDb id"),
]);

export const deviceInputValidator = withValidationErrors([
  body("device_name")
    .notEmpty().withMessage("Device name field is required")
    .isLength({ min: 3, max: 256 }).withMessage("Device name should be between 3 to 256 characters"),
  body("description")
    .isLength({ min: 3, max: 256 }).withMessage("Description should be between 3 to 256 characters"),
  body("code")
    .notEmpty().withMessage("Code field is required")
    .isLength({ min: 3, max: 256 }).withMessage("Code should be between 3 to 256 characters"),
  body("type")
    .notEmpty().withMessage("Type field is required"),
  body("owner.name")
    .notEmpty().withMessage("Name field is required")
    .isLength({ min: 3, max: 256 }).withMessage("Device name should be between 3 to 256 characters"),
  body("owner.phone")
    .notEmpty().withMessage("Phone field is required")
    .isMobilePhone().withMessage("Please provide valid phone"),
  body("owner.email")
    .notEmpty().withMessage("Email field is required")
    .isEmail().withMessage("Please enter valid email")
]);

export const registerInputValidator = withValidationErrors([
  body("name")
    .notEmpty().withMessage("Name field is required")
    .isLength({ min: 3, max: 256 }).withMessage("Name should be between 3 to 256 characters"),
  body("email")
    .notEmpty().withMessage("Email field is required")
    .isEmail().withMessage("Please enter valid email")
    .custom(async (email) => {
      const user = await User.findOne({email: email})
      if(user) throw new BadRequestError('Email already exists')
    }),
  body("password")
    .notEmpty().withMessage("Password field is required")
    .isLength({min:8}).withMessage("Password must be at least 8 characters"),
  body("company")
    .notEmpty().withMessage("Company field is required")
    .custom(async (companyName) => {
      const company = await Company.findOne({name: companyName})
      if(!company) throw new BadRequestError("Company does not exist in system")
    })
])

export const loginInputValidator = withValidationErrors([
  body("email")
    .notEmpty().withMessage("Email field is required")
    .isEmail().withMessage("Please enter valid email"),
  body("password")
    .notEmpty().withMessage("Password field is required")
])

export const updateUserValidator = withValidationErrors([
  body("name")
    .notEmpty().withMessage("Name field is required")
    .isLength({ min: 3, max: 256 }).withMessage("Name should be between 3 to 256 characters"),
  body("email")
    .notEmpty().withMessage("Email field is required")
    .isEmail().withMessage("Please enter valid email")
    .custom(async (email) => {
      const user = await User.findOne({email: email})
      if(user && user._id.toString() !== req.user.userId){
        throw new BadRequestError('email already exists')
      } 
    }),
])

