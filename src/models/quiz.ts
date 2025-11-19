import { Schema, model, Document } from "mongoose";


interface Iquiz extends Document {
  title: string;
  course: string;
  dueDate: Date;
  semester: string;
}

const quizSchema = new Schema<Iquiz>(
  {
    title: {
      type: String,
      required: [true, "title is required"],
      minLength: [3, "must be at least 3 charcter"],
      maxLength: [50, "Too long title "]
    },
    course: {
      type: String,
      required: [true, "description is required"],
      minLength: [3, "must be at least 3 charcter"],
      maxLength: [50, "Too long title "]
    },
    dueDate: {
      type: Date
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

export const Quiz = model<Iquiz>("Quiz", quizSchema);