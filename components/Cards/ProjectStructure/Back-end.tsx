import { File, Folder, Tree } from "@/components/magicui/file-tree";
const Backend = () => {
  return (
    <div className="relative mx-auto flex h-[200px] w-fit flex-col items-center justify-center overflow-hidden rounded-lg">
      <Tree
        className="overflow-hidden rounded-md bg-background p-2"
        initialExpandedItems={["1"]}
      >
        <Folder element="src" value="1">
          <Folder value="2" element="controllers">
            <File value="3">userController.js</File>
            <File value="4">authController.js</File>
          </Folder>

          <Folder value="5" element="models">
            <File value="6">User.js</File>
            <File value="7">Product.js</File>
          </Folder>

          <Folder value="8" element="routes">
            <File value="9">userRoutes.js</File>
            <File value="10">authRoutes.js</File>
          </Folder>

          <Folder value="11" element="middleware">
            <File value="12">auth.js</File>
            <File value="13">errorHandler.js</File>
          </Folder>

          <Folder value="14" element="config">
            <File value="15">db.js</File>
            <File value="16">env.js</File>
          </Folder>

          <File value="17">server.js</File>
        </Folder>
      </Tree>
    </div>
  );
};

export default Backend;
