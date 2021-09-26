const fs=require('fs');
const path = require('path');
const os = require('os')
const chalk = require('chalk');

const savePassword=(password)=>{
    fs.open(path.join(__dirname,'../','password.txt'),'a',666,(e,id)=>{
        fs.write(id,password + os.EOL,null,'utf-8',()=>{
            console.log(chalk.green('Password Saved to password.txt'))
        })
    })
}
module.exports=savePassword;