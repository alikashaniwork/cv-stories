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
    state: String,
});

const SeasonSchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: "User" },
        story: { type: Schema.Types.ObjectId, ref: "Story" },
        title: { type: String, required: true },
        poster: String,
        cloudinary_id: String,
        summary: String,
        episodes: [
            {
                pageNumber: Number,
                content: String,
            },
        ],
        characters: [{ name: { type: String, required: true }, about: String }],
        locations: [LocationSchema],
        rating: { type: Number, default: 0 },
        isPublished: { type: Boolean, default: false },
        isFinished: { type: Boolean, default: false },
    },
    { timestamps: true }
);

type ISeason = InferSchemaType<typeof SeasonSchema> & {
    _id: Types.ObjectId;
};

let Season: Model<ISeason & Document>;

try {
    Season = models.Season || model<ISeason & Document>("Season", SeasonSchema);
} catch (error) {
    Season = model<ISeason & Document>("Season", SeasonSchema);
}

export default Season;
