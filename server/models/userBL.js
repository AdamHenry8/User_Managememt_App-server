const userModel = require('./usersModel');

exports.getAllUsers = function() 
{
    return new Promise((resolve,reject) =>
    {
        userModel.find({}, function(err,data)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(data);
            }
        })
    })
    
}
exports.getUser = function(id) 
{
    return new Promise((resolve,reject) =>
    {
        userModel.findById(id, function(err,data)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(data);
            }
        })
    })
    
}
exports.createNewUser = function(newUser) {
    return new Promise((resolve, reject) => {
        let u = new userModel({
            name: newUser.name,
            email: newUser.email,
            street: newUser.street,
            city: newUser.city,
            zipcode: newUser.zipcode,
            tasks: newUser.tasks,
            posts: newUser.posts
        });

        u.save(function(err){
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve('New User was created!!')
            }
        });
    });
}
exports.updateUser = function(id,userData)
{
    return new Promise((resolve,reject) => {
        userModel.findByIdAndUpdate(id,
            {
                name: userData.name,
                email: userData.email,
                street: userData.street,
                city: userData.city,
                zipcode: userData.zipcode,
                tasks: userData.tasks,
                posts: userData.posts
            }, function(err)
            {
                if(err) {
                    reject(err)
                } else {
                    resolve('User updated successfully!')
                }
            });
    });
}

exports.delete = function(id) {
    return new Promise((resolve,reject) => {
        userModel.findByIdAndDelete(id, function(err) {
                if(err) {
                    reject(err);
                } else {
                    resolve('User deleted successfully!');
                }
            });    
    });
}