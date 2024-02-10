import { Skeleton } from "./ui/skeleton";

const WeatherSkeleton = () => {
  return (
    <section className="space-y-8 ">
      {/* Today's data skeleton */}
      <div className="space-y-2 animate-pulse">
        {/* Date skeleton */}
        <div className="flex gap-1 text-2xl items-end ">
          <Skeleton className="h-6 w-24 bg-gray-300 rounded"></Skeleton>
          <Skeleton className="h-6 w-24 bg-gray-300 rounded"></Skeleton>
        </div>

        {/* Time wise temperature skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <Skeleton className="h-6 w-16 bg-gray-300 rounded"></Skeleton>
              <Skeleton className="h-6 w-6 bg-gray-300 rounded-full"></Skeleton>
              <Skeleton className="h-6 w-16 bg-gray-300 rounded"></Skeleton>
            </div>
          ))}
        </div>
      </div>

      {/* 7 days forecast skeleton */}
      <div className="flex flex-col gap-4 animate-pulse">
        <Skeleton className="text-2xl h-8 w-36 bg-gray-300 rounded"></Skeleton>

        {[1, 2, 3, 4, 5, 6, 7].map((index) => (
          <div key={index} className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
            <Skeleton className="h-8 w-28 bg-gray-300 rounded"></Skeleton>
            <Skeleton className="h-10 w-10 bg-gray-300 rounded-full"></Skeleton>
            <Skeleton className="h-8 w-28 bg-gray-300 rounded"></Skeleton>
            <Skeleton className="h-8 w-28 bg-gray-300 rounded"></Skeleton>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeatherSkeleton;
