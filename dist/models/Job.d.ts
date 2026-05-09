import mongoose from 'mongoose';
declare const _default: mongoose.Model<{
    type: "Full-Time" | "Part-Time" | "One-Day Task" | "Remote-Job" | "Home-Based" | "Contract-Based";
    city: string;
    description: string;
    skills: string[];
    postedBy: mongoose.Types.ObjectId;
    company: string;
    category: string;
    education: string;
    status: "active" | "closed";
    experience?: string | null;
    salary?: string | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    type: "Full-Time" | "Part-Time" | "One-Day Task" | "Remote-Job" | "Home-Based" | "Contract-Based";
    city: string;
    description: string;
    skills: string[];
    postedBy: mongoose.Types.ObjectId;
    company: string;
    category: string;
    education: string;
    status: "active" | "closed";
    experience?: string | null;
    salary?: string | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    type: "Full-Time" | "Part-Time" | "One-Day Task" | "Remote-Job" | "Home-Based" | "Contract-Based";
    city: string;
    description: string;
    skills: string[];
    postedBy: mongoose.Types.ObjectId;
    company: string;
    category: string;
    education: string;
    status: "active" | "closed";
    experience?: string | null;
    salary?: string | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    type: "Full-Time" | "Part-Time" | "One-Day Task" | "Remote-Job" | "Home-Based" | "Contract-Based";
    city: string;
    description: string;
    skills: string[];
    postedBy: mongoose.Types.ObjectId;
    company: string;
    category: string;
    education: string;
    status: "active" | "closed";
    experience?: string | null;
    salary?: string | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    type: "Full-Time" | "Part-Time" | "One-Day Task" | "Remote-Job" | "Home-Based" | "Contract-Based";
    city: string;
    description: string;
    skills: string[];
    postedBy: mongoose.Types.ObjectId;
    company: string;
    category: string;
    education: string;
    status: "active" | "closed";
    experience?: string | null;
    salary?: string | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
    timestamps: true;
}>> & Omit<{
    type: "Full-Time" | "Part-Time" | "One-Day Task" | "Remote-Job" | "Home-Based" | "Contract-Based";
    city: string;
    description: string;
    skills: string[];
    postedBy: mongoose.Types.ObjectId;
    company: string;
    category: string;
    education: string;
    status: "active" | "closed";
    experience?: string | null;
    salary?: string | null;
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
        type: "Full-Time" | "Part-Time" | "One-Day Task" | "Remote-Job" | "Home-Based" | "Contract-Based";
        city: string;
        description: string;
        skills: string[];
        postedBy: mongoose.Types.ObjectId;
        company: string;
        category: string;
        education: string;
        status: "active" | "closed";
        experience?: string | null;
        salary?: string | null;
    } & mongoose.DefaultTimestampProps, {
        id: string;
    }, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
        timestamps: true;
    }>> & Omit<{
        type: "Full-Time" | "Part-Time" | "One-Day Task" | "Remote-Job" | "Home-Based" | "Contract-Based";
        city: string;
        description: string;
        skills: string[];
        postedBy: mongoose.Types.ObjectId;
        company: string;
        category: string;
        education: string;
        status: "active" | "closed";
        experience?: string | null;
        salary?: string | null;
    } & mongoose.DefaultTimestampProps & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    type: "Full-Time" | "Part-Time" | "One-Day Task" | "Remote-Job" | "Home-Based" | "Contract-Based";
    city: string;
    description: string;
    skills: string[];
    postedBy: mongoose.Types.ObjectId;
    company: string;
    category: string;
    education: string;
    status: "active" | "closed";
    experience?: string | null;
    salary?: string | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    type: "Full-Time" | "Part-Time" | "One-Day Task" | "Remote-Job" | "Home-Based" | "Contract-Based";
    city: string;
    description: string;
    skills: string[];
    postedBy: mongoose.Types.ObjectId;
    company: string;
    category: string;
    education: string;
    status: "active" | "closed";
    experience?: string | null;
    salary?: string | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default _default;
//# sourceMappingURL=Job.d.ts.map