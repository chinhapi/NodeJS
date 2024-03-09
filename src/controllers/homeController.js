import db from "../models/index"


let getHomePage = async (req, res) => {
    try{
        let data = await db.User.findAll();
        return res.render('homepage.ejs',{
            data: JSON.stringify(data)
        });
    }catch(e){
        console.log(e);
    };
   
}

let aboutPage = (req, res) => {
    return res.render('test/aboutpage.ejs');
}
module.exports = {
    getHomePage: getHomePage,
    aboutPage:aboutPage
}