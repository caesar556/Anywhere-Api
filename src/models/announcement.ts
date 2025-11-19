import { Schema, model, Document } from "mongoose";


interface Iannouncement extends Document {
  title: string;
  description: string;
  date: Date;
  semester: string;
}

const announcementSchema = new Schema<Iannouncement>(
  {
    title: {
      type: String,
      required: [true, "title is required"],
      minLength: [3, "must be at least 3 charcter"],
      maxLength: [50, "Too long title "]
    },
    description: {
      type: String,
      required: [true, "description is required"],
      minLength: [50, "must be at least 50 charcter"],
      maxLength: [150, "Too long title "]
    },
    date: {
      type: Date,
      default: Date.now()
    },
    semester: {
      type: String,
      required: [true, "semester is required"],
      minLength: [3, "must be at least 50 charcter"],
      maxLength: [50, "Too long semester "]
    }
  },
  { timestamps: true }
)

export const Announcement = model<Iannouncement>("Announcement", announcementSchema);