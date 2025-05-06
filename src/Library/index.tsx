import { SearchBar } from "common/ui-kit/searchBar";
import { libraryData } from "data/library/library";
import { recentlyAddedData } from "data/library/recentlyAdded";
import { LibraryListItem } from "../Library/LibraryItem/LibraryItem";
import folder from "../../public/assets/icons/gray_folder.svg";
import search from "../../public/assets/icons/gray_search.svg";
import { UploadBtn } from "common/ui-kit/UploadBtn";
import { Icon } from "common/ui-kit/Icon/Icon";
export const Library = function Library() {
  return (
    <section className="w-full">
      <div className="flex justify-between items-center border-b border-[#E1E1E1]">
        <h2 className="p-6">Library</h2>
        <SearchBar className="mr-6" />
      </div>
      <div className="layout-px">
        <div>
          <div className="flex justify-between items-center ">
            <h3 className="text-[##333333] mb-3 mt-3">Recently Viewed</h3>
            <div className="flex gap-x-2">
              <Icon src={folder} />
              <Icon src={search} />
              <UploadBtn className="px-2" />
            </div>
          </div>
          <ul>
            {recentlyAddedData.map((item) => (
              <LibraryListItem key={item.id || item.name} item={item} />
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-[##333333] mb-3 mt-3">All</h3>
          <ul>
            {libraryData.map((item) => (
              <LibraryListItem key={item.id || item.name} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
