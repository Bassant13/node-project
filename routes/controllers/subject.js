import subjectmodel from "../../models/subject";
export const allsubjects = async(req, res) => {

    const subjects = await subjectmodel.find().lean();

    res.render('subjects/subjectpage',{ subjects });
};