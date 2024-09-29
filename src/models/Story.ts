import {
    Document,
    InferSchemaType,
    Model,
    model,
    models,
    Schema,
    Types,
} from "mongoose";

const LocationSchema = new Schema({
    name: String,
    about: String,
});

const StorySchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: "User" },
        isPublished: { type: Boolean, default: false },
        type: { type: String, required: true },
        title: { type: String, required: true },
        tagline: { type: String },
        poster: String,
        cloudinary_id: String,
        genres: [String],
        rated: String,
        language: String,
        summary: String,
        pages: [
            {
                pageNumber: Number,
                content: String,
            },
        ],
        characters: [{ name: { type: String, required: true }, about: String }],
        locations: [LocationSchema],
        rating: { type: Number, default: 0 },
        featured: {
            banner: { type: Boolean, default: false },
            bestOfWeek: { type: Boolean, default: false },
            bestOfMonth: { type: Boolean, default: false },
            today: { type: Boolean, default: false },
            hot: { type: Boolean, default: false },
            trending: { type: Boolean, default: false },
            whatToRead: { type: Boolean, default: false },
        },
        statistics: {
            views: { type: Number, default: 0 },
            shares: { type: Number, default: 0 },
            averageReadingTime: { type: Number, default: 0 },
        },
    },
    { timestamps: true }
);

export type IStory = InferSchemaType<typeof StorySchema> & {
    _id: Types.ObjectId;
};

let Story: Model<IStory & Document>;

try {
    Story = models.Story || model<IStory & Document>("Story", StorySchema);
} catch (error) {
    Story = model<IStory & Document>("Story", StorySchema);
}

export default Story;
