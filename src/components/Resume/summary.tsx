import { PencilSquareIcon } from '@heroicons/react/24/outline';
import CustomTypography from '@/components/UI/Typography';

type SummaryProps = {
  propData: {
    title?: string;
    desc?: string;
  };
};

export function Summary({ propData }: SummaryProps) {
  const { title, desc } = propData;

  return (
    <section className="m-2 p-2 lg:m-4 lg:p-4">
      <header className="mb-3 flex items-center gap-1 border-b-2">
        <PencilSquareIcon
          className="size-8 text-yellow-800"
          aria-label="Summary Icon"
        />
        <CustomTypography
          placeholder="Summary Title"
          variant="h3"
          color="indigo"
          textGradient
        >
          {title}
        </CustomTypography>
      </header>

      <article className="ml-3">
        <CustomTypography
          placeholder="Summary Description"
          variant="paragraph"
          color="blue-gray"
          textGradient
        >
          {desc}
        </CustomTypography>
      </article>
    </section>
  );
}
