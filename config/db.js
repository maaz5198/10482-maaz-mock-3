const mongoose = ("mongoose")

const connect = async () => {
    try {
        console.log("MongoDB Connected");
    } catch (error) {
        console.log(error.message);
    }
};

