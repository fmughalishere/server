import mongoose from 'mongoose';
declare const _default: mongoose.Model<{
    type: "Full-time" | "Part-time" | "Remote" | "Contract";
    city: string;
    description: string;
    postedBy: mongoose.Types.ObjectId;
    title: string;
    company: string;
    status: "active" | "closed";
    requirements: string[];
    salary?: string | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    type: "Full-time" | "Part-time" | "Remote" | "Contract";
    city: string;
    description: string;
    postedBy: mongoose.Types.ObjectId;
    title: string;
    company: string;
    status: "active" | "closed";
    requirements: string[];
    salary?: string | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    type: "Full-time" | "Part-time" | "Remote" | "Contract";
    city: string;
    description: string;
    postedBy: mongoose.Types.ObjectId;
    title: string;
    company: string;
    status: "active" | "closed";
    requirements: string[];
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
    type: "Full-time" | "Part-time" | "Remote" | "Contract";
    city: string;
    description: string;
    postedBy: mongoose.Types.ObjectId;
    title: string;
    company: string;
    status: "active" | "closed";
    requirements: string[];
    salary?: string | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    type: "Full-time" | "Part-time" | "Remote" | "Contract";
    city: string;
    description: string;
    postedBy: mongoose.Types.ObjectId;
    title: string;
    company: string;
    status: "active" | "closed";
    requirements: string[];
    salary?: string | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
    timestamps: true;
}>> & Omit<{
    type: "Full-time" | "Part-time" | "Remote" | "Contract";
    city: string;
    description: string;
    postedBy: mongoose.Types.ObjectId;
    title: string;
    company: string;
    status: "active" | "closed";
    requirements: string[];
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
        type: "Full-time" | "Part-time" | "Remote" | "Contract";
        city: string;
        description: string;
        postedBy: mongoose.Types.ObjectId;
        title: string;
        company: string;
        status: "active" | "closed";
        requirements: string[];
        salary?: string | null;
    } & mongoose.DefaultTimestampProps, {
        id: string;
    }, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
        timestamps: true;
    }>> & Omit<{
        type: "Full-time" | "Part-time" | "Remote" | "Contract";
        city: string;
        description: string;
        postedBy: mongoose.Types.ObjectId;
        title: string;
        company: string;
        status: "active" | "closed";
        requirements: string[];
        salary?: string | null;
    } & mongoose.DefaultTimestampProps & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    type: "Full-time" | "Part-time" | "Remote" | "Contract";
    city: string;
    description: string;
    postedBy: mongoose.Types.ObjectId;
    title: string;
    company: string;
    status: "active" | "closed";
    requirements: string[];
    salary?: string | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    type: "Full-time" | "Part-time" | "Remote" | "Contract";
    city: string;
    description: string;
    postedBy: mongoose.Types.ObjectId;
    title: string;
    company: string;
    status: "active" | "closed";
    requirements: string[];
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