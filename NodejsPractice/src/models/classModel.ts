import { Schema, model, Types } from "mongoose";

export interface IClass {
  name: string;
  description?: string;
  schedule: Date;
  trainer: Types.ObjectId;
  members: Types.ObjectId[];
}

const classSchema = new Schema<IClass>(
  {
    name: { type: String, required: true, trim: true },
    description: String,
    schedule: { type: Date, required: true },
    trainer: {
      type: Schema.Types.ObjectId,
      ref: "Trainer",
      required: true,
    },
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "Member",
      },
    ],
  },
  { timestamps: true }
);
export const ClassModel = model<IClass>("Bananas", classSchema);
