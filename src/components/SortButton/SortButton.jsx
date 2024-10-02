import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SortButton() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort</SelectLabel>
          <SelectItem value="latest">Latest</SelectItem>
          <SelectItem value="top">Top Selling</SelectItem>
          <SelectItem value="low-High">Price Low - High</SelectItem>
          <SelectItem value="high-Low">Price High - Low</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default SortButton;
