import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { Badge, BellRing, Check, TrendingDownIcon, TrendingUpIcon } from "lucide-react";
type CardProps = React.ComponentProps<typeof Card>
const HomePage = ({ className, ...props }: CardProps) => {
  const notifications = [
    {
      title: "Your call has been confirmed.",
      description: "1 hour ago",
    },
    {
      title: "You have a new message!",
      description: "1 hour ago",
    },
    {
      title: "Your subscription is expiring soon!",
      description: "2 hours ago",
    },
  ];
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6">
            <Card className="@container/card">
              <CardHeader className="relative">
                <CardDescription>Total Revenue</CardDescription>
                <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                  $1,250.00
                </CardTitle>
                <div className="absolute right-4 top-4">
                  <Badge className="flex gap-1 rounded-lg text-xs">
                    <TrendingUpIcon className="size-3" />
                    +12.5%
                  </Badge>
                </div>
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                  Trending up this month <TrendingUpIcon className="size-4" />
                </div>
                <div className="text-muted-foreground">
                  Visitors for the last 6 months
                </div>
              </CardFooter>
            </Card>
            <Card className="@container/card">
              <CardHeader className="relative">
                <CardDescription>New Customers</CardDescription>
                <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                  1,234
                </CardTitle>
                <div className="absolute right-4 top-4">
                  <Badge className="flex gap-1 rounded-lg text-xs">
                    <TrendingDownIcon className="size-3" />
                    -20%
                  </Badge>
                </div>
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                  Down 20% this period <TrendingDownIcon className="size-4" />
                </div>
                <div className="text-muted-foreground">
                  Acquisition needs attention
                </div>
              </CardFooter>
            </Card>
            <Card className="@container/card">
              <CardHeader className="relative">
                <CardDescription>Active Accounts</CardDescription>
                <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                  45,678
                </CardTitle>
                <div className="absolute right-4 top-4">
                  <Badge className="flex gap-1 rounded-lg text-xs">
                    <TrendingUpIcon className="size-3" />
                    +12.5%
                  </Badge>
                </div>
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                  Strong user retention <TrendingUpIcon className="size-4" />
                </div>
                <div className="text-muted-foreground">
                  Engagement exceed targets
                </div>
              </CardFooter>
            </Card>
            <Card className="@container/card">
              <CardHeader className="relative">
                <CardDescription>Growth Rate</CardDescription>
                <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                  4.5%
                </CardTitle>
                <div className="absolute right-4 top-4">
                  <Badge className="flex gap-1 rounded-lg text-xs">
                    <TrendingUpIcon className="size-3" />
                    +4.5%
                  </Badge>
                </div>
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                  Steady performance <TrendingUpIcon className="size-4" />
                </div>
                <div className="text-muted-foreground">
                  Meets growth projections
                </div>
              </CardFooter>
            </Card>
            <Card className={cn("w-[380px]", className)} {...props}>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>You have 3 unread messages.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className=" flex items-center space-x-4 rounded-md border p-4">
                  <BellRing />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Push Notifications
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Send notifications to device.
                    </p>
                  </div>
                  <Switch />
                </div>
                <div>
                  {notifications.map((notification, index) => (
                    <div
                      key={index}
                      className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                    >
                      <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {notification.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {notification.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Check /> Mark all as read
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
