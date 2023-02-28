const models = require("./models"); // load file index.js
const Account = models.account;
const Freelance = models.freelance;
const Owner = models.owner;
const Store = models.store;
const Contract = models.contract;

module.exports = async (req, res) => {
  try {
    await Account.create({
      username: "tester",
      password: "123",
    });
    await Account.create({
      username: "boss",
      password: "123",
    });
    await Freelance.create({
      phoneNumber: "0769675499",
      fullName: "Le Tran Minh Hien",
      emailAddress: "minhha4567890@gmail.com",
      birthday: "21-01-2001",
      avatar: "https://github",
      gender: true,
      address: "5C Tay Hoa",
      isWorking: false,
      accountID: 1,
    });
    await Owner.create({
      fullName: "Hoa An",
      phoneNumber: "0769675499",
      emailAddress: "minhha4567890@gmail.com",
      birthday: "21-01-2001",
      avatar: "https://github",
      gender: true,
      accountID: 2,
    });

    let owner = await Owner.findOne({ where: { accountID: 2 } });
    let { ownerID } = owner;
    await Store.create({
      phoneNumber: "0769675499",
      name: "Toys Store",
      logo: "https://github",
      email: "minhha4567890@gmail.com",
      address: "5C Tay Hoa",
      haveStaff: false,
      ownerID,
    });
    await Contract.create({
      storeID: 1,
      freelanceID: 1,
    });
    console.log("Added data successfully");
  } catch (error) {
    console.log("Error init data");
  }
};
