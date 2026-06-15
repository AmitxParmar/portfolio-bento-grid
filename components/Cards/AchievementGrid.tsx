const AchievementGrid = () => {
  return (
    <>
      {/* Achievements */}
      <div className="hidden col-span-4 row-span-1 lg:grid grid-cols-3 items-stretch gap-2">
        {/* Projects */}
        <div className="flex-1 rounded-lg border border-iconBg bg-cardBg p-3 2xl:p-6">
          <h3 className="mb-2 text-base font-semibold text-darkText 2xl:mb-4 2xl:text-xl">Projects</h3>
          <p className="text-3xl font-bold text-primary 2xl:text-5xl">04+</p>
        </div>

        {/* Happy Clients */}
        <div className="flex-1 rounded-lg border border-iconBg bg-cardBg p-3 2xl:p-6">
          <h3 className="mb-2 text-base font-semibold text-darkText 2xl:mb-4 2xl:text-xl">Happy Clients</h3>
          <p className="text-3xl font-bold text-primary 2xl:text-5xl">10+</p>
        </div>
        {/* Years of expertise */}
        <div className="flex-1 rounded-lg border border-iconBg bg-cardBg p-3 2xl:p-6">
          <h3 className="mb-2 text-base font-semibold text-darkText 2xl:mb-4 2xl:text-xl">Year Expertise</h3>
          <p className="text-3xl font-bold text-primary 2xl:text-5xl">01+</p>
        </div>
      </div>
    </>
  );
};

export default AchievementGrid;
