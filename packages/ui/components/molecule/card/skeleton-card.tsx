export const SkeletonCard = () => {
  return (
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <div class="p-4">
        <div class="bg-gray-200 h-4 rounded w-3/4 mb-2" />
        <div class="bg-gray-200 h-4 rounded w-1/2 mb-4" />
        <div class="bg-gray-200 h-4 rounded w-2/3 mb-4" />
        <div class="bg-gray-200 h-4 rounded w-1/4 mb-4" />
        <div class="bg-gray-200 h-4 rounded w-3/4 mb-4" />
      </div>
    </div>
  );
};
