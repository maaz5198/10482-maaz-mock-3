
const eventSlotSchema = new mongoose.Schema(
    {
        eventName: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        startTime: {
            type: String,
            required: true
        },
        endTime: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
    },
    
);
