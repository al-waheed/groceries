import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGroceries } from "../Actions/GroceryAction";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FunnelIcon } from "@heroicons/react/20/solid";
import Alert from "@mui/material/Alert";
import { itemSearchCategory } from "../Actions/CartActions";
import { Loading, Error } from "../Pages/AlertComponent";
import Items from "./Items";

export default function Allproducts() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const grocerystate = useSelector((state) => state.getAllGroceriesReducers);
  const searchItem = useSelector((state) => state.searchItemReducer.searchItem);
  const selectedCategory = useSelector(
    (state) => state.searchCategoryReducer.selectedCategory
  );
  const { grocery, error, loading } = grocerystate;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGroceries());
  }, [dispatch]);

  const handleCategoryChange = (category) => {
    dispatch(itemSearchCategory(category));
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <Error error={<Alert severity="error">Something went wrong</Alert>} />
    );
  }

  // const groceriesToRender = grocery?.filter((item) => {
  //   const includesSearch = item.name
  //     .toLowerCase()
  //     .includes(searchItem.toLowerCase());
  //   const matchesCategory =
  //     selectedCategory === "ALL" || item.category === selectedCategory;
  //   return includesSearch && matchesCategory;
  // });

  const groceryArray = Object.values(grocery) || [];
  const groceriesToRender = groceryArray.filter((item) => {
    const includesSearch = item && item.name && item.name.toLowerCase().includes(searchItem.toLowerCase());
    const matchesCategory = selectedCategory === "ALL" || item.category === selectedCategory;
    return includesSearch && matchesCategory;
  });
  
  return (
    <div className="bg-inherit">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul className="px-2 py-3 font-medium text-gray-900 cursor-pointer">
                      <li
                        className="block rounded-lg bg-[#F54748] px-4 py-2 text-white text-sm font-medium"
                        onClick={() => handleCategoryChange}
                      >
                        All
                      </li>
                      {[...new Set(groceriesToRender.map((item) => item.category))].map(
                        (category) => (
                          <li
                            className="block rounded-lg px-4 py-2 text-sm font-medium hover:bg-[#F54748] hover:text-white"
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                          >
                            {category}
                          </li>
                        )
                      )}
                    </ul>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-white pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Search Category
            </h1>

            <div className="flex items-center">
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            {groceriesToRender.length === 0 ? (
              <p className="text-center">No result for your search criteria.</p>
            ) : (
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
                {/* Filters */}
                <form className="hidden lg:block">
                  <h3 className="sr-only">Categories</h3>
                  <ul className="space-y-4 border-b border-white rounded-lg p-2 bg-white text-sm font-medium text-[#676767] cursor-pointer">
                    <li
                      className="block rounded-lg bg-[#F54748] px-4 py-2 text-white text-sm font-medium"
                      onClick={() => handleCategoryChange("ALL")}
                    >
                      All
                    </li>
                    {[...new Set(grocery.map((item) => item.category))].map(
                      (category) => (
                        <li
                          className="block rounded-lg px-4 py-2 text-sm font-medium hover:bg-[#F54748] hover:text-white"
                          key={category}
                          onClick={() => handleCategoryChange(category)}
                        >
                          {category}
                        </li>
                      )
                    )}
                  </ul>
                </form>
                {/* Product grid */}
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 lg:col-span-4">
                  {groceriesToRender.map((groceryItem) => (
                    <Items key={groceryItem._id} items={groceryItem} />
                  ))}
                </div>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
