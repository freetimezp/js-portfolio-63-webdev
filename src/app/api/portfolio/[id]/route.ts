import { portfolioData } from "@/app/data/data";

export async function GET(
    _request: Request,
    { params }: { params: { id: string; } }
) {
    const portfolioItem = portfolioData.find((item: { id: number }) => item.id.toString() === params.id);

    return Response.json(portfolioItem);
}
