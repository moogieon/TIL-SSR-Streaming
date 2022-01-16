import type { NextPage } from "next";

const Content: NextPage = () => {
  /* This example requires Tailwind CSS v2.0+ */

  return (
    <article className="border-2 ">
      <div className="text-red-900 text-3xl">메인 콘텐츠</div>
      <div className="text-red-700 text-3xl">메인 콘텐츠</div>
      <div className="text-red-400 text-3xl">메인 콘텐츠</div>
      <div>
        <div className="flex items-center space-x-2 text-base">
          <h4 className="font-semibold text-gray-900">Contributors</h4>
          <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-700">
            204
          </span>
        </div>
        <div className="mt-3 flex -space-x-2 overflow-hidden">
          <img
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <img
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
            alt=""
          />
          <img
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <img
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div className="mt-3 text-sm font-medium">
          <a href="#" className="text-blue-500">
            + 198 others
          </a>
        </div>
      </div>
    </article>
  );
};

export default Content;
