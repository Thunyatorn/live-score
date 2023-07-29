import { ScoreGauge } from "../ScoreGauge";

export const SkeletonScoreCard = () => {
    return (
        <div className="flex flex-col rounded-lg bg-[#c79dd7] p-4 shadow-md">
            <div className="flex justify-center">
                <div className="mt-3 w-full h-8 bg-gray-900 animate-pulse rounded-md"></div>
            </div>
            <ScoreGauge score={0} />
            <div className="flex justify-center">
                <div className="mt-3 w-1/4 h-6 bg-gray-900 animate-pulse rounded-md"></div>
            </div>
        </div>
    );
};
