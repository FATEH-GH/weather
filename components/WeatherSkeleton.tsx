import { Skeleton } from "./ui/skeleton";

const WeatherSkeleton = () => {
  return (
    <section className="flex flex-col gap-14">
      {/* Today's data skeleton */}
      {/* Date skeleton */}

      <div className="flex flex-col gap-2">
        <Skeleton className="h-10 w-32 bg-gray-300 rounded"></Skeleton>
        <Skeleton className="h-60 full bg-gray-300 rounded"></Skeleton>
      </div>

      <div className="flex gap-2">
        <Skeleton className="h-28 w-24 bg-gray-300 rounded"></Skeleton>
        <Skeleton className="h-28 w-full bg-gray-300 rounded"></Skeleton>
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton className="h-10 w-32 bg-gray-300 rounded"></Skeleton>
        <Skeleton className="h-40 full bg-gray-300 rounded"></Skeleton>
      </div>
    </section>
  );
};

export default WeatherSkeleton;
