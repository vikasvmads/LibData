module.exports = {
            getHomePage : (req,res)=>{
                let query = "select * from players order by id ASC";

                db.query(query,function(err,results){
                    if (err){
                        res.redirect('/');
                    }else{
                        res.render('index.ejs',{title :'welcome | ViewPlayers',players:results});
                    }
                });
            }
};