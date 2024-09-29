import bcrypt from "bcrypt";
import {
    Document,
    InferSchemaType,
    Model,
    model,
    models,
    Schema,
    Types,
} from "mongoose";

const UserSchema = new Schema(
    {
        fullName: String,
        bio: String,
        type: String,
        name: String,
        username: String,
        email: String,
        newEmail: String,
        password: { type: String, required: false },
        token: String,
        expiredToken: Date,
        isVerified: { type: Boolean, default: false },
        photo: String,
        cloudinary_id: String,
        saved: [{ type: Schema.Types.ObjectId, ref: "Story" }],
        followings: [{ type: Schema.Types.ObjectId, ref: "User" }],
        followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
        stories: [{ type: Schema.Types.ObjectId, ref: "Story" }],
    },
    { timestamps: true }
);

UserSchema.methods.matchPassword = async function (enteredPassword: string) {
    return await bcrypt.compare(enteredPassword, this.get("password"));
};

UserSchema.pre("save", async function (next) {
    const password = this.get("password");
    if (!this.isModified("password") || !password) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        this.set("password", hashedPassword);
        next();
    } catch (err) {
        if (err instanceof Error) next(err);
    }
});

export type IUser = InferSchemaType<typeof UserSchema> & {
    _id: Types.ObjectId;
    matchPassword: (password: string) => boolean;
};

let User: Model<IUser & Document>;

try {
    User = models.User || model<IUser & Document>("User", UserSchema);
} catch (error) {
    User = model<IUser & Document>("User", UserSchema);
}

export default User;
