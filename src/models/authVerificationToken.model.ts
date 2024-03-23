import { compare, genSalt, hash } from "bcrypt";
import { Schema, model } from "mongoose";

interface AuthVerificationTokenDocument extends Document {
  owner: Schema.Types.ObjectId;
  token: string;
  createdAt: Date;
}

interface Methods {
  compareToken: (password: string) => Promise<boolean>;
}

const authVerificationTokenSchema = new Schema<
  AuthVerificationTokenDocument,
  {},
  Methods
>(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      expires: 86400,
    },
  },
  { versionKey: false, timestamps: true },
);

authVerificationTokenSchema.pre("save", async function (next) {
  if (this.isModified("token")) {
    const salt = await genSalt(10);
    this.token = await hash(this.token, salt);
  }

  next();
});

authVerificationTokenSchema.methods.compareToken = async function (token) {
  return await compare(token, this.token);
};

export const AuthVerificationModel = model(
  "AuthVerificationToken",
  authVerificationTokenSchema,
);
