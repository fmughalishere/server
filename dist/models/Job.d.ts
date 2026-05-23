import mongoose from 'mongoose';
declare const _default: mongoose.Model<{
    type: "Full-Time" | "Part-Time" | "One-Day Task" | "Remote-Job" | "Home-Based" | "Contract-Based";
    phone: number;
    city: string;
    contactPerson: string;
    designation: string;
    skills: string[];
    companyName: string;
    postedBy: mongoose.Types.ObjectId;
    companyEmail: string;
    companyAddress: string;
    category: string;
    education: string;
    status: "active" | "closed";
    description?: string | null;
    experience?: string | null;
    companyLogo?: string | null;
    salary?: string | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    type: "Full-Time" | "Part-Time" | "One-Day Task" | "Remote-Job" | "Home-Based" | "Contract-Based";
    phone: number;
    city: string;
    contactPerson: string;
    designation: string;
    skills: string[];
    companyName: string;
    postedBy: mongoose.Types.ObjectId;
    companyEmail: string;
    companyAddress: string;
    category: string;
    education: string;
    status: "active" | "closed";
    description?: string | null;
    experience?: string | null;
    companyLogo?: string | null;
    salary?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    type: "Full-Time" | "Part-Time" | "One-Day Task" | "Remote-Job" | "Home-Based" | "Contract-Based";
    phone: number;
    city: string;
    contactPerson: string;
    designation: string;
    skills: string[];
    companyName: string;
    postedBy: mongoose.Types.ObjectId;
    companyEmail: string;
    companyAddress: string;
    category: string;
    education: string;
    status: "active" | "closed";
    description?: string | null;
    experience?: string | null;
    companyLogo?: string | null;
    salary?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    type: "Full-Time" | "Part-Time" | "One-Day Task" | "Remote-Job" | "Home-Based" | "Contract-Based";
    phone: number;
    city: string;
    contactPerson: string;
    designation: string;
    skills: string[];
    companyName: string;
    postedBy: mongoose.Types.ObjectId;
    companyEmail: string;
    companyAddress: string;
    category: string;
    education: string;
    status: "active" | "closed";
    description?: string | null;
    experience?: string | null;
    companyLogo?: string | null;
    salary?: string | null;
}, mongoose.Document<unknown, {}, {
    type: "Full-Time" | "Part-Time" | "One-Day Task" | "Remote-Job" | "Home-Based" | "Contract-Based";
    phone: number;
    city: string;
    contactPerson: string;
    designation: string;
    skills: string[];
    companyName: string;
    postedBy: mongoose.Types.ObjectId;
    companyEmail: string;
    companyAddress: string;
    category: string;
    education: string;
    status: "active" | "closed";
    description?: string | null;
    experience?: string | null;
    companyLogo?: string | null;
    salary?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    type: "Full-Time" | "Part-Time" | "One-Day Task" | "Remote-Job" | "Home-Based" | "Contract-Based";
    phone: number;
    city: string;
    contactPerson: string;
    designation: string;
    skills: string[];
    companyName: string;
    postedBy: mongoose.Types.ObjectId;
    companyEmail: string;
    companyAddress: string;
    category: string;
    education: string;
    status: "active" | "closed";
    description?: string | null;
    experience?: string | null;
    companyLogo?: string | null;
    salary?: string | null;
} & {
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
        phone: number;
        city: string;
        contactPerson: string;
        designation: string;
        skills: string[];
        companyName: string;
        postedBy: mongoose.Types.ObjectId;
        companyEmail: string;
        companyAddress: string;
        category: string;
        education: string;
        status: "active" | "closed";
        description?: string | null;
        experience?: string | null;
        companyLogo?: string | null;
        salary?: string | null;
    }, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<{
        type: "Full-Time" | "Part-Time" | "One-Day Task" | "Remote-Job" | "Home-Based" | "Contract-Based";
        phone: number;
        city: string;
        contactPerson: string;
        designation: string;
        skills: string[];
        companyName: string;
        postedBy: mongoose.Types.ObjectId;
        companyEmail: string;
        companyAddress: string;
        category: string;
        education: string;
        status: "active" | "closed";
        description?: string | null;
        experience?: string | null;
        companyLogo?: string | null;
        salary?: string | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    type: "Full-Time" | "Part-Time" | "One-Day Task" | "Remote-Job" | "Home-Based" | "Contract-Based";
    phone: number;
    city: string;
    contactPerson: string;
    designation: string;
    skills: string[];
    companyName: string;
    postedBy: mongoose.Types.ObjectId;
    companyEmail: string;
    companyAddress: string;
    category: string;
    education: string;
    status: "active" | "closed";
    description?: string | null;
    experience?: string | null;
    companyLogo?: string | null;
    salary?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    type: "Full-Time" | "Part-Time" | "One-Day Task" | "Remote-Job" | "Home-Based" | "Contract-Based";
    phone: number;
    city: string;
    contactPerson: string;
    designation: string;
    skills: string[];
    companyName: string;
    postedBy: mongoose.Types.ObjectId;
    companyEmail: string;
    companyAddress: string;
    category: string;
    education: string;
    status: "active" | "closed";
    description?: string | null;
    experience?: string | null;
    companyLogo?: string | null;
    salary?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default _default;
//# sourceMappingURL=Job.d.ts.map