const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://mishrav2808:M255ZJl1sMCjnoMD@cluster0.hlv4bpt.mongodb.net/MEETUPClONE?retryWrites=true&w=majority"


    //"mongodb+srv://soumya:SBZZiPCbV4kArLwC@cluster0.7lhmb.mongodb.net/meetUpClone?retryWrites=true&w=majority"
  );
};

module.exports = connect;
