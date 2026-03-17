import {
  Select as SelectUI,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Select = () => {
  return (
    <SelectUI>
      <SelectTrigger className="w-36">
        <SelectValue placeholder="Today" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="today">Today</SelectItem>
          <SelectItem value="week">This Week</SelectItem>
          <SelectItem value="month">This Month</SelectItem>
          <SelectItem value="all">All time</SelectItem>
        </SelectGroup>
      </SelectContent>
    </SelectUI>
  );
};
