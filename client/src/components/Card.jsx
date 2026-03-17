import { Button } from "@/components/ui/button";
import {
  Card as CardUI,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Select } from "@/components/Select";

export const Card = ({ title, children }) => {
  return (
    <CardUI className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardAction>
          <Select />
        </CardAction>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </CardUI>
  );
};
