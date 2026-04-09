import mongoose from 'mongoose';
export declare const Application: mongoose.Model<{
    status: "pending" | "shortlisted" | "rejected" | "interviewing";
    job: mongoose.Types.ObjectId;
    applicant: mongoose.Types.ObjectId;
    resume?: string | null;
    coverLetter?: string | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    status: "pending" | "shortlisted" | "rejected" | "interviewing";
    job: mongoose.Types.ObjectId;
    applicant: mongoose.Types.ObjectId;
    resume?: string | null;
    coverLetter?: string | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    status: "pending" | "shortlisted" | "rejected" | "interviewing";
    job: mongoose.Types.ObjectId;
    applicant: mongoose.Types.ObjectId;
    resume?: string | null;
    coverLetter?: string | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    status: "pending" | "shortlisted" | "rejected" | "interviewing";
    job: mongoose.Types.ObjectId;
    applicant: mongoose.Types.ObjectId;
    resume?: string | null;
    coverLetter?: string | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    status: "pending" | "shortlisted" | "rejected" | "interviewing";
    job: mongoose.Types.ObjectId;
    applicant: mongoose.Types.ObjectId;
    resume?: string | null;
    coverLetter?: string | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
    timestamps: true;
}>> & Omit<{
    status: "pending" | "shortlisted" | "rejected" | "interviewing";
    job: mongoose.Types.ObjectId;
    applicant: mongoose.Types.ObjectId;
    resume?: string | null;
    coverLetter?: string | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        status: "pending" | "shortlisted" | "rejected" | "interviewing";
        job: mongoose.Types.ObjectId;
        applicant: mongoose.Types.ObjectId;
        resume?: string | null;
        coverLetter?: string | null;
    } & mongoose.DefaultTimestampProps, {
        id: string;
    }, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
        timestamps: true;
    }>> & Omit<{
        status: "pending" | "shortlisted" | "rejected" | "interviewing";
        job: mongoose.Types.ObjectId;
        applicant: mongoose.Types.ObjectId;
        resume?: string | null;
        coverLetter?: string | null;
    } & mongoose.DefaultTimestampProps & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    status: "pending" | "shortlisted" | "rejected" | "interviewing";
    job: mongoose.Types.ObjectId;
    applicant: mongoose.Types.ObjectId;
    resume?: string | null;
    coverLetter?: string | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    status: "pending" | "shortlisted" | "rejected" | "interviewing";
    job: mongoose.Types.ObjectId;
    applicant: mongoose.Types.ObjectId;
    resume?: string | null;
    coverLetter?: string | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=Application.d.ts.map