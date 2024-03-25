import { Link } from "react-router-dom";


const BlogCard = ({blog}) => {
    const { description,readable_publish_date,published_at,title,cover_image,id} = blog
    return (
        <div >
             
             <Link   to={`/blog/${id}`}
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block h-[450px] hover:scale-105 rounded p-2 duration-200  delay-15 border-2 hover:border-secondary border-primary border-opacity-10"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src={cover_image}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                 {title}
                </h3>
                <span className="text-xs dark:text-gray-600">
               {new Date(published_at).toLocaleDateString()}
                </span>
                <p>
                {description}
                </p>
              </div>
            </Link>
        </div>
    );
};

export default BlogCard;