export function GET() {
    return Response.json({
        timeStamp: new Date(),
        status: 200,
    })
}
