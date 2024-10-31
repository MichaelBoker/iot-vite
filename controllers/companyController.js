import company from "../models/companyModel.js";

const getTypes = async (req,res) => {
    console.log(req.user)
    const user = req.user;
    const { types } = await company.findById(user.company)
    res.json({types})

}

const getCompanies = async (req,res) => {
    const companies = await company.find()
    res.json(companies)
}

export {getTypes, getCompanies}