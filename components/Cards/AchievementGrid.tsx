const AchievementGrid = () => {
  return (
    <>
      {/* Achievements */}
      <div className="hidden col-span-4 row-span-1 lg:grid grid-cols-3 items-stretch gap-2">
        {/* Projects */}
        <div className="flex-1 rounded-lg border border-iconBg bg-cardBg p-6">
          <h3 className="mb-4 text-xl font-semibold">Projects</h3>
          <p className="text-5xl font-bold text-primary">04+</p>
        </div>

        {/* Happy Clients */}
        <div className="flex-1 rounded-lg border border-iconBg bg-cardBg p-6">
          <h3 className="mb-4 text-xl font-semibold">Happy Clients</h3>
          <p className="text-5xl font-bold text-primary">10+</p>
        </div>
        {/* Years of expertise */}
        <div className="flex-1 rounded-lg border border-iconBg bg-cardBg p-6">
          <h3 className="mb-4 text-xl font-semibold">Year Expertise</h3>
          <p className="text-5xl font-bold text-primary">01+</p>
        </div>
      </div>
    </>
  );
};

export default AchievementGrid;
