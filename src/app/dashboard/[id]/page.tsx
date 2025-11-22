export default async function UserDashboardPage({ params }: any) {
    const { id } = await params;

    return (
        <div>
            <h1 className="text-4xl">Profile Dashboard</h1>
            <hr />
            <p>
                Hello,{" "}
                <span className="p-1 ml-1 rounded bg-orange-500 text-black">
                    {id}
                </span>
                !
            </p>
        </div>
    );
}
