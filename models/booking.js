
const bookingSchema = new mongoose.Schema(
    {
        studentName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        rollNo: {
            type: String
        },
    },
);
