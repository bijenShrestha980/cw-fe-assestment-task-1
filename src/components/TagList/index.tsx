import { Badge } from "@/components/ui/badge";
import type { TagListPropsType } from "./types";

const TagList = (props: TagListPropsType) => {
  const { title, tags } = props;

  return (
    <section className="mt-8 px-6 max-w-5xl mx-auto" aria-label={title}>
      <h2 className="text-white text-lg font-semibold mb-4">{title}</h2>
      <ul className="flex flex-wrap gap-3" role="list">
        {tags.map((tag) => (
          <Badge
            className="bg-gray-800 text-white hover:bg-gray-700 cursor-pointer"
            key={tag}
          >
            {tag}
          </Badge>
        ))}
      </ul>
    </section>
  );
};

export default TagList;
