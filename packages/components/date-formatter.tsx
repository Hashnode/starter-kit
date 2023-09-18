import { format, parseISO } from "date-fns";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  if (!dateString) return <></>;
  const date = parseISO(dateString);

  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
};

export default DateFormatter;
