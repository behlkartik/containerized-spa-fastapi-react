const InnerShimmer = () => {
    return (
        <>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        </>
    )
}
const Shimmer = () => {
    return (
        <div className="shimmer-container">
            <InnerShimmer />
            <InnerShimmer />
            <InnerShimmer />
            <InnerShimmer />
        </div>
    );
}

export default Shimmer;