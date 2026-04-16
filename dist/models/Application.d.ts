import mongoose from 'mongoose';
export declare const Application: mongoose.Model<{
    email: string;
    city: string;
    category: string;
    experience: mongoose.Types.DocumentArray<{
        isCurrentJob: boolean;
        companyName?: string | null;
        designation?: string | null;
        startDate?: NativeDate | null;
        endDate?: NativeDate | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        isCurrentJob: boolean;
        companyName?: string | null;
        designation?: string | null;
        startDate?: NativeDate | null;
        endDate?: NativeDate | null;
    }, {}, {}> & {
        isCurrentJob: boolean;
        companyName?: string | null;
        designation?: string | null;
        startDate?: NativeDate | null;
        endDate?: NativeDate | null;
    }>;
    status: "pending" | "shortlisted" | "rejected" | "interviewing";
    applicant: mongoose.Types.ObjectId;
    fullName: string;
    country: string;
    phone: string;
    phonePrivacy: "Public" | "Private";
    emailPrivacy: "Public" | "Private";
    whatsappPrivacy: "Public" | "Private";
    jobtype: string;
    isFresher: boolean;
    employer?: mongoose.Types.ObjectId | null;
    resume?: string | null;
    job?: mongoose.Types.ObjectId | null;
    image?: string | null;
    dob?: NativeDate | null;
    gender?: "Male" | "Female" | "Other" | null;
    whatsapp?: string | null;
    education?: string | null;
    achievements?: string | null;
    coverLetter?: string | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    email: string;
    city: string;
    category: string;
    experience: mongoose.Types.DocumentArray<{
        isCurrentJob: boolean;
        companyName?: string | null;
        designation?: string | null;
        startDate?: NativeDate | null;
        endDate?: NativeDate | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        isCurrentJob: boolean;
        companyName?: string | null;
        designation?: string | null;
        startDate?: NativeDate | null;
        endDate?: NativeDate | null;
    }, {}, {}> & {
        isCurrentJob: boolean;
        companyName?: string | null;
        designation?: string | null;
        startDate?: NativeDate | null;
        endDate?: NativeDate | null;
    }>;
    status: "pending" | "shortlisted" | "rejected" | "interviewing";
    applicant: mongoose.Types.ObjectId;
    fullName: string;
    country: string;
    phone: string;
    phonePrivacy: "Public" | "Private";
    emailPrivacy: "Public" | "Private";
    whatsappPrivacy: "Public" | "Private";
    jobtype: string;
    isFresher: boolean;
    employer?: mongoose.Types.ObjectId | null;
    resume?: string | null;
    job?: mongoose.Types.ObjectId | null;
    image?: string | null;
    dob?: NativeDate | null;
    gender?: "Male" | "Female" | "Other" | null;
    whatsapp?: string | null;
    education?: string | null;
    achievements?: string | null;
    coverLetter?: string | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    email: string;
    city: string;
    category: string;
    experience: mongoose.Types.DocumentArray<{
        isCurrentJob: boolean;
        companyName?: string | null;
        designation?: string | null;
        startDate?: NativeDate | null;
        endDate?: NativeDate | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        isCurrentJob: boolean;
        companyName?: string | null;
        designation?: string | null;
        startDate?: NativeDate | null;
        endDate?: NativeDate | null;
    }, {}, {}> & {
        isCurrentJob: boolean;
        companyName?: string | null;
        designation?: string | null;
        startDate?: NativeDate | null;
        endDate?: NativeDate | null;
    }>;
    status: "pending" | "shortlisted" | "rejected" | "interviewing";
    applicant: mongoose.Types.ObjectId;
    fullName: string;
    country: string;
    phone: string;
    phonePrivacy: "Public" | "Private";
    emailPrivacy: "Public" | "Private";
    whatsappPrivacy: "Public" | "Private";
    jobtype: string;
    isFresher: boolean;
    employer?: mongoose.Types.ObjectId | null;
    resume?: string | null;
    job?: mongoose.Types.ObjectId | null;
    image?: string | null;
    dob?: NativeDate | null;
    gender?: "Male" | "Female" | "Other" | null;
    whatsapp?: string | null;
    education?: string | null;
    achievements?: string | null;
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
    email: string;
    city: string;
    category: string;
    experience: mongoose.Types.DocumentArray<{
        isCurrentJob: boolean;
        companyName?: string | null;
        designation?: string | null;
        startDate?: NativeDate | null;
        endDate?: NativeDate | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        isCurrentJob: boolean;
        companyName?: string | null;
        designation?: string | null;
        startDate?: NativeDate | null;
        endDate?: NativeDate | null;
    }, {}, {}> & {
        isCurrentJob: boolean;
        companyName?: string | null;
        designation?: string | null;
        startDate?: NativeDate | null;
        endDate?: NativeDate | null;
    }>;
    status: "pending" | "shortlisted" | "rejected" | "interviewing";
    applicant: mongoose.Types.ObjectId;
    fullName: string;
    country: string;
    phone: string;
    phonePrivacy: "Public" | "Private";
    emailPrivacy: "Public" | "Private";
    whatsappPrivacy: "Public" | "Private";
    jobtype: string;
    isFresher: boolean;
    employer?: mongoose.Types.ObjectId | null;
    resume?: string | null;
    job?: mongoose.Types.ObjectId | null;
    image?: string | null;
    dob?: NativeDate | null;
    gender?: "Male" | "Female" | "Other" | null;
    whatsapp?: string | null;
    education?: string | null;
    achievements?: string | null;
    coverLetter?: string | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    email: string;
    city: string;
    category: string;
    experience: mongoose.Types.DocumentArray<{
        isCurrentJob: boolean;
        companyName?: string | null;
        designation?: string | null;
        startDate?: NativeDate | null;
        endDate?: NativeDate | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        isCurrentJob: boolean;
        companyName?: string | null;
        designation?: string | null;
        startDate?: NativeDate | null;
        endDate?: NativeDate | null;
    }, {}, {}> & {
        isCurrentJob: boolean;
        companyName?: string | null;
        designation?: string | null;
        startDate?: NativeDate | null;
        endDate?: NativeDate | null;
    }>;
    status: "pending" | "shortlisted" | "rejected" | "interviewing";
    applicant: mongoose.Types.ObjectId;
    fullName: string;
    country: string;
    phone: string;
    phonePrivacy: "Public" | "Private";
    emailPrivacy: "Public" | "Private";
    whatsappPrivacy: "Public" | "Private";
    jobtype: string;
    isFresher: boolean;
    employer?: mongoose.Types.ObjectId | null;
    resume?: string | null;
    job?: mongoose.Types.ObjectId | null;
    image?: string | null;
    dob?: NativeDate | null;
    gender?: "Male" | "Female" | "Other" | null;
    whatsapp?: string | null;
    education?: string | null;
    achievements?: string | null;
    coverLetter?: string | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
    timestamps: true;
}>> & Omit<{
    email: string;
    city: string;
    category: string;
    experience: mongoose.Types.DocumentArray<{
        isCurrentJob: boolean;
        companyName?: string | null;
        designation?: string | null;
        startDate?: NativeDate | null;
        endDate?: NativeDate | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        isCurrentJob: boolean;
        companyName?: string | null;
        designation?: string | null;
        startDate?: NativeDate | null;
        endDate?: NativeDate | null;
    }, {}, {}> & {
        isCurrentJob: boolean;
        companyName?: string | null;
        designation?: string | null;
        startDate?: NativeDate | null;
        endDate?: NativeDate | null;
    }>;
    status: "pending" | "shortlisted" | "rejected" | "interviewing";
    applicant: mongoose.Types.ObjectId;
    fullName: string;
    country: string;
    phone: string;
    phonePrivacy: "Public" | "Private";
    emailPrivacy: "Public" | "Private";
    whatsappPrivacy: "Public" | "Private";
    jobtype: string;
    isFresher: boolean;
    employer?: mongoose.Types.ObjectId | null;
    resume?: string | null;
    job?: mongoose.Types.ObjectId | null;
    image?: string | null;
    dob?: NativeDate | null;
    gender?: "Male" | "Female" | "Other" | null;
    whatsapp?: string | null;
    education?: string | null;
    achievements?: string | null;
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
        email: string;
        city: string;
        category: string;
        experience: mongoose.Types.DocumentArray<{
            isCurrentJob: boolean;
            companyName?: string | null;
            designation?: string | null;
            startDate?: NativeDate | null;
            endDate?: NativeDate | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            isCurrentJob: boolean;
            companyName?: string | null;
            designation?: string | null;
            startDate?: NativeDate | null;
            endDate?: NativeDate | null;
        }, {}, {}> & {
            isCurrentJob: boolean;
            companyName?: string | null;
            designation?: string | null;
            startDate?: NativeDate | null;
            endDate?: NativeDate | null;
        }>;
        status: "pending" | "shortlisted" | "rejected" | "interviewing";
        applicant: mongoose.Types.ObjectId;
        fullName: string;
        country: string;
        phone: string;
        phonePrivacy: "Public" | "Private";
        emailPrivacy: "Public" | "Private";
        whatsappPrivacy: "Public" | "Private";
        jobtype: string;
        isFresher: boolean;
        employer?: mongoose.Types.ObjectId | null;
        resume?: string | null;
        job?: mongoose.Types.ObjectId | null;
        image?: string | null;
        dob?: NativeDate | null;
        gender?: "Male" | "Female" | "Other" | null;
        whatsapp?: string | null;
        education?: string | null;
        achievements?: string | null;
        coverLetter?: string | null;
    } & mongoose.DefaultTimestampProps, {
        id: string;
    }, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
        timestamps: true;
    }>> & Omit<{
        email: string;
        city: string;
        category: string;
        experience: mongoose.Types.DocumentArray<{
            isCurrentJob: boolean;
            companyName?: string | null;
            designation?: string | null;
            startDate?: NativeDate | null;
            endDate?: NativeDate | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            isCurrentJob: boolean;
            companyName?: string | null;
            designation?: string | null;
            startDate?: NativeDate | null;
            endDate?: NativeDate | null;
        }, {}, {}> & {
            isCurrentJob: boolean;
            companyName?: string | null;
            designation?: string | null;
            startDate?: NativeDate | null;
            endDate?: NativeDate | null;
        }>;
        status: "pending" | "shortlisted" | "rejected" | "interviewing";
        applicant: mongoose.Types.ObjectId;
        fullName: string;
        country: string;
        phone: string;
        phonePrivacy: "Public" | "Private";
        emailPrivacy: "Public" | "Private";
        whatsappPrivacy: "Public" | "Private";
        jobtype: string;
        isFresher: boolean;
        employer?: mongoose.Types.ObjectId | null;
        resume?: string | null;
        job?: mongoose.Types.ObjectId | null;
        image?: string | null;
        dob?: NativeDate | null;
        gender?: "Male" | "Female" | "Other" | null;
        whatsapp?: string | null;
        education?: string | null;
        achievements?: string | null;
        coverLetter?: string | null;
    } & mongoose.DefaultTimestampProps & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    email: string;
    city: string;
    category: string;
    experience: mongoose.Types.DocumentArray<{
        isCurrentJob: boolean;
        companyName?: string | null;
        designation?: string | null;
        startDate?: NativeDate | null;
        endDate?: NativeDate | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        isCurrentJob: boolean;
        companyName?: string | null;
        designation?: string | null;
        startDate?: NativeDate | null;
        endDate?: NativeDate | null;
    }, {}, {}> & {
        isCurrentJob: boolean;
        companyName?: string | null;
        designation?: string | null;
        startDate?: NativeDate | null;
        endDate?: NativeDate | null;
    }>;
    status: "pending" | "shortlisted" | "rejected" | "interviewing";
    applicant: mongoose.Types.ObjectId;
    fullName: string;
    country: string;
    phone: string;
    phonePrivacy: "Public" | "Private";
    emailPrivacy: "Public" | "Private";
    whatsappPrivacy: "Public" | "Private";
    jobtype: string;
    isFresher: boolean;
    employer?: mongoose.Types.ObjectId | null;
    resume?: string | null;
    job?: mongoose.Types.ObjectId | null;
    image?: string | null;
    dob?: NativeDate | null;
    gender?: "Male" | "Female" | "Other" | null;
    whatsapp?: string | null;
    education?: string | null;
    achievements?: string | null;
    coverLetter?: string | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    email: string;
    city: string;
    category: string;
    experience: mongoose.Types.DocumentArray<{
        isCurrentJob: boolean;
        companyName?: string | null;
        designation?: string | null;
        startDate?: NativeDate | null;
        endDate?: NativeDate | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        isCurrentJob: boolean;
        companyName?: string | null;
        designation?: string | null;
        startDate?: NativeDate | null;
        endDate?: NativeDate | null;
    }, {}, {}> & {
        isCurrentJob: boolean;
        companyName?: string | null;
        designation?: string | null;
        startDate?: NativeDate | null;
        endDate?: NativeDate | null;
    }>;
    status: "pending" | "shortlisted" | "rejected" | "interviewing";
    applicant: mongoose.Types.ObjectId;
    fullName: string;
    country: string;
    phone: string;
    phonePrivacy: "Public" | "Private";
    emailPrivacy: "Public" | "Private";
    whatsappPrivacy: "Public" | "Private";
    jobtype: string;
    isFresher: boolean;
    employer?: mongoose.Types.ObjectId | null;
    resume?: string | null;
    job?: mongoose.Types.ObjectId | null;
    image?: string | null;
    dob?: NativeDate | null;
    gender?: "Male" | "Female" | "Other" | null;
    whatsapp?: string | null;
    education?: string | null;
    achievements?: string | null;
    coverLetter?: string | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=Application.d.ts.map