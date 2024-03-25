import { Link } from "react-router-dom";


const Bookmarks = () => {
    return (
        <div className="flex flex-col items-center min-h-screen justify-center">
           <h3 className="text-2xl font-medium">No Bookmarks Found

</h3> 
  <Link
           to ='/blogs'
           class="relative inline-block px-4 py-2 font-medium group mt-2"
         >
           <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
           <span class="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
           <span class="relative text-black group-hover:text-white">
            Browse Blogs
           </span>
         </Link>
        </div>
    );
};

export default Bookmarks;