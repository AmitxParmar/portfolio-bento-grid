import { File, Folder, Tree } from "@/components/magicui/file-tree";

export default function Frontend() {
  return (
    <div className="relative mx-auto flex h-[200px] w-fit flex-col items-center justify-center overflow-hidden rounded-lg">
      <Tree
        className="overflow-hidden rounded-md bg-background p-2"
        initialExpandedItems={["1"]}
      >
        <Folder element="src" value="1">
          <Folder value="2" element="app">
            <File value={"3"}>page.tsx</File>
          </Folder>

          <Folder value="4" element="components">
            <Folder value="5" element="ui"></Folder>
            <File value="6">
              <p>header.tsx</p>
            </File>
            <File value="7">
              <p>footer.tsx</p>
            </File>
          </Folder>
          <Folder value="8" element="lib">
            <File value="9">
              <p>utils.ts</p>
            </File>
          </Folder>
          <Folder value="10" element="services">
            <File value="11">
              <p>userServices.ts</p>
            </File>
          </Folder>
          <Folder value="12" element="hooks">
            <File value="13">
              <p>useHook.ts</p>
            </File>
          </Folder>
        </Folder>
      </Tree>
    </div>
  );
}
