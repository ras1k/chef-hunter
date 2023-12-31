import { Link, useRouteError } from "react-router-dom";
import img from '/error-error404.gif';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  console.log(error)

  return (
    <div id="error-page" className="">
      <div className="">
        <div className='mx-auto mt-20 w-96'>
          <img src={img} className="w-96 rounded-lg" alt="" />
        </div>
        <div className="">
          <div className="text-center">
            <h1 className="mt-6 mb-4 text-2xl fond-semibold leading-7 text-red-600">
              <h3 className="text-3xl font-bold">404</h3>
              {error.data}
            </h1>
            <div className="mt-4 flex items-center justify-center gap-x-3">
              <Link to='/'>
                <button type="button" className="rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                  Back to home
                </button>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}