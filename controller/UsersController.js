exports.LoginUser = (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (username === "" || password === "")
     {
         return res.json ({
            msg : "الرجاء ادخال البيانات" , 
            state : 0
         }) 
    }
   if (username == "widd" && password == "2020")
   {
    return res.json ({
        msg : "أهلا وسهلا",
        state : 1
    })
}
        res.json({
            msg : "كلمة المرور او اسم المستخدم خطأ" ,
            state : 0 
        })                       }



exports.SignUpUser = (req,res) => {
const username = req.body.username;
const password = req.body.password;
const email = req.body.email;
const phone = req.body.phone;


if (!username || !password  || !email || !phone)
     {
         return res.json ({
            msg : " keys الرجاء ادخال البيانات" , 
            state : 0
         })
}

if (username.trim() === "" || password.trim() === "" || email.trim() === "" || phone.trim() === "")
     {
         return res.json ({
            msg : "الرجاء ادخال البيانات" , 
            state : 0
         })
}

res.json ({
    msg : "تم تسجيلك بنجاح" ,
    state : 1
  })


                                  }
