export function ProductGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="skeleton h-28 rounded-2xl" />
      ))}
    </div>
  );
}

export function HomeSkeleton() {
  return (
    <div className="space-y-10">
      {[0, 1, 2].map((i) => (
        <div key={i}>
          <div className="skeleton mb-4 h-6 w-40" />
          <ProductGridSkeleton />
        </div>
      ))}
    </div>
  );
}

export function CategorySkeleton() {
  return (
    <div>
      <div className="mb-6 flex items-center gap-3">
        <div className="skeleton h-12 w-12 rounded-xl" />
        <div className="skeleton h-8 w-40" />
      </div>
      <ProductGridSkeleton count={9} />
    </div>
  );
}