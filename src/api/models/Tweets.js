import mongoose from "mongoose";

const TweetsSchema = new mongoose.Schema({
    text: {
        type: String,
        require: true,
    },
    banner: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    likes: {
        type: Array,
        required: true
    },
    comments: {
        type: Array,
        required: true
    }
})

const Tweets = new mongoose.model("Tweets", TweetsSchema)

export default Tweets;