import { resume } from "@/app/data/data";

export async function GET() {
    return Response.json(resume);
}

