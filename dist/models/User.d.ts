import mongoose from 'mongoose';
declare const User: mongoose.Model<{
    name: string;
    email: string;
    password: string;
    role: "jobseeker" | "employer";
    savedJobs: mongoose.Types.ObjectId[];
    googleId?: string | null;
    avatar?: string | null;
    phone?: string | null;
    website?: string | null;
    location?: string | null;
    city?: string | null;
    industry?: string | null;
    companySize?: string | null;
    description?: string | null;
    contactPerson?: string | null;
    designation?: string | null;
    logo?: string | null;
    profile?: {
        skills: string[];
        city?: string | null;
        resume?: string | null;
        bio?: string | null;
        experience?: string | null;
    } | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    name: string;
    email: string;
    password: string;
    role: "jobseeker" | "employer";
    savedJobs: mongoose.Types.ObjectId[];
    googleId?: string | null;
    avatar?: string | null;
    phone?: string | null;
    website?: string | null;
    location?: string | null;
    city?: string | null;
    industry?: string | null;
    companySize?: string | null;
    description?: string | null;
    contactPerson?: string | null;
    designation?: string | null;
    logo?: string | null;
    profile?: {
        skills: string[];
        city?: string | null;
        resume?: string | null;
        bio?: string | null;
        experience?: string | null;
    } | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    name: string;
    email: string;
    password: string;
    role: "jobseeker" | "employer";
    savedJobs: mongoose.Types.ObjectId[];
    googleId?: string | null;
    avatar?: string | null;
    phone?: string | null;
    website?: string | null;
    location?: string | null;
    city?: string | null;
    industry?: string | null;
    companySize?: string | null;
    description?: string | null;
    contactPerson?: string | null;
    designation?: string | null;
    logo?: string | null;
    profile?: {
        skills: string[];
        city?: string | null;
        resume?: string | null;
        bio?: string | null;
        experience?: string | null;
    } | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    name: string;
    email: string;
    password: string;
    role: "jobseeker" | "employer";
    savedJobs: mongoose.Types.ObjectId[];
    googleId?: string | null;
    avatar?: string | null;
    phone?: string | null;
    website?: string | null;
    location?: string | null;
    city?: string | null;
    industry?: string | null;
    companySize?: string | null;
    description?: string | null;
    contactPerson?: string | null;
    designation?: string | null;
    logo?: string | null;
    profile?: {
        skills: string[];
        city?: string | null;
        resume?: string | null;
        bio?: string | null;
        experience?: string | null;
    } | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    name: string;
    email: string;
    password: string;
    role: "jobseeker" | "employer";
    savedJobs: mongoose.Types.ObjectId[];
    googleId?: string | null;
    avatar?: string | null;
    phone?: string | null;
    website?: string | null;
    location?: string | null;
    city?: string | null;
    industry?: string | null;
    companySize?: string | null;
    description?: string | null;
    contactPerson?: string | null;
    designation?: string | null;
    logo?: string | null;
    profile?: {
        skills: string[];
        city?: string | null;
        resume?: string | null;
        bio?: string | null;
        experience?: string | null;
    } | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
    timestamps: true;
}>> & Omit<{
    name: string;
    email: string;
    password: string;
    role: "jobseeker" | "employer";
    savedJobs: mongoose.Types.ObjectId[];
    googleId?: string | null;
    avatar?: string | null;
    phone?: string | null;
    website?: string | null;
    location?: string | null;
    city?: string | null;
    industry?: string | null;
    companySize?: string | null;
    description?: string | null;
    contactPerson?: string | null;
    designation?: string | null;
    logo?: string | null;
    profile?: {
        skills: string[];
        city?: string | null;
        resume?: string | null;
        bio?: string | null;
        experience?: string | null;
    } | null;
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
        name: string;
        email: string;
        password: string;
        role: "jobseeker" | "employer";
        savedJobs: mongoose.Types.ObjectId[];
        googleId?: string | null;
        avatar?: string | null;
        phone?: string | null;
        website?: string | null;
        location?: string | null;
        city?: string | null;
        industry?: string | null;
        companySize?: string | null;
        description?: string | null;
        contactPerson?: string | null;
        designation?: string | null;
        logo?: string | null;
        profile?: {
            skills: string[];
            city?: string | null;
            resume?: string | null;
            bio?: string | null;
            experience?: string | null;
        } | null;
    } & mongoose.DefaultTimestampProps, {
        id: string;
    }, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
        timestamps: true;
    }>> & Omit<{
        name: string;
        email: string;
        password: string;
        role: "jobseeker" | "employer";
        savedJobs: mongoose.Types.ObjectId[];
        googleId?: string | null;
        avatar?: string | null;
        phone?: string | null;
        website?: string | null;
        location?: string | null;
        city?: string | null;
        industry?: string | null;
        companySize?: string | null;
        description?: string | null;
        contactPerson?: string | null;
        designation?: string | null;
        logo?: string | null;
        profile?: {
            skills: string[];
            city?: string | null;
            resume?: string | null;
            bio?: string | null;
            experience?: string | null;
        } | null;
    } & mongoose.DefaultTimestampProps & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    name: string;
    email: string;
    password: string;
    role: "jobseeker" | "employer";
    savedJobs: mongoose.Types.ObjectId[];
    googleId?: string | null;
    avatar?: string | null;
    phone?: string | null;
    website?: string | null;
    location?: string | null;
    city?: string | null;
    industry?: string | null;
    companySize?: string | null;
    description?: string | null;
    contactPerson?: string | null;
    designation?: string | null;
    logo?: string | null;
    profile?: {
        skills: string[];
        city?: string | null;
        resume?: string | null;
        bio?: string | null;
        experience?: string | null;
    } | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    name: string;
    email: string;
    password: string;
    role: "jobseeker" | "employer";
    savedJobs: mongoose.Types.ObjectId[];
    googleId?: string | null;
    avatar?: string | null;
    phone?: string | null;
    website?: string | null;
    location?: string | null;
    city?: string | null;
    industry?: string | null;
    companySize?: string | null;
    description?: string | null;
    contactPerson?: string | null;
    designation?: string | null;
    logo?: string | null;
    profile?: {
        skills: string[];
        city?: string | null;
        resume?: string | null;
        bio?: string | null;
        experience?: string | null;
    } | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default User;
//# sourceMappingURL=User.d.ts.map