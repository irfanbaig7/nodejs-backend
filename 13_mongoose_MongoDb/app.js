const mongoose = require("mongoose")

// lete make connection
mongoose.connect(
    "mongodb+srv://irfanbaig_db_user2025:irfanbaig_db_user2026@mongodbbasic-cluster.zuybh34.mongodb.net/"
).then(() => console.log("Connnected Successfully..")).catch((err) => console.log("Error inside connection..", err.message))

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    phoneNum: Number,
    eligible: Boolean
},
    { timestamps: true })


// create a model
const User = mongoose.model("NewUser", userSchema)


async function opretions() {
    try {


        // ** CRUD ** 

        // ------- Create user
        // const newUser = await User.create({
        //     name: "sunil",
        //     age: 30,
        //     phoneNum: 956823,
        //     eligible: false
        // })
        // console.log("New user Was created..", newUser);


        // ------- Update user
        // const UpdatedUser = await User.findByIdAndUpdate("695e7502ad659a9476ded9e4", {
        //     $set: { age: 20 }
        // }, { new: true })
        // console.log("Updated user : ", UpdatedUser);


        // ------- Delete user 
        // const deleteUser = await User.findByIdAndDelete("695e6fafcf6153cfd5cbd938")
        // console.log("Deleted user : ", deleteUser);


        // ------- get user by there own ID
        // const getUserByID = await User.findById("695e7502ad659a9476ded9e4")
        // console.log("get user : ", getUserByID);


        // -------- get All users
        const allUsers = await User.find({ })
        console.log("Ye rahe sare users : ", allUsers);


        // -------- get active : false users
        // const eligibleFalseUser = await User.find({ eligible : true })
        // console.log("eligible false user : ", eligibleFalseUser);


        // -------- understand .findOne ( gives us frist one created )
        // const getBktUser = await User.findOne({ name : "bkt" })
        // console.log("Get name of bkt user : ", getBktUser);


        // ------- want specific Feilds ( Not All )
        // const specificFeilds = await User.find().select("name -_id")
        // console.log("Get all users by specific feild : ", specificFeilds);


        // -------- get Limited USER ( using into Pegination )
        // const limiteUser = await User.find().limit(3).skip(1)
        // console.log("Limited users : ", limiteUser);


        // -------- get into sorting format
        // const sortUser = await User.find().sort({ age : -1 })
        // console.log("Sorting by age with Deceding order: ", sortUser);

    } catch (error) {
        console.log("Error inside Some Opretions...", error);
    } finally {
        await mongoose.connection.close()
    }
}

opretions()
